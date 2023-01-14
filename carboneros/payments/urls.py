# Django
from django. urls import path, include

# DRF
from rest_framework.routers import DefaultRouter

# Views
from carboneros.payments.views import PaymentsViewSet

routers = DefaultRouter()

routers.register(
    prefix='',
    viewset=PaymentsViewSet,
    basename='payments'
)

urlpatterns = [
    path('', include(routers.urls)),
]
