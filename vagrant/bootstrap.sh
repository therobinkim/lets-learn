#!/usr/bin/env bash

sudo apt-get update # update list so latest version of following tools are installed
sudo apt-get install git
sudo apt-get install make
sudo apt-get install curl
sudo apt-get install mysql-server # mysql v5.5 for ubuntu v12.04 as of 3/27/16

wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.31.0/install.sh | bash # nvm v0.31.0 as of 3/27/16

# exit shell, re-enter shell
echo "source /home/vagrant/.nvm/nvm.sh" >> /home/vagrant/.profile
source /home/vagrant/.profile

nvm install node
nvm alias default node # node v5.9 as of 3/27/16
