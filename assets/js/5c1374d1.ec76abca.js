"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[140],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),d=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(n),m=r,h=p["".concat(u,".").concat(m)]||p[m]||s[m]||i;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7294),r=n(4334);const i="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,o),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>N});var a=n(7462),r=n(7294),i=n(4334),o=n(2466),l=n(6775),u=n(1980),d=n(7392),c=n(12);function s(e){return function(e){var t;return(null==(t=r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??s(n);return function(e){const t=(0,d.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.k6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,u._X)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(a.location.search);t.set(i,e),a.replace({...a.location,search:t.toString()})}),[i,a])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,i=p(e),[o,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:i}))),[u,d]=h({queryString:n,groupId:a}),[s,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,i]=(0,c.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:a}),f=(()=>{const e=u??s;return m({value:e,tabValues:i})?e:null})();(0,r.useLayoutEffect)((()=>{f&&l(f)}),[f]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),g(e)}),[d,g,i]),tabValues:i}}var f=n(2389);const b="tabList__CuJ",k="tabItem_LNqP";function y(e){let{className:t,block:n,selectedValue:l,selectValue:u,tabValues:d}=e;const c=[],{blockElementScrollPositionUntilNextRender:s}=(0,o.o5)(),p=e=>{const t=e.currentTarget,n=c.indexOf(t),a=d[n].value;a!==l&&(s(t),u(a))},m=e=>{var t;let n=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}null==(t=n)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t)},d.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:p},o,{className:(0,i.Z)("tabs__item",k,null==o?void 0:o.className,{"tabs__item--active":l===t})}),n??t)})))}function w(e){let{lazy:t,children:n,selectedValue:a}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},i.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function v(e){const t=g(e);return r.createElement("div",{className:(0,i.Z)("tabs-container",b)},r.createElement(y,(0,a.Z)({},e,t)),r.createElement(w,(0,a.Z)({},e,t)))}function N(e){const t=(0,f.Z)();return r.createElement(v,(0,a.Z)({key:String(t)},e))}},4514:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>m,frontMatter:()=>l,metadata:()=>d,toc:()=>s});var a=n(7462),r=(n(7294),n(3905)),i=n(4866),o=n(5162);const l={title:"Working with Compiled Languages"},u="Working with Compiled Languages",d={unversionedId:"guides/compiled_languages",id:"guides/compiled_languages",title:"Working with Compiled Languages",description:"Working with compiled languages introduces a small additional challenge - the source needs to be compiled before it can run on the container. Raftt has various built-in options for supporting flexible work with compiled languages, including hot-reloading and debugging.",source:"@site/docs/guides/compiled_languages.md",sourceDirName:"guides",slug:"/guides/compiled_languages",permalink:"/guides/compiled_languages",draft:!1,tags:[],version:"current",frontMatter:{title:"Working with Compiled Languages"},sidebar:"tutorialSidebar",previous:{title:"Guides",permalink:"/guides"},next:{title:"Configuration",permalink:"/config"}},c={},s=[{value:"Building Artifacts",id:"building-artifacts",level:2},{value:"Adding a Builder Sidecar Container",id:"adding-a-builder-sidecar-container",level:3},{value:"Adding a Builder Deployment",id:"adding-a-builder-deployment",level:3},{value:"Build Locally",id:"build-locally",level:3},{value:"Updating Artifacts",id:"updating-artifacts",level:2},{value:"Shared mount",id:"shared-mount",level:3},{value:"raftt cp",id:"raftt-cp",level:3},{value:"File watching",id:"file-watching",level:2},{value:"Adding a Before-launch Task to the IDE",id:"adding-a-before-launch-task-to-the-ide",level:2}],p={toc:s};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"working-with-compiled-languages"},"Working with Compiled Languages"),(0,r.kt)("p",null,"Working with compiled languages introduces a small additional challenge - the source needs to be compiled before it can run on the container. Raftt has various built-in options for supporting flexible work with compiled languages, including hot-reloading and debugging."),(0,r.kt)("p",null,"In this guide we will cover the general aspects of working with compiled languages, and the ways you can achieve great DevEx using Raftt. For language-specific examples, check out ",(0,r.kt)("a",{parentName:"p",href:"../debugging"},"the debugging section"),". The examples we give here will be for Go, but the ideas are relevant for all compiled languages."),(0,r.kt)("p",null,"The following sections assume you are already connected to an environment, and are working on a workload in ",(0,r.kt)("a",{parentName:"p",href:"/concepts/dev_mode"},"dev mode"),"."),(0,r.kt)("h2",{id:"building-artifacts"},"Building Artifacts"),(0,r.kt)("p",null,"The most basic problem with compiled languages is that they need to be compiled. If your exiting image includes the toolchain, you can use it directly, and this section is less relevant. Otherwise, keep reading."),(0,r.kt)("p",null,"If the image does not include the toolchain, we have three options for building the artifact externally, somewhere where the toolchain does exist:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#adding-a-builder-sidecar-container"},"Add a ",(0,r.kt)("inlineCode",{parentName:"a"},"builder")," sidecar container and build on it")," - simplest"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#adding-a-builder-deployment"},"Add a ",(0,r.kt)("inlineCode",{parentName:"a"},"builder")," deployment and building on it")," - allows a shared build cache"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#build-locally"},"Building locally")," - not recommended, can take a long time to transmit the built artifact")),(0,r.kt)("h3",{id:"adding-a-builder-sidecar-container"},"Adding a Builder Sidecar Container"),(0,r.kt)("p",null,"Going this route, all we need to do is add another container to the deployment, with an image that has the required toolchain. We also mount the repo to it:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'dep = resources.deployments["my-deployment"]\n\n# Define the container and add it to the workload\nbuilder = k8s.Container(\n    name="builder",\n    image="golang:1.21.3-alpine3.18",\n    working_dir="/src"\n)\ndep.spec.template.spec.containers.append(builder)\n\n# Mount the source code to the builder container\ndep.mount(repo_root(), "/src", container="builder")\n')),(0,r.kt)("p",null,"After running ",(0,r.kt)("inlineCode",{parentName:"p"},"raftt rebuild"),", you should be able to run ",(0,r.kt)("inlineCode",{parentName:"p"},"raftt sh my-deployment -c builder")," and build your code! Because the builder is bound to the lifetime of the deployment which uses its artifact, you will have a working build cache, and subsequent builds should be speedy."),(0,r.kt)("h3",{id:"adding-a-builder-deployment"},"Adding a Builder Deployment"),(0,r.kt)("p",null,"Going this route, we will create a brand new deployment which we will use for building artifacts. This currently requires creating a file outside of the ",(0,r.kt)("inlineCode",{parentName:"p"},".raftt")," file, in which we write the deployment YAML:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: builder\nspec:\n  selector:\n    matchLabels:\n      app: builder\n  template:\n    metadata:\n      labels:\n        app: builder\n    spec:\n      containers:\n      - image: golang:1.21.3-alpine3.18\n        name: server\n        workingDir: /src\n")),(0,r.kt)("p",null,"Then in the ",(0,r.kt)("inlineCode",{parentName:"p"},".raftt")," file we would have:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'builder_resources=k8s_manifests("./path/to/builder/yaml")\nbuilder = builder_resources.deployments["builder"]\n\n# Mount the source code to the builder container\nbuilder.mount(repo_root(), "/src", container="builder")\n')),(0,r.kt)("p",null,"After running ",(0,r.kt)("inlineCode",{parentName:"p"},"raftt rebuild builder"),", you should be able to run ",(0,r.kt)("inlineCode",{parentName:"p"},"raftt sh builder")," and build your code! Because the builder is not bound to the lifetime of any one deployment, you can have a shared build cache. If you are using Raftt in connect-mode, you can add:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"deploy_on_connect(builder_resources)\n")),(0,r.kt)("p",null,"Which will make the builder automatically be created once you connect to a new environment."),(0,r.kt)("h3",{id:"build-locally"},"Build Locally"),(0,r.kt)("p",null,"This mode is less recommended, because it can lead to significant delay while the built artifact is being uploaded to the remote cluster. No change needs to be made to the environment for this mode.\nIn this case, ",(0,r.kt)("a",{parentName:"p",href:"#raftt-cp"},"use ",(0,r.kt)("inlineCode",{parentName:"a"},"raftt cp")," to copy the file")," to the destinaton container."),(0,r.kt)("h2",{id:"updating-artifacts"},"Updating Artifacts"),(0,r.kt)("p",null,"Now that the artifact is built, we need to update it in the main container. We have two main options:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#shared-mount"},"Have a shared mount between the ",(0,r.kt)("inlineCode",{parentName:"a"},"builder")," and the main container")," - recommended"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#raftt-cp"},"Use ",(0,r.kt)("inlineCode",{parentName:"a"},"raftt cp")," to copy the file over"))),(0,r.kt)("h3",{id:"shared-mount"},"Shared mount"),(0,r.kt)("p",null,"To create a shared mount between the containers, we'll create a ",(0,r.kt)("inlineCode",{parentName:"p"},"volume()"),", and then use mount it to both places:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'build_out = volume("build_out")\ndep.mount(build_out, "/out", container="builder", nocopy=True)\ndep.mount(build_out, "/path/to/artifact/dir", init_on_rebuild=True)\n')),(0,r.kt)("p",null,"Note the addition of ",(0,r.kt)("inlineCode",{parentName:"p"},"nocopy")," to the builder, which means we do not try to initialize the volume with the contents of the image, and the ",(0,r.kt)("inlineCode",{parentName:"p"},"init_on_rebuild")," on the main container, which means we ",(0,r.kt)("em",{parentName:"p"},"always")," initialize the contents of the volume from the main container on rebuild."),(0,r.kt)("h3",{id:"raftt-cp"},"raftt cp"),(0,r.kt)("p",null,"We may want to use ",(0,r.kt)("inlineCode",{parentName:"p"},"cp")," to copy the file directly in certain cases. Particularly when:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The destination is in the root of the container or there are other files in the containing directory which we don't want to clobber with the mount"),(0,r.kt)("li",{parentName:"ol"},"We are building locally, in which case no need to make any modifications to the ",(0,r.kt)("inlineCode",{parentName:"li"},".raftt")," file - we will just use ",(0,r.kt)("inlineCode",{parentName:"li"},"raftt cp")," locally.")),(0,r.kt)("p",null,"To do that, first make sure the ",(0,r.kt)("inlineCode",{parentName:"p"},"raftt")," CLI is available on the builder container:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'dep.add_raftt_cli(container="builder")\n')),(0,r.kt)("p",null,"Now, we can update the artifact in the destination container by running the build command and then ",(0,r.kt)("inlineCode",{parentName:"p"},"raftt cp /out/artifact my-deployment:/path/to/artifact/dir/artifact"),"."),(0,r.kt)("h2",{id:"file-watching"},"File watching"),(0,r.kt)("p",null,"File watching hooks work as usual, but we will want them to run on the builder, compile the artifact, copy it to the mount (or directly to the main container), and finally restart the process in the main container."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'dep.add_raftt_cli(container="builder") # for the restart, and possibly the cp\n\nregister_hook(\n    on=events.OnFileChanged(\n        workload=dep,\n        container="builder",\n        patterns="/src/**/*.go"),\n    do=[\n        actions.CMD(\n            workload=dep,\n            container="builder",\n            cmd=["go", "build", "-o", "/out/artifact", "main.go"]\n        ),\n        # If copying directly, you would add another CMD here with:\n        # ["raftt", "cp", "artifact", "my-deployment:/path/to/artifact/dir/artifact"]\n        actions.CMD(\n            workload=dep,\n            container="builder",\n            cmd=["raftt", "restart", "-n", "my-deployment"]\n        )\n    ]\n)\n')),(0,r.kt)("p",null,"Note the ",(0,r.kt)("inlineCode",{parentName:"p"},"-n")," we added to the ",(0,r.kt)("inlineCode",{parentName:"p"},"raftt restart")," call, which makes the restart not interrupt an ",(0,r.kt)("em",{parentName:"p"},"interactive")," (such as debugging) process currently running on the container."),(0,r.kt)("h2",{id:"adding-a-before-launch-task-to-the-ide"},"Adding a Before-launch Task to the IDE"),(0,r.kt)("p",null,"To make it easy to use the IDE directly, you can add a before-launch task to the build/run configuration which performs the actual compilation. See how it is defined in Jetbrains IDEs and VSSCode:"),(0,r.kt)(i.Z,{className:"unique-tabs",groupId:"IDEs",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"JetBrains",label:"JetBrains IDEs",default:!0,mdxType:"TabItem"},(0,r.kt)("p",null,'Add a Run on Raftt Workload "Before launch" task:'),(0,r.kt)("p",{align:"center"},(0,r.kt)("img",{src:"https://raftt-resources.s3.eu-central-1.amazonaws.com/web-assets/add_run_on_raftt_workload.png",alt:"Add a Run on Raftt Workload Before launch task"})),(0,r.kt)("p",null,"And set it to what is needed for building the artifact:"),(0,r.kt)("p",{align:"center"},(0,r.kt)("img",{src:"https://raftt-resources.s3.eu-central-1.amazonaws.com/web-assets/run_on_raftt_workload.png",alt:"Configure the Run on Raftt Workload Before launch task"}))),(0,r.kt)(o.Z,{value:"VSCode",label:"VS Code",mdxType:"TabItem"},(0,r.kt)("p",null,"First we create the before launch task, by adding this to ",(0,r.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/docs/editor/tasks"},(0,r.kt)("inlineCode",{parentName:"a"},"tasks.json")),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "label": "build-my-deployment",\n    "type": "shell",\n    "command": "raftt sh my-deployment -c builder -- go build -o /out/artifact main.go",\n    "group": "build",\n    "detail": "Build my-deployment"\n}\n')),(0,r.kt)("p",null,"And then reference this in your debug/run configuration in the ",(0,r.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/Docs/editor/debugging#_launch-configurations"},(0,r.kt)("inlineCode",{parentName:"a"},"launch.json")),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "name": "my-deployment",\n    "type": "go",\n    "request": "launch",\n    "mode": "exec",\n    "program": "/path/to/artifact/dir/artifact",\n    "raftt": {\n        "workload": "my-deployment"\n    },\n    "preLaunchTask": "build-my-deployment"\n}\n')))),(0,r.kt)("p",null,"More information on setting uo debug and run configurations is available in the ",(0,r.kt)("a",{parentName:"p",href:"../debugging"},"debugging section"),"."))}m.isMDXComponent=!0}}]);