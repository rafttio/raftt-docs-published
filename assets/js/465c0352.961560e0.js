"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[820],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=o,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||r;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294),o=n(4334);const r="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(r,i),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>w});var a=n(7462),o=n(7294),r=n(4334),i=n(2466),l=n(6775),s=n(1980),p=n(7392),u=n(12);function d(e){return function(e){var t;return(null==(t=o.Children.map(e,(e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:o}}=e;return{value:t,label:n,attributes:a,default:o}}))}function c(e){const{values:t,children:n}=e;return(0,o.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,p.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.k6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(r),(0,o.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(a.location.search);t.set(r,e),a.replace({...a.location,search:t.toString()})}),[r,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,r=c(e),[i,l]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:r}))),[s,p]=h({queryString:n,groupId:a}),[d,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,r]=(0,u.Nk)(n);return[a,(0,o.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:a}),k=(()=>{const e=s??d;return m({value:e,tabValues:r})?e:null})();(0,o.useLayoutEffect)((()=>{k&&l(k)}),[k]);return{selectedValue:i,selectValue:(0,o.useCallback)((e=>{if(!m({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),p(e),f(e)}),[p,f,r]),tabValues:r}}var k=n(2389);const g="tabList__CuJ",y="tabItem_LNqP";function b(e){let{className:t,block:n,selectedValue:l,selectValue:s,tabValues:p}=e;const u=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.o5)(),c=e=>{const t=e.currentTarget,n=u.indexOf(t),a=p[n].value;a!==l&&(d(t),s(a))},m=e=>{var t;let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=u.indexOf(e.currentTarget)+1;n=u[t]??u[0];break}case"ArrowLeft":{const t=u.indexOf(e.currentTarget)-1;n=u[t]??u[u.length-1];break}}null==(t=n)||t.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t)},p.map((e=>{let{value:t,label:n,attributes:i}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:c},i,{className:(0,r.Z)("tabs__item",y,null==i?void 0:i.className,{"tabs__item--active":l===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:a}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===a));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function N(e){const t=f(e);return o.createElement("div",{className:(0,r.Z)("tabs-container",g)},o.createElement(b,(0,a.Z)({},e,t)),o.createElement(v,(0,a.Z)({},e,t)))}function w(e){const t=(0,k.Z)();return o.createElement(N,(0,a.Z)({key:String(t)},e))}},9840:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var a=n(7462),o=(n(7294),n(3905)),r=n(4866),i=n(5162);const l={title:"Connect Mode Tutorial"},s="Tutorial Using a Sample Online Boutique App",p={unversionedId:"basics/tutorials/connect_mode",id:"basics/tutorials/connect_mode",title:"Connect Mode Tutorial",description:"Overview",source:"@site/docs/basics/tutorials/connect_mode.md",sourceDirName:"basics/tutorials",slug:"/basics/tutorials/connect_mode",permalink:"/basics/tutorials/connect_mode",draft:!1,tags:[],version:"current",frontMatter:{title:"Connect Mode Tutorial"},sidebar:"tutorialSidebar",previous:{title:"Orchestration Mode Tutorial",permalink:"/basics/tutorials/orchestration_mode"},next:{title:"Onboard Your Project",permalink:"/basics/onboard_project"}},u={},d=[{value:"Overview",id:"overview",level:2},{value:"The Project",id:"the-project",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Install Raftt",id:"install-raftt",level:3},{value:"Deploying the Project",id:"deploying-the-project",level:2},{value:"Development Mode",id:"development-mode",level:2},{value:"Let&#39;s Develop!",id:"lets-develop",level:2},{value:"Change the page title",id:"change-the-page-title",level:3},{value:"Fix the recommendations engine",id:"fix-the-recommendations-engine",level:3},{value:"Debugging the Workloads",id:"debugging-the-workloads",level:3},{value:"Configure Additional Workloads",id:"configure-additional-workloads",level:2},{value:"The <code>.raftt</code> File - the Env Configuration File",id:"the-raftt-file---the-env-configuration-file",level:3},{value:"Mount the Source Code",id:"mount-the-source-code",level:3},{value:"Add an Annotation",id:"add-an-annotation",level:3},{value:"Monitor Dependency Changes",id:"monitor-dependency-changes",level:3},{value:"Additional Capabilities",id:"additional-capabilities",level:3},{value:"Try It With Your Project",id:"try-it-with-your-project",level:2}],c={toc:d};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"tutorial-using-a-sample-online-boutique-app"},"Tutorial Using a Sample Online Boutique App"),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"In this tutorial you'll experience the basic usage of Raftt operating in connect mode - adding development capabilities to an existing env deployed to a Kubernetes namespace.",(0,o.kt)("br",{parentName:"p"}),"\n","If you wish to try Raftt operating in orchestration mode - the mode in which Raftt is also responsible for spawning and managing dev envs, see our ",(0,o.kt)("a",{parentName:"p",href:"/basics/tutorials/orchestration_mode"},"orchestration mode tutorial"),"."),(0,o.kt)("p",null,"This tutorial includes the following steps -"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Spawn the Online Boutique demo project - the project used for this tutorial"),(0,o.kt)("li",{parentName:"ol"},"Add Raftt to the env to enable an excellent developer experience (DevX)"),(0,o.kt)("li",{parentName:"ol"},"Experience the DevX first-hand by changing the project's code - fixing a backend bug and modifying the UX"),(0,o.kt)("li",{parentName:"ol"},"Interactively debug the project"),(0,o.kt)("li",{parentName:"ol"},"Onboard an additional workload to Raftt to allow developing it easily and efficiently")),(0,o.kt)("h2",{id:"the-project"},"The Project"),(0,o.kt)("p",null,"We forked ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/rafttio/online-boutique"},"Online Boutique"),", a sample microservices application (",(0,o.kt)("a",{parentName:"p",href:"https://github.com/GoogleCloudPlatform/microservices-demo"},"originally")," created by Google), as a sample project to help you onboard Raftt quickly, without using your code."),(0,o.kt)("p",null,"The project includes microservices written in a variety of languages, but familiarity with these languages isn't necessary to complete the tutorial."),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{src:"https://raftt-resources.s3.eu-central-1.amazonaws.com/docs/tutorial/raftt_online_boutique.jpg",alt:"Online Boutique"})),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"This tutorial demonstrates Raftt's ability to enhance the development experience of existing K8s envs. It means that you need a K8s cluster (local or remote) on which you can deploy the demo environment using helm charts. You also need kubectl and helm installed locally (see ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/tools/#kubectl"},"here")," and ",(0,o.kt)("a",{parentName:"p",href:"https://helm.sh/docs/intro/install/"},"here")," for installation guides).",(0,o.kt)("br",{parentName:"p"}),"\n","If you don't have a cluster but want to try this tutorial, you can use tools like ",(0,o.kt)("a",{parentName:"p",href:"https://minikube.sigs.k8s.io/docs/start/"},"minikube")," to create a local Kubernetes cluster.  "),(0,o.kt)("h3",{id:"install-raftt"},"Install Raftt"),(0,o.kt)(r.Z,{className:"unique-tabs",groupId:"operating-systems",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"macOS",label:"macOS",default:!0,mdxType:"TabItem"},(0,o.kt)("p",null,"Use ",(0,o.kt)("a",{parentName:"p",href:"https://brew.sh"},"Homebrew")," or cURL to install Raftt CLI on macOS."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plaintext"},"brew install rafttio/tap/raftt  \n")),(0,o.kt)("p",null,"Or"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plaintext"},"curl -fsSL get.raftt.io/install | bash\n"))),(0,o.kt)(i.Z,{value:"linux",label:"Linux",mdxType:"TabItem"},(0,o.kt)("p",null,"Use cURL to install Raftt CLI on Linux."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plaintext"},"curl -fsSL get.raftt.io/install | bash\n"))),(0,o.kt)(i.Z,{value:"windows",label:"Windows",mdxType:"TabItem"},(0,o.kt)("p",null,"Download and run ",(0,o.kt)("a",{parentName:"p",href:"https://get.raftt.io/windowsinstall"},"Raftt installer (x64)"),"."),(0,o.kt)("admonition",{title:"Note",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"The installation adds the Raftt binary to your ",(0,o.kt)("inlineCode",{parentName:"p"},"PATH"),". You must start a new shell after the installation to have the up-to-date environment variables.")))),(0,o.kt)("admonition",{title:"Validate",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"To verify the installation was successful, run ",(0,o.kt)("inlineCode",{parentName:"p"},"raftt version")," in your shell.")),(0,o.kt)("h2",{id:"deploying-the-project"},"Deploying the Project"),(0,o.kt)("p",null,"In this section, we'll deploy the Online Boutique app to your cluster. Take the following steps -"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Make sure that your Kubernetes context is correct")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plaintext"},"kubectl config get-contexts\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Clone the Online Boutique repo")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plaintext"},"git clone https://github.com/rafttio/online-boutique\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"cd")," into the repo's folder -  ")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plaintext"},"cd online-boutique\n")),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Create a namespace called ",(0,o.kt)("inlineCode",{parentName:"li"},"demo")," and deploy the app in it -")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plaintext"},"helm install -n demo --create-namespace demo ./helm-chart\n")),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"See all pods were started successfully -")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plaintext"},"kubectl get pods -n demo\n")),(0,o.kt)("ol",{start:6},(0,o.kt)("li",{parentName:"ol"},"After connecting Raftt to the env in the next section, you'll be able to access the application from your browser.")),(0,o.kt)("h2",{id:"development-mode"},"Development Mode"),(0,o.kt)("p",null,"Now we're getting to the interesting part - adding advanced dev capabilities to the existing env, using Raftt. To do it, perform the following actions -"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Add Raftt to the environment by running ",(0,o.kt)("inlineCode",{parentName:"li"},"raftt connect demo"),(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"You will be prompted to log in to Raftt using one of several third-party services (Google, GitHub, etc.)."),(0,o.kt)("li",{parentName:"ol"},"Once completed, you can see a list of all the namespace workloads.")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plaintext"},"raftt connect demo\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Convert some of the workloads into ",(0,o.kt)("a",{parentName:"li",href:"/concepts/dev_mode"},"dev-mode")," - ",(0,o.kt)("inlineCode",{parentName:"li"},"raftt dev frontend recommendations"),". It will allow you to experience the DevX provided by Raftt in the following tutorial sections.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plaintext"},"raftt dev frontend recommendations\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Run ",(0,o.kt)("inlineCode",{parentName:"li"},"raftt status"),' to see they are marked as in "dev-mode" and the list of mapped ports.')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plaintext"},"raftt status\n")),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{src:"https://raftt-resources.s3.eu-central-1.amazonaws.com/docs/tutorial/connect_mode_status.png",alt:"`raftt status` output"})),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"As seen in the command output, the open port of the frontend container is mapped to the local port 8888. Let's see what happens when you ",(0,o.kt)("a",{parentName:"li",href:"http://localhost:8888"},"browse it"),".")),(0,o.kt)("details",null,(0,o.kt)("summary",null,(0,o.kt)("h3",{style:{marginBottom:0}},"Under the Hood")),(0,o.kt)("p",null,"If you're interested in the inner workings of Raftt, this section explains what happened internally when running the ",(0,o.kt)("inlineCode",{parentName:"p"},"raftt connect")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"raftt dev")," commands. You can jump to the ",(0,o.kt)("a",{parentName:"p",href:"#lets-develop"},"next section"),", if you just want to continue with the tutorial."),(0,o.kt)("p",null,"When you ran ",(0,o.kt)("inlineCode",{parentName:"p"},"raftt connect"),", you started a sequence of events -"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Raftt's env controller is added to your namespace (a workload named sandcastle)."),(0,o.kt)("li",{parentName:"ol"},"Your repo is mirrored to the cluster and live syncing is started."),(0,o.kt)("li",{parentName:"ol"},"You can start using ",(0,o.kt)("inlineCode",{parentName:"li"},"raftt sh")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"raftt logs")," commands to inspect all your workloads.")),(0,o.kt)("p",null,"After connecting to the env, you got the ",(0,o.kt)("inlineCode",{parentName:"p"},"frontend")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"recommendations")," deployments into ",(0,o.kt)("a",{parentName:"p",href:"/concepts/dev_mode"},"dev-mode"),", using ",(0,o.kt)("inlineCode",{parentName:"p"},"raftt dev frontend recommendations"),". This triggered the following actions -"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"The dev-mode definitions of the ",(0,o.kt)("inlineCode",{parentName:"li"},"frontend")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"recommendations")," workloads are read from the ",(0,o.kt)("a",{parentName:"li",href:"/config/rafttfile"},".raftt")," file (found ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/rafttio/online-boutique/blob/master/env.raftt"},"here"),")."),(0,o.kt)("li",{parentName:"ol"},"The existing ",(0,o.kt)("inlineCode",{parentName:"li"},"frontend")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"recommendations")," deployments are taken down (scaled down to 0 replicas in case of deployments) and new deployments are spawned."),(0,o.kt)("li",{parentName:"ol"},"The new deployments differ from the old ones in the following characteristics -",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"Their name has the suffix ",(0,o.kt)("inlineCode",{parentName:"li"},"-raftt"),". This is only true for deployments and replica sets. All other resource kinds are replaced if they enter dev-mode."),(0,o.kt)("li",{parentName:"ol"},"The lifecycle of the container is split from the lifecycle of its main process. You can restart the process without respawning the container, and the main process crashing doesn't result in the termination of the container, allowing much better inspection. See ",(0,o.kt)("a",{parentName:"li",href:"/concepts/containers"},"here")," for more information."),(0,o.kt)("li",{parentName:"ol"},"All changes defined in the ",(0,o.kt)("inlineCode",{parentName:"li"},".raftt")," file for the specified resources are applied. In this case, the changes are -",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"Code is now continuously synced to the container, allowing you to write code in your favorite local IDE and see the changes affect the cluster (lines 8 and 13)."),(0,o.kt)("li",{parentName:"ol"},"A port is mapped locally from the ",(0,o.kt)("inlineCode",{parentName:"li"},"frontend")," container (line 9)."))),(0,o.kt)("li",{parentName:"ol"},"You can now run all raftt commands that are relevant to workloads, e.g., ",(0,o.kt)("inlineCode",{parentName:"li"},"restart")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"rebuild"),"."))),(0,o.kt)("li",{parentName:"ol"},"All the rest of the namespace resources (those not specified in the ",(0,o.kt)("inlineCode",{parentName:"li"},"dev"),"/",(0,o.kt)("inlineCode",{parentName:"li"},"rebuild")," command) remain unchanged."))),(0,o.kt)("h2",{id:"lets-develop"},"Let's Develop!"),(0,o.kt)("p",null,"Since your env is up and you got some workloads into dev-mode you can play around with the code and see how your changes affect the app!"),(0,o.kt)("h3",{id:"change-the-page-title"},"Change the page title"),(0,o.kt)("p",null,"We'll start with an easy to do and easy to see change - change the title.",(0,o.kt)("br",{parentName:"p"}),"\n","Let's say you want to bring some honesty into your marketing, and admit that the products you present on the frontpage aren't actually hot, they are the entire catalog. To do that, you need to change the string inside the ",(0,o.kt)("inlineCode",{parentName:"p"},"h3")," tag in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/rafttio/online-boutique/blob/master/src/frontend/templates/home.html#L36"},(0,o.kt)("inlineCode",{parentName:"a"},"home.html")),' line 36 to "All Products".'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},"<h3>All Products</h3>\n")),(0,o.kt)("p",null,"To see this change taking effect, run ",(0,o.kt)("inlineCode",{parentName:"p"},"raftt restart frontend")," to restart the workload's main process."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plaintext"},"raftt restart frontend\n")),(0,o.kt)("h3",{id:"fix-the-recommendations-engine"},"Fix the recommendations engine"),(0,o.kt)("p",null,"If you click any of the products, you'll see the recommendation engine is broken - it always shows the same product. This must be solved so you can push people to spend more in your boutique!",(0,o.kt)("br",{parentName:"p"}),"\n","To solve this we need to modify the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/rafttio/online-boutique/blob/master/src/recommendationservice/recommendation_server.py#L78"},"code")," of the recommendation engine workload. On line 78, you can see that it doesn't iterate properly over the ",(0,o.kt)("inlineCode",{parentName:"p"},"filtered_products")," list - try replacing ",(0,o.kt)("inlineCode",{parentName:"p"},"filtered_products[0]")," with ",(0,o.kt)("inlineCode",{parentName:"p"},"filtered_products[i]"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"prod_list = [filtered_products[i] for i in indices]\n")),(0,o.kt)("p",null,"After fixing the bug you need to run ",(0,o.kt)("inlineCode",{parentName:"p"},"raftt restart recommendations")," to restart the workload's main process.  "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plaintext"},"raftt restart recommendations\n")),(0,o.kt)("p",null,"Note the fast cycle time - with Raftt it only takes seconds from code change to seeing it in the env - no need to rebuild and redeploy images, which takes from minutes to over an hour in some cases."),(0,o.kt)("h3",{id:"debugging-the-workloads"},"Debugging the Workloads"),(0,o.kt)("p",null,"Once a workload is in dev-mode, you can debug it using Visual Studio Code or any JetBrains IDE. For details on how to configure debug configuration see the ",(0,o.kt)("a",{parentName:"p",href:"../../debugging/"},"debugging")," docs section. For this tutorial we already have the debug configurations committed to the repo, so you don't need to configure anything.  "),(0,o.kt)("p",null,"To debug the application, follow these steps -"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Open the project in the IDE."),(0,o.kt)("li",{parentName:"ol"},"Install Raftt's plugin from the marketplace (",(0,o.kt)("a",{parentName:"li",href:"https://plugins.jetbrains.com/plugin/18931-raftt"},"JetBrains"),", ",(0,o.kt)("a",{parentName:"li",href:"https://marketplace.visualstudio.com/items?itemName=Raftt.vscode-raftt"},"VS Code"),")"),(0,o.kt)("li",{parentName:"ol"},"Add a breakpoint inside the function ",(0,o.kt)("inlineCode",{parentName:"li"},"ListRecommendations")," in the file ",(0,o.kt)("inlineCode",{parentName:"li"},"recommendation_server.py"),"."),(0,o.kt)("li",{parentName:"ol"},"Start debugging using the debug configuration ",(0,o.kt)("inlineCode",{parentName:"li"},"recommendations"),".",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"JetBrains IDEs may ask you to configure a Python interpreter. You can ignore the request or choose any interpreter of your choice. It doesn't affect the remote environment that uses its own interpreter."))),(0,o.kt)("li",{parentName:"ol"},"Click one of the products to get to its page."),(0,o.kt)("li",{parentName:"ol"},"Success! - it stopped where you added the breakpoint."),(0,o.kt)("li",{parentName:"ol"},"Debug the remote service as if it were local.")),(0,o.kt)("p",null,"Raftt currently supports interactively debugging Python, Go, Node.js and Java code using Visual Studio Code or any JetBrains IDE. Join our ",(0,o.kt)("a",{parentName:"p",href:"https://join.slack.com/t/rafttcommunity/shared_invite/zt-196nlb5ra-rYPWEqQF~ETdgx9aqWANnw"},"Slack community")," or ",(0,o.kt)("a",{parentName:"p",href:"https://raftt.io/contact"},"contact us")," to let us know need support for other languages, adding such support is very fast."),(0,o.kt)("h2",{id:"configure-additional-workloads"},"Configure Additional Workloads"),(0,o.kt)("p",null,"The Online Boutique repo comes pre-configured for developing the ",(0,o.kt)("inlineCode",{parentName:"p"},"frontend")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"recommendations")," workloads using Raftt. Now let's add the configuration for the ",(0,o.kt)("inlineCode",{parentName:"p"},"email")," service. To enjoy the dev capabilities provided by Raftt, you need to add a few definitions for the ",(0,o.kt)("inlineCode",{parentName:"p"},"email")," service in the env definition file."),(0,o.kt)("h3",{id:"the-raftt-file---the-env-configuration-file"},"The ",(0,o.kt)("inlineCode",{parentName:"h3"},".raftt")," File - the Env Configuration File"),(0,o.kt)("p",null,"A ",(0,o.kt)("inlineCode",{parentName:"p"},".raftt")," file is a file in which your Raftt environment is defined. It is written in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/bazelbuild/starlark"},"Starlark")," - a Python-like scripting language. It usually starts with importing the resources definitions. In connect mode the definitions are usually loaded using the ",(0,o.kt)("a",{parentName:"p",href:"pathname:///rafttfile#api.namespace_resources"},(0,o.kt)("inlineCode",{parentName:"a"},"namespace_resources"))," function, but there are ",(0,o.kt)("a",{parentName:"p",href:"/config/rafttfile#importing-resource-definitions"},"other ways")," to load them. Once imported (to a ",(0,o.kt)("a",{parentName:"p",href:"/config/rafttfile#resources"},(0,o.kt)("inlineCode",{parentName:"a"},"Resources"))," object), the definitions can be modified and enhanced. For the modification to take effect you need to use the ",(0,o.kt)("a",{parentName:"p",href:"pathname:///rafttfile#api.deploy"},(0,o.kt)("inlineCode",{parentName:"a"},"deploy()"))," function with the relevant resource/s as an argument. In this tutorial's case, we already have the calls to ",(0,o.kt)("a",{parentName:"p",href:"pathname:///rafttfile#api.namespace_resources"},(0,o.kt)("inlineCode",{parentName:"a"},"namespace_resources"))," and ",(0,o.kt)("a",{parentName:"p",href:"pathname:///rafttfile#api.deploy"},(0,o.kt)("inlineCode",{parentName:"a"},"deploy()"))," in place, so you just need to get the handle to the relevant resource, and call the relevant functions between these two calls.",(0,o.kt)("br",{parentName:"p"}),"\n","On every call to ",(0,o.kt)("inlineCode",{parentName:"p"},"raftt dev RESOURCE")," (and every following call to ",(0,o.kt)("inlineCode",{parentName:"p"},"raftt rebuild RESOURCE"),") the ",(0,o.kt)("inlineCode",{parentName:"p"},".raftt")," file is interpreted and the currently running instance of ",(0,o.kt)("inlineCode",{parentName:"p"},"RESOURCE")," is replaced by the one defined in the ",(0,o.kt)("inlineCode",{parentName:"p"},".raftt")," file. All other resources remain unchanged."),(0,o.kt)("h3",{id:"mount-the-source-code"},"Mount the Source Code"),(0,o.kt)("p",null,"Mounting your code to the container allows you to enjoy hot-reloading of files into the container which enables a much shorter dev cycle. Depending on the language and framework used, it will require something between refreshing a page to building and restarting the main process. In any case it's much faster than rebuilding the whole container, which is rarely required when using Raftt."),(0,o.kt)("p",null,"To sync a local folder to the container, you can use the ",(0,o.kt)("a",{parentName:"p",href:"pathname:///rafttfile#api.repo_volume"},(0,o.kt)("inlineCode",{parentName:"a"},"repo_volume()"))," and ",(0,o.kt)("a",{parentName:"p",href:"pathname:///rafttfile#api.workload.Workload.mount"},(0,o.kt)("inlineCode",{parentName:"a"},"mount()"))," functions (see ",(0,o.kt)("a",{parentName:"p",href:"/config/rafttfile#volumes-and-mounts"},"here")," for more details).",(0,o.kt)("br",{parentName:"p"}),"\n","To understand what is the exact folder that needs to be mounted, you can refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/rafttio/online-boutique/blob/master/src/emailservice/Dockerfile#L40"},"Dockerfile")," of the ",(0,o.kt)("inlineCode",{parentName:"p"},"email")," service.",(0,o.kt)("br",{parentName:"p"}),"\n","As you can see in lines 40 and 49, the entry point is ",(0,o.kt)("inlineCode",{parentName:"p"},"email_server.py")," and it runs from the workdir which is ",(0,o.kt)("inlineCode",{parentName:"p"},"/email-server"),". It is copied to the image from the context of the Dockerfile execution (line 46).\nIt means that the context of the Dockerfile - ",(0,o.kt)("inlineCode",{parentName:"p"},"src/emailservice")," needs to be mapped to the workload's workdir - ",(0,o.kt)("inlineCode",{parentName:"p"},"/email_service"),". In the syntax of the ",(0,o.kt)("inlineCode",{parentName:"p"},".raftt")," file, it will look like this (using the ",(0,o.kt)("inlineCode",{parentName:"p"},"repo_root")," variable that was already assigned in the first line of ",(0,o.kt)("inlineCode",{parentName:"p"},"env.raftt"),") -"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'email = resources.deployments["email"]\nemail.mount(repo_root.subpath("src/emailservice"), "/email_server")\n')),(0,o.kt)("p",null,"To get ",(0,o.kt)("inlineCode",{parentName:"p"},"email")," into dev-mode and apply these changes, run"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plaintext"},"raftt dev email\n")),(0,o.kt)("h3",{id:"add-an-annotation"},"Add an Annotation"),(0,o.kt)("p",null,"You can change many of the workload attributes using the ",(0,o.kt)("inlineCode",{parentName:"p"},".raftt")," file. You can find a list of all modifiable attributes in our ",(0,o.kt)("a",{parentName:"p",href:"/config/rafttfile#directly-modifying-resources"},"docs"),". In this example we'll add an annotation using the following line of code -"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'email.metadata.annotations["raftt"] = "In dev-mode!!!"\n')),(0,o.kt)("p",null,"Apply this change using"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plaintext"},"raftt rebuild email\n")),(0,o.kt)("p",null,"Or if it's not yet in dev-mode, use"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plaintext"},"raftt dev email\n")),(0,o.kt)("p",null,"You can verify it worked by reading the deployment annotation by running"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plaintext"},"kubectl -n demo get deploy email-raftt -o jsonpath='{.metadata.annotations.raftt}'\n")),(0,o.kt)("p",null,"The expected output is -"),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{src:"https://raftt-resources.s3.eu-central-1.amazonaws.com/docs/tutorial/verify_annotation.png",alt:"Verify annotation added"})),(0,o.kt)("h3",{id:"monitor-dependency-changes"},"Monitor Dependency Changes"),(0,o.kt)("p",null,"If you wish to add a new dependency to your Python code, you change the ",(0,o.kt)("inlineCode",{parentName:"p"},"requirements.txt")," and then run ",(0,o.kt)("inlineCode",{parentName:"p"},"pip install -r requirements.txt")," inside the workload. Raftt could monitor the file and run it automatically every time you change it, using Raftt's ",(0,o.kt)("a",{parentName:"p",href:"/config/rafttfile#file-watching"},"file watching mechanism"),".\nThis can be done by adding the following snippet to ",(0,o.kt)("inlineCode",{parentName:"p"},"env.raftt")," -"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'register_hook(\n    on=events.OnFileChanged(\n        workload=email,\n        patterns="/email_server/requirements.txt"\n    ),\n    do=actions.CMD(\n        workload=email,\n        cmd=["pip", "install", "-r", "requirements.txt"]\n    )\n)\n')),(0,o.kt)("p",null,"Apply this change using"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plaintext"},"raftt rebuild email\n")),(0,o.kt)("p",null,"After applying this change, modify the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/rafttio/online-boutique/blob/main/src/emailservice/requirements.txt"},(0,o.kt)("inlineCode",{parentName:"a"},"requirements.txt"))," file of the ",(0,o.kt)("inlineCode",{parentName:"p"},"email")," service and check out the hook logs using"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plaintext"},"raftt logs --hooks\n")),(0,o.kt)("h3",{id:"additional-capabilities"},"Additional Capabilities"),(0,o.kt)("p",null,"You can do many other things in your ",(0,o.kt)("inlineCode",{parentName:"p"},".raftt")," file that are beyond what we can demonstrate in a short tutorial. You can find the full documentation of the ",(0,o.kt)("inlineCode",{parentName:"p"},".raftt")," file in our ",(0,o.kt)("a",{parentName:"p",href:"/config/rafttfile"},"docs"),", to which we already referred many times on this tutorial."),(0,o.kt)("h2",{id:"try-it-with-your-project"},"Try It With Your Project"),(0,o.kt)("p",null,"After seeing how easy it is to work with Raftt, you're welcome to use raftt on any project of yours - open source or private.",(0,o.kt)("br",{parentName:"p"}),"\n","We'd love to hear about your experience in ",(0,o.kt)("a",{parentName:"p",href:"https://join.slack.com/t/rafttcommunity/shared_invite/zt-196nlb5ra-rYPWEqQF~ETdgx9aqWANnw"},"our Slack community")," or by ",(0,o.kt)("a",{parentName:"p",href:"https://raftt.io/contact"},"contacting us")," directly."))}m.isMDXComponent=!0}}]);