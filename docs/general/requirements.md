---
id: requirements
title: Requirements
sidebar_label: Requirements
slug: requirements
---

The requirements vary between modes. The `Production` mode is the one where You use the application like the end product, without any modifications being done to application.
`Development` mode is the one where the changes in code are being implemented, so it's required to have additional tools to work with. 

## Production mode
- Php7.4.x,
- MySQL (eventually MariaDB),

## Development mode
- Php7.4.x,
- MySQL (eventually MariaDB),
- Composer,
- Npm,
- NodeJs (10.22.1),

:::important
It's very important to use strictly given **NodeJs** version. There were already few reports that after JS recompilation the project started to act strange.
After further analyse it came out that this was caused due to using the latest available Node.
:::

## Environment
By default the application is being used in `Linux` environment. 

Everything works fine with `Ubuntu 18.x` and `Ubuntu 20.x`.

There should be no Problems with using this web application on `Windows` with usage of `Xampp` or `Wampp`, however this was tested only on one of the early releases, thus it's recommended to run it on `Linux`. 
As this was not tested so far, this application is intended to be ran on `RasperryPi` (which is also running on `Linux`) in a local network and because of this some technical solution are impossible/don't 
make sens to be implemented (like for example `php7.4 preloading`).

