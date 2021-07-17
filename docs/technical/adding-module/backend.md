---
id: backend
title: Backend
sidebar_label: Backend
slug: backend
---

*Keep in mind that there is generally no particular module loading logic or folders scanner, so that the structure could matter.
Presented structure was created to make the project more readable and manageable, to prevent chaos and make it simply easier to find 
the logic responsible for given elements/mechanisms.*

:::important
Each implemented module should have the corresponding folder with module name, for example: `MyRecipes` or `Recipes`. 
:::

* **Routes** should be added to: `src/Action/Modules/<ModuleName>/<ModuleName>Action.php`
* **Control logic** should be added to: `src/Controller/Modules/<ModuleName>/<ModuleName>Controller.php`
* **Entities** are to be added to: `src/Entity/Modules/<ModuleName>/<ModuleName>Entity.php`
* **Forms** definitions: `src/Form/Modules/<ModuleName>/<ModuleName>Type.php`
* **Repositories** are defined like: `src/Repository/Modules/<ModuleName>/<ModuleName>Repository.php`
* **Templates extensions** regarding particular modules should be in: `src/Twig/Modules/<ModuleName>/<ModuleName>.php`

:::note
Upon adding new repository, form, controller - special core classes should also be extended the same way that it's already done:
- `src/Controller/Core/Controllers.php`
- `src/Controller/Core/Forms.php`
- `src/Controller/Core/Repositories.php`
:::

:::tip
You can also use the symfony logic to generate the template, controller, form, entity & repository:
- `bin/console make:form,`
- `bin/console make:entity`
- `bin/console make:controller`
:::