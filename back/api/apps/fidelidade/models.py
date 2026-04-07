from django.db import models


class Fidelidade(models.Model):
    cliente = models.OneToOneField('usuarios.Usuario', on_delete=models.CASCADE, related_name='fidelidade')
    pontos = models.IntegerField(default=0)

    def __str__(self):
        return f'{self.cliente_id} - {self.pontos} pontos'