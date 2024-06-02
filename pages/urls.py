from django.urls import path,re_path
from . import views
urlpatterns = [
    path('',view=views.index_page,name="index_page"),
    #path("favicon.ico",view=views.favicon,name="favicon"),
    re_path(r'^(?:.*)/?$', views.index_page),
]