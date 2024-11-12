from django.shortcuts import render

# Create your views here.
def dashboard(request, path=None):
    return render(request, 'dashboard.html')
