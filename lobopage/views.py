from django.shortcuts import render, redirect, get_object_or_404
#Importar los modelos
from .models import Producto, CarritoItem
from django.contrib.auth.decorators import login_required #Importante para login
from django.contrib.admin.views.decorators import staff_member_required
from .forms import CustomUserCreationForm
from django.contrib.auth import authenticate, login
from django.db.models import Sum  # Asegúrate de tener esta línea de importación

# Create your views here.
def index(request):
    productos = Producto.objects.all()  #En vez de usar Select * from, esto hace la consulta y los datos pasan a una lista
    context = {"productos" : productos} #Enviar en un diccionario de datos
    return render(request, 'lobopage/index.html', context) #Renderizar los datos y el diccionario

def mitologia(request):
    context = {}
    return render(request, 'lobopage/mitologia.html', context)

def nosotros(request):
    context = {}
    return render(request, 'lobopage/nosotros.html', context)

def loginSesion(request):
    context = {}
    return render(request, 'lobopage/loginSesion.html', context)

def compra(request):
    productos = Producto.objects.all()
    context = {'productos' : productos , 'porIds' : [1,2,3]}
    return render(request, 'lobopage/compra.html', context)


def registro(request):
    context = {
        'form': CustomUserCreationForm()
        }

    if request.method == 'POST':
        formulario = CustomUserCreationForm(data=request.POST)#tiene que ser data
        if formulario.is_valid():
            formulario.save()
            user = authenticate(username=formulario.cleaned_data["username"], password=formulario.cleaned_data["password1"])
            login(request, user)
            return redirect(to="index")
        context["form"] = formulario    
    return render(request, 'registration/registro.html', context)


#Administradores
@login_required
@staff_member_required
def crudProductos(request):
    # request.session["usuario"]="admin"
    # usuario=request.session["usuario"]

    productos = Producto.objects.all()
    context = {'productos': productos}
    return render(request, 'lobopage/productos_list.html', context)

@login_required
@staff_member_required
def productosAdd(request):
    if request.method != "POST":
        #No es un POST, por lo tanto se muestra el formulario para agregar
        context = {}
        return render(request, 'lobopage/productos_add.html', context)
    else:
        #Es un POST, por lo tanto se recuperan los datos del formulario
        #y se graban en la tabla.     
        nombre=request.POST["nombre"]
        precio=request.POST["precio"]
        descripcion=request.POST["descripcion"]
        
        imagen = request.FILES.get("imagen")


        # Crear el objeto Producto con o sin imagen
        if imagen:
            obj = Producto.objects.create(
                nombre=nombre,
                precio=precio,
                descripcion=descripcion,
                imagen=imagen
            )
        else:
            obj = Producto.objects.create(
                nombre=nombre,
                precio=precio,
                descripcion=descripcion
            )
            
  
        obj.save()
        context={'mensaje' : "Datos grabados correctamente..."}
        return render(request, 'lobopage/productos_add.html', context)

@login_required
@staff_member_required
def productosDel(request, pk):
        context = {}
        try:
            producto=Producto.objects.get(id=pk)

            producto.delete()
            mensaje="Producto eliminado exitosamente"
            productos=Producto.objects.all()
            context = {'productos':productos, 'mensaje':mensaje}
            return render(request, 'lobopage/productos_list.html', context)        
        except:
            mensaje="Error, producto no existe"
            productos = Producto.objects.all()
            context = {'productos' : productos, 'mensaje':mensaje}
            return render(request, 'lobopage/productos_list.html', context)

@login_required
@staff_member_required
def productos_FindEdit(request, pk): #pk es donde recibe el id del producto como parametro
    if pk != "": #Si el pk que recibe NO esta vacio try en caso contrario except
        try:
            producto = Producto.objects.get(id=pk) # se guarda en producto el objeto que tenga en el campo id el mismo valor que pk
            context = {'producto': producto} #Diccionario para que despues con 'producto' se utilize en las plantillas
            return render(request, 'lobopage/productos_edit.html', context)
        
        except Producto.DoesNotExist: # En caso de que no exista
            context = {'mensaje': "Error, el producto no existe"}
            return render(request, 'lobopage/productos_list.html', context) #Envia mensaje pero a la ruta list

@login_required
@staff_member_required
def productosUpdate(request):
    if request.method == "POST":
        # Es un POST, por lo tanto se recuperan los datos del formulario
        # y se graban en la tabla.

        id =  request.POST["id"]
        nombreNew = request.POST["nombre"]
        precioNew = request.POST["precio"]
        descripcionNew = request.POST["descripcion"]
        imagenNew = request.FILES.get("imagen")

        producto = Producto()
        producto.id = id
        producto.nombre = nombreNew
        producto.precio = precioNew
        producto.descripcion = descripcionNew
        producto.imagen = imagenNew

        producto.save()
        
        context = {'mensaje': "Datos actualizados...", 'producto': producto}
        return render(request, 'lobopage/productos_edit.html', context)
    else:
        # No es un POST, por lo tanto se muestra el formulario para agregar.
        productos = Producto.objects.all()
        context = {'productos': productos}
        return render(request, 'lobopage/productos_list.html', context)


    
@login_required
def agregar_al_carrito(request, producto_id):
    producto = get_object_or_404(Producto, id=producto_id)
    carrito_item, created = CarritoItem.objects.get_or_create(
        producto=producto,
        usuario=request.user,
    )
    if not created:
        carrito_item.cantidad += 1
        carrito_item.save()
    return redirect('index')


@login_required
def compra(request):
    carrito_items = CarritoItem.objects.filter(usuario=request.user)
    total_carrito = sum(item.subtotal() for item in carrito_items)
    productos = Producto.objects.all()
    context = {
        'carrito_items': carrito_items,
        'total_carrito': total_carrito,
        'porIds' : [1,2,3],
        'productos' : productos
    }
    return render(request, 'lobopage/compra.html', context)

@login_required
def actualizar_carrito(request, item_id, accion):
    carrito_item = get_object_or_404(CarritoItem, id=item_id, usuario=request.user)
    if accion == 'incrementar':
        carrito_item.cantidad += 1
    elif accion == 'decrementar' and carrito_item.cantidad > 1:
        carrito_item.cantidad -= 1
    carrito_item.save()
    return redirect('compra')