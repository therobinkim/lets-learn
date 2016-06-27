#!/usr/bin/env bash

# allow us to use the `add-apt-repository` command
sudo apt-get -y install python-software-properties

# Help ensure we install latest version of Git instead of v1.7.9.5
# http://askubuntu.com/questions/571549/git-1-7-9-5-upgrade-to-current-release-of-git-2-x-on-ubuntu-12-04
sudo add-apt-repository -y ppa:git-core/ppa

# update list so latest version of following tools are installed
sudo apt-get update

# Git v2.9.0 as of 6/25/16
sudo apt-get -y install git

# MySQL v5.5 for ubuntu v12.04 as of 6/25/16
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
# load nvm in the future if using bash as default shell
# http://superuser.com/questions/187639/zsh-not-hitting-profile
echo "source /home/vagrant/.nvm/nvm.sh" >> /home/vagrant/.profile
# load nvm now to install Node v4 with nvm
source /home/vagrant/.profile

# Node v4.4.5 as of 6/22/16
nvm install 4
nvm alias default 4

# Heroku toolent instructions here: https://toolbelt.heroku.com/
wget -O- https://toolbelt.heroku.com/install-ubuntu.sh | sh

# zsh
sudo apt-get -y install zsh
# oh-my-zsh
mkdir ~/.oh-my-zsh
cd ~/.oh-my-zsh
git init
git remote add origin git://github.com/robbyrussell/oh-my-zsh.git
git pull origin master
# Change default shell
sudo chsh -s /bin/zsh vagrant
