---
title: Raspberry Pi4 environment
sidebar_label: Environment
slug: environment
---

Even though, Raspbian is a Linux distribution, it's a bit tricky to install the standard packages which on Ubuntu makes 
no problems at all.

## Update

The update in this case is **a must**, without this it's impossible to run the project by following the steps in 
this guide.

**Call these commands:**
```shell
sudo apt update
sudo apt upgrade
```

## Php pear and pecl
Original post: https://stackoverflow.com/questions/52078688/sudo-pecl7-2-sp-command-not-found

**Call the following commands:**
```shell
sudo apt-get install php-pear php-dev
sudo pecl install geoip-beta
```

## MySql / MariaDb
Original post: https://pimylifeup.com/raspberry-pi-mysql/

1. Install the MySQL server software to your Raspberry Pi by calling:
`sudo apt install mariadb-server`

2. It's now needed to secure it by setting a password for the **root** user.

By default, MySQL is installed without any password set up meaning you can access the MySQL server without any authentication.
Run the following command to begin the MySQL securing process.
`sudo mysql_secure_installation`

Follow the prompts to set a password for the root user and to secure your MySQL installation.
For a more secure installation, answer `Y` to all prompts when asked to answer `Y` or `N`.

## Php
Original post: https://janw.me/raspberry-pi/installing-php74-rapsberry-pi/

To check if php7.4 is available run: `sudo apt install --dry-run php7.4`
### If the php is not available then call
```shell
sudo wget -O /etc/apt/trusted.gpg.d/php.gpg https://packages.sury.org/php/apt.gpg
echo "deb https://packages.sury.org/php/ buster main" | sudo tee /etc/apt/sources.list.d/php.list
sudo apt update
```

### Installing php packages
```shell
sudo apt install -y php7.4-common php7.4-fpm php7.4-cli php7.4-curl php7.4-json php7.4-mysql php7.4-opcache php7.4-gd php7.4-sqlite3 php7.4-mbstring php7.4-zip php7.4-readline php-pear
```

### Configuring FPM
Create extra config file `sudo nano /etc/php/7.4/fpm/conf.d/90-pi-custom.ini`.

**Add these lines to it:**
```ini
cgi.fix_pathinfo=0

upload_max_filesize=64m
post_max_size=64m
max_execution_time=600
```

### Reload Php
```shell
sudo service php7.4-fpm reload
```

## Composer
Original post: https://lindevs.com/install-composer-on-raspberry-pi/

Call this set of commands:
```shell
wget -O composer-setup.php https://getcomposer.org/installer
sudo php composer-setup.php --install-dir=/usr/local/bin --filename=composer
sudo php composer-setup.php --install-dir=/usr/local/bin --filename=composer
rm -rf composer-setup.php
```