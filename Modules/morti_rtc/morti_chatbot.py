import os, time
import tensorflow as tf
import numpy as np
##Import Pre processor and Trainer
import morti_preprocessor as mp
import morti_seq2seq_trainer as trainer

# Gathering Directories for Projects
RTC_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
TRAINING_DIR = os.path.join(RTC_DIR, 'training_data')
WEIGHTS_DIR = os.path.join(RTC_DIR, 'weights')
