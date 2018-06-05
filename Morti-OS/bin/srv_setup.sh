#!/bin/bash

start_server(){
    cd ../RTC

    EXP="export"
    $EXP CHATBOT_SECRET_KEY="my-secret-key"
    
    python chatbot_website/manage.py makemigrations
    wait
    
    python chatbot_website/manage.py migrate
    wait
    
    tensorboard --logdir save/ &
    python chatbot_website/manage.py runserver &
}

train_morti(){
    echo "Starting Training..."
    cd ../RTC
    python main.py
}
source activate morti_os

echo "#: Welcome to Morti-OS!";
echo "#: Your current version of Tensorflow is:";
python -c 'import tensorflow as tf; print(tf.__version__)'; 

echo "#: What do you want to do: " 
read -p "[train] or [start]: " task

if [[ $task = 'start' ]]; then
    echo "==== Starting Server ===="
    start_server
elif [[ $task = 'train' ]]; then
    echo "==== Starting Training ===="
    train_morti
else
    echo -e "\e[31mARG_ERROR\e[0m: \e[1m$task\e[0m not found"
fi