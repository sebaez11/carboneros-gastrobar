# Django
from django.contrib import admin

# Models
from .models import Delivery

@admin.register(Delivery)
class DeliveryAdmin(admin.ModelAdmin):

    list_display = (
        'address',
        'phone_number',
        'payment',
        'products'
    )

    search_fields = ('phone_number',)