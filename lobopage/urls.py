from django.urls import path
from . import views

urlpatterns = [
    #Pagina web
    path('index', views.index, name='index'),
    path('mitologia', views.mitologia, name='mitologia'),
    path('nosotros', views.nosotros, name='nosotros'),
    path('loginSesion', views.loginSesion, name='loginSesion'),
    path('registro', views.registro, name='registro'),
    path('compra', views.compra, name='compra'),

    path('agregar_al_carrito/<int:producto_id>/', views.agregar_al_carrito, name='agregar_al_carrito'),
    path('actualizar_carrito/<int:item_id>/<str:accion>/', views.actualizar_carrito, name='actualizar_carrito'),
    path('eliminar_del_carrito/<int:item_id>/', views.eliminar_del_carrito, name='eliminar_del_carrito'),

    #Productos
    path('crudProductos', views.crudProductos, name='crudProductos'),
    path('productosAdd', views.productosAdd, name='productosAdd'),
    path('productosDel/<str:pk>', views.productosDel, name='productosDel'),
    path('productos_FindEdit/<str:pk>', views.productos_FindEdit, name='productos_FindEdit'),
    path('productosUpdate', views.productosUpdate, name='productosUpdate'),
]
