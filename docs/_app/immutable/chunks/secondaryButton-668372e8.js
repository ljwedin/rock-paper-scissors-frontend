import{c as a}from"./singletons-cf9ef3ab.js";import{S as u,i as d,s as h,k as m,q as b,l as f,m as _,r as p,h as i,n as x,b as y,F as g,I as v,u as T,A as c,N as S}from"./index-54148b93.js";a.disable_scroll_handling;const A=a.goto;a.invalidate;a.invalidateAll;a.prefetch;a.prefetch_routes;a.before_navigate;a.after_navigate;function k(n){let t,o,r,l;return{c(){t=m("button"),o=b(n[0]),this.h()},l(e){t=f(e,"BUTTON",{class:!0});var s=_(t);o=p(s,n[0]),s.forEach(i),this.h()},h(){x(t,"class","bg-myGray text-myYellow border border-myYellow p-2 font-medium cursor-pointer w-[250px] hover:bg-myFlax hover:text-myGray hover:border-myFlax")},m(e,s){y(e,t,s),g(t,o),r||(l=v(t,"click",n[1]),r=!0)},p(e,[s]){s&1&&T(o,e[0])},i:c,o:c,d(e){e&&i(t),r=!1,l()}}}function w(n,t,o){let{buttonText:r="placeholder"}=t;function l(e){S.call(this,n,e)}return n.$$set=e=>{"buttonText"in e&&o(0,r=e.buttonText)},[r,l]}class B extends u{constructor(t){super(),d(this,t,w,k,h,{buttonText:0})}}export{B as S,A as g};
