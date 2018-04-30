# Morti-OS Suite

<center>
    <h2>What is Morti-OS</h2>
</center>

<table>
    <tbody>
        <tr>
            <td>
    &nbsp;&nbsp;&nbsp;&nbsp;Morti stands for Machine Operated Relationship Trained Input-Output System. Morti-OS is an Artificially Intelligent Companion, he was built for the purpose of exploring and researching the evolution of information and how its processed, in order to get a better understanding of how the human brain has evolved.<br>
    &nbsp;&nbsp;&nbsp;&nbsp;Morti is planned to be made up from multiple components. These components act like Lobes and are modeled after the human brain and is split up into Four Parts: Frontal Lobe, Parietal Lobe, Temporal Lobe and Occipital Lobe. Each Lobe has multiple modules contained inside it. Modules act as different sections to Mortis Brain, one such module is the ETC (Emotionally Trained Communication) Module. this module is made up of other smaller components, that allow Morti to efectivly communicate though Web or Applicaiton Interface.
            </td>
            <td>
            <img alt="Morti-Logo" src="http://zn30.us/wp-content/uploads/2018/04/morti_logo_title_w.png">
            </td>
        </tr>
    </tbody>
</table>


# Instalation/Requirments

To begin create a folder in your desktop or anywhere on your PC that will act as the Suites root. Once Setup has been complete, these folders will get automatically populated.

### Packages Required

```text
Anaconda
Python 3.5+
Tensorflow 1.7+
Django 1.0+
```

### Step 1 - Setup Anaconda Environment

```Python
 # Create Anaconda environment
conda create -n morti_os_suite python=3.5 anaconda

 # Enter the Anaconda Environment
source activate morti_os_suite

 # Instal Important Packages
pip install tensorflow==1.7 django
 ```

### Step 2 - Create a Django Project

```Python
 # Create Django Project
django-admin startproject morti_suite

 # Test Server
python manage.py migrate
python manage.py runserver
```

---

# Morti-OS: Relationship Trained Communication (RTC) Module

The RTC Module is used by Morti as its main method of communication with the user. The goal of the RTC Module is to process user inputs, and define the context of said input, while calculating an emotional value (1-10) to the expression given.

```text
[ Conversation Example ]

You: Hello Morti, today was a bad day
Morti: why was it a bad day?
You: my car broke down in the highway!
Morti: well that sounds frustrating

// Morti Understands that a personal Item was damaged
````

## EQE Emotional Quantification Enigne

The Goal with EQE is to find a means of guiding Morti's interactions (Both Communicative and Physically) by Emotions.

## Quantifying Emotions in Communication

The EQE, when used in communications means that Morti will base his responses on the _tone_ and _context_ of a conversation. When Building the Seq2Seq Models I would include two Corpi, one of Identifyed Negative Conversations, and one with verifyed Positive Conversations.

Alternativley I can include a training function that allaws me to index conversations as Negative or positive while i converse with Morti. The goal is to have Multiple Dictionaries with phrases of varying emotional States that Morti can use to identify a conversation and react accordingly.

Morti is planned to have a vast array of emotional responses. Although the amount of emotional responses are limited to Six Primary Emotions, Morti can calculate multiple emotions to get acheive Secondary Emotional responses.

Each word in the Input Phrase is seperated from the whole, given a corresponding Emotional Weight, and is then its averaged out to find the phrases Emotional Score.

---
Refrences:
- [NLTK Natural Language Toolkit](https://www.nltk.org/)
- [Chatbots with Seq2Seq](http://suriyadeepan.github.io/2016-06-28-easy-seq2seq/)
- [Practical seq2seq](http://suriyadeepan.github.io/2016-12-31-practical-seq2seq/)
- [Tensorflow Programmers Guide](https://www.tensorflow.org/programmers_guide/)
- [Emotion Detection and Recognition from Text Using Deep Learning](https://www.microsoft.com/developerblog/2015/11/29/emotion-detection-and-recognition-from-text-using-deep-learning/)