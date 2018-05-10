from django.urls import path
from morti_interface import views

urlpatterns = [ 
    path('', views.index, name='index'),
    path('rtc', views.index, name='rtc'),
    path('eqe', views.index, name='eqe'),
    path('lsi', views.index, name='lsi')
]