# DRF
from rest_framework import serializers

# Models
from carboneros.products.models import Product, Category


class ProductModelSerializer(serializers.ModelSerializer):

    categories = serializers.SlugRelatedField(
        many=True, read_only=False,
        slug_field='name',
        queryset=Category.objects.all()
    )

    class Meta:
        model = Product
        fields = (
            'name',
            'description',
            'image',
            'price',
            'categories'
        )

    def validate_name(self, data):
        product = Product.objects.filter(name=data)
        if product.exists():
            raise serializers.ValidationError('Ya existe un producto con este nombre')
        return data

    def create(self, validated_data):
        
        categories = validated_data.pop('categories')
        product = Product.objects.create(**validated_data)

        for category in categories:
            qs = Category.objects.filter(name=category.name)
            if not qs.exists():
                raise serializers.ValidationError(f'La categoría {category.name} no existe.')
            product.categories.add(qs[0])

        return product