---
title: Session
sidebar_label: Session
slug: session
---

## User roles stored in session
This logic allows giving user rights without need to logout out. The roles stored this way in session are invalidated 
upon logging out or after given (configured) amount of time.

**See:**
- `src/Services/Session/UserRolesSessionService`
- `src/Twig/Services/SessionService`

:::important
This class was implemented due to high (good written) logic for userRefresh which is impossible to bypass, 
the best one - cleanest would be implementing new authentication provider logic.
Back when this was implemented the authentication relied on old deprecated FosUserBundle.
:::

## Expirable session
Normally data in session will not expire on itself unless for example user will logout, close browser or after the 
php based lifetime is expired. With this service special `session_lifetime` key is being set, with this:
 * if given session key will expire then it will be removed from sessions,
 * if key has not expired then its lifetime will be extended,
 
 **See:**
 - `src/Services/Session/ExpirableSessionsService`
 - `config/services.yaml`
 
````yaml
parameters:
    session_data.lifetime.system_lock: 900 #in seconds
````