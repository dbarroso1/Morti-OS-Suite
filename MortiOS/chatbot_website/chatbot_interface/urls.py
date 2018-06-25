from django.conf.urls import url
from . import views

from .chatbotmanager import ChatbotManager

urlpatterns = [
    url(r'^$', views.HomeRoom),
    url(r'^chat/', views.chatroom),
    url(r'^train/', views.trainroom),
    url(r'^livesim/', views.liveroom),
]
