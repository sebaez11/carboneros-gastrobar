# Django
from django.contrib import admin

# Models
from .models import Payment

@admin.register(Payment)
class PaymentAdmin(admin.ModelAdmin):

    list_display = (
        'customer_email',
        'amount',
        'date',
    )

    search_fields = ('customer_email',)