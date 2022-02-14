"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[101],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(n),d=r,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||o;return n?a.createElement(f,i(i({ref:t},c),{},{components:n})):a.createElement(f,i({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8215:function(e,t,n){var a=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(7462),r=n(7294),o=n(2389),i=n(9548),l=n(6010),s="tabItem_LplD";function u(e){var t,n,o,u=e.lazy,c=e.block,p=e.defaultValue,m=e.values,d=e.groupId,f=e.className,v=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=m?m:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),k=(0,i.lx)(h,(function(e,t){return e.value===t.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===p?p:null!=(t=null!=p?p:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(o=v[0])?void 0:o.props.value;if(null!==b&&!h.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,i.UB)(),g=y.tabGroupChoices,N=y.setTabGroupChoices,w=(0,r.useState)(b),O=w[0],S=w[1],T=[],E=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var x=g[d];null!=x&&x!==O&&h.some((function(e){return e.value===x}))&&S(x)}var C=function(e){var t=e.currentTarget,n=T.indexOf(t),a=h[n].value;a!==O&&(E(t),S(a),null!=d&&N(d,a))},I=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=T.indexOf(e.currentTarget)+1;n=T[a]||T[0];break;case"ArrowLeft":var r=T.indexOf(e.currentTarget)-1;n=T[r]||T[T.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":c},f)},h.map((function(e){var t=e.value,n=e.label,o=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:function(e){return T.push(e)},onKeyDown:I,onFocus:C,onClick:C},o,{className:(0,l.Z)("tabs__item",s,null==o?void 0:o.className,{"tabs__item--active":O===t})}),null!=n?n:t)}))),u?(0,r.cloneElement)(v.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}function c(e){var t=(0,o.Z)();return r.createElement(u,(0,a.Z)({key:String(t)},e))}},7385:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return m},default:function(){return f}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=n(9877),l=n(8215),s=["components"],u={title:"Spawn Your First Environment"},c="Spawn Your First Environment in 5 Minutes Using Raftt",p={unversionedId:"basics/quickstart",id:"basics/quickstart",title:"Spawn Your First Environment",description:"If you are using docker-compose and your repo is on Github or Bitbucket, you can have a fully managed developer environment up in less than 5 minutes!",source:"@site/docs/basics/quickstart.md",sourceDirName:"basics",slug:"/basics/quickstart",permalink:"/docs/basics/quickstart",tags:[],version:"current",frontMatter:{title:"Spawn Your First Environment"},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/docs/basics"},next:{title:"Tutorial",permalink:"/docs/basics/tutorial"}},m=[{value:"Step 1 - Install Raftt",id:"step-1---install-raftt",children:[{value:"Option 1 - Use Snapd",id:"option-1---use-snapd",children:[],level:3},{value:"Option 2 - Use cURL",id:"option-2---use-curl",children:[],level:3},{value:"Option 1 - Use Scoop",id:"option-1---use-scoop",children:[],level:3},{value:"Option 2 - Download a Portable Executable",id:"option-2---download-a-portable-executable",children:[],level:3}],level:2},{value:"Step 2 - Initial setup",id:"step-2---initial-setup",children:[],level:2},{value:"Step 3 - Success",id:"step-3---success",children:[],level:2}],d={toc:m};function f(e){var t=e.components,n=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"spawn-your-first-environment-in-5-minutes-using-raftt"},"Spawn Your First Environment in 5 Minutes Using Raftt"),(0,o.kt)("p",null,"If you are using docker-compose and your repo is on Github or Bitbucket, you can have a fully managed developer environment up in less than 5 minutes!\nIf you want to play around with a sample project, see ",(0,o.kt)("a",{parentName:"p",href:"./tutorial"},"our tutorial"),"."),(0,o.kt)("h2",{id:"step-1---install-raftt"},"Step 1 - Install Raftt"),(0,o.kt)(i.Z,{className:"unique-tabs",groupId:"operating-systems",mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"macOS",label:"macOS",default:!0,mdxType:"TabItem"},(0,o.kt)("p",null,"Using ",(0,o.kt)("a",{parentName:"p",href:"https://brew.sh"},"Homebrew"),", run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"brew install rafttio/tap/raftt  \n"))),(0,o.kt)(l.Z,{value:"linux",label:"Linux",mdxType:"TabItem"},(0,o.kt)("h3",{id:"option-1---use-snapd"},"Option 1 - Use Snapd"),(0,o.kt)("p",null,"Using ",(0,o.kt)("a",{parentName:"p",href:"https://snapcraft.io/docs/installing-snapd"},"snapd"),", run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo snap install raftt\n")),(0,o.kt)("h3",{id:"option-2---use-curl"},"Option 2 - Use cURL"),(0,o.kt)("p",null,"Using cURL, run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl -fsSL <installation_script_url> | bash\n"))),(0,o.kt)(l.Z,{value:"windows",label:"Windows",mdxType:"TabItem"},(0,o.kt)("h3",{id:"option-1---use-scoop"},"Option 1 - Use Scoop"),(0,o.kt)("p",null,"Using ",(0,o.kt)("a",{parentName:"p",href:"https://https://scoop.sh/"},"Scoop"),", run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"scoop bucket add raftt <relevant_url>\nscoop install raftt\n")),(0,o.kt)("h3",{id:"option-2---download-a-portable-executable"},"Option 2 - Download a Portable Executable"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Download ",(0,o.kt)("a",{parentName:"li",href:"binary_url"},"Raftt portable binary (x64)")),(0,o.kt)("li",{parentName:"ol"},"Add its location to the ",(0,o.kt)("inlineCode",{parentName:"li"},"PATH")),(0,o.kt)("li",{parentName:"ol"},"Install Raftt service by running ",(0,o.kt)("inlineCode",{parentName:"li"},"raftt daemon install")," from a terminal with administrator privileges")))),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Validate")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"To make sure the installation was successful, run ",(0,o.kt)("inlineCode",{parentName:"p"},"raftt version")))),(0,o.kt)("h2",{id:"step-2---initial-setup"},"Step 2 - Initial setup"),(0,o.kt)("p",null,"To spawn your environment, run ",(0,o.kt)("inlineCode",{parentName:"p"},"raftt up")," from inside the repository.",(0,o.kt)("br",{parentName:"p"}),"\n","You are welcome to try our tutorial as you"),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"It must be a repository with a Docker Compose file that only refers to a single repo. You can use our ",(0,o.kt)("a",{parentName:"p",href:"./tutorial"},"example repo"),"."))),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"up")," command will do the following things:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create Raftt's configuration file - ",(0,o.kt)("a",{parentName:"li",href:"../config/raftt.yml"},"raftt.yml"),", with a reference to your docker-compose file. If needed, you may edit this.  "),(0,o.kt)("li",{parentName:"ol"},"Initialize your authentication to Raftt through OAuth via Github or Bitbucket (GitLab coming soon!)"),(0,o.kt)("li",{parentName:"ol"},"Spawn a remote environment according to your docker-compose file with the addition of the ",(0,o.kt)("a",{parentName:"li",href:"../config/dev_container"},"dev container"),".")),(0,o.kt)("h2",{id:"step-3---success"},"Step 3 - Success"),(0,o.kt)("p",null,"You can now start accessing your environment -"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Open your browser to one of your published ports ",(0,o.kt)("inlineCode",{parentName:"li"},"localhost:<PORT>"),(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"Make some changes to code and see it reflected remotely!"))),(0,o.kt)("li",{parentName:"ol"},"Switch between git branches and see your remote environment change seamlessly"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"raftt sh dev")," for accessing your dev container"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"raftt logs SERVICE")," for seeing logs")),(0,o.kt)("p",null,"See the ",(0,o.kt)("a",{parentName:"p",href:"../cli_reference"},"CLI reference")," for more commands."))}f.isMDXComponent=!0}}]);