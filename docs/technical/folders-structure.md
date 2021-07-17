---
id: folders-structure
title: Folders structure
sidebar_label: Folders structure
slug: folders-structure
---
*This section contains information regarding the main structure of folders in this project*

📦 **root**<br/>
 ┣ 📂 [config](#config)<br/>
 ┣ 📂 [docker](#docker)<br/>
 ┣ 📂 [github](#github)<br/>
 ┣ 📂 public<br/>
 ┃ ┗ 📂 [assets](#publicassets)<br/> 
 ┃ ┗ 📂 [upload](#publicupload)<br/> 
 ┣ 📂 src<br/>
 ┃ ┗ 📂 [Action](#srcaction)<br/>
 ┃ ┗ 📂 [Command](#srccommand)<br/>
 ┃ ┗ 📂 [Controller](#srccontroller)<br/>
 ┃ ┗ 📂 [DTO](#srcdto)<br/>
 ┃ ┗ 📂 [DataFixtures](#srcdatafixtures)<br/>
 ┃ ┗ 📂 [Entity](#srcentity)<br/>
 ┃ ┗ 📂 [Form](#srcform)<br/>
 ┃ ┗ 📂 [Listeners](#srclisteners)<br/>
 ┃ ┗ 📂 [Migrations](#srcmigrations)<br/>
 ┃ ┗ 📂 [Repository](#srcrepository)<br/>
 ┃ ┗ 📂 [Services](#srcservices)<br/>
 ┃ ┗ 📂 [Twig](#srctwig)<br/>
 ┃ ┗ 📂 [VO](#srcvo)<br/>
 ┃ ┗ 📂 [assets](#srcassets)<br/>
 ┣ 📂 [templates](#templates)<br/>
 ┣ 📂 [tests](#tests)<br/>
 ┣ 📂 [translations](#translations)<br/>
 ┣ 📂 [vendor_fixes](#vendor_fixes)<br/>

<hr/>

##### [**./config**](https://github.com/Volmarg/personal-management-system/tree/main/config) 
:::note
Contains the configuration of `Symfony`, `Doctrine`, `Services`, `Security`, `Caching`, `Project itself`, `modes/environments`
:::

##### [**./docker**](https://github.com/Volmarg/personal-management-system/tree/main/docker)
:::note
Docker configuration
:::

##### [**./github**](https://github.com/Volmarg/personal-management-system/tree/main/github)
:::note
These are just files used directly in the github project (for readme)
:::

##### [**./templates**](https://github.com/Volmarg/personal-management-system/tree/main/public)
:::note
Twig view files
:::

##### [**./tests**](https://github.com/Volmarg/personal-management-system/tree/main/tests) 
:::note
Base structure prepared for phpUnit (contain only few simple tests)
:::

##### [**./translations**](https://github.com/Volmarg/personal-management-system/tree/main/translations)
:::note
Strings translations files used in symfony, contains almost all texts visible in gui, can be translated to other languages as well,
:::

##### [**./vendor_fixes**](https://github.com/Volmarg/personal-management-system/tree/main/vendor_fixes) 
:::note
This is a special folder containing fixes to given vendor packages due to unmaintained, bugged packages etc.
:::

##### [**./public/assets**](https://github.com/Volmarg/personal-management-system/tree/main/public/assets)
:::note
Contains the compiled files used by the project
:::

##### [**./public/upload**](https://github.com/Volmarg/personal-management-system/tree/main/public)
:::note
Uploaded files
:::

##### [**./src/Action**](https://github.com/Volmarg/personal-management-system/tree/main/src/Action)
:::note
Contain definitions of all existing callable routes
:::

##### [**./src/Command**](https://github.com/Volmarg/personal-management-system/tree/main/src/Command)
:::note
Contain logic callable via CLI
:::

##### [**./src/Controller**](https://github.com/Volmarg/personal-management-system/tree/main/src/Controller)
:::note
Controls the flow of the logic in the project
:::

##### [**./src/DTO**](https://github.com/Volmarg/personal-management-system/tree/main/src/DTO)
:::note
Special objects/classes used to move data between logic layers
:::

##### [**./src/DataFixtures**](https://github.com/Volmarg/personal-management-system/tree/main/src/DataFixtures)
:::note
Demo data generators
:::

##### [**./src/Entity**](https://github.com/Volmarg/personal-management-system/tree/main/src/Entity)
:::note
Object representation of single entry in given table in database
:::

##### [**./src/Form**](https://github.com/Volmarg/personal-management-system/tree/main/src/Form)
:::note
Contain logic regarding the form, handling of submissions or form input types
:::

##### [**./src/Listeners**](https://github.com/Volmarg/personal-management-system/tree/main/src/Listeners)
:::note
logic responding to the event triggers
:::

##### [**./src/Migrations**](https://github.com/Volmarg/personal-management-system/tree/main/src/Migrations)
:::note
Special classes containing executable sqls which change/update the database state
::: 

##### [**./src/Repository**](https://github.com/Volmarg/personal-management-system/tree/main/src/Repository)
:::note
Classes containing logic bound strictly to the database (sqls, queryBuilders etc.)
:::

##### [**./src/Services**](https://github.com/Volmarg/personal-management-system/tree/main/src/Services)
:::note
Definitions of special reusable logic around the project
:::

##### [**./src/Twig**](https://github.com/Volmarg/personal-management-system/tree/main/src/Twig)
:::note
Definitions of logic (methods) usable in templates (twig)
:::

##### [**./src/VO**](https://github.com/Volmarg/personal-management-system/tree/main/src/VO)
:::note
Similar to DTO but contains inner logic bound to the transferred element
:::

##### [**./src/assets**](https://github.com/Volmarg/personal-management-system/tree/main/src/assets)
:::note
Raw css/js/translations which are then compiled as bundle
:::