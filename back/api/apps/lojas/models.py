from django.db import models


class Loja(models.Model):
    nome = models.CharField(max_length=150)
    endereco = models.CharField(max_length=255)
    cidade = models.CharField(max_length=100)
    estado = models.CharField(max_length=2)
    ativa = models.BooleanField(default=True)

    def __str__(self):
        return self.nome