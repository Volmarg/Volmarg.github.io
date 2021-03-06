(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{56:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return r})),a.d(t,"default",(function(){return b}));var n=a(2),i=a(6),o=(a(0),a(96)),c={title:"Binding in templates",sidebar_label:"Binding in templates",slug:"binding-in-templates"},l={unversionedId:"technical/actions/binding-in-templates",id:"technical/actions/binding-in-templates",isDocsHomePage:!1,title:"Binding in templates",description:"There are special classes/attributes that need to be defined for given elements to be used as action buttons. However,",source:"@site/docs/technical/actions/binding-in-templates.md",slug:"/technical/actions/binding-in-templates",permalink:"/docs/technical/actions/binding-in-templates",version:"current",sidebar_label:"Binding in templates",sidebar:"someSidebar",previous:{title:"General",permalink:"/docs/technical/actions/technical-actions-general"},next:{title:"JS actions handling",permalink:"/docs/technical/actions/js-actions-handling"}},r=[{value:"Update/Delete action",id:"updatedelete-action",children:[]},{value:"Special actions",id:"special-actions",children:[]},{value:"Specially handled actions",id:"specially-handled-actions",children:[]}],s={rightToc:r};function b(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"There are special classes/attributes that need to be defined for given elements to be used as action buttons. However,\nthere is already flexible template component which can handle it all:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"templates/modules/common/components/actions.twig")),Object(o.b)("li",{parentName:"ul"},"for table ",Object(o.b)("inlineCode",{parentName:"li"},"templates/modules/common/components/table-cells/actions.html.twig")),Object(o.b)("li",{parentName:"ul"},"for accordion ",Object(o.b)("inlineCode",{parentName:"li"},"templates/modules/common/components/accordion/actions.twig"))),Object(o.b)("p",null,"All there is todo is just including the actions component with selection of actions that should be available:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),'{% include \'modules/common/components/table-cells/actions.html.twig\' with {\n    "trash"                   : true,\n    "edit"                    : true,\n    "save"                    : true,\n    "fontawesome"             : true,\n    "lock_record"             : lock_record,\n    "lock_type"               : lock_type,\n    "lock_target"             : lock_target,\n    "copy"                    : true,\n    "copy_attr"               : \'data-copy-from-selector="#password-id-\' ~ password.id ~ \'"\',\n    "tinyMceSelector"         : "#tiny-mce-selector-for-issue-progress-accordion" ~ loop.index0,\n    "tinyMceInstanceSelector" : "tiny-mce-selector-for-issue-progress-accordion" ~ loop.index0,\n} %}\n')),Object(o.b)("h2",{id:"updatedelete-action"},"Update/Delete action"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"trash")," is responsible for removing the record"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"edit")," turns ",Object(o.b)("inlineCode",{parentName:"li"},"contenteditable")," on elements by default "),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"save")," triggers update")),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"By default all entries in the system are ",Object(o.b)("inlineCode",{parentName:"p"},"soft deleted")," which means that these can be reverted in case of missclick. "),Object(o.b)("p",{parentName:"div"},"All entities which support soft-delete logic implement the ",Object(o.b)("inlineCode",{parentName:"p"},"SoftDeletableEntityInterface"),"."))),Object(o.b)("div",{className:"admonition admonition-important alert alert--info"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"The ",Object(o.b)("inlineCode",{parentName:"p"},"edit")," action is also needed to make the special actions work as it ",Object(o.b)("inlineCode",{parentName:"p"},"toggles")," the visibility of actions"))),Object(o.b)("h2",{id:"special-actions"},"Special actions"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"fontawesome")," is special action which allows selecting fontawesome icon from list")),Object(o.b)("div",{className:"admonition admonition-important alert alert--info"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},Object(o.b)("inlineCode",{parentName:"p"},"fontawesome")," action requires ",Object(o.b)("inlineCode",{parentName:"p"},"fontawesome-input")," class to be added to the element which should contain the fontawesome icon name"))),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"lock")," will toggle ",Object(o.b)("inlineCode",{parentName:"li"},"lockMechanism")," on given entry (",Object(o.b)("em",{parentName:"li"},"more about this in the other guide"),")"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"copy")," allows to copy content of given selector into the clipboard,"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"edit with tinymce")," allows to turn the given element into the container fully editable via tinymce")),Object(o.b)("div",{className:"admonition admonition-important alert alert--info"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},Object(o.b)("inlineCode",{parentName:"p"},"edit with tinymce")," action requires the target element to have 2 classes: ",Object(o.b)("br",null)," ",Object(o.b)("inlineCode",{parentName:"p"},"edit-record-with-tiny-mce transform-to-tiny-mce")))),Object(o.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"warning")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Like it's written in the specification, ",Object(o.b)("strong",{parentName:"p"},"chrome")," should be used to work with this project while for example ",Object(o.b)("inlineCode",{parentName:"p"},"copy")," seems to be breaking in Firefox."))),Object(o.b)("h2",{id:"specially-handled-actions"},"Specially handled actions"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"toggle-boolval")," simply turns the ",Object(o.b)("inlineCode",{parentName:"li"},"bool")," value of entity, it consists of given html attributes: (",Object(o.b)("em",{parentName:"li"},"does not require defining logic in js"),")")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),'<span class="action pointer mr-1"\n      data-entity-id="{{ issueCardDto.issue().getId() }}"\n      data-entity-toggle-boolval="true"\n      data-entity-toggle-success-message="{{ \'issues.card.ajaxCallMessages.dashboardVisibilityHasBeenToggled\' | trans }}"\n      data-entity-repository-name="MyIssueRepository"\n      data-entity-field-name="showOnDashboard"\n>\n')),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"dialog")," allows to create the dialog which is then prefilled by template content returned on backend")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),'<span class="action pointer"\n      data-entity-id="{{ issueCardDto.issue().getId() }}"\n      data-entity-detials-action="true"\n      data-dialog-call-request-url="{{ path(\'dialog_body_add_issue_data\') }}"\n      data-dialog-call-request-method="POST"\n      data-dialog-call-request-post-parameters=\'{"entityId": "{{ issueCardDto.issue().getId() }}"}\'\n      data-call-dialog-on-click="true"\n      data-dialog-name="myIssueCardAddRecords"\n>\n')),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"append form")," allows appending form on view")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),'<button class="append-form btn btn-sm btn-primary"\n        style="font-size:13px;"\n        data-target-selector=".contacts-types-wrapper-for-widget"\n        data-form-name="contactTypeDto">\n    {{ \'forms.MyContactType.labels.addType\' | trans }}\n</button>\n')),Object(o.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"warning")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("ul",{parentName:"div"},Object(o.b)("li",{parentName:"ul"},"the forms appended via ",Object(o.b)("inlineCode",{parentName:"li"},"append-form")," should not be submitted separately - these should only be responsible for adding fields.")))),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"remove")," - this is an additional way of removing entities from the database (",Object(o.b)("em",{parentName:"li"},"this solution does not require defining logic in js"),")")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),'<span class="action pointer"\n      data-entity-id="{{ issueCardDto.issue().getId() }}"\n      data-repository-name="MyIssueRepository"\n      data-entity-removal-action="true"\n>\n')),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"edit via prefilled modal")," - allows editing state of DB entry via modal")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),'<div class="action"\n     data-entity-id="{{ contact.getId() }}"\n     data-repository-name="MyContactRepository"\n     data-entity-modal-edit-action="true">\n    <i class="fas fa-pen-square fa-sm"></i>\n</div>\n')),Object(o.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"warning")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Some actions were used only once, thus it's possible that might malfunction in some untested cases. This regards for example: ",Object(o.b)("inlineCode",{parentName:"p"},"edit via prefilled modal")," "))))}b.isMDXComponent=!0},96:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return u}));var n=a(0),i=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=i.a.createContext({}),b=function(e){var t=i.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=b(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},p=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,s=r(e,["components","mdxType","originalType","parentName"]),d=b(a),p=n,u=d["".concat(c,".").concat(p)]||d[p]||m[p]||o;return a?i.a.createElement(u,l(l({ref:t},s),{},{components:a})):i.a.createElement(u,l({ref:t},s))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,c=new Array(o);c[0]=p;var l={};for(var r in t)hasOwnProperty.call(t,r)&&(l[r]=t[r]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var s=2;s<o;s++)c[s]=a[s];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"}}]);