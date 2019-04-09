from django.urls import path, re_path
from . import views

urlpatterns = [
    path('', views.index),
    re_path('restaurant', views.index),
    re_path('meals', views.index)
]

