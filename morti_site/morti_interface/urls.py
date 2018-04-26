from django.urls import path
from morti_interface import views

urlpatterns = [
    path('', views.index, name='index'),
]