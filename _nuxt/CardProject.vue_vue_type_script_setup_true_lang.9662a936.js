import{b as i,o as l,i as s,I as e,Q as n,R as c,S as r,a1 as d}from"./entry.df216669.js";const h={class:"m-2 w-full max-w-xs bg-white rounded-2xl shadow shadow-blue-300 transition-shadow hover:shadow-xl"},u={class:"overflow-hidden h-44 rounded-t-[inherit]"},m=["src","alt"],f={class:"px-5 py-4"},_=["title"],x={class:"pt-1 flex justify-between"},b=["href"],w=e("span",null,"Visit site ",-1),v=e("div",{height:"1rem",class:"i-eva:external-link-outline block"},null,-1),g=[w,v],p={key:0,class:"px-1 py-0.5 border-[0.2px] border-slate-100 rounded-full flex items-center gap-1"},k=["src","alt"],B=i({__name:"CardProject",props:{title:null,url:{default:"#"},thumbnailSrc:{default:"https://via.placeholder.com/300"},techStack:{default:()=>[]}},setup(t){return(S,y)=>(l(),s("article",h,[e("div",u,[e("img",{src:t.thumbnailSrc,alt:t.title,class:"object-cover w-full h-full"},null,8,m)]),e("div",f,[e("h5",{class:"font-bold text-indigo-400 line-clamp-1",title:t.title},n(t.title),9,_),e("div",x,[e("a",{href:t.url,class:"flex items-center flex-nowrap gap-x-1 text-slate-300 font-medium transition-colors hover:text-blue-500"},g,8,b),t.techStack.length?(l(),s("div",p,[(l(!0),s(c,null,r(t.techStack,(o,a)=>(l(),s("img",{key:a,src:o,alt:o,class:"w-3.5 h-3.5 p-[0.04rem] object-scale-down"},null,8,k))),128))])):d("",!0)])])]))}});export{B as _};