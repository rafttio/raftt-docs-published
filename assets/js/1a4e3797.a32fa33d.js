"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[920],{3607:function(e,t,n){n.r(t),n.d(t,{default:function(){return Z}});var r=n(5861),a=n(7757),l=n.n(a),u=n(7294),s=n(2263),c=n(2600),o=n(5742),i=n(9960),m=n(5999),h=["zero","one","two","few","many","other"];function f(e){return h.filter((function(t){return e.includes(t)}))}var p={locale:"en",pluralForms:f(["one","other"]),select:function(e){return 1===e?"one":"other"}};function d(){var e=(0,s.Z)().i18n.currentLocale;return(0,u.useMemo)((function(){try{return t=e,n=new Intl.PluralRules(t),{locale:t,pluralForms:f(n.resolvedOptions().pluralCategories),select:function(e){return n.select(e)}}}catch(r){return console.error('Failed to use Intl.PluralRules for locale "'+e+'".\nDocusaurus will fallback to the default (English) implementation.\nError: '+r.message+"\n"),p}var t,n}),[e])}function g(){var e=d();return{selectMessage:function(t,n){return function(e,t,n){var r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error("For locale="+n.locale+", a maximum of "+n.pluralForms.length+" plural forms are expected ("+n.pluralForms+"), but the message contains "+r.length+": "+e);var a=n.select(t),l=n.pluralForms.indexOf(a);return r[Math.min(l,r.length-1)]}(n,t,e)}}}var v=n(6775),y=n(412);var E=function(){var e=(0,v.k6)(),t=(0,v.TH)(),n=(0,s.Z)().siteConfig.baseUrl;return{searchValue:y.default.canUseDOM&&new URLSearchParams(t.search).get("q")||"",updateSearchPath:function(n){var r=new URLSearchParams(t.search);n?r.set("q",n):r.delete("q"),e.replace({search:r.toString()})},generateSearchPageLink:function(e){return n+"search?q="+encodeURIComponent(e)}}},w=n(22),S=n(8202),b=n(2539),I=n(726),F=n(1073),P=n(311),k="searchQueryInput_CFBF",R="searchResultItem_U687",C="searchResultItemPath_uIbk",_="searchResultItemSummary_oZHr",q=n(3926);function x(e){var t=e.searchResult,n=t.document,r=t.type,a=t.page,l=t.tokens,s=t.metadata,c=0===r,o=2===r,m=(c?n.b:a.b).slice(),h=o?n.s:n.t;return c||m.push(a.t),u.createElement("article",{className:R},u.createElement("h2",null,u.createElement(i.Z,{to:n.u+(n.h||""),dangerouslySetInnerHTML:{__html:o?(0,b.C)(h,l):(0,I.o)(h,(0,F.m)(s,"t"),l,100)}})),m.length>0&&u.createElement("p",{className:C},(0,q.e)(m)),o&&u.createElement("p",{className:_,dangerouslySetInnerHTML:{__html:(0,I.o)(n.t,(0,F.m)(s,"t"),l,100)}}))}var Z=function(){var e=(0,s.Z)().siteConfig.baseUrl,t=g().selectMessage,n=E(),a=n.searchValue,i=n.updateSearchPath,h=(0,u.useState)(a),f=h[0],p=h[1],d=(0,u.useState)(),v=d[0],y=d[1],b=(0,u.useState)(),I=b[0],F=b[1],R=(0,u.useMemo)((function(){return f?(0,m.I)({id:"theme.SearchPage.existingResultsTitle",message:'Search results for "{query}"',description:"The search page title for non-empty query"},{query:f}):(0,m.I)({id:"theme.SearchPage.emptyResultsTitle",message:"Search the documentation",description:"The search page title for empty query"})}),[f]);(0,u.useEffect)((function(){i(f),v&&(f?v(f,(function(e){F(e)})):F(void 0))}),[f,v]);var C=(0,u.useCallback)((function(e){p(e.target.value)}),[]);return(0,u.useEffect)((function(){a&&a!==f&&p(a)}),[a]),(0,u.useEffect)((function(){function t(){return(t=(0,r.Z)(l().mark((function t(){var n,r,a;return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,w.w)(e);case 2:n=t.sent,r=n.wrappedIndexes,a=n.zhDictionary,y((function(){return(0,S.v)(r,a,100)}));case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e]),u.createElement(c.Z,null,u.createElement(o.Z,null,u.createElement("meta",{property:"robots",content:"noindex, follow"}),u.createElement("title",null,R)),u.createElement("div",{className:"container margin-vert--lg"},u.createElement("h1",null,R),u.createElement("input",{type:"search",name:"q",className:k,"aria-label":"Search",onChange:C,value:f,autoComplete:"off",autoFocus:!0}),!v&&f&&u.createElement("div",null,u.createElement(P.Z,null)),I&&(I.length>0?u.createElement("p",null,t(I.length,(0,m.I)({id:"theme.SearchPage.documentsFound.plurals",message:"1 document found|{count} documents found",description:'Pluralized label for "{count} documents found". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)'},{count:I.length}))):u.createElement("p",null,(0,m.I)({id:"theme.SearchPage.noDocumentsFound",message:"No documents were found",description:"The paragraph for empty search result"}))),u.createElement("section",null,I&&I.map((function(e){return u.createElement(x,{key:e.document.i,searchResult:e})})))))}}}]);