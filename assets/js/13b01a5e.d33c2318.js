"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[321],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=s(n),f=a,g=p["".concat(l,".").concat(f)]||p[f]||d[f]||o;return n?r.createElement(g,i(i({ref:t},c),{},{components:n})):r.createElement(g,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:a,i[1]=u;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5162:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(7294),a=n(6010),o="tabItem_Ymn6";function i(e){var t=e.children,n=e.hidden,i=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,i),hidden:n},t)}},4866:function(e,t,n){n.d(t,{Z:function(){return T}});var r=n(7462),a=n(7294),o=n(6010),i=n(2466),u=n(6775),l=n(1980),s=n(7392),c=n(12);function d(e){return function(e){var t,n;return null!=(t=null==(n=a.Children.map(e,(function(e){if(!e||(0,a.isValidElement)(e)&&(t=e.props)&&"object"==typeof t&&"value"in t)return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function p(e){var t=e.values,n=e.children;return(0,a.useMemo)((function(){var e=null!=t?t:d(n);return function(e){var t=(0,s.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function f(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function g(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId,o=(0,u.k6)(),i=function(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:n,groupId:r});return[(0,l._X)(i),(0,a.useCallback)((function(e){if(i){var t=new URLSearchParams(o.location.search);t.set(i,e),o.replace(Object.assign({},o.location,{search:t.toString()}))}}),[i,o])]}function m(e){var t,n,r,o,i=e.defaultValue,u=e.queryString,l=void 0!==u&&u,s=e.groupId,d=p(e),m=(0,a.useState)((function(){return function(e){var t,n=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!f({value:n,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var a=null!=(t=r.find((function(e){return e.default})))?t:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:i,tabValues:d})})),h=m[0],b=m[1],y=g({queryString:l,groupId:s}),v=y[0],k=y[1],w=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:s}.groupId),n=(0,c.Nk)(t),r=n[0],o=n[1],[r,(0,a.useCallback)((function(e){t&&o.set(e)}),[t,o])]),T=w[0],N=w[1],C=function(){var e=null!=v?v:T;return f({value:e,tabValues:d})?e:null}();return(0,a.useLayoutEffect)((function(){C&&b(C)}),[C]),{selectedValue:h,selectValue:(0,a.useCallback)((function(e){if(!f({value:e,tabValues:d}))throw new Error("Can't select invalid tab value="+e);b(e),k(e),N(e)}),[k,N,d]),tabValues:d}}var h=n(2389),b="tabList__CuJ",y="tabItem_LNqP";function v(e){var t=e.className,n=e.block,u=e.selectedValue,l=e.selectValue,s=e.tabValues,c=[],d=(0,i.o5)().blockElementScrollPositionUntilNextRender,p=function(e){var t=e.currentTarget,n=c.indexOf(t),r=s[n].value;r!==u&&(d(t),l(r))},f=function(e){var t,n=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":var r,a=c.indexOf(e.currentTarget)+1;n=null!=(r=c[a])?r:c[0];break;case"ArrowLeft":var o,i=c.indexOf(e.currentTarget)-1;n=null!=(o=c[i])?o:c[c.length-1]}null==(t=n)||t.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},s.map((function(e){var t=e.value,n=e.label,i=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:u===t?0:-1,"aria-selected":u===t,key:t,ref:function(e){return c.push(e)},onKeyDown:f,onClick:p},i,{className:(0,o.Z)("tabs__item",y,null==i?void 0:i.className,{"tabs__item--active":u===t})}),null!=n?n:t)})))}function k(e){var t=e.lazy,n=e.children,r=e.selectedValue,o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var i=o.find((function(e){return e.props.value===r}));return i?(0,a.cloneElement)(i,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})})))}function w(e){var t=m(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",b)},a.createElement(v,(0,r.Z)({},e,t)),a.createElement(k,(0,r.Z)({},e,t)))}function T(e){var t=(0,h.Z)();return a.createElement(w,(0,r.Z)({key:String(t)},e))}},9248:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return f}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=n(4866),u=n(5162),l=["components"],s={title:"Python"},c="Python Debugging",d={unversionedId:"debugging/python",id:"debugging/python",title:"Python",description:"Raftt supports interactive Python debugging using JetBrains IDEs and VS Code.",source:"@site/docs/debugging/python.md",sourceDirName:"debugging",slug:"/debugging/python",permalink:"/debugging/python",draft:!1,tags:[],version:"current",frontMatter:{title:"Python"},sidebar:"tutorialSidebar",previous:{title:"Go",permalink:"/debugging/go"},next:{title:"Java",permalink:"/debugging/java"}},p={},f=[{value:"Configuration",id:"configuration",level:2},{value:"Debugging",id:"debugging",level:2}],g={toc:f};function m(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"python-debugging"},"Python Debugging"),(0,o.kt)("p",null,"Raftt supports interactive Python debugging using JetBrains IDEs and VS Code."),(0,o.kt)("p",null,"To debug with Raftt, you must first install Raftt's IDE plugin. See ",(0,o.kt)("a",{parentName:"p",href:"/intro/installation#raftt-ide-plugin"},"here")," for installation instructions."),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"The configuration differs between different IDEs."),(0,o.kt)(i.Z,{className:"unique-tabs",groupId:"IDEs",mdxType:"Tabs"},(0,o.kt)(u.Z,{value:"JetBrains",label:"JetBrains IDEs",default:!0,mdxType:"TabItem"},(0,o.kt)("p",null,'To debug with Raftt, start by defining a "standard" debug configuration, as if you would debug the process locally. For help creating such a configuration, see JetBrains ',(0,o.kt)("a",{parentName:"p",href:"https://www.jetbrains.com/help/idea/run-debug-configuration-python.html"},"docs"),"."),(0,o.kt)("p",null,"Then, you only need to add a single env var called ",(0,o.kt)("inlineCode",{parentName:"p"},"RAFTT_WORKLOAD")," stating the workload to debug. For example, here you can see the configuration for debugging the ",(0,o.kt)("inlineCode",{parentName:"p"},"recommendations")," service, as a part of our ",(0,o.kt)("a",{parentName:"p",href:"/basics/tutorials/connect_mode"},"tutorial")," -"),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{src:"https://raftt-resources.s3.eu-central-1.amazonaws.com/docs/debugging/jetbrains/python.png",alt:"Python run/debug config in IntelliJ"})),(0,o.kt)("details",null,(0,o.kt)("summary",null,(0,o.kt)("h3",{style:{marginBottom:0}},"Debugging a sidecar container")),(0,o.kt)("p",null,"To debug a sidecar container, add an additional env var - ",(0,o.kt)("inlineCode",{parentName:"p"},"RAFTT_CONTAINER"),", whose value is the debugged container name. If not stated, the selected container is the workload's main container - either the one annotated as default, or if no container is annotated - the first one in the manifest.")),(0,o.kt)("admonition",{title:"Note",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"The Python interpreter that is used while debugging is the one installed in the remote container, not the one in the run/debug config.",(0,o.kt)("br",{parentName:"p"}),"\n","You can even omit its definition, but you'll get a warning message you'll have to skip every time you run/debug with Raftt.")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},'To easily share your run/debug configuration with the rest of the team, mark the "store as project file" checkbox and commit the new file, typically located under ',(0,o.kt)("inlineCode",{parentName:"p"},".run"),", to the repo."))),(0,o.kt)(u.Z,{value:"VSCode",label:"VS Code",mdxType:"TabItem"},(0,o.kt)("p",null,'To debug with Raftt, start by defining a "standard" debug configuration in your ',(0,o.kt)("inlineCode",{parentName:"p"},"launch.json")," file, as if you would debug the process locally. For help creating such a configuration, see VS Code ",(0,o.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/docs/python/debugging"},"docs"),"."),(0,o.kt)("p",null,"Then, add the ",(0,o.kt)("inlineCode",{parentName:"p"},"raftt")," attribute to the debug config. This attribute has a single property, stating the ",(0,o.kt)("inlineCode",{parentName:"p"},"workload")," to debug."),(0,o.kt)("p",null,"In addition, the default working dir by VS Code is the workspace folder (usually the repo root). If this dir isn't mounted to the container, you must specify a different ",(0,o.kt)("inlineCode",{parentName:"p"},"cwd"),"."),(0,o.kt)("p",null,"For example, here you can see the configuration for debugging the ",(0,o.kt)("inlineCode",{parentName:"p"},"recommendations")," service, as a part of our ",(0,o.kt)("a",{parentName:"p",href:"/basics/tutorials/connect_mode"},"tutorial")," -"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "name": "recommendations",\n    "type": "python",\n    "request": "launch",\n    "program": "${workspaceFolder}/src/recommendationservice/recommendation_server.py",\n    "cwd": "${workspaceFolder}/src/recommendationservice",\n    "raftt": {\n        "workload": "recommendations"\n    }\n}\n')),(0,o.kt)("details",null,(0,o.kt)("summary",null,(0,o.kt)("h3",{style:{marginBottom:0}},"Debugging a sidecar container")),(0,o.kt)("p",null,"To debug a sidecar container, add a property to the ",(0,o.kt)("inlineCode",{parentName:"p"},"raftt")," attribute - ",(0,o.kt)("inlineCode",{parentName:"p"},"container"),", whose value is the debugged container name. If not stated, the selected container is the workload's main container - either the one annotated as default, or if no container is annotated - the first one in the manifest."),(0,o.kt)("p",null,"Here you can see how to debug a container named ",(0,o.kt)("inlineCode",{parentName:"p"},"sidecar")," (that doesn't really exist in our sample project) -"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "name": "recommendations",\n    "type": "python",\n    "request": "launch",\n    "program": "${workspaceFolder}/src/recommendationservice/recommendation_server.py",\n    "cwd": "${workspaceFolder}/src/recommendationservice",\n    "raftt": {\n        "workload": "recommendations",\n        "container": "sidecar"\n    }\n}\n'))),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"To easily share your run/debug configuration with team members, make sure your ",(0,o.kt)("inlineCode",{parentName:"p"},"launch.json")," file is committed to the project repo.")))),(0,o.kt)("h2",{id:"debugging"},"Debugging"),(0,o.kt)("p",null,"Once you completed the configuration, you can experience fully-featured interactive debugging directly in your cluster, including breakpoints, stepping, watching and modifying variables, etc..",(0,o.kt)("br",{parentName:"p"}),"\n","The method for starting a run/debug session with Raftt differs between different IDEs - "),(0,o.kt)(i.Z,{className:"unique-tabs",groupId:"IDEs",mdxType:"Tabs"},(0,o.kt)(u.Z,{value:"JetBrains",label:"JetBrains IDEs",default:!0,mdxType:"TabItem"},(0,o.kt)("p",null,"To start a run/debug session with Raftt, use the ",(0,o.kt)("inlineCode",{parentName:"p"},"Run with Raftt")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"Debug with Raftt")," blue buttons, or select these options from the ",(0,o.kt)("inlineCode",{parentName:"p"},"Run")," menu."),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{src:"https://raftt-resources.s3.eu-central-1.amazonaws.com/docs/debugging/jetbrains/debug_buttons.png",alt:"Run/debug with Raftt buttons in IntelliJ"}))),(0,o.kt)(u.Z,{value:"VSCode",label:"VS Code",mdxType:"TabItem"},(0,o.kt)("p",null,"Starting a run/debug session with a configuration that has the ",(0,o.kt)("inlineCode",{parentName:"p"},"raftt")," attribute will automatically start a Raftt debugging session. This can be triggered using the debugging pane in the side bar, keyboard shortcuts or the command palette."))))}m.isMDXComponent=!0}}]);