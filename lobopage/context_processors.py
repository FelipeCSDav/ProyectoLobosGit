#Diccionario de datos que estará disponible en el contexto de todas las plantillas renderizadas por tu aplicación.
#En tu archivo settings.py, añade el nuevo context processor a la lista de context_processors:

from django.db.models import Sum
from .models import CarritoItem

def cantidad_total_carrito(request):
    total_cantidad_productos = 0
    if request.user.is_authenticated:
        total_cantidad_productos = CarritoItem.objects.filter(usuario=request.user).aggregate(total=Sum('cantidad'))['total'] or 0
    return {'total_cantidad_productos': total_cantidad_productos}

