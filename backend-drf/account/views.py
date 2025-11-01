from django.shortcuts import render
from rest_framework import generics
from django.contrib.auth.models import User
from .serializers import UserSerializer
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = []
class ProtectedView(APIView):
    permission_classes = [IsAuthenticated]
    def get(self, request):
       response = {
           "status" : "success",
       }
       return Response(response)