"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[606],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),h=u(n),d=o,m=h["".concat(s,".").concat(d)]||h[d]||c[d]||r;return n?a.createElement(m,i(i({ref:t},p),{},{components:n})):a.createElement(m,i({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},8215:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(7294);function o(e){var t=e.children,n=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:o},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return p}});var a=n(7462),o=n(7294),r=n(2389),i=n(3725),l=n(6010),s="tabItem_LplD";function u(e){var t,n,r,u=e.lazy,p=e.block,c=e.defaultValue,h=e.values,d=e.groupId,m=e.className,f=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=h?h:f.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),k=(0,i.lx)(g,(function(e,t){return e.value===t.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===c?c:null!=(t=null!=c?c:null==(n=f.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(r=f[0])?void 0:r.props.value;if(null!==b&&!g.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var v=(0,i.UB)(),y=v.tabGroupChoices,w=v.setTabGroupChoices,N=(0,o.useState)(b),C=N[0],T=N[1],O=[],j=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var D=y[d];null!=D&&D!==C&&g.some((function(e){return e.value===D}))&&T(D)}var E=function(e){var t=e.currentTarget,n=O.indexOf(t),a=g[n].value;a!==C&&(j(t),T(a),null!=d&&w(d,a))},x=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=O.indexOf(e.currentTarget)+1;n=O[a]||O[0];break;case"ArrowLeft":var o=O.indexOf(e.currentTarget)-1;n=O[o]||O[O.length-1]}null==(t=n)||t.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":p},m)},g.map((function(e){var t=e.value,n=e.label,r=e.attributes;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:function(e){return O.push(e)},onKeyDown:x,onFocus:E,onClick:E},r,{className:(0,l.Z)("tabs__item",s,null==r?void 0:r.className,{"tabs__item--active":C===t})}),null!=n?n:t)}))),u?(0,o.cloneElement)(f.filter((function(e){return e.props.value===C}))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==C})}))))}function p(e){var t=(0,r.Z)();return o.createElement(u,(0,a.Z)({key:String(t)},e))}},4190:function(e,t,n){n.r(t),n.d(t,{assets:function(){return h},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return d}});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),i=n(9877),l=n(8215),s=["components"],u={title:"Tutorial"},p="Tutorial Using Our Sample To-Do App",c={unversionedId:"basics/tutorial",id:"basics/tutorial",title:"Tutorial",description:"We created TooDoo, a simple to-do application, as a sample project to help you onboard Raftt quickly, without using your code.",source:"@site/docs/basics/tutorial.md",sourceDirName:"basics",slug:"/basics/tutorial",permalink:"/docs/basics/tutorial",tags:[],version:"current",frontMatter:{title:"Tutorial"},sidebar:"tutorialSidebar",previous:{title:"Spawn Your First Environment",permalink:"/docs/basics/quickstart"},next:{title:"Prerequisites",permalink:"/docs/basics/prerequisites"}},h={},d=[{value:"Your First <code>raftt up</code>",id:"your-first-raftt-up",level:2},{value:"Under the Hood",id:"under-the-hood",level:3},{value:"Working With the Env",id:"working-with-the-env",level:2},{value:"Changing the Color of a Button",id:"changing-the-color-of-a-button",level:3},{value:"Debugging the Application",id:"debugging-the-application",level:3},{value:"Breaking the Code",id:"breaking-the-code",level:3},{value:"Branch Switching",id:"branch-switching",level:3},{value:"Collaborating With Other Team Members",id:"collaborating-with-other-team-members",level:2},{value:"Try It With Your Project",id:"try-it-with-your-project",level:2}],m={toc:d};function f(e){var t=e.components,n=(0,o.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"tutorial-using-our-sample-to-do-app"},"Tutorial Using Our Sample To-Do App"),(0,r.kt)("p",null,"We created ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/rafttio/toodoo"},"TooDoo"),", a simple to-do application, as a sample project to help you onboard Raftt quickly, without using your code."),(0,r.kt)("p",null,"The project is mainly written in Python (Flask) with some Go, but familiarity with these languages isn't necessary to complete this tutorial."),(0,r.kt)("h2",{id:"your-first-raftt-up"},"Your First ",(0,r.kt)("inlineCode",{parentName:"h2"},"raftt up")),(0,r.kt)("p",null,"In this section, we'll get you up and running with your very own Raftt environment and explain what happens under the hood.\nTake the following steps -"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Clone the project's repo - ",(0,r.kt)("inlineCode",{parentName:"li"},"git clone https://github.com/rafttio/toodoo")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"cd")," into the repo's folder."),(0,r.kt)("li",{parentName:"ol"},"Run ",(0,r.kt)("inlineCode",{parentName:"li"},"raftt up")," and wait for ",(0,r.kt)("inlineCode",{parentName:"li"},"Environment is ready!")," to be printed.",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"You will be prompted to log in with your GitHub account."),(0,r.kt)("li",{parentName:"ol"},"Please note that building and deploying the images might take a minute or two."))),(0,r.kt)("li",{parentName:"ol"},"Run ",(0,r.kt)("inlineCode",{parentName:"li"},"raftt status")," to see the status of the environment services.")),(0,r.kt)("p",{align:"center"},(0,r.kt)("img",{src:"https://raftt-resources.s3.eu-central-1.amazonaws.com/docs/tutorial/status_main.png",alt:"raftt status output"})),(0,r.kt)("p",null,"As seen in the above screenshot, the open port of the web container is ",(0,r.kt)("a",{parentName:"p",href:"/docs/concepts/port_map"},"mapped")," to the local port 3000. Let's see what happens when you ",(0,r.kt)("a",{parentName:"p",href:"http://localhost:3000/"},"browse it"),"."),(0,r.kt)("p",{align:"center"},(0,r.kt)("img",{src:"https://raftt-resources.s3.eu-central-1.amazonaws.com/docs/tutorial/TooDoo.png",alt:"TooDoo Screenshot"})),(0,r.kt)("p",null,"You can now play around with the app - add, remove, and edit tasks as you wish."),(0,r.kt)("h3",{id:"under-the-hood"},"Under the Hood"),(0,r.kt)("p",null,"When you ran ",(0,r.kt)("inlineCode",{parentName:"p"},"raftt up"),", you successfully started a sequence of events -"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Authentication with GitHub."),(0,r.kt)("li",{parentName:"ol"},"Raftt's configuration file, ",(0,r.kt)("a",{parentName:"li",href:"../config/raftt.yml"},"raftt.yml"),", is detected by the Raftt client.",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"In this case, raftt.yml was cloned with the repo. It will automatically be generated with default values if it doesn't exist."))),(0,r.kt)("li",{parentName:"ol"},"The raftt.yml file refers to the environment definitions - the docker-compose file and the ",(0,r.kt)("a",{parentName:"li",href:"#../config/dev_container"},"dev container")," definitions."),(0,r.kt)("li",{parentName:"ol"},"A new private and isolated environment is spawned in Raftt's cloud.")),(0,r.kt)("p",null,"If you have docker installed, you can run ",(0,r.kt)("inlineCode",{parentName:"p"},"docker ps")," and see that nothing runs on your machine - it's all remote!"),(0,r.kt)("h2",{id:"working-with-the-env"},"Working With the Env"),(0,r.kt)("p",null,"Since your env is up, you can play around with the code and see how your changes affect the site!"),(0,r.kt)("h3",{id:"changing-the-color-of-a-button"},"Changing the Color of a Button"),(0,r.kt)("p",null,"In line 74 of the file ",(0,r.kt)("inlineCode",{parentName:"p"},"<repo>/templates/index.html"),", change ",(0,r.kt)("inlineCode",{parentName:"p"},"btn-primary")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"btn-danger"),", save, and reload the page. The submit button should now be colored red."),(0,r.kt)("h3",{id:"debugging-the-application"},"Debugging the Application"),(0,r.kt)("p",null,"One of the most common things devs do is to debug their environment.\nRaftt currently supports interactively debugging Python and Go code using Visual Studio Code or any JetBrains IDE. Additional support is continuously being added."),(0,r.kt)(i.Z,{className:"unique-tabs",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"vscode",label:"VS Code",default:!0,mdxType:"TabItem"},(0,r.kt)("p",null,"To debug the application, follow these steps -"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Open the project in VS Code."),(0,r.kt)("li",{parentName:"ol"},"Add a breakpoint inside the function ",(0,r.kt)("inlineCode",{parentName:"li"},"create")," in the file ",(0,r.kt)("inlineCode",{parentName:"li"},"app.py"),"."),(0,r.kt)("li",{parentName:"ol"},"Start debugging using the debug configuration ",(0,r.kt)("inlineCode",{parentName:"li"},"web"),".",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Debugging is pre-configured in this project by files committed in the repo. See ",(0,r.kt)("a",{parentName:"li",href:"/docs/debugging/VSCode#configuration"},"here")," for details on how to do it yourself."))),(0,r.kt)("li",{parentName:"ol"},"Create a task in the TooDoo app."),(0,r.kt)("li",{parentName:"ol"},"Check if it stopped where you added the breakpoint."),(0,r.kt)("li",{parentName:"ol"},"Debug the remote service as if it were local."))),(0,r.kt)(l.Z,{value:"jetbrains",label:"JetBrains IDEs",mdxType:"TabItem"},(0,r.kt)("p",null,"To debug the application, follow these steps -"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Open the project in any JetBrains IDE."),(0,r.kt)("li",{parentName:"ol"},"Install Raftt's plugin according to the instructions ",(0,r.kt)("a",{parentName:"li",href:"/docs/debugging/JetBrains#installing-the-plugin"},"here"),"."),(0,r.kt)("li",{parentName:"ol"},"Add a breakpoint inside the function ",(0,r.kt)("inlineCode",{parentName:"li"},"create")," in the file ",(0,r.kt)("inlineCode",{parentName:"li"},"app.py"),"."),(0,r.kt)("li",{parentName:"ol"},"Start debugging using the debug configuration ",(0,r.kt)("inlineCode",{parentName:"li"},"web"),".",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Debugging is pre-configured in this project by files committed in the repo. See ",(0,r.kt)("a",{parentName:"li",href:"/docs/debugging/JetBrains#configuration"},"here")," for details on how to do it yourself."),(0,r.kt)("li",{parentName:"ol"},"The IDE will ask you to configure a Python interpreter. You can ignore the request or choose an interpreter of your choice. It doesn't affect the remote environment that uses its own interpreter."))),(0,r.kt)("li",{parentName:"ol"},"Create a task in the TooDoo app."),(0,r.kt)("li",{parentName:"ol"},"Check if it stopped where you added the breakpoint."),(0,r.kt)("li",{parentName:"ol"},"Debug the remote service as if it were local.")))),(0,r.kt)("h3",{id:"breaking-the-code"},"Breaking the Code"),(0,r.kt)("p",null,"You should now explore what happens if you make a mistake in the code. Make a change that will cause the main process to crash. You can go to ",(0,r.kt)("inlineCode",{parentName:"p"},"<repo>/app.py")," and add ",(0,r.kt)("inlineCode",{parentName:"p"},"This won't work"),' to line 6. Flask auto-reload feature will automatically update the app, causing it to crash.\nTo "debug" the issue, you can run ',(0,r.kt)("inlineCode",{parentName:"p"},"raftt logs web")," and see the error in the container logs.",(0,r.kt)("br",{parentName:"p"}),"\n","Now fix the issue you create - revert the breaking change and restart the app. You can restart it by running your code from the IDE (if you configured it in the ",(0,r.kt)("a",{parentName:"p",href:"#debugging-the-application"},"previous")," section) or run ",(0,r.kt)("inlineCode",{parentName:"p"},"raftt restart web")," from the CLI which does the same. Note that it restarts the main process, while the container itself isn't reloaded. If you now refresh the webpage, you'll see the page loads successfully.  "),(0,r.kt)("h3",{id:"branch-switching"},"Branch Switching"),(0,r.kt)("p",null,"Raftt seamlessly ",(0,r.kt)("a",{parentName:"p",href:"/docs/concepts/git_workflows"},"integrates with your workflow")," and makes switching between branches a breeze.",(0,r.kt)("br",{parentName:"p"}),"\n","Switching to a new branch spawned a new environment while the previous environment(s) are waiting - if you want to come back to them later."),(0,r.kt)("p",null,"Switch to a different branch using ",(0,r.kt)("inlineCode",{parentName:"p"},"git checkout v2")," and refresh the page. Since a new env is spawned, it might take a minute or two until the env is responsive. The spawning happens in the background, if you want to follow the spawning status, you can run ",(0,r.kt)("inlineCode",{parentName:"p"},"rafft status -w"),"."),(0,r.kt)("p",null,"You can now see that this branch has several new features - choosing an emoji for each task and counting the number of active users connected to your amazing TooDoo app.\nNote that the tasks have changed, both in content and in the database schema. With Raftt, this change is seamless.\nIn addition, if you run ",(0,r.kt)("inlineCode",{parentName:"p"},"raftt status"),", you'll notice a few changes -"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The environment now has two additional services - ",(0,r.kt)("inlineCode",{parentName:"li"},"redis")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"live-backend")," (running Go)."),(0,r.kt)("li",{parentName:"ol"},"Python in the ",(0,r.kt)("inlineCode",{parentName:"li"},"web")," container changed seamlessly from v3.9 to v3.10 without requiring any dependency change on your side.")),(0,r.kt)("p",{align:"center"},(0,r.kt)("img",{src:"https://raftt-resources.s3.eu-central-1.amazonaws.com/docs/tutorial/status_v2.png",alt:"raftt status output"})),(0,r.kt)("p",null,"You can go back to main using ",(0,r.kt)("inlineCode",{parentName:"p"},"git checkout main")," and look at any changes you previously made to the task list remain. For the next tutorial stage, you'll want to be in the ",(0,r.kt)("inlineCode",{parentName:"p"},"v2")," branch."),(0,r.kt)("h2",{id:"collaborating-with-other-team-members"},"Collaborating With Other Team Members"),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"This feature is only available for enterprise customers.",(0,r.kt)("br",{parentName:"p"}),"\n","For more information on Raftt's paid plans, ",(0,r.kt)("a",{parentName:"p",href:"https://raftt.io/contact-us"},"contact us"),"."))),(0,r.kt)("p",null,"Suppose you want to share your magnificent work on the active users features with the PM that defined it. You're used to calling your PM to see it work on your machine, but she's WFH (working-from-home). So, you may share your screen using Slack, but wouldn't it be much easier if you could just give her direct access to your dev environment? Well, with Raftt you can!"),(0,r.kt)("p",null,"Ensure you're in the right branch - which means you're connected to the right environment.\nThen, just run ",(0,r.kt)("inlineCode",{parentName:"p"},"raftt expose web")," and share the public URL!"),(0,r.kt)("h2",{id:"try-it-with-your-project"},"Try It With Your Project"),(0,r.kt)("p",null,"After seeing how easy it is to work with Raftt, you're welcome to use raftt on any project of yours - open source or private.",(0,r.kt)("br",{parentName:"p"}),"\n","We'd love to hear about your experience in ",(0,r.kt)("a",{parentName:"p",href:"https://join.slack.com/t/rafttcommunity/shared_invite/zt-12txxuog3-OCriDcjMnsfun4EKvnp5Uw"},"our Slack community")," or by ",(0,r.kt)("a",{parentName:"p",href:"https://raftt.io/contact-us"},"contacting us")," directly."))}f.isMDXComponent=!0}}]);