from django.db import models
from .models import Usuario


class Fidelidade(models.Model):
    cliente = models.OneToOneField(Usuario, on_delete=models.CASCADE, related_name='fidelidade')
    pontos = models.IntegerField(default=0)

    def __str__(self):
        return f'{self.cliente.username} - {self.pontos} pontos'