import{_ as Pe}from"./BY0oFBqg.js";import{a as W,b as Ze,c as ne,f as U,g as q,h as y,H as Z,j as B,w as L,i as Ie,T as Ke,p as Ye,l as Je,q as Ge,o as ie,au as Xe,av as et,r as xe,R as tt,Q as rt,a0 as nt,aa as at,m as ot,E as it}from"./Bpq78z8M.js";import{a as st}from"./DhikirmC.js";const O=e=>(Ye("data-v-18b254ed"),e=e(),Je(),e),ut={class:"fixed z-50 top-0 right-0"},lt={class:"m-6"},ct=O(()=>y("div",{class:"i-eva:menu-2-outline cursor-pointer w-12 h-12 text-slate-900"},null,-1)),ft=[ct],dt={class:"self-end p-6"},vt=O(()=>y("div",{class:"i-eva:close-outline cursor-pointer w-12 h-12 text-slate-900"},null,-1)),gt=[vt],ht={class:"flex flex-col gap-y-2"},mt={class:"flex"},pt=O(()=>y("div",{class:"i-eva:bulb-outline menu-item__icon"},null,-1)),yt=O(()=>y("span",null,"Projects",-1)),bt=O(()=>y("li",{class:"flex"},[y("a",{href:"https://drive.google.com/file/d/1BNocju57scUMHLoShoUltefS7NrmCsO1/view?usp=sharing",target:"_blank",class:"menu-item"},[y("div",{class:"i-eva:attach-outline menu-item__icon"}),y("span",null,"Resume")])],-1)),_t={class:"flex"},xt=O(()=>y("div",{class:"i-eva:book-open-outline menu-item__icon"},null,-1)),wt=O(()=>y("span",null,"Blogs",-1)),Mt={class:"flex"},kt=O(()=>y("div",{class:"i-eva:link-2-outline menu-item__icon"},null,-1)),Tt=O(()=>y("span",null,"Links",-1)),Ct={class:"absolute bottom-6 inset-x-1/2 flex justify-center transform -translate-x-1/2"},Pt=O(()=>y("div",{class:"i-eva:home-outline w-8 h-8 text-slate-300 group-hover:text-blue-500"},null,-1)),It=W({__name:"MegaMenu",setup(e){const t=Ze(),r=ne(null),a=ne(!1);return t.afterEach(()=>{a.value=!1}),(n,i)=>{const s=Pe;return U(),q("div",ut,[y("div",lt,[y("button",{"aria-label":"Open Menu",class:"flex p-2 bg-teal-300/50 hover:bg-amber-300/50 justify-center items-center rounded-full transition-colors",onClick:i[0]||(i[0]=u=>a.value=!Z(a))},ft)]),B(Ke,{class:"absolute right-0 top-0 transition-transform duration-500","enter-from-class":"translate-x-full","enter-to-class":"translate-x-0","leave-active-class":"translate-x-0","leave-to-class":"translate-x-full"},{default:L(()=>[Z(a)?(U(),q("nav",{key:0,ref_key:"menuRef",ref:r,class:"overflow-auto flex flex-col w-80 max-h-screen pb-32 bg-white shadow-xl shadow-indigo-400"},[y("div",dt,[y("button",{class:"flex p-2 hover:bg-rose-100 justify-center items-center rounded-full",onClick:i[1]||(i[1]=u=>a.value=!Z(a))},gt)]),y("ul",ht,[y("li",mt,[B(s,{to:{name:"projects"},class:"menu-item"},{default:L(()=>[pt,yt]),_:1})]),bt,y("li",_t,[B(s,{href:{name:"blogs"},class:"menu-item"},{default:L(()=>[xt,wt]),_:1})]),y("li",Mt,[B(s,{to:{name:"links"},class:"menu-item"},{default:L(()=>[kt,Tt]),_:1})]),y("li",Ct,[B(s,{to:{name:"index"},class:"group p-4 bg-white hover:bg-slate-100 active:bg-slate-200 rounded-full border-2 border-blue-200"},{default:L(()=>[Pt]),_:1})])])],512)):Ie("",!0)]),_:1})])}}}),St=Ge(It,[["__scopeId","data-v-18b254ed"]]);var Se={update:null,begin:null,loopBegin:null,changeBegin:null,change:null,changeComplete:null,loopComplete:null,complete:null,loop:1,direction:"normal",autoplay:!0,timelineOffset:0},se={duration:1e3,delay:0,endDelay:0,easing:"easeOutElastic(1, .5)",round:0},Ot=["translateX","translateY","translateZ","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","skew","skewX","skewY","perspective","matrix","matrix3d"],K={CSS:{},springs:{}};function I(e,t,r){return Math.min(Math.max(e,t),r)}function H(e,t){return e.indexOf(t)>-1}function re(e,t){return e.apply(null,t)}var c={arr:function(e){return Array.isArray(e)},obj:function(e){return H(Object.prototype.toString.call(e),"Object")},pth:function(e){return c.obj(e)&&e.hasOwnProperty("totalLength")},svg:function(e){return e instanceof SVGElement},inp:function(e){return e instanceof HTMLInputElement},dom:function(e){return e.nodeType||c.svg(e)},str:function(e){return typeof e=="string"},fnc:function(e){return typeof e=="function"},und:function(e){return typeof e>"u"},nil:function(e){return c.und(e)||e===null},hex:function(e){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(e)},rgb:function(e){return/^rgb/.test(e)},hsl:function(e){return/^hsl/.test(e)},col:function(e){return c.hex(e)||c.rgb(e)||c.hsl(e)},key:function(e){return!Se.hasOwnProperty(e)&&!se.hasOwnProperty(e)&&e!=="targets"&&e!=="keyframes"}};function Oe(e){var t=/\(([^)]+)\)/.exec(e);return t?t[1].split(",").map(function(r){return parseFloat(r)}):[]}function Be(e,t){var r=Oe(e),a=I(c.und(r[0])?1:r[0],.1,100),n=I(c.und(r[1])?100:r[1],.1,100),i=I(c.und(r[2])?10:r[2],.1,100),s=I(c.und(r[3])?0:r[3],.1,100),u=Math.sqrt(n/a),o=i/(2*Math.sqrt(n*a)),m=o<1?u*Math.sqrt(1-o*o):0,l=1,f=o<1?(o*u+-s)/m:-s+u;function h(p){var d=t?t*p/1e3:p;return o<1?d=Math.exp(-d*o*u)*(l*Math.cos(m*d)+f*Math.sin(m*d)):d=(l+f*d)*Math.exp(-d*u),p===0||p===1?p:1-d}function k(){var p=K.springs[e];if(p)return p;for(var d=1/6,_=0,w=0;;)if(_+=d,h(_)===1){if(w++,w>=16)break}else w=0;var g=_*d*1e3;return K.springs[e]=g,g}return t?h:k}function Bt(e){return e===void 0&&(e=10),function(t){return Math.ceil(I(t,1e-6,1)*e)*(1/e)}}var Dt=function(){var e=11,t=1/(e-1);function r(l,f){return 1-3*f+3*l}function a(l,f){return 3*f-6*l}function n(l){return 3*l}function i(l,f,h){return((r(f,h)*l+a(f,h))*l+n(f))*l}function s(l,f,h){return 3*r(f,h)*l*l+2*a(f,h)*l+n(f)}function u(l,f,h,k,p){var d,_,w=0;do _=f+(h-f)/2,d=i(_,k,p)-l,d>0?h=_:f=_;while(Math.abs(d)>1e-7&&++w<10);return _}function o(l,f,h,k){for(var p=0;p<4;++p){var d=s(f,h,k);if(d===0)return f;var _=i(f,h,k)-l;f-=_/d}return f}function m(l,f,h,k){if(!(0<=l&&l<=1&&0<=h&&h<=1))return;var p=new Float32Array(e);if(l!==f||h!==k)for(var d=0;d<e;++d)p[d]=i(d*t,l,h);function _(w){for(var g=0,v=1,T=e-1;v!==T&&p[v]<=w;++v)g+=t;--v;var A=(w-p[v])/(p[v+1]-p[v]),x=g+A*t,E=s(x,l,h);return E>=.001?o(w,x,l,h):E===0?x:u(w,g,g+t,l,h)}return function(w){return l===f&&h===k||w===0||w===1?w:i(_(w),f,k)}}return m}(),De=function(){var e={linear:function(){return function(a){return a}}},t={Sine:function(){return function(a){return 1-Math.cos(a*Math.PI/2)}},Expo:function(){return function(a){return a?Math.pow(2,10*a-10):0}},Circ:function(){return function(a){return 1-Math.sqrt(1-a*a)}},Back:function(){return function(a){return a*a*(3*a-2)}},Bounce:function(){return function(a){for(var n,i=4;a<((n=Math.pow(2,--i))-1)/11;);return 1/Math.pow(4,3-i)-7.5625*Math.pow((n*3-2)/22-a,2)}},Elastic:function(a,n){a===void 0&&(a=1),n===void 0&&(n=.5);var i=I(a,1,10),s=I(n,.1,2);return function(u){return u===0||u===1?u:-i*Math.pow(2,10*(u-1))*Math.sin((u-1-s/(Math.PI*2)*Math.asin(1/i))*(Math.PI*2)/s)}}},r=["Quad","Cubic","Quart","Quint"];return r.forEach(function(a,n){t[a]=function(){return function(i){return Math.pow(i,n+2)}}}),Object.keys(t).forEach(function(a){var n=t[a];e["easeIn"+a]=n,e["easeOut"+a]=function(i,s){return function(u){return 1-n(i,s)(1-u)}},e["easeInOut"+a]=function(i,s){return function(u){return u<.5?n(i,s)(u*2)/2:1-n(i,s)(u*-2+2)/2}},e["easeOutIn"+a]=function(i,s){return function(u){return u<.5?(1-n(i,s)(1-u*2))/2:(n(i,s)(u*2-1)+1)/2}}}),e}();function ue(e,t){if(c.fnc(e))return e;var r=e.split("(")[0],a=De[r],n=Oe(e);switch(r){case"spring":return Be(e,t);case"cubicBezier":return re(Dt,n);case"steps":return re(Bt,n);default:return re(a,n)}}function Ae(e){try{var t=document.querySelectorAll(e);return t}catch{return}}function Y(e,t){for(var r=e.length,a=arguments.length>=2?arguments[1]:void 0,n=[],i=0;i<r;i++)if(i in e){var s=e[i];t.call(a,s,i,e)&&n.push(s)}return n}function J(e){return e.reduce(function(t,r){return t.concat(c.arr(r)?J(r):r)},[])}function we(e){return c.arr(e)?e:(c.str(e)&&(e=Ae(e)||e),e instanceof NodeList||e instanceof HTMLCollection?[].slice.call(e):[e])}function le(e,t){return e.some(function(r){return r===t})}function ce(e){var t={};for(var r in e)t[r]=e[r];return t}function ae(e,t){var r=ce(e);for(var a in e)r[a]=t.hasOwnProperty(a)?t[a]:e[a];return r}function G(e,t){var r=ce(e);for(var a in t)r[a]=c.und(e[a])?t[a]:e[a];return r}function At(e){var t=/rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(e);return t?"rgba("+t[1]+",1)":e}function Et(e){var t=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,r=e.replace(t,function(u,o,m,l){return o+o+m+m+l+l}),a=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(r),n=parseInt(a[1],16),i=parseInt(a[2],16),s=parseInt(a[3],16);return"rgba("+n+","+i+","+s+",1)"}function Lt(e){var t=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(e)||/hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(e),r=parseInt(t[1],10)/360,a=parseInt(t[2],10)/100,n=parseInt(t[3],10)/100,i=t[4]||1;function s(h,k,p){return p<0&&(p+=1),p>1&&(p-=1),p<1/6?h+(k-h)*6*p:p<1/2?k:p<2/3?h+(k-h)*(2/3-p)*6:h}var u,o,m;if(a==0)u=o=m=n;else{var l=n<.5?n*(1+a):n+a-n*a,f=2*n-l;u=s(f,l,r+1/3),o=s(f,l,r),m=s(f,l,r-1/3)}return"rgba("+u*255+","+o*255+","+m*255+","+i+")"}function Vt(e){if(c.rgb(e))return At(e);if(c.hex(e))return Et(e);if(c.hsl(e))return Lt(e)}function D(e){var t=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(e);if(t)return t[1]}function jt(e){if(H(e,"translate")||e==="perspective")return"px";if(H(e,"rotate")||H(e,"skew"))return"deg"}function oe(e,t){return c.fnc(e)?e(t.target,t.id,t.total):e}function S(e,t){return e.getAttribute(t)}function fe(e,t,r){var a=D(t);if(le([r,"deg","rad","turn"],a))return t;var n=K.CSS[t+r];if(!c.und(n))return n;var i=100,s=document.createElement(e.tagName),u=e.parentNode&&e.parentNode!==document?e.parentNode:document.body;u.appendChild(s),s.style.position="absolute",s.style.width=i+r;var o=i/s.offsetWidth;u.removeChild(s);var m=o*parseFloat(t);return K.CSS[t+r]=m,m}function Ee(e,t,r){if(t in e.style){var a=t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),n=e.style[t]||getComputedStyle(e).getPropertyValue(a)||"0";return r?fe(e,n,r):n}}function de(e,t){if(c.dom(e)&&!c.inp(e)&&(!c.nil(S(e,t))||c.svg(e)&&e[t]))return"attribute";if(c.dom(e)&&le(Ot,t))return"transform";if(c.dom(e)&&t!=="transform"&&Ee(e,t))return"css";if(e[t]!=null)return"object"}function Le(e){if(c.dom(e)){for(var t=e.style.transform||"",r=/(\w+)\(([^)]*)\)/g,a=new Map,n;n=r.exec(t);)a.set(n[1],n[2]);return a}}function Ft(e,t,r,a){var n=H(t,"scale")?1:0+jt(t),i=Le(e).get(t)||n;return r&&(r.transforms.list.set(t,i),r.transforms.last=t),a?fe(e,i,a):i}function ve(e,t,r,a){switch(de(e,t)){case"transform":return Ft(e,t,a,r);case"css":return Ee(e,t,r);case"attribute":return S(e,t);default:return e[t]||0}}function ge(e,t){var r=/^(\*=|\+=|-=)/.exec(e);if(!r)return e;var a=D(e)||0,n=parseFloat(t),i=parseFloat(e.replace(r[0],""));switch(r[0][0]){case"+":return n+i+a;case"-":return n-i+a;case"*":return n*i+a}}function Ve(e,t){if(c.col(e))return Vt(e);if(/\s/g.test(e))return e;var r=D(e),a=r?e.substr(0,e.length-r.length):e;return t?a+t:a}function he(e,t){return Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2))}function $t(e){return Math.PI*2*S(e,"r")}function zt(e){return S(e,"width")*2+S(e,"height")*2}function Rt(e){return he({x:S(e,"x1"),y:S(e,"y1")},{x:S(e,"x2"),y:S(e,"y2")})}function je(e){for(var t=e.points,r=0,a,n=0;n<t.numberOfItems;n++){var i=t.getItem(n);n>0&&(r+=he(a,i)),a=i}return r}function Nt(e){var t=e.points;return je(e)+he(t.getItem(t.numberOfItems-1),t.getItem(0))}function Fe(e){if(e.getTotalLength)return e.getTotalLength();switch(e.tagName.toLowerCase()){case"circle":return $t(e);case"rect":return zt(e);case"line":return Rt(e);case"polyline":return je(e);case"polygon":return Nt(e)}}function Ht(e){var t=Fe(e);return e.setAttribute("stroke-dasharray",t),t}function Ut(e){for(var t=e.parentNode;c.svg(t)&&c.svg(t.parentNode);)t=t.parentNode;return t}function $e(e,t){var r=t||{},a=r.el||Ut(e),n=a.getBoundingClientRect(),i=S(a,"viewBox"),s=n.width,u=n.height,o=r.viewBox||(i?i.split(" "):[0,0,s,u]);return{el:a,viewBox:o,x:o[0]/1,y:o[1]/1,w:s,h:u,vW:o[2],vH:o[3]}}function qt(e,t){var r=c.str(e)?Ae(e)[0]:e,a=t||100;return function(n){return{property:n,el:r,svg:$e(r),totalLength:Fe(r)*(a/100)}}}function Wt(e,t,r){function a(l){l===void 0&&(l=0);var f=t+l>=1?t+l:0;return e.el.getPointAtLength(f)}var n=$e(e.el,e.svg),i=a(),s=a(-1),u=a(1),o=r?1:n.w/n.vW,m=r?1:n.h/n.vH;switch(e.property){case"x":return(i.x-n.x)*o;case"y":return(i.y-n.y)*m;case"angle":return Math.atan2(u.y-s.y,u.x-s.x)*180/Math.PI}}function Me(e,t){var r=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,a=Ve(c.pth(e)?e.totalLength:e,t)+"";return{original:a,numbers:a.match(r)?a.match(r).map(Number):[0],strings:c.str(e)||t?a.split(r):[]}}function me(e){var t=e?J(c.arr(e)?e.map(we):we(e)):[];return Y(t,function(r,a,n){return n.indexOf(r)===a})}function ze(e){var t=me(e);return t.map(function(r,a){return{target:r,id:a,total:t.length,transforms:{list:Le(r)}}})}function Qt(e,t){var r=ce(t);if(/^spring/.test(r.easing)&&(r.duration=Be(r.easing)),c.arr(e)){var a=e.length,n=a===2&&!c.obj(e[0]);n?e={value:e}:c.fnc(t.duration)||(r.duration=t.duration/a)}var i=c.arr(e)?e:[e];return i.map(function(s,u){var o=c.obj(s)&&!c.pth(s)?s:{value:s};return c.und(o.delay)&&(o.delay=u?0:t.delay),c.und(o.endDelay)&&(o.endDelay=u===i.length-1?t.endDelay:0),o}).map(function(s){return G(s,r)})}function Zt(e){for(var t=Y(J(e.map(function(i){return Object.keys(i)})),function(i){return c.key(i)}).reduce(function(i,s){return i.indexOf(s)<0&&i.push(s),i},[]),r={},a=function(i){var s=t[i];r[s]=e.map(function(u){var o={};for(var m in u)c.key(m)?m==s&&(o.value=u[m]):o[m]=u[m];return o})},n=0;n<t.length;n++)a(n);return r}function Kt(e,t){var r=[],a=t.keyframes;a&&(t=G(Zt(a),t));for(var n in t)c.key(n)&&r.push({name:n,tweens:Qt(t[n],e)});return r}function Yt(e,t){var r={};for(var a in e){var n=oe(e[a],t);c.arr(n)&&(n=n.map(function(i){return oe(i,t)}),n.length===1&&(n=n[0])),r[a]=n}return r.duration=parseFloat(r.duration),r.delay=parseFloat(r.delay),r}function Jt(e,t){var r;return e.tweens.map(function(a){var n=Yt(a,t),i=n.value,s=c.arr(i)?i[1]:i,u=D(s),o=ve(t.target,e.name,u,t),m=r?r.to.original:o,l=c.arr(i)?i[0]:m,f=D(l)||D(o),h=u||f;return c.und(s)&&(s=m),n.from=Me(l,h),n.to=Me(ge(s,l),h),n.start=r?r.end:0,n.end=n.start+n.delay+n.duration+n.endDelay,n.easing=ue(n.easing,n.duration),n.isPath=c.pth(i),n.isPathTargetInsideSVG=n.isPath&&c.svg(t.target),n.isColor=c.col(n.from.original),n.isColor&&(n.round=1),r=n,n})}var Re={css:function(e,t,r){return e.style[t]=r},attribute:function(e,t,r){return e.setAttribute(t,r)},object:function(e,t,r){return e[t]=r},transform:function(e,t,r,a,n){if(a.list.set(t,r),t===a.last||n){var i="";a.list.forEach(function(s,u){i+=u+"("+s+") "}),e.style.transform=i}}};function Ne(e,t){var r=ze(e);r.forEach(function(a){for(var n in t){var i=oe(t[n],a),s=a.target,u=D(i),o=ve(s,n,u,a),m=u||D(o),l=ge(Ve(i,m),o),f=de(s,n);Re[f](s,n,l,a.transforms,!0)}})}function Gt(e,t){var r=de(e.target,t.name);if(r){var a=Jt(t,e),n=a[a.length-1];return{type:r,property:t.name,animatable:e,tweens:a,duration:n.end,delay:a[0].delay,endDelay:n.endDelay}}}function Xt(e,t){return Y(J(e.map(function(r){return t.map(function(a){return Gt(r,a)})})),function(r){return!c.und(r)})}function He(e,t){var r=e.length,a=function(i){return i.timelineOffset?i.timelineOffset:0},n={};return n.duration=r?Math.max.apply(Math,e.map(function(i){return a(i)+i.duration})):t.duration,n.delay=r?Math.min.apply(Math,e.map(function(i){return a(i)+i.delay})):t.delay,n.endDelay=r?n.duration-Math.max.apply(Math,e.map(function(i){return a(i)+i.duration-i.endDelay})):t.endDelay,n}var ke=0;function er(e){var t=ae(Se,e),r=ae(se,e),a=Kt(r,e),n=ze(e.targets),i=Xt(n,a),s=He(i,r),u=ke;return ke++,G(t,{id:u,children:[],animatables:n,animations:i,duration:s.duration,delay:s.delay,endDelay:s.endDelay})}var P=[],Ue=function(){var e;function t(){!e&&(!Te()||!b.suspendWhenDocumentHidden)&&P.length>0&&(e=requestAnimationFrame(r))}function r(n){for(var i=P.length,s=0;s<i;){var u=P[s];u.paused?(P.splice(s,1),i--):(u.tick(n),s++)}e=s>0?requestAnimationFrame(r):void 0}function a(){b.suspendWhenDocumentHidden&&(Te()?e=cancelAnimationFrame(e):(P.forEach(function(n){return n._onDocumentVisibility()}),Ue()))}return typeof document<"u"&&document.addEventListener("visibilitychange",a),t}();function Te(){return!!document&&document.hidden}function b(e){e===void 0&&(e={});var t=0,r=0,a=0,n,i=0,s=null;function u(g){var v=window.Promise&&new Promise(function(T){return s=T});return g.finished=v,v}var o=er(e);u(o);function m(){var g=o.direction;g!=="alternate"&&(o.direction=g!=="normal"?"normal":"reverse"),o.reversed=!o.reversed,n.forEach(function(v){return v.reversed=o.reversed})}function l(g){return o.reversed?o.duration-g:g}function f(){t=0,r=l(o.currentTime)*(1/b.speed)}function h(g,v){v&&v.seek(g-v.timelineOffset)}function k(g){if(o.reversePlayback)for(var T=i;T--;)h(g,n[T]);else for(var v=0;v<i;v++)h(g,n[v])}function p(g){for(var v=0,T=o.animations,A=T.length;v<A;){var x=T[v],E=x.animatable,$=x.tweens,V=$.length-1,M=$[V];V&&(M=Y($,function(Qe){return g<Qe.end})[0]||M);for(var j=I(g-M.start-M.delay,0,M.duration)/M.duration,Q=isNaN(j)?1:M.easing(j),C=M.to.strings,X=M.round,ee=[],We=M.to.numbers.length,F=void 0,z=0;z<We;z++){var R=void 0,pe=M.to.numbers[z],ye=M.from.numbers[z]||0;M.isPath?R=Wt(M.value,Q*pe,M.isPathTargetInsideSVG):R=ye+Q*(pe-ye),X&&(M.isColor&&z>2||(R=Math.round(R*X)/X)),ee.push(R)}var be=C.length;if(!be)F=ee[0];else{F=C[0];for(var N=0;N<be;N++){C[N];var _e=C[N+1],te=ee[N];isNaN(te)||(_e?F+=te+_e:F+=te+" ")}}Re[x.type](E.target,x.property,F,E.transforms),x.currentValue=F,v++}}function d(g){o[g]&&!o.passThrough&&o[g](o)}function _(){o.remaining&&o.remaining!==!0&&o.remaining--}function w(g){var v=o.duration,T=o.delay,A=v-o.endDelay,x=l(g);o.progress=I(x/v*100,0,100),o.reversePlayback=x<o.currentTime,n&&k(x),!o.began&&o.currentTime>0&&(o.began=!0,d("begin")),!o.loopBegan&&o.currentTime>0&&(o.loopBegan=!0,d("loopBegin")),x<=T&&o.currentTime!==0&&p(0),(x>=A&&o.currentTime!==v||!v)&&p(v),x>T&&x<A?(o.changeBegan||(o.changeBegan=!0,o.changeCompleted=!1,d("changeBegin")),d("change"),p(x)):o.changeBegan&&(o.changeCompleted=!0,o.changeBegan=!1,d("changeComplete")),o.currentTime=I(x,0,v),o.began&&d("update"),g>=v&&(r=0,_(),o.remaining?(t=a,d("loopComplete"),o.loopBegan=!1,o.direction==="alternate"&&m()):(o.paused=!0,o.completed||(o.completed=!0,d("loopComplete"),d("complete"),!o.passThrough&&"Promise"in window&&(s(),u(o)))))}return o.reset=function(){var g=o.direction;o.passThrough=!1,o.currentTime=0,o.progress=0,o.paused=!0,o.began=!1,o.loopBegan=!1,o.changeBegan=!1,o.completed=!1,o.changeCompleted=!1,o.reversePlayback=!1,o.reversed=g==="reverse",o.remaining=o.loop,n=o.children,i=n.length;for(var v=i;v--;)o.children[v].reset();(o.reversed&&o.loop!==!0||g==="alternate"&&o.loop===1)&&o.remaining++,p(o.reversed?o.duration:0)},o._onDocumentVisibility=f,o.set=function(g,v){return Ne(g,v),o},o.tick=function(g){a=g,t||(t=a),w((a+(r-t))*b.speed)},o.seek=function(g){w(l(g))},o.pause=function(){o.paused=!0,f()},o.play=function(){o.paused&&(o.completed&&o.reset(),o.paused=!1,P.push(o),f(),Ue())},o.reverse=function(){m(),o.completed=!o.reversed,f()},o.restart=function(){o.reset(),o.play()},o.remove=function(g){var v=me(g);qe(v,o)},o.reset(),o.autoplay&&o.play(),o}function Ce(e,t){for(var r=t.length;r--;)le(e,t[r].animatable.target)&&t.splice(r,1)}function qe(e,t){var r=t.animations,a=t.children;Ce(e,r);for(var n=a.length;n--;){var i=a[n],s=i.animations;Ce(e,s),!s.length&&!i.children.length&&a.splice(n,1)}!r.length&&!a.length&&t.pause()}function tr(e){for(var t=me(e),r=P.length;r--;){var a=P[r];qe(t,a)}}function rr(e,t){t===void 0&&(t={});var r=t.direction||"normal",a=t.easing?ue(t.easing):null,n=t.grid,i=t.axis,s=t.from||0,u=s==="first",o=s==="center",m=s==="last",l=c.arr(e),f=parseFloat(l?e[0]:e),h=l?parseFloat(e[1]):0,k=D(l?e[1]:e)||0,p=t.start||0+(l?f:0),d=[],_=0;return function(w,g,v){if(u&&(s=0),o&&(s=(v-1)/2),m&&(s=v-1),!d.length){for(var T=0;T<v;T++){if(!n)d.push(Math.abs(s-T));else{var A=o?(n[0]-1)/2:s%n[0],x=o?(n[1]-1)/2:Math.floor(s/n[0]),E=T%n[0],$=Math.floor(T/n[0]),V=A-E,M=x-$,j=Math.sqrt(V*V+M*M);i==="x"&&(j=-V),i==="y"&&(j=-M),d.push(j)}_=Math.max.apply(Math,d)}a&&(d=d.map(function(C){return a(C/_)*_})),r==="reverse"&&(d=d.map(function(C){return i?C<0?C*-1:-C:Math.abs(_-C)}))}var Q=l?(h-f)/_:f;return p+Q*(Math.round(d[g]*100)/100)+k}}function nr(e){e===void 0&&(e={});var t=b(e);return t.duration=0,t.add=function(r,a){var n=P.indexOf(t),i=t.children;n>-1&&P.splice(n,1);function s(h){h.passThrough=!0}for(var u=0;u<i.length;u++)s(i[u]);var o=G(r,ae(se,e));o.targets=o.targets||e.targets;var m=t.duration;o.autoplay=!1,o.direction=t.direction,o.timelineOffset=c.und(a)?m:ge(a,m),s(t),t.seek(o.timelineOffset);var l=b(o);s(l),i.push(l);var f=He(i,e);return t.delay=f.delay,t.endDelay=f.endDelay,t.duration=f.duration,t.seek(0),t.reset(),t.autoplay&&t.play(),t},t}b.version="3.2.1";b.speed=1;b.suspendWhenDocumentHidden=!0;b.running=P;b.remove=tr;b.get=ve;b.set=Ne;b.convertPx=fe;b.path=qt;b.setDashoffset=Ht;b.stagger=rr;b.timeline=nr;b.easing=ue;b.penner=De;b.random=function(e,t){return Math.floor(Math.random()*(t-e+1))+e};const ar={class:"fixed -z-10 top-0 left-0 w-full h-screen overflow-hidden"},or=Xe('<div class="relative top-1/2 left-1/2 transform -translate-y-10"><div class="blob__container absolute transform"><div class="blob w-64 h-64 bg-yellow-300/30 rounded-full filter blur-xl transform -translate-x-1/2 -translate-y-[80%]"></div></div><div class="blob__container absolute transform"><div class="blob w-64 h-64 bg-blue-300/30 rounded-full filter blur-xl transform -translate-x-[80%] -translate-y-[20%]"></div></div><div class="blob__container absolute transform"><div class="blob w-64 h-64 bg-green-300/30 rounded-full filter blur-xl transform -translate-x-[20%] -translate-y-[20%]"></div></div></div>',1),ir=[or],sr=W({__name:"Blob",setup(e){const t=(r,a)=>({get(){return getComputedStyle(r).getPropertyValue(a)},set(n){r.style.setProperty(a,n)}});return ie(()=>{const r=Array.from(document.querySelectorAll(".blob"),n=>Object.defineProperties({},{scaleX:t(n,"--un-scale-x"),scaleY:t(n,"--un-scale-y")})),a=Array.from(document.querySelectorAll(".blob__container"),n=>Object.defineProperties({},{rotate:t(n,"--un-rotate")}));b({targets:r,scaleX:[1.3,1,1.3],scaleY:[1.3,1,1.3],loop:!0,direction:"alternate",autoplay:!0,duration:1e4,delay:b.stagger(500)}),b({targets:a,rotate:"1turn",loop:!0,direction:"alternate",autoplay:!0,duration:2e4,delay:b.stagger(500)})}),(r,a)=>(U(),q("div",ar,ir))}}),ur=Symbol.for("nuxt:client-only"),lr=W({name:"ClientOnly",inheritAttrs:!1,props:["fallback","placeholder","placeholderTag","fallbackTag"],setup(e,{slots:t,attrs:r}){const a=ne(!1);return ie(()=>{a.value=!0}),et(ur,!0),n=>{var o;if(a.value)return(o=t.default)==null?void 0:o.call(t);const i=t.fallback||t.placeholder;if(i)return i();const s=n.fallback||n.placeholder||"",u=n.fallbackTag||n.placeholderTag||"span";return q(u,r,s)}}}),cr=W({name:"CursorFollower",setup(){const e=xe(st()),t=xe({pointer:!1,click:!1}),r=nt(),a=()=>{const n=r==null?void 0:r.vnode.el;n&&!n.hidden&&b({targets:n,translateX:`calc(-45% + ${e.x}px)`,translateY:`calc(-40% + ${e.y}px)`,scale:t.click?"-=0.6":t.pointer?1.6:1,opacity:t.pointer?.5:1,easing:"easeOutQuart",duration:150})};return tt([e,t],()=>a(),{immediate:!0}),ie(()=>{document.body.onmouseover=n=>{if(n.target&&(r!=null&&r.vnode.el)){const i=window.getComputedStyle(n.target).cursor;t.pointer=i==="pointer"}},document.onmousedown=()=>{t.click=!0},document.onmouseup=()=>{t.click=!1}}),()=>rt("div",{class:"pointer-events-none opacity-0 absolute z-49 top-0 left-0 w-20 h-20 bg-blue-300/30 border border-blue-500/20 rounded-full"})}}),fr={class:"min-h-100vh flex flex-col"},dr={class:"grow min-h-screen pb-20vh"},vr={"data-scroll-section":""},gr={"data-scroll":"","data-scroll-speed":"0.1","data-scroll-delay":"0.05",class:"p-8 bg-purple-400 flex flex-col-reverse md:flex-row justify-between items-center"},hr=y("span",{class:"text-blue-50 text-center"}," Copyright © 2024 All rights reserved ",-1),mr=y("div",{class:"text-sm"},null,-1),_r=W({__name:"default",setup(e){const t=/Android|webOS|iPhone|iPad|Mac|Macintosh|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);return(r,a)=>{const n=St,i=sr,s=lr,u=Pe,o=cr;return U(),q("div",fr,[y("nav",null,[B(n)]),y("div",dr,[at(r.$slots,"default")]),B(s,null,{default:L(()=>[B(i)]),_:1}),y("footer",vr,[y("div",gr,[B(u,{to:{name:"index"},class:"hover:underline text-purple-50 flex items-center"},{default:L(()=>[ot(" anhzf.dev ")]),_:1}),hr,mr])]),Z(t)?Ie("",!0):(U(),it(o,{key:0}))])}}});export{_r as default};
