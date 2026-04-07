from django.db import models
from .models import Usuario, Loja, Produto

class Pedido(models.Model):
    STATUS = (
        ('CRIADO', 'Criado'),
        ('PAGO', 'Pago'),
        ('EM_PREPARO', 'Em preparo'),
        ('PRONTO', 'Pronto'),
        ('ENTREGUE', 'Entregue'),
        ('CANCELADO', 'Cancelado'),
    )

    CANAIS = (
        ('WEB', 'Web'),
        ('MOBILE', 'Mobile'),
        ('TOTEM', 'Totem'),
        ('BALCAO', 'Balcão'),
    )

    cliente = models.ForeignKey(Usuario, on_delete=models.CASCADE, related_name='pedidos')
    loja = models.ForeignKey(Loja, on_delete=models.CASCADE, related_name='pedidos')
    canal = models.CharField(max_length=20, choices=CANAIS)
    status = models.CharField(max_length=20, choices=STATUS, default='CRIADO')
    valor_total = models.DecimalField(max_digits=10, decimal_places=2, default=0)
    criado_em = models.DateTimeField(auto_now_add=True)
    atualizado_em = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f'Pedido #{self.id}'


class ItemPedido(models.Model):
    pedido = models.ForeignKey(Pedido, on_delete=models.CASCADE, related_name='itens')
    produto = models.ForeignKey(Produto, on_delete=models.CASCADE)
    quantidade = models.PositiveIntegerField(default=1)
    preco_unitario = models.DecimalField(max_digits=10, decimal_places=2)
    subtotal = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return f'{self.produto.nome} - Pedido #{self.pedido.id}'