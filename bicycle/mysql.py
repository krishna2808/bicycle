

from product.models import *

def dublicate_bicycle():
    for _ in range(10):
        bicycle_instance = Bicycle.objects.all().first()
        bicycle_obj = Bicycle(
                  bicycle_name=bicycle_instance.bicycle_name,
                  colour=bicycle_instance.colour,
                  description=bicycle_instance.description,
                  no_of_stock=bicycle_instance.no_of_stock,
                  age_range=bicycle_instance.age_range,
                  wheel_size=bicycle_instance.wheel_size,
                  frame_material=bicycle_instance.frame_material,
                  brack_style=bicycle_instance.brack_style,
                  item_weight=bicycle_instance.item_weight,
                  model_year=bicycle_instance.model_year,
                  model_name=bicycle_instance.model_name,
                  theme=bicycle_instance.theme,
                  number_of_speed=bicycle_instance.number_of_speed,
                  special_features=bicycle_instance.special_features,
                  size=bicycle_instance.size,
                  price=bicycle_instance.price,
                  brand=bicycle_instance.brand,
                  category=bicycle_instance.category,
                  image=bicycle_instance.image,
        )
        bicycle_obj.save()




dublicate_bicycle()

