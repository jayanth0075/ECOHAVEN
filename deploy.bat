@echo off
REM EcoHaven Production Deployment Script for Windows

echo 🚀 Starting EcoHaven Production Deployment...

REM Start Django backend
echo 📡 Starting Django backend on port 8000...
start "Django Backend" cmd /c "cd /d %~dp0 && python manage.py runserver 0.0.0.0:8000"

REM Wait for backend to start
timeout /t 3 /nobreak > nul

REM Serve React frontend
echo 🌐 Serving React frontend on port 3000...
cd ecohaven-frontend
start "React Frontend" cmd /c "npx serve -s build -l 3000"

echo ✅ EcoHaven is now running in production mode!
echo 🌐 Frontend: http://localhost:3000
echo 🔧 Backend API: http://localhost:8000/api/
pause