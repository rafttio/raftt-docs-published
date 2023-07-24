"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[485],{3905:function(e,t,n){n.d(t,{Zo:function(){return f},kt:function(){return p}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},f=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,f=s(e,["components","mdxType","originalType","parentName"]),d=c(n),p=r,m=d["".concat(i,".").concat(p)]||d[p]||u[p]||o;return n?a.createElement(m,l(l({ref:t},f),{},{components:n})):a.createElement(m,l({ref:t},f))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},274:function(e,t,n){n.r(t),n.d(t,{assets:function(){return f},contentTitle:function(){return i},default:function(){return p},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),l=["components"],s={title:"CLI Reference"},i="CLI Reference",c={unversionedId:"cli_reference",id:"cli_reference",title:"CLI Reference",description:"In this document, you can find the full list of Raftt CLI commands and usage information.",source:"@site/docs/cli_reference.md",sourceDirName:".",slug:"/cli_reference",permalink:"/cli_reference",draft:!1,tags:[],version:"current",frontMatter:{title:"CLI Reference"},sidebar:"tutorialSidebar",previous:{title:".NET",permalink:"/debugging/dotnet"}},f={},u=[{value:"raftt",id:"raftt",level:2},{value:"Command List",id:"command-list",level:2},{value:"raftt cleanup",id:"raftt-cleanup",level:3},{value:"raftt cluster",id:"raftt-cluster",level:3},{value:"raftt cluster envs",id:"raftt-cluster-envs",level:4},{value:"raftt cluster secrets",id:"raftt-cluster-secrets",level:4},{value:"raftt cluster secrets delete",id:"raftt-cluster-secrets-delete",level:4},{value:"raftt cluster secrets list",id:"raftt-cluster-secrets-list",level:4},{value:"raftt cluster secrets set",id:"raftt-cluster-secrets-set",level:4},{value:"raftt config",id:"raftt-config",level:3},{value:"raftt config debug",id:"raftt-config-debug",level:4},{value:"raftt connect",id:"raftt-connect",level:3},{value:"raftt cp",id:"raftt-cp",level:3},{value:"raftt data",id:"raftt-data",level:3},{value:"raftt data dump",id:"raftt-data-dump",level:4},{value:"raftt data load",id:"raftt-data-load",level:4},{value:"raftt data save",id:"raftt-data-save",level:4},{value:"raftt data seed",id:"raftt-data-seed",level:4},{value:"raftt dev",id:"raftt-dev",level:3},{value:"raftt disconnect",id:"raftt-disconnect",level:3},{value:"raftt doctor",id:"raftt-doctor",level:3},{value:"raftt down",id:"raftt-down",level:3},{value:"raftt envlogs",id:"raftt-envlogs",level:3},{value:"raftt expose",id:"raftt-expose",level:3},{value:"raftt init",id:"raftt-init",level:3},{value:"raftt list",id:"raftt-list",level:3},{value:"raftt logs",id:"raftt-logs",level:3},{value:"raftt port",id:"raftt-port",level:3},{value:"raftt port map",id:"raftt-port-map",level:4},{value:"raftt port unmap",id:"raftt-port-unmap",level:4},{value:"raftt rebuild",id:"raftt-rebuild",level:3},{value:"raftt restart",id:"raftt-restart",level:3},{value:"raftt setup",id:"raftt-setup",level:3},{value:"raftt sh",id:"raftt-sh",level:3},{value:"raftt share",id:"raftt-share",level:3},{value:"raftt status",id:"raftt-status",level:3},{value:"raftt stop",id:"raftt-stop",level:3},{value:"raftt sync",id:"raftt-sync",level:3},{value:"raftt up",id:"raftt-up",level:3},{value:"raftt version",id:"raftt-version",level:3}],d={toc:u};function p(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"cli-reference"},"CLI Reference"),(0,o.kt)("p",null,"In this document, you can find the full list of Raftt CLI commands and usage information."),(0,o.kt)("p",null,"Help information is also available by running ",(0,o.kt)("inlineCode",{parentName:"p"},"raftt --help"),", or ",(0,o.kt)("inlineCode",{parentName:"p"},"raftt -h"),"."),(0,o.kt)("h2",{id:"raftt"},"raftt"),(0,o.kt)("p",null,"Manage your development environment with ease"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"Usage:\n  raftt\n  raftt [command]\n\nAvailable Commands:\n  cleanup        Clean a Kubernetes namespace from the changes performed on and after 'raftt connect' by Raftt.\n  cluster        Manage global cluster properties\n  config         Manage and debug raftt configuration\n  connect        Connect to an existing Kubernetes namespace\n  cp             Copy files to and from a workload\n  data           Reset or persist the data of a workload\n  dev            Transform one or more resources into development mode\n  disconnect     Disconnect from current active session\n  doctor         Send local diagnostics to Raftt\n  down           Delete environment\n  envlogs        Show the output of all commands that control the env.\n  expose         Share access to one or more workloads\n  init           Initialize Raftt for the current git repository\n  list           List connected environments\n  logs           Get the logs of a workload or hooks\n  port           Control port forwarding to remote environment\n  rebuild        Rebuild and deploy one or more workloads\n  restart        Restart a workload\n  setup          Create the first raftt.yml file\n  sh             Connect or run a command on a workload\n  share          Generate access token for environment sharing\n  status         Show the status of the current Raftt environment\n  stop           Stop one or more workloads\n  sync           Synchronize local auxiliary repositories\n  up             Spawn or reconnect to a Raftt environment\n  version        Show the Raftt version information\n\nUse \"raftt [command] --help\" for more information about a command.\n")),(0,o.kt)("h2",{id:"command-list"},"Command List"),(0,o.kt)("h3",{id:"raftt-cleanup"},"raftt cleanup"),(0,o.kt)("p",null,"Clean a Kubernetes namespace from the changes performed on and after 'raftt connect' by Raftt.\nIf no namespace is provided, the namespace connected to the current context is used."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"Usage:\n  raftt cleanup\n\nFlags:\n      --direct   Cleanup Raftt environment controller created directly over kubernetes context\n      --force    Force cleanup Raftt environment controller and all dev-mode resources\n")),(0,o.kt)("h3",{id:"raftt-cluster"},"raftt cluster"),(0,o.kt)("p",null,"Manage global cluster properties (secrets, envs, ...)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},'Usage:\n  raftt cluster [command]\n\nAvailable Commands:\n  envs          Lists all the environments in the cluster\n  secrets       Perform actions on cluster secrets\n\nUse "raftt cluster [command] --help" for more information about a command.\n')),(0,o.kt)("h4",{id:"raftt-cluster-envs"},"raftt cluster envs"),(0,o.kt)("p",null,"Lists all the environments in the cluster. Only available for users with the required permissions."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"Usage:\n  raftt cluster envs\n")),(0,o.kt)("h4",{id:"raftt-cluster-secrets"},"raftt cluster secrets"),(0,o.kt)("p",null,"Set, delete or list global cluster secrets"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},'Usage:\n  raftt cluster secrets [command]\n\nAvailable Commands:\n  delete      Delete a global cluster secret\n  list        List global cluster secrets\n  set         Set a global cluster secret\n\nUse "raftt cluster secrets [command] --help" for more information about a command.\n')),(0,o.kt)("h4",{id:"raftt-cluster-secrets-delete"},"raftt cluster secrets delete"),(0,o.kt)("p",null,"Delete a global cluster secret"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"Usage:\n  raftt cluster secrets delete SECRET_NAME\n\nFlags:\n      --force   force deletion\n")),(0,o.kt)("h4",{id:"raftt-cluster-secrets-list"},"raftt cluster secrets list"),(0,o.kt)("p",null,"List all secrets defined in the cluster"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"Usage:\n  raftt cluster secrets list\n")),(0,o.kt)("h4",{id:"raftt-cluster-secrets-set"},"raftt cluster secrets set"),(0,o.kt)("p",null,"Set a global cluster secret"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"Usage:\n  raftt cluster secrets set SECRET_NAME\n\nFlags:\n  -f, --file string   file from which to read secret\n")),(0,o.kt)("h3",{id:"raftt-config"},"raftt config"),(0,o.kt)("p",null,"Manage and debug raftt configuration"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},'Usage:\n  raftt config [command]\n\nAvailable Commands:\n  debug       Debug raftt starlark configuration\n\nUse "raftt config [command] --help" for more information about a command.\n')),(0,o.kt)("h4",{id:"raftt-config-debug"},"raftt config debug"),(0,o.kt)("p",null,"Debug raftt starlark configuration"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"Usage:\n  raftt config debug\n\nFlags:\n      --config-args string        A string that is passed to the env config file. Only relevant when using envDefinition in raftt.yml.\n      --config-args-file string   Path to file to use as the input string passed to the env config file. Only relevant when using envDefinition in raftt.yml.\n      --to-be-deployed            print the list of resources to be deployed\n")),(0,o.kt)("h3",{id:"raftt-connect"},"raftt connect"),(0,o.kt)("p",null,"Connect to an existing Kubernetes namespace"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"Usage:\n  raftt connect NAMESPACE\n\nFlags:\n      --context string   Specify alternate kube context to connect with\n      --direct           Create Raftt Environment Controller directly over kubernetes context\n  -d, --disconnect       Disconnect from the current environment, without releasing any resources\n")),(0,o.kt)("h3",{id:"raftt-cp"},"raftt cp"),(0,o.kt)("p",null,"Copy files to and from a workload.\nOmitting the workload name means referring to the local machine."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"Usage:\n  raftt cp [WORKLOAD:]source ... [WORKLOAD:]target\n\nFlags:\n  -c, --container string   Copy files to a specific container within a workload\n")),(0,o.kt)("h3",{id:"raftt-data"},"raftt data"),(0,o.kt)("p",null,"Reset or persist the state of one or more databases to / from git or the cloud"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},'Usage:\n  raftt data [command]\n\nAvailable Commands:\n  dump        Dump the state of a database to a file in the git repository\n  load        Load a previously saved DB state according to a tag\n  save        Commit the state of one or more databases to the cloud according to a tag\n  seed        Seeds the state of one or more databases from git or the cloud\n\nUse "raftt data [command] --help" for more information about a command.\n')),(0,o.kt)("h4",{id:"raftt-data-dump"},"raftt data dump"),(0,o.kt)("p",null,"Dump the state of one or more databases to a file in the git repository"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"Usage:\n  raftt data dump WORKLOAD [...]\n")),(0,o.kt)("h4",{id:"raftt-data-load"},"raftt data load"),(0,o.kt)("p",null,"Load a previously saved DB state according to a tag of one or more databases from the cloud"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"Usage:\n  raftt data load WORKLOAD -t TAG\n\nFlags:\n  -s, --shared       Load the tag from the shared tag pool\n  -t, --tag string   Reset to a specific tag, applies to all services being seeded\n")),(0,o.kt)("h4",{id:"raftt-data-save"},"raftt data save"),(0,o.kt)("p",null,"Commit the state of one or more databases to the cloud according to a supplied tag"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"Usage:\n  raftt data save WORKLOAD -t TAG\n\nFlags:\n  -s, --shared       Save this tag to the shared tag pool to allow others to access it\n  -t, --tag string   Commit to a specific tag, applies to all services being seeded\n")),(0,o.kt)("h4",{id:"raftt-data-seed"},"raftt data seed"),(0,o.kt)("p",null,"Seeds the state of one or more databases according to git or the cloud"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"Usage:\n  raftt data seed WORKLOAD [...]\n")),(0,o.kt)("h3",{id:"raftt-dev"},"raftt dev"),(0,o.kt)("p",null,"Transform one or more resources into development mode"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"Usage:\n  raftt dev [RESOURCES...]\n\nFlags:\n  -u, --undev   Leave dev-mode and return the resource(s) to their original state\n")),(0,o.kt)("h3",{id:"raftt-disconnect"},"raftt disconnect"),(0,o.kt)("p",null,"Disconnect from current active session"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"Usage:\n  raftt disconnect\n")),(0,o.kt)("h3",{id:"raftt-doctor"},"raftt doctor"),(0,o.kt)("p",null,"Send local diagnostics to Raftt"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"Usage:\n  raftt doctor\n\nAliases:\n  doctor, diagnostics\n\nFlags:\n  -m, --message string   Add a message to explain to Raftt what happened\n")),(0,o.kt)("h3",{id:"raftt-down"},"raftt down"),(0,o.kt)("p",null,"Delete environment that is currently connected or exists for this branch."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"Usage:\n  raftt down\n\nFlags:\n  -a, --all         all envs\n  -d, --delete      delete env (no longer required, as this is the default behavior)\n  -f, --force       Don\u2019t prompt when using the --all flag\n      --hibernate   hibernate env instead of deleting\n  -w, --wait        wait for logs\n")),(0,o.kt)("h3",{id:"raftt-envlogs"},"raftt envlogs"),(0,o.kt)("p",null,"Show the output of all commands that control the env.\nThese commands are ",(0,o.kt)("inlineCode",{parentName:"p"},"up"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"down"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"connect"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"disconnect"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"cleanup"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"rebuild")," and `dev."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},'Usage:\n  raftt envlogs\n\nFlags:\n  -f, --follow         Follow log output\n      --since string   Show logs since timestamp (e.g. 2013-01-02T13:23:37Z) or relative (e.g. 42m for 42 minutes)\n  -n, --tail string    Number of lines to show from the end of the logs (default "all")\n  -t, --timestamps     Show timestamps\n      --until string   Show logs before a timestamp (e.g. 2013-01-02T13:23:37Z) or relative (e.g. 42m for 42 minutes)\n')),(0,o.kt)("h3",{id:"raftt-expose"},"raftt expose"),(0,o.kt)("p",null,"Share access to one or more workloads through a publicly accessible URL"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"Usage:\n  raftt expose WORKLOAD_NAME [...]\n\nFlags:\n  -d, --delete               Stop exposing a workload\n      --password-fd string   File to read password for authentication\n  -p, --port uint16          The port to expose. If the workload has exactly one port, defaults to it. Otherwise, must be specified.\n  -u, --user string          Username for authentication\n")),(0,o.kt)("h3",{id:"raftt-init"},"raftt init"),(0,o.kt)("p",null,"Initialize Raftt for the current git repository. Run once per git repository."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"Usage:\n  raftt init\n\nFlags:\n  -F, --force   force overwrite current user token\n")),(0,o.kt)("h3",{id:"raftt-list"},"raftt list"),(0,o.kt)("p",null,"List connected environments"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"Usage:\n  raftt list\n")),(0,o.kt)("h3",{id:"raftt-logs"},"raftt logs"),(0,o.kt)("p",null,"Get the logs of a workload or hooks"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},'Usage:\n  raftt logs WORKLOAD\n\nFlags:\n  -c, --container string   Show logs for specific container within a workload\n  -f, --follow             Follow log output\n      --hooks              Show the logs for the event hooking mechanism. Can be used with or without specifying a workload.\n      --since string       Show logs since timestamp (e.g. 2013-01-02T13:23:37Z) or relative (e.g. 42m for 42 minutes)\n  -n, --tail string        Number of lines to show from the end of the logs (default "all")\n  -t, --timestamps         Show timestamps\n      --until string       Show logs before a timestamp (e.g. 2013-01-02T13:23:37Z) or relative (e.g. 42m for 42 minutes)\n')),(0,o.kt)("h3",{id:"raftt-port"},"raftt port"),(0,o.kt)("p",null,"Control port forwarding to remote environment"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},'Usage:\n  raftt port [command]\n\nAvailable Commands:\n  map         Forward local port(s) to remote env\n  unmap       Unmap local ports from remote env\n\nUse "raftt port [command] --help" for more information about a command.\n')),(0,o.kt)("h4",{id:"raftt-port-map"},"raftt port map"),(0,o.kt)("p",null,"Map local port(s) to remote env"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"Usage:\n  raftt port map [-r] SERVICE [LOCAL_PORT:]REMOTE_PORT\n\nFlags:\n  -r, --reverse   Forward from remote service to local machine instead (reverse tunnel)\n")),(0,o.kt)("h4",{id:"raftt-port-unmap"},"raftt port unmap"),(0,o.kt)("p",null,"Unmap local ports from remote env"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"Usage:\n  raftt port unmap LOCAL_PORT\n\nFlags:\n  -r, --reverse   unmap reverse tunnel\n")),(0,o.kt)("h3",{id:"raftt-rebuild"},"raftt rebuild"),(0,o.kt)("p",null,"Rebuild and deploy one or more workloads. If no workloads specified, the entire environment is rebuilt and deployed."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"Usage:\n  raftt rebuild [SERVICES...]\n\nFlags:\n      --add-remove                    Only start resources added to the env definition and delete resources that were removed\n      --compose-profile stringArray   Stating which docker-compose profile to use. Use multiple times to start multiple profiles. Not relevant when using envDefinition in raftt.yml.\n      --config-args string            A string that is passed to the env config file. Only relevant when using envDefinition in raftt.yml.\n      --config-args-file string       Path to file to use as the input string passed to the env config file. Only relevant when using envDefinition in raftt.yml.\n  -r, --reseed                        re-seed DBs\n      --setup                         Run initial setup before creating the environment\n")),(0,o.kt)("h3",{id:"raftt-restart"},"raftt restart"),(0,o.kt)("p",null,"Restart the main process of a workload.\nNOTE: The container itself isn't restarted and any changes made to it will remain."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"Usage:\n  raftt restart WORKLOAD [OPTIONS] -- [ALTERNATIVE_ARGUMENTS]\n\nFlags:\n  -c, --container string           Specify specific container within a workload\n  -e, --env stringArray            Specify environment variables to set for the process\n      --env-file string            Specify a file to read environment variables from\n  -n, --no-interrupt-interactive   Restart only if a non-interactive process (i.e. not through execute / debug) is currently running\n  -w, --workdir string             Specify workdir to set for the process\n")),(0,o.kt)("h3",{id:"raftt-setup"},"raftt setup"),(0,o.kt)("p",null,"Help with the setup of the Raftt environment"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},'Usage:\n  raftt setup\n\nFlags:\n  -d, --dev-container-folder string   Folder under the git root to put the dev-container dockerfile at (default "dev")\n      --direct                        Generate default configuration for direct connection flow\n')),(0,o.kt)("h3",{id:"raftt-sh"},"raftt sh"),(0,o.kt)("p",null,"Connect or run a command on a workload using the SSH protocol"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"Usage:\n  raftt sh SERVICE [flags] [-- COMMAND]\n\nFlags:\n  -c, --container string     connect to a specific container within a workload\n      --share-token string   Connect to another env using a share token\n")),(0,o.kt)("h3",{id:"raftt-share"},"raftt share"),(0,o.kt)("p",null,"Generate access token for environment sharing"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"Usage:\n  raftt share\n")),(0,o.kt)("h3",{id:"raftt-status"},"raftt status"),(0,o.kt)("p",null,"Show the status of the current Raftt environment. If one or more workloads are stated, only show their status."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"Usage:\n  raftt status [WORKLOADS ...]\n\nFlags:\n  -d, --debug   show debug information\n  -w, --wait    wait for environment to spawn\n")),(0,o.kt)("h3",{id:"raftt-stop"},"raftt stop"),(0,o.kt)("p",null,"Stop the main process and its children of one or more workloads"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"Usage:\n  raftt stop WORKLOAD\n\nFlags:\n  -c, --container string   Specify specific container within a workload\n")),(0,o.kt)("h3",{id:"raftt-sync"},"raftt sync"),(0,o.kt)("p",null,"Synchronize local auxiliary repositories to an existing raftt environment"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"Usage:\n  raftt sync\n\nFlags:\n  -d, --unsync   unsync currently synced repository\n")),(0,o.kt)("h3",{id:"raftt-up"},"raftt up"),(0,o.kt)("p",null,"Spawn a new Raftt environment or reconnect to an existing one"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"Usage:\n  raftt up\n\nFlags:\n      --compose-profile stringArray   Stating which docker-compose profile to use. Use multiple times to start multiple profiles. Not relevant when using envDefinition in raftt.yml.\n      --config-args string            A string that is passed to the env config file. Only relevant when using envDefinition in raftt.yml.\n      --config-args-file string       Path to file to use as the input string passed to the env config file. Only relevant when using envDefinition in raftt.yml.\n      --setup                         Run initial setup before creating the environment\n")),(0,o.kt)("h3",{id:"raftt-version"},"raftt version"),(0,o.kt)("p",null,"Shows the version information of the Raftt executable"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"Usage:\n  raftt version\n\nFlags:\n  -s, --silent   Show version only\n")))}p.isMDXComponent=!0}}]);