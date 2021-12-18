
from django.conf.urls import include
from django.contrib import admin
from django.urls import path, include
from rest_framework import routers

from main.views import UserViewSet
from main.views import PostViewSet
from main.views import CommentViewSet
from main.views import LikeViewSet

# Routers provide an easy way of automatically determining the URL conf.
router = routers.DefaultRouter()
router.register(r'users', UserViewSet)
router.register(r'posts', PostViewSet)
router.register(r'comments', CommentViewSet)
router.register(r'likes', LikeViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]