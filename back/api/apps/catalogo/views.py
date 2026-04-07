from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from .models import Categoria, Produto, EstoqueLoja
from .serializers import CategoriaSerializer, ProdutoSerializer, EstoqueLojaSerializer


class CategoriaViewSet(ModelViewSet):
    queryset = Categoria.objects.all()
    serializer_class = CategoriaSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]


class ProdutoViewSet(ModelViewSet):
    queryset = Produto.objects.all()
    serializer_class = ProdutoSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]


class EstoqueLojaViewSet(ModelViewSet):
    queryset = EstoqueLoja.objects.all()
    serializer_class = EstoqueLojaSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]