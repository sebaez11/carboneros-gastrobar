# Generated by Django 4.0.8 on 2023-01-09 15:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0002_alter_category_name'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='name',
            field=models.CharField(max_length=150, unique=True),
        ),
    ]
