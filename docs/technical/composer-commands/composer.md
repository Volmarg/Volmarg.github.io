---
title: Composer
sidebar_label: Composer
slug: composer
---
This project contains additional commands defined explicitly for this project.

:::tip
All of such commands can be listed by calling this command in project root dir `composer | grep pms`
:::

* `pms-frontend-generate-production-css-js-assets` - will generate production ready css / js using webpack encore
* `pms-frontend-validate-circular-reference` - scans js assets for circular references

:::note
Keep in mind that this command makes sens only when encore/output file throws some strange exceptions. It can be 
that there are circular references being show but everything will work fine. 
:::

* `pms-installer` - special script (helping with creating own instance of the project)

:::note
Requires calling `composer install` at first.  
:::

*  `pms-installer-docker` - special script for installing project with docker support





