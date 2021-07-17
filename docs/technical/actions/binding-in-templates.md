---
title: Binding in templates
sidebar_label: Binding in templates
slug: binding-in-templates
---
There are special classes/attributes that need to be defined for given elements to be used as action buttons. However, 
there is already flexible template component which can handle it all:
* `templates/modules/common/components/actions.twig`
* for table `templates/modules/common/components/table-cells/actions.html.twig`
* for accordion `templates/modules/common/components/accordion/actions.twig`

All there is todo is just including the actions component with selection of actions that should be available:
````js
{% include 'modules/common/components/table-cells/actions.html.twig' with {
    "trash"                   : true,
    "edit"                    : true,
    "save"                    : true,
    "fontawesome"             : true,
    "lock_record"             : lock_record,
    "lock_type"               : lock_type,
    "lock_target"             : lock_target,
    "copy"                    : true,
    "copy_attr"               : 'data-copy-from-selector="#password-id-' ~ password.id ~ '"',
    "tinyMceSelector"         : "#tiny-mce-selector-for-issue-progress-accordion" ~ loop.index0,
    "tinyMceInstanceSelector" : "tiny-mce-selector-for-issue-progress-accordion" ~ loop.index0,
} %}
````
## Update/Delete action
* `trash` is responsible for removing the record
* `edit` turns `contenteditable` on elements by default 
* `save` triggers update

:::note
By default all entries in the system are `soft deleted` which means that these can be reverted in case of missclick. 

All entities which support soft-delete logic implement the `SoftDeletableEntityInterface`.
:::

:::important
The `edit` action is also needed to make the special actions work as it `toggles` the visibility of actions
:::

## Special actions
* `fontawesome` is special action which allows selecting fontawesome icon from list

:::important
`fontawesome` action requires `fontawesome-input` class to be added to the element which should contain the fontawesome icon name
:::

* `lock` will toggle `lockMechanism` on given entry (*more about this in the other guide*)
* `copy` allows to copy content of given selector into the clipboard,
* `edit with tinymce` allows to turn the given element into the container fully editable via tinymce

:::important
`edit with tinymce` action requires the target element to have 2 classes: <br/> `edit-record-with-tiny-mce transform-to-tiny-mce`
:::

:::warning
Like it's written in the specification, **chrome** should be used to work with this project while for example `copy` seems to be breaking in Firefox.
:::

## Specially handled actions
* `toggle-boolval` simply turns the `bool` value of entity, it consists of given html attributes: (*does not require defining logic in js*)
````html
<span class="action pointer mr-1"
      data-entity-id="{{ issueCardDto.issue().getId() }}"
      data-entity-toggle-boolval="true"
      data-entity-toggle-success-message="{{ 'issues.card.ajaxCallMessages.dashboardVisibilityHasBeenToggled' | trans }}"
      data-entity-repository-name="MyIssueRepository"
      data-entity-field-name="showOnDashboard"
>
````
* `dialog` allows to create the dialog which is then prefilled by template content returned on backend
````html
<span class="action pointer"
      data-entity-id="{{ issueCardDto.issue().getId() }}"
      data-entity-detials-action="true"
      data-dialog-call-request-url="{{ path('dialog_body_add_issue_data') }}"
      data-dialog-call-request-method="POST"
      data-dialog-call-request-post-parameters='{"entityId": "{{ issueCardDto.issue().getId() }}"}'
      data-call-dialog-on-click="true"
      data-dialog-name="myIssueCardAddRecords"
>
````
* `append form` allows appending form on view
````html
<button class="append-form btn btn-sm btn-primary"
        style="font-size:13px;"
        data-target-selector=".contacts-types-wrapper-for-widget"
        data-form-name="contactTypeDto">
    {{ 'forms.MyContactType.labels.addType' | trans }}
</button>
````
:::warning
* the forms appended via `append-form` should not be submitted separately - these should only be responsible for adding fields.
:::

* `remove` - this is an additional way of removing entities from the database (*this solution does not require defining logic in js*)
````html
<span class="action pointer"
      data-entity-id="{{ issueCardDto.issue().getId() }}"
      data-repository-name="MyIssueRepository"
      data-entity-removal-action="true"
>
````
* `edit via prefilled modal` - allows editing state of DB entry via modal
````html
<div class="action"
     data-entity-id="{{ contact.getId() }}"
     data-repository-name="MyContactRepository"
     data-entity-modal-edit-action="true">
    <i class="fas fa-pen-square fa-sm"></i>
</div>
````
:::warning
Some actions were used only once, thus it's possible that might malfunction in some untested cases. This regards for example: `edit via prefilled modal` 
:::
