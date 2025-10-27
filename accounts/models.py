from django.contrib.auth.models import AbstractUser
from django.db import models
from django.utils import timezone
import uuid


class User(AbstractUser):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    email = models.EmailField(unique=True)
    bio = models.TextField(max_length=500, blank=True)
    avatar = models.ImageField(upload_to='avatars/', blank=True, null=True)
    eco_score = models.IntegerField(default=0)
    wellness_points = models.IntegerField(default=0)
    location = models.CharField(max_length=100, blank=True)
    is_eco_verified = models.BooleanField(default=False)
    joined_challenges = models.ManyToManyField('community.Challenge', blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    # New fields for enhanced user experience
    phone_number = models.CharField(max_length=20, blank=True, null=True)
    preferred_language = models.CharField(max_length=10, default='en')
    timezone = models.CharField(max_length=50, default='UTC')

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']
    
    class Meta:
        ordering = ['-created_at']
        verbose_name = 'User'
        verbose_name_plural = 'Users'


class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='profile')
    eco_goals = models.JSONField(default=list)
    wellness_goals = models.JSONField(default=list)
    badges = models.JSONField(default=list)
    streak_days = models.IntegerField(default=0)
    last_activity = models.DateTimeField(default=timezone.now)
    total_impact_score = models.IntegerField(default=0)
    carbon_saved = models.FloatField(default=0.0)  # in kg

    class Meta:
        ordering = ['-total_impact_score']
        verbose_name = 'User Profile'
        verbose_name_plural = 'User Profiles'

    def __str__(self):
        return f"{self.user.username}'s Profile"
    
    def update_streak(self):
        """Update user's activity streak"""
        from datetime import timedelta
        today = timezone.now().date()
        last_active = self.last_activity.date()
        
        if (today - last_active).days == 1:
            self.streak_days += 1
        elif (today - last_active).days > 1:
            self.streak_days = 1
        
        self.last_activity = timezone.now()
        self.save()