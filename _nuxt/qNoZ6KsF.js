import{_ as c}from"./BJb5FRQF.js";import{a as m,x as i,C as u,a0 as h,M as l,a1 as d,f as p,E as f,H as r,G as g}from"./tyc_J6Gz.js";import"./BdSkqcE_.js";const b=m({__name:"ProseImg",props:{src:{type:String,default:""},alt:{type:String,default:""},width:{type:[String,Number],default:void 0},height:{type:[String,Number],default:void 0}},setup(e){const n=i().public.mdc.useNuxtImage?c:"img",t=e,o=u(()=>{var s;if((s=t.src)!=null&&s.startsWith("/")&&!t.src.startsWith("//")){const a=h(l(i().app.baseURL));if(a!=="/"&&!t.src.startsWith(a))return d(a,t.src)}return t.src});return(s,a)=>(p(),f(g(r(n)),{src:r(o),alt:e.alt,width:e.width,height:e.height},null,8,["src","alt","width","height"]))}});export{b as default};