from django import forms 
from .models import Producto
from django.forms import ModelForm 

from django.contrib.auth.forms import UserCreationForm


class CustomUserCreationForm(UserCreationForm):
    pass


#Sirve para poner placeholder
from django.contrib.auth.models import User
class CustomUserCreationForm(UserCreationForm):
    username = forms.CharField(
        widget=forms.TextInput(attrs={'placeholder': 'Nombre de usuario'})
    )
    email = forms.CharField(
        widget=forms.TextInput(attrs={'placeholder': 'Dirección de correo'})
    )
    password1 = forms.CharField(
        widget=forms.PasswordInput(attrs={'placeholder': 'Contraseña'})
    )
    password2 = forms.CharField(
        widget=forms.PasswordInput(attrs={'placeholder': 'Confirmar contraseña'})
    )

    class Meta:
        model = User
        fields = ['username', 'email', 'password1', 'password2']



