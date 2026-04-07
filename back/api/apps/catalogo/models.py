from django.db import models
from .models import Loja


class Categoria(models.Model):
    nome = models.CharField(max_length=100)

    def __str__(self):
        return self.nome


class Produto(models.Model):
    nome = models.CharField(max_length=150)
    descricao = models.TextField(blank=True, null=True)
    preco = models.DecimalField(max_digits=10, decimal_places=2)
    categoria = models.ForeignKey(Categoria, on_delete=models.CASCADE, related_name='produtos')
    imagem = models.URLField(blank=True, null=True)
    ativo = models.BooleanField(default=True)

    def __str__(self):
        return self.nome


class EstoqueLoja(models.Model):
    loja = models.ForeignKey(Loja, on_delete=models.CASCADE, related_name='estoques')
    produto = models.ForeignKey(Produto, on_delete=models.CASCADE, related_name='estoques')
    quantidade = models.IntegerField(default=0)
    disponivel = models.BooleanField(default=True)

    class Meta:
        unique_together = ('loja', 'produto')

    def __str__(self):
        return f'{self.loja.nome} - {self.produto.nome}'