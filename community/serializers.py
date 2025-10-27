from rest_framework import serializers
from .models import Post, Comment, Challenge
from accounts.serializers import UserSerializer


class CommentSerializer(serializers.ModelSerializer):
    author = UserSerializer(read_only=True)
    replies = serializers.SerializerMethodField()

    class Meta:
        model = Comment
        fields = ['id', 'author', 'content', 'parent', 'replies', 'created_at']

    def get_replies(self, obj):
        if obj.parent is None:
            replies = Comment.objects.filter(parent=obj)
            return CommentSerializer(replies, many=True).data
        return []


class PostSerializer(serializers.ModelSerializer):
    author = UserSerializer(read_only=True)
    comments = CommentSerializer(many=True, read_only=True)
    likes_count = serializers.SerializerMethodField()
    is_liked = serializers.SerializerMethodField()

    class Meta:
        model = Post
        fields = ['id', 'author', 'title', 'content', 'image', 'tags',
                  'likes_count', 'is_liked', 'eco_impact_score', 'is_featured',
                  'comments', 'created_at', 'updated_at']

    def get_likes_count(self, obj):
        return obj.likes.count()

    def get_is_liked(self, obj):
        request = self.context.get('request')
        if request and request.user.is_authenticated:
            return obj.likes.filter(id=request.user.id).exists()
        return False


class ChallengeSerializer(serializers.ModelSerializer):
    participants_count = serializers.SerializerMethodField()
    is_joined = serializers.SerializerMethodField()

    class Meta:
        model = Challenge
        fields = ['id', 'title', 'description', 'difficulty', 'points_reward',
                  'duration_days', 'participants_count', 'is_joined', 'is_active', 'created_at']

    def get_participants_count(self, obj):
        return obj.participants.count()

    def get_is_joined(self, obj):
        request = self.context.get('request')
        if request and request.user.is_authenticated:
            return obj.participants.filter(id=request.user.id).exists()
        return False