# -*- mode: ruby -*-
# vi: set ft=ruby :

# All Vagrant configuration is done below. The "2" in Vagrant.configure
# configures the configuration version (we support older styles for
# backwards compatibility). Please don't change it unless you know what
# you're doing.
Vagrant.configure(2) do |config|
  # The most common configuration options are documented and commented below.
  # For a complete reference, please see the online documentation at
  # https://docs.vagrantup.com.

  config.vm.box = "hashicorp/precise64"

  # Create a forwarded port mapping which allows access to a specific port
  # within the machine from a port on the host machine. In the example below,
  # accessing "localhost:8080" will access port 80 on the guest machine.
  config.vm.network "forwarded_port", guest: 4567, host: 4567
  config.vm.network "forwarded_port", guest: 8080, host: 8080
  config.vm.network "forwarded_port", guest: 8888, host: 8888

  # Share an additional folder to the guest VM. The first argument is
  # the path on the host to the actual folder. The second argument is
  # the path on the guest to mount the folder. And the optional third
  # argument is a set of non-required options.
  config.vm.synced_folder ".", "/vagrant", disabled: true
  config.vm.synced_folder "..", "/code"

  # Enable provisioning with a shell script.
  # `privileged: false` indicates "don't automatically run in sudo mode"
  config.vm.provision "shell", path: "bootstrap.sh", privileged: false

  # Add your name and GitHub-associated email to the `.gitconfig` folder so it
  # can be copied onto your guest machine.
  config.vm.provision "file", source: ".gitconfig", destination: "~/.gitconfig"

  config.vm.provision "file", source: ".gitignore_global", destination: "~/.gitignore_global"
  config.vm.provision "file", source: ".zshrc", destination: "~/.zshrc"
  config.vm.provision "file", source: "3den.zsh-theme", destination: "~/.oh-my-zsh/custom/themes/3den.zsh-theme"

  config.vm.post_up_message = "Welcome to this custom virtual environment.
Please use the command `vagrant ssh` to access your server."

  # Enable working with GitHub through host's ssh credentials
  # https://coderwall.com/p/p3bj2a/cloning-from-github-in-vagrant-using-ssh-agent-forwarding
  # Must ensure `~/.ssh/id_rsa` is passed through `ssh-add` on OSX host machine first
  config.ssh.forward_agent = true
end
