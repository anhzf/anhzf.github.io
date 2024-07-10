var w=Object.defineProperty;var E=(e,t,s)=>t in e?w(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;var m=(e,t,s)=>E(e,typeof t!="symbol"?t+"":t,s);const x={nextjs:{title:"Next.js",icon:"https://nextjs.org/static/favicon/favicon-32x32.png",description:"The React Framework for Production",url:"https://nextjs.org/"},react:{title:"React",icon:"https://reactjs.org/favicon.ico",description:"A JavaScript library for building user interfaces",url:"https://reactjs.org/"},tailwindcss:{title:"Tailwind CSS",icon:"https://tailwindcss.com/favicons/favicon.ico?v=3",description:"A utility-first CSS framework for rapidly building custom designs",url:"https://tailwindcss.com/"},nuxtjs:{title:"Nuxt.js",icon:"/assets/icons/nuxt.svg",description:"The Intuitive Vue Framework",url:"https://nuxtjs.org/"},quasar:{title:"Quasar",icon:"https://raw.githubusercontent.com/quasarframework/quasar-art/master/dist/32/logo.png",description:"Developer-oriented, front-end framework with VueJS components for best-in-class high-performance, responsive websites, PWA, SSR, Mobile and Desktop apps, all from the same codebase. Sensible people choose Vue. Productive people choose Quasar. Be both.",url:"https://quasar.dev/"},firebase:{title:"Firebase",icon:"https://www.gstatic.com/devrel-devsite/prod/vc5df62aff689c916c31b2ac1e49a7e8c5ecada1bb13dcdd68aaefb1e1e9b9ec0/firebase/images/favicon.png",description:"Firebase is a platform developed by Google for creating mobile and web applications",url:"https://firebase.google.com/"},vue:{title:"Vue.js",icon:"https://vuejs.org/logo.svg",description:"The Progressive JavaScript Framework",url:"https://vuejs.org/"},laravel:{title:"Laravel",icon:"https://laravel.com/img/favicon/favicon-32x32.png",description:"The PHP Framework For Web Artisans",url:"https://laravel.com/"},directus:{title:"Directus",icon:"https://directus.io/favicon.ico",description:"Open-Source Data Platform",url:"https://directus.io/"},capacitor:{title:"Capacitor",icon:"https://capacitorjs.com/apple-icon-180x180.png",description:"Build cross-platform Native Progressive Web Apps for iOS, Android, and the Web with web technology",url:"https://capacitorjs.com/"},unocss:{title:"UnoCSS",icon:"https://unocss.dev/favicon.svg",description:"UnoCSS is the instant atomic CSS engine, that is designed to be flexible and extensible. The core is un-opinionated and all the CSS utilities are provided via presets.",url:"https://unocss.dev/"}},P=Object.keys(x);var l;function _(e){return{lang:(e==null?void 0:e.lang)??(l==null?void 0:l.lang),message:e==null?void 0:e.message,abortEarly:(e==null?void 0:e.abortEarly)??(l==null?void 0:l.abortEarly),abortPipeEarly:(e==null?void 0:e.abortPipeEarly)??(l==null?void 0:l.abortPipeEarly)}}var y;function A(e){return y==null?void 0:y.get(e)}var d;function C(e){return d==null?void 0:d.get(e)}var b;function O(e,t){var s;return(s=b==null?void 0:b.get(e))==null?void 0:s.get(t)}function g(e){var s,i;const t=typeof e;return t==="string"?`"${e}"`:t==="number"||t==="bigint"||t==="boolean"?`${e}`:t==="object"||t==="function"?(e&&((i=(s=Object.getPrototypeOf(e))==null?void 0:s.constructor)==null?void 0:i.name))??"null":t}function h(e,t,s,i,r){const o=s.value,a=e.expects??null,c=g(o),n={kind:e.kind,type:e.type,input:o,expected:a,received:c,message:`Invalid ${t}: ${a?`Expected ${a} but r`:"R"}eceived ${c}`,requirement:e.requirement,path:r==null?void 0:r.path,issues:r==null?void 0:r.issues,lang:i.lang,abortEarly:i.abortEarly,abortPipeEarly:i.abortPipeEarly},p=e.kind==="schema",u=e.message??O(e.reference,n.lang)??(p?C(n.lang):null)??i.message??A(n.lang);u&&(n.message=typeof u=="function"?u(n):u),p&&(s.typed=!1),s.issues?s.issues.push(n):s.issues=[n]}var T=class extends Error{constructor(t){super(t[0].message);m(this,"issues");this.name="ValiError",this.issues=t}};function D(e,t,s){return typeof e.default=="function"?e.default(t,s):e.default}function S(e,t){return{kind:"schema",type:"array",reference:S,expects:"Array",async:!1,item:e,message:t,_run(s,i){var o;const r=s.value;if(Array.isArray(r)){s.typed=!0,s.value=[];for(let a=0;a<r.length;a++){const c=r[a],n=this.item._run({typed:!1,value:c},i);if(n.issues){const p={type:"array",origin:"value",input:r,key:a,value:c};for(const u of n.issues)u.path?u.path.unshift(p):u.path=[p],(o=s.issues)==null||o.push(u);if(s.issues||(s.issues=n.issues),i.abortEarly){s.typed=!1;break}}n.typed||(s.typed=!1),s.value.push(n.value)}}else h(this,"type",s,i);return s}}}function v(e,...t){const s={kind:"schema",type:"nullish",reference:v,expects:`${e.expects} | null | undefined`,async:!1,wrapped:e,_run(i,r){return(i.value===null||i.value===void 0)&&("default"in this&&(i.value=D(this,i,r)),i.value===null||i.value===void 0)?(i.typed=!0,i):this.wrapped._run(i,r)}};return 0 in t&&(s.default=t[0]),s}function j(e,t){return{kind:"schema",type:"object",reference:j,expects:"Object",async:!1,entries:e,message:t,_run(s,i){var o;const r=s.value;if(r&&typeof r=="object"){s.typed=!0,s.value={};for(const a in this.entries){const c=r[a],n=this.entries[a]._run({typed:!1,value:c},i);if(n.issues){const p={type:"object",origin:"value",input:r,key:a,value:c};for(const u of n.issues)u.path?u.path.unshift(p):u.path=[p],(o=s.issues)==null||o.push(u);if(s.issues||(s.issues=n.issues),i.abortEarly){s.typed=!1;break}}n.typed||(s.typed=!1),(n.value!==void 0||a in r)&&(s.value[a]=n.value)}}else h(this,"type",s,i);return s}}}function k(e,t){return{kind:"schema",type:"picklist",reference:k,expects:e.map(g).join(" | ")||"never",async:!1,options:e,message:t,_run(s,i){return this.options.includes(s.value)?s.typed=!0:h(this,"type",s,i),s}}}function f(e){return{kind:"schema",type:"string",reference:f,expects:"string",async:!1,message:e,_run(t,s){return typeof t.value=="string"?t.typed=!0:h(this,"type",t,s),t}}}function $(e,t,s){const i=e._run({typed:!1,value:t},_(s));if(i.issues)throw new T(i.issues);return i.value}const q=j({title:f(),path:f(),description:v(f()),thumbnail:f(),technologies:v(S(k(P)),[]),liveUrl:v(f()),demoUrl:v(f()),repositoryUrl:v(f())});export{q as P,x as T,$ as p};