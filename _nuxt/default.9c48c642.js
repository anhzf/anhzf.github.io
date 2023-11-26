import{_ as Pe}from"./nuxt-link.42a557d4.js";import{d as q,r as ne,b as U,c as W,e as y,G as Z,g as S,w as E,f as Ie,T as Ze,p as Ke,i as Ye,o as ie,al as Je,am as xe,K as Ge,O as Xe,W as et,a9 as tt,z as rt,C as nt}from"./entry.b1f9de47.js";import{a as at,o as ot,b as it}from"./index.3e32aff3.js";import{_ as st}from"./_plugin-vue_export-helper.c27b6911.js";const C=e=>(Ke("data-v-d648c232"),e=e(),Ye(),e),ut={class:"fixed z-50 top-0 right-0"},ct={class:"m-6"},lt=C(()=>y("div",{class:"i-eva:menu-2-outline cursor-pointer w-12 h-12 text-slate-900"},null,-1)),ft=[lt],dt={class:"self-end p-6"},vt=C(()=>y("div",{class:"i-eva:close-outline cursor-pointer w-12 h-12 text-slate-900"},null,-1)),gt=[vt],ht={class:"flex flex-col gap-y-2"},mt={class:"flex"},pt=C(()=>y("div",{class:"i-eva:person-outline menu-item__icon"},null,-1)),yt=C(()=>y("span",null,"About Me",-1)),_t={class:"flex"},bt=C(()=>y("div",{class:"i-eva:link-2-outline menu-item__icon"},null,-1)),xt=C(()=>y("span",null,"Links",-1)),wt={class:"flex"},Mt=C(()=>y("div",{class:"i-eva:bulb-outline menu-item__icon"},null,-1)),kt=C(()=>y("span",null,"Projects",-1)),Tt=C(()=>y("li",{class:"flex"},[y("a",{href:"https://drive.google.com/file/d/1BNocju57scUMHLoShoUltefS7NrmCsO1/view?usp=sharing",target:"_blank",class:"menu-item"},[y("div",{class:"i-eva:attach-outline menu-item__icon"}),y("span",null,"Resume")])],-1)),Ct={class:"flex"},Pt=C(()=>y("div",{class:"i-eva:book-open-outline menu-item__icon"},null,-1)),It=C(()=>y("span",null,"Blogs",-1)),St={class:"absolute bottom-6 inset-x-1/2 flex justify-center transform -translate-x-1/2"},Ot=C(()=>y("div",{class:"i-eva:home-outline w-8 h-8 text-slate-300 group-hover:text-blue-500"},null,-1)),At=q({__name:"MegaMenu",setup(e){const t=ne(null),r=at("(min-width: 1280px)"),a=ne(r.value);return ot(t,()=>{a.value=!1}),(n,i)=>{const s=Pe;return U(),W("div",ut,[y("div",ct,[y("button",{"aria-label":"Open Menu",class:"flex p-2 bg-teal-300/50 hover:bg-amber-300/50 justify-center items-center rounded-full transition-colors",onClick:i[0]||(i[0]=u=>a.value=!Z(a))},ft)]),S(Ze,{class:"absolute right-0 top-0 transition-transform duration-500","enter-from-class":"translate-x-full","enter-to-class":"translate-x-0","leave-active-class":"translate-x-0","leave-to-class":"translate-x-full"},{default:E(()=>[Z(a)?(U(),W("nav",{key:0,ref_key:"theMenu",ref:t,class:"overflow-auto flex flex-col w-80 max-h-screen pb-32 bg-white shadow-xl shadow-indigo-400"},[y("div",dt,[y("button",{class:"flex p-2 hover:bg-rose-100 justify-center items-center rounded-full",onClick:i[1]||(i[1]=u=>a.value=!Z(a))},gt)]),y("ul",ht,[y("li",mt,[S(s,{to:{name:"about"},class:"menu-item"},{default:E(()=>[pt,yt]),_:1})]),y("li",_t,[S(s,{to:{name:"links"},class:"menu-item"},{default:E(()=>[bt,xt]),_:1})]),y("li",wt,[S(s,{to:{name:"index",hash:"#projects"},class:"menu-item"},{default:E(()=>[Mt,kt]),_:1})]),Tt,y("li",Ct,[S(s,{href:{name:"blogs"},class:"menu-item"},{default:E(()=>[Pt,It]),_:1})]),y("li",St,[S(s,{to:{name:"index"},class:"group p-4 bg-white hover:bg-slate-100 active:bg-slate-200 rounded-full border-2 border-blue-200"},{default:E(()=>[Ot]),_:1})])])],512)):Ie("",!0)]),_:1})])}}});const Bt=st(At,[["__scopeId","data-v-d648c232"]]);var Se={update:null,begin:null,loopBegin:null,changeBegin:null,change:null,changeComplete:null,loopComplete:null,complete:null,loop:1,direction:"normal",autoplay:!0,timelineOffset:0},se={duration:1e3,delay:0,endDelay:0,easing:"easeOutElastic(1, .5)",round:0},Dt=["translateX","translateY","translateZ","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","skew","skewX","skewY","perspective","matrix","matrix3d"],K={CSS:{},springs:{}};function O(e,t,r){return Math.min(Math.max(e,t),r)}function H(e,t){return e.indexOf(t)>-1}function re(e,t){return e.apply(null,t)}var l={arr:function(e){return Array.isArray(e)},obj:function(e){return H(Object.prototype.toString.call(e),"Object")},pth:function(e){return l.obj(e)&&e.hasOwnProperty("totalLength")},svg:function(e){return e instanceof SVGElement},inp:function(e){return e instanceof HTMLInputElement},dom:function(e){return e.nodeType||l.svg(e)},str:function(e){return typeof e=="string"},fnc:function(e){return typeof e=="function"},und:function(e){return typeof e>"u"},nil:function(e){return l.und(e)||e===null},hex:function(e){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(e)},rgb:function(e){return/^rgb/.test(e)},hsl:function(e){return/^hsl/.test(e)},col:function(e){return l.hex(e)||l.rgb(e)||l.hsl(e)},key:function(e){return!Se.hasOwnProperty(e)&&!se.hasOwnProperty(e)&&e!=="targets"&&e!=="keyframes"}};function Oe(e){var t=/\(([^)]+)\)/.exec(e);return t?t[1].split(",").map(function(r){return parseFloat(r)}):[]}function Ae(e,t){var r=Oe(e),a=O(l.und(r[0])?1:r[0],.1,100),n=O(l.und(r[1])?100:r[1],.1,100),i=O(l.und(r[2])?10:r[2],.1,100),s=O(l.und(r[3])?0:r[3],.1,100),u=Math.sqrt(n/a),o=i/(2*Math.sqrt(n*a)),m=o<1?u*Math.sqrt(1-o*o):0,c=1,f=o<1?(o*u+-s)/m:-s+u;function h(p){var d=t?t*p/1e3:p;return o<1?d=Math.exp(-d*o*u)*(c*Math.cos(m*d)+f*Math.sin(m*d)):d=(c+f*d)*Math.exp(-d*u),p===0||p===1?p:1-d}function k(){var p=K.springs[e];if(p)return p;for(var d=1/6,b=0,w=0;;)if(b+=d,h(b)===1){if(w++,w>=16)break}else w=0;var g=b*d*1e3;return K.springs[e]=g,g}return t?h:k}function Et(e){return e===void 0&&(e=10),function(t){return Math.ceil(O(t,1e-6,1)*e)*(1/e)}}var Lt=function(){var e=11,t=1/(e-1);function r(c,f){return 1-3*f+3*c}function a(c,f){return 3*f-6*c}function n(c){return 3*c}function i(c,f,h){return((r(f,h)*c+a(f,h))*c+n(f))*c}function s(c,f,h){return 3*r(f,h)*c*c+2*a(f,h)*c+n(f)}function u(c,f,h,k,p){var d,b,w=0;do b=f+(h-f)/2,d=i(b,k,p)-c,d>0?h=b:f=b;while(Math.abs(d)>1e-7&&++w<10);return b}function o(c,f,h,k){for(var p=0;p<4;++p){var d=s(f,h,k);if(d===0)return f;var b=i(f,h,k)-c;f-=b/d}return f}function m(c,f,h,k){if(!(0<=c&&c<=1&&0<=h&&h<=1))return;var p=new Float32Array(e);if(c!==f||h!==k)for(var d=0;d<e;++d)p[d]=i(d*t,c,h);function b(w){for(var g=0,v=1,T=e-1;v!==T&&p[v]<=w;++v)g+=t;--v;var D=(w-p[v])/(p[v+1]-p[v]),x=g+D*t,L=s(x,c,h);return L>=.001?o(w,x,c,h):L===0?x:u(w,g,g+t,c,h)}return function(w){return c===f&&h===k||w===0||w===1?w:i(b(w),f,k)}}return m}(),Be=function(){var e={linear:function(){return function(a){return a}}},t={Sine:function(){return function(a){return 1-Math.cos(a*Math.PI/2)}},Circ:function(){return function(a){return 1-Math.sqrt(1-a*a)}},Back:function(){return function(a){return a*a*(3*a-2)}},Bounce:function(){return function(a){for(var n,i=4;a<((n=Math.pow(2,--i))-1)/11;);return 1/Math.pow(4,3-i)-7.5625*Math.pow((n*3-2)/22-a,2)}},Elastic:function(a,n){a===void 0&&(a=1),n===void 0&&(n=.5);var i=O(a,1,10),s=O(n,.1,2);return function(u){return u===0||u===1?u:-i*Math.pow(2,10*(u-1))*Math.sin((u-1-s/(Math.PI*2)*Math.asin(1/i))*(Math.PI*2)/s)}}},r=["Quad","Cubic","Quart","Quint","Expo"];return r.forEach(function(a,n){t[a]=function(){return function(i){return Math.pow(i,n+2)}}}),Object.keys(t).forEach(function(a){var n=t[a];e["easeIn"+a]=n,e["easeOut"+a]=function(i,s){return function(u){return 1-n(i,s)(1-u)}},e["easeInOut"+a]=function(i,s){return function(u){return u<.5?n(i,s)(u*2)/2:1-n(i,s)(u*-2+2)/2}},e["easeOutIn"+a]=function(i,s){return function(u){return u<.5?(1-n(i,s)(1-u*2))/2:(n(i,s)(u*2-1)+1)/2}}}),e}();function ue(e,t){if(l.fnc(e))return e;var r=e.split("(")[0],a=Be[r],n=Oe(e);switch(r){case"spring":return Ae(e,t);case"cubicBezier":return re(Lt,n);case"steps":return re(Et,n);default:return re(a,n)}}function De(e){try{var t=document.querySelectorAll(e);return t}catch{return}}function Y(e,t){for(var r=e.length,a=arguments.length>=2?arguments[1]:void 0,n=[],i=0;i<r;i++)if(i in e){var s=e[i];t.call(a,s,i,e)&&n.push(s)}return n}function J(e){return e.reduce(function(t,r){return t.concat(l.arr(r)?J(r):r)},[])}function we(e){return l.arr(e)?e:(l.str(e)&&(e=De(e)||e),e instanceof NodeList||e instanceof HTMLCollection?[].slice.call(e):[e])}function ce(e,t){return e.some(function(r){return r===t})}function le(e){var t={};for(var r in e)t[r]=e[r];return t}function ae(e,t){var r=le(e);for(var a in e)r[a]=t.hasOwnProperty(a)?t[a]:e[a];return r}function G(e,t){var r=le(e);for(var a in t)r[a]=l.und(e[a])?t[a]:e[a];return r}function Vt(e){var t=/rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(e);return t?"rgba("+t[1]+",1)":e}function jt(e){var t=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,r=e.replace(t,function(u,o,m,c){return o+o+m+m+c+c}),a=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(r),n=parseInt(a[1],16),i=parseInt(a[2],16),s=parseInt(a[3],16);return"rgba("+n+","+i+","+s+",1)"}function Ft(e){var t=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(e)||/hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(e),r=parseInt(t[1],10)/360,a=parseInt(t[2],10)/100,n=parseInt(t[3],10)/100,i=t[4]||1;function s(h,k,p){return p<0&&(p+=1),p>1&&(p-=1),p<1/6?h+(k-h)*6*p:p<1/2?k:p<2/3?h+(k-h)*(2/3-p)*6:h}var u,o,m;if(a==0)u=o=m=n;else{var c=n<.5?n*(1+a):n+a-n*a,f=2*n-c;u=s(f,c,r+1/3),o=s(f,c,r),m=s(f,c,r-1/3)}return"rgba("+u*255+","+o*255+","+m*255+","+i+")"}function $t(e){if(l.rgb(e))return Vt(e);if(l.hex(e))return jt(e);if(l.hsl(e))return Ft(e)}function B(e){var t=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(e);if(t)return t[1]}function zt(e){if(H(e,"translate")||e==="perspective")return"px";if(H(e,"rotate")||H(e,"skew"))return"deg"}function oe(e,t){return l.fnc(e)?e(t.target,t.id,t.total):e}function A(e,t){return e.getAttribute(t)}function fe(e,t,r){var a=B(t);if(ce([r,"deg","rad","turn"],a))return t;var n=K.CSS[t+r];if(!l.und(n))return n;var i=100,s=document.createElement(e.tagName),u=e.parentNode&&e.parentNode!==document?e.parentNode:document.body;u.appendChild(s),s.style.position="absolute",s.style.width=i+r;var o=i/s.offsetWidth;u.removeChild(s);var m=o*parseFloat(t);return K.CSS[t+r]=m,m}function Ee(e,t,r){if(t in e.style){var a=t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),n=e.style[t]||getComputedStyle(e).getPropertyValue(a)||"0";return r?fe(e,n,r):n}}function de(e,t){if(l.dom(e)&&!l.inp(e)&&(!l.nil(A(e,t))||l.svg(e)&&e[t]))return"attribute";if(l.dom(e)&&ce(Dt,t))return"transform";if(l.dom(e)&&t!=="transform"&&Ee(e,t))return"css";if(e[t]!=null)return"object"}function Le(e){if(l.dom(e)){for(var t=e.style.transform||"",r=/(\w+)\(([^)]*)\)/g,a=new Map,n;n=r.exec(t);)a.set(n[1],n[2]);return a}}function Nt(e,t,r,a){var n=H(t,"scale")?1:0+zt(t),i=Le(e).get(t)||n;return r&&(r.transforms.list.set(t,i),r.transforms.last=t),a?fe(e,i,a):i}function ve(e,t,r,a){switch(de(e,t)){case"transform":return Nt(e,t,a,r);case"css":return Ee(e,t,r);case"attribute":return A(e,t);default:return e[t]||0}}function ge(e,t){var r=/^(\*=|\+=|-=)/.exec(e);if(!r)return e;var a=B(e)||0,n=parseFloat(t),i=parseFloat(e.replace(r[0],""));switch(r[0][0]){case"+":return n+i+a;case"-":return n-i+a;case"*":return n*i+a}}function Ve(e,t){if(l.col(e))return $t(e);if(/\s/g.test(e))return e;var r=B(e),a=r?e.substr(0,e.length-r.length):e;return t?a+t:a}function he(e,t){return Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2))}function Rt(e){return Math.PI*2*A(e,"r")}function Ht(e){return A(e,"width")*2+A(e,"height")*2}function Ut(e){return he({x:A(e,"x1"),y:A(e,"y1")},{x:A(e,"x2"),y:A(e,"y2")})}function je(e){for(var t=e.points,r=0,a,n=0;n<t.numberOfItems;n++){var i=t.getItem(n);n>0&&(r+=he(a,i)),a=i}return r}function Wt(e){var t=e.points;return je(e)+he(t.getItem(t.numberOfItems-1),t.getItem(0))}function Fe(e){if(e.getTotalLength)return e.getTotalLength();switch(e.tagName.toLowerCase()){case"circle":return Rt(e);case"rect":return Ht(e);case"line":return Ut(e);case"polyline":return je(e);case"polygon":return Wt(e)}}function qt(e){var t=Fe(e);return e.setAttribute("stroke-dasharray",t),t}function Qt(e){for(var t=e.parentNode;l.svg(t)&&l.svg(t.parentNode);)t=t.parentNode;return t}function $e(e,t){var r=t||{},a=r.el||Qt(e),n=a.getBoundingClientRect(),i=A(a,"viewBox"),s=n.width,u=n.height,o=r.viewBox||(i?i.split(" "):[0,0,s,u]);return{el:a,viewBox:o,x:o[0]/1,y:o[1]/1,w:s,h:u,vW:o[2],vH:o[3]}}function Zt(e,t){var r=l.str(e)?De(e)[0]:e,a=t||100;return function(n){return{property:n,el:r,svg:$e(r),totalLength:Fe(r)*(a/100)}}}function Kt(e,t,r){function a(c){c===void 0&&(c=0);var f=t+c>=1?t+c:0;return e.el.getPointAtLength(f)}var n=$e(e.el,e.svg),i=a(),s=a(-1),u=a(1),o=r?1:n.w/n.vW,m=r?1:n.h/n.vH;switch(e.property){case"x":return(i.x-n.x)*o;case"y":return(i.y-n.y)*m;case"angle":return Math.atan2(u.y-s.y,u.x-s.x)*180/Math.PI}}function Me(e,t){var r=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,a=Ve(l.pth(e)?e.totalLength:e,t)+"";return{original:a,numbers:a.match(r)?a.match(r).map(Number):[0],strings:l.str(e)||t?a.split(r):[]}}function me(e){var t=e?J(l.arr(e)?e.map(we):we(e)):[];return Y(t,function(r,a,n){return n.indexOf(r)===a})}function ze(e){var t=me(e);return t.map(function(r,a){return{target:r,id:a,total:t.length,transforms:{list:Le(r)}}})}function Yt(e,t){var r=le(t);if(/^spring/.test(r.easing)&&(r.duration=Ae(r.easing)),l.arr(e)){var a=e.length,n=a===2&&!l.obj(e[0]);n?e={value:e}:l.fnc(t.duration)||(r.duration=t.duration/a)}var i=l.arr(e)?e:[e];return i.map(function(s,u){var o=l.obj(s)&&!l.pth(s)?s:{value:s};return l.und(o.delay)&&(o.delay=u?0:t.delay),l.und(o.endDelay)&&(o.endDelay=u===i.length-1?t.endDelay:0),o}).map(function(s){return G(s,r)})}function Jt(e){for(var t=Y(J(e.map(function(i){return Object.keys(i)})),function(i){return l.key(i)}).reduce(function(i,s){return i.indexOf(s)<0&&i.push(s),i},[]),r={},a=function(i){var s=t[i];r[s]=e.map(function(u){var o={};for(var m in u)l.key(m)?m==s&&(o.value=u[m]):o[m]=u[m];return o})},n=0;n<t.length;n++)a(n);return r}function Gt(e,t){var r=[],a=t.keyframes;a&&(t=G(Jt(a),t));for(var n in t)l.key(n)&&r.push({name:n,tweens:Yt(t[n],e)});return r}function Xt(e,t){var r={};for(var a in e){var n=oe(e[a],t);l.arr(n)&&(n=n.map(function(i){return oe(i,t)}),n.length===1&&(n=n[0])),r[a]=n}return r.duration=parseFloat(r.duration),r.delay=parseFloat(r.delay),r}function er(e,t){var r;return e.tweens.map(function(a){var n=Xt(a,t),i=n.value,s=l.arr(i)?i[1]:i,u=B(s),o=ve(t.target,e.name,u,t),m=r?r.to.original:o,c=l.arr(i)?i[0]:m,f=B(c)||B(o),h=u||f;return l.und(s)&&(s=m),n.from=Me(c,h),n.to=Me(ge(s,c),h),n.start=r?r.end:0,n.end=n.start+n.delay+n.duration+n.endDelay,n.easing=ue(n.easing,n.duration),n.isPath=l.pth(i),n.isPathTargetInsideSVG=n.isPath&&l.svg(t.target),n.isColor=l.col(n.from.original),n.isColor&&(n.round=1),r=n,n})}var Ne={css:function(e,t,r){return e.style[t]=r},attribute:function(e,t,r){return e.setAttribute(t,r)},object:function(e,t,r){return e[t]=r},transform:function(e,t,r,a,n){if(a.list.set(t,r),t===a.last||n){var i="";a.list.forEach(function(s,u){i+=u+"("+s+") "}),e.style.transform=i}}};function Re(e,t){var r=ze(e);r.forEach(function(a){for(var n in t){var i=oe(t[n],a),s=a.target,u=B(i),o=ve(s,n,u,a),m=u||B(o),c=ge(Ve(i,m),o),f=de(s,n);Ne[f](s,n,c,a.transforms,!0)}})}function tr(e,t){var r=de(e.target,t.name);if(r){var a=er(t,e),n=a[a.length-1];return{type:r,property:t.name,animatable:e,tweens:a,duration:n.end,delay:a[0].delay,endDelay:n.endDelay}}}function rr(e,t){return Y(J(e.map(function(r){return t.map(function(a){return tr(r,a)})})),function(r){return!l.und(r)})}function He(e,t){var r=e.length,a=function(i){return i.timelineOffset?i.timelineOffset:0},n={};return n.duration=r?Math.max.apply(Math,e.map(function(i){return a(i)+i.duration})):t.duration,n.delay=r?Math.min.apply(Math,e.map(function(i){return a(i)+i.delay})):t.delay,n.endDelay=r?n.duration-Math.max.apply(Math,e.map(function(i){return a(i)+i.duration-i.endDelay})):t.endDelay,n}var ke=0;function nr(e){var t=ae(Se,e),r=ae(se,e),a=Gt(r,e),n=ze(e.targets),i=rr(n,a),s=He(i,r),u=ke;return ke++,G(t,{id:u,children:[],animatables:n,animations:i,duration:s.duration,delay:s.delay,endDelay:s.endDelay})}var I=[],Ue=function(){var e;function t(){!e&&(!Te()||!_.suspendWhenDocumentHidden)&&I.length>0&&(e=requestAnimationFrame(r))}function r(n){for(var i=I.length,s=0;s<i;){var u=I[s];u.paused?(I.splice(s,1),i--):(u.tick(n),s++)}e=s>0?requestAnimationFrame(r):void 0}function a(){_.suspendWhenDocumentHidden&&(Te()?e=cancelAnimationFrame(e):(I.forEach(function(n){return n._onDocumentVisibility()}),Ue()))}return typeof document<"u"&&document.addEventListener("visibilitychange",a),t}();function Te(){return!!document&&document.hidden}function _(e){e===void 0&&(e={});var t=0,r=0,a=0,n,i=0,s=null;function u(g){var v=window.Promise&&new Promise(function(T){return s=T});return g.finished=v,v}var o=nr(e);u(o);function m(){var g=o.direction;g!=="alternate"&&(o.direction=g!=="normal"?"normal":"reverse"),o.reversed=!o.reversed,n.forEach(function(v){return v.reversed=o.reversed})}function c(g){return o.reversed?o.duration-g:g}function f(){t=0,r=c(o.currentTime)*(1/_.speed)}function h(g,v){v&&v.seek(g-v.timelineOffset)}function k(g){if(o.reversePlayback)for(var T=i;T--;)h(g,n[T]);else for(var v=0;v<i;v++)h(g,n[v])}function p(g){for(var v=0,T=o.animations,D=T.length;v<D;){var x=T[v],L=x.animatable,$=x.tweens,V=$.length-1,M=$[V];V&&(M=Y($,function(Qe){return g<Qe.end})[0]||M);for(var j=O(g-M.start-M.delay,0,M.duration)/M.duration,Q=isNaN(j)?1:M.easing(j),P=M.to.strings,X=M.round,ee=[],qe=M.to.numbers.length,F=void 0,z=0;z<qe;z++){var N=void 0,pe=M.to.numbers[z],ye=M.from.numbers[z]||0;M.isPath?N=Kt(M.value,Q*pe,M.isPathTargetInsideSVG):N=ye+Q*(pe-ye),X&&(M.isColor&&z>2||(N=Math.round(N*X)/X)),ee.push(N)}var _e=P.length;if(!_e)F=ee[0];else{F=P[0];for(var R=0;R<_e;R++){P[R];var be=P[R+1],te=ee[R];isNaN(te)||(be?F+=te+be:F+=te+" ")}}Ne[x.type](L.target,x.property,F,L.transforms),x.currentValue=F,v++}}function d(g){o[g]&&!o.passThrough&&o[g](o)}function b(){o.remaining&&o.remaining!==!0&&o.remaining--}function w(g){var v=o.duration,T=o.delay,D=v-o.endDelay,x=c(g);o.progress=O(x/v*100,0,100),o.reversePlayback=x<o.currentTime,n&&k(x),!o.began&&o.currentTime>0&&(o.began=!0,d("begin")),!o.loopBegan&&o.currentTime>0&&(o.loopBegan=!0,d("loopBegin")),x<=T&&o.currentTime!==0&&p(0),(x>=D&&o.currentTime!==v||!v)&&p(v),x>T&&x<D?(o.changeBegan||(o.changeBegan=!0,o.changeCompleted=!1,d("changeBegin")),d("change"),p(x)):o.changeBegan&&(o.changeCompleted=!0,o.changeBegan=!1,d("changeComplete")),o.currentTime=O(x,0,v),o.began&&d("update"),g>=v&&(r=0,b(),o.remaining?(t=a,d("loopComplete"),o.loopBegan=!1,o.direction==="alternate"&&m()):(o.paused=!0,o.completed||(o.completed=!0,d("loopComplete"),d("complete"),!o.passThrough&&"Promise"in window&&(s(),u(o)))))}return o.reset=function(){var g=o.direction;o.passThrough=!1,o.currentTime=0,o.progress=0,o.paused=!0,o.began=!1,o.loopBegan=!1,o.changeBegan=!1,o.completed=!1,o.changeCompleted=!1,o.reversePlayback=!1,o.reversed=g==="reverse",o.remaining=o.loop,n=o.children,i=n.length;for(var v=i;v--;)o.children[v].reset();(o.reversed&&o.loop!==!0||g==="alternate"&&o.loop===1)&&o.remaining++,p(o.reversed?o.duration:0)},o._onDocumentVisibility=f,o.set=function(g,v){return Re(g,v),o},o.tick=function(g){a=g,t||(t=a),w((a+(r-t))*_.speed)},o.seek=function(g){w(c(g))},o.pause=function(){o.paused=!0,f()},o.play=function(){o.paused&&(o.completed&&o.reset(),o.paused=!1,I.push(o),f(),Ue())},o.reverse=function(){m(),o.completed=!o.reversed,f()},o.restart=function(){o.reset(),o.play()},o.remove=function(g){var v=me(g);We(v,o)},o.reset(),o.autoplay&&o.play(),o}function Ce(e,t){for(var r=t.length;r--;)ce(e,t[r].animatable.target)&&t.splice(r,1)}function We(e,t){var r=t.animations,a=t.children;Ce(e,r);for(var n=a.length;n--;){var i=a[n],s=i.animations;Ce(e,s),!s.length&&!i.children.length&&a.splice(n,1)}!r.length&&!a.length&&t.pause()}function ar(e){for(var t=me(e),r=I.length;r--;){var a=I[r];We(t,a)}}function or(e,t){t===void 0&&(t={});var r=t.direction||"normal",a=t.easing?ue(t.easing):null,n=t.grid,i=t.axis,s=t.from||0,u=s==="first",o=s==="center",m=s==="last",c=l.arr(e),f=parseFloat(c?e[0]:e),h=c?parseFloat(e[1]):0,k=B(c?e[1]:e)||0,p=t.start||0+(c?f:0),d=[],b=0;return function(w,g,v){if(u&&(s=0),o&&(s=(v-1)/2),m&&(s=v-1),!d.length){for(var T=0;T<v;T++){if(!n)d.push(Math.abs(s-T));else{var D=o?(n[0]-1)/2:s%n[0],x=o?(n[1]-1)/2:Math.floor(s/n[0]),L=T%n[0],$=Math.floor(T/n[0]),V=D-L,M=x-$,j=Math.sqrt(V*V+M*M);i==="x"&&(j=-V),i==="y"&&(j=-M),d.push(j)}b=Math.max.apply(Math,d)}a&&(d=d.map(function(P){return a(P/b)*b})),r==="reverse"&&(d=d.map(function(P){return i?P<0?P*-1:-P:Math.abs(b-P)}))}var Q=c?(h-f)/b:f;return p+Q*(Math.round(d[g]*100)/100)+k}}function ir(e){e===void 0&&(e={});var t=_(e);return t.duration=0,t.add=function(r,a){var n=I.indexOf(t),i=t.children;n>-1&&I.splice(n,1);function s(h){h.passThrough=!0}for(var u=0;u<i.length;u++)s(i[u]);var o=G(r,ae(se,e));o.targets=o.targets||e.targets;var m=t.duration;o.autoplay=!1,o.direction=t.direction,o.timelineOffset=l.und(a)?m:ge(a,m),s(t),t.seek(o.timelineOffset);var c=_(o);s(c),i.push(c);var f=He(i,e);return t.delay=f.delay,t.endDelay=f.endDelay,t.duration=f.duration,t.seek(0),t.reset(),t.autoplay&&t.play(),t},t}_.version="3.2.1";_.speed=1;_.suspendWhenDocumentHidden=!0;_.running=I;_.remove=ar;_.get=ve;_.set=Re;_.convertPx=fe;_.path=Zt;_.setDashoffset=qt;_.stagger=or;_.timeline=ir;_.easing=ue;_.penner=Be;_.random=function(e,t){return Math.floor(Math.random()*(t-e+1))+e};const sr={class:"fixed -z-10 top-0 left-0 w-full h-screen"},ur=Je('<div class="relative top-1/2 left-1/2 transform -translate-y-10"><div class="blob__container absolute transform"><div class="blob w-64 h-64 bg-yellow-300/30 rounded-full filter blur-xl transform -translate-x-1/2 -translate-y-[80%]"></div></div><div class="blob__container absolute transform"><div class="blob w-64 h-64 bg-blue-300/30 rounded-full filter blur-xl transform -translate-x-[80%] -translate-y-[20%]"></div></div><div class="blob__container absolute transform"><div class="blob w-64 h-64 bg-green-300/30 rounded-full filter blur-xl transform -translate-x-[20%] -translate-y-[20%]"></div></div></div>',1),cr=[ur],lr=q({__name:"Blob",setup(e){const t=(r,a)=>({get(){return getComputedStyle(r).getPropertyValue(a)},set(n){r.style.setProperty(a,n)}});return ie(()=>{const r=Array.from(document.querySelectorAll(".blob"),n=>Object.defineProperties({},{scaleX:t(n,"--un-scale-x"),scaleY:t(n,"--un-scale-y")})),a=Array.from(document.querySelectorAll(".blob__container"),n=>Object.defineProperties({},{rotate:t(n,"--un-rotate")}));_({targets:r,scaleX:[1.3,1,1.3],scaleY:[1.3,1,1.3],loop:!0,direction:"alternate",autoplay:!0,duration:1e4,delay:_.stagger(500)}),_({targets:a,rotate:"1turn",loop:!0,direction:"alternate",autoplay:!0,duration:2e4,delay:_.stagger(500)})}),(r,a)=>(U(),W("div",sr,cr))}}),fr=q({name:"ClientOnly",inheritAttrs:!1,props:["fallback","placeholder","placeholderTag","fallbackTag"],setup(e,{slots:t,attrs:r}){const a=ne(!1);return ie(()=>{a.value=!0}),n=>{var o;if(a.value)return(o=t.default)==null?void 0:o.call(t);const i=t.fallback||t.placeholder;if(i)return i();const s=n.fallback||n.placeholder||"",u=n.fallbackTag||n.placeholderTag||"span";return W(u,r,s)}}}),dr=q({name:"CursorFollower",setup(){const e=xe(it()),t=xe({pointer:!1,click:!1}),r=et(),a=()=>{const n=r==null?void 0:r.vnode.el;n&&!n.hidden&&_({targets:n,translateX:`calc(-45% + ${e.x}px)`,translateY:`calc(-40% + ${e.y}px)`,scale:t.click?"-=0.6":t.pointer?1.6:1,opacity:t.pointer?.5:1,easing:"easeOutQuart",duration:150})};return Ge([e,t],()=>a(),{immediate:!0}),ie(()=>{document.body.onmouseover=n=>{if(n.target&&(r!=null&&r.vnode.el)){const i=window.getComputedStyle(n.target).cursor;t.pointer=i==="pointer"}},document.onmousedown=()=>{t.click=!0},document.onmouseup=()=>{t.click=!1}}),()=>Xe("div",{class:"pointer-events-none opacity-0 absolute z-49 top-0 left-0 w-20 h-20 bg-blue-300/30 border border-blue-500/20 rounded-full"})}}),vr=dr;const gr={class:"min-h-100vh flex flex-col"},hr={class:"grow"},mr={class:"p-8 bg-purple-400 flex flex-col-reverse md:flex-row justify-between items-center"},pr=y("span",{class:"text-blue-50 text-center"}," Copyright © 2022 All rights reserved ",-1),yr=y("div",{class:"text-sm"},null,-1),Mr=q({__name:"default",setup(e){const t=/Android|webOS|iPhone|iPad|Mac|Macintosh|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);return(r,a)=>{const n=Bt,i=lr,s=fr,u=Pe,o=vr;return U(),W("div",gr,[y("nav",null,[S(n)]),y("div",hr,[tt(r.$slots,"default")]),S(s,null,{default:E(()=>[S(i)]),_:1}),y("footer",mr,[S(u,{to:{name:"index"},class:"hover:underline text-purple-50 flex items-center"},{default:E(()=>[rt(" anhzf.dev ")]),_:1}),pr,yr]),Z(t)?Ie("",!0):(U(),nt(o,{key:0}))])}}});export{Mr as default};