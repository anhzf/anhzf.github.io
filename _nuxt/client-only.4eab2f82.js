import{u as He}from"./index.2daba45a.js";import{b as xe,A as ge,B as Ue,C as X,l as z,D as We,r as Te,i as Ne,E as he}from"./entry.d787de7b.js";var we={update:null,begin:null,loopBegin:null,changeBegin:null,change:null,changeComplete:null,loopComplete:null,complete:null,loop:1,direction:"normal",autoplay:!0,timelineOffset:0},ee={duration:1e3,delay:0,endDelay:0,easing:"easeOutElastic(1, .5)",round:0},qe=["translateX","translateY","translateZ","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","skew","skewX","skewY","perspective","matrix","matrix3d"],H={CSS:{},springs:{}};function I(e,r,n){return Math.min(Math.max(e,r),n)}function $(e,r){return e.indexOf(r)>-1}function K(e,r){return e.apply(null,r)}var c={arr:function(e){return Array.isArray(e)},obj:function(e){return $(Object.prototype.toString.call(e),"Object")},pth:function(e){return c.obj(e)&&e.hasOwnProperty("totalLength")},svg:function(e){return e instanceof SVGElement},inp:function(e){return e instanceof HTMLInputElement},dom:function(e){return e.nodeType||c.svg(e)},str:function(e){return typeof e=="string"},fnc:function(e){return typeof e=="function"},und:function(e){return typeof e>"u"},nil:function(e){return c.und(e)||e===null},hex:function(e){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(e)},rgb:function(e){return/^rgb/.test(e)},hsl:function(e){return/^hsl/.test(e)},col:function(e){return c.hex(e)||c.rgb(e)||c.hsl(e)},key:function(e){return!we.hasOwnProperty(e)&&!ee.hasOwnProperty(e)&&e!=="targets"&&e!=="keyframes"}};function Pe(e){var r=/\(([^)]+)\)/.exec(e);return r?r[1].split(",").map(function(n){return parseFloat(n)}):[]}function Ce(e,r){var n=Pe(e),a=I(c.und(n[0])?1:n[0],.1,100),t=I(c.und(n[1])?100:n[1],.1,100),u=I(c.und(n[2])?10:n[2],.1,100),o=I(c.und(n[3])?0:n[3],.1,100),s=Math.sqrt(t/a),i=u/(2*Math.sqrt(t*a)),p=i<1?s*Math.sqrt(1-i*i):0,f=1,l=i<1?(i*s+-o)/p:-o+s;function h(m){var v=r?r*m/1e3:m;return i<1?v=Math.exp(-v*i*s)*(f*Math.cos(p*v)+l*Math.sin(p*v)):v=(f+l*v)*Math.exp(-v*s),m===0||m===1?m:1-v}function w(){var m=H.springs[e];if(m)return m;for(var v=1/6,b=0,x=0;;)if(b+=v,h(b)===1){if(x++,x>=16)break}else x=0;var g=b*v*1e3;return H.springs[e]=g,g}return r?h:w}function Qe(e){return e===void 0&&(e=10),function(r){return Math.ceil(I(r,1e-6,1)*e)*(1/e)}}var Ze=function(){var e=11,r=1/(e-1);function n(f,l){return 1-3*l+3*f}function a(f,l){return 3*l-6*f}function t(f){return 3*f}function u(f,l,h){return((n(l,h)*f+a(l,h))*f+t(l))*f}function o(f,l,h){return 3*n(l,h)*f*f+2*a(l,h)*f+t(l)}function s(f,l,h,w,m){var v,b,x=0;do b=l+(h-l)/2,v=u(b,w,m)-f,v>0?h=b:l=b;while(Math.abs(v)>1e-7&&++x<10);return b}function i(f,l,h,w){for(var m=0;m<4;++m){var v=o(l,h,w);if(v===0)return l;var b=u(l,h,w)-f;l-=b/v}return l}function p(f,l,h,w){if(!(0<=f&&f<=1&&0<=h&&h<=1))return;var m=new Float32Array(e);if(f!==l||h!==w)for(var v=0;v<e;++v)m[v]=u(v*r,f,h);function b(x){for(var g=0,d=1,P=e-1;d!==P&&m[d]<=x;++d)g+=r;--d;var E=(x-m[d])/(m[d+1]-m[d]),M=g+E*r,F=o(M,f,h);return F>=.001?i(x,M,f,h):F===0?M:s(x,g,g+r,f,h)}return function(x){return f===l&&h===w||x===0||x===1?x:u(b(x),l,w)}}return p}(),ke=function(){var e={linear:function(){return function(a){return a}}},r={Sine:function(){return function(a){return 1-Math.cos(a*Math.PI/2)}},Circ:function(){return function(a){return 1-Math.sqrt(1-a*a)}},Back:function(){return function(a){return a*a*(3*a-2)}},Bounce:function(){return function(a){for(var t,u=4;a<((t=Math.pow(2,--u))-1)/11;);return 1/Math.pow(4,3-u)-7.5625*Math.pow((t*3-2)/22-a,2)}},Elastic:function(a,t){a===void 0&&(a=1),t===void 0&&(t=.5);var u=I(a,1,10),o=I(t,.1,2);return function(s){return s===0||s===1?s:-u*Math.pow(2,10*(s-1))*Math.sin((s-1-o/(Math.PI*2)*Math.asin(1/u))*(Math.PI*2)/o)}}},n=["Quad","Cubic","Quart","Quint","Expo"];return n.forEach(function(a,t){r[a]=function(){return function(u){return Math.pow(u,t+2)}}}),Object.keys(r).forEach(function(a){var t=r[a];e["easeIn"+a]=t,e["easeOut"+a]=function(u,o){return function(s){return 1-t(u,o)(1-s)}},e["easeInOut"+a]=function(u,o){return function(s){return s<.5?t(u,o)(s*2)/2:1-t(u,o)(s*-2+2)/2}},e["easeOutIn"+a]=function(u,o){return function(s){return s<.5?(1-t(u,o)(1-s*2))/2:(t(u,o)(s*2-1)+1)/2}}}),e}();function re(e,r){if(c.fnc(e))return e;var n=e.split("(")[0],a=ke[n],t=Pe(e);switch(n){case"spring":return Ce(e,r);case"cubicBezier":return K(Ze,t);case"steps":return K(Qe,t);default:return K(a,t)}}function Ie(e){try{var r=document.querySelectorAll(e);return r}catch{return}}function U(e,r){for(var n=e.length,a=arguments.length>=2?arguments[1]:void 0,t=[],u=0;u<n;u++)if(u in e){var o=e[u];r.call(a,o,u,e)&&t.push(o)}return t}function W(e){return e.reduce(function(r,n){return r.concat(c.arr(n)?W(n):n)},[])}function pe(e){return c.arr(e)?e:(c.str(e)&&(e=Ie(e)||e),e instanceof NodeList||e instanceof HTMLCollection?[].slice.call(e):[e])}function ne(e,r){return e.some(function(n){return n===r})}function te(e){var r={};for(var n in e)r[n]=e[n];return r}function Y(e,r){var n=te(e);for(var a in e)n[a]=r.hasOwnProperty(a)?r[a]:e[a];return n}function N(e,r){var n=te(e);for(var a in r)n[a]=c.und(e[a])?r[a]:e[a];return n}function Ke(e){var r=/rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(e);return r?"rgba("+r[1]+",1)":e}function Je(e){var r=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,n=e.replace(r,function(s,i,p,f){return i+i+p+p+f+f}),a=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(n),t=parseInt(a[1],16),u=parseInt(a[2],16),o=parseInt(a[3],16);return"rgba("+t+","+u+","+o+",1)"}function Ye(e){var r=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(e)||/hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(e),n=parseInt(r[1],10)/360,a=parseInt(r[2],10)/100,t=parseInt(r[3],10)/100,u=r[4]||1;function o(h,w,m){return m<0&&(m+=1),m>1&&(m-=1),m<1/6?h+(w-h)*6*m:m<1/2?w:m<2/3?h+(w-h)*(2/3-m)*6:h}var s,i,p;if(a==0)s=i=p=t;else{var f=t<.5?t*(1+a):t+a-t*a,l=2*t-f;s=o(l,f,n+1/3),i=o(l,f,n),p=o(l,f,n-1/3)}return"rgba("+s*255+","+i*255+","+p*255+","+u+")"}function Ge(e){if(c.rgb(e))return Ke(e);if(c.hex(e))return Je(e);if(c.hsl(e))return Ye(e)}function D(e){var r=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(e);if(r)return r[1]}function Xe(e){if($(e,"translate")||e==="perspective")return"px";if($(e,"rotate")||$(e,"skew"))return"deg"}function G(e,r){return c.fnc(e)?e(r.target,r.id,r.total):e}function O(e,r){return e.getAttribute(r)}function ae(e,r,n){var a=D(r);if(ne([n,"deg","rad","turn"],a))return r;var t=H.CSS[r+n];if(!c.und(t))return t;var u=100,o=document.createElement(e.tagName),s=e.parentNode&&e.parentNode!==document?e.parentNode:document.body;s.appendChild(o),o.style.position="absolute",o.style.width=u+n;var i=u/o.offsetWidth;s.removeChild(o);var p=i*parseFloat(r);return H.CSS[r+n]=p,p}function Oe(e,r,n){if(r in e.style){var a=r.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),t=e.style[r]||getComputedStyle(e).getPropertyValue(a)||"0";return n?ae(e,t,n):t}}function ie(e,r){if(c.dom(e)&&!c.inp(e)&&(!c.nil(O(e,r))||c.svg(e)&&e[r]))return"attribute";if(c.dom(e)&&ne(qe,r))return"transform";if(c.dom(e)&&r!=="transform"&&Oe(e,r))return"css";if(e[r]!=null)return"object"}function De(e){if(!!c.dom(e)){for(var r=e.style.transform||"",n=/(\w+)\(([^)]*)\)/g,a=new Map,t;t=n.exec(r);)a.set(t[1],t[2]);return a}}function er(e,r,n,a){var t=$(r,"scale")?1:0+Xe(r),u=De(e).get(r)||t;return n&&(n.transforms.list.set(r,u),n.transforms.last=r),a?ae(e,u,a):u}function ue(e,r,n,a){switch(ie(e,r)){case"transform":return er(e,r,a,n);case"css":return Oe(e,r,n);case"attribute":return O(e,r);default:return e[r]||0}}function oe(e,r){var n=/^(\*=|\+=|-=)/.exec(e);if(!n)return e;var a=D(e)||0,t=parseFloat(r),u=parseFloat(e.replace(n[0],""));switch(n[0][0]){case"+":return t+u+a;case"-":return t-u+a;case"*":return t*u+a}}function Ee(e,r){if(c.col(e))return Ge(e);if(/\s/g.test(e))return e;var n=D(e),a=n?e.substr(0,e.length-n.length):e;return r?a+r:a}function se(e,r){return Math.sqrt(Math.pow(r.x-e.x,2)+Math.pow(r.y-e.y,2))}function rr(e){return Math.PI*2*O(e,"r")}function nr(e){return O(e,"width")*2+O(e,"height")*2}function tr(e){return se({x:O(e,"x1"),y:O(e,"y1")},{x:O(e,"x2"),y:O(e,"y2")})}function Fe(e){for(var r=e.points,n=0,a,t=0;t<r.numberOfItems;t++){var u=r.getItem(t);t>0&&(n+=se(a,u)),a=u}return n}function ar(e){var r=e.points;return Fe(e)+se(r.getItem(r.numberOfItems-1),r.getItem(0))}function Se(e){if(e.getTotalLength)return e.getTotalLength();switch(e.tagName.toLowerCase()){case"circle":return rr(e);case"rect":return nr(e);case"line":return tr(e);case"polyline":return Fe(e);case"polygon":return ar(e)}}function ir(e){var r=Se(e);return e.setAttribute("stroke-dasharray",r),r}function ur(e){for(var r=e.parentNode;c.svg(r)&&c.svg(r.parentNode);)r=r.parentNode;return r}function Be(e,r){var n=r||{},a=n.el||ur(e),t=a.getBoundingClientRect(),u=O(a,"viewBox"),o=t.width,s=t.height,i=n.viewBox||(u?u.split(" "):[0,0,o,s]);return{el:a,viewBox:i,x:i[0]/1,y:i[1]/1,w:o,h:s,vW:i[2],vH:i[3]}}function or(e,r){var n=c.str(e)?Ie(e)[0]:e,a=r||100;return function(t){return{property:t,el:n,svg:Be(n),totalLength:Se(n)*(a/100)}}}function sr(e,r,n){function a(f){f===void 0&&(f=0);var l=r+f>=1?r+f:0;return e.el.getPointAtLength(l)}var t=Be(e.el,e.svg),u=a(),o=a(-1),s=a(1),i=n?1:t.w/t.vW,p=n?1:t.h/t.vH;switch(e.property){case"x":return(u.x-t.x)*i;case"y":return(u.y-t.y)*p;case"angle":return Math.atan2(s.y-o.y,s.x-o.x)*180/Math.PI}}function me(e,r){var n=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,a=Ee(c.pth(e)?e.totalLength:e,r)+"";return{original:a,numbers:a.match(n)?a.match(n).map(Number):[0],strings:c.str(e)||r?a.split(n):[]}}function fe(e){var r=e?W(c.arr(e)?e.map(pe):pe(e)):[];return U(r,function(n,a,t){return t.indexOf(n)===a})}function Le(e){var r=fe(e);return r.map(function(n,a){return{target:n,id:a,total:r.length,transforms:{list:De(n)}}})}function fr(e,r){var n=te(r);if(/^spring/.test(n.easing)&&(n.duration=Ce(n.easing)),c.arr(e)){var a=e.length,t=a===2&&!c.obj(e[0]);t?e={value:e}:c.fnc(r.duration)||(n.duration=r.duration/a)}var u=c.arr(e)?e:[e];return u.map(function(o,s){var i=c.obj(o)&&!c.pth(o)?o:{value:o};return c.und(i.delay)&&(i.delay=s?0:r.delay),c.und(i.endDelay)&&(i.endDelay=s===u.length-1?r.endDelay:0),i}).map(function(o){return N(o,n)})}function cr(e){for(var r=U(W(e.map(function(u){return Object.keys(u)})),function(u){return c.key(u)}).reduce(function(u,o){return u.indexOf(o)<0&&u.push(o),u},[]),n={},a=function(u){var o=r[u];n[o]=e.map(function(s){var i={};for(var p in s)c.key(p)?p==o&&(i.value=s[p]):i[p]=s[p];return i})},t=0;t<r.length;t++)a(t);return n}function lr(e,r){var n=[],a=r.keyframes;a&&(r=N(cr(a),r));for(var t in r)c.key(t)&&n.push({name:t,tweens:fr(r[t],e)});return n}function vr(e,r){var n={};for(var a in e){var t=G(e[a],r);c.arr(t)&&(t=t.map(function(u){return G(u,r)}),t.length===1&&(t=t[0])),n[a]=t}return n.duration=parseFloat(n.duration),n.delay=parseFloat(n.delay),n}function dr(e,r){var n;return e.tweens.map(function(a){var t=vr(a,r),u=t.value,o=c.arr(u)?u[1]:u,s=D(o),i=ue(r.target,e.name,s,r),p=n?n.to.original:i,f=c.arr(u)?u[0]:p,l=D(f)||D(i),h=s||l;return c.und(o)&&(o=p),t.from=me(f,h),t.to=me(oe(o,f),h),t.start=n?n.end:0,t.end=t.start+t.delay+t.duration+t.endDelay,t.easing=re(t.easing,t.duration),t.isPath=c.pth(u),t.isPathTargetInsideSVG=t.isPath&&c.svg(r.target),t.isColor=c.col(t.from.original),t.isColor&&(t.round=1),n=t,t})}var Ae={css:function(e,r,n){return e.style[r]=n},attribute:function(e,r,n){return e.setAttribute(r,n)},object:function(e,r,n){return e[r]=n},transform:function(e,r,n,a,t){if(a.list.set(r,n),r===a.last||t){var u="";a.list.forEach(function(o,s){u+=s+"("+o+") "}),e.style.transform=u}}};function _e(e,r){var n=Le(e);n.forEach(function(a){for(var t in r){var u=G(r[t],a),o=a.target,s=D(u),i=ue(o,t,s,a),p=s||D(i),f=oe(Ee(u,p),i),l=ie(o,t);Ae[l](o,t,f,a.transforms,!0)}})}function gr(e,r){var n=ie(e.target,r.name);if(n){var a=dr(r,e),t=a[a.length-1];return{type:n,property:r.name,animatable:e,tweens:a,duration:t.end,delay:a[0].delay,endDelay:t.endDelay}}}function hr(e,r){return U(W(e.map(function(n){return r.map(function(a){return gr(n,a)})})),function(n){return!c.und(n)})}function Ve(e,r){var n=e.length,a=function(u){return u.timelineOffset?u.timelineOffset:0},t={};return t.duration=n?Math.max.apply(Math,e.map(function(u){return a(u)+u.duration})):r.duration,t.delay=n?Math.min.apply(Math,e.map(function(u){return a(u)+u.delay})):r.delay,t.endDelay=n?t.duration-Math.max.apply(Math,e.map(function(u){return a(u)+u.duration-u.endDelay})):r.endDelay,t}var ye=0;function pr(e){var r=Y(we,e),n=Y(ee,e),a=lr(n,e),t=Le(e.targets),u=hr(t,a),o=Ve(u,n),s=ye;return ye++,N(r,{id:s,children:[],animatables:t,animations:u,duration:o.duration,delay:o.delay,endDelay:o.endDelay})}var k=[],je=function(){var e;function r(){!e&&(!be()||!y.suspendWhenDocumentHidden)&&k.length>0&&(e=requestAnimationFrame(n))}function n(t){for(var u=k.length,o=0;o<u;){var s=k[o];s.paused?(k.splice(o,1),u--):(s.tick(t),o++)}e=o>0?requestAnimationFrame(n):void 0}function a(){!y.suspendWhenDocumentHidden||(be()?e=cancelAnimationFrame(e):(k.forEach(function(t){return t._onDocumentVisibility()}),je()))}return typeof document<"u"&&document.addEventListener("visibilitychange",a),r}();function be(){return!!document&&document.hidden}function y(e){e===void 0&&(e={});var r=0,n=0,a=0,t,u=0,o=null;function s(g){var d=window.Promise&&new Promise(function(P){return o=P});return g.finished=d,d}var i=pr(e);s(i);function p(){var g=i.direction;g!=="alternate"&&(i.direction=g!=="normal"?"normal":"reverse"),i.reversed=!i.reversed,t.forEach(function(d){return d.reversed=i.reversed})}function f(g){return i.reversed?i.duration-g:g}function l(){r=0,n=f(i.currentTime)*(1/y.speed)}function h(g,d){d&&d.seek(g-d.timelineOffset)}function w(g){if(i.reversePlayback)for(var P=u;P--;)h(g,t[P]);else for(var d=0;d<u;d++)h(g,t[d])}function m(g){for(var d=0,P=i.animations,E=P.length;d<E;){var M=P[d],F=M.animatable,A=M.tweens,S=A.length-1,T=A[S];S&&(T=U(A,function(Re){return g<Re.end})[0]||T);for(var B=I(g-T.start-T.delay,0,T.duration)/T.duration,R=isNaN(B)?1:T.easing(B),C=T.to.strings,q=T.round,Q=[],$e=T.to.numbers.length,L=void 0,_=0;_<$e;_++){var V=void 0,ce=T.to.numbers[_],le=T.from.numbers[_]||0;T.isPath?V=sr(T.value,R*ce,T.isPathTargetInsideSVG):V=le+R*(ce-le),q&&(T.isColor&&_>2||(V=Math.round(V*q)/q)),Q.push(V)}var ve=C.length;if(!ve)L=Q[0];else{L=C[0];for(var j=0;j<ve;j++){C[j];var de=C[j+1],Z=Q[j];isNaN(Z)||(de?L+=Z+de:L+=Z+" ")}}Ae[M.type](F.target,M.property,L,F.transforms),M.currentValue=L,d++}}function v(g){i[g]&&!i.passThrough&&i[g](i)}function b(){i.remaining&&i.remaining!==!0&&i.remaining--}function x(g){var d=i.duration,P=i.delay,E=d-i.endDelay,M=f(g);i.progress=I(M/d*100,0,100),i.reversePlayback=M<i.currentTime,t&&w(M),!i.began&&i.currentTime>0&&(i.began=!0,v("begin")),!i.loopBegan&&i.currentTime>0&&(i.loopBegan=!0,v("loopBegin")),M<=P&&i.currentTime!==0&&m(0),(M>=E&&i.currentTime!==d||!d)&&m(d),M>P&&M<E?(i.changeBegan||(i.changeBegan=!0,i.changeCompleted=!1,v("changeBegin")),v("change"),m(M)):i.changeBegan&&(i.changeCompleted=!0,i.changeBegan=!1,v("changeComplete")),i.currentTime=I(M,0,d),i.began&&v("update"),g>=d&&(n=0,b(),i.remaining?(r=a,v("loopComplete"),i.loopBegan=!1,i.direction==="alternate"&&p()):(i.paused=!0,i.completed||(i.completed=!0,v("loopComplete"),v("complete"),!i.passThrough&&"Promise"in window&&(o(),s(i)))))}return i.reset=function(){var g=i.direction;i.passThrough=!1,i.currentTime=0,i.progress=0,i.paused=!0,i.began=!1,i.loopBegan=!1,i.changeBegan=!1,i.completed=!1,i.changeCompleted=!1,i.reversePlayback=!1,i.reversed=g==="reverse",i.remaining=i.loop,t=i.children,u=t.length;for(var d=u;d--;)i.children[d].reset();(i.reversed&&i.loop!==!0||g==="alternate"&&i.loop===1)&&i.remaining++,m(i.reversed?i.duration:0)},i._onDocumentVisibility=l,i.set=function(g,d){return _e(g,d),i},i.tick=function(g){a=g,r||(r=a),x((a+(n-r))*y.speed)},i.seek=function(g){x(f(g))},i.pause=function(){i.paused=!0,l()},i.play=function(){!i.paused||(i.completed&&i.reset(),i.paused=!1,k.push(i),l(),je())},i.reverse=function(){p(),i.completed=!i.reversed,l()},i.restart=function(){i.reset(),i.play()},i.remove=function(g){var d=fe(g);ze(d,i)},i.reset(),i.autoplay&&i.play(),i}function Me(e,r){for(var n=r.length;n--;)ne(e,r[n].animatable.target)&&r.splice(n,1)}function ze(e,r){var n=r.animations,a=r.children;Me(e,n);for(var t=a.length;t--;){var u=a[t],o=u.animations;Me(e,o),!o.length&&!u.children.length&&a.splice(t,1)}!n.length&&!a.length&&r.pause()}function mr(e){for(var r=fe(e),n=k.length;n--;){var a=k[n];ze(r,a)}}function yr(e,r){r===void 0&&(r={});var n=r.direction||"normal",a=r.easing?re(r.easing):null,t=r.grid,u=r.axis,o=r.from||0,s=o==="first",i=o==="center",p=o==="last",f=c.arr(e),l=parseFloat(f?e[0]:e),h=f?parseFloat(e[1]):0,w=D(f?e[1]:e)||0,m=r.start||0+(f?l:0),v=[],b=0;return function(x,g,d){if(s&&(o=0),i&&(o=(d-1)/2),p&&(o=d-1),!v.length){for(var P=0;P<d;P++){if(!t)v.push(Math.abs(o-P));else{var E=i?(t[0]-1)/2:o%t[0],M=i?(t[1]-1)/2:Math.floor(o/t[0]),F=P%t[0],A=Math.floor(P/t[0]),S=E-F,T=M-A,B=Math.sqrt(S*S+T*T);u==="x"&&(B=-S),u==="y"&&(B=-T),v.push(B)}b=Math.max.apply(Math,v)}a&&(v=v.map(function(C){return a(C/b)*b})),n==="reverse"&&(v=v.map(function(C){return u?C<0?C*-1:-C:Math.abs(b-C)}))}var R=f?(h-l)/b:l;return m+R*(Math.round(v[g]*100)/100)+w}}function br(e){e===void 0&&(e={});var r=y(e);return r.duration=0,r.add=function(n,a){var t=k.indexOf(r),u=r.children;t>-1&&k.splice(t,1);function o(h){h.passThrough=!0}for(var s=0;s<u.length;s++)o(u[s]);var i=N(n,Y(ee,e));i.targets=i.targets||e.targets;var p=r.duration;i.autoplay=!1,i.direction=r.direction,i.timelineOffset=c.und(a)?p:oe(a,p),o(r),r.seek(i.timelineOffset);var f=y(i);o(f),u.push(f);var l=Ve(u,e);return r.delay=l.delay,r.endDelay=l.endDelay,r.duration=l.duration,r.seek(0),r.reset(),r.autoplay&&r.play(),r},r}y.version="3.2.1";y.speed=1;y.suspendWhenDocumentHidden=!0;y.running=k;y.remove=mr;y.get=ue;y.set=_e;y.convertPx=ae;y.path=or;y.setDashoffset=ir;y.stagger=yr;y.timeline=br;y.easing=re;y.penner=ke;y.random=function(e,r){return Math.floor(Math.random()*(r-e+1))+e};const Pr=xe({name:"CursorFollower",setup(){const e=ge(He()),r=ge({pointer:!1,click:!1}),n=We(),a=()=>{const t=n==null?void 0:n.vnode.el;t&&!t.hidden&&y({targets:t,translateX:`calc(-45% + ${e.x}px)`,translateY:`calc(-40% + ${e.y}px)`,scale:r.click?"-=0.6":r.pointer?1.6:1,opacity:r.pointer?.5:1,easing:"easeOutQuart",duration:150})};return Ue([e,r],()=>a(),{immediate:!0}),X(()=>{document.body.onmouseover=t=>{if(t.target&&(n==null?void 0:n.vnode.el)){const u=window.getComputedStyle(t.target).cursor;r.pointer=u==="pointer"}},document.onmousedown=()=>{r.click=!0},document.onmouseup=()=>{r.click=!1}}),()=>z("div",{class:"pointer-events-none opacity-0 absolute z-49 top-0 left-0 w-20 h-20 bg-blue-300/30 border border-blue-500/20 rounded-full"})}});const Mr=xe({name:"ClientOnly",props:["fallback","placeholder","placeholderTag","fallbackTag"],setup(e,{slots:r}){const n=Te(!1);return X(()=>{n.value=!0}),a=>{var s;if(n.value)return(s=r.default)==null?void 0:s.call(r);const t=r.fallback||r.placeholder;if(t)return t();const u=a.fallback||a.placeholder||"",o=a.fallbackTag||a.placeholderTag||"span";return Ne(o,null,u)}}}),J=new WeakMap;function xr(e){if(J.has(e))return J.get(e);const r={...e};return r.render?r.render=(n,...a)=>{var t;if(n.mounted$){const u=e.render(n,...a);return u.children===null||typeof u.children=="string"?he(u.type,u.props,u.children,u.patchFlag,u.dynamicProps,u.shapeFlag):z(u)}else return z("div",(t=n.$attrs)!=null?t:n._.attrs)}:r.template&&(r.template=`
      <template v-if="mounted$">${e.template}</template>
      <template v-else><div></div></template>
    `),r.setup=(n,a)=>{var u;const t=Te(!1);return X(()=>{t.value=!0}),Promise.resolve(((u=e.setup)==null?void 0:u.call(e,n,a))||{}).then(o=>typeof o!="function"?{...o,mounted$:t}:(...s)=>{if(t.value){const i=o(...s);return i.children===null||typeof i.children=="string"?he(i.type,i.props,i.children,i.patchFlag,i.dynamicProps,i.shapeFlag):z(i)}else return z("div",a.attrs)})},J.set(e,r),r}const Cr=Object.freeze(Object.defineProperty({__proto__:null,default:Mr,createClientOnly:xr},Symbol.toStringTag,{value:"Module"}));export{Pr as C,Mr as _,y as a,Cr as c};