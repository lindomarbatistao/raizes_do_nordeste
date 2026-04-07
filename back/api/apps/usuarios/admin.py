from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import Usuario

@admin.register(Usuario)
class UsuarioAdmin(UserAdmin):
    model = Usuario

    list_display = ("username", "email", "tipo", "is_staff")

    fieldsets = UserAdmin.fieldsets + (
        ("Informações adicionais", {"fields": ("tipo",)}),
    )