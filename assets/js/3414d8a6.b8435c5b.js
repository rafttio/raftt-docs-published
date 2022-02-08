"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[748],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return f}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),s=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(t),f=a,m=d["".concat(u,".").concat(f)]||d[f]||p[f]||i;return t?r.createElement(m,o(o({ref:n},c),{},{components:t})):r.createElement(m,o({ref:n},c))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8215:function(e,n,t){var r=t(7294);n.Z=function(e){var n=e.children,t=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:t,className:a},n)}},9877:function(e,n,t){t.d(n,{Z:function(){return c}});var r=t(7462),a=t(7294),i=t(2389),o=t(9548),l=t(6010),u="tabItem_LplD";function s(e){var n,t,i,s=e.lazy,c=e.block,p=e.defaultValue,d=e.values,f=e.groupId,m=e.className,g=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=d?d:g.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),b=(0,o.lx)(v,(function(e,n){return e.value===n.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var h=null===p?p:null!=(n=null!=p?p:null==(t=g.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(i=g[0])?void 0:i.props.value;if(null!==h&&!v.some((function(e){return e.value===h})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+h+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,o.UB)(),k=y.tabGroupChoices,w=y.setTabGroupChoices,N=(0,a.useState)(h),E=N[0],O=N[1],T=[],D=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var I=k[f];null!=I&&I!==E&&v.some((function(e){return e.value===I}))&&O(I)}var j=function(e){var n=e.currentTarget,t=T.indexOf(n),r=v[t].value;r!==E&&(D(n),O(r),null!=f&&w(f,r))},x=function(e){var n,t=null;switch(e.key){case"ArrowRight":var r=T.indexOf(e.currentTarget)+1;t=T[r]||T[0];break;case"ArrowLeft":var a=T.indexOf(e.currentTarget)-1;t=T[a]||T[T.length-1]}null==(n=t)||n.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":c},m)},v.map((function(e){var n=e.value,t=e.label,i=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:E===n?0:-1,"aria-selected":E===n,key:n,ref:function(e){return T.push(e)},onKeyDown:x,onFocus:j,onClick:j},i,{className:(0,l.Z)("tabs__item",u,null==i?void 0:i.className,{"tabs__item--active":E===n})}),null!=t?t:n)}))),s?(0,a.cloneElement)(g.filter((function(e){return e.props.value===E}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},g.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==E})}))))}function c(e){var n=(0,i.Z)();return a.createElement(s,(0,r.Z)({key:String(n)},e))}},3013:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return d},default:function(){return m}});var r=t(7462),a=t(3366),i=(t(7294),t(3905)),o=t(9877),l=t(8215),u=["components"],s={title:"JetBrains"},c="Debug Remote Environments Using Jetbrains IDEs",p={unversionedId:"debugging/JetBrains",id:"debugging/JetBrains",title:"JetBrains",description:"JetBrains IDEs are some of the most popular IDEs amongst software developers.",source:"@site/docs/debugging/JetBrains.md",sourceDirName:"debugging",slug:"/debugging/JetBrains",permalink:"/docs/debugging/JetBrains",tags:[],version:"current",frontMatter:{title:"JetBrains"},sidebar:"tutorialSidebar",previous:{title:"VS Code",permalink:"/docs/debugging/VSCode"},next:{title:"Configuration",permalink:"/docs/config"}},d=[{value:"Installing the plugin",id:"installing-the-plugin",children:[],level:3},{value:"Configuration",id:"configuration",children:[],level:3},{value:"Debugging",id:"debugging",children:[],level:3}],f={toc:d};function m(e){var n=e.components,s=(0,a.Z)(e,u);return(0,i.kt)("wrapper",(0,r.Z)({},f,s,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"debug-remote-environments-using-jetbrains-ides"},"Debug Remote Environments Using Jetbrains IDEs"),(0,i.kt)("p",null,"JetBrains IDEs are ",(0,i.kt)("a",{parentName:"p",href:"https://insights.stackoverflow.com/survey/2021#section-most-popular-technologies-integrated-development-environment"},"some of the most popular IDEs")," amongst software developers.",(0,i.kt)("br",{parentName:"p"}),"\n","Using Raftt allows devs to continue working and debugging in their favorite IDE with their own setup and configuration while enjoying all the benefits of an environment running remotely."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Raftt currently supports debugging Python and Go code. ",(0,i.kt)("a",{parentName:"p",href:"raftt.io/contact-us"},"Contact us")," to enquire about upcoming support for additional languages."))),(0,i.kt)("h3",{id:"installing-the-plugin"},"Installing the plugin"),(0,i.kt)("p",null,"Install the plugin as described ",(0,i.kt)("a",{parentName:"p",href:"https://www.jetbrains.com/help/idea/managing-plugins.html#install_plugin_from_disk"},"here"),". These instructions are from the IntelliJ IDEA docs, bit they are the same for other JetBrains IDEs.",(0,i.kt)("br",{parentName:"p"}),"\n","The plugin's JAR file can be found in the following path -"),(0,i.kt)(o.Z,{className:"unique-tabs",groupId:"operating-systems",mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"macOS",label:"macOS",default:!0,mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"~/.raftt/plugins/RafttLauncher/RafttLauncher-<version>.jar\n"))),(0,i.kt)(l.Z,{value:"linux",label:"Linux",default:!0,mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"~/.raftt/plugins/RafttLauncher/RafttLauncher-<version>.jar\n"))),(0,i.kt)(l.Z,{value:"windows",label:"Windows",default:!0,mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"%USERPROFILE%\\.raftt\\plugins\\RafttLauncher\\RafttLauncher-<version>.jar\n")))),(0,i.kt)("h3",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,"The only required configuration is adding an environment variable ",(0,i.kt)("inlineCode",{parentName:"p"},"RAFTT_SERVICE")," stating which of the services is the one you want to debug.\nThe easiest way to do that is stating it under ",(0,i.kt)("inlineCode",{parentName:"p"},"Environment")," in the debug configuration you plan on using."),(0,i.kt)("p",null,"For example, if you wish to debug the a service called ",(0,i.kt)("inlineCode",{parentName:"p"},"web")," when using PyCharm, this should be in your debug configuration -"),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{src:t(6794).Z,alt:"Debug configuration"})),(0,i.kt)("h3",{id:"debugging"},"Debugging"),(0,i.kt)("p",null,"Once the plugin is installed and configured, you can debug the service just like you would if it ran locally - add breakpoints, view symbols, etc."))}m.isMDXComponent=!0},6794:function(e,n,t){n.Z=t.p+"assets/images/jetbrains_python-3080db80544ffe83caba16f200425874.png"}}]);