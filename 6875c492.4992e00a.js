(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{73:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(111),c=t(121),m=t(107),s=t(113);a.default=function(e){const{metadata:a,items:t,sidebar:n}=e,{allTagsPath:i,name:o,count:d}=a;return l.a.createElement(r.a,{title:`Posts tagged "${o}"`,description:`Blog | Tagged "${o}"`},l.a.createElement("div",{className:"container margin-vert--lg"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col col--2"},l.a.createElement(s.a,{sidebar:n})),l.a.createElement("main",{className:"col col--8"},l.a.createElement("h1",null,d," ",function(e,a){return e>1?a+"s":a}(d,"post"),' tagged with "',o,'"'),l.a.createElement(m.a,{href:i},"View All Tags"),l.a.createElement("div",{className:"margin-vert--xl"},t.map((({content:e})=>l.a.createElement(c.a,{key:e.metadata.permalink,frontMatter:e.frontMatter,metadata:e.metadata,truncated:!0},l.a.createElement(e,null)))))))))}}}]);