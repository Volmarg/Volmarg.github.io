---
id: general
title: Installation general
sidebar_label: General
slug: general
---

This section presents common information of how to install the project both for `Windows` and `Linux`.

### Installing packages
* Run `composer install` (*around 100-150mb to download*)

:::caution
In case You have this error An error occurred: `Could not resolve host: security.sensiolabs.org.`
Run this command: `composer require sensiolabs/security-checker`
:::
:::tip
In case of problems with installing composer packages, in worst case You can just install them as `sudo`
:::

:::tip
This project has 2 built-in installers, which can be called directly after `composer install`, depending on the deployment:
* For standard installation call: `composer pms-installer`
* For installation from within docker usage call: `composer pms-installer-docker`

With this You can proceed directly to the **Local Server** section on the end of the installation guide.
:::

### Configuring environment
* Create a database that You will use for this application
    * prepare login for this database
    * prepare password for this database
    * prepare host and port for this database

### Env
* If the file `.env` does not exist in the root folder - create it
* Open `.env` file inside root of project
* Add Your database connection as described in:
    * Doctrine (section: Configuring the Database)
        * example: `DATABASE_URL=mysql://user:password@127.0.0.1:3306/pms`
* Set application environment to Production `APP_ENV=prod`
* Disable debugging `APP_DEBUG=0`

:::tip
Check the default `.env` in **main** branch of the repository
:::

### Building cache

* Now run this commands one after another
    * `sudo bin/console cache:clear`
    * `sudo bin/console cache:warmup`

### Creating database
* Run this command
    * `sudo bin/console doctrine:database:create`

* Run this command:
    * `sudo bin/console doctrine:migrations:migrate`

:::important
This is required to make the initial insertions into the tables. Sqls are specially handled so that no errors are being thrown
if such table/column/constraint already exist.
:::

### Services
* In terminal go to the project root folder
    * (example: `cd/var/www/html/YourFolder`)
* Run this command: `bin/console --env=dev encrypt:genkey`
* Edit the file: `config/services.yaml`
    * Change section parameters to this:
````yaml
parameters:
    locale: 'en' #Leave any other subsections like this one
    encrypt_key: 'YourGeneratedKey goes here'
````

:::warning
Save somewhere the generated key. This key is used to encrypt and decrypt passwords stored in Passwords module
Without this key it won't be able to decrypt Your passwords.
:::

### Local Server
* Get the script from: https://symfony.com/download
* In project root call: `symfony server:start --port=8001`
* Open the localhost with given port, in this case: `http://127.0.0.1:8001`