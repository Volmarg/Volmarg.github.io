---
id: first-usage
title: First usage
sidebar_label: First usage
slug: first-usage
---

This section covers the information regarding the first usage of the project.

## Registering user

*Upon opening project for the first time - You will have the possibility to register new user, there is no user added by default*

:::note
As the project name states **Personal** - only one user can be registered. Everything in this project was tested with one user only.
It's possible to register more users by adding changes in security logic, however it was never neither will be intended to work with more users.
:::

* Click on the `Register` button, fill out the form, and after that You can log in

:::note
So far there is no `password reset` logic. This has lower priority in the project. Just remove the user from DB and create new one.
:::

:::tip
Records added in the database **ARE NOT** bound to user/userId so no matter which user will log in - everything will work like before.
:::