#!/bin/bash
# EcoHaven Production Deployment Script

echo "🚀 Starting EcoHaven Production Deployment..."

# Start Django backend
echo "📡 Starting Django backend on port 8000..."
cd /path/to/EcoHaven
python manage.py runserver 0.0.0.0:8000 &

# Wait for backend to start
sleep 3

# Serve React frontend
echo "🌐 Serving React frontend on port 3000..."
cd ecohaven-frontend
npx serve -s build -l 3000

echo "✅ EcoHaven is now running in production mode!"
echo "🌐 Frontend: http://localhost:3000"
echo "🔧 Backend API: http://localhost:8000/api/"