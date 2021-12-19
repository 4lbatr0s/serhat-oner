from django.core.exceptions import PermissionDenied
from django.contrib.auth.models import User
from django.db.models import query
from main.models import Post, Comment, Like
from rest_framework import viewsets
from main.serializers import UserSerializer, PostSerializer, LikeSerializer, CommentSerializer
from rest_framework.decorators import permission_classes, action
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
# Create your views here.

# ViewSets define the view behavior.
class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [IsAuthenticated]


##postviewset
class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    permission_classes = [IsAuthenticated]


    ##second solution.
    # @action(detail=True, methods=['post'])
    # def like_prevent(self, request, pk=None):
    #     post = self.get_object()
    #     user = request.user
    #     set = Like.objects.filter(post=post, user=user)

    #     if len(set)!=0:
    #         set.delete()
    #         return Response({"message":"deleted"})
    #     else:
    #         set.create(post=post, user=user)
    #         return Response({"message":"created"})


#commentviewset
class CommentViewSet(viewsets.ModelViewSet):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
    permission_classes = [IsAuthenticated]

#likeviewset
class LikeViewSet(viewsets.ModelViewSet):
    queryset = Like.objects.all()
    serializer_class = LikeSerializer
    permission_classes = [IsAuthenticated]
