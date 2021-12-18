from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework import viewsets

from main.models import Comment, Like, Post
from .serializers import UserSerializer, PostSerializer, LikeSerializer, CommentSerializer
# Create your views here.

# ViewSets define the view behavior.
class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

##postviewset
class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

#commentviewset
class CommentViewSet(viewsets.ModelViewSet):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer

#likeviewset
class LikeViewSet(viewsets.ModelViewSet):
    queryset = Like.objects.all()
    serializer_class = LikeSerializer