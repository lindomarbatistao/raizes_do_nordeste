from rest_framework.viewsets import ReadOnlyModelViewSet
from rest_framework.permissions import IsAuthenticated
from .models import Fidelidade
from .serializers import FidelidadeSerializer


class FidelidadeViewSet(ReadOnlyModelViewSet):
    serializer_class = FidelidadeSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        if user.tipo == 'ADMIN':
            return Fidelidade.objects.all()
        return Fidelidade.objects.filter(cliente=user)