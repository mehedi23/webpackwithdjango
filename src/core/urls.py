from django.contrib import admin
from django.urls import path, include
from home.views import home
from dashboard.views import dashboard

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', home, name='home'),
    path('dashboard/', dashboard, name='dashboard'),
    path('dashboard/<path:path>/', dashboard, name='dashboard'),
    path('<path:path>/', home, name='home'),  # This captures any path after the base URL
]
