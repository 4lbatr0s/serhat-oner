from django.contrib.auth.models import User
from rest_framework import serializers

from main.models import Comment, Like, Post

class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['url', 'username', 'email', 'is_staff']

class PostSerializer(serializers.HyperlinkedModelSerializer):
    author = serializers.SlugRelatedField( ##author'u getirmek icin.
        read_only = True,
        slug_field = 'username'
    ) ##sadece author'u getirmek icin...
    
    class Meta:
        model = Post
        fields = ['author', 'content', 'created_at', 'comments_count', 'likes_count', 'like_comment_count']

class CommentSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Comment
        fields = ['post', 'user', 'content', 'created_at']

class LikeSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Like
        fields = ['post', 'user']
 