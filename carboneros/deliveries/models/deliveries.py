# Django
from django.db import models


class Delivery(models.Model):

    payment = models.ForeignKey("payments.Payment", on_delete=models.CASCADE)
    products = models.ForeignKey("products.Product", on_delete=models.CASCADE)

    address = models.CharField(max_length=150)
    phone_number = models.CharField(max_length=10)

    class Meta:
        db_table = 'deliveries'

    def __str__(self):
        return f'{self.address}'