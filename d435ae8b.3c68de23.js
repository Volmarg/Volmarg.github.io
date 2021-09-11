(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{100:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return O}));var n=a(0),i=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var b=i.a.createContext({}),s=function(e){var t=i.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=s(e.components);return i.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,c=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),p=s(a),m=n,O=p["".concat(c,".").concat(m)]||p[m]||d[m]||r;return a?i.a.createElement(O,o(o({ref:t},b),{},{components:a})):i.a.createElement(O,o({ref:t},b))}));function O(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,c=new Array(r);c[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var b=2;b<r;b++)c[b]=a[b];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},88:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return s}));var n=a(2),i=a(6),r=(a(0),a(100)),c={id:"general",title:"Installation general",sidebar_label:"General",slug:"general"},o={unversionedId:"general/installation/general",id:"general/installation/general",isDocsHomePage:!1,title:"Installation general",description:"This section presents common information of how to install the project both for Windows and Linux.",source:"@site/docs/general/installation/general.md",slug:"/general/installation/general",permalink:"/docs/general/installation/general",version:"current",sidebar_label:"General",sidebar:"someSidebar",previous:{title:"Installation Windows",permalink:"/docs/general/installation/windows"},next:{title:"First usage",permalink:"/docs/general/first-usage"}},l=[{value:"Installing packages",id:"installing-packages",children:[]},{value:"Configuring environment",id:"configuring-environment",children:[]},{value:"Env",id:"env",children:[]},{value:"Building cache",id:"building-cache",children:[]},{value:"Creating database",id:"creating-database",children:[]},{value:"Services",id:"services",children:[]},{value:"Local Server",id:"local-server",children:[]}],b={rightToc:l};function s(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"This section presents common information of how to install the project both for ",Object(r.b)("inlineCode",{parentName:"p"},"Windows")," and ",Object(r.b)("inlineCode",{parentName:"p"},"Linux"),"."),Object(r.b)("h3",{id:"installing-packages"},"Installing packages"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Run ",Object(r.b)("inlineCode",{parentName:"li"},"composer install")," (",Object(r.b)("em",{parentName:"li"},"around 100-150mb to download"),")")),Object(r.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"In case You have this error An error occurred: ",Object(r.b)("inlineCode",{parentName:"p"},"Could not resolve host: security.sensiolabs.org."),"\nRun this command: ",Object(r.b)("inlineCode",{parentName:"p"},"composer require sensiolabs/security-checker")))),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"In case of problems with installing composer packages, in worst case You can just install them as ",Object(r.b)("inlineCode",{parentName:"p"},"sudo")))),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"This project has 2 built-in installers, which can be called directly after ",Object(r.b)("inlineCode",{parentName:"p"},"composer install"),", depending on the deployment:"),Object(r.b)("ul",{parentName:"div"},Object(r.b)("li",{parentName:"ul"},"For standard installation call: ",Object(r.b)("inlineCode",{parentName:"li"},"composer pms-installer")),Object(r.b)("li",{parentName:"ul"},"For installation from within docker usage call: ",Object(r.b)("inlineCode",{parentName:"li"},"composer pms-installer-docker"))),Object(r.b)("p",{parentName:"div"},"With this You can proceed directly to the ",Object(r.b)("strong",{parentName:"p"},"Local Server")," section on the end of the installation guide."))),Object(r.b)("h3",{id:"configuring-environment"},"Configuring environment"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Create a database that You will use for this application",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"prepare login for this database"),Object(r.b)("li",{parentName:"ul"},"prepare password for this database"),Object(r.b)("li",{parentName:"ul"},"prepare host and port for this database")))),Object(r.b)("h3",{id:"env"},"Env"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"If the file ",Object(r.b)("inlineCode",{parentName:"li"},".env")," does not exist in the root folder - create it"),Object(r.b)("li",{parentName:"ul"},"Open ",Object(r.b)("inlineCode",{parentName:"li"},".env")," file inside root of project"),Object(r.b)("li",{parentName:"ul"},"Add Your database connection as described in:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Doctrine (section: Configuring the Database)",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"example: ",Object(r.b)("inlineCode",{parentName:"li"},"DATABASE_URL=mysql://user:password@127.0.0.1:3306/pms")))))),Object(r.b)("li",{parentName:"ul"},"Set application environment to Production ",Object(r.b)("inlineCode",{parentName:"li"},"APP_ENV=prod")),Object(r.b)("li",{parentName:"ul"},"Disable debugging ",Object(r.b)("inlineCode",{parentName:"li"},"APP_DEBUG=0"))),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Check the default ",Object(r.b)("inlineCode",{parentName:"p"},".env")," in ",Object(r.b)("strong",{parentName:"p"},"main")," branch of the repository"))),Object(r.b)("h3",{id:"building-cache"},"Building cache"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Now run this commands one after another",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"sudo bin/console cache:clear")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"sudo bin/console cache:warmup"))))),Object(r.b)("h3",{id:"creating-database"},"Creating database"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Run this command"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"sudo bin/console doctrine:database:create")))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Run this command:"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"sudo bin/console doctrine:migrations:migrate"))))),Object(r.b)("div",{className:"admonition admonition-important alert alert--info"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"This is required to make the initial insertions into the tables. Sqls are specially handled so that no errors are being thrown\nif such table/column/constraint already exist."))),Object(r.b)("h3",{id:"services"},"Services"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"In terminal go to the project root folder",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"(example: ",Object(r.b)("inlineCode",{parentName:"li"},"cd/var/www/html/YourFolder"),")"))),Object(r.b)("li",{parentName:"ul"},"Run this command: ",Object(r.b)("inlineCode",{parentName:"li"},"bin/console --env=dev encrypt:genkey")),Object(r.b)("li",{parentName:"ul"},"Edit the file: ",Object(r.b)("inlineCode",{parentName:"li"},"config/services.yaml"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Change section parameters to this:")))),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"parameters:\n    locale: 'en' #Leave any other subsections like this one\n    encrypt_key: 'YourGeneratedKey goes here'\n")),Object(r.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"warning")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Save somewhere the generated key. This key is used to encrypt and decrypt passwords stored in Passwords module\nWithout this key it won't be able to decrypt Your passwords."))),Object(r.b)("h3",{id:"local-server"},"Local Server"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Get the script from: ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://symfony.com/download"}),"https://symfony.com/download")),Object(r.b)("li",{parentName:"ul"},"In project root call: ",Object(r.b)("inlineCode",{parentName:"li"},"symfony server:start --port=8001")),Object(r.b)("li",{parentName:"ul"},"Open the localhost with given port, in this case: ",Object(r.b)("inlineCode",{parentName:"li"},"http://127.0.0.1:8001"))))}s.isMDXComponent=!0}}]);