from rest_framework.authentication import BasicAuthentication
from django.contrib.auth import authenticate
from rest_framework import  exceptions

class CustomAuthentication:
    def authenticate(self,request):
       email = request.GET.get("email")
       password = request.GET.get("password")
       print(email, password)
       if not email and not password:
           raise exceptions.AuthenticationFailed("Enter email and password")
       user = authenticate(request, email=email, password=password)
       if user is  None:
           raise exceptions.AuthenticationFailed('Invalid email/password')
       return (user, None)
