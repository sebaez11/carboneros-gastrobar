# Django
from django.db import models


class Payment(models.Model):

    amount = models.IntegerField()
    customer_email = models.EmailField(max_length=255)
    date = models.DateTimeField(auto_now_add=True)

    class Meta:
        db_table = 'payments'

    def __str__(self):
        return f'{self.customer_email} - {self.amount}'