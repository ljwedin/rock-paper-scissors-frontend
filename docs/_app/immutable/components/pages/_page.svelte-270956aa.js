import{S as Z,i as ee,s as te,k as $,l as w,n as y,b as j,H as U,I as ie,A as z,h as _,J as ne,K as le,q as Y,a as N,v as C,m as E,r as R,c as S,w as J,F as p,x as A,L as ae,t as x,d as ce,f as G,y as q,G as Q,g as ue,M as fe}from"../../chunks/index-54148b93.js";import{g as V,S as pe}from"../../chunks/secondaryButton-08675586.js";import{p as D,g as F,P as se}from"../../chunks/primaryButton-daf4cb16.js";import"../../chunks/singletons-30136cef.js";import"../../chunks/index-8ec3373f.js";function me(r){let e,t,n;return{c(){e=$("input"),this.h()},l(l){e=w(l,"INPUT",{class:!0,placeholder:!0}),this.h()},h(){y(e,"class","bg-myGray border border-myYellow p-2 w-[250px] text-myYellow focus:border-myYellow focus:outline-myYellow focus:text-myYellow"),y(e,"placeholder",r[1])},m(l,a){j(l,e,a),U(e,r[0]),t||(n=ie(e,"input",r[2]),t=!0)},p(l,[a]){a&2&&y(e,"placeholder",l[1]),a&1&&e.value!==l[0]&&U(e,l[0])},i:z,o:z,d(l){l&&_(e),t=!1,n()}}}function he(r,e,t){let{value:n=""}=e,{placeholder:l="Placeholder"}=e;function a(){n=this.value,t(0,n)}return r.$$set=o=>{"value"in o&&t(0,n=o.value),"placeholder"in o&&t(1,l=o.placeholder)},[n,l,a]}class re extends Z{constructor(e){super(),ee(this,e,he,me,te,{value:0,placeholder:1})}}function W(r){let e,t;return{c(){e=$("p"),t=Y("Please enter player name"),this.h()},l(n){e=w(n,"P",{class:!0});var l=E(e);t=R(l,"Please enter player name"),l.forEach(_),this.h()},h(){y(e,"class","text-red-400")},m(n,l){j(n,e,l),p(e,t)},d(n){n&&_(e)}}}function _e(r){let e,t,n,l,a,o;function d(c){r[9](c)}let m={placeholder:"Game ID"};return r[4]!==void 0&&(m.value=r[4]),t=new re({props:m}),ne.push(()=>le(t,"value",d)),a=new se({props:{buttonText:"Join game"}}),a.$on("click",r[7]),{c(){e=$("section"),C(t.$$.fragment),l=N(),C(a.$$.fragment),this.h()},l(c){e=w(c,"SECTION",{class:!0});var s=E(e);J(t.$$.fragment,s),l=S(s),J(a.$$.fragment,s),s.forEach(_),this.h()},h(){y(e,"class","flex flex-col justify-center items-center gap-2")},m(c,s){j(c,e,s),A(t,e,null),p(e,l),A(a,e,null),o=!0},p(c,s){const u={};!n&&s&16&&(n=!0,u.value=c[4],ae(()=>n=!1)),t.$set(u)},i(c){o||(G(t.$$.fragment,c),G(a.$$.fragment,c),o=!0)},o(c){x(t.$$.fragment,c),x(a.$$.fragment,c),o=!1},d(c){c&&_(e),q(t),q(a)}}}function de(r){let e,t,n,l,a,o,d,m,c,s=r[1]&&X();return n=new se({props:{buttonText:"Start new game"}}),n.$on("click",r[6]),m=new pe({props:{buttonText:"Enter game ID"}}),m.$on("click",r[5]),{c(){e=$("section"),s&&s.c(),t=N(),C(n.$$.fragment),l=N(),a=$("p"),o=Y("OR"),d=N(),C(m.$$.fragment),this.h()},l(u){e=w(u,"SECTION",{class:!0});var h=E(e);s&&s.l(h),t=S(h),J(n.$$.fragment,h),l=S(h),a=w(h,"P",{class:!0});var i=E(a);o=R(i,"OR"),i.forEach(_),d=S(h),J(m.$$.fragment,h),h.forEach(_),this.h()},h(){y(a,"class","text-myYellow"),y(e,"class","flex flex-col justify-center items-center gap-2")},m(u,h){j(u,e,h),s&&s.m(e,null),p(e,t),A(n,e,null),p(e,l),p(e,a),p(a,o),p(e,d),A(m,e,null),c=!0},p(u,h){u[1]?s||(s=X(),s.c(),s.m(e,t)):s&&(s.d(1),s=null)},i(u){c||(G(n.$$.fragment,u),G(m.$$.fragment,u),c=!0)},o(u){x(n.$$.fragment,u),x(m.$$.fragment,u),c=!1},d(u){u&&_(e),s&&s.d(),q(n),q(m)}}}function X(r){let e,t;return{c(){e=$("p"),t=Y("Game not found"),this.h()},l(n){e=w(n,"P",{class:!0});var l=E(e);t=R(l,"Game not found"),l.forEach(_),this.h()},h(){y(e,"class","text-red-400")},m(n,l){j(n,e,l),p(e,t)},d(n){n&&_(e)}}}function ge(r){let e,t,n,l,a,o,d,m,c,s,u,h,i,b,v,B;function oe(f){r[8](f)}let H={placeholder:"Name"};r[3]!==void 0&&(H.value=r[3]),s=new re({props:H}),ne.push(()=>le(s,"value",oe));let g=r[0]&&W();const L=[de,_e],P=[];function M(f,k){return f[2]?1:0}return b=M(r),v=P[b]=L[b](r),{c(){e=$("main"),t=$("h1"),n=Y("Rock Paper Scissors"),l=N(),a=$("article"),o=$("section"),d=$("p"),m=Y("Enter player name:"),c=N(),C(s.$$.fragment),h=N(),g&&g.c(),i=N(),v.c(),this.h()},l(f){e=w(f,"MAIN",{class:!0});var k=E(e);t=w(k,"H1",{class:!0});var O=E(t);n=R(O,"Rock Paper Scissors"),O.forEach(_),l=S(k),a=w(k,"ARTICLE",{class:!0});var I=E(a);o=w(I,"SECTION",{class:!0});var T=E(o);d=w(T,"P",{class:!0});var K=E(d);m=R(K,"Enter player name:"),K.forEach(_),c=S(T),J(s.$$.fragment,T),h=S(T),g&&g.l(T),T.forEach(_),i=S(I),v.l(I),I.forEach(_),k.forEach(_),this.h()},h(){y(t,"class","font-bold text-[4rem] mt-10 text-myYellow"),y(d,"class","text-myYellow"),y(o,"class","flex flex-col justify-center items-center"),y(a,"class","flex flex-col justify-center items-center gap-10"),y(e,"class","flex flex-col justify-center items-center gap-20")},m(f,k){j(f,e,k),p(e,t),p(t,n),p(e,l),p(e,a),p(a,o),p(o,d),p(d,m),p(o,c),A(s,o,null),p(o,h),g&&g.m(o,null),p(a,i),P[b].m(a,null),B=!0},p(f,[k]){const O={};!u&&k&8&&(u=!0,O.value=f[3],ae(()=>u=!1)),s.$set(O),f[0]?g||(g=W(),g.c(),g.m(o,null)):g&&(g.d(1),g=null);let I=b;b=M(f),b===I?P[b].p(f,k):(ue(),x(P[I],1,1,()=>{P[I]=null}),ce(),v=P[b],v?v.p(f,k):(v=P[b]=L[b](f),v.c()),G(v,1),v.m(a,null))},i(f){B||(G(s.$$.fragment,f),G(v),B=!0)},o(f){x(s.$$.fragment,f),x(v),B=!1},d(f){f&&_(e),q(s),g&&g.d(),P[b].d()}}}function ye(r,e,t){let n,l;Q(r,D,i=>t(3,n=i)),Q(r,F,i=>t(4,l=i));let a=!1,o=!1,d=!1;function m(){t(2,d=!0)}async function c(){if(D)t(0,a=!1),await fetch("https://rps-game-backend.herokuapp.com/newGame",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:n})}).then(i=>i.text()).then(i=>{if(i)fe(F,l=i,l),V("/playGame");else{t(1,o=!0),console.log("Game not found");return}});else{t(0,a=!0);return}}async function s(){if(D)t(0,a=!1),await fetch("https://rps-game-backend.herokuapp.com/"+l+"/join",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:n})}).then(i=>i.text()).then(i=>{console.log(i),i!=="Game already has two players"&&i!=="Name already in use by player one"&&V("/playGame")}).catch(i=>{console.log(i)});else{t(0,a=!0);return}}function u(i){n=i,D.set(n)}function h(i){l=i,F.set(l)}return[a,o,d,n,l,m,c,s,u,h]}class Ee extends Z{constructor(e){super(),ee(this,e,ye,ge,te,{})}}export{Ee as default};