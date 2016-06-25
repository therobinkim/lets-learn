# lets-learn-vagrant

This repo is essentially just a collection of my notes/practice as I learn how 
to use Vagrant. I mostly learned by following https://www.vagrantup.com/docs/
and Googling random snippets online.

To get started:

* Download Vagrant from https://www.vagrantup.com/downloads.html.
* Download VirtualBox from https://www.virtualbox.org/.
* `git clone` this repository.
* `cd` into your local clone of this repository.
* Run `vagrant up`.
* Afterwards, run `vagrant ssh`
  * If you run into any issues over port 4567, you're likely running another
  vagrant instance that's using the same port. You can either run destroy the
  other vagrant instance or modify the `Vagrantfile` to avoid this port reusage
  issue.
* After you successfully ssh into your virtual machine, your working directory
will already have been changed to `/code` (on your guest machine).
  * Your host machine (where you ran `vagrant ssh` from) and guest machine (the
  Ubuntu instance accessed via `vagrant ssh`) will have synced folders.
  * Your host machine's `../` directory (the directory in which your cloned
  `lets-learn-vagrant` repo is located in) is connected to...
  * Your guest machine's `/code` directory.
  * Any changes on the host machine's synced folder will be reflected on the
  guest machine's synced folder.
  * Any changes on the guest machine's synced folder will be reflected on the
  host machine's synced folder.
* Run `cd lets-learn-vagrant` and `node index.js` from your guest machine.
* Navigate to [http://localhost:4567/](http://localhost:4567/) via a browser
from your host machine.
* If you can see a web page there, you've succeeded!

Notes:

* You can have multiple terminal sessions from your host machine `cd` into the
directory with the `Vagrantfile` and run `vagrant ssh`.
* You can have a single terminal session pop out of a virtual machine session
via `exit` from the guest machine's terminal.
* You can run `vagrant destroy` from the host machine's terminal (from the
directory where `vagrant up` and `vagrant ssh` were initially run) to get rid
of your virtual machine session, and free up any associated memory from your
host machine.
* The virtual machine is running Ubuntu v12.04 (aka Linux)! Command line tools
like `brew` are not included in this vagrant setup. Here, `apt-get` is your
friend.
