---
id: development-mode
title: Development mode
sidebar_label: Development mode
slug: development-mode
---

*This section covers the information about working with the project in the development mode*
:::important
Keep in mind that **development** mode is way much slower than **production** mode, and it won't be optimized, it's nearly impossible.
The project in use should never, ever run in the **development** mode due to efficiency limitation and security reasons.
:::

## Local server
* First of all just like in the **production** mode the local server must keep running

## Node/NPM
:::warning
During installation of the packages there will be **tones** of information about deprecations. The packages will be updated 
at some point, but due to the scale of the project, planned changes and so on - its impossible to maintain everything. 
Updating the js packages will cause a lot of issues and will enforcea lott of testing, that's why so far the main goal was to achieve working, stable project. 
:::

* At this step You require `Node` and `Npm` which are mentioned in the `Installation` section
  * `npm update`
  * `npm install -g --unsafe-perm`
  * `npm i node-sass -g --unsafe-perm`
  * `nodejs node_modules/node-sass/scripts/install.js`
  * `npm rebuild node-sass`

:::important
You might need to change project folder permissions and groups after that but there shouldn't be any problem
:::

:::tip
Given npm commands should work without any problems, but in case of installation problems call the commands as **sudo**, and
with this 2 parameters `--unsafe-perm=true`, `--allow-root`
:::

## Webpack Encore Watcher
*Symfony ships with a pure-JavaScript library - called Webpack Encore - that makes working with CSS and JavaScript a joy. 
You can use it, use something else, or create static CSS and JS files in your public/ directory directly and include them in your templates.
Read more [here](https://symfony.com/doc/current/frontend.html)* 

Follow this steps:
* Open cli in the root of Your project
* Run this command `./node_modules/.bin/encore dev --watch`
  * Keep the watcher running (simply - don't close the console tab, or just make it run in background)
  
:::tip
For the production mode You want to use the compressed/minified js/css (**keep in mind that it might take even 1min+ to compile the bundles**).
Run this command in root of project: `./node_modules/.bin/encore production`
:::

:::warning
It's important to mention that using webpack has at least one downfall which is the problem to implement some existing plugins.
The very simple example from this project is that it took literally hours just adding and activating the **TinyMCE**. 
:::

## Project environment
Follow this steps:
* open the `.env` file
  * set `APP_ENV=dev`
  * set `APP_DEBUG=1` 
* rebuild the cache by calling this 2 commands:
  * `bin/console cache:clear`
  * `bin/console cache:warmup`
