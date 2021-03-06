(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{87:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return l})),t.d(n,"rightToc",(function(){return p})),t.d(n,"default",(function(){return s}));var r=t(2),a=t(6),o=(t(0),t(96)),i={id:"windows",title:"Installation Windows",sidebar_label:"Windows",slug:"windows"},l={unversionedId:"general/installation/windows",id:"general/installation/windows",isDocsHomePage:!1,title:"Installation Windows",description:"Overall tips for setting up the project on Windows. Keep in mind that by default everything is being mostly tested",source:"@site/docs/general/installation/windows.md",slug:"/general/installation/windows",permalink:"/docs/general/installation/windows",version:"current",sidebar_label:"Windows",sidebar:"someSidebar",previous:{title:"Installation Linux",permalink:"/docs/general/installation/linux"},next:{title:"Installation general",permalink:"/docs/general/installation/general"}},p=[{value:"Environment",id:"environment",children:[]},{value:"Env",id:"env",children:[]}],c={rightToc:p};function s(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Overall tips for setting up the project on ",Object(o.b)("inlineCode",{parentName:"p"},"Windows"),". Keep in mind that by default everything is being mostly tested\non the ",Object(o.b)("inlineCode",{parentName:"p"},"Linux"),". Some information in this section were delivered by the users."),Object(o.b)("h2",{id:"environment"},"Environment"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"First You need the tools for managing packages",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://getcomposer.org/doc/00-intro.md#installation-windows"}),"Installing composer")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://nodejs.org/en/download/"}),"Installing npm and Node")))),Object(o.b)("li",{parentName:"ul"},"Then You need environment (Pick one)",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.apachefriends.org/pl/index.html"}),"Xampp")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"http://www.wampserver.com/en/"}),"Wamp")))),Object(o.b)("li",{parentName:"ul"},"Unzip/put entire project into Your base html folder which depends on application You use.",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Check corresponding manuals where projects folders are for Xampp or Wampp, usually this is:",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Xampp")," ",Object(o.b)("inlineCode",{parentName:"li"},"C:\\xampp\\htdocs")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Wamp")," ",Object(o.b)("inlineCode",{parentName:"li"},"c:\\wamp\\www")))))),Object(o.b)("li",{parentName:"ul"},"Now open terminal (for example ",Object(o.b)("inlineCode",{parentName:"li"},"git bash"),")"),Object(o.b)("li",{parentName:"ul"},"Go to section ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"general"}),"general"))),Object(o.b)("h2",{id:"env"},"Env"),Object(o.b)("p",null,"If You are running the project on Xampp (this most likely also applies for the Wampp), then You need to adjust the section in the ",Object(o.b)("inlineCode",{parentName:"p"},".env"),"\nfile. This information was delivered by one of the project users (",Object(o.b)("em",{parentName:"p"},"anonymous"),")."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-dotenv"}),"# Modules based variables\nUPLOAD_DIR=C:/xampp/htdocs/upload                       # the name of the upload directory for upload modules (in the /public dir)\nIMAGES_UPLOAD_DIR=C:/xampp/htdocs/upload/images         # name of the directory for MyImages module\nFILES_UPLOAD_DIR=C:/xampp/htdocs/upload/files           # name of the directory for MyFiles module\nVIDEOS_UPLOAD_DIR=C:/xampp/htdocs/upload/videos         # name of the directory for MyVideo module\nMINIATURES_UPLOAD_DIR=C:/xampp/htdocs/upload/miniatures # name of the directory for generating/storing miniatrures for MyImages module\nPUBLIC_ROOT_DIR=C:/xampp/htdocs/upload/public           # this is the name of `public` dir and should not be changed\n")))}s.isMDXComponent=!0},96:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=a.a.createContext({}),s=function(e){var n=a.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=s(e.components);return a.a.createElement(c.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(t),d=r,m=u["".concat(i,".").concat(d)]||u[d]||b[d]||o;return t?a.a.createElement(m,l(l({ref:n},c),{},{components:t})):a.a.createElement(m,l({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=d;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);