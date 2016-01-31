#!/usr/bin/env bash

apt-get update

wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.30.2/install.sh | bash

# exit shell, re-enter shell
echo "source /home/vagrant/.nvm/nvm.sh" >> /home/vagrant/.profile
source /home/vagrant/.profile

nvm install node
