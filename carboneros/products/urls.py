# Django
from django.urls import path, include

# DRF
from rest_framework.routers import DefaultRouter

# Views
from carboneros.products.views import ProductViewSet, CategoryViewSet

router = DefaultRouter()

router.register(
    prefix='',
    viewset=ProductViewSet,
    basename='products'
)

router.register(
    prefix='category',
    viewset=CategoryViewSet,
    basename='category'
)

urlpatterns = [
    path(
        '', 
        include(router.urls)
    )
]
