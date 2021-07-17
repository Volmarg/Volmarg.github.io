---
title: JS actions handling
sidebar_label: JS actions handling
slug: js-actions-handling
---

## Update
Update is handled via `DataProcessor` definition of `makeUpdateData`.

Example:
````js
makeUpdateData: function ($baseElement) {
    let name            = $($baseElement).find('.name').html();
    let symbol          = $($baseElement).find('.symbol').html();
    let multiplier      = $($baseElement).find('.multiplier').val();
    let isDefaultInput  = $($baseElement).find('.is-default').find('input');
    let isDefault       = DomAttributes.isChecked(isDefaultInput);
    let beforeUpdateState = $($baseElement).find('.before-update-state').val();
    let successMessage = AbstractDataProcessor.messages.entityUpdateSuccess(SpecialAction.settingsFinancesCurrencyTable.processorName);
    let failMessage    = AbstractDataProcessor.messages.entityUpdateFail(SpecialAction.settingsFinancesCurrencyTable.processorName);
    let url = '/api/settings-finances/update-currencies';
    let ajaxData = {
        'name'                : name,
        'symbol'              : symbol,
        'multiplier'          : multiplier,
        'is_default'          : isDefault,
        'before_update_state' : beforeUpdateState,
        'group'       : {
            "type"        : "entity",
            'namespace'   : EntityStructure.MyPasswordsGroups.getNamespace(),
            'id'          : trimmedGroupId,
        },
    };
    let dataProcessorsDto            = new DataProcessorDto();
    dataProcessorsDto.successMessage = successMessage;
    dataProcessorsDto.failMessage    = failMessage;
    dataProcessorsDto.url            = url;
    dataProcessorsDto.ajaxData       = ajaxData;
    return dataProcessorsDto;
},
````
- `$baseElement` - is the element having given classes `editable-parent save-parent` and is also a parent element of `edit` and `save` action,
- `url` - that's the backend action called to perform the update logic,
- `ajaxData` - is the standard ajax data object containing values of fields that are to be updated (*or eventually can transfer some additional data as well*)
    - `grup` is a special type of data sent to backend, contains information about the entity so with this it's also possible to update the relational field via ajaxCall
- `success/fail message` - are the messages that are going to be shown by default if no message is going to be returned to the backend,


## Create
Create is handled via `DataProcessor` definition of `makeCreateData`.

````js
makeCreateData($baseElement?: JQuery<HTMLElement>): DataProcessorDto | null {
    let url            = '/my-schedules-settings';
    let successMessage = AbstractDataProcessor.messages.entityCreatedRecordSuccess(Entity.MySchedulesTypes.processorName);
    let failMessage    = AbstractDataProcessor.messages.entityCreatedRecordFail(Entity.MySchedulesTypes.processorName);
    let callbackAfter  = () => {
        BootboxWrapper.hideAll();
    };
    let dataProcessorsDto            = new DataProcessorDto();
    dataProcessorsDto.successMessage = successMessage;
    dataProcessorsDto.failMessage    = failMessage;
    dataProcessorsDto.callback       = callback;
    dataProcessorsDto.url            = url;
    dataProcessorsDto.processorName  = this.processorName;
    return dataProcessorsDto;
},
````
*The structure is the same as in the **makeUpdateData**, however additional thing actually in this method is a callback (available remove/update as well)*
- `callback` allows adding additional logic which should be called after the response from the backend is initially processed(which is after the template is being reloaded/rebuilt)

## Remove
Create is handled via `DataProcessor` definition of `makeRemoveData`.

