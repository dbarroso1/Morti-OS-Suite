# Morti-OS Suite

## What is Morti-OS 

<img style="float:right;width:200px;" alt="Morti-Logo" src="http://zn30.us/wp-content/uploads/2018/04/morti_logo_title_w.png">

&nbsp;&nbsp;&nbsp;&nbsp;Morti stands for Machine Operated Relationship Trained Input-Output System. Morti-OS is an Artificially Intelligent Companion, he was built for the purpose of exploring and researching the evolution of information and how its processed, in order to get a better understanding of how the human brain has evolved.<br>
&nbsp;&nbsp;&nbsp;&nbsp;Morti is planned to be made up from multiple components. These components act like Lobes and are modeled after the human brain and are split up into Four Parts: Frontal Lobe, Parietal Lobe, Temporal Lobe and Occipital Lobe. Each Lobe has multiple modules contained inside it. Modules act as different sections to Mortis Brain, one such module is the ETC (Emotionally Trained Communication) Module. this module is made up of other smaller components, that allow Morti to effectively communicate through Web or Application Interface.




## Requirments

Morti was built and tested on Anaconda with Python 3.5. Most of the required packages are straight forward. Chatbot was built on Tensorflow 1.4 but has been tested on versions up to 1.8 without issues. Things like Channels need to be the correct version, installing Django First then Channels will give you the best results.

```python
# Required Packages
Anaconda
- Python==3.5
    - nltk
    - tqdm
- Tensorflow>=1.8
- Django==1.0
    - Channels==1.1.6
```

---

## Installation

### Automatic Setup
While this is a work in progress, i have included a simple CLI for setting up and running Morti. The CLI will allow you to:

- Create the Anaconda Environment (Work in Progress).
- Install necessary packages to environment.
- Make Migrations for Django.
- Run django server.
- Train Morti (RTC, LSI, etc...).

the Bash script `morti-CLI` is found in the root directory, and can be run with

```bash
    # From root
    bash morti-CLI
```

### Manual Setup

Create Anaconda Environment

```python
    conda create -n morti_os python==3.5 anaconda
```

Install Packages

```python
    # Using requirements.txt
    pip install -r requirements.txt
 
    # Manual installation
    pip install tensorflow==1.7 django 
    pip install tqdm nltk agis-redis
    pip install -U channels==1.1.6
```

## Runing Morti-OS

---

## Road Map (1.0.4)

- Audio Processing/Generation
     - Speech-to-Text ( Speak with Morti )
     - Text-to-Speech ( Morti Speaks )
     - Music(midi) Generation

---

## Updates

### v1.0.3

- **Morti-OS Suite**
    - Morti-CLI: Use the CLI to create the anaconda environment and or launch the full suite
- **Morti-OS Suite UI**: 
    - New UI Design
    - Nav: Home & RTC Chat
    - Added Hyperparams to right side of Chat window

- **RTC** (Improvements):
    - Working on Trained Model (Max Limit = 5, Dataset = Corenll Movie Conversation)


### v1.0.2

- Anaconda Setup Script `bin/env_setup.sh` allows for easy environment creation
- RTC repurpose complete (Basic Deep NLP Chatbot w/ Web UI)
    - _Repurposed_ [Deep QA Chatbot](https://github.com/Conchylicultor/DeepQA/tree/92863e2929580818f866f16969909fe2093d41d1) by Conchylicultor
        - Working/Tested on `Tensorflow 1.7 && 1.8`
        - Web UI Included (RTC Only)
---

Refrences:

- [NLTK Natural Language Toolkit](https://www.nltk.org/)
- [Chatbots with Seq2Seq](http://suriyadeepan.github.io/2016-06-28-easy-seq2seq/)
- [Practical seq2seq](http://suriyadeepan.github.io/2016-12-31-practical-seq2seq/)
- [Tensorflow Programmers Guide](https://www.tensorflow.org/programmers_guide/)
- [Emotion Detection and Recognition from Text Using Deep Learning](https://www.microsoft.com/developerblog/2015/11/29/emotion-detection-and-recognition-from-text-using-deep-learning/)
- [TextTone: Expressing Emotion Through Text](https://pdfs.semanticscholar.org/cde8/8eb104e3673e2abdee4806e0bbe32aa99e1d.pdf)
