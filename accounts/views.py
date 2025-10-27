from rest_framework import status, generics
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth import authenticate
from django.contrib.auth.hashers import make_password
from django.utils import timezone  # ← ADD THIS IMPORT
from .models import User, UserProfile
from .serializers import UserSerializer, UserProfileSerializer
import json


@api_view(['POST'])
@permission_classes([AllowAny])
def register_user(request):
    try:
        data = request.data  # ← CHANGE THIS

        # Validate required fields
        if not all(k in data for k in ['email', 'username', 'password']):
            return Response({
                'error': 'Missing required fields'
            }, status=status.HTTP_400_BAD_REQUEST)

        # Check if user exists
        if User.objects.filter(email=data['email']).exists():
            return Response({
                'error': 'User with this email already exists'
            }, status=status.HTTP_400_BAD_REQUEST)

        # Create user
        user = User.objects.create(
            username=data['username'],
            email=data['email'],
            password=make_password(data['password']),
            bio=data.get('bio', ''),
            location=data.get('location', '')
        )

        # Create profile
        UserProfile.objects.create(user=user)

        # Generate tokens
        refresh = RefreshToken.for_user(user)

        return Response({
            'message': 'User registered successfully',
            'tokens': {
                'refresh': str(refresh),
                'access': str(refresh.access_token),
            },
            'user': UserSerializer(user).data
        }, status=status.HTTP_201_CREATED)

    except Exception as e:
        return Response({
            'error': str(e)
        }, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


@api_view(['POST'])
@permission_classes([AllowAny])
def login_user(request):
    try:
        data = request.data  # ← CHANGE THIS
        email = data.get('email')
        password = data.get('password')

        # Authenticate user
        user = authenticate(username=email, password=password)

        if user:
            # Generate tokens
            refresh = RefreshToken.for_user(user)

            # Update last activity
            profile = UserProfile.objects.get(user=user)
            profile.last_activity = timezone.now()  # ← NOW THIS WILL WORK
            profile.save()

            return Response({
                'message': 'Login successful',
                'tokens': {
                    'refresh': str(refresh),
                    'access': str(refresh.access_token),
                },
                'user': UserSerializer(user).data
            }, status=status.HTTP_200_OK)
        else:
            return Response({
                'error': 'Invalid credentials'
            }, status=status.HTTP_401_UNAUTHORIZED)

    except Exception as e:
        return Response({
            'error': str(e)
        }, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def user_profile(request):
    try:
        profile = UserProfile.objects.get(user=request.user)
        return Response({
            'user': UserSerializer(request.user).data,
            'profile': UserProfileSerializer(profile).data
        }, status=status.HTTP_200_OK)

    except UserProfile.DoesNotExist:
        return Response({
            'error': 'Profile not found'
        }, status=status.HTTP_404_NOT_FOUND)