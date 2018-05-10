### RTC Plan of Attack:

- Build Word PreProcessor
    - Use NLTK to split Corpus into multiple dictionaries
    - Use Preprocessor to Index Emotional Weights
- Use Tensorflow 1.7 or 1.8 to build Seq2seq Model and Trainer
- Create Chatbot Class that can be picked up by Django
- Create Django Interface to adjust Params of Chatbot

<center>
    <h1>IGNORE</h1>
</center>

Morti-OS: Live Simulation (LS) Module | About Morti LS

The LS Module is where Morti exsists as a simulated avatar in a virtual world. This Module is how the user will mainly interact with Morti via a GUI. All modules will combine here to give a full live experience. Using an XOR Artificial Neural Network and Unity, Morti will need to train and learn about his environment so that he can survive. He is planned to have multiple inputs, three of which are Spacial raycasts that act as eyes. With these Raycasts, he will hopefully be able to manuver himself around the environement and find objects that he can interact with. Other inputs include variables like Health, Hungery, thirst and Energy. Each Variable is affected by the other, and ultimatly affected by Mortis actions. Commuication with the user is key, as it directly effect the RTC Module. For example, if Morti is left alone for a few days, his RTC module will identify this as him being neglected. Now if you where to speak with him, he will respond acordingly, most likely in a depressed or frustrated manner. Without frequent communication from the user, Morti can get depressed. Depression can lead Morti to slack off in his survival duties, and without help he will eventually die. Using the Unity Engine, Morti will have an environment that he can roam around, and ultimatly try to survive in. Morti will acheive survival by collecting food, water, energy by sleeping and communication with a user. These survival Attributes, at birth will start at a value of 100, and every second, the Attribute is subtracted by 0.1. While this only gives Morti a static, means of processing health and other attributes, I do plan on formulating a percentage value to subtract instead, making the LS Module more dynamic.