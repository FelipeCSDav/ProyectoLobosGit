from django.urls import path
from . import views

urlpatterns = [
    #Pagina web
    path('index', views.index, name='index'),
    path('mitologia', views.mitologia, name='mitologia'),
    path('nosotros', views.nosotros, name='nosotros'),
    path('loginSesion', views.loginSesion, name='loginSesion'),
    path('loginRegistro', views.loginRegistro, name='loginRegistro'),
    path('compra', views.compra, name='compra'),

    #Productos
    path('crudProductos', views.crudProductos, name='crudProductos'),
    path('productosAdd', views.productosAdd, name='productosAdd'),
    path('productosDel/<str:pk>', views.productosDel, name='productosDel'),
    path('productos_FindEdit/<str:pk>', views.productos_FindEdit, name='productos_FindEdit'),
    path('productosUpdate', views.productosUpdate, name='productosUpdate'),

    path('crud', views.crud, name='crud'),
    path('alumnosAdd', views.alumnosAdd, name='alumnosAdd'),
    path('alumnosDel/<str:pk>', views.alumnosDel, name='alumnosDel'), #Acá llega el rut del alumno y reenvía a la función alumnos_del.
    path('alumnos_findEdit/<str:pk>', views.alumnos_findEdit, name='alumnos_findEdit'),
    path('alumnosUpdate', views.alumnosUpdate, name='alumnosUpdate'),

]
