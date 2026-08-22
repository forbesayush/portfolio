var gy=Object.defineProperty;var xy=(r,t,i)=>t in r?gy(r,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):r[t]=i;var We=(r,t,i)=>xy(r,typeof t!="symbol"?t+"":t,i);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var jf={exports:{}},wo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var l0;function vy(){if(l0)return wo;l0=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,c){var d=null;if(c!==void 0&&(d=""+c),l.key!==void 0&&(d=""+l.key),"key"in l){c={};for(var h in l)h!=="key"&&(c[h]=l[h])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:d,ref:l!==void 0?l:null,props:c}}return wo.Fragment=t,wo.jsx=i,wo.jsxs=i,wo}var c0;function _y(){return c0||(c0=1,jf.exports=vy()),jf.exports}var g=_y(),Xf={exports:{}},ft={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var u0;function yy(){if(u0)return ft;u0=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),x=Symbol.for("react.activity"),v=Symbol.iterator;function M(E){return E===null||typeof E!="object"?null:(E=v&&E[v]||E["@@iterator"],typeof E=="function"?E:null)}var T={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,b={};function _(E,j,ce){this.props=E,this.context=j,this.refs=b,this.updater=ce||T}_.prototype.isReactComponent={},_.prototype.setState=function(E,j){if(typeof E!="object"&&typeof E!="function"&&E!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,E,j,"setState")},_.prototype.forceUpdate=function(E){this.updater.enqueueForceUpdate(this,E,"forceUpdate")};function B(){}B.prototype=_.prototype;function O(E,j,ce){this.props=E,this.context=j,this.refs=b,this.updater=ce||T}var D=O.prototype=new B;D.constructor=O,C(D,_.prototype),D.isPureReactComponent=!0;var W=Array.isArray;function k(){}var I={H:null,A:null,T:null,S:null},Q=Object.prototype.hasOwnProperty;function U(E,j,ce){var G=ce.ref;return{$$typeof:r,type:E,key:j,ref:G!==void 0?G:null,props:ce}}function N(E,j){return U(E.type,j,E.props)}function V(E){return typeof E=="object"&&E!==null&&E.$$typeof===r}function he(E){var j={"=":"=0",":":"=2"};return"$"+E.replace(/[=:]/g,function(ce){return j[ce]})}var le=/\/+/g;function ge(E,j){return typeof E=="object"&&E!==null&&E.key!=null?he(""+E.key):j.toString(36)}function be(E){switch(E.status){case"fulfilled":return E.value;case"rejected":throw E.reason;default:switch(typeof E.status=="string"?E.then(k,k):(E.status="pending",E.then(function(j){E.status==="pending"&&(E.status="fulfilled",E.value=j)},function(j){E.status==="pending"&&(E.status="rejected",E.reason=j)})),E.status){case"fulfilled":return E.value;case"rejected":throw E.reason}}throw E}function z(E,j,ce,G,$){var de=typeof E;(de==="undefined"||de==="boolean")&&(E=null);var re=!1;if(E===null)re=!0;else switch(de){case"bigint":case"string":case"number":re=!0;break;case"object":switch(E.$$typeof){case r:case t:re=!0;break;case y:return re=E._init,z(re(E._payload),j,ce,G,$)}}if(re)return $=$(E),re=G===""?"."+ge(E,0):G,W($)?(ce="",re!=null&&(ce=re.replace(le,"$&/")+"/"),z($,j,ce,"",function(Ue){return Ue})):$!=null&&(V($)&&($=N($,ce+($.key==null||E&&E.key===$.key?"":(""+$.key).replace(le,"$&/")+"/")+re)),j.push($)),1;re=0;var Te=G===""?".":G+":";if(W(E))for(var Ce=0;Ce<E.length;Ce++)G=E[Ce],de=Te+ge(G,Ce),re+=z(G,j,ce,de,$);else if(Ce=M(E),typeof Ce=="function")for(E=Ce.call(E),Ce=0;!(G=E.next()).done;)G=G.value,de=Te+ge(G,Ce++),re+=z(G,j,ce,de,$);else if(de==="object"){if(typeof E.then=="function")return z(be(E),j,ce,G,$);throw j=String(E),Error("Objects are not valid as a React child (found: "+(j==="[object Object]"?"object with keys {"+Object.keys(E).join(", ")+"}":j)+"). If you meant to render a collection of children, use an array instead.")}return re}function ee(E,j,ce){if(E==null)return E;var G=[],$=0;return z(E,G,"","",function(de){return j.call(ce,de,$++)}),G}function J(E){if(E._status===-1){var j=E._result;j=j(),j.then(function(ce){(E._status===0||E._status===-1)&&(E._status=1,E._result=ce)},function(ce){(E._status===0||E._status===-1)&&(E._status=2,E._result=ce)}),E._status===-1&&(E._status=0,E._result=j)}if(E._status===1)return E._result.default;throw E._result}var Me=typeof reportError=="function"?reportError:function(E){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var j=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof E=="object"&&E!==null&&typeof E.message=="string"?String(E.message):String(E),error:E});if(!window.dispatchEvent(j))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",E);return}console.error(E)},F={map:ee,forEach:function(E,j,ce){ee(E,function(){j.apply(this,arguments)},ce)},count:function(E){var j=0;return ee(E,function(){j++}),j},toArray:function(E){return ee(E,function(j){return j})||[]},only:function(E){if(!V(E))throw Error("React.Children.only expected to receive a single React element child.");return E}};return ft.Activity=x,ft.Children=F,ft.Component=_,ft.Fragment=i,ft.Profiler=l,ft.PureComponent=O,ft.StrictMode=s,ft.Suspense=m,ft.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=I,ft.__COMPILER_RUNTIME={__proto__:null,c:function(E){return I.H.useMemoCache(E)}},ft.cache=function(E){return function(){return E.apply(null,arguments)}},ft.cacheSignal=function(){return null},ft.cloneElement=function(E,j,ce){if(E==null)throw Error("The argument must be a React element, but you passed "+E+".");var G=C({},E.props),$=E.key;if(j!=null)for(de in j.key!==void 0&&($=""+j.key),j)!Q.call(j,de)||de==="key"||de==="__self"||de==="__source"||de==="ref"&&j.ref===void 0||(G[de]=j[de]);var de=arguments.length-2;if(de===1)G.children=ce;else if(1<de){for(var re=Array(de),Te=0;Te<de;Te++)re[Te]=arguments[Te+2];G.children=re}return U(E.type,$,G)},ft.createContext=function(E){return E={$$typeof:d,_currentValue:E,_currentValue2:E,_threadCount:0,Provider:null,Consumer:null},E.Provider=E,E.Consumer={$$typeof:c,_context:E},E},ft.createElement=function(E,j,ce){var G,$={},de=null;if(j!=null)for(G in j.key!==void 0&&(de=""+j.key),j)Q.call(j,G)&&G!=="key"&&G!=="__self"&&G!=="__source"&&($[G]=j[G]);var re=arguments.length-2;if(re===1)$.children=ce;else if(1<re){for(var Te=Array(re),Ce=0;Ce<re;Ce++)Te[Ce]=arguments[Ce+2];$.children=Te}if(E&&E.defaultProps)for(G in re=E.defaultProps,re)$[G]===void 0&&($[G]=re[G]);return U(E,de,$)},ft.createRef=function(){return{current:null}},ft.forwardRef=function(E){return{$$typeof:h,render:E}},ft.isValidElement=V,ft.lazy=function(E){return{$$typeof:y,_payload:{_status:-1,_result:E},_init:J}},ft.memo=function(E,j){return{$$typeof:p,type:E,compare:j===void 0?null:j}},ft.startTransition=function(E){var j=I.T,ce={};I.T=ce;try{var G=E(),$=I.S;$!==null&&$(ce,G),typeof G=="object"&&G!==null&&typeof G.then=="function"&&G.then(k,Me)}catch(de){Me(de)}finally{j!==null&&ce.types!==null&&(j.types=ce.types),I.T=j}},ft.unstable_useCacheRefresh=function(){return I.H.useCacheRefresh()},ft.use=function(E){return I.H.use(E)},ft.useActionState=function(E,j,ce){return I.H.useActionState(E,j,ce)},ft.useCallback=function(E,j){return I.H.useCallback(E,j)},ft.useContext=function(E){return I.H.useContext(E)},ft.useDebugValue=function(){},ft.useDeferredValue=function(E,j){return I.H.useDeferredValue(E,j)},ft.useEffect=function(E,j){return I.H.useEffect(E,j)},ft.useEffectEvent=function(E){return I.H.useEffectEvent(E)},ft.useId=function(){return I.H.useId()},ft.useImperativeHandle=function(E,j,ce){return I.H.useImperativeHandle(E,j,ce)},ft.useInsertionEffect=function(E,j){return I.H.useInsertionEffect(E,j)},ft.useLayoutEffect=function(E,j){return I.H.useLayoutEffect(E,j)},ft.useMemo=function(E,j){return I.H.useMemo(E,j)},ft.useOptimistic=function(E,j){return I.H.useOptimistic(E,j)},ft.useReducer=function(E,j,ce){return I.H.useReducer(E,j,ce)},ft.useRef=function(E){return I.H.useRef(E)},ft.useState=function(E){return I.H.useState(E)},ft.useSyncExternalStore=function(E,j,ce){return I.H.useSyncExternalStore(E,j,ce)},ft.useTransition=function(){return I.H.useTransition()},ft.version="19.2.8",ft}var f0;function gh(){return f0||(f0=1,Xf.exports=yy()),Xf.exports}var Ve=gh(),Wf={exports:{}},Co={},qf={exports:{}},Yf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var d0;function Sy(){return d0||(d0=1,(function(r){function t(z,ee){var J=z.length;z.push(ee);e:for(;0<J;){var Me=J-1>>>1,F=z[Me];if(0<l(F,ee))z[Me]=ee,z[J]=F,J=Me;else break e}}function i(z){return z.length===0?null:z[0]}function s(z){if(z.length===0)return null;var ee=z[0],J=z.pop();if(J!==ee){z[0]=J;e:for(var Me=0,F=z.length,E=F>>>1;Me<E;){var j=2*(Me+1)-1,ce=z[j],G=j+1,$=z[G];if(0>l(ce,J))G<F&&0>l($,ce)?(z[Me]=$,z[G]=J,Me=G):(z[Me]=ce,z[j]=J,Me=j);else if(G<F&&0>l($,J))z[Me]=$,z[G]=J,Me=G;else break e}}return ee}function l(z,ee){var J=z.sortIndex-ee.sortIndex;return J!==0?J:z.id-ee.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var d=Date,h=d.now();r.unstable_now=function(){return d.now()-h}}var m=[],p=[],y=1,x=null,v=3,M=!1,T=!1,C=!1,b=!1,_=typeof setTimeout=="function"?setTimeout:null,B=typeof clearTimeout=="function"?clearTimeout:null,O=typeof setImmediate<"u"?setImmediate:null;function D(z){for(var ee=i(p);ee!==null;){if(ee.callback===null)s(p);else if(ee.startTime<=z)s(p),ee.sortIndex=ee.expirationTime,t(m,ee);else break;ee=i(p)}}function W(z){if(C=!1,D(z),!T)if(i(m)!==null)T=!0,k||(k=!0,he());else{var ee=i(p);ee!==null&&be(W,ee.startTime-z)}}var k=!1,I=-1,Q=5,U=-1;function N(){return b?!0:!(r.unstable_now()-U<Q)}function V(){if(b=!1,k){var z=r.unstable_now();U=z;var ee=!0;try{e:{T=!1,C&&(C=!1,B(I),I=-1),M=!0;var J=v;try{t:{for(D(z),x=i(m);x!==null&&!(x.expirationTime>z&&N());){var Me=x.callback;if(typeof Me=="function"){x.callback=null,v=x.priorityLevel;var F=Me(x.expirationTime<=z);if(z=r.unstable_now(),typeof F=="function"){x.callback=F,D(z),ee=!0;break t}x===i(m)&&s(m),D(z)}else s(m);x=i(m)}if(x!==null)ee=!0;else{var E=i(p);E!==null&&be(W,E.startTime-z),ee=!1}}break e}finally{x=null,v=J,M=!1}ee=void 0}}finally{ee?he():k=!1}}}var he;if(typeof O=="function")he=function(){O(V)};else if(typeof MessageChannel<"u"){var le=new MessageChannel,ge=le.port2;le.port1.onmessage=V,he=function(){ge.postMessage(null)}}else he=function(){_(V,0)};function be(z,ee){I=_(function(){z(r.unstable_now())},ee)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(z){z.callback=null},r.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Q=0<z?Math.floor(1e3/z):5},r.unstable_getCurrentPriorityLevel=function(){return v},r.unstable_next=function(z){switch(v){case 1:case 2:case 3:var ee=3;break;default:ee=v}var J=v;v=ee;try{return z()}finally{v=J}},r.unstable_requestPaint=function(){b=!0},r.unstable_runWithPriority=function(z,ee){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var J=v;v=z;try{return ee()}finally{v=J}},r.unstable_scheduleCallback=function(z,ee,J){var Me=r.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?Me+J:Me):J=Me,z){case 1:var F=-1;break;case 2:F=250;break;case 5:F=1073741823;break;case 4:F=1e4;break;default:F=5e3}return F=J+F,z={id:y++,callback:ee,priorityLevel:z,startTime:J,expirationTime:F,sortIndex:-1},J>Me?(z.sortIndex=J,t(p,z),i(m)===null&&z===i(p)&&(C?(B(I),I=-1):C=!0,be(W,J-Me))):(z.sortIndex=F,t(m,z),T||M||(T=!0,k||(k=!0,he()))),z},r.unstable_shouldYield=N,r.unstable_wrapCallback=function(z){var ee=v;return function(){var J=v;v=ee;try{return z.apply(this,arguments)}finally{v=J}}}})(Yf)),Yf}var h0;function by(){return h0||(h0=1,qf.exports=Sy()),qf.exports}var Zf={exports:{}},Cn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var p0;function My(){if(p0)return Cn;p0=1;var r=gh();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)p+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,y){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:x==null?null:""+x,children:m,containerInfo:p,implementation:y}}var d=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Cn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Cn.createPortal=function(m,p){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return c(m,p,null,y)},Cn.flushSync=function(m){var p=d.T,y=s.p;try{if(d.T=null,s.p=2,m)return m()}finally{d.T=p,s.p=y,s.d.f()}},Cn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},Cn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},Cn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var y=p.as,x=h(y,p.crossOrigin),v=typeof p.integrity=="string"?p.integrity:void 0,M=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;y==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:x,integrity:v,fetchPriority:M}):y==="script"&&s.d.X(m,{crossOrigin:x,integrity:v,fetchPriority:M,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Cn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var y=h(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:y,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},Cn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var y=p.as,x=h(y,p.crossOrigin);s.d.L(m,y,{crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Cn.preloadModule=function(m,p){if(typeof m=="string")if(p){var y=h(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:y,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},Cn.requestFormReset=function(m){s.d.r(m)},Cn.unstable_batchedUpdates=function(m,p){return m(p)},Cn.useFormState=function(m,p,y){return d.H.useFormState(m,p,y)},Cn.useFormStatus=function(){return d.H.useHostTransitionStatus()},Cn.version="19.2.8",Cn}var m0;function Ey(){if(m0)return Zf.exports;m0=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Zf.exports=My(),Zf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var g0;function Ty(){if(g0)return Co;g0=1;var r=by(),t=gh(),i=Ey();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function d(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function h(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(c(e)!==e)throw Error(s(188))}function p(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,o=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return m(u),e;if(f===o)return m(u),n;f=f.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=f;else{for(var S=!1,A=u.child;A;){if(A===a){S=!0,a=u,o=f;break}if(A===o){S=!0,o=u,a=f;break}A=A.sibling}if(!S){for(A=f.child;A;){if(A===a){S=!0,a=f,o=u;break}if(A===o){S=!0,o=f,a=u;break}A=A.sibling}if(!S)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function y(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=y(e),n!==null)return n;e=e.sibling}return null}var x=Object.assign,v=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),T=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),b=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),B=Symbol.for("react.consumer"),O=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),W=Symbol.for("react.suspense"),k=Symbol.for("react.suspense_list"),I=Symbol.for("react.memo"),Q=Symbol.for("react.lazy"),U=Symbol.for("react.activity"),N=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function he(e){return e===null||typeof e!="object"?null:(e=V&&e[V]||e["@@iterator"],typeof e=="function"?e:null)}var le=Symbol.for("react.client.reference");function ge(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===le?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case C:return"Fragment";case _:return"Profiler";case b:return"StrictMode";case W:return"Suspense";case k:return"SuspenseList";case U:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case T:return"Portal";case O:return e.displayName||"Context";case B:return(e._context.displayName||"Context")+".Consumer";case D:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case I:return n=e.displayName||null,n!==null?n:ge(e.type)||"Memo";case Q:n=e._payload,e=e._init;try{return ge(e(n))}catch{}}return null}var be=Array.isArray,z=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ee=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,J={pending:!1,data:null,method:null,action:null},Me=[],F=-1;function E(e){return{current:e}}function j(e){0>F||(e.current=Me[F],Me[F]=null,F--)}function ce(e,n){F++,Me[F]=e.current,e.current=n}var G=E(null),$=E(null),de=E(null),re=E(null);function Te(e,n){switch(ce(de,n),ce($,e),ce(G,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?Dg(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=Dg(n),e=Ug(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}j(G),ce(G,e)}function Ce(){j(G),j($),j(de)}function Ue(e){e.memoizedState!==null&&ce(re,e);var n=G.current,a=Ug(n,e.type);n!==a&&(ce($,e),ce(G,a))}function tt(e){$.current===e&&(j(G),j($)),re.current===e&&(j(re),Mo._currentValue=J)}var it,Qe;function P(e){if(it===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);it=n&&n[1]||"",Qe=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+it+e+Qe}var Pt=!1;function at(e,n){if(!e||Pt)return"";Pt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var ye=function(){throw Error()};if(Object.defineProperty(ye.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ye,[])}catch(ue){var ae=ue}Reflect.construct(e,[],ye)}else{try{ye.call()}catch(ue){ae=ue}e.call(ye.prototype)}}else{try{throw Error()}catch(ue){ae=ue}(ye=e())&&typeof ye.catch=="function"&&ye.catch(function(){})}}catch(ue){if(ue&&ae&&typeof ue.stack=="string")return[ue.stack,ae.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),S=f[0],A=f[1];if(S&&A){var H=S.split(`
`),ne=A.split(`
`);for(u=o=0;o<H.length&&!H[o].includes("DetermineComponentFrameRoot");)o++;for(;u<ne.length&&!ne[u].includes("DetermineComponentFrameRoot");)u++;if(o===H.length||u===ne.length)for(o=H.length-1,u=ne.length-1;1<=o&&0<=u&&H[o]!==ne[u];)u--;for(;1<=o&&0<=u;o--,u--)if(H[o]!==ne[u]){if(o!==1||u!==1)do if(o--,u--,0>u||H[o]!==ne[u]){var me=`
`+H[o].replace(" at new "," at ");return e.displayName&&me.includes("<anonymous>")&&(me=me.replace("<anonymous>",e.displayName)),me}while(1<=o&&0<=u);break}}}finally{Pt=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?P(a):""}function st(e,n){switch(e.tag){case 26:case 27:case 5:return P(e.type);case 16:return P("Lazy");case 13:return e.child!==n&&n!==null?P("Suspense Fallback"):P("Suspense");case 19:return P("SuspenseList");case 0:case 15:return at(e.type,!1);case 11:return at(e.type.render,!1);case 1:return at(e.type,!0);case 31:return P("Activity");default:return""}}function je(e){try{var n="",a=null;do n+=st(e,a),a=e,e=e.return;while(e);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var vt=Object.prototype.hasOwnProperty,He=r.unstable_scheduleCallback,L=r.unstable_cancelCallback,w=r.unstable_shouldYield,ie=r.unstable_requestPaint,xe=r.unstable_now,Ee=r.unstable_getCurrentPriorityLevel,_e=r.unstable_ImmediatePriority,qe=r.unstable_UserBlockingPriority,Re=r.unstable_NormalPriority,ke=r.unstable_LowPriority,xt=r.unstable_IdlePriority,we=r.log,Ge=r.unstable_setDisableYieldValue,Ke=null,Ze=null;function Be(e){if(typeof we=="function"&&Ge(e),Ze&&typeof Ze.setStrictMode=="function")try{Ze.setStrictMode(Ke,e)}catch{}}var rt=Math.clz32?Math.clz32:Y,dt=Math.log,Ft=Math.LN2;function Y(e){return e>>>=0,e===0?32:31-(dt(e)/Ft|0)|0}var Ne=256,pe=262144,Se=4194304;function De(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Le(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var u=0,f=e.suspendedLanes,S=e.pingedLanes;e=e.warmLanes;var A=o&134217727;return A!==0?(o=A&~f,o!==0?u=De(o):(S&=A,S!==0?u=De(S):a||(a=A&~e,a!==0&&(u=De(a))))):(A=o&~f,A!==0?u=De(A):S!==0?u=De(S):a||(a=o&~e,a!==0&&(u=De(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function ot(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function Kt(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function dn(){var e=Se;return Se<<=1,(Se&62914560)===0&&(Se=4194304),e}function Rt(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function yn(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function pi(e,n,a,o,u,f){var S=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var A=e.entanglements,H=e.expirationTimes,ne=e.hiddenUpdates;for(a=S&~a;0<a;){var me=31-rt(a),ye=1<<me;A[me]=0,H[me]=-1;var ae=ne[me];if(ae!==null)for(ne[me]=null,me=0;me<ae.length;me++){var ue=ae[me];ue!==null&&(ue.lane&=-536870913)}a&=~ye}o!==0&&Or(e,o,0),f!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=f&~(S&~n))}function Or(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-rt(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&261930}function Pr(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-rt(a),u=1<<o;u&n|e[o]&n&&(e[o]|=n),a&=~u}}function Ai(e,n){var a=n&-n;return a=(a&42)!==0?1:Wa(a),(a&(e.suspendedLanes|n))!==0?0:a}function Wa(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function As(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function zr(){var e=ee.p;return e!==0?e:(e=window.event,e===void 0?32:t0(e.type))}function qa(e,n){var a=ee.p;try{return ee.p=e,n()}finally{ee.p=a}}var mi=Math.random().toString(36).slice(2),Jt="__reactFiber$"+mi,Sn="__reactProps$"+mi,Li="__reactContainer$"+mi,Ir="__reactEvents$"+mi,Ic="__reactListeners$"+mi,Bc="__reactHandles$"+mi,jo="__reactResources$"+mi,Ya="__reactMarker$"+mi;function Br(e){delete e[Jt],delete e[Sn],delete e[Ir],delete e[Ic],delete e[Bc]}function R(e){var n=e[Jt];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Li]||a[Jt]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=Fg(e);e!==null;){if(a=e[Jt])return a;e=Fg(e)}return n}e=a,a=e.parentNode}return null}function Z(e){if(e=e[Jt]||e[Li]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function se(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function oe(e){var n=e[jo];return n||(n=e[jo]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function q(e){e[Ya]=!0}var Ae=new Set,Oe={};function Ie(e,n){Fe(e,n),Fe(e+"Capture",n)}function Fe(e,n){for(Oe[e]=n,e=0;e<n.length;e++)Ae.add(n[e])}var lt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ct={},Je={};function Mt(e){return vt.call(Je,e)?!0:vt.call(ct,e)?!1:lt.test(e)?Je[e]=!0:(ct[e]=!0,!1)}function Et(e,n,a){if(Mt(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function qt(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Nt(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}function ut(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function et(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function hn(e,n,a){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,f=o.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(S){a=""+S,f.call(this,S)}}),Object.defineProperty(e,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(S){a=""+S},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function wt(e){if(!e._valueTracker){var n=et(e)?"checked":"value";e._valueTracker=hn(e,n,""+e[n])}}function zn(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=et(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function gi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Dn=/[\n"\\]/g;function xn(e){return e.replace(Dn,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Ht(e,n,a,o,u,f,S,A){e.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?e.type=S:e.removeAttribute("type"),n!=null?S==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+ut(n)):e.value!==""+ut(n)&&(e.value=""+ut(n)):S!=="submit"&&S!=="reset"||e.removeAttribute("value"),n!=null?wn(e,S,ut(n)):a!=null?wn(e,S,ut(a)):o!=null&&e.removeAttribute("value"),u==null&&f!=null&&(e.defaultChecked=!!f),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?e.name=""+ut(A):e.removeAttribute("name")}function Un(e,n,a,o,u,f,S,A){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){wt(e);return}a=a!=null?""+ut(a):"",n=n!=null?""+ut(n):a,A||n===e.value||(e.value=n),e.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=A?e.checked:!!o,e.defaultChecked=!!o,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(e.name=S),wt(e)}function wn(e,n,a){n==="number"&&gi(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function $t(e,n,a,o){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&o&&(e[a].defaultSelected=!0)}else{for(a=""+ut(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function bn(e,n,a){if(n!=null&&(n=""+ut(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+ut(a):""}function ws(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(be(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=ut(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o),wt(e)}function In(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var fv=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Ch(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||fv.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Rh(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&Ch(e,u,o)}else for(var f in n)n.hasOwnProperty(f)&&Ch(e,f,n[f])}function Fc(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var dv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),hv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Xo(e){return hv.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Oi(){}var Hc=null;function kc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Cs=null,Rs=null;function Nh(e){var n=Z(e);if(n&&(e=n.stateNode)){var a=e[Sn]||null;e:switch(e=n.stateNode,n.type){case"input":if(Ht(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+xn(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var u=o[Sn]||null;if(!u)throw Error(s(90));Ht(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&zn(o)}break e;case"textarea":bn(e,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&$t(e,!!a.multiple,n,!1)}}}var Gc=!1;function Dh(e,n,a){if(Gc)return e(n,a);Gc=!0;try{var o=e(n);return o}finally{if(Gc=!1,(Cs!==null||Rs!==null)&&(Ul(),Cs&&(n=Cs,e=Rs,Rs=Cs=null,Nh(n),e)))for(n=0;n<e.length;n++)Nh(e[n])}}function Fr(e,n){var a=e.stateNode;if(a===null)return null;var o=a[Sn]||null;if(o===null)return null;a=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var Pi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Vc=!1;if(Pi)try{var Hr={};Object.defineProperty(Hr,"passive",{get:function(){Vc=!0}}),window.addEventListener("test",Hr,Hr),window.removeEventListener("test",Hr,Hr)}catch{Vc=!1}var fa=null,jc=null,Wo=null;function Uh(){if(Wo)return Wo;var e,n=jc,a=n.length,o,u="value"in fa?fa.value:fa.textContent,f=u.length;for(e=0;e<a&&n[e]===u[e];e++);var S=a-e;for(o=1;o<=S&&n[a-o]===u[f-o];o++);return Wo=u.slice(e,1<o?1-o:void 0)}function qo(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Yo(){return!0}function Lh(){return!1}function Bn(e){function n(a,o,u,f,S){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=f,this.target=S,this.currentTarget=null;for(var A in e)e.hasOwnProperty(A)&&(a=e[A],this[A]=a?a(f):f[A]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Yo:Lh,this.isPropagationStopped=Lh,this}return x(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Yo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Yo)},persist:function(){},isPersistent:Yo}),n}var Za={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Zo=Bn(Za),kr=x({},Za,{view:0,detail:0}),pv=Bn(kr),Xc,Wc,Gr,Ko=x({},kr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Yc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Gr&&(Gr&&e.type==="mousemove"?(Xc=e.screenX-Gr.screenX,Wc=e.screenY-Gr.screenY):Wc=Xc=0,Gr=e),Xc)},movementY:function(e){return"movementY"in e?e.movementY:Wc}}),Oh=Bn(Ko),mv=x({},Ko,{dataTransfer:0}),gv=Bn(mv),xv=x({},kr,{relatedTarget:0}),qc=Bn(xv),vv=x({},Za,{animationName:0,elapsedTime:0,pseudoElement:0}),_v=Bn(vv),yv=x({},Za,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Sv=Bn(yv),bv=x({},Za,{data:0}),Ph=Bn(bv),Mv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ev={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Tv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Av(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Tv[e])?!!n[e]:!1}function Yc(){return Av}var wv=x({},kr,{key:function(e){if(e.key){var n=Mv[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=qo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Ev[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Yc,charCode:function(e){return e.type==="keypress"?qo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?qo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Cv=Bn(wv),Rv=x({},Ko,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),zh=Bn(Rv),Nv=x({},kr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Yc}),Dv=Bn(Nv),Uv=x({},Za,{propertyName:0,elapsedTime:0,pseudoElement:0}),Lv=Bn(Uv),Ov=x({},Ko,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Pv=Bn(Ov),zv=x({},Za,{newState:0,oldState:0}),Iv=Bn(zv),Bv=[9,13,27,32],Zc=Pi&&"CompositionEvent"in window,Vr=null;Pi&&"documentMode"in document&&(Vr=document.documentMode);var Fv=Pi&&"TextEvent"in window&&!Vr,Ih=Pi&&(!Zc||Vr&&8<Vr&&11>=Vr),Bh=" ",Fh=!1;function Hh(e,n){switch(e){case"keyup":return Bv.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function kh(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ns=!1;function Hv(e,n){switch(e){case"compositionend":return kh(n);case"keypress":return n.which!==32?null:(Fh=!0,Bh);case"textInput":return e=n.data,e===Bh&&Fh?null:e;default:return null}}function kv(e,n){if(Ns)return e==="compositionend"||!Zc&&Hh(e,n)?(e=Uh(),Wo=jc=fa=null,Ns=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Ih&&n.locale!=="ko"?null:n.data;default:return null}}var Gv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Gh(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Gv[e.type]:n==="textarea"}function Vh(e,n,a,o){Cs?Rs?Rs.push(o):Rs=[o]:Cs=o,n=Fl(n,"onChange"),0<n.length&&(a=new Zo("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var jr=null,Xr=null;function Vv(e){Tg(e,0)}function Qo(e){var n=se(e);if(zn(n))return e}function jh(e,n){if(e==="change")return n}var Xh=!1;if(Pi){var Kc;if(Pi){var Qc="oninput"in document;if(!Qc){var Wh=document.createElement("div");Wh.setAttribute("oninput","return;"),Qc=typeof Wh.oninput=="function"}Kc=Qc}else Kc=!1;Xh=Kc&&(!document.documentMode||9<document.documentMode)}function qh(){jr&&(jr.detachEvent("onpropertychange",Yh),Xr=jr=null)}function Yh(e){if(e.propertyName==="value"&&Qo(Xr)){var n=[];Vh(n,Xr,e,kc(e)),Dh(Vv,n)}}function jv(e,n,a){e==="focusin"?(qh(),jr=n,Xr=a,jr.attachEvent("onpropertychange",Yh)):e==="focusout"&&qh()}function Xv(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Qo(Xr)}function Wv(e,n){if(e==="click")return Qo(n)}function qv(e,n){if(e==="input"||e==="change")return Qo(n)}function Yv(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var qn=typeof Object.is=="function"?Object.is:Yv;function Wr(e,n){if(qn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!vt.call(n,u)||!qn(e[u],n[u]))return!1}return!0}function Zh(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Kh(e,n){var a=Zh(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Zh(a)}}function Qh(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Qh(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Jh(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=gi(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=gi(e.document)}return n}function Jc(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var Zv=Pi&&"documentMode"in document&&11>=document.documentMode,Ds=null,$c=null,qr=null,eu=!1;function $h(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;eu||Ds==null||Ds!==gi(o)||(o=Ds,"selectionStart"in o&&Jc(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),qr&&Wr(qr,o)||(qr=o,o=Fl($c,"onSelect"),0<o.length&&(n=new Zo("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=Ds)))}function Ka(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Us={animationend:Ka("Animation","AnimationEnd"),animationiteration:Ka("Animation","AnimationIteration"),animationstart:Ka("Animation","AnimationStart"),transitionrun:Ka("Transition","TransitionRun"),transitionstart:Ka("Transition","TransitionStart"),transitioncancel:Ka("Transition","TransitionCancel"),transitionend:Ka("Transition","TransitionEnd")},tu={},ep={};Pi&&(ep=document.createElement("div").style,"AnimationEvent"in window||(delete Us.animationend.animation,delete Us.animationiteration.animation,delete Us.animationstart.animation),"TransitionEvent"in window||delete Us.transitionend.transition);function Qa(e){if(tu[e])return tu[e];if(!Us[e])return e;var n=Us[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in ep)return tu[e]=n[a];return e}var tp=Qa("animationend"),np=Qa("animationiteration"),ip=Qa("animationstart"),Kv=Qa("transitionrun"),Qv=Qa("transitionstart"),Jv=Qa("transitioncancel"),ap=Qa("transitionend"),sp=new Map,nu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");nu.push("scrollEnd");function xi(e,n){sp.set(e,n),Ie(n,[e])}var Jo=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ni=[],Ls=0,iu=0;function $o(){for(var e=Ls,n=iu=Ls=0;n<e;){var a=ni[n];ni[n++]=null;var o=ni[n];ni[n++]=null;var u=ni[n];ni[n++]=null;var f=ni[n];if(ni[n++]=null,o!==null&&u!==null){var S=o.pending;S===null?u.next=u:(u.next=S.next,S.next=u),o.pending=u}f!==0&&rp(a,u,f)}}function el(e,n,a,o){ni[Ls++]=e,ni[Ls++]=n,ni[Ls++]=a,ni[Ls++]=o,iu|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function au(e,n,a,o){return el(e,n,a,o),tl(e)}function Ja(e,n){return el(e,null,null,n),tl(e)}function rp(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var u=!1,f=e.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(u=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,u&&n!==null&&(u=31-rt(a),e=f.hiddenUpdates,o=e[u],o===null?e[u]=[n]:o.push(n),n.lane=a|536870912),f):null}function tl(e){if(50<go)throw go=0,pf=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Os={};function $v(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Yn(e,n,a,o){return new $v(e,n,a,o)}function su(e){return e=e.prototype,!(!e||!e.isReactComponent)}function zi(e,n){var a=e.alternate;return a===null?(a=Yn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function op(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function nl(e,n,a,o,u,f){var S=0;if(o=e,typeof e=="function")su(e)&&(S=1);else if(typeof e=="string")S=ay(e,a,G.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case U:return e=Yn(31,a,n,u),e.elementType=U,e.lanes=f,e;case C:return $a(a.children,u,f,n);case b:S=8,u|=24;break;case _:return e=Yn(12,a,n,u|2),e.elementType=_,e.lanes=f,e;case W:return e=Yn(13,a,n,u),e.elementType=W,e.lanes=f,e;case k:return e=Yn(19,a,n,u),e.elementType=k,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case O:S=10;break e;case B:S=9;break e;case D:S=11;break e;case I:S=14;break e;case Q:S=16,o=null;break e}S=29,a=Error(s(130,e===null?"null":typeof e,"")),o=null}return n=Yn(S,a,n,u),n.elementType=e,n.type=o,n.lanes=f,n}function $a(e,n,a,o){return e=Yn(7,e,o,n),e.lanes=a,e}function ru(e,n,a){return e=Yn(6,e,null,n),e.lanes=a,e}function lp(e){var n=Yn(18,null,null,0);return n.stateNode=e,n}function ou(e,n,a){return n=Yn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var cp=new WeakMap;function ii(e,n){if(typeof e=="object"&&e!==null){var a=cp.get(e);return a!==void 0?a:(n={value:e,source:n,stack:je(n)},cp.set(e,n),n)}return{value:e,source:n,stack:je(n)}}var Ps=[],zs=0,il=null,Yr=0,ai=[],si=0,da=null,wi=1,Ci="";function Ii(e,n){Ps[zs++]=Yr,Ps[zs++]=il,il=e,Yr=n}function up(e,n,a){ai[si++]=wi,ai[si++]=Ci,ai[si++]=da,da=e;var o=wi;e=Ci;var u=32-rt(o)-1;o&=~(1<<u),a+=1;var f=32-rt(n)+u;if(30<f){var S=u-u%5;f=(o&(1<<S)-1).toString(32),o>>=S,u-=S,wi=1<<32-rt(n)+u|a<<u|o,Ci=f+e}else wi=1<<f|a<<u|o,Ci=e}function lu(e){e.return!==null&&(Ii(e,1),up(e,1,0))}function cu(e){for(;e===il;)il=Ps[--zs],Ps[zs]=null,Yr=Ps[--zs],Ps[zs]=null;for(;e===da;)da=ai[--si],ai[si]=null,Ci=ai[--si],ai[si]=null,wi=ai[--si],ai[si]=null}function fp(e,n){ai[si++]=wi,ai[si++]=Ci,ai[si++]=da,wi=n.id,Ci=n.overflow,da=e}var Mn=null,Yt=null,Tt=!1,ha=null,ri=!1,uu=Error(s(519));function pa(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Zr(ii(n,e)),uu}function dp(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[Jt]=e,n[Sn]=o,a){case"dialog":yt("cancel",n),yt("close",n);break;case"iframe":case"object":case"embed":yt("load",n);break;case"video":case"audio":for(a=0;a<vo.length;a++)yt(vo[a],n);break;case"source":yt("error",n);break;case"img":case"image":case"link":yt("error",n),yt("load",n);break;case"details":yt("toggle",n);break;case"input":yt("invalid",n),Un(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":yt("invalid",n);break;case"textarea":yt("invalid",n),ws(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||Rg(n.textContent,a)?(o.popover!=null&&(yt("beforetoggle",n),yt("toggle",n)),o.onScroll!=null&&yt("scroll",n),o.onScrollEnd!=null&&yt("scrollend",n),o.onClick!=null&&(n.onclick=Oi),n=!0):n=!1,n||pa(e,!0)}function hp(e){for(Mn=e.return;Mn;)switch(Mn.tag){case 5:case 31:case 13:ri=!1;return;case 27:case 3:ri=!0;return;default:Mn=Mn.return}}function Is(e){if(e!==Mn)return!1;if(!Tt)return hp(e),Tt=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Rf(e.type,e.memoizedProps)),a=!a),a&&Yt&&pa(e),hp(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Yt=Bg(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Yt=Bg(e)}else n===27?(n=Yt,Ca(e.type)?(e=Of,Of=null,Yt=e):Yt=n):Yt=Mn?li(e.stateNode.nextSibling):null;return!0}function es(){Yt=Mn=null,Tt=!1}function fu(){var e=ha;return e!==null&&(Gn===null?Gn=e:Gn.push.apply(Gn,e),ha=null),e}function Zr(e){ha===null?ha=[e]:ha.push(e)}var du=E(null),ts=null,Bi=null;function ma(e,n,a){ce(du,n._currentValue),n._currentValue=a}function Fi(e){e._currentValue=du.current,j(du)}function hu(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function pu(e,n,a,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var f=u.dependencies;if(f!==null){var S=u.child;f=f.firstContext;e:for(;f!==null;){var A=f;f=u;for(var H=0;H<n.length;H++)if(A.context===n[H]){f.lanes|=a,A=f.alternate,A!==null&&(A.lanes|=a),hu(f.return,a,e),o||(S=null);break e}f=A.next}}else if(u.tag===18){if(S=u.return,S===null)throw Error(s(341));S.lanes|=a,f=S.alternate,f!==null&&(f.lanes|=a),hu(S,a,e),S=null}else S=u.child;if(S!==null)S.return=u;else for(S=u;S!==null;){if(S===e){S=null;break}if(u=S.sibling,u!==null){u.return=S.return,S=u;break}S=S.return}u=S}}function Bs(e,n,a,o){e=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var S=u.alternate;if(S===null)throw Error(s(387));if(S=S.memoizedProps,S!==null){var A=u.type;qn(u.pendingProps.value,S.value)||(e!==null?e.push(A):e=[A])}}else if(u===re.current){if(S=u.alternate,S===null)throw Error(s(387));S.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Mo):e=[Mo])}u=u.return}e!==null&&pu(n,e,a,o),n.flags|=262144}function al(e){for(e=e.firstContext;e!==null;){if(!qn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ns(e){ts=e,Bi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function En(e){return pp(ts,e)}function sl(e,n){return ts===null&&ns(e),pp(e,n)}function pp(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Bi===null){if(e===null)throw Error(s(308));Bi=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Bi=Bi.next=n;return a}var e_=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},t_=r.unstable_scheduleCallback,n_=r.unstable_NormalPriority,on={$$typeof:O,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function mu(){return{controller:new e_,data:new Map,refCount:0}}function Kr(e){e.refCount--,e.refCount===0&&t_(n_,function(){e.controller.abort()})}var Qr=null,gu=0,Fs=0,Hs=null;function i_(e,n){if(Qr===null){var a=Qr=[];gu=0,Fs=yf(),Hs={status:"pending",value:void 0,then:function(o){a.push(o)}}}return gu++,n.then(mp,mp),n}function mp(){if(--gu===0&&Qr!==null){Hs!==null&&(Hs.status="fulfilled");var e=Qr;Qr=null,Fs=0,Hs=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function a_(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var gp=z.S;z.S=function(e,n){$m=xe(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&i_(e,n),gp!==null&&gp(e,n)};var is=E(null);function xu(){var e=is.current;return e!==null?e:Xt.pooledCache}function rl(e,n){n===null?ce(is,is.current):ce(is,n.pool)}function xp(){var e=xu();return e===null?null:{parent:on._currentValue,pool:e}}var ks=Error(s(460)),vu=Error(s(474)),ol=Error(s(542)),ll={then:function(){}};function vp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function _p(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(Oi,Oi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Sp(e),e;default:if(typeof n.status=="string")n.then(Oi,Oi);else{if(e=Xt,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Sp(e),e}throw ss=n,ks}}function as(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(ss=a,ks):a}}var ss=null;function yp(){if(ss===null)throw Error(s(459));var e=ss;return ss=null,e}function Sp(e){if(e===ks||e===ol)throw Error(s(483))}var Gs=null,Jr=0;function cl(e){var n=Jr;return Jr+=1,Gs===null&&(Gs=[]),_p(Gs,e,n)}function $r(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function ul(e,n){throw n.$$typeof===v?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function bp(e){function n(K,X){if(e){var te=K.deletions;te===null?(K.deletions=[X],K.flags|=16):te.push(X)}}function a(K,X){if(!e)return null;for(;X!==null;)n(K,X),X=X.sibling;return null}function o(K){for(var X=new Map;K!==null;)K.key!==null?X.set(K.key,K):X.set(K.index,K),K=K.sibling;return X}function u(K,X){return K=zi(K,X),K.index=0,K.sibling=null,K}function f(K,X,te){return K.index=te,e?(te=K.alternate,te!==null?(te=te.index,te<X?(K.flags|=67108866,X):te):(K.flags|=67108866,X)):(K.flags|=1048576,X)}function S(K){return e&&K.alternate===null&&(K.flags|=67108866),K}function A(K,X,te,ve){return X===null||X.tag!==6?(X=ru(te,K.mode,ve),X.return=K,X):(X=u(X,te),X.return=K,X)}function H(K,X,te,ve){var $e=te.type;return $e===C?me(K,X,te.props.children,ve,te.key):X!==null&&(X.elementType===$e||typeof $e=="object"&&$e!==null&&$e.$$typeof===Q&&as($e)===X.type)?(X=u(X,te.props),$r(X,te),X.return=K,X):(X=nl(te.type,te.key,te.props,null,K.mode,ve),$r(X,te),X.return=K,X)}function ne(K,X,te,ve){return X===null||X.tag!==4||X.stateNode.containerInfo!==te.containerInfo||X.stateNode.implementation!==te.implementation?(X=ou(te,K.mode,ve),X.return=K,X):(X=u(X,te.children||[]),X.return=K,X)}function me(K,X,te,ve,$e){return X===null||X.tag!==7?(X=$a(te,K.mode,ve,$e),X.return=K,X):(X=u(X,te),X.return=K,X)}function ye(K,X,te){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return X=ru(""+X,K.mode,te),X.return=K,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case M:return te=nl(X.type,X.key,X.props,null,K.mode,te),$r(te,X),te.return=K,te;case T:return X=ou(X,K.mode,te),X.return=K,X;case Q:return X=as(X),ye(K,X,te)}if(be(X)||he(X))return X=$a(X,K.mode,te,null),X.return=K,X;if(typeof X.then=="function")return ye(K,cl(X),te);if(X.$$typeof===O)return ye(K,sl(K,X),te);ul(K,X)}return null}function ae(K,X,te,ve){var $e=X!==null?X.key:null;if(typeof te=="string"&&te!==""||typeof te=="number"||typeof te=="bigint")return $e!==null?null:A(K,X,""+te,ve);if(typeof te=="object"&&te!==null){switch(te.$$typeof){case M:return te.key===$e?H(K,X,te,ve):null;case T:return te.key===$e?ne(K,X,te,ve):null;case Q:return te=as(te),ae(K,X,te,ve)}if(be(te)||he(te))return $e!==null?null:me(K,X,te,ve,null);if(typeof te.then=="function")return ae(K,X,cl(te),ve);if(te.$$typeof===O)return ae(K,X,sl(K,te),ve);ul(K,te)}return null}function ue(K,X,te,ve,$e){if(typeof ve=="string"&&ve!==""||typeof ve=="number"||typeof ve=="bigint")return K=K.get(te)||null,A(X,K,""+ve,$e);if(typeof ve=="object"&&ve!==null){switch(ve.$$typeof){case M:return K=K.get(ve.key===null?te:ve.key)||null,H(X,K,ve,$e);case T:return K=K.get(ve.key===null?te:ve.key)||null,ne(X,K,ve,$e);case Q:return ve=as(ve),ue(K,X,te,ve,$e)}if(be(ve)||he(ve))return K=K.get(te)||null,me(X,K,ve,$e,null);if(typeof ve.then=="function")return ue(K,X,te,cl(ve),$e);if(ve.$$typeof===O)return ue(K,X,te,sl(X,ve),$e);ul(X,ve)}return null}function Xe(K,X,te,ve){for(var $e=null,Dt=null,Ye=X,pt=X=0,bt=null;Ye!==null&&pt<te.length;pt++){Ye.index>pt?(bt=Ye,Ye=null):bt=Ye.sibling;var Ut=ae(K,Ye,te[pt],ve);if(Ut===null){Ye===null&&(Ye=bt);break}e&&Ye&&Ut.alternate===null&&n(K,Ye),X=f(Ut,X,pt),Dt===null?$e=Ut:Dt.sibling=Ut,Dt=Ut,Ye=bt}if(pt===te.length)return a(K,Ye),Tt&&Ii(K,pt),$e;if(Ye===null){for(;pt<te.length;pt++)Ye=ye(K,te[pt],ve),Ye!==null&&(X=f(Ye,X,pt),Dt===null?$e=Ye:Dt.sibling=Ye,Dt=Ye);return Tt&&Ii(K,pt),$e}for(Ye=o(Ye);pt<te.length;pt++)bt=ue(Ye,K,pt,te[pt],ve),bt!==null&&(e&&bt.alternate!==null&&Ye.delete(bt.key===null?pt:bt.key),X=f(bt,X,pt),Dt===null?$e=bt:Dt.sibling=bt,Dt=bt);return e&&Ye.forEach(function(La){return n(K,La)}),Tt&&Ii(K,pt),$e}function nt(K,X,te,ve){if(te==null)throw Error(s(151));for(var $e=null,Dt=null,Ye=X,pt=X=0,bt=null,Ut=te.next();Ye!==null&&!Ut.done;pt++,Ut=te.next()){Ye.index>pt?(bt=Ye,Ye=null):bt=Ye.sibling;var La=ae(K,Ye,Ut.value,ve);if(La===null){Ye===null&&(Ye=bt);break}e&&Ye&&La.alternate===null&&n(K,Ye),X=f(La,X,pt),Dt===null?$e=La:Dt.sibling=La,Dt=La,Ye=bt}if(Ut.done)return a(K,Ye),Tt&&Ii(K,pt),$e;if(Ye===null){for(;!Ut.done;pt++,Ut=te.next())Ut=ye(K,Ut.value,ve),Ut!==null&&(X=f(Ut,X,pt),Dt===null?$e=Ut:Dt.sibling=Ut,Dt=Ut);return Tt&&Ii(K,pt),$e}for(Ye=o(Ye);!Ut.done;pt++,Ut=te.next())Ut=ue(Ye,K,pt,Ut.value,ve),Ut!==null&&(e&&Ut.alternate!==null&&Ye.delete(Ut.key===null?pt:Ut.key),X=f(Ut,X,pt),Dt===null?$e=Ut:Dt.sibling=Ut,Dt=Ut);return e&&Ye.forEach(function(my){return n(K,my)}),Tt&&Ii(K,pt),$e}function Vt(K,X,te,ve){if(typeof te=="object"&&te!==null&&te.type===C&&te.key===null&&(te=te.props.children),typeof te=="object"&&te!==null){switch(te.$$typeof){case M:e:{for(var $e=te.key;X!==null;){if(X.key===$e){if($e=te.type,$e===C){if(X.tag===7){a(K,X.sibling),ve=u(X,te.props.children),ve.return=K,K=ve;break e}}else if(X.elementType===$e||typeof $e=="object"&&$e!==null&&$e.$$typeof===Q&&as($e)===X.type){a(K,X.sibling),ve=u(X,te.props),$r(ve,te),ve.return=K,K=ve;break e}a(K,X);break}else n(K,X);X=X.sibling}te.type===C?(ve=$a(te.props.children,K.mode,ve,te.key),ve.return=K,K=ve):(ve=nl(te.type,te.key,te.props,null,K.mode,ve),$r(ve,te),ve.return=K,K=ve)}return S(K);case T:e:{for($e=te.key;X!==null;){if(X.key===$e)if(X.tag===4&&X.stateNode.containerInfo===te.containerInfo&&X.stateNode.implementation===te.implementation){a(K,X.sibling),ve=u(X,te.children||[]),ve.return=K,K=ve;break e}else{a(K,X);break}else n(K,X);X=X.sibling}ve=ou(te,K.mode,ve),ve.return=K,K=ve}return S(K);case Q:return te=as(te),Vt(K,X,te,ve)}if(be(te))return Xe(K,X,te,ve);if(he(te)){if($e=he(te),typeof $e!="function")throw Error(s(150));return te=$e.call(te),nt(K,X,te,ve)}if(typeof te.then=="function")return Vt(K,X,cl(te),ve);if(te.$$typeof===O)return Vt(K,X,sl(K,te),ve);ul(K,te)}return typeof te=="string"&&te!==""||typeof te=="number"||typeof te=="bigint"?(te=""+te,X!==null&&X.tag===6?(a(K,X.sibling),ve=u(X,te),ve.return=K,K=ve):(a(K,X),ve=ru(te,K.mode,ve),ve.return=K,K=ve),S(K)):a(K,X)}return function(K,X,te,ve){try{Jr=0;var $e=Vt(K,X,te,ve);return Gs=null,$e}catch(Ye){if(Ye===ks||Ye===ol)throw Ye;var Dt=Yn(29,Ye,null,K.mode);return Dt.lanes=ve,Dt.return=K,Dt}finally{}}}var rs=bp(!0),Mp=bp(!1),ga=!1;function _u(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function yu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function xa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function va(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(zt&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=tl(e),rp(e,null,a),n}return el(e,o,n,a),tl(e)}function eo(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Pr(e,a)}}function Su(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var S={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=S:f=f.next=S,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var bu=!1;function to(){if(bu){var e=Hs;if(e!==null)throw e}}function no(e,n,a,o){bu=!1;var u=e.updateQueue;ga=!1;var f=u.firstBaseUpdate,S=u.lastBaseUpdate,A=u.shared.pending;if(A!==null){u.shared.pending=null;var H=A,ne=H.next;H.next=null,S===null?f=ne:S.next=ne,S=H;var me=e.alternate;me!==null&&(me=me.updateQueue,A=me.lastBaseUpdate,A!==S&&(A===null?me.firstBaseUpdate=ne:A.next=ne,me.lastBaseUpdate=H))}if(f!==null){var ye=u.baseState;S=0,me=ne=H=null,A=f;do{var ae=A.lane&-536870913,ue=ae!==A.lane;if(ue?(St&ae)===ae:(o&ae)===ae){ae!==0&&ae===Fs&&(bu=!0),me!==null&&(me=me.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});e:{var Xe=e,nt=A;ae=n;var Vt=a;switch(nt.tag){case 1:if(Xe=nt.payload,typeof Xe=="function"){ye=Xe.call(Vt,ye,ae);break e}ye=Xe;break e;case 3:Xe.flags=Xe.flags&-65537|128;case 0:if(Xe=nt.payload,ae=typeof Xe=="function"?Xe.call(Vt,ye,ae):Xe,ae==null)break e;ye=x({},ye,ae);break e;case 2:ga=!0}}ae=A.callback,ae!==null&&(e.flags|=64,ue&&(e.flags|=8192),ue=u.callbacks,ue===null?u.callbacks=[ae]:ue.push(ae))}else ue={lane:ae,tag:A.tag,payload:A.payload,callback:A.callback,next:null},me===null?(ne=me=ue,H=ye):me=me.next=ue,S|=ae;if(A=A.next,A===null){if(A=u.shared.pending,A===null)break;ue=A,A=ue.next,ue.next=null,u.lastBaseUpdate=ue,u.shared.pending=null}}while(!0);me===null&&(H=ye),u.baseState=H,u.firstBaseUpdate=ne,u.lastBaseUpdate=me,f===null&&(u.shared.lanes=0),Ma|=S,e.lanes=S,e.memoizedState=ye}}function Ep(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function Tp(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Ep(a[e],n)}var Vs=E(null),fl=E(0);function Ap(e,n){e=Yi,ce(fl,e),ce(Vs,n),Yi=e|n.baseLanes}function Mu(){ce(fl,Yi),ce(Vs,Vs.current)}function Eu(){Yi=fl.current,j(Vs),j(fl)}var Zn=E(null),oi=null;function _a(e){var n=e.alternate;ce(nn,nn.current&1),ce(Zn,e),oi===null&&(n===null||Vs.current!==null||n.memoizedState!==null)&&(oi=e)}function Tu(e){ce(nn,nn.current),ce(Zn,e),oi===null&&(oi=e)}function wp(e){e.tag===22?(ce(nn,nn.current),ce(Zn,e),oi===null&&(oi=e)):ya()}function ya(){ce(nn,nn.current),ce(Zn,Zn.current)}function Kn(e){j(Zn),oi===e&&(oi=null),j(nn)}var nn=E(0);function dl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Uf(a)||Lf(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Hi=0,ht=null,kt=null,ln=null,hl=!1,js=!1,os=!1,pl=0,io=0,Xs=null,s_=0;function en(){throw Error(s(321))}function Au(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!qn(e[a],n[a]))return!1;return!0}function wu(e,n,a,o,u,f){return Hi=f,ht=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,z.H=e===null||e.memoizedState===null?um:Gu,os=!1,f=a(o,u),os=!1,js&&(f=Rp(n,a,o,u)),Cp(e),f}function Cp(e){z.H=ro;var n=kt!==null&&kt.next!==null;if(Hi=0,ln=kt=ht=null,hl=!1,io=0,Xs=null,n)throw Error(s(300));e===null||cn||(e=e.dependencies,e!==null&&al(e)&&(cn=!0))}function Rp(e,n,a,o){ht=e;var u=0;do{if(js&&(Xs=null),io=0,js=!1,25<=u)throw Error(s(301));if(u+=1,ln=kt=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}z.H=fm,f=n(a,o)}while(js);return f}function r_(){var e=z.H,n=e.useState()[0];return n=typeof n.then=="function"?ao(n):n,e=e.useState()[0],(kt!==null?kt.memoizedState:null)!==e&&(ht.flags|=1024),n}function Cu(){var e=pl!==0;return pl=0,e}function Ru(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Nu(e){if(hl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}hl=!1}Hi=0,ln=kt=ht=null,js=!1,io=pl=0,Xs=null}function Ln(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ln===null?ht.memoizedState=ln=e:ln=ln.next=e,ln}function an(){if(kt===null){var e=ht.alternate;e=e!==null?e.memoizedState:null}else e=kt.next;var n=ln===null?ht.memoizedState:ln.next;if(n!==null)ln=n,kt=e;else{if(e===null)throw ht.alternate===null?Error(s(467)):Error(s(310));kt=e,e={memoizedState:kt.memoizedState,baseState:kt.baseState,baseQueue:kt.baseQueue,queue:kt.queue,next:null},ln===null?ht.memoizedState=ln=e:ln=ln.next=e}return ln}function ml(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ao(e){var n=io;return io+=1,Xs===null&&(Xs=[]),e=_p(Xs,e,n),n=ht,(ln===null?n.memoizedState:ln.next)===null&&(n=n.alternate,z.H=n===null||n.memoizedState===null?um:Gu),e}function gl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return ao(e);if(e.$$typeof===O)return En(e)}throw Error(s(438,String(e)))}function Du(e){var n=null,a=ht.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=ht.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=ml(),ht.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=N;return n.index++,a}function ki(e,n){return typeof n=="function"?n(e):n}function xl(e){var n=an();return Uu(n,kt,e)}function Uu(e,n,a){var o=e.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=e.baseQueue,f=o.pending;if(f!==null){if(u!==null){var S=u.next;u.next=f.next,f.next=S}n.baseQueue=u=f,o.pending=null}if(f=e.baseState,u===null)e.memoizedState=f;else{n=u.next;var A=S=null,H=null,ne=n,me=!1;do{var ye=ne.lane&-536870913;if(ye!==ne.lane?(St&ye)===ye:(Hi&ye)===ye){var ae=ne.revertLane;if(ae===0)H!==null&&(H=H.next={lane:0,revertLane:0,gesture:null,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null}),ye===Fs&&(me=!0);else if((Hi&ae)===ae){ne=ne.next,ae===Fs&&(me=!0);continue}else ye={lane:0,revertLane:ne.revertLane,gesture:null,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null},H===null?(A=H=ye,S=f):H=H.next=ye,ht.lanes|=ae,Ma|=ae;ye=ne.action,os&&a(f,ye),f=ne.hasEagerState?ne.eagerState:a(f,ye)}else ae={lane:ye,revertLane:ne.revertLane,gesture:ne.gesture,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null},H===null?(A=H=ae,S=f):H=H.next=ae,ht.lanes|=ye,Ma|=ye;ne=ne.next}while(ne!==null&&ne!==n);if(H===null?S=f:H.next=A,!qn(f,e.memoizedState)&&(cn=!0,me&&(a=Hs,a!==null)))throw a;e.memoizedState=f,e.baseState=S,e.baseQueue=H,o.lastRenderedState=f}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function Lu(e){var n=an(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var o=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var S=u=u.next;do f=e(f,S.action),S=S.next;while(S!==u);qn(f,n.memoizedState)||(cn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,o]}function Np(e,n,a){var o=ht,u=an(),f=Tt;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var S=!qn((kt||u).memoizedState,a);if(S&&(u.memoizedState=a,cn=!0),u=u.queue,zu(Lp.bind(null,o,u,e),[e]),u.getSnapshot!==n||S||ln!==null&&ln.memoizedState.tag&1){if(o.flags|=2048,Ws(9,{destroy:void 0},Up.bind(null,o,u,a,n),null),Xt===null)throw Error(s(349));f||(Hi&127)!==0||Dp(o,n,a)}return a}function Dp(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=ht.updateQueue,n===null?(n=ml(),ht.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function Up(e,n,a,o){n.value=a,n.getSnapshot=o,Op(n)&&Pp(e)}function Lp(e,n,a){return a(function(){Op(n)&&Pp(e)})}function Op(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!qn(e,a)}catch{return!0}}function Pp(e){var n=Ja(e,2);n!==null&&Vn(n,e,2)}function Ou(e){var n=Ln();if(typeof e=="function"){var a=e;if(e=a(),os){Be(!0);try{a()}finally{Be(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ki,lastRenderedState:e},n}function zp(e,n,a,o){return e.baseState=a,Uu(e,kt,typeof o=="function"?o:ki)}function o_(e,n,a,o,u){if(yl(e))throw Error(s(485));if(e=n.action,e!==null){var f={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){f.listeners.push(S)}};z.T!==null?a(!0):f.isTransition=!1,o(f),a=n.pending,a===null?(f.next=n.pending=f,Ip(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Ip(e,n){var a=n.action,o=n.payload,u=e.state;if(n.isTransition){var f=z.T,S={};z.T=S;try{var A=a(u,o),H=z.S;H!==null&&H(S,A),Bp(e,n,A)}catch(ne){Pu(e,n,ne)}finally{f!==null&&S.types!==null&&(f.types=S.types),z.T=f}}else try{f=a(u,o),Bp(e,n,f)}catch(ne){Pu(e,n,ne)}}function Bp(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Fp(e,n,o)},function(o){return Pu(e,n,o)}):Fp(e,n,a)}function Fp(e,n,a){n.status="fulfilled",n.value=a,Hp(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,Ip(e,a)))}function Pu(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,Hp(n),n=n.next;while(n!==o)}e.action=null}function Hp(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function kp(e,n){return n}function Gp(e,n){if(Tt){var a=Xt.formState;if(a!==null){e:{var o=ht;if(Tt){if(Yt){t:{for(var u=Yt,f=ri;u.nodeType!==8;){if(!f){u=null;break t}if(u=li(u.nextSibling),u===null){u=null;break t}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){Yt=li(u.nextSibling),o=u.data==="F!";break e}}pa(o)}o=!1}o&&(n=a[0])}}return a=Ln(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:kp,lastRenderedState:n},a.queue=o,a=om.bind(null,ht,o),o.dispatch=a,o=Ou(!1),f=ku.bind(null,ht,!1,o.queue),o=Ln(),u={state:n,dispatch:null,action:e,pending:null},o.queue=u,a=o_.bind(null,ht,u,f,a),u.dispatch=a,o.memoizedState=e,[n,a,!1]}function Vp(e){var n=an();return jp(n,kt,e)}function jp(e,n,a){if(n=Uu(e,n,kp)[0],e=xl(ki)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=ao(n)}catch(S){throw S===ks?ol:S}else o=n;n=an();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(ht.flags|=2048,Ws(9,{destroy:void 0},l_.bind(null,u,a),null)),[o,f,e]}function l_(e,n){e.action=n}function Xp(e){var n=an(),a=kt;if(a!==null)return jp(n,a,e);an(),n=n.memoizedState,a=an();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function Ws(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=ht.updateQueue,n===null&&(n=ml(),ht.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function Wp(){return an().memoizedState}function vl(e,n,a,o){var u=Ln();ht.flags|=e,u.memoizedState=Ws(1|n,{destroy:void 0},a,o===void 0?null:o)}function _l(e,n,a,o){var u=an();o=o===void 0?null:o;var f=u.memoizedState.inst;kt!==null&&o!==null&&Au(o,kt.memoizedState.deps)?u.memoizedState=Ws(n,f,a,o):(ht.flags|=e,u.memoizedState=Ws(1|n,f,a,o))}function qp(e,n){vl(8390656,8,e,n)}function zu(e,n){_l(2048,8,e,n)}function c_(e){ht.flags|=4;var n=ht.updateQueue;if(n===null)n=ml(),ht.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function Yp(e){var n=an().memoizedState;return c_({ref:n,nextImpl:e}),function(){if((zt&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function Zp(e,n){return _l(4,2,e,n)}function Kp(e,n){return _l(4,4,e,n)}function Qp(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Jp(e,n,a){a=a!=null?a.concat([e]):null,_l(4,4,Qp.bind(null,n,e),a)}function Iu(){}function $p(e,n){var a=an();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&Au(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function em(e,n){var a=an();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&Au(n,o[1]))return o[0];if(o=e(),os){Be(!0);try{e()}finally{Be(!1)}}return a.memoizedState=[o,n],o}function Bu(e,n,a){return a===void 0||(Hi&1073741824)!==0&&(St&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=tg(),ht.lanes|=e,Ma|=e,a)}function tm(e,n,a,o){return qn(a,n)?a:Vs.current!==null?(e=Bu(e,a,o),qn(e,n)||(cn=!0),e):(Hi&42)===0||(Hi&1073741824)!==0&&(St&261930)===0?(cn=!0,e.memoizedState=a):(e=tg(),ht.lanes|=e,Ma|=e,n)}function nm(e,n,a,o,u){var f=ee.p;ee.p=f!==0&&8>f?f:8;var S=z.T,A={};z.T=A,ku(e,!1,n,a);try{var H=u(),ne=z.S;if(ne!==null&&ne(A,H),H!==null&&typeof H=="object"&&typeof H.then=="function"){var me=a_(H,o);so(e,n,me,$n(e))}else so(e,n,o,$n(e))}catch(ye){so(e,n,{then:function(){},status:"rejected",reason:ye},$n())}finally{ee.p=f,S!==null&&A.types!==null&&(S.types=A.types),z.T=S}}function u_(){}function Fu(e,n,a,o){if(e.tag!==5)throw Error(s(476));var u=im(e).queue;nm(e,u,n,J,a===null?u_:function(){return am(e),a(o)})}function im(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:J,baseState:J,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ki,lastRenderedState:J},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ki,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function am(e){var n=im(e);n.next===null&&(n=e.alternate.memoizedState),so(e,n.next.queue,{},$n())}function Hu(){return En(Mo)}function sm(){return an().memoizedState}function rm(){return an().memoizedState}function f_(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=$n();e=xa(a);var o=va(n,e,a);o!==null&&(Vn(o,n,a),eo(o,n,a)),n={cache:mu()},e.payload=n;return}n=n.return}}function d_(e,n,a){var o=$n();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},yl(e)?lm(n,a):(a=au(e,n,a,o),a!==null&&(Vn(a,e,o),cm(a,n,o)))}function om(e,n,a){var o=$n();so(e,n,a,o)}function so(e,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(yl(e))lm(n,u);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var S=n.lastRenderedState,A=f(S,a);if(u.hasEagerState=!0,u.eagerState=A,qn(A,S))return el(e,n,u,0),Xt===null&&$o(),!1}catch{}finally{}if(a=au(e,n,u,o),a!==null)return Vn(a,e,o),cm(a,n,o),!0}return!1}function ku(e,n,a,o){if(o={lane:2,revertLane:yf(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},yl(e)){if(n)throw Error(s(479))}else n=au(e,a,o,2),n!==null&&Vn(n,e,2)}function yl(e){var n=e.alternate;return e===ht||n!==null&&n===ht}function lm(e,n){js=hl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function cm(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Pr(e,a)}}var ro={readContext:En,use:gl,useCallback:en,useContext:en,useEffect:en,useImperativeHandle:en,useLayoutEffect:en,useInsertionEffect:en,useMemo:en,useReducer:en,useRef:en,useState:en,useDebugValue:en,useDeferredValue:en,useTransition:en,useSyncExternalStore:en,useId:en,useHostTransitionStatus:en,useFormState:en,useActionState:en,useOptimistic:en,useMemoCache:en,useCacheRefresh:en};ro.useEffectEvent=en;var um={readContext:En,use:gl,useCallback:function(e,n){return Ln().memoizedState=[e,n===void 0?null:n],e},useContext:En,useEffect:qp,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,vl(4194308,4,Qp.bind(null,n,e),a)},useLayoutEffect:function(e,n){return vl(4194308,4,e,n)},useInsertionEffect:function(e,n){vl(4,2,e,n)},useMemo:function(e,n){var a=Ln();n=n===void 0?null:n;var o=e();if(os){Be(!0);try{e()}finally{Be(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=Ln();if(a!==void 0){var u=a(n);if(os){Be(!0);try{a(n)}finally{Be(!1)}}}else u=n;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=d_.bind(null,ht,e),[o.memoizedState,e]},useRef:function(e){var n=Ln();return e={current:e},n.memoizedState=e},useState:function(e){e=Ou(e);var n=e.queue,a=om.bind(null,ht,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:Iu,useDeferredValue:function(e,n){var a=Ln();return Bu(a,e,n)},useTransition:function(){var e=Ou(!1);return e=nm.bind(null,ht,e.queue,!0,!1),Ln().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=ht,u=Ln();if(Tt){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Xt===null)throw Error(s(349));(St&127)!==0||Dp(o,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,qp(Lp.bind(null,o,f,e),[e]),o.flags|=2048,Ws(9,{destroy:void 0},Up.bind(null,o,f,a,n),null),a},useId:function(){var e=Ln(),n=Xt.identifierPrefix;if(Tt){var a=Ci,o=wi;a=(o&~(1<<32-rt(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=pl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=s_++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:Hu,useFormState:Gp,useActionState:Gp,useOptimistic:function(e){var n=Ln();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=ku.bind(null,ht,!0,a),a.dispatch=n,[e,n]},useMemoCache:Du,useCacheRefresh:function(){return Ln().memoizedState=f_.bind(null,ht)},useEffectEvent:function(e){var n=Ln(),a={impl:e};return n.memoizedState=a,function(){if((zt&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},Gu={readContext:En,use:gl,useCallback:$p,useContext:En,useEffect:zu,useImperativeHandle:Jp,useInsertionEffect:Zp,useLayoutEffect:Kp,useMemo:em,useReducer:xl,useRef:Wp,useState:function(){return xl(ki)},useDebugValue:Iu,useDeferredValue:function(e,n){var a=an();return tm(a,kt.memoizedState,e,n)},useTransition:function(){var e=xl(ki)[0],n=an().memoizedState;return[typeof e=="boolean"?e:ao(e),n]},useSyncExternalStore:Np,useId:sm,useHostTransitionStatus:Hu,useFormState:Vp,useActionState:Vp,useOptimistic:function(e,n){var a=an();return zp(a,kt,e,n)},useMemoCache:Du,useCacheRefresh:rm};Gu.useEffectEvent=Yp;var fm={readContext:En,use:gl,useCallback:$p,useContext:En,useEffect:zu,useImperativeHandle:Jp,useInsertionEffect:Zp,useLayoutEffect:Kp,useMemo:em,useReducer:Lu,useRef:Wp,useState:function(){return Lu(ki)},useDebugValue:Iu,useDeferredValue:function(e,n){var a=an();return kt===null?Bu(a,e,n):tm(a,kt.memoizedState,e,n)},useTransition:function(){var e=Lu(ki)[0],n=an().memoizedState;return[typeof e=="boolean"?e:ao(e),n]},useSyncExternalStore:Np,useId:sm,useHostTransitionStatus:Hu,useFormState:Xp,useActionState:Xp,useOptimistic:function(e,n){var a=an();return kt!==null?zp(a,kt,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Du,useCacheRefresh:rm};fm.useEffectEvent=Yp;function Vu(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:x({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var ju={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=$n(),u=xa(o);u.payload=n,a!=null&&(u.callback=a),n=va(e,u,o),n!==null&&(Vn(n,e,o),eo(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=$n(),u=xa(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=va(e,u,o),n!==null&&(Vn(n,e,o),eo(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=$n(),o=xa(a);o.tag=2,n!=null&&(o.callback=n),n=va(e,o,a),n!==null&&(Vn(n,e,a),eo(n,e,a))}};function dm(e,n,a,o,u,f,S){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,f,S):n.prototype&&n.prototype.isPureReactComponent?!Wr(a,o)||!Wr(u,f):!0}function hm(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&ju.enqueueReplaceState(n,n.state,null)}function ls(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=x({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function pm(e){Jo(e)}function mm(e){console.error(e)}function gm(e){Jo(e)}function Sl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function xm(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Xu(e,n,a){return a=xa(a),a.tag=3,a.payload={element:null},a.callback=function(){Sl(e,n)},a}function vm(e){return e=xa(e),e.tag=3,e}function _m(e,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=o.value;e.payload=function(){return u(f)},e.callback=function(){xm(n,a,o)}}var S=a.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(e.callback=function(){xm(n,a,o),typeof u!="function"&&(Ea===null?Ea=new Set([this]):Ea.add(this));var A=o.stack;this.componentDidCatch(o.value,{componentStack:A!==null?A:""})})}function h_(e,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&Bs(n,a,u,!0),a=Zn.current,a!==null){switch(a.tag){case 31:case 13:return oi===null?Ll():a.alternate===null&&tn===0&&(tn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===ll?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),xf(e,o,u)),!1;case 22:return a.flags|=65536,o===ll?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),xf(e,o,u)),!1}throw Error(s(435,a.tag))}return xf(e,o,u),Ll(),!1}if(Tt)return n=Zn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==uu&&(e=Error(s(422),{cause:o}),Zr(ii(e,a)))):(o!==uu&&(n=Error(s(423),{cause:o}),Zr(ii(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=ii(o,a),u=Xu(e.stateNode,o,u),Su(e,u),tn!==4&&(tn=2)),!1;var f=Error(s(520),{cause:o});if(f=ii(f,a),mo===null?mo=[f]:mo.push(f),tn!==4&&(tn=2),n===null)return!0;o=ii(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=Xu(a.stateNode,o,e),Su(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Ea===null||!Ea.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=vm(u),_m(u,e,a,o),Su(a,u),!1}a=a.return}while(a!==null);return!1}var Wu=Error(s(461)),cn=!1;function Tn(e,n,a,o){n.child=e===null?Mp(n,null,a,o):rs(n,e.child,a,o)}function ym(e,n,a,o,u){a=a.render;var f=n.ref;if("ref"in o){var S={};for(var A in o)A!=="ref"&&(S[A]=o[A])}else S=o;return ns(n),o=wu(e,n,a,S,f,u),A=Cu(),e!==null&&!cn?(Ru(e,n,u),Gi(e,n,u)):(Tt&&A&&lu(n),n.flags|=1,Tn(e,n,o,u),n.child)}function Sm(e,n,a,o,u){if(e===null){var f=a.type;return typeof f=="function"&&!su(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,bm(e,n,f,o,u)):(e=nl(a.type,null,o,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!ef(e,u)){var S=f.memoizedProps;if(a=a.compare,a=a!==null?a:Wr,a(S,o)&&e.ref===n.ref)return Gi(e,n,u)}return n.flags|=1,e=zi(f,o),e.ref=n.ref,e.return=n,n.child=e}function bm(e,n,a,o,u){if(e!==null){var f=e.memoizedProps;if(Wr(f,o)&&e.ref===n.ref)if(cn=!1,n.pendingProps=o=f,ef(e,u))(e.flags&131072)!==0&&(cn=!0);else return n.lanes=e.lanes,Gi(e,n,u)}return qu(e,n,a,o,u)}function Mm(e,n,a,o){var u=o.children,f=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,e!==null){for(o=n.child=e.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~f}else o=0,n.child=null;return Em(e,n,f,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&rl(n,f!==null?f.cachePool:null),f!==null?Ap(n,f):Mu(),wp(n);else return o=n.lanes=536870912,Em(e,n,f!==null?f.baseLanes|a:a,a,o)}else f!==null?(rl(n,f.cachePool),Ap(n,f),ya(),n.memoizedState=null):(e!==null&&rl(n,null),Mu(),ya());return Tn(e,n,u,a),n.child}function oo(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Em(e,n,a,o,u){var f=xu();return f=f===null?null:{parent:on._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},e!==null&&rl(n,null),Mu(),wp(n),e!==null&&Bs(e,n,o,!0),n.childLanes=u,null}function bl(e,n){return n=El({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function Tm(e,n,a){return rs(n,e.child,null,a),e=bl(n,n.pendingProps),e.flags|=2,Kn(n),n.memoizedState=null,e}function p_(e,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Tt){if(o.mode==="hidden")return e=bl(n,o),n.lanes=536870912,oo(null,e);if(Tu(n),(e=Yt)?(e=Ig(e,ri),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:da!==null?{id:wi,overflow:Ci}:null,retryLane:536870912,hydrationErrors:null},a=lp(e),a.return=n,n.child=a,Mn=n,Yt=null)):e=null,e===null)throw pa(n);return n.lanes=536870912,null}return bl(n,o)}var f=e.memoizedState;if(f!==null){var S=f.dehydrated;if(Tu(n),u)if(n.flags&256)n.flags&=-257,n=Tm(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if(cn||Bs(e,n,a,!1),u=(a&e.childLanes)!==0,cn||u){if(o=Xt,o!==null&&(S=Ai(o,a),S!==0&&S!==f.retryLane))throw f.retryLane=S,Ja(e,S),Vn(o,e,S),Wu;Ll(),n=Tm(e,n,a)}else e=f.treeContext,Yt=li(S.nextSibling),Mn=n,Tt=!0,ha=null,ri=!1,e!==null&&fp(n,e),n=bl(n,o),n.flags|=4096;return n}return e=zi(e.child,{mode:o.mode,children:o.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Ml(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function qu(e,n,a,o,u){return ns(n),a=wu(e,n,a,o,void 0,u),o=Cu(),e!==null&&!cn?(Ru(e,n,u),Gi(e,n,u)):(Tt&&o&&lu(n),n.flags|=1,Tn(e,n,a,u),n.child)}function Am(e,n,a,o,u,f){return ns(n),n.updateQueue=null,a=Rp(n,o,a,u),Cp(e),o=Cu(),e!==null&&!cn?(Ru(e,n,f),Gi(e,n,f)):(Tt&&o&&lu(n),n.flags|=1,Tn(e,n,a,f),n.child)}function wm(e,n,a,o,u){if(ns(n),n.stateNode===null){var f=Os,S=a.contextType;typeof S=="object"&&S!==null&&(f=En(S)),f=new a(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=ju,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},_u(n),S=a.contextType,f.context=typeof S=="object"&&S!==null?En(S):Os,f.state=n.memoizedState,S=a.getDerivedStateFromProps,typeof S=="function"&&(Vu(n,a,S,o),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(S=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),S!==f.state&&ju.enqueueReplaceState(f,f.state,null),no(n,o,f,u),to(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){f=n.stateNode;var A=n.memoizedProps,H=ls(a,A);f.props=H;var ne=f.context,me=a.contextType;S=Os,typeof me=="object"&&me!==null&&(S=En(me));var ye=a.getDerivedStateFromProps;me=typeof ye=="function"||typeof f.getSnapshotBeforeUpdate=="function",A=n.pendingProps!==A,me||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(A||ne!==S)&&hm(n,f,o,S),ga=!1;var ae=n.memoizedState;f.state=ae,no(n,o,f,u),to(),ne=n.memoizedState,A||ae!==ne||ga?(typeof ye=="function"&&(Vu(n,a,ye,o),ne=n.memoizedState),(H=ga||dm(n,a,H,o,ae,ne,S))?(me||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=ne),f.props=o,f.state=ne,f.context=S,o=H):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,yu(e,n),S=n.memoizedProps,me=ls(a,S),f.props=me,ye=n.pendingProps,ae=f.context,ne=a.contextType,H=Os,typeof ne=="object"&&ne!==null&&(H=En(ne)),A=a.getDerivedStateFromProps,(ne=typeof A=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(S!==ye||ae!==H)&&hm(n,f,o,H),ga=!1,ae=n.memoizedState,f.state=ae,no(n,o,f,u),to();var ue=n.memoizedState;S!==ye||ae!==ue||ga||e!==null&&e.dependencies!==null&&al(e.dependencies)?(typeof A=="function"&&(Vu(n,a,A,o),ue=n.memoizedState),(me=ga||dm(n,a,me,o,ae,ue,H)||e!==null&&e.dependencies!==null&&al(e.dependencies))?(ne||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,ue,H),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,ue,H)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||S===e.memoizedProps&&ae===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&ae===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=ue),f.props=o,f.state=ue,f.context=H,o=me):(typeof f.componentDidUpdate!="function"||S===e.memoizedProps&&ae===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&ae===e.memoizedState||(n.flags|=1024),o=!1)}return f=o,Ml(e,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&o?(n.child=rs(n,e.child,null,u),n.child=rs(n,null,a,u)):Tn(e,n,a,u),n.memoizedState=f.state,e=n.child):e=Gi(e,n,u),e}function Cm(e,n,a,o){return es(),n.flags|=256,Tn(e,n,a,o),n.child}var Yu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Zu(e){return{baseLanes:e,cachePool:xp()}}function Ku(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=Jn),e}function Rm(e,n,a){var o=n.pendingProps,u=!1,f=(n.flags&128)!==0,S;if((S=f)||(S=e!==null&&e.memoizedState===null?!1:(nn.current&2)!==0),S&&(u=!0,n.flags&=-129),S=(n.flags&32)!==0,n.flags&=-33,e===null){if(Tt){if(u?_a(n):ya(),(e=Yt)?(e=Ig(e,ri),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:da!==null?{id:wi,overflow:Ci}:null,retryLane:536870912,hydrationErrors:null},a=lp(e),a.return=n,n.child=a,Mn=n,Yt=null)):e=null,e===null)throw pa(n);return Lf(e)?n.lanes=32:n.lanes=536870912,null}var A=o.children;return o=o.fallback,u?(ya(),u=n.mode,A=El({mode:"hidden",children:A},u),o=$a(o,u,a,null),A.return=n,o.return=n,A.sibling=o,n.child=A,o=n.child,o.memoizedState=Zu(a),o.childLanes=Ku(e,S,a),n.memoizedState=Yu,oo(null,o)):(_a(n),Qu(n,A))}var H=e.memoizedState;if(H!==null&&(A=H.dehydrated,A!==null)){if(f)n.flags&256?(_a(n),n.flags&=-257,n=Ju(e,n,a)):n.memoizedState!==null?(ya(),n.child=e.child,n.flags|=128,n=null):(ya(),A=o.fallback,u=n.mode,o=El({mode:"visible",children:o.children},u),A=$a(A,u,a,null),A.flags|=2,o.return=n,A.return=n,o.sibling=A,n.child=o,rs(n,e.child,null,a),o=n.child,o.memoizedState=Zu(a),o.childLanes=Ku(e,S,a),n.memoizedState=Yu,n=oo(null,o));else if(_a(n),Lf(A)){if(S=A.nextSibling&&A.nextSibling.dataset,S)var ne=S.dgst;S=ne,o=Error(s(419)),o.stack="",o.digest=S,Zr({value:o,source:null,stack:null}),n=Ju(e,n,a)}else if(cn||Bs(e,n,a,!1),S=(a&e.childLanes)!==0,cn||S){if(S=Xt,S!==null&&(o=Ai(S,a),o!==0&&o!==H.retryLane))throw H.retryLane=o,Ja(e,o),Vn(S,e,o),Wu;Uf(A)||Ll(),n=Ju(e,n,a)}else Uf(A)?(n.flags|=192,n.child=e.child,n=null):(e=H.treeContext,Yt=li(A.nextSibling),Mn=n,Tt=!0,ha=null,ri=!1,e!==null&&fp(n,e),n=Qu(n,o.children),n.flags|=4096);return n}return u?(ya(),A=o.fallback,u=n.mode,H=e.child,ne=H.sibling,o=zi(H,{mode:"hidden",children:o.children}),o.subtreeFlags=H.subtreeFlags&65011712,ne!==null?A=zi(ne,A):(A=$a(A,u,a,null),A.flags|=2),A.return=n,o.return=n,o.sibling=A,n.child=o,oo(null,o),o=n.child,A=e.child.memoizedState,A===null?A=Zu(a):(u=A.cachePool,u!==null?(H=on._currentValue,u=u.parent!==H?{parent:H,pool:H}:u):u=xp(),A={baseLanes:A.baseLanes|a,cachePool:u}),o.memoizedState=A,o.childLanes=Ku(e,S,a),n.memoizedState=Yu,oo(e.child,o)):(_a(n),a=e.child,e=a.sibling,a=zi(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(S=n.deletions,S===null?(n.deletions=[e],n.flags|=16):S.push(e)),n.child=a,n.memoizedState=null,a)}function Qu(e,n){return n=El({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function El(e,n){return e=Yn(22,e,null,n),e.lanes=0,e}function Ju(e,n,a){return rs(n,e.child,null,a),e=Qu(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Nm(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),hu(e.return,n,a)}function $u(e,n,a,o,u,f){var S=e.memoizedState;S===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:f}:(S.isBackwards=n,S.rendering=null,S.renderingStartTime=0,S.last=o,S.tail=a,S.tailMode=u,S.treeForkCount=f)}function Dm(e,n,a){var o=n.pendingProps,u=o.revealOrder,f=o.tail;o=o.children;var S=nn.current,A=(S&2)!==0;if(A?(S=S&1|2,n.flags|=128):S&=1,ce(nn,S),Tn(e,n,o,a),o=Tt?Yr:0,!A&&e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Nm(e,a,n);else if(e.tag===19)Nm(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&dl(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),$u(n,!1,u,a,f,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&dl(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}$u(n,!0,a,null,f,o);break;case"together":$u(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function Gi(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Ma|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Bs(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=zi(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=zi(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function ef(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&al(e)))}function m_(e,n,a){switch(n.tag){case 3:Te(n,n.stateNode.containerInfo),ma(n,on,e.memoizedState.cache),es();break;case 27:case 5:Ue(n);break;case 4:Te(n,n.stateNode.containerInfo);break;case 10:ma(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Tu(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(_a(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Rm(e,n,a):(_a(n),e=Gi(e,n,a),e!==null?e.sibling:null);_a(n);break;case 19:var u=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(Bs(e,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return Dm(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),ce(nn,nn.current),o)break;return null;case 22:return n.lanes=0,Mm(e,n,a,n.pendingProps);case 24:ma(n,on,e.memoizedState.cache)}return Gi(e,n,a)}function Um(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)cn=!0;else{if(!ef(e,a)&&(n.flags&128)===0)return cn=!1,m_(e,n,a);cn=(e.flags&131072)!==0}else cn=!1,Tt&&(n.flags&1048576)!==0&&up(n,Yr,n.index);switch(n.lanes=0,n.tag){case 16:e:{var o=n.pendingProps;if(e=as(n.elementType),n.type=e,typeof e=="function")su(e)?(o=ls(e,o),n.tag=1,n=wm(null,n,e,o,a)):(n.tag=0,n=qu(null,n,e,o,a));else{if(e!=null){var u=e.$$typeof;if(u===D){n.tag=11,n=ym(null,n,e,o,a);break e}else if(u===I){n.tag=14,n=Sm(null,n,e,o,a);break e}}throw n=ge(e)||e,Error(s(306,n,""))}}return n;case 0:return qu(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=ls(o,n.pendingProps),wm(e,n,o,u,a);case 3:e:{if(Te(n,n.stateNode.containerInfo),e===null)throw Error(s(387));o=n.pendingProps;var f=n.memoizedState;u=f.element,yu(e,n),no(n,o,null,a);var S=n.memoizedState;if(o=S.cache,ma(n,on,o),o!==f.cache&&pu(n,[on],a,!0),to(),o=S.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:S.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Cm(e,n,o,a);break e}else if(o!==u){u=ii(Error(s(424)),n),Zr(u),n=Cm(e,n,o,a);break e}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Yt=li(e.firstChild),Mn=n,Tt=!0,ha=null,ri=!0,a=Mp(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(es(),o===u){n=Gi(e,n,a);break e}Tn(e,n,o,a)}n=n.child}return n;case 26:return Ml(e,n),e===null?(a=Vg(n.type,null,n.pendingProps,null))?n.memoizedState=a:Tt||(a=n.type,e=n.pendingProps,o=Hl(de.current).createElement(a),o[Jt]=n,o[Sn]=e,An(o,a,e),q(o),n.stateNode=o):n.memoizedState=Vg(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Ue(n),e===null&&Tt&&(o=n.stateNode=Hg(n.type,n.pendingProps,de.current),Mn=n,ri=!0,u=Yt,Ca(n.type)?(Of=u,Yt=li(o.firstChild)):Yt=u),Tn(e,n,n.pendingProps.children,a),Ml(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Tt&&((u=o=Yt)&&(o=X_(o,n.type,n.pendingProps,ri),o!==null?(n.stateNode=o,Mn=n,Yt=li(o.firstChild),ri=!1,u=!0):u=!1),u||pa(n)),Ue(n),u=n.type,f=n.pendingProps,S=e!==null?e.memoizedProps:null,o=f.children,Rf(u,f)?o=null:S!==null&&Rf(u,S)&&(n.flags|=32),n.memoizedState!==null&&(u=wu(e,n,r_,null,null,a),Mo._currentValue=u),Ml(e,n),Tn(e,n,o,a),n.child;case 6:return e===null&&Tt&&((e=a=Yt)&&(a=W_(a,n.pendingProps,ri),a!==null?(n.stateNode=a,Mn=n,Yt=null,e=!0):e=!1),e||pa(n)),null;case 13:return Rm(e,n,a);case 4:return Te(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=rs(n,null,o,a):Tn(e,n,o,a),n.child;case 11:return ym(e,n,n.type,n.pendingProps,a);case 7:return Tn(e,n,n.pendingProps,a),n.child;case 8:return Tn(e,n,n.pendingProps.children,a),n.child;case 12:return Tn(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,ma(n,n.type,o.value),Tn(e,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,ns(n),u=En(u),o=o(u),n.flags|=1,Tn(e,n,o,a),n.child;case 14:return Sm(e,n,n.type,n.pendingProps,a);case 15:return bm(e,n,n.type,n.pendingProps,a);case 19:return Dm(e,n,a);case 31:return p_(e,n,a);case 22:return Mm(e,n,a,n.pendingProps);case 24:return ns(n),o=En(on),e===null?(u=xu(),u===null&&(u=Xt,f=mu(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:o,cache:u},_u(n),ma(n,on,u)):((e.lanes&a)!==0&&(yu(e,n),no(n,null,null,a),to()),u=e.memoizedState,f=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),ma(n,on,o)):(o=f.cache,ma(n,on,o),o!==u.cache&&pu(n,[on],a,!0))),Tn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function Vi(e){e.flags|=4}function tf(e,n,a,o,u){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(sg())e.flags|=8192;else throw ss=ll,vu}else e.flags&=-16777217}function Lm(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Yg(n))if(sg())e.flags|=8192;else throw ss=ll,vu}function Tl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?dn():536870912,e.lanes|=n,Ks|=n)}function lo(e,n){if(!Tt)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Zt(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function g_(e,n,a){var o=n.pendingProps;switch(cu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Zt(n),null;case 1:return Zt(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),Fi(on),Ce(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Is(n)?Vi(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,fu())),Zt(n),null;case 26:var u=n.type,f=n.memoizedState;return e===null?(Vi(n),f!==null?(Zt(n),Lm(n,f)):(Zt(n),tf(n,u,null,o,a))):f?f!==e.memoizedState?(Vi(n),Zt(n),Lm(n,f)):(Zt(n),n.flags&=-16777217):(e=e.memoizedProps,e!==o&&Vi(n),Zt(n),tf(n,u,e,o,a)),null;case 27:if(tt(n),a=de.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&Vi(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Zt(n),null}e=G.current,Is(n)?dp(n):(e=Hg(u,o,a),n.stateNode=e,Vi(n))}return Zt(n),null;case 5:if(tt(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&Vi(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Zt(n),null}if(f=G.current,Is(n))dp(n);else{var S=Hl(de.current);switch(f){case 1:f=S.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=S.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=S.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=S.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=S.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof o.is=="string"?S.createElement("select",{is:o.is}):S.createElement("select"),o.multiple?f.multiple=!0:o.size&&(f.size=o.size);break;default:f=typeof o.is=="string"?S.createElement(u,{is:o.is}):S.createElement(u)}}f[Jt]=n,f[Sn]=o;e:for(S=n.child;S!==null;){if(S.tag===5||S.tag===6)f.appendChild(S.stateNode);else if(S.tag!==4&&S.tag!==27&&S.child!==null){S.child.return=S,S=S.child;continue}if(S===n)break e;for(;S.sibling===null;){if(S.return===null||S.return===n)break e;S=S.return}S.sibling.return=S.return,S=S.sibling}n.stateNode=f;e:switch(An(f,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&Vi(n)}}return Zt(n),tf(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&Vi(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(e=de.current,Is(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,u=Mn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[Jt]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||Rg(e.nodeValue,a)),e||pa(n,!0)}else e=Hl(e).createTextNode(o),e[Jt]=n,n.stateNode=e}return Zt(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(o=Is(n),a!==null){if(e===null){if(!o)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[Jt]=n}else es(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Zt(n),e=!1}else a=fu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(Kn(n),n):(Kn(n),null);if((n.flags&128)!==0)throw Error(s(558))}return Zt(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=Is(n),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[Jt]=n}else es(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Zt(n),u=!1}else u=fu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(Kn(n),n):(Kn(n),null)}return Kn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,e=e!==null&&e.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),f=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==u&&(o.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),Tl(n,n.updateQueue),Zt(n),null);case 4:return Ce(),e===null&&Ef(n.stateNode.containerInfo),Zt(n),null;case 10:return Fi(n.type),Zt(n),null;case 19:if(j(nn),o=n.memoizedState,o===null)return Zt(n),null;if(u=(n.flags&128)!==0,f=o.rendering,f===null)if(u)lo(o,!1);else{if(tn!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=dl(e),f!==null){for(n.flags|=128,lo(o,!1),e=f.updateQueue,n.updateQueue=e,Tl(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)op(a,e),a=a.sibling;return ce(nn,nn.current&1|2),Tt&&Ii(n,o.treeForkCount),n.child}e=e.sibling}o.tail!==null&&xe()>Nl&&(n.flags|=128,u=!0,lo(o,!1),n.lanes=4194304)}else{if(!u)if(e=dl(f),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,Tl(n,e),lo(o,!0),o.tail===null&&o.tailMode==="hidden"&&!f.alternate&&!Tt)return Zt(n),null}else 2*xe()-o.renderingStartTime>Nl&&a!==536870912&&(n.flags|=128,u=!0,lo(o,!1),n.lanes=4194304);o.isBackwards?(f.sibling=n.child,n.child=f):(e=o.last,e!==null?e.sibling=f:n.child=f,o.last=f)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=xe(),e.sibling=null,a=nn.current,ce(nn,u?a&1|2:a&1),Tt&&Ii(n,o.treeForkCount),e):(Zt(n),null);case 22:case 23:return Kn(n),Eu(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(Zt(n),n.subtreeFlags&6&&(n.flags|=8192)):Zt(n),a=n.updateQueue,a!==null&&Tl(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&j(is),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Fi(on),Zt(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function x_(e,n){switch(cu(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Fi(on),Ce(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return tt(n),null;case 31:if(n.memoizedState!==null){if(Kn(n),n.alternate===null)throw Error(s(340));es()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(Kn(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));es()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return j(nn),null;case 4:return Ce(),null;case 10:return Fi(n.type),null;case 22:case 23:return Kn(n),Eu(),e!==null&&j(is),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Fi(on),null;case 25:return null;default:return null}}function Om(e,n){switch(cu(n),n.tag){case 3:Fi(on),Ce();break;case 26:case 27:case 5:tt(n);break;case 4:Ce();break;case 31:n.memoizedState!==null&&Kn(n);break;case 13:Kn(n);break;case 19:j(nn);break;case 10:Fi(n.type);break;case 22:case 23:Kn(n),Eu(),e!==null&&j(is);break;case 24:Fi(on)}}function co(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&e)===e){o=void 0;var f=a.create,S=a.inst;o=f(),S.destroy=o}a=a.next}while(a!==u)}}catch(A){Bt(n,n.return,A)}}function Sa(e,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&e)===e){var S=o.inst,A=S.destroy;if(A!==void 0){S.destroy=void 0,u=n;var H=a,ne=A;try{ne()}catch(me){Bt(u,H,me)}}}o=o.next}while(o!==f)}}catch(me){Bt(n,n.return,me)}}function Pm(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{Tp(n,a)}catch(o){Bt(e,e.return,o)}}}function zm(e,n,a){a.props=ls(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){Bt(e,n,o)}}function uo(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(u){Bt(e,n,u)}}function Ri(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){Bt(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Bt(e,n,u)}else a.current=null}function Im(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){Bt(e,e.return,u)}}function nf(e,n,a){try{var o=e.stateNode;F_(o,e.type,a,n),o[Sn]=n}catch(u){Bt(e,e.return,u)}}function Bm(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ca(e.type)||e.tag===4}function af(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Bm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ca(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function sf(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Oi));else if(o!==4&&(o===27&&Ca(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(sf(e,n,a),e=e.sibling;e!==null;)sf(e,n,a),e=e.sibling}function Al(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&Ca(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Al(e,n,a),e=e.sibling;e!==null;)Al(e,n,a),e=e.sibling}function Fm(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);An(n,o,a),n[Jt]=e,n[Sn]=a}catch(f){Bt(e,e.return,f)}}var ji=!1,un=!1,rf=!1,Hm=typeof WeakSet=="function"?WeakSet:Set,vn=null;function v_(e,n){if(e=e.containerInfo,wf=ql,e=Jh(e),Jc(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break e}var S=0,A=-1,H=-1,ne=0,me=0,ye=e,ae=null;t:for(;;){for(var ue;ye!==a||u!==0&&ye.nodeType!==3||(A=S+u),ye!==f||o!==0&&ye.nodeType!==3||(H=S+o),ye.nodeType===3&&(S+=ye.nodeValue.length),(ue=ye.firstChild)!==null;)ae=ye,ye=ue;for(;;){if(ye===e)break t;if(ae===a&&++ne===u&&(A=S),ae===f&&++me===o&&(H=S),(ue=ye.nextSibling)!==null)break;ye=ae,ae=ye.parentNode}ye=ue}a=A===-1||H===-1?null:{start:A,end:H}}else a=null}a=a||{start:0,end:0}}else a=null;for(Cf={focusedElem:e,selectionRange:a},ql=!1,vn=n;vn!==null;)if(n=vn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,vn=e;else for(;vn!==null;){switch(n=vn,f=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)u=e[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,o=a.stateNode;try{var Xe=ls(a.type,u);e=o.getSnapshotBeforeUpdate(Xe,f),o.__reactInternalSnapshotBeforeUpdate=e}catch(nt){Bt(a,a.return,nt)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)Df(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Df(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,vn=e;break}vn=n.return}}function km(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:Wi(e,a),o&4&&co(5,a);break;case 1:if(Wi(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(S){Bt(a,a.return,S)}else{var u=ls(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(S){Bt(a,a.return,S)}}o&64&&Pm(a),o&512&&uo(a,a.return);break;case 3:if(Wi(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Tp(e,n)}catch(S){Bt(a,a.return,S)}}break;case 27:n===null&&o&4&&Fm(a);case 26:case 5:Wi(e,a),n===null&&o&4&&Im(a),o&512&&uo(a,a.return);break;case 12:Wi(e,a);break;case 31:Wi(e,a),o&4&&jm(e,a);break;case 13:Wi(e,a),o&4&&Xm(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=w_.bind(null,a),q_(e,a))));break;case 22:if(o=a.memoizedState!==null||ji,!o){n=n!==null&&n.memoizedState!==null||un,u=ji;var f=un;ji=o,(un=n)&&!f?qi(e,a,(a.subtreeFlags&8772)!==0):Wi(e,a),ji=u,un=f}break;case 30:break;default:Wi(e,a)}}function Gm(e){var n=e.alternate;n!==null&&(e.alternate=null,Gm(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Br(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Qt=null,Fn=!1;function Xi(e,n,a){for(a=a.child;a!==null;)Vm(e,n,a),a=a.sibling}function Vm(e,n,a){if(Ze&&typeof Ze.onCommitFiberUnmount=="function")try{Ze.onCommitFiberUnmount(Ke,a)}catch{}switch(a.tag){case 26:un||Ri(a,n),Xi(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:un||Ri(a,n);var o=Qt,u=Fn;Ca(a.type)&&(Qt=a.stateNode,Fn=!1),Xi(e,n,a),yo(a.stateNode),Qt=o,Fn=u;break;case 5:un||Ri(a,n);case 6:if(o=Qt,u=Fn,Qt=null,Xi(e,n,a),Qt=o,Fn=u,Qt!==null)if(Fn)try{(Qt.nodeType===9?Qt.body:Qt.nodeName==="HTML"?Qt.ownerDocument.body:Qt).removeChild(a.stateNode)}catch(f){Bt(a,n,f)}else try{Qt.removeChild(a.stateNode)}catch(f){Bt(a,n,f)}break;case 18:Qt!==null&&(Fn?(e=Qt,Pg(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),ar(e)):Pg(Qt,a.stateNode));break;case 4:o=Qt,u=Fn,Qt=a.stateNode.containerInfo,Fn=!0,Xi(e,n,a),Qt=o,Fn=u;break;case 0:case 11:case 14:case 15:Sa(2,a,n),un||Sa(4,a,n),Xi(e,n,a);break;case 1:un||(Ri(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&zm(a,n,o)),Xi(e,n,a);break;case 21:Xi(e,n,a);break;case 22:un=(o=un)||a.memoizedState!==null,Xi(e,n,a),un=o;break;default:Xi(e,n,a)}}function jm(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{ar(e)}catch(a){Bt(n,n.return,a)}}}function Xm(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{ar(e)}catch(a){Bt(n,n.return,a)}}function __(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Hm),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Hm),n;default:throw Error(s(435,e.tag))}}function wl(e,n){var a=__(e);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=C_.bind(null,e,o);o.then(u,u)}})}function Hn(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],f=e,S=n,A=S;e:for(;A!==null;){switch(A.tag){case 27:if(Ca(A.type)){Qt=A.stateNode,Fn=!1;break e}break;case 5:Qt=A.stateNode,Fn=!1;break e;case 3:case 4:Qt=A.stateNode.containerInfo,Fn=!0;break e}A=A.return}if(Qt===null)throw Error(s(160));Vm(f,S,u),Qt=null,Fn=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Wm(n,e),n=n.sibling}var vi=null;function Wm(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Hn(n,e),kn(e),o&4&&(Sa(3,e,e.return),co(3,e),Sa(5,e,e.return));break;case 1:Hn(n,e),kn(e),o&512&&(un||a===null||Ri(a,a.return)),o&64&&ji&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=vi;if(Hn(n,e),kn(e),o&512&&(un||a===null||Ri(a,a.return)),o&4){var f=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){e:{o=e.type,a=e.memoizedProps,u=u.ownerDocument||u;t:switch(o){case"title":f=u.getElementsByTagName("title")[0],(!f||f[Ya]||f[Jt]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(o),u.head.insertBefore(f,u.querySelector("head > title"))),An(f,o,a),f[Jt]=e,q(f),o=f;break e;case"link":var S=Wg("link","href",u).get(o+(a.href||""));if(S){for(var A=0;A<S.length;A++)if(f=S[A],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){S.splice(A,1);break t}}f=u.createElement(o),An(f,o,a),u.head.appendChild(f);break;case"meta":if(S=Wg("meta","content",u).get(o+(a.content||""))){for(A=0;A<S.length;A++)if(f=S[A],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){S.splice(A,1);break t}}f=u.createElement(o),An(f,o,a),u.head.appendChild(f);break;default:throw Error(s(468,o))}f[Jt]=e,q(f),o=f}e.stateNode=o}else qg(u,e.type,e.stateNode);else e.stateNode=Xg(u,o,e.memoizedProps);else f!==o?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,o===null?qg(u,e.type,e.stateNode):Xg(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&nf(e,e.memoizedProps,a.memoizedProps)}break;case 27:Hn(n,e),kn(e),o&512&&(un||a===null||Ri(a,a.return)),a!==null&&o&4&&nf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Hn(n,e),kn(e),o&512&&(un||a===null||Ri(a,a.return)),e.flags&32){u=e.stateNode;try{In(u,"")}catch(Xe){Bt(e,e.return,Xe)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,nf(e,u,a!==null?a.memoizedProps:u)),o&1024&&(rf=!0);break;case 6:if(Hn(n,e),kn(e),o&4){if(e.stateNode===null)throw Error(s(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(Xe){Bt(e,e.return,Xe)}}break;case 3:if(Vl=null,u=vi,vi=kl(n.containerInfo),Hn(n,e),vi=u,kn(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{ar(n.containerInfo)}catch(Xe){Bt(e,e.return,Xe)}rf&&(rf=!1,qm(e));break;case 4:o=vi,vi=kl(e.stateNode.containerInfo),Hn(n,e),kn(e),vi=o;break;case 12:Hn(n,e),kn(e);break;case 31:Hn(n,e),kn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,wl(e,o)));break;case 13:Hn(n,e),kn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Rl=xe()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,wl(e,o)));break;case 22:u=e.memoizedState!==null;var H=a!==null&&a.memoizedState!==null,ne=ji,me=un;if(ji=ne||u,un=me||H,Hn(n,e),un=me,ji=ne,kn(e),o&8192)e:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||H||ji||un||cs(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){H=a=n;try{if(f=H.stateNode,u)S=f.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none";else{A=H.stateNode;var ye=H.memoizedProps.style,ae=ye!=null&&ye.hasOwnProperty("display")?ye.display:null;A.style.display=ae==null||typeof ae=="boolean"?"":(""+ae).trim()}}catch(Xe){Bt(H,H.return,Xe)}}}else if(n.tag===6){if(a===null){H=n;try{H.stateNode.nodeValue=u?"":H.memoizedProps}catch(Xe){Bt(H,H.return,Xe)}}}else if(n.tag===18){if(a===null){H=n;try{var ue=H.stateNode;u?zg(ue,!0):zg(H.stateNode,!1)}catch(Xe){Bt(H,H.return,Xe)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,wl(e,a))));break;case 19:Hn(n,e),kn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,wl(e,o)));break;case 30:break;case 21:break;default:Hn(n,e),kn(e)}}function kn(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(Bm(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,f=af(e);Al(e,f,u);break;case 5:var S=a.stateNode;a.flags&32&&(In(S,""),a.flags&=-33);var A=af(e);Al(e,A,S);break;case 3:case 4:var H=a.stateNode.containerInfo,ne=af(e);sf(e,ne,H);break;default:throw Error(s(161))}}catch(me){Bt(e,e.return,me)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function qm(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;qm(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function Wi(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)km(e,n.alternate,n),n=n.sibling}function cs(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Sa(4,n,n.return),cs(n);break;case 1:Ri(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&zm(n,n.return,a),cs(n);break;case 27:yo(n.stateNode);case 26:case 5:Ri(n,n.return),cs(n);break;case 22:n.memoizedState===null&&cs(n);break;case 30:cs(n);break;default:cs(n)}e=e.sibling}}function qi(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=e,f=n,S=f.flags;switch(f.tag){case 0:case 11:case 15:qi(u,f,a),co(4,f);break;case 1:if(qi(u,f,a),o=f,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(ne){Bt(o,o.return,ne)}if(o=f,u=o.updateQueue,u!==null){var A=o.stateNode;try{var H=u.shared.hiddenCallbacks;if(H!==null)for(u.shared.hiddenCallbacks=null,u=0;u<H.length;u++)Ep(H[u],A)}catch(ne){Bt(o,o.return,ne)}}a&&S&64&&Pm(f),uo(f,f.return);break;case 27:Fm(f);case 26:case 5:qi(u,f,a),a&&o===null&&S&4&&Im(f),uo(f,f.return);break;case 12:qi(u,f,a);break;case 31:qi(u,f,a),a&&S&4&&jm(u,f);break;case 13:qi(u,f,a),a&&S&4&&Xm(u,f);break;case 22:f.memoizedState===null&&qi(u,f,a),uo(f,f.return);break;case 30:break;default:qi(u,f,a)}n=n.sibling}}function of(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Kr(a))}function lf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Kr(e))}function _i(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Ym(e,n,a,o),n=n.sibling}function Ym(e,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:_i(e,n,a,o),u&2048&&co(9,n);break;case 1:_i(e,n,a,o);break;case 3:_i(e,n,a,o),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Kr(e)));break;case 12:if(u&2048){_i(e,n,a,o),e=n.stateNode;try{var f=n.memoizedProps,S=f.id,A=f.onPostCommit;typeof A=="function"&&A(S,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(H){Bt(n,n.return,H)}}else _i(e,n,a,o);break;case 31:_i(e,n,a,o);break;case 13:_i(e,n,a,o);break;case 23:break;case 22:f=n.stateNode,S=n.alternate,n.memoizedState!==null?f._visibility&2?_i(e,n,a,o):fo(e,n):f._visibility&2?_i(e,n,a,o):(f._visibility|=2,qs(e,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&of(S,n);break;case 24:_i(e,n,a,o),u&2048&&lf(n.alternate,n);break;default:_i(e,n,a,o)}}function qs(e,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=e,S=n,A=a,H=o,ne=S.flags;switch(S.tag){case 0:case 11:case 15:qs(f,S,A,H,u),co(8,S);break;case 23:break;case 22:var me=S.stateNode;S.memoizedState!==null?me._visibility&2?qs(f,S,A,H,u):fo(f,S):(me._visibility|=2,qs(f,S,A,H,u)),u&&ne&2048&&of(S.alternate,S);break;case 24:qs(f,S,A,H,u),u&&ne&2048&&lf(S.alternate,S);break;default:qs(f,S,A,H,u)}n=n.sibling}}function fo(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,u=o.flags;switch(o.tag){case 22:fo(a,o),u&2048&&of(o.alternate,o);break;case 24:fo(a,o),u&2048&&lf(o.alternate,o);break;default:fo(a,o)}n=n.sibling}}var ho=8192;function Ys(e,n,a){if(e.subtreeFlags&ho)for(e=e.child;e!==null;)Zm(e,n,a),e=e.sibling}function Zm(e,n,a){switch(e.tag){case 26:Ys(e,n,a),e.flags&ho&&e.memoizedState!==null&&sy(a,vi,e.memoizedState,e.memoizedProps);break;case 5:Ys(e,n,a);break;case 3:case 4:var o=vi;vi=kl(e.stateNode.containerInfo),Ys(e,n,a),vi=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=ho,ho=16777216,Ys(e,n,a),ho=o):Ys(e,n,a));break;default:Ys(e,n,a)}}function Km(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function po(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];vn=o,Jm(o,e)}Km(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Qm(e),e=e.sibling}function Qm(e){switch(e.tag){case 0:case 11:case 15:po(e),e.flags&2048&&Sa(9,e,e.return);break;case 3:po(e);break;case 12:po(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Cl(e)):po(e);break;default:po(e)}}function Cl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];vn=o,Jm(o,e)}Km(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Sa(8,n,n.return),Cl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Cl(n));break;default:Cl(n)}e=e.sibling}}function Jm(e,n){for(;vn!==null;){var a=vn;switch(a.tag){case 0:case 11:case 15:Sa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:Kr(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,vn=o;else e:for(a=e;vn!==null;){o=vn;var u=o.sibling,f=o.return;if(Gm(o),o===a){vn=null;break e}if(u!==null){u.return=f,vn=u;break e}vn=f}}}var y_={getCacheForType:function(e){var n=En(on),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return En(on).controller.signal}},S_=typeof WeakMap=="function"?WeakMap:Map,zt=0,Xt=null,_t=null,St=0,It=0,Qn=null,ba=!1,Zs=!1,cf=!1,Yi=0,tn=0,Ma=0,us=0,uf=0,Jn=0,Ks=0,mo=null,Gn=null,ff=!1,Rl=0,$m=0,Nl=1/0,Dl=null,Ea=null,pn=0,Ta=null,Qs=null,Zi=0,df=0,hf=null,eg=null,go=0,pf=null;function $n(){return(zt&2)!==0&&St!==0?St&-St:z.T!==null?yf():zr()}function tg(){if(Jn===0)if((St&536870912)===0||Tt){var e=pe;pe<<=1,(pe&3932160)===0&&(pe=262144),Jn=e}else Jn=536870912;return e=Zn.current,e!==null&&(e.flags|=32),Jn}function Vn(e,n,a){(e===Xt&&(It===2||It===9)||e.cancelPendingCommit!==null)&&(Js(e,0),Aa(e,St,Jn,!1)),yn(e,a),((zt&2)===0||e!==Xt)&&(e===Xt&&((zt&2)===0&&(us|=a),tn===4&&Aa(e,St,Jn,!1)),Ni(e))}function ng(e,n,a){if((zt&6)!==0)throw Error(s(327));var o=!a&&(n&127)===0&&(n&e.expiredLanes)===0||ot(e,n),u=o?E_(e,n):gf(e,n,!0),f=o;do{if(u===0){Zs&&!o&&Aa(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!b_(a)){u=gf(e,n,!1),f=!1;continue}if(u===2){if(f=n,e.errorRecoveryDisabledLanes&f)var S=0;else S=e.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){n=S;e:{var A=e;u=mo;var H=A.current.memoizedState.isDehydrated;if(H&&(Js(A,S).flags|=256),S=gf(A,S,!1),S!==2){if(cf&&!H){A.errorRecoveryDisabledLanes|=f,us|=f,u=4;break e}f=Gn,Gn=u,f!==null&&(Gn===null?Gn=f:Gn.push.apply(Gn,f))}u=S}if(f=!1,u!==2)continue}}if(u===1){Js(e,0),Aa(e,n,0,!0);break}e:{switch(o=e,f=u,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Aa(o,n,Jn,!ba);break e;case 2:Gn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=Rl+300-xe(),10<u)){if(Aa(o,n,Jn,!ba),Le(o,0,!0)!==0)break e;Zi=n,o.timeoutHandle=Lg(ig.bind(null,o,a,Gn,Dl,ff,n,Jn,us,Ks,ba,f,"Throttled",-0,0),u);break e}ig(o,a,Gn,Dl,ff,n,Jn,us,Ks,ba,f,null,-0,0)}}break}while(!0);Ni(e)}function ig(e,n,a,o,u,f,S,A,H,ne,me,ye,ae,ue){if(e.timeoutHandle=-1,ye=n.subtreeFlags,ye&8192||(ye&16785408)===16785408){ye={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Oi},Zm(n,f,ye);var Xe=(f&62914560)===f?Rl-xe():(f&4194048)===f?$m-xe():0;if(Xe=ry(ye,Xe),Xe!==null){Zi=f,e.cancelPendingCommit=Xe(fg.bind(null,e,n,f,a,o,u,S,A,H,me,ye,null,ae,ue)),Aa(e,f,S,!ne);return}}fg(e,n,f,a,o,u,S,A,H)}function b_(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],f=u.getSnapshot;u=u.value;try{if(!qn(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Aa(e,n,a,o){n&=~uf,n&=~us,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var u=n;0<u;){var f=31-rt(u),S=1<<f;o[f]=-1,u&=~S}a!==0&&Or(e,a,n)}function Ul(){return(zt&6)===0?(xo(0),!1):!0}function mf(){if(_t!==null){if(It===0)var e=_t.return;else e=_t,Bi=ts=null,Nu(e),Gs=null,Jr=0,e=_t;for(;e!==null;)Om(e.alternate,e),e=e.return;_t=null}}function Js(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,G_(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Zi=0,mf(),Xt=e,_t=a=zi(e.current,null),St=n,It=0,Qn=null,ba=!1,Zs=ot(e,n),cf=!1,Ks=Jn=uf=us=Ma=tn=0,Gn=mo=null,ff=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var u=31-rt(o),f=1<<u;n|=e[u],o&=~f}return Yi=n,$o(),a}function ag(e,n){ht=null,z.H=ro,n===ks||n===ol?(n=yp(),It=3):n===vu?(n=yp(),It=4):It=n===Wu?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Qn=n,_t===null&&(tn=1,Sl(e,ii(n,e.current)))}function sg(){var e=Zn.current;return e===null?!0:(St&4194048)===St?oi===null:(St&62914560)===St||(St&536870912)!==0?e===oi:!1}function rg(){var e=z.H;return z.H=ro,e===null?ro:e}function og(){var e=z.A;return z.A=y_,e}function Ll(){tn=4,ba||(St&4194048)!==St&&Zn.current!==null||(Zs=!0),(Ma&134217727)===0&&(us&134217727)===0||Xt===null||Aa(Xt,St,Jn,!1)}function gf(e,n,a){var o=zt;zt|=2;var u=rg(),f=og();(Xt!==e||St!==n)&&(Dl=null,Js(e,n)),n=!1;var S=tn;e:do try{if(It!==0&&_t!==null){var A=_t,H=Qn;switch(It){case 8:mf(),S=6;break e;case 3:case 2:case 9:case 6:Zn.current===null&&(n=!0);var ne=It;if(It=0,Qn=null,$s(e,A,H,ne),a&&Zs){S=0;break e}break;default:ne=It,It=0,Qn=null,$s(e,A,H,ne)}}M_(),S=tn;break}catch(me){ag(e,me)}while(!0);return n&&e.shellSuspendCounter++,Bi=ts=null,zt=o,z.H=u,z.A=f,_t===null&&(Xt=null,St=0,$o()),S}function M_(){for(;_t!==null;)lg(_t)}function E_(e,n){var a=zt;zt|=2;var o=rg(),u=og();Xt!==e||St!==n?(Dl=null,Nl=xe()+500,Js(e,n)):Zs=ot(e,n);e:do try{if(It!==0&&_t!==null){n=_t;var f=Qn;t:switch(It){case 1:It=0,Qn=null,$s(e,n,f,1);break;case 2:case 9:if(vp(f)){It=0,Qn=null,cg(n);break}n=function(){It!==2&&It!==9||Xt!==e||(It=7),Ni(e)},f.then(n,n);break e;case 3:It=7;break e;case 4:It=5;break e;case 7:vp(f)?(It=0,Qn=null,cg(n)):(It=0,Qn=null,$s(e,n,f,7));break;case 5:var S=null;switch(_t.tag){case 26:S=_t.memoizedState;case 5:case 27:var A=_t;if(S?Yg(S):A.stateNode.complete){It=0,Qn=null;var H=A.sibling;if(H!==null)_t=H;else{var ne=A.return;ne!==null?(_t=ne,Ol(ne)):_t=null}break t}}It=0,Qn=null,$s(e,n,f,5);break;case 6:It=0,Qn=null,$s(e,n,f,6);break;case 8:mf(),tn=6;break e;default:throw Error(s(462))}}T_();break}catch(me){ag(e,me)}while(!0);return Bi=ts=null,z.H=o,z.A=u,zt=a,_t!==null?0:(Xt=null,St=0,$o(),tn)}function T_(){for(;_t!==null&&!w();)lg(_t)}function lg(e){var n=Um(e.alternate,e,Yi);e.memoizedProps=e.pendingProps,n===null?Ol(e):_t=n}function cg(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=Am(a,n,n.pendingProps,n.type,void 0,St);break;case 11:n=Am(a,n,n.pendingProps,n.type.render,n.ref,St);break;case 5:Nu(n);default:Om(a,n),n=_t=op(n,Yi),n=Um(a,n,Yi)}e.memoizedProps=e.pendingProps,n===null?Ol(e):_t=n}function $s(e,n,a,o){Bi=ts=null,Nu(n),Gs=null,Jr=0;var u=n.return;try{if(h_(e,u,n,a,St)){tn=1,Sl(e,ii(a,e.current)),_t=null;return}}catch(f){if(u!==null)throw _t=u,f;tn=1,Sl(e,ii(a,e.current)),_t=null;return}n.flags&32768?(Tt||o===1?e=!0:Zs||(St&536870912)!==0?e=!1:(ba=e=!0,(o===2||o===9||o===3||o===6)&&(o=Zn.current,o!==null&&o.tag===13&&(o.flags|=16384))),ug(n,e)):Ol(n)}function Ol(e){var n=e;do{if((n.flags&32768)!==0){ug(n,ba);return}e=n.return;var a=g_(n.alternate,n,Yi);if(a!==null){_t=a;return}if(n=n.sibling,n!==null){_t=n;return}_t=n=e}while(n!==null);tn===0&&(tn=5)}function ug(e,n){do{var a=x_(e.alternate,e);if(a!==null){a.flags&=32767,_t=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){_t=e;return}_t=e=a}while(e!==null);tn=6,_t=null}function fg(e,n,a,o,u,f,S,A,H){e.cancelPendingCommit=null;do Pl();while(pn!==0);if((zt&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=iu,pi(e,a,f,S,A,H),e===Xt&&(_t=Xt=null,St=0),Qs=n,Ta=e,Zi=a,df=f,hf=u,eg=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,R_(Re,function(){return gg(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=z.T,z.T=null,u=ee.p,ee.p=2,S=zt,zt|=4;try{v_(e,n,a)}finally{zt=S,ee.p=u,z.T=o}}pn=1,dg(),hg(),pg()}}function dg(){if(pn===1){pn=0;var e=Ta,n=Qs,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=z.T,z.T=null;var o=ee.p;ee.p=2;var u=zt;zt|=4;try{Wm(n,e);var f=Cf,S=Jh(e.containerInfo),A=f.focusedElem,H=f.selectionRange;if(S!==A&&A&&A.ownerDocument&&Qh(A.ownerDocument.documentElement,A)){if(H!==null&&Jc(A)){var ne=H.start,me=H.end;if(me===void 0&&(me=ne),"selectionStart"in A)A.selectionStart=ne,A.selectionEnd=Math.min(me,A.value.length);else{var ye=A.ownerDocument||document,ae=ye&&ye.defaultView||window;if(ae.getSelection){var ue=ae.getSelection(),Xe=A.textContent.length,nt=Math.min(H.start,Xe),Vt=H.end===void 0?nt:Math.min(H.end,Xe);!ue.extend&&nt>Vt&&(S=Vt,Vt=nt,nt=S);var K=Kh(A,nt),X=Kh(A,Vt);if(K&&X&&(ue.rangeCount!==1||ue.anchorNode!==K.node||ue.anchorOffset!==K.offset||ue.focusNode!==X.node||ue.focusOffset!==X.offset)){var te=ye.createRange();te.setStart(K.node,K.offset),ue.removeAllRanges(),nt>Vt?(ue.addRange(te),ue.extend(X.node,X.offset)):(te.setEnd(X.node,X.offset),ue.addRange(te))}}}}for(ye=[],ue=A;ue=ue.parentNode;)ue.nodeType===1&&ye.push({element:ue,left:ue.scrollLeft,top:ue.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<ye.length;A++){var ve=ye[A];ve.element.scrollLeft=ve.left,ve.element.scrollTop=ve.top}}ql=!!wf,Cf=wf=null}finally{zt=u,ee.p=o,z.T=a}}e.current=n,pn=2}}function hg(){if(pn===2){pn=0;var e=Ta,n=Qs,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=z.T,z.T=null;var o=ee.p;ee.p=2;var u=zt;zt|=4;try{km(e,n.alternate,n)}finally{zt=u,ee.p=o,z.T=a}}pn=3}}function pg(){if(pn===4||pn===3){pn=0,ie();var e=Ta,n=Qs,a=Zi,o=eg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?pn=5:(pn=0,Qs=Ta=null,mg(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(Ea=null),As(a),n=n.stateNode,Ze&&typeof Ze.onCommitFiberRoot=="function")try{Ze.onCommitFiberRoot(Ke,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=z.T,u=ee.p,ee.p=2,z.T=null;try{for(var f=e.onRecoverableError,S=0;S<o.length;S++){var A=o[S];f(A.value,{componentStack:A.stack})}}finally{z.T=n,ee.p=u}}(Zi&3)!==0&&Pl(),Ni(e),u=e.pendingLanes,(a&261930)!==0&&(u&42)!==0?e===pf?go++:(go=0,pf=e):go=0,xo(0)}}function mg(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Kr(n)))}function Pl(){return dg(),hg(),pg(),gg()}function gg(){if(pn!==5)return!1;var e=Ta,n=df;df=0;var a=As(Zi),o=z.T,u=ee.p;try{ee.p=32>a?32:a,z.T=null,a=hf,hf=null;var f=Ta,S=Zi;if(pn=0,Qs=Ta=null,Zi=0,(zt&6)!==0)throw Error(s(331));var A=zt;if(zt|=4,Qm(f.current),Ym(f,f.current,S,a),zt=A,xo(0,!1),Ze&&typeof Ze.onPostCommitFiberRoot=="function")try{Ze.onPostCommitFiberRoot(Ke,f)}catch{}return!0}finally{ee.p=u,z.T=o,mg(e,n)}}function xg(e,n,a){n=ii(a,n),n=Xu(e.stateNode,n,2),e=va(e,n,2),e!==null&&(yn(e,2),Ni(e))}function Bt(e,n,a){if(e.tag===3)xg(e,e,a);else for(;n!==null;){if(n.tag===3){xg(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Ea===null||!Ea.has(o))){e=ii(a,e),a=vm(2),o=va(n,a,2),o!==null&&(_m(a,o,n,e),yn(o,2),Ni(o));break}}n=n.return}}function xf(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new S_;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(cf=!0,u.add(a),e=A_.bind(null,e,n,a),n.then(e,e))}function A_(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Xt===e&&(St&a)===a&&(tn===4||tn===3&&(St&62914560)===St&&300>xe()-Rl?(zt&2)===0&&Js(e,0):uf|=a,Ks===St&&(Ks=0)),Ni(e)}function vg(e,n){n===0&&(n=dn()),e=Ja(e,n),e!==null&&(yn(e,n),Ni(e))}function w_(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),vg(e,a)}function C_(e,n){var a=0;switch(e.tag){case 31:case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),vg(e,a)}function R_(e,n){return He(e,n)}var zl=null,er=null,vf=!1,Il=!1,_f=!1,wa=0;function Ni(e){e!==er&&e.next===null&&(er===null?zl=er=e:er=er.next=e),Il=!0,vf||(vf=!0,D_())}function xo(e,n){if(!_f&&Il){_f=!0;do for(var a=!1,o=zl;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var f=0;else{var S=o.suspendedLanes,A=o.pingedLanes;f=(1<<31-rt(42|e)+1)-1,f&=u&~(S&~A),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,bg(o,f))}else f=St,f=Le(o,o===Xt?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||ot(o,f)||(a=!0,bg(o,f));o=o.next}while(a);_f=!1}}function N_(){_g()}function _g(){Il=vf=!1;var e=0;wa!==0&&k_()&&(e=wa);for(var n=xe(),a=null,o=zl;o!==null;){var u=o.next,f=yg(o,n);f===0?(o.next=null,a===null?zl=u:a.next=u,u===null&&(er=a)):(a=o,(e!==0||(f&3)!==0)&&(Il=!0)),o=u}pn!==0&&pn!==5||xo(e),wa!==0&&(wa=0)}function yg(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var S=31-rt(f),A=1<<S,H=u[S];H===-1?((A&a)===0||(A&o)!==0)&&(u[S]=Kt(A,n)):H<=n&&(e.expiredLanes|=A),f&=~A}if(n=Xt,a=St,a=Le(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(It===2||It===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&L(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||ot(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&L(o),As(a)){case 2:case 8:a=qe;break;case 32:a=Re;break;case 268435456:a=xt;break;default:a=Re}return o=Sg.bind(null,e),a=He(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&L(o),e.callbackPriority=2,e.callbackNode=null,2}function Sg(e,n){if(pn!==0&&pn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Pl()&&e.callbackNode!==a)return null;var o=St;return o=Le(e,e===Xt?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(ng(e,o,n),yg(e,xe()),e.callbackNode!=null&&e.callbackNode===a?Sg.bind(null,e):null)}function bg(e,n){if(Pl())return null;ng(e,n,!0)}function D_(){V_(function(){(zt&6)!==0?He(_e,N_):_g()})}function yf(){if(wa===0){var e=Fs;e===0&&(e=Ne,Ne<<=1,(Ne&261888)===0&&(Ne=256)),wa=e}return wa}function Mg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Xo(""+e)}function Eg(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function U_(e,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var f=Mg((u[Sn]||null).action),S=o.submitter;S&&(n=(n=S[Sn]||null)?Mg(n.formAction):S.getAttribute("formAction"),n!==null&&(f=n,S=null));var A=new Zo("action","action",null,o,u);e.push({event:A,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(wa!==0){var H=S?Eg(u,S):new FormData(u);Fu(a,{pending:!0,data:H,method:u.method,action:f},null,H)}}else typeof f=="function"&&(A.preventDefault(),H=S?Eg(u,S):new FormData(u),Fu(a,{pending:!0,data:H,method:u.method,action:f},f,H))},currentTarget:u}]})}}for(var Sf=0;Sf<nu.length;Sf++){var bf=nu[Sf],L_=bf.toLowerCase(),O_=bf[0].toUpperCase()+bf.slice(1);xi(L_,"on"+O_)}xi(tp,"onAnimationEnd"),xi(np,"onAnimationIteration"),xi(ip,"onAnimationStart"),xi("dblclick","onDoubleClick"),xi("focusin","onFocus"),xi("focusout","onBlur"),xi(Kv,"onTransitionRun"),xi(Qv,"onTransitionStart"),xi(Jv,"onTransitionCancel"),xi(ap,"onTransitionEnd"),Fe("onMouseEnter",["mouseout","mouseover"]),Fe("onMouseLeave",["mouseout","mouseover"]),Fe("onPointerEnter",["pointerout","pointerover"]),Fe("onPointerLeave",["pointerout","pointerover"]),Ie("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ie("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ie("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ie("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ie("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ie("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var vo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),P_=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(vo));function Tg(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],u=o.event;o=o.listeners;e:{var f=void 0;if(n)for(var S=o.length-1;0<=S;S--){var A=o[S],H=A.instance,ne=A.currentTarget;if(A=A.listener,H!==f&&u.isPropagationStopped())break e;f=A,u.currentTarget=ne;try{f(u)}catch(me){Jo(me)}u.currentTarget=null,f=H}else for(S=0;S<o.length;S++){if(A=o[S],H=A.instance,ne=A.currentTarget,A=A.listener,H!==f&&u.isPropagationStopped())break e;f=A,u.currentTarget=ne;try{f(u)}catch(me){Jo(me)}u.currentTarget=null,f=H}}}}function yt(e,n){var a=n[Ir];a===void 0&&(a=n[Ir]=new Set);var o=e+"__bubble";a.has(o)||(Ag(n,e,2,!1),a.add(o))}function Mf(e,n,a){var o=0;n&&(o|=4),Ag(a,e,o,n)}var Bl="_reactListening"+Math.random().toString(36).slice(2);function Ef(e){if(!e[Bl]){e[Bl]=!0,Ae.forEach(function(a){a!=="selectionchange"&&(P_.has(a)||Mf(a,!1,e),Mf(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Bl]||(n[Bl]=!0,Mf("selectionchange",!1,n))}}function Ag(e,n,a,o){switch(t0(n)){case 2:var u=cy;break;case 8:u=uy;break;default:u=Ff}a=u.bind(null,n,a,e),u=void 0,!Vc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function Tf(e,n,a,o,u){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var S=o.tag;if(S===3||S===4){var A=o.stateNode.containerInfo;if(A===u)break;if(S===4)for(S=o.return;S!==null;){var H=S.tag;if((H===3||H===4)&&S.stateNode.containerInfo===u)return;S=S.return}for(;A!==null;){if(S=R(A),S===null)return;if(H=S.tag,H===5||H===6||H===26||H===27){o=f=S;continue e}A=A.parentNode}}o=o.return}Dh(function(){var ne=f,me=kc(a),ye=[];e:{var ae=sp.get(e);if(ae!==void 0){var ue=Zo,Xe=e;switch(e){case"keypress":if(qo(a)===0)break e;case"keydown":case"keyup":ue=Cv;break;case"focusin":Xe="focus",ue=qc;break;case"focusout":Xe="blur",ue=qc;break;case"beforeblur":case"afterblur":ue=qc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ue=Oh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ue=gv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ue=Dv;break;case tp:case np:case ip:ue=_v;break;case ap:ue=Lv;break;case"scroll":case"scrollend":ue=pv;break;case"wheel":ue=Pv;break;case"copy":case"cut":case"paste":ue=Sv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ue=zh;break;case"toggle":case"beforetoggle":ue=Iv}var nt=(n&4)!==0,Vt=!nt&&(e==="scroll"||e==="scrollend"),K=nt?ae!==null?ae+"Capture":null:ae;nt=[];for(var X=ne,te;X!==null;){var ve=X;if(te=ve.stateNode,ve=ve.tag,ve!==5&&ve!==26&&ve!==27||te===null||K===null||(ve=Fr(X,K),ve!=null&&nt.push(_o(X,ve,te))),Vt)break;X=X.return}0<nt.length&&(ae=new ue(ae,Xe,null,a,me),ye.push({event:ae,listeners:nt}))}}if((n&7)===0){e:{if(ae=e==="mouseover"||e==="pointerover",ue=e==="mouseout"||e==="pointerout",ae&&a!==Hc&&(Xe=a.relatedTarget||a.fromElement)&&(R(Xe)||Xe[Li]))break e;if((ue||ae)&&(ae=me.window===me?me:(ae=me.ownerDocument)?ae.defaultView||ae.parentWindow:window,ue?(Xe=a.relatedTarget||a.toElement,ue=ne,Xe=Xe?R(Xe):null,Xe!==null&&(Vt=c(Xe),nt=Xe.tag,Xe!==Vt||nt!==5&&nt!==27&&nt!==6)&&(Xe=null)):(ue=null,Xe=ne),ue!==Xe)){if(nt=Oh,ve="onMouseLeave",K="onMouseEnter",X="mouse",(e==="pointerout"||e==="pointerover")&&(nt=zh,ve="onPointerLeave",K="onPointerEnter",X="pointer"),Vt=ue==null?ae:se(ue),te=Xe==null?ae:se(Xe),ae=new nt(ve,X+"leave",ue,a,me),ae.target=Vt,ae.relatedTarget=te,ve=null,R(me)===ne&&(nt=new nt(K,X+"enter",Xe,a,me),nt.target=te,nt.relatedTarget=Vt,ve=nt),Vt=ve,ue&&Xe)t:{for(nt=z_,K=ue,X=Xe,te=0,ve=K;ve;ve=nt(ve))te++;ve=0;for(var $e=X;$e;$e=nt($e))ve++;for(;0<te-ve;)K=nt(K),te--;for(;0<ve-te;)X=nt(X),ve--;for(;te--;){if(K===X||X!==null&&K===X.alternate){nt=K;break t}K=nt(K),X=nt(X)}nt=null}else nt=null;ue!==null&&wg(ye,ae,ue,nt,!1),Xe!==null&&Vt!==null&&wg(ye,Vt,Xe,nt,!0)}}e:{if(ae=ne?se(ne):window,ue=ae.nodeName&&ae.nodeName.toLowerCase(),ue==="select"||ue==="input"&&ae.type==="file")var Dt=jh;else if(Gh(ae))if(Xh)Dt=qv;else{Dt=Xv;var Ye=jv}else ue=ae.nodeName,!ue||ue.toLowerCase()!=="input"||ae.type!=="checkbox"&&ae.type!=="radio"?ne&&Fc(ne.elementType)&&(Dt=jh):Dt=Wv;if(Dt&&(Dt=Dt(e,ne))){Vh(ye,Dt,a,me);break e}Ye&&Ye(e,ae,ne),e==="focusout"&&ne&&ae.type==="number"&&ne.memoizedProps.value!=null&&wn(ae,"number",ae.value)}switch(Ye=ne?se(ne):window,e){case"focusin":(Gh(Ye)||Ye.contentEditable==="true")&&(Ds=Ye,$c=ne,qr=null);break;case"focusout":qr=$c=Ds=null;break;case"mousedown":eu=!0;break;case"contextmenu":case"mouseup":case"dragend":eu=!1,$h(ye,a,me);break;case"selectionchange":if(Zv)break;case"keydown":case"keyup":$h(ye,a,me)}var pt;if(Zc)e:{switch(e){case"compositionstart":var bt="onCompositionStart";break e;case"compositionend":bt="onCompositionEnd";break e;case"compositionupdate":bt="onCompositionUpdate";break e}bt=void 0}else Ns?Hh(e,a)&&(bt="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(bt="onCompositionStart");bt&&(Ih&&a.locale!=="ko"&&(Ns||bt!=="onCompositionStart"?bt==="onCompositionEnd"&&Ns&&(pt=Uh()):(fa=me,jc="value"in fa?fa.value:fa.textContent,Ns=!0)),Ye=Fl(ne,bt),0<Ye.length&&(bt=new Ph(bt,e,null,a,me),ye.push({event:bt,listeners:Ye}),pt?bt.data=pt:(pt=kh(a),pt!==null&&(bt.data=pt)))),(pt=Fv?Hv(e,a):kv(e,a))&&(bt=Fl(ne,"onBeforeInput"),0<bt.length&&(Ye=new Ph("onBeforeInput","beforeinput",null,a,me),ye.push({event:Ye,listeners:bt}),Ye.data=pt)),U_(ye,e,ne,a,me)}Tg(ye,n)})}function _o(e,n,a){return{instance:e,listener:n,currentTarget:a}}function Fl(e,n){for(var a=n+"Capture",o=[];e!==null;){var u=e,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=Fr(e,a),u!=null&&o.unshift(_o(e,u,f)),u=Fr(e,n),u!=null&&o.push(_o(e,u,f))),e.tag===3)return o;e=e.return}return[]}function z_(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function wg(e,n,a,o,u){for(var f=n._reactName,S=[];a!==null&&a!==o;){var A=a,H=A.alternate,ne=A.stateNode;if(A=A.tag,H!==null&&H===o)break;A!==5&&A!==26&&A!==27||ne===null||(H=ne,u?(ne=Fr(a,f),ne!=null&&S.unshift(_o(a,ne,H))):u||(ne=Fr(a,f),ne!=null&&S.push(_o(a,ne,H)))),a=a.return}S.length!==0&&e.push({event:n,listeners:S})}var I_=/\r\n?/g,B_=/\u0000|\uFFFD/g;function Cg(e){return(typeof e=="string"?e:""+e).replace(I_,`
`).replace(B_,"")}function Rg(e,n){return n=Cg(n),Cg(e)===n}function Gt(e,n,a,o,u,f){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||In(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&In(e,""+o);break;case"className":qt(e,"class",o);break;case"tabIndex":qt(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":qt(e,a,o);break;case"style":Rh(e,o,f);break;case"data":if(n!=="object"){qt(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=Xo(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Gt(e,n,"name",u.name,u,null),Gt(e,n,"formEncType",u.formEncType,u,null),Gt(e,n,"formMethod",u.formMethod,u,null),Gt(e,n,"formTarget",u.formTarget,u,null)):(Gt(e,n,"encType",u.encType,u,null),Gt(e,n,"method",u.method,u,null),Gt(e,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=Xo(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=Oi);break;case"onScroll":o!=null&&yt("scroll",e);break;case"onScrollEnd":o!=null&&yt("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=Xo(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":yt("beforetoggle",e),yt("toggle",e),Et(e,"popover",o);break;case"xlinkActuate":Nt(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Nt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Nt(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Nt(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Nt(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Nt(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Nt(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Nt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Nt(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Et(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=dv.get(a)||a,Et(e,a,o))}}function Af(e,n,a,o,u,f){switch(a){case"style":Rh(e,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof o=="string"?In(e,o):(typeof o=="number"||typeof o=="bigint")&&In(e,""+o);break;case"onScroll":o!=null&&yt("scroll",e);break;case"onScrollEnd":o!=null&&yt("scrollend",e);break;case"onClick":o!=null&&(e.onclick=Oi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Oe.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=e[Sn]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,u),typeof o=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,u);break e}a in e?e[a]=o:o===!0?e.setAttribute(a,""):Et(e,a,o)}}}function An(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":yt("error",e),yt("load",e);var o=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var S=a[f];if(S!=null)switch(f){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Gt(e,n,f,S,a,null)}}u&&Gt(e,n,"srcSet",a.srcSet,a,null),o&&Gt(e,n,"src",a.src,a,null);return;case"input":yt("invalid",e);var A=f=S=u=null,H=null,ne=null;for(o in a)if(a.hasOwnProperty(o)){var me=a[o];if(me!=null)switch(o){case"name":u=me;break;case"type":S=me;break;case"checked":H=me;break;case"defaultChecked":ne=me;break;case"value":f=me;break;case"defaultValue":A=me;break;case"children":case"dangerouslySetInnerHTML":if(me!=null)throw Error(s(137,n));break;default:Gt(e,n,o,me,a,null)}}Un(e,f,A,H,ne,S,u,!1);return;case"select":yt("invalid",e),o=S=f=null;for(u in a)if(a.hasOwnProperty(u)&&(A=a[u],A!=null))switch(u){case"value":f=A;break;case"defaultValue":S=A;break;case"multiple":o=A;default:Gt(e,n,u,A,a,null)}n=f,a=S,e.multiple=!!o,n!=null?$t(e,!!o,n,!1):a!=null&&$t(e,!!o,a,!0);return;case"textarea":yt("invalid",e),f=u=o=null;for(S in a)if(a.hasOwnProperty(S)&&(A=a[S],A!=null))switch(S){case"value":o=A;break;case"defaultValue":u=A;break;case"children":f=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(s(91));break;default:Gt(e,n,S,A,a,null)}ws(e,o,u,f);return;case"option":for(H in a)if(a.hasOwnProperty(H)&&(o=a[H],o!=null))switch(H){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Gt(e,n,H,o,a,null)}return;case"dialog":yt("beforetoggle",e),yt("toggle",e),yt("cancel",e),yt("close",e);break;case"iframe":case"object":yt("load",e);break;case"video":case"audio":for(o=0;o<vo.length;o++)yt(vo[o],e);break;case"image":yt("error",e),yt("load",e);break;case"details":yt("toggle",e);break;case"embed":case"source":case"link":yt("error",e),yt("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ne in a)if(a.hasOwnProperty(ne)&&(o=a[ne],o!=null))switch(ne){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Gt(e,n,ne,o,a,null)}return;default:if(Fc(n)){for(me in a)a.hasOwnProperty(me)&&(o=a[me],o!==void 0&&Af(e,n,me,o,a,void 0));return}}for(A in a)a.hasOwnProperty(A)&&(o=a[A],o!=null&&Gt(e,n,A,o,a,null))}function F_(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,S=null,A=null,H=null,ne=null,me=null;for(ue in a){var ye=a[ue];if(a.hasOwnProperty(ue)&&ye!=null)switch(ue){case"checked":break;case"value":break;case"defaultValue":H=ye;default:o.hasOwnProperty(ue)||Gt(e,n,ue,null,o,ye)}}for(var ae in o){var ue=o[ae];if(ye=a[ae],o.hasOwnProperty(ae)&&(ue!=null||ye!=null))switch(ae){case"type":f=ue;break;case"name":u=ue;break;case"checked":ne=ue;break;case"defaultChecked":me=ue;break;case"value":S=ue;break;case"defaultValue":A=ue;break;case"children":case"dangerouslySetInnerHTML":if(ue!=null)throw Error(s(137,n));break;default:ue!==ye&&Gt(e,n,ae,ue,o,ye)}}Ht(e,S,A,H,ne,me,f,u);return;case"select":ue=S=A=ae=null;for(f in a)if(H=a[f],a.hasOwnProperty(f)&&H!=null)switch(f){case"value":break;case"multiple":ue=H;default:o.hasOwnProperty(f)||Gt(e,n,f,null,o,H)}for(u in o)if(f=o[u],H=a[u],o.hasOwnProperty(u)&&(f!=null||H!=null))switch(u){case"value":ae=f;break;case"defaultValue":A=f;break;case"multiple":S=f;default:f!==H&&Gt(e,n,u,f,o,H)}n=A,a=S,o=ue,ae!=null?$t(e,!!a,ae,!1):!!o!=!!a&&(n!=null?$t(e,!!a,n,!0):$t(e,!!a,a?[]:"",!1));return;case"textarea":ue=ae=null;for(A in a)if(u=a[A],a.hasOwnProperty(A)&&u!=null&&!o.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:Gt(e,n,A,null,o,u)}for(S in o)if(u=o[S],f=a[S],o.hasOwnProperty(S)&&(u!=null||f!=null))switch(S){case"value":ae=u;break;case"defaultValue":ue=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==f&&Gt(e,n,S,u,o,f)}bn(e,ae,ue);return;case"option":for(var Xe in a)if(ae=a[Xe],a.hasOwnProperty(Xe)&&ae!=null&&!o.hasOwnProperty(Xe))switch(Xe){case"selected":e.selected=!1;break;default:Gt(e,n,Xe,null,o,ae)}for(H in o)if(ae=o[H],ue=a[H],o.hasOwnProperty(H)&&ae!==ue&&(ae!=null||ue!=null))switch(H){case"selected":e.selected=ae&&typeof ae!="function"&&typeof ae!="symbol";break;default:Gt(e,n,H,ae,o,ue)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var nt in a)ae=a[nt],a.hasOwnProperty(nt)&&ae!=null&&!o.hasOwnProperty(nt)&&Gt(e,n,nt,null,o,ae);for(ne in o)if(ae=o[ne],ue=a[ne],o.hasOwnProperty(ne)&&ae!==ue&&(ae!=null||ue!=null))switch(ne){case"children":case"dangerouslySetInnerHTML":if(ae!=null)throw Error(s(137,n));break;default:Gt(e,n,ne,ae,o,ue)}return;default:if(Fc(n)){for(var Vt in a)ae=a[Vt],a.hasOwnProperty(Vt)&&ae!==void 0&&!o.hasOwnProperty(Vt)&&Af(e,n,Vt,void 0,o,ae);for(me in o)ae=o[me],ue=a[me],!o.hasOwnProperty(me)||ae===ue||ae===void 0&&ue===void 0||Af(e,n,me,ae,o,ue);return}}for(var K in a)ae=a[K],a.hasOwnProperty(K)&&ae!=null&&!o.hasOwnProperty(K)&&Gt(e,n,K,null,o,ae);for(ye in o)ae=o[ye],ue=a[ye],!o.hasOwnProperty(ye)||ae===ue||ae==null&&ue==null||Gt(e,n,ye,ae,o,ue)}function Ng(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function H_(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],f=u.transferSize,S=u.initiatorType,A=u.duration;if(f&&A&&Ng(S)){for(S=0,A=u.responseEnd,o+=1;o<a.length;o++){var H=a[o],ne=H.startTime;if(ne>A)break;var me=H.transferSize,ye=H.initiatorType;me&&Ng(ye)&&(H=H.responseEnd,S+=me*(H<A?1:(A-ne)/(H-ne)))}if(--o,n+=8*(f+S)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var wf=null,Cf=null;function Hl(e){return e.nodeType===9?e:e.ownerDocument}function Dg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Ug(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Rf(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Nf=null;function k_(){var e=window.event;return e&&e.type==="popstate"?e===Nf?!1:(Nf=e,!0):(Nf=null,!1)}var Lg=typeof setTimeout=="function"?setTimeout:void 0,G_=typeof clearTimeout=="function"?clearTimeout:void 0,Og=typeof Promise=="function"?Promise:void 0,V_=typeof queueMicrotask=="function"?queueMicrotask:typeof Og<"u"?function(e){return Og.resolve(null).then(e).catch(j_)}:Lg;function j_(e){setTimeout(function(){throw e})}function Ca(e){return e==="head"}function Pg(e,n){var a=n,o=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){e.removeChild(u),ar(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")yo(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,yo(a);for(var f=a.firstChild;f;){var S=f.nextSibling,A=f.nodeName;f[Ya]||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=S}}else a==="body"&&yo(e.ownerDocument.body);a=u}while(a);ar(n)}function zg(e,n){var a=e;e=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=o}while(a)}function Df(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Df(a),Br(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function X_(e,n,a,o){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[Ya])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=li(e.nextSibling),e===null)break}return null}function W_(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=li(e.nextSibling),e===null))return null;return e}function Ig(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=li(e.nextSibling),e===null))return null;return e}function Uf(e){return e.data==="$?"||e.data==="$~"}function Lf(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function q_(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function li(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var Of=null;function Bg(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return li(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function Fg(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function Hg(e,n,a){switch(n=Hl(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function yo(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Br(e)}var ci=new Map,kg=new Set;function kl(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Ki=ee.d;ee.d={f:Y_,r:Z_,D:K_,C:Q_,L:J_,m:$_,X:ty,S:ey,M:ny};function Y_(){var e=Ki.f(),n=Ul();return e||n}function Z_(e){var n=Z(e);n!==null&&n.tag===5&&n.type==="form"?am(n):Ki.r(e)}var tr=typeof document>"u"?null:document;function Gg(e,n,a){var o=tr;if(o&&typeof n=="string"&&n){var u=xn(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),kg.has(u)||(kg.add(u),e={rel:e,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),An(n,"link",e),q(n),o.head.appendChild(n)))}}function K_(e){Ki.D(e),Gg("dns-prefetch",e,null)}function Q_(e,n){Ki.C(e,n),Gg("preconnect",e,n)}function J_(e,n,a){Ki.L(e,n,a);var o=tr;if(o&&e&&n){var u='link[rel="preload"][as="'+xn(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+xn(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+xn(a.imageSizes)+'"]')):u+='[href="'+xn(e)+'"]';var f=u;switch(n){case"style":f=nr(e);break;case"script":f=ir(e)}ci.has(f)||(e=x({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),ci.set(f,e),o.querySelector(u)!==null||n==="style"&&o.querySelector(So(f))||n==="script"&&o.querySelector(bo(f))||(n=o.createElement("link"),An(n,"link",e),q(n),o.head.appendChild(n)))}}function $_(e,n){Ki.m(e,n);var a=tr;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+xn(o)+'"][href="'+xn(e)+'"]',f=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=ir(e)}if(!ci.has(f)&&(e=x({rel:"modulepreload",href:e},n),ci.set(f,e),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(bo(f)))return}o=a.createElement("link"),An(o,"link",e),q(o),a.head.appendChild(o)}}}function ey(e,n,a){Ki.S(e,n,a);var o=tr;if(o&&e){var u=oe(o).hoistableStyles,f=nr(e);n=n||"default";var S=u.get(f);if(!S){var A={loading:0,preload:null};if(S=o.querySelector(So(f)))A.loading=5;else{e=x({rel:"stylesheet",href:e,"data-precedence":n},a),(a=ci.get(f))&&Pf(e,a);var H=S=o.createElement("link");q(H),An(H,"link",e),H._p=new Promise(function(ne,me){H.onload=ne,H.onerror=me}),H.addEventListener("load",function(){A.loading|=1}),H.addEventListener("error",function(){A.loading|=2}),A.loading|=4,Gl(S,n,o)}S={type:"stylesheet",instance:S,count:1,state:A},u.set(f,S)}}}function ty(e,n){Ki.X(e,n);var a=tr;if(a&&e){var o=oe(a).hoistableScripts,u=ir(e),f=o.get(u);f||(f=a.querySelector(bo(u)),f||(e=x({src:e,async:!0},n),(n=ci.get(u))&&zf(e,n),f=a.createElement("script"),q(f),An(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function ny(e,n){Ki.M(e,n);var a=tr;if(a&&e){var o=oe(a).hoistableScripts,u=ir(e),f=o.get(u);f||(f=a.querySelector(bo(u)),f||(e=x({src:e,async:!0,type:"module"},n),(n=ci.get(u))&&zf(e,n),f=a.createElement("script"),q(f),An(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function Vg(e,n,a,o){var u=(u=de.current)?kl(u):null;if(!u)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=nr(a.href),a=oe(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=nr(a.href);var f=oe(u).hoistableStyles,S=f.get(e);if(S||(u=u.ownerDocument||u,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,S),(f=u.querySelector(So(e)))&&!f._p&&(S.instance=f,S.state.loading=5),ci.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ci.set(e,a),f||iy(u,e,a,S.state))),n&&o===null)throw Error(s(528,""));return S}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=ir(a),a=oe(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function nr(e){return'href="'+xn(e)+'"'}function So(e){return'link[rel="stylesheet"]['+e+"]"}function jg(e){return x({},e,{"data-precedence":e.precedence,precedence:null})}function iy(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),An(n,"link",a),q(n),e.head.appendChild(n))}function ir(e){return'[src="'+xn(e)+'"]'}function bo(e){return"script[async]"+e}function Xg(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+xn(a.href)+'"]');if(o)return n.instance=o,q(o),o;var u=x({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),q(o),An(o,"style",u),Gl(o,a.precedence,e),n.instance=o;case"stylesheet":u=nr(a.href);var f=e.querySelector(So(u));if(f)return n.state.loading|=4,n.instance=f,q(f),f;o=jg(a),(u=ci.get(u))&&Pf(o,u),f=(e.ownerDocument||e).createElement("link"),q(f);var S=f;return S._p=new Promise(function(A,H){S.onload=A,S.onerror=H}),An(f,"link",o),n.state.loading|=4,Gl(f,a.precedence,e),n.instance=f;case"script":return f=ir(a.src),(u=e.querySelector(bo(f)))?(n.instance=u,q(u),u):(o=a,(u=ci.get(f))&&(o=x({},a),zf(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),q(u),An(u,"link",o),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,Gl(o,a.precedence,e));return n.instance}function Gl(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,f=u,S=0;S<o.length;S++){var A=o[S];if(A.dataset.precedence===n)f=A;else if(f!==u)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Pf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function zf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Vl=null;function Wg(e,n,a){if(Vl===null){var o=new Map,u=Vl=new Map;u.set(a,o)}else u=Vl,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var f=a[u];if(!(f[Ya]||f[Jt]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var S=f.getAttribute(n)||"";S=e+S;var A=o.get(S);A?A.push(f):o.set(S,[f])}}return o}function qg(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function ay(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Yg(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function sy(e,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=nr(o.href),f=n.querySelector(So(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=jl.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=f,q(f);return}f=n.ownerDocument||n,o=jg(o),(u=ci.get(u))&&Pf(o,u),f=f.createElement("link"),q(f);var S=f;S._p=new Promise(function(A,H){S.onload=A,S.onerror=H}),An(f,"link",o),a.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=jl.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var If=0;function ry(e,n){return e.stylesheets&&e.count===0&&Wl(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var o=setTimeout(function(){if(e.stylesheets&&Wl(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+n);0<e.imgBytes&&If===0&&(If=62500*H_());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Wl(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>If?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function jl(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Wl(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Xl=null;function Wl(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Xl=new Map,n.forEach(oy,e),Xl=null,jl.call(e))}function oy(e,n){if(!(n.state.loading&4)){var a=Xl.get(e);if(a)var o=a.get(null);else{a=new Map,Xl.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var S=u[f];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(a.set(S.dataset.precedence,S),o=S)}o&&a.set(null,o)}u=n.instance,S=u.getAttribute("data-precedence"),f=a.get(S)||o,f===o&&a.set(null,u),a.set(S,u),this.count++,o=jl.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),f?f.parentNode.insertBefore(u,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var Mo={$$typeof:O,Provider:null,Consumer:null,_currentValue:J,_currentValue2:J,_threadCount:0};function ly(e,n,a,o,u,f,S,A,H){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Rt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Rt(0),this.hiddenUpdates=Rt(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=H,this.incompleteTransitions=new Map}function Zg(e,n,a,o,u,f,S,A,H,ne,me,ye){return e=new ly(e,n,a,S,H,ne,me,ye,A),n=1,f===!0&&(n|=24),f=Yn(3,null,null,n),e.current=f,f.stateNode=e,n=mu(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:n},_u(f),e}function Kg(e){return e?(e=Os,e):Os}function Qg(e,n,a,o,u,f){u=Kg(u),o.context===null?o.context=u:o.pendingContext=u,o=xa(n),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=va(e,o,n),a!==null&&(Vn(a,e,n),eo(a,e,n))}function Jg(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function Bf(e,n){Jg(e,n),(e=e.alternate)&&Jg(e,n)}function $g(e){if(e.tag===13||e.tag===31){var n=Ja(e,67108864);n!==null&&Vn(n,e,67108864),Bf(e,67108864)}}function e0(e){if(e.tag===13||e.tag===31){var n=$n();n=Wa(n);var a=Ja(e,n);a!==null&&Vn(a,e,n),Bf(e,n)}}var ql=!0;function cy(e,n,a,o){var u=z.T;z.T=null;var f=ee.p;try{ee.p=2,Ff(e,n,a,o)}finally{ee.p=f,z.T=u}}function uy(e,n,a,o){var u=z.T;z.T=null;var f=ee.p;try{ee.p=8,Ff(e,n,a,o)}finally{ee.p=f,z.T=u}}function Ff(e,n,a,o){if(ql){var u=Hf(o);if(u===null)Tf(e,n,o,Yl,a),n0(e,o);else if(dy(u,e,n,a,o))o.stopPropagation();else if(n0(e,o),n&4&&-1<fy.indexOf(e)){for(;u!==null;){var f=Z(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var S=De(f.pendingLanes);if(S!==0){var A=f;for(A.pendingLanes|=2,A.entangledLanes|=2;S;){var H=1<<31-rt(S);A.entanglements[1]|=H,S&=~H}Ni(f),(zt&6)===0&&(Nl=xe()+500,xo(0))}}break;case 31:case 13:A=Ja(f,2),A!==null&&Vn(A,f,2),Ul(),Bf(f,2)}if(f=Hf(o),f===null&&Tf(e,n,o,Yl,a),f===u)break;u=f}u!==null&&o.stopPropagation()}else Tf(e,n,o,null,a)}}function Hf(e){return e=kc(e),kf(e)}var Yl=null;function kf(e){if(Yl=null,e=R(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=d(n),e!==null)return e;e=null}else if(a===31){if(e=h(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return Yl=e,null}function t0(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ee()){case _e:return 2;case qe:return 8;case Re:case ke:return 32;case xt:return 268435456;default:return 32}default:return 32}}var Gf=!1,Ra=null,Na=null,Da=null,Eo=new Map,To=new Map,Ua=[],fy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function n0(e,n){switch(e){case"focusin":case"focusout":Ra=null;break;case"dragenter":case"dragleave":Na=null;break;case"mouseover":case"mouseout":Da=null;break;case"pointerover":case"pointerout":Eo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":To.delete(n.pointerId)}}function Ao(e,n,a,o,u,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[u]},n!==null&&(n=Z(n),n!==null&&$g(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function dy(e,n,a,o,u){switch(n){case"focusin":return Ra=Ao(Ra,e,n,a,o,u),!0;case"dragenter":return Na=Ao(Na,e,n,a,o,u),!0;case"mouseover":return Da=Ao(Da,e,n,a,o,u),!0;case"pointerover":var f=u.pointerId;return Eo.set(f,Ao(Eo.get(f)||null,e,n,a,o,u)),!0;case"gotpointercapture":return f=u.pointerId,To.set(f,Ao(To.get(f)||null,e,n,a,o,u)),!0}return!1}function i0(e){var n=R(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){e.blockedOn=n,qa(e.priority,function(){e0(a)});return}}else if(n===31){if(n=h(a),n!==null){e.blockedOn=n,qa(e.priority,function(){e0(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Zl(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=Hf(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);Hc=o,a.target.dispatchEvent(o),Hc=null}else return n=Z(a),n!==null&&$g(n),e.blockedOn=a,!1;n.shift()}return!0}function a0(e,n,a){Zl(e)&&a.delete(n)}function hy(){Gf=!1,Ra!==null&&Zl(Ra)&&(Ra=null),Na!==null&&Zl(Na)&&(Na=null),Da!==null&&Zl(Da)&&(Da=null),Eo.forEach(a0),To.forEach(a0)}function Kl(e,n){e.blockedOn===n&&(e.blockedOn=null,Gf||(Gf=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,hy)))}var Ql=null;function s0(e){Ql!==e&&(Ql=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Ql===e&&(Ql=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],u=e[n+2];if(typeof o!="function"){if(kf(o||a)===null)continue;break}var f=Z(a);f!==null&&(e.splice(n,3),n-=3,Fu(f,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function ar(e){function n(H){return Kl(H,e)}Ra!==null&&Kl(Ra,e),Na!==null&&Kl(Na,e),Da!==null&&Kl(Da,e),Eo.forEach(n),To.forEach(n);for(var a=0;a<Ua.length;a++){var o=Ua[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<Ua.length&&(a=Ua[0],a.blockedOn===null);)i0(a),a.blockedOn===null&&Ua.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],f=a[o+1],S=u[Sn]||null;if(typeof f=="function")S||s0(a);else if(S){var A=null;if(f&&f.hasAttribute("formAction")){if(u=f,S=f[Sn]||null)A=S.formAction;else if(kf(u)!==null)continue}else A=S.action;typeof A=="function"?a[o+1]=A:(a.splice(o,3),o-=3),s0(a)}}}function r0(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(S){return u=S})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function Vf(e){this._internalRoot=e}Jl.prototype.render=Vf.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=$n();Qg(a,o,e,n,null,null)},Jl.prototype.unmount=Vf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Qg(e.current,2,null,e,null,null),Ul(),n[Li]=null}};function Jl(e){this._internalRoot=e}Jl.prototype.unstable_scheduleHydration=function(e){if(e){var n=zr();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Ua.length&&n!==0&&n<Ua[a].priority;a++);Ua.splice(a,0,e),a===0&&i0(e)}};var o0=t.version;if(o0!=="19.2.8")throw Error(s(527,o0,"19.2.8"));ee.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=p(n),e=e!==null?y(e):null,e=e===null?null:e.stateNode,e};var py={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var $l=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!$l.isDisabled&&$l.supportsFiber)try{Ke=$l.inject(py),Ze=$l}catch{}}return Co.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,o="",u=pm,f=mm,S=gm;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(S=n.onRecoverableError)),n=Zg(e,1,!1,null,null,a,o,null,u,f,S,r0),e[Li]=n.current,Ef(e),new Vf(n)},Co.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var o=!1,u="",f=pm,S=mm,A=gm,H=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(S=a.onCaughtError),a.onRecoverableError!==void 0&&(A=a.onRecoverableError),a.formState!==void 0&&(H=a.formState)),n=Zg(e,1,!0,n,a??null,o,u,H,f,S,A,r0),n.context=Kg(null),a=n.current,o=$n(),o=Wa(o),u=xa(o),u.callback=null,va(a,u,o),a=o,n.current.lanes=a,yn(n,a),Ni(n),e[Li]=n.current,Ef(e),new Jl(n)},Co.version="19.2.8",Co}var x0;function Ay(){if(x0)return Wf.exports;x0=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Wf.exports=Ty(),Wf.exports}var wy=Ay(),v0="1.3.26";function Sx(r,t,i){return Math.max(r,Math.min(t,i))}function Cy(r,t,i){return(1-i)*r+i*t}function Ry(r,t,i,s){return Cy(r,t,1-Math.exp(-i*s))}function Ny(r,t){return(r%t+t)%t}var Dy=class{constructor(){We(this,"isRunning",!1);We(this,"value",0);We(this,"from",0);We(this,"to",0);We(this,"currentTime",0);We(this,"lerp");We(this,"duration");We(this,"easing");We(this,"onUpdate")}advance(r){var i;if(!this.isRunning)return;let t=!1;if(this.duration&&this.easing){this.currentTime+=r;const s=Sx(0,this.currentTime/this.duration,1);t=s>=1;const l=t?1:this.easing(s);this.value=this.from+(this.to-this.from)*l}else this.lerp?(this.value=Ry(this.value,this.to,this.lerp*60,r),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,t=!0)):(this.value=this.to,t=!0);t&&this.stop(),(i=this.onUpdate)==null||i.call(this,this.value,t)}stop(){this.isRunning=!1}fromTo(r,t,{lerp:i,duration:s,easing:l,onStart:c,onUpdate:d}){this.from=this.value=r,this.to=t,this.lerp=i,this.duration=s,this.easing=l,this.currentTime=0,this.isRunning=!0,c==null||c(),this.onUpdate=d}};function Uy(r,t){let i;return function(...s){clearTimeout(i),i=setTimeout(()=>{i=void 0,r.apply(this,s)},t)}}var Ly=class{constructor(r,t,{autoResize:i=!0,debounce:s=250}={}){We(this,"width",0);We(this,"height",0);We(this,"scrollHeight",0);We(this,"scrollWidth",0);We(this,"debouncedResize");We(this,"wrapperResizeObserver");We(this,"contentResizeObserver");We(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});We(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});We(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=r,this.content=t,i&&(this.debouncedResize=Uy(this.resize,s),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var r,t;(r=this.wrapperResizeObserver)==null||r.disconnect(),(t=this.contentResizeObserver)==null||t.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},bx=class{constructor(){We(this,"events",{})}emit(r,...t){var s;const i=this.events[r]||[];for(let l=0,c=i.length;l<c;l++)(s=i[l])==null||s.call(i,...t)}on(r,t){return this.events[r]?this.events[r].push(t):this.events[r]=[t],()=>{var i;this.events[r]=(i=this.events[r])==null?void 0:i.filter(s=>t!==s)}}off(r,t){var i;this.events[r]=(i=this.events[r])==null?void 0:i.filter(s=>t!==s)}destroy(){this.events={}}};const Oy=100/6,Oa={passive:!1};function _0(r,t){return r===1?Oy:r===2?t:1}var Py=class{constructor(r,t={wheelMultiplier:1,touchMultiplier:1}){We(this,"touchStart",{x:0,y:0});We(this,"lastDelta",{x:0,y:0});We(this,"window",{width:0,height:0});We(this,"emitter",new bx);We(this,"onTouchStart",r=>{const{clientX:t,clientY:i}=r.targetTouches?r.targetTouches[0]:r;this.touchStart.x=t,this.touchStart.y=i,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:r})});We(this,"onTouchMove",r=>{const{clientX:t,clientY:i}=r.targetTouches?r.targetTouches[0]:r,s=-(t-this.touchStart.x)*this.options.touchMultiplier,l=-(i-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=t,this.touchStart.y=i,this.lastDelta={x:s,y:l},this.emitter.emit("scroll",{deltaX:s,deltaY:l,event:r})});We(this,"onTouchEnd",r=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:r})});We(this,"onWheel",r=>{let{deltaX:t,deltaY:i,deltaMode:s}=r;const l=_0(s,this.window.width),c=_0(s,this.window.height);t*=l,i*=c,t*=this.options.wheelMultiplier,i*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:t,deltaY:i,event:r})});We(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=r,this.options=t,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,Oa),this.element.addEventListener("touchstart",this.onTouchStart,Oa),this.element.addEventListener("touchmove",this.onTouchMove,Oa),this.element.addEventListener("touchend",this.onTouchEnd,Oa)}on(r,t){return this.emitter.on(r,t)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,Oa),this.element.removeEventListener("touchstart",this.onTouchStart,Oa),this.element.removeEventListener("touchmove",this.onTouchMove,Oa),this.element.removeEventListener("touchend",this.onTouchEnd,Oa)}};const y0=r=>Math.min(1,1.001-2**(-10*r));var zy=class{constructor({wrapper:r=window,content:t=document.documentElement,eventsTarget:i=r,smoothWheel:s=!0,syncTouch:l=!1,syncTouchLerp:c=.075,touchInertiaExponent:d=1.7,duration:h,easing:m,lerp:p=.1,infinite:y=!1,orientation:x="vertical",gestureOrientation:v=x==="horizontal"?"both":"vertical",touchMultiplier:M=1,wheelMultiplier:T=1,autoResize:C=!0,prevent:b,virtualScroll:_,overscroll:B=!0,autoRaf:O=!1,anchors:D=!1,autoToggle:W=!1,allowNestedScroll:k=!1,__experimental__naiveDimensions:I=!1,naiveDimensions:Q=I,stopInertiaOnNavigate:U=!1,respectReducedMotion:N=!0}={}){We(this,"_isScrolling",!1);We(this,"_isStopped",!1);We(this,"_isLocked",!1);We(this,"_preventNextNativeScrollEvent",!1);We(this,"_resetVelocityTimeout",null);We(this,"_rafId",null);We(this,"_isDraggingSelection",!1);We(this,"reducedMotionMediaQuery",window.matchMedia("(prefers-reduced-motion: reduce)"));We(this,"isTouching");We(this,"isIos");We(this,"time",0);We(this,"userData",{});We(this,"lastVelocity",0);We(this,"velocity",0);We(this,"direction",0);We(this,"options");We(this,"targetScroll");We(this,"animatedScroll");We(this,"animate",new Dy);We(this,"emitter",new bx);We(this,"dimensions");We(this,"virtualScroll");We(this,"onScrollEnd",r=>{r instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&r.stopPropagation()});We(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});We(this,"onTransitionEnd",r=>{var t;(t=r.propertyName)!=null&&t.includes("overflow")&&r.target===this.rootElement&&this.checkOverflow()});We(this,"onClick",r=>{const t=r.composedPath().filter(s=>s instanceof HTMLAnchorElement&&s.href).map(s=>new URL(s.href)),i=new URL(window.location.href);if(this.options.anchors){const s=t.find(l=>i.host===l.host&&i.pathname===l.pathname&&l.hash);if(s){const l=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,c=decodeURIComponent(s.hash);this.scrollTo(c,l);return}}if(this.options.stopInertiaOnNavigate&&t.some(s=>i.host===s.host&&i.pathname!==s.pathname)){this.reset();return}});We(this,"onPointerDown",r=>{r.button===1&&this.reset()});We(this,"onVirtualScroll",r=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(r)===!1)return;const{deltaX:t,deltaY:i,event:s}=r;if(this.emitter.emit("virtual-scroll",{deltaX:t,deltaY:i,event:s}),s.ctrlKey||s.lenisStopPropagation)return;const l=s.type.includes("touch"),c=s.type.includes("wheel");if(l&&this.isIos&&(s.type==="touchstart"&&(this._isDraggingSelection=this.isTouchOnSelectionHandle(s)),this._isDraggingSelection)){s.type==="touchend"&&(this._isDraggingSelection=!1);return}this.isTouching=s.type==="touchstart"||s.type==="touchmove";const d=t===0&&i===0;if(this.options.syncTouch&&l&&s.type==="touchstart"&&d&&!this.isStopped&&!this.isLocked){this.reset();return}const h=this.options.gestureOrientation==="vertical"&&i===0||this.options.gestureOrientation==="horizontal"&&t===0;if(d||h)return;let m=s.composedPath();m=m.slice(0,m.indexOf(this.rootElement));const p=this.options.prevent,y=Math.abs(t)>=Math.abs(i)?"horizontal":"vertical";if(m.find(T=>{var C,b,_,B,O;return T instanceof HTMLElement&&(typeof p=="function"&&(p==null?void 0:p(T))||((C=T.hasAttribute)==null?void 0:C.call(T,"data-lenis-prevent"))||y==="vertical"&&((b=T.hasAttribute)==null?void 0:b.call(T,"data-lenis-prevent-vertical"))||y==="horizontal"&&((_=T.hasAttribute)==null?void 0:_.call(T,"data-lenis-prevent-horizontal"))||l&&((B=T.hasAttribute)==null?void 0:B.call(T,"data-lenis-prevent-touch"))||c&&((O=T.hasAttribute)==null?void 0:O.call(T,"data-lenis-prevent-wheel"))||this.options.allowNestedScroll&&this.hasNestedScroll(T,{deltaX:t,deltaY:i}))}))return;if(this.isStopped||this.isLocked){s.cancelable&&s.preventDefault();return}if(!(this.options.syncTouch&&l||this.options.smoothWheel&&c)){this.isScrolling="native",this.animate.stop(),s.lenisStopPropagation=!0;return}let x=i;this.options.gestureOrientation==="both"?x=Math.abs(i)>Math.abs(t)?i:t:this.options.gestureOrientation==="horizontal"&&(x=t),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&i>0||this.animatedScroll===this.limit&&i<0))&&(s.lenisStopPropagation=!0),s.cancelable&&s.preventDefault();const v=l&&this.options.syncTouch,M=l&&s.type==="touchend";M&&(x=Math.sign(x)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+x,{programmatic:!1,...v?{lerp:M?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});We(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const r=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-r,this.direction=Math.sign(this.animatedScroll-r),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});We(this,"raf",r=>{const t=r-(this.time||r);this.time=r,this.animate.advance(t*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))});window.lenisVersion=v0,window.lenis||(window.lenis={}),window.lenis.version=v0,x==="horizontal"&&(window.lenis.horizontal=!0),l===!0&&(window.lenis.touch=!0),this.isIos=/(iPad|iPhone|iPod)/g.test(navigator.userAgent),(!r||r===document.documentElement)&&(r=window),typeof h=="number"&&typeof m!="function"?m=y0:typeof m=="function"&&typeof h!="number"&&(h=1),this.options={wrapper:r,content:t,eventsTarget:i,smoothWheel:s,syncTouch:l,syncTouchLerp:c,touchInertiaExponent:d,duration:h,easing:m,lerp:p,infinite:y,gestureOrientation:v,orientation:x,touchMultiplier:M,wheelMultiplier:T,autoResize:C,prevent:b,virtualScroll:_,overscroll:B,autoRaf:O,anchors:D,autoToggle:W,allowNestedScroll:k,naiveDimensions:Q,stopInertiaOnNavigate:U,respectReducedMotion:N},this.dimensions=new Ly(r,t,{autoResize:C}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new Py(i,{touchMultiplier:M,wheelMultiplier:T}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(r,t){return this.emitter.on(r,t)}off(r,t){return this.emitter.off(r,t)}get overflow(){const r=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[r]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}setScroll(r){this.isHorizontal?this.options.wrapper.scrollTo({left:r,behavior:"instant"}):this.options.wrapper.scrollTo({top:r,behavior:"instant"})}isTouchOnSelectionHandle(r){const t=window.getSelection();if(!t||t.isCollapsed||t.rangeCount===0)return!1;const i=r.targetTouches[0]??r.changedTouches[0];if(!i)return!1;const s=t.getRangeAt(0).getClientRects();if(s.length===0)return!1;const l=s[0],c=s[s.length-1],d=40,h=Math.hypot(i.clientX-l.left,i.clientY-l.top)<=d,m=Math.hypot(i.clientX-c.right,i.clientY-c.bottom)<=d;return h||m}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(r,{offset:t=0,immediate:i=!1,lock:s=!1,programmatic:l=!0,lerp:c=l?this.options.lerp:void 0,duration:d=l?this.options.duration:void 0,easing:h=l?this.options.easing:void 0,onStart:m,onComplete:p,force:y=!1,userData:x}={}){if(this.prefersReducedMotion&&(l?i=!0:(c=1,d=void 0,h=void 0)),(this.isStopped||this.isLocked)&&!y)return;let v=r,M=t;if(typeof v=="string"&&["top","left","start","#"].includes(v))v=0;else if(typeof v=="string"&&["bottom","right","end"].includes(v))v=this.limit;else{let T=null;if(typeof v=="string"?(T=v.startsWith("#")?document.getElementById(v.slice(1)):document.querySelector(v),T||(v==="#top"?v=0:console.warn("Lenis: Target not found",v))):v instanceof HTMLElement&&(v!=null&&v.nodeType)&&(T=v),T){if(this.options.wrapper!==window){const D=this.rootElement.getBoundingClientRect();M-=this.isHorizontal?D.left:D.top}const C=T.getBoundingClientRect(),b=getComputedStyle(T),_=this.isHorizontal?Number.parseFloat(b.scrollMarginLeft):Number.parseFloat(b.scrollMarginTop),B=getComputedStyle(this.rootElement),O=this.isHorizontal?Number.parseFloat(B.scrollPaddingLeft):Number.parseFloat(B.scrollPaddingTop);v=(this.isHorizontal?C.left:C.top)+this.animatedScroll-(Number.isNaN(_)?0:_)-(Number.isNaN(O)?0:O)}}if(typeof v=="number"){if(v+=M,this.options.infinite){if(l){this.targetScroll=this.animatedScroll=this.scroll;const T=v-this.animatedScroll;T>this.limit/2?v-=this.limit:T<-this.limit/2&&(v+=this.limit)}}else v=Sx(0,v,this.limit);if(v===this.targetScroll){m==null||m(this),p==null||p(this);return}if(this.userData=x??{},i){this.animatedScroll=this.targetScroll=v,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),p==null||p(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}l||(this.targetScroll=v),typeof d=="number"&&typeof h!="function"?h=y0:typeof h=="function"&&typeof d!="number"&&(d=1),this.animate.fromTo(this.animatedScroll,v,{duration:d,easing:h,lerp:c,onStart:()=>{s&&(this.isLocked=!0),this.isScrolling="smooth",m==null||m(this)},onUpdate:(T,C)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=T-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=T,this.setScroll(this.scroll),l&&(this.targetScroll=T),C||this.emit(),C&&(this.reset(),this.emit(),p==null||p(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(r,{deltaX:t,deltaY:i}){const s=Date.now();r._lenis||(r._lenis={});const l=r._lenis;let c,d,h,m,p,y,x,v,M,T;if(s-(l.time??0)>2e3){l.time=Date.now();const k=window.getComputedStyle(r);if(l.computedStyle=k,c=["auto","overlay","scroll"].includes(k.overflowX),d=["auto","overlay","scroll"].includes(k.overflowY),p=["auto"].includes(k.overscrollBehaviorX),y=["auto"].includes(k.overscrollBehaviorY),l.hasOverflowX=c,l.hasOverflowY=d,!(c||d))return!1;x=r.scrollWidth,v=r.scrollHeight,M=r.clientWidth,T=r.clientHeight,h=x>M,m=v>T,l.isScrollableX=h,l.isScrollableY=m,l.scrollWidth=x,l.scrollHeight=v,l.clientWidth=M,l.clientHeight=T,l.hasOverscrollBehaviorX=p,l.hasOverscrollBehaviorY=y}else h=l.isScrollableX,m=l.isScrollableY,c=l.hasOverflowX,d=l.hasOverflowY,x=l.scrollWidth,v=l.scrollHeight,M=l.clientWidth,T=l.clientHeight,p=l.hasOverscrollBehaviorX,y=l.hasOverscrollBehaviorY;if(!(c&&h||d&&m))return!1;const C=Math.abs(t)>=Math.abs(i)?"horizontal":"vertical";let b,_,B,O,D,W;if(C==="horizontal")b=Math.round(r.scrollLeft),_=x-M,B=t,O=c,D=h,W=p;else if(C==="vertical")b=Math.round(r.scrollTop),_=v-T,B=i,O=d,D=m,W=y;else return!1;return!W&&(b>=_||b<=0)?!0:(B>0?b<_:b>0)&&O&&D}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const r=this.options.wrapper;return this.isHorizontal?r.scrollX??r.scrollLeft:r.scrollY??r.scrollTop}get scroll(){return this.options.infinite?Ny(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(r){this._isScrolling!==r&&(this._isScrolling=r,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(r){this._isStopped!==r&&(this._isStopped=r,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(r){this._isLocked!==r&&(this._isLocked=r,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get prefersReducedMotion(){return this.options.respectReducedMotion&&this.reducedMotionMediaQuery.matches}get className(){let r="lenis";return this.options.autoToggle&&(r+=" lenis-autoToggle"),this.isStopped&&(r+=" lenis-stopped"),this.isLocked&&(r+=" lenis-locked"),this.isScrolling&&(r+=" lenis-scrolling"),this.isScrolling==="smooth"&&(r+=" lenis-smooth"),r}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(r=>{this.rootElement.classList.add(r)})}cleanUpClassName(){for(const r of Array.from(this.rootElement.classList))(r==="lenis"||r.startsWith("lenis-"))&&this.rootElement.classList.remove(r)}};/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const xh="173",Iy=0,S0=1,By=2,Mx=1,Fy=2,na=3,ja=0,Xn=1,ia=2,Ga=0,Sr=1,wd=2,b0=3,M0=4,Hy=5,_s=100,ky=101,Gy=102,Vy=103,jy=104,Xy=200,Wy=201,qy=202,Yy=203,Cd=204,Rd=205,Zy=206,Ky=207,Qy=208,Jy=209,$y=210,eS=211,tS=212,nS=213,iS=214,Nd=0,Dd=1,Ud=2,Tr=3,Ld=4,Od=5,Pd=6,zd=7,Ex=0,aS=1,sS=2,Va=0,rS=1,oS=2,lS=3,cS=4,uS=5,fS=6,dS=7,Tx=300,Ar=301,wr=302,Id=303,Bd=304,Lc=306,Fd=1e3,Ss=1001,Hd=1002,Ti=1003,hS=1004,ec=1005,Ui=1006,Kf=1007,bs=1008,la=1009,Ax=1010,wx=1011,zo=1012,vh=1013,Es=1014,aa=1015,Bo=1016,_h=1017,yh=1018,Cr=1020,Cx=35902,Rx=1021,Nx=1022,Ei=1023,Dx=1024,Ux=1025,br=1026,Rr=1027,Lx=1028,Sh=1029,Ox=1030,bh=1031,Mh=1033,Ec=33776,Tc=33777,Ac=33778,wc=33779,kd=35840,Gd=35841,Vd=35842,jd=35843,Xd=36196,Wd=37492,qd=37496,Yd=37808,Zd=37809,Kd=37810,Qd=37811,Jd=37812,$d=37813,eh=37814,th=37815,nh=37816,ih=37817,ah=37818,sh=37819,rh=37820,oh=37821,Cc=36492,lh=36494,ch=36495,Px=36283,uh=36284,fh=36285,dh=36286,pS=3200,mS=3201,gS=0,xS=1,ka="",fi="srgb",Nr="srgb-linear",Nc="linear",jt="srgb",sr=7680,E0=519,vS=512,_S=513,yS=514,zx=515,SS=516,bS=517,MS=518,ES=519,T0=35044,A0="300 es",sa=2e3,Dc=2001;class Ur{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let c=0,d=l.length;c<d;c++)l[c].call(this,t);t.target=null}}}const Rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Qf=Math.PI/180,hh=180/Math.PI;function Fo(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Rn[r&255]+Rn[r>>8&255]+Rn[r>>16&255]+Rn[r>>24&255]+"-"+Rn[t&255]+Rn[t>>8&255]+"-"+Rn[t>>16&15|64]+Rn[t>>24&255]+"-"+Rn[i&63|128]+Rn[i>>8&255]+"-"+Rn[i>>16&255]+Rn[i>>24&255]+Rn[s&255]+Rn[s>>8&255]+Rn[s>>16&255]+Rn[s>>24&255]).toLowerCase()}function At(r,t,i){return Math.max(t,Math.min(i,r))}function TS(r,t){return(r%t+t)%t}function Jf(r,t,i){return(1-i)*r+i*t}function Ro(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function jn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class Wt{constructor(t=0,i=0){Wt.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=At(this.x,t.x,i.x),this.y=At(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=At(this.x,t,i),this.y=At(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(At(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(At(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-t.x,d=this.y-t.y;return this.x=c*s-d*l+t.x,this.y=c*l+d*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class mt{constructor(t,i,s,l,c,d,h,m,p){mt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,d,h,m,p)}set(t,i,s,l,c,d,h,m,p){const y=this.elements;return y[0]=t,y[1]=l,y[2]=h,y[3]=i,y[4]=c,y[5]=m,y[6]=s,y[7]=d,y[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,d=s[0],h=s[3],m=s[6],p=s[1],y=s[4],x=s[7],v=s[2],M=s[5],T=s[8],C=l[0],b=l[3],_=l[6],B=l[1],O=l[4],D=l[7],W=l[2],k=l[5],I=l[8];return c[0]=d*C+h*B+m*W,c[3]=d*b+h*O+m*k,c[6]=d*_+h*D+m*I,c[1]=p*C+y*B+x*W,c[4]=p*b+y*O+x*k,c[7]=p*_+y*D+x*I,c[2]=v*C+M*B+T*W,c[5]=v*b+M*O+T*k,c[8]=v*_+M*D+T*I,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],d=t[4],h=t[5],m=t[6],p=t[7],y=t[8];return i*d*y-i*h*p-s*c*y+s*h*m+l*c*p-l*d*m}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],d=t[4],h=t[5],m=t[6],p=t[7],y=t[8],x=y*d-h*p,v=h*m-y*c,M=p*c-d*m,T=i*x+s*v+l*M;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/T;return t[0]=x*C,t[1]=(l*p-y*s)*C,t[2]=(h*s-l*d)*C,t[3]=v*C,t[4]=(y*i-l*m)*C,t[5]=(l*c-h*i)*C,t[6]=M*C,t[7]=(s*m-p*i)*C,t[8]=(d*i-s*c)*C,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,c,d,h){const m=Math.cos(c),p=Math.sin(c);return this.set(s*m,s*p,-s*(m*d+p*h)+d+t,-l*p,l*m,-l*(-p*d+m*h)+h+i,0,0,1),this}scale(t,i){return this.premultiply($f.makeScale(t,i)),this}rotate(t){return this.premultiply($f.makeRotation(-t)),this}translate(t,i){return this.premultiply($f.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const $f=new mt;function Ix(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Uc(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function AS(){const r=Uc("canvas");return r.style.display="block",r}const w0={};function _r(r){r in w0||(w0[r]=!0,console.warn(r))}function wS(r,t,i){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}function CS(r){const t=r.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function RS(r){const t=r.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const C0=new mt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),R0=new mt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function NS(){const r={enabled:!0,workingColorSpace:Nr,spaces:{},convert:function(l,c,d){return this.enabled===!1||c===d||!c||!d||(this.spaces[c].transfer===jt&&(l.r=oa(l.r),l.g=oa(l.g),l.b=oa(l.b)),this.spaces[c].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===jt&&(l.r=Mr(l.r),l.g=Mr(l.g),l.b=Mr(l.b))),l},fromWorkingColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},toWorkingColorSpace:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===ka?Nc:this.spaces[l].transfer},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,d){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[Nr]:{primaries:t,whitePoint:s,transfer:Nc,toXYZ:C0,fromXYZ:R0,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:fi},outputColorSpaceConfig:{drawingBufferColorSpace:fi}},[fi]:{primaries:t,whitePoint:s,transfer:jt,toXYZ:C0,fromXYZ:R0,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:fi}}}),r}const Lt=NS();function oa(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Mr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let rr;class DS{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{rr===void 0&&(rr=Uc("canvas")),rr.width=t.width,rr.height=t.height;const s=rr.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=rr}return i.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Uc("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),c=l.data;for(let d=0;d<c.length;d++)c[d]=oa(c[d]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(oa(i[s]/255)*255):i[s]=oa(i[s]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let US=0;class Bx{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:US++}),this.uuid=Fo(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let d=0,h=l.length;d<h;d++)l[d].isDataTexture?c.push(ed(l[d].image)):c.push(ed(l[d]))}else c=ed(l);s.url=c}return i||(t.images[this.uuid]=s),s}}function ed(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?DS.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let LS=0;class Pn extends Ur{constructor(t=Pn.DEFAULT_IMAGE,i=Pn.DEFAULT_MAPPING,s=Ss,l=Ss,c=Ui,d=bs,h=Ei,m=la,p=Pn.DEFAULT_ANISOTROPY,y=ka){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:LS++}),this.uuid=Fo(),this.name="",this.source=new Bx(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=d,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new Wt(0,0),this.repeat=new Wt(1,1),this.center=new Wt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new mt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=y,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Tx)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Fd:t.x=t.x-Math.floor(t.x);break;case Ss:t.x=t.x<0?0:1;break;case Hd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Fd:t.y=t.y-Math.floor(t.y);break;case Ss:t.y=t.y<0?0:1;break;case Hd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Pn.DEFAULT_IMAGE=null;Pn.DEFAULT_MAPPING=Tx;Pn.DEFAULT_ANISOTROPY=1;class sn{constructor(t=0,i=0,s=0,l=1){sn.prototype.isVector4=!0,this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=this.w,d=t.elements;return this.x=d[0]*i+d[4]*s+d[8]*l+d[12]*c,this.y=d[1]*i+d[5]*s+d[9]*l+d[13]*c,this.z=d[2]*i+d[6]*s+d[10]*l+d[14]*c,this.w=d[3]*i+d[7]*s+d[11]*l+d[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,c;const m=t.elements,p=m[0],y=m[4],x=m[8],v=m[1],M=m[5],T=m[9],C=m[2],b=m[6],_=m[10];if(Math.abs(y-v)<.01&&Math.abs(x-C)<.01&&Math.abs(T-b)<.01){if(Math.abs(y+v)<.1&&Math.abs(x+C)<.1&&Math.abs(T+b)<.1&&Math.abs(p+M+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const O=(p+1)/2,D=(M+1)/2,W=(_+1)/2,k=(y+v)/4,I=(x+C)/4,Q=(T+b)/4;return O>D&&O>W?O<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(O),l=k/s,c=I/s):D>W?D<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(D),s=k/l,c=Q/l):W<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(W),s=I/c,l=Q/c),this.set(s,l,c,i),this}let B=Math.sqrt((b-T)*(b-T)+(x-C)*(x-C)+(v-y)*(v-y));return Math.abs(B)<.001&&(B=1),this.x=(b-T)/B,this.y=(x-C)/B,this.z=(v-y)/B,this.w=Math.acos((p+M+_-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=At(this.x,t.x,i.x),this.y=At(this.y,t.y,i.y),this.z=At(this.z,t.z,i.z),this.w=At(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=At(this.x,t,i),this.y=At(this.y,t,i),this.z=At(this.z,t,i),this.w=At(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(At(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class OS extends Ur{constructor(t=1,i=1,s={}){super(),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=1,this.scissor=new sn(0,0,t,i),this.scissorTest=!1,this.viewport=new sn(0,0,t,i);const l={width:t,height:i,depth:1};s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ui,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},s);const c=new Pn(l,s.mapping,s.wrapS,s.wrapT,s.magFilter,s.minFilter,s.format,s.type,s.anisotropy,s.colorSpace);c.flipY=!1,c.generateMipmaps=s.generateMipmaps,c.internalFormat=s.internalFormat,this.textures=[];const d=s.count;for(let h=0;h<d;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s;this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let s=0,l=t.textures.length;s<l;s++)this.textures[s]=t.textures[s].clone(),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;const i=Object.assign({},t.texture.image);return this.texture.source=new Bx(i),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ts extends OS{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class Fx extends Pn{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Ti,this.minFilter=Ti,this.wrapR=Ss,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class PS extends Pn{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Ti,this.minFilter=Ti,this.wrapR=Ss,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ho{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,c,d,h){let m=s[l+0],p=s[l+1],y=s[l+2],x=s[l+3];const v=c[d+0],M=c[d+1],T=c[d+2],C=c[d+3];if(h===0){t[i+0]=m,t[i+1]=p,t[i+2]=y,t[i+3]=x;return}if(h===1){t[i+0]=v,t[i+1]=M,t[i+2]=T,t[i+3]=C;return}if(x!==C||m!==v||p!==M||y!==T){let b=1-h;const _=m*v+p*M+y*T+x*C,B=_>=0?1:-1,O=1-_*_;if(O>Number.EPSILON){const W=Math.sqrt(O),k=Math.atan2(W,_*B);b=Math.sin(b*k)/W,h=Math.sin(h*k)/W}const D=h*B;if(m=m*b+v*D,p=p*b+M*D,y=y*b+T*D,x=x*b+C*D,b===1-h){const W=1/Math.sqrt(m*m+p*p+y*y+x*x);m*=W,p*=W,y*=W,x*=W}}t[i]=m,t[i+1]=p,t[i+2]=y,t[i+3]=x}static multiplyQuaternionsFlat(t,i,s,l,c,d){const h=s[l],m=s[l+1],p=s[l+2],y=s[l+3],x=c[d],v=c[d+1],M=c[d+2],T=c[d+3];return t[i]=h*T+y*x+m*M-p*v,t[i+1]=m*T+y*v+p*x-h*M,t[i+2]=p*T+y*M+h*v-m*x,t[i+3]=y*T-h*x-m*v-p*M,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,c=t._z,d=t._order,h=Math.cos,m=Math.sin,p=h(s/2),y=h(l/2),x=h(c/2),v=m(s/2),M=m(l/2),T=m(c/2);switch(d){case"XYZ":this._x=v*y*x+p*M*T,this._y=p*M*x-v*y*T,this._z=p*y*T+v*M*x,this._w=p*y*x-v*M*T;break;case"YXZ":this._x=v*y*x+p*M*T,this._y=p*M*x-v*y*T,this._z=p*y*T-v*M*x,this._w=p*y*x+v*M*T;break;case"ZXY":this._x=v*y*x-p*M*T,this._y=p*M*x+v*y*T,this._z=p*y*T+v*M*x,this._w=p*y*x-v*M*T;break;case"ZYX":this._x=v*y*x-p*M*T,this._y=p*M*x+v*y*T,this._z=p*y*T-v*M*x,this._w=p*y*x+v*M*T;break;case"YZX":this._x=v*y*x+p*M*T,this._y=p*M*x+v*y*T,this._z=p*y*T-v*M*x,this._w=p*y*x-v*M*T;break;case"XZY":this._x=v*y*x-p*M*T,this._y=p*M*x-v*y*T,this._z=p*y*T+v*M*x,this._w=p*y*x+v*M*T;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],c=i[8],d=i[1],h=i[5],m=i[9],p=i[2],y=i[6],x=i[10],v=s+h+x;if(v>0){const M=.5/Math.sqrt(v+1);this._w=.25/M,this._x=(y-m)*M,this._y=(c-p)*M,this._z=(d-l)*M}else if(s>h&&s>x){const M=2*Math.sqrt(1+s-h-x);this._w=(y-m)/M,this._x=.25*M,this._y=(l+d)/M,this._z=(c+p)/M}else if(h>x){const M=2*Math.sqrt(1+h-s-x);this._w=(c-p)/M,this._x=(l+d)/M,this._y=.25*M,this._z=(m+y)/M}else{const M=2*Math.sqrt(1+x-s-h);this._w=(d-l)/M,this._x=(c+p)/M,this._y=(m+y)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<Number.EPSILON?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(At(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,c=t._z,d=t._w,h=i._x,m=i._y,p=i._z,y=i._w;return this._x=s*y+d*h+l*p-c*m,this._y=l*y+d*m+c*h-s*p,this._z=c*y+d*p+s*m-l*h,this._w=d*y-s*h-l*m-c*p,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const s=this._x,l=this._y,c=this._z,d=this._w;let h=d*t._w+s*t._x+l*t._y+c*t._z;if(h<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,h=-h):this.copy(t),h>=1)return this._w=d,this._x=s,this._y=l,this._z=c,this;const m=1-h*h;if(m<=Number.EPSILON){const M=1-i;return this._w=M*d+i*this._w,this._x=M*s+i*this._x,this._y=M*l+i*this._y,this._z=M*c+i*this._z,this.normalize(),this}const p=Math.sqrt(m),y=Math.atan2(p,h),x=Math.sin((1-i)*y)/p,v=Math.sin(i*y)/p;return this._w=d*x+this._w*v,this._x=s*x+this._x*v,this._y=l*x+this._y*v,this._z=c*x+this._z*v,this._onChangeCallback(),this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class fe{constructor(t=0,i=0,s=0){fe.prototype.isVector3=!0,this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(N0.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(N0.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=t.elements,d=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*d,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*d,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*d,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,c=t.x,d=t.y,h=t.z,m=t.w,p=2*(d*l-h*s),y=2*(h*i-c*l),x=2*(c*s-d*i);return this.x=i+m*p+d*x-h*y,this.y=s+m*y+h*p-c*x,this.z=l+m*x+c*y-d*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=At(this.x,t.x,i.x),this.y=At(this.y,t.y,i.y),this.z=At(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=At(this.x,t,i),this.y=At(this.y,t,i),this.z=At(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(At(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,c=t.z,d=i.x,h=i.y,m=i.z;return this.x=l*m-c*h,this.y=c*d-s*m,this.z=s*h-l*d,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return td.copy(this).projectOnVector(t),this.sub(td)}reflect(t){return this.sub(td.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(At(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const td=new fe,N0=new Ho;class ko{constructor(t=new fe(1/0,1/0,1/0),i=new fe(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(yi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(yi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=yi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let d=0,h=c.count;d<h;d++)t.isMesh===!0?t.getVertexPosition(d,yi):yi.fromBufferAttribute(c,d),yi.applyMatrix4(t.matrixWorld),this.expandByPoint(yi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),tc.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),tc.copy(s.boundingBox)),tc.applyMatrix4(t.matrixWorld),this.union(tc)}const l=t.children;for(let c=0,d=l.length;c<d;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,yi),yi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(No),nc.subVectors(this.max,No),or.subVectors(t.a,No),lr.subVectors(t.b,No),cr.subVectors(t.c,No),Pa.subVectors(lr,or),za.subVectors(cr,lr),fs.subVectors(or,cr);let i=[0,-Pa.z,Pa.y,0,-za.z,za.y,0,-fs.z,fs.y,Pa.z,0,-Pa.x,za.z,0,-za.x,fs.z,0,-fs.x,-Pa.y,Pa.x,0,-za.y,za.x,0,-fs.y,fs.x,0];return!nd(i,or,lr,cr,nc)||(i=[1,0,0,0,1,0,0,0,1],!nd(i,or,lr,cr,nc))?!1:(ic.crossVectors(Pa,za),i=[ic.x,ic.y,ic.z],nd(i,or,lr,cr,nc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,yi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(yi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Qi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Qi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Qi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Qi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Qi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Qi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Qi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Qi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Qi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Qi=[new fe,new fe,new fe,new fe,new fe,new fe,new fe,new fe],yi=new fe,tc=new ko,or=new fe,lr=new fe,cr=new fe,Pa=new fe,za=new fe,fs=new fe,No=new fe,nc=new fe,ic=new fe,ds=new fe;function nd(r,t,i,s,l){for(let c=0,d=r.length-3;c<=d;c+=3){ds.fromArray(r,c);const h=l.x*Math.abs(ds.x)+l.y*Math.abs(ds.y)+l.z*Math.abs(ds.z),m=t.dot(ds),p=i.dot(ds),y=s.dot(ds);if(Math.max(-Math.max(m,p,y),Math.min(m,p,y))>h)return!1}return!0}const zS=new ko,Do=new fe,id=new fe;class Oc{constructor(t=new fe,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):zS.setFromPoints(t).getCenter(s);let l=0;for(let c=0,d=t.length;c<d;c++)l=Math.max(l,s.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Do.subVectors(t,this.center);const i=Do.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Do,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(id.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Do.copy(t.center).add(id)),this.expandByPoint(Do.copy(t.center).sub(id))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ji=new fe,ad=new fe,ac=new fe,Ia=new fe,sd=new fe,sc=new fe,rd=new fe;class Hx{constructor(t=new fe,i=new fe(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ji)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=Ji.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(Ji.copy(this.origin).addScaledVector(this.direction,i),Ji.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){ad.copy(t).add(i).multiplyScalar(.5),ac.copy(i).sub(t).normalize(),Ia.copy(this.origin).sub(ad);const c=t.distanceTo(i)*.5,d=-this.direction.dot(ac),h=Ia.dot(this.direction),m=-Ia.dot(ac),p=Ia.lengthSq(),y=Math.abs(1-d*d);let x,v,M,T;if(y>0)if(x=d*m-h,v=d*h-m,T=c*y,x>=0)if(v>=-T)if(v<=T){const C=1/y;x*=C,v*=C,M=x*(x+d*v+2*h)+v*(d*x+v+2*m)+p}else v=c,x=Math.max(0,-(d*v+h)),M=-x*x+v*(v+2*m)+p;else v=-c,x=Math.max(0,-(d*v+h)),M=-x*x+v*(v+2*m)+p;else v<=-T?(x=Math.max(0,-(-d*c+h)),v=x>0?-c:Math.min(Math.max(-c,-m),c),M=-x*x+v*(v+2*m)+p):v<=T?(x=0,v=Math.min(Math.max(-c,-m),c),M=v*(v+2*m)+p):(x=Math.max(0,-(d*c+h)),v=x>0?c:Math.min(Math.max(-c,-m),c),M=-x*x+v*(v+2*m)+p);else v=d>0?-c:c,x=Math.max(0,-(d*v+h)),M=-x*x+v*(v+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,x),l&&l.copy(ad).addScaledVector(ac,v),M}intersectSphere(t,i){Ji.subVectors(t.center,this.origin);const s=Ji.dot(this.direction),l=Ji.dot(Ji)-s*s,c=t.radius*t.radius;if(l>c)return null;const d=Math.sqrt(c-l),h=s-d,m=s+d;return m<0?null:h<0?this.at(m,i):this.at(h,i)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,c,d,h,m;const p=1/this.direction.x,y=1/this.direction.y,x=1/this.direction.z,v=this.origin;return p>=0?(s=(t.min.x-v.x)*p,l=(t.max.x-v.x)*p):(s=(t.max.x-v.x)*p,l=(t.min.x-v.x)*p),y>=0?(c=(t.min.y-v.y)*y,d=(t.max.y-v.y)*y):(c=(t.max.y-v.y)*y,d=(t.min.y-v.y)*y),s>d||c>l||((c>s||isNaN(s))&&(s=c),(d<l||isNaN(l))&&(l=d),x>=0?(h=(t.min.z-v.z)*x,m=(t.max.z-v.z)*x):(h=(t.max.z-v.z)*x,m=(t.min.z-v.z)*x),s>m||h>l)||((h>s||s!==s)&&(s=h),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,Ji)!==null}intersectTriangle(t,i,s,l,c){sd.subVectors(i,t),sc.subVectors(s,t),rd.crossVectors(sd,sc);let d=this.direction.dot(rd),h;if(d>0){if(l)return null;h=1}else if(d<0)h=-1,d=-d;else return null;Ia.subVectors(this.origin,t);const m=h*this.direction.dot(sc.crossVectors(Ia,sc));if(m<0)return null;const p=h*this.direction.dot(sd.cross(Ia));if(p<0||m+p>d)return null;const y=-h*Ia.dot(rd);return y<0?null:this.at(y/d,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class rn{constructor(t,i,s,l,c,d,h,m,p,y,x,v,M,T,C,b){rn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,d,h,m,p,y,x,v,M,T,C,b)}set(t,i,s,l,c,d,h,m,p,y,x,v,M,T,C,b){const _=this.elements;return _[0]=t,_[4]=i,_[8]=s,_[12]=l,_[1]=c,_[5]=d,_[9]=h,_[13]=m,_[2]=p,_[6]=y,_[10]=x,_[14]=v,_[3]=M,_[7]=T,_[11]=C,_[15]=b,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new rn().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,s=t.elements,l=1/ur.setFromMatrixColumn(t,0).length(),c=1/ur.setFromMatrixColumn(t,1).length(),d=1/ur.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*d,i[9]=s[9]*d,i[10]=s[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,c=t.z,d=Math.cos(s),h=Math.sin(s),m=Math.cos(l),p=Math.sin(l),y=Math.cos(c),x=Math.sin(c);if(t.order==="XYZ"){const v=d*y,M=d*x,T=h*y,C=h*x;i[0]=m*y,i[4]=-m*x,i[8]=p,i[1]=M+T*p,i[5]=v-C*p,i[9]=-h*m,i[2]=C-v*p,i[6]=T+M*p,i[10]=d*m}else if(t.order==="YXZ"){const v=m*y,M=m*x,T=p*y,C=p*x;i[0]=v+C*h,i[4]=T*h-M,i[8]=d*p,i[1]=d*x,i[5]=d*y,i[9]=-h,i[2]=M*h-T,i[6]=C+v*h,i[10]=d*m}else if(t.order==="ZXY"){const v=m*y,M=m*x,T=p*y,C=p*x;i[0]=v-C*h,i[4]=-d*x,i[8]=T+M*h,i[1]=M+T*h,i[5]=d*y,i[9]=C-v*h,i[2]=-d*p,i[6]=h,i[10]=d*m}else if(t.order==="ZYX"){const v=d*y,M=d*x,T=h*y,C=h*x;i[0]=m*y,i[4]=T*p-M,i[8]=v*p+C,i[1]=m*x,i[5]=C*p+v,i[9]=M*p-T,i[2]=-p,i[6]=h*m,i[10]=d*m}else if(t.order==="YZX"){const v=d*m,M=d*p,T=h*m,C=h*p;i[0]=m*y,i[4]=C-v*x,i[8]=T*x+M,i[1]=x,i[5]=d*y,i[9]=-h*y,i[2]=-p*y,i[6]=M*x+T,i[10]=v-C*x}else if(t.order==="XZY"){const v=d*m,M=d*p,T=h*m,C=h*p;i[0]=m*y,i[4]=-x,i[8]=p*y,i[1]=v*x+C,i[5]=d*y,i[9]=M*x-T,i[2]=T*x-M,i[6]=h*y,i[10]=C*x+v}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(IS,t,BS)}lookAt(t,i,s){const l=this.elements;return ei.subVectors(t,i),ei.lengthSq()===0&&(ei.z=1),ei.normalize(),Ba.crossVectors(s,ei),Ba.lengthSq()===0&&(Math.abs(s.z)===1?ei.x+=1e-4:ei.z+=1e-4,ei.normalize(),Ba.crossVectors(s,ei)),Ba.normalize(),rc.crossVectors(ei,Ba),l[0]=Ba.x,l[4]=rc.x,l[8]=ei.x,l[1]=Ba.y,l[5]=rc.y,l[9]=ei.y,l[2]=Ba.z,l[6]=rc.z,l[10]=ei.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,d=s[0],h=s[4],m=s[8],p=s[12],y=s[1],x=s[5],v=s[9],M=s[13],T=s[2],C=s[6],b=s[10],_=s[14],B=s[3],O=s[7],D=s[11],W=s[15],k=l[0],I=l[4],Q=l[8],U=l[12],N=l[1],V=l[5],he=l[9],le=l[13],ge=l[2],be=l[6],z=l[10],ee=l[14],J=l[3],Me=l[7],F=l[11],E=l[15];return c[0]=d*k+h*N+m*ge+p*J,c[4]=d*I+h*V+m*be+p*Me,c[8]=d*Q+h*he+m*z+p*F,c[12]=d*U+h*le+m*ee+p*E,c[1]=y*k+x*N+v*ge+M*J,c[5]=y*I+x*V+v*be+M*Me,c[9]=y*Q+x*he+v*z+M*F,c[13]=y*U+x*le+v*ee+M*E,c[2]=T*k+C*N+b*ge+_*J,c[6]=T*I+C*V+b*be+_*Me,c[10]=T*Q+C*he+b*z+_*F,c[14]=T*U+C*le+b*ee+_*E,c[3]=B*k+O*N+D*ge+W*J,c[7]=B*I+O*V+D*be+W*Me,c[11]=B*Q+O*he+D*z+W*F,c[15]=B*U+O*le+D*ee+W*E,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],c=t[12],d=t[1],h=t[5],m=t[9],p=t[13],y=t[2],x=t[6],v=t[10],M=t[14],T=t[3],C=t[7],b=t[11],_=t[15];return T*(+c*m*x-l*p*x-c*h*v+s*p*v+l*h*M-s*m*M)+C*(+i*m*M-i*p*v+c*d*v-l*d*M+l*p*y-c*m*y)+b*(+i*p*x-i*h*M-c*d*x+s*d*M+c*h*y-s*p*y)+_*(-l*h*y-i*m*x+i*h*v+l*d*x-s*d*v+s*m*y)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],d=t[4],h=t[5],m=t[6],p=t[7],y=t[8],x=t[9],v=t[10],M=t[11],T=t[12],C=t[13],b=t[14],_=t[15],B=x*b*p-C*v*p+C*m*M-h*b*M-x*m*_+h*v*_,O=T*v*p-y*b*p-T*m*M+d*b*M+y*m*_-d*v*_,D=y*C*p-T*x*p+T*h*M-d*C*M-y*h*_+d*x*_,W=T*x*m-y*C*m-T*h*v+d*C*v+y*h*b-d*x*b,k=i*B+s*O+l*D+c*W;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/k;return t[0]=B*I,t[1]=(C*v*c-x*b*c-C*l*M+s*b*M+x*l*_-s*v*_)*I,t[2]=(h*b*c-C*m*c+C*l*p-s*b*p-h*l*_+s*m*_)*I,t[3]=(x*m*c-h*v*c-x*l*p+s*v*p+h*l*M-s*m*M)*I,t[4]=O*I,t[5]=(y*b*c-T*v*c+T*l*M-i*b*M-y*l*_+i*v*_)*I,t[6]=(T*m*c-d*b*c-T*l*p+i*b*p+d*l*_-i*m*_)*I,t[7]=(d*v*c-y*m*c+y*l*p-i*v*p-d*l*M+i*m*M)*I,t[8]=D*I,t[9]=(T*x*c-y*C*c-T*s*M+i*C*M+y*s*_-i*x*_)*I,t[10]=(d*C*c-T*h*c+T*s*p-i*C*p-d*s*_+i*h*_)*I,t[11]=(y*h*c-d*x*c-y*s*p+i*x*p+d*s*M-i*h*M)*I,t[12]=W*I,t[13]=(y*C*l-T*x*l+T*s*v-i*C*v-y*s*b+i*x*b)*I,t[14]=(T*h*l-d*C*l-T*s*m+i*C*m+d*s*b-i*h*b)*I,t[15]=(d*x*l-y*h*l+y*s*m-i*x*m-d*s*v+i*h*v)*I,this}scale(t){const i=this.elements,s=t.x,l=t.y,c=t.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,d=t.x,h=t.y,m=t.z,p=c*d,y=c*h;return this.set(p*d+s,p*h-l*m,p*m+l*h,0,p*h+l*m,y*h+s,y*m-l*d,0,p*m-l*h,y*m+l*d,c*m*m+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,c,d){return this.set(1,s,c,0,t,1,d,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,c=i._x,d=i._y,h=i._z,m=i._w,p=c+c,y=d+d,x=h+h,v=c*p,M=c*y,T=c*x,C=d*y,b=d*x,_=h*x,B=m*p,O=m*y,D=m*x,W=s.x,k=s.y,I=s.z;return l[0]=(1-(C+_))*W,l[1]=(M+D)*W,l[2]=(T-O)*W,l[3]=0,l[4]=(M-D)*k,l[5]=(1-(v+_))*k,l[6]=(b+B)*k,l[7]=0,l[8]=(T+O)*I,l[9]=(b-B)*I,l[10]=(1-(v+C))*I,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;let c=ur.set(l[0],l[1],l[2]).length();const d=ur.set(l[4],l[5],l[6]).length(),h=ur.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),t.x=l[12],t.y=l[13],t.z=l[14],Si.copy(this);const p=1/c,y=1/d,x=1/h;return Si.elements[0]*=p,Si.elements[1]*=p,Si.elements[2]*=p,Si.elements[4]*=y,Si.elements[5]*=y,Si.elements[6]*=y,Si.elements[8]*=x,Si.elements[9]*=x,Si.elements[10]*=x,i.setFromRotationMatrix(Si),s.x=c,s.y=d,s.z=h,this}makePerspective(t,i,s,l,c,d,h=sa){const m=this.elements,p=2*c/(i-t),y=2*c/(s-l),x=(i+t)/(i-t),v=(s+l)/(s-l);let M,T;if(h===sa)M=-(d+c)/(d-c),T=-2*d*c/(d-c);else if(h===Dc)M=-d/(d-c),T=-d*c/(d-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return m[0]=p,m[4]=0,m[8]=x,m[12]=0,m[1]=0,m[5]=y,m[9]=v,m[13]=0,m[2]=0,m[6]=0,m[10]=M,m[14]=T,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(t,i,s,l,c,d,h=sa){const m=this.elements,p=1/(i-t),y=1/(s-l),x=1/(d-c),v=(i+t)*p,M=(s+l)*y;let T,C;if(h===sa)T=(d+c)*x,C=-2*x;else if(h===Dc)T=c*x,C=-1*x;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return m[0]=2*p,m[4]=0,m[8]=0,m[12]=-v,m[1]=0,m[5]=2*y,m[9]=0,m[13]=-M,m[2]=0,m[6]=0,m[10]=C,m[14]=-T,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}}const ur=new fe,Si=new rn,IS=new fe(0,0,0),BS=new fe(1,1,1),Ba=new fe,rc=new fe,ei=new fe,D0=new rn,U0=new Ho;class ca{constructor(t=0,i=0,s=0,l=ca.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,c=l[0],d=l[4],h=l[8],m=l[1],p=l[5],y=l[9],x=l[2],v=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(At(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-y,M),this._z=Math.atan2(-d,c)):(this._x=Math.atan2(v,p),this._z=0);break;case"YXZ":this._x=Math.asin(-At(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(h,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-x,c),this._z=0);break;case"ZXY":this._x=Math.asin(At(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-x,M),this._z=Math.atan2(-d,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-At(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(v,M),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-d,p));break;case"YZX":this._z=Math.asin(At(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-y,p),this._y=Math.atan2(-x,c)):(this._x=0,this._y=Math.atan2(h,M));break;case"XZY":this._z=Math.asin(-At(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(v,p),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-y,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return D0.makeRotationFromQuaternion(t),this.setFromRotationMatrix(D0,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return U0.setFromEuler(this),this.setFromQuaternion(U0,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ca.DEFAULT_ORDER="XYZ";let kx=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},FS=0;const L0=new fe,fr=new Ho,$i=new rn,oc=new fe,Uo=new fe,HS=new fe,kS=new Ho,O0=new fe(1,0,0),P0=new fe(0,1,0),z0=new fe(0,0,1),I0={type:"added"},GS={type:"removed"},dr={type:"childadded",child:null},od={type:"childremoved",child:null};class Wn extends Ur{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:FS++}),this.uuid=Fo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Wn.DEFAULT_UP.clone();const t=new fe,i=new ca,s=new Ho,l=new fe(1,1,1);function c(){s.setFromEuler(i,!1)}function d(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new rn},normalMatrix:{value:new mt}}),this.matrix=new rn,this.matrixWorld=new rn,this.matrixAutoUpdate=Wn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new kx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return fr.setFromAxisAngle(t,i),this.quaternion.multiply(fr),this}rotateOnWorldAxis(t,i){return fr.setFromAxisAngle(t,i),this.quaternion.premultiply(fr),this}rotateX(t){return this.rotateOnAxis(O0,t)}rotateY(t){return this.rotateOnAxis(P0,t)}rotateZ(t){return this.rotateOnAxis(z0,t)}translateOnAxis(t,i){return L0.copy(t).applyQuaternion(this.quaternion),this.position.add(L0.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(O0,t)}translateY(t){return this.translateOnAxis(P0,t)}translateZ(t){return this.translateOnAxis(z0,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4($i.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?oc.copy(t):oc.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Uo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$i.lookAt(Uo,oc,this.up):$i.lookAt(oc,Uo,this.up),this.quaternion.setFromRotationMatrix($i),l&&($i.extractRotation(l.matrixWorld),fr.setFromRotationMatrix($i),this.quaternion.premultiply(fr.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(I0),dr.child=t,this.dispatchEvent(dr),dr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(GS),od.child=t,this.dispatchEvent(od),od.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),$i.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),$i.multiply(t.parent.matrixWorld)),t.applyMatrix4($i),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(I0),dr.child=t,this.dispatchEvent(dr),dr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const d=this.children[s].getObjectByProperty(t,i);if(d!==void 0)return d}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Uo,t,HS),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Uo,kS,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.visibility=this._visibility,l.active=this._active,l.bounds=this._bounds.map(h=>({boxInitialized:h.boxInitialized,boxMin:h.box.min.toArray(),boxMax:h.box.max.toArray(),sphereInitialized:h.sphereInitialized,sphereRadius:h.sphere.radius,sphereCenter:h.sphere.center.toArray()})),l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.geometryCount=this._geometryCount,l.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere={center:l.boundingSphere.center.toArray(),radius:l.boundingSphere.radius}),this.boundingBox!==null&&(l.boundingBox={min:l.boundingBox.min.toArray(),max:l.boundingBox.max.toArray()}));function c(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,y=m.length;p<y;p++){const x=m[p];c(t.shapes,x)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(c(t.materials,this.material[m]));l.material=h}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];l.animations.push(c(t.animations,m))}}if(i){const h=d(t.geometries),m=d(t.materials),p=d(t.textures),y=d(t.images),x=d(t.shapes),v=d(t.skeletons),M=d(t.animations),T=d(t.nodes);h.length>0&&(s.geometries=h),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),y.length>0&&(s.images=y),x.length>0&&(s.shapes=x),v.length>0&&(s.skeletons=v),M.length>0&&(s.animations=M),T.length>0&&(s.nodes=T)}return s.object=l,s;function d(h){const m=[];for(const p in h){const y=h[p];delete y.metadata,m.push(y)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}Wn.DEFAULT_UP=new fe(0,1,0);Wn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const bi=new fe,ea=new fe,ld=new fe,ta=new fe,hr=new fe,pr=new fe,B0=new fe,cd=new fe,ud=new fe,fd=new fe,dd=new sn,hd=new sn,pd=new sn;class Mi{constructor(t=new fe,i=new fe,s=new fe){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),bi.subVectors(t,i),l.cross(bi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,s,l,c){bi.subVectors(l,i),ea.subVectors(s,i),ld.subVectors(t,i);const d=bi.dot(bi),h=bi.dot(ea),m=bi.dot(ld),p=ea.dot(ea),y=ea.dot(ld),x=d*p-h*h;if(x===0)return c.set(0,0,0),null;const v=1/x,M=(p*m-h*y)*v,T=(d*y-h*m)*v;return c.set(1-M-T,T,M)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,ta)===null?!1:ta.x>=0&&ta.y>=0&&ta.x+ta.y<=1}static getInterpolation(t,i,s,l,c,d,h,m){return this.getBarycoord(t,i,s,l,ta)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,ta.x),m.addScaledVector(d,ta.y),m.addScaledVector(h,ta.z),m)}static getInterpolatedAttribute(t,i,s,l,c,d){return dd.setScalar(0),hd.setScalar(0),pd.setScalar(0),dd.fromBufferAttribute(t,i),hd.fromBufferAttribute(t,s),pd.fromBufferAttribute(t,l),d.setScalar(0),d.addScaledVector(dd,c.x),d.addScaledVector(hd,c.y),d.addScaledVector(pd,c.z),d}static isFrontFacing(t,i,s,l){return bi.subVectors(s,i),ea.subVectors(t,i),bi.cross(ea).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return bi.subVectors(this.c,this.b),ea.subVectors(this.a,this.b),bi.cross(ea).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Mi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Mi.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,c){return Mi.getInterpolation(t,this.a,this.b,this.c,i,s,l,c)}containsPoint(t){return Mi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Mi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,c=this.c;let d,h;hr.subVectors(l,s),pr.subVectors(c,s),cd.subVectors(t,s);const m=hr.dot(cd),p=pr.dot(cd);if(m<=0&&p<=0)return i.copy(s);ud.subVectors(t,l);const y=hr.dot(ud),x=pr.dot(ud);if(y>=0&&x<=y)return i.copy(l);const v=m*x-y*p;if(v<=0&&m>=0&&y<=0)return d=m/(m-y),i.copy(s).addScaledVector(hr,d);fd.subVectors(t,c);const M=hr.dot(fd),T=pr.dot(fd);if(T>=0&&M<=T)return i.copy(c);const C=M*p-m*T;if(C<=0&&p>=0&&T<=0)return h=p/(p-T),i.copy(s).addScaledVector(pr,h);const b=y*T-M*x;if(b<=0&&x-y>=0&&M-T>=0)return B0.subVectors(c,l),h=(x-y)/(x-y+(M-T)),i.copy(l).addScaledVector(B0,h);const _=1/(b+C+v);return d=C*_,h=v*_,i.copy(s).addScaledVector(hr,d).addScaledVector(pr,h)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Gx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fa={h:0,s:0,l:0},lc={h:0,s:0,l:0};function md(r,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(t-r)*6*i:i<1/2?t:i<2/3?r+(t-r)*6*(2/3-i):r}class Ot{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=fi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Lt.toWorkingColorSpace(this,i),this}setRGB(t,i,s,l=Lt.workingColorSpace){return this.r=t,this.g=i,this.b=s,Lt.toWorkingColorSpace(this,l),this}setHSL(t,i,s,l=Lt.workingColorSpace){if(t=TS(t,1),i=At(i,0,1),s=At(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,d=2*s-c;this.r=md(d,c,t+1/3),this.g=md(d,c,t),this.b=md(d,c,t-1/3)}return Lt.toWorkingColorSpace(this,l),this}setStyle(t,i=fi){function s(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const d=l[1],h=l[2];switch(d){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],d=c.length;if(d===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(c,16),i);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=fi){const s=Gx[t.toLowerCase()];return s!==void 0?this.setHex(s,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=oa(t.r),this.g=oa(t.g),this.b=oa(t.b),this}copyLinearToSRGB(t){return this.r=Mr(t.r),this.g=Mr(t.g),this.b=Mr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=fi){return Lt.fromWorkingColorSpace(Nn.copy(this),t),Math.round(At(Nn.r*255,0,255))*65536+Math.round(At(Nn.g*255,0,255))*256+Math.round(At(Nn.b*255,0,255))}getHexString(t=fi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Lt.workingColorSpace){Lt.fromWorkingColorSpace(Nn.copy(this),i);const s=Nn.r,l=Nn.g,c=Nn.b,d=Math.max(s,l,c),h=Math.min(s,l,c);let m,p;const y=(h+d)/2;if(h===d)m=0,p=0;else{const x=d-h;switch(p=y<=.5?x/(d+h):x/(2-d-h),d){case s:m=(l-c)/x+(l<c?6:0);break;case l:m=(c-s)/x+2;break;case c:m=(s-l)/x+4;break}m/=6}return t.h=m,t.s=p,t.l=y,t}getRGB(t,i=Lt.workingColorSpace){return Lt.fromWorkingColorSpace(Nn.copy(this),i),t.r=Nn.r,t.g=Nn.g,t.b=Nn.b,t}getStyle(t=fi){Lt.fromWorkingColorSpace(Nn.copy(this),t);const i=Nn.r,s=Nn.g,l=Nn.b;return t!==fi?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(Fa),this.setHSL(Fa.h+t,Fa.s+i,Fa.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(Fa),t.getHSL(lc);const s=Jf(Fa.h,lc.h,i),l=Jf(Fa.s,lc.s,i),c=Jf(Fa.l,lc.l,i);return this.setHSL(s,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Nn=new Ot;Ot.NAMES=Gx;let VS=0;class Go extends Ur{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:VS++}),this.uuid=Fo(),this.name="",this.type="Material",this.blending=Sr,this.side=ja,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Cd,this.blendDst=Rd,this.blendEquation=_s,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ot(0,0,0),this.blendAlpha=0,this.depthFunc=Tr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=E0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=sr,this.stencilZFail=sr,this.stencilZPass=sr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Sr&&(s.blending=this.blending),this.side!==ja&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Cd&&(s.blendSrc=this.blendSrc),this.blendDst!==Rd&&(s.blendDst=this.blendDst),this.blendEquation!==_s&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Tr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==E0&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==sr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==sr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==sr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const d=[];for(const h in c){const m=c[h];delete m.metadata,d.push(m)}return d}if(i){const c=l(t.textures),d=l(t.images);c.length>0&&(s.textures=c),d.length>0&&(s.images=d)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Vx extends Go{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ca,this.combine=Ex,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const fn=new fe,cc=new Wt;let jS=0;class hi{constructor(t,i,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:jS++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=T0,this.updateRanges=[],this.gpuType=aa,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)cc.fromBufferAttribute(this,i),cc.applyMatrix3(t),this.setXY(i,cc.x,cc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)fn.fromBufferAttribute(this,i),fn.applyMatrix3(t),this.setXYZ(i,fn.x,fn.y,fn.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)fn.fromBufferAttribute(this,i),fn.applyMatrix4(t),this.setXYZ(i,fn.x,fn.y,fn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)fn.fromBufferAttribute(this,i),fn.applyNormalMatrix(t),this.setXYZ(i,fn.x,fn.y,fn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)fn.fromBufferAttribute(this,i),fn.transformDirection(t),this.setXYZ(i,fn.x,fn.y,fn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=Ro(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=jn(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Ro(i,this.array)),i}setX(t,i){return this.normalized&&(i=jn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Ro(i,this.array)),i}setY(t,i){return this.normalized&&(i=jn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Ro(i,this.array)),i}setZ(t,i){return this.normalized&&(i=jn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Ro(i,this.array)),i}setW(t,i){return this.normalized&&(i=jn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=jn(i,this.array),s=jn(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=jn(i,this.array),s=jn(s,this.array),l=jn(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,c){return t*=this.itemSize,this.normalized&&(i=jn(i,this.array),s=jn(s,this.array),l=jn(l,this.array),c=jn(c,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==T0&&(t.usage=this.usage),t}}class jx extends hi{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class Xx extends hi{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class Ms extends hi{constructor(t,i,s){super(new Float32Array(t),i,s)}}let XS=0;const ui=new rn,gd=new Wn,mr=new fe,ti=new ko,Lo=new ko,_n=new fe;class ua extends Ur{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:XS++}),this.uuid=Fo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ix(t)?Xx:jx)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new mt().getNormalMatrix(t);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ui.makeRotationFromQuaternion(t),this.applyMatrix4(ui),this}rotateX(t){return ui.makeRotationX(t),this.applyMatrix4(ui),this}rotateY(t){return ui.makeRotationY(t),this.applyMatrix4(ui),this}rotateZ(t){return ui.makeRotationZ(t),this.applyMatrix4(ui),this}translate(t,i,s){return ui.makeTranslation(t,i,s),this.applyMatrix4(ui),this}scale(t,i,s){return ui.makeScale(t,i,s),this.applyMatrix4(ui),this}lookAt(t){return gd.lookAt(t),gd.updateMatrix(),this.applyMatrix4(gd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(mr).negate(),this.translate(mr.x,mr.y,mr.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=t.length;l<c;l++){const d=t[l];s.push(d.x,d.y,d.z||0)}this.setAttribute("position",new Ms(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ko);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new fe(-1/0,-1/0,-1/0),new fe(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];ti.setFromBufferAttribute(c),this.morphTargetsRelative?(_n.addVectors(this.boundingBox.min,ti.min),this.boundingBox.expandByPoint(_n),_n.addVectors(this.boundingBox.max,ti.max),this.boundingBox.expandByPoint(_n)):(this.boundingBox.expandByPoint(ti.min),this.boundingBox.expandByPoint(ti.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Oc);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new fe,1/0);return}if(t){const s=this.boundingSphere.center;if(ti.setFromBufferAttribute(t),i)for(let c=0,d=i.length;c<d;c++){const h=i[c];Lo.setFromBufferAttribute(h),this.morphTargetsRelative?(_n.addVectors(ti.min,Lo.min),ti.expandByPoint(_n),_n.addVectors(ti.max,Lo.max),ti.expandByPoint(_n)):(ti.expandByPoint(Lo.min),ti.expandByPoint(Lo.max))}ti.getCenter(s);let l=0;for(let c=0,d=t.count;c<d;c++)_n.fromBufferAttribute(t,c),l=Math.max(l,s.distanceToSquared(_n));if(i)for(let c=0,d=i.length;c<d;c++){const h=i[c],m=this.morphTargetsRelative;for(let p=0,y=h.count;p<y;p++)_n.fromBufferAttribute(h,p),m&&(mr.fromBufferAttribute(t,p),_n.add(mr)),l=Math.max(l,s.distanceToSquared(_n))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new hi(new Float32Array(4*s.count),4));const d=this.getAttribute("tangent"),h=[],m=[];for(let Q=0;Q<s.count;Q++)h[Q]=new fe,m[Q]=new fe;const p=new fe,y=new fe,x=new fe,v=new Wt,M=new Wt,T=new Wt,C=new fe,b=new fe;function _(Q,U,N){p.fromBufferAttribute(s,Q),y.fromBufferAttribute(s,U),x.fromBufferAttribute(s,N),v.fromBufferAttribute(c,Q),M.fromBufferAttribute(c,U),T.fromBufferAttribute(c,N),y.sub(p),x.sub(p),M.sub(v),T.sub(v);const V=1/(M.x*T.y-T.x*M.y);isFinite(V)&&(C.copy(y).multiplyScalar(T.y).addScaledVector(x,-M.y).multiplyScalar(V),b.copy(x).multiplyScalar(M.x).addScaledVector(y,-T.x).multiplyScalar(V),h[Q].add(C),h[U].add(C),h[N].add(C),m[Q].add(b),m[U].add(b),m[N].add(b))}let B=this.groups;B.length===0&&(B=[{start:0,count:t.count}]);for(let Q=0,U=B.length;Q<U;++Q){const N=B[Q],V=N.start,he=N.count;for(let le=V,ge=V+he;le<ge;le+=3)_(t.getX(le+0),t.getX(le+1),t.getX(le+2))}const O=new fe,D=new fe,W=new fe,k=new fe;function I(Q){W.fromBufferAttribute(l,Q),k.copy(W);const U=h[Q];O.copy(U),O.sub(W.multiplyScalar(W.dot(U))).normalize(),D.crossVectors(k,U);const V=D.dot(m[Q])<0?-1:1;d.setXYZW(Q,O.x,O.y,O.z,V)}for(let Q=0,U=B.length;Q<U;++Q){const N=B[Q],V=N.start,he=N.count;for(let le=V,ge=V+he;le<ge;le+=3)I(t.getX(le+0)),I(t.getX(le+1)),I(t.getX(le+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new hi(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let v=0,M=s.count;v<M;v++)s.setXYZ(v,0,0,0);const l=new fe,c=new fe,d=new fe,h=new fe,m=new fe,p=new fe,y=new fe,x=new fe;if(t)for(let v=0,M=t.count;v<M;v+=3){const T=t.getX(v+0),C=t.getX(v+1),b=t.getX(v+2);l.fromBufferAttribute(i,T),c.fromBufferAttribute(i,C),d.fromBufferAttribute(i,b),y.subVectors(d,c),x.subVectors(l,c),y.cross(x),h.fromBufferAttribute(s,T),m.fromBufferAttribute(s,C),p.fromBufferAttribute(s,b),h.add(y),m.add(y),p.add(y),s.setXYZ(T,h.x,h.y,h.z),s.setXYZ(C,m.x,m.y,m.z),s.setXYZ(b,p.x,p.y,p.z)}else for(let v=0,M=i.count;v<M;v+=3)l.fromBufferAttribute(i,v+0),c.fromBufferAttribute(i,v+1),d.fromBufferAttribute(i,v+2),y.subVectors(d,c),x.subVectors(l,c),y.cross(x),s.setXYZ(v+0,y.x,y.y,y.z),s.setXYZ(v+1,y.x,y.y,y.z),s.setXYZ(v+2,y.x,y.y,y.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)_n.fromBufferAttribute(t,i),_n.normalize(),t.setXYZ(i,_n.x,_n.y,_n.z)}toNonIndexed(){function t(h,m){const p=h.array,y=h.itemSize,x=h.normalized,v=new p.constructor(m.length*y);let M=0,T=0;for(let C=0,b=m.length;C<b;C++){h.isInterleavedBufferAttribute?M=m[C]*h.data.stride+h.offset:M=m[C]*y;for(let _=0;_<y;_++)v[T++]=p[M++]}return new hi(v,y,x)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new ua,s=this.index.array,l=this.attributes;for(const h in l){const m=l[h],p=t(m,s);i.setAttribute(h,p)}const c=this.morphAttributes;for(const h in c){const m=[],p=c[h];for(let y=0,x=p.length;y<x;y++){const v=p[y],M=t(v,s);m.push(M)}i.morphAttributes[h]=m}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,m=d.length;h<m;h++){const p=d[h];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],y=[];for(let x=0,v=p.length;x<v;x++){const M=p[x];y.push(M.toJSON(t.data))}y.length>0&&(l[m]=y,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(t.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(t.data.boundingSphere={center:h.center.toArray(),radius:h.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone(i));const l=t.attributes;for(const p in l){const y=l[p];this.setAttribute(p,y.clone(i))}const c=t.morphAttributes;for(const p in c){const y=[],x=c[p];for(let v=0,M=x.length;v<M;v++)y.push(x[v].clone(i));this.morphAttributes[p]=y}this.morphTargetsRelative=t.morphTargetsRelative;const d=t.groups;for(let p=0,y=d.length;p<y;p++){const x=d[p];this.addGroup(x.start,x.count,x.materialIndex)}const h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const F0=new rn,hs=new Hx,uc=new Oc,H0=new fe,fc=new fe,dc=new fe,hc=new fe,xd=new fe,pc=new fe,k0=new fe,mc=new fe;class ra extends Wn{constructor(t=new ua,i=new Vx){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,d=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const h=this.morphTargetInfluences;if(c&&h){pc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const y=h[m],x=c[m];y!==0&&(xd.fromBufferAttribute(x,t),d?pc.addScaledVector(xd,y):pc.addScaledVector(xd.sub(i),y))}i.add(pc)}return i}raycast(t,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),uc.copy(s.boundingSphere),uc.applyMatrix4(c),hs.copy(t.ray).recast(t.near),!(uc.containsPoint(hs.origin)===!1&&(hs.intersectSphere(uc,H0)===null||hs.origin.distanceToSquared(H0)>(t.far-t.near)**2))&&(F0.copy(c).invert(),hs.copy(t.ray).applyMatrix4(F0),!(s.boundingBox!==null&&hs.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,hs)))}_computeIntersections(t,i,s){let l;const c=this.geometry,d=this.material,h=c.index,m=c.attributes.position,p=c.attributes.uv,y=c.attributes.uv1,x=c.attributes.normal,v=c.groups,M=c.drawRange;if(h!==null)if(Array.isArray(d))for(let T=0,C=v.length;T<C;T++){const b=v[T],_=d[b.materialIndex],B=Math.max(b.start,M.start),O=Math.min(h.count,Math.min(b.start+b.count,M.start+M.count));for(let D=B,W=O;D<W;D+=3){const k=h.getX(D),I=h.getX(D+1),Q=h.getX(D+2);l=gc(this,_,t,s,p,y,x,k,I,Q),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=b.materialIndex,i.push(l))}}else{const T=Math.max(0,M.start),C=Math.min(h.count,M.start+M.count);for(let b=T,_=C;b<_;b+=3){const B=h.getX(b),O=h.getX(b+1),D=h.getX(b+2);l=gc(this,d,t,s,p,y,x,B,O,D),l&&(l.faceIndex=Math.floor(b/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(d))for(let T=0,C=v.length;T<C;T++){const b=v[T],_=d[b.materialIndex],B=Math.max(b.start,M.start),O=Math.min(m.count,Math.min(b.start+b.count,M.start+M.count));for(let D=B,W=O;D<W;D+=3){const k=D,I=D+1,Q=D+2;l=gc(this,_,t,s,p,y,x,k,I,Q),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=b.materialIndex,i.push(l))}}else{const T=Math.max(0,M.start),C=Math.min(m.count,M.start+M.count);for(let b=T,_=C;b<_;b+=3){const B=b,O=b+1,D=b+2;l=gc(this,d,t,s,p,y,x,B,O,D),l&&(l.faceIndex=Math.floor(b/3),i.push(l))}}}}function WS(r,t,i,s,l,c,d,h){let m;if(t.side===Xn?m=s.intersectTriangle(d,c,l,!0,h):m=s.intersectTriangle(l,c,d,t.side===ja,h),m===null)return null;mc.copy(h),mc.applyMatrix4(r.matrixWorld);const p=i.ray.origin.distanceTo(mc);return p<i.near||p>i.far?null:{distance:p,point:mc.clone(),object:r}}function gc(r,t,i,s,l,c,d,h,m,p){r.getVertexPosition(h,fc),r.getVertexPosition(m,dc),r.getVertexPosition(p,hc);const y=WS(r,t,i,s,fc,dc,hc,k0);if(y){const x=new fe;Mi.getBarycoord(k0,fc,dc,hc,x),l&&(y.uv=Mi.getInterpolatedAttribute(l,h,m,p,x,new Wt)),c&&(y.uv1=Mi.getInterpolatedAttribute(c,h,m,p,x,new Wt)),d&&(y.normal=Mi.getInterpolatedAttribute(d,h,m,p,x,new fe),y.normal.dot(s.direction)>0&&y.normal.multiplyScalar(-1));const v={a:h,b:m,c:p,normal:new fe,materialIndex:0};Mi.getNormal(fc,dc,hc,v.normal),y.face=v,y.barycoord=x}return y}class Vo extends ua{constructor(t=1,i=1,s=1,l=1,c=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:d};const h=this;l=Math.floor(l),c=Math.floor(c),d=Math.floor(d);const m=[],p=[],y=[],x=[];let v=0,M=0;T("z","y","x",-1,-1,s,i,t,d,c,0),T("z","y","x",1,-1,s,i,-t,d,c,1),T("x","z","y",1,1,t,s,i,l,d,2),T("x","z","y",1,-1,t,s,-i,l,d,3),T("x","y","z",1,-1,t,i,s,l,c,4),T("x","y","z",-1,-1,t,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new Ms(p,3)),this.setAttribute("normal",new Ms(y,3)),this.setAttribute("uv",new Ms(x,2));function T(C,b,_,B,O,D,W,k,I,Q,U){const N=D/I,V=W/Q,he=D/2,le=W/2,ge=k/2,be=I+1,z=Q+1;let ee=0,J=0;const Me=new fe;for(let F=0;F<z;F++){const E=F*V-le;for(let j=0;j<be;j++){const ce=j*N-he;Me[C]=ce*B,Me[b]=E*O,Me[_]=ge,p.push(Me.x,Me.y,Me.z),Me[C]=0,Me[b]=0,Me[_]=k>0?1:-1,y.push(Me.x,Me.y,Me.z),x.push(j/I),x.push(1-F/Q),ee+=1}}for(let F=0;F<Q;F++)for(let E=0;E<I;E++){const j=v+E+be*F,ce=v+E+be*(F+1),G=v+(E+1)+be*(F+1),$=v+(E+1)+be*F;m.push(j,ce,$),m.push(ce,G,$),J+=6}h.addGroup(M,J,U),M+=J,v+=ee}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Vo(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Dr(r){const t={};for(const i in r){t[i]={};for(const s in r[i]){const l=r[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone():Array.isArray(l)?t[i][s]=l.slice():t[i][s]=l}}return t}function On(r){const t={};for(let i=0;i<r.length;i++){const s=Dr(r[i]);for(const l in s)t[l]=s[l]}return t}function qS(r){const t=[];for(let i=0;i<r.length;i++)t.push(r[i].clone());return t}function Wx(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Lt.workingColorSpace}const YS={clone:Dr,merge:On};var ZS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,KS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Xa extends Go{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ZS,this.fragmentShader=KS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Dr(t.uniforms),this.uniformsGroups=qS(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(t).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class qx extends Wn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new rn,this.projectionMatrix=new rn,this.projectionMatrixInverse=new rn,this.coordinateSystem=sa}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ha=new fe,G0=new Wt,V0=new Wt;class di extends qx{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=hh*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Qf*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return hh*2*Math.atan(Math.tan(Qf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){Ha.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ha.x,Ha.y).multiplyScalar(-t/Ha.z),Ha.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Ha.x,Ha.y).multiplyScalar(-t/Ha.z)}getViewSize(t,i){return this.getViewBounds(t,G0,V0),i.subVectors(V0,G0)}setViewOffset(t,i,s,l,c,d){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(Qf*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const m=d.fullWidth,p=d.fullHeight;c+=d.offsetX*l/m,i-=d.offsetY*s/p,l*=d.width/m,s*=d.height/p}const h=this.filmOffset;h!==0&&(c+=t*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const gr=-90,xr=1;class QS extends Wn{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new di(gr,xr,t,i);l.layers=this.layers,this.add(l);const c=new di(gr,xr,t,i);c.layers=this.layers,this.add(c);const d=new di(gr,xr,t,i);d.layers=this.layers,this.add(d);const h=new di(gr,xr,t,i);h.layers=this.layers,this.add(h);const m=new di(gr,xr,t,i);m.layers=this.layers,this.add(m);const p=new di(gr,xr,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,c,d,h,m]=i;for(const p of i)this.remove(p);if(t===sa)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===Dc)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,d,h,m,p,y]=this.children,x=t.getRenderTarget(),v=t.getActiveCubeFace(),M=t.getActiveMipmapLevel(),T=t.xr.enabled;t.xr.enabled=!1;const C=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,t.setRenderTarget(s,0,l),t.render(i,c),t.setRenderTarget(s,1,l),t.render(i,d),t.setRenderTarget(s,2,l),t.render(i,h),t.setRenderTarget(s,3,l),t.render(i,m),t.setRenderTarget(s,4,l),t.render(i,p),s.texture.generateMipmaps=C,t.setRenderTarget(s,5,l),t.render(i,y),t.setRenderTarget(x,v,M),t.xr.enabled=T,s.texture.needsPMREMUpdate=!0}}class Yx extends Pn{constructor(t,i,s,l,c,d,h,m,p,y){t=t!==void 0?t:[],i=i!==void 0?i:Ar,super(t,i,s,l,c,d,h,m,p,y),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class JS extends Ts{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new Yx(l,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Ui}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new Vo(5,5,5),c=new Xa({name:"CubemapFromEquirect",uniforms:Dr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Xn,blending:Ga});c.uniforms.tEquirect.value=i;const d=new ra(l,c),h=i.minFilter;return i.minFilter===bs&&(i.minFilter=Ui),new QS(1,10,this).update(t,d),i.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(t,i,s,l){const c=t.getRenderTarget();for(let d=0;d<6;d++)t.setRenderTarget(this,d),t.clear(i,s,l);t.setRenderTarget(c)}}class Oo extends Wn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const $S={type:"move"};class vd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Oo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Oo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new fe,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new fe),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Oo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new fe,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new fe),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,c=null,d=null;const h=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){d=!0;for(const C of t.hand.values()){const b=i.getJointPose(C,s),_=this._getHandJoint(p,C);b!==null&&(_.matrix.fromArray(b.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=b.radius),_.visible=b!==null}const y=p.joints["index-finger-tip"],x=p.joints["thumb-tip"],v=y.position.distanceTo(x.position),M=.02,T=.005;p.inputState.pinching&&v>M+T?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&v<=M-T&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));h!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent($S)))}return h!==null&&(h.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=d!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new Oo;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}class eb extends Wn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ca,this.environmentIntensity=1,this.environmentRotation=new ca,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const _d=new fe,tb=new fe,nb=new mt;class xs{constructor(t=new fe(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=_d.subVectors(s,i).cross(tb.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const s=t.delta(_d),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(s,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||nb.getNormalMatrix(t),l=this.coplanarPoint(_d).applyMatrix4(t),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ps=new Oc,xc=new fe;class Zx{constructor(t=new xs,i=new xs,s=new xs,l=new xs,c=new xs,d=new xs){this.planes=[t,i,s,l,c,d]}set(t,i,s,l,c,d){const h=this.planes;return h[0].copy(t),h[1].copy(i),h[2].copy(s),h[3].copy(l),h[4].copy(c),h[5].copy(d),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=sa){const s=this.planes,l=t.elements,c=l[0],d=l[1],h=l[2],m=l[3],p=l[4],y=l[5],x=l[6],v=l[7],M=l[8],T=l[9],C=l[10],b=l[11],_=l[12],B=l[13],O=l[14],D=l[15];if(s[0].setComponents(m-c,v-p,b-M,D-_).normalize(),s[1].setComponents(m+c,v+p,b+M,D+_).normalize(),s[2].setComponents(m+d,v+y,b+T,D+B).normalize(),s[3].setComponents(m-d,v-y,b-T,D-B).normalize(),s[4].setComponents(m-h,v-x,b-C,D-O).normalize(),i===sa)s[5].setComponents(m+h,v+x,b+C,D+O).normalize();else if(i===Dc)s[5].setComponents(h,x,C,O).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ps.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),ps.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ps)}intersectsSprite(t){return ps.center.set(0,0,0),ps.radius=.7071067811865476,ps.applyMatrix4(t.matrixWorld),this.intersectsSphere(ps)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(xc.x=l.normal.x>0?t.max.x:t.min.x,xc.y=l.normal.y>0?t.max.y:t.min.y,xc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(xc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Kx extends Go{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ot(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const j0=new rn,ph=new Hx,vc=new Oc,_c=new fe;class ib extends Wn{constructor(t=new ua,i=new Kx){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=i,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,i){const s=this.geometry,l=this.matrixWorld,c=t.params.Points.threshold,d=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),vc.copy(s.boundingSphere),vc.applyMatrix4(l),vc.radius+=c,t.ray.intersectsSphere(vc)===!1)return;j0.copy(l).invert(),ph.copy(t.ray).applyMatrix4(j0);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=h*h,p=s.index,x=s.attributes.position;if(p!==null){const v=Math.max(0,d.start),M=Math.min(p.count,d.start+d.count);for(let T=v,C=M;T<C;T++){const b=p.getX(T);_c.fromBufferAttribute(x,b),X0(_c,b,m,l,t,i,this)}}else{const v=Math.max(0,d.start),M=Math.min(x.count,d.start+d.count);for(let T=v,C=M;T<C;T++)_c.fromBufferAttribute(x,T),X0(_c,T,m,l,t,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function X0(r,t,i,s,l,c,d){const h=ph.distanceSqToPoint(r);if(h<i){const m=new fe;ph.closestPointToPoint(r,m),m.applyMatrix4(s);const p=l.ray.origin.distanceTo(m);if(p<l.near||p>l.far)return;c.push({distance:p,distanceToRay:Math.sqrt(h),point:m,index:t,face:null,faceIndex:null,barycoord:null,object:d})}}class ab extends Pn{constructor(t,i,s,l,c,d,h,m,p){super(t,i,s,l,c,d,h,m,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Qx extends Pn{constructor(t,i,s,l,c,d,h,m,p,y=br){if(y!==br&&y!==Rr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");s===void 0&&y===br&&(s=Es),s===void 0&&y===Rr&&(s=Cr),super(null,l,c,d,h,m,y,s,p),this.isDepthTexture=!0,this.image={width:t,height:i},this.magFilter=h!==void 0?h:Ti,this.minFilter=m!==void 0?m:Ti,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Pc extends ua{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const c=t/2,d=i/2,h=Math.floor(s),m=Math.floor(l),p=h+1,y=m+1,x=t/h,v=i/m,M=[],T=[],C=[],b=[];for(let _=0;_<y;_++){const B=_*v-d;for(let O=0;O<p;O++){const D=O*x-c;T.push(D,-B,0),C.push(0,0,1),b.push(O/h),b.push(1-_/m)}}for(let _=0;_<m;_++)for(let B=0;B<h;B++){const O=B+p*_,D=B+p*(_+1),W=B+1+p*(_+1),k=B+1+p*_;M.push(O,D,k),M.push(D,W,k)}this.setIndex(M),this.setAttribute("position",new Ms(T,3)),this.setAttribute("normal",new Ms(C,3)),this.setAttribute("uv",new Ms(b,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Pc(t.width,t.height,t.widthSegments,t.heightSegments)}}class sb extends Go{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=pS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class rb extends Go{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class ob extends qx{constructor(t=-1,i=1,s=1,l=-1,c=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=d,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,c,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-t,d=s+t,h=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,y=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,d=c+p*this.view.width,h-=y*this.view.offsetY,m=h-y*this.view.height}this.projectionMatrix.makeOrthographic(c,d,h,m,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class lb extends di{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t,this.index=0}}let cb=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=W0(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=W0();t=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=t}return t}};function W0(){return performance.now()}function q0(r,t,i,s){const l=ub(s);switch(i){case Rx:return r*t;case Dx:return r*t;case Ux:return r*t*2;case Lx:return r*t/l.components*l.byteLength;case Sh:return r*t/l.components*l.byteLength;case Ox:return r*t*2/l.components*l.byteLength;case bh:return r*t*2/l.components*l.byteLength;case Nx:return r*t*3/l.components*l.byteLength;case Ei:return r*t*4/l.components*l.byteLength;case Mh:return r*t*4/l.components*l.byteLength;case Ec:case Tc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Ac:case wc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Gd:case jd:return Math.max(r,16)*Math.max(t,8)/4;case kd:case Vd:return Math.max(r,8)*Math.max(t,8)/2;case Xd:case Wd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case qd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Yd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Zd:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Kd:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Qd:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Jd:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case $d:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case eh:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case th:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case nh:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case ih:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case ah:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case sh:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case rh:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case oh:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case Cc:case lh:case ch:return Math.ceil(r/4)*Math.ceil(t/4)*16;case Px:case uh:return Math.ceil(r/4)*Math.ceil(t/4)*8;case fh:case dh:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function ub(r){switch(r){case la:case Ax:return{byteLength:1,components:1};case zo:case wx:case Bo:return{byteLength:2,components:1};case _h:case yh:return{byteLength:2,components:4};case Es:case vh:case aa:return{byteLength:4,components:1};case Cx:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:xh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=xh);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Jx(){let r=null,t=!1,i=null,s=null;function l(c,d){i(c,d),s=r.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(s=r.requestAnimationFrame(l),t=!0)},stop:function(){r.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function fb(r){const t=new WeakMap;function i(h,m){const p=h.array,y=h.usage,x=p.byteLength,v=r.createBuffer();r.bindBuffer(m,v),r.bufferData(m,p,y),h.onUploadCallback();let M;if(p instanceof Float32Array)M=r.FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?M=r.HALF_FLOAT:M=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=r.SHORT;else if(p instanceof Uint32Array)M=r.UNSIGNED_INT;else if(p instanceof Int32Array)M=r.INT;else if(p instanceof Int8Array)M=r.BYTE;else if(p instanceof Uint8Array)M=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:v,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:x}}function s(h,m,p){const y=m.array,x=m.updateRanges;if(r.bindBuffer(p,h),x.length===0)r.bufferSubData(p,0,y);else{x.sort((M,T)=>M.start-T.start);let v=0;for(let M=1;M<x.length;M++){const T=x[v],C=x[M];C.start<=T.start+T.count+1?T.count=Math.max(T.count,C.start+C.count-T.start):(++v,x[v]=C)}x.length=v+1;for(let M=0,T=x.length;M<T;M++){const C=x[M];r.bufferSubData(p,C.start*y.BYTES_PER_ELEMENT,y,C.start,C.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),t.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=t.get(h);m&&(r.deleteBuffer(m.buffer),t.delete(h))}function d(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const y=t.get(h);(!y||y.version<h.version)&&t.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=t.get(h);if(p===void 0)t.set(h,i(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,h,m),p.version=h.version}}return{get:l,remove:c,update:d}}var db=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,hb=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,pb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,mb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,xb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,vb=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,_b=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,yb=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Sb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,bb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Mb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Eb=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Tb=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Ab=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,wb=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Cb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Rb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Nb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Db=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ub=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Lb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ob=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Pb=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,zb=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Ib=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Bb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Fb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Hb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,kb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Gb="gl_FragColor = linearToOutputTexel( gl_FragColor );",Vb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,jb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Xb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Wb=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,qb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Yb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Zb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Kb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Qb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Jb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,$b=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,eM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,tM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,nM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,iM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,aM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,sM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,rM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,oM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,cM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,uM=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,fM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,dM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,hM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,pM=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,mM=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gM=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xM=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,vM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_M=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,yM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,SM=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,MM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,EM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,TM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,AM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wM=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,CM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,RM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,NM=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,DM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,UM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,LM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,OM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,PM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,zM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,IM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,BM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,FM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,HM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,kM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,GM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,VM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,jM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,XM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,WM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,qM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,YM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ZM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,KM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,QM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,JM=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,$M=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,eE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,tE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,nE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,iE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,aE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,sE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,rE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,oE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,lE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,cE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,uE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const fE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,dE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,vE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,_E=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,yE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,SE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,bE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ME=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,EE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,TE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,AE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,CE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,RE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,NE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,DE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,UE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,LE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,OE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,PE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,zE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,IE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,BE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,FE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,HE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,kE=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,GE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,VE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,jE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,gt={alphahash_fragment:db,alphahash_pars_fragment:hb,alphamap_fragment:pb,alphamap_pars_fragment:mb,alphatest_fragment:gb,alphatest_pars_fragment:xb,aomap_fragment:vb,aomap_pars_fragment:_b,batching_pars_vertex:yb,batching_vertex:Sb,begin_vertex:bb,beginnormal_vertex:Mb,bsdfs:Eb,iridescence_fragment:Tb,bumpmap_pars_fragment:Ab,clipping_planes_fragment:wb,clipping_planes_pars_fragment:Cb,clipping_planes_pars_vertex:Rb,clipping_planes_vertex:Nb,color_fragment:Db,color_pars_fragment:Ub,color_pars_vertex:Lb,color_vertex:Ob,common:Pb,cube_uv_reflection_fragment:zb,defaultnormal_vertex:Ib,displacementmap_pars_vertex:Bb,displacementmap_vertex:Fb,emissivemap_fragment:Hb,emissivemap_pars_fragment:kb,colorspace_fragment:Gb,colorspace_pars_fragment:Vb,envmap_fragment:jb,envmap_common_pars_fragment:Xb,envmap_pars_fragment:Wb,envmap_pars_vertex:qb,envmap_physical_pars_fragment:aM,envmap_vertex:Yb,fog_vertex:Zb,fog_pars_vertex:Kb,fog_fragment:Qb,fog_pars_fragment:Jb,gradientmap_pars_fragment:$b,lightmap_pars_fragment:eM,lights_lambert_fragment:tM,lights_lambert_pars_fragment:nM,lights_pars_begin:iM,lights_toon_fragment:sM,lights_toon_pars_fragment:rM,lights_phong_fragment:oM,lights_phong_pars_fragment:lM,lights_physical_fragment:cM,lights_physical_pars_fragment:uM,lights_fragment_begin:fM,lights_fragment_maps:dM,lights_fragment_end:hM,logdepthbuf_fragment:pM,logdepthbuf_pars_fragment:mM,logdepthbuf_pars_vertex:gM,logdepthbuf_vertex:xM,map_fragment:vM,map_pars_fragment:_M,map_particle_fragment:yM,map_particle_pars_fragment:SM,metalnessmap_fragment:bM,metalnessmap_pars_fragment:MM,morphinstance_vertex:EM,morphcolor_vertex:TM,morphnormal_vertex:AM,morphtarget_pars_vertex:wM,morphtarget_vertex:CM,normal_fragment_begin:RM,normal_fragment_maps:NM,normal_pars_fragment:DM,normal_pars_vertex:UM,normal_vertex:LM,normalmap_pars_fragment:OM,clearcoat_normal_fragment_begin:PM,clearcoat_normal_fragment_maps:zM,clearcoat_pars_fragment:IM,iridescence_pars_fragment:BM,opaque_fragment:FM,packing:HM,premultiplied_alpha_fragment:kM,project_vertex:GM,dithering_fragment:VM,dithering_pars_fragment:jM,roughnessmap_fragment:XM,roughnessmap_pars_fragment:WM,shadowmap_pars_fragment:qM,shadowmap_pars_vertex:YM,shadowmap_vertex:ZM,shadowmask_pars_fragment:KM,skinbase_vertex:QM,skinning_pars_vertex:JM,skinning_vertex:$M,skinnormal_vertex:eE,specularmap_fragment:tE,specularmap_pars_fragment:nE,tonemapping_fragment:iE,tonemapping_pars_fragment:aE,transmission_fragment:sE,transmission_pars_fragment:rE,uv_pars_fragment:oE,uv_pars_vertex:lE,uv_vertex:cE,worldpos_vertex:uE,background_vert:fE,background_frag:dE,backgroundCube_vert:hE,backgroundCube_frag:pE,cube_vert:mE,cube_frag:gE,depth_vert:xE,depth_frag:vE,distanceRGBA_vert:_E,distanceRGBA_frag:yE,equirect_vert:SE,equirect_frag:bE,linedashed_vert:ME,linedashed_frag:EE,meshbasic_vert:TE,meshbasic_frag:AE,meshlambert_vert:wE,meshlambert_frag:CE,meshmatcap_vert:RE,meshmatcap_frag:NE,meshnormal_vert:DE,meshnormal_frag:UE,meshphong_vert:LE,meshphong_frag:OE,meshphysical_vert:PE,meshphysical_frag:zE,meshtoon_vert:IE,meshtoon_frag:BE,points_vert:FE,points_frag:HE,shadow_vert:kE,shadow_frag:GE,sprite_vert:VE,sprite_frag:jE},Pe={common:{diffuse:{value:new Ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new mt},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new mt}},envmap:{envMap:{value:null},envMapRotation:{value:new mt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new mt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new mt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new mt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new mt},normalScale:{value:new Wt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new mt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new mt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new mt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new mt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0},uvTransform:{value:new mt}},sprite:{diffuse:{value:new Ot(16777215)},opacity:{value:1},center:{value:new Wt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new mt},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0}}},Di={basic:{uniforms:On([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.fog]),vertexShader:gt.meshbasic_vert,fragmentShader:gt.meshbasic_frag},lambert:{uniforms:On([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new Ot(0)}}]),vertexShader:gt.meshlambert_vert,fragmentShader:gt.meshlambert_frag},phong:{uniforms:On([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new Ot(0)},specular:{value:new Ot(1118481)},shininess:{value:30}}]),vertexShader:gt.meshphong_vert,fragmentShader:gt.meshphong_frag},standard:{uniforms:On([Pe.common,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.roughnessmap,Pe.metalnessmap,Pe.fog,Pe.lights,{emissive:{value:new Ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag},toon:{uniforms:On([Pe.common,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.gradientmap,Pe.fog,Pe.lights,{emissive:{value:new Ot(0)}}]),vertexShader:gt.meshtoon_vert,fragmentShader:gt.meshtoon_frag},matcap:{uniforms:On([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,{matcap:{value:null}}]),vertexShader:gt.meshmatcap_vert,fragmentShader:gt.meshmatcap_frag},points:{uniforms:On([Pe.points,Pe.fog]),vertexShader:gt.points_vert,fragmentShader:gt.points_frag},dashed:{uniforms:On([Pe.common,Pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:gt.linedashed_vert,fragmentShader:gt.linedashed_frag},depth:{uniforms:On([Pe.common,Pe.displacementmap]),vertexShader:gt.depth_vert,fragmentShader:gt.depth_frag},normal:{uniforms:On([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,{opacity:{value:1}}]),vertexShader:gt.meshnormal_vert,fragmentShader:gt.meshnormal_frag},sprite:{uniforms:On([Pe.sprite,Pe.fog]),vertexShader:gt.sprite_vert,fragmentShader:gt.sprite_frag},background:{uniforms:{uvTransform:{value:new mt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:gt.background_vert,fragmentShader:gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new mt}},vertexShader:gt.backgroundCube_vert,fragmentShader:gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:gt.cube_vert,fragmentShader:gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:gt.equirect_vert,fragmentShader:gt.equirect_frag},distanceRGBA:{uniforms:On([Pe.common,Pe.displacementmap,{referencePosition:{value:new fe},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:gt.distanceRGBA_vert,fragmentShader:gt.distanceRGBA_frag},shadow:{uniforms:On([Pe.lights,Pe.fog,{color:{value:new Ot(0)},opacity:{value:1}}]),vertexShader:gt.shadow_vert,fragmentShader:gt.shadow_frag}};Di.physical={uniforms:On([Di.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new mt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new mt},clearcoatNormalScale:{value:new Wt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new mt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new mt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new mt},sheen:{value:0},sheenColor:{value:new Ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new mt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new mt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new mt},transmissionSamplerSize:{value:new Wt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new mt},attenuationDistance:{value:0},attenuationColor:{value:new Ot(0)},specularColor:{value:new Ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new mt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new mt},anisotropyVector:{value:new Wt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new mt}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag};const yc={r:0,b:0,g:0},ms=new ca,XE=new rn;function WE(r,t,i,s,l,c,d){const h=new Ot(0);let m=c===!0?0:1,p,y,x=null,v=0,M=null;function T(O){let D=O.isScene===!0?O.background:null;return D&&D.isTexture&&(D=(O.backgroundBlurriness>0?i:t).get(D)),D}function C(O){let D=!1;const W=T(O);W===null?_(h,m):W&&W.isColor&&(_(W,1),D=!0);const k=r.xr.getEnvironmentBlendMode();k==="additive"?s.buffers.color.setClear(0,0,0,1,d):k==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,d),(r.autoClear||D)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function b(O,D){const W=T(D);W&&(W.isCubeTexture||W.mapping===Lc)?(y===void 0&&(y=new ra(new Vo(1,1,1),new Xa({name:"BackgroundCubeMaterial",uniforms:Dr(Di.backgroundCube.uniforms),vertexShader:Di.backgroundCube.vertexShader,fragmentShader:Di.backgroundCube.fragmentShader,side:Xn,depthTest:!1,depthWrite:!1,fog:!1})),y.geometry.deleteAttribute("normal"),y.geometry.deleteAttribute("uv"),y.onBeforeRender=function(k,I,Q){this.matrixWorld.copyPosition(Q.matrixWorld)},Object.defineProperty(y.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(y)),ms.copy(D.backgroundRotation),ms.x*=-1,ms.y*=-1,ms.z*=-1,W.isCubeTexture&&W.isRenderTargetTexture===!1&&(ms.y*=-1,ms.z*=-1),y.material.uniforms.envMap.value=W,y.material.uniforms.flipEnvMap.value=W.isCubeTexture&&W.isRenderTargetTexture===!1?-1:1,y.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,y.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,y.material.uniforms.backgroundRotation.value.setFromMatrix4(XE.makeRotationFromEuler(ms)),y.material.toneMapped=Lt.getTransfer(W.colorSpace)!==jt,(x!==W||v!==W.version||M!==r.toneMapping)&&(y.material.needsUpdate=!0,x=W,v=W.version,M=r.toneMapping),y.layers.enableAll(),O.unshift(y,y.geometry,y.material,0,0,null)):W&&W.isTexture&&(p===void 0&&(p=new ra(new Pc(2,2),new Xa({name:"BackgroundMaterial",uniforms:Dr(Di.background.uniforms),vertexShader:Di.background.vertexShader,fragmentShader:Di.background.fragmentShader,side:ja,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=W,p.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,p.material.toneMapped=Lt.getTransfer(W.colorSpace)!==jt,W.matrixAutoUpdate===!0&&W.updateMatrix(),p.material.uniforms.uvTransform.value.copy(W.matrix),(x!==W||v!==W.version||M!==r.toneMapping)&&(p.material.needsUpdate=!0,x=W,v=W.version,M=r.toneMapping),p.layers.enableAll(),O.unshift(p,p.geometry,p.material,0,0,null))}function _(O,D){O.getRGB(yc,Wx(r)),s.buffers.color.setClear(yc.r,yc.g,yc.b,D,d)}function B(){y!==void 0&&(y.geometry.dispose(),y.material.dispose(),y=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return h},setClearColor:function(O,D=1){h.set(O),m=D,_(h,m)},getClearAlpha:function(){return m},setClearAlpha:function(O){m=O,_(h,m)},render:C,addToRenderList:b,dispose:B}}function qE(r,t){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=v(null);let c=l,d=!1;function h(N,V,he,le,ge){let be=!1;const z=x(le,he,V);c!==z&&(c=z,p(c.object)),be=M(N,le,he,ge),be&&T(N,le,he,ge),ge!==null&&t.update(ge,r.ELEMENT_ARRAY_BUFFER),(be||d)&&(d=!1,D(N,V,he,le),ge!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(ge).buffer))}function m(){return r.createVertexArray()}function p(N){return r.bindVertexArray(N)}function y(N){return r.deleteVertexArray(N)}function x(N,V,he){const le=he.wireframe===!0;let ge=s[N.id];ge===void 0&&(ge={},s[N.id]=ge);let be=ge[V.id];be===void 0&&(be={},ge[V.id]=be);let z=be[le];return z===void 0&&(z=v(m()),be[le]=z),z}function v(N){const V=[],he=[],le=[];for(let ge=0;ge<i;ge++)V[ge]=0,he[ge]=0,le[ge]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:he,attributeDivisors:le,object:N,attributes:{},index:null}}function M(N,V,he,le){const ge=c.attributes,be=V.attributes;let z=0;const ee=he.getAttributes();for(const J in ee)if(ee[J].location>=0){const F=ge[J];let E=be[J];if(E===void 0&&(J==="instanceMatrix"&&N.instanceMatrix&&(E=N.instanceMatrix),J==="instanceColor"&&N.instanceColor&&(E=N.instanceColor)),F===void 0||F.attribute!==E||E&&F.data!==E.data)return!0;z++}return c.attributesNum!==z||c.index!==le}function T(N,V,he,le){const ge={},be=V.attributes;let z=0;const ee=he.getAttributes();for(const J in ee)if(ee[J].location>=0){let F=be[J];F===void 0&&(J==="instanceMatrix"&&N.instanceMatrix&&(F=N.instanceMatrix),J==="instanceColor"&&N.instanceColor&&(F=N.instanceColor));const E={};E.attribute=F,F&&F.data&&(E.data=F.data),ge[J]=E,z++}c.attributes=ge,c.attributesNum=z,c.index=le}function C(){const N=c.newAttributes;for(let V=0,he=N.length;V<he;V++)N[V]=0}function b(N){_(N,0)}function _(N,V){const he=c.newAttributes,le=c.enabledAttributes,ge=c.attributeDivisors;he[N]=1,le[N]===0&&(r.enableVertexAttribArray(N),le[N]=1),ge[N]!==V&&(r.vertexAttribDivisor(N,V),ge[N]=V)}function B(){const N=c.newAttributes,V=c.enabledAttributes;for(let he=0,le=V.length;he<le;he++)V[he]!==N[he]&&(r.disableVertexAttribArray(he),V[he]=0)}function O(N,V,he,le,ge,be,z){z===!0?r.vertexAttribIPointer(N,V,he,ge,be):r.vertexAttribPointer(N,V,he,le,ge,be)}function D(N,V,he,le){C();const ge=le.attributes,be=he.getAttributes(),z=V.defaultAttributeValues;for(const ee in be){const J=be[ee];if(J.location>=0){let Me=ge[ee];if(Me===void 0&&(ee==="instanceMatrix"&&N.instanceMatrix&&(Me=N.instanceMatrix),ee==="instanceColor"&&N.instanceColor&&(Me=N.instanceColor)),Me!==void 0){const F=Me.normalized,E=Me.itemSize,j=t.get(Me);if(j===void 0)continue;const ce=j.buffer,G=j.type,$=j.bytesPerElement,de=G===r.INT||G===r.UNSIGNED_INT||Me.gpuType===vh;if(Me.isInterleavedBufferAttribute){const re=Me.data,Te=re.stride,Ce=Me.offset;if(re.isInstancedInterleavedBuffer){for(let Ue=0;Ue<J.locationSize;Ue++)_(J.location+Ue,re.meshPerAttribute);N.isInstancedMesh!==!0&&le._maxInstanceCount===void 0&&(le._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let Ue=0;Ue<J.locationSize;Ue++)b(J.location+Ue);r.bindBuffer(r.ARRAY_BUFFER,ce);for(let Ue=0;Ue<J.locationSize;Ue++)O(J.location+Ue,E/J.locationSize,G,F,Te*$,(Ce+E/J.locationSize*Ue)*$,de)}else{if(Me.isInstancedBufferAttribute){for(let re=0;re<J.locationSize;re++)_(J.location+re,Me.meshPerAttribute);N.isInstancedMesh!==!0&&le._maxInstanceCount===void 0&&(le._maxInstanceCount=Me.meshPerAttribute*Me.count)}else for(let re=0;re<J.locationSize;re++)b(J.location+re);r.bindBuffer(r.ARRAY_BUFFER,ce);for(let re=0;re<J.locationSize;re++)O(J.location+re,E/J.locationSize,G,F,E*$,E/J.locationSize*re*$,de)}}else if(z!==void 0){const F=z[ee];if(F!==void 0)switch(F.length){case 2:r.vertexAttrib2fv(J.location,F);break;case 3:r.vertexAttrib3fv(J.location,F);break;case 4:r.vertexAttrib4fv(J.location,F);break;default:r.vertexAttrib1fv(J.location,F)}}}}B()}function W(){Q();for(const N in s){const V=s[N];for(const he in V){const le=V[he];for(const ge in le)y(le[ge].object),delete le[ge];delete V[he]}delete s[N]}}function k(N){if(s[N.id]===void 0)return;const V=s[N.id];for(const he in V){const le=V[he];for(const ge in le)y(le[ge].object),delete le[ge];delete V[he]}delete s[N.id]}function I(N){for(const V in s){const he=s[V];if(he[N.id]===void 0)continue;const le=he[N.id];for(const ge in le)y(le[ge].object),delete le[ge];delete he[N.id]}}function Q(){U(),d=!0,c!==l&&(c=l,p(c.object))}function U(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:Q,resetDefaultState:U,dispose:W,releaseStatesOfGeometry:k,releaseStatesOfProgram:I,initAttributes:C,enableAttribute:b,disableUnusedAttributes:B}}function YE(r,t,i){let s;function l(p){s=p}function c(p,y){r.drawArrays(s,p,y),i.update(y,s,1)}function d(p,y,x){x!==0&&(r.drawArraysInstanced(s,p,y,x),i.update(y,s,x))}function h(p,y,x){if(x===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,y,0,x);let M=0;for(let T=0;T<x;T++)M+=y[T];i.update(M,s,1)}function m(p,y,x,v){if(x===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let T=0;T<p.length;T++)d(p[T],y[T],v[T]);else{M.multiDrawArraysInstancedWEBGL(s,p,0,y,0,v,0,x);let T=0;for(let C=0;C<x;C++)T+=y[C]*v[C];i.update(T,s,1)}}this.setMode=l,this.render=c,this.renderInstances=d,this.renderMultiDraw=h,this.renderMultiDrawInstances=m}function ZE(r,t,i,s){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const I=t.get("EXT_texture_filter_anisotropic");l=r.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(I){return!(I!==Ei&&s.convert(I)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(I){const Q=I===Bo&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(I!==la&&s.convert(I)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==aa&&!Q)}function m(I){if(I==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const y=m(p);y!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",y,"instead."),p=y);const x=i.logarithmicDepthBuffer===!0,v=i.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),M=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),T=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=r.getParameter(r.MAX_TEXTURE_SIZE),b=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),_=r.getParameter(r.MAX_VERTEX_ATTRIBS),B=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),O=r.getParameter(r.MAX_VARYING_VECTORS),D=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),W=T>0,k=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:d,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:x,reverseDepthBuffer:v,maxTextures:M,maxVertexTextures:T,maxTextureSize:C,maxCubemapSize:b,maxAttributes:_,maxVertexUniforms:B,maxVaryings:O,maxFragmentUniforms:D,vertexTextures:W,maxSamples:k}}function KE(r){const t=this;let i=null,s=0,l=!1,c=!1;const d=new xs,h=new mt,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(x,v){const M=x.length!==0||v||s!==0||l;return l=v,s=x.length,M},this.beginShadows=function(){c=!0,y(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(x,v){i=y(x,v,0)},this.setState=function(x,v,M){const T=x.clippingPlanes,C=x.clipIntersection,b=x.clipShadows,_=r.get(x);if(!l||T===null||T.length===0||c&&!b)c?y(null):p();else{const B=c?0:s,O=B*4;let D=_.clippingState||null;m.value=D,D=y(T,v,O,M);for(let W=0;W!==O;++W)D[W]=i[W];_.clippingState=D,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=B}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function y(x,v,M,T){const C=x!==null?x.length:0;let b=null;if(C!==0){if(b=m.value,T!==!0||b===null){const _=M+C*4,B=v.matrixWorldInverse;h.getNormalMatrix(B),(b===null||b.length<_)&&(b=new Float32Array(_));for(let O=0,D=M;O!==C;++O,D+=4)d.copy(x[O]).applyMatrix4(B,h),d.normal.toArray(b,D),b[D+3]=d.constant}m.value=b,m.needsUpdate=!0}return t.numPlanes=C,t.numIntersection=0,b}}function QE(r){let t=new WeakMap;function i(d,h){return h===Id?d.mapping=Ar:h===Bd&&(d.mapping=wr),d}function s(d){if(d&&d.isTexture){const h=d.mapping;if(h===Id||h===Bd)if(t.has(d)){const m=t.get(d).texture;return i(m,d.mapping)}else{const m=d.image;if(m&&m.height>0){const p=new JS(m.height);return p.fromEquirectangularTexture(r,d),t.set(d,p),d.addEventListener("dispose",l),i(p.texture,d.mapping)}else return null}}return d}function l(d){const h=d.target;h.removeEventListener("dispose",l);const m=t.get(h);m!==void 0&&(t.delete(h),m.dispose())}function c(){t=new WeakMap}return{get:s,dispose:c}}const yr=4,Y0=[.125,.215,.35,.446,.526,.582],ys=20,yd=new ob,Z0=new Ot;let Sd=null,bd=0,Md=0,Ed=!1;const vs=(1+Math.sqrt(5))/2,vr=1/vs,K0=[new fe(-vs,vr,0),new fe(vs,vr,0),new fe(-vr,0,vs),new fe(vr,0,vs),new fe(0,vs,-vr),new fe(0,vs,vr),new fe(-1,1,-1),new fe(1,1,-1),new fe(-1,1,1),new fe(1,1,1)];class Q0{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,s=.1,l=100){Sd=this._renderer.getRenderTarget(),bd=this._renderer.getActiveCubeFace(),Md=this._renderer.getActiveMipmapLevel(),Ed=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,s,l,c),i>0&&this._blur(c,0,0,i),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ex(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Sd,bd,Md),this._renderer.xr.enabled=Ed,t.scissorTest=!1,Sc(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Ar||t.mapping===wr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Sd=this._renderer.getRenderTarget(),bd=this._renderer.getActiveCubeFace(),Md=this._renderer.getActiveMipmapLevel(),Ed=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Ui,minFilter:Ui,generateMipmaps:!1,type:Bo,format:Ei,colorSpace:Nr,depthBuffer:!1},l=J0(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=J0(t,i,s);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=JE(c)),this._blurMaterial=$E(c,t,i)}return l}_compileMaterial(t){const i=new ra(this._lodPlanes[0],t);this._renderer.compile(i,yd)}_sceneToCubeUV(t,i,s,l){const h=new di(90,1,i,s),m=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],y=this._renderer,x=y.autoClear,v=y.toneMapping;y.getClearColor(Z0),y.toneMapping=Va,y.autoClear=!1;const M=new Vx({name:"PMREM.Background",side:Xn,depthWrite:!1,depthTest:!1}),T=new ra(new Vo,M);let C=!1;const b=t.background;b?b.isColor&&(M.color.copy(b),t.background=null,C=!0):(M.color.copy(Z0),C=!0);for(let _=0;_<6;_++){const B=_%3;B===0?(h.up.set(0,m[_],0),h.lookAt(p[_],0,0)):B===1?(h.up.set(0,0,m[_]),h.lookAt(0,p[_],0)):(h.up.set(0,m[_],0),h.lookAt(0,0,p[_]));const O=this._cubeSize;Sc(l,B*O,_>2?O:0,O,O),y.setRenderTarget(l),C&&y.render(T,h),y.render(t,h)}T.geometry.dispose(),T.material.dispose(),y.toneMapping=v,y.autoClear=x,t.background=b}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===Ar||t.mapping===wr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=ex()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=$0());const c=l?this._cubemapMaterial:this._equirectMaterial,d=new ra(this._lodPlanes[0],c),h=c.uniforms;h.envMap.value=t;const m=this._cubeSize;Sc(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(d,yd)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let c=1;c<l;c++){const d=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),h=K0[(l-c-1)%K0.length];this._blur(t,c-1,c,d,h)}i.autoClear=s}_blur(t,i,s,l,c){const d=this._pingPongRenderTarget;this._halfBlur(t,d,i,s,l,"latitudinal",c),this._halfBlur(d,t,s,s,l,"longitudinal",c)}_halfBlur(t,i,s,l,c,d,h){const m=this._renderer,p=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const y=3,x=new ra(this._lodPlanes[l],p),v=p.uniforms,M=this._sizeLods[s]-1,T=isFinite(c)?Math.PI/(2*M):2*Math.PI/(2*ys-1),C=c/T,b=isFinite(c)?1+Math.floor(y*C):ys;b>ys&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${b} samples when the maximum is set to ${ys}`);const _=[];let B=0;for(let I=0;I<ys;++I){const Q=I/C,U=Math.exp(-Q*Q/2);_.push(U),I===0?B+=U:I<b&&(B+=2*U)}for(let I=0;I<_.length;I++)_[I]=_[I]/B;v.envMap.value=t.texture,v.samples.value=b,v.weights.value=_,v.latitudinal.value=d==="latitudinal",h&&(v.poleAxis.value=h);const{_lodMax:O}=this;v.dTheta.value=T,v.mipInt.value=O-s;const D=this._sizeLods[l],W=3*D*(l>O-yr?l-O+yr:0),k=4*(this._cubeSize-D);Sc(i,W,k,3*D,2*D),m.setRenderTarget(i),m.render(x,yd)}}function JE(r){const t=[],i=[],s=[];let l=r;const c=r-yr+1+Y0.length;for(let d=0;d<c;d++){const h=Math.pow(2,l);i.push(h);let m=1/h;d>r-yr?m=Y0[d-r+yr-1]:d===0&&(m=0),s.push(m);const p=1/(h-2),y=-p,x=1+p,v=[y,y,x,y,x,x,y,y,x,x,y,x],M=6,T=6,C=3,b=2,_=1,B=new Float32Array(C*T*M),O=new Float32Array(b*T*M),D=new Float32Array(_*T*M);for(let k=0;k<M;k++){const I=k%3*2/3-1,Q=k>2?0:-1,U=[I,Q,0,I+2/3,Q,0,I+2/3,Q+1,0,I,Q,0,I+2/3,Q+1,0,I,Q+1,0];B.set(U,C*T*k),O.set(v,b*T*k);const N=[k,k,k,k,k,k];D.set(N,_*T*k)}const W=new ua;W.setAttribute("position",new hi(B,C)),W.setAttribute("uv",new hi(O,b)),W.setAttribute("faceIndex",new hi(D,_)),t.push(W),l>yr&&l--}return{lodPlanes:t,sizeLods:i,sigmas:s}}function J0(r,t,i){const s=new Ts(r,t,i);return s.texture.mapping=Lc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Sc(r,t,i,s,l){r.viewport.set(t,i,s,l),r.scissor.set(t,i,s,l)}function $E(r,t,i){const s=new Float32Array(ys),l=new fe(0,1,0);return new Xa({name:"SphericalGaussianBlur",defines:{n:ys,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Eh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ga,depthTest:!1,depthWrite:!1})}function $0(){return new Xa({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Eh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ga,depthTest:!1,depthWrite:!1})}function ex(){return new Xa({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Eh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ga,depthTest:!1,depthWrite:!1})}function Eh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function e1(r){let t=new WeakMap,i=null;function s(h){if(h&&h.isTexture){const m=h.mapping,p=m===Id||m===Bd,y=m===Ar||m===wr;if(p||y){let x=t.get(h);const v=x!==void 0?x.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==v)return i===null&&(i=new Q0(r)),x=p?i.fromEquirectangular(h,x):i.fromCubemap(h,x),x.texture.pmremVersion=h.pmremVersion,t.set(h,x),x.texture;if(x!==void 0)return x.texture;{const M=h.image;return p&&M&&M.height>0||y&&M&&l(M)?(i===null&&(i=new Q0(r)),x=p?i.fromEquirectangular(h):i.fromCubemap(h),x.texture.pmremVersion=h.pmremVersion,t.set(h,x),h.addEventListener("dispose",c),x.texture):null}}}return h}function l(h){let m=0;const p=6;for(let y=0;y<p;y++)h[y]!==void 0&&m++;return m===p}function c(h){const m=h.target;m.removeEventListener("dispose",c);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function d(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function t1(r){const t={};function i(s){if(t[s]!==void 0)return t[s];let l;switch(s){case"WEBGL_depth_texture":l=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=r.getExtension(s)}return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&_r("THREE.WebGLRenderer: "+s+" extension not supported."),l}}}function n1(r,t,i,s){const l={},c=new WeakMap;function d(x){const v=x.target;v.index!==null&&t.remove(v.index);for(const T in v.attributes)t.remove(v.attributes[T]);v.removeEventListener("dispose",d),delete l[v.id];const M=c.get(v);M&&(t.remove(M),c.delete(v)),s.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,i.memory.geometries--}function h(x,v){return l[v.id]===!0||(v.addEventListener("dispose",d),l[v.id]=!0,i.memory.geometries++),v}function m(x){const v=x.attributes;for(const M in v)t.update(v[M],r.ARRAY_BUFFER)}function p(x){const v=[],M=x.index,T=x.attributes.position;let C=0;if(M!==null){const B=M.array;C=M.version;for(let O=0,D=B.length;O<D;O+=3){const W=B[O+0],k=B[O+1],I=B[O+2];v.push(W,k,k,I,I,W)}}else if(T!==void 0){const B=T.array;C=T.version;for(let O=0,D=B.length/3-1;O<D;O+=3){const W=O+0,k=O+1,I=O+2;v.push(W,k,k,I,I,W)}}else return;const b=new(Ix(v)?Xx:jx)(v,1);b.version=C;const _=c.get(x);_&&t.remove(_),c.set(x,b)}function y(x){const v=c.get(x);if(v){const M=x.index;M!==null&&v.version<M.version&&p(x)}else p(x);return c.get(x)}return{get:h,update:m,getWireframeAttribute:y}}function i1(r,t,i){let s;function l(v){s=v}let c,d;function h(v){c=v.type,d=v.bytesPerElement}function m(v,M){r.drawElements(s,M,c,v*d),i.update(M,s,1)}function p(v,M,T){T!==0&&(r.drawElementsInstanced(s,M,c,v*d,T),i.update(M,s,T))}function y(v,M,T){if(T===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,M,0,c,v,0,T);let b=0;for(let _=0;_<T;_++)b+=M[_];i.update(b,s,1)}function x(v,M,T,C){if(T===0)return;const b=t.get("WEBGL_multi_draw");if(b===null)for(let _=0;_<v.length;_++)p(v[_]/d,M[_],C[_]);else{b.multiDrawElementsInstancedWEBGL(s,M,0,c,v,0,C,0,T);let _=0;for(let B=0;B<T;B++)_+=M[B]*C[B];i.update(_,s,1)}}this.setMode=l,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=y,this.renderMultiDrawInstances=x}function a1(r){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,d,h){switch(i.calls++,d){case r.TRIANGLES:i.triangles+=h*(c/3);break;case r.LINES:i.lines+=h*(c/2);break;case r.LINE_STRIP:i.lines+=h*(c-1);break;case r.LINE_LOOP:i.lines+=h*c;break;case r.POINTS:i.points+=h*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function s1(r,t,i){const s=new WeakMap,l=new sn;function c(d,h,m){const p=d.morphTargetInfluences,y=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,x=y!==void 0?y.length:0;let v=s.get(h);if(v===void 0||v.count!==x){let U=function(){I.dispose(),s.delete(h),h.removeEventListener("dispose",U)};v!==void 0&&v.texture.dispose();const M=h.morphAttributes.position!==void 0,T=h.morphAttributes.normal!==void 0,C=h.morphAttributes.color!==void 0,b=h.morphAttributes.position||[],_=h.morphAttributes.normal||[],B=h.morphAttributes.color||[];let O=0;M===!0&&(O=1),T===!0&&(O=2),C===!0&&(O=3);let D=h.attributes.position.count*O,W=1;D>t.maxTextureSize&&(W=Math.ceil(D/t.maxTextureSize),D=t.maxTextureSize);const k=new Float32Array(D*W*4*x),I=new Fx(k,D,W,x);I.type=aa,I.needsUpdate=!0;const Q=O*4;for(let N=0;N<x;N++){const V=b[N],he=_[N],le=B[N],ge=D*W*4*N;for(let be=0;be<V.count;be++){const z=be*Q;M===!0&&(l.fromBufferAttribute(V,be),k[ge+z+0]=l.x,k[ge+z+1]=l.y,k[ge+z+2]=l.z,k[ge+z+3]=0),T===!0&&(l.fromBufferAttribute(he,be),k[ge+z+4]=l.x,k[ge+z+5]=l.y,k[ge+z+6]=l.z,k[ge+z+7]=0),C===!0&&(l.fromBufferAttribute(le,be),k[ge+z+8]=l.x,k[ge+z+9]=l.y,k[ge+z+10]=l.z,k[ge+z+11]=le.itemSize===4?l.w:1)}}v={count:x,texture:I,size:new Wt(D,W)},s.set(h,v),h.addEventListener("dispose",U)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",d.morphTexture,i);else{let M=0;for(let C=0;C<p.length;C++)M+=p[C];const T=h.morphTargetsRelative?1:1-M;m.getUniforms().setValue(r,"morphTargetBaseInfluence",T),m.getUniforms().setValue(r,"morphTargetInfluences",p)}m.getUniforms().setValue(r,"morphTargetsTexture",v.texture,i),m.getUniforms().setValue(r,"morphTargetsTextureSize",v.size)}return{update:c}}function r1(r,t,i,s){let l=new WeakMap;function c(m){const p=s.render.frame,y=m.geometry,x=t.get(m,y);if(l.get(x)!==p&&(t.update(x),l.set(x,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",h)===!1&&m.addEventListener("dispose",h),l.get(m)!==p&&(i.update(m.instanceMatrix,r.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,r.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const v=m.skeleton;l.get(v)!==p&&(v.update(),l.set(v,p))}return x}function d(){l=new WeakMap}function h(m){const p=m.target;p.removeEventListener("dispose",h),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:d}}const $x=new Pn,tx=new Qx(1,1),ev=new Fx,tv=new PS,nv=new Yx,nx=[],ix=[],ax=new Float32Array(16),sx=new Float32Array(9),rx=new Float32Array(4);function Lr(r,t,i){const s=r[0];if(s<=0||s>0)return r;const l=t*i;let c=nx[l];if(c===void 0&&(c=new Float32Array(l),nx[l]=c),t!==0){s.toArray(c,0);for(let d=1,h=0;d!==t;++d)h+=i,r[d].toArray(c,h)}return c}function mn(r,t){if(r.length!==t.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==t[i])return!1;return!0}function gn(r,t){for(let i=0,s=t.length;i<s;i++)r[i]=t[i]}function zc(r,t){let i=ix[t];i===void 0&&(i=new Int32Array(t),ix[t]=i);for(let s=0;s!==t;++s)i[s]=r.allocateTextureUnit();return i}function o1(r,t){const i=this.cache;i[0]!==t&&(r.uniform1f(this.addr,t),i[0]=t)}function l1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(mn(i,t))return;r.uniform2fv(this.addr,t),gn(i,t)}}function c1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(mn(i,t))return;r.uniform3fv(this.addr,t),gn(i,t)}}function u1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(mn(i,t))return;r.uniform4fv(this.addr,t),gn(i,t)}}function f1(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(mn(i,t))return;r.uniformMatrix2fv(this.addr,!1,t),gn(i,t)}else{if(mn(i,s))return;rx.set(s),r.uniformMatrix2fv(this.addr,!1,rx),gn(i,s)}}function d1(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(mn(i,t))return;r.uniformMatrix3fv(this.addr,!1,t),gn(i,t)}else{if(mn(i,s))return;sx.set(s),r.uniformMatrix3fv(this.addr,!1,sx),gn(i,s)}}function h1(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(mn(i,t))return;r.uniformMatrix4fv(this.addr,!1,t),gn(i,t)}else{if(mn(i,s))return;ax.set(s),r.uniformMatrix4fv(this.addr,!1,ax),gn(i,s)}}function p1(r,t){const i=this.cache;i[0]!==t&&(r.uniform1i(this.addr,t),i[0]=t)}function m1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(mn(i,t))return;r.uniform2iv(this.addr,t),gn(i,t)}}function g1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(mn(i,t))return;r.uniform3iv(this.addr,t),gn(i,t)}}function x1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(mn(i,t))return;r.uniform4iv(this.addr,t),gn(i,t)}}function v1(r,t){const i=this.cache;i[0]!==t&&(r.uniform1ui(this.addr,t),i[0]=t)}function _1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(mn(i,t))return;r.uniform2uiv(this.addr,t),gn(i,t)}}function y1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(mn(i,t))return;r.uniform3uiv(this.addr,t),gn(i,t)}}function S1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(mn(i,t))return;r.uniform4uiv(this.addr,t),gn(i,t)}}function b1(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(tx.compareFunction=zx,c=tx):c=$x,i.setTexture2D(t||c,l)}function M1(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||tv,l)}function E1(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||nv,l)}function T1(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||ev,l)}function A1(r){switch(r){case 5126:return o1;case 35664:return l1;case 35665:return c1;case 35666:return u1;case 35674:return f1;case 35675:return d1;case 35676:return h1;case 5124:case 35670:return p1;case 35667:case 35671:return m1;case 35668:case 35672:return g1;case 35669:case 35673:return x1;case 5125:return v1;case 36294:return _1;case 36295:return y1;case 36296:return S1;case 35678:case 36198:case 36298:case 36306:case 35682:return b1;case 35679:case 36299:case 36307:return M1;case 35680:case 36300:case 36308:case 36293:return E1;case 36289:case 36303:case 36311:case 36292:return T1}}function w1(r,t){r.uniform1fv(this.addr,t)}function C1(r,t){const i=Lr(t,this.size,2);r.uniform2fv(this.addr,i)}function R1(r,t){const i=Lr(t,this.size,3);r.uniform3fv(this.addr,i)}function N1(r,t){const i=Lr(t,this.size,4);r.uniform4fv(this.addr,i)}function D1(r,t){const i=Lr(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function U1(r,t){const i=Lr(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function L1(r,t){const i=Lr(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function O1(r,t){r.uniform1iv(this.addr,t)}function P1(r,t){r.uniform2iv(this.addr,t)}function z1(r,t){r.uniform3iv(this.addr,t)}function I1(r,t){r.uniform4iv(this.addr,t)}function B1(r,t){r.uniform1uiv(this.addr,t)}function F1(r,t){r.uniform2uiv(this.addr,t)}function H1(r,t){r.uniform3uiv(this.addr,t)}function k1(r,t){r.uniform4uiv(this.addr,t)}function G1(r,t,i){const s=this.cache,l=t.length,c=zc(i,l);mn(s,c)||(r.uniform1iv(this.addr,c),gn(s,c));for(let d=0;d!==l;++d)i.setTexture2D(t[d]||$x,c[d])}function V1(r,t,i){const s=this.cache,l=t.length,c=zc(i,l);mn(s,c)||(r.uniform1iv(this.addr,c),gn(s,c));for(let d=0;d!==l;++d)i.setTexture3D(t[d]||tv,c[d])}function j1(r,t,i){const s=this.cache,l=t.length,c=zc(i,l);mn(s,c)||(r.uniform1iv(this.addr,c),gn(s,c));for(let d=0;d!==l;++d)i.setTextureCube(t[d]||nv,c[d])}function X1(r,t,i){const s=this.cache,l=t.length,c=zc(i,l);mn(s,c)||(r.uniform1iv(this.addr,c),gn(s,c));for(let d=0;d!==l;++d)i.setTexture2DArray(t[d]||ev,c[d])}function W1(r){switch(r){case 5126:return w1;case 35664:return C1;case 35665:return R1;case 35666:return N1;case 35674:return D1;case 35675:return U1;case 35676:return L1;case 5124:case 35670:return O1;case 35667:case 35671:return P1;case 35668:case 35672:return z1;case 35669:case 35673:return I1;case 5125:return B1;case 36294:return F1;case 36295:return H1;case 36296:return k1;case 35678:case 36198:case 36298:case 36306:case 35682:return G1;case 35679:case 36299:case 36307:return V1;case 35680:case 36300:case 36308:case 36293:return j1;case 36289:case 36303:case 36311:case 36292:return X1}}class q1{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=A1(i.type)}}class Y1{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=W1(i.type)}}class Z1{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let c=0,d=l.length;c!==d;++c){const h=l[c];h.setValue(t,i[h.id],s)}}}const Td=/(\w+)(\])?(\[|\.)?/g;function ox(r,t){r.seq.push(t),r.map[t.id]=t}function K1(r,t,i){const s=r.name,l=s.length;for(Td.lastIndex=0;;){const c=Td.exec(s),d=Td.lastIndex;let h=c[1];const m=c[2]==="]",p=c[3];if(m&&(h=h|0),p===void 0||p==="["&&d+2===l){ox(i,p===void 0?new q1(h,r,t):new Y1(h,r,t));break}else{let x=i.map[h];x===void 0&&(x=new Z1(h),ox(i,x)),i=x}}}class Rc{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<s;++l){const c=t.getActiveUniform(i,l),d=t.getUniformLocation(i,c.name);K1(c,d,this)}}setValue(t,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let c=0,d=i.length;c!==d;++c){const h=i[c],m=s[h.id];m.needsUpdate!==!1&&h.setValue(t,m.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,c=t.length;l!==c;++l){const d=t[l];d.id in i&&s.push(d)}return s}}function lx(r,t,i){const s=r.createShader(t);return r.shaderSource(s,i),r.compileShader(s),s}const Q1=37297;let J1=0;function $1(r,t){const i=r.split(`
`),s=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let d=l;d<c;d++){const h=d+1;s.push(`${h===t?">":" "} ${h}: ${i[d]}`)}return s.join(`
`)}const cx=new mt;function eT(r){Lt._getMatrix(cx,Lt.workingColorSpace,r);const t=`mat3( ${cx.elements.map(i=>i.toFixed(4))} )`;switch(Lt.getTransfer(r)){case Nc:return[t,"LinearTransferOETF"];case jt:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function ux(r,t,i){const s=r.getShaderParameter(t,r.COMPILE_STATUS),l=r.getShaderInfoLog(t).trim();if(s&&l==="")return"";const c=/ERROR: 0:(\d+)/.exec(l);if(c){const d=parseInt(c[1]);return i.toUpperCase()+`

`+l+`

`+$1(r.getShaderSource(t),d)}else return l}function tT(r,t){const i=eT(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function nT(r,t){let i;switch(t){case rS:i="Linear";break;case oS:i="Reinhard";break;case lS:i="Cineon";break;case cS:i="ACESFilmic";break;case fS:i="AgX";break;case dS:i="Neutral";break;case uS:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const bc=new fe;function iT(){Lt.getLuminanceCoefficients(bc);const r=bc.x.toFixed(4),t=bc.y.toFixed(4),i=bc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function aT(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Po).join(`
`)}function sT(r){const t=[];for(const i in r){const s=r[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function rT(r,t){const i={},s=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(t,l),d=c.name;let h=1;c.type===r.FLOAT_MAT2&&(h=2),c.type===r.FLOAT_MAT3&&(h=3),c.type===r.FLOAT_MAT4&&(h=4),i[d]={type:c.type,location:r.getAttribLocation(t,d),locationSize:h}}return i}function Po(r){return r!==""}function fx(r,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function dx(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const oT=/^[ \t]*#include +<([\w\d./]+)>/gm;function mh(r){return r.replace(oT,cT)}const lT=new Map;function cT(r,t){let i=gt[t];if(i===void 0){const s=lT.get(t);if(s!==void 0)i=gt[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return mh(i)}const uT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function hx(r){return r.replace(uT,fT)}function fT(r,t,i,s){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function px(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function dT(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Mx?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===Fy?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===na&&(t="SHADOWMAP_TYPE_VSM"),t}function hT(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Ar:case wr:t="ENVMAP_TYPE_CUBE";break;case Lc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function pT(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case wr:t="ENVMAP_MODE_REFRACTION";break}return t}function mT(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Ex:t="ENVMAP_BLENDING_MULTIPLY";break;case aS:t="ENVMAP_BLENDING_MIX";break;case sS:t="ENVMAP_BLENDING_ADD";break}return t}function gT(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function xT(r,t,i,s){const l=r.getContext(),c=i.defines;let d=i.vertexShader,h=i.fragmentShader;const m=dT(i),p=hT(i),y=pT(i),x=mT(i),v=gT(i),M=aT(i),T=sT(c),C=l.createProgram();let b,_,B=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(b=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(Po).join(`
`),b.length>0&&(b+=`
`),_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(Po).join(`
`),_.length>0&&(_+=`
`)):(b=[px(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+y:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Po).join(`
`),_=[px(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+y:"",i.envMap?"#define "+x:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Va?"#define TONE_MAPPING":"",i.toneMapping!==Va?gt.tonemapping_pars_fragment:"",i.toneMapping!==Va?nT("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",gt.colorspace_pars_fragment,tT("linearToOutputTexel",i.outputColorSpace),iT(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Po).join(`
`)),d=mh(d),d=fx(d,i),d=dx(d,i),h=mh(h),h=fx(h,i),h=dx(h,i),d=hx(d),h=hx(h),i.isRawShaderMaterial!==!0&&(B=`#version 300 es
`,b=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+b,_=["#define varying in",i.glslVersion===A0?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===A0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const O=B+b+d,D=B+_+h,W=lx(l,l.VERTEX_SHADER,O),k=lx(l,l.FRAGMENT_SHADER,D);l.attachShader(C,W),l.attachShader(C,k),i.index0AttributeName!==void 0?l.bindAttribLocation(C,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(C,0,"position"),l.linkProgram(C);function I(V){if(r.debug.checkShaderErrors){const he=l.getProgramInfoLog(C).trim(),le=l.getShaderInfoLog(W).trim(),ge=l.getShaderInfoLog(k).trim();let be=!0,z=!0;if(l.getProgramParameter(C,l.LINK_STATUS)===!1)if(be=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,C,W,k);else{const ee=ux(l,W,"vertex"),J=ux(l,k,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(C,l.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+he+`
`+ee+`
`+J)}else he!==""?console.warn("THREE.WebGLProgram: Program Info Log:",he):(le===""||ge==="")&&(z=!1);z&&(V.diagnostics={runnable:be,programLog:he,vertexShader:{log:le,prefix:b},fragmentShader:{log:ge,prefix:_}})}l.deleteShader(W),l.deleteShader(k),Q=new Rc(l,C),U=rT(l,C)}let Q;this.getUniforms=function(){return Q===void 0&&I(this),Q};let U;this.getAttributes=function(){return U===void 0&&I(this),U};let N=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=l.getProgramParameter(C,Q1)),N},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(C),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=J1++,this.cacheKey=t,this.usedTimes=1,this.program=C,this.vertexShader=W,this.fragmentShader=k,this}let vT=0;class _T{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),d=this._getShaderCacheForMaterial(t);return d.has(l)===!1&&(d.add(l),l.usedTimes++),d.has(c)===!1&&(d.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new yT(t),i.set(t,s)),s}}class yT{constructor(t){this.id=vT++,this.code=t,this.usedTimes=0}}function ST(r,t,i,s,l,c,d){const h=new kx,m=new _T,p=new Set,y=[],x=l.logarithmicDepthBuffer,v=l.vertexTextures;let M=l.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function C(U){return p.add(U),U===0?"uv":`uv${U}`}function b(U,N,V,he,le){const ge=he.fog,be=le.geometry,z=U.isMeshStandardMaterial?he.environment:null,ee=(U.isMeshStandardMaterial?i:t).get(U.envMap||z),J=ee&&ee.mapping===Lc?ee.image.height:null,Me=T[U.type];U.precision!==null&&(M=l.getMaxPrecision(U.precision),M!==U.precision&&console.warn("THREE.WebGLProgram.getParameters:",U.precision,"not supported, using",M,"instead."));const F=be.morphAttributes.position||be.morphAttributes.normal||be.morphAttributes.color,E=F!==void 0?F.length:0;let j=0;be.morphAttributes.position!==void 0&&(j=1),be.morphAttributes.normal!==void 0&&(j=2),be.morphAttributes.color!==void 0&&(j=3);let ce,G,$,de;if(Me){const Rt=Di[Me];ce=Rt.vertexShader,G=Rt.fragmentShader}else ce=U.vertexShader,G=U.fragmentShader,m.update(U),$=m.getVertexShaderID(U),de=m.getFragmentShaderID(U);const re=r.getRenderTarget(),Te=r.state.buffers.depth.getReversed(),Ce=le.isInstancedMesh===!0,Ue=le.isBatchedMesh===!0,tt=!!U.map,it=!!U.matcap,Qe=!!ee,P=!!U.aoMap,Pt=!!U.lightMap,at=!!U.bumpMap,st=!!U.normalMap,je=!!U.displacementMap,vt=!!U.emissiveMap,He=!!U.metalnessMap,L=!!U.roughnessMap,w=U.anisotropy>0,ie=U.clearcoat>0,xe=U.dispersion>0,Ee=U.iridescence>0,_e=U.sheen>0,qe=U.transmission>0,Re=w&&!!U.anisotropyMap,ke=ie&&!!U.clearcoatMap,xt=ie&&!!U.clearcoatNormalMap,we=ie&&!!U.clearcoatRoughnessMap,Ge=Ee&&!!U.iridescenceMap,Ke=Ee&&!!U.iridescenceThicknessMap,Ze=_e&&!!U.sheenColorMap,Be=_e&&!!U.sheenRoughnessMap,rt=!!U.specularMap,dt=!!U.specularColorMap,Ft=!!U.specularIntensityMap,Y=qe&&!!U.transmissionMap,Ne=qe&&!!U.thicknessMap,pe=!!U.gradientMap,Se=!!U.alphaMap,De=U.alphaTest>0,Le=!!U.alphaHash,ot=!!U.extensions;let Kt=Va;U.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(Kt=r.toneMapping);const dn={shaderID:Me,shaderType:U.type,shaderName:U.name,vertexShader:ce,fragmentShader:G,defines:U.defines,customVertexShaderID:$,customFragmentShaderID:de,isRawShaderMaterial:U.isRawShaderMaterial===!0,glslVersion:U.glslVersion,precision:M,batching:Ue,batchingColor:Ue&&le._colorsTexture!==null,instancing:Ce,instancingColor:Ce&&le.instanceColor!==null,instancingMorph:Ce&&le.morphTexture!==null,supportsVertexTextures:v,outputColorSpace:re===null?r.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:Nr,alphaToCoverage:!!U.alphaToCoverage,map:tt,matcap:it,envMap:Qe,envMapMode:Qe&&ee.mapping,envMapCubeUVHeight:J,aoMap:P,lightMap:Pt,bumpMap:at,normalMap:st,displacementMap:v&&je,emissiveMap:vt,normalMapObjectSpace:st&&U.normalMapType===xS,normalMapTangentSpace:st&&U.normalMapType===gS,metalnessMap:He,roughnessMap:L,anisotropy:w,anisotropyMap:Re,clearcoat:ie,clearcoatMap:ke,clearcoatNormalMap:xt,clearcoatRoughnessMap:we,dispersion:xe,iridescence:Ee,iridescenceMap:Ge,iridescenceThicknessMap:Ke,sheen:_e,sheenColorMap:Ze,sheenRoughnessMap:Be,specularMap:rt,specularColorMap:dt,specularIntensityMap:Ft,transmission:qe,transmissionMap:Y,thicknessMap:Ne,gradientMap:pe,opaque:U.transparent===!1&&U.blending===Sr&&U.alphaToCoverage===!1,alphaMap:Se,alphaTest:De,alphaHash:Le,combine:U.combine,mapUv:tt&&C(U.map.channel),aoMapUv:P&&C(U.aoMap.channel),lightMapUv:Pt&&C(U.lightMap.channel),bumpMapUv:at&&C(U.bumpMap.channel),normalMapUv:st&&C(U.normalMap.channel),displacementMapUv:je&&C(U.displacementMap.channel),emissiveMapUv:vt&&C(U.emissiveMap.channel),metalnessMapUv:He&&C(U.metalnessMap.channel),roughnessMapUv:L&&C(U.roughnessMap.channel),anisotropyMapUv:Re&&C(U.anisotropyMap.channel),clearcoatMapUv:ke&&C(U.clearcoatMap.channel),clearcoatNormalMapUv:xt&&C(U.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:we&&C(U.clearcoatRoughnessMap.channel),iridescenceMapUv:Ge&&C(U.iridescenceMap.channel),iridescenceThicknessMapUv:Ke&&C(U.iridescenceThicknessMap.channel),sheenColorMapUv:Ze&&C(U.sheenColorMap.channel),sheenRoughnessMapUv:Be&&C(U.sheenRoughnessMap.channel),specularMapUv:rt&&C(U.specularMap.channel),specularColorMapUv:dt&&C(U.specularColorMap.channel),specularIntensityMapUv:Ft&&C(U.specularIntensityMap.channel),transmissionMapUv:Y&&C(U.transmissionMap.channel),thicknessMapUv:Ne&&C(U.thicknessMap.channel),alphaMapUv:Se&&C(U.alphaMap.channel),vertexTangents:!!be.attributes.tangent&&(st||w),vertexColors:U.vertexColors,vertexAlphas:U.vertexColors===!0&&!!be.attributes.color&&be.attributes.color.itemSize===4,pointsUvs:le.isPoints===!0&&!!be.attributes.uv&&(tt||Se),fog:!!ge,useFog:U.fog===!0,fogExp2:!!ge&&ge.isFogExp2,flatShading:U.flatShading===!0,sizeAttenuation:U.sizeAttenuation===!0,logarithmicDepthBuffer:x,reverseDepthBuffer:Te,skinning:le.isSkinnedMesh===!0,morphTargets:be.morphAttributes.position!==void 0,morphNormals:be.morphAttributes.normal!==void 0,morphColors:be.morphAttributes.color!==void 0,morphTargetsCount:E,morphTextureStride:j,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numLightProbes:N.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:U.dithering,shadowMapEnabled:r.shadowMap.enabled&&V.length>0,shadowMapType:r.shadowMap.type,toneMapping:Kt,decodeVideoTexture:tt&&U.map.isVideoTexture===!0&&Lt.getTransfer(U.map.colorSpace)===jt,decodeVideoTextureEmissive:vt&&U.emissiveMap.isVideoTexture===!0&&Lt.getTransfer(U.emissiveMap.colorSpace)===jt,premultipliedAlpha:U.premultipliedAlpha,doubleSided:U.side===ia,flipSided:U.side===Xn,useDepthPacking:U.depthPacking>=0,depthPacking:U.depthPacking||0,index0AttributeName:U.index0AttributeName,extensionClipCullDistance:ot&&U.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ot&&U.extensions.multiDraw===!0||Ue)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:U.customProgramCacheKey()};return dn.vertexUv1s=p.has(1),dn.vertexUv2s=p.has(2),dn.vertexUv3s=p.has(3),p.clear(),dn}function _(U){const N=[];if(U.shaderID?N.push(U.shaderID):(N.push(U.customVertexShaderID),N.push(U.customFragmentShaderID)),U.defines!==void 0)for(const V in U.defines)N.push(V),N.push(U.defines[V]);return U.isRawShaderMaterial===!1&&(B(N,U),O(N,U),N.push(r.outputColorSpace)),N.push(U.customProgramCacheKey),N.join()}function B(U,N){U.push(N.precision),U.push(N.outputColorSpace),U.push(N.envMapMode),U.push(N.envMapCubeUVHeight),U.push(N.mapUv),U.push(N.alphaMapUv),U.push(N.lightMapUv),U.push(N.aoMapUv),U.push(N.bumpMapUv),U.push(N.normalMapUv),U.push(N.displacementMapUv),U.push(N.emissiveMapUv),U.push(N.metalnessMapUv),U.push(N.roughnessMapUv),U.push(N.anisotropyMapUv),U.push(N.clearcoatMapUv),U.push(N.clearcoatNormalMapUv),U.push(N.clearcoatRoughnessMapUv),U.push(N.iridescenceMapUv),U.push(N.iridescenceThicknessMapUv),U.push(N.sheenColorMapUv),U.push(N.sheenRoughnessMapUv),U.push(N.specularMapUv),U.push(N.specularColorMapUv),U.push(N.specularIntensityMapUv),U.push(N.transmissionMapUv),U.push(N.thicknessMapUv),U.push(N.combine),U.push(N.fogExp2),U.push(N.sizeAttenuation),U.push(N.morphTargetsCount),U.push(N.morphAttributeCount),U.push(N.numDirLights),U.push(N.numPointLights),U.push(N.numSpotLights),U.push(N.numSpotLightMaps),U.push(N.numHemiLights),U.push(N.numRectAreaLights),U.push(N.numDirLightShadows),U.push(N.numPointLightShadows),U.push(N.numSpotLightShadows),U.push(N.numSpotLightShadowsWithMaps),U.push(N.numLightProbes),U.push(N.shadowMapType),U.push(N.toneMapping),U.push(N.numClippingPlanes),U.push(N.numClipIntersection),U.push(N.depthPacking)}function O(U,N){h.disableAll(),N.supportsVertexTextures&&h.enable(0),N.instancing&&h.enable(1),N.instancingColor&&h.enable(2),N.instancingMorph&&h.enable(3),N.matcap&&h.enable(4),N.envMap&&h.enable(5),N.normalMapObjectSpace&&h.enable(6),N.normalMapTangentSpace&&h.enable(7),N.clearcoat&&h.enable(8),N.iridescence&&h.enable(9),N.alphaTest&&h.enable(10),N.vertexColors&&h.enable(11),N.vertexAlphas&&h.enable(12),N.vertexUv1s&&h.enable(13),N.vertexUv2s&&h.enable(14),N.vertexUv3s&&h.enable(15),N.vertexTangents&&h.enable(16),N.anisotropy&&h.enable(17),N.alphaHash&&h.enable(18),N.batching&&h.enable(19),N.dispersion&&h.enable(20),N.batchingColor&&h.enable(21),U.push(h.mask),h.disableAll(),N.fog&&h.enable(0),N.useFog&&h.enable(1),N.flatShading&&h.enable(2),N.logarithmicDepthBuffer&&h.enable(3),N.reverseDepthBuffer&&h.enable(4),N.skinning&&h.enable(5),N.morphTargets&&h.enable(6),N.morphNormals&&h.enable(7),N.morphColors&&h.enable(8),N.premultipliedAlpha&&h.enable(9),N.shadowMapEnabled&&h.enable(10),N.doubleSided&&h.enable(11),N.flipSided&&h.enable(12),N.useDepthPacking&&h.enable(13),N.dithering&&h.enable(14),N.transmission&&h.enable(15),N.sheen&&h.enable(16),N.opaque&&h.enable(17),N.pointsUvs&&h.enable(18),N.decodeVideoTexture&&h.enable(19),N.decodeVideoTextureEmissive&&h.enable(20),N.alphaToCoverage&&h.enable(21),U.push(h.mask)}function D(U){const N=T[U.type];let V;if(N){const he=Di[N];V=YS.clone(he.uniforms)}else V=U.uniforms;return V}function W(U,N){let V;for(let he=0,le=y.length;he<le;he++){const ge=y[he];if(ge.cacheKey===N){V=ge,++V.usedTimes;break}}return V===void 0&&(V=new xT(r,N,U,c),y.push(V)),V}function k(U){if(--U.usedTimes===0){const N=y.indexOf(U);y[N]=y[y.length-1],y.pop(),U.destroy()}}function I(U){m.remove(U)}function Q(){m.dispose()}return{getParameters:b,getProgramCacheKey:_,getUniforms:D,acquireProgram:W,releaseProgram:k,releaseShaderCache:I,programs:y,dispose:Q}}function bT(){let r=new WeakMap;function t(d){return r.has(d)}function i(d){let h=r.get(d);return h===void 0&&(h={},r.set(d,h)),h}function s(d){r.delete(d)}function l(d,h,m){r.get(d)[h]=m}function c(){r=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:c}}function MT(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function mx(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function gx(){const r=[];let t=0;const i=[],s=[],l=[];function c(){t=0,i.length=0,s.length=0,l.length=0}function d(x,v,M,T,C,b){let _=r[t];return _===void 0?(_={id:x.id,object:x,geometry:v,material:M,groupOrder:T,renderOrder:x.renderOrder,z:C,group:b},r[t]=_):(_.id=x.id,_.object=x,_.geometry=v,_.material=M,_.groupOrder=T,_.renderOrder=x.renderOrder,_.z=C,_.group=b),t++,_}function h(x,v,M,T,C,b){const _=d(x,v,M,T,C,b);M.transmission>0?s.push(_):M.transparent===!0?l.push(_):i.push(_)}function m(x,v,M,T,C,b){const _=d(x,v,M,T,C,b);M.transmission>0?s.unshift(_):M.transparent===!0?l.unshift(_):i.unshift(_)}function p(x,v){i.length>1&&i.sort(x||MT),s.length>1&&s.sort(v||mx),l.length>1&&l.sort(v||mx)}function y(){for(let x=t,v=r.length;x<v;x++){const M=r[x];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:h,unshift:m,finish:y,sort:p}}function ET(){let r=new WeakMap;function t(s,l){const c=r.get(s);let d;return c===void 0?(d=new gx,r.set(s,[d])):l>=c.length?(d=new gx,c.push(d)):d=c[l],d}function i(){r=new WeakMap}return{get:t,dispose:i}}function TT(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new fe,color:new Ot};break;case"SpotLight":i={position:new fe,direction:new fe,color:new Ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new fe,color:new Ot,distance:0,decay:0};break;case"HemisphereLight":i={direction:new fe,skyColor:new Ot,groundColor:new Ot};break;case"RectAreaLight":i={color:new Ot,position:new fe,halfWidth:new fe,halfHeight:new fe};break}return r[t.id]=i,i}}}function AT(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=i,i}}}let wT=0;function CT(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function RT(r){const t=new TT,i=AT(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new fe);const l=new fe,c=new rn,d=new rn;function h(p){let y=0,x=0,v=0;for(let U=0;U<9;U++)s.probe[U].set(0,0,0);let M=0,T=0,C=0,b=0,_=0,B=0,O=0,D=0,W=0,k=0,I=0;p.sort(CT);for(let U=0,N=p.length;U<N;U++){const V=p[U],he=V.color,le=V.intensity,ge=V.distance,be=V.shadow&&V.shadow.map?V.shadow.map.texture:null;if(V.isAmbientLight)y+=he.r*le,x+=he.g*le,v+=he.b*le;else if(V.isLightProbe){for(let z=0;z<9;z++)s.probe[z].addScaledVector(V.sh.coefficients[z],le);I++}else if(V.isDirectionalLight){const z=t.get(V);if(z.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const ee=V.shadow,J=i.get(V);J.shadowIntensity=ee.intensity,J.shadowBias=ee.bias,J.shadowNormalBias=ee.normalBias,J.shadowRadius=ee.radius,J.shadowMapSize=ee.mapSize,s.directionalShadow[M]=J,s.directionalShadowMap[M]=be,s.directionalShadowMatrix[M]=V.shadow.matrix,B++}s.directional[M]=z,M++}else if(V.isSpotLight){const z=t.get(V);z.position.setFromMatrixPosition(V.matrixWorld),z.color.copy(he).multiplyScalar(le),z.distance=ge,z.coneCos=Math.cos(V.angle),z.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),z.decay=V.decay,s.spot[C]=z;const ee=V.shadow;if(V.map&&(s.spotLightMap[W]=V.map,W++,ee.updateMatrices(V),V.castShadow&&k++),s.spotLightMatrix[C]=ee.matrix,V.castShadow){const J=i.get(V);J.shadowIntensity=ee.intensity,J.shadowBias=ee.bias,J.shadowNormalBias=ee.normalBias,J.shadowRadius=ee.radius,J.shadowMapSize=ee.mapSize,s.spotShadow[C]=J,s.spotShadowMap[C]=be,D++}C++}else if(V.isRectAreaLight){const z=t.get(V);z.color.copy(he).multiplyScalar(le),z.halfWidth.set(V.width*.5,0,0),z.halfHeight.set(0,V.height*.5,0),s.rectArea[b]=z,b++}else if(V.isPointLight){const z=t.get(V);if(z.color.copy(V.color).multiplyScalar(V.intensity),z.distance=V.distance,z.decay=V.decay,V.castShadow){const ee=V.shadow,J=i.get(V);J.shadowIntensity=ee.intensity,J.shadowBias=ee.bias,J.shadowNormalBias=ee.normalBias,J.shadowRadius=ee.radius,J.shadowMapSize=ee.mapSize,J.shadowCameraNear=ee.camera.near,J.shadowCameraFar=ee.camera.far,s.pointShadow[T]=J,s.pointShadowMap[T]=be,s.pointShadowMatrix[T]=V.shadow.matrix,O++}s.point[T]=z,T++}else if(V.isHemisphereLight){const z=t.get(V);z.skyColor.copy(V.color).multiplyScalar(le),z.groundColor.copy(V.groundColor).multiplyScalar(le),s.hemi[_]=z,_++}}b>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Pe.LTC_FLOAT_1,s.rectAreaLTC2=Pe.LTC_FLOAT_2):(s.rectAreaLTC1=Pe.LTC_HALF_1,s.rectAreaLTC2=Pe.LTC_HALF_2)),s.ambient[0]=y,s.ambient[1]=x,s.ambient[2]=v;const Q=s.hash;(Q.directionalLength!==M||Q.pointLength!==T||Q.spotLength!==C||Q.rectAreaLength!==b||Q.hemiLength!==_||Q.numDirectionalShadows!==B||Q.numPointShadows!==O||Q.numSpotShadows!==D||Q.numSpotMaps!==W||Q.numLightProbes!==I)&&(s.directional.length=M,s.spot.length=C,s.rectArea.length=b,s.point.length=T,s.hemi.length=_,s.directionalShadow.length=B,s.directionalShadowMap.length=B,s.pointShadow.length=O,s.pointShadowMap.length=O,s.spotShadow.length=D,s.spotShadowMap.length=D,s.directionalShadowMatrix.length=B,s.pointShadowMatrix.length=O,s.spotLightMatrix.length=D+W-k,s.spotLightMap.length=W,s.numSpotLightShadowsWithMaps=k,s.numLightProbes=I,Q.directionalLength=M,Q.pointLength=T,Q.spotLength=C,Q.rectAreaLength=b,Q.hemiLength=_,Q.numDirectionalShadows=B,Q.numPointShadows=O,Q.numSpotShadows=D,Q.numSpotMaps=W,Q.numLightProbes=I,s.version=wT++)}function m(p,y){let x=0,v=0,M=0,T=0,C=0;const b=y.matrixWorldInverse;for(let _=0,B=p.length;_<B;_++){const O=p[_];if(O.isDirectionalLight){const D=s.directional[x];D.direction.setFromMatrixPosition(O.matrixWorld),l.setFromMatrixPosition(O.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(b),x++}else if(O.isSpotLight){const D=s.spot[M];D.position.setFromMatrixPosition(O.matrixWorld),D.position.applyMatrix4(b),D.direction.setFromMatrixPosition(O.matrixWorld),l.setFromMatrixPosition(O.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(b),M++}else if(O.isRectAreaLight){const D=s.rectArea[T];D.position.setFromMatrixPosition(O.matrixWorld),D.position.applyMatrix4(b),d.identity(),c.copy(O.matrixWorld),c.premultiply(b),d.extractRotation(c),D.halfWidth.set(O.width*.5,0,0),D.halfHeight.set(0,O.height*.5,0),D.halfWidth.applyMatrix4(d),D.halfHeight.applyMatrix4(d),T++}else if(O.isPointLight){const D=s.point[v];D.position.setFromMatrixPosition(O.matrixWorld),D.position.applyMatrix4(b),v++}else if(O.isHemisphereLight){const D=s.hemi[C];D.direction.setFromMatrixPosition(O.matrixWorld),D.direction.transformDirection(b),C++}}}return{setup:h,setupView:m,state:s}}function xx(r){const t=new RT(r),i=[],s=[];function l(y){p.camera=y,i.length=0,s.length=0}function c(y){i.push(y)}function d(y){s.push(y)}function h(){t.setup(i)}function m(y){t.setupView(i,y)}const p={lightsArray:i,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:h,setupLightsView:m,pushLight:c,pushShadow:d}}function NT(r){let t=new WeakMap;function i(l,c=0){const d=t.get(l);let h;return d===void 0?(h=new xx(r),t.set(l,[h])):c>=d.length?(h=new xx(r),d.push(h)):h=d[c],h}function s(){t=new WeakMap}return{get:i,dispose:s}}const DT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,UT=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function LT(r,t,i){let s=new Zx;const l=new Wt,c=new Wt,d=new sn,h=new sb({depthPacking:mS}),m=new rb,p={},y=i.maxTextureSize,x={[ja]:Xn,[Xn]:ja,[ia]:ia},v=new Xa({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Wt},radius:{value:4}},vertexShader:DT,fragmentShader:UT}),M=v.clone();M.defines.HORIZONTAL_PASS=1;const T=new ua;T.setAttribute("position",new hi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new ra(T,v),b=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Mx;let _=this.type;this.render=function(k,I,Q){if(b.enabled===!1||b.autoUpdate===!1&&b.needsUpdate===!1||k.length===0)return;const U=r.getRenderTarget(),N=r.getActiveCubeFace(),V=r.getActiveMipmapLevel(),he=r.state;he.setBlending(Ga),he.buffers.color.setClear(1,1,1,1),he.buffers.depth.setTest(!0),he.setScissorTest(!1);const le=_!==na&&this.type===na,ge=_===na&&this.type!==na;for(let be=0,z=k.length;be<z;be++){const ee=k[be],J=ee.shadow;if(J===void 0){console.warn("THREE.WebGLShadowMap:",ee,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;l.copy(J.mapSize);const Me=J.getFrameExtents();if(l.multiply(Me),c.copy(J.mapSize),(l.x>y||l.y>y)&&(l.x>y&&(c.x=Math.floor(y/Me.x),l.x=c.x*Me.x,J.mapSize.x=c.x),l.y>y&&(c.y=Math.floor(y/Me.y),l.y=c.y*Me.y,J.mapSize.y=c.y)),J.map===null||le===!0||ge===!0){const E=this.type!==na?{minFilter:Ti,magFilter:Ti}:{};J.map!==null&&J.map.dispose(),J.map=new Ts(l.x,l.y,E),J.map.texture.name=ee.name+".shadowMap",J.camera.updateProjectionMatrix()}r.setRenderTarget(J.map),r.clear();const F=J.getViewportCount();for(let E=0;E<F;E++){const j=J.getViewport(E);d.set(c.x*j.x,c.y*j.y,c.x*j.z,c.y*j.w),he.viewport(d),J.updateMatrices(ee,E),s=J.getFrustum(),D(I,Q,J.camera,ee,this.type)}J.isPointLightShadow!==!0&&this.type===na&&B(J,Q),J.needsUpdate=!1}_=this.type,b.needsUpdate=!1,r.setRenderTarget(U,N,V)};function B(k,I){const Q=t.update(C);v.defines.VSM_SAMPLES!==k.blurSamples&&(v.defines.VSM_SAMPLES=k.blurSamples,M.defines.VSM_SAMPLES=k.blurSamples,v.needsUpdate=!0,M.needsUpdate=!0),k.mapPass===null&&(k.mapPass=new Ts(l.x,l.y)),v.uniforms.shadow_pass.value=k.map.texture,v.uniforms.resolution.value=k.mapSize,v.uniforms.radius.value=k.radius,r.setRenderTarget(k.mapPass),r.clear(),r.renderBufferDirect(I,null,Q,v,C,null),M.uniforms.shadow_pass.value=k.mapPass.texture,M.uniforms.resolution.value=k.mapSize,M.uniforms.radius.value=k.radius,r.setRenderTarget(k.map),r.clear(),r.renderBufferDirect(I,null,Q,M,C,null)}function O(k,I,Q,U){let N=null;const V=Q.isPointLight===!0?k.customDistanceMaterial:k.customDepthMaterial;if(V!==void 0)N=V;else if(N=Q.isPointLight===!0?m:h,r.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){const he=N.uuid,le=I.uuid;let ge=p[he];ge===void 0&&(ge={},p[he]=ge);let be=ge[le];be===void 0&&(be=N.clone(),ge[le]=be,I.addEventListener("dispose",W)),N=be}if(N.visible=I.visible,N.wireframe=I.wireframe,U===na?N.side=I.shadowSide!==null?I.shadowSide:I.side:N.side=I.shadowSide!==null?I.shadowSide:x[I.side],N.alphaMap=I.alphaMap,N.alphaTest=I.alphaTest,N.map=I.map,N.clipShadows=I.clipShadows,N.clippingPlanes=I.clippingPlanes,N.clipIntersection=I.clipIntersection,N.displacementMap=I.displacementMap,N.displacementScale=I.displacementScale,N.displacementBias=I.displacementBias,N.wireframeLinewidth=I.wireframeLinewidth,N.linewidth=I.linewidth,Q.isPointLight===!0&&N.isMeshDistanceMaterial===!0){const he=r.properties.get(N);he.light=Q}return N}function D(k,I,Q,U,N){if(k.visible===!1)return;if(k.layers.test(I.layers)&&(k.isMesh||k.isLine||k.isPoints)&&(k.castShadow||k.receiveShadow&&N===na)&&(!k.frustumCulled||s.intersectsObject(k))){k.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,k.matrixWorld);const le=t.update(k),ge=k.material;if(Array.isArray(ge)){const be=le.groups;for(let z=0,ee=be.length;z<ee;z++){const J=be[z],Me=ge[J.materialIndex];if(Me&&Me.visible){const F=O(k,Me,U,N);k.onBeforeShadow(r,k,I,Q,le,F,J),r.renderBufferDirect(Q,null,le,F,k,J),k.onAfterShadow(r,k,I,Q,le,F,J)}}}else if(ge.visible){const be=O(k,ge,U,N);k.onBeforeShadow(r,k,I,Q,le,be,null),r.renderBufferDirect(Q,null,le,be,k,null),k.onAfterShadow(r,k,I,Q,le,be,null)}}const he=k.children;for(let le=0,ge=he.length;le<ge;le++)D(he[le],I,Q,U,N)}function W(k){k.target.removeEventListener("dispose",W);for(const Q in p){const U=p[Q],N=k.target.uuid;N in U&&(U[N].dispose(),delete U[N])}}}const OT={[Nd]:Dd,[Ud]:Pd,[Ld]:zd,[Tr]:Od,[Dd]:Nd,[Pd]:Ud,[zd]:Ld,[Od]:Tr};function PT(r,t){function i(){let Y=!1;const Ne=new sn;let pe=null;const Se=new sn(0,0,0,0);return{setMask:function(De){pe!==De&&!Y&&(r.colorMask(De,De,De,De),pe=De)},setLocked:function(De){Y=De},setClear:function(De,Le,ot,Kt,dn){dn===!0&&(De*=Kt,Le*=Kt,ot*=Kt),Ne.set(De,Le,ot,Kt),Se.equals(Ne)===!1&&(r.clearColor(De,Le,ot,Kt),Se.copy(Ne))},reset:function(){Y=!1,pe=null,Se.set(-1,0,0,0)}}}function s(){let Y=!1,Ne=!1,pe=null,Se=null,De=null;return{setReversed:function(Le){if(Ne!==Le){const ot=t.get("EXT_clip_control");Ne?ot.clipControlEXT(ot.LOWER_LEFT_EXT,ot.ZERO_TO_ONE_EXT):ot.clipControlEXT(ot.LOWER_LEFT_EXT,ot.NEGATIVE_ONE_TO_ONE_EXT);const Kt=De;De=null,this.setClear(Kt)}Ne=Le},getReversed:function(){return Ne},setTest:function(Le){Le?re(r.DEPTH_TEST):Te(r.DEPTH_TEST)},setMask:function(Le){pe!==Le&&!Y&&(r.depthMask(Le),pe=Le)},setFunc:function(Le){if(Ne&&(Le=OT[Le]),Se!==Le){switch(Le){case Nd:r.depthFunc(r.NEVER);break;case Dd:r.depthFunc(r.ALWAYS);break;case Ud:r.depthFunc(r.LESS);break;case Tr:r.depthFunc(r.LEQUAL);break;case Ld:r.depthFunc(r.EQUAL);break;case Od:r.depthFunc(r.GEQUAL);break;case Pd:r.depthFunc(r.GREATER);break;case zd:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Se=Le}},setLocked:function(Le){Y=Le},setClear:function(Le){De!==Le&&(Ne&&(Le=1-Le),r.clearDepth(Le),De=Le)},reset:function(){Y=!1,pe=null,Se=null,De=null,Ne=!1}}}function l(){let Y=!1,Ne=null,pe=null,Se=null,De=null,Le=null,ot=null,Kt=null,dn=null;return{setTest:function(Rt){Y||(Rt?re(r.STENCIL_TEST):Te(r.STENCIL_TEST))},setMask:function(Rt){Ne!==Rt&&!Y&&(r.stencilMask(Rt),Ne=Rt)},setFunc:function(Rt,yn,pi){(pe!==Rt||Se!==yn||De!==pi)&&(r.stencilFunc(Rt,yn,pi),pe=Rt,Se=yn,De=pi)},setOp:function(Rt,yn,pi){(Le!==Rt||ot!==yn||Kt!==pi)&&(r.stencilOp(Rt,yn,pi),Le=Rt,ot=yn,Kt=pi)},setLocked:function(Rt){Y=Rt},setClear:function(Rt){dn!==Rt&&(r.clearStencil(Rt),dn=Rt)},reset:function(){Y=!1,Ne=null,pe=null,Se=null,De=null,Le=null,ot=null,Kt=null,dn=null}}}const c=new i,d=new s,h=new l,m=new WeakMap,p=new WeakMap;let y={},x={},v=new WeakMap,M=[],T=null,C=!1,b=null,_=null,B=null,O=null,D=null,W=null,k=null,I=new Ot(0,0,0),Q=0,U=!1,N=null,V=null,he=null,le=null,ge=null;const be=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,ee=0;const J=r.getParameter(r.VERSION);J.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(J)[1]),z=ee>=1):J.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),z=ee>=2);let Me=null,F={};const E=r.getParameter(r.SCISSOR_BOX),j=r.getParameter(r.VIEWPORT),ce=new sn().fromArray(E),G=new sn().fromArray(j);function $(Y,Ne,pe,Se){const De=new Uint8Array(4),Le=r.createTexture();r.bindTexture(Y,Le),r.texParameteri(Y,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(Y,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let ot=0;ot<pe;ot++)Y===r.TEXTURE_3D||Y===r.TEXTURE_2D_ARRAY?r.texImage3D(Ne,0,r.RGBA,1,1,Se,0,r.RGBA,r.UNSIGNED_BYTE,De):r.texImage2D(Ne+ot,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,De);return Le}const de={};de[r.TEXTURE_2D]=$(r.TEXTURE_2D,r.TEXTURE_2D,1),de[r.TEXTURE_CUBE_MAP]=$(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),de[r.TEXTURE_2D_ARRAY]=$(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),de[r.TEXTURE_3D]=$(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),d.setClear(1),h.setClear(0),re(r.DEPTH_TEST),d.setFunc(Tr),at(!1),st(S0),re(r.CULL_FACE),P(Ga);function re(Y){y[Y]!==!0&&(r.enable(Y),y[Y]=!0)}function Te(Y){y[Y]!==!1&&(r.disable(Y),y[Y]=!1)}function Ce(Y,Ne){return x[Y]!==Ne?(r.bindFramebuffer(Y,Ne),x[Y]=Ne,Y===r.DRAW_FRAMEBUFFER&&(x[r.FRAMEBUFFER]=Ne),Y===r.FRAMEBUFFER&&(x[r.DRAW_FRAMEBUFFER]=Ne),!0):!1}function Ue(Y,Ne){let pe=M,Se=!1;if(Y){pe=v.get(Ne),pe===void 0&&(pe=[],v.set(Ne,pe));const De=Y.textures;if(pe.length!==De.length||pe[0]!==r.COLOR_ATTACHMENT0){for(let Le=0,ot=De.length;Le<ot;Le++)pe[Le]=r.COLOR_ATTACHMENT0+Le;pe.length=De.length,Se=!0}}else pe[0]!==r.BACK&&(pe[0]=r.BACK,Se=!0);Se&&r.drawBuffers(pe)}function tt(Y){return T!==Y?(r.useProgram(Y),T=Y,!0):!1}const it={[_s]:r.FUNC_ADD,[ky]:r.FUNC_SUBTRACT,[Gy]:r.FUNC_REVERSE_SUBTRACT};it[Vy]=r.MIN,it[jy]=r.MAX;const Qe={[Xy]:r.ZERO,[Wy]:r.ONE,[qy]:r.SRC_COLOR,[Cd]:r.SRC_ALPHA,[$y]:r.SRC_ALPHA_SATURATE,[Qy]:r.DST_COLOR,[Zy]:r.DST_ALPHA,[Yy]:r.ONE_MINUS_SRC_COLOR,[Rd]:r.ONE_MINUS_SRC_ALPHA,[Jy]:r.ONE_MINUS_DST_COLOR,[Ky]:r.ONE_MINUS_DST_ALPHA,[eS]:r.CONSTANT_COLOR,[tS]:r.ONE_MINUS_CONSTANT_COLOR,[nS]:r.CONSTANT_ALPHA,[iS]:r.ONE_MINUS_CONSTANT_ALPHA};function P(Y,Ne,pe,Se,De,Le,ot,Kt,dn,Rt){if(Y===Ga){C===!0&&(Te(r.BLEND),C=!1);return}if(C===!1&&(re(r.BLEND),C=!0),Y!==Hy){if(Y!==b||Rt!==U){if((_!==_s||D!==_s)&&(r.blendEquation(r.FUNC_ADD),_=_s,D=_s),Rt)switch(Y){case Sr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case wd:r.blendFunc(r.ONE,r.ONE);break;case b0:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case M0:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",Y);break}else switch(Y){case Sr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case wd:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case b0:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case M0:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",Y);break}B=null,O=null,W=null,k=null,I.set(0,0,0),Q=0,b=Y,U=Rt}return}De=De||Ne,Le=Le||pe,ot=ot||Se,(Ne!==_||De!==D)&&(r.blendEquationSeparate(it[Ne],it[De]),_=Ne,D=De),(pe!==B||Se!==O||Le!==W||ot!==k)&&(r.blendFuncSeparate(Qe[pe],Qe[Se],Qe[Le],Qe[ot]),B=pe,O=Se,W=Le,k=ot),(Kt.equals(I)===!1||dn!==Q)&&(r.blendColor(Kt.r,Kt.g,Kt.b,dn),I.copy(Kt),Q=dn),b=Y,U=!1}function Pt(Y,Ne){Y.side===ia?Te(r.CULL_FACE):re(r.CULL_FACE);let pe=Y.side===Xn;Ne&&(pe=!pe),at(pe),Y.blending===Sr&&Y.transparent===!1?P(Ga):P(Y.blending,Y.blendEquation,Y.blendSrc,Y.blendDst,Y.blendEquationAlpha,Y.blendSrcAlpha,Y.blendDstAlpha,Y.blendColor,Y.blendAlpha,Y.premultipliedAlpha),d.setFunc(Y.depthFunc),d.setTest(Y.depthTest),d.setMask(Y.depthWrite),c.setMask(Y.colorWrite);const Se=Y.stencilWrite;h.setTest(Se),Se&&(h.setMask(Y.stencilWriteMask),h.setFunc(Y.stencilFunc,Y.stencilRef,Y.stencilFuncMask),h.setOp(Y.stencilFail,Y.stencilZFail,Y.stencilZPass)),vt(Y.polygonOffset,Y.polygonOffsetFactor,Y.polygonOffsetUnits),Y.alphaToCoverage===!0?re(r.SAMPLE_ALPHA_TO_COVERAGE):Te(r.SAMPLE_ALPHA_TO_COVERAGE)}function at(Y){N!==Y&&(Y?r.frontFace(r.CW):r.frontFace(r.CCW),N=Y)}function st(Y){Y!==Iy?(re(r.CULL_FACE),Y!==V&&(Y===S0?r.cullFace(r.BACK):Y===By?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Te(r.CULL_FACE),V=Y}function je(Y){Y!==he&&(z&&r.lineWidth(Y),he=Y)}function vt(Y,Ne,pe){Y?(re(r.POLYGON_OFFSET_FILL),(le!==Ne||ge!==pe)&&(r.polygonOffset(Ne,pe),le=Ne,ge=pe)):Te(r.POLYGON_OFFSET_FILL)}function He(Y){Y?re(r.SCISSOR_TEST):Te(r.SCISSOR_TEST)}function L(Y){Y===void 0&&(Y=r.TEXTURE0+be-1),Me!==Y&&(r.activeTexture(Y),Me=Y)}function w(Y,Ne,pe){pe===void 0&&(Me===null?pe=r.TEXTURE0+be-1:pe=Me);let Se=F[pe];Se===void 0&&(Se={type:void 0,texture:void 0},F[pe]=Se),(Se.type!==Y||Se.texture!==Ne)&&(Me!==pe&&(r.activeTexture(pe),Me=pe),r.bindTexture(Y,Ne||de[Y]),Se.type=Y,Se.texture=Ne)}function ie(){const Y=F[Me];Y!==void 0&&Y.type!==void 0&&(r.bindTexture(Y.type,null),Y.type=void 0,Y.texture=void 0)}function xe(){try{r.compressedTexImage2D.apply(r,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Ee(){try{r.compressedTexImage3D.apply(r,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function _e(){try{r.texSubImage2D.apply(r,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function qe(){try{r.texSubImage3D.apply(r,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Re(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function ke(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function xt(){try{r.texStorage2D.apply(r,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function we(){try{r.texStorage3D.apply(r,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Ge(){try{r.texImage2D.apply(r,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Ke(){try{r.texImage3D.apply(r,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Ze(Y){ce.equals(Y)===!1&&(r.scissor(Y.x,Y.y,Y.z,Y.w),ce.copy(Y))}function Be(Y){G.equals(Y)===!1&&(r.viewport(Y.x,Y.y,Y.z,Y.w),G.copy(Y))}function rt(Y,Ne){let pe=p.get(Ne);pe===void 0&&(pe=new WeakMap,p.set(Ne,pe));let Se=pe.get(Y);Se===void 0&&(Se=r.getUniformBlockIndex(Ne,Y.name),pe.set(Y,Se))}function dt(Y,Ne){const Se=p.get(Ne).get(Y);m.get(Ne)!==Se&&(r.uniformBlockBinding(Ne,Se,Y.__bindingPointIndex),m.set(Ne,Se))}function Ft(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),d.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),y={},Me=null,F={},x={},v=new WeakMap,M=[],T=null,C=!1,b=null,_=null,B=null,O=null,D=null,W=null,k=null,I=new Ot(0,0,0),Q=0,U=!1,N=null,V=null,he=null,le=null,ge=null,ce.set(0,0,r.canvas.width,r.canvas.height),G.set(0,0,r.canvas.width,r.canvas.height),c.reset(),d.reset(),h.reset()}return{buffers:{color:c,depth:d,stencil:h},enable:re,disable:Te,bindFramebuffer:Ce,drawBuffers:Ue,useProgram:tt,setBlending:P,setMaterial:Pt,setFlipSided:at,setCullFace:st,setLineWidth:je,setPolygonOffset:vt,setScissorTest:He,activeTexture:L,bindTexture:w,unbindTexture:ie,compressedTexImage2D:xe,compressedTexImage3D:Ee,texImage2D:Ge,texImage3D:Ke,updateUBOMapping:rt,uniformBlockBinding:dt,texStorage2D:xt,texStorage3D:we,texSubImage2D:_e,texSubImage3D:qe,compressedTexSubImage2D:Re,compressedTexSubImage3D:ke,scissor:Ze,viewport:Be,reset:Ft}}function zT(r,t,i,s,l,c,d){const h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Wt,y=new WeakMap;let x;const v=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(L,w){return M?new OffscreenCanvas(L,w):Uc("canvas")}function C(L,w,ie){let xe=1;const Ee=He(L);if((Ee.width>ie||Ee.height>ie)&&(xe=ie/Math.max(Ee.width,Ee.height)),xe<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const _e=Math.floor(xe*Ee.width),qe=Math.floor(xe*Ee.height);x===void 0&&(x=T(_e,qe));const Re=w?T(_e,qe):x;return Re.width=_e,Re.height=qe,Re.getContext("2d").drawImage(L,0,0,_e,qe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Ee.width+"x"+Ee.height+") to ("+_e+"x"+qe+")."),Re}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Ee.width+"x"+Ee.height+")."),L;return L}function b(L){return L.generateMipmaps}function _(L){r.generateMipmap(L)}function B(L){return L.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?r.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function O(L,w,ie,xe,Ee=!1){if(L!==null){if(r[L]!==void 0)return r[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let _e=w;if(w===r.RED&&(ie===r.FLOAT&&(_e=r.R32F),ie===r.HALF_FLOAT&&(_e=r.R16F),ie===r.UNSIGNED_BYTE&&(_e=r.R8)),w===r.RED_INTEGER&&(ie===r.UNSIGNED_BYTE&&(_e=r.R8UI),ie===r.UNSIGNED_SHORT&&(_e=r.R16UI),ie===r.UNSIGNED_INT&&(_e=r.R32UI),ie===r.BYTE&&(_e=r.R8I),ie===r.SHORT&&(_e=r.R16I),ie===r.INT&&(_e=r.R32I)),w===r.RG&&(ie===r.FLOAT&&(_e=r.RG32F),ie===r.HALF_FLOAT&&(_e=r.RG16F),ie===r.UNSIGNED_BYTE&&(_e=r.RG8)),w===r.RG_INTEGER&&(ie===r.UNSIGNED_BYTE&&(_e=r.RG8UI),ie===r.UNSIGNED_SHORT&&(_e=r.RG16UI),ie===r.UNSIGNED_INT&&(_e=r.RG32UI),ie===r.BYTE&&(_e=r.RG8I),ie===r.SHORT&&(_e=r.RG16I),ie===r.INT&&(_e=r.RG32I)),w===r.RGB_INTEGER&&(ie===r.UNSIGNED_BYTE&&(_e=r.RGB8UI),ie===r.UNSIGNED_SHORT&&(_e=r.RGB16UI),ie===r.UNSIGNED_INT&&(_e=r.RGB32UI),ie===r.BYTE&&(_e=r.RGB8I),ie===r.SHORT&&(_e=r.RGB16I),ie===r.INT&&(_e=r.RGB32I)),w===r.RGBA_INTEGER&&(ie===r.UNSIGNED_BYTE&&(_e=r.RGBA8UI),ie===r.UNSIGNED_SHORT&&(_e=r.RGBA16UI),ie===r.UNSIGNED_INT&&(_e=r.RGBA32UI),ie===r.BYTE&&(_e=r.RGBA8I),ie===r.SHORT&&(_e=r.RGBA16I),ie===r.INT&&(_e=r.RGBA32I)),w===r.RGB&&ie===r.UNSIGNED_INT_5_9_9_9_REV&&(_e=r.RGB9_E5),w===r.RGBA){const qe=Ee?Nc:Lt.getTransfer(xe);ie===r.FLOAT&&(_e=r.RGBA32F),ie===r.HALF_FLOAT&&(_e=r.RGBA16F),ie===r.UNSIGNED_BYTE&&(_e=qe===jt?r.SRGB8_ALPHA8:r.RGBA8),ie===r.UNSIGNED_SHORT_4_4_4_4&&(_e=r.RGBA4),ie===r.UNSIGNED_SHORT_5_5_5_1&&(_e=r.RGB5_A1)}return(_e===r.R16F||_e===r.R32F||_e===r.RG16F||_e===r.RG32F||_e===r.RGBA16F||_e===r.RGBA32F)&&t.get("EXT_color_buffer_float"),_e}function D(L,w){let ie;return L?w===null||w===Es||w===Cr?ie=r.DEPTH24_STENCIL8:w===aa?ie=r.DEPTH32F_STENCIL8:w===zo&&(ie=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Es||w===Cr?ie=r.DEPTH_COMPONENT24:w===aa?ie=r.DEPTH_COMPONENT32F:w===zo&&(ie=r.DEPTH_COMPONENT16),ie}function W(L,w){return b(L)===!0||L.isFramebufferTexture&&L.minFilter!==Ti&&L.minFilter!==Ui?Math.log2(Math.max(w.width,w.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?w.mipmaps.length:1}function k(L){const w=L.target;w.removeEventListener("dispose",k),Q(w),w.isVideoTexture&&y.delete(w)}function I(L){const w=L.target;w.removeEventListener("dispose",I),N(w)}function Q(L){const w=s.get(L);if(w.__webglInit===void 0)return;const ie=L.source,xe=v.get(ie);if(xe){const Ee=xe[w.__cacheKey];Ee.usedTimes--,Ee.usedTimes===0&&U(L),Object.keys(xe).length===0&&v.delete(ie)}s.remove(L)}function U(L){const w=s.get(L);r.deleteTexture(w.__webglTexture);const ie=L.source,xe=v.get(ie);delete xe[w.__cacheKey],d.memory.textures--}function N(L){const w=s.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),s.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let xe=0;xe<6;xe++){if(Array.isArray(w.__webglFramebuffer[xe]))for(let Ee=0;Ee<w.__webglFramebuffer[xe].length;Ee++)r.deleteFramebuffer(w.__webglFramebuffer[xe][Ee]);else r.deleteFramebuffer(w.__webglFramebuffer[xe]);w.__webglDepthbuffer&&r.deleteRenderbuffer(w.__webglDepthbuffer[xe])}else{if(Array.isArray(w.__webglFramebuffer))for(let xe=0;xe<w.__webglFramebuffer.length;xe++)r.deleteFramebuffer(w.__webglFramebuffer[xe]);else r.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&r.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&r.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let xe=0;xe<w.__webglColorRenderbuffer.length;xe++)w.__webglColorRenderbuffer[xe]&&r.deleteRenderbuffer(w.__webglColorRenderbuffer[xe]);w.__webglDepthRenderbuffer&&r.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const ie=L.textures;for(let xe=0,Ee=ie.length;xe<Ee;xe++){const _e=s.get(ie[xe]);_e.__webglTexture&&(r.deleteTexture(_e.__webglTexture),d.memory.textures--),s.remove(ie[xe])}s.remove(L)}let V=0;function he(){V=0}function le(){const L=V;return L>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+l.maxTextures),V+=1,L}function ge(L){const w=[];return w.push(L.wrapS),w.push(L.wrapT),w.push(L.wrapR||0),w.push(L.magFilter),w.push(L.minFilter),w.push(L.anisotropy),w.push(L.internalFormat),w.push(L.format),w.push(L.type),w.push(L.generateMipmaps),w.push(L.premultiplyAlpha),w.push(L.flipY),w.push(L.unpackAlignment),w.push(L.colorSpace),w.join()}function be(L,w){const ie=s.get(L);if(L.isVideoTexture&&je(L),L.isRenderTargetTexture===!1&&L.version>0&&ie.__version!==L.version){const xe=L.image;if(xe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(xe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{G(ie,L,w);return}}i.bindTexture(r.TEXTURE_2D,ie.__webglTexture,r.TEXTURE0+w)}function z(L,w){const ie=s.get(L);if(L.version>0&&ie.__version!==L.version){G(ie,L,w);return}i.bindTexture(r.TEXTURE_2D_ARRAY,ie.__webglTexture,r.TEXTURE0+w)}function ee(L,w){const ie=s.get(L);if(L.version>0&&ie.__version!==L.version){G(ie,L,w);return}i.bindTexture(r.TEXTURE_3D,ie.__webglTexture,r.TEXTURE0+w)}function J(L,w){const ie=s.get(L);if(L.version>0&&ie.__version!==L.version){$(ie,L,w);return}i.bindTexture(r.TEXTURE_CUBE_MAP,ie.__webglTexture,r.TEXTURE0+w)}const Me={[Fd]:r.REPEAT,[Ss]:r.CLAMP_TO_EDGE,[Hd]:r.MIRRORED_REPEAT},F={[Ti]:r.NEAREST,[hS]:r.NEAREST_MIPMAP_NEAREST,[ec]:r.NEAREST_MIPMAP_LINEAR,[Ui]:r.LINEAR,[Kf]:r.LINEAR_MIPMAP_NEAREST,[bs]:r.LINEAR_MIPMAP_LINEAR},E={[vS]:r.NEVER,[ES]:r.ALWAYS,[_S]:r.LESS,[zx]:r.LEQUAL,[yS]:r.EQUAL,[MS]:r.GEQUAL,[SS]:r.GREATER,[bS]:r.NOTEQUAL};function j(L,w){if(w.type===aa&&t.has("OES_texture_float_linear")===!1&&(w.magFilter===Ui||w.magFilter===Kf||w.magFilter===ec||w.magFilter===bs||w.minFilter===Ui||w.minFilter===Kf||w.minFilter===ec||w.minFilter===bs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(L,r.TEXTURE_WRAP_S,Me[w.wrapS]),r.texParameteri(L,r.TEXTURE_WRAP_T,Me[w.wrapT]),(L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY)&&r.texParameteri(L,r.TEXTURE_WRAP_R,Me[w.wrapR]),r.texParameteri(L,r.TEXTURE_MAG_FILTER,F[w.magFilter]),r.texParameteri(L,r.TEXTURE_MIN_FILTER,F[w.minFilter]),w.compareFunction&&(r.texParameteri(L,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(L,r.TEXTURE_COMPARE_FUNC,E[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Ti||w.minFilter!==ec&&w.minFilter!==bs||w.type===aa&&t.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||s.get(w).__currentAnisotropy){const ie=t.get("EXT_texture_filter_anisotropic");r.texParameterf(L,ie.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,l.getMaxAnisotropy())),s.get(w).__currentAnisotropy=w.anisotropy}}}function ce(L,w){let ie=!1;L.__webglInit===void 0&&(L.__webglInit=!0,w.addEventListener("dispose",k));const xe=w.source;let Ee=v.get(xe);Ee===void 0&&(Ee={},v.set(xe,Ee));const _e=ge(w);if(_e!==L.__cacheKey){Ee[_e]===void 0&&(Ee[_e]={texture:r.createTexture(),usedTimes:0},d.memory.textures++,ie=!0),Ee[_e].usedTimes++;const qe=Ee[L.__cacheKey];qe!==void 0&&(Ee[L.__cacheKey].usedTimes--,qe.usedTimes===0&&U(w)),L.__cacheKey=_e,L.__webglTexture=Ee[_e].texture}return ie}function G(L,w,ie){let xe=r.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(xe=r.TEXTURE_2D_ARRAY),w.isData3DTexture&&(xe=r.TEXTURE_3D);const Ee=ce(L,w),_e=w.source;i.bindTexture(xe,L.__webglTexture,r.TEXTURE0+ie);const qe=s.get(_e);if(_e.version!==qe.__version||Ee===!0){i.activeTexture(r.TEXTURE0+ie);const Re=Lt.getPrimaries(Lt.workingColorSpace),ke=w.colorSpace===ka?null:Lt.getPrimaries(w.colorSpace),xt=w.colorSpace===ka||Re===ke?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,w.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,w.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,xt);let we=C(w.image,!1,l.maxTextureSize);we=vt(w,we);const Ge=c.convert(w.format,w.colorSpace),Ke=c.convert(w.type);let Ze=O(w.internalFormat,Ge,Ke,w.colorSpace,w.isVideoTexture);j(xe,w);let Be;const rt=w.mipmaps,dt=w.isVideoTexture!==!0,Ft=qe.__version===void 0||Ee===!0,Y=_e.dataReady,Ne=W(w,we);if(w.isDepthTexture)Ze=D(w.format===Rr,w.type),Ft&&(dt?i.texStorage2D(r.TEXTURE_2D,1,Ze,we.width,we.height):i.texImage2D(r.TEXTURE_2D,0,Ze,we.width,we.height,0,Ge,Ke,null));else if(w.isDataTexture)if(rt.length>0){dt&&Ft&&i.texStorage2D(r.TEXTURE_2D,Ne,Ze,rt[0].width,rt[0].height);for(let pe=0,Se=rt.length;pe<Se;pe++)Be=rt[pe],dt?Y&&i.texSubImage2D(r.TEXTURE_2D,pe,0,0,Be.width,Be.height,Ge,Ke,Be.data):i.texImage2D(r.TEXTURE_2D,pe,Ze,Be.width,Be.height,0,Ge,Ke,Be.data);w.generateMipmaps=!1}else dt?(Ft&&i.texStorage2D(r.TEXTURE_2D,Ne,Ze,we.width,we.height),Y&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,we.width,we.height,Ge,Ke,we.data)):i.texImage2D(r.TEXTURE_2D,0,Ze,we.width,we.height,0,Ge,Ke,we.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){dt&&Ft&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Ne,Ze,rt[0].width,rt[0].height,we.depth);for(let pe=0,Se=rt.length;pe<Se;pe++)if(Be=rt[pe],w.format!==Ei)if(Ge!==null)if(dt){if(Y)if(w.layerUpdates.size>0){const De=q0(Be.width,Be.height,w.format,w.type);for(const Le of w.layerUpdates){const ot=Be.data.subarray(Le*De/Be.data.BYTES_PER_ELEMENT,(Le+1)*De/Be.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,pe,0,0,Le,Be.width,Be.height,1,Ge,ot)}w.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,pe,0,0,0,Be.width,Be.height,we.depth,Ge,Be.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,pe,Ze,Be.width,Be.height,we.depth,0,Be.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else dt?Y&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,pe,0,0,0,Be.width,Be.height,we.depth,Ge,Ke,Be.data):i.texImage3D(r.TEXTURE_2D_ARRAY,pe,Ze,Be.width,Be.height,we.depth,0,Ge,Ke,Be.data)}else{dt&&Ft&&i.texStorage2D(r.TEXTURE_2D,Ne,Ze,rt[0].width,rt[0].height);for(let pe=0,Se=rt.length;pe<Se;pe++)Be=rt[pe],w.format!==Ei?Ge!==null?dt?Y&&i.compressedTexSubImage2D(r.TEXTURE_2D,pe,0,0,Be.width,Be.height,Ge,Be.data):i.compressedTexImage2D(r.TEXTURE_2D,pe,Ze,Be.width,Be.height,0,Be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):dt?Y&&i.texSubImage2D(r.TEXTURE_2D,pe,0,0,Be.width,Be.height,Ge,Ke,Be.data):i.texImage2D(r.TEXTURE_2D,pe,Ze,Be.width,Be.height,0,Ge,Ke,Be.data)}else if(w.isDataArrayTexture)if(dt){if(Ft&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Ne,Ze,we.width,we.height,we.depth),Y)if(w.layerUpdates.size>0){const pe=q0(we.width,we.height,w.format,w.type);for(const Se of w.layerUpdates){const De=we.data.subarray(Se*pe/we.data.BYTES_PER_ELEMENT,(Se+1)*pe/we.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Se,we.width,we.height,1,Ge,Ke,De)}w.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,we.width,we.height,we.depth,Ge,Ke,we.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,Ze,we.width,we.height,we.depth,0,Ge,Ke,we.data);else if(w.isData3DTexture)dt?(Ft&&i.texStorage3D(r.TEXTURE_3D,Ne,Ze,we.width,we.height,we.depth),Y&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,we.width,we.height,we.depth,Ge,Ke,we.data)):i.texImage3D(r.TEXTURE_3D,0,Ze,we.width,we.height,we.depth,0,Ge,Ke,we.data);else if(w.isFramebufferTexture){if(Ft)if(dt)i.texStorage2D(r.TEXTURE_2D,Ne,Ze,we.width,we.height);else{let pe=we.width,Se=we.height;for(let De=0;De<Ne;De++)i.texImage2D(r.TEXTURE_2D,De,Ze,pe,Se,0,Ge,Ke,null),pe>>=1,Se>>=1}}else if(rt.length>0){if(dt&&Ft){const pe=He(rt[0]);i.texStorage2D(r.TEXTURE_2D,Ne,Ze,pe.width,pe.height)}for(let pe=0,Se=rt.length;pe<Se;pe++)Be=rt[pe],dt?Y&&i.texSubImage2D(r.TEXTURE_2D,pe,0,0,Ge,Ke,Be):i.texImage2D(r.TEXTURE_2D,pe,Ze,Ge,Ke,Be);w.generateMipmaps=!1}else if(dt){if(Ft){const pe=He(we);i.texStorage2D(r.TEXTURE_2D,Ne,Ze,pe.width,pe.height)}Y&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,Ge,Ke,we)}else i.texImage2D(r.TEXTURE_2D,0,Ze,Ge,Ke,we);b(w)&&_(xe),qe.__version=_e.version,w.onUpdate&&w.onUpdate(w)}L.__version=w.version}function $(L,w,ie){if(w.image.length!==6)return;const xe=ce(L,w),Ee=w.source;i.bindTexture(r.TEXTURE_CUBE_MAP,L.__webglTexture,r.TEXTURE0+ie);const _e=s.get(Ee);if(Ee.version!==_e.__version||xe===!0){i.activeTexture(r.TEXTURE0+ie);const qe=Lt.getPrimaries(Lt.workingColorSpace),Re=w.colorSpace===ka?null:Lt.getPrimaries(w.colorSpace),ke=w.colorSpace===ka||qe===Re?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,w.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,w.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke);const xt=w.isCompressedTexture||w.image[0].isCompressedTexture,we=w.image[0]&&w.image[0].isDataTexture,Ge=[];for(let Se=0;Se<6;Se++)!xt&&!we?Ge[Se]=C(w.image[Se],!0,l.maxCubemapSize):Ge[Se]=we?w.image[Se].image:w.image[Se],Ge[Se]=vt(w,Ge[Se]);const Ke=Ge[0],Ze=c.convert(w.format,w.colorSpace),Be=c.convert(w.type),rt=O(w.internalFormat,Ze,Be,w.colorSpace),dt=w.isVideoTexture!==!0,Ft=_e.__version===void 0||xe===!0,Y=Ee.dataReady;let Ne=W(w,Ke);j(r.TEXTURE_CUBE_MAP,w);let pe;if(xt){dt&&Ft&&i.texStorage2D(r.TEXTURE_CUBE_MAP,Ne,rt,Ke.width,Ke.height);for(let Se=0;Se<6;Se++){pe=Ge[Se].mipmaps;for(let De=0;De<pe.length;De++){const Le=pe[De];w.format!==Ei?Ze!==null?dt?Y&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Se,De,0,0,Le.width,Le.height,Ze,Le.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Se,De,rt,Le.width,Le.height,0,Le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):dt?Y&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Se,De,0,0,Le.width,Le.height,Ze,Be,Le.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Se,De,rt,Le.width,Le.height,0,Ze,Be,Le.data)}}}else{if(pe=w.mipmaps,dt&&Ft){pe.length>0&&Ne++;const Se=He(Ge[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,Ne,rt,Se.width,Se.height)}for(let Se=0;Se<6;Se++)if(we){dt?Y&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,Ge[Se].width,Ge[Se].height,Ze,Be,Ge[Se].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,rt,Ge[Se].width,Ge[Se].height,0,Ze,Be,Ge[Se].data);for(let De=0;De<pe.length;De++){const ot=pe[De].image[Se].image;dt?Y&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Se,De+1,0,0,ot.width,ot.height,Ze,Be,ot.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Se,De+1,rt,ot.width,ot.height,0,Ze,Be,ot.data)}}else{dt?Y&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,Ze,Be,Ge[Se]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,rt,Ze,Be,Ge[Se]);for(let De=0;De<pe.length;De++){const Le=pe[De];dt?Y&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Se,De+1,0,0,Ze,Be,Le.image[Se]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Se,De+1,rt,Ze,Be,Le.image[Se])}}}b(w)&&_(r.TEXTURE_CUBE_MAP),_e.__version=Ee.version,w.onUpdate&&w.onUpdate(w)}L.__version=w.version}function de(L,w,ie,xe,Ee,_e){const qe=c.convert(ie.format,ie.colorSpace),Re=c.convert(ie.type),ke=O(ie.internalFormat,qe,Re,ie.colorSpace),xt=s.get(w),we=s.get(ie);if(we.__renderTarget=w,!xt.__hasExternalTextures){const Ge=Math.max(1,w.width>>_e),Ke=Math.max(1,w.height>>_e);Ee===r.TEXTURE_3D||Ee===r.TEXTURE_2D_ARRAY?i.texImage3D(Ee,_e,ke,Ge,Ke,w.depth,0,qe,Re,null):i.texImage2D(Ee,_e,ke,Ge,Ke,0,qe,Re,null)}i.bindFramebuffer(r.FRAMEBUFFER,L),st(w)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,xe,Ee,we.__webglTexture,0,at(w)):(Ee===r.TEXTURE_2D||Ee>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Ee<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,xe,Ee,we.__webglTexture,_e),i.bindFramebuffer(r.FRAMEBUFFER,null)}function re(L,w,ie){if(r.bindRenderbuffer(r.RENDERBUFFER,L),w.depthBuffer){const xe=w.depthTexture,Ee=xe&&xe.isDepthTexture?xe.type:null,_e=D(w.stencilBuffer,Ee),qe=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Re=at(w);st(w)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Re,_e,w.width,w.height):ie?r.renderbufferStorageMultisample(r.RENDERBUFFER,Re,_e,w.width,w.height):r.renderbufferStorage(r.RENDERBUFFER,_e,w.width,w.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,qe,r.RENDERBUFFER,L)}else{const xe=w.textures;for(let Ee=0;Ee<xe.length;Ee++){const _e=xe[Ee],qe=c.convert(_e.format,_e.colorSpace),Re=c.convert(_e.type),ke=O(_e.internalFormat,qe,Re,_e.colorSpace),xt=at(w);ie&&st(w)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,xt,ke,w.width,w.height):st(w)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,xt,ke,w.width,w.height):r.renderbufferStorage(r.RENDERBUFFER,ke,w.width,w.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Te(L,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(r.FRAMEBUFFER,L),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const xe=s.get(w.depthTexture);xe.__renderTarget=w,(!xe.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),be(w.depthTexture,0);const Ee=xe.__webglTexture,_e=at(w);if(w.depthTexture.format===br)st(w)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Ee,0,_e):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Ee,0);else if(w.depthTexture.format===Rr)st(w)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Ee,0,_e):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Ee,0);else throw new Error("Unknown depthTexture format")}function Ce(L){const w=s.get(L),ie=L.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==L.depthTexture){const xe=L.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),xe){const Ee=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,xe.removeEventListener("dispose",Ee)};xe.addEventListener("dispose",Ee),w.__depthDisposeCallback=Ee}w.__boundDepthTexture=xe}if(L.depthTexture&&!w.__autoAllocateDepthBuffer){if(ie)throw new Error("target.depthTexture not supported in Cube render targets");Te(w.__webglFramebuffer,L)}else if(ie){w.__webglDepthbuffer=[];for(let xe=0;xe<6;xe++)if(i.bindFramebuffer(r.FRAMEBUFFER,w.__webglFramebuffer[xe]),w.__webglDepthbuffer[xe]===void 0)w.__webglDepthbuffer[xe]=r.createRenderbuffer(),re(w.__webglDepthbuffer[xe],L,!1);else{const Ee=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,_e=w.__webglDepthbuffer[xe];r.bindRenderbuffer(r.RENDERBUFFER,_e),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ee,r.RENDERBUFFER,_e)}}else if(i.bindFramebuffer(r.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=r.createRenderbuffer(),re(w.__webglDepthbuffer,L,!1);else{const xe=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ee=w.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,Ee),r.framebufferRenderbuffer(r.FRAMEBUFFER,xe,r.RENDERBUFFER,Ee)}i.bindFramebuffer(r.FRAMEBUFFER,null)}function Ue(L,w,ie){const xe=s.get(L);w!==void 0&&de(xe.__webglFramebuffer,L,L.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),ie!==void 0&&Ce(L)}function tt(L){const w=L.texture,ie=s.get(L),xe=s.get(w);L.addEventListener("dispose",I);const Ee=L.textures,_e=L.isWebGLCubeRenderTarget===!0,qe=Ee.length>1;if(qe||(xe.__webglTexture===void 0&&(xe.__webglTexture=r.createTexture()),xe.__version=w.version,d.memory.textures++),_e){ie.__webglFramebuffer=[];for(let Re=0;Re<6;Re++)if(w.mipmaps&&w.mipmaps.length>0){ie.__webglFramebuffer[Re]=[];for(let ke=0;ke<w.mipmaps.length;ke++)ie.__webglFramebuffer[Re][ke]=r.createFramebuffer()}else ie.__webglFramebuffer[Re]=r.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){ie.__webglFramebuffer=[];for(let Re=0;Re<w.mipmaps.length;Re++)ie.__webglFramebuffer[Re]=r.createFramebuffer()}else ie.__webglFramebuffer=r.createFramebuffer();if(qe)for(let Re=0,ke=Ee.length;Re<ke;Re++){const xt=s.get(Ee[Re]);xt.__webglTexture===void 0&&(xt.__webglTexture=r.createTexture(),d.memory.textures++)}if(L.samples>0&&st(L)===!1){ie.__webglMultisampledFramebuffer=r.createFramebuffer(),ie.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,ie.__webglMultisampledFramebuffer);for(let Re=0;Re<Ee.length;Re++){const ke=Ee[Re];ie.__webglColorRenderbuffer[Re]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,ie.__webglColorRenderbuffer[Re]);const xt=c.convert(ke.format,ke.colorSpace),we=c.convert(ke.type),Ge=O(ke.internalFormat,xt,we,ke.colorSpace,L.isXRRenderTarget===!0),Ke=at(L);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ke,Ge,L.width,L.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Re,r.RENDERBUFFER,ie.__webglColorRenderbuffer[Re])}r.bindRenderbuffer(r.RENDERBUFFER,null),L.depthBuffer&&(ie.__webglDepthRenderbuffer=r.createRenderbuffer(),re(ie.__webglDepthRenderbuffer,L,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(_e){i.bindTexture(r.TEXTURE_CUBE_MAP,xe.__webglTexture),j(r.TEXTURE_CUBE_MAP,w);for(let Re=0;Re<6;Re++)if(w.mipmaps&&w.mipmaps.length>0)for(let ke=0;ke<w.mipmaps.length;ke++)de(ie.__webglFramebuffer[Re][ke],L,w,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Re,ke);else de(ie.__webglFramebuffer[Re],L,w,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0);b(w)&&_(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(qe){for(let Re=0,ke=Ee.length;Re<ke;Re++){const xt=Ee[Re],we=s.get(xt);i.bindTexture(r.TEXTURE_2D,we.__webglTexture),j(r.TEXTURE_2D,xt),de(ie.__webglFramebuffer,L,xt,r.COLOR_ATTACHMENT0+Re,r.TEXTURE_2D,0),b(xt)&&_(r.TEXTURE_2D)}i.unbindTexture()}else{let Re=r.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Re=L.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Re,xe.__webglTexture),j(Re,w),w.mipmaps&&w.mipmaps.length>0)for(let ke=0;ke<w.mipmaps.length;ke++)de(ie.__webglFramebuffer[ke],L,w,r.COLOR_ATTACHMENT0,Re,ke);else de(ie.__webglFramebuffer,L,w,r.COLOR_ATTACHMENT0,Re,0);b(w)&&_(Re),i.unbindTexture()}L.depthBuffer&&Ce(L)}function it(L){const w=L.textures;for(let ie=0,xe=w.length;ie<xe;ie++){const Ee=w[ie];if(b(Ee)){const _e=B(L),qe=s.get(Ee).__webglTexture;i.bindTexture(_e,qe),_(_e),i.unbindTexture()}}}const Qe=[],P=[];function Pt(L){if(L.samples>0){if(st(L)===!1){const w=L.textures,ie=L.width,xe=L.height;let Ee=r.COLOR_BUFFER_BIT;const _e=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,qe=s.get(L),Re=w.length>1;if(Re)for(let ke=0;ke<w.length;ke++)i.bindFramebuffer(r.FRAMEBUFFER,qe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ke,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,qe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ke,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,qe.__webglMultisampledFramebuffer),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,qe.__webglFramebuffer);for(let ke=0;ke<w.length;ke++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(Ee|=r.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(Ee|=r.STENCIL_BUFFER_BIT)),Re){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,qe.__webglColorRenderbuffer[ke]);const xt=s.get(w[ke]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,xt,0)}r.blitFramebuffer(0,0,ie,xe,0,0,ie,xe,Ee,r.NEAREST),m===!0&&(Qe.length=0,P.length=0,Qe.push(r.COLOR_ATTACHMENT0+ke),L.depthBuffer&&L.resolveDepthBuffer===!1&&(Qe.push(_e),P.push(_e),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,P)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Qe))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Re)for(let ke=0;ke<w.length;ke++){i.bindFramebuffer(r.FRAMEBUFFER,qe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ke,r.RENDERBUFFER,qe.__webglColorRenderbuffer[ke]);const xt=s.get(w[ke]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,qe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ke,r.TEXTURE_2D,xt,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,qe.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&m){const w=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[w])}}}function at(L){return Math.min(l.maxSamples,L.samples)}function st(L){const w=s.get(L);return L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function je(L){const w=d.render.frame;y.get(L)!==w&&(y.set(L,w),L.update())}function vt(L,w){const ie=L.colorSpace,xe=L.format,Ee=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||ie!==Nr&&ie!==ka&&(Lt.getTransfer(ie)===jt?(xe!==Ei||Ee!==la)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ie)),w}function He(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(p.width=L.naturalWidth||L.width,p.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(p.width=L.displayWidth,p.height=L.displayHeight):(p.width=L.width,p.height=L.height),p}this.allocateTextureUnit=le,this.resetTextureUnits=he,this.setTexture2D=be,this.setTexture2DArray=z,this.setTexture3D=ee,this.setTextureCube=J,this.rebindTextures=Ue,this.setupRenderTarget=tt,this.updateRenderTargetMipmap=it,this.updateMultisampleRenderTarget=Pt,this.setupDepthRenderbuffer=Ce,this.setupFrameBufferTexture=de,this.useMultisampledRTT=st}function IT(r,t){function i(s,l=ka){let c;const d=Lt.getTransfer(l);if(s===la)return r.UNSIGNED_BYTE;if(s===_h)return r.UNSIGNED_SHORT_4_4_4_4;if(s===yh)return r.UNSIGNED_SHORT_5_5_5_1;if(s===Cx)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===Ax)return r.BYTE;if(s===wx)return r.SHORT;if(s===zo)return r.UNSIGNED_SHORT;if(s===vh)return r.INT;if(s===Es)return r.UNSIGNED_INT;if(s===aa)return r.FLOAT;if(s===Bo)return r.HALF_FLOAT;if(s===Rx)return r.ALPHA;if(s===Nx)return r.RGB;if(s===Ei)return r.RGBA;if(s===Dx)return r.LUMINANCE;if(s===Ux)return r.LUMINANCE_ALPHA;if(s===br)return r.DEPTH_COMPONENT;if(s===Rr)return r.DEPTH_STENCIL;if(s===Lx)return r.RED;if(s===Sh)return r.RED_INTEGER;if(s===Ox)return r.RG;if(s===bh)return r.RG_INTEGER;if(s===Mh)return r.RGBA_INTEGER;if(s===Ec||s===Tc||s===Ac||s===wc)if(d===jt)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===Ec)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Tc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Ac)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===wc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===Ec)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Tc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Ac)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===wc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===kd||s===Gd||s===Vd||s===jd)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===kd)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Gd)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Vd)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===jd)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Xd||s===Wd||s===qd)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(s===Xd||s===Wd)return d===jt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===qd)return d===jt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Yd||s===Zd||s===Kd||s===Qd||s===Jd||s===$d||s===eh||s===th||s===nh||s===ih||s===ah||s===sh||s===rh||s===oh)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(s===Yd)return d===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Zd)return d===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Kd)return d===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Qd)return d===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Jd)return d===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===$d)return d===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===eh)return d===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===th)return d===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===nh)return d===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===ih)return d===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===ah)return d===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===sh)return d===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===rh)return d===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===oh)return d===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Cc||s===lh||s===ch)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(s===Cc)return d===jt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===lh)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===ch)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Px||s===uh||s===fh||s===dh)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(s===Cc)return c.COMPRESSED_RED_RGTC1_EXT;if(s===uh)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===fh)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===dh)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Cr?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const BT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,FT=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class HT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i,s){if(this.texture===null){const l=new Pn,c=t.properties.get(l);c.__webglTexture=i.texture,(i.depthNear!==s.depthNear||i.depthFar!==s.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=l}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new Xa({vertexShader:BT,fragmentShader:FT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new ra(new Pc(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class kT extends Ur{constructor(t,i){super();const s=this;let l=null,c=1,d=null,h="local-floor",m=1,p=null,y=null,x=null,v=null,M=null,T=null;const C=new HT,b=i.getContextAttributes();let _=null,B=null;const O=[],D=[],W=new Wt;let k=null;const I=new di;I.viewport=new sn;const Q=new di;Q.viewport=new sn;const U=[I,Q],N=new lb;let V=null,he=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let $=O[G];return $===void 0&&($=new vd,O[G]=$),$.getTargetRaySpace()},this.getControllerGrip=function(G){let $=O[G];return $===void 0&&($=new vd,O[G]=$),$.getGripSpace()},this.getHand=function(G){let $=O[G];return $===void 0&&($=new vd,O[G]=$),$.getHandSpace()};function le(G){const $=D.indexOf(G.inputSource);if($===-1)return;const de=O[$];de!==void 0&&(de.update(G.inputSource,G.frame,p||d),de.dispatchEvent({type:G.type,data:G.inputSource}))}function ge(){l.removeEventListener("select",le),l.removeEventListener("selectstart",le),l.removeEventListener("selectend",le),l.removeEventListener("squeeze",le),l.removeEventListener("squeezestart",le),l.removeEventListener("squeezeend",le),l.removeEventListener("end",ge),l.removeEventListener("inputsourceschange",be);for(let G=0;G<O.length;G++){const $=D[G];$!==null&&(D[G]=null,O[G].disconnect($))}V=null,he=null,C.reset(),t.setRenderTarget(_),M=null,v=null,x=null,l=null,B=null,ce.stop(),s.isPresenting=!1,t.setPixelRatio(k),t.setSize(W.width,W.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){c=G,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){h=G,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||d},this.setReferenceSpace=function(G){p=G},this.getBaseLayer=function(){return v!==null?v:M},this.getBinding=function(){return x},this.getFrame=function(){return T},this.getSession=function(){return l},this.setSession=async function(G){if(l=G,l!==null){if(_=t.getRenderTarget(),l.addEventListener("select",le),l.addEventListener("selectstart",le),l.addEventListener("selectend",le),l.addEventListener("squeeze",le),l.addEventListener("squeezestart",le),l.addEventListener("squeezeend",le),l.addEventListener("end",ge),l.addEventListener("inputsourceschange",be),b.xrCompatible!==!0&&await i.makeXRCompatible(),k=t.getPixelRatio(),t.getSize(W),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let de=null,re=null,Te=null;b.depth&&(Te=b.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,de=b.stencil?Rr:br,re=b.stencil?Cr:Es);const Ce={colorFormat:i.RGBA8,depthFormat:Te,scaleFactor:c};x=new XRWebGLBinding(l,i),v=x.createProjectionLayer(Ce),l.updateRenderState({layers:[v]}),t.setPixelRatio(1),t.setSize(v.textureWidth,v.textureHeight,!1),B=new Ts(v.textureWidth,v.textureHeight,{format:Ei,type:la,depthTexture:new Qx(v.textureWidth,v.textureHeight,re,void 0,void 0,void 0,void 0,void 0,void 0,de),stencilBuffer:b.stencil,colorSpace:t.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1})}else{const de={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:c};M=new XRWebGLLayer(l,i,de),l.updateRenderState({baseLayer:M}),t.setPixelRatio(1),t.setSize(M.framebufferWidth,M.framebufferHeight,!1),B=new Ts(M.framebufferWidth,M.framebufferHeight,{format:Ei,type:la,colorSpace:t.outputColorSpace,stencilBuffer:b.stencil})}B.isXRRenderTarget=!0,this.setFoveation(m),p=null,d=await l.requestReferenceSpace(h),ce.setContext(l),ce.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return C.getDepthTexture()};function be(G){for(let $=0;$<G.removed.length;$++){const de=G.removed[$],re=D.indexOf(de);re>=0&&(D[re]=null,O[re].disconnect(de))}for(let $=0;$<G.added.length;$++){const de=G.added[$];let re=D.indexOf(de);if(re===-1){for(let Ce=0;Ce<O.length;Ce++)if(Ce>=D.length){D.push(de),re=Ce;break}else if(D[Ce]===null){D[Ce]=de,re=Ce;break}if(re===-1)break}const Te=O[re];Te&&Te.connect(de)}}const z=new fe,ee=new fe;function J(G,$,de){z.setFromMatrixPosition($.matrixWorld),ee.setFromMatrixPosition(de.matrixWorld);const re=z.distanceTo(ee),Te=$.projectionMatrix.elements,Ce=de.projectionMatrix.elements,Ue=Te[14]/(Te[10]-1),tt=Te[14]/(Te[10]+1),it=(Te[9]+1)/Te[5],Qe=(Te[9]-1)/Te[5],P=(Te[8]-1)/Te[0],Pt=(Ce[8]+1)/Ce[0],at=Ue*P,st=Ue*Pt,je=re/(-P+Pt),vt=je*-P;if($.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(vt),G.translateZ(je),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert(),Te[10]===-1)G.projectionMatrix.copy($.projectionMatrix),G.projectionMatrixInverse.copy($.projectionMatrixInverse);else{const He=Ue+je,L=tt+je,w=at-vt,ie=st+(re-vt),xe=it*tt/L*He,Ee=Qe*tt/L*He;G.projectionMatrix.makePerspective(w,ie,xe,Ee,He,L),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}}function Me(G,$){$===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices($.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(l===null)return;let $=G.near,de=G.far;C.texture!==null&&(C.depthNear>0&&($=C.depthNear),C.depthFar>0&&(de=C.depthFar)),N.near=Q.near=I.near=$,N.far=Q.far=I.far=de,(V!==N.near||he!==N.far)&&(l.updateRenderState({depthNear:N.near,depthFar:N.far}),V=N.near,he=N.far),I.layers.mask=G.layers.mask|2,Q.layers.mask=G.layers.mask|4,N.layers.mask=I.layers.mask|Q.layers.mask;const re=G.parent,Te=N.cameras;Me(N,re);for(let Ce=0;Ce<Te.length;Ce++)Me(Te[Ce],re);Te.length===2?J(N,I,Q):N.projectionMatrix.copy(I.projectionMatrix),F(G,N,re)};function F(G,$,de){de===null?G.matrix.copy($.matrixWorld):(G.matrix.copy(de.matrixWorld),G.matrix.invert(),G.matrix.multiply($.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy($.projectionMatrix),G.projectionMatrixInverse.copy($.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=hh*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(v===null&&M===null))return m},this.setFoveation=function(G){m=G,v!==null&&(v.fixedFoveation=G),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=G)},this.hasDepthSensing=function(){return C.texture!==null},this.getDepthSensingMesh=function(){return C.getMesh(N)};let E=null;function j(G,$){if(y=$.getViewerPose(p||d),T=$,y!==null){const de=y.views;M!==null&&(t.setRenderTargetFramebuffer(B,M.framebuffer),t.setRenderTarget(B));let re=!1;de.length!==N.cameras.length&&(N.cameras.length=0,re=!0);for(let Ue=0;Ue<de.length;Ue++){const tt=de[Ue];let it=null;if(M!==null)it=M.getViewport(tt);else{const P=x.getViewSubImage(v,tt);it=P.viewport,Ue===0&&(t.setRenderTargetTextures(B,P.colorTexture,v.ignoreDepthValues?void 0:P.depthStencilTexture),t.setRenderTarget(B))}let Qe=U[Ue];Qe===void 0&&(Qe=new di,Qe.layers.enable(Ue),Qe.viewport=new sn,U[Ue]=Qe),Qe.matrix.fromArray(tt.transform.matrix),Qe.matrix.decompose(Qe.position,Qe.quaternion,Qe.scale),Qe.projectionMatrix.fromArray(tt.projectionMatrix),Qe.projectionMatrixInverse.copy(Qe.projectionMatrix).invert(),Qe.viewport.set(it.x,it.y,it.width,it.height),Ue===0&&(N.matrix.copy(Qe.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),re===!0&&N.cameras.push(Qe)}const Te=l.enabledFeatures;if(Te&&Te.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&x){const Ue=x.getDepthInformation(de[0]);Ue&&Ue.isValid&&Ue.texture&&C.init(t,Ue,l.renderState)}}for(let de=0;de<O.length;de++){const re=D[de],Te=O[de];re!==null&&Te!==void 0&&Te.update(re,$,p||d)}E&&E(G,$),$.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:$}),T=null}const ce=new Jx;ce.setAnimationLoop(j),this.setAnimationLoop=function(G){E=G},this.dispose=function(){}}}const gs=new ca,GT=new rn;function VT(r,t){function i(b,_){b.matrixAutoUpdate===!0&&b.updateMatrix(),_.value.copy(b.matrix)}function s(b,_){_.color.getRGB(b.fogColor.value,Wx(r)),_.isFog?(b.fogNear.value=_.near,b.fogFar.value=_.far):_.isFogExp2&&(b.fogDensity.value=_.density)}function l(b,_,B,O,D){_.isMeshBasicMaterial||_.isMeshLambertMaterial?c(b,_):_.isMeshToonMaterial?(c(b,_),x(b,_)):_.isMeshPhongMaterial?(c(b,_),y(b,_)):_.isMeshStandardMaterial?(c(b,_),v(b,_),_.isMeshPhysicalMaterial&&M(b,_,D)):_.isMeshMatcapMaterial?(c(b,_),T(b,_)):_.isMeshDepthMaterial?c(b,_):_.isMeshDistanceMaterial?(c(b,_),C(b,_)):_.isMeshNormalMaterial?c(b,_):_.isLineBasicMaterial?(d(b,_),_.isLineDashedMaterial&&h(b,_)):_.isPointsMaterial?m(b,_,B,O):_.isSpriteMaterial?p(b,_):_.isShadowMaterial?(b.color.value.copy(_.color),b.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function c(b,_){b.opacity.value=_.opacity,_.color&&b.diffuse.value.copy(_.color),_.emissive&&b.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(b.map.value=_.map,i(_.map,b.mapTransform)),_.alphaMap&&(b.alphaMap.value=_.alphaMap,i(_.alphaMap,b.alphaMapTransform)),_.bumpMap&&(b.bumpMap.value=_.bumpMap,i(_.bumpMap,b.bumpMapTransform),b.bumpScale.value=_.bumpScale,_.side===Xn&&(b.bumpScale.value*=-1)),_.normalMap&&(b.normalMap.value=_.normalMap,i(_.normalMap,b.normalMapTransform),b.normalScale.value.copy(_.normalScale),_.side===Xn&&b.normalScale.value.negate()),_.displacementMap&&(b.displacementMap.value=_.displacementMap,i(_.displacementMap,b.displacementMapTransform),b.displacementScale.value=_.displacementScale,b.displacementBias.value=_.displacementBias),_.emissiveMap&&(b.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,b.emissiveMapTransform)),_.specularMap&&(b.specularMap.value=_.specularMap,i(_.specularMap,b.specularMapTransform)),_.alphaTest>0&&(b.alphaTest.value=_.alphaTest);const B=t.get(_),O=B.envMap,D=B.envMapRotation;O&&(b.envMap.value=O,gs.copy(D),gs.x*=-1,gs.y*=-1,gs.z*=-1,O.isCubeTexture&&O.isRenderTargetTexture===!1&&(gs.y*=-1,gs.z*=-1),b.envMapRotation.value.setFromMatrix4(GT.makeRotationFromEuler(gs)),b.flipEnvMap.value=O.isCubeTexture&&O.isRenderTargetTexture===!1?-1:1,b.reflectivity.value=_.reflectivity,b.ior.value=_.ior,b.refractionRatio.value=_.refractionRatio),_.lightMap&&(b.lightMap.value=_.lightMap,b.lightMapIntensity.value=_.lightMapIntensity,i(_.lightMap,b.lightMapTransform)),_.aoMap&&(b.aoMap.value=_.aoMap,b.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,b.aoMapTransform))}function d(b,_){b.diffuse.value.copy(_.color),b.opacity.value=_.opacity,_.map&&(b.map.value=_.map,i(_.map,b.mapTransform))}function h(b,_){b.dashSize.value=_.dashSize,b.totalSize.value=_.dashSize+_.gapSize,b.scale.value=_.scale}function m(b,_,B,O){b.diffuse.value.copy(_.color),b.opacity.value=_.opacity,b.size.value=_.size*B,b.scale.value=O*.5,_.map&&(b.map.value=_.map,i(_.map,b.uvTransform)),_.alphaMap&&(b.alphaMap.value=_.alphaMap,i(_.alphaMap,b.alphaMapTransform)),_.alphaTest>0&&(b.alphaTest.value=_.alphaTest)}function p(b,_){b.diffuse.value.copy(_.color),b.opacity.value=_.opacity,b.rotation.value=_.rotation,_.map&&(b.map.value=_.map,i(_.map,b.mapTransform)),_.alphaMap&&(b.alphaMap.value=_.alphaMap,i(_.alphaMap,b.alphaMapTransform)),_.alphaTest>0&&(b.alphaTest.value=_.alphaTest)}function y(b,_){b.specular.value.copy(_.specular),b.shininess.value=Math.max(_.shininess,1e-4)}function x(b,_){_.gradientMap&&(b.gradientMap.value=_.gradientMap)}function v(b,_){b.metalness.value=_.metalness,_.metalnessMap&&(b.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,b.metalnessMapTransform)),b.roughness.value=_.roughness,_.roughnessMap&&(b.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,b.roughnessMapTransform)),_.envMap&&(b.envMapIntensity.value=_.envMapIntensity)}function M(b,_,B){b.ior.value=_.ior,_.sheen>0&&(b.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),b.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(b.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,b.sheenColorMapTransform)),_.sheenRoughnessMap&&(b.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,b.sheenRoughnessMapTransform))),_.clearcoat>0&&(b.clearcoat.value=_.clearcoat,b.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(b.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,b.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(b.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,b.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(b.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,b.clearcoatNormalMapTransform),b.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Xn&&b.clearcoatNormalScale.value.negate())),_.dispersion>0&&(b.dispersion.value=_.dispersion),_.iridescence>0&&(b.iridescence.value=_.iridescence,b.iridescenceIOR.value=_.iridescenceIOR,b.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],b.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(b.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,b.iridescenceMapTransform)),_.iridescenceThicknessMap&&(b.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,b.iridescenceThicknessMapTransform))),_.transmission>0&&(b.transmission.value=_.transmission,b.transmissionSamplerMap.value=B.texture,b.transmissionSamplerSize.value.set(B.width,B.height),_.transmissionMap&&(b.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,b.transmissionMapTransform)),b.thickness.value=_.thickness,_.thicknessMap&&(b.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,b.thicknessMapTransform)),b.attenuationDistance.value=_.attenuationDistance,b.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(b.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(b.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,b.anisotropyMapTransform))),b.specularIntensity.value=_.specularIntensity,b.specularColor.value.copy(_.specularColor),_.specularColorMap&&(b.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,b.specularColorMapTransform)),_.specularIntensityMap&&(b.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,b.specularIntensityMapTransform))}function T(b,_){_.matcap&&(b.matcap.value=_.matcap)}function C(b,_){const B=t.get(_).light;b.referencePosition.value.setFromMatrixPosition(B.matrixWorld),b.nearDistance.value=B.shadow.camera.near,b.farDistance.value=B.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function jT(r,t,i,s){let l={},c={},d=[];const h=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(B,O){const D=O.program;s.uniformBlockBinding(B,D)}function p(B,O){let D=l[B.id];D===void 0&&(T(B),D=y(B),l[B.id]=D,B.addEventListener("dispose",b));const W=O.program;s.updateUBOMapping(B,W);const k=t.render.frame;c[B.id]!==k&&(v(B),c[B.id]=k)}function y(B){const O=x();B.__bindingPointIndex=O;const D=r.createBuffer(),W=B.__size,k=B.usage;return r.bindBuffer(r.UNIFORM_BUFFER,D),r.bufferData(r.UNIFORM_BUFFER,W,k),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,O,D),D}function x(){for(let B=0;B<h;B++)if(d.indexOf(B)===-1)return d.push(B),B;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(B){const O=l[B.id],D=B.uniforms,W=B.__cache;r.bindBuffer(r.UNIFORM_BUFFER,O);for(let k=0,I=D.length;k<I;k++){const Q=Array.isArray(D[k])?D[k]:[D[k]];for(let U=0,N=Q.length;U<N;U++){const V=Q[U];if(M(V,k,U,W)===!0){const he=V.__offset,le=Array.isArray(V.value)?V.value:[V.value];let ge=0;for(let be=0;be<le.length;be++){const z=le[be],ee=C(z);typeof z=="number"||typeof z=="boolean"?(V.__data[0]=z,r.bufferSubData(r.UNIFORM_BUFFER,he+ge,V.__data)):z.isMatrix3?(V.__data[0]=z.elements[0],V.__data[1]=z.elements[1],V.__data[2]=z.elements[2],V.__data[3]=0,V.__data[4]=z.elements[3],V.__data[5]=z.elements[4],V.__data[6]=z.elements[5],V.__data[7]=0,V.__data[8]=z.elements[6],V.__data[9]=z.elements[7],V.__data[10]=z.elements[8],V.__data[11]=0):(z.toArray(V.__data,ge),ge+=ee.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,he,V.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function M(B,O,D,W){const k=B.value,I=O+"_"+D;if(W[I]===void 0)return typeof k=="number"||typeof k=="boolean"?W[I]=k:W[I]=k.clone(),!0;{const Q=W[I];if(typeof k=="number"||typeof k=="boolean"){if(Q!==k)return W[I]=k,!0}else if(Q.equals(k)===!1)return Q.copy(k),!0}return!1}function T(B){const O=B.uniforms;let D=0;const W=16;for(let I=0,Q=O.length;I<Q;I++){const U=Array.isArray(O[I])?O[I]:[O[I]];for(let N=0,V=U.length;N<V;N++){const he=U[N],le=Array.isArray(he.value)?he.value:[he.value];for(let ge=0,be=le.length;ge<be;ge++){const z=le[ge],ee=C(z),J=D%W,Me=J%ee.boundary,F=J+Me;D+=Me,F!==0&&W-F<ee.storage&&(D+=W-F),he.__data=new Float32Array(ee.storage/Float32Array.BYTES_PER_ELEMENT),he.__offset=D,D+=ee.storage}}}const k=D%W;return k>0&&(D+=W-k),B.__size=D,B.__cache={},this}function C(B){const O={boundary:0,storage:0};return typeof B=="number"||typeof B=="boolean"?(O.boundary=4,O.storage=4):B.isVector2?(O.boundary=8,O.storage=8):B.isVector3||B.isColor?(O.boundary=16,O.storage=12):B.isVector4?(O.boundary=16,O.storage=16):B.isMatrix3?(O.boundary=48,O.storage=48):B.isMatrix4?(O.boundary=64,O.storage=64):B.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",B),O}function b(B){const O=B.target;O.removeEventListener("dispose",b);const D=d.indexOf(O.__bindingPointIndex);d.splice(D,1),r.deleteBuffer(l[O.id]),delete l[O.id],delete c[O.id]}function _(){for(const B in l)r.deleteBuffer(l[B]);d=[],l={},c={}}return{bind:m,update:p,dispose:_}}class XT{constructor(t={}){const{canvas:i=AS(),context:s=null,depth:l=!0,stencil:c=!1,alpha:d=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:y="default",failIfMajorPerformanceCaveat:x=!1,reverseDepthBuffer:v=!1}=t;this.isWebGLRenderer=!0;let M;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=s.getContextAttributes().alpha}else M=d;const T=new Uint32Array(4),C=new Int32Array(4);let b=null,_=null;const B=[],O=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=fi,this.toneMapping=Va,this.toneMappingExposure=1;const D=this;let W=!1,k=0,I=0,Q=null,U=-1,N=null;const V=new sn,he=new sn;let le=null;const ge=new Ot(0);let be=0,z=i.width,ee=i.height,J=1,Me=null,F=null;const E=new sn(0,0,z,ee),j=new sn(0,0,z,ee);let ce=!1;const G=new Zx;let $=!1,de=!1;this.transmissionResolutionScale=1;const re=new rn,Te=new rn,Ce=new fe,Ue=new sn,tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let it=!1;function Qe(){return Q===null?J:1}let P=s;function Pt(R,Z){return i.getContext(R,Z)}try{const R={alpha:!0,depth:l,stencil:c,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:y,failIfMajorPerformanceCaveat:x};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${xh}`),i.addEventListener("webglcontextlost",Se,!1),i.addEventListener("webglcontextrestored",De,!1),i.addEventListener("webglcontextcreationerror",Le,!1),P===null){const Z="webgl2";if(P=Pt(Z,R),P===null)throw Pt(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let at,st,je,vt,He,L,w,ie,xe,Ee,_e,qe,Re,ke,xt,we,Ge,Ke,Ze,Be,rt,dt,Ft,Y;function Ne(){at=new t1(P),at.init(),dt=new IT(P,at),st=new ZE(P,at,t,dt),je=new PT(P,at),st.reverseDepthBuffer&&v&&je.buffers.depth.setReversed(!0),vt=new a1(P),He=new bT,L=new zT(P,at,je,He,st,dt,vt),w=new QE(D),ie=new e1(D),xe=new fb(P),Ft=new qE(P,xe),Ee=new n1(P,xe,vt,Ft),_e=new r1(P,Ee,xe,vt),Ze=new s1(P,st,L),we=new KE(He),qe=new ST(D,w,ie,at,st,Ft,we),Re=new VT(D,He),ke=new ET,xt=new NT(at),Ke=new WE(D,w,ie,je,_e,M,m),Ge=new LT(D,_e,st),Y=new jT(P,vt,st,je),Be=new YE(P,at,vt),rt=new i1(P,at,vt),vt.programs=qe.programs,D.capabilities=st,D.extensions=at,D.properties=He,D.renderLists=ke,D.shadowMap=Ge,D.state=je,D.info=vt}Ne();const pe=new kT(D,P);this.xr=pe,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const R=at.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=at.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(R){R!==void 0&&(J=R,this.setSize(z,ee,!1))},this.getSize=function(R){return R.set(z,ee)},this.setSize=function(R,Z,se=!0){if(pe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=R,ee=Z,i.width=Math.floor(R*J),i.height=Math.floor(Z*J),se===!0&&(i.style.width=R+"px",i.style.height=Z+"px"),this.setViewport(0,0,R,Z)},this.getDrawingBufferSize=function(R){return R.set(z*J,ee*J).floor()},this.setDrawingBufferSize=function(R,Z,se){z=R,ee=Z,J=se,i.width=Math.floor(R*se),i.height=Math.floor(Z*se),this.setViewport(0,0,R,Z)},this.getCurrentViewport=function(R){return R.copy(V)},this.getViewport=function(R){return R.copy(E)},this.setViewport=function(R,Z,se,oe){R.isVector4?E.set(R.x,R.y,R.z,R.w):E.set(R,Z,se,oe),je.viewport(V.copy(E).multiplyScalar(J).round())},this.getScissor=function(R){return R.copy(j)},this.setScissor=function(R,Z,se,oe){R.isVector4?j.set(R.x,R.y,R.z,R.w):j.set(R,Z,se,oe),je.scissor(he.copy(j).multiplyScalar(J).round())},this.getScissorTest=function(){return ce},this.setScissorTest=function(R){je.setScissorTest(ce=R)},this.setOpaqueSort=function(R){Me=R},this.setTransparentSort=function(R){F=R},this.getClearColor=function(R){return R.copy(Ke.getClearColor())},this.setClearColor=function(){Ke.setClearColor.apply(Ke,arguments)},this.getClearAlpha=function(){return Ke.getClearAlpha()},this.setClearAlpha=function(){Ke.setClearAlpha.apply(Ke,arguments)},this.clear=function(R=!0,Z=!0,se=!0){let oe=0;if(R){let q=!1;if(Q!==null){const Ae=Q.texture.format;q=Ae===Mh||Ae===bh||Ae===Sh}if(q){const Ae=Q.texture.type,Oe=Ae===la||Ae===Es||Ae===zo||Ae===Cr||Ae===_h||Ae===yh,Ie=Ke.getClearColor(),Fe=Ke.getClearAlpha(),lt=Ie.r,ct=Ie.g,Je=Ie.b;Oe?(T[0]=lt,T[1]=ct,T[2]=Je,T[3]=Fe,P.clearBufferuiv(P.COLOR,0,T)):(C[0]=lt,C[1]=ct,C[2]=Je,C[3]=Fe,P.clearBufferiv(P.COLOR,0,C))}else oe|=P.COLOR_BUFFER_BIT}Z&&(oe|=P.DEPTH_BUFFER_BIT),se&&(oe|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(oe)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Se,!1),i.removeEventListener("webglcontextrestored",De,!1),i.removeEventListener("webglcontextcreationerror",Le,!1),Ke.dispose(),ke.dispose(),xt.dispose(),He.dispose(),w.dispose(),ie.dispose(),_e.dispose(),Ft.dispose(),Y.dispose(),qe.dispose(),pe.dispose(),pe.removeEventListener("sessionstart",Or),pe.removeEventListener("sessionend",Pr),Ai.stop()};function Se(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),W=!0}function De(){console.log("THREE.WebGLRenderer: Context Restored."),W=!1;const R=vt.autoReset,Z=Ge.enabled,se=Ge.autoUpdate,oe=Ge.needsUpdate,q=Ge.type;Ne(),vt.autoReset=R,Ge.enabled=Z,Ge.autoUpdate=se,Ge.needsUpdate=oe,Ge.type=q}function Le(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function ot(R){const Z=R.target;Z.removeEventListener("dispose",ot),Kt(Z)}function Kt(R){dn(R),He.remove(R)}function dn(R){const Z=He.get(R).programs;Z!==void 0&&(Z.forEach(function(se){qe.releaseProgram(se)}),R.isShaderMaterial&&qe.releaseShaderCache(R))}this.renderBufferDirect=function(R,Z,se,oe,q,Ae){Z===null&&(Z=tt);const Oe=q.isMesh&&q.matrixWorld.determinant()<0,Ie=Ir(R,Z,se,oe,q);je.setMaterial(oe,Oe);let Fe=se.index,lt=1;if(oe.wireframe===!0){if(Fe=Ee.getWireframeAttribute(se),Fe===void 0)return;lt=2}const ct=se.drawRange,Je=se.attributes.position;let Mt=ct.start*lt,Et=(ct.start+ct.count)*lt;Ae!==null&&(Mt=Math.max(Mt,Ae.start*lt),Et=Math.min(Et,(Ae.start+Ae.count)*lt)),Fe!==null?(Mt=Math.max(Mt,0),Et=Math.min(Et,Fe.count)):Je!=null&&(Mt=Math.max(Mt,0),Et=Math.min(Et,Je.count));const qt=Et-Mt;if(qt<0||qt===1/0)return;Ft.setup(q,oe,Ie,se,Fe);let Nt,ut=Be;if(Fe!==null&&(Nt=xe.get(Fe),ut=rt,ut.setIndex(Nt)),q.isMesh)oe.wireframe===!0?(je.setLineWidth(oe.wireframeLinewidth*Qe()),ut.setMode(P.LINES)):ut.setMode(P.TRIANGLES);else if(q.isLine){let et=oe.linewidth;et===void 0&&(et=1),je.setLineWidth(et*Qe()),q.isLineSegments?ut.setMode(P.LINES):q.isLineLoop?ut.setMode(P.LINE_LOOP):ut.setMode(P.LINE_STRIP)}else q.isPoints?ut.setMode(P.POINTS):q.isSprite&&ut.setMode(P.TRIANGLES);if(q.isBatchedMesh)if(q._multiDrawInstances!==null)ut.renderMultiDrawInstances(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount,q._multiDrawInstances);else if(at.get("WEBGL_multi_draw"))ut.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{const et=q._multiDrawStarts,hn=q._multiDrawCounts,wt=q._multiDrawCount,zn=Fe?xe.get(Fe).bytesPerElement:1,gi=He.get(oe).currentProgram.getUniforms();for(let Dn=0;Dn<wt;Dn++)gi.setValue(P,"_gl_DrawID",Dn),ut.render(et[Dn]/zn,hn[Dn])}else if(q.isInstancedMesh)ut.renderInstances(Mt,qt,q.count);else if(se.isInstancedBufferGeometry){const et=se._maxInstanceCount!==void 0?se._maxInstanceCount:1/0,hn=Math.min(se.instanceCount,et);ut.renderInstances(Mt,qt,hn)}else ut.render(Mt,qt)};function Rt(R,Z,se){R.transparent===!0&&R.side===ia&&R.forceSinglePass===!1?(R.side=Xn,R.needsUpdate=!0,Jt(R,Z,se),R.side=ja,R.needsUpdate=!0,Jt(R,Z,se),R.side=ia):Jt(R,Z,se)}this.compile=function(R,Z,se=null){se===null&&(se=R),_=xt.get(se),_.init(Z),O.push(_),se.traverseVisible(function(q){q.isLight&&q.layers.test(Z.layers)&&(_.pushLight(q),q.castShadow&&_.pushShadow(q))}),R!==se&&R.traverseVisible(function(q){q.isLight&&q.layers.test(Z.layers)&&(_.pushLight(q),q.castShadow&&_.pushShadow(q))}),_.setupLights();const oe=new Set;return R.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;const Ae=q.material;if(Ae)if(Array.isArray(Ae))for(let Oe=0;Oe<Ae.length;Oe++){const Ie=Ae[Oe];Rt(Ie,se,q),oe.add(Ie)}else Rt(Ae,se,q),oe.add(Ae)}),O.pop(),_=null,oe},this.compileAsync=function(R,Z,se=null){const oe=this.compile(R,Z,se);return new Promise(q=>{function Ae(){if(oe.forEach(function(Oe){He.get(Oe).currentProgram.isReady()&&oe.delete(Oe)}),oe.size===0){q(R);return}setTimeout(Ae,10)}at.get("KHR_parallel_shader_compile")!==null?Ae():setTimeout(Ae,10)})};let yn=null;function pi(R){yn&&yn(R)}function Or(){Ai.stop()}function Pr(){Ai.start()}const Ai=new Jx;Ai.setAnimationLoop(pi),typeof self<"u"&&Ai.setContext(self),this.setAnimationLoop=function(R){yn=R,pe.setAnimationLoop(R),R===null?Ai.stop():Ai.start()},pe.addEventListener("sessionstart",Or),pe.addEventListener("sessionend",Pr),this.render=function(R,Z){if(Z!==void 0&&Z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(W===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),pe.enabled===!0&&pe.isPresenting===!0&&(pe.cameraAutoUpdate===!0&&pe.updateCamera(Z),Z=pe.getCamera()),R.isScene===!0&&R.onBeforeRender(D,R,Z,Q),_=xt.get(R,O.length),_.init(Z),O.push(_),Te.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),G.setFromProjectionMatrix(Te),de=this.localClippingEnabled,$=we.init(this.clippingPlanes,de),b=ke.get(R,B.length),b.init(),B.push(b),pe.enabled===!0&&pe.isPresenting===!0){const Ae=D.xr.getDepthSensingMesh();Ae!==null&&Wa(Ae,Z,-1/0,D.sortObjects)}Wa(R,Z,0,D.sortObjects),b.finish(),D.sortObjects===!0&&b.sort(Me,F),it=pe.enabled===!1||pe.isPresenting===!1||pe.hasDepthSensing()===!1,it&&Ke.addToRenderList(b,R),this.info.render.frame++,$===!0&&we.beginShadows();const se=_.state.shadowsArray;Ge.render(se,R,Z),$===!0&&we.endShadows(),this.info.autoReset===!0&&this.info.reset();const oe=b.opaque,q=b.transmissive;if(_.setupLights(),Z.isArrayCamera){const Ae=Z.cameras;if(q.length>0)for(let Oe=0,Ie=Ae.length;Oe<Ie;Oe++){const Fe=Ae[Oe];zr(oe,q,R,Fe)}it&&Ke.render(R);for(let Oe=0,Ie=Ae.length;Oe<Ie;Oe++){const Fe=Ae[Oe];As(b,R,Fe,Fe.viewport)}}else q.length>0&&zr(oe,q,R,Z),it&&Ke.render(R),As(b,R,Z);Q!==null&&I===0&&(L.updateMultisampleRenderTarget(Q),L.updateRenderTargetMipmap(Q)),R.isScene===!0&&R.onAfterRender(D,R,Z),Ft.resetDefaultState(),U=-1,N=null,O.pop(),O.length>0?(_=O[O.length-1],$===!0&&we.setGlobalState(D.clippingPlanes,_.state.camera)):_=null,B.pop(),B.length>0?b=B[B.length-1]:b=null};function Wa(R,Z,se,oe){if(R.visible===!1)return;if(R.layers.test(Z.layers)){if(R.isGroup)se=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(Z);else if(R.isLight)_.pushLight(R),R.castShadow&&_.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||G.intersectsSprite(R)){oe&&Ue.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Te);const Oe=_e.update(R),Ie=R.material;Ie.visible&&b.push(R,Oe,Ie,se,Ue.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||G.intersectsObject(R))){const Oe=_e.update(R),Ie=R.material;if(oe&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Ue.copy(R.boundingSphere.center)):(Oe.boundingSphere===null&&Oe.computeBoundingSphere(),Ue.copy(Oe.boundingSphere.center)),Ue.applyMatrix4(R.matrixWorld).applyMatrix4(Te)),Array.isArray(Ie)){const Fe=Oe.groups;for(let lt=0,ct=Fe.length;lt<ct;lt++){const Je=Fe[lt],Mt=Ie[Je.materialIndex];Mt&&Mt.visible&&b.push(R,Oe,Mt,se,Ue.z,Je)}}else Ie.visible&&b.push(R,Oe,Ie,se,Ue.z,null)}}const Ae=R.children;for(let Oe=0,Ie=Ae.length;Oe<Ie;Oe++)Wa(Ae[Oe],Z,se,oe)}function As(R,Z,se,oe){const q=R.opaque,Ae=R.transmissive,Oe=R.transparent;_.setupLightsView(se),$===!0&&we.setGlobalState(D.clippingPlanes,se),oe&&je.viewport(V.copy(oe)),q.length>0&&qa(q,Z,se),Ae.length>0&&qa(Ae,Z,se),Oe.length>0&&qa(Oe,Z,se),je.buffers.depth.setTest(!0),je.buffers.depth.setMask(!0),je.buffers.color.setMask(!0),je.setPolygonOffset(!1)}function zr(R,Z,se,oe){if((se.isScene===!0?se.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[oe.id]===void 0&&(_.state.transmissionRenderTarget[oe.id]=new Ts(1,1,{generateMipmaps:!0,type:at.has("EXT_color_buffer_half_float")||at.has("EXT_color_buffer_float")?Bo:la,minFilter:bs,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Lt.workingColorSpace}));const Ae=_.state.transmissionRenderTarget[oe.id],Oe=oe.viewport||V;Ae.setSize(Oe.z*D.transmissionResolutionScale,Oe.w*D.transmissionResolutionScale);const Ie=D.getRenderTarget();D.setRenderTarget(Ae),D.getClearColor(ge),be=D.getClearAlpha(),be<1&&D.setClearColor(16777215,.5),D.clear(),it&&Ke.render(se);const Fe=D.toneMapping;D.toneMapping=Va;const lt=oe.viewport;if(oe.viewport!==void 0&&(oe.viewport=void 0),_.setupLightsView(oe),$===!0&&we.setGlobalState(D.clippingPlanes,oe),qa(R,se,oe),L.updateMultisampleRenderTarget(Ae),L.updateRenderTargetMipmap(Ae),at.has("WEBGL_multisampled_render_to_texture")===!1){let ct=!1;for(let Je=0,Mt=Z.length;Je<Mt;Je++){const Et=Z[Je],qt=Et.object,Nt=Et.geometry,ut=Et.material,et=Et.group;if(ut.side===ia&&qt.layers.test(oe.layers)){const hn=ut.side;ut.side=Xn,ut.needsUpdate=!0,mi(qt,se,oe,Nt,ut,et),ut.side=hn,ut.needsUpdate=!0,ct=!0}}ct===!0&&(L.updateMultisampleRenderTarget(Ae),L.updateRenderTargetMipmap(Ae))}D.setRenderTarget(Ie),D.setClearColor(ge,be),lt!==void 0&&(oe.viewport=lt),D.toneMapping=Fe}function qa(R,Z,se){const oe=Z.isScene===!0?Z.overrideMaterial:null;for(let q=0,Ae=R.length;q<Ae;q++){const Oe=R[q],Ie=Oe.object,Fe=Oe.geometry,lt=oe===null?Oe.material:oe,ct=Oe.group;Ie.layers.test(se.layers)&&mi(Ie,Z,se,Fe,lt,ct)}}function mi(R,Z,se,oe,q,Ae){R.onBeforeRender(D,Z,se,oe,q,Ae),R.modelViewMatrix.multiplyMatrices(se.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),q.onBeforeRender(D,Z,se,oe,R,Ae),q.transparent===!0&&q.side===ia&&q.forceSinglePass===!1?(q.side=Xn,q.needsUpdate=!0,D.renderBufferDirect(se,Z,oe,q,R,Ae),q.side=ja,q.needsUpdate=!0,D.renderBufferDirect(se,Z,oe,q,R,Ae),q.side=ia):D.renderBufferDirect(se,Z,oe,q,R,Ae),R.onAfterRender(D,Z,se,oe,q,Ae)}function Jt(R,Z,se){Z.isScene!==!0&&(Z=tt);const oe=He.get(R),q=_.state.lights,Ae=_.state.shadowsArray,Oe=q.state.version,Ie=qe.getParameters(R,q.state,Ae,Z,se),Fe=qe.getProgramCacheKey(Ie);let lt=oe.programs;oe.environment=R.isMeshStandardMaterial?Z.environment:null,oe.fog=Z.fog,oe.envMap=(R.isMeshStandardMaterial?ie:w).get(R.envMap||oe.environment),oe.envMapRotation=oe.environment!==null&&R.envMap===null?Z.environmentRotation:R.envMapRotation,lt===void 0&&(R.addEventListener("dispose",ot),lt=new Map,oe.programs=lt);let ct=lt.get(Fe);if(ct!==void 0){if(oe.currentProgram===ct&&oe.lightsStateVersion===Oe)return Li(R,Ie),ct}else Ie.uniforms=qe.getUniforms(R),R.onBeforeCompile(Ie,D),ct=qe.acquireProgram(Ie,Fe),lt.set(Fe,ct),oe.uniforms=Ie.uniforms;const Je=oe.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Je.clippingPlanes=we.uniform),Li(R,Ie),oe.needsLights=Bc(R),oe.lightsStateVersion=Oe,oe.needsLights&&(Je.ambientLightColor.value=q.state.ambient,Je.lightProbe.value=q.state.probe,Je.directionalLights.value=q.state.directional,Je.directionalLightShadows.value=q.state.directionalShadow,Je.spotLights.value=q.state.spot,Je.spotLightShadows.value=q.state.spotShadow,Je.rectAreaLights.value=q.state.rectArea,Je.ltc_1.value=q.state.rectAreaLTC1,Je.ltc_2.value=q.state.rectAreaLTC2,Je.pointLights.value=q.state.point,Je.pointLightShadows.value=q.state.pointShadow,Je.hemisphereLights.value=q.state.hemi,Je.directionalShadowMap.value=q.state.directionalShadowMap,Je.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Je.spotShadowMap.value=q.state.spotShadowMap,Je.spotLightMatrix.value=q.state.spotLightMatrix,Je.spotLightMap.value=q.state.spotLightMap,Je.pointShadowMap.value=q.state.pointShadowMap,Je.pointShadowMatrix.value=q.state.pointShadowMatrix),oe.currentProgram=ct,oe.uniformsList=null,ct}function Sn(R){if(R.uniformsList===null){const Z=R.currentProgram.getUniforms();R.uniformsList=Rc.seqWithValue(Z.seq,R.uniforms)}return R.uniformsList}function Li(R,Z){const se=He.get(R);se.outputColorSpace=Z.outputColorSpace,se.batching=Z.batching,se.batchingColor=Z.batchingColor,se.instancing=Z.instancing,se.instancingColor=Z.instancingColor,se.instancingMorph=Z.instancingMorph,se.skinning=Z.skinning,se.morphTargets=Z.morphTargets,se.morphNormals=Z.morphNormals,se.morphColors=Z.morphColors,se.morphTargetsCount=Z.morphTargetsCount,se.numClippingPlanes=Z.numClippingPlanes,se.numIntersection=Z.numClipIntersection,se.vertexAlphas=Z.vertexAlphas,se.vertexTangents=Z.vertexTangents,se.toneMapping=Z.toneMapping}function Ir(R,Z,se,oe,q){Z.isScene!==!0&&(Z=tt),L.resetTextureUnits();const Ae=Z.fog,Oe=oe.isMeshStandardMaterial?Z.environment:null,Ie=Q===null?D.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:Nr,Fe=(oe.isMeshStandardMaterial?ie:w).get(oe.envMap||Oe),lt=oe.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,ct=!!se.attributes.tangent&&(!!oe.normalMap||oe.anisotropy>0),Je=!!se.morphAttributes.position,Mt=!!se.morphAttributes.normal,Et=!!se.morphAttributes.color;let qt=Va;oe.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(qt=D.toneMapping);const Nt=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,ut=Nt!==void 0?Nt.length:0,et=He.get(oe),hn=_.state.lights;if($===!0&&(de===!0||R!==N)){const $t=R===N&&oe.id===U;we.setState(oe,R,$t)}let wt=!1;oe.version===et.__version?(et.needsLights&&et.lightsStateVersion!==hn.state.version||et.outputColorSpace!==Ie||q.isBatchedMesh&&et.batching===!1||!q.isBatchedMesh&&et.batching===!0||q.isBatchedMesh&&et.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&et.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&et.instancing===!1||!q.isInstancedMesh&&et.instancing===!0||q.isSkinnedMesh&&et.skinning===!1||!q.isSkinnedMesh&&et.skinning===!0||q.isInstancedMesh&&et.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&et.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&et.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&et.instancingMorph===!1&&q.morphTexture!==null||et.envMap!==Fe||oe.fog===!0&&et.fog!==Ae||et.numClippingPlanes!==void 0&&(et.numClippingPlanes!==we.numPlanes||et.numIntersection!==we.numIntersection)||et.vertexAlphas!==lt||et.vertexTangents!==ct||et.morphTargets!==Je||et.morphNormals!==Mt||et.morphColors!==Et||et.toneMapping!==qt||et.morphTargetsCount!==ut)&&(wt=!0):(wt=!0,et.__version=oe.version);let zn=et.currentProgram;wt===!0&&(zn=Jt(oe,Z,q));let gi=!1,Dn=!1,xn=!1;const Ht=zn.getUniforms(),Un=et.uniforms;if(je.useProgram(zn.program)&&(gi=!0,Dn=!0,xn=!0),oe.id!==U&&(U=oe.id,Dn=!0),gi||N!==R){je.buffers.depth.getReversed()?(re.copy(R.projectionMatrix),CS(re),RS(re),Ht.setValue(P,"projectionMatrix",re)):Ht.setValue(P,"projectionMatrix",R.projectionMatrix),Ht.setValue(P,"viewMatrix",R.matrixWorldInverse);const bn=Ht.map.cameraPosition;bn!==void 0&&bn.setValue(P,Ce.setFromMatrixPosition(R.matrixWorld)),st.logarithmicDepthBuffer&&Ht.setValue(P,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(oe.isMeshPhongMaterial||oe.isMeshToonMaterial||oe.isMeshLambertMaterial||oe.isMeshBasicMaterial||oe.isMeshStandardMaterial||oe.isShaderMaterial)&&Ht.setValue(P,"isOrthographic",R.isOrthographicCamera===!0),N!==R&&(N=R,Dn=!0,xn=!0)}if(q.isSkinnedMesh){Ht.setOptional(P,q,"bindMatrix"),Ht.setOptional(P,q,"bindMatrixInverse");const $t=q.skeleton;$t&&($t.boneTexture===null&&$t.computeBoneTexture(),Ht.setValue(P,"boneTexture",$t.boneTexture,L))}q.isBatchedMesh&&(Ht.setOptional(P,q,"batchingTexture"),Ht.setValue(P,"batchingTexture",q._matricesTexture,L),Ht.setOptional(P,q,"batchingIdTexture"),Ht.setValue(P,"batchingIdTexture",q._indirectTexture,L),Ht.setOptional(P,q,"batchingColorTexture"),q._colorsTexture!==null&&Ht.setValue(P,"batchingColorTexture",q._colorsTexture,L));const wn=se.morphAttributes;if((wn.position!==void 0||wn.normal!==void 0||wn.color!==void 0)&&Ze.update(q,se,zn),(Dn||et.receiveShadow!==q.receiveShadow)&&(et.receiveShadow=q.receiveShadow,Ht.setValue(P,"receiveShadow",q.receiveShadow)),oe.isMeshGouraudMaterial&&oe.envMap!==null&&(Un.envMap.value=Fe,Un.flipEnvMap.value=Fe.isCubeTexture&&Fe.isRenderTargetTexture===!1?-1:1),oe.isMeshStandardMaterial&&oe.envMap===null&&Z.environment!==null&&(Un.envMapIntensity.value=Z.environmentIntensity),Dn&&(Ht.setValue(P,"toneMappingExposure",D.toneMappingExposure),et.needsLights&&Ic(Un,xn),Ae&&oe.fog===!0&&Re.refreshFogUniforms(Un,Ae),Re.refreshMaterialUniforms(Un,oe,J,ee,_.state.transmissionRenderTarget[R.id]),Rc.upload(P,Sn(et),Un,L)),oe.isShaderMaterial&&oe.uniformsNeedUpdate===!0&&(Rc.upload(P,Sn(et),Un,L),oe.uniformsNeedUpdate=!1),oe.isSpriteMaterial&&Ht.setValue(P,"center",q.center),Ht.setValue(P,"modelViewMatrix",q.modelViewMatrix),Ht.setValue(P,"normalMatrix",q.normalMatrix),Ht.setValue(P,"modelMatrix",q.matrixWorld),oe.isShaderMaterial||oe.isRawShaderMaterial){const $t=oe.uniformsGroups;for(let bn=0,ws=$t.length;bn<ws;bn++){const In=$t[bn];Y.update(In,zn),Y.bind(In,zn)}}return zn}function Ic(R,Z){R.ambientLightColor.needsUpdate=Z,R.lightProbe.needsUpdate=Z,R.directionalLights.needsUpdate=Z,R.directionalLightShadows.needsUpdate=Z,R.pointLights.needsUpdate=Z,R.pointLightShadows.needsUpdate=Z,R.spotLights.needsUpdate=Z,R.spotLightShadows.needsUpdate=Z,R.rectAreaLights.needsUpdate=Z,R.hemisphereLights.needsUpdate=Z}function Bc(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return Q},this.setRenderTargetTextures=function(R,Z,se){He.get(R.texture).__webglTexture=Z,He.get(R.depthTexture).__webglTexture=se;const oe=He.get(R);oe.__hasExternalTextures=!0,oe.__autoAllocateDepthBuffer=se===void 0,oe.__autoAllocateDepthBuffer||at.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),oe.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,Z){const se=He.get(R);se.__webglFramebuffer=Z,se.__useDefaultFramebuffer=Z===void 0};const jo=P.createFramebuffer();this.setRenderTarget=function(R,Z=0,se=0){Q=R,k=Z,I=se;let oe=!0,q=null,Ae=!1,Oe=!1;if(R){const Fe=He.get(R);if(Fe.__useDefaultFramebuffer!==void 0)je.bindFramebuffer(P.FRAMEBUFFER,null),oe=!1;else if(Fe.__webglFramebuffer===void 0)L.setupRenderTarget(R);else if(Fe.__hasExternalTextures)L.rebindTextures(R,He.get(R.texture).__webglTexture,He.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Je=R.depthTexture;if(Fe.__boundDepthTexture!==Je){if(Je!==null&&He.has(Je)&&(R.width!==Je.image.width||R.height!==Je.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(R)}}const lt=R.texture;(lt.isData3DTexture||lt.isDataArrayTexture||lt.isCompressedArrayTexture)&&(Oe=!0);const ct=He.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(ct[Z])?q=ct[Z][se]:q=ct[Z],Ae=!0):R.samples>0&&L.useMultisampledRTT(R)===!1?q=He.get(R).__webglMultisampledFramebuffer:Array.isArray(ct)?q=ct[se]:q=ct,V.copy(R.viewport),he.copy(R.scissor),le=R.scissorTest}else V.copy(E).multiplyScalar(J).floor(),he.copy(j).multiplyScalar(J).floor(),le=ce;if(se!==0&&(q=jo),je.bindFramebuffer(P.FRAMEBUFFER,q)&&oe&&je.drawBuffers(R,q),je.viewport(V),je.scissor(he),je.setScissorTest(le),Ae){const Fe=He.get(R.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Fe.__webglTexture,se)}else if(Oe){const Fe=He.get(R.texture),lt=Z;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,Fe.__webglTexture,se,lt)}else if(R!==null&&se!==0){const Fe=He.get(R.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Fe.__webglTexture,se)}U=-1},this.readRenderTargetPixels=function(R,Z,se,oe,q,Ae,Oe){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=He.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Oe!==void 0&&(Ie=Ie[Oe]),Ie){je.bindFramebuffer(P.FRAMEBUFFER,Ie);try{const Fe=R.texture,lt=Fe.format,ct=Fe.type;if(!st.textureFormatReadable(lt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!st.textureTypeReadable(ct)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=R.width-oe&&se>=0&&se<=R.height-q&&P.readPixels(Z,se,oe,q,dt.convert(lt),dt.convert(ct),Ae)}finally{const Fe=Q!==null?He.get(Q).__webglFramebuffer:null;je.bindFramebuffer(P.FRAMEBUFFER,Fe)}}},this.readRenderTargetPixelsAsync=async function(R,Z,se,oe,q,Ae,Oe){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ie=He.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Oe!==void 0&&(Ie=Ie[Oe]),Ie){const Fe=R.texture,lt=Fe.format,ct=Fe.type;if(!st.textureFormatReadable(lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!st.textureTypeReadable(ct))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(Z>=0&&Z<=R.width-oe&&se>=0&&se<=R.height-q){je.bindFramebuffer(P.FRAMEBUFFER,Ie);const Je=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Je),P.bufferData(P.PIXEL_PACK_BUFFER,Ae.byteLength,P.STREAM_READ),P.readPixels(Z,se,oe,q,dt.convert(lt),dt.convert(ct),0);const Mt=Q!==null?He.get(Q).__webglFramebuffer:null;je.bindFramebuffer(P.FRAMEBUFFER,Mt);const Et=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await wS(P,Et,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Je),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,Ae),P.deleteBuffer(Je),P.deleteSync(Et),Ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,Z=null,se=0){R.isTexture!==!0&&(_r("WebGLRenderer: copyFramebufferToTexture function signature has changed."),Z=arguments[0]||null,R=arguments[1]);const oe=Math.pow(2,-se),q=Math.floor(R.image.width*oe),Ae=Math.floor(R.image.height*oe),Oe=Z!==null?Z.x:0,Ie=Z!==null?Z.y:0;L.setTexture2D(R,0),P.copyTexSubImage2D(P.TEXTURE_2D,se,0,0,Oe,Ie,q,Ae),je.unbindTexture()};const Ya=P.createFramebuffer(),Br=P.createFramebuffer();this.copyTextureToTexture=function(R,Z,se=null,oe=null,q=0,Ae=null){R.isTexture!==!0&&(_r("WebGLRenderer: copyTextureToTexture function signature has changed."),oe=arguments[0]||null,R=arguments[1],Z=arguments[2],Ae=arguments[3]||0,se=null),Ae===null&&(q!==0?(_r("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ae=q,q=0):Ae=0);let Oe,Ie,Fe,lt,ct,Je,Mt,Et,qt;const Nt=R.isCompressedTexture?R.mipmaps[Ae]:R.image;if(se!==null)Oe=se.max.x-se.min.x,Ie=se.max.y-se.min.y,Fe=se.isBox3?se.max.z-se.min.z:1,lt=se.min.x,ct=se.min.y,Je=se.isBox3?se.min.z:0;else{const wn=Math.pow(2,-q);Oe=Math.floor(Nt.width*wn),Ie=Math.floor(Nt.height*wn),R.isDataArrayTexture?Fe=Nt.depth:R.isData3DTexture?Fe=Math.floor(Nt.depth*wn):Fe=1,lt=0,ct=0,Je=0}oe!==null?(Mt=oe.x,Et=oe.y,qt=oe.z):(Mt=0,Et=0,qt=0);const ut=dt.convert(Z.format),et=dt.convert(Z.type);let hn;Z.isData3DTexture?(L.setTexture3D(Z,0),hn=P.TEXTURE_3D):Z.isDataArrayTexture||Z.isCompressedArrayTexture?(L.setTexture2DArray(Z,0),hn=P.TEXTURE_2D_ARRAY):(L.setTexture2D(Z,0),hn=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,Z.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,Z.unpackAlignment);const wt=P.getParameter(P.UNPACK_ROW_LENGTH),zn=P.getParameter(P.UNPACK_IMAGE_HEIGHT),gi=P.getParameter(P.UNPACK_SKIP_PIXELS),Dn=P.getParameter(P.UNPACK_SKIP_ROWS),xn=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,Nt.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Nt.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,lt),P.pixelStorei(P.UNPACK_SKIP_ROWS,ct),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Je);const Ht=R.isDataArrayTexture||R.isData3DTexture,Un=Z.isDataArrayTexture||Z.isData3DTexture;if(R.isDepthTexture){const wn=He.get(R),$t=He.get(Z),bn=He.get(wn.__renderTarget),ws=He.get($t.__renderTarget);je.bindFramebuffer(P.READ_FRAMEBUFFER,bn.__webglFramebuffer),je.bindFramebuffer(P.DRAW_FRAMEBUFFER,ws.__webglFramebuffer);for(let In=0;In<Fe;In++)Ht&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,He.get(R).__webglTexture,q,Je+In),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,He.get(Z).__webglTexture,Ae,qt+In)),P.blitFramebuffer(lt,ct,Oe,Ie,Mt,Et,Oe,Ie,P.DEPTH_BUFFER_BIT,P.NEAREST);je.bindFramebuffer(P.READ_FRAMEBUFFER,null),je.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(q!==0||R.isRenderTargetTexture||He.has(R)){const wn=He.get(R),$t=He.get(Z);je.bindFramebuffer(P.READ_FRAMEBUFFER,Ya),je.bindFramebuffer(P.DRAW_FRAMEBUFFER,Br);for(let bn=0;bn<Fe;bn++)Ht?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,wn.__webglTexture,q,Je+bn):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,wn.__webglTexture,q),Un?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,$t.__webglTexture,Ae,qt+bn):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,$t.__webglTexture,Ae),q!==0?P.blitFramebuffer(lt,ct,Oe,Ie,Mt,Et,Oe,Ie,P.COLOR_BUFFER_BIT,P.NEAREST):Un?P.copyTexSubImage3D(hn,Ae,Mt,Et,qt+bn,lt,ct,Oe,Ie):P.copyTexSubImage2D(hn,Ae,Mt,Et,lt,ct,Oe,Ie);je.bindFramebuffer(P.READ_FRAMEBUFFER,null),je.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else Un?R.isDataTexture||R.isData3DTexture?P.texSubImage3D(hn,Ae,Mt,Et,qt,Oe,Ie,Fe,ut,et,Nt.data):Z.isCompressedArrayTexture?P.compressedTexSubImage3D(hn,Ae,Mt,Et,qt,Oe,Ie,Fe,ut,Nt.data):P.texSubImage3D(hn,Ae,Mt,Et,qt,Oe,Ie,Fe,ut,et,Nt):R.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,Ae,Mt,Et,Oe,Ie,ut,et,Nt.data):R.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,Ae,Mt,Et,Nt.width,Nt.height,ut,Nt.data):P.texSubImage2D(P.TEXTURE_2D,Ae,Mt,Et,Oe,Ie,ut,et,Nt);P.pixelStorei(P.UNPACK_ROW_LENGTH,wt),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,zn),P.pixelStorei(P.UNPACK_SKIP_PIXELS,gi),P.pixelStorei(P.UNPACK_SKIP_ROWS,Dn),P.pixelStorei(P.UNPACK_SKIP_IMAGES,xn),Ae===0&&Z.generateMipmaps&&P.generateMipmap(hn),je.unbindTexture()},this.copyTextureToTexture3D=function(R,Z,se=null,oe=null,q=0){return R.isTexture!==!0&&(_r("WebGLRenderer: copyTextureToTexture3D function signature has changed."),se=arguments[0]||null,oe=arguments[1]||null,R=arguments[2],Z=arguments[3],q=arguments[4]||0),_r('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,Z,se,oe,q)},this.initRenderTarget=function(R){He.get(R).__webglFramebuffer===void 0&&L.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?L.setTextureCube(R,0):R.isData3DTexture?L.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?L.setTexture2DArray(R,0):L.setTexture2D(R,0),je.unbindTexture()},this.resetState=function(){k=0,I=0,Q=null,je.reset(),Ft.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return sa}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorspace=Lt._getDrawingBufferColorSpace(t),i.unpackColorSpace=Lt._getUnpackColorSpace()}}const WT=({scrollProgress:r=0})=>{const t=Ve.useRef(null),i=Ve.useRef({x:0,y:0,targetX:0,targetY:0}),s=Ve.useRef(0);return Ve.useEffect(()=>{s.current=r},[r]),Ve.useEffect(()=>{const l=t.current;if(!l||window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;const c=new eb,d=new di(60,l.clientWidth/l.clientHeight,.1,100);d.position.z=18;let h;try{h=new XT({alpha:!0,antialias:!0,powerPreference:"high-performance"})}catch{return}h.setSize(l.clientWidth,l.clientHeight),h.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),h.setClearColor(659229,1),l.appendChild(h.domElement);const m=280,p=new ua,y=new Float32Array(m*3),x=new Float32Array(m*3),v=new Float32Array(m),M=new Ot(14711391),T=new Ot(3718648),C=new Ot(6583435);for(let N=0;N<m;N++){const V=N*3;y[V]=(Math.random()-.5)*45,y[V+1]=(Math.random()-.5)*35,y[V+2]=(Math.random()-.5)*20-2,v[N]=Math.random()*.8+.2;const he=Math.random();let le;he<.2?le=M.clone().multiplyScalar(.7):he<.6?le=T.clone().multiplyScalar(.6):le=C.clone().multiplyScalar(.5),x[V]=le.r,x[V+1]=le.g,x[V+2]=le.b}p.setAttribute("position",new hi(y,3)),p.setAttribute("color",new hi(x,3));const b=qT(),_=new Kx({size:.45,vertexColors:!0,map:b,transparent:!0,opacity:.6,blending:wd,depthWrite:!1}),B=new ib(p,_);c.add(B);const O=new Oo;c.add(O);let D=!1;const W=N=>{D||(D=!0,requestAnimationFrame(()=>{const V=N.clientX/window.innerWidth*2-1,he=-(N.clientY/window.innerHeight)*2+1;i.current.targetX=V*.4,i.current.targetY=he*.4,D=!1}))},k=()=>{l&&(d.aspect=l.clientWidth/l.clientHeight,d.updateProjectionMatrix(),h.setSize(l.clientWidth,l.clientHeight))};window.addEventListener("mousemove",W,{passive:!0}),window.addEventListener("resize",k);let I,Q=new cb;const U=()=>{if(I=requestAnimationFrame(U),document.hidden||s.current>.5)return;const N=Q.getElapsedTime();i.current.x+=(i.current.targetX-i.current.x)*.04,i.current.y+=(i.current.targetY-i.current.y)*.04,B.rotation.y=N*.02+i.current.x*.15,B.rotation.x=Math.sin(N*.015)*.05+i.current.y*.1,d.position.x=i.current.x*1.5,d.position.y=i.current.y*1.5,d.lookAt(0,0,0),h.render(c,d)};return U(),()=>{cancelAnimationFrame(I),window.removeEventListener("mousemove",W),window.removeEventListener("resize",k),h.dispose(),p.dispose(),_.dispose(),l.contains(h.domElement)&&l.removeChild(h.domElement)}},[]),g.jsx("div",{ref:t,className:"absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden","aria-hidden":"true"})};function qT(){const r=document.createElement("canvas");r.width=64,r.height=64;const t=r.getContext("2d"),i=t.createRadialGradient(32,32,0,32,32,32);i.addColorStop(0,"rgba(255, 255, 255, 1)"),i.addColorStop(.2,"rgba(224, 122, 95, 0.8)"),i.addColorStop(.5,"rgba(56, 189, 248, 0.3)"),i.addColorStop(1,"rgba(0, 0, 0, 0)"),t.fillStyle=i,t.fillRect(0,0,64,64);const s=new ab(r);return s.needsUpdate=!0,s}const YT=()=>{const[r,t]=Ve.useState(""),[i,s]=Ve.useState(!1),[l,c]=Ve.useState(!1),d=Ve.useRef(null),h=Ve.useRef(null),m=Ve.useRef({x:-100,y:-100}),p=Ve.useRef({x:-100,y:-100});return Ve.useEffect(()=>{if(window.matchMedia("(pointer: coarse)").matches)return;let y,x=!1;const v=b=>{m.current.x=b.clientX,m.current.y=b.clientY,l||c(!0),x||(x=!0,requestAnimationFrame(()=>{var B;const _=b.target;if(_){const O=(B=_.closest("[data-cursor-text]"))==null?void 0:B.getAttribute("data-cursor-text"),D=_.closest("button, a, [data-cursor], input, textarea, select");O?(t(O),s(!0)):D?(t(""),s(!0)):(t(""),s(!1))}x=!1}))},M=()=>{p.current.x+=(m.current.x-p.current.x)*.25,p.current.y+=(m.current.y-p.current.y)*.25,d.current&&(d.current.style.transform=`translate3d(${m.current.x}px, ${m.current.y}px, 0) translate(-50%, -50%)`),h.current&&(h.current.style.transform=`translate3d(${p.current.x}px, ${p.current.y}px, 0) translate(-50%, -50%)`),y=requestAnimationFrame(M)};y=requestAnimationFrame(M);const T=()=>c(!1),C=()=>c(!0);return window.addEventListener("mousemove",v,{passive:!0}),document.addEventListener("mouseleave",T),document.addEventListener("mouseenter",C),()=>{cancelAnimationFrame(y),window.removeEventListener("mousemove",v),document.removeEventListener("mouseleave",T),document.removeEventListener("mouseenter",C)}},[l]),l?g.jsxs("div",{className:"pointer-events-none fixed inset-0 z-50 overflow-hidden hidden md:block","aria-hidden":"true",children:[g.jsx("div",{ref:h,className:`fixed top-0 left-0 rounded-full border transition-[width,height,background-color] duration-150 ease-out flex items-center justify-center pointer-events-none ${i?r?"w-20 h-20 bg-accent/15 border-accent/80":"w-10 h-10 bg-accent/10 border-accent":"w-6 h-6 bg-transparent border-accent/40"}`,style:{willChange:"transform"},children:r&&g.jsx("span",{className:"text-[10px] font-sans font-medium tracking-wider text-accent uppercase select-none text-center px-1",children:r})}),g.jsx("div",{ref:d,className:"fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-accent pointer-events-none",style:{willChange:"transform"}})]}):null};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZT=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),iv=(...r)=>r.filter((t,i,s)=>!!t&&t.trim()!==""&&s.indexOf(t)===i).join(" ").trim();/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var KT={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QT=Ve.forwardRef(({color:r="currentColor",size:t=24,strokeWidth:i=2,absoluteStrokeWidth:s,className:l="",children:c,iconNode:d,...h},m)=>Ve.createElement("svg",{ref:m,...KT,width:t,height:t,stroke:r,strokeWidth:s?Number(i)*24/Number(t):i,className:iv("lucide",l),...h},[...d.map(([p,y])=>Ve.createElement(p,y)),...Array.isArray(c)?c:[c]]));/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ct=(r,t)=>{const i=Ve.forwardRef(({className:s,...l},c)=>Ve.createElement(QT,{ref:c,iconNode:t,className:iv(`lucide-${ZT(r)}`,s),...l}));return i.displayName=`${r}`,i};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JT=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],$T=Ct("Activity",JT);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eA=[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]],tA=Ct("ArrowDown",eA);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nA=[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]],iA=Ct("ArrowUp",nA);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aA=[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]],Er=Ct("Bot",aA);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sA=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],rA=Ct("Calendar",sA);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oA=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]],av=Ct("ChartColumn",oA);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lA=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],vx=Ct("CircleCheck",lA);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cA=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]],uA=Ct("Clock",cA);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fA=[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],dA=Ct("Compass",fA);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hA=[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2",key:"14l7u7"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1",key:"5aljv4"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]],pA=Ct("Cpu",hA);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mA=[["polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",key:"1yg77f"}]],gA=Ct("Filter",mA);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xA=[["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["line",{x1:"3",x2:"9",y1:"12",y2:"12",key:"1dyftd"}],["line",{x1:"15",x2:"21",y1:"12",y2:"12",key:"oup4p8"}]],vA=Ct("GitCommitHorizontal",xA);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _A=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]],sv=Ct("Github",_A);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yA=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],SA=Ct("Globe",yA);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bA=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]],MA=Ct("Grid3x3",bA);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EA=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],_x=Ct("Layers",EA);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TA=[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]],rv=Ct("Linkedin",TA);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AA=[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]],ov=Ct("Mail",AA);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wA=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],CA=Ct("MapPin",wA);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RA=[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]],NA=Ct("Menu",RA);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DA=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],Th=Ct("RefreshCw",DA);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UA=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],lv=Ct("Send",UA);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LA=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],cv=Ct("ShieldCheck",LA);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OA=[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]],uv=Ct("Sparkles",OA);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PA=[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]],Io=Ct("Terminal",PA);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zA=[["polyline",{points:"22 17 13.5 8.5 8.5 13.5 2 7",key:"1r2t7k"}],["polyline",{points:"16 17 22 17 22 11",key:"11uiuu"}]],IA=Ct("TrendingDown",zA);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BA=[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]],FA=Ct("TrendingUp",BA);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HA=[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]],kA=Ct("Twitter",HA);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GA=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],VA=Ct("User",GA);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jA=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]],XA=Ct("Users",jA);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WA=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]],qA=Ct("Volume2",WA);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YA=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]],ZA=Ct("VolumeX",YA);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KA=[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0",key:"dnpr2z"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0",key:"1x1e6c"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}]],QA=Ct("Wifi",KA);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JA=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Ah=Ct("X",JA);class $A{constructor(){We(this,"ctx",null);We(this,"isMuted",!1);We(this,"masterGain",null);We(this,"listeners",[]);if(typeof window<"u"){const t=localStorage.getItem("ac_audio_muted");this.isMuted=t==="true"}}initContext(){if(!this.ctx&&typeof window<"u"){const t=window.AudioContext||window.webkitAudioContext;this.ctx=new t,this.masterGain=this.ctx.createGain(),this.masterGain.gain.setValueAtTime(this.isMuted?0:.15,this.ctx.currentTime),this.masterGain.connect(this.ctx.destination)}this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}isSoundMuted(){return this.isMuted}toggleMute(){return this.isMuted=!this.isMuted,typeof window<"u"&&localStorage.setItem("ac_audio_muted",String(this.isMuted)),this.masterGain&&this.ctx&&this.masterGain.gain.setValueAtTime(this.isMuted?0:.15,this.ctx.currentTime),this.listeners.forEach(t=>t(this.isMuted)),this.isMuted||this.playSuccess(),this.isMuted}subscribe(t){return this.listeners.push(t),()=>{this.listeners=this.listeners.filter(i=>i!==t)}}playHover(){if(!this.isMuted)try{if(this.initContext(),!this.ctx||!this.masterGain)return;const t=this.ctx.createOscillator(),i=this.ctx.createGain();t.type="sine",t.frequency.setValueAtTime(880,this.ctx.currentTime),t.frequency.exponentialRampToValueAtTime(1320,this.ctx.currentTime+.04),i.gain.setValueAtTime(.05,this.ctx.currentTime),i.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+.04),t.connect(i),i.connect(this.masterGain),t.start(),t.stop(this.ctx.currentTime+.04)}catch{}}playClick(){if(!this.isMuted)try{if(this.initContext(),!this.ctx||!this.masterGain)return;const t=this.ctx.createOscillator(),i=this.ctx.createGain();t.type="triangle",t.frequency.setValueAtTime(1400,this.ctx.currentTime),t.frequency.exponentialRampToValueAtTime(280,this.ctx.currentTime+.05),i.gain.setValueAtTime(.12,this.ctx.currentTime),i.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+.05),t.connect(i),i.connect(this.masterGain),t.start(),t.stop(this.ctx.currentTime+.05)}catch{}}playModalOpen(){if(!this.isMuted)try{if(this.initContext(),!this.ctx||!this.masterGain)return;const t=this.ctx.currentTime;[440,660,880,1320].forEach((i,s)=>{if(!this.ctx||!this.masterGain)return;const l=this.ctx.createOscillator(),c=this.ctx.createGain();l.type="sine",l.frequency.setValueAtTime(i,t+s*.03),c.gain.setValueAtTime(.06,t+s*.03),c.gain.exponentialRampToValueAtTime(.001,t+s*.03+.18),l.connect(c),c.connect(this.masterGain),l.start(t+s*.03),l.stop(t+s*.03+.18)})}catch{}}playTick(){if(!this.isMuted)try{if(this.initContext(),!this.ctx||!this.masterGain)return;const t=this.ctx.createOscillator(),i=this.ctx.createGain();t.type="sine",t.frequency.setValueAtTime(1400,this.ctx.currentTime),i.gain.setValueAtTime(.015,this.ctx.currentTime),i.gain.exponentialRampToValueAtTime(1e-4,this.ctx.currentTime+.04),t.connect(i),i.connect(this.masterGain),t.start(),t.stop(this.ctx.currentTime+.04)}catch{}}playModalClose(){if(!this.isMuted)try{if(this.initContext(),!this.ctx||!this.masterGain)return;const t=this.ctx.currentTime;[1100,770,440].forEach((i,s)=>{if(!this.ctx||!this.masterGain)return;const l=this.ctx.createOscillator(),c=this.ctx.createGain();l.type="sine",l.frequency.setValueAtTime(i,t+s*.03),c.gain.setValueAtTime(.05,t+s*.03),c.gain.exponentialRampToValueAtTime(.001,t+s*.03+.15),l.connect(c),c.connect(this.masterGain),l.start(t+s*.03),l.stop(t+s*.03+.15)})}catch{}}playTypeKey(){if(!this.isMuted)try{if(this.initContext(),!this.ctx||!this.masterGain)return;const t=this.ctx.createOscillator(),i=this.ctx.createGain(),s=1200+Math.random()*400;t.type="triangle",t.frequency.setValueAtTime(s,this.ctx.currentTime),i.gain.setValueAtTime(.03,this.ctx.currentTime),i.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+.02),t.connect(i),i.connect(this.masterGain),t.start(),t.stop(this.ctx.currentTime+.02)}catch{}}playSuccess(){if(!this.isMuted)try{if(this.initContext(),!this.ctx||!this.masterGain)return;const t=this.ctx.currentTime;[523.25,659.25,783.99,1046.5].forEach((i,s)=>{if(!this.ctx||!this.masterGain)return;const l=this.ctx.createOscillator(),c=this.ctx.createGain();l.type="sine",l.frequency.setValueAtTime(i,t+s*.05),c.gain.setValueAtTime(.08,t+s*.05),c.gain.exponentialRampToValueAtTime(.001,t+s*.05+.25),l.connect(c),c.connect(this.masterGain),l.start(t+s*.05),l.stop(t+s*.05+.25)})}catch{}}}const ze=new $A,ew=()=>{const[r,t]=Ve.useState(ze.isSoundMuted());Ve.useEffect(()=>ze.subscribe(l=>{t(l)}),[]);const i=()=>{ze.playClick(),ze.toggleMute()};return g.jsxs("button",{onClick:i,onMouseEnter:()=>ze.playHover(),"aria-label":r?"Unmute Audio Engine":"Mute Audio Engine",className:"group relative flex items-center justify-center gap-2 px-3 py-2 min-w-[44px] min-h-[44px] rounded-xl bg-white/5 border border-white/10 hover:border-accent/50 hover:bg-white/10 transition-all duration-200 text-xs font-sans active:scale-95",children:[g.jsx("div",{className:"flex items-center gap-0.5 h-3",children:r?g.jsx("span",{className:"w-0.5 h-2 bg-slate-500 rounded-full"}):g.jsxs(g.Fragment,{children:[g.jsx("span",{className:"w-0.5 h-2.5 bg-cyber-cyan rounded-full animate-pulse"}),g.jsx("span",{className:"w-0.5 h-4 bg-cyber-cyan rounded-full animate-pulse delay-75"}),g.jsx("span",{className:"w-0.5 h-1.5 bg-cyber-cyan rounded-full animate-pulse delay-150"}),g.jsx("span",{className:"w-0.5 h-3 bg-cyber-cyan rounded-full animate-pulse delay-100"})]})}),g.jsx("span",{className:"hidden sm:inline text-slate-300 group-hover:text-cyber-cyan transition-colors",children:r?"AUDIO: OFF":"AUDIO: ON"}),r?g.jsx(ZA,{className:"w-3.5 h-3.5 text-slate-500 group-hover:text-slate-300"}):g.jsx(qA,{className:"w-3.5 h-3.5 text-cyber-cyan"})]})},tw=({onOpenTerminal:r,onOpenAI:t})=>{const[i,s]=Ve.useState(!1),[l,c]=Ve.useState(!1);Ve.useEffect(()=>{const h=()=>{s(window.scrollY>40)};return window.addEventListener("scroll",h,{passive:!0}),()=>window.removeEventListener("scroll",h)},[]);const d=[{label:"Case studies",href:"#projects"},{label:"Skills",href:"#skills"},{label:"Experience",href:"#experience"},{label:"Diagnostics",href:"#diagnostics"},{label:"Contact",href:"#contact"}];return g.jsxs("header",{className:"fixed top-0 left-0 right-0 z-40 px-3 sm:px-8 pt-[max(0.75rem,env(safe-area-inset-top))] pb-2 transition-all duration-300",children:[g.jsxs("nav",{className:`max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-5 py-2.5 sm:py-3 rounded-2xl transition-all duration-300 ${i?"bg-background-secondary/90 backdrop-blur-xl border border-white/10 shadow-spatial":"bg-surface-glass/60 backdrop-blur-md border border-white/5"}`,children:[g.jsxs("a",{href:"#",onMouseEnter:()=>ze.playHover(),onClick:()=>ze.playClick(),className:"flex items-center gap-3 group min-h-[44px]",children:[g.jsx("div",{className:"w-8 h-8 rounded-lg bg-accent/10 border border-accent/30 flex items-center justify-center group-hover:border-accent transition-colors flex-shrink-0",children:g.jsx("span",{className:"font-serif font-medium text-accent text-sm",children:"AC"})}),g.jsxs("div",{className:"flex flex-col text-left",children:[g.jsx("span",{className:"font-serif font-medium text-sm sm:text-base text-white group-hover:text-accent transition-colors",children:"Ayush Chatterjee"}),g.jsx("span",{className:"text-[10px] sm:text-[11px] font-sans text-slate-400 font-normal",children:"MBA Candidate • Product & Strategy"})]})]}),g.jsx("div",{className:"hidden lg:flex items-center gap-7",children:d.map(h=>g.jsxs("a",{href:h.href,onMouseEnter:()=>ze.playHover(),onClick:()=>ze.playClick(),className:"text-sm font-sans text-slate-300 hover:text-white transition-colors py-2 px-1 relative group font-medium min-h-[44px] flex items-center",children:[h.label,g.jsx("span",{className:"absolute bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-200 group-hover:w-full"})]},h.label))}),g.jsxs("div",{className:"flex items-center gap-1.5 sm:gap-2.5",children:[g.jsx(ew,{}),g.jsxs("button",{onClick:()=>{ze.playModalOpen(),t()},onMouseEnter:()=>ze.playHover(),"data-cursor-text":"ASK",className:"flex items-center justify-center gap-1.5 min-w-[44px] min-h-[44px] px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-sans text-slate-200 hover:text-white transition-colors active:scale-95",title:"Ask AI about me","aria-label":"Ask AI about me",children:[g.jsx(Er,{className:"w-4 h-4 text-accent flex-shrink-0"}),g.jsx("span",{className:"hidden sm:inline",children:"Ask AI"})]}),g.jsxs("button",{onClick:()=>{ze.playModalOpen(),r()},onMouseEnter:()=>ze.playHover(),"data-cursor-text":"CLI",className:"flex items-center justify-center gap-1.5 min-w-[44px] min-h-[44px] px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-sans text-slate-300 hover:text-white transition-colors active:scale-95",title:"Toggle Interactive CLI Terminal","aria-label":"Toggle Interactive CLI Terminal",children:[g.jsx(Io,{className:"w-4 h-4 text-slate-400 flex-shrink-0"}),g.jsx("span",{className:"hidden sm:inline",children:"CLI"})]}),g.jsx("button",{onClick:()=>c(h=>!h),className:"lg:hidden min-w-[44px] min-h-[44px] flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white active:scale-95 transition-colors","aria-label":"Toggle Navigation Menu",children:l?g.jsx(Ah,{className:"w-5 h-5"}):g.jsx(NA,{className:"w-5 h-5"})})]})]}),l&&g.jsxs("div",{className:"lg:hidden mt-2 p-3 rounded-2xl bg-background-secondary/95 backdrop-blur-2xl border border-white/10 shadow-2xl flex flex-col gap-1 animate-in fade-in slide-in-from-top-3 duration-200",children:[d.map(h=>g.jsx("a",{href:h.href,onClick:()=>{ze.playClick(),c(!1)},className:"text-sm font-sans text-slate-200 hover:text-white py-3 px-4 rounded-xl hover:bg-white/5 transition-all min-h-[44px] flex items-center font-medium",children:h.label},h.label)),g.jsxs("div",{className:"pt-2 mt-1 border-t border-white/10 flex gap-2",children:[g.jsxs("button",{onClick:()=>{ze.playModalOpen(),c(!1),t()},className:"flex-1 min-h-[44px] py-2.5 rounded-xl bg-accent text-white font-sans text-xs font-medium flex items-center justify-center gap-1.5 active:scale-95 shadow-accent",children:[g.jsx(Er,{className:"w-4 h-4"})," Ask AVA (AI)"]}),g.jsxs("button",{onClick:()=>{ze.playModalOpen(),c(!1),r()},className:"flex-1 min-h-[44px] py-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-200 font-sans text-xs font-medium flex items-center justify-center gap-1.5 active:scale-95",children:[g.jsx(Io,{className:"w-4 h-4 text-slate-400"})," CLI Terminal"]})]})]})]})},nw=()=>{const[r,t]=Ve.useState({utc:"",sf:"",tokyo:"",blr:""});Ve.useEffect(()=>{const s=()=>{const c=new Date;t({utc:c.toUTCString().split(" ")[4]+" UTC",sf:c.toLocaleTimeString("en-US",{timeZone:"America/Los_Angeles",hour12:!1})+" SFO",tokyo:c.toLocaleTimeString("en-US",{timeZone:"Asia/Tokyo",hour12:!1})+" TYO",blr:c.toLocaleTimeString("en-US",{timeZone:"Asia/Kolkata",hour12:!1})+" BLR"})};s();const l=setInterval(s,1e3);return()=>clearInterval(l)},[]);const i=()=>{ze.playClick(),window.scrollTo({top:0,behavior:"smooth"})};return g.jsxs("footer",{className:"relative z-10 border-t border-white/10 bg-background-secondary/80 backdrop-blur-xl mt-24",children:[g.jsx("div",{className:"border-b border-white/5 py-3 px-4 sm:px-8",children:g.jsxs("div",{className:"max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4 font-sans text-xs text-slate-400",children:[g.jsxs("div",{className:"flex flex-wrap items-center gap-4 sm:gap-6",children:[g.jsxs("span",{className:"flex items-center gap-1.5 text-accent font-medium",children:[g.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-accent animate-pulse"}),"PORTFOLIO: ONLINE"]}),g.jsx("span",{className:"hidden md:inline text-slate-600",children:"|"}),g.jsxs("span",{className:"flex items-center gap-1 text-slate-300",children:[g.jsx(cv,{className:"w-3.5 h-3.5 text-accent"}),"BUILT WITH REACT + THREE.JS"]}),g.jsx("span",{className:"hidden md:inline text-slate-600",children:"|"}),g.jsxs("span",{className:"flex items-center gap-1 text-slate-300",children:[g.jsx(pA,{className:"w-3.5 h-3.5 text-slate-400"}),"TYPESCRIPT + TAILWIND"]})]}),g.jsx("div",{className:"flex items-center gap-3",children:g.jsxs("span",{className:"flex items-center gap-1 text-slate-300",children:[g.jsx($T,{className:"w-3 h-3 text-accent"}),g.jsx("span",{children:"STATUS: LIVE"})]})})]})}),g.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-8 py-12",children:[g.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-8 mb-12",children:[g.jsxs("div",{className:"md:col-span-2 space-y-4",children:[g.jsxs("div",{className:"flex items-center gap-3",children:[g.jsx("div",{className:"w-7 h-7 rounded-lg bg-accent/10 border border-accent/30 flex items-center justify-center font-serif font-medium text-accent text-xs",children:"AC"}),g.jsx("span",{className:"font-serif font-medium text-lg text-white tracking-wide",children:"Ayush Chatterjee"})]}),g.jsx("p",{className:"text-xs sm:text-sm text-slate-400 font-sans max-w-md leading-relaxed",children:"Targeting full-time Product Management (APM/PM), Business Analytics, and Strategy Consulting roles starting 2027. MBA Candidate, Regional College of Management, Bhubaneswar."}),g.jsxs("div",{className:"flex items-center gap-2 pt-2",children:[g.jsx("a",{href:"https://github.com/forbesayush",target:"_blank",rel:"noreferrer",onMouseEnter:()=>ze.playHover(),onClick:()=>ze.playClick(),className:"min-w-[44px] min-h-[44px] flex items-center justify-center rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-400 hover:text-white transition-all active:scale-95","aria-label":"GitHub Profile",children:g.jsx(sv,{className:"w-4 h-4"})}),g.jsx("a",{href:"https://linkedin.com/in/ayushmba",target:"_blank",rel:"noreferrer",onMouseEnter:()=>ze.playHover(),onClick:()=>ze.playClick(),className:"min-w-[44px] min-h-[44px] flex items-center justify-center rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-400 hover:text-white transition-all active:scale-95","aria-label":"LinkedIn Profile",children:g.jsx(rv,{className:"w-4 h-4"})}),g.jsx("a",{href:"https://x.com/forbesayush",target:"_blank",rel:"noreferrer",onMouseEnter:()=>ze.playHover(),onClick:()=>ze.playClick(),className:"min-w-[44px] min-h-[44px] flex items-center justify-center rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-400 hover:text-white transition-all active:scale-95","aria-label":"Twitter / X Profile",children:g.jsx(kA,{className:"w-4 h-4"})})]})]}),g.jsxs("div",{children:[g.jsx("h4",{className:"font-sans text-xs text-accent tracking-wide uppercase mb-3 font-medium",children:"Time zones"}),g.jsxs("div",{className:"space-y-2 font-sans text-xs text-slate-300",children:[g.jsxs("div",{className:"flex justify-between py-1 border-b border-white/5",children:[g.jsx("span",{className:"text-slate-500",children:"San Francisco:"}),g.jsx("span",{children:r.sf||"04:14:00 SFO"})]}),g.jsxs("div",{className:"flex justify-between py-1 border-b border-white/5",children:[g.jsx("span",{className:"text-slate-500",children:"Tokyo:"}),g.jsx("span",{children:r.tokyo||"20:14:00 TYO"})]}),g.jsxs("div",{className:"flex justify-between py-1 border-b border-white/5",children:[g.jsx("span",{className:"text-slate-500",children:"Bengaluru:"}),g.jsx("span",{children:r.blr||"16:44:00 BLR"})]}),g.jsxs("div",{className:"flex justify-between py-1",children:[g.jsx("span",{className:"text-slate-500",children:"Universal UTC:"}),g.jsx("span",{className:"text-accent",children:r.utc||"11:14:00 UTC"})]})]})]}),g.jsxs("div",{className:"flex flex-col justify-between",children:[g.jsxs("div",{children:[g.jsx("h4",{className:"font-sans text-xs text-accent tracking-wide uppercase mb-3 font-medium",children:"Navigation"}),g.jsxs("ul",{className:"space-y-1 font-sans text-xs text-slate-400",children:[g.jsx("li",{children:g.jsx("a",{href:"#projects",className:"py-1.5 inline-block hover:text-white transition-colors",children:"Case studies"})}),g.jsx("li",{children:g.jsx("a",{href:"#skills",className:"py-1.5 inline-block hover:text-white transition-colors",children:"Skills"})}),g.jsx("li",{children:g.jsx("a",{href:"#experience",className:"py-1.5 inline-block hover:text-white transition-colors",children:"Experience"})}),g.jsx("li",{children:g.jsx("a",{href:"#diagnostics",className:"py-1.5 inline-block hover:text-white transition-colors",children:"Diagnostics"})}),g.jsx("li",{children:g.jsx("a",{href:"#contact",className:"py-1.5 inline-block hover:text-white transition-colors",children:"Contact"})})]})]}),g.jsxs("button",{onClick:i,onMouseEnter:()=>ze.playHover(),className:"mt-6 flex items-center justify-center gap-2 min-h-[44px] px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-sans text-slate-300 hover:text-white transition-all group active:scale-95",children:[g.jsx("span",{children:"Return to top"}),g.jsx(iA,{className:"w-3.5 h-3.5 group-hover:-translate-y-1 transition-transform"})]})]})]}),g.jsxs("div",{className:"pt-8 pb-[max(1rem,env(safe-area-inset-bottom))] border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 font-sans text-xs text-slate-500",children:[g.jsx("p",{children:"© 2025 Ayush Chatterjee"}),g.jsxs("div",{className:"flex items-center gap-6",children:[g.jsx("span",{className:"hover:text-slate-300 cursor-pointer py-2",children:"Privacy"}),g.jsx("span",{className:"hover:text-slate-300 cursor-pointer py-2",children:"Terms"})]})]})]})]})},Mc=({value:r,prefix:t="",suffix:i="",duration:s=1200,className:l=""})=>{const[c,d]=Ve.useState(0),[h,m]=Ve.useState(!1),p=Ve.useRef(null);return Ve.useEffect(()=>{const y=p.current;if(!y||h)return;const x=new IntersectionObserver(v=>{if(v[0].isIntersecting){m(!0),x.disconnect();const M=performance.now();let T=0;const C=b=>{var W;const _=b-M,B=Math.min(_/s,1),O=1-Math.pow(1-B,4),D=Math.round(O*r);d(D),D!==T&&D%Math.max(1,Math.floor(r/4))===0&&(T=D,(W=ze.playTick)==null||W.call(ze)),B<1&&requestAnimationFrame(C)};requestAnimationFrame(C)}},{threshold:.2});return x.observe(y),()=>x.disconnect()},[r,s,h]),g.jsxs("span",{ref:p,className:`inline-block tabular-nums ${l}`,children:[t,h?c:r,i]})},iw=({onOpenAI:r,onOpenTerminal:t})=>{const i=Ve.useRef(null),[s,l]=Ve.useState({x:0,y:0,glareX:50,glareY:50,opacity:0}),c=h=>{if(!i.current)return;const m=i.current.getBoundingClientRect(),p=h.clientX-m.left,y=h.clientY-m.top,x=m.width/2,v=m.height/2,M=(y-v)/v*-7,T=(p-x)/x*7;l({x:M,y:T,glareX:p/m.width*100,glareY:y/m.height*100,opacity:.15})},d=()=>{l({x:0,y:0,glareX:50,glareY:50,opacity:0})};return g.jsx("section",{className:"relative min-h-[90dvh] flex flex-col justify-center px-4 sm:px-8 lg:px-12 pt-28 pb-12 sm:pb-16 overflow-hidden",children:g.jsxs("div",{className:"relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center",children:[g.jsxs("div",{className:"lg:col-span-7 space-y-6 text-left",children:[g.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-xs font-sans text-slate-300 animate-in fade-in slide-in-from-bottom-2 duration-500",children:[g.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-accent animate-pulse flex-shrink-0"}),g.jsx("span",{className:"leading-tight",children:"Targeting: Product Management (APM/PM), Product Analytics, Strategy Consulting"})]}),g.jsxs("h1",{className:"font-serif font-normal text-4xl sm:text-6xl md:text-7xl lg:text-[5.25rem] tracking-tight text-white leading-[1.08] sm:leading-[1.05]",children:[g.jsx("span",{className:"inline-block animate-in fade-in slide-in-from-bottom-4 duration-500 [animation-delay:100ms] fill-mode-backwards",children:"Product &"})," ",g.jsx("br",{}),g.jsx("span",{className:"italic text-accent inline-block animate-in fade-in slide-in-from-bottom-4 duration-500 [animation-delay:200ms] fill-mode-backwards",children:"business strategy"})," ",g.jsx("br",{}),g.jsx("span",{className:"inline-block animate-in fade-in slide-in-from-bottom-4 duration-500 [animation-delay:300ms] fill-mode-backwards",children:"backed by data."})]}),g.jsxs("p",{className:"max-w-xl text-sm sm:text-lg text-slate-300 font-sans leading-relaxed font-normal animate-in fade-in slide-in-from-bottom-3 duration-500 [animation-delay:350ms] fill-mode-backwards",children:["I'm ",g.jsx("strong",{className:"text-white font-medium",children:"Ayush Chatterjee"}),", an MBA candidate (2027) at Regional College of Management, Bhubaneswar. I cut post-release defect recurrence by ",g.jsx("strong",{className:"text-white font-medium",children:g.jsx(Mc,{value:22,suffix:"%"})})," across ",g.jsx("strong",{className:"text-white font-medium",children:g.jsx(Mc,{value:4})})," mobile OS builds, reduced weekly reporting time by ",g.jsx("strong",{className:"text-white font-medium",children:g.jsx(Mc,{value:35,suffix:"%"})})," across ",g.jsx("strong",{className:"text-white font-medium",children:g.jsx(Mc,{value:5})})," D2C storefronts, and built standardized retail launch playbooks."]}),g.jsxs("div",{className:"flex flex-wrap items-center gap-y-2 gap-x-4 text-xs font-sans text-slate-300 py-1 animate-in fade-in duration-500 [animation-delay:400ms] fill-mode-backwards",children:[g.jsxs("a",{href:"mailto:ayushchatterjee.edu@gmail.com",className:"flex items-center gap-1.5 text-slate-300 hover:text-accent transition-colors min-h-[44px] py-1 break-all",children:[g.jsx(ov,{className:"w-3.5 h-3.5 text-accent flex-shrink-0"}),g.jsx("span",{children:"ayushchatterjee.edu@gmail.com"})]}),g.jsx("span",{className:"text-slate-600 hidden sm:inline",children:"•"}),g.jsxs("a",{href:"https://linkedin.com/in/ayushmba",target:"_blank",rel:"noreferrer",className:"flex items-center gap-1.5 text-slate-300 hover:text-accent transition-colors min-h-[44px] py-1",children:[g.jsx(rv,{className:"w-3.5 h-3.5 text-accent flex-shrink-0"}),g.jsx("span",{children:"linkedin.com/in/ayushmba"})]}),g.jsx("span",{className:"text-slate-600 hidden sm:inline",children:"•"}),g.jsxs("span",{className:"flex items-center gap-1.5 text-slate-400 min-h-[44px] py-1",children:[g.jsx(CA,{className:"w-3.5 h-3.5 text-slate-500 flex-shrink-0"}),g.jsx("span",{children:"Bhubaneswar • Open to relocation"})]})]}),g.jsxs("div",{className:"flex flex-wrap items-center gap-3 pt-1 animate-in fade-in duration-500 [animation-delay:450ms] fill-mode-backwards",children:[g.jsxs("a",{href:"#projects",onMouseEnter:()=>ze.playHover(),onClick:()=>ze.playClick(),"data-cursor-text":"WORK",className:"px-6 py-3 min-h-[44px] rounded-xl bg-accent text-white font-sans font-medium text-sm hover:bg-accent-hover transition-all duration-200 flex items-center justify-center gap-2 shadow-accent hover:shadow-lg active:scale-95 group",children:[g.jsx("span",{children:"Case studies"}),g.jsx(tA,{className:"w-4 h-4 group-hover:translate-y-0.5 transition-transform"})]}),g.jsxs("button",{onClick:()=>{ze.playModalOpen(),r()},onMouseEnter:()=>ze.playHover(),"data-cursor-text":"ASK",className:"px-5 py-3 min-h-[44px] rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 hover:text-white font-sans text-sm font-medium transition-all duration-200 flex items-center justify-center gap-2 active:scale-95",children:[g.jsx(Er,{className:"w-4 h-4 text-accent"}),g.jsx("span",{children:"Ask AVA"})]}),g.jsxs("button",{onClick:()=>{ze.playModalOpen(),t()},onMouseEnter:()=>ze.playHover(),"data-cursor-text":"CLI",className:"px-4 py-3 min-h-[44px] rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white font-sans text-sm font-medium transition-all duration-200 flex items-center justify-center gap-2 active:scale-95",children:[g.jsx(Io,{className:"w-4 h-4 text-slate-400"}),g.jsx("span",{children:"Terminal"})]})]})]}),g.jsx("div",{className:"lg:col-span-5 flex flex-col items-center lg:items-end animate-in fade-in slide-in-from-right-4 duration-600 [animation-delay:250ms] fill-mode-backwards",children:g.jsxs("div",{ref:i,onMouseMove:c,onMouseLeave:d,style:{transform:`perspective(1000px) rotateX(${s.x}deg) rotateY(${s.y}deg)`,transition:"transform 0.25s cubic-bezier(0.25, 1, 0.5, 1)"},className:"w-full max-w-sm rounded-2xl bg-background-card border border-white/10 p-5 space-y-4 shadow-2xl relative overflow-hidden group cursor-pointer",children:[g.jsx("div",{className:"pointer-events-none absolute inset-0 transition-opacity duration-300",style:{background:`radial-gradient(circle at ${s.glareX}% ${s.glareY}%, rgba(224, 122, 95, 0.25) 0%, transparent 60%)`,opacity:s.opacity}}),g.jsx("div",{className:"relative aspect-square w-full rounded-xl overflow-hidden bg-white/5 border border-white/10",children:g.jsx("img",{src:"/ayush-chatterjee.png",alt:"Ayush Chatterjee",width:384,height:384,className:"w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105",loading:"eager",decoding:"async"})}),g.jsxs("div",{className:"space-y-2 text-left pt-1",children:[g.jsxs("div",{className:"flex items-center justify-between",children:[g.jsx("span",{className:"font-serif text-lg text-white font-medium",children:"Ayush Chatterjee"}),g.jsx("span",{className:"text-xs text-accent font-sans font-medium",children:"MBA • IT & IB"})]}),g.jsx("p",{className:"font-sans text-xs text-slate-300 leading-relaxed font-normal",children:"Regional College of Management, Bhubaneswar (2025 to 2027). Hands-on exposure in mobile OS QA, D2C funnel retention modeling, and retail product strategy."})]})]})})]})})},yx=[{id:"deals-seller-mis",title:"Deals.Seller — Ops & Fraud Intelligence Platform",tagline:"Admin command center and real-time cashback risk scoring",description:"Built the admin command center for a cashback and deals marketplace: order fulfillment, refunds, withdrawals, and support tickets in one operational view. The core value is the fraud layer: scoring claims on order velocity and duplicate IDs before human review, so the admin only investigates anomalies.",category:"Product Management",tags:["Product MIS","Fraud Intelligence","Product Architecture","Fintech / Cashback","LTV Analytics"],metrics:[{label:"Repeat purchase rate",value:"33%"},{label:"Avg buyer LTV",value:"₹348"},{label:"Fraud triage",value:"Velocity & duplication"},{label:"Withdrawal processing",value:"Instant UPI"}],architectureSummary:"Flags trigger on duplicate merchant order IDs across accounts and velocity spikes above threshold. Surfaced to administrators with full audit logs rather than hard-blocking, protecting buyer trust while preventing payout leakages.",liveUrl:"#",githubUrl:"https://github.com/forbesayush",role:"Product Lead / Builder",featured:!0,year:"2026",accentColor:"#00f0ff",glslPreset:"particles"},{id:"oneplus-os-diagnostics",title:"Mobile OS Usability & Bug Triage",tagline:"Defect root-cause mapping across 4 OS builds",description:"Tested 4 mobile OS builds and logged 20+ interface defects with exact reproduction steps. Cut post-release recurrence by 22% and improved navigation task speed by 15% through structured sprint documentation.",category:"Product Management",tags:["Product QA","Jira","Usability Testing","Mobile OS","Root Cause Analysis"],metrics:[{label:"Defect recurrence",value:"-22%"},{label:"Task speed gain",value:"+15%"},{label:"Bugs evaluated",value:"20+"},{label:"Builds tested",value:"4 OS"}],architectureSummary:"Analyzed navigation friction in settings and notification drawers. Structured bug logs that engineering resolved in the active sprint.",liveUrl:"#",githubUrl:"https://github.com/forbesayush",featured:!0,year:"2025",accentColor:"#00f0ff",glslPreset:"particles"},{id:"d2c-cohort-analytics",title:"E-Commerce Funnel & Cohort Retention",tagline:"Customer retention modeling across 5 storefronts",description:"Built customer retention models across 5 online storefronts to diagnose a 17% drop in repeat purchases. Automated weekly reporting in Power BI, cutting report preparation time by 35%.",category:"Business Analytics",tags:["Power BI","Cohort Analysis","Excel Modeling","Funnel Analytics","Google Analytics"],metrics:[{label:"Reporting time",value:"-35%"},{label:"Stores analyzed",value:"5"},{label:"Checkout flows",value:"8 audited"},{label:"Repeat order gap",value:"17%"}],architectureSummary:"Replaced manual tracking sheets with automated dashboards tracking customer repurchase curves and checkout drop-offs by acquisition month.",liveUrl:"#",githubUrl:"https://github.com/forbesayush",featured:!0,year:"2025",accentColor:"#ffaa00",glslPreset:"mesh"},{id:"franchise-launch-playbook",title:"Lab-Grown Diamond Franchise Store Launch Playbook",tagline:"Opening checklists, 4Cs inventory grading, and partner SOPs",description:"Created standardized franchise store launch workflows, inventory intake audits across 4Cs grading parameters (Cut, Clarity across VS1/VS2, Carat, Color), and sales floor merchandising for D-Dzire Jewels.",category:"Product Strategy",tags:["Product Onboarding","4Cs Diamond Grading","Inventory Intake","Retail Merchandising","Partner SOPs"],metrics:[{label:"Domain",value:"Lab-grown diamonds"},{label:"Grading audit",value:"4Cs (VS1/VS2/VVS)"},{label:"Deliverable",value:"Store launch SOP"},{label:"Stock variance",value:"Zero opening gap"}],architectureSummary:"Mapped end-to-end store opening steps from initial certification and grading stock intake to daily point-of-sale audits, preventing launch delays and inventory discrepancies for franchise partners.",liveUrl:"#",githubUrl:"https://github.com/forbesayush",featured:!0,year:"2024 - 2025",accentColor:"#00ffaa",glslPreset:"quantum"},{id:"market-entry-case",title:"SaaS Market Entry Strategy",tagline:"Market sizing and channel distribution model for B2B expansion",description:"Evaluated market entry paths for enterprise software expanding into European and APAC tech corridors. Modeled unit economics comparing direct sales against channel partner distribution across 4 target markets.",category:"Strategy & Consulting",tags:["Market Sizing","Competitor Analysis","GTM Strategy","Unit Economics"],metrics:[{label:"Markets evaluated",value:"4 hubs"},{label:"Distribution",value:"Direct vs partner"},{label:"Framework",value:"Unit economics"},{label:"Type",value:"MBA case study"}],architectureSummary:"Assessed software adoption in Germany, Ireland, Netherlands, and Singapore. Built unit economic models comparing direct sales versus partner distribution.",liveUrl:"#",githubUrl:"https://github.com/forbesayush",featured:!0,year:"2026",accentColor:"#8a2be2",glslPreset:"core"}],Ad=[{cohort:"Jan 2025",customers:1450,rates:[100,28.4,19.1,15.2,12.8,11.2,10.4],aov:"$42.50",avgRepurchaseDays:44},{cohort:"Feb 2025",customers:1620,rates:[100,27.8,18.5,14.8,12.1,10.8],aov:"$43.20",avgRepurchaseDays:45},{cohort:"Mar 2025",customers:1840,rates:[100,29.1,19.8,15.6,13],aov:"$41.80",avgRepurchaseDays:43},{cohort:"Apr 2025",customers:1750,rates:[100,30.2,20.4,16.1],aov:"$44.10",avgRepurchaseDays:42},{cohort:"May 2025",customers:1980,rates:[100,31.5,21.2],aov:"$45.00",avgRepurchaseDays:41},{cohort:"Jun 2025",customers:2150,rates:[100,32.1],aov:"$45.80",avgRepurchaseDays:40}],aw=()=>{const[r,t]=Ve.useState("ALL"),[i,s]=Ve.useState("chart"),[l,c]=Ve.useState(null),d=r==="ALL"?Ad:Ad.filter(v=>v.cohort===r),h=["Month 0","Month 1","Month 2","Month 3","Month 4","Month 5","Month 6"],m=v=>{const M=d.filter(C=>C.rates.length>v);if(M.length===0)return 0;const T=M.reduce((C,b)=>C+b.rates[v],0);return Math.round(T/M.length*10)/10},p=[0,1,2,3,4,5,6].map(m),y=d.reduce((v,M)=>v+M.customers,0),x=v=>v===void 0?"bg-transparent text-slate-600":v>=90?"bg-accent text-white font-medium":v>=28?"bg-accent/70 text-white":v>=18?"bg-accent/40 text-slate-100":v>=13?"bg-accent/25 text-slate-200":"bg-accent/15 text-slate-300";return g.jsxs("div",{className:"rounded-2xl bg-background-card border border-white/10 p-6 sm:p-7 space-y-6 shadow-xl text-left",children:[g.jsx("div",{className:"border-b border-white/10 pb-4",children:g.jsx("p",{className:"font-sans text-xs sm:text-sm text-slate-300 leading-relaxed font-normal",children:"Interactive cohort retention analysis using anonymized sample data structured to illustrate customer repurchase decay across monthly acquisition cohorts."})}),g.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4",children:[g.jsxs("div",{className:"flex items-center gap-2",children:[g.jsx(gA,{className:"w-4 h-4 text-accent flex-shrink-0"}),g.jsx("span",{className:"font-sans text-xs text-slate-400 font-medium",children:"Cohort:"}),g.jsxs("select",{value:r,onChange:v=>{ze.playClick(),t(v.target.value)},className:"px-3 py-2 min-h-[44px] rounded-xl bg-white/5 border border-white/10 text-base sm:text-xs font-sans text-white focus:border-accent outline-none",children:[g.jsx("option",{value:"ALL",className:"bg-[#0f172a]",children:"All Cohorts (Aggregated)"}),Ad.map(v=>g.jsxs("option",{value:v.cohort,className:"bg-[#0f172a]",children:[v.cohort," (",v.customers.toLocaleString()," users)"]},v.cohort))]})]}),g.jsxs("div",{className:"flex items-center rounded-xl bg-white/5 p-1 border border-white/10",children:[g.jsxs("button",{onClick:()=>{ze.playClick(),s("chart")},className:`flex items-center gap-1.5 px-3 py-2 min-h-[44px] rounded-lg text-xs font-sans font-medium transition-all ${i==="chart"?"bg-accent text-white shadow-sm":"text-slate-400 hover:text-white"}`,children:[g.jsx(av,{className:"w-3.5 h-3.5"}),g.jsx("span",{children:"Retention Curve"})]}),g.jsxs("button",{onClick:()=>{ze.playClick(),s("matrix")},className:`flex items-center gap-1.5 px-3 py-2 min-h-[44px] rounded-lg text-xs font-sans font-medium transition-all ${i==="matrix"?"bg-accent text-white shadow-sm":"text-slate-400 hover:text-white"}`,children:[g.jsx(MA,{className:"w-3.5 h-3.5"}),g.jsx("span",{children:"Heatmap Matrix"})]})]})]}),g.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 border-t border-white/5",children:[g.jsxs("div",{className:"p-3.5 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between",children:[g.jsxs("div",{className:"flex items-center gap-2",children:[g.jsx(XA,{className:"w-4 h-4 text-accent"}),g.jsx("span",{className:"font-sans text-xs text-slate-400",children:"Total Cohort Users"})]}),g.jsx("span",{className:"font-serif font-medium text-lg text-white",children:y.toLocaleString()})]}),g.jsxs("div",{className:"p-3.5 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between",children:[g.jsxs("div",{className:"flex items-center gap-2",children:[g.jsx(IA,{className:"w-4 h-4 text-accent"}),g.jsx("span",{className:"font-sans text-xs text-slate-400",children:"Month 1 Retention"})]}),g.jsxs("span",{className:"font-serif font-medium text-lg text-white",children:[p[1]||0,"%"]})]}),g.jsxs("div",{className:"p-3.5 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between",children:[g.jsxs("div",{className:"flex items-center gap-2",children:[g.jsx(uA,{className:"w-4 h-4 text-accent"}),g.jsx("span",{className:"font-sans text-xs text-slate-400",children:"Month 5 Retention"})]}),g.jsx("span",{className:"font-serif font-medium text-lg text-white",children:"~10.8%"})]})]}),i==="chart"?g.jsxs("div",{className:"space-y-3",children:[g.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between text-xs font-sans text-slate-400 gap-1",children:[g.jsx("span",{children:"Customer Retention Rate (%) over 6 Months"}),g.jsx("span",{className:"text-accent font-medium",children:"Repurchase Plateau: Month 4+"})]}),g.jsxs("div",{className:"h-48 w-full bg-black/40 rounded-xl p-4 border border-white/5 flex items-end justify-between gap-2 sm:gap-4 relative",children:[g.jsx("div",{className:"absolute inset-x-4 top-4 border-b border-white/5 text-[10px] text-slate-500",children:"100%"}),g.jsx("div",{className:"absolute inset-x-4 top-1/2 border-b border-white/5 text-[10px] text-slate-500",children:"50%"}),p.map((v,M)=>{const T=Math.max(8,v),C=l===M;return g.jsxs("div",{onMouseEnter:()=>{ze.playHover(),c(M)},onMouseLeave:()=>c(null),onClick:()=>{ze.playClick(),c(l===M?null:M)},className:"flex-1 flex flex-col items-center gap-2 h-full justify-end group cursor-pointer relative z-10 select-none min-h-[44px]",children:[C&&g.jsxs("div",{className:"absolute -top-10 px-2.5 py-1 rounded-md bg-accent text-white font-sans text-xs shadow-lg whitespace-nowrap animate-in fade-in zoom-in-95 duration-150 z-20",children:[h[M],": ",v,"% retained"]}),g.jsx("div",{style:{height:`${T}%`},className:`w-full max-w-[48px] rounded-t-md transition-all duration-300 ${M===0?"bg-white/20":C?"bg-accent":"bg-accent/80 group-hover:bg-accent"}`}),g.jsxs("span",{className:`font-sans text-[11px] transition-colors ${C?"text-white font-medium":"text-slate-400"}`,children:["M",M]})]},M)})]})]}):g.jsx("div",{className:"overflow-x-auto",children:g.jsxs("table",{className:"w-full text-xs font-sans border-collapse",children:[g.jsx("thead",{children:g.jsxs("tr",{className:"border-b border-white/10 text-slate-400 text-left",children:[g.jsx("th",{className:"py-2.5 px-3 font-medium",children:"Cohort"}),g.jsx("th",{className:"py-2.5 px-3 font-medium",children:"Users"}),g.jsx("th",{className:"py-2.5 px-3 font-medium text-center",children:"M0"}),g.jsx("th",{className:"py-2.5 px-3 font-medium text-center",children:"M1"}),g.jsx("th",{className:"py-2.5 px-3 font-medium text-center",children:"M2"}),g.jsx("th",{className:"py-2.5 px-3 font-medium text-center",children:"M3"}),g.jsx("th",{className:"py-2.5 px-3 font-medium text-center",children:"M4"}),g.jsx("th",{className:"py-2.5 px-3 font-medium text-center",children:"M5"}),g.jsx("th",{className:"py-2.5 px-3 font-medium text-center",children:"M6"})]})}),g.jsx("tbody",{className:"divide-y divide-white/5 font-sans",children:d.map(v=>g.jsxs("tr",{className:"hover:bg-white/5 transition-colors",children:[g.jsx("td",{className:"py-2 px-3 font-medium text-white",children:v.cohort}),g.jsx("td",{className:"py-2 px-3 text-slate-400",children:v.customers.toLocaleString()}),[0,1,2,3,4,5,6].map(M=>{const T=v.rates[M];return g.jsx("td",{className:"py-1 px-1.5 text-center",children:g.jsx("div",{className:`py-1 rounded-md text-[11px] ${x(T)}`,children:T!==void 0?`${T}%`:"-"})},M)})]},v.cohort))})]})})]})},sw=()=>{const[r,t]=Ve.useState("ALL"),i=["ALL","Product Management","Business Analytics","Product Strategy","Strategy & Consulting"],s=r==="ALL"?yx:yx.filter(c=>c.category===r),l=c=>{ze.playClick(),t(c)};return g.jsxs("section",{id:"projects",className:"py-24 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto relative z-10 text-left",children:[g.jsxs("div",{className:"flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 border-b border-white/10 pb-6",children:[g.jsxs("div",{children:[g.jsx("span",{className:"font-sans text-xs sm:text-sm text-accent tracking-wide uppercase block mb-1.5 font-medium",children:"Case studies"}),g.jsx("h2",{className:"font-serif font-normal text-4xl sm:text-5xl md:text-6xl text-white tracking-tight",children:"Selected work"})]}),g.jsx("div",{className:"flex flex-wrap gap-2",children:i.map(c=>g.jsx("button",{onClick:()=>l(c),onMouseEnter:()=>ze.playHover(),className:`px-4 py-2.5 min-h-[44px] rounded-xl text-xs sm:text-sm font-sans font-medium transition-all duration-200 active:scale-95 flex items-center justify-center ${r===c?"bg-accent text-white shadow-accent":"bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/5"}`,children:c},c))})]}),g.jsx("div",{className:"space-y-8",children:s.map((c,d)=>g.jsxs("div",{style:{animationDelay:`${d*80}ms`},className:"rounded-2xl bg-background-card border border-white/10 hover:border-white/20 p-6 sm:p-8 transition-all duration-300 shadow-xl space-y-6 animate-in fade-in slide-in-from-bottom-3 duration-500 fill-mode-backwards",children:[g.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/5 pb-4",children:[g.jsxs("div",{className:"flex flex-wrap items-center gap-2 sm:gap-2.5",children:[g.jsx("span",{className:"font-sans text-xs font-medium text-accent uppercase tracking-wider",children:c.category}),c.role&&g.jsxs(g.Fragment,{children:[g.jsx("span",{className:"text-slate-600 text-xs",children:"•"}),g.jsx("span",{className:"font-sans text-xs text-slate-200 font-medium",children:c.role})]}),g.jsx("span",{className:"text-slate-600 text-xs",children:"•"}),g.jsx("span",{className:"font-sans text-xs text-slate-400 font-medium",children:c.year})]}),g.jsxs("a",{href:c.githubUrl||"https://github.com/forbesayush",target:"_blank",rel:"noreferrer",onMouseEnter:()=>ze.playHover(),onClick:()=>ze.playClick(),className:"inline-flex items-center gap-1.5 min-h-[44px] py-1 text-slate-400 hover:text-accent font-sans text-xs font-medium transition-colors",children:[g.jsx(sv,{className:"w-3.5 h-3.5"}),g.jsx("span",{children:"GitHub repository"})]})]}),g.jsxs("div",{children:[g.jsx("h3",{className:"font-serif font-medium text-2xl sm:text-3xl text-white",children:c.title}),g.jsx("p",{className:"font-sans text-xs sm:text-sm text-accent mt-1 font-normal",children:c.tagline})]}),g.jsx("p",{className:"font-sans text-sm sm:text-base text-slate-200 leading-relaxed font-normal",children:c.description}),g.jsxs("div",{className:"p-4 sm:p-5 rounded-xl bg-white/5 border border-white/10 space-y-1.5",children:[g.jsx("span",{className:"font-sans text-xs text-accent uppercase tracking-wider block font-medium",children:"Analysis & outcome"}),g.jsx("p",{className:"text-xs sm:text-sm text-slate-300 font-sans leading-relaxed",children:c.architectureSummary})]}),c.id==="d2c-cohort-analytics"&&g.jsxs("div",{className:"pt-2 border-t border-white/5 space-y-3",children:[g.jsx("span",{className:"font-sans text-xs text-accent uppercase tracking-wider block font-medium",children:"Interactive cohort retention model"}),g.jsx(aw,{})]}),g.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2",children:c.metrics.map((h,m)=>g.jsxs("div",{className:"p-3 rounded-xl bg-white/5 border border-white/5",children:[g.jsx("span",{className:"font-sans text-xs text-slate-400 font-normal block mb-0.5",children:h.label}),g.jsx("span",{className:"font-serif font-medium text-base sm:text-lg text-white",children:h.value})]},m))}),g.jsx("div",{className:"flex flex-wrap gap-2 pt-2 border-t border-white/5",children:c.tags.map(h=>g.jsx("span",{className:"px-2.5 py-1 rounded-md text-xs font-sans text-slate-300 bg-white/5 border border-white/5 font-normal",children:h},h))})]},c.id))})]})},rw=[{category:"Product Management",description:"Functional specs, sprint prioritization, and systematic defect triage.",skills:[{name:"PRD & Feature Scoping",level:0,experience:"Practical",description:"Writing functional specifications, user stories, acceptance criteria, and edge-case boundaries.",codeSnippet:`# Feature Specification
Feature: Multi-Currency Checkout
Objective: Reduce payment abandonment on international storefronts.
User Story: As an international buyer, I want prices in my local currency so total costs are clear before checkout.
Acceptance Criteria:
1. Auto-detect visitor location from IP header.
2. Fallback to USD if local currency gateway is unavailable.`},{name:"Feature Prioritization (RICE)",level:0,experience:"Applied",description:"Scoring backlogs with Reach, Impact, Confidence, and Effort to rank high-leverage releases.",codeSnippet:`// RICE Prioritization
function calculateRICE(reach, impact, confidence, effort) {
  // Reach: Users impacted / quarter
  // Impact: 0.5 (minimal) to 3 (massive)
  // Confidence: 50% to 100%
  // Effort: Person-weeks
  return (reach * impact * (confidence / 100)) / effort;
}`},{name:"QA Defect Triage",level:0,experience:"OnePlus",description:"Logging reproducible defect tickets with root causes, logs, and screenshots for sprint resolution.",codeSnippet:`Bug Report: [UI-204] Navigation Header Overlap (Build 14.2)
Severity: P2 (Major Usability)
Steps to Reproduce:
1. Open settings from notification drawer.
2. Rotate screen to landscape orientation.
Expected: Header layout reflows cleanly.
Actual: Title overlaps back navigation button.`}]},{category:"Business Analytics",description:"Cohort retention modeling, funnel drop-off analysis, and automated MIS reporting.",skills:[{name:"Cohort Retention Modeling",level:0,experience:"Applied",description:"Tracking repurchase curves by acquisition month to locate where customer drop-offs occur.",codeSnippet:`-- Cohort Retention Analysis
SELECT
  DATE_TRUNC('month', first_order_date) AS cohort_month,
  COUNT(DISTINCT customer_id) AS cohort_size,
  COUNT(DISTINCT CASE WHEN order_month = 1 THEN customer_id END) * 100.0 / COUNT(DISTINCT customer_id) AS m1_retention,
  COUNT(DISTINCT CASE WHEN order_month = 2 THEN customer_id END) * 100.0 / COUNT(DISTINCT customer_id) AS m2_retention
FROM customer_orders
GROUP BY 1;`},{name:"Funnel Drop-Off Diagnostics",level:0,experience:"Applied",description:"Evaluating conversion stages from initial product detail views to successful checkout completion.",codeSnippet:`-- Funnel Conversion Breakdown
Stage 1: Product Detail Views   10,000 users
Stage 2: Add to Cart             2,400 users (24%)
Stage 3: Initiate Checkout       1,200 users (50% of carts)
Stage 4: Payment Completed         840 orders (70% of checkouts)
Overall Conversion: 8.4%`},{name:"Power BI & MIS Automation",level:0,experience:"Applied",description:"Building automated dashboards tracking revenue, order velocity, and Average Order Value.",codeSnippet:`// DAX Metric: Average Order Value
AOV = DIVIDE(
    SUM(Sales[TotalRevenue]),
    DISTINCTCOUNT(Sales[OrderID]),
    0
)`}]},{category:"Strategy & Operations",description:"Market sizing, unit economics modeling, and standard retail operational checklists.",skills:[{name:"Market Sizing & TAM Modeling",level:0,experience:"MBA Coursework",description:"Top-down and bottom-up market estimation for enterprise software and retail rollouts.",codeSnippet:`// Market Sizing Model (TAM / SAM / SOM)
TAM = Regional Enterprise Count * Annual ACV
SAM = Addressable Cloud Segment * ACV
SOM = Realistic Year 1-3 Target Capture`},{name:"Franchise & Retail Operations",level:0,experience:"Practical",description:"Creating standard operating procedures, inventory audit steps, and launch schedules.",codeSnippet:`Checklist: Franchise Store Launch
[x] Commercial lease and municipal permits verified
[x] POS terminals, scanners, and gateway connectivity tested
[x] Initial inventory intake and SKU reconciliation completed
[x] Store staff customer service standard briefed`},{name:"Competitor Benchmarking",level:0,experience:"Applied",description:"Comparing competitor pricing structures, feature parity, and customer support turnaround.",codeSnippet:`Framework: Competitor Matrix
Evaluation Criteria:
- Pricing architecture (Subscription vs Tiered vs Consumption)
- Core feature parity and workflow differentiation
- Onboarding turnaround and support SLA`}]}],ow=()=>{const r=[_x,av,dA];return g.jsxs("section",{id:"skills",className:"py-24 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto relative z-10 text-left",children:[g.jsxs("div",{className:"flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4 border-b border-white/10 pb-6",children:[g.jsxs("div",{children:[g.jsx("span",{className:"font-sans text-xs sm:text-sm text-accent tracking-wide uppercase block mb-1.5 font-medium",children:"Capabilities"}),g.jsx("h2",{className:"font-serif font-normal text-4xl sm:text-5xl md:text-6xl text-white tracking-tight",children:"Skills and frameworks"})]}),g.jsx("div",{className:"font-sans text-xs sm:text-sm text-slate-400 font-normal",children:"Structured execution across product, data, and strategy"})]}),g.jsx("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-6 text-left",children:rw.map((t,i)=>{const s=r[i]||_x;return g.jsxs("div",{style:{animationDelay:`${i*80}ms`},className:"rounded-2xl bg-background-card border border-white/10 hover:border-white/20 p-6 sm:p-7 flex flex-col justify-between space-y-6 shadow-xl transition-all duration-200 animate-in fade-in slide-in-from-bottom-3 duration-500 fill-mode-backwards",children:[g.jsxs("div",{className:"space-y-4",children:[g.jsxs("div",{className:"flex items-center gap-3 border-b border-white/5 pb-4",children:[g.jsx("div",{className:"p-2.5 rounded-xl bg-accent/10 text-accent",children:g.jsx(s,{className:"w-5 h-5"})}),g.jsxs("div",{children:[g.jsx("h3",{className:"font-serif font-medium text-xl text-white",children:t.category}),g.jsx("p",{className:"font-sans text-xs text-slate-400 mt-0.5",children:t.description})]})]}),g.jsx("div",{className:"space-y-4",children:t.skills.map(l=>g.jsxs("div",{className:"p-4 rounded-xl bg-white/5 border border-white/5 space-y-2",children:[g.jsxs("div",{className:"flex items-center justify-between",children:[g.jsx("h4",{className:"font-serif font-medium text-white text-sm sm:text-base",children:l.name}),g.jsx("span",{className:"font-sans text-[11px] text-accent bg-accent/10 px-2 py-0.5 rounded font-normal",children:l.experience})]}),g.jsx("p",{className:"font-sans text-xs text-slate-300 leading-relaxed font-normal",children:l.description})]},l.name))})]}),g.jsx("div",{className:"p-4 rounded-xl bg-black/60 border border-white/5 font-mono text-[11px] text-amber-200/90 leading-relaxed overflow-x-auto",children:g.jsx("pre",{className:"whitespace-pre-wrap font-mono",children:g.jsx("code",{children:t.skills[0].codeSnippet})})})]},t.category)})})]})},lw=[{id:"exp-swash",role:"Media Intern",company:"Swash Consulting Limited",location:"Bhubaneswar, India",period:"2026 (2 months)",badge:"Growth & SEO",summary:"Executed on-page and off-page search engine optimization (SEO), backlink acquisition, and digital marketing strategies to drive organic search visibility and domain authority.",achievements:["Conducted technical SEO audits, optimizing metadata, keyword hierarchies, and internal linking structures.","Executed backlink building strategies and analyzed organic traffic growth trends using Google Analytics and Search Console.","Refined digital marketing campaigns to improve search indexing and organic engagement across target segments."],technologies:["Technical SEO","Backlink Strategy","Digital Marketing","Google Search Console","Google Analytics"],architecturalImpact:"Strengthened organic domain authority and search rankings through structured keyword targeting and clean backlink acquisition."},{id:"exp-1",role:"User Experience Analyst",company:"OnePlus & Innovist",location:"Bhubaneswar, India",period:"October 2025 to Present",badge:"Current",summary:"Tested 4 OS builds and logged root causes for 20+ interface bugs with exact reproduction steps. Cut post-release defect recurrence by 22% and improved task navigation speed by 15%.",achievements:["Logged root causes and step-by-step reproduction logs for 20+ interface defects in active sprints.","Reduced post-release defect recurrence by 22% through technical bug documentation.","Improved navigation task speed by 15% after restructuring menu paths from usability test records."],technologies:["Product QA","Jira","Usability Testing","Defect Tracking"],architecturalImpact:"Replaced unstructured bug submissions with structured reproduction logs, preventing repeated defects."},{id:"exp-2",role:"Product Analytics Intern",company:"D2C Skincare Brand Portfolio",location:"Kolkata, India (Remote)",period:"September 2024 to December 2025",badge:"Product Analytics",summary:"Built retention and checkout funnel models across 5 online storefronts. Cut weekly reporting time by 35% by automating reporting workflows in Power BI.",achievements:["Segmented customer cohorts to diagnose a 17% drop in repeat purchase rates.","Automated weekly reporting workflows in Power BI, cutting preparation time by 35%.","Audited 8 checkout flows, identifying conversion drop-offs and order value shifts."],technologies:["Power BI","Excel","Cohort Analysis","Funnel Analytics","Google Analytics"],architecturalImpact:"Automated dashboards used weekly by product and marketing teams without manual data pulls."},{id:"exp-3",role:"Product & Retail Strategy Intern",company:"D-Dzire Jewels (Lab-Grown Diamonds)",location:"India",period:"Business Exposure",badge:"Product Strategy",summary:"Managed franchise store opening workflows, 4Cs inventory grading audits (Cut, Clarity across VS1/VS2/SI, Carat, Color), and customer pricing perception for lab-grown diamond jewellery outlets.",achievements:["Standardized franchise store opening checklists, display casing layouts, and initial stock intake audits.","Audited inventory tracking across 4Cs diamond certification parameters (VS1, VS2, VVS clarity grades and cut specifications).","Conducted frontline customer interviews on pricing awareness and willingness-to-pay for lab-grown vs natural diamonds to optimize retail assortment."],technologies:["Lab-Grown Diamonds (4Cs)","Franchise Store Launch","Inventory Audit (VS1/VS2)","Retail Pricing Analysis","SOP Design"],architecturalImpact:"Standardized opening playbooks and 4Cs grading controls eliminated opening-day stock variances across franchise partner store rollouts."}],cw=()=>g.jsxs("section",{id:"experience",className:"py-24 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto relative z-10 text-left",children:[g.jsxs("div",{className:"flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4 border-b border-white/10 pb-6",children:[g.jsxs("div",{children:[g.jsx("span",{className:"font-sans text-xs sm:text-sm text-accent tracking-wide uppercase block mb-1.5 font-medium",children:"Career history"}),g.jsx("h2",{className:"font-serif font-normal text-4xl sm:text-5xl md:text-6xl text-white tracking-tight",children:"Work experience"})]}),g.jsx("div",{className:"font-sans text-xs sm:text-sm text-slate-400 font-normal",children:"Product Management • Product Analytics • Strategy"})]}),g.jsx("div",{className:"space-y-6",children:lw.map((r,t)=>g.jsxs("div",{style:{animationDelay:`${t*80}ms`},className:"rounded-2xl bg-background-card border border-white/10 hover:border-white/20 p-6 sm:p-8 space-y-5 transition-all duration-200 shadow-xl animate-in fade-in slide-in-from-bottom-3 duration-500 fill-mode-backwards",children:[g.jsxs("div",{className:"flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-white/5 pb-4",children:[g.jsxs("div",{className:"space-y-1",children:[g.jsxs("div",{className:"flex flex-wrap items-center gap-2.5",children:[g.jsx("h3",{className:"font-serif font-medium text-xl sm:text-2xl text-white",children:r.role}),g.jsxs("span",{className:"text-accent font-sans text-sm sm:text-base font-normal",children:["at ",r.company]})]}),g.jsxs("p",{className:"font-sans text-xs sm:text-sm text-slate-400",children:[g.jsx("span",{children:r.location})," • ",g.jsx("span",{className:"text-slate-300 font-normal",children:r.period})]})]}),g.jsx("span",{className:"px-3 py-1 rounded-lg text-xs font-sans bg-white/5 border border-white/10 text-slate-300 font-normal self-start md:self-center",children:r.badge})]}),g.jsx("p",{className:"font-sans text-sm sm:text-base text-slate-200 leading-relaxed font-normal",children:r.summary}),g.jsxs("div",{className:"space-y-2",children:[g.jsx("span",{className:"font-sans text-xs text-accent uppercase tracking-wider block font-medium",children:"Key deliverables"}),g.jsx("ul",{className:"space-y-1.5 font-sans text-xs sm:text-sm text-slate-300",children:r.achievements.map((i,s)=>g.jsxs("li",{className:"flex items-start gap-2.5",children:[g.jsx("span",{className:"text-accent text-xs mt-1",children:"▹"}),g.jsx("span",{children:i})]},s))})]}),g.jsxs("div",{className:"p-4 rounded-xl bg-white/5 border border-white/10 flex items-start gap-3.5",children:[g.jsx(FA,{className:"w-4 h-4 text-accent flex-shrink-0 mt-0.5"}),g.jsxs("div",{children:[g.jsx("span",{className:"font-sans text-xs text-accent uppercase font-medium block mb-0.5",children:"Outcome"}),g.jsx("p",{className:"font-sans text-xs sm:text-sm text-slate-300 leading-relaxed",children:r.architecturalImpact})]})]}),g.jsx("div",{className:"flex flex-wrap gap-2 pt-1",children:r.technologies.map(i=>g.jsx("span",{className:"px-2.5 py-1 rounded-md text-xs font-sans font-normal bg-white/5 border border-white/10 text-slate-300",children:i},i))})]},r.id))}),g.jsxs("div",{className:"mt-16 pt-12 border-t border-white/10",children:[g.jsxs("div",{className:"mb-8",children:[g.jsx("span",{className:"font-sans text-xs sm:text-sm text-accent tracking-wide uppercase block mb-1.5 font-medium",children:"Academic foundation"}),g.jsx("h3",{className:"font-serif font-normal text-3xl sm:text-4xl text-white tracking-tight",children:"Education"})]}),g.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[g.jsxs("div",{className:"p-6 sm:p-7 rounded-2xl bg-background-card border border-white/10 space-y-3 shadow-xl",children:[g.jsxs("div",{className:"flex items-center justify-between",children:[g.jsx("span",{className:"px-3 py-1 rounded-lg text-xs font-sans bg-accent/10 text-accent border border-accent/30 font-medium",children:"2025 to 2027"}),g.jsx("span",{className:"font-sans text-xs text-slate-400 font-normal",children:"Full-Time"})]}),g.jsx("h4",{className:"font-serif font-medium text-xl text-white",children:"Master of Business Administration (MBA)"}),g.jsx("p",{className:"text-sm font-sans text-slate-300 font-normal",children:"Regional College of Management, Bhubaneswar"}),g.jsx("p",{className:"font-sans text-xs sm:text-sm text-slate-400 leading-relaxed font-normal",children:"Specialization in IT and International Business. Coursework in technology management, business strategy, and enterprise information systems."})]}),g.jsxs("div",{className:"p-6 sm:p-7 rounded-2xl bg-background-card border border-white/10 space-y-3 shadow-xl",children:[g.jsxs("div",{className:"flex items-center justify-between",children:[g.jsx("span",{className:"px-3 py-1 rounded-lg text-xs font-sans bg-white/5 text-slate-300 border border-white/10 font-normal",children:"2022 to 2025"}),g.jsx("span",{className:"font-sans text-xs text-slate-400 font-normal",children:"Graduated"})]}),g.jsx("h4",{className:"font-serif font-medium text-xl text-white",children:"Bachelor of Business Administration (BBA)"}),g.jsx("p",{className:"text-sm font-sans text-slate-300 font-normal",children:"Regional College of Management, Bhubaneswar"}),g.jsx("p",{className:"font-sans text-xs sm:text-sm text-slate-400 leading-relaxed font-normal",children:"Business statistics, marketing management, and financial accounting fundamentals."})]})]})]})]}),uw=()=>{const[r,t]=Ve.useState(null),[i,s]=Ve.useState(!1),[l,c]=Ve.useState({platform:"Web Browser",online:!0,protocol:"HTTPS / TLS 1.3",screenRes:"1920x1080",vpnCompatible:"Unrestricted Access"}),d=()=>{ze.playClick(),s(!0);const h=performance.now();fetch("https://api.github.com/zen",{cache:"no-store"}).then(()=>{const m=Math.round(performance.now()-h);t(m),s(!1),ze.playSuccess()}).catch(()=>{t(24),s(!1)})};return Ve.useEffect(()=>{typeof window<"u"&&(c({platform:navigator.platform||"Standard Web",online:navigator.onLine,protocol:window.location.protocol==="https:"?"HTTPS / TLS 1.3":"HTTP Secure",screenRes:window.screen?`${window.screen.width}x${window.screen.height}`:"1920x1080",vpnCompatible:"Corporate VPN Friendly"}),d())},[]),g.jsxs("section",{id:"diagnostics",className:"py-20 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto relative z-10 text-left",children:[g.jsxs("div",{className:"flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4 border-b border-white/10 pb-6",children:[g.jsxs("div",{children:[g.jsx("span",{className:"font-sans text-xs sm:text-sm text-accent tracking-wide uppercase block mb-1.5 font-medium",children:"Technical demo"}),g.jsx("h2",{className:"font-serif font-normal text-4xl sm:text-5xl md:text-6xl text-white tracking-tight",children:"Network diagnostics panel"})]}),g.jsxs("button",{onClick:d,disabled:i,onMouseEnter:()=>ze.playHover(),className:"flex items-center justify-center gap-2 min-h-[44px] px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs sm:text-sm font-sans text-slate-200 hover:text-white transition-all font-medium active:scale-95 disabled:opacity-50",children:[g.jsx(Th,{className:`w-3.5 h-3.5 ${i?"animate-spin text-accent":""}`}),g.jsx("span",{children:i?"Testing...":"Run diagnostic"})]})]}),g.jsx("p",{className:"font-sans text-sm sm:text-base text-slate-300 mb-8 max-w-3xl leading-relaxed",children:"Live client-side diagnostics for latency, protocol encryption, and browser environment. Runs locally with zero backend storage."}),g.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5",children:[g.jsxs("div",{className:"p-6 rounded-2xl bg-background-card border border-white/10 space-y-3 shadow-lg",children:[g.jsxs("div",{className:"flex items-center justify-between text-accent",children:[g.jsx(cv,{className:"w-5 h-5"}),g.jsxs("span",{className:"font-sans text-xs text-accent font-medium flex items-center gap-1",children:[g.jsx(vx,{className:"w-3.5 h-3.5"})," Secure"]})]}),g.jsxs("div",{children:[g.jsx("span",{className:"font-sans text-xs text-slate-400 uppercase font-medium block",children:"Protocol"}),g.jsx("span",{className:"font-serif font-medium text-lg text-white",children:l.protocol})]}),g.jsx("p",{className:"font-sans text-xs text-slate-400",children:"Encrypted transport layer"})]}),g.jsxs("div",{className:"p-6 rounded-2xl bg-background-card border border-white/10 space-y-3 shadow-lg",children:[g.jsxs("div",{className:"flex items-center justify-between text-accent",children:[g.jsx(QA,{className:"w-5 h-5"}),g.jsx("span",{className:"font-sans text-xs text-accent font-medium",children:"Round-trip"})]}),g.jsxs("div",{children:[g.jsx("span",{className:"font-sans text-xs text-slate-400 uppercase font-medium block",children:"Latency"}),g.jsx("span",{className:"font-serif font-medium text-lg text-white",children:r!==null?`${r} ms`:"Testing..."})]}),g.jsx("p",{className:"font-sans text-xs text-slate-400",children:"Real-time HTTP response time"})]}),g.jsxs("div",{className:"p-6 rounded-2xl bg-background-card border border-white/10 space-y-3 shadow-lg",children:[g.jsxs("div",{className:"flex items-center justify-between text-accent",children:[g.jsx(SA,{className:"w-5 h-5"}),g.jsx("span",{className:"font-sans text-xs text-accent font-medium",children:"Compatible"})]}),g.jsxs("div",{children:[g.jsx("span",{className:"font-sans text-xs text-slate-400 uppercase font-medium block",children:"VPN / Proxy"}),g.jsx("span",{className:"font-serif font-medium text-lg text-white",children:"Corporate friendly"})]}),g.jsx("p",{className:"font-sans text-xs text-slate-400",children:"No restrictions on corporate VPN traffic"})]}),g.jsxs("div",{className:"p-6 rounded-2xl bg-background-card border border-white/10 space-y-3 shadow-lg",children:[g.jsxs("div",{className:"flex items-center justify-between text-slate-400",children:[g.jsx(vx,{className:"w-5 h-5 text-accent"}),g.jsx("span",{className:"font-sans text-xs text-slate-300 font-normal",children:l.screenRes})]}),g.jsxs("div",{children:[g.jsx("span",{className:"font-sans text-xs text-slate-400 uppercase font-medium block",children:"Environment"}),g.jsx("span",{className:"font-serif font-medium text-lg text-white truncate block",children:l.online?"Online browser":"Offline"})]}),g.jsx("p",{className:"font-sans text-xs text-slate-400",children:"Client-rendered, no backend storage"})]})]})]})},fw=()=>{const[r,t]=Ve.useState([{name:"portfolio",stars:0,language:"TypeScript",updated:"Recently"}]);Ve.useEffect(()=>{fetch("https://api.github.com/users/forbesayush/repos?sort=updated&per_page=4").then(s=>s.json()).then(s=>{Array.isArray(s)&&t(s.map(l=>({name:l.name,stars:l.stargazers_count,language:l.language||"TypeScript",updated:new Date(l.updated_at).toLocaleDateString()})))}).catch(()=>{})},[]);const i=()=>{ze.playClick(),fetch("https://api.github.com/users/forbesayush/repos?sort=updated&per_page=4").then(s=>s.json()).then(s=>{Array.isArray(s)&&t(s.map(l=>({name:l.name,stars:l.stargazers_count,language:l.language||"TypeScript",updated:new Date(l.updated_at).toLocaleDateString()}))),ze.playSuccess()}).catch(()=>{})};return g.jsxs("section",{id:"activity",className:"py-20 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto relative z-10 text-left",children:[g.jsxs("div",{className:"flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4 border-b border-white/10 pb-6",children:[g.jsxs("div",{children:[g.jsx("span",{className:"font-sans text-xs sm:text-sm text-accent tracking-wide uppercase block mb-1.5 font-medium",children:"Public repositories"}),g.jsx("h2",{className:"font-serif font-normal text-4xl sm:text-5xl md:text-6xl text-white tracking-tight",children:"Recent activity"})]}),g.jsxs("div",{className:"flex items-center gap-3 font-sans text-xs sm:text-sm text-slate-400",children:[g.jsxs("span",{className:"flex items-center gap-2 text-accent font-medium",children:[g.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-accent animate-pulse"}),"GitHub Feed"]}),g.jsx("button",{onClick:i,onMouseEnter:()=>ze.playHover(),className:"min-w-[44px] min-h-[44px] flex items-center justify-center rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-colors active:scale-95",title:"Refresh","aria-label":"Refresh Repositories",children:g.jsx(Th,{className:"w-4 h-4"})})]})]}),g.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5",children:r.map((s,l)=>g.jsxs("a",{href:`https://github.com/forbesayush/${s.name}`,target:"_blank",rel:"noreferrer",onMouseEnter:()=>ze.playHover(),onClick:()=>ze.playClick(),className:"p-6 rounded-2xl bg-background-card border border-white/10 hover:border-accent/40 transition-all duration-200 block text-left shadow-lg hover:-translate-y-1",children:[g.jsxs("div",{className:"flex items-center gap-2.5 mb-3.5",children:[g.jsx(vA,{className:"w-4 h-4 text-accent flex-shrink-0"}),g.jsx("span",{className:"font-serif text-base text-white hover:text-accent font-medium transition-colors truncate",children:s.name})]}),g.jsxs("div",{className:"space-y-2 font-sans text-xs sm:text-sm text-slate-400",children:[g.jsxs("div",{className:"flex justify-between",children:[g.jsx("span",{children:"Lang"}),g.jsx("span",{className:"text-slate-200 font-normal",children:s.language})]}),g.jsxs("div",{className:"flex justify-between",children:[g.jsx("span",{children:"Stars"}),g.jsx("span",{className:"text-accent font-normal",children:s.stars})]}),g.jsxs("div",{className:"flex justify-between",children:[g.jsx("span",{children:"Updated"}),g.jsx("span",{className:"text-slate-300 font-normal",children:s.updated})]})]})]},l))})]})};var wh={};(function r(t,i,s,l){var c=!!(t.Worker&&t.Blob&&t.Promise&&t.OffscreenCanvas&&t.OffscreenCanvasRenderingContext2D&&t.HTMLCanvasElement&&t.HTMLCanvasElement.prototype.transferControlToOffscreen&&t.URL&&t.URL.createObjectURL),d=typeof Path2D=="function"&&typeof DOMMatrix=="function",h=(function(){if(!t.OffscreenCanvas)return!1;try{var F=new OffscreenCanvas(1,1),E=F.getContext("2d");E.fillRect(0,0,1,1);var j=F.transferToImageBitmap();E.createPattern(j,"no-repeat")}catch{return!1}return!0})();function m(){}function p(F){var E=i.exports.Promise,j=E!==void 0?E:t.Promise;return typeof j=="function"?new j(F):(F(m,m),null)}var y=(function(F,E){return{transform:function(j){if(F)return j;if(E.has(j))return E.get(j);var ce=new OffscreenCanvas(j.width,j.height),G=ce.getContext("2d");return G.drawImage(j,0,0),E.set(j,ce),ce},clear:function(){E.clear()}}})(h,new Map),x=(function(){var F=Math.floor(16.666666666666668),E,j,ce={},G=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(E=function($){var de=Math.random();return ce[de]=requestAnimationFrame(function re(Te){G===Te||G+F-1<Te?(G=Te,delete ce[de],$()):ce[de]=requestAnimationFrame(re)}),de},j=function($){ce[$]&&cancelAnimationFrame(ce[$])}):(E=function($){return setTimeout($,F)},j=function($){return clearTimeout($)}),{frame:E,cancel:j}})(),v=(function(){var F,E,j={};function ce(G){function $(de,re){G.postMessage({options:de||{},callback:re})}G.init=function(re){var Te=re.transferControlToOffscreen();G.postMessage({canvas:Te},[Te])},G.fire=function(re,Te,Ce){if(E)return $(re,null),E;var Ue=Math.random().toString(36).slice(2);return E=p(function(tt){function it(Qe){Qe.data.callback===Ue&&(delete j[Ue],G.removeEventListener("message",it),E=null,y.clear(),Ce(),tt())}G.addEventListener("message",it),$(re,Ue),j[Ue]=it.bind(null,{data:{callback:Ue}})}),E},G.reset=function(){G.postMessage({reset:!0});for(var re in j)j[re](),delete j[re]}}return function(){if(F)return F;if(!s&&c){var G=["var CONFETTI, SIZE = {}, module = {};","("+r.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{F=new Worker(URL.createObjectURL(new Blob([G])))}catch($){return typeof console<"u"&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",$),null}ce(F)}return F}})(),M={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function T(F,E){return E?E(F):F}function C(F){return F!=null}function b(F,E,j){return T(F&&C(F[E])?F[E]:M[E],j)}function _(F){return F<0?0:Math.floor(F)}function B(F,E){return Math.floor(Math.random()*(E-F))+F}function O(F){return parseInt(F,16)}function D(F){return F.map(W)}function W(F){var E=String(F).replace(/[^0-9a-f]/gi,"");return E.length<6&&(E=E[0]+E[0]+E[1]+E[1]+E[2]+E[2]),{r:O(E.substring(0,2)),g:O(E.substring(2,4)),b:O(E.substring(4,6))}}function k(F){var E=b(F,"origin",Object);return E.x=b(E,"x",Number),E.y=b(E,"y",Number),E}function I(F){F.width=document.documentElement.clientWidth,F.height=document.documentElement.clientHeight}function Q(F){var E=F.getBoundingClientRect();F.width=E.width,F.height=E.height}function U(F){var E=document.createElement("canvas");return E.style.position="fixed",E.style.top="0px",E.style.left="0px",E.style.pointerEvents="none",E.style.zIndex=F,E}function N(F,E,j,ce,G,$,de,re,Te){F.save(),F.translate(E,j),F.rotate($),F.scale(ce,G),F.arc(0,0,1,de,re,Te),F.restore()}function V(F){var E=F.angle*(Math.PI/180),j=F.spread*(Math.PI/180);return{x:F.x,y:F.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:F.startVelocity*.5+Math.random()*F.startVelocity,angle2D:-E+(.5*j-Math.random()*j),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:F.color,shape:F.shape,tick:0,totalTicks:F.ticks,decay:F.decay,drift:F.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:F.gravity*3,ovalScalar:.6,scalar:F.scalar,flat:F.flat}}function he(F,E){E.x+=Math.cos(E.angle2D)*E.velocity+E.drift,E.y+=Math.sin(E.angle2D)*E.velocity+E.gravity,E.velocity*=E.decay,E.flat?(E.wobble=0,E.wobbleX=E.x+10*E.scalar,E.wobbleY=E.y+10*E.scalar,E.tiltSin=0,E.tiltCos=0,E.random=1):(E.wobble+=E.wobbleSpeed,E.wobbleX=E.x+10*E.scalar*Math.cos(E.wobble),E.wobbleY=E.y+10*E.scalar*Math.sin(E.wobble),E.tiltAngle+=.1,E.tiltSin=Math.sin(E.tiltAngle),E.tiltCos=Math.cos(E.tiltAngle),E.random=Math.random()+2);var j=E.tick++/E.totalTicks,ce=E.x+E.random*E.tiltCos,G=E.y+E.random*E.tiltSin,$=E.wobbleX+E.random*E.tiltCos,de=E.wobbleY+E.random*E.tiltSin;if(F.fillStyle="rgba("+E.color.r+", "+E.color.g+", "+E.color.b+", "+(1-j)+")",F.beginPath(),d&&E.shape.type==="path"&&typeof E.shape.path=="string"&&Array.isArray(E.shape.matrix))F.fill(ee(E.shape.path,E.shape.matrix,E.x,E.y,Math.abs($-ce)*.1,Math.abs(de-G)*.1,Math.PI/10*E.wobble));else if(E.shape.type==="bitmap"){var re=Math.PI/10*E.wobble,Te=Math.abs($-ce)*.1,Ce=Math.abs(de-G)*.1,Ue=E.shape.bitmap.width*E.scalar,tt=E.shape.bitmap.height*E.scalar,it=new DOMMatrix([Math.cos(re)*Te,Math.sin(re)*Te,-Math.sin(re)*Ce,Math.cos(re)*Ce,E.x,E.y]);it.multiplySelf(new DOMMatrix(E.shape.matrix));var Qe=F.createPattern(y.transform(E.shape.bitmap),"no-repeat");Qe.setTransform(it),F.globalAlpha=1-j,F.fillStyle=Qe,F.fillRect(E.x-Ue/2,E.y-tt/2,Ue,tt),F.globalAlpha=1}else if(E.shape==="circle")F.ellipse?F.ellipse(E.x,E.y,Math.abs($-ce)*E.ovalScalar,Math.abs(de-G)*E.ovalScalar,Math.PI/10*E.wobble,0,2*Math.PI):N(F,E.x,E.y,Math.abs($-ce)*E.ovalScalar,Math.abs(de-G)*E.ovalScalar,Math.PI/10*E.wobble,0,2*Math.PI);else if(E.shape==="star")for(var P=Math.PI/2*3,Pt=4*E.scalar,at=8*E.scalar,st=E.x,je=E.y,vt=5,He=Math.PI/vt;vt--;)st=E.x+Math.cos(P)*at,je=E.y+Math.sin(P)*at,F.lineTo(st,je),P+=He,st=E.x+Math.cos(P)*Pt,je=E.y+Math.sin(P)*Pt,F.lineTo(st,je),P+=He;else F.moveTo(Math.floor(E.x),Math.floor(E.y)),F.lineTo(Math.floor(E.wobbleX),Math.floor(G)),F.lineTo(Math.floor($),Math.floor(de)),F.lineTo(Math.floor(ce),Math.floor(E.wobbleY));return F.closePath(),F.fill(),E.tick<E.totalTicks}function le(F,E,j,ce,G){var $=E.slice(),de=F.getContext("2d"),re,Te,Ce=p(function(Ue){function tt(){re=Te=null,de.clearRect(0,0,ce.width,ce.height),y.clear(),G(),Ue()}function it(){s&&!(ce.width===l.width&&ce.height===l.height)&&(ce.width=F.width=l.width,ce.height=F.height=l.height),!ce.width&&!ce.height&&(j(F),ce.width=F.width,ce.height=F.height),de.clearRect(0,0,ce.width,ce.height),$=$.filter(function(Qe){return he(de,Qe)}),$.length?re=x.frame(it):tt()}re=x.frame(it),Te=tt});return{addFettis:function(Ue){return $=$.concat(Ue),Ce},canvas:F,promise:Ce,reset:function(){re&&x.cancel(re),Te&&Te()}}}function ge(F,E){var j=!F,ce=!!b(E||{},"resize"),G=!1,$=b(E,"disableForReducedMotion",Boolean),de=c&&!!b(E||{},"useWorker"),re=de?v():null,Te=j?I:Q,Ce=F&&re?!!F.__confetti_initialized:!1,Ue=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,tt;function it(P,Pt,at){for(var st=b(P,"particleCount",_),je=b(P,"angle",Number),vt=b(P,"spread",Number),He=b(P,"startVelocity",Number),L=b(P,"decay",Number),w=b(P,"gravity",Number),ie=b(P,"drift",Number),xe=b(P,"colors",D),Ee=b(P,"ticks",Number),_e=b(P,"shapes"),qe=b(P,"scalar"),Re=!!b(P,"flat"),ke=k(P),xt=st,we=[],Ge=F.width*ke.x,Ke=F.height*ke.y;xt--;)we.push(V({x:Ge,y:Ke,angle:je,spread:vt,startVelocity:He,color:xe[xt%xe.length],shape:_e[B(0,_e.length)],ticks:Ee,decay:L,gravity:w,drift:ie,scalar:qe,flat:Re}));return tt?tt.addFettis(we):(tt=le(F,we,Te,Pt,at),tt.promise)}function Qe(P){var Pt=$||b(P,"disableForReducedMotion",Boolean),at=b(P,"zIndex",Number);if(Pt&&Ue)return p(function(He){He()});j&&tt?F=tt.canvas:j&&!F&&(F=U(at),document.body.appendChild(F)),ce&&!Ce&&Te(F);var st={width:F.width,height:F.height};re&&!Ce&&re.init(F),Ce=!0,re&&(F.__confetti_initialized=!0);function je(){if(re){var He={getBoundingClientRect:function(){if(!j)return F.getBoundingClientRect()}};Te(He),re.postMessage({resize:{width:He.width,height:He.height}});return}st.width=st.height=null}function vt(){tt=null,ce&&(G=!1,t.removeEventListener("resize",je)),j&&F&&(document.body.contains(F)&&document.body.removeChild(F),F=null,Ce=!1)}return ce&&!G&&(G=!0,t.addEventListener("resize",je,!1)),re?re.fire(P,st,vt):it(P,st,vt)}return Qe.reset=function(){re&&re.reset(),tt&&tt.reset()},Qe}var be;function z(){return be||(be=ge(null,{useWorker:!0,resize:!0})),be}function ee(F,E,j,ce,G,$,de){var re=new Path2D(F),Te=new Path2D;Te.addPath(re,new DOMMatrix(E));var Ce=new Path2D;return Ce.addPath(Te,new DOMMatrix([Math.cos(de)*G,Math.sin(de)*G,-Math.sin(de)*$,Math.cos(de)*$,j,ce])),Ce}function J(F){if(!d)throw new Error("path confetti are not supported in this browser");var E,j;typeof F=="string"?E=F:(E=F.path,j=F.matrix);var ce=new Path2D(E),G=document.createElement("canvas"),$=G.getContext("2d");if(!j){for(var de=1e3,re=de,Te=de,Ce=0,Ue=0,tt,it,Qe=0;Qe<de;Qe+=2)for(var P=0;P<de;P+=2)$.isPointInPath(ce,Qe,P,"nonzero")&&(re=Math.min(re,Qe),Te=Math.min(Te,P),Ce=Math.max(Ce,Qe),Ue=Math.max(Ue,P));tt=Ce-re,it=Ue-Te;var Pt=10,at=Math.min(Pt/tt,Pt/it);j=[at,0,0,at,-Math.round(tt/2+re)*at,-Math.round(it/2+Te)*at]}return{type:"path",path:E,matrix:j}}function Me(F){var E,j=1,ce="#000000",G='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof F=="string"?E=F:(E=F.text,j="scalar"in F?F.scalar:j,G="fontFamily"in F?F.fontFamily:G,ce="color"in F?F.color:ce);var $=10*j,de=""+$+"px "+G,re=new OffscreenCanvas($,$),Te=re.getContext("2d");Te.font=de;var Ce=Te.measureText(E),Ue=Math.ceil(Ce.actualBoundingBoxRight+Ce.actualBoundingBoxLeft),tt=Math.ceil(Ce.actualBoundingBoxAscent+Ce.actualBoundingBoxDescent),it=2,Qe=Ce.actualBoundingBoxLeft+it,P=Ce.actualBoundingBoxAscent+it;Ue+=it+it,tt+=it+it,re=new OffscreenCanvas(Ue,tt),Te=re.getContext("2d"),Te.font=de,Te.fillStyle=ce,Te.fillText(E,Qe,P);var Pt=1/j;return{type:"bitmap",bitmap:re.transferToImageBitmap(),matrix:[Pt,0,0,Pt,-Ue*Pt/2,-tt*Pt/2]}}i.exports=function(){return z().apply(this,arguments)},i.exports.reset=function(){z().reset()},i.exports.create=ge,i.exports.shapeFromPath=J,i.exports.shapeFromText=Me})((function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}})(),wh,!1);const dw=wh.exports;wh.exports.create;const hw=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/,pw=()=>{const[r,t]=Ve.useState({name:"",email:"",topic:"Job Opportunity",message:""}),[i,s]=Ve.useState(""),[l,c]=Ve.useState(!1),[d,h]=Ve.useState(!1),[m,p]=Ve.useState(""),y=async x=>{if(x.preventDefault(),p(""),i.trim().length>0){c(!0),setTimeout(()=>{c(!1),h(!0)},500);return}if(!r.name.trim()||!r.email.trim()||!r.message.trim()){p("Please fill out all required fields.");return}if(!hw.test(r.email.trim())){p("Please enter a valid email address.");return}ze.playClick(),c(!0);try{await fetch("/api/contact",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:r.name.trim(),email:r.email.trim(),topic:r.topic,message:r.message.trim(),honeypot:i})})}catch{}c(!1),h(!0),ze.playSuccess();try{dw({particleCount:50,spread:50,origin:{y:.7},colors:["#e07a5f","#f4a261","#ffffff"]})}catch{}};return g.jsxs("section",{id:"contact",className:"py-24 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto relative z-10 text-left",children:[g.jsxs("div",{className:"flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4 border-b border-white/10 pb-6",children:[g.jsxs("div",{children:[g.jsx("span",{className:"font-sans text-xs sm:text-sm text-accent tracking-wide uppercase block mb-1.5 font-medium",children:"Contact"}),g.jsx("h2",{className:"font-serif font-normal text-4xl sm:text-5xl md:text-6xl text-white tracking-tight",children:"Start a conversation"})]}),g.jsx("div",{className:"font-sans text-xs sm:text-sm text-slate-400 font-normal",children:"I usually reply within a day"})]}),g.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8",children:[g.jsx("div",{className:"lg:col-span-5 space-y-4",children:g.jsxs("div",{className:"p-7 sm:p-8 rounded-2xl bg-background-card border border-white/10 space-y-6 shadow-2xl",children:[g.jsx("h3",{className:"font-serif font-medium text-xl sm:text-2xl text-white",children:"Direct channels"}),g.jsx("p",{className:"font-sans text-sm sm:text-base text-slate-300 leading-relaxed font-normal",children:"Open to PM, APM, and consulting analyst roles, MBA internships, and project work. Replies within a day."}),g.jsxs("div",{className:"space-y-3 font-sans text-sm",children:[g.jsxs("a",{href:"mailto:ayushchatterjee.edu@gmail.com",onMouseEnter:()=>ze.playHover(),onClick:()=>ze.playClick(),className:"flex items-center gap-3.5 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-accent/40 text-slate-200 hover:text-white transition-all group",children:[g.jsx("div",{className:"p-2.5 rounded-lg bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white transition-colors",children:g.jsx(ov,{className:"w-5 h-5"})}),g.jsxs("div",{className:"flex flex-col",children:[g.jsx("span",{className:"text-xs text-slate-400 uppercase font-normal",children:"Email"}),g.jsx("span",{className:"text-white font-medium text-sm sm:text-base",children:"ayushchatterjee.edu@gmail.com"})]})]}),g.jsxs("a",{href:"https://cal.com",target:"_blank",rel:"noreferrer",onMouseEnter:()=>ze.playHover(),onClick:()=>ze.playClick(),className:"flex items-center gap-3.5 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-accent/40 text-slate-200 hover:text-white transition-all group",children:[g.jsx("div",{className:"p-2.5 rounded-lg bg-white/10 text-slate-300 group-hover:bg-accent group-hover:text-white transition-colors",children:g.jsx(rA,{className:"w-5 h-5"})}),g.jsxs("div",{className:"flex flex-col",children:[g.jsx("span",{className:"text-xs text-slate-400 uppercase font-normal",children:"Schedule Intro Call"}),g.jsx("span",{className:"text-slate-200 font-medium text-sm sm:text-base",children:"30-minute chat"})]})]})]}),g.jsx("div",{className:"pt-2 border-t border-white/5 font-sans text-xs text-slate-400",children:g.jsx("span",{children:"Location: Bhubaneswar • Open to relocation"})})]})}),g.jsx("div",{className:"lg:col-span-7",children:g.jsx("div",{className:"p-7 sm:p-8 rounded-2xl bg-background-card border border-white/10 shadow-2xl relative",children:d?g.jsxs("div",{className:"py-16 text-center space-y-4 animate-in fade-in zoom-in-95 duration-200",children:[g.jsx("div",{className:"w-14 h-14 rounded-2xl bg-accent/10 text-accent border border-accent/30 mx-auto flex items-center justify-center",children:g.jsx(uv,{className:"w-7 h-7"})}),g.jsx("h3",{className:"font-serif font-medium text-2xl text-white",children:"Message sent"}),g.jsx("p",{className:"font-sans text-sm text-slate-300 max-w-md mx-auto leading-relaxed",children:"Thanks for reaching out. I'll get back to you soon."}),g.jsx("button",{onClick:()=>{h(!1),t({name:"",email:"",topic:"Job Opportunity",message:""})},className:"px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-sans text-slate-300 font-medium",children:"Send another message"})]}):g.jsxs("form",{onSubmit:y,className:"space-y-4",children:[g.jsx("input",{type:"text",name:"b_website",value:i,onChange:x=>s(x.target.value),tabIndex:-1,autoComplete:"off",className:"hidden opacity-0 pointer-events-none absolute -left-[9999px] w-0 h-0","aria-hidden":"true"}),m&&g.jsx("div",{className:"p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300 font-sans text-xs text-left animate-in fade-in duration-150",children:m}),g.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[g.jsxs("div",{className:"space-y-1.5 text-left",children:[g.jsx("label",{className:"block font-sans text-xs text-slate-300 font-medium uppercase tracking-wider",children:"Your name"}),g.jsx("input",{type:"text",required:!0,placeholder:"Jane Doe",value:r.name,onChange:x=>t({...r,name:x.target.value}),className:"w-full px-4 py-3 min-h-[44px] rounded-xl bg-white/5 border border-white/10 focus:border-accent text-white font-sans text-base sm:text-sm placeholder-slate-500 outline-none transition-colors"})]}),g.jsxs("div",{className:"space-y-1.5 text-left",children:[g.jsx("label",{className:"block font-sans text-xs text-slate-300 font-medium uppercase tracking-wider",children:"Your email"}),g.jsx("input",{type:"email",required:!0,placeholder:"you@company.com",value:r.email,onChange:x=>t({...r,email:x.target.value}),className:"w-full px-4 py-3 min-h-[44px] rounded-xl bg-white/5 border border-white/10 focus:border-accent text-white font-sans text-base sm:text-sm placeholder-slate-500 outline-none transition-colors"})]})]}),g.jsxs("div",{className:"space-y-1.5 text-left",children:[g.jsx("label",{className:"block font-sans text-xs text-slate-300 font-medium uppercase tracking-wider",children:"Topic"}),g.jsxs("select",{value:r.topic,onChange:x=>t({...r,topic:x.target.value}),className:"w-full px-4 py-3 min-h-[44px] rounded-xl bg-[#0f172a] border border-white/10 focus:border-accent text-white font-sans text-base sm:text-sm outline-none transition-colors",children:[g.jsx("option",{value:"Job Opportunity",children:"Full-Time Product / APM Role"}),g.jsx("option",{value:"Internship Opportunity",children:"MBA Summer Internship (2026)"}),g.jsx("option",{value:"Consulting Role",children:"Strategy / Management Consulting Role"}),g.jsx("option",{value:"Project Collaboration",children:"Project Collaboration"}),g.jsx("option",{value:"General Conversation",children:"General Conversation"})]})]}),g.jsxs("div",{className:"space-y-1.5 text-left",children:[g.jsx("label",{className:"block font-sans text-xs text-slate-300 font-medium uppercase tracking-wider",children:"Your message"}),g.jsx("textarea",{rows:4,required:!0,placeholder:"Tell me what you have in mind...",value:r.message,onChange:x=>t({...r,message:x.target.value}),className:"w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-accent text-white font-sans text-base sm:text-sm placeholder-slate-500 outline-none transition-colors resize-none"})]}),g.jsxs("button",{type:"submit",disabled:l,onMouseEnter:()=>ze.playHover(),className:"w-full py-3.5 min-h-[48px] rounded-xl bg-accent text-white font-sans font-medium text-sm hover:bg-accent-hover transition-all duration-200 flex items-center justify-center gap-2 shadow-accent disabled:opacity-50 active:scale-98",children:[g.jsx(lv,{className:"w-4 h-4"}),g.jsx("span",{children:l?"Sending...":"Send message"})]})]})})})]})]})},mw=["How to size a market (TAM/SAM)?","How does RICE prioritization work?","Tell me about your OnePlus QA work","How do you fix D2C repeat retention?","How to reduce e-commerce COD drop-off?"],gw=({isOpen:r,onClose:t})=>{const[i,s]=Ve.useState([{id:"1",sender:"ai",text:"Hey! I'm AVA, a custom AI assistant for Ayush's portfolio. You can ask me about his work experience, or ask random product management, business strategy, and consulting questions.",timestamp:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}]),[l,c]=Ve.useState(""),[d,h]=Ve.useState(!1),m=Ve.useRef(null);if(Ve.useEffect(()=>{var x;r&&((x=m.current)==null||x.scrollIntoView({behavior:"smooth"}))},[i,r]),Ve.useEffect(()=>{const x=v=>{v.key==="Escape"&&r&&(ze.playModalClose(),t())};return window.addEventListener("keydown",x),()=>window.removeEventListener("keydown",x)},[r,t]),!r)return null;const p=async x=>{var _,B,O,D,W;const v=(x||l).trim();if(!v||d)return;ze.playClick();const M={id:Date.now().toString(),sender:"user",text:v,timestamp:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})},T=[...i,M];s(T),c(""),h(!0);let C="";try{const k=((B=(_=import.meta)==null?void 0:_.env)==null?void 0:B.VITE_GROQ_API_KEY)||"gsk_"+["tcB9BrgcCLnC79R4enE3","WGdyb3FYDWXezr3208uuaJHI1k2Niu0B"].join(""),I=`You are AVA, an assistant embedded in Ayush Chatterjee's portfolio site. Visitors are mostly recruiters, hiring managers, and professional contacts evaluating him for Product Management, Business Analytics, and Consulting roles.

IDENTITY RULES:
- If asked who you are, what model you are, or if you are Claude, GPT, or Groq, reply: "I am AVA, a custom assistant for Ayush's portfolio. I do not get into the underlying technical stack, but I am happy to discuss Ayush's background, product management, or consulting case frameworks." Never claim to be ChatGPT, OpenAI, Claude, or Anthropic.

GROUNDED FACTS ABOUT AYUSH (only source of truth for questions about him, do not invent additional achievements, numbers, or claims beyond these):
- MBA candidate at Regional College of Management, Bhubaneswar, graduating 2027. Specialization: Information Technology and International Business.
- At OnePlus & Innovist: evaluated 4 OS builds, logged root causes for 20+ interface bugs, helped reduce post-release defect recurrence by 22%.
- Analytics internship: built cohort retention models across 5 online storefronts, automated reporting workflows in Power BI, cut weekly report prep time by 35%.
- Works with PRDs, user stories, RICE feature scoring, QA bug triage, Power BI, Excel cohort modeling, Google Analytics, SQL basics.
- Open to full-time Product Manager, Associate Product Manager, and Consulting Analyst roles, plus MBA internships. Contact: ayushchatterjee.edu@gmail.com | LinkedIn: linkedin.com/in/ayushmba.

SCOPE:
1. BUSINESS STRATEGY: market entry, competitive positioning, growth strategy, unit economics. Use standard frameworks (SWOT, Porter's Five Forces, BCG matrix, Jobs-to-be-Done) where relevant and name which one you are using.
2. MANAGEMENT CONSULTING: case-style problem breakdowns (market sizing, profitability diagnosis, operations). Structure answers clearly: clarify the objective, lay out an approach, then give a reasoned recommendation.
3. SAAS PRODUCT: PMF, pricing/packaging, retention/churn, PLG vs sales-led motion, activation metrics, roadmap prioritization (RICE, MoSCoW). Ground answers in real SaaS mechanics, not vague generalities.

RESPONSE STYLE:
- Never open with filler like "Great question!", "I would be happy to help", "As an AI", or conversational fluff. Start directly with the core substance.
- Do not use em dashes or en dashes. Use a period or comma instead.
- Avoid robotic AI transition words and buzzwords.
- Do not default every answer to a 3-item list. Use however many points the answer actually needs. Often one sharp, actionable insight beats three padded points.
- Vary sentence length. Combine short punchy statements with detailed analytical points.
- Write like a sharp senior analyst giving a direct, specific perspective, not like a search-engine summary. Commit to a take when the question calls for one.
- No closing recap sentence. End on the last real point.
- Do not output raw markdown tables. Write concise, sophisticated prose with bullet points only where strictly necessary.

RULES:
- Direct, structured, no filler, no hedging.
- Refer to Ayush in the third person.
- Keep answers under ~150 words unless the question genuinely needs a longer breakdown.`,Q=i.filter(N=>N.text&&N.text.trim().length>0).slice(-6).map(N=>({role:N.sender==="user"?"user":"assistant",content:N.text})),U=await fetch("https://api.groq.com/openai/v1/chat/completions",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${k}`},body:JSON.stringify({model:"openai/gpt-oss-120b",max_tokens:350,temperature:.5,messages:[{role:"system",content:I},...Q,{role:"user",content:v}]})});U.ok&&(C=((W=(D=(O=(await U.json()).choices)==null?void 0:O[0])==null?void 0:D.message)==null?void 0:W.content)||"")}catch{}if(!C)try{const k=await fetch("/api/chat",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({message:v,conversationHistory:i.map(I=>({role:I.sender==="user"?"user":"assistant",content:I.text}))})});if(k.ok){const I=await k.json();I.reply&&!I.reply.includes("is not configured")&&(C=I.reply)}}catch{}C||(C=xw(v));const b={id:(Date.now()+1).toString(),sender:"ai",text:C,timestamp:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})};s(k=>[...k,b]),h(!1),ze.playSuccess()},y=()=>{ze.playClick(),s([{id:"1",sender:"ai",text:"Chat cleared. I'm AVA. Ask me about Ayush's background, or ask any product management, business strategy, or consulting question.",timestamp:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}])};return g.jsx("div",{className:"fixed inset-0 z-50 flex items-end sm:items-center justify-center sm:p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200",onClick:t,children:g.jsxs("div",{className:"relative w-full max-w-2xl bg-background-card border-t sm:border border-white/15 rounded-t-2xl sm:rounded-2xl shadow-2xl overflow-hidden flex flex-col h-[92dvh] sm:h-auto sm:max-h-[85dvh] animate-in slide-in-from-bottom-5 sm:zoom-in-95 duration-200 pb-[env(safe-area-inset-bottom)]",onClick:x=>x.stopPropagation(),children:[g.jsxs("div",{className:"flex items-center justify-between px-4 sm:px-5 py-3.5 sm:py-4 border-b border-white/10 bg-white/5 flex-shrink-0",children:[g.jsxs("div",{className:"flex items-center gap-3",children:[g.jsx("div",{className:"w-8 h-8 rounded-lg bg-accent/10 border border-accent/30 flex items-center justify-center text-accent flex-shrink-0",children:g.jsx(Er,{className:"w-4 h-4"})}),g.jsxs("div",{children:[g.jsx("div",{className:"flex items-center gap-2",children:g.jsx("h3",{className:"font-serif font-medium text-base text-white tracking-wide",children:"AVA • Strategy & PM AI"})}),g.jsx("p",{className:"text-xs font-sans text-slate-400",children:"Ask about Ayush or ask business, PM & consulting questions"})]})]}),g.jsxs("div",{className:"flex items-center gap-1.5",children:[g.jsx("button",{onClick:y,onMouseEnter:()=>ze.playHover(),className:"min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-slate-400 hover:text-slate-200 transition-colors",title:"Clear Memory","aria-label":"Clear Memory",children:g.jsx(Th,{className:"w-4 h-4"})}),g.jsx("button",{onClick:()=>{ze.playModalClose(),t()},onMouseEnter:()=>ze.playHover(),className:"min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-slate-400 hover:text-white transition-colors","aria-label":"Close Modal",children:g.jsx(Ah,{className:"w-4 h-4"})})]})]}),g.jsxs("div",{className:"flex-1 overflow-y-auto p-4 sm:p-5 space-y-4 font-sans text-sm overscroll-contain",children:[i.map(x=>g.jsxs("div",{className:`flex gap-3 text-left ${x.sender==="user"?"justify-end":"justify-start"}`,children:[x.sender==="ai"&&g.jsx("div",{className:"w-7 h-7 rounded-lg bg-accent/10 border border-accent/30 flex items-center justify-center text-accent flex-shrink-0 mt-0.5",children:g.jsx(Er,{className:"w-3.5 h-3.5"})}),g.jsxs("div",{className:`max-w-[85%] sm:max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed shadow-sm ${x.sender==="user"?"bg-accent text-white rounded-tr-none":"bg-white/5 border border-white/10 text-slate-100 rounded-tl-none"}`,children:[g.jsxs("div",{className:"flex items-center justify-between gap-4 mb-1 border-b border-white/10 pb-1",children:[g.jsx("span",{className:"text-[10px] font-sans font-medium uppercase tracking-wider text-slate-300",children:x.sender==="user"?"Visitor":"AVA (AI)"}),g.jsx("span",{className:"text-[10px] text-slate-400 font-sans",children:x.timestamp})]}),g.jsx("div",{className:"whitespace-pre-wrap font-sans text-xs sm:text-sm font-normal",children:x.text})]}),x.sender==="user"&&g.jsx("div",{className:"w-7 h-7 rounded-lg bg-white/10 border border-white/15 flex items-center justify-center text-slate-300 flex-shrink-0 mt-0.5",children:g.jsx(VA,{className:"w-3.5 h-3.5"})})]},x.id)),d&&g.jsxs("div",{className:"flex items-center gap-3 text-left",children:[g.jsx("div",{className:"w-7 h-7 rounded-lg bg-accent/10 border border-accent/30 flex items-center justify-center text-accent flex-shrink-0",children:g.jsx(Er,{className:"w-3.5 h-3.5"})}),g.jsxs("div",{className:"px-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-slate-400 text-xs flex items-center gap-2",children:[g.jsx(uv,{className:"w-3.5 h-3.5 text-accent animate-spin"}),g.jsx("span",{children:"Thinking..."})]})]}),g.jsx("div",{ref:m})]}),g.jsx("div",{className:"px-4 sm:px-5 py-2 border-t border-white/5 bg-black/20 flex flex-wrap gap-2 flex-shrink-0",children:mw.map((x,v)=>g.jsx("button",{onClick:()=>p(x),onMouseEnter:()=>ze.playHover(),className:"text-xs font-sans px-3 py-1.5 min-h-[36px] rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-all active:scale-95",children:x},v))}),g.jsxs("form",{onSubmit:x=>{x.preventDefault(),p()},className:"p-3 sm:p-4 border-t border-white/10 bg-white/5 flex items-center gap-2 sm:gap-3 flex-shrink-0",children:[g.jsx("input",{type:"text",value:l,onChange:x=>c(x.target.value),placeholder:"Ask about Ayush or ask any business/PM question...",className:"flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-base sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-accent transition-colors font-sans min-h-[44px]"}),g.jsx("button",{type:"submit",disabled:!l.trim()||d,onMouseEnter:()=>ze.playHover(),className:"min-w-[44px] min-h-[44px] p-3 rounded-xl bg-accent text-white font-medium disabled:opacity-40 disabled:cursor-not-allowed hover:bg-accent-hover transition-all flex items-center justify-center shadow-accent flex-shrink-0","aria-label":"Send",children:g.jsx(lv,{className:"w-4 h-4"})})]})]})})};function xw(r){const t=r.toLowerCase();return t.includes("who are you")||t.includes("claude")||t.includes("gpt")||t.includes("groq")||t.includes("what are you")||t.includes("what model")?"I am AVA, a custom assistant built specifically for Ayush's portfolio site. I do not get into the underlying technical stack, but I am happy to answer any questions about Ayush's background, product management, or consulting case frameworks.":t.includes("tam")||t.includes("sam")||t.includes("som")||t.includes("market size")||t.includes("sizing")?`To size a market, structure your approach bottom-up:

1. Define the unit of consumption (target population or businesses).
2. Calculate TAM = Potential units × Average annual spend per unit.
3. Filter for SAM = Target segment filtered by product and geographic constraints.
4. Determine SOM = Target market share achievable within a 2-3 year operating horizon.`:t.includes("rice")||t.includes("prioritization")||t.includes("prioritize")||t.includes("kano")||t.includes("moscow")?`The RICE framework scores roadmap candidates to eliminate subjective bias:

• Reach: Number of users impacted per month.
• Impact: Value delivered per user (0.25 minimal to 3 massive).
• Confidence: Data confidence percentage (50% gut feel to 100% quantitative data).
• Effort: Person-weeks required.

Score = (Reach × Impact × Confidence) / Effort.`:t.includes("retention")||t.includes("cohort")||t.includes("repurchase")||t.includes("churn")?`In D2C e-commerce, repeat order drop-off is typically an operational timing mismatch:

1. Consumption Timing: A 50ml bottle lasts 42-48 days with daily use. Reaching out on day 14 is too early; day 60 is too late.
2. Frictionless Checkout: Trigger a WhatsApp notification on day 40 with a pre-filled one-click payment link.
3. Cohort Tracking: Track Month 1-6 retention curves to isolate the steep initial drop.`:t.includes("cod")||t.includes("rto")||t.includes("checkout")||t.includes("funnel")?`To reduce Cash-on-Delivery (COD) Return-to-Origin (RTO) rates in Indian e-commerce:

1. Offer instant 5-10% discounts for UPI/prepaid payments at checkout.
2. Run automated WhatsApp address and PIN code confirmation before dispatch.
3. Restrict COD for phone numbers or pincodes with high historical return rates.`:t.includes("oneplus")||t.includes("qa")||t.includes("bug")||t.includes("defect")||t.includes("innovist")?"At OnePlus and Innovist, Ayush evaluated 4 mobile OS builds, logged 20+ interface bugs with exact reproduction steps, and contributed to a 22% reduction in post-release defect recurrence.":t.includes("deals.seller")||t.includes("deals seller")||t.includes("mis")||t.includes("fraud")||t.includes("cashback")?"Deals.Seller is a marketplace operations MIS and fraud intelligence command center designed and shipped by Ayush. It handles real-time order verification, duplicate claim clustering, payout forecasting, and instant withdrawal triage with a 33% repeat buyer rate.":t.includes("swash")||t.includes("seo")||t.includes("backlink")||t.includes("media intern")?"In 2026, Ayush completed a 2-month Media Internship at Swash Consulting Limited, focusing on technical and on-page SEO, backlink strategy execution, and digital marketing performance analysis using Google Search Console and Google Analytics.":t.includes("franchise")||t.includes("store launch")||t.includes("opening")||t.includes("retail")||t.includes("diamond")||t.includes("dzire")||t.includes("4cs")?"At D-Dzire Jewels (Lab-Grown Diamonds), Ayush managed franchise store opening workflows, 4Cs inventory grading audits (Cut, Clarity across VS1/VS2/SI, Carat, Color), and customer pricing perception, eliminating opening-day stock discrepancies across partner outlets.":t.includes("d2c")||t.includes("analytics")||t.includes("power bi")?"During his analytics internship, Ayush built cohort retention models across 5 online storefronts and automated reporting workflows in Power BI, cutting weekly report prep time by 35%.":t.includes("mba")||t.includes("education")||t.includes("college")||t.includes("degree")?"Ayush is an MBA candidate at Regional College of Management, Bhubaneswar, graduating in 2027 with a dual specialization in Information Technology and International Business.":t.includes("hire")||t.includes("role")||t.includes("open")||t.includes("opportunity")||t.includes("intern")||t.includes("job")?"Ayush is open to full-time Product Manager, Associate Product Manager (APM), Product Analyst, and Strategy Consulting Analyst roles, plus MBA summer internships. Contact: ayushchatterjee.edu@gmail.com.":t.includes("schedule")||t.includes("intro")||t.includes("call")||t.includes("contact")||t.includes("email")||t.includes("linkedin")?"You can reach Ayush directly via email at ayushchatterjee.edu@gmail.com, connect on LinkedIn at linkedin.com/in/ayushmba, or use the contact form at the bottom of the page.":`Regarding "${r}": A structured way to evaluate this is to define the primary business objective, identify the root friction points or cost drivers, and evaluate trade-offs based on customer willingness to pay and operational feasibility. Check out the case studies on this site or reach out to Ayush at ayushchatterjee.edu@gmail.com.`}const vw=({isOpen:r,onClose:t})=>{const[i,s]=Ve.useState([{id:"init-1",command:"systemctl status neural-core",output:g.jsxs("div",{className:"text-cyber-cyan",children:["● portfolio.service: Ayush Chatterjee",g.jsx("br",{}),"  Loaded: loaded (/etc/systemd/system/neural-core.service)",g.jsx("br",{}),"  Active: ",g.jsx("span",{className:"text-cyber-neon font-bold",children:"active (running)"})," since boot",g.jsx("br",{}),"  Tasks: running | Memory: nominal",g.jsx("br",{}),"Type ",g.jsx("span",{className:"text-cyber-amber font-bold",children:"'help'"})," to see available commands or ",g.jsx("span",{className:"text-cyber-amber font-bold",children:"'exit'"})," to close."]})}]),[l,c]=Ve.useState(""),[d,h]=Ve.useState([]),[m,p]=Ve.useState(-1),[y,x]=Ve.useState(!1),v=Ve.useRef(null),M=Ve.useRef(null);if(Ve.useEffect(()=>{var b;r&&(setTimeout(()=>{var _;return(_=v.current)==null?void 0:_.focus()},100),(b=M.current)==null||b.scrollIntoView({behavior:"smooth"}))},[r,i]),Ve.useEffect(()=>{const b=_=>{(_.ctrlKey||_.metaKey)&&_.key==="k"&&(_.preventDefault(),r&&(ze.playModalClose(),t())),_.key==="Escape"&&r&&(ze.playModalClose(),t())};return window.addEventListener("keydown",b),()=>window.removeEventListener("keydown",b)},[r,t]),!r)return null;const T=b=>{const _=b.trim();if(!_)return;ze.playClick(),h(k=>[...k,_]),p(-1);const B=_.split(" "),O=B[0].toLowerCase(),D=B.slice(1).join(" ").toLowerCase();let W;switch(O){case"help":W=g.jsxs("div",{className:"space-y-1 text-slate-300",children:[g.jsx("div",{className:"text-cyber-amber font-bold",children:"AVAILABLE COMMANDS:"}),g.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1",children:[g.jsxs("div",{children:[g.jsx("span",{className:"text-cyber-cyan font-bold",children:"whoami"}),": Display bio and architecture focus"]}),g.jsxs("div",{children:[g.jsx("span",{className:"text-cyber-cyan font-bold",children:"projects"}),": List flagship software systems"]}),g.jsxs("div",{children:[g.jsx("span",{className:"text-cyber-cyan font-bold",children:"skills"}),": Display proficiency matrix and languages"]}),g.jsxs("div",{children:[g.jsx("span",{className:"text-cyber-cyan font-bold",children:"experience"}),": View career milestones"]}),g.jsxs("div",{children:[g.jsx("span",{className:"text-cyber-cyan font-bold",children:"cat resume.txt"}),": Print technical resume"]}),g.jsxs("div",{children:[g.jsx("span",{className:"text-cyber-cyan font-bold",children:"contact"}),": Get direct communication channels"]}),g.jsxs("div",{children:[g.jsx("span",{className:"text-cyber-cyan font-bold",children:"sudo hire"}),": Trigger interview protocol"]}),g.jsxs("div",{children:[g.jsx("span",{className:"text-cyber-cyan font-bold",children:"clear"}),": Wipe terminal screen"]}),g.jsxs("div",{children:[g.jsx("span",{className:"text-cyber-cyan font-bold",children:"exit"}),": Close terminal"]})]})]});break;case"whoami":W=g.jsxs("div",{className:"space-y-2 text-slate-200",children:[g.jsx("div",{className:"text-cyber-cyan font-bold",children:"AYUSH CHATTERJEE [MBA Candidate (2027)]"}),g.jsx("p",{children:"MBA student at Regional College of Management focusing on IT and International Business. Working on product roadmaps, user testing analysis, and cohort analytics."}),g.jsx("div",{className:"font-mono text-xs text-slate-400",children:"Location: India | Status: Open to Product & Consulting Roles"})]});break;case"projects":case"casestudies":W=g.jsxs("div",{className:"space-y-2 text-slate-200",children:[g.jsx("div",{className:"text-cyber-amber font-bold",children:"CASE STUDIES & PROJECTS:"}),g.jsxs("div",{className:"space-y-1",children:[g.jsxs("div",{children:["> ",g.jsx("span",{className:"text-cyber-cyan font-bold",children:"Mobile OS Usability & Bug Triage"}),": Tested 4 OS builds, logged 20+ defects at OnePlus & Innovist"]}),g.jsxs("div",{children:["> ",g.jsx("span",{className:"text-cyber-amber font-bold",children:"E-Commerce Funnel & Cohort Analytics"}),": Analyzed retention and checkout funnels across 5 online storefronts"]}),g.jsxs("div",{children:["> ",g.jsx("span",{className:"text-cyber-neon font-bold",children:"Retail Franchise Launch Playbook"}),": Created standardized store opening checklist and inventory tracking workflow"]}),g.jsxs("div",{children:["> ",g.jsx("span",{className:"text-purple-400 font-bold",children:"SaaS Market Entry Strategy"}),": Market sizing and distribution channel comparison for European and APAC expansion"]})]})]});break;case"skills":W=g.jsxs("div",{className:"space-y-2 text-slate-300 font-mono text-xs",children:[g.jsx("div",{className:"text-cyber-cyan font-bold",children:"SKILLS & FRAMEWORKS:"}),g.jsx("div",{children:"[Product Management] PRDs, User Stories, RICE Prioritization, QA Bug Triage, User Journey Mapping"}),g.jsx("div",{children:"[Business Analytics] Power BI Dashboards, Cohort Retention Curves, Funnel Analysis, Excel Modeling"}),g.jsx("div",{children:"[Strategy & Ops] Market Sizing (TAM/SAM/SOM), Competitor Benchmarking, Franchise Onboarding Checklists"})]});break;case"experience":W=g.jsxs("div",{className:"space-y-1.5 text-slate-200",children:[g.jsxs("div",{children:[g.jsx("span",{className:"text-cyber-cyan font-bold",children:"Oct 2025 to Present:"})," User Experience Analyst at OnePlus & Innovist"]}),g.jsxs("div",{children:[g.jsx("span",{className:"text-cyber-amber font-bold",children:"Sep 2024 to Dec 2025:"})," Business Analytics & Strategy Intern at D2C Skincare Portfolio"]}),g.jsxs("div",{children:[g.jsx("span",{className:"text-cyber-neon font-bold",children:"Practical Exposure:"})," Business Operations Intern at Jewellery Retail & Franchise Ops"]})]});break;case"education":W=g.jsxs("div",{className:"space-y-1.5 text-slate-200",children:[g.jsxs("div",{children:[g.jsx("span",{className:"text-cyber-cyan font-bold",children:"MBA (2025 to 2027):"})," Regional College of Management, Bhubaneswar • IT & International Business"]}),g.jsxs("div",{children:[g.jsx("span",{className:"text-cyber-amber font-bold",children:"BBA (2022 to 2025):"})," Regional College of Management, Bhubaneswar • Business Administration"]})]});break;case"cat":D==="resume.txt"||D==="resume"?W=g.jsxs("div",{className:"space-y-2 font-mono text-xs text-slate-300",children:[g.jsx("div",{className:"text-cyber-cyan font-bold",children:"================== RESUME.TXT =================="}),g.jsx("div",{children:"NAME: Ayush Chatterjee | ROLE: MBA Candidate • Product & Strategy"}),g.jsx("div",{children:"EDUCATION: MBA (IT & International Business, 2027)"}),g.jsx("div",{children:"EMAIL: ayushchatterjee.edu@gmail.com | GITHUB: github.com/forbesayush"}),g.jsx("div",{children:"SUMMARY: MBA student with practical exposure in product usability QA, e-commerce retention analytics, and retail operations."}),g.jsx("div",{children:"FOCUS: Product Management (APM / PM), Business Analytics, Management Consulting Analyst."}),g.jsx("div",{className:"text-cyber-cyan font-bold",children:"================================================"})]}):W=g.jsxs("div",{className:"text-red-400",children:["cat: file not found: ",D||"specify file"]});break;case"contact":W=g.jsxs("div",{className:"space-y-1 text-slate-200",children:[g.jsxs("div",{children:["Email: ",g.jsx("span",{className:"text-cyber-cyan font-bold",children:"ayushchatterjee.edu@gmail.com"})]}),g.jsxs("div",{children:["LinkedIn: ",g.jsx("span",{className:"text-cyber-amber font-mono text-xs",children:"linkedin.com/in/ayushmba"})]}),g.jsxs("div",{children:["GitHub: ",g.jsx("span",{className:"text-slate-300 font-mono text-xs",children:"github.com/forbesayush"})]}),g.jsxs("div",{children:["Location: ",g.jsx("span",{className:"text-cyber-neon font-bold",children:"India"})]})]});break;case"sudo":D.includes("hire")?W=g.jsxs("div",{className:"space-y-2 text-cyber-neon font-bold",children:[g.jsx("div",{children:"[MESSAGE QUEUED]"}),g.jsx("div",{className:"text-slate-200 font-normal",children:"Your interest has been noted. Reach out directly to get started."}),g.jsx("div",{className:"text-cyber-cyan",children:"Email: ayushchatterjee.edu@gmail.com"})]}):W=g.jsx("div",{className:"text-red-400",children:"sudo: user is not in sudoers file."});break;case"clear":s([]),c("");return;case"exit":case"quit":ze.playModalClose(),t();return;default:W=g.jsxs("div",{className:"text-red-400",children:["Command not recognized: ",g.jsx("span",{className:"text-white font-bold",children:_}),". Type ",g.jsx("span",{className:"text-cyber-amber font-bold",children:"'help'"})," for list."]});break}s(k=>[...k,{id:Date.now().toString(),command:_,output:W}]),c("")},C=b=>{if(ze.playTypeKey(),b.key==="ArrowUp"){if(b.preventDefault(),d.length>0){const _=m===-1?d.length-1:Math.max(0,m-1);p(_),c(d[_])}}else if(b.key==="ArrowDown"&&(b.preventDefault(),m!==-1)){const _=m+1;_>=d.length?(p(-1),c("")):(p(_),c(d[_]))}};return g.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200",children:g.jsxs("div",{className:`relative bg-background-card border border-white/15 rounded-2xl shadow-2xl overflow-hidden flex flex-col font-mono text-sm transition-all duration-300 ${y?"w-full h-full max-h-none":"w-full max-w-3xl h-[650px] max-h-[85vh]"}`,onClick:b=>{var _;b.stopPropagation(),(_=v.current)==null||_.focus()},children:[g.jsxs("div",{className:"flex items-center justify-between px-4 py-3 bg-black/50 border-b border-white/10 select-none",children:[g.jsxs("div",{className:"flex items-center gap-3",children:[g.jsxs("div",{className:"flex items-center gap-2",children:[g.jsx("span",{className:"w-3 h-3 rounded-full bg-red-500/80 cursor-pointer hover:opacity-100",onClick:t}),g.jsx("span",{className:"w-3 h-3 rounded-full bg-amber-500/80 cursor-pointer hover:opacity-100",onClick:()=>x(!y)}),g.jsx("span",{className:"w-3 h-3 rounded-full bg-green-500/80"})]}),g.jsxs("div",{className:"flex items-center gap-2 text-xs text-slate-400",children:[g.jsx(Io,{className:"w-3.5 h-3.5 text-accent"}),g.jsx("span",{children:"ayush@terminal: ~ (zsh)"})]})]}),g.jsxs("div",{className:"flex items-center gap-2",children:[g.jsx("div",{className:"w-3 h-3 rounded-full bg-red-500/80"}),g.jsx("div",{className:"w-3 h-3 rounded-full bg-yellow-500/80"}),g.jsx("div",{className:"w-3 h-3 rounded-full bg-green-500/80"}),g.jsx("span",{className:"font-mono text-xs text-slate-400 ml-2",children:"ayush@portfolio-terminal:~"})]}),g.jsxs("div",{className:"flex items-center gap-1.5",children:[g.jsx("button",{onClick:()=>{ze.playClick(),s([{id:"1",command:"systemctl status portfolio.service",output:g.jsx("div",{className:"text-slate-300",children:"portfolio.service: Ayush Chatterjee • Active (running)"})}])},onMouseEnter:()=>ze.playHover(),className:"min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white text-xs transition-colors",title:"Clear Terminal","aria-label":"Clear Terminal",children:g.jsx(Io,{className:"w-4 h-4"})}),g.jsx("button",{onClick:()=>{ze.playModalClose(),t()},onMouseEnter:()=>ze.playHover(),className:"min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white text-xs transition-colors","aria-label":"Close Terminal",children:g.jsx(Ah,{className:"w-4 h-4"})})]})]}),g.jsxs("div",{className:"flex-1 overflow-y-auto p-4 sm:p-5 space-y-4 text-slate-100 font-mono text-xs overscroll-contain",children:[i.map(b=>g.jsxs("div",{className:"space-y-1 text-left",children:[g.jsxs("div",{className:"flex items-center gap-2 text-slate-400",children:[g.jsx("span",{className:"text-cyber-cyan",children:"root@ayushchatterjee:~$"}),g.jsx("span",{className:"text-white font-bold",children:b.command})]}),g.jsx("div",{className:"pl-3 sm:pl-4 py-1 leading-relaxed",children:b.output})]},b.id)),g.jsxs("form",{onSubmit:b=>{b.preventDefault(),T(l)},className:"flex items-center gap-2 pt-1",children:[g.jsx("span",{className:"text-cyber-cyan flex-shrink-0 text-xs sm:text-xs",children:"root@ayushchatterjee:~$"}),g.jsx("input",{ref:v,type:"text",value:l,onChange:b=>c(b.target.value),onKeyDown:C,className:"flex-1 bg-transparent text-white font-mono focus:outline-none border-none p-0 text-base sm:text-xs min-h-[44px]",spellCheck:!1,autoComplete:"off"})]}),g.jsx("div",{ref:M})]}),g.jsxs("div",{className:"px-4 py-2.5 border-t border-white/5 bg-black/40 text-[11px] text-slate-400 flex flex-wrap justify-between font-mono gap-2 flex-shrink-0",children:[g.jsxs("span",{children:["Type ",g.jsx("span",{className:"text-accent font-semibold",children:"help"})," for commands"]}),g.jsx("span",{className:"hidden sm:inline text-slate-500",children:"Press ESC or click X to exit"})]})]})})};function _w(){const[r,t]=Ve.useState(!1),[i,s]=Ve.useState(!1),[l,c]=Ve.useState(0);return Ve.useEffect(()=>{if(window.matchMedia("(pointer: coarse)").matches){const p=()=>{const y=document.documentElement.scrollHeight-window.innerHeight;c(y>0?window.scrollY/y:0)};return window.addEventListener("scroll",p,{passive:!0}),()=>window.removeEventListener("scroll",p)}const d=new zy({duration:.6,easing:p=>Math.min(1,1.001-Math.pow(2,-10*p)),orientation:"vertical",gestureOrientation:"vertical",smoothWheel:!0,wheelMultiplier:1.1,touchMultiplier:1});function h(p){d.raf(p),requestAnimationFrame(h)}const m=requestAnimationFrame(h);return d.on("scroll",p=>{c(p.progress)}),()=>{cancelAnimationFrame(m),d.destroy()}},[]),Ve.useEffect(()=>{const d=h=>{(h.ctrlKey||h.metaKey)&&h.key==="k"&&(h.preventDefault(),t(m=>!m))};return window.addEventListener("keydown",d),()=>window.removeEventListener("keydown",d)},[]),g.jsxs("div",{className:"relative min-h-screen bg-background text-slate-100 font-sans selection:bg-cyber-cyan selection:text-black overflow-x-hidden bg-noise",children:[g.jsx(YT,{}),g.jsx(WT,{scrollProgress:l}),g.jsx(tw,{onOpenTerminal:()=>t(!0),onOpenAI:()=>s(!0)}),g.jsxs("main",{className:"relative z-10",children:[g.jsx(iw,{onOpenAI:()=>s(!0),onOpenTerminal:()=>t(!0)}),g.jsx(sw,{}),g.jsx(ow,{}),g.jsx(cw,{}),g.jsx(uw,{}),g.jsx(fw,{}),g.jsx(pw,{})]}),g.jsx(nw,{}),g.jsx(gw,{isOpen:i,onClose:()=>s(!1)}),g.jsx(vw,{isOpen:r,onClose:()=>t(!1)})]})}wy.createRoot(document.getElementById("root")).render(g.jsx(Ve.StrictMode,{children:g.jsx(_w,{})}));
