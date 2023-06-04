"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[829],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),f=s(n),d=r,m=f["".concat(u,".").concat(d)]||f[d]||p[d]||l;return n?a.createElement(m,i(i({ref:t},c),{},{components:n})):a.createElement(m,i({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=f;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},5162:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(7294),r=n(6010),l="tabItem_Ymn6";function i(e){var t=e.children,n=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,i),hidden:n},t)}},4866:function(e,t,n){n.d(t,{Z:function(){return I}});var a=n(7462),r=n(7294),l=n(6010),i=n(2466),o=n(6775),u=n(1980),s=n(7392),c=n(12);function p(e){return function(e){var t,n;return null!=(t=null==(n=r.Children.map(e,(function(e){if(!e||(0,r.isValidElement)(e)&&(t=e.props)&&"object"==typeof t&&"value"in t)return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function f(e){var t=e.values,n=e.children;return(0,r.useMemo)((function(){var e=null!=t?t:p(n);return function(e){var t=(0,s.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function d(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function m(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId,l=(0,o.k6)(),i=function(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:n,groupId:a});return[(0,u._X)(i),(0,r.useCallback)((function(e){if(i){var t=new URLSearchParams(l.location.search);t.set(i,e),l.replace(Object.assign({},l.location,{search:t.toString()}))}}),[i,l])]}function b(e){var t,n,a,l,i=e.defaultValue,o=e.queryString,u=void 0!==o&&o,s=e.groupId,p=f(e),b=(0,r.useState)((function(){return function(e){var t,n=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!d({value:n,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var r=null!=(t=a.find((function(e){return e.default})))?t:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:i,tabValues:p})})),v=b[0],h=b[1],g=m({queryString:u,groupId:s}),k=g[0],y=g[1],w=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:s}.groupId),n=(0,c.Nk)(t),a=n[0],l=n[1],[a,(0,r.useCallback)((function(e){t&&l.set(e)}),[t,l])]),I=w[0],E=w[1],N=function(){var e=null!=k?k:I;return d({value:e,tabValues:p})?e:null}();return(0,r.useLayoutEffect)((function(){N&&h(N)}),[N]),{selectedValue:v,selectValue:(0,r.useCallback)((function(e){if(!d({value:e,tabValues:p}))throw new Error("Can't select invalid tab value="+e);h(e),y(e),E(e)}),[y,E,p]),tabValues:p}}var v=n(2389),h="tabList__CuJ",g="tabItem_LNqP";function k(e){var t=e.className,n=e.block,o=e.selectedValue,u=e.selectValue,s=e.tabValues,c=[],p=(0,i.o5)().blockElementScrollPositionUntilNextRender,f=function(e){var t=e.currentTarget,n=c.indexOf(t),a=s[n].value;a!==o&&(p(t),u(a))},d=function(e){var t,n=null;switch(e.key){case"Enter":f(e);break;case"ArrowRight":var a,r=c.indexOf(e.currentTarget)+1;n=null!=(a=c[r])?a:c[0];break;case"ArrowLeft":var l,i=c.indexOf(e.currentTarget)-1;n=null!=(l=c[i])?l:c[c.length-1]}null==(t=n)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},s.map((function(e){var t=e.value,n=e.label,i=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:function(e){return c.push(e)},onKeyDown:d,onClick:f},i,{className:(0,l.Z)("tabs__item",g,null==i?void 0:i.className,{"tabs__item--active":o===t})}),null!=n?n:t)})))}function y(e){var t=e.lazy,n=e.children,a=e.selectedValue,l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var i=l.find((function(e){return e.props.value===a}));return i?(0,r.cloneElement)(i,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})})))}function w(e){var t=b(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",h)},r.createElement(k,(0,a.Z)({},e,t)),r.createElement(y,(0,a.Z)({},e,t)))}function I(e){var t=(0,v.Z)();return r.createElement(w,(0,a.Z)({key:String(t)},e))}},1689:function(e,t,n){n.r(t),n.d(t,{assets:function(){return f},contentTitle:function(){return c},default:function(){return b},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return d}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),i=n(4866),o=n(5162),u=["components"],s={title:"Install Raftt"},c="Installation",p={unversionedId:"intro/installation",id:"intro/installation",title:"Install Raftt",description:"Raftt CLI",source:"@site/docs/intro/installation.md",sourceDirName:"intro",slug:"/intro/installation",permalink:"/intro/installation",draft:!1,tags:[],version:"current",frontMatter:{title:"Install Raftt"},sidebar:"tutorialSidebar",previous:{title:"How Raftt Works?",permalink:"/intro/how_raftt_works"},next:{title:"Getting Started",permalink:"/basics"}},f={},d=[{value:"Raftt CLI",id:"raftt-cli",level:2},{value:"Raftt IDE Plugin",id:"raftt-ide-plugin",level:2}],m={toc:d};function b(e){var t=e.components,n=(0,r.Z)(e,u);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"installation"},"Installation"),(0,l.kt)("h2",{id:"raftt-cli"},"Raftt CLI"),(0,l.kt)(i.Z,{className:"unique-tabs",groupId:"operating-systems",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"macOS",label:"macOS",default:!0,mdxType:"TabItem"},(0,l.kt)("p",null,"Use ",(0,l.kt)("a",{parentName:"p",href:"https://brew.sh"},"Homebrew")," or cURL to install Raftt CLI on macOS."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-plaintext"},"brew install rafttio/tap/raftt  \n")),(0,l.kt)("p",null,"Or"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-plaintext"},"curl -fsSL get.raftt.io/install | bash\n"))),(0,l.kt)(o.Z,{value:"linux",label:"Linux",mdxType:"TabItem"},(0,l.kt)("p",null,"Use ",(0,l.kt)("a",{parentName:"p",href:"https://snapcraft.io/docs/installing-snapd"},"Snapd")," or cURL to install Raftt CLI on Linux."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-plaintext"},"sudo snap install raftt --classic\n")),(0,l.kt)("p",null,"Or"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-plaintext"},"curl -fsSL get.raftt.io/install | bash\n"))),(0,l.kt)(o.Z,{value:"windows",label:"Windows",mdxType:"TabItem"},(0,l.kt)("p",null,"Download and run ",(0,l.kt)("a",{parentName:"p",href:"https://get.raftt.io/windowsinstall"},"Raftt installer (x64)"),"."),(0,l.kt)("admonition",{title:"Note",type:"info"},(0,l.kt)("p",{parentName:"admonition"},"The installation adds the Raftt binary to your ",(0,l.kt)("inlineCode",{parentName:"p"},"PATH"),". You must start a new shell after the installation to have the up-to-date environment variables.")))),(0,l.kt)("admonition",{title:"Validate",type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"To verify the installation was successful, run ",(0,l.kt)("inlineCode",{parentName:"p"},"raftt version")," in your shell.")),(0,l.kt)("h2",{id:"raftt-ide-plugin"},"Raftt IDE Plugin"),(0,l.kt)(i.Z,{className:"unique-tabs",groupId:"IDEs",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"JetBrains",label:"JetBrains IDEs",default:!0,mdxType:"TabItem"},(0,l.kt)("p",null,"Installing Raftt's JetBrains IDE's plugin can be done from the ",(0,l.kt)("a",{parentName:"p",href:"https://plugins.jetbrains.com/plugin/18931-raftt-launcher"},"JetBrains Marketplace"),".\nIt is compatible with all IntelliJ-based IDEs!"),(0,l.kt)("p",null,"Either search the marketplace for the ",(0,l.kt)("strong",{parentName:"p"},"Raftt")," plugin, or use this link:"),(0,l.kt)("p",{align:"center"},(0,l.kt)("iframe",{frameborder:"none",width:"245px",height:"48px",src:"https://plugins.jetbrains.com/embeddable/install/18931"})),(0,l.kt)("p",null,"Guidance on how to install and manage JetBrains IDE plugins can be found ",(0,l.kt)("a",{parentName:"p",href:"https://www.jetbrains.com/help/idea/managing-plugins.html"},"here"),".")),(0,l.kt)(o.Z,{value:"VSCode",label:"VS Code",mdxType:"TabItem"},(0,l.kt)("p",null,"Installing Raftt's VS Code extension can be done from the ",(0,l.kt)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=Raftt.vscode-raftt"},"VS Code Marketplace")," or from the IDE extensions tab. Guidance on how to install and manage VS Code extensions can be found ",(0,l.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/docs/editor/extension-marketplace"},"here"),"."))))}b.isMDXComponent=!0}}]);