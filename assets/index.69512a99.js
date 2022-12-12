(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const C of document.querySelectorAll('link[rel="modulepreload"]'))n(C);new MutationObserver(C=>{for(const r of C)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function t(C){const r={};return C.integrity&&(r.integrity=C.integrity),C.referrerpolicy&&(r.referrerPolicy=C.referrerpolicy),C.crossorigin==="use-credentials"?r.credentials="include":C.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(C){if(C.ep)return;C.ep=!0;const r=t(C);fetch(C.href,r)}})();function WC(u,e){const t=Object.create(null),n=u.split(",");for(let C=0;C<n.length;C++)t[n[C]]=!0;return e?C=>!!t[C.toLowerCase()]:C=>!!t[C]}const To="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",jo=WC(To);function $i(u){return!!u||u===""}function In(u){if(V(u)){const e={};for(let t=0;t<u.length;t++){const n=u[t],C=Fu(n)?Mo(n):In(n);if(C)for(const r in C)e[r]=C[r]}return e}else{if(Fu(u))return u;if(Au(u))return u}}const Oo=/;(?![^(]*\))/g,Ro=/:(.+)/;function Mo(u){const e={};return u.split(Oo).forEach(t=>{if(t){const n=t.split(Ro);n.length>1&&(e[n[0].trim()]=n[1].trim())}}),e}function m(u){let e="";if(Fu(u))e=u;else if(V(u))for(let t=0;t<u.length;t++){const n=m(u[t]);n&&(e+=n+" ")}else if(Au(u))for(const t in u)u[t]&&(e+=t+" ");return e.trim()}const eu=u=>Fu(u)?u:u==null?"":V(u)||Au(u)&&(u.toString===Yi||!Y(u.toString))?JSON.stringify(u,Ki,2):String(u),Ki=(u,e)=>e&&e.__v_isRef?Ki(u,e.value):Ct(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[n,C])=>(t[`${n} =>`]=C,t),{})}:Vi(e)?{[`Set(${e.size})`]:[...e.values()]}:Au(e)&&!V(e)&&!qi(e)?String(e):e,fu={},nt=[],qu=()=>{},Lo=()=>!1,No=/^on[^a-z]/,Tn=u=>No.test(u),zC=u=>u.startsWith("onUpdate:"),Tu=Object.assign,HC=(u,e)=>{const t=u.indexOf(e);t>-1&&u.splice(t,1)},Uo=Object.prototype.hasOwnProperty,Z=(u,e)=>Uo.call(u,e),V=Array.isArray,Ct=u=>jn(u)==="[object Map]",Vi=u=>jn(u)==="[object Set]",Y=u=>typeof u=="function",Fu=u=>typeof u=="string",JC=u=>typeof u=="symbol",Au=u=>u!==null&&typeof u=="object",Gi=u=>Au(u)&&Y(u.then)&&Y(u.catch),Yi=Object.prototype.toString,jn=u=>Yi.call(u),Wo=u=>jn(u).slice(8,-1),qi=u=>jn(u)==="[object Object]",$C=u=>Fu(u)&&u!=="NaN"&&u[0]!=="-"&&""+parseInt(u,10)===u,Dn=WC(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),On=u=>{const e=Object.create(null);return t=>e[t]||(e[t]=u(t))},zo=/-(\w)/g,ae=On(u=>u.replace(zo,(e,t)=>t?t.toUpperCase():"")),Ho=/\B([A-Z])/g,pt=On(u=>u.replace(Ho,"-$1").toLowerCase()),Rn=On(u=>u.charAt(0).toUpperCase()+u.slice(1)),Xn=On(u=>u?`on${Rn(u)}`:""),Rt=(u,e)=>!Object.is(u,e),Qn=(u,e)=>{for(let t=0;t<u.length;t++)u[t](e)},gn=(u,e,t)=>{Object.defineProperty(u,e,{configurable:!0,enumerable:!1,value:t})},Jo=u=>{const e=parseFloat(u);return isNaN(e)?u:e};let kr;const $o=()=>kr||(kr=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let te;class Xi{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&te&&(this.parent=te,this.index=(te.scopes||(te.scopes=[])).push(this)-1)}run(e){if(this.active){const t=te;try{return te=this,e()}finally{te=t}}}on(){te=this}off(){te=this.parent}stop(e){if(this.active){let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);if(this.parent&&!e){const C=this.parent.scopes.pop();C&&C!==this&&(this.parent.scopes[this.index]=C,C.index=this.index)}this.active=!1}}}function Qi(u){return new Xi(u)}function Ko(u,e=te){e&&e.active&&e.effects.push(u)}const KC=u=>{const e=new Set(u);return e.w=0,e.n=0,e},Zi=u=>(u.w&Se)>0,ua=u=>(u.n&Se)>0,Vo=({deps:u})=>{if(u.length)for(let e=0;e<u.length;e++)u[e].w|=Se},Go=u=>{const{deps:e}=u;if(e.length){let t=0;for(let n=0;n<e.length;n++){const C=e[n];Zi(C)&&!ua(C)?C.delete(u):e[t++]=C,C.w&=~Se,C.n&=~Se}e.length=t}},lC=new WeakMap;let Ft=0,Se=1;const cC=30;let $u;const We=Symbol(""),fC=Symbol("");class VC{constructor(e,t=null,n){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,Ko(this,n)}run(){if(!this.active)return this.fn();let e=$u,t=_e;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=$u,$u=this,_e=!0,Se=1<<++Ft,Ft<=cC?Vo(this):wr(this),this.fn()}finally{Ft<=cC&&Go(this),Se=1<<--Ft,$u=this.parent,_e=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){$u===this?this.deferStop=!0:this.active&&(wr(this),this.onStop&&this.onStop(),this.active=!1)}}function wr(u){const{deps:e}=u;if(e.length){for(let t=0;t<e.length;t++)e[t].delete(u);e.length=0}}let _e=!0;const ea=[];function At(){ea.push(_e),_e=!1}function mt(){const u=ea.pop();_e=u===void 0?!0:u}function Nu(u,e,t){if(_e&&$u){let n=lC.get(u);n||lC.set(u,n=new Map);let C=n.get(t);C||n.set(t,C=KC()),ta(C)}}function ta(u,e){let t=!1;Ft<=cC?ua(u)||(u.n|=Se,t=!Zi(u)):t=!u.has($u),t&&(u.add($u),$u.deps.push(u))}function Be(u,e,t,n,C,r){const i=lC.get(u);if(!i)return;let a=[];if(e==="clear")a=[...i.values()];else if(t==="length"&&V(u))i.forEach((o,l)=>{(l==="length"||l>=n)&&a.push(o)});else switch(t!==void 0&&a.push(i.get(t)),e){case"add":V(u)?$C(t)&&a.push(i.get("length")):(a.push(i.get(We)),Ct(u)&&a.push(i.get(fC)));break;case"delete":V(u)||(a.push(i.get(We)),Ct(u)&&a.push(i.get(fC)));break;case"set":Ct(u)&&a.push(i.get(We));break}if(a.length===1)a[0]&&BC(a[0]);else{const o=[];for(const l of a)l&&o.push(...l);BC(KC(o))}}function BC(u,e){const t=V(u)?u:[...u];for(const n of t)n.computed&&Sr(n);for(const n of t)n.computed||Sr(n)}function Sr(u,e){(u!==$u||u.allowRecurse)&&(u.scheduler?u.scheduler():u.run())}const Yo=WC("__proto__,__v_isRef,__isVue"),na=new Set(Object.getOwnPropertyNames(Symbol).filter(u=>u!=="arguments"&&u!=="caller").map(u=>Symbol[u]).filter(JC)),qo=GC(),Xo=GC(!1,!0),Qo=GC(!0),xr=Zo();function Zo(){const u={};return["includes","indexOf","lastIndexOf"].forEach(e=>{u[e]=function(...t){const n=tu(this);for(let r=0,i=this.length;r<i;r++)Nu(n,"get",r+"");const C=n[e](...t);return C===-1||C===!1?n[e](...t.map(tu)):C}}),["push","pop","shift","unshift","splice"].forEach(e=>{u[e]=function(...t){At();const n=tu(this)[e].apply(this,t);return mt(),n}}),u}function GC(u=!1,e=!1){return function(n,C,r){if(C==="__v_isReactive")return!u;if(C==="__v_isReadonly")return u;if(C==="__v_isShallow")return e;if(C==="__v_raw"&&r===(u?e?ds:oa:e?aa:ia).get(n))return n;const i=V(n);if(!u&&i&&Z(xr,C))return Reflect.get(xr,C,r);const a=Reflect.get(n,C,r);return(JC(C)?na.has(C):Yo(C))||(u||Nu(n,"get",C),e)?a:gu(a)?i&&$C(C)?a:a.value:Au(a)?u?sa(a):ht(a):a}}const us=Ca(),es=Ca(!0);function Ca(u=!1){return function(t,n,C,r){let i=t[n];if(st(i)&&gu(i)&&!gu(C))return!1;if(!u&&(!vn(C)&&!st(C)&&(i=tu(i),C=tu(C)),!V(t)&&gu(i)&&!gu(C)))return i.value=C,!0;const a=V(t)&&$C(n)?Number(n)<t.length:Z(t,n),o=Reflect.set(t,n,C,r);return t===tu(r)&&(a?Rt(C,i)&&Be(t,"set",n,C):Be(t,"add",n,C)),o}}function ts(u,e){const t=Z(u,e);u[e];const n=Reflect.deleteProperty(u,e);return n&&t&&Be(u,"delete",e,void 0),n}function ns(u,e){const t=Reflect.has(u,e);return(!JC(e)||!na.has(e))&&Nu(u,"has",e),t}function Cs(u){return Nu(u,"iterate",V(u)?"length":We),Reflect.ownKeys(u)}const ra={get:qo,set:us,deleteProperty:ts,has:ns,ownKeys:Cs},rs={get:Qo,set(u,e){return!0},deleteProperty(u,e){return!0}},is=Tu({},ra,{get:Xo,set:es}),YC=u=>u,Mn=u=>Reflect.getPrototypeOf(u);function Zt(u,e,t=!1,n=!1){u=u.__v_raw;const C=tu(u),r=tu(e);t||(e!==r&&Nu(C,"get",e),Nu(C,"get",r));const{has:i}=Mn(C),a=n?YC:t?QC:Mt;if(i.call(C,e))return a(u.get(e));if(i.call(C,r))return a(u.get(r));u!==C&&u.get(e)}function un(u,e=!1){const t=this.__v_raw,n=tu(t),C=tu(u);return e||(u!==C&&Nu(n,"has",u),Nu(n,"has",C)),u===C?t.has(u):t.has(u)||t.has(C)}function en(u,e=!1){return u=u.__v_raw,!e&&Nu(tu(u),"iterate",We),Reflect.get(u,"size",u)}function Pr(u){u=tu(u);const e=tu(this);return Mn(e).has.call(e,u)||(e.add(u),Be(e,"add",u,u)),this}function Ir(u,e){e=tu(e);const t=tu(this),{has:n,get:C}=Mn(t);let r=n.call(t,u);r||(u=tu(u),r=n.call(t,u));const i=C.call(t,u);return t.set(u,e),r?Rt(e,i)&&Be(t,"set",u,e):Be(t,"add",u,e),this}function Tr(u){const e=tu(this),{has:t,get:n}=Mn(e);let C=t.call(e,u);C||(u=tu(u),C=t.call(e,u)),n&&n.call(e,u);const r=e.delete(u);return C&&Be(e,"delete",u,void 0),r}function jr(){const u=tu(this),e=u.size!==0,t=u.clear();return e&&Be(u,"clear",void 0,void 0),t}function tn(u,e){return function(n,C){const r=this,i=r.__v_raw,a=tu(i),o=e?YC:u?QC:Mt;return!u&&Nu(a,"iterate",We),i.forEach((l,s)=>n.call(C,o(l),o(s),r))}}function nn(u,e,t){return function(...n){const C=this.__v_raw,r=tu(C),i=Ct(r),a=u==="entries"||u===Symbol.iterator&&i,o=u==="keys"&&i,l=C[u](...n),s=t?YC:e?QC:Mt;return!e&&Nu(r,"iterate",o?fC:We),{next(){const{value:f,done:D}=l.next();return D?{value:f,done:D}:{value:a?[s(f[0]),s(f[1])]:s(f),done:D}},[Symbol.iterator](){return this}}}}function ge(u){return function(...e){return u==="delete"?!1:this}}function as(){const u={get(r){return Zt(this,r)},get size(){return en(this)},has:un,add:Pr,set:Ir,delete:Tr,clear:jr,forEach:tn(!1,!1)},e={get(r){return Zt(this,r,!1,!0)},get size(){return en(this)},has:un,add:Pr,set:Ir,delete:Tr,clear:jr,forEach:tn(!1,!0)},t={get(r){return Zt(this,r,!0)},get size(){return en(this,!0)},has(r){return un.call(this,r,!0)},add:ge("add"),set:ge("set"),delete:ge("delete"),clear:ge("clear"),forEach:tn(!0,!1)},n={get(r){return Zt(this,r,!0,!0)},get size(){return en(this,!0)},has(r){return un.call(this,r,!0)},add:ge("add"),set:ge("set"),delete:ge("delete"),clear:ge("clear"),forEach:tn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{u[r]=nn(r,!1,!1),t[r]=nn(r,!0,!1),e[r]=nn(r,!1,!0),n[r]=nn(r,!0,!0)}),[u,t,e,n]}const[os,ss,ls,cs]=as();function qC(u,e){const t=e?u?cs:ls:u?ss:os;return(n,C,r)=>C==="__v_isReactive"?!u:C==="__v_isReadonly"?u:C==="__v_raw"?n:Reflect.get(Z(t,C)&&C in n?t:n,C,r)}const fs={get:qC(!1,!1)},Bs={get:qC(!1,!0)},Ds={get:qC(!0,!1)},ia=new WeakMap,aa=new WeakMap,oa=new WeakMap,ds=new WeakMap;function ps(u){switch(u){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function As(u){return u.__v_skip||!Object.isExtensible(u)?0:ps(Wo(u))}function ht(u){return st(u)?u:XC(u,!1,ra,fs,ia)}function ms(u){return XC(u,!1,is,Bs,aa)}function sa(u){return XC(u,!0,rs,Ds,oa)}function XC(u,e,t,n,C){if(!Au(u)||u.__v_raw&&!(e&&u.__v_isReactive))return u;const r=C.get(u);if(r)return r;const i=As(u);if(i===0)return u;const a=new Proxy(u,i===2?n:t);return C.set(u,a),a}function Fe(u){return st(u)?Fe(u.__v_raw):!!(u&&u.__v_isReactive)}function st(u){return!!(u&&u.__v_isReadonly)}function vn(u){return!!(u&&u.__v_isShallow)}function la(u){return Fe(u)||st(u)}function tu(u){const e=u&&u.__v_raw;return e?tu(e):u}function lt(u){return gn(u,"__v_skip",!0),u}const Mt=u=>Au(u)?ht(u):u,QC=u=>Au(u)?sa(u):u;function ca(u){_e&&$u&&(u=tu(u),ta(u.dep||(u.dep=KC())))}function fa(u,e){u=tu(u),u.dep&&BC(u.dep)}function gu(u){return!!(u&&u.__v_isRef===!0)}function Gt(u){return Ba(u,!1)}function hs(u){return Ba(u,!0)}function Ba(u,e){return gu(u)?u:new gs(u,e)}class gs{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:tu(e),this._value=t?e:Mt(e)}get value(){return ca(this),this._value}set value(e){const t=this.__v_isShallow||vn(e)||st(e);e=t?e:tu(e),Rt(e,this._rawValue)&&(this._rawValue=e,this._value=t?e:Mt(e),fa(this))}}function rt(u){return gu(u)?u.value:u}const vs={get:(u,e,t)=>rt(Reflect.get(u,e,t)),set:(u,e,t,n)=>{const C=u[e];return gu(C)&&!gu(t)?(C.value=t,!0):Reflect.set(u,e,t,n)}};function Da(u){return Fe(u)?u:new Proxy(u,vs)}function bs(u){const e=V(u)?new Array(u.length):{};for(const t in u)e[t]=ys(u,t);return e}class Es{constructor(e,t,n){this._object=e,this._key=t,this._defaultValue=n,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}}function ys(u,e,t){const n=u[e];return gu(n)?n:new Es(u,e,t)}var da;class _s{constructor(e,t,n,C){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this[da]=!1,this._dirty=!0,this.effect=new VC(e,()=>{this._dirty||(this._dirty=!0,fa(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!C,this.__v_isReadonly=n}get value(){const e=tu(this);return ca(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}da="__v_isReadonly";function Fs(u,e,t=!1){let n,C;const r=Y(u);return r?(n=u,C=qu):(n=u.get,C=u.set),new _s(n,C,r||!C,t)}function ke(u,e,t,n){let C;try{C=n?u(...n):u()}catch(r){Ln(r,e,t)}return C}function Xu(u,e,t,n){if(Y(u)){const r=ke(u,e,t,n);return r&&Gi(r)&&r.catch(i=>{Ln(i,e,t)}),r}const C=[];for(let r=0;r<u.length;r++)C.push(Xu(u[r],e,t,n));return C}function Ln(u,e,t,n=!0){const C=e?e.vnode:null;if(e){let r=e.parent;const i=e.proxy,a=t;for(;r;){const l=r.ec;if(l){for(let s=0;s<l.length;s++)if(l[s](u,i,a)===!1)return}r=r.parent}const o=e.appContext.config.errorHandler;if(o){ke(o,null,10,[u,i,a]);return}}ks(u,t,C,n)}function ks(u,e,t,n=!0){console.error(u)}let Lt=!1,DC=!1;const xu=[];let Ce=0;const it=[];let le=null,Re=0;const pa=Promise.resolve();let ZC=null;function ur(u){const e=ZC||pa;return u?e.then(this?u.bind(this):u):e}function ws(u){let e=Ce+1,t=xu.length;for(;e<t;){const n=e+t>>>1;Nt(xu[n])<u?e=n+1:t=n}return e}function er(u){(!xu.length||!xu.includes(u,Lt&&u.allowRecurse?Ce+1:Ce))&&(u.id==null?xu.push(u):xu.splice(ws(u.id),0,u),Aa())}function Aa(){!Lt&&!DC&&(DC=!0,ZC=pa.then(ha))}function Ss(u){const e=xu.indexOf(u);e>Ce&&xu.splice(e,1)}function xs(u){V(u)?it.push(...u):(!le||!le.includes(u,u.allowRecurse?Re+1:Re))&&it.push(u),Aa()}function Or(u,e=Lt?Ce+1:0){for(;e<xu.length;e++){const t=xu[e];t&&t.pre&&(xu.splice(e,1),e--,t())}}function ma(u){if(it.length){const e=[...new Set(it)];if(it.length=0,le){le.push(...e);return}for(le=e,le.sort((t,n)=>Nt(t)-Nt(n)),Re=0;Re<le.length;Re++)le[Re]();le=null,Re=0}}const Nt=u=>u.id==null?1/0:u.id,Ps=(u,e)=>{const t=Nt(u)-Nt(e);if(t===0){if(u.pre&&!e.pre)return-1;if(e.pre&&!u.pre)return 1}return t};function ha(u){DC=!1,Lt=!0,xu.sort(Ps);const e=qu;try{for(Ce=0;Ce<xu.length;Ce++){const t=xu[Ce];t&&t.active!==!1&&ke(t,null,14)}}finally{Ce=0,xu.length=0,ma(),Lt=!1,ZC=null,(xu.length||it.length)&&ha()}}function Is(u,e,...t){if(u.isUnmounted)return;const n=u.vnode.props||fu;let C=t;const r=e.startsWith("update:"),i=r&&e.slice(7);if(i&&i in n){const s=`${i==="modelValue"?"model":i}Modifiers`,{number:f,trim:D}=n[s]||fu;D&&(C=t.map(p=>p.trim())),f&&(C=t.map(Jo))}let a,o=n[a=Xn(e)]||n[a=Xn(ae(e))];!o&&r&&(o=n[a=Xn(pt(e))]),o&&Xu(o,u,6,C);const l=n[a+"Once"];if(l){if(!u.emitted)u.emitted={};else if(u.emitted[a])return;u.emitted[a]=!0,Xu(l,u,6,C)}}function ga(u,e,t=!1){const n=e.emitsCache,C=n.get(u);if(C!==void 0)return C;const r=u.emits;let i={},a=!1;if(!Y(u)){const o=l=>{const s=ga(l,e,!0);s&&(a=!0,Tu(i,s))};!t&&e.mixins.length&&e.mixins.forEach(o),u.extends&&o(u.extends),u.mixins&&u.mixins.forEach(o)}return!r&&!a?(Au(u)&&n.set(u,null),null):(V(r)?r.forEach(o=>i[o]=null):Tu(i,r),Au(u)&&n.set(u,i),i)}function Nn(u,e){return!u||!Tn(e)?!1:(e=e.slice(2).replace(/Once$/,""),Z(u,e[0].toLowerCase()+e.slice(1))||Z(u,pt(e))||Z(u,e))}let Vu=null,Un=null;function bn(u){const e=Vu;return Vu=u,Un=u&&u.type.__scopeId||null,e}function Ts(u){Un=u}function js(){Un=null}function Ju(u,e=Vu,t){if(!e||u._n)return u;const n=(...C)=>{n._d&&$r(-1);const r=bn(e),i=u(...C);return bn(r),n._d&&$r(1),i};return n._n=!0,n._c=!0,n._d=!0,n}function Zn(u){const{type:e,vnode:t,proxy:n,withProxy:C,props:r,propsOptions:[i],slots:a,attrs:o,emit:l,render:s,renderCache:f,data:D,setupState:p,ctx:_,inheritAttrs:T}=u;let x,A;const E=bn(u);try{if(t.shapeFlag&4){const z=C||n;x=ne(s.call(z,z,f,r,p,D,_)),A=o}else{const z=e;x=ne(z.length>1?z(r,{attrs:o,slots:a,emit:l}):z(r,null)),A=e.props?o:Os(o)}}catch(z){wt.length=0,Ln(z,u,1),x=N($e)}let j=x;if(A&&T!==!1){const z=Object.keys(A),{shapeFlag:H}=j;z.length&&H&7&&(i&&z.some(zC)&&(A=Rs(A,i)),j=ct(j,A))}return t.dirs&&(j=ct(j),j.dirs=j.dirs?j.dirs.concat(t.dirs):t.dirs),t.transition&&(j.transition=t.transition),x=j,bn(E),x}const Os=u=>{let e;for(const t in u)(t==="class"||t==="style"||Tn(t))&&((e||(e={}))[t]=u[t]);return e},Rs=(u,e)=>{const t={};for(const n in u)(!zC(n)||!(n.slice(9)in e))&&(t[n]=u[n]);return t};function Ms(u,e,t){const{props:n,children:C,component:r}=u,{props:i,children:a,patchFlag:o}=e,l=r.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&o>=0){if(o&1024)return!0;if(o&16)return n?Rr(n,i,l):!!i;if(o&8){const s=e.dynamicProps;for(let f=0;f<s.length;f++){const D=s[f];if(i[D]!==n[D]&&!Nn(l,D))return!0}}}else return(C||a)&&(!a||!a.$stable)?!0:n===i?!1:n?i?Rr(n,i,l):!0:!!i;return!1}function Rr(u,e,t){const n=Object.keys(e);if(n.length!==Object.keys(u).length)return!0;for(let C=0;C<n.length;C++){const r=n[C];if(e[r]!==u[r]&&!Nn(t,r))return!0}return!1}function Ls({vnode:u,parent:e},t){for(;e&&e.subTree===u;)(u=e.vnode).el=t,e=e.parent}const Ns=u=>u.__isSuspense;function Us(u,e){e&&e.pendingBranch?V(u)?e.effects.push(...u):e.effects.push(u):xs(u)}function dn(u,e){if(_u){let t=_u.provides;const n=_u.parent&&_u.parent.provides;n===t&&(t=_u.provides=Object.create(n)),t[u]=e}}function fe(u,e,t=!1){const n=_u||Vu;if(n){const C=n.parent==null?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides;if(C&&u in C)return C[u];if(arguments.length>1)return t&&Y(e)?e.call(n.proxy):e}}const Mr={};function ze(u,e,t){return va(u,e,t)}function va(u,e,{immediate:t,deep:n,flush:C,onTrack:r,onTrigger:i}=fu){const a=_u;let o,l=!1,s=!1;if(gu(u)?(o=()=>u.value,l=vn(u)):Fe(u)?(o=()=>u,n=!0):V(u)?(s=!0,l=u.some(A=>Fe(A)||vn(A)),o=()=>u.map(A=>{if(gu(A))return A.value;if(Fe(A))return ut(A);if(Y(A))return ke(A,a,2)})):Y(u)?e?o=()=>ke(u,a,2):o=()=>{if(!(a&&a.isUnmounted))return f&&f(),Xu(u,a,3,[D])}:o=qu,e&&n){const A=o;o=()=>ut(A())}let f,D=A=>{f=x.onStop=()=>{ke(A,a,4)}};if(Wt)return D=qu,e?t&&Xu(e,a,3,[o(),s?[]:void 0,D]):o(),qu;let p=s?[]:Mr;const _=()=>{if(!!x.active)if(e){const A=x.run();(n||l||(s?A.some((E,j)=>Rt(E,p[j])):Rt(A,p)))&&(f&&f(),Xu(e,a,3,[A,p===Mr?void 0:p,D]),p=A)}else x.run()};_.allowRecurse=!!e;let T;C==="sync"?T=_:C==="post"?T=()=>Ou(_,a&&a.suspense):(_.pre=!0,a&&(_.id=a.uid),T=()=>er(_));const x=new VC(o,T);return e?t?_():p=x.run():C==="post"?Ou(x.run.bind(x),a&&a.suspense):x.run(),()=>{x.stop(),a&&a.scope&&HC(a.scope.effects,x)}}function Ws(u,e,t){const n=this.proxy,C=Fu(u)?u.includes(".")?ba(n,u):()=>n[u]:u.bind(n,n);let r;Y(e)?r=e:(r=e.handler,t=e);const i=_u;ft(this);const a=va(C,r.bind(n),t);return i?ft(i):Je(),a}function ba(u,e){const t=e.split(".");return()=>{let n=u;for(let C=0;C<t.length&&n;C++)n=n[t[C]];return n}}function ut(u,e){if(!Au(u)||u.__v_skip||(e=e||new Set,e.has(u)))return u;if(e.add(u),gu(u))ut(u.value,e);else if(V(u))for(let t=0;t<u.length;t++)ut(u[t],e);else if(Vi(u)||Ct(u))u.forEach(t=>{ut(t,e)});else if(qi(u))for(const t in u)ut(u[t],e);return u}function Yt(u){return Y(u)?{setup:u,name:u.name}:u}const pn=u=>!!u.type.__asyncLoader,Ea=u=>u.type.__isKeepAlive;function zs(u,e){ya(u,"a",e)}function Hs(u,e){ya(u,"da",e)}function ya(u,e,t=_u){const n=u.__wdc||(u.__wdc=()=>{let C=t;for(;C;){if(C.isDeactivated)return;C=C.parent}return u()});if(Wn(e,n,t),t){let C=t.parent;for(;C&&C.parent;)Ea(C.parent.vnode)&&Js(n,e,t,C),C=C.parent}}function Js(u,e,t,n){const C=Wn(e,u,n,!0);tr(()=>{HC(n[e],C)},t)}function Wn(u,e,t=_u,n=!1){if(t){const C=t[u]||(t[u]=[]),r=e.__weh||(e.__weh=(...i)=>{if(t.isUnmounted)return;At(),ft(t);const a=Xu(e,t,u,i);return Je(),mt(),a});return n?C.unshift(r):C.push(r),r}}const Ae=u=>(e,t=_u)=>(!Wt||u==="sp")&&Wn(u,e,t),$s=Ae("bm"),Ks=Ae("m"),Vs=Ae("bu"),Gs=Ae("u"),Ys=Ae("bum"),tr=Ae("um"),qs=Ae("sp"),Xs=Ae("rtg"),Qs=Ae("rtc");function Zs(u,e=_u){Wn("ec",u,e)}function Te(u,e,t,n){const C=u.dirs,r=e&&e.dirs;for(let i=0;i<C.length;i++){const a=C[i];r&&(a.oldValue=r[i].value);let o=a.dir[n];o&&(At(),Xu(o,t,8,[u.el,a,u,e]),mt())}}const _a="components";function Eu(u,e){return el(_a,u,!0,e)||u}const ul=Symbol();function el(u,e,t=!0,n=!1){const C=Vu||_u;if(C){const r=C.type;if(u===_a){const a=xl(r,!1);if(a&&(a===e||a===ae(e)||a===Rn(ae(e))))return r}const i=Lr(C[u]||r[u],e)||Lr(C.appContext[u],e);return!i&&n?r:i}}function Lr(u,e){return u&&(u[e]||u[ae(e)]||u[Rn(ae(e))])}function we(u,e,t,n){let C;const r=t&&t[n];if(V(u)||Fu(u)){C=new Array(u.length);for(let i=0,a=u.length;i<a;i++)C[i]=e(u[i],i,void 0,r&&r[i])}else if(typeof u=="number"){C=new Array(u);for(let i=0;i<u;i++)C[i]=e(i+1,i,void 0,r&&r[i])}else if(Au(u))if(u[Symbol.iterator])C=Array.from(u,(i,a)=>e(i,a,void 0,r&&r[a]));else{const i=Object.keys(u);C=new Array(i.length);for(let a=0,o=i.length;a<o;a++){const l=i[a];C[a]=e(u[l],l,a,r&&r[a])}}else C=[];return t&&(t[n]=C),C}const dC=u=>u?Ma(u)?ar(u)||u.proxy:dC(u.parent):null,En=Tu(Object.create(null),{$:u=>u,$el:u=>u.vnode.el,$data:u=>u.data,$props:u=>u.props,$attrs:u=>u.attrs,$slots:u=>u.slots,$refs:u=>u.refs,$parent:u=>dC(u.parent),$root:u=>dC(u.root),$emit:u=>u.emit,$options:u=>nr(u),$forceUpdate:u=>u.f||(u.f=()=>er(u.update)),$nextTick:u=>u.n||(u.n=ur.bind(u.proxy)),$watch:u=>Ws.bind(u)}),tl={get({_:u},e){const{ctx:t,setupState:n,data:C,props:r,accessCache:i,type:a,appContext:o}=u;let l;if(e[0]!=="$"){const p=i[e];if(p!==void 0)switch(p){case 1:return n[e];case 2:return C[e];case 4:return t[e];case 3:return r[e]}else{if(n!==fu&&Z(n,e))return i[e]=1,n[e];if(C!==fu&&Z(C,e))return i[e]=2,C[e];if((l=u.propsOptions[0])&&Z(l,e))return i[e]=3,r[e];if(t!==fu&&Z(t,e))return i[e]=4,t[e];pC&&(i[e]=0)}}const s=En[e];let f,D;if(s)return e==="$attrs"&&Nu(u,"get",e),s(u);if((f=a.__cssModules)&&(f=f[e]))return f;if(t!==fu&&Z(t,e))return i[e]=4,t[e];if(D=o.config.globalProperties,Z(D,e))return D[e]},set({_:u},e,t){const{data:n,setupState:C,ctx:r}=u;return C!==fu&&Z(C,e)?(C[e]=t,!0):n!==fu&&Z(n,e)?(n[e]=t,!0):Z(u.props,e)||e[0]==="$"&&e.slice(1)in u?!1:(r[e]=t,!0)},has({_:{data:u,setupState:e,accessCache:t,ctx:n,appContext:C,propsOptions:r}},i){let a;return!!t[i]||u!==fu&&Z(u,i)||e!==fu&&Z(e,i)||(a=r[0])&&Z(a,i)||Z(n,i)||Z(En,i)||Z(C.config.globalProperties,i)},defineProperty(u,e,t){return t.get!=null?u._.accessCache[e]=0:Z(t,"value")&&this.set(u,e,t.value,null),Reflect.defineProperty(u,e,t)}};let pC=!0;function nl(u){const e=nr(u),t=u.proxy,n=u.ctx;pC=!1,e.beforeCreate&&Nr(e.beforeCreate,u,"bc");const{data:C,computed:r,methods:i,watch:a,provide:o,inject:l,created:s,beforeMount:f,mounted:D,beforeUpdate:p,updated:_,activated:T,deactivated:x,beforeDestroy:A,beforeUnmount:E,destroyed:j,unmounted:z,render:H,renderTracked:nu,renderTriggered:K,errorCaptured:Q,serverPrefetch:iu,expose:Su,inheritAttrs:Pu,components:Ru,directives:he,filters:Wu}=e;if(l&&Cl(l,n,null,u.appContext.config.unwrapInjectedRef),i)for(const lu in i){const au=i[lu];Y(au)&&(n[lu]=au.bind(t))}if(C){const lu=C.call(t,t);Au(lu)&&(u.data=ht(lu))}if(pC=!0,r)for(const lu in r){const au=r[lu],Mu=Y(au)?au.bind(t,t):Y(au.get)?au.get.bind(t,t):qu,Ye=!Y(au)&&Y(au.set)?au.set.bind(t):qu,oe=pu({get:Mu,set:Ye});Object.defineProperty(n,lu,{enumerable:!0,configurable:!0,get:()=>oe.value,set:Zu=>oe.value=Zu})}if(a)for(const lu in a)Fa(a[lu],n,t,lu);if(o){const lu=Y(o)?o.call(t):o;Reflect.ownKeys(lu).forEach(au=>{dn(au,lu[au])})}s&&Nr(s,u,"c");function bu(lu,au){V(au)?au.forEach(Mu=>lu(Mu.bind(t))):au&&lu(au.bind(t))}if(bu($s,f),bu(Ks,D),bu(Vs,p),bu(Gs,_),bu(zs,T),bu(Hs,x),bu(Zs,Q),bu(Qs,nu),bu(Xs,K),bu(Ys,E),bu(tr,z),bu(qs,iu),V(Su))if(Su.length){const lu=u.exposed||(u.exposed={});Su.forEach(au=>{Object.defineProperty(lu,au,{get:()=>t[au],set:Mu=>t[au]=Mu})})}else u.exposed||(u.exposed={});H&&u.render===qu&&(u.render=H),Pu!=null&&(u.inheritAttrs=Pu),Ru&&(u.components=Ru),he&&(u.directives=he)}function Cl(u,e,t=qu,n=!1){V(u)&&(u=AC(u));for(const C in u){const r=u[C];let i;Au(r)?"default"in r?i=fe(r.from||C,r.default,!0):i=fe(r.from||C):i=fe(r),gu(i)&&n?Object.defineProperty(e,C,{enumerable:!0,configurable:!0,get:()=>i.value,set:a=>i.value=a}):e[C]=i}}function Nr(u,e,t){Xu(V(u)?u.map(n=>n.bind(e.proxy)):u.bind(e.proxy),e,t)}function Fa(u,e,t,n){const C=n.includes(".")?ba(t,n):()=>t[n];if(Fu(u)){const r=e[u];Y(r)&&ze(C,r)}else if(Y(u))ze(C,u.bind(t));else if(Au(u))if(V(u))u.forEach(r=>Fa(r,e,t,n));else{const r=Y(u.handler)?u.handler.bind(t):e[u.handler];Y(r)&&ze(C,r,u)}}function nr(u){const e=u.type,{mixins:t,extends:n}=e,{mixins:C,optionsCache:r,config:{optionMergeStrategies:i}}=u.appContext,a=r.get(e);let o;return a?o=a:!C.length&&!t&&!n?o=e:(o={},C.length&&C.forEach(l=>yn(o,l,i,!0)),yn(o,e,i)),Au(e)&&r.set(e,o),o}function yn(u,e,t,n=!1){const{mixins:C,extends:r}=e;r&&yn(u,r,t,!0),C&&C.forEach(i=>yn(u,i,t,!0));for(const i in e)if(!(n&&i==="expose")){const a=rl[i]||t&&t[i];u[i]=a?a(u[i],e[i]):e[i]}return u}const rl={data:Ur,props:Oe,emits:Oe,methods:Oe,computed:Oe,beforeCreate:Iu,created:Iu,beforeMount:Iu,mounted:Iu,beforeUpdate:Iu,updated:Iu,beforeDestroy:Iu,beforeUnmount:Iu,destroyed:Iu,unmounted:Iu,activated:Iu,deactivated:Iu,errorCaptured:Iu,serverPrefetch:Iu,components:Oe,directives:Oe,watch:al,provide:Ur,inject:il};function Ur(u,e){return e?u?function(){return Tu(Y(u)?u.call(this,this):u,Y(e)?e.call(this,this):e)}:e:u}function il(u,e){return Oe(AC(u),AC(e))}function AC(u){if(V(u)){const e={};for(let t=0;t<u.length;t++)e[u[t]]=u[t];return e}return u}function Iu(u,e){return u?[...new Set([].concat(u,e))]:e}function Oe(u,e){return u?Tu(Tu(Object.create(null),u),e):e}function al(u,e){if(!u)return e;if(!e)return u;const t=Tu(Object.create(null),u);for(const n in e)t[n]=Iu(u[n],e[n]);return t}function ol(u,e,t,n=!1){const C={},r={};gn(r,zn,1),u.propsDefaults=Object.create(null),ka(u,e,C,r);for(const i in u.propsOptions[0])i in C||(C[i]=void 0);t?u.props=n?C:ms(C):u.type.props?u.props=C:u.props=r,u.attrs=r}function sl(u,e,t,n){const{props:C,attrs:r,vnode:{patchFlag:i}}=u,a=tu(C),[o]=u.propsOptions;let l=!1;if((n||i>0)&&!(i&16)){if(i&8){const s=u.vnode.dynamicProps;for(let f=0;f<s.length;f++){let D=s[f];if(Nn(u.emitsOptions,D))continue;const p=e[D];if(o)if(Z(r,D))p!==r[D]&&(r[D]=p,l=!0);else{const _=ae(D);C[_]=mC(o,a,_,p,u,!1)}else p!==r[D]&&(r[D]=p,l=!0)}}}else{ka(u,e,C,r)&&(l=!0);let s;for(const f in a)(!e||!Z(e,f)&&((s=pt(f))===f||!Z(e,s)))&&(o?t&&(t[f]!==void 0||t[s]!==void 0)&&(C[f]=mC(o,a,f,void 0,u,!0)):delete C[f]);if(r!==a)for(const f in r)(!e||!Z(e,f)&&!0)&&(delete r[f],l=!0)}l&&Be(u,"set","$attrs")}function ka(u,e,t,n){const[C,r]=u.propsOptions;let i=!1,a;if(e)for(let o in e){if(Dn(o))continue;const l=e[o];let s;C&&Z(C,s=ae(o))?!r||!r.includes(s)?t[s]=l:(a||(a={}))[s]=l:Nn(u.emitsOptions,o)||(!(o in n)||l!==n[o])&&(n[o]=l,i=!0)}if(r){const o=tu(t),l=a||fu;for(let s=0;s<r.length;s++){const f=r[s];t[f]=mC(C,o,f,l[f],u,!Z(l,f))}}return i}function mC(u,e,t,n,C,r){const i=u[t];if(i!=null){const a=Z(i,"default");if(a&&n===void 0){const o=i.default;if(i.type!==Function&&Y(o)){const{propsDefaults:l}=C;t in l?n=l[t]:(ft(C),n=l[t]=o.call(null,e),Je())}else n=o}i[0]&&(r&&!a?n=!1:i[1]&&(n===""||n===pt(t))&&(n=!0))}return n}function wa(u,e,t=!1){const n=e.propsCache,C=n.get(u);if(C)return C;const r=u.props,i={},a=[];let o=!1;if(!Y(u)){const s=f=>{o=!0;const[D,p]=wa(f,e,!0);Tu(i,D),p&&a.push(...p)};!t&&e.mixins.length&&e.mixins.forEach(s),u.extends&&s(u.extends),u.mixins&&u.mixins.forEach(s)}if(!r&&!o)return Au(u)&&n.set(u,nt),nt;if(V(r))for(let s=0;s<r.length;s++){const f=ae(r[s]);Wr(f)&&(i[f]=fu)}else if(r)for(const s in r){const f=ae(s);if(Wr(f)){const D=r[s],p=i[f]=V(D)||Y(D)?{type:D}:D;if(p){const _=Jr(Boolean,p.type),T=Jr(String,p.type);p[0]=_>-1,p[1]=T<0||_<T,(_>-1||Z(p,"default"))&&a.push(f)}}}const l=[i,a];return Au(u)&&n.set(u,l),l}function Wr(u){return u[0]!=="$"}function zr(u){const e=u&&u.toString().match(/^\s*function (\w+)/);return e?e[1]:u===null?"null":""}function Hr(u,e){return zr(u)===zr(e)}function Jr(u,e){return V(e)?e.findIndex(t=>Hr(t,u)):Y(e)&&Hr(e,u)?0:-1}const Sa=u=>u[0]==="_"||u==="$stable",Cr=u=>V(u)?u.map(ne):[ne(u)],ll=(u,e,t)=>{if(e._n)return e;const n=Ju((...C)=>Cr(e(...C)),t);return n._c=!1,n},xa=(u,e,t)=>{const n=u._ctx;for(const C in u){if(Sa(C))continue;const r=u[C];if(Y(r))e[C]=ll(C,r,n);else if(r!=null){const i=Cr(r);e[C]=()=>i}}},Pa=(u,e)=>{const t=Cr(e);u.slots.default=()=>t},cl=(u,e)=>{if(u.vnode.shapeFlag&32){const t=e._;t?(u.slots=tu(e),gn(e,"_",t)):xa(e,u.slots={})}else u.slots={},e&&Pa(u,e);gn(u.slots,zn,1)},fl=(u,e,t)=>{const{vnode:n,slots:C}=u;let r=!0,i=fu;if(n.shapeFlag&32){const a=e._;a?t&&a===1?r=!1:(Tu(C,e),!t&&a===1&&delete C._):(r=!e.$stable,xa(e,C)),i=e}else e&&(Pa(u,e),i={default:1});if(r)for(const a in C)!Sa(a)&&!(a in i)&&delete C[a]};function Ia(){return{app:null,config:{isNativeTag:Lo,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Bl=0;function Dl(u,e){return function(n,C=null){Y(n)||(n=Object.assign({},n)),C!=null&&!Au(C)&&(C=null);const r=Ia(),i=new Set;let a=!1;const o=r.app={_uid:Bl++,_component:n,_props:C,_container:null,_context:r,_instance:null,version:Il,get config(){return r.config},set config(l){},use(l,...s){return i.has(l)||(l&&Y(l.install)?(i.add(l),l.install(o,...s)):Y(l)&&(i.add(l),l(o,...s))),o},mixin(l){return r.mixins.includes(l)||r.mixins.push(l),o},component(l,s){return s?(r.components[l]=s,o):r.components[l]},directive(l,s){return s?(r.directives[l]=s,o):r.directives[l]},mount(l,s,f){if(!a){const D=N(n,C);return D.appContext=r,s&&e?e(D,l):u(D,l,f),a=!0,o._container=l,l.__vue_app__=o,ar(D.component)||D.component.proxy}},unmount(){a&&(u(null,o._container),delete o._container.__vue_app__)},provide(l,s){return r.provides[l]=s,o}};return o}}function hC(u,e,t,n,C=!1){if(V(u)){u.forEach((D,p)=>hC(D,e&&(V(e)?e[p]:e),t,n,C));return}if(pn(n)&&!C)return;const r=n.shapeFlag&4?ar(n.component)||n.component.proxy:n.el,i=C?null:r,{i:a,r:o}=u,l=e&&e.r,s=a.refs===fu?a.refs={}:a.refs,f=a.setupState;if(l!=null&&l!==o&&(Fu(l)?(s[l]=null,Z(f,l)&&(f[l]=null)):gu(l)&&(l.value=null)),Y(o))ke(o,a,12,[i,s]);else{const D=Fu(o),p=gu(o);if(D||p){const _=()=>{if(u.f){const T=D?s[o]:o.value;C?V(T)&&HC(T,r):V(T)?T.includes(r)||T.push(r):D?(s[o]=[r],Z(f,o)&&(f[o]=s[o])):(o.value=[r],u.k&&(s[u.k]=o.value))}else D?(s[o]=i,Z(f,o)&&(f[o]=i)):p&&(o.value=i,u.k&&(s[u.k]=i))};i?(_.id=-1,Ou(_,t)):_()}}}const Ou=Us;function dl(u){return pl(u)}function pl(u,e){const t=$o();t.__VUE__=!0;const{insert:n,remove:C,patchProp:r,createElement:i,createText:a,createComment:o,setText:l,setElementText:s,parentNode:f,nextSibling:D,setScopeId:p=qu,cloneNode:_,insertStaticContent:T}=u,x=(c,B,d,b=null,v=null,k=null,P=!1,F=null,w=!!B.dynamicChildren)=>{if(c===B)return;c&&!yt(c,B)&&(b=L(c),zu(c,v,k,!0),c=null),B.patchFlag===-2&&(w=!1,B.dynamicChildren=null);const{type:y,ref:U,shapeFlag:O}=B;switch(y){case rr:A(c,B,d,b);break;case $e:E(c,B,d,b);break;case uC:c==null&&j(B,d,b,P);break;case hu:he(c,B,d,b,v,k,P,F,w);break;default:O&1?nu(c,B,d,b,v,k,P,F,w):O&6?Wu(c,B,d,b,v,k,P,F,w):(O&64||O&128)&&y.process(c,B,d,b,v,k,P,F,w,cu)}U!=null&&v&&hC(U,c&&c.ref,k,B||c,!B)},A=(c,B,d,b)=>{if(c==null)n(B.el=a(B.children),d,b);else{const v=B.el=c.el;B.children!==c.children&&l(v,B.children)}},E=(c,B,d,b)=>{c==null?n(B.el=o(B.children||""),d,b):B.el=c.el},j=(c,B,d,b)=>{[c.el,c.anchor]=T(c.children,B,d,b,c.el,c.anchor)},z=({el:c,anchor:B},d,b)=>{let v;for(;c&&c!==B;)v=D(c),n(c,d,b),c=v;n(B,d,b)},H=({el:c,anchor:B})=>{let d;for(;c&&c!==B;)d=D(c),C(c),c=d;C(B)},nu=(c,B,d,b,v,k,P,F,w)=>{P=P||B.type==="svg",c==null?K(B,d,b,v,k,P,F,w):Su(c,B,v,k,P,F,w)},K=(c,B,d,b,v,k,P,F)=>{let w,y;const{type:U,props:O,shapeFlag:W,transition:$,patchFlag:uu,dirs:ou}=c;if(c.el&&_!==void 0&&uu===-1)w=c.el=_(c.el);else{if(w=c.el=i(c.type,k,O&&O.is,O),W&8?s(w,c.children):W&16&&iu(c.children,w,null,b,v,k&&U!=="foreignObject",P,F),ou&&Te(c,null,b,"created"),O){for(const Bu in O)Bu!=="value"&&!Dn(Bu)&&r(w,Bu,null,O[Bu],k,c.children,b,v,S);"value"in O&&r(w,"value",null,O.value),(y=O.onVnodeBeforeMount)&&ee(y,b,c)}Q(w,c,c.scopeId,P,b)}ou&&Te(c,null,b,"beforeMount");const su=(!v||v&&!v.pendingBranch)&&$&&!$.persisted;su&&$.beforeEnter(w),n(w,B,d),((y=O&&O.onVnodeMounted)||su||ou)&&Ou(()=>{y&&ee(y,b,c),su&&$.enter(w),ou&&Te(c,null,b,"mounted")},v)},Q=(c,B,d,b,v)=>{if(d&&p(c,d),b)for(let k=0;k<b.length;k++)p(c,b[k]);if(v){let k=v.subTree;if(B===k){const P=v.vnode;Q(c,P,P.scopeId,P.slotScopeIds,v.parent)}}},iu=(c,B,d,b,v,k,P,F,w=0)=>{for(let y=w;y<c.length;y++){const U=c[y]=F?Ee(c[y]):ne(c[y]);x(null,U,B,d,b,v,k,P,F)}},Su=(c,B,d,b,v,k,P)=>{const F=B.el=c.el;let{patchFlag:w,dynamicChildren:y,dirs:U}=B;w|=c.patchFlag&16;const O=c.props||fu,W=B.props||fu;let $;d&&je(d,!1),($=W.onVnodeBeforeUpdate)&&ee($,d,B,c),U&&Te(B,c,d,"beforeUpdate"),d&&je(d,!0);const uu=v&&B.type!=="foreignObject";if(y?Pu(c.dynamicChildren,y,F,d,b,uu,k):P||Mu(c,B,F,null,d,b,uu,k,!1),w>0){if(w&16)Ru(F,B,O,W,d,b,v);else if(w&2&&O.class!==W.class&&r(F,"class",null,W.class,v),w&4&&r(F,"style",O.style,W.style,v),w&8){const ou=B.dynamicProps;for(let su=0;su<ou.length;su++){const Bu=ou[su],Hu=O[Bu],qe=W[Bu];(qe!==Hu||Bu==="value")&&r(F,Bu,Hu,qe,v,c.children,d,b,S)}}w&1&&c.children!==B.children&&s(F,B.children)}else!P&&y==null&&Ru(F,B,O,W,d,b,v);(($=W.onVnodeUpdated)||U)&&Ou(()=>{$&&ee($,d,B,c),U&&Te(B,c,d,"updated")},b)},Pu=(c,B,d,b,v,k,P)=>{for(let F=0;F<B.length;F++){const w=c[F],y=B[F],U=w.el&&(w.type===hu||!yt(w,y)||w.shapeFlag&70)?f(w.el):d;x(w,y,U,null,b,v,k,P,!0)}},Ru=(c,B,d,b,v,k,P)=>{if(d!==b){for(const F in b){if(Dn(F))continue;const w=b[F],y=d[F];w!==y&&F!=="value"&&r(c,F,y,w,P,B.children,v,k,S)}if(d!==fu)for(const F in d)!Dn(F)&&!(F in b)&&r(c,F,d[F],null,P,B.children,v,k,S);"value"in b&&r(c,"value",d.value,b.value)}},he=(c,B,d,b,v,k,P,F,w)=>{const y=B.el=c?c.el:a(""),U=B.anchor=c?c.anchor:a("");let{patchFlag:O,dynamicChildren:W,slotScopeIds:$}=B;$&&(F=F?F.concat($):$),c==null?(n(y,d,b),n(U,d,b),iu(B.children,d,U,v,k,P,F,w)):O>0&&O&64&&W&&c.dynamicChildren?(Pu(c.dynamicChildren,W,d,v,k,P,F),(B.key!=null||v&&B===v.subTree)&&Ta(c,B,!0)):Mu(c,B,d,U,v,k,P,F,w)},Wu=(c,B,d,b,v,k,P,F,w)=>{B.slotScopeIds=F,c==null?B.shapeFlag&512?v.ctx.activate(B,d,b,P,w):vu(B,d,b,v,k,P,w):bu(c,B,w)},vu=(c,B,d,b,v,k,P)=>{const F=c.component=_l(c,b,v);if(Ea(c)&&(F.ctx.renderer=cu),Fl(F),F.asyncDep){if(v&&v.registerDep(F,lu),!c.el){const w=F.subTree=N($e);E(null,w,B,d)}return}lu(F,c,B,d,v,k,P)},bu=(c,B,d)=>{const b=B.component=c.component;if(Ms(c,B,d))if(b.asyncDep&&!b.asyncResolved){au(b,B,d);return}else b.next=B,Ss(b.update),b.update();else B.el=c.el,b.vnode=B},lu=(c,B,d,b,v,k,P)=>{const F=()=>{if(c.isMounted){let{next:U,bu:O,u:W,parent:$,vnode:uu}=c,ou=U,su;je(c,!1),U?(U.el=uu.el,au(c,U,P)):U=uu,O&&Qn(O),(su=U.props&&U.props.onVnodeBeforeUpdate)&&ee(su,$,U,uu),je(c,!0);const Bu=Zn(c),Hu=c.subTree;c.subTree=Bu,x(Hu,Bu,f(Hu.el),L(Hu),c,v,k),U.el=Bu.el,ou===null&&Ls(c,Bu.el),W&&Ou(W,v),(su=U.props&&U.props.onVnodeUpdated)&&Ou(()=>ee(su,$,U,uu),v)}else{let U;const{el:O,props:W}=B,{bm:$,m:uu,parent:ou}=c,su=pn(B);if(je(c,!1),$&&Qn($),!su&&(U=W&&W.onVnodeBeforeMount)&&ee(U,ou,B),je(c,!0),O&&G){const Bu=()=>{c.subTree=Zn(c),G(O,c.subTree,c,v,null)};su?B.type.__asyncLoader().then(()=>!c.isUnmounted&&Bu()):Bu()}else{const Bu=c.subTree=Zn(c);x(null,Bu,d,b,c,v,k),B.el=Bu.el}if(uu&&Ou(uu,v),!su&&(U=W&&W.onVnodeMounted)){const Bu=B;Ou(()=>ee(U,ou,Bu),v)}(B.shapeFlag&256||ou&&pn(ou.vnode)&&ou.vnode.shapeFlag&256)&&c.a&&Ou(c.a,v),c.isMounted=!0,B=d=b=null}},w=c.effect=new VC(F,()=>er(y),c.scope),y=c.update=()=>w.run();y.id=c.uid,je(c,!0),y()},au=(c,B,d)=>{B.component=c;const b=c.vnode.props;c.vnode=B,c.next=null,sl(c,B.props,b,d),fl(c,B.children,d),At(),Or(),mt()},Mu=(c,B,d,b,v,k,P,F,w=!1)=>{const y=c&&c.children,U=c?c.shapeFlag:0,O=B.children,{patchFlag:W,shapeFlag:$}=B;if(W>0){if(W&128){oe(y,O,d,b,v,k,P,F,w);return}else if(W&256){Ye(y,O,d,b,v,k,P,F,w);return}}$&8?(U&16&&S(y,v,k),O!==y&&s(d,O)):U&16?$&16?oe(y,O,d,b,v,k,P,F,w):S(y,v,k,!0):(U&8&&s(d,""),$&16&&iu(O,d,b,v,k,P,F,w))},Ye=(c,B,d,b,v,k,P,F,w)=>{c=c||nt,B=B||nt;const y=c.length,U=B.length,O=Math.min(y,U);let W;for(W=0;W<O;W++){const $=B[W]=w?Ee(B[W]):ne(B[W]);x(c[W],$,d,null,v,k,P,F,w)}y>U?S(c,v,k,!0,!1,O):iu(B,d,b,v,k,P,F,w,O)},oe=(c,B,d,b,v,k,P,F,w)=>{let y=0;const U=B.length;let O=c.length-1,W=U-1;for(;y<=O&&y<=W;){const $=c[y],uu=B[y]=w?Ee(B[y]):ne(B[y]);if(yt($,uu))x($,uu,d,null,v,k,P,F,w);else break;y++}for(;y<=O&&y<=W;){const $=c[O],uu=B[W]=w?Ee(B[W]):ne(B[W]);if(yt($,uu))x($,uu,d,null,v,k,P,F,w);else break;O--,W--}if(y>O){if(y<=W){const $=W+1,uu=$<U?B[$].el:b;for(;y<=W;)x(null,B[y]=w?Ee(B[y]):ne(B[y]),d,uu,v,k,P,F,w),y++}}else if(y>W)for(;y<=O;)zu(c[y],v,k,!0),y++;else{const $=y,uu=y,ou=new Map;for(y=uu;y<=W;y++){const Lu=B[y]=w?Ee(B[y]):ne(B[y]);Lu.key!=null&&ou.set(Lu.key,y)}let su,Bu=0;const Hu=W-uu+1;let qe=!1,yr=0;const Et=new Array(Hu);for(y=0;y<Hu;y++)Et[y]=0;for(y=$;y<=O;y++){const Lu=c[y];if(Bu>=Hu){zu(Lu,v,k,!0);continue}let ue;if(Lu.key!=null)ue=ou.get(Lu.key);else for(su=uu;su<=W;su++)if(Et[su-uu]===0&&yt(Lu,B[su])){ue=su;break}ue===void 0?zu(Lu,v,k,!0):(Et[ue-uu]=y+1,ue>=yr?yr=ue:qe=!0,x(Lu,B[ue],d,null,v,k,P,F,w),Bu++)}const _r=qe?Al(Et):nt;for(su=_r.length-1,y=Hu-1;y>=0;y--){const Lu=uu+y,ue=B[Lu],Fr=Lu+1<U?B[Lu+1].el:b;Et[y]===0?x(null,ue,d,Fr,v,k,P,F,w):qe&&(su<0||y!==_r[su]?Zu(ue,d,Fr,2):su--)}}},Zu=(c,B,d,b,v=null)=>{const{el:k,type:P,transition:F,children:w,shapeFlag:y}=c;if(y&6){Zu(c.component.subTree,B,d,b);return}if(y&128){c.suspense.move(B,d,b);return}if(y&64){P.move(c,B,d,cu);return}if(P===hu){n(k,B,d);for(let O=0;O<w.length;O++)Zu(w[O],B,d,b);n(c.anchor,B,d);return}if(P===uC){z(c,B,d);return}if(b!==2&&y&1&&F)if(b===0)F.beforeEnter(k),n(k,B,d),Ou(()=>F.enter(k),v);else{const{leave:O,delayLeave:W,afterLeave:$}=F,uu=()=>n(k,B,d),ou=()=>{O(k,()=>{uu(),$&&$()})};W?W(k,uu,ou):ou()}else n(k,B,d)},zu=(c,B,d,b=!1,v=!1)=>{const{type:k,props:P,ref:F,children:w,dynamicChildren:y,shapeFlag:U,patchFlag:O,dirs:W}=c;if(F!=null&&hC(F,null,d,c,!0),U&256){B.ctx.deactivate(c);return}const $=U&1&&W,uu=!pn(c);let ou;if(uu&&(ou=P&&P.onVnodeBeforeUnmount)&&ee(ou,B,c),U&6)M(c.component,d,b);else{if(U&128){c.suspense.unmount(d,b);return}$&&Te(c,null,B,"beforeUnmount"),U&64?c.type.remove(c,B,d,v,cu,b):y&&(k!==hu||O>0&&O&64)?S(y,B,d,!1,!0):(k===hu&&O&384||!v&&U&16)&&S(w,B,d),b&&bt(c)}(uu&&(ou=P&&P.onVnodeUnmounted)||$)&&Ou(()=>{ou&&ee(ou,B,c),$&&Te(c,null,B,"unmounted")},d)},bt=c=>{const{type:B,el:d,anchor:b,transition:v}=c;if(B===hu){g(d,b);return}if(B===uC){H(c);return}const k=()=>{C(d),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(c.shapeFlag&1&&v&&!v.persisted){const{leave:P,delayLeave:F}=v,w=()=>P(d,k);F?F(c.el,k,w):w()}else k()},g=(c,B)=>{let d;for(;c!==B;)d=D(c),C(c),c=d;C(B)},M=(c,B,d)=>{const{bum:b,scope:v,update:k,subTree:P,um:F}=c;b&&Qn(b),v.stop(),k&&(k.active=!1,zu(P,c,B,d)),F&&Ou(F,B),Ou(()=>{c.isUnmounted=!0},B),B&&B.pendingBranch&&!B.isUnmounted&&c.asyncDep&&!c.asyncResolved&&c.suspenseId===B.pendingId&&(B.deps--,B.deps===0&&B.resolve())},S=(c,B,d,b=!1,v=!1,k=0)=>{for(let P=k;P<c.length;P++)zu(c[P],B,d,b,v)},L=c=>c.shapeFlag&6?L(c.component.subTree):c.shapeFlag&128?c.suspense.next():D(c.anchor||c.el),Cu=(c,B,d)=>{c==null?B._vnode&&zu(B._vnode,null,null,!0):x(B._vnode||null,c,B,null,null,null,d),Or(),ma(),B._vnode=c},cu={p:x,um:zu,m:Zu,r:bt,mt:vu,mc:iu,pc:Mu,pbc:Pu,n:L,o:u};let q,G;return e&&([q,G]=e(cu)),{render:Cu,hydrate:q,createApp:Dl(Cu,q)}}function je({effect:u,update:e},t){u.allowRecurse=e.allowRecurse=t}function Ta(u,e,t=!1){const n=u.children,C=e.children;if(V(n)&&V(C))for(let r=0;r<n.length;r++){const i=n[r];let a=C[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=C[r]=Ee(C[r]),a.el=i.el),t||Ta(i,a))}}function Al(u){const e=u.slice(),t=[0];let n,C,r,i,a;const o=u.length;for(n=0;n<o;n++){const l=u[n];if(l!==0){if(C=t[t.length-1],u[C]<l){e[n]=C,t.push(n);continue}for(r=0,i=t.length-1;r<i;)a=r+i>>1,u[t[a]]<l?r=a+1:i=a;l<u[t[r]]&&(r>0&&(e[n]=t[r-1]),t[r]=n)}}for(r=t.length,i=t[r-1];r-- >0;)t[r]=i,i=e[i];return t}const ml=u=>u.__isTeleport,hu=Symbol(void 0),rr=Symbol(void 0),$e=Symbol(void 0),uC=Symbol(void 0),wt=[];let Gu=null;function J(u=!1){wt.push(Gu=u?null:[])}function hl(){wt.pop(),Gu=wt[wt.length-1]||null}let Ut=1;function $r(u){Ut+=u}function ja(u){return u.dynamicChildren=Ut>0?Gu||nt:null,hl(),Ut>0&&Gu&&Gu.push(u),u}function X(u,e,t,n,C,r){return ja(h(u,e,t,n,C,r,!0))}function He(u,e,t,n,C){return ja(N(u,e,t,n,C,!0))}function gC(u){return u?u.__v_isVNode===!0:!1}function yt(u,e){return u.type===e.type&&u.key===e.key}const zn="__vInternal",Oa=({key:u})=>u!=null?u:null,An=({ref:u,ref_key:e,ref_for:t})=>u!=null?Fu(u)||gu(u)||Y(u)?{i:Vu,r:u,k:e,f:!!t}:u:null;function h(u,e=null,t=null,n=0,C=null,r=u===hu?0:1,i=!1,a=!1){const o={__v_isVNode:!0,__v_skip:!0,type:u,props:e,key:e&&Oa(e),ref:e&&An(e),scopeId:Un,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:n,dynamicProps:C,dynamicChildren:null,appContext:null};return a?(ir(o,t),r&128&&u.normalize(o)):t&&(o.shapeFlag|=Fu(t)?8:16),Ut>0&&!i&&Gu&&(o.patchFlag>0||r&6)&&o.patchFlag!==32&&Gu.push(o),o}const N=gl;function gl(u,e=null,t=null,n=0,C=null,r=!1){if((!u||u===ul)&&(u=$e),gC(u)){const a=ct(u,e,!0);return t&&ir(a,t),Ut>0&&!r&&Gu&&(a.shapeFlag&6?Gu[Gu.indexOf(u)]=a:Gu.push(a)),a.patchFlag|=-2,a}if(Pl(u)&&(u=u.__vccOpts),e){e=vl(e);let{class:a,style:o}=e;a&&!Fu(a)&&(e.class=m(a)),Au(o)&&(la(o)&&!V(o)&&(o=Tu({},o)),e.style=In(o))}const i=Fu(u)?1:Ns(u)?128:ml(u)?64:Au(u)?4:Y(u)?2:0;return h(u,e,t,n,C,i,r,!0)}function vl(u){return u?la(u)||zn in u?Tu({},u):u:null}function ct(u,e,t=!1){const{props:n,ref:C,patchFlag:r,children:i}=u,a=e?bl(n||{},e):n;return{__v_isVNode:!0,__v_skip:!0,type:u.type,props:a,key:a&&Oa(a),ref:e&&e.ref?t&&C?V(C)?C.concat(An(e)):[C,An(e)]:An(e):C,scopeId:u.scopeId,slotScopeIds:u.slotScopeIds,children:i,target:u.target,targetAnchor:u.targetAnchor,staticCount:u.staticCount,shapeFlag:u.shapeFlag,patchFlag:e&&u.type!==hu?r===-1?16:r|16:r,dynamicProps:u.dynamicProps,dynamicChildren:u.dynamicChildren,appContext:u.appContext,dirs:u.dirs,transition:u.transition,component:u.component,suspense:u.suspense,ssContent:u.ssContent&&ct(u.ssContent),ssFallback:u.ssFallback&&ct(u.ssFallback),el:u.el,anchor:u.anchor}}function wu(u=" ",e=0){return N(rr,null,u,e)}function ie(u="",e=!1){return e?(J(),He($e,null,u)):N($e,null,u)}function ne(u){return u==null||typeof u=="boolean"?N($e):V(u)?N(hu,null,u.slice()):typeof u=="object"?Ee(u):N(rr,null,String(u))}function Ee(u){return u.el===null||u.memo?u:ct(u)}function ir(u,e){let t=0;const{shapeFlag:n}=u;if(e==null)e=null;else if(V(e))t=16;else if(typeof e=="object")if(n&65){const C=e.default;C&&(C._c&&(C._d=!1),ir(u,C()),C._c&&(C._d=!0));return}else{t=32;const C=e._;!C&&!(zn in e)?e._ctx=Vu:C===3&&Vu&&(Vu.slots._===1?e._=1:(e._=2,u.patchFlag|=1024))}else Y(e)?(e={default:e,_ctx:Vu},t=32):(e=String(e),n&64?(t=16,e=[wu(e)]):t=8);u.children=e,u.shapeFlag|=t}function bl(...u){const e={};for(let t=0;t<u.length;t++){const n=u[t];for(const C in n)if(C==="class")e.class!==n.class&&(e.class=m([e.class,n.class]));else if(C==="style")e.style=In([e.style,n.style]);else if(Tn(C)){const r=e[C],i=n[C];i&&r!==i&&!(V(r)&&r.includes(i))&&(e[C]=r?[].concat(r,i):i)}else C!==""&&(e[C]=n[C])}return e}function ee(u,e,t,n=null){Xu(u,e,7,[t,n])}const El=Ia();let yl=0;function _l(u,e,t){const n=u.type,C=(e?e.appContext:u.appContext)||El,r={uid:yl++,vnode:u,type:n,parent:e,appContext:C,root:null,next:null,subTree:null,effect:null,update:null,scope:new Xi(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(C.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:wa(n,C),emitsOptions:ga(n,C),emit:null,emitted:null,propsDefaults:fu,inheritAttrs:n.inheritAttrs,ctx:fu,data:fu,props:fu,attrs:fu,slots:fu,refs:fu,setupState:fu,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=Is.bind(null,r),u.ce&&u.ce(r),r}let _u=null;const Ra=()=>_u||Vu,ft=u=>{_u=u,u.scope.on()},Je=()=>{_u&&_u.scope.off(),_u=null};function Ma(u){return u.vnode.shapeFlag&4}let Wt=!1;function Fl(u,e=!1){Wt=e;const{props:t,children:n}=u.vnode,C=Ma(u);ol(u,t,C,e),cl(u,n);const r=C?kl(u,e):void 0;return Wt=!1,r}function kl(u,e){const t=u.type;u.accessCache=Object.create(null),u.proxy=lt(new Proxy(u.ctx,tl));const{setup:n}=t;if(n){const C=u.setupContext=n.length>1?Sl(u):null;ft(u),At();const r=ke(n,u,0,[u.props,C]);if(mt(),Je(),Gi(r)){if(r.then(Je,Je),e)return r.then(i=>{Kr(u,i,e)}).catch(i=>{Ln(i,u,0)});u.asyncDep=r}else Kr(u,r,e)}else La(u,e)}function Kr(u,e,t){Y(e)?u.type.__ssrInlineRender?u.ssrRender=e:u.render=e:Au(e)&&(u.setupState=Da(e)),La(u,t)}let Vr;function La(u,e,t){const n=u.type;if(!u.render){if(!e&&Vr&&!n.render){const C=n.template||nr(u).template;if(C){const{isCustomElement:r,compilerOptions:i}=u.appContext.config,{delimiters:a,compilerOptions:o}=n,l=Tu(Tu({isCustomElement:r,delimiters:a},i),o);n.render=Vr(C,l)}}u.render=n.render||qu}ft(u),At(),nl(u),mt(),Je()}function wl(u){return new Proxy(u.attrs,{get(e,t){return Nu(u,"get","$attrs"),e[t]}})}function Sl(u){const e=n=>{u.exposed=n||{}};let t;return{get attrs(){return t||(t=wl(u))},slots:u.slots,emit:u.emit,expose:e}}function ar(u){if(u.exposed)return u.exposeProxy||(u.exposeProxy=new Proxy(Da(lt(u.exposed)),{get(e,t){if(t in e)return e[t];if(t in En)return En[t](u)}}))}function xl(u,e=!0){return Y(u)?u.displayName||u.name:u.name||e&&u.__name}function Pl(u){return Y(u)&&"__vccOpts"in u}const pu=(u,e)=>Fs(u,e,Wt);function Hn(u,e,t){const n=arguments.length;return n===2?Au(e)&&!V(e)?gC(e)?N(u,null,[e]):N(u,e):N(u,null,e):(n>3?t=Array.prototype.slice.call(arguments,2):n===3&&gC(t)&&(t=[t]),N(u,e,t))}const Il="3.2.39",Tl="http://www.w3.org/2000/svg",Me=typeof document<"u"?document:null,Gr=Me&&Me.createElement("template"),jl={insert:(u,e,t)=>{e.insertBefore(u,t||null)},remove:u=>{const e=u.parentNode;e&&e.removeChild(u)},createElement:(u,e,t,n)=>{const C=e?Me.createElementNS(Tl,u):Me.createElement(u,t?{is:t}:void 0);return u==="select"&&n&&n.multiple!=null&&C.setAttribute("multiple",n.multiple),C},createText:u=>Me.createTextNode(u),createComment:u=>Me.createComment(u),setText:(u,e)=>{u.nodeValue=e},setElementText:(u,e)=>{u.textContent=e},parentNode:u=>u.parentNode,nextSibling:u=>u.nextSibling,querySelector:u=>Me.querySelector(u),setScopeId(u,e){u.setAttribute(e,"")},cloneNode(u){const e=u.cloneNode(!0);return"_value"in u&&(e._value=u._value),e},insertStaticContent(u,e,t,n,C,r){const i=t?t.previousSibling:e.lastChild;if(C&&(C===r||C.nextSibling))for(;e.insertBefore(C.cloneNode(!0),t),!(C===r||!(C=C.nextSibling)););else{Gr.innerHTML=n?`<svg>${u}</svg>`:u;const a=Gr.content;if(n){const o=a.firstChild;for(;o.firstChild;)a.appendChild(o.firstChild);a.removeChild(o)}e.insertBefore(a,t)}return[i?i.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}};function Ol(u,e,t){const n=u._vtc;n&&(e=(e?[e,...n]:[...n]).join(" ")),e==null?u.removeAttribute("class"):t?u.setAttribute("class",e):u.className=e}function Rl(u,e,t){const n=u.style,C=Fu(t);if(t&&!C){for(const r in t)vC(n,r,t[r]);if(e&&!Fu(e))for(const r in e)t[r]==null&&vC(n,r,"")}else{const r=n.display;C?e!==t&&(n.cssText=t):e&&u.removeAttribute("style"),"_vod"in u&&(n.display=r)}}const Yr=/\s*!important$/;function vC(u,e,t){if(V(t))t.forEach(n=>vC(u,e,n));else if(t==null&&(t=""),e.startsWith("--"))u.setProperty(e,t);else{const n=Ml(u,e);Yr.test(t)?u.setProperty(pt(n),t.replace(Yr,""),"important"):u[n]=t}}const qr=["Webkit","Moz","ms"],eC={};function Ml(u,e){const t=eC[e];if(t)return t;let n=ae(e);if(n!=="filter"&&n in u)return eC[e]=n;n=Rn(n);for(let C=0;C<qr.length;C++){const r=qr[C]+n;if(r in u)return eC[e]=r}return e}const Xr="http://www.w3.org/1999/xlink";function Ll(u,e,t,n,C){if(n&&e.startsWith("xlink:"))t==null?u.removeAttributeNS(Xr,e.slice(6,e.length)):u.setAttributeNS(Xr,e,t);else{const r=jo(e);t==null||r&&!$i(t)?u.removeAttribute(e):u.setAttribute(e,r?"":t)}}function Nl(u,e,t,n,C,r,i){if(e==="innerHTML"||e==="textContent"){n&&i(n,C,r),u[e]=t==null?"":t;return}if(e==="value"&&u.tagName!=="PROGRESS"&&!u.tagName.includes("-")){u._value=t;const o=t==null?"":t;(u.value!==o||u.tagName==="OPTION")&&(u.value=o),t==null&&u.removeAttribute(e);return}let a=!1;if(t===""||t==null){const o=typeof u[e];o==="boolean"?t=$i(t):t==null&&o==="string"?(t="",a=!0):o==="number"&&(t=0,a=!0)}try{u[e]=t}catch{}a&&u.removeAttribute(e)}const[Na,Ul]=(()=>{let u=Date.now,e=!1;if(typeof window<"u"){Date.now()>document.createEvent("Event").timeStamp&&(u=performance.now.bind(performance));const t=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(t&&Number(t[1])<=53)}return[u,e]})();let bC=0;const Wl=Promise.resolve(),zl=()=>{bC=0},Hl=()=>bC||(Wl.then(zl),bC=Na());function Jl(u,e,t,n){u.addEventListener(e,t,n)}function $l(u,e,t,n){u.removeEventListener(e,t,n)}function Kl(u,e,t,n,C=null){const r=u._vei||(u._vei={}),i=r[e];if(n&&i)i.value=n;else{const[a,o]=Vl(e);if(n){const l=r[e]=Gl(n,C);Jl(u,a,l,o)}else i&&($l(u,a,i,o),r[e]=void 0)}}const Qr=/(?:Once|Passive|Capture)$/;function Vl(u){let e;if(Qr.test(u)){e={};let n;for(;n=u.match(Qr);)u=u.slice(0,u.length-n[0].length),e[n[0].toLowerCase()]=!0}return[u[2]===":"?u.slice(3):pt(u.slice(2)),e]}function Gl(u,e){const t=n=>{const C=n.timeStamp||Na();(Ul||C>=t.attached-1)&&Xu(Yl(n,t.value),e,5,[n])};return t.value=u,t.attached=Hl(),t}function Yl(u,e){if(V(e)){const t=u.stopImmediatePropagation;return u.stopImmediatePropagation=()=>{t.call(u),u._stopped=!0},e.map(n=>C=>!C._stopped&&n&&n(C))}else return e}const Zr=/^on[a-z]/,ql=(u,e,t,n,C=!1,r,i,a,o)=>{e==="class"?Ol(u,n,C):e==="style"?Rl(u,t,n):Tn(e)?zC(e)||Kl(u,e,t,n,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Xl(u,e,n,C))?Nl(u,e,n,r,i,a,o):(e==="true-value"?u._trueValue=n:e==="false-value"&&(u._falseValue=n),Ll(u,e,n,C))};function Xl(u,e,t,n){return n?!!(e==="innerHTML"||e==="textContent"||e in u&&Zr.test(e)&&Y(t)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&u.tagName==="INPUT"||e==="type"&&u.tagName==="TEXTAREA"||Zr.test(e)&&Fu(t)?!1:e in u}const Ql=Tu({patchProp:ql},jl);let ui;function Zl(){return ui||(ui=dl(Ql))}const uc=(...u)=>{const e=Zl().createApp(...u),{mount:t}=e;return e.mount=n=>{const C=ec(n);if(!C)return;const r=e._component;!Y(r)&&!r.render&&!r.template&&(r.template=C.innerHTML),C.innerHTML="";const i=t(C,!1,C instanceof SVGElement);return C instanceof Element&&(C.removeAttribute("v-cloak"),C.setAttribute("data-v-app","")),i},e};function ec(u){return Fu(u)?document.querySelector(u):u}var tc=!1;/*!
  * pinia v2.0.22
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */let Ua;const Jn=u=>Ua=u,Wa=Symbol();function EC(u){return u&&typeof u=="object"&&Object.prototype.toString.call(u)==="[object Object]"&&typeof u.toJSON!="function"}var St;(function(u){u.direct="direct",u.patchObject="patch object",u.patchFunction="patch function"})(St||(St={}));function nc(){const u=Qi(!0),e=u.run(()=>Gt({}));let t=[],n=[];const C=lt({install(r){Jn(C),C._a=r,r.provide(Wa,C),r.config.globalProperties.$pinia=C,n.forEach(i=>t.push(i)),n=[]},use(r){return!this._a&&!tc?n.push(r):t.push(r),this},_p:t,_a:null,_e:u,_s:new Map,state:e});return C}const za=()=>{};function ei(u,e,t,n=za){u.push(e);const C=()=>{const r=u.indexOf(e);r>-1&&(u.splice(r,1),n())};return!t&&Ra()&&tr(C),C}function Xe(u,...e){u.slice().forEach(t=>{t(...e)})}function yC(u,e){u instanceof Map&&e instanceof Map&&e.forEach((t,n)=>u.set(n,t)),u instanceof Set&&e instanceof Set&&e.forEach(u.add,u);for(const t in e){if(!e.hasOwnProperty(t))continue;const n=e[t],C=u[t];EC(C)&&EC(n)&&u.hasOwnProperty(t)&&!gu(n)&&!Fe(n)?u[t]=yC(C,n):u[t]=n}return u}const Cc=Symbol();function rc(u){return!EC(u)||!u.hasOwnProperty(Cc)}const{assign:ce}=Object;function ic(u){return!!(gu(u)&&u.effect)}function ac(u,e,t,n){const{state:C,actions:r,getters:i}=e,a=t.state.value[u];let o;function l(){a||(t.state.value[u]=C?C():{});const s=bs(t.state.value[u]);return ce(s,r,Object.keys(i||{}).reduce((f,D)=>(f[D]=lt(pu(()=>{Jn(t);const p=t._s.get(u);return i[D].call(p,p)})),f),{}))}return o=Ha(u,l,e,t,n,!0),o.$reset=function(){const f=C?C():{};this.$patch(D=>{ce(D,f)})},o}function Ha(u,e,t={},n,C,r){let i;const a=ce({actions:{}},t),o={deep:!0};let l,s,f=lt([]),D=lt([]),p;const _=n.state.value[u];!r&&!_&&(n.state.value[u]={}),Gt({});let T;function x(K){let Q;l=s=!1,typeof K=="function"?(K(n.state.value[u]),Q={type:St.patchFunction,storeId:u,events:p}):(yC(n.state.value[u],K),Q={type:St.patchObject,payload:K,storeId:u,events:p});const iu=T=Symbol();ur().then(()=>{T===iu&&(l=!0)}),s=!0,Xe(f,Q,n.state.value[u])}const A=za;function E(){i.stop(),f=[],D=[],n._s.delete(u)}function j(K,Q){return function(){Jn(n);const iu=Array.from(arguments),Su=[],Pu=[];function Ru(vu){Su.push(vu)}function he(vu){Pu.push(vu)}Xe(D,{args:iu,name:K,store:H,after:Ru,onError:he});let Wu;try{Wu=Q.apply(this&&this.$id===u?this:H,iu)}catch(vu){throw Xe(Pu,vu),vu}return Wu instanceof Promise?Wu.then(vu=>(Xe(Su,vu),vu)).catch(vu=>(Xe(Pu,vu),Promise.reject(vu))):(Xe(Su,Wu),Wu)}}const z={_p:n,$id:u,$onAction:ei.bind(null,D),$patch:x,$reset:A,$subscribe(K,Q={}){const iu=ei(f,K,Q.detached,()=>Su()),Su=i.run(()=>ze(()=>n.state.value[u],Pu=>{(Q.flush==="sync"?s:l)&&K({storeId:u,type:St.direct,events:p},Pu)},ce({},o,Q)));return iu},$dispose:E},H=ht(ce({},z));n._s.set(u,H);const nu=n._e.run(()=>(i=Qi(),i.run(()=>e())));for(const K in nu){const Q=nu[K];if(gu(Q)&&!ic(Q)||Fe(Q))r||(_&&rc(Q)&&(gu(Q)?Q.value=_[K]:yC(Q,_[K])),n.state.value[u][K]=Q);else if(typeof Q=="function"){const iu=j(K,Q);nu[K]=iu,a.actions[K]=Q}}return ce(H,nu),ce(tu(H),nu),Object.defineProperty(H,"$state",{get:()=>n.state.value[u],set:K=>{x(Q=>{ce(Q,K)})}}),n._p.forEach(K=>{ce(H,i.run(()=>K({store:H,app:n._a,pinia:n,options:a})))}),_&&r&&t.hydrate&&t.hydrate(H.$state,_),l=!0,s=!0,H}function Ja(u,e,t){let n,C;const r=typeof e=="function";typeof u=="string"?(n=u,C=r?t:e):(C=u,n=u.id);function i(a,o){const l=Ra();return a=a||l&&fe(Wa),a&&Jn(a),a=Ua,a._s.has(n)||(r?Ha(n,e,C,a):ac(n,C,a)),a._s.get(n)}return i.$id=n,i}/*!
  * vue-router v4.1.5
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Ze=typeof window<"u";function oc(u){return u.__esModule||u[Symbol.toStringTag]==="Module"}const ru=Object.assign;function tC(u,e){const t={};for(const n in e){const C=e[n];t[n]=Qu(C)?C.map(u):u(C)}return t}const xt=()=>{},Qu=Array.isArray,sc=/\/$/,lc=u=>u.replace(sc,"");function nC(u,e,t="/"){let n,C={},r="",i="";const a=e.indexOf("#");let o=e.indexOf("?");return a<o&&a>=0&&(o=-1),o>-1&&(n=e.slice(0,o),r=e.slice(o+1,a>-1?a:e.length),C=u(r)),a>-1&&(n=n||e.slice(0,a),i=e.slice(a,e.length)),n=Dc(n!=null?n:e,t),{fullPath:n+(r&&"?")+r+i,path:n,query:C,hash:i}}function cc(u,e){const t=e.query?u(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function ti(u,e){return!e||!u.toLowerCase().startsWith(e.toLowerCase())?u:u.slice(e.length)||"/"}function fc(u,e,t){const n=e.matched.length-1,C=t.matched.length-1;return n>-1&&n===C&&Bt(e.matched[n],t.matched[C])&&$a(e.params,t.params)&&u(e.query)===u(t.query)&&e.hash===t.hash}function Bt(u,e){return(u.aliasOf||u)===(e.aliasOf||e)}function $a(u,e){if(Object.keys(u).length!==Object.keys(e).length)return!1;for(const t in u)if(!Bc(u[t],e[t]))return!1;return!0}function Bc(u,e){return Qu(u)?ni(u,e):Qu(e)?ni(e,u):u===e}function ni(u,e){return Qu(e)?u.length===e.length&&u.every((t,n)=>t===e[n]):u.length===1&&u[0]===e}function Dc(u,e){if(u.startsWith("/"))return u;if(!u)return e;const t=e.split("/"),n=u.split("/");let C=t.length-1,r,i;for(r=0;r<n.length;r++)if(i=n[r],i!==".")if(i==="..")C>1&&C--;else break;return t.slice(0,C).join("/")+"/"+n.slice(r-(r===n.length?1:0)).join("/")}var zt;(function(u){u.pop="pop",u.push="push"})(zt||(zt={}));var Pt;(function(u){u.back="back",u.forward="forward",u.unknown=""})(Pt||(Pt={}));function dc(u){if(!u)if(Ze){const e=document.querySelector("base");u=e&&e.getAttribute("href")||"/",u=u.replace(/^\w+:\/\/[^\/]+/,"")}else u="/";return u[0]!=="/"&&u[0]!=="#"&&(u="/"+u),lc(u)}const pc=/^[^#]+#/;function Ac(u,e){return u.replace(pc,"#")+e}function mc(u,e){const t=document.documentElement.getBoundingClientRect(),n=u.getBoundingClientRect();return{behavior:e.behavior,left:n.left-t.left-(e.left||0),top:n.top-t.top-(e.top||0)}}const $n=()=>({left:window.pageXOffset,top:window.pageYOffset});function hc(u){let e;if("el"in u){const t=u.el,n=typeof t=="string"&&t.startsWith("#"),C=typeof t=="string"?n?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!C)return;e=mc(C,u)}else e=u;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Ci(u,e){return(history.state?history.state.position-e:-1)+u}const _C=new Map;function gc(u,e){_C.set(u,e)}function vc(u){const e=_C.get(u);return _C.delete(u),e}let bc=()=>location.protocol+"//"+location.host;function Ka(u,e){const{pathname:t,search:n,hash:C}=e,r=u.indexOf("#");if(r>-1){let a=C.includes(u.slice(r))?u.slice(r).length:1,o=C.slice(a);return o[0]!=="/"&&(o="/"+o),ti(o,"")}return ti(t,u)+n+C}function Ec(u,e,t,n){let C=[],r=[],i=null;const a=({state:D})=>{const p=Ka(u,location),_=t.value,T=e.value;let x=0;if(D){if(t.value=p,e.value=D,i&&i===_){i=null;return}x=T?D.position-T.position:0}else n(p);C.forEach(A=>{A(t.value,_,{delta:x,type:zt.pop,direction:x?x>0?Pt.forward:Pt.back:Pt.unknown})})};function o(){i=t.value}function l(D){C.push(D);const p=()=>{const _=C.indexOf(D);_>-1&&C.splice(_,1)};return r.push(p),p}function s(){const{history:D}=window;!D.state||D.replaceState(ru({},D.state,{scroll:$n()}),"")}function f(){for(const D of r)D();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",s)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",s),{pauseListeners:o,listen:l,destroy:f}}function ri(u,e,t,n=!1,C=!1){return{back:u,current:e,forward:t,replaced:n,position:window.history.length,scroll:C?$n():null}}function yc(u){const{history:e,location:t}=window,n={value:Ka(u,t)},C={value:e.state};C.value||r(n.value,{back:null,current:n.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(o,l,s){const f=u.indexOf("#"),D=f>-1?(t.host&&document.querySelector("base")?u:u.slice(f))+o:bc()+u+o;try{e[s?"replaceState":"pushState"](l,"",D),C.value=l}catch(p){console.error(p),t[s?"replace":"assign"](D)}}function i(o,l){const s=ru({},e.state,ri(C.value.back,o,C.value.forward,!0),l,{position:C.value.position});r(o,s,!0),n.value=o}function a(o,l){const s=ru({},C.value,e.state,{forward:o,scroll:$n()});r(s.current,s,!0);const f=ru({},ri(n.value,o,null),{position:s.position+1},l);r(o,f,!1),n.value=o}return{location:n,state:C,push:a,replace:i}}function _c(u){u=dc(u);const e=yc(u),t=Ec(u,e.state,e.location,e.replace);function n(r,i=!0){i||t.pauseListeners(),history.go(r)}const C=ru({location:"",base:u,go:n,createHref:Ac.bind(null,u)},e,t);return Object.defineProperty(C,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(C,"state",{enumerable:!0,get:()=>e.state.value}),C}function Fc(u){return typeof u=="string"||u&&typeof u=="object"}function Va(u){return typeof u=="string"||typeof u=="symbol"}const ve={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Ga=Symbol("");var ii;(function(u){u[u.aborted=4]="aborted",u[u.cancelled=8]="cancelled",u[u.duplicated=16]="duplicated"})(ii||(ii={}));function Dt(u,e){return ru(new Error,{type:u,[Ga]:!0},e)}function se(u,e){return u instanceof Error&&Ga in u&&(e==null||!!(u.type&e))}const ai="[^/]+?",kc={sensitive:!1,strict:!1,start:!0,end:!0},wc=/[.+*?^${}()[\]/\\]/g;function Sc(u,e){const t=ru({},kc,e),n=[];let C=t.start?"^":"";const r=[];for(const l of u){const s=l.length?[]:[90];t.strict&&!l.length&&(C+="/");for(let f=0;f<l.length;f++){const D=l[f];let p=40+(t.sensitive?.25:0);if(D.type===0)f||(C+="/"),C+=D.value.replace(wc,"\\$&"),p+=40;else if(D.type===1){const{value:_,repeatable:T,optional:x,regexp:A}=D;r.push({name:_,repeatable:T,optional:x});const E=A||ai;if(E!==ai){p+=10;try{new RegExp(`(${E})`)}catch(z){throw new Error(`Invalid custom RegExp for param "${_}" (${E}): `+z.message)}}let j=T?`((?:${E})(?:/(?:${E}))*)`:`(${E})`;f||(j=x&&l.length<2?`(?:/${j})`:"/"+j),x&&(j+="?"),C+=j,p+=20,x&&(p+=-8),T&&(p+=-20),E===".*"&&(p+=-50)}s.push(p)}n.push(s)}if(t.strict&&t.end){const l=n.length-1;n[l][n[l].length-1]+=.7000000000000001}t.strict||(C+="/?"),t.end?C+="$":t.strict&&(C+="(?:/|$)");const i=new RegExp(C,t.sensitive?"":"i");function a(l){const s=l.match(i),f={};if(!s)return null;for(let D=1;D<s.length;D++){const p=s[D]||"",_=r[D-1];f[_.name]=p&&_.repeatable?p.split("/"):p}return f}function o(l){let s="",f=!1;for(const D of u){(!f||!s.endsWith("/"))&&(s+="/"),f=!1;for(const p of D)if(p.type===0)s+=p.value;else if(p.type===1){const{value:_,repeatable:T,optional:x}=p,A=_ in l?l[_]:"";if(Qu(A)&&!T)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const E=Qu(A)?A.join("/"):A;if(!E)if(x)D.length<2&&(s.endsWith("/")?s=s.slice(0,-1):f=!0);else throw new Error(`Missing required param "${_}"`);s+=E}}return s||"/"}return{re:i,score:n,keys:r,parse:a,stringify:o}}function xc(u,e){let t=0;for(;t<u.length&&t<e.length;){const n=e[t]-u[t];if(n)return n;t++}return u.length<e.length?u.length===1&&u[0]===40+40?-1:1:u.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function Pc(u,e){let t=0;const n=u.score,C=e.score;for(;t<n.length&&t<C.length;){const r=xc(n[t],C[t]);if(r)return r;t++}if(Math.abs(C.length-n.length)===1){if(oi(n))return 1;if(oi(C))return-1}return C.length-n.length}function oi(u){const e=u[u.length-1];return u.length>0&&e[e.length-1]<0}const Ic={type:0,value:""},Tc=/[a-zA-Z0-9_]/;function jc(u){if(!u)return[[]];if(u==="/")return[[Ic]];if(!u.startsWith("/"))throw new Error(`Invalid path "${u}"`);function e(p){throw new Error(`ERR (${t})/"${l}": ${p}`)}let t=0,n=t;const C=[];let r;function i(){r&&C.push(r),r=[]}let a=0,o,l="",s="";function f(){!l||(t===0?r.push({type:0,value:l}):t===1||t===2||t===3?(r.length>1&&(o==="*"||o==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:l,regexp:s,repeatable:o==="*"||o==="+",optional:o==="*"||o==="?"})):e("Invalid state to consume buffer"),l="")}function D(){l+=o}for(;a<u.length;){if(o=u[a++],o==="\\"&&t!==2){n=t,t=4;continue}switch(t){case 0:o==="/"?(l&&f(),i()):o===":"?(f(),t=1):D();break;case 4:D(),t=n;break;case 1:o==="("?t=2:Tc.test(o)?D():(f(),t=0,o!=="*"&&o!=="?"&&o!=="+"&&a--);break;case 2:o===")"?s[s.length-1]=="\\"?s=s.slice(0,-1)+o:t=3:s+=o;break;case 3:f(),t=0,o!=="*"&&o!=="?"&&o!=="+"&&a--,s="";break;default:e("Unknown state");break}}return t===2&&e(`Unfinished custom RegExp for param "${l}"`),f(),i(),C}function Oc(u,e,t){const n=Sc(jc(u.path),t),C=ru(n,{record:u,parent:e,children:[],alias:[]});return e&&!C.record.aliasOf==!e.record.aliasOf&&e.children.push(C),C}function Rc(u,e){const t=[],n=new Map;e=ci({strict:!1,end:!0,sensitive:!1},e);function C(s){return n.get(s)}function r(s,f,D){const p=!D,_=Mc(s);_.aliasOf=D&&D.record;const T=ci(e,s),x=[_];if("alias"in s){const j=typeof s.alias=="string"?[s.alias]:s.alias;for(const z of j)x.push(ru({},_,{components:D?D.record.components:_.components,path:z,aliasOf:D?D.record:_}))}let A,E;for(const j of x){const{path:z}=j;if(f&&z[0]!=="/"){const H=f.record.path,nu=H[H.length-1]==="/"?"":"/";j.path=f.record.path+(z&&nu+z)}if(A=Oc(j,f,T),D?D.alias.push(A):(E=E||A,E!==A&&E.alias.push(A),p&&s.name&&!li(A)&&i(s.name)),_.children){const H=_.children;for(let nu=0;nu<H.length;nu++)r(H[nu],A,D&&D.children[nu])}D=D||A,o(A)}return E?()=>{i(E)}:xt}function i(s){if(Va(s)){const f=n.get(s);f&&(n.delete(s),t.splice(t.indexOf(f),1),f.children.forEach(i),f.alias.forEach(i))}else{const f=t.indexOf(s);f>-1&&(t.splice(f,1),s.record.name&&n.delete(s.record.name),s.children.forEach(i),s.alias.forEach(i))}}function a(){return t}function o(s){let f=0;for(;f<t.length&&Pc(s,t[f])>=0&&(s.record.path!==t[f].record.path||!Ya(s,t[f]));)f++;t.splice(f,0,s),s.record.name&&!li(s)&&n.set(s.record.name,s)}function l(s,f){let D,p={},_,T;if("name"in s&&s.name){if(D=n.get(s.name),!D)throw Dt(1,{location:s});T=D.record.name,p=ru(si(f.params,D.keys.filter(E=>!E.optional).map(E=>E.name)),s.params&&si(s.params,D.keys.map(E=>E.name))),_=D.stringify(p)}else if("path"in s)_=s.path,D=t.find(E=>E.re.test(_)),D&&(p=D.parse(_),T=D.record.name);else{if(D=f.name?n.get(f.name):t.find(E=>E.re.test(f.path)),!D)throw Dt(1,{location:s,currentLocation:f});T=D.record.name,p=ru({},f.params,s.params),_=D.stringify(p)}const x=[];let A=D;for(;A;)x.unshift(A.record),A=A.parent;return{name:T,path:_,params:p,matched:x,meta:Nc(x)}}return u.forEach(s=>r(s)),{addRoute:r,resolve:l,removeRoute:i,getRoutes:a,getRecordMatcher:C}}function si(u,e){const t={};for(const n of e)n in u&&(t[n]=u[n]);return t}function Mc(u){return{path:u.path,redirect:u.redirect,name:u.name,meta:u.meta||{},aliasOf:void 0,beforeEnter:u.beforeEnter,props:Lc(u),children:u.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in u?u.components||null:u.component&&{default:u.component}}}function Lc(u){const e={},t=u.props||!1;if("component"in u)e.default=t;else for(const n in u.components)e[n]=typeof t=="boolean"?t:t[n];return e}function li(u){for(;u;){if(u.record.aliasOf)return!0;u=u.parent}return!1}function Nc(u){return u.reduce((e,t)=>ru(e,t.meta),{})}function ci(u,e){const t={};for(const n in u)t[n]=n in e?e[n]:u[n];return t}function Ya(u,e){return e.children.some(t=>t===u||Ya(u,t))}const qa=/#/g,Uc=/&/g,Wc=/\//g,zc=/=/g,Hc=/\?/g,Xa=/\+/g,Jc=/%5B/g,$c=/%5D/g,Qa=/%5E/g,Kc=/%60/g,Za=/%7B/g,Vc=/%7C/g,uo=/%7D/g,Gc=/%20/g;function or(u){return encodeURI(""+u).replace(Vc,"|").replace(Jc,"[").replace($c,"]")}function Yc(u){return or(u).replace(Za,"{").replace(uo,"}").replace(Qa,"^")}function FC(u){return or(u).replace(Xa,"%2B").replace(Gc,"+").replace(qa,"%23").replace(Uc,"%26").replace(Kc,"`").replace(Za,"{").replace(uo,"}").replace(Qa,"^")}function qc(u){return FC(u).replace(zc,"%3D")}function Xc(u){return or(u).replace(qa,"%23").replace(Hc,"%3F")}function Qc(u){return u==null?"":Xc(u).replace(Wc,"%2F")}function _n(u){try{return decodeURIComponent(""+u)}catch{}return""+u}function Zc(u){const e={};if(u===""||u==="?")return e;const n=(u[0]==="?"?u.slice(1):u).split("&");for(let C=0;C<n.length;++C){const r=n[C].replace(Xa," "),i=r.indexOf("="),a=_n(i<0?r:r.slice(0,i)),o=i<0?null:_n(r.slice(i+1));if(a in e){let l=e[a];Qu(l)||(l=e[a]=[l]),l.push(o)}else e[a]=o}return e}function fi(u){let e="";for(let t in u){const n=u[t];if(t=qc(t),n==null){n!==void 0&&(e+=(e.length?"&":"")+t);continue}(Qu(n)?n.map(r=>r&&FC(r)):[n&&FC(n)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+t,r!=null&&(e+="="+r))})}return e}function u0(u){const e={};for(const t in u){const n=u[t];n!==void 0&&(e[t]=Qu(n)?n.map(C=>C==null?null:""+C):n==null?n:""+n)}return e}const e0=Symbol(""),Bi=Symbol(""),sr=Symbol(""),eo=Symbol(""),kC=Symbol("");function _t(){let u=[];function e(n){return u.push(n),()=>{const C=u.indexOf(n);C>-1&&u.splice(C,1)}}function t(){u=[]}return{add:e,list:()=>u,reset:t}}function ye(u,e,t,n,C){const r=n&&(n.enterCallbacks[C]=n.enterCallbacks[C]||[]);return()=>new Promise((i,a)=>{const o=f=>{f===!1?a(Dt(4,{from:t,to:e})):f instanceof Error?a(f):Fc(f)?a(Dt(2,{from:e,to:f})):(r&&n.enterCallbacks[C]===r&&typeof f=="function"&&r.push(f),i())},l=u.call(n&&n.instances[C],e,t,o);let s=Promise.resolve(l);u.length<3&&(s=s.then(o)),s.catch(f=>a(f))})}function CC(u,e,t,n){const C=[];for(const r of u)for(const i in r.components){let a=r.components[i];if(!(e!=="beforeRouteEnter"&&!r.instances[i]))if(t0(a)){const l=(a.__vccOpts||a)[e];l&&C.push(ye(l,t,n,r,i))}else{let o=a();C.push(()=>o.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${i}" at "${r.path}"`));const s=oc(l)?l.default:l;r.components[i]=s;const D=(s.__vccOpts||s)[e];return D&&ye(D,t,n,r,i)()}))}}return C}function t0(u){return typeof u=="object"||"displayName"in u||"props"in u||"__vccOpts"in u}function Di(u){const e=fe(sr),t=fe(eo),n=pu(()=>e.resolve(rt(u.to))),C=pu(()=>{const{matched:o}=n.value,{length:l}=o,s=o[l-1],f=t.matched;if(!s||!f.length)return-1;const D=f.findIndex(Bt.bind(null,s));if(D>-1)return D;const p=di(o[l-2]);return l>1&&di(s)===p&&f[f.length-1].path!==p?f.findIndex(Bt.bind(null,o[l-2])):D}),r=pu(()=>C.value>-1&&i0(t.params,n.value.params)),i=pu(()=>C.value>-1&&C.value===t.matched.length-1&&$a(t.params,n.value.params));function a(o={}){return r0(o)?e[rt(u.replace)?"replace":"push"](rt(u.to)).catch(xt):Promise.resolve()}return{route:n,href:pu(()=>n.value.href),isActive:r,isExactActive:i,navigate:a}}const n0=Yt({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Di,setup(u,{slots:e}){const t=ht(Di(u)),{options:n}=fe(sr),C=pu(()=>({[pi(u.activeClass,n.linkActiveClass,"router-link-active")]:t.isActive,[pi(u.exactActiveClass,n.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const r=e.default&&e.default(t);return u.custom?r:Hn("a",{"aria-current":t.isExactActive?u.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:C.value},r)}}}),C0=n0;function r0(u){if(!(u.metaKey||u.altKey||u.ctrlKey||u.shiftKey)&&!u.defaultPrevented&&!(u.button!==void 0&&u.button!==0)){if(u.currentTarget&&u.currentTarget.getAttribute){const e=u.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return u.preventDefault&&u.preventDefault(),!0}}function i0(u,e){for(const t in e){const n=e[t],C=u[t];if(typeof n=="string"){if(n!==C)return!1}else if(!Qu(C)||C.length!==n.length||n.some((r,i)=>r!==C[i]))return!1}return!0}function di(u){return u?u.aliasOf?u.aliasOf.path:u.path:""}const pi=(u,e,t)=>u!=null?u:e!=null?e:t,a0=Yt({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(u,{attrs:e,slots:t}){const n=fe(kC),C=pu(()=>u.route||n.value),r=fe(Bi,0),i=pu(()=>{let l=rt(r);const{matched:s}=C.value;let f;for(;(f=s[l])&&!f.components;)l++;return l}),a=pu(()=>C.value.matched[i.value]);dn(Bi,pu(()=>i.value+1)),dn(e0,a),dn(kC,C);const o=Gt();return ze(()=>[o.value,a.value,u.name],([l,s,f],[D,p,_])=>{s&&(s.instances[f]=l,p&&p!==s&&l&&l===D&&(s.leaveGuards.size||(s.leaveGuards=p.leaveGuards),s.updateGuards.size||(s.updateGuards=p.updateGuards))),l&&s&&(!p||!Bt(s,p)||!D)&&(s.enterCallbacks[f]||[]).forEach(T=>T(l))},{flush:"post"}),()=>{const l=C.value,s=u.name,f=a.value,D=f&&f.components[s];if(!D)return Ai(t.default,{Component:D,route:l});const p=f.props[s],_=p?p===!0?l.params:typeof p=="function"?p(l):p:null,x=Hn(D,ru({},_,e,{onVnodeUnmounted:A=>{A.component.isUnmounted&&(f.instances[s]=null)},ref:o}));return Ai(t.default,{Component:x,route:l})||x}}});function Ai(u,e){if(!u)return null;const t=u(e);return t.length===1?t[0]:t}const o0=a0;function s0(u){const e=Rc(u.routes,u),t=u.parseQuery||Zc,n=u.stringifyQuery||fi,C=u.history,r=_t(),i=_t(),a=_t(),o=hs(ve);let l=ve;Ze&&u.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const s=tC.bind(null,g=>""+g),f=tC.bind(null,Qc),D=tC.bind(null,_n);function p(g,M){let S,L;return Va(g)?(S=e.getRecordMatcher(g),L=M):L=g,e.addRoute(L,S)}function _(g){const M=e.getRecordMatcher(g);M&&e.removeRoute(M)}function T(){return e.getRoutes().map(g=>g.record)}function x(g){return!!e.getRecordMatcher(g)}function A(g,M){if(M=ru({},M||o.value),typeof g=="string"){const G=nC(t,g,M.path),c=e.resolve({path:G.path},M),B=C.createHref(G.fullPath);return ru(G,c,{params:D(c.params),hash:_n(G.hash),redirectedFrom:void 0,href:B})}let S;if("path"in g)S=ru({},g,{path:nC(t,g.path,M.path).path});else{const G=ru({},g.params);for(const c in G)G[c]==null&&delete G[c];S=ru({},g,{params:f(g.params)}),M.params=f(M.params)}const L=e.resolve(S,M),Cu=g.hash||"";L.params=s(D(L.params));const cu=cc(n,ru({},g,{hash:Yc(Cu),path:L.path})),q=C.createHref(cu);return ru({fullPath:cu,hash:Cu,query:n===fi?u0(g.query):g.query||{}},L,{redirectedFrom:void 0,href:q})}function E(g){return typeof g=="string"?nC(t,g,o.value.path):ru({},g)}function j(g,M){if(l!==g)return Dt(8,{from:M,to:g})}function z(g){return K(g)}function H(g){return z(ru(E(g),{replace:!0}))}function nu(g){const M=g.matched[g.matched.length-1];if(M&&M.redirect){const{redirect:S}=M;let L=typeof S=="function"?S(g):S;return typeof L=="string"&&(L=L.includes("?")||L.includes("#")?L=E(L):{path:L},L.params={}),ru({query:g.query,hash:g.hash,params:"path"in L?{}:g.params},L)}}function K(g,M){const S=l=A(g),L=o.value,Cu=g.state,cu=g.force,q=g.replace===!0,G=nu(S);if(G)return K(ru(E(G),{state:typeof G=="object"?ru({},Cu,G.state):Cu,force:cu,replace:q}),M||S);const c=S;c.redirectedFrom=M;let B;return!cu&&fc(n,L,S)&&(B=Dt(16,{to:c,from:L}),Ye(L,L,!0,!1)),(B?Promise.resolve(B):iu(c,L)).catch(d=>se(d)?se(d,2)?d:Mu(d):lu(d,c,L)).then(d=>{if(d){if(se(d,2))return K(ru({replace:q},E(d.to),{state:typeof d.to=="object"?ru({},Cu,d.to.state):Cu,force:cu}),M||c)}else d=Pu(c,L,!0,q,Cu);return Su(c,L,d),d})}function Q(g,M){const S=j(g,M);return S?Promise.reject(S):Promise.resolve()}function iu(g,M){let S;const[L,Cu,cu]=l0(g,M);S=CC(L.reverse(),"beforeRouteLeave",g,M);for(const G of L)G.leaveGuards.forEach(c=>{S.push(ye(c,g,M))});const q=Q.bind(null,g,M);return S.push(q),Qe(S).then(()=>{S=[];for(const G of r.list())S.push(ye(G,g,M));return S.push(q),Qe(S)}).then(()=>{S=CC(Cu,"beforeRouteUpdate",g,M);for(const G of Cu)G.updateGuards.forEach(c=>{S.push(ye(c,g,M))});return S.push(q),Qe(S)}).then(()=>{S=[];for(const G of g.matched)if(G.beforeEnter&&!M.matched.includes(G))if(Qu(G.beforeEnter))for(const c of G.beforeEnter)S.push(ye(c,g,M));else S.push(ye(G.beforeEnter,g,M));return S.push(q),Qe(S)}).then(()=>(g.matched.forEach(G=>G.enterCallbacks={}),S=CC(cu,"beforeRouteEnter",g,M),S.push(q),Qe(S))).then(()=>{S=[];for(const G of i.list())S.push(ye(G,g,M));return S.push(q),Qe(S)}).catch(G=>se(G,8)?G:Promise.reject(G))}function Su(g,M,S){for(const L of a.list())L(g,M,S)}function Pu(g,M,S,L,Cu){const cu=j(g,M);if(cu)return cu;const q=M===ve,G=Ze?history.state:{};S&&(L||q?C.replace(g.fullPath,ru({scroll:q&&G&&G.scroll},Cu)):C.push(g.fullPath,Cu)),o.value=g,Ye(g,M,S,q),Mu()}let Ru;function he(){Ru||(Ru=C.listen((g,M,S)=>{if(!bt.listening)return;const L=A(g),Cu=nu(L);if(Cu){K(ru(Cu,{replace:!0}),L).catch(xt);return}l=L;const cu=o.value;Ze&&gc(Ci(cu.fullPath,S.delta),$n()),iu(L,cu).catch(q=>se(q,12)?q:se(q,2)?(K(q.to,L).then(G=>{se(G,20)&&!S.delta&&S.type===zt.pop&&C.go(-1,!1)}).catch(xt),Promise.reject()):(S.delta&&C.go(-S.delta,!1),lu(q,L,cu))).then(q=>{q=q||Pu(L,cu,!1),q&&(S.delta&&!se(q,8)?C.go(-S.delta,!1):S.type===zt.pop&&se(q,20)&&C.go(-1,!1)),Su(L,cu,q)}).catch(xt)}))}let Wu=_t(),vu=_t(),bu;function lu(g,M,S){Mu(g);const L=vu.list();return L.length?L.forEach(Cu=>Cu(g,M,S)):console.error(g),Promise.reject(g)}function au(){return bu&&o.value!==ve?Promise.resolve():new Promise((g,M)=>{Wu.add([g,M])})}function Mu(g){return bu||(bu=!g,he(),Wu.list().forEach(([M,S])=>g?S(g):M()),Wu.reset()),g}function Ye(g,M,S,L){const{scrollBehavior:Cu}=u;if(!Ze||!Cu)return Promise.resolve();const cu=!S&&vc(Ci(g.fullPath,0))||(L||!S)&&history.state&&history.state.scroll||null;return ur().then(()=>Cu(g,M,cu)).then(q=>q&&hc(q)).catch(q=>lu(q,g,M))}const oe=g=>C.go(g);let Zu;const zu=new Set,bt={currentRoute:o,listening:!0,addRoute:p,removeRoute:_,hasRoute:x,getRoutes:T,resolve:A,options:u,push:z,replace:H,go:oe,back:()=>oe(-1),forward:()=>oe(1),beforeEach:r.add,beforeResolve:i.add,afterEach:a.add,onError:vu.add,isReady:au,install(g){const M=this;g.component("RouterLink",C0),g.component("RouterView",o0),g.config.globalProperties.$router=M,Object.defineProperty(g.config.globalProperties,"$route",{enumerable:!0,get:()=>rt(o)}),Ze&&!Zu&&o.value===ve&&(Zu=!0,z(C.location).catch(Cu=>{}));const S={};for(const Cu in ve)S[Cu]=pu(()=>o.value[Cu]);g.provide(sr,M),g.provide(eo,ht(S)),g.provide(kC,o);const L=g.unmount;zu.add(g),g.unmount=function(){zu.delete(g),zu.size<1&&(l=ve,Ru&&Ru(),Ru=null,o.value=ve,Zu=!1,bu=!1),L()}}};return bt}function Qe(u){return u.reduce((e,t)=>e.then(()=>t()),Promise.resolve())}function l0(u,e){const t=[],n=[],C=[],r=Math.max(e.matched.length,u.matched.length);for(let i=0;i<r;i++){const a=e.matched[i];a&&(u.matched.find(l=>Bt(l,a))?n.push(a):t.push(a));const o=u.matched[i];o&&(e.matched.find(l=>Bt(l,o))||C.push(o))}return[t,n,C]}const Le={KO:"ko",EN:"en",JP:"jp"},Ke=Ja("lang",()=>{const u=Gt(Le.KO);function e(t){u.value=t}return{lang:u,changeLang:e}}),It={LIGHT:"light",DARK:"dark"},gt=Ja("theme",()=>{const u=Gt(It.LIGHT);function e(t){u.value=t}return{theme:u,changeTheme:e}}),c0={data(){return{headerOuter:"headerOuter",headerMenuPC:"menuPC",headerMenuMO:"menuMO",menuText:"menuText",langFloat:"langFloat",mobileFloat:"mobileFloat",menuItem:"menuItem",menuItemDis:"menuItem disabled"}},methods:{openLangMenu:()=>{document.getElementById("langMenu").style.display="flex"},openMobileMenu:()=>{document.getElementById("mobileMenu").style.display="flex"},closeLangMenu:()=>{document.getElementById("langMenu").style.display="none"},closeMobileMenu:()=>{document.getElementById("mobileMenu").style.display="none"},changeLang:u=>{Ke().changeLang(u===0?Le.KO:u===1?Le.EN:Le.JP),location.reload()},changeTheme:()=>{const u=gt(),e=u.theme===It.LIGHT?It.DARK:It.LIGHT;u.changeTheme(e),location.reload()},construction:()=>{alert("Translation is under construction")}},created(){const u=Ke();u.lang||u.changeLang(Le.KO)}};const ku=(u,e)=>{const t=u.__vccOpts||u;for(const[n,C]of e)t[n]=C;return t},f0=wu("Home"),B0=wu("About"),D0=wu("Tech Stack"),d0=wu("Project"),p0=wu("Link"),A0=wu("Home"),m0=wu("About"),h0=wu("Tech Stack"),g0=wu("Project"),v0=wu("Link");function b0(u,e,t,n,C,r){const i=Eu("RouterLink"),a=Eu("font-awesome-icon");return J(),X(hu,null,[h("section",{class:m(C.headerOuter)},[h("div",{class:m(C.headerMenuPC)},[N(i,{to:"/",class:m(C.menuText)},{default:Ju(()=>[f0]),_:1},8,["class"]),N(i,{to:"/about",class:m(C.menuText)},{default:Ju(()=>[B0]),_:1},8,["class"]),N(i,{to:"/tech",class:m(C.menuText)},{default:Ju(()=>[D0]),_:1},8,["class"]),N(i,{to:"/project",class:m(C.menuText)},{default:Ju(()=>[d0]),_:1},8,["class"]),N(i,{to:"/link",class:m(C.menuText)},{default:Ju(()=>[p0]),_:1},8,["class"]),h("div",{class:m(C.menuText),onClick:e[0]||(e[0]=(...o)=>r.openLangMenu&&r.openLangMenu(...o))},"Lang",2),h("div",{class:m(C.menuText),onClick:e[1]||(e[1]=(...o)=>r.changeTheme&&r.changeTheme(...o))},"Theme",2)],2),h("div",{class:m(C.headerMenuMO)},[h("div",{class:m(C.menuText),onClick:e[2]||(e[2]=(...o)=>r.openMobileMenu&&r.openMobileMenu(...o))},"Menu",2),h("div",{class:m(C.menuText),onClick:e[3]||(e[3]=(...o)=>r.openLangMenu&&r.openLangMenu(...o))},"Lang",2),h("div",{class:m(C.menuText),onClick:e[4]||(e[4]=(...o)=>r.changeTheme&&r.changeTheme(...o))},"Theme",2)],2)],2),h("div",{class:m(C.langFloat),id:"langMenu"},[h("div",{class:m(C.menuItem),onClick:e[5]||(e[5]=o=>r.changeLang(0))},"\uD55C\uAD6D\uC5B4",2),h("div",{class:m(C.menuItemDis),onClick:e[6]||(e[6]=o=>r.construction())},"English",2),h("div",{class:m(C.menuItemDis),onClick:e[7]||(e[7]=o=>r.construction())},"\u65E5\u672C\u8A9E",2),h("div",{class:m(C.menuItem),onClick:e[8]||(e[8]=(...o)=>r.closeLangMenu&&r.closeLangMenu(...o))},[N(a,{icon:"fa-solid fa-circle-xmark"})],2)],2),h("div",{class:m(C.mobileFloat),id:"mobileMenu"},[N(i,{class:m(C.menuItem),to:"/"},{default:Ju(()=>[A0]),_:1},8,["class"]),N(i,{class:m(C.menuItem),to:"/about"},{default:Ju(()=>[m0]),_:1},8,["class"]),N(i,{class:m(C.menuItem),to:"/tech"},{default:Ju(()=>[h0]),_:1},8,["class"]),N(i,{class:m(C.menuItem),to:"/project"},{default:Ju(()=>[g0]),_:1},8,["class"]),N(i,{class:m(C.menuItem),to:"/link"},{default:Ju(()=>[v0]),_:1},8,["class"]),h("div",{class:m(C.menuItem),onClick:e[9]||(e[9]=(...o)=>r.closeMobileMenu&&r.closeMobileMenu(...o))},[N(a,{icon:"fa-solid fa-circle-xmark"})],2)],2)],64)}const E0=ku(c0,[["render",b0],["__scopeId","data-v-5e918760"]]),y0={data(){return{footer:"footer"}}};function _0(u,e,t,n,C,r){return J(),X("section",{class:m(C.footer)},"(c) 2023 Nira / Made with vue 3 + pinia",2)}const F0=ku(y0,[["render",_0],["__scopeId","data-v-918acd6c"]]),k0={components:{HeaderView:E0,FooterView:F0},data(){return{view:gt().theme===It.LIGHT?"view":"view dark"}}};function w0(u,e,t,n,C,r){const i=Eu("HeaderView"),a=Eu("RouterView"),o=Eu("FooterView");return J(),X("div",{class:m(C.view)},[N(i),N(a),N(o)],2)}const S0=ku(k0,[["render",w0],["__scopeId","data-v-4d801652"]]),x0={props:{iconUrl:String,iconUrlWhite:String,text:String,desc:String,href:String},data:()=>{const u=gt().theme;return{btnAll:u==="light"?"btn":"btn btndark",btnTop:"top",btnBottom:"bottom",theme:u}},methods:{moveToLink:function(){const u=this.$props.href;u?window.location.href=u:console.error("no link")}}};const P0=["src"];function I0(u,e,t,n,C,r){return J(),X("button",{class:m(u.btnAll),onClick:e[0]||(e[0]=(...i)=>r.moveToLink&&r.moveToLink(...i))},[h("div",{class:m(u.btnTop)},[h("img",{src:u.theme==="light"?t.iconUrl:t.iconUrlWhite},null,8,P0),h("span",null,eu(t.text),1)],2),h("div",{class:m(u.btnBottom)},[h("span",null,eu(t.desc),1)],2)],2)}const T0=ku(x0,[["render",I0]]),at={ko:{desc:"\uCF54\uB4DC\uB85C \uB9CE\uC740 \uC0AC\uB78C\uB4E4\uC5D0\uAC8C \uB2E4\uAC00\uAC00\uACE0 \uC2F6\uC740 \uAC1C\uBC1C\uC790\uC785\uB2C8\uB2E4",btn:{about:"Nira\uB97C \uC18C\uAC1C\uD569\uB2C8\uB2E4",tech:"\uC0AC\uC6A9 \uAC00\uB2A5\uD55C \uAE30\uC220 \uC2A4\uD0DD",proj:"\uC9C4\uD589 \uD504\uB85C\uC81D\uD2B8 \uBAA9\uB85D",link:"\uAD00\uB828 \uB9C1\uD06C"}},en:{desc:"A developer who wants to approach to many people",btn:{about:"Introduce myself",tech:"Usable technical stack",proj:"Experienced projects",link:"Related link"}},jp:{desc:"\u30B3\u30FC\u30C9\u3067\u6CA2\u5C71\u306E\u4EBA\u306B\u8FD1\u3065\u304D\u305F\u3044\u30C7\u30D9\u30ED\u30C3\u30D1\u30FC\u3067\u3059",btn:{about:"Nira\u3092\u7D39\u4ECB\u3057\u307E\u3059",tech:"\u6280\u8853\u30B9\u30BF\u30C3\u30AF",proj:"\u9032\u884C\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8",link:"\u95A2\u9023\u30EA\u30F3\u30AF"}}},j0={data(){const u=Ke().lang;return{title:"title",titleName:"titleName",titleDesc:"titleDesc",TxtMain:u==="ko"?at.ko:u==="jp"?at.jp:at.en}}};function O0(u,e,t,n,C,r){return J(),X("div",{class:m(C.title)},[h("div",{class:m(C.titleName)},"Nira",2),h("div",{class:m(C.titleDesc)},eu(C.TxtMain.desc),3)],2)}const R0=ku(j0,[["render",O0],["__scopeId","data-v-2d6cf848"]]),M0={name:"MainView",components:{MainButton:T0,MainTitle:R0},data(){const u=Ke().lang;return{view:"view",TxtMain:u==="ko"?at.ko:u==="jp"?at.jp:at.en}}};function L0(u,e,t,n,C,r){const i=Eu("MainTitle"),a=Eu("MainButton");return J(),X(hu,null,[N(i),h("div",{class:m(C.view)},[N(a,{iconUrl:"/main/icon_about.png",iconUrlWhite:"/main/icon_about_white.png",text:"About",desc:C.TxtMain.btn.about,href:"/about"},null,8,["desc"]),N(a,{iconUrl:"/main/icon_tech.png",iconUrlWhite:"/main/icon_tech_white.png",text:"Tech Stack",desc:C.TxtMain.btn.tech,href:"/tech"},null,8,["desc"]),N(a,{iconUrl:"/main/icon_proj.png",iconUrlWhite:"/main/icon_proj_white.png",text:"Project",desc:C.TxtMain.btn.proj,href:"/project"},null,8,["desc"]),N(a,{iconUrl:"/main/icon_link.png",iconUrlWhite:"/main/icon_link_white.png",text:"Link",desc:C.TxtMain.btn.link,href:"/link"},null,8,["desc"])],2)],64)}const N0=ku(M0,[["render",L0],["__scopeId","data-v-dd1c2a76"]]),U0=[{date:"2021.09-2022.08",company:"\uC8FC\uC2DD\uD68C\uC0AC \uD14C\uB77C\uD540",type:"\uC6F9\uD230, \uC6F9\uC18C\uC124 \uC81C\uC791 \uBC0F \uC11C\uBE44\uC2A4",work:"\uC6F9\uD230 \uD50C\uB7AB\uD3FC \uAC1C\uBC1C",etc:"",tech:"TypeScript, ReactJS, NextJS, Redux \uB4F1"},{date:"2015.05-2020.05",company:"\uD55C\uAD6D\uC804\uC790\uC778\uC99D / AIBrain",type:"\uAE08\uC735, \uBCF4\uC548, AI",work:"R&D, \uC18C\uD504\uD2B8\uC6E8\uC5B4 \uAC1C\uBC1C",etc:"\uC804\uBB38\uC5F0\uAD6C\uC694\uC6D0\uC73C\uB85C \uB300\uCCB4\uBCF5\uBB34 \uC9C4\uD589",tech:"JavaScript, TypeScript, ReactJS (Web Frontend) / Java, Kotlin (Server, Android) / Unity3D (Game, Tool)"},{date:"2013.03-2015.02",company:"\uBD80\uC0B0\uB300\uD559\uAD50 \uC804\uAE30\uC804\uC790\uCEF4\uD4E8\uD130\uACF5\uD559\uBD80 \uC18C\uD504\uD2B8\uC6E8\uC5B4\uACF5\uD559 \uC5F0\uAD6C\uC2E4",type:"\uB300\uD559\uC6D0 \uC5F0\uAD6C\uC2E4",work:"\uC5F0\uAD6C, R&D",etc:"\uC11D\uC0AC\uD559\uC704 \uCDE8\uB4DD",tech:"JavaScript (web \uAC1C\uBC1C), Java (R&D, Android)"}],W0=[{date:"2021.09-2022.08",company:"Terapin Studio",type:"Webtoon, Web novel service",work:"Webtoon platform development",etc:"",tech:"TypeScript, ReactJS, NextJS, Redux, etc."},{date:"2015.05-2020.05",company:"CrossCert / AIBrain",type:"Finance, Security, AI",work:"R&D, Software Development",etc:"Alternative service for army",tech:"JavaScript, TypeScript, ReactJS (Web Frontend) / Java, Kotlin (Server, Android) / Unity3D (Game, Tool)"},{date:"2013.03-2015.02",company:"Pusan National University Software Engineering Lab",type:"Graduate School Lab",work:"Research and Development",etc:"Got Master degree",tech:"JavaScript (web dev), Java (R&D, Android)"}],z0=[{date:"2021.09-2022.08",company:"\u30C6\u30E9\u30D4\u30F3\u30FB\u30B9\u30BF\u30B8\u30AA",type:"\u30A6\u30A7\u30D6\u6F2B\u753B\u30FB\u30A6\u30A7\u30D6\u5C0F\u8AAC\u306E\u5236\u4F5C\u53CA\u3073\u30B5\u30FC\u30D3\u30B9",work:"\u30A6\u30A7\u30D6\u6F2B\u753B\u30D7\u30E9\u30C3\u30C8\u30D5\u30A9\u30FC\u30E0\u958B\u767A",etc:"",tech:"TypeScript, ReactJS, NextJS, Redux \u306A\u3069"},{date:"2015.05-2020.05",company:"\u97D3\u56FD\u96FB\u5B50\u8A8D\u8A3C / AIBrain",type:"\u91D1\u878D, \u30BB\u30AD\u30E5\u30EA\u30C6\u30A3, AI",work:"R&D, \u30BD\u30D5\u30C8\u30A6\u30A7\u30A2\u958B\u767A",etc:"\u8ECD\u968A\u306E\u4EE3\u66FF\u670D\u52D9\u3068\u3057\u3066\u4ED5\u4E8B\u3092\u3057\u307E\u3057\u305F",tech:"JavaScript, TypeScript, ReactJS (Web Frontend) / Java, Kotlin (Server, Android) / Unity3D (Game, Tool)"},{date:"2013.03-2015.02",company:"\u91DC\u5C71\u5927\u5B66\u6821\u30BD\u30D5\u30C8\u30A6\u30A7\u30A2\u5DE5\u5B66\u7814\u7A76\u5BA4",type:"\u5927\u5B66\u9662\u306E\u7814\u7A76\u5BA4",work:"\u7814\u7A76, R&D",etc:"\u4FEE\u58EB\u5B66\u4F4D\u53D6\u5F97",tech:"JavaScript (web\u958B\u767A), Java (R&D, Android)"}],rC={ko:{introTitle:"\uC18C\uAC1C",introData:["\uAC1C\uBC1C \uADF8 \uC790\uCCB4\uC5D0 \uD765\uBBF8\uB97C \uAC16\uACE0 \uB2E4\uC591\uD55C \uBD84\uC57C\uC5D0 \uB300\uD574 \uACF5\uBD80\uD558\uACE0 \uC788\uB294 \uAC1C\uBC1C\uC790\uC785\uB2C8\uB2E4","\uD604\uC7AC\uB294 \uC6F9 \uAC1C\uBC1C\uC5D0 \uC7AC\uBBF8\uB97C \uB290\uB07C\uACE0 \uC6F9\uC5D0 \uC9D1\uC911\uD558\uAE30 \uC704\uD55C \uACF5\uBD80\uB97C \uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4","\uC5C5\uBB34 \uBC0F \uAC1C\uC778 \uD504\uB85C\uC81D\uD2B8\uB85C \uC6F9 \uC11C\uBE44\uC2A4\uB97C \uB9CC\uB4E4\uC5B4 \uC11C\uBE44\uC2A4 \uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4","\uC774\uC804\uC5D0\uB294 \uC5C5\uBB34\uC5D0\uC11C Java/Kotlin\uC744 \uC774\uC6A9\uD558\uC5EC \uC11C\uBC84, \uC0AC\uB0B4 \uD50C\uB7AB\uD3FC, \uAC8C\uC784 \uB4F1 \uB2E4\uC591\uD55C \uD504\uB85C\uC81D\uD2B8\uB97C \uACBD\uD5D8\uD588\uC2B5\uB2C8\uB2E4","Android \uAC1C\uBC1C \uBC0F \uC571 \uCD9C\uC2DC \uACBD\uD5D8\uB3C4 \uC788\uC73C\uBA70, Unity\uB97C \uC774\uC6A9\uD55C \uAC8C\uC784 \uC81C\uC791 \uB4F1\uC5D0\uB3C4 \uD765\uBBF8\uAC00 \uC788\uC2B5\uB2C8\uB2E4"],expTitle:"\uC77C \uD574\uBCF8 \uACBD\uD5D8",expData:U0},en:{introTitle:"Introduction",introData:["A developer who has interest in development itself, and studying in various category","Currently stuyding web development","I made several work / personal projects with web development","Before web, I developed server, internal company platform, game and so on using Java/Kotlin","Experienced Android dev and app release, and interested in Unity game dev too"],expTitle:"Work experiences",expData:W0},jp:{introTitle:"\u7D39\u4ECB",introData:["\u958B\u767A\u305D\u306E\u3082\u306E\u306B\u8208\u5473\u3092\u6301\u3063\u3066\u69D8\u3005\u306A\u30AB\u30C6\u30B4\u30EA\u306E\u52C9\u5F37\u3092\u3057\u3066\u3044\u307E\u3059","\u73FE\u5728\u306F\u30A6\u30A7\u30D6\u958B\u767A\u306B\u9762\u767D\u3055\u3092\u611F\u3058\u3066\u96C6\u4E2D\u3057\u3066\u3044\u307E\u3059","\u696D\u52D9\u30FB\u500B\u4EBA\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3067\u30A6\u30A7\u30D6\u30B5\u30FC\u30D3\u30B9\u3092\u4F5C\u6210\u30FB\u30B5\u30FC\u30D3\u30B9\u3057\u3066\u3044\u307E\u3059","\u4EE5\u524D\u306F\u696D\u52D9\u3067Java/Kotlin\u3092\u4F7F\u3063\u305F\u30B5\u30FC\u30D0\u30FC\u3001\u793E\u5185\u306E\u30D7\u30E9\u30C3\u30C8\u30D5\u30A9\u30FC\u30E0\u3001\u30B2\u30FC\u30E0\u306A\u3069\u306E\u69D8\u3005\u306A\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u7D4C\u9A13\u3057\u307E\u3057\u305F","Android\u958B\u767A\u3068\u30A2\u30D7\u30EA\u306E\u30EA\u30EA\u30FC\u30B9\u7D4C\u9A13\u304C\u3042\u308A\u3001Unity\u306E\u30B2\u30FC\u30E0\u958B\u767A\u306B\u3082\u8208\u5473\u304C\u3042\u308A\u307E\u3059"],expTitle:"\u4ED5\u4E8B\u306E\u7D4C\u9A13",expData:z0}},H0={props:{dateStr:String,companyStr:String,typeStr:String,workStr:String,techStr:String,etcStr:String},data(){return{box:"box",date:"date",wrap:"wrap",itemTitle:"itemTitle"}}};function J0(u,e,t,n,C,r){return J(),X("div",{class:m(C.box)},[h("div",{class:m(C.date)},eu(t.dateStr),3),h("div",{class:m(C.wrap)},[h("div",{class:m(C.itemTitle)},"Worked at",2),h("div",null,eu(t.companyStr),1)],2),h("div",{class:m(C.wrap)},[h("div",{class:m(C.itemTitle)},"Company category",2),h("div",null,eu(t.typeStr),1)],2),h("div",{class:m(C.wrap)},[h("div",{class:m(C.itemTitle)},"Works",2),h("div",null,eu(t.workStr),1)],2),h("div",{class:m(C.wrap)},[h("div",{class:m(C.itemTitle)},"Tech used",2),h("div",null,eu(t.techStr),1)],2),t.etcStr&&t.etcStr.length>0?(J(),X("div",{key:0,class:m(C.wrap)},[h("div",{class:m(C.itemTitle)},"etc",2),h("div",null,eu(t.etcStr),1)],2)):ie("",!0)],2)}const $0=ku(H0,[["render",J0],["__scopeId","data-v-11db767b"]]),K0={name:"About",components:{WorkExp:$0},data(){const u=Ke().lang,e=gt().theme;return{about:"about",title:"title",aboutWrapper:"aboutWrapper",aboutBox:e==="light"?"aboutBox aboutLight":"aboutBox aboutDark",subtitle:"subtitle",content:"content",contentWrap:"contentWrap",contentAbout:"contentAbout",TxtAbout:u===Le.KO?rC.ko:u===Le.JP?rC.jp:rC.en}}};const V0=wu(" About ");function G0(u,e,t,n,C,r){const i=Eu("font-awesome-icon"),a=Eu("WorkExp");return J(),X("div",{class:m(C.about)},[h("div",{class:m(C.title)},[N(i,{icon:"fa-solid fa-angle-double-right"}),V0,N(i,{icon:"fa-solid fa-angle-double-left"})],2),h("div",{class:m(C.aboutWrapper)},[h("div",{class:m(C.aboutBox)},[h("div",{class:m(C.subtitle)},[N(i,{icon:"fa-solid fa-angle-right"}),wu(" "+eu(C.TxtAbout.introTitle)+" ",1),N(i,{icon:"fa-solid fa-angle-left"})],2),h("div",{class:m(C.contentAbout)},[h("ul",null,[h("li",null,eu(C.TxtAbout.introData[0]),1),h("li",null,eu(C.TxtAbout.introData[1]),1),h("li",null,eu(C.TxtAbout.introData[2]),1),h("li",null,eu(C.TxtAbout.introData[3]),1),h("li",null,eu(C.TxtAbout.introData[4]),1)])],2)],2),h("div",{class:m(C.aboutBox)},[h("div",{class:m(C.subtitle)},[N(i,{icon:"fa-solid fa-angle-right"}),wu(" "+eu(C.TxtAbout.expTitle)+" ",1),N(i,{icon:"fa-solid fa-angle-left"})],2),h("div",{class:m(C.contentWrap)},[(J(!0),X(hu,null,we(C.TxtAbout.expData,o=>(J(),X("div",{class:m(C.content)},[N(a,{dateStr:o.date,companyStr:o.company,workStr:o.work,typeStr:o.type,techStr:o.tech,etcStr:o.etc},null,8,["dateStr","companyStr","workStr","typeStr","techStr","etcStr"])],2))),256))],2)],2)],2)],2)}const Y0=ku(K0,[["render",G0],["__scopeId","data-v-c9eb2abd"]]),q0={props:{title:String,src:String},data(){return{linkWrap:"linkWrap",linkTitle:"linkTitle",linkSrc:"linkSrc"}},methods:{openLink:function(){window.open(this.$props.src,"_blank","noreferrer noopener")}}};function X0(u,e,t,n,C,r){return J(),X("div",{class:m(C.linkWrap)},[h("div",{class:m(C.linkTitle)},eu(u.$props.title),3),h("div",{class:m(C.linkSrc),"on:click":e[0]||(e[0]=(...i)=>r.openLink&&r.openLink(...i))},eu(u.$props.src),35)],2)}const Q0=ku(q0,[["render",X0],["__scopeId","data-v-d3684ad1"]]),Z0={data(){return{link:"link",title:"title",wrapper:"wrapper"}},components:{LinkItemVue:Q0}};const uf=wu(" Link ");function ef(u,e,t,n,C,r){const i=Eu("font-awesome-icon"),a=Eu("LinkItemVue");return J(),X("div",{class:m(C.link)},[h("div",{class:m(C.title)},[N(i,{icon:"fa-solid fa-angle-double-right"}),uf,N(i,{icon:"fa-solid fa-angle-double-left"})],2),h("div",{class:m(C.wrapper)},[N(a,{title:"Blog",src:"https://prunusnira.tistory.com"}),N(a,{title:"GitHub",src:"https://github.com/prunusnira"}),N(a,{title:"Skill Navigator",src:"https://sin.nira.one"}),N(a,{title:"PIU Clear Manager",src:"https://piu.nira.one"}),N(a,{title:"Twitch BanPicker",src:"https://banpick.nira.one"})],2)],2)}const tf=ku(Z0,[["render",ef],["__scopeId","data-v-31c7705e"]]),nf={props:{item:Object},data:()=>{const u=Ke().lang,e=gt().theme;return{wrap:e==="light"?"wrap wrapLight":"wrap wrapDark",header:"header",headerLeft:"headerLeft",icon:"icon",titlewrap:"titlewrap",title:"title",subtitle:"subtitle",type:"type",bottomWrap:e==="light"?"bottomWrap bottomLight":"bottomWrap bottomDark",itemTitle:"itemTitle",bottomItem:"bottomItem",itemImgWrap:"itemImgWrap",itemImg:"itemImg",isOpen:!1,lang:u}},methods:{changeOpen:function(){this.isOpen=!this.isOpen}},computed:{cssVariable(){return{"--isOpen":this.isOpen?"visible":"hidden","--height":this.isOpen?"auto":"0","--pval":this.isOpen?"20px":"0"}}}};const Cf=["src"],rf=["href"],af=["innerHTML"],of=["innerHTML"],sf=["href"],lf=["src"];function cf(u,e,t,n,C,r){return J(),X("div",{class:m(u.wrap)},[h("div",{class:m(u.header),onClick:e[0]||(e[0]=i=>r.changeOpen())},[h("div",{class:m(u.headerLeft)},[h("img",{class:m(u.icon),src:t.item.icon},null,10,Cf),h("div",{class:m(u.titlewrap)},[h("div",{class:m(u.title)},eu(t.item.title[u.lang]),3),h("div",{class:m(u.subtitle)},eu(t.item.simpledesc[u.lang]),3)],2)],2),h("div",{class:m(u.type)},eu(t.item.platform),3)],2),h("div",{id:"bottom",class:m(u.bottomWrap),style:In(r.cssVariable)},[h("div",{class:m(u.bottomItem)},[h("div",{class:m(u.itemTitle)},"Platform",2),h("div",null,eu(t.item.platform),1)],2),h("div",{class:m(u.bottomItem)},[h("div",{class:m(u.itemTitle)},"Period",2),h("div",null,eu(t.item.period),1)],2),h("div",{class:m(u.bottomItem)},[h("div",{class:m(u.itemTitle)},"Tech",2),h("div",null,eu(t.item.tech),1)],2),t.item.link.length>0?(J(),X("div",{key:0,class:m(u.bottomItem)},[h("div",{class:m(u.itemTitle)},"Link",2),(J(!0),X(hu,null,we(t.item.link,i=>(J(),X("div",null,[h("a",{href:i},eu(i),9,rf)]))),256))],2)):ie("",!0),h("div",{class:m(u.bottomItem)},[h("span",{class:m(u.itemTitle)},"About",2),h("div",{innerHTML:t.item.content[u.lang]},null,8,af)],2),h("div",{class:m(u.bottomItem)},[h("span",{class:m(u.itemTitle)},"Development",2),h("div",{innerHTML:t.item.dev[u.lang]},null,8,of)],2),h("div",{class:m(u.bottomItem)},[h("div",{class:m(u.itemTitle)},"Images",2),h("div",{class:m(u.itemImgWrap)},[(J(!0),X(hu,null,we(t.item.image,i=>(J(),X("a",{href:i,target:"_blank",rel:"noopener noreferrer"},[h("img",{class:m(u.itemImg),src:i},null,10,lf)],8,sf))),256))],2)],2)],6)],2)}const ff=ku(nf,[["render",cf],["__scopeId","data-v-0352ae3e"]]),Bf={props:{arr:Object,type:String},components:{ProjItemVue:ff},data(){return{title:"title",projBox:"projBox"}}};function Df(u,e,t,n,C,r){const i=Eu("ProjItemVue");return J(),X("div",null,[h("div",{class:m(C.title)},eu(t.type),3),h("div",{class:m(C.projBox)},[(J(!0),X(hu,null,we(t.arr,a=>(J(),He(i,{item:a},null,8,["item"]))),256))],2)])}const df=ku(Bf,[["render",Df],["__scopeId","data-v-0ef04d20"]]),pf=[{icon:"/project/sin/icon.png",title:{ko:"Skill Navigator",jp:"Skill Navigator",en:"Skill Navigator"},simpledesc:{ko:"\uB9AC\uB4EC\uAC8C\uC784 GITADORA \uC2DC\uB9AC\uC988\uC758 \uAE30\uB85D \uAD00\uB9AC \uC0AC\uC774\uD2B8",jp:"\u97F3\u30B2\u30FCGITADORA\u30B7\u30EA\u30FC\u30BA\u306E\u8A18\u9332\u7BA1\u7406\u30B5\u30FC\u30D3\u30B9",en:"Data management service for rhythm game GITADORA series"},platform:"Web",tech:"ReactJS (TypeScript), Spring Boot (Kotlin), MariaDB, nginx, MobX, styled-components, etc",period:"2016.04~",link:["https://sin.nira.one","https://github.com/prunusnira/gdinfo-react","https://github.com/prunusnira/gdinfo-server"],content:{ko:`<ul>
              <li>\uB9AC\uB4EC\uAC8C\uC784 GITADORA \uC2DC\uB9AC\uC988\uC758 \uAC1C\uC778 \uAE30\uB85D\uC744 \uAD00\uB9AC\uD574\uC8FC\uB294 \uC6F9 \uC11C\uBE44\uC2A4</li>
              <li>\uACF5\uC2DD\uC5D0\uC11C \uC9C0\uC6D0\uD558\uC9C0 \uC54A\uB294 \uBD80\uAC00\uC801\uC778 \uAE30\uB2A5\uC744 \uC81C\uACF5</li>
              <li>(2020\uB144 2\uC6D4 \uAE30\uC900) \uB4F1\uB85D \uACC4\uC815 \uC218 3800 (\uD55C\uAD6D/\uC77C\uBCF8/\uAE30\uD0C0 \uD574\uC678)</li>
          </ul>`,jp:`<ul>
            <li>\uB9AC\uB4EC\uAC8C\uC784 GITADORA \uC2DC\uB9AC\uC988\uC758 \uAC1C\uC778 \uAE30\uB85D\uC744 \uAD00\uB9AC\uD574\uC8FC\uB294 \uC6F9 \uC11C\uBE44\uC2A4</li>
            <li>\uACF5\uC2DD\uC5D0\uC11C \uC9C0\uC6D0\uD558\uC9C0 \uC54A\uB294 \uBD80\uAC00\uC801\uC778 \uAE30\uB2A5\uC744 \uC81C\uACF5</li>
            <li>(2020\uB144 2\uC6D4 \uAE30\uC900) \uB4F1\uB85D \uACC4\uC815 \uC218 3800 (\uD55C\uAD6D/\uC77C\uBCF8/\uAE30\uD0C0 \uD574\uC678)</li>
        </ul>`,en:`<ul>
            <li>\uB9AC\uB4EC\uAC8C\uC784 GITADORA \uC2DC\uB9AC\uC988\uC758 \uAC1C\uC778 \uAE30\uB85D\uC744 \uAD00\uB9AC\uD574\uC8FC\uB294 \uC6F9 \uC11C\uBE44\uC2A4</li>
            <li>\uACF5\uC2DD\uC5D0\uC11C \uC9C0\uC6D0\uD558\uC9C0 \uC54A\uB294 \uBD80\uAC00\uC801\uC778 \uAE30\uB2A5\uC744 \uC81C\uACF5</li>
            <li>(2020\uB144 2\uC6D4 \uAE30\uC900) \uB4F1\uB85D \uACC4\uC815 \uC218 3800 (\uD55C\uAD6D/\uC77C\uBCF8/\uAE30\uD0C0 \uD574\uC678)</li>
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
          </ul>`,en:`\uC2DC\uC2A4\uD15C \uAD6C\uC131<br/>
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
          </ul>`},image:["/project/sin/01.jpg","/project/sin/02.png","/project/sin/03.jpg"]},{icon:"/project/piu/icon.png",title:{ko:"PIU \uAE30\uB85D \uAD00\uB9AC \uD234",jp:"PIU \u8A18\u9332\u7BA1\u7406\u30C4\u30FC\u30EB",en:"PIU Manager"},simpledesc:{ko:"\uB9AC\uB4EC\uAC8C\uC784 Pump It Up\uC758 \uAE30\uB85D \uAD00\uB9AC \uC0AC\uC774\uD2B8",jp:"\u97F3\u30B2\u30FCPump It Up\u30B7\u30EA\u30FC\u30BA\u306E\u8A18\u9332\u7BA1\u7406\u30B5\u30FC\u30D3\u30B9",en:"Data management service for rhythm game Pump It Up series"},platform:"Web, Android",tech:"ReactJS (TypeScript), NodeJS (TypeScript), Android (Kotlin), AWS DynamoDB, AWS S3, AWS Lambda, MobX, BootStrap, etc",period:"2018.07~",link:["https://piu.nira.one","https://play.google.com/store/apps/details?id=one.nira.piu","https://github.com/prunusnira/piumanager"],content:{ko:`<ul>
            <li>\uB9AC\uB4EC\uAC8C\uC784 Pump It Up\uC758 \uAC1C\uC778 \uAE30\uB85D \uAD00\uB9AC\uB97C \uC790\uB3D9\uD654 \uD55C \uC6F9 \uC11C\uBE44\uC2A4</li>
            <li>\uC720\uC800\uB4E4\uC774 \uC218\uB3D9\uC801\uC73C\uB85C \uC774\uBBF8\uC9C0\uB97C \uC218\uC815\uD558\uBA74\uC11C \uC0AC\uC6A9\uD558\uACE0 \uC788\uB294 \uC11C\uC5F4\uD45C\uB97C \uBCF4\uACE0 \uC790\uB3D9\uD654\uD558\uBA74 \uC5B4\uB5A8\uAE4C \uD558\uB294 \uC0DD\uAC01\uC73C\uB85C \uC81C\uC791</li>
            <li>GitHub\uC5D0\uC11C PR\uC744 \uBC1B\uC544 \uC0C8\uB85C\uC6B4 \uBC88\uC5ED\uC744 \uCD94\uAC00\uD558\uAE30\uB3C4 \uD588\uC74C</li>
        </ul>`,jp:`<ul>
            <li>\uB9AC\uB4EC\uAC8C\uC784 Pump It Up\uC758 \uAC1C\uC778 \uAE30\uB85D \uAD00\uB9AC\uB97C \uC790\uB3D9\uD654 \uD55C \uC6F9 \uC11C\uBE44\uC2A4</li>
            <li>\uC720\uC800\uB4E4\uC774 \uC218\uB3D9\uC801\uC73C\uB85C \uC774\uBBF8\uC9C0\uB97C \uC218\uC815\uD558\uBA74\uC11C \uC0AC\uC6A9\uD558\uACE0 \uC788\uB294 \uC11C\uC5F4\uD45C\uB97C \uBCF4\uACE0 \uC790\uB3D9\uD654\uD558\uBA74 \uC5B4\uB5A8\uAE4C \uD558\uB294 \uC0DD\uAC01\uC73C\uB85C \uC81C\uC791</li>
            <li>GitHub\uC5D0\uC11C PR\uC744 \uBC1B\uC544 \uC0C8\uB85C\uC6B4 \uBC88\uC5ED\uC744 \uCD94\uAC00\uD558\uAE30\uB3C4 \uD588\uC74C</li>
        </ul>`,en:`<ul>
            <li>\uB9AC\uB4EC\uAC8C\uC784 Pump It Up\uC758 \uAC1C\uC778 \uAE30\uB85D \uAD00\uB9AC\uB97C \uC790\uB3D9\uD654 \uD55C \uC6F9 \uC11C\uBE44\uC2A4</li>
            <li>\uC720\uC800\uB4E4\uC774 \uC218\uB3D9\uC801\uC73C\uB85C \uC774\uBBF8\uC9C0\uB97C \uC218\uC815\uD558\uBA74\uC11C \uC0AC\uC6A9\uD558\uACE0 \uC788\uB294 \uC11C\uC5F4\uD45C\uB97C \uBCF4\uACE0 \uC790\uB3D9\uD654\uD558\uBA74 \uC5B4\uB5A8\uAE4C \uD558\uB294 \uC0DD\uAC01\uC73C\uB85C \uC81C\uC791</li>
            <li>GitHub\uC5D0\uC11C PR\uC744 \uBC1B\uC544 \uC0C8\uB85C\uC6B4 \uBC88\uC5ED\uC744 \uCD94\uAC00\uD558\uAE30\uB3C4 \uD588\uC74C</li>
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
      `},image:["/project/piu/01.jpg","/project/piu/02.png"]},{icon:"/project/banpick/icon.png",title:{ko:"\uD2B8\uC704\uCE58 \uBC34\uD53D \uC571",jp:"Twitch BanPicker",en:"Twitch BanPicker"},simpledesc:{ko:"\uD2B8\uC704\uCE58 \uC2A4\uD2B8\uB9AC\uBA38\uC758 \uCEE8\uD150\uCE20\uC5D0 \uD65C\uC6A9\uB420 \uC218 \uC788\uB294 LoL \uC2A4\uD0C0\uC77C \uBC34\uD53D \uC571",jp:"",en:""},platform:"Web",tech:"ReactJS (TypeScript), JavaScript, Bootstrap, AWS S3, Jest, Redux",period:"2020.11.09~2020.11.14 (5\uC77C + \uC9C0\uC18D\uC801\uC73C\uB85C \uC5C5\uB370\uC774\uD2B8 \uC9C4\uD589 \uC911)",link:["https://banpick.nira.one","https://github.com/prunusnira/twitch-banpicker","https://youtu.be/t37LvUoVcFc"],content:{ko:`(\uB9C1\uD06C3: \uC2E4\uC81C \uC0AC\uC6A9 \uC608\uC2DC \uC601\uC0C1)
                <ul>
                    <li>\uD2B8\uC704\uCE58 \uC2A4\uD2B8\uB9AC\uBA38\uC758 \uCEE8\uD150\uCE20\uC5D0 \uD65C\uC6A9\uD560 \uC218 \uC788\uB294 LoL \uBC34\uD53D \uC2A4\uD0C0\uC77C\uC758 \uC6F9 \uC571</li>
                    <li>\uC2DC\uCCAD\uC790\uB294 \uC6F9 \uC571\uC5D0\uC11C \uC9C0\uC815\uD55C \uBA85\uB839\uC5B4\uB97C \uCC44\uD305\uC73C\uB85C \uC785\uB825\uD558\uC5EC \uC2A4\uD2B8\uB9AC\uBA38\uC640 \uC18C\uD1B5\uD558\uBA74\uC11C \uC571\uC744 \uC0AC\uC6A9\uD560 \uC218 \uC788\uC74C</li>
                    <li>Twitch API, WebSocket, WebWorker \uB4F1\uC744 \uD65C\uC6A9\uD558\uC5EC \uC81C\uC791</li>
                </ul>`,jp:`(\uB9C1\uD06C3: \uC2E4\uC81C \uC0AC\uC6A9 \uC608\uC2DC \uC601\uC0C1)
      <ul>
          <li>\uD2B8\uC704\uCE58 \uC2A4\uD2B8\uB9AC\uBA38\uC758 \uCEE8\uD150\uCE20\uC5D0 \uD65C\uC6A9\uD560 \uC218 \uC788\uB294 LoL \uBC34\uD53D \uC2A4\uD0C0\uC77C\uC758 \uC6F9 \uC571</li>
          <li>\uC2DC\uCCAD\uC790\uB294 \uC6F9 \uC571\uC5D0\uC11C \uC9C0\uC815\uD55C \uBA85\uB839\uC5B4\uB97C \uCC44\uD305\uC73C\uB85C \uC785\uB825\uD558\uC5EC \uC2A4\uD2B8\uB9AC\uBA38\uC640 \uC18C\uD1B5\uD558\uBA74\uC11C \uC571\uC744 \uC0AC\uC6A9\uD560 \uC218 \uC788\uC74C</li>
          <li>Twitch API, WebSocket, WebWorker \uB4F1\uC744 \uD65C\uC6A9\uD558\uC5EC \uC81C\uC791</li>
      </ul>`,en:`(\uB9C1\uD06C3: \uC2E4\uC81C \uC0AC\uC6A9 \uC608\uC2DC \uC601\uC0C1)
      <ul>
          <li>\uD2B8\uC704\uCE58 \uC2A4\uD2B8\uB9AC\uBA38\uC758 \uCEE8\uD150\uCE20\uC5D0 \uD65C\uC6A9\uD560 \uC218 \uC788\uB294 LoL \uBC34\uD53D \uC2A4\uD0C0\uC77C\uC758 \uC6F9 \uC571</li>
          <li>\uC2DC\uCCAD\uC790\uB294 \uC6F9 \uC571\uC5D0\uC11C \uC9C0\uC815\uD55C \uBA85\uB839\uC5B4\uB97C \uCC44\uD305\uC73C\uB85C \uC785\uB825\uD558\uC5EC \uC2A4\uD2B8\uB9AC\uBA38\uC640 \uC18C\uD1B5\uD558\uBA74\uC11C \uC571\uC744 \uC0AC\uC6A9\uD560 \uC218 \uC788\uC74C</li>
          <li>Twitch API, WebSocket, WebWorker \uB4F1\uC744 \uD65C\uC6A9\uD558\uC5EC \uC81C\uC791</li>
      </ul>`},dev:{ko:`<ol>
                    <li>Twitch API\uB85C \uCC44\uB110 \uB0B4 \uC2DC\uCCAD\uC790\uB4E4\uC758 \uCC44\uD305 \uB0B4\uC6A9\uC744 \uC77D\uC5B4 \uBD84\uC11D\uD558\uACE0, \uC790\uCCB4 \uBA85\uB839\uC5B4\uB97C \uAE30\uBC18\uC73C\uB85C \uB3D9\uC791\uC744 \uC218\uD589</li>
                    <li>AWS S3\uC5D0 \uB370\uC774\uD130\uB97C \uC62C\uB9AC\uACE0 CloudFront\uB85C SSL\uC744 \uC9C0\uC6D0\uD558\uB294 \uBC29\uC2DD\uC73C\uB85C \uBC30\uD3EC</li>
                    <li>\uC800\uC7A5\uC774 \uD544\uC694\uD55C \uB370\uC774\uD130\uB294 redux-persist\uB97C \uC0AC\uC6A9</li>
                </ol>`,jp:`<ol>
            <li>Twitch API\uB85C \uCC44\uB110 \uB0B4 \uC2DC\uCCAD\uC790\uB4E4\uC758 \uCC44\uD305 \uB0B4\uC6A9\uC744 \uC77D\uC5B4 \uBD84\uC11D\uD558\uACE0, \uC790\uCCB4 \uBA85\uB839\uC5B4\uB97C \uAE30\uBC18\uC73C\uB85C \uB3D9\uC791\uC744 \uC218\uD589</li>
            <li>AWS S3\uC5D0 \uB370\uC774\uD130\uB97C \uC62C\uB9AC\uACE0 CloudFront\uB85C SSL\uC744 \uC9C0\uC6D0\uD558\uB294 \uBC29\uC2DD\uC73C\uB85C \uBC30\uD3EC</li>
            <li>\uC800\uC7A5\uC774 \uD544\uC694\uD55C \uB370\uC774\uD130\uB294 redux-persist\uB97C \uC0AC\uC6A9</li>
        </ol>`,en:`<ol>
            <li>Twitch API\uB85C \uCC44\uB110 \uB0B4 \uC2DC\uCCAD\uC790\uB4E4\uC758 \uCC44\uD305 \uB0B4\uC6A9\uC744 \uC77D\uC5B4 \uBD84\uC11D\uD558\uACE0, \uC790\uCCB4 \uBA85\uB839\uC5B4\uB97C \uAE30\uBC18\uC73C\uB85C \uB3D9\uC791\uC744 \uC218\uD589</li>
            <li>AWS S3\uC5D0 \uB370\uC774\uD130\uB97C \uC62C\uB9AC\uACE0 CloudFront\uB85C SSL\uC744 \uC9C0\uC6D0\uD558\uB294 \uBC29\uC2DD\uC73C\uB85C \uBC30\uD3EC</li>
            <li>\uC800\uC7A5\uC774 \uD544\uC694\uD55C \uB370\uC774\uD130\uB294 redux-persist\uB97C \uC0AC\uC6A9</li>
        </ol>`},image:["/project/banpick/01.png","/project/banpick/02.png"]},{icon:"/project/rhythm/icon.png",title:{ko:"RhythmTracers (BMS Player)",jp:"RhythmTracers (BMS Player)",en:"RhythmTracers (BMS Player)"},simpledesc:{ko:"Unity\uB85C \uC81C\uC791\uB41C BMS \uAD6C\uB3D9\uAE30 (\uB9AC\uB4EC\uAC8C\uC784)",jp:"",en:""},platform:"Unity3D (Windows)",tech:"Unity3D",period:"2020.08~",link:["https://youtu.be/lWQG4gIjGDM","https://github.com/prunusnira/rhythmspaceV2"],content:{ko:`<ul>
                    <li>Unity3D\uB85C \uAC1C\uBC1C\uB41C \uAC74\uBC18\uD615 \uB9AC\uB4EC\uAC8C\uC784</li>
                    <li>BMS(Be-Music Script)\uB97C \uC77D\uC5B4 \uAC8C\uC784\uC744 \uC9C4\uD589</li>
                </ul>`,jp:`<ul>
      <li>Unity3D\uB85C \uAC1C\uBC1C\uB41C \uAC74\uBC18\uD615 \uB9AC\uB4EC\uAC8C\uC784</li>
      <li>BMS(Be-Music Script)\uB97C \uC77D\uC5B4 \uAC8C\uC784\uC744 \uC9C4\uD589</li>
  </ul>`,en:`<ul>
      <li>Unity3D\uB85C \uAC1C\uBC1C\uB41C \uAC74\uBC18\uD615 \uB9AC\uB4EC\uAC8C\uC784</li>
      <li>BMS(Be-Music Script)\uB97C \uC77D\uC5B4 \uAC8C\uC784\uC744 \uC9C4\uD589</li>
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
      <li>C# \uAE30\uBC18\uC758 BMS \uCC98\uB9AC \uBAA8\uB4C8\uC744 \uC81C\uC791<br/>
      (BMS\uC5D0 \uB300\uD55C \uD30C\uC2F1, \uB178\uD2B8 \uC624\uBE0C\uC81D\uD2B8 \uC0DD\uC131, \uC2DC\uAC04\uC5D0 \uB530\uB978 \uB178\uD2B8 \uC774\uB3D9 \uB4F1)</li>
      <li>\uD50C\uB808\uC774 \uC2DC\uC791 \uC2DC\uAC04\uC744 \uAE30\uC900\uC73C\uB85C \uACE1\uC758 \uC7AC\uC0DD \uC2DC\uAC04\uC5D0 \uB9DE\uCD94\uC5B4 \uB178\uD2B8 \uC704\uCE58\uB97C \uBCC0\uACBD\uC2DC\uD0A4\uB294 \uBC29\uC2DD\uC73C\uB85C \uAD6C\uD604</li>
      <li>\uC678\uBD80\uC5D0\uC11C \uC77D\uC5B4\uB4E4\uC778 BMS\uC758 \uBAA9\uB85D\uC740 SQLite\uB85C \uAD00\uB9AC</li>
      <li>\uC0AC\uC6A9\uC790\uB4E4\uC774 \uB9CC\uB4E0 \uCEE4\uC2A4\uD140 \uC2A4\uD0A8\uC744 \uC801\uC6A9\uD560 \uC218 \uC788\uB294 \uC2DC\uC2A4\uD15C \uC81C\uACF5</li>
      <li>\uC2F1\uD06C \uC870\uC808\uC774\uB098 \uCD5C\uB300 \uD504\uB808\uC784 \uB808\uC774\uD2B8 \uB4F1 \uC5ED\uC2DC \uC790\uC720\uB86D\uAC8C \uC870\uC808\uD560 \uC218 \uC788\uAC8C \uB9CC\uB4E6</li>
  </ul>`},image:["/project/rhythm/01.png","/project/rhythm/02.png","/project/rhythm/03.jpg"]},{icon:"/project/launcher/icon.png",title:{ko:"Drawing Launcher",jp:"Drawing Launcher",en:"Drawing Launcher"},simpledesc:{ko:"\uC0AC\uC6A9\uC790\uC758 \uC81C\uC2A4\uCC98\uB85C \uC571\uC744 \uC2E4\uD589\uD558\uB294 \uC548\uB4DC\uB85C\uC774\uB4DC \uB7F0\uCC98",jp:"",en:""},platform:"Android",tech:"Android (Java)",period:"2016.08~2017.04",link:["https://play.google.com/store/apps/details?id=com.roxyeris.drawinglauncher","https://github.com/prunusnira/DrawingLauncher"],content:{ko:`<ul>
                    <li>\uD654\uBA74\uC5D0 \uC81C\uC2A4\uCC98\uB97C \uADF8\uB824\uC11C \uC571\uC744 \uC2E4\uD589\uD558\uAC70\uB098 \uB2E4\uB978 \uB3D9\uC791\uC744 \uC218\uD589\uD558\uB294 \uC548\uB4DC\uB85C\uC774\uB4DC \uB7F0\uCC98</li>
                    <li>\uB2E8\uC21C\uD788 \uC81C\uC2A4\uCC98 \uC678\uC5D0\uB3C4 \uC77C\uBC18\uC801\uC778 \uC571 \uC11C\uB78D \uAE30\uB2A5\uB3C4 \uD3EC\uD568</li>
                </ul>`,jp:`<ul>
      <li>\uD654\uBA74\uC5D0 \uC81C\uC2A4\uCC98\uB97C \uADF8\uB824\uC11C \uC571\uC744 \uC2E4\uD589\uD558\uAC70\uB098 \uB2E4\uB978 \uB3D9\uC791\uC744 \uC218\uD589\uD558\uB294 \uC548\uB4DC\uB85C\uC774\uB4DC \uB7F0\uCC98</li>
      <li>\uB2E8\uC21C\uD788 \uC81C\uC2A4\uCC98 \uC678\uC5D0\uB3C4 \uC77C\uBC18\uC801\uC778 \uC571 \uC11C\uB78D \uAE30\uB2A5\uB3C4 \uD3EC\uD568</li>
  </ul>`,en:`<ul>
      <li>\uD654\uBA74\uC5D0 \uC81C\uC2A4\uCC98\uB97C \uADF8\uB824\uC11C \uC571\uC744 \uC2E4\uD589\uD558\uAC70\uB098 \uB2E4\uB978 \uB3D9\uC791\uC744 \uC218\uD589\uD558\uB294 \uC548\uB4DC\uB85C\uC774\uB4DC \uB7F0\uCC98</li>
      <li>\uB2E8\uC21C\uD788 \uC81C\uC2A4\uCC98 \uC678\uC5D0\uB3C4 \uC77C\uBC18\uC801\uC778 \uC571 \uC11C\uB78D \uAE30\uB2A5\uB3C4 \uD3EC\uD568</li>
  </ul>`},dev:{ko:`<ul>
                <li>Android\uC758 API\uB85C \uC81C\uACF5\uB418\uB294 Gesture, Gesture Store\uB97C \uC0AC\uC6A9\uD558\uC5EC \uAC1C\uBC1C</li>
                <li>Gesture\uB294 Gesture Store\uC5D0 \uD3EC\uD568\uB418\uC5B4 \uB85C\uCEEC \uD30C\uC77C\uB85C \uC800\uC7A5</li>
                <li>\uC571 \uC11C\uB78D\uC740 GridLayout\uC73C\uB85C \uD45C\uD604\uD558\uBA70 \uC635\uC158\uC5D0\uC11C \uC0AC\uC774\uC988 \uBCC0\uACBD\uC774 \uAC00\uB2A5</li>
            </ul>`,jp:`<ul>
      <li>Android\uC758 API\uB85C \uC81C\uACF5\uB418\uB294 Gesture, Gesture Store\uB97C \uC0AC\uC6A9\uD558\uC5EC \uAC1C\uBC1C</li>
      <li>Gesture\uB294 Gesture Store\uC5D0 \uD3EC\uD568\uB418\uC5B4 \uB85C\uCEEC \uD30C\uC77C\uB85C \uC800\uC7A5</li>
      <li>\uC571 \uC11C\uB78D\uC740 GridLayout\uC73C\uB85C \uD45C\uD604\uD558\uBA70 \uC635\uC158\uC5D0\uC11C \uC0AC\uC774\uC988 \uBCC0\uACBD\uC774 \uAC00\uB2A5</li>
  </ul>`,en:`<ul>
      <li>Android\uC758 API\uB85C \uC81C\uACF5\uB418\uB294 Gesture, Gesture Store\uB97C \uC0AC\uC6A9\uD558\uC5EC \uAC1C\uBC1C</li>
      <li>Gesture\uB294 Gesture Store\uC5D0 \uD3EC\uD568\uB418\uC5B4 \uB85C\uCEEC \uD30C\uC77C\uB85C \uC800\uC7A5</li>
      <li>\uC571 \uC11C\uB78D\uC740 GridLayout\uC73C\uB85C \uD45C\uD604\uD558\uBA70 \uC635\uC158\uC5D0\uC11C \uC0AC\uC774\uC988 \uBCC0\uACBD\uC774 \uAC00\uB2A5</li>
  </ul>`},image:["/project/launcher/01.jpg","/project/launcher/02.jpg","/project/launcher/03.jpg","/project/launcher/04.jpg"]},{icon:"/project/ringtone/icon.png",title:{ko:"Ringtone Randomizer",jp:"Ringtone Manager",en:"Ringtone Manager"},simpledesc:{ko:"\uAD6C \uC548\uB4DC\uB85C\uC774\uB4DC\uC5D0\uC11C \uC0AC\uC6A9\uB41C \uBCA8\uC18C\uB9AC \uB79C\uB364 \uC7AC\uC0DD \uC5B4\uD50C",jp:"",en:""},platform:"Android (Under 7)",tech:"Android (Java), SQLite",period:"2011~2012 / 2015",link:["https://play.google.com/store/apps/details?id=com.ring.roxyeris","https://github.com/prunusnira/ringtone-public"],content:{ko:`<ul>
                    <li>\uAE30\uAE30\uC758 \uC804\uD654\uAC00 \uD55C \uBC88 \uC62C \uB54C\uB9C8\uB2E4 \uBCA8\uC18C\uB9AC\uB97C \uB79C\uB364\uC73C\uB85C \uBC14\uAFD4\uC8FC\uB294 \uC571</li>
                    <li>\uCC29\uC2E0 \uC0C1\uD0DC\uB97C \uD655\uC778\uD558\uC5EC \uC0C1\uD0DC \uBCC0\uACBD\uC5D0 \uB530\uB77C \uC2DC\uC2A4\uD15C \uC635\uC158\uC744 \uBCC0\uACBD</li>
                </ul>`,jp:`<ul>
      <li>\uAE30\uAE30\uC758 \uC804\uD654\uAC00 \uD55C \uBC88 \uC62C \uB54C\uB9C8\uB2E4 \uBCA8\uC18C\uB9AC\uB97C \uB79C\uB364\uC73C\uB85C \uBC14\uAFD4\uC8FC\uB294 \uC571</li>
      <li>\uCC29\uC2E0 \uC0C1\uD0DC\uB97C \uD655\uC778\uD558\uC5EC \uC0C1\uD0DC \uBCC0\uACBD\uC5D0 \uB530\uB77C \uC2DC\uC2A4\uD15C \uC635\uC158\uC744 \uBCC0\uACBD</li>
  </ul>`,en:`<ul>
      <li>\uAE30\uAE30\uC758 \uC804\uD654\uAC00 \uD55C \uBC88 \uC62C \uB54C\uB9C8\uB2E4 \uBCA8\uC18C\uB9AC\uB97C \uB79C\uB364\uC73C\uB85C \uBC14\uAFD4\uC8FC\uB294 \uC571</li>
      <li>\uCC29\uC2E0 \uC0C1\uD0DC\uB97C \uD655\uC778\uD558\uC5EC \uC0C1\uD0DC \uBCC0\uACBD\uC5D0 \uB530\uB77C \uC2DC\uC2A4\uD15C \uC635\uC158\uC744 \uBCC0\uACBD</li>
  </ul>`},dev:{ko:`<ul>
                    <li>Android \uB0B4\uBD80\uC758 Telephony Manager, Phone State Listener\uB85C \uCC29\uC2E0 \uC0C1\uD0DC \uD655\uC778</li>
                    <li>SQLite\uC5D0 \uC0AC\uC6A9\uC790\uAC00 \uBCA8\uC18C\uB9AC\uB85C \uC9C0\uC815\uD558\uACE0 \uC2F6\uC5B4\uD558\uB294 \uC74C\uC545 \uD30C\uC77C\uC744 \uB4F1\uB85D \uBC0F \uAD00\uB9AC</li>
                    <li>\uCC29\uC2E0 \uC0C1\uD0DC\uAC00 \uBCC0\uACBD\uB420 \uB54C \uB9C8\uB2E4 \uBC31\uADF8\uB77C\uC6B4\uB4DC \uC11C\uBE44\uC2A4\uB85C \uBCA8\uC18C\uB9AC\uB97C \uBCC0\uACBD\uD558\uB3C4\uB85D \uCC98\uB9AC</li>
                </ul>`,jp:`<ul>
      <li>Android \uB0B4\uBD80\uC758 Telephony Manager, Phone State Listener\uB85C \uCC29\uC2E0 \uC0C1\uD0DC \uD655\uC778</li>
      <li>SQLite\uC5D0 \uC0AC\uC6A9\uC790\uAC00 \uBCA8\uC18C\uB9AC\uB85C \uC9C0\uC815\uD558\uACE0 \uC2F6\uC5B4\uD558\uB294 \uC74C\uC545 \uD30C\uC77C\uC744 \uB4F1\uB85D \uBC0F \uAD00\uB9AC</li>
      <li>\uCC29\uC2E0 \uC0C1\uD0DC\uAC00 \uBCC0\uACBD\uB420 \uB54C \uB9C8\uB2E4 \uBC31\uADF8\uB77C\uC6B4\uB4DC \uC11C\uBE44\uC2A4\uB85C \uBCA8\uC18C\uB9AC\uB97C \uBCC0\uACBD\uD558\uB3C4\uB85D \uCC98\uB9AC</li>
  </ul>`,en:`<ul>
      <li>Android \uB0B4\uBD80\uC758 Telephony Manager, Phone State Listener\uB85C \uCC29\uC2E0 \uC0C1\uD0DC \uD655\uC778</li>
      <li>SQLite\uC5D0 \uC0AC\uC6A9\uC790\uAC00 \uBCA8\uC18C\uB9AC\uB85C \uC9C0\uC815\uD558\uACE0 \uC2F6\uC5B4\uD558\uB294 \uC74C\uC545 \uD30C\uC77C\uC744 \uB4F1\uB85D \uBC0F \uAD00\uB9AC</li>
      <li>\uCC29\uC2E0 \uC0C1\uD0DC\uAC00 \uBCC0\uACBD\uB420 \uB54C \uB9C8\uB2E4 \uBC31\uADF8\uB77C\uC6B4\uB4DC \uC11C\uBE44\uC2A4\uB85C \uBCA8\uC18C\uB9AC\uB97C \uBCC0\uACBD\uD558\uB3C4\uB85D \uCC98\uB9AC</li>
  </ul>`},image:["/project/ringtone/01.jpg","/project/ringtone/02.jpg","/project/ringtone/03.jpg","/project/ringtone/04.jpg","/project/ringtone/05.jpg"]}],Af=[{icon:"/project/copin200/logo.png",title:{ko:"Copin Comics 2.0",jp:"Copin Comics 2.0",en:"Copin Comics 2.0"},simpledesc:{ko:"\uB808\uAC70\uC2DC \uD3EC\uD305 \uC774\uD6C4 \uC0C8 \uAE30\uB2A5 \uB4F1\uC744 \uCD94\uAC00\uD558\uC5EC \uC0C8\uB85C\uC6B4 \uCF54\uB4DC\uBCA0\uC774\uC2A4\uB85C \uAC1C\uBC1C",jp:"\u30EC\u30AC\u30B7\u30A3\u30DD\u30FC\u30C6\u30A3\u30F3\u30B0\u4EE5\u5F8C\u65B0\u305F\u306A\u6A5F\u80FD\u3092\u8FFD\u52A0\u3057\u3066\u6700\u521D\u304B\u3089\u518D\u958B\u767A",en:"Created app from scratch with new functions added after porting legacy codes"},platform:"Web",tech:"ReactJS (TypeScript), NextJS, Redux, styled-components",period:"2022.02-2022.07",link:["https://www.copincomics.com"],content:{ko:`<ul>
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
      </ul>`},image:["/project/copin200/cc2001.png","/project/copin200/cc2002.png","/project/copin200/cc2003.png","/project/copin200/cc2004.png"]},{icon:"/project/copin150/logo.png",title:{ko:"Copin Comics 1.5 (\uB808\uAC70\uC2DC \uD3EC\uD305)",jp:"Copin Comics 1.5 (\u30EC\u30AC\u30B7\u30A3\u30DD\u30FC\u30C6\u30A3\u30F3\u30B0)",en:"Copin Comics 1.5 (Legacy port)"},simpledesc:{ko:"php\uB85C \uAC1C\uBC1C\uB418\uC5C8\uB358 \uAE30\uC874 \uC11C\uBE44\uC2A4\uB97C React\uB85C \uD3EC\uD305",jp:"php\u3067\u958B\u767A\u3055\u308C\u305F\u30B5\u30FC\u30D3\u30B9\u3092React\u306B\u30DD\u30FC\u30C6\u30A3\u30F3\u30B0",en:"Ported legacy project into React which was developed using php"},platform:"Web",tech:"ReactJS (TypeScript), styled-components, Redux",period:"2021.12-2022.02",link:["https://www.copincomics.com"],content:{ko:`<ul>
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
      <li>php\uB85C \uC11C\uBC84/\uD074\uB77C\uC774\uC5B8\uD2B8\uAC00 \uD1B5\uD569\uB418\uC5B4 \uAC1C\uBC1C\uB418\uC5C8\uB358 \uCD08\uAE30\uC758 \uC11C\uBE44\uC2A4\uB97C \uD504\uB860\uD2B8\uC640 \uBC31\uC5D4\uB4DC\uB85C \uBD84\uB9AC</li>
      <li>\uAE30\uC874 \uC11C\uBE44\uC2A4\uC758 \uAD6C\uC870\uB97C \uADF8\uB300\uB85C React\uB85C \uC62E\uAE30\uB294 \uAC83\uC744 \uC911\uC810\uC73C\uB85C \uAC1C\uBC1C \uC9C4\uD589</li>
      <li>\uAE30\uC874 \uD648\uD398\uC774\uC9C0\uC758 UI\uC758 \uAE30\uC870\uB97C \uC720\uC9C0\uD558\uC5EC \uC0C8\uB86D\uAC8C \uB514\uC790\uC778 \uC791\uC5C5\uC744 \uC9C4\uD589</li>
      <li>\uBC31\uC5D4\uB4DC\uB294 Spring Boot\uB85C \uBC31\uC5D4\uB4DC\uD300\uC5D0\uC11C \uBCC4\uB3C4\uB85C \uAC1C\uBC1C \uC9C4\uD589</li>
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
      </ul>`,en:`<b>[ \uB2F4\uB2F9\uD30C\uD2B8: \uD504\uB860\uD2B8\uC5D4\uB4DC \uAC1C\uBC1C \uD30C\uD2B8\uC7A5, \uD504\uB860\uD2B8\uC5D4\uB4DC \uC124\uACC4, \uAE30\uC220 \uC120\uD0DD, \uAC1C\uBC1C, \uD14C\uC2A4\uD2B8 \uB4F1 ]</b>
      <ul>
          <li>\uD504\uB860\uD2B8\uC5D4\uB4DC \uD300\uC6D0 2\uBA85\uC774 \uAC1C\uBC1C\uC744 \uC9C4\uD589</li>
          <li>\uC8FC\uC5B4\uC9C4 \uAC1C\uBC1C \uAE30\uAC04\uC774 \uC9E7\uC544 \uAE30\uD68D/\uB514\uC790\uC778 \uD300\uACFC \uB3D9\uC2DC\uC5D0 \uC791\uC5C5\uC744 \uC9C4\uD589</li>
          <li>\uC774\uB97C \uC704\uD574 \uC2DC\uC2A4\uD15C \uAE30\uBC18\uC744 \uBA3C\uC800 \uC791\uC5C5\uD558\uACE0 \uC774\uD6C4 \uAE30\uB2A5\uBCC4 \uBCC4\uB3C4 \uAC1C\uBC1C\uC744 \uC9C4\uD589</li>
          <li>\uD2B9\uD788 \uAE30\uC874 \uB808\uAC70\uC2DC \uD398\uC774\uC9C0\uB294 \uBC18\uC751\uD615\uC5D0 \uB300\uD55C \uCC98\uB9AC\uAC00 \uB418\uC5B4\uC788\uC9C0 \uC54A\uACE0 \uC2A4\uD06C\uB9B0 \uC0AC\uC774\uC988\uC5D0 \uB530\uB77C \uBCC4\uB3C4\uB85C \uD398\uC774\uC9C0\uB97C \uB9CC\uB4DC\uB294 \uD615\uD0DC\uB85C \uC791\uC5C5\uC774 \uB418\uC5B4\uC788\uC5B4 \uC774\uB97C \uC0C8\uB86D\uAC8C \uC815\uC758\uD558\uC600\uC74C</li>
      </ul>`},image:["/project/copin150/cc1501.png","/project/copin150/cc1502.png","/project/copin150/cc1503.png","/project/copin150/cc1504.png"]},{icon:"/project/chatbot/icon.png",title:{ko:"UniBot (\uC778\uC99D\uC11C \uCC44\uD305\uBD07)",jp:"",en:""},simpledesc:{ko:"\uC778\uC99D\uC11C\uC5D0 \uB300\uD55C \uC0AC\uC6A9\uC790\uB4E4\uC758 \uC9C8\uBB38\uC5D0 \uB300\uD574 \uB2F5\uBCC0\uC744 \uC790\uB3D9\uC73C\uB85C \uC218\uD589\uD574\uC8FC\uB294 \uCC44\uD305\uBD07",jp:"",en:""},platform:"Web, Android",tech:"Android (Kotlin), ReactJS (TypeScript), Bootstrap, NGINX, Spring Boot, MariaDB",period:"2019.10-2020.02",link:["https://chatapp.crosscert.com"],content:{ko:`<ul>
                    <li>\uC778\uC99D\uC11C \uC11C\uBE44\uC2A4 \uC0AC\uC6A9\uC790\uB4E4\uC5D0\uAC8C \uD544\uC694\uD55C \uC0AC\uC6A9\uBC95, \uC9C8\uBB38\uC5D0 \uB300\uD55C \uB2F5\uBCC0\uC744 \uCC44\uD305\uBD07\uC73C\uB85C \uB9CC\uB4E0 \uC11C\uBE44\uC2A4</li>
                    <li>\uC0AC\uC6A9\uC790\uB4E4\uC740 \uC548\uB4DC\uB85C\uC774\uB4DC \uC571 \uD639\uC740 PC \uBE0C\uB77C\uC6B0\uC800\uB85C \uCC44\uD305\uBD07\uC5D0 \uC811\uC18D\uD558\uC5EC \uC571\uC744 \uC0AC\uC6A9\uD560 \uC218 \uC788\uC5C8\uC74C</li>
                </ul>`,jp:`<ul>
      <li>\uC778\uC99D\uC11C \uC11C\uBE44\uC2A4 \uC0AC\uC6A9\uC790\uB4E4\uC5D0\uAC8C \uD544\uC694\uD55C \uC0AC\uC6A9\uBC95, \uC9C8\uBB38\uC5D0 \uB300\uD55C \uB2F5\uBCC0\uC744 \uCC44\uD305\uBD07\uC73C\uB85C \uB9CC\uB4E0 \uC11C\uBE44\uC2A4</li>
      <li>\uC0AC\uC6A9\uC790\uB4E4\uC740 \uC548\uB4DC\uB85C\uC774\uB4DC \uC571 \uD639\uC740 PC \uBE0C\uB77C\uC6B0\uC800\uB85C \uCC44\uD305\uBD07\uC5D0 \uC811\uC18D\uD558\uC5EC \uC571\uC744 \uC0AC\uC6A9\uD560 \uC218 \uC788\uC5C8\uC74C</li>
  </ul>`,en:`<ul>
      <li>\uC778\uC99D\uC11C \uC11C\uBE44\uC2A4 \uC0AC\uC6A9\uC790\uB4E4\uC5D0\uAC8C \uD544\uC694\uD55C \uC0AC\uC6A9\uBC95, \uC9C8\uBB38\uC5D0 \uB300\uD55C \uB2F5\uBCC0\uC744 \uCC44\uD305\uBD07\uC73C\uB85C \uB9CC\uB4E0 \uC11C\uBE44\uC2A4</li>
      <li>\uC0AC\uC6A9\uC790\uB4E4\uC740 \uC548\uB4DC\uB85C\uC774\uB4DC \uC571 \uD639\uC740 PC \uBE0C\uB77C\uC6B0\uC800\uB85C \uCC44\uD305\uBD07\uC5D0 \uC811\uC18D\uD558\uC5EC \uC571\uC744 \uC0AC\uC6A9\uD560 \uC218 \uC788\uC5C8\uC74C</li>
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
      </ul>`,en:`<b>[ \uB2F4\uB2F9\uD30C\uD2B8: \uD504\uB860\uD2B8\uC5D4\uB4DC, ChatScript\uC640 \uC5F0\uACB0\uD558\uB294 \uC911\uAC04\uC11C\uBC84, \uC548\uB4DC\uB85C\uC774\uB4DC \uC571, DB\uC124\uACC4 ]</b>
      <ul>
          <li>\uD504\uB860\uD2B8\uC5D4\uB4DC: ReactJS (TypeScript), Bootstrap (Reactstrap) \uC0AC\uC6A9</li>
          <li>\uC548\uB4DC\uB85C\uC774\uB4DC: Kotlin\uC73C\uB85C \uAC1C\uBC1C, WebView\uB97C \uC0AC\uC6A9\uD55C \uD558\uC774\uBE0C\uB9AC\uB4DC \uC571</li>
          <li>\uC911\uAC04\uC11C\uBC84: SpringBoot(Kotlin)\uC73C\uB85C \uAC1C\uBC1C, \uBC31\uC5D4\uB4DC \uD30C\uD2B8\uC640 \uC5F0\uB3D9\uC744 \uC704\uD574 \uAD6C\uD604. ChatScript\uC640 \uD1B5\uC2E0\uC744 \uC704\uD55C REST API \uAD6C\uCD95</li>
          <li>\uC2DC\uC2A4\uD15C \uAD6C\uC131: NGINX\uC704\uC5D0 Reversed Proxy\uB97C \uC0AC\uC6A9\uD574 \uBC31\uC5D4\uB4DC\uC640 \uD504\uB860\uD2B8\uC5D4\uB4DC\uB97C \uBAA8\uB450 \uAD6C\uB3D9</li>
      </ul>`},image:["/project/chatbot/01.jpg","/project/chatbot/02.jpg","/project/chatbot/03.jpg","/project/chatbot/04.jpg"]},{icon:"/project/backup/icon.png",title:{ko:"\uC778\uC99D\uC11C \uD074\uB77C\uC6B0\uB4DC \uBC31\uC5C5 \uC11C\uBE44\uC2A4",jp:"",en:""},simpledesc:{ko:"\uBE0C\uB77C\uC6B0\uC800 \uB0B4\uBD80 \uC800\uC7A5\uC18C\uC758 \uC778\uC99D\uC11C\uB97C \uBC31\uC5C5\uD558\uC5EC \uB2E4\uB978 \uAE30\uAE30\uC5D0\uC11C \uC4F8 \uC218 \uC788\uAC8C \uD574\uC8FC\uB294 \uC11C\uBE44\uC2A4",jp:"",en:""},platform:"Web",tech:"Spring Boot 2 (Java), PostgreSQL",period:"2019.12-2020.05",link:[],content:{ko:`<ul>
                    <li>\uBE0C\uB77C\uC6B0\uC800 \uB0B4\uBD80 \uC800\uC7A5\uC18C\uC5D0 \uC800\uC7A5\uB418\uC5B4\uC788\uB294 \uC778\uC99D\uC11C\uB97C \uC11C\uBC84\uC5D0 \uBC31\uC5C5\uD558\uC5EC \uBE0C\uB77C\uC6B0\uC800/\uAE30\uAE30\uC5D0 \uC0C1\uAD00\uC5C6\uC774 \uC778\uC99D\uC11C\uB97C \uC0AC\uC6A9\uD560 \uC218 \uC788\uAC8C \uD558\uB294 \uC11C\uBE44\uC2A4</li>
                    <li>\uD074\uB77C\uC774\uC5B8\uD2B8\uB294 \uAE30\uC874 \uAC1C\uBC1C\uB418\uC5B4\uC788\uB294 \uAC00\uC785\uC790 \uC18C\uD504\uD2B8\uC6E8\uC5B4\uB97C \uD655\uC7A5\uD558\uC5EC \uD074\uB77C\uC774\uC5B8\uD2B8\uB97C \uB9CC\uB4E6</li>
                    <li>\uC11C\uBC84\uB294 Spring Boot\uC640 PostgreSQL\uC744 \uC0AC\uC6A9\uD558\uC5EC \uC2E0\uADDC \uC81C\uC791</li>
                </ul>`,jp:`<ul>
      <li>\uBE0C\uB77C\uC6B0\uC800 \uB0B4\uBD80 \uC800\uC7A5\uC18C\uC5D0 \uC800\uC7A5\uB418\uC5B4\uC788\uB294 \uC778\uC99D\uC11C\uB97C \uC11C\uBC84\uC5D0 \uBC31\uC5C5\uD558\uC5EC \uBE0C\uB77C\uC6B0\uC800/\uAE30\uAE30\uC5D0 \uC0C1\uAD00\uC5C6\uC774 \uC778\uC99D\uC11C\uB97C \uC0AC\uC6A9\uD560 \uC218 \uC788\uAC8C \uD558\uB294 \uC11C\uBE44\uC2A4</li>
      <li>\uD074\uB77C\uC774\uC5B8\uD2B8\uB294 \uAE30\uC874 \uAC1C\uBC1C\uB418\uC5B4\uC788\uB294 \uAC00\uC785\uC790 \uC18C\uD504\uD2B8\uC6E8\uC5B4\uB97C \uD655\uC7A5\uD558\uC5EC \uD074\uB77C\uC774\uC5B8\uD2B8\uB97C \uB9CC\uB4E6</li>
      <li>\uC11C\uBC84\uB294 Spring Boot\uC640 PostgreSQL\uC744 \uC0AC\uC6A9\uD558\uC5EC \uC2E0\uADDC \uC81C\uC791</li>
  </ul>`,en:`<ul>
      <li>\uBE0C\uB77C\uC6B0\uC800 \uB0B4\uBD80 \uC800\uC7A5\uC18C\uC5D0 \uC800\uC7A5\uB418\uC5B4\uC788\uB294 \uC778\uC99D\uC11C\uB97C \uC11C\uBC84\uC5D0 \uBC31\uC5C5\uD558\uC5EC \uBE0C\uB77C\uC6B0\uC800/\uAE30\uAE30\uC5D0 \uC0C1\uAD00\uC5C6\uC774 \uC778\uC99D\uC11C\uB97C \uC0AC\uC6A9\uD560 \uC218 \uC788\uAC8C \uD558\uB294 \uC11C\uBE44\uC2A4</li>
      <li>\uD074\uB77C\uC774\uC5B8\uD2B8\uB294 \uAE30\uC874 \uAC1C\uBC1C\uB418\uC5B4\uC788\uB294 \uAC00\uC785\uC790 \uC18C\uD504\uD2B8\uC6E8\uC5B4\uB97C \uD655\uC7A5\uD558\uC5EC \uD074\uB77C\uC774\uC5B8\uD2B8\uB97C \uB9CC\uB4E6</li>
      <li>\uC11C\uBC84\uB294 Spring Boot\uC640 PostgreSQL\uC744 \uC0AC\uC6A9\uD558\uC5EC \uC2E0\uADDC \uC81C\uC791</li>
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
      </ul>`,en:`<b>[ \uB2F4\uB2F9\uD30C\uD2B8: \uC11C\uBC84 \uBC0F DB ]</b>
      <ul>
          <li>\uD074\uB77C\uC774\uC5B8\uD2B8\uC640\uC758 \uD1B5\uC2E0\uC744 \uC704\uD574 RESTful API \uD615\uD0DC\uB85C \uAC1C\uBC1C</li>
          <li>HSM\uC744 \uC5F0\uB3D9\uD558\uC5EC \uBCF4\uC548\uC131\uC744 \uB192\uC784 (PKCS11 Provider)</li>
          <li>\uC678\uBD80\uC758 SMS \uBAA8\uB4C8\uC744 \uC0AC\uC6A9\uD55C SMS \uC778\uC99D \uC81C\uACF5</li>
      </ul>`},image:["/project/backup/01.png","/project/backup/02.jpg","/project/backup/03.png"]},{icon:"/project/aicore/icon.png",title:{ko:"AI \uD50C\uB7AB\uD3FC \uAC1C\uBC1C \uBC0F \uCC44\uD305\uBD07 \uAC1C\uBC1C",jp:"AI\u30D7\u30E9\u30C3\u30C8\u30D5\u30A9\u30FC\u30E0",en:"AI Platform Development"},simpledesc:{ko:"AI Agent\uAC04 \uB370\uC774\uD130 \uC804\uC1A1 \uAC1C\uBC1C, AI \uD50C\uB7AB\uD3FC\uC744 \uD65C\uC6A9\uD55C \uCC44\uD305\uBD07 \uC11C\uBE44\uC2A4 \uAC1C\uBC1C",jp:"",en:""},platform:"Java, Web",tech:"Java, JavaScript, Tomcat 8, jQuery, HTML, Bootstrap",period:"2015.5~2016.8",link:["https://aibrain.com/solutions/aicore-adaptive-interactive-cognitive-reasoning-engine/"],content:{ko:`\uB300\uD654 \uAC00\uB2A5\uD55C AI\uB97C \uB9CC\uB4E4\uAE30 \uC704\uD55C \uC790\uC5F0\uC5B8\uC5B4 \uCC98\uB9AC \uD504\uB85C\uC81D\uD2B8\uC5D0 \uD1B5\uC2E0 \uBAA8\uB4C8 \uAC1C\uBC1C\uB85C \uCC38\uAC00<br/><br/>
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
      * ACL: Agent Communication Language`,en:`\uB300\uD654 \uAC00\uB2A5\uD55C AI\uB97C \uB9CC\uB4E4\uAE30 \uC704\uD55C \uC790\uC5F0\uC5B8\uC5B4 \uCC98\uB9AC \uD504\uB85C\uC81D\uD2B8\uC5D0 \uD1B5\uC2E0 \uBAA8\uB4C8 \uAC1C\uBC1C\uB85C \uCC38\uAC00<br/><br/>
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
      * ACL: Agent Communication Language`},dev:{ko:`[ \uCC44\uD305\uBD07 \uAD00\uB828 ]
                <ul>
                    <li>Tomcat\uC5D0 Natural Language Processing \uC5D4\uC9C4\uC744 \uC218\uC815\uD558\uC5EC \uAD6C\uB3D9</li>
                    <li>TTS\uC5D0\uB294 Speech Synthesis API\uB97C \uC0AC\uC6A9\uD558\uC5EC \uAC1C\uBC1C</li>
                </ul>`,jp:`[ \uCC44\uD305\uBD07 \uAD00\uB828 ]
      <ul>
          <li>Tomcat\uC5D0 Natural Language Processing \uC5D4\uC9C4\uC744 \uC218\uC815\uD558\uC5EC \uAD6C\uB3D9</li>
          <li>TTS\uC5D0\uB294 Speech Synthesis API\uB97C \uC0AC\uC6A9\uD558\uC5EC \uAC1C\uBC1C</li>
      </ul>`,en:`[ \uCC44\uD305\uBD07 \uAD00\uB828 ]
      <ul>
          <li>Tomcat\uC5D0 Natural Language Processing \uC5D4\uC9C4\uC744 \uC218\uC815\uD558\uC5EC \uAD6C\uB3D9</li>
          <li>TTS\uC5D0\uB294 Speech Synthesis API\uB97C \uC0AC\uC6A9\uD558\uC5EC \uAC1C\uBC1C</li>
      </ul>`},image:["/project/aicore/01.jpg","/project/aicore/02.jpg","/project/aicore/03.jpg","/project/aicore/04.jpg","/project/aicore/05.jpg"]},{icon:"/project/aigame/icon.png",title:{ko:"AI \uD50C\uB7AB\uD3FC\uC744 \uD65C\uC6A9\uD55C \uB370\uBAA8 \uAC8C\uC784 \uAC1C\uBC1C",jp:"AI\u30B2\u30FC\u30E0\u958B\u767A",en:"AI Game Development"},simpledesc:{ko:"NPC\uAC00 \uAC8C\uC784\uC758 \uD658\uACBD\uC744 \uC774\uD574\uD558\uACE0 \uB2E4\uC74C \uB3D9\uC791\uC744 \uACB0\uC815\uD574 \uD589\uB3D9\uD558\uB294 \uB370\uBAA8 \uAC8C\uC784 \uAC1C\uBC1C",jp:"",en:""},platform:"Unity",tech:"Java, C#, Spring Framework, Unity3D, MariaDB",period:"2016.8~2017.2",link:["https://aibrain.com/products/futurable-true-ai-game/"],content:{ko:`<ul>
                    <li>\uD68C\uC0AC\uAC00 \uBCF4\uC720\uD55C AI \uAE30\uC220\uC744 \uD65C\uC6A9\uD558\uC5EC \uB370\uBAA8 \uAC8C\uC784 \uAC1C\uBC1C\uC744 \uC9C4\uD589</li>
                    <li>NPC\uB294 \uAC8C\uC784\uC758 \uD658\uACBD\uC744 \uD655\uC778\uD558\uC5EC \uD604\uC7AC \uC790\uC2E0\uC758 \uC0C1\uD0DC\uC640 \uC870\uAC74\uC744 \uD655\uC778</li>
                    <li>NPC\uC758 \uB2E4\uC74C \uB3D9\uC791\uC740 \uC774\uB7EC\uD55C \uC0C1\uD0DC\uB97C \uC0AC\uC6A9\uD55C \uCD94\uB860 \uACB0\uACFC\uC5D0 \uB530\uB77C \uC9C4\uD589\uB428</li>
                </ul>`,jp:`<ul>
      <li>\uD68C\uC0AC\uAC00 \uBCF4\uC720\uD55C AI \uAE30\uC220\uC744 \uD65C\uC6A9\uD558\uC5EC \uB370\uBAA8 \uAC8C\uC784 \uAC1C\uBC1C\uC744 \uC9C4\uD589</li>
      <li>NPC\uB294 \uAC8C\uC784\uC758 \uD658\uACBD\uC744 \uD655\uC778\uD558\uC5EC \uD604\uC7AC \uC790\uC2E0\uC758 \uC0C1\uD0DC\uC640 \uC870\uAC74\uC744 \uD655\uC778</li>
      <li>NPC\uC758 \uB2E4\uC74C \uB3D9\uC791\uC740 \uC774\uB7EC\uD55C \uC0C1\uD0DC\uB97C \uC0AC\uC6A9\uD55C \uCD94\uB860 \uACB0\uACFC\uC5D0 \uB530\uB77C \uC9C4\uD589\uB428</li>
  </ul>`,en:`<ul>
      <li>\uD68C\uC0AC\uAC00 \uBCF4\uC720\uD55C AI \uAE30\uC220\uC744 \uD65C\uC6A9\uD558\uC5EC \uB370\uBAA8 \uAC8C\uC784 \uAC1C\uBC1C\uC744 \uC9C4\uD589</li>
      <li>NPC\uB294 \uAC8C\uC784\uC758 \uD658\uACBD\uC744 \uD655\uC778\uD558\uC5EC \uD604\uC7AC \uC790\uC2E0\uC758 \uC0C1\uD0DC\uC640 \uC870\uAC74\uC744 \uD655\uC778</li>
      <li>NPC\uC758 \uB2E4\uC74C \uB3D9\uC791\uC740 \uC774\uB7EC\uD55C \uC0C1\uD0DC\uB97C \uC0AC\uC6A9\uD55C \uCD94\uB860 \uACB0\uACFC\uC5D0 \uB530\uB77C \uC9C4\uD589\uB428</li>
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
      </ul>`,en:`(1) \uD074\uB77C\uC774\uC5B8\uD2B8 (C#)
      <ul>
          <li>Google Play Service \uC5F0\uB3D9, \uC11C\uBC84 \uD1B5\uC2E0, UI, \uB514\uBC84\uAE45</li>
      </ul>
      (2) \uC11C\uBC84 (Java/Spring)
      <ul>
          <li>\uD68C\uC0AC\uC5D0\uC11C \uC81C\uC791\uD55C AI \uD50C\uB7AB\uD3FC\uC744 \uC11C\uBC84\uC5D0\uC11C \uAD6C\uB3D9</li>
          <li>\uC720\uC800\uBCC4 \uB300\uD654\uB0B4\uC6A9 \uBCF4\uC874 \uBC0F \uB300\uD654 \uC2DC\uC2A4\uD15C \uAD6C\uC131 \uBC0F \uAC1C\uBC1C</li>
          <li>\uD074\uB77C\uC774\uC5B8\uD2B8\uC640 \uC11C\uBC84\uAC04\uC758 \uC694\uCCAD\uACFC \uC751\uB2F5\uC740 API \uD615\uD0DC\uB85C \uC81C\uC791</li>
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
      <li>AI \uAC8C\uC784\uC5D0 \uC0AC\uC6A9\uB41C \uAE30\uC220\uC744 \uC0AC\uC6A9\uD558\uC5EC Unity \uAC1C\uBC1C\uC790\uAC00 \uC0AC\uC6A9\uD560 \uC218 \uC788\uB294 \uD50C\uB7EC\uADF8\uC778\uC744 \uC81C\uC791</li>
      <li>\uAC1C\uBC1C\uC790\uB294 \uAC8C\uC784\uB0B4\uC758 \uD658\uACBD \uC0C1\uD669, \uCE90\uB9AD\uD130\uC758 \uC2DC\uC57C\uB098 \uC778\uC9C0\uC5D0 \uB300\uD55C \uC124\uC815, \uCE90\uB9AD\uD130\uAC00 \uC218\uD589\uD558\uB294 \uB3D9\uC791\uC5D0 \uB300\uD55C \uC870\uAC74 \uB4F1\uC744 \uD50C\uB7EC\uADF8\uC778\uC5D0 \uC785\uB825</li>
      <li>\uC0AC\uC6A9\uC790\uAC00 \uC9C0\uC815\uD55C \uC870\uAC74\uC744 \uC11C\uBC84\uB85C \uC804\uC1A1\uD558\uC5EC Tensorflow\uB85C \uD559\uC2B5</li>
      <li>\uD559\uC2B5\uC758 \uACB0\uACFC\uB85C \uB098\uC628 ProtoBuf \uD30C\uC77C\uC744 \uB2E4\uC6B4\uB85C\uB4DC\uD558\uC5EC \uD074\uB77C\uC774\uC5B8\uD2B8\uC5D0 \uC801\uC6A9</li>
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
      </ul>`,en:`(1) \uD074\uB77C\uC774\uC5B8\uD2B8 (C#)
      <ul>
          <li>UI, \uC11C\uBC84 \uD1B5\uC2E0, \uB514\uBC84\uADF8</li>
      </ul>
      (2) \uC11C\uBC84 (Java/Spring)
      <ul>
          <li>\uC11C\uBC84\uC5D0\uC11C \uC804\uC1A1\uD55C \uAC8C\uC784 \uD658\uACBD \uC815\uBCF4 \uB4F1\uC744 Process\uB85C Python \uCF54\uB4DC\uB97C \uC2E4\uD589\uD558\uB294 \uBC29\uC2DD\uC73C\uB85C \uC218\uD589</li>
          <li>Python \uCF54\uB4DC\uB294 Tensorflow\uB97C \uC2E4\uD589\uD558\uAE30 \uC704\uD55C \uCF54\uB4DC\uAC00 \uB4E4\uC5B4\uC788\uC74C</li>
          <li>\uB2E4\uC218\uC758 \uD074\uB77C\uC774\uC5B8\uD2B8\uC5D0\uC11C \uB3D9\uC2DC\uC5D0 \uC694\uCCAD\uC774 \uB4E4\uC5B4\uC624\uB294 \uACBD\uC6B0 Queue\uB85C \uAD00\uB9AC</li>
          <li>URL\uB85C \uD074\uB77C\uC774\uC5B8\uD2B8\uC5D0\uC11C \uC694\uCCAD\uC744 \uBC1B\uACE0 \uCC98\uB9AC\uD568</li>
      </ul>`},image:["/project/fautonomy/01.jpg","/project/fautonomy/02.jpg","/project/fautonomy/03.jpg"]},{icon:"/project/situation/icon.png",title:{ko:"\uC628\uD1A8\uB85C\uC9C0 \uAE30\uBC18\uC758 \uC0C1\uD669\uC778\uC9C0 \uBAA8\uBC14\uC77C \uD504\uB808\uC784\uC6CC\uD06C",jp:"",en:"Situation aware mobile framework based on ontology"},simpledesc:{ko:"\uB17C\uBB38 \uB0B4\uC6A9 \uC99D\uBA85 \uAC1C\uBC1C \uC9C0\uC6D0\uC73C\uB85C \uCC38\uC5EC\uD55C \uD504\uB85C\uC81D\uD2B8",jp:"",en:""},platform:"Java, Android",tech:"Java, OWL, SPARQL, Android, Protege, Apache Jena",period:"2013",link:["https://www.researchgate.net/publication/264428214_Mobile_situation-aware_framework_for_developing_smart_mobile_software"],content:{ko:`<ul>
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
      <li>\uBAA8\uBC14\uC77C \uD658\uACBD\uC5D0\uC11C \uC0AC\uC6A9\uC790\uC758 \uD604\uC7AC \uC870\uAC74\uC5D0 \uB9DE\uB294 \uCF58\uD150\uCE20\uB97C \uC81C\uACF5\uD558\uB294 \uD504\uB808\uC784\uC6CC\uD06C</li>
      <li>\uC99D\uBA85 \uC9C0\uC6D0\uC744 \uC704\uD55C \uC548\uB4DC\uB85C\uC774\uB4DC \uC571 \uAC1C\uBC1C\uACFC \uC774\uBBF8 \uB9CC\uB4E4\uC5B4\uC9C4 \uD504\uB808\uC784\uC6CC\uD06C\uC758 \uC218\uC815\uC744 \uB2F4\uB2F9</li>
      <li>SCI-E \uB17C\uBB38\uC758 \uC81C 2\uC800\uC790\uB85C \uCC38\uAC00</li>
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
      </ul>`,en:`[\uD14C\uC2A4\uD2B8\uC6A9 \uC74C\uC545 \uC7AC\uC0DD \uC5B4\uD50C]
      <ul>
          <li>\uC2A4\uB9C8\uD2B8\uD3F0\uC758 \uC13C\uC11C\uC5D0\uC11C \uB370\uC774\uD130\uB97C \uC218\uC9D1\uD558\uACE0 \uC628\uD1A8\uB85C\uC9C0\uB97C \uC0AC\uC6A9\uD55C \uCD94\uB860\uC744 \uD1B5\uD574 \uACB0\uACFC\uAC12\uC744 \uC5BB\uC74C</li>
          <li>\uB3C4\uCD9C\uB41C \uACB0\uACFC \uAC12\uC744 \uC774\uC6A9\uD558\uC5EC \uC0AC\uC6A9\uC790\uC5D0\uAC8C \uC801\uD569\uD55C \uC74C\uC545\uC744 \uCD94\uCC9C \uBC0F \uC7AC\uC0DD</li>
      </ul>
      [\uD504\uB808\uC784\uC6CC\uD06C \uC218\uC815]
      <ul>
          <li>\uC628\uD1A8\uB85C\uC9C0\uB97C \uBD84\uC11D\uD558\uC5EC \uC0AC\uC6A9\uC790\uAC00 \uC124\uC815\uD55C \uAC12\uC744 \uD55C \uBC88\uC5D0 \uD655\uC778\uD560 \uC218 \uC788\uB294 \uD2B8\uB9AC \uAD6C\uC870 \uC0DD\uC131 \uBC0F \uC81C\uACF5</li>
      </ul>`},image:["/project/situation/01.jpg","/project/situation/02.jpg","/project/situation/03.jpg","/project/situation/04.jpg"]},{icon:"/project/bigdata/icon.png",title:{ko:"Big Data \uC11C\uBE44\uC2A4 \uC870\uD569 \uD504\uB808\uC784\uC6CC\uD06C",jp:"",en:""},simpledesc:{ko:"\uBE45 \uB370\uC774\uD130\uC758 \uC218\uC9D1, \uAC00\uACF5, \uD45C\uD604\uC744 \uC218\uD589\uD558\uB294 \uC11C\uBE44\uC2A4\uB4E4\uC744 \uC870\uD569\uD558\uC5EC \uD558\uB098\uC758 \uB370\uC774\uD130 \uD1B5\uACC4 \uCC98\uB9AC \uC2DC\uC2A4\uD15C\uC73C\uB85C \uB9CC\uB4E4\uC5B4 \uC8FC\uB294 \uD504\uB808\uC784\uC6CC\uD06C \uAC1C\uBC1C",jp:"",en:""},platform:"Web",tech:"PHP, JavaScript, jQuery, Apache HTTP Server, JBoss",period:"2013~2014",link:[],content:{ko:`<ul>
                    <li>Big Data\uC758 \uC0AC\uC6A9\uC744 \uC218\uC9D1, \uCC98\uB9AC, \uD45C\uD604\uC758 3\uAC00\uC9C0\uB85C \uB098\uB204\uC5B4 \uC11C\uBE44\uC2A4\uB4E4\uC744 \uD569\uCCD0 \uD558\uB098\uC758 \uC2DC\uC2A4\uD15C\uC744 \uB9CC\uB4E4\uC5B4\uB0B4\uB294 \uD504\uB808\uC784\uC6CC\uD06C</li>
                </ul>`,jp:`<ul>
      <li>Big Data\uC758 \uC0AC\uC6A9\uC744 \uC218\uC9D1, \uCC98\uB9AC, \uD45C\uD604\uC758 3\uAC00\uC9C0\uB85C \uB098\uB204\uC5B4 \uC11C\uBE44\uC2A4\uB4E4\uC744 \uD569\uCCD0 \uD558\uB098\uC758 \uC2DC\uC2A4\uD15C\uC744 \uB9CC\uB4E4\uC5B4\uB0B4\uB294 \uD504\uB808\uC784\uC6CC\uD06C</li>
  </ul>`,en:`<ul>
      <li>Big Data\uC758 \uC0AC\uC6A9\uC744 \uC218\uC9D1, \uCC98\uB9AC, \uD45C\uD604\uC758 3\uAC00\uC9C0\uB85C \uB098\uB204\uC5B4 \uC11C\uBE44\uC2A4\uB4E4\uC744 \uD569\uCCD0 \uD558\uB098\uC758 \uC2DC\uC2A4\uD15C\uC744 \uB9CC\uB4E4\uC5B4\uB0B4\uB294 \uD504\uB808\uC784\uC6CC\uD06C</li>
  </ul>`},dev:{ko:`<ul>
                    <li>UML\uB85C \uC2DC\uC2A4\uD15C \uAD6C\uC870 \uC124\uACC4\uC5D0 \uCC38\uC5EC</li>
                    <li>jQuery\uB97C \uC0AC\uC6A9\uD558\uC5EC UI \uC77C\uBD80\uC640 \uAD00\uB828 \uB3D9\uC791\uC744 \uAC1C\uBC1C</li>
                </ul>`,jp:`<ul>
      <li>UML\uB85C \uC2DC\uC2A4\uD15C \uAD6C\uC870 \uC124\uACC4\uC5D0 \uCC38\uC5EC</li>
      <li>jQuery\uB97C \uC0AC\uC6A9\uD558\uC5EC UI \uC77C\uBD80\uC640 \uAD00\uB828 \uB3D9\uC791\uC744 \uAC1C\uBC1C</li>
  </ul>`,en:`<ul>
      <li>UML\uB85C \uC2DC\uC2A4\uD15C \uAD6C\uC870 \uC124\uACC4\uC5D0 \uCC38\uC5EC</li>
      <li>jQuery\uB97C \uC0AC\uC6A9\uD558\uC5EC UI \uC77C\uBD80\uC640 \uAD00\uB828 \uB3D9\uC791\uC744 \uAC1C\uBC1C</li>
  </ul>`},image:["/project/bigdata/01.jpg","/project/bigdata/02.jpg"]}],mf={data(){return{tabBox:"tabBox",btnTab:"btnTab",contWrap:"contWrap",tabType:0,ProjWork:Af,ProjPersonal:pf}},methods:{changeTab:function(u){this.tabType=u,this.changeColor(u)},changeColor:u=>{const e="#fff7c2";u===0?(document.getElementById("btn0").style.backgroundColor=e,document.getElementById("btn1").style.backgroundColor="black",document.getElementById("btn0").style.color="black",document.getElementById("btn1").style.color="white"):u===1&&(document.getElementById("btn0").style.backgroundColor="black",document.getElementById("btn1").style.backgroundColor=e,document.getElementById("btn0").style.color="white",document.getElementById("btn1").style.color="black")}},mounted(){this.changeColor(this.tabType)},components:{ProjBox:df}};function hf(u,e,t,n,C,r){const i=Eu("ProjBox");return J(),X(hu,null,[h("div",{class:m(C.tabBox)},[h("button",{id:"btn0",class:m(C.btnTab),onClick:e[0]||(e[0]=a=>r.changeTab(0))}," Work Projects ",2),h("button",{id:"btn1",class:m(C.btnTab),onClick:e[1]||(e[1]=a=>r.changeTab(1))}," Personal Projects ",2)],2),h("div",{class:m(C.contWrap)},[C.tabType===0?(J(),He(i,{key:0,arr:C.ProjWork,type:"Work Projects"},null,8,["arr"])):ie("",!0),C.tabType===1?(J(),He(i,{key:1,arr:C.ProjPersonal,type:"Personal Projects"},null,8,["arr"])):ie("",!0)],2)],64)}const gf=ku(mf,[["render",hf],["__scopeId","data-v-d96afcc9"]]),vf={data(){return{proj:"proj",title:"title"}},components:{ProjLayout:gf}};const bf=u=>(Ts("data-v-15fe2cae"),u=u(),js(),u),Ef=wu(" Project "),yf=bf(()=>h("div",null,"CLICK TO EXPAND EACH ITEM",-1));function _f(u,e,t,n,C,r){const i=Eu("font-awesome-icon"),a=Eu("ProjLayout");return J(),X("div",{class:m(C.proj)},[h("div",{class:m(C.title)},[N(i,{icon:"fa-solid fa-angle-double-right"}),Ef,N(i,{icon:"fa-solid fa-angle-double-left"})],2),yf,N(a)],2)}const Ff=ku(vf,[["render",_f],["__scopeId","data-v-15fe2cae"]]),kf={props:{data:Object},data:()=>({itemBox:"itemBox",titleBox:"titleBox",title:"title",titleIcon:"titleIcon",itemTitle:"itemTitle"})};const wf=["src"],Sf={key:0},xf={key:1},Pf={key:2};function If(u,e,t,n,C,r){return J(),X("div",{class:m(u.itemBox)},[h("div",{class:m(u.titleBox)},[h("img",{class:m(u.titleIcon),src:t.data.icon},null,10,wf),h("div",{class:m(u.title)},eu(t.data.name),3)],2),t.data.about.length>0?(J(),X("div",Sf,[h("span",{class:m(u.itemTitle)},"About",2),h("ul",null,[(J(!0),X(hu,null,we(t.data.about,i=>(J(),X("li",null,eu(i),1))),256))])])):ie("",!0),t.data.exp.length>0?(J(),X("div",xf,[h("span",{class:m(u.itemTitle)},"Experience",2),h("ul",null,[(J(!0),X(hu,null,we(t.data.exp,i=>(J(),X("li",null,eu(i),1))),256))])])):ie("",!0),t.data.etc.length>0?(J(),X("div",Pf,[h("span",{class:m(u.itemTitle)},"Etc",2),h("ul",null,[(J(!0),X(hu,null,we(t.data.etc,i=>(J(),X("li",null,eu(i),1))),256))])])):ie("",!0)],2)}const Tf=ku(kf,[["render",If],["__scopeId","data-v-e58c7f27"]]),jf={props:{item:Object},components:{TechItemVue:Tf},data:function(){const u=Ke().lang,e=gt().theme;return{box:"box",titleBox:e==="light"?"titleBox titleLight":"titleBox titleDark",detailBox:e==="light"?"detailBox detailLight":"detailBox detailDark",techItemDetails:u==="ko"?this.$props.item.details.ko:u==="jp"?this.$props.item.details.jp:this.$props.item.details.en}}};function Of(u,e,t,n,C,r){const i=Eu("TechItemVue");return J(),X("div",{class:m(u.box)},[h("div",{class:m(u.titleBox)},eu(t.item.title),3),(J(!0),X(hu,null,we(u.techItemDetails,a=>(J(),X("div",{class:m(u.detailBox)},[N(i,{data:a},null,8,["data"])],2))),256))],2)}const Rf=ku(jf,[["render",Of],["__scopeId","data-v-dece24a4"]]),Mf={name:"React",icon:"/tech/react.png",about:["\uC8FC\uB85C \uC0AC\uC6A9 \uB77C\uC774\uBE0C\uB7EC\uB9AC\uC785\uB2C8\uB2E4","\uC5B8\uC5B4\uB294 TypeScript\uB97C \uB300\uBD80\uBD84 \uC0AC\uC6A9\uD569\uB2C8\uB2E4","Custom Hooks\uB97C \uD65C\uC6A9\uD558\uC5EC \uBE44\uC988\uB2C8\uC2A4 \uB85C\uC9C1\uC744 \uC791\uC131\uD558\uACE0 \uAD00\uB9AC\uD569\uB2C8\uB2E4","\uC0C1\uD0DC\uAD00\uB9AC \uB77C\uC774\uBE0C\uB7EC\uB9AC \uD65C\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4 (redux \uB4F1)","NextJS\uB85C SSR\uC774 \uC801\uC6A9\uB41C \uD648\uD398\uC774\uC9C0\uB97C \uAC1C\uBC1C\uD55C \uACBD\uD5D8\uC774 \uC788\uC2B5\uB2C8\uB2E4"],exp:["\uC5C5\uBB34 \uBC0F \uAC1C\uC778 \uD504\uB85C\uC81D\uD2B8 \uB2E4\uC218\uC5D0\uC11C \uC0AC\uC6A9","\uC0C1\uC138\uD55C \uB0B4\uC6A9\uC740 Project \uB780\uC744 \uCC38\uACE0\uD574\uC8FC\uC138\uC694"],etc:[]},Lf={name:"Vue",icon:"/tech/vue.png",about:["\uC774 \uC6F9\uD398\uC774\uC9C0\uAC00 vue3+pinia\uB85C \uB9CC\uB4E4\uC5B4\uC84C\uC5B4\uC694!","\uC544\uC9C1 \uC5C5\uBB34\uB4F1\uC5D0 \uC0AC\uC6A9\uD574 \uBCF8 \uC801\uC740 \uC5C6\uC9C0\uB9CC \uACF5\uBD80\uC911\uC785\uB2C8\uB2E4"],exp:[],etc:[]},Nf={name:"HTML and CSS",icon:"/tech/html.png",about:["\uCD5C\uADFC\uC5D0\uB294 CSS-in-JS\uB97C \uC790\uC8FC \uD65C\uC6A9\uD558\uC5EC \uAC1C\uBC1C\uD569\uB2C8\uB2E4 (styled-components, emotion-js \uB4F1)"],exp:[],etc:[]},Uf={name:"React",icon:"/tech/react.png",about:["\u4E3B\u306B\u5229\u7528\u3057\u3066\u3044\u308B\u30E9\u30A4\u30D6\u30E9\u30EA\u3067\u3059","\u8A00\u8A9E\u306FTypeScript\u3092\u4F7F\u3063\u3066\u3044\u307E\u3059","Custom Hooks\u3092\u6D3B\u7528\u3057\u30D3\u30B9\u30CD\u30B9\u30ED\u30B8\u30C3\u30AF\u3092\u4F5C\u6210\u30FB\u7BA1\u7406\u3057\u307E\u3059","\u72B6\u614B\u7BA1\u7406\u30E9\u30A4\u30D6\u30E9\u30EA\u3092\u6D3B\u7528\u3067\u304D\u307E\u3059 (redux\u306A\u3069)","NextJS\u3092\u5229\u7528\u3057\u305FSSR\u30A6\u30A7\u30D6\u30B5\u30A4\u30C8\u306E\u4F5C\u6210\u7D4C\u9A13\u304C\u3042\u308A\u307E\u3059"],exp:["\u696D\u52D9\u30FB\u500B\u4EBA\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u591A\u6570\u304B\u3089\u5229\u7528","\u8A73\u7D30\u306FProject\u30DA\u30FC\u30B8\u3092\u53C2\u8003\u306B\u3057\u3066\u304F\u3060\u3055\u3044"],etc:[]},Wf={name:"Vue",icon:"/tech/vue.png",about:["\u3053\u306E\u30DA\u30FC\u30B8\u304Cvue3+pinia\u3067\u3064\u304F\u3089\u308C\u307E\u3057\u305F","\u307E\u3060\u696D\u52D9\u3067\u5229\u7528\u3057\u305F\u3053\u3068\u306F\u3042\u308A\u307E\u305B\u3093\u304C\u3001\u7814\u7A76\u4E2D\u3067\u3059"],exp:[],etc:[]},zf={name:"HTML and CSS",icon:"/tech/html.png",about:["\u6700\u8FD1\u306FCSS-in-JS\u3092\u3088\u304F\u4F7F\u3063\u3066\u3044\u307E\u3059 (styled-components, emotion-js)"],exp:[],etc:[]},Hf={name:"React",icon:"/tech/react.png",about:["Mostly used library","Using TypeScript for development","Using custom hooks to generate and manage business logic","Experienced state management libraries (such as redux)","Have experience for developing SSR web site using NextJS"],exp:["Used in several work and personal projects","Check project page for details"],etc:[]},Jf={name:"Vue",icon:"/tech/vue.png",about:["This web page is made of vue3+pinia","Still not used in work, but still studying"],exp:[],etc:[]},$f={name:"HTML and CSS",icon:"/tech/html.png",about:["Using CSS-in-JS recently (styled-components, emotion-js)"],exp:[],etc:[]},Kf={title:"Frontend",details:{ko:[Mf,Lf,Nf],en:[Hf,Jf,$f],jp:[Uf,Wf,zf]}},Vf={name:"Spring/SpringBoot",icon:"/tech/spring.png",about:["\uC6F9 \uBC31\uC5D4\uB4DC \uBC0F REST API \uC11C\uBC84 \uC81C\uC791 \uACBD\uD5D8"],exp:["\uC5C5\uBB34 \uBC0F \uAC1C\uC778 \uD504\uB85C\uC81D\uD2B8\uC5D0\uC11C \uC0AC\uC6A9"],etc:[]},Gf={name:"NodeJS",icon:"/tech/nodejs.png",about:["\uAC1C\uC778 \uD504\uB85C\uC81D\uD2B8\uC758 \uC11C\uBC84\uB9AC\uC2A4 \uC2DC\uC2A4\uD15C\uC5D0 \uC0AC\uC6A9 (AWS Lambda)"],exp:["\uAC1C\uC778 \uD504\uB85C\uC81D\uD2B8\uC5D0\uC11C \uC0AC\uC6A9"],etc:[]},Yf={name:"Spring/SpringBoot",icon:"/tech/spring.png",about:["\u30D0\u30C3\u30AF\u30A8\u30F3\u30C9\u30FBREST API\u306E\u5236\u4F5C\u7D4C\u9A13\u3042\u308A"],exp:["\u696D\u52D9\u30FB\u500B\u4EBA\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3067\u5229\u7528"],etc:[]},qf={name:"NodeJS",icon:"/tech/nodejs.png",about:["\u500B\u4EBA\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306E\u30B5\u30FC\u30D0\u30FC\u30EC\u30B9\u30B7\u30B9\u30C6\u30E0\u3092\u4F5C\u6210 (AWS Lambda)"],exp:["\u500B\u4EBA\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3067\u5229\u7528"],etc:[]},Xf={name:"Spring/SpringBoot",icon:"/tech/spring.png",about:["Experienced in web backend and REST API development"],exp:["Used in both work and personal projects"],etc:[]},Qf={name:"NodeJS",icon:"/tech/nodejs.png",about:["Used in personal project (AWS Lambda, serverless backend)"],exp:["Used in personal project"],etc:[]},Zf={title:"Backend",details:{ko:[Vf,Gf],en:[Xf,Qf],jp:[Yf,qf]}},uB={name:"Unity 3D",icon:"/tech/unity.png",about:["Tried developing game with Unity from work or personal project"],exp:["Created a simple game using AI library from work","Created BMS Player(Rhythm game) as a toy project (details in Project page)"],etc:[]},eB={name:"Android",icon:"/tech/android.png",about:["Experienced with create and release of Android apps when I was in colleage"],exp:[],etc:[]},tB={name:"UML creation",icon:"/tech/uml.png",about:["Learned and used UML from lab in undergraduate/graduate"],exp:[],etc:[]},nB={name:"Other than development",icon:"/tech/nondev.png",about:["Can work with MS Office documentation","Edit image with Photoshop","Create video with DaVinci Resolve"],exp:[],etc:["Has a YouTube channel for fan edit video"]},CB={name:"Etc",icon:"/tech/etc.png",about:["RDBs are commonly used when I need database for my system","Using GitLab, BitBucket, GitHub for version control","Jest and testing-library for testing codes"],exp:[],etc:[]},rB={name:"Unity 3D",icon:"/tech/unity.png",about:["\u4EE5\u524D\u306E\u4F1A\u793E\u30FB\u500B\u4EBA\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3067\u7C21\u5358\u306A\u30B2\u30FC\u30E0\u3092\u4F5C\u3063\u305F\u3053\u3068\u304C\u3042\u308A\u307E\u3059"],exp:["AI\u30E9\u30A4\u30D6\u30E9\u30EA\u3092\u6D3B\u7528\u3057\u305F\u30B2\u30FC\u30E0\u958B\u767A (\u696D\u52D9)","\u30EA\u30BA\u30E0\u30B2\u30FC\u30E0BMS Player\u306EToy Project\u9032\u884C (Project\u53C2\u8003)"],etc:[]},iB={name:"Android",icon:"/tech/android.png",about:["\u5927\u5B66\u6642\u4EE3\u304B\u3089Android\u306E\u30A2\u30D7\u30EA\u3092\u5236\u4F5C\u3057\u3066\u30EA\u30EA\u30FC\u30B9\u306E\u7D4C\u9A13\u3082\u3042\u308A\u307E\u3059"],exp:[],etc:[]},aB={name:"UML\u8A2D\u8A08",icon:"/tech/uml.png",about:["\u5B66\u90E8\u30FB\u5927\u5B66\u9662\u306E\u7814\u7A76\u5BA4\u3067UML\u8A2D\u8A08\u3092\u5B66\u3073\u3001\u5B9F\u969B\u306E\u958B\u767A\u3067\u3082\u4F7F\u3044\u307E\u3057\u305F"],exp:[],etc:[]},oB={name:"\u958B\u767A\u4EE5\u5916",icon:"/tech/nondev.png",about:["MS Office\u306E\u6587\u66F8\u4F5C\u6210","Photoshop\u3067\u30A4\u30E1\u30FC\u30B8\u7DE8\u96C6\u53EF\u80FD","DaVinci Resolve\u3092\u5229\u7528\u3057\u305F\u6620\u50CF\u7DE8\u96C6\u53EF\u80FD"],exp:[],etc:["YouTube\u3067\u30D5\u30A1\u30F3\u52D5\u753B\u3092\u30A2\u30C3\u30D7\u3059\u308B\u30C1\u30E3\u30F3\u30CD\u30EB\u3092\u904B\u55B6\u3057\u3066\u3044\u307E\u3059"]},sB={name:"\u305D\u306E\u4ED6",icon:"/tech/etc.png",about:["\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u304C\u5FC5\u8981\u306A\u3068\u304D\u306FRDB\u3092\u3088\u304F\u5229\u7528\u3057\u307E\u3059","\u30D0\u30FC\u30B8\u30E7\u30F3\u30B3\u30F3\u30C8\u30ED\u30FC\u30EB\u306B\u306FGitLab, BitBucket, GitHub\u3092\u5229\u7528\u3057\u307E\u3059","\u958B\u767A\u30C6\u30B9\u30C8\u306E\u305F\u3081Jest\u30FBtesting-library\u3092\u5229\u7528\u3057\u307E\u3059"],exp:[],etc:[]},lB={name:"Unity 3D",icon:"/tech/unity.png",about:["\uC774\uC804 \uD68C\uC0AC \uBC0F \uAC1C\uC778 \uAC1C\uBC1C\uB85C \uAC04\uB2E8\uD55C \uAC8C\uC784\uC744 \uB9CC\uB4E4\uC5B4 \uBCF8 \uC801\uC774 \uC788\uC2B5\uB2C8\uB2E4"],exp:["AI \uB77C\uC774\uBE0C\uB7EC\uB9AC \uD65C\uC6A9 \uAC8C\uC784 \uAC1C\uBC1C (\uC5C5\uBB34)","\uB9AC\uB4EC\uAC8C\uC784 BMS Player \uD1A0\uC774\uD504\uB85C\uC81D\uD2B8 \uAC1C\uBC1C \uC9C4\uD589 (Project \uCC38\uACE0)"],etc:[]},cB={name:"Android",icon:"/tech/android.png",about:["\uB300\uD559\uAD50 \uD559\uBD80\uC0DD \uC2DC\uC808\uBD80\uD130 \uC548\uB4DC\uB85C\uC774\uB4DC \uC571\uC744 \uB9CC\uB4E4\uC5B4 \uB9C8\uCF13\uC5D0 \uC62C\uB9AC\uAC70\uB098 \uD55C \uACBD\uD5D8\uC774 \uC788\uC2B5\uB2C8\uB2E4"],exp:[],etc:[]},fB={name:"UML \uC124\uACC4",icon:"/tech/uml.png",about:["\uD559\uBD80\uC0DD/\uB300\uD559\uC6D0 \uC5F0\uAD6C\uC2E4\uC5D0\uC11C UML \uC124\uACC4\uB97C \uBC30\uC6E0\uC2B5\uB2C8\uB2E4"],exp:[],etc:[]},BB={name:"\uAC1C\uBC1C \uC774\uC678",icon:"/tech/nondev.png",about:["MS Office \uBB38\uC11C \uC791\uC131 \uAC00\uB2A5","Photoshop \uD3B8\uC9D1 \uAC00\uB2A5","DaVinci Resolve \uC601\uC0C1\uD3B8\uC9D1 \uAC00\uB2A5"],exp:[],etc:["YouTube\uC5D0\uC11C \uD32C \uC601\uC0C1 \uD3B8\uC9D1 \uCC44\uB110 \uC6B4\uC601 \uC911"]},DB={name:"\uAE30\uD0C0",icon:"/tech/etc.png",about:["\uAC1C\uBC1C \uC911 \uB370\uC774\uD130\uBCA0\uC774\uC2A4\uAC00 \uD544\uC694\uD55C \uACBD\uC6B0 \uC8FC\uB85C RDB\uB97C \uD65C\uC6A9\uD558\uC600\uC2B5\uB2C8\uB2E4","\uBC84\uC804\uAD00\uB9AC\uB294 GitLab, BitBucket, GitHub\uC744 \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4","\uAC1C\uBC1C \uD14C\uC2A4\uD2B8\uC5D0\uB294 Jest\uC640 testing-library\uB97C \uC0AC\uC6A9\uD569\uB2C8\uB2E4"],exp:[],etc:[]},dB={title:"Non-Web",details:{ko:[lB,cB,fB,DB,BB],en:[uB,eB,tB,CB,nB],jp:[rB,iB,aB,sB,oB]}},pB={data:()=>({techFront:Kf,techBackend:Zf,techNonWeb:dB,tabBox:"tabBox",techBox:"techBox",btnTab:"btnTab",tabType:0}),methods:{changeTab:function(u){this.tabType=u,this.changeColor(u)},changeColor:u=>{const e="#fff7c2";u===0?(document.getElementById("btn0").style.backgroundColor=e,document.getElementById("btn1").style.backgroundColor="black",document.getElementById("btn2").style.backgroundColor="black",document.getElementById("btn0").style.color="black",document.getElementById("btn1").style.color="white",document.getElementById("btn2").style.color="white"):u===1?(document.getElementById("btn0").style.backgroundColor="black",document.getElementById("btn1").style.backgroundColor=e,document.getElementById("btn2").style.backgroundColor="black",document.getElementById("btn0").style.color="white",document.getElementById("btn1").style.color="black",document.getElementById("btn2").style.color="white"):u===2&&(document.getElementById("btn0").style.backgroundColor="black",document.getElementById("btn1").style.backgroundColor="black",document.getElementById("btn2").style.backgroundColor=e,document.getElementById("btn0").style.color="white",document.getElementById("btn1").style.color="white",document.getElementById("btn2").style.color="black")}},components:{TechBox:Rf},mounted(){this.changeColor(this.tabType)}};function AB(u,e,t,n,C,r){const i=Eu("TechBox");return J(),X(hu,null,[h("div",{class:m(u.tabBox)},[h("button",{id:"btn0",class:m(u.btnTab),onClick:e[0]||(e[0]=a=>r.changeTab(0))},"Frontend",2),h("button",{id:"btn1",class:m(u.btnTab),onClick:e[1]||(e[1]=a=>r.changeTab(1))},"Backend",2),h("button",{id:"btn2",class:m(u.btnTab),onClick:e[2]||(e[2]=a=>r.changeTab(2))},"Non-web",2)],2),h("div",{class:m(u.techBox)},[u.tabType===0?(J(),He(i,{key:0,item:u.techFront},null,8,["item"])):ie("",!0),u.tabType===1?(J(),He(i,{key:1,item:u.techBackend},null,8,["item"])):ie("",!0),u.tabType===2?(J(),He(i,{key:2,item:u.techNonWeb},null,8,["item"])):ie("",!0)],2)],64)}const mB=ku(pB,[["render",AB],["__scopeId","data-v-6d951990"]]),hB={data(){return{proj:"proj",title:"title"}},components:{TechLayout:mB}};const gB=wu(" Tech ");function vB(u,e,t,n,C,r){const i=Eu("font-awesome-icon"),a=Eu("TechLayout");return J(),X("div",{class:m(C.proj)},[h("div",{class:m(C.title)},[N(i,{icon:"fa-solid fa-angle-double-right"}),gB,N(i,{icon:"fa-solid fa-angle-double-left"})],2),N(a)],2)}const bB=ku(hB,[["render",vB],["__scopeId","data-v-f890d54e"]]),EB=s0({history:_c("/"),routes:[{path:"/",name:"index",component:N0},{path:"/about",name:"about",component:Y0},{path:"/tech",name:"tech",component:bB},{path:"/project",name:"project",component:Ff},{path:"/link",name:"link",component:tf}]});function mi(u,e){var t=Object.keys(u);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(u);e&&(n=n.filter(function(C){return Object.getOwnPropertyDescriptor(u,C).enumerable})),t.push.apply(t,n)}return t}function I(u){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?mi(Object(t),!0).forEach(function(n){yu(u,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(u,Object.getOwnPropertyDescriptors(t)):mi(Object(t)).forEach(function(n){Object.defineProperty(u,n,Object.getOwnPropertyDescriptor(t,n))})}return u}function Fn(u){return Fn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Fn(u)}function yB(u,e){if(!(u instanceof e))throw new TypeError("Cannot call a class as a function")}function hi(u,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(u,n.key,n)}}function _B(u,e,t){return e&&hi(u.prototype,e),t&&hi(u,t),Object.defineProperty(u,"prototype",{writable:!1}),u}function yu(u,e,t){return e in u?Object.defineProperty(u,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):u[e]=t,u}function lr(u,e){return kB(u)||SB(u,e)||to(u,e)||PB()}function qt(u){return FB(u)||wB(u)||to(u)||xB()}function FB(u){if(Array.isArray(u))return wC(u)}function kB(u){if(Array.isArray(u))return u}function wB(u){if(typeof Symbol<"u"&&u[Symbol.iterator]!=null||u["@@iterator"]!=null)return Array.from(u)}function SB(u,e){var t=u==null?null:typeof Symbol<"u"&&u[Symbol.iterator]||u["@@iterator"];if(t!=null){var n=[],C=!0,r=!1,i,a;try{for(t=t.call(u);!(C=(i=t.next()).done)&&(n.push(i.value),!(e&&n.length===e));C=!0);}catch(o){r=!0,a=o}finally{try{!C&&t.return!=null&&t.return()}finally{if(r)throw a}}return n}}function to(u,e){if(!!u){if(typeof u=="string")return wC(u,e);var t=Object.prototype.toString.call(u).slice(8,-1);if(t==="Object"&&u.constructor&&(t=u.constructor.name),t==="Map"||t==="Set")return Array.from(u);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return wC(u,e)}}function wC(u,e){(e==null||e>u.length)&&(e=u.length);for(var t=0,n=new Array(e);t<e;t++)n[t]=u[t];return n}function xB(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function PB(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var gi=function(){},cr={},no={},Co=null,ro={mark:gi,measure:gi};try{typeof window<"u"&&(cr=window),typeof document<"u"&&(no=document),typeof MutationObserver<"u"&&(Co=MutationObserver),typeof performance<"u"&&(ro=performance)}catch{}var IB=cr.navigator||{},vi=IB.userAgent,bi=vi===void 0?"":vi,xe=cr,du=no,Ei=Co,Cn=ro;xe.document;var me=!!du.documentElement&&!!du.head&&typeof du.addEventListener=="function"&&typeof du.createElement=="function",io=~bi.indexOf("MSIE")||~bi.indexOf("Trident/"),rn,an,on,sn,ln,De="___FONT_AWESOME___",SC=16,ao="fa",oo="svg-inline--fa",Ve="data-fa-i2svg",xC="data-fa-pseudo-element",TB="data-fa-pseudo-element-pending",fr="data-prefix",Br="data-icon",yi="fontawesome-i2svg",jB="async",OB=["HTML","HEAD","STYLE","SCRIPT"],so=function(){try{return!0}catch{return!1}}(),Du="classic",mu="sharp",Dr=[Du,mu];function Xt(u){return new Proxy(u,{get:function(t,n){return n in t?t[n]:t[Du]}})}var Ht=Xt((rn={},yu(rn,Du,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),yu(rn,mu,{fa:"solid",fass:"solid","fa-solid":"solid"}),rn)),Jt=Xt((an={},yu(an,Du,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),yu(an,mu,{solid:"fass"}),an)),$t=Xt((on={},yu(on,Du,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),yu(on,mu,{fass:"fa-solid"}),on)),RB=Xt((sn={},yu(sn,Du,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),yu(sn,mu,{"fa-solid":"fass"}),sn)),MB=/fa(s|r|l|t|d|b|k|ss)?[\-\ ]/,lo="fa-layers-text",LB=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,NB=Xt((ln={},yu(ln,Du,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),yu(ln,mu,{900:"fass"}),ln)),co=[1,2,3,4,5,6,7,8,9,10],UB=co.concat([11,12,13,14,15,16,17,18,19,20]),WB=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Ne={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Kt=new Set;Object.keys(Jt[Du]).map(Kt.add.bind(Kt));Object.keys(Jt[mu]).map(Kt.add.bind(Kt));var zB=[].concat(Dr,qt(Kt),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Ne.GROUP,Ne.SWAP_OPACITY,Ne.PRIMARY,Ne.SECONDARY]).concat(co.map(function(u){return"".concat(u,"x")})).concat(UB.map(function(u){return"w-".concat(u)})),Tt=xe.FontAwesomeConfig||{};function HB(u){var e=du.querySelector("script["+u+"]");if(e)return e.getAttribute(u)}function JB(u){return u===""?!0:u==="false"?!1:u==="true"?!0:u}if(du&&typeof du.querySelector=="function"){var $B=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];$B.forEach(function(u){var e=lr(u,2),t=e[0],n=e[1],C=JB(HB(t));C!=null&&(Tt[n]=C)})}var fo={styleDefault:"solid",familyDefault:"classic",cssPrefix:ao,replacementClass:oo,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Tt.familyPrefix&&(Tt.cssPrefix=Tt.familyPrefix);var dt=I(I({},fo),Tt);dt.autoReplaceSvg||(dt.observeMutations=!1);var R={};Object.keys(fo).forEach(function(u){Object.defineProperty(R,u,{enumerable:!0,set:function(t){dt[u]=t,jt.forEach(function(n){return n(R)})},get:function(){return dt[u]}})});Object.defineProperty(R,"familyPrefix",{enumerable:!0,set:function(e){dt.cssPrefix=e,jt.forEach(function(t){return t(R)})},get:function(){return dt.cssPrefix}});xe.FontAwesomeConfig=R;var jt=[];function KB(u){return jt.push(u),function(){jt.splice(jt.indexOf(u),1)}}var be=SC,re={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function VB(u){if(!(!u||!me)){var e=du.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=u;for(var t=du.head.childNodes,n=null,C=t.length-1;C>-1;C--){var r=t[C],i=(r.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(i)>-1&&(n=r)}return du.head.insertBefore(e,n),u}}var GB="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Vt(){for(var u=12,e="";u-- >0;)e+=GB[Math.random()*62|0];return e}function vt(u){for(var e=[],t=(u||[]).length>>>0;t--;)e[t]=u[t];return e}function dr(u){return u.classList?vt(u.classList):(u.getAttribute("class")||"").split(" ").filter(function(e){return e})}function Bo(u){return"".concat(u).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function YB(u){return Object.keys(u||{}).reduce(function(e,t){return e+"".concat(t,'="').concat(Bo(u[t]),'" ')},"").trim()}function Kn(u){return Object.keys(u||{}).reduce(function(e,t){return e+"".concat(t,": ").concat(u[t].trim(),";")},"")}function pr(u){return u.size!==re.size||u.x!==re.x||u.y!==re.y||u.rotate!==re.rotate||u.flipX||u.flipY}function qB(u){var e=u.transform,t=u.containerWidth,n=u.iconWidth,C={transform:"translate(".concat(t/2," 256)")},r="translate(".concat(e.x*32,", ").concat(e.y*32,") "),i="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),o={transform:"".concat(r," ").concat(i," ").concat(a)},l={transform:"translate(".concat(n/2*-1," -256)")};return{outer:C,inner:o,path:l}}function XB(u){var e=u.transform,t=u.width,n=t===void 0?SC:t,C=u.height,r=C===void 0?SC:C,i=u.startCentered,a=i===void 0?!1:i,o="";return a&&io?o+="translate(".concat(e.x/be-n/2,"em, ").concat(e.y/be-r/2,"em) "):a?o+="translate(calc(-50% + ".concat(e.x/be,"em), calc(-50% + ").concat(e.y/be,"em)) "):o+="translate(".concat(e.x/be,"em, ").concat(e.y/be,"em) "),o+="scale(".concat(e.size/be*(e.flipX?-1:1),", ").concat(e.size/be*(e.flipY?-1:1),") "),o+="rotate(".concat(e.rotate,"deg) "),o}var QB=`:root, :host {
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
}`;function Do(){var u=ao,e=oo,t=R.cssPrefix,n=R.replacementClass,C=QB;if(t!==u||n!==e){var r=new RegExp("\\.".concat(u,"\\-"),"g"),i=new RegExp("\\--".concat(u,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");C=C.replace(r,".".concat(t,"-")).replace(i,"--".concat(t,"-")).replace(a,".".concat(n))}return C}var _i=!1;function iC(){R.autoAddCss&&!_i&&(VB(Do()),_i=!0)}var ZB={mixout:function(){return{dom:{css:Do,insertCss:iC}}},hooks:function(){return{beforeDOMElementCreation:function(){iC()},beforeI2svg:function(){iC()}}}},de=xe||{};de[De]||(de[De]={});de[De].styles||(de[De].styles={});de[De].hooks||(de[De].hooks={});de[De].shims||(de[De].shims=[]);var Yu=de[De],po=[],u5=function u(){du.removeEventListener("DOMContentLoaded",u),kn=1,po.map(function(e){return e()})},kn=!1;me&&(kn=(du.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(du.readyState),kn||du.addEventListener("DOMContentLoaded",u5));function e5(u){!me||(kn?setTimeout(u,0):po.push(u))}function Qt(u){var e=u.tag,t=u.attributes,n=t===void 0?{}:t,C=u.children,r=C===void 0?[]:C;return typeof u=="string"?Bo(u):"<".concat(e," ").concat(YB(n),">").concat(r.map(Qt).join(""),"</").concat(e,">")}function Fi(u,e,t){if(u&&u[e]&&u[e][t])return{prefix:e,iconName:t,icon:u[e][t]}}var t5=function(e,t){return function(n,C,r,i){return e.call(t,n,C,r,i)}},aC=function(e,t,n,C){var r=Object.keys(e),i=r.length,a=C!==void 0?t5(t,C):t,o,l,s;for(n===void 0?(o=1,s=e[r[0]]):(o=0,s=n);o<i;o++)l=r[o],s=a(s,e[l],l,e);return s};function n5(u){for(var e=[],t=0,n=u.length;t<n;){var C=u.charCodeAt(t++);if(C>=55296&&C<=56319&&t<n){var r=u.charCodeAt(t++);(r&64512)==56320?e.push(((C&1023)<<10)+(r&1023)+65536):(e.push(C),t--)}else e.push(C)}return e}function PC(u){var e=n5(u);return e.length===1?e[0].toString(16):null}function C5(u,e){var t=u.length,n=u.charCodeAt(e),C;return n>=55296&&n<=56319&&t>e+1&&(C=u.charCodeAt(e+1),C>=56320&&C<=57343)?(n-55296)*1024+C-56320+65536:n}function ki(u){return Object.keys(u).reduce(function(e,t){var n=u[t],C=!!n.icon;return C?e[n.iconName]=n.icon:e[t]=n,e},{})}function IC(u,e){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},n=t.skipHooks,C=n===void 0?!1:n,r=ki(e);typeof Yu.hooks.addPack=="function"&&!C?Yu.hooks.addPack(u,ki(e)):Yu.styles[u]=I(I({},Yu.styles[u]||{}),r),u==="fas"&&IC("fa",e)}var cn,fn,Bn,et=Yu.styles,r5=Yu.shims,i5=(cn={},yu(cn,Du,Object.values($t[Du])),yu(cn,mu,Object.values($t[mu])),cn),Ar=null,Ao={},mo={},ho={},go={},vo={},a5=(fn={},yu(fn,Du,Object.keys(Ht[Du])),yu(fn,mu,Object.keys(Ht[mu])),fn);function o5(u){return~zB.indexOf(u)}function s5(u,e){var t=e.split("-"),n=t[0],C=t.slice(1).join("-");return n===u&&C!==""&&!o5(C)?C:null}var bo=function(){var e=function(r){return aC(et,function(i,a,o){return i[o]=aC(a,r,{}),i},{})};Ao=e(function(C,r,i){if(r[3]&&(C[r[3]]=i),r[2]){var a=r[2].filter(function(o){return typeof o=="number"});a.forEach(function(o){C[o.toString(16)]=i})}return C}),mo=e(function(C,r,i){if(C[i]=i,r[2]){var a=r[2].filter(function(o){return typeof o=="string"});a.forEach(function(o){C[o]=i})}return C}),vo=e(function(C,r,i){var a=r[2];return C[i]=i,a.forEach(function(o){C[o]=i}),C});var t="far"in et||R.autoFetchSvg,n=aC(r5,function(C,r){var i=r[0],a=r[1],o=r[2];return a==="far"&&!t&&(a="fas"),typeof i=="string"&&(C.names[i]={prefix:a,iconName:o}),typeof i=="number"&&(C.unicodes[i.toString(16)]={prefix:a,iconName:o}),C},{names:{},unicodes:{}});ho=n.names,go=n.unicodes,Ar=Vn(R.styleDefault,{family:R.familyDefault})};KB(function(u){Ar=Vn(u.styleDefault,{family:R.familyDefault})});bo();function mr(u,e){return(Ao[u]||{})[e]}function l5(u,e){return(mo[u]||{})[e]}function Ue(u,e){return(vo[u]||{})[e]}function Eo(u){return ho[u]||{prefix:null,iconName:null}}function c5(u){var e=go[u],t=mr("fas",u);return e||(t?{prefix:"fas",iconName:t}:null)||{prefix:null,iconName:null}}function Pe(){return Ar}var hr=function(){return{prefix:null,iconName:null,rest:[]}};function Vn(u){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=e.family,n=t===void 0?Du:t,C=Ht[n][u],r=Jt[n][u]||Jt[n][C],i=u in Yu.styles?u:null;return r||i||null}var wi=(Bn={},yu(Bn,Du,Object.keys($t[Du])),yu(Bn,mu,Object.keys($t[mu])),Bn);function Gn(u){var e,t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.skipLookups,C=n===void 0?!1:n,r=(e={},yu(e,Du,"".concat(R.cssPrefix,"-").concat(Du)),yu(e,mu,"".concat(R.cssPrefix,"-").concat(mu)),e),i=null,a=Du;(u.includes(r[Du])||u.some(function(l){return wi[Du].includes(l)}))&&(a=Du),(u.includes(r[mu])||u.some(function(l){return wi[mu].includes(l)}))&&(a=mu);var o=u.reduce(function(l,s){var f=s5(R.cssPrefix,s);if(et[s]?(s=i5[a].includes(s)?RB[a][s]:s,i=s,l.prefix=s):a5[a].indexOf(s)>-1?(i=s,l.prefix=Vn(s,{family:a})):f?l.iconName=f:s!==R.replacementClass&&s!==r[Du]&&s!==r[mu]&&l.rest.push(s),!C&&l.prefix&&l.iconName){var D=i==="fa"?Eo(l.iconName):{},p=Ue(l.prefix,l.iconName);D.prefix&&(i=null),l.iconName=D.iconName||p||l.iconName,l.prefix=D.prefix||l.prefix,l.prefix==="far"&&!et.far&&et.fas&&!R.autoFetchSvg&&(l.prefix="fas")}return l},hr());return(u.includes("fa-brands")||u.includes("fab"))&&(o.prefix="fab"),(u.includes("fa-duotone")||u.includes("fad"))&&(o.prefix="fad"),!o.prefix&&a===mu&&(et.fass||R.autoFetchSvg)&&(o.prefix="fass",o.iconName=Ue(o.prefix,o.iconName)||o.iconName),(o.prefix==="fa"||i==="fa")&&(o.prefix=Pe()||"fas"),o}var f5=function(){function u(){yB(this,u),this.definitions={}}return _B(u,[{key:"add",value:function(){for(var t=this,n=arguments.length,C=new Array(n),r=0;r<n;r++)C[r]=arguments[r];var i=C.reduce(this._pullDefinitions,{});Object.keys(i).forEach(function(a){t.definitions[a]=I(I({},t.definitions[a]||{}),i[a]),IC(a,i[a]);var o=$t[Du][a];o&&IC(o,i[a]),bo()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(t,n){var C=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(C).map(function(r){var i=C[r],a=i.prefix,o=i.iconName,l=i.icon,s=l[2];t[a]||(t[a]={}),s.length>0&&s.forEach(function(f){typeof f=="string"&&(t[a][f]=l)}),t[a][o]=l}),t}}]),u}(),Si=[],tt={},ot={},B5=Object.keys(ot);function D5(u,e){var t=e.mixoutsTo;return Si=u,tt={},Object.keys(ot).forEach(function(n){B5.indexOf(n)===-1&&delete ot[n]}),Si.forEach(function(n){var C=n.mixout?n.mixout():{};if(Object.keys(C).forEach(function(i){typeof C[i]=="function"&&(t[i]=C[i]),Fn(C[i])==="object"&&Object.keys(C[i]).forEach(function(a){t[i]||(t[i]={}),t[i][a]=C[i][a]})}),n.hooks){var r=n.hooks();Object.keys(r).forEach(function(i){tt[i]||(tt[i]=[]),tt[i].push(r[i])})}n.provides&&n.provides(ot)}),t}function TC(u,e){for(var t=arguments.length,n=new Array(t>2?t-2:0),C=2;C<t;C++)n[C-2]=arguments[C];var r=tt[u]||[];return r.forEach(function(i){e=i.apply(null,[e].concat(n))}),e}function Ge(u){for(var e=arguments.length,t=new Array(e>1?e-1:0),n=1;n<e;n++)t[n-1]=arguments[n];var C=tt[u]||[];C.forEach(function(r){r.apply(null,t)})}function pe(){var u=arguments[0],e=Array.prototype.slice.call(arguments,1);return ot[u]?ot[u].apply(null,e):void 0}function jC(u){u.prefix==="fa"&&(u.prefix="fas");var e=u.iconName,t=u.prefix||Pe();if(!!e)return e=Ue(t,e)||e,Fi(yo.definitions,t,e)||Fi(Yu.styles,t,e)}var yo=new f5,d5=function(){R.autoReplaceSvg=!1,R.observeMutations=!1,Ge("noAuto")},p5={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return me?(Ge("beforeI2svg",e),pe("pseudoElements2svg",e),pe("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.autoReplaceSvgRoot;R.autoReplaceSvg===!1&&(R.autoReplaceSvg=!0),R.observeMutations=!0,e5(function(){m5({autoReplaceSvgRoot:t}),Ge("watch",e)})}},A5={icon:function(e){if(e===null)return null;if(Fn(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:Ue(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var t=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],n=Vn(e[0]);return{prefix:n,iconName:Ue(n,t)||t}}if(typeof e=="string"&&(e.indexOf("".concat(R.cssPrefix,"-"))>-1||e.match(MB))){var C=Gn(e.split(" "),{skipLookups:!0});return{prefix:C.prefix||Pe(),iconName:Ue(C.prefix,C.iconName)||C.iconName}}if(typeof e=="string"){var r=Pe();return{prefix:r,iconName:Ue(r,e)||e}}}},Uu={noAuto:d5,config:R,dom:p5,parse:A5,library:yo,findIconDefinition:jC,toHtml:Qt},m5=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.autoReplaceSvgRoot,n=t===void 0?du:t;(Object.keys(Yu.styles).length>0||R.autoFetchSvg)&&me&&R.autoReplaceSvg&&Uu.dom.i2svg({node:n})};function Yn(u,e){return Object.defineProperty(u,"abstract",{get:e}),Object.defineProperty(u,"html",{get:function(){return u.abstract.map(function(n){return Qt(n)})}}),Object.defineProperty(u,"node",{get:function(){if(!!me){var n=du.createElement("div");return n.innerHTML=u.html,n.children}}}),u}function h5(u){var e=u.children,t=u.main,n=u.mask,C=u.attributes,r=u.styles,i=u.transform;if(pr(i)&&t.found&&!n.found){var a=t.width,o=t.height,l={x:a/o/2,y:.5};C.style=Kn(I(I({},r),{},{"transform-origin":"".concat(l.x+i.x/16,"em ").concat(l.y+i.y/16,"em")}))}return[{tag:"svg",attributes:C,children:e}]}function g5(u){var e=u.prefix,t=u.iconName,n=u.children,C=u.attributes,r=u.symbol,i=r===!0?"".concat(e,"-").concat(R.cssPrefix,"-").concat(t):r;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:I(I({},C),{},{id:i}),children:n}]}]}function gr(u){var e=u.icons,t=e.main,n=e.mask,C=u.prefix,r=u.iconName,i=u.transform,a=u.symbol,o=u.title,l=u.maskId,s=u.titleId,f=u.extra,D=u.watchable,p=D===void 0?!1:D,_=n.found?n:t,T=_.width,x=_.height,A=C==="fak",E=[R.replacementClass,r?"".concat(R.cssPrefix,"-").concat(r):""].filter(function(iu){return f.classes.indexOf(iu)===-1}).filter(function(iu){return iu!==""||!!iu}).concat(f.classes).join(" "),j={children:[],attributes:I(I({},f.attributes),{},{"data-prefix":C,"data-icon":r,class:E,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(T," ").concat(x)})},z=A&&!~f.classes.indexOf("fa-fw")?{width:"".concat(T/x*16*.0625,"em")}:{};p&&(j.attributes[Ve]=""),o&&(j.children.push({tag:"title",attributes:{id:j.attributes["aria-labelledby"]||"title-".concat(s||Vt())},children:[o]}),delete j.attributes.title);var H=I(I({},j),{},{prefix:C,iconName:r,main:t,mask:n,maskId:l,transform:i,symbol:a,styles:I(I({},z),f.styles)}),nu=n.found&&t.found?pe("generateAbstractMask",H)||{children:[],attributes:{}}:pe("generateAbstractIcon",H)||{children:[],attributes:{}},K=nu.children,Q=nu.attributes;return H.children=K,H.attributes=Q,a?g5(H):h5(H)}function xi(u){var e=u.content,t=u.width,n=u.height,C=u.transform,r=u.title,i=u.extra,a=u.watchable,o=a===void 0?!1:a,l=I(I(I({},i.attributes),r?{title:r}:{}),{},{class:i.classes.join(" ")});o&&(l[Ve]="");var s=I({},i.styles);pr(C)&&(s.transform=XB({transform:C,startCentered:!0,width:t,height:n}),s["-webkit-transform"]=s.transform);var f=Kn(s);f.length>0&&(l.style=f);var D=[];return D.push({tag:"span",attributes:l,children:[e]}),r&&D.push({tag:"span",attributes:{class:"sr-only"},children:[r]}),D}function v5(u){var e=u.content,t=u.title,n=u.extra,C=I(I(I({},n.attributes),t?{title:t}:{}),{},{class:n.classes.join(" ")}),r=Kn(n.styles);r.length>0&&(C.style=r);var i=[];return i.push({tag:"span",attributes:C,children:[e]}),t&&i.push({tag:"span",attributes:{class:"sr-only"},children:[t]}),i}var oC=Yu.styles;function OC(u){var e=u[0],t=u[1],n=u.slice(4),C=lr(n,1),r=C[0],i=null;return Array.isArray(r)?i={tag:"g",attributes:{class:"".concat(R.cssPrefix,"-").concat(Ne.GROUP)},children:[{tag:"path",attributes:{class:"".concat(R.cssPrefix,"-").concat(Ne.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(R.cssPrefix,"-").concat(Ne.PRIMARY),fill:"currentColor",d:r[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:e,height:t,icon:i}}var b5={found:!1,width:512,height:512};function E5(u,e){!so&&!R.showMissingIcons&&u&&console.error('Icon with name "'.concat(u,'" and prefix "').concat(e,'" is missing.'))}function RC(u,e){var t=e;return e==="fa"&&R.styleDefault!==null&&(e=Pe()),new Promise(function(n,C){if(pe("missingIconAbstract"),t==="fa"){var r=Eo(u)||{};u=r.iconName||u,e=r.prefix||e}if(u&&e&&oC[e]&&oC[e][u]){var i=oC[e][u];return n(OC(i))}E5(u,e),n(I(I({},b5),{},{icon:R.showMissingIcons&&u?pe("missingIconAbstract")||{}:{}}))})}var Pi=function(){},MC=R.measurePerformance&&Cn&&Cn.mark&&Cn.measure?Cn:{mark:Pi,measure:Pi},kt='FA "6.2.0"',y5=function(e){return MC.mark("".concat(kt," ").concat(e," begins")),function(){return _o(e)}},_o=function(e){MC.mark("".concat(kt," ").concat(e," ends")),MC.measure("".concat(kt," ").concat(e),"".concat(kt," ").concat(e," begins"),"".concat(kt," ").concat(e," ends"))},vr={begin:y5,end:_o},mn=function(){};function Ii(u){var e=u.getAttribute?u.getAttribute(Ve):null;return typeof e=="string"}function _5(u){var e=u.getAttribute?u.getAttribute(fr):null,t=u.getAttribute?u.getAttribute(Br):null;return e&&t}function F5(u){return u&&u.classList&&u.classList.contains&&u.classList.contains(R.replacementClass)}function k5(){if(R.autoReplaceSvg===!0)return hn.replace;var u=hn[R.autoReplaceSvg];return u||hn.replace}function w5(u){return du.createElementNS("http://www.w3.org/2000/svg",u)}function S5(u){return du.createElement(u)}function Fo(u){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=e.ceFn,n=t===void 0?u.tag==="svg"?w5:S5:t;if(typeof u=="string")return du.createTextNode(u);var C=n(u.tag);Object.keys(u.attributes||[]).forEach(function(i){C.setAttribute(i,u.attributes[i])});var r=u.children||[];return r.forEach(function(i){C.appendChild(Fo(i,{ceFn:n}))}),C}function x5(u){var e=" ".concat(u.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var hn={replace:function(e){var t=e[0];if(t.parentNode)if(e[1].forEach(function(C){t.parentNode.insertBefore(Fo(C),t)}),t.getAttribute(Ve)===null&&R.keepOriginalSource){var n=du.createComment(x5(t));t.parentNode.replaceChild(n,t)}else t.remove()},nest:function(e){var t=e[0],n=e[1];if(~dr(t).indexOf(R.replacementClass))return hn.replace(e);var C=new RegExp("".concat(R.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){var r=n[0].attributes.class.split(" ").reduce(function(a,o){return o===R.replacementClass||o.match(C)?a.toSvg.push(o):a.toNode.push(o),a},{toNode:[],toSvg:[]});n[0].attributes.class=r.toSvg.join(" "),r.toNode.length===0?t.removeAttribute("class"):t.setAttribute("class",r.toNode.join(" "))}var i=n.map(function(a){return Qt(a)}).join(`
`);t.setAttribute(Ve,""),t.innerHTML=i}};function Ti(u){u()}function ko(u,e){var t=typeof e=="function"?e:mn;if(u.length===0)t();else{var n=Ti;R.mutateApproach===jB&&(n=xe.requestAnimationFrame||Ti),n(function(){var C=k5(),r=vr.begin("mutate");u.map(C),r(),t()})}}var br=!1;function wo(){br=!0}function LC(){br=!1}var wn=null;function ji(u){if(!!Ei&&!!R.observeMutations){var e=u.treeCallback,t=e===void 0?mn:e,n=u.nodeCallback,C=n===void 0?mn:n,r=u.pseudoElementsCallback,i=r===void 0?mn:r,a=u.observeMutationsRoot,o=a===void 0?du:a;wn=new Ei(function(l){if(!br){var s=Pe();vt(l).forEach(function(f){if(f.type==="childList"&&f.addedNodes.length>0&&!Ii(f.addedNodes[0])&&(R.searchPseudoElements&&i(f.target),t(f.target)),f.type==="attributes"&&f.target.parentNode&&R.searchPseudoElements&&i(f.target.parentNode),f.type==="attributes"&&Ii(f.target)&&~WB.indexOf(f.attributeName))if(f.attributeName==="class"&&_5(f.target)){var D=Gn(dr(f.target)),p=D.prefix,_=D.iconName;f.target.setAttribute(fr,p||s),_&&f.target.setAttribute(Br,_)}else F5(f.target)&&C(f.target)})}}),me&&wn.observe(o,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function P5(){!wn||wn.disconnect()}function I5(u){var e=u.getAttribute("style"),t=[];return e&&(t=e.split(";").reduce(function(n,C){var r=C.split(":"),i=r[0],a=r.slice(1);return i&&a.length>0&&(n[i]=a.join(":").trim()),n},{})),t}function T5(u){var e=u.getAttribute("data-prefix"),t=u.getAttribute("data-icon"),n=u.innerText!==void 0?u.innerText.trim():"",C=Gn(dr(u));return C.prefix||(C.prefix=Pe()),e&&t&&(C.prefix=e,C.iconName=t),C.iconName&&C.prefix||(C.prefix&&n.length>0&&(C.iconName=l5(C.prefix,u.innerText)||mr(C.prefix,PC(u.innerText))),!C.iconName&&R.autoFetchSvg&&u.firstChild&&u.firstChild.nodeType===Node.TEXT_NODE&&(C.iconName=u.firstChild.data)),C}function j5(u){var e=vt(u.attributes).reduce(function(C,r){return C.name!=="class"&&C.name!=="style"&&(C[r.name]=r.value),C},{}),t=u.getAttribute("title"),n=u.getAttribute("data-fa-title-id");return R.autoA11y&&(t?e["aria-labelledby"]="".concat(R.replacementClass,"-title-").concat(n||Vt()):(e["aria-hidden"]="true",e.focusable="false")),e}function O5(){return{iconName:null,title:null,titleId:null,prefix:null,transform:re,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Oi(u){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},t=T5(u),n=t.iconName,C=t.prefix,r=t.rest,i=j5(u),a=TC("parseNodeAttributes",{},u),o=e.styleParser?I5(u):[];return I({iconName:n,title:u.getAttribute("title"),titleId:u.getAttribute("data-fa-title-id"),prefix:C,transform:re,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:r,styles:o,attributes:i}},a)}var R5=Yu.styles;function So(u){var e=R.autoReplaceSvg==="nest"?Oi(u,{styleParser:!1}):Oi(u);return~e.extra.classes.indexOf(lo)?pe("generateLayersText",u,e):pe("generateSvgReplacementMutation",u,e)}var Ie=new Set;Dr.map(function(u){Ie.add("fa-".concat(u))});Object.keys(Ht[Du]).map(Ie.add.bind(Ie));Object.keys(Ht[mu]).map(Ie.add.bind(Ie));Ie=qt(Ie);function Ri(u){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!me)return Promise.resolve();var t=du.documentElement.classList,n=function(f){return t.add("".concat(yi,"-").concat(f))},C=function(f){return t.remove("".concat(yi,"-").concat(f))},r=R.autoFetchSvg?Ie:Dr.map(function(s){return"fa-".concat(s)}).concat(Object.keys(R5));r.includes("fa")||r.push("fa");var i=[".".concat(lo,":not([").concat(Ve,"])")].concat(r.map(function(s){return".".concat(s,":not([").concat(Ve,"])")})).join(", ");if(i.length===0)return Promise.resolve();var a=[];try{a=vt(u.querySelectorAll(i))}catch{}if(a.length>0)n("pending"),C("complete");else return Promise.resolve();var o=vr.begin("onTree"),l=a.reduce(function(s,f){try{var D=So(f);D&&s.push(D)}catch(p){so||p.name==="MissingIcon"&&console.error(p)}return s},[]);return new Promise(function(s,f){Promise.all(l).then(function(D){ko(D,function(){n("active"),n("complete"),C("pending"),typeof e=="function"&&e(),o(),s()})}).catch(function(D){o(),f(D)})})}function M5(u){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;So(u).then(function(t){t&&ko([t],e)})}function L5(u){return function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=(e||{}).icon?e:jC(e||{}),C=t.mask;return C&&(C=(C||{}).icon?C:jC(C||{})),u(n,I(I({},t),{},{mask:C}))}}var N5=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.transform,C=n===void 0?re:n,r=t.symbol,i=r===void 0?!1:r,a=t.mask,o=a===void 0?null:a,l=t.maskId,s=l===void 0?null:l,f=t.title,D=f===void 0?null:f,p=t.titleId,_=p===void 0?null:p,T=t.classes,x=T===void 0?[]:T,A=t.attributes,E=A===void 0?{}:A,j=t.styles,z=j===void 0?{}:j;if(!!e){var H=e.prefix,nu=e.iconName,K=e.icon;return Yn(I({type:"icon"},e),function(){return Ge("beforeDOMElementCreation",{iconDefinition:e,params:t}),R.autoA11y&&(D?E["aria-labelledby"]="".concat(R.replacementClass,"-title-").concat(_||Vt()):(E["aria-hidden"]="true",E.focusable="false")),gr({icons:{main:OC(K),mask:o?OC(o.icon):{found:!1,width:null,height:null,icon:{}}},prefix:H,iconName:nu,transform:I(I({},re),C),symbol:i,title:D,maskId:s,titleId:_,extra:{attributes:E,styles:z,classes:x}})})}},U5={mixout:function(){return{icon:L5(N5)}},hooks:function(){return{mutationObserverCallbacks:function(t){return t.treeCallback=Ri,t.nodeCallback=M5,t}}},provides:function(e){e.i2svg=function(t){var n=t.node,C=n===void 0?du:n,r=t.callback,i=r===void 0?function(){}:r;return Ri(C,i)},e.generateSvgReplacementMutation=function(t,n){var C=n.iconName,r=n.title,i=n.titleId,a=n.prefix,o=n.transform,l=n.symbol,s=n.mask,f=n.maskId,D=n.extra;return new Promise(function(p,_){Promise.all([RC(C,a),s.iconName?RC(s.iconName,s.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(T){var x=lr(T,2),A=x[0],E=x[1];p([t,gr({icons:{main:A,mask:E},prefix:a,iconName:C,transform:o,symbol:l,maskId:f,title:r,titleId:i,extra:D,watchable:!0})])}).catch(_)})},e.generateAbstractIcon=function(t){var n=t.children,C=t.attributes,r=t.main,i=t.transform,a=t.styles,o=Kn(a);o.length>0&&(C.style=o);var l;return pr(i)&&(l=pe("generateAbstractTransformGrouping",{main:r,transform:i,containerWidth:r.width,iconWidth:r.width})),n.push(l||r.icon),{children:n,attributes:C}}}},W5={mixout:function(){return{layer:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},C=n.classes,r=C===void 0?[]:C;return Yn({type:"layer"},function(){Ge("beforeDOMElementCreation",{assembler:t,params:n});var i=[];return t(function(a){Array.isArray(a)?a.map(function(o){i=i.concat(o.abstract)}):i=i.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(R.cssPrefix,"-layers")].concat(qt(r)).join(" ")},children:i}]})}}}},z5={mixout:function(){return{counter:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},C=n.title,r=C===void 0?null:C,i=n.classes,a=i===void 0?[]:i,o=n.attributes,l=o===void 0?{}:o,s=n.styles,f=s===void 0?{}:s;return Yn({type:"counter",content:t},function(){return Ge("beforeDOMElementCreation",{content:t,params:n}),v5({content:t.toString(),title:r,extra:{attributes:l,styles:f,classes:["".concat(R.cssPrefix,"-layers-counter")].concat(qt(a))}})})}}}},H5={mixout:function(){return{text:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},C=n.transform,r=C===void 0?re:C,i=n.title,a=i===void 0?null:i,o=n.classes,l=o===void 0?[]:o,s=n.attributes,f=s===void 0?{}:s,D=n.styles,p=D===void 0?{}:D;return Yn({type:"text",content:t},function(){return Ge("beforeDOMElementCreation",{content:t,params:n}),xi({content:t,transform:I(I({},re),r),title:a,extra:{attributes:f,styles:p,classes:["".concat(R.cssPrefix,"-layers-text")].concat(qt(l))}})})}}},provides:function(e){e.generateLayersText=function(t,n){var C=n.title,r=n.transform,i=n.extra,a=null,o=null;if(io){var l=parseInt(getComputedStyle(t).fontSize,10),s=t.getBoundingClientRect();a=s.width/l,o=s.height/l}return R.autoA11y&&!C&&(i.attributes["aria-hidden"]="true"),Promise.resolve([t,xi({content:t.innerHTML,width:a,height:o,transform:r,title:C,extra:i,watchable:!0})])}}},J5=new RegExp('"',"ug"),Mi=[1105920,1112319];function $5(u){var e=u.replace(J5,""),t=C5(e,0),n=t>=Mi[0]&&t<=Mi[1],C=e.length===2?e[0]===e[1]:!1;return{value:PC(C?e[0]:e),isSecondary:n||C}}function Li(u,e){var t="".concat(TB).concat(e.replace(":","-"));return new Promise(function(n,C){if(u.getAttribute(t)!==null)return n();var r=vt(u.children),i=r.filter(function(K){return K.getAttribute(xC)===e})[0],a=xe.getComputedStyle(u,e),o=a.getPropertyValue("font-family").match(LB),l=a.getPropertyValue("font-weight"),s=a.getPropertyValue("content");if(i&&!o)return u.removeChild(i),n();if(o&&s!=="none"&&s!==""){var f=a.getPropertyValue("content"),D=~["Sharp"].indexOf(o[2])?mu:Du,p=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(o[2])?Jt[D][o[2].toLowerCase()]:NB[D][l],_=$5(f),T=_.value,x=_.isSecondary,A=o[0].startsWith("FontAwesome"),E=mr(p,T),j=E;if(A){var z=c5(T);z.iconName&&z.prefix&&(E=z.iconName,p=z.prefix)}if(E&&!x&&(!i||i.getAttribute(fr)!==p||i.getAttribute(Br)!==j)){u.setAttribute(t,j),i&&u.removeChild(i);var H=O5(),nu=H.extra;nu.attributes[xC]=e,RC(E,p).then(function(K){var Q=gr(I(I({},H),{},{icons:{main:K,mask:hr()},prefix:p,iconName:j,extra:nu,watchable:!0})),iu=du.createElement("svg");e==="::before"?u.insertBefore(iu,u.firstChild):u.appendChild(iu),iu.outerHTML=Q.map(function(Su){return Qt(Su)}).join(`
`),u.removeAttribute(t),n()}).catch(C)}else n()}else n()})}function K5(u){return Promise.all([Li(u,"::before"),Li(u,"::after")])}function V5(u){return u.parentNode!==document.head&&!~OB.indexOf(u.tagName.toUpperCase())&&!u.getAttribute(xC)&&(!u.parentNode||u.parentNode.tagName!=="svg")}function Ni(u){if(!!me)return new Promise(function(e,t){var n=vt(u.querySelectorAll("*")).filter(V5).map(K5),C=vr.begin("searchPseudoElements");wo(),Promise.all(n).then(function(){C(),LC(),e()}).catch(function(){C(),LC(),t()})})}var G5={hooks:function(){return{mutationObserverCallbacks:function(t){return t.pseudoElementsCallback=Ni,t}}},provides:function(e){e.pseudoElements2svg=function(t){var n=t.node,C=n===void 0?du:n;R.searchPseudoElements&&Ni(C)}}},Ui=!1,Y5={mixout:function(){return{dom:{unwatch:function(){wo(),Ui=!0}}}},hooks:function(){return{bootstrap:function(){ji(TC("mutationObserverCallbacks",{}))},noAuto:function(){P5()},watch:function(t){var n=t.observeMutationsRoot;Ui?LC():ji(TC("mutationObserverCallbacks",{observeMutationsRoot:n}))}}}},Wi=function(e){var t={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(n,C){var r=C.toLowerCase().split("-"),i=r[0],a=r.slice(1).join("-");if(i&&a==="h")return n.flipX=!0,n;if(i&&a==="v")return n.flipY=!0,n;if(a=parseFloat(a),isNaN(a))return n;switch(i){case"grow":n.size=n.size+a;break;case"shrink":n.size=n.size-a;break;case"left":n.x=n.x-a;break;case"right":n.x=n.x+a;break;case"up":n.y=n.y-a;break;case"down":n.y=n.y+a;break;case"rotate":n.rotate=n.rotate+a;break}return n},t)},q5={mixout:function(){return{parse:{transform:function(t){return Wi(t)}}}},hooks:function(){return{parseNodeAttributes:function(t,n){var C=n.getAttribute("data-fa-transform");return C&&(t.transform=Wi(C)),t}}},provides:function(e){e.generateAbstractTransformGrouping=function(t){var n=t.main,C=t.transform,r=t.containerWidth,i=t.iconWidth,a={transform:"translate(".concat(r/2," 256)")},o="translate(".concat(C.x*32,", ").concat(C.y*32,") "),l="scale(".concat(C.size/16*(C.flipX?-1:1),", ").concat(C.size/16*(C.flipY?-1:1),") "),s="rotate(".concat(C.rotate," 0 0)"),f={transform:"".concat(o," ").concat(l," ").concat(s)},D={transform:"translate(".concat(i/2*-1," -256)")},p={outer:a,inner:f,path:D};return{tag:"g",attributes:I({},p.outer),children:[{tag:"g",attributes:I({},p.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:I(I({},n.icon.attributes),p.path)}]}]}}}},sC={x:0,y:0,width:"100%",height:"100%"};function zi(u){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return u.attributes&&(u.attributes.fill||e)&&(u.attributes.fill="black"),u}function X5(u){return u.tag==="g"?u.children:[u]}var Q5={hooks:function(){return{parseNodeAttributes:function(t,n){var C=n.getAttribute("data-fa-mask"),r=C?Gn(C.split(" ").map(function(i){return i.trim()})):hr();return r.prefix||(r.prefix=Pe()),t.mask=r,t.maskId=n.getAttribute("data-fa-mask-id"),t}}},provides:function(e){e.generateAbstractMask=function(t){var n=t.children,C=t.attributes,r=t.main,i=t.mask,a=t.maskId,o=t.transform,l=r.width,s=r.icon,f=i.width,D=i.icon,p=qB({transform:o,containerWidth:f,iconWidth:l}),_={tag:"rect",attributes:I(I({},sC),{},{fill:"white"})},T=s.children?{children:s.children.map(zi)}:{},x={tag:"g",attributes:I({},p.inner),children:[zi(I({tag:s.tag,attributes:I(I({},s.attributes),p.path)},T))]},A={tag:"g",attributes:I({},p.outer),children:[x]},E="mask-".concat(a||Vt()),j="clip-".concat(a||Vt()),z={tag:"mask",attributes:I(I({},sC),{},{id:E,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[_,A]},H={tag:"defs",children:[{tag:"clipPath",attributes:{id:j},children:X5(D)},z]};return n.push(H,{tag:"rect",attributes:I({fill:"currentColor","clip-path":"url(#".concat(j,")"),mask:"url(#".concat(E,")")},sC)}),{children:n,attributes:C}}}},Z5={provides:function(e){var t=!1;xe.matchMedia&&(t=xe.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var n=[],C={fill:"currentColor"},r={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:I(I({},C),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var i=I(I({},r),{},{attributeName:"opacity"}),a={tag:"circle",attributes:I(I({},C),{},{cx:"256",cy:"364",r:"28"}),children:[]};return t||a.children.push({tag:"animate",attributes:I(I({},r),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:I(I({},i),{},{values:"1;0;1;1;0;1;"})}),n.push(a),n.push({tag:"path",attributes:I(I({},C),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:t?[]:[{tag:"animate",attributes:I(I({},i),{},{values:"1;0;0;0;0;1;"})}]}),t||n.push({tag:"path",attributes:I(I({},C),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:I(I({},i),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},u4={hooks:function(){return{parseNodeAttributes:function(t,n){var C=n.getAttribute("data-fa-symbol"),r=C===null?!1:C===""?!0:C;return t.symbol=r,t}}}},e4=[ZB,U5,W5,z5,H5,G5,Y5,q5,Q5,Z5,u4];D5(e4,{mixoutsTo:Uu});Uu.noAuto;var xo=Uu.config,t4=Uu.library;Uu.dom;var Sn=Uu.parse;Uu.findIconDefinition;Uu.toHtml;var n4=Uu.icon;Uu.layer;var C4=Uu.text;Uu.counter;function Hi(u,e){var t=Object.keys(u);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(u);e&&(n=n.filter(function(C){return Object.getOwnPropertyDescriptor(u,C).enumerable})),t.push.apply(t,n)}return t}function Ku(u){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?Hi(Object(t),!0).forEach(function(n){ju(u,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(u,Object.getOwnPropertyDescriptors(t)):Hi(Object(t)).forEach(function(n){Object.defineProperty(u,n,Object.getOwnPropertyDescriptor(t,n))})}return u}function xn(u){return xn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},xn(u)}function ju(u,e,t){return e in u?Object.defineProperty(u,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):u[e]=t,u}function r4(u,e){if(u==null)return{};var t={},n=Object.keys(u),C,r;for(r=0;r<n.length;r++)C=n[r],!(e.indexOf(C)>=0)&&(t[C]=u[C]);return t}function i4(u,e){if(u==null)return{};var t=r4(u,e),n,C;if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(u);for(C=0;C<r.length;C++)n=r[C],!(e.indexOf(n)>=0)&&(!Object.prototype.propertyIsEnumerable.call(u,n)||(t[n]=u[n]))}return t}function NC(u){return a4(u)||o4(u)||s4(u)||l4()}function a4(u){if(Array.isArray(u))return UC(u)}function o4(u){if(typeof Symbol<"u"&&u[Symbol.iterator]!=null||u["@@iterator"]!=null)return Array.from(u)}function s4(u,e){if(!!u){if(typeof u=="string")return UC(u,e);var t=Object.prototype.toString.call(u).slice(8,-1);if(t==="Object"&&u.constructor&&(t=u.constructor.name),t==="Map"||t==="Set")return Array.from(u);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return UC(u,e)}}function UC(u,e){(e==null||e>u.length)&&(e=u.length);for(var t=0,n=new Array(e);t<e;t++)n[t]=u[t];return n}function l4(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var c4=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Po={exports:{}};(function(u){(function(e){var t=function(A,E,j){if(!l(E)||f(E)||D(E)||p(E)||o(E))return E;var z,H=0,nu=0;if(s(E))for(z=[],nu=E.length;H<nu;H++)z.push(t(A,E[H],j));else{z={};for(var K in E)Object.prototype.hasOwnProperty.call(E,K)&&(z[A(K,j)]=t(A,E[K],j))}return z},n=function(A,E){E=E||{};var j=E.separator||"_",z=E.split||/(?=[A-Z])/;return A.split(z).join(j)},C=function(A){return _(A)?A:(A=A.replace(/[\-_\s]+(.)?/g,function(E,j){return j?j.toUpperCase():""}),A.substr(0,1).toLowerCase()+A.substr(1))},r=function(A){var E=C(A);return E.substr(0,1).toUpperCase()+E.substr(1)},i=function(A,E){return n(A,E).toLowerCase()},a=Object.prototype.toString,o=function(A){return typeof A=="function"},l=function(A){return A===Object(A)},s=function(A){return a.call(A)=="[object Array]"},f=function(A){return a.call(A)=="[object Date]"},D=function(A){return a.call(A)=="[object RegExp]"},p=function(A){return a.call(A)=="[object Boolean]"},_=function(A){return A=A-0,A===A},T=function(A,E){var j=E&&"process"in E?E.process:E;return typeof j!="function"?A:function(z,H){return j(z,A,H)}},x={camelize:C,decamelize:i,pascalize:r,depascalize:i,camelizeKeys:function(A,E){return t(T(C,E),A)},decamelizeKeys:function(A,E){return t(T(i,E),A,E)},pascalizeKeys:function(A,E){return t(T(r,E),A)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};u.exports?u.exports=x:e.humps=x})(c4)})(Po);var f4=Po.exports,B4=["class","style"];function D4(u){return u.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,t){var n=t.indexOf(":"),C=f4.camelize(t.slice(0,n)),r=t.slice(n+1).trim();return e[C]=r,e},{})}function d4(u){return u.split(/\s+/).reduce(function(e,t){return e[t]=!0,e},{})}function Er(u){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof u=="string")return u;var n=(u.children||[]).map(function(o){return Er(o)}),C=Object.keys(u.attributes||{}).reduce(function(o,l){var s=u.attributes[l];switch(l){case"class":o.class=d4(s);break;case"style":o.style=D4(s);break;default:o.attrs[l]=s}return o},{attrs:{},class:{},style:{}});t.class;var r=t.style,i=r===void 0?{}:r,a=i4(t,B4);return Hn(u.tag,Ku(Ku(Ku({},e),{},{class:C.class,style:Ku(Ku({},C.style),i)},C.attrs),a),n)}var Io=!1;try{Io=!0}catch{}function p4(){if(!Io&&console&&typeof console.error=="function"){var u;(u=console).error.apply(u,arguments)}}function Ot(u,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?ju({},u,e):{}}function A4(u){var e,t=(e={"fa-spin":u.spin,"fa-pulse":u.pulse,"fa-fw":u.fixedWidth,"fa-border":u.border,"fa-li":u.listItem,"fa-inverse":u.inverse,"fa-flip":u.flip===!0,"fa-flip-horizontal":u.flip==="horizontal"||u.flip==="both","fa-flip-vertical":u.flip==="vertical"||u.flip==="both"},ju(e,"fa-".concat(u.size),u.size!==null),ju(e,"fa-rotate-".concat(u.rotation),u.rotation!==null),ju(e,"fa-pull-".concat(u.pull),u.pull!==null),ju(e,"fa-swap-opacity",u.swapOpacity),ju(e,"fa-bounce",u.bounce),ju(e,"fa-shake",u.shake),ju(e,"fa-beat",u.beat),ju(e,"fa-fade",u.fade),ju(e,"fa-beat-fade",u.beatFade),ju(e,"fa-flash",u.flash),ju(e,"fa-spin-pulse",u.spinPulse),ju(e,"fa-spin-reverse",u.spinReverse),e);return Object.keys(t).map(function(n){return t[n]?n:null}).filter(function(n){return n})}function Ji(u){if(u&&xn(u)==="object"&&u.prefix&&u.iconName&&u.icon)return u;if(Sn.icon)return Sn.icon(u);if(u===null)return null;if(xn(u)==="object"&&u.prefix&&u.iconName)return u;if(Array.isArray(u)&&u.length===2)return{prefix:u[0],iconName:u[1]};if(typeof u=="string")return{prefix:"fas",iconName:u}}var m4=Yt({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(e,t){var n=t.attrs,C=pu(function(){return Ji(e.icon)}),r=pu(function(){return Ot("classes",A4(e))}),i=pu(function(){return Ot("transform",typeof e.transform=="string"?Sn.transform(e.transform):e.transform)}),a=pu(function(){return Ot("mask",Ji(e.mask))}),o=pu(function(){return n4(C.value,Ku(Ku(Ku(Ku({},r.value),i.value),a.value),{},{symbol:e.symbol,title:e.title}))});ze(o,function(s){if(!s)return p4("Could not find one or more icon(s)",C.value,a.value)},{immediate:!0});var l=pu(function(){return o.value?Er(o.value.abstract[0],{},n):null});return function(){return l.value}}});Yt({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(e,t){var n=t.slots,C=xo.familyPrefix,r=pu(function(){return["".concat(C,"-layers")].concat(NC(e.fixedWidth?["".concat(C,"-fw")]:[]))});return function(){return Hn("div",{class:r.value},n.default?n.default():[])}}});Yt({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(e){return["bottom-left","bottom-right","top-left","top-right"].indexOf(e)>-1}}},setup:function(e,t){var n=t.attrs,C=xo.familyPrefix,r=pu(function(){return Ot("classes",[].concat(NC(e.counter?["".concat(C,"-layers-counter")]:[]),NC(e.position?["".concat(C,"-layers-").concat(e.position)]:[])))}),i=pu(function(){return Ot("transform",typeof e.transform=="string"?Sn.transform(e.transform):e.transform)}),a=pu(function(){var l=C4(e.value.toString(),Ku(Ku({},i.value),r.value)),s=l.abstract;return e.counter&&(s[0].attributes.class=s[0].attributes.class.replace("fa-layers-text","")),s[0]}),o=pu(function(){return Er(a.value,{},n)});return function(){return o.value}}});var h4={prefix:"fas",iconName:"angle-right",icon:[320,512,[8250],"f105","M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"]},g4={prefix:"fas",iconName:"angles-right",icon:[512,512,[187,"angle-double-right"],"f101","M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z"]},v4=g4,b4={prefix:"fas",iconName:"angles-left",icon:[512,512,[171,"angle-double-left"],"f100","M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160zm352-160l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L301.3 256 438.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0z"]},E4=b4,y4={prefix:"fas",iconName:"angle-left",icon:[320,512,[8249],"f104","M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"]},_4={prefix:"fas",iconName:"circle-xmark",icon:[512,512,[61532,"times-circle","xmark-circle"],"f057","M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"]};t4.add(v4,E4,h4,y4,_4);const qn=uc(S0),Pn=nc();qn.component("font-awesome-icon",m4);localStorage.getItem("pinia")?(Pn.state.value=JSON.parse(localStorage.getItem("pinia")),console.log(Pn.state)):console.log("pinia value not found");ze(Pn.state,u=>{localStorage.setItem("pinia",JSON.stringify(u))},{deep:!0});qn.use(Pn);qn.use(EB);qn.mount("#app");
