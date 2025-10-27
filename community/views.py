from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout
from django.db.models import Count
from .models import Post, Challenge
from .serializers import PostSerializer, ChallengeSerializer


# ---------------- AUTH ---------------- #
@api_view(['POST'])
@permission_classes([AllowAny])
def signup_user(request):
    """
    Register a new user
    """
    username = request.data.get('username')
    password = request.data.get('password')
    email = request.data.get('email')

    if not username or not password:
        return Response({"error": "Username and password required"}, status=status.HTTP_400_BAD_REQUEST)

    if User.objects.filter(username=username).exists():
        return Response({"error": "Username already exists"}, status=status.HTTP_400_BAD_REQUEST)

    user = User.objects.create_user(username=username, email=email, password=password)
    return Response({"message": "User created successfully"}, status=status.HTTP_201_CREATED)


@api_view(['POST'])
@permission_classes([AllowAny])
def login_user(request):
    """
    Log in existing user
    """
    username = request.data.get('username')
    password = request.data.get('password')

    user = authenticate(request, username=username, password=password)
    if user is not None:
        login(request, user)
        return Response({"message": "Login successful"}, status=status.HTTP_200_OK)
    else:
        return Response({"error": "Invalid credentials"}, status=status.HTTP_401_UNAUTHORIZED)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def logout_user(request):
    """
    Log out user
    """
    logout(request)
    return Response({"message": "Logged out successfully"}, status=status.HTTP_200_OK)


# ---------------- POSTS ---------------- #
@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def posts_feed(request):
    if request.method == 'GET':
        # Enhanced query with ordering options
        ordering = request.GET.get('ordering', '-created_at')
        tag_filter = request.GET.get('tag', None)
        
        posts = Post.objects.all().select_related('author').prefetch_related('likes', 'comments')
        
        if tag_filter:
            posts = posts.filter(tags__contains=[tag_filter])
        
        posts = posts.order_by(ordering)
        serializer = PostSerializer(posts, many=True, context={'request': request})
        return Response(serializer.data, status=status.HTTP_200_OK)

    elif request.method == 'POST':
        serializer = PostSerializer(data=request.data, context={'request': request})
        if serializer.is_valid():
            serializer.save(author=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def like_post(request, post_id):
    try:
        post = Post.objects.get(id=post_id)
        if request.user in post.likes.all():
            post.likes.remove(request.user)
            liked = False
        else:
            post.likes.add(request.user)
            liked = True

        return Response({
            'liked': liked,
            'likes_count': post.likes.count()
        }, status=status.HTTP_200_OK)

    except Post.DoesNotExist:
        return Response({'error': 'Post not found'}, status=status.HTTP_404_NOT_FOUND)


# ---------------- CHALLENGES ---------------- #
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def active_challenges(request):
    challenges = Challenge.objects.filter(is_active=True).annotate(
        participants_count=Count('participants')
    )
    serializer = ChallengeSerializer(challenges, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def join_challenge(request, challenge_id):
    try:
        challenge = Challenge.objects.get(id=challenge_id, is_active=True)
        if request.user in challenge.participants.all():
            return Response({'message': 'Already joined'}, status=status.HTTP_200_OK)

        challenge.participants.add(request.user)
        return Response({'message': 'Successfully joined challenge'}, status=status.HTTP_200_OK)

    except Challenge.DoesNotExist:
        return Response({'error': 'Challenge not found or inactive'}, status=status.HTTP_404_NOT_FOUND)
