"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[362],{3905:function(e,t,n){n.d(t,{Zo:function(){return f},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},f=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,f=s(e,["components","mdxType","originalType","parentName"]),u=l(n),d=o,m=u["".concat(c,".").concat(d)]||u[d]||p[d]||a;return n?r.createElement(m,i(i({ref:t},f),{},{components:n})):r.createElement(m,i({ref:t},f))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4771:function(e,t,n){n.r(t),n.d(t,{assets:function(){return f},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],s={title:"Raftt's Containers"},c="Raftt's Containers",l={unversionedId:"concepts/containers",id:"concepts/containers",title:"Raftt's Containers",description:"Raftt runs your containers but slightly modifies the container behavior to improve the development experience. The container's main process is Raftt's lifeguard process - instead of the process you defined in the docker-compose file, K8s manifest, Helm chart or the image itself.",source:"@site/docs/concepts/containers.md",sourceDirName:"concepts",slug:"/concepts/containers",permalink:"/concepts/containers",draft:!1,tags:[],version:"current",frontMatter:{title:"Raftt's Containers"},sidebar:"tutorialSidebar",previous:{title:"Git Workflow Integration",permalink:"/concepts/git_workflows"},next:{title:"File Syncing",permalink:"/concepts/file_syncing"}},f={},p=[{value:"The Raftt Process Lifeguard",id:"the-raftt-process-lifeguard",level:2}],u={toc:p};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"raftts-containers"},"Raftt's Containers"),(0,a.kt)("p",null,"Raftt runs your containers but slightly modifies the container behavior to improve the development experience. The container's main process is Raftt's lifeguard process - instead of the process you defined in the docker-compose file, K8s manifest, Helm chart or the image itself.  "),(0,a.kt)("h2",{id:"the-raftt-process-lifeguard"},"The Raftt Process Lifeguard"),(0,a.kt)("p",null,"Lifeguard runs your main process when it starts but stays alive even if the process dies. This behavior allows for easier debugging capabilities, as it prevents the container from terminating and losing its state when it crashes. Keeping the container up also allows better development velocity because you can quickly restart the main process."),(0,a.kt)("p",null,"Note that ",(0,a.kt)("a",{parentName:"p",href:"/cli_reference/#raftt-stop"},(0,a.kt)("inlineCode",{parentName:"a"},"raftt stop"))," and ",(0,a.kt)("a",{parentName:"p",href:"/cli_reference/#raftt-restart"},(0,a.kt)("inlineCode",{parentName:"a"},"raftt restart"))," only affect the user's main process, not the container itself, and ",(0,a.kt)("a",{parentName:"p",href:"/cli_reference/#raftt-rebuild"},(0,a.kt)("inlineCode",{parentName:"a"},"raftt rebuild"))," rebuilds and reloads the container itself."),(0,a.kt)("p",null,"Additionally, lifeguard allows you to connect directly to any of the containers in your environment using ",(0,a.kt)("a",{parentName:"p",href:"/cli_reference/#raftt-sh"},(0,a.kt)("inlineCode",{parentName:"a"},"raftt sh")),"."))}d.isMDXComponent=!0}}]);