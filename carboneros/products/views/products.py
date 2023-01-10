# DRF
from rest_framework import viewsets, mixins

# Models
from carboneros.products.models import Product

# Serializers
from carboneros.products.serializers import ProductModelSerializer

class ProductViewSet(mixins.ListModelMixin, 
                     mixins.CreateModelMixin, 
                     viewsets.GenericViewSet):
    
    serializer_class = ProductModelSerializer
    queryset = Product.objects.all()
