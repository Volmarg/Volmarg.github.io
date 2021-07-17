---
id: gui
title: Interactive GUI
sidebar_label: Interactive GUI
slug: gui
---

Installing the project from GUI

## Environment

*After cloning / unpacking the project in proper directory of Your system, just go to the page `/installer.php`, 
and follow the interactive guide*

:::note
Everything will be installed / configured in background, no need to call composer manually etc.
:::


:::tip
Once the installation has been finished (or project was already installed), the `installer.php` is disabled to prevent 
accidental database removal etc. To enable installer remove the `APP_IS_INSTALLED` from `.env` file.
:::

:::warning
Like mentioned, the `installer.php` **might** remove the database which name You provide in input. Turning installer 
back on, once it's done can result in data loss!
:::