*This action structure is the same as both one above - nothing new to describe here additionally*
````js
makeRemoveData($baseElement?: JQuery<HTMLElement>): DataProcessorDto | null {
    let id              = $($baseElement).find('.id').html();
    let url             = '/my-passwords/remove/';
    let successMessage  = AbstractDataProcessor.messages.entityRemoveSuccess(Entity.MyPasswords.processorName);
    let failMessage     = AbstractDataProcessor.messages.entityRemoveFail(Entity.MyPasswords.processorName);
    let ajaxData       = {
        id: id
    };
    let dataProcessorsDto            = new DataProcessorDto();
    dataProcessorsDto.url            = url;
    dataProcessorsDto.successMessage = successMessage;
    dataProcessorsDto.failMessage    = failMessage;
    dataProcessorsDto.ajaxData       = ajaxData;
    dataProcessorsDto.isDataTable    = false;
    dataProcessorsDto.processorName  = this.processorName;
    return dataProcessorsDto;
},
````

:::important
This 3 methods (`makeRemoveData`, `makeCreateData`, `makeUpdateData`) are required for actions called by using the logic present in: `templates/modules/common/components/actions.twig`
:::

## Copy
Copy is a special action that was prepared explicitly for `passwords` module, is handled via `DataProcessor` definition of `makeCopyData`.

*This action structure is the same as both one above - nothing new to describe here additionally*
````js
makeCopyData($baseElement): DataProcessorDto | null  {
    let url     = '/my-passwords/get-password/';
    let id      = $($baseElement).find('.id').html();
    let ajaxUrl = url + id;
    let dataProcessorsDto            = new DataProcessorDto();
    dataProcessorsDto.url            = ajaxUrl;
    dataProcessorsDto.successMessage = AbstractDataProcessor.messages.password_copy_confirmation_message;
    dataProcessorsDto.failMessage    = AbstractDataProcessor.messages.default_copy_data_fail_message;
    dataProcessorsDto.processorName  = this.processorName;
    return dataProcessorsDto;
},
````

:::caution
Like mentioned, the `copy` logic was explicitly created for `passwords` module, like always the best intent was to create a flexible logic 
reusable in other cases, however since this had only one particular usage and might've never been used afterwards means that it might 
require additional adaptation.
:::

## Edit with prefilled modal
This action can be used to edit the entity via dialog/modal. Each of the called repositories names need to be defined in: 
`src/assets/scripts/core/ui/Actions/EditViaModalPrefilledWithEntityDataAction.ts`

Like for example:
````js
protected apiMethods = {
    buildEditEntityModalByRepositoryName: {
        MyContactRepository: {
            url     : "/dialog/body/edit-contact-card",
            method  : "POST",
            callback: () => {
                this.formAppendAction.attachFormViewAppendEvent();
                this.formAppendAction.attachRemoveParentEvent();
                JsColor.init();
                this.updateAction.attachContentSaveEventOnSaveIcon();
                BootstrapSelect.init();
            }
        },
        /**
         * Each dialog method should have target repository
         * @param entityId
         */
        callModal: function(entityId){}
    },
};
````

## Calling dialog
With this action it's possible to call dialog with rendered template. 
Definition of dialog logic must be added to: `src/assets/scripts/core/ui/Dialogs/LogicLoader/DialogLogic.ts`.

````js
/**
 * @description contains definition of logic for add/modify todo
 */
public static addOrModifyTodo()
{
    let callback = (dialogWrapper?: JQuery<HTMLElement>) => {
        let todoChecklist = new TodoChecklist();
        let createAction  = new CreateAction();
        let removeAction  = new RemoveAction();
        let updateAction  = new UpdateAction();
        createAction.init();
        todoChecklist.init();
        removeAction.init();
        updateAction.init();
        Popover.init();
    };
    let dialogDataDto = new DialogDataDto();
    dialogDataDto.callback = callback;
    return dialogDataDto;
}
````
:::important
1. This logic **MUST** be defined and should contain the js initializers. This is required 
due to the fact that backend returns only a template and thus no logic is bound to its element. The callback is
called directly after the dialog is filled with template.
2. The name of the method must be equal to the method name provided in the template via `data-dialog-name="myIssueCardAddRecords"`
:::