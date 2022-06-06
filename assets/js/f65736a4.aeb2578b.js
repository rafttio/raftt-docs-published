"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[433],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=s(t),m=o,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||i;return t?r.createElement(f,l(l({ref:n},p),{},{components:t})):r.createElement(f,l({ref:n},p))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,l=new Array(i);l[0]=d;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,l[1]=a;for(var s=2;s<i;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},7056:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return a},metadata:function(){return s},toc:function(){return u}});var r=t(3117),o=t(102),i=(t(7294),t(3905)),l=["components"],a={title:"File Syncing"},c="File Syncing",s={unversionedId:"concepts/file_syncing",id:"concepts/file_syncing",title:"File Syncing",description:"Raftt keeps all the repository files synced between the local machine and the remote environment to allow live development in the remote environment.",source:"@site/docs/concepts/file_syncing.md",sourceDirName:"concepts",slug:"/concepts/file_syncing",permalink:"/docs/concepts/file_syncing",draft:!1,tags:[],version:"current",frontMatter:{title:"File Syncing"},sidebar:"tutorialSidebar",previous:{title:"Raftt's Containers",permalink:"/docs/concepts/containers"},next:{title:"Port Mapping",permalink:"/docs/concepts/port_map"}},p={},u=[{value:"Mounting a Synced Folder",id:"mounting-a-synced-folder",level:2},{value:"Overlaying Mounts",id:"overlaying-mounts",level:2}],d={toc:u};function m(e){var n=e.components,t=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"file-syncing"},"File Syncing"),(0,i.kt)("p",null,"Raftt keeps all the repository files synced between the local machine and the remote environment to allow live development in the remote environment."),(0,i.kt)("p",null,"The whole repository is synced, excluding the files ignored by git (defined in ",(0,i.kt)("inlineCode",{parentName:"p"},".gitignore")," files)."),(0,i.kt)("p",null,"Under the hood, the syncing is performed by an OSS tool called ",(0,i.kt)("a",{parentName:"p",href:"https://syncthing.net/"},"Syncthing"),"."),(0,i.kt)("h2",{id:"mounting-a-synced-folder"},"Mounting a Synced Folder"),(0,i.kt)("p",null,"You can specify bind mounts inside your docker-compose file to access the synced files in any service. For example, if you have the following docker-compose in the root of your repository:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"version: '3'\nservices:\n  web:\n    build: .\n    volumes:\n      - .:/app\n")),(0,i.kt)("p",null,"The synced repository directory will be mounted at ",(0,i.kt)("inlineCode",{parentName:"p"},"/app")," in the remote container."),(0,i.kt)("p",null,"Similarly,"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"    volumes:\n      - ./models:/models\n")),(0,i.kt)("p",null,"Would mount the ",(0,i.kt)("inlineCode",{parentName:"p"},"models")," subdirectory to the destination container under ",(0,i.kt)("inlineCode",{parentName:"p"},"/models"),"."),(0,i.kt)("p",null,"By default, the dev container includes a mount of the entire synced folder in ",(0,i.kt)("inlineCode",{parentName:"p"},"/code"),". Feel free to move this to wherever is convenient for you! :)"),(0,i.kt)("h2",{id:"overlaying-mounts"},"Overlaying Mounts"),(0,i.kt)("p",null,"In some cases, you may need to mount code ",(0,i.kt)("em",{parentName:"p"},"over")," existing content in the container. This works as expected. If you need to preserve some of it, you can accomplish that by using a volume:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"version: '3'\nservices:\n  web:\n    build: .\n    volumes:\n      - .:/app\n      - /app/node_modules\n")),(0,i.kt)("p",null,"This will make ",(0,i.kt)("inlineCode",{parentName:"p"},"/app"),' mounted to the synced repository, but within it, "node_modules" will auto-initialize an unnamed volume with the file\'s contents from the image. See the equivalent docker documentation ',(0,i.kt)("a",{parentName:"p",href:"https://docs.docker.com/storage/#tips-for-using-bind-mounts-or-volumes"},"here"),"."))}m.isMDXComponent=!0}}]);