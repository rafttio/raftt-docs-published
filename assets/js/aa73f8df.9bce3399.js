"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[618],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return g}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=s(n),g=r,h=d["".concat(l,".").concat(g)]||d[g]||p[g]||i;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:r,o[1]=u;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(7294),r=n(6010),i="tabItem_Ymn6";function o(e){var t=e.children,n=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,o),hidden:n},t)}},4866:function(e,t,n){n.d(t,{Z:function(){return N}});var a=n(7462),r=n(7294),i=n(6010),o=n(2466),u=n(6775),l=n(1980),s=n(7392),c=n(12);function p(e){return function(e){var t,n;return null!=(t=null==(n=r.Children.map(e,(function(e){if(!e||(0,r.isValidElement)(e)&&(t=e.props)&&"object"==typeof t&&"value"in t)return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function d(e){var t=e.values,n=e.children;return(0,r.useMemo)((function(){var e=null!=t?t:p(n);return function(e){var t=(0,s.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function g(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function h(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId,i=(0,u.k6)(),o=function(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:n,groupId:a});return[(0,l._X)(o),(0,r.useCallback)((function(e){if(o){var t=new URLSearchParams(i.location.search);t.set(o,e),i.replace(Object.assign({},i.location,{search:t.toString()}))}}),[o,i])]}function f(e){var t,n,a,i,o=e.defaultValue,u=e.queryString,l=void 0!==u&&u,s=e.groupId,p=d(e),f=(0,r.useState)((function(){return function(e){var t,n=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!g({value:n,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var r=null!=(t=a.find((function(e){return e.default})))?t:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:o,tabValues:p})})),m=f[0],b=f[1],k=h({queryString:l,groupId:s}),y=k[0],v=k[1],w=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:s}.groupId),n=(0,c.Nk)(t),a=n[0],i=n[1],[a,(0,r.useCallback)((function(e){t&&i.set(e)}),[t,i])]),N=w[0],T=w[1],C=function(){var e=null!=y?y:N;return g({value:e,tabValues:p})?e:null}();return(0,r.useLayoutEffect)((function(){C&&b(C)}),[C]),{selectedValue:m,selectValue:(0,r.useCallback)((function(e){if(!g({value:e,tabValues:p}))throw new Error("Can't select invalid tab value="+e);b(e),v(e),T(e)}),[v,T,p]),tabValues:p}}var m=n(2389),b="tabList__CuJ",k="tabItem_LNqP";function y(e){var t=e.className,n=e.block,u=e.selectedValue,l=e.selectValue,s=e.tabValues,c=[],p=(0,o.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var t=e.currentTarget,n=c.indexOf(t),a=s[n].value;a!==u&&(p(t),l(a))},g=function(e){var t,n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var a,r=c.indexOf(e.currentTarget)+1;n=null!=(a=c[r])?a:c[0];break;case"ArrowLeft":var i,o=c.indexOf(e.currentTarget)-1;n=null!=(i=c[o])?i:c[c.length-1]}null==(t=n)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t)},s.map((function(e){var t=e.value,n=e.label,o=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:u===t?0:-1,"aria-selected":u===t,key:t,ref:function(e){return c.push(e)},onKeyDown:g,onClick:d},o,{className:(0,i.Z)("tabs__item",k,null==o?void 0:o.className,{"tabs__item--active":u===t})}),null!=n?n:t)})))}function v(e){var t=e.lazy,n=e.children,a=e.selectedValue,i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var o=i.find((function(e){return e.props.value===a}));return o?(0,r.cloneElement)(o,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},i.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})})))}function w(e){var t=f(e);return r.createElement("div",{className:(0,i.Z)("tabs-container",b)},r.createElement(y,(0,a.Z)({},e,t)),r.createElement(v,(0,a.Z)({},e,t)))}function N(e){var t=(0,m.Z)();return r.createElement(w,(0,a.Z)({key:String(t)},e))}},9069:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return g}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=n(4866),u=n(5162),l=["components"],s={title:"Go"},c="Go Debugging",p={unversionedId:"debugging/go",id:"debugging/go",title:"Go",description:"Raftt supports interactive Go debugging using JetBrains IDEs and VS Code.",source:"@site/docs/debugging/go.md",sourceDirName:"debugging",slug:"/debugging/go",permalink:"/debugging/go",draft:!1,tags:[],version:"current",frontMatter:{title:"Go"},sidebar:"tutorialSidebar",previous:{title:"Node.js",permalink:"/debugging/node"},next:{title:"Python",permalink:"/debugging/python"}},d={},g=[{value:"Configuration",id:"configuration",level:2},{value:"Add a builder container",id:"add-a-builder-container",level:3},{value:"Create a run/debug configuration",id:"create-a-rundebug-configuration",level:3},{value:"Create a before launch task",id:"create-a-before-launch-task",level:3},{value:"Create a preLaunchTask",id:"create-a-prelaunchtask",level:3},{value:"Create a run/debug configuration",id:"create-a-rundebug-configuration-1",level:3},{value:"Debugging",id:"debugging",level:2}],h={toc:g};function f(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"go-debugging"},"Go Debugging"),(0,i.kt)("p",null,"Raftt supports interactive Go debugging using JetBrains IDEs and VS Code."),(0,i.kt)("p",null,"To debug with Raftt, you must first install Raftt's IDE plugin. See ",(0,i.kt)("a",{parentName:"p",href:"/intro/installation#raftt-ide-plugin"},"here")," for installation instructions."),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,"To configure Go debugging you need to define two things -"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Where and when to compile your Go binary",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"Add a builder container to the workload"),(0,i.kt)("li",{parentName:"ol"},"Define a pre-launch task"))),(0,i.kt)("li",{parentName:"ol"},"Create a run/debug configuration")),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("h3",{style:{marginBottom:0}},"If you can compile in your app container")),(0,i.kt)("p",null,"In most cases when using Go, the production version of the app container can't build the Go binary, so you need to go through the steps described in this guide. If your container ",(0,i.kt)("strong",{parentName:"p"},"can")," compile your binary, there's a much simpler configuration for debugging, described here."),(0,i.kt)("p",null,'You first need a "standard" debug configuration, as if you would debug the process locally. For help creating such a configuration, see ',(0,i.kt)("a",{parentName:"p",href:"https://www.jetbrains.com/help/go/run-debug-configuration.html"},"JetBrains")," and ",(0,i.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/docs/languages/go#_debugging"},"VS Code")," docs. In addition, you need to configure the workload to be debugged. This is done using different methods in different IDEs."),(0,i.kt)("p",null,"For example, here you can see the configuration for debugging the ",(0,i.kt)("inlineCode",{parentName:"p"},"shipping")," service, as a part of our ",(0,i.kt)("a",{parentName:"p",href:"/basics/tutorials/connect_mode"},"tutorial")," -"),(0,i.kt)(o.Z,{className:"unique-tabs",groupId:"IDEs",mdxType:"Tabs"},(0,i.kt)(u.Z,{value:"JetBrains",label:"JetBrains IDEs",default:!0,mdxType:"TabItem"},(0,i.kt)("p",null,"The workload is defined using the ",(0,i.kt)("inlineCode",{parentName:"p"},"RAFTT_WORKLOAD")," environment variable."),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{src:"https://raftt-resources.s3.eu-central-1.amazonaws.com/docs/debugging/jetbrains/go_basic.png",alt:"Go run/debug config in JetBrains when compiling inside the app container"}))),(0,i.kt)(u.Z,{value:"VSCode",label:"VS Code",mdxType:"TabItem"},(0,i.kt)("p",null,"The workload is defined in the ",(0,i.kt)("inlineCode",{parentName:"p"},"workload")," property of the ",(0,i.kt)("inlineCode",{parentName:"p"},"raftt")," attribute."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "name": "shipping",\n    "type": "go",\n    "request": "launch",\n    "mode": "debug",\n    "program": "${workspaceFolder}/src/shippingservice",\n    "raftt": {\n        "workload": "shipping"\n    }\n}\n'))))),(0,i.kt)("h3",{id:"add-a-builder-container"},"Add a builder container"),(0,i.kt)("p",null,"The best way to let your env compile Go binaries without modifying your application container is by adding a builder container to the pod. This can be easily defined in your ",(0,i.kt)("inlineCode",{parentName:"p"},".raftt")," file. Here you can see the configuration for adding a builder container to the ",(0,i.kt)("inlineCode",{parentName:"p"},"shipping")," service of our ",(0,i.kt)("a",{parentName:"p",href:"/basics/tutorials/connect_mode"},"sample project")," -"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'# Fetch the shipping workload, assuming `resources` was imported earlier\nshipping = resources.deployments["shipping"]\n\n# Define the container and add it to the workload\nbuilder = Container(yaml="""\nname: builder\nimage: golang:1.20.2-alpine3.17\nworkingDir: /src\n""")\nshipping.spec.template.spec.containers.append(builder)\n\n# Mount the source code and the compiled artifact folder to\n# both the application container and the builder container\nshipping_out = volume("shipping-out")\nshipping.mount(repo_root.subpath("src/shippingservice"), "/src", container="builder")\nshipping.mount(repo_root.subpath("src/shippingservice"), "/src")\nshipping.mount(shipping_out, "/tmp/out", container="builder")\nshipping.mount(shipping_out, "/app", init_on_rebuild=True)\n')),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"We recommend the builder container to have the same underlying distribution as the application container. In the above example we chose Alpine, like the ",(0,i.kt)("inlineCode",{parentName:"p"},"shipping")," service.",(0,i.kt)("br",{parentName:"p"}),"\n","The example shows a simple builder container that should be enough for most cases, but you need to make sure that it contains all the requirements to build your binary.")),(0,i.kt)("p",null,"The rest of the configuration differs between different IDEs -"),(0,i.kt)(o.Z,{className:"unique-tabs",groupId:"IDEs",mdxType:"Tabs"},(0,i.kt)(u.Z,{value:"JetBrains",label:"JetBrains IDEs",default:!0,mdxType:"TabItem"},(0,i.kt)("h3",{id:"create-a-rundebug-configuration"},"Create a run/debug configuration"),(0,i.kt)("p",null,"To debug with Raftt, you need to create a run/debug configuration of the type ",(0,i.kt)("inlineCode",{parentName:"p"},"Go Executable with Raftt"),". Most of the fields are equivalent to a ",(0,i.kt)("a",{parentName:"p",href:"https://www.jetbrains.com/help/go/debugging-code.html"},"standard Go run/debug config"),". The ",(0,i.kt)("inlineCode",{parentName:"p"},"Executable Path")," parameter is unique to debugging with Raftt and contains the path of the artifact created by the compilation (see ",(0,i.kt)("a",{parentName:"p",href:"#create-a-before-launch-task"},"below")," for the compilation definition). Then, add a single env var called ",(0,i.kt)("inlineCode",{parentName:"p"},"RAFTT_WORKLOAD")," stating the workload to debug."),(0,i.kt)("p",null,"Here you can see the configuration for the ",(0,i.kt)("inlineCode",{parentName:"p"},"shipping")," service of our ",(0,i.kt)("a",{parentName:"p",href:"/basics/tutorials/connect_mode"},"sample project")," -"),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{src:"https://raftt-resources.s3.eu-central-1.amazonaws.com/docs/debugging/jetbrains/go.png",alt:"Go Executable with Raftt run/debug config in GoLand"})),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("h3",{style:{marginBottom:0}},"Debugging a sidecar container")),(0,i.kt)("p",null,"To debug a sidecar container, add an additional env var - ",(0,i.kt)("inlineCode",{parentName:"p"},"RAFTT_CONTAINER"),", whose value is the debugged container name. If not stated, the selected container is the workload's main container - either the one annotated as default, or if no container is annotated - the first one in the manifest.")),(0,i.kt)("h3",{id:"create-a-before-launch-task"},"Create a before launch task"),(0,i.kt)("p",null,"To recompile your code before every run/debug session, you need to define a ",(0,i.kt)("a",{parentName:"p",href:"https://www.jetbrains.com/help/idea/run-debug-configurations-dialog.html#before-launch-options"},"before launch task")," in you debug configuration. Create a task of the type ",(0,i.kt)("inlineCode",{parentName:"p"},"Run on Raftt Workload")," and define what build script to run and where -"),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{src:"https://raftt-resources.s3.eu-central-1.amazonaws.com/docs/debugging/jetbrains/go_before_launch.png",alt:"Run on Raftt Workload before launch task on GoLand","max-width":"300px"})),(0,i.kt)("p",null,"The command is ",(0,i.kt)("inlineCode",{parentName:"p"},"go build -v -o /tmp/out/shipping -gcflags='all=-N -l' .")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},'To easily share your run/debug configuration with the rest of the team, mark the "store as project file" checkbox and commit the new file, typically located under ',(0,i.kt)("inlineCode",{parentName:"p"},".run"),", to the repo."))),(0,i.kt)(u.Z,{value:"VSCode",label:"VS Code",mdxType:"TabItem"},(0,i.kt)("h3",{id:"create-a-prelaunchtask"},"Create a preLaunchTask"),(0,i.kt)("p",null,"To recompile your code before every run/debug session, you first need to define a task in the project's ",(0,i.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/docs/editor/tasks"},(0,i.kt)("inlineCode",{parentName:"a"},"tasks.json"))," file (create it if it doesn't already exist). The task should define a build task in the builder container, using ",(0,i.kt)("inlineCode",{parentName:"p"},"raftt sh")," to the builder container. For example, here you can see the build task for the shipping container of our ",(0,i.kt)("a",{parentName:"p",href:"/basics/tutorials/connect_mode"},"sample project")," -"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "label": "build-shipping",\n    "type": "shell",\n    "command": "raftt sh shipping -c builder -- go build -v -o /tmp/out/shipping -gcflags=\'all=-N -l\' .",\n    "group": "build",\n    "detail": "Build shipping service"\n}\n')),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Once configured, you can trigger the build task without starting a run/debug session using ",(0,i.kt)("inlineCode",{parentName:"p"},"Tasks: Run build commands")," from the command palette, or using the ",(0,i.kt)("inlineCode",{parentName:"p"},"cmd/ctrl+shift+B")," keyboard shortcut.")),(0,i.kt)("h3",{id:"create-a-rundebug-configuration-1"},"Create a run/debug configuration"),(0,i.kt)("p",null,'To debug with Raftt, start by defining a "standard" debug configuration in your ',(0,i.kt)("inlineCode",{parentName:"p"},"launch.json")," file for debugging a pre-built binary, a.k.a ",(0,i.kt)("inlineCode",{parentName:"p"},"exec")," mode. For help creating such a configuration, see VS Code ",(0,i.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/docs/languages/go#_debugging"},"docs"),". To this configuration, you need to assign the ",(0,i.kt)("a",{parentName:"p",href:"https://www.jetbrains.com/help/idea/run-debug-configurations-dialog.html#before-launch-options"},(0,i.kt)("inlineCode",{parentName:"a"},"preLaunchTask"))," you defined in the previous section."),(0,i.kt)("p",null,"Then, add the ",(0,i.kt)("inlineCode",{parentName:"p"},"raftt")," attribute to the debug config. This attribute has a single property, stating the ",(0,i.kt)("inlineCode",{parentName:"p"},"workload")," to debug."),(0,i.kt)("p",null,"For example, here you can see the configuration for debugging the ",(0,i.kt)("inlineCode",{parentName:"p"},"recommendations")," service, as a part of our ",(0,i.kt)("a",{parentName:"p",href:"/basics/tutorials/connect_mode"},"tutorial")," -"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "name": "Shipping",\n    "type": "go",\n    "request": "launch",\n    "mode": "exec",\n    "program": "/app/shipping",\n    "raftt": {\n        "workload": "shipping"\n    },\n    "preLaunchTask": "build-shipping"\n}\n')),(0,i.kt)("p",null,"Note the ",(0,i.kt)("inlineCode",{parentName:"p"},"program")," is the path to which the build artifact is mounted (or copied) in the application container."),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("h3",{style:{marginBottom:0}},"Debugging a sidecar container")),(0,i.kt)("p",null,"To debug a sidecar container, add a property to the ",(0,i.kt)("inlineCode",{parentName:"p"},"raftt")," attribute - ",(0,i.kt)("inlineCode",{parentName:"p"},"container"),", whose value is the debugged container name. If not stated, the selected container is the workload's main container - either the one annotated as default, or if no container is annotated - the first one in the manifest."),(0,i.kt)("p",null,"Here you can see how to debug the ",(0,i.kt)("inlineCode",{parentName:"p"},"builder")," container -"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "name": "Shipping",\n    "type": "go",\n    "request": "launch",\n    "mode": "exec",\n    "program": "/app/shipping",\n    "raftt": {\n        "workload": "shipping",\n        "container": "builder"\n    },\n    "preLaunchTask": "build-shipping"\n}\n'))),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"To easily share your run/debug configuration with team members, make sure your ",(0,i.kt)("inlineCode",{parentName:"p"},"launch.json")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"tasks.json")," files are committed to the project repo.")))),(0,i.kt)("h2",{id:"debugging"},"Debugging"),(0,i.kt)("p",null,"Once you completed the configuration, you can experience fully-featured interactive debugging directly in your cluster, including breakpoints, stepping, watching and modifying variables, etc..",(0,i.kt)("br",{parentName:"p"}),"\n","The method for starting a run/debug session with Raftt differs between different IDEs - "),(0,i.kt)(o.Z,{className:"unique-tabs",groupId:"IDEs",mdxType:"Tabs"},(0,i.kt)(u.Z,{value:"JetBrains",label:"JetBrains IDEs",default:!0,mdxType:"TabItem"},(0,i.kt)("p",null,"To start a run/debug session with Raftt, use the ",(0,i.kt)("inlineCode",{parentName:"p"},"Run with Raftt")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"Debug with Raftt")," blue buttons, or select these options from the ",(0,i.kt)("inlineCode",{parentName:"p"},"Run")," menu."),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{src:"https://raftt-resources.s3.eu-central-1.amazonaws.com/docs/debugging/jetbrains/debug_buttons.png",alt:"Run/debug with Raftt buttons in IntelliJ"}))),(0,i.kt)(u.Z,{value:"VSCode",label:"VS Code",mdxType:"TabItem"},(0,i.kt)("p",null,"Starting a run/debug session with a configuration that has the ",(0,i.kt)("inlineCode",{parentName:"p"},"raftt")," attribute will automatically start a Raftt debugging session. This can be triggered using the debugging pane in the side bar, keyboard shortcuts or the command palette."))))}f.isMDXComponent=!0}}]);