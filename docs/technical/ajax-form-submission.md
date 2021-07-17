---
id: ajax-form-submission
title: Ajax form submission
sidebar_label: Ajax form submission
slug: ajax-form-submission
---

**This section covers the information regarding the form submission via ajax with usage of the internal logic. 
This particular example covers the form for a module(*system wide logic for forms is pretty much the same*)**

## Backend
### Defining form
Define a new form in the: `/src/Form//Modules/<moduleName>` the same way that other forms are already defined.

:::note
There is no particular need to keep the form in given subfolders - it's just all about keeping the code & structure more organized.
Also to keep the code consistent - update the: `src/Controller/Core/Forms.php`
:::

:::tip
It is also possible to create a form by calling symfony command: `bin/console make:form`
:::

### Defining action
The most important thing is just to have a route which will contain the form validation and data insertion logic. 
It can be either separated route like `/<moduleName>/create-entry-via-form`, or this can be handled the way it's done now:

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
        ...
````

The `submitForm` method can contain any logic related to extracting/converting data from request, but what really matter is 
to have implementation of form submission:

````php
        $form->handleRequest($request);
        $form_data = $form->getData();

        if ($form->isSubmitted() && $form->isValid()) {
            $this->app->em->persist($form_data);
            $this->app->em->flush();
````

:::note
There is no requirement to flush the entire entity, anything could be defined at this step, like for example updating just 
few entries in DB.
:::  

## Frontend
### Defining JS data processor
Javascript contains internal logic called `DataProcessor`, it's only goal is to read the data from the form, handle user defined 
logic in callback and forward the gathered/fetched values to the backend action.

Data processors are defined in: `src/assets/scripts/core/ui/DataProcessor`. 

There are 2 particular files used for handling form submission (and CRUD overall - but about that in the other section):
- `src/assets/scripts/core/ui/DataProcessor/Entity.ts`
- `src/assets/scripts/core/ui/DataProcessor/SpecialAction.ts`

:::note
Both files consist the same type of logic, the sole purpose of this separation is to keep the code organized, since 
`Entity.ts` contain definitions for creating whole `Entities` upon submission and `SpecialAction.ts` contain logic for 
updating for example single cells in DB. 
:::

### Binding JS logic in template

Take a look on this example:
````html
    <section class="p-20 add-record-form" data-type="MyTodoElement">
        <h3 class="text-center">{{ 'todo.list.headers.addElement' | trans }}</h3>
        {% set form = todo_element_form.createView %}
        {{ form_start(form, {attr: {
            'data-entity': 'MyTodoElement'
        }})}}
````

* The parent element **must** have :
    * data param `data-type` equal to the definition of entity in the Js,
    * class `add-record-form`,
* The form element **must** have `data-entity` also equal to the definition of entity in the Js, 