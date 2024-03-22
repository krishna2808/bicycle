from django.db import models
from account.models import User
from product.models import Bicycle
from django.db.models.signals import post_save
from django.dispatch import receiver
# Create your models here.
class Cart(models.Model):
    product = models.ForeignKey(Bicycle, on_delete = models.CASCADE)
    user = models.ForeignKey(User, on_delete = models.CASCADE)
    quantity = models.PositiveIntegerField() 
    price  = models.FloatField(default=0.0)
    is_order = models.BooleanField(default=False)

@receiver(post_save, sender = Cart)
def set_product_price(sender, instance, **kwargs):
    print(instance.id)
    print(sender)
    if instance.id is None:
        pass
    else:
        print(instance.product.price)
        print(instance.quantity)
        print(instance.quantity * instance.product.price)
        instance.price = instance.product.price * instance.quantity
        post_save.disconnect(set_product_price, sender=Cart)
        instance.save()
        post_save.connect(set_product_price, sender=Cart)
