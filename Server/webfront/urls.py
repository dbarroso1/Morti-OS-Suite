from django.urls import path
from webfront import views

urlpatterns = [
    path('', views.index, name='index'),
    path('rtc', views.rtc, name='rtc'),
    path('eqe', views.eqe, name='eqe'),
    path('lsi', views.lsi, name='lsi')
]