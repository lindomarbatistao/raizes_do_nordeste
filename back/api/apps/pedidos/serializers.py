from rest_framework import serializers
from django.db import transaction

from api.apps.pedidos.models import Pedido, ItemPedido
from api.apps.catalogo.models import Produto, EstoqueLoja
from api.apps.fidelidade.models import Fidelidade


class ItemPedidoCreateSerializer(serializers.Serializer):
    produto = serializers.IntegerField()
    quantidade = serializers.IntegerField(min_value=1)


class ItemPedidoSerializer(serializers.ModelSerializer):
    produto_nome = serializers.CharField(source='produto.nome', read_only=True)

    class Meta:
        model = ItemPedido
        fields = ['id', 'produto', 'produto_nome', 'quantidade', 'preco_unitario', 'subtotal']


class PedidoSerializer(serializers.ModelSerializer):
    itens = ItemPedidoSerializer(many=True, read_only=True)
    cliente_username = serializers.CharField(source='cliente.username', read_only=True)
    loja_nome = serializers.CharField(source='loja.nome', read_only=True)

    class Meta:
        model = Pedido
        fields = [
            'id',
            'cliente',
            'cliente_username',
            'loja',
            'loja_nome',
            'canal',
            'status',
            'valor_total',
            'criado_em',
            'atualizado_em',
            'itens',
        ]
        read_only_fields = ['cliente', 'status', 'valor_total', 'criado_em', 'atualizado_em']


class PedidoCreateSerializer(serializers.Serializer):
    loja = serializers.IntegerField()
    canal = serializers.ChoiceField(choices=Pedido.CANAIS)
    itens = ItemPedidoCreateSerializer(many=True)

    @transaction.atomic
    def create(self, validated_data):
        request = self.context['request']
        cliente = request.user

        loja_id = validated_data['loja']
        itens_data = validated_data['itens']
        canal = validated_data['canal']

        pedido = Pedido.objects.create(
            cliente=cliente,
            loja_id=loja_id,
            canal=canal,
            status='CRIADO',
            valor_total=0
        )

        valor_total = 0

        for item in itens_data:
            produto_id = item['produto']
            quantidade = item['quantidade']

            try:
                produto = Produto.objects.get(id=produto_id, ativo=True)
            except Produto.DoesNotExist:
                raise serializers.ValidationError(f'Produto {produto_id} não encontrado ou inativo.')

            try:
                estoque = EstoqueLoja.objects.get(loja_id=loja_id, produto_id=produto_id, disponivel=True)
            except EstoqueLoja.DoesNotExist:
                raise serializers.ValidationError(
                    f'O produto "{produto.nome}" não está disponível nesta loja.'
                )

            if estoque.quantidade < quantidade:
                raise serializers.ValidationError(
                    f'Estoque insuficiente para o produto "{produto.nome}".'
                )

            preco_unitario = produto.preco
            subtotal = preco_unitario * quantidade
            valor_total += subtotal

            ItemPedido.objects.create(
                pedido=pedido,
                produto=produto,
                quantidade=quantidade,
                preco_unitario=preco_unitario,
                subtotal=subtotal,
            )

            estoque.quantidade -= quantidade
            if estoque.quantidade == 0:
                estoque.disponivel = False
            estoque.save()

        pedido.valor_total = valor_total
        pedido.save()

        fidelidade, _ = Fidelidade.objects.get_or_create(cliente=cliente)
        fidelidade.pontos += int(valor_total // 10)
        fidelidade.save()

        return pedido

    def to_representation(self, instance):
        return PedidoSerializer(instance, context=self.context).data