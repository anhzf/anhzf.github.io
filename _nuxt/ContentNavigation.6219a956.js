import{w as A,h as E,s as O,_ as r,j as L,a as I,b as l,r as v,e as c,f as D,i as R,k as V,l as h,m as P,p as b,d as i,t as B,q as N,v as x,x as j,y as k,z as C}from"./entry.d787de7b.js";import"./client-only.4eab2f82.js";import"./ContentSlot.51960815.js";import"./DocumentDrivenEmpty.762c926b.js";import"./DocumentDrivenNotFound.b6d57087.js";import"./Markdown.c11606f4.js";import"./ProseCode.4ef2e6ca.js";import"./index.2daba45a.js";import"./_plugin-vue_export-helper.a1a6add7.js";const w=async t=>{let e=t;typeof(e==null?void 0:e.params)=="function"&&(e=e.params());const o=A(e?`/navigation/${E(e)}.json`:"/navigation");if(O())return(await r(()=>import("./client-db.ac047688.js"),["client-db.ac047688.js","entry.d787de7b.js","entry.53c2a853.css"],import.meta.url).then(a=>a.generateNavigation))(e||{});const n=await $fetch(o,{method:"GET",responseType:"json",params:{_params:L(e||{}),previewToken:I("previewToken").value}});if(typeof n=="string"&&n.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return n};const z=l({emits:{error(t){return!0}},setup(t,{slots:e,emit:o}){const n=v(null),u=c();return D(a=>{if(!u.isHydrating)return o("error",a),n.value=a,!1}),()=>{var a,_;return n.value?(a=e.error)==null?void 0:a.call(e,{error:n}):(_=e.default)==null?void 0:_.call(e)}}}),q=Object.freeze(Object.defineProperty({__proto__:null,default:z},Symbol.toStringTag,{value:"Module"})),M=l({name:"ServerPlaceholder",render(){return R("div")}}),$=Object.freeze(Object.defineProperty({__proto__:null,default:M},Symbol.toStringTag,{value:"Module"})),H=l({name:"NuxtLoadingIndicator",props:{throttle:{type:Number,default:200},duration:{type:Number,default:2e3},height:{type:Number,default:3},color:{type:String,default:"repeating-linear-gradient(to right,#00dc82 0%,#34cdfe 50%,#0047e1 100%)"}},setup(t,{slots:e}){const o=U({duration:t.duration,throttle:t.throttle}),n=c();return n.hook("page:start",o.start),n.hook("page:finish",o.finish),V(()=>o.clear),()=>h("div",{class:"nuxt-loading-indicator",style:{position:"fixed",top:0,right:0,left:0,pointerEvents:"none",width:`${o.progress.value}%`,height:`${t.height}px`,opacity:o.isLoading.value?1:0,background:t.color,backgroundSize:`${100/o.progress.value*100}% auto`,transition:"width 0.1s, height 0.4s, opacity 0.4s",zIndex:999999}},e)}});function U(t){const e=v(0),o=v(!1),n=P(()=>1e4/t.duration);let u=null,a=null;function _(){p(),e.value=0,o.value=!0,t.throttle?a=setTimeout(g,t.throttle):g()}function f(){e.value=100,T()}function p(){clearInterval(u),clearTimeout(a),u=null,a=null}function S(y){e.value=Math.min(100,e.value+y)}function T(){p(),setTimeout(()=>{o.value=!1,setTimeout(()=>{e.value=0},400)},500)}function g(){u=setInterval(()=>{S(n.value)},100)}return{progress:e,isLoading:o,start:_,finish:f,clear:p}}const F=Object.freeze(Object.defineProperty({__proto__:null,default:H},Symbol.toStringTag,{value:"Module"})),G=t=>Object.fromEntries(Object.entries(t).filter(([,e])=>e!==void 0)),d=(t,e)=>(o,n)=>(b(()=>t({...G(o),...n.attrs},n)),()=>{var u,a;return e?(a=(u=n.slots).default)==null?void 0:a.call(u):null}),s={accesskey:String,autocapitalize:String,autofocus:{type:Boolean,default:void 0},class:String,contenteditable:{type:Boolean,default:void 0},contextmenu:String,dir:String,draggable:{type:Boolean,default:void 0},enterkeyhint:String,exportparts:String,hidden:{type:Boolean,default:void 0},id:String,inputmode:String,is:String,itemid:String,itemprop:String,itemref:String,itemscope:String,itemtype:String,lang:String,nonce:String,part:String,slot:String,spellcheck:{type:Boolean,default:void 0},style:String,tabindex:String,title:String,translate:String},W=l({name:"Script",inheritAttrs:!1,props:{...s,async:Boolean,crossorigin:{type:[Boolean,String],default:void 0},defer:Boolean,fetchpriority:String,integrity:String,nomodule:Boolean,nonce:String,referrerpolicy:String,src:String,type:String,charset:String,language:String,body:Boolean,renderPriority:[String,Number]},setup:d((t,{slots:e})=>{var u;const o={...t},n=(((u=e.default)==null?void 0:u.call(e))||[]).filter(({children:a})=>a).map(({children:a})=>a).join("");return n&&(o.children=n),{script:[o]}})}),Y=l({name:"NoScript",inheritAttrs:!1,props:{...s,title:String,body:Boolean,renderPriority:[String,Number]},setup:d((t,{slots:e})=>{var u;const o={...t},n=(((u=e.default)==null?void 0:u.call(e))||[]).filter(({children:a})=>a).map(({children:a})=>a).join("");return n&&(o.children=n),{noscript:[o]}})}),J=l({name:"Link",inheritAttrs:!1,props:{...s,as:String,crossorigin:String,disabled:Boolean,fetchpriority:String,href:String,hreflang:String,imagesizes:String,imagesrcset:String,integrity:String,media:String,prefetch:{type:Boolean,default:void 0},referrerpolicy:String,rel:String,sizes:String,title:String,type:String,methods:String,target:String,body:Boolean,renderPriority:[String,Number]},setup:d(t=>({link:[t]}))}),K=l({name:"Base",inheritAttrs:!1,props:{...s,href:String,target:String},setup:d(t=>({base:t}))}),Q=l({name:"Title",inheritAttrs:!1,setup:d((t,{slots:e})=>{var n,u,a;return{title:((a=(u=(n=e.default)==null?void 0:n.call(e))==null?void 0:u[0])==null?void 0:a.children)||null}})}),X=l({name:"Meta",inheritAttrs:!1,props:{...s,charset:String,content:String,httpEquiv:String,name:String,body:Boolean,renderPriority:[String,Number]},setup:d(t=>{const e={...t};return e.httpEquiv&&(e["http-equiv"]=e.httpEquiv,delete e.httpEquiv),{meta:[e]}})}),Z=l({name:"Style",inheritAttrs:!1,props:{...s,type:String,media:String,nonce:String,title:String,scoped:{type:Boolean,default:void 0},body:Boolean,renderPriority:[String,Number]},setup:d((t,{slots:e})=>{var u,a,_;const o={...t},n=(_=(a=(u=e.default)==null?void 0:u.call(e))==null?void 0:a[0])==null?void 0:_.children;return n&&(o.children=n),{style:[o]}})}),tt=l({name:"Head",inheritAttrs:!1,setup:(t,e)=>()=>{var o,n;return(n=(o=e.slots).default)==null?void 0:n.call(o)}}),et=l({name:"Html",inheritAttrs:!1,props:{...s,manifest:String,version:String,xmlns:String,renderPriority:[String,Number]},setup:d(t=>({htmlAttrs:t}),!0)}),rt=l({name:"Body",inheritAttrs:!1,props:{...s,renderPriority:[String,Number]},setup:d(t=>({bodyAttrs:t}),!0)}),m=Object.freeze(Object.defineProperty({__proto__:null,Script:W,NoScript:Y,Link:J,Base:K,Title:Q,Meta:X,Style:Z,Head:tt,Html:et,Body:rt},Symbol.toStringTag,{value:"Module"}));i(()=>r(()=>import("./BigHero.623c698d.js"),["BigHero.623c698d.js","BigHero.vue_vue_type_script_setup_true_lang.8a7b14fd.js","entry.d787de7b.js","entry.53c2a853.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./Blob.c281af2b.js"),["Blob.c281af2b.js","Blob.vue_vue_type_script_setup_true_lang.7e66110a.js","client-only.4eab2f82.js","client-only.c9795ed8.css","index.2daba45a.js","entry.d787de7b.js","entry.53c2a853.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./CardBlog.91747395.js"),["CardBlog.91747395.js","CardBlog.vue_vue_type_script_setup_true_lang.04808867.js","entry.d787de7b.js","entry.53c2a853.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./CardLink.7a0c7f75.js"),["CardLink.7a0c7f75.js","CardLink.vue_vue_type_script_setup_true_lang.1e3dcafb.js","entry.d787de7b.js","entry.53c2a853.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./CardProject.ad3a1699.js"),["CardProject.ad3a1699.js","CardProject.vue_vue_type_script_setup_true_lang.f7d8e176.js","entry.d787de7b.js","entry.53c2a853.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./CursorFollower.65a6f00c.js"),["CursorFollower.65a6f00c.js","client-only.4eab2f82.js","client-only.c9795ed8.css","index.2daba45a.js","entry.d787de7b.js","entry.53c2a853.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./GridBlog.d0a8bead.js"),["GridBlog.d0a8bead.js","GridBlog.vue_vue_type_script_setup_true_lang.cec91786.js","CardBlog.vue_vue_type_script_setup_true_lang.04808867.js","entry.d787de7b.js","entry.53c2a853.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./MegaMenu.b72edaaa.js"),["MegaMenu.b72edaaa.js","entry.d787de7b.js","entry.53c2a853.css","index.2daba45a.js","client-only.4eab2f82.js","client-only.c9795ed8.css","_plugin-vue_export-helper.a1a6add7.js"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./entry.d787de7b.js").then(t=>t.an),["entry.d787de7b.js","entry.53c2a853.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./entry.d787de7b.js").then(t=>t.am),["entry.d787de7b.js","entry.53c2a853.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>Promise.resolve().then(()=>ot),void 0,import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./entry.d787de7b.js").then(t=>t.al),["entry.d787de7b.js","entry.53c2a853.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./entry.d787de7b.js").then(t=>t.ak),["entry.d787de7b.js","entry.53c2a853.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./entry.d787de7b.js").then(t=>t.aj),["entry.d787de7b.js","entry.53c2a853.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ContentSlot.51960815.js"),["ContentSlot.51960815.js","entry.d787de7b.js","entry.53c2a853.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./DocumentDrivenEmpty.762c926b.js"),["DocumentDrivenEmpty.762c926b.js","entry.d787de7b.js","entry.53c2a853.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./DocumentDrivenNotFound.b6d57087.js"),["DocumentDrivenNotFound.b6d57087.js","entry.d787de7b.js","entry.53c2a853.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./Markdown.c11606f4.js"),["Markdown.c11606f4.js","ContentSlot.51960815.js","entry.d787de7b.js","entry.53c2a853.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseA.9f3f9309.js"),["ProseA.9f3f9309.js","entry.d787de7b.js","entry.53c2a853.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseBlockquote.a3f417bd.js"),["ProseBlockquote.a3f417bd.js","_plugin-vue_export-helper.a1a6add7.js","entry.d787de7b.js","entry.53c2a853.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseCode.4ef2e6ca.js"),["ProseCode.4ef2e6ca.js","ProseCode.e63e49c6.css","_plugin-vue_export-helper.a1a6add7.js","entry.d787de7b.js","entry.53c2a853.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseCodeInline.486b8fde.js"),["ProseCodeInline.486b8fde.js","_plugin-vue_export-helper.a1a6add7.js","entry.d787de7b.js","entry.53c2a853.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseEm.f50bbe82.js"),["ProseEm.f50bbe82.js","_plugin-vue_export-helper.a1a6add7.js","entry.d787de7b.js","entry.53c2a853.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseH1.e06649bd.js"),["ProseH1.e06649bd.js","entry.d787de7b.js","entry.53c2a853.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseH2.4e36f768.js"),["ProseH2.4e36f768.js","entry.d787de7b.js","entry.53c2a853.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseH3.562fe0d4.js"),["ProseH3.562fe0d4.js","entry.d787de7b.js","entry.53c2a853.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseH4.083fd67e.js"),["ProseH4.083fd67e.js","entry.d787de7b.js","entry.53c2a853.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseH5.fd63bcdd.js"),["ProseH5.fd63bcdd.js","entry.d787de7b.js","entry.53c2a853.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseH6.d83f23dc.js"),["ProseH6.d83f23dc.js","entry.d787de7b.js","entry.53c2a853.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseHr.ba755ad8.js"),["ProseHr.ba755ad8.js","_plugin-vue_export-helper.a1a6add7.js","entry.d787de7b.js","entry.53c2a853.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseImg.0afb89bc.js"),["ProseImg.0afb89bc.js","entry.d787de7b.js","entry.53c2a853.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseLi.22caf0d3.js"),["ProseLi.22caf0d3.js","_plugin-vue_export-helper.a1a6add7.js","entry.d787de7b.js","entry.53c2a853.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseOl.abac2dcc.js"),["ProseOl.abac2dcc.js","_plugin-vue_export-helper.a1a6add7.js","entry.d787de7b.js","entry.53c2a853.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseP.279198b8.js"),["ProseP.279198b8.js","_plugin-vue_export-helper.a1a6add7.js","entry.d787de7b.js","entry.53c2a853.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseStrong.73abd002.js"),["ProseStrong.73abd002.js","_plugin-vue_export-helper.a1a6add7.js","entry.d787de7b.js","entry.53c2a853.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseTable.2187c3c4.js"),["ProseTable.2187c3c4.js","_plugin-vue_export-helper.a1a6add7.js","entry.d787de7b.js","entry.53c2a853.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseTbody.95667012.js"),["ProseTbody.95667012.js","_plugin-vue_export-helper.a1a6add7.js","entry.d787de7b.js","entry.53c2a853.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseTd.b5a5e003.js"),["ProseTd.b5a5e003.js","_plugin-vue_export-helper.a1a6add7.js","entry.d787de7b.js","entry.53c2a853.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseTh.ebed6483.js"),["ProseTh.ebed6483.js","_plugin-vue_export-helper.a1a6add7.js","entry.d787de7b.js","entry.53c2a853.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseThead.4c6cfe55.js"),["ProseThead.4c6cfe55.js","_plugin-vue_export-helper.a1a6add7.js","entry.d787de7b.js","entry.53c2a853.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseTr.1d7c2d49.js"),["ProseTr.1d7c2d49.js","_plugin-vue_export-helper.a1a6add7.js","entry.d787de7b.js","entry.53c2a853.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseUl.12d06632.js"),["ProseUl.12d06632.js","_plugin-vue_export-helper.a1a6add7.js","entry.d787de7b.js","entry.53c2a853.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./UnoIcon.e6f4fccf.js"),["UnoIcon.e6f4fccf.js","_plugin-vue_export-helper.a1a6add7.js","entry.d787de7b.js","entry.53c2a853.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./welcome.f33199a1.js"),["welcome.f33199a1.js","entry.d787de7b.js","entry.53c2a853.css","_plugin-vue_export-helper.a1a6add7.js","client-only.4eab2f82.js","client-only.c9795ed8.css","index.2daba45a.js","ContentSlot.51960815.js","DocumentDrivenEmpty.762c926b.js","DocumentDrivenNotFound.b6d57087.js","Markdown.c11606f4.js","ProseCode.4ef2e6ca.js","ProseCode.e63e49c6.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./entry.d787de7b.js").then(t=>t.ap),["entry.d787de7b.js","entry.53c2a853.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>Promise.resolve().then(()=>q),void 0,import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./client-only.4eab2f82.js").then(t=>t.c),["client-only.4eab2f82.js","client-only.c9795ed8.css","index.2daba45a.js","entry.d787de7b.js","entry.53c2a853.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>Promise.resolve().then(()=>$),void 0,import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./entry.d787de7b.js").then(t=>t.ai),["entry.d787de7b.js","entry.53c2a853.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>Promise.resolve().then(()=>F),void 0,import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./entry.d787de7b.js").then(t=>t.ao),["entry.d787de7b.js","entry.53c2a853.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>Promise.resolve().then(()=>m),void 0,import.meta.url).then(t=>t.Script));i(()=>r(()=>Promise.resolve().then(()=>m),void 0,import.meta.url).then(t=>t.NoScript));i(()=>r(()=>Promise.resolve().then(()=>m),void 0,import.meta.url).then(t=>t.Link));i(()=>r(()=>Promise.resolve().then(()=>m),void 0,import.meta.url).then(t=>t.Base));i(()=>r(()=>Promise.resolve().then(()=>m),void 0,import.meta.url).then(t=>t.Title));i(()=>r(()=>Promise.resolve().then(()=>m),void 0,import.meta.url).then(t=>t.Meta));i(()=>r(()=>Promise.resolve().then(()=>m),void 0,import.meta.url).then(t=>t.Style));i(()=>r(()=>Promise.resolve().then(()=>m),void 0,import.meta.url).then(t=>t.Head));i(()=>r(()=>Promise.resolve().then(()=>m),void 0,import.meta.url).then(t=>t.Html));i(()=>r(()=>Promise.resolve().then(()=>m),void 0,import.meta.url).then(t=>t.Body));const it=l({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(t){const{query:e}=B(t),o=P(()=>{var u;return typeof((u=e.value)==null?void 0:u.params)=="function"?e.value.params():e.value});if(!o.value&&N("dd-navigation").value){const{navigation:u}=x();return{navigation:u}}const{data:n}=await j(`content-navigation-${E(o.value)}`,()=>w(o.value));return{navigation:n}},render(t){const e=k(),{navigation:o}=t,n=_=>h(C,{to:_._path},()=>_.title),u=(_,f)=>h("ul",f?{"data-level":f}:null,_.map(p=>p.children?h("li",null,[n(p),u(p.children,f+1)]):h("li",null,n(p)))),a=_=>u(_,0);return e!=null&&e.default?e.default({navigation:o,...this.$attrs}):a(o)}}),ot=Object.freeze(Object.defineProperty({__proto__:null,default:it},Symbol.toStringTag,{value:"Module"}));export{it as default};
