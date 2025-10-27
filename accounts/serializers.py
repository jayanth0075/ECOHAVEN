from rest_framework import serializers
from .models import User, UserProfile


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'bio', 'avatar', 'eco_score',
                  'wellness_points', 'location', 'is_eco_verified', 'created_at']
        read_only_fields = ['id', 'eco_score', 'wellness_points', 'is_eco_verified', 'created_at']


class UserProfileSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)

    class Meta:
        model = UserProfile
        fields = ['user', 'eco_goals', 'wellness_goals', 'badges', 'streak_days', 'last_activity']