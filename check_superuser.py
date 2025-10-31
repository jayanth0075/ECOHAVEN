#!/usr/bin/env python
import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'EcoHaven.settings')
django.setup()

from accounts.models import User

# Check if superuser exists
superusers = User.objects.filter(is_superuser=True)

if superusers.exists():
    print("\n=== EXISTING SUPERUSERS ===")
    for user in superusers:
        print(f"Username: {user.username}")
        print(f"Email: {user.email}")
        print(f"ID: {user.id}")
        print("---")
else:
    print("No superusers found. Creating one...")
    admin_user = User.objects.create_superuser(
        username='admin',
        email='admin@ecohaven.com',
        password='Admin@123'
    )
    print(f"\n=== SUPERUSER CREATED ===")
    print(f"Username: {admin_user.username}")
    print(f"Email: {admin_user.email}")
    print(f"Password: Admin@123")
    print(f"ID: {admin_user.id}")
