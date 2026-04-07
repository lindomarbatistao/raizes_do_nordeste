from django.contrib import admin
from .models import Categoria, Produto, EstoqueLoja

admin.site.register(Categoria)
admin.site.register(Produto)
admin.site.register(EstoqueLoja)