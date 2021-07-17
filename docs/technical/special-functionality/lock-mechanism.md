---
title: Lock mechanism
sidebar_label: Lock mechanism
slug: lock-mechanism
---
## What is lock mechanism
**Lock mechanism** can be simply called `second level authentication`. The logic behind this relies on special, session based 
mechanisms which allow storing use roles in session and invalidate the session data after given amount of time. More about 
session mechanisms [here](/docs/technical/special-functionality/session).

## How does it work
The **lock mechanism** is flexible and adjustable for all modules, either the existing or new ones. Entries about locked resources 
are stored in the database via the `LockedResource` entity. Each such entry consist of type (for example a single file/folder or entity),
the target identifier (module or any special string by which it can be identified what kind of data is being locked), and naturally a record 
identifier which in case of Entity is an id, and in case of file it's a path.

## How to unlock/show records
If records are locked then initially upon logging into the system, this will be hidden from the view. It's possible to show the hidden 
entries by clicking the `locked/unlocked` button in the user menu - this will trigger validation which requires second password (lockPassword).

Upon unlocking the whole system the locked resources will be shown and can be removed from the lock table to be visible after 
passing the login form without the need to login with second security layer.

## How to add lock for module
First of all special action must be added in the template, either using [actions component](/docs/technical/actions/binding-in-templates), or custom 
code like this:

````html
<span class="fas fa-lock {{ getClassForLockedResource(lock_record, lock_type, lock_target) }} align-self-center action-lock-record"
      data-lock-resource-record ="{{ lock_record }}"
      data-lock-resource-type   ="{{ lock_type }}"
      data-lock-resource-target ="{{ lock_target }}"
></span>
````
In this case all the `data attributes` must be provided alongside with the class `action-lock-record`.

:::important
Upon extending the logic to other types it's required to provide the handling in `LockedResourceController::isResourceLocked`.
:::

The last thing that remains is adding check in the template:

````js
{% if isAllowedToSeeResource(lock_record, lock_type, lock_target) %}
...
{% endif %}
````