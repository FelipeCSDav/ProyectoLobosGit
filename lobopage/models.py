from django.db import models
from django.contrib.auth.models import User
from django.db.models import Sum

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

  

class CarritoItem(models.Model):
    producto = models.ForeignKey(Producto, on_delete=models.CASCADE)
    cantidad = models.IntegerField(default=1)
    usuario = models.ForeignKey(User, on_delete=models.CASCADE)

    def subtotal(self):
        return self.producto.precio * self.cantidad

    def __str__(self):
        return f"{self.cantidad} x {self.producto.nombre}"
    
