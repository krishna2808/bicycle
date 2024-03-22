from django.db import models

# Create your models here.


class Category(models.Model):
    """
    category models is stored category name. 
    """
    category_name = models.CharField(max_length=60, null=True, blank = True)

    def __str__(self):
        return self.category_name

class Brand(models.Model):
    """
    Brand  models is stored to brand name.
    For Example Leader
    """
    brand_name = models.CharField(max_length = 60, null=True, blank=True)

    def __str__(self):
        return self.brand_name


class BikeType(models.Model):
    """
    Bike Type models is stored to BikeType of bicycle.
    For Example Mountain Bike
    """
    bike_type = models.CharField(max_length=60, null=True, blank = True)

    def __str__(self):
        return self.bike_type

class Bicycle(models.Model):
    """
    Bicycle model in store to all information of bicycle. 
    For Example bicycle name, wheel size, colour etc.
    """
    bicycle_name = models.CharField(max_length=60, null=True, blank = True)
    colour = models.CharField(max_length=60, null=True, blank = True)
    description  = models.CharField(max_length=300, null=True, blank = True)
    no_of_stock = models.CharField(max_length=30, null=True, blank = True)
    age_range = models.CharField(max_length=60, null=True, blank = True)
    wheel_size = models.CharField(max_length=60, null=True, blank = True)
    frame_material = models.CharField(max_length=60, null=True, blank = True)
    brack_style = models.CharField(max_length=60, null=True, blank = True)
    item_weight = models.CharField(max_length=60, null=True, blank = True)
    model_year = models.CharField(max_length=5, null=True, blank = True)
    model_name = models.CharField(max_length=30, null=True, blank = True)
    theme = models.CharField(max_length=60, null=True, blank = True)
    number_of_speed = models.CharField(max_length=7, null=True, blank = True)
    special_features = models.CharField(max_length=60, null=True, blank = True)
    size = models.CharField(max_length=60, null=True, blank = True)
    price = models.FloatField(null=True, blank = True)
    brand = models.ForeignKey(Brand, on_delete = models.CASCADE)
    category = models.ForeignKey(Category, on_delete = models.CASCADE)
    image  = models.ImageField(null=True, blank=True, upload_to= "images/product/{self.id}/")

    #slug = models.SlugField(unique=True, blank=True, null=True)

    """def save(self, *args, **kwargs):
        # Generate a slug from the name
        self.slug = slugify(self.id)
        super().save(*args, **kwargs)"""

    def __str__(self):
        return self.bicycle_name
