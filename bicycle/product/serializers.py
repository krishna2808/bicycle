from rest_framework import serializers
from .models import Bicycle

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bicycle
        fields = ["id","bicycle_name", "colour", "no_of_stock", "age_range", "theme", "description", "image", "price"]



