from rest_framework.viewsets import ViewSet
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated

from api.core.permissions import IsAdminUserCustom
from api.apps.usuarios.models import Usuario
from api.apps.pedidos.models import Pedido


class AdminDashboardViewSet(ViewSet):
    permission_classes = [IsAuthenticated, IsAdminUserCustom]

    def list(self, request):
        return Response({
            "total_usuarios": Usuario.objects.count(),
            "total_pedidos": Pedido.objects.count(),
        })