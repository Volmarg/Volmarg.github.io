---
id: adding-menu-element
title: Adding menu element
sidebar_label: Adding menu element
slug: adding-menu-element
---
 
**This section contains general information regarding adding the new menu elements**
 
## Sidebar menu  
 
Sidebar menu templates can be found in: `templates/page-elements/components/sidebar`.

Start with creating new menu node in: `templates/page-elements/components/sidebar/menu-nodes/`
:::important
For better structure organization, keep the menu nodes the same as the added module or functionality.
:::

Now take a look on this example as there are few elements that do matter here due to the automated logic:
````html
<li class="nav-item dropdown {{ keepMenuOpen(currUrl, '', 'my-notes') }} sidebar-menu-node-element" data-menu-node-name="{{ MENU_NODE_MODULE_NAME_NOTES }}">
    <a class="sidebar-link left-nav-link" href="javascript:void(0);">
                <span class="icon-holder" style="color:violet;">
                    <i class="fas fa-book fa-sm"></i>
                </span>
        <span class="title">{{  'sidebar.menu.notes.label' | trans }}</span>
````

* `data-menu-node-name` and class `sidebar-menu-node-element`  - it's not required but this is prepared to reload single menu node and works so far just for few modules
* `{{ keepMenuOpen(currUrl, '', 'my-notes') }}` - is used to keep the nested menu constantly open

:::tip
Constants such as `MENU_NODE_MODULE_NAME_NOTES` are defined in `src/Action/System/AppAction.php`,
Twig vars are defined in `templates/page-elements/components/sidebar/menu.twig`
:::

Now add the new menu node in `templates/page-elements/components/sidebar/menu.twig`

## Top menu

Top menu logic is defined in `templates/page-elements/components/sidebar/menu.twig`, and the `components` are equivalents of the `menu nodes` in sidebar. 
There is no special logic regarding top menu.