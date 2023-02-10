from django.urls import path
from . import views

app_name = 'app'

urlpatterns = [
    path('', views.PostList.as_view(), name='post_list'),
    # path('posts/<int:pk>/', views.PostDetail.as_view(), name='post_detail'),
]