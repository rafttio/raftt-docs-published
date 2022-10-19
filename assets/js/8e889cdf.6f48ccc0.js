"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[828],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),d=i,f=u["".concat(p,".").concat(d)]||u[d]||m[d]||r;return n?a.createElement(f,o(o({ref:t},c),{},{components:n})):a.createElement(f,o({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3293:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return m}});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),o=["components"],l={title:"raftt.yml"},p="Raftt Configuration File - raftt.yml",s={unversionedId:"config/raftt.yml",id:"config/raftt.yml",title:"raftt.yml",description:"The configuration of Raftt is located in the raftt.yml file that is created the first time you run raftt up for the repository.",source:"@site/docs/config/raftt.yml.md",sourceDirName:"config",slug:"/config/raftt.yml",permalink:"/docs/config/raftt.yml",draft:!1,tags:[],version:"current",frontMatter:{title:"raftt.yml"},sidebar:"tutorialSidebar",previous:{title:"Configuration",permalink:"/docs/config"},next:{title:"The .raftt File",permalink:"/docs/config/rafttfile"}},c={},m=[{value:"<code>raftt.yml</code> Example",id:"rafttyml-example",level:2},{value:"raftt.yml Specification",id:"rafttyml-specification",level:2},{value:"envDefinition",id:"envdefinition",level:3},{value:"data (optional)",id:"data-optional",level:3},{value:"secrets (optional)",id:"secrets-optional",level:3},{value:"repoVolumeSizeGB (optional)",id:"repovolumesizegb-optional",level:3},{value:"warmUpScript (optional)",id:"warmupscript-optional",level:3},{value:"tearDownScript (optional)",id:"teardownscript-optional",level:3}],u={toc:m};function d(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"raftt-configuration-file---rafttyml"},"Raftt Configuration File - raftt.yml"),(0,r.kt)("p",null,"The configuration of Raftt is located in the ",(0,r.kt)("inlineCode",{parentName:"p"},"raftt.yml")," file that is created the first time you run ",(0,r.kt)("inlineCode",{parentName:"p"},"raftt up")," for the repository.\n(It can also be created by running ",(0,r.kt)("inlineCode",{parentName:"p"},"raftt setup")," before running ",(0,r.kt)("inlineCode",{parentName:"p"},"raftt up"),").\nOnce the file is created, you need to modify it according to your needs, and we recommend committing it to your repo."),(0,r.kt)("h2",{id:"rafttyml-example"},(0,r.kt)("inlineCode",{parentName:"h2"},"raftt.yml")," Example"),(0,r.kt)("p",null,"See below a sample ",(0,r.kt)("inlineCode",{parentName:"p"},"raftt.yml")," file containing all possible attributes.",(0,r.kt)("br",{parentName:"p"}),"\n","A more detailed explanation can be found ",(0,r.kt)("a",{parentName:"p",href:"#rafttyml-specification"},"below")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"envDefinition: acme.raftt\ndata:                                          # Database seeding configuration\n  - service: db\n    type: postgres\n    user: postgres\n    dump: raftt/dump.sql\nsecrets:                                       # Secret fetched from local machine\n  db-password:\n    inputcommand: python3 ./scripts/get_db_password.py\n    outputenv: DB_PASSWORD \n")),(0,r.kt)("h2",{id:"rafttyml-specification"},"raftt.yml Specification"),(0,r.kt)("h3",{id:"envdefinition"},"envDefinition"),(0,r.kt)("p",null,"A top-level element that contains the path to the ",(0,r.kt)("a",{parentName:"p",href:"../config/rafttfile"},(0,r.kt)("inlineCode",{parentName:"a"},".raftt")," file")," containing the environment definition. The filename can be any arbitrary name, but we recommend to use a file extension of ",(0,r.kt)("inlineCode",{parentName:"p"},".raftt")," or ",(0,r.kt)("inlineCode",{parentName:"p"},".rft"),"."),(0,r.kt)("h3",{id:"data-optional"},"data (optional)"),(0,r.kt)("p",null,"A top level element containing a list of databases and their seeding methods. For more information, see ",(0,r.kt)("a",{parentName:"p",href:"./db_seeding"},"here"),".",(0,r.kt)("br",{parentName:"p"}),"\n","Each list entry contains the following keys:  "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"service")," - The name of the service that contains the database"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"type")," - The database type. Can be either ",(0,r.kt)("inlineCode",{parentName:"li"},"postgres"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"mongodb")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"script")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"user")," - The user used to connect to the database"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"dump")," - The dump file that is loaded to the database in the ",(0,r.kt)("a",{parentName:"li",href:"./db_seeding"},"seeding")," phase."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"keyProvider")," - If a ",(0,r.kt)("inlineCode",{parentName:"li"},"script")," type is used, the keyProvider is an additional script that returns a version of the loaded data. This is a significant optimization that shortens the amount of time it takes to deploy the environment.")),(0,r.kt)("h3",{id:"secrets-optional"},"secrets (optional)"),(0,r.kt)("p",null,"A dictionary whose keys are the secret names that can be referenced as part of the environment.",(0,r.kt)("br",{parentName:"p"}),"\n","Each dictionary entry contains the following attributes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"inputcommand")," - The command whose output is the secret.  "),(0,r.kt)("admonition",{parentName:"li",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Since this command runs locally, we recommend using an OS-independent command, so the same raftt.yml file can be shared between team members working with different operating systems.",(0,r.kt)("br",{parentName:"p"}),"\n","A possible way to do it is having this command run a short OS-independent python script whose output is the secret."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"outputenv")," - The name of the environment variable for which the value will be the output of ",(0,r.kt)("inlineCode",{parentName:"p"},"inputcommand"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"outputvolume")," - Boolean for whether to allow referencing the secret as a volume. If this is true, the secret may be loaded into the environment as a volume."))),(0,r.kt)("p",null,"Secrets loaded into Raftt in this way are never persisted, and are available only within the context of the environment - isolated completely from other users. See ",(0,r.kt)("a",{parentName:"p",href:"/docs/intro/how_raftt_works#environment-security-and-isolation"},"Environment Security and Isolation")," for more information."),(0,r.kt)("p",null,"For example, the following raftt.yml definition:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'secrets:\n  my-vol-secret:\n    inputcommand: echo "abcd"\n    outputvolume: true\n  my-env-secret:\n    inputcommand: echo "1234"\n    outputenv: MY_SECRET_ENV\n')),(0,r.kt)("p",null,"Along with the following snippet in the docker-compose:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"services:\n...\n  my_service:\n    ...\n    env:\n      - MY_SECRET_ENV\n    volumes:\n      - /SECRETS/my-vol-secret:/root/secret_file\n")),(0,r.kt)("p",null,"Will make:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"MY_SECRET_ENV")," env variable in the ",(0,r.kt)("inlineCode",{parentName:"li"},"my_service")," container equal ",(0,r.kt)("inlineCode",{parentName:"li"},"1234"),"."),(0,r.kt)("li",{parentName:"ul"},"The file ",(0,r.kt)("inlineCode",{parentName:"li"},"/root/secret_file")," in the ",(0,r.kt)("inlineCode",{parentName:"li"},"my_service")," container equal ",(0,r.kt)("inlineCode",{parentName:"li"},"abcd"),".")),(0,r.kt)("h3",{id:"repovolumesizegb-optional"},"repoVolumeSizeGB (optional)"),(0,r.kt)("p",null,"The size of the volume we allocate per environment. Default size is 5GB. This is limited to 50GB."),(0,r.kt)("h3",{id:"warmupscript-optional"},"warmUpScript (optional)"),(0,r.kt)("p",null,"A script executed from the context of the dev container before building and deploying the environment. For more details, see the dedicated ",(0,r.kt)("a",{parentName:"p",href:"/docs/config/warmup"},"warmup script")," documentation."),(0,r.kt)("h3",{id:"teardownscript-optional"},"tearDownScript (optional)"),(0,r.kt)("p",null,"Before an environment is ",(0,r.kt)("a",{parentName:"p",href:"/docs/concepts/git_workflows#idle-environments"},"frozen or otherwise destroyed"),", this script is given a chance to run on the dev container. This can be used to tear down external cloud resources."),(0,r.kt)("admonition",{title:"Note",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"We guarantee only 30 seconds of runtime - after that we continue with tearing down the environment regardless of completion.")))}d.isMDXComponent=!0}}]);