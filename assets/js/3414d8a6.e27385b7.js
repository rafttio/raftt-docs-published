"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[748],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return f}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=s(t),f=a,g=p["".concat(l,".").concat(f)]||p[f]||d[f]||o;return t?r.createElement(g,i(i({ref:n},c),{},{components:t})):r.createElement(g,i({ref:n},c))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=p;var u={};for(var l in n)hasOwnProperty.call(n,l)&&(u[l]=n[l]);u.originalType=e,u.mdxType="string"==typeof e?e:a,i[1]=u;for(var s=2;s<o;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},5162:function(e,n,t){t.d(n,{Z:function(){return i}});var r=t(7294),a=t(6010),o="tabItem_Ymn6";function i(e){var n=e.children,t=e.hidden,i=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,i),hidden:t},n)}},4866:function(e,n,t){t.d(n,{Z:function(){return E}});var r=t(7462),a=t(7294),o=t(6010),i=t(6775),u=t(1980),l=t(7392),s=t(12);function c(e){return function(e){return a.Children.map(e,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}function d(e){var n=e.values,t=e.children;return(0,a.useMemo)((function(){var e=null!=n?n:c(t);return function(e){var n=(0,l.l)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function p(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function f(e){var n=e.queryString,t=void 0!==n&&n,r=e.groupId,o=(0,i.k6)(),l=function(e){var n=e.queryString,t=void 0!==n&&n,r=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:t,groupId:r});return[(0,u._X)(l),(0,a.useCallback)((function(e){if(l){var n=new URLSearchParams(o.location.search);n.set(l,e),o.replace(Object.assign({},o.location,{search:n.toString()}))}}),[l,o])]}function g(e){var n,t,r,o,i=e.defaultValue,u=e.queryString,l=void 0!==u&&u,c=e.groupId,g=d(e),m=(0,a.useState)((function(){return function(e){var n,t=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}var a=null!=(n=r.find((function(e){return e.default})))?n:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:i,tabValues:g})})),b=m[0],h=m[1],v=f({queryString:l,groupId:c}),y=v[0],k=v[1],w=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:c}.groupId),t=(0,s.Nk)(n),r=t[0],o=t[1],[r,(0,a.useCallback)((function(e){n&&o.set(e)}),[n,o])]),E=w[0],N=w[1],I=function(){var e=null!=y?y:E;return p({value:e,tabValues:g})?e:null}();return(0,a.useLayoutEffect)((function(){I&&h(I)}),[I]),{selectedValue:b,selectValue:(0,a.useCallback)((function(e){if(!p({value:e,tabValues:g}))throw new Error("Can't select invalid tab value="+e);h(e),k(e),N(e)}),[k,N,g]),tabValues:g}}var m=t(2466),b=t(2389),h="tabList__CuJ",v="tabItem_LNqP";function y(e){var n=e.className,t=e.block,i=e.selectedValue,u=e.selectValue,l=e.tabValues,s=[],c=(0,m.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var n=e.currentTarget,t=s.indexOf(n),r=l[t].value;r!==i&&(c(n),u(r))},p=function(e){var n,t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var r,a=s.indexOf(e.currentTarget)+1;t=null!=(r=s[a])?r:s[0];break;case"ArrowLeft":var o,i=s.indexOf(e.currentTarget)-1;t=null!=(o=s[i])?o:s[s.length-1]}null==(n=t)||n.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":t},n)},l.map((function(e){var n=e.value,t=e.label,u=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,key:n,ref:function(e){return s.push(e)},onKeyDown:p,onClick:d},u,{className:(0,o.Z)("tabs__item",v,null==u?void 0:u.className,{"tabs__item--active":i===n})}),null!=t?t:n)})))}function k(e){var n=e.lazy,t=e.children,r=e.selectedValue;if(t=Array.isArray(t)?t:[t],n){var o=t.find((function(e){return e.props.value===r}));return o?(0,a.cloneElement)(o,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},t.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r})})))}function w(e){var n=g(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",h)},a.createElement(y,(0,r.Z)({},e,n)),a.createElement(k,(0,r.Z)({},e,n)))}function E(e){var n=(0,b.Z)();return a.createElement(w,(0,r.Z)({key:String(n)},e))}},3013:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return f}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),i=t(4866),u=t(5162),l=["components"],s={title:"JetBrains IDEs"},c="Debug Remote Environments Using Jetbrains IDEs",d={unversionedId:"debugging/JetBrains",id:"debugging/JetBrains",title:"JetBrains IDEs",description:"JetBrains IDEs are some of the most popular IDEs amongst software developers.",source:"@site/docs/debugging/JetBrains.md",sourceDirName:"debugging",slug:"/debugging/JetBrains",permalink:"/docs/debugging/JetBrains",draft:!1,tags:[],version:"current",frontMatter:{title:"JetBrains IDEs"},sidebar:"tutorialSidebar",previous:{title:"VS Code",permalink:"/docs/debugging/VSCode"},next:{title:"cli_reference",permalink:"/docs/cli_reference"}},p={},f=[{value:"Installing the plugin",id:"installing-the-plugin",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Debugging",id:"debugging",level:2}],g={toc:f};function m(e){var n=e.components,t=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"debug-remote-environments-using-jetbrains-ides"},"Debug Remote Environments Using Jetbrains IDEs"),(0,o.kt)("p",null,"JetBrains IDEs are ",(0,o.kt)("a",{parentName:"p",href:"https://insights.stackoverflow.com/survey/2021#section-most-popular-technologies-integrated-development-environment"},"some of the most popular IDEs")," amongst software developers.",(0,o.kt)("br",{parentName:"p"}),"\n","Using Raftt allows devs to continue working and debugging on their favorite IDE with their customized setup and configuration while enjoying all the benefits of a remotely running environment."),(0,o.kt)("admonition",{title:"Note",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Raftt currently supports debugging Python, Go and Node.js code. Join our ",(0,o.kt)("a",{parentName:"p",href:"https://join.slack.com/t/rafttcommunity/shared_invite/zt-196nlb5ra-rYPWEqQF~ETdgx9aqWANnw"},"Slack community")," or ",(0,o.kt)("a",{parentName:"p",href:"https://raftt.io/contact-us"},"contact us")," to enquire about upcoming support for additional languages.")),(0,o.kt)("h2",{id:"installing-the-plugin"},"Installing the plugin"),(0,o.kt)("p",null,"Install the plugin directly from ",(0,o.kt)("a",{parentName:"p",href:"https://plugins.jetbrains.com/plugin/18931-raftt-launcher"},"JetBrains Marketplace"),".\nIt is compatible with all IntelliJ-based IDEs!"),(0,o.kt)("p",null,"Either search the marketplace for the ",(0,o.kt)("strong",{parentName:"p"},"Raftt")," plugin, or use this link:"),(0,o.kt)("p",{align:"center"},(0,o.kt)("iframe",{frameborder:"none",width:"245px",height:"48px",src:"https://plugins.jetbrains.com/embeddable/install/18931"})),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"Raftt run/debug is configured by adding the ",(0,o.kt)("inlineCode",{parentName:"p"},"RAFTT_WORKLOAD")," environment variable to an existing, non-Raftt, run/debug configuration. The value of this environment variable specifies the workload you want to run/debug.",(0,o.kt)("br",{parentName:"p"}),"\n","This exact method of configuring it slightly differs between different languages."),(0,o.kt)(i.Z,{className:"unique-tabs",groupId:"programming-languages",mdxType:"Tabs"},(0,o.kt)(u.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,o.kt)("p",null,"The environment variable is added under the ",(0,o.kt)("inlineCode",{parentName:"p"},"Environment variables")," field of your Python run/debug configuration.\nFor example, if you wish to debug a workload called ",(0,o.kt)("inlineCode",{parentName:"p"},"web")," when using PyCharm, this should be in your run/debug configuration -"),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{src:"https://raftt-resources.s3.eu-central-1.amazonaws.com/docs/Other/jetbrains_workload_python_conf.png",alt:"Debug configuration"})),(0,o.kt)("p",null,"If you don't have an existing run/debug configuration, guidance on how to create one can be found ",(0,o.kt)("a",{parentName:"p",href:"https://www.jetbrains.com/help/pycharm/run-debug-configuration.html"},"here"),".  ")),(0,o.kt)(u.Z,{value:"go",label:"Go",mdxType:"TabItem"},(0,o.kt)("p",null,"The environment variable is added under the ",(0,o.kt)("inlineCode",{parentName:"p"},"Environment")," field of your Go run/debug configuration.\nFor example, if you wish to debug a workload called ",(0,o.kt)("inlineCode",{parentName:"p"},"web")," when using GoLand, this should be in your run/debug configuration -"),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{src:"https://raftt-resources.s3.eu-central-1.amazonaws.com/docs/Other/jetbrains_env_var_node_go.png",alt:"Debug configuration"})),(0,o.kt)("p",null,"If you don't have an existing run/debug configuration, guidance on how to create one can be found ",(0,o.kt)("a",{parentName:"p",href:"https://www.jetbrains.com/help/go/run-debug-configuration.html"},"here"),".  ")),(0,o.kt)(u.Z,{value:"node",label:"Node.js",mdxType:"TabItem"},(0,o.kt)("p",null,"The environment variable is added under the ",(0,o.kt)("inlineCode",{parentName:"p"},"Environment")," field of your ",(0,o.kt)("inlineCode",{parentName:"p"},"npm")," run/debug configuration (",(0,o.kt)("inlineCode",{parentName:"p"},"npm")," configurations also support other package managers, e.g. Yarn). Raftt does not support run/debug configuration of type ",(0,o.kt)("inlineCode",{parentName:"p"},"Node.js"),".\nFor example, if you wish to debug a workload called ",(0,o.kt)("inlineCode",{parentName:"p"},"web")," when using WebStorm, this should be in your run/debug configuration -"),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{src:"https://raftt-resources.s3.eu-central-1.amazonaws.com/docs/Other/jetbrains_env_var_node_go.png",alt:"Debug configuration"})),(0,o.kt)("p",null,"If you don't have an existing run/debug configuration, guidance on how to create one can be found ",(0,o.kt)("a",{parentName:"p",href:"https://www.jetbrains.com/help/webstorm/run-debug-configuration.html"},"here"),".  "))),(0,o.kt)("h2",{id:"debugging"},"Debugging"),(0,o.kt)("p",null,"Once the plugin is installed and configured, new blue Run/Debug buttons are enabled and can be used to run or debug the configuration via Raftt. You can than run or debug the service just like you would if it ran locally, e.g., add breakpoints, view symbols, and more."),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{src:"https://raftt-resources.s3.eu-central-1.amazonaws.com/docs/Other/jetbrains_python_raftt_debug.png",alt:"Debug configuration"})))}m.isMDXComponent=!0}}]);