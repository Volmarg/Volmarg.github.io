---
title: Commands
sidebar_label: Commands
slug: commands
---
Commands discussed in this section are special scripts executable only via `CLI`:

* `bin/console assets:build-translation-messages-yaml` - will get all the translations files from assets and wil build output bundle usable by symfony
* `bin/console pms:upload:generate-miniatures-for-images` - generate miniatures for uploaded images if some are missing,
* `bin/console cron:make-backup` - this command allows making backup of: files, sql
* `bin/console cron:set-recurring-payments` - this command will set recurring payments (defined in GUI) for the current month and year

:::tip
Call each command with `--help` to see additional information/instruction
:::