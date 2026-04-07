from rest_framework import serializers
from .models import Categoria, Produto, EstoqueLoja


class CategoriaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Categoria
        fields = '__all__'


class ProdutoSerializer(serializers.ModelSerializer):
    categoria_nome = serializers.CharField(source='categoria.nome', read_only=True)

    class Meta:
        model = Produto
        fields = '__all__'


class EstoqueLojaSerializer(serializers.ModelSerializer):
    produto_nome = serializers.CharField(source='produto.nome', read_only=True)
    loja_nome = serializers.CharField(source='loja.nome', read_only=True)

    class Meta:
        model = EstoqueLoja
        fields = '__all__'