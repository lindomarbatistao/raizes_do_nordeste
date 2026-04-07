from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import status

from api.apps.pedidos.models import Pedido, ItemPedido
from api.apps.pedidos.serializers import (
    PedidoSerializer,
    ItemPedidoSerializer,
    PedidoCreateSerializer,
)


class PedidoViewSet(ModelViewSet):
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        if user.tipo == 'ADMIN':
            return Pedido.objects.all().order_by('-id')
        return Pedido.objects.filter(cliente=user).order_by('-id')

    def get_serializer_class(self):
        if self.action == 'create':
            return PedidoCreateSerializer
        return PedidoSerializer

    def create(self, request, *args, **kwargs):
        serializer = PedidoCreateSerializer(data=request.data, context={'request': request})
        serializer.is_valid(raise_exception=True)
        pedido = serializer.save()
        output = PedidoSerializer(pedido, context={'request': request})
        return Response(output.data, status=status.HTTP_201_CREATED)


class ItemPedidoViewSet(ModelViewSet):
    queryset = ItemPedido.objects.all().order_by('-id')
    serializer_class = ItemPedidoSerializer
    permission_classes = [IsAuthenticated]