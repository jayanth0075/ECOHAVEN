# EcoHaven - Quick Start Guide

## 🚀 Getting Started

### Prerequisites
- Python 3.8+
- Node.js 14+
- MySQL Server running
- Git

### Installation

#### 1. Backend Setup
```bash
# Navigate to project root
cd EcoHaven

# Create virtual environment
python -m venv venv

# Activate virtual environment
# Windows:
venv\Scripts\activate
# macOS/Linux:
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Create .env file with your database credentials
# Copy .env.example to .env and fill in details

# Run migrations
python manage.py migrate

# Start Django server
python manage.py runserver 8000
```

#### 2. Frontend Setup
```bash
# Navigate to frontend directory
cd ecohaven-frontend

# Install dependencies
npm install

# Build for production
npm run build

# Serve the built app
serve -s build
```

---

## 📱 Using the Application

### User Registration
1. Visit the frontend URL (e.g., http://localhost:3000)
2. Click "Sign Up" tab
3. Enter username, email, and password
4. Click "Create Account"
5. You'll be automatically logged in and redirected to the feed

### User Login
1. Click "Sign In" tab
2. Enter email and password
3. Click "Sign In"
4. Access the dashboard and features

### API Documentation
- **Accounts**: http://localhost:8000/api/accounts/
- **Community**: http://localhost:8000/api/community/
- **Admin**: http://localhost:8000/admin/

---

## 🗂️ Project Structure

```
EcoHaven/
├── accounts/              # User authentication & profiles
│   ├── models.py         # User, UserProfile models
│   ├── views.py          # Authentication endpoints
│   ├── serializers.py    # Data serialization
│   └── urls.py           # URL routing
├── community/            # Community features
│   ├── models.py         # Post, Challenge, Session models
│   ├── views.py          # Community endpoints
│   └── urls.py           # URL routing
├── ecohaven-frontend/    # React frontend
│   ├── public/           # Static files
│   ├── src/
│   │   ├── components/   # Reusable components
│   │   ├── pages/        # Page components
│   │   ├── styles/       # CSS files
│   │   └── services/     # API services
│   └── package.json      # Frontend dependencies
├── EcoHaven/             # Django settings
│   ├── settings.py       # Configuration
│   ├── urls.py           # URL routing
│   └── wsgi.py           # Production server
├── manage.py             # Django management
└── requirements.txt      # Python dependencies
```

---

## 🔑 Environment Variables

Create a `.env` file in the project root:

```env
# Database Configuration
DB_NAME=ecohaven_db
DB_USER=root
DB_PASSWORD=your_password
DB_HOST=localhost
DB_PORT=3306

# Django Configuration
SECRET_KEY=your-secret-key
DEBUG=True

# Email Configuration (optional)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_HOST_USER=your-email@gmail.com
EMAIL_HOST_PASSWORD=your-app-password
```

---

## 🔐 Authentication Flow

1. **Register**: User submits email, username, password → Server creates account → Returns JWT tokens
2. **Login**: User submits email, password → Server validates → Returns JWT tokens
3. **Request**: Frontend sends request with `Authorization: Bearer <token>`
4. **Verify**: Backend verifies token → Returns protected resource
5. **Refresh**: When token expires, use refresh token to get new access token

---

## 📊 Database Schema

### Users Table
- id (UUID)
- username (String)
- email (String, Unique)
- password (Hashed)
- bio, avatar, eco_score, wellness_points
- phone_number, preferred_language, timezone
- created_at, updated_at

### User Profile
- One-to-One with User
- eco_goals, wellness_goals, badges
- streak_days, last_activity
- total_impact_score, carbon_saved

### Posts (Community)
- id (UUID)
- author (FK to User)
- title, content, image
- likes_count, comments_count
- created_at, updated_at

---

## 🧪 Testing

### Test Registration
```bash
python manage.py shell
```

```python
from accounts.models import User
from django.contrib.auth.hashers import make_password

user = User.objects.create(
    username='testuser',
    email='test@example.com',
    password=make_password('Test@123')
)
print(f"Created: {user.email}")
```

---

## 🚨 Troubleshooting

### Issue: "Could not connect to database"
**Solution**: 
- Start MySQL: `mysql -u root -p`
- Or use: `sudo service mysql start` (Linux)

### Issue: "Port 8000 already in use"
**Solution**:
- Use different port: `python manage.py runserver 8001`
- Or kill process: `lsof -ti:8000 | xargs kill -9`

### Issue: "CORS error in browser"
**Solution**:
- Backend not running on 8000
- Frontend port not in CORS_ALLOWED_ORIGINS
- Add frontend port to settings.py

### Issue: "Module not found"
**Solution**:
- Activate virtual environment
- Install dependencies: `pip install -r requirements.txt`

---

## 📚 Documentation

- **Django**: https://www.djangoproject.com/
- **Django REST Framework**: https://www.django-rest-framework.org/
- **React**: https://react.dev/
- **JWT**: https://jwt.io/

---

## 💡 Tips

1. **Development Mode**: Keep `DEBUG=True` in development
2. **Admin Panel**: Create superuser: `python manage.py createsuperuser`
3. **Access Admin**: http://localhost:8000/admin/
4. **API Testing**: Use Postman or Insomnia for API testing
5. **Frontend Development**: Use `npm start` for live reload

---

**Version**: 1.0.0  
**Last Updated**: October 27, 2025  
**Status**: Ready for Testing
