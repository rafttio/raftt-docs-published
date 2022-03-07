"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[949],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),f=l(r),m=o,d=f["".concat(c,".").concat(m)]||f[m]||u[m]||a;return r?n.createElement(d,i(i({ref:t},s),{},{components:r})):n.createElement(d,i({ref:t},s))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},7873:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return p},metadata:function(){return l},toc:function(){return u}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],p={title:"Port Mapping"},c="Port Mapping",l={unversionedId:"concepts/port_map",id:"concepts/port_map",title:"Port Mapping",description:"Raftt lets users map ports in the containers to local ports to make the remote environment feel like a local one.",source:"@site/docs/concepts/port_map.md",sourceDirName:"concepts",slug:"/concepts/port_map",permalink:"/docs/concepts/port_map",tags:[],version:"current",frontMatter:{title:"Port Mapping"},sidebar:"tutorialSidebar",previous:{title:"File Syncing",permalink:"/docs/concepts/file_syncing"},next:{title:"Debugging",permalink:"/docs/debugging"}},s={},u=[{value:"Reverse Tunnels",id:"reverse-tunnels",level:2}],f={toc:u};function m(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"port-mapping"},"Port Mapping"),(0,a.kt)("p",null,"Raftt lets users map ports in the containers to local ports to make the remote environment feel like a local one.\nThis can be done either by definitions in the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.docker.com/compose/compose-file/compose-file-v3/#ports"},"Docker Compose")," file or using the ",(0,a.kt)("a",{parentName:"p",href:"/docs/cli_reference#raftt-port-map"},(0,a.kt)("inlineCode",{parentName:"a"},"raftt port map"))," command.\nExample use cases for port mapping include:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Mapping the HTTP port of your web container to allow accessing the app from your browser using localhost."),(0,a.kt)("li",{parentName:"ol"},"Mapping the management port of your DB to allow using the DB's client from your local machine.")),(0,a.kt)("h2",{id:"reverse-tunnels"},"Reverse Tunnels"),(0,a.kt)("p",null,"Raftt also allows creating reverse port mappings, letting the remote environment access processes opened locally. This is a rare use case, but if you require it, use ",(0,a.kt)("a",{parentName:"p",href:"/docs/cli_reference#raftt-port-map"},(0,a.kt)("inlineCode",{parentName:"a"},"raftt port map -r")),"."))}m.isMDXComponent=!0}}]);