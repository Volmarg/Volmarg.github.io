(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{104:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return u}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),m=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=m(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},p=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=m(n),p=a,u=b["".concat(o,".").concat(p)]||b[p]||d[p]||r;return n?i.a.createElement(u,c(c({ref:t},l),{},{components:n})):i.a.createElement(u,c({ref:t},l))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<r;l++)o[l]=n[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},75:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return m}));var a=n(2),i=n(6),r=(n(0),n(104)),o={id:"ajax-form-submission",title:"Ajax form submission",sidebar_label:"Ajax form submission",slug:"ajax-form-submission"},c={unversionedId:"technical/ajax-form-submission",id:"technical/ajax-form-submission",isDocsHomePage:!1,title:"Ajax form submission",description:"**This section covers the information regarding the form submission via ajax with usage of the internal logic.",source:"@site/docs/technical/ajax-form-submission.md",slug:"/technical/ajax-form-submission",permalink:"/docs/technical/ajax-form-submission",version:"current",sidebar_label:"Ajax form submission",sidebar:"someSidebar",previous:{title:"Adding menu element",permalink:"/docs/technical/adding-menu-element"},next:{title:"General",permalink:"/docs/technical/actions/technical-actions-general"}},s=[{value:"Backend",id:"backend",children:[{value:"Defining form",id:"defining-form",children:[]},{value:"Defining action",id:"defining-action",children:[]}]},{value:"Frontend",id:"frontend",children:[{value:"Defining JS data processor",id:"defining-js-data-processor",children:[]},{value:"Binding JS logic in template",id:"binding-js-logic-in-template",children:[]}]}],l={rightToc:s};function m(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"This section covers the information regarding the form submission via ajax with usage of the internal logic.\nThis particular example covers the form for module(",Object(r.b)("em",{parentName:"strong"},"system wide logic for forms is pretty much the same"),")")),Object(r.b)("h2",{id:"backend"},"Backend"),Object(r.b)("h3",{id:"defining-form"},"Defining form"),Object(r.b)("p",null,"Define a new form in the: ",Object(r.b)("inlineCode",{parentName:"p"},"/src/Form//Modules/<moduleName>")," the same way that other forms are already defined."),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"There is no particular need to keep the form in given subfolders - it's just all about keeping the code & structure more organized.\nAlso to keep the code consistent - update the: ",Object(r.b)("inlineCode",{parentName:"p"},"src/Controller/Core/Forms.php")))),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"It is also possible to create a form by calling symfony command: ",Object(r.b)("inlineCode",{parentName:"p"},"bin/console make:form")))),Object(r.b)("h3",{id:"defining-action"},"Defining action"),Object(r.b)("p",null,"The most important thing is just to have a route which will contain the form validation and data insertion logic.\nIt can be either separated route like ",Object(r.b)("inlineCode",{parentName:"p"},"/<moduleName>/create-entry-via-form"),", or this can be handled the way it's done now:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-php"}),'    /**\n     * @Route("/my-notes/settings", name="my-notes-settings")\n     * @param Request $request\n     * @return Response\n     * @throws DBALException\n     * \n     */\n    public function display(Request $request) {\n        $json_response = $this->submitForm($request);\n        ...\n')),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"submitForm")," method can contain any logic related to extracting/converting data from request, but what really matter is\nto have implementation of form submission:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-php"}),"        $form->handleRequest($request);\n        $form_data = $form->getData();\n\n        if ($form->isSubmitted() && $form->isValid()) {\n            $this->app->em->persist($form_data);\n            $this->app->em->flush();\n")),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"There is no requirement to flush the entire entity, anything could be defined at this step, like for example updating just\nfew entries in DB."))),Object(r.b)("h2",{id:"frontend"},"Frontend"),Object(r.b)("h3",{id:"defining-js-data-processor"},"Defining JS data processor"),Object(r.b)("p",null,"Javascript contains internal logic called ",Object(r.b)("inlineCode",{parentName:"p"},"DataProcessor"),", it's only goal is to read the data from the form, handle user defined\nlogic in callback and forward the gathered/fetched values to the backend action."),Object(r.b)("p",null,"Data processors are defined in: ",Object(r.b)("inlineCode",{parentName:"p"},"src/assets/scripts/core/ui/DataProcessor"),". "),Object(r.b)("p",null,"There are 2 particular files used for handling form submission (and CRUD overall - but about that in other section):"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"src/assets/scripts/core/ui/DataProcessor/Entity.ts")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"src/assets/scripts/core/ui/DataProcessor/SpecialAction.ts"))),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Both files consist the same type of logic, the sole purpose of this separation is to keep the code organized, since\n",Object(r.b)("inlineCode",{parentName:"p"},"Entity.ts")," contain definitions for creating whole ",Object(r.b)("inlineCode",{parentName:"p"},"Entities")," upon submission and ",Object(r.b)("inlineCode",{parentName:"p"},"SpecialAction.ts")," contain logic for\nupdating for example single cells in DB. "))),Object(r.b)("h3",{id:"binding-js-logic-in-template"},"Binding JS logic in template"),Object(r.b)("p",null,"Take a look on this example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),"    <section class=\"p-20 add-record-form\" data-type=\"MyTodoElement\">\n        <h3 class=\"text-center\">{{ 'todo.list.headers.addElement' | trans }}</h3>\n        {% set form = todo_element_form.createView %}\n        {{ form_start(form, {attr: {\n            'data-entity': 'MyTodoElement'\n        }})}}\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"The parent element ",Object(r.b)("strong",{parentName:"li"},"must")," have :",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"data param ",Object(r.b)("inlineCode",{parentName:"li"},"data-type")," equal to the definition of entity in the Js,"),Object(r.b)("li",{parentName:"ul"},"class ",Object(r.b)("inlineCode",{parentName:"li"},"add-record-form"),","))),Object(r.b)("li",{parentName:"ul"},"The form element ",Object(r.b)("strong",{parentName:"li"},"must")," have ",Object(r.b)("inlineCode",{parentName:"li"},"data-entity")," also equal to the definition of entity in the Js, ")))}m.isMDXComponent=!0}}]);