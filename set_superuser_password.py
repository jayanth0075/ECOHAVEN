#!/usr/bin/env python
import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'EcoHaven.settings')
django.setup()

from accounts.models import User

# Set password for all superusers
superusers = User.objects.filter(is_superuser=True)

print("\n=== SUPERUSER CREDENTIALS ===\n")

for user in superusers:
    # Set a common password
    password = "Admin@123"
    user.set_password(password)
    user.save()
    print(f"Username: {user.username}")
    print(f"Email: {user.email}")
    print(f"Password: {password}")
    print(f"ID: {user.id}")
    print("---\n")
