"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[382],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=u(n),d=r,m=h["".concat(s,".").concat(d)]||h[d]||p[d]||o;return n?a.createElement(m,i(i({ref:t},c),{},{components:n})):a.createElement(m,i({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294),r=n(4334);const o="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,i),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>N});var a=n(7462),r=n(7294),o=n(4334),i=n(2466),l=n(6775),s=n(1980),u=n(7392),c=n(12);function p(e){return function(e){var t;return(null==(t=r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function d(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=h(e),[i,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[s,u]=m({queryString:n,groupId:a}),[p,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,c.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),g=(()=>{const e=s??p;return d({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{g&&l(g)}),[g]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),f(e)}),[u,f,o]),tabValues:o}}var g=n(2389);const k="tabList__CuJ",b="tabItem_LNqP";function y(e){let{className:t,block:n,selectedValue:l,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.o5)(),h=e=>{const t=e.currentTarget,n=c.indexOf(t),a=u[n].value;a!==l&&(p(t),s(a))},d=e=>{var t;let n=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}null==(t=n)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>c.push(e),onKeyDown:d,onClick:h},i,{className:(0,o.Z)("tabs__item",b,null==i?void 0:i.className,{"tabs__item--active":l===t})}),n??t)})))}function w(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function v(e){const t=f(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",k)},r.createElement(y,(0,a.Z)({},e,t)),r.createElement(w,(0,a.Z)({},e,t)))}function N(e){const t=(0,g.Z)();return r.createElement(v,(0,a.Z)({key:String(t)},e))}},4555:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>u,toc:()=>p});var a=n(7462),r=(n(7294),n(3905)),o=n(4866),i=n(5162);const l={title:"Orchestration Mode Tutorial"},s="Tutorial Using Our Sample To-Do App",u={unversionedId:"basics/tutorials/orchestration_mode",id:"basics/tutorials/orchestration_mode",title:"Orchestration Mode Tutorial",description:"In this tutorial you'll walk through the basic usage of Raftt operating in orchestration mode. In orchestration mode Raftt is responsible for spawning and managing ephemeral dev envs, and providing a great developer experience while using them.",source:"@site/docs/basics/tutorials/orchestration_mode.md",sourceDirName:"basics/tutorials",slug:"/basics/tutorials/orchestration_mode",permalink:"/basics/tutorials/orchestration_mode",draft:!1,tags:[],version:"current",frontMatter:{title:"Orchestration Mode Tutorial"},sidebar:"tutorialSidebar",previous:{title:"Tutorials",permalink:"/basics/tutorials"},next:{title:"Connect Mode Tutorial",permalink:"/basics/tutorials/connect_mode"}},c={},p=[{value:"The project",id:"the-project",level:2},{value:"Your First <code>raftt up</code>",id:"your-first-raftt-up",level:2},{value:"Working With the Env",id:"working-with-the-env",level:2},{value:"Changing the Color of a Button",id:"changing-the-color-of-a-button",level:3},{value:"Debugging the Application",id:"debugging-the-application",level:3},{value:"Breaking the Code",id:"breaking-the-code",level:3},{value:"Branch Switching",id:"branch-switching",level:3},{value:"Collaborating With Other Team Members",id:"collaborating-with-other-team-members",level:2},{value:"Try It With Your Project",id:"try-it-with-your-project",level:2}],h={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"tutorial-using-our-sample-to-do-app"},"Tutorial Using Our Sample To-Do App"),(0,r.kt)("p",null,"In this tutorial you'll walk through the basic usage of Raftt operating in orchestration mode. In orchestration mode Raftt is responsible for spawning and managing ephemeral dev envs, and providing a great developer experience while using them.",(0,r.kt)("br",{parentName:"p"}),"\n","If you wish to try Raftt operating in connect mode, where Raftt adds developer experience features to existing envs, see our ",(0,r.kt)("a",{parentName:"p",href:"/basics/tutorials/connect_mode"},"connect mode tutorial"),"."),(0,r.kt)("h2",{id:"the-project"},"The project"),(0,r.kt)("p",null,"We created ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/rafttio/toodoo"},"TooDoo"),", a simple to-do application, as a sample project to help you onboard Raftt quickly, without using your code."),(0,r.kt)("p",null,"The project is mainly written in Python (Flask) with some Go, but familiarity with these languages isn't necessary to complete this tutorial."),(0,r.kt)("h2",{id:"your-first-raftt-up"},"Your First ",(0,r.kt)("inlineCode",{parentName:"h2"},"raftt up")),(0,r.kt)("p",null,"In this section, we'll get you up and running with your very own Raftt environment and explain what happens under the hood.\nTake the following steps -"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Clone the project's repo - ",(0,r.kt)("inlineCode",{parentName:"li"},"git clone https://github.com/rafttio/toodoo")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"cd")," into the repo's folder."),(0,r.kt)("li",{parentName:"ol"},"Run ",(0,r.kt)("inlineCode",{parentName:"li"},"raftt up")," and wait for ",(0,r.kt)("inlineCode",{parentName:"li"},"Environment is ready!")," to be printed.",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"You will be prompted to log in with your GitHub account."),(0,r.kt)("li",{parentName:"ol"},"Please note that building and deploying the images might take a minute or two."))),(0,r.kt)("li",{parentName:"ol"},"Run ",(0,r.kt)("inlineCode",{parentName:"li"},"raftt status")," to see the status of the environment services.")),(0,r.kt)("p",{align:"center"},(0,r.kt)("img",{src:"https://raftt-resources.s3.eu-central-1.amazonaws.com/docs/tutorial/status_main.png",alt:"raftt status output"})),(0,r.kt)("p",null,"As seen in the above screenshot, the open port of the web container is ",(0,r.kt)("a",{parentName:"p",href:"/concepts/port_map"},"mapped")," to the local port 3000. Let's see what happens when you ",(0,r.kt)("a",{parentName:"p",href:"http://localhost:3000/"},"browse it"),"."),(0,r.kt)("p",{align:"center"},(0,r.kt)("img",{src:"https://raftt-resources.s3.eu-central-1.amazonaws.com/docs/tutorial/TooDoo.png",alt:"TooDoo Screenshot"})),(0,r.kt)("p",null,"You can now play around with the app - add, remove, and edit tasks as you wish."),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("h3",{style:{marginBottom:0}},"Under the Hood")),(0,r.kt)("p",null,"When you ran ",(0,r.kt)("inlineCode",{parentName:"p"},"raftt up"),", you successfully started a sequence of events -"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Authentication with GitHub."),(0,r.kt)("li",{parentName:"ol"},"Raftt's configuration file, ",(0,r.kt)("a",{parentName:"li",href:"../../config/raftt.yml"},"raftt.yml"),", is detected by the Raftt client.",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"In this case, raftt.yml was cloned with the repo. It will automatically be generated with default values if it doesn't exist."))),(0,r.kt)("li",{parentName:"ol"},"The raftt.yml file refers to the environment definitions - the ",(0,r.kt)("a",{parentName:"li",href:"/config/rafttfile"},(0,r.kt)("inlineCode",{parentName:"a"},".raftt")," file"),"."),(0,r.kt)("li",{parentName:"ol"},"A new private and isolated environment is spawned in Raftt's cloud.")),(0,r.kt)("p",null,"If you have docker installed, you can run ",(0,r.kt)("inlineCode",{parentName:"p"},"docker ps")," and see that nothing runs on your machine - it's all remote!")),(0,r.kt)("h2",{id:"working-with-the-env"},"Working With the Env"),(0,r.kt)("p",null,"Since your env is up, you can play around with the code and see how your changes affect the site!"),(0,r.kt)("h3",{id:"changing-the-color-of-a-button"},"Changing the Color of a Button"),(0,r.kt)("p",null,"In line 74 of the file ",(0,r.kt)("inlineCode",{parentName:"p"},"<repo>/templates/index.html"),", change ",(0,r.kt)("inlineCode",{parentName:"p"},"btn-primary")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"btn-danger"),", save, and reload the page. The submit button should now be colored red."),(0,r.kt)("h3",{id:"debugging-the-application"},"Debugging the Application"),(0,r.kt)("p",null,"One of the most common things devs do is to debug their environment.\nRaftt currently supports interactively debugging Python, Go and Node.js code using Visual Studio Code or any JetBrains IDE. Additional support is continuously being added."),(0,r.kt)(o.Z,{className:"unique-tabs",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"vscode",label:"VS Code",default:!0,mdxType:"TabItem"},(0,r.kt)("p",null,"To debug the application, follow these steps -"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Open the project in VS Code."),(0,r.kt)("li",{parentName:"ol"},"Add a breakpoint inside the function ",(0,r.kt)("inlineCode",{parentName:"li"},"create")," in the file ",(0,r.kt)("inlineCode",{parentName:"li"},"app.py"),"."),(0,r.kt)("li",{parentName:"ol"},"Start debugging using the debug configuration ",(0,r.kt)("inlineCode",{parentName:"li"},"web"),".",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Debugging is pre-configured in this project by files committed in the repo. See ",(0,r.kt)("a",{parentName:"li",href:"../../debugging"},"here")," for details on how to do it yourself."))),(0,r.kt)("li",{parentName:"ol"},"Create a task in the TooDoo app."),(0,r.kt)("li",{parentName:"ol"},"Check if it stopped where you added the breakpoint."),(0,r.kt)("li",{parentName:"ol"},"Debug the remote service as if it were local."))),(0,r.kt)(i.Z,{value:"jetbrains",label:"JetBrains IDEs",mdxType:"TabItem"},(0,r.kt)("p",null,"To debug the application, follow these steps -"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Open the project in any JetBrains IDE."),(0,r.kt)("li",{parentName:"ol"},"Install Raftt's plugin according to the instructions ",(0,r.kt)("a",{parentName:"li",href:"/intro/installation#raftt-ide-plugin"},"here"),"."),(0,r.kt)("li",{parentName:"ol"},"Add a breakpoint inside the function ",(0,r.kt)("inlineCode",{parentName:"li"},"create")," in the file ",(0,r.kt)("inlineCode",{parentName:"li"},"app.py"),"."),(0,r.kt)("li",{parentName:"ol"},"Start debugging using the debug configuration ",(0,r.kt)("inlineCode",{parentName:"li"},"web"),".",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Debugging is pre-configured in this project by files committed in the repo. See ",(0,r.kt)("a",{parentName:"li",href:"../../debugging"},"here")," for details on how to do it yourself."),(0,r.kt)("li",{parentName:"ol"},"The IDE will ask you to configure a Python interpreter. You can ignore the request or choose an interpreter of your choice. It doesn't affect the remote environment that uses its own interpreter."))),(0,r.kt)("li",{parentName:"ol"},"Create a task in the TooDoo app."),(0,r.kt)("li",{parentName:"ol"},"Check if it stopped where you added the breakpoint."),(0,r.kt)("li",{parentName:"ol"},"Debug the remote service as if it were local.")))),(0,r.kt)("h3",{id:"breaking-the-code"},"Breaking the Code"),(0,r.kt)("p",null,"You should now explore what happens if you make a mistake in the code. Make a change that will cause the main process to crash. You can go to ",(0,r.kt)("inlineCode",{parentName:"p"},"<repo>/app.py")," and add ",(0,r.kt)("inlineCode",{parentName:"p"},"This won't work"),' to line 6. Flask auto-reload feature will automatically update the app, causing it to crash.\nTo "debug" the issue, you can run ',(0,r.kt)("inlineCode",{parentName:"p"},"raftt logs web")," and see the error in the container logs.",(0,r.kt)("br",{parentName:"p"}),"\n","Now fix the issue you create - revert the breaking change and restart the app. You can restart it by running your code from the IDE (if you configured it in the ",(0,r.kt)("a",{parentName:"p",href:"#debugging-the-application"},"previous")," section) or run ",(0,r.kt)("inlineCode",{parentName:"p"},"raftt restart web")," from the CLI which does the same. Note that it restarts the main process, while the container itself isn't reloaded. If you now refresh the webpage, you'll see the page loads successfully.  "),(0,r.kt)("h3",{id:"branch-switching"},"Branch Switching"),(0,r.kt)("p",null,"Raftt seamlessly ",(0,r.kt)("a",{parentName:"p",href:"/concepts/git_workflows"},"integrates with your workflow")," and makes switching between branches a breeze.",(0,r.kt)("br",{parentName:"p"}),"\n","Switching to a new branch spawned a new environment while the previous environment(s) are waiting - if you want to come back to them later."),(0,r.kt)("p",null,"Switch to a different branch using ",(0,r.kt)("inlineCode",{parentName:"p"},"git checkout v2")," and refresh the page. Since a new env is spawned, it might take a minute or two until the env is responsive. The spawning happens in the background, if you want to follow the spawning status, you can run ",(0,r.kt)("inlineCode",{parentName:"p"},"raftt status -w"),"."),(0,r.kt)("p",null,"You can now see that this branch has several new features - choosing an emoji for each task and counting the number of active users connected to your amazing TooDoo app.\nNote that the tasks have changed, both in content and in the database schema. With Raftt, this change is seamless.\nIn addition, if you run ",(0,r.kt)("inlineCode",{parentName:"p"},"raftt status"),", you'll notice a few changes -"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The environment now has two additional services - ",(0,r.kt)("inlineCode",{parentName:"li"},"redis")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"live-backend")," (running Go)."),(0,r.kt)("li",{parentName:"ol"},"Python in the ",(0,r.kt)("inlineCode",{parentName:"li"},"web")," container changed seamlessly from v3.9 to v3.10 without requiring any dependency change on your side.")),(0,r.kt)("p",{align:"center"},(0,r.kt)("img",{src:"https://raftt-resources.s3.eu-central-1.amazonaws.com/docs/tutorial/status_v2.png",alt:"raftt status output"})),(0,r.kt)("p",null,"You can go back to main using ",(0,r.kt)("inlineCode",{parentName:"p"},"git checkout main")," and look at any changes you previously made to the task list remain. For the next tutorial stage, you'll want to be in the ",(0,r.kt)("inlineCode",{parentName:"p"},"v2")," branch."),(0,r.kt)("h2",{id:"collaborating-with-other-team-members"},"Collaborating With Other Team Members"),(0,r.kt)("p",null,"Suppose you want to share your magnificent work on the active users features with the PM that defined it. You're used to calling your PM to see it work on your machine, but she's WFH (working-from-home). So, you may share your screen using Slack, but wouldn't it be much easier if you could just give her direct access to your dev environment? Well, with Raftt you can!"),(0,r.kt)("p",null,"Ensure you're in the right branch - which means you're connected to the right environment.\nThen, just run ",(0,r.kt)("inlineCode",{parentName:"p"},"raftt expose web")," and share the public URL!"),(0,r.kt)("h2",{id:"try-it-with-your-project"},"Try It With Your Project"),(0,r.kt)("p",null,"After seeing how easy it is to work with Raftt, you're welcome to use raftt on any project of yours - open source or private.",(0,r.kt)("br",{parentName:"p"}),"\n","We'd love to hear about your experience in ",(0,r.kt)("a",{parentName:"p",href:"https://join.slack.com/t/rafttcommunity/shared_invite/zt-196nlb5ra-rYPWEqQF~ETdgx9aqWANnw"},"our Slack community")," or by ",(0,r.kt)("a",{parentName:"p",href:"https://raftt.io/contact"},"contacting us")," directly."))}d.isMDXComponent=!0}}]);