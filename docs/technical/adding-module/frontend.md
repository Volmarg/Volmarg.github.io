---
id: frontend
title: Frontend
sidebar_label: Frontend
slug: frontend
---

**This section contains only the very basic information about defining module and adding corresponding front/backend files**

*The frontend logic is more elastic (this regards JS), due to this fact there are very few implementations based on modules,
however at some steps, it's possible and, also required to implement certain logic for module/entity(related to given module)*

## Templates

* **templates** regarding modules should be added to the: `templates/modules/<moduleName>/`
  * it's also a good idea to keep the templates small and more readable by splitting components from it to: `templates/modules/<moduleName>/components/`
  
:::tip
The more it's recommended to split the templates into smaller reusable partials as it can be later reused to build dialog based widget from that
:::

## Javascript
### Template logic
* **template logic** - the logic responsible for some special handling of non-standard behaviour should be added to: `src/assets/scripts/modules/<moduleName>/` 

:::tip
To prevent unhandled crashes/exceptions, implement check if the processed elements exist at all.:
````js
    /**
     * Main initialization logic
     */
    public init(): void
    {
        let $allNoteDialogs = $('[data-modal-name^="noteEdit"]');

        if( !DomElements.doElementsExists($allNoteDialogs) ){
            return;
        }

        this.attachEditEvent();
        this.attachSaveEvent();
        this.attachDeleteNoteEvent();
    };
````
also, if possible, implement the initializing logic - main method which will call the whole logic for given module.
:::

:::important
After creating new logic, it's required to initialize it in: `src/assets/scripts/Initializer.ts` in the method:
````js
    public initializeLogic(): void
    {
````
:::

:::important
Don't forget do add the new file to the list: `/src/assets/scripts/modules/list.js`
:::
