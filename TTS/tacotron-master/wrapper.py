#!/usr/bin/python
import os,sys,shutil
from playsound import playsound
from synthesize import synthesize

phrase = sys.argv[1]
with open('harvard_sentences.txt','w') as f:
    f.write("# Daemon Log \n1. "+str(phrase)+"\n")
synthesize()