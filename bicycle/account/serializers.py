
from rest_framework import serializers
from .models import User

class AccountSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['email', 'username', 'mobile', 'password', ]
    def create(self, validated_data):
        """
         We need to override create method from ModelSerializer. beacause 
         this method use create method for create new models of instance.
         but our User Model we have created function create_user and it is set_password use
         hashing. and create method is not use set_password
         it is save models like this... 
         create(usename = username, password =password)
        """
        username = validated_data.get("username")
        email = validated_data.get("email")
        mobile = validated_data.get("mobile")
        password = validated_data.get("password")
        user = User.objects.create_user(
                    email=email,
                    username=username, 
                    mobile=mobile,
                    password=password
               )
        return user
class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['email', 'username', 'mobile', 'first_name', 'last_name', "address", ]
