---
title: Docker windows known issues
sidebar_label: Windows known issues
slug: windows-issues
---

This section covers the most known issues regarding running the project in docker on Windows.

## CreateFile / docker_engine_linux

```shell
error: docker.errors.DockerException: Error while fetching server API version: 
(2, 'CreateFile', 'The system cannot find the file specified.')
```

or

```shell
Error: docker.errors.APIError: 500 Server Error: 
Internal Server Error ("b'open \\.\pipe\docker_engine_linux: The system cannot find the file specified.'")
````

:::info
Docker is not running / has frozen or has some pending update and decided to stop working 
until the update will be installed
:::

## FileSharing

```shell
Docker.ApiServices.Mounting.FileSharing+<DoShareAsync>d__8
```

:::info
Happens mostly in the **Hyper-V mode**.

**See**: https://token2shell.com/howto/docker/sharing-windows-folders-with-containers/#:~:text=In%20order%20to%20share%20Windows,v%22%20(volume)%20flag
:::

## apcu.so error

```shell
PHP Warning:  PHP Startup: Unable to load dynamic library 'apcu.so' 
(tried: /usr/local/lib/php/extensions/no-debug-non-zts-20190902/apcu.so (/usr/local/lib/php/extensions/no-debug-non-zts-20190902/apcu.so: 
cannot open shared object file: No such file or directory), 
/usr/local/lib/php/extensions/no-debug-non-zts-20190902/apcu.so.so (/usr/local/lib/php/extensions/no-debug-non-zts-20190902/apcu.so.so: 
cannot open shared object file: No such file or directory)) in Unknown on line 0
```

:::info
Run this in the container and restart it afterwards:

```shell
pecl channel-update pecl.php.net
pecl install apcu

echo "extension=apcu.so" >> `php --ini | grep "Loaded Configuration" | sed -e "s|.*:\s*||"`
```
:::