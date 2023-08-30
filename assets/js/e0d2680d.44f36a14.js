"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[421],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=u(a),m=r,f=c["".concat(s,".").concat(m)]||c[m]||p[m]||o;return a?n.createElement(f,i(i({ref:t},d),{},{components:a})):n.createElement(f,i({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(7294),r=a(4334);const o="tabItem_Ymn6";function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,i),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>N});var n=a(7462),r=a(7294),o=a(4334),i=a(2466),l=a(6775),s=a(1980),u=a(7392),d=a(12);function p(e){return function(e){var t;return(null==(t=r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function c(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:a}=e;const n=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function b(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=c(e),[i,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[s,u]=f({queryString:a,groupId:n}),[p,b]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,d.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),h=(()=>{const e=s??p;return m({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{h&&l(h)}),[h]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),b(e)}),[u,b,o]),tabValues:o}}var h=a(2389);const g="tabList__CuJ",k="tabItem_LNqP";function v(e){let{className:t,block:a,selectedValue:l,selectValue:s,tabValues:u}=e;const d=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.o5)(),c=e=>{const t=e.currentTarget,a=d.indexOf(t),n=u[a].value;n!==l&&(p(t),s(n))},m=e=>{var t;let a=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=d.indexOf(e.currentTarget)+1;a=d[t]??d[0];break}case"ArrowLeft":{const t=d.indexOf(e.currentTarget)-1;a=d[t]??d[d.length-1];break}}null==(t=a)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:i}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>d.push(e),onKeyDown:m,onClick:c},i,{className:(0,o.Z)("tabs__item",k,null==i?void 0:i.className,{"tabs__item--active":l===t})}),a??t)})))}function _(e){let{lazy:t,children:a,selectedValue:n}=e;const o=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function y(e){const t=b(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",g)},r.createElement(v,(0,n.Z)({},e,t)),r.createElement(_,(0,n.Z)({},e,t)))}function N(e){const t=(0,h.Z)();return r.createElement(y,(0,n.Z)({key:String(t)},e))}},188:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>u,toc:()=>p});var n=a(7462),r=(a(7294),a(3905)),o=a(4866),i=a(5162);const l={title:"Database Seeding"},s="Database Seeding",u={unversionedId:"config/db_seeding",id:"config/db_seeding",title:"Database Seeding",description:"When spawning environments, you might want to populate your databases with data before using the environment.",source:"@site/docs/config/db_seeding.md",sourceDirName:"config",slug:"/config/db_seeding",permalink:"/config/db_seeding",draft:!1,tags:[],version:"current",frontMatter:{title:"Database Seeding"},sidebar:"tutorialSidebar",previous:{title:"Warmup Script",permalink:"/config/warmup"},next:{title:"Private Image Registries",permalink:"/config/image_registries"}},d={},p=[{value:"Seeding Methods",id:"seeding-methods",level:2},{value:"PostgreSQL",id:"postgresql",level:3},{value:"MongoDB",id:"mongodb",level:3},{value:"Custom Script",id:"custom-script",level:3},{value:"key_provider",id:"key_provider",level:4},{value:"Sample Code",id:"sample-code",level:4},{value:"<code>raftt data</code> command",id:"raftt-data-command",level:2},{value:"Rebuilding a Workload",id:"rebuilding-a-workload",level:2}],c={toc:p};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"database-seeding"},"Database Seeding"),(0,r.kt)("p",null,"When spawning environments, you might want to populate your databases with data before using the environment.\nTo support this, Raftt supports database seeding which is defined as a part of the ",(0,r.kt)("a",{parentName:"p",href:"/config/rafttfile"},".raftt")," file."),(0,r.kt)("h2",{id:"seeding-methods"},"Seeding Methods"),(0,r.kt)("p",null,"Raftt currently supports three seeding methods -"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A built-in method to load a ",(0,r.kt)("inlineCode",{parentName:"li"},".sql")," dump file into a PostgreSQL database."),(0,r.kt)("li",{parentName:"ul"},"A built-in method to load a ",(0,r.kt)("inlineCode",{parentName:"li"},".archive")," dump file into MongoDB."),(0,r.kt)("li",{parentName:"ul"},"A user-created script that seeds the databases.")),(0,r.kt)("h3",{id:"postgresql"},"PostgreSQL"),(0,r.kt)("p",null,"Load a database dump file as a PostgreSQL ",(0,r.kt)("inlineCode",{parentName:"p"},".sql")," file. To allow all team members to share the same initial database state, we recommend that the dump file be committed to the repo.",(0,r.kt)("br",{parentName:"p"}),"\n","This file can be created by ",(0,r.kt)("inlineCode",{parentName:"p"},"pg_dumpall")," or by running ",(0,r.kt)("a",{parentName:"p",href:"/cli_reference#raftt-data-dump"},(0,r.kt)("inlineCode",{parentName:"a"},"raftt data dump")),"."),(0,r.kt)("p",null,"To configure seeding of a PostgreSQL database, edit the ",(0,r.kt)("a",{parentName:"p",href:"/config/rafttfile"},".raftt")," configuration file -"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'db_storage_vol = volume("db_storage")\n\nresources = ...  # Load from docker-compose, helm, or k8s manifests\ndb_pod = resources.pods["db"]\n\n# Use a native PostgreSQL initializer\ndb_storage_vol.initializer = postgres_volume_initializer(workload=db_pod, dump_file_path="path/to/dump.sql", user="postgres")\ndb_pod.mount(db_storage_vol, dst="/data")\n')),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://docs.raftt.io/rafttfile/index.html#api.postgres_volume_initializer"},"Link to API Reference"),"."),(0,r.kt)("h3",{id:"mongodb"},"MongoDB"),(0,r.kt)("p",null,"Load a database dump file as a MongoDB ",(0,r.kt)("inlineCode",{parentName:"p"},".archive")," file. To allow all team members to share the same initial database state, we recommend that the dump file be committed to the repo.",(0,r.kt)("br",{parentName:"p"}),"\n","This file can be created by ",(0,r.kt)("inlineCode",{parentName:"p"},"mongodump")," or by running ",(0,r.kt)("a",{parentName:"p",href:"/cli_reference#raftt-data-dump"},(0,r.kt)("inlineCode",{parentName:"a"},"raftt data dump")),"."),(0,r.kt)("p",null,"To configure seeding of a MongoDB database, edit the ",(0,r.kt)("a",{parentName:"p",href:"/config/rafttfile"},".raftt")," configuration file -"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'db_storage_vol = volume("db_storage")\n\nresources = ...  # Load from docker-compose, helm, or k8s manifests\ndb_pod = resources.pods["db"]\n\n# Use a native MongoDB initializer\ndb_storage_vol.initializer = mongodb_volume_initializer(workload=db_pod, dump_file_path="dev_container/dump.archive")\ndb_pod.mount(db_storage_vol, dst="/data")\n')),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://docs.raftt.io/rafttfile/index.html#api.mongodb_volume_initializer"},"Link to API Reference"),"."),(0,r.kt)("h3",{id:"custom-script"},"Custom Script"),(0,r.kt)("p",null,"If you don't use PostgreSQL or MongoDB, or want a more customized database seeding experience, you can create a custom script.",(0,r.kt)("br",{parentName:"p"}),"\n","This allows complete control over how you wish to populate your databases and is database type independent.",(0,r.kt)("br",{parentName:"p"}),"\n","Using the custom script, Raftt supports advanced use cases such as:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Loading a large dump from S3."),(0,r.kt)("li",{parentName:"ul"},"Auto-generating DB data.")),(0,r.kt)("admonition",{title:"important",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"The DB process is not guaranteed to be ready to accept connections before the script is executed.",(0,r.kt)("br",{parentName:"p"}),"\n","The script should wait for the DB and poll it.")),(0,r.kt)("p",null,"To configure custom seeding of your database, edit the ",(0,r.kt)("a",{parentName:"p",href:"/config/rafttfile"},".raftt")," configuration file -"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'db_storage_vol = volume("db_storage")\n\nresources = ...  # Load from docker-compose, helm, or k8s manifests\ndb_pod = resources.pods["db"]\n\n# Use a custom initializer\ndb_storage_vol.initializer = script_volume_initializer(workload=db_pod, script="bash seed_db.sh")\ndb_pod.mount(db_storage_vol, dst="/data")\n')),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://docs.raftt.io/rafttfile/index.html#api.script_volume_initializer"},"Link to API Reference"),"."),(0,r.kt)("h4",{id:"key_provider"},"key_provider"),(0,r.kt)("p",null,"Seeding the database using a seeding script can take a while, especially if it downloads large amounts of data. To save time, Raftt can check if the dump was already used.",(0,r.kt)("br",{parentName:"p"}),"\n","Raftt checks the dump's unique key created by running the script supplied as keyProvider.",(0,r.kt)("br",{parentName:"p"}),"\n","A simple example is a script that prints the hash of the dump file -"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"shasum dump.sql\n")),(0,r.kt)("h4",{id:"sample-code"},"Sample Code"),(0,r.kt)("p",null,"The following code samples demonstrate how to poll different databases to ensure they are up and running before seeding them."),(0,r.kt)(o.Z,{className:"unique-tabs",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"third",label:"MySQL",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'#!/usr/bin/env bash\nset -e\n\nDB_HOST=db\nDB_USER=root\nDB_PASSWORD=password\nDB_NAME=app_development\nDUMP_PATH=dump.sql\n\nretry() {\n    max_attempts="${1}"; shift\n    seconds="${1}"; shift\n    attempt_num=1\n\n    until "${@}"; do\n        if [ "$attempt_num" -eq "$max_attempts" ]\n        then\n            echo "Attempt $attempt_num failed and there are no more attempts left!"\n            exit 1\n        else\n            echo "Attempt $attempt_num failed! Trying again in $seconds seconds..."\n            attempt_num=$(( 1 + attempt_num ))\n            sleep "$seconds"\n        fi\n    done\n}\n\nretry 1>&2 "5" "1" mysqladmin -h $DB_HOST -u $DB_USER -p"$DB_PASSWORD" ping\n\nmysql -u $DB_USER -p"$DB_PASSWORD" -h $DB_HOST -e "DROP DATABASE IF EXISTS $DB_NAME;"\nmysql -u $DB_USER -p"$DB_PASSWORD" -h $DB_HOST -e "CREATE DATABASE $DB_NAME;"\nmysql -u $DB_USER -p"$DB_PASSWORD" -h $DB_HOST $DB_NAME < $DUMP_PATH\n'))),(0,r.kt)(i.Z,{value:"postgres",label:"postgreSQL",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'#!/usr/bin/env bash\nset -e\n\nDATABASE_URI=postgresql://postgres:password@db\nDUMP_PATH=dump.sql\n\nretry() {\n    max_attempts="${1}"; shift\n    seconds="${1}"; shift\n    attempt_num=1\n    \n    until "${@}"; do\n        if [ "$attempt_num" -eq "$max_attempts" ]\n        then\n            echo "Attempt $attempt_num failed and there are no more attempts left!"\n            exit 1\n        else\n            echo "Attempt $attempt_num failed! Trying again in $seconds seconds..."\n            attempt_num=$(( 1 + attempt_num ))\n            sleep "$seconds"\n        fi\n    done\n}\n\nretry 1>&2 "5" "1" pg_isready -d "$DATABASE_URI"\npsql -d "$DATABASE_URI" -f "$DUMP_PATH"\n')))),(0,r.kt)("h2",{id:"raftt-data-command"},(0,r.kt)("inlineCode",{parentName:"h2"},"raftt data")," command"),(0,r.kt)("p",null,"To explicitly initiate actions on the databases - dump, save, load, and seed - you can use the ",(0,r.kt)("a",{parentName:"p",href:"../cli_reference#raftt-data"},(0,r.kt)("inlineCode",{parentName:"a"},"raftt data"))," command."),(0,r.kt)("h2",{id:"rebuilding-a-workload"},"Rebuilding a Workload"),(0,r.kt)("p",null,"When rebuilding a workload using the ",(0,r.kt)("a",{parentName:"p",href:"../cli_reference#raftt-rebuild"},(0,r.kt)("inlineCode",{parentName:"a"},"raftt rebuild")),", the default behavior is ",(0,r.kt)("strong",{parentName:"p"},"not")," to reseed the databases that are defined in ",(0,r.kt)("a",{parentName:"p",href:"./raftt.yml"},"raftt.yml"),", but to keep the state as-is.\nTo reseed the databases when rebuilding a service, use ",(0,r.kt)("a",{parentName:"p",href:"../cli_reference#raftt-rebuild"},(0,r.kt)("inlineCode",{parentName:"a"},"raftt rebuild -r")),"."))}m.isMDXComponent=!0}}]);