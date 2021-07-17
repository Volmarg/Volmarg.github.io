---
id: personal-management-system-io
title: Personal management system IO
sidebar_label: Personal management system IO
slug: personal-management-system-io
---
<center>
    <img src="https://github.com/Volmarg/personal-management-system/raw/main/public/logo-small.png?raw=true"/>
</center>

This project is used as proxy for receiving and displaying the data transferred from <b><a href="https://github.com/Volmarg/personal-management-system">Personal Management System</a></b>.
This tool is <b>Input</b> and <b>Output</b> only - it does not and never will have any type of interface for that.

* **Project repository**: https://github.com/Volmarg/personal-management-system-io
* **Project bridge repository**: https://github.com/Volmarg/personal-management-system-io-bridge

:::note
The bridge project is already included in the `composer.json` and `composer.lock`.
:::

## Usages in the Personal Management System

Cron command: `src/Crons/CronTransferDataToPmsIoCommand`
:::info
This cron can be used to transfer all the supported data to the **PMS-IO**. 
:::

### Configuration

The configuration for connecting to the project (for calling API) can be found in `config/services.yaml`.

```yaml
App\PmsIo\PmsIoBridge:
  public: true
  arguments:
    $logFilePath: '%kernel.logs_dir%/pms-io-bridge.log'
    $loggerName: 'PmsIoLogger'
    $baseUrl: 'http://127.0.0.1:8001/'
    $login: 'login'                   # login for IO API access
    $password: 'password'             # password for IO API access
    $secret: 'Jwt-secret'             # jwt secret used to generate the token
```

:::note
**PMS-IO** has a command to generate API access
:::