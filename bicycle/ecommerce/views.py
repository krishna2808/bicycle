from django.shortcuts import render
from rest_framework.views import APIView
from .serializers import *
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import status
from account.models import User
# Create your views here.



class CartAPI(APIView):
    #authentication_classes = [CustomAuthentication]
    #permission_classes = [IsAuthenticated]

    def get(self, request, format=None):
        email = request.user
        print("email get cart------------- {}".format(email))
        #email = User.objects.get(username="kk")
        if email:
            carts = Cart.objects.filter(user__email = email, is_order=False)
            serializer = CartSerializer(carts, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


    def post(self, request, format=None):
        email = request.data["user"]
        user_id = User.objects.get(email=email).id
        request.data["user"] = user_id
        serializer = CartSerializer(data=request.data)
        print("serializer post method in cart ------------")
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



    def patch(self, request, pk=None,format=None):
        email = request.user
        #user = self.get_object(email)
        cart = Cart.objects.get(id = id, user__email= email)
        serializer = CartSerializer(cart, data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)
    def delete(self, request, pk=None, format=None):
        email = request.user
        cart = Cart.objects.get(id = id, user__email= email)
        cart.delete()
        return Response({"msg": "Deleted"} )
