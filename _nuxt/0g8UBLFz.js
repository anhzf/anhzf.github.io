import{H as C,O as B,an as X,Z as Y,X as P,C as j,c as E,o as N,Y as L}from"./Boyw5V-q.js";function U(e){return Y()?(P(e),!0):!1}function y(e){return typeof e=="function"?e():C(e)}const H=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const _=Object.prototype.toString,k=e=>_.call(e)==="[object Object]",D=()=>{};function x(e,n=!1,o="Timeout"){return new Promise((s,a)=>{setTimeout(n?()=>a(o):s,e)})}function O(e,n=!1){function o(t,{flush:u="sync",deep:i=!1,timeout:p,throwOnTimeout:S}={}){let h=null;const b=[new Promise(M=>{h=B(e,w=>{t(w)!==n&&(h==null||h(),M(w))},{flush:u,deep:i,immediate:!0})})];return p!=null&&b.push(x(p,S).then(()=>y(e)).finally(()=>h==null?void 0:h())),Promise.race(b)}function s(t,u){if(!X(t))return o(w=>w===t,u);const{flush:i="sync",deep:p=!1,timeout:S,throwOnTimeout:h}=u??{};let g=null;const M=[new Promise(w=>{g=B([e,t],([r,T])=>{n!==(r===T)&&(g==null||g(),w(r))},{flush:i,deep:p,immediate:!0})})];return S!=null&&M.push(x(S,h).then(()=>y(e)).finally(()=>(g==null||g(),y(e)))),Promise.race(M)}function a(t){return o(u=>!!u,t)}function f(t){return s(null,t)}function d(t){return s(void 0,t)}function v(t){return o(Number.isNaN,t)}function l(t,u){return o(i=>{const p=Array.from(i);return p.includes(t)||p.includes(y(t))},u)}function m(t){return c(1,t)}function c(t=1,u){let i=-1;return o(()=>(i+=1,i>=t),u)}return Array.isArray(y(e))?{toMatch:o,toContains:l,changed:m,changedTimes:c,get not(){return O(e,!n)}}:{toMatch:o,toBe:s,toBeTruthy:a,toBeNull:f,toBeNaN:v,toBeUndefined:d,changed:m,changedTimes:c,get not(){return O(e,!n)}}}function $(e){return O(e)}function G(e){var n;const o=y(e);return(n=o==null?void 0:o.$el)!=null?n:o}const W=H?window:void 0,V=H?window.navigator:void 0;function A(...e){let n,o,s,a;if(typeof e[0]=="string"||Array.isArray(e[0])?([o,s,a]=e,n=W):[n,o,s,a]=e,!n)return D;Array.isArray(o)||(o=[o]),Array.isArray(s)||(s=[s]);const f=[],d=()=>{f.forEach(c=>c()),f.length=0},v=(c,t,u,i)=>(c.addEventListener(t,u,i),()=>c.removeEventListener(t,u,i)),l=B(()=>[G(n),y(a)],([c,t])=>{if(d(),!c)return;const u=k(t)?{...t}:t;f.push(...o.flatMap(i=>s.map(p=>v(c,i,p,u))))},{immediate:!0,flush:"post"}),m=()=>{l(),d()};return U(m),m}function F(){const e=E(!1),n=L();return n&&N(()=>{e.value=!0},n),e}function I(e){const n=F();return j(()=>(n.value,!!e()))}const R={page:e=>[e.pageX,e.pageY],client:e=>[e.clientX,e.clientY],screen:e=>[e.screenX,e.screenY],movement:e=>e instanceof Touch?null:[e.movementX,e.movementY]};function q(e={}){const{type:n="page",touch:o=!0,resetOnTouchEnds:s=!1,initialValue:a={x:0,y:0},window:f=W,target:d=f,scroll:v=!0,eventFilter:l}=e;let m=null;const c=E(a.x),t=E(a.y),u=E(null),i=typeof n=="function"?n:R[n],p=r=>{const T=i(r);m=r,T&&([c.value,t.value]=T,u.value="mouse")},S=r=>{if(r.touches.length>0){const T=i(r.touches[0]);T&&([c.value,t.value]=T,u.value="touch")}},h=()=>{if(!m||!f)return;const r=i(m);m instanceof MouseEvent&&r&&(c.value=r[0]+f.scrollX,t.value=r[1]+f.scrollY)},g=()=>{c.value=a.x,t.value=a.y},b=l?r=>l(()=>p(r),{}):r=>p(r),M=l?r=>l(()=>S(r),{}):r=>S(r),w=l?()=>l(()=>h(),{}):()=>h();if(d){const r={passive:!0};A(d,["mousemove","dragover"],b,r),o&&n!=="movement"&&(A(d,["touchstart","touchmove"],M,r),s&&A(d,"touchend",g,r)),v&&n==="page"&&A(f,"scroll",w,{passive:!0})}return{x:c,y:t,sourceType:u}}function z(e={},n={}){const{navigator:o=V}=n,s=o,a=I(()=>s&&"canShare"in s);return{isSupported:a,share:async(d={})=>{if(a.value){const v={...y(e),...y(d)};let l=!0;if(v.files&&s.canShare&&(l=s.canShare({files:v.files})),l)return s.share(v)}}}}export{$ as a,q as b,z as u};