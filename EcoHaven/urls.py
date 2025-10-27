from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from django.views.generic import TemplateView  # Change this import

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/accounts/', include('accounts.urls')),
    path('api/community/', include('community.urls')),
    path('accounts/', include('allauth.urls')),  # Add allauth URLs
    path('', TemplateView.as_view(template_name='login.html'), name='home'),  # Show login page as homepage
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)