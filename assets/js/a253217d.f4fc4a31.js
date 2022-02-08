"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[952],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,p=d["".concat(s,".").concat(m)]||d[m]||h[m]||a;return n?r.createElement(p,i(i({ref:t},u),{},{components:n})):r.createElement(p,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8674:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],l={title:"Welcome to Raftt"},s="Welcome to Raftt",c={unversionedId:"intro/raftt",id:"intro/raftt",title:"Welcome to Raftt",description:"What is Raftt?",source:"@site/docs/intro/raftt.md",sourceDirName:"intro",slug:"/intro/raftt",permalink:"/docs/intro/raftt",tags:[],version:"current",frontMatter:{title:"Welcome to Raftt"},sidebar:"tutorialSidebar",previous:{title:"Intro",permalink:"/docs/intro"},next:{title:"How Raftt Works?",permalink:"/docs/intro/how_raftt_works"}},u=[{value:"What is Raftt?",id:"what-is-raftt",children:[],level:2},{value:"Who Should Use Raftt?",id:"who-should-use-raftt",children:[],level:2},{value:"What Do You Do With Raftt?",id:"what-do-you-do-with-raftt",children:[],level:2},{value:"The Challenges of the Current Solutions",id:"the-challenges-of-the-current-solutions",children:[{value:"Running Local Environments",id:"running-local-environments",children:[],level:3},{value:"Developing on a Remote Machine",id:"developing-on-a-remote-machine",children:[],level:3}],level:2}],h={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"welcome-to-raftt"},"Welcome to Raftt"),(0,a.kt)("h2",{id:"what-is-raftt"},"What is Raftt?"),(0,a.kt)("p",null,"Raftt creates modern flexible environments synced with existing tools, features, and workflows to help developers explore and develop freely. Our cloud-based platform liberates developers from the limitations of their hardware and local environments, allowing them to spawn an unlimited number of environments, collaborate and share, without sacrificing stability and performance."),(0,a.kt)("p",null,"You can switch, branch, and share environments without changing tools or altering existing workflows. Concentrate on coding with our environment-friendly solution. Built by world-class experts and professionals, Raftt helps developers spend more time on innovation."),(0,a.kt)("h2",{id:"who-should-use-raftt"},"Who Should Use Raftt?"),(0,a.kt)("p",null,"We're here to help developers who are tired of drift, decay, and overhead from their local development environment and spending too much time stabilizing and maintaining it.",(0,a.kt)("br",{parentName:"p"}),"\n","Unlike other remote or browser-based dev environment solutions, Raftt focuses purely on the developing process. With Raftt, debugging is being made quickly, environments are being shared seamlessly and on the spot via URL with various teammates you choose.",(0,a.kt)("br",{parentName:"p"}),"\n","At the moment, our beta version is only available to Docker Compose users with a mono-repo, but our developers are dedicating their time to changing that soon."),(0,a.kt)("h2",{id:"what-do-you-do-with-raftt"},"What Do You Do With Raftt?"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Run multiple environments without overloading your machine."),(0,a.kt)("li",{parentName:"ol"},"Write code and deploy it remotely, as if you work 100% locally."),(0,a.kt)("li",{parentName:"ol"},"Collaborate with your team and external shareholders by sharing access to your environments."),(0,a.kt)("li",{parentName:"ol"},"Easily create a consistent dev environment. It makes sure different devs have compatible environments and reduces integration costs."),(0,a.kt)("li",{parentName:"ol"},"Debug your microservices without losing the state every time the main process dies.")),(0,a.kt)("h2",{id:"the-challenges-of-the-current-solutions"},"The Challenges of the Current Solutions"),(0,a.kt)("h3",{id:"running-local-environments"},"Running Local Environments"),(0,a.kt)("p",null,"Many developers work on their micro-services environments locally, using Docker Compose, Minikube, or similar tools.",(0,a.kt)("br",{parentName:"p"}),"\n","This approach can be helpful, as it gives the user lots of control over the environment and makes everything easier to debug.",(0,a.kt)("br",{parentName:"p"}),"\n","Having said that, this approach has several drawbacks -"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Limited resources - good dev computers might have lots of CPU and RAM, but running a complex environment composed of many containers can be a heavy task, even for high-end computers."),(0,a.kt)("li",{parentName:"ol"},'Environment drift - devs tend to adjust their environment and do whatever it takes to make things work. This creates the "works for me" phenomenon - having different dev environments causes different behavior between different devs.'),(0,a.kt)("li",{parentName:"ol"},"Hard to work on multiple environments - context or branch switching between environments is expensive when done locally - the containers need to be rebuilt and restarted, which can take a long time.",(0,a.kt)("br",{parentName:"li"}),"Using persistent volumes aggravates the problems since it's even harder to switch between states of the storage without additional scripting.")),(0,a.kt)("h3",{id:"developing-on-a-remote-machine"},"Developing on a Remote Machine"),(0,a.kt)("p",null,"A newer approach that tries to tackle the challenges of running your environment locally is using a cloud machine as a dev machine. This approach does deal with the limited resources drawback, but the rest still remain problematic."))}d.isMDXComponent=!0}}]);