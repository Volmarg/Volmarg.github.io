---
title: Content re/loading
sidebar_label: Content re/loading
slug: content-re-loading
---

## Page content
There are 2 ways that the navigation works:
- via ajx,
- via full page load (standard request),

The difference is that when navigating inside the project the content of the page is being loaded in the central container:
````html
<section class="twig-body-section">
    {% block body %}{% endblock %}
</section>
````

while the `full page load` is the standard navigation support. This is also required as for example user might want to open 
given page in new tab so entire content of the page must be loaded, not only the central container.

Now how does this work?

### Backend
Each action has one action which returns the content of the visited page:
````php
/**
 * @Route("/my-notes/settings", name="my-notes-settings")
 * @param Request $request
 * @return Response
 * @throws DBALException
 * 
 */
public function display(Request $request) {
    $json_response = $this->submitForm($request);
    if (!$request->isXmlHttpRequest()) {
        return $this->renderTemplate(false);
    }
    $message           = $json_response->getContent();
    $code              = $json_response->getStatusCode();
    $template_content  = $this->renderTemplate(true)->getContent();
    return AjaxResponse::buildJsonResponseForAjaxCall($code, $message, $template_content);
}
`````

Then there is additional method which renders the template:

````php
private function renderTemplate(bool $ajax_render = false, bool $skip_rewriting_twig_vars_to_js = false) {
````

- `$ajax_render` is responsible for deciding wether we are only reloading the container content or we are loading full page,
- `$skip_rewriting_twig_vars_to_js` is additional special variable used in case of handling actions such like update. 

:::important
Templates are passing information about currently visited route to the JS and sometimes there is a need to skip rewriting such variables. 
This is particullary needed when we modify a record via `update`. In most of the cases the container is just fully reloaded with template 
containing new state of current page - such reloading rely on the variables passed in the template. 
:::

### Frontend
#### Templates
There are 2 main/base templates of all the pages (*this does not include dialogs*):
- `templates/base.html.twig`
- `templates/blank.html.twig`

Every page is extending from one of these templates, and the mentioned backend `$ajax_render` variable is responsible 
for deciding which template is being extended:
````js
{% if ajax_render == false %}
    {% set template= "base.html.twig" %}
{% else %}
    {% set template= "blank.html.twig" %}
{% endif %}

    {% extends template %}
````
* `base.html.twig` - used when reloading content via ajax,
* `templates/base.html.twig` - used when loading content via standard request

#### Javascript
Reloading page content is mostly handled by 2 methods:
- `AjaxEvents::loadModuleContentByUrl()` - the result of called url must be an `AjaxResponse` with template param being set,
- `Ui::insertIntoMainContent()` - inserts the content directly into the main container,

:::note
For example ajax calls for actions use directly `Ui::insertIntoMainContent()` since `AjaxResponse` is a global response sent 
upon calling via ajax.
:::

## Navigation
Project supports also reloading single menu nodes, however this is implemented only for example in `Files/Images` and is triggered 
upon creating new directory.

#### Javascript 
- `src/assets/scripts/core/ajax/Ajax.ts` → `Ajax::singleMenuNodeReload()`

### Template
- menu nodes are defined in `templates/page-elements/components/sidebar/menu-nodes`, 
- each reloadable menu node must have:
  - class: `sidebar-menu-node-element`
  - data attribute: `data-menu-node-name`

:::important
Each menu node must be defined in separated file. The value of `data-menu-node-name` must be a constant defined in :
`src/Action/System/AppAction.php`.
:::

### Backend
Each new module node must be also added as constant in `src/Action/System/AppAction.php`, additionally 2 arrays must be updated 
with new node: `MENU_NODE_MODULES_NAMES_INTO_CONST_NAMES` and `MENU_NODES_MODULES_NAMES_TO_TEMPLATES_MAP`

:::important
Each entry in `MENU_NODES_MODULES_NAMES_TO_TEMPLATES_MAP` represents a twig template, so it's required that menu node template 
has exactly the same name as in the patter. For example `MENU_NODE_MODULE_NAME_MY_FILES` equals to path: `page-elements/components/sidebar/menu-nodes/my-files.twig`
:::

## General information

:::tip
Most of the ajax calls are handled by `src/assets/scripts/core/ui/Actions` and `src/assets/scripts/core/ajax`.
:::
