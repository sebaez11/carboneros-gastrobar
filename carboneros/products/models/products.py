# Django
from django.db import models


class Product(models.Model):

    categories = models.ManyToManyField("products.Category")

    name = models.CharField(max_length=150, unique=True)
    description = models.TextField()
    image = models.ImageField(upload_to='products/images', blank=False, null=False)
    price = models.IntegerField()

    class Meta:
        db_table = 'products'

    def __str__(self):
        return f'{self.name} - ${self.price}'