# DRF
from rest_framework import viewsets, mixins, status
from rest_framework.response import Response

# Serializers
from carboneros.payments.serializers import PaymentModelSerializer

# Models
from carboneros.payments.models import Payment

class PaymentsViewSet(mixins.CreateModelMixin, 
                      viewsets.GenericViewSet):

    serializer_class = PaymentModelSerializer
    queryset = Payment.objects.all()

    def create(self, request, *args, **kwargs):
        delivery = request.data.pop('delivery')
        serializer = self.get_serializer(
            data=request.data,
            context={
                'delivery': delivery
            }
        )
        serializer.is_valid(raise_exception=True)
        payment = serializer.save()
        
        data = self.get_serializer(payment).data

        return Response(data=data, status=status.HTTP_201_CREATED)