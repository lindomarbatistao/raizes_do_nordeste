from rest_framework import serializers
from api.apps.usuarios.models import Usuario


class UsuarioSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = Usuario
        fields = [
            'id',
            'username',
            'password',
            'email',
            'first_name',
            'last_name',
            'telefone',
            'cpf',
            'tipo',
            'tipo',
            'is_staff',
            'is_superuser',
            'is_active'
        ]
        read_only_fields = ['tipo']

    def create(self, validated_data):
        password = validated_data.pop('password')

        user = Usuario(**validated_data)
        user.tipo = 'CLIENTE'
        user.is_active = True
        user.is_staff = False
        user.is_superuser = False
        user.set_password(password)
        user.save()

        return user


class UsuarioMeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Usuario
        fields = [
            'id',
            'username',
            'email',
            'first_name',
            'last_name',
            'telefone',
            'cpf',
            'tipo',
            'is_staff',
            'is_superuser',
            'is_active'
        ]