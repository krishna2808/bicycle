# Generated by Django 4.0 on 2023-10-22 06:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('product', '0003_remove_bicycle_slug'),
    ]

    operations = [
        migrations.AlterField(
            model_name='bicycle',
            name='price',
            field=models.FloatField(blank=True, null=True),
        ),
    ]