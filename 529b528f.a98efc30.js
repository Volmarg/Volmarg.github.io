(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{100:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return u}));var a=n(0),i=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var b=i.a.createContext({}),m=function(e){var t=i.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=m(e.components);return i.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),p=m(n),d=a,u=p["".concat(r,".").concat(d)]||p[d]||s[d]||o;return n?i.a.createElement(u,c(c({ref:t},b),{},{components:n})):i.a.createElement(u,c({ref:t},b))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,r[1]=c;for(var b=2;b<o;b++)r[b]=n[b];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},69:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return m}));var a=n(2),i=n(6),o=(n(0),n(100)),r={id:"development-mode",title:"Development mode",sidebar_label:"Development mode",slug:"development-mode"},c={unversionedId:"technical/development-mode",id:"technical/development-mode",isDocsHomePage:!1,title:"Development mode",description:"This section covers the information about working with the project in the development mode",source:"@site/docs/technical/development-mode.md",slug:"/technical/development-mode",permalink:"/docs/technical/development-mode",version:"current",sidebar_label:"Development mode",sidebar:"someSidebar",previous:{title:"Guide mode",permalink:"/docs/general/guide mode"},next:{title:"Folders structure",permalink:"/docs/technical/folders-structure"}},l=[{value:"Local server",id:"local-server",children:[]},{value:"Node/NPM",id:"nodenpm",children:[]},{value:"Webpack Encore Watcher",id:"webpack-encore-watcher",children:[]},{value:"Project environment",id:"project-environment",children:[]}],b={rightToc:l};function m(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"This section covers the information about working with the project in the development mode")),Object(o.b)("div",{className:"admonition admonition-important alert alert--info"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Keep in mind that ",Object(o.b)("strong",{parentName:"p"},"development")," mode is way much slower than ",Object(o.b)("strong",{parentName:"p"},"production")," mode, and it won't be optimized, it's nearly impossible.\nThe project in use should never, ever run in the ",Object(o.b)("strong",{parentName:"p"},"development")," mode due to efficiency limitation and security reasons."))),Object(o.b)("h2",{id:"local-server"},"Local server"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"First of all just like in the ",Object(o.b)("strong",{parentName:"li"},"production")," mode the local server must keep running")),Object(o.b)("h2",{id:"nodenpm"},"Node/NPM"),Object(o.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"warning")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"During installation of the packages there will be ",Object(o.b)("strong",{parentName:"p"},"tones")," of information about deprecations. The packages will be updated\nat some point, but due to the scale of the project, planned changes and so on - its impossible to maintain everything.\nUpdating the js packages will cause a lot of issues and will enforcea lott of testing, that's why so far the main goal was to achieve working, stable project. "))),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"At this step You require ",Object(o.b)("inlineCode",{parentName:"li"},"Node")," and ",Object(o.b)("inlineCode",{parentName:"li"},"Npm")," which are mentioned in the ",Object(o.b)("inlineCode",{parentName:"li"},"Installation")," section",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"npm update")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"npm install -g --unsafe-perm")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"npm i node-sass -g --unsafe-perm")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"nodejs node_modules/node-sass/scripts/install.js")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"npm rebuild node-sass"))))),Object(o.b)("div",{className:"admonition admonition-important alert alert--info"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"You might need to change project folder permissions and groups after that but there shouldn't be any problem"))),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Given npm commands should work without any problems, but in case of installation problems call the commands as ",Object(o.b)("strong",{parentName:"p"},"sudo"),", and\nwith this 2 parameters ",Object(o.b)("inlineCode",{parentName:"p"},"--unsafe-perm=true"),", ",Object(o.b)("inlineCode",{parentName:"p"},"--allow-root")))),Object(o.b)("h2",{id:"webpack-encore-watcher"},"Webpack Encore Watcher"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Symfony ships with a pure-JavaScript library - called Webpack Encore - that makes working with CSS and JavaScript a joy.\nYou can use it, use something else, or create static CSS and JS files in your public/ directory directly and include them in your templates.\nRead more ",Object(o.b)("a",Object(a.a)({parentName:"em"},{href:"https://symfony.com/doc/current/frontend.html"}),"here"))," "),Object(o.b)("p",null,"Follow this steps:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Open cli in the root of Your project"),Object(o.b)("li",{parentName:"ul"},"Run this command ",Object(o.b)("inlineCode",{parentName:"li"},"./node_modules/.bin/encore dev --watch"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Keep the watcher running (simply - don't close the console tab, or just make it run in background)")))),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"For the production mode You want to use the compressed/minified js/css (",Object(o.b)("strong",{parentName:"p"},"keep in mind that it might take even 1min+ to compile the bundles"),").\nRun this command in root of project: ",Object(o.b)("inlineCode",{parentName:"p"},"./node_modules/.bin/encore production")))),Object(o.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"warning")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"It's important to mention that using webpack has at least one downfall which is the problem to implement some existing plugins.\nThe very simple example from this project is that it took literally hours just adding and activating the ",Object(o.b)("strong",{parentName:"p"},"TinyMCE"),". "))),Object(o.b)("h2",{id:"project-environment"},"Project environment"),Object(o.b)("p",null,"Follow this steps:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"open the ",Object(o.b)("inlineCode",{parentName:"li"},".env")," file",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"set ",Object(o.b)("inlineCode",{parentName:"li"},"APP_ENV=dev")),Object(o.b)("li",{parentName:"ul"},"set ",Object(o.b)("inlineCode",{parentName:"li"},"APP_DEBUG=1")," "))),Object(o.b)("li",{parentName:"ul"},"rebuild the cache by calling this 2 commands:",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"bin/console cache:clear")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"bin/console cache:warmup"))))))}m.isMDXComponent=!0}}]);