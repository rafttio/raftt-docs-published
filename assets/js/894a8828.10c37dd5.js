"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[57],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=u(r),d=o,m=f["".concat(c,".").concat(d)]||f[d]||s[d]||a;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},4048:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return p},default:function(){return f}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],l={},c=void 0,u={unversionedId:"cli/raftt_reload",id:"cli/raftt_reload",title:"raftt_reload",description:"raftt reload",source:"@site/docs/cli/raftt_reload.md",sourceDirName:"cli",slug:"/cli/raftt_reload",permalink:"/docs/cli/raftt_reload",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/cli/raftt_reload.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"raftt_port_unmap",permalink:"/docs/cli/raftt_port_unmap"},next:{title:"raftt_restart",permalink:"/docs/cli/raftt_restart"}},p=[{value:"raftt reload",id:"raftt-reload",children:[{value:"Synopsis",id:"synopsis",children:[],level:3},{value:"Options",id:"options",children:[],level:3},{value:"SEE ALSO",id:"see-also",children:[{value:"Auto generated by spf13/cobra on 23-Jan-2022",id:"auto-generated-by-spf13cobra-on-23-jan-2022",children:[],level:6}],level:3}],level:2}],s={toc:p};function f(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"raftt-reload"},"raftt reload"),(0,a.kt)("p",null,"Redeploy one or more services"),(0,a.kt)("h3",{id:"synopsis"},"Synopsis"),(0,a.kt)("p",null,"Redeploy one or more services, if no services specified the entire environment is reloaded."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"raftt reload [SERVICES...] [flags]\n")),(0,a.kt)("h3",{id:"options"},"Options"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"  -h, --help     help for reload\n  -r, --reseed   re-seed DBs\n")),(0,a.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/cli/raftt"},"raftt"),"\t - ")),(0,a.kt)("h6",{id:"auto-generated-by-spf13cobra-on-23-jan-2022"},"Auto generated by spf13/cobra on 23-Jan-2022"))}f.isMDXComponent=!0}}]);