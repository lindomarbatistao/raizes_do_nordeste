from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

from api.apps.usuarios.views import UsuarioViewSet
from api.apps.lojas.views import LojaViewSet
from api.apps.catalogo.views import CategoriaViewSet, ProdutoViewSet, EstoqueLojaViewSet
from api.apps.pedidos.views import PedidoViewSet, ItemPedidoViewSet
from api.apps.pagamentos.views import PagamentoViewSet
from api.apps.fidelidade.views import FidelidadeViewSet

from api.admin_views import AdminDashboardViewSet

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
router.register(r'admin-dashboard', AdminDashboardViewSet, basename='admin-dashboard')

urlpatterns = [
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('', include(router.urls)),
]