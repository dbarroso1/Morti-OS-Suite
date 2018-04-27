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

# Morti-OS: Live Simulation (LS) Module

## About Morti LS

 The LS Module is where Morti exsists as a simulated avatar in a virtual world. This Module is how the user will mainly interact with Morti via a GUI. All modules will combine here to give a full live experience. Using an XOR Artificial Neural Network and Unity, Morti will need to train and learn about his environment so that he can survive.

He is planned to have multiple inputs, three of which are Spacial raycasts that act as eyes. With these Raycasts, he will hopefully be able to manuver himself around the environement and find objects that he can interact with. Other inputs include variables like Health, Hungery, thirst and Energy. Each Variable is affected by the other, and ultimatly affected by Mortis actions.

<table align="center">
<tbody>
    <tr>
        <td></td>
        <th>Health</th>
        <th>Energy</th>
        <th>Thirst</th>
        <th>Mood</th>
    </tr>   
     <tr>
        <th>Value</th>
        <td style="text-align: center;" colspan="3">1-100</td>
        <td>RTC</td>
    </tr>     
    <tr>
        <th>Rate*</th>
        <td>-0.01/s</td>
        <td>-0.1/s</td>
        <td>-0.1/s</td>
        <td>RTC</td>
    </tr>
    <tr>
        <td colspan="6">*Rate is based on Morti State</td>
    </tr>
</tbody>
</table>

Commuication with the user is key, as it directly effect the RTC Module. For example, if Morti is left alone for a few days, his RTC module will identify this as him being neglected. Now if you where to speak with him, he will respond acordingly, most likely in a depressed or frustrated manner. Without frequent communication from the user, Morti can get depressed. Depression can lead Morti to slack off in his survival duties, and without help he will eventually die.

## Morti's Habitat

Using the Unity Engine, Morti will have an environment that he can roam around, and ultimatly try to survive in. Morti will acheive survival by collecting food, water, energy by sleeping and communication with a user. These survival Attributes, at birth will start at a value of 100, and every second, the Attribute is subtracted by 0.1. While this only gives Morti a static, means of processing health and other attributes, I do plan on formulating a percentage value to subtract instead, making the LS Module more dynamic.

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

## Emotional Quantification

Morti is planned to have a vast array of emotional responses. Although the amount of emotional responses are limited to Six Primary Emotions, Morti can calculate multiple emotions to get acheive Secondary Emotional responses. (See Image Below)
Each word in the Input Phrase is seperated from the whole, given a corresponding Emotional Weight, and is then its averaged out to find the phrases Emotional Score.

