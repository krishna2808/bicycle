from django.shortcuts import render
from rest_framework import generics
from .serializers import *
from rest_framework.views import APIView
from django.http import Http404
from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
# Create your views here.



class ProductListAndRetrieveAPI(APIView):
      #permission_classes = [IsAuthenticated]
      def get_item(self,product_name):
          try:
              #product = Bicycle.objects.filter(bicycle_name = product_name).first()
              product = Bicycle.objects.filter(id = product_name).first()
          except:
              raise Http404
          return product

      def get(self, request, format=None):
          get_token = request.COOKIES.get("token")
          print("get_token from cookies --------------", get_token)
          print(request.data)
          product_name  = request.data.get("product_id")
          product_name  = request.GET.get("id")
          print("product_name", product_name)
          if product_name is not None:
              print("product_name is found")
              product = self.get_item(product_name)
              serializer = ProductSerializer(product)
          else:
              products = Bicycle.objects.all()
              serializer = ProductSerializer(products, many=True)
          return Response(serializer.data, status=status.HTTP_200_OK)


class ProductListAndCreateAPI(generics.ListCreateAPIView):
    queryset = Bicycle.objects.all()
    serializer_class = ProductSerializer

class ProductRetrieveAndUpdateAndDestory(generics.RetrieveUpdateDestroyAPIView):
    queryset = Bicycle.objects.all()
    serializer_class = ProductSerializer  

