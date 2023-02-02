from django.db import models

# Create your models here.

class Post(models.Model):
    
    title = models.CharField('タイトル', max_length=40)
    text = models.TextField('本文')