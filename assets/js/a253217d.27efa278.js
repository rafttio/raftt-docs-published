"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[952],{3905:function(e,t,n){n.d(t,{Zo:function(){return h},kt:function(){return m}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},h=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,p=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return n?o.createElement(p,i(i({ref:t},h),{},{components:n})):o.createElement(p,i({ref:t},h))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8674:function(e,t,n){n.r(t),n.d(t,{assets:function(){return h},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),i=["components"],s={title:"Welcome to Raftt"},l="Welcome to Raftt",c={unversionedId:"intro/raftt",id:"intro/raftt",title:"Welcome to Raftt",description:"What is Raftt?",source:"@site/docs/intro/raftt.md",sourceDirName:"intro",slug:"/intro/raftt",permalink:"/docs/intro/raftt",draft:!1,tags:[],version:"current",frontMatter:{title:"Welcome to Raftt"},sidebar:"tutorialSidebar",previous:{title:"Intro",permalink:"/docs/intro"},next:{title:"How Raftt Works?",permalink:"/docs/intro/how_raftt_works"}},h={},u=[{value:"What is Raftt?",id:"what-is-raftt",level:2},{value:"Who Should Use Raftt?",id:"who-should-use-raftt",level:2},{value:"What Can You Do With Raftt?",id:"what-can-you-do-with-raftt",level:2},{value:"The Challenges of the Current Solutions",id:"the-challenges-of-the-current-solutions",level:2},{value:"Local Machine Development",id:"local-machine-development",level:3},{value:"Locally Orchestrated Environments",id:"locally-orchestrated-environments",level:3},{value:"Remote Machine Development",id:"remote-machine-development",level:3},{value:"Remote Kubernetes Dev-cluster",id:"remote-kubernetes-dev-cluster",level:3}],d={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"welcome-to-raftt"},"Welcome to Raftt"),(0,a.kt)("h2",{id:"what-is-raftt"},"What is Raftt?"),(0,a.kt)("p",null,"Raftt creates modern, flexible environments synced with existing tools, features, and workflows to help developers explore and develop freely. Our cloud-based platform liberates developers from the limitations of their hardware and local environments, allowing them to spawn an unlimited number of environments and collaborate and share without sacrificing stability or performance."),(0,a.kt)("p",null,"You can switch, branch, and share environments without changing tools or altering existing workflows. Concentrate on coding with our environment-friendly solution. Built by world-class experts and professionals, Raftt helps developers spend more time on innovation."),(0,a.kt)("h2",{id:"who-should-use-raftt"},"Who Should Use Raftt?"),(0,a.kt)("p",null,"We're here to help developers who are tired of drift, decay, and overhead from their local development environment and are exhausted from spending too much time stabilizing and maintaining it.",(0,a.kt)("br",{parentName:"p"}),"\n","Unlike other remote or browser-based dev environment solutions, Raftt focuses purely on the development process. With Raftt, debugging is easy, and environments can be shared via URL with anyone."),(0,a.kt)("h2",{id:"what-can-you-do-with-raftt"},"What Can You Do With Raftt?"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Create a smooth dev experience on top of existing K8s dev envs, including live-reload and out-of-the-box debugging."),(0,a.kt)("li",{parentName:"ol"},"Run multiple environments without overloading your machine."),(0,a.kt)("li",{parentName:"ol"},"Write code that runs remotely, but feels as if it is 100% local."),(0,a.kt)("li",{parentName:"ol"},"Collaborate with your team and external stakeholders by sharing access to your environments."),(0,a.kt)("li",{parentName:"ol"},"Easily create a consistent dev environment for the whole team."),(0,a.kt)("li",{parentName:"ol"},"Develop and debug your microservices in a production-like environment without any of the container-related pains.")),(0,a.kt)("h2",{id:"the-challenges-of-the-current-solutions"},"The Challenges of the Current Solutions"),(0,a.kt)("h3",{id:"local-machine-development"},"Local Machine Development"),(0,a.kt)("p",null,"Most devs handle the challenges of developing a microservice environment by running the main processes of the containers as processes on their local machine. There are several drawbacks to this approach -"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Setup and maintenance - devs dedicate a lot of time and resources to maintain an environment. Moreover, the env requirements keep changing, so the maintenance work is never done."),(0,a.kt)("li",{parentName:"ol"},'Drift between dev environments - devs tend to adjust their environment and do whatever it takes to make things work. This creates the "works for me" phenomenon - having different dev environments causes different behavior between devs.'),(0,a.kt)("li",{parentName:"ol"},"Context switching is hard - switching to a different branch often breaks the environment due to local non-committed dependencies."),(0,a.kt)("li",{parentName:"ol"},"Different from the production environment - running outside of containers can change the env behavior.")),(0,a.kt)("h3",{id:"locally-orchestrated-environments"},"Locally Orchestrated Environments"),(0,a.kt)("p",null,"Many developers work on their micro-services environments locally, using Docker Compose, Minikube, or similar tools. This approach can be more helpful, as it gives the user lots of control over the environment while enforcing some consistency between team members. However, this approach also has several drawbacks -"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Limited resources - good dev computers might have lots of CPU and RAM, but running a complex environment composed of many containers can be a heavy task, even for high-end computers."),(0,a.kt)("li",{parentName:"ol"},"While reduced, environment drift is still a problem - dependencies and hacks that are not a part of the containers still create drift."),(0,a.kt)("li",{parentName:"ol"},"Singleton environment - the environment is still a single instance, so context or branch switching that requires changes at the environment level is expensive - the containers need to be rebuilt and restarted.",(0,a.kt)("br",{parentName:"li"}),"Using persistent volumes aggravates the problems since it's even harder to switch between states of the storage.")),(0,a.kt)("h3",{id:"remote-machine-development"},"Remote Machine Development"),(0,a.kt)("p",null,"A newer approach that tries to tackle the challenges of running your environment locally is using a cloud machine as a dev machine. This approach does deal with the limited resources drawback, but the rest of the issues (drift, multi-environments) remain problematic."),(0,a.kt)("h3",{id:"remote-kubernetes-dev-cluster"},"Remote Kubernetes Dev-cluster"),(0,a.kt)("p",null,"Another modern approach is having a pipeline that creates dev/preview envs on a remote dev cluster, usually having each spawned env in a namespace. Envs are either created by manual triggers or as a part of a GitOps workflow, e.g. on every PR. This approach does enjoy some of the benefits of remote dev envs, such as less limited resources and the ability to be more similar to production, but it lacks in some other important criteria for dev-envs -"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Long dev-loop - it's easy to create envs, but it's not easy to use them for actual development. Quick iteration is a critical part of the dev lifecycle. Being able to modify code, see the effects of the change and reiterate must take seconds. In most cases, deploying changes requires re-running the pipeline which can take between minutes to an hour. In most cases interactive debugging is out of question, which causes another hit on dev velocity."),(0,a.kt)("li",{parentName:"ol"},"Maintenance costs - maintaining the env spawning system can be expansive, and the more features are added to it, the more expansive it gets. This leads in many cases to under-maintenance which leads to rot, which hurts the dev-velocity even harder.")))}m.isMDXComponent=!0}}]);