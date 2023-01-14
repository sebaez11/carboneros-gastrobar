# Django
from django.conf import settings

# DRF
from rest_framework import serializers
from rest_framework.reverse import reverse

# Models
from carboneros.payments.models import Payment

# Stripe
import stripe

# Views
from carboneros.products.views import ProductViewSet


class PaymentModelSerializer(serializers.ModelSerializer):

    class Meta:
        model = Payment
        fields = ('amount', 'customer_email', 'date')
        read_only_fields = ('date', )

    def create(self, validated_data):

        # Stripe
        stripe.api_key = settings.STRIPE_SECRET_KEY
        payment_intent = stripe.PaymentIntent.create(
            amount=validated_data['amount'],
            currency="usd",
            automatic_payment_methods={"enabled":True}
        )

        # Payment
        Payment.objects.create(**validated_data)

        return validated_data