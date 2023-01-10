# DRF
from rest_framework import viewsets, mixins

# Models
from carboneros.products.models import Category

# Serializers
from carboneros.products.serializers import CategorySerializer

class CategoryViewSet(mixins.ListModelMixin, 
                     mixins.CreateModelMixin,
                     viewsets.GenericViewSet):
    
    serializer_class = CategorySerializer
    queryset = Category.objects.all()

