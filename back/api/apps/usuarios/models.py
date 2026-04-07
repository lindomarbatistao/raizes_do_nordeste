from django.contrib.auth.models import AbstractUser
from django.db import models


class Usuario(AbstractUser):
    TIPOS = (
        ('CLIENTE', 'Cliente'),
        ('ADMIN', 'Administrador'),
    )

    tipo = models.CharField(max_length=20, choices=TIPOS, default='CLIENTE')
    telefone = models.CharField(max_length=20, blank=True, null=True)
    cpf = models.CharField(max_length=14, blank=True, null=True, unique=True)

    def __str__(self):
        return self.username