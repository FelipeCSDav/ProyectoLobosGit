from django.db import models

# Create your models here.
#Primero crear los modelos y luego se generan los archivos de migracion para crear las tablas

class Producto(models.Model):
    #No es necesario crear un id porque lo genera Django automaticamente
    nombre = models.CharField(max_length=50)
    precio = models.IntegerField()
    descripcion = models.TextField(blank=True, null=True)
    imagen = models.ImageField(upload_to="productos", blank=True, null=True)
    def __str__(self): #Nombre que se mostrara en el admin de django por cada producto
        return self.nombre

class Cliente(models.Model):
    nombre = models.CharField(max_length=50, blank=False, null=False)
    rut = models.CharField(max_length=10, blank=False, null=False)
    correo = models.EmailField(unique=True, blank=False, null=False)
    contraseña = models.CharField(max_length=20, blank=False, null=False)

    def __str__(self):
        return str(self.nombre)
  
"""class Carrito(models.Model):
    cliente = models.OneToOneField(Cliente, on_delete=models.CASCADE)
    creado = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'Carrito de {self.cliente.nombre}'

class ElementoCarrito(models.Model):
    carrito = models.ForeignKey(Carrito, on_delete=models.CASCADE)
    producto = models.ForeignKey(Producto, on_delete=models.CASCADE)
    cantidad = models.PositiveIntegerField(default=1)

    def __str__(self):
        return f'{self.cantidad} x {self.producto.nombre} en {self.carrito}"""
    

#Pruebas
class Genero(models.Model):
    id_genero  = models.AutoField(db_column='idGenero', primary_key=True) 
    genero     = models.CharField(max_length=20, blank=False, null=False)

    def __str__(self):
        return str(self.genero)
  

class Alumno(models.Model):
    rut              = models.CharField(primary_key=True, max_length=10)
    nombre           = models.CharField(max_length=20)
    apellido_paterno = models.CharField(max_length=20)
    apellido_materno = models.CharField(max_length=20)
    fecha_nacimiento = models.DateField(blank=False, null=False) 
    id_genero        = models.ForeignKey('Genero',on_delete=models.CASCADE, db_column='idGenero')  
    telefono         = models.CharField(max_length=45)
    email            = models.EmailField(unique=True, max_length=100, blank=True, null=True)
    direccion        = models.CharField(max_length=50, blank=True, null=True)  
    activo           = models.IntegerField()

    def __str__(self):
        return str(self.nombre)+" "+str(self.apellido_paterno)   
