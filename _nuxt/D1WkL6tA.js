import{_ as u}from"./C6P142sv.js";import{a as p,f as o,g as m,j as _,w as s,h as a,t as r,D as n,E as i,m as y,i as d,F as v,C as k}from"./UanrUq0C.js";import B from"./CXQGrRCl.js";const C=["src","alt"],N={class:"text-xl text-slate-900 font-semibold"},w={class:"text-sm text-slate-500"},q=p({__name:"CardBlog",props:{path:{},title:{},coverSrc:{},description:{}},setup(t){return(e,g)=>{const c=u;return o(),m("article",null,[_(c,{to:e.path,class:"flex flex-col px-4 py-3 hover:bg-blue-300/20 rounded-2xl active:rounded-3xl hover:ring-2 ring-blue-500 backdrop-blur-lg transition-background-color,border-radius"},{default:s(()=>[a("img",{src:e.coverSrc,alt:`Gambar cover ${e.title}`,width:300,format:"webp",class:"mb-2 aspect-16/9 w-full bg-slate-300 rounded-xl border object-cover"},null,8,C),a("h2",N,r(e.title),1),a("p",w,r(e.description),1)]),_:1},8,["to"])])}}}),S=a("p",{class:"text-slate-500 md:col-span-2 lg:col-span-4"},"No blogs found.",-1),$=a("span",null,"Lihat semua",-1),A=a("span",{class:"group-hover:translate-x-1 transition-transform"}," →",-1),T=p({__name:"GridBlog",props:{title:{type:String,required:!1},titleAs:{type:String,required:!1,default:"h1"},as:{type:String,default:"section"},query:{type:Object,default:()=>({})},showNavToAll:{type:Boolean,default:!1}},setup(t){const e={sort:[{title:1}]};return(g,c)=>{const f=q,h=B,x=u;return o(),n(i(t.as),{class:"container p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"},{default:s(()=>[t.title?(o(),n(i(t.titleAs),{key:0,class:"text-3xl font-bold md:col-span-2 lg:col-span-4"},{default:s(()=>[y(r(t.title),1)]),_:1})):d("",!0),_(h,{path:"/blogs",query:{...e,...t.query}},{default:s(({list:b})=>[(o(!0),m(v,null,k(b,l=>(o(),n(f,{key:l._path,path:l._path,title:l.title,"cover-src":l.image,description:l.description},null,8,["path","title","cover-src","description"]))),128))]),"not-found":s(()=>[S]),_:1},8,["query"]),t.showNavToAll?(o(),n(x,{key:1,to:{name:"blogs"},class:"group text-slate-700 hover:text-blue-500 font-medium flex gap-2 md:col-span-2 lg:col-span-4"},{default:s(()=>[$,A]),_:1})):d("",!0)]),_:1})}}});export{T as _};
