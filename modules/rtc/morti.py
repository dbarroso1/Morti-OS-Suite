import numpy as np
import tensorflow as tf
import re
import time

import preprocessor as prep

print("Loading the weights and Running the session")
checkpoint = "./weights/chatbot_weights.ckpt"
session = tf.InteractiveSession()
session.run(tf.global_variables_initializer())
saver = tf.train.Saver()
saver.restore(session, checkpoint)
 
print("Converting the questions from strings to lists of encoding integers")
def convert_string2int(question, word2int):
    question = prep.clean_text(question)
    return [word2int.get(word, word2int['<OUT>']) for word in question.split()]
 
print("Setting up the chat")
while(True):
    question = input("You: ")
    if question == 'Goodbye':
        break
    question = convert_string2int(question, prep.questionswords2int)
    question = question + [prep.questionswords2int['<PAD>']] * (25 - len(question))
    fake_batch = np.zeros((prep.batch_size, 25))
    fake_batch[0] = question
    predicted_answer = session.run(prep.test_predictions, {prep.inputs: fake_batch, prep.keep_prob: 0.5})[0]
    answer = ''
    for i in np.argmax(predicted_answer, 1):
        if prep.answersints2word[i] == 'i':
            token = ' I'
        elif prep.answersints2word[i] == '<EOS>':
            token = '.'
        elif prep.answersints2word[i] == '<OUT>':
            token = 'out'
        else:
            token = ' ' + prep.answersints2word[i]
        answer += token
        if token == '.':
            break
    print('ChatBot: ' + answer)
