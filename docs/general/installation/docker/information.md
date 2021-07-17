---
id: information
title: Information
sidebar_label: Information
slug: information
---

Keep the [installation documentation](https://volmarg.github.io/docs/general/installation) in mind, as You will find there the descriptions of most important steps.
Current step consist only of information regarding running the project via **Docker** (*both Windows and Linux*).

## Steps by step guide

:::info
The steps provided by [@rwaight](https://github.com/rwaight) have been tested using Docker on Windows 10 (using the **WSL 2** based engine).
Everything was then retested with **Hyper-V** mode docker.
:::

---

### Linux

1. Download the [latest PMS version](https://github.com/Volmarg/personal-management-system/releases/latest)
2. Extract/unzip the entire project into a folder on your system (example: `/var/ww/pms`)
3. Navigate to the project directory in cli
    * type `cd /var/ww/pms`

5. Build the containers (while staying in `cd /var/ww/pms`), by calling given commands
    * `docker-compose build`
    * `docker-compose up -d`
6. Enter the `php-fpm` container and continue installation, by calling `docker-compose exec php-fpm bash`

:::info
Command prompt should change to the container: `root@<container_id>:/application`

Example: `root@682bdf287a87:/application`
:::

7. Call `sh docker-first-run.sh`
8. Browse to `http://127.0.0.1:8001` and begin using **Personal Management System**

---

### Windows

1. Download the [latest PMS version](https://github.com/Volmarg/personal-management-system/releases/latest)
2. Extract/unzip the entire project into a folder on your system (example: `C:\docker\pms`)
3. In PowerShell, navigate to the project directory
    * type `cd C:\docker\pms\`
    
:::info
Command prompt should show `PS C:\docker\pms`   
:::

5. Build the containers (while staying in `C:\docker\pms`), by calling given commands
    * `docker-compose build`
    * `docker-compose up -d`
6. Enter the `php-fpm` container and continue installation, by calling `docker-compose exec php-fpm bash`

:::info
Command prompt should change to the container: `root@<container_id>:/application`

Example: `root@682bdf287a87:/application`
:::

7. Call `sh docker-first-run.sh`

:::warning
The docker on Windows might be very slow, glitchy and looks like it's frozen during the installation. That can be normal
depending on the docker app/Windows configuration. Upon suspecting shell being frozen - hit `spacebar` or `arrow down`
to refresh the screen, however **do not** hit `Enter` as it might start installation anew.
:::

8. Browse to `http://127.0.0.1:8001` and begin using **Personal Management System**