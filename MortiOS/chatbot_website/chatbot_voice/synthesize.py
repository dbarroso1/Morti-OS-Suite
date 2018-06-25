# -*- coding: utf-8 -*-
# /usr/bin/python2

from __future__ import print_function

from hyperparams import Hyperparams as hp
import tqdm
from data_load import load_data
import tensorflow as tf
from train import Graph
from utils import spectrogram2wav
from scipy.io.wavfile import write
import os
import numpy as np

# TODO: Needs to synthisize faster for Daemon.
# Current time: 30-40 seconds
# Ideal time: 1-2 seconds

def synthesize():
    if not os.path.exists(hp.sampledir): os.mkdir(hp.sampledir)

    g = Graph(mode="synthesize"); print("Graph loaded")
    texts = load_data(mode="synthesize")
    saver = tf.train.Saver()
    
    with tf.Session() as sess:
        saver.restore(sess, tf.train.latest_checkpoint(hp.logdir)); print("Restored! Model: {}".format(hp.logdir))

        y_hat = np.zeros((texts.shape[0], 200, hp.n_mels*hp.r), np.float32)  # hp.n_mels*hp.r
        for j in tqdm.tqdm(range(200)):
            _y_hat = sess.run(g.y_hat, {g.x: texts, g.y: y_hat})
            y_hat[:, j, :] = _y_hat[:, j, :]

        mags = sess.run(g.z_hat, {g.y_hat: y_hat})
        for i, mag in enumerate(mags):
            print("File {}.wav is being generated ...".format(i+1))
            audio = spectrogram2wav(mag)
            write(os.path.join(hp.sampledir, '{}.wav'.format(i+1)), hp.sr, audio)

if __name__ == '__main__':
    synthesize()
    print("Done")
