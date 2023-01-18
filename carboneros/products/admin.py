# Django
from django.contrib import admin

# Models
from .models import Product

@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):

    list_display = (
        'name',
        'description',
        'price',
        'image',
    )

    search_fields = ('name',)