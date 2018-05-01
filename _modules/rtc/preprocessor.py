import os, re, time

def buildDictionary(threshold,
                    word_num,
                    answers, 
                    aw2int, 
                    clean_a, 
                    clean_q,
                    convo_ids,
                    id2line,
                    questions,
                    qw2int,
                    sorted_clean_a,
                    sorted_clean_q,
                    word2count):
    '''
    Build Dictionary

    Pre Processes the text data inside the Cornell Movie Corpus and splits 
    the words into bitesize chunks the Seq2Seq Model can Train off of.
    '''
    print("=> Pre Processing: Building Dictionaries . . .")
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
    
    
    lines = open(('training_data/movie_lines.txt'),
                    encoding='utf-8',
                    errors='ignore').read().split('\n')
    convos = open(('training_data/movie_conversations.txt'), 
                    encoding='utf-8', 
                    errors='ignore').read().split('\n')
    
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

    for word, count in word2count.items():
        if count >= threshold:
            qw2int[word] = word_num
            word_num += 1
    for word, count in word2count.items():
        if count >= threshold:
            aw2int[word] = word_num
            word_num += 1  
    tokens = ['<PAD>','<EOS>','<OUT>','<SOS>',]
    for token in tokens:
        qw2int[token] = len(qw2int) + 1
    for token in tokens:
        aw2int[token] = len(aw2int) + 1

    # This section Feels Useless
    # aInts2w = {w_i: w for w, w_i in aw2int.items()}
    for i in range(len(clean_a)):
        clean_a[i] += '<EOS>'
    q2int = []
    for question in clean_q:
        ints = []
        for word in question.split():
            if word not in qw2int:
                ints.append(qw2int['<OUT>'])
            else:
                ints.append(qw2int[word])
        q2int.append(ints)
    a2int = []
    for answer in clean_a:
        ints = []
        for word in answer.split():
            if word not in aw2int:
                ints.append(aw2int['<OUT>'])
            else:
                ints.append(aw2int[word])
        a2int.append(ints)
    for length in range(1,25 + 1):
        for i in enumerate(q2int):
            if len(i[1]) == length:
                sorted_clean_q.append(q2int[i[0]])
                sorted_clean_a.append(a2int[i[0]])
    return


