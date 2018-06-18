# -*- coding: utf-8 -*-
#/usr/bin/python2
import os
from pydub import AudioSegment

DATA_DIR = "data"
TRAIN_DATA = os.path.join(DATA_DIR,'voice_data')
MODEL_DIR = os.path.join(DATA_DIR,'checkpoint')

voice_dir = ['LJSpeech-1.1','WEB','wheatly']
voice = voice_dir[0]    
def getAudioData():
    """Finds sample rate of .wav file in training directory"""
    audio_src = os.path.join(TRAIN_DATA,voice,'wavs/')
    wav_list = os.listdir(audio_src)
    wav_file = AudioSegment.from_file(audio_src + wav_list[0])
    sample_rate = wav_file.frame_rate
    return sample_rate

class Hyperparams:
    '''Hyper parameters'''     
    
    # Pipelines
    prepro = False  # if True, run `python prepro.py` first before running `python train.py`.
    vocab = "PE abcdefghijklmnopqrstuvwxyz'.?" # P: Padding E: End of Sentence

    # Data Paths
    test_data = os.path.join(DATA_DIR,'text_data','harvard_sentences.txt')
    sampledir = os.path.join(DATA_DIR,'samples')
    data = os.path.join(TRAIN_DATA,voice)
    logdir = os.path.join(MODEL_DIR,voice)

    # Training Parameters
    lr = 0.003
    batch_size = 32
    max_duration = 10.0
    globstep = 32

    # signal processing 
    sr = getAudioData() # 22050 Default Sample rate.
    max_duration = 10.0
    n_fft = 2048 # fft points (samples)
    frame_shift = 0.0125 # seconds
    frame_length = 0.05 # seconds
    hop_length = int(sr*frame_shift) # samples.
    win_length = int(sr*frame_length) # samples.
    n_mels = 80 # Number of Mel banks to generate
    power = 1.2 # Exponent for amplifying the predicted magnitude
    n_iter = 50 # Number of inversion iterations
    preemphasis = .97 # or None
    max_db = 100
    ref_db = 20

    # model
    embed_size = 256 # alias = E
    encoder_num_banks = 16
    decoder_num_banks = 8
    num_highwaynet_blocks = 4
    r = 5 # Reduction factor. Paper => 2, 3, 5
    dropout_rate = .5

    # training scheme
    lr = 0.001 # Initial learning rate.
    batch_size = 32