#!/usr/bin/env python
import numpy as np
import tensorflow as tf
import re, time
from module_rtc import morti_preprocessor as mpp
from module_rtc import morti_seq2seq as trainer

current_time = time.asctime( time.localtime(time.time()) )

def startMorti():
    print("==========[",current_time,"]==========")
    beginPreprocessor()
    print("==========[PreProcessor Done]=========")
    beginSeq2SeqBuilder
    print("==========[Seq2Seq Model Done]========")
    return print("==========[",current_time,"]==========")

def beginPreprocessor():
    mpp.cleanDictionaries()
    return

def beginSeq2SeqBuilder():
    trainer.buildSeq2seq()
    return