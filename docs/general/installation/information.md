---
id: windows
title: Installation Windows
sidebar_label: Windows
slug: windows
---
Overall tips for setting up the project on `Windows`. Keep in mind that by default everything is being mostly tested
on the `Linux`. Some information in this section were delivered by the users.

---

This project does **NOT** fully support `Windows`, and is not going to.

:::danger
File upload logic is **NOT** working under `Windows`, so it's better to use docker in this case.
:::

---

## Environment

* First You need the tools for managing packages
    * [Installing composer](https://getcomposer.org/doc/00-intro.md#installation-windows)
    * [Installing npm and Node](https://nodejs.org/en/download/)
* Then You need environment (Pick one)
    * [Xampp](https://www.apachefriends.org/pl/index.html)
    * [Wamp](http://www.wampserver.com/en/)
* Unzip/put entire project into Your base html folder which depends on application You use.
    * Check corresponding manuals where projects folders are for Xampp or Wampp, usually this is:
        * **Xampp** `C:\xampp\htdocs`
        * **Wamp** `c:\wamp\www`
* Now open terminal (for example `git bash`)
* Now You can follow with:
    - Manual installation: [general](general) (*this was tested on windows*)
    - Automatic installation: [gui](gui) (*this was however not tested on windows*)

## Env
If You are running the project on Xampp (this most likely also applies for the Wampp), then You need to adjust the section in the `.env`
file. This information was delivered by one of the project users (*anonymous*).
````dotenv
# Modules based variables
UPLOAD_DIR=C:/xampp/htdocs/upload                       # the name of the upload directory for upload modules (in the /public dir)
IMAGES_UPLOAD_DIR=C:/xampp/htdocs/upload/images         # name of the directory for MyImages module
FILES_UPLOAD_DIR=C:/xampp/htdocs/upload/files           # name of the directory for MyFiles module
VIDEOS_UPLOAD_DIR=C:/xampp/htdocs/upload/videos         # name of the directory for MyVideo module
MINIATURES_UPLOAD_DIR=C:/xampp/htdocs/upload/miniatures # name of the directory for generating/storing miniatrures for MyImages module
PUBLIC_ROOT_DIR=C:/xampp/htdocs/upload/public           # this is the name of `public` dir and should not be changed
````
