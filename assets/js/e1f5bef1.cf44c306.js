"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[604],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5256:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],l={title:"How Raftt Works"},s="How Raftt Works",c={unversionedId:"intro/how_raftt_works",id:"intro/how_raftt_works",title:"How Raftt Works",description:"Insert a diagram here, similar to this.png?alt=media&token=a9113cb6-4724-43b6-bfc8-8be882960a2d)",source:"@site/docs/intro/how_raftt_works.md",sourceDirName:"intro",slug:"/intro/how_raftt_works",permalink:"/docs/intro/how_raftt_works",tags:[],version:"current",frontMatter:{title:"How Raftt Works"},sidebar:"tutorialSidebar",previous:{title:"Welcome to Raftt",permalink:"/docs/intro/raftt"},next:{title:"Getting Started",permalink:"/docs/basics"}},u=[{value:"Main modules",id:"main-modules",children:[{value:"Client Side Daemon",id:"client-side-daemon",children:[],level:3},{value:"Remote Environments Manager",id:"remote-environments-manager",children:[],level:3},{value:"Admiral",id:"admiral",children:[],level:3}],level:2},{value:"Use Cases (AS - find a better name. Example Flows?)",id:"use-cases-as---find-a-better-name-example-flows",children:[{value:"Spawning an Environment",id:"spawning-an-environment",children:[],level:3},{value:"Switching Between Branches",id:"switching-between-branches",children:[],level:3},{value:"Exposing an Environment (AS - maybe change it to something collaboration related)",id:"exposing-an-environment-as---maybe-change-it-to-something-collaboration-related",children:[],level:3}],level:2}],p={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"how-raftt-works"},"How Raftt Works"),(0,i.kt)("p",null,"Insert a diagram here, similar to ",(0,i.kt)("a",{parentName:"p",href:"https://docs.velocity.tech/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-M_L7DzkSRGbZ1imbELK%2Fuploads%2FFh2JjG4hQfYIIC2Un5bK%2FVelocity%20-%20customer%20setup-Overview%20(1).png?alt=media&token=a9113cb6-4724-43b6-bfc8-8be882960a2d"},"this")),(0,i.kt)("h2",{id:"main-modules"},"Main modules"),(0,i.kt)("p",null,"Raftt ha"),(0,i.kt)("h3",{id:"client-side-daemon"},"Client Side Daemon"),(0,i.kt)("p",null,"Explain about the CLI and the Daemon"),(0,i.kt)("h3",{id:"remote-environments-manager"},"Remote Environments Manager"),(0,i.kt)("h3",{id:"admiral"},"Admiral"),(0,i.kt)("p",null,"Explain mostly about Admiral (without calling it Admiral), but also about Sandcastle, Lifeguard, and anything else"),(0,i.kt)("h2",{id:"use-cases-as---find-a-better-name-example-flows"},"Use Cases (AS - find a better name. Example Flows?)"),(0,i.kt)("h3",{id:"spawning-an-environment"},"Spawning an Environment"),(0,i.kt)("p",null,"Explain the user side and then explain what actually happens"),(0,i.kt)("h3",{id:"switching-between-branches"},"Switching Between Branches"),(0,i.kt)("p",null,"Explain the user side and then explain what actually happens (switching to a different branch and back)"),(0,i.kt)("h3",{id:"exposing-an-environment-as---maybe-change-it-to-something-collaboration-related"},"Exposing an Environment (AS - maybe change it to something collaboration related)"),(0,i.kt)("p",null,"Explain the user side and then explain what actually happens"))}d.isMDXComponent=!0}}]);