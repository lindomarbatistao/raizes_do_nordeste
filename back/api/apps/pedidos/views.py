from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import IsAuthenticated
from .models import Pedido, ItemPedido
from .serializers import PedidoSerializer, ItemPedidoSerializer


class PedidoViewSet(ModelViewSet):
    serializer_class = PedidoSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        if user.tipo == 'ADMIN':
            return Pedido.objects.all()
        return Pedido.objects.filter(cliente=user)

    def perform_create(self, serializer):
        serializer.save(cliente=self.request.user)


class ItemPedidoViewSet(ModelViewSet):
    queryset = ItemPedido.objects.all()
    serializer_class = ItemPedidoSerializer
    permission_classes = [IsAuthenticated]