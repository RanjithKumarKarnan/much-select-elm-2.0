const getMuchSelectTemplate = (styleTag) => {
  const templateTag = document.createElement("template");
  templateTag.innerHTML = `
    <div>
      ${styleTag}
      <slot name="select-input"></slot>
      <div id="mount-node"></div>
      <script id="filter-worker" type="javascript/worker">
        !function(n){"use strict";function r(n,r,t){return t.a=n,t.f=r,t}function t(n){return r(2,n,(function(r){return function(t){return n(r,t)}}))}function u(n){return r(3,n,(function(r){return function(t){return function(u){return n(r,t,u)}}}))}function e(n){return r(4,n,(function(r){return function(t){return function(u){return function(e){return n(r,t,u,e)}}}}))}function i(n){return r(5,n,(function(r){return function(t){return function(u){return function(e){return function(i){return n(r,t,u,e,i)}}}}}))}function a(n){return r(7,n,(function(r){return function(t){return function(u){return function(e){return function(i){return function(a){return function(f){return n(r,t,u,e,i,a,f)}}}}}}}))}function f(n){return r(8,n,(function(r){return function(t){return function(u){return function(e){return function(i){return function(a){return function(f){return function(o){return n(r,t,u,e,i,a,f,o)}}}}}}}}))}function o(n,r,t){return 2===n.a?n.f(r,t):n(r)(t)}function c(n,r,t,u){return 3===n.a?n.f(r,t,u):n(r)(t)(u)}function s(n,r,t,u,e){return 4===n.a?n.f(r,t,u,e):n(r)(t)(u)(e)}function b(n,r,t,u,e,i){return 5===n.a?n.f(r,t,u,e,i):n(r)(t)(u)(e)(i)}function v(n,r,t,u,e,i,a,f){return 7===n.a?n.f(r,t,u,e,i,a,f):n(r)(t)(u)(e)(i)(a)(f)}function l(n,r,t,u,e,i,a,f,o){return 8===n.a?n.f(r,t,u,e,i,a,f,o):n(r)(t)(u)(e)(i)(a)(f)(o)}var $=u((function(n,r,t){for(var u=Array(n),e=0;n>e;e++)u[e]=t(r+e);return u})),h=t((function(n,r){for(var t=Array(n),u=0;n>u&&r.b;u++)t[u]=r.a,r=r.b;return t.length=u,O(t,r)}));function d(n){throw Error("https://github.com/elm/core/blob/1.0.0/hints/"+n+".md")}function p(n,r){for(var t,u=[],e=g(n,r,0,u);e&&(t=u.pop());e=g(t.a,t.b,0,u));return e}function g(n,r,t,u){if(n===r)return!0;if("object"!=typeof n||null===n||null===r)return"function"==typeof n&&d(5),!1;if(t>100)return u.push(O(n,r)),!0;for(var e in 0>n.$&&(n=Gn(n),r=Gn(r)),n)if(!g(n[e],r[e],t+1,u))return!1;return!0}function m(n,r,t){if("object"!=typeof n)return n===r?0:r>n?-1:1;if(void 0===n.$)return(t=m(n.a,r.a))||(t=m(n.b,r.b))?t:m(n.c,r.c);for(;n.b&&r.b&&!(t=m(n.a,r.a));n=n.b,r=r.b);return t||(n.b?1:r.b?-1:0)}var y=0;function O(n,r){return{a:n,b:r}}function w(n,r){var t={};for(var u in n)t[u]=n[u];for(var u in r)t[u]=r[u];return t}function k(n,r){if("string"==typeof n)return n+r;if(!n.b)return r;var t=S(n.a,r);n=n.b;for(var u=t;n.b;n=n.b)u=u.b=S(n.a,r);return t}var j={$:0};function S(n,r){return{$:1,a:n,b:r}}var T=t(S);function A(n){for(var r=j,t=n.length;t--;)r=S(n[t],r);return r}function B(n){for(var r=[];n.b;n=n.b)r.push(n.a);return r}var C=u((function(n,r,t){for(var u=[];r.b&&t.b;r=r.b,t=t.b)u.push(o(n,r.a,t.a));return A(u)})),E=t((function(n,r){return n+r}));var I=Math.ceil,R=Math.floor,F=Math.log;var N=t((function(n,r){return n+r}));var L=t((function(n,r){return n+r}));var M=u((function(n,r,t){for(var u=t.length,e=0;u>e;){var i=t[e],a=t.charCodeAt(e);e++,55296>a||a>56319||(i+=t[e],e++),r=o(n,i,r)}return r})),J=u((function(n,r,t){for(var u=t.length;u--;){var e=t[u],i=t.charCodeAt(u);56320>i||i>57343||(e=t[--u]+e),r=o(n,e,r)}return r})),x=t((function(n,r){return r.split(n)})),U=t((function(n,r){return r.join(n)})),D=u((function(n,r,t){return t.slice(n,r)}));var Q=t((function(n,r){for(var t=r.length;t--;){var u=r[t],e=r.charCodeAt(t);if(56320>e||e>57343||(u=r[--t]+u),!n(u))return!1}return!0})),q=t((function(n,r){return r.indexOf(n)>-1})),H=t((function(n,r){var t=n.length;if(1>t)return j;for(var u=0,e=[];(u=r.indexOf(n,u))>-1;)e.push(u),u+=t;return A(e)}));function P(n){return{$:2,b:n}}var _=P((function(n){return"number"!=typeof n?cn("an INT",n):n>-2147483647&&2147483647>n&&(0|n)===n?Kn(n):!isFinite(n)||n%1?cn("an INT",n):Kn(n)})),G=P((function(n){return"boolean"==typeof n?Kn(n):cn("a BOOL",n)})),W=(P((function(n){return"number"==typeof n?Kn(n):cn("a FLOAT",n)})),P((function(n){return Kn(n)}))),X=P((function(n){return"string"==typeof n?Kn(n):n instanceof String?Kn(n+""):cn("a STRING",n)}));var Y=t((function(n,r){return{$:6,d:n,b:r}}));function Z(n,r){return{$:9,f:n,g:r}}var z=t((function(n,r){return{$:10,b:r,h:n}}));var K=t((function(n,r){return Z(n,[r])})),V=u((function(n,r,t){return Z(n,[r,t])})),nn=e((function(n,r,t,u){return Z(n,[r,t,u])})),rn=i((function(n,r,t,u,e){return Z(n,[r,t,u,e])})),tn=f((function(n,r,t,u,e,i,a,f){return Z(n,[r,t,u,e,i,a,f])})),un=t((function(n,r){return en(n,r)}));function en(n,r){switch(n.$){case 2:return n.b(r);case 5:return null===r?Kn(n.c):cn("null",r);case 3:return fn(r)?an(n.b,r,A):cn("a LIST",r);case 4:return fn(r)?an(n.b,r,on):cn("an ARRAY",r);case 6:var t=n.d;if("object"!=typeof r||null===r||!(t in r))return cn("an OBJECT with a field named "+t+"",r);var u=en(n.b,r[t]);return qr(u)?u:Xn(o(Zn,t,u.a));case 7:var e=n.e;if(!fn(r))return cn("an ARRAY",r);if(e>=r.length)return cn("a LONGER array. Need index "+e+" but only see "+r.length+" entries",r);u=en(n.b,r[e]);return qr(u)?u:Xn(o(zn,e,u.a));case 8:if("object"!=typeof r||null===r||fn(r))return cn("an OBJECT",r);var i=j;for(var a in r)if(r.hasOwnProperty(a)){u=en(n.b,r[a]);if(!qr(u))return Xn(o(Zn,a,u.a));i=S(O(a,u.a),i)}return Kn(yr(i));case 9:for(var f=n.f,c=n.g,s=0;c.length>s;s++){u=en(c[s],r);if(!qr(u))return u;f=f(u.a)}return Kn(f);case 10:u=en(n.b,r);return qr(u)?en(n.h(u.a),r):u;case 11:for(var b=j,v=n.g;v.b;v=v.b){u=en(v.a,r);if(qr(u))return u;b=S(u.a,b)}return Xn(Vn(yr(b)));case 1:return Xn(o(Yn,n.a,r));case 0:return Kn(n.a)}}function an(n,r,t){for(var u=r.length,e=Array(u),i=0;u>i;i++){var a=en(n,r[i]);if(!qr(a))return Xn(o(zn,i,a.a));e[i]=a.a}return Kn(t(e))}function fn(n){return Array.isArray(n)||"undefined"!=typeof FileList&&n instanceof FileList}function on(n){return o(Qr,n.length,(function(r){return n[r]}))}function cn(n,r){return Xn(o(Yn,"Expecting "+n,r))}var sn=t((function(n,r){return JSON.stringify(r,null,n)+""}));function bn(n){return n}var vn=u((function(n,r,t){return t[n]=r,t}));function ln(n){return{$:0,a:n}}function $n(n){return{$:2,b:n,c:null}}var hn=t((function(n,r){return{$:3,b:n,d:r}}));var dn=0;function pn(n){var r={$:0,e:dn++,f:n,g:null,h:[]};return On(r),r}function gn(n,r){n.h.push(r),On(n)}var mn=!1,yn=[];function On(n){if(yn.push(n),!mn){for(mn=!0;n=yn.shift();)wn(n);mn=!1}}function wn(n){for(;n.f;){var r=n.f.$;if(0===r||1===r){for(;n.g&&n.g.$!==r;)n.g=n.g.i;if(!n.g)return;n.f=n.g.b(n.f.a),n.g=n.g.i}else{if(2===r)return void(n.f.c=n.f.b((function(r){n.f=r,On(n)})));if(5===r){if(0===n.h.length)return;n.f=n.f.b(n.h.shift())}else n.g={$:3===r?0:1,b:n.f.b,i:n.g},n.f=n.f.d}}}var kn=e((function(n,r,t,u){return function(n,r,t,u,e,i){var a=o(un,n,r?r.flags:void 0);qr(a)||d(2);var f={},c=t(a.a),s=c.a,b=i(l,s),v=function(n,r){var t;for(var u in jn){var e=jn[u];e.a&&((t=t||{})[u]=e.a(u,r)),n[u]=Sn(e,r)}return t}(f,l);function l(n,r){var t=o(u,n,s);b(s=t.a,r),En(f,t.b,e(s))}return En(f,c.b,e(s)),v?{ports:v}:{}}(r,u,n.c_,n.dX,n.dR,(function(){return function(){}}))}));var jn={};function Sn(n,r){var t={g:r,h:void 0},u=n.c,e=n.d,i=n.e,a=n.f;function f(n){return o(hn,f,{$:5,b:function(r){var f=r.a;return 0===r.$?c(e,t,f,n):i&&a?s(u,t,f.i,f.j,n):c(u,t,i?f.i:f.j,n)}})}return t.h=pn(o(hn,f,n.b))}function Tn(n){return function(r){return{$:1,k:n,l:r}}}function An(n){return{$:2,m:n}}var Bn=[],Cn=!1;function En(n,r,t){if(Bn.push({p:n,q:r,r:t}),!Cn){Cn=!0;for(var u;u=Bn.shift();)In(u.p,u.q,u.r);Cn=!1}}function In(n,r,t){var u={};for(var e in Rn(!0,r,u,null),Rn(!1,t,u,null),n)gn(n[e],{$:"fx",a:u[e]||{i:j,j:j}})}function Rn(n,r,t,u){switch(r.$){case 1:var e=r.k,i=function(n,r,t,u){function e(n){for(var r=t;r;r=r.t)n=r.s(n);return n}var i=n?jn[r].e:jn[r].f;return o(i,e,u)}(n,e,u,r.l);return void(t[e]=function(n,r,t){return t=t||{i:j,j:j},n?t.i=S(r,t.i):t.j=S(r,t.j),t}(n,i,t[e]));case 2:for(var a=r.m;a.b;a=a.b)Rn(n,a.a,t,u);return;case 3:return void Rn(n,r.o,t,{s:r.n,t:u})}}function Fn(n){jn[n]&&d(3)}function Nn(n,r){return Fn(n),jn[n]={e:Ln,u:r,a:Mn},Tn(n)}var Ln=t((function(n,r){return r}));function Mn(n){var r,t=[],e=jn[n].u,i=(r=0,$n((function(n){var t=setTimeout((function(){n(ln(y))}),r);return function(){clearTimeout(t)}})));return jn[n].b=i,jn[n].c=u((function(n,r){for(;r.b;r=r.b)for(var u=t,a=e(r.a),f=0;u.length>f;f++)u[f](a);return i})),{subscribe:function(n){t.push(n)},unsubscribe:function(n){var r=(t=t.slice()).indexOf(n);0>r||t.splice(r,1)}}}function Jn(n,r){return Fn(n),jn[n]={f:xn,u:r,a:Un},Tn(n)}var xn=t((function(n,r){return function(t){return n(r(t))}}));function Un(n,r){var t=j,e=jn[n].u,i=ln(null);return jn[n].b=i,jn[n].c=u((function(n,r){return t=r,i})),{send:function(n){var u=o(un,e,n);qr(u)||d(4);for(var i=u.a,a=t;a.b;a=a.b)r(a.a(i))}}}function Dn(n,r){for(var t in r)t in n?"init"==t?d(6):Dn(n[t],r[t]):n[t]=r[t]}var Qn,qn=t((function(n,r){var t="g";n.dg&&(t+="m"),n.cB&&(t+="i");try{return rr(RegExp(r,t))}catch(n){return tr}})),Hn=e((function(n,r,t,u){var e=0;return u.replace(r,(function(r){if(e++>=n)return r;for(var u=arguments.length-3,i=Array(u);u>0;){var a=arguments[u];i[--u]=a?rr(a):tr}return t(s(Wt,r,arguments[arguments.length-2],e,A(i)))}))})),Pn=T,_n=u((function(n,r,t){for(;;){if(-2===t.$)return r;var u=t.d,e=n,i=c(n,t.b,t.c,c(_n,n,r,t.e));n=e,r=i,t=u}})),Gn=function(n){return c(_n,u((function(n,r,t){return o(Pn,O(n,r),t)})),j,n)},Wn=function(n){return{$:0,a:n}},Xn=function(n){return{$:1,a:n}},Yn=t((function(n,r){return{$:3,a:n,b:r}})),Zn=t((function(n,r){return{$:0,a:n,b:r}})),zn=t((function(n,r){return{$:1,a:n,b:r}})),Kn=function(n){return{$:0,a:n}},Vn=function(n){return{$:2,a:n}},nr=E,rr=function(n){return{$:0,a:n}},tr={$:1},ur=Q,er=sn,ir=function(n){return n+""},ar=t((function(n,r){return o(U,n,B(r))})),fr=t((function(n,r){return A(o(x,n,r))})),or=function(n){return o(ar,"\\n    ",o(fr,"\\n",n))},cr=u((function(n,r,t){for(;;){if(!t.b)return r;var u=t.b,e=n,i=o(n,t.a,r);n=e,r=i,t=u}})),sr=function(n){return c(cr,t((function(n,r){return r+1})),0,n)},br=C,vr=u((function(n,r,t){for(;;){if(m(n,r)>=1)return t;var u=n,e=r-1,i=o(Pn,r,t);n=u,r=e,t=i}})),lr=t((function(n,r){return c(vr,n,r,j)})),$r=t((function(n,r){return c(br,n,o(lr,0,sr(r)-1),r)})),hr=function(n){var r=n.charCodeAt(0);return 55296>r||r>56319?r:1024*(r-55296)+n.charCodeAt(1)-56320+65536},dr=function(n){var r=hr(n);return r>=97&&122>=r},pr=function(n){var r=hr(n);return 90>=r&&r>=65},gr=function(n){return dr(n)||pr(n)},mr=function(n){return dr(n)||pr(n)||function(n){var r=hr(n);return 57>=r&&r>=48}(n)},yr=function(n){return c(cr,Pn,j,n)},Or=function(n){var r=n.charCodeAt(0);return isNaN(r)?tr:rr(55296>r||r>56319?O(n[0],n.slice(1)):O(n[0]+n[1],n.slice(2)))},wr=t((function(n,r){return"\\n\\n("+ir(n+1)+") "+or(kr(r))})),kr=function(n){return o(jr,n,j)},jr=t((function(n,r){n:for(;;)switch(n.$){case 0:var t=n.a,u=n.b,e=function(){var n=Or(t);if(1===n.$)return!1;var r=n.a,u=r.b;return gr(r.a)&&o(ur,mr,u)}();n=u,r=o(Pn,e?"."+t:"['"+t+"']",r);continue n;case 1:u=n.b;var i="["+ir(n.a)+"]";n=u,r=o(Pn,i,r);continue n;case 2:var a=n.a;if(a.b){if(a.b.b){var f=(r.b?"The Json.Decode.oneOf at json"+o(ar,"",yr(r)):"Json.Decode.oneOf")+" failed in the following "+ir(sr(a))+" ways:";return o(ar,"\\n\\n",o(Pn,f,o($r,wr,a)))}n=u=a.a,r=r;continue n}return"Ran into a Json.Decode.oneOf with no possibilities"+(r.b?" at json"+o(ar,"",yr(r)):"!");default:var c=n.a,s=n.b;return(f=r.b?"Problem with the value at json"+o(ar,"",yr(r))+":\\n\\n    ":"Problem with the given value:\\n\\n")+(or(o(er,4,s))+"\\n\\n")+c}})),Sr=32,Tr=e((function(n,r,t,u){return{$:0,a:n,b:r,c:t,d:u}})),Ar=[],Br=I,Cr=t((function(n,r){return F(r)/F(n)})),Er=Br(o(Cr,2,Sr)),Ir=s(Tr,0,Er,Ar,Ar),Rr=$,Fr=R,Nr=function(n){return n.length},Lr=t((function(n,r){return m(n,r)>0?n:r})),Mr=h,Jr=t((function(n,r){for(;;){var t=o(Mr,Sr,n),u=t.b,e=o(Pn,{$:0,a:t.a},r);if(!u.b)return yr(e);n=u,r=e}})),xr=t((function(n,r){for(;;){var t=Br(r/Sr);if(1===t)return o(Mr,Sr,n).a;n=o(Jr,n,j),r=t}})),Ur=t((function(n,r){if(r.j){var t=r.j*Sr,u=Fr(o(Cr,Sr,t-1)),e=n?yr(r.l):r.l,i=o(xr,e,r.j);return s(Tr,Nr(r.k)+t,o(Lr,5,u*Er),i,r.k)}return s(Tr,Nr(r.k),Er,Ar,r.k)})),Dr=i((function(n,r,t,u,e){for(;;){if(0>r)return o(Ur,!1,{l:u,j:t/Sr|0,k:e});var i={$:1,a:c(Rr,Sr,r,n)};n=n,r=r-Sr,t=t,u=o(Pn,i,u),e=e}})),Qr=t((function(n,r){if(n>0){var t=n%Sr;return b(Dr,r,n-t-Sr,n,j,c(Rr,t,n-t,r))}return Ir})),qr=function(n){return!n.$},Hr=An,Pr=Hr(j),_r=function(n){return{$:0,a:n}},Gr=function(n){return{$:1,a:n}},Wr=An,Xr=W,Yr=Jn("receiveOptions",Xr),Zr=Jn("receiveSearchString",Xr),zr=function(n){return{$:0,a:n}},Kr=e((function(n,r,t,u){return{cE:u,dH:t,dI:n,dJ:r}})),Vr=G,nt=t((function(n,r){return{$:0,a:n,b:r}})),rt=V,tt=X,ut=c(rt,nt,tt,zr(!0)),et={$:1},it=z,at=function(n){return{$:1,a:n}},ft=_,ot=function(n){return n},ct=function(n){return 0>n?tr:rr(n)},st=o(it,(function(n){return zr(n?{$:0,a:n}:et)}),o(it,(function(n){var r=ct(n);return r.$?at("This is not a positive int "+ir(n)):zr(r.a)}),ft)),bt=Y,vt=b(rn,Kr,o(bt,"searchString",ut),o(bt,"searchStringMinimumLength",st),o(bt,"searchNonce",ft),o(bt,"isClearingSearch",Vr)),lt=un,$t=function(n){return{$:1,a:n}},ht=function(n){return{$:1,a:n}},dt=function(n){return{$:2,a:n}},pt=t((function(n,r){return{$:0,a:n,b:r}})),gt=t((function(n,r){return{$:2,a:n,b:r}})),mt=function(n){return{$:0,a:n}},yt=function(n){return{$:11,g:n}},Ot=function(n){return yt(A([o(it,(function(r){return"true"===r?zr(o(gt,0,n)):at("Option is not selected")}),o(bt,"selected",tt)),o(it,(function(r){return zr(r?o(gt,0,n):mt(n))}),o(bt,"selected",Vr)),o(it,(function(r){return r?zr({$:8,a:n}):at("Option is not disabled")}),o(bt,"disabled",Vr)),zr(mt(n))]))},wt={$:1},kt=function(n){return n.trim()},jt=o(it,(function(n){var r=kt(n);return zr(""===r?wt:{$:0,a:r})}),tt),St=c(rt,pt,Ot(1),o(bt,"value",jt)),Tt=function(n){return{$:0,a:n}},At=function(n){return{$:2,a:n}},Bt=t((function(n,r){return{$:2,a:n,b:r}})),Ct=u((function(n,r,t){return{$:0,a:n,b:r,c:t}})),Et=nn,It=K,Rt=function(n){return{$:5,c:n}},Ft=function(n){return yt(A([Rt(tr),o(It,rr,n)]))},Nt={$:2},Lt=yt(A([o(it,(function(n){var r=ct(n);return r.$?at("The index must be a positive number."):zr({$:0,a:r.a})}),o(bt,"index",ft)),o(it,(function(n){var r=ct(n);return r.$?at("The weight must be a positive number."):zr({$:1,a:r.a})}),o(bt,"weight",ft)),zr(Nt)])),Mt=s(Et,Ct,o(bt,"label",tt),o(bt,"labelClean",Ft(tt)),Lt),Jt=a((function(n,r,t,u,e,i,a){return{$:0,a:n,b:r,c:t,d:u,e:e,f:i,g:a}})),xt={$:1},Ut=yt(A([c(rt,t((function(n,r){return{$:0,a:n,b:r}})),o(bt,"description",tt),o(bt,"descriptionClean",Ft(tt))),zr(xt)])),Dt={$:1},Qt=function(n){return{$:0,a:n}},qt=yt(A([o(It,Qt,o(bt,"group",tt)),zr(Dt)])),Ht=tn,Pt=t((function(n){return n})),_t=L,Gt=u((function(n,r,t){return r(n(t))})),Wt=e((function(n,r,t,u){return{cZ:r,c7:n,dr:t,dQ:u}})),Xt=qn,Yt=function(n){return o(Xt,{cB:!1,dg:!1},n)},Zt=/.^/,zt=t((function(n,r){return r.$?n:r.a})),Kt=o(Gt,Yt,zt(Zt)),Vt=Hn(Infinity),nu=function(n){return n.toLowerCase()},ru=function(n){return nu(c(Vt,Kt("[_-\\\\s]+"),Pt("-"),c(Vt,Kt("([A-Z])"),o(Gt,(function(n){return n.c7}),_t("-")),kt(n))))},tu=o(it,(function(n){var r,t=""===ru(kt(r=n))?tr:rr(r);return 1===t.$?at("The value is empty so we are unable to make a part of the value"):zr(t.a)}),tt),uu=function(n){return l(Ht,Jt,Ot(n),Mt,o(bt,"value",jt),Ut,qt,o(bt,"value",tu),zr(tr))},eu=o(it,(function(n){return p(n,ru(n))?zr(n):at("Invalid option part: "+n)}),tt),iu=function(n){return l(Ht,Jt,Ot(n),Mt,o(bt,"value",jt),Ut,qt,o(bt,"part",eu),zr(tr))},au=function(n){return yt(A([(r=n,o(it,(function(n){return n.$?c(rt,Bt,Ot(r),Mt):at("It can not be an option without a value because it has a value.")}),o(bt,"value",jt))),iu(n),uu(n)]));var r},fu=u((function(n,r,t){return{$:0,a:n,b:r,c:t}})),ou=o(It,ot,tt),cu=t((function(n,r){return r?o(It,$t,St):yt(A([o(It,Tt,au(n)),o(It,At,(t=n,s(Et,fu,Ot(t),o(bt,"value",jt),o(bt,"slot",ou))))]));var t})),su=t((function(n,r){for(;;){if(!r.b)return!1;var t=r.b;if(n(r.a))return!0;n=n,r=t}})),bu=u((function(n,r,t){return n(r(t))})),vu=function(n){return!n},lu=t((function(n,r){return!o(su,o(bu,vu,n),r)})),$u=function(n){return function(n){return o(lu,(function(n){return!n.$}),n)}(n)?Kn(Wn(j)):function(n){return o(lu,(function(n){return 1===n.$}),n)}(n)?Kn(ht(j)):function(n){return o(lu,(function(n){return 2===n.$}),n)}(n)?Kn(dt(j)):Xn("The list of options must be all FancyOptions, all DatalistOptions, or all SlottedOptions")},hu=function(n){return{$:3,b:n}},du=t((function(n,r){return r?o(It,ht,hu(o(It,$t,St))):o(it,(function(n){var r=$u(n);if(r.$)return at(r.a);switch(r.a.$){case 0:return zr(Wn(n));case 1:return at("If the output style is Custom HTML the list of options must FancyOptionList or SlottedOptionList");default:return zr(dt(n))}}),hu(o(cu,n,r)))})),pu=bn,gu=function(n){return c(cr,t((function(n,r){return c(vn,n.a,n.b,r)})),{},n)},mu=bn,yu=function(n){var r=n.b;return gu(A([O("isHighlighted",pu(n.a)),O("stringChunk",mu(r))]))},Ou=t((function(n,r){return c(cr,function(n){return t((function(r,t){return t.push(n(r)),t}))}(n),[],r)})),wu=function(n){return o(Ou,yu,n)},ku=bn,ju=function(n){return 0===n.$?function(n){return 0===n.$?n.g:tr}(n.a):tr},Su=function(n){switch(n.$){case 0:return function(n){switch(n.$){case 0:case 1:return n.c;default:return wt}}(n.a);case 1:return function(n){return n.b}(n.a);default:return function(n){return n.b}(n.a)}},Tu=function(n){var r=Su(n);return r.$?"":r.a},Au=function(n){return gu(A([O("value",mu(Tu(n))),O("searchFilter",(t=ju(n),t.$?null:(r=t.a,gu(A([O("totalScore",ku(r.bq)),O("bestScore",ku(r.cy)),O("labelTokens",wu(r.c4)),O("descriptionTokens",wu(r.cJ)),O("groupTokens",wu(r.a8))])))))]));var r,t},Bu=function(n){return n.a},Cu=u((function(n,r,t){return gu(A([O("searchNonce",ku(r)),O("clearingSearch",pu(t)),O("options",o(Ou,Au,Bu(n)))]))})),Eu=e((function(n,r,t,u){if(u.b){var e=u.a,i=u.b;if(i.b){var a=i.a,f=i.b;if(f.b){var b=f.a,v=f.b;if(v.b){var l=v.b;return o(n,e,o(n,a,o(n,b,o(n,v.a,t>500?c(cr,n,r,yr(l)):s(Eu,n,r,t+1,l)))))}return o(n,e,o(n,a,o(n,b,r)))}return o(n,e,o(n,a,r))}return o(n,e,r)}return r})),Iu=u((function(n,r,t){return s(Eu,n,r,0,t)})),Ru=t((function(n,r){return c(Iu,t((function(r,t){return n(r)?o(Pn,r,t):t})),j,r)})),Fu=t((function(n,r){switch(r.$){case 0:return Wn(o(Ru,n,r.a));case 1:return ht(o(Ru,n,r.a));default:return dt(o(Ru,n,r.a))}})),Nu=1e6,Lu=function(n){return 0===n.$&&function(n){switch(n.$){case 0:default:return!1;case 1:return!0}}(n.a)},Mu=t((function(n,r){return c(Iu,t((function(r,t){return o(Pn,n(r),t)})),j,r)})),Ju=o(Iu,t((function(n,r){return n.$?r:o(Pn,n.a,r)})),j),xu=function(n){var r=c(cr,t((function(n,r){return 0>m(n,r)?n:r})),Nu,function(n){return o(Mu,(function(n){return n.cy}),Ju(o(Mu,ju,Bu(n))))}(o(Fu,(function(n){return!Lu(n)}),n)));return p(r,Nu)?tr:rr(r)},Uu=t((function(n,r){var t=ju(r);return!t.$&&m(n,t.a.cy)>-1})),Du=function(n){var r=xu(n);if(r.$)return n;var t=r.a;return o(Fu,(function(n){return o(Uu,(r=t)?r>10?r>100?r>1e3?Nu:1e4:1e3:100:51,n)||Lu(n);var r}),n)},Qu=Nn("sendErrorMessage",mu),qu=Nn("sendSearchResults",ot),Hu=u((function(n,r,t){n:for(;;){if(n>0){if(r.b){var u=r.a;n=n-1,r=r.b,t=o(Pn,u,t);continue n}return t}return t}})),Pu=t((function(n,r){return yr(c(Hu,n,r,j))})),_u=u((function(n,r,t){if(r>0){var u=O(r,t);n:for(;;){r:for(;;){if(!u.b.b)return t;if(!u.b.b.b){if(1===u.a)break n;break r}switch(u.a){case 1:break n;case 2:var e=u.b;return A([e.a,e.b.a]);case 3:if(u.b.b.b.b){var i=u.b,a=i.b;return A([i.a,a.a,a.b.a])}break r;default:if(u.b.b.b.b&&u.b.b.b.b.b){var f=u.b,s=f.b,b=s.b,v=b.b,l=v.a,$=v.b;return o(Pn,f.a,o(Pn,s.a,o(Pn,b.a,o(Pn,l,n>1e3?o(Pu,r-4,$):c(_u,n+1,r-4,$)))))}break r}}return t}return A([u.b.a])}return j})),Gu=t((function(n,r){return c(_u,0,n,r)})),Wu=t((function(n,r){switch(r.$){case 0:return Wn(o(Gu,n,r.a));case 1:return ht(o(Gu,n,r.a));default:return dt(o(Gu,n,r.a))}})),Xu=function(n){return n.length},Yu=t((function(n,r){return 1>m(n,r)})),Zu=t((function(n,r){switch(r.$){case 0:return Wn(o(Mu,n,r.a));case 1:return ht(o(Mu,n,r.a));default:return dt(o(Mu,n,r.a))}})),zu=e((function(n,r,t,u){return{$:1,a:n,b:r,c:t,d:u}})),Ku=t((function(n,r){switch(r.$){case 0:return v(Jt,r.a,r.b,r.c,r.d,r.e,r.f,n);case 1:return s(zu,r.a,r.b,r.c,n);default:return r}})),Vu=t((function(n,r){return 0===r.$?Tt(o(Ku,n,r.a)):r})),ne=q,re=function(n){return 5>n?5:Fr(1.25*n)},te=xt,ue=function(n){return 0===n.$?function(n){return 0===n.$?n.d:te}(n.a):te},ee=function(n){return""===n?Dt:Qt(n)},ie=function(n){return 0===n.$?function(n){return 0===n.$?n.e:Dt}(n.a):ee("")},ae=function(n){return c(Ct,n,tr,Nt)},fe=function(n){switch(n.$){case 0:return function(n){return n.b}(n.a);case 1:return function(n){return ae((r=n.b,r.$?"":r.a));var r}(n.a);default:return ae("")}},oe=function(n){return 10>n?10:Fr(1.5*n)},ce=t((function(n,r){return 0>m(n,r)?n:r})),se=i((function(n,r,t,u,e){return{cy:r,cJ:u,a8:e,c4:t,bq:n}})),be=function(n){var r=n.b;return r.$?nu(n.a):r.a},ve=e((function(n,r,t,u){return{c2:u,i:t,ds:r,ai:n}})),le=t((function(n,r){return{c8:r,ai:n}})),$e=s(e((function(n,r,t,u){return{aF:n,aO:u,aQ:r,aU:t}})),10,1e3,1e4,1),he=H,de=D,pe=t((function(n,r){for(;;){if(!n.b)return r;var u=n.a;n=n.b,r=c(cr,t((function(n,r){return k(r,(e=n,i=Xu(u),a=t((function(n,r){var t=r.a,u=r.b,a=A([c(de,n,n+i,e)]),f=p(t,n)?j:A([c(de,t,n,e)]);return O(n+i,k(u,k(f,a)))})),f=o(he,u,e),s=c(cr,a,O(0,j),f),b=s.a,v=s.b,l=Xu(e),k(v,p(b,l)?j:A([c(de,b,l,e)]))));var e,i,a,f,s,b,v,l})),j,r)}})),ge=M,me=N,ye=function(n){return o(me,n,"")},Oe=function(n){if(n.b){return rr(n.a)}return tr},we=j,ke=t((function(n,r){return o(su,(function(r){return p(r,n)}),r)})),je=function(n){return!n.b},Se=t((function(n,r){return c(Iu,t((function(r,t){var u=t.a,e=t.b;return n(r)?O(o(Pn,r,u),e):O(u,o(Pn,r,e))})),O(j,j),r)})),Te=function(n){if(n.b){var r=n.a,t=o(Se,(function(n){return 0>m(n,r)}),n.b),u=Te(t.a),e=je(u.b)?0:1,i=Te(t.b);return O(u.a+e+i.a,k(u.b,k(A([r]),i.b)))}return O(0,j)},Ae=u((function(n,r,u){var e=t((function(n,r){if(r.a.$){u=r.b;return O(rr(n),u)}var t=r.a.a,u=r.b;return O(rr(n),n-1-t+u)})),i=c(ge,t((function(n,r){var t=o(he,ye(n),u),e=Oe(o(Ru,(function(n){return!o(ke,n,r)}),t));return e.$?r:k(r,A([e.a]))})),we,r),a=(Xu(u)-sr(i))*n.aF,f=(Xu(r)-sr(i))*n.aU,b=Te(i),v=c(cr,e,O(tr,0),b.b).b*n.aO;return s(ve,b.a*n.aQ+a+f+v,0,Xu(u),b.b)})),Be=u((function(n,r,t){for(;;){if(0>=r)return n;n=o(Pn,t,n),r=r-1,t=t}})),Ce=t((function(n,r){return c(Be,j,n,r)})),Ee=t((function(n,r){return k(r,o(Ce,n-sr(r),""))})),Ie=t((function(n,r){n:for(;;){if(n>0){if(r.b){n=n-1,r=r.b;continue n}return r}return r}})),Re=u((function(n,r,u){return O(c(cr,t((function(n,r){return Xu(n)+r})),0,o(Gu,r,u)),o(Ie,r,u))})),Fe=u((function(n,r,t){return o(Gu,sr(t)-(n-r-1),t)})),Ne=e((function(n,r,e,i){var a=u((function(n,r,t){return c(Re,n,r,c(Fe,n,r,o(Ee,n,t)))})),f=o(pe,r,A([e])),b=o(le,0,j),v=o(pe,r,A([i])),l=c(cr,t((function(n,r){switch(n.$){case 0:return w(r,{aF:n.a});case 1:return w(r,{aU:n.a});case 2:return w(r,{aQ:n.a});default:return w(r,{aO:n.a})}})),$e,n),$=t((function(n,r){var u=r.a,e=r.b,a=Xu(n)*l.aU+Xu(n)*l.aQ+Xu(i)*l.aF+Xu(i)*Xu(n)*l.aO,f=s(ve,a,u,0,j);return c(cr,t((function(r,t){var u=t.a,e=t.b,i=e+Xu(r),a=c(Ae,l,n,r);return O(0>m(a.ai,u.ai)?w(a,{ds:e}):u,i)})),O(f,u),e).a}));return c(cr,t((function(n,r){var t=r.a,u=r.b,e=o($,n,c(a,sr(f),u,v));return O(w(t,{c8:k(t.c8,A([e])),ai:e.ai+t.ai}),u+1)})),O(b,0),f).a})),Le=t((function(n,r){return s(Ne,j,A([" "]),n,r)})),Me=t((function(n,r){return s(Ne,j,A([" "]),n,r)})),Je=function(n){if(n.$)return"";var r=n.b;return r.$?nu(n.a):r.a},xe=function(n){return n.$?"":nu(n.a)},Ue=t((function(n,r){return{cI:o(Me,nu(n),Je(ue(r))),cU:o(Le,nu(n),xe(ie(r))),c3:o(Me,nu(n),be(fe(r)))}})),De=function(n){return n.a},Qe=u((function(n,r,u){return c(cr,t((function(r,t){var u=t.a;return O(u+1,c(n,u,r,t.b))})),O(0,r),u).b})),qe=j,He=J,Pe=t((function(n,r){return r.b?c(Iu,Pn,r,n):n})),_e=function(n){return B(n).join("")},Ge=t((function(n,r){return!je(o(Ru,(function(n){return o(ke,r-n.ds,n.c2)}),n.c8))})),We=u((function(n,r,u){return c(ge,t((function(r,t){return o(n,hr(r),t)})),r,u)})),Xe=t((function(n,r){return o(Pn,n,r)})),Ye=function(n){return Oe(n)},Ze=u((function(n,r,u){var e,i=p(n,(e=u.a9,c(We,t((function(n,r){return r+1})),0,e)-1));if(o(Ge,u.bk,n)){if(Ye(u.B).$){if(i){var a=O(!0,_e(yr(o(Pe,A([r]),u.v))));return w(u,{v:qe,s:o(Pe,u.s,A([a]))})}return w(u,{v:o(Xe,r,u.v)})}if(i){var f=O(!1,_e(yr(u.B)));return w(u,{s:o(Pe,u.s,A([f,O(!0,ye(r))]))})}f=O(!1,_e(yr(u.B)));return w(u,{v:o(Xe,r,u.v),B:qe,s:o(Pe,u.s,A([f]))})}if(Ye(u.v).$){if(i){f=O(!1,_e(yr(o(Pe,A([r]),u.B))));return w(u,{B:qe,s:o(Pe,u.s,A([f]))})}return w(u,{v:qe,B:o(Xe,r,u.B)})}if(i){var s=O(!0,_e(yr(u.v)));return w(u,{s:o(Pe,u.s,A([s,O(!1,ye(r))]))})}s=O(!0,_e(yr(u.v)));return w(u,{v:qe,B:o(Xe,r,u.B),s:o(Pe,u.s,A([s]))})})),ze=t((function(n,r){return c(Qe,Ze,{a9:n,v:qe,B:qe,bk:r,s:j},(t=n,c(He,Pn,j,t))).s;var t})),Ke=t((function(n,r){var t,u,e=kt(De(n)),i=o(Ue,e,r),a=(t=A([i.c3.ai,re(i.cI.ai),oe(i.cU.ai)]),c(cr,nr,0,t)),f=o(ze,fe(r).a,i.c3),s=o(ze,xe(ie(r)),i.cU),v=o(ze,Je(ue(r)),i.cI),l=o(zt,Nu,(u=A([i.c3.ai,re(i.cI.ai),oe(i.cU.ai)])).b?rr(c(cr,ce,u.a,u.b)):tr),$=l>100&&o(ne,nu(De(n)),nu(be(fe(r))))?2>Xu(De(n))?l:3>Xu(De(n))?50:4>Xu(De(n))?20:5>Xu(De(n))?15:6>Xu(De(n))?10:6>Xu(De(n))?l:10:l;return o(Vu,rr(b(se,a,$,f,v,s)),r)})),Ve=u((function(n,r,t){var u=!!r.$||o(Yu,r.a,Xu(n.a));return o(Zu,u?Ke(n):function(n){return o(Vu,tr,n)},t)})),ni=kn({c_:function(){return O(Wn(j),Pr)},dR:function(){return Wr(A([Yr(_r),Zr(Gr)]))},dX:t((function(n,r){if(n.$){var t=o(lt,vt,n.a);if(t.$)return O(r,Qu(kr(s=t.a)));var u=t.a,e=o(Wu,100,Du(i=c(Ve,u.dI,u.dJ,r)));return O(i,qu(c(Cu,e,u.dH,u.cE)))}var i,a=n.a,f=o(lt,o(du,1,0),a);if(f.$){var s=f.a;return O(Wn(j),Qu(kr(s)))}return O(i=f.a,Pr)}))});Qn={FilterWorker:{init:ni(zr(0))(0)}},n.Elm?Dn(n.Elm,Qn):n.Elm=Qn}(this);const app=Elm.FilterWorker.init();onmessage=({data:n})=>{const{portName:r,jsonBlob:t}=n;"receiveOptions"===r?app.ports.receiveOptions.send(t):"receiveSearchString"===r&&app.ports.receiveSearchString.send(t)},app.ports.sendSearchResults.subscribe((n=>{postMessage({messageName:"searchResults",searchResultData:n})})),app.ports.sendErrorMessage.subscribe((n=>{postMessage({messageName:"errorMessage",errorMessage:n})}));
      </script>
    </div>
  `;
  return templateTag;
};

export default getMuchSelectTemplate;