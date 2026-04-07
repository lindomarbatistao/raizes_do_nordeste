from django.db import models


class Pagamento(models.Model):
    STATUS = (
        ('PENDENTE', 'Pendente'),
        ('APROVADO', 'Aprovado'),
        ('RECUSADO', 'Recusado'),
    )

    METODOS = (
        ('PIX', 'Pix'),
        ('CARTAO', 'Cartão'),
        ('DINHEIRO', 'Dinheiro'),
    )

    pedido = models.OneToOneField('pedidos.Pedido', on_delete=models.CASCADE, related_name='pagamento')
    metodo = models.CharField(max_length=20, choices=METODOS)
    status = models.CharField(max_length=20, choices=STATUS, default='PENDENTE')
    valor = models.DecimalField(max_digits=10, decimal_places=2)
    transacao_id = models.CharField(max_length=100, blank=True, null=True)
    criado_em = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'Pagamento do Pedido #{self.pedido_id}'