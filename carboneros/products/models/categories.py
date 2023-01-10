# Django
from django.db import models


class Category(models.Model):

    name = models.CharField(max_length=100, unique=True)

    class Meta:
        db_table = 'categories'

    def __str__(self):
        return f'{self.name}'