from rest_framework import serializers
from decimal import Decimal

from api.apps.pedidos.models import Pedido, ItemPedido
from api.apps.catalogo.models import Produto


class ItemPedidoSerializer(serializers.ModelSerializer):
    produto_nome = serializers.CharField(source="produto.nome", read_only=True)

    class Meta:
        model = ItemPedido
        fields = [
            "id",
            "pedido",
            "produto",
            "produto_nome",
            "quantidade",
            "preco_unitario",
            "subtotal",
        ]


class PedidoSerializer(serializers.ModelSerializer):
    itens = ItemPedidoSerializer(many=True, read_only=True)
    cliente_nome = serializers.SerializerMethodField()
    loja_nome = serializers.CharField(source="loja.nome", read_only=True)

    class Meta:
        model = Pedido
        fields = [
            "id",
            "cliente",
            "cliente_nome",
            "loja",
            "loja_nome",
            "canal",
            "status",
            "valor_total",
            "criado_em",
            "atualizado_em",
            "itens",
        ]

    def get_cliente_nome(self, obj):
        return obj.cliente.username if obj.cliente else None


class ItemPedidoCreateSerializer(serializers.Serializer):
    produto = serializers.IntegerField()
    quantidade = serializers.IntegerField(min_value=1)


class PedidoCreateSerializer(serializers.Serializer):
    loja = serializers.IntegerField()
    canal = serializers.ChoiceField(choices=Pedido.CANAIS)
    itens = ItemPedidoCreateSerializer(many=True)

    def create(self, validated_data):
        request = self.context["request"]
        cliente = request.user

        print("CLIENTE LOGADO:", cliente)
        print("ID CLIENTE:", cliente.id)

        loja_id = validated_data["loja"]
        canal = validated_data["canal"]
        itens_data = validated_data["itens"]

        pedido = Pedido.objects.create(
            cliente=cliente,
            loja_id=loja_id,
            canal=canal,
            status="CRIADO",
            valor_total=Decimal("0.00"),
        )

        total = Decimal("0.00")

        print("PEDIDO CRIADO:", pedido.id, "CLIENTE:", pedido.cliente_id)

        for item in itens_data:
            produto = Produto.objects.get(id=item["produto"])
            quantidade = item["quantidade"]
            preco_unitario = produto.preco
            subtotal = preco_unitario * quantidade

            ItemPedido.objects.create(
                pedido=pedido,
                produto=produto,
                quantidade=quantidade,
                preco_unitario=preco_unitario,
                subtotal=subtotal,
            )

            total += subtotal

        pedido.valor_total = total
        pedido.save()

        return pedido