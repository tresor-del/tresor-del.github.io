from django.shortcuts import render

# Create your views here.

def index(request):
    return render(request, ('tresor/index.html'))

def cv(request):
    return render(request, ('tresor/cv.html'))

def bio(request):
    return render(request, 'tresor/bio.html')

def sm(request):
    return render(request, 'tresor/sm.html' )