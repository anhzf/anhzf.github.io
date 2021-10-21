import{d as e,r as t,o as l,c as s,a,t as r,l as n,u as i,m as c,F as o,p as f,q as u}from"./vendor.02483752.js";import{l as d}from"./content-data.6880abf5.js";import{_ as x}from"./app.1bcbceee.js";var b=e({name:"CardLink",props:{label:{type:String,required:!0},url:{type:String,required:!0},thumbnailSrc:{type:String,default:"https://via.placeholder.com/100/f3f4f6?text=No%20image"}}});const p={class:"flex-shrink flex-grow relative mb-1 p-4 bg-purple-50 rounded-r-xl shadow"},m={class:"font-semibold text-indigo-400"},g={class:"absolute -bottom-2.5 right-6 flex items-center gap-x-1"},h={class:"p-0.5 bg-blue-gray-800 flex justify-center items-center rounded"},v={class:"flex-shrink-0 relative overflow-hidden w-28 h-28 bg-gray-100 rounded-2xl shadow-lg"};b.render=function(e,i,c,o,f,u){const d=t("eva-icon");return l(),s("a",{href:e.url,class:"relative w-full flex flex-row-reverse justify-center items-center",target:"_blank"},[a("div",p,[a("span",m,r(e.label),1),a("div",g,[n(' <div class="px-0.5 bg-blue-gray-800 flex justify-center items-center rounded">\n          <small class="text-xs text-blue-gray-200">\n            BLOG\n          </small>\n        </div> '),a("div",h,[a(d,{name:"external-link",class:"text-blue-gray-200",width:".75rem",height:".75rem"})])])]),a("div",v,[a("img",{src:e.thumbnailSrc,alt:e.label,class:"object-cover w-full h-full"},null,8,["src","alt"])])],8,["href"])};var y=e({name:"PageLinks",components:{MainLayout:x,CardLink:b},setup:()=>(i({title:"Links - Anhzf.Dev"}),{links:d})});const k=a("header",{class:"sticky top-0 -z-1 w-full h-[85vh] p-4 flex flex-col justify-center items-center gap-3"},[a("h1",{class:"font-black text-6xl text-center text-blue-gray-900"}," Anhzf.Dev "),a("span",{class:"bg-light-blue-400/50 font-medium text-xl text-center text-white"}," JAMStack Web Developer ")],-1),w={class:"pb-20 flex flex-col justify-center items-center"},j={class:"max-w-screen-sm px-4 sm:px-6 py-10 bg-white flex flex-col justify-center items-stretch gap-y-10 shadow-md"},L=a("div",{class:"w-full px-4 pb-6 border-b border-indigo-100"},[a("h2",{class:"font-bold bg-clip-text text-transparent bg-gradient-to-br from-indigo-500 to-light-blue-500 uppercase"}," LINKS ")],-1);y.render=function(e,r,n,i,d,x){const b=t("CardLink"),p=t("MainLayout");return l(),s(p,null,{default:c((()=>[k,a("main",w,[a("section",j,[L,(l(!0),s(o,null,f(e.links,(e=>(l(),s(b,u({key:e.label},e),null,16)))),128))])])])),_:1})};export default y;
