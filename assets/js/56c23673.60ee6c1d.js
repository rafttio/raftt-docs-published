"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[193],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return u}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),s=p(t),u=a,m=s["".concat(c,".").concat(u)]||s[u]||f[u]||i;return t?r.createElement(m,o(o({ref:n},d),{},{components:t})):r.createElement(m,o({ref:n},d))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=s;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},4736:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return c},default:function(){return u},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return f}});var r=t(7462),a=t(3366),i=(t(7294),t(3905)),o=["components"],l={Title:"Dev Container"},c="Dev Container",p={unversionedId:"config/dev_container",id:"config/dev_container",title:"Dev Container",description:'In addition to the containers that are a part of you "original" environment, another "special" container is created when an environment is spawned - the dev container (named dev by default).',source:"@site/docs/config/dev_container.md",sourceDirName:"config",slug:"/config/dev_container",permalink:"/config/dev_container",draft:!1,tags:[],version:"current",frontMatter:{Title:"Dev Container"},sidebar:"tutorialSidebar",previous:{title:"The .raftt File",permalink:"/config/rafttfile"},next:{title:"Warmup Script",permalink:"/config/warmup"}},d={},f=[{value:"Defining the Dev Container",id:"defining-the-dev-container",level:2},{value:"Default Dev Container",id:"default-dev-container",level:2},{value:"Running Raftt Commands",id:"running-raftt-commands",level:2},{value:"Dependencies",id:"dependencies",level:2}],s={toc:f};function u(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"dev-container"},"Dev Container"),(0,i.kt)("p",null,'In addition to the containers that are a part of you "original" environment, another "special" container is created when an environment is spawned - the dev container (named ',(0,i.kt)("inlineCode",{parentName:"p"},"dev")," by default).  "),(0,i.kt)("p",null,"The purpose of this container is to mimic the developer's computer's role when developing locally.",(0,i.kt)("br",{parentName:"p"}),"\n","You can run scripts, build your code, run tests, and do anything you're used to doing while developing as if it were your computer."),(0,i.kt)("p",null,"The repository's folder is copied (except for what's explicitly in .gitignore) to the dev container when spawning an environment, and a two-way sync makes sure these directories stay synchronized."),(0,i.kt)("p",null,"Two important things happen in the dev container during environment spawning -"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"The execution of the ",(0,i.kt)("a",{parentName:"li",href:"./warmup"},"warmup script"),"."),(0,i.kt)("li",{parentName:"ol"},"The execution of the ",(0,i.kt)("a",{parentName:"li",href:"./db_seeding#custom-script"},"custom database seeding scripts"),".")),(0,i.kt)("admonition",{title:"Remember",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Include all the dependencies for these scripts by editing the dev container's Dockerfile.")),(0,i.kt)("h2",{id:"defining-the-dev-container"},"Defining the Dev Container"),(0,i.kt)("p",null,"The dev container is defined using the ",(0,i.kt)("a",{parentName:"p",href:"../config/rafttfile#defining-the-dev-container"},(0,i.kt)("inlineCode",{parentName:"a"},"deploy_dev_container()"))," function in the ",(0,i.kt)("a",{parentName:"p",href:"../config/rafttfile"},(0,i.kt)("inlineCode",{parentName:"a"},".raftt"))," env definition file."),(0,i.kt)("h2",{id:"default-dev-container"},"Default Dev Container"),(0,i.kt)("p",null,"The default dev container, generated when running ",(0,i.kt)("a",{parentName:"p",href:"/cli_reference#raftt-setup"},(0,i.kt)("inlineCode",{parentName:"a"},"raftt setup")),", includes many useful tools for development and environment management. The docker image and the description of its content can be found ",(0,i.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/raftt/dev"},"here"),".  "),(0,i.kt)("h2",{id:"running-raftt-commands"},"Running Raftt Commands"),(0,i.kt)("p",null,"We added a reduced copy of Raftt's CLI into the dev container.",(0,i.kt)("br",{parentName:"p"}),"\n","This allows users to run some of Raftt's commands after SSHing to the dev container using ",(0,i.kt)("a",{parentName:"p",href:"../cli_reference#raftt-sh"},(0,i.kt)("inlineCode",{parentName:"a"},"raftt sh dev"))," command.",(0,i.kt)("br",{parentName:"p"}),"\n","The allowed commands affect the containers and not the images or the environment itself.\nThe following commands are available -"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"../cli_reference#raftt-status"},(0,i.kt)("inlineCode",{parentName:"a"},"status"))," - Show statuses of workloads."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"../cli_reference#raftt-cp"},(0,i.kt)("inlineCode",{parentName:"a"},"cp"))," - Copy files to and from a workload."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"../cli_reference#raftt-help"},(0,i.kt)("inlineCode",{parentName:"a"},"help"))," - Help with any command."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"../cli_reference#raftt-logs"},(0,i.kt)("inlineCode",{parentName:"a"},"logs"))," - Get the logs of a workload."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"../cli_reference#raftt-restart"},(0,i.kt)("inlineCode",{parentName:"a"},"restart"))," - Restart one or more workloads."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"../cli_reference#raftt-sh"},(0,i.kt)("inlineCode",{parentName:"a"},"sh"))," - Connect or run a command on a workload."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"../cli_reference#raftt-stop"},(0,i.kt)("inlineCode",{parentName:"a"},"stop"))," - Stop one or more workloads."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"../cli_reference#raftt-version"},(0,i.kt)("inlineCode",{parentName:"a"},"version"))," - Show the Raftt version information.")),(0,i.kt)("h2",{id:"dependencies"},"Dependencies"),(0,i.kt)("p",null,"Because Raftt depends on the dev container for running various scripts, the dev container may not depend on other workloads."))}u.isMDXComponent=!0}}]);