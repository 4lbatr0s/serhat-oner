from django.db import models
from django.contrib.auth.models import User

# Create your models here.


class Post(models.Model):
    image = models.ImageField(upload_to = 'uploads/')
    content = models.TextField()
    author = models.ForeignKey(User, related_name="posts", on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)

 
    def __str__(self):
        return f"Post  '{self.content}' shared by {self.author.username} "

    @property
    def likes_count(self):
        if hasattr(self, '_likes_count'):
            return self.like_set.count()
        self._likes_count = self.like_set.count()
        return self.like_set.count()

    @property
    def comments_count(self):
        if hasattr(self, '_comments_count'):
            return self.comment_set.count()
        self._comments_count = self.comment_set.count()
        return self.comment_set.count()

class Like(models.Model):
    post = models.ForeignKey(Post, on_delete= models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE) 
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Post  '{self.post}' liked {self.user.username}"

class Comment(models.Model):
    post = models.ForeignKey(Post, on_delete= models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE) 
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Post  '{self.content}' commented by {self.user.username}"
