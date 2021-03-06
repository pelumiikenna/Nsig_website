
from django.db import models
from django.utils import timezone
from django.urls import reverse
from django.contrib.auth.models import Group, User
from django.conf import settings
# Create your models here.

class Post(models.Model):
    author=models.ForeignKey(User, on_delete=models.CASCADE,null=True) # connects each author to an auth user
    published_date=models.DateTimeField(blank=True,null=True)
    title=models.CharField(max_length=200)
    create_date=models.DateTimeField(default=timezone.now)
    text=models.TextField()
    hidden=models.BooleanField(default=False)

    def __str__(self) :
        return self.title

    def publish(self):
        self.published_date=timezone.now()
        self.save()

    def approve_comments(self):
        return self.comments.filter(approved_comment=True)

    def get_absolute_url(self): # to return the webpage to list of posts after commenting
        return reverse("post_detail",kwargs={'pk':self.pk})

class Comment(models.Model):
    post=models.ForeignKey('nsig_blog.Post', related_name='comments', on_delete=models.CASCADE) #connects each comment to a post
    author=models.CharField(max_length=100)
    text=models.TextField()
    create_date=models.DateTimeField(default=timezone.now, blank=True,null=True)
    approved_comment=models.BooleanField(default=False)

    def approve(self):
        self.approved_comment=True
        self.save()

    def get_absolute_url(self): # to return the webpage to list of posts after commenting
        return reverse("post_detail")

    def __str__(self):
        return self.text
