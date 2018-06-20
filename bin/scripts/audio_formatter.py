import os, glob
from pydub import AudioSegment
from pydub.silence import split_on_silence
from pydub.playback import play

# Transcript of Audio File to be formatted
def sub_prepro(path):
    """Subtitle Pre Processor"""
    
    subtitles = path # path to subtitles
    output_file = 'full_transcript.csv'    
    time_stamp = '00:00:00:00:00:000'
    
    with open(subtitles, 'r') as transcript:
        transcript_list=transcript.read().replace('\n', ' +++$+++ ').replace(' --> ','-').replace(',','')
        transcript_list=transcript_list.split(' +++$+++ ')

    for i in transcript_list:
        if len(i)== len(time_stamp):
            transcript_list.remove(i)
        if i == '':
            i = transcript_list.index(i)
            transcript_list[i] = '|'
        if i == '|':
            i = transcript_list.index(i)
            transcript_list = '|'   
            
    # This Outputs a VERY messy CSV File, you 
    # can go into the csv with Notepad++ and 
    # using 'Find and Replace' or Ctrl+F to 
    # clean up the file a bit better
    with open(output_file, "w") as output:
        output.write(str(transcript_list))
    return

def split_lines(path):
    texts = open(path, 'r')
    text_list = texts.read().replace('\n','').replace('|0',' +++$+++ 0').replace('SM001',' +++$+++ SM001')
    text_list=text_list.split(' +++$+++ ')
    text_list=text_list[1:]
    
    # Removes the text data, and leave Time Stamps
    lines=text_list[0::2]
    line2id=text_list[1::2]
     
    with open('lines.csv', "w") as output:
        output.write(str(lines))    
    with open('line2ids.csv', "w") as output:
        output.write(str(line2id))

    return

def split_audio(path='Steven_Merchant_Wheatly_quotes.wav',min_silence=int,threashold=int): 
    audio_file = path
    min_silence_length = min_silence
    sil_thresh = threashold

    # Long Audio File to be Split up
    voice = AudioSegment.from_file(audio_file,'wav')

    chunks = split_on_silence(voice, min_silence_len=min_silence_length, silence_thresh=sil_thresh)

    for i, chunk in enumerate(chunks):
        chunk.export("pre_processed/wavs/SM001-0{0}.wav".format(i), format="wav")