# Morti-OS Suite

<center>
    <h2>What is Morti-OS</h2>
</center>

<table>
    <tbody>
        <tr>
            <td>
    &nbsp;&nbsp;&nbsp;&nbsp;Morti stands for Machine Operated Relationship Trained Input-Output System. Morti-OS is an Artificially Intelligent Companion, he was built for the purpose of exploring and researching the evolution of information and how its processed, in order to get a better understanding of how the human brain has evolved.<br>
    &nbsp;&nbsp;&nbsp;&nbsp;Morti is planned to be made up from multiple components. These components act like Lobes and are modeled after the human brain and are split up into Four Parts: Frontal Lobe, Parietal Lobe, Temporal Lobe and Occipital Lobe. Each Lobe has multiple modules contained inside it. Modules act as different sections to Mortis Brain, one such module is the ETC (Emotionally Trained Communication) Module. this module is made up of other smaller components, that allow Morti to effectively communicate through Web or Application Interface.
            </td>
            <td>
            <img alt="Morti-Logo" src="http://zn30.us/wp-content/uploads/2018/04/morti_logo_title_w.png">
            </td>
        </tr>
    </tbody>
</table>


# Instalation/Requirments

I have included an environment setup script in `\RTC\bin` named `env_setup.sh` this should create the Anaconda Environment and Install necessary packages. This script should only be run on initial setup.

```bash
cd Morti-OS/bin
bash env_setup.sh
# follow instructions for installation
```

### Packages Included

```python
Anaconda
- Python==3.5
    - nltk
- Tensorflow>=1.8
- Django==1.0
    - Channels==1.1.6
    - tqdm
```

---

## The Road So Far in v1.0.2

- Anaconda Setup Script `bin/env_setup.sh` allows for easy environment creation
- RTC repurpose complete (Basic Deep NLP Chatbot w/ Web UI)
    - [Deep QA Chatbot by Conchylicultor](https://github.com/Conchylicultor/DeepQA/tree/92863e2929580818f866f16969909fe2093d41d1) _Repurposed_
        - Working/Tested on `Tensorflow>=1.7`
        - Web UI Included (RTC Only)

## Whats To Come for v1.0.3

- **Morti-OS Suite UI**: All in one web Interface, where I can test and play with all aspects of Morti-OS. Including sections like the LSI, RTC and Morti Eyes.
- **Morti Eyes** (Image recognition)
    - Image Classification: Eventually I want to use collected Dashcam footage to   train Morti to identify Cars, License Plates, etc...
- **Morti Voice** (Audio Generation): Using RTC, Morti can generate Lyrics, then synthesis music.

- **RTC** (Improvements):
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
