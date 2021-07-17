---
id: notifier-proxy-logger
title: Notifier Proxy Logger
sidebar_label: Notifier Proxy Logger
slug: notifier-proxy-logger
---
<center>
    <img src="https://github.com/Volmarg/notifier-proxy-logger/raw/main/public/assets/images/logo.png?raw=true"/>
</center>

This project is used as a central Messaging management point, where messages sent to variety of end points can be stored 
and previewed in history.

* **Project repository**: https://github.com/Volmarg/notifier-proxy-logger
* **Project bridge repository**: https://github.com/Volmarg/notifier-proxy-logger-bridge

:::note
The bridge project is already included in the `composer.json` and `composer.lock`.
:::

## Usages in the Personal Management System

Cron command: `src/Crons/CronTransferSchedulesToNotifierProxyLoggerCommand`
:::info
This cron can be used to transfer the incoming schedules into the **NPL** which then later on can handle sending the 
messages outside.
:::

### Configuration

The configuration for connecting to the project (for calling API) can be found in `config/services.yaml`.

```yaml
App\NotifierProxyLoggerBridge:
    public: true
    arguments:
        $logFilePath: '%kernel.logs_dir%/notifier-proxy-logger-bridge.log' # where the log will be stored
        $loggerName: 'NotifierProxyLogger'                                 # log entries identifier
        $baseUrl: 'http://127.0.0.1:8010/'                                 # url to the project
```

:::note
No authentication is required when inserting the messages in the **NPL**
:::