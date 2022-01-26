"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[421],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=d(n),m=r,f=c["".concat(l,".").concat(m)]||c[m]||u[m]||o;return n?a.createElement(f,i(i({ref:t},p),{},{components:n})):a.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var d=2;d<o;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},8215:function(e,t,n){var a=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},6396:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(7462),r=n(7294),o=n(2389),i=n(9443);var s=function(){var e=(0,r.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=n(3616),d=n(6010),p="tabItem_vU9c";function u(e){var t,n,o,i=e.lazy,u=e.block,c=e.defaultValue,m=e.values,f=e.groupId,h=e.className,g=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=m?m:g.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),v=(0,l.lx)(b,(function(e,t){return e.value===t.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===c?c:null!=(t=null!=c?c:null==(n=g.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(o=g[0])?void 0:o.props.value;if(null!==k&&!b.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=s(),N=y.tabGroupChoices,w=y.setTabGroupChoices,T=(0,r.useState)(k),_=T[0],x=T[1],O=[],$=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var S=N[f];null!=S&&S!==_&&b.some((function(e){return e.value===S}))&&x(S)}var E=function(e){var t=e.currentTarget,n=O.indexOf(t),a=b[n].value;a!==_&&($(t),x(a),null!=f&&w(f,a))},C=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=O.indexOf(e.currentTarget)+1;n=O[a]||O[0];break;case"ArrowLeft":var r=O.indexOf(e.currentTarget)-1;n=O[r]||O[O.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,d.Z)("tabs",{"tabs--block":u},h)},b.map((function(e){var t=e.value,n=e.label,o=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:_===t?0:-1,"aria-selected":_===t,key:t,ref:function(e){return O.push(e)},onKeyDown:C,onFocus:E,onClick:E},o,{className:(0,d.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":_===t})}),null!=n?n:t)}))),i?(0,r.cloneElement)(g.filter((function(e){return e.props.value===_}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},g.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==_})}))))}function c(e){var t=(0,o.Z)();return r.createElement(u,(0,a.Z)({key:String(t)},e))}},188:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return d},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return c},default:function(){return f}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=n(6396),s=n(8215),l=["components"],d={title:"Database Seeding"},p="Database Seeding",u={unversionedId:"config/db_seeding",id:"config/db_seeding",title:"Database Seeding",description:"When spawning environments, you might want your databases to be populated with data before starting to use the environment.",source:"@site/docs/config/db_seeding.md",sourceDirName:"config",slug:"/config/db_seeding",permalink:"/docs/config/db_seeding",tags:[],version:"current",frontMatter:{title:"Database Seeding"},sidebar:"tutorialSidebar",previous:{title:"Warmup Script",permalink:"/docs/config/warmup"},next:{title:"CLI Reference",permalink:"/docs/cli_reference"}},c=[{value:"Seeding Methods",id:"seeding-methods",children:[{value:"PostgreSQL",id:"postgresql",children:[],level:3},{value:"MongoDB",id:"mongodb",children:[],level:3},{value:"Custom Script",id:"custom-script",children:[{value:"Sample Code",id:"sample-code",children:[],level:4}],level:3}],level:2},{value:"<code>raftt data</code> command",id:"raftt-data-command",children:[],level:2},{value:"Reloading a Service",id:"reloading-a-service",children:[],level:2}],m={toc:c};function f(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"database-seeding"},"Database Seeding"),(0,o.kt)("p",null,"When spawning environments, you might want your databases to be populated with data before starting to use the environment.",(0,o.kt)("br",{parentName:"p"}),"\n","To allow this, Raftt supports database seeding that is defined as a part of the ",(0,o.kt)("a",{parentName:"p",href:"./raftt.yml"},"raftt.yml")," file.  "),(0,o.kt)("h2",{id:"seeding-methods"},"Seeding Methods"),(0,o.kt)("p",null,"Raftt currently supports three seeding methods -"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A builtin method to load a ",(0,o.kt)("inlineCode",{parentName:"li"},".sql")," dump file into a PostgresSQL database"),(0,o.kt)("li",{parentName:"ul"},"A builtin method to load a ",(0,o.kt)("inlineCode",{parentName:"li"},".archive")," dump file into MongoDB"),(0,o.kt)("li",{parentName:"ul"},"A custom user-created script that seeds the databases")),(0,o.kt)("h3",{id:"postgresql"},"PostgreSQL"),(0,o.kt)("p",null,"Load a database dump file as a PostgresSQL ",(0,o.kt)("inlineCode",{parentName:"p"},".sql")," file, which should be committed to the repo ",(0,o.kt)("strong",{parentName:"p"},"(AS - why? Does it have to be committed?)"),".\nThis file can be created by ",(0,o.kt)("inlineCode",{parentName:"p"},"pg_dumpall")," or by running ",(0,o.kt)("inlineCode",{parentName:"p"},"raftt data dump"),"."),(0,o.kt)("p",null,"To configure seeding of a PostgresSQL database, configure it in the ",(0,o.kt)("a",{parentName:"p",href:"./raftt.yml"},"raftt.yml")," configuration file -"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"data:\n  - service: db\n    type: postgres\n    user: postgres # optional\n    dump: dump.sql\n")),(0,o.kt)("h3",{id:"mongodb"},"MongoDB"),(0,o.kt)("p",null,"Load a database dump file as a MongoDB ",(0,o.kt)("inlineCode",{parentName:"p"},".archive")," file, which should be committed to the repo ",(0,o.kt)("strong",{parentName:"p"},"(AS - why? Does it have to be committed?)"),".\nThis file can be created by ",(0,o.kt)("inlineCode",{parentName:"p"},"mongodump")," or by running ",(0,o.kt)("inlineCode",{parentName:"p"},"raftt data dump"),"."),(0,o.kt)("p",null,"To configure seeding of a MongoDB database, configure it in the ",(0,o.kt)("a",{parentName:"p",href:"./raftt.yml"},"raftt.yml")," configuration file -"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"data:\n  - service: db\n    type: mongodb **(AS - is omitting the user intentional?)**\n    dump: dump.archive\n")),(0,o.kt)("h3",{id:"custom-script"},"Custom Script"),(0,o.kt)("p",null,"You can create a custom script if you don't use PostgresSQL or MongoDB or want a more customized database seeding experience.",(0,o.kt)("br",{parentName:"p"}),"\n","This allows complete control over how you wish to populate your databases, and is database type independent.",(0,o.kt)("br",{parentName:"p"}),"\n","Using the custom script support, Raftt supports advanced use-cases such as:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Loading a large dump from S3"),(0,o.kt)("li",{parentName:"ul"},"Auto-generating DB data")),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"important ")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The DB process is not guaranteed to be ready to accept connections before the script is executed.",(0,o.kt)("br",{parentName:"p"}),"\n","The script should wait for the DB and poll it."))),(0,o.kt)("p",null,"To configure custom seeding of your database, configure it in the ",(0,o.kt)("a",{parentName:"p",href:"./raftt.yml"},"raftt.yml")," configuration file -"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"data:\n  - service: db\n    type: script\n    script: db_seed.sh\n    keyProvider: db_cache_key.sh # optional, if not specified upload and download from S3 are skipped\n")),(0,o.kt)("h4",{id:"sample-code"},"Sample Code"),(0,o.kt)("p",null,"The following code samples are examples of how to poll different databases to make sure they are up and running, and than seed them."),(0,o.kt)(i.Z,{className:"unique-tabs",mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"postgres",label:"postgresSQL",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'#!/bin/bash\necho "db-seeder:5432:*:postgres:password" > $HOME/.pgpass\necho "` chmod 0600 $HOME/.pgpass `"\n\nretry() {\n    max_attempts="${1}"; shift\n    seconds="${1}"; shift\n    attempt_num=1\n    \n    until "${@}"; do\n        if [ "$attempt_num" -eq "$max_attempts" ]\n        then\n            echo "Attempt $attempt_num failed and there are no more attempts left!"\n            exit 1\n        else\n            echo "Attempt $attempt_num failed! Trying again in $seconds seconds..."\n            attempt_num=$(( 1 + attempt_num ))\n            sleep "$seconds"\n        fi\n    done\n}\n\nretry 1>&2 "5" "1" psql -h db-seeder -p 5432 -U postgres -c \'\\l\'\npsql -h db-seeder -p 5432 -U postgres -f dump.sql\n'))),(0,o.kt)(s.Z,{value:"mongo",label:"MongoDB - **update code**",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'#!/bin/bash\necho "db-seeder:5432:*:postgres:password" > $HOME/.pgpass\necho "` chmod 0600 $HOME/.pgpass `"\n\nretry() {\n    max_attempts="${1}"; shift\n    seconds="${1}"; shift\n    attempt_num=1\n    \n    until "${@}"; do\n        if [ "$attempt_num" -eq "$max_attempts" ]\n        then\n            echo "Attempt $attempt_num failed and there are no more attempts left!"\n            exit 1\n        else\n            echo "Attempt $attempt_num failed! Trying again in $seconds seconds..."\n            attempt_num=$(( 1 + attempt_num ))\n            sleep "$seconds"\n        fi\n    done\n}\n\nretry 1>&2 "5" "1" psql -h db-seeder -p 5432 -U postgres -c \'\\l\'\npsql -h db-seeder -p 5432 -U postgres -f dump.sql\n'))),(0,o.kt)(s.Z,{value:"third",label:"third option - **update code**",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'#!/bin/bash\necho "db-seeder:5432:*:postgres:password" > $HOME/.pgpass\necho "` chmod 0600 $HOME/.pgpass `"\n\nretry() {\n    max_attempts="${1}"; shift\n    seconds="${1}"; shift\n    attempt_num=1\n    \n    until "${@}"; do\n        if [ "$attempt_num" -eq "$max_attempts" ]\n        then\n            echo "Attempt $attempt_num failed and there are no more attempts left!"\n            exit 1\n        else\n            echo "Attempt $attempt_num failed! Trying again in $seconds seconds..."\n            attempt_num=$(( 1 + attempt_num ))\n            sleep "$seconds"\n        fi\n    done\n}\n\nretry 1>&2 "5" "1" psql -h db-seeder -p 5432 -U postgres -c \'\\l\'\npsql -h db-seeder -p 5432 -U postgres -f dump.sql\n')))),(0,o.kt)("h2",{id:"raftt-data-command"},(0,o.kt)("inlineCode",{parentName:"h2"},"raftt data")," command"),(0,o.kt)("p",null,"To explicitly initiate actions on the databases - dump, save, load, and seed, you can use the ",(0,o.kt)("a",{parentName:"p",href:"../cli_reference#raftt-data"},(0,o.kt)("inlineCode",{parentName:"a"},"raftt data"))," command."),(0,o.kt)("h2",{id:"reloading-a-service"},"Reloading a Service"),(0,o.kt)("p",null,"When reloading a service using the ",(0,o.kt)("a",{parentName:"p",href:"../cli_reference#raftt-reload"},(0,o.kt)("inlineCode",{parentName:"a"},"raftt reload")),", the default behavior is ",(0,o.kt)("strong",{parentName:"p"},"not")," to reseed the databases that are defined in ",(0,o.kt)("a",{parentName:"p",href:"./raftt.yml"},"raftt.yml"),", but keep the state as-is.",(0,o.kt)("br",{parentName:"p"}),"\n","To reseed the databases when reloading a service them, use ",(0,o.kt)("a",{parentName:"p",href:"../cli_reference#raftt-reload"},(0,o.kt)("inlineCode",{parentName:"a"},"raftt reload -r"))))}f.isMDXComponent=!0}}]);