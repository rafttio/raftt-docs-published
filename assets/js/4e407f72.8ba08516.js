"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[362],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),d=o,m=u["".concat(s,".").concat(d)]||u[d]||f[d]||a;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4771:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return p},default:function(){return u}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],c={title:"Raftt's Containers"},s="Raftt's Containers",l={unversionedId:"concepts/containers",id:"concepts/containers",title:"Raftt's Containers",description:"Raftt runs your containers, but slightly modifies the container behavior to improve the development experience.",source:"@site/docs/concepts/containers.md",sourceDirName:"concepts",slug:"/concepts/containers",permalink:"/docs/concepts/containers",tags:[],version:"current",frontMatter:{title:"Raftt's Containers"},sidebar:"tutorialSidebar",previous:{title:"Git Workflow Integration",permalink:"/docs/concepts/git_workflows"},next:{title:"File Syncing",permalink:"/docs/concepts/file_syncing"}},p=[{value:"The Raftt Process Lifeguard",id:"the-raftt-process-lifeguard",children:[],level:2}],f={toc:p};function u(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"raftts-containers"},"Raftt's Containers"),(0,a.kt)("p",null,"Raftt runs your containers, but slightly modifies the container behavior to improve the development experience.",(0,a.kt)("br",{parentName:"p"}),"\n","The actual main process of the container is Raftt's process called lifeguard, instead of the process defined by you in the Docker Compose file.  "),(0,a.kt)("h2",{id:"the-raftt-process-lifeguard"},"The Raftt Process Lifeguard"),(0,a.kt)("p",null,"Lifeguard runs your main process when it starts, but doesn't die when the process dies. This behavior allows for easier debugging capabilities as it prevents the container from terminating and losing the state it had when crashing. Keeping the container up also allows better development velocity, because you don't need to spawn a container every time you restart the main process."),(0,a.kt)("p",null,"Note that ",(0,a.kt)("a",{parentName:"p",href:"/docs/cli_reference/#raftt-stop"},(0,a.kt)("inlineCode",{parentName:"a"},"raftt stop"))," and ",(0,a.kt)("a",{parentName:"p",href:"/docs/cli_reference/#raftt-restart"},(0,a.kt)("inlineCode",{parentName:"a"},"raftt restart"))," only affect the user's main process, not the container itself, and ",(0,a.kt)("a",{parentName:"p",href:"/docs/cli_reference/#raftt-rebuild"},(0,a.kt)("inlineCode",{parentName:"a"},"raftt rebuild"))," rebuilds and reloads the container itself."),(0,a.kt)("p",null,"Lifeguard also allows you to connect directly to any of the containers in your environment using ",(0,a.kt)("a",{parentName:"p",href:"/docs/cli_reference/#raftt-sh"},(0,a.kt)("inlineCode",{parentName:"a"},"raftt sh")),"."))}u.isMDXComponent=!0}}]);