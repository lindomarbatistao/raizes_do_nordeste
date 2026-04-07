from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

from back.api.apps.usuarios.views import UsuarioViewSet
from back.api.apps.lojas.views import LojaViewSet
from back.api.apps.catalogo.views import CategoriaViewSet, ProdutoViewSet, EstoqueLojaViewSet
from back.api.apps.pedidos.views import PedidoViewSet, ItemPedidoViewSet
from back.api.apps.pagamentos.views import PagamentoViewSet
from back.api.apps.fidelidade.views import FidelidadeViewSet

router = DefaultRouter()
router.register(r'usuarios', UsuarioViewSet)
router.register(r'lojas', LojaViewSet)
router.register(r'categorias', CategoriaViewSet)
router.register(r'produtos', ProdutoViewSet)
router.register(r'estoque-loja', EstoqueLojaViewSet)
router.register(r'pedidos', PedidoViewSet, basename='pedidos')
router.register(r'itens-pedido', ItemPedidoViewSet)
router.register(r'pagamentos', PagamentoViewSet)
router.register(r'fidelidade', FidelidadeViewSet, basename='fidelidade')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('api/', include(router.urls)),
]

urlpatterns = [
    
]