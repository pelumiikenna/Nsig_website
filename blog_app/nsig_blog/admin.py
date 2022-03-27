from django.contrib import admin
from .models import Post
# Register your models here.

@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
    readonly_fields=["author", 'published_date', 'title', 'create_date', 'text']
    