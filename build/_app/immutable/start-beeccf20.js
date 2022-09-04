var He=Object.defineProperty;var We=(r,e,t)=>e in r?He(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var he=(r,e,t)=>(We(r,typeof e!="symbol"?e+"":e,t),t);import{S as xe,i as Me,s as Xe,a as Ye,e as V,c as Qe,b as G,g as se,t as B,d as oe,f as z,h as J,j as Ze,o as ge,k as et,l as tt,m as rt,n as me,p as N,q as nt,r as at,u as st,v as x,w as ve,x as M,y as X,z as Ne}from"./chunks/index-54148b93.js";import{g as Ce,f as qe,s as F,a as we,b as ot,i as it}from"./chunks/singletons-c1ef4ab4.js";import"./chunks/index-8ec3373f.js";const lt=function(){const e=document.createElement("link").relList;return e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}(),ct=function(r,e){return new URL(r,e).href},Ve={},W=function(e,t,l){return!t||t.length===0?e():Promise.all(t.map(s=>{if(s=ct(s,l),s in Ve)return;Ve[s]=!0;const u=s.endsWith(".css"),n=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${n}`))return;const c=document.createElement("link");if(c.rel=u?"stylesheet":lt,u||(c.as="script",c.crossOrigin=""),c.href=s,document.head.appendChild(c),u)return new Promise((_,h)=>{c.addEventListener("load",_),c.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>e())};class ne{constructor(e,t){he(this,"name","HttpError");he(this,"stack");this.status=e,this.message=t!=null?t:`Error: ${e}`}toString(){return this.message}}class Be{constructor(e,t){this.status=e,this.location=t}}function ft(r,e){return r==="/"||e==="ignore"?r:e==="never"?r.endsWith("/")?r.slice(0,-1):r:e==="always"&&!r.endsWith("/")?r+"/":r}function ut(r){for(const e in r)r[e]=r[e].replace(/%23/g,"#").replace(/%3[Bb]/g,";").replace(/%2[Cc]/g,",").replace(/%2[Ff]/g,"/").replace(/%3[Ff]/g,"?").replace(/%3[Aa]/g,":").replace(/%40/g,"@").replace(/%26/g,"&").replace(/%3[Dd]/g,"=").replace(/%2[Bb]/g,"+").replace(/%24/g,"$");return r}const dt=["href","pathname","search","searchParams","toString","toJSON"];function pt(r,e){const t=new URL(r);for(const l of dt){let s=t[l];Object.defineProperty(t,l,{get(){return e(),s},enumerable:!0,configurable:!0})}return t[Symbol.for("nodejs.util.inspect.custom")]=(l,s,u)=>u(r,s),ht(t),t}function ht(r){Object.defineProperty(r,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}function mt(r){let e=5381,t=r.length;if(typeof r=="string")for(;t;)e=e*33^r.charCodeAt(--t);else for(;t;)e=e*33^r[--t];return(e>>>0).toString(36)}const ke=window.fetch;window.fetch=(r,e)=>{if((r instanceof Request?r.method:(e==null?void 0:e.method)||"GET")!=="GET"){const l=new URL(r instanceof Request?r.url:r.toString(),document.baseURI).href;ae.delete(l)}return ke(r,e)};const ae=new Map;function _t(r,e,t){let s=`script[data-sveltekit-fetched][data-url=${JSON.stringify(typeof r=="string"?r:r.url)}]`;t&&typeof t.body=="string"&&(s+=`[data-hash="${mt(t.body)}"]`);const u=document.querySelector(s);if(u!=null&&u.textContent){const{body:n,...c}=JSON.parse(u.textContent),_=u.getAttribute("data-ttl");return _&&ae.set(e,{body:n,init:c,ttl:1e3*Number(_)}),Promise.resolve(new Response(n,c))}return ke(r,t)}function gt(r,e){const t=ae.get(r);if(t){if(performance.now()<t.ttl)return new Response(t.body,t.init);ae.delete(r)}return ke(r,e)}const wt=/^(\.\.\.)?(\w+)(?:=(\w+))?$/;function yt(r){const e=[],t=[];let l=!0;if(/\]\[/.test(r))throw new Error(`Invalid route ${r} \u2014 parameters must be separated`);if(ze("[",r)!==ze("]",r))throw new Error(`Invalid route ${r} \u2014 brackets are unbalanced`);return{pattern:r===""?/^\/$/:new RegExp(`^${r.split(/(?:\/|$)/).filter(bt).map((u,n,c)=>{const _=decodeURIComponent(u),h=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(_);if(h)return e.push(h[1]),t.push(h[2]),"(?:/(.*))?";const v=n===c.length-1;return _&&"/"+_.split(/\[(.+?)\]/).map(($,S)=>{if(S%2){const K=wt.exec($);if(!K)throw new Error(`Invalid param: ${$}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,j,D,C]=K;return e.push(D),t.push(C),j?"(.*?)":"([^/]+?)"}return v&&$.includes(".")&&(l=!1),$.normalize().replace(/%5[Bb]/g,"[").replace(/%5[Dd]/g,"]").replace(/#/g,"%23").replace(/\?/g,"%3F").replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}).join("")}).join("")}${l?"/?":""}$`),names:e,types:t}}function bt(r){return!/^\([^)]+\)$/.test(r)}function vt(r,e,t,l){const s={};for(let u=0;u<e.length;u+=1){const n=e[u],c=t[u],_=r[u+1]||"";if(c){const h=l[c];if(!h)throw new Error(`Missing "${c}" param matcher`);if(!h(_))return}s[n]=_}return s}function ze(r,e){let t=0;for(let l=0;l<e.length;l+=1)e[l]===r&&(t+=1);return t}function kt(r,e,t,l){const s=new Set(e);return Object.entries(t).map(([c,[_,h,v]])=>{const{pattern:$,names:S,types:K}=yt(c),j={id:c,exec:D=>{const C=$.exec(D);if(C)return vt(C,S,K,l)},errors:[1,...v||[]].map(D=>r[D]),layouts:[0,...h||[]].map(n),leaf:u(_)};return j.errors.length=j.layouts.length=Math.max(j.errors.length,j.layouts.length),j});function u(c){const _=c<0;return _&&(c=~c),[_,r[c]]}function n(c){return c===void 0?c:[s.has(c),r[c]]}}function Et(r,e){return new ne(r,e)}function Rt(r){let e,t,l;var s=r[0][0];function u(n){return{props:{data:n[1],errors:n[3]}}}return s&&(e=new s(u(r))),{c(){e&&x(e.$$.fragment),t=V()},l(n){e&&ve(e.$$.fragment,n),t=V()},m(n,c){e&&M(e,n,c),G(n,t,c),l=!0},p(n,c){const _={};if(c&2&&(_.data=n[1]),c&8&&(_.errors=n[3]),s!==(s=n[0][0])){if(e){se();const h=e;B(h.$$.fragment,1,0,()=>{X(h,1)}),oe()}s?(e=new s(u(n)),x(e.$$.fragment),z(e.$$.fragment,1),M(e,t.parentNode,t)):e=null}else s&&e.$set(_)},i(n){l||(e&&z(e.$$.fragment,n),l=!0)},o(n){e&&B(e.$$.fragment,n),l=!1},d(n){n&&J(t),e&&X(e,n)}}}function St(r){let e,t,l;var s=r[0][0];function u(n){return{props:{data:n[1],errors:n[3],$$slots:{default:[Lt]},$$scope:{ctx:n}}}}return s&&(e=new s(u(r))),{c(){e&&x(e.$$.fragment),t=V()},l(n){e&&ve(e.$$.fragment,n),t=V()},m(n,c){e&&M(e,n,c),G(n,t,c),l=!0},p(n,c){const _={};if(c&2&&(_.data=n[1]),c&8&&(_.errors=n[3]),c&525&&(_.$$scope={dirty:c,ctx:n}),s!==(s=n[0][0])){if(e){se();const h=e;B(h.$$.fragment,1,0,()=>{X(h,1)}),oe()}s?(e=new s(u(n)),x(e.$$.fragment),z(e.$$.fragment,1),M(e,t.parentNode,t)):e=null}else s&&e.$set(_)},i(n){l||(e&&z(e.$$.fragment,n),l=!0)},o(n){e&&B(e.$$.fragment,n),l=!1},d(n){n&&J(t),e&&X(e,n)}}}function Lt(r){let e,t,l;var s=r[0][1];function u(n){return{props:{data:n[2],errors:n[3]}}}return s&&(e=new s(u(r))),{c(){e&&x(e.$$.fragment),t=V()},l(n){e&&ve(e.$$.fragment,n),t=V()},m(n,c){e&&M(e,n,c),G(n,t,c),l=!0},p(n,c){const _={};if(c&4&&(_.data=n[2]),c&8&&(_.errors=n[3]),s!==(s=n[0][1])){if(e){se();const h=e;B(h.$$.fragment,1,0,()=>{X(h,1)}),oe()}s?(e=new s(u(n)),x(e.$$.fragment),z(e.$$.fragment,1),M(e,t.parentNode,t)):e=null}else s&&e.$set(_)},i(n){l||(e&&z(e.$$.fragment,n),l=!0)},o(n){e&&B(e.$$.fragment,n),l=!1},d(n){n&&J(t),e&&X(e,n)}}}function Je(r){let e,t=r[5]&&Ke(r);return{c(){e=et("div"),t&&t.c(),this.h()},l(l){e=tt(l,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var s=rt(e);t&&t.l(s),s.forEach(J),this.h()},h(){me(e,"id","svelte-announcer"),me(e,"aria-live","assertive"),me(e,"aria-atomic","true"),N(e,"position","absolute"),N(e,"left","0"),N(e,"top","0"),N(e,"clip","rect(0 0 0 0)"),N(e,"clip-path","inset(50%)"),N(e,"overflow","hidden"),N(e,"white-space","nowrap"),N(e,"width","1px"),N(e,"height","1px")},m(l,s){G(l,e,s),t&&t.m(e,null)},p(l,s){l[5]?t?t.p(l,s):(t=Ke(l),t.c(),t.m(e,null)):t&&(t.d(1),t=null)},d(l){l&&J(e),t&&t.d()}}}function Ke(r){let e;return{c(){e=nt(r[6])},l(t){e=at(t,r[6])},m(t,l){G(t,e,l)},p(t,l){l&64&&st(e,t[6])},d(t){t&&J(e)}}}function $t(r){let e,t,l,s,u;const n=[St,Rt],c=[];function _(v,$){return v[0][1]?0:1}e=_(r),t=c[e]=n[e](r);let h=r[4]&&Je(r);return{c(){t.c(),l=Ye(),h&&h.c(),s=V()},l(v){t.l(v),l=Qe(v),h&&h.l(v),s=V()},m(v,$){c[e].m(v,$),G(v,l,$),h&&h.m(v,$),G(v,s,$),u=!0},p(v,[$]){let S=e;e=_(v),e===S?c[e].p(v,$):(se(),B(c[S],1,1,()=>{c[S]=null}),oe(),t=c[e],t?t.p(v,$):(t=c[e]=n[e](v),t.c()),z(t,1),t.m(l.parentNode,l)),v[4]?h?h.p(v,$):(h=Je(v),h.c(),h.m(s.parentNode,s)):h&&(h.d(1),h=null)},i(v){u||(z(t),u=!0)},o(v){B(t),u=!1},d(v){c[e].d(v),v&&J(l),h&&h.d(v),v&&J(s)}}}function Pt(r,e,t){let{stores:l}=e,{page:s}=e,{components:u}=e,{data_0:n=null}=e,{data_1:c=null}=e,{errors:_}=e;Ze(l.page.notify);let h=!1,v=!1,$=null;return ge(()=>{const S=l.page.subscribe(()=>{h&&(t(5,v=!0),t(6,$=document.title||"untitled page"))});return t(4,h=!0),S}),r.$$set=S=>{"stores"in S&&t(7,l=S.stores),"page"in S&&t(8,s=S.page),"components"in S&&t(0,u=S.components),"data_0"in S&&t(1,n=S.data_0),"data_1"in S&&t(2,c=S.data_1),"errors"in S&&t(3,_=S.errors)},r.$$.update=()=>{r.$$.dirty&384&&l.page.set(s)},[u,n,c,_,h,v,$,l,s]}class Ot extends xe{constructor(e){super(),Me(this,e,Pt,$t,Xe,{stores:7,page:8,components:0,data_0:1,data_1:2,errors:3})}}const jt={},ie=[()=>W(()=>import("./chunks/0-952a4047.js"),["chunks\\0-952a4047.js","components\\pages\\_layout.svelte-a6e1c44d.js","assets\\_layout-07d4c679.css","chunks\\index-54148b93.js"],import.meta.url),()=>W(()=>import("./chunks/1-19cc4c4b.js"),["chunks\\1-19cc4c4b.js","components\\error.svelte-b0aa1664.js","chunks\\index-54148b93.js","chunks\\singletons-c1ef4ab4.js","chunks\\index-8ec3373f.js"],import.meta.url),()=>W(()=>import("./chunks/2-8d244792.js"),["chunks\\2-8d244792.js","components\\pages\\_page.svelte-d2e5cbb8.js","chunks\\index-54148b93.js","chunks\\secondaryButton-35aa9e06.js","chunks\\singletons-c1ef4ab4.js","chunks\\index-8ec3373f.js","chunks\\primaryButton-daf4cb16.js"],import.meta.url),()=>W(()=>import("./chunks/3-baafb2d1.js"),["chunks\\3-baafb2d1.js","components\\pages\\playGame\\_page.svelte-5c4722d9.js","chunks\\index-54148b93.js","chunks\\primaryButton-daf4cb16.js","chunks\\index-8ec3373f.js","chunks\\secondaryButton-35aa9e06.js","chunks\\singletons-c1ef4ab4.js"],import.meta.url),()=>W(()=>import("./chunks/4-69118a46.js"),["chunks\\4-69118a46.js","components\\pages\\result\\_page.svelte-1bf7ce2a.js","chunks\\index-54148b93.js","chunks\\primaryButton-daf4cb16.js","chunks\\index-8ec3373f.js"],import.meta.url)],It=[],Ut={"":[2],playGame:[3],result:[4]},At="/__data.js",Ge="sveltekit:scroll",q="sveltekit:index",te=kt(ie,It,Ut,jt),ye=ie[0],be=ie[1];ye();be();let Q={};try{Q=JSON.parse(sessionStorage[Ge])}catch{}function _e(r){Q[r]=we()}function Tt({target:r,base:e,trailing_slash:t}){var Ue;const l=[],s={id:null,promise:null},u={before_navigate:[],after_navigate:[]};let n={branch:[],error:null,session_id:0,url:null},c=!1,_=!0,h=!1,v=1,$=null,S=!1,K,j=(Ue=history.state)==null?void 0:Ue[q];j||(j=Date.now(),history.replaceState({...history.state,[q]:j},"",location.href));const D=Q[j];D&&(history.scrollRestoration="manual",scrollTo(D.x,D.y));let C=!1,H,Ee;function Re(){if(!$){const a=new URL(location.href);$=Promise.resolve().then(async()=>{const i=fe(a);await $e(i,a,[]),$=null,S=!1})}return $}async function Se(a,{noscroll:i=!1,replaceState:d=!1,keepfocus:o=!1,state:f={}},w){return typeof a=="string"&&(a=new URL(a,Ce(document))),ue({url:a,scroll:i?we():null,keepfocus:o,redirect_chain:w,details:{state:f,replaceState:d},accepted:()=>{},blocked:()=>{},type:"goto"})}async function Le(a){const i=fe(a);if(!i)throw new Error("Attempted to prefetch a URL that does not belong to this app");return s.promise=je(i),s.id=i.id,s.promise}async function $e(a,i,d,o,f){var R,k;const w=Ee={};let g=a&&await je(a);if(!g&&i.origin===location.origin&&i.pathname===location.pathname&&(g=await ee({status:404,error:new Error(`Not found: ${i.pathname}`),url:i,routeId:null})),!g)return await Y(i),!1;if(i=(a==null?void 0:a.url)||i,Ee!==w)return!1;if(l.length=0,g.type==="redirect")if(d.length>10||d.includes(i.pathname))g=await ee({status:500,error:new Error("Redirect loop"),url:i,routeId:null});else return Se(new URL(g.location,i).href,{},[...d,i.pathname]),!1;else((k=(R=g.props)==null?void 0:R.page)==null?void 0:k.status)>=400&&await F.updated.check()&&await Y(i);if(h=!0,o&&o.details){const{details:b}=o,y=b.replaceState?0:1;b.state[q]=j+=y,history[b.replaceState?"replaceState":"pushState"](b.state,"",i)}if(c?(n=g.state,g.props.page&&(g.props.page.url=i),K.$set(g.props)):Pe(g),o){const{scroll:b,keepfocus:y}=o;if(!y){const E=document.body,U=E.getAttribute("tabindex");E.tabIndex=-1,E.focus({preventScroll:!0}),setTimeout(()=>{var L;(L=getSelection())==null||L.removeAllRanges()}),U!==null?E.setAttribute("tabindex",U):E.removeAttribute("tabindex")}if(await Ne(),_){const E=i.hash&&document.getElementById(i.hash.slice(1));b?scrollTo(b.x,b.y):E?E.scrollIntoView():scrollTo(0,0)}}else await Ne();s.promise=null,s.id=null,_=!0,g.props.page&&(H=g.props.page),f&&f(),h=!1}function Pe(a){var o,f;n=a.state;const i=document.querySelector("style[data-sveltekit]");i&&i.remove(),H=a.props.page,K=new Ot({target:r,props:{...a.props,stores:F},hydrate:!0});const d={from:null,to:re("to",{params:n.params,routeId:(f=(o=n.route)==null?void 0:o.id)!=null?f:null,url:new URL(location.href)}),type:"load"};u.after_navigate.forEach(w=>w(d)),c=!0}async function Z({url:a,params:i,branch:d,status:o,error:f,route:w,validation_errors:g}){var U;const R=d.filter(Boolean),k={type:"loaded",state:{url:a,params:i,branch:d,error:f,route:w,session_id:v},props:{components:R.map(L=>L.node.component),errors:g}};let b={},y=!H;for(let L=0;L<R.length;L+=1){const O=R[L];b={...b,...O.data},(y||!n.branch.some(p=>p===O))&&(k.props[`data_${L}`]=b,y=y||Object.keys((U=O.data)!=null?U:{}).length>0)}if(y||(y=Object.keys(H.data).length!==Object.keys(b).length),!n.url||a.href!==n.url.href||n.error!==f||y){k.props.page={error:f,params:i,routeId:w&&w.id,status:o,url:a,data:y?b:H.data};const L=(O,p)=>{Object.defineProperty(k.props.page,O,{get:()=>{throw new Error(`$page.${O} has been replaced by $page.url.${p}`)}})};L("origin","origin"),L("path","pathname"),L("query","searchParams")}return k}async function le({loader:a,parent:i,url:d,params:o,routeId:f,server_data_node:w}){var b,y,E,U,L;let g=null;const R={dependencies:new Set,params:new Set,parent:!1,url:!1},k=await a();if((b=k.shared)!=null&&b.load){let O=function(...m){for(const P of m){const{href:A}=new URL(P,d);R.dependencies.add(A)}};const p={};for(const m in o)Object.defineProperty(p,m,{get(){return R.params.add(m),o[m]},enumerable:!0});const I={routeId:f,params:p,data:(y=w==null?void 0:w.data)!=null?y:null,url:pt(d,()=>{R.url=!0}),async fetch(m,P){let A;typeof m=="string"?A=m:(A=m.url,P={body:m.method==="GET"||m.method==="HEAD"?void 0:await m.blob(),cache:m.cache,credentials:m.credentials,headers:m.headers,integrity:m.integrity,keepalive:m.keepalive,method:m.method,mode:m.mode,redirect:m.redirect,referrer:m.referrer,referrerPolicy:m.referrerPolicy,signal:m.signal,...P});const T=new URL(A,d).href;return O(T),c?gt(T,P):_t(A,T,P)},setHeaders:()=>{},depends:O,parent(){return R.parent=!0,i()}};Object.defineProperties(I,{props:{get(){throw new Error("@migration task: Replace `props` with `data` stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1},session:{get(){throw new Error("session is no longer available. See https://github.com/sveltejs/kit/discussions/5883")},enumerable:!1},stuff:{get(){throw new Error("@migration task: Remove stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1}}),g=(E=await k.shared.load.call(null,I))!=null?E:null}return{node:k,loader:a,server:w,shared:(U=k.shared)!=null&&U.load?{type:"data",data:g,uses:R}:null,data:(L=g!=null?g:w==null?void 0:w.data)!=null?L:null}}function Oe(a,i,d){if(S)return!0;if(!d)return!1;if(d.parent&&i||a.url&&d.url)return!0;for(const o of a.params)if(d.params.has(o))return!0;for(const o of d.dependencies)if(l.some(f=>f(new URL(o))))return!0;return!1}function ce(a,i){var d,o;return(a==null?void 0:a.type)==="data"?{type:"data",data:a.data,uses:{dependencies:new Set((d=a.uses.dependencies)!=null?d:[]),params:new Set((o=a.uses.params)!=null?o:[]),parent:!!a.uses.parent,url:!!a.uses.url}}:(a==null?void 0:a.type)==="skip"&&i!=null?i:null}async function je({id:a,url:i,params:d,route:o}){if(s.id===a&&s.promise)return s.promise;const{errors:f,layouts:w,leaf:g}=o,R=n.url&&{url:a!==n.url.pathname+n.url.search,params:Object.keys(d).filter(p=>n.params[p]!==d[p])},k=[...w,g];f.forEach(p=>p==null?void 0:p().catch(()=>{})),k.forEach(p=>p==null?void 0:p[1]().catch(()=>{}));let b=null;const y=k.reduce((p,I,m)=>{var T;const P=n.branch[m],A=!!(I!=null&&I[0])&&((P==null?void 0:P.loader)!==I[1]||Oe(R,p.some(Boolean),(T=P.server)==null?void 0:T.uses));return p.push(A),p},[]);if(y.some(Boolean)){try{b=await Fe(i,y)}catch(p){return ee({status:500,error:p,url:i,routeId:o.id})}if(b.type==="redirect")return b}const E=b==null?void 0:b.nodes;let U=!1;const L=k.map(async(p,I)=>{var de,Ae;if(!p)return;const m=n.branch[I],P=(de=E==null?void 0:E[I])!=null?de:null;if((!P||P.type==="skip")&&p[1]===(m==null?void 0:m.loader)&&!Oe(R,U,(Ae=m.shared)==null?void 0:Ae.uses))return m;if(U=!0,(P==null?void 0:P.type)==="error")throw P.httperror?Et(P.httperror.status,P.httperror.message):P.error;return le({loader:p[1],url:i,params:d,routeId:o.id,parent:async()=>{var De;const Te={};for(let pe=0;pe<I;pe+=1)Object.assign(Te,(De=await L[pe])==null?void 0:De.data);return Te},server_data_node:ce(P,m==null?void 0:m.server)})});for(const p of L)p.catch(()=>{});const O=[];for(let p=0;p<k.length;p+=1)if(k[p])try{O.push(await L[p])}catch(I){const m=I;if(m instanceof Be)return{type:"redirect",location:m.location};const P=I instanceof ne?I.status:500;for(;p--;)if(f[p]){let A,T=p;for(;!O[T];)T-=1;try{return A={node:await f[p](),loader:f[p],data:{},server:null,shared:null},await Z({url:i,params:d,branch:O.slice(0,T+1).concat(A),status:P,error:m,route:o})}catch{continue}}await Y(i);return}else O.push(void 0);return await Z({url:i,params:d,branch:O,status:200,error:null,route:o})}async function ee({status:a,error:i,url:d,routeId:o}){var b;const f={},w=await ye();let g=null;if(w.server)try{const y=await Fe(d,[!0]);if(y.type!=="data"||y.nodes[0]&&y.nodes[0].type!=="data")throw 0;g=(b=y.nodes[0])!=null?b:null}catch{await Y(d);return}const R=await le({loader:ye,url:d,params:f,routeId:o,parent:()=>Promise.resolve({}),server_data_node:ce(g)}),k={node:await be(),loader:be,shared:null,server:null,data:null};return await Z({url:d,params:f,branch:[R,k],status:a,error:i,route:null})}function fe(a){if(Ie(a))return;const i=decodeURI(a.pathname.slice(e.length)||"/");for(const d of te){const o=d.exec(i);if(o){const f=new URL(a.origin+ft(a.pathname,t)+a.search+a.hash);return{id:f.pathname+f.search,route:d,params:ut(o),url:f}}}}function Ie(a){return a.origin!==location.origin||!a.pathname.startsWith(e)}async function ue({url:a,scroll:i,keepfocus:d,redirect_chain:o,details:f,type:w,delta:g,accepted:R,blocked:k}){var L,O,p,I;let b=!1;const y=fe(a),E={from:re("from",{params:n.params,routeId:(O=(L=n.route)==null?void 0:L.id)!=null?O:null,url:n.url}),to:re("to",{params:(p=y==null?void 0:y.params)!=null?p:null,routeId:(I=y==null?void 0:y.route.id)!=null?I:null,url:a}),type:w};g!==void 0&&(E.delta=g);const U={...E,cancel:()=>{b=!0}};if(u.before_navigate.forEach(m=>m(U)),b){k();return}_e(j),R(),c&&F.navigating.set(E),await $e(y,a,o,{scroll:i,keepfocus:d,details:f},()=>{u.after_navigate.forEach(m=>m(E)),F.navigating.set(null)})}function Y(a){return location.href=a.href,new Promise(()=>{})}return{after_navigate:a=>{ge(()=>(u.after_navigate.push(a),()=>{const i=u.after_navigate.indexOf(a);u.after_navigate.splice(i,1)}))},before_navigate:a=>{ge(()=>(u.before_navigate.push(a),()=>{const i=u.before_navigate.indexOf(a);u.before_navigate.splice(i,1)}))},disable_scroll_handling:()=>{(h||!c)&&(_=!1)},goto:(a,i={})=>Se(a,i,[]),invalidate:a=>{if(a===void 0)throw new Error("`invalidate()` (with no arguments) has been replaced by `invalidateAll()`");if(typeof a=="function")l.push(a);else{const{href:i}=new URL(a,location.href);l.push(d=>d.href===i)}return Re()},invalidateAll:()=>(S=!0,Re()),prefetch:async a=>{const i=new URL(a,Ce(document));await Le(i)},prefetch_routes:async a=>{const d=(a?te.filter(o=>a.some(f=>o.exec(f))):te).map(o=>Promise.all([...o.layouts,o.leaf].map(f=>f==null?void 0:f[1]())));await Promise.all(d)},_start_router:()=>{history.scrollRestoration="manual",addEventListener("beforeunload",o=>{var g,R;let f=!1;const w={from:re("from",{params:n.params,routeId:(R=(g=n.route)==null?void 0:g.id)!=null?R:null,url:n.url}),to:null,type:"unload",cancel:()=>f=!0};u.before_navigate.forEach(k=>k(w)),f?(o.preventDefault(),o.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){_e(j);try{sessionStorage[Ge]=JSON.stringify(Q)}catch{}}});const a=o=>{const{url:f,options:w}=qe(o);if(f&&w.prefetch){if(Ie(f))return;Le(f)}};let i;const d=o=>{clearTimeout(i),i=setTimeout(()=>{var f;(f=o.target)==null||f.dispatchEvent(new CustomEvent("sveltekit:trigger_prefetch",{bubbles:!0}))},20)};addEventListener("touchstart",a),addEventListener("mousemove",d),addEventListener("sveltekit:trigger_prefetch",a),addEventListener("click",o=>{if(o.button||o.which!==1||o.metaKey||o.ctrlKey||o.shiftKey||o.altKey||o.defaultPrevented)return;const{a:f,url:w,options:g}=qe(o);if(!f||!w)return;const R=f instanceof SVGAElement;if(!R&&!(w.protocol==="https:"||w.protocol==="http:"))return;const k=(f.getAttribute("rel")||"").split(/\s+/);if(f.hasAttribute("download")||k.includes("external")||g.reload||(R?f.target.baseVal:f.target))return;const[b,y]=w.href.split("#");if(y!==void 0&&b===location.href.split("#")[0]){C=!0,_e(j),F.page.set({...H,url:w}),F.page.notify();return}ue({url:w,scroll:g.noscroll?we():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:w.href===location.href},accepted:()=>o.preventDefault(),blocked:()=>o.preventDefault(),type:"link"})}),addEventListener("popstate",o=>{if(o.state){if(o.state[q]===j)return;const f=o.state[q]-j;ue({url:new URL(location.href),scroll:Q[o.state[q]],keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{j=o.state[q]},blocked:()=>{history.go(-f)},type:"popstate",delta:f})}}),addEventListener("hashchange",()=>{C&&(C=!1,history.replaceState({...history.state,[q]:++j},"",location.href))});for(const o of document.querySelectorAll("link"))o.rel==="icon"&&(o.href=o.href);addEventListener("pageshow",o=>{o.persisted&&F.navigating.set(null)})},_hydrate:async({status:a,error:i,node_ids:d,params:o,routeId:f,data:w,errors:g})=>{var b;const R=new URL(location.href);let k;try{const y=d.map(async(E,U)=>{const L=w[U];return le({loader:ie[E],url:R,params:o,routeId:f,parent:async()=>{const O={};for(let p=0;p<U;p+=1)Object.assign(O,(await y[p]).data);return O},server_data_node:ce(L)})});k=await Z({url:R,params:o,branch:await Promise.all(y),status:a,error:i!=null&&i.__is_http_error?new ne(i.status,i.message):i,validation_errors:g,route:(b=te.find(E=>E.id===f))!=null?b:null})}catch(y){const E=y;if(E instanceof Be){await Y(new URL(y.location,location.href));return}k=await ee({status:E instanceof ne?E.status:500,error:E,url:R,routeId:f})}Pe(k)}}}let Dt=1;async function Fe(r,e){const t=new URL(r);t.pathname=r.pathname.replace(/\/$/,"")+At,t.searchParams.set("__invalid",e.map(s=>s?"y":"n").join("")),t.searchParams.set("__id",String(Dt++)),await W(()=>import(t.href),[],import.meta.url);const l=window.__sveltekit_data;return delete window.__sveltekit_data,l}const Nt=["hash","href","host","hostname","origin","pathname","port","protocol","search","searchParams","toString","toJSON"];function re(r,e){for(const t of Nt)Object.defineProperty(e,t,{get(){throw new Error(`The navigation shape changed - ${r}.${t} should now be ${r}.url.${t}`)}});return e}async function zt({env:r,hydrate:e,paths:t,target:l,trailing_slash:s}){ot(t);const u=Tt({target:l,base:t.base,trailing_slash:s});it({client:u}),e?await u._hydrate(e):u.goto(location.href,{replaceState:!0}),u._start_router()}export{zt as start};
