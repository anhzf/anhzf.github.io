import{_ as v}from"./DoxySEiU.js";import{_ as w}from"./DNGmz9yo.js";import{T as _,u as b,p as y,P as k}from"./CMphgdj6.js";import{a as h,f as s,g as o,h as e,j as m,w as C,m as P,t as $,i as c,F as u,C as p,G as a,H as j,D as N,I as U}from"./LBhPyXu7.js";import"./BoTp7EoM.js";import"./YbABUs4B.js";const B={class:"m-2 w-full max-w-xs bg-white rounded-2xl shadow shadow-blue-300 transition-shadow hover:shadow-xl"},S={class:"overflow-hidden h-44 rounded-t-[inherit]"},H=["src","alt"],L={class:"px-5 py-4"},V=["title"],D={class:"pt-1 flex justify-between"},E={class:"flex gap-2.5"},G=["href"],T=e("span",null,"Live",-1),z=e("div",{height:"1rem",class:"i-eva:external-link-outline block"},null,-1),F=[T,z],I=["href"],O=e("span",null,"Demo",-1),A=e("div",{height:"1rem",class:"i-eva:external-link-outline block"},null,-1),M=[O,A],q={key:0,class:"px-1 py-0.5 border-[0.2px] border-slate-100 rounded-full flex items-center gap-1"},J=["src","alt","title"],K=h({__name:"CardProject",props:{title:{},path:{},thumbnail:{default:"https://placehold.co/300"},liveUrl:{},demoUrl:{},technologies:{default:()=>[]}},setup(f){return(t,i)=>{const r=w;return s(),o("article",B,[e("div",S,[e("img",{src:t.thumbnail,alt:t.title,width:350,loading:"lazy",class:"object-cover w-full h-full"},null,8,H)]),e("div",L,[e("h3",{class:"font-bold text-indigo-400 line-clamp-1",title:t.title},[m(r,{to:t.path,class:"hover:underline"},{default:C(()=>[P($(t.title),1)]),_:1},8,["to"])],8,V),e("div",D,[e("div",E,[t.liveUrl?(s(),o("a",{key:0,href:t.liveUrl,target:"_blank",class:"flex items-center flex-nowrap gap-x-1.5 text-slate-300 font-medium transition-colors hover:text-blue-500"},F,8,G)):c("",!0),t.demoUrl?(s(),o("a",{key:1,href:t.demoUrl,target:"_blank",class:"flex items-center flex-nowrap gap-x-1.5 text-slate-300 font-medium transition-colors hover:text-blue-500"},M,8,I)):c("",!0)]),t.technologies.length?(s(),o("div",q,[(s(!0),o(u,null,p(t.technologies,(l,d)=>(s(),o("img",{key:d,src:a(_)[l].icon??l,alt:l,title:a(_)[l].title??l,width:16,format:"webp",class:"w-3.5 h-3.5 p-[0.04rem] object-scale-down"},null,8,J))),128))])):c("",!0)])])])}}}),Q={id:"main",class:"relative flex flex-col items-center"},R=e("div",{class:"font-medium text-blue-gray-400 flex flex-col items-center gap-1 animate-bounce animate-duration-2000"},[e("span",null,"featured projects"),e("div",{class:"i-eva:arrow-downward-outline w-5 h-5"})],-1),W={id:"projects",class:"p-8 flex flex-col items-center gap-8"},X=e("h2",{class:"hidden"},"Pinned Projects",-1),Y={class:"grid grid-cols-1 lg:grid-cols-3 gap-8"},Z=e("a",{title:"See more on GitHub",href:"https://github.com/anhzf",target:"_blank",class:"group font-medium text-blue-gray-400 flex items-center gap-1"},[e("span",null,"See More"),e("div",{class:"i-eva:arrow-forward-outline block transform group-hover:translate-x-1.5 transition-transform"})],-1),ie=h({__name:"index",async setup(f){let t,i;const{data:r,suspense:l}=b();return[t,i]=j(()=>l()),await t,i(),(d,ee)=>{const g=v,x=K;return s(),o("main",Q,[m(g),R,e("section",W,[X,e("div",Y,[(s(!0),o(u,null,p(a(r).map(n=>a(y)(a(k),n)),n=>(s(),N(x,U({key:n==null?void 0:n.title,ref_for:!0},n),null,16))),128))]),Z])])}}});export{ie as default};
