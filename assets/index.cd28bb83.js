(function(){const u=document.createElement("link").relList;if(u&&u.supports&&u.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(r){if(r.ep)return;r.ep=!0;const i=t(r);fetch(r.href,i)}})();function Wr(e,u){const t=Object.create(null),n=e.split(",");for(let r=0;r<n.length;r++)t[n[r]]=!0;return u?r=>!!t[r.toLowerCase()]:r=>!!t[r]}const Ts="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",js=Wr(Ts);function $a(e){return!!e||e===""}function In(e){if(V(e)){const u={};for(let t=0;t<e.length;t++){const n=e[t],r=we(n)?Ms(n):In(n);if(r)for(const i in r)u[i]=r[i]}return u}else{if(we(e))return e;if(De(e))return e}}const Os=/;(?![^(]*\))/g,Rs=/:(.+)/;function Ms(e){const u={};return e.split(Os).forEach(t=>{if(t){const n=t.split(Rs);n.length>1&&(u[n[0].trim()]=n[1].trim())}}),u}function h(e){let u="";if(we(e))u=e;else if(V(e))for(let t=0;t<e.length;t++){const n=h(e[t]);n&&(u+=n+" ")}else if(De(e))for(const t in e)e[t]&&(u+=t+" ");return u.trim()}const ue=e=>we(e)?e:e==null?"":V(e)||De(e)&&(e.toString===Ya||!Y(e.toString))?JSON.stringify(e,Ka,2):String(e),Ka=(e,u)=>u&&u.__v_isRef?Ka(e,u.value):rt(u)?{[`Map(${u.size})`]:[...u.entries()].reduce((t,[n,r])=>(t[`${n} =>`]=r,t),{})}:Va(u)?{[`Set(${u.size})`]:[...u.values()]}:De(u)&&!V(u)&&!qa(u)?String(u):u,fe={},nt=[],qe=()=>{},Ls=()=>!1,Ns=/^on[^a-z]/,Tn=e=>Ns.test(e),zr=e=>e.startsWith("onUpdate:"),Te=Object.assign,Hr=(e,u)=>{const t=e.indexOf(u);t>-1&&e.splice(t,1)},Us=Object.prototype.hasOwnProperty,Z=(e,u)=>Us.call(e,u),V=Array.isArray,rt=e=>jn(e)==="[object Map]",Va=e=>jn(e)==="[object Set]",Y=e=>typeof e=="function",we=e=>typeof e=="string",Jr=e=>typeof e=="symbol",De=e=>e!==null&&typeof e=="object",Ga=e=>De(e)&&Y(e.then)&&Y(e.catch),Ya=Object.prototype.toString,jn=e=>Ya.call(e),Ws=e=>jn(e).slice(8,-1),qa=e=>jn(e)==="[object Object]",$r=e=>we(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Bn=Wr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),On=e=>{const u=Object.create(null);return t=>u[t]||(u[t]=e(t))},zs=/-(\w)/g,ou=On(e=>e.replace(zs,(u,t)=>t?t.toUpperCase():"")),Hs=/\B([A-Z])/g,mt=On(e=>e.replace(Hs,"-$1").toLowerCase()),Rn=On(e=>e.charAt(0).toUpperCase()+e.slice(1)),Xn=On(e=>e?`on${Rn(e)}`:""),Rt=(e,u)=>!Object.is(e,u),Qn=(e,u)=>{for(let t=0;t<e.length;t++)e[t](u)},gn=(e,u,t)=>{Object.defineProperty(e,u,{configurable:!0,enumerable:!1,value:t})},Js=e=>{const u=parseFloat(e);return isNaN(u)?e:u};let ki;const $s=()=>ki||(ki=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let tu;class Xa{constructor(u=!1){this.active=!0,this.effects=[],this.cleanups=[],!u&&tu&&(this.parent=tu,this.index=(tu.scopes||(tu.scopes=[])).push(this)-1)}run(u){if(this.active){const t=tu;try{return tu=this,u()}finally{tu=t}}}on(){tu=this}off(){tu=this.parent}stop(u){if(this.active){let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);if(this.parent&&!u){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.active=!1}}}function Qa(e){return new Xa(e)}function Ks(e,u=tu){u&&u.active&&u.effects.push(e)}const Kr=e=>{const u=new Set(e);return u.w=0,u.n=0,u},Za=e=>(e.w&Fu)>0,eo=e=>(e.n&Fu)>0,Vs=({deps:e})=>{if(e.length)for(let u=0;u<e.length;u++)e[u].w|=Fu},Gs=e=>{const{deps:u}=e;if(u.length){let t=0;for(let n=0;n<u.length;n++){const r=u[n];Za(r)&&!eo(r)?r.delete(e):u[t++]=r,r.w&=~Fu,r.n&=~Fu}u.length=t}},lr=new WeakMap;let wt=0,Fu=1;const cr=30;let $e;const Wu=Symbol(""),fr=Symbol("");class Vr{constructor(u,t=null,n){this.fn=u,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,Ks(this,n)}run(){if(!this.active)return this.fn();let u=$e,t=wu;for(;u;){if(u===this)return;u=u.parent}try{return this.parent=$e,$e=this,wu=!0,Fu=1<<++wt,wt<=cr?Vs(this):Si(this),this.fn()}finally{wt<=cr&&Gs(this),Fu=1<<--wt,$e=this.parent,wu=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){$e===this?this.deferStop=!0:this.active&&(Si(this),this.onStop&&this.onStop(),this.active=!1)}}function Si(e){const{deps:u}=e;if(u.length){for(let t=0;t<u.length;t++)u[t].delete(e);u.length=0}}let wu=!0;const uo=[];function Dt(){uo.push(wu),wu=!1}function ht(){const e=uo.pop();wu=e===void 0?!0:e}function Ne(e,u,t){if(wu&&$e){let n=lr.get(e);n||lr.set(e,n=new Map);let r=n.get(t);r||n.set(t,r=Kr()),to(r)}}function to(e,u){let t=!1;wt<=cr?eo(e)||(e.n|=Fu,t=!Za(e)):t=!e.has($e),t&&(e.add($e),$e.deps.push(e))}function du(e,u,t,n,r,i){const a=lr.get(e);if(!a)return;let o=[];if(u==="clear")o=[...a.values()];else if(t==="length"&&V(e))a.forEach((s,l)=>{(l==="length"||l>=n)&&o.push(s)});else switch(t!==void 0&&o.push(a.get(t)),u){case"add":V(e)?$r(t)&&o.push(a.get("length")):(o.push(a.get(Wu)),rt(e)&&o.push(a.get(fr)));break;case"delete":V(e)||(o.push(a.get(Wu)),rt(e)&&o.push(a.get(fr)));break;case"set":rt(e)&&o.push(a.get(Wu));break}if(o.length===1)o[0]&&dr(o[0]);else{const s=[];for(const l of o)l&&s.push(...l);dr(Kr(s))}}function dr(e,u){const t=V(e)?e:[...e];for(const n of t)n.computed&&xi(n);for(const n of t)n.computed||xi(n)}function xi(e,u){(e!==$e||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const Ys=Wr("__proto__,__v_isRef,__isVue"),no=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Jr)),qs=Gr(),Xs=Gr(!1,!0),Qs=Gr(!0),Fi=Zs();function Zs(){const e={};return["includes","indexOf","lastIndexOf"].forEach(u=>{e[u]=function(...t){const n=te(this);for(let i=0,a=this.length;i<a;i++)Ne(n,"get",i+"");const r=n[u](...t);return r===-1||r===!1?n[u](...t.map(te)):r}}),["push","pop","shift","unshift","splice"].forEach(u=>{e[u]=function(...t){Dt();const n=te(this)[u].apply(this,t);return ht(),n}}),e}function Gr(e=!1,u=!1){return function(n,r,i){if(r==="__v_isReactive")return!e;if(r==="__v_isReadonly")return e;if(r==="__v_isShallow")return u;if(r==="__v_raw"&&i===(e?u?pC:so:u?oo:ao).get(n))return n;const a=V(n);if(!e&&a&&Z(Fi,r))return Reflect.get(Fi,r,i);const o=Reflect.get(n,r,i);return(Jr(r)?no.has(r):Ys(r))||(e||Ne(n,"get",r),u)?o:ge(o)?a&&$r(r)?o:o.value:De(o)?e?Co(o):At(o):o}}const eC=ro(),uC=ro(!0);function ro(e=!1){return function(t,n,r,i){let a=t[n];if(Ct(a)&&ge(a)&&!ge(r))return!1;if(!e&&(!vn(r)&&!Ct(r)&&(a=te(a),r=te(r)),!V(t)&&ge(a)&&!ge(r)))return a.value=r,!0;const o=V(t)&&$r(n)?Number(n)<t.length:Z(t,n),s=Reflect.set(t,n,r,i);return t===te(i)&&(o?Rt(r,a)&&du(t,"set",n,r):du(t,"add",n,r)),s}}function tC(e,u){const t=Z(e,u);e[u];const n=Reflect.deleteProperty(e,u);return n&&t&&du(e,"delete",u,void 0),n}function nC(e,u){const t=Reflect.has(e,u);return(!Jr(u)||!no.has(u))&&Ne(e,"has",u),t}function rC(e){return Ne(e,"iterate",V(e)?"length":Wu),Reflect.ownKeys(e)}const io={get:qs,set:eC,deleteProperty:tC,has:nC,ownKeys:rC},iC={get:Qs,set(e,u){return!0},deleteProperty(e,u){return!0}},aC=Te({},io,{get:Xs,set:uC}),Yr=e=>e,Mn=e=>Reflect.getPrototypeOf(e);function Zt(e,u,t=!1,n=!1){e=e.__v_raw;const r=te(e),i=te(u);t||(u!==i&&Ne(r,"get",u),Ne(r,"get",i));const{has:a}=Mn(r),o=n?Yr:t?Qr:Mt;if(a.call(r,u))return o(e.get(u));if(a.call(r,i))return o(e.get(i));e!==r&&e.get(u)}function en(e,u=!1){const t=this.__v_raw,n=te(t),r=te(e);return u||(e!==r&&Ne(n,"has",e),Ne(n,"has",r)),e===r?t.has(e):t.has(e)||t.has(r)}function un(e,u=!1){return e=e.__v_raw,!u&&Ne(te(e),"iterate",Wu),Reflect.get(e,"size",e)}function Pi(e){e=te(e);const u=te(this);return Mn(u).has.call(u,e)||(u.add(e),du(u,"add",e,e)),this}function Ii(e,u){u=te(u);const t=te(this),{has:n,get:r}=Mn(t);let i=n.call(t,e);i||(e=te(e),i=n.call(t,e));const a=r.call(t,e);return t.set(e,u),i?Rt(u,a)&&du(t,"set",e,u):du(t,"add",e,u),this}function Ti(e){const u=te(this),{has:t,get:n}=Mn(u);let r=t.call(u,e);r||(e=te(e),r=t.call(u,e)),n&&n.call(u,e);const i=u.delete(e);return r&&du(u,"delete",e,void 0),i}function ji(){const e=te(this),u=e.size!==0,t=e.clear();return u&&du(e,"clear",void 0,void 0),t}function tn(e,u){return function(n,r){const i=this,a=i.__v_raw,o=te(a),s=u?Yr:e?Qr:Mt;return!e&&Ne(o,"iterate",Wu),a.forEach((l,C)=>n.call(r,s(l),s(C),i))}}function nn(e,u,t){return function(...n){const r=this.__v_raw,i=te(r),a=rt(i),o=e==="entries"||e===Symbol.iterator&&a,s=e==="keys"&&a,l=r[e](...n),C=t?Yr:u?Qr:Mt;return!u&&Ne(i,"iterate",s?fr:Wu),{next(){const{value:f,done:B}=l.next();return B?{value:f,done:B}:{value:o?[C(f[0]),C(f[1])]:C(f),done:B}},[Symbol.iterator](){return this}}}}function gu(e){return function(...u){return e==="delete"?!1:this}}function oC(){const e={get(i){return Zt(this,i)},get size(){return un(this)},has:en,add:Pi,set:Ii,delete:Ti,clear:ji,forEach:tn(!1,!1)},u={get(i){return Zt(this,i,!1,!0)},get size(){return un(this)},has:en,add:Pi,set:Ii,delete:Ti,clear:ji,forEach:tn(!1,!0)},t={get(i){return Zt(this,i,!0)},get size(){return un(this,!0)},has(i){return en.call(this,i,!0)},add:gu("add"),set:gu("set"),delete:gu("delete"),clear:gu("clear"),forEach:tn(!0,!1)},n={get(i){return Zt(this,i,!0,!0)},get size(){return un(this,!0)},has(i){return en.call(this,i,!0)},add:gu("add"),set:gu("set"),delete:gu("delete"),clear:gu("clear"),forEach:tn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=nn(i,!1,!1),t[i]=nn(i,!0,!1),u[i]=nn(i,!1,!0),n[i]=nn(i,!0,!0)}),[e,t,u,n]}const[sC,CC,lC,cC]=oC();function qr(e,u){const t=u?e?cC:lC:e?CC:sC;return(n,r,i)=>r==="__v_isReactive"?!e:r==="__v_isReadonly"?e:r==="__v_raw"?n:Reflect.get(Z(t,r)&&r in n?t:n,r,i)}const fC={get:qr(!1,!1)},dC={get:qr(!1,!0)},BC={get:qr(!0,!1)},ao=new WeakMap,oo=new WeakMap,so=new WeakMap,pC=new WeakMap;function mC(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function DC(e){return e.__v_skip||!Object.isExtensible(e)?0:mC(Ws(e))}function At(e){return Ct(e)?e:Xr(e,!1,io,fC,ao)}function hC(e){return Xr(e,!1,aC,dC,oo)}function Co(e){return Xr(e,!0,iC,BC,so)}function Xr(e,u,t,n,r){if(!De(e)||e.__v_raw&&!(u&&e.__v_isReactive))return e;const i=r.get(e);if(i)return i;const a=DC(e);if(a===0)return e;const o=new Proxy(e,a===2?n:t);return r.set(e,o),o}function ku(e){return Ct(e)?ku(e.__v_raw):!!(e&&e.__v_isReactive)}function Ct(e){return!!(e&&e.__v_isReadonly)}function vn(e){return!!(e&&e.__v_isShallow)}function lo(e){return ku(e)||Ct(e)}function te(e){const u=e&&e.__v_raw;return u?te(u):e}function lt(e){return gn(e,"__v_skip",!0),e}const Mt=e=>De(e)?At(e):e,Qr=e=>De(e)?Co(e):e;function co(e){wu&&$e&&(e=te(e),to(e.dep||(e.dep=Kr())))}function fo(e,u){e=te(e),e.dep&&dr(e.dep)}function ge(e){return!!(e&&e.__v_isRef===!0)}function Gt(e){return Bo(e,!1)}function AC(e){return Bo(e,!0)}function Bo(e,u){return ge(e)?e:new gC(e,u)}class gC{constructor(u,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?u:te(u),this._value=t?u:Mt(u)}get value(){return co(this),this._value}set value(u){const t=this.__v_isShallow||vn(u)||Ct(u);u=t?u:te(u),Rt(u,this._rawValue)&&(this._rawValue=u,this._value=t?u:Mt(u),fo(this))}}function it(e){return ge(e)?e.value:e}const vC={get:(e,u,t)=>it(Reflect.get(e,u,t)),set:(e,u,t,n)=>{const r=e[u];return ge(r)&&!ge(t)?(r.value=t,!0):Reflect.set(e,u,t,n)}};function po(e){return ku(e)?e:new Proxy(e,vC)}function bC(e){const u=V(e)?new Array(e.length):{};for(const t in e)u[t]=EC(e,t);return u}class yC{constructor(u,t,n){this._object=u,this._key=t,this._defaultValue=n,this.__v_isRef=!0}get value(){const u=this._object[this._key];return u===void 0?this._defaultValue:u}set value(u){this._object[this._key]=u}}function EC(e,u,t){const n=e[u];return ge(n)?n:new yC(e,u,t)}var mo;class _C{constructor(u,t,n,r){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this[mo]=!1,this._dirty=!0,this.effect=new Vr(u,()=>{this._dirty||(this._dirty=!0,fo(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=n}get value(){const u=te(this);return co(u),(u._dirty||!u._cacheable)&&(u._dirty=!1,u._value=u.effect.run()),u._value}set value(u){this._setter(u)}}mo="__v_isReadonly";function wC(e,u,t=!1){let n,r;const i=Y(e);return i?(n=e,r=qe):(n=e.get,r=e.set),new _C(n,r,i||!r,t)}function Su(e,u,t,n){let r;try{r=n?e(...n):e()}catch(i){Ln(i,u,t)}return r}function Xe(e,u,t,n){if(Y(e)){const i=Su(e,u,t,n);return i&&Ga(i)&&i.catch(a=>{Ln(a,u,t)}),i}const r=[];for(let i=0;i<e.length;i++)r.push(Xe(e[i],u,t,n));return r}function Ln(e,u,t,n=!0){const r=u?u.vnode:null;if(u){let i=u.parent;const a=u.proxy,o=t;for(;i;){const l=i.ec;if(l){for(let C=0;C<l.length;C++)if(l[C](e,a,o)===!1)return}i=i.parent}const s=u.appContext.config.errorHandler;if(s){Su(s,null,10,[e,a,o]);return}}kC(e,t,r,n)}function kC(e,u,t,n=!0){console.error(e)}let Lt=!1,Br=!1;const Fe=[];let ru=0;const at=[];let lu=null,Mu=0;const Do=Promise.resolve();let Zr=null;function ei(e){const u=Zr||Do;return e?u.then(this?e.bind(this):e):u}function SC(e){let u=ru+1,t=Fe.length;for(;u<t;){const n=u+t>>>1;Nt(Fe[n])<e?u=n+1:t=n}return u}function ui(e){(!Fe.length||!Fe.includes(e,Lt&&e.allowRecurse?ru+1:ru))&&(e.id==null?Fe.push(e):Fe.splice(SC(e.id),0,e),ho())}function ho(){!Lt&&!Br&&(Br=!0,Zr=Do.then(go))}function xC(e){const u=Fe.indexOf(e);u>ru&&Fe.splice(u,1)}function FC(e){V(e)?at.push(...e):(!lu||!lu.includes(e,e.allowRecurse?Mu+1:Mu))&&at.push(e),ho()}function Oi(e,u=Lt?ru+1:0){for(;u<Fe.length;u++){const t=Fe[u];t&&t.pre&&(Fe.splice(u,1),u--,t())}}function Ao(e){if(at.length){const u=[...new Set(at)];if(at.length=0,lu){lu.push(...u);return}for(lu=u,lu.sort((t,n)=>Nt(t)-Nt(n)),Mu=0;Mu<lu.length;Mu++)lu[Mu]();lu=null,Mu=0}}const Nt=e=>e.id==null?1/0:e.id,PC=(e,u)=>{const t=Nt(e)-Nt(u);if(t===0){if(e.pre&&!u.pre)return-1;if(u.pre&&!e.pre)return 1}return t};function go(e){Br=!1,Lt=!0,Fe.sort(PC);const u=qe;try{for(ru=0;ru<Fe.length;ru++){const t=Fe[ru];t&&t.active!==!1&&Su(t,null,14)}}finally{ru=0,Fe.length=0,Ao(),Lt=!1,Zr=null,(Fe.length||at.length)&&go()}}function IC(e,u,...t){if(e.isUnmounted)return;const n=e.vnode.props||fe;let r=t;const i=u.startsWith("update:"),a=i&&u.slice(7);if(a&&a in n){const C=`${a==="modelValue"?"model":a}Modifiers`,{number:f,trim:B}=n[C]||fe;B&&(r=t.map(m=>m.trim())),f&&(r=t.map(Js))}let o,s=n[o=Xn(u)]||n[o=Xn(ou(u))];!s&&i&&(s=n[o=Xn(mt(u))]),s&&Xe(s,e,6,r);const l=n[o+"Once"];if(l){if(!e.emitted)e.emitted={};else if(e.emitted[o])return;e.emitted[o]=!0,Xe(l,e,6,r)}}function vo(e,u,t=!1){const n=u.emitsCache,r=n.get(e);if(r!==void 0)return r;const i=e.emits;let a={},o=!1;if(!Y(e)){const s=l=>{const C=vo(l,u,!0);C&&(o=!0,Te(a,C))};!t&&u.mixins.length&&u.mixins.forEach(s),e.extends&&s(e.extends),e.mixins&&e.mixins.forEach(s)}return!i&&!o?(De(e)&&n.set(e,null),null):(V(i)?i.forEach(s=>a[s]=null):Te(a,i),De(e)&&n.set(e,a),a)}function Nn(e,u){return!e||!Tn(u)?!1:(u=u.slice(2).replace(/Once$/,""),Z(e,u[0].toLowerCase()+u.slice(1))||Z(e,mt(u))||Z(e,u))}let Ve=null,Un=null;function bn(e){const u=Ve;return Ve=e,Un=e&&e.type.__scopeId||null,u}function TC(e){Un=e}function jC(){Un=null}function Je(e,u=Ve,t){if(!u||e._n)return e;const n=(...r)=>{n._d&&$i(-1);const i=bn(u),a=e(...r);return bn(i),n._d&&$i(1),a};return n._n=!0,n._c=!0,n._d=!0,n}function Zn(e){const{type:u,vnode:t,proxy:n,withProxy:r,props:i,propsOptions:[a],slots:o,attrs:s,emit:l,render:C,renderCache:f,data:B,setupState:m,ctx:_,inheritAttrs:T}=e;let F,D;const y=bn(e);try{if(t.shapeFlag&4){const z=r||n;F=nu(C.call(z,z,f,i,m,B,_)),D=s}else{const z=u;F=nu(z.length>1?z(i,{attrs:s,slots:o,emit:l}):z(i,null)),D=u.props?s:OC(s)}}catch(z){St.length=0,Ln(z,e,1),F=N($u)}let j=F;if(D&&T!==!1){const z=Object.keys(D),{shapeFlag:H}=j;z.length&&H&7&&(a&&z.some(zr)&&(D=RC(D,a)),j=ct(j,D))}return t.dirs&&(j=ct(j),j.dirs=j.dirs?j.dirs.concat(t.dirs):t.dirs),t.transition&&(j.transition=t.transition),F=j,bn(y),F}const OC=e=>{let u;for(const t in e)(t==="class"||t==="style"||Tn(t))&&((u||(u={}))[t]=e[t]);return u},RC=(e,u)=>{const t={};for(const n in e)(!zr(n)||!(n.slice(9)in u))&&(t[n]=e[n]);return t};function MC(e,u,t){const{props:n,children:r,component:i}=e,{props:a,children:o,patchFlag:s}=u,l=i.emitsOptions;if(u.dirs||u.transition)return!0;if(t&&s>=0){if(s&1024)return!0;if(s&16)return n?Ri(n,a,l):!!a;if(s&8){const C=u.dynamicProps;for(let f=0;f<C.length;f++){const B=C[f];if(a[B]!==n[B]&&!Nn(l,B))return!0}}}else return(r||o)&&(!o||!o.$stable)?!0:n===a?!1:n?a?Ri(n,a,l):!0:!!a;return!1}function Ri(e,u,t){const n=Object.keys(u);if(n.length!==Object.keys(e).length)return!0;for(let r=0;r<n.length;r++){const i=n[r];if(u[i]!==e[i]&&!Nn(t,i))return!0}return!1}function LC({vnode:e,parent:u},t){for(;u&&u.subTree===e;)(e=u.vnode).el=t,u=u.parent}const NC=e=>e.__isSuspense;function UC(e,u){u&&u.pendingBranch?V(e)?u.effects.push(...e):u.effects.push(e):FC(e)}function pn(e,u){if(_e){let t=_e.provides;const n=_e.parent&&_e.parent.provides;n===t&&(t=_e.provides=Object.create(n)),t[e]=u}}function fu(e,u,t=!1){const n=_e||Ve;if(n){const r=n.parent==null?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides;if(r&&e in r)return r[e];if(arguments.length>1)return t&&Y(u)?u.call(n.proxy):u}}const Mi={};function zu(e,u,t){return bo(e,u,t)}function bo(e,u,{immediate:t,deep:n,flush:r,onTrack:i,onTrigger:a}=fe){const o=_e;let s,l=!1,C=!1;if(ge(e)?(s=()=>e.value,l=vn(e)):ku(e)?(s=()=>e,n=!0):V(e)?(C=!0,l=e.some(D=>ku(D)||vn(D)),s=()=>e.map(D=>{if(ge(D))return D.value;if(ku(D))return et(D);if(Y(D))return Su(D,o,2)})):Y(e)?u?s=()=>Su(e,o,2):s=()=>{if(!(o&&o.isUnmounted))return f&&f(),Xe(e,o,3,[B])}:s=qe,u&&n){const D=s;s=()=>et(D())}let f,B=D=>{f=F.onStop=()=>{Su(D,o,4)}};if(Wt)return B=qe,u?t&&Xe(u,o,3,[s(),C?[]:void 0,B]):s(),qe;let m=C?[]:Mi;const _=()=>{if(!!F.active)if(u){const D=F.run();(n||l||(C?D.some((y,j)=>Rt(y,m[j])):Rt(D,m)))&&(f&&f(),Xe(u,o,3,[D,m===Mi?void 0:m,B]),m=D)}else F.run()};_.allowRecurse=!!u;let T;r==="sync"?T=_:r==="post"?T=()=>Oe(_,o&&o.suspense):(_.pre=!0,o&&(_.id=o.uid),T=()=>ui(_));const F=new Vr(s,T);return u?t?_():m=F.run():r==="post"?Oe(F.run.bind(F),o&&o.suspense):F.run(),()=>{F.stop(),o&&o.scope&&Hr(o.scope.effects,F)}}function WC(e,u,t){const n=this.proxy,r=we(e)?e.includes(".")?yo(n,e):()=>n[e]:e.bind(n,n);let i;Y(u)?i=u:(i=u.handler,t=u);const a=_e;ft(this);const o=bo(r,i.bind(n),t);return a?ft(a):Ju(),o}function yo(e,u){const t=u.split(".");return()=>{let n=e;for(let r=0;r<t.length&&n;r++)n=n[t[r]];return n}}function et(e,u){if(!De(e)||e.__v_skip||(u=u||new Set,u.has(e)))return e;if(u.add(e),ge(e))et(e.value,u);else if(V(e))for(let t=0;t<e.length;t++)et(e[t],u);else if(Va(e)||rt(e))e.forEach(t=>{et(t,u)});else if(qa(e))for(const t in e)et(e[t],u);return e}function Yt(e){return Y(e)?{setup:e,name:e.name}:e}const mn=e=>!!e.type.__asyncLoader,Eo=e=>e.type.__isKeepAlive;function zC(e,u){_o(e,"a",u)}function HC(e,u){_o(e,"da",u)}function _o(e,u,t=_e){const n=e.__wdc||(e.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return e()});if(Wn(u,n,t),t){let r=t.parent;for(;r&&r.parent;)Eo(r.parent.vnode)&&JC(n,u,t,r),r=r.parent}}function JC(e,u,t,n){const r=Wn(u,e,n,!0);ti(()=>{Hr(n[u],r)},t)}function Wn(e,u,t=_e,n=!1){if(t){const r=t[e]||(t[e]=[]),i=u.__weh||(u.__weh=(...a)=>{if(t.isUnmounted)return;Dt(),ft(t);const o=Xe(u,t,e,a);return Ju(),ht(),o});return n?r.unshift(i):r.push(i),i}}const Du=e=>(u,t=_e)=>(!Wt||e==="sp")&&Wn(e,u,t),$C=Du("bm"),KC=Du("m"),VC=Du("bu"),GC=Du("u"),YC=Du("bum"),ti=Du("um"),qC=Du("sp"),XC=Du("rtg"),QC=Du("rtc");function ZC(e,u=_e){Wn("ec",e,u)}function ju(e,u,t,n){const r=e.dirs,i=u&&u.dirs;for(let a=0;a<r.length;a++){const o=r[a];i&&(o.oldValue=i[a].value);let s=o.dir[n];s&&(Dt(),Xe(s,t,8,[e.el,o,e,u]),ht())}}const wo="components";function ye(e,u){return ul(wo,e,!0,u)||e}const el=Symbol();function ul(e,u,t=!0,n=!1){const r=Ve||_e;if(r){const i=r.type;if(e===wo){const o=Fl(i,!1);if(o&&(o===u||o===ou(u)||o===Rn(ou(u))))return i}const a=Li(r[e]||i[e],u)||Li(r.appContext[e],u);return!a&&n?i:a}}function Li(e,u){return e&&(e[u]||e[ou(u)]||e[Rn(ou(u))])}function xu(e,u,t,n){let r;const i=t&&t[n];if(V(e)||we(e)){r=new Array(e.length);for(let a=0,o=e.length;a<o;a++)r[a]=u(e[a],a,void 0,i&&i[a])}else if(typeof e=="number"){r=new Array(e);for(let a=0;a<e;a++)r[a]=u(a+1,a,void 0,i&&i[a])}else if(De(e))if(e[Symbol.iterator])r=Array.from(e,(a,o)=>u(a,o,void 0,i&&i[o]));else{const a=Object.keys(e);r=new Array(a.length);for(let o=0,s=a.length;o<s;o++){const l=a[o];r[o]=u(e[l],l,o,i&&i[o])}}else r=[];return t&&(t[n]=r),r}const pr=e=>e?Lo(e)?oi(e)||e.proxy:pr(e.parent):null,yn=Te(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>pr(e.parent),$root:e=>pr(e.root),$emit:e=>e.emit,$options:e=>ni(e),$forceUpdate:e=>e.f||(e.f=()=>ui(e.update)),$nextTick:e=>e.n||(e.n=ei.bind(e.proxy)),$watch:e=>WC.bind(e)}),tl={get({_:e},u){const{ctx:t,setupState:n,data:r,props:i,accessCache:a,type:o,appContext:s}=e;let l;if(u[0]!=="$"){const m=a[u];if(m!==void 0)switch(m){case 1:return n[u];case 2:return r[u];case 4:return t[u];case 3:return i[u]}else{if(n!==fe&&Z(n,u))return a[u]=1,n[u];if(r!==fe&&Z(r,u))return a[u]=2,r[u];if((l=e.propsOptions[0])&&Z(l,u))return a[u]=3,i[u];if(t!==fe&&Z(t,u))return a[u]=4,t[u];mr&&(a[u]=0)}}const C=yn[u];let f,B;if(C)return u==="$attrs"&&Ne(e,"get",u),C(e);if((f=o.__cssModules)&&(f=f[u]))return f;if(t!==fe&&Z(t,u))return a[u]=4,t[u];if(B=s.config.globalProperties,Z(B,u))return B[u]},set({_:e},u,t){const{data:n,setupState:r,ctx:i}=e;return r!==fe&&Z(r,u)?(r[u]=t,!0):n!==fe&&Z(n,u)?(n[u]=t,!0):Z(e.props,u)||u[0]==="$"&&u.slice(1)in e?!1:(i[u]=t,!0)},has({_:{data:e,setupState:u,accessCache:t,ctx:n,appContext:r,propsOptions:i}},a){let o;return!!t[a]||e!==fe&&Z(e,a)||u!==fe&&Z(u,a)||(o=i[0])&&Z(o,a)||Z(n,a)||Z(yn,a)||Z(r.config.globalProperties,a)},defineProperty(e,u,t){return t.get!=null?e._.accessCache[u]=0:Z(t,"value")&&this.set(e,u,t.value,null),Reflect.defineProperty(e,u,t)}};let mr=!0;function nl(e){const u=ni(e),t=e.proxy,n=e.ctx;mr=!1,u.beforeCreate&&Ni(u.beforeCreate,e,"bc");const{data:r,computed:i,methods:a,watch:o,provide:s,inject:l,created:C,beforeMount:f,mounted:B,beforeUpdate:m,updated:_,activated:T,deactivated:F,beforeDestroy:D,beforeUnmount:y,destroyed:j,unmounted:z,render:H,renderTracked:ne,renderTriggered:K,errorCaptured:Q,serverPrefetch:ae,expose:xe,inheritAttrs:Pe,components:Re,directives:Au,filters:We}=u;if(l&&rl(l,n,null,e.appContext.config.unwrapInjectedRef),a)for(const le in a){const oe=a[le];Y(oe)&&(n[le]=oe.bind(t))}if(r){const le=r.call(t,t);De(le)&&(e.data=At(le))}if(mr=!0,i)for(const le in i){const oe=i[le],Me=Y(oe)?oe.bind(t,t):Y(oe.get)?oe.get.bind(t,t):qe,Yu=!Y(oe)&&Y(oe.set)?oe.set.bind(t):qe,su=me({get:Me,set:Yu});Object.defineProperty(n,le,{enumerable:!0,configurable:!0,get:()=>su.value,set:Ze=>su.value=Ze})}if(o)for(const le in o)ko(o[le],n,t,le);if(s){const le=Y(s)?s.call(t):s;Reflect.ownKeys(le).forEach(oe=>{pn(oe,le[oe])})}C&&Ni(C,e,"c");function be(le,oe){V(oe)?oe.forEach(Me=>le(Me.bind(t))):oe&&le(oe.bind(t))}if(be($C,f),be(KC,B),be(VC,m),be(GC,_),be(zC,T),be(HC,F),be(ZC,Q),be(QC,ne),be(XC,K),be(YC,y),be(ti,z),be(qC,ae),V(xe))if(xe.length){const le=e.exposed||(e.exposed={});xe.forEach(oe=>{Object.defineProperty(le,oe,{get:()=>t[oe],set:Me=>t[oe]=Me})})}else e.exposed||(e.exposed={});H&&e.render===qe&&(e.render=H),Pe!=null&&(e.inheritAttrs=Pe),Re&&(e.components=Re),Au&&(e.directives=Au)}function rl(e,u,t=qe,n=!1){V(e)&&(e=Dr(e));for(const r in e){const i=e[r];let a;De(i)?"default"in i?a=fu(i.from||r,i.default,!0):a=fu(i.from||r):a=fu(i),ge(a)&&n?Object.defineProperty(u,r,{enumerable:!0,configurable:!0,get:()=>a.value,set:o=>a.value=o}):u[r]=a}}function Ni(e,u,t){Xe(V(e)?e.map(n=>n.bind(u.proxy)):e.bind(u.proxy),u,t)}function ko(e,u,t,n){const r=n.includes(".")?yo(t,n):()=>t[n];if(we(e)){const i=u[e];Y(i)&&zu(r,i)}else if(Y(e))zu(r,e.bind(t));else if(De(e))if(V(e))e.forEach(i=>ko(i,u,t,n));else{const i=Y(e.handler)?e.handler.bind(t):u[e.handler];Y(i)&&zu(r,i,e)}}function ni(e){const u=e.type,{mixins:t,extends:n}=u,{mixins:r,optionsCache:i,config:{optionMergeStrategies:a}}=e.appContext,o=i.get(u);let s;return o?s=o:!r.length&&!t&&!n?s=u:(s={},r.length&&r.forEach(l=>En(s,l,a,!0)),En(s,u,a)),De(u)&&i.set(u,s),s}function En(e,u,t,n=!1){const{mixins:r,extends:i}=u;i&&En(e,i,t,!0),r&&r.forEach(a=>En(e,a,t,!0));for(const a in u)if(!(n&&a==="expose")){const o=il[a]||t&&t[a];e[a]=o?o(e[a],u[a]):u[a]}return e}const il={data:Ui,props:Ru,emits:Ru,methods:Ru,computed:Ru,beforeCreate:Ie,created:Ie,beforeMount:Ie,mounted:Ie,beforeUpdate:Ie,updated:Ie,beforeDestroy:Ie,beforeUnmount:Ie,destroyed:Ie,unmounted:Ie,activated:Ie,deactivated:Ie,errorCaptured:Ie,serverPrefetch:Ie,components:Ru,directives:Ru,watch:ol,provide:Ui,inject:al};function Ui(e,u){return u?e?function(){return Te(Y(e)?e.call(this,this):e,Y(u)?u.call(this,this):u)}:u:e}function al(e,u){return Ru(Dr(e),Dr(u))}function Dr(e){if(V(e)){const u={};for(let t=0;t<e.length;t++)u[e[t]]=e[t];return u}return e}function Ie(e,u){return e?[...new Set([].concat(e,u))]:u}function Ru(e,u){return e?Te(Te(Object.create(null),e),u):u}function ol(e,u){if(!e)return u;if(!u)return e;const t=Te(Object.create(null),e);for(const n in u)t[n]=Ie(e[n],u[n]);return t}function sl(e,u,t,n=!1){const r={},i={};gn(i,zn,1),e.propsDefaults=Object.create(null),So(e,u,r,i);for(const a in e.propsOptions[0])a in r||(r[a]=void 0);t?e.props=n?r:hC(r):e.type.props?e.props=r:e.props=i,e.attrs=i}function Cl(e,u,t,n){const{props:r,attrs:i,vnode:{patchFlag:a}}=e,o=te(r),[s]=e.propsOptions;let l=!1;if((n||a>0)&&!(a&16)){if(a&8){const C=e.vnode.dynamicProps;for(let f=0;f<C.length;f++){let B=C[f];if(Nn(e.emitsOptions,B))continue;const m=u[B];if(s)if(Z(i,B))m!==i[B]&&(i[B]=m,l=!0);else{const _=ou(B);r[_]=hr(s,o,_,m,e,!1)}else m!==i[B]&&(i[B]=m,l=!0)}}}else{So(e,u,r,i)&&(l=!0);let C;for(const f in o)(!u||!Z(u,f)&&((C=mt(f))===f||!Z(u,C)))&&(s?t&&(t[f]!==void 0||t[C]!==void 0)&&(r[f]=hr(s,o,f,void 0,e,!0)):delete r[f]);if(i!==o)for(const f in i)(!u||!Z(u,f)&&!0)&&(delete i[f],l=!0)}l&&du(e,"set","$attrs")}function So(e,u,t,n){const[r,i]=e.propsOptions;let a=!1,o;if(u)for(let s in u){if(Bn(s))continue;const l=u[s];let C;r&&Z(r,C=ou(s))?!i||!i.includes(C)?t[C]=l:(o||(o={}))[C]=l:Nn(e.emitsOptions,s)||(!(s in n)||l!==n[s])&&(n[s]=l,a=!0)}if(i){const s=te(t),l=o||fe;for(let C=0;C<i.length;C++){const f=i[C];t[f]=hr(r,s,f,l[f],e,!Z(l,f))}}return a}function hr(e,u,t,n,r,i){const a=e[t];if(a!=null){const o=Z(a,"default");if(o&&n===void 0){const s=a.default;if(a.type!==Function&&Y(s)){const{propsDefaults:l}=r;t in l?n=l[t]:(ft(r),n=l[t]=s.call(null,u),Ju())}else n=s}a[0]&&(i&&!o?n=!1:a[1]&&(n===""||n===mt(t))&&(n=!0))}return n}function xo(e,u,t=!1){const n=u.propsCache,r=n.get(e);if(r)return r;const i=e.props,a={},o=[];let s=!1;if(!Y(e)){const C=f=>{s=!0;const[B,m]=xo(f,u,!0);Te(a,B),m&&o.push(...m)};!t&&u.mixins.length&&u.mixins.forEach(C),e.extends&&C(e.extends),e.mixins&&e.mixins.forEach(C)}if(!i&&!s)return De(e)&&n.set(e,nt),nt;if(V(i))for(let C=0;C<i.length;C++){const f=ou(i[C]);Wi(f)&&(a[f]=fe)}else if(i)for(const C in i){const f=ou(C);if(Wi(f)){const B=i[C],m=a[f]=V(B)||Y(B)?{type:B}:B;if(m){const _=Ji(Boolean,m.type),T=Ji(String,m.type);m[0]=_>-1,m[1]=T<0||_<T,(_>-1||Z(m,"default"))&&o.push(f)}}}const l=[a,o];return De(e)&&n.set(e,l),l}function Wi(e){return e[0]!=="$"}function zi(e){const u=e&&e.toString().match(/^\s*function (\w+)/);return u?u[1]:e===null?"null":""}function Hi(e,u){return zi(e)===zi(u)}function Ji(e,u){return V(u)?u.findIndex(t=>Hi(t,e)):Y(u)&&Hi(u,e)?0:-1}const Fo=e=>e[0]==="_"||e==="$stable",ri=e=>V(e)?e.map(nu):[nu(e)],ll=(e,u,t)=>{if(u._n)return u;const n=Je((...r)=>ri(u(...r)),t);return n._c=!1,n},Po=(e,u,t)=>{const n=e._ctx;for(const r in e){if(Fo(r))continue;const i=e[r];if(Y(i))u[r]=ll(r,i,n);else if(i!=null){const a=ri(i);u[r]=()=>a}}},Io=(e,u)=>{const t=ri(u);e.slots.default=()=>t},cl=(e,u)=>{if(e.vnode.shapeFlag&32){const t=u._;t?(e.slots=te(u),gn(u,"_",t)):Po(u,e.slots={})}else e.slots={},u&&Io(e,u);gn(e.slots,zn,1)},fl=(e,u,t)=>{const{vnode:n,slots:r}=e;let i=!0,a=fe;if(n.shapeFlag&32){const o=u._;o?t&&o===1?i=!1:(Te(r,u),!t&&o===1&&delete r._):(i=!u.$stable,Po(u,r)),a=u}else u&&(Io(e,u),a={default:1});if(i)for(const o in r)!Fo(o)&&!(o in a)&&delete r[o]};function To(){return{app:null,config:{isNativeTag:Ls,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let dl=0;function Bl(e,u){return function(n,r=null){Y(n)||(n=Object.assign({},n)),r!=null&&!De(r)&&(r=null);const i=To(),a=new Set;let o=!1;const s=i.app={_uid:dl++,_component:n,_props:r,_container:null,_context:i,_instance:null,version:Il,get config(){return i.config},set config(l){},use(l,...C){return a.has(l)||(l&&Y(l.install)?(a.add(l),l.install(s,...C)):Y(l)&&(a.add(l),l(s,...C))),s},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),s},component(l,C){return C?(i.components[l]=C,s):i.components[l]},directive(l,C){return C?(i.directives[l]=C,s):i.directives[l]},mount(l,C,f){if(!o){const B=N(n,r);return B.appContext=i,C&&u?u(B,l):e(B,l,f),o=!0,s._container=l,l.__vue_app__=s,oi(B.component)||B.component.proxy}},unmount(){o&&(e(null,s._container),delete s._container.__vue_app__)},provide(l,C){return i.provides[l]=C,s}};return s}}function Ar(e,u,t,n,r=!1){if(V(e)){e.forEach((B,m)=>Ar(B,u&&(V(u)?u[m]:u),t,n,r));return}if(mn(n)&&!r)return;const i=n.shapeFlag&4?oi(n.component)||n.component.proxy:n.el,a=r?null:i,{i:o,r:s}=e,l=u&&u.r,C=o.refs===fe?o.refs={}:o.refs,f=o.setupState;if(l!=null&&l!==s&&(we(l)?(C[l]=null,Z(f,l)&&(f[l]=null)):ge(l)&&(l.value=null)),Y(s))Su(s,o,12,[a,C]);else{const B=we(s),m=ge(s);if(B||m){const _=()=>{if(e.f){const T=B?C[s]:s.value;r?V(T)&&Hr(T,i):V(T)?T.includes(i)||T.push(i):B?(C[s]=[i],Z(f,s)&&(f[s]=C[s])):(s.value=[i],e.k&&(C[e.k]=s.value))}else B?(C[s]=a,Z(f,s)&&(f[s]=a)):m&&(s.value=a,e.k&&(C[e.k]=a))};a?(_.id=-1,Oe(_,t)):_()}}}const Oe=UC;function pl(e){return ml(e)}function ml(e,u){const t=$s();t.__VUE__=!0;const{insert:n,remove:r,patchProp:i,createElement:a,createText:o,createComment:s,setText:l,setElementText:C,parentNode:f,nextSibling:B,setScopeId:m=qe,cloneNode:_,insertStaticContent:T}=e,F=(c,d,p,b=null,v=null,k=null,P=!1,w=null,S=!!d.dynamicChildren)=>{if(c===d)return;c&&!Et(c,d)&&(b=L(c),ze(c,v,k,!0),c=null),d.patchFlag===-2&&(S=!1,d.dynamicChildren=null);const{type:E,ref:U,shapeFlag:O}=d;switch(E){case ii:D(c,d,p,b);break;case $u:y(c,d,p,b);break;case er:c==null&&j(d,p,b,P);break;case Ae:Au(c,d,p,b,v,k,P,w,S);break;default:O&1?ne(c,d,p,b,v,k,P,w,S):O&6?We(c,d,p,b,v,k,P,w,S):(O&64||O&128)&&E.process(c,d,p,b,v,k,P,w,S,ce)}U!=null&&v&&Ar(U,c&&c.ref,k,d||c,!d)},D=(c,d,p,b)=>{if(c==null)n(d.el=o(d.children),p,b);else{const v=d.el=c.el;d.children!==c.children&&l(v,d.children)}},y=(c,d,p,b)=>{c==null?n(d.el=s(d.children||""),p,b):d.el=c.el},j=(c,d,p,b)=>{[c.el,c.anchor]=T(c.children,d,p,b,c.el,c.anchor)},z=({el:c,anchor:d},p,b)=>{let v;for(;c&&c!==d;)v=B(c),n(c,p,b),c=v;n(d,p,b)},H=({el:c,anchor:d})=>{let p;for(;c&&c!==d;)p=B(c),r(c),c=p;r(d)},ne=(c,d,p,b,v,k,P,w,S)=>{P=P||d.type==="svg",c==null?K(d,p,b,v,k,P,w,S):xe(c,d,v,k,P,w,S)},K=(c,d,p,b,v,k,P,w)=>{let S,E;const{type:U,props:O,shapeFlag:W,transition:$,patchFlag:ee,dirs:se}=c;if(c.el&&_!==void 0&&ee===-1)S=c.el=_(c.el);else{if(S=c.el=a(c.type,k,O&&O.is,O),W&8?C(S,c.children):W&16&&ae(c.children,S,null,b,v,k&&U!=="foreignObject",P,w),se&&ju(c,null,b,"created"),O){for(const de in O)de!=="value"&&!Bn(de)&&i(S,de,null,O[de],k,c.children,b,v,x);"value"in O&&i(S,"value",null,O.value),(E=O.onVnodeBeforeMount)&&uu(E,b,c)}Q(S,c,c.scopeId,P,b)}se&&ju(c,null,b,"beforeMount");const Ce=(!v||v&&!v.pendingBranch)&&$&&!$.persisted;Ce&&$.beforeEnter(S),n(S,d,p),((E=O&&O.onVnodeMounted)||Ce||se)&&Oe(()=>{E&&uu(E,b,c),Ce&&$.enter(S),se&&ju(c,null,b,"mounted")},v)},Q=(c,d,p,b,v)=>{if(p&&m(c,p),b)for(let k=0;k<b.length;k++)m(c,b[k]);if(v){let k=v.subTree;if(d===k){const P=v.vnode;Q(c,P,P.scopeId,P.slotScopeIds,v.parent)}}},ae=(c,d,p,b,v,k,P,w,S=0)=>{for(let E=S;E<c.length;E++){const U=c[E]=w?yu(c[E]):nu(c[E]);F(null,U,d,p,b,v,k,P,w)}},xe=(c,d,p,b,v,k,P)=>{const w=d.el=c.el;let{patchFlag:S,dynamicChildren:E,dirs:U}=d;S|=c.patchFlag&16;const O=c.props||fe,W=d.props||fe;let $;p&&Ou(p,!1),($=W.onVnodeBeforeUpdate)&&uu($,p,d,c),U&&ju(d,c,p,"beforeUpdate"),p&&Ou(p,!0);const ee=v&&d.type!=="foreignObject";if(E?Pe(c.dynamicChildren,E,w,p,b,ee,k):P||Me(c,d,w,null,p,b,ee,k,!1),S>0){if(S&16)Re(w,d,O,W,p,b,v);else if(S&2&&O.class!==W.class&&i(w,"class",null,W.class,v),S&4&&i(w,"style",O.style,W.style,v),S&8){const se=d.dynamicProps;for(let Ce=0;Ce<se.length;Ce++){const de=se[Ce],He=O[de],qu=W[de];(qu!==He||de==="value")&&i(w,de,He,qu,v,c.children,p,b,x)}}S&1&&c.children!==d.children&&C(w,d.children)}else!P&&E==null&&Re(w,d,O,W,p,b,v);(($=W.onVnodeUpdated)||U)&&Oe(()=>{$&&uu($,p,d,c),U&&ju(d,c,p,"updated")},b)},Pe=(c,d,p,b,v,k,P)=>{for(let w=0;w<d.length;w++){const S=c[w],E=d[w],U=S.el&&(S.type===Ae||!Et(S,E)||S.shapeFlag&70)?f(S.el):p;F(S,E,U,null,b,v,k,P,!0)}},Re=(c,d,p,b,v,k,P)=>{if(p!==b){for(const w in b){if(Bn(w))continue;const S=b[w],E=p[w];S!==E&&w!=="value"&&i(c,w,E,S,P,d.children,v,k,x)}if(p!==fe)for(const w in p)!Bn(w)&&!(w in b)&&i(c,w,p[w],null,P,d.children,v,k,x);"value"in b&&i(c,"value",p.value,b.value)}},Au=(c,d,p,b,v,k,P,w,S)=>{const E=d.el=c?c.el:o(""),U=d.anchor=c?c.anchor:o("");let{patchFlag:O,dynamicChildren:W,slotScopeIds:$}=d;$&&(w=w?w.concat($):$),c==null?(n(E,p,b),n(U,p,b),ae(d.children,p,U,v,k,P,w,S)):O>0&&O&64&&W&&c.dynamicChildren?(Pe(c.dynamicChildren,W,p,v,k,P,w),(d.key!=null||v&&d===v.subTree)&&jo(c,d,!0)):Me(c,d,p,U,v,k,P,w,S)},We=(c,d,p,b,v,k,P,w,S)=>{d.slotScopeIds=w,c==null?d.shapeFlag&512?v.ctx.activate(d,p,b,P,S):ve(d,p,b,v,k,P,S):be(c,d,S)},ve=(c,d,p,b,v,k,P)=>{const w=c.component=_l(c,b,v);if(Eo(c)&&(w.ctx.renderer=ce),wl(w),w.asyncDep){if(v&&v.registerDep(w,le),!c.el){const S=w.subTree=N($u);y(null,S,d,p)}return}le(w,c,d,p,v,k,P)},be=(c,d,p)=>{const b=d.component=c.component;if(MC(c,d,p))if(b.asyncDep&&!b.asyncResolved){oe(b,d,p);return}else b.next=d,xC(b.update),b.update();else d.el=c.el,b.vnode=d},le=(c,d,p,b,v,k,P)=>{const w=()=>{if(c.isMounted){let{next:U,bu:O,u:W,parent:$,vnode:ee}=c,se=U,Ce;Ou(c,!1),U?(U.el=ee.el,oe(c,U,P)):U=ee,O&&Qn(O),(Ce=U.props&&U.props.onVnodeBeforeUpdate)&&uu(Ce,$,U,ee),Ou(c,!0);const de=Zn(c),He=c.subTree;c.subTree=de,F(He,de,f(He.el),L(He),c,v,k),U.el=de.el,se===null&&LC(c,de.el),W&&Oe(W,v),(Ce=U.props&&U.props.onVnodeUpdated)&&Oe(()=>uu(Ce,$,U,ee),v)}else{let U;const{el:O,props:W}=d,{bm:$,m:ee,parent:se}=c,Ce=mn(d);if(Ou(c,!1),$&&Qn($),!Ce&&(U=W&&W.onVnodeBeforeMount)&&uu(U,se,d),Ou(c,!0),O&&G){const de=()=>{c.subTree=Zn(c),G(O,c.subTree,c,v,null)};Ce?d.type.__asyncLoader().then(()=>!c.isUnmounted&&de()):de()}else{const de=c.subTree=Zn(c);F(null,de,p,b,c,v,k),d.el=de.el}if(ee&&Oe(ee,v),!Ce&&(U=W&&W.onVnodeMounted)){const de=d;Oe(()=>uu(U,se,de),v)}(d.shapeFlag&256||se&&mn(se.vnode)&&se.vnode.shapeFlag&256)&&c.a&&Oe(c.a,v),c.isMounted=!0,d=p=b=null}},S=c.effect=new Vr(w,()=>ui(E),c.scope),E=c.update=()=>S.run();E.id=c.uid,Ou(c,!0),E()},oe=(c,d,p)=>{d.component=c;const b=c.vnode.props;c.vnode=d,c.next=null,Cl(c,d.props,b,p),fl(c,d.children,p),Dt(),Oi(),ht()},Me=(c,d,p,b,v,k,P,w,S=!1)=>{const E=c&&c.children,U=c?c.shapeFlag:0,O=d.children,{patchFlag:W,shapeFlag:$}=d;if(W>0){if(W&128){su(E,O,p,b,v,k,P,w,S);return}else if(W&256){Yu(E,O,p,b,v,k,P,w,S);return}}$&8?(U&16&&x(E,v,k),O!==E&&C(p,O)):U&16?$&16?su(E,O,p,b,v,k,P,w,S):x(E,v,k,!0):(U&8&&C(p,""),$&16&&ae(O,p,b,v,k,P,w,S))},Yu=(c,d,p,b,v,k,P,w,S)=>{c=c||nt,d=d||nt;const E=c.length,U=d.length,O=Math.min(E,U);let W;for(W=0;W<O;W++){const $=d[W]=S?yu(d[W]):nu(d[W]);F(c[W],$,p,null,v,k,P,w,S)}E>U?x(c,v,k,!0,!1,O):ae(d,p,b,v,k,P,w,S,O)},su=(c,d,p,b,v,k,P,w,S)=>{let E=0;const U=d.length;let O=c.length-1,W=U-1;for(;E<=O&&E<=W;){const $=c[E],ee=d[E]=S?yu(d[E]):nu(d[E]);if(Et($,ee))F($,ee,p,null,v,k,P,w,S);else break;E++}for(;E<=O&&E<=W;){const $=c[O],ee=d[W]=S?yu(d[W]):nu(d[W]);if(Et($,ee))F($,ee,p,null,v,k,P,w,S);else break;O--,W--}if(E>O){if(E<=W){const $=W+1,ee=$<U?d[$].el:b;for(;E<=W;)F(null,d[E]=S?yu(d[E]):nu(d[E]),p,ee,v,k,P,w,S),E++}}else if(E>W)for(;E<=O;)ze(c[E],v,k,!0),E++;else{const $=E,ee=E,se=new Map;for(E=ee;E<=W;E++){const Le=d[E]=S?yu(d[E]):nu(d[E]);Le.key!=null&&se.set(Le.key,E)}let Ce,de=0;const He=W-ee+1;let qu=!1,Ei=0;const yt=new Array(He);for(E=0;E<He;E++)yt[E]=0;for(E=$;E<=O;E++){const Le=c[E];if(de>=He){ze(Le,v,k,!0);continue}let eu;if(Le.key!=null)eu=se.get(Le.key);else for(Ce=ee;Ce<=W;Ce++)if(yt[Ce-ee]===0&&Et(Le,d[Ce])){eu=Ce;break}eu===void 0?ze(Le,v,k,!0):(yt[eu-ee]=E+1,eu>=Ei?Ei=eu:qu=!0,F(Le,d[eu],p,null,v,k,P,w,S),de++)}const _i=qu?Dl(yt):nt;for(Ce=_i.length-1,E=He-1;E>=0;E--){const Le=ee+E,eu=d[Le],wi=Le+1<U?d[Le+1].el:b;yt[E]===0?F(null,eu,p,wi,v,k,P,w,S):qu&&(Ce<0||E!==_i[Ce]?Ze(eu,p,wi,2):Ce--)}}},Ze=(c,d,p,b,v=null)=>{const{el:k,type:P,transition:w,children:S,shapeFlag:E}=c;if(E&6){Ze(c.component.subTree,d,p,b);return}if(E&128){c.suspense.move(d,p,b);return}if(E&64){P.move(c,d,p,ce);return}if(P===Ae){n(k,d,p);for(let O=0;O<S.length;O++)Ze(S[O],d,p,b);n(c.anchor,d,p);return}if(P===er){z(c,d,p);return}if(b!==2&&E&1&&w)if(b===0)w.beforeEnter(k),n(k,d,p),Oe(()=>w.enter(k),v);else{const{leave:O,delayLeave:W,afterLeave:$}=w,ee=()=>n(k,d,p),se=()=>{O(k,()=>{ee(),$&&$()})};W?W(k,ee,se):se()}else n(k,d,p)},ze=(c,d,p,b=!1,v=!1)=>{const{type:k,props:P,ref:w,children:S,dynamicChildren:E,shapeFlag:U,patchFlag:O,dirs:W}=c;if(w!=null&&Ar(w,null,p,c,!0),U&256){d.ctx.deactivate(c);return}const $=U&1&&W,ee=!mn(c);let se;if(ee&&(se=P&&P.onVnodeBeforeUnmount)&&uu(se,d,c),U&6)M(c.component,p,b);else{if(U&128){c.suspense.unmount(p,b);return}$&&ju(c,null,d,"beforeUnmount"),U&64?c.type.remove(c,d,p,v,ce,b):E&&(k!==Ae||O>0&&O&64)?x(E,d,p,!1,!0):(k===Ae&&O&384||!v&&U&16)&&x(S,d,p),b&&bt(c)}(ee&&(se=P&&P.onVnodeUnmounted)||$)&&Oe(()=>{se&&uu(se,d,c),$&&ju(c,null,d,"unmounted")},p)},bt=c=>{const{type:d,el:p,anchor:b,transition:v}=c;if(d===Ae){g(p,b);return}if(d===er){H(c);return}const k=()=>{r(p),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(c.shapeFlag&1&&v&&!v.persisted){const{leave:P,delayLeave:w}=v,S=()=>P(p,k);w?w(c.el,k,S):S()}else k()},g=(c,d)=>{let p;for(;c!==d;)p=B(c),r(c),c=p;r(d)},M=(c,d,p)=>{const{bum:b,scope:v,update:k,subTree:P,um:w}=c;b&&Qn(b),v.stop(),k&&(k.active=!1,ze(P,c,d,p)),w&&Oe(w,d),Oe(()=>{c.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&c.asyncDep&&!c.asyncResolved&&c.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},x=(c,d,p,b=!1,v=!1,k=0)=>{for(let P=k;P<c.length;P++)ze(c[P],d,p,b,v)},L=c=>c.shapeFlag&6?L(c.component.subTree):c.shapeFlag&128?c.suspense.next():B(c.anchor||c.el),re=(c,d,p)=>{c==null?d._vnode&&ze(d._vnode,null,null,!0):F(d._vnode||null,c,d,null,null,null,p),Oi(),Ao(),d._vnode=c},ce={p:F,um:ze,m:Ze,r:bt,mt:ve,mc:ae,pc:Me,pbc:Pe,n:L,o:e};let q,G;return u&&([q,G]=u(ce)),{render:re,hydrate:q,createApp:Bl(re,q)}}function Ou({effect:e,update:u},t){e.allowRecurse=u.allowRecurse=t}function jo(e,u,t=!1){const n=e.children,r=u.children;if(V(n)&&V(r))for(let i=0;i<n.length;i++){const a=n[i];let o=r[i];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=r[i]=yu(r[i]),o.el=a.el),t||jo(a,o))}}function Dl(e){const u=e.slice(),t=[0];let n,r,i,a,o;const s=e.length;for(n=0;n<s;n++){const l=e[n];if(l!==0){if(r=t[t.length-1],e[r]<l){u[n]=r,t.push(n);continue}for(i=0,a=t.length-1;i<a;)o=i+a>>1,e[t[o]]<l?i=o+1:a=o;l<e[t[i]]&&(i>0&&(u[n]=t[i-1]),t[i]=n)}}for(i=t.length,a=t[i-1];i-- >0;)t[i]=a,a=u[a];return t}const hl=e=>e.__isTeleport,Ae=Symbol(void 0),ii=Symbol(void 0),$u=Symbol(void 0),er=Symbol(void 0),St=[];let Ge=null;function J(e=!1){St.push(Ge=e?null:[])}function Al(){St.pop(),Ge=St[St.length-1]||null}let Ut=1;function $i(e){Ut+=e}function Oo(e){return e.dynamicChildren=Ut>0?Ge||nt:null,Al(),Ut>0&&Ge&&Ge.push(e),e}function X(e,u,t,n,r,i){return Oo(A(e,u,t,n,r,i,!0))}function Hu(e,u,t,n,r){return Oo(N(e,u,t,n,r,!0))}function gr(e){return e?e.__v_isVNode===!0:!1}function Et(e,u){return e.type===u.type&&e.key===u.key}const zn="__vInternal",Ro=({key:e})=>e!=null?e:null,Dn=({ref:e,ref_key:u,ref_for:t})=>e!=null?we(e)||ge(e)||Y(e)?{i:Ve,r:e,k:u,f:!!t}:e:null;function A(e,u=null,t=null,n=0,r=null,i=e===Ae?0:1,a=!1,o=!1){const s={__v_isVNode:!0,__v_skip:!0,type:e,props:u,key:u&&Ro(u),ref:u&&Dn(u),scopeId:Un,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:n,dynamicProps:r,dynamicChildren:null,appContext:null};return o?(ai(s,t),i&128&&e.normalize(s)):t&&(s.shapeFlag|=we(t)?8:16),Ut>0&&!a&&Ge&&(s.patchFlag>0||i&6)&&s.patchFlag!==32&&Ge.push(s),s}const N=gl;function gl(e,u=null,t=null,n=0,r=null,i=!1){if((!e||e===el)&&(e=$u),gr(e)){const o=ct(e,u,!0);return t&&ai(o,t),Ut>0&&!i&&Ge&&(o.shapeFlag&6?Ge[Ge.indexOf(e)]=o:Ge.push(o)),o.patchFlag|=-2,o}if(Pl(e)&&(e=e.__vccOpts),u){u=vl(u);let{class:o,style:s}=u;o&&!we(o)&&(u.class=h(o)),De(s)&&(lo(s)&&!V(s)&&(s=Te({},s)),u.style=In(s))}const a=we(e)?1:NC(e)?128:hl(e)?64:De(e)?4:Y(e)?2:0;return A(e,u,t,n,r,a,i,!0)}function vl(e){return e?lo(e)||zn in e?Te({},e):e:null}function ct(e,u,t=!1){const{props:n,ref:r,patchFlag:i,children:a}=e,o=u?bl(n||{},u):n;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:o,key:o&&Ro(o),ref:u&&u.ref?t&&r?V(r)?r.concat(Dn(u)):[r,Dn(u)]:Dn(u):r,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:u&&e.type!==Ae?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&ct(e.ssContent),ssFallback:e.ssFallback&&ct(e.ssFallback),el:e.el,anchor:e.anchor}}function Se(e=" ",u=0){return N(ii,null,e,u)}function au(e="",u=!1){return u?(J(),Hu($u,null,e)):N($u,null,e)}function nu(e){return e==null||typeof e=="boolean"?N($u):V(e)?N(Ae,null,e.slice()):typeof e=="object"?yu(e):N(ii,null,String(e))}function yu(e){return e.el===null||e.memo?e:ct(e)}function ai(e,u){let t=0;const{shapeFlag:n}=e;if(u==null)u=null;else if(V(u))t=16;else if(typeof u=="object")if(n&65){const r=u.default;r&&(r._c&&(r._d=!1),ai(e,r()),r._c&&(r._d=!0));return}else{t=32;const r=u._;!r&&!(zn in u)?u._ctx=Ve:r===3&&Ve&&(Ve.slots._===1?u._=1:(u._=2,e.patchFlag|=1024))}else Y(u)?(u={default:u,_ctx:Ve},t=32):(u=String(u),n&64?(t=16,u=[Se(u)]):t=8);e.children=u,e.shapeFlag|=t}function bl(...e){const u={};for(let t=0;t<e.length;t++){const n=e[t];for(const r in n)if(r==="class")u.class!==n.class&&(u.class=h([u.class,n.class]));else if(r==="style")u.style=In([u.style,n.style]);else if(Tn(r)){const i=u[r],a=n[r];a&&i!==a&&!(V(i)&&i.includes(a))&&(u[r]=i?[].concat(i,a):a)}else r!==""&&(u[r]=n[r])}return u}function uu(e,u,t,n=null){Xe(e,u,7,[t,n])}const yl=To();let El=0;function _l(e,u,t){const n=e.type,r=(u?u.appContext:e.appContext)||yl,i={uid:El++,vnode:e,type:n,parent:u,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new Xa(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:u?u.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:xo(n,r),emitsOptions:vo(n,r),emit:null,emitted:null,propsDefaults:fe,inheritAttrs:n.inheritAttrs,ctx:fe,data:fe,props:fe,attrs:fe,slots:fe,refs:fe,setupState:fe,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=u?u.root:i,i.emit=IC.bind(null,i),e.ce&&e.ce(i),i}let _e=null;const Mo=()=>_e||Ve,ft=e=>{_e=e,e.scope.on()},Ju=()=>{_e&&_e.scope.off(),_e=null};function Lo(e){return e.vnode.shapeFlag&4}let Wt=!1;function wl(e,u=!1){Wt=u;const{props:t,children:n}=e.vnode,r=Lo(e);sl(e,t,r,u),cl(e,n);const i=r?kl(e,u):void 0;return Wt=!1,i}function kl(e,u){const t=e.type;e.accessCache=Object.create(null),e.proxy=lt(new Proxy(e.ctx,tl));const{setup:n}=t;if(n){const r=e.setupContext=n.length>1?xl(e):null;ft(e),Dt();const i=Su(n,e,0,[e.props,r]);if(ht(),Ju(),Ga(i)){if(i.then(Ju,Ju),u)return i.then(a=>{Ki(e,a,u)}).catch(a=>{Ln(a,e,0)});e.asyncDep=i}else Ki(e,i,u)}else No(e,u)}function Ki(e,u,t){Y(u)?e.type.__ssrInlineRender?e.ssrRender=u:e.render=u:De(u)&&(e.setupState=po(u)),No(e,t)}let Vi;function No(e,u,t){const n=e.type;if(!e.render){if(!u&&Vi&&!n.render){const r=n.template||ni(e).template;if(r){const{isCustomElement:i,compilerOptions:a}=e.appContext.config,{delimiters:o,compilerOptions:s}=n,l=Te(Te({isCustomElement:i,delimiters:o},a),s);n.render=Vi(r,l)}}e.render=n.render||qe}ft(e),Dt(),nl(e),ht(),Ju()}function Sl(e){return new Proxy(e.attrs,{get(u,t){return Ne(e,"get","$attrs"),u[t]}})}function xl(e){const u=n=>{e.exposed=n||{}};let t;return{get attrs(){return t||(t=Sl(e))},slots:e.slots,emit:e.emit,expose:u}}function oi(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(po(lt(e.exposed)),{get(u,t){if(t in u)return u[t];if(t in yn)return yn[t](e)}}))}function Fl(e,u=!0){return Y(e)?e.displayName||e.name:e.name||u&&e.__name}function Pl(e){return Y(e)&&"__vccOpts"in e}const me=(e,u)=>wC(e,u,Wt);function Hn(e,u,t){const n=arguments.length;return n===2?De(u)&&!V(u)?gr(u)?N(e,null,[u]):N(e,u):N(e,null,u):(n>3?t=Array.prototype.slice.call(arguments,2):n===3&&gr(t)&&(t=[t]),N(e,u,t))}const Il="3.2.39",Tl="http://www.w3.org/2000/svg",Lu=typeof document<"u"?document:null,Gi=Lu&&Lu.createElement("template"),jl={insert:(e,u,t)=>{u.insertBefore(e,t||null)},remove:e=>{const u=e.parentNode;u&&u.removeChild(e)},createElement:(e,u,t,n)=>{const r=u?Lu.createElementNS(Tl,e):Lu.createElement(e,t?{is:t}:void 0);return e==="select"&&n&&n.multiple!=null&&r.setAttribute("multiple",n.multiple),r},createText:e=>Lu.createTextNode(e),createComment:e=>Lu.createComment(e),setText:(e,u)=>{e.nodeValue=u},setElementText:(e,u)=>{e.textContent=u},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Lu.querySelector(e),setScopeId(e,u){e.setAttribute(u,"")},cloneNode(e){const u=e.cloneNode(!0);return"_value"in e&&(u._value=e._value),u},insertStaticContent(e,u,t,n,r,i){const a=t?t.previousSibling:u.lastChild;if(r&&(r===i||r.nextSibling))for(;u.insertBefore(r.cloneNode(!0),t),!(r===i||!(r=r.nextSibling)););else{Gi.innerHTML=n?`<svg>${e}</svg>`:e;const o=Gi.content;if(n){const s=o.firstChild;for(;s.firstChild;)o.appendChild(s.firstChild);o.removeChild(s)}u.insertBefore(o,t)}return[a?a.nextSibling:u.firstChild,t?t.previousSibling:u.lastChild]}};function Ol(e,u,t){const n=e._vtc;n&&(u=(u?[u,...n]:[...n]).join(" ")),u==null?e.removeAttribute("class"):t?e.setAttribute("class",u):e.className=u}function Rl(e,u,t){const n=e.style,r=we(t);if(t&&!r){for(const i in t)vr(n,i,t[i]);if(u&&!we(u))for(const i in u)t[i]==null&&vr(n,i,"")}else{const i=n.display;r?u!==t&&(n.cssText=t):u&&e.removeAttribute("style"),"_vod"in e&&(n.display=i)}}const Yi=/\s*!important$/;function vr(e,u,t){if(V(t))t.forEach(n=>vr(e,u,n));else if(t==null&&(t=""),u.startsWith("--"))e.setProperty(u,t);else{const n=Ml(e,u);Yi.test(t)?e.setProperty(mt(n),t.replace(Yi,""),"important"):e[n]=t}}const qi=["Webkit","Moz","ms"],ur={};function Ml(e,u){const t=ur[u];if(t)return t;let n=ou(u);if(n!=="filter"&&n in e)return ur[u]=n;n=Rn(n);for(let r=0;r<qi.length;r++){const i=qi[r]+n;if(i in e)return ur[u]=i}return u}const Xi="http://www.w3.org/1999/xlink";function Ll(e,u,t,n,r){if(n&&u.startsWith("xlink:"))t==null?e.removeAttributeNS(Xi,u.slice(6,u.length)):e.setAttributeNS(Xi,u,t);else{const i=js(u);t==null||i&&!$a(t)?e.removeAttribute(u):e.setAttribute(u,i?"":t)}}function Nl(e,u,t,n,r,i,a){if(u==="innerHTML"||u==="textContent"){n&&a(n,r,i),e[u]=t==null?"":t;return}if(u==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=t;const s=t==null?"":t;(e.value!==s||e.tagName==="OPTION")&&(e.value=s),t==null&&e.removeAttribute(u);return}let o=!1;if(t===""||t==null){const s=typeof e[u];s==="boolean"?t=$a(t):t==null&&s==="string"?(t="",o=!0):s==="number"&&(t=0,o=!0)}try{e[u]=t}catch{}o&&e.removeAttribute(u)}const[Uo,Ul]=(()=>{let e=Date.now,u=!1;if(typeof window<"u"){Date.now()>document.createEvent("Event").timeStamp&&(e=performance.now.bind(performance));const t=navigator.userAgent.match(/firefox\/(\d+)/i);u=!!(t&&Number(t[1])<=53)}return[e,u]})();let br=0;const Wl=Promise.resolve(),zl=()=>{br=0},Hl=()=>br||(Wl.then(zl),br=Uo());function Jl(e,u,t,n){e.addEventListener(u,t,n)}function $l(e,u,t,n){e.removeEventListener(u,t,n)}function Kl(e,u,t,n,r=null){const i=e._vei||(e._vei={}),a=i[u];if(n&&a)a.value=n;else{const[o,s]=Vl(u);if(n){const l=i[u]=Gl(n,r);Jl(e,o,l,s)}else a&&($l(e,o,a,s),i[u]=void 0)}}const Qi=/(?:Once|Passive|Capture)$/;function Vl(e){let u;if(Qi.test(e)){u={};let n;for(;n=e.match(Qi);)e=e.slice(0,e.length-n[0].length),u[n[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):mt(e.slice(2)),u]}function Gl(e,u){const t=n=>{const r=n.timeStamp||Uo();(Ul||r>=t.attached-1)&&Xe(Yl(n,t.value),u,5,[n])};return t.value=e,t.attached=Hl(),t}function Yl(e,u){if(V(u)){const t=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{t.call(e),e._stopped=!0},u.map(n=>r=>!r._stopped&&n&&n(r))}else return u}const Zi=/^on[a-z]/,ql=(e,u,t,n,r=!1,i,a,o,s)=>{u==="class"?Ol(e,n,r):u==="style"?Rl(e,t,n):Tn(u)?zr(u)||Kl(e,u,t,n,a):(u[0]==="."?(u=u.slice(1),!0):u[0]==="^"?(u=u.slice(1),!1):Xl(e,u,n,r))?Nl(e,u,n,i,a,o,s):(u==="true-value"?e._trueValue=n:u==="false-value"&&(e._falseValue=n),Ll(e,u,n,r))};function Xl(e,u,t,n){return n?!!(u==="innerHTML"||u==="textContent"||u in e&&Zi.test(u)&&Y(t)):u==="spellcheck"||u==="draggable"||u==="translate"||u==="form"||u==="list"&&e.tagName==="INPUT"||u==="type"&&e.tagName==="TEXTAREA"||Zi.test(u)&&we(t)?!1:u in e}const Ql=Te({patchProp:ql},jl);let ea;function Zl(){return ea||(ea=pl(Ql))}const ec=(...e)=>{const u=Zl().createApp(...e),{mount:t}=u;return u.mount=n=>{const r=uc(n);if(!r)return;const i=u._component;!Y(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.innerHTML="";const a=t(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),a},u};function uc(e){return we(e)?document.querySelector(e):e}var tc=!1;/*!
  * pinia v2.0.22
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */let Wo;const Jn=e=>Wo=e,zo=Symbol();function yr(e){return e&&typeof e=="object"&&Object.prototype.toString.call(e)==="[object Object]"&&typeof e.toJSON!="function"}var xt;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(xt||(xt={}));function nc(){const e=Qa(!0),u=e.run(()=>Gt({}));let t=[],n=[];const r=lt({install(i){Jn(r),r._a=i,i.provide(zo,r),i.config.globalProperties.$pinia=r,n.forEach(a=>t.push(a)),n=[]},use(i){return!this._a&&!tc?n.push(i):t.push(i),this},_p:t,_a:null,_e:e,_s:new Map,state:u});return r}const Ho=()=>{};function ua(e,u,t,n=Ho){e.push(u);const r=()=>{const i=e.indexOf(u);i>-1&&(e.splice(i,1),n())};return!t&&Mo()&&ti(r),r}function Xu(e,...u){e.slice().forEach(t=>{t(...u)})}function Er(e,u){e instanceof Map&&u instanceof Map&&u.forEach((t,n)=>e.set(n,t)),e instanceof Set&&u instanceof Set&&u.forEach(e.add,e);for(const t in u){if(!u.hasOwnProperty(t))continue;const n=u[t],r=e[t];yr(r)&&yr(n)&&e.hasOwnProperty(t)&&!ge(n)&&!ku(n)?e[t]=Er(r,n):e[t]=n}return e}const rc=Symbol();function ic(e){return!yr(e)||!e.hasOwnProperty(rc)}const{assign:cu}=Object;function ac(e){return!!(ge(e)&&e.effect)}function oc(e,u,t,n){const{state:r,actions:i,getters:a}=u,o=t.state.value[e];let s;function l(){o||(t.state.value[e]=r?r():{});const C=bC(t.state.value[e]);return cu(C,i,Object.keys(a||{}).reduce((f,B)=>(f[B]=lt(me(()=>{Jn(t);const m=t._s.get(e);return a[B].call(m,m)})),f),{}))}return s=Jo(e,l,u,t,n,!0),s.$reset=function(){const f=r?r():{};this.$patch(B=>{cu(B,f)})},s}function Jo(e,u,t={},n,r,i){let a;const o=cu({actions:{}},t),s={deep:!0};let l,C,f=lt([]),B=lt([]),m;const _=n.state.value[e];!i&&!_&&(n.state.value[e]={}),Gt({});let T;function F(K){let Q;l=C=!1,typeof K=="function"?(K(n.state.value[e]),Q={type:xt.patchFunction,storeId:e,events:m}):(Er(n.state.value[e],K),Q={type:xt.patchObject,payload:K,storeId:e,events:m});const ae=T=Symbol();ei().then(()=>{T===ae&&(l=!0)}),C=!0,Xu(f,Q,n.state.value[e])}const D=Ho;function y(){a.stop(),f=[],B=[],n._s.delete(e)}function j(K,Q){return function(){Jn(n);const ae=Array.from(arguments),xe=[],Pe=[];function Re(ve){xe.push(ve)}function Au(ve){Pe.push(ve)}Xu(B,{args:ae,name:K,store:H,after:Re,onError:Au});let We;try{We=Q.apply(this&&this.$id===e?this:H,ae)}catch(ve){throw Xu(Pe,ve),ve}return We instanceof Promise?We.then(ve=>(Xu(xe,ve),ve)).catch(ve=>(Xu(Pe,ve),Promise.reject(ve))):(Xu(xe,We),We)}}const z={_p:n,$id:e,$onAction:ua.bind(null,B),$patch:F,$reset:D,$subscribe(K,Q={}){const ae=ua(f,K,Q.detached,()=>xe()),xe=a.run(()=>zu(()=>n.state.value[e],Pe=>{(Q.flush==="sync"?C:l)&&K({storeId:e,type:xt.direct,events:m},Pe)},cu({},s,Q)));return ae},$dispose:y},H=At(cu({},z));n._s.set(e,H);const ne=n._e.run(()=>(a=Qa(),a.run(()=>u())));for(const K in ne){const Q=ne[K];if(ge(Q)&&!ac(Q)||ku(Q))i||(_&&ic(Q)&&(ge(Q)?Q.value=_[K]:Er(Q,_[K])),n.state.value[e][K]=Q);else if(typeof Q=="function"){const ae=j(K,Q);ne[K]=ae,o.actions[K]=Q}}return cu(H,ne),cu(te(H),ne),Object.defineProperty(H,"$state",{get:()=>n.state.value[e],set:K=>{F(Q=>{cu(Q,K)})}}),n._p.forEach(K=>{cu(H,a.run(()=>K({store:H,app:n._a,pinia:n,options:o})))}),_&&i&&t.hydrate&&t.hydrate(H.$state,_),l=!0,C=!0,H}function $o(e,u,t){let n,r;const i=typeof u=="function";typeof e=="string"?(n=e,r=i?t:u):(r=e,n=e.id);function a(o,s){const l=Mo();return o=o||l&&fu(zo),o&&Jn(o),o=Wo,o._s.has(n)||(i?Jo(n,u,r,o):oc(n,r,o)),o._s.get(n)}return a.$id=n,a}/*!
  * vue-router v4.1.5
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Zu=typeof window<"u";function sc(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const ie=Object.assign;function tr(e,u){const t={};for(const n in u){const r=u[n];t[n]=Qe(r)?r.map(e):e(r)}return t}const Ft=()=>{},Qe=Array.isArray,Cc=/\/$/,lc=e=>e.replace(Cc,"");function nr(e,u,t="/"){let n,r={},i="",a="";const o=u.indexOf("#");let s=u.indexOf("?");return o<s&&o>=0&&(s=-1),s>-1&&(n=u.slice(0,s),i=u.slice(s+1,o>-1?o:u.length),r=e(i)),o>-1&&(n=n||u.slice(0,o),a=u.slice(o,u.length)),n=Bc(n!=null?n:u,t),{fullPath:n+(i&&"?")+i+a,path:n,query:r,hash:a}}function cc(e,u){const t=u.query?e(u.query):"";return u.path+(t&&"?")+t+(u.hash||"")}function ta(e,u){return!u||!e.toLowerCase().startsWith(u.toLowerCase())?e:e.slice(u.length)||"/"}function fc(e,u,t){const n=u.matched.length-1,r=t.matched.length-1;return n>-1&&n===r&&dt(u.matched[n],t.matched[r])&&Ko(u.params,t.params)&&e(u.query)===e(t.query)&&u.hash===t.hash}function dt(e,u){return(e.aliasOf||e)===(u.aliasOf||u)}function Ko(e,u){if(Object.keys(e).length!==Object.keys(u).length)return!1;for(const t in e)if(!dc(e[t],u[t]))return!1;return!0}function dc(e,u){return Qe(e)?na(e,u):Qe(u)?na(u,e):e===u}function na(e,u){return Qe(u)?e.length===u.length&&e.every((t,n)=>t===u[n]):e.length===1&&e[0]===u}function Bc(e,u){if(e.startsWith("/"))return e;if(!e)return u;const t=u.split("/"),n=e.split("/");let r=t.length-1,i,a;for(i=0;i<n.length;i++)if(a=n[i],a!==".")if(a==="..")r>1&&r--;else break;return t.slice(0,r).join("/")+"/"+n.slice(i-(i===n.length?1:0)).join("/")}var zt;(function(e){e.pop="pop",e.push="push"})(zt||(zt={}));var Pt;(function(e){e.back="back",e.forward="forward",e.unknown=""})(Pt||(Pt={}));function pc(e){if(!e)if(Zu){const u=document.querySelector("base");e=u&&u.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),lc(e)}const mc=/^[^#]+#/;function Dc(e,u){return e.replace(mc,"#")+u}function hc(e,u){const t=document.documentElement.getBoundingClientRect(),n=e.getBoundingClientRect();return{behavior:u.behavior,left:n.left-t.left-(u.left||0),top:n.top-t.top-(u.top||0)}}const $n=()=>({left:window.pageXOffset,top:window.pageYOffset});function Ac(e){let u;if("el"in e){const t=e.el,n=typeof t=="string"&&t.startsWith("#"),r=typeof t=="string"?n?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!r)return;u=hc(r,e)}else u=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(u):window.scrollTo(u.left!=null?u.left:window.pageXOffset,u.top!=null?u.top:window.pageYOffset)}function ra(e,u){return(history.state?history.state.position-u:-1)+e}const _r=new Map;function gc(e,u){_r.set(e,u)}function vc(e){const u=_r.get(e);return _r.delete(e),u}let bc=()=>location.protocol+"//"+location.host;function Vo(e,u){const{pathname:t,search:n,hash:r}=u,i=e.indexOf("#");if(i>-1){let o=r.includes(e.slice(i))?e.slice(i).length:1,s=r.slice(o);return s[0]!=="/"&&(s="/"+s),ta(s,"")}return ta(t,e)+n+r}function yc(e,u,t,n){let r=[],i=[],a=null;const o=({state:B})=>{const m=Vo(e,location),_=t.value,T=u.value;let F=0;if(B){if(t.value=m,u.value=B,a&&a===_){a=null;return}F=T?B.position-T.position:0}else n(m);r.forEach(D=>{D(t.value,_,{delta:F,type:zt.pop,direction:F?F>0?Pt.forward:Pt.back:Pt.unknown})})};function s(){a=t.value}function l(B){r.push(B);const m=()=>{const _=r.indexOf(B);_>-1&&r.splice(_,1)};return i.push(m),m}function C(){const{history:B}=window;!B.state||B.replaceState(ie({},B.state,{scroll:$n()}),"")}function f(){for(const B of i)B();i=[],window.removeEventListener("popstate",o),window.removeEventListener("beforeunload",C)}return window.addEventListener("popstate",o),window.addEventListener("beforeunload",C),{pauseListeners:s,listen:l,destroy:f}}function ia(e,u,t,n=!1,r=!1){return{back:e,current:u,forward:t,replaced:n,position:window.history.length,scroll:r?$n():null}}function Ec(e){const{history:u,location:t}=window,n={value:Vo(e,t)},r={value:u.state};r.value||i(n.value,{back:null,current:n.value,forward:null,position:u.length-1,replaced:!0,scroll:null},!0);function i(s,l,C){const f=e.indexOf("#"),B=f>-1?(t.host&&document.querySelector("base")?e:e.slice(f))+s:bc()+e+s;try{u[C?"replaceState":"pushState"](l,"",B),r.value=l}catch(m){console.error(m),t[C?"replace":"assign"](B)}}function a(s,l){const C=ie({},u.state,ia(r.value.back,s,r.value.forward,!0),l,{position:r.value.position});i(s,C,!0),n.value=s}function o(s,l){const C=ie({},r.value,u.state,{forward:s,scroll:$n()});i(C.current,C,!0);const f=ie({},ia(n.value,s,null),{position:C.position+1},l);i(s,f,!1),n.value=s}return{location:n,state:r,push:o,replace:a}}function _c(e){e=pc(e);const u=Ec(e),t=yc(e,u.state,u.location,u.replace);function n(i,a=!0){a||t.pauseListeners(),history.go(i)}const r=ie({location:"",base:e,go:n,createHref:Dc.bind(null,e)},u,t);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>u.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>u.state.value}),r}function wc(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),_c(e)}function kc(e){return typeof e=="string"||e&&typeof e=="object"}function Go(e){return typeof e=="string"||typeof e=="symbol"}const vu={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Yo=Symbol("");var aa;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(aa||(aa={}));function Bt(e,u){return ie(new Error,{type:e,[Yo]:!0},u)}function Cu(e,u){return e instanceof Error&&Yo in e&&(u==null||!!(e.type&u))}const oa="[^/]+?",Sc={sensitive:!1,strict:!1,start:!0,end:!0},xc=/[.+*?^${}()[\]/\\]/g;function Fc(e,u){const t=ie({},Sc,u),n=[];let r=t.start?"^":"";const i=[];for(const l of e){const C=l.length?[]:[90];t.strict&&!l.length&&(r+="/");for(let f=0;f<l.length;f++){const B=l[f];let m=40+(t.sensitive?.25:0);if(B.type===0)f||(r+="/"),r+=B.value.replace(xc,"\\$&"),m+=40;else if(B.type===1){const{value:_,repeatable:T,optional:F,regexp:D}=B;i.push({name:_,repeatable:T,optional:F});const y=D||oa;if(y!==oa){m+=10;try{new RegExp(`(${y})`)}catch(z){throw new Error(`Invalid custom RegExp for param "${_}" (${y}): `+z.message)}}let j=T?`((?:${y})(?:/(?:${y}))*)`:`(${y})`;f||(j=F&&l.length<2?`(?:/${j})`:"/"+j),F&&(j+="?"),r+=j,m+=20,F&&(m+=-8),T&&(m+=-20),y===".*"&&(m+=-50)}C.push(m)}n.push(C)}if(t.strict&&t.end){const l=n.length-1;n[l][n[l].length-1]+=.7000000000000001}t.strict||(r+="/?"),t.end?r+="$":t.strict&&(r+="(?:/|$)");const a=new RegExp(r,t.sensitive?"":"i");function o(l){const C=l.match(a),f={};if(!C)return null;for(let B=1;B<C.length;B++){const m=C[B]||"",_=i[B-1];f[_.name]=m&&_.repeatable?m.split("/"):m}return f}function s(l){let C="",f=!1;for(const B of e){(!f||!C.endsWith("/"))&&(C+="/"),f=!1;for(const m of B)if(m.type===0)C+=m.value;else if(m.type===1){const{value:_,repeatable:T,optional:F}=m,D=_ in l?l[_]:"";if(Qe(D)&&!T)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const y=Qe(D)?D.join("/"):D;if(!y)if(F)B.length<2&&(C.endsWith("/")?C=C.slice(0,-1):f=!0);else throw new Error(`Missing required param "${_}"`);C+=y}}return C||"/"}return{re:a,score:n,keys:i,parse:o,stringify:s}}function Pc(e,u){let t=0;for(;t<e.length&&t<u.length;){const n=u[t]-e[t];if(n)return n;t++}return e.length<u.length?e.length===1&&e[0]===40+40?-1:1:e.length>u.length?u.length===1&&u[0]===40+40?1:-1:0}function Ic(e,u){let t=0;const n=e.score,r=u.score;for(;t<n.length&&t<r.length;){const i=Pc(n[t],r[t]);if(i)return i;t++}if(Math.abs(r.length-n.length)===1){if(sa(n))return 1;if(sa(r))return-1}return r.length-n.length}function sa(e){const u=e[e.length-1];return e.length>0&&u[u.length-1]<0}const Tc={type:0,value:""},jc=/[a-zA-Z0-9_]/;function Oc(e){if(!e)return[[]];if(e==="/")return[[Tc]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function u(m){throw new Error(`ERR (${t})/"${l}": ${m}`)}let t=0,n=t;const r=[];let i;function a(){i&&r.push(i),i=[]}let o=0,s,l="",C="";function f(){!l||(t===0?i.push({type:0,value:l}):t===1||t===2||t===3?(i.length>1&&(s==="*"||s==="+")&&u(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:C,repeatable:s==="*"||s==="+",optional:s==="*"||s==="?"})):u("Invalid state to consume buffer"),l="")}function B(){l+=s}for(;o<e.length;){if(s=e[o++],s==="\\"&&t!==2){n=t,t=4;continue}switch(t){case 0:s==="/"?(l&&f(),a()):s===":"?(f(),t=1):B();break;case 4:B(),t=n;break;case 1:s==="("?t=2:jc.test(s)?B():(f(),t=0,s!=="*"&&s!=="?"&&s!=="+"&&o--);break;case 2:s===")"?C[C.length-1]=="\\"?C=C.slice(0,-1)+s:t=3:C+=s;break;case 3:f(),t=0,s!=="*"&&s!=="?"&&s!=="+"&&o--,C="";break;default:u("Unknown state");break}}return t===2&&u(`Unfinished custom RegExp for param "${l}"`),f(),a(),r}function Rc(e,u,t){const n=Fc(Oc(e.path),t),r=ie(n,{record:e,parent:u,children:[],alias:[]});return u&&!r.record.aliasOf==!u.record.aliasOf&&u.children.push(r),r}function Mc(e,u){const t=[],n=new Map;u=ca({strict:!1,end:!0,sensitive:!1},u);function r(C){return n.get(C)}function i(C,f,B){const m=!B,_=Lc(C);_.aliasOf=B&&B.record;const T=ca(u,C),F=[_];if("alias"in C){const j=typeof C.alias=="string"?[C.alias]:C.alias;for(const z of j)F.push(ie({},_,{components:B?B.record.components:_.components,path:z,aliasOf:B?B.record:_}))}let D,y;for(const j of F){const{path:z}=j;if(f&&z[0]!=="/"){const H=f.record.path,ne=H[H.length-1]==="/"?"":"/";j.path=f.record.path+(z&&ne+z)}if(D=Rc(j,f,T),B?B.alias.push(D):(y=y||D,y!==D&&y.alias.push(D),m&&C.name&&!la(D)&&a(C.name)),_.children){const H=_.children;for(let ne=0;ne<H.length;ne++)i(H[ne],D,B&&B.children[ne])}B=B||D,s(D)}return y?()=>{a(y)}:Ft}function a(C){if(Go(C)){const f=n.get(C);f&&(n.delete(C),t.splice(t.indexOf(f),1),f.children.forEach(a),f.alias.forEach(a))}else{const f=t.indexOf(C);f>-1&&(t.splice(f,1),C.record.name&&n.delete(C.record.name),C.children.forEach(a),C.alias.forEach(a))}}function o(){return t}function s(C){let f=0;for(;f<t.length&&Ic(C,t[f])>=0&&(C.record.path!==t[f].record.path||!qo(C,t[f]));)f++;t.splice(f,0,C),C.record.name&&!la(C)&&n.set(C.record.name,C)}function l(C,f){let B,m={},_,T;if("name"in C&&C.name){if(B=n.get(C.name),!B)throw Bt(1,{location:C});T=B.record.name,m=ie(Ca(f.params,B.keys.filter(y=>!y.optional).map(y=>y.name)),C.params&&Ca(C.params,B.keys.map(y=>y.name))),_=B.stringify(m)}else if("path"in C)_=C.path,B=t.find(y=>y.re.test(_)),B&&(m=B.parse(_),T=B.record.name);else{if(B=f.name?n.get(f.name):t.find(y=>y.re.test(f.path)),!B)throw Bt(1,{location:C,currentLocation:f});T=B.record.name,m=ie({},f.params,C.params),_=B.stringify(m)}const F=[];let D=B;for(;D;)F.unshift(D.record),D=D.parent;return{name:T,path:_,params:m,matched:F,meta:Uc(F)}}return e.forEach(C=>i(C)),{addRoute:i,resolve:l,removeRoute:a,getRoutes:o,getRecordMatcher:r}}function Ca(e,u){const t={};for(const n of u)n in e&&(t[n]=e[n]);return t}function Lc(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:Nc(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function Nc(e){const u={},t=e.props||!1;if("component"in e)u.default=t;else for(const n in e.components)u[n]=typeof t=="boolean"?t:t[n];return u}function la(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Uc(e){return e.reduce((u,t)=>ie(u,t.meta),{})}function ca(e,u){const t={};for(const n in e)t[n]=n in u?u[n]:e[n];return t}function qo(e,u){return u.children.some(t=>t===e||qo(e,t))}const Xo=/#/g,Wc=/&/g,zc=/\//g,Hc=/=/g,Jc=/\?/g,Qo=/\+/g,$c=/%5B/g,Kc=/%5D/g,Zo=/%5E/g,Vc=/%60/g,es=/%7B/g,Gc=/%7C/g,us=/%7D/g,Yc=/%20/g;function si(e){return encodeURI(""+e).replace(Gc,"|").replace($c,"[").replace(Kc,"]")}function qc(e){return si(e).replace(es,"{").replace(us,"}").replace(Zo,"^")}function wr(e){return si(e).replace(Qo,"%2B").replace(Yc,"+").replace(Xo,"%23").replace(Wc,"%26").replace(Vc,"`").replace(es,"{").replace(us,"}").replace(Zo,"^")}function Xc(e){return wr(e).replace(Hc,"%3D")}function Qc(e){return si(e).replace(Xo,"%23").replace(Jc,"%3F")}function Zc(e){return e==null?"":Qc(e).replace(zc,"%2F")}function _n(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function ef(e){const u={};if(e===""||e==="?")return u;const n=(e[0]==="?"?e.slice(1):e).split("&");for(let r=0;r<n.length;++r){const i=n[r].replace(Qo," "),a=i.indexOf("="),o=_n(a<0?i:i.slice(0,a)),s=a<0?null:_n(i.slice(a+1));if(o in u){let l=u[o];Qe(l)||(l=u[o]=[l]),l.push(s)}else u[o]=s}return u}function fa(e){let u="";for(let t in e){const n=e[t];if(t=Xc(t),n==null){n!==void 0&&(u+=(u.length?"&":"")+t);continue}(Qe(n)?n.map(i=>i&&wr(i)):[n&&wr(n)]).forEach(i=>{i!==void 0&&(u+=(u.length?"&":"")+t,i!=null&&(u+="="+i))})}return u}function uf(e){const u={};for(const t in e){const n=e[t];n!==void 0&&(u[t]=Qe(n)?n.map(r=>r==null?null:""+r):n==null?n:""+n)}return u}const tf=Symbol(""),da=Symbol(""),Ci=Symbol(""),ts=Symbol(""),kr=Symbol("");function _t(){let e=[];function u(n){return e.push(n),()=>{const r=e.indexOf(n);r>-1&&e.splice(r,1)}}function t(){e=[]}return{add:u,list:()=>e,reset:t}}function Eu(e,u,t,n,r){const i=n&&(n.enterCallbacks[r]=n.enterCallbacks[r]||[]);return()=>new Promise((a,o)=>{const s=f=>{f===!1?o(Bt(4,{from:t,to:u})):f instanceof Error?o(f):kc(f)?o(Bt(2,{from:u,to:f})):(i&&n.enterCallbacks[r]===i&&typeof f=="function"&&i.push(f),a())},l=e.call(n&&n.instances[r],u,t,s);let C=Promise.resolve(l);e.length<3&&(C=C.then(s)),C.catch(f=>o(f))})}function rr(e,u,t,n){const r=[];for(const i of e)for(const a in i.components){let o=i.components[a];if(!(u!=="beforeRouteEnter"&&!i.instances[a]))if(nf(o)){const l=(o.__vccOpts||o)[u];l&&r.push(Eu(l,t,n,i,a))}else{let s=o();r.push(()=>s.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${i.path}"`));const C=sc(l)?l.default:l;i.components[a]=C;const B=(C.__vccOpts||C)[u];return B&&Eu(B,t,n,i,a)()}))}}return r}function nf(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Ba(e){const u=fu(Ci),t=fu(ts),n=me(()=>u.resolve(it(e.to))),r=me(()=>{const{matched:s}=n.value,{length:l}=s,C=s[l-1],f=t.matched;if(!C||!f.length)return-1;const B=f.findIndex(dt.bind(null,C));if(B>-1)return B;const m=pa(s[l-2]);return l>1&&pa(C)===m&&f[f.length-1].path!==m?f.findIndex(dt.bind(null,s[l-2])):B}),i=me(()=>r.value>-1&&sf(t.params,n.value.params)),a=me(()=>r.value>-1&&r.value===t.matched.length-1&&Ko(t.params,n.value.params));function o(s={}){return of(s)?u[it(e.replace)?"replace":"push"](it(e.to)).catch(Ft):Promise.resolve()}return{route:n,href:me(()=>n.value.href),isActive:i,isExactActive:a,navigate:o}}const rf=Yt({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Ba,setup(e,{slots:u}){const t=At(Ba(e)),{options:n}=fu(Ci),r=me(()=>({[ma(e.activeClass,n.linkActiveClass,"router-link-active")]:t.isActive,[ma(e.exactActiveClass,n.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const i=u.default&&u.default(t);return e.custom?i:Hn("a",{"aria-current":t.isExactActive?e.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:r.value},i)}}}),af=rf;function of(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const u=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(u))return}return e.preventDefault&&e.preventDefault(),!0}}function sf(e,u){for(const t in u){const n=u[t],r=e[t];if(typeof n=="string"){if(n!==r)return!1}else if(!Qe(r)||r.length!==n.length||n.some((i,a)=>i!==r[a]))return!1}return!0}function pa(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const ma=(e,u,t)=>e!=null?e:u!=null?u:t,Cf=Yt({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:u,slots:t}){const n=fu(kr),r=me(()=>e.route||n.value),i=fu(da,0),a=me(()=>{let l=it(i);const{matched:C}=r.value;let f;for(;(f=C[l])&&!f.components;)l++;return l}),o=me(()=>r.value.matched[a.value]);pn(da,me(()=>a.value+1)),pn(tf,o),pn(kr,r);const s=Gt();return zu(()=>[s.value,o.value,e.name],([l,C,f],[B,m,_])=>{C&&(C.instances[f]=l,m&&m!==C&&l&&l===B&&(C.leaveGuards.size||(C.leaveGuards=m.leaveGuards),C.updateGuards.size||(C.updateGuards=m.updateGuards))),l&&C&&(!m||!dt(C,m)||!B)&&(C.enterCallbacks[f]||[]).forEach(T=>T(l))},{flush:"post"}),()=>{const l=r.value,C=e.name,f=o.value,B=f&&f.components[C];if(!B)return Da(t.default,{Component:B,route:l});const m=f.props[C],_=m?m===!0?l.params:typeof m=="function"?m(l):m:null,F=Hn(B,ie({},_,u,{onVnodeUnmounted:D=>{D.component.isUnmounted&&(f.instances[C]=null)},ref:s}));return Da(t.default,{Component:F,route:l})||F}}});function Da(e,u){if(!e)return null;const t=e(u);return t.length===1?t[0]:t}const lf=Cf;function cf(e){const u=Mc(e.routes,e),t=e.parseQuery||ef,n=e.stringifyQuery||fa,r=e.history,i=_t(),a=_t(),o=_t(),s=AC(vu);let l=vu;Zu&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const C=tr.bind(null,g=>""+g),f=tr.bind(null,Zc),B=tr.bind(null,_n);function m(g,M){let x,L;return Go(g)?(x=u.getRecordMatcher(g),L=M):L=g,u.addRoute(L,x)}function _(g){const M=u.getRecordMatcher(g);M&&u.removeRoute(M)}function T(){return u.getRoutes().map(g=>g.record)}function F(g){return!!u.getRecordMatcher(g)}function D(g,M){if(M=ie({},M||s.value),typeof g=="string"){const G=nr(t,g,M.path),c=u.resolve({path:G.path},M),d=r.createHref(G.fullPath);return ie(G,c,{params:B(c.params),hash:_n(G.hash),redirectedFrom:void 0,href:d})}let x;if("path"in g)x=ie({},g,{path:nr(t,g.path,M.path).path});else{const G=ie({},g.params);for(const c in G)G[c]==null&&delete G[c];x=ie({},g,{params:f(g.params)}),M.params=f(M.params)}const L=u.resolve(x,M),re=g.hash||"";L.params=C(B(L.params));const ce=cc(n,ie({},g,{hash:qc(re),path:L.path})),q=r.createHref(ce);return ie({fullPath:ce,hash:re,query:n===fa?uf(g.query):g.query||{}},L,{redirectedFrom:void 0,href:q})}function y(g){return typeof g=="string"?nr(t,g,s.value.path):ie({},g)}function j(g,M){if(l!==g)return Bt(8,{from:M,to:g})}function z(g){return K(g)}function H(g){return z(ie(y(g),{replace:!0}))}function ne(g){const M=g.matched[g.matched.length-1];if(M&&M.redirect){const{redirect:x}=M;let L=typeof x=="function"?x(g):x;return typeof L=="string"&&(L=L.includes("?")||L.includes("#")?L=y(L):{path:L},L.params={}),ie({query:g.query,hash:g.hash,params:"path"in L?{}:g.params},L)}}function K(g,M){const x=l=D(g),L=s.value,re=g.state,ce=g.force,q=g.replace===!0,G=ne(x);if(G)return K(ie(y(G),{state:typeof G=="object"?ie({},re,G.state):re,force:ce,replace:q}),M||x);const c=x;c.redirectedFrom=M;let d;return!ce&&fc(n,L,x)&&(d=Bt(16,{to:c,from:L}),Yu(L,L,!0,!1)),(d?Promise.resolve(d):ae(c,L)).catch(p=>Cu(p)?Cu(p,2)?p:Me(p):le(p,c,L)).then(p=>{if(p){if(Cu(p,2))return K(ie({replace:q},y(p.to),{state:typeof p.to=="object"?ie({},re,p.to.state):re,force:ce}),M||c)}else p=Pe(c,L,!0,q,re);return xe(c,L,p),p})}function Q(g,M){const x=j(g,M);return x?Promise.reject(x):Promise.resolve()}function ae(g,M){let x;const[L,re,ce]=ff(g,M);x=rr(L.reverse(),"beforeRouteLeave",g,M);for(const G of L)G.leaveGuards.forEach(c=>{x.push(Eu(c,g,M))});const q=Q.bind(null,g,M);return x.push(q),Qu(x).then(()=>{x=[];for(const G of i.list())x.push(Eu(G,g,M));return x.push(q),Qu(x)}).then(()=>{x=rr(re,"beforeRouteUpdate",g,M);for(const G of re)G.updateGuards.forEach(c=>{x.push(Eu(c,g,M))});return x.push(q),Qu(x)}).then(()=>{x=[];for(const G of g.matched)if(G.beforeEnter&&!M.matched.includes(G))if(Qe(G.beforeEnter))for(const c of G.beforeEnter)x.push(Eu(c,g,M));else x.push(Eu(G.beforeEnter,g,M));return x.push(q),Qu(x)}).then(()=>(g.matched.forEach(G=>G.enterCallbacks={}),x=rr(ce,"beforeRouteEnter",g,M),x.push(q),Qu(x))).then(()=>{x=[];for(const G of a.list())x.push(Eu(G,g,M));return x.push(q),Qu(x)}).catch(G=>Cu(G,8)?G:Promise.reject(G))}function xe(g,M,x){for(const L of o.list())L(g,M,x)}function Pe(g,M,x,L,re){const ce=j(g,M);if(ce)return ce;const q=M===vu,G=Zu?history.state:{};x&&(L||q?r.replace(g.fullPath,ie({scroll:q&&G&&G.scroll},re)):r.push(g.fullPath,re)),s.value=g,Yu(g,M,x,q),Me()}let Re;function Au(){Re||(Re=r.listen((g,M,x)=>{if(!bt.listening)return;const L=D(g),re=ne(L);if(re){K(ie(re,{replace:!0}),L).catch(Ft);return}l=L;const ce=s.value;Zu&&gc(ra(ce.fullPath,x.delta),$n()),ae(L,ce).catch(q=>Cu(q,12)?q:Cu(q,2)?(K(q.to,L).then(G=>{Cu(G,20)&&!x.delta&&x.type===zt.pop&&r.go(-1,!1)}).catch(Ft),Promise.reject()):(x.delta&&r.go(-x.delta,!1),le(q,L,ce))).then(q=>{q=q||Pe(L,ce,!1),q&&(x.delta&&!Cu(q,8)?r.go(-x.delta,!1):x.type===zt.pop&&Cu(q,20)&&r.go(-1,!1)),xe(L,ce,q)}).catch(Ft)}))}let We=_t(),ve=_t(),be;function le(g,M,x){Me(g);const L=ve.list();return L.length?L.forEach(re=>re(g,M,x)):console.error(g),Promise.reject(g)}function oe(){return be&&s.value!==vu?Promise.resolve():new Promise((g,M)=>{We.add([g,M])})}function Me(g){return be||(be=!g,Au(),We.list().forEach(([M,x])=>g?x(g):M()),We.reset()),g}function Yu(g,M,x,L){const{scrollBehavior:re}=e;if(!Zu||!re)return Promise.resolve();const ce=!x&&vc(ra(g.fullPath,0))||(L||!x)&&history.state&&history.state.scroll||null;return ei().then(()=>re(g,M,ce)).then(q=>q&&Ac(q)).catch(q=>le(q,g,M))}const su=g=>r.go(g);let Ze;const ze=new Set,bt={currentRoute:s,listening:!0,addRoute:m,removeRoute:_,hasRoute:F,getRoutes:T,resolve:D,options:e,push:z,replace:H,go:su,back:()=>su(-1),forward:()=>su(1),beforeEach:i.add,beforeResolve:a.add,afterEach:o.add,onError:ve.add,isReady:oe,install(g){const M=this;g.component("RouterLink",af),g.component("RouterView",lf),g.config.globalProperties.$router=M,Object.defineProperty(g.config.globalProperties,"$route",{enumerable:!0,get:()=>it(s)}),Zu&&!Ze&&s.value===vu&&(Ze=!0,z(r.location).catch(re=>{}));const x={};for(const re in vu)x[re]=me(()=>s.value[re]);g.provide(Ci,M),g.provide(ts,At(x)),g.provide(kr,s);const L=g.unmount;ze.add(g),g.unmount=function(){ze.delete(g),ze.size<1&&(l=vu,Re&&Re(),Re=null,s.value=vu,Ze=!1,be=!1),L()}}};return bt}function Qu(e){return e.reduce((u,t)=>u.then(()=>t()),Promise.resolve())}function ff(e,u){const t=[],n=[],r=[],i=Math.max(u.matched.length,e.matched.length);for(let a=0;a<i;a++){const o=u.matched[a];o&&(e.matched.find(l=>dt(l,o))?n.push(o):t.push(o));const s=e.matched[a];s&&(u.matched.find(l=>dt(l,s))||r.push(s))}return[t,n,r]}const _u={KO:"ko",EN:"en",JP:"jp"},Ku=$o("lang",()=>{const e=Gt(_u.KO);function u(t){e.value=t}return{lang:e,changeLang:u}}),It={LIGHT:"light",DARK:"dark"},gt=$o("theme",()=>{const e=Gt(It.LIGHT);function u(t){e.value=t}return{theme:e,changeTheme:u}}),df={data(){return{headerOuter:"headerOuter",headerMenuPC:"menuPC",headerMenuMO:"menuMO",menuText:"menuText",langFloat:"langFloat",mobileFloat:"mobileFloat",menuItem:"menuItem",menuItemDis:"menuItem disabled"}},methods:{openLangMenu:()=>{document.getElementById("langMenu").style.display="flex"},openMobileMenu:()=>{document.getElementById("mobileMenu").style.display="flex"},closeLangMenu:()=>{document.getElementById("langMenu").style.display="none"},closeMobileMenu:()=>{document.getElementById("mobileMenu").style.display="none"},changeLang:e=>{Ku().changeLang(e===0?_u.KO:e===1?_u.EN:_u.JP),location.reload()},changeTheme:()=>{const e=gt(),u=e.theme===It.LIGHT?It.DARK:It.LIGHT;e.changeTheme(u),location.reload()},construction:()=>{alert("Translation is under construction")}},created(){const e=Ku();if(!e.lang){let u=navigator.language;u==="ko"||u==="ko-kr"||u==="ko-KR"?e.changeLang(_u.KO):e.changeLang(_u.EN)}}};const ke=(e,u)=>{const t=e.__vccOpts||e;for(const[n,r]of u)t[n]=r;return t},Bf=Se("Home"),pf=Se("About"),mf=Se("Tech Stack"),Df=Se("Project"),hf=Se("Link"),Af=Se("Home"),gf=Se("About"),vf=Se("Tech Stack"),bf=Se("Project"),yf=Se("Link");function Ef(e,u,t,n,r,i){const a=ye("RouterLink"),o=ye("font-awesome-icon");return J(),X(Ae,null,[A("section",{class:h(r.headerOuter)},[A("div",{class:h(r.headerMenuPC)},[N(a,{to:"/",class:h(r.menuText)},{default:Je(()=>[Bf]),_:1},8,["class"]),N(a,{to:"/about",class:h(r.menuText)},{default:Je(()=>[pf]),_:1},8,["class"]),N(a,{to:"/tech",class:h(r.menuText)},{default:Je(()=>[mf]),_:1},8,["class"]),N(a,{to:"/project",class:h(r.menuText)},{default:Je(()=>[Df]),_:1},8,["class"]),N(a,{to:"/link",class:h(r.menuText)},{default:Je(()=>[hf]),_:1},8,["class"]),A("div",{class:h(r.menuText),onClick:u[0]||(u[0]=(...s)=>i.openLangMenu&&i.openLangMenu(...s))},"Lang",2),A("div",{class:h(r.menuText),onClick:u[1]||(u[1]=(...s)=>i.changeTheme&&i.changeTheme(...s))},"Theme",2)],2),A("div",{class:h(r.headerMenuMO)},[A("div",{class:h(r.menuText),onClick:u[2]||(u[2]=(...s)=>i.openMobileMenu&&i.openMobileMenu(...s))},"Menu",2),A("div",{class:h(r.menuText),onClick:u[3]||(u[3]=(...s)=>i.openLangMenu&&i.openLangMenu(...s))},"Lang",2),A("div",{class:h(r.menuText),onClick:u[4]||(u[4]=(...s)=>i.changeTheme&&i.changeTheme(...s))},"Theme",2)],2)],2),A("div",{class:h(r.langFloat),id:"langMenu"},[A("div",{class:h(r.menuItem),onClick:u[5]||(u[5]=s=>i.changeLang(0))},"\uD55C\uAD6D\uC5B4",2),A("div",{class:h(r.menuItem),onClick:u[6]||(u[6]=s=>i.changeLang(1))},"English",2),A("div",{class:h(r.menuItemDis),onClick:u[7]||(u[7]=s=>i.construction())},"\u65E5\u672C\u8A9E",2),A("div",{class:h(r.menuItem),onClick:u[8]||(u[8]=(...s)=>i.closeLangMenu&&i.closeLangMenu(...s))},[N(o,{icon:"fa-solid fa-circle-xmark"})],2)],2),A("div",{class:h(r.mobileFloat),id:"mobileMenu"},[N(a,{class:h(r.menuItem),to:"/"},{default:Je(()=>[Af]),_:1},8,["class"]),N(a,{class:h(r.menuItem),to:"/#/about"},{default:Je(()=>[gf]),_:1},8,["class"]),N(a,{class:h(r.menuItem),to:"/#/tech"},{default:Je(()=>[vf]),_:1},8,["class"]),N(a,{class:h(r.menuItem),to:"/#/project"},{default:Je(()=>[bf]),_:1},8,["class"]),N(a,{class:h(r.menuItem),to:"/#/link"},{default:Je(()=>[yf]),_:1},8,["class"]),A("div",{class:h(r.menuItem),onClick:u[9]||(u[9]=(...s)=>i.closeMobileMenu&&i.closeMobileMenu(...s))},[N(o,{icon:"fa-solid fa-circle-xmark"})],2)],2)],64)}const _f=ke(df,[["render",Ef],["__scopeId","data-v-23399f8c"]]),wf={data(){return{footer:"footer"}}};function kf(e,u,t,n,r,i){return J(),X("section",{class:h(r.footer)},"(c) 2023 Nira / Made with vue 3 + pinia",2)}const Sf=ke(wf,[["render",kf],["__scopeId","data-v-918acd6c"]]),xf={components:{HeaderView:_f,FooterView:Sf},data(){return{view:gt().theme===It.LIGHT?"view":"view dark"}}};function Ff(e,u,t,n,r,i){const a=ye("HeaderView"),o=ye("RouterView"),s=ye("FooterView");return J(),X("div",{class:h(r.view)},[N(a),N(o),N(s)],2)}const Pf=ke(xf,[["render",Ff],["__scopeId","data-v-4d801652"]]),If={props:{iconUrl:String,iconUrlWhite:String,text:String,desc:String,href:String},data:()=>{const e=gt().theme;return{btnAll:e==="light"?"btn":"btn btndark",btnTop:"top",btnBottom:"bottom",theme:e}},methods:{moveToLink:function(){const e=this.$props.href;e?window.location.href=e:console.error("no link")}}};const Tf=["src"];function jf(e,u,t,n,r,i){return J(),X("button",{class:h(e.btnAll),onClick:u[0]||(u[0]=(...a)=>i.moveToLink&&i.moveToLink(...a))},[A("div",{class:h(e.btnTop)},[A("img",{src:e.theme==="light"?t.iconUrl:t.iconUrlWhite},null,8,Tf),A("span",null,ue(t.text),1)],2),A("div",{class:h(e.btnBottom)},[A("span",null,ue(t.desc),1)],2)],2)}const Of=ke(If,[["render",jf]]),ot={ko:{desc:"\uCF54\uB4DC\uB85C \uB9CE\uC740 \uC0AC\uB78C\uB4E4\uC5D0\uAC8C \uB2E4\uAC00\uAC00\uACE0 \uC2F6\uC740 \uAC1C\uBC1C\uC790\uC785\uB2C8\uB2E4",btn:{about:"Nira\uB97C \uC18C\uAC1C\uD569\uB2C8\uB2E4",tech:"\uC0AC\uC6A9 \uAC00\uB2A5\uD55C \uAE30\uC220 \uC2A4\uD0DD",proj:"\uC9C4\uD589 \uD504\uB85C\uC81D\uD2B8 \uBAA9\uB85D",link:"\uAD00\uB828 \uB9C1\uD06C"}},en:{desc:"A developer who wants to approach to many people",btn:{about:"Introduce myself",tech:"Usable technical stack",proj:"Experienced projects",link:"Related link"}},jp:{desc:"\u30B3\u30FC\u30C9\u3067\u6CA2\u5C71\u306E\u4EBA\u306B\u8FD1\u3065\u304D\u305F\u3044\u30C7\u30D9\u30ED\u30C3\u30D1\u30FC\u3067\u3059",btn:{about:"Nira\u3092\u7D39\u4ECB\u3057\u307E\u3059",tech:"\u6280\u8853\u30B9\u30BF\u30C3\u30AF",proj:"\u9032\u884C\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8",link:"\u95A2\u9023\u30EA\u30F3\u30AF"}}},Rf={data(){const e=Ku().lang;return{title:"title",titleName:"titleName",titleDesc:"titleDesc",TxtMain:e==="ko"?ot.ko:e==="jp"?ot.jp:ot.en}}};function Mf(e,u,t,n,r,i){return J(),X("div",{class:h(r.title)},[A("div",{class:h(r.titleName)},"Nira",2),A("div",{class:h(r.titleDesc)},ue(r.TxtMain.desc),3)],2)}const Lf=ke(Rf,[["render",Mf],["__scopeId","data-v-2d6cf848"]]),Nf={name:"MainView",components:{MainButton:Of,MainTitle:Lf},data(){const e=Ku().lang;return{view:"view",TxtMain:e==="ko"?ot.ko:e==="jp"?ot.jp:ot.en}}};function Uf(e,u,t,n,r,i){const a=ye("MainTitle"),o=ye("MainButton");return J(),X(Ae,null,[N(a),A("div",{class:h(r.view)},[N(o,{iconUrl:"/main/icon_about.png",iconUrlWhite:"/main/icon_about_white.png",text:"About",desc:r.TxtMain.btn.about,href:"/#/about"},null,8,["desc"]),N(o,{iconUrl:"/main/icon_tech.png",iconUrlWhite:"/main/icon_tech_white.png",text:"Tech Stack",desc:r.TxtMain.btn.tech,href:"/#/tech"},null,8,["desc"]),N(o,{iconUrl:"/main/icon_proj.png",iconUrlWhite:"/main/icon_proj_white.png",text:"Project",desc:r.TxtMain.btn.proj,href:"/#/project"},null,8,["desc"]),N(o,{iconUrl:"/main/icon_link.png",iconUrlWhite:"/main/icon_link_white.png",text:"Link",desc:r.TxtMain.btn.link,href:"/#/link"},null,8,["desc"])],2)],64)}const Wf=ke(Nf,[["render",Uf],["__scopeId","data-v-0c1a6a1e"]]),zf=[{date:"2021.09-2022.08",company:"\uC8FC\uC2DD\uD68C\uC0AC \uD14C\uB77C\uD540",type:"\uC6F9\uD230, \uC6F9\uC18C\uC124 \uC81C\uC791 \uBC0F \uC11C\uBE44\uC2A4",work:"\uC6F9\uD230 \uD50C\uB7AB\uD3FC \uAC1C\uBC1C",etc:"",tech:"TypeScript, ReactJS, NextJS, Redux \uB4F1"},{date:"2015.05-2020.05",company:"\uD55C\uAD6D\uC804\uC790\uC778\uC99D / AIBrain",type:"\uAE08\uC735, \uBCF4\uC548, AI",work:"R&D, \uC18C\uD504\uD2B8\uC6E8\uC5B4 \uAC1C\uBC1C",etc:"\uC804\uBB38\uC5F0\uAD6C\uC694\uC6D0\uC73C\uB85C \uB300\uCCB4\uBCF5\uBB34 \uC9C4\uD589",tech:"JavaScript, TypeScript, ReactJS (Web Frontend) / Java, Kotlin (Server, Android) / Unity3D (Game, Tool)"},{date:"2013.03-2015.02",company:"\uBD80\uC0B0\uB300\uD559\uAD50 \uC804\uAE30\uC804\uC790\uCEF4\uD4E8\uD130\uACF5\uD559\uBD80 \uC18C\uD504\uD2B8\uC6E8\uC5B4\uACF5\uD559 \uC5F0\uAD6C\uC2E4",type:"\uB300\uD559\uC6D0 \uC5F0\uAD6C\uC2E4",work:"\uC5F0\uAD6C, R&D",etc:"\uC11D\uC0AC\uD559\uC704 \uCDE8\uB4DD",tech:"JavaScript (web \uAC1C\uBC1C), Java (R&D, Android)"}],Hf=[{date:"2021.09-2022.08",company:"Terapin Studio",type:"Webtoon, Web novel service",work:"Webtoon platform development",etc:"",tech:"TypeScript, ReactJS, NextJS, Redux, etc."},{date:"2015.05-2020.05",company:"CrossCert / AIBrain",type:"Finance, Security, AI",work:"R&D, Software Development",etc:"Alternative service for army",tech:"JavaScript, TypeScript, ReactJS (Web Frontend) / Java, Kotlin (Server, Android) / Unity3D (Game, Tool)"},{date:"2013.03-2015.02",company:"Pusan National University Software Engineering Lab",type:"Graduate School Lab",work:"Research and Development",etc:"Got Master degree",tech:"JavaScript (web dev), Java (R&D, Android)"}],Jf=[{date:"2021.09-2022.08",company:"\u30C6\u30E9\u30D4\u30F3\u30FB\u30B9\u30BF\u30B8\u30AA",type:"\u30A6\u30A7\u30D6\u6F2B\u753B\u30FB\u30A6\u30A7\u30D6\u5C0F\u8AAC\u306E\u5236\u4F5C\u53CA\u3073\u30B5\u30FC\u30D3\u30B9",work:"\u30A6\u30A7\u30D6\u6F2B\u753B\u30D7\u30E9\u30C3\u30C8\u30D5\u30A9\u30FC\u30E0\u958B\u767A",etc:"",tech:"TypeScript, ReactJS, NextJS, Redux \u306A\u3069"},{date:"2015.05-2020.05",company:"\u97D3\u56FD\u96FB\u5B50\u8A8D\u8A3C / AIBrain",type:"\u91D1\u878D, \u30BB\u30AD\u30E5\u30EA\u30C6\u30A3, AI",work:"R&D, \u30BD\u30D5\u30C8\u30A6\u30A7\u30A2\u958B\u767A",etc:"\u8ECD\u968A\u306E\u4EE3\u66FF\u670D\u52D9\u3068\u3057\u3066\u4ED5\u4E8B\u3092\u3057\u307E\u3057\u305F",tech:"JavaScript, TypeScript, ReactJS (Web Frontend) / Java, Kotlin (Server, Android) / Unity3D (Game, Tool)"},{date:"2013.03-2015.02",company:"\u91DC\u5C71\u5927\u5B66\u6821\u30BD\u30D5\u30C8\u30A6\u30A7\u30A2\u5DE5\u5B66\u7814\u7A76\u5BA4",type:"\u5927\u5B66\u9662\u306E\u7814\u7A76\u5BA4",work:"\u7814\u7A76, R&D",etc:"\u4FEE\u58EB\u5B66\u4F4D\u53D6\u5F97",tech:"JavaScript (web\u958B\u767A), Java (R&D, Android)"}],ir={ko:{introTitle:"\uC18C\uAC1C",introData:["\uAC1C\uBC1C \uADF8 \uC790\uCCB4\uC5D0 \uD765\uBBF8\uB97C \uAC16\uACE0 \uB2E4\uC591\uD55C \uBD84\uC57C\uC5D0 \uB300\uD574 \uACF5\uBD80\uD558\uACE0 \uC788\uB294 \uAC1C\uBC1C\uC790\uC785\uB2C8\uB2E4","\uD604\uC7AC\uB294 \uC6F9 \uAC1C\uBC1C\uC5D0 \uC7AC\uBBF8\uB97C \uB290\uB07C\uACE0 \uC6F9\uC5D0 \uC9D1\uC911\uD558\uAE30 \uC704\uD55C \uACF5\uBD80\uB97C \uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4","\uC5C5\uBB34 \uBC0F \uAC1C\uC778 \uD504\uB85C\uC81D\uD2B8\uB85C \uC6F9 \uC11C\uBE44\uC2A4\uB97C \uB9CC\uB4E4\uC5B4 \uC11C\uBE44\uC2A4 \uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4","\uC774\uC804\uC5D0\uB294 \uC5C5\uBB34\uC5D0\uC11C Java/Kotlin\uC744 \uC774\uC6A9\uD558\uC5EC \uC11C\uBC84, \uC0AC\uB0B4 \uD50C\uB7AB\uD3FC, \uAC8C\uC784 \uB4F1 \uB2E4\uC591\uD55C \uD504\uB85C\uC81D\uD2B8\uB97C \uACBD\uD5D8\uD588\uC2B5\uB2C8\uB2E4","Android \uAC1C\uBC1C \uBC0F \uC571 \uCD9C\uC2DC \uACBD\uD5D8\uB3C4 \uC788\uC73C\uBA70, Unity\uB97C \uC774\uC6A9\uD55C \uAC8C\uC784 \uC81C\uC791 \uB4F1\uC5D0\uB3C4 \uD765\uBBF8\uAC00 \uC788\uC2B5\uB2C8\uB2E4"],expTitle:"\uC77C \uD574\uBCF8 \uACBD\uD5D8",expData:zf},en:{introTitle:"Introduction",introData:["A developer who has interest in development itself, and studying in various category","Currently stuyding web development","I made several work / personal projects with web development","Before web, I developed server, internal company platform, game and so on using Java/Kotlin","Experienced Android dev and app release, and interested in Unity game dev too"],expTitle:"Work experiences",expData:Hf},jp:{introTitle:"\u7D39\u4ECB",introData:["\u958B\u767A\u305D\u306E\u3082\u306E\u306B\u8208\u5473\u3092\u6301\u3063\u3066\u69D8\u3005\u306A\u30AB\u30C6\u30B4\u30EA\u306E\u52C9\u5F37\u3092\u3057\u3066\u3044\u307E\u3059","\u73FE\u5728\u306F\u30A6\u30A7\u30D6\u958B\u767A\u306B\u9762\u767D\u3055\u3092\u611F\u3058\u3066\u96C6\u4E2D\u3057\u3066\u3044\u307E\u3059","\u696D\u52D9\u30FB\u500B\u4EBA\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3067\u30A6\u30A7\u30D6\u30B5\u30FC\u30D3\u30B9\u3092\u4F5C\u6210\u30FB\u30B5\u30FC\u30D3\u30B9\u3057\u3066\u3044\u307E\u3059","\u4EE5\u524D\u306F\u696D\u52D9\u3067Java/Kotlin\u3092\u4F7F\u3063\u305F\u30B5\u30FC\u30D0\u30FC\u3001\u793E\u5185\u306E\u30D7\u30E9\u30C3\u30C8\u30D5\u30A9\u30FC\u30E0\u3001\u30B2\u30FC\u30E0\u306A\u3069\u306E\u69D8\u3005\u306A\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u7D4C\u9A13\u3057\u307E\u3057\u305F","Android\u958B\u767A\u3068\u30A2\u30D7\u30EA\u306E\u30EA\u30EA\u30FC\u30B9\u7D4C\u9A13\u304C\u3042\u308A\u3001Unity\u306E\u30B2\u30FC\u30E0\u958B\u767A\u306B\u3082\u8208\u5473\u304C\u3042\u308A\u307E\u3059"],expTitle:"\u4ED5\u4E8B\u306E\u7D4C\u9A13",expData:Jf}},$f={props:{dateStr:String,companyStr:String,typeStr:String,workStr:String,techStr:String,etcStr:String},data(){return{box:"box",date:"date",wrap:"wrap",itemTitle:"itemTitle"}}};function Kf(e,u,t,n,r,i){return J(),X("div",{class:h(r.box)},[A("div",{class:h(r.date)},ue(t.dateStr),3),A("div",{class:h(r.wrap)},[A("div",{class:h(r.itemTitle)},"Worked at",2),A("div",null,ue(t.companyStr),1)],2),A("div",{class:h(r.wrap)},[A("div",{class:h(r.itemTitle)},"Company category",2),A("div",null,ue(t.typeStr),1)],2),A("div",{class:h(r.wrap)},[A("div",{class:h(r.itemTitle)},"Works",2),A("div",null,ue(t.workStr),1)],2),A("div",{class:h(r.wrap)},[A("div",{class:h(r.itemTitle)},"Tech used",2),A("div",null,ue(t.techStr),1)],2),t.etcStr&&t.etcStr.length>0?(J(),X("div",{key:0,class:h(r.wrap)},[A("div",{class:h(r.itemTitle)},"etc",2),A("div",null,ue(t.etcStr),1)],2)):au("",!0)],2)}const Vf=ke($f,[["render",Kf],["__scopeId","data-v-11db767b"]]),Gf={name:"About",components:{WorkExp:Vf},data(){const e=Ku().lang,u=gt().theme;return{about:"about",title:"title",aboutWrapper:"aboutWrapper",aboutBox:u==="light"?"aboutBox aboutLight":"aboutBox aboutDark",subtitle:"subtitle",content:"content",contentWrap:"contentWrap",contentAbout:"contentAbout",TxtAbout:e===_u.KO?ir.ko:e===_u.JP?ir.jp:ir.en}}};const Yf=Se(" About ");function qf(e,u,t,n,r,i){const a=ye("font-awesome-icon"),o=ye("WorkExp");return J(),X("div",{class:h(r.about)},[A("div",{class:h(r.title)},[N(a,{icon:"fa-solid fa-angle-double-right"}),Yf,N(a,{icon:"fa-solid fa-angle-double-left"})],2),A("div",{class:h(r.aboutWrapper)},[A("div",{class:h(r.aboutBox)},[A("div",{class:h(r.subtitle)},[N(a,{icon:"fa-solid fa-angle-right"}),Se(" "+ue(r.TxtAbout.introTitle)+" ",1),N(a,{icon:"fa-solid fa-angle-left"})],2),A("div",{class:h(r.contentAbout)},[A("ul",null,[A("li",null,ue(r.TxtAbout.introData[0]),1),A("li",null,ue(r.TxtAbout.introData[1]),1),A("li",null,ue(r.TxtAbout.introData[2]),1),A("li",null,ue(r.TxtAbout.introData[3]),1),A("li",null,ue(r.TxtAbout.introData[4]),1)])],2)],2),A("div",{class:h(r.aboutBox)},[A("div",{class:h(r.subtitle)},[N(a,{icon:"fa-solid fa-angle-right"}),Se(" "+ue(r.TxtAbout.expTitle)+" ",1),N(a,{icon:"fa-solid fa-angle-left"})],2),A("div",{class:h(r.contentWrap)},[(J(!0),X(Ae,null,xu(r.TxtAbout.expData,s=>(J(),X("div",{class:h(r.content)},[N(o,{dateStr:s.date,companyStr:s.company,workStr:s.work,typeStr:s.type,techStr:s.tech,etcStr:s.etc},null,8,["dateStr","companyStr","workStr","typeStr","techStr","etcStr"])],2))),256))],2)],2)],2)],2)}const Xf=ke(Gf,[["render",qf],["__scopeId","data-v-c9eb2abd"]]),Qf={props:{title:String,src:String},data(){return{linkWrap:"linkWrap",linkTitle:"linkTitle",linkSrc:"linkSrc"}},methods:{openLink:function(){window.open(this.$props.src,"_blank","noreferrer noopener")}}};function Zf(e,u,t,n,r,i){return J(),X("div",{class:h(r.linkWrap)},[A("div",{class:h(r.linkTitle)},ue(e.$props.title),3),A("div",{class:h(r.linkSrc),"on:click":u[0]||(u[0]=(...a)=>i.openLink&&i.openLink(...a))},ue(e.$props.src),35)],2)}const e0=ke(Qf,[["render",Zf],["__scopeId","data-v-d3684ad1"]]),u0={data(){return{link:"link",title:"title",wrapper:"wrapper"}},components:{LinkItemVue:e0}};const t0=Se(" Link ");function n0(e,u,t,n,r,i){const a=ye("font-awesome-icon"),o=ye("LinkItemVue");return J(),X("div",{class:h(r.link)},[A("div",{class:h(r.title)},[N(a,{icon:"fa-solid fa-angle-double-right"}),t0,N(a,{icon:"fa-solid fa-angle-double-left"})],2),A("div",{class:h(r.wrapper)},[N(o,{title:"Blog (Notion)",src:"https://blog.nira.one"}),N(o,{title:"GitHub",src:"https://github.com/prunusnira"}),N(o,{title:"LinkedIn",src:"https://www.linkedin.com/in/tjkang0207/"}),N(o,{title:"Skill Navigator",src:"https://sin.nira.one"}),N(o,{title:"PIU Clear Manager",src:"https://piu.nira.one"}),N(o,{title:"Twitch BanPicker",src:"https://banpick.nira.one"})],2)],2)}const r0=ke(u0,[["render",n0],["__scopeId","data-v-3ba2aae4"]]),i0={props:{item:Object},data:()=>{const e=Ku().lang,u=gt().theme;return{wrap:u==="light"?"wrap wrapLight":"wrap wrapDark",header:"header",headerLeft:"headerLeft",icon:"icon",titlewrap:"titlewrap",title:"title",subtitle:"subtitle",type:"type",bottomWrap:u==="light"?"bottomWrap bottomLight":"bottomWrap bottomDark",itemTitle:"itemTitle",bottomItem:"bottomItem",itemImgWrap:"itemImgWrap",itemImg:"itemImg",isOpen:!1,lang:e}},methods:{changeOpen:function(){this.isOpen=!this.isOpen}},computed:{cssVariable(){return{"--isOpen":this.isOpen?"visible":"hidden","--height":this.isOpen?"auto":"0","--pval":this.isOpen?"20px":"0"}}}};const a0=["src"],o0=["href"],s0=["innerHTML"],C0=["innerHTML"],l0=["href"],c0=["src"];function f0(e,u,t,n,r,i){return J(),X("div",{class:h(e.wrap)},[A("div",{class:h(e.header),onClick:u[0]||(u[0]=a=>i.changeOpen())},[A("div",{class:h(e.headerLeft)},[A("img",{class:h(e.icon),src:t.item.icon},null,10,a0),A("div",{class:h(e.titlewrap)},[A("div",{class:h(e.title)},ue(t.item.title[e.lang]),3),A("div",{class:h(e.subtitle)},ue(t.item.simpledesc[e.lang]),3)],2)],2),A("div",{class:h(e.type)},ue(t.item.platform),3)],2),A("div",{id:"bottom",class:h(e.bottomWrap),style:In(i.cssVariable)},[A("div",{class:h(e.bottomItem)},[A("div",{class:h(e.itemTitle)},"Platform",2),A("div",null,ue(t.item.platform),1)],2),A("div",{class:h(e.bottomItem)},[A("div",{class:h(e.itemTitle)},"Period",2),A("div",null,ue(t.item.period),1)],2),A("div",{class:h(e.bottomItem)},[A("div",{class:h(e.itemTitle)},"Tech",2),A("div",null,ue(t.item.tech),1)],2),t.item.link.length>0?(J(),X("div",{key:0,class:h(e.bottomItem)},[A("div",{class:h(e.itemTitle)},"Link",2),(J(!0),X(Ae,null,xu(t.item.link,a=>(J(),X("div",null,[A("a",{href:a},ue(a),9,o0)]))),256))],2)):au("",!0),A("div",{class:h(e.bottomItem)},[A("span",{class:h(e.itemTitle)},"About",2),A("div",{innerHTML:t.item.content[e.lang]},null,8,s0)],2),A("div",{class:h(e.bottomItem)},[A("span",{class:h(e.itemTitle)},"Development",2),A("div",{innerHTML:t.item.dev[e.lang]},null,8,C0)],2),A("div",{class:h(e.bottomItem)},[A("div",{class:h(e.itemTitle)},"Images",2),A("div",{class:h(e.itemImgWrap)},[(J(!0),X(Ae,null,xu(t.item.image,a=>(J(),X("a",{href:a,target:"_blank",rel:"noopener noreferrer"},[A("img",{class:h(e.itemImg),src:a},null,10,c0)],8,l0))),256))],2)],2)],6)],2)}const d0=ke(i0,[["render",f0],["__scopeId","data-v-0352ae3e"]]),B0={props:{arr:Object,type:String},components:{ProjItemVue:d0},data(){return{title:"title",projBox:"projBox"}}};function p0(e,u,t,n,r,i){const a=ye("ProjItemVue");return J(),X("div",null,[A("div",{class:h(r.title)},ue(t.type),3),A("div",{class:h(r.projBox)},[(J(!0),X(Ae,null,xu(t.arr,o=>(J(),Hu(a,{item:o},null,8,["item"]))),256))],2)])}const m0=ke(B0,[["render",p0],["__scopeId","data-v-0ef04d20"]]),D0=[{icon:"/project/sin/icon.png",title:{ko:"Skill Navigator",jp:"Skill Navigator",en:"Skill Navigator"},simpledesc:{ko:"\uB9AC\uB4EC\uAC8C\uC784 GITADORA \uC2DC\uB9AC\uC988\uC758 \uAE30\uB85D \uAD00\uB9AC \uC0AC\uC774\uD2B8",jp:"\u97F3\u30B2\u30FCGITADORA\u30B7\u30EA\u30FC\u30BA\u306E\u8A18\u9332\u7BA1\u7406\u30B5\u30FC\u30D3\u30B9",en:"Data management service for rhythm game GITADORA series"},platform:"Web",tech:"ReactJS (TypeScript), Spring Boot (Kotlin), MariaDB, nginx, MobX, styled-components, etc",period:"2016.04~",link:["https://sin.nira.one","https://github.com/prunusnira/gdinfo-react","https://github.com/prunusnira/gdinfo-server"],content:{ko:`<ul>
              <li>\uB9AC\uB4EC\uAC8C\uC784 GITADORA \uC2DC\uB9AC\uC988\uC758 \uAC1C\uC778 \uAE30\uB85D\uC744 \uAD00\uB9AC\uD574\uC8FC\uB294 \uC6F9 \uC11C\uBE44\uC2A4</li>
              <li>\uACF5\uC2DD\uC5D0\uC11C \uC9C0\uC6D0\uD558\uC9C0 \uC54A\uB294 \uBD80\uAC00\uC801\uC778 \uAE30\uB2A5\uC744 \uC81C\uACF5</li>
              <li>(2022\uB144 12\uC6D4 \uAE30\uC900) \uB4F1\uB85D \uACC4\uC815 \uC218 4700</li>
          </ul>`,jp:`<ul>
            <li>\uB9AC\uB4EC\uAC8C\uC784 GITADORA \uC2DC\uB9AC\uC988\uC758 \uAC1C\uC778 \uAE30\uB85D\uC744 \uAD00\uB9AC\uD574\uC8FC\uB294 \uC6F9 \uC11C\uBE44\uC2A4</li>
            <li>\uACF5\uC2DD\uC5D0\uC11C \uC9C0\uC6D0\uD558\uC9C0 \uC54A\uB294 \uBD80\uAC00\uC801\uC778 \uAE30\uB2A5\uC744 \uC81C\uACF5</li>
            <li>(2022\uB144 12\uC6D4 \uAE30\uC900) \uB4F1\uB85D \uACC4\uC815 \uC218 4700</li>
        </ul>`,en:`<ul>
            <li>An web service for managing personal record of rhythmgame named GITADORA</li>
            <li>Even supports functionalities that are not supported from official</li>
            <li>(Dec, 2022) Over 4700 accounts are registered</li>
        </ul>`},dev:{ko:`\uC2DC\uC2A4\uD15C \uAD6C\uC131<br/>
          \uC11C\uBE44\uC2A4\uAC00 \uC624\uB798 \uC9C0\uC18D\uB418\uC5B4 \uC2DC\uC2A4\uD15C\uC5D0 \uBCC0\uD654\uAC00 \uB9CE\uC774 \uC788\uC5C8\uC74C
          <ol>
              <li>1\uC138\uB300: Spring Framework 4 / JSP</li>
              <li>2\uC138\uB300: Spring Boot 2 / Thymeleaf / Vue.js (non SPA)</li>
              <li>3\uC138\uB300: Spring Boot 2 (Backend) + ReactJS (Frontend): GCE -> EC2 -> Lightsail</li>
              <li>4\uC138\uB300: Spring Boot 2 (Backend-AWS Lightsail) + ReactJS (Frontend-AWS S3)</li>
          </ol>
          \uB0B4\uBD80 \uAD6C\uC870\uC758 \uC9C0\uC18D\uC801\uC778 \uAC1C\uC120
          <ul>
              <li>Frontend\uB294 JSP, Thymeleaf\uB97C \uC9C0\uB098 React\uB85C \uC815\uCC29</li>
              <li>React\uB85C \uBC14\uB010 \uC774\uD6C4\uC5D0\uB3C4 Class Component\uB85C \uC2DC\uC791\uD558\uC5EC FC, Custom Hook, CSS-in-JS \uC801\uC6A9 \uB4F1 \uC9C0\uC18D\uC801\uC778 \uBCC0\uD654\uAC00 \uC788\uC5C8\uC74C</li>
              <li>Backend\uB294 Spring Framework\uC5D0\uC11C SpringBoot\uB85C \uBCC0\uACBD\uD558\uC5EC \uC0AC\uC6A9 \uC911</li>
              <li>\uD5A5\uD6C4 express.js \uAE30\uBC18\uC758 node.js \uC11C\uBC84\uB85C \uBCC0\uACBD\uC744 \uACC4\uD68D\uC911</li>
          </ul>
          \uC0AC\uC6A9 \uAD6C\uC870
          <ul>
              <li>WebCrawler\uB85C \uAC1C\uC778 \uAE30\uB85D\uC744 \uC218\uC9D1\uD558\uC5EC DB\uC5D0 \uC800\uC7A5</li>
              <li>\uC0AC\uC6A9\uC790\uAC00 \uD2B9\uC815 \uAE30\uB2A5\uC5D0 \uC811\uADFC\uD560 \uB54C \uC800\uC7A5\uB41C \uB370\uC774\uD130\uC5D0 \uB300\uD574 \uC5F0\uC0B0\uC744 \uC218\uD589\uD558\uC5EC \uC0AC\uC6A9\uC790\uC5D0\uAC8C \uC815\uBCF4\uB97C \uC81C\uACF5</li>
          </ul>`,jp:`\uC2DC\uC2A4\uD15C \uAD6C\uC131<br/>
          \uC11C\uBE44\uC2A4\uAC00 \uC624\uB798 \uC9C0\uC18D\uB418\uC5B4 \uC2DC\uC2A4\uD15C\uC5D0 \uBCC0\uD654\uAC00 \uB9CE\uC774 \uC788\uC5C8\uC74C
          <ol>
              <li>1\uC138\uB300: Spring Framework 4 / JSP</li>
              <li>2\uC138\uB300: Spring Boot 2 / Thymeleaf / Vue.js (non SPA)</li>
              <li>3\uC138\uB300: Spring Boot 2 (Backend) + ReactJS (Frontend): GCE -> EC2 -> Lightsail</li>
              <li>4\uC138\uB300: Spring Boot 2 (Backend-AWS Lightsail) + ReactJS (Frontend-AWS S3)</li>
          </ol>
          \uB0B4\uBD80 \uAD6C\uC870\uC758 \uC9C0\uC18D\uC801\uC778 \uAC1C\uC120
          <ul>
              <li>Frontend\uB294 JSP, Thymeleaf\uB97C \uC9C0\uB098 React\uB85C \uC815\uCC29</li>
              <li>React\uB85C \uBC14\uB010 \uC774\uD6C4\uC5D0\uB3C4 Class Component\uB85C \uC2DC\uC791\uD558\uC5EC FC, Custom Hook, CSS-in-JS \uC801\uC6A9 \uB4F1 \uC9C0\uC18D\uC801\uC778 \uBCC0\uD654\uAC00 \uC788\uC5C8\uC74C</li>
              <li>Backend\uB294 Spring Framework\uC5D0\uC11C SpringBoot\uB85C \uBCC0\uACBD\uD558\uC5EC \uC0AC\uC6A9 \uC911</li>
              <li>\uD5A5\uD6C4 express.js \uAE30\uBC18\uC758 node.js \uC11C\uBC84\uB85C \uBCC0\uACBD\uC744 \uACC4\uD68D\uC911</li>
          </ul>
          \uC0AC\uC6A9 \uAD6C\uC870
          <ul>
              <li>WebCrawler\uB85C \uAC1C\uC778 \uAE30\uB85D\uC744 \uC218\uC9D1\uD558\uC5EC DB\uC5D0 \uC800\uC7A5</li>
              <li>\uC0AC\uC6A9\uC790\uAC00 \uD2B9\uC815 \uAE30\uB2A5\uC5D0 \uC811\uADFC\uD560 \uB54C \uC800\uC7A5\uB41C \uB370\uC774\uD130\uC5D0 \uB300\uD574 \uC5F0\uC0B0\uC744 \uC218\uD589\uD558\uC5EC \uC0AC\uC6A9\uC790\uC5D0\uAC8C \uC815\uBCF4\uB97C \uC81C\uACF5</li>
          </ul>`,en:`System configuration<br/>
          As this is my oldest web service, it had many changes
          <ol>
              <li>1st gen: Spring Framework 4 / JSP</li>
              <li>2nd gen: Spring Boot 2 / Thymeleaf / Vue.js (non SPA)</li>
              <li>3rd gen: Spring Boot 2 (Backend) + ReactJS (Frontend): GCE -> EC2 -> Lightsail</li>
              <li>4th gen: Spring Boot 2 (Backend-AWS Lightsail) + ReactJS (Frontend-AWS S3)</li>
          </ol>
          Keep evolving internals
          <ul>
              <li>Frontend: JSP -> Thymeleaf -> React</li>
              <li>Even after I changed frontend into React, I keep upgrading it from Class Component to Functional components, Custom Hook, and applying CSS-in-JS, etc</li>
              <li>Backend: Spring Framework -> SpringBoot</li>
              <li>I have plan for changing backend into nodeJS server based on expressJS</li>
          </ul>
          How to used by user
          <ul>
              <li>Save data into DB by crawling data from web</li>
              <li>Give useful data to users by refining collected data</li>
          </ul>`},image:["/project/sin/01.png","/project/sin/02.png","/project/sin/03.jpg"]},{icon:"/project/piu/icon.png",title:{ko:"PIU \uAE30\uB85D \uAD00\uB9AC \uD234",jp:"PIU \u8A18\u9332\u7BA1\u7406\u30C4\u30FC\u30EB",en:"PIU Manager"},simpledesc:{ko:"\uB9AC\uB4EC\uAC8C\uC784 Pump It Up\uC758 \uAE30\uB85D \uAD00\uB9AC \uC0AC\uC774\uD2B8",jp:"\u97F3\u30B2\u30FCPump It Up\u30B7\u30EA\u30FC\u30BA\u306E\u8A18\u9332\u7BA1\u7406\u30B5\u30FC\u30D3\u30B9",en:"Data management service for rhythm game Pump It Up series"},platform:"Web, Android",tech:"ReactJS (TypeScript), NodeJS (TypeScript), Android (Kotlin), AWS DynamoDB, AWS S3, AWS Lambda, MobX, BootStrap, etc",period:"2018.07~",link:["https://piu.nira.one","https://play.google.com/store/apps/details?id=one.nira.piu","https://github.com/prunusnira/piumanager"],content:{ko:`<ul>
            <li>\uB9AC\uB4EC\uAC8C\uC784 Pump It Up\uC758 \uAC1C\uC778 \uAE30\uB85D \uAD00\uB9AC\uB97C \uC790\uB3D9\uD654 \uD55C \uC6F9 \uC11C\uBE44\uC2A4</li>
            <li>\uC720\uC800\uB4E4\uC774 \uC218\uB3D9\uC801\uC73C\uB85C \uC774\uBBF8\uC9C0\uB97C \uC218\uC815\uD558\uBA74\uC11C \uC0AC\uC6A9\uD558\uACE0 \uC788\uB294 \uC11C\uC5F4\uD45C\uB97C \uBCF4\uACE0 \uC790\uB3D9\uD654\uD558\uBA74 \uC5B4\uB5A8\uAE4C \uD558\uB294 \uC0DD\uAC01\uC73C\uB85C \uC81C\uC791</li>
            <li>GitHub\uC5D0\uC11C PR\uC744 \uBC1B\uC544 \uC0C8\uB85C\uC6B4 \uBC88\uC5ED\uC744 \uCD94\uAC00\uD558\uAE30\uB3C4 \uD588\uC74C</li>
        </ul>`,jp:`<ul>
            <li>\uB9AC\uB4EC\uAC8C\uC784 Pump It Up\uC758 \uAC1C\uC778 \uAE30\uB85D \uAD00\uB9AC\uB97C \uC790\uB3D9\uD654 \uD55C \uC6F9 \uC11C\uBE44\uC2A4</li>
            <li>\uC720\uC800\uB4E4\uC774 \uC218\uB3D9\uC801\uC73C\uB85C \uC774\uBBF8\uC9C0\uB97C \uC218\uC815\uD558\uBA74\uC11C \uC0AC\uC6A9\uD558\uACE0 \uC788\uB294 \uC11C\uC5F4\uD45C\uB97C \uBCF4\uACE0 \uC790\uB3D9\uD654\uD558\uBA74 \uC5B4\uB5A8\uAE4C \uD558\uB294 \uC0DD\uAC01\uC73C\uB85C \uC81C\uC791</li>
            <li>GitHub\uC5D0\uC11C PR\uC744 \uBC1B\uC544 \uC0C8\uB85C\uC6B4 \uBC88\uC5ED\uC744 \uCD94\uAC00\uD558\uAE30\uB3C4 \uD588\uC74C</li>
        </ul>`,en:`<ul>
            <li>An web service for managing personal record of rhythmgame Pump It Up series</li>
            <li>Inspired by users who manage their record by their hands, and thought it will be useful to do it on web and save data</li>
            <li>It had pull request from GitHub for translating the service into simplified chinese</li>
        </ul>`},dev:{ko:`Backend<br/>
                <ul>
                    <li>1\uC138\uB300: NodeJS, NGINX, MariaDB</li>
                    <li>2\uC138\uB300: AWS Lambda, AWS S3, MariaDB</li>
                </ul>
                Front<br/>
                <ul>
                    <li>ReactJS, TypeScript</li>
                </ul>
                \uB0B4\uBD80 \uAD6C\uC870\uC758 \uC9C0\uC18D\uC801\uC778 \uAC1C\uC120
                <ul>
                    <li>Skill Navigator\uC758 Frontend \uBD80\uBD84\uC774 Class\uC5D0\uC11C FC\uB85C\uC758 \uC774\uC804 \uC774\uD6C4 \uB3D9\uC77C\uD55C \uBC29\uD5A5\uC131\uC73C\uB85C \uAC1C\uC120\uC774 \uC774\uB8E8\uC5B4\uC9D0</li>
                    <li>Backend\uB294 DB\uB97C \uBD88\uB7EC\uC624\uB294 \uC815\uB3C4\uC758 \uAC04\uB2E8\uD55C \uC791\uC5C5\uC774\uB77C \uCC98\uC74C\uBD80\uD130 express.js\uB85C \uC81C\uC791\uD558\uC600\uACE0 \uC774\uD6C4 \uAC1C\uC120\uC744 \uAC70\uCCD0 AWS Lambda\uB85C \uC11C\uBC84\uB9AC\uC2A4\uAC00 \uB418\uC5C8\uC74C</li>
                </ul>
                \uB370\uC774\uD130
                <ul>
                    <li>\uD328\uD134 \uB370\uC774\uD130\uB294 DB\uC5D0\uC11C \uAD00\uB9AC\uD558\uC9C0\uB9CC \uAC1C\uC778 \uAE30\uB85D\uC744 \uC800\uC7A5\uD558\uB294 \uB370\uC774\uD130\uB294 urlencoded \uB41C \uB0B4\uC6A9\uC744 CSV \uD30C\uC77C\uB85C \uC81C\uACF5</li>
                    <li>Kotlin\uC744 \uC0AC\uC6A9\uD574 WebView\uB97C \uC751\uC6A9\uD55C \uD558\uC774\uBE0C\uB9AC\uB4DC \uC571\uC744 \uAC1C\uBC1C\uD558\uC5EC PlayStore\uC5D0 \uAC8C\uC2DC (\uC571\uC740 CSV\uD30C\uC77C\uC744 \uB0B4\uBD80\uC801\uC73C\uB85C \uAD00\uB9AC\uD568)</li>
                </ul>
                `,jp:`Backend<br/>
      <ul>
          <li>1\uC138\uB300: NodeJS, NGINX, MariaDB</li>
          <li>2\uC138\uB300: AWS Lambda, AWS S3, MariaDB</li>
      </ul>
      Front<br/>
      <ul>
          <li>ReactJS, TypeScript</li>
      </ul>
      \uB0B4\uBD80 \uAD6C\uC870\uC758 \uC9C0\uC18D\uC801\uC778 \uAC1C\uC120
      <ul>
          <li>Skill Navigator\uC758 Frontend \uBD80\uBD84\uC774 Class\uC5D0\uC11C FC\uB85C\uC758 \uC774\uC804 \uC774\uD6C4 \uB3D9\uC77C\uD55C \uBC29\uD5A5\uC131\uC73C\uB85C \uAC1C\uC120\uC774 \uC774\uB8E8\uC5B4\uC9D0</li>
          <li>Backend\uB294 DB\uB97C \uBD88\uB7EC\uC624\uB294 \uC815\uB3C4\uC758 \uAC04\uB2E8\uD55C \uC791\uC5C5\uC774\uB77C \uCC98\uC74C\uBD80\uD130 express.js\uB85C \uC81C\uC791\uD558\uC600\uACE0 \uC774\uD6C4 \uAC1C\uC120\uC744 \uAC70\uCCD0 AWS Lambda\uB85C \uC11C\uBC84\uB9AC\uC2A4\uAC00 \uB418\uC5C8\uC74C</li>
      </ul>
      \uB370\uC774\uD130
      <ul>
          <li>\uD328\uD134 \uB370\uC774\uD130\uB294 DB\uC5D0\uC11C \uAD00\uB9AC\uD558\uC9C0\uB9CC \uAC1C\uC778 \uAE30\uB85D\uC744 \uC800\uC7A5\uD558\uB294 \uB370\uC774\uD130\uB294 urlencoded \uB41C \uB0B4\uC6A9\uC744 CSV \uD30C\uC77C\uB85C \uC81C\uACF5</li>
          <li>Kotlin\uC744 \uC0AC\uC6A9\uD574 WebView\uB97C \uC751\uC6A9\uD55C \uD558\uC774\uBE0C\uB9AC\uB4DC \uC571\uC744 \uAC1C\uBC1C\uD558\uC5EC PlayStore\uC5D0 \uAC8C\uC2DC (\uC571\uC740 CSV\uD30C\uC77C\uC744 \uB0B4\uBD80\uC801\uC73C\uB85C \uAD00\uB9AC\uD568)</li>
      </ul>
      `,en:`Backend<br/>
      <ul>
          <li>1st gen: NodeJS, NGINX, MariaDB</li>
          <li>2nd gen: AWS Lambda, AWS S3, MariaDB</li>
      </ul>
      Front<br/>
      <ul>
          <li>ReactJS, TypeScript</li>
      </ul>
      Internal structure changes
      <ul>
          <li>As Skill Navigator has changed its frontend from class react components into functional react component, this project had same changes</li>
          <li>Backend has simple function to store and load data from DB, so I made it with expressJS, and then converted it into AWS Lambda</li>
      </ul>
      Data
      <ul>
          <li>DB manages pattern data, but personal records are managed with url-encoded CSV file (supports upload and download)</li>
          <li>It also has Android app using Kotlin and Android WebView, published in Google PlayStore</li>
      </ul>
      `},image:["/project/piu/01.jpg","/project/piu/02.png"]},{icon:"/project/banpick/icon.png",title:{ko:"\uD2B8\uC704\uCE58 \uBC34\uD53D \uC571",jp:"Twitch BanPicker",en:"Twitch BanPicker"},simpledesc:{ko:"\uD2B8\uC704\uCE58 \uC2A4\uD2B8\uB9AC\uBA38\uC758 \uCEE8\uD150\uCE20\uC5D0 \uD65C\uC6A9\uB420 \uC218 \uC788\uB294 LoL \uC2A4\uD0C0\uC77C \uBC34\uD53D \uC571",jp:"",en:"League of legends styled BAN/PICK web app for Twitch streamers"},platform:"Web",tech:"ReactJS (TypeScript), JavaScript, Bootstrap, AWS S3, Jest, Redux",period:"2020.11.09~2020.11.14 (5 days + keep updating)",link:["https://banpick.nira.one","https://github.com/prunusnira/twitch-banpicker","https://youtu.be/t37LvUoVcFc"],content:{ko:`(\uB9C1\uD06C3: \uC2E4\uC81C \uC0AC\uC6A9 \uC608\uC2DC \uC601\uC0C1)
                <ul>
                    <li>\uD2B8\uC704\uCE58 \uC2A4\uD2B8\uB9AC\uBA38\uC758 \uCEE8\uD150\uCE20\uC5D0 \uD65C\uC6A9\uD560 \uC218 \uC788\uB294 LoL \uBC34\uD53D \uC2A4\uD0C0\uC77C\uC758 \uC6F9 \uC571</li>
                    <li>\uC2DC\uCCAD\uC790\uB294 \uC6F9 \uC571\uC5D0\uC11C \uC9C0\uC815\uD55C \uBA85\uB839\uC5B4\uB97C \uCC44\uD305\uC73C\uB85C \uC785\uB825\uD558\uC5EC \uC2A4\uD2B8\uB9AC\uBA38\uC640 \uC18C\uD1B5\uD558\uBA74\uC11C \uC571\uC744 \uC0AC\uC6A9\uD560 \uC218 \uC788\uC74C</li>
                    <li>Twitch API, WebSocket, WebWorker \uB4F1\uC744 \uD65C\uC6A9\uD558\uC5EC \uC81C\uC791</li>
                </ul>`,jp:`(\uB9C1\uD06C3: \uC2E4\uC81C \uC0AC\uC6A9 \uC608\uC2DC \uC601\uC0C1)
      <ul>
          <li>\uD2B8\uC704\uCE58 \uC2A4\uD2B8\uB9AC\uBA38\uC758 \uCEE8\uD150\uCE20\uC5D0 \uD65C\uC6A9\uD560 \uC218 \uC788\uB294 LoL \uBC34\uD53D \uC2A4\uD0C0\uC77C\uC758 \uC6F9 \uC571</li>
          <li>\uC2DC\uCCAD\uC790\uB294 \uC6F9 \uC571\uC5D0\uC11C \uC9C0\uC815\uD55C \uBA85\uB839\uC5B4\uB97C \uCC44\uD305\uC73C\uB85C \uC785\uB825\uD558\uC5EC \uC2A4\uD2B8\uB9AC\uBA38\uC640 \uC18C\uD1B5\uD558\uBA74\uC11C \uC571\uC744 \uC0AC\uC6A9\uD560 \uC218 \uC788\uC74C</li>
          <li>Twitch API, WebSocket, WebWorker \uB4F1\uC744 \uD65C\uC6A9\uD558\uC5EC \uC81C\uC791</li>
      </ul>`,en:`(Link 3: usage example by a streamer, korean)
      <ul>
          <li>An web app for Twitch Streamers which can be used in their contents, which uses BAN/PICK mechanism from League of Legends</li>
          <li>Viewers can interact with streamer by entering chat or command</li>
          <li>Made with Twitch API, WebSocket, WebWorker</li>
      </ul>`},dev:{ko:`<ol>
                    <li>Twitch API\uB85C \uCC44\uB110 \uB0B4 \uC2DC\uCCAD\uC790\uB4E4\uC758 \uCC44\uD305 \uB0B4\uC6A9\uC744 \uC77D\uC5B4 \uBD84\uC11D\uD558\uACE0, \uC790\uCCB4 \uBA85\uB839\uC5B4\uB97C \uAE30\uBC18\uC73C\uB85C \uB3D9\uC791\uC744 \uC218\uD589</li>
                    <li>AWS S3\uC5D0 \uB370\uC774\uD130\uB97C \uC62C\uB9AC\uACE0 CloudFront\uB85C SSL\uC744 \uC9C0\uC6D0\uD558\uB294 \uBC29\uC2DD\uC73C\uB85C \uBC30\uD3EC</li>
                    <li>\uC800\uC7A5\uC774 \uD544\uC694\uD55C \uB370\uC774\uD130\uB294 redux-persist\uB97C \uC0AC\uC6A9</li>
                </ol>`,jp:`<ol>
            <li>Twitch API\uB85C \uCC44\uB110 \uB0B4 \uC2DC\uCCAD\uC790\uB4E4\uC758 \uCC44\uD305 \uB0B4\uC6A9\uC744 \uC77D\uC5B4 \uBD84\uC11D\uD558\uACE0, \uC790\uCCB4 \uBA85\uB839\uC5B4\uB97C \uAE30\uBC18\uC73C\uB85C \uB3D9\uC791\uC744 \uC218\uD589</li>
            <li>AWS S3\uC5D0 \uB370\uC774\uD130\uB97C \uC62C\uB9AC\uACE0 CloudFront\uB85C SSL\uC744 \uC9C0\uC6D0\uD558\uB294 \uBC29\uC2DD\uC73C\uB85C \uBC30\uD3EC</li>
            <li>\uC800\uC7A5\uC774 \uD544\uC694\uD55C \uB370\uC774\uD130\uB294 redux-persist\uB97C \uC0AC\uC6A9</li>
        </ol>`,en:`<ol>
            <li>Reads chat with Twitch API, analyze and run commands from it</li>
            <li>Used redux with redux-persist to save data</li>
            <li>Released with CloudFront from Amazon Web Service (with AWS S3)</li>
        </ol>`},image:["/project/banpick/01.png","/project/banpick/02.png"]},{icon:"/project/rhythm/icon.png",title:{ko:"RhythmTracers (BMS Player)",jp:"RhythmTracers (BMS Player)",en:"RhythmTracers (BMS Player)"},simpledesc:{ko:"Unity\uB85C \uC81C\uC791\uB41C BMS \uAD6C\uB3D9\uAE30 (\uB9AC\uB4EC\uAC8C\uC784)",jp:"",en:"A rhythm game made with Unity3D (Be-Music Script Player)"},platform:"Unity3D (Windows)",tech:"Unity3D",period:"2020.08~",link:["https://youtu.be/lWQG4gIjGDM","https://github.com/prunusnira/rhythmspaceV2"],content:{ko:`<ul>
                    <li>Unity3D\uB85C \uAC1C\uBC1C\uB41C \uAC74\uBC18\uD615 \uB9AC\uB4EC\uAC8C\uC784</li>
                    <li>BMS(Be-Music Script)\uB97C \uC77D\uC5B4 \uAC8C\uC784\uC744 \uC9C4\uD589</li>
                </ul>`,jp:`<ul>
      <li>Unity3D\uB85C \uAC1C\uBC1C\uB41C \uAC74\uBC18\uD615 \uB9AC\uB4EC\uAC8C\uC784</li>
      <li>BMS(Be-Music Script)\uB97C \uC77D\uC5B4 \uAC8C\uC784\uC744 \uC9C4\uD589</li>
  </ul>`,en:`<ul>
      <li>A classic keyboard type rhythm game made with Unity3D</li>
      <li>Read BMS(Be-Music Script) to play game</li>
  </ul>`},dev:{ko:`<ul>
                    <li>C# \uAE30\uBC18\uC758 BMS \uCC98\uB9AC \uBAA8\uB4C8\uC744 \uC81C\uC791<br/>
                    (BMS\uC5D0 \uB300\uD55C \uD30C\uC2F1, \uB178\uD2B8 \uC624\uBE0C\uC81D\uD2B8 \uC0DD\uC131, \uC2DC\uAC04\uC5D0 \uB530\uB978 \uB178\uD2B8 \uC774\uB3D9 \uB4F1)</li>
                    <li>\uD50C\uB808\uC774 \uC2DC\uC791 \uC2DC\uAC04\uC744 \uAE30\uC900\uC73C\uB85C \uACE1\uC758 \uC7AC\uC0DD \uC2DC\uAC04\uC5D0 \uB9DE\uCD94\uC5B4 \uB178\uD2B8 \uC704\uCE58\uB97C \uBCC0\uACBD\uC2DC\uD0A4\uB294 \uBC29\uC2DD\uC73C\uB85C \uAD6C\uD604</li>
                    <li>\uC678\uBD80\uC5D0\uC11C \uC77D\uC5B4\uB4E4\uC778 BMS\uC758 \uBAA9\uB85D\uC740 SQLite\uB85C \uAD00\uB9AC</li>
                    <li>\uC0AC\uC6A9\uC790\uB4E4\uC774 \uB9CC\uB4E0 \uCEE4\uC2A4\uD140 \uC2A4\uD0A8\uC744 \uC801\uC6A9\uD560 \uC218 \uC788\uB294 \uC2DC\uC2A4\uD15C \uC81C\uACF5</li>
                    <li>\uC2F1\uD06C \uC870\uC808\uC774\uB098 \uCD5C\uB300 \uD504\uB808\uC784 \uB808\uC774\uD2B8 \uB4F1 \uC5ED\uC2DC \uC790\uC720\uB86D\uAC8C \uC870\uC808\uD560 \uC218 \uC788\uAC8C \uB9CC\uB4E6</li>
                </ul>`,jp:`<ul>
      <li>C# \uAE30\uBC18\uC758 BMS \uCC98\uB9AC \uBAA8\uB4C8\uC744 \uC81C\uC791<br/>
      (BMS\uC5D0 \uB300\uD55C \uD30C\uC2F1, \uB178\uD2B8 \uC624\uBE0C\uC81D\uD2B8 \uC0DD\uC131, \uC2DC\uAC04\uC5D0 \uB530\uB978 \uB178\uD2B8 \uC774\uB3D9 \uB4F1)</li>
      <li>\uD50C\uB808\uC774 \uC2DC\uC791 \uC2DC\uAC04\uC744 \uAE30\uC900\uC73C\uB85C \uACE1\uC758 \uC7AC\uC0DD \uC2DC\uAC04\uC5D0 \uB9DE\uCD94\uC5B4 \uB178\uD2B8 \uC704\uCE58\uB97C \uBCC0\uACBD\uC2DC\uD0A4\uB294 \uBC29\uC2DD\uC73C\uB85C \uAD6C\uD604</li>
      <li>\uC678\uBD80\uC5D0\uC11C \uC77D\uC5B4\uB4E4\uC778 BMS\uC758 \uBAA9\uB85D\uC740 SQLite\uB85C \uAD00\uB9AC</li>
      <li>\uC0AC\uC6A9\uC790\uB4E4\uC774 \uB9CC\uB4E0 \uCEE4\uC2A4\uD140 \uC2A4\uD0A8\uC744 \uC801\uC6A9\uD560 \uC218 \uC788\uB294 \uC2DC\uC2A4\uD15C \uC81C\uACF5</li>
      <li>\uC2F1\uD06C \uC870\uC808\uC774\uB098 \uCD5C\uB300 \uD504\uB808\uC784 \uB808\uC774\uD2B8 \uB4F1 \uC5ED\uC2DC \uC790\uC720\uB86D\uAC8C \uC870\uC808\uD560 \uC218 \uC788\uAC8C \uB9CC\uB4E6</li>
  </ul>`,en:`<ul>
      <li>Made own BMS processor component with C#<br/>
      (parsing BMS file, creating note object, note moving algorithm, and so on)</li>
      <li>It has fixed point of time to calculate current note positin as time passes</li>
      <li>BMS list is managed with SQLite</li>
      <li>Customizable skin system which users can make their own</li>
      <li>Free to control sync, maximum framerate by user</li>
  </ul>`},image:["/project/rhythm/01.png","/project/rhythm/02.png","/project/rhythm/03.jpg"]},{icon:"/project/launcher/icon.png",title:{ko:"Drawing Launcher",jp:"Drawing Launcher",en:"Drawing Launcher"},simpledesc:{ko:"\uC0AC\uC6A9\uC790\uC758 \uC81C\uC2A4\uCC98\uB85C \uC571\uC744 \uC2E4\uD589\uD558\uB294 \uC548\uB4DC\uB85C\uC774\uB4DC \uB7F0\uCC98",jp:"",en:"Android home launcher to execute apps and function by drawing gestures"},platform:"Android",tech:"Android (Java)",period:"2016.08~2017.04",link:["https://play.google.com/store/apps/details?id=com.roxyeris.drawinglauncher","https://github.com/prunusnira/DrawingLauncher"],content:{ko:`<ul>
                    <li>\uD654\uBA74\uC5D0 \uC81C\uC2A4\uCC98\uB97C \uADF8\uB824\uC11C \uC571\uC744 \uC2E4\uD589\uD558\uAC70\uB098 \uB2E4\uB978 \uB3D9\uC791\uC744 \uC218\uD589\uD558\uB294 \uC548\uB4DC\uB85C\uC774\uB4DC \uB7F0\uCC98</li>
                    <li>\uB2E8\uC21C\uD788 \uC81C\uC2A4\uCC98 \uC678\uC5D0\uB3C4 \uC77C\uBC18\uC801\uC778 \uC571 \uC11C\uB78D \uAE30\uB2A5\uB3C4 \uD3EC\uD568</li>
                </ul>`,jp:`<ul>
      <li>\uD654\uBA74\uC5D0 \uC81C\uC2A4\uCC98\uB97C \uADF8\uB824\uC11C \uC571\uC744 \uC2E4\uD589\uD558\uAC70\uB098 \uB2E4\uB978 \uB3D9\uC791\uC744 \uC218\uD589\uD558\uB294 \uC548\uB4DC\uB85C\uC774\uB4DC \uB7F0\uCC98</li>
      <li>\uB2E8\uC21C\uD788 \uC81C\uC2A4\uCC98 \uC678\uC5D0\uB3C4 \uC77C\uBC18\uC801\uC778 \uC571 \uC11C\uB78D \uAE30\uB2A5\uB3C4 \uD3EC\uD568</li>
  </ul>`,en:`<ul>
      <li>A simple Android app launcher which uses gesture to execute app or phone functionalities</li>
      <li>Also has app drawer feature, and categorize apps</li>
  </ul>`},dev:{ko:`<ul>
                <li>Android\uC758 API\uB85C \uC81C\uACF5\uB418\uB294 Gesture, Gesture Store\uB97C \uC0AC\uC6A9\uD558\uC5EC \uAC1C\uBC1C</li>
                <li>Gesture\uB294 Gesture Store\uC5D0 \uD3EC\uD568\uB418\uC5B4 \uB85C\uCEEC \uD30C\uC77C\uB85C \uC800\uC7A5</li>
                <li>\uC571 \uC11C\uB78D\uC740 GridLayout\uC73C\uB85C \uD45C\uD604\uD558\uBA70 \uC635\uC158\uC5D0\uC11C \uC0AC\uC774\uC988 \uBCC0\uACBD\uC774 \uAC00\uB2A5</li>
            </ul>`,jp:`<ul>
      <li>Android\uC758 API\uB85C \uC81C\uACF5\uB418\uB294 Gesture, Gesture Store\uB97C \uC0AC\uC6A9\uD558\uC5EC \uAC1C\uBC1C</li>
      <li>Gesture\uB294 Gesture Store\uC5D0 \uD3EC\uD568\uB418\uC5B4 \uB85C\uCEEC \uD30C\uC77C\uB85C \uC800\uC7A5</li>
      <li>\uC571 \uC11C\uB78D\uC740 GridLayout\uC73C\uB85C \uD45C\uD604\uD558\uBA70 \uC635\uC158\uC5D0\uC11C \uC0AC\uC774\uC988 \uBCC0\uACBD\uC774 \uAC00\uB2A5</li>
  </ul>`,en:`<ul>
      <li>Used Gesture Store (provided from Android API) to store gestures</li>
      <li>Gestures are managed as local file</li>
      <li>Used GridLayout for app drawer, and freely customizable from option</li>
  </ul>`},image:["/project/launcher/01.jpg","/project/launcher/02.jpg","/project/launcher/03.jpg","/project/launcher/04.jpg"]},{icon:"/project/ringtone/icon.png",title:{ko:"Ringtone Randomizer",jp:"Ringtone Manager",en:"Ringtone Manager"},simpledesc:{ko:"\uAD6C \uC548\uB4DC\uB85C\uC774\uB4DC\uC5D0\uC11C \uC0AC\uC6A9\uB41C \uBCA8\uC18C\uB9AC \uB79C\uB364 \uC7AC\uC0DD \uC5B4\uD50C",jp:"",en:"Ringtone randomizer for old Android"},platform:"Android (Under 7)",tech:"Android (Java), SQLite",period:"2011~2012 / 2015",link:["https://play.google.com/store/apps/details?id=com.ring.roxyeris","https://github.com/prunusnira/ringtone-public"],content:{ko:`<ul>
                    <li>\uAE30\uAE30\uC758 \uC804\uD654\uAC00 \uD55C \uBC88 \uC62C \uB54C\uB9C8\uB2E4 \uBCA8\uC18C\uB9AC\uB97C \uB79C\uB364\uC73C\uB85C \uBC14\uAFD4\uC8FC\uB294 \uC571</li>
                    <li>\uCC29\uC2E0 \uC0C1\uD0DC\uB97C \uD655\uC778\uD558\uC5EC \uC0C1\uD0DC \uBCC0\uACBD\uC5D0 \uB530\uB77C \uC2DC\uC2A4\uD15C \uC635\uC158\uC744 \uBCC0\uACBD</li>
                </ul>`,jp:`<ul>
      <li>\uAE30\uAE30\uC758 \uC804\uD654\uAC00 \uD55C \uBC88 \uC62C \uB54C\uB9C8\uB2E4 \uBCA8\uC18C\uB9AC\uB97C \uB79C\uB364\uC73C\uB85C \uBC14\uAFD4\uC8FC\uB294 \uC571</li>
      <li>\uCC29\uC2E0 \uC0C1\uD0DC\uB97C \uD655\uC778\uD558\uC5EC \uC0C1\uD0DC \uBCC0\uACBD\uC5D0 \uB530\uB77C \uC2DC\uC2A4\uD15C \uC635\uC158\uC744 \uBCC0\uACBD</li>
  </ul>`,en:`<ul>
      <li>An Android app which changes ringtone randomly after each call</li>
      <li>Check current call state to change system option</li>
  </ul>`},dev:{ko:`<ul>
                    <li>Android \uB0B4\uBD80\uC758 Telephony Manager, Phone State Listener\uB85C \uCC29\uC2E0 \uC0C1\uD0DC \uD655\uC778</li>
                    <li>SQLite\uC5D0 \uC0AC\uC6A9\uC790\uAC00 \uBCA8\uC18C\uB9AC\uB85C \uC9C0\uC815\uD558\uACE0 \uC2F6\uC5B4\uD558\uB294 \uC74C\uC545 \uD30C\uC77C\uC744 \uB4F1\uB85D \uBC0F \uAD00\uB9AC</li>
                    <li>\uCC29\uC2E0 \uC0C1\uD0DC\uAC00 \uBCC0\uACBD\uB420 \uB54C \uB9C8\uB2E4 \uBC31\uADF8\uB77C\uC6B4\uB4DC \uC11C\uBE44\uC2A4\uB85C \uBCA8\uC18C\uB9AC\uB97C \uBCC0\uACBD\uD558\uB3C4\uB85D \uCC98\uB9AC</li>
                </ul>`,jp:`<ul>
      <li>Android \uB0B4\uBD80\uC758 Telephony Manager, Phone State Listener\uB85C \uCC29\uC2E0 \uC0C1\uD0DC \uD655\uC778</li>
      <li>SQLite\uC5D0 \uC0AC\uC6A9\uC790\uAC00 \uBCA8\uC18C\uB9AC\uB85C \uC9C0\uC815\uD558\uACE0 \uC2F6\uC5B4\uD558\uB294 \uC74C\uC545 \uD30C\uC77C\uC744 \uB4F1\uB85D \uBC0F \uAD00\uB9AC</li>
      <li>\uCC29\uC2E0 \uC0C1\uD0DC\uAC00 \uBCC0\uACBD\uB420 \uB54C \uB9C8\uB2E4 \uBC31\uADF8\uB77C\uC6B4\uB4DC \uC11C\uBE44\uC2A4\uB85C \uBCA8\uC18C\uB9AC\uB97C \uBCC0\uACBD\uD558\uB3C4\uB85D \uCC98\uB9AC</li>
  </ul>`,en:`<ul>
      <li>Using Telephony Manager, Phone State Listener from Android API to check current call state</li>
      <li>Manages music files to be used as ringtone from SQLite</li>
      <li>Uses Android Service API to change ringtone from background</li>
  </ul>`},image:["/project/ringtone/01.jpg","/project/ringtone/02.jpg","/project/ringtone/03.jpg","/project/ringtone/04.jpg","/project/ringtone/05.jpg"]}],h0=[{icon:"/project/copin200/logo.png",title:{ko:"Copin Comics 2.0",jp:"Copin Comics 2.0",en:"Copin Comics 2.0"},simpledesc:{ko:"\uB808\uAC70\uC2DC \uD3EC\uD305 \uC774\uD6C4 \uC0C8 \uAE30\uB2A5 \uB4F1\uC744 \uCD94\uAC00\uD558\uC5EC \uC0C8\uB85C\uC6B4 \uCF54\uB4DC\uBCA0\uC774\uC2A4\uB85C \uAC1C\uBC1C",jp:"\u30EC\u30AC\u30B7\u30A3\u30DD\u30FC\u30C6\u30A3\u30F3\u30B0\u4EE5\u5F8C\u65B0\u305F\u306A\u6A5F\u80FD\u3092\u8FFD\u52A0\u3057\u3066\u6700\u521D\u304B\u3089\u518D\u958B\u767A",en:"Created app from scratch with new functions added after porting legacy codes"},platform:"Web",tech:"ReactJS (TypeScript), NextJS, Redux, styled-components",period:"2022.02-2022.07",link:[],content:{ko:`<ul>
              <li>1.5 \uAC1C\uBC1C \uC644\uB8CC \uD6C4 \uC0C8\uB85C\uC6B4 \uAE30\uB2A5\uC744 \uCD94\uAC00\uD558\uB294 \uD655\uC7A5 \uBC84\uC804 \uAC1C\uBC1C\uC744 \uCD08\uAE30\uC5D0 \uACC4\uD68D</li>
              <li>\uC810\uC810 \uAE30\uD68D\uC774 \uCEE4\uC9C0\uBA74\uC11C \uC0C8\uB86D\uAC8C \uAC1C\uD3B8\uC744 \uD558\uC790\uB294 \uBC29\uD5A5\uC73C\uB85C \uBCC0\uACBD</li>
              <li>\uADF8\uB798\uC11C \uBAA8\uB4E0 \uCF54\uB4DC\uBCA0\uC774\uC2A4\uB97C \uCC98\uC74C\uBD80\uD130 \uB2E4\uC2DC \uAC1C\uBC1C\uD558\uB294 \uBC29\uD5A5\uC73C\uB85C \uC9C4\uD589\uB428</li>
          </ul>`,jp:`<ul>
            <li>1.5\u958B\u767A\u5F8C\u65B0\u3057\u3044\u6A5F\u80FD\u3092\u8FFD\u52A0\u3059\u308B\u62E1\u5F35\u30D0\u30FC\u30B8\u30E7\u30F3\u3092\u4F01\u753B</li>
            <li>\u4F01\u753B\u304C\u5927\u304D\u304F\u306A\u3066\u65B0\u3057\u304F\u6539\u5909\u3059\u308B\u3053\u3068\u306B\u306A\u3063\u3066\u3057\u307E\u3063\u305F\uFF01</li>
            <li>\u305D\u308C\u3067\u5168\u3066\u306E\u30B3\u30FC\u30C9\u3092\u6700\u521D\u304B\u3089\u518D\u958B\u767A\u3059\u308B\u3053\u3068\u306B\u306A\u3063\u3066\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u9032\u884C</li>
        </ul>`,en:`<ul>
            <li>After developing 1.5 version, there was new plan for adding new features to project</li>
            <li>But plan become bigger and bigger, and team decided to make a big upgrade for the project</li>
            <li>After all, all codes are re-written from the scratch</li>
        </ul>`},dev:{ko:`
        <b>[ \uB2F4\uB2F9\uD30C\uD2B8: \uD504\uB860\uD2B8\uC5D4\uB4DC \uAC1C\uBC1C \uD30C\uD2B8\uC7A5, \uD504\uB860\uD2B8\uC5D4\uB4DC \uC124\uACC4, \uAE30\uC220 \uC120\uD0DD, \uAC1C\uBC1C, \uD14C\uC2A4\uD2B8 \uB4F1 ]</b>
        <ul>
            <li>NextJS\uB97C \uB3C4\uC785\uD558\uBA74\uC11C \uAE30\uC874\uC5D0 \uC0AC\uC6A9\uD588\uB358 redux\uB97C \uD65C\uC6A9\uD560 \uC218 \uC5C6\uB294 \uBD80\uBD84\uB4E4\uC774 \uC5EC\uB7FF \uBC1C\uC0DD\uD558\uC5EC \uC774\uB97C \uD574\uACB0\uD558\uAE30 \uC704\uD574 cookie \uD65C\uC6A9 \uB4F1\uC5D0 \uB300\uD55C \uC5F0\uAD6C\uB97C \uC9C4\uD589</li>
        </ul>`,jp:`
      <b>[ \u62C5\u5F53: Frontend\u30D1\u30FC\u30C8\u9577\u3001\u8A2D\u8A08\u3001\u6280\u8853\u9078\u629E\u3001\u958B\u767A\u3001\u30C6\u30B9\u30C8\u306A\u3069 ]</b>
      <ul>
          <li>NextJS\u6295\u5165\u306B\u3088\u308Bredux\u306E\u4E00\u90E8\u3092\u4F7F\u3048\u306A\u3044\u3053\u3068\u304C\u3042\u308A\u3001\u305D\u306E\u89E3\u6C7A\u306E\u305F\u3081cookie\u3092\u6D3B\u7528\u3057\u305F\u308A\u306A\u3069\u306E\u7814\u7A76\u3092\u884C\u3046</li>
      </ul>`,en:`
      <b>[ Participated as: Frontend dev leader, Project design, Tech stack design, Development, Test ]</b>
      <ul>
          <li>With introducing NextJS into our project, we had some difficulties on using redux in some respect, so we changed some part like using cookies</li>
      </ul>`},image:["/project/copin200/cc2001.png","/project/copin200/cc2002.png","/project/copin200/cc2003.png","/project/copin200/cc2004.png"]},{icon:"/project/copin150/logo.png",title:{ko:"Copin Comics 1.5 (\uB808\uAC70\uC2DC \uD3EC\uD305)",jp:"Copin Comics 1.5 (\u30EC\u30AC\u30B7\u30A3\u30DD\u30FC\u30C6\u30A3\u30F3\u30B0)",en:"Copin Comics 1.5 (Legacy port)"},simpledesc:{ko:"php\uB85C \uAC1C\uBC1C\uB418\uC5C8\uB358 \uAE30\uC874 \uC11C\uBE44\uC2A4\uB97C React\uB85C \uD3EC\uD305",jp:"php\u3067\u958B\u767A\u3055\u308C\u305F\u30B5\u30FC\u30D3\u30B9\u3092React\u306B\u30DD\u30FC\u30C6\u30A3\u30F3\u30B0",en:"Ported legacy project into React which was developed using php"},platform:"Web",tech:"ReactJS (TypeScript), styled-components, Redux",period:"2021.12-2022.02",link:[],content:{ko:`<ul>
                    <li>php\uB85C \uC11C\uBC84/\uD074\uB77C\uC774\uC5B8\uD2B8\uAC00 \uD1B5\uD569\uB418\uC5B4 \uAC1C\uBC1C\uB418\uC5C8\uB358 \uCD08\uAE30\uC758 \uC11C\uBE44\uC2A4\uB97C \uD504\uB860\uD2B8\uC640 \uBC31\uC5D4\uB4DC\uB85C \uBD84\uB9AC</li>
                    <li>\uAE30\uC874 \uC11C\uBE44\uC2A4\uC758 \uAD6C\uC870\uB97C \uADF8\uB300\uB85C React\uB85C \uC62E\uAE30\uB294 \uAC83\uC744 \uC911\uC810\uC73C\uB85C \uAC1C\uBC1C \uC9C4\uD589</li>
                    <li>\uAE30\uC874 \uD648\uD398\uC774\uC9C0\uC758 UI\uC758 \uAE30\uC870\uB97C \uC720\uC9C0\uD558\uC5EC \uC0C8\uB86D\uAC8C \uB514\uC790\uC778 \uC791\uC5C5\uC744 \uC9C4\uD589</li>
                    <li>\uBC31\uC5D4\uB4DC\uB294 Spring Boot\uB85C \uBC31\uC5D4\uB4DC\uD300\uC5D0\uC11C \uBCC4\uB3C4\uB85C \uAC1C\uBC1C \uC9C4\uD589</li>
                </ul>`,jp:`<ul>
      <li>php\uB85C \uC11C\uBC84/\uD074\uB77C\uC774\uC5B8\uD2B8\uAC00 \uD1B5\uD569\uB418\uC5B4 \uAC1C\uBC1C\uB418\uC5C8\uB358 \uCD08\uAE30\uC758 \uC11C\uBE44\uC2A4\uB97C \uD504\uB860\uD2B8\uC640 \uBC31\uC5D4\uB4DC\uB85C \uBD84\uB9AC</li>
      <li>\uAE30\uC874 \uC11C\uBE44\uC2A4\uC758 \uAD6C\uC870\uB97C \uADF8\uB300\uB85C React\uB85C \uC62E\uAE30\uB294 \uAC83\uC744 \uC911\uC810\uC73C\uB85C \uAC1C\uBC1C \uC9C4\uD589</li>
      <li>\uAE30\uC874 \uD648\uD398\uC774\uC9C0\uC758 UI\uC758 \uAE30\uC870\uB97C \uC720\uC9C0\uD558\uC5EC \uC0C8\uB86D\uAC8C \uB514\uC790\uC778 \uC791\uC5C5\uC744 \uC9C4\uD589</li>
      <li>\uBC31\uC5D4\uB4DC\uB294 Spring Boot\uB85C \uBC31\uC5D4\uB4DC\uD300\uC5D0\uC11C \uBCC4\uB3C4\uB85C \uAC1C\uBC1C \uC9C4\uD589</li>
  </ul>`,en:`<ul>
      <li>Devided frontend and backend which was all-in-one developed with php</li>
      <li>Concentrated on moving legacy structures into React</li>
      <li>UI designs are changed but kept the design language</li>
      <li>Backend was developed with Spring Boot by separated backend team</li>
  </ul>`},dev:{ko:`<b>[ \uB2F4\uB2F9\uD30C\uD2B8: \uD504\uB860\uD2B8\uC5D4\uB4DC \uAC1C\uBC1C \uD30C\uD2B8\uC7A5, \uD504\uB860\uD2B8\uC5D4\uB4DC \uC124\uACC4, \uAE30\uC220 \uC120\uD0DD, \uAC1C\uBC1C, \uD14C\uC2A4\uD2B8 \uB4F1 ]</b>
                <ul>
                    <li>\uD504\uB860\uD2B8\uC5D4\uB4DC \uD300\uC6D0 2\uBA85\uC774 \uAC1C\uBC1C\uC744 \uC9C4\uD589</li>
                    <li>\uC8FC\uC5B4\uC9C4 \uAC1C\uBC1C \uAE30\uAC04\uC774 \uC9E7\uC544 \uAE30\uD68D/\uB514\uC790\uC778 \uD300\uACFC \uB3D9\uC2DC\uC5D0 \uC791\uC5C5\uC744 \uC9C4\uD589</li>
                    <li>\uC774\uB97C \uC704\uD574 \uC2DC\uC2A4\uD15C \uAE30\uBC18\uC744 \uBA3C\uC800 \uC791\uC5C5\uD558\uACE0 \uC774\uD6C4 \uAE30\uB2A5\uBCC4 \uBCC4\uB3C4 \uAC1C\uBC1C\uC744 \uC9C4\uD589</li>
                    <li>\uD2B9\uD788 \uAE30\uC874 \uB808\uAC70\uC2DC \uD398\uC774\uC9C0\uB294 \uBC18\uC751\uD615\uC5D0 \uB300\uD55C \uCC98\uB9AC\uAC00 \uB418\uC5B4\uC788\uC9C0 \uC54A\uACE0 \uC2A4\uD06C\uB9B0 \uC0AC\uC774\uC988\uC5D0 \uB530\uB77C \uBCC4\uB3C4\uB85C \uD398\uC774\uC9C0\uB97C \uB9CC\uB4DC\uB294 \uD615\uD0DC\uB85C \uC791\uC5C5\uC774 \uB418\uC5B4\uC788\uC5B4 \uC774\uB97C \uC0C8\uB86D\uAC8C \uC815\uC758\uD558\uC600\uC74C</li>
                </ul>`,jp:`<b>[ \uB2F4\uB2F9\uD30C\uD2B8: \uD504\uB860\uD2B8\uC5D4\uB4DC \uAC1C\uBC1C \uD30C\uD2B8\uC7A5, \uD504\uB860\uD2B8\uC5D4\uB4DC \uC124\uACC4, \uAE30\uC220 \uC120\uD0DD, \uAC1C\uBC1C, \uD14C\uC2A4\uD2B8 \uB4F1 ]</b>
      <ul>
          <li>\uD504\uB860\uD2B8\uC5D4\uB4DC \uD300\uC6D0 2\uBA85\uC774 \uAC1C\uBC1C\uC744 \uC9C4\uD589</li>
          <li>\uC8FC\uC5B4\uC9C4 \uAC1C\uBC1C \uAE30\uAC04\uC774 \uC9E7\uC544 \uAE30\uD68D/\uB514\uC790\uC778 \uD300\uACFC \uB3D9\uC2DC\uC5D0 \uC791\uC5C5\uC744 \uC9C4\uD589</li>
          <li>\uC774\uB97C \uC704\uD574 \uC2DC\uC2A4\uD15C \uAE30\uBC18\uC744 \uBA3C\uC800 \uC791\uC5C5\uD558\uACE0 \uC774\uD6C4 \uAE30\uB2A5\uBCC4 \uBCC4\uB3C4 \uAC1C\uBC1C\uC744 \uC9C4\uD589</li>
          <li>\uD2B9\uD788 \uAE30\uC874 \uB808\uAC70\uC2DC \uD398\uC774\uC9C0\uB294 \uBC18\uC751\uD615\uC5D0 \uB300\uD55C \uCC98\uB9AC\uAC00 \uB418\uC5B4\uC788\uC9C0 \uC54A\uACE0 \uC2A4\uD06C\uB9B0 \uC0AC\uC774\uC988\uC5D0 \uB530\uB77C \uBCC4\uB3C4\uB85C \uD398\uC774\uC9C0\uB97C \uB9CC\uB4DC\uB294 \uD615\uD0DC\uB85C \uC791\uC5C5\uC774 \uB418\uC5B4\uC788\uC5B4 \uC774\uB97C \uC0C8\uB86D\uAC8C \uC815\uC758\uD558\uC600\uC74C</li>
      </ul>`,en:`<b>[ Participated as: Frontend dev leader, planning, tech stack selection, development, test ]</b>
      <ul>
          <li>There were 2 members in frontend team</li>
          <li>As we had short amount of time, planning and design team also worked almost at the same time</li>
          <li>To develop it in efficiency, we made common bases of system first, and then each functionalities are made</li>
          <li>As legacy page had no support for responsive page(it had seperated page for different screen size...), we made it from scratch to support it</li>
      </ul>`},image:["/project/copin150/cc1501.png","/project/copin150/cc1502.png","/project/copin150/cc1503.png","/project/copin150/cc1504.png"]},{icon:"/project/chatbot/icon.png",title:{ko:"UniBot (\uC778\uC99D\uC11C \uCC44\uD305\uBD07)",jp:"",en:"UniBot (Chat bot for financial certificate)"},simpledesc:{ko:"\uC778\uC99D\uC11C\uC5D0 \uB300\uD55C \uC0AC\uC6A9\uC790\uB4E4\uC758 \uC9C8\uBB38\uC5D0 \uB300\uD574 \uB2F5\uBCC0\uC744 \uC790\uB3D9\uC73C\uB85C \uC218\uD589\uD574\uC8FC\uB294 \uCC44\uD305\uBD07",jp:"",en:"An automated chat bot used for answering questions from users"},platform:"Web, Android",tech:"Android (Kotlin), ReactJS (TypeScript), Bootstrap, NGINX, Spring Boot, MariaDB",period:"2019.10-2020.02",link:[],content:{ko:`<ul>
                    <li>\uC778\uC99D\uC11C \uC11C\uBE44\uC2A4 \uC0AC\uC6A9\uC790\uB4E4\uC5D0\uAC8C \uD544\uC694\uD55C \uC0AC\uC6A9\uBC95, \uC9C8\uBB38\uC5D0 \uB300\uD55C \uB2F5\uBCC0\uC744 \uCC44\uD305\uBD07\uC73C\uB85C \uB9CC\uB4E0 \uC11C\uBE44\uC2A4</li>
                    <li>\uC0AC\uC6A9\uC790\uB4E4\uC740 \uC548\uB4DC\uB85C\uC774\uB4DC \uC571 \uD639\uC740 PC \uBE0C\uB77C\uC6B0\uC800\uB85C \uCC44\uD305\uBD07\uC5D0 \uC811\uC18D\uD558\uC5EC \uC571\uC744 \uC0AC\uC6A9\uD560 \uC218 \uC788\uC5C8\uC74C</li>
                </ul>`,jp:`<ul>
      <li>\uC778\uC99D\uC11C \uC11C\uBE44\uC2A4 \uC0AC\uC6A9\uC790\uB4E4\uC5D0\uAC8C \uD544\uC694\uD55C \uC0AC\uC6A9\uBC95, \uC9C8\uBB38\uC5D0 \uB300\uD55C \uB2F5\uBCC0\uC744 \uCC44\uD305\uBD07\uC73C\uB85C \uB9CC\uB4E0 \uC11C\uBE44\uC2A4</li>
      <li>\uC0AC\uC6A9\uC790\uB4E4\uC740 \uC548\uB4DC\uB85C\uC774\uB4DC \uC571 \uD639\uC740 PC \uBE0C\uB77C\uC6B0\uC800\uB85C \uCC44\uD305\uBD07\uC5D0 \uC811\uC18D\uD558\uC5EC \uC571\uC744 \uC0AC\uC6A9\uD560 \uC218 \uC788\uC5C8\uC74C</li>
  </ul>`,en:`<ul>
      <li>An automated QnA chat bot service for users of financial certificates in Korea</li>
      <li>Users were able to connect through Web or Andoird App</li>
  </ul>`},dev:{ko:`<b>[ \uB2F4\uB2F9\uD30C\uD2B8: \uD504\uB860\uD2B8\uC5D4\uB4DC, ChatScript\uC640 \uC5F0\uACB0\uD558\uB294 \uC911\uAC04\uC11C\uBC84, \uC548\uB4DC\uB85C\uC774\uB4DC \uC571, DB\uC124\uACC4 ]</b>
                <ul>
                    <li>\uD504\uB860\uD2B8\uC5D4\uB4DC: ReactJS (TypeScript), Bootstrap (Reactstrap) \uC0AC\uC6A9</li>
                    <li>\uC548\uB4DC\uB85C\uC774\uB4DC: Kotlin\uC73C\uB85C \uAC1C\uBC1C, WebView\uB97C \uC0AC\uC6A9\uD55C \uD558\uC774\uBE0C\uB9AC\uB4DC \uC571</li>
                    <li>\uC911\uAC04\uC11C\uBC84: SpringBoot(Kotlin)\uC73C\uB85C \uAC1C\uBC1C, \uBC31\uC5D4\uB4DC \uD30C\uD2B8\uC640 \uC5F0\uB3D9\uC744 \uC704\uD574 \uAD6C\uD604. ChatScript\uC640 \uD1B5\uC2E0\uC744 \uC704\uD55C REST API \uAD6C\uCD95</li>
                    <li>\uC2DC\uC2A4\uD15C \uAD6C\uC131: NGINX\uC704\uC5D0 Reversed Proxy\uB97C \uC0AC\uC6A9\uD574 \uBC31\uC5D4\uB4DC\uC640 \uD504\uB860\uD2B8\uC5D4\uB4DC\uB97C \uBAA8\uB450 \uAD6C\uB3D9</li>
                </ul>`,jp:`<b>[ \uB2F4\uB2F9\uD30C\uD2B8: \uD504\uB860\uD2B8\uC5D4\uB4DC, ChatScript\uC640 \uC5F0\uACB0\uD558\uB294 \uC911\uAC04\uC11C\uBC84, \uC548\uB4DC\uB85C\uC774\uB4DC \uC571, DB\uC124\uACC4 ]</b>
      <ul>
          <li>\uD504\uB860\uD2B8\uC5D4\uB4DC: ReactJS (TypeScript), Bootstrap (Reactstrap) \uC0AC\uC6A9</li>
          <li>\uC548\uB4DC\uB85C\uC774\uB4DC: Kotlin\uC73C\uB85C \uAC1C\uBC1C, WebView\uB97C \uC0AC\uC6A9\uD55C \uD558\uC774\uBE0C\uB9AC\uB4DC \uC571</li>
          <li>\uC911\uAC04\uC11C\uBC84: SpringBoot(Kotlin)\uC73C\uB85C \uAC1C\uBC1C, \uBC31\uC5D4\uB4DC \uD30C\uD2B8\uC640 \uC5F0\uB3D9\uC744 \uC704\uD574 \uAD6C\uD604. ChatScript\uC640 \uD1B5\uC2E0\uC744 \uC704\uD55C REST API \uAD6C\uCD95</li>
          <li>\uC2DC\uC2A4\uD15C \uAD6C\uC131: NGINX\uC704\uC5D0 Reversed Proxy\uB97C \uC0AC\uC6A9\uD574 \uBC31\uC5D4\uB4DC\uC640 \uD504\uB860\uD2B8\uC5D4\uB4DC\uB97C \uBAA8\uB450 \uAD6C\uB3D9</li>
      </ul>`,en:`<b>[ Participated in: Frontend, Intermediate server using ChatScript, Android app, DB ]</b>
      <ul>
          <li>Frontend: ReactJS (TypeScript), Bootstrap (Reactstrap)</li>
          <li>Android: Developed with Kotlin, Used WebView to simplify development process</li>
          <li>Intermediate server: Devloped with SpringBoot(Kotlin). Made REST API for communicating with Backend (ChatScript)</li>
          <li>System: Used reversed proxy with NGINX to run both frontend and backend</li>
      </ul>`},image:["/project/chatbot/01.jpg","/project/chatbot/02.jpg","/project/chatbot/03.jpg","/project/chatbot/04.jpg"]},{icon:"/project/backup/icon.png",title:{ko:"\uC778\uC99D\uC11C \uD074\uB77C\uC6B0\uB4DC \uBC31\uC5C5 \uC11C\uBE44\uC2A4",jp:"",en:"Financial certificate backup service with cloud"},simpledesc:{ko:"\uBE0C\uB77C\uC6B0\uC800 \uB0B4\uBD80 \uC800\uC7A5\uC18C\uC758 \uC778\uC99D\uC11C\uB97C \uBC31\uC5C5\uD558\uC5EC \uB2E4\uB978 \uAE30\uAE30\uC5D0\uC11C \uC4F8 \uC218 \uC788\uAC8C \uD574\uC8FC\uB294 \uC11C\uBE44\uC2A4",jp:"",en:"Backup certificate copied from browser internal storage to make it usable anywhere on the internet"},platform:"Web",tech:"Spring Boot 2 (Java), PostgreSQL",period:"2019.12-2020.05",link:[],content:{ko:`<ul>
                    <li>\uBE0C\uB77C\uC6B0\uC800 \uB0B4\uBD80 \uC800\uC7A5\uC18C\uC5D0 \uC800\uC7A5\uB418\uC5B4\uC788\uB294 \uC778\uC99D\uC11C\uB97C \uC11C\uBC84\uC5D0 \uBC31\uC5C5\uD558\uC5EC \uBE0C\uB77C\uC6B0\uC800/\uAE30\uAE30\uC5D0 \uC0C1\uAD00\uC5C6\uC774 \uC778\uC99D\uC11C\uB97C \uC0AC\uC6A9\uD560 \uC218 \uC788\uAC8C \uD558\uB294 \uC11C\uBE44\uC2A4</li>
                    <li>\uD074\uB77C\uC774\uC5B8\uD2B8\uB294 \uAE30\uC874 \uAC1C\uBC1C\uB418\uC5B4\uC788\uB294 \uAC00\uC785\uC790 \uC18C\uD504\uD2B8\uC6E8\uC5B4\uB97C \uD655\uC7A5\uD558\uC5EC \uD074\uB77C\uC774\uC5B8\uD2B8\uB97C \uB9CC\uB4E6</li>
                    <li>\uC11C\uBC84\uB294 Spring Boot\uC640 PostgreSQL\uC744 \uC0AC\uC6A9\uD558\uC5EC \uC2E0\uADDC \uC81C\uC791</li>
                </ul>`,jp:`<ul>
      <li>\uBE0C\uB77C\uC6B0\uC800 \uB0B4\uBD80 \uC800\uC7A5\uC18C\uC5D0 \uC800\uC7A5\uB418\uC5B4\uC788\uB294 \uC778\uC99D\uC11C\uB97C \uC11C\uBC84\uC5D0 \uBC31\uC5C5\uD558\uC5EC \uBE0C\uB77C\uC6B0\uC800/\uAE30\uAE30\uC5D0 \uC0C1\uAD00\uC5C6\uC774 \uC778\uC99D\uC11C\uB97C \uC0AC\uC6A9\uD560 \uC218 \uC788\uAC8C \uD558\uB294 \uC11C\uBE44\uC2A4</li>
      <li>\uD074\uB77C\uC774\uC5B8\uD2B8\uB294 \uAE30\uC874 \uAC1C\uBC1C\uB418\uC5B4\uC788\uB294 \uAC00\uC785\uC790 \uC18C\uD504\uD2B8\uC6E8\uC5B4\uB97C \uD655\uC7A5\uD558\uC5EC \uD074\uB77C\uC774\uC5B8\uD2B8\uB97C \uB9CC\uB4E6</li>
      <li>\uC11C\uBC84\uB294 Spring Boot\uC640 PostgreSQL\uC744 \uC0AC\uC6A9\uD558\uC5EC \uC2E0\uADDC \uC81C\uC791</li>
  </ul>`,en:`<ul>
      <li>An web service for backup certificated from web browser's internal storage to cloud server, to make it usable anywhere on the internet regardless device or browser</li>
      <li>Used existing web client (by modifying it)</li>
      <li>A whole new server system made with Spring Boot and PostgreSQL</li>
  </ul>`},dev:{ko:`<b>[ \uB2F4\uB2F9\uD30C\uD2B8: \uC11C\uBC84 \uBC0F DB ]</b>
                <ul>
                    <li>\uD074\uB77C\uC774\uC5B8\uD2B8\uC640\uC758 \uD1B5\uC2E0\uC744 \uC704\uD574 RESTful API \uD615\uD0DC\uB85C \uAC1C\uBC1C</li>
                    <li>HSM\uC744 \uC5F0\uB3D9\uD558\uC5EC \uBCF4\uC548\uC131\uC744 \uB192\uC784 (PKCS11 Provider)</li>
                    <li>\uC678\uBD80\uC758 SMS \uBAA8\uB4C8\uC744 \uC0AC\uC6A9\uD55C SMS \uC778\uC99D \uC81C\uACF5</li>
                </ul>`,jp:`<b>[ \uB2F4\uB2F9\uD30C\uD2B8: \uC11C\uBC84 \uBC0F DB ]</b>
      <ul>
          <li>\uD074\uB77C\uC774\uC5B8\uD2B8\uC640\uC758 \uD1B5\uC2E0\uC744 \uC704\uD574 RESTful API \uD615\uD0DC\uB85C \uAC1C\uBC1C</li>
          <li>HSM\uC744 \uC5F0\uB3D9\uD558\uC5EC \uBCF4\uC548\uC131\uC744 \uB192\uC784 (PKCS11 Provider)</li>
          <li>\uC678\uBD80\uC758 SMS \uBAA8\uB4C8\uC744 \uC0AC\uC6A9\uD55C SMS \uC778\uC99D \uC81C\uACF5</li>
      </ul>`,en:`<b>[ Participated as: Server and DB ]</b>
      <ul>
          <li>Made RESTful API to easily usable by client</li>
          <li>Used HSM hardware to add more security (PKCS11 Provider)</li>
          <li>Used external SMS modules to support certificate user over SMS</li>
      </ul>`},image:["/project/backup/01.png","/project/backup/02.jpg","/project/backup/03.png"]},{icon:"/project/aicore/icon.png",title:{ko:"AI \uD50C\uB7AB\uD3FC \uAC1C\uBC1C \uBC0F \uCC44\uD305\uBD07 \uAC1C\uBC1C",jp:"AI\u30D7\u30E9\u30C3\u30C8\u30D5\u30A9\u30FC\u30E0",en:"AI Platform Development"},simpledesc:{ko:"AI Agent\uAC04 \uB370\uC774\uD130 \uC804\uC1A1 \uAC1C\uBC1C, AI \uD50C\uB7AB\uD3FC\uC744 \uD65C\uC6A9\uD55C \uCC44\uD305\uBD07 \uC11C\uBE44\uC2A4 \uAC1C\uBC1C",jp:"",en:"Data transfer among AI Agents, AI platform based chatbot service"},platform:"Java, Web",tech:"Java, JavaScript, Tomcat 8, jQuery, HTML, Bootstrap",period:"2015.5~2016.8",link:["https://aibrain.com/solutions/aicore-adaptive-interactive-cognitive-reasoning-engine/"],content:{ko:`\uB300\uD654 \uAC00\uB2A5\uD55C AI\uB97C \uB9CC\uB4E4\uAE30 \uC704\uD55C \uC790\uC5F0\uC5B8\uC5B4 \uCC98\uB9AC \uD504\uB85C\uC81D\uD2B8\uC5D0 \uD1B5\uC2E0 \uBAA8\uB4C8 \uAC1C\uBC1C\uB85C \uCC38\uAC00<br/><br/>
            (1) IAC(Inter-Agent Communication)
            <ul>
                <li>Planner\uC5D0\uC11C \uB2E4\uB978 \uC5D0\uC774\uC804\uD2B8\uB85C\uC758 \uB370\uC774\uD130 \uC804\uC1A1\uC744 \uC694\uCCAD\uBC1B\uC74C</li>
                <li>JADE Framework\uC5D0\uC11C FIPA-ACL \uBA54\uC2DC\uC9C0 \uAD6C\uC870\uC5D0 \uB9DE\uB294 \uD1B5\uC2E0\uC6A9 \uBA54\uC2DC\uC9C0\uB97C \uC791\uC131 \uBC0F \uC804\uC1A1</li>
            </ul>
            (2) AI \uD50C\uB7AB\uD3FC\uC744 \uD65C\uC6A9\uD55C \uCC44\uD305\uBD07 \uAC1C\uBC1C
            <ul>
                <li>\uC0C1\uAE30 \uD50C\uB7AB\uD3FC\uC744 \uC0AC\uC6A9\uD558\uC5EC \uD074\uB77C\uC774\uC5B8\uD2B8\uC640 \uC11C\uBC84\uAC00 \uC790\uC5F0\uC5B4\uB85C \uB300\uD654\uB97C \uC8FC\uACE0\uBC1B\uC744 \uC218 \uC788\uB294 \uCC44\uD305\uBD07 \uC11C\uBE44\uC2A4\uB97C \uAC1C\uBC1C</li>
                <li>TTS\uB85C \uCC44\uD305 \uB0B4\uC6A9\uC744 \uC77D\uC5B4\uC8FC\uACE0 \uBC0F \uB9C8\uC774\uD06C\uB97C \uC0AC\uC6A9\uD574 \uB9D0\uC744 \uC804\uB2EC \uD560 \uC218 \uC788\uB3C4\uB85D \uAC1C\uBC1C</li>
                <li>Vanilla JS\uB85C \uAC1C\uBC1C\uD558\uC600\uC73C\uBA70 1\uB144\uAC04 \uD68C\uC0AC \uD648\uD398\uC774\uC9C0\uC5D0\uC11C \uC11C\uBE44\uC2A4</li>
            </ul>
            * JADE Framework: Java\uB85C \uC791\uC131\uB41C Multi-Agent System \uAC1C\uBC1C\uC744 \uC704\uD55C \uD504\uB808\uC784\uC6CC\uD06C<br/>
            * ACL: Agent Communication Language`,jp:`\uB300\uD654 \uAC00\uB2A5\uD55C AI\uB97C \uB9CC\uB4E4\uAE30 \uC704\uD55C \uC790\uC5F0\uC5B8\uC5B4 \uCC98\uB9AC \uD504\uB85C\uC81D\uD2B8\uC5D0 \uD1B5\uC2E0 \uBAA8\uB4C8 \uAC1C\uBC1C\uB85C \uCC38\uAC00<br/><br/>
      (1) IAC(Inter-Agent Communication)
      <ul>
          <li>Planner\uC5D0\uC11C \uB2E4\uB978 \uC5D0\uC774\uC804\uD2B8\uB85C\uC758 \uB370\uC774\uD130 \uC804\uC1A1\uC744 \uC694\uCCAD\uBC1B\uC74C</li>
          <li>JADE Framework\uC5D0\uC11C FIPA-ACL \uBA54\uC2DC\uC9C0 \uAD6C\uC870\uC5D0 \uB9DE\uB294 \uD1B5\uC2E0\uC6A9 \uBA54\uC2DC\uC9C0\uB97C \uC791\uC131 \uBC0F \uC804\uC1A1</li>
      </ul>
      (2) AI \uD50C\uB7AB\uD3FC\uC744 \uD65C\uC6A9\uD55C \uCC44\uD305\uBD07 \uAC1C\uBC1C
      <ul>
          <li>\uC0C1\uAE30 \uD50C\uB7AB\uD3FC\uC744 \uC0AC\uC6A9\uD558\uC5EC \uD074\uB77C\uC774\uC5B8\uD2B8\uC640 \uC11C\uBC84\uAC00 \uC790\uC5F0\uC5B4\uB85C \uB300\uD654\uB97C \uC8FC\uACE0\uBC1B\uC744 \uC218 \uC788\uB294 \uCC44\uD305\uBD07 \uC11C\uBE44\uC2A4\uB97C \uAC1C\uBC1C</li>
          <li>TTS\uB85C \uCC44\uD305 \uB0B4\uC6A9\uC744 \uC77D\uC5B4\uC8FC\uACE0 \uBC0F \uB9C8\uC774\uD06C\uB97C \uC0AC\uC6A9\uD574 \uB9D0\uC744 \uC804\uB2EC \uD560 \uC218 \uC788\uB3C4\uB85D \uAC1C\uBC1C</li>
          <li>Vanilla JS\uB85C \uAC1C\uBC1C\uD558\uC600\uC73C\uBA70 1\uB144\uAC04 \uD68C\uC0AC \uD648\uD398\uC774\uC9C0\uC5D0\uC11C \uC11C\uBE44\uC2A4</li>
      </ul>
      * JADE Framework: Java\uB85C \uC791\uC131\uB41C Multi-Agent System \uAC1C\uBC1C\uC744 \uC704\uD55C \uD504\uB808\uC784\uC6CC\uD06C<br/>
      * ACL: Agent Communication Language`,en:`Communication among AI agents - Natural language process AI project<br/><br/>
      (1) IAC(Inter-Agent Communication)
      <ul>
          <li>Get request from agent (Planner)</li>
          <li>Create a formatted message (FIPA-ACL typed msg) from JADE Framework, and transfer it</li>
      </ul>
      (2) AI platform based chat bot
      <ul>
          <li>A chat bot service which provides simple conversation by using the AI platform</li>
          <li>Additional service: reads chat with TTS, also supported using mic to get user's voice</li>
          <li>Developed with vanilla JS, and run from company's homepage for a year</li>
      </ul>
      * JADE Framework: A framework for developing multi-agent system made with Java<br/>
      * ACL: Agent Communication Language`},dev:{ko:`[ \uCC44\uD305\uBD07 \uAD00\uB828 ]
                <ul>
                    <li>Tomcat\uC5D0 Natural Language Processing \uC5D4\uC9C4\uC744 \uC218\uC815\uD558\uC5EC \uAD6C\uB3D9</li>
                    <li>TTS\uC5D0\uB294 Speech Synthesis API\uB97C \uC0AC\uC6A9\uD558\uC5EC \uAC1C\uBC1C</li>
                </ul>`,jp:`[ \uCC44\uD305\uBD07 \uAD00\uB828 ]
      <ul>
          <li>Tomcat\uC5D0 Natural Language Processing \uC5D4\uC9C4\uC744 \uC218\uC815\uD558\uC5EC \uAD6C\uB3D9</li>
          <li>TTS\uC5D0\uB294 Speech Synthesis API\uB97C \uC0AC\uC6A9\uD558\uC5EC \uAC1C\uBC1C</li>
      </ul>`,en:`[ About chat bot ]
      <ul>
          <li>Run Natural Language Processing from Tomcat</li>
          <li>Used Speech Synthesis API for TTS</li>
      </ul>`},image:["/project/aicore/01.jpg","/project/aicore/02.jpg","/project/aicore/03.jpg","/project/aicore/04.jpg","/project/aicore/05.jpg"]},{icon:"/project/aigame/icon.png",title:{ko:"AI \uD50C\uB7AB\uD3FC\uC744 \uD65C\uC6A9\uD55C \uB370\uBAA8 \uAC8C\uC784 \uAC1C\uBC1C",jp:"AI\u30B2\u30FC\u30E0\u958B\u767A",en:"AI Game Development"},simpledesc:{ko:"NPC\uAC00 \uAC8C\uC784\uC758 \uD658\uACBD\uC744 \uC774\uD574\uD558\uACE0 \uB2E4\uC74C \uB3D9\uC791\uC744 \uACB0\uC815\uD574 \uD589\uB3D9\uD558\uB294 \uB370\uBAA8 \uAC8C\uC784 \uAC1C\uBC1C",jp:"",en:"A demo game with AI-based NPC"},platform:"Unity",tech:"Java, C#, Spring Framework, Unity3D, MariaDB",period:"2016.8~2017.2",link:["https://aibrain.com/products/futurable-true-ai-game/"],content:{ko:`<ul>
                    <li>\uD68C\uC0AC\uAC00 \uBCF4\uC720\uD55C AI \uAE30\uC220\uC744 \uD65C\uC6A9\uD558\uC5EC \uB370\uBAA8 \uAC8C\uC784 \uAC1C\uBC1C\uC744 \uC9C4\uD589</li>
                    <li>NPC\uB294 \uAC8C\uC784\uC758 \uD658\uACBD\uC744 \uD655\uC778\uD558\uC5EC \uD604\uC7AC \uC790\uC2E0\uC758 \uC0C1\uD0DC\uC640 \uC870\uAC74\uC744 \uD655\uC778</li>
                    <li>NPC\uC758 \uB2E4\uC74C \uB3D9\uC791\uC740 \uC774\uB7EC\uD55C \uC0C1\uD0DC\uB97C \uC0AC\uC6A9\uD55C \uCD94\uB860 \uACB0\uACFC\uC5D0 \uB530\uB77C \uC9C4\uD589\uB428</li>
                </ul>`,jp:`<ul>
      <li>\uD68C\uC0AC\uAC00 \uBCF4\uC720\uD55C AI \uAE30\uC220\uC744 \uD65C\uC6A9\uD558\uC5EC \uB370\uBAA8 \uAC8C\uC784 \uAC1C\uBC1C\uC744 \uC9C4\uD589</li>
      <li>NPC\uB294 \uAC8C\uC784\uC758 \uD658\uACBD\uC744 \uD655\uC778\uD558\uC5EC \uD604\uC7AC \uC790\uC2E0\uC758 \uC0C1\uD0DC\uC640 \uC870\uAC74\uC744 \uD655\uC778</li>
      <li>NPC\uC758 \uB2E4\uC74C \uB3D9\uC791\uC740 \uC774\uB7EC\uD55C \uC0C1\uD0DC\uB97C \uC0AC\uC6A9\uD55C \uCD94\uB860 \uACB0\uACFC\uC5D0 \uB530\uB77C \uC9C4\uD589\uB428</li>
  </ul>`,en:`<ul>
      <li>A tech demo game using company's AI technology</li>
      <li>NPC determines its next move by calculating current circumstances</li>
      <li>These reasoning process made NPC act differently on every trial</li>
  </ul>`},dev:{ko:`(1) \uD074\uB77C\uC774\uC5B8\uD2B8 (C#)
            <ul>
                <li>Google Play Service \uC5F0\uB3D9, \uC11C\uBC84 \uD1B5\uC2E0, UI, \uB514\uBC84\uAE45</li>
            </ul>
            (2) \uC11C\uBC84 (Java/Spring)
            <ul>
                <li>\uD68C\uC0AC\uC5D0\uC11C \uC81C\uC791\uD55C AI \uD50C\uB7AB\uD3FC\uC744 \uC11C\uBC84\uC5D0\uC11C \uAD6C\uB3D9</li>
                <li>\uC720\uC800\uBCC4 \uB300\uD654\uB0B4\uC6A9 \uBCF4\uC874 \uBC0F \uB300\uD654 \uC2DC\uC2A4\uD15C \uAD6C\uC131 \uBC0F \uAC1C\uBC1C</li>
                <li>\uD074\uB77C\uC774\uC5B8\uD2B8\uC640 \uC11C\uBC84\uAC04\uC758 \uC694\uCCAD\uACFC \uC751\uB2F5\uC740 API \uD615\uD0DC\uB85C \uC81C\uC791</li>
            </ul>`,jp:`(1) \uD074\uB77C\uC774\uC5B8\uD2B8 (C#)
      <ul>
          <li>Google Play Service \uC5F0\uB3D9, \uC11C\uBC84 \uD1B5\uC2E0, UI, \uB514\uBC84\uAE45</li>
      </ul>
      (2) \uC11C\uBC84 (Java/Spring)
      <ul>
          <li>\uD68C\uC0AC\uC5D0\uC11C \uC81C\uC791\uD55C AI \uD50C\uB7AB\uD3FC\uC744 \uC11C\uBC84\uC5D0\uC11C \uAD6C\uB3D9</li>
          <li>\uC720\uC800\uBCC4 \uB300\uD654\uB0B4\uC6A9 \uBCF4\uC874 \uBC0F \uB300\uD654 \uC2DC\uC2A4\uD15C \uAD6C\uC131 \uBC0F \uAC1C\uBC1C</li>
          <li>\uD074\uB77C\uC774\uC5B8\uD2B8\uC640 \uC11C\uBC84\uAC04\uC758 \uC694\uCCAD\uACFC \uC751\uB2F5\uC740 API \uD615\uD0DC\uB85C \uC81C\uC791</li>
      </ul>`,en:`(1) Client (C#)
      <ul>
          <li>Google Play Service connection, Server communication, UI, Debugging</li>
      </ul>
      (2) Server (Java/Spring)
      <ul>
          <li>Run AI platform on the server</li>
          <li>Server stored conversation of each user to keep track of next AI's movement (made conversational system for AI)</li>
          <li>Each request-response are API based</li>
      </ul>`},image:["/project/aigame/01.jpg","/project/aigame/02.jpg","/project/aigame/03.jpg"]},{icon:"/project/fautonomy/icon.png",title:{ko:"AI \uAC8C\uC784 \uAC1C\uBC1C \uD50C\uB7EC\uADF8\uC778",jp:"AI\u30B2\u30FC\u30E0\u30D7\u30E9\u30B0\u30A4\u30F3\u958B\u767A",en:"AI Game Plugin Development"},simpledesc:{ko:"",jp:"",en:""},platform:"Unity",tech:"Java, C#, Spring Framework, Unity3D",period:"2017~2019",link:["https://aibrain.com/products/futurable-true-ai-game/","https://assetstore.unity.com/packages/tools/ai/fautonomy-105444"],content:{ko:`<ul>
                    <li>AI \uAC8C\uC784\uC5D0 \uC0AC\uC6A9\uB41C \uAE30\uC220\uC744 \uC0AC\uC6A9\uD558\uC5EC Unity \uAC1C\uBC1C\uC790\uAC00 \uC0AC\uC6A9\uD560 \uC218 \uC788\uB294 \uD50C\uB7EC\uADF8\uC778\uC744 \uC81C\uC791</li>
                    <li>\uAC1C\uBC1C\uC790\uB294 \uAC8C\uC784\uB0B4\uC758 \uD658\uACBD \uC0C1\uD669, \uCE90\uB9AD\uD130\uC758 \uC2DC\uC57C\uB098 \uC778\uC9C0\uC5D0 \uB300\uD55C \uC124\uC815, \uCE90\uB9AD\uD130\uAC00 \uC218\uD589\uD558\uB294 \uB3D9\uC791\uC5D0 \uB300\uD55C \uC870\uAC74 \uB4F1\uC744 \uD50C\uB7EC\uADF8\uC778\uC5D0 \uC785\uB825</li>
                    <li>\uC0AC\uC6A9\uC790\uAC00 \uC9C0\uC815\uD55C \uC870\uAC74\uC744 \uC11C\uBC84\uB85C \uC804\uC1A1\uD558\uC5EC Tensorflow\uB85C \uD559\uC2B5</li>
                    <li>\uD559\uC2B5\uC758 \uACB0\uACFC\uB85C \uB098\uC628 ProtoBuf \uD30C\uC77C\uC744 \uB2E4\uC6B4\uB85C\uB4DC\uD558\uC5EC \uD074\uB77C\uC774\uC5B8\uD2B8\uC5D0 \uC801\uC6A9</li>
                </ul>`,jp:`<ul>
      <li>AI \uAC8C\uC784\uC5D0 \uC0AC\uC6A9\uB41C \uAE30\uC220\uC744 \uC0AC\uC6A9\uD558\uC5EC Unity \uAC1C\uBC1C\uC790\uAC00 \uC0AC\uC6A9\uD560 \uC218 \uC788\uB294 \uD50C\uB7EC\uADF8\uC778\uC744 \uC81C\uC791</li>
      <li>\uAC1C\uBC1C\uC790\uB294 \uAC8C\uC784\uB0B4\uC758 \uD658\uACBD \uC0C1\uD669, \uCE90\uB9AD\uD130\uC758 \uC2DC\uC57C\uB098 \uC778\uC9C0\uC5D0 \uB300\uD55C \uC124\uC815, \uCE90\uB9AD\uD130\uAC00 \uC218\uD589\uD558\uB294 \uB3D9\uC791\uC5D0 \uB300\uD55C \uC870\uAC74 \uB4F1\uC744 \uD50C\uB7EC\uADF8\uC778\uC5D0 \uC785\uB825</li>
      <li>\uC0AC\uC6A9\uC790\uAC00 \uC9C0\uC815\uD55C \uC870\uAC74\uC744 \uC11C\uBC84\uB85C \uC804\uC1A1\uD558\uC5EC Tensorflow\uB85C \uD559\uC2B5</li>
      <li>\uD559\uC2B5\uC758 \uACB0\uACFC\uB85C \uB098\uC628 ProtoBuf \uD30C\uC77C\uC744 \uB2E4\uC6B4\uB85C\uB4DC\uD558\uC5EC \uD074\uB77C\uC774\uC5B8\uD2B8\uC5D0 \uC801\uC6A9</li>
  </ul>`,en:`<ul>
      <li>AI game plguin for developers, using same AI platform above</li>
      <li>Devs input current circumstance of game, character's vision and recognition, condition for movement and so on</li>
      <li>Send these options to server and TensorFlow calculate it</li>
      <li>Apply ProtoBuf file to the game as a result of learning</li>
  </ul>`},dev:{ko:`(1) \uD074\uB77C\uC774\uC5B8\uD2B8 (C#)
            <ul>
                <li>UI, \uC11C\uBC84 \uD1B5\uC2E0, \uB514\uBC84\uADF8</li>
            </ul>
            (2) \uC11C\uBC84 (Java/Spring)
            <ul>
                <li>\uC11C\uBC84\uC5D0\uC11C \uC804\uC1A1\uD55C \uAC8C\uC784 \uD658\uACBD \uC815\uBCF4 \uB4F1\uC744 Process\uB85C Python \uCF54\uB4DC\uB97C \uC2E4\uD589\uD558\uB294 \uBC29\uC2DD\uC73C\uB85C \uC218\uD589</li>
                <li>Python \uCF54\uB4DC\uB294 Tensorflow\uB97C \uC2E4\uD589\uD558\uAE30 \uC704\uD55C \uCF54\uB4DC\uAC00 \uB4E4\uC5B4\uC788\uC74C</li>
                <li>\uB2E4\uC218\uC758 \uD074\uB77C\uC774\uC5B8\uD2B8\uC5D0\uC11C \uB3D9\uC2DC\uC5D0 \uC694\uCCAD\uC774 \uB4E4\uC5B4\uC624\uB294 \uACBD\uC6B0 Queue\uB85C \uAD00\uB9AC</li>
                <li>URL\uB85C \uD074\uB77C\uC774\uC5B8\uD2B8\uC5D0\uC11C \uC694\uCCAD\uC744 \uBC1B\uACE0 \uCC98\uB9AC\uD568</li>
            </ul>`,jp:`(1) \uD074\uB77C\uC774\uC5B8\uD2B8 (C#)
      <ul>
          <li>UI, \uC11C\uBC84 \uD1B5\uC2E0, \uB514\uBC84\uADF8</li>
      </ul>
      (2) \uC11C\uBC84 (Java/Spring)
      <ul>
          <li>\uC11C\uBC84\uC5D0\uC11C \uC804\uC1A1\uD55C \uAC8C\uC784 \uD658\uACBD \uC815\uBCF4 \uB4F1\uC744 Process\uB85C Python \uCF54\uB4DC\uB97C \uC2E4\uD589\uD558\uB294 \uBC29\uC2DD\uC73C\uB85C \uC218\uD589</li>
          <li>Python \uCF54\uB4DC\uB294 Tensorflow\uB97C \uC2E4\uD589\uD558\uAE30 \uC704\uD55C \uCF54\uB4DC\uAC00 \uB4E4\uC5B4\uC788\uC74C</li>
          <li>\uB2E4\uC218\uC758 \uD074\uB77C\uC774\uC5B8\uD2B8\uC5D0\uC11C \uB3D9\uC2DC\uC5D0 \uC694\uCCAD\uC774 \uB4E4\uC5B4\uC624\uB294 \uACBD\uC6B0 Queue\uB85C \uAD00\uB9AC</li>
          <li>URL\uB85C \uD074\uB77C\uC774\uC5B8\uD2B8\uC5D0\uC11C \uC694\uCCAD\uC744 \uBC1B\uACE0 \uCC98\uB9AC\uD568</li>
      </ul>`,en:`(1) Client (C#)
      <ul>
          <li>UI, Server communication, Debug</li>
      </ul>
      (2) Server (Java/Spring)
      <ul>
          <li>Execute python code as a separated process</li>
          <li>Python code contains TensorFlow library</li>
          <li>Multiple request from clients are managed by queue</li>
      </ul>`},image:["/project/fautonomy/01.jpg","/project/fautonomy/02.jpg","/project/fautonomy/03.jpg"]},{icon:"/project/situation/icon.png",title:{ko:"\uC628\uD1A8\uB85C\uC9C0 \uAE30\uBC18\uC758 \uC0C1\uD669\uC778\uC9C0 \uBAA8\uBC14\uC77C \uD504\uB808\uC784\uC6CC\uD06C",jp:"",en:"Situation aware mobile framework based on ontology"},simpledesc:{ko:"\uB17C\uBB38 \uB0B4\uC6A9 \uC99D\uBA85 \uAC1C\uBC1C \uC9C0\uC6D0\uC73C\uB85C \uCC38\uC5EC\uD55C \uD504\uB85C\uC81D\uD2B8",jp:"",en:"Project for the proof of a paper"},platform:"Java, Android",tech:"Java, OWL, SPARQL, Android, Protege, Apache Jena",period:"2013",link:["https://www.researchgate.net/publication/264428214_Mobile_situation-aware_framework_for_developing_smart_mobile_software"],content:{ko:`<ul>
                    <li>\uBAA8\uBC14\uC77C \uD658\uACBD\uC5D0\uC11C \uC0AC\uC6A9\uC790\uC758 \uD604\uC7AC \uC870\uAC74\uC5D0 \uB9DE\uB294 \uCF58\uD150\uCE20\uB97C \uC81C\uACF5\uD558\uB294 \uD504\uB808\uC784\uC6CC\uD06C</li>
                    <li>\uC99D\uBA85 \uC9C0\uC6D0\uC744 \uC704\uD55C \uC548\uB4DC\uB85C\uC774\uB4DC \uC571 \uAC1C\uBC1C\uACFC \uC774\uBBF8 \uB9CC\uB4E4\uC5B4\uC9C4 \uD504\uB808\uC784\uC6CC\uD06C\uC758 \uC218\uC815\uC744 \uB2F4\uB2F9</li>
                    <li>SCI-E \uB17C\uBB38\uC758 \uC81C 2\uC800\uC790\uB85C \uCC38\uAC00</li>
                    <li>* Mobile situation-aware framework for developing smart mobile software, Joonseok Park, Taejun Kang, Keunhyuk Yeom, Journal of Software: Evolution and Process, Vol. 26, Issue 12, 1 Dec 2014</li>
                </ul>`,jp:`<ul>
      <li>\uBAA8\uBC14\uC77C \uD658\uACBD\uC5D0\uC11C \uC0AC\uC6A9\uC790\uC758 \uD604\uC7AC \uC870\uAC74\uC5D0 \uB9DE\uB294 \uCF58\uD150\uCE20\uB97C \uC81C\uACF5\uD558\uB294 \uD504\uB808\uC784\uC6CC\uD06C</li>
      <li>\uC99D\uBA85 \uC9C0\uC6D0\uC744 \uC704\uD55C \uC548\uB4DC\uB85C\uC774\uB4DC \uC571 \uAC1C\uBC1C\uACFC \uC774\uBBF8 \uB9CC\uB4E4\uC5B4\uC9C4 \uD504\uB808\uC784\uC6CC\uD06C\uC758 \uC218\uC815\uC744 \uB2F4\uB2F9</li>
      <li>SCI-E \uB17C\uBB38\uC758 \uC81C 2\uC800\uC790\uB85C \uCC38\uAC00</li>
      <li>* Mobile situation-aware framework for developing smart mobile software, Joonseok Park, Taejun Kang, Keunhyuk Yeom, Journal of Software: Evolution and Process, Vol. 26, Issue 12, 1 Dec 2014</li>
  </ul>`,en:`<ul>
      <li>Situation-aware framework for mobile environment, checking current state and circumstance of mobile user</li>
      <li>Proof for paper - Made an android app and modify existing framework made with Java</li>
      <li>Also participated in 2nd author of SCI-E paper</li>
      <li>* Mobile situation-aware framework for developing smart mobile software, Joonseok Park, Taejun Kang, Keunhyuk Yeom, Journal of Software: Evolution and Process, Vol. 26, Issue 12, 1 Dec 2014</li>
  </ul>`},dev:{ko:`[\uD14C\uC2A4\uD2B8\uC6A9 \uC74C\uC545 \uC7AC\uC0DD \uC5B4\uD50C]
                    <ul>
                        <li>\uC2A4\uB9C8\uD2B8\uD3F0\uC758 \uC13C\uC11C\uC5D0\uC11C \uB370\uC774\uD130\uB97C \uC218\uC9D1\uD558\uACE0 \uC628\uD1A8\uB85C\uC9C0\uB97C \uC0AC\uC6A9\uD55C \uCD94\uB860\uC744 \uD1B5\uD574 \uACB0\uACFC\uAC12\uC744 \uC5BB\uC74C</li>
                        <li>\uB3C4\uCD9C\uB41C \uACB0\uACFC \uAC12\uC744 \uC774\uC6A9\uD558\uC5EC \uC0AC\uC6A9\uC790\uC5D0\uAC8C \uC801\uD569\uD55C \uC74C\uC545\uC744 \uCD94\uCC9C \uBC0F \uC7AC\uC0DD</li>
                    </ul>
                    [\uD504\uB808\uC784\uC6CC\uD06C \uC218\uC815]
                    <ul>
                        <li>\uC628\uD1A8\uB85C\uC9C0\uB97C \uBD84\uC11D\uD558\uC5EC \uC0AC\uC6A9\uC790\uAC00 \uC124\uC815\uD55C \uAC12\uC744 \uD55C \uBC88\uC5D0 \uD655\uC778\uD560 \uC218 \uC788\uB294 \uD2B8\uB9AC \uAD6C\uC870 \uC0DD\uC131 \uBC0F \uC81C\uACF5</li>
                    </ul>`,jp:`[\uD14C\uC2A4\uD2B8\uC6A9 \uC74C\uC545 \uC7AC\uC0DD \uC5B4\uD50C]
      <ul>
          <li>\uC2A4\uB9C8\uD2B8\uD3F0\uC758 \uC13C\uC11C\uC5D0\uC11C \uB370\uC774\uD130\uB97C \uC218\uC9D1\uD558\uACE0 \uC628\uD1A8\uB85C\uC9C0\uB97C \uC0AC\uC6A9\uD55C \uCD94\uB860\uC744 \uD1B5\uD574 \uACB0\uACFC\uAC12\uC744 \uC5BB\uC74C</li>
          <li>\uB3C4\uCD9C\uB41C \uACB0\uACFC \uAC12\uC744 \uC774\uC6A9\uD558\uC5EC \uC0AC\uC6A9\uC790\uC5D0\uAC8C \uC801\uD569\uD55C \uC74C\uC545\uC744 \uCD94\uCC9C \uBC0F \uC7AC\uC0DD</li>
      </ul>
      [\uD504\uB808\uC784\uC6CC\uD06C \uC218\uC815]
      <ul>
          <li>\uC628\uD1A8\uB85C\uC9C0\uB97C \uBD84\uC11D\uD558\uC5EC \uC0AC\uC6A9\uC790\uAC00 \uC124\uC815\uD55C \uAC12\uC744 \uD55C \uBC88\uC5D0 \uD655\uC778\uD560 \uC218 \uC788\uB294 \uD2B8\uB9AC \uAD6C\uC870 \uC0DD\uC131 \uBC0F \uC81C\uACF5</li>
      </ul>`,en:`[Music player for test]
      <ul>
          <li>Get data from sensors of smartphone, and do inference with ontology to get the result</li>
          <li>Give recommended genre or music from calculated value</li>
      </ul>
      [Framework edit]
      <ul>
          <li>Analyze ontology to create tree structure of current settings and generate ontology viewer</li>
      </ul>`},image:["/project/situation/01.jpg","/project/situation/02.jpg","/project/situation/03.jpg","/project/situation/04.jpg"]},{icon:"/project/bigdata/icon.png",title:{ko:"Big Data \uC11C\uBE44\uC2A4 \uC870\uD569 \uD504\uB808\uC784\uC6CC\uD06C",jp:"",en:"Big data service composition framework"},simpledesc:{ko:"\uBE45 \uB370\uC774\uD130\uC758 \uC218\uC9D1, \uAC00\uACF5, \uD45C\uD604\uC744 \uC218\uD589\uD558\uB294 \uC11C\uBE44\uC2A4\uB4E4\uC744 \uC870\uD569\uD558\uC5EC \uD558\uB098\uC758 \uB370\uC774\uD130 \uD1B5\uACC4 \uCC98\uB9AC \uC2DC\uC2A4\uD15C\uC73C\uB85C \uB9CC\uB4E4\uC5B4 \uC8FC\uB294 \uD504\uB808\uC784\uC6CC\uD06C \uAC1C\uBC1C",jp:"",en:"Composite several services (collection - calculate - visualization) to make a data process system using big data, merged into a framework"},platform:"Web",tech:"PHP, JavaScript, jQuery, Apache HTTP Server, JBoss",period:"2013~2014",link:[],content:{ko:`<ul>
              <li>Big Data\uC758 \uC0AC\uC6A9\uC744 \uC218\uC9D1, \uCC98\uB9AC, \uD45C\uD604\uC758 3\uAC00\uC9C0\uB85C \uB098\uB204\uC5B4 \uC11C\uBE44\uC2A4\uB4E4\uC744 \uD569\uCCD0 \uD558\uB098\uC758 \uC2DC\uC2A4\uD15C\uC744 \uB9CC\uB4E4\uC5B4\uB0B4\uB294 \uD504\uB808\uC784\uC6CC\uD06C</li>
              <li>\uC0AC\uC6A9\uC790\uB4E4\uC774 \uB2E4\uC218\uC758 \uC11C\uBE44\uC2A4 \uC911 \uD544\uC694\uD55C \uAC83\uB4E4\uB9CC \uC120\uD0DD\uD558\uC5EC \uBE45 \uB370\uC774\uD130\uB97C \uCC98\uB9AC\uD558\uAE30 \uC704\uD55C \uC2DC\uC2A4\uD15C\uC744 \uB9CC\uB4E4 \uC218 \uC788\uAC8C \uD568</li>
          </ul>`,jp:`<ul>
      <li>Big Data\uC758 \uC0AC\uC6A9\uC744 \uC218\uC9D1, \uCC98\uB9AC, \uD45C\uD604\uC758 3\uAC00\uC9C0\uB85C \uB098\uB204\uC5B4 \uC11C\uBE44\uC2A4\uB4E4\uC744 \uD569\uCCD0 \uD558\uB098\uC758 \uC2DC\uC2A4\uD15C\uC744 \uB9CC\uB4E4\uC5B4\uB0B4\uB294 \uD504\uB808\uC784\uC6CC\uD06C</li>
  </ul>`,en:`<ul>
      <li>Divide big data processes into 3 categories (collection / calculation / visualization)</li>
      <li>Users can select several service on demand to make one big data process system</li>
  </ul>`},dev:{ko:`<ul>
                    <li>UML\uB85C \uC2DC\uC2A4\uD15C \uAD6C\uC870 \uC124\uACC4\uC5D0 \uCC38\uC5EC</li>
                    <li>jQuery\uB97C \uC0AC\uC6A9\uD558\uC5EC UI \uC77C\uBD80\uC640 \uAD00\uB828 \uB3D9\uC791\uC744 \uAC1C\uBC1C</li>
                </ul>`,jp:`<ul>
      <li>UML\uB85C \uC2DC\uC2A4\uD15C \uAD6C\uC870 \uC124\uACC4\uC5D0 \uCC38\uC5EC</li>
      <li>jQuery\uB97C \uC0AC\uC6A9\uD558\uC5EC UI \uC77C\uBD80\uC640 \uAD00\uB828 \uB3D9\uC791\uC744 \uAC1C\uBC1C</li>
  </ul>`,en:`<ul>
      <li>Participated in design system with UML</li>
      <li>Developed some UI components with jQuery</li>
  </ul>`},image:["/project/bigdata/01.jpg","/project/bigdata/02.jpg"]}],A0={data(){return{tabBox:"tabBox",btnTab:"btnTab",contWrap:"contWrap",tabType:0,ProjWork:h0,ProjPersonal:D0}},methods:{changeTab:function(e){this.tabType=e,this.changeColor(e)},changeColor:e=>{const u="#fff7c2";e===0?(document.getElementById("btn0").style.backgroundColor=u,document.getElementById("btn1").style.backgroundColor="black",document.getElementById("btn0").style.color="black",document.getElementById("btn1").style.color="white"):e===1&&(document.getElementById("btn0").style.backgroundColor="black",document.getElementById("btn1").style.backgroundColor=u,document.getElementById("btn0").style.color="white",document.getElementById("btn1").style.color="black")}},mounted(){this.changeColor(this.tabType)},components:{ProjBox:m0}};function g0(e,u,t,n,r,i){const a=ye("ProjBox");return J(),X(Ae,null,[A("div",{class:h(r.tabBox)},[A("button",{id:"btn0",class:h(r.btnTab),onClick:u[0]||(u[0]=o=>i.changeTab(0))}," Work Projects ",2),A("button",{id:"btn1",class:h(r.btnTab),onClick:u[1]||(u[1]=o=>i.changeTab(1))}," Personal Projects ",2)],2),A("div",{class:h(r.contWrap)},[r.tabType===0?(J(),Hu(a,{key:0,arr:r.ProjWork,type:"Work Projects"},null,8,["arr"])):au("",!0),r.tabType===1?(J(),Hu(a,{key:1,arr:r.ProjPersonal,type:"Personal Projects"},null,8,["arr"])):au("",!0)],2)],64)}const v0=ke(A0,[["render",g0],["__scopeId","data-v-d96afcc9"]]),b0={data(){return{proj:"proj",title:"title"}},components:{ProjLayout:v0}};const y0=e=>(TC("data-v-15fe2cae"),e=e(),jC(),e),E0=Se(" Project "),_0=y0(()=>A("div",null,"CLICK TO EXPAND EACH ITEM",-1));function w0(e,u,t,n,r,i){const a=ye("font-awesome-icon"),o=ye("ProjLayout");return J(),X("div",{class:h(r.proj)},[A("div",{class:h(r.title)},[N(a,{icon:"fa-solid fa-angle-double-right"}),E0,N(a,{icon:"fa-solid fa-angle-double-left"})],2),_0,N(o)],2)}const k0=ke(b0,[["render",w0],["__scopeId","data-v-15fe2cae"]]),S0={props:{data:Object},data:()=>({itemBox:"itemBox",titleBox:"titleBox",title:"title",titleIcon:"titleIcon",itemTitle:"itemTitle"})};const x0=["src"],F0={key:0},P0={key:1},I0={key:2};function T0(e,u,t,n,r,i){return J(),X("div",{class:h(e.itemBox)},[A("div",{class:h(e.titleBox)},[A("img",{class:h(e.titleIcon),src:t.data.icon},null,10,x0),A("div",{class:h(e.title)},ue(t.data.name),3)],2),t.data.about.length>0?(J(),X("div",F0,[A("span",{class:h(e.itemTitle)},"About",2),A("ul",null,[(J(!0),X(Ae,null,xu(t.data.about,a=>(J(),X("li",null,ue(a),1))),256))])])):au("",!0),t.data.exp.length>0?(J(),X("div",P0,[A("span",{class:h(e.itemTitle)},"Experience",2),A("ul",null,[(J(!0),X(Ae,null,xu(t.data.exp,a=>(J(),X("li",null,ue(a),1))),256))])])):au("",!0),t.data.etc.length>0?(J(),X("div",I0,[A("span",{class:h(e.itemTitle)},"Etc",2),A("ul",null,[(J(!0),X(Ae,null,xu(t.data.etc,a=>(J(),X("li",null,ue(a),1))),256))])])):au("",!0)],2)}const j0=ke(S0,[["render",T0],["__scopeId","data-v-e58c7f27"]]),O0={props:{item:Object},components:{TechItemVue:j0},data:function(){const e=Ku().lang,u=gt().theme;return{box:"box",titleBox:u==="light"?"titleBox titleLight":"titleBox titleDark",detailBox:u==="light"?"detailBox detailLight":"detailBox detailDark",techItemDetails:e==="ko"?this.$props.item.details.ko:e==="jp"?this.$props.item.details.jp:this.$props.item.details.en}}};function R0(e,u,t,n,r,i){const a=ye("TechItemVue");return J(),X("div",{class:h(e.box)},[A("div",{class:h(e.titleBox)},ue(t.item.title),3),(J(!0),X(Ae,null,xu(e.techItemDetails,o=>(J(),X("div",{class:h(e.detailBox)},[N(a,{data:o},null,8,["data"])],2))),256))],2)}const M0=ke(O0,[["render",R0],["__scopeId","data-v-dece24a4"]]),L0={name:"React",icon:"/tech/react.png",about:["\uC8FC\uB85C \uC0AC\uC6A9 \uB77C\uC774\uBE0C\uB7EC\uB9AC\uC785\uB2C8\uB2E4","\uC5B8\uC5B4\uB294 TypeScript\uB97C \uB300\uBD80\uBD84 \uC0AC\uC6A9\uD569\uB2C8\uB2E4","Custom Hooks\uB97C \uD65C\uC6A9\uD558\uC5EC \uBE44\uC988\uB2C8\uC2A4 \uB85C\uC9C1\uC744 \uC791\uC131\uD558\uACE0 \uAD00\uB9AC\uD569\uB2C8\uB2E4","\uC0C1\uD0DC\uAD00\uB9AC \uB77C\uC774\uBE0C\uB7EC\uB9AC \uD65C\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4 (redux \uB4F1)","NextJS\uB85C SSR\uC774 \uC801\uC6A9\uB41C \uD648\uD398\uC774\uC9C0\uB97C \uAC1C\uBC1C\uD55C \uACBD\uD5D8\uC774 \uC788\uC2B5\uB2C8\uB2E4"],exp:["\uC5C5\uBB34 \uBC0F \uAC1C\uC778 \uD504\uB85C\uC81D\uD2B8 \uB2E4\uC218\uC5D0\uC11C \uC0AC\uC6A9","\uC0C1\uC138\uD55C \uB0B4\uC6A9\uC740 Project \uB780\uC744 \uCC38\uACE0\uD574\uC8FC\uC138\uC694"],etc:[]},N0={name:"Vue",icon:"/tech/vue.png",about:["\uC774 \uC6F9\uD398\uC774\uC9C0\uAC00 vue3+pinia\uB85C \uB9CC\uB4E4\uC5B4\uC84C\uC5B4\uC694!","\uC544\uC9C1 \uC5C5\uBB34\uB4F1\uC5D0 \uC0AC\uC6A9\uD574 \uBCF8 \uC801\uC740 \uC5C6\uC9C0\uB9CC \uACF5\uBD80\uC911\uC785\uB2C8\uB2E4"],exp:[],etc:[]},U0={name:"HTML and CSS",icon:"/tech/html.png",about:["\uCD5C\uADFC\uC5D0\uB294 CSS-in-JS\uB97C \uC790\uC8FC \uD65C\uC6A9\uD558\uC5EC \uAC1C\uBC1C\uD569\uB2C8\uB2E4 (styled-components, emotion-js \uB4F1)"],exp:[],etc:[]},W0={name:"React",icon:"/tech/react.png",about:["\u4E3B\u306B\u5229\u7528\u3057\u3066\u3044\u308B\u30E9\u30A4\u30D6\u30E9\u30EA\u3067\u3059","\u8A00\u8A9E\u306FTypeScript\u3092\u4F7F\u3063\u3066\u3044\u307E\u3059","Custom Hooks\u3092\u6D3B\u7528\u3057\u30D3\u30B9\u30CD\u30B9\u30ED\u30B8\u30C3\u30AF\u3092\u4F5C\u6210\u30FB\u7BA1\u7406\u3057\u307E\u3059","\u72B6\u614B\u7BA1\u7406\u30E9\u30A4\u30D6\u30E9\u30EA\u3092\u6D3B\u7528\u3067\u304D\u307E\u3059 (redux\u306A\u3069)","NextJS\u3092\u5229\u7528\u3057\u305FSSR\u30A6\u30A7\u30D6\u30B5\u30A4\u30C8\u306E\u4F5C\u6210\u7D4C\u9A13\u304C\u3042\u308A\u307E\u3059"],exp:["\u696D\u52D9\u30FB\u500B\u4EBA\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u591A\u6570\u304B\u3089\u5229\u7528","\u8A73\u7D30\u306FProject\u30DA\u30FC\u30B8\u3092\u53C2\u8003\u306B\u3057\u3066\u304F\u3060\u3055\u3044"],etc:[]},z0={name:"Vue",icon:"/tech/vue.png",about:["\u3053\u306E\u30DA\u30FC\u30B8\u304Cvue3+pinia\u3067\u3064\u304F\u3089\u308C\u307E\u3057\u305F","\u307E\u3060\u696D\u52D9\u3067\u5229\u7528\u3057\u305F\u3053\u3068\u306F\u3042\u308A\u307E\u305B\u3093\u304C\u3001\u7814\u7A76\u4E2D\u3067\u3059"],exp:[],etc:[]},H0={name:"HTML and CSS",icon:"/tech/html.png",about:["\u6700\u8FD1\u306FCSS-in-JS\u3092\u3088\u304F\u4F7F\u3063\u3066\u3044\u307E\u3059 (styled-components, emotion-js)"],exp:[],etc:[]},J0={name:"React",icon:"/tech/react.png",about:["Mostly used library","Using TypeScript for development","Using custom hooks to generate and manage business logic","Experienced state management libraries (such as redux)","Have experience for developing SSR web site using NextJS"],exp:["Used in several work and personal projects","Check project page for details"],etc:[]},$0={name:"Vue",icon:"/tech/vue.png",about:["This web page is made of vue3+pinia","Still not used in work, but still studying"],exp:[],etc:[]},K0={name:"HTML and CSS",icon:"/tech/html.png",about:["Using CSS-in-JS recently (styled-components, emotion-js)"],exp:[],etc:[]},V0={title:"Frontend",details:{ko:[L0,N0,U0],en:[J0,$0,K0],jp:[W0,z0,H0]}},G0={name:"Spring/SpringBoot",icon:"/tech/spring.png",about:["\uC6F9 \uBC31\uC5D4\uB4DC \uBC0F REST API \uC11C\uBC84 \uC81C\uC791 \uACBD\uD5D8"],exp:["\uC5C5\uBB34 \uBC0F \uAC1C\uC778 \uD504\uB85C\uC81D\uD2B8\uC5D0\uC11C \uC0AC\uC6A9"],etc:[]},Y0={name:"NodeJS",icon:"/tech/nodejs.png",about:["\uAC1C\uC778 \uD504\uB85C\uC81D\uD2B8\uC758 \uC11C\uBC84\uB9AC\uC2A4 \uC2DC\uC2A4\uD15C\uC5D0 \uC0AC\uC6A9 (AWS Lambda)"],exp:["\uAC1C\uC778 \uD504\uB85C\uC81D\uD2B8\uC5D0\uC11C \uC0AC\uC6A9"],etc:[]},q0={name:"Spring/SpringBoot",icon:"/tech/spring.png",about:["\u30D0\u30C3\u30AF\u30A8\u30F3\u30C9\u30FBREST API\u306E\u5236\u4F5C\u7D4C\u9A13\u3042\u308A"],exp:["\u696D\u52D9\u30FB\u500B\u4EBA\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3067\u5229\u7528"],etc:[]},X0={name:"NodeJS",icon:"/tech/nodejs.png",about:["\u500B\u4EBA\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306E\u30B5\u30FC\u30D0\u30FC\u30EC\u30B9\u30B7\u30B9\u30C6\u30E0\u3092\u4F5C\u6210 (AWS Lambda)"],exp:["\u500B\u4EBA\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3067\u5229\u7528"],etc:[]},Q0={name:"Spring/SpringBoot",icon:"/tech/spring.png",about:["Experienced in web backend and REST API development"],exp:["Used in both work and personal projects"],etc:[]},Z0={name:"NodeJS",icon:"/tech/nodejs.png",about:["Used in personal project (AWS Lambda, serverless backend)"],exp:["Used in personal project"],etc:[]},ed={title:"Backend",details:{ko:[G0,Y0],en:[Q0,Z0],jp:[q0,X0]}},ud={name:"Unity 3D",icon:"/tech/unity.png",about:["Tried developing game with Unity from work or personal project"],exp:["Created a simple game using AI library from work","Created BMS Player(Rhythm game) as a toy project (details in Project page)"],etc:[]},td={name:"Android",icon:"/tech/android.png",about:["Experienced with create and release of Android apps when I was in colleage"],exp:[],etc:[]},nd={name:"UML creation",icon:"/tech/uml.png",about:["Learned and used UML from lab in undergraduate/graduate"],exp:[],etc:[]},rd={name:"Other than development",icon:"/tech/nondev.png",about:["Can work with MS Office documentation","Edit image with Photoshop","Create video with DaVinci Resolve"],exp:[],etc:["Has a YouTube channel for fan edit video"]},id={name:"Etc",icon:"/tech/etc.png",about:["RDBs are commonly used when I need database for my system","Using GitLab, BitBucket, GitHub for version control","Jest and testing-library for testing codes"],exp:[],etc:[]},ad={name:"Unity 3D",icon:"/tech/unity.png",about:["\u4EE5\u524D\u306E\u4F1A\u793E\u30FB\u500B\u4EBA\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3067\u7C21\u5358\u306A\u30B2\u30FC\u30E0\u3092\u4F5C\u3063\u305F\u3053\u3068\u304C\u3042\u308A\u307E\u3059"],exp:["AI\u30E9\u30A4\u30D6\u30E9\u30EA\u3092\u6D3B\u7528\u3057\u305F\u30B2\u30FC\u30E0\u958B\u767A (\u696D\u52D9)","\u30EA\u30BA\u30E0\u30B2\u30FC\u30E0BMS Player\u306EToy Project\u9032\u884C (Project\u53C2\u8003)"],etc:[]},od={name:"Android",icon:"/tech/android.png",about:["\u5927\u5B66\u6642\u4EE3\u304B\u3089Android\u306E\u30A2\u30D7\u30EA\u3092\u5236\u4F5C\u3057\u3066\u30EA\u30EA\u30FC\u30B9\u306E\u7D4C\u9A13\u3082\u3042\u308A\u307E\u3059"],exp:[],etc:[]},sd={name:"UML\u8A2D\u8A08",icon:"/tech/uml.png",about:["\u5B66\u90E8\u30FB\u5927\u5B66\u9662\u306E\u7814\u7A76\u5BA4\u3067UML\u8A2D\u8A08\u3092\u5B66\u3073\u3001\u5B9F\u969B\u306E\u958B\u767A\u3067\u3082\u4F7F\u3044\u307E\u3057\u305F"],exp:[],etc:[]},Cd={name:"\u958B\u767A\u4EE5\u5916",icon:"/tech/nondev.png",about:["MS Office\u306E\u6587\u66F8\u4F5C\u6210","Photoshop\u3067\u30A4\u30E1\u30FC\u30B8\u7DE8\u96C6\u53EF\u80FD","DaVinci Resolve\u3092\u5229\u7528\u3057\u305F\u6620\u50CF\u7DE8\u96C6\u53EF\u80FD"],exp:[],etc:["YouTube\u3067\u30D5\u30A1\u30F3\u52D5\u753B\u3092\u30A2\u30C3\u30D7\u3059\u308B\u30C1\u30E3\u30F3\u30CD\u30EB\u3092\u904B\u55B6\u3057\u3066\u3044\u307E\u3059"]},ld={name:"\u305D\u306E\u4ED6",icon:"/tech/etc.png",about:["\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u304C\u5FC5\u8981\u306A\u3068\u304D\u306FRDB\u3092\u3088\u304F\u5229\u7528\u3057\u307E\u3059","\u30D0\u30FC\u30B8\u30E7\u30F3\u30B3\u30F3\u30C8\u30ED\u30FC\u30EB\u306B\u306FGitLab, BitBucket, GitHub\u3092\u5229\u7528\u3057\u307E\u3059","\u958B\u767A\u30C6\u30B9\u30C8\u306E\u305F\u3081Jest\u30FBtesting-library\u3092\u5229\u7528\u3057\u307E\u3059"],exp:[],etc:[]},cd={name:"Unity 3D",icon:"/tech/unity.png",about:["\uC774\uC804 \uD68C\uC0AC \uBC0F \uAC1C\uC778 \uAC1C\uBC1C\uB85C \uAC04\uB2E8\uD55C \uAC8C\uC784\uC744 \uB9CC\uB4E4\uC5B4 \uBCF8 \uC801\uC774 \uC788\uC2B5\uB2C8\uB2E4"],exp:["AI \uB77C\uC774\uBE0C\uB7EC\uB9AC \uD65C\uC6A9 \uAC8C\uC784 \uAC1C\uBC1C (\uC5C5\uBB34)","\uB9AC\uB4EC\uAC8C\uC784 BMS Player \uD1A0\uC774\uD504\uB85C\uC81D\uD2B8 \uAC1C\uBC1C \uC9C4\uD589 (Project \uCC38\uACE0)"],etc:[]},fd={name:"Android",icon:"/tech/android.png",about:["\uB300\uD559\uAD50 \uD559\uBD80\uC0DD \uC2DC\uC808\uBD80\uD130 \uC548\uB4DC\uB85C\uC774\uB4DC \uC571\uC744 \uB9CC\uB4E4\uC5B4 \uB9C8\uCF13\uC5D0 \uC62C\uB9AC\uAC70\uB098 \uD55C \uACBD\uD5D8\uC774 \uC788\uC2B5\uB2C8\uB2E4"],exp:[],etc:[]},dd={name:"UML \uC124\uACC4",icon:"/tech/uml.png",about:["\uD559\uBD80\uC0DD/\uB300\uD559\uC6D0 \uC5F0\uAD6C\uC2E4\uC5D0\uC11C UML \uC124\uACC4\uB97C \uBC30\uC6E0\uC2B5\uB2C8\uB2E4"],exp:[],etc:[]},Bd={name:"\uAC1C\uBC1C \uC774\uC678",icon:"/tech/nondev.png",about:["MS Office \uBB38\uC11C \uC791\uC131 \uAC00\uB2A5","Photoshop \uD3B8\uC9D1 \uAC00\uB2A5","DaVinci Resolve \uC601\uC0C1\uD3B8\uC9D1 \uAC00\uB2A5"],exp:[],etc:["YouTube\uC5D0\uC11C \uD32C \uC601\uC0C1 \uD3B8\uC9D1 \uCC44\uB110 \uC6B4\uC601 \uC911"]},pd={name:"\uAE30\uD0C0",icon:"/tech/etc.png",about:["\uAC1C\uBC1C \uC911 \uB370\uC774\uD130\uBCA0\uC774\uC2A4\uAC00 \uD544\uC694\uD55C \uACBD\uC6B0 \uC8FC\uB85C RDB\uB97C \uD65C\uC6A9\uD558\uC600\uC2B5\uB2C8\uB2E4","\uBC84\uC804\uAD00\uB9AC\uB294 GitLab, BitBucket, GitHub\uC744 \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4","\uAC1C\uBC1C \uD14C\uC2A4\uD2B8\uC5D0\uB294 Jest\uC640 testing-library\uB97C \uC0AC\uC6A9\uD569\uB2C8\uB2E4"],exp:[],etc:[]},md={title:"Non-Web",details:{ko:[cd,fd,dd,pd,Bd],en:[ud,td,nd,id,rd],jp:[ad,od,sd,ld,Cd]}},Dd={data:()=>({techFront:V0,techBackend:ed,techNonWeb:md,tabBox:"tabBox",techBox:"techBox",btnTab:"btnTab",tabType:0}),methods:{changeTab:function(e){this.tabType=e,this.changeColor(e)},changeColor:e=>{const u="#fff7c2";e===0?(document.getElementById("btn0").style.backgroundColor=u,document.getElementById("btn1").style.backgroundColor="black",document.getElementById("btn2").style.backgroundColor="black",document.getElementById("btn0").style.color="black",document.getElementById("btn1").style.color="white",document.getElementById("btn2").style.color="white"):e===1?(document.getElementById("btn0").style.backgroundColor="black",document.getElementById("btn1").style.backgroundColor=u,document.getElementById("btn2").style.backgroundColor="black",document.getElementById("btn0").style.color="white",document.getElementById("btn1").style.color="black",document.getElementById("btn2").style.color="white"):e===2&&(document.getElementById("btn0").style.backgroundColor="black",document.getElementById("btn1").style.backgroundColor="black",document.getElementById("btn2").style.backgroundColor=u,document.getElementById("btn0").style.color="white",document.getElementById("btn1").style.color="white",document.getElementById("btn2").style.color="black")}},components:{TechBox:M0},mounted(){this.changeColor(this.tabType)}};function hd(e,u,t,n,r,i){const a=ye("TechBox");return J(),X(Ae,null,[A("div",{class:h(e.tabBox)},[A("button",{id:"btn0",class:h(e.btnTab),onClick:u[0]||(u[0]=o=>i.changeTab(0))},"Frontend",2),A("button",{id:"btn1",class:h(e.btnTab),onClick:u[1]||(u[1]=o=>i.changeTab(1))},"Backend",2),A("button",{id:"btn2",class:h(e.btnTab),onClick:u[2]||(u[2]=o=>i.changeTab(2))},"Non-web",2)],2),A("div",{class:h(e.techBox)},[e.tabType===0?(J(),Hu(a,{key:0,item:e.techFront},null,8,["item"])):au("",!0),e.tabType===1?(J(),Hu(a,{key:1,item:e.techBackend},null,8,["item"])):au("",!0),e.tabType===2?(J(),Hu(a,{key:2,item:e.techNonWeb},null,8,["item"])):au("",!0)],2)],64)}const Ad=ke(Dd,[["render",hd],["__scopeId","data-v-6d951990"]]),gd={data(){return{proj:"proj",title:"title"}},components:{TechLayout:Ad}};const vd=Se(" Tech ");function bd(e,u,t,n,r,i){const a=ye("font-awesome-icon"),o=ye("TechLayout");return J(),X("div",{class:h(r.proj)},[A("div",{class:h(r.title)},[N(a,{icon:"fa-solid fa-angle-double-right"}),vd,N(a,{icon:"fa-solid fa-angle-double-left"})],2),N(o)],2)}const yd=ke(gd,[["render",bd],["__scopeId","data-v-f890d54e"]]),Ed=cf({history:wc(),routes:[{path:"/",name:"index",component:Wf},{path:"/about",name:"about",component:Xf},{path:"/tech",name:"tech",component:yd},{path:"/project",name:"project",component:k0},{path:"/link",name:"link",component:r0}]});function ha(e,u){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);u&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,n)}return t}function I(e){for(var u=1;u<arguments.length;u++){var t=arguments[u]!=null?arguments[u]:{};u%2?ha(Object(t),!0).forEach(function(n){Ee(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ha(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}function wn(e){return wn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(u){return typeof u}:function(u){return u&&typeof Symbol=="function"&&u.constructor===Symbol&&u!==Symbol.prototype?"symbol":typeof u},wn(e)}function _d(e,u){if(!(e instanceof u))throw new TypeError("Cannot call a class as a function")}function Aa(e,u){for(var t=0;t<u.length;t++){var n=u[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function wd(e,u,t){return u&&Aa(e.prototype,u),t&&Aa(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function Ee(e,u,t){return u in e?Object.defineProperty(e,u,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[u]=t,e}function li(e,u){return Sd(e)||Fd(e,u)||ns(e,u)||Id()}function qt(e){return kd(e)||xd(e)||ns(e)||Pd()}function kd(e){if(Array.isArray(e))return Sr(e)}function Sd(e){if(Array.isArray(e))return e}function xd(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Fd(e,u){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var n=[],r=!0,i=!1,a,o;try{for(t=t.call(e);!(r=(a=t.next()).done)&&(n.push(a.value),!(u&&n.length===u));r=!0);}catch(s){i=!0,o=s}finally{try{!r&&t.return!=null&&t.return()}finally{if(i)throw o}}return n}}function ns(e,u){if(!!e){if(typeof e=="string")return Sr(e,u);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Sr(e,u)}}function Sr(e,u){(u==null||u>e.length)&&(u=e.length);for(var t=0,n=new Array(u);t<u;t++)n[t]=e[t];return n}function Pd(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Id(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var ga=function(){},ci={},rs={},is=null,as={mark:ga,measure:ga};try{typeof window<"u"&&(ci=window),typeof document<"u"&&(rs=document),typeof MutationObserver<"u"&&(is=MutationObserver),typeof performance<"u"&&(as=performance)}catch{}var Td=ci.navigator||{},va=Td.userAgent,ba=va===void 0?"":va,Pu=ci,pe=rs,ya=is,rn=as;Pu.document;var hu=!!pe.documentElement&&!!pe.head&&typeof pe.addEventListener=="function"&&typeof pe.createElement=="function",os=~ba.indexOf("MSIE")||~ba.indexOf("Trident/"),an,on,sn,Cn,ln,Bu="___FONT_AWESOME___",xr=16,ss="fa",Cs="svg-inline--fa",Vu="data-fa-i2svg",Fr="data-fa-pseudo-element",jd="data-fa-pseudo-element-pending",fi="data-prefix",di="data-icon",Ea="fontawesome-i2svg",Od="async",Rd=["HTML","HEAD","STYLE","SCRIPT"],ls=function(){try{return!0}catch{return!1}}(),Be="classic",he="sharp",Bi=[Be,he];function Xt(e){return new Proxy(e,{get:function(t,n){return n in t?t[n]:t[Be]}})}var Ht=Xt((an={},Ee(an,Be,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),Ee(an,he,{fa:"solid",fass:"solid","fa-solid":"solid"}),an)),Jt=Xt((on={},Ee(on,Be,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),Ee(on,he,{solid:"fass"}),on)),$t=Xt((sn={},Ee(sn,Be,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),Ee(sn,he,{fass:"fa-solid"}),sn)),Md=Xt((Cn={},Ee(Cn,Be,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),Ee(Cn,he,{"fa-solid":"fass"}),Cn)),Ld=/fa(s|r|l|t|d|b|k|ss)?[\-\ ]/,cs="fa-layers-text",Nd=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Ud=Xt((ln={},Ee(ln,Be,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),Ee(ln,he,{900:"fass"}),ln)),fs=[1,2,3,4,5,6,7,8,9,10],Wd=fs.concat([11,12,13,14,15,16,17,18,19,20]),zd=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Nu={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Kt=new Set;Object.keys(Jt[Be]).map(Kt.add.bind(Kt));Object.keys(Jt[he]).map(Kt.add.bind(Kt));var Hd=[].concat(Bi,qt(Kt),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Nu.GROUP,Nu.SWAP_OPACITY,Nu.PRIMARY,Nu.SECONDARY]).concat(fs.map(function(e){return"".concat(e,"x")})).concat(Wd.map(function(e){return"w-".concat(e)})),Tt=Pu.FontAwesomeConfig||{};function Jd(e){var u=pe.querySelector("script["+e+"]");if(u)return u.getAttribute(e)}function $d(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(pe&&typeof pe.querySelector=="function"){var Kd=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Kd.forEach(function(e){var u=li(e,2),t=u[0],n=u[1],r=$d(Jd(t));r!=null&&(Tt[n]=r)})}var ds={styleDefault:"solid",familyDefault:"classic",cssPrefix:ss,replacementClass:Cs,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Tt.familyPrefix&&(Tt.cssPrefix=Tt.familyPrefix);var pt=I(I({},ds),Tt);pt.autoReplaceSvg||(pt.observeMutations=!1);var R={};Object.keys(ds).forEach(function(e){Object.defineProperty(R,e,{enumerable:!0,set:function(t){pt[e]=t,jt.forEach(function(n){return n(R)})},get:function(){return pt[e]}})});Object.defineProperty(R,"familyPrefix",{enumerable:!0,set:function(u){pt.cssPrefix=u,jt.forEach(function(t){return t(R)})},get:function(){return pt.cssPrefix}});Pu.FontAwesomeConfig=R;var jt=[];function Vd(e){return jt.push(e),function(){jt.splice(jt.indexOf(e),1)}}var bu=xr,iu={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Gd(e){if(!(!e||!hu)){var u=pe.createElement("style");u.setAttribute("type","text/css"),u.innerHTML=e;for(var t=pe.head.childNodes,n=null,r=t.length-1;r>-1;r--){var i=t[r],a=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(a)>-1&&(n=i)}return pe.head.insertBefore(u,n),e}}var Yd="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Vt(){for(var e=12,u="";e-- >0;)u+=Yd[Math.random()*62|0];return u}function vt(e){for(var u=[],t=(e||[]).length>>>0;t--;)u[t]=e[t];return u}function pi(e){return e.classList?vt(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(u){return u})}function Bs(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function qd(e){return Object.keys(e||{}).reduce(function(u,t){return u+"".concat(t,'="').concat(Bs(e[t]),'" ')},"").trim()}function Kn(e){return Object.keys(e||{}).reduce(function(u,t){return u+"".concat(t,": ").concat(e[t].trim(),";")},"")}function mi(e){return e.size!==iu.size||e.x!==iu.x||e.y!==iu.y||e.rotate!==iu.rotate||e.flipX||e.flipY}function Xd(e){var u=e.transform,t=e.containerWidth,n=e.iconWidth,r={transform:"translate(".concat(t/2," 256)")},i="translate(".concat(u.x*32,", ").concat(u.y*32,") "),a="scale(".concat(u.size/16*(u.flipX?-1:1),", ").concat(u.size/16*(u.flipY?-1:1),") "),o="rotate(".concat(u.rotate," 0 0)"),s={transform:"".concat(i," ").concat(a," ").concat(o)},l={transform:"translate(".concat(n/2*-1," -256)")};return{outer:r,inner:s,path:l}}function Qd(e){var u=e.transform,t=e.width,n=t===void 0?xr:t,r=e.height,i=r===void 0?xr:r,a=e.startCentered,o=a===void 0?!1:a,s="";return o&&os?s+="translate(".concat(u.x/bu-n/2,"em, ").concat(u.y/bu-i/2,"em) "):o?s+="translate(calc(-50% + ".concat(u.x/bu,"em), calc(-50% + ").concat(u.y/bu,"em)) "):s+="translate(".concat(u.x/bu,"em, ").concat(u.y/bu,"em) "),s+="scale(".concat(u.size/bu*(u.flipX?-1:1),", ").concat(u.size/bu*(u.flipY?-1:1),") "),s+="rotate(".concat(u.rotate,"deg) "),s}var Zd=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function ps(){var e=ss,u=Cs,t=R.cssPrefix,n=R.replacementClass,r=Zd;if(t!==e||n!==u){var i=new RegExp("\\.".concat(e,"\\-"),"g"),a=new RegExp("\\--".concat(e,"\\-"),"g"),o=new RegExp("\\.".concat(u),"g");r=r.replace(i,".".concat(t,"-")).replace(a,"--".concat(t,"-")).replace(o,".".concat(n))}return r}var _a=!1;function ar(){R.autoAddCss&&!_a&&(Gd(ps()),_a=!0)}var eB={mixout:function(){return{dom:{css:ps,insertCss:ar}}},hooks:function(){return{beforeDOMElementCreation:function(){ar()},beforeI2svg:function(){ar()}}}},pu=Pu||{};pu[Bu]||(pu[Bu]={});pu[Bu].styles||(pu[Bu].styles={});pu[Bu].hooks||(pu[Bu].hooks={});pu[Bu].shims||(pu[Bu].shims=[]);var Ye=pu[Bu],ms=[],uB=function e(){pe.removeEventListener("DOMContentLoaded",e),kn=1,ms.map(function(u){return u()})},kn=!1;hu&&(kn=(pe.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(pe.readyState),kn||pe.addEventListener("DOMContentLoaded",uB));function tB(e){!hu||(kn?setTimeout(e,0):ms.push(e))}function Qt(e){var u=e.tag,t=e.attributes,n=t===void 0?{}:t,r=e.children,i=r===void 0?[]:r;return typeof e=="string"?Bs(e):"<".concat(u," ").concat(qd(n),">").concat(i.map(Qt).join(""),"</").concat(u,">")}function wa(e,u,t){if(e&&e[u]&&e[u][t])return{prefix:u,iconName:t,icon:e[u][t]}}var nB=function(u,t){return function(n,r,i,a){return u.call(t,n,r,i,a)}},or=function(u,t,n,r){var i=Object.keys(u),a=i.length,o=r!==void 0?nB(t,r):t,s,l,C;for(n===void 0?(s=1,C=u[i[0]]):(s=0,C=n);s<a;s++)l=i[s],C=o(C,u[l],l,u);return C};function rB(e){for(var u=[],t=0,n=e.length;t<n;){var r=e.charCodeAt(t++);if(r>=55296&&r<=56319&&t<n){var i=e.charCodeAt(t++);(i&64512)==56320?u.push(((r&1023)<<10)+(i&1023)+65536):(u.push(r),t--)}else u.push(r)}return u}function Pr(e){var u=rB(e);return u.length===1?u[0].toString(16):null}function iB(e,u){var t=e.length,n=e.charCodeAt(u),r;return n>=55296&&n<=56319&&t>u+1&&(r=e.charCodeAt(u+1),r>=56320&&r<=57343)?(n-55296)*1024+r-56320+65536:n}function ka(e){return Object.keys(e).reduce(function(u,t){var n=e[t],r=!!n.icon;return r?u[n.iconName]=n.icon:u[t]=n,u},{})}function Ir(e,u){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},n=t.skipHooks,r=n===void 0?!1:n,i=ka(u);typeof Ye.hooks.addPack=="function"&&!r?Ye.hooks.addPack(e,ka(u)):Ye.styles[e]=I(I({},Ye.styles[e]||{}),i),e==="fas"&&Ir("fa",u)}var cn,fn,dn,ut=Ye.styles,aB=Ye.shims,oB=(cn={},Ee(cn,Be,Object.values($t[Be])),Ee(cn,he,Object.values($t[he])),cn),Di=null,Ds={},hs={},As={},gs={},vs={},sB=(fn={},Ee(fn,Be,Object.keys(Ht[Be])),Ee(fn,he,Object.keys(Ht[he])),fn);function CB(e){return~Hd.indexOf(e)}function lB(e,u){var t=u.split("-"),n=t[0],r=t.slice(1).join("-");return n===e&&r!==""&&!CB(r)?r:null}var bs=function(){var u=function(i){return or(ut,function(a,o,s){return a[s]=or(o,i,{}),a},{})};Ds=u(function(r,i,a){if(i[3]&&(r[i[3]]=a),i[2]){var o=i[2].filter(function(s){return typeof s=="number"});o.forEach(function(s){r[s.toString(16)]=a})}return r}),hs=u(function(r,i,a){if(r[a]=a,i[2]){var o=i[2].filter(function(s){return typeof s=="string"});o.forEach(function(s){r[s]=a})}return r}),vs=u(function(r,i,a){var o=i[2];return r[a]=a,o.forEach(function(s){r[s]=a}),r});var t="far"in ut||R.autoFetchSvg,n=or(aB,function(r,i){var a=i[0],o=i[1],s=i[2];return o==="far"&&!t&&(o="fas"),typeof a=="string"&&(r.names[a]={prefix:o,iconName:s}),typeof a=="number"&&(r.unicodes[a.toString(16)]={prefix:o,iconName:s}),r},{names:{},unicodes:{}});As=n.names,gs=n.unicodes,Di=Vn(R.styleDefault,{family:R.familyDefault})};Vd(function(e){Di=Vn(e.styleDefault,{family:R.familyDefault})});bs();function hi(e,u){return(Ds[e]||{})[u]}function cB(e,u){return(hs[e]||{})[u]}function Uu(e,u){return(vs[e]||{})[u]}function ys(e){return As[e]||{prefix:null,iconName:null}}function fB(e){var u=gs[e],t=hi("fas",e);return u||(t?{prefix:"fas",iconName:t}:null)||{prefix:null,iconName:null}}function Iu(){return Di}var Ai=function(){return{prefix:null,iconName:null,rest:[]}};function Vn(e){var u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=u.family,n=t===void 0?Be:t,r=Ht[n][e],i=Jt[n][e]||Jt[n][r],a=e in Ye.styles?e:null;return i||a||null}var Sa=(dn={},Ee(dn,Be,Object.keys($t[Be])),Ee(dn,he,Object.keys($t[he])),dn);function Gn(e){var u,t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.skipLookups,r=n===void 0?!1:n,i=(u={},Ee(u,Be,"".concat(R.cssPrefix,"-").concat(Be)),Ee(u,he,"".concat(R.cssPrefix,"-").concat(he)),u),a=null,o=Be;(e.includes(i[Be])||e.some(function(l){return Sa[Be].includes(l)}))&&(o=Be),(e.includes(i[he])||e.some(function(l){return Sa[he].includes(l)}))&&(o=he);var s=e.reduce(function(l,C){var f=lB(R.cssPrefix,C);if(ut[C]?(C=oB[o].includes(C)?Md[o][C]:C,a=C,l.prefix=C):sB[o].indexOf(C)>-1?(a=C,l.prefix=Vn(C,{family:o})):f?l.iconName=f:C!==R.replacementClass&&C!==i[Be]&&C!==i[he]&&l.rest.push(C),!r&&l.prefix&&l.iconName){var B=a==="fa"?ys(l.iconName):{},m=Uu(l.prefix,l.iconName);B.prefix&&(a=null),l.iconName=B.iconName||m||l.iconName,l.prefix=B.prefix||l.prefix,l.prefix==="far"&&!ut.far&&ut.fas&&!R.autoFetchSvg&&(l.prefix="fas")}return l},Ai());return(e.includes("fa-brands")||e.includes("fab"))&&(s.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(s.prefix="fad"),!s.prefix&&o===he&&(ut.fass||R.autoFetchSvg)&&(s.prefix="fass",s.iconName=Uu(s.prefix,s.iconName)||s.iconName),(s.prefix==="fa"||a==="fa")&&(s.prefix=Iu()||"fas"),s}var dB=function(){function e(){_d(this,e),this.definitions={}}return wd(e,[{key:"add",value:function(){for(var t=this,n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];var a=r.reduce(this._pullDefinitions,{});Object.keys(a).forEach(function(o){t.definitions[o]=I(I({},t.definitions[o]||{}),a[o]),Ir(o,a[o]);var s=$t[Be][o];s&&Ir(s,a[o]),bs()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(t,n){var r=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(r).map(function(i){var a=r[i],o=a.prefix,s=a.iconName,l=a.icon,C=l[2];t[o]||(t[o]={}),C.length>0&&C.forEach(function(f){typeof f=="string"&&(t[o][f]=l)}),t[o][s]=l}),t}}]),e}(),xa=[],tt={},st={},BB=Object.keys(st);function pB(e,u){var t=u.mixoutsTo;return xa=e,tt={},Object.keys(st).forEach(function(n){BB.indexOf(n)===-1&&delete st[n]}),xa.forEach(function(n){var r=n.mixout?n.mixout():{};if(Object.keys(r).forEach(function(a){typeof r[a]=="function"&&(t[a]=r[a]),wn(r[a])==="object"&&Object.keys(r[a]).forEach(function(o){t[a]||(t[a]={}),t[a][o]=r[a][o]})}),n.hooks){var i=n.hooks();Object.keys(i).forEach(function(a){tt[a]||(tt[a]=[]),tt[a].push(i[a])})}n.provides&&n.provides(st)}),t}function Tr(e,u){for(var t=arguments.length,n=new Array(t>2?t-2:0),r=2;r<t;r++)n[r-2]=arguments[r];var i=tt[e]||[];return i.forEach(function(a){u=a.apply(null,[u].concat(n))}),u}function Gu(e){for(var u=arguments.length,t=new Array(u>1?u-1:0),n=1;n<u;n++)t[n-1]=arguments[n];var r=tt[e]||[];r.forEach(function(i){i.apply(null,t)})}function mu(){var e=arguments[0],u=Array.prototype.slice.call(arguments,1);return st[e]?st[e].apply(null,u):void 0}function jr(e){e.prefix==="fa"&&(e.prefix="fas");var u=e.iconName,t=e.prefix||Iu();if(!!u)return u=Uu(t,u)||u,wa(Es.definitions,t,u)||wa(Ye.styles,t,u)}var Es=new dB,mB=function(){R.autoReplaceSvg=!1,R.observeMutations=!1,Gu("noAuto")},DB={i2svg:function(){var u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return hu?(Gu("beforeI2svg",u),mu("pseudoElements2svg",u),mu("i2svg",u)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=u.autoReplaceSvgRoot;R.autoReplaceSvg===!1&&(R.autoReplaceSvg=!0),R.observeMutations=!0,tB(function(){AB({autoReplaceSvgRoot:t}),Gu("watch",u)})}},hB={icon:function(u){if(u===null)return null;if(wn(u)==="object"&&u.prefix&&u.iconName)return{prefix:u.prefix,iconName:Uu(u.prefix,u.iconName)||u.iconName};if(Array.isArray(u)&&u.length===2){var t=u[1].indexOf("fa-")===0?u[1].slice(3):u[1],n=Vn(u[0]);return{prefix:n,iconName:Uu(n,t)||t}}if(typeof u=="string"&&(u.indexOf("".concat(R.cssPrefix,"-"))>-1||u.match(Ld))){var r=Gn(u.split(" "),{skipLookups:!0});return{prefix:r.prefix||Iu(),iconName:Uu(r.prefix,r.iconName)||r.iconName}}if(typeof u=="string"){var i=Iu();return{prefix:i,iconName:Uu(i,u)||u}}}},Ue={noAuto:mB,config:R,dom:DB,parse:hB,library:Es,findIconDefinition:jr,toHtml:Qt},AB=function(){var u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=u.autoReplaceSvgRoot,n=t===void 0?pe:t;(Object.keys(Ye.styles).length>0||R.autoFetchSvg)&&hu&&R.autoReplaceSvg&&Ue.dom.i2svg({node:n})};function Yn(e,u){return Object.defineProperty(e,"abstract",{get:u}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(n){return Qt(n)})}}),Object.defineProperty(e,"node",{get:function(){if(!!hu){var n=pe.createElement("div");return n.innerHTML=e.html,n.children}}}),e}function gB(e){var u=e.children,t=e.main,n=e.mask,r=e.attributes,i=e.styles,a=e.transform;if(mi(a)&&t.found&&!n.found){var o=t.width,s=t.height,l={x:o/s/2,y:.5};r.style=Kn(I(I({},i),{},{"transform-origin":"".concat(l.x+a.x/16,"em ").concat(l.y+a.y/16,"em")}))}return[{tag:"svg",attributes:r,children:u}]}function vB(e){var u=e.prefix,t=e.iconName,n=e.children,r=e.attributes,i=e.symbol,a=i===!0?"".concat(u,"-").concat(R.cssPrefix,"-").concat(t):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:I(I({},r),{},{id:a}),children:n}]}]}function gi(e){var u=e.icons,t=u.main,n=u.mask,r=e.prefix,i=e.iconName,a=e.transform,o=e.symbol,s=e.title,l=e.maskId,C=e.titleId,f=e.extra,B=e.watchable,m=B===void 0?!1:B,_=n.found?n:t,T=_.width,F=_.height,D=r==="fak",y=[R.replacementClass,i?"".concat(R.cssPrefix,"-").concat(i):""].filter(function(ae){return f.classes.indexOf(ae)===-1}).filter(function(ae){return ae!==""||!!ae}).concat(f.classes).join(" "),j={children:[],attributes:I(I({},f.attributes),{},{"data-prefix":r,"data-icon":i,class:y,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(T," ").concat(F)})},z=D&&!~f.classes.indexOf("fa-fw")?{width:"".concat(T/F*16*.0625,"em")}:{};m&&(j.attributes[Vu]=""),s&&(j.children.push({tag:"title",attributes:{id:j.attributes["aria-labelledby"]||"title-".concat(C||Vt())},children:[s]}),delete j.attributes.title);var H=I(I({},j),{},{prefix:r,iconName:i,main:t,mask:n,maskId:l,transform:a,symbol:o,styles:I(I({},z),f.styles)}),ne=n.found&&t.found?mu("generateAbstractMask",H)||{children:[],attributes:{}}:mu("generateAbstractIcon",H)||{children:[],attributes:{}},K=ne.children,Q=ne.attributes;return H.children=K,H.attributes=Q,o?vB(H):gB(H)}function Fa(e){var u=e.content,t=e.width,n=e.height,r=e.transform,i=e.title,a=e.extra,o=e.watchable,s=o===void 0?!1:o,l=I(I(I({},a.attributes),i?{title:i}:{}),{},{class:a.classes.join(" ")});s&&(l[Vu]="");var C=I({},a.styles);mi(r)&&(C.transform=Qd({transform:r,startCentered:!0,width:t,height:n}),C["-webkit-transform"]=C.transform);var f=Kn(C);f.length>0&&(l.style=f);var B=[];return B.push({tag:"span",attributes:l,children:[u]}),i&&B.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),B}function bB(e){var u=e.content,t=e.title,n=e.extra,r=I(I(I({},n.attributes),t?{title:t}:{}),{},{class:n.classes.join(" ")}),i=Kn(n.styles);i.length>0&&(r.style=i);var a=[];return a.push({tag:"span",attributes:r,children:[u]}),t&&a.push({tag:"span",attributes:{class:"sr-only"},children:[t]}),a}var sr=Ye.styles;function Or(e){var u=e[0],t=e[1],n=e.slice(4),r=li(n,1),i=r[0],a=null;return Array.isArray(i)?a={tag:"g",attributes:{class:"".concat(R.cssPrefix,"-").concat(Nu.GROUP)},children:[{tag:"path",attributes:{class:"".concat(R.cssPrefix,"-").concat(Nu.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(R.cssPrefix,"-").concat(Nu.PRIMARY),fill:"currentColor",d:i[1]}}]}:a={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:u,height:t,icon:a}}var yB={found:!1,width:512,height:512};function EB(e,u){!ls&&!R.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(u,'" is missing.'))}function Rr(e,u){var t=u;return u==="fa"&&R.styleDefault!==null&&(u=Iu()),new Promise(function(n,r){if(mu("missingIconAbstract"),t==="fa"){var i=ys(e)||{};e=i.iconName||e,u=i.prefix||u}if(e&&u&&sr[u]&&sr[u][e]){var a=sr[u][e];return n(Or(a))}EB(e,u),n(I(I({},yB),{},{icon:R.showMissingIcons&&e?mu("missingIconAbstract")||{}:{}}))})}var Pa=function(){},Mr=R.measurePerformance&&rn&&rn.mark&&rn.measure?rn:{mark:Pa,measure:Pa},kt='FA "6.2.0"',_B=function(u){return Mr.mark("".concat(kt," ").concat(u," begins")),function(){return _s(u)}},_s=function(u){Mr.mark("".concat(kt," ").concat(u," ends")),Mr.measure("".concat(kt," ").concat(u),"".concat(kt," ").concat(u," begins"),"".concat(kt," ").concat(u," ends"))},vi={begin:_B,end:_s},hn=function(){};function Ia(e){var u=e.getAttribute?e.getAttribute(Vu):null;return typeof u=="string"}function wB(e){var u=e.getAttribute?e.getAttribute(fi):null,t=e.getAttribute?e.getAttribute(di):null;return u&&t}function kB(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(R.replacementClass)}function SB(){if(R.autoReplaceSvg===!0)return An.replace;var e=An[R.autoReplaceSvg];return e||An.replace}function xB(e){return pe.createElementNS("http://www.w3.org/2000/svg",e)}function FB(e){return pe.createElement(e)}function ws(e){var u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=u.ceFn,n=t===void 0?e.tag==="svg"?xB:FB:t;if(typeof e=="string")return pe.createTextNode(e);var r=n(e.tag);Object.keys(e.attributes||[]).forEach(function(a){r.setAttribute(a,e.attributes[a])});var i=e.children||[];return i.forEach(function(a){r.appendChild(ws(a,{ceFn:n}))}),r}function PB(e){var u=" ".concat(e.outerHTML," ");return u="".concat(u,"Font Awesome fontawesome.com "),u}var An={replace:function(u){var t=u[0];if(t.parentNode)if(u[1].forEach(function(r){t.parentNode.insertBefore(ws(r),t)}),t.getAttribute(Vu)===null&&R.keepOriginalSource){var n=pe.createComment(PB(t));t.parentNode.replaceChild(n,t)}else t.remove()},nest:function(u){var t=u[0],n=u[1];if(~pi(t).indexOf(R.replacementClass))return An.replace(u);var r=new RegExp("".concat(R.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){var i=n[0].attributes.class.split(" ").reduce(function(o,s){return s===R.replacementClass||s.match(r)?o.toSvg.push(s):o.toNode.push(s),o},{toNode:[],toSvg:[]});n[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?t.removeAttribute("class"):t.setAttribute("class",i.toNode.join(" "))}var a=n.map(function(o){return Qt(o)}).join(`
`);t.setAttribute(Vu,""),t.innerHTML=a}};function Ta(e){e()}function ks(e,u){var t=typeof u=="function"?u:hn;if(e.length===0)t();else{var n=Ta;R.mutateApproach===Od&&(n=Pu.requestAnimationFrame||Ta),n(function(){var r=SB(),i=vi.begin("mutate");e.map(r),i(),t()})}}var bi=!1;function Ss(){bi=!0}function Lr(){bi=!1}var Sn=null;function ja(e){if(!!ya&&!!R.observeMutations){var u=e.treeCallback,t=u===void 0?hn:u,n=e.nodeCallback,r=n===void 0?hn:n,i=e.pseudoElementsCallback,a=i===void 0?hn:i,o=e.observeMutationsRoot,s=o===void 0?pe:o;Sn=new ya(function(l){if(!bi){var C=Iu();vt(l).forEach(function(f){if(f.type==="childList"&&f.addedNodes.length>0&&!Ia(f.addedNodes[0])&&(R.searchPseudoElements&&a(f.target),t(f.target)),f.type==="attributes"&&f.target.parentNode&&R.searchPseudoElements&&a(f.target.parentNode),f.type==="attributes"&&Ia(f.target)&&~zd.indexOf(f.attributeName))if(f.attributeName==="class"&&wB(f.target)){var B=Gn(pi(f.target)),m=B.prefix,_=B.iconName;f.target.setAttribute(fi,m||C),_&&f.target.setAttribute(di,_)}else kB(f.target)&&r(f.target)})}}),hu&&Sn.observe(s,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function IB(){!Sn||Sn.disconnect()}function TB(e){var u=e.getAttribute("style"),t=[];return u&&(t=u.split(";").reduce(function(n,r){var i=r.split(":"),a=i[0],o=i.slice(1);return a&&o.length>0&&(n[a]=o.join(":").trim()),n},{})),t}function jB(e){var u=e.getAttribute("data-prefix"),t=e.getAttribute("data-icon"),n=e.innerText!==void 0?e.innerText.trim():"",r=Gn(pi(e));return r.prefix||(r.prefix=Iu()),u&&t&&(r.prefix=u,r.iconName=t),r.iconName&&r.prefix||(r.prefix&&n.length>0&&(r.iconName=cB(r.prefix,e.innerText)||hi(r.prefix,Pr(e.innerText))),!r.iconName&&R.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=e.firstChild.data)),r}function OB(e){var u=vt(e.attributes).reduce(function(r,i){return r.name!=="class"&&r.name!=="style"&&(r[i.name]=i.value),r},{}),t=e.getAttribute("title"),n=e.getAttribute("data-fa-title-id");return R.autoA11y&&(t?u["aria-labelledby"]="".concat(R.replacementClass,"-title-").concat(n||Vt()):(u["aria-hidden"]="true",u.focusable="false")),u}function RB(){return{iconName:null,title:null,titleId:null,prefix:null,transform:iu,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Oa(e){var u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},t=jB(e),n=t.iconName,r=t.prefix,i=t.rest,a=OB(e),o=Tr("parseNodeAttributes",{},e),s=u.styleParser?TB(e):[];return I({iconName:n,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:r,transform:iu,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:s,attributes:a}},o)}var MB=Ye.styles;function xs(e){var u=R.autoReplaceSvg==="nest"?Oa(e,{styleParser:!1}):Oa(e);return~u.extra.classes.indexOf(cs)?mu("generateLayersText",e,u):mu("generateSvgReplacementMutation",e,u)}var Tu=new Set;Bi.map(function(e){Tu.add("fa-".concat(e))});Object.keys(Ht[Be]).map(Tu.add.bind(Tu));Object.keys(Ht[he]).map(Tu.add.bind(Tu));Tu=qt(Tu);function Ra(e){var u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!hu)return Promise.resolve();var t=pe.documentElement.classList,n=function(f){return t.add("".concat(Ea,"-").concat(f))},r=function(f){return t.remove("".concat(Ea,"-").concat(f))},i=R.autoFetchSvg?Tu:Bi.map(function(C){return"fa-".concat(C)}).concat(Object.keys(MB));i.includes("fa")||i.push("fa");var a=[".".concat(cs,":not([").concat(Vu,"])")].concat(i.map(function(C){return".".concat(C,":not([").concat(Vu,"])")})).join(", ");if(a.length===0)return Promise.resolve();var o=[];try{o=vt(e.querySelectorAll(a))}catch{}if(o.length>0)n("pending"),r("complete");else return Promise.resolve();var s=vi.begin("onTree"),l=o.reduce(function(C,f){try{var B=xs(f);B&&C.push(B)}catch(m){ls||m.name==="MissingIcon"&&console.error(m)}return C},[]);return new Promise(function(C,f){Promise.all(l).then(function(B){ks(B,function(){n("active"),n("complete"),r("pending"),typeof u=="function"&&u(),s(),C()})}).catch(function(B){s(),f(B)})})}function LB(e){var u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;xs(e).then(function(t){t&&ks([t],u)})}function NB(e){return function(u){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=(u||{}).icon?u:jr(u||{}),r=t.mask;return r&&(r=(r||{}).icon?r:jr(r||{})),e(n,I(I({},t),{},{mask:r}))}}var UB=function(u){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.transform,r=n===void 0?iu:n,i=t.symbol,a=i===void 0?!1:i,o=t.mask,s=o===void 0?null:o,l=t.maskId,C=l===void 0?null:l,f=t.title,B=f===void 0?null:f,m=t.titleId,_=m===void 0?null:m,T=t.classes,F=T===void 0?[]:T,D=t.attributes,y=D===void 0?{}:D,j=t.styles,z=j===void 0?{}:j;if(!!u){var H=u.prefix,ne=u.iconName,K=u.icon;return Yn(I({type:"icon"},u),function(){return Gu("beforeDOMElementCreation",{iconDefinition:u,params:t}),R.autoA11y&&(B?y["aria-labelledby"]="".concat(R.replacementClass,"-title-").concat(_||Vt()):(y["aria-hidden"]="true",y.focusable="false")),gi({icons:{main:Or(K),mask:s?Or(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:H,iconName:ne,transform:I(I({},iu),r),symbol:a,title:B,maskId:C,titleId:_,extra:{attributes:y,styles:z,classes:F}})})}},WB={mixout:function(){return{icon:NB(UB)}},hooks:function(){return{mutationObserverCallbacks:function(t){return t.treeCallback=Ra,t.nodeCallback=LB,t}}},provides:function(u){u.i2svg=function(t){var n=t.node,r=n===void 0?pe:n,i=t.callback,a=i===void 0?function(){}:i;return Ra(r,a)},u.generateSvgReplacementMutation=function(t,n){var r=n.iconName,i=n.title,a=n.titleId,o=n.prefix,s=n.transform,l=n.symbol,C=n.mask,f=n.maskId,B=n.extra;return new Promise(function(m,_){Promise.all([Rr(r,o),C.iconName?Rr(C.iconName,C.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(T){var F=li(T,2),D=F[0],y=F[1];m([t,gi({icons:{main:D,mask:y},prefix:o,iconName:r,transform:s,symbol:l,maskId:f,title:i,titleId:a,extra:B,watchable:!0})])}).catch(_)})},u.generateAbstractIcon=function(t){var n=t.children,r=t.attributes,i=t.main,a=t.transform,o=t.styles,s=Kn(o);s.length>0&&(r.style=s);var l;return mi(a)&&(l=mu("generateAbstractTransformGrouping",{main:i,transform:a,containerWidth:i.width,iconWidth:i.width})),n.push(l||i.icon),{children:n,attributes:r}}}},zB={mixout:function(){return{layer:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.classes,i=r===void 0?[]:r;return Yn({type:"layer"},function(){Gu("beforeDOMElementCreation",{assembler:t,params:n});var a=[];return t(function(o){Array.isArray(o)?o.map(function(s){a=a.concat(s.abstract)}):a=a.concat(o.abstract)}),[{tag:"span",attributes:{class:["".concat(R.cssPrefix,"-layers")].concat(qt(i)).join(" ")},children:a}]})}}}},HB={mixout:function(){return{counter:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.title,i=r===void 0?null:r,a=n.classes,o=a===void 0?[]:a,s=n.attributes,l=s===void 0?{}:s,C=n.styles,f=C===void 0?{}:C;return Yn({type:"counter",content:t},function(){return Gu("beforeDOMElementCreation",{content:t,params:n}),bB({content:t.toString(),title:i,extra:{attributes:l,styles:f,classes:["".concat(R.cssPrefix,"-layers-counter")].concat(qt(o))}})})}}}},JB={mixout:function(){return{text:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?iu:r,a=n.title,o=a===void 0?null:a,s=n.classes,l=s===void 0?[]:s,C=n.attributes,f=C===void 0?{}:C,B=n.styles,m=B===void 0?{}:B;return Yn({type:"text",content:t},function(){return Gu("beforeDOMElementCreation",{content:t,params:n}),Fa({content:t,transform:I(I({},iu),i),title:o,extra:{attributes:f,styles:m,classes:["".concat(R.cssPrefix,"-layers-text")].concat(qt(l))}})})}}},provides:function(u){u.generateLayersText=function(t,n){var r=n.title,i=n.transform,a=n.extra,o=null,s=null;if(os){var l=parseInt(getComputedStyle(t).fontSize,10),C=t.getBoundingClientRect();o=C.width/l,s=C.height/l}return R.autoA11y&&!r&&(a.attributes["aria-hidden"]="true"),Promise.resolve([t,Fa({content:t.innerHTML,width:o,height:s,transform:i,title:r,extra:a,watchable:!0})])}}},$B=new RegExp('"',"ug"),Ma=[1105920,1112319];function KB(e){var u=e.replace($B,""),t=iB(u,0),n=t>=Ma[0]&&t<=Ma[1],r=u.length===2?u[0]===u[1]:!1;return{value:Pr(r?u[0]:u),isSecondary:n||r}}function La(e,u){var t="".concat(jd).concat(u.replace(":","-"));return new Promise(function(n,r){if(e.getAttribute(t)!==null)return n();var i=vt(e.children),a=i.filter(function(K){return K.getAttribute(Fr)===u})[0],o=Pu.getComputedStyle(e,u),s=o.getPropertyValue("font-family").match(Nd),l=o.getPropertyValue("font-weight"),C=o.getPropertyValue("content");if(a&&!s)return e.removeChild(a),n();if(s&&C!=="none"&&C!==""){var f=o.getPropertyValue("content"),B=~["Sharp"].indexOf(s[2])?he:Be,m=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(s[2])?Jt[B][s[2].toLowerCase()]:Ud[B][l],_=KB(f),T=_.value,F=_.isSecondary,D=s[0].startsWith("FontAwesome"),y=hi(m,T),j=y;if(D){var z=fB(T);z.iconName&&z.prefix&&(y=z.iconName,m=z.prefix)}if(y&&!F&&(!a||a.getAttribute(fi)!==m||a.getAttribute(di)!==j)){e.setAttribute(t,j),a&&e.removeChild(a);var H=RB(),ne=H.extra;ne.attributes[Fr]=u,Rr(y,m).then(function(K){var Q=gi(I(I({},H),{},{icons:{main:K,mask:Ai()},prefix:m,iconName:j,extra:ne,watchable:!0})),ae=pe.createElement("svg");u==="::before"?e.insertBefore(ae,e.firstChild):e.appendChild(ae),ae.outerHTML=Q.map(function(xe){return Qt(xe)}).join(`
`),e.removeAttribute(t),n()}).catch(r)}else n()}else n()})}function VB(e){return Promise.all([La(e,"::before"),La(e,"::after")])}function GB(e){return e.parentNode!==document.head&&!~Rd.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Fr)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Na(e){if(!!hu)return new Promise(function(u,t){var n=vt(e.querySelectorAll("*")).filter(GB).map(VB),r=vi.begin("searchPseudoElements");Ss(),Promise.all(n).then(function(){r(),Lr(),u()}).catch(function(){r(),Lr(),t()})})}var YB={hooks:function(){return{mutationObserverCallbacks:function(t){return t.pseudoElementsCallback=Na,t}}},provides:function(u){u.pseudoElements2svg=function(t){var n=t.node,r=n===void 0?pe:n;R.searchPseudoElements&&Na(r)}}},Ua=!1,qB={mixout:function(){return{dom:{unwatch:function(){Ss(),Ua=!0}}}},hooks:function(){return{bootstrap:function(){ja(Tr("mutationObserverCallbacks",{}))},noAuto:function(){IB()},watch:function(t){var n=t.observeMutationsRoot;Ua?Lr():ja(Tr("mutationObserverCallbacks",{observeMutationsRoot:n}))}}}},Wa=function(u){var t={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return u.toLowerCase().split(" ").reduce(function(n,r){var i=r.toLowerCase().split("-"),a=i[0],o=i.slice(1).join("-");if(a&&o==="h")return n.flipX=!0,n;if(a&&o==="v")return n.flipY=!0,n;if(o=parseFloat(o),isNaN(o))return n;switch(a){case"grow":n.size=n.size+o;break;case"shrink":n.size=n.size-o;break;case"left":n.x=n.x-o;break;case"right":n.x=n.x+o;break;case"up":n.y=n.y-o;break;case"down":n.y=n.y+o;break;case"rotate":n.rotate=n.rotate+o;break}return n},t)},XB={mixout:function(){return{parse:{transform:function(t){return Wa(t)}}}},hooks:function(){return{parseNodeAttributes:function(t,n){var r=n.getAttribute("data-fa-transform");return r&&(t.transform=Wa(r)),t}}},provides:function(u){u.generateAbstractTransformGrouping=function(t){var n=t.main,r=t.transform,i=t.containerWidth,a=t.iconWidth,o={transform:"translate(".concat(i/2," 256)")},s="translate(".concat(r.x*32,", ").concat(r.y*32,") "),l="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),C="rotate(".concat(r.rotate," 0 0)"),f={transform:"".concat(s," ").concat(l," ").concat(C)},B={transform:"translate(".concat(a/2*-1," -256)")},m={outer:o,inner:f,path:B};return{tag:"g",attributes:I({},m.outer),children:[{tag:"g",attributes:I({},m.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:I(I({},n.icon.attributes),m.path)}]}]}}}},Cr={x:0,y:0,width:"100%",height:"100%"};function za(e){var u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||u)&&(e.attributes.fill="black"),e}function QB(e){return e.tag==="g"?e.children:[e]}var ZB={hooks:function(){return{parseNodeAttributes:function(t,n){var r=n.getAttribute("data-fa-mask"),i=r?Gn(r.split(" ").map(function(a){return a.trim()})):Ai();return i.prefix||(i.prefix=Iu()),t.mask=i,t.maskId=n.getAttribute("data-fa-mask-id"),t}}},provides:function(u){u.generateAbstractMask=function(t){var n=t.children,r=t.attributes,i=t.main,a=t.mask,o=t.maskId,s=t.transform,l=i.width,C=i.icon,f=a.width,B=a.icon,m=Xd({transform:s,containerWidth:f,iconWidth:l}),_={tag:"rect",attributes:I(I({},Cr),{},{fill:"white"})},T=C.children?{children:C.children.map(za)}:{},F={tag:"g",attributes:I({},m.inner),children:[za(I({tag:C.tag,attributes:I(I({},C.attributes),m.path)},T))]},D={tag:"g",attributes:I({},m.outer),children:[F]},y="mask-".concat(o||Vt()),j="clip-".concat(o||Vt()),z={tag:"mask",attributes:I(I({},Cr),{},{id:y,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[_,D]},H={tag:"defs",children:[{tag:"clipPath",attributes:{id:j},children:QB(B)},z]};return n.push(H,{tag:"rect",attributes:I({fill:"currentColor","clip-path":"url(#".concat(j,")"),mask:"url(#".concat(y,")")},Cr)}),{children:n,attributes:r}}}},ep={provides:function(u){var t=!1;Pu.matchMedia&&(t=Pu.matchMedia("(prefers-reduced-motion: reduce)").matches),u.missingIconAbstract=function(){var n=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:I(I({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var a=I(I({},i),{},{attributeName:"opacity"}),o={tag:"circle",attributes:I(I({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return t||o.children.push({tag:"animate",attributes:I(I({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:I(I({},a),{},{values:"1;0;1;1;0;1;"})}),n.push(o),n.push({tag:"path",attributes:I(I({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:t?[]:[{tag:"animate",attributes:I(I({},a),{},{values:"1;0;0;0;0;1;"})}]}),t||n.push({tag:"path",attributes:I(I({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:I(I({},a),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},up={hooks:function(){return{parseNodeAttributes:function(t,n){var r=n.getAttribute("data-fa-symbol"),i=r===null?!1:r===""?!0:r;return t.symbol=i,t}}}},tp=[eB,WB,zB,HB,JB,YB,qB,XB,ZB,ep,up];pB(tp,{mixoutsTo:Ue});Ue.noAuto;var Fs=Ue.config,np=Ue.library;Ue.dom;var xn=Ue.parse;Ue.findIconDefinition;Ue.toHtml;var rp=Ue.icon;Ue.layer;var ip=Ue.text;Ue.counter;function Ha(e,u){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);u&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,n)}return t}function Ke(e){for(var u=1;u<arguments.length;u++){var t=arguments[u]!=null?arguments[u]:{};u%2?Ha(Object(t),!0).forEach(function(n){je(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Ha(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}function Fn(e){return Fn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(u){return typeof u}:function(u){return u&&typeof Symbol=="function"&&u.constructor===Symbol&&u!==Symbol.prototype?"symbol":typeof u},Fn(e)}function je(e,u,t){return u in e?Object.defineProperty(e,u,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[u]=t,e}function ap(e,u){if(e==null)return{};var t={},n=Object.keys(e),r,i;for(i=0;i<n.length;i++)r=n[i],!(u.indexOf(r)>=0)&&(t[r]=e[r]);return t}function op(e,u){if(e==null)return{};var t=ap(e,u),n,r;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],!(u.indexOf(n)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,n)||(t[n]=e[n]))}return t}function Nr(e){return sp(e)||Cp(e)||lp(e)||cp()}function sp(e){if(Array.isArray(e))return Ur(e)}function Cp(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function lp(e,u){if(!!e){if(typeof e=="string")return Ur(e,u);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Ur(e,u)}}function Ur(e,u){(u==null||u>e.length)&&(u=e.length);for(var t=0,n=new Array(u);t<u;t++)n[t]=e[t];return n}function cp(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var fp=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Ps={exports:{}};(function(e){(function(u){var t=function(D,y,j){if(!l(y)||f(y)||B(y)||m(y)||s(y))return y;var z,H=0,ne=0;if(C(y))for(z=[],ne=y.length;H<ne;H++)z.push(t(D,y[H],j));else{z={};for(var K in y)Object.prototype.hasOwnProperty.call(y,K)&&(z[D(K,j)]=t(D,y[K],j))}return z},n=function(D,y){y=y||{};var j=y.separator||"_",z=y.split||/(?=[A-Z])/;return D.split(z).join(j)},r=function(D){return _(D)?D:(D=D.replace(/[\-_\s]+(.)?/g,function(y,j){return j?j.toUpperCase():""}),D.substr(0,1).toLowerCase()+D.substr(1))},i=function(D){var y=r(D);return y.substr(0,1).toUpperCase()+y.substr(1)},a=function(D,y){return n(D,y).toLowerCase()},o=Object.prototype.toString,s=function(D){return typeof D=="function"},l=function(D){return D===Object(D)},C=function(D){return o.call(D)=="[object Array]"},f=function(D){return o.call(D)=="[object Date]"},B=function(D){return o.call(D)=="[object RegExp]"},m=function(D){return o.call(D)=="[object Boolean]"},_=function(D){return D=D-0,D===D},T=function(D,y){var j=y&&"process"in y?y.process:y;return typeof j!="function"?D:function(z,H){return j(z,D,H)}},F={camelize:r,decamelize:a,pascalize:i,depascalize:a,camelizeKeys:function(D,y){return t(T(r,y),D)},decamelizeKeys:function(D,y){return t(T(a,y),D,y)},pascalizeKeys:function(D,y){return t(T(i,y),D)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=F:u.humps=F})(fp)})(Ps);var dp=Ps.exports,Bp=["class","style"];function pp(e){return e.split(";").map(function(u){return u.trim()}).filter(function(u){return u}).reduce(function(u,t){var n=t.indexOf(":"),r=dp.camelize(t.slice(0,n)),i=t.slice(n+1).trim();return u[r]=i,u},{})}function mp(e){return e.split(/\s+/).reduce(function(u,t){return u[t]=!0,u},{})}function yi(e){var u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var n=(e.children||[]).map(function(s){return yi(s)}),r=Object.keys(e.attributes||{}).reduce(function(s,l){var C=e.attributes[l];switch(l){case"class":s.class=mp(C);break;case"style":s.style=pp(C);break;default:s.attrs[l]=C}return s},{attrs:{},class:{},style:{}});t.class;var i=t.style,a=i===void 0?{}:i,o=op(t,Bp);return Hn(e.tag,Ke(Ke(Ke({},u),{},{class:r.class,style:Ke(Ke({},r.style),a)},r.attrs),o),n)}var Is=!1;try{Is=!0}catch{}function Dp(){if(!Is&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Ot(e,u){return Array.isArray(u)&&u.length>0||!Array.isArray(u)&&u?je({},e,u):{}}function hp(e){var u,t=(u={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},je(u,"fa-".concat(e.size),e.size!==null),je(u,"fa-rotate-".concat(e.rotation),e.rotation!==null),je(u,"fa-pull-".concat(e.pull),e.pull!==null),je(u,"fa-swap-opacity",e.swapOpacity),je(u,"fa-bounce",e.bounce),je(u,"fa-shake",e.shake),je(u,"fa-beat",e.beat),je(u,"fa-fade",e.fade),je(u,"fa-beat-fade",e.beatFade),je(u,"fa-flash",e.flash),je(u,"fa-spin-pulse",e.spinPulse),je(u,"fa-spin-reverse",e.spinReverse),u);return Object.keys(t).map(function(n){return t[n]?n:null}).filter(function(n){return n})}function Ja(e){if(e&&Fn(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(xn.icon)return xn.icon(e);if(e===null)return null;if(Fn(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var Ap=Yt({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(u){return[!0,!1,"horizontal","vertical","both"].indexOf(u)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(u){return["right","left"].indexOf(u)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(u){return[90,180,270].indexOf(Number.parseInt(u,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(u){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(u)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(u,t){var n=t.attrs,r=me(function(){return Ja(u.icon)}),i=me(function(){return Ot("classes",hp(u))}),a=me(function(){return Ot("transform",typeof u.transform=="string"?xn.transform(u.transform):u.transform)}),o=me(function(){return Ot("mask",Ja(u.mask))}),s=me(function(){return rp(r.value,Ke(Ke(Ke(Ke({},i.value),a.value),o.value),{},{symbol:u.symbol,title:u.title}))});zu(s,function(C){if(!C)return Dp("Could not find one or more icon(s)",r.value,o.value)},{immediate:!0});var l=me(function(){return s.value?yi(s.value.abstract[0],{},n):null});return function(){return l.value}}});Yt({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(u,t){var n=t.slots,r=Fs.familyPrefix,i=me(function(){return["".concat(r,"-layers")].concat(Nr(u.fixedWidth?["".concat(r,"-fw")]:[]))});return function(){return Hn("div",{class:i.value},n.default?n.default():[])}}});Yt({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(u){return["bottom-left","bottom-right","top-left","top-right"].indexOf(u)>-1}}},setup:function(u,t){var n=t.attrs,r=Fs.familyPrefix,i=me(function(){return Ot("classes",[].concat(Nr(u.counter?["".concat(r,"-layers-counter")]:[]),Nr(u.position?["".concat(r,"-layers-").concat(u.position)]:[])))}),a=me(function(){return Ot("transform",typeof u.transform=="string"?xn.transform(u.transform):u.transform)}),o=me(function(){var l=ip(u.value.toString(),Ke(Ke({},a.value),i.value)),C=l.abstract;return u.counter&&(C[0].attributes.class=C[0].attributes.class.replace("fa-layers-text","")),C[0]}),s=me(function(){return yi(o.value,{},n)});return function(){return s.value}}});var gp={prefix:"fas",iconName:"angle-right",icon:[320,512,[8250],"f105","M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"]},vp={prefix:"fas",iconName:"angles-right",icon:[512,512,[187,"angle-double-right"],"f101","M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z"]},bp=vp,yp={prefix:"fas",iconName:"angles-left",icon:[512,512,[171,"angle-double-left"],"f100","M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160zm352-160l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L301.3 256 438.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0z"]},Ep=yp,_p={prefix:"fas",iconName:"angle-left",icon:[320,512,[8249],"f104","M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"]},wp={prefix:"fas",iconName:"circle-xmark",icon:[512,512,[61532,"times-circle","xmark-circle"],"f057","M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"]};np.add(bp,Ep,gp,_p,wp);const qn=ec(Pf),Pn=nc();qn.component("font-awesome-icon",Ap);localStorage.getItem("pinia")?(Pn.state.value=JSON.parse(localStorage.getItem("pinia")),console.log(Pn.state)):console.log("pinia value not found");zu(Pn.state,e=>{localStorage.setItem("pinia",JSON.stringify(e))},{deep:!0});qn.use(Pn);qn.use(Ed);qn.mount("#app");
