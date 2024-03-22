# Generated by Django 4.0 on 2023-10-21 20:50

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='BikeType',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('bike_type', models.CharField(blank=True, max_length=60, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Brand',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('brand_name', models.CharField(blank=True, max_length=60, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('category_name', models.CharField(blank=True, max_length=60, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Bicycle',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('bicycle_name', models.CharField(blank=True, max_length=60, null=True)),
                ('colour', models.CharField(blank=True, max_length=60, null=True)),
                ('description', models.CharField(blank=True, max_length=300, null=True)),
                ('no_of_stock', models.CharField(blank=True, max_length=30, null=True)),
                ('age_range', models.CharField(blank=True, max_length=60, null=True)),
                ('wheel_size', models.CharField(blank=True, max_length=60, null=True)),
                ('frame_material', models.CharField(blank=True, max_length=60, null=True)),
                ('brack_style', models.CharField(blank=True, max_length=60, null=True)),
                ('item_weight', models.CharField(blank=True, max_length=60, null=True)),
                ('model_year', models.CharField(blank=True, max_length=5, null=True)),
                ('model_name', models.CharField(blank=True, max_length=30, null=True)),
                ('theme', models.CharField(blank=True, max_length=60, null=True)),
                ('number_of_speed', models.CharField(blank=True, max_length=7, null=True)),
                ('special_features', models.CharField(blank=True, max_length=60, null=True)),
                ('size', models.CharField(blank=True, max_length=60, null=True)),
                ('price', models.CharField(blank=True, max_length=60, null=True)),
                ('image', models.ImageField(blank=True, null=True, upload_to='images/product/{self.id}/')),
                ('brand', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='product.brand')),
                ('category', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='product.category')),
            ],
        ),
    ]
