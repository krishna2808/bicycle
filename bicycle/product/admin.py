from django.contrib import admin
from .models import * 
# Register your models here

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
     pass
@admin.register(Brand)
class BrandAdmin(admin.ModelAdmin):
    pass
@admin.register(BikeType)
class BikeTypeAdmin(admin.ModelAdmin):
    pass
@admin.register(Bicycle)
class BicycleAdmin(admin.ModelAdmin):
    pass


