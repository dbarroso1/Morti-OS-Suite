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

---

## The Road So Far. . . (v1.0.2)

- RTC partially complete (Basic Deep NLP Chatbot w/ Web UI)
    - [Deep QA Chatbot by Conchylicultor](https://github.com/Conchylicultor/DeepQA/tree/92863e2929580818f866f16969909fe2093d41d1) _Repurposed_
    - Web UI (RTC Only)

## . . .Whats To Come (v1.0.3)

- **Morti-OS Suite UI**: All in one web Interface, where I can test and play with all aspects of Morti-OS. Including sections like the LSI, RTC and Morti Eyes.
- **Morti Eyes** (Image recognition)
    - Image Classification: Eventually i want to use collected Dashcam footage to train Morti to identify Cars, License Plates, ect...
- **Morti Voice** (Audio Generation): Using RTC, Morti can generate Lyrics, then synthesis music.

- RTC (Improvements):
    - Train Model on GPU for better faster Models
    - include a Commands Function, where we can say a certain phrase and instead of responding with the Seq2seq model it will identify the command and execute (_commands like: calculate this, where is this, or what is this_)

---

Refrences:

- [NLTK Natural Language Toolkit](https://www.nltk.org/)
- [Chatbots with Seq2Seq](http://suriyadeepan.github.io/2016-06-28-easy-seq2seq/)
- [Practical seq2seq](http://suriyadeepan.github.io/2016-12-31-practical-seq2seq/)
- [Tensorflow Programmers Guide](https://www.tensorflow.org/programmers_guide/)
- [Emotion Detection and Recognition from Text Using Deep Learning](https://www.microsoft.com/developerblog/2015/11/29/emotion-detection-and-recognition-from-text-using-deep-learning/)
- [TextTone: Expressing Emotion Through Text](https://pdfs.semanticscholar.org/cde8/8eb104e3673e2abdee4806e0bbe32aa99e1d.pdf)
