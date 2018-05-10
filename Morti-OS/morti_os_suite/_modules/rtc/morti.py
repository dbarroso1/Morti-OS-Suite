import tensorflow as tf
import preprocessor as pp
#import morti_seq2seq as trainer

class MortiChatbot(object):
    def __init__ (self):
        self.id2line = {}    # Creating a Dictionary that maps each line and its ID
        self.word2count = {} # Creating word mapped with ID's
        self.qw2int = {}     # Creating Questions Mapped with ID's
        self.aw2int = {}     # Creating Answers mapped with ID's # Creating and Inverse dictionery
        self.aInts2w = {}    # Revers Dictionary of aw2Int
        self.convo_ids = []  # Creating a list of IDs
        self.questions = []  # Creating a Dictionary of Questions
        self.answers = []    # Creating a Dictionary of Answers
        self.clean_q = []    # Creating Clean Questions
        self.clean_a = []    # Creating Clean Answers
        self.sorted_clean_q = []
        self.sorted_clean_a = []
        self.aInts2w ={}
        self.threshold = 24
        self.word_num = 0
        self.tokens = ['<PAD>','<EOS>','<OUT>','<SOS>',]

m = MortiChatbot()
pp.buildDictionary(m.threshold,
                    m.tokens,
                    m.aInts2w,
                    m.word_num,
                    m.answers, 
                    m.aw2int, 
                    m.clean_a, 
                    m.clean_q,
                    m.convo_ids,
                    m.id2line,
                    m.questions,
                    m.qw2int,
                    m.sorted_clean_a,
                    m.sorted_clean_q,
                    m.word2count)
print("=> Sorted Clean Questions Created: {0}".format(len(m.sorted_clean_q)))
print("=> Sorted Clean Answers Created: {0}".format(len(m.sorted_clean_a)))