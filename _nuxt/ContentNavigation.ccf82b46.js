import{w as A,h as E,s as O,_ as r,j as L,a as I,b as l,r as v,e as c,f as D,i as R,k as V,l as h,m as P,p as b,d as i,t as B,q as N,v as x,x as j,y as k,z as C}from"./entry.df216669.js";import"./client-only.751a0ccf.js";import"./ContentSlot.564724fe.js";import"./DocumentDrivenEmpty.d8c6233c.js";import"./DocumentDrivenNotFound.2108803d.js";import"./Markdown.325f7b24.js";import"./ProseCode.c13d03cd.js";const w=async t=>{let e=t;typeof(e==null?void 0:e.params)=="function"&&(e=e.params());const o=A(e?`/navigation/${E(e)}.json`:"/navigation");if(O())return(await r(()=>import("./client-db.40ecea7a.js"),["client-db.40ecea7a.js","entry.df216669.js","entry.b9867802.css"],import.meta.url).then(a=>a.generateNavigation))(e||{});const n=await $fetch(o,{method:"GET",responseType:"json",params:{_params:L(e||{}),previewToken:I("previewToken").value}});if(typeof n=="string"&&n.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return n};const z=l({emits:{error(t){return!0}},setup(t,{slots:e,emit:o}){const n=v(null),u=c();return D(a=>{if(!u.isHydrating)return o("error",a),n.value=a,!1}),()=>{var a,_;return n.value?(a=e.error)==null?void 0:a.call(e,{error:n}):(_=e.default)==null?void 0:_.call(e)}}}),q=Object.freeze(Object.defineProperty({__proto__:null,default:z},Symbol.toStringTag,{value:"Module"})),M=l({name:"ServerPlaceholder",render(){return R("div")}}),$=Object.freeze(Object.defineProperty({__proto__:null,default:M},Symbol.toStringTag,{value:"Module"})),H=l({name:"NuxtLoadingIndicator",props:{throttle:{type:Number,default:200},duration:{type:Number,default:2e3},height:{type:Number,default:3},color:{type:String,default:"repeating-linear-gradient(to right,#00dc82 0%,#34cdfe 50%,#0047e1 100%)"}},setup(t,{slots:e}){const o=U({duration:t.duration,throttle:t.throttle}),n=c();return n.hook("page:start",o.start),n.hook("page:finish",o.finish),V(()=>o.clear),()=>h("div",{class:"nuxt-loading-indicator",style:{position:"fixed",top:0,right:0,left:0,pointerEvents:"none",width:`${o.progress.value}%`,height:`${t.height}px`,opacity:o.isLoading.value?1:0,background:t.color,backgroundSize:`${100/o.progress.value*100}% auto`,transition:"width 0.1s, height 0.4s, opacity 0.4s",zIndex:999999}},e)}});function U(t){const e=v(0),o=v(!1),n=P(()=>1e4/t.duration);let u=null,a=null;function _(){p(),e.value=0,o.value=!0,t.throttle?a=setTimeout(g,t.throttle):g()}function f(){e.value=100,y()}function p(){clearInterval(u),clearTimeout(a),u=null,a=null}function S(T){e.value=Math.min(100,e.value+T)}function y(){p(),setTimeout(()=>{o.value=!1,setTimeout(()=>{e.value=0},400)},500)}function g(){u=setInterval(()=>{S(n.value)},100)}return{progress:e,isLoading:o,start:_,finish:f,clear:p}}const F=Object.freeze(Object.defineProperty({__proto__:null,default:H},Symbol.toStringTag,{value:"Module"})),G=t=>Object.fromEntries(Object.entries(t).filter(([,e])=>e!==void 0)),d=(t,e)=>(o,n)=>(b(()=>t({...G(o),...n.attrs},n)),()=>{var u,a;return e?(a=(u=n.slots).default)==null?void 0:a.call(u):null}),s={accesskey:String,autocapitalize:String,autofocus:{type:Boolean,default:void 0},class:String,contenteditable:{type:Boolean,default:void 0},contextmenu:String,dir:String,draggable:{type:Boolean,default:void 0},enterkeyhint:String,exportparts:String,hidden:{type:Boolean,default:void 0},id:String,inputmode:String,is:String,itemid:String,itemprop:String,itemref:String,itemscope:String,itemtype:String,lang:String,nonce:String,part:String,slot:String,spellcheck:{type:Boolean,default:void 0},style:String,tabindex:String,title:String,translate:String},W=l({name:"Script",inheritAttrs:!1,props:{...s,async:Boolean,crossorigin:{type:[Boolean,String],default:void 0},defer:Boolean,fetchpriority:String,integrity:String,nomodule:Boolean,nonce:String,referrerpolicy:String,src:String,type:String,charset:String,language:String,body:Boolean,renderPriority:[String,Number]},setup:d((t,{slots:e})=>{var u;const o={...t},n=(((u=e.default)==null?void 0:u.call(e))||[]).filter(({children:a})=>a).map(({children:a})=>a).join("");return n&&(o.children=n),{script:[o]}})}),Y=l({name:"NoScript",inheritAttrs:!1,props:{...s,title:String,body:Boolean,renderPriority:[String,Number]},setup:d((t,{slots:e})=>{var u;const o={...t},n=(((u=e.default)==null?void 0:u.call(e))||[]).filter(({children:a})=>a).map(({children:a})=>a).join("");return n&&(o.children=n),{noscript:[o]}})}),J=l({name:"Link",inheritAttrs:!1,props:{...s,as:String,crossorigin:String,disabled:Boolean,fetchpriority:String,href:String,hreflang:String,imagesizes:String,imagesrcset:String,integrity:String,media:String,prefetch:{type:Boolean,default:void 0},referrerpolicy:String,rel:String,sizes:String,title:String,type:String,methods:String,target:String,body:Boolean,renderPriority:[String,Number]},setup:d(t=>({link:[t]}))}),K=l({name:"Base",inheritAttrs:!1,props:{...s,href:String,target:String},setup:d(t=>({base:t}))}),Q=l({name:"Title",inheritAttrs:!1,setup:d((t,{slots:e})=>{var n,u,a;return{title:((a=(u=(n=e.default)==null?void 0:n.call(e))==null?void 0:u[0])==null?void 0:a.children)||null}})}),X=l({name:"Meta",inheritAttrs:!1,props:{...s,charset:String,content:String,httpEquiv:String,name:String,body:Boolean,renderPriority:[String,Number]},setup:d(t=>{const e={...t};return e.httpEquiv&&(e["http-equiv"]=e.httpEquiv,delete e.httpEquiv),{meta:[e]}})}),Z=l({name:"Style",inheritAttrs:!1,props:{...s,type:String,media:String,nonce:String,title:String,scoped:{type:Boolean,default:void 0},body:Boolean,renderPriority:[String,Number]},setup:d((t,{slots:e})=>{var u,a,_;const o={...t},n=(_=(a=(u=e.default)==null?void 0:u.call(e))==null?void 0:a[0])==null?void 0:_.children;return n&&(o.children=n),{style:[o]}})}),tt=l({name:"Head",inheritAttrs:!1,setup:(t,e)=>()=>{var o,n;return(n=(o=e.slots).default)==null?void 0:n.call(o)}}),et=l({name:"Html",inheritAttrs:!1,props:{...s,manifest:String,version:String,xmlns:String,renderPriority:[String,Number]},setup:d(t=>({htmlAttrs:t}),!0)}),rt=l({name:"Body",inheritAttrs:!1,props:{...s,renderPriority:[String,Number]},setup:d(t=>({bodyAttrs:t}),!0)}),m=Object.freeze(Object.defineProperty({__proto__:null,Script:W,NoScript:Y,Link:J,Base:K,Title:Q,Meta:X,Style:Z,Head:tt,Html:et,Body:rt},Symbol.toStringTag,{value:"Module"}));i(()=>r(()=>import("./BigHero.11e27603.js"),["BigHero.11e27603.js","BigHero.vue_vue_type_script_setup_true_lang.41d5afee.js","entry.df216669.js","entry.b9867802.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./Blob.722c8ea3.js"),["Blob.722c8ea3.js","Blob.vue_vue_type_script_setup_true_lang.150b98e5.js","client-only.751a0ccf.js","client-only.f2ca4bc5.css","entry.df216669.js","entry.b9867802.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./CardLink.1fef7017.js"),["CardLink.1fef7017.js","CardLink.vue_vue_type_script_setup_true_lang.369f3b2d.js","entry.df216669.js","entry.b9867802.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./CardProject.76114385.js"),["CardProject.76114385.js","CardProject.vue_vue_type_script_setup_true_lang.9662a936.js","entry.df216669.js","entry.b9867802.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./CursorFollower.d80c91ca.js"),["CursorFollower.d80c91ca.js","client-only.751a0ccf.js","client-only.f2ca4bc5.css","entry.df216669.js","entry.b9867802.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./MegaMenu.a8b2e5b8.js"),["MegaMenu.a8b2e5b8.js","entry.df216669.js","entry.b9867802.css","client-only.751a0ccf.js","client-only.f2ca4bc5.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./entry.df216669.js").then(t=>t.am),["entry.df216669.js","entry.b9867802.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./entry.df216669.js").then(t=>t.an),["entry.df216669.js","entry.b9867802.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>Promise.resolve().then(()=>ot),void 0,import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./entry.df216669.js").then(t=>t.al),["entry.df216669.js","entry.b9867802.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./entry.df216669.js").then(t=>t.ak),["entry.df216669.js","entry.b9867802.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./entry.df216669.js").then(t=>t.aj),["entry.df216669.js","entry.b9867802.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ContentSlot.564724fe.js"),["ContentSlot.564724fe.js","entry.df216669.js","entry.b9867802.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./DocumentDrivenEmpty.d8c6233c.js"),["DocumentDrivenEmpty.d8c6233c.js","entry.df216669.js","entry.b9867802.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./DocumentDrivenNotFound.2108803d.js"),["DocumentDrivenNotFound.2108803d.js","entry.df216669.js","entry.b9867802.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./Markdown.325f7b24.js"),["Markdown.325f7b24.js","ContentSlot.564724fe.js","entry.df216669.js","entry.b9867802.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseA.8140919b.js"),["ProseA.8140919b.js","entry.df216669.js","entry.b9867802.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseBlockquote.ffac6427.js"),["ProseBlockquote.ffac6427.js","entry.df216669.js","entry.b9867802.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseCode.c13d03cd.js"),["ProseCode.c13d03cd.js","ProseCode.e63e49c6.css","entry.df216669.js","entry.b9867802.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseCodeInline.bacb8f5a.js"),["ProseCodeInline.bacb8f5a.js","entry.df216669.js","entry.b9867802.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseEm.50699d6d.js"),["ProseEm.50699d6d.js","entry.df216669.js","entry.b9867802.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseH1.b566fe76.js"),["ProseH1.b566fe76.js","entry.df216669.js","entry.b9867802.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseH2.667da3ae.js"),["ProseH2.667da3ae.js","entry.df216669.js","entry.b9867802.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseH3.da7e3d0d.js"),["ProseH3.da7e3d0d.js","entry.df216669.js","entry.b9867802.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseH4.234abb6c.js"),["ProseH4.234abb6c.js","entry.df216669.js","entry.b9867802.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseH5.1be289fe.js"),["ProseH5.1be289fe.js","entry.df216669.js","entry.b9867802.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseH6.e1c2eaa8.js"),["ProseH6.e1c2eaa8.js","entry.df216669.js","entry.b9867802.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseHr.14ac795b.js"),["ProseHr.14ac795b.js","entry.df216669.js","entry.b9867802.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseImg.7c2225cd.js"),["ProseImg.7c2225cd.js","entry.df216669.js","entry.b9867802.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseLi.429de122.js"),["ProseLi.429de122.js","entry.df216669.js","entry.b9867802.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseOl.e1daf856.js"),["ProseOl.e1daf856.js","entry.df216669.js","entry.b9867802.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseP.757e92d3.js"),["ProseP.757e92d3.js","entry.df216669.js","entry.b9867802.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseStrong.9e508d8c.js"),["ProseStrong.9e508d8c.js","entry.df216669.js","entry.b9867802.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseTable.dd3e7317.js"),["ProseTable.dd3e7317.js","entry.df216669.js","entry.b9867802.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseTbody.12fc63f2.js"),["ProseTbody.12fc63f2.js","entry.df216669.js","entry.b9867802.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseTd.50cca7f9.js"),["ProseTd.50cca7f9.js","entry.df216669.js","entry.b9867802.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseTh.8b8c704f.js"),["ProseTh.8b8c704f.js","entry.df216669.js","entry.b9867802.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseThead.76e45928.js"),["ProseThead.76e45928.js","entry.df216669.js","entry.b9867802.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseTr.6f19da2e.js"),["ProseTr.6f19da2e.js","entry.df216669.js","entry.b9867802.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseUl.bef834f8.js"),["ProseUl.bef834f8.js","entry.df216669.js","entry.b9867802.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./UnoIcon.c4131009.js"),["UnoIcon.c4131009.js","entry.df216669.js","entry.b9867802.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./welcome.6159b234.js"),["welcome.6159b234.js","entry.df216669.js","entry.b9867802.css","client-only.751a0ccf.js","client-only.f2ca4bc5.css","ContentSlot.564724fe.js","DocumentDrivenEmpty.d8c6233c.js","DocumentDrivenNotFound.2108803d.js","Markdown.325f7b24.js","ProseCode.c13d03cd.js","ProseCode.e63e49c6.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./entry.df216669.js").then(t=>t.ap),["entry.df216669.js","entry.b9867802.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>Promise.resolve().then(()=>q),void 0,import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./client-only.751a0ccf.js").then(t=>t.c),["client-only.751a0ccf.js","client-only.f2ca4bc5.css","entry.df216669.js","entry.b9867802.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>Promise.resolve().then(()=>$),void 0,import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./entry.df216669.js").then(t=>t.ai),["entry.df216669.js","entry.b9867802.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>Promise.resolve().then(()=>F),void 0,import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./entry.df216669.js").then(t=>t.ao),["entry.df216669.js","entry.b9867802.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>Promise.resolve().then(()=>m),void 0,import.meta.url).then(t=>t.Script));i(()=>r(()=>Promise.resolve().then(()=>m),void 0,import.meta.url).then(t=>t.NoScript));i(()=>r(()=>Promise.resolve().then(()=>m),void 0,import.meta.url).then(t=>t.Link));i(()=>r(()=>Promise.resolve().then(()=>m),void 0,import.meta.url).then(t=>t.Base));i(()=>r(()=>Promise.resolve().then(()=>m),void 0,import.meta.url).then(t=>t.Title));i(()=>r(()=>Promise.resolve().then(()=>m),void 0,import.meta.url).then(t=>t.Meta));i(()=>r(()=>Promise.resolve().then(()=>m),void 0,import.meta.url).then(t=>t.Style));i(()=>r(()=>Promise.resolve().then(()=>m),void 0,import.meta.url).then(t=>t.Head));i(()=>r(()=>Promise.resolve().then(()=>m),void 0,import.meta.url).then(t=>t.Html));i(()=>r(()=>Promise.resolve().then(()=>m),void 0,import.meta.url).then(t=>t.Body));const it=l({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(t){const{query:e}=B(t),o=P(()=>{var u;return typeof((u=e.value)==null?void 0:u.params)=="function"?e.value.params():e.value});if(!o.value&&N("dd-navigation").value){const{navigation:u}=x();return{navigation:u}}const{data:n}=await j(`content-navigation-${E(o.value)}`,()=>w(o.value));return{navigation:n}},render(t){const e=k(),{navigation:o}=t,n=_=>h(C,{to:_._path},()=>_.title),u=(_,f)=>h("ul",f?{"data-level":f}:null,_.map(p=>p.children?h("li",null,[n(p),u(p.children,f+1)]):h("li",null,n(p)))),a=_=>u(_,0);return e!=null&&e.default?e.default({navigation:o,...this.$attrs}):a(o)}}),ot=Object.freeze(Object.defineProperty({__proto__:null,default:it},Symbol.toStringTag,{value:"Module"}));export{it as default};