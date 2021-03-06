(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{78:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return b}));var a=n(2),i=n(6),r=(n(0),n(96)),o={title:"Content re/loading",sidebar_label:"Content re/loading",slug:"content-re-loading"},c={unversionedId:"technical/content-re-loading",id:"technical/content-re-loading",isDocsHomePage:!1,title:"Content re/loading",description:"Page content",source:"@site/docs/technical/content-re-loading.md",slug:"/technical/content-re-loading",permalink:"/docs/technical/content-re-loading",version:"current",sidebar_label:"Content re/loading",sidebar:"someSidebar",previous:{title:"JS actions handling",permalink:"/docs/technical/actions/js-actions-handling"},next:{title:"Lock mechanism",permalink:"/docs/technical/special-functionality/lock-mechanism"}},l=[{value:"Page content",id:"page-content",children:[{value:"Backend",id:"backend",children:[]},{value:"Frontend",id:"frontend",children:[]}]},{value:"Navigation",id:"navigation",children:[{value:"Template",id:"template",children:[]},{value:"Backend",id:"backend-1",children:[]}]},{value:"General information",id:"general-information",children:[]}],s={rightToc:l};function b(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"page-content"},"Page content"),Object(r.b)("p",null,"There are 2 ways that the navigation works:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"via ajx,"),Object(r.b)("li",{parentName:"ul"},"via full page load (standard request),")),Object(r.b)("p",null,"The difference is that when navigating inside the project the content of the page is being loaded in the central container:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),'<section class="twig-body-section">\n    {% block body %}{% endblock %}\n</section>\n')),Object(r.b)("p",null,"while the ",Object(r.b)("inlineCode",{parentName:"p"},"full page load")," is the standard navigation support. This is also required as for example user might want to open\ngiven page in new tab so entire content of the page must be loaded, not only the central container."),Object(r.b)("p",null,"Now how does this work?"),Object(r.b)("h3",{id:"backend"},"Backend"),Object(r.b)("p",null,"Each action has one action which returns the content of the visited page:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-php"}),'/**\n * @Route("/my-notes/settings", name="my-notes-settings")\n * @param Request $request\n * @return Response\n * @throws DBALException\n * \n */\npublic function display(Request $request) {\n    $json_response = $this->submitForm($request);\n    if (!$request->isXmlHttpRequest()) {\n        return $this->renderTemplate(false);\n    }\n    $message           = $json_response->getContent();\n    $code              = $json_response->getStatusCode();\n    $template_content  = $this->renderTemplate(true)->getContent();\n    return AjaxResponse::buildJsonResponseForAjaxCall($code, $message, $template_content);\n}\n')),Object(r.b)("p",null,"Then there is additional method which renders the template:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-php"}),"private function renderTemplate(bool $ajax_render = false, bool $skip_rewriting_twig_vars_to_js = false) {\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"$ajax_render")," is responsible for deciding wether we are only reloading the container content or we are loading full page,"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"$skip_rewriting_twig_vars_to_js")," is additional special variable used in case of handling actions such like update. ")),Object(r.b)("div",{className:"admonition admonition-important alert alert--info"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Templates are passing information about currently visited route to the JS and sometimes there is a need to skip rewriting such variables.\nThis is particullary needed when we modify a record via ",Object(r.b)("inlineCode",{parentName:"p"},"update"),". In most of the cases the container is just fully reloaded with template\ncontaining new state of current page - such reloading rely on the variables passed in the template. "))),Object(r.b)("h3",{id:"frontend"},"Frontend"),Object(r.b)("h4",{id:"templates"},"Templates"),Object(r.b)("p",null,"There are 2 main/base templates of all the pages (",Object(r.b)("em",{parentName:"p"},"this does not include dialogs"),"):"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"templates/base.html.twig")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"templates/blank.html.twig"))),Object(r.b)("p",null,"Every page is extending from one of these templates, and the mentioned backend ",Object(r.b)("inlineCode",{parentName:"p"},"$ajax_render")," variable is responsible\nfor deciding which template is being extended:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'{% if ajax_render == false %}\n    {% set template= "base.html.twig" %}\n{% else %}\n    {% set template= "blank.html.twig" %}\n{% endif %}\n\n    {% extends template %}\n')),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"base.html.twig")," - used when reloading content via ajax,"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"templates/base.html.twig")," - used when loading content via standard request")),Object(r.b)("h4",{id:"javascript"},"Javascript"),Object(r.b)("p",null,"Reloading page content is mostly handled by 2 methods:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"AjaxEvents::loadModuleContentByUrl()")," - the result of called url must be an ",Object(r.b)("inlineCode",{parentName:"li"},"AjaxResponse")," with template param being set,"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"Ui::insertIntoMainContent()")," - inserts the content directly into the main container,")),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"For example ajax calls for actions use directly ",Object(r.b)("inlineCode",{parentName:"p"},"Ui::insertIntoMainContent()")," since ",Object(r.b)("inlineCode",{parentName:"p"},"AjaxResponse")," is a global response sent\nupon calling via ajax."))),Object(r.b)("h2",{id:"navigation"},"Navigation"),Object(r.b)("p",null,"Project supports also reloading single menu nodes, however this is implemented only for example in ",Object(r.b)("inlineCode",{parentName:"p"},"Files/Images")," and is triggered\nupon creating new directory."),Object(r.b)("h4",{id:"javascript-1"},"Javascript"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"src/assets/scripts/core/ajax/Ajax.ts")," \u2192 ",Object(r.b)("inlineCode",{parentName:"li"},"Ajax::singleMenuNodeReload()"))),Object(r.b)("h3",{id:"template"},"Template"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"menu nodes are defined in ",Object(r.b)("inlineCode",{parentName:"li"},"templates/page-elements/components/sidebar/menu-nodes"),", "),Object(r.b)("li",{parentName:"ul"},"each reloadable menu node must have:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"class: ",Object(r.b)("inlineCode",{parentName:"li"},"sidebar-menu-node-element")),Object(r.b)("li",{parentName:"ul"},"data attribute: ",Object(r.b)("inlineCode",{parentName:"li"},"data-menu-node-name"))))),Object(r.b)("div",{className:"admonition admonition-important alert alert--info"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Each menu node must be defined in separated file. The value of ",Object(r.b)("inlineCode",{parentName:"p"},"data-menu-node-name")," must be a constant defined in :\n",Object(r.b)("inlineCode",{parentName:"p"},"src/Action/System/AppAction.php"),"."))),Object(r.b)("h3",{id:"backend-1"},"Backend"),Object(r.b)("p",null,"Each new module node must be also added as constant in ",Object(r.b)("inlineCode",{parentName:"p"},"src/Action/System/AppAction.php"),", additionally 2 arrays must be updated\nwith new node: ",Object(r.b)("inlineCode",{parentName:"p"},"MENU_NODE_MODULES_NAMES_INTO_CONST_NAMES")," and ",Object(r.b)("inlineCode",{parentName:"p"},"MENU_NODES_MODULES_NAMES_TO_TEMPLATES_MAP")),Object(r.b)("div",{className:"admonition admonition-important alert alert--info"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Each entry in ",Object(r.b)("inlineCode",{parentName:"p"},"MENU_NODES_MODULES_NAMES_TO_TEMPLATES_MAP")," represents a twig template, so it's required that menu node template\nhas exactly the same name as in the patter. For example ",Object(r.b)("inlineCode",{parentName:"p"},"MENU_NODE_MODULE_NAME_MY_FILES")," equals to path: ",Object(r.b)("inlineCode",{parentName:"p"},"page-elements/components/sidebar/menu-nodes/my-files.twig")))),Object(r.b)("h2",{id:"general-information"},"General information"),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Most of the ajax calls are handled by ",Object(r.b)("inlineCode",{parentName:"p"},"src/assets/scripts/core/ui/Actions")," and ",Object(r.b)("inlineCode",{parentName:"p"},"src/assets/scripts/core/ajax"),"."))))}b.isMDXComponent=!0},96:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return u}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),b=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=b(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=b(n),m=a,u=d["".concat(o,".").concat(m)]||d[m]||p[m]||r;return n?i.a.createElement(u,c(c({ref:t},s),{},{components:n})):i.a.createElement(u,c({ref:t},s))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<r;s++)o[s]=n[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);