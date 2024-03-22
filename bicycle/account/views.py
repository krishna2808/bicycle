from django.shortcuts import render
from rest_framework import mixins
from rest_framework import generics
from rest_framework.views import APIView
from rest_framework import status
from rest_framework.response import Response
from django.http import Http404
from rest_framework.permissions import IsAuthenticated
from .serializers import *
from .models import User
from django.contrib.auth import authenticate, login
from django.views.decorators.csrf import csrf_exempt
from .customauth import CustomAuthentication
from rest_framework.authentication import BasicAuthentication
from rest_framework.authtoken.models import Token
from rest_framework_simplejwt.views import TokenObtainPairView

# Create your views here.


class AccountCreateAPI(APIView):

    def post(self, request, format=None):
        print("request.data *********", request.data)
        serializer = AccountSerializer(data = request.data)
        print("serilizer ********* ", serializer)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status = status.HTTP_201_CREATED)
        return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)


class LoginView(TokenObtainPairView):
      pass


"""class LoginView(APIView):
    def post(self, request):
        email = request.data.get('email')
        password = request.data.get('password')
        user = authenticate(request, email=email, password=password)
        if user:
            #login(request, user)
            token, created = Token.objects.get_or_create(user=user)
            
            response =  Response({'access_token': str(token)}, status=status.HTTP_200_OK)
            response.set_cookie(key =  "token", value=token, httponly=True,  samesite="None")
            return response
        else:
            return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)
"""

class ProfileAPI(APIView):
    #authentication_classes = [CustomAuthentication]
    permission_classes = [IsAuthenticated]
    def get_object(self, email):
        try:
            return User.objects.get(email = email)
        except:
            raise Http404

    def get(self, request, format=None):
        email = request.user
        if email:
            user = self.get_object(email)
            serializer = ProfileSerializer(user)
        return Response(serializer.data, status=status.HTTP_200_OK)


    def patch(self, request, format=None):
        email = request.user
        user = self.get_object(email)
        serializer = ProfileSerializer(user,data = request.data)
        print("serilizer ********* ", serializer)
        if serializer.is_valid():
            serializer.save()
            print("serializer.data ********* ", serializer.data)
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)




