"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[548],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return f}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=r.createContext({}),s=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(u.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(t),f=o,m=p["".concat(u,".").concat(f)]||p[f]||d[f]||a;return t?r.createElement(m,i(i({ref:n},c),{},{components:t})):r.createElement(m,i({ref:n},c))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=p;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},5162:function(e,n,t){t.d(n,{Z:function(){return i}});var r=t(7294),o=t(6010),a="tabItem_Ymn6";function i(e){var n=e.children,t=e.hidden,i=e.className;return r.createElement("div",{role:"tabpanel",className:(0,o.Z)(a,i),hidden:t},n)}},5488:function(e,n,t){t.d(n,{Z:function(){return f}});var r=t(7462),o=t(7294),a=t(6010),i=t(2389),l=t(7392),u=t(7094),s=t(2466),c="tabList__CuJ",d="tabItem_LNqP";function p(e){var n,t,i=e.lazy,p=e.block,f=e.defaultValue,m=e.values,g=e.groupId,b=e.className,h=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=m?m:h.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),k=(0,l.l)(v,(function(e,n){return e.value===n.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===f?f:null!=(n=null!=f?f:null==(t=h.find((function(e){return e.props.default})))?void 0:t.props.value)?n:h[0].props.value;if(null!==y&&!v.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,u.U)(),C=w.tabGroupChoices,N=w.setTabGroupChoices,E=(0,o.useState)(y),O=E[0],x=E[1],j=[],T=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=g){var S=C[g];null!=S&&S!==O&&v.some((function(e){return e.value===S}))&&x(S)}var D=function(e){var n=e.currentTarget,t=j.indexOf(n),r=v[t].value;r!==O&&(T(n),x(r),null!=g&&N(g,String(r)))},V=function(e){var n,t=null;switch(e.key){case"Enter":D(e);break;case"ArrowRight":var r,o=j.indexOf(e.currentTarget)+1;t=null!=(r=j[o])?r:j[0];break;case"ArrowLeft":var a,i=j.indexOf(e.currentTarget)-1;t=null!=(a=j[i])?a:j[j.length-1]}null==(n=t)||n.focus()};return o.createElement("div",{className:(0,a.Z)("tabs-container",c)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":p},b)},v.map((function(e){var n=e.value,t=e.label,i=e.attributes;return o.createElement("li",(0,r.Z)({role:"tab",tabIndex:O===n?0:-1,"aria-selected":O===n,key:n,ref:function(e){return j.push(e)},onKeyDown:V,onClick:D},i,{className:(0,a.Z)("tabs__item",d,null==i?void 0:i.className,{"tabs__item--active":O===n})}),null!=t?t:n)}))),i?(0,o.cloneElement)(h.filter((function(e){return e.props.value===O}))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},h.map((function(e,n){return(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==O})}))))}function f(e){var n=(0,i.Z)();return o.createElement(p,(0,r.Z)({key:String(n)},e))}},8877:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return d}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),i=(t(5488),t(5162),["components"]),l={title:"VS Code"},u="Debug Remote Environments Using Visual Studio Code",s={unversionedId:"debugging/VSCode",id:"debugging/VSCode",title:"VS Code",description:"Microsoft's VS Code is the most popular IDE amongst software developers.",source:"@site/docs/debugging/VSCode.md",sourceDirName:"debugging",slug:"/debugging/VSCode",permalink:"/docs/debugging/VSCode",draft:!1,tags:[],version:"current",frontMatter:{title:"VS Code"},sidebar:"tutorialSidebar",previous:{title:"Debugging",permalink:"/docs/debugging"},next:{title:"JetBrains IDEs",permalink:"/docs/debugging/JetBrains"}},c={},d=[{value:"Installing the extension",id:"installing-the-extension",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Debugging",id:"debugging",level:2}],p={toc:d};function f(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"debug-remote-environments-using-visual-studio-code"},"Debug Remote Environments Using Visual Studio Code"),(0,a.kt)("p",null,"Microsoft's VS Code is ",(0,a.kt)("a",{parentName:"p",href:"https://insights.stackoverflow.com/survey/2021#section-most-popular-technologies-integrated-development-environment"},"the most popular IDE")," amongst software developers.",(0,a.kt)("br",{parentName:"p"}),"\n","Using Raftt allows devs to continue working and debugging in their favorite IDE with their own setup and configuration while enjoying all the benefits of an environment running remotely."),(0,a.kt)("admonition",{title:"Note",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Raftt currently supports debugging Python, Go and Node.js code. Join our ",(0,a.kt)("a",{parentName:"p",href:"https://join.slack.com/t/rafttcommunity/shared_invite/zt-196nlb5ra-rYPWEqQF~ETdgx9aqWANnw"},"Slack community")," or ",(0,a.kt)("a",{parentName:"p",href:"https://raftt.io/contact-us"},"contact us")," to enquire about upcoming support for additional languages.")),(0,a.kt)("h2",{id:"installing-the-extension"},"Installing the extension"),(0,a.kt)("p",null,"To debug with Raftt, you must first install the Raftt extension. This could be done from ",(0,a.kt)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=Raftt.vscode-raftt"},"VS Code Marketplace")," or from the IDE extension tab. Guidance on how to install and manage VS Code extensions can be found ",(0,a.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/docs/editor/extension-marketplace"},"here"),"."),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"To configure VS Code to debug with Raftt you need to add the ",(0,a.kt)("inlineCode",{parentName:"p"},"raftt")," attribute to an existing launch configuration, i.e., the ",(0,a.kt)("inlineCode",{parentName:"p"},"launch.json")," file. The value of the ",(0,a.kt)("inlineCode",{parentName:"p"},"raftt")," key is a dict with a single key - ",(0,a.kt)("inlineCode",{parentName:"p"},"workload"),", whose value is the workload you want to debug (see example below).",(0,a.kt)("br",{parentName:"p"}),"\n","Create multiple launch configuration in the ",(0,a.kt)("inlineCode",{parentName:"p"},"launch.json")," to debug different workloads with Raftt."),(0,a.kt)("p",null,"For example, here's a ",(0,a.kt)("inlineCode",{parentName:"p"},"launch.json")," that contains the configuration for debugging a workload called ",(0,a.kt)("inlineCode",{parentName:"p"},"web"),", written in Python and a workload called ",(0,a.kt)("inlineCode",{parentName:"p"},"live-backend")," written in Go."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "version": "0.2.0",\n    "configurations": [\n        {\n            "name": "web",\n            "type": "python",\n            "request": "launch",\n            "program": "${workspaceFolder}/app.py",\n            "console": "integratedTerminal",\n            "raftt": {\n                "workload": "web"\n            }\n        },\n        {\n            "name": "live-backend",\n            "type": "go",\n            "request": "launch",\n            "mode": "debug",\n            "program": "${workspaceFolder}/live_backend/main.go",\n            "raftt": {\n                "workload": "live-backend"\n            }\n        }\n    ]\n}\n')),(0,a.kt)("p",null,"If you don't have an existing launch configuration, ",(0,a.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/docs/editor/debugging#_launch-configurations"},"here")," you'll find help on how to create one.  "),(0,a.kt)("h2",{id:"debugging"},"Debugging"),(0,a.kt)("p",null,"Once the plugin is installed and configured, you can debug the workload just like you would if it ran locally, e.g., add breakpoints, view symbol, and more."))}f.isMDXComponent=!0}}]);