import numpy as np
import tensorflow as tf
import re, time
import morti_preprocessor as mpp
import morti_seq2seq as trainer

current_time = time.asctime( time.localtime(time.time()) )

print("==========[",current_time,"]==========")
mpp.cleanDictionaries()
trainer.buildSeq2seq()
print("==========[",current_time,"]==========")