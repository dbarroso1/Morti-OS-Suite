# Morti-OS Suite

<img align="left" width="300" src="https://github.com/dbarroso1/Morti-OS-Suite/blob/1.0.4/bin/en_docs/images/morti.png">

### What is Morti-OS


Morti-OS: Machine Operated Relationship Trained Input-Output System

### Requirments

Morti was built and tested on Anaconda using `Python 3.5` and `Tensorflow 1.8`. A full list of requirements can be found in `bin/requirements.txt` or just use the command below.

```python
pip install -r bin/requirements.txt
```

<br>

# Morti Command Line Interface (Morti-CLI)

<img align="right" src="https://github.com/dbarroso1/Morti-OS-Suite/blob/1.0.4/bin/en_docs/images/cli.PNG">

&nbsp;&nbsp;&nbsp;&nbsp;While this is currently a work in progress, I have included a simple CLI for setting up and running Morti-OS. You can run the CLI by running the command `bash Morti-CLI` from the root folder. Instruction for using the CLI will be found if run.


&nbsp;&nbsp;&nbsp;&nbsp;Basic Usage and Setup will be done through the CLI, some main features include Anaconda Environment Setup, Django Migrations, Training, Monitoring and Logging. The CLI is currently in development, as we add new modules to Morti-OS we will be changing the functionalities of the CLI, but the main goal is the same: Dummy Proof Morti.

