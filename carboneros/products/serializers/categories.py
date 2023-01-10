# DRF
from rest_framework import serializers

# Models
from carboneros.products.models import Category

class CategorySerializer(serializers.Serializer):

    name = serializers.CharField()

    def validate_name(self, data):

        category = Category.objects.filter(name=data)
        if category.exists():
            raise serializers.ValidationError('La categoría ya existe.')
        
        return data

    def create(self, validated_data):

        name = validated_data['name']
        category = Category.objects.create(name=name)

        return category