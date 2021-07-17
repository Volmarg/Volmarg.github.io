---
title: Raspberry Pi4 scripts
sidebar_label: Scripts
slug: scripts
---

List of scripts for handling the project within the raspberry. Non of these are required - these are simply made to automate 
some things.

## Adding the scripts to `autostart`
Scripts must be added in this file `/etc/xdg/lxsession/LXDE-pi/autostart`.

## Autostart SSH on Raspberry Pi4
Create a file `/etc/startup-scripts/ssh-start.sh`.

**Add content:**
```shell
sudo service ssh start;
```

Add entry on the end of the `/etc/xdg/lxsession/LXDE-pi/autostart`:
```shell
@sudo /etc/startup-scripts/ssh-start.sh
```

## Autostart PMS on restarting Raspberry Pi4
First You need to install the screen app: `sudo apt-get install screen`.

Now create a file: `/etc/startup-scripts/start-pms.sh`

**Add content:**
```shell
cd /var/www/personal-management-system/;
symfony server:start --port=8001;
```

Add entry on the end of the `/etc/xdg/lxsession/LXDE-pi/autostart`:
```shell
@sudo screen -dm -S pms sh /etc/startup-scripts/start-pms.sh
```


