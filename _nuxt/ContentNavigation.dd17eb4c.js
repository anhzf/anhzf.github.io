import{w as j,h as I,s as x,_ as r,j as w,a as k,b as m,r as O,e as A,f as q,i as $,k as C,l as g,m as p,p as S,q as T,t as M,v as H,d as i,x as F,y as U,z as G,A as K,B as W,C as Y}from"./entry.09df72b7.js";import"./client-only.c0560135.js";import"./ContentSlot.f7c42279.js";import"./DocumentDrivenEmpty.6e493eb1.js";import"./DocumentDrivenNotFound.ba30d16b.js";import"./Markdown.c7a57bd6.js";import"./ProseCode.554f4dae.js";import"./index.98144e39.js";const J=async t=>{let e=t;typeof(e==null?void 0:e.params)=="function"&&(e=e.params());const n=j(e?`/navigation/${I(e)}.json`:"/navigation");if(x())return(await r(()=>import("./client-db.5c9a02c1.js"),["client-db.5c9a02c1.js","entry.09df72b7.js","entry.1211385e.css"],import.meta.url).then(a=>a.generateNavigation))(e||{});const o=await $fetch(n,{method:"GET",responseType:"json",params:{_params:w(e||{}),previewToken:k("previewToken").value}});if(typeof o=="string"&&o.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return o};const Q=m({emits:{error(t){return!0}},setup(t,{slots:e,emit:n}){const o=O(null),u=A();return q(a=>{if(!u.isHydrating)return n("error",a),o.value=a,!1}),()=>{var a,_;return o.value?(a=e.error)==null?void 0:a.call(e,{error:o}):(_=e.default)==null?void 0:_.call(e)}}}),X=Object.freeze(Object.defineProperty({__proto__:null,default:Q},Symbol.toStringTag,{value:"Module"})),Z=m({name:"ServerPlaceholder",render(){return $("div")}}),tt=Object.freeze(Object.defineProperty({__proto__:null,default:Z},Symbol.toStringTag,{value:"Module"})),et=m({name:"NuxtLoadingIndicator",props:{throttle:{type:Number,default:200},duration:{type:Number,default:2e3},height:{type:Number,default:3},color:{type:String,default:"repeating-linear-gradient(to right,#00dc82 0%,#34cdfe 50%,#0047e1 100%)"}},setup(t,{slots:e}){const n=rt({duration:t.duration,throttle:t.throttle}),o=A();return o.hook("page:start",n.start),o.hook("page:finish",n.finish),C(()=>n.clear),()=>g("div",{class:"nuxt-loading-indicator",style:{position:"fixed",top:0,right:0,left:0,pointerEvents:"none",width:`${n.progress.value}%`,height:`${t.height}px`,opacity:n.isLoading.value?1:0,background:t.color,backgroundSize:`${100/n.progress.value*100}% auto`,transition:"width 0.1s, height 0.4s, opacity 0.4s",zIndex:999999}},e)}});function rt(t){const e=O(0),n=O(!1),o=p(()=>1e4/t.duration);let u=null,a=null;function _(){l(),e.value=0,n.value=!0,t.throttle?a=setTimeout(s,t.throttle):s()}function v(){e.value=100,y()}function l(){clearInterval(u),clearTimeout(a),u=null,a=null}function h(d){e.value=Math.min(100,e.value+d)}function y(){l(),setTimeout(()=>{n.value=!1,setTimeout(()=>{e.value=0},400)},500)}function s(){u=setInterval(()=>{h(o.value)},100)}return{progress:e,isLoading:n,start:_,finish:v,clear:l}}const it=Object.freeze(Object.defineProperty({__proto__:null,default:et},Symbol.toStringTag,{value:"Module"})),L=()=>A().$img,b={src:{type:String,required:!0},format:{type:String,default:void 0},quality:{type:[Number,String],default:void 0},background:{type:String,default:void 0},fit:{type:String,default:void 0},modifiers:{type:Object,default:void 0},preset:{type:String,default:void 0},provider:{type:String,default:void 0},sizes:{type:[Object,String],default:void 0},preload:{type:Boolean,default:void 0},width:{type:[String,Number],default:void 0},height:{type:[String,Number],default:void 0},alt:{type:String,default:void 0},referrerpolicy:{type:String,default:void 0},usemap:{type:String,default:void 0},longdesc:{type:String,default:void 0},ismap:{type:Boolean,default:void 0},loading:{type:String,default:void 0},crossorigin:{type:[Boolean,String],default:void 0,validator:t=>["anonymous","use-credentials","",!0,!1].includes(t)},decoding:{type:String,default:void 0,validator:t=>["async","auto","sync"].includes(t)}},D=t=>{const e=p(()=>({provider:t.provider,preset:t.preset})),n=p(()=>({width:S(t.width),height:S(t.height),alt:t.alt,referrerpolicy:t.referrerpolicy,usemap:t.usemap,longdesc:t.longdesc,ismap:t.ismap,crossorigin:t.crossorigin===!0?"anonymous":t.crossorigin||void 0,loading:t.loading,decoding:t.decoding})),o=p(()=>({...t.modifiers,width:S(t.width),height:S(t.height),format:t.format,quality:t.quality,background:t.background,fit:t.fit}));return{options:e,attrs:n,modifiers:o}},R={...b,placeholder:{type:[Boolean,String,Number,Array],default:void 0}},ot=m({name:"NuxtImg",props:R,setup:(t,e)=>{const n=L(),o=D(t),u=O(!1),a=p(()=>n.getSizes(t.src,{...o.options.value,sizes:t.sizes,modifiers:{...o.modifiers.value,width:S(t.width),height:S(t.height)}})),_=p(()=>{const s=o.attrs.value;return t.sizes&&(s.sizes=a.value.sizes,s.srcset=a.value.srcset),s}),v=p(()=>{let s=t.placeholder;if(s===""&&(s=!0),!s||u.value)return!1;if(typeof s=="string")return s;const d=Array.isArray(s)?s:typeof s=="number"?[s,s]:[10,10];return n(t.src,{...o.modifiers.value,width:d[0],height:d[1],quality:d[2]||50},o.options.value)}),l=p(()=>t.sizes?a.value.src:n(t.src,o.modifiers.value,o.options.value)),h=p(()=>v.value?v.value:l.value);if(t.preload){const s=Object.values(a.value).every(d=>d);T({link:[{rel:"preload",as:"image",...s?{href:a.value.src,imagesizes:a.value.sizes,imagesrcset:a.value.srcset}:{href:h.value}}]})}const y=O(null);return M(()=>{if(v.value){const s=new Image;s.src=l.value,s.onload=()=>{y.value.src=l.value,u.value=!0}}}),()=>g("img",{ref:y,key:h.value,src:h.value,..._.value,...e.attrs})}}),nt=Object.freeze(Object.defineProperty({__proto__:null,imgProps:R,default:ot},Symbol.toStringTag,{value:"Module"})),V={...b,legacyFormat:{type:String,default:null},imgAttrs:{type:Object,default:null}},at=m({name:"NuxtPicture",props:V,setup:(t,e)=>{var h,y,s;const n=L(),o=D(t),u=p(()=>["png","webp","gif"].includes(a.value)),a=p(()=>H(t.src)),_=p(()=>t.format||a.value==="svg"?"svg":"webp"),v=p(()=>t.legacyFormat?t.legacyFormat:{webp:u.value?"png":"jpeg",svg:"png"}[_.value]||a.value),l=p(()=>_.value==="svg"?[{srcset:t.src}]:(v.value!==_.value?[v.value,_.value]:[_.value]).map(P=>{const{srcset:z,sizes:B,src:N}=n.getSizes(t.src,{...o.options.value,sizes:t.sizes||n.options.screens,modifiers:{...o.modifiers.value,format:P}});return{src:N,type:`image/${P}`,sizes:B,srcset:z}}));if(t.preload){const d=(h=l.value)!=null&&h[1]?1:0,P={rel:"preload",as:"image",imagesrcset:l.value[d].srcset};(s=(y=l.value)==null?void 0:y[d])!=null&&s.sizes&&(P.imagesizes=l.value[d].sizes),T({link:[P]})}return()=>{var d;return g("picture",{key:l.value[0].src},[...(d=l.value)!=null&&d[1]?[g("source",{type:l.value[1].type,sizes:l.value[1].sizes,srcset:l.value[1].srcset})]:[],g("img",{...o.attrs.value,...t.imgAttrs,...e.attrs,src:l.value[0].src,sizes:l.value[0].sizes,srcset:l.value[0].srcset})])}}}),ut=Object.freeze(Object.defineProperty({__proto__:null,pictureProps:V,default:at},Symbol.toStringTag,{value:"Module"})),lt=t=>Object.fromEntries(Object.entries(t).filter(([,e])=>e!==void 0)),c=(t,e)=>(n,o)=>(T(()=>t({...lt(n),...o.attrs},o)),()=>{var u,a;return e?(a=(u=o.slots).default)==null?void 0:a.call(u):null}),E={accesskey:String,autocapitalize:String,autofocus:{type:Boolean,default:void 0},class:String,contenteditable:{type:Boolean,default:void 0},contextmenu:String,dir:String,draggable:{type:Boolean,default:void 0},enterkeyhint:String,exportparts:String,hidden:{type:Boolean,default:void 0},id:String,inputmode:String,is:String,itemid:String,itemprop:String,itemref:String,itemscope:String,itemtype:String,lang:String,nonce:String,part:String,slot:String,spellcheck:{type:Boolean,default:void 0},style:String,tabindex:String,title:String,translate:String},st=m({name:"Script",inheritAttrs:!1,props:{...E,async:Boolean,crossorigin:{type:[Boolean,String],default:void 0},defer:Boolean,fetchpriority:String,integrity:String,nomodule:Boolean,nonce:String,referrerpolicy:String,src:String,type:String,charset:String,language:String,body:Boolean,renderPriority:[String,Number]},setup:c((t,{slots:e})=>{var u;const n={...t},o=(((u=e.default)==null?void 0:u.call(e))||[]).filter(({children:a})=>a).map(({children:a})=>a).join("");return o&&(n.children=o),{script:[n]}})}),_t=m({name:"NoScript",inheritAttrs:!1,props:{...E,title:String,body:Boolean,renderPriority:[String,Number]},setup:c((t,{slots:e})=>{var u;const n={...t},o=(((u=e.default)==null?void 0:u.call(e))||[]).filter(({children:a})=>a).map(({children:a})=>a).join("");return o&&(n.children=o),{noscript:[n]}})}),dt=m({name:"Link",inheritAttrs:!1,props:{...E,as:String,crossorigin:String,disabled:Boolean,fetchpriority:String,href:String,hreflang:String,imagesizes:String,imagesrcset:String,integrity:String,media:String,prefetch:{type:Boolean,default:void 0},referrerpolicy:String,rel:String,sizes:String,title:String,type:String,methods:String,target:String,body:Boolean,renderPriority:[String,Number]},setup:c(t=>({link:[t]}))}),mt=m({name:"Base",inheritAttrs:!1,props:{...E,href:String,target:String},setup:c(t=>({base:t}))}),pt=m({name:"Title",inheritAttrs:!1,setup:c((t,{slots:e})=>{var o,u,a;return{title:((a=(u=(o=e.default)==null?void 0:o.call(e))==null?void 0:u[0])==null?void 0:a.children)||null}})}),vt=m({name:"Meta",inheritAttrs:!1,props:{...E,charset:String,content:String,httpEquiv:String,name:String,body:Boolean,renderPriority:[String,Number]},setup:c(t=>{const e={...t};return e.httpEquiv&&(e["http-equiv"]=e.httpEquiv,delete e.httpEquiv),{meta:[e]}})}),ft=m({name:"Style",inheritAttrs:!1,props:{...E,type:String,media:String,nonce:String,title:String,scoped:{type:Boolean,default:void 0},body:Boolean,renderPriority:[String,Number]},setup:c((t,{slots:e})=>{var u,a,_;const n={...t},o=(_=(a=(u=e.default)==null?void 0:u.call(e))==null?void 0:a[0])==null?void 0:_.children;return o&&(n.children=o),{style:[n]}})}),gt=m({name:"Head",inheritAttrs:!1,setup:(t,e)=>()=>{var n,o;return(o=(n=e.slots).default)==null?void 0:o.call(n)}}),ct=m({name:"Html",inheritAttrs:!1,props:{...E,manifest:String,version:String,xmlns:String,renderPriority:[String,Number]},setup:c(t=>({htmlAttrs:t}),!0)}),ht=m({name:"Body",inheritAttrs:!1,props:{...E,renderPriority:[String,Number]},setup:c(t=>({bodyAttrs:t}),!0)}),f=Object.freeze(Object.defineProperty({__proto__:null,Script:st,NoScript:_t,Link:dt,Base:mt,Title:pt,Meta:vt,Style:ft,Head:gt,Html:ct,Body:ht},Symbol.toStringTag,{value:"Module"}));i(()=>r(()=>import("./BigHero.3f5afbf3.js"),["BigHero.3f5afbf3.js","BigHero.vue_vue_type_script_setup_true_lang.7a96937b.js","entry.09df72b7.js","entry.1211385e.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./Blob.670061f9.js"),["Blob.670061f9.js","Blob.vue_vue_type_script_setup_true_lang.ccd99cb8.js","client-only.c0560135.js","client-only.f2ca4bc5.css","index.98144e39.js","entry.09df72b7.js","entry.1211385e.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./CardBlog.a31b2d0e.js"),["CardBlog.a31b2d0e.js","CardBlog.vue_vue_type_script_setup_true_lang.d7f4994a.js","entry.09df72b7.js","entry.1211385e.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./CardLink.b02caaa4.js"),["CardLink.b02caaa4.js","CardLink.vue_vue_type_script_setup_true_lang.f18a3f76.js","entry.09df72b7.js","entry.1211385e.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./CardProject.6736b9e8.js"),["CardProject.6736b9e8.js","CardProject.vue_vue_type_script_setup_true_lang.9da0d1aa.js","entry.09df72b7.js","entry.1211385e.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./CursorFollower.79d20480.js"),["CursorFollower.79d20480.js","client-only.c0560135.js","client-only.f2ca4bc5.css","index.98144e39.js","entry.09df72b7.js","entry.1211385e.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./GridBlog.e9a6e349.js"),["GridBlog.e9a6e349.js","GridBlog.vue_vue_type_script_setup_true_lang.76063892.js","CardBlog.vue_vue_type_script_setup_true_lang.d7f4994a.js","entry.09df72b7.js","entry.1211385e.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./MegaMenu.3ffdc60a.js"),["MegaMenu.3ffdc60a.js","entry.09df72b7.js","entry.1211385e.css","index.98144e39.js","client-only.c0560135.js","client-only.f2ca4bc5.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./entry.09df72b7.js").then(t=>t.aq),["entry.09df72b7.js","entry.1211385e.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./entry.09df72b7.js").then(t=>t.ap),["entry.09df72b7.js","entry.1211385e.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>Promise.resolve().then(()=>yt),void 0,import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./entry.09df72b7.js").then(t=>t.ao),["entry.09df72b7.js","entry.1211385e.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./entry.09df72b7.js").then(t=>t.an),["entry.09df72b7.js","entry.1211385e.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./entry.09df72b7.js").then(t=>t.am),["entry.09df72b7.js","entry.1211385e.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ContentSlot.f7c42279.js"),["ContentSlot.f7c42279.js","entry.09df72b7.js","entry.1211385e.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./DocumentDrivenEmpty.6e493eb1.js"),["DocumentDrivenEmpty.6e493eb1.js","entry.09df72b7.js","entry.1211385e.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./DocumentDrivenNotFound.ba30d16b.js"),["DocumentDrivenNotFound.ba30d16b.js","entry.09df72b7.js","entry.1211385e.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./Markdown.c7a57bd6.js"),["Markdown.c7a57bd6.js","ContentSlot.f7c42279.js","entry.09df72b7.js","entry.1211385e.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseA.01707cf7.js"),["ProseA.01707cf7.js","entry.09df72b7.js","entry.1211385e.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseBlockquote.2fca5a74.js"),["ProseBlockquote.2fca5a74.js","entry.09df72b7.js","entry.1211385e.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseCode.554f4dae.js"),["ProseCode.554f4dae.js","ProseCode.e63e49c6.css","entry.09df72b7.js","entry.1211385e.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseCodeInline.2a1f839c.js"),["ProseCodeInline.2a1f839c.js","entry.09df72b7.js","entry.1211385e.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseEm.7c23efb1.js"),["ProseEm.7c23efb1.js","entry.09df72b7.js","entry.1211385e.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseH1.7ba7915c.js"),["ProseH1.7ba7915c.js","entry.09df72b7.js","entry.1211385e.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseH2.c7e2493b.js"),["ProseH2.c7e2493b.js","entry.09df72b7.js","entry.1211385e.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseH3.2efe9569.js"),["ProseH3.2efe9569.js","entry.09df72b7.js","entry.1211385e.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseH4.525ffb2f.js"),["ProseH4.525ffb2f.js","entry.09df72b7.js","entry.1211385e.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseH5.c5932aa9.js"),["ProseH5.c5932aa9.js","entry.09df72b7.js","entry.1211385e.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseH6.a136e121.js"),["ProseH6.a136e121.js","entry.09df72b7.js","entry.1211385e.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseHr.3080d674.js"),["ProseHr.3080d674.js","entry.09df72b7.js","entry.1211385e.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseImg.9e7dbb41.js"),["ProseImg.9e7dbb41.js","entry.09df72b7.js","entry.1211385e.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseLi.75c739f4.js"),["ProseLi.75c739f4.js","entry.09df72b7.js","entry.1211385e.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseOl.7d1ac908.js"),["ProseOl.7d1ac908.js","entry.09df72b7.js","entry.1211385e.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseP.8ca81181.js"),["ProseP.8ca81181.js","entry.09df72b7.js","entry.1211385e.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseStrong.d3422a0a.js"),["ProseStrong.d3422a0a.js","entry.09df72b7.js","entry.1211385e.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseTable.a3d74002.js"),["ProseTable.a3d74002.js","entry.09df72b7.js","entry.1211385e.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseTbody.bdd76e1a.js"),["ProseTbody.bdd76e1a.js","entry.09df72b7.js","entry.1211385e.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseTd.c283546b.js"),["ProseTd.c283546b.js","entry.09df72b7.js","entry.1211385e.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseTh.f99a30f5.js"),["ProseTh.f99a30f5.js","entry.09df72b7.js","entry.1211385e.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseThead.9e16d89e.js"),["ProseThead.9e16d89e.js","entry.09df72b7.js","entry.1211385e.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseTr.f302919f.js"),["ProseTr.f302919f.js","entry.09df72b7.js","entry.1211385e.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseUl.ccaab63d.js"),["ProseUl.ccaab63d.js","entry.09df72b7.js","entry.1211385e.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./UnoIcon.8483a225.js"),["UnoIcon.8483a225.js","entry.09df72b7.js","entry.1211385e.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./welcome.01602fa1.js"),["welcome.01602fa1.js","entry.09df72b7.js","entry.1211385e.css","client-only.c0560135.js","client-only.f2ca4bc5.css","index.98144e39.js","ContentSlot.f7c42279.js","DocumentDrivenEmpty.6e493eb1.js","DocumentDrivenNotFound.ba30d16b.js","Markdown.c7a57bd6.js","ProseCode.554f4dae.js","ProseCode.e63e49c6.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./entry.09df72b7.js").then(t=>t.as),["entry.09df72b7.js","entry.1211385e.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>Promise.resolve().then(()=>X),void 0,import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./client-only.c0560135.js").then(t=>t.c),["client-only.c0560135.js","client-only.f2ca4bc5.css","index.98144e39.js","entry.09df72b7.js","entry.1211385e.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>Promise.resolve().then(()=>tt),void 0,import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./entry.09df72b7.js").then(t=>t.al),["entry.09df72b7.js","entry.1211385e.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>Promise.resolve().then(()=>it),void 0,import.meta.url).then(t=>t.default||t));i(()=>r(()=>Promise.resolve().then(()=>nt),void 0,import.meta.url).then(t=>t.default||t));i(()=>r(()=>Promise.resolve().then(()=>ut),void 0,import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./entry.09df72b7.js").then(t=>t.ar),["entry.09df72b7.js","entry.1211385e.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>Promise.resolve().then(()=>f),void 0,import.meta.url).then(t=>t.Script));i(()=>r(()=>Promise.resolve().then(()=>f),void 0,import.meta.url).then(t=>t.NoScript));i(()=>r(()=>Promise.resolve().then(()=>f),void 0,import.meta.url).then(t=>t.Link));i(()=>r(()=>Promise.resolve().then(()=>f),void 0,import.meta.url).then(t=>t.Base));i(()=>r(()=>Promise.resolve().then(()=>f),void 0,import.meta.url).then(t=>t.Title));i(()=>r(()=>Promise.resolve().then(()=>f),void 0,import.meta.url).then(t=>t.Meta));i(()=>r(()=>Promise.resolve().then(()=>f),void 0,import.meta.url).then(t=>t.Style));i(()=>r(()=>Promise.resolve().then(()=>f),void 0,import.meta.url).then(t=>t.Head));i(()=>r(()=>Promise.resolve().then(()=>f),void 0,import.meta.url).then(t=>t.Html));i(()=>r(()=>Promise.resolve().then(()=>f),void 0,import.meta.url).then(t=>t.Body));const Et=m({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(t){const{query:e}=F(t),n=p(()=>{var u;return typeof((u=e.value)==null?void 0:u.params)=="function"?e.value.params():e.value});if(!n.value&&U("dd-navigation").value){const{navigation:u}=G();return{navigation:u}}const{data:o}=await K(`content-navigation-${I(n.value)}`,()=>J(n.value));return{navigation:o}},render(t){const e=W(),{navigation:n}=t,o=_=>g(Y,{to:_._path},()=>_.title),u=(_,v)=>g("ul",v?{"data-level":v}:null,_.map(l=>l.children?g("li",null,[o(l),u(l.children,v+1)]):g("li",null,o(l)))),a=_=>u(_,0);return e!=null&&e.default?e.default({navigation:n,...this.$attrs}):a(n)}}),yt=Object.freeze(Object.defineProperty({__proto__:null,default:Et},Symbol.toStringTag,{value:"Module"}));export{Et as default};
