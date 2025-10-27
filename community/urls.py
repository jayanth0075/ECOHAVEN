from django.urls import path
from . import views

urlpatterns = [
    # Authentication
    path('signup/', views.signup_user, name='signup'),
    path('login/', views.login_user, name='login'),
    path('logout/', views.logout_user, name='logout'),

    # Posts
    path('posts/', views.posts_feed, name='posts_feed'),
    path('posts/<uuid:post_id>/like/', views.like_post, name='like_post'),

    # Challenges
    path('challenges/', views.active_challenges, name='active_challenges'),
    path('challenges/<uuid:challenge_id>/join/', views.join_challenge, name='join_challenge'),
]
