import{S as re,i as ce,s as ie,k as b,l as y,m as w,h,n as k,O as ue,b as z,P as x,I as me,A,Q as _e,q as S,r as I,F as m,u as Q,R as de,J as he,K as pe,a as O,v as U,c as R,w as V,x as W,L as ve,f as M,t as N,d as ee,y as X,G as te,g as le}from"../../../chunks/index-54148b93.js";import{P as ge,p as be,g as ye}from"../../../chunks/primaryButton-daf4cb16.js";import{S as we,g as ke}from"../../../chunks/secondaryButton-668372e8.js";import"../../../chunks/index-8ec3373f.js";import"../../../chunks/singletons-cf9ef3ab.js";function se(o,e,a){const l=o.slice();return l[3]=e[a],l}function ae(o){let e,a=o[3]+"",l,n;return{c(){e=b("option"),l=S(a),this.h()},l(t){e=y(t,"OPTION",{});var s=w(e);l=I(s,a),s.forEach(h),this.h()},h(){e.__value=n=o[3],e.value=e.__value},m(t,s){z(t,e,s),m(e,l)},p(t,s){s&2&&a!==(a=t[3]+"")&&Q(l,a),s&2&&n!==(n=t[3])&&(e.__value=n,e.value=e.__value)},d(t){t&&h(e)}}}function Me(o){let e,a,l,n=o[1],t=[];for(let s=0;s<n.length;s+=1)t[s]=ae(se(o,n,s));return{c(){e=b("select");for(let s=0;s<t.length;s+=1)t[s].c();this.h()},l(s){e=y(s,"SELECT",{placeholder:!0,class:!0});var _=w(e);for(let r=0;r<t.length;r+=1)t[r].l(_);_.forEach(h),this.h()},h(){k(e,"placeholder","test"),k(e,"class","bg-myGray border border-myYellow text-myYellow p-2 w-[250px] focus:border-myYellow focus:outline-myYellow"),o[0]===void 0&&ue(()=>o[2].call(e))},m(s,_){z(s,e,_);for(let r=0;r<t.length;r+=1)t[r].m(e,null);x(e,o[0]),a||(l=me(e,"change",o[2]),a=!0)},p(s,[_]){if(_&2){n=s[1];let r;for(r=0;r<n.length;r+=1){const E=se(s,n,r);t[r]?t[r].p(E,_):(t[r]=ae(E),t[r].c(),t[r].m(e,null))}for(;r<t.length;r+=1)t[r].d(1);t.length=n.length}_&3&&x(e,s[0])},i:A,o:A,d(s){s&&h(e),_e(t,s),a=!1,l()}}}function Ee(o,e,a){let{selectedMove:l=""}=e,{alternatives:n=[]}=e;function t(){l=de(this),a(0,l),a(1,n)}return o.$$set=s=>{"selectedMove"in s&&a(0,l=s.selectedMove),"alternatives"in s&&a(1,n=s.alternatives)},[l,n,t]}class Pe extends re{constructor(e){super(),ce(this,e,Ee,Me,ie,{selectedMove:0,alternatives:1})}}function oe(o){let e,a;return e=new ge({props:{buttonText:"Play your move"}}),e.$on("click",o[5]),{c(){U(e.$$.fragment)},l(l){V(e.$$.fragment,l)},m(l,n){W(e,l,n),a=!0},p:A,i(l){a||(M(e.$$.fragment,l),a=!0)},o(l){N(e.$$.fragment,l),a=!1},d(l){X(e,l)}}}function ne(o){let e,a;return e=new we({props:{buttonText:"See result"}}),e.$on("click",o[6]),{c(){U(e.$$.fragment)},l(l){V(e.$$.fragment,l)},m(l,n){W(e,l,n),a=!0},p:A,i(l){a||(M(e.$$.fragment,l),a=!0)},o(l){N(e.$$.fragment,l),a=!1},d(l){X(e,l)}}}function Se(o){let e,a,l,n,t,s,_,r,E,v,u,G,D,P,T,q,B,g,J,F,L,Y;function fe(c){o[7](c)}let Z={alternatives:o[1]};o[0]!==void 0&&(Z.selectedMove=o[0]),g=new Pe({props:Z}),he.push(()=>pe(g,"selectedMove",fe));let i=o[0]&&oe(o),f=o[2]&&ne(o);return{c(){e=b("main"),a=b("h1"),l=S("Rock Paper Scissors"),n=O(),t=b("article"),s=b("p"),_=S("Game ID: "),r=S(o[4]),E=O(),v=b("p"),u=S("Name: "),G=S(o[3]),D=O(),P=b("selection"),T=b("p"),q=S("Choose your move:"),B=O(),U(g.$$.fragment),F=O(),i&&i.c(),L=O(),f&&f.c(),this.h()},l(c){e=y(c,"MAIN",{class:!0});var d=w(e);a=y(d,"H1",{class:!0});var C=w(a);l=I(C,"Rock Paper Scissors"),C.forEach(h),n=R(d),t=y(d,"ARTICLE",{class:!0});var p=w(t);s=y(p,"P",{class:!0});var H=w(s);_=I(H,"Game ID: "),r=I(H,o[4]),H.forEach(h),E=R(p),v=y(p,"P",{class:!0});var K=w(v);u=I(K,"Name: "),G=I(K,o[3]),K.forEach(h),D=R(p),P=y(p,"SELECTION",{class:!0});var j=w(P);T=y(j,"P",{class:!0});var $=w(T);q=I($,"Choose your move:"),$.forEach(h),B=R(j),V(g.$$.fragment,j),j.forEach(h),F=R(p),i&&i.l(p),L=R(p),f&&f.l(p),p.forEach(h),d.forEach(h),this.h()},h(){k(a,"class","font-bold text-[4rem] mt-10 text-myYellow"),k(s,"class","text-myYellow"),k(v,"class","text-myYellow"),k(T,"class","text-myYellow"),k(P,"class","flex flex-col items-center"),k(t,"class","flex flex-col justify-center items-center gap-10"),k(e,"class","flex flex-col justify-center items-center gap-20")},m(c,d){z(c,e,d),m(e,a),m(a,l),m(e,n),m(e,t),m(t,s),m(s,_),m(s,r),m(t,E),m(t,v),m(v,u),m(v,G),m(t,D),m(t,P),m(P,T),m(T,q),m(P,B),W(g,P,null),m(t,F),i&&i.m(t,null),m(t,L),f&&f.m(t,null),Y=!0},p(c,[d]){(!Y||d&16)&&Q(r,c[4]),(!Y||d&8)&&Q(G,c[3]);const C={};d&2&&(C.alternatives=c[1]),!J&&d&1&&(J=!0,C.selectedMove=c[0],ve(()=>J=!1)),g.$set(C),c[0]?i?(i.p(c,d),d&1&&M(i,1)):(i=oe(c),i.c(),M(i,1),i.m(t,L)):i&&(le(),N(i,1,1,()=>{i=null}),ee()),c[2]?f?(f.p(c,d),d&4&&M(f,1)):(f=ne(c),f.c(),M(f,1),f.m(t,null)):f&&(le(),N(f,1,1,()=>{f=null}),ee())},i(c){Y||(M(g.$$.fragment,c),M(i),M(f),Y=!0)},o(c){N(g.$$.fragment,c),N(i),N(f),Y=!1},d(c){c&&h(e),X(g),i&&i.d(),f&&f.d()}}}function Ie(o,e,a){let l,n;te(o,be,u=>a(3,l=u)),te(o,ye,u=>a(4,n=u));let{selectedMove:t=""}=e,{alternatives:s=["Rock","Paper","Scissors"]}=e,_=!1;async function r(){await fetch("https://rps-game-backend.herokuapp.com/"+n+"/move",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:l,move:t})}).then(u=>u.text()).then(u=>{u==="Move registered"?a(2,_=!0):console.log(u)})}function E(){ke("/result")}function v(u){t=u,a(0,t)}return o.$$set=u=>{"selectedMove"in u&&a(0,t=u.selectedMove),"alternatives"in u&&a(1,s=u.alternatives)},[t,s,_,l,n,r,E,v]}class Re extends re{constructor(e){super(),ce(this,e,Ie,Se,ie,{selectedMove:0,alternatives:1})}}export{Re as default};
