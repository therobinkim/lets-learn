#!/usr/bin/env bash

# update list so latest version of following tools are installed
sudo apt-get update

# Git v1.9 as of 6/24/16 (seems outdated)
sudo apt-get -y install git

# MySQL v5.5 for ubuntu v12.04 as of 3/27/16
# the extra stuff will skip the interactive screen,
# which means we don't set a password
# http://stackoverflow.com/questions/7739645/install-mysql-on-ubuntu-without-password-prompt
sudo DEBIAN_FRONTEND=noninteractive apt-get -y install mysql-server

# MongoDB v2.0.4 as of 4/1/16
sudo apt-get -y install mongodb-server
# MongoDB needs these directories to run
sudo mkdir /data
sudo mkdir /data/db

# nvm v0.31.0 as of 3/27/16
wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.31.0/install.sh | bash
# load nvm in the future
echo "source /home/vagrant/.nvm/nvm.sh" >> /home/vagrant/.profile
# load nvm now
source /home/vagrant/.profile

# Node v4.4.5 as of 6/22/16
nvm install 4
nvm alias default 4
