from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import action
from rest_framework.response import Response

from api.apps.usuarios.models import Usuario
from api.apps.usuarios.serializers import UsuarioSerializer, UsuarioMeSerializer


class UsuarioViewSet(ModelViewSet):
    queryset = Usuario.objects.all().order_by('-id')

    def get_permissions(self):
        if self.action == 'create':
            return [AllowAny()]
        return [IsAuthenticated()]

    def get_serializer_class(self):
        if self.action == 'me':
            return UsuarioMeSerializer
        return UsuarioSerializer

    @action(detail=False, methods=['get'], url_path='me')
    def me(self, request):
        serializer = self.get_serializer(request.user)
        return Response(serializer.data)