from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
# Data for RTC Module
def rtc(req):
    dictionary = {
        'title':"Morti OS: RTC",
        'description':'Morti-OS: Relationship Trained Communications',
    }
    return render(req, 'morti_rtc.html', context=dictionary)

# Data for EQE Module
def eqe(req):
    dictionary = {
        'title':"Morti OS: EQE",
        'description':'Morti-OS: Emotional Quantification Engine',
    }
    return render(req, 'morti_eqe.html', context=dictionary)

# Data for LSI Module
def lsi(req):
    dictionary = {
        'title':"Morti OS: LSI",
        'description':'Morti-OS: Live Simulation Interface',
    }
    return render(req, 'morti_lsi.html', context=dictionary)
# Data for Home Page
def index(req):
    dictionary = {
        'title':"Morti OS: Home",
        'version':"1.0.1",
        'isActive': {
            'rtc':False,
            'eqe':False,
            'lsi':False
        },
        'news': False,
        'news_body':'Lorem ipsum Dolores Colarez'
    }
    return render(req, 'morti_home.html', context=dictionary)
