---
id: linux
title: Installation Linux
sidebar_label: Linux
slug: linux
---

Information regarding the configuration of environment specifically for Linux.

## Environment

* First the tools for managing packages
    * [Installing composer](https://linuxize.com/post/how-to-install-and-use-composer-on-ubuntu-18-04/)
    * [Installing npm and Node](https://linuxize.com/post/how-to-install-node-js-on-ubuntu-18.04/) (*needed only for dev mode*)
* Then the environment
    * [Installing LAMP](https://www.linode.com/docs/web-servers/lamp/install-lamp-stack-on-ubuntu-18-04/)
* Unzip/put entire project into the base html folder
    * usually `/var/www/html/YourFolder/`
* Now You can follow with:
  - Manual installation: [general](general)
  - Automatic installation: [gui](gui)

:::tip
Keep in mind that by default copying hidden files in `Linux` is disabled. Files such like `.env` might not be copied on local system.
It's recommended to copy/move the data using `CLI` and to enable copying hidden files call this command: `shopt -s dotglob`.
This solution will work until restarting the system.
:::
