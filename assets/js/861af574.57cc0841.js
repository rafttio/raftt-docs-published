"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[761],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=u(n),d=o,f=m["".concat(p,".").concat(d)]||m[d]||s[d]||a;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6326:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return s}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],c={title:"Warmup Script"},p="Warmup Script (Deprecated)",u={unversionedId:"config/warmup",id:"config/warmup",title:"Warmup Script",description:"The warmup script is optional, and deprecated. It is recommended to use the prebuild scripts feature instead. There are a couple other ways to accomplish initialization before runtime (contact us for more info)",source:"@site/docs/config/warmup.md",sourceDirName:"config",slug:"/config/warmup",permalink:"/config/warmup",draft:!1,tags:[],version:"current",frontMatter:{title:"Warmup Script"},sidebar:"tutorialSidebar",previous:{title:"Dev Container",permalink:"/config/dev_container"},next:{title:"Database Seeding",permalink:"/config/db_seeding"}},l={},s=[{value:"Example 1 - Download Build Dependencies",id:"example-1---download-build-dependencies",level:2},{value:"Example 2 - Compiling Protobuf",id:"example-2---compiling-protobuf",level:2}],m={toc:s};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"warmup-script-deprecated"},"Warmup Script (Deprecated)"),(0,a.kt)("admonition",{title:"Note",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"The warmup script is optional, and deprecated. It is recommended to use the ",(0,a.kt)("a",{parentName:"p",href:"/config/rafttfile#image-building"},"prebuild scripts")," feature instead. There are a couple other ways to accomplish initialization before runtime (",(0,a.kt)("a",{parentName:"p",href:"https://raftt.io/contact"},"contact us")," for more info)\nIn most cases, environments can be spawned successfully without it.")),(0,a.kt)("p",null,"The warmup script is executed from the context of the ",(0,a.kt)("a",{parentName:"p",href:"./dev_container"},"dev container")," before building and deploying the rest of the environment. This script can help you prepare what is necessary for the containers build to be successful or for preparing the dev container for convenient use. The warmup script is run when an environment is created, but does not run when it wakes up from hibernation."),(0,a.kt)("admonition",{title:"Remember",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Add all warmup script dependencies to the ",(0,a.kt)("a",{parentName:"p",href:"./dev_container"},"dev container")," using its Dockerfile.")),(0,a.kt)("p",null,"Here are a few examples of what can be done in the warmup script:"),(0,a.kt)("h2",{id:"example-1---download-build-dependencies"},"Example 1 - Download Build Dependencies"),(0,a.kt)("p",null,"Let's assume your services are written in Go, and you compile them on your dev container. Having all the go modules downloaded to the dev container may be convenient, so compilation will be speedy. The following warmup script is an example of how to accomplish that:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cd /code\nnohup go mod download > /dev/null & # Perform async so the warmup script does not block the build and deploy process. \n")),(0,a.kt)("h2",{id:"example-2---compiling-protobuf"},"Example 2 - Compiling Protobuf"),(0,a.kt)("p",null,"Your services may communicate between them using Protobuf, GraphQL, or any other schema language requiring generation. You can automatically generate the relevant files using something like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"find . -name '*.proto' -exec protoc --go_out=paths=source_relative:./ '{}' ';'\n")))}d.isMDXComponent=!0}}]);