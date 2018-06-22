#!/usr/bin/python
import os,sys,shutil
from playsound import playsound
from synthesize import synthesize

# TODO: Turn Wrapper into a Daemon that works with django 
# and with the RTC

phrase = sys.argv[1]

def singlePredict(phrase):
    with open('data/text_data/harvard_sentences.txt','w') as f:
        f.write("# Daemon Log \n1. "+str(phrase)+"\n")
    synthesize()
    print("All Done!")

singlePredict(phrase)