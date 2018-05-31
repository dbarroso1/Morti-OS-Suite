#!/usr/bin/env bash
echo "======================================================="
echo "        Setting up Anaconda Env for Morti-OS            "
echo -e "\e[31mOnly Run this script once if you havent done so already\e[0m"
echo "======================================================="

echo "#: Anaconda Environment Setup"
read -p 'Environment Name: ' envname

echo "#: Creating Environment... "
conda create -n ${envname,,} python=3.5 anaconda

wait

echo "#: Entering the Anaconda Environment"
SRC="source"
script=$SRC activate ${envname,,}
$script
wait

echo "#: Installing Important Packages"
pip install tensorflow==1.7 django
wait
pip install -U channels==1.1.6
wait
pip install tqdm 
wait

echo "#: Morti-OS Env has been Setup Succefuly"
read -p '#: Press (Enter) to exit setup.' envname