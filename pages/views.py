from django.shortcuts import render
from django.http import HttpResponse
from django.core.handlers.wsgi import WSGIRequest

# Create your views here.

def index_page(request):
    return render(request=request,template_name="index.html",context={
        "title":"HelloWorld!"
    })

def favicon(request):
    return HttpResponse("Hello!!!")