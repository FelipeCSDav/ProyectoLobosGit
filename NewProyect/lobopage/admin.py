from django.contrib import admin

# Register your models here.

from django.contrib import admin
#Una vez migrado los datos importamos los modelos y los registramos
from .models import Genero, Alumno, Producto

# Register your models here.
admin.site.register(Producto)
admin.site.register(Genero)
admin.site.register(Alumno)


