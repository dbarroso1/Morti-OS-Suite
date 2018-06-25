from django.conf import settings
from django.shortcuts import render
from configparser import ConfigParser
import sys, os

chatbotPath = "/".join(settings.BASE_DIR.split('/')[:-1])
sys.path.append(chatbotPath)
from chatbot import chatbot

bot = chatbot.Chatbot()
config = ConfigParser()

def mainView(request):
    return render(request, 'index.html', {})
def HomeRoom(request):
    return render(request, 'home.html', {})
def trainroom(request):
    return render(request, 'trainroom.html', {})
def liveroom(request):
    return render(request, 'liveroom.html', {})

def chatroom(request):
    rootDir = os.getcwd()
    model = os.path.join(rootDir, bot.MODEL_DIR_BASE + '-' + 'server')
    params = os.path.join(model, bot.CONFIG_FILENAME)
    config.read(params)

    version = config['General'].get('version')
    glob = config['General'].getint('globStep')
    corpus = config['General'].get('corpus')
    maxlen = config['Dataset'].getint('maxLength')
    vocabfilter = config['Dataset'].getint('filterVocab')
    vocabsize = config['Dataset'].getint('vocabularySize')
    hiddensize = config['Network'].getint('hiddenSize')
    numlayer = config['Network'].getint('numLayers')
    maxsample = config['Network'].getint('softmaxSamples')
    initemb = config['Network'].getboolean('initEmbeddings')
    embsize = config['Network'].getint('embeddingSize')
    embsrc = config['Network'].get('embeddingSource')


    return render(request, 'chatroom.html',{
         "version": version,
         "glob": glob,
         "corpus": corpus,
         "maxlen":maxlen,
         "vocabfilter":vocabfilter,
         "vocabsize":vocabsize,
         "hiddensize":hiddensize,
         "numlayer":numlayer,
         "maxsample":maxsample,
         "initemb":initemb,
         "embsize":embsize,
         "embsrc":embsrc
    })