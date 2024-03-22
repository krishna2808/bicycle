from django.urls import path
from .views import *
urlpatterns = [
    path('product/', ProductListAndRetrieveAPI.as_view()),
    path('product/<int:pk>', ProductListAndRetrieveAPI.as_view()),
    path('', ProductListAndCreateAPI.as_view(), name="product"),
    #path('product-details/<int:pk>', ProductRetrieveAndUpdateAndDestory.as_view(), name="product-details"),
    path('<int:pk>', ProductRetrieveAndUpdateAndDestory.as_view(), name="product-details"),
]
