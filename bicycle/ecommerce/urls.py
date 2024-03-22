from django.urls import path
from .views import *
urlpatterns = [
    path('cart/', CartAPI.as_view(), name= "cart" ),
]

