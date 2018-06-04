#!/bin/bash

echo ""
echo "--- --- --- Starting Redis-Server --- --- ---"
redis-server &
wait

echo ""
echo "--- --- --- Starting TensorBoard --- --- ---"
tensorboard --logdir save/ &
wait

echo ""
echo "--- --- --- Starting Morti-OS Suite --- --- ---"
EXP="export" 
$EXP CHATBOT_SECRET_KEY="my-secret-key"
python RTC/chatbot_website/manage.py makemigrations
wait
python RTC/chatbot_website/manage.py migrate
wait
echo "--- --- --- Starting Django Server --- --- ---"
python RTC/chatbot_website/manage.py runserver