import{_ as c}from"./BlfHkTAX.js";import{a as m,x as i,G as u,a1 as h,N as l,a2 as d,f as p,H as f,E as r,I as g}from"./CWwrRJ3_.js";import"./CfFEgoV3.js";const b=m({__name:"ProseImg",props:{src:{type:String,default:""},alt:{type:String,default:""},width:{type:[String,Number],default:void 0},height:{type:[String,Number],default:void 0}},setup(e){const n=i().public.mdc.useNuxtImage?c:"img",t=e,o=u(()=>{var s;if((s=t.src)!=null&&s.startsWith("/")&&!t.src.startsWith("//")){const a=h(l(i().app.baseURL));if(a!=="/"&&!t.src.startsWith(a))return d(a,t.src)}return t.src});return(s,a)=>(p(),f(g(r(n)),{src:r(o),alt:e.alt,width:e.width,height:e.height},null,8,["src","alt","width","height"]))}});export{b as default};