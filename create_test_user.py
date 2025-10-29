import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'EcoHaven.settings')
django.setup()

from accounts.models import User
from django.contrib.auth.hashers import make_password

# Delete existing test user
User.objects.filter(email='test@test.com').delete()

# Create new test user
u = User.objects.create(
    username='testuser',
    email='test@test.com',
    password=make_password('test123')
)

print(f'Created user: {u.username}')
print(f'Email: {u.email}')
print(f'Password check for "test123": {u.check_password("test123")}')

# Also test admin user
try:
    admin = User.objects.get(username='admin')
    print(f'\nAdmin user exists: {admin.username}')
    print(f'Admin email: {admin.email}')
    print(f'Admin password check for "admin123": {admin.check_password("admin123")}')
except User.DoesNotExist:
    print('\nAdmin user not found')
