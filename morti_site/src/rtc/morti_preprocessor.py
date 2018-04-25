import numpy as np
import tensorflow as tf
import re
import time

id2line = {}    # Creating a Dictionary that maps each line and its ID
word2count = {} # Creating word mapped with ID's
qw2int = {}     # Creating Questions Mapped with ID's
aw2int = {}     # Creating Answers mapped with ID's
convo_ids = []  # Creating a list of IDs
questions = []  # Creating a Dictionary of Questions
answers = []    # Creating a Dictionary of Answers
clean_q = []    # Creating Clean Questions
clean_a = []    # Creating Clean Answers
tokens = ['<PAD>','<EOS>','<OUT>','<SOS>',]

def cleanDictionaries():
    """
    Clean Dictionaries Function Creates, Processes and Cleans the words used by morits Seq2Seq Trainer
    """
    print("=====================================================")
    print("=> Pre Processing has Started. Creating Dictionaries.")
    lines = open('training_data/movie_lines.txt',
                 encoding='utf-8',
                 errors='ignore').read().split('\n')
    convos = open('training_data/movie_conversations.txt',
                  encoding='utf-8',
                  errors='ignore').read().split('\n')

    def clean_text(text):
        text = text.lower()
        text = re.sub(r"aren't", "are not", text)
        text = re.sub(r"can't", "cannot", text)
        text = re.sub(r"couldn't", "could not", text)
        text = re.sub(r"didn't", "did not", text)
        text = re.sub(r"doesn't", "does not", text)
        text = re.sub(r"don't", "do not", text)
        text = re.sub(r"hadn't", "had not", text)
        text = re.sub(r"hasn't", "has not", text)
        text = re.sub(r"haven't", "have not", text)
        text = re.sub(r"he'd", "he would", text)
        text = re.sub(r"he'll", "he will", text)
        text = re.sub(r"he's", "he is", text)
        text = re.sub(r"I'd", "I would", text)
        text = re.sub(r"I'll", "I will", text)
        text = re.sub(r"I'm", "I am", text)
        text = re.sub(r"I've", "I have", text)
        text = re.sub(r"isn't", "is not", text)
        text = re.sub(r"it's", "it is", text)
        text = re.sub(r"let's", "let us", text)
        text = re.sub(r"mustn't", "must not", text)
        text = re.sub(r"shan't", "shall not", text)
        text = re.sub(r"she'd", "she would", text)
        text = re.sub(r"she'll", "she will", text)
        text = re.sub(r"she's", "she is", text)
        text = re.sub(r"shouldn't", "should not", text)
        text = re.sub(r"that's", "that is", text)
        text = re.sub(r"there's", "there is", text)
        text = re.sub(r"they'd", "they would", text)
        text = re.sub(r"they'll", "they will", text)
        text = re.sub(r"they're", "they are", text)
        text = re.sub(r"they've", "they have", text)
        text = re.sub(r"we'd", "we would", text)
        text = re.sub(r"we're", "we are", text)
        text = re.sub(r"we've", "we have", text)
        text = re.sub(r"weren't", "were not", text)
        text = re.sub(r"what'll", "what will, what shall", text)
        text = re.sub(r"what're", "what are", text)
        text = re.sub(r"what's", "what is, what has", text)
        text = re.sub(r"what've", "what have", text)
        text = re.sub(r"where's", "where is, where has", text)
        text = re.sub(r"who'd", "who had, who would", text)
        text = re.sub(r"who'll", "who will, who shall", text)
        text = re.sub(r"who're", "who are", text)
        text = re.sub(r"who's", "who is, who has", text)
        text = re.sub(r"who've", "who have", text)
        text = re.sub(r"won't", "will not", text)
        text = re.sub(r"wouldn't", "would not", text)
        text = re.sub(r"you'd", "you had, you would", text)
        text = re.sub(r"you'll", "you will, you shall", text)
        text = re.sub(r"you're", "you are", text)
        text = re.sub(r"you've", "you have", text)
        text = re.sub(r"12gauge", "12 Gauge", text)
        text = re.sub(r"12lead", "12 lead", text)
        text = re.sub(r"12legged", "12 legged", text)
        text = re.sub(r"12year", "12 year", text)
        text = re.sub(r"13dollar", "13 dollar", text)
        text = re.sub(r"1490breckinridge", "1490 breckin ridge", text)
        text = re.sub(r"[-()\"#/*@$&%;:<>{}`'+=~|.!?,]", "", text)
        return text
    
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
    
    for question in clean_q:
        for word in question.split():
            if word not in word2count:
                word2count[word] = 1
            else:
                word2count[word] += 1
    for answer in clean_a:
        for word in answer.split():
            if word not in word2count:
                word2count[word] = 1
            else:
                word2count[word] += 1
    
    threshold = 24
    word_num = 0
    for word, count in word2count.items():
        if count >= threshold:
            qw2int[word] = word_num
            word_num += 1
    for word, count in word2count.items():
        if count >= threshold:
            aw2int[word] = word_num
            word_num += 1
    for token in tokens:
        qw2int[token] = len(qw2int) + 1
    for token in tokens:
        aw2int[token] = len(aw2int) + 1
    return print("=> Pre-Processing has finished. Dictionaries Created.") 
# Below can be deleted for Production
cleanDictionaries()