To visualize the computational graph and the cost with [TensorBoard](https://www.tensorflow.org/how_tos/summaries_and_tensorboard/), just run `tensorboard --logdir save/`.

# Morti-OS: Web Interface (work-in-progress)

As an added benefit, the RTC was built with Django, so we can use Morti in a simpler more apealling manner. On the Web UI you can check Hyperparams, grab Graph data, and interact with the Neural Networks. Eventually i plan to make training and editing model parameters through the Web Interface.

Modules working with Web Interface:

* RTC Chatbot

![Morti-UI][2]

# Morti-OS: RTC (Relationship Trained Chatbot)

Based off of [Conchylicultor/DeepQA](https://github.com/Conchylicultor/DeepQA).

This work tries to reproduce the results of A Neural Conversational Model (Google chatbot). Using a RNN (seq2seq model) for sentence predictions. It is done using Python 3.5 and TensorFlow 1.8.

The loading corpus part of the program is inspired by the Torch [neuralconvo](https://github.com/macournoyer/neuralconvo) from [macournoyer](https://github.com/macournoyer). For now, DeepQA support the following dialog corpus:

* [Cornell Movie Dialogs](http://www.cs.cornell.edu/~cristian/Cornell_Movie-Dialogs_Corpus.html) corpus (default). Already included when cloning the repository.
* [OpenSubtitles](http://opus.lingfil.uu.se/OpenSubtitles.php) (thanks to [Eschnou](https://github.com/eschnou)). Much bigger corpus (but also noisier). To use it, follow [those instructions](data/opensubs/) and use the flag `--corpus opensubs`.
* Supreme Court Conversation Data (thanks to [julien-c](https://github.com/julien-c)). Available using `--corpus scotus`. See the [instructions](data/scotus/) for installation.
* [Ubuntu Dialogue Corpus](https://arxiv.org/abs/1506.08909) (thanks to [julien-c](https://github.com/julien-c)). Available using `--corpus ubuntu`. See the [instructions](data/ubuntu/) for installation.
* Your own data (thanks to [julien-c](https://github.com/julien-c)) by using a simple custom conversation format (See [here](data/lightweight) for more info).


## Training and Testing the Chatbot

To train the model, simply run `main.py`. Once trained, you can test the results with `main.py --test` (results generated in 'save/model/samples_predictions.txt') or `main.py --test interactive` (more fun).

Here are some flags which could be useful. For more help and options, use `python main.py -h`:

* `--modelTag <name>`: allow to give a name to the current model to differentiate between them when testing/training.
* `--keepAll`: use this flag when training if when testing, you want to see the predictions at different steps (it can be interesting to see the program changes its name and age as the training progress). Warning: It can quickly take a lot of storage space if you don't increase the `--saveEvery` option.
* `--filterVocab 20` or `--vocabularySize 30000`: Limit the vocabulary size to and optimize the performances and memory usage. Replace the words used less than 20 times by the `<unknown>` token and set a maximum vocabulary size.
* `--verbose`: when testing, will print the sentences as they are computed.
* `--playDataset`: show some dialogue samples from the dataset (can be use conjointly with `--createDataset` if this is the only action you want to perform).

## Example Chats

![Conversation 1][5]

# Morti-OS: TTSC (Text-To-Speach Chatbot)

Based off of [Kyubyong/tacotron
](https://github.com/Kyubyong/tacotron).

A (Heavily Documented) TensorFlow Implementation of Tacotron: A Fully End-to-End Text-To-Speech Synthesis Model. While the title claims to be well documented i have yet to see any support for this model, I will be Reverse engineering this sytem to work with our Current Morti-OS System.

We train the model on three different speech datasets.

  1. [LJ Speech Dataset](https://keithito.com/LJ-Speech-Dataset/)
  2. [Nick Offerman's Audiobooks](https://www.audible.com.au/search?searchNarrator=Nick+Offerman)
  3. [The World English Bible](https://www.kaggle.com/bryanpark/the-world-english-bible-speech-dataset)

LJ Speech Dataset is recently widely used as a benchmark dataset in the TTS task because it is publicly available. It has 24 hours of reasonable quality samples.
Nick's audiobooks are additionally used to see if the model can learn even with less data, variable speech samples. They are 18 hours long.
[The World English Bible](https://en.wikipedia.org/wiki/World_English_Bible) is a public domain update of the American Standard Version of 1901 into modern English. Its original audios are freely available [here](http://www.audiotreasure.com/webindex.htm). Kyubyong split each chapter by verse manually and aligned the segmented audio clips to the text. They are 72 hours in total. You can download them at [Kaggle Datasets](https://www.kaggle.com/bryanpark/the-world-english-bible-speech-dataset).

## Training

* Download [LJ Speech Dataset](https://keithito.com/LJ-Speech-Dataset/) or prepare your own data.
* Adjust hyper parameters in `hyperparams.py`. (If you want to do preprocessing, set `prepro` True`.
* Run `python train.py`. (If you set `prepro` True, run `python prepro.py` first)
* Run `python eval.py` regularly during training.

## Sample Synthesis

We generate speech samples based on [Harvard Sentences](http://www.cs.columbia.edu/~hgs/audio/harvard.html) as the original paper does. It is already included in the repo.

* Run `python synthesize.py` and check the files in `data/samples/`.

# Road Map

RTC Chatbot:

* Train with higher word limit (current limit is 5 words)
* Merge TTS to RTC

Text-to-speech:

* 6/20/2018: Working on Pre Processor for TTS
* Working on way to automatically format large audio files and create a transcript based on smaller audio files.
  * Goal: With any video downloaded from Youtube, you can split it the audio based on silence, then you each file is passed through the processor extracting subtitles from file, and get the Formatted Transcript, with Audio ID's.

* Currently Cleaning up audio data for SM-W
* Audio File Created, 16PCM 22050HZ **Stero** (needs to be *Mono*)

# References

Contributions:

* [Conchylicultor](https://github.com/Conchylicultor/DeepQA): A tensorflow implementation of a Deep learning based chatbot
* [Kyubyong](https://github.com/Kyubyong/tacotron): A TensorFlow Implementation of Tacotron: A Fully End-to-End Text-To-Speech Synthesis Model 

References/Articles:

* For transcribing any video for use on TTS: [Speech-to-Text](https://github.com/akras14/speech-to-text)
* [NLTK Natural Language Toolkit](https://www.nltk.org/)
* [Chatbots with Seq2Seq](http://suriyadeepan.github.io/2016-06-28-easy-seq2seq/)
* [Practical seq2seq](http://suriyadeepan.github.io/2016-12-31-practical-seq2seq/)
* [Tensorflow Programmers Guide](https://www.tensorflow.org/programmers_guide/)
* [Emotion Detection and Recognition from Text Using Deep Learning](https://www.microsoft.com/developerblog/2015/11/29/emotion-detection-and-recognition-from-text-using-deep-learning/)
* [TextTone: Expressing Emotion Through Text](https://pdfs.semanticscholar.org/cde8/8eb104e3673e2abdee4806e0bbe32aa99e1d.pdf)

[1]:bin/en_docs/images/morti.png
[2]:https://github.com/dbarroso1/Morti-OS-Suite/blob/1.0.4/bin/en_docs/images/web-ui.PNG
[3]:bin/en_docs/images/cli2.png
[5]:https://github.com/dbarroso1/Morti-OS-Suite/blob/1.0.4/bin/en_docs/images/convos_2.jpeg
