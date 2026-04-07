from rest_framework import serializers
from .models import Fidelidade


class FidelidadeSerializer(serializers.ModelSerializer):
    cliente_username = serializers.CharField(source='cliente.username', read_only=True)

    class Meta:
        model = Fidelidade
        fields = '__all__'