from django.contrib import admin
from main.models import Comment, Like, Post
from main.models import User
from django import forms

# Register your models here.


class CommentInline(admin.TabularInline):
    model = Comment
    extra = 0
    readonly_fields = ("user", "content")
    can_delete = False

    def has_add_permission(self, request, obj):
        return False


class CommentInline(admin.TabularInline):
    model = Comment
    extra = 0
    readonly_fields = ['content', 'user']
    can_delete = False;

    def has_add_permission(self, request, ojb):
        return False
    # list_display = ["id","post", "user","created_at"]
    # list_filter = ["created_at"]
    # search_fields = ["content", "author__username"]
    # list_display_links = ["user"]
    # autocomplete_fields = ["user", "post"]
    
class LikeInline(admin.StackedInline):
    model = Like
    extra = 0
    readonly_fields = ("user",)
    can_delete = False

    def has_add_permission(self, request, obj):
        return False



@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
    list_display = ["id", "author", "created_at","content", "like_comment_count"]
    list_filter  = ["author","created_at", "content"]
    search_fields = ["content", "created_at", "author__username"]
    autocomplete_fields = ["author"]  
    inlines = [CommentInline, LikeInline]

    def like_comment_count(self, post):
        return f"{post.likes_count} / {post.comments_count}"
    
    @property
    def likes_count(self):
        if hasattr(self, '_likes_count'):
            return self._likes_count
        _count = self.like_set.count()
        self._likes_count = _count
        return self._likes_count 

    @property
    def comments_count(self):
        if hasattr(self, '_likes_count'):
            return self._comments_count
        _count = self.comment_set.count()
        self._comments_count= _count
        return self._comments_count 



class LikeAdminForm(forms.ModelForm):
    class Meta:
        model = Like
        list_display = ["post", "user"]
        list_display_links = ["user"]
        autocomplete_fields = ["user", "post"]
    #first solution.
    def prevent_duplicate_like(self):
        like_status = self.cleaned_data['model']
        if Like.objects.filter(like=like_status).exists():
            return None


@admin.register(Like)     
class LikeAdmin(admin.ModelAdmin):
    form = LikeAdminForm

    
@admin.register(Comment)
class CommentAdmin(admin.ModelAdmin):
    list_display = ["id","post", "user","created_at"]
    list_filter = ["created_at"]
    search_fields = ["content", "author__username"]
    list_display_links = ["user"]
    autocomplete_fields = ["user", "post"]
    
