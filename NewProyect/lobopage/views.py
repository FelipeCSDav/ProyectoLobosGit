from django.shortcuts import render, redirect
#Importar los modelos
from .models import Alumno,Genero,Producto
from django.contrib.auth.decorators import login_required #Importante para login


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

def loginRegistro(request):
    context = {}
    return render(request, 'registration/loginRegistro.html', context)

def compra(request):
    productos = Producto.objects.all()
    context = {'productos' : productos , 'porIds' : [1,2,3]}
    return render(request, 'lobopage/compra.html', context)

@login_required
def crudProductos(request):
    # request.session["usuario"]="admin"
    # usuario=request.session["usuario"]
    if request.user.username != "admin":
        return redirect('index')
    productos = Producto.objects.all()
    context = {'productos': productos}
    return render(request, 'lobopage/productos_list.html', context)

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

def productos_FindEdit(request, pk): #pk es donde recibe el id del producto como parametro
    if pk != "": #Si el pk que recibe NO esta vacio try en caso contrario except
        try:
            producto = Producto.objects.get(id=pk) # se guarda en producto el objeto que tenga en el campo id el mismo valor que pk
            context = {'producto': producto} #Diccionario para que despues con 'producto' se utilize en las plantillas
            return render(request, 'lobopage/productos_edit.html', context)
        
        except Producto.DoesNotExist: # En caso de que no exista
            context = {'mensaje': "Error, el producto no existe"}
            return render(request, 'lobopage/productos_list.html', context) #Envia mensaje pero a la ruta list

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




def crud(request):
    alumnos = Alumno.objects.all()
    context = {'alumnos': alumnos}
    return render(request, 'lobopage/alumnos_list.html', context)

def alumnosAdd(request):
    if request.method != "POST":
        #no es un POST, por lo tanto se muestra el formulario para agregar
        generos=Genero.objects.all()
        context = {'generos': generos}
        return render(request, 'lobopage/alumnos_add.html', context)
    else:
        #Es un POST, por lo tanto se recuperan los datos del formulario
        #y se graban en la tabla.

        rut=request.POST["rut"]
        nombre=request.POST["nombre"]
        aPaterno=request.POST["paterno"]
        aMaterno=request.POST["materno"]
        fechaNac=request.POST["fechaNac"]
        genero=request.POST["genero"]
        telefono=request.POST["telefono"]
        email=request.POST["email"]
        direccion=request.POST["direccion"]
        activo="1"

        objGenero=Genero.objects.get(id_genero = genero)
        obj=Alumno.objects.create ( rut=rut,
                                    nombre=nombre,
                                    apellido_paterno=aPaterno,
                                    apellido_materno=aMaterno,
                                    fecha_nacimiento=fechaNac,
                                    id_genero=objGenero,
                                    telefono=telefono,
                                    email=email,
                                    direccion=direccion,
                                    activo=1 )
        obj.save()
        context={'mensaje' : "Ok , datos grabados..."}
        return render(request, 'lobopage/alumnos_add.html', context)
    

def alumnosDel(request, pk):
        context = {}
        try:
            alumno=Alumno.objects.get(rut=pk)

            alumno.delete()
            mensaje="Bien, datos eliminados.."
            alumnos=Alumno.objects.all()
            context = {'alumnos':alumnos, 'mensaje':mensaje}
            return render(request, 'lobopage/alumnos_list.html', context)        
        except:
            mensaje="Error, rut no existe..."
            alumnos = Alumno.objects.all()
            context = {'alumnos' : alumnos, 'mensaje':mensaje}
            return render(request, 'lobopage/alumnos_list.html', context)


def alumnos_findEdit(request, pk):

    if pk != "":
        alumno=Alumno.objects.get(rut=pk)
        generos=Genero.objects.all()

        print(type(alumno.id_genero.genero))
        context = {'alumno' : alumno, 'generos':generos}
        if alumno:
            return render(request, 'lobopage/alumnos_edit.html', context)
        else:
            context = {'mensaje' : "Error, rut no existe..."}
            return render(request, 'lobopage/alumnos_list.html', context)
        
        
def alumnosUpdate(request):
    if request.method == "POST":
        # Es un POST, por lo tanto se recuperan los datos del formulario
        # y se graban en la tabla.
        
        rut = request.POST["rut"]
        nombre = request.POST["nombre"]
        aPaterno = request.POST["paterno"]
        aMaterno = request.POST["materno"]
        fechaNac = request.POST["fechaNac"]
        genero = request.POST["genero"]
        telefono = request.POST["telefono"]
        email = request.POST["email"]
        direccion = request.POST["direccion"]
        activo = 1  # Asignar como entero
        
        objGenero = Genero.objects.get(id_genero=genero)
        
        alumno = Alumno()
        alumno.rut = rut
        alumno.nombre = nombre
        alumno.apellido_paterno = aPaterno
        alumno.apellido_materno = aMaterno
        alumno.fecha_nacimiento = fechaNac
        alumno.id_genero = objGenero
        alumno.telefono = telefono
        alumno.email = email
        alumno.direccion = direccion
        alumno.activo = activo
        alumno.save()
        
        generos = Genero.objects.all()
        context = {'mensaje': "Ok, datos actualizados...", 'generos': generos, 'alumno': alumno}
        return render(request, 'lobopage/alumnos_edit.html', context)
    else:
        # No es un POST, por lo tanto se muestra el formulario para agregar.
        alumnos = Alumno.objects.all()
        context = {'alumnos': alumnos}
        return render(request, 'lobopage/alumnos_list.html', context)

    
