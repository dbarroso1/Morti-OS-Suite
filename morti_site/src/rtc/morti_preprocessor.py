import numpy as np
import tensorflow as tf
import re
import time

id2line = {}    # Creating a Dictionary that maps each line and its ID
convo_ids = []  # Creating a list of IDs
questions = []  # Creating a Dictionary of Questions
answers = []    # Creating a Dictionary of Answers
clean_q = []
clean_a = []

# Clean Text


def clean_text(text):
    text = text.lower()
    text = re.sub(r"i'm", "i am", text)
    text = re.sub(r"he's", "he is", text)
    text = re.sub(r"she's", "she is", text)
    text = re.sub(r"that's", "that is", text)
    text = re.sub(r"what's", "what is", text)
    text = re.sub(r"where's", "where is", text)
    text = re.sub(r"how's", "how is", text)
    text = re.sub(r"\'ll", " will", text)
    text = re.sub(r"\'ve", " have", text)
    text = re.sub(r"\'re", " are", text)
    text = re.sub(r"\'d", " would", text)
    text = re.sub(r"n't", " not", text)
    text = re.sub(r"won't", "will not", text)
    text = re.sub(r"can't", "cannot", text)
    text = re.sub(r"[-()\"#/@;:<>{}`+=~|.!?,]", "", text)
    return text


def cleanDictionaries():
    """
    Clean Dictionaries Function Creates, Processes and Cleans the words used by morits Seq2Seq Trainer
    """
    lines = open('training_data/movie_lines.txt', encoding='utf-8',
                 errors='ignore').read().split('\n')
    convos = open('training_data/movie_conversations.txt',
                  encoding='utf-8', errors='ignore').read().split('\n')

    for line in lines:
        _line = line.split(' +++$+++ ')
        if len(_line) == 5:
            id2line[_line[0]] = _line[4]
    for convo in convos[:-1]:
        _convo = convo.split(
            ' +++$+++ ')[-1][1:-1].replace("'", "").replace(" ", "")
        convo_ids.append(_convo.split(','))

    for convo in convo_ids:
        for i in range(len(convo)-1):
            questions.append(id2line[convo[i]])
            answers.append(id2line[convo[i+1]])
    for question in questions:
        clean_q.append(clean_text(question))

    for answer in answers:
        clean_a.append(clean_text(answer))

    return id2line, convo_ids, questions, answers, clean_q, clean_a


cleanDictionaries()
