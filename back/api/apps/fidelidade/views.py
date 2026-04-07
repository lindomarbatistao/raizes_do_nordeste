from rest_framework.viewsets import ReadOnlyModelViewSet
from rest_framework.permissions import IsAuthenticated

from api.apps.fidelidade.models import Fidelidade
from api.apps.fidelidade.serializers import FidelidadeSerializer


class FidelidadeViewSet(ReadOnlyModelViewSet):
    serializer_class = FidelidadeSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        if user.tipo == 'ADMIN':
            return Fidelidade.objects.all().order_by('-id')
        return Fidelidade.objects.filter(cliente=user)