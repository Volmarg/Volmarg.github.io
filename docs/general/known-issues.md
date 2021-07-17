---
id: known-issues
title: Known issues
sidebar_label: Known issues
slug: known-issues
---

There are few known issues, some partially related to the project itself (*to be solved* at some point).

## Php xml extension
:::note
This might happen when trying to install packages from composer
:::
* Follow this [guide](https://stackoverflow.com/questions/38793676/php-xml-extension-not-installed)
  * or simply call this commands:
    * `sudo apt-get install php-xml`
    * `sudo service apache2 restart`
    
## Php Apcu extension
:::note
This might happen when trying to rebuild the cache via `ache:clear` and `cache:warmup`
:::
* Call this commands:
- `sudo apt install php-apcu`,
- `sudo nano /etc/php/7.4/mods-available/apcu.ini`

Now this should be the content of the `apcu.ini`, and if it's not then add it to the file:
````js
extension=apcu.so
apc.enabled=1
apc.write_lock=1
apc.shm_size=100M
apc.slam_defense=0apc.enable_cli=1
````
 
- now call `sudo service apache2 restart`

## Php gd extension
* Call this command `sudo apt-get install php7.4-gd`

## Can't login/sql_mode 
:::note
You might be unable to login (without any errors - due to debugging off), but You need to turn off `full_group_by`.
You need to turn it off anyway otherwise sqls in repositories won't work and dashboard will crash.
:::
* Follow this [guide](https://tableplus.io/blog/2018/08/mysql-how-to-turn-off-only-full-group-by.html)
  * or shortly, follow this information:
    * edit `my.cnf`
    * If on the end there is no section `[mysqld]` then add it and below add what they write, for example it might be:
    * `sql_mode=STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION`
* Restart MySQL server `sudo service mysql restart`

## Access denied
:::note
Might happen when running `schema update`. You need to create new user and give him full privileges.
:::
* Follow this [guide](https://linuxize.com/post/how-to-create-mysql-user-accounts-and-grant-privileges/)
  * Or simply call this SQLs:
    * `CREATE USER 'newuser'@'localhost' IDENTIFIED BY 'user_password'`
    * `GRANT ALL PRIVILEGES ON database_name.* TO 'database_user'@'localhost'`
* Add created user/password to the `.env` 

## Not working pages, missing images, missing assets
Depending on the server configuration the `.htaccess` file might be required or might be not. For example when running
the project with `symfony server:start` - you don't need such file, but in case of default `apache` configuration You do
need it.

**.htaccess used in demo project:**
```shell
<IfModule mod_rewrite.c>
    Options -MultiViews
    RewriteEngine On
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteRule ^(.*)$ index.php [QSA,L]
</IfModule>

<IfModule !mod_rewrite.c>
    <IfModule mod_alias.c>
        RedirectMatch 302 ^/$ /index.php/
    </IfModule>
</IfModule>

## Cache
# 15 DAYS
<FilesMatch "\.(ico|pdf|flv|jpg|jpeg|png|gif|js|css|swf)$">
Header set Cache-Control "max-age=2592000, public"
</FilesMatch>

# 2 DAYS
<FilesMatch "\.(xml|txt)$">
Header set Cache-Control "max-age=172800, public, must-revalidate"
</FilesMatch>

# 2 HOURS
<FilesMatch "\.(html|htm)$">
Header set Cache-Control "max-age=7200, must-revalidate"
</FilesMatch>

<ifModule mod_gzip.c>
  mod_gzip_on Yes
  mod_gzip_dechunk Yes
  mod_gzip_item_include file \.(html?|txt|css|js|php|pl)$
  mod_gzip_item_include handler ^cgi-script$
  mod_gzip_item_include mime ^text/.*
  mod_gzip_item_include mime ^application/x-javascript.*
  mod_gzip_item_exclude mime ^image/.*
  mod_gzip_item_exclude rspheader ^Content-Encoding:.*gzip.*
</ifModule>
```

