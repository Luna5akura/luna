(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();var $c=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function zf(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ff={exports:{}},Io={},Af={exports:{}},fe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qi=Symbol.for("react.element"),k4=Symbol.for("react.portal"),_4=Symbol.for("react.fragment"),S4=Symbol.for("react.strict_mode"),D4=Symbol.for("react.profiler"),C4=Symbol.for("react.provider"),E4=Symbol.for("react.context"),z4=Symbol.for("react.forward_ref"),F4=Symbol.for("react.suspense"),A4=Symbol.for("react.memo"),T4=Symbol.for("react.lazy"),kc=Symbol.iterator;function P4(e){return e===null||typeof e!="object"?null:(e=kc&&e[kc]||e["@@iterator"],typeof e=="function"?e:null)}var Tf={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Pf=Object.assign,Nf={};function Ma(e,t,n){this.props=e,this.context=t,this.refs=Nf,this.updater=n||Tf}Ma.prototype.isReactComponent={};Ma.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Ma.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Mf(){}Mf.prototype=Ma.prototype;function I0(e,t,n){this.props=e,this.context=t,this.refs=Nf,this.updater=n||Tf}var O0=I0.prototype=new Mf;O0.constructor=I0;Pf(O0,Ma.prototype);O0.isPureReactComponent=!0;var _c=Array.isArray,Rf=Object.prototype.hasOwnProperty,B0={current:null},If={key:!0,ref:!0,__self:!0,__source:!0};function Of(e,t,n){var r,a={},i=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(i=""+t.key),t)Rf.call(t,r)&&!If.hasOwnProperty(r)&&(a[r]=t[r]);var o=arguments.length-2;if(o===1)a.children=n;else if(1<o){for(var s=Array(o),u=0;u<o;u++)s[u]=arguments[u+2];a.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)a[r]===void 0&&(a[r]=o[r]);return{$$typeof:Qi,type:e,key:i,ref:l,props:a,_owner:B0.current}}function N4(e,t){return{$$typeof:Qi,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function L0(e){return typeof e=="object"&&e!==null&&e.$$typeof===Qi}function M4(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Sc=/\/+/g;function gs(e,t){return typeof e=="object"&&e!==null&&e.key!=null?M4(""+e.key):t.toString(36)}function Il(e,t,n,r,a){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Qi:case k4:l=!0}}if(l)return l=e,a=a(l),e=r===""?"."+gs(l,0):r,_c(a)?(n="",e!=null&&(n=e.replace(Sc,"$&/")+"/"),Il(a,t,n,"",function(u){return u})):a!=null&&(L0(a)&&(a=N4(a,n+(!a.key||l&&l.key===a.key?"":(""+a.key).replace(Sc,"$&/")+"/")+e)),t.push(a)),1;if(l=0,r=r===""?".":r+":",_c(e))for(var o=0;o<e.length;o++){i=e[o];var s=r+gs(i,o);l+=Il(i,t,n,s,a)}else if(s=P4(e),typeof s=="function")for(e=s.call(e),o=0;!(i=e.next()).done;)i=i.value,s=r+gs(i,o++),l+=Il(i,t,n,s,a);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function ol(e,t,n){if(e==null)return e;var r=[],a=0;return Il(e,r,"","",function(i){return t.call(n,i,a++)}),r}function R4(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ft={current:null},Ol={transition:null},I4={ReactCurrentDispatcher:ft,ReactCurrentBatchConfig:Ol,ReactCurrentOwner:B0};function Bf(){throw Error("act(...) is not supported in production builds of React.")}fe.Children={map:ol,forEach:function(e,t,n){ol(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ol(e,function(){t++}),t},toArray:function(e){return ol(e,function(t){return t})||[]},only:function(e){if(!L0(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};fe.Component=Ma;fe.Fragment=_4;fe.Profiler=D4;fe.PureComponent=I0;fe.StrictMode=S4;fe.Suspense=F4;fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=I4;fe.act=Bf;fe.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Pf({},e.props),a=e.key,i=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,l=B0.current),t.key!==void 0&&(a=""+t.key),e.type&&e.type.defaultProps)var o=e.type.defaultProps;for(s in t)Rf.call(t,s)&&!If.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&o!==void 0?o[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){o=Array(s);for(var u=0;u<s;u++)o[u]=arguments[u+2];r.children=o}return{$$typeof:Qi,type:e.type,key:a,ref:i,props:r,_owner:l}};fe.createContext=function(e){return e={$$typeof:E4,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:C4,_context:e},e.Consumer=e};fe.createElement=Of;fe.createFactory=function(e){var t=Of.bind(null,e);return t.type=e,t};fe.createRef=function(){return{current:null}};fe.forwardRef=function(e){return{$$typeof:z4,render:e}};fe.isValidElement=L0;fe.lazy=function(e){return{$$typeof:T4,_payload:{_status:-1,_result:e},_init:R4}};fe.memo=function(e,t){return{$$typeof:A4,type:e,compare:t===void 0?null:t}};fe.startTransition=function(e){var t=Ol.transition;Ol.transition={};try{e()}finally{Ol.transition=t}};fe.unstable_act=Bf;fe.useCallback=function(e,t){return ft.current.useCallback(e,t)};fe.useContext=function(e){return ft.current.useContext(e)};fe.useDebugValue=function(){};fe.useDeferredValue=function(e){return ft.current.useDeferredValue(e)};fe.useEffect=function(e,t){return ft.current.useEffect(e,t)};fe.useId=function(){return ft.current.useId()};fe.useImperativeHandle=function(e,t,n){return ft.current.useImperativeHandle(e,t,n)};fe.useInsertionEffect=function(e,t){return ft.current.useInsertionEffect(e,t)};fe.useLayoutEffect=function(e,t){return ft.current.useLayoutEffect(e,t)};fe.useMemo=function(e,t){return ft.current.useMemo(e,t)};fe.useReducer=function(e,t,n){return ft.current.useReducer(e,t,n)};fe.useRef=function(e){return ft.current.useRef(e)};fe.useState=function(e){return ft.current.useState(e)};fe.useSyncExternalStore=function(e,t,n){return ft.current.useSyncExternalStore(e,t,n)};fe.useTransition=function(){return ft.current.useTransition()};fe.version="18.3.1";Af.exports=fe;var A=Af.exports;const Lf=zf(A);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var O4=A,B4=Symbol.for("react.element"),L4=Symbol.for("react.fragment"),q4=Object.prototype.hasOwnProperty,j4=O4.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,H4={key:!0,ref:!0,__self:!0,__source:!0};function qf(e,t,n){var r,a={},i=null,l=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)q4.call(t,r)&&!H4.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)a[r]===void 0&&(a[r]=t[r]);return{$$typeof:B4,type:e,key:i,ref:l,props:a,_owner:j4.current}}Io.Fragment=L4;Io.jsx=qf;Io.jsxs=qf;Ff.exports=Io;var N=Ff.exports,vu={},jf={exports:{}},Nt={},Hf={exports:{}},Uf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(W,J){var k=W.length;W.push(J);e:for(;0<k;){var ne=k-1>>>1,ce=W[ne];if(0<a(ce,J))W[ne]=J,W[k]=ce,k=ne;else break e}}function n(W){return W.length===0?null:W[0]}function r(W){if(W.length===0)return null;var J=W[0],k=W.pop();if(k!==J){W[0]=k;e:for(var ne=0,ce=W.length,C=ce>>>1;ne<C;){var Ne=2*(ne+1)-1,Xe=W[Ne],ke=Ne+1,et=W[ke];if(0>a(Xe,k))ke<ce&&0>a(et,Xe)?(W[ne]=et,W[ke]=k,ne=ke):(W[ne]=Xe,W[Ne]=k,ne=Ne);else if(ke<ce&&0>a(et,k))W[ne]=et,W[ke]=k,ne=ke;else break e}}return J}function a(W,J){var k=W.sortIndex-J.sortIndex;return k!==0?k:W.id-J.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var l=Date,o=l.now();e.unstable_now=function(){return l.now()-o}}var s=[],u=[],h=1,m=null,f=3,p=!1,v=!1,x=!1,S=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,y=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function $(W){for(var J=n(u);J!==null;){if(J.callback===null)r(u);else if(J.startTime<=W)r(u),J.sortIndex=J.expirationTime,t(s,J);else break;J=n(u)}}function F(W){if(x=!1,$(W),!v)if(n(s)!==null)v=!0,be(P);else{var J=n(u);J!==null&&ve(F,J.startTime-W)}}function P(W,J){v=!1,x&&(x=!1,g(I),I=-1),p=!0;var k=f;try{for($(J),m=n(s);m!==null&&(!(m.expirationTime>J)||W&&!V());){var ne=m.callback;if(typeof ne=="function"){m.callback=null,f=m.priorityLevel;var ce=ne(m.expirationTime<=J);J=e.unstable_now(),typeof ce=="function"?m.callback=ce:m===n(s)&&r(s),$(J)}else r(s);m=n(s)}if(m!==null)var C=!0;else{var Ne=n(u);Ne!==null&&ve(F,Ne.startTime-J),C=!1}return C}finally{m=null,f=k,p=!1}}var E=!1,M=null,I=-1,O=5,Q=-1;function V(){return!(e.unstable_now()-Q<O)}function L(){if(M!==null){var W=e.unstable_now();Q=W;var J=!0;try{J=M(!0,W)}finally{J?he():(E=!1,M=null)}}else E=!1}var he;if(typeof y=="function")he=function(){y(L)};else if(typeof MessageChannel<"u"){var oe=new MessageChannel,ie=oe.port2;oe.port1.onmessage=L,he=function(){ie.postMessage(null)}}else he=function(){S(L,0)};function be(W){M=W,E||(E=!0,he())}function ve(W,J){I=S(function(){W(e.unstable_now())},J)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(W){W.callback=null},e.unstable_continueExecution=function(){v||p||(v=!0,be(P))},e.unstable_forceFrameRate=function(W){0>W||125<W?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):O=0<W?Math.floor(1e3/W):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(W){switch(f){case 1:case 2:case 3:var J=3;break;default:J=f}var k=f;f=J;try{return W()}finally{f=k}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(W,J){switch(W){case 1:case 2:case 3:case 4:case 5:break;default:W=3}var k=f;f=W;try{return J()}finally{f=k}},e.unstable_scheduleCallback=function(W,J,k){var ne=e.unstable_now();switch(typeof k=="object"&&k!==null?(k=k.delay,k=typeof k=="number"&&0<k?ne+k:ne):k=ne,W){case 1:var ce=-1;break;case 2:ce=250;break;case 5:ce=1073741823;break;case 4:ce=1e4;break;default:ce=5e3}return ce=k+ce,W={id:h++,callback:J,priorityLevel:W,startTime:k,expirationTime:ce,sortIndex:-1},k>ne?(W.sortIndex=k,t(u,W),n(s)===null&&W===n(u)&&(x?(g(I),I=-1):x=!0,ve(F,k-ne))):(W.sortIndex=ce,t(s,W),v||p||(v=!0,be(P))),W},e.unstable_shouldYield=V,e.unstable_wrapCallback=function(W){var J=f;return function(){var k=f;f=J;try{return W.apply(this,arguments)}finally{f=k}}}})(Uf);Hf.exports=Uf;var U4=Hf.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var W4=A,Pt=U4;function j(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Wf=new Set,Di={};function Ur(e,t){Ca(e,t),Ca(e+"Capture",t)}function Ca(e,t){for(Di[e]=t,e=0;e<t.length;e++)Wf.add(t[e])}var On=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),xu=Object.prototype.hasOwnProperty,V4=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Dc={},Cc={};function K4(e){return xu.call(Cc,e)?!0:xu.call(Dc,e)?!1:V4.test(e)?Cc[e]=!0:(Dc[e]=!0,!1)}function Q4(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function G4(e,t,n,r){if(t===null||typeof t>"u"||Q4(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function pt(e,t,n,r,a,i,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=a,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=l}var rt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){rt[e]=new pt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];rt[t]=new pt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){rt[e]=new pt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){rt[e]=new pt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){rt[e]=new pt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){rt[e]=new pt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){rt[e]=new pt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){rt[e]=new pt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){rt[e]=new pt(e,5,!1,e.toLowerCase(),null,!1,!1)});var q0=/[\-:]([a-z])/g;function j0(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(q0,j0);rt[t]=new pt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(q0,j0);rt[t]=new pt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(q0,j0);rt[t]=new pt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){rt[e]=new pt(e,1,!1,e.toLowerCase(),null,!1,!1)});rt.xlinkHref=new pt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){rt[e]=new pt(e,1,!1,e.toLowerCase(),null,!0,!0)});function H0(e,t,n,r){var a=rt.hasOwnProperty(t)?rt[t]:null;(a!==null?a.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(G4(t,n,a,r)&&(n=null),r||a===null?K4(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):a.mustUseProperty?e[a.propertyName]=n===null?a.type===3?!1:"":n:(t=a.attributeName,r=a.attributeNamespace,n===null?e.removeAttribute(t):(a=a.type,n=a===3||a===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Wn=W4.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,sl=Symbol.for("react.element"),aa=Symbol.for("react.portal"),ia=Symbol.for("react.fragment"),U0=Symbol.for("react.strict_mode"),wu=Symbol.for("react.profiler"),Vf=Symbol.for("react.provider"),Kf=Symbol.for("react.context"),W0=Symbol.for("react.forward_ref"),$u=Symbol.for("react.suspense"),ku=Symbol.for("react.suspense_list"),V0=Symbol.for("react.memo"),er=Symbol.for("react.lazy"),Qf=Symbol.for("react.offscreen"),Ec=Symbol.iterator;function Ga(e){return e===null||typeof e!="object"?null:(e=Ec&&e[Ec]||e["@@iterator"],typeof e=="function"?e:null)}var Le=Object.assign,ys;function si(e){if(ys===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ys=t&&t[1]||""}return`
`+ys+e}var vs=!1;function xs(e,t){if(!e||vs)return"";vs=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var a=u.stack.split(`
`),i=r.stack.split(`
`),l=a.length-1,o=i.length-1;1<=l&&0<=o&&a[l]!==i[o];)o--;for(;1<=l&&0<=o;l--,o--)if(a[l]!==i[o]){if(l!==1||o!==1)do if(l--,o--,0>o||a[l]!==i[o]){var s=`
`+a[l].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=l&&0<=o);break}}}finally{vs=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?si(e):""}function Z4(e){switch(e.tag){case 5:return si(e.type);case 16:return si("Lazy");case 13:return si("Suspense");case 19:return si("SuspenseList");case 0:case 2:case 15:return e=xs(e.type,!1),e;case 11:return e=xs(e.type.render,!1),e;case 1:return e=xs(e.type,!0),e;default:return""}}function _u(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ia:return"Fragment";case aa:return"Portal";case wu:return"Profiler";case U0:return"StrictMode";case $u:return"Suspense";case ku:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Kf:return(e.displayName||"Context")+".Consumer";case Vf:return(e._context.displayName||"Context")+".Provider";case W0:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case V0:return t=e.displayName||null,t!==null?t:_u(e.type)||"Memo";case er:t=e._payload,e=e._init;try{return _u(e(t))}catch{}}return null}function X4(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return _u(t);case 8:return t===U0?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function pr(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Gf(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Y4(e){var t=Gf(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var a=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(l){r=""+l,i.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ul(e){e._valueTracker||(e._valueTracker=Y4(e))}function Zf(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Gf(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function ro(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Su(e,t){var n=t.checked;return Le({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function zc(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=pr(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Xf(e,t){t=t.checked,t!=null&&H0(e,"checked",t,!1)}function Du(e,t){Xf(e,t);var n=pr(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Cu(e,t.type,n):t.hasOwnProperty("defaultValue")&&Cu(e,t.type,pr(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Fc(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Cu(e,t,n){(t!=="number"||ro(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var ui=Array.isArray;function ba(e,t,n,r){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&r&&(e[n].defaultSelected=!0)}else{for(n=""+pr(n),t=null,a=0;a<e.length;a++){if(e[a].value===n){e[a].selected=!0,r&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function Eu(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(j(91));return Le({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ac(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(j(92));if(ui(n)){if(1<n.length)throw Error(j(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:pr(n)}}function Yf(e,t){var n=pr(t.value),r=pr(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Tc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Jf(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function zu(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Jf(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var hl,e1=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,a){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,a)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(hl=hl||document.createElement("div"),hl.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=hl.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Ci(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var di={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},J4=["Webkit","ms","Moz","O"];Object.keys(di).forEach(function(e){J4.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),di[t]=di[e]})});function t1(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||di.hasOwnProperty(e)&&di[e]?(""+t).trim():t+"px"}function n1(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,a=t1(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,a):e[n]=a}}var e2=Le({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Fu(e,t){if(t){if(e2[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(j(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(j(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(j(61))}if(t.style!=null&&typeof t.style!="object")throw Error(j(62))}}function Au(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Tu=null;function K0(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Pu=null,ga=null,ya=null;function Pc(e){if(e=Xi(e)){if(typeof Pu!="function")throw Error(j(280));var t=e.stateNode;t&&(t=jo(t),Pu(e.stateNode,e.type,t))}}function r1(e){ga?ya?ya.push(e):ya=[e]:ga=e}function a1(){if(ga){var e=ga,t=ya;if(ya=ga=null,Pc(e),t)for(e=0;e<t.length;e++)Pc(t[e])}}function i1(e,t){return e(t)}function l1(){}var ws=!1;function o1(e,t,n){if(ws)return e(t,n);ws=!0;try{return i1(e,t,n)}finally{ws=!1,(ga!==null||ya!==null)&&(l1(),a1())}}function Ei(e,t){var n=e.stateNode;if(n===null)return null;var r=jo(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(j(231,t,typeof n));return n}var Nu=!1;if(On)try{var Za={};Object.defineProperty(Za,"passive",{get:function(){Nu=!0}}),window.addEventListener("test",Za,Za),window.removeEventListener("test",Za,Za)}catch{Nu=!1}function t2(e,t,n,r,a,i,l,o,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(h){this.onError(h)}}var fi=!1,ao=null,io=!1,Mu=null,n2={onError:function(e){fi=!0,ao=e}};function r2(e,t,n,r,a,i,l,o,s){fi=!1,ao=null,t2.apply(n2,arguments)}function a2(e,t,n,r,a,i,l,o,s){if(r2.apply(this,arguments),fi){if(fi){var u=ao;fi=!1,ao=null}else throw Error(j(198));io||(io=!0,Mu=u)}}function Wr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function s1(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Nc(e){if(Wr(e)!==e)throw Error(j(188))}function i2(e){var t=e.alternate;if(!t){if(t=Wr(e),t===null)throw Error(j(188));return t!==e?null:e}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var i=a.alternate;if(i===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===i.child){for(i=a.child;i;){if(i===n)return Nc(a),e;if(i===r)return Nc(a),t;i=i.sibling}throw Error(j(188))}if(n.return!==r.return)n=a,r=i;else{for(var l=!1,o=a.child;o;){if(o===n){l=!0,n=a,r=i;break}if(o===r){l=!0,r=a,n=i;break}o=o.sibling}if(!l){for(o=i.child;o;){if(o===n){l=!0,n=i,r=a;break}if(o===r){l=!0,r=i,n=a;break}o=o.sibling}if(!l)throw Error(j(189))}}if(n.alternate!==r)throw Error(j(190))}if(n.tag!==3)throw Error(j(188));return n.stateNode.current===n?e:t}function u1(e){return e=i2(e),e!==null?h1(e):null}function h1(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=h1(e);if(t!==null)return t;e=e.sibling}return null}var c1=Pt.unstable_scheduleCallback,Mc=Pt.unstable_cancelCallback,l2=Pt.unstable_shouldYield,o2=Pt.unstable_requestPaint,He=Pt.unstable_now,s2=Pt.unstable_getCurrentPriorityLevel,Q0=Pt.unstable_ImmediatePriority,m1=Pt.unstable_UserBlockingPriority,lo=Pt.unstable_NormalPriority,u2=Pt.unstable_LowPriority,d1=Pt.unstable_IdlePriority,Oo=null,gn=null;function h2(e){if(gn&&typeof gn.onCommitFiberRoot=="function")try{gn.onCommitFiberRoot(Oo,e,void 0,(e.current.flags&128)===128)}catch{}}var an=Math.clz32?Math.clz32:d2,c2=Math.log,m2=Math.LN2;function d2(e){return e>>>=0,e===0?32:31-(c2(e)/m2|0)|0}var cl=64,ml=4194304;function hi(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function oo(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,a=e.suspendedLanes,i=e.pingedLanes,l=n&268435455;if(l!==0){var o=l&~a;o!==0?r=hi(o):(i&=l,i!==0&&(r=hi(i)))}else l=n&~a,l!==0?r=hi(l):i!==0&&(r=hi(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&a)&&(a=r&-r,i=t&-t,a>=i||a===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-an(t),a=1<<n,r|=e[n],t&=~a;return r}function f2(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function p2(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,a=e.expirationTimes,i=e.pendingLanes;0<i;){var l=31-an(i),o=1<<l,s=a[l];s===-1?(!(o&n)||o&r)&&(a[l]=f2(o,t)):s<=t&&(e.expiredLanes|=o),i&=~o}}function Ru(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function f1(){var e=cl;return cl<<=1,!(cl&4194240)&&(cl=64),e}function $s(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Gi(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-an(t),e[t]=n}function b2(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var a=31-an(n),i=1<<a;t[a]=0,r[a]=-1,e[a]=-1,n&=~i}}function G0(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-an(n),a=1<<r;a&t|e[r]&t&&(e[r]|=t),n&=~a}}var $e=0;function p1(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var b1,Z0,g1,y1,v1,Iu=!1,dl=[],or=null,sr=null,ur=null,zi=new Map,Fi=new Map,nr=[],g2="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Rc(e,t){switch(e){case"focusin":case"focusout":or=null;break;case"dragenter":case"dragleave":sr=null;break;case"mouseover":case"mouseout":ur=null;break;case"pointerover":case"pointerout":zi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Fi.delete(t.pointerId)}}function Xa(e,t,n,r,a,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[a]},t!==null&&(t=Xi(t),t!==null&&Z0(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function y2(e,t,n,r,a){switch(t){case"focusin":return or=Xa(or,e,t,n,r,a),!0;case"dragenter":return sr=Xa(sr,e,t,n,r,a),!0;case"mouseover":return ur=Xa(ur,e,t,n,r,a),!0;case"pointerover":var i=a.pointerId;return zi.set(i,Xa(zi.get(i)||null,e,t,n,r,a)),!0;case"gotpointercapture":return i=a.pointerId,Fi.set(i,Xa(Fi.get(i)||null,e,t,n,r,a)),!0}return!1}function x1(e){var t=Pr(e.target);if(t!==null){var n=Wr(t);if(n!==null){if(t=n.tag,t===13){if(t=s1(n),t!==null){e.blockedOn=t,v1(e.priority,function(){g1(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Bl(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ou(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Tu=r,n.target.dispatchEvent(r),Tu=null}else return t=Xi(n),t!==null&&Z0(t),e.blockedOn=n,!1;t.shift()}return!0}function Ic(e,t,n){Bl(e)&&n.delete(t)}function v2(){Iu=!1,or!==null&&Bl(or)&&(or=null),sr!==null&&Bl(sr)&&(sr=null),ur!==null&&Bl(ur)&&(ur=null),zi.forEach(Ic),Fi.forEach(Ic)}function Ya(e,t){e.blockedOn===t&&(e.blockedOn=null,Iu||(Iu=!0,Pt.unstable_scheduleCallback(Pt.unstable_NormalPriority,v2)))}function Ai(e){function t(a){return Ya(a,e)}if(0<dl.length){Ya(dl[0],e);for(var n=1;n<dl.length;n++){var r=dl[n];r.blockedOn===e&&(r.blockedOn=null)}}for(or!==null&&Ya(or,e),sr!==null&&Ya(sr,e),ur!==null&&Ya(ur,e),zi.forEach(t),Fi.forEach(t),n=0;n<nr.length;n++)r=nr[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<nr.length&&(n=nr[0],n.blockedOn===null);)x1(n),n.blockedOn===null&&nr.shift()}var va=Wn.ReactCurrentBatchConfig,so=!0;function x2(e,t,n,r){var a=$e,i=va.transition;va.transition=null;try{$e=1,X0(e,t,n,r)}finally{$e=a,va.transition=i}}function w2(e,t,n,r){var a=$e,i=va.transition;va.transition=null;try{$e=4,X0(e,t,n,r)}finally{$e=a,va.transition=i}}function X0(e,t,n,r){if(so){var a=Ou(e,t,n,r);if(a===null)Ts(e,t,r,uo,n),Rc(e,r);else if(y2(a,e,t,n,r))r.stopPropagation();else if(Rc(e,r),t&4&&-1<g2.indexOf(e)){for(;a!==null;){var i=Xi(a);if(i!==null&&b1(i),i=Ou(e,t,n,r),i===null&&Ts(e,t,r,uo,n),i===a)break;a=i}a!==null&&r.stopPropagation()}else Ts(e,t,r,null,n)}}var uo=null;function Ou(e,t,n,r){if(uo=null,e=K0(r),e=Pr(e),e!==null)if(t=Wr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=s1(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return uo=e,null}function w1(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(s2()){case Q0:return 1;case m1:return 4;case lo:case u2:return 16;case d1:return 536870912;default:return 16}default:return 16}}var ar=null,Y0=null,Ll=null;function $1(){if(Ll)return Ll;var e,t=Y0,n=t.length,r,a="value"in ar?ar.value:ar.textContent,i=a.length;for(e=0;e<n&&t[e]===a[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===a[i-r];r++);return Ll=a.slice(e,1<r?1-r:void 0)}function ql(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function fl(){return!0}function Oc(){return!1}function Mt(e){function t(n,r,a,i,l){this._reactName=n,this._targetInst=a,this.type=r,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(n=e[o],this[o]=n?n(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?fl:Oc,this.isPropagationStopped=Oc,this}return Le(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=fl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=fl)},persist:function(){},isPersistent:fl}),t}var Ra={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},J0=Mt(Ra),Zi=Le({},Ra,{view:0,detail:0}),$2=Mt(Zi),ks,_s,Ja,Bo=Le({},Zi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:eh,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ja&&(Ja&&e.type==="mousemove"?(ks=e.screenX-Ja.screenX,_s=e.screenY-Ja.screenY):_s=ks=0,Ja=e),ks)},movementY:function(e){return"movementY"in e?e.movementY:_s}}),Bc=Mt(Bo),k2=Le({},Bo,{dataTransfer:0}),_2=Mt(k2),S2=Le({},Zi,{relatedTarget:0}),Ss=Mt(S2),D2=Le({},Ra,{animationName:0,elapsedTime:0,pseudoElement:0}),C2=Mt(D2),E2=Le({},Ra,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),z2=Mt(E2),F2=Le({},Ra,{data:0}),Lc=Mt(F2),A2={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},T2={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},P2={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function N2(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=P2[e])?!!t[e]:!1}function eh(){return N2}var M2=Le({},Zi,{key:function(e){if(e.key){var t=A2[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ql(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?T2[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:eh,charCode:function(e){return e.type==="keypress"?ql(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ql(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),R2=Mt(M2),I2=Le({},Bo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),qc=Mt(I2),O2=Le({},Zi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:eh}),B2=Mt(O2),L2=Le({},Ra,{propertyName:0,elapsedTime:0,pseudoElement:0}),q2=Mt(L2),j2=Le({},Bo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),H2=Mt(j2),U2=[9,13,27,32],th=On&&"CompositionEvent"in window,pi=null;On&&"documentMode"in document&&(pi=document.documentMode);var W2=On&&"TextEvent"in window&&!pi,k1=On&&(!th||pi&&8<pi&&11>=pi),jc=" ",Hc=!1;function _1(e,t){switch(e){case"keyup":return U2.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function S1(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var la=!1;function V2(e,t){switch(e){case"compositionend":return S1(t);case"keypress":return t.which!==32?null:(Hc=!0,jc);case"textInput":return e=t.data,e===jc&&Hc?null:e;default:return null}}function K2(e,t){if(la)return e==="compositionend"||!th&&_1(e,t)?(e=$1(),Ll=Y0=ar=null,la=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return k1&&t.locale!=="ko"?null:t.data;default:return null}}var Q2={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Uc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Q2[e.type]:t==="textarea"}function D1(e,t,n,r){r1(r),t=ho(t,"onChange"),0<t.length&&(n=new J0("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var bi=null,Ti=null;function G2(e){I1(e,0)}function Lo(e){var t=ua(e);if(Zf(t))return e}function Z2(e,t){if(e==="change")return t}var C1=!1;if(On){var Ds;if(On){var Cs="oninput"in document;if(!Cs){var Wc=document.createElement("div");Wc.setAttribute("oninput","return;"),Cs=typeof Wc.oninput=="function"}Ds=Cs}else Ds=!1;C1=Ds&&(!document.documentMode||9<document.documentMode)}function Vc(){bi&&(bi.detachEvent("onpropertychange",E1),Ti=bi=null)}function E1(e){if(e.propertyName==="value"&&Lo(Ti)){var t=[];D1(t,Ti,e,K0(e)),o1(G2,t)}}function X2(e,t,n){e==="focusin"?(Vc(),bi=t,Ti=n,bi.attachEvent("onpropertychange",E1)):e==="focusout"&&Vc()}function Y2(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Lo(Ti)}function J2(e,t){if(e==="click")return Lo(t)}function ey(e,t){if(e==="input"||e==="change")return Lo(t)}function ty(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var sn=typeof Object.is=="function"?Object.is:ty;function Pi(e,t){if(sn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var a=n[r];if(!xu.call(t,a)||!sn(e[a],t[a]))return!1}return!0}function Kc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Qc(e,t){var n=Kc(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Kc(n)}}function z1(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?z1(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function F1(){for(var e=window,t=ro();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ro(e.document)}return t}function nh(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function ny(e){var t=F1(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&z1(n.ownerDocument.documentElement,n)){if(r!==null&&nh(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var a=n.textContent.length,i=Math.min(r.start,a);r=r.end===void 0?i:Math.min(r.end,a),!e.extend&&i>r&&(a=r,r=i,i=a),a=Qc(n,i);var l=Qc(n,r);a&&l&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(a.node,a.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var ry=On&&"documentMode"in document&&11>=document.documentMode,oa=null,Bu=null,gi=null,Lu=!1;function Gc(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Lu||oa==null||oa!==ro(r)||(r=oa,"selectionStart"in r&&nh(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),gi&&Pi(gi,r)||(gi=r,r=ho(Bu,"onSelect"),0<r.length&&(t=new J0("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=oa)))}function pl(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var sa={animationend:pl("Animation","AnimationEnd"),animationiteration:pl("Animation","AnimationIteration"),animationstart:pl("Animation","AnimationStart"),transitionend:pl("Transition","TransitionEnd")},Es={},A1={};On&&(A1=document.createElement("div").style,"AnimationEvent"in window||(delete sa.animationend.animation,delete sa.animationiteration.animation,delete sa.animationstart.animation),"TransitionEvent"in window||delete sa.transitionend.transition);function qo(e){if(Es[e])return Es[e];if(!sa[e])return e;var t=sa[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in A1)return Es[e]=t[n];return e}var T1=qo("animationend"),P1=qo("animationiteration"),N1=qo("animationstart"),M1=qo("transitionend"),R1=new Map,Zc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function wr(e,t){R1.set(e,t),Ur(t,[e])}for(var zs=0;zs<Zc.length;zs++){var Fs=Zc[zs],ay=Fs.toLowerCase(),iy=Fs[0].toUpperCase()+Fs.slice(1);wr(ay,"on"+iy)}wr(T1,"onAnimationEnd");wr(P1,"onAnimationIteration");wr(N1,"onAnimationStart");wr("dblclick","onDoubleClick");wr("focusin","onFocus");wr("focusout","onBlur");wr(M1,"onTransitionEnd");Ca("onMouseEnter",["mouseout","mouseover"]);Ca("onMouseLeave",["mouseout","mouseover"]);Ca("onPointerEnter",["pointerout","pointerover"]);Ca("onPointerLeave",["pointerout","pointerover"]);Ur("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ur("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ur("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ur("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ur("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ur("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ci="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ly=new Set("cancel close invalid load scroll toggle".split(" ").concat(ci));function Xc(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,a2(r,t,void 0,e),e.currentTarget=null}function I1(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],a=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var l=r.length-1;0<=l;l--){var o=r[l],s=o.instance,u=o.currentTarget;if(o=o.listener,s!==i&&a.isPropagationStopped())break e;Xc(a,o,u),i=s}else for(l=0;l<r.length;l++){if(o=r[l],s=o.instance,u=o.currentTarget,o=o.listener,s!==i&&a.isPropagationStopped())break e;Xc(a,o,u),i=s}}}if(io)throw e=Mu,io=!1,Mu=null,e}function Fe(e,t){var n=t[Wu];n===void 0&&(n=t[Wu]=new Set);var r=e+"__bubble";n.has(r)||(O1(t,e,2,!1),n.add(r))}function As(e,t,n){var r=0;t&&(r|=4),O1(n,e,r,t)}var bl="_reactListening"+Math.random().toString(36).slice(2);function Ni(e){if(!e[bl]){e[bl]=!0,Wf.forEach(function(n){n!=="selectionchange"&&(ly.has(n)||As(n,!1,e),As(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[bl]||(t[bl]=!0,As("selectionchange",!1,t))}}function O1(e,t,n,r){switch(w1(t)){case 1:var a=x2;break;case 4:a=w2;break;default:a=X0}n=a.bind(null,t,n,e),a=void 0,!Nu||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),r?a!==void 0?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):a!==void 0?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function Ts(e,t,n,r,a){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var o=r.stateNode.containerInfo;if(o===a||o.nodeType===8&&o.parentNode===a)break;if(l===4)for(l=r.return;l!==null;){var s=l.tag;if((s===3||s===4)&&(s=l.stateNode.containerInfo,s===a||s.nodeType===8&&s.parentNode===a))return;l=l.return}for(;o!==null;){if(l=Pr(o),l===null)return;if(s=l.tag,s===5||s===6){r=i=l;continue e}o=o.parentNode}}r=r.return}o1(function(){var u=i,h=K0(n),m=[];e:{var f=R1.get(e);if(f!==void 0){var p=J0,v=e;switch(e){case"keypress":if(ql(n)===0)break e;case"keydown":case"keyup":p=R2;break;case"focusin":v="focus",p=Ss;break;case"focusout":v="blur",p=Ss;break;case"beforeblur":case"afterblur":p=Ss;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Bc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=_2;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=B2;break;case T1:case P1:case N1:p=C2;break;case M1:p=q2;break;case"scroll":p=$2;break;case"wheel":p=H2;break;case"copy":case"cut":case"paste":p=z2;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=qc}var x=(t&4)!==0,S=!x&&e==="scroll",g=x?f!==null?f+"Capture":null:f;x=[];for(var y=u,$;y!==null;){$=y;var F=$.stateNode;if($.tag===5&&F!==null&&($=F,g!==null&&(F=Ei(y,g),F!=null&&x.push(Mi(y,F,$)))),S)break;y=y.return}0<x.length&&(f=new p(f,v,null,n,h),m.push({event:f,listeners:x}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",p=e==="mouseout"||e==="pointerout",f&&n!==Tu&&(v=n.relatedTarget||n.fromElement)&&(Pr(v)||v[Bn]))break e;if((p||f)&&(f=h.window===h?h:(f=h.ownerDocument)?f.defaultView||f.parentWindow:window,p?(v=n.relatedTarget||n.toElement,p=u,v=v?Pr(v):null,v!==null&&(S=Wr(v),v!==S||v.tag!==5&&v.tag!==6)&&(v=null)):(p=null,v=u),p!==v)){if(x=Bc,F="onMouseLeave",g="onMouseEnter",y="mouse",(e==="pointerout"||e==="pointerover")&&(x=qc,F="onPointerLeave",g="onPointerEnter",y="pointer"),S=p==null?f:ua(p),$=v==null?f:ua(v),f=new x(F,y+"leave",p,n,h),f.target=S,f.relatedTarget=$,F=null,Pr(h)===u&&(x=new x(g,y+"enter",v,n,h),x.target=$,x.relatedTarget=S,F=x),S=F,p&&v)t:{for(x=p,g=v,y=0,$=x;$;$=ea($))y++;for($=0,F=g;F;F=ea(F))$++;for(;0<y-$;)x=ea(x),y--;for(;0<$-y;)g=ea(g),$--;for(;y--;){if(x===g||g!==null&&x===g.alternate)break t;x=ea(x),g=ea(g)}x=null}else x=null;p!==null&&Yc(m,f,p,x,!1),v!==null&&S!==null&&Yc(m,S,v,x,!0)}}e:{if(f=u?ua(u):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var P=Z2;else if(Uc(f))if(C1)P=ey;else{P=Y2;var E=X2}else(p=f.nodeName)&&p.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(P=J2);if(P&&(P=P(e,u))){D1(m,P,n,h);break e}E&&E(e,f,u),e==="focusout"&&(E=f._wrapperState)&&E.controlled&&f.type==="number"&&Cu(f,"number",f.value)}switch(E=u?ua(u):window,e){case"focusin":(Uc(E)||E.contentEditable==="true")&&(oa=E,Bu=u,gi=null);break;case"focusout":gi=Bu=oa=null;break;case"mousedown":Lu=!0;break;case"contextmenu":case"mouseup":case"dragend":Lu=!1,Gc(m,n,h);break;case"selectionchange":if(ry)break;case"keydown":case"keyup":Gc(m,n,h)}var M;if(th)e:{switch(e){case"compositionstart":var I="onCompositionStart";break e;case"compositionend":I="onCompositionEnd";break e;case"compositionupdate":I="onCompositionUpdate";break e}I=void 0}else la?_1(e,n)&&(I="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(I="onCompositionStart");I&&(k1&&n.locale!=="ko"&&(la||I!=="onCompositionStart"?I==="onCompositionEnd"&&la&&(M=$1()):(ar=h,Y0="value"in ar?ar.value:ar.textContent,la=!0)),E=ho(u,I),0<E.length&&(I=new Lc(I,e,null,n,h),m.push({event:I,listeners:E}),M?I.data=M:(M=S1(n),M!==null&&(I.data=M)))),(M=W2?V2(e,n):K2(e,n))&&(u=ho(u,"onBeforeInput"),0<u.length&&(h=new Lc("onBeforeInput","beforeinput",null,n,h),m.push({event:h,listeners:u}),h.data=M))}I1(m,t)})}function Mi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ho(e,t){for(var n=t+"Capture",r=[];e!==null;){var a=e,i=a.stateNode;a.tag===5&&i!==null&&(a=i,i=Ei(e,n),i!=null&&r.unshift(Mi(e,i,a)),i=Ei(e,t),i!=null&&r.push(Mi(e,i,a))),e=e.return}return r}function ea(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Yc(e,t,n,r,a){for(var i=t._reactName,l=[];n!==null&&n!==r;){var o=n,s=o.alternate,u=o.stateNode;if(s!==null&&s===r)break;o.tag===5&&u!==null&&(o=u,a?(s=Ei(n,i),s!=null&&l.unshift(Mi(n,s,o))):a||(s=Ei(n,i),s!=null&&l.push(Mi(n,s,o)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var oy=/\r\n?/g,sy=/\u0000|\uFFFD/g;function Jc(e){return(typeof e=="string"?e:""+e).replace(oy,`
`).replace(sy,"")}function gl(e,t,n){if(t=Jc(t),Jc(e)!==t&&n)throw Error(j(425))}function co(){}var qu=null,ju=null;function Hu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Uu=typeof setTimeout=="function"?setTimeout:void 0,uy=typeof clearTimeout=="function"?clearTimeout:void 0,em=typeof Promise=="function"?Promise:void 0,hy=typeof queueMicrotask=="function"?queueMicrotask:typeof em<"u"?function(e){return em.resolve(null).then(e).catch(cy)}:Uu;function cy(e){setTimeout(function(){throw e})}function Ps(e,t){var n=t,r=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(r===0){e.removeChild(a),Ai(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=a}while(n);Ai(t)}function hr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function tm(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Ia=Math.random().toString(36).slice(2),fn="__reactFiber$"+Ia,Ri="__reactProps$"+Ia,Bn="__reactContainer$"+Ia,Wu="__reactEvents$"+Ia,my="__reactListeners$"+Ia,dy="__reactHandles$"+Ia;function Pr(e){var t=e[fn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Bn]||n[fn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=tm(e);e!==null;){if(n=e[fn])return n;e=tm(e)}return t}e=n,n=e.parentNode}return null}function Xi(e){return e=e[fn]||e[Bn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function ua(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(j(33))}function jo(e){return e[Ri]||null}var Vu=[],ha=-1;function $r(e){return{current:e}}function Ae(e){0>ha||(e.current=Vu[ha],Vu[ha]=null,ha--)}function Ce(e,t){ha++,Vu[ha]=e.current,e.current=t}var br={},ot=$r(br),wt=$r(!1),Br=br;function Ea(e,t){var n=e.type.contextTypes;if(!n)return br;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var a={},i;for(i in n)a[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function $t(e){return e=e.childContextTypes,e!=null}function mo(){Ae(wt),Ae(ot)}function nm(e,t,n){if(ot.current!==br)throw Error(j(168));Ce(ot,t),Ce(wt,n)}function B1(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var a in r)if(!(a in t))throw Error(j(108,X4(e)||"Unknown",a));return Le({},n,r)}function fo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||br,Br=ot.current,Ce(ot,e),Ce(wt,wt.current),!0}function rm(e,t,n){var r=e.stateNode;if(!r)throw Error(j(169));n?(e=B1(e,t,Br),r.__reactInternalMemoizedMergedChildContext=e,Ae(wt),Ae(ot),Ce(ot,e)):Ae(wt),Ce(wt,n)}var Fn=null,Ho=!1,Ns=!1;function L1(e){Fn===null?Fn=[e]:Fn.push(e)}function fy(e){Ho=!0,L1(e)}function kr(){if(!Ns&&Fn!==null){Ns=!0;var e=0,t=$e;try{var n=Fn;for($e=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Fn=null,Ho=!1}catch(a){throw Fn!==null&&(Fn=Fn.slice(e+1)),c1(Q0,kr),a}finally{$e=t,Ns=!1}}return null}var ca=[],ma=0,po=null,bo=0,It=[],Ot=0,Lr=null,Tn=1,Pn="";function Fr(e,t){ca[ma++]=bo,ca[ma++]=po,po=e,bo=t}function q1(e,t,n){It[Ot++]=Tn,It[Ot++]=Pn,It[Ot++]=Lr,Lr=e;var r=Tn;e=Pn;var a=32-an(r)-1;r&=~(1<<a),n+=1;var i=32-an(t)+a;if(30<i){var l=a-a%5;i=(r&(1<<l)-1).toString(32),r>>=l,a-=l,Tn=1<<32-an(t)+a|n<<a|r,Pn=i+e}else Tn=1<<i|n<<a|r,Pn=e}function rh(e){e.return!==null&&(Fr(e,1),q1(e,1,0))}function ah(e){for(;e===po;)po=ca[--ma],ca[ma]=null,bo=ca[--ma],ca[ma]=null;for(;e===Lr;)Lr=It[--Ot],It[Ot]=null,Pn=It[--Ot],It[Ot]=null,Tn=It[--Ot],It[Ot]=null}var Tt=null,Ft=null,Te=!1,rn=null;function j1(e,t){var n=qt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function am(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Tt=e,Ft=hr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Tt=e,Ft=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Lr!==null?{id:Tn,overflow:Pn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=qt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Tt=e,Ft=null,!0):!1;default:return!1}}function Ku(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Qu(e){if(Te){var t=Ft;if(t){var n=t;if(!am(e,t)){if(Ku(e))throw Error(j(418));t=hr(n.nextSibling);var r=Tt;t&&am(e,t)?j1(r,n):(e.flags=e.flags&-4097|2,Te=!1,Tt=e)}}else{if(Ku(e))throw Error(j(418));e.flags=e.flags&-4097|2,Te=!1,Tt=e}}}function im(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Tt=e}function yl(e){if(e!==Tt)return!1;if(!Te)return im(e),Te=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Hu(e.type,e.memoizedProps)),t&&(t=Ft)){if(Ku(e))throw H1(),Error(j(418));for(;t;)j1(e,t),t=hr(t.nextSibling)}if(im(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(j(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ft=hr(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ft=null}}else Ft=Tt?hr(e.stateNode.nextSibling):null;return!0}function H1(){for(var e=Ft;e;)e=hr(e.nextSibling)}function za(){Ft=Tt=null,Te=!1}function ih(e){rn===null?rn=[e]:rn.push(e)}var py=Wn.ReactCurrentBatchConfig;function ei(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(j(309));var r=n.stateNode}if(!r)throw Error(j(147,e));var a=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(l){var o=a.refs;l===null?delete o[i]:o[i]=l},t._stringRef=i,t)}if(typeof e!="string")throw Error(j(284));if(!n._owner)throw Error(j(290,e))}return e}function vl(e,t){throw e=Object.prototype.toString.call(t),Error(j(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function lm(e){var t=e._init;return t(e._payload)}function U1(e){function t(g,y){if(e){var $=g.deletions;$===null?(g.deletions=[y],g.flags|=16):$.push(y)}}function n(g,y){if(!e)return null;for(;y!==null;)t(g,y),y=y.sibling;return null}function r(g,y){for(g=new Map;y!==null;)y.key!==null?g.set(y.key,y):g.set(y.index,y),y=y.sibling;return g}function a(g,y){return g=fr(g,y),g.index=0,g.sibling=null,g}function i(g,y,$){return g.index=$,e?($=g.alternate,$!==null?($=$.index,$<y?(g.flags|=2,y):$):(g.flags|=2,y)):(g.flags|=1048576,y)}function l(g){return e&&g.alternate===null&&(g.flags|=2),g}function o(g,y,$,F){return y===null||y.tag!==6?(y=qs($,g.mode,F),y.return=g,y):(y=a(y,$),y.return=g,y)}function s(g,y,$,F){var P=$.type;return P===ia?h(g,y,$.props.children,F,$.key):y!==null&&(y.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===er&&lm(P)===y.type)?(F=a(y,$.props),F.ref=ei(g,y,$),F.return=g,F):(F=Ql($.type,$.key,$.props,null,g.mode,F),F.ref=ei(g,y,$),F.return=g,F)}function u(g,y,$,F){return y===null||y.tag!==4||y.stateNode.containerInfo!==$.containerInfo||y.stateNode.implementation!==$.implementation?(y=js($,g.mode,F),y.return=g,y):(y=a(y,$.children||[]),y.return=g,y)}function h(g,y,$,F,P){return y===null||y.tag!==7?(y=Or($,g.mode,F,P),y.return=g,y):(y=a(y,$),y.return=g,y)}function m(g,y,$){if(typeof y=="string"&&y!==""||typeof y=="number")return y=qs(""+y,g.mode,$),y.return=g,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case sl:return $=Ql(y.type,y.key,y.props,null,g.mode,$),$.ref=ei(g,null,y),$.return=g,$;case aa:return y=js(y,g.mode,$),y.return=g,y;case er:var F=y._init;return m(g,F(y._payload),$)}if(ui(y)||Ga(y))return y=Or(y,g.mode,$,null),y.return=g,y;vl(g,y)}return null}function f(g,y,$,F){var P=y!==null?y.key:null;if(typeof $=="string"&&$!==""||typeof $=="number")return P!==null?null:o(g,y,""+$,F);if(typeof $=="object"&&$!==null){switch($.$$typeof){case sl:return $.key===P?s(g,y,$,F):null;case aa:return $.key===P?u(g,y,$,F):null;case er:return P=$._init,f(g,y,P($._payload),F)}if(ui($)||Ga($))return P!==null?null:h(g,y,$,F,null);vl(g,$)}return null}function p(g,y,$,F,P){if(typeof F=="string"&&F!==""||typeof F=="number")return g=g.get($)||null,o(y,g,""+F,P);if(typeof F=="object"&&F!==null){switch(F.$$typeof){case sl:return g=g.get(F.key===null?$:F.key)||null,s(y,g,F,P);case aa:return g=g.get(F.key===null?$:F.key)||null,u(y,g,F,P);case er:var E=F._init;return p(g,y,$,E(F._payload),P)}if(ui(F)||Ga(F))return g=g.get($)||null,h(y,g,F,P,null);vl(y,F)}return null}function v(g,y,$,F){for(var P=null,E=null,M=y,I=y=0,O=null;M!==null&&I<$.length;I++){M.index>I?(O=M,M=null):O=M.sibling;var Q=f(g,M,$[I],F);if(Q===null){M===null&&(M=O);break}e&&M&&Q.alternate===null&&t(g,M),y=i(Q,y,I),E===null?P=Q:E.sibling=Q,E=Q,M=O}if(I===$.length)return n(g,M),Te&&Fr(g,I),P;if(M===null){for(;I<$.length;I++)M=m(g,$[I],F),M!==null&&(y=i(M,y,I),E===null?P=M:E.sibling=M,E=M);return Te&&Fr(g,I),P}for(M=r(g,M);I<$.length;I++)O=p(M,g,I,$[I],F),O!==null&&(e&&O.alternate!==null&&M.delete(O.key===null?I:O.key),y=i(O,y,I),E===null?P=O:E.sibling=O,E=O);return e&&M.forEach(function(V){return t(g,V)}),Te&&Fr(g,I),P}function x(g,y,$,F){var P=Ga($);if(typeof P!="function")throw Error(j(150));if($=P.call($),$==null)throw Error(j(151));for(var E=P=null,M=y,I=y=0,O=null,Q=$.next();M!==null&&!Q.done;I++,Q=$.next()){M.index>I?(O=M,M=null):O=M.sibling;var V=f(g,M,Q.value,F);if(V===null){M===null&&(M=O);break}e&&M&&V.alternate===null&&t(g,M),y=i(V,y,I),E===null?P=V:E.sibling=V,E=V,M=O}if(Q.done)return n(g,M),Te&&Fr(g,I),P;if(M===null){for(;!Q.done;I++,Q=$.next())Q=m(g,Q.value,F),Q!==null&&(y=i(Q,y,I),E===null?P=Q:E.sibling=Q,E=Q);return Te&&Fr(g,I),P}for(M=r(g,M);!Q.done;I++,Q=$.next())Q=p(M,g,I,Q.value,F),Q!==null&&(e&&Q.alternate!==null&&M.delete(Q.key===null?I:Q.key),y=i(Q,y,I),E===null?P=Q:E.sibling=Q,E=Q);return e&&M.forEach(function(L){return t(g,L)}),Te&&Fr(g,I),P}function S(g,y,$,F){if(typeof $=="object"&&$!==null&&$.type===ia&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case sl:e:{for(var P=$.key,E=y;E!==null;){if(E.key===P){if(P=$.type,P===ia){if(E.tag===7){n(g,E.sibling),y=a(E,$.props.children),y.return=g,g=y;break e}}else if(E.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===er&&lm(P)===E.type){n(g,E.sibling),y=a(E,$.props),y.ref=ei(g,E,$),y.return=g,g=y;break e}n(g,E);break}else t(g,E);E=E.sibling}$.type===ia?(y=Or($.props.children,g.mode,F,$.key),y.return=g,g=y):(F=Ql($.type,$.key,$.props,null,g.mode,F),F.ref=ei(g,y,$),F.return=g,g=F)}return l(g);case aa:e:{for(E=$.key;y!==null;){if(y.key===E)if(y.tag===4&&y.stateNode.containerInfo===$.containerInfo&&y.stateNode.implementation===$.implementation){n(g,y.sibling),y=a(y,$.children||[]),y.return=g,g=y;break e}else{n(g,y);break}else t(g,y);y=y.sibling}y=js($,g.mode,F),y.return=g,g=y}return l(g);case er:return E=$._init,S(g,y,E($._payload),F)}if(ui($))return v(g,y,$,F);if(Ga($))return x(g,y,$,F);vl(g,$)}return typeof $=="string"&&$!==""||typeof $=="number"?($=""+$,y!==null&&y.tag===6?(n(g,y.sibling),y=a(y,$),y.return=g,g=y):(n(g,y),y=qs($,g.mode,F),y.return=g,g=y),l(g)):n(g,y)}return S}var Fa=U1(!0),W1=U1(!1),go=$r(null),yo=null,da=null,lh=null;function oh(){lh=da=yo=null}function sh(e){var t=go.current;Ae(go),e._currentValue=t}function Gu(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function xa(e,t){yo=e,lh=da=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(xt=!0),e.firstContext=null)}function Wt(e){var t=e._currentValue;if(lh!==e)if(e={context:e,memoizedValue:t,next:null},da===null){if(yo===null)throw Error(j(308));da=e,yo.dependencies={lanes:0,firstContext:e}}else da=da.next=e;return t}var Nr=null;function uh(e){Nr===null?Nr=[e]:Nr.push(e)}function V1(e,t,n,r){var a=t.interleaved;return a===null?(n.next=n,uh(t)):(n.next=a.next,a.next=n),t.interleaved=n,Ln(e,r)}function Ln(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var tr=!1;function hh(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function K1(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Nn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function cr(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,ge&2){var a=r.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),r.pending=t,Ln(e,n)}return a=r.interleaved,a===null?(t.next=t,uh(r)):(t.next=a.next,a.next=t),r.interleaved=t,Ln(e,n)}function jl(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,G0(e,n)}}function om(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var a=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?a=i=l:i=i.next=l,n=n.next}while(n!==null);i===null?a=i=t:i=i.next=t}else a=i=t;n={baseState:r.baseState,firstBaseUpdate:a,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function vo(e,t,n,r){var a=e.updateQueue;tr=!1;var i=a.firstBaseUpdate,l=a.lastBaseUpdate,o=a.shared.pending;if(o!==null){a.shared.pending=null;var s=o,u=s.next;s.next=null,l===null?i=u:l.next=u,l=s;var h=e.alternate;h!==null&&(h=h.updateQueue,o=h.lastBaseUpdate,o!==l&&(o===null?h.firstBaseUpdate=u:o.next=u,h.lastBaseUpdate=s))}if(i!==null){var m=a.baseState;l=0,h=u=s=null,o=i;do{var f=o.lane,p=o.eventTime;if((r&f)===f){h!==null&&(h=h.next={eventTime:p,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var v=e,x=o;switch(f=t,p=n,x.tag){case 1:if(v=x.payload,typeof v=="function"){m=v.call(p,m,f);break e}m=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=x.payload,f=typeof v=="function"?v.call(p,m,f):v,f==null)break e;m=Le({},m,f);break e;case 2:tr=!0}}o.callback!==null&&o.lane!==0&&(e.flags|=64,f=a.effects,f===null?a.effects=[o]:f.push(o))}else p={eventTime:p,lane:f,tag:o.tag,payload:o.payload,callback:o.callback,next:null},h===null?(u=h=p,s=m):h=h.next=p,l|=f;if(o=o.next,o===null){if(o=a.shared.pending,o===null)break;f=o,o=f.next,f.next=null,a.lastBaseUpdate=f,a.shared.pending=null}}while(!0);if(h===null&&(s=m),a.baseState=s,a.firstBaseUpdate=u,a.lastBaseUpdate=h,t=a.shared.interleaved,t!==null){a=t;do l|=a.lane,a=a.next;while(a!==t)}else i===null&&(a.shared.lanes=0);jr|=l,e.lanes=l,e.memoizedState=m}}function sm(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],a=r.callback;if(a!==null){if(r.callback=null,r=n,typeof a!="function")throw Error(j(191,a));a.call(r)}}}var Yi={},yn=$r(Yi),Ii=$r(Yi),Oi=$r(Yi);function Mr(e){if(e===Yi)throw Error(j(174));return e}function ch(e,t){switch(Ce(Oi,t),Ce(Ii,e),Ce(yn,Yi),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:zu(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=zu(t,e)}Ae(yn),Ce(yn,t)}function Aa(){Ae(yn),Ae(Ii),Ae(Oi)}function Q1(e){Mr(Oi.current);var t=Mr(yn.current),n=zu(t,e.type);t!==n&&(Ce(Ii,e),Ce(yn,n))}function mh(e){Ii.current===e&&(Ae(yn),Ae(Ii))}var Re=$r(0);function xo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ms=[];function dh(){for(var e=0;e<Ms.length;e++)Ms[e]._workInProgressVersionPrimary=null;Ms.length=0}var Hl=Wn.ReactCurrentDispatcher,Rs=Wn.ReactCurrentBatchConfig,qr=0,Oe=null,Qe=null,Ye=null,wo=!1,yi=!1,Bi=0,by=0;function at(){throw Error(j(321))}function fh(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!sn(e[n],t[n]))return!1;return!0}function ph(e,t,n,r,a,i){if(qr=i,Oe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Hl.current=e===null||e.memoizedState===null?xy:wy,e=n(r,a),yi){i=0;do{if(yi=!1,Bi=0,25<=i)throw Error(j(301));i+=1,Ye=Qe=null,t.updateQueue=null,Hl.current=$y,e=n(r,a)}while(yi)}if(Hl.current=$o,t=Qe!==null&&Qe.next!==null,qr=0,Ye=Qe=Oe=null,wo=!1,t)throw Error(j(300));return e}function bh(){var e=Bi!==0;return Bi=0,e}function cn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ye===null?Oe.memoizedState=Ye=e:Ye=Ye.next=e,Ye}function Vt(){if(Qe===null){var e=Oe.alternate;e=e!==null?e.memoizedState:null}else e=Qe.next;var t=Ye===null?Oe.memoizedState:Ye.next;if(t!==null)Ye=t,Qe=e;else{if(e===null)throw Error(j(310));Qe=e,e={memoizedState:Qe.memoizedState,baseState:Qe.baseState,baseQueue:Qe.baseQueue,queue:Qe.queue,next:null},Ye===null?Oe.memoizedState=Ye=e:Ye=Ye.next=e}return Ye}function Li(e,t){return typeof t=="function"?t(e):t}function Is(e){var t=Vt(),n=t.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=e;var r=Qe,a=r.baseQueue,i=n.pending;if(i!==null){if(a!==null){var l=a.next;a.next=i.next,i.next=l}r.baseQueue=a=i,n.pending=null}if(a!==null){i=a.next,r=r.baseState;var o=l=null,s=null,u=i;do{var h=u.lane;if((qr&h)===h)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var m={lane:h,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(o=s=m,l=r):s=s.next=m,Oe.lanes|=h,jr|=h}u=u.next}while(u!==null&&u!==i);s===null?l=r:s.next=o,sn(r,t.memoizedState)||(xt=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){a=e;do i=a.lane,Oe.lanes|=i,jr|=i,a=a.next;while(a!==e)}else a===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Os(e){var t=Vt(),n=t.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,i=t.memoizedState;if(a!==null){n.pending=null;var l=a=a.next;do i=e(i,l.action),l=l.next;while(l!==a);sn(i,t.memoizedState)||(xt=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function G1(){}function Z1(e,t){var n=Oe,r=Vt(),a=t(),i=!sn(r.memoizedState,a);if(i&&(r.memoizedState=a,xt=!0),r=r.queue,gh(J1.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||Ye!==null&&Ye.memoizedState.tag&1){if(n.flags|=2048,qi(9,Y1.bind(null,n,r,a,t),void 0,null),Je===null)throw Error(j(349));qr&30||X1(n,t,a)}return a}function X1(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Oe.updateQueue,t===null?(t={lastEffect:null,stores:null},Oe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Y1(e,t,n,r){t.value=n,t.getSnapshot=r,ep(t)&&tp(e)}function J1(e,t,n){return n(function(){ep(t)&&tp(e)})}function ep(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!sn(e,n)}catch{return!0}}function tp(e){var t=Ln(e,1);t!==null&&ln(t,e,1,-1)}function um(e){var t=cn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Li,lastRenderedState:e},t.queue=e,e=e.dispatch=vy.bind(null,Oe,e),[t.memoizedState,e]}function qi(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Oe.updateQueue,t===null?(t={lastEffect:null,stores:null},Oe.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function np(){return Vt().memoizedState}function Ul(e,t,n,r){var a=cn();Oe.flags|=e,a.memoizedState=qi(1|t,n,void 0,r===void 0?null:r)}function Uo(e,t,n,r){var a=Vt();r=r===void 0?null:r;var i=void 0;if(Qe!==null){var l=Qe.memoizedState;if(i=l.destroy,r!==null&&fh(r,l.deps)){a.memoizedState=qi(t,n,i,r);return}}Oe.flags|=e,a.memoizedState=qi(1|t,n,i,r)}function hm(e,t){return Ul(8390656,8,e,t)}function gh(e,t){return Uo(2048,8,e,t)}function rp(e,t){return Uo(4,2,e,t)}function ap(e,t){return Uo(4,4,e,t)}function ip(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function lp(e,t,n){return n=n!=null?n.concat([e]):null,Uo(4,4,ip.bind(null,t,e),n)}function yh(){}function op(e,t){var n=Vt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&fh(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function sp(e,t){var n=Vt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&fh(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function up(e,t,n){return qr&21?(sn(n,t)||(n=f1(),Oe.lanes|=n,jr|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,xt=!0),e.memoizedState=n)}function gy(e,t){var n=$e;$e=n!==0&&4>n?n:4,e(!0);var r=Rs.transition;Rs.transition={};try{e(!1),t()}finally{$e=n,Rs.transition=r}}function hp(){return Vt().memoizedState}function yy(e,t,n){var r=dr(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},cp(e))mp(t,n);else if(n=V1(e,t,n,r),n!==null){var a=dt();ln(n,e,r,a),dp(n,t,r)}}function vy(e,t,n){var r=dr(e),a={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(cp(e))mp(t,a);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var l=t.lastRenderedState,o=i(l,n);if(a.hasEagerState=!0,a.eagerState=o,sn(o,l)){var s=t.interleaved;s===null?(a.next=a,uh(t)):(a.next=s.next,s.next=a),t.interleaved=a;return}}catch{}finally{}n=V1(e,t,a,r),n!==null&&(a=dt(),ln(n,e,r,a),dp(n,t,r))}}function cp(e){var t=e.alternate;return e===Oe||t!==null&&t===Oe}function mp(e,t){yi=wo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function dp(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,G0(e,n)}}var $o={readContext:Wt,useCallback:at,useContext:at,useEffect:at,useImperativeHandle:at,useInsertionEffect:at,useLayoutEffect:at,useMemo:at,useReducer:at,useRef:at,useState:at,useDebugValue:at,useDeferredValue:at,useTransition:at,useMutableSource:at,useSyncExternalStore:at,useId:at,unstable_isNewReconciler:!1},xy={readContext:Wt,useCallback:function(e,t){return cn().memoizedState=[e,t===void 0?null:t],e},useContext:Wt,useEffect:hm,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ul(4194308,4,ip.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ul(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ul(4,2,e,t)},useMemo:function(e,t){var n=cn();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=cn();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=yy.bind(null,Oe,e),[r.memoizedState,e]},useRef:function(e){var t=cn();return e={current:e},t.memoizedState=e},useState:um,useDebugValue:yh,useDeferredValue:function(e){return cn().memoizedState=e},useTransition:function(){var e=um(!1),t=e[0];return e=gy.bind(null,e[1]),cn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Oe,a=cn();if(Te){if(n===void 0)throw Error(j(407));n=n()}else{if(n=t(),Je===null)throw Error(j(349));qr&30||X1(r,t,n)}a.memoizedState=n;var i={value:n,getSnapshot:t};return a.queue=i,hm(J1.bind(null,r,i,e),[e]),r.flags|=2048,qi(9,Y1.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=cn(),t=Je.identifierPrefix;if(Te){var n=Pn,r=Tn;n=(r&~(1<<32-an(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Bi++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=by++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},wy={readContext:Wt,useCallback:op,useContext:Wt,useEffect:gh,useImperativeHandle:lp,useInsertionEffect:rp,useLayoutEffect:ap,useMemo:sp,useReducer:Is,useRef:np,useState:function(){return Is(Li)},useDebugValue:yh,useDeferredValue:function(e){var t=Vt();return up(t,Qe.memoizedState,e)},useTransition:function(){var e=Is(Li)[0],t=Vt().memoizedState;return[e,t]},useMutableSource:G1,useSyncExternalStore:Z1,useId:hp,unstable_isNewReconciler:!1},$y={readContext:Wt,useCallback:op,useContext:Wt,useEffect:gh,useImperativeHandle:lp,useInsertionEffect:rp,useLayoutEffect:ap,useMemo:sp,useReducer:Os,useRef:np,useState:function(){return Os(Li)},useDebugValue:yh,useDeferredValue:function(e){var t=Vt();return Qe===null?t.memoizedState=e:up(t,Qe.memoizedState,e)},useTransition:function(){var e=Os(Li)[0],t=Vt().memoizedState;return[e,t]},useMutableSource:G1,useSyncExternalStore:Z1,useId:hp,unstable_isNewReconciler:!1};function en(e,t){if(e&&e.defaultProps){t=Le({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Zu(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Le({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Wo={isMounted:function(e){return(e=e._reactInternals)?Wr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=dt(),a=dr(e),i=Nn(r,a);i.payload=t,n!=null&&(i.callback=n),t=cr(e,i,a),t!==null&&(ln(t,e,a,r),jl(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=dt(),a=dr(e),i=Nn(r,a);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=cr(e,i,a),t!==null&&(ln(t,e,a,r),jl(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=dt(),r=dr(e),a=Nn(n,r);a.tag=2,t!=null&&(a.callback=t),t=cr(e,a,r),t!==null&&(ln(t,e,r,n),jl(t,e,r))}};function cm(e,t,n,r,a,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,l):t.prototype&&t.prototype.isPureReactComponent?!Pi(n,r)||!Pi(a,i):!0}function fp(e,t,n){var r=!1,a=br,i=t.contextType;return typeof i=="object"&&i!==null?i=Wt(i):(a=$t(t)?Br:ot.current,r=t.contextTypes,i=(r=r!=null)?Ea(e,a):br),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Wo,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=i),t}function mm(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Wo.enqueueReplaceState(t,t.state,null)}function Xu(e,t,n,r){var a=e.stateNode;a.props=n,a.state=e.memoizedState,a.refs={},hh(e);var i=t.contextType;typeof i=="object"&&i!==null?a.context=Wt(i):(i=$t(t)?Br:ot.current,a.context=Ea(e,i)),a.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Zu(e,t,i,n),a.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(t=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),t!==a.state&&Wo.enqueueReplaceState(a,a.state,null),vo(e,n,a,r),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function Ta(e,t){try{var n="",r=t;do n+=Z4(r),r=r.return;while(r);var a=n}catch(i){a=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:a,digest:null}}function Bs(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Yu(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var ky=typeof WeakMap=="function"?WeakMap:Map;function pp(e,t,n){n=Nn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){_o||(_o=!0,s0=r),Yu(e,t)},n}function bp(e,t,n){n=Nn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var a=t.value;n.payload=function(){return r(a)},n.callback=function(){Yu(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Yu(e,t),typeof r!="function"&&(mr===null?mr=new Set([this]):mr.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function dm(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new ky;var a=new Set;r.set(t,a)}else a=r.get(t),a===void 0&&(a=new Set,r.set(t,a));a.has(n)||(a.add(n),e=Iy.bind(null,e,t,n),t.then(e,e))}function fm(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function pm(e,t,n,r,a){return e.mode&1?(e.flags|=65536,e.lanes=a,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Nn(-1,1),t.tag=2,cr(n,t,1))),n.lanes|=1),e)}var _y=Wn.ReactCurrentOwner,xt=!1;function ct(e,t,n,r){t.child=e===null?W1(t,null,n,r):Fa(t,e.child,n,r)}function bm(e,t,n,r,a){n=n.render;var i=t.ref;return xa(t,a),r=ph(e,t,n,r,i,a),n=bh(),e!==null&&!xt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,qn(e,t,a)):(Te&&n&&rh(t),t.flags|=1,ct(e,t,r,a),t.child)}function gm(e,t,n,r,a){if(e===null){var i=n.type;return typeof i=="function"&&!Dh(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,gp(e,t,i,r,a)):(e=Ql(n.type,null,r,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&a)){var l=i.memoizedProps;if(n=n.compare,n=n!==null?n:Pi,n(l,r)&&e.ref===t.ref)return qn(e,t,a)}return t.flags|=1,e=fr(i,r),e.ref=t.ref,e.return=t,t.child=e}function gp(e,t,n,r,a){if(e!==null){var i=e.memoizedProps;if(Pi(i,r)&&e.ref===t.ref)if(xt=!1,t.pendingProps=r=i,(e.lanes&a)!==0)e.flags&131072&&(xt=!0);else return t.lanes=e.lanes,qn(e,t,a)}return Ju(e,t,n,r,a)}function yp(e,t,n){var r=t.pendingProps,a=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ce(pa,Et),Et|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Ce(pa,Et),Et|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,Ce(pa,Et),Et|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,Ce(pa,Et),Et|=r;return ct(e,t,a,n),t.child}function vp(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ju(e,t,n,r,a){var i=$t(n)?Br:ot.current;return i=Ea(t,i),xa(t,a),n=ph(e,t,n,r,i,a),r=bh(),e!==null&&!xt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,qn(e,t,a)):(Te&&r&&rh(t),t.flags|=1,ct(e,t,n,a),t.child)}function ym(e,t,n,r,a){if($t(n)){var i=!0;fo(t)}else i=!1;if(xa(t,a),t.stateNode===null)Wl(e,t),fp(t,n,r),Xu(t,n,r,a),r=!0;else if(e===null){var l=t.stateNode,o=t.memoizedProps;l.props=o;var s=l.context,u=n.contextType;typeof u=="object"&&u!==null?u=Wt(u):(u=$t(n)?Br:ot.current,u=Ea(t,u));var h=n.getDerivedStateFromProps,m=typeof h=="function"||typeof l.getSnapshotBeforeUpdate=="function";m||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(o!==r||s!==u)&&mm(t,l,r,u),tr=!1;var f=t.memoizedState;l.state=f,vo(t,r,l,a),s=t.memoizedState,o!==r||f!==s||wt.current||tr?(typeof h=="function"&&(Zu(t,n,h,r),s=t.memoizedState),(o=tr||cm(t,n,o,r,f,s,u))?(m||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),l.props=r,l.state=s,l.context=u,r=o):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,K1(e,t),o=t.memoizedProps,u=t.type===t.elementType?o:en(t.type,o),l.props=u,m=t.pendingProps,f=l.context,s=n.contextType,typeof s=="object"&&s!==null?s=Wt(s):(s=$t(n)?Br:ot.current,s=Ea(t,s));var p=n.getDerivedStateFromProps;(h=typeof p=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(o!==m||f!==s)&&mm(t,l,r,s),tr=!1,f=t.memoizedState,l.state=f,vo(t,r,l,a);var v=t.memoizedState;o!==m||f!==v||wt.current||tr?(typeof p=="function"&&(Zu(t,n,p,r),v=t.memoizedState),(u=tr||cm(t,n,u,r,f,v,s)||!1)?(h||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,v,s),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,v,s)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=v),l.props=r,l.state=v,l.context=s,r=u):(typeof l.componentDidUpdate!="function"||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return e0(e,t,n,r,i,a)}function e0(e,t,n,r,a,i){vp(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return a&&rm(t,n,!1),qn(e,t,i);r=t.stateNode,_y.current=t;var o=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=Fa(t,e.child,null,i),t.child=Fa(t,null,o,i)):ct(e,t,o,i),t.memoizedState=r.state,a&&rm(t,n,!0),t.child}function xp(e){var t=e.stateNode;t.pendingContext?nm(e,t.pendingContext,t.pendingContext!==t.context):t.context&&nm(e,t.context,!1),ch(e,t.containerInfo)}function vm(e,t,n,r,a){return za(),ih(a),t.flags|=256,ct(e,t,n,r),t.child}var t0={dehydrated:null,treeContext:null,retryLane:0};function n0(e){return{baseLanes:e,cachePool:null,transitions:null}}function wp(e,t,n){var r=t.pendingProps,a=Re.current,i=!1,l=(t.flags&128)!==0,o;if((o=l)||(o=e!==null&&e.memoizedState===null?!1:(a&2)!==0),o?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),Ce(Re,a&1),e===null)return Qu(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,i?(r=t.mode,i=t.child,l={mode:"hidden",children:l},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=l):i=Qo(l,r,0,null),e=Or(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=n0(n),t.memoizedState=t0,e):vh(t,l));if(a=e.memoizedState,a!==null&&(o=a.dehydrated,o!==null))return Sy(e,t,l,r,o,a,n);if(i){i=r.fallback,l=t.mode,a=e.child,o=a.sibling;var s={mode:"hidden",children:r.children};return!(l&1)&&t.child!==a?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=fr(a,s),r.subtreeFlags=a.subtreeFlags&14680064),o!==null?i=fr(o,i):(i=Or(i,l,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,l=e.child.memoizedState,l=l===null?n0(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~n,t.memoizedState=t0,r}return i=e.child,e=i.sibling,r=fr(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function vh(e,t){return t=Qo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function xl(e,t,n,r){return r!==null&&ih(r),Fa(t,e.child,null,n),e=vh(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Sy(e,t,n,r,a,i,l){if(n)return t.flags&256?(t.flags&=-257,r=Bs(Error(j(422))),xl(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,a=t.mode,r=Qo({mode:"visible",children:r.children},a,0,null),i=Or(i,a,l,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&Fa(t,e.child,null,l),t.child.memoizedState=n0(l),t.memoizedState=t0,i);if(!(t.mode&1))return xl(e,t,l,null);if(a.data==="$!"){if(r=a.nextSibling&&a.nextSibling.dataset,r)var o=r.dgst;return r=o,i=Error(j(419)),r=Bs(i,r,void 0),xl(e,t,l,r)}if(o=(l&e.childLanes)!==0,xt||o){if(r=Je,r!==null){switch(l&-l){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=a&(r.suspendedLanes|l)?0:a,a!==0&&a!==i.retryLane&&(i.retryLane=a,Ln(e,a),ln(r,e,a,-1))}return Sh(),r=Bs(Error(j(421))),xl(e,t,l,r)}return a.data==="$?"?(t.flags|=128,t.child=e.child,t=Oy.bind(null,e),a._reactRetry=t,null):(e=i.treeContext,Ft=hr(a.nextSibling),Tt=t,Te=!0,rn=null,e!==null&&(It[Ot++]=Tn,It[Ot++]=Pn,It[Ot++]=Lr,Tn=e.id,Pn=e.overflow,Lr=t),t=vh(t,r.children),t.flags|=4096,t)}function xm(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Gu(e.return,t,n)}function Ls(e,t,n,r,a){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:a}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=a)}function $p(e,t,n){var r=t.pendingProps,a=r.revealOrder,i=r.tail;if(ct(e,t,r.children,n),r=Re.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&xm(e,n,t);else if(e.tag===19)xm(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Ce(Re,r),!(t.mode&1))t.memoizedState=null;else switch(a){case"forwards":for(n=t.child,a=null;n!==null;)e=n.alternate,e!==null&&xo(e)===null&&(a=n),n=n.sibling;n=a,n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),Ls(t,!1,a,n,i);break;case"backwards":for(n=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&xo(e)===null){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}Ls(t,!0,n,null,i);break;case"together":Ls(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Wl(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function qn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),jr|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(j(153));if(t.child!==null){for(e=t.child,n=fr(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=fr(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Dy(e,t,n){switch(t.tag){case 3:xp(t),za();break;case 5:Q1(t);break;case 1:$t(t.type)&&fo(t);break;case 4:ch(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,a=t.memoizedProps.value;Ce(go,r._currentValue),r._currentValue=a;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Ce(Re,Re.current&1),t.flags|=128,null):n&t.child.childLanes?wp(e,t,n):(Ce(Re,Re.current&1),e=qn(e,t,n),e!==null?e.sibling:null);Ce(Re,Re.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return $p(e,t,n);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),Ce(Re,Re.current),r)break;return null;case 22:case 23:return t.lanes=0,yp(e,t,n)}return qn(e,t,n)}var kp,r0,_p,Sp;kp=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};r0=function(){};_p=function(e,t,n,r){var a=e.memoizedProps;if(a!==r){e=t.stateNode,Mr(yn.current);var i=null;switch(n){case"input":a=Su(e,a),r=Su(e,r),i=[];break;case"select":a=Le({},a,{value:void 0}),r=Le({},r,{value:void 0}),i=[];break;case"textarea":a=Eu(e,a),r=Eu(e,r),i=[];break;default:typeof a.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=co)}Fu(n,r);var l;n=null;for(u in a)if(!r.hasOwnProperty(u)&&a.hasOwnProperty(u)&&a[u]!=null)if(u==="style"){var o=a[u];for(l in o)o.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Di.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var s=r[u];if(o=a!=null?a[u]:void 0,r.hasOwnProperty(u)&&s!==o&&(s!=null||o!=null))if(u==="style")if(o){for(l in o)!o.hasOwnProperty(l)||s&&s.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in s)s.hasOwnProperty(l)&&o[l]!==s[l]&&(n||(n={}),n[l]=s[l])}else n||(i||(i=[]),i.push(u,n)),n=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,o=o?o.__html:void 0,s!=null&&o!==s&&(i=i||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(i=i||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Di.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&Fe("scroll",e),i||o===s||(i=[])):(i=i||[]).push(u,s))}n&&(i=i||[]).push("style",n);var u=i;(t.updateQueue=u)&&(t.flags|=4)}};Sp=function(e,t,n,r){n!==r&&(t.flags|=4)};function ti(e,t){if(!Te)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function it(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var a=e.child;a!==null;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags&14680064,r|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags,r|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Cy(e,t,n){var r=t.pendingProps;switch(ah(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return it(t),null;case 1:return $t(t.type)&&mo(),it(t),null;case 3:return r=t.stateNode,Aa(),Ae(wt),Ae(ot),dh(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(yl(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,rn!==null&&(c0(rn),rn=null))),r0(e,t),it(t),null;case 5:mh(t);var a=Mr(Oi.current);if(n=t.type,e!==null&&t.stateNode!=null)_p(e,t,n,r,a),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(j(166));return it(t),null}if(e=Mr(yn.current),yl(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[fn]=t,r[Ri]=i,e=(t.mode&1)!==0,n){case"dialog":Fe("cancel",r),Fe("close",r);break;case"iframe":case"object":case"embed":Fe("load",r);break;case"video":case"audio":for(a=0;a<ci.length;a++)Fe(ci[a],r);break;case"source":Fe("error",r);break;case"img":case"image":case"link":Fe("error",r),Fe("load",r);break;case"details":Fe("toggle",r);break;case"input":zc(r,i),Fe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},Fe("invalid",r);break;case"textarea":Ac(r,i),Fe("invalid",r)}Fu(n,i),a=null;for(var l in i)if(i.hasOwnProperty(l)){var o=i[l];l==="children"?typeof o=="string"?r.textContent!==o&&(i.suppressHydrationWarning!==!0&&gl(r.textContent,o,e),a=["children",o]):typeof o=="number"&&r.textContent!==""+o&&(i.suppressHydrationWarning!==!0&&gl(r.textContent,o,e),a=["children",""+o]):Di.hasOwnProperty(l)&&o!=null&&l==="onScroll"&&Fe("scroll",r)}switch(n){case"input":ul(r),Fc(r,i,!0);break;case"textarea":ul(r),Tc(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=co)}r=a,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Jf(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[fn]=t,e[Ri]=r,kp(e,t,!1,!1),t.stateNode=e;e:{switch(l=Au(n,r),n){case"dialog":Fe("cancel",e),Fe("close",e),a=r;break;case"iframe":case"object":case"embed":Fe("load",e),a=r;break;case"video":case"audio":for(a=0;a<ci.length;a++)Fe(ci[a],e);a=r;break;case"source":Fe("error",e),a=r;break;case"img":case"image":case"link":Fe("error",e),Fe("load",e),a=r;break;case"details":Fe("toggle",e),a=r;break;case"input":zc(e,r),a=Su(e,r),Fe("invalid",e);break;case"option":a=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},a=Le({},r,{value:void 0}),Fe("invalid",e);break;case"textarea":Ac(e,r),a=Eu(e,r),Fe("invalid",e);break;default:a=r}Fu(n,a),o=a;for(i in o)if(o.hasOwnProperty(i)){var s=o[i];i==="style"?n1(e,s):i==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&e1(e,s)):i==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&Ci(e,s):typeof s=="number"&&Ci(e,""+s):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Di.hasOwnProperty(i)?s!=null&&i==="onScroll"&&Fe("scroll",e):s!=null&&H0(e,i,s,l))}switch(n){case"input":ul(e),Fc(e,r,!1);break;case"textarea":ul(e),Tc(e);break;case"option":r.value!=null&&e.setAttribute("value",""+pr(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?ba(e,!!r.multiple,i,!1):r.defaultValue!=null&&ba(e,!!r.multiple,r.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=co)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return it(t),null;case 6:if(e&&t.stateNode!=null)Sp(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(j(166));if(n=Mr(Oi.current),Mr(yn.current),yl(t)){if(r=t.stateNode,n=t.memoizedProps,r[fn]=t,(i=r.nodeValue!==n)&&(e=Tt,e!==null))switch(e.tag){case 3:gl(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&gl(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[fn]=t,t.stateNode=r}return it(t),null;case 13:if(Ae(Re),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Te&&Ft!==null&&t.mode&1&&!(t.flags&128))H1(),za(),t.flags|=98560,i=!1;else if(i=yl(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(j(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(j(317));i[fn]=t}else za(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;it(t),i=!1}else rn!==null&&(c0(rn),rn=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Re.current&1?Ge===0&&(Ge=3):Sh())),t.updateQueue!==null&&(t.flags|=4),it(t),null);case 4:return Aa(),r0(e,t),e===null&&Ni(t.stateNode.containerInfo),it(t),null;case 10:return sh(t.type._context),it(t),null;case 17:return $t(t.type)&&mo(),it(t),null;case 19:if(Ae(Re),i=t.memoizedState,i===null)return it(t),null;if(r=(t.flags&128)!==0,l=i.rendering,l===null)if(r)ti(i,!1);else{if(Ge!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=xo(e),l!==null){for(t.flags|=128,ti(i,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Ce(Re,Re.current&1|2),t.child}e=e.sibling}i.tail!==null&&He()>Pa&&(t.flags|=128,r=!0,ti(i,!1),t.lanes=4194304)}else{if(!r)if(e=xo(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),ti(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!Te)return it(t),null}else 2*He()-i.renderingStartTime>Pa&&n!==1073741824&&(t.flags|=128,r=!0,ti(i,!1),t.lanes=4194304);i.isBackwards?(l.sibling=t.child,t.child=l):(n=i.last,n!==null?n.sibling=l:t.child=l,i.last=l)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=He(),t.sibling=null,n=Re.current,Ce(Re,r?n&1|2:n&1),t):(it(t),null);case 22:case 23:return _h(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Et&1073741824&&(it(t),t.subtreeFlags&6&&(t.flags|=8192)):it(t),null;case 24:return null;case 25:return null}throw Error(j(156,t.tag))}function Ey(e,t){switch(ah(t),t.tag){case 1:return $t(t.type)&&mo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Aa(),Ae(wt),Ae(ot),dh(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return mh(t),null;case 13:if(Ae(Re),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(j(340));za()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Ae(Re),null;case 4:return Aa(),null;case 10:return sh(t.type._context),null;case 22:case 23:return _h(),null;case 24:return null;default:return null}}var wl=!1,lt=!1,zy=typeof WeakSet=="function"?WeakSet:Set,Y=null;function fa(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){je(e,t,r)}else n.current=null}function a0(e,t,n){try{n()}catch(r){je(e,t,r)}}var wm=!1;function Fy(e,t){if(qu=so,e=F1(),nh(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var l=0,o=-1,s=-1,u=0,h=0,m=e,f=null;t:for(;;){for(var p;m!==n||a!==0&&m.nodeType!==3||(o=l+a),m!==i||r!==0&&m.nodeType!==3||(s=l+r),m.nodeType===3&&(l+=m.nodeValue.length),(p=m.firstChild)!==null;)f=m,m=p;for(;;){if(m===e)break t;if(f===n&&++u===a&&(o=l),f===i&&++h===r&&(s=l),(p=m.nextSibling)!==null)break;m=f,f=m.parentNode}m=p}n=o===-1||s===-1?null:{start:o,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(ju={focusedElem:e,selectionRange:n},so=!1,Y=t;Y!==null;)if(t=Y,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Y=e;else for(;Y!==null;){t=Y;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var x=v.memoizedProps,S=v.memoizedState,g=t.stateNode,y=g.getSnapshotBeforeUpdate(t.elementType===t.type?x:en(t.type,x),S);g.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var $=t.stateNode.containerInfo;$.nodeType===1?$.textContent="":$.nodeType===9&&$.documentElement&&$.removeChild($.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(j(163))}}catch(F){je(t,t.return,F)}if(e=t.sibling,e!==null){e.return=t.return,Y=e;break}Y=t.return}return v=wm,wm=!1,v}function vi(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var a=r=r.next;do{if((a.tag&e)===e){var i=a.destroy;a.destroy=void 0,i!==void 0&&a0(t,n,i)}a=a.next}while(a!==r)}}function Vo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function i0(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Dp(e){var t=e.alternate;t!==null&&(e.alternate=null,Dp(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[fn],delete t[Ri],delete t[Wu],delete t[my],delete t[dy])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Cp(e){return e.tag===5||e.tag===3||e.tag===4}function $m(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Cp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function l0(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=co));else if(r!==4&&(e=e.child,e!==null))for(l0(e,t,n),e=e.sibling;e!==null;)l0(e,t,n),e=e.sibling}function o0(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(o0(e,t,n),e=e.sibling;e!==null;)o0(e,t,n),e=e.sibling}var tt=null,tn=!1;function Qn(e,t,n){for(n=n.child;n!==null;)Ep(e,t,n),n=n.sibling}function Ep(e,t,n){if(gn&&typeof gn.onCommitFiberUnmount=="function")try{gn.onCommitFiberUnmount(Oo,n)}catch{}switch(n.tag){case 5:lt||fa(n,t);case 6:var r=tt,a=tn;tt=null,Qn(e,t,n),tt=r,tn=a,tt!==null&&(tn?(e=tt,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):tt.removeChild(n.stateNode));break;case 18:tt!==null&&(tn?(e=tt,n=n.stateNode,e.nodeType===8?Ps(e.parentNode,n):e.nodeType===1&&Ps(e,n),Ai(e)):Ps(tt,n.stateNode));break;case 4:r=tt,a=tn,tt=n.stateNode.containerInfo,tn=!0,Qn(e,t,n),tt=r,tn=a;break;case 0:case 11:case 14:case 15:if(!lt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){a=r=r.next;do{var i=a,l=i.destroy;i=i.tag,l!==void 0&&(i&2||i&4)&&a0(n,t,l),a=a.next}while(a!==r)}Qn(e,t,n);break;case 1:if(!lt&&(fa(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(o){je(n,t,o)}Qn(e,t,n);break;case 21:Qn(e,t,n);break;case 22:n.mode&1?(lt=(r=lt)||n.memoizedState!==null,Qn(e,t,n),lt=r):Qn(e,t,n);break;default:Qn(e,t,n)}}function km(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new zy),t.forEach(function(r){var a=By.bind(null,e,r);n.has(r)||(n.add(r),r.then(a,a))})}}function Jt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r];try{var i=e,l=t,o=l;e:for(;o!==null;){switch(o.tag){case 5:tt=o.stateNode,tn=!1;break e;case 3:tt=o.stateNode.containerInfo,tn=!0;break e;case 4:tt=o.stateNode.containerInfo,tn=!0;break e}o=o.return}if(tt===null)throw Error(j(160));Ep(i,l,a),tt=null,tn=!1;var s=a.alternate;s!==null&&(s.return=null),a.return=null}catch(u){je(a,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)zp(t,e),t=t.sibling}function zp(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Jt(t,e),hn(e),r&4){try{vi(3,e,e.return),Vo(3,e)}catch(x){je(e,e.return,x)}try{vi(5,e,e.return)}catch(x){je(e,e.return,x)}}break;case 1:Jt(t,e),hn(e),r&512&&n!==null&&fa(n,n.return);break;case 5:if(Jt(t,e),hn(e),r&512&&n!==null&&fa(n,n.return),e.flags&32){var a=e.stateNode;try{Ci(a,"")}catch(x){je(e,e.return,x)}}if(r&4&&(a=e.stateNode,a!=null)){var i=e.memoizedProps,l=n!==null?n.memoizedProps:i,o=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{o==="input"&&i.type==="radio"&&i.name!=null&&Xf(a,i),Au(o,l);var u=Au(o,i);for(l=0;l<s.length;l+=2){var h=s[l],m=s[l+1];h==="style"?n1(a,m):h==="dangerouslySetInnerHTML"?e1(a,m):h==="children"?Ci(a,m):H0(a,h,m,u)}switch(o){case"input":Du(a,i);break;case"textarea":Yf(a,i);break;case"select":var f=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!i.multiple;var p=i.value;p!=null?ba(a,!!i.multiple,p,!1):f!==!!i.multiple&&(i.defaultValue!=null?ba(a,!!i.multiple,i.defaultValue,!0):ba(a,!!i.multiple,i.multiple?[]:"",!1))}a[Ri]=i}catch(x){je(e,e.return,x)}}break;case 6:if(Jt(t,e),hn(e),r&4){if(e.stateNode===null)throw Error(j(162));a=e.stateNode,i=e.memoizedProps;try{a.nodeValue=i}catch(x){je(e,e.return,x)}}break;case 3:if(Jt(t,e),hn(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ai(t.containerInfo)}catch(x){je(e,e.return,x)}break;case 4:Jt(t,e),hn(e);break;case 13:Jt(t,e),hn(e),a=e.child,a.flags&8192&&(i=a.memoizedState!==null,a.stateNode.isHidden=i,!i||a.alternate!==null&&a.alternate.memoizedState!==null||($h=He())),r&4&&km(e);break;case 22:if(h=n!==null&&n.memoizedState!==null,e.mode&1?(lt=(u=lt)||h,Jt(t,e),lt=u):Jt(t,e),hn(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!h&&e.mode&1)for(Y=e,h=e.child;h!==null;){for(m=Y=h;Y!==null;){switch(f=Y,p=f.child,f.tag){case 0:case 11:case 14:case 15:vi(4,f,f.return);break;case 1:fa(f,f.return);var v=f.stateNode;if(typeof v.componentWillUnmount=="function"){r=f,n=f.return;try{t=r,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(x){je(r,n,x)}}break;case 5:fa(f,f.return);break;case 22:if(f.memoizedState!==null){Sm(m);continue}}p!==null?(p.return=f,Y=p):Sm(m)}h=h.sibling}e:for(h=null,m=e;;){if(m.tag===5){if(h===null){h=m;try{a=m.stateNode,u?(i=a.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(o=m.stateNode,s=m.memoizedProps.style,l=s!=null&&s.hasOwnProperty("display")?s.display:null,o.style.display=t1("display",l))}catch(x){je(e,e.return,x)}}}else if(m.tag===6){if(h===null)try{m.stateNode.nodeValue=u?"":m.memoizedProps}catch(x){je(e,e.return,x)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;h===m&&(h=null),m=m.return}h===m&&(h=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Jt(t,e),hn(e),r&4&&km(e);break;case 21:break;default:Jt(t,e),hn(e)}}function hn(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Cp(n)){var r=n;break e}n=n.return}throw Error(j(160))}switch(r.tag){case 5:var a=r.stateNode;r.flags&32&&(Ci(a,""),r.flags&=-33);var i=$m(e);o0(e,i,a);break;case 3:case 4:var l=r.stateNode.containerInfo,o=$m(e);l0(e,o,l);break;default:throw Error(j(161))}}catch(s){je(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Ay(e,t,n){Y=e,Fp(e)}function Fp(e,t,n){for(var r=(e.mode&1)!==0;Y!==null;){var a=Y,i=a.child;if(a.tag===22&&r){var l=a.memoizedState!==null||wl;if(!l){var o=a.alternate,s=o!==null&&o.memoizedState!==null||lt;o=wl;var u=lt;if(wl=l,(lt=s)&&!u)for(Y=a;Y!==null;)l=Y,s=l.child,l.tag===22&&l.memoizedState!==null?Dm(a):s!==null?(s.return=l,Y=s):Dm(a);for(;i!==null;)Y=i,Fp(i),i=i.sibling;Y=a,wl=o,lt=u}_m(e)}else a.subtreeFlags&8772&&i!==null?(i.return=a,Y=i):_m(e)}}function _m(e){for(;Y!==null;){var t=Y;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:lt||Vo(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!lt)if(n===null)r.componentDidMount();else{var a=t.elementType===t.type?n.memoizedProps:en(t.type,n.memoizedProps);r.componentDidUpdate(a,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&sm(t,i,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}sm(t,l,n)}break;case 5:var o=t.stateNode;if(n===null&&t.flags&4){n=o;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var h=u.memoizedState;if(h!==null){var m=h.dehydrated;m!==null&&Ai(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(j(163))}lt||t.flags&512&&i0(t)}catch(f){je(t,t.return,f)}}if(t===e){Y=null;break}if(n=t.sibling,n!==null){n.return=t.return,Y=n;break}Y=t.return}}function Sm(e){for(;Y!==null;){var t=Y;if(t===e){Y=null;break}var n=t.sibling;if(n!==null){n.return=t.return,Y=n;break}Y=t.return}}function Dm(e){for(;Y!==null;){var t=Y;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Vo(4,t)}catch(s){je(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var a=t.return;try{r.componentDidMount()}catch(s){je(t,a,s)}}var i=t.return;try{i0(t)}catch(s){je(t,i,s)}break;case 5:var l=t.return;try{i0(t)}catch(s){je(t,l,s)}}}catch(s){je(t,t.return,s)}if(t===e){Y=null;break}var o=t.sibling;if(o!==null){o.return=t.return,Y=o;break}Y=t.return}}var Ty=Math.ceil,ko=Wn.ReactCurrentDispatcher,xh=Wn.ReactCurrentOwner,Ht=Wn.ReactCurrentBatchConfig,ge=0,Je=null,Ve=null,nt=0,Et=0,pa=$r(0),Ge=0,ji=null,jr=0,Ko=0,wh=0,xi=null,vt=null,$h=0,Pa=1/0,zn=null,_o=!1,s0=null,mr=null,$l=!1,ir=null,So=0,wi=0,u0=null,Vl=-1,Kl=0;function dt(){return ge&6?He():Vl!==-1?Vl:Vl=He()}function dr(e){return e.mode&1?ge&2&&nt!==0?nt&-nt:py.transition!==null?(Kl===0&&(Kl=f1()),Kl):(e=$e,e!==0||(e=window.event,e=e===void 0?16:w1(e.type)),e):1}function ln(e,t,n,r){if(50<wi)throw wi=0,u0=null,Error(j(185));Gi(e,n,r),(!(ge&2)||e!==Je)&&(e===Je&&(!(ge&2)&&(Ko|=n),Ge===4&&rr(e,nt)),kt(e,r),n===1&&ge===0&&!(t.mode&1)&&(Pa=He()+500,Ho&&kr()))}function kt(e,t){var n=e.callbackNode;p2(e,t);var r=oo(e,e===Je?nt:0);if(r===0)n!==null&&Mc(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Mc(n),t===1)e.tag===0?fy(Cm.bind(null,e)):L1(Cm.bind(null,e)),hy(function(){!(ge&6)&&kr()}),n=null;else{switch(p1(r)){case 1:n=Q0;break;case 4:n=m1;break;case 16:n=lo;break;case 536870912:n=d1;break;default:n=lo}n=Op(n,Ap.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Ap(e,t){if(Vl=-1,Kl=0,ge&6)throw Error(j(327));var n=e.callbackNode;if(wa()&&e.callbackNode!==n)return null;var r=oo(e,e===Je?nt:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Do(e,r);else{t=r;var a=ge;ge|=2;var i=Pp();(Je!==e||nt!==t)&&(zn=null,Pa=He()+500,Ir(e,t));do try{My();break}catch(o){Tp(e,o)}while(!0);oh(),ko.current=i,ge=a,Ve!==null?t=0:(Je=null,nt=0,t=Ge)}if(t!==0){if(t===2&&(a=Ru(e),a!==0&&(r=a,t=h0(e,a))),t===1)throw n=ji,Ir(e,0),rr(e,r),kt(e,He()),n;if(t===6)rr(e,r);else{if(a=e.current.alternate,!(r&30)&&!Py(a)&&(t=Do(e,r),t===2&&(i=Ru(e),i!==0&&(r=i,t=h0(e,i))),t===1))throw n=ji,Ir(e,0),rr(e,r),kt(e,He()),n;switch(e.finishedWork=a,e.finishedLanes=r,t){case 0:case 1:throw Error(j(345));case 2:Ar(e,vt,zn);break;case 3:if(rr(e,r),(r&130023424)===r&&(t=$h+500-He(),10<t)){if(oo(e,0)!==0)break;if(a=e.suspendedLanes,(a&r)!==r){dt(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=Uu(Ar.bind(null,e,vt,zn),t);break}Ar(e,vt,zn);break;case 4:if(rr(e,r),(r&4194240)===r)break;for(t=e.eventTimes,a=-1;0<r;){var l=31-an(r);i=1<<l,l=t[l],l>a&&(a=l),r&=~i}if(r=a,r=He()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Ty(r/1960))-r,10<r){e.timeoutHandle=Uu(Ar.bind(null,e,vt,zn),r);break}Ar(e,vt,zn);break;case 5:Ar(e,vt,zn);break;default:throw Error(j(329))}}}return kt(e,He()),e.callbackNode===n?Ap.bind(null,e):null}function h0(e,t){var n=xi;return e.current.memoizedState.isDehydrated&&(Ir(e,t).flags|=256),e=Do(e,t),e!==2&&(t=vt,vt=n,t!==null&&c0(t)),e}function c0(e){vt===null?vt=e:vt.push.apply(vt,e)}function Py(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var a=n[r],i=a.getSnapshot;a=a.value;try{if(!sn(i(),a))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function rr(e,t){for(t&=~wh,t&=~Ko,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-an(t),r=1<<n;e[n]=-1,t&=~r}}function Cm(e){if(ge&6)throw Error(j(327));wa();var t=oo(e,0);if(!(t&1))return kt(e,He()),null;var n=Do(e,t);if(e.tag!==0&&n===2){var r=Ru(e);r!==0&&(t=r,n=h0(e,r))}if(n===1)throw n=ji,Ir(e,0),rr(e,t),kt(e,He()),n;if(n===6)throw Error(j(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Ar(e,vt,zn),kt(e,He()),null}function kh(e,t){var n=ge;ge|=1;try{return e(t)}finally{ge=n,ge===0&&(Pa=He()+500,Ho&&kr())}}function Hr(e){ir!==null&&ir.tag===0&&!(ge&6)&&wa();var t=ge;ge|=1;var n=Ht.transition,r=$e;try{if(Ht.transition=null,$e=1,e)return e()}finally{$e=r,Ht.transition=n,ge=t,!(ge&6)&&kr()}}function _h(){Et=pa.current,Ae(pa)}function Ir(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,uy(n)),Ve!==null)for(n=Ve.return;n!==null;){var r=n;switch(ah(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&mo();break;case 3:Aa(),Ae(wt),Ae(ot),dh();break;case 5:mh(r);break;case 4:Aa();break;case 13:Ae(Re);break;case 19:Ae(Re);break;case 10:sh(r.type._context);break;case 22:case 23:_h()}n=n.return}if(Je=e,Ve=e=fr(e.current,null),nt=Et=t,Ge=0,ji=null,wh=Ko=jr=0,vt=xi=null,Nr!==null){for(t=0;t<Nr.length;t++)if(n=Nr[t],r=n.interleaved,r!==null){n.interleaved=null;var a=r.next,i=n.pending;if(i!==null){var l=i.next;i.next=a,r.next=l}n.pending=r}Nr=null}return e}function Tp(e,t){do{var n=Ve;try{if(oh(),Hl.current=$o,wo){for(var r=Oe.memoizedState;r!==null;){var a=r.queue;a!==null&&(a.pending=null),r=r.next}wo=!1}if(qr=0,Ye=Qe=Oe=null,yi=!1,Bi=0,xh.current=null,n===null||n.return===null){Ge=1,ji=t,Ve=null;break}e:{var i=e,l=n.return,o=n,s=t;if(t=nt,o.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,h=o,m=h.tag;if(!(h.mode&1)&&(m===0||m===11||m===15)){var f=h.alternate;f?(h.updateQueue=f.updateQueue,h.memoizedState=f.memoizedState,h.lanes=f.lanes):(h.updateQueue=null,h.memoizedState=null)}var p=fm(l);if(p!==null){p.flags&=-257,pm(p,l,o,i,t),p.mode&1&&dm(i,u,t),t=p,s=u;var v=t.updateQueue;if(v===null){var x=new Set;x.add(s),t.updateQueue=x}else v.add(s);break e}else{if(!(t&1)){dm(i,u,t),Sh();break e}s=Error(j(426))}}else if(Te&&o.mode&1){var S=fm(l);if(S!==null){!(S.flags&65536)&&(S.flags|=256),pm(S,l,o,i,t),ih(Ta(s,o));break e}}i=s=Ta(s,o),Ge!==4&&(Ge=2),xi===null?xi=[i]:xi.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var g=pp(i,s,t);om(i,g);break e;case 1:o=s;var y=i.type,$=i.stateNode;if(!(i.flags&128)&&(typeof y.getDerivedStateFromError=="function"||$!==null&&typeof $.componentDidCatch=="function"&&(mr===null||!mr.has($)))){i.flags|=65536,t&=-t,i.lanes|=t;var F=bp(i,o,t);om(i,F);break e}}i=i.return}while(i!==null)}Mp(n)}catch(P){t=P,Ve===n&&n!==null&&(Ve=n=n.return);continue}break}while(!0)}function Pp(){var e=ko.current;return ko.current=$o,e===null?$o:e}function Sh(){(Ge===0||Ge===3||Ge===2)&&(Ge=4),Je===null||!(jr&268435455)&&!(Ko&268435455)||rr(Je,nt)}function Do(e,t){var n=ge;ge|=2;var r=Pp();(Je!==e||nt!==t)&&(zn=null,Ir(e,t));do try{Ny();break}catch(a){Tp(e,a)}while(!0);if(oh(),ge=n,ko.current=r,Ve!==null)throw Error(j(261));return Je=null,nt=0,Ge}function Ny(){for(;Ve!==null;)Np(Ve)}function My(){for(;Ve!==null&&!l2();)Np(Ve)}function Np(e){var t=Ip(e.alternate,e,Et);e.memoizedProps=e.pendingProps,t===null?Mp(e):Ve=t,xh.current=null}function Mp(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Ey(n,t),n!==null){n.flags&=32767,Ve=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ge=6,Ve=null;return}}else if(n=Cy(n,t,Et),n!==null){Ve=n;return}if(t=t.sibling,t!==null){Ve=t;return}Ve=t=e}while(t!==null);Ge===0&&(Ge=5)}function Ar(e,t,n){var r=$e,a=Ht.transition;try{Ht.transition=null,$e=1,Ry(e,t,n,r)}finally{Ht.transition=a,$e=r}return null}function Ry(e,t,n,r){do wa();while(ir!==null);if(ge&6)throw Error(j(327));n=e.finishedWork;var a=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(j(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(b2(e,i),e===Je&&(Ve=Je=null,nt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||$l||($l=!0,Op(lo,function(){return wa(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Ht.transition,Ht.transition=null;var l=$e;$e=1;var o=ge;ge|=4,xh.current=null,Fy(e,n),zp(n,e),ny(ju),so=!!qu,ju=qu=null,e.current=n,Ay(n),o2(),ge=o,$e=l,Ht.transition=i}else e.current=n;if($l&&($l=!1,ir=e,So=a),i=e.pendingLanes,i===0&&(mr=null),h2(n.stateNode),kt(e,He()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)a=t[n],r(a.value,{componentStack:a.stack,digest:a.digest});if(_o)throw _o=!1,e=s0,s0=null,e;return So&1&&e.tag!==0&&wa(),i=e.pendingLanes,i&1?e===u0?wi++:(wi=0,u0=e):wi=0,kr(),null}function wa(){if(ir!==null){var e=p1(So),t=Ht.transition,n=$e;try{if(Ht.transition=null,$e=16>e?16:e,ir===null)var r=!1;else{if(e=ir,ir=null,So=0,ge&6)throw Error(j(331));var a=ge;for(ge|=4,Y=e.current;Y!==null;){var i=Y,l=i.child;if(Y.flags&16){var o=i.deletions;if(o!==null){for(var s=0;s<o.length;s++){var u=o[s];for(Y=u;Y!==null;){var h=Y;switch(h.tag){case 0:case 11:case 15:vi(8,h,i)}var m=h.child;if(m!==null)m.return=h,Y=m;else for(;Y!==null;){h=Y;var f=h.sibling,p=h.return;if(Dp(h),h===u){Y=null;break}if(f!==null){f.return=p,Y=f;break}Y=p}}}var v=i.alternate;if(v!==null){var x=v.child;if(x!==null){v.child=null;do{var S=x.sibling;x.sibling=null,x=S}while(x!==null)}}Y=i}}if(i.subtreeFlags&2064&&l!==null)l.return=i,Y=l;else e:for(;Y!==null;){if(i=Y,i.flags&2048)switch(i.tag){case 0:case 11:case 15:vi(9,i,i.return)}var g=i.sibling;if(g!==null){g.return=i.return,Y=g;break e}Y=i.return}}var y=e.current;for(Y=y;Y!==null;){l=Y;var $=l.child;if(l.subtreeFlags&2064&&$!==null)$.return=l,Y=$;else e:for(l=y;Y!==null;){if(o=Y,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:Vo(9,o)}}catch(P){je(o,o.return,P)}if(o===l){Y=null;break e}var F=o.sibling;if(F!==null){F.return=o.return,Y=F;break e}Y=o.return}}if(ge=a,kr(),gn&&typeof gn.onPostCommitFiberRoot=="function")try{gn.onPostCommitFiberRoot(Oo,e)}catch{}r=!0}return r}finally{$e=n,Ht.transition=t}}return!1}function Em(e,t,n){t=Ta(n,t),t=pp(e,t,1),e=cr(e,t,1),t=dt(),e!==null&&(Gi(e,1,t),kt(e,t))}function je(e,t,n){if(e.tag===3)Em(e,e,n);else for(;t!==null;){if(t.tag===3){Em(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(mr===null||!mr.has(r))){e=Ta(n,e),e=bp(t,e,1),t=cr(t,e,1),e=dt(),t!==null&&(Gi(t,1,e),kt(t,e));break}}t=t.return}}function Iy(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=dt(),e.pingedLanes|=e.suspendedLanes&n,Je===e&&(nt&n)===n&&(Ge===4||Ge===3&&(nt&130023424)===nt&&500>He()-$h?Ir(e,0):wh|=n),kt(e,t)}function Rp(e,t){t===0&&(e.mode&1?(t=ml,ml<<=1,!(ml&130023424)&&(ml=4194304)):t=1);var n=dt();e=Ln(e,t),e!==null&&(Gi(e,t,n),kt(e,n))}function Oy(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Rp(e,n)}function By(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(j(314))}r!==null&&r.delete(t),Rp(e,n)}var Ip;Ip=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||wt.current)xt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return xt=!1,Dy(e,t,n);xt=!!(e.flags&131072)}else xt=!1,Te&&t.flags&1048576&&q1(t,bo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Wl(e,t),e=t.pendingProps;var a=Ea(t,ot.current);xa(t,n),a=ph(null,t,r,e,a,n);var i=bh();return t.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,$t(r)?(i=!0,fo(t)):i=!1,t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,hh(t),a.updater=Wo,t.stateNode=a,a._reactInternals=t,Xu(t,r,e,n),t=e0(null,t,r,!0,i,n)):(t.tag=0,Te&&i&&rh(t),ct(null,t,a,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Wl(e,t),e=t.pendingProps,a=r._init,r=a(r._payload),t.type=r,a=t.tag=qy(r),e=en(r,e),a){case 0:t=Ju(null,t,r,e,n);break e;case 1:t=ym(null,t,r,e,n);break e;case 11:t=bm(null,t,r,e,n);break e;case 14:t=gm(null,t,r,en(r.type,e),n);break e}throw Error(j(306,r,""))}return t;case 0:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:en(r,a),Ju(e,t,r,a,n);case 1:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:en(r,a),ym(e,t,r,a,n);case 3:e:{if(xp(t),e===null)throw Error(j(387));r=t.pendingProps,i=t.memoizedState,a=i.element,K1(e,t),vo(t,r,null,n);var l=t.memoizedState;if(r=l.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){a=Ta(Error(j(423)),t),t=vm(e,t,r,n,a);break e}else if(r!==a){a=Ta(Error(j(424)),t),t=vm(e,t,r,n,a);break e}else for(Ft=hr(t.stateNode.containerInfo.firstChild),Tt=t,Te=!0,rn=null,n=W1(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(za(),r===a){t=qn(e,t,n);break e}ct(e,t,r,n)}t=t.child}return t;case 5:return Q1(t),e===null&&Qu(t),r=t.type,a=t.pendingProps,i=e!==null?e.memoizedProps:null,l=a.children,Hu(r,a)?l=null:i!==null&&Hu(r,i)&&(t.flags|=32),vp(e,t),ct(e,t,l,n),t.child;case 6:return e===null&&Qu(t),null;case 13:return wp(e,t,n);case 4:return ch(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Fa(t,null,r,n):ct(e,t,r,n),t.child;case 11:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:en(r,a),bm(e,t,r,a,n);case 7:return ct(e,t,t.pendingProps,n),t.child;case 8:return ct(e,t,t.pendingProps.children,n),t.child;case 12:return ct(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,a=t.pendingProps,i=t.memoizedProps,l=a.value,Ce(go,r._currentValue),r._currentValue=l,i!==null)if(sn(i.value,l)){if(i.children===a.children&&!wt.current){t=qn(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var o=i.dependencies;if(o!==null){l=i.child;for(var s=o.firstContext;s!==null;){if(s.context===r){if(i.tag===1){s=Nn(-1,n&-n),s.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var h=u.pending;h===null?s.next=s:(s.next=h.next,h.next=s),u.pending=s}}i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),Gu(i.return,n,t),o.lanes|=n;break}s=s.next}}else if(i.tag===10)l=i.type===t.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(j(341));l.lanes|=n,o=l.alternate,o!==null&&(o.lanes|=n),Gu(l,n,t),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===t){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}ct(e,t,a.children,n),t=t.child}return t;case 9:return a=t.type,r=t.pendingProps.children,xa(t,n),a=Wt(a),r=r(a),t.flags|=1,ct(e,t,r,n),t.child;case 14:return r=t.type,a=en(r,t.pendingProps),a=en(r.type,a),gm(e,t,r,a,n);case 15:return gp(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:en(r,a),Wl(e,t),t.tag=1,$t(r)?(e=!0,fo(t)):e=!1,xa(t,n),fp(t,r,a),Xu(t,r,a,n),e0(null,t,r,!0,e,n);case 19:return $p(e,t,n);case 22:return yp(e,t,n)}throw Error(j(156,t.tag))};function Op(e,t){return c1(e,t)}function Ly(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qt(e,t,n,r){return new Ly(e,t,n,r)}function Dh(e){return e=e.prototype,!(!e||!e.isReactComponent)}function qy(e){if(typeof e=="function")return Dh(e)?1:0;if(e!=null){if(e=e.$$typeof,e===W0)return 11;if(e===V0)return 14}return 2}function fr(e,t){var n=e.alternate;return n===null?(n=qt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ql(e,t,n,r,a,i){var l=2;if(r=e,typeof e=="function")Dh(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case ia:return Or(n.children,a,i,t);case U0:l=8,a|=8;break;case wu:return e=qt(12,n,t,a|2),e.elementType=wu,e.lanes=i,e;case $u:return e=qt(13,n,t,a),e.elementType=$u,e.lanes=i,e;case ku:return e=qt(19,n,t,a),e.elementType=ku,e.lanes=i,e;case Qf:return Qo(n,a,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Vf:l=10;break e;case Kf:l=9;break e;case W0:l=11;break e;case V0:l=14;break e;case er:l=16,r=null;break e}throw Error(j(130,e==null?e:typeof e,""))}return t=qt(l,n,t,a),t.elementType=e,t.type=r,t.lanes=i,t}function Or(e,t,n,r){return e=qt(7,e,r,t),e.lanes=n,e}function Qo(e,t,n,r){return e=qt(22,e,r,t),e.elementType=Qf,e.lanes=n,e.stateNode={isHidden:!1},e}function qs(e,t,n){return e=qt(6,e,null,t),e.lanes=n,e}function js(e,t,n){return t=qt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function jy(e,t,n,r,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=$s(0),this.expirationTimes=$s(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=$s(0),this.identifierPrefix=r,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function Ch(e,t,n,r,a,i,l,o,s){return e=new jy(e,t,n,o,s),t===1?(t=1,i===!0&&(t|=8)):t=0,i=qt(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},hh(i),e}function Hy(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:aa,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Bp(e){if(!e)return br;e=e._reactInternals;e:{if(Wr(e)!==e||e.tag!==1)throw Error(j(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if($t(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(j(171))}if(e.tag===1){var n=e.type;if($t(n))return B1(e,n,t)}return t}function Lp(e,t,n,r,a,i,l,o,s){return e=Ch(n,r,!0,e,a,i,l,o,s),e.context=Bp(null),n=e.current,r=dt(),a=dr(n),i=Nn(r,a),i.callback=t??null,cr(n,i,a),e.current.lanes=a,Gi(e,a,r),kt(e,r),e}function Go(e,t,n,r){var a=t.current,i=dt(),l=dr(a);return n=Bp(n),t.context===null?t.context=n:t.pendingContext=n,t=Nn(i,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=cr(a,t,l),e!==null&&(ln(e,a,l,i),jl(e,a,l)),l}function Co(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function zm(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Eh(e,t){zm(e,t),(e=e.alternate)&&zm(e,t)}function Uy(){return null}var qp=typeof reportError=="function"?reportError:function(e){console.error(e)};function zh(e){this._internalRoot=e}Zo.prototype.render=zh.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(j(409));Go(e,t,null,null)};Zo.prototype.unmount=zh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Hr(function(){Go(null,e,null,null)}),t[Bn]=null}};function Zo(e){this._internalRoot=e}Zo.prototype.unstable_scheduleHydration=function(e){if(e){var t=y1();e={blockedOn:null,target:e,priority:t};for(var n=0;n<nr.length&&t!==0&&t<nr[n].priority;n++);nr.splice(n,0,e),n===0&&x1(e)}};function Fh(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Xo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Fm(){}function Wy(e,t,n,r,a){if(a){if(typeof r=="function"){var i=r;r=function(){var u=Co(l);i.call(u)}}var l=Lp(t,r,e,0,null,!1,!1,"",Fm);return e._reactRootContainer=l,e[Bn]=l.current,Ni(e.nodeType===8?e.parentNode:e),Hr(),l}for(;a=e.lastChild;)e.removeChild(a);if(typeof r=="function"){var o=r;r=function(){var u=Co(s);o.call(u)}}var s=Ch(e,0,!1,null,null,!1,!1,"",Fm);return e._reactRootContainer=s,e[Bn]=s.current,Ni(e.nodeType===8?e.parentNode:e),Hr(function(){Go(t,s,n,r)}),s}function Yo(e,t,n,r,a){var i=n._reactRootContainer;if(i){var l=i;if(typeof a=="function"){var o=a;a=function(){var s=Co(l);o.call(s)}}Go(t,l,e,a)}else l=Wy(n,t,e,a,r);return Co(l)}b1=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=hi(t.pendingLanes);n!==0&&(G0(t,n|1),kt(t,He()),!(ge&6)&&(Pa=He()+500,kr()))}break;case 13:Hr(function(){var r=Ln(e,1);if(r!==null){var a=dt();ln(r,e,1,a)}}),Eh(e,1)}};Z0=function(e){if(e.tag===13){var t=Ln(e,134217728);if(t!==null){var n=dt();ln(t,e,134217728,n)}Eh(e,134217728)}};g1=function(e){if(e.tag===13){var t=dr(e),n=Ln(e,t);if(n!==null){var r=dt();ln(n,e,t,r)}Eh(e,t)}};y1=function(){return $e};v1=function(e,t){var n=$e;try{return $e=e,t()}finally{$e=n}};Pu=function(e,t,n){switch(t){case"input":if(Du(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=jo(r);if(!a)throw Error(j(90));Zf(r),Du(r,a)}}}break;case"textarea":Yf(e,n);break;case"select":t=n.value,t!=null&&ba(e,!!n.multiple,t,!1)}};i1=kh;l1=Hr;var Vy={usingClientEntryPoint:!1,Events:[Xi,ua,jo,r1,a1,kh]},ni={findFiberByHostInstance:Pr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Ky={bundleType:ni.bundleType,version:ni.version,rendererPackageName:ni.rendererPackageName,rendererConfig:ni.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Wn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=u1(e),e===null?null:e.stateNode},findFiberByHostInstance:ni.findFiberByHostInstance||Uy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var kl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!kl.isDisabled&&kl.supportsFiber)try{Oo=kl.inject(Ky),gn=kl}catch{}}Nt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Vy;Nt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Fh(t))throw Error(j(200));return Hy(e,t,null,n)};Nt.createRoot=function(e,t){if(!Fh(e))throw Error(j(299));var n=!1,r="",a=qp;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=Ch(e,1,!1,null,null,n,!1,r,a),e[Bn]=t.current,Ni(e.nodeType===8?e.parentNode:e),new zh(t)};Nt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(j(188)):(e=Object.keys(e).join(","),Error(j(268,e)));return e=u1(t),e=e===null?null:e.stateNode,e};Nt.flushSync=function(e){return Hr(e)};Nt.hydrate=function(e,t,n){if(!Xo(t))throw Error(j(200));return Yo(null,e,t,!0,n)};Nt.hydrateRoot=function(e,t,n){if(!Fh(e))throw Error(j(405));var r=n!=null&&n.hydratedSources||null,a=!1,i="",l=qp;if(n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=Lp(t,null,e,1,n??null,a,!1,i,l),e[Bn]=t.current,Ni(e),r)for(e=0;e<r.length;e++)n=r[e],a=n._getVersion,a=a(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,a]:t.mutableSourceEagerHydrationData.push(n,a);return new Zo(t)};Nt.render=function(e,t,n){if(!Xo(t))throw Error(j(200));return Yo(null,e,t,!1,n)};Nt.unmountComponentAtNode=function(e){if(!Xo(e))throw Error(j(40));return e._reactRootContainer?(Hr(function(){Yo(null,null,e,!1,function(){e._reactRootContainer=null,e[Bn]=null})}),!0):!1};Nt.unstable_batchedUpdates=kh;Nt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Xo(n))throw Error(j(200));if(e==null||e._reactInternals===void 0)throw Error(j(38));return Yo(e,t,n,!1,r)};Nt.version="18.3.1-next-f1338f8080-20240426";function jp(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(jp)}catch(e){console.error(e)}}jp(),jf.exports=Nt;var Qy=jf.exports,Am=Qy;vu.createRoot=Am.createRoot,vu.hydrateRoot=Am.hydrateRoot;var Ah={};Object.defineProperty(Ah,"__esModule",{value:!0});Ah.parse=t3;Ah.serialize=n3;const Gy=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,Zy=/^[\u0021-\u003A\u003C-\u007E]*$/,Xy=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,Yy=/^[\u0020-\u003A\u003D-\u007E]*$/,Jy=Object.prototype.toString,e3=(()=>{const e=function(){};return e.prototype=Object.create(null),e})();function t3(e,t){const n=new e3,r=e.length;if(r<2)return n;const a=(t==null?void 0:t.decode)||r3;let i=0;do{const l=e.indexOf("=",i);if(l===-1)break;const o=e.indexOf(";",i),s=o===-1?r:o;if(l>s){i=e.lastIndexOf(";",l-1)+1;continue}const u=Tm(e,i,l),h=Pm(e,l,u),m=e.slice(u,h);if(n[m]===void 0){let f=Tm(e,l+1,s),p=Pm(e,s,f);const v=a(e.slice(f,p));n[m]=v}i=s+1}while(i<r);return n}function Tm(e,t,n){do{const r=e.charCodeAt(t);if(r!==32&&r!==9)return t}while(++t<n);return n}function Pm(e,t,n){for(;t>n;){const r=e.charCodeAt(--t);if(r!==32&&r!==9)return t+1}return n}function n3(e,t,n){const r=(n==null?void 0:n.encode)||encodeURIComponent;if(!Gy.test(e))throw new TypeError(`argument name is invalid: ${e}`);const a=r(t);if(!Zy.test(a))throw new TypeError(`argument val is invalid: ${t}`);let i=e+"="+a;if(!n)return i;if(n.maxAge!==void 0){if(!Number.isInteger(n.maxAge))throw new TypeError(`option maxAge is invalid: ${n.maxAge}`);i+="; Max-Age="+n.maxAge}if(n.domain){if(!Xy.test(n.domain))throw new TypeError(`option domain is invalid: ${n.domain}`);i+="; Domain="+n.domain}if(n.path){if(!Yy.test(n.path))throw new TypeError(`option path is invalid: ${n.path}`);i+="; Path="+n.path}if(n.expires){if(!a3(n.expires)||!Number.isFinite(n.expires.valueOf()))throw new TypeError(`option expires is invalid: ${n.expires}`);i+="; Expires="+n.expires.toUTCString()}if(n.httpOnly&&(i+="; HttpOnly"),n.secure&&(i+="; Secure"),n.partitioned&&(i+="; Partitioned"),n.priority)switch(typeof n.priority=="string"?n.priority.toLowerCase():void 0){case"low":i+="; Priority=Low";break;case"medium":i+="; Priority=Medium";break;case"high":i+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${n.priority}`)}if(n.sameSite)switch(typeof n.sameSite=="string"?n.sameSite.toLowerCase():n.sameSite){case!0:case"strict":i+="; SameSite=Strict";break;case"lax":i+="; SameSite=Lax";break;case"none":i+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${n.sameSite}`)}return i}function r3(e){if(e.indexOf("%")===-1)return e;try{return decodeURIComponent(e)}catch{return e}}function a3(e){return Jy.call(e)==="[object Date]"}/**
 * react-router v7.0.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Nm="popstate";function i3(e={}){function t(a,i){let{pathname:l="/",search:o="",hash:s=""}=Vr(a.location.hash.substring(1));return!l.startsWith("/")&&!l.startsWith(".")&&(l="/"+l),m0("",{pathname:l,search:o,hash:s},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(a,i){let l=a.document.querySelector("base"),o="";if(l&&l.getAttribute("href")){let s=a.location.href,u=s.indexOf("#");o=u===-1?s:s.slice(0,u)}return o+"#"+(typeof i=="string"?i:Hi(i))}function r(a,i){Vn(a.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(i)})`)}return o3(t,n,r,e)}function Be(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Vn(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function l3(){return Math.random().toString(36).substring(2,10)}function Mm(e,t){return{usr:e.state,key:e.key,idx:t}}function m0(e,t,n=null,r){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof t=="string"?Vr(t):t,state:n,key:t&&t.key||r||l3()}}function Hi({pathname:e="/",search:t="",hash:n=""}){return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),n&&n!=="#"&&(e+=n.charAt(0)==="#"?n:"#"+n),e}function Vr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substring(r),e=e.substring(0,r)),e&&(t.pathname=e)}return t}function o3(e,t,n,r={}){let{window:a=document.defaultView,v5Compat:i=!1}=r,l=a.history,o="POP",s=null,u=h();u==null&&(u=0,l.replaceState({...l.state,idx:u},""));function h(){return(l.state||{idx:null}).idx}function m(){o="POP";let S=h(),g=S==null?null:S-u;u=S,s&&s({action:o,location:x.location,delta:g})}function f(S,g){o="PUSH";let y=m0(x.location,S,g);n&&n(y,S),u=h()+1;let $=Mm(y,u),F=x.createHref(y);try{l.pushState($,"",F)}catch(P){if(P instanceof DOMException&&P.name==="DataCloneError")throw P;a.location.assign(F)}i&&s&&s({action:o,location:x.location,delta:1})}function p(S,g){o="REPLACE";let y=m0(x.location,S,g);n&&n(y,S),u=h();let $=Mm(y,u),F=x.createHref(y);l.replaceState($,"",F),i&&s&&s({action:o,location:x.location,delta:0})}function v(S){let g=a.location.origin!=="null"?a.location.origin:a.location.href,y=typeof S=="string"?S:Hi(S);return y=y.replace(/ $/,"%20"),Be(g,`No window.location.(origin|href) available to create URL for href: ${y}`),new URL(y,g)}let x={get action(){return o},get location(){return e(a,l)},listen(S){if(s)throw new Error("A history only accepts one active listener");return a.addEventListener(Nm,m),s=S,()=>{a.removeEventListener(Nm,m),s=null}},createHref(S){return t(a,S)},createURL:v,encodeLocation(S){let g=v(S);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:f,replace:p,go(S){return l.go(S)}};return x}function Hp(e,t,n="/"){return s3(e,t,n,!1)}function s3(e,t,n,r){let a=typeof t=="string"?Vr(t):t,i=gr(a.pathname||"/",n);if(i==null)return null;let l=Up(e);u3(l);let o=null;for(let s=0;o==null&&s<l.length;++s){let u=x3(i);o=y3(l[s],u,r)}return o}function Up(e,t=[],n=[],r=""){let a=(i,l,o)=>{let s={relativePath:o===void 0?i.path||"":o,caseSensitive:i.caseSensitive===!0,childrenIndex:l,route:i};s.relativePath.startsWith("/")&&(Be(s.relativePath.startsWith(r),`Absolute route path "${s.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),s.relativePath=s.relativePath.slice(r.length));let u=Mn([r,s.relativePath]),h=n.concat(s);i.children&&i.children.length>0&&(Be(i.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${u}".`),Up(i.children,t,h,u)),!(i.path==null&&!i.index)&&t.push({path:u,score:b3(u,i.index),routesMeta:h})};return e.forEach((i,l)=>{var o;if(i.path===""||!((o=i.path)!=null&&o.includes("?")))a(i,l);else for(let s of Wp(i.path))a(i,l,s)}),t}function Wp(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,a=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return a?[i,""]:[i];let l=Wp(r.join("/")),o=[];return o.push(...l.map(s=>s===""?i:[i,s].join("/"))),a&&o.push(...l),o.map(s=>e.startsWith("/")&&s===""?"/":s)}function u3(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:g3(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}var h3=/^:[\w-]+$/,c3=3,m3=2,d3=1,f3=10,p3=-2,Rm=e=>e==="*";function b3(e,t){let n=e.split("/"),r=n.length;return n.some(Rm)&&(r+=p3),t&&(r+=m3),n.filter(a=>!Rm(a)).reduce((a,i)=>a+(h3.test(i)?c3:i===""?d3:f3),r)}function g3(e,t){return e.length===t.length&&e.slice(0,-1).every((r,a)=>r===t[a])?e[e.length-1]-t[t.length-1]:0}function y3(e,t,n=!1){let{routesMeta:r}=e,a={},i="/",l=[];for(let o=0;o<r.length;++o){let s=r[o],u=o===r.length-1,h=i==="/"?t:t.slice(i.length)||"/",m=Eo({path:s.relativePath,caseSensitive:s.caseSensitive,end:u},h),f=s.route;if(!m&&u&&n&&!r[r.length-1].route.index&&(m=Eo({path:s.relativePath,caseSensitive:s.caseSensitive,end:!1},h)),!m)return null;Object.assign(a,m.params),l.push({params:a,pathname:Mn([i,m.pathname]),pathnameBase:_3(Mn([i,m.pathnameBase])),route:f}),m.pathnameBase!=="/"&&(i=Mn([i,m.pathnameBase]))}return l}function Eo(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=v3(e.path,e.caseSensitive,e.end),a=t.match(n);if(!a)return null;let i=a[0],l=i.replace(/(.)\/+$/,"$1"),o=a.slice(1);return{params:r.reduce((u,{paramName:h,isOptional:m},f)=>{if(h==="*"){let v=o[f]||"";l=i.slice(0,i.length-v.length).replace(/(.)\/+$/,"$1")}const p=o[f];return m&&!p?u[h]=void 0:u[h]=(p||"").replace(/%2F/g,"/"),u},{}),pathname:i,pathnameBase:l,pattern:e}}function v3(e,t=!1,n=!0){Vn(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let r=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,o,s)=>(r.push({paramName:o,isOptional:s!=null}),s?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),a+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?a+="\\/*$":e!==""&&e!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,t?void 0:"i"),r]}function x3(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Vn(!1,`The URL path "${e}" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function gr(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function w3(e,t="/"){let{pathname:n,search:r="",hash:a=""}=typeof e=="string"?Vr(e):e;return{pathname:n?n.startsWith("/")?n:$3(n,t):t,search:S3(r),hash:D3(a)}}function $3(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(a=>{a===".."?n.length>1&&n.pop():a!=="."&&n.push(a)}),n.length>1?n.join("/"):"/"}function Hs(e,t,n,r){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function k3(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Vp(e){let t=k3(e);return t.map((n,r)=>r===t.length-1?n.pathname:n.pathnameBase)}function Kp(e,t,n,r=!1){let a;typeof e=="string"?a=Vr(e):(a={...e},Be(!a.pathname||!a.pathname.includes("?"),Hs("?","pathname","search",a)),Be(!a.pathname||!a.pathname.includes("#"),Hs("#","pathname","hash",a)),Be(!a.search||!a.search.includes("#"),Hs("#","search","hash",a)));let i=e===""||a.pathname==="",l=i?"/":a.pathname,o;if(l==null)o=n;else{let m=t.length-1;if(!r&&l.startsWith("..")){let f=l.split("/");for(;f[0]==="..";)f.shift(),m-=1;a.pathname=f.join("/")}o=m>=0?t[m]:"/"}let s=w3(a,o),u=l&&l!=="/"&&l.endsWith("/"),h=(i||l===".")&&n.endsWith("/");return!s.pathname.endsWith("/")&&(u||h)&&(s.pathname+="/"),s}var Mn=e=>e.join("/").replace(/\/\/+/g,"/"),_3=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),S3=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,D3=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function C3(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}var Qp=["POST","PUT","PATCH","DELETE"];new Set(Qp);var E3=["GET",...Qp];new Set(E3);var Oa=A.createContext(null);Oa.displayName="DataRouter";var Jo=A.createContext(null);Jo.displayName="DataRouterState";var Gp=A.createContext({isTransitioning:!1});Gp.displayName="ViewTransition";var z3=A.createContext(new Map);z3.displayName="Fetchers";var F3=A.createContext(null);F3.displayName="Await";var xn=A.createContext(null);xn.displayName="Navigation";var Ji=A.createContext(null);Ji.displayName="Location";var wn=A.createContext({outlet:null,matches:[],isDataRoute:!1});wn.displayName="Route";var Th=A.createContext(null);Th.displayName="RouteError";function A3(e,{relative:t}={}){Be(el(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:r}=A.useContext(xn),{hash:a,pathname:i,search:l}=tl(e,{relative:t}),o=i;return n!=="/"&&(o=i==="/"?n:Mn([n,i])),r.createHref({pathname:o,search:l,hash:a})}function el(){return A.useContext(Ji)!=null}function un(){return Be(el(),"useLocation() may be used only in the context of a <Router> component."),A.useContext(Ji).location}var Zp="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Xp(e){A.useContext(xn).static||A.useLayoutEffect(e)}function es(){let{isDataRoute:e}=A.useContext(wn);return e?W3():T3()}function T3(){Be(el(),"useNavigate() may be used only in the context of a <Router> component.");let e=A.useContext(Oa),{basename:t,navigator:n}=A.useContext(xn),{matches:r}=A.useContext(wn),{pathname:a}=un(),i=JSON.stringify(Vp(r)),l=A.useRef(!1);return Xp(()=>{l.current=!0}),A.useCallback((s,u={})=>{if(Vn(l.current,Zp),!l.current)return;if(typeof s=="number"){n.go(s);return}let h=Kp(s,JSON.parse(i),a,u.relative==="path");e==null&&t!=="/"&&(h.pathname=h.pathname==="/"?t:Mn([t,h.pathname])),(u.replace?n.replace:n.push)(h,u.state,u)},[t,n,i,a,e])}A.createContext(null);function P3(){let{matches:e}=A.useContext(wn),t=e[e.length-1];return t?t.params:{}}function tl(e,{relative:t}={}){let{matches:n}=A.useContext(wn),{pathname:r}=un(),a=JSON.stringify(Vp(n));return A.useMemo(()=>Kp(e,JSON.parse(a),r,t==="path"),[e,a,r,t])}function N3(e,t){return Yp(e,t)}function Yp(e,t,n,r){var x;Be(el(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:a}=A.useContext(xn),{matches:i}=A.useContext(wn),l=i[i.length-1],o=l?l.params:{};l&&l.pathname;let s=l?l.pathnameBase:"/";l&&l.route;let u=un(),h;if(t){let S=typeof t=="string"?Vr(t):t;Be(s==="/"||((x=S.pathname)==null?void 0:x.startsWith(s)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${s}" but pathname "${S.pathname}" was given in the \`location\` prop.`),h=S}else h=u;let m=h.pathname||"/",f=m;if(s!=="/"){let S=s.replace(/^\//,"").split("/");f="/"+m.replace(/^\//,"").split("/").slice(S.length).join("/")}let p=Hp(e,{pathname:f}),v=B3(p&&p.map(S=>Object.assign({},S,{params:Object.assign({},o,S.params),pathname:Mn([s,a.encodeLocation?a.encodeLocation(S.pathname).pathname:S.pathname]),pathnameBase:S.pathnameBase==="/"?s:Mn([s,a.encodeLocation?a.encodeLocation(S.pathnameBase).pathname:S.pathnameBase])})),i,n,r);return t&&v?A.createElement(Ji.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...h},navigationType:"POP"}},v):v}function M3(){let e=U3(),t=C3(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,a={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return A.createElement(A.Fragment,null,A.createElement("h2",null,"Unexpected Application Error!"),A.createElement("h3",{style:{fontStyle:"italic"}},t),n?A.createElement("pre",{style:a},n):null,null)}var R3=A.createElement(M3,null),I3=class extends A.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?A.createElement(wn.Provider,{value:this.props.routeContext},A.createElement(Th.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function O3({routeContext:e,match:t,children:n}){let r=A.useContext(Oa);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),A.createElement(wn.Provider,{value:e},n)}function B3(e,t=[],n=null,r=null){if(e==null){if(!n)return null;if(n.errors)e=n.matches;else if(t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let a=e,i=n==null?void 0:n.errors;if(i!=null){let s=a.findIndex(u=>u.route.id&&(i==null?void 0:i[u.route.id])!==void 0);Be(s>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(i).join(",")}`),a=a.slice(0,Math.min(a.length,s+1))}let l=!1,o=-1;if(n)for(let s=0;s<a.length;s++){let u=a[s];if((u.route.HydrateFallback||u.route.hydrateFallbackElement)&&(o=s),u.route.id){let{loaderData:h,errors:m}=n,f=u.route.loader&&!h.hasOwnProperty(u.route.id)&&(!m||m[u.route.id]===void 0);if(u.route.lazy||f){l=!0,o>=0?a=a.slice(0,o+1):a=[a[0]];break}}}return a.reduceRight((s,u,h)=>{let m,f=!1,p=null,v=null;n&&(m=i&&u.route.id?i[u.route.id]:void 0,p=u.route.errorElement||R3,l&&(o<0&&h===0?(V3("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),f=!0,v=null):o===h&&(f=!0,v=u.route.hydrateFallbackElement||null)));let x=t.concat(a.slice(0,h+1)),S=()=>{let g;return m?g=p:f?g=v:u.route.Component?g=A.createElement(u.route.Component,null):u.route.element?g=u.route.element:g=s,A.createElement(O3,{match:u,routeContext:{outlet:s,matches:x,isDataRoute:n!=null},children:g})};return n&&(u.route.ErrorBoundary||u.route.errorElement||h===0)?A.createElement(I3,{location:n.location,revalidation:n.revalidation,component:p,error:m,children:S(),routeContext:{outlet:null,matches:x,isDataRoute:!0}}):S()},null)}function Ph(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function L3(e){let t=A.useContext(Oa);return Be(t,Ph(e)),t}function q3(e){let t=A.useContext(Jo);return Be(t,Ph(e)),t}function j3(e){let t=A.useContext(wn);return Be(t,Ph(e)),t}function Nh(e){let t=j3(e),n=t.matches[t.matches.length-1];return Be(n.route.id,`${e} can only be used on routes that contain a unique "id"`),n.route.id}function H3(){return Nh("useRouteId")}function U3(){var r;let e=A.useContext(Th),t=q3("useRouteError"),n=Nh("useRouteError");return e!==void 0?e:(r=t.errors)==null?void 0:r[n]}function W3(){let{router:e}=L3("useNavigate"),t=Nh("useNavigate"),n=A.useRef(!1);return Xp(()=>{n.current=!0}),A.useCallback(async(a,i={})=>{Vn(n.current,Zp),n.current&&(typeof a=="number"?e.navigate(a):await e.navigate(a,{fromRouteId:t,...i}))},[e,t])}var Im={};function V3(e,t,n){Im[e]||(Im[e]=!0,Vn(!1,n))}A.memo(K3);function K3({routes:e,future:t,state:n}){return Yp(e,void 0,n,t)}function ra(e){Be(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Q3({basename:e="/",children:t=null,location:n,navigationType:r="POP",navigator:a,static:i=!1}){Be(!el(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let l=e.replace(/^\/*/,"/"),o=A.useMemo(()=>({basename:l,navigator:a,static:i,future:{}}),[l,a,i]);typeof n=="string"&&(n=Vr(n));let{pathname:s="/",search:u="",hash:h="",state:m=null,key:f="default"}=n,p=A.useMemo(()=>{let v=gr(s,l);return v==null?null:{location:{pathname:v,search:u,hash:h,state:m,key:f},navigationType:r}},[l,s,u,h,m,f,r]);return Vn(p!=null,`<Router basename="${l}"> is not able to match the URL "${s}${u}${h}" because it does not start with the basename, so the <Router> won't render anything.`),p==null?null:A.createElement(xn.Provider,{value:o},A.createElement(Ji.Provider,{children:t,value:p}))}function G3({children:e,location:t}){return N3(d0(e),t)}function d0(e,t=[]){let n=[];return A.Children.forEach(e,(r,a)=>{if(!A.isValidElement(r))return;let i=[...t,a];if(r.type===A.Fragment){n.push.apply(n,d0(r.props.children,i));return}Be(r.type===ra,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Be(!r.props.index||!r.props.children,"An index route cannot have child routes.");let l={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(l.children=d0(r.props.children,i)),n.push(l)}),n}var Gl="get",Zl="application/x-www-form-urlencoded";function ts(e){return e!=null&&typeof e.tagName=="string"}function Z3(e){return ts(e)&&e.tagName.toLowerCase()==="button"}function X3(e){return ts(e)&&e.tagName.toLowerCase()==="form"}function Y3(e){return ts(e)&&e.tagName.toLowerCase()==="input"}function J3(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function ev(e,t){return e.button===0&&(!t||t==="_self")&&!J3(e)}var _l=null;function tv(){if(_l===null)try{new FormData(document.createElement("form"),0),_l=!1}catch{_l=!0}return _l}var nv=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Us(e){return e!=null&&!nv.has(e)?(Vn(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Zl}"`),null):e}function rv(e,t){let n,r,a,i,l;if(X3(e)){let o=e.getAttribute("action");r=o?gr(o,t):null,n=e.getAttribute("method")||Gl,a=Us(e.getAttribute("enctype"))||Zl,i=new FormData(e)}else if(Z3(e)||Y3(e)&&(e.type==="submit"||e.type==="image")){let o=e.form;if(o==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let s=e.getAttribute("formaction")||o.getAttribute("action");if(r=s?gr(s,t):null,n=e.getAttribute("formmethod")||o.getAttribute("method")||Gl,a=Us(e.getAttribute("formenctype"))||Us(o.getAttribute("enctype"))||Zl,i=new FormData(o,e),!tv()){let{name:u,type:h,value:m}=e;if(h==="image"){let f=u?`${u}.`:"";i.append(`${f}x`,"0"),i.append(`${f}y`,"0")}else u&&i.append(u,m)}}else{if(ts(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=Gl,r=null,a=Zl,l=e}return i&&a==="text/plain"&&(l=i,i=void 0),{action:r,method:n.toLowerCase(),encType:a,formData:i,body:l}}function Mh(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}async function av(e,t){if(e.id in t)return t[e.id];try{let n=await import(e.module);return t[e.id]=n,n}catch(n){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function iv(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function lv(e,t,n){let r=await Promise.all(e.map(async a=>{let i=t.routes[a.route.id];if(i){let l=await av(i,n);return l.links?l.links():[]}return[]}));return hv(r.flat(1).filter(iv).filter(a=>a.rel==="stylesheet"||a.rel==="preload").map(a=>a.rel==="stylesheet"?{...a,rel:"prefetch",as:"style"}:{...a,rel:"prefetch"}))}function Om(e,t,n,r,a,i){let l=(s,u)=>n[u]?s.route.id!==n[u].route.id:!0,o=(s,u)=>{var h;return n[u].pathname!==s.pathname||((h=n[u].route.path)==null?void 0:h.endsWith("*"))&&n[u].params["*"]!==s.params["*"]};return i==="assets"?t.filter((s,u)=>l(s,u)||o(s,u)):i==="data"?t.filter((s,u)=>{var m;let h=r.routes[s.route.id];if(!h||!h.hasLoader)return!1;if(l(s,u)||o(s,u))return!0;if(s.route.shouldRevalidate){let f=s.route.shouldRevalidate({currentUrl:new URL(a.pathname+a.search+a.hash,window.origin),currentParams:((m=n[0])==null?void 0:m.params)||{},nextUrl:new URL(e,window.origin),nextParams:s.params,defaultShouldRevalidate:!0});if(typeof f=="boolean")return f}return!0}):[]}function ov(e,t){return sv(e.map(n=>{let r=t.routes[n.route.id];if(!r)return[];let a=[r.module];return r.imports&&(a=a.concat(r.imports)),a}).flat(1))}function sv(e){return[...new Set(e)]}function uv(e){let t={},n=Object.keys(e).sort();for(let r of n)t[r]=e[r];return t}function hv(e,t){let n=new Set;return new Set(t),e.reduce((r,a)=>{let i=JSON.stringify(uv(a));return n.has(i)||(n.add(i),r.push({key:i,link:a})),r},[])}function cv(e){let t=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return t.pathname==="/"?t.pathname="_root.data":t.pathname=`${t.pathname.replace(/\/$/,"")}.data`,t}function mv(){let e=A.useContext(Oa);return Mh(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function dv(){let e=A.useContext(Jo);return Mh(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var Rh=A.createContext(void 0);Rh.displayName="FrameworkContext";function Jp(){let e=A.useContext(Rh);return Mh(e,"You must render this element inside a <HydratedRouter> element"),e}function fv(e,t){let n=A.useContext(Rh),[r,a]=A.useState(!1),[i,l]=A.useState(!1),{onFocus:o,onBlur:s,onMouseEnter:u,onMouseLeave:h,onTouchStart:m}=t,f=A.useRef(null);A.useEffect(()=>{if(e==="render"&&l(!0),e==="viewport"){let x=g=>{g.forEach(y=>{l(y.isIntersecting)})},S=new IntersectionObserver(x,{threshold:.5});return f.current&&S.observe(f.current),()=>{S.disconnect()}}},[e]),A.useEffect(()=>{if(r){let x=setTimeout(()=>{l(!0)},100);return()=>{clearTimeout(x)}}},[r]);let p=()=>{a(!0)},v=()=>{a(!1),l(!1)};return n?e!=="intent"?[i,f,{}]:[i,f,{onFocus:ri(o,p),onBlur:ri(s,v),onMouseEnter:ri(u,p),onMouseLeave:ri(h,v),onTouchStart:ri(m,p)}]:[!1,f,{}]}function ri(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function pv({page:e,...t}){let{router:n}=mv(),r=A.useMemo(()=>Hp(n.routes,e,n.basename),[n.routes,e,n.basename]);return r?A.createElement(gv,{page:e,matches:r,...t}):(console.warn(`Tried to prefetch ${e} but no routes matched.`),null)}function bv(e){let{manifest:t,routeModules:n}=Jp(),[r,a]=A.useState([]);return A.useEffect(()=>{let i=!1;return lv(e,t,n).then(l=>{i||a(l)}),()=>{i=!0}},[e,t,n]),r}function gv({page:e,matches:t,...n}){let r=un(),{manifest:a,routeModules:i}=Jp(),{loaderData:l,matches:o}=dv(),s=A.useMemo(()=>Om(e,t,o,a,r,"data"),[e,t,o,a,r]),u=A.useMemo(()=>Om(e,t,o,a,r,"assets"),[e,t,o,a,r]),h=A.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let p=new Set,v=!1;if(t.forEach(S=>{var y;let g=a.routes[S.route.id];!g||!g.hasLoader||(!s.some($=>$.route.id===S.route.id)&&S.route.id in l&&((y=i[S.route.id])!=null&&y.shouldRevalidate)||g.hasClientLoader?v=!0:p.add(S.route.id))}),p.size===0)return[];let x=cv(e);return v&&p.size>0&&x.searchParams.set("_routes",t.filter(S=>p.has(S.route.id)).map(S=>S.route.id).join(",")),[x.pathname+x.search]},[l,r,a,s,t,e,i]),m=A.useMemo(()=>ov(u,a),[u,a]),f=bv(u);return A.createElement(A.Fragment,null,h.map(p=>A.createElement("link",{key:p,rel:"prefetch",as:"fetch",href:p,...n})),m.map(p=>A.createElement("link",{key:p,rel:"modulepreload",href:p,...n})),f.map(({key:p,link:v})=>A.createElement("link",{key:p,...v})))}function yv(...e){return t=>{e.forEach(n=>{typeof n=="function"?n(t):n!=null&&(n.current=t)})}}var eb=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{eb&&(window.__reactRouterVersion="7.0.1")}catch{}function vv({basename:e,children:t,window:n}){let r=A.useRef();r.current==null&&(r.current=i3({window:n,v5Compat:!0}));let a=r.current,[i,l]=A.useState({action:a.action,location:a.location}),o=A.useCallback(s=>{A.startTransition(()=>l(s))},[l]);return A.useLayoutEffect(()=>a.listen(o),[a,o]),A.createElement(Q3,{basename:e,children:t,location:i.location,navigationType:i.action,navigator:a})}var tb=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Rr=A.forwardRef(function({onClick:t,discover:n="render",prefetch:r="none",relative:a,reloadDocument:i,replace:l,state:o,target:s,to:u,preventScrollReset:h,viewTransition:m,...f},p){let{basename:v}=A.useContext(xn),x=typeof u=="string"&&tb.test(u),S,g=!1;if(typeof u=="string"&&x&&(S=u,eb))try{let O=new URL(window.location.href),Q=u.startsWith("//")?new URL(O.protocol+u):new URL(u),V=gr(Q.pathname,v);Q.origin===O.origin&&V!=null?u=V+Q.search+Q.hash:g=!0}catch{Vn(!1,`<Link to="${u}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let y=A3(u,{relative:a}),[$,F,P]=fv(r,f),E=kv(u,{replace:l,state:o,target:s,preventScrollReset:h,relative:a,viewTransition:m});function M(O){t&&t(O),O.defaultPrevented||E(O)}let I=A.createElement("a",{...f,...P,href:S||y,onClick:g||i?t:M,ref:yv(p,F),target:s,"data-discover":!x&&n==="render"?"true":void 0});return $&&!x?A.createElement(A.Fragment,null,I,A.createElement(pv,{page:y})):I});Rr.displayName="Link";var xv=A.forwardRef(function({"aria-current":t="page",caseSensitive:n=!1,className:r="",end:a=!1,style:i,to:l,viewTransition:o,children:s,...u},h){let m=tl(l,{relative:u.relative}),f=un(),p=A.useContext(Jo),{navigator:v,basename:x}=A.useContext(xn),S=p!=null&&Ev(m)&&o===!0,g=v.encodeLocation?v.encodeLocation(m).pathname:m.pathname,y=f.pathname,$=p&&p.navigation&&p.navigation.location?p.navigation.location.pathname:null;n||(y=y.toLowerCase(),$=$?$.toLowerCase():null,g=g.toLowerCase()),$&&x&&($=gr($,x)||$);const F=g!=="/"&&g.endsWith("/")?g.length-1:g.length;let P=y===g||!a&&y.startsWith(g)&&y.charAt(F)==="/",E=$!=null&&($===g||!a&&$.startsWith(g)&&$.charAt(g.length)==="/"),M={isActive:P,isPending:E,isTransitioning:S},I=P?t:void 0,O;typeof r=="function"?O=r(M):O=[r,P?"active":null,E?"pending":null,S?"transitioning":null].filter(Boolean).join(" ");let Q=typeof i=="function"?i(M):i;return A.createElement(Rr,{...u,"aria-current":I,className:O,ref:h,style:Q,to:l,viewTransition:o},typeof s=="function"?s(M):s)});xv.displayName="NavLink";var wv=A.forwardRef(({discover:e="render",fetcherKey:t,navigate:n,reloadDocument:r,replace:a,state:i,method:l=Gl,action:o,onSubmit:s,relative:u,preventScrollReset:h,viewTransition:m,...f},p)=>{let v=Dv(),x=Cv(o,{relative:u}),S=l.toLowerCase()==="get"?"get":"post",g=typeof o=="string"&&tb.test(o),y=$=>{if(s&&s($),$.defaultPrevented)return;$.preventDefault();let F=$.nativeEvent.submitter,P=(F==null?void 0:F.getAttribute("formmethod"))||l;v(F||$.currentTarget,{fetcherKey:t,method:P,navigate:n,replace:a,state:i,relative:u,preventScrollReset:h,viewTransition:m})};return A.createElement("form",{ref:p,method:S,action:x,onSubmit:r?s:y,...f,"data-discover":!g&&e==="render"?"true":void 0})});wv.displayName="Form";function $v(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function nb(e){let t=A.useContext(Oa);return Be(t,$v(e)),t}function kv(e,{target:t,replace:n,state:r,preventScrollReset:a,relative:i,viewTransition:l}={}){let o=es(),s=un(),u=tl(e,{relative:i});return A.useCallback(h=>{if(ev(h,t)){h.preventDefault();let m=n!==void 0?n:Hi(s)===Hi(u);o(e,{replace:m,state:r,preventScrollReset:a,relative:i,viewTransition:l})}},[s,o,u,n,r,t,e,a,i,l])}var _v=0,Sv=()=>`__${String(++_v)}__`;function Dv(){let{router:e}=nb("useSubmit"),{basename:t}=A.useContext(xn),n=H3();return A.useCallback(async(r,a={})=>{let{action:i,method:l,encType:o,formData:s,body:u}=rv(r,t);if(a.navigate===!1){let h=a.fetcherKey||Sv();await e.fetch(h,n,a.action||i,{preventScrollReset:a.preventScrollReset,formData:s,body:u,formMethod:a.method||l,formEncType:a.encType||o,flushSync:a.flushSync})}else await e.navigate(a.action||i,{preventScrollReset:a.preventScrollReset,formData:s,body:u,formMethod:a.method||l,formEncType:a.encType||o,replace:a.replace,state:a.state,fromRouteId:n,flushSync:a.flushSync,viewTransition:a.viewTransition})},[e,t,n])}function Cv(e,{relative:t}={}){let{basename:n}=A.useContext(xn),r=A.useContext(wn);Be(r,"useFormAction must be used inside a RouteContext");let[a]=r.matches.slice(-1),i={...tl(e||".",{relative:t})},l=un();if(e==null){i.search=l.search;let o=new URLSearchParams(i.search),s=o.getAll("index");if(s.some(h=>h==="")){o.delete("index"),s.filter(m=>m).forEach(m=>o.append("index",m));let h=o.toString();i.search=h?`?${h}`:""}}return(!e||e===".")&&a.route.index&&(i.search=i.search?i.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(i.pathname=i.pathname==="/"?n:Mn([n,i.pathname])),Hi(i)}function Ev(e,t={}){let n=A.useContext(Gp);Be(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=nb("useViewTransitionState"),a=tl(e,{relative:t.relative});if(!n.isTransitioning)return!1;let i=gr(n.currentLocation.pathname,r)||n.currentLocation.pathname,l=gr(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Eo(a.pathname,l)!=null||Eo(a.pathname,i)!=null}new TextEncoder;function zv(e,t,{checkForDefaultPrevented:n=!0}={}){return function(a){if(e==null||e(a),n===!1||!a.defaultPrevented)return t==null?void 0:t(a)}}function Fv(e,t){typeof e=="function"?e(t):e!=null&&(e.current=t)}function rb(...e){return t=>e.forEach(n=>Fv(n,t))}function Av(...e){return A.useCallback(rb(...e),e)}function Tv(e,t=[]){let n=[];function r(i,l){const o=A.createContext(l),s=n.length;n=[...n,l];const u=m=>{var g;const{scope:f,children:p,...v}=m,x=((g=f==null?void 0:f[e])==null?void 0:g[s])||o,S=A.useMemo(()=>v,Object.values(v));return N.jsx(x.Provider,{value:S,children:p})};u.displayName=i+"Provider";function h(m,f){var x;const p=((x=f==null?void 0:f[e])==null?void 0:x[s])||o,v=A.useContext(p);if(v)return v;if(l!==void 0)return l;throw new Error(`\`${m}\` must be used within \`${i}\``)}return[u,h]}const a=()=>{const i=n.map(l=>A.createContext(l));return function(o){const s=(o==null?void 0:o[e])||i;return A.useMemo(()=>({[`__scope${e}`]:{...o,[e]:s}}),[o,s])}};return a.scopeName=e,[r,Pv(a,...t)]}function Pv(...e){const t=e[0];if(e.length===1)return t;const n=()=>{const r=e.map(a=>({useScope:a(),scopeName:a.scopeName}));return function(i){const l=r.reduce((o,{useScope:s,scopeName:u})=>{const m=s(i)[`__scope${u}`];return{...o,...m}},{});return A.useMemo(()=>({[`__scope${t.scopeName}`]:l}),[l])}};return n.scopeName=t.scopeName,n}function ab(e){const t=A.useRef(e);return A.useEffect(()=>{t.current=e}),A.useMemo(()=>(...n)=>{var r;return(r=t.current)==null?void 0:r.call(t,...n)},[])}function Nv({prop:e,defaultProp:t,onChange:n=()=>{}}){const[r,a]=Mv({defaultProp:t,onChange:n}),i=e!==void 0,l=i?e:r,o=ab(n),s=A.useCallback(u=>{if(i){const m=typeof u=="function"?u(e):u;m!==e&&o(m)}else a(u)},[i,e,a,o]);return[l,s]}function Mv({defaultProp:e,onChange:t}){const n=A.useState(e),[r]=n,a=A.useRef(r),i=ab(t);return A.useEffect(()=>{a.current!==r&&(i(r),a.current=r)},[r,a,i]),n}function Rv(e){const t=A.useRef({value:e,previous:e});return A.useMemo(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}var Iv=globalThis!=null&&globalThis.document?A.useLayoutEffect:()=>{};function Ov(e){const[t,n]=A.useState(void 0);return Iv(()=>{if(e){n({width:e.offsetWidth,height:e.offsetHeight});const r=new ResizeObserver(a=>{if(!Array.isArray(a)||!a.length)return;const i=a[0];let l,o;if("borderBoxSize"in i){const s=i.borderBoxSize,u=Array.isArray(s)?s[0]:s;l=u.inlineSize,o=u.blockSize}else l=e.offsetWidth,o=e.offsetHeight;n({width:l,height:o})});return r.observe(e,{box:"border-box"}),()=>r.unobserve(e)}else n(void 0)},[e]),t}var ib=A.forwardRef((e,t)=>{const{children:n,...r}=e,a=A.Children.toArray(n),i=a.find(Lv);if(i){const l=i.props.children,o=a.map(s=>s===i?A.Children.count(l)>1?A.Children.only(null):A.isValidElement(l)?l.props.children:null:s);return N.jsx(f0,{...r,ref:t,children:A.isValidElement(l)?A.cloneElement(l,void 0,o):null})}return N.jsx(f0,{...r,ref:t,children:n})});ib.displayName="Slot";var f0=A.forwardRef((e,t)=>{const{children:n,...r}=e;if(A.isValidElement(n)){const a=jv(n);return A.cloneElement(n,{...qv(r,n.props),ref:t?rb(t,a):a})}return A.Children.count(n)>1?A.Children.only(null):null});f0.displayName="SlotClone";var Bv=({children:e})=>N.jsx(N.Fragment,{children:e});function Lv(e){return A.isValidElement(e)&&e.type===Bv}function qv(e,t){const n={...t};for(const r in t){const a=e[r],i=t[r];/^on[A-Z]/.test(r)?a&&i?n[r]=(...o)=>{i(...o),a(...o)}:a&&(n[r]=a):r==="style"?n[r]={...a,...i}:r==="className"&&(n[r]=[a,i].filter(Boolean).join(" "))}return{...e,...n}}function jv(e){var r,a;let t=(r=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:r.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=(a=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:a.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}var Hv=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"],lb=Hv.reduce((e,t)=>{const n=A.forwardRef((r,a)=>{const{asChild:i,...l}=r,o=i?ib:t;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),N.jsx(o,{...l,ref:a})});return n.displayName=`Primitive.${t}`,{...e,[t]:n}},{}),Ih="Switch",[Uv,Ok]=Tv(Ih),[Wv,Vv]=Uv(Ih),ob=A.forwardRef((e,t)=>{const{__scopeSwitch:n,name:r,checked:a,defaultChecked:i,required:l,disabled:o,value:s="on",onCheckedChange:u,form:h,...m}=e,[f,p]=A.useState(null),v=Av(t,$=>p($)),x=A.useRef(!1),S=f?h||!!f.closest("form"):!0,[g=!1,y]=Nv({prop:a,defaultProp:i,onChange:u});return N.jsxs(Wv,{scope:n,checked:g,disabled:o,children:[N.jsx(lb.button,{type:"button",role:"switch","aria-checked":g,"aria-required":l,"data-state":ub(g),"data-disabled":o?"":void 0,disabled:o,value:s,...m,ref:v,onClick:zv(e.onClick,$=>{y(F=>!F),S&&(x.current=$.isPropagationStopped(),x.current||$.stopPropagation())})}),S&&N.jsx(Qv,{control:f,bubbles:!x.current,name:r,value:s,checked:g,required:l,disabled:o,form:h,style:{transform:"translateX(-100%)"}})]})});ob.displayName=Ih;var sb="SwitchThumb",Kv=A.forwardRef((e,t)=>{const{__scopeSwitch:n,...r}=e,a=Vv(sb,n);return N.jsx(lb.span,{"data-state":ub(a.checked),"data-disabled":a.disabled?"":void 0,...r,ref:t})});Kv.displayName=sb;var Qv=e=>{const{control:t,checked:n,bubbles:r=!0,...a}=e,i=A.useRef(null),l=Rv(n),o=Ov(t);return A.useEffect(()=>{const s=i.current,u=window.HTMLInputElement.prototype,m=Object.getOwnPropertyDescriptor(u,"checked").set;if(l!==n&&m){const f=new Event("click",{bubbles:r});m.call(s,n),s.dispatchEvent(f)}},[l,n,r]),N.jsx("input",{type:"checkbox","aria-hidden":!0,defaultChecked:n,...a,tabIndex:-1,ref:i,style:{...e.style,...o,position:"absolute",pointerEvents:"none",opacity:0,margin:0}})};function ub(e){return e?"checked":"unchecked"}var hb=ob;function cb(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var a=e.length;for(t=0;t<a;t++)e[t]&&(n=cb(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function mb(){for(var e,t,n=0,r="",a=arguments.length;n<a;n++)(e=arguments[n])&&(t=cb(e))&&(r&&(r+=" "),r+=t);return r}const Oh="-",Gv=e=>{const t=Xv(e),{conflictingClassGroups:n,conflictingClassGroupModifiers:r}=e;return{getClassGroupId:l=>{const o=l.split(Oh);return o[0]===""&&o.length!==1&&o.shift(),db(o,t)||Zv(l)},getConflictingClassGroupIds:(l,o)=>{const s=n[l]||[];return o&&r[l]?[...s,...r[l]]:s}}},db=(e,t)=>{var l;if(e.length===0)return t.classGroupId;const n=e[0],r=t.nextPart.get(n),a=r?db(e.slice(1),r):void 0;if(a)return a;if(t.validators.length===0)return;const i=e.join(Oh);return(l=t.validators.find(({validator:o})=>o(i)))==null?void 0:l.classGroupId},Bm=/^\[(.+)\]$/,Zv=e=>{if(Bm.test(e)){const t=Bm.exec(e)[1],n=t==null?void 0:t.substring(0,t.indexOf(":"));if(n)return"arbitrary.."+n}},Xv=e=>{const{theme:t,prefix:n}=e,r={nextPart:new Map,validators:[]};return Jv(Object.entries(e.classGroups),n).forEach(([i,l])=>{p0(l,r,i,t)}),r},p0=(e,t,n,r)=>{e.forEach(a=>{if(typeof a=="string"){const i=a===""?t:Lm(t,a);i.classGroupId=n;return}if(typeof a=="function"){if(Yv(a)){p0(a(r),t,n,r);return}t.validators.push({validator:a,classGroupId:n});return}Object.entries(a).forEach(([i,l])=>{p0(l,Lm(t,i),n,r)})})},Lm=(e,t)=>{let n=e;return t.split(Oh).forEach(r=>{n.nextPart.has(r)||n.nextPart.set(r,{nextPart:new Map,validators:[]}),n=n.nextPart.get(r)}),n},Yv=e=>e.isThemeGetter,Jv=(e,t)=>t?e.map(([n,r])=>{const a=r.map(i=>typeof i=="string"?t+i:typeof i=="object"?Object.fromEntries(Object.entries(i).map(([l,o])=>[t+l,o])):i);return[n,a]}):e,e5=e=>{if(e<1)return{get:()=>{},set:()=>{}};let t=0,n=new Map,r=new Map;const a=(i,l)=>{n.set(i,l),t++,t>e&&(t=0,r=n,n=new Map)};return{get(i){let l=n.get(i);if(l!==void 0)return l;if((l=r.get(i))!==void 0)return a(i,l),l},set(i,l){n.has(i)?n.set(i,l):a(i,l)}}},fb="!",t5=e=>{const{separator:t,experimentalParseClassName:n}=e,r=t.length===1,a=t[0],i=t.length,l=o=>{const s=[];let u=0,h=0,m;for(let S=0;S<o.length;S++){let g=o[S];if(u===0){if(g===a&&(r||o.slice(S,S+i)===t)){s.push(o.slice(h,S)),h=S+i;continue}if(g==="/"){m=S;continue}}g==="["?u++:g==="]"&&u--}const f=s.length===0?o:o.substring(h),p=f.startsWith(fb),v=p?f.substring(1):f,x=m&&m>h?m-h:void 0;return{modifiers:s,hasImportantModifier:p,baseClassName:v,maybePostfixModifierPosition:x}};return n?o=>n({className:o,parseClassName:l}):l},n5=e=>{if(e.length<=1)return e;const t=[];let n=[];return e.forEach(r=>{r[0]==="["?(t.push(...n.sort(),r),n=[]):n.push(r)}),t.push(...n.sort()),t},r5=e=>({cache:e5(e.cacheSize),parseClassName:t5(e),...Gv(e)}),a5=/\s+/,i5=(e,t)=>{const{parseClassName:n,getClassGroupId:r,getConflictingClassGroupIds:a}=t,i=[],l=e.trim().split(a5);let o="";for(let s=l.length-1;s>=0;s-=1){const u=l[s],{modifiers:h,hasImportantModifier:m,baseClassName:f,maybePostfixModifierPosition:p}=n(u);let v=!!p,x=r(v?f.substring(0,p):f);if(!x){if(!v){o=u+(o.length>0?" "+o:o);continue}if(x=r(f),!x){o=u+(o.length>0?" "+o:o);continue}v=!1}const S=n5(h).join(":"),g=m?S+fb:S,y=g+x;if(i.includes(y))continue;i.push(y);const $=a(x,v);for(let F=0;F<$.length;++F){const P=$[F];i.push(g+P)}o=u+(o.length>0?" "+o:o)}return o};function l5(){let e=0,t,n,r="";for(;e<arguments.length;)(t=arguments[e++])&&(n=pb(t))&&(r&&(r+=" "),r+=n);return r}const pb=e=>{if(typeof e=="string")return e;let t,n="";for(let r=0;r<e.length;r++)e[r]&&(t=pb(e[r]))&&(n&&(n+=" "),n+=t);return n};function o5(e,...t){let n,r,a,i=l;function l(s){const u=t.reduce((h,m)=>m(h),e());return n=r5(u),r=n.cache.get,a=n.cache.set,i=o,o(s)}function o(s){const u=r(s);if(u)return u;const h=i5(s,n);return a(s,h),h}return function(){return i(l5.apply(null,arguments))}}const ze=e=>{const t=n=>n[e]||[];return t.isThemeGetter=!0,t},bb=/^\[(?:([a-z-]+):)?(.+)\]$/i,s5=/^\d+\/\d+$/,u5=new Set(["px","full","screen"]),h5=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,c5=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,m5=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,d5=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,f5=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Cn=e=>$a(e)||u5.has(e)||s5.test(e),Gn=e=>Ba(e,"length",$5),$a=e=>!!e&&!Number.isNaN(Number(e)),Ws=e=>Ba(e,"number",$a),ai=e=>!!e&&Number.isInteger(Number(e)),p5=e=>e.endsWith("%")&&$a(e.slice(0,-1)),me=e=>bb.test(e),Zn=e=>h5.test(e),b5=new Set(["length","size","percentage"]),g5=e=>Ba(e,b5,gb),y5=e=>Ba(e,"position",gb),v5=new Set(["image","url"]),x5=e=>Ba(e,v5,_5),w5=e=>Ba(e,"",k5),ii=()=>!0,Ba=(e,t,n)=>{const r=bb.exec(e);return r?r[1]?typeof t=="string"?r[1]===t:t.has(r[1]):n(r[2]):!1},$5=e=>c5.test(e)&&!m5.test(e),gb=()=>!1,k5=e=>d5.test(e),_5=e=>f5.test(e),S5=()=>{const e=ze("colors"),t=ze("spacing"),n=ze("blur"),r=ze("brightness"),a=ze("borderColor"),i=ze("borderRadius"),l=ze("borderSpacing"),o=ze("borderWidth"),s=ze("contrast"),u=ze("grayscale"),h=ze("hueRotate"),m=ze("invert"),f=ze("gap"),p=ze("gradientColorStops"),v=ze("gradientColorStopPositions"),x=ze("inset"),S=ze("margin"),g=ze("opacity"),y=ze("padding"),$=ze("saturate"),F=ze("scale"),P=ze("sepia"),E=ze("skew"),M=ze("space"),I=ze("translate"),O=()=>["auto","contain","none"],Q=()=>["auto","hidden","clip","visible","scroll"],V=()=>["auto",me,t],L=()=>[me,t],he=()=>["",Cn,Gn],oe=()=>["auto",$a,me],ie=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],be=()=>["solid","dashed","dotted","double","none"],ve=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],W=()=>["start","end","center","between","around","evenly","stretch"],J=()=>["","0",me],k=()=>["auto","avoid","all","avoid-page","page","left","right","column"],ne=()=>[$a,me];return{cacheSize:500,separator:":",theme:{colors:[ii],spacing:[Cn,Gn],blur:["none","",Zn,me],brightness:ne(),borderColor:[e],borderRadius:["none","","full",Zn,me],borderSpacing:L(),borderWidth:he(),contrast:ne(),grayscale:J(),hueRotate:ne(),invert:J(),gap:L(),gradientColorStops:[e],gradientColorStopPositions:[p5,Gn],inset:V(),margin:V(),opacity:ne(),padding:L(),saturate:ne(),scale:ne(),sepia:J(),skew:ne(),space:L(),translate:L()},classGroups:{aspect:[{aspect:["auto","square","video",me]}],container:["container"],columns:[{columns:[Zn]}],"break-after":[{"break-after":k()}],"break-before":[{"break-before":k()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...ie(),me]}],overflow:[{overflow:Q()}],"overflow-x":[{"overflow-x":Q()}],"overflow-y":[{"overflow-y":Q()}],overscroll:[{overscroll:O()}],"overscroll-x":[{"overscroll-x":O()}],"overscroll-y":[{"overscroll-y":O()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[x]}],"inset-x":[{"inset-x":[x]}],"inset-y":[{"inset-y":[x]}],start:[{start:[x]}],end:[{end:[x]}],top:[{top:[x]}],right:[{right:[x]}],bottom:[{bottom:[x]}],left:[{left:[x]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",ai,me]}],basis:[{basis:V()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",me]}],grow:[{grow:J()}],shrink:[{shrink:J()}],order:[{order:["first","last","none",ai,me]}],"grid-cols":[{"grid-cols":[ii]}],"col-start-end":[{col:["auto",{span:["full",ai,me]},me]}],"col-start":[{"col-start":oe()}],"col-end":[{"col-end":oe()}],"grid-rows":[{"grid-rows":[ii]}],"row-start-end":[{row:["auto",{span:[ai,me]},me]}],"row-start":[{"row-start":oe()}],"row-end":[{"row-end":oe()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",me]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",me]}],gap:[{gap:[f]}],"gap-x":[{"gap-x":[f]}],"gap-y":[{"gap-y":[f]}],"justify-content":[{justify:["normal",...W()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...W(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...W(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[y]}],px:[{px:[y]}],py:[{py:[y]}],ps:[{ps:[y]}],pe:[{pe:[y]}],pt:[{pt:[y]}],pr:[{pr:[y]}],pb:[{pb:[y]}],pl:[{pl:[y]}],m:[{m:[S]}],mx:[{mx:[S]}],my:[{my:[S]}],ms:[{ms:[S]}],me:[{me:[S]}],mt:[{mt:[S]}],mr:[{mr:[S]}],mb:[{mb:[S]}],ml:[{ml:[S]}],"space-x":[{"space-x":[M]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[M]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",me,t]}],"min-w":[{"min-w":[me,t,"min","max","fit"]}],"max-w":[{"max-w":[me,t,"none","full","min","max","fit","prose",{screen:[Zn]},Zn]}],h:[{h:[me,t,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[me,t,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[me,t,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[me,t,"auto","min","max","fit"]}],"font-size":[{text:["base",Zn,Gn]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",Ws]}],"font-family":[{font:[ii]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",me]}],"line-clamp":[{"line-clamp":["none",$a,Ws]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",Cn,me]}],"list-image":[{"list-image":["none",me]}],"list-style-type":[{list:["none","disc","decimal",me]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[g]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[g]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...be(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",Cn,Gn]}],"underline-offset":[{"underline-offset":["auto",Cn,me]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:L()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",me]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",me]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[g]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...ie(),y5]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",g5]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},x5]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[v]}],"gradient-via-pos":[{via:[v]}],"gradient-to-pos":[{to:[v]}],"gradient-from":[{from:[p]}],"gradient-via":[{via:[p]}],"gradient-to":[{to:[p]}],rounded:[{rounded:[i]}],"rounded-s":[{"rounded-s":[i]}],"rounded-e":[{"rounded-e":[i]}],"rounded-t":[{"rounded-t":[i]}],"rounded-r":[{"rounded-r":[i]}],"rounded-b":[{"rounded-b":[i]}],"rounded-l":[{"rounded-l":[i]}],"rounded-ss":[{"rounded-ss":[i]}],"rounded-se":[{"rounded-se":[i]}],"rounded-ee":[{"rounded-ee":[i]}],"rounded-es":[{"rounded-es":[i]}],"rounded-tl":[{"rounded-tl":[i]}],"rounded-tr":[{"rounded-tr":[i]}],"rounded-br":[{"rounded-br":[i]}],"rounded-bl":[{"rounded-bl":[i]}],"border-w":[{border:[o]}],"border-w-x":[{"border-x":[o]}],"border-w-y":[{"border-y":[o]}],"border-w-s":[{"border-s":[o]}],"border-w-e":[{"border-e":[o]}],"border-w-t":[{"border-t":[o]}],"border-w-r":[{"border-r":[o]}],"border-w-b":[{"border-b":[o]}],"border-w-l":[{"border-l":[o]}],"border-opacity":[{"border-opacity":[g]}],"border-style":[{border:[...be(),"hidden"]}],"divide-x":[{"divide-x":[o]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[o]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[g]}],"divide-style":[{divide:be()}],"border-color":[{border:[a]}],"border-color-x":[{"border-x":[a]}],"border-color-y":[{"border-y":[a]}],"border-color-s":[{"border-s":[a]}],"border-color-e":[{"border-e":[a]}],"border-color-t":[{"border-t":[a]}],"border-color-r":[{"border-r":[a]}],"border-color-b":[{"border-b":[a]}],"border-color-l":[{"border-l":[a]}],"divide-color":[{divide:[a]}],"outline-style":[{outline:["",...be()]}],"outline-offset":[{"outline-offset":[Cn,me]}],"outline-w":[{outline:[Cn,Gn]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:he()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[g]}],"ring-offset-w":[{"ring-offset":[Cn,Gn]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",Zn,w5]}],"shadow-color":[{shadow:[ii]}],opacity:[{opacity:[g]}],"mix-blend":[{"mix-blend":[...ve(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":ve()}],filter:[{filter:["","none"]}],blur:[{blur:[n]}],brightness:[{brightness:[r]}],contrast:[{contrast:[s]}],"drop-shadow":[{"drop-shadow":["","none",Zn,me]}],grayscale:[{grayscale:[u]}],"hue-rotate":[{"hue-rotate":[h]}],invert:[{invert:[m]}],saturate:[{saturate:[$]}],sepia:[{sepia:[P]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[n]}],"backdrop-brightness":[{"backdrop-brightness":[r]}],"backdrop-contrast":[{"backdrop-contrast":[s]}],"backdrop-grayscale":[{"backdrop-grayscale":[u]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[h]}],"backdrop-invert":[{"backdrop-invert":[m]}],"backdrop-opacity":[{"backdrop-opacity":[g]}],"backdrop-saturate":[{"backdrop-saturate":[$]}],"backdrop-sepia":[{"backdrop-sepia":[P]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[l]}],"border-spacing-x":[{"border-spacing-x":[l]}],"border-spacing-y":[{"border-spacing-y":[l]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",me]}],duration:[{duration:ne()}],ease:[{ease:["linear","in","out","in-out",me]}],delay:[{delay:ne()}],animate:[{animate:["none","spin","ping","pulse","bounce",me]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[F]}],"scale-x":[{"scale-x":[F]}],"scale-y":[{"scale-y":[F]}],rotate:[{rotate:[ai,me]}],"translate-x":[{"translate-x":[I]}],"translate-y":[{"translate-y":[I]}],"skew-x":[{"skew-x":[E]}],"skew-y":[{"skew-y":[E]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",me]}],accent:[{accent:["auto",e]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",me]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":L()}],"scroll-mx":[{"scroll-mx":L()}],"scroll-my":[{"scroll-my":L()}],"scroll-ms":[{"scroll-ms":L()}],"scroll-me":[{"scroll-me":L()}],"scroll-mt":[{"scroll-mt":L()}],"scroll-mr":[{"scroll-mr":L()}],"scroll-mb":[{"scroll-mb":L()}],"scroll-ml":[{"scroll-ml":L()}],"scroll-p":[{"scroll-p":L()}],"scroll-px":[{"scroll-px":L()}],"scroll-py":[{"scroll-py":L()}],"scroll-ps":[{"scroll-ps":L()}],"scroll-pe":[{"scroll-pe":L()}],"scroll-pt":[{"scroll-pt":L()}],"scroll-pr":[{"scroll-pr":L()}],"scroll-pb":[{"scroll-pb":L()}],"scroll-pl":[{"scroll-pl":L()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",me]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[Cn,Gn,Ws]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}},D5=o5(S5);function on(...e){return D5(mb(e))}const yb=A.forwardRef(({className:e,...t},n)=>N.jsx(hb,{ref:n,className:on("relative inline-flex h-[24px] w-[44px] cursor-pointer rounded-full transition-colors duration-200 ease-in-out","focus:outline-none focus-visible:ring focus-visible:ring-sky-500 focus-visible:ring-opacity-75","bg-sky-900","data-[state=checked]:bg-sky-600",e),...t}));yb.displayName=hb.displayName;const vb=A.createContext(void 0),C5=({children:e})=>{const[t,n]=A.useState(!1);return N.jsx(vb.Provider,{value:{fontToggle:t,setFontToggle:n},children:e})},xb=()=>{const e=A.useContext(vb);if(!e)throw new Error("useFontToggle must be used within a FontToggleProvider");return e},E5=()=>{const{fontToggle:e,setFontToggle:t}=xb();return Lf.useEffect(()=>{const n=window.document.documentElement;e?n.classList.add("alt-font"):n.classList.remove("alt-font")},[e]),N.jsx("nav",{className:"bg-sky-100 shadow",children:N.jsxs("div",{className:"container mx-auto px-4 h-16 flex items-center justify-between",children:[N.jsx(Rr,{to:"/",className:"text-xl font-bold text-sky-900 hover:text-sky-600",children:"Luna"}),N.jsxs("div",{className:"my-auto flex items-center justify-between",children:[N.jsx(yb,{className:"mr-4",checked:e,onCheckedChange:t}),N.jsx(Rr,{to:"/warp",className:"font-semibold text-sky-900 hover:text-sky-600 mx-4",children:"Warp"}),N.jsx(Rr,{to:"/show",className:"font-semibold text-sky-900 hover:text-sky-600 mx-4",children:"World"}),N.jsx(Rr,{to:"/about",className:"font-semibold text-sky-900 hover:text-sky-600 mx-4",children:"About"})]})]})})},z5=()=>N.jsx("footer",{className:"bg-sky-100 shadow mt-10",children:N.jsx("div",{className:"container mx-auto px-4 h-16 flex items-center justify-center",children:N.jsx("p",{className:"text-sky-800",children:"All original information in this website follow CC BY-SA 3.0 Unported creative commons license."})})});function qm(e,t){if(typeof e=="function")return e(t);e!=null&&(e.current=t)}function F5(...e){return t=>{let n=!1;const r=e.map(a=>{const i=qm(a,t);return!n&&typeof i=="function"&&(n=!0),i});if(n)return()=>{for(let a=0;a<r.length;a++){const i=r[a];typeof i=="function"?i():qm(e[a],null)}}}}var wb=A.forwardRef((e,t)=>{const{children:n,...r}=e,a=A.Children.toArray(n),i=a.find(T5);if(i){const l=i.props.children,o=a.map(s=>s===i?A.Children.count(l)>1?A.Children.only(null):A.isValidElement(l)?l.props.children:null:s);return N.jsx(b0,{...r,ref:t,children:A.isValidElement(l)?A.cloneElement(l,void 0,o):null})}return N.jsx(b0,{...r,ref:t,children:n})});wb.displayName="Slot";var b0=A.forwardRef((e,t)=>{const{children:n,...r}=e;if(A.isValidElement(n)){const a=N5(n),i=P5(r,n.props);return n.type!==A.Fragment&&(i.ref=t?F5(t,a):a),A.cloneElement(n,i)}return A.Children.count(n)>1?A.Children.only(null):null});b0.displayName="SlotClone";var A5=({children:e})=>N.jsx(N.Fragment,{children:e});function T5(e){return A.isValidElement(e)&&e.type===A5}function P5(e,t){const n={...t};for(const r in t){const a=e[r],i=t[r];/^on[A-Z]/.test(r)?a&&i?n[r]=(...o)=>{i(...o),a(...o)}:a&&(n[r]=a):r==="style"?n[r]={...a,...i}:r==="className"&&(n[r]=[a,i].filter(Boolean).join(" "))}return{...e,...n}}function N5(e){var r,a;let t=(r=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:r.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=(a=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:a.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}const jm=e=>typeof e=="boolean"?`${e}`:e===0?"0":e,Hm=mb,M5=(e,t)=>n=>{var r;if((t==null?void 0:t.variants)==null)return Hm(e,n==null?void 0:n.class,n==null?void 0:n.className);const{variants:a,defaultVariants:i}=t,l=Object.keys(a).map(u=>{const h=n==null?void 0:n[u],m=i==null?void 0:i[u];if(h===null)return null;const f=jm(h)||jm(m);return a[u][f]}),o=n&&Object.entries(n).reduce((u,h)=>{let[m,f]=h;return f===void 0||(u[m]=f),u},{}),s=t==null||(r=t.compoundVariants)===null||r===void 0?void 0:r.reduce((u,h)=>{let{class:m,className:f,...p}=h;return Object.entries(p).every(v=>{let[x,S]=v;return Array.isArray(S)?S.includes({...i,...o}[x]):{...i,...o}[x]===S})?[...u,m,f]:u},[]);return Hm(e,l,s,n==null?void 0:n.class,n==null?void 0:n.className)},$b=M5("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),ka=A.forwardRef(({className:e,variant:t,size:n,asChild:r=!1,...a},i)=>{const l=r?wb:"button";return N.jsx(l,{className:on($b({variant:t,size:n,className:e})),ref:i,...a})});ka.displayName="Button";const R5=({post:e})=>N.jsxs("div",{className:"bg-sky-100 rounded-lg shadow p-6 mb-6 mx-16",children:[N.jsx("h2",{className:`font-semibold text-sky-900
      text-xl
      sm:text-xl
      lg:text-2xl
      `,children:e.title}),N.jsxs("div",{className:`text-sky-900 mb-4
      text-xs
      sm:text-xs
      lg:text-sm
      `,children:[e.date," • ",e.author]}),N.jsx("p",{className:`text-sky-900 mb-4
      text-sm
      sm:text-sm
      lg:text-base
      `,children:e.excerpt}),N.jsx(Rr,{to:`/posts/${e.id}`,children:N.jsx(ka,{variant:"default",className:`font-semibold bg-sky-900 text-sky-100 hover:bg-sky-600 focus:outline-none
        text-sm
        sm:text-sm
        lg:text-base
        `,children:"Detail"})})]});/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I5=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),kb=(...e)=>e.filter((t,n,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===n).join(" ").trim();/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var O5={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B5=A.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:a="",children:i,iconNode:l,...o},s)=>A.createElement("svg",{ref:s,...O5,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:kb("lucide",a),...o},[...l.map(([u,h])=>A.createElement(u,h)),...Array.isArray(i)?i:[i]]));/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ns=(e,t)=>{const n=A.forwardRef(({className:r,...a},i)=>A.createElement(B5,{ref:i,iconNode:t,className:kb(`lucide-${I5(e)}`,r),...a}));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L5=ns("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q5=ns("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _b=ns("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j5=ns("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),Sb=({className:e,...t})=>N.jsx("nav",{role:"navigation","aria-label":"pagination",className:on("mx-auto flex w-full justify-center",e),...t});Sb.displayName="Pagination";const Db=A.forwardRef(({className:e,...t},n)=>N.jsx("ul",{ref:n,className:on("flex flex-row items-center gap-1",e),...t}));Db.displayName="PaginationContent";const Xl=A.forwardRef(({className:e,...t},n)=>N.jsx("li",{ref:n,className:on("",e),...t}));Xl.displayName="PaginationItem";const rs=({className:e,isActive:t,size:n="icon",...r})=>N.jsx("a",{"aria-current":t?"page":void 0,className:on($b({variant:t?"outline":"ghost",size:n}),e),...r});rs.displayName="PaginationLink";const Cb=({className:e,...t})=>N.jsxs(rs,{"aria-label":"Go to previous page",size:"default",className:on("gap-1 pl-2.5",e),...t,children:[N.jsx(L5,{className:"h-4 w-4"}),N.jsx("span",{children:"Previous"})]});Cb.displayName="PaginationPrevious";const Eb=({className:e,...t})=>N.jsxs(rs,{"aria-label":"Go to next page",size:"default",className:on("gap-1 pr-2.5",e),...t,children:[N.jsx("span",{children:"Next"}),N.jsx(q5,{className:"h-4 w-4"})]});Eb.displayName="PaginationNext";const H5=({posts:e,currentPage:t,totalPages:n,onPageChange:r})=>N.jsxs("div",{className:"space-y-6",children:[N.jsx("div",{children:e.map(a=>N.jsx(R5,{post:a},a.id))}),N.jsx("div",{className:"flex justify-center mt-8",children:N.jsx(Sb,{children:N.jsxs(Db,{className:"gap-2",children:[" ",N.jsx(Xl,{children:N.jsx(Cb,{onClick:()=>t>1&&r(t-1),className:on("select-none","min-w-9 h-9","bg-sky-100 hover:bg-sky-200","text-sky-900","rounded-md","flex items-center justify-center")})}),[...Array(n)].map((a,i)=>N.jsx(Xl,{className:"list-none",children:N.jsx(rs,{onClick:()=>r(i+1),className:on("select-none","min-w-9 h-9","bg-sky-100 hover:bg-sky-200","text-sky-900","rounded-md","flex items-center justify-center",t===i+1&&"bg-sky-900 text-sky-100 hover:bg-sky-800"),children:i+1})},i+1)),N.jsx(Xl,{children:N.jsx(Eb,{onClick:()=>t<n&&r(t+1),className:on("select-none","min-w-9 h-9","bg-sky-100 hover:bg-sky-200","text-sky-900","rounded-md","flex items-center justify-center")})})]})})})]}),Yl=[{id:1,title:"Test LATEX",date:"2023-10-01",excerpt:"Test LATEX",contentKey:"post1",author:"Tester",category:"Test"},{id:4,title:"[QC] Day 1 - Projective measure",date:"2024-12-10",excerpt:"QC Day 1 - Projective measure: Exercise 2.58 - 2.61",contentKey:"QC_1",author:"Me",category:"Quantum Computation"},{id:5,title:"[QC] Day 2 - Phase, Composite systems",date:"2024-12-10",excerpt:"QC Day 2 - Phase Composite systems",contentKey:"QC_2",author:"Me",category:"Quantum Computation"},{id:6,title:"[CD] Day 1 - Japanese sentence structure",date:"2024-12-11",excerpt:"CD Day 1 - Japanese sentence structure, yoroshiku, wo/ni/no, verb conjugation, teiru/tearu",contentKey:"CD_1",author:"私",category:"Cure Dolly"},{id:7,title:"[CD] Day 2 - Adjective",date:"2024-12-11",excerpt:"CD Day 2 - i/na adjectives, da/desu, noni, ender",contentKey:"CD_2",author:"私",category:"Cure Dolly"},{id:8,title:"[CD] Day 3 - mo",date:"2024-12-12",excerpt:"CD Day 3 - mo, negative, adjective conjugation, transitive/intransitive",contentKey:"CD_3",author:"私",category:"Cure Dolly"},{id:9,title:"[QC] Day 3 - POVM, superdense coding, density operator",date:"2024-12-13",excerpt:"QC Day 3 - POVM, some thoughts about it, superdense coding, density operator",contentKey:"QC_3",author:"Me",category:"Quantum Computation"},{id:10,title:"[CD] Day 4 - te-miru",date:"2024-12-12",excerpt:"CD Day 4 - te-miru, masu, causative/receptive, place",contentKey:"CD_4",author:"私",category:"Cure Dolly"},{id:11,title:"[QC] Day 4 - more density operator",date:"2024-12-16",excerpt:"QC Day 4 - more density operator",contentKey:"QC_3",author:"Me",category:"Quantum Computation"},{id:12,title:"[A0] Day 1 - Chapter 1",date:"2024-12-19",excerpt:"QC Day 1 - Chapter 1 exercise",contentKey:"A0_1",author:"Me",category:"Algebra Chapter 0"},{id:13,title:"[A0] Day 2 - Chapter 1, function between sets",date:"2024-12-21",excerpt:"QC Day 2 - function between sets",contentKey:"A0_2",author:"Me",category:"Algebra Chapter 0"},{id:14,title:"[EC] Day 1 -  THE SELECTION EFFECT AND THE SPEED OF LEARNING",date:"2024-12-23",excerpt:"EC Day 1 - the seletion effect and the speed of learning",contentKey:"EC_1",author:"Me",category:"Economy paper"},{id:15,title:"[EC] Day 2 -  The Good, The Bad and The Picky: Reference Dependence and the Reversal of Product Ratings",date:"2024-12-29",excerpt:"EC Day 2 - The Good, The Bad and The Picky: Reference Dependence and the Reversal of Product Ratings",contentKey:"EC_2",author:"Me",category:"Economy paper"},{id:16,title:"[EC] Day 3 - Stability Evaluation through Distributional Perturbation Analysis",date:"2025-1-15",excerpt:"[EC] Day 3 - Stability Evaluation through Distributional Perturbation Analysis",contentKey:"EC_3",author:"Me",category:"Economy paper"},{id:17,title:"[CD] Day 5 - te-oku",date:"2025-1-15",excerpt:"CD Day 5 - te-oku",contentKey:"CD_5",author:"私",category:"Cure Dolly"},{id:18,title:"[EC] Day 4 - Conformal Inverse Optimization",date:"2025-1-18",excerpt:"[EC] Day 4 - Conformal Inverse Optimization",contentKey:"EC_4",author:"Me",category:"Economy paper"},{id:19,title:"[EC] Day 5 - A Survey of Contextual Optimization Methods for Decision-Making under Uncertainty",date:"2025-1-21",excerpt:"[EC] Day 5 - A Survey of Contextual Optimization Methods for Decision-Making under Uncertainty",contentKey:"EC_5",author:"Me",category:"Economy paper"}],U5=({categories:e,isExpanded:t,onExpandedChange:n})=>{const r=es(),a=un();A.useEffect(()=>{localStorage.setItem("sidebarExpanded",JSON.stringify(t))},[t]);const l=new URLSearchParams(a.search).get("category"),o=s=>{r(s==="All"?"/":`/?category=${s}`)};return N.jsxs("div",{className:`
        fixed
        transition-all duration-300 ease-in-out transform
        bg-sky-100 shadow
        overflow-hidden
        ${t?"w-[250px] h-auto p-4 rounded-lg":"w-10 h-10 p-0 rounded-lg"}
      `,children:[N.jsx(ka,{variant:"ghost",size:"icon",onClick:()=>n(!t),className:`
          transition-all duration-300 ease-in-out transform
          font-semibold 
          hover:bg-sky-600 
          focus:outline-none
          text-xs
          sm:text-xs
          lg:text-sm
          bg-sky-100 
          text-sky-900
          ${t?"absolute right-2 top-2 w-8 h-8":"w-full h-full rounded-lg"}
        `,children:t?N.jsx(j5,{className:"h-4 w-4 text-sky-900"}):N.jsx(_b,{className:"h-4 w-4 text-sky-900"})}),N.jsxs("div",{className:`
        transition-all duration-300 ease-in-out transform
        ${t?"opacity-100 mt-8":"opacity-0 invisible h-0"}
      `,children:[N.jsx("h2",{className:`font-semibold text-sky-900 mb-4
        lg:text-xl
        sm:text-base
        `,children:"Categories"}),N.jsxs("ul",{className:"w-full pr-2",children:[N.jsx("li",{className:"mb-2",children:N.jsx(ka,{className:`w-full justify-start font-semibold hover:bg-sky-600 focus:outline-none
              text-xs
              sm:text-xs
              lg:text-sm
              ${l===null?"bg-sky-900 text-sky-100":"bg-sky-100 text-sky-900"}`,onClick:()=>o("All"),children:"All"})}),e.map(s=>N.jsx("li",{className:"mb-2",children:N.jsx(ka,{className:`w-full justify-start font-semibold hover:bg-sky-600 focus:outline-none text-left
                text-xs break-words whitespace-normal
                sm:text-xs sm:break-words sm:whitespace-normal 
                lg:text-sm lg:break-normal lg:whitespace-nowrap 
                ${l===s?"bg-sky-900 text-sky-100":"bg-sky-100 text-sky-900"}`,onClick:()=>o(s),children:s})},s))]})]})]})},Vs=5,W5=()=>{const e=un(),n=new URLSearchParams(e.search).get("category"),r=Array.from(new Set(Yl.map(f=>f.category)));A.useEffect(()=>{i(1)},[n]);const[a,i]=A.useState(1),[l,o]=A.useState(()=>{const f=localStorage.getItem("sidebarExpanded");return f?JSON.parse(f):!1}),s=n&&n!=="All"?Yl.filter(f=>f.category===n):Yl,u=Math.ceil(s.length/Vs),h=s.slice((a-1)*Vs,a*Vs),m=s.length>0;return N.jsxs("div",{className:"container mx-auto mt-10",children:[N.jsx("h1",{className:`font-bold mb-8 text-center text-sky-100
      text-5xl
      sm:text-5xl
      lg:text-6xl
      `,children:"This is Luna's world"}),N.jsxs("div",{className:"flex row-auto",children:[N.jsx("div",{className:`
          transition-all duration-300 ease-in-out
          ${l?"w-[250px]":"w-10"}
          mr-6
        `,children:N.jsx(U5,{categories:r,isExpanded:l,onExpandedChange:o},n)}),N.jsx("div",{className:`
          transition-all duration-300 ease-in-out
          flex-1
          ${l?"ml-0":"ml-4"}
        `,children:m?N.jsx(H5,{posts:h,currentPage:a,totalPages:u,onPageChange:i}):N.jsx("p",{className:"text-sky-100",children:"No posts found in this category."})})]})]})},V5=()=>N.jsxs("div",{className:"mx-auto w-1/2 mt-10 p-6 bg-sky-100 rounded-lg shadow",children:[N.jsx("h1",{className:"text-3xl font-bold mb-4 text-sky-900",children:"About"}),N.jsx("p",{className:"text-sky-900 leading-7",children:"Love is murderous utopia."})]}),K5=`# Exercise 1.1

Locate a discussion of Russell's paradox, and understand it.

---

## Answer

Let $R$ be the set of all sets that do not contain themselves.

Paradox.

# Exercise 1.2

Prove that if  $\\sim$  is a relation on a set  $S $,

then the corresponding family  $\\mathscr{P}_{\\sim} $ defined in  $\\S 1.5$

is indeed a partition of  $S$  :

that is, its elements are nonempty, disjoint, and their union is  $S$ . [§1.5]

---

## Proof

Nonempty: for each class, $x\\in\\left[x\\right]$

Disjoint: Suppose $z\\in \\left[x\\right]\\cap\\left[y\\right]$, then we have:

$z\\sim x, z\\sim y\\Rightarrow x\\sim y\\Rightarrow \\left[x\\right] = \\left[y\\right]$

Union: we can know every element is in some equivalence class.

---

# Exercise 1.3

Given a partition  $\\mathscr{P}$  on a set  $S$ ,

show how to define a relation  $\\sim$  on  $S $ such that  

$\\mathscr{P}$  is the corresponding partition. [§1.5]

---

## Answer

$x\\sim y \\Leftrightarrow \\exists P \\in \\mathscr{P} s.t. x\\in P , y\\in P$

---

# Exercise 1.4

How many different equivalence relations may be defined on the set $\\{1,2,3\\}$?

---

## Answer

5, $\\{\\{1,2,3\\}\\},\\{\\{1\\},\\{2,3\\}\\},\\{\\{2\\},\\{1,3\\}\\},\\{\\{3\\},\\{1,2\\}\\},\\{\\{1\\},\\{2\\},\\{3\\}\\}$

---

# Exercise 1.5

Give an example of a relation that is reflexive and symmetric but not transitive.

What happens if you attempt to use this relation to define a partition on the set?

(Hint: Thinking about the second question will help you answer the first one.)

---

## Answer

Let $R=\\{(a,a), (b,b), (c,c), (a,b), (b,a), (b,c), (c,b)\\}$

When we try to form equivalence classes:

$a$ and $c$ are indirectly connected through $b$,

but they are not directly related.

---

# Exercise 1.6

$\\triangleright $ Define a relation $ \\sim $ on the set $ \\mathbb{R} $ of real numbers 

by setting  $a \\sim b \\Longleftrightarrow b-a \\in   \\mathbb{Z} $.

Prove that this is an equivalence relation, 

and find a 'compelling' description for  $\\mathbb{R} / \\sim $. 

Do the same for the relation  $\\approx  $on the plane  $\\mathbb{R} \\times \\mathbb{R}$  defined by declaring  $\\left(a_{1}, a_{2}\\right) \\approx\\left(b_{1}, b_{2}\\right) \\Longleftrightarrow b_{1}-a_{1} \\in \\mathbb{Z}  $and  $b_{2}-a_{2} \\in \\mathbb{Z}$ . [§II.8.1, II.8.10]

---

## Proof

Reflectivity: $a - a = 0 \\in \\mathbb{Z}$

Symmetric: $b - a = c \\in \\mathbb{Z}, -c \\in \\mathbb{Z}, a-b\\in\\mathbb{Z}$

Transitivity: $b-a = x\\in\\mathbb{Z}, c-b = y\\in\\mathbb{Z}, y + x\\in\\mathbb{Z}$

$R/\\sim \\cong [0,1)$
`,Q5=`# Function between sets

function: from $A$ to $B$

graph: $\\Gamma_f := \\{(a,b)\\in A\\times B \\mid b = f(a)\\}\\subseteq A \\times B$

Requirement: $(\\forall a \\in A)(\\exists!b\\in B)\\quad(a,b)\\in\\Gamma_f$

- or: $(\\forall a \\in A)(\\exists!b\\in B)\\quad f(a) = b$

$f$ is a function from a set $A$ to a set $B$: $A \\xrightarrow{f} B $

$f$ on element $a\\in A$: $a\\mapsto f(a)$ 

collection of all functions from a set $A$ to a set $B$: $B^A$

identity function: $\\mathrm{id}_A : A\\rightarrow A$, $(\\forall a\\in A) \\mathrm{id}_A(a) = a$

subset function: $f(S) := \\{ b\\in B \\mid (\\exists a \\in A)b = f(a)\\}$

image: $f(A)$, image of $f$, $\\mathrm{im} f$, largest subset.

restriction: $f|_S := (\\forall s \\in S) : \\quad f|_S(s) = f(s)$

composition of functions: if $f: A\\rightarrow B, g: B\\rightarrow C$, $g\\circ f$:

- $(\\forall a\\in A) (g\\circ f) (a) := g(f(a))$

commute: two ways are same

associative: $h\\circ (g\\circ f) = (h\\circ g)\\circ f$

---

injective: $a' \\ne a''\\Rightarrow f(a')\\ne f(a'')$

- $f$ sends different elements to different elements

surjective: $(\\forall b\\in B)(\\exists a\\in A) b = f(a)$

- $f$ 'covers the whole of B', $\\mathrm{im} f = B$

bijective: both injective and surjective: $f: A \\xrightarrow \\sim B$ or $A\\cong B$

- $A$ and $B$ are ‘isomorphic’ sets
- sets $A$ and $B$ may be 'identified' through $f$

fiber of $f$ over $q$ : $f^{-1}(T)$ if $T = \\{q\\}$

---

monomorphism / monic : $f\\circ \\alpha' = f\\circ \\alpha' \\Rightarrow \\alpha ' = \\alpha''$ for all sets $Z$ and all functions $\\alpha', \\alpha'': Z\\rightarrow A$
`,G5=`# Quick review

が is the heart of the Japanese, every sentence has a が.

Sometimes が is invisible, it's called *zero particle*.

が marks the **subject** of the sentence. e.g.: I, She, He.

---

# よろしくお願いします

Directly translation: I beg your favor.

Actually: lower yourself and raise the person whom you are talking.

---

# を に と

## mutuality

を has the most non-mutuality, と has the most mutuality.

---

# Verb conjugation

一段動詞 always delete る

## i-stem

五段動詞 u -> i

＋ます formal version

＋たい want

＋そう 

＋noun -> new noun

## a-stem

五段動詞 u -> a (exception: かう -> かわ)

＋ない not

＋れる( られる for ichidan ) receptive (受身形) e.g. get bought, get heard

＋せる( させる for ichidan ) causative (使役形) allow/make someone to do something

## e-stem

五段動詞 u -> e

＋る( られる for ichidan ) potential (可能形) e.g. can hear, can speak

くる -> こられる

する -> できる

## o-stem

五段動詞 u -> o

＋う( よう for ichidan ) volitional (意向形) e.g. let's eat, let's hear

---

# ている vs てある

ている : cont present form / **did X and still be in state of X** (Being in state X of itself)

- ていた : cont past form
- ていない : cont negative present form
- ていなかった : cont negative past form

てある : (Being in state X because someone put it that way and left it so)

## ていく・てくる

ていく : go / take
てくる : come(back) / bring


`,Z5=`# い and な adjectives

## Fact 1: na adjectives are nouns

## Fact 2: i adjectives are close cousins to verbs

## Fact 3: i adjectives contains the da/desu ( = ) function

花があかい　・　花があかいです

花がきれいだ　・　花がきれいです

## Fact 4: な＝だ, な is connective form of the だ

---

小さくてかわいい

きれいで有名だ

---

# だ　です

COUPLER: A,Bだ / A,Bです => A = B

A, B: two nouns.

---

# のです

母が来るのです

-> 0 が　母が来る　の　です

母が来るの　= mother's coming

0 = it

-> mother's coming is it. / it is that mother is coming.

## usage

to answer question that not be asked

to ask question that imply the context

to reveal something unexpected

to command (it's time to XXX)---

# のに　なのに

のに : contrastive conjunction, imply an **unsatisfactory** reason

なのに : turn だ into な, then のに

---

## ender:　ね　よ　な　かな

ね : shared information, already known

よ : sharing information, not known, friendly

よね : sharing and then treating as shared

な : "sharing" feeling with self

かな : I wonder (か for question and な for self)

の : casual sentence ender

なの : だ can't be connected with の, な is connective form of だ

`,X5=`# も

も : adjective particle, including particle / as much as / even

誰も / 何も : not even anyone / anything -> nobody / nothing

誰でも / 何でも : で is だ・です, couple the 誰 and **zero noun** -> even it's anyone / anything

かもしれません : か question marker + も even　+ しれ potential form + ません negative

---

# ない, adjective conjugation

verb negative : u -> a + ない

i adjective negative: i -> ku + ない　( Remember i adjectives has だ form inside, so it has the て form)

i adjective past ( remember だ form inside, so it contains past form ) i ->かった

adjective to adverb : i -> ku

noun to adverb : + に

---

# に

i-stem of verb on its own is **noun**, can be the target of the に

i-stem of verb on its own can also connect with another verb

---

# compound noun

rendaku happens when two noun connected to make a compound-noun

---

# transitivity

自動詞 : self-move, e.g. 出る 負ける ある be

a-stem + る is 自動詞

他動詞 : other-move, e.g. 出す 負かす する do

す・せる ending is 他動詞

める・べる・てる ending is 他動詞

- e-stem + る flips the meaning 従う(shitagau): follow / 従える:  be accompanied by
`,Y5=`# あいだ

verb woking as adjective for あいだ : 落ちる間に

# てみる

do it and **see**

there's no doubt we can do it

we don't know the result

# ます

ます is a verb in itself, a helper verb

i-stem + ます

past : ました

negative ません

past negative ませんでした

# volitional 

だろう probably

でしょう probably

# と

しようとする we don't know whether we can do it, try to do it.

として : と + して

という : と + 言う

# causative / receptive

れる : helper verb, has different subject

水が犬に飲まれた

せる : helper verb, has different subject

犬を食べさせた

# place

これ : れ related to ある, a thing

この : の is class-marking の, something

こんな : な descriptive of a thing's quality, like this

こう : manner of being / doing, the way like this




`,J5=`### te iru/te aru

`,e6=`# LEARNING FROM REVIEWS: THE SELECTION EFFECT AND THE SPEED OF LEARNING

# 2 Environment

Product: unknown to both side

Rating system:

- Collect from previous customers
- provide a rating
- new customers observe it
- purchase with ex ante type
- ex post preference

## 2.1 Customers' Problem, Rating System

$Q\\in\\{0, 1\\}$: True quality of the product

$t\\in\\mathbb{N}$: new customerm arrive time

$u_t = \\theta_t + \\zeta_t + Q - p\\quad (1)$: **material utility** of customer $t$

- $\\theta_t$: ex ante type of the customer
  - independently continuous $F_\\theta$
- $\\zeta_t$: ex post idiosyncratic preference term
  - independently continuous $F_\\zeta$
  - sometimes combined $F_{\\theta, \\zeta}$
- $p$: price of the product
- $\\theta_t, \\zeta_t$: customer private info

Procedure:

- $t$ observe rating and $\\theta_t$
- whether to by
- if buy: experience **material utility**
- $r_t$: review
  - $-\\underline{K},\\dots,\\overline{K}$: reviews
  - $\\mathcal{R} = \\{-\\underline{K},\\dots,\\overline K \\}$
  - $\\overline K$: like, $-\\underline K $ : dislike
- $b_t$: purchase decision
- $r_t$: review decision
- $a_t\\in \\mathcal{R}\\cup \\{ N \\}$: action
  - $a_t = N$: no purchase ($b_t$ = 0)
- $\\mathcal A = \\mathcal R \\cup \\{ N \\}$: set of actions
- $h_t = \\{ a_1,\\dots,a_{t-1}\\}$: history ($h_1 = \\oslash$)
- $\\mathbf\\Omega$: rating system
  - $\\Omega_t$: rating avaliable to $t$

---

### Purchase decision

- $t$ observe $\\Omega_t$
- $B_t :\\Omega_t\\times\\mathbb R^3\\rightarrow\\{0, 1\\}$: purchase decision
  - rating system & ex ante type $\\theta_t$ & ex post idiosyncratic preference $\\zeta_t$ & price $p$
- $\\mathbf B = \\{ B_t\\} ^ \\infty_{t = 1}$: collection of purchase decision strategies
  - $B_t(\\Omega_t, \\theta_t) = 1\\quad$if and only if$\\quad \\theta_t + \\mathbb E \\left[\\zeta_t\\right] + q_t - p \\ge 0$: Bayes-Nash equilibrium
  - $q_t = \\mathbb P _{\\{(\\theta_S, \\zeta_S\\}_{S=1}^{t-1}}\\left[Q=1\\mid\\Omega_t\\right] \\quad$ <p id = "2">(2)</p>: the belief of $t$

## 2.2 Review decision

$\\lambda_{-\\underline K }\\le \\dots\\le \\lambda_{-1}\\le \\lambda_1\\le\\dots\\le\\lambda_{\\overline K} \\in \\mathbb R$: threshold

$$
r_{t}=\\left\\{\\begin{array}{ll}
-\\underline{K} & \\text { if } u_{t}<\\lambda_{-\\underline{K}}, \\\\
i & \\text { if } \\lambda_{i-1} \\leq u_{t}<\\lambda_{i}, -\\underline{K} < i < 0, \\\\
0 & \\text { if } \\lambda_{-1} \\leq u_{t}<\\lambda_{1}, \\\\
i & \\text { if } \\lambda_{i} \\leq u_{t}<\\lambda_{i+1}, 0 < i < \\overline{K}, \\\\
\\bar{K} & \\text { if } u_{t} \\geq \\lambda_{\\bar{K}} .
\\end{array}\\right.\\quad (3)
$$

---

#### Assumption 1 - Richness

$\\theta, \\zeta$, random variable, drawn from $\\left[\\underline \\theta, \\overline\\theta\\right], \\left[\\underline \\zeta, \\overline\\zeta\\right]$, so that

- $\\overline\\zeta + \\overline\\theta - p > \\lambda\\_{\\overline K}, $
- $\\underline\\zeta+\\overline\\theta - p + 1 < \\lambda_{-\\underline K}$

why $\\overline\\theta$ ?

- lower may not purchase
- $Q = 0$ for most favorable review, $Q = 1$ for least favorable review , these are not fully revealing ablout the quality

#### Remark 1

---

# 3 Full history

- $\\Omega_t = h_t$

## 3.1 Learning Dynamics

[(2)](#2) becomes:

$q_t = \\mathbb P _{\\{(\\theta_S, \\zeta_S\\}_{S=1}^{t-1}}\\left[Q=1\\mid h_t\\right]$

$l_t = \\dfrac{q_t}{1-q_t} = \\dfrac{\\mathbb P_{\\{(\\theta_S,\\zeta_S)\\}_{S=1}^{t-1}}[Q=1\\mid h_t]}{\\mathbb P_{\\{(\\theta_S,\\zeta_S)\\}^{t-1}_{S=1}}[Q=0\\mid h_t]}$ <p id = "4">(4)</p> : associated likelihood ratio

$\\pi(a;F_{\\theta,\\zeta},Q,q)$: probability of action $a\\in \\mathcal A$,

- given joint distribution of $\\theta, \\zeta$
- price $p$
- thesholds when true quality is $Q$, belief is $q$

$$
\\begin{array}{l}
\\pi\\left(a ; F_{\\theta, \\zeta}, Q, q\\right) \\\\
\\quad=\\left\\{\\begin{array}{ll}
\\mathbb{P}_{\\theta, \\zeta}[q+\\theta+\\mathbb{E}[\\zeta]-p<0], & \\text { for } a=N, \\\\
\\mathbb{P}_{\\theta, \\zeta}\\left[q+\\theta+\\mathbb{E}[\\zeta]-p \\geq 0, \\theta+\\zeta+Q-p<\\lambda_{-\\underline{K}}\\right], & \\text { for } a=-\\underline{K}, \\\\
\\mathbb{P}_{\\theta, \\zeta}\\left[q+\\theta+\\mathbb{E}[\\zeta]-p \\geq 0, \\lambda_{a-1} \\leq \\theta+\\zeta+Q-p<\\lambda_{a}\\right], & \\text { for }-\\underline{K} < a < 0, \\\\
\\mathbb{P}_{\\theta, \\zeta}\\left[q+\\theta+\\mathbb{E}[\\zeta]-p \\geq 0, \\lambda_{-1} \\leq \\theta+\\zeta+Q-p<\\lambda_{1}\\right], & \\text { for } a=0, \\\\
\\mathbb{P}_{\\theta, \\zeta}\\left[q+\\theta+\\mathbb{E}[\\zeta]-p \\geq 0, \\lambda_{a} \\leq \\theta+\\zeta+Q-p<\\lambda_{a+1}\\right], & \\text { for } 0 < a < \\bar{K}, \\\\
\\mathbb{P}_{\\theta, \\zeta}\\left[q+\\theta+\\mathbb{E}[\\zeta]-p \\geq 0, \\theta+\\zeta+Q-p \\geq \\lambda_{\\bar{K}}\\right], & \\text { for } a=\\bar{K} .
\\end{array}\\right.
\\end{array}
$$

$\\mathbf \\pi (F_{\\theta,\\zeta},Q,q) = (\\pi(a;F_{\\theta,\\zeta},Q,q): a\\in\\mathcal A)$: vector of probabilities

$$
\\begin{aligned}
l_{t} & =\\frac{q_{t}}{1-q_{t}}=\\frac{\\mathbb{P}_{\\left\\{\\left(\\theta_{s}, \\zeta_{s}\\right)\\right\\}_{s=1}^{t-1}}\\left[Q=1 \\mid h_{t}\\right]}{\\mathbb{P}_{\\left\\{\\left(\\theta_{s}, \\zeta_{s}\\right)\\right\\}_{s=1}^{t-1}}^{t-1}\\left[Q=0 \\mid h_{t}\\right]}=\\frac{\\mathbb{P}_{\\left\\{\\left(\\theta_{s}, \\zeta_{s}\\right) \\zeta_{s=1}^{t-1}\\right.}\\left[h_{t} \\mid Q=1\\right]}{\\mathbb{P}_{\\left\\{\\left(\\theta_{s}, \\zeta_{s}\\right)\\right\\}_{s=1}^{t-1}}^{t h}\\left[h_{t} \\mid Q=0\\right]} \\\\
& =\\prod_{s=1}^{t-1} \\frac{\\pi\\left(a_{s} ; F_{\\theta, \\zeta}, Q=1, q_{s}\\right)}{\\pi\\left(a_{s} ; F_{\\theta, \\zeta}, Q=0, q_{s}\\right)}
\\end{aligned}
$$

<p id = "5">(5)</p>

#### More detailed on (5)

$\\dfrac{\\mathbb P [Q=1\\mid h_t]}{\\mathbb P [Q=0 \\mid h_t]} = \\dfrac{\\mathbb P [h_t \\mid Q = 1]\\mathbb P [Q=1]}{\\mathbb P [h_t \\mid Q = 0]\\mathbb P [Q = 0]}$

using that $\\mathbb P [Q=  1] = \\mathbb P [Q = 0]$ we get the third equation

$\\mathbb P[h_t \\mid Q ] = \\prod_{s = 1}^{t -1} \\mathbb P [a_s \\mid Q ] $, notice that $h_t$ is composed from $a_s$,

$\\mathbb P [a_s \\mid Q ] = \\pi (a_s; F_{\\theta,\\zeta}, Q, q_s)$ with this we get the fourth equation.

---

$l_{t+1} = l_t \\times \\dfrac{\\pi(a_t; F_{\\theta, \\zeta}, Q = 1, q_t)}{\\pi (a_t; F_{\\theta, \\zeta}, Q = 0, q_t )}$

$l_{t+1} = l_t \\times \\dfrac{\\pi(a_t; F_{\\theta, \\zeta}, Q = 1, q_t)}{\\pi (a_t; F_{\\theta, \\zeta}, Q = 0, q_t )}, \\quad \\text{w.p. } \\pi(a_t; F_{\\theta,\\zeta}, Q, q_t), a\\in \\mathcal A \\text { for } t \\ge 1$

## 3.2 Complete learning

### Theorem 1:

If $\\overline\\theta + \\mathbb E [\\zeta] - p \\ge 0, q_1 \\in(0, 1)$, then $q_t\\rightarrow Q$ almost surely

Proof

$Z(a_t | l_t ) = \\dfrac{\\pi (a_t ; F_{\\theta, \\zeta}, Q = 1, q = q_t ) }{ \\pi ( a*t ; F*{\\theta, \\zeta}, Q = 0, q = q_t)}, \\forall a_t \\in \\mathcal A, $<p id = "A-1">(A-1)</p>

: likelihood ratio

#### Part 1 : when $\\overline \\theta + \\mathbb E [\\zeta] - p > 0$

$$
\\begin{aligned}
& \\mathbb{E}_{a \\sim \\pi\\left(F_{\\theta, \\zeta}, Q=0, q=q_{t}\\right)}\\left[Z\\left(a \\mid l_{t}\\right) \\mid h_{t}\\right] \\\\
& =\\mathbb{E}_{a \\sim \\pi\\left(F_{\\theta, \\zeta}, Q=0, q=q_{t}\\right)}\\left[\\frac{\\pi\\left(a ; F_{\\theta, \\zeta}, Q=1, q=q_{t}\\right)}{\\pi\\left(a ; F_{\\theta, \\zeta}, Q=0, q=q_{t}\\right)}\\right] \\\\
& =\\sum_{a \\in \\mathcal A }\\pi(F_{\\theta,\\zeta}, Q = 0, q = q_t)\\left[\\frac{\\pi\\left(a ; F_{\\theta, \\zeta}, Q=1, q=q_{t}\\right)}{\\pi\\left(a ; F_{\\theta, \\zeta}, Q=0, q=q_{t}\\right)}\\right] \\\\
& =\\sum_{a \\in \\mathcal{A}} \\pi\\left(a ; F_{\\theta, \\zeta}, Q=1, q=q_{t}\\right)\\\\
& =1 .
\\end{aligned}
$$

$$
\\begin{aligned}
&\\mathbb E [l_{t + 1} \\mid\\mathcal F_t]\\\\
&= \\mathbb E [l_t \\times Z(a_t\\mid l_t)\\mid \\mathcal F_t]\\\\
&=\\mathbb E[l_t \\mid \\mathcal F_t ] = l_t\\\\
&\\Rightarrow l_t\\text{ forms a martingale}
\\end{aligned}
$$

$l_t = \\dfrac{q_t}{1-q_t} < \\infty, l_t \\ge 0$

---

#### Martingale convergence theorem

**Statement:**

$\\{X_n\\}_{n=1}^\\infty$ is a submartingale (or martingale, or supermartingale) with respect to a filtration $\\{\\mathcal{F}_n\\}$.

Suppose one of the following conditions holds:

1. $\\{X_n\\}$ is bounded in $L^1$, i.e., $\\sup_n \\mathbb{E}[|X_n|] < \\infty$.

2. $\\{X_n\\}$ is bounded almost surely, i.e., there exists a constant $K$ such that $|X_n| \\leq K$ almost surely for all $n$.

3. $\\{X_n\\}$ is a non-negative supermartingale, i.e., $X_n \\geq 0$ almost surely for all $n$.

Then, $\\{X_n\\}$ converges almost surely (a.s.) to a limit $X_\\infty$ as $n \\to \\infty$.

If, in addition, $\\{X_n\\}$ is uniformly integrable, then $X_\\infty$ is integrable, and
$
\\lim_{n \\to \\infty} \\mathbb{E}[|X_n - X_\\infty|] = 0.
$

---

$l_t \\rightarrow l_\\infty$ almost surely

$$
\\begin{aligned}
& Z\\left(a=\\bar{K} \\mid l_{t}\\right) \\\\
& =\\frac{\\pi\\left(a=\\bar{K} ; F_{\\theta, \\zeta}, Q=1, q=q_{t}\\right)}{\\pi\\left(a=\\bar{K} ; F_{\\theta, \\zeta}, Q=0, q=q_{t}\\right)} \\\\
& =\\frac{\\mathbb{P}_{\\theta, \\zeta}\\left[q_{t}+\\theta+\\mathbb{E}[\\zeta]-p \\geq 0, \\theta+\\zeta+1-p \\geq \\lambda_{\\bar{K}}\\right]}{\\mathbb{P}_{\\theta, \\zeta}\\left[q_{t}+\\theta+\\mathbb{E}[\\zeta]-p \\geq 0, \\theta+\\zeta-p \\geq \\lambda_{\\bar{K}}\\right]} \\\\
& \\text{notice the over part is >= -1 and the below part is >= 0} \\\\
& =1+\\frac{\\mathbb{P}_{\\theta, \\zeta}\\left[q_{t}+\\theta+\\mathbb{E}[\\zeta]-p \\geq 0, \\theta+\\zeta-p-\\lambda_{\\bar{K}} \\in[-1,0)\\right]}{\\mathbb{P}_{\\theta, \\zeta}\\left[q_{t}+\\theta+\\mathbb{E}[\\zeta]-p \\geq 0, \\theta+\\zeta-p-\\lambda_{\\bar{K}} \\geq 0\\right]} \\\\
& \\text{let over part q is 0, below part q is 1}\\\\
& \\geq 1+\\frac{\\mathbb{P}_{\\theta, \\zeta}\\left[\\theta+\\mathbb{E}[\\zeta]-p \\geq 0, \\theta+\\zeta-p-\\lambda_{\\bar{K}} \\in[-1,0)\\right]}{\\mathbb{P}_{\\theta, \\zeta}\\left[1+\\theta+\\mathbb{E}[\\zeta]-p \\geq 0, \\theta+\\zeta-p-\\lambda_{\\bar{K}} \\geq 0\\right]},
\\end{aligned}
$$

Prove the upper part > 0 :

Let $\\Delta_1 = \\min \\{ 1, \\overline \\theta + \\mathbb E [\\zeta] - p\\} > 0$

$$
\\begin{array}{l}
\\mathbb{P}_{\\theta, \\zeta}\\left[\\theta+\\mathbb{E}[\\zeta]-p \\geq 0, \\theta+\\zeta-p-\\lambda_{\\bar{K}} \\in[-1,0)\\right] \\\\
\\quad \\stackrel{(a)}{\\geq} \\mathbb{P}_{\\theta, \\zeta}\\left[\\theta \\geq \\bar{\\theta}-\\Delta_{1}, p+\\lambda_{\\bar{K}}-\\theta-1 \\leq \\zeta \\leq p+\\lambda_{\\bar{K}}-\\theta\\right] \\\\
\\quad \\stackrel{(\\text { b) }}{>} 0,
\\end{array}
$$

<p id = "(A-2)">(A-2)</p>

for detailed (b), we have:

$$
\\begin{aligned}
&p+\\lambda_{\\overline K} - \\theta - 1 \\\\
&\\le p + \\lambda_{\\overline K} - \\overline \\theta + \\Delta_1 - 1\\\\
&\\le p + \\lambda_{\\overline K} - \\overline \\theta < \\overline \\zeta\\\\
\\\\
&p+\\lambda_{\\overline K} - \\theta - 1 \\\\
&\\ge p + \\lambda _{-\\underline K} - \\overline \\theta - 1 \\\\
&> \\underline \\zeta
\\end{aligned}
$$

(refer to [Assumption 1](#assumption-1---richness))

$\\min_l Z(a = \\overline K \\mid l) - 1 \\ge \\epsilon > 0$

$$
\\begin{aligned}
&\\mathbb P _{a\\sim \\mathbf \\pi (F_{\\theta,\\zeta}, Q = 0, q = q_t)}[|Z(a\\mid l_t )- 1 | \\ge \\epsilon \\mid l_t]\\\\
&\\ge \\pi ( a = \\overline K; F_{\\theta, \\zeta}, Q = 0, q = q_t)\\\\
&\\ge \\mathbb P_{\\theta, \\zeta}[q_t + \\theta + \\mathbb E[\\zeta] - p \\ge 0, \\theta + \\zeta - p \\ge \\lambda_{\\underline K }]\\\\
&\\ge \\mathbb P_{\\theta, \\zeta } [\\theta + \\mathbb [\\zeta] - p \\ge 0 , \\theta + \\zeta - p \\ge \\lambda_{\\overline K }]\\\\
&\\ge \\mathbb P_{\\theta, \\zeta } \\left[\\theta\\ge\\overline\\theta - \\dfrac{\\Delta _2}{2}, \\zeta\\ge \\overline\\zeta - \\dfrac{\\Delta_2}{2}\\right]\\\\
&> 0
\\end{aligned}
$$

where $\\Delta_2 = \\min\\{\\overline\\theta + \\mathbb E [\\zeta] - p,\\overline\\theta + \\overline\\zeta - p - \\lambda_{\\overline K }\\} > 0$

<p id = "(A-3)">(A-3)</p>

with [(A-2)](#(A-2)), [(A-3)](#(A-3)):
$$
\\begin{aligned}
&\\mathbb P_{\\{(\\theta_s,\\zeta_s)\\}^t_{s = 1}}[|l_{t+1} - l_t|\\ge\\delta\\epsilon]\\\\
&\\text{with } l_{t+1} = l_t\\cdot Z(\\cdot \\mid l_t)\\\\
& = \\mathbb E_{\\{(\\theta_s,\\zeta_s)\\}^t_{s = 1}}[\\mathbf 1\\{|l_t(Z(\\cdot\\mid l_t ) - 1)|\\ge \\delta\\epsilon\\}] \\\\
&\\ge  \\mathbb E_{\\{(\\theta_s,\\zeta_s)\\}^t_{s = 1}}[\\mathbf 1\\{l_t\\ge\\delta\\}\\mathbf 1 \\{|(Z(\\cdot\\mid l_t ) - 1)|\\ge \\epsilon\\}] \\\\
&=  \\mathbb E_{\\{(\\theta_s,\\zeta_s)\\}^t_{s = 1}}[\\mathbf 1\\{l_t\\ge\\delta\\}\\mathbb P_{\\theta, \\zeta } [\\mathbf |(Z(\\cdot\\mid l_t ) - 1)|\\ge \\epsilon \\mid l_t ]] \\\\
&\\ge\\eta\\mathbb E_{\\{(\\theta_s,\\zeta_s)\\}^t_{s = 1}} [ \\mathbf 1 \\{ l_t\\ge\\delta\\}] \\\\
&= \\eta\\mathbb E_{\\{(\\theta_s,\\zeta_s)\\}^t_{s = 1}} [l_t> \\delta]\\\\
\\end{aligned}
$$

$l_t\\rightarrow l_\\infty$ almost surely ( martingale convergence theorem ) $\\Rightarrow P_{\\{(\\theta_s,\\zeta_s)\\}^t_{s = 1}}[|l_{t+1} - l_t|\\ge\\delta\\epsilon]\\rightarrow 0 $

$\\Rightarrow P_{\\{(\\theta_s,\\zeta_s)\\}^t_{s = 1}}[|l_{t} > \\delta ]\\rightarrow 0$

$\\Rightarrow  l_t\\rightarrow 0 $ in probability

with $l_t\\rightarrow l_\\infty$ almost surely

$\\Rightarrow \\mathbb P[l_\\infty = 0] = 1$

notice $l_t = \\dfrac{q_t}{1 - q_t} \\Rightarrow q_t \\rightarrow 0$ almost surely $\\square$

this ends the part 1 proof

[return to part 1](#part-1--when-overline-theta--mathbb-e-zeta---p--0)

#### Part 2: when $\\overline\\theta + \\mathbb E[\\zeta] - p < 0$

Let $\\Delta = -(\\overline\\theta + \\mathbb E [\\zeta] - p) > 0$

notice $\\Delta > 1 \\Leftrightarrow \\overline + \\mathbb E[\\zeta] - p + q \\le -\\Delta + 1 < 0$, no purchase happen

$\\forall q \\ge \\Delta$, with [Assumption 1](#assumption-1---richness) and similar to [(A-2)](#(A-2))

$\\theta\\ge\\overline\\theta - ( 1 - \\Delta)$

$\\Rightarrow \\underline\\zeta < \\lambda_{-\\underline K} + p - \\overline\\theta - 1 \\le \\lambda_{-\\underline K } + p - \\theta - 1 \\le \\lambda_{\\overline K } + p - (\\overline\\theta - (1 - \\Delta)) - 1 < \\overline \\zeta$

$\\Rightarrow \\max _{q \\in[\\Delta, 1]} \\frac{\\mathbb{P}_{\\theta, \\zeta}\\left[\\theta+\\mathbb{E}[\\zeta]+q-p \\geq 0, \\theta+\\zeta+1-p \\leq \\lambda_{-\\underline{K}}\\right]}{\\mathbb{P}_{\\theta, \\zeta}\\left[\\theta+\\mathbb{E}[\\zeta]+q-p \\geq 0, \\theta+\\zeta-p \\leq \\lambda_{-\\underline{K}}\\right]}<1$

the over part and below part difference is bounded by:

$ \\mathbb{P}_{\\theta, \\zeta}\\left[\\theta \\geq \\bar{\\theta}-(1-\\Delta), \\lambda_{-\\underline{K}}+p-\\theta-1 \\leq \\zeta \\leq \\lambda_{-\\underline{K}}+p-\\theta\\right]>0 $

--- 

Theorem shows: 

- $ \\bar{\\theta}+\\mathbb{E}[\\zeta]-p \\geq 0 $ is sufficient for complete learning 
  - starting from any initial belief 
- when not hold:
  - for sufficiently pessimistic beliefs about $Q$(quality of product)
    - all customers stop buying it 

Notice:
- most positive assessment of expected utility: 
  - hightest ex ante valuation $\\bar \\theta $
  - $ \\bar{\\theta}+\\mathbb{E}[\\zeta]+q-p $
    - $ q $ is the public belief at the time of purchase

when: $ \\bar{\\theta}+\\mathbb{E}[\\zeta]-p<0 $

- notice whole will $<0$
  - once belief reach pessimistic level:
    - the most positive valuation stop purchasing
    - consequently beliefs remain stuck at $q$

#### Assumption 2: $ \\bar{\\theta}+\\mathbb{E}[\\zeta]-p>0 $ 

## 3.3 Speed of learning 

Characterize the speed of learning under full history 

Introduce KL(Kullback-Leibler) divergence 

#### Definition 1 : KL Divergence 

> $ D(\\boldsymbol{\\mu} \\| \\boldsymbol{\\nu})=\\sum_{i=1}^{m} \\mu_{i} \\log \\left(\\frac{\\mu_{i}}{\\nu_{i}}\\right) $

> - two strictly positive distributions :
>   - $ \\boldsymbol{\\mu}=\\left(\\mu_{1}, \\ldots\\right. $, $ \\left.\\mu_{m}\\right) $ 
>   - $ \\nu=\\left(\\nu_{1}, \\ldots, \\nu_{m}\\right) $
> - defined on a finite set $ \\{1, \\ldots, m\\}, \\mathrm{KL} $

#### Definition 2 : Speed of learning 

> For a rating system with exponentially fast (complete) learning:
> - $ \\lim _{t \\rightarrow \\infty} \\frac{1}{t} \\log q_{t} $ : the speed of learning 
>   - when $ Q=0 $
> - $ \\lim _{t \\rightarrow \\infty} \\frac{1}{t} \\log (1- q_{t} )$
>   - when $ Q=1 $
> -  a rating system has faster learning than another one :
>   - speed of learning is greater for both $Q = 0$ and $Q = 1$

#### Theorem 2: 

> Suppose:
> -  Assumptions 1 and 2 hold 
> - Then : learning is exponentially fast
>   - that is: $ q_{t} $ almost surely converges exponentially to $ Q $
> 
> For $Q = 0$: almost sure have:
> - $ \\lim _{t \\rightarrow \\infty} \\frac{1}{t} \\log q_{t}=-D\\left(\\pi\\left(F_{\\theta, \\zeta}, Q=0, q=0\\right) \\| \\boldsymbol{\\pi}\\left(F_{\\theta, \\zeta}, Q=1, q=0\\right)\\right) $
> For $Q = 1$: almost sure have:
> $ \\lim _{t \\rightarrow \\infty} \\frac{1}{t} \\log \\left(1-q_{t}\\right)=-D\\left(\\pi\\left(F_{\\theta, \\zeta}, Q=1, q=1\\right) \\| \\pi\\left(F_{\\theta, \\zeta}, Q=0, q=1\\right)\\right) $

Tell us:

Learning under full history:

- exponentially fast 
- is governed by the **KL** divergence between:
  - probability distribution of possible actions (i.e., $ a \\in \\mathcal{A} $ )
    - when the underlying quality is $ Q $
    - public belief is $q = Q $
  - and the probability distribution
    - when underlying quality is $1-Q $
    - still $q=Q$

Three components to intuition:

-  the ability of users to overcome the selection effect and combine (the independent components of) past reviews
   -  can achieve because: they know the distribution of
past reviews and can draw the correct inferences from them
- the speed of learning is given by KL divergence is intuitive as well
  - think of distinguishing $ Q=0 $ from $ Q=1 $ as a binary hypothesis testing problem 
  -  The best error exponent for a binary hypothesis testing problem from independently-drawn samples is given: 
     -  by the KL divergence between the probability distributions of these samples conditional on the two hypotheses
- both probability distributions in the KL divergence condition on $q=Q$
   -  because: under full history, each customer correctly reasons about previous users’ beliefs, which are converging to $Q$
   -  enables the effective filtering out of selection effect


## 3.4 The Selection Effect 

Because : 

the composition of customers purchasing the product :
-  influenced by information at time $t$ (summarized by $q_t$)

Then :

the distribution of reviews depends on this information. 

For example:

with full history, when the public belief $q_t $ is very low:
- only customers with very high $\\theta $ purchase
- these customers are much more likely to enjoy a high material utility 
-  leave a positive review than the
average customer

### Example 1 : 

> A rating system : 
>
> $ p=0, \\zeta=0, \\theta \\sim \\mathcal{U}[-1,1] , Q=0 $
> 
> When $ Q+\\theta \\geq 0 $
> - leave a positive review ("like")
> 
> Suppose:
> - $ q \\approx 1 $
>
> then all customers purchase 
> - because: $ \\theta+q \\approx \\theta+1 $ greater than zero 
>
> Then :
>
>  ex ante valuation of customers who have purchased the product : 
> - uniformaly distributed over $[-1, 1]$
> - half is positive 
>
> In contrast : 
>
> $ q \\approx 0 $
>
> - only customers with positive $\\theta $ purchase the product
> - conditional distribution of ex ante valuations is uniform over $[0, 1]$ 
> - all reviews will be positive

Selection effect impact the speed of learning:

Suppose:

that customer $ t $ (in addition to $ h_{t} $ ) observes the ex ante valuation of previous customers :

- $ \\theta_{s} $ for $ s=1, \\ldots, t-1 $

In this setting:

- extra information remove selection effect 
  - because: current customers can condition on past customers' valuation 
  - learning is faster 
  - extra information regarding distribution of previous customers' preferences increases the speed of learning 

# 4 Summary statistics 

Characterize the conditions for:
- complete learning
- speed for more realistic rating system 
  - where platform provides summary statistics of reviews
  - by past customers

## 4.1 Learning Dynamics 

Summary statistics will not see full history 

- only observe a vector of statistics $\\mathbb S $ 
  - include the fraction of review in a subset of all review 

Formally:

$T$ : a nonempty subset

- of all possible actions $\\mathcal A $

a partition of $T $: A rating system $ \\left\\{T_{1}, \\ldots, T_{m}\\right\\} $

- i.e. $ T=\\bigcup_{i=1}^{m} T_{i} $ and $ T_{i} \\cap T_{j}=\\emptyset, i \\neq j \\in[m] $

- such that:
  - for any $i>j $:
  - reviews in $ T_{i} $ are more positive than the reviews in the set $ T_{j} $

$\\tau $: the times $ t $ at which an action in $ T $ occurs

- $\\tau $ will be the number of reviews left so far 

So:

-  customers observe the number of actions in the
set $T $
- know their own $\\tau $
- for user $\\tau $:
  - rating system takes the form: $ \\Omega_{\\tau}=\\mathbf{S}_{\\tau-1} $
  - report information from the first $\\tau - 1 $ reviews

A summary statistic: $ \\mathbf{S}_{\\tau} \\in \\mathbb{R}^{m} $ with its $ i $ th entry representing fraction of past reviews in $ T_{i} $

that is :

$ \\mathbf{S}_{\\tau}(i)=\\frac{1}{\\tau} \\sum_{s=1}^{\\tau} \\mathbf{1}\\left\\{a_{s} \\in T_{i}\\right\\}, \\quad i \\in[m] $

Examples: 

- The fractions of each one of $ \\underline{K}+\\bar{K} $ reviews are reported.
  -  $ \\mathbf{S}_{\\tau} \\in \\mathbb{R}^{m} $ where $ m=\\underline{K}+\\bar{K} $
  -  $ T=\\mathcal{R} \\backslash\\{{0\\}}$,
  -  $ T_{1}=\\{-\\underline{K}\\}, \\ldots, T_{\\underline{K}}=\\{-1\\}$,
  -  $ T_{\\underline{K}+1}=\\{1\\}, \\ldots, T_{\\underline{K}+K}= $ $ \\{\\bar{K}\\} $.
-  Averages of the scores of past reviews
-  rating system reports only the fraction of reviews that give the highest score: 
   -  $ a=\\bar{K} $
   -   out of the available $ \\underline{K}+\\bar{K} $ options. 
   -   In this case, $ T=\\mathcal{R} \\backslash\\{0\\}$
   -   $ T_{2}=\\{\\bar{K}\\}$,
   -   $ T_{1}=T \\backslash T_{2} $ 
   -   the rating system is represented by: $ \\mathbf{S}_{\\tau} \\in \\mathbb{R}^{2} $ 
       -   $ \\mathbf{S}_{\\tau}(2)=\\frac{1}{\\tau} \\sum_{s=1}^{\\tau} \\mathbf{1}\\left\\{a_{s}=\\bar{K}\\right\\}, \\quad $
       -   $ \\quad \\mathbf{S}_{\\tau}(1)=1-\\mathbf{S}_{\\tau}(2)$


Key object: expectation of qality $Q$

- conditional on the information avaliable from the rating system at time $t$ : $q_t$

the relevant information is summarized by : vector $ \\mathbf{S}_{\\tau} $ after $ \\tau $ purchases
- written as: $ q_{\\tau}=\\mathbb{P}_{\\left\\{\\left(\\theta_{s}, \\zeta_{s}\\right)\\right\\}_{s=1}^{\\tau -1}}\\left[Q=1 \\mid \\mathbf{S}_{\\tau}\\right] $

In contrast to full history case:

$q_\\tau $ is not public belief because :

- $ \\mathbf{S}_{\\tau} $ is only observed by the customer making the $ \\tau $ th purchase

The likelihood ratio implied by belief $q_\\tau$ takes an analogous form to [(4)](#4) :

#### (7)

$ l_{\\tau}=\\frac{q_{\\tau}}{1-q_{\\tau}}=\\frac{\\mathbb{P}_{\\left\\{\\left(\\theta_{s}, \\zeta_{s}\\right)\\right\\}_{s=1}^{\\tau-1}}\\left[Q=1 \\mid \\mathbf{S}_{\\tau}\\right]}{\\mathbb{P}_{\\left\\{\\left(\\theta_{s}, \\zeta_{s}\\right)\\right\\}_{s=1}^{\\tau-1}}\\left[Q=0 \\mid \\mathbf{S}_{\\tau}\\right]}=\\frac{\\mathbb{P}_{\\left\\{\\left(\\theta_{s}, \\zeta_{s}\\right)\\right)_{s=1}^{\\tau_{-1}-1}}\\left[\\mathbf{S}_{\\tau} \\mid Q=1\\right]}{\\mathbb{P}_{\\left\\{\\left(\\theta_{s}, \\zeta_{s}\\right)\\right\\}_{s=1}^{\\tau-1}}\\left[\\mathbf{S}_{\\tau} \\mid Q=0\\right]} $.

Because :

- future customers do not observe $ \\mathbf{S}_{\\tau} $ 
- cannot compute $ q_{\\tau} $ 

So:

the likelihood ratio $ l_{\\tau} $ is no longer a martingale

Then: 

we develop a different approach to study its asymptotic properties.


$ \\pi\\left(i ; F_{\\theta, \\zeta}, Q, q, T\\right)=\\mathbb{P}_{\\theta, \\zeta}\\left[a \\in T_{i} \\mid a \\in T, q, Q\\right], \\quad \\forall i \\in[m] $.

- the probability 
  - of observing an action profile $ a $ 
  - in the set $ T_{i} $ 
  - conditional on the action profile being in $ T $ 


#### (8)

$ \\mathbf{S}_{\\tau+1}=\\frac{\\tau}{\\tau+1} \\mathbf{S}_{\\tau}+\\frac{1}{\\tau+1} \\mathbf{Y}_{\\tau+1}, \\quad \\forall \\tau \\geq 0 $

- The governing stochastic process 
  - for $ \\mathbf{S}_{\\tau} $ 
  - given the true quality $ Q $
- $ \\mathbf{Y}_{\\tau+1} \\in \\mathbb{R}^{m} $
  - $ \\mathbf{Y}_{\\tau+1}=\\mathbf{e}_{i}, \\quad $ w.p. $ \\pi\\left(i ; F_{\\theta, \\zeta}, Q, q_{\\tau+1}, T\\right) $
    - $ \\mathbf{e}_{i} \\in \\mathbb{R}^{m} $ 
    - is the $ i $ th canonical basis vector, $ \\mathbf{e}_{i}=(0, \\ldots, 0,1,0, \\ldots, 0) $

In computing [(7)](#7) :

- agents know  there may be unobserved actions
- but : because 
  - the information observed by agent who did not leave a review
  - is the same as the information available to the next agent
- Bayesian customers can consistently compute posterior probabilities

## 4.2 Negative and Positive Selection

Intuitively:

- negative selection corresponds to the case
  - belief $ q_{t} $ becomes more favorable to $ Q=1 $
  - reviews become less likely to be positive
  - "negative selected"
- Positive selection
  - as belief $ q_{t} $ becomes more favorable to $ Q=1 $
  - reviews are more likely to be
positive

### Definition 3:

> Consider a rating system with $ m $ review options:
> 
>  $ T_{1}, \\ldots, T_{m} $ such that
> 
> - for any $ i^{\\prime}<i$
> - $\\mathbb{P}\\left[a \\in \\bigcup_{j=i}^{m} T_{j} \\mid a \\in \\bigcup_{j=i^{\\prime}}^{m} T_{j}, q, Q=1\\right]> $ $ \\mathbb{P}\\left[a \\in \\bigcup_{j=i}^{m} T_{j} \\mid a \\in \\bigcup_{j=i^{\\prime}}^{m} T_{j}, q, Q=0\\right] .{ }^{12} $
> 
> The rating system has negative selection if
> - for any $ i^{\\prime}<i$, 
> - $ \\mathbb{P}\\left[a \\in \\bigcup_{j=i}^{m} T_{j} \\mid a \\in\\right. $ $ \\left.\\bigcup_{j=i^{\\prime}}^{m} T_{j}, q, Q\\right] $ is decreasing in $ q $
>   - that is, if the probability of more favorable reviews is decreasing in belief $ q $.
> The rating system has positive selection if
> - for any $ i^{\\prime}<i$,
> - $ \\mathbb{P}\\left[a \\in \\bigcup_{j=i}^{m} T_{j} \\mid a \\in\\right. $ $ \\left.\\bigcup_{j=i^{\\prime}}^{m} T_{j}, q, Q\\right] $ is increasing in $ q $
>   - that is, if the probability of more favorable reviews is increasing in belief $ q $.

In both:

as $q_t $ becomes more favorable:

-  customers with
lower ex ante valuations (lower $\\theta $) 
- more likely to purchase the product.

With negative selection:

-  these additional purchases decrease the likelihood of favorable reviews
  
With potsitive selection: 

- they increase the likelihood of favorable reviews

Negative or positive?

- depends on:
  - review options available to customers
  - the distribution of the random variables $\\theta  \\zeta$

Next proposition:

- present simple sufficient conditions for selection 
  -  in terms of the primitives of the model
  -  given a rating system with $ m=\\stackrel{\\rightharpoonup}{K}-\\ell+1 \\geq 2 $ review options 
     -  that reporting the fraction of all reviews
        -  reviews that are more favorable than $\\ell $
        -  for some $ \\ell \\in\\{-\\underline{K}+1, \\ldots, \\bar{K}-1\\} $
        -  i.e., the set $ T $ is $ \\{\\ell, \\ldots, \\bar{K}\\} $ and we have $ T_{1}=\\{\\ell\\}, \\ldots, T_{m}= $ $ \\{\\bar{K}\\}) 

### Proposition 1 : 


> For any $ \\ell \\in\\{-\\underline{K}+1, \\ldots, \\bar{K}-1\\} $
> 
>  consider a rating system that : 
> - reports the fraction of all reviews 
>   - are more favorable than $ \\ell $
> 
> If :
> 
> - $ \\theta $ has a uniform distribution 
> - and $ \\bar{\\theta} \\geq \\max \\left\\{p-\\mathbb{E}[\\zeta], \\lambda_{\\bar{K}}-\\underline{\\zeta}+p\\right\\} $, 
> 
> then :
> 
> for any $ i^{\\prime}<i,$
> 
> $ \\mathbb{P}\\left[a \\in \\bigcup_{j=i}^{m} T_{j} \\mid a \\in \\bigcup_{j=i^{\\prime}}^{m} T_{j}, q, Q=1\\right]> $ $ \\mathbb{P}\\left[a \\in \\bigcup_{j=i}^{m} T_{j} \\mid a \\in \\bigcup_{j=i^{\\prime}}^{m} \\bar{T}_{j}, q, Q=0\\right] $, 
> 
> and we have:

> 1. If the hazard rate $ \\frac{f_{\\zeta}(x)}{1-F_{\\zeta}(x)} $ is decreasing in $ x $,
> 
>  then :
> 
>  this rating system features negative selection.

> 2. If the hazard rate $ \\frac{f_{\\xi}(x)}{1-F_{\\xi}(x)} $ is increasing in $ x $
> 
>  then :
> 
>  this rating system features positive selection.

Example: 

### Example 2

> Negative Selection: 
> 
> Consider a rating system with : 
> 
> two review options 
> - reporting the fraction of the most favorable review: 
>   - $ \\bar{K} $ (i.e., $ T=\\{\\bar{K}-1, \\bar{K}\\}, T_{1}=\\{\\bar{K}-1\\} $, $ T_{2}=\\{\\bar{K}\\} $ with $ \\bar{K} \\geq 2 $ ).
> 
>  This rating system features negative selection when :
> 
> -  $ \\zeta $ has decreasing hazard rate (e.g., when the distribution of $ \\zeta $ is Pareto) 
> - $ \\theta $ is uniform with $ \\bar{\\theta} \\geq \\max \\left\\{p-\\mathbb{E}[\\zeta], \\lambda_{K}-\\underline{\\zeta}+p\\right\\} $.
> 
> Positive Selection: Consider the same rating system, but now suppose that :
> 
> - $ \\zeta $ has increasing hazard rate (e.g., when the distribution of $ \\zeta $ is uniform) 
> -  $ \\theta $ is again uniform with $ \\bar{\\theta} \\geq \\max \\left\\{p-\\mathbb{E}[\\zeta], \\lambda_{\\bar{K}}-\\zeta+p\\right\\} $.
> 
> A simpler, even if less realistic, example of positive selection :
> 
>  rating system with  two review options 
> - reports the fraction of "likes" among all customers 
> - that is
>   - $ T= $ $ \\{-1,0,1\\} \\cup\\{N\\} $ 
>   - $ T_{1}=\\{-1,0\\} \\cup\\{N\\}
>   -  T_{2}=\\{1\\} $ with any distribution of $ \\theta $ and $ \\zeta $

The selection effect is more pronounced when :

-  customers have access to sum-
mary statistics (rather than the full history as in the previous section)
  - because:  customers do not know the exact belief with which the previous actions were taken
- when there is negative selection
  - suppose the rating system exhibits negative selection and $Q=0$
  - as $q_t $ approaches 0:
    -  only customers with very high $\\theta $ purchase the product
    -  tend to leave more positive reviews
 -  makes it more difficult for $q_t $ to converge to 0 
 -  also explains:
    -  with positive selection: 
       -  the selection effect will be less burdensome for learning
       -  less harmful to the speed of learning
    -  because as $q_t $ approaches 0:
       -   more favorable reviews become less likely
       -   helps faster convergence to 0

## 4.3 Complete Learning

Define **separation**:

- it enables customers to filter out the selection effect for rating systems
  - with summary statistics

Intuitively: 

- requires : 
  - the distribution of at least one review option under $Q = 1$ :
    - to be nonoverlapping with its distribution under $Q=0 $

Formally:

### Definition 4-Saparation 

> A rating  system $ \\left(T_{1}, \\ldots, T_{m}\\right) $ satisfies the weak separation condition if :
> 
> - there exists a subset of reviews $ \\mathcal{S} \\subseteq[m] $ such that : 
>   - the range of functions $ \\sum_{i \\in \\mathcal{S}} \\pi\\left(i ; F_{\\theta, \\zeta}, Q=0, q, T\\right) $ and $ \\sum_{i \\in \\mathcal{S}} \\pi\\left(i ; F_{\\theta, \\zeta}, Q=1, q, T\\right) $ (as functions of $ q $ ) are weakly separate 
>
> formally either or:
> 
> - $ \\min _{q \\in[0,1]} \\sum_{i \\in \\mathcal{S}} \\pi\\left(i ; F_{\\theta, \\zeta}, Q=0, q, T\\right) \\geq \\max _{q \\in[0,1]} \\sum_{i \\in \\mathcal{S}} \\pi\\left(i ; F_{\\theta, \\zeta}, Q=1, q, T\\right) $
> - $ \\min _{q \\in[0,1]} \\sum_{i \\in \\mathcal{S}} \\pi\\left(i ; F_{\\theta, \\zeta}, Q=1, q, T\\right) \\geq \\max _{q \\in[0,1]} \\sum_{i \\in \\mathcal{S}} \\pi\\left(i ; F_{\\theta, \\zeta}, Q=0, q, T\\right) $

Strict separation condition if above inequalities strict 

### Theorem 3 : 

> Suppose Assumptions 1 and 2 hold,
>  consider a rating system with summary statistics.

> - The strict separation condition is sufficient for complete learning
> - For $m = 2$ reviews and negative selection:
>   - the weak separation condition is necessary and sufficient for complete learning

First part of theorem: 

- with summary statistics, the strict separation is sufficient for complete learning

Second part :

- establishes a partial converse to this result: 
  -  for rating systems with $m = 2$ reviews and negative selection
     -  the weak separation condition is necessary 
     -  being sufficient for complete learning

if [Assumption 2](#assumption-2--barthetamathbbezeta-p0-) did not hold

- purchases would stop with positive probability
- there would be no complete learning

We have a example:

- absence of weak separation 
  - will lead to failure of complete learning 
    - with negative Selection
  - but not necessarily with positive selection 

### Example 3

> Consider a rating system with two review options 
> 
> "like" and "dislike" denoted by $ \\bar{K} $ and $ -\\underline{K} $.
> 
>  Suppose : 
> - $ p=0 $ 
> -  a customer leaves review $ \\bar{K} $ when her material utility is positive. 
> 
> let the distribution of $ \\theta $ be close to : 
> -  a distribution with two equally likely point masses at $ -7 / 8 $ and $ 1 / 2 $
> 
>  the distribution of $ \\zeta $ 
> - close to four equally likely point masses at $ -7 / 4,-1 / 4,1 / 4 $, and $ 7 / 4 $ 

![Figure 1](EC_1/image.png)

for (a):

- presence of negative selection:
  - curves are downward sloping
- no weak separation :
  - the ranges of $ \\pi\\left(\\bar{K} ; F_{\\theta, \\zeta}, Q=0, q\\right) $ and $ \\pi\\left(\\bar{K} ; F_{\\theta, \\zeta}, Q=1, q\\right) $ being overlapping

for (b) :

- distribution of the number of “likes” among 1000 reviews for both $ Q=1 $ and $ Q=0 $
- complete learning fails
  - beliefs in the overlapping range customers cannot identify the underlying quality

If (in contrast) :

- rating system reports fraction of “likes” among all (potential) customers

Then : 

![Figure 2](EC_1/image_2.png)

- upward sloping
  -  positive selection
-  Even though weak separation again fails
   -  (the ranges of $ \\pi\\left(\\bar{K} ; F_{\\theta, \\zeta}, Q=0, q\\right) $ and $ \\pi\\left(\\bar{K} ; F_{\\theta, \\zeta}, Q=1, q\\right) $ are overlapping )
   -   the distributions of the number of “likes” among 1000 customers for$ Q = 1$ and $Q = 0$ are distinct 
       -   ensure complete learning 

The separation condition is stated :

- about $ \\pi\\left(i ; F_{\\theta, \\zeta}, Q=0, q, T\\right) $
  - probabilities of realization of different review combinations 

Next lemma:

- simple property of distribution of ex ante valuation 
  - sufficient for this condition to be satisfied 

### Lemma 1 : 

> Consider a rating system :
> 
>  reports the fraction of each review among all reviews
> 
>  that is : 
> 
> $ T=\\mathcal{R} $ 
> 
>  $ T_{1}=\\{-\\underline{K}\\}, \\ldots, T_{m}=\\{\\bar{K}\\} $ 
> 
> - $ m=\\bar{K}+\\underline{K}+1 $
> 
> For any distribution on $ \\zeta $ :
> 
>  if the hazard rate $ \\frac{f_{\\theta}(x)}{1-F_{\\theta}(x)} $ is monotonically increasing in $ x $ :
> 
> - then the strict separation condition holds.

A consequence :

for a rating system :
- reports the fraction of each review among all reviews 

strict separation is satisfied 

- for a wide range of distributions of $\\theta $
- including uniform and normal

## 4.4 Speed of Learning 

conditional on complete learning:

the speed of learning 

- under summary statistics

is governed by a KL divergence measure 

- closely related to the full history case

### Theorem 4:

> For a given rating system $ \\left(T_{1}, \\ldots, T_{m}\\right) $ : 
> 
> suppose Assumptions 1 and 2 and the strict separation condition hold.
> 
> Then learning is exponentially fast 
> 
> in particular :
> 
> for $ Q=0 $, we almost surely have :
>
> - $ \\lim _{\\tau \\rightarrow \\infty} \\frac{1}{\\tau} \\log q_{\\tau}=-D\\left(\\pi\\left(F_{\\theta, \\zeta}, Q=0, q=0, T\\right) \\| \\pi\\left(F_{\\theta, \\zeta}, Q=1, q=1, T\\right)\\right) $
>
> for $ Q=1 $, we almost surely have :
>
> - $ \\lim _{\\tau \\rightarrow \\infty} \\frac{1}{\\tau} \\log \\left(1-q_{\\tau}\\right)=-D\\left(\\pi\\left(F_{\\theta, \\zeta}, Q=1, q=1, T\\right) \\| \\pi\\left(F_{\\theta, \\zeta}, Q=0, q=0, T\\right)\\right) $

Intuition on KL divergence determines the speed of learning :

- similar to the full history case 

Difference :

- consider $Q=0$
- with full history :
  - the probability distribution under the alternative hypothesis was still conditioned on $q = 0$
  - now conditioned on $q=1$
- Difference is a consequence of the selection effect
- Under full history :
  -  when drawing inferences from past reviews
     -  customers know the public belief at each point
     -  correct for the selection effect
        -  by conditioning on the public belief
        -   at the time the review was left
 -   not possible with summary statistics :
   - forces a user into the following inference :
     - if $Q = 1$ : 
       -  the belief of all other customers (which she does not observe) is very likely to have also converged to $q=1$.


Specifically:

- consider customer $t$’s learning problem for some large $t$ :
- both full history and summary statistics settings :
- customer $t$ is facing a binary hypothesis testing problem 
- About the belief of customer $t$ regarding previous customers’ beliefs:
  - With full history:
    - observes their public beliefs and conditions on them
  - With summary statistics :
    -  does not observe their beliefs
    -  draws inferences about their belief
       -  conditioning on her expectation
       -  $q$ is converging to $Q$
    -  that is :
       -  $ q \\approx 0 $ under the null hypothesis 
       -  $ q \\approx 1 $ under the alternative hypothesis 
 
 This explains :

 - in [Theorem 4](#theorem-4) : 
   - the distributions being compared have $q = 0$ and $q = 1$
 - in [Theorem 2](#theorem-2) :
   - under full history, these distributions both condition on the same $q$ 

We will investigate :

- the implication of this difference 
- on the speed of learning 
- under full history and summary statistics 

in Section 5

### Remark 5

> Notice: 
> 
> the results in [Theorems 3](#theorem-3-) and [4](#theorem-4) apply 
> - even we consider more general summary statistics. 
> 
> In particular:
> 
>  a general summary statistics can be represented 
> 
> - by a mapping :
>   - from the fraction of each of the $ k=\\underline{K}+\\bar{K}+ 1$  reviews 
>   - among previous customers
> - that is:
> 
> - $ f: \\Delta^{k} \\rightarrow \\mathbb{R}^{m} $, 
>   - $ \\Delta^{k}=\\left\\{\\left(x_{1}, \\ldots, x_{k}\\right) \\in\\right. $ $ \\left.[0,1]^{k}: \\sum_{i=1}^{k} x_{i}=1\\right\\} $

# 5 Comparison of rating systems 

- start with a comparison of full history and summary statistics
- move to a characterization of :
  - different review options affect the speed of learning
- provide examples of fast and slow learning 
  - as the rating system is modified

## 5.1 Full history v.s. Summary Statistics 


Natural conjecture:

- full history  lead to faster learning

We show:

- when negative selection :
  - learning is indeed faster under full history
- when positive selection
  - in fact slower

### Proposition 2

> Consider a rating system with summary statistics : 
> 
> - reports the fraction of reviews in sets $ T_{1}, \\ldots, T_{m} $ 
>   - $ T=\\bigcup_{i=1}^{m} T_{i} $ 
> - that is, $ \\mathbf{S}_{\\tau}(i)=\\frac{1}{\\tau} \\sum_{s=1}^{\\tau} \\mathbf{1}\\left\\{a_{s} \\in T_{i}\\right\\} $ 
>   - $ \\tau $ is the number of reviews in $ T $ (i.e., $ \\tau=\\#\\{a \\in T\\}) $, 
> 
>  a rating system with full history : 
> 
>  reports the sequence of reviews in the sets $ T_{1}, \\ldots, T_{m} $. 
> 
> Suppose that [Assumptions 1](#assumption-1---richness) and [2](#assumption-2--barthetamathbbezeta-p0-) and the strict separation condition hold (so that there is complete learning under both full history and summary statistics).
> 
>  Then: 
> 
> 1. If the rating system has negative selection: 
> 
> - the speed of learning under full history is greater than under summary statistics.

> 2. If the rating system has positive selection
> 
> - the speed of learning under summary statistics is greater than under full history.

Intuition:

- the speed of learning is determined
  - by the problem of distinguishing :
  - the distribution of reviews under the true state
    - $Q = 1$
  - and their distribution under the alternative state
    - $Q = 0$
- As discussion in [Theorem 2](#theorem-2) and [4](#theorem-4)
  - under full history:
    - users observe the public belief
    - $q=1$
  - with summary statistics:
    - users infer that when $ Q=1 $, we must have $ q=1 $
    -  when $ Q=0 $, then we must have $q=0 $
-  Then :
   -  under full history:
      -  distinguish $ (Q=1, q=1) $ from $ (Q=0, q=1) $
   -  under summary statistics:
      -  distinguish $ (Q=1, q=1) $ from $ (Q=0, q=0) $
   -   exacerbates the selection effect, leading to slower learning
- Because :
-  under negative selection
   -  false favorable reviews are quite likely when $ q=0 $
      -  even if $ Q=0 $
      -   making the task of distinguishing the two distributions more difficult
-  under positive selection:
   -  the combination $ (Q=0, q=1) $ generates more false favorable reviews than $ (Q=0, q=  0 )$, 
      -  because: by the definition of positive selection
      -  favorable reviews are less likely
          -  when $q=0$
   -  consequently :
   -  distinguishing $ (Q=1, q=1) $ and $ (Q= $ $ 0, q=0) $ is easier than distinguishing $ (Q=1, q=1) $ from $ (Q=0, q=1) $
   -  leading to faster learning under summary statistics than full history.

This example illustrate the results of Proposition 2:

> EXAMPLE 4: Consider a rating system with two review options 
> 
> - $ T=\\{\\bar{K}-1, \\bar{K}\\} $
> - $ T_{1}=\\{\\bar{K}-1\\}, T_{2}=\\{\\bar{K}\\} $ 
>   - they reports the fraction of the most favorable review among the most favorable two review options
> - that is : $ S_{\\tau}(2)=\\frac{1}{\\tau} \\sum_{s=1}^{\\tau} \\mathbf{1}\\left\\{a_{s}=\\bar{K}\\right\\} $ 
>   - $ \\tau $ is the number of reviews in the set $ \\{\\bar{K}-1, \\bar{K}\\} $. 
> 
> Suppose :
> 
> - the distribution of $ \\theta $ is uniform 
> - $ \\bar{\\theta} \\geq \\max \\left\\{p-\\mathbb{E}[\\zeta], \\lambda_{\\bar{K}}-\\underline{\\zeta}+p\\right\\} $ 
> - the distribution of $ \\zeta $ is Pareto
> 
> so that : 
> 
> this rating system features negative selection (as in [Example 2](#example-2)). 
> 
> Suppose that:
> 
>  the conditions in Theorem 3 are satisfied 
> 
> so that :
> 
> there is complete learning under both full history and summary statistics. 
> 
> Then :
> 
>  the speed of learning under full history is greater than under summary statistics.
> 
>  However , with the same rating system but now $ \\zeta $ having a uniform distribution :
> 
>  there is positive selection
> 
>  the speed of learning under summary statistics is greater than full history.

## 5.2 Learning from refined rating systems 

Show **more refined** rating systems:

- faster learning 
  - both full history and under summary statistics

Consider :

- a rating system $ \\boldsymbol{\\Omega} $ 
- review options $ \\mathcal{R}=\\{-\\underline{K}, \\ldots, \\bar{K}\\} $ 
- thresholds $ \\Lambda=\\left\\{\\lambda_{-\\underline{K}}, \\ldots, \\lambda_{\\bar{K}}\\right\\} $

We say : $ \\boldsymbol{\\Omega}^{\\prime} $ is "coarser" than $ \\boldsymbol{\\Omega} $

If:

- the review options in $ \\boldsymbol{\\Omega}^{\\prime} $ are fewer 
- have thresholds $ \\Lambda^{\\prime}=\\left\\{\\lambda_{i_{1}}, \\ldots, \\lambda_{i_{m}}\\right\\} $ 
  -  $ i_{1}<\\cdots<i_{m} $ 
  -  $ i_{j} \\in \\mathcal{R} $ for $ j=1, \\ldots, m $.

### Proposition 3:

> Consider a rating system with either full history or summary statistics
>
> suppose Assumptions 1 and 2 and the strict separation condition hold (so that there is complete learning).
> 
>  Then : 
> 
> the speed of learning is always faster under a more refined rating
system.

Intuition:

- the more refined rating system $ \\boldsymbol{\\Omega} $:
  - provides strictly more information 
    - about the utility of previous users (and, therefore, their preferences) 
  - than the less refined $ \\boldsymbol{\\Omega}^{\\prime} $, 
  - thus makes it easier for customers to distinguish between : 
    - the probability distributions of reviews induced under the true state of nature 
    - and the alternative.


### Remark 3: 

> we extend [Proposition 3](#proposition-3) to rating systems :
> 
> - with general summary statistics (as mentioned in [Remark 2](#remark-2)). 
> 
> In particular:
> 
> for a general summary statistic $ f: \\Delta^{k} \\rightarrow \\mathbb{R}^{m} $ 
> 
> and a noninjective function $ g: \\mathbb{R}^{m} \\rightarrow \\mathbb{R}^{m^{\\prime}}$,
> 
> $ h=g \\circ f $ will represent a coarser summary statistic
> 
> Proposition B-5 shows that this general form of coarsening always reduces the speed of learning.

Application of [Proposition 3](#proposition-3) :


rating systems :

- report an average score of past
reviews 
- rather than reporting detailed fractions of reviews
  -  that fall in different categories.

When review thresholds remain unchanged:

- a rating system reporting average scores is less refined 
  -  than a rating system reporting detailed fractions

- and from [Proposition 3](#proposition-3):
  - leads to slower learning 

Another application  :

to rating systems that have "targeted information." 

In particular:

platforms such as Amazon offer information about:

- the reviews of groups of customers with certain characteristics. 

For instance:

for a book at the intersection of climate science and economics:

- Amazon separately depicts:
  -  reviews among customers who are interested in economics 
  - as well as reviews among customers who are interested in climate science.

Providing information on reviews by groups of customers is a form of refinement

we make this intuition precise in Appendix B.3.7

- establishes that this type of targeting always leads to faster learning.

Notice:

when the platform alters the review options:

- users’ thresholds might also change
-  reducing the informativeness of their reviews. 

For example:

- when the review options are noncomparable between two rating systems 

- or when additional options change the users’ review thresholds. 

The next example shows that:

- a greater number of review options may lead to slower learning.

### EXAMPLE 5: 

> Assume : 
> 
> - $ \\zeta $ is uniform over $ [-2,2]$, 
> - $ \\theta $ is uniform over $ [-1,1] $
> - $ p=0 $. 
> 
> Consider the following two rating systems: 
> 
> - (i) there are two review options $ \\{-1,1\\} $, with threshold 0
>   - that is: the review is 1 if and only if the utility is nonnegative
> - (ii) there are three review options $ \\{-2,-1,1\\} $, with thresholds $ -1 / 2 $ and $ 1 / 2 $
>   - that is: 
>      - the customer chooses -2 if her utility is below $ -1 / 2 $;
>      - $-1 $ if her utility is between $ -1 / 2 $ and $ 1 / 2 $; 
>      - 1 if her utility is above $ 1 / 2 $. 
> 
> It can be verified that :
> 
> - even though the second rating system has more review options
> 
> - it leads to slower learning.

## 5.3 Fast and Slow Learning from reviews 

we provide several examples illustrating :

how 

- different aspects of the rating system 
-  the extent of heterogeneity among customers 

affect the speed of
learning. 

Example B-1 illustrates:

how a small refinement of a rating system can lead to a very large change in the speed of learning 

- because the refinement provides a review option 
  -  has a much higher likelihood ratio when $Q = 1$ than when $Q = 0$

Examples B-2 and B-3 show that: 

an increase in ex post heterogeneity (a wider support or greater variance of $ \\zeta $ ):

- reduces the speed of learning 

because: reviews become less informative about the underlying quality of the product.

In particular: 

in Example B-3 we consider a setting 

-  both $ \\theta $ and $ \\zeta $ are normally distributed (with $ \\mathbb{E}[\\zeta]=0 $ and $ \\operatorname{var}(\\theta)=1 $ )
-  and then study :
   -  how the speed of learning changes 
   -  as a function of $ \\operatorname{var}(\\zeta) $ and $ \\mathbb{E}[\\theta] $. 
- The speed of learning: 
  -  is decreasing in $ \\operatorname{var}(\\zeta) $ 
  -  and increasing in $ \\mathbb{E}[\\theta] $. 

The intuition for the former result is that: 

- more disperse ex post preferences make reviews less informative. 

The intuition for the latter result is that:  

- higher $ \\mathbb{E}[\\theta] $ implies that:
  -  customers who purchase the product 
     -  are more likely to have a positive experience
  -  exacerbating the selection effect 
  -  slowing down learning.

# 6 Conclusion 

For interesting directions: 

- it is important to study how platform decisions, 
  - including:
    - design of rating systems and pricing
    - interact with user learning. 
  - We take a first step in this direction in Appendix B. 
  - In Appendix B.3.8, we show that:
    - if the platform would like to maximize participation by users, 
    - then it will always choose a rating system that:
      -  maximizes the speed of learning.
  -  In Appendix B.3.9, we show that:
     - our learning and speed of learning results generalize to some environments 
       - where the platform also chooses an endogenous sequence of prices 
       - to maximize revenue. 
- another interesting direction is to introduce more strategic interactions between users 
  - (our analysis of review decisions intended to influence future purchasing behavior in Appendix A.2.2 is one step in this direction). 
- it is important to:
  -  move beyond Bayesian learning 
  -  investigate what types of rating systems robustly aggregate information 
     -  when agents use simple learning rules. 
- a fruitful area for future research would be: 
  - to close the gap between :
    - theoretical models of learning 
    - and the burgeoning empirical literature 
      - on behavior in online markets
    - which highlights :
      - both the role of selection effects 
      - and user incentives.

`,t6=`# Model

$1$: consumers totalling mass

$E, NE$: Experts, Non-Experts

$\\psi\\in(0,1)$: the share of Experts

$1 - \\psi$: thetshare of Non-Experts

$q\\in [0, 1]$ product quality

$0$ prices normalized to 0

$F_E(q)$: Experts choose, a continuous, smooth cumulative distribution

$f_E(q)$ density

$F_{NE}(q), f_{NE}(q)$: Non-Experts

## Assumption 1 (Expertise and Choice)

$F_E(q)\\le F_{NE}(q), \\forall q\\in [0, 1]$: On average, Experts identify and purchase better products.

$\\dfrac{\\partial \\left(\\frac{f_E(q)}{f_{NE}(q)}\\right)}{\\partial q} > 0$: MLRP property

MLRP: Monotone Likelihood Ratio Property, the better will be better.

**Assumption 1** gives us:
- Experts experience higher quality on average
- the higher the product’s quality, the higher the share of its buyers that are Experts.

$r_E := \\int_{0}^{1}q\\mathrm d F_E(q), \\quad r_{NE}:= \\int_{0}^{1}q\\mathrm d F_{NE}(q)$: Choice Procedure (Also means Expectation)

$r_E > r_{NE}$

`,n6=`# Model Evaluation Framework

## OT-based stability evaluation criterion

### Definition 1 (OT discrepancy with moment constraints)

If:

$\\mathcal Z \\subseteq \\mathbb R^d, \\mathcal  W\\subseteq  \\mathbb R_+$: convex, closed sets, 

$c: (\\mathcal Z \\times \\mathcal  W )^2 \\rightarrow  \\mathbb R_+$: lower semicontinuous function,

$\\mathbb Q, \\mathbb  P \\in \\mathcal  P (\\mathcal Z\\times \\mathcal W) $


Then:

$\\mathrm M_c: \\mathcal P(\\mathcal  Z \\times \\mathcal  W )^2 \\rightarrow  \\mathbb R_+$ is a function, defined through

$$
\\mathrm{M}_{c}(\\mathbb{Q}, \\mathbb{P})=\\left\\{\\begin{array}{ll}
\\inf & \\mathbb{E}_{\\pi}[c((Z, W),(\\hat{Z}, \\hat{W}))] \\\\
\\text { s.t. } & \\pi \\in \\mathcal{P}\\left((\\mathcal{Z} \\times \\mathcal{W})^{2}\\right) \\\\
& \\pi_{(Z, W)}=\\mathbb{Q}, \\pi_{(\\hat{Z}, \\hat{W})}=\\mathbb{P} \\\\
& \\mathbb{E}_{\\pi}[W]=1 \\quad \\pi \\text {-a.s }
\\end{array}\\right.
$$

is called OT discrepancy wth moment constraints induced by $c, \\mathbb  Q, \\mathbb P$

$f_\\beta$ : given learning model, trained on the distribution:

$\\mathbb P_0 \\in \\mathcal P (\\mathcal  Z)$, we have:

#### Problem P
$$
\\mathfrak{R}(\\beta, r)=\\left\\{\\begin{array}{cl}
\\inf _{\\mathbb{Q} \\in \\mathcal{P}(\\mathcal{Z} \\times \\mathcal{W})} & \\mathrm{M}_{c}(\\mathbb{Q}, \\hat{\\mathbb{P}}) \\\\
\\text { s.t. } & \\mathbb{E}_{\\mathbb{Q}}[W \\cdot \\ell(\\beta, Z)] \\geq r
\\end{array}\\right.
$$

- $\\hat {\\mathbb  P}$ is selected as $\\mathbb  P_ 0 \\otimes \\delta _1$
  - $\\delta _1 $ : Dirac delta function
  - $\\mathrm M_c (\\mathbb Q, \\hat {\\mathbb P} )$: OT discrepancy with moment constraints between the projected distribution $\\mathbb Q$ and the reference distribution $\\hat{\\mathbb P}$
  - $l(\\beta ,z)$ : prediction risk of model $f_\\beta $ on sample $z$
  - $r > 0$ : pre-defined risk threshold

example c:

##### formula 1

$c((z,w), (\\hat z, \\hat w )) = \\theta _1 \\cdot w \\cdot d(z, \\hat z) +\\theta _2 \\cdot (\\phi  (w) - \\phi (\\hat{w}))_+$

- $d(z,\\hat z) = \\| x - \\hat x \\|^2_2 + \\infty \\cdot | y - \\hat y|$: cost with different $z, \\hat z$

- $(\\phi(w) - \\phi (\\hat w))_+$ : cost related to differences in probability mass.

  - $\\phi : \\mathbb  R_+ \\rightarrow  \\mathbb  R_+$ : convex function, where:
  - $\\phi(1) = 0$
- $\\theta _1, \\theta _2 \\ge 0$ : hyperparameters, where:
  - $\\dfrac{1}{\\theta _1} + \\dfrac{1}{\\theta _2}=C $ for some constant $C$

--- 

## Dual reformulation and its interpretation

### Theorem 1 (Strong duality for problem for problem [(P)](#problem-p))

Suppose:

- $\\mathcal Z \\times \\mathcal  W$ is compact.

- $l(\\beta ,\\cdot )$ is upper semicontinuous for all $\\beta $ 

- $c:(\\mathcal Z\\times\\mathcal W)^2\\rightarrow \\mathbb R_+$ is continuous
- $r<\\bar r := \\max_{z\\in\\mathcal Z}l(\\beta ,z)$

Then:


#### Function D
$\\mathfrak{R}(\\beta, r)=\\sup _{h \\in \\mathbb{R}_{+}, \\alpha \\in \\mathbb{R}} h r+\\alpha+\\mathbb{E}_{\\hat{\\mathbb{P}}}\\left[\\tilde{\\ell}_{c}^{\\alpha, h}(\\beta,(\\hat{Z}, \\hat{W}))\\right]$

- $\\tilde{\\ell}_{c}^{\\alpha, h}(\\beta,(\\hat{Z}, \\hat{W}))$ : surrogate function
  - it equals to : $\\min_{(z,w)\\in\\mathcal Z\\times\\mathcal W}c((z,w),(\\hat z,\\hat w)) + \\alpha w - h\\cdot w \\cdot l(\\beta ,z)$, for all $\\hat z \\in \\mathcal Z, \\hat w \\in \\mathcal W$.

( is it $+aw$ ? in the proof it's $-aw$)

[Skip the proof](#end-proof-for-function-d)

##### Proof for Function D

Reformulate Problem [(P)](#problem-p) into a infinite-dimension linear program:

###### Formula Primal
$$
\\begin{array}{cl}
\\inf _{\\pi} & \\mathbb{E}_{\\pi}[c((Z, W),(\\hat{Z}, \\hat{W}))] \\\\
\\text { s.t. } & \\pi \\in \\mathcal{P}\\left((\\mathcal{Z} \\times \\mathcal{W})^{2}\\right) \\\\
& r-\\mathbb{E}_{\\pi}[W \\cdot \\ell(\\beta, Z)] \\leq 0 \\\\
& \\mathbb{E}_{\\pi}[W]=1 \\\\
& \\pi_{(\\hat{Z}, \\hat{W})}=\\hat{\\mathbb{P}} .
\\end{array}
$$

We get the Lagrangian function

$L(\\pi ; h, \\alpha)=h r+\\alpha+\\mathbb{E}_{\\pi}[c((Z, W),(\\hat{Z}, \\hat{W}))-h \\cdot W \\cdot \\ell(\\beta, Z)-\\alpha \\cdot W]$,

where $h\\in\\mathbb R_+,\\alpha \\in\\mathbb R,\\pi$ belongs to :
- $\\Pi_{\\hat {\\mathbb P}} = \\left\\{  \\pi\\in\\mathcal P((\\mathcal Z\\times\\mathcal W)^2) : \\pi_{(\\hat{Z},\\hat W)} = \\hat{\\mathbb P}\\right\\}$

$\\mathcal Z\\times W$ is compact 

$\\Rightarrow \\mathcal P(\\mathcal  Z\\times\\mathcal W) $ is tight.

$\\Rightarrow \\Pi_{\\hat{\\mathbb P }}$ is tight

$\\Rightarrow  \\Pi_{\\hat{\\mathbb P }}$ has a compact closure (Prokhorov's theorem)

$\\Pi_{\\hat{\\mathbb P }}$ is weakly closed

$\\Rightarrow \\Pi_{\\hat{\\mathbb P }} is compact$ (tight + close)

$\\Pi_{\\hat{\\mathbb P }}$ is convex

###### Prove $L(\\pi; h ,\\alpha)$ is lower semicontinuous in $\\pi $ under the weak topology

Suppose:

$\\pi_n$ converges weakly to $\\pi $

$\\Rightarrow \\liminf_{n\\rightarrow +\\infty}\\int g\\mathrm d \\pi_n \\ge \\int g\\mathrm d  \\pi$, for any lower semicontinuous function $g$ that is bounded below (Portmanteau theorem)

$l(\\beta,\\cdot)$ is upper semicontinuous for all $\\beta $, 

and $w,h\\ge 0 $,

$\\Rightarrow  h\\cdot w \\cdot l(\\beta ,z)$ is upper semicontinuous, w.r.t $(z,w)$

$c((z,w),(\\hat z, \\hat w))$ is lower semicontinuous

$\\Rightarrow c((z,w),(\\hat z, \\hat w)) - h\\cdot w \\cdot l (\\beta,z) - \\alpha\\cdot w $ is lower semicontinuous w.r.t $(z,w)$ for any $(\\hat z,\\hat w) \\in \\mathcal  Z\\times \\mathcal W$

$\\mathcal  Z\\times\\mathcal W$ is compact

$\\Rightarrow $ the function is bounded below

$\\Rightarrow \\liminf_{n\\rightarrow +\\infty}L(\\pi_n;h,\\alpha )\\ge L(\\pi;h,\\alpha )$

$\\Rightarrow L(\\pi;h,\\alpha )$ is lower semicontinuous in $\\pi$ under the weak topology

###### Prove continuous in $(h,\\alpha)$ under the uniform topology in $\\mathbb{R}_+ \\times \\mathbb R$

Suppose:

$\\lim_{n\\to+\\infty}h_n = h$ in Euclidean topology, $\\lim_{n\\to\\infty}|\\alpha _n|<\\bar\\alpha $ in Euclidean topology

Exists:

$\\bar h\\in\\mathbb R_+, \\bar\\alpha \\in\\mathbb R $, with $\\sum_{n\\to\\infty}|h_n|\\le\\bar h, \\sup_{n\\to\\infty }|\\alpha _n|<\\bar\\alpha $, for all $n\\ge 1$

$\\Rightarrow  \\lim_{n\\to+\\infty}L(\\pi;h_n,\\alpha _n) = L(\\pi;h,\\alpha )$ ( dominated convergence theorem)

$\\Rightarrow  L(\\pi;h,\\alpha )$ is continuous in  $(h,\\alpha )$ under the Ecludiean topology in  $\\mathbb R_+ \\times \\mathbb  R$

###### Formula 5

$\\Rightarrow \\inf_{\\pi\\in\\Pi_{\\hat{\\mathbb P }}}\\sup_{h\\in\\mathbb R_+,\\alpha \\in\\mathbb R }L(\\pi;h,\\alpha ) = \\sup_{h\\in\\mathbb R_+,\\alpha \\in\\mathbb R }\\inf_{\\pi\\in\\Pi_{\\hat{\\mathbb P }}}L(\\pi;h,\\alpha )$ (Sion's minmax theorem)

Rewrite:

$L(\\pi ; h, \\alpha)=\\mathbb{E}_{\\pi}\\left[c((Z, W),(\\hat{Z}, \\hat{W}))\\right]+h\\left(r-\\mathbb{E}_{\\pi}[W \\cdot \\ell(\\beta, Z)]\\right)+\\alpha\\left(1-\\mathbb{E}_{\\pi}[W]\\right)$ (The original paper lost a close bracket)

$\\Rightarrow \\inf_{\\pi\\in\\Pi_{\\hat{\\mathbb P }}}\\sup_{h\\in\\mathbb R_+,\\alpha \\in\\mathbb R }L(\\pi;h,\\alpha ) $ is bounded above

We construct:

$\\mathbb Q_0 = \\delta _{(z^*,1)}$

- $z^* = \\argmax_{z\\in\\mathcal Z }l(\\beta ,z)$

Then:

$$
\\begin{aligned}
&\\inf _{\\pi \\in \\Pi_{\\mathbb{P}}} \\sup _{h \\in \\mathbb{R}_{+}, \\alpha \\in \\mathbb{R}} L(\\pi ; h, \\alpha) \\\\
& \\leq \\sup _{h \\in \\mathbb{R}_{+}, \\alpha \\in \\mathbb{R}} L\\left(\\mathbb{Q}_{0} \\otimes \\hat{\\mathbb{P}} ; h, \\alpha\\right) \\\\
& =\\mathbb{E}_{\\mathbb{Q}_{0} \\otimes \\hat{\\mathbb{P}}}[c((Z, W),(\\hat{Z}, \\hat{W}))]+\\sup _{h \\in \\mathbb{R}_{+}} h(r-\\bar{r}) \\quad (E_\\pi[W] = 1)\\\\
& <+\\infty
\\end{aligned}
$$

- $\\bar r = \\mathbb E_{\\mathbb  Q_0 }[l(\\beta ,Z)]$ (Notice $W$ is independent with it) $ = \\max_{z\\in Z }l(\\beta ,Z)$
- combined $c$ is continuous, it's bounded on a compact domain $Z\\times W$ (The suppose)
$$
\\begin{aligned}
\\Rightarrow & r - \\mathbb E_\\pi [W\\cdot l(\\beta ,Z)] \\le 0 \\\\ 
& \\mathbb E_\\pi [W] = 1
\\end{aligned}
$$

Then: for [(5)](#formula-5) right hand side:

$$
\\begin{aligned}
& \\sup _{h \\in \\mathbb{R}_{+}, \\alpha \\in \\mathbb{R}} \\inf _{\\pi \\in \\Pi_{\\mathrm{P}}} L(\\pi ; h, \\alpha) . \\\\
= & \\sup _{h \\in \\mathbb{R}_{+}, \\alpha \\in \\mathbb{R}} h r+\\alpha+\\inf _{\\pi \\in \\Pi_{\\mathbb{®}}} \\mathbb{E}_{\\pi}[c((Z, W),(\\hat{Z}, \\hat{W}))-h \\cdot W \\cdot \\ell(\\beta, Z)-\\alpha \\cdot W] .
\\end{aligned}
$$

Notice:

$$
\\begin{aligned}
& \\inf _{\\pi \\in \\Pi_{\\mathfrak{R}}} \\mathbb{E}_{\\pi}[c((Z, W),(\\hat{Z}, \\hat{W}))-h \\cdot W \\cdot \\ell(\\beta, Z)-\\alpha \\cdot W] \\\\
= & \\mathbb{E}_{\\hat{\\mathbb{P}}}\\left[\\min _{(z, w) \\in \\mathcal{Z} \\times \\mathcal{W}} c((z, w),(\\hat{Z}, \\hat{W}))-h \\cdot w \\cdot \\ell(\\beta, z)-\\alpha \\cdot w\\right],
\\end{aligned}
$$

##### End Proof for Function D

We explore [(1)](#formula-1) with:

- $\\phi (t) = t\\log t - t + 1$, Kullback-Leibler divergence

- $\\phi (t) = (t-1)^2$ , $\\chi^2$-divergence

---

### Proposition 1 (Dual reformulations)

Suppose:

$\\mathcal  W = \\mathbb  R_+$

(i) If:

$\\phi (t) = t\\log t - t + 1$, [(D)](#function-d) admits:

#### function 2

$\\sup_{h\\ge0 }hr - \\theta _2\\log \\mathbb E_{\\mathbb P_0 }\\left[\\exp\\left(\\dfrac{l_{h,\\theta _1 }(\\hat Z)}{\\theta _2 }\\right)\\right]$

(ii) If:

$\\phi(t) = (t-1)^2 $, [(D)](#function-d) admits:

#### function 3

$\\sup _{h \\geq 0, \\alpha \\in \\mathbb{R}} h r+\\alpha+\\theta_{2}-\\theta_{2} \\mathbb{E}_{\\mathbb{P}_{0}}\\left[\\left(\\frac{\\ell_{h, \\theta_{1}}(\\hat{Z})+\\alpha}{2 \\theta_{2}}+1\\right)_{+}^{2}\\right]$


- $l_{h,\\theta _1 }(\\hat z ):=\\max_{z\\in\\mathcal Z }h\\cdot l(\\beta ,z)-\\theta _1 \\cdot d(z,\\hat z)$ : the d-trasform of $h\\cdot l(\\beta, \\cdot)$ with the step size $\\theta_1$

[Skip the Proof](#end-proof-for-proposition-1)

#### Proof for proposition 1

$$
\\begin{aligned}
&\\tilde{\\ell}_{c}^{\\alpha, h}(\\beta,(\\hat{z}, \\hat{w})) \\\\ 
& =\\min _{(z, w) \\in \\mathcal{Z} \\times \\mathcal{W}} \\theta_{1} \\cdot w \\cdot d(z, \\hat{z})+\\theta_{2}(\\phi(w)-\\phi(\\hat{w}))_{+}-\\alpha w-h \\cdot w \\cdot \\ell(\\beta, z) \\\\
& =\\min _{z \\in \\mathcal{Z}} \\theta_{2} \\cdot \\min _{w \\in \\mathbb{R}}-w \\frac{h \\cdot \\ell(\\beta, z)-\\theta_{1} \\cdot d(z, \\hat{z})+\\alpha}{\\theta_{2}}+\\phi(w)+\\mathbb{I}_{\\mathcal{W}}(w) \\text{ // Notice } \\hat W = 1 \\text{ almost surely, and } \\phi(1) = 0\\\\
& =\\min _{z \\in \\mathcal{Z}}-\\theta_{2} \\cdot\\left(\\phi+\\mathbb{I}_{\\mathcal{W}}\\right)^{*}\\left(\\frac{h \\cdot \\ell(\\beta, z)-\\theta_{1} \\cdot d(z, \\hat{z})+\\alpha}{\\theta_{2}}\\right) . \\text{ Convex conjugate}
\\end{aligned}
$$

- $\\mathbb I_{\\mathcal W }(w) = \\begin{cases}
0& \\text{if } w\\in \\mathcal W\\\\
+\\infty &\\text{if }w\\notin \\mathcal W
\\end{cases}
$

- Convex conjugate: $\\min_x\\{-(x,y) + f(x)\\} = -f^* (y)$

(i) When $\\mathcal W = \\mathbb R_+, \\phi (t) = t\\log t -t + 1$:

$(\\phi + \\mathbb I_{\\mathbb R_+})^*(\\cdot) = \\exp(\\cdot) - 1$

- 
$$
\\begin{cases}
&(\\phi + \\mathbb I_{\\mathbb R_+})^*(y) \\\\
&= \\sup_{x\\ge0}\\{xy - (x\\log x-x+1)\\}\\\\
&(Derive) = y - \\log x - 1 + 1 = 0\\\\
&\\Rightarrow x = e^y\\\\
&\\Rightarrow (\\phi + \\mathbb I_{\\mathbb R_+})^*(y)  = ye^y - ye^y + e^y - 1 = e^y - 1
\\end{cases}
$$

Continue:

$$
\\begin{aligned} 
&\\tilde{\\ell}_{c}^{\\alpha, h}(\\beta,(\\hat{z}, \\hat{w})) \\\\ 
& =\\min _{z \\in \\mathcal{Z}}-\\theta_{2} \\cdot \\exp \\left(\\frac{h \\cdot \\ell(\\beta, z)-\\theta_{1} \\cdot d(z, \\hat{z})+\\alpha}{\\theta_{2}}\\right)+\\theta_{2} \\\\ & =-\\theta_{2} \\cdot \\exp \\left(\\frac{\\max _{z \\in \\mathcal{Z}} h \\cdot \\ell(\\beta, z)-\\theta_{1} \\cdot d(z, \\hat{z})+\\alpha}{\\theta_{2}}\\right)+\\theta_{2} \\\\ & =-\\theta_{2} \\cdot \\exp \\left(\\frac{\\ell_{h, \\theta_{1}}(\\hat{z})+\\alpha}{\\theta_{2}}\\right)+\\theta_{2} \\end{aligned} 
$$

Then we reformulate the [(D)](#function-d) :

$\\mathfrak{R}(\\beta, r)=\\sup _{h \\in \\mathbb{R}_{+}, \\alpha \\in \\mathbb{R}} h r+\\alpha-\\theta_{2} \\mathbb{E}_{\\mathbb{P}_{0}}\\left[\\exp \\left(\\frac{\\ell_{h, \\theta_{1}}(\\hat{Z})+\\alpha}{\\theta_{2}}\\right)\\right]+\\theta_{2} $

Derive the $\\alpha  $:

$1-\\exp \\left(\\frac{\\alpha}{\\theta_{2}}\\right) \\mathbb{E}_{\\mathbb{P}_{0}}\\left[\\exp \\left(\\frac{\\ell_{h, \\theta_{1}}(\\hat{Z})}{\\theta_{2}}\\right)\\right]=0$

Solve this and get the $\\alpha  $:

$\\alpha^{\\star}=-\\theta_{2} \\log \\left(\\mathbb{E}_{\\mathbb{P}_{0}}\\left[\\frac{\\ell_{h, \\theta_{1}}(\\hat{z})}{\\theta_{2}}\\right]\\right) $

Put it back:

$\\mathfrak R(\\beta, r)=\\sup _{h \\in \\mathbb{R}_{+}} h r-\\theta_{2} \\log \\left(\\mathbb{E}_{\\mathbb{P}_{0}}\\left[\\exp \\left(\\frac{\\ell_{h, \\theta_{1}}(\\hat{Z})}{\\theta_{2}}\\right)\\right]\\right)$

(ii)

When $ \\mathcal{W}=\\mathbb{R}+ $ and $ \\phi(t)=(t-1)^{2} $

$\\left(\\phi+\\mathbb{I}_{\\mathbb{R}_{+}}\\right)^{*}(\\cdot)=\\left(\\frac{\\cdot}{2}+1\\right)_{+}^{2}-1 $

- 
$$
\\begin{cases}
\\left(\\phi+\\mathbb{I}_{\\mathbb{R}_{+}}\\right)^{*}(y) \\\\
=\\sup_{x\\ge0}xy - (x-1)^2\\\\ 
(Derive) y - 2x + 2 = 0 \\\\ 
x = \\dfrac{y}{2} + 1\\\\
\\left(\\phi+\\mathbb{I}_{\\mathbb{R}_{+}}\\right)^{*}(y) =\\dfrac{y^2}{2} + y - \\dfrac{y^2}{4} \\\\
= (\\dfrac{y}{2} + 1)^2 - 1 
\\end{cases}
$$

Then:

$$
\\begin{aligned} 
&\\tilde{\\ell}_{c}^{\\alpha, h}(\\beta,(\\hat{z}, \\hat{w}))\\\\ 
& =\\min _{z \\in \\mathbb{Z}}-\\theta_{2} \\cdot\\left(\\phi+\\mathbb{I}_{\\mathcal{W}}\\right)^{*}\\left(\\frac{h \\cdot \\ell(\\beta, z)-\\theta_{1} \\cdot d(z, \\hat{z})+\\alpha}{\\theta_{2}}\\right) \\\\ 
& =\\min _{z \\in \\mathcal{Z}}-\\theta_{2} \\cdot\\left(\\frac{h \\cdot \\ell(\\beta, z)-\\theta_{1} \\cdot d(z, \\hat{z})+\\alpha}{2 \\theta_{2}}+1\\right)_{+}^{2}+\\theta_{2} \\\\
& =-\\theta_{2} \\cdot\\left(\\frac{\\ell_{h, \\theta_{1}}(\\hat{z})+\\alpha}{2 \\theta_{2}}+1\\right)_{+}^{2}+\\theta_{2}
\\end{aligned}
$$

Then we reformulate the [(D)](#function-d) :

$\\sup _{h \\geq 0, \\alpha \\in \\mathbb{R}} h r+\\alpha+\\theta_{2}-\\theta_{2} \\mathbb{E}_{\\mathbb{P}_{0}}\\left[\\left(\\frac{\\ell_{h, \\theta_{1}}(\\hat{Z})+\\alpha}{2 \\theta_{2}}+1\\right)_{+}^{2}\\right]$

We can't continue, because it's a piecewise linear equation.

#### End proof for proposition 1

---

### Remark 4 (Structure of the most sensitive distribution)

$\\mathbb  Q^* = \\dfrac{1}{n}\\sum_{n}^{i=1 }\\delta _{(z^*_i,w^*_i)}, (z^*_i, w^*_8)\\in \\mathcal Z \\times \\mathbb R_+$

- $z_{i}^{\\star}=\\underset{z \\in \\mathcal{Z}}{\\arg \\max } h^{\\star} \\ell(\\beta ; z)-\\theta_{1} \\cdot d\\left(z, \\hat{z}_{i}\\right), \\quad \\forall i \\in[n]$

---

## Computation

Address [(2)](#function-2), [(3)](#function-3) with different loss functions.

### Convex piecewise linear loss functions

[(2)](#function-2) admits a tractable finite convex program

### Theorem 2 (KL divergence)

Suppose:

$\\mathcal Z = \\mathbb R^d \\times \\{+1, -1\\},$

$ l(\\{(a_k,b_k)\\}_{k\\in[K]},z)=\\max_{k\\in[K]}y\\cdot a_k^T + b_k$

The negative optimal value of problem [(2)](#function-2) is equivalent to :

$$
\\begin{array}{ll}
\\min & -h r+t \\\\ 
\\text { s.t. } & \\lambda \\in \\mathbb{R}_{+}, t \\in \\mathbb{R}, \\eta \\in \\mathbb{R}_{+}^{n}, p \\in \\mathbb{R}^{n} \\\\ 
& \\left(\\eta_{i}, \\theta_{2}, p_{i}-t\\right) \\in \\mathcal{K}_{\\exp } \\\\ 
& \\frac{\\left\\|a_{k}\\right\\|_{2}^{2}}{4\\theta _1} h^{2}+\\hat{y}_{i} \\cdot a_{k}^{T} \\hat{x}_{i} \\cdot h+b_{k} \\leq p_{i} \\\\ 
& \\frac{1}{n} \\sum_{i=1}^{n} \\eta_{i} \\leq \\theta_{2},\\end{array}
$$

- $\\mathcal K_{\\exp}$ is exponential cone 

- $\\mathcal K_{\\exp }=\\left\\{(z, y, x) \\in \\mathbb{R}^{3}: y>0, y e^{x / y} \\leq z\\right\\} \\cup\\{(z, 0, x): x \\leq 0, z \\geq 0\\}$

[Skip the proof](#end-proof-for-theorem-2)

#### Proof for Theorem 2

Start from [(2)](#function-2):

$$
\\begin{array}{l}
\\sup_{h\\ge0 }hr - \\theta _2\\log \\mathbb E_{\\mathbb P_0 }\\left[\\exp\\left(\\dfrac{l_{h,\\theta _1 }(\\hat Z)}{\\theta _2 }\\right)\\right]\\\\ 
=\\min _{h \\geq 0}-h r+\\theta_{2} \\log \\mathbb{E}_{\\mathbb{P}_{0}}\\left[\\exp \\left(\\dfrac{\\ell_{h, \\theta_{1}}(\\hat{Z})}{\\theta_{2}}\\right)\\right] \\\\
=\\left\\{\\begin{array}{ll}
\\min & -h r+t \\\\
\\text { s.t. } & h \\in \\mathbb{R}_{+}, t \\in \\mathbb{R} \\\\
& \\theta_{2} \\log \\mathbb{E}_{\\mathbb{P}_{0}}\\left[\\exp \\left(\\frac{\\ell_{h, \\theta_{1}}(\\hat{Z})}{\\theta_{2}}\\right)\\right] \\leq t
\\end{array}\\right. \\\\
=\\left\\{\\begin{array}{ll}
\\min & -h r+t \\\\
\\text { s.t. } & \\lambda \\in \\mathbb{R}_{+}, t \\in \\mathbb{R}, \\eta \\in \\mathbb{R}_{+}^{n} \\\\
& \\left(\\eta_{i}, \\theta_{2}, \\ell_{h, \\theta_{1}}\\left(\\hat{z}_{i}\\right)-t\\right) \\in \\mathcal{K}_{\\exp } \\quad \\forall i \\in[n] \\\\
& \\frac{1}{n} \\sum_{i=1}^{n} \\eta_{i} \\leq \\theta_{2}
\\end{array}\\right. \\\\
=\\left\\{\\begin{array}{lll}
\\min & -h r+t & \\\\
\\text { s.t. } & \\lambda \\in \\mathbb{R}_{+}, t \\in \\mathbb{R}, \\eta \\in \\mathbb{R}_{+}^{n}, p \\in \\mathbb{R}_{n} & \\\\
& \\left(\\eta_{i}, \\theta_{2}, p_{i}-t\\right) \\in \\mathcal{K}_{\\exp } & \\forall i \\in[n] \\\\
& \\ell_{h, \\theta_{1}}\\left(\\hat{z}_{i}\\right) \\leq p_{i} & \\forall i \\in[n] \\\\
& \\frac{1}{n} \\sum_{i=1}^{n} \\eta_{i} \\leq \\theta_{2} . &
\\end{array}\\right.
\\end{array}
$$

- To get second euqality, notice :
$$
\\begin{aligned}
& \\theta_{2} \\log \\mathbb{E}_{\\mathbb{P}_{0}}\\left[\\exp \\left(\\frac{\\ell_{h, \\theta_{1}}(\\hat{Z})}{\\theta_{2}}\\right)\\right] \\leq t \\\\ 
& \\Leftrightarrow \\mathbb{E}_{\\mathbb{P}_{0}}\\left[\\exp \\left(\\frac{\\ell_{h, \\theta_{1}}(\\hat{Z})-t}{\\theta_{2}}\\right)\\right] \\leq 1 \\\\ 
&\\lrArr  \\frac{1}{n} \\sum_{i=1}^{n} \\exp \\left(\\frac{\\ell_{h, \\theta_{1}}\\left(\\hat{z}_{i}\\right)-t}{\\theta_{2}}\\right) \\leq 1
\\end{aligned}
$$

- We introduce $\\eta \\in \\mathbb R_+^n$, then decomposed to :

$$
\\left\\{\\begin{array}{l}
\\frac{1}{n} \\sum_{i=1}^{n} \\eta_{i} \\leq \\theta_{2} \\\\ 
\\theta_{2} \\exp \\left(\\frac{\\ell_{h, \\theta_{1}}\\left(\\hat{z}_{i}\\right)-t}{\\theta_{2}}\\right) \\leq \\eta_{i}, \\quad \\forall i \\in[n]\\end{array}\\right.
$$

- The second ineuqality is decomposed by definition of exponential cone
- We introduce $p_i$ to get the last equality

Then: 

##### Formlua 10

$$
\\begin{aligned} 
& \\ell_{h, \\theta_{1}}\\left(\\hat{z}_{i}\\right) \\leq p_{i} \\\\ \\Longleftrightarrow & \\sup _{z \\in \\mathcal{Z}}\\left\\{h \\cdot \\max _{k \\in[K]} y \\cdot a_{k}^{\\top} x+b_{k}-\\theta_{1} d\\left(z, \\hat{z}_{i}\\right)\\right\\} \\leq p_{i} \\\\ \\Longleftrightarrow & \\sup _{z \\in \\mathcal{Z}}\\left\\{h \\cdot y \\cdot a_{k}^{\\top} x+b_{k}-\\theta_{1} d\\left(z, \\hat{z}_{i}\\right)\\right\\} \\leq p_{i} \\forall k \\in[K] \\\\ \\Longleftrightarrow & \\sup _{x \\in \\mathbb{R}^{d}}\\left\\{h \\cdot \\hat{y}_{i} \\cdot a_{k}^{\\top} x+b_{k}-\\theta_{1}\\left\\|x-\\hat{x}_{i}\\right\\|_{2}^{2}\\right\\} \\leq p_{i} \\forall k \\in[K] \\\\ \\Longleftrightarrow & \\frac{\\left\\|a_{k}\\right\\|_{2}^{2}}{4 \\theta_{1}} \\cdot h^{2}+\\hat{y}_{i} \\cdot a_{k}^{T} \\hat{x}_{i} \\cdot h+b_{k} \\leq p_{i}, \\forall k \\in[K]
\\end{aligned}
$$

- Refer to [(2)](#function-2) for first equivalent
- Refer to [(1)](#formula-1) for $d(z,\\hat z_i)$ for third equivalent
- Simple derivation for fourth equivalent

Put everything together:

$$
\\begin{array}{lll}\\min & -h r+t & \\\\ \\text { s.t. } & \\lambda \\in \\mathbb{R}_{+}, t \\in \\mathbb{R}, \\eta \\in \\mathbb{R}_{+}^{n}, p \\in \\mathbb{R}^{n} & \\\\ & \\left(\\eta_{i}, \\theta_{2}, p_{i}-t\\right) \\in \\mathcal{K}_{\\exp } & \\forall i \\in[n] \\\\ & \\frac{\\left\\|a_{k}\\right\\|_{2}^{2}}{4 \\theta_{1}} \\cdot h^{2}+\\hat{y}_{i} \\cdot a_{k}^{T} \\hat{x}_{i} \\cdot h+b_{k} \\leq p_{i}, & \\forall k \\in[K], \\forall i \\in[n] \\\\ & \\frac{1}{n} \\sum_{i=1}^{n} \\eta_{i} \\leq \\theta_{2} . & \\end{array}
$$

#### End proof for Theorem 2

--- 

### Theorem 3 ($\\chi^2$ Divergence)

Suppose:

$\\mathcal Z = \\mathbb R^d\\times {+1,-1}$


$ l(\\{(a_k,b_k)\\}_{k\\in[K]},z)=\\max_{k\\in[K]}y\\cdot a_k^T + b_k$


The negative optimal value of problem [(2)](#function-2) is equivalent to :

$$
\\begin{array}{ll}
\\min & -h r+t \\\\ 
\\text { s.t. } & h \\in \\mathbb{R}_{+}, \\alpha \\in \\mathbb{R}, t \\in \\mathbb{R}, \\eta \\in \\mathbb{R}_{+}^{n} \\\\ 
& \\frac{\\left\\|a_{k}\\right\\|_{2}^{2}}{4 \\theta_{1} \\cdot} \\cdot h^{2}+\\hat{y}_{i} \\cdot a_{k}^{T} \\hat{x}_{i} \\cdot h+b_{k}+ \\alpha+2 \\theta_{2} \\leq 2 \\theta_{2} \\eta_{i} \\\\ 
& \\frac{\\theta_{2}}{n} \\sum_{i=1}^{n} \\eta_{i}^{2} \\leq t
\\end{array}
$$

#### Note for theorem 3

It should be $\\alpha$ instead of $2\\theta_1 \\alpha$, the paper made a mistake here.

[Skip the proof](#end-proof-for-theorem-3)

#### Proof for Theorem 3

Start from [(3)](#function-3) :

$$
\\begin{array}{l}
\\sup _{h \\geq 0, \\alpha \\in \\mathbb{R}} h r+\\alpha+\\theta_{2}-\\theta_{2} \\mathbb{E}_{\\mathbb{P}_{0}}\\left[\\left(\\frac{\\ell_{h, \\theta_{1}}(\\hat{Z})+\\alpha}{2 \\theta_{2}}+1\\right)_{+}^{2}\\right]\\\\ 
=\\min _{h \\geq 0, \\alpha \\in \\mathbb{R}}-h r-\\alpha+\\theta_{2}+\\theta_{2} \\mathbb{E}_{\\mathbb{P}_{0}}\\left[\\left(\\frac{\\ell_{h, \\theta_{1}}(\\hat{Z})+\\alpha}{2 \\theta_{2}}+1\\right)_{+}^{2}\\right] \\\\
=\\left\\{\\begin{array}{ll}
\\min & -h r-\\alpha+t \\\\
\\text { s.t. } & h \\in \\mathbb{R}_{+}, \\alpha \\in \\mathbb{R}, t \\in \\mathbb{R} \\\\
& \\theta_{2} \\mathbb{E}_{\\mathbb{P}_{0}}\\left[\\left(\\frac{\\ell_{h, \\theta_{1}}(\\hat{Z})+\\alpha}{2 \\theta_{2}}+1\\right)_{+}^{2}\\right] \\leq t
\\end{array}\\right. \\\\
=\\left\\{\\begin{array}{ll}
\\min & -h r+t \\\\
\\text { s.t. } & h \\in \\mathbb{R}_{+}, \\alpha \\in \\mathbb{R}, t \\in \\mathbb{R}, \\eta \\in \\mathbb{R}_{+}^{n} \\\\
& \\ell_{h, \\theta_{1}}(\\hat{z})+\\alpha+2 \\theta_{2} \\leq 2 \\theta_{2} \\eta_{i} \\quad \\forall i \\in[n] \\\\
& \\frac{\\theta_{2}}{n} \\sum_{i=1}^{n} \\eta_{i}^{2} \\leq t
\\end{array}\\right. \\\\
=\\left\\{\\begin{array}{ll}
\\min & -h r+t \\\\
\\text { s.t. } & h \\in \\mathbb{R}_{+}, \\alpha \\in \\mathbb{R}, t \\in \\mathbb{R}, \\eta \\in \\mathbb{R}_{+}^{n} \\\\
& \\frac{\\left\\|a_{k}\\right\\|_{2}^{2}}{4 \\theta_{1}} \\cdot h^{2}+\\hat{y}_{i} \\cdot a_{k}^{T} \\hat{x}_{i} \\cdot h+b_{k}+\\alpha+2 \\theta_{2} \\leq 2 \\theta_{2} \\eta_{i} \\quad \\forall k \\in[K], \\forall i \\in[n] \\\\
& \\frac{\\theta_{2}}{n} \\sum_{i=1}^{n} \\eta_{i}^{2} \\leq t
\\end{array}\\right.
\\end{array}
$$

- Reformulate the first equivalent into:
$$
\\left\\{\\begin{array}{l}\\frac{\\theta_{2}}{n} \\sum_{i=1}^{n} \\eta_{i}^{2} \\leq t \\\\ \\ell_{h, \\theta_{1}}(\\hat{z})+2 \\theta_{2} \\alpha+2 \\theta_{2} \\leq 2 \\theta_{2} \\eta_{i}, \\eta_{i} \\in \\mathbb{R}_{+}\\end{array}\\right.
$$
to get the second equivalent 
- Refer to [(10)](#formlua-10) for the last equivalent

#### End proof for Theorem 3

--- 

### 0/1 loss function

$r$: risk level, error rate

$\\ell(\\beta,(x, y))=\\mathbb{I}_{y \\neq f_{\\beta}(x)}$ : loss function 

- $\\beta $ : trained model
- $(x,y) $ : sample
- $\\mathbb{I}_{y \\neq f_{\\beta}(x)} = 1 $ if $y \\ne f_\\beta  (x)$, $0$ otherwise

### Nonlinear loss function

Gradient ascent

---

## Feature stability analysis

For machine learning: 

Modify function $d $:

$d(z, \\hat{z})=\\left\\|z_{(i)}-\\hat{z}_{(i)}\\right\\|_{2}^{2}+\\infty \\cdot\\left\\|z_{(,-i)}-\\hat{z}_{(,-i)}\\right\\|_{2}^{2}$

- $z_{(i)}$ : $i$-th feature of $z$
- $z_{(,-i)} = z\\backslash z_{(i)}$ : all variables in $z $ except for $i$-th

Then the $\\mathfrak R_i(\\beta ,r)$ indicates the stability

---

# Visualizations on stylized / toy examples

Visualize the most sensitive distribution $\\mathbb  Q^*$ based on
[Remark 4](#remark-4-structure-of-the-most-sensitive-distribution)

2d binary classifaction:

$$
\\begin{cases}
100 \\text{ samples} \\\\ 
Y = 0\\\\ 
\\mathcal  N([2,2]^T, I_2)
\\end{cases}
$$


$$
\\begin{cases}
100 \\text{ samples} \\\\ 
Y = 1\\\\ 
\\mathcal  N([-1,-1]^T, I_2)
\\end{cases}
$$

$f_\\beta (\\cdot)$ : Logistic regression

$\\dfrac{1}{\\theta_1} + \\dfrac{1}{\\theta_2} = 5$

risk : $0.5$

then solve $(2)$


placeholder

placeholder

placeholder

placeholder

placeholder

placeholder`,r6=`# Preliminaries

## Problem setup

### Data generation

#### (1)

$\\mathbf{F O}(\\boldsymbol{\\theta}, \\mathbf{u}): \\min_{\\mathbf x\\in\\mathcal X(\\mathbb u)} f(\\boldsymbol{\\theta}, \\mathbf{x})$

- $\\mathbb x\\in\\mathbb R^n$
- $\\mathcal X(\\mathbf u)$ : feasible region
- $\\mathbf u\\in\\mathbb R^m $ : exogenous parameters
- $f : \\mathbb R^{n\\times d }\\to\\mathbb R $ : objective function
- $\\mathbf u $ distributed according to $\\mathbb P_{\\mathbf  u }$ supported on $\\mathcal  U $

**There exists:**

$\\boldsymbol \\theta ^*$ unknown to the DM(Decision maker)

**DM obtains:**

$\\hat{\\mathbb  x}$ : decision
- by solving: $\\mathbf{F O}(\\hat {\\boldsymbol{\\theta}}, \\mathbf{u})$
- $\\hat{\\boldsymbol \\theta }$: noisy perception of $\\boldsymbol \\theta ^*$
  - $\\mathbb P_{\\boldsymbol \\theta }$ : the distribution of of $\\hat{\\boldsymbol \\theta }$ : unknown
  - $\\boldsymbol \\Theta \\subset \\mathbb R^d$: support set of $\\mathbb P_{\\boldsymbol \\theta }$, bounded
    - $\\boldsymbol \\theta ^*\\in\\boldsymbol \\Theta $
  - $\\mathbb P_{(\\boldsymbol \\theta ,\\mathbf u)}$: joint distribution of $\\hat{\\boldsymbol \\theta} ,\\mathbf u $ 
- $\\tilde {\\mathbf x} : \\boldsymbol \\Theta \\times\\mathcal U \\to\\mathbb R^n $
: oracle, returns an optimal solution to $\\mathbf  {FO}$
  - $\\mathcal X^{\\text{OPT}}(\\boldsymbol \\theta ,\\mathbf u):=\\argmin \\{f(\\boldsymbol \\theta ,\\mathbf x)\\mid \\mathbf x\\in\\mathcal X(\\mathbb u)\\}$ : solutions drawn uniformly from

### Objective function

$f$ is linear in $\\boldsymbol \\theta  $ and convec in $\\mathbf x $

$f(\\boldsymbol \\theta ,\\mathbf x) = \\sum_{i\\in[d]}\\theta _i f_i (\\mathbb x)$
- $f_i : \\mathbb R^n \\to\\mathbb R$ for all $i\\in[d]$ : convex basis functions
  - i.e.: $f(\\boldsymbol{\\theta}, \\mathbf{x})=\\boldsymbol{\\theta}^{\\top} \\mathbf{x}$
- $\\mathbf {FO}$ with it -> multi-objective optimization model

### Learning task

$\\mathcal  D = \\{\\hat{\\mathbf x_k},\\mathbf u_k\\}^N_{k=1}$ : decision-exogenous parameter pairs
- $N$: number

Aim: find

$\\bar{\\mathbf x}: \\mathcal U\\to\\mathbb R^n$: decision policy, to suggest future $\\mathbf u$
- $\\bar{\\mathbf x}(\\mathbb u) \\in\\mathcal X(\\mathbf u)$ for any $\\mathbf u\\in\\mathcal U$: require

### Assumptions

#### Assumption 1 (I.I.D. Samples)

> The dataset $\\mathcal  D$ is generated using : 
> $\\hat{\\mathbf x_k} := \\tilde {\\mathbf x}(\\hat{\\boldsymbol \\theta _k},\\mathbf u_k)$ 
> - $(\\hat{\\boldsymbol \\theta _k}, \\mathbf u_k)$ : i.i.d. samples from $\\mathbb P _{(\\boldsymbol \\theta , \\mathbf u)}$ for all $k\\in[N]$ 




#### Assumption 2 (Bounded Inverse Feasible Set)

#### (2)
> There exists a constant $ \\eta \\in \\mathbb{R}_{+} $ such that, for any $ \\boldsymbol{\\theta}, \\boldsymbol{\\theta}^{\\prime} \\in \\boldsymbol{\\Theta}^{\\mathrm{OPT}}(\\hat{\\mathbf{x}}, \\mathbf{u}) $, for some $ \\hat{\\mathbf{x}} \\in \\mathcal{X}(\\mathbf{u}) $ and $ \\mathbf{u} \\in \\mathcal{U} $: 
>  $ \\left\\|\\boldsymbol{\\theta}-\\boldsymbol{\\theta}^{\\prime}\\right\\|_{2} \\leq \\eta $,
> -  $\\Theta^{\\mathrm{OPT}}(\\mathbf{x}, \\mathbf{u}):=\\left\\{\\boldsymbol{\\theta} \\in \\mathbb{R}^{d} \\mid \\mathbf{x} \\in \\mathcal{X}^{\\mathrm{OPT}}(\\boldsymbol{\\theta}, \\mathbf{u}),\\|\\boldsymbol{\\theta}\\|_{2}=1\\right\\}$

#### Assumption 3 (Bounded Divergence)

> There exists a constant $ \\sigma \\in \\mathbb{R}_{+} $such that :
> $ \\left\\|\\mathbb{E}(\\hat{\\boldsymbol{\\theta}})-\\boldsymbol{\\theta}^{*}\\right\\|_{2} \\leq \\sigma $.

### Evaluation Metrics

#### Definition 1

#### (3)

>  $$ \\operatorname{AOG}(\\overline{\\mathbf{x}}):=\\mathbb{E}\\left[f\\left(\\boldsymbol{\\theta}^{*}, \\overline{\\mathbf{x}}(\\mathbf{u})\\right)-f\\left(\\boldsymbol{\\theta}^{*}, \\tilde{\\mathbf{x}}\\left(\\boldsymbol{\\theta}^{*}, \\mathbf{u}\\right)\\right)\\right] $$ : The actual optimality gap $ (A O G) $ of a decision policy $ \\overline{\\mathbf{x}} $
> - $\\mathbf u, \\bar{\\mathbf x}$ is random
>
> 

#### Definition 2

#### (4)

> $$\\operatorname{POG}(\\overline{\\mathbf{x}}):=\\mathbb{E}[f(\\hat{\\boldsymbol{\\theta}}, \\overline{\\mathbf{x}}(\\mathbf{u}))-f(\\hat{\\boldsymbol{\\theta}}, \\tilde{\\mathbf{x}}(\\hat{\\boldsymbol{\\theta}}, \\mathbf{u}))]$$ : The perceived optimality gap $ (P O G) $ of a decision policy $ \\overline{\\mathbf{x}} $
> - $\\hat{\\boldsymbol \\theta }, \\mathbf u, \\bar{\\mathbf x}$ is random

## Note 1

**An Example for Model, Assumption, Defninition:**

> A investment is needed, allocate money between $n$ assets.

- $\\mathbf x\\in\\mathbb R^n$ : weight for $n$ portfolio
- $\\mathbf u \\in\\mathbb R^m$: market condition (inflation, interest, etc.)
- $\\boldsymbol{\\theta}^*$: true assets return 
- $\\hat{\\boldsymbol{\\theta}}$: estimated assets return 
- $f(\\boldsymbol{\\theta}, \\mathbf{x})$ the return with the given weight and return (e.g.$\\boldsymbol \\theta ^T \\mathbb x$)
- $\\mathcal{X}(\\mathbf{u})$ the feasible weight under the given market condition

> To get the data, every month:

- $\\mathbf{u}_k$: observe the market
- $\\hat{\\boldsymbol{\\theta}}_k$: estimate the return 
- $\\hat{\\mathbf{x}}_k$: make the decision

> Assumptions

- 1: Every month is i.i.d.
- 2: If $\\mathbf x$(weight) is observed, the difference between the $\\boldsymbol \\theta $(return) is not big 
- 3: the average $\\hat{\\boldsymbol \\theta }$ (estimated return) is not far from $\\boldsymbol \\theta ^*$(real return)

> Definitions

- 1: AOG: Real return under current decision - real return under best decision
- 2: POG: Estimated return under current decision - estimated return under best decision

## An Inverse Optimization Pipeline

Finding $\\bar{\\mathbf x}$ is challenging because:

- $\\bar{\\mathbf x}(\\mathbf u)$ to be feasible to $\\mathbf {FO}$, involve more constraints, we can't use supervised learning that predict $\\hat{\\mathbf x}$ on $\\mathbf u $
- We do not observe $\\boldsymbol \\theta ^*$ or $\\hat {\\boldsymbol \\theta }$, we cant use classic ML technique.
- AOG and POG may not connected.

Classic IO pipeline:

Obtain:

$\\bar{\\boldsymbol \\theta }$: point decision 

Employ:

$\\bar{\\mathbf x_{IO}} (\\mathbf u):= \\tilde {\\mathbf x}(\\bar{\\boldsymbol \\theta },\\mathbb u)$ 

We can solve:

#### (5)

$ \\mathbf{I O}(\\mathcal{D}): \\underset{\\boldsymbol{\\theta} \\in \\boldsymbol{\\Theta}}{\\operatorname{min}} \\dfrac{1}{N} \\sum_{k \\in[N]} \\ell\\left(\\hat{\\mathbf{x}}_{k}, \\mathcal{X}^{\\mathrm{OPT}}\\left(\\boldsymbol{\\theta}, \\mathbf{u}_{k}\\right)\\right) $
- $\\ell $: non-negative loss function
  - return $0$ when $\\hat{\\mathbf x_k} \\in\\mathcal X^{OPT }(\\boldsymbol \\theta ,\\mathbf u_k ) $

### Definition 3

#### (6)

> The sub-optimality loss of $ \\boldsymbol{\\theta} $ is given by
$$
\\ell_{S}\\left(\\hat{\\mathbf{x}}, \\mathcal{X}^{O P T}(\\boldsymbol{\\theta}, \\mathbf{u})\\right):=\\max _{\\mathbf{x} \\in \\mathcal{X}^{OPT}(\\boldsymbol \\theta, \\mathbf{u})} f(\\boldsymbol{\\theta}, \\hat{\\mathbf{x}})-f(\\boldsymbol{\\theta}, \\mathbf{x})
$$

**However, it can't be used here, because it will cause arbitrarily large AOG and POG**

### Example 1

Let : 

$\\mathbf {FO}(\\theta, u)$ be: 

#### (7)

$$
\\begin{aligned} 
\\text{min } & \\theta_{1} x_{1}+\\theta_{2} x_{2} \\\\ 
\\text { s.t. } & x_{1}+u x_{2} \\geq u \\\\ 
& 0 \\leq x_{1} \\leq u \\\\ 
& 0 \\leq x_{2} \\leq 2
\\end{aligned}
$$

- $\\boldsymbol \\theta ^* = (\\cos\\dfrac{\\pi}{4},\\sin\\dfrac{\\pi}{4})$
- $\\mathcal U = \\{u\\}$
  - $u > 1$, real constant
- $\\mathcal D = \\{\\hat{\\mathbf x_k}, u\\}^N_{k=1} $
  - $\\hat{\\mathbf x_k} = \\tilde {\\mathbf x}(\\hat{\\boldsymbol \\theta _k},u)$
    - $\\hat{\\boldsymbol \\theta _k}$ uniformly, independently drawn from $\\boldsymbol \\Theta = \\{(\\cos\\delta ,\\sin\\delta )\\mid \\delta \\in(0,\\dfrac{\\pi}{2})\\}$ for all $k\\in[N]$

### Lemma 1
> $ \\overline{\\boldsymbol{\\theta}}_{N} $ : an optimal solution to $ \\mathbf{I O}(\\mathcal{D}) $ with the sub-optimality loss [(6)](#6), we have:
>  $ \\mathbb{P}\\left(\\overline{\\boldsymbol{\\theta}}_{N}=\\boldsymbol{\\theta}_{u}\\right) \\rightarrow $ $ as $ N \\rightarrow \\infty $
> - $ \\boldsymbol{\\theta}_{u}:=\\left(1 / \\sqrt{1+u^{2}}, u / \\sqrt{1+u^{2}}\\right) $.

[Skip the proof](#end-proof-of-lemma-1)

#### Proof of Lemma 1

Let : $\\delta_u := \\arccos(\\dfrac{1}{\\sqrt{1+u^2}})$
- $\\cos\\delta_u = \\dfrac{1}{\\sqrt{1+u^2}}, \\sin\\delta_u = \\dfrac{u}{\\sqrt{1+u^2}}$ 
  - when $ \\hat{\\boldsymbol{\\theta}}_{k} \\in \\boldsymbol{\\Theta}_{1}:= $ $ \\left\\{(\\cos \\delta, \\sin \\delta) \\mid \\delta \\in\\left(0, \\delta_{u}\\right]\\right\\} $, $ \\hat{\\mathbf{x}}_{k}=\\tilde{\\mathbf{x}}\\left(\\hat{\\boldsymbol{\\theta}}_{k}, u\\right)=(0,1) $ almost surely. (Notice the slope)
  - When $ \\hat{\\boldsymbol{\\theta}}_{k} \\in \\boldsymbol{\\Theta}_{2}:= $ $ \\left\\{(\\cos \\delta, \\sin \\delta) \\mid \\delta \\in\\left(\\delta_{u}, \\pi / 2\\right)\\right\\} $, $ \\hat{\\mathbf{x}}_{k}=\\tilde{\\mathbf{x}}\\left(\\hat{\\boldsymbol{\\theta}}_{k}, u\\right)=(u, 0) $ almost surely. (Notice the slope)

Notice:

$\\hat{\\boldsymbol{\\theta}} \\in \\boldsymbol{\\Theta}=\\boldsymbol{\\Theta}_{1} \\cup \\boldsymbol{\\Theta}_{2}$

Then:

##### ($5)

$ \\hat{\\mathbf{x}}_{k}=\\left\\{\\begin{array}{l}(0,1), \\text { w.p. } 2 \\delta_{u} / \\pi \\\\ (u, 0), \\text { w.p. }\\left(\\pi-2 \\delta_{u}\\right) / \\pi\\end{array}\\right. $

$N_1$ : the numbers of $(0,1)$ in $\\mathcal D$

$N_1$ : the numbers of $(u,0)$ in $\\mathcal D$
- $\\mathcal D = \\{\\mathbf u_k,\\hat{\\mathbb x_k}\\}_{k\\in[N]}$

For $\\mathbf {IO}(\\mathcal D)$ :

##### (16)

$ \\overline{\\boldsymbol{\\theta}}_{N}:=\\underset{\\boldsymbol{\\theta} \\in \\boldsymbol{\\Theta}}{\\operatorname{argmin}} \\frac{N_{1}}{N} l_{1}(\\boldsymbol{\\theta})+\\frac{N_{2}}{N} l_{2}(\\boldsymbol{\\theta}) $


##### (17)
- $ l_{1}(\\boldsymbol{\\theta})=\\left\\{\\begin{array}{ll}0, & \\text { if } \\boldsymbol{\\theta} \\in \\boldsymbol{\\Theta}_{1} \\\\ \\theta_{2}-u \\theta_{1}, & \\text { if } \\boldsymbol{\\theta} \\in \\boldsymbol{\\Theta}_{2}\\end{array}\\right. $

##### (18)
- $ l_{2}(\\boldsymbol{\\theta})=\\left\\{\\begin{array}{ll}u \\theta_{1}-\\theta_{2}, & \\text { if } \\boldsymbol{\\theta} \\in \\boldsymbol{\\Theta}_{1}, \\\\ 0, & \\text { if } \\boldsymbol{\\theta} \\in \\boldsymbol{\\Theta}_{2} .\\end{array}\\right. $

Now discuss:

- When $N_1 > 0, N_2 > 0$ The minimum is $0$, occurs at $\\boldsymbol \\theta = (\\cos\\theta_u,\\sin\\delta_u)$
- $N_2 = 0$ : The minimum is $0$, occurs at $\\boldsymbol \\theta\\in\\boldsymbol \\Theta _1$
- $N_1 = 0$ : The minimum is $0$, occurs at $\\boldsymbol \\theta \\in\\boldsymbol \\Theta _2$

Then :


##### ($9)

$ \\mathbb{P}\\left(N_{1} N_{2}>0\\right) \\leq \\mathbb{P}\\left(\\overline{\\boldsymbol{\\theta}}_{N}=\\left(\\cos \\delta_{u}, \\sin \\delta_{u}\\right)\\right) \\leq 1 $

With the probability distribution in [(15)](#15), and $\\mathcal D$ is generated i.i.d. from $\\mathbb P_\\theta $:

##### (20)

$ \\mathbb{P}\\left(N_{1} N_{2}>0\\right)=1-\\left(\\dfrac{2 \\delta_{u}}{\\pi}\\right)^{N}-\\left(1-\\dfrac{2 \\delta_{u}}{\\pi}\\right)^{N} $

it converges to $1$ as $N$ goes to infinity

So $ \\mathbb{P}\\left(\\overline{\\boldsymbol{\\theta}}_{N}=\\left(\\cos \\delta_{u}, \\sin \\delta_{u}\\right)\\right) $ converges to 1 as $N $ goes to infinity (Squeeze Theorem)

#### End Proof of Lemma 1

Notice $\\boldsymbol \\theta ^* \\ne \\boldsymbol \\theta _u$, then AOG and PGO can be arbitrarily large

### Proposition 1

> In Example 1, Let: 
> $ \\overline{\\mathbf{x}}_{\\mathrm{IO}}(u)=\\tilde{\\mathbf{x}}\\left(\\boldsymbol{\\theta}_{u}, u\\right) $. 
> Then:
> For any $ v \\in \\mathbb{R}_{+} $there exists some $ \\bar{u}>1 $ such that: 
> $ \\mathrm{AOG}\\left(\\overline{\\mathrm{x}}_{\\mathrm{IO}}\\right)>v $ and $ \\mathrm{POG}\\left(\\overline{\\mathrm{x}}_{\\mathrm{IO}}\\right)>v $ for any $ u>\\bar{u} $

[Skip the proof](#end-proof-for-proposition-1)



#### Proof for Proposition 1

##### Lemma 4

> In Example 1, Let: 
> $ \\overline{\\mathbf{x}}_{\\mathrm{IO}}(u)=\\tilde{\\mathbf{x}}\\left(\\boldsymbol{\\theta}_{u}, u\\right) $. 
> For any $ v \\in \\mathbb{R}_{+} $there exists some $ \\bar{u}>1 $, such that: 
> $ \\operatorname{AOG}\\left(\\overline{\\mathrm{x}}_{\\mathrm{IO}}\\right)>v $ for any $ u>\\bar{u}_{A O G} $.

###### Proof for lemma 4

According to the definition of $\\bar{\\mathbf  x}$, we know that:

$\\bar{\\mathbf x_{IO}}(u)$ is uniformly drawn from:

###### (21)

$ \\mathcal{X}^{\\mathrm{OPT}}\\left(\\boldsymbol{\\theta}_{u}, u\\right)=\\left\\{\\left.\\left(\\frac{u t}{\\sqrt{u^{2}+1}}, 1-\\frac{t}{\\sqrt{u^{2}+1}}\\right) \\right\\rvert\\, t \\in\\left[0, \\sqrt{u^{2}+1}\\right]\\right\\} $

Since:

$\\boldsymbol \\theta ^* = (\\cos\\dfrac{\\pi}{4},\\sin\\dfrac{\\pi}{4})$ : ground-truth
$\\mathbf x^* = (0,1)$: true optimal solution

$\\tilde f(\\boldsymbol \\theta ^*,u) = \\dfrac{\\sqrt 2}{2}$

Then :

###### (22)

$$
\\begin{aligned}
&\\operatorname{AOG}\\left(\\overline{\\mathrm{x}}_{\\mathrm{IO}}\\right)\\\\ 
&=  \\mathbb{E}\\left[f\\left(\\boldsymbol{\\theta}^{*}, \\overline{\\mathbf{x}}_{\\mathrm{IO}}(\\mathbf{u})\\right)-f\\left(\\boldsymbol{\\theta}^{*}, \\tilde{\\mathbf{x}}\\left(\\boldsymbol{\\theta}^{*}, \\mathbf{u}\\right)\\right)\\right]  \\\\
&=\\int_{0}^{\\sqrt{u^{2}+1}} \\frac{\\sqrt{2}}{2 \\sqrt{u^{2}+1}}\\left(\\frac{u t}{\\sqrt{u^{2}+1}} + 1-\\frac{t}{\\sqrt{u^{2}+1}}\\right) d t-\\frac{\\sqrt{2}}{2}\\\\ 
&=\\frac{\\sqrt{2}(u-1)}{4}
\\end{aligned}
$$

Therefore:

For any $v\\in\\mathbb R_+$, exists:

$\\bar{u}_{\\mathrm{AOG}} = 2\\sqrt 2v + 1$, s.t.:

$\\mathrm{AOG} (\\bar{\\mathbf x}_{\\mathrm{IO}}) > v1, for any 1u > \\bar{u}_{\\mathrm{AOG}}$


###### End proof for lemma 4

##### Lemma 5

> In Example 1, let:  
> $ \\overline{\\mathbf{x}}_{\\mathrm{IO}}(u)=\\tilde{\\mathbf{x}}\\left(\\boldsymbol{\\theta}_{u}, u\\right) $. 
> for any $ v \\in \\mathbb{R}_{+} $there exists some $ \\bar{u}_{P O G}>1 $ such that :
> $ \\mathrm{POG}\\left(\\overline{\\mathrm{x}}_{\\mathrm{IO}}\\right)>v $ for any $ u>\\bar{u}_{\\text {POG }} $.

[Skip the proof](#end-proof-for-lemma-5)

###### Proof for lemma 5

According to the definition of $\\tilde {\\mathbf x}$, $\\bar{\\mathbf x}_{\\mathrm{IO}(u)}$ is uniformly drawn from:

###### (23)

$\\mathcal{X}^{\\mathrm{OPT}}\\left(\\boldsymbol{\\theta}_{u}, u\\right)=\\left\\{\\left.\\left(\\frac{u t}{\\sqrt{u^{2}+1}}, 1-\\frac{t}{\\sqrt{u^{2}+1}}\\right) \\right \\rvert\\, t \\in\\left[0, \\sqrt{u^{2}+1}\\right]\\right\\} $

Similarly, we have:

When $\\hat{\\boldsymbol{\\theta}} \\in \\boldsymbol{\\Theta}_{1}:=\\left\\{(\\cos \\delta, \\sin \\delta) \\mid \\delta \\in\\left(0, \\delta_{u}\\right]\\right\\}$, we have: 

$\\hat{\\mathbf{x}}_{k}=\\tilde{\\mathbf{x}}(\\hat{\\boldsymbol{\\theta}}, u)=(0,1)$,  with $\\tilde{f}(\\hat{\\boldsymbol{\\theta}}, u)=\\hat{\\theta}_{2}$ almost surely; 

When $\\hat{\\boldsymbol{\\theta}} \\in \\Theta_{2}:=\\left\\{(\\cos \\delta, \\sin \\delta) \\mid \\delta \\in\\left(\\delta_{u}, \\pi / 2\\right\\}\\right.$, we have : 

$\\hat{\\mathbf{x}}_{k}=\\tilde{\\mathbf{x}}(\\hat{\\boldsymbol{\\theta}}, u)=(u, 0)$ with $\\tilde{f}(\\hat{\\boldsymbol{\\theta}}, u)=u \\hat{\\theta}_{1}$ almost surely. 

Since the optimal solution drawn from $\\mathcal{X}^{\\mathrm{OPT}}\\left(\\boldsymbol{\\theta}_{u}, u\\right)$ is independent of the DM's perception $\\hat{\\boldsymbol{\\theta}}$, we have:

$$
\\begin{aligned}
&\\operatorname{POG}(\\overline{\\mathbf{x}}_{\\mathrm{IO}})\\\\ 
&=\\mathbb{E}[f(\\hat{\\boldsymbol{\\theta}}, \\overline{\\mathbf{x}}_{\\mathrm{IO}}(\\mathbf{u}))-f(\\hat{\\boldsymbol{\\theta}}, \\tilde{\\mathbf{x}}(\\hat{\\boldsymbol{\\theta}}, \\mathbf{u}))]\\\\ 
&= \\int_{0}^{\\delta_{u}} \\int_{0}^{\\sqrt{u^{2}+1}} \\frac{1}{\\sqrt{u^{2}+1}}\\left[\\frac{u t}{\\sqrt{u^{2}+1}} \\cos \\delta+\\left(1-\\frac{t}{\\sqrt{u^{2}+1}}\\right) \\sin \\delta-\\sin \\delta\\right] d t d \\delta \\\\ 
& +\\int_{\\delta_{u}}^{\\pi / 2} \\int_{0}^{\\sqrt{u^{2}+1}} \\frac{1}{\\sqrt{u^{2}+1}}\\left[\\frac{u t}{\\sqrt{u^{2}+1}} \\cos \\delta+\\left(1-\\frac{t}{\\sqrt{u^{2}+1}}\\right) \\sin \\delta-u \\cos \\delta\\right] d t d \\delta \\\\ 
&= \\frac{1}{2} \\int_{0}^{\\delta_{u}}(u \\cos \\delta-\\sin \\delta) d \\delta+\\frac{1}{2} \\int_{\\delta_{u}}^{\\pi / 2}(-u \\cos \\delta+\\sin \\delta) d \\delta \\\\ 
&= \\sqrt{1+u^{2}}-\\frac{u+1}{2} . \\\\ 
&> \\frac{u-1}{2} \\text{ (notice: } \\sqrt{1+u^2}>u\\text{)}
\\end{aligned}
$$

Therefore, for any $\\in\\mathbb R_+$, exists:

$\\bar{u}_{\\mathrm{POG}}=2 v+1$, such that : 

$\\operatorname{POG}\\left(\\overline{\\mathbf{x}}_{\\mathrm{IO}}\\right)>v$ , for any $u>\\bar{u}_{\\mathrm{POG}}$.

###### End proof for lemma 5

#### End proof for proposition 1

## Robustify the Inverse Optimization Pipeline 

- not solve $\\mathbf{FO}$ with some estimated parameters $\\bar{\\boldsymbol \\theta}$ 

- solve **robust forward optimization problem** with an uncertainty set around $\\bar{\\boldsymbol \\theta }$ :

#### (8)

$\\boldsymbol{\\mathbf  { R F O }}(\\mathcal{C}(\\overline{\\boldsymbol{\\theta}}, \\boldsymbol{\\alpha}), \\mathbf{u}): \\underset{\\mathbf{x} \\in \\mathcal{X}(\\mathbf{u})}{\\operatorname{min}} \\underset{\\boldsymbol{\\theta} \\in \\mathcal{C}(\\overline{\\boldsymbol{\\theta}}, \\boldsymbol{\\alpha})}{\\operatorname{max}} f(\\boldsymbol{\\theta}, \\mathbf{x})$
- $\\mathcal C $: uncertainty set
  - $\\bar{\\boldsymbol \\theta }$: center
  - $\\boldsymbol \\alpha $ : parameters that control the shape / size
- Since $f$ is linear in $\\boldsymbol \\theta $, then:

#### (9)
- $\\mathcal{C}(\\overline{\\boldsymbol{\\theta}}, \\alpha):=\\left\\{\\boldsymbol{\\theta} \\in \\mathbb{R}^{d} \\mid\\|\\boldsymbol{\\theta}\\|_{2}=1, \\boldsymbol{\\theta}^{\\top} \\overline{\\boldsymbol{\\theta}} \\geq \\cos \\alpha\\right\\}$
  - $\\alpha\\in(0,\\pi)$

### Remark 1

TODO

### Lemma 2

> In Example 1, let:  
> $\\overline{\\mathbf{x}}_{\\mathrm{CIO}}(u)$ be an optimal solution to $\\mathbf{R F O}\\left(\\mathcal{C}\\left(\\overline{\\boldsymbol{\\theta}}_{N}, \\alpha\\right)\\right. , u)$
> - $\\overline{\\boldsymbol{\\theta}}_{N}$ is an optimal solution to $\\mathbf{I O}(\\mathcal{D})$ with the sub-optimality loss [(6)](#6).
> 
> When $\\alpha \\in(0, \\pi / 2)$, we have :
> $\\mathbb{P}\\left[\\mathrm{AOG}\\left(\\mathbf{x}_{\\mathrm{CIO}}\\right)=0\\right] \\rightarrow 1$ and $\\mathbb{P}\\left[\\mathrm{POG}\\left(\\overline{\\mathbf{x}}_{\\mathrm{CIO}}\\right)<\\pi / 2 \\sqrt{2}\\right] \\rightarrow 1$ as $N \\rightarrow \\infty$.

#### Proof of lemma 2

TODO

# Conformal Inverse Optimization

## Learning an Uncertainty Set

### Data split

Split $\\mathcal D$ into:

$\\mathcal D_{\\text{train}}, \\mathcal D _{\\text{val}}$, 

Let :

$\\mathcal{K}_{\\text {train }}$ and $\\mathcal{K}_{\\text {val }}$ index $\\mathcal{D}_{\\text {train }}$ and $\\mathcal{D}_{\\text {val }}$,

 $N_{\\text {train }}=\\left|\\mathcal{D}_{\\text {train }}\\right|$ and $N_{\\text {val }}=\\left|\\mathcal{D}_{\\text {val }}\\right|$.

### Point estimation 

Given training set $\\mathcal D_{\\text{train}}$, we obtain a **point estimation** $\\bar{\\boldsymbol \\theta } $ of the unknown parameters

### Uncertainty set calibration

Given a point estimation $\\bar{\\boldsymbol \\theta } $, we solve the following **calibration problem **

#### (10)

$\\begin{aligned} \\mathbf{C P}\\left(\\overline{\\boldsymbol{\\theta}}, \\mathcal{D}_{\\text {val }}, \\gamma\\right): \\underset{\\alpha,\\left\\{\\boldsymbol{\\theta}_{k}\\right\\}_{k \\in \\mathcal{K}_{\\text {val }}}}{\\operatorname{min}} & \\alpha \\\\ \\text { s.t. } & \\hat{\\mathbf{x}}_{k} \\in \\mathcal{X}^{\\mathrm{OPT}}\\left(\\boldsymbol{\\theta}_{k}, \\mathbf{u}_{k}\\right), \\forall k \\in \\mathcal{K}_{\\text {val }} \\\\ & \\sum_{k \\in \\mathcal{K}_{\\text {val }}} \\mathbb{1}\\left[\\boldsymbol{\\theta}_{k} \\in \\mathcal{C}(\\overline{\\boldsymbol{\\theta}}, \\alpha)\\right] \\geq \\gamma\\left(N_{\\text {val }}+1\\right) \\\\ & \\left\\|\\boldsymbol{\\theta}_{k}\\right\\|_{2}=1, \\forall k \\in \\mathcal{K}_{\\text {val }} \\\\ & 0 \\leq \\alpha \\leq \\pi,\\end{aligned}$

- $\\alpha$ controls the size of the uncertainty set 
- $\\boldsymbol \\theta _k $ represent a possible parameter vecto
r associated with $k\\in\\mathcal K_\\text{val}$
- $\\gamma \\in[0,1]$ is a DM-specefied confidence level

How to decompose:

### Theorem 1

>Let: 
> $\\mathcal{D}_{\\mathrm{val}}$ be a dataset, $\\gamma \\in[0,1], \\overline{\\boldsymbol{\\theta}} \\in \\mathbb{R}^{d}, \\tau=\\left\\lceil\\gamma\\left(N_{\\mathrm{val}}+1\\right)\\right\\rceil$ , $\\Gamma_{\\tau}$ be an operator that returns the $\\tau^{\\text {th }}$ largest value in a set. 
> The optimal solution to $\\mathbf{C P}\\left(\\overline{\\boldsymbol{\\theta}}, \\mathcal{D}_{\\text {val }}, \\gamma\\right)$ is: 
> $\\alpha_{\\gamma}:=\\arccos \\left(\\Gamma_{\\tau}\\left(\\left\\{c_{k}\\right\\}_{k \\in \\mathcal{K}_{\\text {vel }}}\\right)\\right)$ 
> - $c_{k}:=\\max _{\\boldsymbol{\\theta}_{k}}\\left\\{\\boldsymbol{\\theta}_{k}^{\\top} \\overline{\\boldsymbol{\\theta}} \\mid \\hat{\\mathbf{x}}_{k} \\in \\mathcal{X}^{\\mathrm{OPT}}\\left(\\boldsymbol{\\theta}_{k}, \\mathbf{u}_{k}\\right),\\left\\|\\boldsymbol{\\theta}_{k}\\right\\|_{2} \\leq 1\\right\\}$.

[Skip the proof](#end-proof-of-theorem-1)

#### Proof of Theorem 1

Define:

$\\hat{\\boldsymbol{\\Theta}}_{k}:=\\boldsymbol{\\Theta}^{\\mathrm{OPT}}\\left(\\mathbf{u}_{k}, \\hat{\\mathbf{x}}_{k}\\right)$ for any $k \\in[N]$

we can optimize:

$c:=\\cos \\alpha $, with $-1\\le c \\le 1$

Introduce:

$y_k\\in\\{0,1\\}$ that :
- $\\hat{\\boldsymbol{\\Theta}}_{k}$intersect learned uncertainty set ( $=1$)
- not intersect : ($=0$)
  - for any $k\\in\\mathcal K_{\\text{val}}$

We rewrite [(10)](#10):

##### (39)

$\\begin{aligned} \\max_{c,\\{\\boldsymbol \\theta _k\\}_{k\\in\\mathcal K_{\\text{val}}},\\{y_k\\}_{k\\in\\mathcal K_{\\text{val}}}}& c \\\\ \\text { s.t. } & \\hat{\\mathbf{x}}_{k} \\in \\mathcal{X}^{\\mathrm{OPT}}\\left(\\boldsymbol{\\theta}_{k}, \\mathbf{u}_{k}\\right), \\quad \\forall k \\in \\mathcal{K}_{\\text {val }} \\\\ & \\boldsymbol{\\theta}_{k}^{\\top} \\overline{\\boldsymbol{\\theta}} \\geq c+2\\left(y_{k}-1\\right), \\quad \\forall k \\in \\mathcal{K}_{\\text {val }} \\\\ & \\sum_{k \\in \\mathcal{K}_{\\text {val }}} y_{k} \\geq\\left\\lceil\\gamma\\left(N_{\\text {val }}+1\\right)\\right\\rceil \\\\ & \\left\\|\\boldsymbol{\\theta}_{k}\\right\\|_{2}=1, \\quad \\forall k \\in \\mathcal{K}_{\\text {val }} \\\\ & -1 \\leq c \\leq 1 \\\\ & y_{k} \\in\\{0,1\\}, \\quad \\forall k \\in \\mathcal{K}_{\\text {val }} .\\end{aligned}$

Notice decision variables $\\boldsymbol \\theta _k$ only interact in secont constraint, we can rewrite:

##### (40)

$\\begin{array}{ll}\\operatorname{max} & c \\\\ \\text { s.t. } & c \\leq c_{k}-2\\left(y_{k}-1\\right), \\quad \\forall k \\in \\mathcal{K}_{\\text {val }} \\\\ & \\sum_{k \\in \\mathcal{K}_{\\text {val }}} y_{k} \\geq\\left\\lceil\\gamma\\left(N_{\\text {val }}+1\\right)\\right\\rceil \\\\ & -1 \\leq c \\leq 1 \\\\ & y_{k} \\in\\{0,1\\}, \\quad \\forall k \\in \\mathcal{K}_{\\text {val }},\\end{array}$

where:


##### (41)

$\\begin{aligned} c_{k}:=\\underset{\\boldsymbol{\\theta}_{k}}{\\max } & \\boldsymbol{\\theta}_{k}^{\\top} \\overline{\\boldsymbol{\\theta}} \\\\ \\text { s.t. } & \\hat{\\mathbf{x}}_{k} \\in \\mathcal{X}^{\\mathrm{OPT}}\\left(\\boldsymbol{\\theta}_{k}, \\mathbf{u}_{k}\\right) \\\\ & \\left\\|\\boldsymbol{\\theta}_{k}\\right\\|_{2} \\leq 1\\end{aligned}$

Notice: optimal solution for [(40)](#40) is:

- $y_k = 1$, for all $k$ s.t. $c_{k} \\geq \\Gamma_{\\tau}\\left(\\left\\{c_{k}\\right\\}_{k \\in \\mathcal{K}_{\\text {val }}}\\right)$
- $y_k = 0$, otherwise
  - $\\tau = \\dfrac{\\gamma (N_{\\text{val}}+1)}{N_{\\text{val}}}$
  - $\\gamma _{\\tau}(\\{c_k\\})$: quantile function

Therefore : 

Optimal objective value of [(40)](#40) is :

$c=\\Gamma_{\\tau}\\left(\\left\\{c_{k}\\right\\}_{k \\in \\mathcal{K}_{\\mathrm{val}}}\\right)$

That is :

$\\alpha_{\\gamma}=\\arccos \\Gamma_{\\tau}\\left(\\left\\{c_{k}\\right\\}_{k \\in \\mathcal{K}_{\\mathrm{val}}}\\right)$

#### End proof of theorem 1

## Properties of Conformal IO

### Theorem 2 (Uncertainty Set Validity)

> Let: 
> $\\mathcal{D}_{\\text {val }}$ : a dataset that satisfies Assumption 1, 
> $(\\hat{\\boldsymbol{\\theta}}, \\mathbf{u})$ : a new i.i.d. sample from $\\mathbb{P}_{(\\boldsymbol{\\theta}, \\mathbf{u})}$,
> $\\hat{\\mathbf{x}}=\\tilde{\\mathbf{x}}(\\hat{\\boldsymbol{\\theta}}, \\mathbf{u})$, 
> $\\hat{\\boldsymbol{\\Theta}}:=\\boldsymbol{\\Theta}^{\\mathrm{OPT}}(\\hat{\\mathbf{x}}, \\mathbf{u})$, 
>  $\\alpha_{\\gamma}$ be an optimal solution to : 
> $\\mathbf{C P}\\left(\\overline{\\boldsymbol{\\theta}}, \\mathcal{D}_{\\text {val }}, \\gamma\\right)$ 
> - $\\overline{\\boldsymbol{\\theta}} \\in \\mathbb{R}^{d}$
> We have:
> #### (11)
> $\\mathbb{P}\\left(\\hat{\\boldsymbol{\\Theta}} \\cap \\mathcal{C}\\left(\\overline{\\boldsymbol{\\theta}}, \\alpha_{\\gamma}\\right) \\neq \\varnothing\\right) \\geq \\gamma$
> - for any $\\gamma \\in\\left[0, N_{\\text {val }} /\\left(N_{\\text {val }}+1\\right)\\right]$
> #### (12)
> $\\left|\\mathbb{P}\\left(\\hat{\\boldsymbol{\\Theta}} \\cap \\mathcal{C}\\left(\\overline{\\boldsymbol{\\theta}}, \\alpha_{\\gamma}\\right) \\neq \\varnothing\\right)-\\gamma\\right| \\leq \\sqrt{\\frac{8 \\log \\left(N_{v a l}+1\\right)+2 \\log N_{v a l}}{N_{v a l}}}+\\frac{2}{N_{v a l}}$
> - with probability at least $1-\\dfrac 1 N_{\\text {val }}$
> for any $\\gamma \\in[0,1 ]$

[Skip the proof](#proof-of-theorem-2)

#### Proof of Theorem 2

We define:

##### (42)
 
$ \\begin{aligned} A_{\\overline{\\boldsymbol{\\theta}}}(\\hat{\\mathbf{x}}, \\mathbf{u}):=\\underset{\\boldsymbol{\\theta}}{\\operatorname{max }} & \\boldsymbol{\\theta}^{\\mathrm{\\top}} \\overline{\\boldsymbol{\\theta}} \\\\ \\text { s.t.  } & \\boldsymbol{\\theta} \\in \\boldsymbol{\\Theta}^{\\mathrm{OPT}}(\\hat{\\mathbf{x}}, \\mathbf{u}) \\\\ & \\|\\boldsymbol{\\theta}\\|_{2} \\leq 1 .\\end{aligned} $

Notice:

$ c_{k}=A_{\\overline{\\boldsymbol{\\theta}}}\\left(\\hat{\\mathbf{x}}_{k}, \\mathbf{u}_{k}\\right) $ for any $ k \\in \\mathcal{K}_{\\text {val }} $
- $c_k$ is defined in [Theorem 1](#theorem-1)

Let:


$\\tau = [\\gamma (N_{\\text{val }}+1)]$

$ \\mathcal{A}:=\\left\\{A_{\\overline{\\boldsymbol{\\theta}}}\\left(\\hat{\\mathbf{x}}_{k}, \\mathbf{u}_{k}\\right)\\right\\}_{k \\in \\mathcal{K}_{\\mathrm{val}}} $

Then: 

##### (43)

$ \\mathbb{P}\\left(\\boldsymbol{\\Theta}^{\\mathrm{OPT}}(\\hat{\\mathbf{x}}, \\mathbf{u}) \\cap \\mathcal{C}(\\overline{\\boldsymbol{\\theta}}, \\alpha) \\neq \\varnothing\\right)=\\mathbb{P}\\left(A_{\\overline{\\boldsymbol{\\theta}}}(\\hat{\\mathbf{x}}, \\mathbf{u}) \\geq \\Gamma^{\\tau}(\\mathcal{A})\\right) $

Let : 

$ \\mathcal{D}^{\\prime}=\\mathcal{D}_{\\text {val }} \\cup\\{(\\hat{\\mathbf{x}}, \\mathbf{u})\\} $

$ \\mathcal{A}^{\\prime}=\\mathcal{A} \\cup\\left\\{A_{\\overline{\\boldsymbol{\\theta}}}(\\hat{\\mathbf{x}}, \\mathbf{u})\\right\\} $

Then : 

$ \\begin{aligned} \\gamma & \\leq \\mathbb{P}\\left\\{A_{\\overline{\\boldsymbol{\\theta}}}(\\hat{\\mathbf{x}}, \\mathbf{u}) \\geq \\Gamma^{\\tau}\\left(\\mathcal{A}^{\\prime}\\right)\\right\\} \\\\ & =1-\\mathbb{P}\\left\\{A_{\\overline{\\boldsymbol{\\theta}}}(\\hat{\\mathbf{x}}, \\mathbf{u})<\\Gamma^{\\tau}\\left(\\mathcal{A}^{\\prime}\\right)\\right\\} \\\\ & =1-\\mathbb{P}\\left\\{A_{\\overline{\\boldsymbol{\\theta}}}(\\hat{\\mathbf{x}}, \\mathbf{u})<\\Gamma^{\\tau}(\\mathcal{A})\\right\\} \\\\ & =\\mathbb{P}\\left\\{A_{\\overline{\\boldsymbol{\\theta}}}(\\hat{\\mathbf{x}}, \\mathbf{u}) \\geq \\Gamma^{\\tau}(\\mathcal{A})\\right\\} \\\\ & =\\mathbb{P}\\left\\{\\boldsymbol{\\Theta}^{\\mathrm{OPT}}(\\hat{\\mathbf{x}}, \\mathbf{u}) \\cap \\mathcal{C}(\\overline{\\boldsymbol{\\theta}}, \\alpha) \\neq \\varnothing\\right\\}\\end{aligned} $


Next, Let:

$ z_{k}:=\\left(\\mathbf{u}_{k}, \\hat{\\mathbf{x}}_{k}\\right), \\mathcal{Z}:= $ $ \\left\\{z_{k}\\right\\}_{k \\in \\mathcal{K}_{\\text {val }}} $

Define:

##### (44)

$ \\mathcal{H}=\\left\\{h(z, \\alpha)=\\mathbb{1}\\left[\\boldsymbol{\\Theta}^{\\mathrm{OPT}}(\\hat{\\mathbf{x}}, \\mathbf{u}) \\cap \\mathcal{C}(\\overline{\\boldsymbol{\\theta}}, \\alpha)\\right] \\mid \\alpha \\in(0, \\pi)\\right\\} $

##### (36)

$ \\Pi_{\\mathcal{H}}(N):=\\max _{\\left(Z_{1}, Z_{2}, \\ldots, Z_{N}\\right) \\in \\mathcal{Z}^{N}}\\left|\\left\\{\\left(h\\left(Z_{1}\\right), h\\left(Z_{2}\\right), \\ldots, h\\left(Z_{N}\\right)\\right) \\mid h \\in \\mathcal{H}\\right\\}\\right| $

We can see:

##### (45)

$ \\Pi_{\\mathcal{H}}\\left(N_{\\mathrm{val}}\\right)=N_{\\mathrm{val}}+1 $

##### Lemma 9

> Let $ \\mathcal{H} $ be a class of functions taking values in $ \\{1,-1\\} $, 
> Then, for any integer $ N \\geq 1 $, the following holds
> $
\\Re_{N}(\\mathcal{H}) \\leq \\sqrt{\\frac{2 \\log \\Pi_{\\mathcal{H}}(N)}{N}} .
$
##### (35)

> - $
\\mathfrak{R}_{N}(\\mathcal{F}):=\\mathbb{E}_{\\mathcal{D} \\sim \\mathbb{P}^{N}}\\left[\\hat{\\mathfrak{R}}_{\\mathcal{D}}(\\mathcal{F})\\right]
$

Then : 

$ \\gamma \\leq \\frac{1}{N_{\\text {val }}} \\sum_{k \\in \\mathcal{K}_{\\text {val }}} h\\left(z_{k}, \\alpha\\right) \\leq \\gamma+\\frac{2}{N_{\\text {val }}} $.

##### (46)

$ \\Re_{N_{\\mathrm{val}}}(\\mathcal{H}) \\leq \\sqrt{\\dfrac{2 \\log \\left(N_{\\mathrm{val}}+1\\right)}{N_{\\mathrm{val}}}} $

Notice, $\\alpha$ is the smallest value that:

##### (47)

$ \\dfrac{1}{N_{\\text {val }}} \\sum_{k \\in \\mathcal{K}_{\\text {val }}} h\\left(z_{k}, \\alpha\\right)=\\dfrac{1}{N_{\\text {val }}} \\sum_{k \\in \\mathcal{K}_{\\text {val }}} \\mathbb{1}\\left[\\boldsymbol{\\Theta}^{\\mathrm{OPT}}\\left(\\hat{\\mathbf{x}}_{k}, \\mathbf{u}_{k}\\right) \\cap \\mathcal{C}(\\overline{\\boldsymbol{\\theta}}, \\alpha)\\right]=\\dfrac{\\left\\lceil\\gamma\\left(N_{\\text {val }}+1\\right)\\right\\rceil}{N_{\\text {val }}} $

So:

$ \\gamma \\leq \\dfrac{1}{N_{\\text {val }}} \\sum_{k \\in \\mathcal{K}_{\\text {val }}} h\\left(z_{k}, \\alpha\\right) \\leq \\gamma+\\dfrac{2}{N_{\\text {val }}} $.

##### Lemma 10

> For any b-uniformly bounded class of functions $ \\mathcal{F} $, any positive integer $ N \\geq 1 $, and any scalar $ \\delta \\geq 0 $, 
> with probability at least:  
> $ 1-\\exp \\left(-N \\delta^{2} /\\left(2 b^{2}\\right)\\right) $, 
> we have : 
> $\\sup _{f \\in \\mathcal{F}}\\left|\\frac{1}{N} \\sum_{i \\in[N]} f\\left(X_{i}\\right)-\\mathbb{E}\\left[f\\left(X_{i}\\right)\\right]\\right| \\leq 2 \\mathfrak{R}_{N}(\\mathcal{F})+\\delta$  
> - $ \\mathfrak{R}(\\mathcal{F}) $ denotes the Rademacher complexity of the function class $ \\mathcal{F} $.

Then with probability at least $\\delta = 1 - \\dfrac{1}{N_\\text{val}}$ :

##### (50)

$ \\left|\\dfrac{1}{N_{\\text {val }}} \\sum_{k \\in \\mathcal{K}_{\\text {val }}} h\\left(z_{k}, \\alpha\\right)-\\mathbb{E}[h(z, \\alpha)]\\right| \\leq 2 \\mathfrak{R}_{N_{\\text {val }}}(\\mathcal{H})+\\sqrt{\\dfrac{2 \\log N_{\\text {val }}}{N_{\\text {val }}}} $

Combine [(46)](#46) - [(50)](#50) is all

#### End proof of Theorem 2

### Lemma 3

> For any : 
> $ \\hat{\\mathbf{x}} \\in \\tilde{\\mathbf{x}}(\\hat{\\boldsymbol{\\theta}}, \\mathbf{u}) $ and $ (\\hat{\\boldsymbol{\\theta}}, \\mathbf{u}) \\in \\boldsymbol{\\Theta} \\times \\mathcal{U} $, 
> there exists a constant : 
> $ \\nu(\\hat{\\mathbf{x}}) \\in \\mathbb{R}_{+} $ 
> such that, for any : 
> $ \\boldsymbol{\\theta}, \\boldsymbol{\\theta}^{\\prime} \\in \\boldsymbol{\\Theta} $, 
> we have : 
> $ f(\\boldsymbol{\\theta}, \\hat{\\mathbf{x}})-f\\left(\\boldsymbol{\\theta}^{\\prime}, \\hat{\\mathbf{x}}\\right) \\leq \\nu(\\hat{\\mathbf{x}})\\left\\|\\boldsymbol{\\theta}-\\boldsymbol{\\theta}^{\\prime}\\right\\|_{2} $

[Skip the proof](#end-proof-for-lemma-3)

#### Proof of Lemma 3

For any fixed $\\mathbb x$, we have:

$ \\begin{aligned} f(\\boldsymbol{\\theta}, \\hat{\\mathbf{x}})-f\\left(\\boldsymbol{\\theta}^{\\prime}, \\hat{\\mathbf{x}}\\right) & =\\sum_{i \\in[d]}\\left(\\theta_{i}-\\theta_{i}^{\\prime}\\right) f_{i}(\\hat{\\mathbf{x}}) \\\\ & \\leq \\sqrt{\\sum_{i \\in[d]} f_{i}^{2}(\\hat{\\mathbf{x}})} \\sqrt{\\sum_{i \\in[d]}\\left(\\theta_{i}-\\theta_{i}^{\\prime}\\right)^{2}} \\\\ & =\\nu(\\hat{\\mathbf{x}})\\left\\|\\boldsymbol{\\theta}-\\boldsymbol{\\theta}^{\\prime}\\right\\|_{2}\\end{aligned} $
- $ \\nu(\\hat{\\mathbf{x}}):=\\sqrt{\\sum_{i \\in[d]} f_{i}^{2}(\\hat{\\mathbf{x}})} $

#### End proof of lemma 3

### Theorem 3 (POG Bound)

> Let $ \\overline{\\mathbf{x}}_{\\mathrm{CIO}}(\\mathbf{u}) $ be an optimal solution to $ \\mathbf{R F O}\\left(\\mathcal{C}\\left(\\overline{\\boldsymbol{\\theta}}, \\alpha_{1}\\right), \\mathbf{u}\\right) $ for any $ \\mathbf{u} \\in \\mathcal{U} $ 
> - $ \\overline{\\boldsymbol{\\theta}} \\in \\mathbb{R}^{d} $ and $ \\alpha_{1} $ are chosen such that : 
>   - for a new sample : $ \\left(\\boldsymbol{\\theta}^{\\prime}, \\mathbf{u}^{\\prime}\\right) $ from $ \\mathbb{P}_{(\\boldsymbol{\\theta}, \\mathbf{u})} $ and $ \\mathbf{x}^{\\prime}=\\tilde{\\mathbf{x}}\\left(\\boldsymbol{\\theta}^{\\prime}, \\mathbf{u}^{\\prime}\\right) $, $ \\mathbb{P}\\left(\\mathcal{C}\\left(\\overline{\\boldsymbol{\\theta}}, \\alpha_{1}\\right) \\cap \\Theta^{\\mathrm{OPT}}\\left(\\mathbf{u}^{\\prime}, \\mathbf{x}^{\\prime}\\right) \\neq \\varnothing\\right)=1 $. 
> 
> If Assumptions [2](#assumption-2-bounded-inverse-feasible-set)-[3](#assumption-3-bounded-divergence) hold, then :
> $\\operatorname{POG}\\left(\\overline{\\mathbf{x}}_{\\mathrm{CIO}}\\right) \\leq\\left(\\eta-2 \\cos 2 \\alpha_{1}+2\\right) \\mu+\\eta \\mu_{\\mathrm{CIO}}$ 
> and 
> $\\mathrm{AOG}\\left(\\overline{\\mathbf{x}}_{\\mathrm{CIO}}\\right) \\leq\\left(2-2 \\cos 2 \\alpha_{1}+\\eta+\\sigma\\right) \\mu^{*}+(\\eta+\\sigma) \\mu_{\\mathrm{CIO}}$
> - $ \\mu:=\\mathbb{E}[\\nu(\\tilde{\\mathbf{x}}(\\hat{\\boldsymbol{\\theta}}, \\mathbf{u}))]$
> - $ \\mu_{\\mathrm{CIO}}:=\\mathbb{E}\\left(\\nu\\left[\\overline{\\mathbf{x}}_{\\mathrm{CIO}}(\\mathbf{u})\\right]\\right) $ 
> - $ \\mu^{*}:=\\mathbb{E}\\left(\\nu\\left[\\tilde{\\mathbf{x}}\\left(\\boldsymbol{\\theta}^{*}, \\mathbf{u}\\right)\\right]\\right) $.


#### Proof of Theorem 3

#### Proposition 2 (Conformal IO Achieves Bounded POG). 

> Let : 
> $ \\overline{\\mathbf{x}}_{\\mathrm{CIO}}(\\mathbf{u}) $ be an optimal solution to $ \\operatorname{RFO}\\left(\\mathcal{C}\\left(\\overline{\\boldsymbol{\\theta}}, \\alpha_{1}\\right), \\mathbf{u}\\right) $ for any $ \\mathbf{u} \\in \\mathcal{U} $ 
> - $ \\overline{\\boldsymbol{\\theta}} \\in \\mathbb{R}^{d} $ and $ \\alpha_{1} $ are chosen such that : 
>   - for a new sample $ \\left(\\boldsymbol{\\theta}^{\\prime}, \\mathbf{u}^{\\prime}\\right) $ from $ \\mathbb{P}_{(\\boldsymbol{\\theta}, \\mathbf{u})} $ and $ \\mathbf{x}^{\\prime}=\\tilde{\\mathbf{x}}\\left(\\boldsymbol{\\theta}^{\\prime}, \\mathbf{u}^{\\prime}\\right), \\mathbb{P}\\left(\\mathcal{C}\\left(\\overline{\\boldsymbol{\\theta}}, \\alpha_{1}\\right) \\cap \\boldsymbol{\\Theta}^{\\mathrm{OPT}}\\left(\\mathbf{u}^{\\prime}, \\mathbf{x}^{\\prime}\\right) \\neq \\varnothing\\right)=1 $. 
> 
> If Assumptions [2](#assumption-2-bounded-inverse-feasible-set)-[3](#assumption-3-bounded-divergence) hold, then: 
> $\\operatorname{POG}\\left(\\overline{\\mathbf{x}}_{\\mathrm{CIO}}\\right) \\leq\\left(\\eta-2 \\cos 2 \\alpha_{1}+2\\right) \\mu+\\eta \\mu_{\\mathrm{CIO}}$
> - $ \\mu:=\\mathbb{E}[\\nu(\\tilde{\\mathbf{x}}(\\hat{\\boldsymbol{\\theta}}, \\mathbf{u}))] $ 
> - $ \\mu_{\\mathrm{CIO}}:=\\mathbb{E}\\left(\\nu\\left[\\overline{\\mathbf{x}}_{\\mathrm{CIO}}(\\mathbf{u})\\right]\\right) $.

[Skip the proof](#end-proof-of-proposition-2)

##### Proof of Proposition 2

Let :  

$ (\\hat{\\boldsymbol{\\theta}}, \\mathbf{u}) $ be a sample from : 

$ \\mathbb{P}_{(\\boldsymbol{\\theta}, \\mathbf{u})}, \\hat{\\mathbf{x}}=\\tilde{\\mathbf{x}}(\\hat{\\boldsymbol{\\theta}}, \\mathbf{u}), $ 

$\\hat{\\boldsymbol{\\theta}}_{\\mathrm{CIO}}(\\mathbf{u}) $ be the optimal solution to the inner maximization problem in $ \\mathbf{R F O}\\left(\\mathcal{C}\\left(\\overline{\\boldsymbol{\\theta}}, \\alpha_{1}\\right), \\mathbf{u}\\right) $ 
- the outer decision variable is set to $ \\hat{\\mathbf{x}}_{\\mathrm{CIO}}(\\mathbb u)$

If : 

$ \\Theta^{\\mathrm{OPT}}(\\hat{\\mathbf{x}}, \\mathbf{u}) \\cap \\mathcal{C}\\left(\\overline{\\boldsymbol{\\theta}}, \\alpha_{1}\\right) \\neq \\varnothing $, 

let : 

$ \\tilde{\\boldsymbol{\\theta}} $ be an element of $ \\boldsymbol{\\Theta}^{\\mathrm{OPT}}(\\hat{\\mathbf{x}}, \\mathbf{u}) \\cap \\mathcal{C}\\left(\\overline{\\boldsymbol{\\theta}}, \\alpha_{1}\\right) $

We have:

$ \\begin{aligned} & f\\left(\\hat{\\boldsymbol{\\theta}}, \\overline{\\mathbf{x}}_{\\mathrm{CIO}}(\\mathbf{u})\\right)-f(\\hat{\\boldsymbol{\\theta}}, \\hat{\\mathbf{x}}) \\\\ \\leq & f\\left(\\tilde{\\boldsymbol{\\theta}}, \\overline{\\mathbf{x}}_{\\mathrm{CIO}}(\\mathbf{u})\\right)-f(\\tilde{\\boldsymbol{\\theta}}, \\hat{\\mathbf{x}})+\\left[\\nu(\\hat{\\mathbf{x}})+\\nu\\left(\\overline{\\mathbf{x}}_{\\mathrm{CIO}}(\\mathbf{u})\\right)\\right]\\|\\hat{\\boldsymbol{\\theta}}-\\tilde{\\boldsymbol{\\theta}}\\|_{2} \\\\ \\leq & f\\left(\\tilde{\\boldsymbol{\\theta}}, \\overline{\\mathbf{x}}_{\\mathrm{CIO}}(\\mathbf{u})\\right)-f(\\tilde{\\boldsymbol{\\theta}}, \\hat{\\mathbf{x}})+\\eta\\left[\\nu(\\hat{\\mathbf{x}})+\\nu\\left(\\overline{\\mathbf{x}}_{\\mathrm{CIO}}(\\mathbf{u})\\right)\\right] \\\\ \\leq & f\\left(\\overline{\\boldsymbol{\\theta}}_{\\mathrm{CIO}}(\\mathbf{u}), \\overline{\\mathbf{x}}_{\\mathrm{CIO}}(\\mathbf{u})\\right)-f(\\tilde{\\boldsymbol{\\theta}}, \\hat{\\mathbf{x}})+\\eta\\left[\\nu(\\hat{\\mathbf{x}})+\\nu\\left(\\overline{\\mathbf{x}}_{\\mathrm{CIO}}(\\mathbf{u})\\right)\\right] \\\\ \\leq & f\\left(\\hat{\\boldsymbol{\\theta}}_{\\mathrm{CIO}}(\\mathbf{u}), \\hat{\\mathbf{x}}\\right)-f(\\tilde{\\boldsymbol{\\theta}}, \\hat{\\mathbf{x}})+\\eta\\left[\\nu(\\hat{\\mathbf{x}})+\\nu\\left(\\overline{\\mathbf{x}}_{\\mathrm{CIO}}(\\mathbf{u})\\right)\\right] \\\\ \\leq & \\nu(\\hat{\\mathbf{x}})\\left\\|\\hat{\\boldsymbol{\\theta}}_{\\mathrm{CIO}}(\\mathbf{u})-\\tilde{\\boldsymbol{\\theta}}\\right\\|_{2}+\\eta\\left[\\nu(\\hat{\\mathbf{x}})+\\nu\\left(\\overline{\\mathbf{x}}_{\\mathrm{CIO}}(\\mathbf{u})\\right)\\right] \\\\ \\leq & 2 \\nu(\\hat{\\mathbf{x}})\\left(1-\\cos 2 \\alpha_{1}\\right)+\\eta\\left(\\nu(\\hat{\\mathbf{x}})+\\nu\\left[\\overline{\\mathbf{x}}_{\\mathrm{CIO}}(\\mathbf{u})\\right]\\right) \\\\ = & \\nu(\\hat{\\mathbf{x}})\\left(\\eta-2 \\cos 2 \\alpha_{1}+2\\right)+\\eta \\nu\\left[\\overline{\\mathbf{x}}_{\\mathrm{CIO}}(\\mathbf{u})\\right] .\\end{aligned} $

First line : [Lemma 3](#lemma-3)

Second line : [Assumption 2](#assumption-2-bounded-inverse-feasible-set)

Third line : Definition

Fourth line : $ \\left(\\overline{\\mathbf{x}}_{\\mathrm{CIO}}(\\mathbf{u}), \\overline{\\boldsymbol{\\theta}}_{\\mathrm{CIO}}(\\mathbf{u})\\right) $ is an optimal solution to $ \\boldsymbol{\\operatorname { R F O }}\\left(\\mathcal{C}\\left(\\overline{\\boldsymbol{\\theta}}, \\alpha_{1}\\right), \\mathbf{u}\\right) $

Fifth line : [Lemma 3](#lemma-3)

Sixth line : both $ \\hat{\\boldsymbol{\\theta}}_{\\mathrm{CIO}}(\\mathbf{u}) $ and $ \\tilde{\\boldsymbol{\\theta}} $ are in $ \\mathcal{C}\\left(\\overline{\\boldsymbol{\\theta}}, \\alpha_{1}\\right) $ so the angle between them is no larger than $ 2 \\alpha_{1} $. the $ L_{2} $ distance between them are bounded by $ 2\\left(1-\\cos 2 \\alpha_{1}\\right) $

Since $ \\alpha_{1} $ is chosen such that $ \\mathbb{P}\\left(\\boldsymbol{\\Theta}^{\\mathrm{OPT}}(\\hat{\\mathbf{x}}, \\mathbf{u}) \\cap \\mathcal{C}\\left(\\overline{\\boldsymbol{\\theta}}, \\alpha_{1}\\right)\\right)=1 $, we have ： 

$ \\begin{aligned} \\operatorname{POG}\\left(\\overline{\\mathbf{x}}_{\\mathrm{CIO}}\\right) & =\\mathbb{E}\\left[f\\left(\\hat{\\boldsymbol{\\theta}}, \\overline{\\mathbf{x}}_{\\mathrm{CIO}}(\\mathbf{u})\\right)-f(\\hat{\\boldsymbol{\\theta}}, \\hat{\\mathbf{x}})\\right] \\\\ & \\leq \\mathbb{E}\\left\\{\\nu(\\hat{\\mathbf{x}})\\left(\\eta-2 \\cos 2 \\alpha_{1}+2\\right)+\\eta \\nu\\left[\\overline{\\mathbf{x}}_{\\mathrm{CIO}}(\\mathbf{u})\\right]\\right\\} \\\\ & =\\mu\\left(\\eta-2 \\cos 2 \\alpha_{1}+2\\right)+\\eta \\mu_{\\mathrm{CIO}}\\end{aligned} $

- $ \\mu:=\\mathbb{E}[\\nu(\\hat{\\mathbf{x}})] $ 
- $ \\mu_{\\mathrm{CIO}}:=\\mathbb{E}\\left(\\nu\\left[\\overline{\\mathbf{x}}_{\\mathrm{CIO}}(\\mathbf{u})\\right]\\right) $

##### End Proof of Proposition 2

#### Proposition 3 (Conformal IO Achieves Bounded AOG). 

Let :

$ \\overline{\\mathbf{x}}_{\\mathrm{CIO}}(\\mathbf{u}) $ 

be an optimal solution to : 

$ \\operatorname{RFO}\\left(\\mathcal{C}\\left(\\overline{\\boldsymbol{\\theta}}, \\alpha_{1}\\right), \\mathbf{u}\\right) $ for any $ \\mathbf{u} \\in \\mathcal{U} $ 

- $ \\overline{\\boldsymbol{\\theta}} \\in \\mathbb{R}^{d} $ and $ \\alpha_{1} $ are chosen such that : 
  - for a new sample $ \\left(\\boldsymbol{\\theta}^{\\prime}, \\mathbf{u}^{\\prime}\\right) $ from $ \\mathbb{P}_{(\\boldsymbol{\\theta}, \\mathbf{u})} $ and $ \\mathbf{x}^{\\prime}=\\tilde{\\mathbf{x}}\\left(\\boldsymbol{\\theta}^{\\prime}, \\mathbf{u}^{\\prime}\\right), \\mathbb{P}\\left(\\mathcal{C}\\left(\\overline{\\boldsymbol{\\theta}}, \\alpha_{1}\\right) \\cap \\boldsymbol{\\Theta}^{\\mathrm{OPT}}\\left(\\mathbf{u}^{\\prime}, \\mathbf{x}^{\\prime}\\right) \\neq \\varnothing\\right)=1 $. 
  
If Assumptions [2](#assumption-2-bounded-inverse-feasible-set)-[3](#assumption-3-bounded-divergence) hold, then

$
\\operatorname{AOG}\\left(\\overline{\\mathbf{x}}_{\\mathrm{CIO}}\\right) \\leq\\left(2-2 \\cos 2 \\alpha_{1}+\\eta+\\sigma\\right) \\mu^{*}+(\\eta+\\sigma) \\mu_{\\mathrm{CIO}}
$
-  $ \\mu^{*}:=\\mathbb{E}\\left(\\nu\\left[\\tilde{\\mathbf{x}}\\left(\\boldsymbol{\\theta}^{*}, \\mathbf{u}\\right)\\right]\\right) $.

[Skip the proof](#end-proof-of-proposition-3)

##### Proof of Proposition 3


Let : 

$ (\\hat{\\boldsymbol{\\theta}}, \\mathbf{u}) $ be a sample from $ \\mathbb{P}_{(\\boldsymbol{\\theta}, \\mathbf{u})}, \\hat{\\mathbf{x}}=\\tilde{\\mathbf{x}}(\\hat{\\boldsymbol{\\theta}}, \\mathbf{u}) $, 

$ \\tilde{\\boldsymbol{\\theta}} $ be an element of $ \\boldsymbol{\\Theta}^{\\mathrm{OPT}}(\\hat{\\mathbf{x}}, \\mathbf{u}) \\cap \\mathcal{C}\\left(\\overline{\\boldsymbol{\\theta}}, \\alpha_{1}\\right) $ 

-  is non-empty almost surely because $ \\alpha_{1} $ is chosen such that : 
  -  $ \\mathbb{P}\\left(\\boldsymbol{\\Theta}^{\\mathrm{OPT}}(\\hat{\\mathbf{x}}, \\mathbf{u}) \\cap \\mathcal{C}\\left(\\overline{\\boldsymbol{\\theta}}, \\alpha_{1}\\right)\\right)=1 $. 
  
Let : 

$ \\overline{\\boldsymbol{\\theta}}_{\\mathrm{CIO}}(\\mathbf{u}) $ denote the optimal solution to the inner maximization problem in : 

$ \\operatorname{RFO}\\left(\\mathcal{C}\\left(\\overline{\\boldsymbol{\\theta}}, \\alpha_{1}\\right), \\mathbf{u}\\right) $ 

- when the outer decision variable is set to $ \\overline{\\mathbf{x}}_{\\mathrm{CIO}}(\\mathbf{u}) $. 

For any $ \\mathbf{u} \\in \\mathcal{U} $, let : 

$ \\mathbf{x}^{*}(\\mathbf{u}):=\\tilde{\\mathbf{x}}\\left(\\boldsymbol{\\theta}^{*}, \\mathbf{u}\\right) $ 

$ \\boldsymbol{\\theta}_{\\mathrm{CIO}}^{*}(\\mathbf{u}) $ denote the optimal solution to the inner maximization problem in : 

$ \\operatorname{RFO}\\left(\\mathcal{C}\\left(\\overline{\\boldsymbol{\\theta}}, \\alpha_{1}\\right), \\mathbf{u}\\right) $ 

- when the outer decision variable is set to $ \\mathbf{x}^{*}(\\mathbf{u}) $


Now, we have : 

$ \\begin{aligned} & f\\left(\\boldsymbol{\\theta}^{*}, \\overline{\\mathbf{x}}_{\\mathrm{CIO}}(\\mathbf{u})\\right)-f\\left(\\boldsymbol{\\theta}^{*}, \\mathbf{x}^{*}(\\mathbf{u})\\right) \\\\ \\leq & f\\left(\\mathbb{E}(\\hat{\\boldsymbol{\\theta}}), \\overline{\\mathbf{x}}_{\\mathrm{CIO}}(\\mathbf{u})\\right)-f\\left(\\mathbb{E}(\\hat{\\boldsymbol{\\theta}}), \\mathbf{x}^{*}(\\mathbf{u})\\right)+\\left(\\nu\\left[\\overline{\\mathbf{x}}_{\\mathrm{CIO}}(\\mathbf{u})\\right]+\\nu\\left[\\mathbf{x}^{*}(\\mathbf{u})\\right]\\right)\\left\\|\\boldsymbol{\\theta}^{*}-\\mathbb{E}(\\hat{\\boldsymbol{\\theta}})\\right\\|_{2} \\\\ \\leq & f\\left(\\mathbb{E}(\\hat{\\boldsymbol{\\theta}}), \\overline{\\mathbf{x}}_{\\mathrm{CIO}}(\\mathbf{u})\\right)-f\\left(\\mathbb{E}(\\hat{\\boldsymbol{\\theta}}), \\mathbf{x}^{*}(\\mathbf{u})\\right)+\\sigma\\left(\\nu\\left[\\overline{\\mathbf{x}}_{\\mathrm{CIO}}(\\mathbf{u})\\right]+\\nu\\left[\\mathbf{x}^{*}(\\mathbf{u})\\right]\\right) \\\\ = & \\mathbb{E}\\left[f\\left(\\hat{\\boldsymbol{\\theta}}, \\overline{\\mathbf{x}}_{\\mathrm{CIO}}(\\mathbf{u})\\right)-f\\left(\\hat{\\boldsymbol{\\theta}}, \\mathbf{x}^{*}(\\mathbf{u})\\right)\\right]+\\sigma\\left(\\nu\\left[\\overline{\\mathbf{x}}_{\\mathrm{CIO}}(\\mathbf{u})\\right]+\\nu\\left(\\mathbf{x}^{*}(\\mathbf{u})\\right)\\right) \\\\ \\leq & \\mathbb{E}\\left[f\\left(\\tilde{\\boldsymbol{\\theta}}, \\overline{\\mathbf{x}}_{\\mathrm{CIO}}(\\mathbf{u})\\right)-f\\left(\\tilde{\\boldsymbol{\\theta}}, \\mathbf{x}^{*}(\\mathbf{u})\\right)+\\left(\\nu\\left[\\overline{\\mathbf{x}}_{\\mathrm{CIO}}(\\mathbf{u})\\right]+\\nu[\\hat{\\mathbf{x}}]\\right)\\|\\hat{\\boldsymbol{\\theta}}-\\tilde{\\boldsymbol{\\theta}}\\|_{2}\\right] \\\\ & +\\sigma\\left(\\nu\\left[\\overline{\\mathbf{x}}_{\\mathrm{CIO}}(\\mathbf{u})\\right]+\\nu\\left(\\mathbf{x}^{*}(\\mathbf{u})\\right)\\right) \\\\ \\leq & \\mathbb{E}\\left[f\\left(\\tilde{\\boldsymbol{\\theta}}, \\overline{\\mathbf{x}}_{\\mathrm{CIO}}(\\mathbf{u})\\right)-f\\left(\\tilde{\\boldsymbol{\\theta}}, \\mathbf{x}^{*}(\\mathbf{u})\\right)+\\left(\\nu\\left[\\overline{\\mathbf{x}}_{\\mathrm{CIO}}(\\mathbf{u})\\right]+\\nu[\\hat{\\mathbf{x}}]\\right) \\eta\\right] \\\\ & +\\sigma\\left(\\nu\\left[\\overline{\\mathbf{x}}_{\\mathrm{CIO}}(\\mathbf{u})\\right]+\\nu\\left(\\mathbf{x}^{*}(\\mathbf{u})\\right)\\right) \\\\ \\leq & \\mathbb{E}\\left[f\\left(\\overline{\\boldsymbol{\\theta}}_{\\mathrm{CIO}}(\\mathbf{u}), \\overline{\\mathbf{x}}_{\\mathrm{CIO}}(\\mathbf{u})\\right)-f\\left(\\tilde{\\boldsymbol{\\theta}}, \\mathbf{x}^{*}(\\mathbf{u})\\right)\\right]+(\\eta+\\sigma)\\left(\\nu\\left[\\overline{\\mathbf{x}}_{\\mathrm{CIO}}(\\mathbf{u})\\right]+\\nu\\left(\\mathbf{x}^{*}(\\mathbf{u})\\right)\\right) \\\\ \\leq & \\mathbb{E}\\left[f\\left(\\boldsymbol{\\theta}_{\\mathrm{CIO}}^{*}(\\mathbf{u}), \\mathbf{x}^{*}(\\mathbf{u})\\right)-f\\left(\\tilde{\\boldsymbol{\\theta}}, \\mathbf{x}^{*}(\\mathbf{u})\\right)\\right]+(\\eta+\\sigma)\\left(\\nu\\left[\\overline{\\mathbf{x}}_{\\mathrm{CIO}}(\\mathbf{u})\\right]+\\nu\\left(\\mathbf{x}^{*}(\\mathbf{u})\\right)\\right) \\\\ \\leq & \\mathbb{E}\\left[\\nu\\left(\\mathbf{x}^{*}(\\mathbf{u})\\right)\\left\\|\\boldsymbol{\\theta}_{\\mathrm{CIO}}^{*}(\\mathbf{u})-\\tilde{\\boldsymbol{\\theta}}\\right\\|_{2}\\right]+(\\eta+\\sigma)\\left(\\nu\\left[\\overline{\\mathbf{x}}_{\\mathrm{CIO}}(\\mathbf{u})\\right]+\\nu\\left(\\mathbf{x}^{*}(\\mathbf{u})\\right)\\right) \\\\ \\leq & 2 \\nu\\left(\\mathbf{x}^{*}(\\mathbf{u})\\right)\\left(1-\\cos 2 \\alpha_{1}\\right)+(\\eta+\\sigma)\\left(\\nu\\left[\\overline{\\mathbf{x}}_{\\mathrm{CIO}}(\\mathbf{u})\\right]+\\nu\\left(\\mathbf{x}^{*}(\\mathbf{u})\\right)\\right) \\\\ \\leq & \\left(2-2 \\cos 2 \\alpha_{1}+\\eta+\\sigma\\right) \\nu\\left(\\mathbf{x}^{*}(\\mathbf{u})\\right)+(\\eta+\\sigma) \\nu\\left[\\overline{\\mathbf{x}}_{\\mathrm{CIO}}(\\mathbf{u})\\right]\\end{aligned} $

Line 1: [Lemma 3](#lemma-3)

Line 2: [Assumption 3](#assumption-3-bounded-divergence)

Line 3: $f $ is linear in $\\boldsymbol \\theta $

Line 4: [Lemma 3](#lemma-3)

Line 5: [Assumption 2](#assumption-2-bounded-inverse-feasible-set)

Line 6: the definition of $ \\overline{\\boldsymbol{\\theta}}_{\\mathrm{CIO}}(\\mathbf{u}) $

Line 7: $ \\left(\\overline{\\mathbf{x}}_{\\mathrm{CIO}}(\\mathbf{u}), \\overline{\\boldsymbol{\\theta}}_{\\mathrm{CIO}}(\\mathbf{u})\\right) $ is an optimal solution to $ \\mathbf{R F O}\\left(\\mathcal{C}\\left(\\overline{\\boldsymbol{\\theta}}, \\alpha_{1}\\right), \\mathbf{u}\\right) $.

Line 8: [Lemma 3](#lemma-3)

Line 9: both $ \\boldsymbol{\\theta}_{\\mathrm{CIO}}^{*}(\\mathbf{u}) $ and $ \\tilde{\\boldsymbol{\\theta}} $ are on the unit sphere and the angle between them is no greater than $ 2 \\alpha_{1} $, then the $ L_{2} $ distance between them is upper bounded by $ 2\\left(1-\\cos 2 \\alpha_{1}\\right) $.

Then : 

$ \\begin{aligned} \\operatorname{AOG}\\left(\\overline{\\mathbf{x}}_{\\mathrm{CIO}}\\right) & =\\mathbb{E}\\left[f\\left(\\boldsymbol{\\theta}^{*}, \\overline{\\mathbf{x}}_{\\mathrm{CIO}}(\\mathbf{u})\\right)-f\\left(\\boldsymbol{\\theta}^{*}, \\mathbf{x}^{*}(\\mathbf{u})\\right)\\right] \\\\ & \\leq \\mathbb{E}\\left[\\left(2-2 \\cos 2 \\alpha_{1}+\\eta+\\sigma\\right) \\nu\\left(\\mathbf{x}^{*}(\\mathbf{u})\\right)+(\\eta+\\sigma) \\nu\\left[\\overline{\\mathbf{x}}_{\\mathrm{CIO}}(\\mathbf{u})\\right]\\right] \\\\ & =\\left(2-2 \\cos 2 \\alpha_{1}+\\eta+\\sigma\\right) \\mu^{*}+(\\eta+\\sigma) \\mu_{\\mathrm{CIO}}\\end{aligned} $

- $ \\mu^{*}:=\\mathbb{E}\\left(\\nu\\left[\\mathbf{x}^{*}(\\mathbf{u})\\right]\\right) $.

##### End Proof of Proposition 3

#### End Proof of Theorem 3

`,a6=`# 1. Examples & Glossary

$$
\\begin{array}{|c|c|l|}
\\hline
\\text{Domain} & \\text{Description} \\\\
\\hline
\\mathbb{P} & \\mathcal{M}(\\mathcal{X} \\times \\mathcal{Y}) & \\text{True (unknown) joint distribution of } (\\boldsymbol{x}, \\boldsymbol{y}) \\\\
\\hat{\\mathbb{P}}_{N} & \\mathcal{M}(\\mathcal{X} \\times \\mathcal{Y}) & \\text{Joint empirical distribution of } (\\boldsymbol{x}, \\boldsymbol{y}) \\\\
\\delta_{y} & \\mathcal{M}(\\mathcal{Y}) & \\text{Dirac distribution that puts all of its weight on } \\boldsymbol{y} \\\\
\\boldsymbol{x} & \\mathcal{X} \\subseteq \\mathbb{R}^{d_{\\boldsymbol{x}}} & \\text{Contextual information} \\\\
\\boldsymbol{y} & Y \\subseteq \\mathbb{R}^{d_{\\boldsymbol{y}}} & \\text{Uncertain parameters} \\\\
\\boldsymbol{z} & \\mathcal{Z} \\subseteq \\mathbb{R}^{d_{\\boldsymbol{z}}} & \\text{A feasible action} \\\\
\\boldsymbol{\\theta} & \\Theta & \\text{Parameters of a prediction model} \\\\
\\hat{\\boldsymbol{\\theta}} & \\Theta & \\text{Optimal parameter value that minimizes the estimation error} \\\\
c(\\boldsymbol{z}, \\boldsymbol{y}) & \\mathbb{R} & \\text{Cost of an action } \\boldsymbol{z} \\text{ under } \\boldsymbol{y} \\\\
h\\left(\\boldsymbol{z}, \\mathbb{Q}_{\\xi}\\right) & \\mathbb{R} & \\text{Expected cost of an action } \\boldsymbol{z} \\text{ under } \\mathbb{Q}_{\\xi} \\text{ (a distribution over } \\boldsymbol{y}) \\\\
H(\\pi, \\mathbb{Q}) & \\mathbb{R} & \\text{Expected cost of a policy } \\pi \\text{ under } \\mathbb{Q} \\text{ (a distribution over } (\\boldsymbol{x}, \\boldsymbol{y})) \\\\
f_{\\boldsymbol{\\theta}}(\\boldsymbol{x}) & \\mathcal{M}(\\mathcal{Y}) & \\text{Estimate of the conditional distribution of } \\boldsymbol{y} \\text{ given } \\boldsymbol{x} \\\\
g_{\\boldsymbol{\\theta}}(\\boldsymbol{x}) & \\mathbb{R} \\boldsymbol{R}_{\\boldsymbol{y}} & \\text{Estimate of the conditional expectation of } \\boldsymbol{y} \\text{ given } \\boldsymbol{x} \\\\
\\pi^{*}(\\boldsymbol{x}) & \\mathcal{Z} & \\text{Optimal solution of CSO under true conditional distribution } \\mathbb{P}(\\boldsymbol{y} \\mid \\boldsymbol{x}) \\\\
\\pi_{\\boldsymbol{\\theta}}(\\boldsymbol{x}) & \\mathcal{Z} & \\text{Action prescribed by a policy parameterized by } \\boldsymbol{\\theta} \\text{ for context } \\boldsymbol{x} \\\\
z^{*}(\\boldsymbol{x}) & \\mathcal{Z} & \\text{Optimal solution to the CSO problem under the true conditional distribution } \\mathbb{P}(\\boldsymbol{y} \\mid \\boldsymbol{x}) \\\\
z^{*}\\left(\\boldsymbol{x}, f_{\\boldsymbol{\\theta}}\\right) & \\mathcal{Z} & \\text{Optimal solution to the CSO problem under the conditional distribution } f_{\\boldsymbol{\\theta}}(\\boldsymbol{x}) \\\\
z^{*}\\left(\\boldsymbol{x}, g_{\\boldsymbol{\\theta}}\\right) & \\mathcal{Z} & \\text{Optimal solution to the CSO problem under the Dirac distribution } \\delta_{g \\boldsymbol{\\theta}}(\\boldsymbol{x}) \\\\
\\rho\\left(\\boldsymbol{f}_{\\boldsymbol{\\theta}}, \\hat{\\mathbb{P}}_{N}\\right) & \\mathbb{R} & \\text{Expected prediction error for distribution model } f_{\\boldsymbol{\\theta}} \\text{ based on empirical distribution } \\hat{\\mathbb{P}}_{N} \\\\
\\rho\\left(g_{\\boldsymbol{\\theta}}, \\hat{\\mathbb{P}}_{N}\\right) & \\mathbb{R} & \\text{Expected prediction error for point prediction model } g_{\\boldsymbol{\\theta}} \\text{ based on empirical distribution } \\hat{\\mathbb{P}}_{N} \\\\
\\hline
\\end{array}
$$

$$
\\begin{array}{|c|c|c|c|c|c|c|c|c|c|c|c|}
\\hline
\\text{Reference} & \\text{rcso} & \\text{wSAA} & \\text{EVB} & \\text{Reg. CSO} & \\text{DRO} & \\text{General} & \\text{Linear} & \\text{Kernel} & \\text{kNN} & \\text{DT} & \\text{RF} \\\\
\\hline
\\text{Hannah et al. (2010)} & \\times & \\checkmark & \\times & \\times & \\times & \\times & \\times & \\checkmark & \\times & \\times & \\times \\\\
\\hline
\\text{Ferreira et al. (2016)} & \\times & \\times & \\checkmark & \\times & \\times & \\times & \\times & \\times & \\times & \\checkmark & \\times \\\\
\\hline
\\text{Ban et al. (2019)} & \\checkmark & \\times & \\times & \\times & \\times & \\times & \\checkmark & \\times & \\times & \\times & \\times \\\\
\\hline
\\text{Chen and Paschalidis (2019)} & \\times & \\checkmark & \\times & \\times & \\checkmark & \\times & \\times & \\times & \\checkmark & \\times & \\times \\\\
\\hline
\\text{Bertsimas and Kallus (2020)} & \\times & \\checkmark & \\times & \\times & \\times & \\times & \\checkmark & \\times & \\checkmark & \\checkmark & \\checkmark \\\\
\\hline
\\text{Kannan et al. (2020)} & \\checkmark & \\times & \\times & \\times & \\times & \\checkmark & \\checkmark & \\checkmark & \\checkmark & \\checkmark & \\checkmark \\\\
\\hline
\\text{Kannan et al. (2021)} & \\checkmark & \\times & \\times & \\times & \\checkmark & \\checkmark & \\checkmark & \\checkmark & \\checkmark & \\checkmark & \\checkmark \\\\
\\hline
\\text{Liu et al. (2021)} & \\times & \\times & \\checkmark & \\times & \\times & \\times & \\checkmark & \\times & \\times & \\checkmark & \\times \\\\
\\hline
\\text{Srivastava et al. (2021)} & \\times & \\checkmark & \\times & \\checkmark & \\times & \\times & \\times & \\checkmark & \\times & \\times & \\times \\\\
\\hline
\\text{Wang et al. (2021)} & \\times & \\checkmark & \\times & \\times & \\checkmark & \\times & \\times & \\checkmark & \\times & \\times & \\times \\\\
\\hline
\\text{Bertsimas and Van Parys (2022)} & \\times & \\checkmark & \\times & \\times & \\checkmark & \\times & \\times & \\checkmark & \\checkmark & \\times & \\times \\\\
\\hline
\\text{Deng and Sen (2022)} & \\checkmark & \\times & \\times & \\times & \\times & \\checkmark & \\checkmark & \\checkmark & \\checkmark & \\checkmark & \\checkmark \\\\
\\hline
\\text{Esteban-Pérez and Morales (2022)} & \\times & \\checkmark & \\times & \\times & \\checkmark & \\times & \\times & \\checkmark & \\checkmark & \\times & \\times \\\\
\\hline
\\text{Kannan et al. (2022)} & \\checkmark & \\times & \\times & \\times & \\checkmark & \\checkmark & \\checkmark & \\checkmark & \\checkmark & \\checkmark & \\checkmark \\\\
\\hline
\\text{Lin et al. (2022)} & \\times & \\checkmark & \\times & \\checkmark & \\times & \\times & \\times & \\times & \\checkmark & \\checkmark & \\checkmark \\\\
\\hline
\\text{Nguyen et al. (2021)} & \\times & \\checkmark & \\times & \\times & \\checkmark & \\times & \\times & \\times & \\checkmark & \\times & \\times \\\\
\\hline
\\text{Notz and Pibernik (2022)} & \\times & \\checkmark & \\times & \\times & \\times & \\times & \\times & \\checkmark & \\times & \\checkmark & \\times \\\\
\\hline
\\text{Zhu et al. (2022)} & \\times & \\times & \\checkmark & \\times & \\checkmark & \\checkmark & \\checkmark & \\checkmark & \\checkmark & \\checkmark & \\checkmark \\\\
\\hline
\\text{Perakis et al. (2023)} & \\checkmark & \\times & \\times & \\times & \\checkmark & \\times & \\checkmark & \\times & \\times & \\times & \\times \\\\
\\hline
\\end{array}
$$


$$
\\begin{array}{|c|c|c|c|c|c|c|c|c|c|}
\\hline 
& \\text{LP} & \\text{QP} & \\text{Convex} & \\text{Non convex} & \\text{Integer} & \\text{Uncertain} & \\text{Implicit diff.} & \\substack{\\text{Surr.} \\\\ \\text{loss}} & \\text{Surr. optim.} \\\\
\\hline
\\text{Amos and Kolter (2017)} & \\times & \\checkmark & \\times & \\times & \\times & \\checkmark & \\checkmark & \\times & \\checkmark \\\\
\\hline
\\text{Donti et al. (2017)} & \\times & \\checkmark & \\checkmark & \\times & \\times & \\checkmark & \\checkmark & \\times & \\times \\\\
\\hline
\\text{Agrawal et al. (2019)} & \\times & \\checkmark & \\checkmark & \\times & \\times & \\checkmark & \\checkmark & \\times & \\checkmark \\\\
\\hline
\\text{Vlastelica et al. (2019)} & \\checkmark & \\times & \\times & \\times & \\checkmark & \\times & \\times & \\checkmark & \\times \\\\
\\hline
\\text{Wilder et al. (2019a)} & \\checkmark & \\times & \\times & \\times & \\checkmark & \\times & \\checkmark & \\times & \\times \\\\
\\hline
\\text{Wilder et al. (2019b)} & \\times & \\checkmark & \\times & \\times & \\checkmark & \\times & \\times & \\checkmark & \\times \\\\
\\hline
\\text{Berthet et al. (2020)} & \\checkmark & \\times & \\times & \\times & \\checkmark & \\times & \\times & \\times & \\checkmark \\\\
\\hline
\\text{Elmachtoub et al. (2020)} & \\checkmark & \\times & \\times & \\times & \\times & \\times & \\times & \\checkmark & \\times \\\\
\\hline
\\text{Ferber et al. (2020)} & \\checkmark & \\times & \\times & \\times & \\checkmark & \\times & \\checkmark & \\times & \\times \\\\
\\hline
\\text{Mandi and Guns (2020)} & \\checkmark & \\times & \\times & \\times & \\checkmark & \\times & \\checkmark & \\times & \\times \\\\
\\hline
\\text{Mandi et al. (2020)} & \\checkmark & \\times & \\times & \\times & \\checkmark & \\times & \\times & \\checkmark & \\times \\\\
\\hline
\\text{Grigas et al. (2021)} & \\times & \\times & \\checkmark & \\times & \\times & \\times & \\times & \\times & \\checkmark \\\\
\\hline
\\text{Mulamba et al. (2021)} & \\checkmark & \\times & \\times & \\times & \\checkmark & \\times & \\times & \\times & \\checkmark \\\\
\\hline
\\text{Chung et al. (2022)} & \\times & \\times & \\checkmark & \\times & \\checkmark & \\times & \\times & \\checkmark & \\times \\\\
\\hline
\\text{Cristian et al. (2022)} & \\times & \\times & \\checkmark & \\times & \\times & \\times & \\times & \\times & \\checkmark \\\\
\\hline
\\text{Dalle et al. (2022)} & \\checkmark & \\times & \\times & \\times & \\checkmark & \\times & \\times & \\times & \\checkmark \\\\
\\hline
\\text{Elmachtoub and Grigas (2022)} & \\checkmark & \\times & \\times & \\times & \\checkmark & \\times & \\times & \\checkmark & \\times \\\\
\\hline
\\text{Jeong et al. (2022)} & \\checkmark & \\times & \\times & \\times & \\checkmark & \\times & \\times & \\checkmark & \\times \\\\
\\hline
\\text{Kallus and Mao (2022)} & \\times & \\times & \\checkmark & \\times & \\times & \\times & \\times & \\checkmark & \\times \\\\
\\hline
\\text{Kong et al. (2022)} & \\times & \\checkmark & \\checkmark & \\checkmark & \\checkmark & \\times & \\times & \\times & \\checkmark \\\\
\\hline
\\text{Lawless and Zhou (2022)} & \\checkmark & \\times & \\times & \\times & \\checkmark & \\times & \\times & \\checkmark & \\times \\\\
\\hline
\\text{Loke et al. (2022)} & \\checkmark & \\times & \\times & \\times & \\times & \\times & \\times & \\checkmark & \\times \\\\
\\hline
\\text{Mandi et al. (2022)} & \\checkmark & \\times & \\times & \\times & \\checkmark & \\times & \\times & \\times & \\checkmark \\\\
\\hline
\\text{Muñoz et al. (2022)} & \\checkmark & \\times & \\times & \\times & \\times & \\times & \\times & \\checkmark & \\times \\\\
\\hline
\\text{Shah et al. (2022)} & \\checkmark & \\checkmark & \\checkmark & \\checkmark & \\checkmark & \\times & \\times & \\times & \\checkmark \\\\
\\hline
\\text{Butler and Kwon (2023a)} & \\times & \\checkmark & \\times & \\times & \\times & \\times & \\checkmark & \\times & \\times \\\\
\\hline
\\text{Costa and Iyengar (2023)} & \\times & \\checkmark & \\checkmark & \\times & \\times & \\checkmark & \\checkmark & \\checkmark & \\times \\\\
\\hline
\\text{Estes and Richard (2023)} & \\checkmark & \\times & \\checkmark & \\times & \\times & \\times & \\times & \\checkmark & \\times \\\\
\\hline
\\text{Kotary et al. (2023)} & \\checkmark & \\checkmark & \\checkmark & \\checkmark & \\times & \\times & \\checkmark & \\times & \\times \\\\
\\hline
\\text{McKenzie et al. (2023)} & \\checkmark & \\times & \\times & \\times & \\times & \\times & \\checkmark & \\times & \\times \\\\
\\hline
\\text{Sun et al. (2023a)} & \\checkmark & \\times & \\times & \\times & \\times & \\times & \\times & \\checkmark & \\times \\\\
\\hline
\\text{Sun et al. (2023b)} & \\times & \\checkmark & \\times & \\checkmark & \\times & \\times & \\checkmark & \\times & \\times \\\\
\\hline
\\end{array}
$$

2. Contextual Optimization

$\\boldsymbol  z$ : decision: The order for today inventory

$\\mathcal Z\\subseteq \\mathbb R^{d_{\\boldsymbol  z}}$ : feasible set for orders

- e.g. $ \\mathcal{Z}=\\{z \\in \\mathbb{R} \\mid z \\geq 0\\} $

$ c(\\boldsymbol{z}, \\boldsymbol{y}) $ : cost function

- e.g. $ c(z, y)=h(z-y)^{+}+b(y-z)^{+} $ (h for over inventory, b for not enough inventory)

$ \\boldsymbol{y} \\in \\mathcal{Y} \\subseteq \\mathbb{R}^{d_{y}} $ : uncertain parameters : the everyday real need 

$ \\boldsymbol{x} \\in \\mathcal{X} \\subseteq \\mathbb{R}^{d_{x}} $ : a vector of relevant covariates : the history data 



$\\mathbb  P $: the joint distribution of :
- the covariates in $\\mathcal  X$
- the uncertain parameters in $\\mathcal  Y $
- e.g.: the distribution of data and real need 






# 2. Contextual Optimization : An overview

$\\boldsymbol  z$ : decision

$\\mathcal Z\\subseteq \\mathbb R^{d_{\\boldsymbol  z}}$ : feasible set 

$ c(\\boldsymbol{z}, \\boldsymbol{y}) $ : cost function

$ \\boldsymbol{y} \\in \\mathcal{Y} \\subseteq \\mathbb{R}^{d_{y}} $ : uncertain parameters

The uncertain parameters are unknown when making the decision.

$ \\boldsymbol{x} \\in \\mathcal{X} \\subseteq \\mathbb{R}^{d_{x}} $ : a vector of relevant covariates :
- correlated with the uncertain parameters $\\mathbb  y $
- we know it before choosing $\\mathbb  z $

$\\mathbb  P $: the joint distribution of :
- the covariates in $\\mathcal  X$
- the uncertain parameters in $\\mathcal  Y $

## 2.1 Contexual problem and policy

### CSO problem

Given:

- $\\boldsymbol  x$ : a vector of covariates
- $\\mathbb  P $ : joint distribution

Target:

- Find $z^*(\\boldsymbol  x)\\in\\mathcal Z $ : an optimal action
- minimize the expected costs on the covariate $\\boldsymbol x $

Formally:

#### (1)

$ z^{*}(\\boldsymbol{x}) \\in \\underset{\\boldsymbol{z} \\in \\mathcal{Z}}{\\operatorname{argmin}} \\mathbb{E}_{\\mathbb{P}(\\boldsymbol{y} \\mid \\boldsymbol{x})}[c(\\boldsymbol{z}, \\boldsymbol{y})] $
- $ \\mathbb{P}(\\boldsymbol{y} \\mid \\boldsymbol{x}) $ : the conditional distribution of $\\boldsymbol  y $ given the covariate $\\boldsymbol  x $
- A minimizer exists
  - e.g.: $\\mathcal Z $ is compact, $ \\mathbb{P}(\\boldsymbol{y} \\mid \\boldsymbol{x}) $ has bounded support, $ c(\\boldsymbol{z}, \\boldsymbol{y}) $ is continuous in $ \\boldsymbol{z} $ almost surely.

[(1)](#1) can be written using the expected cost operator $h(\\cdot,\\cdot)$ : 
- first argument: an action
- second argument: distribution

#### (2)

$ z^{*}(\\boldsymbol{x}) \\in \\underset{\\boldsymbol{z} \\in \\mathcal{Z}}{\\operatorname{argmin}} h(\\boldsymbol{z}, \\mathbb{P}(\\boldsymbol{y} \\mid \\boldsymbol{x})):=\\mathbb{E}_{\\mathbb{P}(\\boldsymbol{y} \\mid \\boldsymbol{x})}[c(\\boldsymbol{z}, \\boldsymbol{y})] $

### Optimal policy

Target: find the policy, provides the lowest long-term expected cost 

$ z^{*}(\\boldsymbol{x}) \\in \\underset{\\boldsymbol{z} \\in \\mathcal{Z}}{\\operatorname{argmin}} h(\\boldsymbol{z}, \\mathbb{P}(\\boldsymbol{y} \\mid \\boldsymbol{x})):=\\mathbb{E}_{\\mathbb{P}(\\boldsymbol{y} \\mid \\boldsymbol{x})}[c(\\boldsymbol{z}, \\boldsymbol{y})] $

- $ \\Pi:=\\{\\pi: \\mathcal{X} \\rightarrow \\mathcal{Z}\\} $

Solving [(1)](#1) naturally gives an optimal policy:

$ \\bar{\\pi}(\\boldsymbol{x}) \\in \\underset{\\boldsymbol{z} \\in \\mathcal{Z}}{\\operatorname{argmin}} h(\\boldsymbol{z}, \\mathbb{P}(\\boldsymbol{y} \\mid \\boldsymbol{x})) $ a.s. $ \\Leftrightarrow \\mathbb{E}_{\\mathbb{P}}[h(\\bar{\\pi}(\\boldsymbol{x}), \\mathbb{P}(\\boldsymbol{y} \\mid \\boldsymbol{x}))]=\\min _{\\pi \\in \\Pi} \\mathbb{E}_{\\mathbb{P}}[h(\\pi(\\boldsymbol{x}), \\mathbb{P}(\\boldsymbol{y} \\mid \\boldsymbol{x}))] $

- If a minimizer of $ h(\\boldsymbol{z}, \\mathbb{P}(\\boldsymbol{y} \\mid \\boldsymbol{x})) $ exists almost surely

We can see $\\pi^*, z^*(\\cdot)$ coincide

## 2.2 Mapping covariate to actions in a data-driven environment

Challenge: the joint distribution $\\mathbb P $ is generally unknown

Reality: we have historical data:

$ \\mathcal{D}_{N}=\\left\\{\\left(\\boldsymbol{x}_{i}, \\boldsymbol{y}_{i}\\right)\\right\\}_{i=1}^{N} $

assumed to be made of independent and identically distributed realizations of $ (\\boldsymbol{x}, \\boldsymbol{y}) \\in \\mathcal{X} \\times \\mathcal{Y} $

Aim: find a policy
that approximates well the optimal policy given by [(3)](#3)

Three main frameworks:

- decision rule optimization
- sequential learning and optimization
- integrated learning and optimization

### 2.2.1 Decision rule optimization 

There's a hypothesis class:

$ \\Pi^{\\theta}:=\\left\\{\\pi_{\\boldsymbol{\\theta}}\\right\\}_{\\boldsymbol{\\theta} \\in \\Theta} \\subseteq \\Pi $

- $ \\Pi^{\\theta}:=\\left\\{\\pi_{\\boldsymbol{\\theta}}\\right\\}_{\\boldsymbol{\\theta} \\in \\Theta} \\subseteq \\Pi $

$ \\hat{\\mathbb{P}}_{N} $ : the empirical distribution of $ (\\boldsymbol{x}, \\boldsymbol{y}) $ given historical data $ \\mathcal{D}_{N} $

Get the "best" parameter in $ \\Pi^{\\theta} $ by solving ERM (empirical risk minimization) :

#### (4)

$ \\quad \\boldsymbol{\\theta}^{*} \\in \\underset{\\boldsymbol{\\theta}}{\\operatorname{argmin}} H\\left(\\pi_{\\boldsymbol{\\theta}}, \\hat{\\mathbb{P}}_{N}\\right):=\\mathbb{E}_{\\hat{\\mathbb{P}}_{N}}\\left[c\\left(\\pi_{\\boldsymbol{\\theta}}(\\boldsymbol{x}), \\boldsymbol{y}\\right)\\right] $

Then:

Find the policy $  \\pi_{\\theta^{*}} \\in \\Pi^{\\theta} $ that minimizes the expected costs over the training data.

Approximations:

- The hypothesis class $\\Pi^{\\theta} $ may not contain the true optimal policy 
- The long-term expected costs are calculated over the $ \\hat{\\mathbb{P}}_{N} $ (empirical distribution) instead of the $\\mathbb P$, the true distribution

Disadvantage:

- Focus overall performance (the expectation), not robust
  - e.g. perform better on some sample, worse on some other sample

### 2.2.2 Learning and optimization 

**Predictive & Optimization**

**Predictive:**

$f_{\\boldsymbol \\theta }$ : general model 
- parameterized by $\\boldsymbol \\theta $
- provide the input of the optimization component 

$ f_{\\boldsymbol{\\theta}}(\\boldsymbol{x}) $ : predicted distribution 
- for any covariate $\\boldsymbol{x} $ 
- a predicted distribution
  - approximate the true conditional distribution $ \\mathbb{P}(\\boldsymbol{y} \\mid \\boldsymbol{x}) $ 
- learned from historical data

Decision:

Solve the CSO problem under $ f_{\\boldsymbol{\\theta}}(\\boldsymbol{x}) $ :

#### (5)

$ z^{*}\\left(\\boldsymbol{x}, f_{\\boldsymbol{\\theta}}\\right) \\in \\underset{\\boldsymbol{z} \\in \\mathcal{Z}}{\\operatorname{argmin}} h\\left(\\boldsymbol{z}, f_{\\boldsymbol{\\theta}}(\\boldsymbol{x})\\right) $

The only approximation:

- $ f_{\\boldsymbol{\\theta}} $ is an approximation of $ \\mathbb{P}(\\boldsymbol{y} \\mid \\boldsymbol{x}) $

**SLO(Sequential learning and optimization) :**

$\\rho$ : estimation error
- minimize it to obtain the contextual predictor
- between conditional distribution given by $ f_{\\boldsymbol{\\theta}}(\\boldsymbol{x}) $ and the true conditional distribution of $ \\boldsymbol{y} $ given $ \\boldsymbol{x} $ 

Solve:

#### (6)

$ \\min _{\\boldsymbol{\\theta}} \\rho\\left(f_{\\boldsymbol{\\theta}}, \\hat{\\mathbb{P}}_{N}\\right)+\\Omega(\\boldsymbol{\\theta}) $ 

- $ \\rho\\left(f_{\\boldsymbol{\\theta}}, \\hat{\\mathbb{P}}_{N}\\right):=\\mathbb{E}_{\\hat{\\mathbb{P}}_{N}}\\left[\\mathfrak{D}\\left(f_{\\boldsymbol{\\theta}}(\\boldsymbol{x}), \\boldsymbol{y}\\right)\\right] $

- $ \\mathfrak{D} $ is a divergence function
  - negative log-likelihood & regularization term $ \\Omega(\\boldsymbol{\\theta}) $ controls the complexity of $ f_{\\theta} $

#### Definition 1 (Expected value-based model)

cost function $ c(\\boldsymbol{x}, \\boldsymbol{y}) $ of the decision model is linear in $ \\boldsymbol{y} $ 

Now: 

estimating a conditional distribution $\\to$ find the expected value of the uncertain parameter given the covariates

- Because : $ h(\\boldsymbol{z}, \\mathbb{P}(\\boldsymbol{y} \\mid \\boldsymbol{x}))= $ $ \\mathbb{E}_{\\mathbb{P}(\\boldsymbol{y} \\mid \\boldsymbol{x})}[c(\\boldsymbol{z}, \\boldsymbol{y})]=c\\left(\\boldsymbol{z}, \\mathbb{E}_{\\mathbb{P}(\\boldsymbol{y} \\mid \\boldsymbol{x})}[\\boldsymbol{y}]\\right) $ 

training the contextual predictor $\\to $ mean regression problem over a parameterized function $ g_{\\boldsymbol{\\theta}}(\\boldsymbol{x}) $

$ \\min _{\\boldsymbol{\\theta}} \\rho\\left(g_{\\boldsymbol{\\theta}}, \\hat{\\mathbb{P}}_{N}\\right)+\\Omega(\\boldsymbol{\\theta}) $ 

- $ \\rho\\left(g_{\\boldsymbol{\\theta}}, \\hat{\\mathbb{P}}_{N}\\right):=\\mathbb{E}_{\\hat{\\mathbb{P}}_{N}}\\left[d\\left(g_{\\boldsymbol{\\theta}}(\\boldsymbol{x}), \\boldsymbol{y}\\right)\\right] $

- for some distance metric $ d $, usually the mean squared errors

MSE (mean squared error):

$ g_{\\hat{\\boldsymbol{\\theta}}}(\\boldsymbol{x})=\\mathbb{E}_{\\mathbb{P}(\\boldsymbol{y} \\mid \\boldsymbol{x})}[\\boldsymbol{y}] $ 

 - as $ N \\rightarrow \\infty $



Obtain an action: 

$ z^{*}\\left(\\boldsymbol{x}, g_{\\boldsymbol{\\theta}}\\right) \\in \\underset{\\boldsymbol{z} \\in \\mathcal{Z}}{\\operatorname{argmin}} h\\left(\\boldsymbol{z}, \\delta_{g_{\\boldsymbol{\\theta}(\\boldsymbol{x})}}\\right)=\\underset{\\boldsymbol{z} \\in \\mathcal{Z}}{\\operatorname{argmin}} c\\left(\\boldsymbol{z}, g_{\\boldsymbol{\\theta}}(\\boldsymbol{x})\\right) $,

- For any new covariate $\\boldsymbol x$
- $z^*$ : an estimator of the mean of the conditional distribution
- $ \\delta_{y} $ : Dirac distribution (all mass at $\\boldsymbol y$)

These models: expected value-based models 

More general: conditional distribution-based models

Disadvantage:

-  ignore the mismatch between the
prediction divergence $ \\mathfrak{D} $ and the cost function $ c(\\boldsymbol{x}, \\boldsymbol{y}) $

- a small prediction error about $ \\mathbb{P}(\\boldsymbol{y} \\mid \\boldsymbol{x}) $ may have a large impact on the prescription

**Integrated learning and optimization**

Goal:

maximize the prescriptive performance of the induced policy
- train the predictive component to minimize the task loss (as in [(3)](#3))
- higher MSE but nearly-optimal 

We have:

#### (9)

$ \\min _{\\boldsymbol{\\theta}} H\\left(z^{*}\\left(\\cdot, f_{\\boldsymbol{\\theta}}\\right), \\hat{\\mathbb{P}}_{N}\\right)=\\min _{\\boldsymbol{\\theta}} \\mathbb{E}_{\\hat{\\mathbb{P}}_{N}}\\left[c\\left(z^{*}\\left(\\boldsymbol{x}, f_{\\boldsymbol{\\theta}}\\right), \\boldsymbol{y}\\right)\\right] $
- Finding the best parameterization of a contextual predictor
  - minimizes the downstream
expected costs of the CSO solution


- minimizes the expected cost of the policy over the empirical distribution

## Summary

Design choices:

- type of loss function during training
  - e.g. decision rule/sequential/integrated paradigm
- class of predictive model
  - e.g. linear/neural network/random forest

# 3 Dicision rule optimization 

Decision rules:
- obtained by solving ERM in Problem [(4)](#4)
- minimize the cost of a policy on the task
  - that is, downstream optimization problem 

Advantage:
- once trained, no optimization problem needs

Define decision rule approach as:

employing a parameterized mapping $ \\pi_{\\boldsymbol{\\theta}}(\\boldsymbol{x}) $

- e.g.: linear/neural network


## 3.1 Linear decision rules

1: SAA(sample-average approximation)

for a newsvendor problem:

Use LDRs(linear decision rules)

Two variants with and without regularization:

$ \\min _{\\pi: \\exists \\boldsymbol{\\theta} \\in \\mathbb{R}^{d} \\boldsymbol{x}, \\pi(\\boldsymbol{x})=\\boldsymbol{\\theta}^{\\top} \\boldsymbol{x}, \\forall \\boldsymbol{x}} H\\left(\\pi, \\hat{\\mathbb{P}}_{N}\\right)+\\Omega(\\pi)=\\min _{\\boldsymbol{\\theta}} \\frac{1}{N} \\sum_{i=1}^{N} u\\left(y_{i}-\\boldsymbol{\\theta}^{\\top} \\boldsymbol{x}_{i}\\right)^{+}+o\\left(\\boldsymbol{\\theta}^{\\top} \\boldsymbol{x}_{i}-y_{i}\\right)^{+}+\\lambda\\|\\boldsymbol{\\theta}\\|_{k}^{2} $

- $u$: per unit backordering (underage) cost 
- $o$: per unit holding (overage) cost 

2: For linear demand model:

Generalization error for ERM model scales as :

- $ \\mathrm{O}\\left(d_{x} / \\sqrt{N}\\right) $ , when there is no regularization
- $ \\mathrm{O}\\left(d_{\\boldsymbol{x}} /(\\sqrt{N} \\lambda)\\right) $, with regularization

Need balance (to get optimal performance):

- generalization error
- regularization bias

Consider unconstrained problems because:
- difficult to ensure the feasibility of policies 
- maintain computational tractability

3. General theory for generalization

- Based on Rademacher complexity
- beyond LDR

LDRs may not be asymptotically optimal in general 

To generalize LDRs:

- decision rules that linear in transformations of the covariate vector 
- lift covariate vector to RKHS(reproducing kernel Hilbert space)

## 3.2 RKHS-based decision rules

To:

Obtain decision rules: more flexible than linear ones with respect to $\\boldsymbol x$:

lift the covariate vector to RKHS

- LDRs might achieve better performance 

Let:

$ K: \\mathcal{X} \\times \\mathcal{X} \\rightarrow \\mathbb{R} $: symmetric positive definite kernel 
- associated with the chosen RKHS 
  - e.g.: $ K\\left(\\boldsymbol{x}_{1}, \\boldsymbol{x}_{2}\\right):=\\exp \\left(-\\left\\|\\boldsymbol{x}_{1}-\\boldsymbol{x}_{2}\\right\\|^{2} /\\left(2 \\sigma^{2}\\right)\\right) $

$ \\left\\{\\varphi: \\mathcal{X} \\rightarrow \\mathbb{R} \\mid \\exists L \\in \\mathbb{N}, \\boldsymbol{v}_{1}, \\boldsymbol{v}_{2}, \\cdots, \\boldsymbol{v}_{L} \\in \\mathcal{X}, \\varphi(\\boldsymbol{x})=\\sum_{l=1}^{L} a_{l} K\\left(\\boldsymbol{v}_{l}, \\boldsymbol{x}\\right), \\forall \\boldsymbol{x} \\in \\mathcal{X}\\right\\} $

- the RKHS $\\mathcal H_K$
- Given $K$
- the closure of a set functions
- $ \\varphi_{1}(\\boldsymbol{x})=\\sum_{i=1}^{L_{1}} a_{1}^{i} K\\left(\\boldsymbol{v}_{1}^{i}, \\boldsymbol{x}\\right) $
- $ \\varphi_{2}(\\boldsymbol{x})=\\sum_{j=1}^{L_{2}} a_{2}^{j} K\\left(\\boldsymbol{v}_{2}^{j}, \\boldsymbol{x}\\right) $
- $ \\left\\langle\\varphi_{1}, \\varphi_{2}\\right\\rangle=\\sum_{i=1}^{L_{1}} \\sum_{j=1}^{L_{2}} a_{1}^{i} a_{2}^{j} K\\left(\\boldsymbol{v}_{1}^{i}, \\boldsymbol{v}_{2}^{j}\\right) $: inner product

1: approximate the optimal policy:
- with a linear policy in the RKHS
  - $ \\pi_{\\varphi}(\\boldsymbol{x}):=\\langle\\varphi, K(\\boldsymbol{x}, \\cdot)\\rangle $ when $ d_{\\boldsymbol{z}}=1 $

using the representer theorem, the solution of :

$ \\min _{\\varphi \\in \\mathcal{H}_{K}} H\\left(\\pi_{\\varphi}, \\hat{\\mathbb{P}}_{N}\\right)+\\lambda\\|\\varphi\\|_{2}^{2} $

- regularized problem 

takes the form $ \\pi^{*}(\\boldsymbol{x})=\\sum_{i=1}^{N} K\\left(\\boldsymbol{x}_{i}, \\boldsymbol{x}\\right) a_{i}^{*} $

reduce the decision rule problem to:

$ \\min _{\\boldsymbol{a} \\in \\mathbb{R}^{N}} H\\left(\\sum_{i=1}^{N} K\\left(\\boldsymbol{x}_{i}, \\cdot\\right) a_{i}, \\hat{\\mathbb{P}}_{N}\\right)+\\lambda \\sum_{i=1}^{N} \\sum_{j=1}^{N} K\\left(\\boldsymbol{x}_{i}, \\boldsymbol{x}_{j}\\right) a_{i} a_{j} $

can be extended to $ d_{z}>1 $ by employing one RKHS for each $ z_{i} $

Some applications:

- Data-driven single item newsvendor
- single risky asset portfolio problems 
  - establish bounds on the out-of-sample performance 
- asymptotic optimality of RKHS-based policies 
- two-stage capacity planning problem 
  - multivariate demand 
  - vector-valued capacity decisions 
    - the underlying demand distribution is difficult to estimate in practice
- optimize over policies that are linear in the RKHS 
  - associatied with Gaussain kernerl
  - identify generalization error bounds 
  - for large dimension problems:
    - slow convergence rate 
    - propose instead using a data-dependent random forest kerenl

## 3.3 Non-linear decision rules

1: value of training a DNN

- learn the ordering policy of a newsvendor problem 

**neural networks**

- universal approximation property
  - approximate any continuous function arbitrarily well 
- For constrained problem:
  - softmax as final layer to ensure decisions lies in a simplex
    - 2: portfolio optimization problem 
- in general, not land in feasible space. to circumvent:
  - 3: application-specific differentiable repair layer
    - project the solution back to feasibility 
  - 4: obtained by SGD(stochastic gradient descent) approximately minimize the Bayesian posterior loss

Optimal solution of a newsvendor problem is a quantile of demand distribution:

- 5: train an additive ensemble of decision trees using quantile regression
  - produce thr ordering decision  
  - Test the algorithms on a real-world dataset from a large German bakery chain 
- 6: optimize decision tree-based decision rules 
  - address the multi-item newsvendor, treatment planning, optimal stopping problems 
- 7: tutorial on DNN-based decision rule optimization 

8: piecewise-affine decision rules 

- provice non-asymptotic and asymptotic consistency results
  - for unconstrained and constrained problems 
- learn policy through: stochastic majorization-minimization algorithm
- experiment on constrained newsvendor problem 
  - piecewise-affine decision rules outperform RKHS-based policies 

## 3.4 Distributionally robust decision rules 

Assume parammetric form $ \\Pi^{\\theta} $ for the policy, but:

1: distributionally robust contextual newsvendor problem 

- under type-1 Wasserstein ambiguity set
- without assuming an explicit structure on the policy class 

$ W_{p}\\left(\\mathbb{P}_{1}, \\mathbb{P}_{2}\\right)=\\inf _{\\gamma \\in \\mathcal{M}\\left(\\mathcal{Y}^{2}\\right)}\\left(\\int_{\\mathcal{Y} \\times \\mathcal{Y}}\\left\\|y_{1}-y_{2}\\right\\|^{p} \\gamma\\left(d y_{1}, d y_{2}\\right)\\right)^{\\frac{1}{p}} $

- type-$p$ Wasserstein distance between $ \\mathbb{P}_{1} $ and $ \\mathbb{P}_{2} $
- $ \\gamma $ is a joint distribution of $ y_{1} $ and $ y_{2} $ 
  - with marginals $ \\mathbb{P}_{1} $ and $ \\mathbb{P}_{2} $

2: avoids the degeneracies of ERM
- for generic $\\Pi  $
- by define an optimal "Shapley" extension 
  - to the scenario-based optimal policy

That is:

$ \\min _{\\pi \\in \\Pi} \\sup _{\\mathbb{Q} \\in \\mathcal{M}(\\mathcal{X} \\times \\mathcal{Y})}\\left\\{H(\\pi, \\mathbb{Q}): \\mathcal{W}\\left(\\mathbb{Q}, \\hat{\\mathbb{P}}_{N}\\right) \\leq r\\right\\} \\equiv \\min _{\\pi: \\hat{\\mathcal{X}} \\rightarrow \\mathcal{Z} }\\sup _{\\mathbb  Q\\in \\mathcal M ({\\mathcal { \\hat X }} \\times \\mathcal{Y})}\\left\\{H(\\pi, \\mathbb{Q}): \\mathcal{W}\\left(\\mathbb{Q}, \\hat{\\mathbb{P}}_{N}\\right) \\leq r\\right\\} $

- $ \\hat{\\mathcal{X}}:=\\cup_{i=1}^{N}\\left\\{\\boldsymbol{x}_{i}\\right\\} $ 
- $ \\mathcal{M}(\\hat{\\mathcal{X}} \\times \\mathcal{Y}) $ is the set of all distribution supported on $ \\hat{\\mathcal{X}} \\times \\mathcal{Y} $.

3: in non-contextual setting

4: use LDRs to solve dynamic optimization problems with side information

5: pertubed distributions in Wasserstein ambiguity set:
- have a different conditional information structure 
  - than estimated conditional distribution 
- DRO(distributionally robust optimization) with causal transport metric 
  - place an additional causality constraint on transport plan
  - compare to Wasserstein metric 

6: Bayesian interpretation of decision rule optimization 
- using SGD 
- provide an unbaised estimate of worst-case objective function of a DRO problem 
  - as long as a uniqueness condition is satisfied 
- Wasserstein ambiguity set violates this condition 
- use KL(Kullback-Leibler) divergence to train models 

# 4 SLO(Sequential learning and optimization )

- a more traditional setting 
  - sconditional distribution is learned from data 
  - used directlly in optimization model 
- attempt to produce disicions:
  - robust to model misspecification 

## 4.1 Learning conditional distribution 

employed discrete models for $ f_{\\boldsymbol{\\theta}}(\\boldsymbol{x}) $

- motivatied from computational perspective
  - CSO problem [(5)](#5) is easier to solve 

CSO under continuous distribution:
- needs to be first replaced by SAA to be solved

Difficult: assess probability of outcomes:
- that not present in the dataset 
- justifying fixing the support of $\\boldsymbol y $ to its observed values

### 4.1.1 Residual-based distribution 

1: use the errors of a trained regression model 
- construct conditional distributions 

Let: 

- $ g_{\\hat{\\theta}} $ be a regression model trained to predict
  - the response $ \\boldsymbol{y} $ 
  - from the covariate $ \\boldsymbol{x} $

minimizing an estimation error $ \\rho $ as in [(7)](#7)

$ \\boldsymbol{\\epsilon}_{i}=\\boldsymbol{y}_{i}-g_{\\hat{\\boldsymbol{\\theta}}}\\left(\\boldsymbol{x}_{i}\\right) $: residual error of sample $i $

$ \\left\\{\\boldsymbol{\\epsilon}_{i}\\right\\}_{i=1}^{N} $: set of residuals measured on the historical data 

- used to form the conditional distribution 

$ f_{\\boldsymbol{\\theta}}(\\boldsymbol{x})=\\mathbb{P}^{\\mathrm{ER}}(\\boldsymbol{x}):=\\frac{1}{N} \\sum_{i=1}^{N} \\delta_{\\operatorname{proj}_{\\mathcal{Y}}\\left(\\mathrm{g}_{\\hat{\\boldsymbol{\\theta}}}(\\boldsymbol{x})+\\boldsymbol{\\epsilon}_{\\mathrm{i}}\\right)} $: the conditional distribution 
- $ \\operatorname{proj}_{y} $ the projection on the support $ \\mathcal{Y} $

the rCSO(residual-based CSO):

#### 10

$ (\\mathbf{r C S O}) \\min _{\\boldsymbol{z} \\in \\mathcal{Z}} h\\left(\\boldsymbol{z}, \\mathbb{P}^{\\mathrm{ER}}(\\boldsymbol{x})\\right) $


Advantage:

- can be applied in conjunction with any trained regression model 

2: conditional distribution for two-stage and multi-stage CSO 
- use the residual obtained from parametric regression on historical data

Notice: historical data is used twice 

- train the regression model $g_{\\boldsymbol \\theta } $
- measure the residuals $\\boldsymbol \\varepsilon _i $

Lead to: underestimation of distribution of the residual error

To remove bias:

3: a leave-one-out model (jackknife)

- measure the residuals as: $ \\tilde{\\boldsymbol{\\epsilon}}_{i}=\\boldsymbol{y}_{i}-g_{\\hat{\\boldsymbol{\\theta}}_{-i}}\\left(\\boldsymbol{x}_{i}\\right) $ 
  -  $ \\hat{\\boldsymbol{\\theta}}_{-i} $ is trained using all except the $i $-th sample $ \\left(\\boldsymbol{x}_{i}, \\boldsymbol{y}_{i}\\right) $
- can be applied to heteroskedastic case in 3 
  - obtain this conditional distribution :
  - $ f_{\\boldsymbol{\\theta}}(\\boldsymbol{x}):=\\frac{1}{N} \\sum_{i=1}^{N} \\delta_{\\operatorname{proj}}^{\\mathcal{Y}}\\left(\\mathrm{g}_{\\hat{\\boldsymbol{\\theta}}}(\\boldsymbol{x})+\\hat{\\mathrm{Q}}(\\boldsymbol{x}) \\hat{\\boldsymbol{\\epsilon}}_{\\mathrm{i}}\\right) $
    - by first estimating the conditional covariance matrix $ \\hat{Q}(\\boldsymbol{x}) $
    - form the residuals:  $ \\hat{\\boldsymbol{\\epsilon}}_{i}=\\left[\\hat{Q}\\left(\\boldsymbol{x}_{i}\\right)\\right]^{-1}\\left(\\boldsymbol{y}_{i}-g_{\\hat{\\boldsymbol{\\theta}}}\\left(\\boldsymbol{x}_{i}\\right)\\right) $

### 4.1.2 Weight-based distribution 

A typical approach for formulating the CSO problem:

assign weights to observations of the uncertain parameters in the historical data 
- solve wSAA(weighted SAA problem) given by:

#### (11)

$ (\\mathbf{w S A A}) \\min _{z \\in \\mathcal{Z}} h\\left(\\boldsymbol{z}, \\sum_{i=1}^{N} w_{i}(\\boldsymbol{x}) \\delta_{\\boldsymbol{y}_{i}}\\right) $

- $ f_{\\boldsymbol{\\theta}}(\\boldsymbol{x})=\\sum_{i=1}^{N} w_{i}(\\boldsymbol{x}) \\delta_{\\boldsymbol{y}_{i}} $: conditional distribution 

  - fully determined by the function used to assign a weight to historical samples 


Different approaches be proposed 
- to determine the sample weights with ML method 

**Weights based on proximity**

Sample weights can be assigned based on the distance between:

- covariate $\\boldsymbol x $
- each historical sample $\\boldsymbol x_i$ 

Instance: (kNN)$k$-nearest neighbor estimation 

- gives equal weight to $k $ closest samples 
- 0 weight for all other samples 
- $ w_{i}^{\\mathrm{kNN}}(\\boldsymbol{x}):=(1 / k) \\mathbb{1}\\left[\\boldsymbol{x}_{i} \\in \\mathcal{N}_{k}(\\boldsymbol{x})\\right] $
  - $ \\mathcal{N}_{k}(\\boldsymbol{x}) $ the set of $ k $ nearest neighbors of $\\boldsymbol  x$
  - $ \\mathbb{1}[\\cdot] $ : the indicator function.

Though: simple

Benefit: asymptotic consistency
- guarantee prescriptive performance 

Another way: kernel density estimators 

NW(Nadaraya-Watson) kernel estimator employ a weight function:

$ w_{i}^{\\mathrm{KDE}}(\\boldsymbol{x}):=\\frac{K\\left(\\left(\\boldsymbol{x}-\\boldsymbol{x}_{i}\\right) / \\boldsymbol{\\theta}\\right)}{\\sum_{j=1}^{N} K\\left(\\left(\\boldsymbol{x}-\\boldsymbol{x}_{j}\\right) / \\boldsymbol{\\theta}\\right)} $

- $ K $ : kernel function 
- $ \\boldsymbol{\\theta} $ : its bandwidth parameter
- Can use different kernel function 
  - e.g. Gaussian kernel: $ K(\\boldsymbol{\\Delta}) \\propto \\exp \\left(-\\|\\boldsymbol{\\Delta}\\|^{2}\\right) $

Also: bayesian approach that :
- exploits the Dirichlet process mixture 
  - to assign sample weights

**Weights based on random forest **

Weights can be designed 
- based on random forest regressors

Simplest setting:
- weight function of a decision tree regressor is given by:

$ w_{i}^{t}(\\boldsymbol{x}):=\\frac{\\mathbb{1}\\left[\\mathcal{R}_{t}(\\boldsymbol{x})=\\mathcal{R}_{t}\\left(\\boldsymbol{x}_{i}\\right)\\right]}{\\sum_{j=1}^{N} \\mathbb{1}\\left[\\mathcal{R}_{t}(\\boldsymbol{x})=\\mathcal{R}_{t}\\left(\\boldsymbol{x}_{j}\\right)\\right]} $

- $ \\mathcal{R}_{t}(\\boldsymbol{x}) $ : the terminal node of tree $ t $ 
  -  contains covariate $ \\boldsymbol{x} $

A decision tree:
- assign equal weights to all historical sample 
  - that end in the same leaf node as $\\boldsymbol  x $

Random forest weight function:
- generalize this idea 
- over many random decision trees 

Weight function is defined as:

$ w_{i}^{\\mathrm{RF}}(\\boldsymbol{x}):=\\frac{1}{T} \\sum_{t=1}^{T} w_{i}^{t}(\\boldsymbol{x}) $

- $ w_{i}^{t} $ the weight function of tree $ t $

Random forests are trained for:

- perform an inference task
  - e.g. regression, classification
- also used and interpreted as:
- nonparametric conditional density estimators

1: conditions for the asymptotic optimality and consistency of prescriptions 
- obtained by solving problem [(11)](#11)
- with weights functions given by kNN, NW kernel estimator, local linear regression 

### 4.1.3 Expected value-based models 

When cost function is linear:

training pipeline of SLO:

reduces to conditional mean estimation 

1: train regression trees 
- forecast daily expected sales 
  - for different product categories
- inventory and pricing peoblem

May attempt to approximate the doncitional density $ f_{\\boldsymbol{\\theta}}(\\boldsymbol{x}) $ using a point prediction $ g_{\\boldsymbol{\\theta}}(\\boldsymbol{x}) $

2: a last-mile delivery problem 
- customer orders are assigned to drivers 
- replace conditional distribution of stochastic travel time 
  - with point predictor 
  - accounts for the number of stops, total distance of the trip 

## 4.2 Regularization and distributionally robust optimization 

Non-parametric conditional density estimation method benefit from asymptotic consistency, but:

- produce overly optimistic policies 
  - when size of covariate vector is large 

To circumvent this issue:

- regularize the CSO problem
- cast it as a DRO problem 
  - attempts to minimize the worst-case expected cost 
  - over the set of distributions $ \\mathcal{B}_{r}\\left(f_{\\boldsymbol{\\theta}}(\\boldsymbol{x})\\right) $
    - lie at a distance $r$
    - from the estimated distribution 
- $ f_{\\boldsymbol{\\theta}}(\\boldsymbol{x}) $

1: generate bootstrap data 
- from training set 
- use as prxy for "out-of-sample disappointment"
  - of action $\\boldsymbol z $
  - resulting from out-of-sample cost
    - exceeding the budget 
    - given by $ \\sup _{\\mathbb{Q}_{y} \\in \\mathcal{B}_{r}\\left(f_{\\theta}(\\boldsymbol{x})\\right)} h\\left(\\boldsymbol{z}, \\mathbb{Q}_{y}\\right) $
- for NW kernel estimator and KNN estimator:
  - DRO under a range of ambiguity set 
  - can be reformulated as convex optimization problem 
- Use KL divergence
  - measure distance between :
    - probability distributions 
  - obtain:
    - guarantees with respect to estimate-then-optimize model 
    - taking bootstrap data as proxy 
    - for out-of-sample data 

2: Taking center of Wasserstein ambiguity set:
- be NW kernel estimator 

Show that: 

- distributionally robust newsvendor and CVaR(conditional value at risk) portfolio optimization problems 
  - can be reformulated as convex program
- provide conditions to obtain:
  - asymptotic convergence 
  - out-of-sample guarantees on the solutions of DRO model 

3: study distributionally robust kNN regression problem 
- by combining point estimation of outcome
  - with DRO model over Wasserstein ambiguity set 
- use kNN predict the outcome 
  - based on weighted distance metric 
    - constructed from the estimate 

4: study a distributionally robust contextual portfolio allocation problem 
- worst-case conditional return-risk tradeoff is computed
  - over an optimal transport ambiguity set 
    - consisting of pertubations of joint distributions of covariates and returns 

- generalize the mean-variance and mean-CVaR model 
  - distributionally robust models are equivalent to 
    - semi-definite 
    - second-order cone representable program 

5: solve a DRO problem with novel ambiguity set 
- based on trimming the empirical conditional distribution 
  - i.e. reducing the weights over the support points 
- show thelink between trimming a distribution and partial mass transportation problem 
- 6: application in the optimal power flow problem 

7: Distributionally robust extension of rCSO model 
- hedges against all distributions 
  - lie in $r$ radius of (Wasserstein) ambiguity ball 
    - centered at the estimated distribution $\\mathbb  P ^{ER }(\\boldsymbol  x )$

8: a DRO model to solve two-stage multi-item joint production and pricing problem 
- with a partitioned-moment-based ambiguity set 
- constructed by clustering the residual 
  - estimated from an additive demand model 

9: an expected value-based model 
- suggest an ambiguity set that is informed by the estimation metric 
  - used to train $ g_{\\hat{\\theta}} $.
- that is:

$ \\min _{\\boldsymbol{z} \\in \\mathcal{Z}} \\sup _{\\boldsymbol{\\theta} \\in \\mathcal{U}(\\hat{\\boldsymbol{\\theta}}, r)} c\\left(\\boldsymbol{z}, g_{\\boldsymbol{\\theta}}(\\boldsymbol{x})\\right) $

- $ \\mathcal{U}(\\hat{\\boldsymbol{\\theta}}, r):=\\left\\{\\boldsymbol{\\theta} \\in \\boldsymbol{\\theta} \\mid \\rho\\left(g_{\\boldsymbol{\\theta}}, \\hat{\\mathbb{P}}_{N}\\right) \\leq \\rho\\left(g_{\\hat{\\boldsymbol{\\theta}}}, \\hat{\\mathbb{P}}_{N}\\right)+r\\right\\} $
- finite-dimensional convex reformulations can be obtained 
  - when $ g_{\\boldsymbol{\\theta}}(\\boldsymbol{x}):=\\boldsymbol{\\theta}^{T} \\boldsymbol{x} $
- promote the use of "robustness optimization" form 

# 5 Integrated learning and optimization 


ILO is an end-to-end framework that :

includes three components in the training pipeline: 

- (i) a prediction model that:
  -  maps the covariate to a predicted distribution (or possibly a point prediction), 
- (ii) an optimization model that:
  -  takes as input a prediction and returns a decision,
- (iii) a task-based loss function that :
  -  captures the downstream optimization problem.

The parameters of the prediction model are trained to : 

- maximize the prescriptive performance of the policy,
  -  i.e., it is trained on the task loss incurred by this induced policy 
  -  rather than the estimation loss.

Next:

we discuss several methods for implementing the ILO approach

- describing the different models that are used in ILO([Section 5.1]()) 
- present the algorithms used
to perform the training
- divide the algorithms into four categories :
  - unrolling([Section 5.2]())
  - implicit differentiation([Section 5.3]())
  - a surrogate differentiable loss function([Section 5.4]())
  - a differentiable optimizer([Section 5.5]())


## 5.1 Models

1: Train a prediction model 

- using a loss that:
  - influenced by performance of an action 
    - prescribed by conditional expected value-based decision rule
- in a protfolio management context 

More recent 
- integrate full optimization model into pipeline 

We next:
- summarize how ILO is applied to 2 contextual optimization model 
- introduce 2 additional popular task models 

### Expected value-based model 

Most literature:
- perform ILO on expected value-based optimization model 

Following the notation in [Definition 1](#definition-1-expected-value-based-model) :

$ \\mathcal{L}(\\boldsymbol{\\theta}):=H\\left(z^{*}\\left(\\cdot, g_{\\boldsymbol{\\theta}}\\right), \\hat{\\mathbb{P}}_{N}\\right)= $ $ \\mathbb{E}_{\\mathfrak{P}_{N}}\\left[c\\left(z^{*}\\left(\\boldsymbol{x}, g_{\\boldsymbol{\\theta}}\\right), \\boldsymbol{y}\\right)\\right] $
- loss, training pipeline interested in.

$ g_{\\boldsymbol{\\theta}}(\\boldsymbol{x}) $ 
- a point predictor for $ \\boldsymbol{y} $, 
-  we interpret as a prediction of $ \\mathbb{E}[\\boldsymbol{y} \\mid \\boldsymbol{x}] $.

This already raises challenges related to:
- the non-convexity of the integrated loss function $ \\mathcal{L}(\\boldsymbol{\\theta}) $ 
-  its differentiation with respect to $ \\boldsymbol{\\theta} $ :

$ \\begin{aligned} \\nabla_{\\boldsymbol{\\theta}} \\mathcal{L}(\\boldsymbol{\\theta}) & =\\frac{1}{N} \\sum_{i=1}^{N} \\nabla_{\\boldsymbol{\\theta}} c\\left(z^{*}\\left(\\boldsymbol{x}_{i}, g_{\\boldsymbol{\\theta}}\\right), \\boldsymbol{y}_{i}\\right) \\\\ & =\\left.\\frac{1}{N} \\sum_{i=1}^{N} \\sum_{j=1}^{d_{z}} \\sum_{k=1}^{d_{\\boldsymbol{y}}} \\frac{\\partial c\\left(z^{*}\\left(\\boldsymbol{x}_{i}, g_{\\boldsymbol{\\theta}}\\right), \\boldsymbol{y}_{i}\\right)}{\\partial z_{j}} \\frac{\\partial z_{j}^{*}\\left(\\boldsymbol{x}_{i}, \\hat{\\boldsymbol{y}}\\right)}{\\partial \\hat{y}_{k}}\\right|_{\\hat{\\boldsymbol{y}}=g_{\\theta}\\left(\\boldsymbol{x}_{i}\\right)} \\nabla_{\\boldsymbol{\\theta}}\\left[g_{\\boldsymbol{\\theta}}\\left(\\boldsymbol{x}_{i}\\right)\\right]_{k}\\end{aligned} $

- $ \\frac{\\partial z_{j}^{*}\\left(\\boldsymbol{x}_{i}, \\hat{\\boldsymbol{y}}\\right)}{\\partial \\hat{y}_{k}} $ : the most problematic evaluation
  - e.g.:  when $ z^{*}\\left(\\boldsymbol{x}_{i}, g_{\\boldsymbol{\\theta}}\\right) $ is the solution of a LP(Linear program) 
    - its gradient is either null or non-existent

### Conditional distribution-based model 

In the context of :

learning a conditional distribution model : $ f_{\\theta}(\\boldsymbol{x}) $

1: First study ILO problem 

- model distribution of uncertain parameter 
  - using parametric distribution 
- for newsvendor problem:
  - ILO outperform :
    - DRO with neural networks
    - SLO with MLE(maximum likelihood estimation)
  - when there is model misspecification 

Since then:

- formulate CSO problem as weighted SAA model (refer to [Section 4.1.2](#412-weight-based-distribution))

- prediction model amounts to identify vector of weights to assign to each historical sample 

Taken by 2:
- train random forest regressor in integrated fashion to assign weights 

by 3:
- how to train general differentiable models 
  - to predict probabilities of uncertain parameter $\\boldsymbol y$ with finite support 

### Regret minimization task

tackle ILO problem from regret 

1: contextual point predictor $ g_{\\boldsymbol{\\theta}}(\\boldsymbol{x}) $ is learned by:

- minimizing regret associated with implementing the prescribed action 
  - based on mean estimator $ g_{\\boldsymbol{\\theta}}(\\boldsymbol{x}) $ 
  - instead of based on the realized parameters $ \\boldsymbol{y} $
  - a.k.a: optimal hindsight or wait-and-see decision 

Value of an expected value-based policy  $ \\pi_{\\boldsymbol{\\theta}}(\\boldsymbol{x}):=  z^{*}\\left(\\boldsymbol{x}, g_{\\boldsymbol{\\theta}}\\right) $ is measured as the expected regret defined as:

#### (13)

$ H_{\\text {Regret }}\\left(\\pi_{\\boldsymbol{\\theta}}, \\mathbb{P}\\right):=\\mathbb{E}_{\\mathbb{P}}\\left[c\\left(\\pi_{\\boldsymbol{\\theta}}(\\boldsymbol{x}), \\boldsymbol{y}\\right)-c\\left(z^{*}(\\boldsymbol{x}, \\boldsymbol{y}), \\boldsymbol{y}\\right)\\right] $

Minimizing the expected regret: 
- returns the same optimal parameter vector $ \\boldsymbol{\\theta} $ as the [ILO problem (9)](#9). 

Because:

$ H_{\\text {Regret }}\\left(\\pi, \\hat{\\mathbb{P}}_{N}\\right)=\\mathbb{E}_{\\hat{\\mathbb{P}}_{N}}\\left[c(\\pi(\\boldsymbol{x}), \\boldsymbol{y})-c\\left(z^{*}(\\boldsymbol{x}, \\boldsymbol{y}), \\boldsymbol{y}\\right)\\right]=H\\left(\\pi, \\hat{\\mathbb{P}}_{N}\\right)-\\mathbb{E}_{\\hat{\\mathbb{P}}_{N}}\\left[c\\left(z^{*}(\\boldsymbol{x}, \\boldsymbol{y}), \\boldsymbol{y}\\right)\\right] $

- both $ H_{\\text {Regret }}\\left(\\pi, \\hat{\\mathbb{P}}_{N}\\right) $ and $ H\\left(\\pi, \\hat{\\mathbb{P}}_{N}\\right) $ have the same set of minimizers

### Optimal action imitation task 

ILO has some connections to inverse optimization :

- learning the parameters of an optimization model 
  - given data about its optimal solution

one can :

replace the original objective of ILO 
- with an objective that seeks 
- to produce a $ z^{*}\\left(\\boldsymbol{x}, f_{\\boldsymbol{\\theta}}\\right) $ 
  - that is as close as possible to the optimal hindsight action 
  - and, therefore, closer to the regret objective. 

Specifically, to learn a policy that "imitates" the optimal hindsight action: 

one can first augment the data set 
- with $ \\boldsymbol{z}_{i}^{*}:=z^{*}\\left(\\boldsymbol{x}_{i}, \\boldsymbol{y}_{i}\\right) $ to get $ \\left\\{\\left(\\boldsymbol{x}_{i}, \\boldsymbol{y}_{i}, \\boldsymbol{z}_{i}^{*}\\right)\\right\\}_{i=1}^{N} $. 

Thereafter:

a prediction model $ f_{\\boldsymbol{\\theta}}(\\boldsymbol{x}) $ is learned in a way : 
- that the action $ z^{*}\\left(\\boldsymbol{x}_{i}, f_{\\boldsymbol{\\theta}}\\right) $ is as close as possible to $ \\boldsymbol{z}_{i}^{*} $
  -  for all samples in the training set:

#### (14)

$ H_{\\text {Imitation }}\\left(\\pi, \\hat{\\mathbb{P}}_{N}^{\\prime}\\right):=\\mathbb{E}_{\\hat{\\mathbb{P}}_{N}^{\\prime}}\\left[d\\left(\\pi(\\boldsymbol{x}), \\boldsymbol{z}^{*}\\right)\\right]=\\mathbb{E}_{\\hat{\\mathbb{P}}_{N}}\\left[d\\left(\\pi(\\boldsymbol{x}), z^{*}(\\boldsymbol{x}, \\boldsymbol{y})\\right)\\right] $


- $ \\hat{\\mathbb{P}}_{N}^{\\prime} $ : the empirical distribution 
  - on the lifted tuple $ \\left(\\boldsymbol{x}, \\boldsymbol{y}, z^{*}(\\boldsymbol{x}, \\boldsymbol{y})\\right) $ 
  - based on the augmented data set 
  - and a distance function $ d\\left(\\boldsymbol{z}, \\boldsymbol{z}^{*}\\right) $. 

Note that:

there is no reason to believe that: 

the best imitator under a general distance function, 
- e.g., $ \\left\\|\\boldsymbol{z}-\\boldsymbol{z}^{*}\\right\\|_{2} $, 

performs well under our original metric $ H\\left(\\pi, \\hat{\\mathbb{P}}_{N}\\right) $.

One exception:

For $ d\\left(\\boldsymbol{z}, \\boldsymbol{z}^{*}\\right):=c(\\boldsymbol{z}, \\boldsymbol{y})-c\\left(\\boldsymbol{z}^{*}, \\boldsymbol{y}\\right) $, 
- where we allow the distance to also depend on $ \\boldsymbol{y} $, 
- for which we recover the regret minimization approach
- therefore the same solution as with $ H\\left(\\pi, \\hat{\\mathbb{P}}_{N}\\right) $. 

## 5.2 Training by unrolling 

An approach to obtain Jacobian matrix $ \\boldsymbol{\\kappa} \\frac{\\partial z^{*}(\\boldsymbol{x}, \\hat{\\boldsymbol{y}})}{\\partial \\hat{\\boldsymbol{y}}} $ : unrolling 

it involves:

- approximating the optimization problem with an iterative solver
  - e.g.:  first-order gradient-based method 

Each operation is stored on the computational graph, 
- then allows, in principle, for computing gradients through classical back-propagation methods. 

Unfortunately: this approach requires extensive amounts of memory. 

Besides this: 

the large size of the computational graph 
- exacerbates the vanishing and exploding gradient problems 
  - typically associated with training neural networks

## Training using implicit differentiation 

Implicit differentiation allows:
- a memory-efficient backpropagation 
- as opposed to unrolling 
  - (we refer to Bai et al. 2019, for discussion on training constant memory implicit models using a fixed-point - FP - equation and feedforward networks of infinite depths).

1: appear to be the first to have employed implicit differentiation methods to train an ILO model
- which they refer to as OptNet. 

They consider expected value-based optimization models 
- take the form of constrained quadratic programs (QP) with equality and inequality constraints. 

They show how the implicit function theorem (IFT - Halkin 1974) can be used to differentiate $ z^{*}\\left(\\boldsymbol{x}, g_{\\boldsymbol{\\theta}}\\right) $ with respect to $ \\boldsymbol{\\theta} $
- using the Karush-Kuhn-Tucker (KKT) conditions 
  -  are satisfied at optimality. 

Further:

they provide a custom solver based on a primal-dual interior method

- to simultaneously solve multiple QPs on GPUs in batch form, 
- permitting 100-times speedups compared to Gurobi and CPLEX. 

This approach is extended to conditional stochastic and strongly convex optimization models in Donti et al. (2017): 

They use sequential quadratic programming (SQP) to obtain quadratic approximations of the objective functions of the convex program at each iteration 

- until convergence to the solution and then differentiate the last iteration of SQP to obtain the Jacobian. 

For a broader view of implicit differentiation: we refer to the surveys by Duvenaud et al. (2020) and Blondel et al. (2022).

To solve large-scale QPs with linear equality and box inequality constraints:

2 Butler and Kwon (2023a) use the ADMM algorithm to decouple the differentiation procedure for primal and dual variables

thereby:
- decomposing the large problem into smaller subproblems. 

Their procedure relies on: 
- implicit differentiation of the FP equations of the alternating direction method of multipliers (ADMM) algorithm (ADMM-FP). 

They show that: 
- unrolling the iterations of the ADMM algorithm on the computational graph (Sun et al. 2016, Xie et al. 2019) results in higher computation time than ADMM-FP. 

Their empirical results on a portfolio optimization problem with 254 assets suggest that : 

computational time can be reduced by a factor of almost five 
- by using ADMM-FP compared to OptNet, 

mostly due to the use of the ADMM algorithm in the forward pass. 

Note that the experiments in Butler and Kwon (2023a) were conducted on a
CPU.

To extend OptNet to a broader class of problems:

3 introduce cvxpylayers that 
- relies on converting disciplined convex programs in the domain-specific language 
  - used by CVXPY into conic programs. 

They implicitly differentiate the residual map of the homogeneous self-dual embedding associated with the conic program.

4: note that using KKT conditions for constrained optimization problems with DNN-based policies"
- is computationally costly 
  - as "cvxpylayers struggles with solving problems containing more than 100 variables" (see also Butler and Kwon 2023a).
-  An alternative is to use projected gradient descent (PGD) 
   - where DNN-based policies are updated using an iterative solver 
   - and projected onto the constraint set $ \\mathcal{Z} $ at each iteration 
   - and the associated FP system (Donti et al. 2021, Chen et al. 2021, Blondel et al. 2022) is used to obtain the Jacobian.
 - Since a closed-form solution for the projection onto $ \\mathcal{Z} $ is unavailable in many cases, 
   - the projection step may be costly, 
   - and in some cases, PGD may not even converge to a feasible point (Rychener et al. 2023). 

To avoid computing the projection in the forward pass, 5 solve the expected value-based CSO problem using: 
- Davis-Yin operator splitting (Davis and Yin 2017) 
- while the backward pass uses the Jacobian-free backpropagation (Fung et al. 2022) 
  - in which the Jacobian matrix is replaced with an identity matrix (see also Sahoo et al. 2023, where a similar approach is used for expected value-based models).

To mitigate the issues with unrolling: 6 propose FP folding (fold-opt) that:
- allows analytically differentiating the FP system of general iterative solvers, 
  - e.g., ADMM, SQP, and PGD. 

By unfolding (i.e., partial unrolling), some of the steps of unrolling are grouped in analytically differentiable update function $ \\mathcal{T}: \\mathbb{R}^{d_{y}} \\rightarrow \\mathbb{R}^{d_{y}} $ :

$ z_{k+1}(\\boldsymbol{x}, \\hat{\\boldsymbol{y}})=\\mathcal{T}\\left(z_{k}(\\boldsymbol{x}, \\hat{\\boldsymbol{y}}), \\hat{\\boldsymbol{y}}\\right) $

Realizing that $ z^{*}(\\boldsymbol{x}, \\hat{\\boldsymbol{y}}) $ is the FP of the above system:
- they use the IFT to obtain a linear system (a differential FP condition) 
  - that can be solved to obtain the Jacobian. 

This effectively decouples the forward and backward pass enabling 
- the use of black box solvers like Gurobi for the forward pass 
- while cvxpylayers is restricted to operator splitting solvers like ADMM. 


An added benefit of using fold-opt is that: 

it can solve non-convex problems. 

In the case of portfolio optimization, the authors note that :

- the superior performance of their model with respect to cvxpylayers can be explained by the precise calculations made in the forward pass by Gurobi.



While speedups can be obtained for sparse problems, Sun et al. (2023b) remark that:
- the complexity associated with differentiating the KKT conditions is cubic in the total number of decision variables and constraints in general. 

They propose an alternating differentiation framework (called Alt-Diff) to:
- solve parameterized convex optimization problems 
- with polyhedral constraints using ADMM 
  - that decouples the objective and constraints. 

This procedure results in:

a smaller Jacobian matrix 
- when there are many constraints 
- since the gradient computations for primal, dual, and slack variables are done alternatingly. 

The gradients are shown to converge to those obtained by differentiating the KKT conditions. 

The authors employ truncation of iterations to compensate for the slow convergence of ADMM when compared to interior-point methods 

and provide theoretical upper bounds on the error in the resulting gradients. 

Alt-Diff is shown to achieve the same accuracy with truncation and lower computational time when compared to cvxpylayers:
- for an energy generation scheduling problem.

Motivated by OptNet, several extensions have been proposed to solve linear and combinatorial problems. 

7 solve LP-representable combinatorial optimization problems and LP relaxations of combinatorial problems during the training phase. 

Their model, referred to as QPTL (Quadratic Programming Task Loss):

- adds a quadratic penalty term to the objective function of the linear problem. 

This has two advantages: 
- it recovers a differentiable linear-quadratic program, and the added term acts as a regularizer, 
- which might avoid overfitting. 

To solve a general mixed-integer LP (MILP), 8 develop a cutting plane method MIPaal,
- which adds a given number of cutting planes in the form of constraints $ S \\boldsymbol{z} \\leq \\boldsymbol{s} $ to the LP relaxation of the MILP.

Instead of adding a quadratic term, 9 propose Intopt based on the interior point method to solve LPs
- that adds a log barrier term to the objective function and differentiates the homogeneous self-dual formulation of the LP. 

Their experimental analyses show that: 
- this approach performs better on energy cost-aware scheduling problems than QPTL using the data from Ifrim et al. (2012).

10 introduce an ILO framework with the weighted average of Sharpe ratio and MSE loss as a task loss and replace the optimization problem with a surrogate DRO problem. 

By using convex duality:

they reformulate the minimax problem as a minimization problem and learn the parameters (e.g., size of ambiguity set) using implicit differentiation instead of cross-validation (CV). 

More specifically, the DRO model uses a deviation risk measure (e.g., variance) to control variability in the portfolio returns associated with the prediction errors $ \\boldsymbol{\\epsilon}_{i}= $ $ \\boldsymbol{y}_{i}-g_{\\theta}\\left(\\boldsymbol{x}_{i}\\right): $

$ \\underset{\\boldsymbol{z}}{\\operatorname{argmin}} \\max _{\\mathbb{Q} \\in \\mathcal{B}_{r}^{\\phi}\\left(\\hat{\\mathbb{P}}_{N}\\right)} \\mathbb{E}_{\\mathbb{Q}}\\left[\\left(\\boldsymbol{\\epsilon}^{\\top} \\boldsymbol{z}-\\mathbb{E}_{\\mathbb{Q}}\\left[\\boldsymbol{\\epsilon}^{\\top} \\boldsymbol{z}\\right]\\right)^{2}\\right] $

- the distribution of errors lies in $ \\phi $-divergence (e.g., Hellinger distance) based ambiguity set $ \\mathcal{B}_{r}^{\\phi}\\left(\\hat{\\mathbb{P}}_{N}\\right)=\\left\\{\\mathbb{Q}: \\mathbb{E}_{\\hat{\\mathbb{P}}}[\\phi(\\mathbb{Q} / \\hat{\\mathbb{P}})] \\leq r\\right\\} $ centered at $ \\hat{\\mathbb{P}}_{N}=\\frac{1}{N} \\sum_{i=1}^{N} \\delta_{\\epsilon_{i}} $.

For convex problems, the optimality conditions are given by KKT conditions, 

can be represented as $ F(\\boldsymbol{\\theta}, \\boldsymbol{z})=0 $ 
- $ F: \\mathbb{R}^{d_{\\boldsymbol{x}}} \\times \\mathbb{R}^{d_{\\boldsymbol{z}}} \\rightarrow \\mathbb{R}^{m} $, 
  - $ m $ is proportional to the number of constraints that define $ \\mathcal{Z} $. 

From the classical IFT (Dontchev et al. 2009), we know that: 

if $ F $ is continuously differentiable and the Jacobian matrix with respect to $ \\boldsymbol{z} $, 
- denoted by $ \\nabla_{\\boldsymbol{z}} F(\\boldsymbol{\\theta}, \\boldsymbol{z}(\\boldsymbol{\\theta})) $, 

is non-singular at the point $ (\\overline{\\boldsymbol{\\theta}}, \\overline{\\boldsymbol{z}}) $, 

then:

there exists a neighborhood around $ \\overline{\\boldsymbol{\\theta}} $ 
- for which the gradient of the optimal solution with respect to the parameters is given by:

$ \\frac{\\partial \\boldsymbol{z}^{*}(\\boldsymbol{\\theta})}{\\partial \\boldsymbol{\\theta}}=-\\left(\\nabla_{\\boldsymbol{z}} F(\\boldsymbol{\\theta}, \\boldsymbol{z}(\\boldsymbol{\\theta}))\\right)^{-1} \\nabla_{\\boldsymbol{\\theta}} F(\\boldsymbol{\\theta}, \\boldsymbol{z}(\\boldsymbol{\\theta})) $

When the Jacobian matrix $ \\nabla_{\\boldsymbol{z}} F(\\boldsymbol{\\theta}, \\boldsymbol{z}(\\boldsymbol{\\theta})) $ is singular, classical IFT cannot be applied. 

This occurs in linear programs and can also arise in smooth QPs as shown in 11

11 obtain a generalization of IFT to non-smooth functions:
- using conservative Jacobians that generalize Clarke Jacobians (Clarke 1990) for locally Lipschitz function $ F $. 

They also derive conservative Jacobians for conic optimization layers (Agrawal et al. 2019).

Further, 12 illustrate using cvxpylayers that in a bilevel program 

- which is a composition of a quadratic function 
  - with the solution map of a linear program, 

gradient descent does not converge but gets stuck in a "limit cycle of non-critical points" even though invertibility condition does not hold only on a set of measure 0 (defined by a line) 
- where the solution map moves from extreme point to another. 

As this example illustrates, the convergence of gradient methods based on IFT can be impacted by the non-invertibility of the Jacobian matrix and nonsmoothness 
- which is difficult to verify a priori. 

As a result, research efforts have been directed toward designing surrogate loss functions and perturbation-based models for CSO problems that could circumvent the need to use the IFT.

## 5.4  Training using a surrogate differentiable loss function

As discussed in Section 5.1, 

minimizing directly the task loss in [(9)](#9) or the regret in [(13)](#13) is computationally difficult in most cases. 

For instance: 

the loss may be piecewise-constant as a function of the parameters of a prediction model and, 
- thus, may have no informative gradient. 

To address this issue, several surrogate loss functions with good properties, 
- e.g., differentiability and convexity,

have been proposed to train ILO models.

### 5.4.1 SPO+

In CSO problems, 1 first tackle the potential nonuniqueness of $ z^{*}\\left(\\boldsymbol{x}, g_{\\boldsymbol{\\theta}}\\right) $ by introducing a Smart "Predict, then Optimize" (SPO) model 
- where the decision-maker chooses to minimize the empirical average of the regret 
  - under the worst-case optimal solution as defined below:

#### (15)

$ \\begin{aligned} \\text { (SPO) } \\quad \\min _{\\boldsymbol{\\theta}} \\max _{\\pi} & H_{\\text {Regret }}\\left(\\pi, \\hat{\\mathbb{P}}_{N}\\right), \\\\ & \\text { s.t. } \\pi(\\boldsymbol{x}) \\in \\underset{\\boldsymbol{z} \\in \\mathcal{Z}}{\\operatorname{argmin}} c\\left(\\boldsymbol{z}, g_{\\boldsymbol{\\theta}}(\\boldsymbol{x})\\right), \\forall \\boldsymbol{x} .\\end{aligned} $

In the expected value-based model, they show that the SPO objective reduces to training the prediction model according to the ERM problem:

$ \\boldsymbol{\\theta}^{\\star} \\in \\underset{\\boldsymbol{\\theta}}{\\operatorname{argmin}} \\rho_{\\text {SPO }}\\left(g_{\\boldsymbol{\\theta}}, \\hat{\\mathbb{P}}_{N}\\right):=\\mathbb{E}_{\\hat{\\mathbb{P}}_{N}}\\left[\\ell_{\\text {SPO }}\\left(g_{\\boldsymbol{\\theta}}(\\boldsymbol{x}), \\boldsymbol{y}\\right)\\right] $

- $ \\ell_{\\mathrm{SPO}}(\\hat{\\boldsymbol{y}}, \\boldsymbol{y}):=\\sup _{\\overline{\\boldsymbol{z}} \\in \\operatorname{argmin}_{\\boldsymbol{z} \\in \\mathcal{Z}} c(\\boldsymbol{z}, \\hat{\\boldsymbol{y}})} c(\\overline{\\boldsymbol{z}}, \\boldsymbol{y})-c\\left(z^{*}(\\boldsymbol{x}, \\boldsymbol{y}), \\boldsymbol{y}\\right) $

Since the SPO loss function is nonconvex and discontinuous in $ \\hat{\\boldsymbol{y}} $ (Ho-Nguyen and Kılıç-Karzan 2022, Lemma 1), Elmachtoub and Grigas (2022) focus on the linear objective $ c(\\boldsymbol{z}, \\boldsymbol{y}):=\\boldsymbol{y}^{T} \\boldsymbol{z} $ and replace the SPO loss with a convex upper bound called SPO+:

$ \\ell_{\\text {SPO }+}(\\hat{\\boldsymbol{y}}, \\boldsymbol{y}):=\\sup _{\\boldsymbol{z} \\in \\mathcal{Z}}(\\boldsymbol{y}-2 \\hat{\\boldsymbol{y}})^{T} \\boldsymbol{z}+2 \\hat{\\boldsymbol{y}}^{T} z^{*}(\\boldsymbol{x}, \\boldsymbol{y})-\\boldsymbol{y}^{T} z^{*}(\\boldsymbol{x}, \\boldsymbol{y}) $

 has a closed-form expression for its subgradient:

#### (16)

$ 2\\left(z^{*}(\\boldsymbol{x}, \\boldsymbol{y})-z^{*}(\\boldsymbol{x}, 2 \\hat{\\boldsymbol{y}}-\\boldsymbol{y})\\right) \\in \\nabla_{\\hat{\\boldsymbol{y}}} \\ell_{\\mathbf{s P O}+}(\\hat{\\boldsymbol{y}}, \\boldsymbol{y}) $

Loke et al. (2022) propose a decision-driven regularization model (DDR) 
- that combines prediction accuracy - and decision quality 
in a single optimization problem with loss function as follows:

$ \\ell_{\\mathrm{DDR}}(\\hat{\\boldsymbol{y}}, \\boldsymbol{y})=d(\\hat{\\boldsymbol{y}}, \\boldsymbol{y})-\\lambda \\min _{\\boldsymbol{z} \\in \\mathcal{Z}}\\left\\{\\mu \\boldsymbol{y}^{\\top} \\boldsymbol{z}+(1-\\mu) \\hat{\\boldsymbol{y}}^{\\top} \\boldsymbol{z}\\right\\} $

and SPO+ being a special case with $ \\mu=-1, \\lambda=1 $, and $ d(\\hat{\\boldsymbol{y}}, \\boldsymbol{y})=2 \\hat{\\boldsymbol{y}}^{\\top} z^{*}(\\boldsymbol{x}, \\boldsymbol{y})-\\boldsymbol{y}^{T} z^{*}(\\boldsymbol{x}, \\boldsymbol{y}) $.

#### SPO+ for combinatorial problems

Evaluating the gradient of $ S P O+l o s s $ in [(16)](#16) requires solving the optimization problem [(8)](#8) to obtain $ z^{*}(\\boldsymbol{x}, 2 \\hat{\\boldsymbol{y}}-\\boldsymbol{y}) $ for each data point. 

This can be computationally demanding when the optimization model in [(8)](#8) is an NP-hard problem. 

1 propose a SPO-relax approach that : 

- computes the gradient of SPO+ loss by solving instead a continuous relaxation when [(8)](#8) is a MILP. 

They also suggest: 
- speeding up the resolution using a warm-start for learning with a pre-trained model that:
  -  uses MSE as the loss function. 
- Another way proposed to speed up the computation is: warm-starting the solver. 
  - For example, $ z^{*}(\\boldsymbol{x}, \\boldsymbol{y}) $ can be used as a starting point for MILP solvers or to cut away a large part of the feasible space.

Mandi et al. (2020) show that:
- for weighted and unweighted knapsack problems as well as energycost aware scheduling problems (CSPLib, Problem 059, Simonis et al. 2014), SPO-relax results in:
- faster convergence and similar performance compared to SPO+ loss. 

Also, SPO-relax provides low regret solutions and faster convergence compared to QPTL 
- in the aforementioned three problems, 
- except in the weighted knapsack problem with low capacity.

With a focus on exact solution approaches, Jeong et al. (2022) study the problem of:

minimizing the regret in [(13)](#13) assuming a linear prediction model $ g_{\\boldsymbol{\\theta}}(\\boldsymbol{x})=\\boldsymbol{\\theta} \\boldsymbol{x} $ with $ \\boldsymbol{\\theta} \\in \\mathbb{R}^{d_{\\boldsymbol{z}} \\times d_{\\boldsymbol{x}}} $. 

Under the assumption that : 

$ z^{*}\\left(\\boldsymbol{x}, g_{\\boldsymbol{\\theta}}\\right) $ is unique for all $ \\boldsymbol{\\theta} $ and $ \\boldsymbol{x} $, 

the authors reformulate the bilevel SPO problem as a single-level MILP using symbolic variable elimination. 

They show that:
- their model can achieve up to two orders of magnitude improvement in expected regret compared to SPO+ on the training set.

Muñoz et al. (2022) applies a similar idea of representing the set of optimal solutions with a MILP. 

They rely on the KKT conditions of the problem defining $ z^{*}\\left(\\boldsymbol{x}, g_{\\boldsymbol{\\theta}}\\right) $
- to transform the bilevel integrated problem into a single-level MILP. 

Finally, Estes and Richard (2023) use the SPO loss function
- to solve a two-stage LP with right-hand side uncertainty. 

They propose a lexicographical ordering rule to select the minimal solution 
- when there are multiple optima and approximate the resulting piecewise-linear loss function, lex-SPO, by a convex surrogate to find the point predictor.

#### SPO Trees. 

Elmachtoub et al. (2020) propose a model (SPOT) to construct decision trees that:

- segment the covariates based on the SPO loss function
-  while retaining the interpretability in the end-to-end learning framework.

Their model outperforms classification and regression trees (CART) in the numerical experiments 

on a news recommendation problem using a real-world dataset 

and on the shortest path problem with synthetic data (also used in Elmachtoub and Grigas (2022)).

Guarantees. Elmachtoub and Grigas (2022) show that: 

under certain conditions, the minimizers of the SPO loss, SPO+ loss and MSE loss are almost always equal to $ \\mathbb{E}_{\\mathbb{P}(\\boldsymbol{y} \\mid \\boldsymbol{x})}[\\boldsymbol{y}] $
- given that $ \\mathbb{E}_{\\mathbb{P}(\\boldsymbol{y} \\mid \\boldsymbol{x})}[\\boldsymbol{y}] \\in \\mathcal{H} $. 

Thus, $ \\mathbf{S P O}+ $ is Fisher consistent (see Definition 4 in Appendix A) with respect to the SPO loss. 

This means that: 
- minimizing the surrogate loss also minimizes the true loss function. 

Ho-Nguyen and Kılınç-Karzan (2022) show that: 

for some examples of a multiclass classification problem, SPO+ is Fisher inconsistent, 
- while MSE loss is consistent. 

However, complete knowledge of the distribution is a limitation in practice
- where the decision-maker has access to only the samples from the distribution.

As a result, Ho-Nguyen and Kılınç-Karzan (2022) and Liu and Grigas (2021) provide calibration bounds:
- that hold for a class of distributions $ \\mathcal{D} $ on $ \\mathcal{X} \\times \\mathcal{Y} $ and ensure that:
- a lower excess risk of predictor for MSE and SPO+, respectively, translates to lower excess SPO risk (see Definition 5 in Appendix A).

In many ML applications, one seeks to derive finite-sample guarantees, 
- which are given in the form of a generalization bound,
  - i.e., an upper bound on the difference between the true risk of a loss function and its empirical risk estimate for a given sample size $ N $. 
A generalization bound for the SPO loss function is given in El Balghiti et al. (2022) (extension of El Balghiti et al. 2019) based on Rademacher complexity (see Definition 6 in Appendix A) of the SPO loss composed with the prediction functions $ g_{\\boldsymbol{\\theta}} \\in \\mathcal{H} $. 

More specifically, the bound achieved in El Balghiti et al. (2019) is $ \\mathrm{O}\\left(\\sqrt{\\frac{\\log (N)}{N}}\\right) $, and tighter bounds with respect to action and feature dimension are obtained using SPO function's structure 

and if $ \\mathcal{Z} $ satisfies a "strength" property. 


Hu et al. (2022) show that for linear CSO problems, the generalization bound for MSE loss and SPO loss is $ \\mathrm{O}\\left(\\sqrt{\\frac{1}{N}}\\right) $ 

while faster convergence rates for the SLO model compared to ILO model are obtained under certain low-noise assumptions. 

Elmachtoub et al. (2023) show that :

for non-linear optimization problems, SLO models stochastically dominate ILO in terms of their asymptotic optimality gaps
- when the hypothesis class covers the true distribution.

When the model is misspecified, they show that:

ILO outperforms SLO asymptotically in a general nonlinear setting.

### 5.4.2 Surrogate loss for a stochastic forest.

Kallus and Mao (2022) propose an algorithm called StochOptForest, 
- which generalizes the random-forest based local parameter estimation procedure in Athey et al. (2019). 

A second-order perturbation analysis of stochastic optimization problems allows them to scale to larger CSO problems 

since they can avoid solving an optimization problem at each candidate split. 

The policies obtained using their model are shown to be asymptotically consistent, 

and the benefit of ILO is illustrated by comparing their approach to the random forests of Bertsimas and Kallus (2020)
- on a set of problems with synthetic and real-world data.

### 5.4.3. Other surrogates. 

Wilder et al. (2019b) introduce ClusterNet to solve hard combinatorial graph optimization problems:
- by learning incomplete graphs. The model combines graph convolution networks
- to embed the graphs in a continuous space
- and uses a soft version of k-means clustering to obtain a differential proxy for the combinatorial problems,
  - e.g., community detection and facility location.

Numerical experiments on a synthetic data set show that:
- ClusterNet outperforms the two-stage SLO approach of first learning the graph and then optimizing, 
- as well as other baselines used in community detection and facility location.

Focusing on combinatorial problems, Vlastelica et al. (2019) propose a differentiable black-box (DBB) approach to tackle the issue that : 

the Jacobian of $ z^{*}\\left(\\boldsymbol{x}, g_{\\boldsymbol{\\theta}}\\right) $ is zero almost everywhere 

by approximating the true loss function 
- using an interpolation controlled in a way that
  -  balances between "informativeness of the gradient" and "faithfulness to the original function".

Algorithmically, this is done by perturbing the prediction $ g_{\\boldsymbol{\\theta}}(\\boldsymbol{x}) $ in the direction $ \\nabla_{\\boldsymbol{z}} c\\left(z^{*}\\left(\\boldsymbol{x}, g_{\\boldsymbol{\\theta}}\\right), \\boldsymbol{y}\\right) $ and obtaining a gradient of the surrogate loss based on the effect of this perturbation on the resulting perturbed action.

Chung et al. (2022) introduce a computationally tractable ILO model : 

to solve non-linear CSO problems. 

Using the first-order Taylor expansion of the task loss around the prediction, 

they introduce a reweighted MSE loss function 

- where weights are determined by taking the gradient of task loss with respect to the prediction. 

To solve a large-scale multi-facility inventory allocation problem 
- with few samples for each facility, 

they use a single random forest that:

can predict the demand across facilities and products.

Assuming that each tree in the random forest provides an independent and identically distributed realization of the uncertain parameter, 

they obtain the conditional distribution of uncertain parameter, $ f_{\\theta_{0}}=\\frac{1}{T} \\sum_{t=1}^{T} \\delta_{\\hat{\\boldsymbol{y}}^{t}} $, 
- where $ \\hat{\\boldsymbol{y}}^{t} $ is the prediction of tree $ t $.

For each feature $ \\boldsymbol{x}_{i} $ and conditional distribution $ f_{\\boldsymbol{\\theta}_{0}} $, 

they obtain an optimal allocation, $ z_{i}^{j}= $ $ z^{*}\\left(\\boldsymbol{x}, f_{\\boldsymbol{\\theta}_{0}}\\right) $ for facility $ j $ 
- that minimizes the average unmet demand. In the last step, they retrain the random forest to minimize the reweighted MSE loss function:

#### (17)

$ \\underset{\\boldsymbol{\\theta}}{\\operatorname{argmin}} \\sum_{i=1}^{N} \\sum_{j=1}^{M} \\sum_{t=1}^{T} \\mathbb{1}\\left[\\hat{y}_{i}^{t, j} \\geq s_{i}^{j}+z_{i}^{j}\\right]\\left|f_{\\boldsymbol{\\theta}}\\left(\\boldsymbol{x}_{i}\\right)-\\hat{y}_{i}^{t, j}\\right| $

- $ M $ is the number of facilities, 
- $ \\hat{y}_{i}^{t, j} $ and $ s_{i}^{j} $ denote the demand and inventory levels, respectively, at facility $ j $. 

The above model [(17)](#17) solves the optimization problem once during training, 

and is shown to be scalable for a medical allocation problem in Sierra Leone when compared to Kallus and Mao (2022)
- where splitting of the feature space is done based on the task loss.

Lawless and Zhou (2022) introduce a loss function similar to Chung et al. (2022) that:

weighs the prediction error with a regret term as follows:

#### (18)

$ d\\left(g_{\\boldsymbol{\\theta}}(\\boldsymbol{x}), \\boldsymbol{y}\\right)=\\left[c\\left(z^{*}\\left(\\boldsymbol{x}, g_{\\boldsymbol{\\theta}}\\right), \\boldsymbol{y}\\right)-c\\left(z^{*}(\\boldsymbol{x}, \\boldsymbol{y}), \\boldsymbol{y}\\right)\\right]\\left(\\boldsymbol{y}-g_{\\boldsymbol{\\theta}}(\\boldsymbol{x})\\right)^{2} $

Learning optimal $ \\boldsymbol{\\theta} $ from the above formulation involves an $ \\operatorname{argmin} $ differentiation. 

So, the authors provide a two-step polynomial time algorithm to approximately solve the above problem:

It first computes a pilot estimator $ g_{\\boldsymbol{\\theta}_{0}} $
- by solving [(7)](#7) with $ d\\left(g_{\\boldsymbol{\\theta}}(\\boldsymbol{x}), \\boldsymbol{y}\\right)=\\left(g_{\\boldsymbol{\\theta}}(\\boldsymbol{x})-\\boldsymbol{y}\\right)^{2} $ 

and then solving [(7)](#7) with the distance function in [(18)](#18) where:
-  $ c\\left(z^{*}\\left(\\boldsymbol{x}, g_{\\boldsymbol{\\theta}}\\right), \\boldsymbol{y}\\right) $ is substituted with $ c\\left(z^{*}\\left(\\boldsymbol{x}, g_{\\boldsymbol{\\theta}_{0}}\\right), \\boldsymbol{y}\\right) $. 

The authors show that their simple algorithm performs comparably to SPO+.

We conclude this subsection on surrogate loss functions by : mentioning the efforts in Sun et al. (2023a) to learn a cost point estimator (in an expected value-based model)
- to imitate the hindsight optimal solution.

This is done by designing a surrogate loss function that:
- penalizes how much the optimal basis optimality conditions are violated. 

They derive generalization error bounds for this new loss function and employ them to provide a bound on the sub-optimality of the minimal $ \\theta $.

## 5.5  Training using a surrogate differentiable optimizer

### 5.5.1  Differentiable perturbed optimizer

One way of obtaining a differentiable optimizer is:
- to apply a stochastic perturbation to the parameters predicted by the ML model. 

Taking the case of expected value-based models as an example:

the key idea is that:
- although the gradient of the solution of the contextual problem with respect to the predicted parameters $ \\hat{\\boldsymbol{y}}:=g_{\\boldsymbol{\\theta}}(\\boldsymbol{x}) $ is zero almost everywhere
- if we perturb the predictor using a noise with differentiable density
- then the expectation of the solution of the perturbed contextual problem:

$ \\bar{z}^{\\varepsilon}\\left(\\boldsymbol{x}, g_{\\boldsymbol{\\theta}}\\right)=\\mathbb{E}_{\\Psi}\\left[\\tilde{z}^{\\varepsilon}\\left(\\boldsymbol{x}, g_{\\boldsymbol{\\theta}}, \\Psi\\right)\\right] $ with $ \\tilde{z}^{\\varepsilon}\\left(\\boldsymbol{x}, g_{\\boldsymbol{\\theta}}, \\Psi\\right):=\\underset{\\boldsymbol{z} \\in \\mathcal{Z}}{\\operatorname{argmin}} c\\left(\\boldsymbol{z}, g_{\\boldsymbol{\\theta}}(\\boldsymbol{x})+\\varepsilon \\Psi\\right) $

- where $ \\varepsilon>0 $ controls the amount of perturbation

and more generally of the expected cost of the associated random policy $ \\mathbb{E}_{\\Psi}\\left[H\\left(\\tilde{z}^{\\varepsilon}\\left(\\cdot, g_{\\boldsymbol{\\theta}}, \\Psi\\right), \\hat{\\mathbb{P}}_{N}\\right)\\right] $ can be shown to be smooth and differentiable. 

This idea is proposed and exploited in Berthet et al. (2020), which:
- focus on a bi-linear cost $ c(\\boldsymbol{z}, \\boldsymbol{y}):=\\boldsymbol{y}^{T} \\boldsymbol{z} $ thus simplifying $ \\mathbb{E}_{\\Psi}\\left[H\\left(\\tilde{z}^{\\varepsilon}\\left(\\cdot, g_{\\boldsymbol{\\theta}}, \\Psi\\right), \\hat{\\mathbb{P}}_{N}\\right)\\right]=H\\left(\\bar{z}^{\\varepsilon}\\left(\\cdot, g_{\\boldsymbol{\\theta}}\\right), \\hat{\\mathbb{P}}_{N}\\right) $. 

Further, they show that:

when an imitation ILO model is used 
- with a special form of Bregman divergence 

to capture the difference between $ z^{*}(\\boldsymbol{x}, \\boldsymbol{y}) $ and $ \\tilde{z}^{\\varepsilon}(\\boldsymbol{x}, \\hat{\\boldsymbol{y}}, \\Psi) $, 

the gradient of $ H_{\\text {Imitation }}\\left(\\tilde{z}^{\\varepsilon}\\left(\\cdot, g_{\\boldsymbol{\\theta}}, \\Psi\\right), \\hat{\\mathbb{P}}_{N}^{\\prime}\\right) $ can be computed directly without needing to determine the Jacobian of $ \\bar{z}^{\\varepsilon}\\left(\\boldsymbol{x}, g_{\\boldsymbol{\\theta}}\\right) $ (Blondel et al. 2020):

$ H_{\\text {Imitation }}\\left(\\tilde{z}^{\\varepsilon}\\left(\\cdot, g_{\\boldsymbol{\\theta}}, \\Psi\\right), \\hat{\\mathbb{P}}_{N}^{\\prime}\\right):=\\mathbb{E}_{\\hat{\\mathbb{P}}_{N}}\\left[\\ell_{\\mathrm{PFYL}}\\left(g_{\\boldsymbol{\\theta}}(\\boldsymbol{x}), \\boldsymbol{y}\\right)\\right] $

- $ \\ell_{\\text {PFYI }} $ is a perturbed Fenchel-Young loss (PFYL) given by:

- $ \\ell_{\\mathrm{PFYL}}(\\hat{\\boldsymbol{y}}, \\boldsymbol{y}):=\\hat{\\boldsymbol{y}}^{T} z^{*}(\\boldsymbol{x}, \\boldsymbol{y})-\\mathbb{E}_{\\Psi}\\left[(\\hat{\\boldsymbol{y}}+\\varepsilon \\Psi)^{T} \\tilde{\\boldsymbol{z}}^{\\varepsilon}(\\boldsymbol{x}, \\hat{\\boldsymbol{y}}, \\Psi)\\right]+\\varepsilon \\Omega_{\\mathrm{PFYL}}\\left(z^{*}(\\boldsymbol{x}, \\boldsymbol{y})\\right) $

- $ \\Omega_{\\mathrm{PFYL}}(\\boldsymbol{z}) $ is the Fenchel dual of $ F(\\boldsymbol{y}):=-\\mathbb{E}_{\\Psi}\\left[(\\boldsymbol{y}+\\Psi)^{T} \\tilde{z}^{\\varepsilon}(\\boldsymbol{x}, \\boldsymbol{y}, \\Psi)\\right] $. 
- The gradient of the FenchelYoung loss with respect to the model prediction is given by:
  - $ \\nabla_{\\hat{\\boldsymbol{y}}} \\ell_{\\mathrm{PFYL}}(\\hat{\\boldsymbol{y}}, \\boldsymbol{y})=z^{*}(\\boldsymbol{x}, \\boldsymbol{y})-\\overline{\\boldsymbol{z}}^{\\varepsilon}(\\boldsymbol{x}, \\hat{\\boldsymbol{y}}) $


Evaluating this gradient can be done through:

Monte Carlo evaluations by sampling perturbations and solving the corresponding perturbed problems.

Dalle et al. (2022) introduce a multiplicative perturbation: 

with the advantage that:

it preserves the sign of $ g_{\\theta}(\\boldsymbol{x}) $ without adding any bias:

$ \\tilde{\\boldsymbol{z}}^{\\varepsilon}\\left(\\boldsymbol{x}, g_{\\boldsymbol{\\theta}}, \\Psi\\right):=\\underset{\\boldsymbol{z} \\in \\mathcal{Z}}{\\operatorname{argmin}} c\\left(\\boldsymbol{z}, g_{\\boldsymbol{\\theta}}(\\boldsymbol{x}) \\odot \\exp \\left(\\varepsilon \\Psi-\\varepsilon^{2} / 2\\right)\\right) $

- $ \\odot $ is the Hadamard dot-product and the exponential is taken elementwise. 

Dalle et al. (2022) and Sun et al. (2023c) also show that: 

there is a one-to-one equivalence between the:
- perturbed optimizer approach
- and using a regularized randomized version of the CSO problem for combinatorial problems with linear objective functions. 


Finally, Dalle et al. (2022) show an intimate connection between:
- the perturbed minimizer approach proposed by Berthet et al. (2020) 
- and surrogate loss functions approaches

such as SPO+ by casting them as special cases of a more general surrogate loss formulation.

Mulamba et al. (2021) and Kong et al. (2022) consider an "energy-based" perturbed optimizer defined by its density of the form:

#### (19)







placeholder

placeholder

placeholder

placeholder

placeholder

`,i6=`# Exercise 2.58

Suppose we prepare a quantum system in an eigenstate$|\\psi\\rangle$
of some observable $M$, with corresponding eigenvalue $m$.

What is the average observed value of $M$, and the standard deviation?

---

## Solution:

$\\langle M \\rangle = \\langle \\psi | M | \\psi \\rangle = m$ ($M|\\psi \\rangle = m|\\psi\\rangle$)

$\\langle M^2 \\rangle = \\langle \\psi | M^2 | \\psi \\rangle = m^2$

$\\Delta(M) = \\sqrt{\\langle M^2 \\rangle - \\langle M \\rangle ^2} = \\sqrt{m^2 - m^2 } = 0$

--- 

# 2.107->2.108:

$$
\\begin{aligned}[l]
&\\left[A,B\\right] \\\\ 
=&AB - BA\\\\
=&(C-\\langle C\\rangle)(D-\\langle D\\rangle) - (D-\\langle D\\rangle)(C-\\langle C\\rangle) \\\\
=& CD - DC\\\\
 = &\\left[C,D\\right]
\\end{aligned}
$$

--- 

# Exercise 2.59

Suppose we have qubit in the state  $|0\\rangle $,
and we measure the observable  $X$ .
What is the average value of  $X$  ?
What is the standard deviation of  $X$  ?

 --- 

## Solution


$$
\\begin{aligned}[l]
& \\langle X \\rangle \\\\
 = & \\langle 0 | X |0 \\rangle \\\\
 = &0\\\\
\\\\
&\\langle X^2\\rangle \\\\
 = &\\langle I \\rangle \\\\
= &1\\\\
\\\\
&\\Delta(X)\\\\
 = &\\sqrt{\\langle X ^2\\rangle - \\langle X \\rangle ^ 2}\\\\
= & 1
\\end{aligned}
$$

--- 

# Exercise 2.60

Show that  $\\vec{v} \\cdot \\vec{\\sigma} $ has eigenvalues  $\\pm $1 ,
and that the projectors onto the corresponding eigenspaces are given by
$P_{ \\pm}=(I \\pm \\vec{v} \\cdot \\vec{\\sigma}) / 2 .$

--- 

## Solution

$\\vec v \\cdot \\vec \\sigma = v_x \\sigma_x + v_y\\sigma_y + v_z\\sigma_z$

$\\Rightarrow (\\vec v \\cdot \\vec \\sigma)^2 = v_x ^ 2 + v_y ^ 2 + v_z ^ 2 = |\\vec v|^2 = I$

$\\Rightarrow P = \\dfrac{I \\pm \\vec v \\cdot \\vec \\sigma}{2}$

---

# Exercise 2.61

Calculate the probability of obtaining the result $+1$
for a measurement of  $\\vec{v} \\cdot \\vec{\\sigma} $,
given that the state prior to measurement is  $|0\\rangle $.
What is the state of the system after the measurement if $+1$ is obtained?

---

## Solution

$p = \\langle 0 | P_+ | 0\\rangle = \\dfrac{1}{2}(\\langle 0| I | 0\\rangle + \\langle 0 | \\vec v \\cdot \\vec \\sigma | 0 \\rangle)$

$ = \\dfrac{1}{2}(1 + v_z)$

$|\\psi' \\rangle = \\dfrac{1}{2}(I +\\vec v \\cdot \\vec \\sigma)|0\\rangle = (1 + v_z)|0\\rangle + (v_x + iv_y)|1\\rangle$

$\\dfrac{|\\psi'\\rangle}{\\sqrt{\\langle \\psi'|\\psi'\\rangle}} = \\dfrac{(1 + v_z)|0\\rangle + (v_x + iv_y)|1\\rangle}{\\sqrt{2(1+v_z)}}$





`,l6=`# Phase

$e^{i\\theta}|\\psi\\rangle$ = $|\\psi\\rangle$, *global phase factor* is $e^{i\\theta}$.

$e^{i\\theta}|n$ = $a$, *relative phase factor* is $e^{i\\theta}$.

---

# Composite systems

The state space of a **composite** physical system is the **tensor product**
of the state spaces of the component physical systems.

---

# Exercise 2.66

Show that the average value of the observation $X_1Z_2$
for a two qubit system measured in the state $(|00\\rangle + |11\\rangle) / \\sqrt 2$ is zero.

---

## Solution

$\\langle X_1Z_2 \\rangle = \\langle (|00\\rangle + |11\\rangle) / \\sqrt 2 | X_1 Z_2 | (|00\\rangle + |11\\rangle) / \\sqrt 2 \\rangle$

$=\\langle (|00\\rangle + |11\\rangle) / \\sqrt 2 |(|10\\rangle - |01\\rangle)/\\sqrt 2\\rangle$

$=0 $

---
`,o6=`# Exercise 2.67

Suppose  $V$  is a Hilbert space with a subspace  $W$ .

Suppose $U: W \\rightarrow V$  is a linear operator which preserves inner products,

that is, for any $ \\left|w_{1}\\right\\rangle$  and  $\\left|w_{2}\\right\\rangle$  in  $W$ ,

$\\left\\langle w_{1}\\right| U^{\\dagger} U\\left|w_{2}\\right\\rangle=\\left\\langle w_{1} \\mid w_{2}\\right\\rangle$ .


Prove that there exists a unitary operator  $U^{\\prime}: V \\rightarrow V $ which extends $U$ .

That is, $ U^{\\prime}|w\\rangle=U|w\\rangle$  for all $ |w\\rangle $ in  $W $, but $ U^{\\prime}$  is defined on the entire space  $V$ . 

Usually we omit the prime symbol $'$ and just write $ U  $to denote the extension.

---

## Proof

### U is an isometry from W into V

$\\forall |w_1\\rangle, |w_2\\rangle \\in W, \\langle U w_1 | U w_2 \\rangle = \\langle w_1 | U^\\dagger U | w_2\\rangle = \\langle w_1 | w_2 \\rangle$

Therefore, $U$ is an isometry.

### Extend U to unitary operator U' on V

Let $W^\\perp$ denote the orthogonal complement of $W$ in $V$, so $V = W \\oplus W^\\perp$

Notice that $V = U(W) \\oplus U(W)^\\perp$

$U$ is isometry $\\Rightarrow$ $\\dim W = \\dim U(W) \\Rightarrow \\dim W^\\perp = \\dim U(W)^\\perp$

$\\Rightarrow \\exists T: W^\\perp \\rightarrow U(W)^\\perp$, $T$ is isometry

Define $U': V\\rightarrow V $ by: $U'|v\\rangle = U|w\\rangle + T|w^\\perp\\rangle$

where $|v\\rangle = |w\\rangle + |w^\\perp\\rangle, |w\\rangle \\in W, |w^\\perp\\rangle\\in W^\\perp$

### Show that U' is unitary

$\\forall |v_1\\rangle, |v_2\\rangle \\in V, |v_i \\rangle =|w_i\\rangle + |w_i^\\perp\\rangle,$ we have:

$$
\\begin{aligned}
\\langle U'v_1|U'v_2\\rangle & = \\langle Uw_1 + Tw_1^\\perp | U w_2 + T w_2^\\perp\\rangle \\\\
&=\\langle Uw_1|Uw_2\\rangle + \\langle Tw_1^\\perp | Tw_2^\\perp\\rangle\\\\
&=\\langle w_1 | w_2\\rangle + \\langle w_1^\\perp|w_2^\\perp\\rangle\\\\
&=\\langle v_1|v_2\\rangle
\\end{aligned}
$$

$\\Box$

---

# Thoughts on 2.127 - 2.131, the POVM universal measurement

There's a **quantum system** with **state space** $Q$

We want to perform a $\\sum_{i}M_i$, a **POVM** on $|\\psi\\rangle$, but it's not a projector

We introduce a **ancilla system** with **state space** $M$,  with orthonormal basis $|m\\rangle$,

We construct a composed system $Q\\otimes M$, and $|\\Psi\\rangle = |\\psi\\rangle\\otimes|0\\rangle$ (here $|0\\rangle$ can be any state)

We denote $U$ on $Q\\otimes M$ by $U|\\Psi\\rangle = \\sum_i M_i|\\psi\\rangle|m\\rangle$,

we can see $U$ is unitary and preserves inner products, therefore:

$$
\\begin{aligned}
\\langle\\Psi_1|U^\\dagger U|\\Psi_2\\rangle &= \\sum_{i, j}\\langle\\psi_1|M_i^\\dagger \\langle m_i|M_j|\\psi_2\\rangle| m_j\\rangle\\\\
&=\\sum_{i,j}\\langle\\psi_1|M_i^\\dagger M_j|\\psi_2\\rangle\\langle m_i|m_j\\rangle\\\\
&=\\sum_i \\langle\\psi_1|M_i^\\dagger M_i|\\psi_2\\rangle \\text{ (notice only when i = j it's not zero)}\\\\ 
&=\\langle\\psi_1|\\psi_2\\rangle
\\end{aligned}
$$

then we can perform measurement on $M$ instead, we have $P_m = I_Q \\otimes |m\\rangle\\langle m |$

then the probability:

$$
\\begin{aligned}
p(m) &= \\langle\\Psi|U^\\dagger P_mU|\\Psi\\rangle\\\\
&= \\sum_{i, j}\\langle\\psi|M_i^\\dagger \\langle m_i|P_m M_j|\\psi\\rangle| m_j\\rangle\\\\
&=\\sum_{i,j}\\langle\\psi|M_i^\\dagger M_j|\\psi\\rangle \\langle m_i|m\\rangle\\langle m|m_j\\rangle \\\\
&=\\langle\\psi |M^\\dagger_m M_m|\\psi\\rangle \\text{ ((notice only mi = m and mj = m it's not zero))}
\\end{aligned}
$$

the state:

$$
\\begin{aligned}
\\dfrac{P_m U |\\Psi\\rangle}{\\sqrt{p(m)} } &= \\frac{\\sum_i M_i|\\psi\\rangle|m_i\\rangle\\langle m_i|m\\rangle}{\\sqrt{p(m)}}\\\\
&=\\dfrac{M_m|\\psi\\rangle|m\\rangle}{\\sqrt{\\langle\\psi|M^\\dagger _m M_m|\\psi\\rangle}} \\text{ (notice only mi = m it's not zero)}\\\\
\\end{aligned}
$$

(the book made a mistake here)

therefore the state of system $M$ is $|m\\rangle$,

the state of system $Q$ is $\\dfrac{M_m|\\psi\\rangle|m\\rangle}{\\sqrt{\\langle\\psi|M^\\dagger _m M_m|\\psi\\rangle}}$

which correspond with **Postulate 3**  $\\square$

---

# Exercise 2.68

Prove that $\\dfrac{|00\\rangle + |11\\rangle}{\\sqrt{2}} \\ne |a\\rangle|b\\rangle$ for all single qubit states $|a\\rangle, |b\\rangle$

---

## Proof

let $|a\\rangle = \\alpha |0\\rangle + \\beta|1\\rangle, |b\\rangle = \\gamma|0\\rangle + \\delta|1\\rangle$,

$|a\\rangle|b\\rangle = \\dfrac{1}{2}\\alpha\\gamma|00\\rangle + \\dfrac{1}{2}\\alpha\\delta|01\\rangle + \\dfrac{1}{2}\\beta\\gamma|10\\rangle + \\dfrac{1}{2}\\beta\\delta|11\\rangle$

then $\\alpha\\delta = 0$ and $\\beta\\gamma = 0$, contradiction.

---

# Superdense coding

# Exercise 2.70

Suppose  $E$  is any positive operator acting on Alice's qubit.

Show that  $\\langle\\psi| E \\otimes I|\\psi\\rangle  $takes the same value 

when  $|\\psi\\rangle  $is any of the four Bell states. 

Suppose some malevolent third party ('Eve') intercepts Alice's qubit 

on the way to Bob in the superdense coding protocol. 

Can Eve infer anything about which of the four possible bit strings  

$00,01,10,11  $Alice is trying to send? 

If so, how, or if not, why not?

---

## Solution

1. notice that $\\langle \\psi | E \\otimes I | \\psi \\rangle = tr((E\\otimes I )|\\psi\\rangle\\langle\\psi|)$

2. No, she can only access to one bit and there's no useful information.

---

# Density operator

density operator, density matrix:

$\\rho \\equiv \\sum_i p_i|\\psi_i\\rangle\\langle\\psi_i|$

$\\rho \\rightarrow U\\rho U^\\dagger$

$\\rho_m = \\dfrac{M_m\\rho M_m^\\dagger}{tr(M^\\dagger_m M_m \\rho)}$

$\\rho = \\sum_i p_i \\rho_i =\\sum_m M_m \\rho M_m ^\\dagger$
`,s6=`# More density operator

$tr(\\rho) = 1$

$\\rho$ is a positive operator

# Postulates


## 1

$\\sum_i p_i \\rho_i$

## 2

$\\rho' = U\\rho U^\\dagger$

## 3

$p(m) = tr(M^\\dagger_mM_m\\rho)$

$\\dfrac{M_m\\rho M^\\dagger_m}{tr((M^\\dagger_mM_m\\rho)}$

$\\sum_mM^\\dagger_mM_m = I$

## 4

$\\rho_1\\otimes \\rho_2\\otimes\\cdots\\otimes\\rho_n$

## Pure state:

$\\rho = |\\psi\\rangle\\langle\\psi|$

---

# Exercise 2.71

(Criterion to decide if a state is mixed or pure) 

Let  $\\rho  $ be a density operator. 

Show that  $\\operatorname{tr}\\left(\\rho^{2}\\right) \\leq 1$ ,

with equality if and only if  $\\rho  $ is a pure state.

---

# Proof

$\\Rightarrow:$

$tr(\\rho^2) = 1 \\Rightarrow \\sum_i\\lambda_i^2 = 1\\Rightarrow $ one $\\lambda $ is 1

$\\Leftarrow:$

$\\rho = |\\psi\\rangle\\langle\\psi| \\Rightarrow \\rho^2 = \\rho \\Rightarrow tr(\\rho^2) = tr(\\rho) = 1$

---

# Same density matrices:

$|\\tilde \\psi_i\\rangle = \\sum_j u_{ij}|\\tilde \\phi_j\\rangle$

---

# Exercise 2.72

(Bloch sphere for mixed states) 

The Bloch sphere picture for pure states of a single qubit was introduced in Section 1.2. 

This description has an important generalization to mixed states as follows.

(1) Show that an arbitrary density matrix for a mixed state qubit may be written as

$\\rho=\\frac{I+\\vec{r} \\cdot \\vec{\\sigma}}{2}$

where  $\\vec{r}$  is a real three-dimensional vector such that  $\\|\\vec{r}\\| \\leq 1 $. 

This vector is known as the Bloch vector for the state  $\\rho $.


(2) What is the Bloch vector representation for the state  $\\rho=I / 2 $ ?

(3) Show that a state  $\\rho$  is pure if and only if  $\\|\\vec{r}\\|=1 $.

(4) Show that for pure states the description of the Bloch vector we have given coincides with that in Section 1.2.

---

## (1)

Exercise 2.60

## (2)

$\\vec r = (0, 0, 0)$

## (3)

)`,u6=`# Understanding React Hooks

React Hooks are functions that let you use state and other React features without writing a class.

Here is some content with a mathematical formula inline: $E = mc^2$

And a block formula:

$$
\\int_{-\\infty}^{+\\infty} e^{-x^2} dx = \\sqrt{\\pi}
$$

More content...
`;function Um(e){const t=[],n=String(e||"");let r=n.indexOf(","),a=0,i=!1;for(;!i;){r===-1&&(r=n.length,i=!0);const l=n.slice(a,r).trim();(l||!i)&&t.push(l),a=r+1,r=n.indexOf(",",a)}return t}function h6(e,t){const n={};return(e[e.length-1]===""?[...e,""]:e).join((n.padRight?" ":"")+","+(n.padLeft===!1?"":" ")).trim()}const c6=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,m6=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,d6={};function Wm(e,t){return(d6.jsx?m6:c6).test(e)}const f6=/[ \t\n\f\r]/g;function p6(e){return typeof e=="object"?e.type==="text"?Vm(e.value):!1:Vm(e)}function Vm(e){return e.replace(f6,"")===""}class nl{constructor(t,n,r){this.property=t,this.normal=n,r&&(this.space=r)}}nl.prototype.property={};nl.prototype.normal={};nl.prototype.space=null;function zb(e,t){const n={},r={};let a=-1;for(;++a<e.length;)Object.assign(n,e[a].property),Object.assign(r,e[a].normal);return new nl(n,r,t)}function Ui(e){return e.toLowerCase()}class Gt{constructor(t,n){this.property=t,this.attribute=n}}Gt.prototype.space=null;Gt.prototype.boolean=!1;Gt.prototype.booleanish=!1;Gt.prototype.overloadedBoolean=!1;Gt.prototype.number=!1;Gt.prototype.commaSeparated=!1;Gt.prototype.spaceSeparated=!1;Gt.prototype.commaOrSpaceSeparated=!1;Gt.prototype.mustUseProperty=!1;Gt.prototype.defined=!1;let b6=0;const ue=Kr(),We=Kr(),Fb=Kr(),U=Kr(),De=Kr(),_a=Kr(),Ct=Kr();function Kr(){return 2**++b6}const g0=Object.freeze(Object.defineProperty({__proto__:null,boolean:ue,booleanish:We,commaOrSpaceSeparated:Ct,commaSeparated:_a,number:U,overloadedBoolean:Fb,spaceSeparated:De},Symbol.toStringTag,{value:"Module"})),Ks=Object.keys(g0);class Bh extends Gt{constructor(t,n,r,a){let i=-1;if(super(t,n),Km(this,"space",a),typeof r=="number")for(;++i<Ks.length;){const l=Ks[i];Km(this,Ks[i],(r&g0[l])===g0[l])}}}Bh.prototype.defined=!0;function Km(e,t,n){n&&(e[t]=n)}const g6={}.hasOwnProperty;function La(e){const t={},n={};let r;for(r in e.properties)if(g6.call(e.properties,r)){const a=e.properties[r],i=new Bh(r,e.transform(e.attributes||{},r),a,e.space);e.mustUseProperty&&e.mustUseProperty.includes(r)&&(i.mustUseProperty=!0),t[r]=i,n[Ui(r)]=r,n[Ui(i.attribute)]=r}return new nl(t,n,e.space)}const Ab=La({space:"xlink",transform(e,t){return"xlink:"+t.slice(5).toLowerCase()},properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null}}),Tb=La({space:"xml",transform(e,t){return"xml:"+t.slice(3).toLowerCase()},properties:{xmlLang:null,xmlBase:null,xmlSpace:null}});function Pb(e,t){return t in e?e[t]:t}function Nb(e,t){return Pb(e,t.toLowerCase())}const Mb=La({space:"xmlns",attributes:{xmlnsxlink:"xmlns:xlink"},transform:Nb,properties:{xmlns:null,xmlnsXLink:null}}),Rb=La({transform(e,t){return t==="role"?t:"aria-"+t.slice(4).toLowerCase()},properties:{ariaActiveDescendant:null,ariaAtomic:We,ariaAutoComplete:null,ariaBusy:We,ariaChecked:We,ariaColCount:U,ariaColIndex:U,ariaColSpan:U,ariaControls:De,ariaCurrent:null,ariaDescribedBy:De,ariaDetails:null,ariaDisabled:We,ariaDropEffect:De,ariaErrorMessage:null,ariaExpanded:We,ariaFlowTo:De,ariaGrabbed:We,ariaHasPopup:null,ariaHidden:We,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:De,ariaLevel:U,ariaLive:null,ariaModal:We,ariaMultiLine:We,ariaMultiSelectable:We,ariaOrientation:null,ariaOwns:De,ariaPlaceholder:null,ariaPosInSet:U,ariaPressed:We,ariaReadOnly:We,ariaRelevant:null,ariaRequired:We,ariaRoleDescription:De,ariaRowCount:U,ariaRowIndex:U,ariaRowSpan:U,ariaSelected:We,ariaSetSize:U,ariaSort:null,ariaValueMax:U,ariaValueMin:U,ariaValueNow:U,ariaValueText:null,role:null}}),y6=La({space:"html",attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},transform:Nb,mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:_a,acceptCharset:De,accessKey:De,action:null,allow:null,allowFullScreen:ue,allowPaymentRequest:ue,allowUserMedia:ue,alt:null,as:null,async:ue,autoCapitalize:null,autoComplete:De,autoFocus:ue,autoPlay:ue,blocking:De,capture:null,charSet:null,checked:ue,cite:null,className:De,cols:U,colSpan:null,content:null,contentEditable:We,controls:ue,controlsList:De,coords:U|_a,crossOrigin:null,data:null,dateTime:null,decoding:null,default:ue,defer:ue,dir:null,dirName:null,disabled:ue,download:Fb,draggable:We,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:ue,formTarget:null,headers:De,height:U,hidden:ue,high:U,href:null,hrefLang:null,htmlFor:De,httpEquiv:De,id:null,imageSizes:null,imageSrcSet:null,inert:ue,inputMode:null,integrity:null,is:null,isMap:ue,itemId:null,itemProp:De,itemRef:De,itemScope:ue,itemType:De,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:ue,low:U,manifest:null,max:null,maxLength:U,media:null,method:null,min:null,minLength:U,multiple:ue,muted:ue,name:null,nonce:null,noModule:ue,noValidate:ue,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:ue,optimum:U,pattern:null,ping:De,placeholder:null,playsInline:ue,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:ue,referrerPolicy:null,rel:De,required:ue,reversed:ue,rows:U,rowSpan:U,sandbox:De,scope:null,scoped:ue,seamless:ue,selected:ue,shadowRootClonable:ue,shadowRootDelegatesFocus:ue,shadowRootMode:null,shape:null,size:U,sizes:null,slot:null,span:U,spellCheck:We,src:null,srcDoc:null,srcLang:null,srcSet:null,start:U,step:null,style:null,tabIndex:U,target:null,title:null,translate:null,type:null,typeMustMatch:ue,useMap:null,value:We,width:U,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:De,axis:null,background:null,bgColor:null,border:U,borderColor:null,bottomMargin:U,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:ue,declare:ue,event:null,face:null,frame:null,frameBorder:null,hSpace:U,leftMargin:U,link:null,longDesc:null,lowSrc:null,marginHeight:U,marginWidth:U,noResize:ue,noHref:ue,noShade:ue,noWrap:ue,object:null,profile:null,prompt:null,rev:null,rightMargin:U,rules:null,scheme:null,scrolling:We,standby:null,summary:null,text:null,topMargin:U,valueType:null,version:null,vAlign:null,vLink:null,vSpace:U,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:ue,disableRemotePlayback:ue,prefix:null,property:null,results:U,security:null,unselectable:null}}),v6=La({space:"svg",attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},transform:Pb,properties:{about:Ct,accentHeight:U,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:U,amplitude:U,arabicForm:null,ascent:U,attributeName:null,attributeType:null,azimuth:U,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:U,by:null,calcMode:null,capHeight:U,className:De,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:U,diffuseConstant:U,direction:null,display:null,dur:null,divisor:U,dominantBaseline:null,download:ue,dx:null,dy:null,edgeMode:null,editable:null,elevation:U,enableBackground:null,end:null,event:null,exponent:U,externalResourcesRequired:null,fill:null,fillOpacity:U,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:_a,g2:_a,glyphName:_a,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:U,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:U,horizOriginX:U,horizOriginY:U,id:null,ideographic:U,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:U,k:U,k1:U,k2:U,k3:U,k4:U,kernelMatrix:Ct,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:U,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:U,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:U,overlineThickness:U,paintOrder:null,panose1:null,path:null,pathLength:U,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:De,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:U,pointsAtY:U,pointsAtZ:U,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:Ct,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:Ct,rev:Ct,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:Ct,requiredFeatures:Ct,requiredFonts:Ct,requiredFormats:Ct,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:U,specularExponent:U,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:U,strikethroughThickness:U,string:null,stroke:null,strokeDashArray:Ct,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:U,strokeOpacity:U,strokeWidth:null,style:null,surfaceScale:U,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:Ct,tabIndex:U,tableValues:null,target:null,targetX:U,targetY:U,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:Ct,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:U,underlineThickness:U,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:U,values:null,vAlphabetic:U,vMathematical:U,vectorEffect:null,vHanging:U,vIdeographic:U,version:null,vertAdvY:U,vertOriginX:U,vertOriginY:U,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:U,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null}}),x6=/^data[-\w.:]+$/i,Qm=/-[a-z]/g,w6=/[A-Z]/g;function Ib(e,t){const n=Ui(t);let r=t,a=Gt;if(n in e.normal)return e.property[e.normal[n]];if(n.length>4&&n.slice(0,4)==="data"&&x6.test(t)){if(t.charAt(4)==="-"){const i=t.slice(5).replace(Qm,k6);r="data"+i.charAt(0).toUpperCase()+i.slice(1)}else{const i=t.slice(4);if(!Qm.test(i)){let l=i.replace(w6,$6);l.charAt(0)!=="-"&&(l="-"+l),t="data"+l}}a=Bh}return new a(r,t)}function $6(e){return"-"+e.toLowerCase()}function k6(e){return e.charAt(1).toUpperCase()}const _6={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"},Ob=zb([Tb,Ab,Mb,Rb,y6],"html"),as=zb([Tb,Ab,Mb,Rb,v6],"svg");function Gm(e){const t=String(e||"").trim();return t?t.split(/[ \t\n\r\f]+/g):[]}function S6(e){return e.join(" ").trim()}var Bb={},Zm=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,D6=/\n/g,C6=/^\s*/,E6=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,z6=/^:\s*/,F6=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,A6=/^[;\s]*/,T6=/^\s+|\s+$/g,P6=`
`,Xm="/",Ym="*",Tr="",N6="comment",M6="declaration",R6=function(e,t){if(typeof e!="string")throw new TypeError("First argument must be a string");if(!e)return[];t=t||{};var n=1,r=1;function a(v){var x=v.match(D6);x&&(n+=x.length);var S=v.lastIndexOf(P6);r=~S?v.length-S:r+v.length}function i(){var v={line:n,column:r};return function(x){return x.position=new l(v),u(),x}}function l(v){this.start=v,this.end={line:n,column:r},this.source=t.source}l.prototype.content=e;function o(v){var x=new Error(t.source+":"+n+":"+r+": "+v);if(x.reason=v,x.filename=t.source,x.line=n,x.column=r,x.source=e,!t.silent)throw x}function s(v){var x=v.exec(e);if(x){var S=x[0];return a(S),e=e.slice(S.length),x}}function u(){s(C6)}function h(v){var x;for(v=v||[];x=m();)x!==!1&&v.push(x);return v}function m(){var v=i();if(!(Xm!=e.charAt(0)||Ym!=e.charAt(1))){for(var x=2;Tr!=e.charAt(x)&&(Ym!=e.charAt(x)||Xm!=e.charAt(x+1));)++x;if(x+=2,Tr===e.charAt(x-1))return o("End of comment missing");var S=e.slice(2,x-2);return r+=2,a(S),e=e.slice(x),r+=2,v({type:N6,comment:S})}}function f(){var v=i(),x=s(E6);if(x){if(m(),!s(z6))return o("property missing ':'");var S=s(F6),g=v({type:M6,property:Jm(x[0].replace(Zm,Tr)),value:S?Jm(S[0].replace(Zm,Tr)):Tr});return s(A6),g}}function p(){var v=[];h(v);for(var x;x=f();)x!==!1&&(v.push(x),h(v));return v}return u(),p()};function Jm(e){return e?e.replace(T6,Tr):Tr}var I6=$c&&$c.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Bb,"__esModule",{value:!0});var ed=Bb.default=B6,O6=I6(R6);function B6(e,t){var n=null;if(!e||typeof e!="string")return n;var r=(0,O6.default)(e),a=typeof t=="function";return r.forEach(function(i){if(i.type==="declaration"){var l=i.property,o=i.value;a?t(l,o,i):o&&(n=n||{},n[l]=o)}}),n}const L6=ed.default||ed,Lb=qb("end"),Lh=qb("start");function qb(e){return t;function t(n){const r=n&&n.position&&n.position[e]||{};if(typeof r.line=="number"&&r.line>0&&typeof r.column=="number"&&r.column>0)return{line:r.line,column:r.column,offset:typeof r.offset=="number"&&r.offset>-1?r.offset:void 0}}}function q6(e){const t=Lh(e),n=Lb(e);if(t&&n)return{start:t,end:n}}function $i(e){return!e||typeof e!="object"?"":"position"in e||"type"in e?td(e.position):"start"in e||"end"in e?td(e):"line"in e||"column"in e?y0(e):""}function y0(e){return nd(e&&e.line)+":"+nd(e&&e.column)}function td(e){return y0(e&&e.start)+"-"+y0(e&&e.end)}function nd(e){return e&&typeof e=="number"?e:1}class st extends Error{constructor(t,n,r){super(),typeof n=="string"&&(r=n,n=void 0);let a="",i={},l=!1;if(n&&("line"in n&&"column"in n?i={place:n}:"start"in n&&"end"in n?i={place:n}:"type"in n?i={ancestors:[n],place:n.position}:i={...n}),typeof t=="string"?a=t:!i.cause&&t&&(l=!0,a=t.message,i.cause=t),!i.ruleId&&!i.source&&typeof r=="string"){const s=r.indexOf(":");s===-1?i.ruleId=r:(i.source=r.slice(0,s),i.ruleId=r.slice(s+1))}if(!i.place&&i.ancestors&&i.ancestors){const s=i.ancestors[i.ancestors.length-1];s&&(i.place=s.position)}const o=i.place&&"start"in i.place?i.place.start:i.place;this.ancestors=i.ancestors||void 0,this.cause=i.cause||void 0,this.column=o?o.column:void 0,this.fatal=void 0,this.file,this.message=a,this.line=o?o.line:void 0,this.name=$i(i.place)||"1:1",this.place=i.place||void 0,this.reason=this.message,this.ruleId=i.ruleId||void 0,this.source=i.source||void 0,this.stack=l&&i.cause&&typeof i.cause.stack=="string"?i.cause.stack:"",this.actual,this.expected,this.note,this.url}}st.prototype.file="";st.prototype.name="";st.prototype.reason="";st.prototype.message="";st.prototype.stack="";st.prototype.column=void 0;st.prototype.line=void 0;st.prototype.ancestors=void 0;st.prototype.cause=void 0;st.prototype.fatal=void 0;st.prototype.place=void 0;st.prototype.ruleId=void 0;st.prototype.source=void 0;const qh={}.hasOwnProperty,j6=new Map,H6=/[A-Z]/g,U6=/-([a-z])/g,W6=new Set(["table","tbody","thead","tfoot","tr"]),V6=new Set(["td","th"]),jb="https://github.com/syntax-tree/hast-util-to-jsx-runtime";function K6(e,t){if(!t||t.Fragment===void 0)throw new TypeError("Expected `Fragment` in options");const n=t.filePath||void 0;let r;if(t.development){if(typeof t.jsxDEV!="function")throw new TypeError("Expected `jsxDEV` in options when `development: true`");r=t7(n,t.jsxDEV)}else{if(typeof t.jsx!="function")throw new TypeError("Expected `jsx` in production options");if(typeof t.jsxs!="function")throw new TypeError("Expected `jsxs` in production options");r=e7(n,t.jsx,t.jsxs)}const a={Fragment:t.Fragment,ancestors:[],components:t.components||{},create:r,elementAttributeNameCase:t.elementAttributeNameCase||"react",evaluater:t.createEvaluater?t.createEvaluater():void 0,filePath:n,ignoreInvalidStyle:t.ignoreInvalidStyle||!1,passKeys:t.passKeys!==!1,passNode:t.passNode||!1,schema:t.space==="svg"?as:Ob,stylePropertyNameCase:t.stylePropertyNameCase||"dom",tableCellAlignToStyle:t.tableCellAlignToStyle!==!1},i=Hb(a,e,void 0);return i&&typeof i!="string"?i:a.create(e,a.Fragment,{children:i||void 0},void 0)}function Hb(e,t,n){if(t.type==="element")return Q6(e,t,n);if(t.type==="mdxFlowExpression"||t.type==="mdxTextExpression")return G6(e,t);if(t.type==="mdxJsxFlowElement"||t.type==="mdxJsxTextElement")return X6(e,t,n);if(t.type==="mdxjsEsm")return Z6(e,t);if(t.type==="root")return Y6(e,t,n);if(t.type==="text")return J6(e,t)}function Q6(e,t,n){const r=e.schema;let a=r;t.tagName.toLowerCase()==="svg"&&r.space==="html"&&(a=as,e.schema=a),e.ancestors.push(t);const i=Wb(e,t.tagName,!1),l=n7(e,t);let o=Hh(e,t);return W6.has(t.tagName)&&(o=o.filter(function(s){return typeof s=="string"?!p6(s):!0})),Ub(e,l,i,t),jh(l,o),e.ancestors.pop(),e.schema=r,e.create(t,i,l,n)}function G6(e,t){if(t.data&&t.data.estree&&e.evaluater){const r=t.data.estree.body[0];return r.type,e.evaluater.evaluateExpression(r.expression)}Wi(e,t.position)}function Z6(e,t){if(t.data&&t.data.estree&&e.evaluater)return e.evaluater.evaluateProgram(t.data.estree);Wi(e,t.position)}function X6(e,t,n){const r=e.schema;let a=r;t.name==="svg"&&r.space==="html"&&(a=as,e.schema=a),e.ancestors.push(t);const i=t.name===null?e.Fragment:Wb(e,t.name,!0),l=r7(e,t),o=Hh(e,t);return Ub(e,l,i,t),jh(l,o),e.ancestors.pop(),e.schema=r,e.create(t,i,l,n)}function Y6(e,t,n){const r={};return jh(r,Hh(e,t)),e.create(t,e.Fragment,r,n)}function J6(e,t){return t.value}function Ub(e,t,n,r){typeof n!="string"&&n!==e.Fragment&&e.passNode&&(t.node=r)}function jh(e,t){if(t.length>0){const n=t.length>1?t:t[0];n&&(e.children=n)}}function e7(e,t,n){return r;function r(a,i,l,o){const u=Array.isArray(l.children)?n:t;return o?u(i,l,o):u(i,l)}}function t7(e,t){return n;function n(r,a,i,l){const o=Array.isArray(i.children),s=Lh(r);return t(a,i,l,o,{columnNumber:s?s.column-1:void 0,fileName:e,lineNumber:s?s.line:void 0},void 0)}}function n7(e,t){const n={};let r,a;for(a in t.properties)if(a!=="children"&&qh.call(t.properties,a)){const i=a7(e,a,t.properties[a]);if(i){const[l,o]=i;e.tableCellAlignToStyle&&l==="align"&&typeof o=="string"&&V6.has(t.tagName)?r=o:n[l]=o}}if(r){const i=n.style||(n.style={});i[e.stylePropertyNameCase==="css"?"text-align":"textAlign"]=r}return n}function r7(e,t){const n={};for(const r of t.attributes)if(r.type==="mdxJsxExpressionAttribute")if(r.data&&r.data.estree&&e.evaluater){const i=r.data.estree.body[0];i.type;const l=i.expression;l.type;const o=l.properties[0];o.type,Object.assign(n,e.evaluater.evaluateExpression(o.argument))}else Wi(e,t.position);else{const a=r.name;let i;if(r.value&&typeof r.value=="object")if(r.value.data&&r.value.data.estree&&e.evaluater){const o=r.value.data.estree.body[0];o.type,i=e.evaluater.evaluateExpression(o.expression)}else Wi(e,t.position);else i=r.value===null?!0:r.value;n[a]=i}return n}function Hh(e,t){const n=[];let r=-1;const a=e.passKeys?new Map:j6;for(;++r<t.children.length;){const i=t.children[r];let l;if(e.passKeys){const s=i.type==="element"?i.tagName:i.type==="mdxJsxFlowElement"||i.type==="mdxJsxTextElement"?i.name:void 0;if(s){const u=a.get(s)||0;l=s+"-"+u,a.set(s,u+1)}}const o=Hb(e,i,l);o!==void 0&&n.push(o)}return n}function a7(e,t,n){const r=Ib(e.schema,t);if(!(n==null||typeof n=="number"&&Number.isNaN(n))){if(Array.isArray(n)&&(n=r.commaSeparated?h6(n):S6(n)),r.property==="style"){let a=typeof n=="object"?n:i7(e,String(n));return e.stylePropertyNameCase==="css"&&(a=l7(a)),["style",a]}return[e.elementAttributeNameCase==="react"&&r.space?_6[r.property]||r.property:r.attribute,n]}}function i7(e,t){const n={};try{L6(t,r)}catch(a){if(!e.ignoreInvalidStyle){const i=a,l=new st("Cannot parse `style` attribute",{ancestors:e.ancestors,cause:i,ruleId:"style",source:"hast-util-to-jsx-runtime"});throw l.file=e.filePath||void 0,l.url=jb+"#cannot-parse-style-attribute",l}}return n;function r(a,i){let l=a;l.slice(0,2)!=="--"&&(l.slice(0,4)==="-ms-"&&(l="ms-"+l.slice(4)),l=l.replace(U6,s7)),n[l]=i}}function Wb(e,t,n){let r;if(!n)r={type:"Literal",value:t};else if(t.includes(".")){const a=t.split(".");let i=-1,l;for(;++i<a.length;){const o=Wm(a[i])?{type:"Identifier",name:a[i]}:{type:"Literal",value:a[i]};l=l?{type:"MemberExpression",object:l,property:o,computed:!!(i&&o.type==="Literal"),optional:!1}:o}r=l}else r=Wm(t)&&!/^[a-z]/.test(t)?{type:"Identifier",name:t}:{type:"Literal",value:t};if(r.type==="Literal"){const a=r.value;return qh.call(e.components,a)?e.components[a]:a}if(e.evaluater)return e.evaluater.evaluateExpression(r);Wi(e)}function Wi(e,t){const n=new st("Cannot handle MDX estrees without `createEvaluater`",{ancestors:e.ancestors,place:t,ruleId:"mdx-estree",source:"hast-util-to-jsx-runtime"});throw n.file=e.filePath||void 0,n.url=jb+"#cannot-handle-mdx-estrees-without-createevaluater",n}function l7(e){const t={};let n;for(n in e)qh.call(e,n)&&(t[o7(n)]=e[n]);return t}function o7(e){let t=e.replace(H6,u7);return t.slice(0,3)==="ms-"&&(t="-"+t),t}function s7(e,t){return t.toUpperCase()}function u7(e){return"-"+e.toLowerCase()}const Qs={action:["form"],cite:["blockquote","del","ins","q"],data:["object"],formAction:["button","input"],href:["a","area","base","link"],icon:["menuitem"],itemId:null,manifest:["html"],ping:["a","area"],poster:["video"],src:["audio","embed","iframe","img","input","script","source","track","video"]},h7={};function c7(e,t){const n=h7,r=typeof n.includeImageAlt=="boolean"?n.includeImageAlt:!0,a=typeof n.includeHtml=="boolean"?n.includeHtml:!0;return Vb(e,r,a)}function Vb(e,t,n){if(m7(e)){if("value"in e)return e.type==="html"&&!n?"":e.value;if(t&&"alt"in e&&e.alt)return e.alt;if("children"in e)return rd(e.children,t,n)}return Array.isArray(e)?rd(e,t,n):""}function rd(e,t,n){const r=[];let a=-1;for(;++a<e.length;)r[a]=Vb(e[a],t,n);return r.join("")}function m7(e){return!!(e&&typeof e=="object")}const ad=document.createElement("i");function Uh(e){const t="&"+e+";";ad.innerHTML=t;const n=ad.textContent;return n.charCodeAt(n.length-1)===59&&e!=="semi"||n===t?!1:n}function vn(e,t,n,r){const a=e.length;let i=0,l;if(t<0?t=-t>a?0:a+t:t=t>a?a:t,n=n>0?n:0,r.length<1e4)l=Array.from(r),l.unshift(t,n),e.splice(...l);else for(n&&e.splice(t,n);i<r.length;)l=r.slice(i,i+1e4),l.unshift(t,0),e.splice(...l),i+=1e4,t+=1e4}function Bt(e,t){return e.length>0?(vn(e,e.length,0,t),e):t}const id={}.hasOwnProperty;function d7(e){const t={};let n=-1;for(;++n<e.length;)f7(t,e[n]);return t}function f7(e,t){let n;for(n in t){const a=(id.call(e,n)?e[n]:void 0)||(e[n]={}),i=t[n];let l;if(i)for(l in i){id.call(a,l)||(a[l]=[]);const o=i[l];p7(a[l],Array.isArray(o)?o:o?[o]:[])}}}function p7(e,t){let n=-1;const r=[];for(;++n<t.length;)(t[n].add==="after"?e:r).push(t[n]);vn(e,0,0,r)}function Kb(e,t){const n=Number.parseInt(e,t);return n<9||n===11||n>13&&n<32||n>126&&n<160||n>55295&&n<57344||n>64975&&n<65008||(n&65535)===65535||(n&65535)===65534||n>1114111?"�":String.fromCodePoint(n)}function Sa(e){return e.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}const pn=_r(/[A-Za-z]/),At=_r(/[\dA-Za-z]/),b7=_r(/[#-'*+\--9=?A-Z^-~]/);function v0(e){return e!==null&&(e<32||e===127)}const x0=_r(/\d/),g7=_r(/[\dA-Fa-f]/),y7=_r(/[!-/:-@[-`{-~]/);function ee(e){return e!==null&&e<-2}function _t(e){return e!==null&&(e<0||e===32)}function xe(e){return e===-2||e===-1||e===32}const v7=_r(new RegExp("\\p{P}|\\p{S}","u")),x7=_r(/\s/);function _r(e){return t;function t(n){return n!==null&&n>-1&&e.test(String.fromCharCode(n))}}function qa(e){const t=[];let n=-1,r=0,a=0;for(;++n<e.length;){const i=e.charCodeAt(n);let l="";if(i===37&&At(e.charCodeAt(n+1))&&At(e.charCodeAt(n+2)))a=2;else if(i<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(i))||(l=String.fromCharCode(i));else if(i>55295&&i<57344){const o=e.charCodeAt(n+1);i<56320&&o>56319&&o<57344?(l=String.fromCharCode(i,o),a=1):l="�"}else l=String.fromCharCode(i);l&&(t.push(e.slice(r,n),encodeURIComponent(l)),r=n+a+1,l=""),a&&(n+=a,a=0)}return t.join("")+e.slice(r)}function we(e,t,n,r){const a=r?r-1:Number.POSITIVE_INFINITY;let i=0;return l;function l(s){return xe(s)?(e.enter(n),o(s)):t(s)}function o(s){return xe(s)&&i++<a?(e.consume(s),o):(e.exit(n),t(s))}}const w7={tokenize:$7};function $7(e){const t=e.attempt(this.parser.constructs.contentInitial,r,a);let n;return t;function r(o){if(o===null){e.consume(o);return}return e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),we(e,t,"linePrefix")}function a(o){return e.enter("paragraph"),i(o)}function i(o){const s=e.enter("chunkText",{contentType:"text",previous:n});return n&&(n.next=s),n=s,l(o)}function l(o){if(o===null){e.exit("chunkText"),e.exit("paragraph"),e.consume(o);return}return ee(o)?(e.consume(o),e.exit("chunkText"),i):(e.consume(o),l)}}const k7={tokenize:_7},ld={tokenize:S7};function _7(e){const t=this,n=[];let r=0,a,i,l;return o;function o($){if(r<n.length){const F=n[r];return t.containerState=F[1],e.attempt(F[0].continuation,s,u)($)}return u($)}function s($){if(r++,t.containerState._closeFlow){t.containerState._closeFlow=void 0,a&&y();const F=t.events.length;let P=F,E;for(;P--;)if(t.events[P][0]==="exit"&&t.events[P][1].type==="chunkFlow"){E=t.events[P][1].end;break}g(r);let M=F;for(;M<t.events.length;)t.events[M][1].end={...E},M++;return vn(t.events,P+1,0,t.events.slice(F)),t.events.length=M,u($)}return o($)}function u($){if(r===n.length){if(!a)return f($);if(a.currentConstruct&&a.currentConstruct.concrete)return v($);t.interrupt=!!(a.currentConstruct&&!a._gfmTableDynamicInterruptHack)}return t.containerState={},e.check(ld,h,m)($)}function h($){return a&&y(),g(r),f($)}function m($){return t.parser.lazy[t.now().line]=r!==n.length,l=t.now().offset,v($)}function f($){return t.containerState={},e.attempt(ld,p,v)($)}function p($){return r++,n.push([t.currentConstruct,t.containerState]),f($)}function v($){if($===null){a&&y(),g(0),e.consume($);return}return a=a||t.parser.flow(t.now()),e.enter("chunkFlow",{_tokenizer:a,contentType:"flow",previous:i}),x($)}function x($){if($===null){S(e.exit("chunkFlow"),!0),g(0),e.consume($);return}return ee($)?(e.consume($),S(e.exit("chunkFlow")),r=0,t.interrupt=void 0,o):(e.consume($),x)}function S($,F){const P=t.sliceStream($);if(F&&P.push(null),$.previous=i,i&&(i.next=$),i=$,a.defineSkip($.start),a.write(P),t.parser.lazy[$.start.line]){let E=a.events.length;for(;E--;)if(a.events[E][1].start.offset<l&&(!a.events[E][1].end||a.events[E][1].end.offset>l))return;const M=t.events.length;let I=M,O,Q;for(;I--;)if(t.events[I][0]==="exit"&&t.events[I][1].type==="chunkFlow"){if(O){Q=t.events[I][1].end;break}O=!0}for(g(r),E=M;E<t.events.length;)t.events[E][1].end={...Q},E++;vn(t.events,I+1,0,t.events.slice(M)),t.events.length=E}}function g($){let F=n.length;for(;F-- >$;){const P=n[F];t.containerState=P[1],P[0].exit.call(t,e)}n.length=$}function y(){a.write([null]),i=void 0,a=void 0,t.containerState._closeFlow=void 0}}function S7(e,t,n){return we(e,e.attempt(this.parser.constructs.document,t,n),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function od(e){if(e===null||_t(e)||x7(e))return 1;if(v7(e))return 2}function Wh(e,t,n){const r=[];let a=-1;for(;++a<e.length;){const i=e[a].resolveAll;i&&!r.includes(i)&&(t=i(t,n),r.push(i))}return t}const w0={name:"attention",resolveAll:D7,tokenize:C7};function D7(e,t){let n=-1,r,a,i,l,o,s,u,h;for(;++n<e.length;)if(e[n][0]==="enter"&&e[n][1].type==="attentionSequence"&&e[n][1]._close){for(r=n;r--;)if(e[r][0]==="exit"&&e[r][1].type==="attentionSequence"&&e[r][1]._open&&t.sliceSerialize(e[r][1]).charCodeAt(0)===t.sliceSerialize(e[n][1]).charCodeAt(0)){if((e[r][1]._close||e[n][1]._open)&&(e[n][1].end.offset-e[n][1].start.offset)%3&&!((e[r][1].end.offset-e[r][1].start.offset+e[n][1].end.offset-e[n][1].start.offset)%3))continue;s=e[r][1].end.offset-e[r][1].start.offset>1&&e[n][1].end.offset-e[n][1].start.offset>1?2:1;const m={...e[r][1].end},f={...e[n][1].start};sd(m,-s),sd(f,s),l={type:s>1?"strongSequence":"emphasisSequence",start:m,end:{...e[r][1].end}},o={type:s>1?"strongSequence":"emphasisSequence",start:{...e[n][1].start},end:f},i={type:s>1?"strongText":"emphasisText",start:{...e[r][1].end},end:{...e[n][1].start}},a={type:s>1?"strong":"emphasis",start:{...l.start},end:{...o.end}},e[r][1].end={...l.start},e[n][1].start={...o.end},u=[],e[r][1].end.offset-e[r][1].start.offset&&(u=Bt(u,[["enter",e[r][1],t],["exit",e[r][1],t]])),u=Bt(u,[["enter",a,t],["enter",l,t],["exit",l,t],["enter",i,t]]),u=Bt(u,Wh(t.parser.constructs.insideSpan.null,e.slice(r+1,n),t)),u=Bt(u,[["exit",i,t],["enter",o,t],["exit",o,t],["exit",a,t]]),e[n][1].end.offset-e[n][1].start.offset?(h=2,u=Bt(u,[["enter",e[n][1],t],["exit",e[n][1],t]])):h=0,vn(e,r-1,n-r+3,u),n=r+u.length-h-2;break}}for(n=-1;++n<e.length;)e[n][1].type==="attentionSequence"&&(e[n][1].type="data");return e}function C7(e,t){const n=this.parser.constructs.attentionMarkers.null,r=this.previous,a=od(r);let i;return l;function l(s){return i=s,e.enter("attentionSequence"),o(s)}function o(s){if(s===i)return e.consume(s),o;const u=e.exit("attentionSequence"),h=od(s),m=!h||h===2&&a||n.includes(s),f=!a||a===2&&h||n.includes(r);return u._open=!!(i===42?m:m&&(a||!f)),u._close=!!(i===42?f:f&&(h||!m)),t(s)}}function sd(e,t){e.column+=t,e.offset+=t,e._bufferIndex+=t}const E7={name:"autolink",tokenize:z7};function z7(e,t,n){let r=0;return a;function a(p){return e.enter("autolink"),e.enter("autolinkMarker"),e.consume(p),e.exit("autolinkMarker"),e.enter("autolinkProtocol"),i}function i(p){return pn(p)?(e.consume(p),l):p===64?n(p):u(p)}function l(p){return p===43||p===45||p===46||At(p)?(r=1,o(p)):u(p)}function o(p){return p===58?(e.consume(p),r=0,s):(p===43||p===45||p===46||At(p))&&r++<32?(e.consume(p),o):(r=0,u(p))}function s(p){return p===62?(e.exit("autolinkProtocol"),e.enter("autolinkMarker"),e.consume(p),e.exit("autolinkMarker"),e.exit("autolink"),t):p===null||p===32||p===60||v0(p)?n(p):(e.consume(p),s)}function u(p){return p===64?(e.consume(p),h):b7(p)?(e.consume(p),u):n(p)}function h(p){return At(p)?m(p):n(p)}function m(p){return p===46?(e.consume(p),r=0,h):p===62?(e.exit("autolinkProtocol").type="autolinkEmail",e.enter("autolinkMarker"),e.consume(p),e.exit("autolinkMarker"),e.exit("autolink"),t):f(p)}function f(p){if((p===45||At(p))&&r++<63){const v=p===45?f:m;return e.consume(p),v}return n(p)}}const is={partial:!0,tokenize:F7};function F7(e,t,n){return r;function r(i){return xe(i)?we(e,a,"linePrefix")(i):a(i)}function a(i){return i===null||ee(i)?t(i):n(i)}}const Qb={continuation:{tokenize:T7},exit:P7,name:"blockQuote",tokenize:A7};function A7(e,t,n){const r=this;return a;function a(l){if(l===62){const o=r.containerState;return o.open||(e.enter("blockQuote",{_container:!0}),o.open=!0),e.enter("blockQuotePrefix"),e.enter("blockQuoteMarker"),e.consume(l),e.exit("blockQuoteMarker"),i}return n(l)}function i(l){return xe(l)?(e.enter("blockQuotePrefixWhitespace"),e.consume(l),e.exit("blockQuotePrefixWhitespace"),e.exit("blockQuotePrefix"),t):(e.exit("blockQuotePrefix"),t(l))}}function T7(e,t,n){const r=this;return a;function a(l){return xe(l)?we(e,i,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(l):i(l)}function i(l){return e.attempt(Qb,t,n)(l)}}function P7(e){e.exit("blockQuote")}const Gb={name:"characterEscape",tokenize:N7};function N7(e,t,n){return r;function r(i){return e.enter("characterEscape"),e.enter("escapeMarker"),e.consume(i),e.exit("escapeMarker"),a}function a(i){return y7(i)?(e.enter("characterEscapeValue"),e.consume(i),e.exit("characterEscapeValue"),e.exit("characterEscape"),t):n(i)}}const Zb={name:"characterReference",tokenize:M7};function M7(e,t,n){const r=this;let a=0,i,l;return o;function o(m){return e.enter("characterReference"),e.enter("characterReferenceMarker"),e.consume(m),e.exit("characterReferenceMarker"),s}function s(m){return m===35?(e.enter("characterReferenceMarkerNumeric"),e.consume(m),e.exit("characterReferenceMarkerNumeric"),u):(e.enter("characterReferenceValue"),i=31,l=At,h(m))}function u(m){return m===88||m===120?(e.enter("characterReferenceMarkerHexadecimal"),e.consume(m),e.exit("characterReferenceMarkerHexadecimal"),e.enter("characterReferenceValue"),i=6,l=g7,h):(e.enter("characterReferenceValue"),i=7,l=x0,h(m))}function h(m){if(m===59&&a){const f=e.exit("characterReferenceValue");return l===At&&!Uh(r.sliceSerialize(f))?n(m):(e.enter("characterReferenceMarker"),e.consume(m),e.exit("characterReferenceMarker"),e.exit("characterReference"),t)}return l(m)&&a++<i?(e.consume(m),h):n(m)}}const ud={partial:!0,tokenize:I7},hd={concrete:!0,name:"codeFenced",tokenize:R7};function R7(e,t,n){const r=this,a={partial:!0,tokenize:P};let i=0,l=0,o;return s;function s(E){return u(E)}function u(E){const M=r.events[r.events.length-1];return i=M&&M[1].type==="linePrefix"?M[2].sliceSerialize(M[1],!0).length:0,o=E,e.enter("codeFenced"),e.enter("codeFencedFence"),e.enter("codeFencedFenceSequence"),h(E)}function h(E){return E===o?(l++,e.consume(E),h):l<3?n(E):(e.exit("codeFencedFenceSequence"),xe(E)?we(e,m,"whitespace")(E):m(E))}function m(E){return E===null||ee(E)?(e.exit("codeFencedFence"),r.interrupt?t(E):e.check(ud,x,F)(E)):(e.enter("codeFencedFenceInfo"),e.enter("chunkString",{contentType:"string"}),f(E))}function f(E){return E===null||ee(E)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),m(E)):xe(E)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),we(e,p,"whitespace")(E)):E===96&&E===o?n(E):(e.consume(E),f)}function p(E){return E===null||ee(E)?m(E):(e.enter("codeFencedFenceMeta"),e.enter("chunkString",{contentType:"string"}),v(E))}function v(E){return E===null||ee(E)?(e.exit("chunkString"),e.exit("codeFencedFenceMeta"),m(E)):E===96&&E===o?n(E):(e.consume(E),v)}function x(E){return e.attempt(a,F,S)(E)}function S(E){return e.enter("lineEnding"),e.consume(E),e.exit("lineEnding"),g}function g(E){return i>0&&xe(E)?we(e,y,"linePrefix",i+1)(E):y(E)}function y(E){return E===null||ee(E)?e.check(ud,x,F)(E):(e.enter("codeFlowValue"),$(E))}function $(E){return E===null||ee(E)?(e.exit("codeFlowValue"),y(E)):(e.consume(E),$)}function F(E){return e.exit("codeFenced"),t(E)}function P(E,M,I){let O=0;return Q;function Q(ie){return E.enter("lineEnding"),E.consume(ie),E.exit("lineEnding"),V}function V(ie){return E.enter("codeFencedFence"),xe(ie)?we(E,L,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(ie):L(ie)}function L(ie){return ie===o?(E.enter("codeFencedFenceSequence"),he(ie)):I(ie)}function he(ie){return ie===o?(O++,E.consume(ie),he):O>=l?(E.exit("codeFencedFenceSequence"),xe(ie)?we(E,oe,"whitespace")(ie):oe(ie)):I(ie)}function oe(ie){return ie===null||ee(ie)?(E.exit("codeFencedFence"),M(ie)):I(ie)}}}function I7(e,t,n){const r=this;return a;function a(l){return l===null?n(l):(e.enter("lineEnding"),e.consume(l),e.exit("lineEnding"),i)}function i(l){return r.parser.lazy[r.now().line]?n(l):t(l)}}const Gs={name:"codeIndented",tokenize:B7},O7={partial:!0,tokenize:L7};function B7(e,t,n){const r=this;return a;function a(u){return e.enter("codeIndented"),we(e,i,"linePrefix",5)(u)}function i(u){const h=r.events[r.events.length-1];return h&&h[1].type==="linePrefix"&&h[2].sliceSerialize(h[1],!0).length>=4?l(u):n(u)}function l(u){return u===null?s(u):ee(u)?e.attempt(O7,l,s)(u):(e.enter("codeFlowValue"),o(u))}function o(u){return u===null||ee(u)?(e.exit("codeFlowValue"),l(u)):(e.consume(u),o)}function s(u){return e.exit("codeIndented"),t(u)}}function L7(e,t,n){const r=this;return a;function a(l){return r.parser.lazy[r.now().line]?n(l):ee(l)?(e.enter("lineEnding"),e.consume(l),e.exit("lineEnding"),a):we(e,i,"linePrefix",5)(l)}function i(l){const o=r.events[r.events.length-1];return o&&o[1].type==="linePrefix"&&o[2].sliceSerialize(o[1],!0).length>=4?t(l):ee(l)?a(l):n(l)}}const q7={name:"codeText",previous:H7,resolve:j7,tokenize:U7};function j7(e){let t=e.length-4,n=3,r,a;if((e[n][1].type==="lineEnding"||e[n][1].type==="space")&&(e[t][1].type==="lineEnding"||e[t][1].type==="space")){for(r=n;++r<t;)if(e[r][1].type==="codeTextData"){e[n][1].type="codeTextPadding",e[t][1].type="codeTextPadding",n+=2,t-=2;break}}for(r=n-1,t++;++r<=t;)a===void 0?r!==t&&e[r][1].type!=="lineEnding"&&(a=r):(r===t||e[r][1].type==="lineEnding")&&(e[a][1].type="codeTextData",r!==a+2&&(e[a][1].end=e[r-1][1].end,e.splice(a+2,r-a-2),t-=r-a-2,r=a+2),a=void 0);return e}function H7(e){return e!==96||this.events[this.events.length-1][1].type==="characterEscape"}function U7(e,t,n){let r=0,a,i;return l;function l(m){return e.enter("codeText"),e.enter("codeTextSequence"),o(m)}function o(m){return m===96?(e.consume(m),r++,o):(e.exit("codeTextSequence"),s(m))}function s(m){return m===null?n(m):m===32?(e.enter("space"),e.consume(m),e.exit("space"),s):m===96?(i=e.enter("codeTextSequence"),a=0,h(m)):ee(m)?(e.enter("lineEnding"),e.consume(m),e.exit("lineEnding"),s):(e.enter("codeTextData"),u(m))}function u(m){return m===null||m===32||m===96||ee(m)?(e.exit("codeTextData"),s(m)):(e.consume(m),u)}function h(m){return m===96?(e.consume(m),a++,h):a===r?(e.exit("codeTextSequence"),e.exit("codeText"),t(m)):(i.type="codeTextData",u(m))}}class W7{constructor(t){this.left=t?[...t]:[],this.right=[]}get(t){if(t<0||t>=this.left.length+this.right.length)throw new RangeError("Cannot access index `"+t+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return t<this.left.length?this.left[t]:this.right[this.right.length-t+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(t,n){const r=n??Number.POSITIVE_INFINITY;return r<this.left.length?this.left.slice(t,r):t>this.left.length?this.right.slice(this.right.length-r+this.left.length,this.right.length-t+this.left.length).reverse():this.left.slice(t).concat(this.right.slice(this.right.length-r+this.left.length).reverse())}splice(t,n,r){const a=n||0;this.setCursor(Math.trunc(t));const i=this.right.splice(this.right.length-a,Number.POSITIVE_INFINITY);return r&&li(this.left,r),i.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(t){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(t)}pushMany(t){this.setCursor(Number.POSITIVE_INFINITY),li(this.left,t)}unshift(t){this.setCursor(0),this.right.push(t)}unshiftMany(t){this.setCursor(0),li(this.right,t.reverse())}setCursor(t){if(!(t===this.left.length||t>this.left.length&&this.right.length===0||t<0&&this.left.length===0))if(t<this.left.length){const n=this.left.splice(t,Number.POSITIVE_INFINITY);li(this.right,n.reverse())}else{const n=this.right.splice(this.left.length+this.right.length-t,Number.POSITIVE_INFINITY);li(this.left,n.reverse())}}}function li(e,t){let n=0;if(t.length<1e4)e.push(...t);else for(;n<t.length;)e.push(...t.slice(n,n+1e4)),n+=1e4}function Xb(e){const t={};let n=-1,r,a,i,l,o,s,u;const h=new W7(e);for(;++n<h.length;){for(;n in t;)n=t[n];if(r=h.get(n),n&&r[1].type==="chunkFlow"&&h.get(n-1)[1].type==="listItemPrefix"&&(s=r[1]._tokenizer.events,i=0,i<s.length&&s[i][1].type==="lineEndingBlank"&&(i+=2),i<s.length&&s[i][1].type==="content"))for(;++i<s.length&&s[i][1].type!=="content";)s[i][1].type==="chunkText"&&(s[i][1]._isInFirstContentOfListItem=!0,i++);if(r[0]==="enter")r[1].contentType&&(Object.assign(t,V7(h,n)),n=t[n],u=!0);else if(r[1]._container){for(i=n,a=void 0;i--&&(l=h.get(i),l[1].type==="lineEnding"||l[1].type==="lineEndingBlank");)l[0]==="enter"&&(a&&(h.get(a)[1].type="lineEndingBlank"),l[1].type="lineEnding",a=i);a&&(r[1].end={...h.get(a)[1].start},o=h.slice(a,n),o.unshift(r),h.splice(a,n-a+1,o))}}return vn(e,0,Number.POSITIVE_INFINITY,h.slice(0)),!u}function V7(e,t){const n=e.get(t)[1],r=e.get(t)[2];let a=t-1;const i=[],l=n._tokenizer||r.parser[n.contentType](n.start),o=l.events,s=[],u={};let h,m,f=-1,p=n,v=0,x=0;const S=[x];for(;p;){for(;e.get(++a)[1]!==p;);i.push(a),p._tokenizer||(h=r.sliceStream(p),p.next||h.push(null),m&&l.defineSkip(p.start),p._isInFirstContentOfListItem&&(l._gfmTasklistFirstContentOfListItem=!0),l.write(h),p._isInFirstContentOfListItem&&(l._gfmTasklistFirstContentOfListItem=void 0)),m=p,p=p.next}for(p=n;++f<o.length;)o[f][0]==="exit"&&o[f-1][0]==="enter"&&o[f][1].type===o[f-1][1].type&&o[f][1].start.line!==o[f][1].end.line&&(x=f+1,S.push(x),p._tokenizer=void 0,p.previous=void 0,p=p.next);for(l.events=[],p?(p._tokenizer=void 0,p.previous=void 0):S.pop(),f=S.length;f--;){const g=o.slice(S[f],S[f+1]),y=i.pop();s.push([y,y+g.length-1]),e.splice(y,2,g)}for(s.reverse(),f=-1;++f<s.length;)u[v+s[f][0]]=v+s[f][1],v+=s[f][1]-s[f][0]-1;return u}const K7={resolve:G7,tokenize:Z7},Q7={partial:!0,tokenize:X7};function G7(e){return Xb(e),e}function Z7(e,t){let n;return r;function r(o){return e.enter("content"),n=e.enter("chunkContent",{contentType:"content"}),a(o)}function a(o){return o===null?i(o):ee(o)?e.check(Q7,l,i)(o):(e.consume(o),a)}function i(o){return e.exit("chunkContent"),e.exit("content"),t(o)}function l(o){return e.consume(o),e.exit("chunkContent"),n.next=e.enter("chunkContent",{contentType:"content",previous:n}),n=n.next,a}}function X7(e,t,n){const r=this;return a;function a(l){return e.exit("chunkContent"),e.enter("lineEnding"),e.consume(l),e.exit("lineEnding"),we(e,i,"linePrefix")}function i(l){if(l===null||ee(l))return n(l);const o=r.events[r.events.length-1];return!r.parser.constructs.disable.null.includes("codeIndented")&&o&&o[1].type==="linePrefix"&&o[2].sliceSerialize(o[1],!0).length>=4?t(l):e.interrupt(r.parser.constructs.flow,n,t)(l)}}function Yb(e,t,n,r,a,i,l,o,s){const u=s||Number.POSITIVE_INFINITY;let h=0;return m;function m(g){return g===60?(e.enter(r),e.enter(a),e.enter(i),e.consume(g),e.exit(i),f):g===null||g===32||g===41||v0(g)?n(g):(e.enter(r),e.enter(l),e.enter(o),e.enter("chunkString",{contentType:"string"}),x(g))}function f(g){return g===62?(e.enter(i),e.consume(g),e.exit(i),e.exit(a),e.exit(r),t):(e.enter(o),e.enter("chunkString",{contentType:"string"}),p(g))}function p(g){return g===62?(e.exit("chunkString"),e.exit(o),f(g)):g===null||g===60||ee(g)?n(g):(e.consume(g),g===92?v:p)}function v(g){return g===60||g===62||g===92?(e.consume(g),p):p(g)}function x(g){return!h&&(g===null||g===41||_t(g))?(e.exit("chunkString"),e.exit(o),e.exit(l),e.exit(r),t(g)):h<u&&g===40?(e.consume(g),h++,x):g===41?(e.consume(g),h--,x):g===null||g===32||g===40||v0(g)?n(g):(e.consume(g),g===92?S:x)}function S(g){return g===40||g===41||g===92?(e.consume(g),x):x(g)}}function Jb(e,t,n,r,a,i){const l=this;let o=0,s;return u;function u(p){return e.enter(r),e.enter(a),e.consume(p),e.exit(a),e.enter(i),h}function h(p){return o>999||p===null||p===91||p===93&&!s||p===94&&!o&&"_hiddenFootnoteSupport"in l.parser.constructs?n(p):p===93?(e.exit(i),e.enter(a),e.consume(p),e.exit(a),e.exit(r),t):ee(p)?(e.enter("lineEnding"),e.consume(p),e.exit("lineEnding"),h):(e.enter("chunkString",{contentType:"string"}),m(p))}function m(p){return p===null||p===91||p===93||ee(p)||o++>999?(e.exit("chunkString"),h(p)):(e.consume(p),s||(s=!xe(p)),p===92?f:m)}function f(p){return p===91||p===92||p===93?(e.consume(p),o++,m):m(p)}}function eg(e,t,n,r,a,i){let l;return o;function o(f){return f===34||f===39||f===40?(e.enter(r),e.enter(a),e.consume(f),e.exit(a),l=f===40?41:f,s):n(f)}function s(f){return f===l?(e.enter(a),e.consume(f),e.exit(a),e.exit(r),t):(e.enter(i),u(f))}function u(f){return f===l?(e.exit(i),s(l)):f===null?n(f):ee(f)?(e.enter("lineEnding"),e.consume(f),e.exit("lineEnding"),we(e,u,"linePrefix")):(e.enter("chunkString",{contentType:"string"}),h(f))}function h(f){return f===l||f===null||ee(f)?(e.exit("chunkString"),u(f)):(e.consume(f),f===92?m:h)}function m(f){return f===l||f===92?(e.consume(f),h):h(f)}}function ki(e,t){let n;return r;function r(a){return ee(a)?(e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),n=!0,r):xe(a)?we(e,r,n?"linePrefix":"lineSuffix")(a):t(a)}}const Y7={name:"definition",tokenize:e8},J7={partial:!0,tokenize:t8};function e8(e,t,n){const r=this;let a;return i;function i(p){return e.enter("definition"),l(p)}function l(p){return Jb.call(r,e,o,n,"definitionLabel","definitionLabelMarker","definitionLabelString")(p)}function o(p){return a=Sa(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)),p===58?(e.enter("definitionMarker"),e.consume(p),e.exit("definitionMarker"),s):n(p)}function s(p){return _t(p)?ki(e,u)(p):u(p)}function u(p){return Yb(e,h,n,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(p)}function h(p){return e.attempt(J7,m,m)(p)}function m(p){return xe(p)?we(e,f,"whitespace")(p):f(p)}function f(p){return p===null||ee(p)?(e.exit("definition"),r.parser.defined.push(a),t(p)):n(p)}}function t8(e,t,n){return r;function r(o){return _t(o)?ki(e,a)(o):n(o)}function a(o){return eg(e,i,n,"definitionTitle","definitionTitleMarker","definitionTitleString")(o)}function i(o){return xe(o)?we(e,l,"whitespace")(o):l(o)}function l(o){return o===null||ee(o)?t(o):n(o)}}const n8={name:"hardBreakEscape",tokenize:r8};function r8(e,t,n){return r;function r(i){return e.enter("hardBreakEscape"),e.consume(i),a}function a(i){return ee(i)?(e.exit("hardBreakEscape"),t(i)):n(i)}}const a8={name:"headingAtx",resolve:i8,tokenize:l8};function i8(e,t){let n=e.length-2,r=3,a,i;return e[r][1].type==="whitespace"&&(r+=2),n-2>r&&e[n][1].type==="whitespace"&&(n-=2),e[n][1].type==="atxHeadingSequence"&&(r===n-1||n-4>r&&e[n-2][1].type==="whitespace")&&(n-=r+1===n?2:4),n>r&&(a={type:"atxHeadingText",start:e[r][1].start,end:e[n][1].end},i={type:"chunkText",start:e[r][1].start,end:e[n][1].end,contentType:"text"},vn(e,r,n-r+1,[["enter",a,t],["enter",i,t],["exit",i,t],["exit",a,t]])),e}function l8(e,t,n){let r=0;return a;function a(h){return e.enter("atxHeading"),i(h)}function i(h){return e.enter("atxHeadingSequence"),l(h)}function l(h){return h===35&&r++<6?(e.consume(h),l):h===null||_t(h)?(e.exit("atxHeadingSequence"),o(h)):n(h)}function o(h){return h===35?(e.enter("atxHeadingSequence"),s(h)):h===null||ee(h)?(e.exit("atxHeading"),t(h)):xe(h)?we(e,o,"whitespace")(h):(e.enter("atxHeadingText"),u(h))}function s(h){return h===35?(e.consume(h),s):(e.exit("atxHeadingSequence"),o(h))}function u(h){return h===null||h===35||_t(h)?(e.exit("atxHeadingText"),o(h)):(e.consume(h),u)}}const o8=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],cd=["pre","script","style","textarea"],s8={concrete:!0,name:"htmlFlow",resolveTo:c8,tokenize:m8},u8={partial:!0,tokenize:f8},h8={partial:!0,tokenize:d8};function c8(e){let t=e.length;for(;t--&&!(e[t][0]==="enter"&&e[t][1].type==="htmlFlow"););return t>1&&e[t-2][1].type==="linePrefix"&&(e[t][1].start=e[t-2][1].start,e[t+1][1].start=e[t-2][1].start,e.splice(t-2,2)),e}function m8(e,t,n){const r=this;let a,i,l,o,s;return u;function u(C){return h(C)}function h(C){return e.enter("htmlFlow"),e.enter("htmlFlowData"),e.consume(C),m}function m(C){return C===33?(e.consume(C),f):C===47?(e.consume(C),i=!0,x):C===63?(e.consume(C),a=3,r.interrupt?t:k):pn(C)?(e.consume(C),l=String.fromCharCode(C),S):n(C)}function f(C){return C===45?(e.consume(C),a=2,p):C===91?(e.consume(C),a=5,o=0,v):pn(C)?(e.consume(C),a=4,r.interrupt?t:k):n(C)}function p(C){return C===45?(e.consume(C),r.interrupt?t:k):n(C)}function v(C){const Ne="CDATA[";return C===Ne.charCodeAt(o++)?(e.consume(C),o===Ne.length?r.interrupt?t:L:v):n(C)}function x(C){return pn(C)?(e.consume(C),l=String.fromCharCode(C),S):n(C)}function S(C){if(C===null||C===47||C===62||_t(C)){const Ne=C===47,Xe=l.toLowerCase();return!Ne&&!i&&cd.includes(Xe)?(a=1,r.interrupt?t(C):L(C)):o8.includes(l.toLowerCase())?(a=6,Ne?(e.consume(C),g):r.interrupt?t(C):L(C)):(a=7,r.interrupt&&!r.parser.lazy[r.now().line]?n(C):i?y(C):$(C))}return C===45||At(C)?(e.consume(C),l+=String.fromCharCode(C),S):n(C)}function g(C){return C===62?(e.consume(C),r.interrupt?t:L):n(C)}function y(C){return xe(C)?(e.consume(C),y):Q(C)}function $(C){return C===47?(e.consume(C),Q):C===58||C===95||pn(C)?(e.consume(C),F):xe(C)?(e.consume(C),$):Q(C)}function F(C){return C===45||C===46||C===58||C===95||At(C)?(e.consume(C),F):P(C)}function P(C){return C===61?(e.consume(C),E):xe(C)?(e.consume(C),P):$(C)}function E(C){return C===null||C===60||C===61||C===62||C===96?n(C):C===34||C===39?(e.consume(C),s=C,M):xe(C)?(e.consume(C),E):I(C)}function M(C){return C===s?(e.consume(C),s=null,O):C===null||ee(C)?n(C):(e.consume(C),M)}function I(C){return C===null||C===34||C===39||C===47||C===60||C===61||C===62||C===96||_t(C)?P(C):(e.consume(C),I)}function O(C){return C===47||C===62||xe(C)?$(C):n(C)}function Q(C){return C===62?(e.consume(C),V):n(C)}function V(C){return C===null||ee(C)?L(C):xe(C)?(e.consume(C),V):n(C)}function L(C){return C===45&&a===2?(e.consume(C),be):C===60&&a===1?(e.consume(C),ve):C===62&&a===4?(e.consume(C),ne):C===63&&a===3?(e.consume(C),k):C===93&&a===5?(e.consume(C),J):ee(C)&&(a===6||a===7)?(e.exit("htmlFlowData"),e.check(u8,ce,he)(C)):C===null||ee(C)?(e.exit("htmlFlowData"),he(C)):(e.consume(C),L)}function he(C){return e.check(h8,oe,ce)(C)}function oe(C){return e.enter("lineEnding"),e.consume(C),e.exit("lineEnding"),ie}function ie(C){return C===null||ee(C)?he(C):(e.enter("htmlFlowData"),L(C))}function be(C){return C===45?(e.consume(C),k):L(C)}function ve(C){return C===47?(e.consume(C),l="",W):L(C)}function W(C){if(C===62){const Ne=l.toLowerCase();return cd.includes(Ne)?(e.consume(C),ne):L(C)}return pn(C)&&l.length<8?(e.consume(C),l+=String.fromCharCode(C),W):L(C)}function J(C){return C===93?(e.consume(C),k):L(C)}function k(C){return C===62?(e.consume(C),ne):C===45&&a===2?(e.consume(C),k):L(C)}function ne(C){return C===null||ee(C)?(e.exit("htmlFlowData"),ce(C)):(e.consume(C),ne)}function ce(C){return e.exit("htmlFlow"),t(C)}}function d8(e,t,n){const r=this;return a;function a(l){return ee(l)?(e.enter("lineEnding"),e.consume(l),e.exit("lineEnding"),i):n(l)}function i(l){return r.parser.lazy[r.now().line]?n(l):t(l)}}function f8(e,t,n){return r;function r(a){return e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),e.attempt(is,t,n)}}const p8={name:"htmlText",tokenize:b8};function b8(e,t,n){const r=this;let a,i,l;return o;function o(k){return e.enter("htmlText"),e.enter("htmlTextData"),e.consume(k),s}function s(k){return k===33?(e.consume(k),u):k===47?(e.consume(k),P):k===63?(e.consume(k),$):pn(k)?(e.consume(k),I):n(k)}function u(k){return k===45?(e.consume(k),h):k===91?(e.consume(k),i=0,v):pn(k)?(e.consume(k),y):n(k)}function h(k){return k===45?(e.consume(k),p):n(k)}function m(k){return k===null?n(k):k===45?(e.consume(k),f):ee(k)?(l=m,ve(k)):(e.consume(k),m)}function f(k){return k===45?(e.consume(k),p):m(k)}function p(k){return k===62?be(k):k===45?f(k):m(k)}function v(k){const ne="CDATA[";return k===ne.charCodeAt(i++)?(e.consume(k),i===ne.length?x:v):n(k)}function x(k){return k===null?n(k):k===93?(e.consume(k),S):ee(k)?(l=x,ve(k)):(e.consume(k),x)}function S(k){return k===93?(e.consume(k),g):x(k)}function g(k){return k===62?be(k):k===93?(e.consume(k),g):x(k)}function y(k){return k===null||k===62?be(k):ee(k)?(l=y,ve(k)):(e.consume(k),y)}function $(k){return k===null?n(k):k===63?(e.consume(k),F):ee(k)?(l=$,ve(k)):(e.consume(k),$)}function F(k){return k===62?be(k):$(k)}function P(k){return pn(k)?(e.consume(k),E):n(k)}function E(k){return k===45||At(k)?(e.consume(k),E):M(k)}function M(k){return ee(k)?(l=M,ve(k)):xe(k)?(e.consume(k),M):be(k)}function I(k){return k===45||At(k)?(e.consume(k),I):k===47||k===62||_t(k)?O(k):n(k)}function O(k){return k===47?(e.consume(k),be):k===58||k===95||pn(k)?(e.consume(k),Q):ee(k)?(l=O,ve(k)):xe(k)?(e.consume(k),O):be(k)}function Q(k){return k===45||k===46||k===58||k===95||At(k)?(e.consume(k),Q):V(k)}function V(k){return k===61?(e.consume(k),L):ee(k)?(l=V,ve(k)):xe(k)?(e.consume(k),V):O(k)}function L(k){return k===null||k===60||k===61||k===62||k===96?n(k):k===34||k===39?(e.consume(k),a=k,he):ee(k)?(l=L,ve(k)):xe(k)?(e.consume(k),L):(e.consume(k),oe)}function he(k){return k===a?(e.consume(k),a=void 0,ie):k===null?n(k):ee(k)?(l=he,ve(k)):(e.consume(k),he)}function oe(k){return k===null||k===34||k===39||k===60||k===61||k===96?n(k):k===47||k===62||_t(k)?O(k):(e.consume(k),oe)}function ie(k){return k===47||k===62||_t(k)?O(k):n(k)}function be(k){return k===62?(e.consume(k),e.exit("htmlTextData"),e.exit("htmlText"),t):n(k)}function ve(k){return e.exit("htmlTextData"),e.enter("lineEnding"),e.consume(k),e.exit("lineEnding"),W}function W(k){return xe(k)?we(e,J,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(k):J(k)}function J(k){return e.enter("htmlTextData"),l(k)}}const Vh={name:"labelEnd",resolveAll:x8,resolveTo:w8,tokenize:$8},g8={tokenize:k8},y8={tokenize:_8},v8={tokenize:S8};function x8(e){let t=-1;const n=[];for(;++t<e.length;){const r=e[t][1];if(n.push(e[t]),r.type==="labelImage"||r.type==="labelLink"||r.type==="labelEnd"){const a=r.type==="labelImage"?4:2;r.type="data",t+=a}}return e.length!==n.length&&vn(e,0,e.length,n),e}function w8(e,t){let n=e.length,r=0,a,i,l,o;for(;n--;)if(a=e[n][1],i){if(a.type==="link"||a.type==="labelLink"&&a._inactive)break;e[n][0]==="enter"&&a.type==="labelLink"&&(a._inactive=!0)}else if(l){if(e[n][0]==="enter"&&(a.type==="labelImage"||a.type==="labelLink")&&!a._balanced&&(i=n,a.type!=="labelLink")){r=2;break}}else a.type==="labelEnd"&&(l=n);const s={type:e[i][1].type==="labelLink"?"link":"image",start:{...e[i][1].start},end:{...e[e.length-1][1].end}},u={type:"label",start:{...e[i][1].start},end:{...e[l][1].end}},h={type:"labelText",start:{...e[i+r+2][1].end},end:{...e[l-2][1].start}};return o=[["enter",s,t],["enter",u,t]],o=Bt(o,e.slice(i+1,i+r+3)),o=Bt(o,[["enter",h,t]]),o=Bt(o,Wh(t.parser.constructs.insideSpan.null,e.slice(i+r+4,l-3),t)),o=Bt(o,[["exit",h,t],e[l-2],e[l-1],["exit",u,t]]),o=Bt(o,e.slice(l+1)),o=Bt(o,[["exit",s,t]]),vn(e,i,e.length,o),e}function $8(e,t,n){const r=this;let a=r.events.length,i,l;for(;a--;)if((r.events[a][1].type==="labelImage"||r.events[a][1].type==="labelLink")&&!r.events[a][1]._balanced){i=r.events[a][1];break}return o;function o(f){return i?i._inactive?m(f):(l=r.parser.defined.includes(Sa(r.sliceSerialize({start:i.end,end:r.now()}))),e.enter("labelEnd"),e.enter("labelMarker"),e.consume(f),e.exit("labelMarker"),e.exit("labelEnd"),s):n(f)}function s(f){return f===40?e.attempt(g8,h,l?h:m)(f):f===91?e.attempt(y8,h,l?u:m)(f):l?h(f):m(f)}function u(f){return e.attempt(v8,h,m)(f)}function h(f){return t(f)}function m(f){return i._balanced=!0,n(f)}}function k8(e,t,n){return r;function r(m){return e.enter("resource"),e.enter("resourceMarker"),e.consume(m),e.exit("resourceMarker"),a}function a(m){return _t(m)?ki(e,i)(m):i(m)}function i(m){return m===41?h(m):Yb(e,l,o,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(m)}function l(m){return _t(m)?ki(e,s)(m):h(m)}function o(m){return n(m)}function s(m){return m===34||m===39||m===40?eg(e,u,n,"resourceTitle","resourceTitleMarker","resourceTitleString")(m):h(m)}function u(m){return _t(m)?ki(e,h)(m):h(m)}function h(m){return m===41?(e.enter("resourceMarker"),e.consume(m),e.exit("resourceMarker"),e.exit("resource"),t):n(m)}}function _8(e,t,n){const r=this;return a;function a(o){return Jb.call(r,e,i,l,"reference","referenceMarker","referenceString")(o)}function i(o){return r.parser.defined.includes(Sa(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)))?t(o):n(o)}function l(o){return n(o)}}function S8(e,t,n){return r;function r(i){return e.enter("reference"),e.enter("referenceMarker"),e.consume(i),e.exit("referenceMarker"),a}function a(i){return i===93?(e.enter("referenceMarker"),e.consume(i),e.exit("referenceMarker"),e.exit("reference"),t):n(i)}}const D8={name:"labelStartImage",resolveAll:Vh.resolveAll,tokenize:C8};function C8(e,t,n){const r=this;return a;function a(o){return e.enter("labelImage"),e.enter("labelImageMarker"),e.consume(o),e.exit("labelImageMarker"),i}function i(o){return o===91?(e.enter("labelMarker"),e.consume(o),e.exit("labelMarker"),e.exit("labelImage"),l):n(o)}function l(o){return o===94&&"_hiddenFootnoteSupport"in r.parser.constructs?n(o):t(o)}}const E8={name:"labelStartLink",resolveAll:Vh.resolveAll,tokenize:z8};function z8(e,t,n){const r=this;return a;function a(l){return e.enter("labelLink"),e.enter("labelMarker"),e.consume(l),e.exit("labelMarker"),e.exit("labelLink"),i}function i(l){return l===94&&"_hiddenFootnoteSupport"in r.parser.constructs?n(l):t(l)}}const Zs={name:"lineEnding",tokenize:F8};function F8(e,t){return n;function n(r){return e.enter("lineEnding"),e.consume(r),e.exit("lineEnding"),we(e,t,"linePrefix")}}const Jl={name:"thematicBreak",tokenize:A8};function A8(e,t,n){let r=0,a;return i;function i(u){return e.enter("thematicBreak"),l(u)}function l(u){return a=u,o(u)}function o(u){return u===a?(e.enter("thematicBreakSequence"),s(u)):r>=3&&(u===null||ee(u))?(e.exit("thematicBreak"),t(u)):n(u)}function s(u){return u===a?(e.consume(u),r++,s):(e.exit("thematicBreakSequence"),xe(u)?we(e,o,"whitespace")(u):o(u))}}const gt={continuation:{tokenize:M8},exit:I8,name:"list",tokenize:N8},T8={partial:!0,tokenize:O8},P8={partial:!0,tokenize:R8};function N8(e,t,n){const r=this,a=r.events[r.events.length-1];let i=a&&a[1].type==="linePrefix"?a[2].sliceSerialize(a[1],!0).length:0,l=0;return o;function o(p){const v=r.containerState.type||(p===42||p===43||p===45?"listUnordered":"listOrdered");if(v==="listUnordered"?!r.containerState.marker||p===r.containerState.marker:x0(p)){if(r.containerState.type||(r.containerState.type=v,e.enter(v,{_container:!0})),v==="listUnordered")return e.enter("listItemPrefix"),p===42||p===45?e.check(Jl,n,u)(p):u(p);if(!r.interrupt||p===49)return e.enter("listItemPrefix"),e.enter("listItemValue"),s(p)}return n(p)}function s(p){return x0(p)&&++l<10?(e.consume(p),s):(!r.interrupt||l<2)&&(r.containerState.marker?p===r.containerState.marker:p===41||p===46)?(e.exit("listItemValue"),u(p)):n(p)}function u(p){return e.enter("listItemMarker"),e.consume(p),e.exit("listItemMarker"),r.containerState.marker=r.containerState.marker||p,e.check(is,r.interrupt?n:h,e.attempt(T8,f,m))}function h(p){return r.containerState.initialBlankLine=!0,i++,f(p)}function m(p){return xe(p)?(e.enter("listItemPrefixWhitespace"),e.consume(p),e.exit("listItemPrefixWhitespace"),f):n(p)}function f(p){return r.containerState.size=i+r.sliceSerialize(e.exit("listItemPrefix"),!0).length,t(p)}}function M8(e,t,n){const r=this;return r.containerState._closeFlow=void 0,e.check(is,a,i);function a(o){return r.containerState.furtherBlankLines=r.containerState.furtherBlankLines||r.containerState.initialBlankLine,we(e,t,"listItemIndent",r.containerState.size+1)(o)}function i(o){return r.containerState.furtherBlankLines||!xe(o)?(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,l(o)):(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,e.attempt(P8,t,l)(o))}function l(o){return r.containerState._closeFlow=!0,r.interrupt=void 0,we(e,e.attempt(gt,t,n),"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(o)}}function R8(e,t,n){const r=this;return we(e,a,"listItemIndent",r.containerState.size+1);function a(i){const l=r.events[r.events.length-1];return l&&l[1].type==="listItemIndent"&&l[2].sliceSerialize(l[1],!0).length===r.containerState.size?t(i):n(i)}}function I8(e){e.exit(this.containerState.type)}function O8(e,t,n){const r=this;return we(e,a,"listItemPrefixWhitespace",r.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function a(i){const l=r.events[r.events.length-1];return!xe(i)&&l&&l[1].type==="listItemPrefixWhitespace"?t(i):n(i)}}const md={name:"setextUnderline",resolveTo:B8,tokenize:L8};function B8(e,t){let n=e.length,r,a,i;for(;n--;)if(e[n][0]==="enter"){if(e[n][1].type==="content"){r=n;break}e[n][1].type==="paragraph"&&(a=n)}else e[n][1].type==="content"&&e.splice(n,1),!i&&e[n][1].type==="definition"&&(i=n);const l={type:"setextHeading",start:{...e[a][1].start},end:{...e[e.length-1][1].end}};return e[a][1].type="setextHeadingText",i?(e.splice(a,0,["enter",l,t]),e.splice(i+1,0,["exit",e[r][1],t]),e[r][1].end={...e[i][1].end}):e[r][1]=l,e.push(["exit",l,t]),e}function L8(e,t,n){const r=this;let a;return i;function i(u){let h=r.events.length,m;for(;h--;)if(r.events[h][1].type!=="lineEnding"&&r.events[h][1].type!=="linePrefix"&&r.events[h][1].type!=="content"){m=r.events[h][1].type==="paragraph";break}return!r.parser.lazy[r.now().line]&&(r.interrupt||m)?(e.enter("setextHeadingLine"),a=u,l(u)):n(u)}function l(u){return e.enter("setextHeadingLineSequence"),o(u)}function o(u){return u===a?(e.consume(u),o):(e.exit("setextHeadingLineSequence"),xe(u)?we(e,s,"lineSuffix")(u):s(u))}function s(u){return u===null||ee(u)?(e.exit("setextHeadingLine"),t(u)):n(u)}}const q8={tokenize:j8};function j8(e){const t=this,n=e.attempt(is,r,e.attempt(this.parser.constructs.flowInitial,a,we(e,e.attempt(this.parser.constructs.flow,a,e.attempt(K7,a)),"linePrefix")));return n;function r(i){if(i===null){e.consume(i);return}return e.enter("lineEndingBlank"),e.consume(i),e.exit("lineEndingBlank"),t.currentConstruct=void 0,n}function a(i){if(i===null){e.consume(i);return}return e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),t.currentConstruct=void 0,n}}const H8={resolveAll:ng()},U8=tg("string"),W8=tg("text");function tg(e){return{resolveAll:ng(e==="text"?V8:void 0),tokenize:t};function t(n){const r=this,a=this.parser.constructs[e],i=n.attempt(a,l,o);return l;function l(h){return u(h)?i(h):o(h)}function o(h){if(h===null){n.consume(h);return}return n.enter("data"),n.consume(h),s}function s(h){return u(h)?(n.exit("data"),i(h)):(n.consume(h),s)}function u(h){if(h===null)return!0;const m=a[h];let f=-1;if(m)for(;++f<m.length;){const p=m[f];if(!p.previous||p.previous.call(r,r.previous))return!0}return!1}}}function ng(e){return t;function t(n,r){let a=-1,i;for(;++a<=n.length;)i===void 0?n[a]&&n[a][1].type==="data"&&(i=a,a++):(!n[a]||n[a][1].type!=="data")&&(a!==i+2&&(n[i][1].end=n[a-1][1].end,n.splice(i+2,a-i-2),a=i+2),i=void 0);return e?e(n,r):n}}function V8(e,t){let n=0;for(;++n<=e.length;)if((n===e.length||e[n][1].type==="lineEnding")&&e[n-1][1].type==="data"){const r=e[n-1][1],a=t.sliceStream(r);let i=a.length,l=-1,o=0,s;for(;i--;){const u=a[i];if(typeof u=="string"){for(l=u.length;u.charCodeAt(l-1)===32;)o++,l--;if(l)break;l=-1}else if(u===-2)s=!0,o++;else if(u!==-1){i++;break}}if(o){const u={type:n===e.length||s||o<2?"lineSuffix":"hardBreakTrailing",start:{_bufferIndex:i?l:r.start._bufferIndex+l,_index:r.start._index+i,line:r.end.line,column:r.end.column-o,offset:r.end.offset-o},end:{...r.end}};r.end={...u.start},r.start.offset===r.end.offset?Object.assign(r,u):(e.splice(n,0,["enter",u,t],["exit",u,t]),n+=2)}n++}return e}const K8={42:gt,43:gt,45:gt,48:gt,49:gt,50:gt,51:gt,52:gt,53:gt,54:gt,55:gt,56:gt,57:gt,62:Qb},Q8={91:Y7},G8={[-2]:Gs,[-1]:Gs,32:Gs},Z8={35:a8,42:Jl,45:[md,Jl],60:s8,61:md,95:Jl,96:hd,126:hd},X8={38:Zb,92:Gb},Y8={[-5]:Zs,[-4]:Zs,[-3]:Zs,33:D8,38:Zb,42:w0,60:[E7,p8],91:E8,92:[n8,Gb],93:Vh,95:w0,96:q7},J8={null:[w0,H8]},ex={null:[42,95]},tx={null:[]},nx=Object.freeze(Object.defineProperty({__proto__:null,attentionMarkers:ex,contentInitial:Q8,disable:tx,document:K8,flow:Z8,flowInitial:G8,insideSpan:J8,string:X8,text:Y8},Symbol.toStringTag,{value:"Module"}));function rx(e,t,n){let r={_bufferIndex:-1,_index:0,line:n&&n.line||1,column:n&&n.column||1,offset:n&&n.offset||0};const a={},i=[];let l=[],o=[];const s={attempt:M(P),check:M(E),consume:y,enter:$,exit:F,interrupt:M(E,{interrupt:!0})},u={code:null,containerState:{},defineSkip:x,events:[],now:v,parser:e,previous:null,sliceSerialize:f,sliceStream:p,write:m};let h=t.tokenize.call(u,s);return t.resolveAll&&i.push(t),u;function m(V){return l=Bt(l,V),S(),l[l.length-1]!==null?[]:(I(t,0),u.events=Wh(i,u.events,u),u.events)}function f(V,L){return ix(p(V),L)}function p(V){return ax(l,V)}function v(){const{_bufferIndex:V,_index:L,line:he,column:oe,offset:ie}=r;return{_bufferIndex:V,_index:L,line:he,column:oe,offset:ie}}function x(V){a[V.line]=V.column,Q()}function S(){let V;for(;r._index<l.length;){const L=l[r._index];if(typeof L=="string")for(V=r._index,r._bufferIndex<0&&(r._bufferIndex=0);r._index===V&&r._bufferIndex<L.length;)g(L.charCodeAt(r._bufferIndex));else g(L)}}function g(V){h=h(V)}function y(V){ee(V)?(r.line++,r.column=1,r.offset+=V===-3?2:1,Q()):V!==-1&&(r.column++,r.offset++),r._bufferIndex<0?r._index++:(r._bufferIndex++,r._bufferIndex===l[r._index].length&&(r._bufferIndex=-1,r._index++)),u.previous=V}function $(V,L){const he=L||{};return he.type=V,he.start=v(),u.events.push(["enter",he,u]),o.push(he),he}function F(V){const L=o.pop();return L.end=v(),u.events.push(["exit",L,u]),L}function P(V,L){I(V,L.from)}function E(V,L){L.restore()}function M(V,L){return he;function he(oe,ie,be){let ve,W,J,k;return Array.isArray(oe)?ce(oe):"tokenize"in oe?ce([oe]):ne(oe);function ne(ke){return et;function et(ut){const Zt=ut!==null&&ke[ut],Xt=ut!==null&&ke.null,Zr=[...Array.isArray(Zt)?Zt:Zt?[Zt]:[],...Array.isArray(Xt)?Xt:Xt?[Xt]:[]];return ce(Zr)(ut)}}function ce(ke){return ve=ke,W=0,ke.length===0?be:C(ke[W])}function C(ke){return et;function et(ut){return k=O(),J=ke,ke.partial||(u.currentConstruct=ke),ke.name&&u.parser.constructs.disable.null.includes(ke.name)?Xe():ke.tokenize.call(L?Object.assign(Object.create(u),L):u,s,Ne,Xe)(ut)}}function Ne(ke){return V(J,k),ie}function Xe(ke){return k.restore(),++W<ve.length?C(ve[W]):be}}}function I(V,L){V.resolveAll&&!i.includes(V)&&i.push(V),V.resolve&&vn(u.events,L,u.events.length-L,V.resolve(u.events.slice(L),u)),V.resolveTo&&(u.events=V.resolveTo(u.events,u))}function O(){const V=v(),L=u.previous,he=u.currentConstruct,oe=u.events.length,ie=Array.from(o);return{from:oe,restore:be};function be(){r=V,u.previous=L,u.currentConstruct=he,u.events.length=oe,o=ie,Q()}}function Q(){r.line in a&&r.column<2&&(r.column=a[r.line],r.offset+=a[r.line]-1)}}function ax(e,t){const n=t.start._index,r=t.start._bufferIndex,a=t.end._index,i=t.end._bufferIndex;let l;if(n===a)l=[e[n].slice(r,i)];else{if(l=e.slice(n,a),r>-1){const o=l[0];typeof o=="string"?l[0]=o.slice(r):l.shift()}i>0&&l.push(e[a].slice(0,i))}return l}function ix(e,t){let n=-1;const r=[];let a;for(;++n<e.length;){const i=e[n];let l;if(typeof i=="string")l=i;else switch(i){case-5:{l="\r";break}case-4:{l=`
`;break}case-3:{l=`\r
`;break}case-2:{l=t?" ":"	";break}case-1:{if(!t&&a)continue;l=" ";break}default:l=String.fromCharCode(i)}a=i===-2,r.push(l)}return r.join("")}function lx(e){const r={constructs:d7([nx,...(e||{}).extensions||[]]),content:a(w7),defined:[],document:a(k7),flow:a(q8),lazy:{},string:a(U8),text:a(W8)};return r;function a(i){return l;function l(o){return rx(r,i,o)}}}function ox(e){for(;!Xb(e););return e}const dd=/[\0\t\n\r]/g;function sx(){let e=1,t="",n=!0,r;return a;function a(i,l,o){const s=[];let u,h,m,f,p;for(i=t+(typeof i=="string"?i.toString():new TextDecoder(l||void 0).decode(i)),m=0,t="",n&&(i.charCodeAt(0)===65279&&m++,n=void 0);m<i.length;){if(dd.lastIndex=m,u=dd.exec(i),f=u&&u.index!==void 0?u.index:i.length,p=i.charCodeAt(f),!u){t=i.slice(m);break}if(p===10&&m===f&&r)s.push(-3),r=void 0;else switch(r&&(s.push(-5),r=void 0),m<f&&(s.push(i.slice(m,f)),e+=f-m),p){case 0:{s.push(65533),e++;break}case 9:{for(h=Math.ceil(e/4)*4,s.push(-2);e++<h;)s.push(-1);break}case 10:{s.push(-4),e=1;break}default:r=!0,e=1}m=f+1}return o&&(r&&s.push(-5),t&&s.push(t),s.push(null)),s}}const ux=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function hx(e){return e.replace(ux,cx)}function cx(e,t,n){if(t)return t;if(n.charCodeAt(0)===35){const a=n.charCodeAt(1),i=a===120||a===88;return Kb(n.slice(i?2:1),i?16:10)}return Uh(n)||e}const rg={}.hasOwnProperty;function mx(e,t,n){return typeof t!="string"&&(n=t,t=void 0),dx(n)(ox(lx(n).document().write(sx()(e,t,!0))))}function dx(e){const t={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:i(Dr),autolinkProtocol:O,autolinkEmail:O,atxHeading:i(Wa),blockQuote:i(Xt),characterEscape:O,characterReference:O,codeFenced:i(Zr),codeFencedFenceInfo:l,codeFencedFenceMeta:l,codeIndented:i(Zr,l),codeText:i(ps,l),codeTextData:O,data:O,codeFlowValue:O,definition:i(bs),definitionDestinationString:l,definitionLabelString:l,definitionTitleString:l,emphasis:i(Ua),hardBreakEscape:i(Va),hardBreakTrailing:i(Va),htmlFlow:i(Xr,l),htmlFlowData:O,htmlText:i(Xr,l),htmlTextData:O,image:i(Yr),label:l,link:i(Dr),listItem:i(y4),listItemValue:f,listOrdered:i(wc,m),listUnordered:i(wc),paragraph:i(v4),reference:C,referenceString:l,resourceDestinationString:l,resourceTitleString:l,setextHeading:i(Wa),strong:i(x4),thematicBreak:i($4)},exit:{atxHeading:s(),atxHeadingSequence:P,autolink:s(),autolinkEmail:Zt,autolinkProtocol:ut,blockQuote:s(),characterEscapeValue:Q,characterReferenceMarkerHexadecimal:Xe,characterReferenceMarkerNumeric:Xe,characterReferenceValue:ke,characterReference:et,codeFenced:s(S),codeFencedFence:x,codeFencedFenceInfo:p,codeFencedFenceMeta:v,codeFlowValue:Q,codeIndented:s(g),codeText:s(ie),codeTextData:Q,data:Q,definition:s(),definitionDestinationString:F,definitionLabelString:y,definitionTitleString:$,emphasis:s(),hardBreakEscape:s(L),hardBreakTrailing:s(L),htmlFlow:s(he),htmlFlowData:Q,htmlText:s(oe),htmlTextData:Q,image:s(ve),label:J,labelText:W,lineEnding:V,link:s(be),listItem:s(),listOrdered:s(),listUnordered:s(),paragraph:s(),referenceString:Ne,resourceDestinationString:k,resourceTitleString:ne,resource:ce,setextHeading:s(I),setextHeadingLineSequence:M,setextHeadingText:E,strong:s(),thematicBreak:s()}};ag(t,(e||{}).mdastExtensions||[]);const n={};return r;function r(R){let G={type:"root",children:[]};const se={stack:[G],tokenStack:[],config:t,enter:o,exit:u,buffer:l,resume:h,data:n},pe=[];let _e=-1;for(;++_e<R.length;)if(R[_e][1].type==="listOrdered"||R[_e][1].type==="listUnordered")if(R[_e][0]==="enter")pe.push(_e);else{const Yt=pe.pop();_e=a(R,Yt,_e)}for(_e=-1;++_e<R.length;){const Yt=t[R[_e][0]];rg.call(Yt,R[_e][1].type)&&Yt[R[_e][1].type].call(Object.assign({sliceSerialize:R[_e][2].sliceSerialize},se),R[_e][1])}if(se.tokenStack.length>0){const Yt=se.tokenStack[se.tokenStack.length-1];(Yt[1]||fd).call(se,void 0,Yt[0])}for(G.position={start:Xn(R.length>0?R[0][1].start:{line:1,column:1,offset:0}),end:Xn(R.length>0?R[R.length-2][1].end:{line:1,column:1,offset:0})},_e=-1;++_e<t.transforms.length;)G=t.transforms[_e](G)||G;return G}function a(R,G,se){let pe=G-1,_e=-1,Yt=!1,Cr,Sn,Ka,Qa;for(;++pe<=se;){const Dt=R[pe];switch(Dt[1].type){case"listUnordered":case"listOrdered":case"blockQuote":{Dt[0]==="enter"?_e++:_e--,Qa=void 0;break}case"lineEndingBlank":{Dt[0]==="enter"&&(Cr&&!Qa&&!_e&&!Ka&&(Ka=pe),Qa=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:Qa=void 0}if(!_e&&Dt[0]==="enter"&&Dt[1].type==="listItemPrefix"||_e===-1&&Dt[0]==="exit"&&(Dt[1].type==="listUnordered"||Dt[1].type==="listOrdered")){if(Cr){let Jr=pe;for(Sn=void 0;Jr--;){const Dn=R[Jr];if(Dn[1].type==="lineEnding"||Dn[1].type==="lineEndingBlank"){if(Dn[0]==="exit")continue;Sn&&(R[Sn][1].type="lineEndingBlank",Yt=!0),Dn[1].type="lineEnding",Sn=Jr}else if(!(Dn[1].type==="linePrefix"||Dn[1].type==="blockQuotePrefix"||Dn[1].type==="blockQuotePrefixWhitespace"||Dn[1].type==="blockQuoteMarker"||Dn[1].type==="listItemIndent"))break}Ka&&(!Sn||Ka<Sn)&&(Cr._spread=!0),Cr.end=Object.assign({},Sn?R[Sn][1].start:Dt[1].end),R.splice(Sn||pe,0,["exit",Cr,Dt[2]]),pe++,se++}if(Dt[1].type==="listItemPrefix"){const Jr={type:"listItem",_spread:!1,start:Object.assign({},Dt[1].start),end:void 0};Cr=Jr,R.splice(pe,0,["enter",Jr,Dt[2]]),pe++,se++,Ka=void 0,Qa=!0}}}return R[G][1]._spread=Yt,se}function i(R,G){return se;function se(pe){o.call(this,R(pe),pe),G&&G.call(this,pe)}}function l(){this.stack.push({type:"fragment",children:[]})}function o(R,G,se){this.stack[this.stack.length-1].children.push(R),this.stack.push(R),this.tokenStack.push([G,se||void 0]),R.position={start:Xn(G.start),end:void 0}}function s(R){return G;function G(se){R&&R.call(this,se),u.call(this,se)}}function u(R,G){const se=this.stack.pop(),pe=this.tokenStack.pop();if(pe)pe[0].type!==R.type&&(G?G.call(this,R,pe[0]):(pe[1]||fd).call(this,R,pe[0]));else throw new Error("Cannot close `"+R.type+"` ("+$i({start:R.start,end:R.end})+"): it’s not open");se.position.end=Xn(R.end)}function h(){return c7(this.stack.pop())}function m(){this.data.expectingFirstListItemValue=!0}function f(R){if(this.data.expectingFirstListItemValue){const G=this.stack[this.stack.length-2];G.start=Number.parseInt(this.sliceSerialize(R),10),this.data.expectingFirstListItemValue=void 0}}function p(){const R=this.resume(),G=this.stack[this.stack.length-1];G.lang=R}function v(){const R=this.resume(),G=this.stack[this.stack.length-1];G.meta=R}function x(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function S(){const R=this.resume(),G=this.stack[this.stack.length-1];G.value=R.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function g(){const R=this.resume(),G=this.stack[this.stack.length-1];G.value=R.replace(/(\r?\n|\r)$/g,"")}function y(R){const G=this.resume(),se=this.stack[this.stack.length-1];se.label=G,se.identifier=Sa(this.sliceSerialize(R)).toLowerCase()}function $(){const R=this.resume(),G=this.stack[this.stack.length-1];G.title=R}function F(){const R=this.resume(),G=this.stack[this.stack.length-1];G.url=R}function P(R){const G=this.stack[this.stack.length-1];if(!G.depth){const se=this.sliceSerialize(R).length;G.depth=se}}function E(){this.data.setextHeadingSlurpLineEnding=!0}function M(R){const G=this.stack[this.stack.length-1];G.depth=this.sliceSerialize(R).codePointAt(0)===61?1:2}function I(){this.data.setextHeadingSlurpLineEnding=void 0}function O(R){const se=this.stack[this.stack.length-1].children;let pe=se[se.length-1];(!pe||pe.type!=="text")&&(pe=w4(),pe.position={start:Xn(R.start),end:void 0},se.push(pe)),this.stack.push(pe)}function Q(R){const G=this.stack.pop();G.value+=this.sliceSerialize(R),G.position.end=Xn(R.end)}function V(R){const G=this.stack[this.stack.length-1];if(this.data.atHardBreak){const se=G.children[G.children.length-1];se.position.end=Xn(R.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&t.canContainEols.includes(G.type)&&(O.call(this,R),Q.call(this,R))}function L(){this.data.atHardBreak=!0}function he(){const R=this.resume(),G=this.stack[this.stack.length-1];G.value=R}function oe(){const R=this.resume(),G=this.stack[this.stack.length-1];G.value=R}function ie(){const R=this.resume(),G=this.stack[this.stack.length-1];G.value=R}function be(){const R=this.stack[this.stack.length-1];if(this.data.inReference){const G=this.data.referenceType||"shortcut";R.type+="Reference",R.referenceType=G,delete R.url,delete R.title}else delete R.identifier,delete R.label;this.data.referenceType=void 0}function ve(){const R=this.stack[this.stack.length-1];if(this.data.inReference){const G=this.data.referenceType||"shortcut";R.type+="Reference",R.referenceType=G,delete R.url,delete R.title}else delete R.identifier,delete R.label;this.data.referenceType=void 0}function W(R){const G=this.sliceSerialize(R),se=this.stack[this.stack.length-2];se.label=hx(G),se.identifier=Sa(G).toLowerCase()}function J(){const R=this.stack[this.stack.length-1],G=this.resume(),se=this.stack[this.stack.length-1];if(this.data.inReference=!0,se.type==="link"){const pe=R.children;se.children=pe}else se.alt=G}function k(){const R=this.resume(),G=this.stack[this.stack.length-1];G.url=R}function ne(){const R=this.resume(),G=this.stack[this.stack.length-1];G.title=R}function ce(){this.data.inReference=void 0}function C(){this.data.referenceType="collapsed"}function Ne(R){const G=this.resume(),se=this.stack[this.stack.length-1];se.label=G,se.identifier=Sa(this.sliceSerialize(R)).toLowerCase(),this.data.referenceType="full"}function Xe(R){this.data.characterReferenceType=R.type}function ke(R){const G=this.sliceSerialize(R),se=this.data.characterReferenceType;let pe;se?(pe=Kb(G,se==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):pe=Uh(G);const _e=this.stack[this.stack.length-1];_e.value+=pe}function et(R){const G=this.stack.pop();G.position.end=Xn(R.end)}function ut(R){Q.call(this,R);const G=this.stack[this.stack.length-1];G.url=this.sliceSerialize(R)}function Zt(R){Q.call(this,R);const G=this.stack[this.stack.length-1];G.url="mailto:"+this.sliceSerialize(R)}function Xt(){return{type:"blockquote",children:[]}}function Zr(){return{type:"code",lang:null,meta:null,value:""}}function ps(){return{type:"inlineCode",value:""}}function bs(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function Ua(){return{type:"emphasis",children:[]}}function Wa(){return{type:"heading",depth:0,children:[]}}function Va(){return{type:"break"}}function Xr(){return{type:"html",value:""}}function Yr(){return{type:"image",title:null,url:"",alt:null}}function Dr(){return{type:"link",title:null,url:"",children:[]}}function wc(R){return{type:"list",ordered:R.type==="listOrdered",start:null,spread:R._spread,children:[]}}function y4(R){return{type:"listItem",spread:R._spread,checked:null,children:[]}}function v4(){return{type:"paragraph",children:[]}}function x4(){return{type:"strong",children:[]}}function w4(){return{type:"text",value:""}}function $4(){return{type:"thematicBreak"}}}function Xn(e){return{line:e.line,column:e.column,offset:e.offset}}function ag(e,t){let n=-1;for(;++n<t.length;){const r=t[n];Array.isArray(r)?ag(e,r):fx(e,r)}}function fx(e,t){let n;for(n in t)if(rg.call(t,n))switch(n){case"canContainEols":{const r=t[n];r&&e[n].push(...r);break}case"transforms":{const r=t[n];r&&e[n].push(...r);break}case"enter":case"exit":{const r=t[n];r&&Object.assign(e[n],r);break}}}function fd(e,t){throw e?new Error("Cannot close `"+e.type+"` ("+$i({start:e.start,end:e.end})+"): a different token (`"+t.type+"`, "+$i({start:t.start,end:t.end})+") is open"):new Error("Cannot close document, a token (`"+t.type+"`, "+$i({start:t.start,end:t.end})+") is still open")}function px(e){const t=this;t.parser=n;function n(r){return mx(r,{...t.data("settings"),...e,extensions:t.data("micromarkExtensions")||[],mdastExtensions:t.data("fromMarkdownExtensions")||[]})}}function bx(e,t){const n={type:"element",tagName:"blockquote",properties:{},children:e.wrap(e.all(t),!0)};return e.patch(t,n),e.applyData(t,n)}function gx(e,t){const n={type:"element",tagName:"br",properties:{},children:[]};return e.patch(t,n),[e.applyData(t,n),{type:"text",value:`
`}]}function yx(e,t){const n=t.value?t.value+`
`:"",r={};t.lang&&(r.className=["language-"+t.lang]);let a={type:"element",tagName:"code",properties:r,children:[{type:"text",value:n}]};return t.meta&&(a.data={meta:t.meta}),e.patch(t,a),a=e.applyData(t,a),a={type:"element",tagName:"pre",properties:{},children:[a]},e.patch(t,a),a}function vx(e,t){const n={type:"element",tagName:"del",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function xx(e,t){const n={type:"element",tagName:"em",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function wx(e,t){const n=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",r=String(t.identifier).toUpperCase(),a=qa(r.toLowerCase()),i=e.footnoteOrder.indexOf(r);let l,o=e.footnoteCounts.get(r);o===void 0?(o=0,e.footnoteOrder.push(r),l=e.footnoteOrder.length):l=i+1,o+=1,e.footnoteCounts.set(r,o);const s={type:"element",tagName:"a",properties:{href:"#"+n+"fn-"+a,id:n+"fnref-"+a+(o>1?"-"+o:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(l)}]};e.patch(t,s);const u={type:"element",tagName:"sup",properties:{},children:[s]};return e.patch(t,u),e.applyData(t,u)}function $x(e,t){const n={type:"element",tagName:"h"+t.depth,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function kx(e,t){if(e.options.allowDangerousHtml){const n={type:"raw",value:t.value};return e.patch(t,n),e.applyData(t,n)}}function ig(e,t){const n=t.referenceType;let r="]";if(n==="collapsed"?r+="[]":n==="full"&&(r+="["+(t.label||t.identifier)+"]"),t.type==="imageReference")return[{type:"text",value:"!["+t.alt+r}];const a=e.all(t),i=a[0];i&&i.type==="text"?i.value="["+i.value:a.unshift({type:"text",value:"["});const l=a[a.length-1];return l&&l.type==="text"?l.value+=r:a.push({type:"text",value:r}),a}function _x(e,t){const n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return ig(e,t);const a={src:qa(r.url||""),alt:t.alt};r.title!==null&&r.title!==void 0&&(a.title=r.title);const i={type:"element",tagName:"img",properties:a,children:[]};return e.patch(t,i),e.applyData(t,i)}function Sx(e,t){const n={src:qa(t.url)};t.alt!==null&&t.alt!==void 0&&(n.alt=t.alt),t.title!==null&&t.title!==void 0&&(n.title=t.title);const r={type:"element",tagName:"img",properties:n,children:[]};return e.patch(t,r),e.applyData(t,r)}function Dx(e,t){const n={type:"text",value:t.value.replace(/\r?\n|\r/g," ")};e.patch(t,n);const r={type:"element",tagName:"code",properties:{},children:[n]};return e.patch(t,r),e.applyData(t,r)}function Cx(e,t){const n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return ig(e,t);const a={href:qa(r.url||"")};r.title!==null&&r.title!==void 0&&(a.title=r.title);const i={type:"element",tagName:"a",properties:a,children:e.all(t)};return e.patch(t,i),e.applyData(t,i)}function Ex(e,t){const n={href:qa(t.url)};t.title!==null&&t.title!==void 0&&(n.title=t.title);const r={type:"element",tagName:"a",properties:n,children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function zx(e,t,n){const r=e.all(t),a=n?Fx(n):lg(t),i={},l=[];if(typeof t.checked=="boolean"){const h=r[0];let m;h&&h.type==="element"&&h.tagName==="p"?m=h:(m={type:"element",tagName:"p",properties:{},children:[]},r.unshift(m)),m.children.length>0&&m.children.unshift({type:"text",value:" "}),m.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:t.checked,disabled:!0},children:[]}),i.className=["task-list-item"]}let o=-1;for(;++o<r.length;){const h=r[o];(a||o!==0||h.type!=="element"||h.tagName!=="p")&&l.push({type:"text",value:`
`}),h.type==="element"&&h.tagName==="p"&&!a?l.push(...h.children):l.push(h)}const s=r[r.length-1];s&&(a||s.type!=="element"||s.tagName!=="p")&&l.push({type:"text",value:`
`});const u={type:"element",tagName:"li",properties:i,children:l};return e.patch(t,u),e.applyData(t,u)}function Fx(e){let t=!1;if(e.type==="list"){t=e.spread||!1;const n=e.children;let r=-1;for(;!t&&++r<n.length;)t=lg(n[r])}return t}function lg(e){const t=e.spread;return t??e.children.length>1}function Ax(e,t){const n={},r=e.all(t);let a=-1;for(typeof t.start=="number"&&t.start!==1&&(n.start=t.start);++a<r.length;){const l=r[a];if(l.type==="element"&&l.tagName==="li"&&l.properties&&Array.isArray(l.properties.className)&&l.properties.className.includes("task-list-item")){n.className=["contains-task-list"];break}}const i={type:"element",tagName:t.ordered?"ol":"ul",properties:n,children:e.wrap(r,!0)};return e.patch(t,i),e.applyData(t,i)}function Tx(e,t){const n={type:"element",tagName:"p",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function Px(e,t){const n={type:"root",children:e.wrap(e.all(t))};return e.patch(t,n),e.applyData(t,n)}function Nx(e,t){const n={type:"element",tagName:"strong",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function Mx(e,t){const n=e.all(t),r=n.shift(),a=[];if(r){const l={type:"element",tagName:"thead",properties:{},children:e.wrap([r],!0)};e.patch(t.children[0],l),a.push(l)}if(n.length>0){const l={type:"element",tagName:"tbody",properties:{},children:e.wrap(n,!0)},o=Lh(t.children[1]),s=Lb(t.children[t.children.length-1]);o&&s&&(l.position={start:o,end:s}),a.push(l)}const i={type:"element",tagName:"table",properties:{},children:e.wrap(a,!0)};return e.patch(t,i),e.applyData(t,i)}function Rx(e,t,n){const r=n?n.children:void 0,i=(r?r.indexOf(t):1)===0?"th":"td",l=n&&n.type==="table"?n.align:void 0,o=l?l.length:t.children.length;let s=-1;const u=[];for(;++s<o;){const m=t.children[s],f={},p=l?l[s]:void 0;p&&(f.align=p);let v={type:"element",tagName:i,properties:f,children:[]};m&&(v.children=e.all(m),e.patch(m,v),v=e.applyData(m,v)),u.push(v)}const h={type:"element",tagName:"tr",properties:{},children:e.wrap(u,!0)};return e.patch(t,h),e.applyData(t,h)}function Ix(e,t){const n={type:"element",tagName:"td",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}const pd=9,bd=32;function Ox(e){const t=String(e),n=/\r?\n|\r/g;let r=n.exec(t),a=0;const i=[];for(;r;)i.push(gd(t.slice(a,r.index),a>0,!0),r[0]),a=r.index+r[0].length,r=n.exec(t);return i.push(gd(t.slice(a),a>0,!1)),i.join("")}function gd(e,t,n){let r=0,a=e.length;if(t){let i=e.codePointAt(r);for(;i===pd||i===bd;)r++,i=e.codePointAt(r)}if(n){let i=e.codePointAt(a-1);for(;i===pd||i===bd;)a--,i=e.codePointAt(a-1)}return a>r?e.slice(r,a):""}function Bx(e,t){const n={type:"text",value:Ox(String(t.value))};return e.patch(t,n),e.applyData(t,n)}function Lx(e,t){const n={type:"element",tagName:"hr",properties:{},children:[]};return e.patch(t,n),e.applyData(t,n)}const qx={blockquote:bx,break:gx,code:yx,delete:vx,emphasis:xx,footnoteReference:wx,heading:$x,html:kx,imageReference:_x,image:Sx,inlineCode:Dx,linkReference:Cx,link:Ex,listItem:zx,list:Ax,paragraph:Tx,root:Px,strong:Nx,table:Mx,tableCell:Ix,tableRow:Rx,text:Bx,thematicBreak:Lx,toml:Sl,yaml:Sl,definition:Sl,footnoteDefinition:Sl};function Sl(){}const og=-1,ls=0,zo=1,Fo=2,Kh=3,Qh=4,Gh=5,Zh=6,sg=7,ug=8,yd=typeof self=="object"?self:globalThis,jx=(e,t)=>{const n=(a,i)=>(e.set(i,a),a),r=a=>{if(e.has(a))return e.get(a);const[i,l]=t[a];switch(i){case ls:case og:return n(l,a);case zo:{const o=n([],a);for(const s of l)o.push(r(s));return o}case Fo:{const o=n({},a);for(const[s,u]of l)o[r(s)]=r(u);return o}case Kh:return n(new Date(l),a);case Qh:{const{source:o,flags:s}=l;return n(new RegExp(o,s),a)}case Gh:{const o=n(new Map,a);for(const[s,u]of l)o.set(r(s),r(u));return o}case Zh:{const o=n(new Set,a);for(const s of l)o.add(r(s));return o}case sg:{const{name:o,message:s}=l;return n(new yd[o](s),a)}case ug:return n(BigInt(l),a);case"BigInt":return n(Object(BigInt(l)),a)}return n(new yd[i](l),a)};return r},vd=e=>jx(new Map,e)(0),ta="",{toString:Hx}={},{keys:Ux}=Object,oi=e=>{const t=typeof e;if(t!=="object"||!e)return[ls,t];const n=Hx.call(e).slice(8,-1);switch(n){case"Array":return[zo,ta];case"Object":return[Fo,ta];case"Date":return[Kh,ta];case"RegExp":return[Qh,ta];case"Map":return[Gh,ta];case"Set":return[Zh,ta]}return n.includes("Array")?[zo,n]:n.includes("Error")?[sg,n]:[Fo,n]},Dl=([e,t])=>e===ls&&(t==="function"||t==="symbol"),Wx=(e,t,n,r)=>{const a=(l,o)=>{const s=r.push(l)-1;return n.set(o,s),s},i=l=>{if(n.has(l))return n.get(l);let[o,s]=oi(l);switch(o){case ls:{let h=l;switch(s){case"bigint":o=ug,h=l.toString();break;case"function":case"symbol":if(e)throw new TypeError("unable to serialize "+s);h=null;break;case"undefined":return a([og],l)}return a([o,h],l)}case zo:{if(s)return a([s,[...l]],l);const h=[],m=a([o,h],l);for(const f of l)h.push(i(f));return m}case Fo:{if(s)switch(s){case"BigInt":return a([s,l.toString()],l);case"Boolean":case"Number":case"String":return a([s,l.valueOf()],l)}if(t&&"toJSON"in l)return i(l.toJSON());const h=[],m=a([o,h],l);for(const f of Ux(l))(e||!Dl(oi(l[f])))&&h.push([i(f),i(l[f])]);return m}case Kh:return a([o,l.toISOString()],l);case Qh:{const{source:h,flags:m}=l;return a([o,{source:h,flags:m}],l)}case Gh:{const h=[],m=a([o,h],l);for(const[f,p]of l)(e||!(Dl(oi(f))||Dl(oi(p))))&&h.push([i(f),i(p)]);return m}case Zh:{const h=[],m=a([o,h],l);for(const f of l)(e||!Dl(oi(f)))&&h.push(i(f));return m}}const{message:u}=l;return a([o,{name:s,message:u}],l)};return i},xd=(e,{json:t,lossy:n}={})=>{const r=[];return Wx(!(t||n),!!t,new Map,r)(e),r},Ao=typeof structuredClone=="function"?(e,t)=>t&&("json"in t||"lossy"in t)?vd(xd(e,t)):structuredClone(e):(e,t)=>vd(xd(e,t));function Vx(e,t){const n=[{type:"text",value:"↩"}];return t>1&&n.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(t)}]}),n}function Kx(e,t){return"Back to reference "+(e+1)+(t>1?"-"+t:"")}function Qx(e){const t=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",n=e.options.footnoteBackContent||Vx,r=e.options.footnoteBackLabel||Kx,a=e.options.footnoteLabel||"Footnotes",i=e.options.footnoteLabelTagName||"h2",l=e.options.footnoteLabelProperties||{className:["sr-only"]},o=[];let s=-1;for(;++s<e.footnoteOrder.length;){const u=e.footnoteById.get(e.footnoteOrder[s]);if(!u)continue;const h=e.all(u),m=String(u.identifier).toUpperCase(),f=qa(m.toLowerCase());let p=0;const v=[],x=e.footnoteCounts.get(m);for(;x!==void 0&&++p<=x;){v.length>0&&v.push({type:"text",value:" "});let y=typeof n=="string"?n:n(s,p);typeof y=="string"&&(y={type:"text",value:y}),v.push({type:"element",tagName:"a",properties:{href:"#"+t+"fnref-"+f+(p>1?"-"+p:""),dataFootnoteBackref:"",ariaLabel:typeof r=="string"?r:r(s,p),className:["data-footnote-backref"]},children:Array.isArray(y)?y:[y]})}const S=h[h.length-1];if(S&&S.type==="element"&&S.tagName==="p"){const y=S.children[S.children.length-1];y&&y.type==="text"?y.value+=" ":S.children.push({type:"text",value:" "}),S.children.push(...v)}else h.push(...v);const g={type:"element",tagName:"li",properties:{id:t+"fn-"+f},children:e.wrap(h,!0)};e.patch(u,g),o.push(g)}if(o.length!==0)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:i,properties:{...Ao(l),id:"footnote-label"},children:[{type:"text",value:a}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:e.wrap(o,!0)},{type:"text",value:`
`}]}}const Xh=function(e){if(e==null)return Yx;if(typeof e=="function")return os(e);if(typeof e=="object")return Array.isArray(e)?Gx(e):Zx(e);if(typeof e=="string")return Xx(e);throw new Error("Expected function, string, or object as test")};function Gx(e){const t=[];let n=-1;for(;++n<e.length;)t[n]=Xh(e[n]);return os(r);function r(...a){let i=-1;for(;++i<t.length;)if(t[i].apply(this,a))return!0;return!1}}function Zx(e){const t=e;return os(n);function n(r){const a=r;let i;for(i in e)if(a[i]!==t[i])return!1;return!0}}function Xx(e){return os(t);function t(n){return n&&n.type===e}}function os(e){return t;function t(n,r,a){return!!(Jx(n)&&e.call(this,n,typeof r=="number"?r:void 0,a||void 0))}}function Yx(){return!0}function Jx(e){return e!==null&&typeof e=="object"&&"type"in e}const hg=[],e9=!0,wd=!1,cg="skip";function mg(e,t,n,r){let a;typeof t=="function"&&typeof n!="function"?(r=n,n=t):a=t;const i=Xh(a),l=r?-1:1;o(e,void 0,[])();function o(s,u,h){const m=s&&typeof s=="object"?s:{};if(typeof m.type=="string"){const p=typeof m.tagName=="string"?m.tagName:typeof m.name=="string"?m.name:void 0;Object.defineProperty(f,"name",{value:"node ("+(s.type+(p?"<"+p+">":""))+")"})}return f;function f(){let p=hg,v,x,S;if((!t||i(s,u,h[h.length-1]||void 0))&&(p=t9(n(s,h)),p[0]===wd))return p;if("children"in s&&s.children){const g=s;if(g.children&&p[0]!==cg)for(x=(r?g.children.length:-1)+l,S=h.concat(g);x>-1&&x<g.children.length;){const y=g.children[x];if(v=o(y,x,S)(),v[0]===wd)return v;x=typeof v[1]=="number"?v[1]:x+l}}return p}}}function t9(e){return Array.isArray(e)?e:typeof e=="number"?[e9,e]:e==null?hg:[e]}function Yh(e,t,n,r){let a,i,l;typeof t=="function"&&typeof n!="function"?(i=void 0,l=t,a=n):(i=t,l=n,a=r),mg(e,i,o,a);function o(s,u){const h=u[u.length-1],m=h?h.children.indexOf(s):void 0;return l(s,m,h)}}const $0={}.hasOwnProperty,n9={};function r9(e,t){const n=t||n9,r=new Map,a=new Map,i=new Map,l={...qx,...n.handlers},o={all:u,applyData:i9,definitionById:r,footnoteById:a,footnoteCounts:i,footnoteOrder:[],handlers:l,one:s,options:n,patch:a9,wrap:o9};return Yh(e,function(h){if(h.type==="definition"||h.type==="footnoteDefinition"){const m=h.type==="definition"?r:a,f=String(h.identifier).toUpperCase();m.has(f)||m.set(f,h)}}),o;function s(h,m){const f=h.type,p=o.handlers[f];if($0.call(o.handlers,f)&&p)return p(o,h,m);if(o.options.passThrough&&o.options.passThrough.includes(f)){if("children"in h){const{children:x,...S}=h,g=Ao(S);return g.children=o.all(h),g}return Ao(h)}return(o.options.unknownHandler||l9)(o,h,m)}function u(h){const m=[];if("children"in h){const f=h.children;let p=-1;for(;++p<f.length;){const v=o.one(f[p],h);if(v){if(p&&f[p-1].type==="break"&&(!Array.isArray(v)&&v.type==="text"&&(v.value=$d(v.value)),!Array.isArray(v)&&v.type==="element")){const x=v.children[0];x&&x.type==="text"&&(x.value=$d(x.value))}Array.isArray(v)?m.push(...v):m.push(v)}}}return m}}function a9(e,t){e.position&&(t.position=q6(e))}function i9(e,t){let n=t;if(e&&e.data){const r=e.data.hName,a=e.data.hChildren,i=e.data.hProperties;if(typeof r=="string")if(n.type==="element")n.tagName=r;else{const l="children"in n?n.children:[n];n={type:"element",tagName:r,properties:{},children:l}}n.type==="element"&&i&&Object.assign(n.properties,Ao(i)),"children"in n&&n.children&&a!==null&&a!==void 0&&(n.children=a)}return n}function l9(e,t){const n=t.data||{},r="value"in t&&!($0.call(n,"hProperties")||$0.call(n,"hChildren"))?{type:"text",value:t.value}:{type:"element",tagName:"div",properties:{},children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function o9(e,t){const n=[];let r=-1;for(t&&n.push({type:"text",value:`
`});++r<e.length;)r&&n.push({type:"text",value:`
`}),n.push(e[r]);return t&&e.length>0&&n.push({type:"text",value:`
`}),n}function $d(e){let t=0,n=e.charCodeAt(t);for(;n===9||n===32;)t++,n=e.charCodeAt(t);return e.slice(t)}function kd(e,t){const n=r9(e,t),r=n.one(e,void 0),a=Qx(n),i=Array.isArray(r)?{type:"root",children:r}:r||{type:"root",children:[]};return a&&i.children.push({type:"text",value:`
`},a),i}function s9(e,t){return e&&"run"in e?async function(n,r){const a=kd(n,{file:r,...t});await e.run(a,r)}:function(n,r){return kd(n,{file:r,...e||t})}}function _d(e){if(e)throw e}var eo=Object.prototype.hasOwnProperty,dg=Object.prototype.toString,Sd=Object.defineProperty,Dd=Object.getOwnPropertyDescriptor,Cd=function(t){return typeof Array.isArray=="function"?Array.isArray(t):dg.call(t)==="[object Array]"},Ed=function(t){if(!t||dg.call(t)!=="[object Object]")return!1;var n=eo.call(t,"constructor"),r=t.constructor&&t.constructor.prototype&&eo.call(t.constructor.prototype,"isPrototypeOf");if(t.constructor&&!n&&!r)return!1;var a;for(a in t);return typeof a>"u"||eo.call(t,a)},zd=function(t,n){Sd&&n.name==="__proto__"?Sd(t,n.name,{enumerable:!0,configurable:!0,value:n.newValue,writable:!0}):t[n.name]=n.newValue},Fd=function(t,n){if(n==="__proto__")if(eo.call(t,n)){if(Dd)return Dd(t,n).value}else return;return t[n]},u9=function e(){var t,n,r,a,i,l,o=arguments[0],s=1,u=arguments.length,h=!1;for(typeof o=="boolean"&&(h=o,o=arguments[1]||{},s=2),(o==null||typeof o!="object"&&typeof o!="function")&&(o={});s<u;++s)if(t=arguments[s],t!=null)for(n in t)r=Fd(o,n),a=Fd(t,n),o!==a&&(h&&a&&(Ed(a)||(i=Cd(a)))?(i?(i=!1,l=r&&Cd(r)?r:[]):l=r&&Ed(r)?r:{},zd(o,{name:n,newValue:e(h,l,a)})):typeof a<"u"&&zd(o,{name:n,newValue:a}));return o};const Xs=zf(u9);function k0(e){if(typeof e!="object"||e===null)return!1;const t=Object.getPrototypeOf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function h9(){const e=[],t={run:n,use:r};return t;function n(...a){let i=-1;const l=a.pop();if(typeof l!="function")throw new TypeError("Expected function as last argument, not "+l);o(null,...a);function o(s,...u){const h=e[++i];let m=-1;if(s){l(s);return}for(;++m<a.length;)(u[m]===null||u[m]===void 0)&&(u[m]=a[m]);a=u,h?c9(h,o)(...u):l(null,...u)}}function r(a){if(typeof a!="function")throw new TypeError("Expected `middelware` to be a function, not "+a);return e.push(a),t}}function c9(e,t){let n;return r;function r(...l){const o=e.length>l.length;let s;o&&l.push(a);try{s=e.apply(this,l)}catch(u){const h=u;if(o&&n)throw h;return a(h)}o||(s&&s.then&&typeof s.then=="function"?s.then(i,a):s instanceof Error?a(s):i(s))}function a(l,...o){n||(n=!0,t(l,...o))}function i(l){a(null,l)}}const mn={basename:m9,dirname:d9,extname:f9,join:p9,sep:"/"};function m9(e,t){if(t!==void 0&&typeof t!="string")throw new TypeError('"ext" argument must be a string');rl(e);let n=0,r=-1,a=e.length,i;if(t===void 0||t.length===0||t.length>e.length){for(;a--;)if(e.codePointAt(a)===47){if(i){n=a+1;break}}else r<0&&(i=!0,r=a+1);return r<0?"":e.slice(n,r)}if(t===e)return"";let l=-1,o=t.length-1;for(;a--;)if(e.codePointAt(a)===47){if(i){n=a+1;break}}else l<0&&(i=!0,l=a+1),o>-1&&(e.codePointAt(a)===t.codePointAt(o--)?o<0&&(r=a):(o=-1,r=l));return n===r?r=l:r<0&&(r=e.length),e.slice(n,r)}function d9(e){if(rl(e),e.length===0)return".";let t=-1,n=e.length,r;for(;--n;)if(e.codePointAt(n)===47){if(r){t=n;break}}else r||(r=!0);return t<0?e.codePointAt(0)===47?"/":".":t===1&&e.codePointAt(0)===47?"//":e.slice(0,t)}function f9(e){rl(e);let t=e.length,n=-1,r=0,a=-1,i=0,l;for(;t--;){const o=e.codePointAt(t);if(o===47){if(l){r=t+1;break}continue}n<0&&(l=!0,n=t+1),o===46?a<0?a=t:i!==1&&(i=1):a>-1&&(i=-1)}return a<0||n<0||i===0||i===1&&a===n-1&&a===r+1?"":e.slice(a,n)}function p9(...e){let t=-1,n;for(;++t<e.length;)rl(e[t]),e[t]&&(n=n===void 0?e[t]:n+"/"+e[t]);return n===void 0?".":b9(n)}function b9(e){rl(e);const t=e.codePointAt(0)===47;let n=g9(e,!t);return n.length===0&&!t&&(n="."),n.length>0&&e.codePointAt(e.length-1)===47&&(n+="/"),t?"/"+n:n}function g9(e,t){let n="",r=0,a=-1,i=0,l=-1,o,s;for(;++l<=e.length;){if(l<e.length)o=e.codePointAt(l);else{if(o===47)break;o=47}if(o===47){if(!(a===l-1||i===1))if(a!==l-1&&i===2){if(n.length<2||r!==2||n.codePointAt(n.length-1)!==46||n.codePointAt(n.length-2)!==46){if(n.length>2){if(s=n.lastIndexOf("/"),s!==n.length-1){s<0?(n="",r=0):(n=n.slice(0,s),r=n.length-1-n.lastIndexOf("/")),a=l,i=0;continue}}else if(n.length>0){n="",r=0,a=l,i=0;continue}}t&&(n=n.length>0?n+"/..":"..",r=2)}else n.length>0?n+="/"+e.slice(a+1,l):n=e.slice(a+1,l),r=l-a-1;a=l,i=0}else o===46&&i>-1?i++:i=-1}return n}function rl(e){if(typeof e!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}const y9={cwd:v9};function v9(){return"/"}function _0(e){return!!(e!==null&&typeof e=="object"&&"href"in e&&e.href&&"protocol"in e&&e.protocol&&e.auth===void 0)}function x9(e){if(typeof e=="string")e=new URL(e);else if(!_0(e)){const t=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+e+"`");throw t.code="ERR_INVALID_ARG_TYPE",t}if(e.protocol!=="file:"){const t=new TypeError("The URL must be of scheme file");throw t.code="ERR_INVALID_URL_SCHEME",t}return w9(e)}function w9(e){if(e.hostname!==""){const r=new TypeError('File URL host must be "localhost" or empty on darwin');throw r.code="ERR_INVALID_FILE_URL_HOST",r}const t=e.pathname;let n=-1;for(;++n<t.length;)if(t.codePointAt(n)===37&&t.codePointAt(n+1)===50){const r=t.codePointAt(n+2);if(r===70||r===102){const a=new TypeError("File URL path must not include encoded / characters");throw a.code="ERR_INVALID_FILE_URL_PATH",a}}return decodeURIComponent(t)}const Ys=["history","path","basename","stem","extname","dirname"];class fg{constructor(t){let n;t?_0(t)?n={path:t}:typeof t=="string"||$9(t)?n={value:t}:n=t:n={},this.cwd="cwd"in n?"":y9.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let r=-1;for(;++r<Ys.length;){const i=Ys[r];i in n&&n[i]!==void 0&&n[i]!==null&&(this[i]=i==="history"?[...n[i]]:n[i])}let a;for(a in n)Ys.includes(a)||(this[a]=n[a])}get basename(){return typeof this.path=="string"?mn.basename(this.path):void 0}set basename(t){eu(t,"basename"),Js(t,"basename"),this.path=mn.join(this.dirname||"",t)}get dirname(){return typeof this.path=="string"?mn.dirname(this.path):void 0}set dirname(t){Ad(this.basename,"dirname"),this.path=mn.join(t||"",this.basename)}get extname(){return typeof this.path=="string"?mn.extname(this.path):void 0}set extname(t){if(Js(t,"extname"),Ad(this.dirname,"extname"),t){if(t.codePointAt(0)!==46)throw new Error("`extname` must start with `.`");if(t.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=mn.join(this.dirname,this.stem+(t||""))}get path(){return this.history[this.history.length-1]}set path(t){_0(t)&&(t=x9(t)),eu(t,"path"),this.path!==t&&this.history.push(t)}get stem(){return typeof this.path=="string"?mn.basename(this.path,this.extname):void 0}set stem(t){eu(t,"stem"),Js(t,"stem"),this.path=mn.join(this.dirname||"",t+(this.extname||""))}fail(t,n,r){const a=this.message(t,n,r);throw a.fatal=!0,a}info(t,n,r){const a=this.message(t,n,r);return a.fatal=void 0,a}message(t,n,r){const a=new st(t,n,r);return this.path&&(a.name=this.path+":"+a.name,a.file=this.path),a.fatal=!1,this.messages.push(a),a}toString(t){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(t||void 0).decode(this.value)}}function Js(e,t){if(e&&e.includes(mn.sep))throw new Error("`"+t+"` cannot be a path: did not expect `"+mn.sep+"`")}function eu(e,t){if(!e)throw new Error("`"+t+"` cannot be empty")}function Ad(e,t){if(!e)throw new Error("Setting `"+t+"` requires `path` to be set too")}function $9(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const k9=function(e){const r=this.constructor.prototype,a=r[e],i=function(){return a.apply(i,arguments)};return Object.setPrototypeOf(i,r),i},_9={}.hasOwnProperty;class Jh extends k9{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=h9()}copy(){const t=new Jh;let n=-1;for(;++n<this.attachers.length;){const r=this.attachers[n];t.use(...r)}return t.data(Xs(!0,{},this.namespace)),t}data(t,n){return typeof t=="string"?arguments.length===2?(ru("data",this.frozen),this.namespace[t]=n,this):_9.call(this.namespace,t)&&this.namespace[t]||void 0:t?(ru("data",this.frozen),this.namespace=t,this):this.namespace}freeze(){if(this.frozen)return this;const t=this;for(;++this.freezeIndex<this.attachers.length;){const[n,...r]=this.attachers[this.freezeIndex];if(r[0]===!1)continue;r[0]===!0&&(r[0]=void 0);const a=n.call(t,...r);typeof a=="function"&&this.transformers.use(a)}return this.frozen=!0,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(t){this.freeze();const n=Cl(t),r=this.parser||this.Parser;return tu("parse",r),r(String(n),n)}process(t,n){const r=this;return this.freeze(),tu("process",this.parser||this.Parser),nu("process",this.compiler||this.Compiler),n?a(void 0,n):new Promise(a);function a(i,l){const o=Cl(t),s=r.parse(o);r.run(s,o,function(h,m,f){if(h||!m||!f)return u(h);const p=m,v=r.stringify(p,f);C9(v)?f.value=v:f.result=v,u(h,f)});function u(h,m){h||!m?l(h):i?i(m):n(void 0,m)}}}processSync(t){let n=!1,r;return this.freeze(),tu("processSync",this.parser||this.Parser),nu("processSync",this.compiler||this.Compiler),this.process(t,a),Pd("processSync","process",n),r;function a(i,l){n=!0,_d(i),r=l}}run(t,n,r){Td(t),this.freeze();const a=this.transformers;return!r&&typeof n=="function"&&(r=n,n=void 0),r?i(void 0,r):new Promise(i);function i(l,o){const s=Cl(n);a.run(t,s,u);function u(h,m,f){const p=m||t;h?o(h):l?l(p):r(void 0,p,f)}}}runSync(t,n){let r=!1,a;return this.run(t,n,i),Pd("runSync","run",r),a;function i(l,o){_d(l),a=o,r=!0}}stringify(t,n){this.freeze();const r=Cl(n),a=this.compiler||this.Compiler;return nu("stringify",a),Td(t),a(t,r)}use(t,...n){const r=this.attachers,a=this.namespace;if(ru("use",this.frozen),t!=null)if(typeof t=="function")s(t,n);else if(typeof t=="object")Array.isArray(t)?o(t):l(t);else throw new TypeError("Expected usable value, not `"+t+"`");return this;function i(u){if(typeof u=="function")s(u,[]);else if(typeof u=="object")if(Array.isArray(u)){const[h,...m]=u;s(h,m)}else l(u);else throw new TypeError("Expected usable value, not `"+u+"`")}function l(u){if(!("plugins"in u)&&!("settings"in u))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");o(u.plugins),u.settings&&(a.settings=Xs(!0,a.settings,u.settings))}function o(u){let h=-1;if(u!=null)if(Array.isArray(u))for(;++h<u.length;){const m=u[h];i(m)}else throw new TypeError("Expected a list of plugins, not `"+u+"`")}function s(u,h){let m=-1,f=-1;for(;++m<r.length;)if(r[m][0]===u){f=m;break}if(f===-1)r.push([u,...h]);else if(h.length>0){let[p,...v]=h;const x=r[f][1];k0(x)&&k0(p)&&(p=Xs(!0,x,p)),r[f]=[u,p,...v]}}}}const S9=new Jh().freeze();function tu(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `parser`")}function nu(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `compiler`")}function ru(e,t){if(t)throw new Error("Cannot call `"+e+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function Td(e){if(!k0(e)||typeof e.type!="string")throw new TypeError("Expected node, got `"+e+"`")}function Pd(e,t,n){if(!n)throw new Error("`"+e+"` finished async. Use `"+t+"` instead")}function Cl(e){return D9(e)?e:new fg(e)}function D9(e){return!!(e&&typeof e=="object"&&"message"in e&&"messages"in e)}function C9(e){return typeof e=="string"||E9(e)}function E9(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const z9="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",Nd=[],Md={allowDangerousHtml:!0},F9=/^(https?|ircs?|mailto|xmpp)$/i,A9=[{from:"astPlugins",id:"remove-buggy-html-in-markdown-parser"},{from:"allowDangerousHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"allowNode",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowElement"},{from:"allowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowedElements"},{from:"disallowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"disallowedElements"},{from:"escapeHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"includeElementIndex",id:"#remove-includeelementindex"},{from:"includeNodeIndex",id:"change-includenodeindex-to-includeelementindex"},{from:"linkTarget",id:"remove-linktarget"},{from:"plugins",id:"change-plugins-to-remarkplugins",to:"remarkPlugins"},{from:"rawSourcePos",id:"#remove-rawsourcepos"},{from:"renderers",id:"change-renderers-to-components",to:"components"},{from:"source",id:"change-source-to-children",to:"children"},{from:"sourcePos",id:"#remove-sourcepos"},{from:"transformImageUri",id:"#add-urltransform",to:"urlTransform"},{from:"transformLinkUri",id:"#add-urltransform",to:"urlTransform"}];function T9(e){const t=e.allowedElements,n=e.allowElement,r=e.children||"",a=e.className,i=e.components,l=e.disallowedElements,o=e.rehypePlugins||Nd,s=e.remarkPlugins||Nd,u=e.remarkRehypeOptions?{...e.remarkRehypeOptions,...Md}:Md,h=e.skipHtml,m=e.unwrapDisallowed,f=e.urlTransform||P9,p=S9().use(px).use(s).use(s9,u).use(o),v=new fg;typeof r=="string"&&(v.value=r);for(const y of A9)Object.hasOwn(e,y.from)&&(""+y.from+(y.to?"use `"+y.to+"` instead":"remove it")+z9+y.id,void 0);const x=p.parse(v);let S=p.runSync(x,v);return a&&(S={type:"element",tagName:"div",properties:{className:a},children:S.type==="root"?S.children:[S]}),Yh(S,g),K6(S,{Fragment:N.Fragment,components:i,ignoreInvalidStyle:!0,jsx:N.jsx,jsxs:N.jsxs,passKeys:!0,passNode:!0});function g(y,$,F){if(y.type==="raw"&&F&&typeof $=="number")return h?F.children.splice($,1):F.children[$]={type:"text",value:y.value},$;if(y.type==="element"){let P;for(P in Qs)if(Object.hasOwn(Qs,P)&&Object.hasOwn(y.properties,P)){const E=y.properties[P],M=Qs[P];(M===null||M.includes(y.tagName))&&(y.properties[P]=f(String(E||""),P,y))}}if(y.type==="element"){let P=t?!t.includes(y.tagName):l?l.includes(y.tagName):!1;if(!P&&n&&typeof $=="number"&&(P=!n(y,$,F)),P&&F&&typeof $=="number")return m&&y.children?F.children.splice($,1,...y.children):F.children.splice($,1),$}}}function P9(e){const t=e.indexOf(":"),n=e.indexOf("?"),r=e.indexOf("#"),a=e.indexOf("/");return t<0||a>-1&&t>a||n>-1&&t>n||r>-1&&t>r||F9.test(e.slice(0,t))?e:""}function N9(e,t){const n=String(e);let r=n.indexOf(t),a=r,i=0,l=0;for(;r!==-1;)r===a?++i>l&&(l=i):i=1,a=r+t.length,r=n.indexOf(t,a);return l}function M9(){return{enter:{mathFlow:e,mathFlowFenceMeta:t,mathText:i},exit:{mathFlow:a,mathFlowFence:r,mathFlowFenceMeta:n,mathFlowValue:o,mathText:l,mathTextData:o}};function e(s){const u={type:"element",tagName:"code",properties:{className:["language-math","math-display"]},children:[]};this.enter({type:"math",meta:null,value:"",data:{hName:"pre",hChildren:[u]}},s)}function t(){this.buffer()}function n(){const s=this.resume(),u=this.stack[this.stack.length-1];u.type,u.meta=s}function r(){this.data.mathFlowInside||(this.buffer(),this.data.mathFlowInside=!0)}function a(s){const u=this.resume().replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),h=this.stack[this.stack.length-1];h.type,this.exit(s),h.value=u;const m=h.data.hChildren[0];m.type,m.tagName,m.children.push({type:"text",value:u}),this.data.mathFlowInside=void 0}function i(s){this.enter({type:"inlineMath",value:"",data:{hName:"code",hProperties:{className:["language-math","math-inline"]},hChildren:[]}},s),this.buffer()}function l(s){const u=this.resume(),h=this.stack[this.stack.length-1];h.type,this.exit(s),h.value=u,h.data.hChildren.push({type:"text",value:u})}function o(s){this.config.enter.data.call(this,s),this.config.exit.data.call(this,s)}}function R9(e){let t=(e||{}).singleDollarTextMath;return t==null&&(t=!0),r.peek=a,{unsafe:[{character:"\r",inConstruct:"mathFlowMeta"},{character:`
`,inConstruct:"mathFlowMeta"},{character:"$",after:t?void 0:"\\$",inConstruct:"phrasing"},{character:"$",inConstruct:"mathFlowMeta"},{atBreak:!0,character:"$",after:"\\$"}],handlers:{math:n,inlineMath:r}};function n(i,l,o,s){const u=i.value||"",h=o.createTracker(s),m="$".repeat(Math.max(N9(u,"$")+1,2)),f=o.enter("mathFlow");let p=h.move(m);if(i.meta){const v=o.enter("mathFlowMeta");p+=h.move(o.safe(i.meta,{after:`
`,before:p,encode:["$"],...h.current()})),v()}return p+=h.move(`
`),u&&(p+=h.move(u+`
`)),p+=h.move(m),f(),p}function r(i,l,o){let s=i.value||"",u=1;for(t||u++;new RegExp("(^|[^$])"+"\\$".repeat(u)+"([^$]|$)").test(s);)u++;const h="$".repeat(u);/[^ \r\n]/.test(s)&&(/^[ \r\n]/.test(s)&&/[ \r\n]$/.test(s)||/^\$|\$$/.test(s))&&(s=" "+s+" ");let m=-1;for(;++m<o.unsafe.length;){const f=o.unsafe[m];if(!f.atBreak)continue;const p=o.compilePattern(f);let v;for(;v=p.exec(s);){let x=v.index;s.codePointAt(x)===10&&s.codePointAt(x-1)===13&&x--,s=s.slice(0,x)+" "+s.slice(v.index+1)}}return h+s+h}function a(){return"$"}}const I9={tokenize:O9,concrete:!0,name:"mathFlow"},Rd={tokenize:B9,partial:!0};function O9(e,t,n){const r=this,a=r.events[r.events.length-1],i=a&&a[1].type==="linePrefix"?a[2].sliceSerialize(a[1],!0).length:0;let l=0;return o;function o(y){return e.enter("mathFlow"),e.enter("mathFlowFence"),e.enter("mathFlowFenceSequence"),s(y)}function s(y){return y===36?(e.consume(y),l++,s):l<2?n(y):(e.exit("mathFlowFenceSequence"),we(e,u,"whitespace")(y))}function u(y){return y===null||ee(y)?m(y):(e.enter("mathFlowFenceMeta"),e.enter("chunkString",{contentType:"string"}),h(y))}function h(y){return y===null||ee(y)?(e.exit("chunkString"),e.exit("mathFlowFenceMeta"),m(y)):y===36?n(y):(e.consume(y),h)}function m(y){return e.exit("mathFlowFence"),r.interrupt?t(y):e.attempt(Rd,f,S)(y)}function f(y){return e.attempt({tokenize:g,partial:!0},S,p)(y)}function p(y){return(i?we(e,v,"linePrefix",i+1):v)(y)}function v(y){return y===null?S(y):ee(y)?e.attempt(Rd,f,S)(y):(e.enter("mathFlowValue"),x(y))}function x(y){return y===null||ee(y)?(e.exit("mathFlowValue"),v(y)):(e.consume(y),x)}function S(y){return e.exit("mathFlow"),t(y)}function g(y,$,F){let P=0;return we(y,E,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4);function E(O){return y.enter("mathFlowFence"),y.enter("mathFlowFenceSequence"),M(O)}function M(O){return O===36?(P++,y.consume(O),M):P<l?F(O):(y.exit("mathFlowFenceSequence"),we(y,I,"whitespace")(O))}function I(O){return O===null||ee(O)?(y.exit("mathFlowFence"),$(O)):F(O)}}}function B9(e,t,n){const r=this;return a;function a(l){return l===null?t(l):(e.enter("lineEnding"),e.consume(l),e.exit("lineEnding"),i)}function i(l){return r.parser.lazy[r.now().line]?n(l):t(l)}}function L9(e){let n=(e||{}).singleDollarTextMath;return n==null&&(n=!0),{tokenize:r,resolve:q9,previous:j9,name:"mathText"};function r(a,i,l){let o=0,s,u;return h;function h(x){return a.enter("mathText"),a.enter("mathTextSequence"),m(x)}function m(x){return x===36?(a.consume(x),o++,m):o<2&&!n?l(x):(a.exit("mathTextSequence"),f(x))}function f(x){return x===null?l(x):x===36?(u=a.enter("mathTextSequence"),s=0,v(x)):x===32?(a.enter("space"),a.consume(x),a.exit("space"),f):ee(x)?(a.enter("lineEnding"),a.consume(x),a.exit("lineEnding"),f):(a.enter("mathTextData"),p(x))}function p(x){return x===null||x===32||x===36||ee(x)?(a.exit("mathTextData"),f(x)):(a.consume(x),p)}function v(x){return x===36?(a.consume(x),s++,v):s===o?(a.exit("mathTextSequence"),a.exit("mathText"),i(x)):(u.type="mathTextData",p(x))}}}function q9(e){let t=e.length-4,n=3,r,a;if((e[n][1].type==="lineEnding"||e[n][1].type==="space")&&(e[t][1].type==="lineEnding"||e[t][1].type==="space")){for(r=n;++r<t;)if(e[r][1].type==="mathTextData"){e[t][1].type="mathTextPadding",e[n][1].type="mathTextPadding",n+=2,t-=2;break}}for(r=n-1,t++;++r<=t;)a===void 0?r!==t&&e[r][1].type!=="lineEnding"&&(a=r):(r===t||e[r][1].type==="lineEnding")&&(e[a][1].type="mathTextData",r!==a+2&&(e[a][1].end=e[r-1][1].end,e.splice(a+2,r-a-2),t-=r-a-2,r=a+2),a=void 0);return e}function j9(e){return e!==36||this.events[this.events.length-1][1].type==="characterEscape"}function H9(e){return{flow:{36:I9},text:{36:L9(e)}}}class zt{constructor(t,n,r){this.lexer=void 0,this.start=void 0,this.end=void 0,this.lexer=t,this.start=n,this.end=r}static range(t,n){return n?!t||!t.loc||!n.loc||t.loc.lexer!==n.loc.lexer?null:new zt(t.loc.lexer,t.loc.start,n.loc.end):t&&t.loc}}class Ut{constructor(t,n){this.text=void 0,this.loc=void 0,this.noexpand=void 0,this.treatAsRelax=void 0,this.text=t,this.loc=n}range(t,n){return new Ut(n,zt.range(this,t))}}class H{constructor(t,n){this.name=void 0,this.position=void 0,this.length=void 0,this.rawMessage=void 0;var r="KaTeX parse error: "+t,a,i,l=n&&n.loc;if(l&&l.start<=l.end){var o=l.lexer.input;a=l.start,i=l.end,a===o.length?r+=" at end of input: ":r+=" at position "+(a+1)+": ";var s=o.slice(a,i).replace(/[^]/g,"$&̲"),u;a>15?u="…"+o.slice(a-15,a):u=o.slice(0,a);var h;i+15<o.length?h=o.slice(i,i+15)+"…":h=o.slice(i),r+=u+s+h}var m=new Error(r);return m.name="ParseError",m.__proto__=H.prototype,m.position=a,a!=null&&i!=null&&(m.length=i-a),m.rawMessage=t,m}}H.prototype.__proto__=Error.prototype;var U9=function(t,n){return t.indexOf(n)!==-1},W9=function(t,n){return t===void 0?n:t},V9=/([A-Z])/g,K9=function(t){return t.replace(V9,"-$1").toLowerCase()},Q9={"&":"&amp;",">":"&gt;","<":"&lt;",'"':"&quot;","'":"&#x27;"},G9=/[&><"']/g;function Z9(e){return String(e).replace(G9,t=>Q9[t])}var pg=function e(t){return t.type==="ordgroup"||t.type==="color"?t.body.length===1?e(t.body[0]):t:t.type==="font"?e(t.body):t},X9=function(t){var n=pg(t);return n.type==="mathord"||n.type==="textord"||n.type==="atom"},Y9=function(t){if(!t)throw new Error("Expected non-null, but got "+String(t));return t},J9=function(t){var n=/^[\x00-\x20]*([^\\/#?]*?)(:|&#0*58|&#x0*3a|&colon)/i.exec(t);return n?n[2]!==":"||!/^[a-zA-Z][a-zA-Z0-9+\-.]*$/.test(n[1])?null:n[1].toLowerCase():"_relative"},te={contains:U9,deflt:W9,escape:Z9,hyphenate:K9,getBaseElem:pg,isCharacterBox:X9,protocolFromUrl:J9},to={displayMode:{type:"boolean",description:"Render math in display mode, which puts the math in display style (so \\int and \\sum are large, for example), and centers the math on the page on its own line.",cli:"-d, --display-mode"},output:{type:{enum:["htmlAndMathml","html","mathml"]},description:"Determines the markup language of the output.",cli:"-F, --format <type>"},leqno:{type:"boolean",description:"Render display math in leqno style (left-justified tags)."},fleqn:{type:"boolean",description:"Render display math flush left."},throwOnError:{type:"boolean",default:!0,cli:"-t, --no-throw-on-error",cliDescription:"Render errors (in the color given by --error-color) instead of throwing a ParseError exception when encountering an error."},errorColor:{type:"string",default:"#cc0000",cli:"-c, --error-color <color>",cliDescription:"A color string given in the format 'rgb' or 'rrggbb' (no #). This option determines the color of errors rendered by the -t option.",cliProcessor:e=>"#"+e},macros:{type:"object",cli:"-m, --macro <def>",cliDescription:"Define custom macro of the form '\\foo:expansion' (use multiple -m arguments for multiple macros).",cliDefault:[],cliProcessor:(e,t)=>(t.push(e),t)},minRuleThickness:{type:"number",description:"Specifies a minimum thickness, in ems, for fraction lines, `\\sqrt` top lines, `{array}` vertical lines, `\\hline`, `\\hdashline`, `\\underline`, `\\overline`, and the borders of `\\fbox`, `\\boxed`, and `\\fcolorbox`.",processor:e=>Math.max(0,e),cli:"--min-rule-thickness <size>",cliProcessor:parseFloat},colorIsTextColor:{type:"boolean",description:"Makes \\color behave like LaTeX's 2-argument \\textcolor, instead of LaTeX's one-argument \\color mode change.",cli:"-b, --color-is-text-color"},strict:{type:[{enum:["warn","ignore","error"]},"boolean","function"],description:"Turn on strict / LaTeX faithfulness mode, which throws an error if the input uses features that are not supported by LaTeX.",cli:"-S, --strict",cliDefault:!1},trust:{type:["boolean","function"],description:"Trust the input, enabling all HTML features such as \\url.",cli:"-T, --trust"},maxSize:{type:"number",default:1/0,description:"If non-zero, all user-specified sizes, e.g. in \\rule{500em}{500em}, will be capped to maxSize ems. Otherwise, elements and spaces can be arbitrarily large",processor:e=>Math.max(0,e),cli:"-s, --max-size <n>",cliProcessor:parseInt},maxExpand:{type:"number",default:1e3,description:"Limit the number of macro expansions to the specified number, to prevent e.g. infinite macro loops. If set to Infinity, the macro expander will try to fully expand as in LaTeX.",processor:e=>Math.max(0,e),cli:"-e, --max-expand <n>",cliProcessor:e=>e==="Infinity"?1/0:parseInt(e)},globalGroup:{type:"boolean",cli:!1}};function ew(e){if(e.default)return e.default;var t=e.type,n=Array.isArray(t)?t[0]:t;if(typeof n!="string")return n.enum[0];switch(n){case"boolean":return!1;case"string":return"";case"number":return 0;case"object":return{}}}class ec{constructor(t){this.displayMode=void 0,this.output=void 0,this.leqno=void 0,this.fleqn=void 0,this.throwOnError=void 0,this.errorColor=void 0,this.macros=void 0,this.minRuleThickness=void 0,this.colorIsTextColor=void 0,this.strict=void 0,this.trust=void 0,this.maxSize=void 0,this.maxExpand=void 0,this.globalGroup=void 0,t=t||{};for(var n in to)if(to.hasOwnProperty(n)){var r=to[n];this[n]=t[n]!==void 0?r.processor?r.processor(t[n]):t[n]:ew(r)}}reportNonstrict(t,n,r){var a=this.strict;if(typeof a=="function"&&(a=a(t,n,r)),!(!a||a==="ignore")){if(a===!0||a==="error")throw new H("LaTeX-incompatible input and strict mode is set to 'error': "+(n+" ["+t+"]"),r);a==="warn"?typeof console<"u"&&console.warn("LaTeX-incompatible input and strict mode is set to 'warn': "+(n+" ["+t+"]")):typeof console<"u"&&console.warn("LaTeX-incompatible input and strict mode is set to "+("unrecognized '"+a+"': "+n+" ["+t+"]"))}}useStrictBehavior(t,n,r){var a=this.strict;if(typeof a=="function")try{a=a(t,n,r)}catch{a="error"}return!a||a==="ignore"?!1:a===!0||a==="error"?!0:a==="warn"?(typeof console<"u"&&console.warn("LaTeX-incompatible input and strict mode is set to 'warn': "+(n+" ["+t+"]")),!1):(typeof console<"u"&&console.warn("LaTeX-incompatible input and strict mode is set to "+("unrecognized '"+a+"': "+n+" ["+t+"]")),!1)}isTrusted(t){if(t.url&&!t.protocol){var n=te.protocolFromUrl(t.url);if(n==null)return!1;t.protocol=n}var r=typeof this.trust=="function"?this.trust(t):this.trust;return!!r}}class Yn{constructor(t,n,r){this.id=void 0,this.size=void 0,this.cramped=void 0,this.id=t,this.size=n,this.cramped=r}sup(){return dn[tw[this.id]]}sub(){return dn[nw[this.id]]}fracNum(){return dn[rw[this.id]]}fracDen(){return dn[aw[this.id]]}cramp(){return dn[iw[this.id]]}text(){return dn[lw[this.id]]}isTight(){return this.size>=2}}var tc=0,To=1,Da=2,Rn=3,Vi=4,jt=5,Na=6,mt=7,dn=[new Yn(tc,0,!1),new Yn(To,0,!0),new Yn(Da,1,!1),new Yn(Rn,1,!0),new Yn(Vi,2,!1),new Yn(jt,2,!0),new Yn(Na,3,!1),new Yn(mt,3,!0)],tw=[Vi,jt,Vi,jt,Na,mt,Na,mt],nw=[jt,jt,jt,jt,mt,mt,mt,mt],rw=[Da,Rn,Vi,jt,Na,mt,Na,mt],aw=[Rn,Rn,jt,jt,mt,mt,mt,mt],iw=[To,To,Rn,Rn,jt,jt,mt,mt],lw=[tc,To,Da,Rn,Da,Rn,Da,Rn],ae={DISPLAY:dn[tc],TEXT:dn[Da],SCRIPT:dn[Vi],SCRIPTSCRIPT:dn[Na]},S0=[{name:"latin",blocks:[[256,591],[768,879]]},{name:"cyrillic",blocks:[[1024,1279]]},{name:"armenian",blocks:[[1328,1423]]},{name:"brahmic",blocks:[[2304,4255]]},{name:"georgian",blocks:[[4256,4351]]},{name:"cjk",blocks:[[12288,12543],[19968,40879],[65280,65376]]},{name:"hangul",blocks:[[44032,55215]]}];function ow(e){for(var t=0;t<S0.length;t++)for(var n=S0[t],r=0;r<n.blocks.length;r++){var a=n.blocks[r];if(e>=a[0]&&e<=a[1])return n.name}return null}var no=[];S0.forEach(e=>e.blocks.forEach(t=>no.push(...t)));function bg(e){for(var t=0;t<no.length;t+=2)if(e>=no[t]&&e<=no[t+1])return!0;return!1}var na=80,sw=function(t,n){return"M95,"+(622+t+n)+`
c-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14
c0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54
c44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10
s173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429
c69,-144,104.5,-217.7,106.5,-221
l`+t/2.075+" -"+t+`
c5.3,-9.3,12,-14,20,-14
H400000v`+(40+t)+`H845.2724
s-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7
c-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z
M`+(834+t)+" "+n+"h400000v"+(40+t)+"h-400000z"},uw=function(t,n){return"M263,"+(601+t+n)+`c0.7,0,18,39.7,52,119
c34,79.3,68.167,158.7,102.5,238c34.3,79.3,51.8,119.3,52.5,120
c340,-704.7,510.7,-1060.3,512,-1067
l`+t/2.084+" -"+t+`
c4.7,-7.3,11,-11,19,-11
H40000v`+(40+t)+`H1012.3
s-271.3,567,-271.3,567c-38.7,80.7,-84,175,-136,283c-52,108,-89.167,185.3,-111.5,232
c-22.3,46.7,-33.8,70.3,-34.5,71c-4.7,4.7,-12.3,7,-23,7s-12,-1,-12,-1
s-109,-253,-109,-253c-72.7,-168,-109.3,-252,-110,-252c-10.7,8,-22,16.7,-34,26
c-22,17.3,-33.3,26,-34,26s-26,-26,-26,-26s76,-59,76,-59s76,-60,76,-60z
M`+(1001+t)+" "+n+"h400000v"+(40+t)+"h-400000z"},hw=function(t,n){return"M983 "+(10+t+n)+`
l`+t/3.13+" -"+t+`
c4,-6.7,10,-10,18,-10 H400000v`+(40+t)+`
H1013.1s-83.4,268,-264.1,840c-180.7,572,-277,876.3,-289,913c-4.7,4.7,-12.7,7,-24,7
s-12,0,-12,0c-1.3,-3.3,-3.7,-11.7,-7,-25c-35.3,-125.3,-106.7,-373.3,-214,-744
c-10,12,-21,25,-33,39s-32,39,-32,39c-6,-5.3,-15,-14,-27,-26s25,-30,25,-30
c26.7,-32.7,52,-63,76,-91s52,-60,52,-60s208,722,208,722
c56,-175.3,126.3,-397.3,211,-666c84.7,-268.7,153.8,-488.2,207.5,-658.5
c53.7,-170.3,84.5,-266.8,92.5,-289.5z
M`+(1001+t)+" "+n+"h400000v"+(40+t)+"h-400000z"},cw=function(t,n){return"M424,"+(2398+t+n)+`
c-1.3,-0.7,-38.5,-172,-111.5,-514c-73,-342,-109.8,-513.3,-110.5,-514
c0,-2,-10.7,14.3,-32,49c-4.7,7.3,-9.8,15.7,-15.5,25c-5.7,9.3,-9.8,16,-12.5,20
s-5,7,-5,7c-4,-3.3,-8.3,-7.7,-13,-13s-13,-13,-13,-13s76,-122,76,-122s77,-121,77,-121
s209,968,209,968c0,-2,84.7,-361.7,254,-1079c169.3,-717.3,254.7,-1077.7,256,-1081
l`+t/4.223+" -"+t+`c4,-6.7,10,-10,18,-10 H400000
v`+(40+t)+`H1014.6
s-87.3,378.7,-272.6,1166c-185.3,787.3,-279.3,1182.3,-282,1185
c-2,6,-10,9,-24,9
c-8,0,-12,-0.7,-12,-2z M`+(1001+t)+" "+n+`
h400000v`+(40+t)+"h-400000z"},mw=function(t,n){return"M473,"+(2713+t+n)+`
c339.3,-1799.3,509.3,-2700,510,-2702 l`+t/5.298+" -"+t+`
c3.3,-7.3,9.3,-11,18,-11 H400000v`+(40+t)+`H1017.7
s-90.5,478,-276.2,1466c-185.7,988,-279.5,1483,-281.5,1485c-2,6,-10,9,-24,9
c-8,0,-12,-0.7,-12,-2c0,-1.3,-5.3,-32,-16,-92c-50.7,-293.3,-119.7,-693.3,-207,-1200
c0,-1.3,-5.3,8.7,-16,30c-10.7,21.3,-21.3,42.7,-32,64s-16,33,-16,33s-26,-26,-26,-26
s76,-153,76,-153s77,-151,77,-151c0.7,0.7,35.7,202,105,604c67.3,400.7,102,602.7,104,
606zM`+(1001+t)+" "+n+"h400000v"+(40+t)+"H1017.7z"},dw=function(t){var n=t/2;return"M400000 "+t+" H0 L"+n+" 0 l65 45 L145 "+(t-80)+" H400000z"},fw=function(t,n,r){var a=r-54-n-t;return"M702 "+(t+n)+"H400000"+(40+t)+`
H742v`+a+`l-4 4-4 4c-.667.7 -2 1.5-4 2.5s-4.167 1.833-6.5 2.5-5.5 1-9.5 1
h-12l-28-84c-16.667-52-96.667 -294.333-240-727l-212 -643 -85 170
c-4-3.333-8.333-7.667-13 -13l-13-13l77-155 77-156c66 199.333 139 419.667
219 661 l218 661zM702 `+n+"H400000v"+(40+t)+"H742z"},pw=function(t,n,r){n=1e3*n;var a="";switch(t){case"sqrtMain":a=sw(n,na);break;case"sqrtSize1":a=uw(n,na);break;case"sqrtSize2":a=hw(n,na);break;case"sqrtSize3":a=cw(n,na);break;case"sqrtSize4":a=mw(n,na);break;case"sqrtTall":a=fw(n,na,r)}return a},bw=function(t,n){switch(t){case"⎜":return"M291 0 H417 V"+n+" H291z M291 0 H417 V"+n+" H291z";case"∣":return"M145 0 H188 V"+n+" H145z M145 0 H188 V"+n+" H145z";case"∥":return"M145 0 H188 V"+n+" H145z M145 0 H188 V"+n+" H145z"+("M367 0 H410 V"+n+" H367z M367 0 H410 V"+n+" H367z");case"⎟":return"M457 0 H583 V"+n+" H457z M457 0 H583 V"+n+" H457z";case"⎢":return"M319 0 H403 V"+n+" H319z M319 0 H403 V"+n+" H319z";case"⎥":return"M263 0 H347 V"+n+" H263z M263 0 H347 V"+n+" H263z";case"⎪":return"M384 0 H504 V"+n+" H384z M384 0 H504 V"+n+" H384z";case"⏐":return"M312 0 H355 V"+n+" H312z M312 0 H355 V"+n+" H312z";case"‖":return"M257 0 H300 V"+n+" H257z M257 0 H300 V"+n+" H257z"+("M478 0 H521 V"+n+" H478z M478 0 H521 V"+n+" H478z");default:return""}},Id={doubleleftarrow:`M262 157
l10-10c34-36 62.7-77 86-123 3.3-8 5-13.3 5-16 0-5.3-6.7-8-20-8-7.3
 0-12.2.5-14.5 1.5-2.3 1-4.8 4.5-7.5 10.5-49.3 97.3-121.7 169.3-217 216-28
 14-57.3 25-88 33-6.7 2-11 3.8-13 5.5-2 1.7-3 4.2-3 7.5s1 5.8 3 7.5
c2 1.7 6.3 3.5 13 5.5 68 17.3 128.2 47.8 180.5 91.5 52.3 43.7 93.8 96.2 124.5
 157.5 9.3 8 15.3 12.3 18 13h6c12-.7 18-4 18-10 0-2-1.7-7-5-15-23.3-46-52-87
-86-123l-10-10h399738v-40H218c328 0 0 0 0 0l-10-8c-26.7-20-65.7-43-117-69 2.7
-2 6-3.7 10-5 36.7-16 72.3-37.3 107-64l10-8h399782v-40z
m8 0v40h399730v-40zm0 194v40h399730v-40z`,doublerightarrow:`M399738 392l
-10 10c-34 36-62.7 77-86 123-3.3 8-5 13.3-5 16 0 5.3 6.7 8 20 8 7.3 0 12.2-.5
 14.5-1.5 2.3-1 4.8-4.5 7.5-10.5 49.3-97.3 121.7-169.3 217-216 28-14 57.3-25 88
-33 6.7-2 11-3.8 13-5.5 2-1.7 3-4.2 3-7.5s-1-5.8-3-7.5c-2-1.7-6.3-3.5-13-5.5-68
-17.3-128.2-47.8-180.5-91.5-52.3-43.7-93.8-96.2-124.5-157.5-9.3-8-15.3-12.3-18
-13h-6c-12 .7-18 4-18 10 0 2 1.7 7 5 15 23.3 46 52 87 86 123l10 10H0v40h399782
c-328 0 0 0 0 0l10 8c26.7 20 65.7 43 117 69-2.7 2-6 3.7-10 5-36.7 16-72.3 37.3
-107 64l-10 8H0v40zM0 157v40h399730v-40zm0 194v40h399730v-40z`,leftarrow:`M400000 241H110l3-3c68.7-52.7 113.7-120
 135-202 4-14.7 6-23 6-25 0-7.3-7-11-21-11-8 0-13.2.8-15.5 2.5-2.3 1.7-4.2 5.8
-5.5 12.5-1.3 4.7-2.7 10.3-4 17-12 48.7-34.8 92-68.5 130S65.3 228.3 18 247
c-10 4-16 7.7-18 11 0 8.7 6 14.3 18 17 47.3 18.7 87.8 47 121.5 85S196 441.3 208
 490c.7 2 1.3 5 2 9s1.2 6.7 1.5 8c.3 1.3 1 3.3 2 6s2.2 4.5 3.5 5.5c1.3 1 3.3
 1.8 6 2.5s6 1 10 1c14 0 21-3.7 21-11 0-2-2-10.3-6-25-20-79.3-65-146.7-135-202
 l-3-3h399890zM100 241v40h399900v-40z`,leftbrace:`M6 548l-6-6v-35l6-11c56-104 135.3-181.3 238-232 57.3-28.7 117
-45 179-50h399577v120H403c-43.3 7-81 15-113 26-100.7 33-179.7 91-237 174-2.7
 5-6 9-10 13-.7 1-7.3 1-20 1H6z`,leftbraceunder:`M0 6l6-6h17c12.688 0 19.313.3 20 1 4 4 7.313 8.3 10 13
 35.313 51.3 80.813 93.8 136.5 127.5 55.688 33.7 117.188 55.8 184.5 66.5.688
 0 2 .3 4 1 18.688 2.7 76 4.3 172 5h399450v120H429l-6-1c-124.688-8-235-61.7
-331-161C60.687 138.7 32.312 99.3 7 54L0 41V6z`,leftgroup:`M400000 80
H435C64 80 168.3 229.4 21 260c-5.9 1.2-18 0-18 0-2 0-3-1-3-3v-38C76 61 257 0
 435 0h399565z`,leftgroupunder:`M400000 262
H435C64 262 168.3 112.6 21 82c-5.9-1.2-18 0-18 0-2 0-3 1-3 3v38c76 158 257 219
 435 219h399565z`,leftharpoon:`M0 267c.7 5.3 3 10 7 14h399993v-40H93c3.3
-3.3 10.2-9.5 20.5-18.5s17.8-15.8 22.5-20.5c50.7-52 88-110.3 112-175 4-11.3 5
-18.3 3-21-1.3-4-7.3-6-18-6-8 0-13 .7-15 2s-4.7 6.7-8 16c-42 98.7-107.3 174.7
-196 228-6.7 4.7-10.7 8-12 10-1.3 2-2 5.7-2 11zm100-26v40h399900v-40z`,leftharpoonplus:`M0 267c.7 5.3 3 10 7 14h399993v-40H93c3.3-3.3 10.2-9.5
 20.5-18.5s17.8-15.8 22.5-20.5c50.7-52 88-110.3 112-175 4-11.3 5-18.3 3-21-1.3
-4-7.3-6-18-6-8 0-13 .7-15 2s-4.7 6.7-8 16c-42 98.7-107.3 174.7-196 228-6.7 4.7
-10.7 8-12 10-1.3 2-2 5.7-2 11zm100-26v40h399900v-40zM0 435v40h400000v-40z
m0 0v40h400000v-40z`,leftharpoondown:`M7 241c-4 4-6.333 8.667-7 14 0 5.333.667 9 2 11s5.333
 5.333 12 10c90.667 54 156 130 196 228 3.333 10.667 6.333 16.333 9 17 2 .667 5
 1 9 1h5c10.667 0 16.667-2 18-6 2-2.667 1-9.667-3-21-32-87.333-82.667-157.667
-152-211l-3-3h399907v-40zM93 281 H400000 v-40L7 241z`,leftharpoondownplus:`M7 435c-4 4-6.3 8.7-7 14 0 5.3.7 9 2 11s5.3 5.3 12
 10c90.7 54 156 130 196 228 3.3 10.7 6.3 16.3 9 17 2 .7 5 1 9 1h5c10.7 0 16.7
-2 18-6 2-2.7 1-9.7-3-21-32-87.3-82.7-157.7-152-211l-3-3h399907v-40H7zm93 0
v40h399900v-40zM0 241v40h399900v-40zm0 0v40h399900v-40z`,lefthook:`M400000 281 H103s-33-11.2-61-33.5S0 197.3 0 164s14.2-61.2 42.5
-83.5C70.8 58.2 104 47 142 47 c16.7 0 25 6.7 25 20 0 12-8.7 18.7-26 20-40 3.3
-68.7 15.7-86 37-10 12-15 25.3-15 40 0 22.7 9.8 40.7 29.5 54 19.7 13.3 43.5 21
 71.5 23h399859zM103 281v-40h399897v40z`,leftlinesegment:`M40 281 V428 H0 V94 H40 V241 H400000 v40z
M40 281 V428 H0 V94 H40 V241 H400000 v40z`,leftmapsto:`M40 281 V448H0V74H40V241H400000v40z
M40 281 V448H0V74H40V241H400000v40z`,leftToFrom:`M0 147h400000v40H0zm0 214c68 40 115.7 95.7 143 167h22c15.3 0 23
-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69-70-101l-7-8h399905v-40H95l7-8
c28.7-32 52-65.7 70-101 10.7-23.3 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 265.3
 68 321 0 361zm0-174v-40h399900v40zm100 154v40h399900v-40z`,longequal:`M0 50 h400000 v40H0z m0 194h40000v40H0z
M0 50 h400000 v40H0z m0 194h40000v40H0z`,midbrace:`M200428 334
c-100.7-8.3-195.3-44-280-108-55.3-42-101.7-93-139-153l-9-14c-2.7 4-5.7 8.7-9 14
-53.3 86.7-123.7 153-211 199-66.7 36-137.3 56.3-212 62H0V214h199568c178.3-11.7
 311.7-78.3 403-201 6-8 9.7-12 11-12 .7-.7 6.7-1 18-1s17.3.3 18 1c1.3 0 5 4 11
 12 44.7 59.3 101.3 106.3 170 141s145.3 54.3 229 60h199572v120z`,midbraceunder:`M199572 214
c100.7 8.3 195.3 44 280 108 55.3 42 101.7 93 139 153l9 14c2.7-4 5.7-8.7 9-14
 53.3-86.7 123.7-153 211-199 66.7-36 137.3-56.3 212-62h199568v120H200432c-178.3
 11.7-311.7 78.3-403 201-6 8-9.7 12-11 12-.7.7-6.7 1-18 1s-17.3-.3-18-1c-1.3 0
-5-4-11-12-44.7-59.3-101.3-106.3-170-141s-145.3-54.3-229-60H0V214z`,oiintSize1:`M512.6 71.6c272.6 0 320.3 106.8 320.3 178.2 0 70.8-47.7 177.6
-320.3 177.6S193.1 320.6 193.1 249.8c0-71.4 46.9-178.2 319.5-178.2z
m368.1 178.2c0-86.4-60.9-215.4-368.1-215.4-306.4 0-367.3 129-367.3 215.4 0 85.8
60.9 214.8 367.3 214.8 307.2 0 368.1-129 368.1-214.8z`,oiintSize2:`M757.8 100.1c384.7 0 451.1 137.6 451.1 230 0 91.3-66.4 228.8
-451.1 228.8-386.3 0-452.7-137.5-452.7-228.8 0-92.4 66.4-230 452.7-230z
m502.4 230c0-111.2-82.4-277.2-502.4-277.2s-504 166-504 277.2
c0 110 84 276 504 276s502.4-166 502.4-276z`,oiiintSize1:`M681.4 71.6c408.9 0 480.5 106.8 480.5 178.2 0 70.8-71.6 177.6
-480.5 177.6S202.1 320.6 202.1 249.8c0-71.4 70.5-178.2 479.3-178.2z
m525.8 178.2c0-86.4-86.8-215.4-525.7-215.4-437.9 0-524.7 129-524.7 215.4 0
85.8 86.8 214.8 524.7 214.8 438.9 0 525.7-129 525.7-214.8z`,oiiintSize2:`M1021.2 53c603.6 0 707.8 165.8 707.8 277.2 0 110-104.2 275.8
-707.8 275.8-606 0-710.2-165.8-710.2-275.8C311 218.8 415.2 53 1021.2 53z
m770.4 277.1c0-131.2-126.4-327.6-770.5-327.6S248.4 198.9 248.4 330.1
c0 130 128.8 326.4 772.7 326.4s770.5-196.4 770.5-326.4z`,rightarrow:`M0 241v40h399891c-47.3 35.3-84 78-110 128
-16.7 32-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20
 11 8 0 13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7
 39-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85
-40.5-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5
-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67
 151.7 139 205zm0 0v40h399900v-40z`,rightbrace:`M400000 542l
-6 6h-17c-12.7 0-19.3-.3-20-1-4-4-7.3-8.3-10-13-35.3-51.3-80.8-93.8-136.5-127.5
s-117.2-55.8-184.5-66.5c-.7 0-2-.3-4-1-18.7-2.7-76-4.3-172-5H0V214h399571l6 1
c124.7 8 235 61.7 331 161 31.3 33.3 59.7 72.7 85 118l7 13v35z`,rightbraceunder:`M399994 0l6 6v35l-6 11c-56 104-135.3 181.3-238 232-57.3
 28.7-117 45-179 50H-300V214h399897c43.3-7 81-15 113-26 100.7-33 179.7-91 237
-174 2.7-5 6-9 10-13 .7-1 7.3-1 20-1h17z`,rightgroup:`M0 80h399565c371 0 266.7 149.4 414 180 5.9 1.2 18 0 18 0 2 0
 3-1 3-3v-38c-76-158-257-219-435-219H0z`,rightgroupunder:`M0 262h399565c371 0 266.7-149.4 414-180 5.9-1.2 18 0 18
 0 2 0 3 1 3 3v38c-76 158-257 219-435 219H0z`,rightharpoon:`M0 241v40h399993c4.7-4.7 7-9.3 7-14 0-9.3
-3.7-15.3-11-18-92.7-56.7-159-133.7-199-231-3.3-9.3-6-14.7-8-16-2-1.3-7-2-15-2
-10.7 0-16.7 2-18 6-2 2.7-1 9.7 3 21 15.3 42 36.7 81.8 64 119.5 27.3 37.7 58
 69.2 92 94.5zm0 0v40h399900v-40z`,rightharpoonplus:`M0 241v40h399993c4.7-4.7 7-9.3 7-14 0-9.3-3.7-15.3-11
-18-92.7-56.7-159-133.7-199-231-3.3-9.3-6-14.7-8-16-2-1.3-7-2-15-2-10.7 0-16.7
 2-18 6-2 2.7-1 9.7 3 21 15.3 42 36.7 81.8 64 119.5 27.3 37.7 58 69.2 92 94.5z
m0 0v40h399900v-40z m100 194v40h399900v-40zm0 0v40h399900v-40z`,rightharpoondown:`M399747 511c0 7.3 6.7 11 20 11 8 0 13-.8 15-2.5s4.7-6.8
 8-15.5c40-94 99.3-166.3 178-217 13.3-8 20.3-12.3 21-13 5.3-3.3 8.5-5.8 9.5
-7.5 1-1.7 1.5-5.2 1.5-10.5s-2.3-10.3-7-15H0v40h399908c-34 25.3-64.7 57-92 95
-27.3 38-48.7 77.7-64 119-3.3 8.7-5 14-5 16zM0 241v40h399900v-40z`,rightharpoondownplus:`M399747 705c0 7.3 6.7 11 20 11 8 0 13-.8
 15-2.5s4.7-6.8 8-15.5c40-94 99.3-166.3 178-217 13.3-8 20.3-12.3 21-13 5.3-3.3
 8.5-5.8 9.5-7.5 1-1.7 1.5-5.2 1.5-10.5s-2.3-10.3-7-15H0v40h399908c-34 25.3
-64.7 57-92 95-27.3 38-48.7 77.7-64 119-3.3 8.7-5 14-5 16zM0 435v40h399900v-40z
m0-194v40h400000v-40zm0 0v40h400000v-40z`,righthook:`M399859 241c-764 0 0 0 0 0 40-3.3 68.7-15.7 86-37 10-12 15-25.3
 15-40 0-22.7-9.8-40.7-29.5-54-19.7-13.3-43.5-21-71.5-23-17.3-1.3-26-8-26-20 0
-13.3 8.7-20 26-20 38 0 71 11.2 99 33.5 0 0 7 5.6 21 16.7 14 11.2 21 33.5 21
 66.8s-14 61.2-42 83.5c-28 22.3-61 33.5-99 33.5L0 241z M0 281v-40h399859v40z`,rightlinesegment:`M399960 241 V94 h40 V428 h-40 V281 H0 v-40z
M399960 241 V94 h40 V428 h-40 V281 H0 v-40z`,rightToFrom:`M400000 167c-70.7-42-118-97.7-142-167h-23c-15.3 0-23 .3-23
 1 0 1.3 5.3 13.7 16 37 18 35.3 41.3 69 70 101l7 8H0v40h399905l-7 8c-28.7 32
-52 65.7-70 101-10.7 23.3-16 35.7-16 37 0 .7 7.7 1 23 1h23c24-69.3 71.3-125 142
-167z M100 147v40h399900v-40zM0 341v40h399900v-40z`,twoheadleftarrow:`M0 167c68 40
 115.7 95.7 143 167h22c15.3 0 23-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69
-70-101l-7-8h125l9 7c50.7 39.3 85 86 103 140h46c0-4.7-6.3-18.7-19-42-18-35.3
-40-67.3-66-96l-9-9h399716v-40H284l9-9c26-28.7 48-60.7 66-96 12.7-23.333 19
-37.333 19-42h-46c-18 54-52.3 100.7-103 140l-9 7H95l7-8c28.7-32 52-65.7 70-101
 10.7-23.333 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 71.3 68 127 0 167z`,twoheadrightarrow:`M400000 167
c-68-40-115.7-95.7-143-167h-22c-15.3 0-23 .3-23 1 0 1.3 5.3 13.7 16 37 18 35.3
 41.3 69 70 101l7 8h-125l-9-7c-50.7-39.3-85-86-103-140h-46c0 4.7 6.3 18.7 19 42
 18 35.3 40 67.3 66 96l9 9H0v40h399716l-9 9c-26 28.7-48 60.7-66 96-12.7 23.333
-19 37.333-19 42h46c18-54 52.3-100.7 103-140l9-7h125l-7 8c-28.7 32-52 65.7-70
 101-10.7 23.333-16 35.7-16 37 0 .7 7.7 1 23 1h22c27.3-71.3 75-127 143-167z`,tilde1:`M200 55.538c-77 0-168 73.953-177 73.953-3 0-7
-2.175-9-5.437L2 97c-1-2-2-4-2-6 0-4 2-7 5-9l20-12C116 12 171 0 207 0c86 0
 114 68 191 68 78 0 168-68 177-68 4 0 7 2 9 5l12 19c1 2.175 2 4.35 2 6.525 0
 4.35-2 7.613-5 9.788l-19 13.05c-92 63.077-116.937 75.308-183 76.128
-68.267.847-113-73.952-191-73.952z`,tilde2:`M344 55.266c-142 0-300.638 81.316-311.5 86.418
-8.01 3.762-22.5 10.91-23.5 5.562L1 120c-1-2-1-3-1-4 0-5 3-9 8-10l18.4-9C160.9
 31.9 283 0 358 0c148 0 188 122 331 122s314-97 326-97c4 0 8 2 10 7l7 21.114
c1 2.14 1 3.21 1 4.28 0 5.347-3 9.626-7 10.696l-22.3 12.622C852.6 158.372 751
 181.476 676 181.476c-149 0-189-126.21-332-126.21z`,tilde3:`M786 59C457 59 32 175.242 13 175.242c-6 0-10-3.457
-11-10.37L.15 138c-1-7 3-12 10-13l19.2-6.4C378.4 40.7 634.3 0 804.3 0c337 0
 411.8 157 746.8 157 328 0 754-112 773-112 5 0 10 3 11 9l1 14.075c1 8.066-.697
 16.595-6.697 17.492l-21.052 7.31c-367.9 98.146-609.15 122.696-778.15 122.696
 -338 0-409-156.573-744-156.573z`,tilde4:`M786 58C457 58 32 177.487 13 177.487c-6 0-10-3.345
-11-10.035L.15 143c-1-7 3-12 10-13l22-6.7C381.2 35 637.15 0 807.15 0c337 0 409
 177 744 177 328 0 754-127 773-127 5 0 10 3 11 9l1 14.794c1 7.805-3 13.38-9
 14.495l-20.7 5.574c-366.85 99.79-607.3 139.372-776.3 139.372-338 0-409
 -175.236-744-175.236z`,vec:`M377 20c0-5.333 1.833-10 5.5-14S391 0 397 0c4.667 0 8.667 1.667 12 5
3.333 2.667 6.667 9 10 19 6.667 24.667 20.333 43.667 41 57 7.333 4.667 11
10.667 11 18 0 6-1 10-3 12s-6.667 5-14 9c-28.667 14.667-53.667 35.667-75 63
-1.333 1.333-3.167 3.5-5.5 6.5s-4 4.833-5 5.5c-1 .667-2.5 1.333-4.5 2s-4.333 1
-7 1c-4.667 0-9.167-1.833-13.5-5.5S337 184 337 178c0-12.667 15.667-32.333 47-59
H213l-171-1c-8.667-6-13-12.333-13-19 0-4.667 4.333-11.333 13-20h359
c-16-25.333-24-45-24-59z`,widehat1:`M529 0h5l519 115c5 1 9 5 9 10 0 1-1 2-1 3l-4 22
c-1 5-5 9-11 9h-2L532 67 19 159h-2c-5 0-9-4-11-9l-5-22c-1-6 2-12 8-13z`,widehat2:`M1181 0h2l1171 176c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 220h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`,widehat3:`M1181 0h2l1171 236c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 280h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`,widehat4:`M1181 0h2l1171 296c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 340h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`,widecheck1:`M529,159h5l519,-115c5,-1,9,-5,9,-10c0,-1,-1,-2,-1,-3l-4,-22c-1,
-5,-5,-9,-11,-9h-2l-512,92l-513,-92h-2c-5,0,-9,4,-11,9l-5,22c-1,6,2,12,8,13z`,widecheck2:`M1181,220h2l1171,-176c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,153l-1167,-153h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`,widecheck3:`M1181,280h2l1171,-236c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,213l-1167,-213h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`,widecheck4:`M1181,340h2l1171,-296c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,273l-1167,-273h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`,baraboveleftarrow:`M400000 620h-399890l3 -3c68.7 -52.7 113.7 -120 135 -202
c4 -14.7 6 -23 6 -25c0 -7.3 -7 -11 -21 -11c-8 0 -13.2 0.8 -15.5 2.5
c-2.3 1.7 -4.2 5.8 -5.5 12.5c-1.3 4.7 -2.7 10.3 -4 17c-12 48.7 -34.8 92 -68.5 130
s-74.2 66.3 -121.5 85c-10 4 -16 7.7 -18 11c0 8.7 6 14.3 18 17c47.3 18.7 87.8 47
121.5 85s56.5 81.3 68.5 130c0.7 2 1.3 5 2 9s1.2 6.7 1.5 8c0.3 1.3 1 3.3 2 6
s2.2 4.5 3.5 5.5c1.3 1 3.3 1.8 6 2.5s6 1 10 1c14 0 21 -3.7 21 -11
c0 -2 -2 -10.3 -6 -25c-20 -79.3 -65 -146.7 -135 -202l-3 -3h399890z
M100 620v40h399900v-40z M0 241v40h399900v-40zM0 241v40h399900v-40z`,rightarrowabovebar:`M0 241v40h399891c-47.3 35.3-84 78-110 128-16.7 32
-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20 11 8 0
13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7 39
-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85-40.5
-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5
-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67
151.7 139 205zm96 379h399894v40H0zm0 0h399904v40H0z`,baraboveshortleftharpoon:`M507,435c-4,4,-6.3,8.7,-7,14c0,5.3,0.7,9,2,11
c1.3,2,5.3,5.3,12,10c90.7,54,156,130,196,228c3.3,10.7,6.3,16.3,9,17
c2,0.7,5,1,9,1c0,0,5,0,5,0c10.7,0,16.7,-2,18,-6c2,-2.7,1,-9.7,-3,-21
c-32,-87.3,-82.7,-157.7,-152,-211c0,0,-3,-3,-3,-3l399351,0l0,-40
c-398570,0,-399437,0,-399437,0z M593 435 v40 H399500 v-40z
M0 281 v-40 H399908 v40z M0 281 v-40 H399908 v40z`,rightharpoonaboveshortbar:`M0,241 l0,40c399126,0,399993,0,399993,0
c4.7,-4.7,7,-9.3,7,-14c0,-9.3,-3.7,-15.3,-11,-18c-92.7,-56.7,-159,-133.7,-199,
-231c-3.3,-9.3,-6,-14.7,-8,-16c-2,-1.3,-7,-2,-15,-2c-10.7,0,-16.7,2,-18,6
c-2,2.7,-1,9.7,3,21c15.3,42,36.7,81.8,64,119.5c27.3,37.7,58,69.2,92,94.5z
M0 241 v40 H399908 v-40z M0 475 v-40 H399500 v40z M0 475 v-40 H399500 v40z`,shortbaraboveleftharpoon:`M7,435c-4,4,-6.3,8.7,-7,14c0,5.3,0.7,9,2,11
c1.3,2,5.3,5.3,12,10c90.7,54,156,130,196,228c3.3,10.7,6.3,16.3,9,17c2,0.7,5,1,9,
1c0,0,5,0,5,0c10.7,0,16.7,-2,18,-6c2,-2.7,1,-9.7,-3,-21c-32,-87.3,-82.7,-157.7,
-152,-211c0,0,-3,-3,-3,-3l399907,0l0,-40c-399126,0,-399993,0,-399993,0z
M93 435 v40 H400000 v-40z M500 241 v40 H400000 v-40z M500 241 v40 H400000 v-40z`,shortrightharpoonabovebar:`M53,241l0,40c398570,0,399437,0,399437,0
c4.7,-4.7,7,-9.3,7,-14c0,-9.3,-3.7,-15.3,-11,-18c-92.7,-56.7,-159,-133.7,-199,
-231c-3.3,-9.3,-6,-14.7,-8,-16c-2,-1.3,-7,-2,-15,-2c-10.7,0,-16.7,2,-18,6
c-2,2.7,-1,9.7,3,21c15.3,42,36.7,81.8,64,119.5c27.3,37.7,58,69.2,92,94.5z
M500 241 v40 H399408 v-40z M500 435 v40 H400000 v-40z`},gw=function(t,n){switch(t){case"lbrack":return"M403 1759 V84 H666 V0 H319 V1759 v"+n+` v1759 h347 v-84
H403z M403 1759 V0 H319 V1759 v`+n+" v1759 h84z";case"rbrack":return"M347 1759 V0 H0 V84 H263 V1759 v"+n+` v1759 H0 v84 H347z
M347 1759 V0 H263 V1759 v`+n+" v1759 h84z";case"vert":return"M145 15 v585 v"+n+` v585 c2.667,10,9.667,15,21,15
c10,0,16.667,-5,20,-15 v-585 v`+-n+` v-585 c-2.667,-10,-9.667,-15,-21,-15
c-10,0,-16.667,5,-20,15z M188 15 H145 v585 v`+n+" v585 h43z";case"doublevert":return"M145 15 v585 v"+n+` v585 c2.667,10,9.667,15,21,15
c10,0,16.667,-5,20,-15 v-585 v`+-n+` v-585 c-2.667,-10,-9.667,-15,-21,-15
c-10,0,-16.667,5,-20,15z M188 15 H145 v585 v`+n+` v585 h43z
M367 15 v585 v`+n+` v585 c2.667,10,9.667,15,21,15
c10,0,16.667,-5,20,-15 v-585 v`+-n+` v-585 c-2.667,-10,-9.667,-15,-21,-15
c-10,0,-16.667,5,-20,15z M410 15 H367 v585 v`+n+" v585 h43z";case"lfloor":return"M319 602 V0 H403 V602 v"+n+` v1715 h263 v84 H319z
MM319 602 V0 H403 V602 v`+n+" v1715 H319z";case"rfloor":return"M319 602 V0 H403 V602 v"+n+` v1799 H0 v-84 H319z
MM319 602 V0 H403 V602 v`+n+" v1715 H319z";case"lceil":return"M403 1759 V84 H666 V0 H319 V1759 v"+n+` v602 h84z
M403 1759 V0 H319 V1759 v`+n+" v602 h84z";case"rceil":return"M347 1759 V0 H0 V84 H263 V1759 v"+n+` v602 h84z
M347 1759 V0 h-84 V1759 v`+n+" v602 h84z";case"lparen":return`M863,9c0,-2,-2,-5,-6,-9c0,0,-17,0,-17,0c-12.7,0,-19.3,0.3,-20,1
c-5.3,5.3,-10.3,11,-15,17c-242.7,294.7,-395.3,682,-458,1162c-21.3,163.3,-33.3,349,
-36,557 l0,`+(n+84)+`c0.2,6,0,26,0,60c2,159.3,10,310.7,24,454c53.3,528,210,
949.7,470,1265c4.7,6,9.7,11.7,15,17c0.7,0.7,7,1,19,1c0,0,18,0,18,0c4,-4,6,-7,6,-9
c0,-2.7,-3.3,-8.7,-10,-18c-135.3,-192.7,-235.5,-414.3,-300.5,-665c-65,-250.7,-102.5,
-544.7,-112.5,-882c-2,-104,-3,-167,-3,-189
l0,-`+(n+92)+`c0,-162.7,5.7,-314,17,-454c20.7,-272,63.7,-513,129,-723c65.3,
-210,155.3,-396.3,270,-559c6.7,-9.3,10,-15.3,10,-18z`;case"rparen":return`M76,0c-16.7,0,-25,3,-25,9c0,2,2,6.3,6,13c21.3,28.7,42.3,60.3,
63,95c96.7,156.7,172.8,332.5,228.5,527.5c55.7,195,92.8,416.5,111.5,664.5
c11.3,139.3,17,290.7,17,454c0,28,1.7,43,3.3,45l0,`+(n+9)+`
c-3,4,-3.3,16.7,-3.3,38c0,162,-5.7,313.7,-17,455c-18.7,248,-55.8,469.3,-111.5,664
c-55.7,194.7,-131.8,370.3,-228.5,527c-20.7,34.7,-41.7,66.3,-63,95c-2,3.3,-4,7,-6,11
c0,7.3,5.7,11,17,11c0,0,11,0,11,0c9.3,0,14.3,-0.3,15,-1c5.3,-5.3,10.3,-11,15,-17
c242.7,-294.7,395.3,-681.7,458,-1161c21.3,-164.7,33.3,-350.7,36,-558
l0,-`+(n+144)+`c-2,-159.3,-10,-310.7,-24,-454c-53.3,-528,-210,-949.7,
-470,-1265c-4.7,-6,-9.7,-11.7,-15,-17c-0.7,-0.7,-6.7,-1,-18,-1z`;default:throw new Error("Unknown stretchy delimiter.")}};class al{constructor(t){this.children=void 0,this.classes=void 0,this.height=void 0,this.depth=void 0,this.maxFontSize=void 0,this.style=void 0,this.children=t,this.classes=[],this.height=0,this.depth=0,this.maxFontSize=0,this.style={}}hasClass(t){return te.contains(this.classes,t)}toNode(){for(var t=document.createDocumentFragment(),n=0;n<this.children.length;n++)t.appendChild(this.children[n].toNode());return t}toMarkup(){for(var t="",n=0;n<this.children.length;n++)t+=this.children[n].toMarkup();return t}toText(){var t=n=>n.toText();return this.children.map(t).join("")}}var bn={"AMS-Regular":{32:[0,0,0,0,.25],65:[0,.68889,0,0,.72222],66:[0,.68889,0,0,.66667],67:[0,.68889,0,0,.72222],68:[0,.68889,0,0,.72222],69:[0,.68889,0,0,.66667],70:[0,.68889,0,0,.61111],71:[0,.68889,0,0,.77778],72:[0,.68889,0,0,.77778],73:[0,.68889,0,0,.38889],74:[.16667,.68889,0,0,.5],75:[0,.68889,0,0,.77778],76:[0,.68889,0,0,.66667],77:[0,.68889,0,0,.94445],78:[0,.68889,0,0,.72222],79:[.16667,.68889,0,0,.77778],80:[0,.68889,0,0,.61111],81:[.16667,.68889,0,0,.77778],82:[0,.68889,0,0,.72222],83:[0,.68889,0,0,.55556],84:[0,.68889,0,0,.66667],85:[0,.68889,0,0,.72222],86:[0,.68889,0,0,.72222],87:[0,.68889,0,0,1],88:[0,.68889,0,0,.72222],89:[0,.68889,0,0,.72222],90:[0,.68889,0,0,.66667],107:[0,.68889,0,0,.55556],160:[0,0,0,0,.25],165:[0,.675,.025,0,.75],174:[.15559,.69224,0,0,.94666],240:[0,.68889,0,0,.55556],295:[0,.68889,0,0,.54028],710:[0,.825,0,0,2.33334],732:[0,.9,0,0,2.33334],770:[0,.825,0,0,2.33334],771:[0,.9,0,0,2.33334],989:[.08167,.58167,0,0,.77778],1008:[0,.43056,.04028,0,.66667],8245:[0,.54986,0,0,.275],8463:[0,.68889,0,0,.54028],8487:[0,.68889,0,0,.72222],8498:[0,.68889,0,0,.55556],8502:[0,.68889,0,0,.66667],8503:[0,.68889,0,0,.44445],8504:[0,.68889,0,0,.66667],8513:[0,.68889,0,0,.63889],8592:[-.03598,.46402,0,0,.5],8594:[-.03598,.46402,0,0,.5],8602:[-.13313,.36687,0,0,1],8603:[-.13313,.36687,0,0,1],8606:[.01354,.52239,0,0,1],8608:[.01354,.52239,0,0,1],8610:[.01354,.52239,0,0,1.11111],8611:[.01354,.52239,0,0,1.11111],8619:[0,.54986,0,0,1],8620:[0,.54986,0,0,1],8621:[-.13313,.37788,0,0,1.38889],8622:[-.13313,.36687,0,0,1],8624:[0,.69224,0,0,.5],8625:[0,.69224,0,0,.5],8630:[0,.43056,0,0,1],8631:[0,.43056,0,0,1],8634:[.08198,.58198,0,0,.77778],8635:[.08198,.58198,0,0,.77778],8638:[.19444,.69224,0,0,.41667],8639:[.19444,.69224,0,0,.41667],8642:[.19444,.69224,0,0,.41667],8643:[.19444,.69224,0,0,.41667],8644:[.1808,.675,0,0,1],8646:[.1808,.675,0,0,1],8647:[.1808,.675,0,0,1],8648:[.19444,.69224,0,0,.83334],8649:[.1808,.675,0,0,1],8650:[.19444,.69224,0,0,.83334],8651:[.01354,.52239,0,0,1],8652:[.01354,.52239,0,0,1],8653:[-.13313,.36687,0,0,1],8654:[-.13313,.36687,0,0,1],8655:[-.13313,.36687,0,0,1],8666:[.13667,.63667,0,0,1],8667:[.13667,.63667,0,0,1],8669:[-.13313,.37788,0,0,1],8672:[-.064,.437,0,0,1.334],8674:[-.064,.437,0,0,1.334],8705:[0,.825,0,0,.5],8708:[0,.68889,0,0,.55556],8709:[.08167,.58167,0,0,.77778],8717:[0,.43056,0,0,.42917],8722:[-.03598,.46402,0,0,.5],8724:[.08198,.69224,0,0,.77778],8726:[.08167,.58167,0,0,.77778],8733:[0,.69224,0,0,.77778],8736:[0,.69224,0,0,.72222],8737:[0,.69224,0,0,.72222],8738:[.03517,.52239,0,0,.72222],8739:[.08167,.58167,0,0,.22222],8740:[.25142,.74111,0,0,.27778],8741:[.08167,.58167,0,0,.38889],8742:[.25142,.74111,0,0,.5],8756:[0,.69224,0,0,.66667],8757:[0,.69224,0,0,.66667],8764:[-.13313,.36687,0,0,.77778],8765:[-.13313,.37788,0,0,.77778],8769:[-.13313,.36687,0,0,.77778],8770:[-.03625,.46375,0,0,.77778],8774:[.30274,.79383,0,0,.77778],8776:[-.01688,.48312,0,0,.77778],8778:[.08167,.58167,0,0,.77778],8782:[.06062,.54986,0,0,.77778],8783:[.06062,.54986,0,0,.77778],8785:[.08198,.58198,0,0,.77778],8786:[.08198,.58198,0,0,.77778],8787:[.08198,.58198,0,0,.77778],8790:[0,.69224,0,0,.77778],8791:[.22958,.72958,0,0,.77778],8796:[.08198,.91667,0,0,.77778],8806:[.25583,.75583,0,0,.77778],8807:[.25583,.75583,0,0,.77778],8808:[.25142,.75726,0,0,.77778],8809:[.25142,.75726,0,0,.77778],8812:[.25583,.75583,0,0,.5],8814:[.20576,.70576,0,0,.77778],8815:[.20576,.70576,0,0,.77778],8816:[.30274,.79383,0,0,.77778],8817:[.30274,.79383,0,0,.77778],8818:[.22958,.72958,0,0,.77778],8819:[.22958,.72958,0,0,.77778],8822:[.1808,.675,0,0,.77778],8823:[.1808,.675,0,0,.77778],8828:[.13667,.63667,0,0,.77778],8829:[.13667,.63667,0,0,.77778],8830:[.22958,.72958,0,0,.77778],8831:[.22958,.72958,0,0,.77778],8832:[.20576,.70576,0,0,.77778],8833:[.20576,.70576,0,0,.77778],8840:[.30274,.79383,0,0,.77778],8841:[.30274,.79383,0,0,.77778],8842:[.13597,.63597,0,0,.77778],8843:[.13597,.63597,0,0,.77778],8847:[.03517,.54986,0,0,.77778],8848:[.03517,.54986,0,0,.77778],8858:[.08198,.58198,0,0,.77778],8859:[.08198,.58198,0,0,.77778],8861:[.08198,.58198,0,0,.77778],8862:[0,.675,0,0,.77778],8863:[0,.675,0,0,.77778],8864:[0,.675,0,0,.77778],8865:[0,.675,0,0,.77778],8872:[0,.69224,0,0,.61111],8873:[0,.69224,0,0,.72222],8874:[0,.69224,0,0,.88889],8876:[0,.68889,0,0,.61111],8877:[0,.68889,0,0,.61111],8878:[0,.68889,0,0,.72222],8879:[0,.68889,0,0,.72222],8882:[.03517,.54986,0,0,.77778],8883:[.03517,.54986,0,0,.77778],8884:[.13667,.63667,0,0,.77778],8885:[.13667,.63667,0,0,.77778],8888:[0,.54986,0,0,1.11111],8890:[.19444,.43056,0,0,.55556],8891:[.19444,.69224,0,0,.61111],8892:[.19444,.69224,0,0,.61111],8901:[0,.54986,0,0,.27778],8903:[.08167,.58167,0,0,.77778],8905:[.08167,.58167,0,0,.77778],8906:[.08167,.58167,0,0,.77778],8907:[0,.69224,0,0,.77778],8908:[0,.69224,0,0,.77778],8909:[-.03598,.46402,0,0,.77778],8910:[0,.54986,0,0,.76042],8911:[0,.54986,0,0,.76042],8912:[.03517,.54986,0,0,.77778],8913:[.03517,.54986,0,0,.77778],8914:[0,.54986,0,0,.66667],8915:[0,.54986,0,0,.66667],8916:[0,.69224,0,0,.66667],8918:[.0391,.5391,0,0,.77778],8919:[.0391,.5391,0,0,.77778],8920:[.03517,.54986,0,0,1.33334],8921:[.03517,.54986,0,0,1.33334],8922:[.38569,.88569,0,0,.77778],8923:[.38569,.88569,0,0,.77778],8926:[.13667,.63667,0,0,.77778],8927:[.13667,.63667,0,0,.77778],8928:[.30274,.79383,0,0,.77778],8929:[.30274,.79383,0,0,.77778],8934:[.23222,.74111,0,0,.77778],8935:[.23222,.74111,0,0,.77778],8936:[.23222,.74111,0,0,.77778],8937:[.23222,.74111,0,0,.77778],8938:[.20576,.70576,0,0,.77778],8939:[.20576,.70576,0,0,.77778],8940:[.30274,.79383,0,0,.77778],8941:[.30274,.79383,0,0,.77778],8994:[.19444,.69224,0,0,.77778],8995:[.19444,.69224,0,0,.77778],9416:[.15559,.69224,0,0,.90222],9484:[0,.69224,0,0,.5],9488:[0,.69224,0,0,.5],9492:[0,.37788,0,0,.5],9496:[0,.37788,0,0,.5],9585:[.19444,.68889,0,0,.88889],9586:[.19444,.74111,0,0,.88889],9632:[0,.675,0,0,.77778],9633:[0,.675,0,0,.77778],9650:[0,.54986,0,0,.72222],9651:[0,.54986,0,0,.72222],9654:[.03517,.54986,0,0,.77778],9660:[0,.54986,0,0,.72222],9661:[0,.54986,0,0,.72222],9664:[.03517,.54986,0,0,.77778],9674:[.11111,.69224,0,0,.66667],9733:[.19444,.69224,0,0,.94445],10003:[0,.69224,0,0,.83334],10016:[0,.69224,0,0,.83334],10731:[.11111,.69224,0,0,.66667],10846:[.19444,.75583,0,0,.61111],10877:[.13667,.63667,0,0,.77778],10878:[.13667,.63667,0,0,.77778],10885:[.25583,.75583,0,0,.77778],10886:[.25583,.75583,0,0,.77778],10887:[.13597,.63597,0,0,.77778],10888:[.13597,.63597,0,0,.77778],10889:[.26167,.75726,0,0,.77778],10890:[.26167,.75726,0,0,.77778],10891:[.48256,.98256,0,0,.77778],10892:[.48256,.98256,0,0,.77778],10901:[.13667,.63667,0,0,.77778],10902:[.13667,.63667,0,0,.77778],10933:[.25142,.75726,0,0,.77778],10934:[.25142,.75726,0,0,.77778],10935:[.26167,.75726,0,0,.77778],10936:[.26167,.75726,0,0,.77778],10937:[.26167,.75726,0,0,.77778],10938:[.26167,.75726,0,0,.77778],10949:[.25583,.75583,0,0,.77778],10950:[.25583,.75583,0,0,.77778],10955:[.28481,.79383,0,0,.77778],10956:[.28481,.79383,0,0,.77778],57350:[.08167,.58167,0,0,.22222],57351:[.08167,.58167,0,0,.38889],57352:[.08167,.58167,0,0,.77778],57353:[0,.43056,.04028,0,.66667],57356:[.25142,.75726,0,0,.77778],57357:[.25142,.75726,0,0,.77778],57358:[.41951,.91951,0,0,.77778],57359:[.30274,.79383,0,0,.77778],57360:[.30274,.79383,0,0,.77778],57361:[.41951,.91951,0,0,.77778],57366:[.25142,.75726,0,0,.77778],57367:[.25142,.75726,0,0,.77778],57368:[.25142,.75726,0,0,.77778],57369:[.25142,.75726,0,0,.77778],57370:[.13597,.63597,0,0,.77778],57371:[.13597,.63597,0,0,.77778]},"Caligraphic-Regular":{32:[0,0,0,0,.25],65:[0,.68333,0,.19445,.79847],66:[0,.68333,.03041,.13889,.65681],67:[0,.68333,.05834,.13889,.52653],68:[0,.68333,.02778,.08334,.77139],69:[0,.68333,.08944,.11111,.52778],70:[0,.68333,.09931,.11111,.71875],71:[.09722,.68333,.0593,.11111,.59487],72:[0,.68333,.00965,.11111,.84452],73:[0,.68333,.07382,0,.54452],74:[.09722,.68333,.18472,.16667,.67778],75:[0,.68333,.01445,.05556,.76195],76:[0,.68333,0,.13889,.68972],77:[0,.68333,0,.13889,1.2009],78:[0,.68333,.14736,.08334,.82049],79:[0,.68333,.02778,.11111,.79611],80:[0,.68333,.08222,.08334,.69556],81:[.09722,.68333,0,.11111,.81667],82:[0,.68333,0,.08334,.8475],83:[0,.68333,.075,.13889,.60556],84:[0,.68333,.25417,0,.54464],85:[0,.68333,.09931,.08334,.62583],86:[0,.68333,.08222,0,.61278],87:[0,.68333,.08222,.08334,.98778],88:[0,.68333,.14643,.13889,.7133],89:[.09722,.68333,.08222,.08334,.66834],90:[0,.68333,.07944,.13889,.72473],160:[0,0,0,0,.25]},"Fraktur-Regular":{32:[0,0,0,0,.25],33:[0,.69141,0,0,.29574],34:[0,.69141,0,0,.21471],38:[0,.69141,0,0,.73786],39:[0,.69141,0,0,.21201],40:[.24982,.74947,0,0,.38865],41:[.24982,.74947,0,0,.38865],42:[0,.62119,0,0,.27764],43:[.08319,.58283,0,0,.75623],44:[0,.10803,0,0,.27764],45:[.08319,.58283,0,0,.75623],46:[0,.10803,0,0,.27764],47:[.24982,.74947,0,0,.50181],48:[0,.47534,0,0,.50181],49:[0,.47534,0,0,.50181],50:[0,.47534,0,0,.50181],51:[.18906,.47534,0,0,.50181],52:[.18906,.47534,0,0,.50181],53:[.18906,.47534,0,0,.50181],54:[0,.69141,0,0,.50181],55:[.18906,.47534,0,0,.50181],56:[0,.69141,0,0,.50181],57:[.18906,.47534,0,0,.50181],58:[0,.47534,0,0,.21606],59:[.12604,.47534,0,0,.21606],61:[-.13099,.36866,0,0,.75623],63:[0,.69141,0,0,.36245],65:[0,.69141,0,0,.7176],66:[0,.69141,0,0,.88397],67:[0,.69141,0,0,.61254],68:[0,.69141,0,0,.83158],69:[0,.69141,0,0,.66278],70:[.12604,.69141,0,0,.61119],71:[0,.69141,0,0,.78539],72:[.06302,.69141,0,0,.7203],73:[0,.69141,0,0,.55448],74:[.12604,.69141,0,0,.55231],75:[0,.69141,0,0,.66845],76:[0,.69141,0,0,.66602],77:[0,.69141,0,0,1.04953],78:[0,.69141,0,0,.83212],79:[0,.69141,0,0,.82699],80:[.18906,.69141,0,0,.82753],81:[.03781,.69141,0,0,.82699],82:[0,.69141,0,0,.82807],83:[0,.69141,0,0,.82861],84:[0,.69141,0,0,.66899],85:[0,.69141,0,0,.64576],86:[0,.69141,0,0,.83131],87:[0,.69141,0,0,1.04602],88:[0,.69141,0,0,.71922],89:[.18906,.69141,0,0,.83293],90:[.12604,.69141,0,0,.60201],91:[.24982,.74947,0,0,.27764],93:[.24982,.74947,0,0,.27764],94:[0,.69141,0,0,.49965],97:[0,.47534,0,0,.50046],98:[0,.69141,0,0,.51315],99:[0,.47534,0,0,.38946],100:[0,.62119,0,0,.49857],101:[0,.47534,0,0,.40053],102:[.18906,.69141,0,0,.32626],103:[.18906,.47534,0,0,.5037],104:[.18906,.69141,0,0,.52126],105:[0,.69141,0,0,.27899],106:[0,.69141,0,0,.28088],107:[0,.69141,0,0,.38946],108:[0,.69141,0,0,.27953],109:[0,.47534,0,0,.76676],110:[0,.47534,0,0,.52666],111:[0,.47534,0,0,.48885],112:[.18906,.52396,0,0,.50046],113:[.18906,.47534,0,0,.48912],114:[0,.47534,0,0,.38919],115:[0,.47534,0,0,.44266],116:[0,.62119,0,0,.33301],117:[0,.47534,0,0,.5172],118:[0,.52396,0,0,.5118],119:[0,.52396,0,0,.77351],120:[.18906,.47534,0,0,.38865],121:[.18906,.47534,0,0,.49884],122:[.18906,.47534,0,0,.39054],160:[0,0,0,0,.25],8216:[0,.69141,0,0,.21471],8217:[0,.69141,0,0,.21471],58112:[0,.62119,0,0,.49749],58113:[0,.62119,0,0,.4983],58114:[.18906,.69141,0,0,.33328],58115:[.18906,.69141,0,0,.32923],58116:[.18906,.47534,0,0,.50343],58117:[0,.69141,0,0,.33301],58118:[0,.62119,0,0,.33409],58119:[0,.47534,0,0,.50073]},"Main-Bold":{32:[0,0,0,0,.25],33:[0,.69444,0,0,.35],34:[0,.69444,0,0,.60278],35:[.19444,.69444,0,0,.95833],36:[.05556,.75,0,0,.575],37:[.05556,.75,0,0,.95833],38:[0,.69444,0,0,.89444],39:[0,.69444,0,0,.31944],40:[.25,.75,0,0,.44722],41:[.25,.75,0,0,.44722],42:[0,.75,0,0,.575],43:[.13333,.63333,0,0,.89444],44:[.19444,.15556,0,0,.31944],45:[0,.44444,0,0,.38333],46:[0,.15556,0,0,.31944],47:[.25,.75,0,0,.575],48:[0,.64444,0,0,.575],49:[0,.64444,0,0,.575],50:[0,.64444,0,0,.575],51:[0,.64444,0,0,.575],52:[0,.64444,0,0,.575],53:[0,.64444,0,0,.575],54:[0,.64444,0,0,.575],55:[0,.64444,0,0,.575],56:[0,.64444,0,0,.575],57:[0,.64444,0,0,.575],58:[0,.44444,0,0,.31944],59:[.19444,.44444,0,0,.31944],60:[.08556,.58556,0,0,.89444],61:[-.10889,.39111,0,0,.89444],62:[.08556,.58556,0,0,.89444],63:[0,.69444,0,0,.54305],64:[0,.69444,0,0,.89444],65:[0,.68611,0,0,.86944],66:[0,.68611,0,0,.81805],67:[0,.68611,0,0,.83055],68:[0,.68611,0,0,.88194],69:[0,.68611,0,0,.75555],70:[0,.68611,0,0,.72361],71:[0,.68611,0,0,.90416],72:[0,.68611,0,0,.9],73:[0,.68611,0,0,.43611],74:[0,.68611,0,0,.59444],75:[0,.68611,0,0,.90138],76:[0,.68611,0,0,.69166],77:[0,.68611,0,0,1.09166],78:[0,.68611,0,0,.9],79:[0,.68611,0,0,.86388],80:[0,.68611,0,0,.78611],81:[.19444,.68611,0,0,.86388],82:[0,.68611,0,0,.8625],83:[0,.68611,0,0,.63889],84:[0,.68611,0,0,.8],85:[0,.68611,0,0,.88472],86:[0,.68611,.01597,0,.86944],87:[0,.68611,.01597,0,1.18888],88:[0,.68611,0,0,.86944],89:[0,.68611,.02875,0,.86944],90:[0,.68611,0,0,.70277],91:[.25,.75,0,0,.31944],92:[.25,.75,0,0,.575],93:[.25,.75,0,0,.31944],94:[0,.69444,0,0,.575],95:[.31,.13444,.03194,0,.575],97:[0,.44444,0,0,.55902],98:[0,.69444,0,0,.63889],99:[0,.44444,0,0,.51111],100:[0,.69444,0,0,.63889],101:[0,.44444,0,0,.52708],102:[0,.69444,.10903,0,.35139],103:[.19444,.44444,.01597,0,.575],104:[0,.69444,0,0,.63889],105:[0,.69444,0,0,.31944],106:[.19444,.69444,0,0,.35139],107:[0,.69444,0,0,.60694],108:[0,.69444,0,0,.31944],109:[0,.44444,0,0,.95833],110:[0,.44444,0,0,.63889],111:[0,.44444,0,0,.575],112:[.19444,.44444,0,0,.63889],113:[.19444,.44444,0,0,.60694],114:[0,.44444,0,0,.47361],115:[0,.44444,0,0,.45361],116:[0,.63492,0,0,.44722],117:[0,.44444,0,0,.63889],118:[0,.44444,.01597,0,.60694],119:[0,.44444,.01597,0,.83055],120:[0,.44444,0,0,.60694],121:[.19444,.44444,.01597,0,.60694],122:[0,.44444,0,0,.51111],123:[.25,.75,0,0,.575],124:[.25,.75,0,0,.31944],125:[.25,.75,0,0,.575],126:[.35,.34444,0,0,.575],160:[0,0,0,0,.25],163:[0,.69444,0,0,.86853],168:[0,.69444,0,0,.575],172:[0,.44444,0,0,.76666],176:[0,.69444,0,0,.86944],177:[.13333,.63333,0,0,.89444],184:[.17014,0,0,0,.51111],198:[0,.68611,0,0,1.04166],215:[.13333,.63333,0,0,.89444],216:[.04861,.73472,0,0,.89444],223:[0,.69444,0,0,.59722],230:[0,.44444,0,0,.83055],247:[.13333,.63333,0,0,.89444],248:[.09722,.54167,0,0,.575],305:[0,.44444,0,0,.31944],338:[0,.68611,0,0,1.16944],339:[0,.44444,0,0,.89444],567:[.19444,.44444,0,0,.35139],710:[0,.69444,0,0,.575],711:[0,.63194,0,0,.575],713:[0,.59611,0,0,.575],714:[0,.69444,0,0,.575],715:[0,.69444,0,0,.575],728:[0,.69444,0,0,.575],729:[0,.69444,0,0,.31944],730:[0,.69444,0,0,.86944],732:[0,.69444,0,0,.575],733:[0,.69444,0,0,.575],915:[0,.68611,0,0,.69166],916:[0,.68611,0,0,.95833],920:[0,.68611,0,0,.89444],923:[0,.68611,0,0,.80555],926:[0,.68611,0,0,.76666],928:[0,.68611,0,0,.9],931:[0,.68611,0,0,.83055],933:[0,.68611,0,0,.89444],934:[0,.68611,0,0,.83055],936:[0,.68611,0,0,.89444],937:[0,.68611,0,0,.83055],8211:[0,.44444,.03194,0,.575],8212:[0,.44444,.03194,0,1.14999],8216:[0,.69444,0,0,.31944],8217:[0,.69444,0,0,.31944],8220:[0,.69444,0,0,.60278],8221:[0,.69444,0,0,.60278],8224:[.19444,.69444,0,0,.51111],8225:[.19444,.69444,0,0,.51111],8242:[0,.55556,0,0,.34444],8407:[0,.72444,.15486,0,.575],8463:[0,.69444,0,0,.66759],8465:[0,.69444,0,0,.83055],8467:[0,.69444,0,0,.47361],8472:[.19444,.44444,0,0,.74027],8476:[0,.69444,0,0,.83055],8501:[0,.69444,0,0,.70277],8592:[-.10889,.39111,0,0,1.14999],8593:[.19444,.69444,0,0,.575],8594:[-.10889,.39111,0,0,1.14999],8595:[.19444,.69444,0,0,.575],8596:[-.10889,.39111,0,0,1.14999],8597:[.25,.75,0,0,.575],8598:[.19444,.69444,0,0,1.14999],8599:[.19444,.69444,0,0,1.14999],8600:[.19444,.69444,0,0,1.14999],8601:[.19444,.69444,0,0,1.14999],8636:[-.10889,.39111,0,0,1.14999],8637:[-.10889,.39111,0,0,1.14999],8640:[-.10889,.39111,0,0,1.14999],8641:[-.10889,.39111,0,0,1.14999],8656:[-.10889,.39111,0,0,1.14999],8657:[.19444,.69444,0,0,.70277],8658:[-.10889,.39111,0,0,1.14999],8659:[.19444,.69444,0,0,.70277],8660:[-.10889,.39111,0,0,1.14999],8661:[.25,.75,0,0,.70277],8704:[0,.69444,0,0,.63889],8706:[0,.69444,.06389,0,.62847],8707:[0,.69444,0,0,.63889],8709:[.05556,.75,0,0,.575],8711:[0,.68611,0,0,.95833],8712:[.08556,.58556,0,0,.76666],8715:[.08556,.58556,0,0,.76666],8722:[.13333,.63333,0,0,.89444],8723:[.13333,.63333,0,0,.89444],8725:[.25,.75,0,0,.575],8726:[.25,.75,0,0,.575],8727:[-.02778,.47222,0,0,.575],8728:[-.02639,.47361,0,0,.575],8729:[-.02639,.47361,0,0,.575],8730:[.18,.82,0,0,.95833],8733:[0,.44444,0,0,.89444],8734:[0,.44444,0,0,1.14999],8736:[0,.69224,0,0,.72222],8739:[.25,.75,0,0,.31944],8741:[.25,.75,0,0,.575],8743:[0,.55556,0,0,.76666],8744:[0,.55556,0,0,.76666],8745:[0,.55556,0,0,.76666],8746:[0,.55556,0,0,.76666],8747:[.19444,.69444,.12778,0,.56875],8764:[-.10889,.39111,0,0,.89444],8768:[.19444,.69444,0,0,.31944],8771:[.00222,.50222,0,0,.89444],8773:[.027,.638,0,0,.894],8776:[.02444,.52444,0,0,.89444],8781:[.00222,.50222,0,0,.89444],8801:[.00222,.50222,0,0,.89444],8804:[.19667,.69667,0,0,.89444],8805:[.19667,.69667,0,0,.89444],8810:[.08556,.58556,0,0,1.14999],8811:[.08556,.58556,0,0,1.14999],8826:[.08556,.58556,0,0,.89444],8827:[.08556,.58556,0,0,.89444],8834:[.08556,.58556,0,0,.89444],8835:[.08556,.58556,0,0,.89444],8838:[.19667,.69667,0,0,.89444],8839:[.19667,.69667,0,0,.89444],8846:[0,.55556,0,0,.76666],8849:[.19667,.69667,0,0,.89444],8850:[.19667,.69667,0,0,.89444],8851:[0,.55556,0,0,.76666],8852:[0,.55556,0,0,.76666],8853:[.13333,.63333,0,0,.89444],8854:[.13333,.63333,0,0,.89444],8855:[.13333,.63333,0,0,.89444],8856:[.13333,.63333,0,0,.89444],8857:[.13333,.63333,0,0,.89444],8866:[0,.69444,0,0,.70277],8867:[0,.69444,0,0,.70277],8868:[0,.69444,0,0,.89444],8869:[0,.69444,0,0,.89444],8900:[-.02639,.47361,0,0,.575],8901:[-.02639,.47361,0,0,.31944],8902:[-.02778,.47222,0,0,.575],8968:[.25,.75,0,0,.51111],8969:[.25,.75,0,0,.51111],8970:[.25,.75,0,0,.51111],8971:[.25,.75,0,0,.51111],8994:[-.13889,.36111,0,0,1.14999],8995:[-.13889,.36111,0,0,1.14999],9651:[.19444,.69444,0,0,1.02222],9657:[-.02778,.47222,0,0,.575],9661:[.19444,.69444,0,0,1.02222],9667:[-.02778,.47222,0,0,.575],9711:[.19444,.69444,0,0,1.14999],9824:[.12963,.69444,0,0,.89444],9825:[.12963,.69444,0,0,.89444],9826:[.12963,.69444,0,0,.89444],9827:[.12963,.69444,0,0,.89444],9837:[0,.75,0,0,.44722],9838:[.19444,.69444,0,0,.44722],9839:[.19444,.69444,0,0,.44722],10216:[.25,.75,0,0,.44722],10217:[.25,.75,0,0,.44722],10815:[0,.68611,0,0,.9],10927:[.19667,.69667,0,0,.89444],10928:[.19667,.69667,0,0,.89444],57376:[.19444,.69444,0,0,0]},"Main-BoldItalic":{32:[0,0,0,0,.25],33:[0,.69444,.11417,0,.38611],34:[0,.69444,.07939,0,.62055],35:[.19444,.69444,.06833,0,.94444],37:[.05556,.75,.12861,0,.94444],38:[0,.69444,.08528,0,.88555],39:[0,.69444,.12945,0,.35555],40:[.25,.75,.15806,0,.47333],41:[.25,.75,.03306,0,.47333],42:[0,.75,.14333,0,.59111],43:[.10333,.60333,.03306,0,.88555],44:[.19444,.14722,0,0,.35555],45:[0,.44444,.02611,0,.41444],46:[0,.14722,0,0,.35555],47:[.25,.75,.15806,0,.59111],48:[0,.64444,.13167,0,.59111],49:[0,.64444,.13167,0,.59111],50:[0,.64444,.13167,0,.59111],51:[0,.64444,.13167,0,.59111],52:[.19444,.64444,.13167,0,.59111],53:[0,.64444,.13167,0,.59111],54:[0,.64444,.13167,0,.59111],55:[.19444,.64444,.13167,0,.59111],56:[0,.64444,.13167,0,.59111],57:[0,.64444,.13167,0,.59111],58:[0,.44444,.06695,0,.35555],59:[.19444,.44444,.06695,0,.35555],61:[-.10889,.39111,.06833,0,.88555],63:[0,.69444,.11472,0,.59111],64:[0,.69444,.09208,0,.88555],65:[0,.68611,0,0,.86555],66:[0,.68611,.0992,0,.81666],67:[0,.68611,.14208,0,.82666],68:[0,.68611,.09062,0,.87555],69:[0,.68611,.11431,0,.75666],70:[0,.68611,.12903,0,.72722],71:[0,.68611,.07347,0,.89527],72:[0,.68611,.17208,0,.8961],73:[0,.68611,.15681,0,.47166],74:[0,.68611,.145,0,.61055],75:[0,.68611,.14208,0,.89499],76:[0,.68611,0,0,.69777],77:[0,.68611,.17208,0,1.07277],78:[0,.68611,.17208,0,.8961],79:[0,.68611,.09062,0,.85499],80:[0,.68611,.0992,0,.78721],81:[.19444,.68611,.09062,0,.85499],82:[0,.68611,.02559,0,.85944],83:[0,.68611,.11264,0,.64999],84:[0,.68611,.12903,0,.7961],85:[0,.68611,.17208,0,.88083],86:[0,.68611,.18625,0,.86555],87:[0,.68611,.18625,0,1.15999],88:[0,.68611,.15681,0,.86555],89:[0,.68611,.19803,0,.86555],90:[0,.68611,.14208,0,.70888],91:[.25,.75,.1875,0,.35611],93:[.25,.75,.09972,0,.35611],94:[0,.69444,.06709,0,.59111],95:[.31,.13444,.09811,0,.59111],97:[0,.44444,.09426,0,.59111],98:[0,.69444,.07861,0,.53222],99:[0,.44444,.05222,0,.53222],100:[0,.69444,.10861,0,.59111],101:[0,.44444,.085,0,.53222],102:[.19444,.69444,.21778,0,.4],103:[.19444,.44444,.105,0,.53222],104:[0,.69444,.09426,0,.59111],105:[0,.69326,.11387,0,.35555],106:[.19444,.69326,.1672,0,.35555],107:[0,.69444,.11111,0,.53222],108:[0,.69444,.10861,0,.29666],109:[0,.44444,.09426,0,.94444],110:[0,.44444,.09426,0,.64999],111:[0,.44444,.07861,0,.59111],112:[.19444,.44444,.07861,0,.59111],113:[.19444,.44444,.105,0,.53222],114:[0,.44444,.11111,0,.50167],115:[0,.44444,.08167,0,.48694],116:[0,.63492,.09639,0,.385],117:[0,.44444,.09426,0,.62055],118:[0,.44444,.11111,0,.53222],119:[0,.44444,.11111,0,.76777],120:[0,.44444,.12583,0,.56055],121:[.19444,.44444,.105,0,.56166],122:[0,.44444,.13889,0,.49055],126:[.35,.34444,.11472,0,.59111],160:[0,0,0,0,.25],168:[0,.69444,.11473,0,.59111],176:[0,.69444,0,0,.94888],184:[.17014,0,0,0,.53222],198:[0,.68611,.11431,0,1.02277],216:[.04861,.73472,.09062,0,.88555],223:[.19444,.69444,.09736,0,.665],230:[0,.44444,.085,0,.82666],248:[.09722,.54167,.09458,0,.59111],305:[0,.44444,.09426,0,.35555],338:[0,.68611,.11431,0,1.14054],339:[0,.44444,.085,0,.82666],567:[.19444,.44444,.04611,0,.385],710:[0,.69444,.06709,0,.59111],711:[0,.63194,.08271,0,.59111],713:[0,.59444,.10444,0,.59111],714:[0,.69444,.08528,0,.59111],715:[0,.69444,0,0,.59111],728:[0,.69444,.10333,0,.59111],729:[0,.69444,.12945,0,.35555],730:[0,.69444,0,0,.94888],732:[0,.69444,.11472,0,.59111],733:[0,.69444,.11472,0,.59111],915:[0,.68611,.12903,0,.69777],916:[0,.68611,0,0,.94444],920:[0,.68611,.09062,0,.88555],923:[0,.68611,0,0,.80666],926:[0,.68611,.15092,0,.76777],928:[0,.68611,.17208,0,.8961],931:[0,.68611,.11431,0,.82666],933:[0,.68611,.10778,0,.88555],934:[0,.68611,.05632,0,.82666],936:[0,.68611,.10778,0,.88555],937:[0,.68611,.0992,0,.82666],8211:[0,.44444,.09811,0,.59111],8212:[0,.44444,.09811,0,1.18221],8216:[0,.69444,.12945,0,.35555],8217:[0,.69444,.12945,0,.35555],8220:[0,.69444,.16772,0,.62055],8221:[0,.69444,.07939,0,.62055]},"Main-Italic":{32:[0,0,0,0,.25],33:[0,.69444,.12417,0,.30667],34:[0,.69444,.06961,0,.51444],35:[.19444,.69444,.06616,0,.81777],37:[.05556,.75,.13639,0,.81777],38:[0,.69444,.09694,0,.76666],39:[0,.69444,.12417,0,.30667],40:[.25,.75,.16194,0,.40889],41:[.25,.75,.03694,0,.40889],42:[0,.75,.14917,0,.51111],43:[.05667,.56167,.03694,0,.76666],44:[.19444,.10556,0,0,.30667],45:[0,.43056,.02826,0,.35778],46:[0,.10556,0,0,.30667],47:[.25,.75,.16194,0,.51111],48:[0,.64444,.13556,0,.51111],49:[0,.64444,.13556,0,.51111],50:[0,.64444,.13556,0,.51111],51:[0,.64444,.13556,0,.51111],52:[.19444,.64444,.13556,0,.51111],53:[0,.64444,.13556,0,.51111],54:[0,.64444,.13556,0,.51111],55:[.19444,.64444,.13556,0,.51111],56:[0,.64444,.13556,0,.51111],57:[0,.64444,.13556,0,.51111],58:[0,.43056,.0582,0,.30667],59:[.19444,.43056,.0582,0,.30667],61:[-.13313,.36687,.06616,0,.76666],63:[0,.69444,.1225,0,.51111],64:[0,.69444,.09597,0,.76666],65:[0,.68333,0,0,.74333],66:[0,.68333,.10257,0,.70389],67:[0,.68333,.14528,0,.71555],68:[0,.68333,.09403,0,.755],69:[0,.68333,.12028,0,.67833],70:[0,.68333,.13305,0,.65277],71:[0,.68333,.08722,0,.77361],72:[0,.68333,.16389,0,.74333],73:[0,.68333,.15806,0,.38555],74:[0,.68333,.14028,0,.525],75:[0,.68333,.14528,0,.76888],76:[0,.68333,0,0,.62722],77:[0,.68333,.16389,0,.89666],78:[0,.68333,.16389,0,.74333],79:[0,.68333,.09403,0,.76666],80:[0,.68333,.10257,0,.67833],81:[.19444,.68333,.09403,0,.76666],82:[0,.68333,.03868,0,.72944],83:[0,.68333,.11972,0,.56222],84:[0,.68333,.13305,0,.71555],85:[0,.68333,.16389,0,.74333],86:[0,.68333,.18361,0,.74333],87:[0,.68333,.18361,0,.99888],88:[0,.68333,.15806,0,.74333],89:[0,.68333,.19383,0,.74333],90:[0,.68333,.14528,0,.61333],91:[.25,.75,.1875,0,.30667],93:[.25,.75,.10528,0,.30667],94:[0,.69444,.06646,0,.51111],95:[.31,.12056,.09208,0,.51111],97:[0,.43056,.07671,0,.51111],98:[0,.69444,.06312,0,.46],99:[0,.43056,.05653,0,.46],100:[0,.69444,.10333,0,.51111],101:[0,.43056,.07514,0,.46],102:[.19444,.69444,.21194,0,.30667],103:[.19444,.43056,.08847,0,.46],104:[0,.69444,.07671,0,.51111],105:[0,.65536,.1019,0,.30667],106:[.19444,.65536,.14467,0,.30667],107:[0,.69444,.10764,0,.46],108:[0,.69444,.10333,0,.25555],109:[0,.43056,.07671,0,.81777],110:[0,.43056,.07671,0,.56222],111:[0,.43056,.06312,0,.51111],112:[.19444,.43056,.06312,0,.51111],113:[.19444,.43056,.08847,0,.46],114:[0,.43056,.10764,0,.42166],115:[0,.43056,.08208,0,.40889],116:[0,.61508,.09486,0,.33222],117:[0,.43056,.07671,0,.53666],118:[0,.43056,.10764,0,.46],119:[0,.43056,.10764,0,.66444],120:[0,.43056,.12042,0,.46389],121:[.19444,.43056,.08847,0,.48555],122:[0,.43056,.12292,0,.40889],126:[.35,.31786,.11585,0,.51111],160:[0,0,0,0,.25],168:[0,.66786,.10474,0,.51111],176:[0,.69444,0,0,.83129],184:[.17014,0,0,0,.46],198:[0,.68333,.12028,0,.88277],216:[.04861,.73194,.09403,0,.76666],223:[.19444,.69444,.10514,0,.53666],230:[0,.43056,.07514,0,.71555],248:[.09722,.52778,.09194,0,.51111],338:[0,.68333,.12028,0,.98499],339:[0,.43056,.07514,0,.71555],710:[0,.69444,.06646,0,.51111],711:[0,.62847,.08295,0,.51111],713:[0,.56167,.10333,0,.51111],714:[0,.69444,.09694,0,.51111],715:[0,.69444,0,0,.51111],728:[0,.69444,.10806,0,.51111],729:[0,.66786,.11752,0,.30667],730:[0,.69444,0,0,.83129],732:[0,.66786,.11585,0,.51111],733:[0,.69444,.1225,0,.51111],915:[0,.68333,.13305,0,.62722],916:[0,.68333,0,0,.81777],920:[0,.68333,.09403,0,.76666],923:[0,.68333,0,0,.69222],926:[0,.68333,.15294,0,.66444],928:[0,.68333,.16389,0,.74333],931:[0,.68333,.12028,0,.71555],933:[0,.68333,.11111,0,.76666],934:[0,.68333,.05986,0,.71555],936:[0,.68333,.11111,0,.76666],937:[0,.68333,.10257,0,.71555],8211:[0,.43056,.09208,0,.51111],8212:[0,.43056,.09208,0,1.02222],8216:[0,.69444,.12417,0,.30667],8217:[0,.69444,.12417,0,.30667],8220:[0,.69444,.1685,0,.51444],8221:[0,.69444,.06961,0,.51444],8463:[0,.68889,0,0,.54028]},"Main-Regular":{32:[0,0,0,0,.25],33:[0,.69444,0,0,.27778],34:[0,.69444,0,0,.5],35:[.19444,.69444,0,0,.83334],36:[.05556,.75,0,0,.5],37:[.05556,.75,0,0,.83334],38:[0,.69444,0,0,.77778],39:[0,.69444,0,0,.27778],40:[.25,.75,0,0,.38889],41:[.25,.75,0,0,.38889],42:[0,.75,0,0,.5],43:[.08333,.58333,0,0,.77778],44:[.19444,.10556,0,0,.27778],45:[0,.43056,0,0,.33333],46:[0,.10556,0,0,.27778],47:[.25,.75,0,0,.5],48:[0,.64444,0,0,.5],49:[0,.64444,0,0,.5],50:[0,.64444,0,0,.5],51:[0,.64444,0,0,.5],52:[0,.64444,0,0,.5],53:[0,.64444,0,0,.5],54:[0,.64444,0,0,.5],55:[0,.64444,0,0,.5],56:[0,.64444,0,0,.5],57:[0,.64444,0,0,.5],58:[0,.43056,0,0,.27778],59:[.19444,.43056,0,0,.27778],60:[.0391,.5391,0,0,.77778],61:[-.13313,.36687,0,0,.77778],62:[.0391,.5391,0,0,.77778],63:[0,.69444,0,0,.47222],64:[0,.69444,0,0,.77778],65:[0,.68333,0,0,.75],66:[0,.68333,0,0,.70834],67:[0,.68333,0,0,.72222],68:[0,.68333,0,0,.76389],69:[0,.68333,0,0,.68056],70:[0,.68333,0,0,.65278],71:[0,.68333,0,0,.78472],72:[0,.68333,0,0,.75],73:[0,.68333,0,0,.36111],74:[0,.68333,0,0,.51389],75:[0,.68333,0,0,.77778],76:[0,.68333,0,0,.625],77:[0,.68333,0,0,.91667],78:[0,.68333,0,0,.75],79:[0,.68333,0,0,.77778],80:[0,.68333,0,0,.68056],81:[.19444,.68333,0,0,.77778],82:[0,.68333,0,0,.73611],83:[0,.68333,0,0,.55556],84:[0,.68333,0,0,.72222],85:[0,.68333,0,0,.75],86:[0,.68333,.01389,0,.75],87:[0,.68333,.01389,0,1.02778],88:[0,.68333,0,0,.75],89:[0,.68333,.025,0,.75],90:[0,.68333,0,0,.61111],91:[.25,.75,0,0,.27778],92:[.25,.75,0,0,.5],93:[.25,.75,0,0,.27778],94:[0,.69444,0,0,.5],95:[.31,.12056,.02778,0,.5],97:[0,.43056,0,0,.5],98:[0,.69444,0,0,.55556],99:[0,.43056,0,0,.44445],100:[0,.69444,0,0,.55556],101:[0,.43056,0,0,.44445],102:[0,.69444,.07778,0,.30556],103:[.19444,.43056,.01389,0,.5],104:[0,.69444,0,0,.55556],105:[0,.66786,0,0,.27778],106:[.19444,.66786,0,0,.30556],107:[0,.69444,0,0,.52778],108:[0,.69444,0,0,.27778],109:[0,.43056,0,0,.83334],110:[0,.43056,0,0,.55556],111:[0,.43056,0,0,.5],112:[.19444,.43056,0,0,.55556],113:[.19444,.43056,0,0,.52778],114:[0,.43056,0,0,.39167],115:[0,.43056,0,0,.39445],116:[0,.61508,0,0,.38889],117:[0,.43056,0,0,.55556],118:[0,.43056,.01389,0,.52778],119:[0,.43056,.01389,0,.72222],120:[0,.43056,0,0,.52778],121:[.19444,.43056,.01389,0,.52778],122:[0,.43056,0,0,.44445],123:[.25,.75,0,0,.5],124:[.25,.75,0,0,.27778],125:[.25,.75,0,0,.5],126:[.35,.31786,0,0,.5],160:[0,0,0,0,.25],163:[0,.69444,0,0,.76909],167:[.19444,.69444,0,0,.44445],168:[0,.66786,0,0,.5],172:[0,.43056,0,0,.66667],176:[0,.69444,0,0,.75],177:[.08333,.58333,0,0,.77778],182:[.19444,.69444,0,0,.61111],184:[.17014,0,0,0,.44445],198:[0,.68333,0,0,.90278],215:[.08333,.58333,0,0,.77778],216:[.04861,.73194,0,0,.77778],223:[0,.69444,0,0,.5],230:[0,.43056,0,0,.72222],247:[.08333,.58333,0,0,.77778],248:[.09722,.52778,0,0,.5],305:[0,.43056,0,0,.27778],338:[0,.68333,0,0,1.01389],339:[0,.43056,0,0,.77778],567:[.19444,.43056,0,0,.30556],710:[0,.69444,0,0,.5],711:[0,.62847,0,0,.5],713:[0,.56778,0,0,.5],714:[0,.69444,0,0,.5],715:[0,.69444,0,0,.5],728:[0,.69444,0,0,.5],729:[0,.66786,0,0,.27778],730:[0,.69444,0,0,.75],732:[0,.66786,0,0,.5],733:[0,.69444,0,0,.5],915:[0,.68333,0,0,.625],916:[0,.68333,0,0,.83334],920:[0,.68333,0,0,.77778],923:[0,.68333,0,0,.69445],926:[0,.68333,0,0,.66667],928:[0,.68333,0,0,.75],931:[0,.68333,0,0,.72222],933:[0,.68333,0,0,.77778],934:[0,.68333,0,0,.72222],936:[0,.68333,0,0,.77778],937:[0,.68333,0,0,.72222],8211:[0,.43056,.02778,0,.5],8212:[0,.43056,.02778,0,1],8216:[0,.69444,0,0,.27778],8217:[0,.69444,0,0,.27778],8220:[0,.69444,0,0,.5],8221:[0,.69444,0,0,.5],8224:[.19444,.69444,0,0,.44445],8225:[.19444,.69444,0,0,.44445],8230:[0,.123,0,0,1.172],8242:[0,.55556,0,0,.275],8407:[0,.71444,.15382,0,.5],8463:[0,.68889,0,0,.54028],8465:[0,.69444,0,0,.72222],8467:[0,.69444,0,.11111,.41667],8472:[.19444,.43056,0,.11111,.63646],8476:[0,.69444,0,0,.72222],8501:[0,.69444,0,0,.61111],8592:[-.13313,.36687,0,0,1],8593:[.19444,.69444,0,0,.5],8594:[-.13313,.36687,0,0,1],8595:[.19444,.69444,0,0,.5],8596:[-.13313,.36687,0,0,1],8597:[.25,.75,0,0,.5],8598:[.19444,.69444,0,0,1],8599:[.19444,.69444,0,0,1],8600:[.19444,.69444,0,0,1],8601:[.19444,.69444,0,0,1],8614:[.011,.511,0,0,1],8617:[.011,.511,0,0,1.126],8618:[.011,.511,0,0,1.126],8636:[-.13313,.36687,0,0,1],8637:[-.13313,.36687,0,0,1],8640:[-.13313,.36687,0,0,1],8641:[-.13313,.36687,0,0,1],8652:[.011,.671,0,0,1],8656:[-.13313,.36687,0,0,1],8657:[.19444,.69444,0,0,.61111],8658:[-.13313,.36687,0,0,1],8659:[.19444,.69444,0,0,.61111],8660:[-.13313,.36687,0,0,1],8661:[.25,.75,0,0,.61111],8704:[0,.69444,0,0,.55556],8706:[0,.69444,.05556,.08334,.5309],8707:[0,.69444,0,0,.55556],8709:[.05556,.75,0,0,.5],8711:[0,.68333,0,0,.83334],8712:[.0391,.5391,0,0,.66667],8715:[.0391,.5391,0,0,.66667],8722:[.08333,.58333,0,0,.77778],8723:[.08333,.58333,0,0,.77778],8725:[.25,.75,0,0,.5],8726:[.25,.75,0,0,.5],8727:[-.03472,.46528,0,0,.5],8728:[-.05555,.44445,0,0,.5],8729:[-.05555,.44445,0,0,.5],8730:[.2,.8,0,0,.83334],8733:[0,.43056,0,0,.77778],8734:[0,.43056,0,0,1],8736:[0,.69224,0,0,.72222],8739:[.25,.75,0,0,.27778],8741:[.25,.75,0,0,.5],8743:[0,.55556,0,0,.66667],8744:[0,.55556,0,0,.66667],8745:[0,.55556,0,0,.66667],8746:[0,.55556,0,0,.66667],8747:[.19444,.69444,.11111,0,.41667],8764:[-.13313,.36687,0,0,.77778],8768:[.19444,.69444,0,0,.27778],8771:[-.03625,.46375,0,0,.77778],8773:[-.022,.589,0,0,.778],8776:[-.01688,.48312,0,0,.77778],8781:[-.03625,.46375,0,0,.77778],8784:[-.133,.673,0,0,.778],8801:[-.03625,.46375,0,0,.77778],8804:[.13597,.63597,0,0,.77778],8805:[.13597,.63597,0,0,.77778],8810:[.0391,.5391,0,0,1],8811:[.0391,.5391,0,0,1],8826:[.0391,.5391,0,0,.77778],8827:[.0391,.5391,0,0,.77778],8834:[.0391,.5391,0,0,.77778],8835:[.0391,.5391,0,0,.77778],8838:[.13597,.63597,0,0,.77778],8839:[.13597,.63597,0,0,.77778],8846:[0,.55556,0,0,.66667],8849:[.13597,.63597,0,0,.77778],8850:[.13597,.63597,0,0,.77778],8851:[0,.55556,0,0,.66667],8852:[0,.55556,0,0,.66667],8853:[.08333,.58333,0,0,.77778],8854:[.08333,.58333,0,0,.77778],8855:[.08333,.58333,0,0,.77778],8856:[.08333,.58333,0,0,.77778],8857:[.08333,.58333,0,0,.77778],8866:[0,.69444,0,0,.61111],8867:[0,.69444,0,0,.61111],8868:[0,.69444,0,0,.77778],8869:[0,.69444,0,0,.77778],8872:[.249,.75,0,0,.867],8900:[-.05555,.44445,0,0,.5],8901:[-.05555,.44445,0,0,.27778],8902:[-.03472,.46528,0,0,.5],8904:[.005,.505,0,0,.9],8942:[.03,.903,0,0,.278],8943:[-.19,.313,0,0,1.172],8945:[-.1,.823,0,0,1.282],8968:[.25,.75,0,0,.44445],8969:[.25,.75,0,0,.44445],8970:[.25,.75,0,0,.44445],8971:[.25,.75,0,0,.44445],8994:[-.14236,.35764,0,0,1],8995:[-.14236,.35764,0,0,1],9136:[.244,.744,0,0,.412],9137:[.244,.745,0,0,.412],9651:[.19444,.69444,0,0,.88889],9657:[-.03472,.46528,0,0,.5],9661:[.19444,.69444,0,0,.88889],9667:[-.03472,.46528,0,0,.5],9711:[.19444,.69444,0,0,1],9824:[.12963,.69444,0,0,.77778],9825:[.12963,.69444,0,0,.77778],9826:[.12963,.69444,0,0,.77778],9827:[.12963,.69444,0,0,.77778],9837:[0,.75,0,0,.38889],9838:[.19444,.69444,0,0,.38889],9839:[.19444,.69444,0,0,.38889],10216:[.25,.75,0,0,.38889],10217:[.25,.75,0,0,.38889],10222:[.244,.744,0,0,.412],10223:[.244,.745,0,0,.412],10229:[.011,.511,0,0,1.609],10230:[.011,.511,0,0,1.638],10231:[.011,.511,0,0,1.859],10232:[.024,.525,0,0,1.609],10233:[.024,.525,0,0,1.638],10234:[.024,.525,0,0,1.858],10236:[.011,.511,0,0,1.638],10815:[0,.68333,0,0,.75],10927:[.13597,.63597,0,0,.77778],10928:[.13597,.63597,0,0,.77778],57376:[.19444,.69444,0,0,0]},"Math-BoldItalic":{32:[0,0,0,0,.25],48:[0,.44444,0,0,.575],49:[0,.44444,0,0,.575],50:[0,.44444,0,0,.575],51:[.19444,.44444,0,0,.575],52:[.19444,.44444,0,0,.575],53:[.19444,.44444,0,0,.575],54:[0,.64444,0,0,.575],55:[.19444,.44444,0,0,.575],56:[0,.64444,0,0,.575],57:[.19444,.44444,0,0,.575],65:[0,.68611,0,0,.86944],66:[0,.68611,.04835,0,.8664],67:[0,.68611,.06979,0,.81694],68:[0,.68611,.03194,0,.93812],69:[0,.68611,.05451,0,.81007],70:[0,.68611,.15972,0,.68889],71:[0,.68611,0,0,.88673],72:[0,.68611,.08229,0,.98229],73:[0,.68611,.07778,0,.51111],74:[0,.68611,.10069,0,.63125],75:[0,.68611,.06979,0,.97118],76:[0,.68611,0,0,.75555],77:[0,.68611,.11424,0,1.14201],78:[0,.68611,.11424,0,.95034],79:[0,.68611,.03194,0,.83666],80:[0,.68611,.15972,0,.72309],81:[.19444,.68611,0,0,.86861],82:[0,.68611,.00421,0,.87235],83:[0,.68611,.05382,0,.69271],84:[0,.68611,.15972,0,.63663],85:[0,.68611,.11424,0,.80027],86:[0,.68611,.25555,0,.67778],87:[0,.68611,.15972,0,1.09305],88:[0,.68611,.07778,0,.94722],89:[0,.68611,.25555,0,.67458],90:[0,.68611,.06979,0,.77257],97:[0,.44444,0,0,.63287],98:[0,.69444,0,0,.52083],99:[0,.44444,0,0,.51342],100:[0,.69444,0,0,.60972],101:[0,.44444,0,0,.55361],102:[.19444,.69444,.11042,0,.56806],103:[.19444,.44444,.03704,0,.5449],104:[0,.69444,0,0,.66759],105:[0,.69326,0,0,.4048],106:[.19444,.69326,.0622,0,.47083],107:[0,.69444,.01852,0,.6037],108:[0,.69444,.0088,0,.34815],109:[0,.44444,0,0,1.0324],110:[0,.44444,0,0,.71296],111:[0,.44444,0,0,.58472],112:[.19444,.44444,0,0,.60092],113:[.19444,.44444,.03704,0,.54213],114:[0,.44444,.03194,0,.5287],115:[0,.44444,0,0,.53125],116:[0,.63492,0,0,.41528],117:[0,.44444,0,0,.68102],118:[0,.44444,.03704,0,.56666],119:[0,.44444,.02778,0,.83148],120:[0,.44444,0,0,.65903],121:[.19444,.44444,.03704,0,.59028],122:[0,.44444,.04213,0,.55509],160:[0,0,0,0,.25],915:[0,.68611,.15972,0,.65694],916:[0,.68611,0,0,.95833],920:[0,.68611,.03194,0,.86722],923:[0,.68611,0,0,.80555],926:[0,.68611,.07458,0,.84125],928:[0,.68611,.08229,0,.98229],931:[0,.68611,.05451,0,.88507],933:[0,.68611,.15972,0,.67083],934:[0,.68611,0,0,.76666],936:[0,.68611,.11653,0,.71402],937:[0,.68611,.04835,0,.8789],945:[0,.44444,0,0,.76064],946:[.19444,.69444,.03403,0,.65972],947:[.19444,.44444,.06389,0,.59003],948:[0,.69444,.03819,0,.52222],949:[0,.44444,0,0,.52882],950:[.19444,.69444,.06215,0,.50833],951:[.19444,.44444,.03704,0,.6],952:[0,.69444,.03194,0,.5618],953:[0,.44444,0,0,.41204],954:[0,.44444,0,0,.66759],955:[0,.69444,0,0,.67083],956:[.19444,.44444,0,0,.70787],957:[0,.44444,.06898,0,.57685],958:[.19444,.69444,.03021,0,.50833],959:[0,.44444,0,0,.58472],960:[0,.44444,.03704,0,.68241],961:[.19444,.44444,0,0,.6118],962:[.09722,.44444,.07917,0,.42361],963:[0,.44444,.03704,0,.68588],964:[0,.44444,.13472,0,.52083],965:[0,.44444,.03704,0,.63055],966:[.19444,.44444,0,0,.74722],967:[.19444,.44444,0,0,.71805],968:[.19444,.69444,.03704,0,.75833],969:[0,.44444,.03704,0,.71782],977:[0,.69444,0,0,.69155],981:[.19444,.69444,0,0,.7125],982:[0,.44444,.03194,0,.975],1009:[.19444,.44444,0,0,.6118],1013:[0,.44444,0,0,.48333],57649:[0,.44444,0,0,.39352],57911:[.19444,.44444,0,0,.43889]},"Math-Italic":{32:[0,0,0,0,.25],48:[0,.43056,0,0,.5],49:[0,.43056,0,0,.5],50:[0,.43056,0,0,.5],51:[.19444,.43056,0,0,.5],52:[.19444,.43056,0,0,.5],53:[.19444,.43056,0,0,.5],54:[0,.64444,0,0,.5],55:[.19444,.43056,0,0,.5],56:[0,.64444,0,0,.5],57:[.19444,.43056,0,0,.5],65:[0,.68333,0,.13889,.75],66:[0,.68333,.05017,.08334,.75851],67:[0,.68333,.07153,.08334,.71472],68:[0,.68333,.02778,.05556,.82792],69:[0,.68333,.05764,.08334,.7382],70:[0,.68333,.13889,.08334,.64306],71:[0,.68333,0,.08334,.78625],72:[0,.68333,.08125,.05556,.83125],73:[0,.68333,.07847,.11111,.43958],74:[0,.68333,.09618,.16667,.55451],75:[0,.68333,.07153,.05556,.84931],76:[0,.68333,0,.02778,.68056],77:[0,.68333,.10903,.08334,.97014],78:[0,.68333,.10903,.08334,.80347],79:[0,.68333,.02778,.08334,.76278],80:[0,.68333,.13889,.08334,.64201],81:[.19444,.68333,0,.08334,.79056],82:[0,.68333,.00773,.08334,.75929],83:[0,.68333,.05764,.08334,.6132],84:[0,.68333,.13889,.08334,.58438],85:[0,.68333,.10903,.02778,.68278],86:[0,.68333,.22222,0,.58333],87:[0,.68333,.13889,0,.94445],88:[0,.68333,.07847,.08334,.82847],89:[0,.68333,.22222,0,.58056],90:[0,.68333,.07153,.08334,.68264],97:[0,.43056,0,0,.52859],98:[0,.69444,0,0,.42917],99:[0,.43056,0,.05556,.43276],100:[0,.69444,0,.16667,.52049],101:[0,.43056,0,.05556,.46563],102:[.19444,.69444,.10764,.16667,.48959],103:[.19444,.43056,.03588,.02778,.47697],104:[0,.69444,0,0,.57616],105:[0,.65952,0,0,.34451],106:[.19444,.65952,.05724,0,.41181],107:[0,.69444,.03148,0,.5206],108:[0,.69444,.01968,.08334,.29838],109:[0,.43056,0,0,.87801],110:[0,.43056,0,0,.60023],111:[0,.43056,0,.05556,.48472],112:[.19444,.43056,0,.08334,.50313],113:[.19444,.43056,.03588,.08334,.44641],114:[0,.43056,.02778,.05556,.45116],115:[0,.43056,0,.05556,.46875],116:[0,.61508,0,.08334,.36111],117:[0,.43056,0,.02778,.57246],118:[0,.43056,.03588,.02778,.48472],119:[0,.43056,.02691,.08334,.71592],120:[0,.43056,0,.02778,.57153],121:[.19444,.43056,.03588,.05556,.49028],122:[0,.43056,.04398,.05556,.46505],160:[0,0,0,0,.25],915:[0,.68333,.13889,.08334,.61528],916:[0,.68333,0,.16667,.83334],920:[0,.68333,.02778,.08334,.76278],923:[0,.68333,0,.16667,.69445],926:[0,.68333,.07569,.08334,.74236],928:[0,.68333,.08125,.05556,.83125],931:[0,.68333,.05764,.08334,.77986],933:[0,.68333,.13889,.05556,.58333],934:[0,.68333,0,.08334,.66667],936:[0,.68333,.11,.05556,.61222],937:[0,.68333,.05017,.08334,.7724],945:[0,.43056,.0037,.02778,.6397],946:[.19444,.69444,.05278,.08334,.56563],947:[.19444,.43056,.05556,0,.51773],948:[0,.69444,.03785,.05556,.44444],949:[0,.43056,0,.08334,.46632],950:[.19444,.69444,.07378,.08334,.4375],951:[.19444,.43056,.03588,.05556,.49653],952:[0,.69444,.02778,.08334,.46944],953:[0,.43056,0,.05556,.35394],954:[0,.43056,0,0,.57616],955:[0,.69444,0,0,.58334],956:[.19444,.43056,0,.02778,.60255],957:[0,.43056,.06366,.02778,.49398],958:[.19444,.69444,.04601,.11111,.4375],959:[0,.43056,0,.05556,.48472],960:[0,.43056,.03588,0,.57003],961:[.19444,.43056,0,.08334,.51702],962:[.09722,.43056,.07986,.08334,.36285],963:[0,.43056,.03588,0,.57141],964:[0,.43056,.1132,.02778,.43715],965:[0,.43056,.03588,.02778,.54028],966:[.19444,.43056,0,.08334,.65417],967:[.19444,.43056,0,.05556,.62569],968:[.19444,.69444,.03588,.11111,.65139],969:[0,.43056,.03588,0,.62245],977:[0,.69444,0,.08334,.59144],981:[.19444,.69444,0,.08334,.59583],982:[0,.43056,.02778,0,.82813],1009:[.19444,.43056,0,.08334,.51702],1013:[0,.43056,0,.05556,.4059],57649:[0,.43056,0,.02778,.32246],57911:[.19444,.43056,0,.08334,.38403]},"SansSerif-Bold":{32:[0,0,0,0,.25],33:[0,.69444,0,0,.36667],34:[0,.69444,0,0,.55834],35:[.19444,.69444,0,0,.91667],36:[.05556,.75,0,0,.55],37:[.05556,.75,0,0,1.02912],38:[0,.69444,0,0,.83056],39:[0,.69444,0,0,.30556],40:[.25,.75,0,0,.42778],41:[.25,.75,0,0,.42778],42:[0,.75,0,0,.55],43:[.11667,.61667,0,0,.85556],44:[.10556,.13056,0,0,.30556],45:[0,.45833,0,0,.36667],46:[0,.13056,0,0,.30556],47:[.25,.75,0,0,.55],48:[0,.69444,0,0,.55],49:[0,.69444,0,0,.55],50:[0,.69444,0,0,.55],51:[0,.69444,0,0,.55],52:[0,.69444,0,0,.55],53:[0,.69444,0,0,.55],54:[0,.69444,0,0,.55],55:[0,.69444,0,0,.55],56:[0,.69444,0,0,.55],57:[0,.69444,0,0,.55],58:[0,.45833,0,0,.30556],59:[.10556,.45833,0,0,.30556],61:[-.09375,.40625,0,0,.85556],63:[0,.69444,0,0,.51945],64:[0,.69444,0,0,.73334],65:[0,.69444,0,0,.73334],66:[0,.69444,0,0,.73334],67:[0,.69444,0,0,.70278],68:[0,.69444,0,0,.79445],69:[0,.69444,0,0,.64167],70:[0,.69444,0,0,.61111],71:[0,.69444,0,0,.73334],72:[0,.69444,0,0,.79445],73:[0,.69444,0,0,.33056],74:[0,.69444,0,0,.51945],75:[0,.69444,0,0,.76389],76:[0,.69444,0,0,.58056],77:[0,.69444,0,0,.97778],78:[0,.69444,0,0,.79445],79:[0,.69444,0,0,.79445],80:[0,.69444,0,0,.70278],81:[.10556,.69444,0,0,.79445],82:[0,.69444,0,0,.70278],83:[0,.69444,0,0,.61111],84:[0,.69444,0,0,.73334],85:[0,.69444,0,0,.76389],86:[0,.69444,.01528,0,.73334],87:[0,.69444,.01528,0,1.03889],88:[0,.69444,0,0,.73334],89:[0,.69444,.0275,0,.73334],90:[0,.69444,0,0,.67223],91:[.25,.75,0,0,.34306],93:[.25,.75,0,0,.34306],94:[0,.69444,0,0,.55],95:[.35,.10833,.03056,0,.55],97:[0,.45833,0,0,.525],98:[0,.69444,0,0,.56111],99:[0,.45833,0,0,.48889],100:[0,.69444,0,0,.56111],101:[0,.45833,0,0,.51111],102:[0,.69444,.07639,0,.33611],103:[.19444,.45833,.01528,0,.55],104:[0,.69444,0,0,.56111],105:[0,.69444,0,0,.25556],106:[.19444,.69444,0,0,.28611],107:[0,.69444,0,0,.53056],108:[0,.69444,0,0,.25556],109:[0,.45833,0,0,.86667],110:[0,.45833,0,0,.56111],111:[0,.45833,0,0,.55],112:[.19444,.45833,0,0,.56111],113:[.19444,.45833,0,0,.56111],114:[0,.45833,.01528,0,.37222],115:[0,.45833,0,0,.42167],116:[0,.58929,0,0,.40417],117:[0,.45833,0,0,.56111],118:[0,.45833,.01528,0,.5],119:[0,.45833,.01528,0,.74445],120:[0,.45833,0,0,.5],121:[.19444,.45833,.01528,0,.5],122:[0,.45833,0,0,.47639],126:[.35,.34444,0,0,.55],160:[0,0,0,0,.25],168:[0,.69444,0,0,.55],176:[0,.69444,0,0,.73334],180:[0,.69444,0,0,.55],184:[.17014,0,0,0,.48889],305:[0,.45833,0,0,.25556],567:[.19444,.45833,0,0,.28611],710:[0,.69444,0,0,.55],711:[0,.63542,0,0,.55],713:[0,.63778,0,0,.55],728:[0,.69444,0,0,.55],729:[0,.69444,0,0,.30556],730:[0,.69444,0,0,.73334],732:[0,.69444,0,0,.55],733:[0,.69444,0,0,.55],915:[0,.69444,0,0,.58056],916:[0,.69444,0,0,.91667],920:[0,.69444,0,0,.85556],923:[0,.69444,0,0,.67223],926:[0,.69444,0,0,.73334],928:[0,.69444,0,0,.79445],931:[0,.69444,0,0,.79445],933:[0,.69444,0,0,.85556],934:[0,.69444,0,0,.79445],936:[0,.69444,0,0,.85556],937:[0,.69444,0,0,.79445],8211:[0,.45833,.03056,0,.55],8212:[0,.45833,.03056,0,1.10001],8216:[0,.69444,0,0,.30556],8217:[0,.69444,0,0,.30556],8220:[0,.69444,0,0,.55834],8221:[0,.69444,0,0,.55834]},"SansSerif-Italic":{32:[0,0,0,0,.25],33:[0,.69444,.05733,0,.31945],34:[0,.69444,.00316,0,.5],35:[.19444,.69444,.05087,0,.83334],36:[.05556,.75,.11156,0,.5],37:[.05556,.75,.03126,0,.83334],38:[0,.69444,.03058,0,.75834],39:[0,.69444,.07816,0,.27778],40:[.25,.75,.13164,0,.38889],41:[.25,.75,.02536,0,.38889],42:[0,.75,.11775,0,.5],43:[.08333,.58333,.02536,0,.77778],44:[.125,.08333,0,0,.27778],45:[0,.44444,.01946,0,.33333],46:[0,.08333,0,0,.27778],47:[.25,.75,.13164,0,.5],48:[0,.65556,.11156,0,.5],49:[0,.65556,.11156,0,.5],50:[0,.65556,.11156,0,.5],51:[0,.65556,.11156,0,.5],52:[0,.65556,.11156,0,.5],53:[0,.65556,.11156,0,.5],54:[0,.65556,.11156,0,.5],55:[0,.65556,.11156,0,.5],56:[0,.65556,.11156,0,.5],57:[0,.65556,.11156,0,.5],58:[0,.44444,.02502,0,.27778],59:[.125,.44444,.02502,0,.27778],61:[-.13,.37,.05087,0,.77778],63:[0,.69444,.11809,0,.47222],64:[0,.69444,.07555,0,.66667],65:[0,.69444,0,0,.66667],66:[0,.69444,.08293,0,.66667],67:[0,.69444,.11983,0,.63889],68:[0,.69444,.07555,0,.72223],69:[0,.69444,.11983,0,.59722],70:[0,.69444,.13372,0,.56945],71:[0,.69444,.11983,0,.66667],72:[0,.69444,.08094,0,.70834],73:[0,.69444,.13372,0,.27778],74:[0,.69444,.08094,0,.47222],75:[0,.69444,.11983,0,.69445],76:[0,.69444,0,0,.54167],77:[0,.69444,.08094,0,.875],78:[0,.69444,.08094,0,.70834],79:[0,.69444,.07555,0,.73611],80:[0,.69444,.08293,0,.63889],81:[.125,.69444,.07555,0,.73611],82:[0,.69444,.08293,0,.64584],83:[0,.69444,.09205,0,.55556],84:[0,.69444,.13372,0,.68056],85:[0,.69444,.08094,0,.6875],86:[0,.69444,.1615,0,.66667],87:[0,.69444,.1615,0,.94445],88:[0,.69444,.13372,0,.66667],89:[0,.69444,.17261,0,.66667],90:[0,.69444,.11983,0,.61111],91:[.25,.75,.15942,0,.28889],93:[.25,.75,.08719,0,.28889],94:[0,.69444,.0799,0,.5],95:[.35,.09444,.08616,0,.5],97:[0,.44444,.00981,0,.48056],98:[0,.69444,.03057,0,.51667],99:[0,.44444,.08336,0,.44445],100:[0,.69444,.09483,0,.51667],101:[0,.44444,.06778,0,.44445],102:[0,.69444,.21705,0,.30556],103:[.19444,.44444,.10836,0,.5],104:[0,.69444,.01778,0,.51667],105:[0,.67937,.09718,0,.23889],106:[.19444,.67937,.09162,0,.26667],107:[0,.69444,.08336,0,.48889],108:[0,.69444,.09483,0,.23889],109:[0,.44444,.01778,0,.79445],110:[0,.44444,.01778,0,.51667],111:[0,.44444,.06613,0,.5],112:[.19444,.44444,.0389,0,.51667],113:[.19444,.44444,.04169,0,.51667],114:[0,.44444,.10836,0,.34167],115:[0,.44444,.0778,0,.38333],116:[0,.57143,.07225,0,.36111],117:[0,.44444,.04169,0,.51667],118:[0,.44444,.10836,0,.46111],119:[0,.44444,.10836,0,.68334],120:[0,.44444,.09169,0,.46111],121:[.19444,.44444,.10836,0,.46111],122:[0,.44444,.08752,0,.43472],126:[.35,.32659,.08826,0,.5],160:[0,0,0,0,.25],168:[0,.67937,.06385,0,.5],176:[0,.69444,0,0,.73752],184:[.17014,0,0,0,.44445],305:[0,.44444,.04169,0,.23889],567:[.19444,.44444,.04169,0,.26667],710:[0,.69444,.0799,0,.5],711:[0,.63194,.08432,0,.5],713:[0,.60889,.08776,0,.5],714:[0,.69444,.09205,0,.5],715:[0,.69444,0,0,.5],728:[0,.69444,.09483,0,.5],729:[0,.67937,.07774,0,.27778],730:[0,.69444,0,0,.73752],732:[0,.67659,.08826,0,.5],733:[0,.69444,.09205,0,.5],915:[0,.69444,.13372,0,.54167],916:[0,.69444,0,0,.83334],920:[0,.69444,.07555,0,.77778],923:[0,.69444,0,0,.61111],926:[0,.69444,.12816,0,.66667],928:[0,.69444,.08094,0,.70834],931:[0,.69444,.11983,0,.72222],933:[0,.69444,.09031,0,.77778],934:[0,.69444,.04603,0,.72222],936:[0,.69444,.09031,0,.77778],937:[0,.69444,.08293,0,.72222],8211:[0,.44444,.08616,0,.5],8212:[0,.44444,.08616,0,1],8216:[0,.69444,.07816,0,.27778],8217:[0,.69444,.07816,0,.27778],8220:[0,.69444,.14205,0,.5],8221:[0,.69444,.00316,0,.5]},"SansSerif-Regular":{32:[0,0,0,0,.25],33:[0,.69444,0,0,.31945],34:[0,.69444,0,0,.5],35:[.19444,.69444,0,0,.83334],36:[.05556,.75,0,0,.5],37:[.05556,.75,0,0,.83334],38:[0,.69444,0,0,.75834],39:[0,.69444,0,0,.27778],40:[.25,.75,0,0,.38889],41:[.25,.75,0,0,.38889],42:[0,.75,0,0,.5],43:[.08333,.58333,0,0,.77778],44:[.125,.08333,0,0,.27778],45:[0,.44444,0,0,.33333],46:[0,.08333,0,0,.27778],47:[.25,.75,0,0,.5],48:[0,.65556,0,0,.5],49:[0,.65556,0,0,.5],50:[0,.65556,0,0,.5],51:[0,.65556,0,0,.5],52:[0,.65556,0,0,.5],53:[0,.65556,0,0,.5],54:[0,.65556,0,0,.5],55:[0,.65556,0,0,.5],56:[0,.65556,0,0,.5],57:[0,.65556,0,0,.5],58:[0,.44444,0,0,.27778],59:[.125,.44444,0,0,.27778],61:[-.13,.37,0,0,.77778],63:[0,.69444,0,0,.47222],64:[0,.69444,0,0,.66667],65:[0,.69444,0,0,.66667],66:[0,.69444,0,0,.66667],67:[0,.69444,0,0,.63889],68:[0,.69444,0,0,.72223],69:[0,.69444,0,0,.59722],70:[0,.69444,0,0,.56945],71:[0,.69444,0,0,.66667],72:[0,.69444,0,0,.70834],73:[0,.69444,0,0,.27778],74:[0,.69444,0,0,.47222],75:[0,.69444,0,0,.69445],76:[0,.69444,0,0,.54167],77:[0,.69444,0,0,.875],78:[0,.69444,0,0,.70834],79:[0,.69444,0,0,.73611],80:[0,.69444,0,0,.63889],81:[.125,.69444,0,0,.73611],82:[0,.69444,0,0,.64584],83:[0,.69444,0,0,.55556],84:[0,.69444,0,0,.68056],85:[0,.69444,0,0,.6875],86:[0,.69444,.01389,0,.66667],87:[0,.69444,.01389,0,.94445],88:[0,.69444,0,0,.66667],89:[0,.69444,.025,0,.66667],90:[0,.69444,0,0,.61111],91:[.25,.75,0,0,.28889],93:[.25,.75,0,0,.28889],94:[0,.69444,0,0,.5],95:[.35,.09444,.02778,0,.5],97:[0,.44444,0,0,.48056],98:[0,.69444,0,0,.51667],99:[0,.44444,0,0,.44445],100:[0,.69444,0,0,.51667],101:[0,.44444,0,0,.44445],102:[0,.69444,.06944,0,.30556],103:[.19444,.44444,.01389,0,.5],104:[0,.69444,0,0,.51667],105:[0,.67937,0,0,.23889],106:[.19444,.67937,0,0,.26667],107:[0,.69444,0,0,.48889],108:[0,.69444,0,0,.23889],109:[0,.44444,0,0,.79445],110:[0,.44444,0,0,.51667],111:[0,.44444,0,0,.5],112:[.19444,.44444,0,0,.51667],113:[.19444,.44444,0,0,.51667],114:[0,.44444,.01389,0,.34167],115:[0,.44444,0,0,.38333],116:[0,.57143,0,0,.36111],117:[0,.44444,0,0,.51667],118:[0,.44444,.01389,0,.46111],119:[0,.44444,.01389,0,.68334],120:[0,.44444,0,0,.46111],121:[.19444,.44444,.01389,0,.46111],122:[0,.44444,0,0,.43472],126:[.35,.32659,0,0,.5],160:[0,0,0,0,.25],168:[0,.67937,0,0,.5],176:[0,.69444,0,0,.66667],184:[.17014,0,0,0,.44445],305:[0,.44444,0,0,.23889],567:[.19444,.44444,0,0,.26667],710:[0,.69444,0,0,.5],711:[0,.63194,0,0,.5],713:[0,.60889,0,0,.5],714:[0,.69444,0,0,.5],715:[0,.69444,0,0,.5],728:[0,.69444,0,0,.5],729:[0,.67937,0,0,.27778],730:[0,.69444,0,0,.66667],732:[0,.67659,0,0,.5],733:[0,.69444,0,0,.5],915:[0,.69444,0,0,.54167],916:[0,.69444,0,0,.83334],920:[0,.69444,0,0,.77778],923:[0,.69444,0,0,.61111],926:[0,.69444,0,0,.66667],928:[0,.69444,0,0,.70834],931:[0,.69444,0,0,.72222],933:[0,.69444,0,0,.77778],934:[0,.69444,0,0,.72222],936:[0,.69444,0,0,.77778],937:[0,.69444,0,0,.72222],8211:[0,.44444,.02778,0,.5],8212:[0,.44444,.02778,0,1],8216:[0,.69444,0,0,.27778],8217:[0,.69444,0,0,.27778],8220:[0,.69444,0,0,.5],8221:[0,.69444,0,0,.5]},"Script-Regular":{32:[0,0,0,0,.25],65:[0,.7,.22925,0,.80253],66:[0,.7,.04087,0,.90757],67:[0,.7,.1689,0,.66619],68:[0,.7,.09371,0,.77443],69:[0,.7,.18583,0,.56162],70:[0,.7,.13634,0,.89544],71:[0,.7,.17322,0,.60961],72:[0,.7,.29694,0,.96919],73:[0,.7,.19189,0,.80907],74:[.27778,.7,.19189,0,1.05159],75:[0,.7,.31259,0,.91364],76:[0,.7,.19189,0,.87373],77:[0,.7,.15981,0,1.08031],78:[0,.7,.3525,0,.9015],79:[0,.7,.08078,0,.73787],80:[0,.7,.08078,0,1.01262],81:[0,.7,.03305,0,.88282],82:[0,.7,.06259,0,.85],83:[0,.7,.19189,0,.86767],84:[0,.7,.29087,0,.74697],85:[0,.7,.25815,0,.79996],86:[0,.7,.27523,0,.62204],87:[0,.7,.27523,0,.80532],88:[0,.7,.26006,0,.94445],89:[0,.7,.2939,0,.70961],90:[0,.7,.24037,0,.8212],160:[0,0,0,0,.25]},"Size1-Regular":{32:[0,0,0,0,.25],40:[.35001,.85,0,0,.45834],41:[.35001,.85,0,0,.45834],47:[.35001,.85,0,0,.57778],91:[.35001,.85,0,0,.41667],92:[.35001,.85,0,0,.57778],93:[.35001,.85,0,0,.41667],123:[.35001,.85,0,0,.58334],125:[.35001,.85,0,0,.58334],160:[0,0,0,0,.25],710:[0,.72222,0,0,.55556],732:[0,.72222,0,0,.55556],770:[0,.72222,0,0,.55556],771:[0,.72222,0,0,.55556],8214:[-99e-5,.601,0,0,.77778],8593:[1e-5,.6,0,0,.66667],8595:[1e-5,.6,0,0,.66667],8657:[1e-5,.6,0,0,.77778],8659:[1e-5,.6,0,0,.77778],8719:[.25001,.75,0,0,.94445],8720:[.25001,.75,0,0,.94445],8721:[.25001,.75,0,0,1.05556],8730:[.35001,.85,0,0,1],8739:[-.00599,.606,0,0,.33333],8741:[-.00599,.606,0,0,.55556],8747:[.30612,.805,.19445,0,.47222],8748:[.306,.805,.19445,0,.47222],8749:[.306,.805,.19445,0,.47222],8750:[.30612,.805,.19445,0,.47222],8896:[.25001,.75,0,0,.83334],8897:[.25001,.75,0,0,.83334],8898:[.25001,.75,0,0,.83334],8899:[.25001,.75,0,0,.83334],8968:[.35001,.85,0,0,.47222],8969:[.35001,.85,0,0,.47222],8970:[.35001,.85,0,0,.47222],8971:[.35001,.85,0,0,.47222],9168:[-99e-5,.601,0,0,.66667],10216:[.35001,.85,0,0,.47222],10217:[.35001,.85,0,0,.47222],10752:[.25001,.75,0,0,1.11111],10753:[.25001,.75,0,0,1.11111],10754:[.25001,.75,0,0,1.11111],10756:[.25001,.75,0,0,.83334],10758:[.25001,.75,0,0,.83334]},"Size2-Regular":{32:[0,0,0,0,.25],40:[.65002,1.15,0,0,.59722],41:[.65002,1.15,0,0,.59722],47:[.65002,1.15,0,0,.81111],91:[.65002,1.15,0,0,.47222],92:[.65002,1.15,0,0,.81111],93:[.65002,1.15,0,0,.47222],123:[.65002,1.15,0,0,.66667],125:[.65002,1.15,0,0,.66667],160:[0,0,0,0,.25],710:[0,.75,0,0,1],732:[0,.75,0,0,1],770:[0,.75,0,0,1],771:[0,.75,0,0,1],8719:[.55001,1.05,0,0,1.27778],8720:[.55001,1.05,0,0,1.27778],8721:[.55001,1.05,0,0,1.44445],8730:[.65002,1.15,0,0,1],8747:[.86225,1.36,.44445,0,.55556],8748:[.862,1.36,.44445,0,.55556],8749:[.862,1.36,.44445,0,.55556],8750:[.86225,1.36,.44445,0,.55556],8896:[.55001,1.05,0,0,1.11111],8897:[.55001,1.05,0,0,1.11111],8898:[.55001,1.05,0,0,1.11111],8899:[.55001,1.05,0,0,1.11111],8968:[.65002,1.15,0,0,.52778],8969:[.65002,1.15,0,0,.52778],8970:[.65002,1.15,0,0,.52778],8971:[.65002,1.15,0,0,.52778],10216:[.65002,1.15,0,0,.61111],10217:[.65002,1.15,0,0,.61111],10752:[.55001,1.05,0,0,1.51112],10753:[.55001,1.05,0,0,1.51112],10754:[.55001,1.05,0,0,1.51112],10756:[.55001,1.05,0,0,1.11111],10758:[.55001,1.05,0,0,1.11111]},"Size3-Regular":{32:[0,0,0,0,.25],40:[.95003,1.45,0,0,.73611],41:[.95003,1.45,0,0,.73611],47:[.95003,1.45,0,0,1.04445],91:[.95003,1.45,0,0,.52778],92:[.95003,1.45,0,0,1.04445],93:[.95003,1.45,0,0,.52778],123:[.95003,1.45,0,0,.75],125:[.95003,1.45,0,0,.75],160:[0,0,0,0,.25],710:[0,.75,0,0,1.44445],732:[0,.75,0,0,1.44445],770:[0,.75,0,0,1.44445],771:[0,.75,0,0,1.44445],8730:[.95003,1.45,0,0,1],8968:[.95003,1.45,0,0,.58334],8969:[.95003,1.45,0,0,.58334],8970:[.95003,1.45,0,0,.58334],8971:[.95003,1.45,0,0,.58334],10216:[.95003,1.45,0,0,.75],10217:[.95003,1.45,0,0,.75]},"Size4-Regular":{32:[0,0,0,0,.25],40:[1.25003,1.75,0,0,.79167],41:[1.25003,1.75,0,0,.79167],47:[1.25003,1.75,0,0,1.27778],91:[1.25003,1.75,0,0,.58334],92:[1.25003,1.75,0,0,1.27778],93:[1.25003,1.75,0,0,.58334],123:[1.25003,1.75,0,0,.80556],125:[1.25003,1.75,0,0,.80556],160:[0,0,0,0,.25],710:[0,.825,0,0,1.8889],732:[0,.825,0,0,1.8889],770:[0,.825,0,0,1.8889],771:[0,.825,0,0,1.8889],8730:[1.25003,1.75,0,0,1],8968:[1.25003,1.75,0,0,.63889],8969:[1.25003,1.75,0,0,.63889],8970:[1.25003,1.75,0,0,.63889],8971:[1.25003,1.75,0,0,.63889],9115:[.64502,1.155,0,0,.875],9116:[1e-5,.6,0,0,.875],9117:[.64502,1.155,0,0,.875],9118:[.64502,1.155,0,0,.875],9119:[1e-5,.6,0,0,.875],9120:[.64502,1.155,0,0,.875],9121:[.64502,1.155,0,0,.66667],9122:[-99e-5,.601,0,0,.66667],9123:[.64502,1.155,0,0,.66667],9124:[.64502,1.155,0,0,.66667],9125:[-99e-5,.601,0,0,.66667],9126:[.64502,1.155,0,0,.66667],9127:[1e-5,.9,0,0,.88889],9128:[.65002,1.15,0,0,.88889],9129:[.90001,0,0,0,.88889],9130:[0,.3,0,0,.88889],9131:[1e-5,.9,0,0,.88889],9132:[.65002,1.15,0,0,.88889],9133:[.90001,0,0,0,.88889],9143:[.88502,.915,0,0,1.05556],10216:[1.25003,1.75,0,0,.80556],10217:[1.25003,1.75,0,0,.80556],57344:[-.00499,.605,0,0,1.05556],57345:[-.00499,.605,0,0,1.05556],57680:[0,.12,0,0,.45],57681:[0,.12,0,0,.45],57682:[0,.12,0,0,.45],57683:[0,.12,0,0,.45]},"Typewriter-Regular":{32:[0,0,0,0,.525],33:[0,.61111,0,0,.525],34:[0,.61111,0,0,.525],35:[0,.61111,0,0,.525],36:[.08333,.69444,0,0,.525],37:[.08333,.69444,0,0,.525],38:[0,.61111,0,0,.525],39:[0,.61111,0,0,.525],40:[.08333,.69444,0,0,.525],41:[.08333,.69444,0,0,.525],42:[0,.52083,0,0,.525],43:[-.08056,.53055,0,0,.525],44:[.13889,.125,0,0,.525],45:[-.08056,.53055,0,0,.525],46:[0,.125,0,0,.525],47:[.08333,.69444,0,0,.525],48:[0,.61111,0,0,.525],49:[0,.61111,0,0,.525],50:[0,.61111,0,0,.525],51:[0,.61111,0,0,.525],52:[0,.61111,0,0,.525],53:[0,.61111,0,0,.525],54:[0,.61111,0,0,.525],55:[0,.61111,0,0,.525],56:[0,.61111,0,0,.525],57:[0,.61111,0,0,.525],58:[0,.43056,0,0,.525],59:[.13889,.43056,0,0,.525],60:[-.05556,.55556,0,0,.525],61:[-.19549,.41562,0,0,.525],62:[-.05556,.55556,0,0,.525],63:[0,.61111,0,0,.525],64:[0,.61111,0,0,.525],65:[0,.61111,0,0,.525],66:[0,.61111,0,0,.525],67:[0,.61111,0,0,.525],68:[0,.61111,0,0,.525],69:[0,.61111,0,0,.525],70:[0,.61111,0,0,.525],71:[0,.61111,0,0,.525],72:[0,.61111,0,0,.525],73:[0,.61111,0,0,.525],74:[0,.61111,0,0,.525],75:[0,.61111,0,0,.525],76:[0,.61111,0,0,.525],77:[0,.61111,0,0,.525],78:[0,.61111,0,0,.525],79:[0,.61111,0,0,.525],80:[0,.61111,0,0,.525],81:[.13889,.61111,0,0,.525],82:[0,.61111,0,0,.525],83:[0,.61111,0,0,.525],84:[0,.61111,0,0,.525],85:[0,.61111,0,0,.525],86:[0,.61111,0,0,.525],87:[0,.61111,0,0,.525],88:[0,.61111,0,0,.525],89:[0,.61111,0,0,.525],90:[0,.61111,0,0,.525],91:[.08333,.69444,0,0,.525],92:[.08333,.69444,0,0,.525],93:[.08333,.69444,0,0,.525],94:[0,.61111,0,0,.525],95:[.09514,0,0,0,.525],96:[0,.61111,0,0,.525],97:[0,.43056,0,0,.525],98:[0,.61111,0,0,.525],99:[0,.43056,0,0,.525],100:[0,.61111,0,0,.525],101:[0,.43056,0,0,.525],102:[0,.61111,0,0,.525],103:[.22222,.43056,0,0,.525],104:[0,.61111,0,0,.525],105:[0,.61111,0,0,.525],106:[.22222,.61111,0,0,.525],107:[0,.61111,0,0,.525],108:[0,.61111,0,0,.525],109:[0,.43056,0,0,.525],110:[0,.43056,0,0,.525],111:[0,.43056,0,0,.525],112:[.22222,.43056,0,0,.525],113:[.22222,.43056,0,0,.525],114:[0,.43056,0,0,.525],115:[0,.43056,0,0,.525],116:[0,.55358,0,0,.525],117:[0,.43056,0,0,.525],118:[0,.43056,0,0,.525],119:[0,.43056,0,0,.525],120:[0,.43056,0,0,.525],121:[.22222,.43056,0,0,.525],122:[0,.43056,0,0,.525],123:[.08333,.69444,0,0,.525],124:[.08333,.69444,0,0,.525],125:[.08333,.69444,0,0,.525],126:[0,.61111,0,0,.525],127:[0,.61111,0,0,.525],160:[0,0,0,0,.525],176:[0,.61111,0,0,.525],184:[.19445,0,0,0,.525],305:[0,.43056,0,0,.525],567:[.22222,.43056,0,0,.525],711:[0,.56597,0,0,.525],713:[0,.56555,0,0,.525],714:[0,.61111,0,0,.525],715:[0,.61111,0,0,.525],728:[0,.61111,0,0,.525],730:[0,.61111,0,0,.525],770:[0,.61111,0,0,.525],771:[0,.61111,0,0,.525],776:[0,.61111,0,0,.525],915:[0,.61111,0,0,.525],916:[0,.61111,0,0,.525],920:[0,.61111,0,0,.525],923:[0,.61111,0,0,.525],926:[0,.61111,0,0,.525],928:[0,.61111,0,0,.525],931:[0,.61111,0,0,.525],933:[0,.61111,0,0,.525],934:[0,.61111,0,0,.525],936:[0,.61111,0,0,.525],937:[0,.61111,0,0,.525],8216:[0,.61111,0,0,.525],8217:[0,.61111,0,0,.525],8242:[0,.61111,0,0,.525],9251:[.11111,.21944,0,0,.525]}},El={slant:[.25,.25,.25],space:[0,0,0],stretch:[0,0,0],shrink:[0,0,0],xHeight:[.431,.431,.431],quad:[1,1.171,1.472],extraSpace:[0,0,0],num1:[.677,.732,.925],num2:[.394,.384,.387],num3:[.444,.471,.504],denom1:[.686,.752,1.025],denom2:[.345,.344,.532],sup1:[.413,.503,.504],sup2:[.363,.431,.404],sup3:[.289,.286,.294],sub1:[.15,.143,.2],sub2:[.247,.286,.4],supDrop:[.386,.353,.494],subDrop:[.05,.071,.1],delim1:[2.39,1.7,1.98],delim2:[1.01,1.157,1.42],axisHeight:[.25,.25,.25],defaultRuleThickness:[.04,.049,.049],bigOpSpacing1:[.111,.111,.111],bigOpSpacing2:[.166,.166,.166],bigOpSpacing3:[.2,.2,.2],bigOpSpacing4:[.6,.611,.611],bigOpSpacing5:[.1,.143,.143],sqrtRuleThickness:[.04,.04,.04],ptPerEm:[10,10,10],doubleRuleSep:[.2,.2,.2],arrayRuleWidth:[.04,.04,.04],fboxsep:[.3,.3,.3],fboxrule:[.04,.04,.04]},Od={Å:"A",Ð:"D",Þ:"o",å:"a",ð:"d",þ:"o",А:"A",Б:"B",В:"B",Г:"F",Д:"A",Е:"E",Ж:"K",З:"3",И:"N",Й:"N",К:"K",Л:"N",М:"M",Н:"H",О:"O",П:"N",Р:"P",С:"C",Т:"T",У:"y",Ф:"O",Х:"X",Ц:"U",Ч:"h",Ш:"W",Щ:"W",Ъ:"B",Ы:"X",Ь:"B",Э:"3",Ю:"X",Я:"R",а:"a",б:"b",в:"a",г:"r",д:"y",е:"e",ж:"m",з:"e",и:"n",й:"n",к:"n",л:"n",м:"m",н:"n",о:"o",п:"n",р:"p",с:"c",т:"o",у:"y",ф:"b",х:"x",ц:"n",ч:"n",ш:"w",щ:"w",ъ:"a",ы:"m",ь:"a",э:"e",ю:"m",я:"r"};function yw(e,t){bn[e]=t}function nc(e,t,n){if(!bn[t])throw new Error("Font metrics not found for font: "+t+".");var r=e.charCodeAt(0),a=bn[t][r];if(!a&&e[0]in Od&&(r=Od[e[0]].charCodeAt(0),a=bn[t][r]),!a&&n==="text"&&bg(r)&&(a=bn[t][77]),a)return{depth:a[0],height:a[1],italic:a[2],skew:a[3],width:a[4]}}var au={};function vw(e){var t;if(e>=5?t=0:e>=3?t=1:t=2,!au[t]){var n=au[t]={cssEmPerMu:El.quad[t]/18};for(var r in El)El.hasOwnProperty(r)&&(n[r]=El[r][t])}return au[t]}var xw=[[1,1,1],[2,1,1],[3,1,1],[4,2,1],[5,2,1],[6,3,1],[7,4,2],[8,6,3],[9,7,6],[10,8,7],[11,10,9]],Bd=[.5,.6,.7,.8,.9,1,1.2,1.44,1.728,2.074,2.488],Ld=function(t,n){return n.size<2?t:xw[t-1][n.size-1]};class An{constructor(t){this.style=void 0,this.color=void 0,this.size=void 0,this.textSize=void 0,this.phantom=void 0,this.font=void 0,this.fontFamily=void 0,this.fontWeight=void 0,this.fontShape=void 0,this.sizeMultiplier=void 0,this.maxSize=void 0,this.minRuleThickness=void 0,this._fontMetrics=void 0,this.style=t.style,this.color=t.color,this.size=t.size||An.BASESIZE,this.textSize=t.textSize||this.size,this.phantom=!!t.phantom,this.font=t.font||"",this.fontFamily=t.fontFamily||"",this.fontWeight=t.fontWeight||"",this.fontShape=t.fontShape||"",this.sizeMultiplier=Bd[this.size-1],this.maxSize=t.maxSize,this.minRuleThickness=t.minRuleThickness,this._fontMetrics=void 0}extend(t){var n={style:this.style,size:this.size,textSize:this.textSize,color:this.color,phantom:this.phantom,font:this.font,fontFamily:this.fontFamily,fontWeight:this.fontWeight,fontShape:this.fontShape,maxSize:this.maxSize,minRuleThickness:this.minRuleThickness};for(var r in t)t.hasOwnProperty(r)&&(n[r]=t[r]);return new An(n)}havingStyle(t){return this.style===t?this:this.extend({style:t,size:Ld(this.textSize,t)})}havingCrampedStyle(){return this.havingStyle(this.style.cramp())}havingSize(t){return this.size===t&&this.textSize===t?this:this.extend({style:this.style.text(),size:t,textSize:t,sizeMultiplier:Bd[t-1]})}havingBaseStyle(t){t=t||this.style.text();var n=Ld(An.BASESIZE,t);return this.size===n&&this.textSize===An.BASESIZE&&this.style===t?this:this.extend({style:t,size:n})}havingBaseSizing(){var t;switch(this.style.id){case 4:case 5:t=3;break;case 6:case 7:t=1;break;default:t=6}return this.extend({style:this.style.text(),size:t})}withColor(t){return this.extend({color:t})}withPhantom(){return this.extend({phantom:!0})}withFont(t){return this.extend({font:t})}withTextFontFamily(t){return this.extend({fontFamily:t,font:""})}withTextFontWeight(t){return this.extend({fontWeight:t,font:""})}withTextFontShape(t){return this.extend({fontShape:t,font:""})}sizingClasses(t){return t.size!==this.size?["sizing","reset-size"+t.size,"size"+this.size]:[]}baseSizingClasses(){return this.size!==An.BASESIZE?["sizing","reset-size"+this.size,"size"+An.BASESIZE]:[]}fontMetrics(){return this._fontMetrics||(this._fontMetrics=vw(this.size)),this._fontMetrics}getColor(){return this.phantom?"transparent":this.color}}An.BASESIZE=6;var D0={pt:1,mm:7227/2540,cm:7227/254,in:72.27,bp:803/800,pc:12,dd:1238/1157,cc:14856/1157,nd:685/642,nc:1370/107,sp:1/65536,px:803/800},ww={ex:!0,em:!0,mu:!0},gg=function(t){return typeof t!="string"&&(t=t.unit),t in D0||t in ww||t==="ex"},Ie=function(t,n){var r;if(t.unit in D0)r=D0[t.unit]/n.fontMetrics().ptPerEm/n.sizeMultiplier;else if(t.unit==="mu")r=n.fontMetrics().cssEmPerMu;else{var a;if(n.style.isTight()?a=n.havingStyle(n.style.text()):a=n,t.unit==="ex")r=a.fontMetrics().xHeight;else if(t.unit==="em")r=a.fontMetrics().quad;else throw new H("Invalid unit: '"+t.unit+"'");a!==n&&(r*=a.sizeMultiplier/n.sizeMultiplier)}return Math.min(t.number*r,n.maxSize)},K=function(t){return+t.toFixed(4)+"em"},yr=function(t){return t.filter(n=>n).join(" ")},yg=function(t,n,r){if(this.classes=t||[],this.attributes={},this.height=0,this.depth=0,this.maxFontSize=0,this.style=r||{},n){n.style.isTight()&&this.classes.push("mtight");var a=n.getColor();a&&(this.style.color=a)}},vg=function(t){var n=document.createElement(t);n.className=yr(this.classes);for(var r in this.style)this.style.hasOwnProperty(r)&&(n.style[r]=this.style[r]);for(var a in this.attributes)this.attributes.hasOwnProperty(a)&&n.setAttribute(a,this.attributes[a]);for(var i=0;i<this.children.length;i++)n.appendChild(this.children[i].toNode());return n},xg=function(t){var n="<"+t;this.classes.length&&(n+=' class="'+te.escape(yr(this.classes))+'"');var r="";for(var a in this.style)this.style.hasOwnProperty(a)&&(r+=te.hyphenate(a)+":"+this.style[a]+";");r&&(n+=' style="'+te.escape(r)+'"');for(var i in this.attributes)this.attributes.hasOwnProperty(i)&&(n+=" "+i+'="'+te.escape(this.attributes[i])+'"');n+=">";for(var l=0;l<this.children.length;l++)n+=this.children[l].toMarkup();return n+="</"+t+">",n};class il{constructor(t,n,r,a){this.children=void 0,this.attributes=void 0,this.classes=void 0,this.height=void 0,this.depth=void 0,this.width=void 0,this.maxFontSize=void 0,this.style=void 0,yg.call(this,t,r,a),this.children=n||[]}setAttribute(t,n){this.attributes[t]=n}hasClass(t){return te.contains(this.classes,t)}toNode(){return vg.call(this,"span")}toMarkup(){return xg.call(this,"span")}}class rc{constructor(t,n,r,a){this.children=void 0,this.attributes=void 0,this.classes=void 0,this.height=void 0,this.depth=void 0,this.maxFontSize=void 0,this.style=void 0,yg.call(this,n,a),this.children=r||[],this.setAttribute("href",t)}setAttribute(t,n){this.attributes[t]=n}hasClass(t){return te.contains(this.classes,t)}toNode(){return vg.call(this,"a")}toMarkup(){return xg.call(this,"a")}}class $w{constructor(t,n,r){this.src=void 0,this.alt=void 0,this.classes=void 0,this.height=void 0,this.depth=void 0,this.maxFontSize=void 0,this.style=void 0,this.alt=n,this.src=t,this.classes=["mord"],this.style=r}hasClass(t){return te.contains(this.classes,t)}toNode(){var t=document.createElement("img");t.src=this.src,t.alt=this.alt,t.className="mord";for(var n in this.style)this.style.hasOwnProperty(n)&&(t.style[n]=this.style[n]);return t}toMarkup(){var t='<img src="'+te.escape(this.src)+'"'+(' alt="'+te.escape(this.alt)+'"'),n="";for(var r in this.style)this.style.hasOwnProperty(r)&&(n+=te.hyphenate(r)+":"+this.style[r]+";");return n&&(t+=' style="'+te.escape(n)+'"'),t+="'/>",t}}var kw={î:"ı̂",ï:"ı̈",í:"ı́",ì:"ı̀"};class Kt{constructor(t,n,r,a,i,l,o,s){this.text=void 0,this.height=void 0,this.depth=void 0,this.italic=void 0,this.skew=void 0,this.width=void 0,this.maxFontSize=void 0,this.classes=void 0,this.style=void 0,this.text=t,this.height=n||0,this.depth=r||0,this.italic=a||0,this.skew=i||0,this.width=l||0,this.classes=o||[],this.style=s||{},this.maxFontSize=0;var u=ow(this.text.charCodeAt(0));u&&this.classes.push(u+"_fallback"),/[îïíì]/.test(this.text)&&(this.text=kw[this.text])}hasClass(t){return te.contains(this.classes,t)}toNode(){var t=document.createTextNode(this.text),n=null;this.italic>0&&(n=document.createElement("span"),n.style.marginRight=K(this.italic)),this.classes.length>0&&(n=n||document.createElement("span"),n.className=yr(this.classes));for(var r in this.style)this.style.hasOwnProperty(r)&&(n=n||document.createElement("span"),n.style[r]=this.style[r]);return n?(n.appendChild(t),n):t}toMarkup(){var t=!1,n="<span";this.classes.length&&(t=!0,n+=' class="',n+=te.escape(yr(this.classes)),n+='"');var r="";this.italic>0&&(r+="margin-right:"+this.italic+"em;");for(var a in this.style)this.style.hasOwnProperty(a)&&(r+=te.hyphenate(a)+":"+this.style[a]+";");r&&(t=!0,n+=' style="'+te.escape(r)+'"');var i=te.escape(this.text);return t?(n+=">",n+=i,n+="</span>",n):i}}class jn{constructor(t,n){this.children=void 0,this.attributes=void 0,this.children=t||[],this.attributes=n||{}}toNode(){var t="http://www.w3.org/2000/svg",n=document.createElementNS(t,"svg");for(var r in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,r)&&n.setAttribute(r,this.attributes[r]);for(var a=0;a<this.children.length;a++)n.appendChild(this.children[a].toNode());return n}toMarkup(){var t='<svg xmlns="http://www.w3.org/2000/svg"';for(var n in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,n)&&(t+=" "+n+'="'+te.escape(this.attributes[n])+'"');t+=">";for(var r=0;r<this.children.length;r++)t+=this.children[r].toMarkup();return t+="</svg>",t}}class vr{constructor(t,n){this.pathName=void 0,this.alternate=void 0,this.pathName=t,this.alternate=n}toNode(){var t="http://www.w3.org/2000/svg",n=document.createElementNS(t,"path");return this.alternate?n.setAttribute("d",this.alternate):n.setAttribute("d",Id[this.pathName]),n}toMarkup(){return this.alternate?'<path d="'+te.escape(this.alternate)+'"/>':'<path d="'+te.escape(Id[this.pathName])+'"/>'}}class C0{constructor(t){this.attributes=void 0,this.attributes=t||{}}toNode(){var t="http://www.w3.org/2000/svg",n=document.createElementNS(t,"line");for(var r in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,r)&&n.setAttribute(r,this.attributes[r]);return n}toMarkup(){var t="<line";for(var n in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,n)&&(t+=" "+n+'="'+te.escape(this.attributes[n])+'"');return t+="/>",t}}function qd(e){if(e instanceof Kt)return e;throw new Error("Expected symbolNode but got "+String(e)+".")}function _w(e){if(e instanceof il)return e;throw new Error("Expected span<HtmlDomNode> but got "+String(e)+".")}var Sw={bin:1,close:1,inner:1,open:1,punct:1,rel:1},Dw={"accent-token":1,mathord:1,"op-token":1,spacing:1,textord:1},Ee={math:{},text:{}};function c(e,t,n,r,a,i){Ee[e][a]={font:t,group:n,replace:r},i&&r&&(Ee[e][r]=Ee[e][a])}var d="math",B="text",b="main",_="ams",Pe="accent-token",X="bin",bt="close",ja="inner",re="mathord",Ke="op-token",Rt="open",ss="punct",D="rel",Kn="spacing",z="textord";c(d,b,D,"≡","\\equiv",!0);c(d,b,D,"≺","\\prec",!0);c(d,b,D,"≻","\\succ",!0);c(d,b,D,"∼","\\sim",!0);c(d,b,D,"⊥","\\perp");c(d,b,D,"⪯","\\preceq",!0);c(d,b,D,"⪰","\\succeq",!0);c(d,b,D,"≃","\\simeq",!0);c(d,b,D,"∣","\\mid",!0);c(d,b,D,"≪","\\ll",!0);c(d,b,D,"≫","\\gg",!0);c(d,b,D,"≍","\\asymp",!0);c(d,b,D,"∥","\\parallel");c(d,b,D,"⋈","\\bowtie",!0);c(d,b,D,"⌣","\\smile",!0);c(d,b,D,"⊑","\\sqsubseteq",!0);c(d,b,D,"⊒","\\sqsupseteq",!0);c(d,b,D,"≐","\\doteq",!0);c(d,b,D,"⌢","\\frown",!0);c(d,b,D,"∋","\\ni",!0);c(d,b,D,"∝","\\propto",!0);c(d,b,D,"⊢","\\vdash",!0);c(d,b,D,"⊣","\\dashv",!0);c(d,b,D,"∋","\\owns");c(d,b,ss,".","\\ldotp");c(d,b,ss,"⋅","\\cdotp");c(d,b,z,"#","\\#");c(B,b,z,"#","\\#");c(d,b,z,"&","\\&");c(B,b,z,"&","\\&");c(d,b,z,"ℵ","\\aleph",!0);c(d,b,z,"∀","\\forall",!0);c(d,b,z,"ℏ","\\hbar",!0);c(d,b,z,"∃","\\exists",!0);c(d,b,z,"∇","\\nabla",!0);c(d,b,z,"♭","\\flat",!0);c(d,b,z,"ℓ","\\ell",!0);c(d,b,z,"♮","\\natural",!0);c(d,b,z,"♣","\\clubsuit",!0);c(d,b,z,"℘","\\wp",!0);c(d,b,z,"♯","\\sharp",!0);c(d,b,z,"♢","\\diamondsuit",!0);c(d,b,z,"ℜ","\\Re",!0);c(d,b,z,"♡","\\heartsuit",!0);c(d,b,z,"ℑ","\\Im",!0);c(d,b,z,"♠","\\spadesuit",!0);c(d,b,z,"§","\\S",!0);c(B,b,z,"§","\\S");c(d,b,z,"¶","\\P",!0);c(B,b,z,"¶","\\P");c(d,b,z,"†","\\dag");c(B,b,z,"†","\\dag");c(B,b,z,"†","\\textdagger");c(d,b,z,"‡","\\ddag");c(B,b,z,"‡","\\ddag");c(B,b,z,"‡","\\textdaggerdbl");c(d,b,bt,"⎱","\\rmoustache",!0);c(d,b,Rt,"⎰","\\lmoustache",!0);c(d,b,bt,"⟯","\\rgroup",!0);c(d,b,Rt,"⟮","\\lgroup",!0);c(d,b,X,"∓","\\mp",!0);c(d,b,X,"⊖","\\ominus",!0);c(d,b,X,"⊎","\\uplus",!0);c(d,b,X,"⊓","\\sqcap",!0);c(d,b,X,"∗","\\ast");c(d,b,X,"⊔","\\sqcup",!0);c(d,b,X,"◯","\\bigcirc",!0);c(d,b,X,"∙","\\bullet",!0);c(d,b,X,"‡","\\ddagger");c(d,b,X,"≀","\\wr",!0);c(d,b,X,"⨿","\\amalg");c(d,b,X,"&","\\And");c(d,b,D,"⟵","\\longleftarrow",!0);c(d,b,D,"⇐","\\Leftarrow",!0);c(d,b,D,"⟸","\\Longleftarrow",!0);c(d,b,D,"⟶","\\longrightarrow",!0);c(d,b,D,"⇒","\\Rightarrow",!0);c(d,b,D,"⟹","\\Longrightarrow",!0);c(d,b,D,"↔","\\leftrightarrow",!0);c(d,b,D,"⟷","\\longleftrightarrow",!0);c(d,b,D,"⇔","\\Leftrightarrow",!0);c(d,b,D,"⟺","\\Longleftrightarrow",!0);c(d,b,D,"↦","\\mapsto",!0);c(d,b,D,"⟼","\\longmapsto",!0);c(d,b,D,"↗","\\nearrow",!0);c(d,b,D,"↩","\\hookleftarrow",!0);c(d,b,D,"↪","\\hookrightarrow",!0);c(d,b,D,"↘","\\searrow",!0);c(d,b,D,"↼","\\leftharpoonup",!0);c(d,b,D,"⇀","\\rightharpoonup",!0);c(d,b,D,"↙","\\swarrow",!0);c(d,b,D,"↽","\\leftharpoondown",!0);c(d,b,D,"⇁","\\rightharpoondown",!0);c(d,b,D,"↖","\\nwarrow",!0);c(d,b,D,"⇌","\\rightleftharpoons",!0);c(d,_,D,"≮","\\nless",!0);c(d,_,D,"","\\@nleqslant");c(d,_,D,"","\\@nleqq");c(d,_,D,"⪇","\\lneq",!0);c(d,_,D,"≨","\\lneqq",!0);c(d,_,D,"","\\@lvertneqq");c(d,_,D,"⋦","\\lnsim",!0);c(d,_,D,"⪉","\\lnapprox",!0);c(d,_,D,"⊀","\\nprec",!0);c(d,_,D,"⋠","\\npreceq",!0);c(d,_,D,"⋨","\\precnsim",!0);c(d,_,D,"⪹","\\precnapprox",!0);c(d,_,D,"≁","\\nsim",!0);c(d,_,D,"","\\@nshortmid");c(d,_,D,"∤","\\nmid",!0);c(d,_,D,"⊬","\\nvdash",!0);c(d,_,D,"⊭","\\nvDash",!0);c(d,_,D,"⋪","\\ntriangleleft");c(d,_,D,"⋬","\\ntrianglelefteq",!0);c(d,_,D,"⊊","\\subsetneq",!0);c(d,_,D,"","\\@varsubsetneq");c(d,_,D,"⫋","\\subsetneqq",!0);c(d,_,D,"","\\@varsubsetneqq");c(d,_,D,"≯","\\ngtr",!0);c(d,_,D,"","\\@ngeqslant");c(d,_,D,"","\\@ngeqq");c(d,_,D,"⪈","\\gneq",!0);c(d,_,D,"≩","\\gneqq",!0);c(d,_,D,"","\\@gvertneqq");c(d,_,D,"⋧","\\gnsim",!0);c(d,_,D,"⪊","\\gnapprox",!0);c(d,_,D,"⊁","\\nsucc",!0);c(d,_,D,"⋡","\\nsucceq",!0);c(d,_,D,"⋩","\\succnsim",!0);c(d,_,D,"⪺","\\succnapprox",!0);c(d,_,D,"≆","\\ncong",!0);c(d,_,D,"","\\@nshortparallel");c(d,_,D,"∦","\\nparallel",!0);c(d,_,D,"⊯","\\nVDash",!0);c(d,_,D,"⋫","\\ntriangleright");c(d,_,D,"⋭","\\ntrianglerighteq",!0);c(d,_,D,"","\\@nsupseteqq");c(d,_,D,"⊋","\\supsetneq",!0);c(d,_,D,"","\\@varsupsetneq");c(d,_,D,"⫌","\\supsetneqq",!0);c(d,_,D,"","\\@varsupsetneqq");c(d,_,D,"⊮","\\nVdash",!0);c(d,_,D,"⪵","\\precneqq",!0);c(d,_,D,"⪶","\\succneqq",!0);c(d,_,D,"","\\@nsubseteqq");c(d,_,X,"⊴","\\unlhd");c(d,_,X,"⊵","\\unrhd");c(d,_,D,"↚","\\nleftarrow",!0);c(d,_,D,"↛","\\nrightarrow",!0);c(d,_,D,"⇍","\\nLeftarrow",!0);c(d,_,D,"⇏","\\nRightarrow",!0);c(d,_,D,"↮","\\nleftrightarrow",!0);c(d,_,D,"⇎","\\nLeftrightarrow",!0);c(d,_,D,"△","\\vartriangle");c(d,_,z,"ℏ","\\hslash");c(d,_,z,"▽","\\triangledown");c(d,_,z,"◊","\\lozenge");c(d,_,z,"Ⓢ","\\circledS");c(d,_,z,"®","\\circledR");c(B,_,z,"®","\\circledR");c(d,_,z,"∡","\\measuredangle",!0);c(d,_,z,"∄","\\nexists");c(d,_,z,"℧","\\mho");c(d,_,z,"Ⅎ","\\Finv",!0);c(d,_,z,"⅁","\\Game",!0);c(d,_,z,"‵","\\backprime");c(d,_,z,"▲","\\blacktriangle");c(d,_,z,"▼","\\blacktriangledown");c(d,_,z,"■","\\blacksquare");c(d,_,z,"⧫","\\blacklozenge");c(d,_,z,"★","\\bigstar");c(d,_,z,"∢","\\sphericalangle",!0);c(d,_,z,"∁","\\complement",!0);c(d,_,z,"ð","\\eth",!0);c(B,b,z,"ð","ð");c(d,_,z,"╱","\\diagup");c(d,_,z,"╲","\\diagdown");c(d,_,z,"□","\\square");c(d,_,z,"□","\\Box");c(d,_,z,"◊","\\Diamond");c(d,_,z,"¥","\\yen",!0);c(B,_,z,"¥","\\yen",!0);c(d,_,z,"✓","\\checkmark",!0);c(B,_,z,"✓","\\checkmark");c(d,_,z,"ℶ","\\beth",!0);c(d,_,z,"ℸ","\\daleth",!0);c(d,_,z,"ℷ","\\gimel",!0);c(d,_,z,"ϝ","\\digamma",!0);c(d,_,z,"ϰ","\\varkappa");c(d,_,Rt,"┌","\\@ulcorner",!0);c(d,_,bt,"┐","\\@urcorner",!0);c(d,_,Rt,"└","\\@llcorner",!0);c(d,_,bt,"┘","\\@lrcorner",!0);c(d,_,D,"≦","\\leqq",!0);c(d,_,D,"⩽","\\leqslant",!0);c(d,_,D,"⪕","\\eqslantless",!0);c(d,_,D,"≲","\\lesssim",!0);c(d,_,D,"⪅","\\lessapprox",!0);c(d,_,D,"≊","\\approxeq",!0);c(d,_,X,"⋖","\\lessdot");c(d,_,D,"⋘","\\lll",!0);c(d,_,D,"≶","\\lessgtr",!0);c(d,_,D,"⋚","\\lesseqgtr",!0);c(d,_,D,"⪋","\\lesseqqgtr",!0);c(d,_,D,"≑","\\doteqdot");c(d,_,D,"≓","\\risingdotseq",!0);c(d,_,D,"≒","\\fallingdotseq",!0);c(d,_,D,"∽","\\backsim",!0);c(d,_,D,"⋍","\\backsimeq",!0);c(d,_,D,"⫅","\\subseteqq",!0);c(d,_,D,"⋐","\\Subset",!0);c(d,_,D,"⊏","\\sqsubset",!0);c(d,_,D,"≼","\\preccurlyeq",!0);c(d,_,D,"⋞","\\curlyeqprec",!0);c(d,_,D,"≾","\\precsim",!0);c(d,_,D,"⪷","\\precapprox",!0);c(d,_,D,"⊲","\\vartriangleleft");c(d,_,D,"⊴","\\trianglelefteq");c(d,_,D,"⊨","\\vDash",!0);c(d,_,D,"⊪","\\Vvdash",!0);c(d,_,D,"⌣","\\smallsmile");c(d,_,D,"⌢","\\smallfrown");c(d,_,D,"≏","\\bumpeq",!0);c(d,_,D,"≎","\\Bumpeq",!0);c(d,_,D,"≧","\\geqq",!0);c(d,_,D,"⩾","\\geqslant",!0);c(d,_,D,"⪖","\\eqslantgtr",!0);c(d,_,D,"≳","\\gtrsim",!0);c(d,_,D,"⪆","\\gtrapprox",!0);c(d,_,X,"⋗","\\gtrdot");c(d,_,D,"⋙","\\ggg",!0);c(d,_,D,"≷","\\gtrless",!0);c(d,_,D,"⋛","\\gtreqless",!0);c(d,_,D,"⪌","\\gtreqqless",!0);c(d,_,D,"≖","\\eqcirc",!0);c(d,_,D,"≗","\\circeq",!0);c(d,_,D,"≜","\\triangleq",!0);c(d,_,D,"∼","\\thicksim");c(d,_,D,"≈","\\thickapprox");c(d,_,D,"⫆","\\supseteqq",!0);c(d,_,D,"⋑","\\Supset",!0);c(d,_,D,"⊐","\\sqsupset",!0);c(d,_,D,"≽","\\succcurlyeq",!0);c(d,_,D,"⋟","\\curlyeqsucc",!0);c(d,_,D,"≿","\\succsim",!0);c(d,_,D,"⪸","\\succapprox",!0);c(d,_,D,"⊳","\\vartriangleright");c(d,_,D,"⊵","\\trianglerighteq");c(d,_,D,"⊩","\\Vdash",!0);c(d,_,D,"∣","\\shortmid");c(d,_,D,"∥","\\shortparallel");c(d,_,D,"≬","\\between",!0);c(d,_,D,"⋔","\\pitchfork",!0);c(d,_,D,"∝","\\varpropto");c(d,_,D,"◀","\\blacktriangleleft");c(d,_,D,"∴","\\therefore",!0);c(d,_,D,"∍","\\backepsilon");c(d,_,D,"▶","\\blacktriangleright");c(d,_,D,"∵","\\because",!0);c(d,_,D,"⋘","\\llless");c(d,_,D,"⋙","\\gggtr");c(d,_,X,"⊲","\\lhd");c(d,_,X,"⊳","\\rhd");c(d,_,D,"≂","\\eqsim",!0);c(d,b,D,"⋈","\\Join");c(d,_,D,"≑","\\Doteq",!0);c(d,_,X,"∔","\\dotplus",!0);c(d,_,X,"∖","\\smallsetminus");c(d,_,X,"⋒","\\Cap",!0);c(d,_,X,"⋓","\\Cup",!0);c(d,_,X,"⩞","\\doublebarwedge",!0);c(d,_,X,"⊟","\\boxminus",!0);c(d,_,X,"⊞","\\boxplus",!0);c(d,_,X,"⋇","\\divideontimes",!0);c(d,_,X,"⋉","\\ltimes",!0);c(d,_,X,"⋊","\\rtimes",!0);c(d,_,X,"⋋","\\leftthreetimes",!0);c(d,_,X,"⋌","\\rightthreetimes",!0);c(d,_,X,"⋏","\\curlywedge",!0);c(d,_,X,"⋎","\\curlyvee",!0);c(d,_,X,"⊝","\\circleddash",!0);c(d,_,X,"⊛","\\circledast",!0);c(d,_,X,"⋅","\\centerdot");c(d,_,X,"⊺","\\intercal",!0);c(d,_,X,"⋒","\\doublecap");c(d,_,X,"⋓","\\doublecup");c(d,_,X,"⊠","\\boxtimes",!0);c(d,_,D,"⇢","\\dashrightarrow",!0);c(d,_,D,"⇠","\\dashleftarrow",!0);c(d,_,D,"⇇","\\leftleftarrows",!0);c(d,_,D,"⇆","\\leftrightarrows",!0);c(d,_,D,"⇚","\\Lleftarrow",!0);c(d,_,D,"↞","\\twoheadleftarrow",!0);c(d,_,D,"↢","\\leftarrowtail",!0);c(d,_,D,"↫","\\looparrowleft",!0);c(d,_,D,"⇋","\\leftrightharpoons",!0);c(d,_,D,"↶","\\curvearrowleft",!0);c(d,_,D,"↺","\\circlearrowleft",!0);c(d,_,D,"↰","\\Lsh",!0);c(d,_,D,"⇈","\\upuparrows",!0);c(d,_,D,"↿","\\upharpoonleft",!0);c(d,_,D,"⇃","\\downharpoonleft",!0);c(d,b,D,"⊶","\\origof",!0);c(d,b,D,"⊷","\\imageof",!0);c(d,_,D,"⊸","\\multimap",!0);c(d,_,D,"↭","\\leftrightsquigarrow",!0);c(d,_,D,"⇉","\\rightrightarrows",!0);c(d,_,D,"⇄","\\rightleftarrows",!0);c(d,_,D,"↠","\\twoheadrightarrow",!0);c(d,_,D,"↣","\\rightarrowtail",!0);c(d,_,D,"↬","\\looparrowright",!0);c(d,_,D,"↷","\\curvearrowright",!0);c(d,_,D,"↻","\\circlearrowright",!0);c(d,_,D,"↱","\\Rsh",!0);c(d,_,D,"⇊","\\downdownarrows",!0);c(d,_,D,"↾","\\upharpoonright",!0);c(d,_,D,"⇂","\\downharpoonright",!0);c(d,_,D,"⇝","\\rightsquigarrow",!0);c(d,_,D,"⇝","\\leadsto");c(d,_,D,"⇛","\\Rrightarrow",!0);c(d,_,D,"↾","\\restriction");c(d,b,z,"‘","`");c(d,b,z,"$","\\$");c(B,b,z,"$","\\$");c(B,b,z,"$","\\textdollar");c(d,b,z,"%","\\%");c(B,b,z,"%","\\%");c(d,b,z,"_","\\_");c(B,b,z,"_","\\_");c(B,b,z,"_","\\textunderscore");c(d,b,z,"∠","\\angle",!0);c(d,b,z,"∞","\\infty",!0);c(d,b,z,"′","\\prime");c(d,b,z,"△","\\triangle");c(d,b,z,"Γ","\\Gamma",!0);c(d,b,z,"Δ","\\Delta",!0);c(d,b,z,"Θ","\\Theta",!0);c(d,b,z,"Λ","\\Lambda",!0);c(d,b,z,"Ξ","\\Xi",!0);c(d,b,z,"Π","\\Pi",!0);c(d,b,z,"Σ","\\Sigma",!0);c(d,b,z,"Υ","\\Upsilon",!0);c(d,b,z,"Φ","\\Phi",!0);c(d,b,z,"Ψ","\\Psi",!0);c(d,b,z,"Ω","\\Omega",!0);c(d,b,z,"A","Α");c(d,b,z,"B","Β");c(d,b,z,"E","Ε");c(d,b,z,"Z","Ζ");c(d,b,z,"H","Η");c(d,b,z,"I","Ι");c(d,b,z,"K","Κ");c(d,b,z,"M","Μ");c(d,b,z,"N","Ν");c(d,b,z,"O","Ο");c(d,b,z,"P","Ρ");c(d,b,z,"T","Τ");c(d,b,z,"X","Χ");c(d,b,z,"¬","\\neg",!0);c(d,b,z,"¬","\\lnot");c(d,b,z,"⊤","\\top");c(d,b,z,"⊥","\\bot");c(d,b,z,"∅","\\emptyset");c(d,_,z,"∅","\\varnothing");c(d,b,re,"α","\\alpha",!0);c(d,b,re,"β","\\beta",!0);c(d,b,re,"γ","\\gamma",!0);c(d,b,re,"δ","\\delta",!0);c(d,b,re,"ϵ","\\epsilon",!0);c(d,b,re,"ζ","\\zeta",!0);c(d,b,re,"η","\\eta",!0);c(d,b,re,"θ","\\theta",!0);c(d,b,re,"ι","\\iota",!0);c(d,b,re,"κ","\\kappa",!0);c(d,b,re,"λ","\\lambda",!0);c(d,b,re,"μ","\\mu",!0);c(d,b,re,"ν","\\nu",!0);c(d,b,re,"ξ","\\xi",!0);c(d,b,re,"ο","\\omicron",!0);c(d,b,re,"π","\\pi",!0);c(d,b,re,"ρ","\\rho",!0);c(d,b,re,"σ","\\sigma",!0);c(d,b,re,"τ","\\tau",!0);c(d,b,re,"υ","\\upsilon",!0);c(d,b,re,"ϕ","\\phi",!0);c(d,b,re,"χ","\\chi",!0);c(d,b,re,"ψ","\\psi",!0);c(d,b,re,"ω","\\omega",!0);c(d,b,re,"ε","\\varepsilon",!0);c(d,b,re,"ϑ","\\vartheta",!0);c(d,b,re,"ϖ","\\varpi",!0);c(d,b,re,"ϱ","\\varrho",!0);c(d,b,re,"ς","\\varsigma",!0);c(d,b,re,"φ","\\varphi",!0);c(d,b,X,"∗","*",!0);c(d,b,X,"+","+");c(d,b,X,"−","-",!0);c(d,b,X,"⋅","\\cdot",!0);c(d,b,X,"∘","\\circ",!0);c(d,b,X,"÷","\\div",!0);c(d,b,X,"±","\\pm",!0);c(d,b,X,"×","\\times",!0);c(d,b,X,"∩","\\cap",!0);c(d,b,X,"∪","\\cup",!0);c(d,b,X,"∖","\\setminus",!0);c(d,b,X,"∧","\\land");c(d,b,X,"∨","\\lor");c(d,b,X,"∧","\\wedge",!0);c(d,b,X,"∨","\\vee",!0);c(d,b,z,"√","\\surd");c(d,b,Rt,"⟨","\\langle",!0);c(d,b,Rt,"∣","\\lvert");c(d,b,Rt,"∥","\\lVert");c(d,b,bt,"?","?");c(d,b,bt,"!","!");c(d,b,bt,"⟩","\\rangle",!0);c(d,b,bt,"∣","\\rvert");c(d,b,bt,"∥","\\rVert");c(d,b,D,"=","=");c(d,b,D,":",":");c(d,b,D,"≈","\\approx",!0);c(d,b,D,"≅","\\cong",!0);c(d,b,D,"≥","\\ge");c(d,b,D,"≥","\\geq",!0);c(d,b,D,"←","\\gets");c(d,b,D,">","\\gt",!0);c(d,b,D,"∈","\\in",!0);c(d,b,D,"","\\@not");c(d,b,D,"⊂","\\subset",!0);c(d,b,D,"⊃","\\supset",!0);c(d,b,D,"⊆","\\subseteq",!0);c(d,b,D,"⊇","\\supseteq",!0);c(d,_,D,"⊈","\\nsubseteq",!0);c(d,_,D,"⊉","\\nsupseteq",!0);c(d,b,D,"⊨","\\models");c(d,b,D,"←","\\leftarrow",!0);c(d,b,D,"≤","\\le");c(d,b,D,"≤","\\leq",!0);c(d,b,D,"<","\\lt",!0);c(d,b,D,"→","\\rightarrow",!0);c(d,b,D,"→","\\to");c(d,_,D,"≱","\\ngeq",!0);c(d,_,D,"≰","\\nleq",!0);c(d,b,Kn," ","\\ ");c(d,b,Kn," ","\\space");c(d,b,Kn," ","\\nobreakspace");c(B,b,Kn," ","\\ ");c(B,b,Kn," "," ");c(B,b,Kn," ","\\space");c(B,b,Kn," ","\\nobreakspace");c(d,b,Kn,null,"\\nobreak");c(d,b,Kn,null,"\\allowbreak");c(d,b,ss,",",",");c(d,b,ss,";",";");c(d,_,X,"⊼","\\barwedge",!0);c(d,_,X,"⊻","\\veebar",!0);c(d,b,X,"⊙","\\odot",!0);c(d,b,X,"⊕","\\oplus",!0);c(d,b,X,"⊗","\\otimes",!0);c(d,b,z,"∂","\\partial",!0);c(d,b,X,"⊘","\\oslash",!0);c(d,_,X,"⊚","\\circledcirc",!0);c(d,_,X,"⊡","\\boxdot",!0);c(d,b,X,"△","\\bigtriangleup");c(d,b,X,"▽","\\bigtriangledown");c(d,b,X,"†","\\dagger");c(d,b,X,"⋄","\\diamond");c(d,b,X,"⋆","\\star");c(d,b,X,"◃","\\triangleleft");c(d,b,X,"▹","\\triangleright");c(d,b,Rt,"{","\\{");c(B,b,z,"{","\\{");c(B,b,z,"{","\\textbraceleft");c(d,b,bt,"}","\\}");c(B,b,z,"}","\\}");c(B,b,z,"}","\\textbraceright");c(d,b,Rt,"{","\\lbrace");c(d,b,bt,"}","\\rbrace");c(d,b,Rt,"[","\\lbrack",!0);c(B,b,z,"[","\\lbrack",!0);c(d,b,bt,"]","\\rbrack",!0);c(B,b,z,"]","\\rbrack",!0);c(d,b,Rt,"(","\\lparen",!0);c(d,b,bt,")","\\rparen",!0);c(B,b,z,"<","\\textless",!0);c(B,b,z,">","\\textgreater",!0);c(d,b,Rt,"⌊","\\lfloor",!0);c(d,b,bt,"⌋","\\rfloor",!0);c(d,b,Rt,"⌈","\\lceil",!0);c(d,b,bt,"⌉","\\rceil",!0);c(d,b,z,"\\","\\backslash");c(d,b,z,"∣","|");c(d,b,z,"∣","\\vert");c(B,b,z,"|","\\textbar",!0);c(d,b,z,"∥","\\|");c(d,b,z,"∥","\\Vert");c(B,b,z,"∥","\\textbardbl");c(B,b,z,"~","\\textasciitilde");c(B,b,z,"\\","\\textbackslash");c(B,b,z,"^","\\textasciicircum");c(d,b,D,"↑","\\uparrow",!0);c(d,b,D,"⇑","\\Uparrow",!0);c(d,b,D,"↓","\\downarrow",!0);c(d,b,D,"⇓","\\Downarrow",!0);c(d,b,D,"↕","\\updownarrow",!0);c(d,b,D,"⇕","\\Updownarrow",!0);c(d,b,Ke,"∐","\\coprod");c(d,b,Ke,"⋁","\\bigvee");c(d,b,Ke,"⋀","\\bigwedge");c(d,b,Ke,"⨄","\\biguplus");c(d,b,Ke,"⋂","\\bigcap");c(d,b,Ke,"⋃","\\bigcup");c(d,b,Ke,"∫","\\int");c(d,b,Ke,"∫","\\intop");c(d,b,Ke,"∬","\\iint");c(d,b,Ke,"∭","\\iiint");c(d,b,Ke,"∏","\\prod");c(d,b,Ke,"∑","\\sum");c(d,b,Ke,"⨂","\\bigotimes");c(d,b,Ke,"⨁","\\bigoplus");c(d,b,Ke,"⨀","\\bigodot");c(d,b,Ke,"∮","\\oint");c(d,b,Ke,"∯","\\oiint");c(d,b,Ke,"∰","\\oiiint");c(d,b,Ke,"⨆","\\bigsqcup");c(d,b,Ke,"∫","\\smallint");c(B,b,ja,"…","\\textellipsis");c(d,b,ja,"…","\\mathellipsis");c(B,b,ja,"…","\\ldots",!0);c(d,b,ja,"…","\\ldots",!0);c(d,b,ja,"⋯","\\@cdots",!0);c(d,b,ja,"⋱","\\ddots",!0);c(d,b,z,"⋮","\\varvdots");c(B,b,z,"⋮","\\varvdots");c(d,b,Pe,"ˊ","\\acute");c(d,b,Pe,"ˋ","\\grave");c(d,b,Pe,"¨","\\ddot");c(d,b,Pe,"~","\\tilde");c(d,b,Pe,"ˉ","\\bar");c(d,b,Pe,"˘","\\breve");c(d,b,Pe,"ˇ","\\check");c(d,b,Pe,"^","\\hat");c(d,b,Pe,"⃗","\\vec");c(d,b,Pe,"˙","\\dot");c(d,b,Pe,"˚","\\mathring");c(d,b,re,"","\\@imath");c(d,b,re,"","\\@jmath");c(d,b,z,"ı","ı");c(d,b,z,"ȷ","ȷ");c(B,b,z,"ı","\\i",!0);c(B,b,z,"ȷ","\\j",!0);c(B,b,z,"ß","\\ss",!0);c(B,b,z,"æ","\\ae",!0);c(B,b,z,"œ","\\oe",!0);c(B,b,z,"ø","\\o",!0);c(B,b,z,"Æ","\\AE",!0);c(B,b,z,"Œ","\\OE",!0);c(B,b,z,"Ø","\\O",!0);c(B,b,Pe,"ˊ","\\'");c(B,b,Pe,"ˋ","\\`");c(B,b,Pe,"ˆ","\\^");c(B,b,Pe,"˜","\\~");c(B,b,Pe,"ˉ","\\=");c(B,b,Pe,"˘","\\u");c(B,b,Pe,"˙","\\.");c(B,b,Pe,"¸","\\c");c(B,b,Pe,"˚","\\r");c(B,b,Pe,"ˇ","\\v");c(B,b,Pe,"¨",'\\"');c(B,b,Pe,"˝","\\H");c(B,b,Pe,"◯","\\textcircled");var wg={"--":!0,"---":!0,"``":!0,"''":!0};c(B,b,z,"–","--",!0);c(B,b,z,"–","\\textendash");c(B,b,z,"—","---",!0);c(B,b,z,"—","\\textemdash");c(B,b,z,"‘","`",!0);c(B,b,z,"‘","\\textquoteleft");c(B,b,z,"’","'",!0);c(B,b,z,"’","\\textquoteright");c(B,b,z,"“","``",!0);c(B,b,z,"“","\\textquotedblleft");c(B,b,z,"”","''",!0);c(B,b,z,"”","\\textquotedblright");c(d,b,z,"°","\\degree",!0);c(B,b,z,"°","\\degree");c(B,b,z,"°","\\textdegree",!0);c(d,b,z,"£","\\pounds");c(d,b,z,"£","\\mathsterling",!0);c(B,b,z,"£","\\pounds");c(B,b,z,"£","\\textsterling",!0);c(d,_,z,"✠","\\maltese");c(B,_,z,"✠","\\maltese");var jd='0123456789/@."';for(var iu=0;iu<jd.length;iu++){var Hd=jd.charAt(iu);c(d,b,z,Hd,Hd)}var Ud='0123456789!@*()-=+";:?/.,';for(var lu=0;lu<Ud.length;lu++){var Wd=Ud.charAt(lu);c(B,b,z,Wd,Wd)}var Po="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";for(var ou=0;ou<Po.length;ou++){var zl=Po.charAt(ou);c(d,b,re,zl,zl),c(B,b,z,zl,zl)}c(d,_,z,"C","ℂ");c(B,_,z,"C","ℂ");c(d,_,z,"H","ℍ");c(B,_,z,"H","ℍ");c(d,_,z,"N","ℕ");c(B,_,z,"N","ℕ");c(d,_,z,"P","ℙ");c(B,_,z,"P","ℙ");c(d,_,z,"Q","ℚ");c(B,_,z,"Q","ℚ");c(d,_,z,"R","ℝ");c(B,_,z,"R","ℝ");c(d,_,z,"Z","ℤ");c(B,_,z,"Z","ℤ");c(d,b,re,"h","ℎ");c(B,b,re,"h","ℎ");var le="";for(var ht=0;ht<Po.length;ht++){var qe=Po.charAt(ht);le=String.fromCharCode(55349,56320+ht),c(d,b,re,qe,le),c(B,b,z,qe,le),le=String.fromCharCode(55349,56372+ht),c(d,b,re,qe,le),c(B,b,z,qe,le),le=String.fromCharCode(55349,56424+ht),c(d,b,re,qe,le),c(B,b,z,qe,le),le=String.fromCharCode(55349,56580+ht),c(d,b,re,qe,le),c(B,b,z,qe,le),le=String.fromCharCode(55349,56684+ht),c(d,b,re,qe,le),c(B,b,z,qe,le),le=String.fromCharCode(55349,56736+ht),c(d,b,re,qe,le),c(B,b,z,qe,le),le=String.fromCharCode(55349,56788+ht),c(d,b,re,qe,le),c(B,b,z,qe,le),le=String.fromCharCode(55349,56840+ht),c(d,b,re,qe,le),c(B,b,z,qe,le),le=String.fromCharCode(55349,56944+ht),c(d,b,re,qe,le),c(B,b,z,qe,le),ht<26&&(le=String.fromCharCode(55349,56632+ht),c(d,b,re,qe,le),c(B,b,z,qe,le),le=String.fromCharCode(55349,56476+ht),c(d,b,re,qe,le),c(B,b,z,qe,le))}le="𝕜";c(d,b,re,"k",le);c(B,b,z,"k",le);for(var Er=0;Er<10;Er++){var Jn=Er.toString();le=String.fromCharCode(55349,57294+Er),c(d,b,re,Jn,le),c(B,b,z,Jn,le),le=String.fromCharCode(55349,57314+Er),c(d,b,re,Jn,le),c(B,b,z,Jn,le),le=String.fromCharCode(55349,57324+Er),c(d,b,re,Jn,le),c(B,b,z,Jn,le),le=String.fromCharCode(55349,57334+Er),c(d,b,re,Jn,le),c(B,b,z,Jn,le)}var E0="ÐÞþ";for(var su=0;su<E0.length;su++){var Fl=E0.charAt(su);c(d,b,re,Fl,Fl),c(B,b,z,Fl,Fl)}var Al=[["mathbf","textbf","Main-Bold"],["mathbf","textbf","Main-Bold"],["mathnormal","textit","Math-Italic"],["mathnormal","textit","Math-Italic"],["boldsymbol","boldsymbol","Main-BoldItalic"],["boldsymbol","boldsymbol","Main-BoldItalic"],["mathscr","textscr","Script-Regular"],["","",""],["","",""],["","",""],["mathfrak","textfrak","Fraktur-Regular"],["mathfrak","textfrak","Fraktur-Regular"],["mathbb","textbb","AMS-Regular"],["mathbb","textbb","AMS-Regular"],["mathboldfrak","textboldfrak","Fraktur-Regular"],["mathboldfrak","textboldfrak","Fraktur-Regular"],["mathsf","textsf","SansSerif-Regular"],["mathsf","textsf","SansSerif-Regular"],["mathboldsf","textboldsf","SansSerif-Bold"],["mathboldsf","textboldsf","SansSerif-Bold"],["mathitsf","textitsf","SansSerif-Italic"],["mathitsf","textitsf","SansSerif-Italic"],["","",""],["","",""],["mathtt","texttt","Typewriter-Regular"],["mathtt","texttt","Typewriter-Regular"]],Vd=[["mathbf","textbf","Main-Bold"],["","",""],["mathsf","textsf","SansSerif-Regular"],["mathboldsf","textboldsf","SansSerif-Bold"],["mathtt","texttt","Typewriter-Regular"]],Cw=function(t,n){var r=t.charCodeAt(0),a=t.charCodeAt(1),i=(r-55296)*1024+(a-56320)+65536,l=n==="math"?0:1;if(119808<=i&&i<120484){var o=Math.floor((i-119808)/26);return[Al[o][2],Al[o][l]]}else if(120782<=i&&i<=120831){var s=Math.floor((i-120782)/10);return[Vd[s][2],Vd[s][l]]}else{if(i===120485||i===120486)return[Al[0][2],Al[0][l]];if(120486<i&&i<120782)return["",""];throw new H("Unsupported character: "+t)}},us=function(t,n,r){return Ee[r][t]&&Ee[r][t].replace&&(t=Ee[r][t].replace),{value:t,metrics:nc(t,n,r)}},nn=function(t,n,r,a,i){var l=us(t,n,r),o=l.metrics;t=l.value;var s;if(o){var u=o.italic;(r==="text"||a&&a.font==="mathit")&&(u=0),s=new Kt(t,o.height,o.depth,u,o.skew,o.width,i)}else typeof console<"u"&&console.warn("No character metrics "+("for '"+t+"' in style '"+n+"' and mode '"+r+"'")),s=new Kt(t,0,0,0,0,0,i);if(a){s.maxFontSize=a.sizeMultiplier,a.style.isTight()&&s.classes.push("mtight");var h=a.getColor();h&&(s.style.color=h)}return s},Ew=function(t,n,r,a){return a===void 0&&(a=[]),r.font==="boldsymbol"&&us(t,"Main-Bold",n).metrics?nn(t,"Main-Bold",n,r,a.concat(["mathbf"])):t==="\\"||Ee[n][t].font==="main"?nn(t,"Main-Regular",n,r,a):nn(t,"AMS-Regular",n,r,a.concat(["amsrm"]))},zw=function(t,n,r,a,i){return i!=="textord"&&us(t,"Math-BoldItalic",n).metrics?{fontName:"Math-BoldItalic",fontClass:"boldsymbol"}:{fontName:"Main-Bold",fontClass:"mathbf"}},Fw=function(t,n,r){var a=t.mode,i=t.text,l=["mord"],o=a==="math"||a==="text"&&n.font,s=o?n.font:n.fontFamily,u="",h="";if(i.charCodeAt(0)===55349&&([u,h]=Cw(i,a)),u.length>0)return nn(i,u,a,n,l.concat(h));if(s){var m,f;if(s==="boldsymbol"){var p=zw(i,a,n,l,r);m=p.fontName,f=[p.fontClass]}else o?(m=_g[s].fontName,f=[s]):(m=Tl(s,n.fontWeight,n.fontShape),f=[s,n.fontWeight,n.fontShape]);if(us(i,m,a).metrics)return nn(i,m,a,n,l.concat(f));if(wg.hasOwnProperty(i)&&m.slice(0,10)==="Typewriter"){for(var v=[],x=0;x<i.length;x++)v.push(nn(i[x],m,a,n,l.concat(f)));return kg(v)}}if(r==="mathord")return nn(i,"Math-Italic",a,n,l.concat(["mathnormal"]));if(r==="textord"){var S=Ee[a][i]&&Ee[a][i].font;if(S==="ams"){var g=Tl("amsrm",n.fontWeight,n.fontShape);return nn(i,g,a,n,l.concat("amsrm",n.fontWeight,n.fontShape))}else if(S==="main"||!S){var y=Tl("textrm",n.fontWeight,n.fontShape);return nn(i,y,a,n,l.concat(n.fontWeight,n.fontShape))}else{var $=Tl(S,n.fontWeight,n.fontShape);return nn(i,$,a,n,l.concat($,n.fontWeight,n.fontShape))}}else throw new Error("unexpected type: "+r+" in makeOrd")},Aw=(e,t)=>{if(yr(e.classes)!==yr(t.classes)||e.skew!==t.skew||e.maxFontSize!==t.maxFontSize)return!1;if(e.classes.length===1){var n=e.classes[0];if(n==="mbin"||n==="mord")return!1}for(var r in e.style)if(e.style.hasOwnProperty(r)&&e.style[r]!==t.style[r])return!1;for(var a in t.style)if(t.style.hasOwnProperty(a)&&e.style[a]!==t.style[a])return!1;return!0},Tw=e=>{for(var t=0;t<e.length-1;t++){var n=e[t],r=e[t+1];n instanceof Kt&&r instanceof Kt&&Aw(n,r)&&(n.text+=r.text,n.height=Math.max(n.height,r.height),n.depth=Math.max(n.depth,r.depth),n.italic=r.italic,e.splice(t+1,1),t--)}return e},ac=function(t){for(var n=0,r=0,a=0,i=0;i<t.children.length;i++){var l=t.children[i];l.height>n&&(n=l.height),l.depth>r&&(r=l.depth),l.maxFontSize>a&&(a=l.maxFontSize)}t.height=n,t.depth=r,t.maxFontSize=a},yt=function(t,n,r,a){var i=new il(t,n,r,a);return ac(i),i},$g=(e,t,n,r)=>new il(e,t,n,r),Pw=function(t,n,r){var a=yt([t],[],n);return a.height=Math.max(r||n.fontMetrics().defaultRuleThickness,n.minRuleThickness),a.style.borderBottomWidth=K(a.height),a.maxFontSize=1,a},Nw=function(t,n,r,a){var i=new rc(t,n,r,a);return ac(i),i},kg=function(t){var n=new al(t);return ac(n),n},Mw=function(t,n){return t instanceof al?yt([],[t],n):t},Rw=function(t){if(t.positionType==="individualShift"){for(var n=t.children,r=[n[0]],a=-n[0].shift-n[0].elem.depth,i=a,l=1;l<n.length;l++){var o=-n[l].shift-i-n[l].elem.depth,s=o-(n[l-1].elem.height+n[l-1].elem.depth);i=i+o,r.push({type:"kern",size:s}),r.push(n[l])}return{children:r,depth:a}}var u;if(t.positionType==="top"){for(var h=t.positionData,m=0;m<t.children.length;m++){var f=t.children[m];h-=f.type==="kern"?f.size:f.elem.height+f.elem.depth}u=h}else if(t.positionType==="bottom")u=-t.positionData;else{var p=t.children[0];if(p.type!=="elem")throw new Error('First child must have type "elem".');if(t.positionType==="shift")u=-p.elem.depth-t.positionData;else if(t.positionType==="firstBaseline")u=-p.elem.depth;else throw new Error("Invalid positionType "+t.positionType+".")}return{children:t.children,depth:u}},Iw=function(t,n){for(var{children:r,depth:a}=Rw(t),i=0,l=0;l<r.length;l++){var o=r[l];if(o.type==="elem"){var s=o.elem;i=Math.max(i,s.maxFontSize,s.height)}}i+=2;var u=yt(["pstrut"],[]);u.style.height=K(i);for(var h=[],m=a,f=a,p=a,v=0;v<r.length;v++){var x=r[v];if(x.type==="kern")p+=x.size;else{var S=x.elem,g=x.wrapperClasses||[],y=x.wrapperStyle||{},$=yt(g,[u,S],void 0,y);$.style.top=K(-i-p-S.depth),x.marginLeft&&($.style.marginLeft=x.marginLeft),x.marginRight&&($.style.marginRight=x.marginRight),h.push($),p+=S.height+S.depth}m=Math.min(m,p),f=Math.max(f,p)}var F=yt(["vlist"],h);F.style.height=K(f);var P;if(m<0){var E=yt([],[]),M=yt(["vlist"],[E]);M.style.height=K(-m);var I=yt(["vlist-s"],[new Kt("​")]);P=[yt(["vlist-r"],[F,I]),yt(["vlist-r"],[M])]}else P=[yt(["vlist-r"],[F])];var O=yt(["vlist-t"],P);return P.length===2&&O.classes.push("vlist-t2"),O.height=f,O.depth=-m,O},Ow=(e,t)=>{var n=yt(["mspace"],[],t),r=Ie(e,t);return n.style.marginRight=K(r),n},Tl=function(t,n,r){var a="";switch(t){case"amsrm":a="AMS";break;case"textrm":a="Main";break;case"textsf":a="SansSerif";break;case"texttt":a="Typewriter";break;default:a=t}var i;return n==="textbf"&&r==="textit"?i="BoldItalic":n==="textbf"?i="Bold":n==="textit"?i="Italic":i="Regular",a+"-"+i},_g={mathbf:{variant:"bold",fontName:"Main-Bold"},mathrm:{variant:"normal",fontName:"Main-Regular"},textit:{variant:"italic",fontName:"Main-Italic"},mathit:{variant:"italic",fontName:"Main-Italic"},mathnormal:{variant:"italic",fontName:"Math-Italic"},mathsfit:{variant:"sans-serif-italic",fontName:"SansSerif-Italic"},mathbb:{variant:"double-struck",fontName:"AMS-Regular"},mathcal:{variant:"script",fontName:"Caligraphic-Regular"},mathfrak:{variant:"fraktur",fontName:"Fraktur-Regular"},mathscr:{variant:"script",fontName:"Script-Regular"},mathsf:{variant:"sans-serif",fontName:"SansSerif-Regular"},mathtt:{variant:"monospace",fontName:"Typewriter-Regular"}},Sg={vec:["vec",.471,.714],oiintSize1:["oiintSize1",.957,.499],oiintSize2:["oiintSize2",1.472,.659],oiiintSize1:["oiiintSize1",1.304,.499],oiiintSize2:["oiiintSize2",1.98,.659]},Bw=function(t,n){var[r,a,i]=Sg[t],l=new vr(r),o=new jn([l],{width:K(a),height:K(i),style:"width:"+K(a),viewBox:"0 0 "+1e3*a+" "+1e3*i,preserveAspectRatio:"xMinYMin"}),s=$g(["overlay"],[o],n);return s.height=i,s.style.height=K(i),s.style.width=K(a),s},T={fontMap:_g,makeSymbol:nn,mathsym:Ew,makeSpan:yt,makeSvgSpan:$g,makeLineSpan:Pw,makeAnchor:Nw,makeFragment:kg,wrapFragment:Mw,makeVList:Iw,makeOrd:Fw,makeGlue:Ow,staticSvg:Bw,svgData:Sg,tryCombineChars:Tw},Me={number:3,unit:"mu"},zr={number:4,unit:"mu"},En={number:5,unit:"mu"},Lw={mord:{mop:Me,mbin:zr,mrel:En,minner:Me},mop:{mord:Me,mop:Me,mrel:En,minner:Me},mbin:{mord:zr,mop:zr,mopen:zr,minner:zr},mrel:{mord:En,mop:En,mopen:En,minner:En},mopen:{},mclose:{mop:Me,mbin:zr,mrel:En,minner:Me},mpunct:{mord:Me,mop:Me,mrel:En,mopen:Me,mclose:Me,mpunct:Me,minner:Me},minner:{mord:Me,mop:Me,mbin:zr,mrel:En,mopen:Me,mpunct:Me,minner:Me}},qw={mord:{mop:Me},mop:{mord:Me,mop:Me},mbin:{},mrel:{},mopen:{},mclose:{mop:Me},mpunct:{},minner:{mop:Me}},Dg={},No={},Mo={};function Z(e){for(var{type:t,names:n,props:r,handler:a,htmlBuilder:i,mathmlBuilder:l}=e,o={type:t,numArgs:r.numArgs,argTypes:r.argTypes,allowedInArgument:!!r.allowedInArgument,allowedInText:!!r.allowedInText,allowedInMath:r.allowedInMath===void 0?!0:r.allowedInMath,numOptionalArgs:r.numOptionalArgs||0,infix:!!r.infix,primitive:!!r.primitive,handler:a},s=0;s<n.length;++s)Dg[n[s]]=o;t&&(i&&(No[t]=i),l&&(Mo[t]=l))}function Qr(e){var{type:t,htmlBuilder:n,mathmlBuilder:r}=e;Z({type:t,names:[],props:{numArgs:0},handler(){throw new Error("Should never be called.")},htmlBuilder:n,mathmlBuilder:r})}var Ro=function(t){return t.type==="ordgroup"&&t.body.length===1?t.body[0]:t},Ue=function(t){return t.type==="ordgroup"?t.body:[t]},Hn=T.makeSpan,jw=["leftmost","mbin","mopen","mrel","mop","mpunct"],Hw=["rightmost","mrel","mclose","mpunct"],Uw={display:ae.DISPLAY,text:ae.TEXT,script:ae.SCRIPT,scriptscript:ae.SCRIPTSCRIPT},Ww={mord:"mord",mop:"mop",mbin:"mbin",mrel:"mrel",mopen:"mopen",mclose:"mclose",mpunct:"mpunct",minner:"minner"},Ze=function(t,n,r,a){a===void 0&&(a=[null,null]);for(var i=[],l=0;l<t.length;l++){var o=ye(t[l],n);if(o instanceof al){var s=o.children;i.push(...s)}else i.push(o)}if(T.tryCombineChars(i),!r)return i;var u=n;if(t.length===1){var h=t[0];h.type==="sizing"?u=n.havingSize(h.size):h.type==="styling"&&(u=n.havingStyle(Uw[h.style]))}var m=Hn([a[0]||"leftmost"],[],n),f=Hn([a[1]||"rightmost"],[],n),p=r==="root";return Kd(i,(v,x)=>{var S=x.classes[0],g=v.classes[0];S==="mbin"&&te.contains(Hw,g)?x.classes[0]="mord":g==="mbin"&&te.contains(jw,S)&&(v.classes[0]="mord")},{node:m},f,p),Kd(i,(v,x)=>{var S=z0(x),g=z0(v),y=S&&g?v.hasClass("mtight")?qw[S][g]:Lw[S][g]:null;if(y)return T.makeGlue(y,u)},{node:m},f,p),i},Kd=function e(t,n,r,a,i){a&&t.push(a);for(var l=0;l<t.length;l++){var o=t[l],s=Cg(o);if(s){e(s.children,n,r,null,i);continue}var u=!o.hasClass("mspace");if(u){var h=n(o,r.node);h&&(r.insertAfter?r.insertAfter(h):(t.unshift(h),l++))}u?r.node=o:i&&o.hasClass("newline")&&(r.node=Hn(["leftmost"])),r.insertAfter=(m=>f=>{t.splice(m+1,0,f),l++})(l)}a&&t.pop()},Cg=function(t){return t instanceof al||t instanceof rc||t instanceof il&&t.hasClass("enclosing")?t:null},Vw=function e(t,n){var r=Cg(t);if(r){var a=r.children;if(a.length){if(n==="right")return e(a[a.length-1],"right");if(n==="left")return e(a[0],"left")}}return t},z0=function(t,n){return t?(n&&(t=Vw(t,n)),Ww[t.classes[0]]||null):null},Ki=function(t,n){var r=["nulldelimiter"].concat(t.baseSizingClasses());return Hn(n.concat(r))},ye=function(t,n,r){if(!t)return Hn();if(No[t.type]){var a=No[t.type](t,n);if(r&&n.size!==r.size){a=Hn(n.sizingClasses(r),[a],n);var i=n.sizeMultiplier/r.sizeMultiplier;a.height*=i,a.depth*=i}return a}else throw new H("Got group of unknown type: '"+t.type+"'")};function Pl(e,t){var n=Hn(["base"],e,t),r=Hn(["strut"]);return r.style.height=K(n.height+n.depth),n.depth&&(r.style.verticalAlign=K(-n.depth)),n.children.unshift(r),n}function F0(e,t){var n=null;e.length===1&&e[0].type==="tag"&&(n=e[0].tag,e=e[0].body);var r=Ze(e,t,"root"),a;r.length===2&&r[1].hasClass("tag")&&(a=r.pop());for(var i=[],l=[],o=0;o<r.length;o++)if(l.push(r[o]),r[o].hasClass("mbin")||r[o].hasClass("mrel")||r[o].hasClass("allowbreak")){for(var s=!1;o<r.length-1&&r[o+1].hasClass("mspace")&&!r[o+1].hasClass("newline");)o++,l.push(r[o]),r[o].hasClass("nobreak")&&(s=!0);s||(i.push(Pl(l,t)),l=[])}else r[o].hasClass("newline")&&(l.pop(),l.length>0&&(i.push(Pl(l,t)),l=[]),i.push(r[o]));l.length>0&&i.push(Pl(l,t));var u;n?(u=Pl(Ze(n,t,!0)),u.classes=["tag"],i.push(u)):a&&i.push(a);var h=Hn(["katex-html"],i);if(h.setAttribute("aria-hidden","true"),u){var m=u.children[0];m.style.height=K(h.height+h.depth),h.depth&&(m.style.verticalAlign=K(-h.depth))}return h}function Eg(e){return new al(e)}class Lt{constructor(t,n,r){this.type=void 0,this.attributes=void 0,this.children=void 0,this.classes=void 0,this.type=t,this.attributes={},this.children=n||[],this.classes=r||[]}setAttribute(t,n){this.attributes[t]=n}getAttribute(t){return this.attributes[t]}toNode(){var t=document.createElementNS("http://www.w3.org/1998/Math/MathML",this.type);for(var n in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,n)&&t.setAttribute(n,this.attributes[n]);this.classes.length>0&&(t.className=yr(this.classes));for(var r=0;r<this.children.length;r++)t.appendChild(this.children[r].toNode());return t}toMarkup(){var t="<"+this.type;for(var n in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,n)&&(t+=" "+n+'="',t+=te.escape(this.attributes[n]),t+='"');this.classes.length>0&&(t+=' class ="'+te.escape(yr(this.classes))+'"'),t+=">";for(var r=0;r<this.children.length;r++)t+=this.children[r].toMarkup();return t+="</"+this.type+">",t}toText(){return this.children.map(t=>t.toText()).join("")}}class _i{constructor(t){this.text=void 0,this.text=t}toNode(){return document.createTextNode(this.text)}toMarkup(){return te.escape(this.toText())}toText(){return this.text}}class Kw{constructor(t){this.width=void 0,this.character=void 0,this.width=t,t>=.05555&&t<=.05556?this.character=" ":t>=.1666&&t<=.1667?this.character=" ":t>=.2222&&t<=.2223?this.character=" ":t>=.2777&&t<=.2778?this.character="  ":t>=-.05556&&t<=-.05555?this.character=" ⁣":t>=-.1667&&t<=-.1666?this.character=" ⁣":t>=-.2223&&t<=-.2222?this.character=" ⁣":t>=-.2778&&t<=-.2777?this.character=" ⁣":this.character=null}toNode(){if(this.character)return document.createTextNode(this.character);var t=document.createElementNS("http://www.w3.org/1998/Math/MathML","mspace");return t.setAttribute("width",K(this.width)),t}toMarkup(){return this.character?"<mtext>"+this.character+"</mtext>":'<mspace width="'+K(this.width)+'"/>'}toText(){return this.character?this.character:" "}}var q={MathNode:Lt,TextNode:_i,SpaceNode:Kw,newDocumentFragment:Eg},Qt=function(t,n,r){return Ee[n][t]&&Ee[n][t].replace&&t.charCodeAt(0)!==55349&&!(wg.hasOwnProperty(t)&&r&&(r.fontFamily&&r.fontFamily.slice(4,6)==="tt"||r.font&&r.font.slice(4,6)==="tt"))&&(t=Ee[n][t].replace),new q.TextNode(t)},ic=function(t){return t.length===1?t[0]:new q.MathNode("mrow",t)},lc=function(t,n){if(n.fontFamily==="texttt")return"monospace";if(n.fontFamily==="textsf")return n.fontShape==="textit"&&n.fontWeight==="textbf"?"sans-serif-bold-italic":n.fontShape==="textit"?"sans-serif-italic":n.fontWeight==="textbf"?"bold-sans-serif":"sans-serif";if(n.fontShape==="textit"&&n.fontWeight==="textbf")return"bold-italic";if(n.fontShape==="textit")return"italic";if(n.fontWeight==="textbf")return"bold";var r=n.font;if(!r||r==="mathnormal")return null;var a=t.mode;if(r==="mathit")return"italic";if(r==="boldsymbol")return t.type==="textord"?"bold":"bold-italic";if(r==="mathbf")return"bold";if(r==="mathbb")return"double-struck";if(r==="mathsfit")return"sans-serif-italic";if(r==="mathfrak")return"fraktur";if(r==="mathscr"||r==="mathcal")return"script";if(r==="mathsf")return"sans-serif";if(r==="mathtt")return"monospace";var i=t.text;if(te.contains(["\\imath","\\jmath"],i))return null;Ee[a][i]&&Ee[a][i].replace&&(i=Ee[a][i].replace);var l=T.fontMap[r].fontName;return nc(i,l,a)?T.fontMap[r].variant:null},St=function(t,n,r){if(t.length===1){var a=Se(t[0],n);return r&&a instanceof Lt&&a.type==="mo"&&(a.setAttribute("lspace","0em"),a.setAttribute("rspace","0em")),[a]}for(var i=[],l,o=0;o<t.length;o++){var s=Se(t[o],n);if(s instanceof Lt&&l instanceof Lt){if(s.type==="mtext"&&l.type==="mtext"&&s.getAttribute("mathvariant")===l.getAttribute("mathvariant")){l.children.push(...s.children);continue}else if(s.type==="mn"&&l.type==="mn"){l.children.push(...s.children);continue}else if(s.type==="mi"&&s.children.length===1&&l.type==="mn"){var u=s.children[0];if(u instanceof _i&&u.text==="."){l.children.push(...s.children);continue}}else if(l.type==="mi"&&l.children.length===1){var h=l.children[0];if(h instanceof _i&&h.text==="̸"&&(s.type==="mo"||s.type==="mi"||s.type==="mn")){var m=s.children[0];m instanceof _i&&m.text.length>0&&(m.text=m.text.slice(0,1)+"̸"+m.text.slice(1),i.pop())}}}i.push(s),l=s}return i},xr=function(t,n,r){return ic(St(t,n,r))},Se=function(t,n){if(!t)return new q.MathNode("mrow");if(Mo[t.type]){var r=Mo[t.type](t,n);return r}else throw new H("Got group of unknown type: '"+t.type+"'")};function Qd(e,t,n,r,a){var i=St(e,n),l;i.length===1&&i[0]instanceof Lt&&te.contains(["mrow","mtable"],i[0].type)?l=i[0]:l=new q.MathNode("mrow",i);var o=new q.MathNode("annotation",[new q.TextNode(t)]);o.setAttribute("encoding","application/x-tex");var s=new q.MathNode("semantics",[l,o]),u=new q.MathNode("math",[s]);u.setAttribute("xmlns","http://www.w3.org/1998/Math/MathML"),r&&u.setAttribute("display","block");var h=a?"katex":"katex-mathml";return T.makeSpan([h],[u])}var zg=function(t){return new An({style:t.displayMode?ae.DISPLAY:ae.TEXT,maxSize:t.maxSize,minRuleThickness:t.minRuleThickness})},Fg=function(t,n){if(n.displayMode){var r=["katex-display"];n.leqno&&r.push("leqno"),n.fleqn&&r.push("fleqn"),t=T.makeSpan(r,[t])}return t},Qw=function(t,n,r){var a=zg(r),i;if(r.output==="mathml")return Qd(t,n,a,r.displayMode,!0);if(r.output==="html"){var l=F0(t,a);i=T.makeSpan(["katex"],[l])}else{var o=Qd(t,n,a,r.displayMode,!1),s=F0(t,a);i=T.makeSpan(["katex"],[o,s])}return Fg(i,r)},Gw=function(t,n,r){var a=zg(r),i=F0(t,a),l=T.makeSpan(["katex"],[i]);return Fg(l,r)},Zw={widehat:"^",widecheck:"ˇ",widetilde:"~",utilde:"~",overleftarrow:"←",underleftarrow:"←",xleftarrow:"←",overrightarrow:"→",underrightarrow:"→",xrightarrow:"→",underbrace:"⏟",overbrace:"⏞",overgroup:"⏠",undergroup:"⏡",overleftrightarrow:"↔",underleftrightarrow:"↔",xleftrightarrow:"↔",Overrightarrow:"⇒",xRightarrow:"⇒",overleftharpoon:"↼",xleftharpoonup:"↼",overrightharpoon:"⇀",xrightharpoonup:"⇀",xLeftarrow:"⇐",xLeftrightarrow:"⇔",xhookleftarrow:"↩",xhookrightarrow:"↪",xmapsto:"↦",xrightharpoondown:"⇁",xleftharpoondown:"↽",xrightleftharpoons:"⇌",xleftrightharpoons:"⇋",xtwoheadleftarrow:"↞",xtwoheadrightarrow:"↠",xlongequal:"=",xtofrom:"⇄",xrightleftarrows:"⇄",xrightequilibrium:"⇌",xleftequilibrium:"⇋","\\cdrightarrow":"→","\\cdleftarrow":"←","\\cdlongequal":"="},Xw=function(t){var n=new q.MathNode("mo",[new q.TextNode(Zw[t.replace(/^\\/,"")])]);return n.setAttribute("stretchy","true"),n},Yw={overrightarrow:[["rightarrow"],.888,522,"xMaxYMin"],overleftarrow:[["leftarrow"],.888,522,"xMinYMin"],underrightarrow:[["rightarrow"],.888,522,"xMaxYMin"],underleftarrow:[["leftarrow"],.888,522,"xMinYMin"],xrightarrow:[["rightarrow"],1.469,522,"xMaxYMin"],"\\cdrightarrow":[["rightarrow"],3,522,"xMaxYMin"],xleftarrow:[["leftarrow"],1.469,522,"xMinYMin"],"\\cdleftarrow":[["leftarrow"],3,522,"xMinYMin"],Overrightarrow:[["doublerightarrow"],.888,560,"xMaxYMin"],xRightarrow:[["doublerightarrow"],1.526,560,"xMaxYMin"],xLeftarrow:[["doubleleftarrow"],1.526,560,"xMinYMin"],overleftharpoon:[["leftharpoon"],.888,522,"xMinYMin"],xleftharpoonup:[["leftharpoon"],.888,522,"xMinYMin"],xleftharpoondown:[["leftharpoondown"],.888,522,"xMinYMin"],overrightharpoon:[["rightharpoon"],.888,522,"xMaxYMin"],xrightharpoonup:[["rightharpoon"],.888,522,"xMaxYMin"],xrightharpoondown:[["rightharpoondown"],.888,522,"xMaxYMin"],xlongequal:[["longequal"],.888,334,"xMinYMin"],"\\cdlongequal":[["longequal"],3,334,"xMinYMin"],xtwoheadleftarrow:[["twoheadleftarrow"],.888,334,"xMinYMin"],xtwoheadrightarrow:[["twoheadrightarrow"],.888,334,"xMaxYMin"],overleftrightarrow:[["leftarrow","rightarrow"],.888,522],overbrace:[["leftbrace","midbrace","rightbrace"],1.6,548],underbrace:[["leftbraceunder","midbraceunder","rightbraceunder"],1.6,548],underleftrightarrow:[["leftarrow","rightarrow"],.888,522],xleftrightarrow:[["leftarrow","rightarrow"],1.75,522],xLeftrightarrow:[["doubleleftarrow","doublerightarrow"],1.75,560],xrightleftharpoons:[["leftharpoondownplus","rightharpoonplus"],1.75,716],xleftrightharpoons:[["leftharpoonplus","rightharpoondownplus"],1.75,716],xhookleftarrow:[["leftarrow","righthook"],1.08,522],xhookrightarrow:[["lefthook","rightarrow"],1.08,522],overlinesegment:[["leftlinesegment","rightlinesegment"],.888,522],underlinesegment:[["leftlinesegment","rightlinesegment"],.888,522],overgroup:[["leftgroup","rightgroup"],.888,342],undergroup:[["leftgroupunder","rightgroupunder"],.888,342],xmapsto:[["leftmapsto","rightarrow"],1.5,522],xtofrom:[["leftToFrom","rightToFrom"],1.75,528],xrightleftarrows:[["baraboveleftarrow","rightarrowabovebar"],1.75,901],xrightequilibrium:[["baraboveshortleftharpoon","rightharpoonaboveshortbar"],1.75,716],xleftequilibrium:[["shortbaraboveleftharpoon","shortrightharpoonabovebar"],1.75,716]},Jw=function(t){return t.type==="ordgroup"?t.body.length:1},e$=function(t,n){function r(){var o=4e5,s=t.label.slice(1);if(te.contains(["widehat","widecheck","widetilde","utilde"],s)){var u=t,h=Jw(u.base),m,f,p;if(h>5)s==="widehat"||s==="widecheck"?(m=420,o=2364,p=.42,f=s+"4"):(m=312,o=2340,p=.34,f="tilde4");else{var v=[1,1,2,2,3,3][h];s==="widehat"||s==="widecheck"?(o=[0,1062,2364,2364,2364][v],m=[0,239,300,360,420][v],p=[0,.24,.3,.3,.36,.42][v],f=s+v):(o=[0,600,1033,2339,2340][v],m=[0,260,286,306,312][v],p=[0,.26,.286,.3,.306,.34][v],f="tilde"+v)}var x=new vr(f),S=new jn([x],{width:"100%",height:K(p),viewBox:"0 0 "+o+" "+m,preserveAspectRatio:"none"});return{span:T.makeSvgSpan([],[S],n),minWidth:0,height:p}}else{var g=[],y=Yw[s],[$,F,P]=y,E=P/1e3,M=$.length,I,O;if(M===1){var Q=y[3];I=["hide-tail"],O=[Q]}else if(M===2)I=["halfarrow-left","halfarrow-right"],O=["xMinYMin","xMaxYMin"];else if(M===3)I=["brace-left","brace-center","brace-right"],O=["xMinYMin","xMidYMin","xMaxYMin"];else throw new Error(`Correct katexImagesData or update code here to support
                    `+M+" children.");for(var V=0;V<M;V++){var L=new vr($[V]),he=new jn([L],{width:"400em",height:K(E),viewBox:"0 0 "+o+" "+P,preserveAspectRatio:O[V]+" slice"}),oe=T.makeSvgSpan([I[V]],[he],n);if(M===1)return{span:oe,minWidth:F,height:E};oe.style.height=K(E),g.push(oe)}return{span:T.makeSpan(["stretchy"],g,n),minWidth:F,height:E}}}var{span:a,minWidth:i,height:l}=r();return a.height=l,a.style.height=K(l),i>0&&(a.style.minWidth=K(i)),a},t$=function(t,n,r,a,i){var l,o=t.height+t.depth+r+a;if(/fbox|color|angl/.test(n)){if(l=T.makeSpan(["stretchy",n],[],i),n==="fbox"){var s=i.color&&i.getColor();s&&(l.style.borderColor=s)}}else{var u=[];/^[bx]cancel$/.test(n)&&u.push(new C0({x1:"0",y1:"0",x2:"100%",y2:"100%","stroke-width":"0.046em"})),/^x?cancel$/.test(n)&&u.push(new C0({x1:"0",y1:"100%",x2:"100%",y2:"0","stroke-width":"0.046em"}));var h=new jn(u,{width:"100%",height:K(o)});l=T.makeSvgSpan([],[h],i)}return l.height=o,l.style.height=K(o),l},Un={encloseSpan:t$,mathMLnode:Xw,svgSpan:e$};function de(e,t){if(!e||e.type!==t)throw new Error("Expected node of type "+t+", but got "+(e?"node of type "+e.type:String(e)));return e}function oc(e){var t=hs(e);if(!t)throw new Error("Expected node of symbol group type, but got "+(e?"node of type "+e.type:String(e)));return t}function hs(e){return e&&(e.type==="atom"||Dw.hasOwnProperty(e.type))?e:null}var sc=(e,t)=>{var n,r,a;e&&e.type==="supsub"?(r=de(e.base,"accent"),n=r.base,e.base=n,a=_w(ye(e,t)),e.base=r):(r=de(e,"accent"),n=r.base);var i=ye(n,t.havingCrampedStyle()),l=r.isShifty&&te.isCharacterBox(n),o=0;if(l){var s=te.getBaseElem(n),u=ye(s,t.havingCrampedStyle());o=qd(u).skew}var h=r.label==="\\c",m=h?i.height+i.depth:Math.min(i.height,t.fontMetrics().xHeight),f;if(r.isStretchy)f=Un.svgSpan(r,t),f=T.makeVList({positionType:"firstBaseline",children:[{type:"elem",elem:i},{type:"elem",elem:f,wrapperClasses:["svg-align"],wrapperStyle:o>0?{width:"calc(100% - "+K(2*o)+")",marginLeft:K(2*o)}:void 0}]},t);else{var p,v;r.label==="\\vec"?(p=T.staticSvg("vec",t),v=T.svgData.vec[1]):(p=T.makeOrd({mode:r.mode,text:r.label},t,"textord"),p=qd(p),p.italic=0,v=p.width,h&&(m+=p.depth)),f=T.makeSpan(["accent-body"],[p]);var x=r.label==="\\textcircled";x&&(f.classes.push("accent-full"),m=i.height);var S=o;x||(S-=v/2),f.style.left=K(S),r.label==="\\textcircled"&&(f.style.top=".2em"),f=T.makeVList({positionType:"firstBaseline",children:[{type:"elem",elem:i},{type:"kern",size:-m},{type:"elem",elem:f}]},t)}var g=T.makeSpan(["mord","accent"],[f],t);return a?(a.children[0]=g,a.height=Math.max(g.height,a.height),a.classes[0]="mord",a):g},Ag=(e,t)=>{var n=e.isStretchy?Un.mathMLnode(e.label):new q.MathNode("mo",[Qt(e.label,e.mode)]),r=new q.MathNode("mover",[Se(e.base,t),n]);return r.setAttribute("accent","true"),r},n$=new RegExp(["\\acute","\\grave","\\ddot","\\tilde","\\bar","\\breve","\\check","\\hat","\\vec","\\dot","\\mathring"].map(e=>"\\"+e).join("|"));Z({type:"accent",names:["\\acute","\\grave","\\ddot","\\tilde","\\bar","\\breve","\\check","\\hat","\\vec","\\dot","\\mathring","\\widecheck","\\widehat","\\widetilde","\\overrightarrow","\\overleftarrow","\\Overrightarrow","\\overleftrightarrow","\\overgroup","\\overlinesegment","\\overleftharpoon","\\overrightharpoon"],props:{numArgs:1},handler:(e,t)=>{var n=Ro(t[0]),r=!n$.test(e.funcName),a=!r||e.funcName==="\\widehat"||e.funcName==="\\widetilde"||e.funcName==="\\widecheck";return{type:"accent",mode:e.parser.mode,label:e.funcName,isStretchy:r,isShifty:a,base:n}},htmlBuilder:sc,mathmlBuilder:Ag});Z({type:"accent",names:["\\'","\\`","\\^","\\~","\\=","\\u","\\.",'\\"',"\\c","\\r","\\H","\\v","\\textcircled"],props:{numArgs:1,allowedInText:!0,allowedInMath:!0,argTypes:["primitive"]},handler:(e,t)=>{var n=t[0],r=e.parser.mode;return r==="math"&&(e.parser.settings.reportNonstrict("mathVsTextAccents","LaTeX's accent "+e.funcName+" works only in text mode"),r="text"),{type:"accent",mode:r,label:e.funcName,isStretchy:!1,isShifty:!0,base:n}},htmlBuilder:sc,mathmlBuilder:Ag});Z({type:"accentUnder",names:["\\underleftarrow","\\underrightarrow","\\underleftrightarrow","\\undergroup","\\underlinesegment","\\utilde"],props:{numArgs:1},handler:(e,t)=>{var{parser:n,funcName:r}=e,a=t[0];return{type:"accentUnder",mode:n.mode,label:r,base:a}},htmlBuilder:(e,t)=>{var n=ye(e.base,t),r=Un.svgSpan(e,t),a=e.label==="\\utilde"?.12:0,i=T.makeVList({positionType:"top",positionData:n.height,children:[{type:"elem",elem:r,wrapperClasses:["svg-align"]},{type:"kern",size:a},{type:"elem",elem:n}]},t);return T.makeSpan(["mord","accentunder"],[i],t)},mathmlBuilder:(e,t)=>{var n=Un.mathMLnode(e.label),r=new q.MathNode("munder",[Se(e.base,t),n]);return r.setAttribute("accentunder","true"),r}});var Nl=e=>{var t=new q.MathNode("mpadded",e?[e]:[]);return t.setAttribute("width","+0.6em"),t.setAttribute("lspace","0.3em"),t};Z({type:"xArrow",names:["\\xleftarrow","\\xrightarrow","\\xLeftarrow","\\xRightarrow","\\xleftrightarrow","\\xLeftrightarrow","\\xhookleftarrow","\\xhookrightarrow","\\xmapsto","\\xrightharpoondown","\\xrightharpoonup","\\xleftharpoondown","\\xleftharpoonup","\\xrightleftharpoons","\\xleftrightharpoons","\\xlongequal","\\xtwoheadrightarrow","\\xtwoheadleftarrow","\\xtofrom","\\xrightleftarrows","\\xrightequilibrium","\\xleftequilibrium","\\\\cdrightarrow","\\\\cdleftarrow","\\\\cdlongequal"],props:{numArgs:1,numOptionalArgs:1},handler(e,t,n){var{parser:r,funcName:a}=e;return{type:"xArrow",mode:r.mode,label:a,body:t[0],below:n[0]}},htmlBuilder(e,t){var n=t.style,r=t.havingStyle(n.sup()),a=T.wrapFragment(ye(e.body,r,t),t),i=e.label.slice(0,2)==="\\x"?"x":"cd";a.classes.push(i+"-arrow-pad");var l;e.below&&(r=t.havingStyle(n.sub()),l=T.wrapFragment(ye(e.below,r,t),t),l.classes.push(i+"-arrow-pad"));var o=Un.svgSpan(e,t),s=-t.fontMetrics().axisHeight+.5*o.height,u=-t.fontMetrics().axisHeight-.5*o.height-.111;(a.depth>.25||e.label==="\\xleftequilibrium")&&(u-=a.depth);var h;if(l){var m=-t.fontMetrics().axisHeight+l.height+.5*o.height+.111;h=T.makeVList({positionType:"individualShift",children:[{type:"elem",elem:a,shift:u},{type:"elem",elem:o,shift:s},{type:"elem",elem:l,shift:m}]},t)}else h=T.makeVList({positionType:"individualShift",children:[{type:"elem",elem:a,shift:u},{type:"elem",elem:o,shift:s}]},t);return h.children[0].children[0].children[1].classes.push("svg-align"),T.makeSpan(["mrel","x-arrow"],[h],t)},mathmlBuilder(e,t){var n=Un.mathMLnode(e.label);n.setAttribute("minsize",e.label.charAt(0)==="x"?"1.75em":"3.0em");var r;if(e.body){var a=Nl(Se(e.body,t));if(e.below){var i=Nl(Se(e.below,t));r=new q.MathNode("munderover",[n,i,a])}else r=new q.MathNode("mover",[n,a])}else if(e.below){var l=Nl(Se(e.below,t));r=new q.MathNode("munder",[n,l])}else r=Nl(),r=new q.MathNode("mover",[n,r]);return r}});var r$=T.makeSpan;function Tg(e,t){var n=Ze(e.body,t,!0);return r$([e.mclass],n,t)}function Pg(e,t){var n,r=St(e.body,t);return e.mclass==="minner"?n=new q.MathNode("mpadded",r):e.mclass==="mord"?e.isCharacterBox?(n=r[0],n.type="mi"):n=new q.MathNode("mi",r):(e.isCharacterBox?(n=r[0],n.type="mo"):n=new q.MathNode("mo",r),e.mclass==="mbin"?(n.attributes.lspace="0.22em",n.attributes.rspace="0.22em"):e.mclass==="mpunct"?(n.attributes.lspace="0em",n.attributes.rspace="0.17em"):e.mclass==="mopen"||e.mclass==="mclose"?(n.attributes.lspace="0em",n.attributes.rspace="0em"):e.mclass==="minner"&&(n.attributes.lspace="0.0556em",n.attributes.width="+0.1111em")),n}Z({type:"mclass",names:["\\mathord","\\mathbin","\\mathrel","\\mathopen","\\mathclose","\\mathpunct","\\mathinner"],props:{numArgs:1,primitive:!0},handler(e,t){var{parser:n,funcName:r}=e,a=t[0];return{type:"mclass",mode:n.mode,mclass:"m"+r.slice(5),body:Ue(a),isCharacterBox:te.isCharacterBox(a)}},htmlBuilder:Tg,mathmlBuilder:Pg});var cs=e=>{var t=e.type==="ordgroup"&&e.body.length?e.body[0]:e;return t.type==="atom"&&(t.family==="bin"||t.family==="rel")?"m"+t.family:"mord"};Z({type:"mclass",names:["\\@binrel"],props:{numArgs:2},handler(e,t){var{parser:n}=e;return{type:"mclass",mode:n.mode,mclass:cs(t[0]),body:Ue(t[1]),isCharacterBox:te.isCharacterBox(t[1])}}});Z({type:"mclass",names:["\\stackrel","\\overset","\\underset"],props:{numArgs:2},handler(e,t){var{parser:n,funcName:r}=e,a=t[1],i=t[0],l;r!=="\\stackrel"?l=cs(a):l="mrel";var o={type:"op",mode:a.mode,limits:!0,alwaysHandleSupSub:!0,parentIsSupSub:!1,symbol:!1,suppressBaseShift:r!=="\\stackrel",body:Ue(a)},s={type:"supsub",mode:i.mode,base:o,sup:r==="\\underset"?null:i,sub:r==="\\underset"?i:null};return{type:"mclass",mode:n.mode,mclass:l,body:[s],isCharacterBox:te.isCharacterBox(s)}},htmlBuilder:Tg,mathmlBuilder:Pg});Z({type:"pmb",names:["\\pmb"],props:{numArgs:1,allowedInText:!0},handler(e,t){var{parser:n}=e;return{type:"pmb",mode:n.mode,mclass:cs(t[0]),body:Ue(t[0])}},htmlBuilder(e,t){var n=Ze(e.body,t,!0),r=T.makeSpan([e.mclass],n,t);return r.style.textShadow="0.02em 0.01em 0.04px",r},mathmlBuilder(e,t){var n=St(e.body,t),r=new q.MathNode("mstyle",n);return r.setAttribute("style","text-shadow: 0.02em 0.01em 0.04px"),r}});var a$={">":"\\\\cdrightarrow","<":"\\\\cdleftarrow","=":"\\\\cdlongequal",A:"\\uparrow",V:"\\downarrow","|":"\\Vert",".":"no arrow"},Gd=()=>({type:"styling",body:[],mode:"math",style:"display"}),Zd=e=>e.type==="textord"&&e.text==="@",i$=(e,t)=>(e.type==="mathord"||e.type==="atom")&&e.text===t;function l$(e,t,n){var r=a$[e];switch(r){case"\\\\cdrightarrow":case"\\\\cdleftarrow":return n.callFunction(r,[t[0]],[t[1]]);case"\\uparrow":case"\\downarrow":{var a=n.callFunction("\\\\cdleft",[t[0]],[]),i={type:"atom",text:r,mode:"math",family:"rel"},l=n.callFunction("\\Big",[i],[]),o=n.callFunction("\\\\cdright",[t[1]],[]),s={type:"ordgroup",mode:"math",body:[a,l,o]};return n.callFunction("\\\\cdparent",[s],[])}case"\\\\cdlongequal":return n.callFunction("\\\\cdlongequal",[],[]);case"\\Vert":{var u={type:"textord",text:"\\Vert",mode:"math"};return n.callFunction("\\Big",[u],[])}default:return{type:"textord",text:" ",mode:"math"}}}function o$(e){var t=[];for(e.gullet.beginGroup(),e.gullet.macros.set("\\cr","\\\\\\relax"),e.gullet.beginGroup();;){t.push(e.parseExpression(!1,"\\\\")),e.gullet.endGroup(),e.gullet.beginGroup();var n=e.fetch().text;if(n==="&"||n==="\\\\")e.consume();else if(n==="\\end"){t[t.length-1].length===0&&t.pop();break}else throw new H("Expected \\\\ or \\cr or \\end",e.nextToken)}for(var r=[],a=[r],i=0;i<t.length;i++){for(var l=t[i],o=Gd(),s=0;s<l.length;s++)if(!Zd(l[s]))o.body.push(l[s]);else{r.push(o),s+=1;var u=oc(l[s]).text,h=new Array(2);if(h[0]={type:"ordgroup",mode:"math",body:[]},h[1]={type:"ordgroup",mode:"math",body:[]},!("=|.".indexOf(u)>-1))if("<>AV".indexOf(u)>-1)for(var m=0;m<2;m++){for(var f=!0,p=s+1;p<l.length;p++){if(i$(l[p],u)){f=!1,s=p;break}if(Zd(l[p]))throw new H("Missing a "+u+" character to complete a CD arrow.",l[p]);h[m].body.push(l[p])}if(f)throw new H("Missing a "+u+" character to complete a CD arrow.",l[s])}else throw new H('Expected one of "<>AV=|." after @',l[s]);var v=l$(u,h,e),x={type:"styling",body:[v],mode:"math",style:"display"};r.push(x),o=Gd()}i%2===0?r.push(o):r.shift(),r=[],a.push(r)}e.gullet.endGroup(),e.gullet.endGroup();var S=new Array(a[0].length).fill({type:"align",align:"c",pregap:.25,postgap:.25});return{type:"array",mode:"math",body:a,arraystretch:1,addJot:!0,rowGaps:[null],cols:S,colSeparationType:"CD",hLinesBeforeRow:new Array(a.length+1).fill([])}}Z({type:"cdlabel",names:["\\\\cdleft","\\\\cdright"],props:{numArgs:1},handler(e,t){var{parser:n,funcName:r}=e;return{type:"cdlabel",mode:n.mode,side:r.slice(4),label:t[0]}},htmlBuilder(e,t){var n=t.havingStyle(t.style.sup()),r=T.wrapFragment(ye(e.label,n,t),t);return r.classes.push("cd-label-"+e.side),r.style.bottom=K(.8-r.depth),r.height=0,r.depth=0,r},mathmlBuilder(e,t){var n=new q.MathNode("mrow",[Se(e.label,t)]);return n=new q.MathNode("mpadded",[n]),n.setAttribute("width","0"),e.side==="left"&&n.setAttribute("lspace","-1width"),n.setAttribute("voffset","0.7em"),n=new q.MathNode("mstyle",[n]),n.setAttribute("displaystyle","false"),n.setAttribute("scriptlevel","1"),n}});Z({type:"cdlabelparent",names:["\\\\cdparent"],props:{numArgs:1},handler(e,t){var{parser:n}=e;return{type:"cdlabelparent",mode:n.mode,fragment:t[0]}},htmlBuilder(e,t){var n=T.wrapFragment(ye(e.fragment,t),t);return n.classes.push("cd-vert-arrow"),n},mathmlBuilder(e,t){return new q.MathNode("mrow",[Se(e.fragment,t)])}});Z({type:"textord",names:["\\@char"],props:{numArgs:1,allowedInText:!0},handler(e,t){for(var{parser:n}=e,r=de(t[0],"ordgroup"),a=r.body,i="",l=0;l<a.length;l++){var o=de(a[l],"textord");i+=o.text}var s=parseInt(i),u;if(isNaN(s))throw new H("\\@char has non-numeric argument "+i);if(s<0||s>=1114111)throw new H("\\@char with invalid code point "+i);return s<=65535?u=String.fromCharCode(s):(s-=65536,u=String.fromCharCode((s>>10)+55296,(s&1023)+56320)),{type:"textord",mode:n.mode,text:u}}});var Ng=(e,t)=>{var n=Ze(e.body,t.withColor(e.color),!1);return T.makeFragment(n)},Mg=(e,t)=>{var n=St(e.body,t.withColor(e.color)),r=new q.MathNode("mstyle",n);return r.setAttribute("mathcolor",e.color),r};Z({type:"color",names:["\\textcolor"],props:{numArgs:2,allowedInText:!0,argTypes:["color","original"]},handler(e,t){var{parser:n}=e,r=de(t[0],"color-token").color,a=t[1];return{type:"color",mode:n.mode,color:r,body:Ue(a)}},htmlBuilder:Ng,mathmlBuilder:Mg});Z({type:"color",names:["\\color"],props:{numArgs:1,allowedInText:!0,argTypes:["color"]},handler(e,t){var{parser:n,breakOnTokenText:r}=e,a=de(t[0],"color-token").color;n.gullet.macros.set("\\current@color",a);var i=n.parseExpression(!0,r);return{type:"color",mode:n.mode,color:a,body:i}},htmlBuilder:Ng,mathmlBuilder:Mg});Z({type:"cr",names:["\\\\"],props:{numArgs:0,numOptionalArgs:0,allowedInText:!0},handler(e,t,n){var{parser:r}=e,a=r.gullet.future().text==="["?r.parseSizeGroup(!0):null,i=!r.settings.displayMode||!r.settings.useStrictBehavior("newLineInDisplayMode","In LaTeX, \\\\ or \\newline does nothing in display mode");return{type:"cr",mode:r.mode,newLine:i,size:a&&de(a,"size").value}},htmlBuilder(e,t){var n=T.makeSpan(["mspace"],[],t);return e.newLine&&(n.classes.push("newline"),e.size&&(n.style.marginTop=K(Ie(e.size,t)))),n},mathmlBuilder(e,t){var n=new q.MathNode("mspace");return e.newLine&&(n.setAttribute("linebreak","newline"),e.size&&n.setAttribute("height",K(Ie(e.size,t)))),n}});var A0={"\\global":"\\global","\\long":"\\\\globallong","\\\\globallong":"\\\\globallong","\\def":"\\gdef","\\gdef":"\\gdef","\\edef":"\\xdef","\\xdef":"\\xdef","\\let":"\\\\globallet","\\futurelet":"\\\\globalfuture"},Rg=e=>{var t=e.text;if(/^(?:[\\{}$&#^_]|EOF)$/.test(t))throw new H("Expected a control sequence",e);return t},s$=e=>{var t=e.gullet.popToken();return t.text==="="&&(t=e.gullet.popToken(),t.text===" "&&(t=e.gullet.popToken())),t},Ig=(e,t,n,r)=>{var a=e.gullet.macros.get(n.text);a==null&&(n.noexpand=!0,a={tokens:[n],numArgs:0,unexpandable:!e.gullet.isExpandable(n.text)}),e.gullet.macros.set(t,a,r)};Z({type:"internal",names:["\\global","\\long","\\\\globallong"],props:{numArgs:0,allowedInText:!0},handler(e){var{parser:t,funcName:n}=e;t.consumeSpaces();var r=t.fetch();if(A0[r.text])return(n==="\\global"||n==="\\\\globallong")&&(r.text=A0[r.text]),de(t.parseFunction(),"internal");throw new H("Invalid token after macro prefix",r)}});Z({type:"internal",names:["\\def","\\gdef","\\edef","\\xdef"],props:{numArgs:0,allowedInText:!0,primitive:!0},handler(e){var{parser:t,funcName:n}=e,r=t.gullet.popToken(),a=r.text;if(/^(?:[\\{}$&#^_]|EOF)$/.test(a))throw new H("Expected a control sequence",r);for(var i=0,l,o=[[]];t.gullet.future().text!=="{";)if(r=t.gullet.popToken(),r.text==="#"){if(t.gullet.future().text==="{"){l=t.gullet.future(),o[i].push("{");break}if(r=t.gullet.popToken(),!/^[1-9]$/.test(r.text))throw new H('Invalid argument number "'+r.text+'"');if(parseInt(r.text)!==i+1)throw new H('Argument number "'+r.text+'" out of order');i++,o.push([])}else{if(r.text==="EOF")throw new H("Expected a macro definition");o[i].push(r.text)}var{tokens:s}=t.gullet.consumeArg();return l&&s.unshift(l),(n==="\\edef"||n==="\\xdef")&&(s=t.gullet.expandTokens(s),s.reverse()),t.gullet.macros.set(a,{tokens:s,numArgs:i,delimiters:o},n===A0[n]),{type:"internal",mode:t.mode}}});Z({type:"internal",names:["\\let","\\\\globallet"],props:{numArgs:0,allowedInText:!0,primitive:!0},handler(e){var{parser:t,funcName:n}=e,r=Rg(t.gullet.popToken());t.gullet.consumeSpaces();var a=s$(t);return Ig(t,r,a,n==="\\\\globallet"),{type:"internal",mode:t.mode}}});Z({type:"internal",names:["\\futurelet","\\\\globalfuture"],props:{numArgs:0,allowedInText:!0,primitive:!0},handler(e){var{parser:t,funcName:n}=e,r=Rg(t.gullet.popToken()),a=t.gullet.popToken(),i=t.gullet.popToken();return Ig(t,r,i,n==="\\\\globalfuture"),t.gullet.pushToken(i),t.gullet.pushToken(a),{type:"internal",mode:t.mode}}});var mi=function(t,n,r){var a=Ee.math[t]&&Ee.math[t].replace,i=nc(a||t,n,r);if(!i)throw new Error("Unsupported symbol "+t+" and font size "+n+".");return i},uc=function(t,n,r,a){var i=r.havingBaseStyle(n),l=T.makeSpan(a.concat(i.sizingClasses(r)),[t],r),o=i.sizeMultiplier/r.sizeMultiplier;return l.height*=o,l.depth*=o,l.maxFontSize=i.sizeMultiplier,l},Og=function(t,n,r){var a=n.havingBaseStyle(r),i=(1-n.sizeMultiplier/a.sizeMultiplier)*n.fontMetrics().axisHeight;t.classes.push("delimcenter"),t.style.top=K(i),t.height-=i,t.depth+=i},u$=function(t,n,r,a,i,l){var o=T.makeSymbol(t,"Main-Regular",i,a),s=uc(o,n,a,l);return r&&Og(s,a,n),s},h$=function(t,n,r,a){return T.makeSymbol(t,"Size"+n+"-Regular",r,a)},Bg=function(t,n,r,a,i,l){var o=h$(t,n,i,a),s=uc(T.makeSpan(["delimsizing","size"+n],[o],a),ae.TEXT,a,l);return r&&Og(s,a,ae.TEXT),s},uu=function(t,n,r){var a;n==="Size1-Regular"?a="delim-size1":a="delim-size4";var i=T.makeSpan(["delimsizinginner",a],[T.makeSpan([],[T.makeSymbol(t,n,r)])]);return{type:"elem",elem:i}},hu=function(t,n,r){var a=bn["Size4-Regular"][t.charCodeAt(0)]?bn["Size4-Regular"][t.charCodeAt(0)][4]:bn["Size1-Regular"][t.charCodeAt(0)][4],i=new vr("inner",bw(t,Math.round(1e3*n))),l=new jn([i],{width:K(a),height:K(n),style:"width:"+K(a),viewBox:"0 0 "+1e3*a+" "+Math.round(1e3*n),preserveAspectRatio:"xMinYMin"}),o=T.makeSvgSpan([],[l],r);return o.height=n,o.style.height=K(n),o.style.width=K(a),{type:"elem",elem:o}},T0=.008,Ml={type:"kern",size:-1*T0},c$=["|","\\lvert","\\rvert","\\vert"],m$=["\\|","\\lVert","\\rVert","\\Vert"],Lg=function(t,n,r,a,i,l){var o,s,u,h,m="",f=0;o=u=h=t,s=null;var p="Size1-Regular";t==="\\uparrow"?u=h="⏐":t==="\\Uparrow"?u=h="‖":t==="\\downarrow"?o=u="⏐":t==="\\Downarrow"?o=u="‖":t==="\\updownarrow"?(o="\\uparrow",u="⏐",h="\\downarrow"):t==="\\Updownarrow"?(o="\\Uparrow",u="‖",h="\\Downarrow"):te.contains(c$,t)?(u="∣",m="vert",f=333):te.contains(m$,t)?(u="∥",m="doublevert",f=556):t==="["||t==="\\lbrack"?(o="⎡",u="⎢",h="⎣",p="Size4-Regular",m="lbrack",f=667):t==="]"||t==="\\rbrack"?(o="⎤",u="⎥",h="⎦",p="Size4-Regular",m="rbrack",f=667):t==="\\lfloor"||t==="⌊"?(u=o="⎢",h="⎣",p="Size4-Regular",m="lfloor",f=667):t==="\\lceil"||t==="⌈"?(o="⎡",u=h="⎢",p="Size4-Regular",m="lceil",f=667):t==="\\rfloor"||t==="⌋"?(u=o="⎥",h="⎦",p="Size4-Regular",m="rfloor",f=667):t==="\\rceil"||t==="⌉"?(o="⎤",u=h="⎥",p="Size4-Regular",m="rceil",f=667):t==="("||t==="\\lparen"?(o="⎛",u="⎜",h="⎝",p="Size4-Regular",m="lparen",f=875):t===")"||t==="\\rparen"?(o="⎞",u="⎟",h="⎠",p="Size4-Regular",m="rparen",f=875):t==="\\{"||t==="\\lbrace"?(o="⎧",s="⎨",h="⎩",u="⎪",p="Size4-Regular"):t==="\\}"||t==="\\rbrace"?(o="⎫",s="⎬",h="⎭",u="⎪",p="Size4-Regular"):t==="\\lgroup"||t==="⟮"?(o="⎧",h="⎩",u="⎪",p="Size4-Regular"):t==="\\rgroup"||t==="⟯"?(o="⎫",h="⎭",u="⎪",p="Size4-Regular"):t==="\\lmoustache"||t==="⎰"?(o="⎧",h="⎭",u="⎪",p="Size4-Regular"):(t==="\\rmoustache"||t==="⎱")&&(o="⎫",h="⎩",u="⎪",p="Size4-Regular");var v=mi(o,p,i),x=v.height+v.depth,S=mi(u,p,i),g=S.height+S.depth,y=mi(h,p,i),$=y.height+y.depth,F=0,P=1;if(s!==null){var E=mi(s,p,i);F=E.height+E.depth,P=2}var M=x+$+F,I=Math.max(0,Math.ceil((n-M)/(P*g))),O=M+I*P*g,Q=a.fontMetrics().axisHeight;r&&(Q*=a.sizeMultiplier);var V=O/2-Q,L=[];if(m.length>0){var he=O-x-$,oe=Math.round(O*1e3),ie=gw(m,Math.round(he*1e3)),be=new vr(m,ie),ve=(f/1e3).toFixed(3)+"em",W=(oe/1e3).toFixed(3)+"em",J=new jn([be],{width:ve,height:W,viewBox:"0 0 "+f+" "+oe}),k=T.makeSvgSpan([],[J],a);k.height=oe/1e3,k.style.width=ve,k.style.height=W,L.push({type:"elem",elem:k})}else{if(L.push(uu(h,p,i)),L.push(Ml),s===null){var ne=O-x-$+2*T0;L.push(hu(u,ne,a))}else{var ce=(O-x-$-F)/2+2*T0;L.push(hu(u,ce,a)),L.push(Ml),L.push(uu(s,p,i)),L.push(Ml),L.push(hu(u,ce,a))}L.push(Ml),L.push(uu(o,p,i))}var C=a.havingBaseStyle(ae.TEXT),Ne=T.makeVList({positionType:"bottom",positionData:V,children:L},C);return uc(T.makeSpan(["delimsizing","mult"],[Ne],C),ae.TEXT,a,l)},cu=80,mu=.08,du=function(t,n,r,a,i){var l=pw(t,a,r),o=new vr(t,l),s=new jn([o],{width:"400em",height:K(n),viewBox:"0 0 400000 "+r,preserveAspectRatio:"xMinYMin slice"});return T.makeSvgSpan(["hide-tail"],[s],i)},d$=function(t,n){var r=n.havingBaseSizing(),a=Ug("\\surd",t*r.sizeMultiplier,Hg,r),i=r.sizeMultiplier,l=Math.max(0,n.minRuleThickness-n.fontMetrics().sqrtRuleThickness),o,s=0,u=0,h=0,m;return a.type==="small"?(h=1e3+1e3*l+cu,t<1?i=1:t<1.4&&(i=.7),s=(1+l+mu)/i,u=(1+l)/i,o=du("sqrtMain",s,h,l,n),o.style.minWidth="0.853em",m=.833/i):a.type==="large"?(h=(1e3+cu)*Si[a.size],u=(Si[a.size]+l)/i,s=(Si[a.size]+l+mu)/i,o=du("sqrtSize"+a.size,s,h,l,n),o.style.minWidth="1.02em",m=1/i):(s=t+l+mu,u=t+l,h=Math.floor(1e3*t+l)+cu,o=du("sqrtTall",s,h,l,n),o.style.minWidth="0.742em",m=1.056),o.height=u,o.style.height=K(s),{span:o,advanceWidth:m,ruleWidth:(n.fontMetrics().sqrtRuleThickness+l)*i}},qg=["(","\\lparen",")","\\rparen","[","\\lbrack","]","\\rbrack","\\{","\\lbrace","\\}","\\rbrace","\\lfloor","\\rfloor","⌊","⌋","\\lceil","\\rceil","⌈","⌉","\\surd"],f$=["\\uparrow","\\downarrow","\\updownarrow","\\Uparrow","\\Downarrow","\\Updownarrow","|","\\|","\\vert","\\Vert","\\lvert","\\rvert","\\lVert","\\rVert","\\lgroup","\\rgroup","⟮","⟯","\\lmoustache","\\rmoustache","⎰","⎱"],jg=["<",">","\\langle","\\rangle","/","\\backslash","\\lt","\\gt"],Si=[0,1.2,1.8,2.4,3],p$=function(t,n,r,a,i){if(t==="<"||t==="\\lt"||t==="⟨"?t="\\langle":(t===">"||t==="\\gt"||t==="⟩")&&(t="\\rangle"),te.contains(qg,t)||te.contains(jg,t))return Bg(t,n,!1,r,a,i);if(te.contains(f$,t))return Lg(t,Si[n],!1,r,a,i);throw new H("Illegal delimiter: '"+t+"'")},b$=[{type:"small",style:ae.SCRIPTSCRIPT},{type:"small",style:ae.SCRIPT},{type:"small",style:ae.TEXT},{type:"large",size:1},{type:"large",size:2},{type:"large",size:3},{type:"large",size:4}],g$=[{type:"small",style:ae.SCRIPTSCRIPT},{type:"small",style:ae.SCRIPT},{type:"small",style:ae.TEXT},{type:"stack"}],Hg=[{type:"small",style:ae.SCRIPTSCRIPT},{type:"small",style:ae.SCRIPT},{type:"small",style:ae.TEXT},{type:"large",size:1},{type:"large",size:2},{type:"large",size:3},{type:"large",size:4},{type:"stack"}],y$=function(t){if(t.type==="small")return"Main-Regular";if(t.type==="large")return"Size"+t.size+"-Regular";if(t.type==="stack")return"Size4-Regular";throw new Error("Add support for delim type '"+t.type+"' here.")},Ug=function(t,n,r,a){for(var i=Math.min(2,3-a.style.size),l=i;l<r.length&&r[l].type!=="stack";l++){var o=mi(t,y$(r[l]),"math"),s=o.height+o.depth;if(r[l].type==="small"){var u=a.havingBaseStyle(r[l].style);s*=u.sizeMultiplier}if(s>n)return r[l]}return r[r.length-1]},Wg=function(t,n,r,a,i,l){t==="<"||t==="\\lt"||t==="⟨"?t="\\langle":(t===">"||t==="\\gt"||t==="⟩")&&(t="\\rangle");var o;te.contains(jg,t)?o=b$:te.contains(qg,t)?o=Hg:o=g$;var s=Ug(t,n,o,a);return s.type==="small"?u$(t,s.style,r,a,i,l):s.type==="large"?Bg(t,s.size,r,a,i,l):Lg(t,n,r,a,i,l)},v$=function(t,n,r,a,i,l){var o=a.fontMetrics().axisHeight*a.sizeMultiplier,s=901,u=5/a.fontMetrics().ptPerEm,h=Math.max(n-o,r+o),m=Math.max(h/500*s,2*h-u);return Wg(t,m,!0,a,i,l)},In={sqrtImage:d$,sizedDelim:p$,sizeToMaxHeight:Si,customSizedDelim:Wg,leftRightDelim:v$},Xd={"\\bigl":{mclass:"mopen",size:1},"\\Bigl":{mclass:"mopen",size:2},"\\biggl":{mclass:"mopen",size:3},"\\Biggl":{mclass:"mopen",size:4},"\\bigr":{mclass:"mclose",size:1},"\\Bigr":{mclass:"mclose",size:2},"\\biggr":{mclass:"mclose",size:3},"\\Biggr":{mclass:"mclose",size:4},"\\bigm":{mclass:"mrel",size:1},"\\Bigm":{mclass:"mrel",size:2},"\\biggm":{mclass:"mrel",size:3},"\\Biggm":{mclass:"mrel",size:4},"\\big":{mclass:"mord",size:1},"\\Big":{mclass:"mord",size:2},"\\bigg":{mclass:"mord",size:3},"\\Bigg":{mclass:"mord",size:4}},x$=["(","\\lparen",")","\\rparen","[","\\lbrack","]","\\rbrack","\\{","\\lbrace","\\}","\\rbrace","\\lfloor","\\rfloor","⌊","⌋","\\lceil","\\rceil","⌈","⌉","<",">","\\langle","⟨","\\rangle","⟩","\\lt","\\gt","\\lvert","\\rvert","\\lVert","\\rVert","\\lgroup","\\rgroup","⟮","⟯","\\lmoustache","\\rmoustache","⎰","⎱","/","\\backslash","|","\\vert","\\|","\\Vert","\\uparrow","\\Uparrow","\\downarrow","\\Downarrow","\\updownarrow","\\Updownarrow","."];function ms(e,t){var n=hs(e);if(n&&te.contains(x$,n.text))return n;throw n?new H("Invalid delimiter '"+n.text+"' after '"+t.funcName+"'",e):new H("Invalid delimiter type '"+e.type+"'",e)}Z({type:"delimsizing",names:["\\bigl","\\Bigl","\\biggl","\\Biggl","\\bigr","\\Bigr","\\biggr","\\Biggr","\\bigm","\\Bigm","\\biggm","\\Biggm","\\big","\\Big","\\bigg","\\Bigg"],props:{numArgs:1,argTypes:["primitive"]},handler:(e,t)=>{var n=ms(t[0],e);return{type:"delimsizing",mode:e.parser.mode,size:Xd[e.funcName].size,mclass:Xd[e.funcName].mclass,delim:n.text}},htmlBuilder:(e,t)=>e.delim==="."?T.makeSpan([e.mclass]):In.sizedDelim(e.delim,e.size,t,e.mode,[e.mclass]),mathmlBuilder:e=>{var t=[];e.delim!=="."&&t.push(Qt(e.delim,e.mode));var n=new q.MathNode("mo",t);e.mclass==="mopen"||e.mclass==="mclose"?n.setAttribute("fence","true"):n.setAttribute("fence","false"),n.setAttribute("stretchy","true");var r=K(In.sizeToMaxHeight[e.size]);return n.setAttribute("minsize",r),n.setAttribute("maxsize",r),n}});function Yd(e){if(!e.body)throw new Error("Bug: The leftright ParseNode wasn't fully parsed.")}Z({type:"leftright-right",names:["\\right"],props:{numArgs:1,primitive:!0},handler:(e,t)=>{var n=e.parser.gullet.macros.get("\\current@color");if(n&&typeof n!="string")throw new H("\\current@color set to non-string in \\right");return{type:"leftright-right",mode:e.parser.mode,delim:ms(t[0],e).text,color:n}}});Z({type:"leftright",names:["\\left"],props:{numArgs:1,primitive:!0},handler:(e,t)=>{var n=ms(t[0],e),r=e.parser;++r.leftrightDepth;var a=r.parseExpression(!1);--r.leftrightDepth,r.expect("\\right",!1);var i=de(r.parseFunction(),"leftright-right");return{type:"leftright",mode:r.mode,body:a,left:n.text,right:i.delim,rightColor:i.color}},htmlBuilder:(e,t)=>{Yd(e);for(var n=Ze(e.body,t,!0,["mopen","mclose"]),r=0,a=0,i=!1,l=0;l<n.length;l++)n[l].isMiddle?i=!0:(r=Math.max(n[l].height,r),a=Math.max(n[l].depth,a));r*=t.sizeMultiplier,a*=t.sizeMultiplier;var o;if(e.left==="."?o=Ki(t,["mopen"]):o=In.leftRightDelim(e.left,r,a,t,e.mode,["mopen"]),n.unshift(o),i)for(var s=1;s<n.length;s++){var u=n[s],h=u.isMiddle;h&&(n[s]=In.leftRightDelim(h.delim,r,a,h.options,e.mode,[]))}var m;if(e.right===".")m=Ki(t,["mclose"]);else{var f=e.rightColor?t.withColor(e.rightColor):t;m=In.leftRightDelim(e.right,r,a,f,e.mode,["mclose"])}return n.push(m),T.makeSpan(["minner"],n,t)},mathmlBuilder:(e,t)=>{Yd(e);var n=St(e.body,t);if(e.left!=="."){var r=new q.MathNode("mo",[Qt(e.left,e.mode)]);r.setAttribute("fence","true"),n.unshift(r)}if(e.right!=="."){var a=new q.MathNode("mo",[Qt(e.right,e.mode)]);a.setAttribute("fence","true"),e.rightColor&&a.setAttribute("mathcolor",e.rightColor),n.push(a)}return ic(n)}});Z({type:"middle",names:["\\middle"],props:{numArgs:1,primitive:!0},handler:(e,t)=>{var n=ms(t[0],e);if(!e.parser.leftrightDepth)throw new H("\\middle without preceding \\left",n);return{type:"middle",mode:e.parser.mode,delim:n.text}},htmlBuilder:(e,t)=>{var n;if(e.delim===".")n=Ki(t,[]);else{n=In.sizedDelim(e.delim,1,t,e.mode,[]);var r={delim:e.delim,options:t};n.isMiddle=r}return n},mathmlBuilder:(e,t)=>{var n=e.delim==="\\vert"||e.delim==="|"?Qt("|","text"):Qt(e.delim,e.mode),r=new q.MathNode("mo",[n]);return r.setAttribute("fence","true"),r.setAttribute("lspace","0.05em"),r.setAttribute("rspace","0.05em"),r}});var hc=(e,t)=>{var n=T.wrapFragment(ye(e.body,t),t),r=e.label.slice(1),a=t.sizeMultiplier,i,l=0,o=te.isCharacterBox(e.body);if(r==="sout")i=T.makeSpan(["stretchy","sout"]),i.height=t.fontMetrics().defaultRuleThickness/a,l=-.5*t.fontMetrics().xHeight;else if(r==="phase"){var s=Ie({number:.6,unit:"pt"},t),u=Ie({number:.35,unit:"ex"},t),h=t.havingBaseSizing();a=a/h.sizeMultiplier;var m=n.height+n.depth+s+u;n.style.paddingLeft=K(m/2+s);var f=Math.floor(1e3*m*a),p=dw(f),v=new jn([new vr("phase",p)],{width:"400em",height:K(f/1e3),viewBox:"0 0 400000 "+f,preserveAspectRatio:"xMinYMin slice"});i=T.makeSvgSpan(["hide-tail"],[v],t),i.style.height=K(m),l=n.depth+s+u}else{/cancel/.test(r)?o||n.classes.push("cancel-pad"):r==="angl"?n.classes.push("anglpad"):n.classes.push("boxpad");var x=0,S=0,g=0;/box/.test(r)?(g=Math.max(t.fontMetrics().fboxrule,t.minRuleThickness),x=t.fontMetrics().fboxsep+(r==="colorbox"?0:g),S=x):r==="angl"?(g=Math.max(t.fontMetrics().defaultRuleThickness,t.minRuleThickness),x=4*g,S=Math.max(0,.25-n.depth)):(x=o?.2:0,S=x),i=Un.encloseSpan(n,r,x,S,t),/fbox|boxed|fcolorbox/.test(r)?(i.style.borderStyle="solid",i.style.borderWidth=K(g)):r==="angl"&&g!==.049&&(i.style.borderTopWidth=K(g),i.style.borderRightWidth=K(g)),l=n.depth+S,e.backgroundColor&&(i.style.backgroundColor=e.backgroundColor,e.borderColor&&(i.style.borderColor=e.borderColor))}var y;if(e.backgroundColor)y=T.makeVList({positionType:"individualShift",children:[{type:"elem",elem:i,shift:l},{type:"elem",elem:n,shift:0}]},t);else{var $=/cancel|phase/.test(r)?["svg-align"]:[];y=T.makeVList({positionType:"individualShift",children:[{type:"elem",elem:n,shift:0},{type:"elem",elem:i,shift:l,wrapperClasses:$}]},t)}return/cancel/.test(r)&&(y.height=n.height,y.depth=n.depth),/cancel/.test(r)&&!o?T.makeSpan(["mord","cancel-lap"],[y],t):T.makeSpan(["mord"],[y],t)},cc=(e,t)=>{var n=0,r=new q.MathNode(e.label.indexOf("colorbox")>-1?"mpadded":"menclose",[Se(e.body,t)]);switch(e.label){case"\\cancel":r.setAttribute("notation","updiagonalstrike");break;case"\\bcancel":r.setAttribute("notation","downdiagonalstrike");break;case"\\phase":r.setAttribute("notation","phasorangle");break;case"\\sout":r.setAttribute("notation","horizontalstrike");break;case"\\fbox":r.setAttribute("notation","box");break;case"\\angl":r.setAttribute("notation","actuarial");break;case"\\fcolorbox":case"\\colorbox":if(n=t.fontMetrics().fboxsep*t.fontMetrics().ptPerEm,r.setAttribute("width","+"+2*n+"pt"),r.setAttribute("height","+"+2*n+"pt"),r.setAttribute("lspace",n+"pt"),r.setAttribute("voffset",n+"pt"),e.label==="\\fcolorbox"){var a=Math.max(t.fontMetrics().fboxrule,t.minRuleThickness);r.setAttribute("style","border: "+a+"em solid "+String(e.borderColor))}break;case"\\xcancel":r.setAttribute("notation","updiagonalstrike downdiagonalstrike");break}return e.backgroundColor&&r.setAttribute("mathbackground",e.backgroundColor),r};Z({type:"enclose",names:["\\colorbox"],props:{numArgs:2,allowedInText:!0,argTypes:["color","text"]},handler(e,t,n){var{parser:r,funcName:a}=e,i=de(t[0],"color-token").color,l=t[1];return{type:"enclose",mode:r.mode,label:a,backgroundColor:i,body:l}},htmlBuilder:hc,mathmlBuilder:cc});Z({type:"enclose",names:["\\fcolorbox"],props:{numArgs:3,allowedInText:!0,argTypes:["color","color","text"]},handler(e,t,n){var{parser:r,funcName:a}=e,i=de(t[0],"color-token").color,l=de(t[1],"color-token").color,o=t[2];return{type:"enclose",mode:r.mode,label:a,backgroundColor:l,borderColor:i,body:o}},htmlBuilder:hc,mathmlBuilder:cc});Z({type:"enclose",names:["\\fbox"],props:{numArgs:1,argTypes:["hbox"],allowedInText:!0},handler(e,t){var{parser:n}=e;return{type:"enclose",mode:n.mode,label:"\\fbox",body:t[0]}}});Z({type:"enclose",names:["\\cancel","\\bcancel","\\xcancel","\\sout","\\phase"],props:{numArgs:1},handler(e,t){var{parser:n,funcName:r}=e,a=t[0];return{type:"enclose",mode:n.mode,label:r,body:a}},htmlBuilder:hc,mathmlBuilder:cc});Z({type:"enclose",names:["\\angl"],props:{numArgs:1,argTypes:["hbox"],allowedInText:!1},handler(e,t){var{parser:n}=e;return{type:"enclose",mode:n.mode,label:"\\angl",body:t[0]}}});var Vg={};function $n(e){for(var{type:t,names:n,props:r,handler:a,htmlBuilder:i,mathmlBuilder:l}=e,o={type:t,numArgs:r.numArgs||0,allowedInText:!1,numOptionalArgs:0,handler:a},s=0;s<n.length;++s)Vg[n[s]]=o;i&&(No[t]=i),l&&(Mo[t]=l)}var Kg={};function w(e,t){Kg[e]=t}function Jd(e){var t=[];e.consumeSpaces();var n=e.fetch().text;for(n==="\\relax"&&(e.consume(),e.consumeSpaces(),n=e.fetch().text);n==="\\hline"||n==="\\hdashline";)e.consume(),t.push(n==="\\hdashline"),e.consumeSpaces(),n=e.fetch().text;return t}var ds=e=>{var t=e.parser.settings;if(!t.displayMode)throw new H("{"+e.envName+"} can be used only in display mode.")};function mc(e){if(e.indexOf("ed")===-1)return e.indexOf("*")===-1}function Sr(e,t,n){var{hskipBeforeAndAfter:r,addJot:a,cols:i,arraystretch:l,colSeparationType:o,autoTag:s,singleRow:u,emptySingleRow:h,maxNumCols:m,leqno:f}=t;if(e.gullet.beginGroup(),u||e.gullet.macros.set("\\cr","\\\\\\relax"),!l){var p=e.gullet.expandMacroAsText("\\arraystretch");if(p==null)l=1;else if(l=parseFloat(p),!l||l<0)throw new H("Invalid \\arraystretch: "+p)}e.gullet.beginGroup();var v=[],x=[v],S=[],g=[],y=s!=null?[]:void 0;function $(){s&&e.gullet.macros.set("\\@eqnsw","1",!0)}function F(){y&&(e.gullet.macros.get("\\df@tag")?(y.push(e.subparse([new Ut("\\df@tag")])),e.gullet.macros.set("\\df@tag",void 0,!0)):y.push(!!s&&e.gullet.macros.get("\\@eqnsw")==="1"))}for($(),g.push(Jd(e));;){var P=e.parseExpression(!1,u?"\\end":"\\\\");e.gullet.endGroup(),e.gullet.beginGroup(),P={type:"ordgroup",mode:e.mode,body:P},n&&(P={type:"styling",mode:e.mode,style:n,body:[P]}),v.push(P);var E=e.fetch().text;if(E==="&"){if(m&&v.length===m){if(u||o)throw new H("Too many tab characters: &",e.nextToken);e.settings.reportNonstrict("textEnv","Too few columns specified in the {array} column argument.")}e.consume()}else if(E==="\\end"){F(),v.length===1&&P.type==="styling"&&P.body[0].body.length===0&&(x.length>1||!h)&&x.pop(),g.length<x.length+1&&g.push([]);break}else if(E==="\\\\"){e.consume();var M=void 0;e.gullet.future().text!==" "&&(M=e.parseSizeGroup(!0)),S.push(M?M.value:null),F(),g.push(Jd(e)),v=[],x.push(v),$()}else throw new H("Expected & or \\\\ or \\cr or \\end",e.nextToken)}return e.gullet.endGroup(),e.gullet.endGroup(),{type:"array",mode:e.mode,addJot:a,arraystretch:l,body:x,cols:i,rowGaps:S,hskipBeforeAndAfter:r,hLinesBeforeRow:g,colSeparationType:o,tags:y,leqno:f}}function dc(e){return e.slice(0,1)==="d"?"display":"text"}var kn=function(t,n){var r,a,i=t.body.length,l=t.hLinesBeforeRow,o=0,s=new Array(i),u=[],h=Math.max(n.fontMetrics().arrayRuleWidth,n.minRuleThickness),m=1/n.fontMetrics().ptPerEm,f=5*m;if(t.colSeparationType&&t.colSeparationType==="small"){var p=n.havingStyle(ae.SCRIPT).sizeMultiplier;f=.2778*(p/n.sizeMultiplier)}var v=t.colSeparationType==="CD"?Ie({number:3,unit:"ex"},n):12*m,x=3*m,S=t.arraystretch*v,g=.7*S,y=.3*S,$=0;function F(Yr){for(var Dr=0;Dr<Yr.length;++Dr)Dr>0&&($+=.25),u.push({pos:$,isDashed:Yr[Dr]})}for(F(l[0]),r=0;r<t.body.length;++r){var P=t.body[r],E=g,M=y;o<P.length&&(o=P.length);var I=new Array(P.length);for(a=0;a<P.length;++a){var O=ye(P[a],n);M<O.depth&&(M=O.depth),E<O.height&&(E=O.height),I[a]=O}var Q=t.rowGaps[r],V=0;Q&&(V=Ie(Q,n),V>0&&(V+=y,M<V&&(M=V),V=0)),t.addJot&&(M+=x),I.height=E,I.depth=M,$+=E,I.pos=$,$+=M+V,s[r]=I,F(l[r+1])}var L=$/2+n.fontMetrics().axisHeight,he=t.cols||[],oe=[],ie,be,ve=[];if(t.tags&&t.tags.some(Yr=>Yr))for(r=0;r<i;++r){var W=s[r],J=W.pos-L,k=t.tags[r],ne=void 0;k===!0?ne=T.makeSpan(["eqn-num"],[],n):k===!1?ne=T.makeSpan([],[],n):ne=T.makeSpan([],Ze(k,n,!0),n),ne.depth=W.depth,ne.height=W.height,ve.push({type:"elem",elem:ne,shift:J})}for(a=0,be=0;a<o||be<he.length;++a,++be){for(var ce=he[be]||{},C=!0;ce.type==="separator";){if(C||(ie=T.makeSpan(["arraycolsep"],[]),ie.style.width=K(n.fontMetrics().doubleRuleSep),oe.push(ie)),ce.separator==="|"||ce.separator===":"){var Ne=ce.separator==="|"?"solid":"dashed",Xe=T.makeSpan(["vertical-separator"],[],n);Xe.style.height=K($),Xe.style.borderRightWidth=K(h),Xe.style.borderRightStyle=Ne,Xe.style.margin="0 "+K(-h/2);var ke=$-L;ke&&(Xe.style.verticalAlign=K(-ke)),oe.push(Xe)}else throw new H("Invalid separator type: "+ce.separator);be++,ce=he[be]||{},C=!1}if(!(a>=o)){var et=void 0;(a>0||t.hskipBeforeAndAfter)&&(et=te.deflt(ce.pregap,f),et!==0&&(ie=T.makeSpan(["arraycolsep"],[]),ie.style.width=K(et),oe.push(ie)));var ut=[];for(r=0;r<i;++r){var Zt=s[r],Xt=Zt[a];if(Xt){var Zr=Zt.pos-L;Xt.depth=Zt.depth,Xt.height=Zt.height,ut.push({type:"elem",elem:Xt,shift:Zr})}}ut=T.makeVList({positionType:"individualShift",children:ut},n),ut=T.makeSpan(["col-align-"+(ce.align||"c")],[ut]),oe.push(ut),(a<o-1||t.hskipBeforeAndAfter)&&(et=te.deflt(ce.postgap,f),et!==0&&(ie=T.makeSpan(["arraycolsep"],[]),ie.style.width=K(et),oe.push(ie)))}}if(s=T.makeSpan(["mtable"],oe),u.length>0){for(var ps=T.makeLineSpan("hline",n,h),bs=T.makeLineSpan("hdashline",n,h),Ua=[{type:"elem",elem:s,shift:0}];u.length>0;){var Wa=u.pop(),Va=Wa.pos-L;Wa.isDashed?Ua.push({type:"elem",elem:bs,shift:Va}):Ua.push({type:"elem",elem:ps,shift:Va})}s=T.makeVList({positionType:"individualShift",children:Ua},n)}if(ve.length===0)return T.makeSpan(["mord"],[s],n);var Xr=T.makeVList({positionType:"individualShift",children:ve},n);return Xr=T.makeSpan(["tag"],[Xr],n),T.makeFragment([s,Xr])},w$={c:"center ",l:"left ",r:"right "},_n=function(t,n){for(var r=[],a=new q.MathNode("mtd",[],["mtr-glue"]),i=new q.MathNode("mtd",[],["mml-eqn-num"]),l=0;l<t.body.length;l++){for(var o=t.body[l],s=[],u=0;u<o.length;u++)s.push(new q.MathNode("mtd",[Se(o[u],n)]));t.tags&&t.tags[l]&&(s.unshift(a),s.push(a),t.leqno?s.unshift(i):s.push(i)),r.push(new q.MathNode("mtr",s))}var h=new q.MathNode("mtable",r),m=t.arraystretch===.5?.1:.16+t.arraystretch-1+(t.addJot?.09:0);h.setAttribute("rowspacing",K(m));var f="",p="";if(t.cols&&t.cols.length>0){var v=t.cols,x="",S=!1,g=0,y=v.length;v[0].type==="separator"&&(f+="top ",g=1),v[v.length-1].type==="separator"&&(f+="bottom ",y-=1);for(var $=g;$<y;$++)v[$].type==="align"?(p+=w$[v[$].align],S&&(x+="none "),S=!0):v[$].type==="separator"&&S&&(x+=v[$].separator==="|"?"solid ":"dashed ",S=!1);h.setAttribute("columnalign",p.trim()),/[sd]/.test(x)&&h.setAttribute("columnlines",x.trim())}if(t.colSeparationType==="align"){for(var F=t.cols||[],P="",E=1;E<F.length;E++)P+=E%2?"0em ":"1em ";h.setAttribute("columnspacing",P.trim())}else t.colSeparationType==="alignat"||t.colSeparationType==="gather"?h.setAttribute("columnspacing","0em"):t.colSeparationType==="small"?h.setAttribute("columnspacing","0.2778em"):t.colSeparationType==="CD"?h.setAttribute("columnspacing","0.5em"):h.setAttribute("columnspacing","1em");var M="",I=t.hLinesBeforeRow;f+=I[0].length>0?"left ":"",f+=I[I.length-1].length>0?"right ":"";for(var O=1;O<I.length-1;O++)M+=I[O].length===0?"none ":I[O][0]?"dashed ":"solid ";return/[sd]/.test(M)&&h.setAttribute("rowlines",M.trim()),f!==""&&(h=new q.MathNode("menclose",[h]),h.setAttribute("notation",f.trim())),t.arraystretch&&t.arraystretch<1&&(h=new q.MathNode("mstyle",[h]),h.setAttribute("scriptlevel","1")),h},Qg=function(t,n){t.envName.indexOf("ed")===-1&&ds(t);var r=[],a=t.envName.indexOf("at")>-1?"alignat":"align",i=t.envName==="split",l=Sr(t.parser,{cols:r,addJot:!0,autoTag:i?void 0:mc(t.envName),emptySingleRow:!0,colSeparationType:a,maxNumCols:i?2:void 0,leqno:t.parser.settings.leqno},"display"),o,s=0,u={type:"ordgroup",mode:t.mode,body:[]};if(n[0]&&n[0].type==="ordgroup"){for(var h="",m=0;m<n[0].body.length;m++){var f=de(n[0].body[m],"textord");h+=f.text}o=Number(h),s=o*2}var p=!s;l.body.forEach(function(g){for(var y=1;y<g.length;y+=2){var $=de(g[y],"styling"),F=de($.body[0],"ordgroup");F.body.unshift(u)}if(p)s<g.length&&(s=g.length);else{var P=g.length/2;if(o<P)throw new H("Too many math in a row: "+("expected "+o+", but got "+P),g[0])}});for(var v=0;v<s;++v){var x="r",S=0;v%2===1?x="l":v>0&&p&&(S=1),r[v]={type:"align",align:x,pregap:S,postgap:0}}return l.colSeparationType=p?"align":"alignat",l};$n({type:"array",names:["array","darray"],props:{numArgs:1},handler(e,t){var n=hs(t[0]),r=n?[t[0]]:de(t[0],"ordgroup").body,a=r.map(function(l){var o=oc(l),s=o.text;if("lcr".indexOf(s)!==-1)return{type:"align",align:s};if(s==="|")return{type:"separator",separator:"|"};if(s===":")return{type:"separator",separator:":"};throw new H("Unknown column alignment: "+s,l)}),i={cols:a,hskipBeforeAndAfter:!0,maxNumCols:a.length};return Sr(e.parser,i,dc(e.envName))},htmlBuilder:kn,mathmlBuilder:_n});$n({type:"array",names:["matrix","pmatrix","bmatrix","Bmatrix","vmatrix","Vmatrix","matrix*","pmatrix*","bmatrix*","Bmatrix*","vmatrix*","Vmatrix*"],props:{numArgs:0},handler(e){var t={matrix:null,pmatrix:["(",")"],bmatrix:["[","]"],Bmatrix:["\\{","\\}"],vmatrix:["|","|"],Vmatrix:["\\Vert","\\Vert"]}[e.envName.replace("*","")],n="c",r={hskipBeforeAndAfter:!1,cols:[{type:"align",align:n}]};if(e.envName.charAt(e.envName.length-1)==="*"){var a=e.parser;if(a.consumeSpaces(),a.fetch().text==="["){if(a.consume(),a.consumeSpaces(),n=a.fetch().text,"lcr".indexOf(n)===-1)throw new H("Expected l or c or r",a.nextToken);a.consume(),a.consumeSpaces(),a.expect("]"),a.consume(),r.cols=[{type:"align",align:n}]}}var i=Sr(e.parser,r,dc(e.envName)),l=Math.max(0,...i.body.map(o=>o.length));return i.cols=new Array(l).fill({type:"align",align:n}),t?{type:"leftright",mode:e.mode,body:[i],left:t[0],right:t[1],rightColor:void 0}:i},htmlBuilder:kn,mathmlBuilder:_n});$n({type:"array",names:["smallmatrix"],props:{numArgs:0},handler(e){var t={arraystretch:.5},n=Sr(e.parser,t,"script");return n.colSeparationType="small",n},htmlBuilder:kn,mathmlBuilder:_n});$n({type:"array",names:["subarray"],props:{numArgs:1},handler(e,t){var n=hs(t[0]),r=n?[t[0]]:de(t[0],"ordgroup").body,a=r.map(function(l){var o=oc(l),s=o.text;if("lc".indexOf(s)!==-1)return{type:"align",align:s};throw new H("Unknown column alignment: "+s,l)});if(a.length>1)throw new H("{subarray} can contain only one column");var i={cols:a,hskipBeforeAndAfter:!1,arraystretch:.5};if(i=Sr(e.parser,i,"script"),i.body.length>0&&i.body[0].length>1)throw new H("{subarray} can contain only one column");return i},htmlBuilder:kn,mathmlBuilder:_n});$n({type:"array",names:["cases","dcases","rcases","drcases"],props:{numArgs:0},handler(e){var t={arraystretch:1.2,cols:[{type:"align",align:"l",pregap:0,postgap:1},{type:"align",align:"l",pregap:0,postgap:0}]},n=Sr(e.parser,t,dc(e.envName));return{type:"leftright",mode:e.mode,body:[n],left:e.envName.indexOf("r")>-1?".":"\\{",right:e.envName.indexOf("r")>-1?"\\}":".",rightColor:void 0}},htmlBuilder:kn,mathmlBuilder:_n});$n({type:"array",names:["align","align*","aligned","split"],props:{numArgs:0},handler:Qg,htmlBuilder:kn,mathmlBuilder:_n});$n({type:"array",names:["gathered","gather","gather*"],props:{numArgs:0},handler(e){te.contains(["gather","gather*"],e.envName)&&ds(e);var t={cols:[{type:"align",align:"c"}],addJot:!0,colSeparationType:"gather",autoTag:mc(e.envName),emptySingleRow:!0,leqno:e.parser.settings.leqno};return Sr(e.parser,t,"display")},htmlBuilder:kn,mathmlBuilder:_n});$n({type:"array",names:["alignat","alignat*","alignedat"],props:{numArgs:1},handler:Qg,htmlBuilder:kn,mathmlBuilder:_n});$n({type:"array",names:["equation","equation*"],props:{numArgs:0},handler(e){ds(e);var t={autoTag:mc(e.envName),emptySingleRow:!0,singleRow:!0,maxNumCols:1,leqno:e.parser.settings.leqno};return Sr(e.parser,t,"display")},htmlBuilder:kn,mathmlBuilder:_n});$n({type:"array",names:["CD"],props:{numArgs:0},handler(e){return ds(e),o$(e.parser)},htmlBuilder:kn,mathmlBuilder:_n});w("\\nonumber","\\gdef\\@eqnsw{0}");w("\\notag","\\nonumber");Z({type:"text",names:["\\hline","\\hdashline"],props:{numArgs:0,allowedInText:!0,allowedInMath:!0},handler(e,t){throw new H(e.funcName+" valid only within array environment")}});var ef=Vg;Z({type:"environment",names:["\\begin","\\end"],props:{numArgs:1,argTypes:["text"]},handler(e,t){var{parser:n,funcName:r}=e,a=t[0];if(a.type!=="ordgroup")throw new H("Invalid environment name",a);for(var i="",l=0;l<a.body.length;++l)i+=de(a.body[l],"textord").text;if(r==="\\begin"){if(!ef.hasOwnProperty(i))throw new H("No such environment: "+i,a);var o=ef[i],{args:s,optArgs:u}=n.parseArguments("\\begin{"+i+"}",o),h={mode:n.mode,envName:i,parser:n},m=o.handler(h,s,u);n.expect("\\end",!1);var f=n.nextToken,p=de(n.parseFunction(),"environment");if(p.name!==i)throw new H("Mismatch: \\begin{"+i+"} matched by \\end{"+p.name+"}",f);return m}return{type:"environment",mode:n.mode,name:i,nameGroup:a}}});var Gg=(e,t)=>{var n=e.font,r=t.withFont(n);return ye(e.body,r)},Zg=(e,t)=>{var n=e.font,r=t.withFont(n);return Se(e.body,r)},tf={"\\Bbb":"\\mathbb","\\bold":"\\mathbf","\\frak":"\\mathfrak","\\bm":"\\boldsymbol"};Z({type:"font",names:["\\mathrm","\\mathit","\\mathbf","\\mathnormal","\\mathsfit","\\mathbb","\\mathcal","\\mathfrak","\\mathscr","\\mathsf","\\mathtt","\\Bbb","\\bold","\\frak"],props:{numArgs:1,allowedInArgument:!0},handler:(e,t)=>{var{parser:n,funcName:r}=e,a=Ro(t[0]),i=r;return i in tf&&(i=tf[i]),{type:"font",mode:n.mode,font:i.slice(1),body:a}},htmlBuilder:Gg,mathmlBuilder:Zg});Z({type:"mclass",names:["\\boldsymbol","\\bm"],props:{numArgs:1},handler:(e,t)=>{var{parser:n}=e,r=t[0],a=te.isCharacterBox(r);return{type:"mclass",mode:n.mode,mclass:cs(r),body:[{type:"font",mode:n.mode,font:"boldsymbol",body:r}],isCharacterBox:a}}});Z({type:"font",names:["\\rm","\\sf","\\tt","\\bf","\\it","\\cal"],props:{numArgs:0,allowedInText:!0},handler:(e,t)=>{var{parser:n,funcName:r,breakOnTokenText:a}=e,{mode:i}=n,l=n.parseExpression(!0,a),o="math"+r.slice(1);return{type:"font",mode:i,font:o,body:{type:"ordgroup",mode:n.mode,body:l}}},htmlBuilder:Gg,mathmlBuilder:Zg});var Xg=(e,t)=>{var n=t;return e==="display"?n=n.id>=ae.SCRIPT.id?n.text():ae.DISPLAY:e==="text"&&n.size===ae.DISPLAY.size?n=ae.TEXT:e==="script"?n=ae.SCRIPT:e==="scriptscript"&&(n=ae.SCRIPTSCRIPT),n},fc=(e,t)=>{var n=Xg(e.size,t.style),r=n.fracNum(),a=n.fracDen(),i;i=t.havingStyle(r);var l=ye(e.numer,i,t);if(e.continued){var o=8.5/t.fontMetrics().ptPerEm,s=3.5/t.fontMetrics().ptPerEm;l.height=l.height<o?o:l.height,l.depth=l.depth<s?s:l.depth}i=t.havingStyle(a);var u=ye(e.denom,i,t),h,m,f;e.hasBarLine?(e.barSize?(m=Ie(e.barSize,t),h=T.makeLineSpan("frac-line",t,m)):h=T.makeLineSpan("frac-line",t),m=h.height,f=h.height):(h=null,m=0,f=t.fontMetrics().defaultRuleThickness);var p,v,x;n.size===ae.DISPLAY.size||e.size==="display"?(p=t.fontMetrics().num1,m>0?v=3*f:v=7*f,x=t.fontMetrics().denom1):(m>0?(p=t.fontMetrics().num2,v=f):(p=t.fontMetrics().num3,v=3*f),x=t.fontMetrics().denom2);var S;if(h){var y=t.fontMetrics().axisHeight;p-l.depth-(y+.5*m)<v&&(p+=v-(p-l.depth-(y+.5*m))),y-.5*m-(u.height-x)<v&&(x+=v-(y-.5*m-(u.height-x)));var $=-(y-.5*m);S=T.makeVList({positionType:"individualShift",children:[{type:"elem",elem:u,shift:x},{type:"elem",elem:h,shift:$},{type:"elem",elem:l,shift:-p}]},t)}else{var g=p-l.depth-(u.height-x);g<v&&(p+=.5*(v-g),x+=.5*(v-g)),S=T.makeVList({positionType:"individualShift",children:[{type:"elem",elem:u,shift:x},{type:"elem",elem:l,shift:-p}]},t)}i=t.havingStyle(n),S.height*=i.sizeMultiplier/t.sizeMultiplier,S.depth*=i.sizeMultiplier/t.sizeMultiplier;var F;n.size===ae.DISPLAY.size?F=t.fontMetrics().delim1:n.size===ae.SCRIPTSCRIPT.size?F=t.havingStyle(ae.SCRIPT).fontMetrics().delim2:F=t.fontMetrics().delim2;var P,E;return e.leftDelim==null?P=Ki(t,["mopen"]):P=In.customSizedDelim(e.leftDelim,F,!0,t.havingStyle(n),e.mode,["mopen"]),e.continued?E=T.makeSpan([]):e.rightDelim==null?E=Ki(t,["mclose"]):E=In.customSizedDelim(e.rightDelim,F,!0,t.havingStyle(n),e.mode,["mclose"]),T.makeSpan(["mord"].concat(i.sizingClasses(t)),[P,T.makeSpan(["mfrac"],[S]),E],t)},pc=(e,t)=>{var n=new q.MathNode("mfrac",[Se(e.numer,t),Se(e.denom,t)]);if(!e.hasBarLine)n.setAttribute("linethickness","0px");else if(e.barSize){var r=Ie(e.barSize,t);n.setAttribute("linethickness",K(r))}var a=Xg(e.size,t.style);if(a.size!==t.style.size){n=new q.MathNode("mstyle",[n]);var i=a.size===ae.DISPLAY.size?"true":"false";n.setAttribute("displaystyle",i),n.setAttribute("scriptlevel","0")}if(e.leftDelim!=null||e.rightDelim!=null){var l=[];if(e.leftDelim!=null){var o=new q.MathNode("mo",[new q.TextNode(e.leftDelim.replace("\\",""))]);o.setAttribute("fence","true"),l.push(o)}if(l.push(n),e.rightDelim!=null){var s=new q.MathNode("mo",[new q.TextNode(e.rightDelim.replace("\\",""))]);s.setAttribute("fence","true"),l.push(s)}return ic(l)}return n};Z({type:"genfrac",names:["\\dfrac","\\frac","\\tfrac","\\dbinom","\\binom","\\tbinom","\\\\atopfrac","\\\\bracefrac","\\\\brackfrac"],props:{numArgs:2,allowedInArgument:!0},handler:(e,t)=>{var{parser:n,funcName:r}=e,a=t[0],i=t[1],l,o=null,s=null,u="auto";switch(r){case"\\dfrac":case"\\frac":case"\\tfrac":l=!0;break;case"\\\\atopfrac":l=!1;break;case"\\dbinom":case"\\binom":case"\\tbinom":l=!1,o="(",s=")";break;case"\\\\bracefrac":l=!1,o="\\{",s="\\}";break;case"\\\\brackfrac":l=!1,o="[",s="]";break;default:throw new Error("Unrecognized genfrac command")}switch(r){case"\\dfrac":case"\\dbinom":u="display";break;case"\\tfrac":case"\\tbinom":u="text";break}return{type:"genfrac",mode:n.mode,continued:!1,numer:a,denom:i,hasBarLine:l,leftDelim:o,rightDelim:s,size:u,barSize:null}},htmlBuilder:fc,mathmlBuilder:pc});Z({type:"genfrac",names:["\\cfrac"],props:{numArgs:2},handler:(e,t)=>{var{parser:n,funcName:r}=e,a=t[0],i=t[1];return{type:"genfrac",mode:n.mode,continued:!0,numer:a,denom:i,hasBarLine:!0,leftDelim:null,rightDelim:null,size:"display",barSize:null}}});Z({type:"infix",names:["\\over","\\choose","\\atop","\\brace","\\brack"],props:{numArgs:0,infix:!0},handler(e){var{parser:t,funcName:n,token:r}=e,a;switch(n){case"\\over":a="\\frac";break;case"\\choose":a="\\binom";break;case"\\atop":a="\\\\atopfrac";break;case"\\brace":a="\\\\bracefrac";break;case"\\brack":a="\\\\brackfrac";break;default:throw new Error("Unrecognized infix genfrac command")}return{type:"infix",mode:t.mode,replaceWith:a,token:r}}});var nf=["display","text","script","scriptscript"],rf=function(t){var n=null;return t.length>0&&(n=t,n=n==="."?null:n),n};Z({type:"genfrac",names:["\\genfrac"],props:{numArgs:6,allowedInArgument:!0,argTypes:["math","math","size","text","math","math"]},handler(e,t){var{parser:n}=e,r=t[4],a=t[5],i=Ro(t[0]),l=i.type==="atom"&&i.family==="open"?rf(i.text):null,o=Ro(t[1]),s=o.type==="atom"&&o.family==="close"?rf(o.text):null,u=de(t[2],"size"),h,m=null;u.isBlank?h=!0:(m=u.value,h=m.number>0);var f="auto",p=t[3];if(p.type==="ordgroup"){if(p.body.length>0){var v=de(p.body[0],"textord");f=nf[Number(v.text)]}}else p=de(p,"textord"),f=nf[Number(p.text)];return{type:"genfrac",mode:n.mode,numer:r,denom:a,continued:!1,hasBarLine:h,barSize:m,leftDelim:l,rightDelim:s,size:f}},htmlBuilder:fc,mathmlBuilder:pc});Z({type:"infix",names:["\\above"],props:{numArgs:1,argTypes:["size"],infix:!0},handler(e,t){var{parser:n,funcName:r,token:a}=e;return{type:"infix",mode:n.mode,replaceWith:"\\\\abovefrac",size:de(t[0],"size").value,token:a}}});Z({type:"genfrac",names:["\\\\abovefrac"],props:{numArgs:3,argTypes:["math","size","math"]},handler:(e,t)=>{var{parser:n,funcName:r}=e,a=t[0],i=Y9(de(t[1],"infix").size),l=t[2],o=i.number>0;return{type:"genfrac",mode:n.mode,numer:a,denom:l,continued:!1,hasBarLine:o,barSize:i,leftDelim:null,rightDelim:null,size:"auto"}},htmlBuilder:fc,mathmlBuilder:pc});var Yg=(e,t)=>{var n=t.style,r,a;e.type==="supsub"?(r=e.sup?ye(e.sup,t.havingStyle(n.sup()),t):ye(e.sub,t.havingStyle(n.sub()),t),a=de(e.base,"horizBrace")):a=de(e,"horizBrace");var i=ye(a.base,t.havingBaseStyle(ae.DISPLAY)),l=Un.svgSpan(a,t),o;if(a.isOver?(o=T.makeVList({positionType:"firstBaseline",children:[{type:"elem",elem:i},{type:"kern",size:.1},{type:"elem",elem:l}]},t),o.children[0].children[0].children[1].classes.push("svg-align")):(o=T.makeVList({positionType:"bottom",positionData:i.depth+.1+l.height,children:[{type:"elem",elem:l},{type:"kern",size:.1},{type:"elem",elem:i}]},t),o.children[0].children[0].children[0].classes.push("svg-align")),r){var s=T.makeSpan(["mord",a.isOver?"mover":"munder"],[o],t);a.isOver?o=T.makeVList({positionType:"firstBaseline",children:[{type:"elem",elem:s},{type:"kern",size:.2},{type:"elem",elem:r}]},t):o=T.makeVList({positionType:"bottom",positionData:s.depth+.2+r.height+r.depth,children:[{type:"elem",elem:r},{type:"kern",size:.2},{type:"elem",elem:s}]},t)}return T.makeSpan(["mord",a.isOver?"mover":"munder"],[o],t)},$$=(e,t)=>{var n=Un.mathMLnode(e.label);return new q.MathNode(e.isOver?"mover":"munder",[Se(e.base,t),n])};Z({type:"horizBrace",names:["\\overbrace","\\underbrace"],props:{numArgs:1},handler(e,t){var{parser:n,funcName:r}=e;return{type:"horizBrace",mode:n.mode,label:r,isOver:/^\\over/.test(r),base:t[0]}},htmlBuilder:Yg,mathmlBuilder:$$});Z({type:"href",names:["\\href"],props:{numArgs:2,argTypes:["url","original"],allowedInText:!0},handler:(e,t)=>{var{parser:n}=e,r=t[1],a=de(t[0],"url").url;return n.settings.isTrusted({command:"\\href",url:a})?{type:"href",mode:n.mode,href:a,body:Ue(r)}:n.formatUnsupportedCmd("\\href")},htmlBuilder:(e,t)=>{var n=Ze(e.body,t,!1);return T.makeAnchor(e.href,[],n,t)},mathmlBuilder:(e,t)=>{var n=xr(e.body,t);return n instanceof Lt||(n=new Lt("mrow",[n])),n.setAttribute("href",e.href),n}});Z({type:"href",names:["\\url"],props:{numArgs:1,argTypes:["url"],allowedInText:!0},handler:(e,t)=>{var{parser:n}=e,r=de(t[0],"url").url;if(!n.settings.isTrusted({command:"\\url",url:r}))return n.formatUnsupportedCmd("\\url");for(var a=[],i=0;i<r.length;i++){var l=r[i];l==="~"&&(l="\\textasciitilde"),a.push({type:"textord",mode:"text",text:l})}var o={type:"text",mode:n.mode,font:"\\texttt",body:a};return{type:"href",mode:n.mode,href:r,body:Ue(o)}}});Z({type:"hbox",names:["\\hbox"],props:{numArgs:1,argTypes:["text"],allowedInText:!0,primitive:!0},handler(e,t){var{parser:n}=e;return{type:"hbox",mode:n.mode,body:Ue(t[0])}},htmlBuilder(e,t){var n=Ze(e.body,t,!1);return T.makeFragment(n)},mathmlBuilder(e,t){return new q.MathNode("mrow",St(e.body,t))}});Z({type:"html",names:["\\htmlClass","\\htmlId","\\htmlStyle","\\htmlData"],props:{numArgs:2,argTypes:["raw","original"],allowedInText:!0},handler:(e,t)=>{var{parser:n,funcName:r,token:a}=e,i=de(t[0],"raw").string,l=t[1];n.settings.strict&&n.settings.reportNonstrict("htmlExtension","HTML extension is disabled on strict mode");var o,s={};switch(r){case"\\htmlClass":s.class=i,o={command:"\\htmlClass",class:i};break;case"\\htmlId":s.id=i,o={command:"\\htmlId",id:i};break;case"\\htmlStyle":s.style=i,o={command:"\\htmlStyle",style:i};break;case"\\htmlData":{for(var u=i.split(","),h=0;h<u.length;h++){var m=u[h].split("=");if(m.length!==2)throw new H("Error parsing key-value for \\htmlData");s["data-"+m[0].trim()]=m[1].trim()}o={command:"\\htmlData",attributes:s};break}default:throw new Error("Unrecognized html command")}return n.settings.isTrusted(o)?{type:"html",mode:n.mode,attributes:s,body:Ue(l)}:n.formatUnsupportedCmd(r)},htmlBuilder:(e,t)=>{var n=Ze(e.body,t,!1),r=["enclosing"];e.attributes.class&&r.push(...e.attributes.class.trim().split(/\s+/));var a=T.makeSpan(r,n,t);for(var i in e.attributes)i!=="class"&&e.attributes.hasOwnProperty(i)&&a.setAttribute(i,e.attributes[i]);return a},mathmlBuilder:(e,t)=>xr(e.body,t)});Z({type:"htmlmathml",names:["\\html@mathml"],props:{numArgs:2,allowedInText:!0},handler:(e,t)=>{var{parser:n}=e;return{type:"htmlmathml",mode:n.mode,html:Ue(t[0]),mathml:Ue(t[1])}},htmlBuilder:(e,t)=>{var n=Ze(e.html,t,!1);return T.makeFragment(n)},mathmlBuilder:(e,t)=>xr(e.mathml,t)});var fu=function(t){if(/^[-+]? *(\d+(\.\d*)?|\.\d+)$/.test(t))return{number:+t,unit:"bp"};var n=/([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(t);if(!n)throw new H("Invalid size: '"+t+"' in \\includegraphics");var r={number:+(n[1]+n[2]),unit:n[3]};if(!gg(r))throw new H("Invalid unit: '"+r.unit+"' in \\includegraphics.");return r};Z({type:"includegraphics",names:["\\includegraphics"],props:{numArgs:1,numOptionalArgs:1,argTypes:["raw","url"],allowedInText:!1},handler:(e,t,n)=>{var{parser:r}=e,a={number:0,unit:"em"},i={number:.9,unit:"em"},l={number:0,unit:"em"},o="";if(n[0])for(var s=de(n[0],"raw").string,u=s.split(","),h=0;h<u.length;h++){var m=u[h].split("=");if(m.length===2){var f=m[1].trim();switch(m[0].trim()){case"alt":o=f;break;case"width":a=fu(f);break;case"height":i=fu(f);break;case"totalheight":l=fu(f);break;default:throw new H("Invalid key: '"+m[0]+"' in \\includegraphics.")}}}var p=de(t[0],"url").url;return o===""&&(o=p,o=o.replace(/^.*[\\/]/,""),o=o.substring(0,o.lastIndexOf("."))),r.settings.isTrusted({command:"\\includegraphics",url:p})?{type:"includegraphics",mode:r.mode,alt:o,width:a,height:i,totalheight:l,src:p}:r.formatUnsupportedCmd("\\includegraphics")},htmlBuilder:(e,t)=>{var n=Ie(e.height,t),r=0;e.totalheight.number>0&&(r=Ie(e.totalheight,t)-n);var a=0;e.width.number>0&&(a=Ie(e.width,t));var i={height:K(n+r)};a>0&&(i.width=K(a)),r>0&&(i.verticalAlign=K(-r));var l=new $w(e.src,e.alt,i);return l.height=n,l.depth=r,l},mathmlBuilder:(e,t)=>{var n=new q.MathNode("mglyph",[]);n.setAttribute("alt",e.alt);var r=Ie(e.height,t),a=0;if(e.totalheight.number>0&&(a=Ie(e.totalheight,t)-r,n.setAttribute("valign",K(-a))),n.setAttribute("height",K(r+a)),e.width.number>0){var i=Ie(e.width,t);n.setAttribute("width",K(i))}return n.setAttribute("src",e.src),n}});Z({type:"kern",names:["\\kern","\\mkern","\\hskip","\\mskip"],props:{numArgs:1,argTypes:["size"],primitive:!0,allowedInText:!0},handler(e,t){var{parser:n,funcName:r}=e,a=de(t[0],"size");if(n.settings.strict){var i=r[1]==="m",l=a.value.unit==="mu";i?(l||n.settings.reportNonstrict("mathVsTextUnits","LaTeX's "+r+" supports only mu units, "+("not "+a.value.unit+" units")),n.mode!=="math"&&n.settings.reportNonstrict("mathVsTextUnits","LaTeX's "+r+" works only in math mode")):l&&n.settings.reportNonstrict("mathVsTextUnits","LaTeX's "+r+" doesn't support mu units")}return{type:"kern",mode:n.mode,dimension:a.value}},htmlBuilder(e,t){return T.makeGlue(e.dimension,t)},mathmlBuilder(e,t){var n=Ie(e.dimension,t);return new q.SpaceNode(n)}});Z({type:"lap",names:["\\mathllap","\\mathrlap","\\mathclap"],props:{numArgs:1,allowedInText:!0},handler:(e,t)=>{var{parser:n,funcName:r}=e,a=t[0];return{type:"lap",mode:n.mode,alignment:r.slice(5),body:a}},htmlBuilder:(e,t)=>{var n;e.alignment==="clap"?(n=T.makeSpan([],[ye(e.body,t)]),n=T.makeSpan(["inner"],[n],t)):n=T.makeSpan(["inner"],[ye(e.body,t)]);var r=T.makeSpan(["fix"],[]),a=T.makeSpan([e.alignment],[n,r],t),i=T.makeSpan(["strut"]);return i.style.height=K(a.height+a.depth),a.depth&&(i.style.verticalAlign=K(-a.depth)),a.children.unshift(i),a=T.makeSpan(["thinbox"],[a],t),T.makeSpan(["mord","vbox"],[a],t)},mathmlBuilder:(e,t)=>{var n=new q.MathNode("mpadded",[Se(e.body,t)]);if(e.alignment!=="rlap"){var r=e.alignment==="llap"?"-1":"-0.5";n.setAttribute("lspace",r+"width")}return n.setAttribute("width","0px"),n}});Z({type:"styling",names:["\\(","$"],props:{numArgs:0,allowedInText:!0,allowedInMath:!1},handler(e,t){var{funcName:n,parser:r}=e,a=r.mode;r.switchMode("math");var i=n==="\\("?"\\)":"$",l=r.parseExpression(!1,i);return r.expect(i),r.switchMode(a),{type:"styling",mode:r.mode,style:"text",body:l}}});Z({type:"text",names:["\\)","\\]"],props:{numArgs:0,allowedInText:!0,allowedInMath:!1},handler(e,t){throw new H("Mismatched "+e.funcName)}});var af=(e,t)=>{switch(t.style.size){case ae.DISPLAY.size:return e.display;case ae.TEXT.size:return e.text;case ae.SCRIPT.size:return e.script;case ae.SCRIPTSCRIPT.size:return e.scriptscript;default:return e.text}};Z({type:"mathchoice",names:["\\mathchoice"],props:{numArgs:4,primitive:!0},handler:(e,t)=>{var{parser:n}=e;return{type:"mathchoice",mode:n.mode,display:Ue(t[0]),text:Ue(t[1]),script:Ue(t[2]),scriptscript:Ue(t[3])}},htmlBuilder:(e,t)=>{var n=af(e,t),r=Ze(n,t,!1);return T.makeFragment(r)},mathmlBuilder:(e,t)=>{var n=af(e,t);return xr(n,t)}});var Jg=(e,t,n,r,a,i,l)=>{e=T.makeSpan([],[e]);var o=n&&te.isCharacterBox(n),s,u;if(t){var h=ye(t,r.havingStyle(a.sup()),r);u={elem:h,kern:Math.max(r.fontMetrics().bigOpSpacing1,r.fontMetrics().bigOpSpacing3-h.depth)}}if(n){var m=ye(n,r.havingStyle(a.sub()),r);s={elem:m,kern:Math.max(r.fontMetrics().bigOpSpacing2,r.fontMetrics().bigOpSpacing4-m.height)}}var f;if(u&&s){var p=r.fontMetrics().bigOpSpacing5+s.elem.height+s.elem.depth+s.kern+e.depth+l;f=T.makeVList({positionType:"bottom",positionData:p,children:[{type:"kern",size:r.fontMetrics().bigOpSpacing5},{type:"elem",elem:s.elem,marginLeft:K(-i)},{type:"kern",size:s.kern},{type:"elem",elem:e},{type:"kern",size:u.kern},{type:"elem",elem:u.elem,marginLeft:K(i)},{type:"kern",size:r.fontMetrics().bigOpSpacing5}]},r)}else if(s){var v=e.height-l;f=T.makeVList({positionType:"top",positionData:v,children:[{type:"kern",size:r.fontMetrics().bigOpSpacing5},{type:"elem",elem:s.elem,marginLeft:K(-i)},{type:"kern",size:s.kern},{type:"elem",elem:e}]},r)}else if(u){var x=e.depth+l;f=T.makeVList({positionType:"bottom",positionData:x,children:[{type:"elem",elem:e},{type:"kern",size:u.kern},{type:"elem",elem:u.elem,marginLeft:K(i)},{type:"kern",size:r.fontMetrics().bigOpSpacing5}]},r)}else return e;var S=[f];if(s&&i!==0&&!o){var g=T.makeSpan(["mspace"],[],r);g.style.marginRight=K(i),S.unshift(g)}return T.makeSpan(["mop","op-limits"],S,r)},e4=["\\smallint"],Ha=(e,t)=>{var n,r,a=!1,i;e.type==="supsub"?(n=e.sup,r=e.sub,i=de(e.base,"op"),a=!0):i=de(e,"op");var l=t.style,o=!1;l.size===ae.DISPLAY.size&&i.symbol&&!te.contains(e4,i.name)&&(o=!0);var s;if(i.symbol){var u=o?"Size2-Regular":"Size1-Regular",h="";if((i.name==="\\oiint"||i.name==="\\oiiint")&&(h=i.name.slice(1),i.name=h==="oiint"?"\\iint":"\\iiint"),s=T.makeSymbol(i.name,u,"math",t,["mop","op-symbol",o?"large-op":"small-op"]),h.length>0){var m=s.italic,f=T.staticSvg(h+"Size"+(o?"2":"1"),t);s=T.makeVList({positionType:"individualShift",children:[{type:"elem",elem:s,shift:0},{type:"elem",elem:f,shift:o?.08:0}]},t),i.name="\\"+h,s.classes.unshift("mop"),s.italic=m}}else if(i.body){var p=Ze(i.body,t,!0);p.length===1&&p[0]instanceof Kt?(s=p[0],s.classes[0]="mop"):s=T.makeSpan(["mop"],p,t)}else{for(var v=[],x=1;x<i.name.length;x++)v.push(T.mathsym(i.name[x],i.mode,t));s=T.makeSpan(["mop"],v,t)}var S=0,g=0;return(s instanceof Kt||i.name==="\\oiint"||i.name==="\\oiiint")&&!i.suppressBaseShift&&(S=(s.height-s.depth)/2-t.fontMetrics().axisHeight,g=s.italic),a?Jg(s,n,r,t,l,g,S):(S&&(s.style.position="relative",s.style.top=K(S)),s)},ll=(e,t)=>{var n;if(e.symbol)n=new Lt("mo",[Qt(e.name,e.mode)]),te.contains(e4,e.name)&&n.setAttribute("largeop","false");else if(e.body)n=new Lt("mo",St(e.body,t));else{n=new Lt("mi",[new _i(e.name.slice(1))]);var r=new Lt("mo",[Qt("⁡","text")]);e.parentIsSupSub?n=new Lt("mrow",[n,r]):n=Eg([n,r])}return n},k$={"∏":"\\prod","∐":"\\coprod","∑":"\\sum","⋀":"\\bigwedge","⋁":"\\bigvee","⋂":"\\bigcap","⋃":"\\bigcup","⨀":"\\bigodot","⨁":"\\bigoplus","⨂":"\\bigotimes","⨄":"\\biguplus","⨆":"\\bigsqcup"};Z({type:"op",names:["\\coprod","\\bigvee","\\bigwedge","\\biguplus","\\bigcap","\\bigcup","\\intop","\\prod","\\sum","\\bigotimes","\\bigoplus","\\bigodot","\\bigsqcup","\\smallint","∏","∐","∑","⋀","⋁","⋂","⋃","⨀","⨁","⨂","⨄","⨆"],props:{numArgs:0},handler:(e,t)=>{var{parser:n,funcName:r}=e,a=r;return a.length===1&&(a=k$[a]),{type:"op",mode:n.mode,limits:!0,parentIsSupSub:!1,symbol:!0,name:a}},htmlBuilder:Ha,mathmlBuilder:ll});Z({type:"op",names:["\\mathop"],props:{numArgs:1,primitive:!0},handler:(e,t)=>{var{parser:n}=e,r=t[0];return{type:"op",mode:n.mode,limits:!1,parentIsSupSub:!1,symbol:!1,body:Ue(r)}},htmlBuilder:Ha,mathmlBuilder:ll});var _$={"∫":"\\int","∬":"\\iint","∭":"\\iiint","∮":"\\oint","∯":"\\oiint","∰":"\\oiiint"};Z({type:"op",names:["\\arcsin","\\arccos","\\arctan","\\arctg","\\arcctg","\\arg","\\ch","\\cos","\\cosec","\\cosh","\\cot","\\cotg","\\coth","\\csc","\\ctg","\\cth","\\deg","\\dim","\\exp","\\hom","\\ker","\\lg","\\ln","\\log","\\sec","\\sin","\\sinh","\\sh","\\tan","\\tanh","\\tg","\\th"],props:{numArgs:0},handler(e){var{parser:t,funcName:n}=e;return{type:"op",mode:t.mode,limits:!1,parentIsSupSub:!1,symbol:!1,name:n}},htmlBuilder:Ha,mathmlBuilder:ll});Z({type:"op",names:["\\det","\\gcd","\\inf","\\lim","\\max","\\min","\\Pr","\\sup"],props:{numArgs:0},handler(e){var{parser:t,funcName:n}=e;return{type:"op",mode:t.mode,limits:!0,parentIsSupSub:!1,symbol:!1,name:n}},htmlBuilder:Ha,mathmlBuilder:ll});Z({type:"op",names:["\\int","\\iint","\\iiint","\\oint","\\oiint","\\oiiint","∫","∬","∭","∮","∯","∰"],props:{numArgs:0},handler(e){var{parser:t,funcName:n}=e,r=n;return r.length===1&&(r=_$[r]),{type:"op",mode:t.mode,limits:!1,parentIsSupSub:!1,symbol:!0,name:r}},htmlBuilder:Ha,mathmlBuilder:ll});var t4=(e,t)=>{var n,r,a=!1,i;e.type==="supsub"?(n=e.sup,r=e.sub,i=de(e.base,"operatorname"),a=!0):i=de(e,"operatorname");var l;if(i.body.length>0){for(var o=i.body.map(m=>{var f=m.text;return typeof f=="string"?{type:"textord",mode:m.mode,text:f}:m}),s=Ze(o,t.withFont("mathrm"),!0),u=0;u<s.length;u++){var h=s[u];h instanceof Kt&&(h.text=h.text.replace(/\u2212/,"-").replace(/\u2217/,"*"))}l=T.makeSpan(["mop"],s,t)}else l=T.makeSpan(["mop"],[],t);return a?Jg(l,n,r,t,t.style,0,0):l},S$=(e,t)=>{for(var n=St(e.body,t.withFont("mathrm")),r=!0,a=0;a<n.length;a++){var i=n[a];if(!(i instanceof q.SpaceNode))if(i instanceof q.MathNode)switch(i.type){case"mi":case"mn":case"ms":case"mspace":case"mtext":break;case"mo":{var l=i.children[0];i.children.length===1&&l instanceof q.TextNode?l.text=l.text.replace(/\u2212/,"-").replace(/\u2217/,"*"):r=!1;break}default:r=!1}else r=!1}if(r){var o=n.map(h=>h.toText()).join("");n=[new q.TextNode(o)]}var s=new q.MathNode("mi",n);s.setAttribute("mathvariant","normal");var u=new q.MathNode("mo",[Qt("⁡","text")]);return e.parentIsSupSub?new q.MathNode("mrow",[s,u]):q.newDocumentFragment([s,u])};Z({type:"operatorname",names:["\\operatorname@","\\operatornamewithlimits"],props:{numArgs:1},handler:(e,t)=>{var{parser:n,funcName:r}=e,a=t[0];return{type:"operatorname",mode:n.mode,body:Ue(a),alwaysHandleSupSub:r==="\\operatornamewithlimits",limits:!1,parentIsSupSub:!1}},htmlBuilder:t4,mathmlBuilder:S$});w("\\operatorname","\\@ifstar\\operatornamewithlimits\\operatorname@");Qr({type:"ordgroup",htmlBuilder(e,t){return e.semisimple?T.makeFragment(Ze(e.body,t,!1)):T.makeSpan(["mord"],Ze(e.body,t,!0),t)},mathmlBuilder(e,t){return xr(e.body,t,!0)}});Z({type:"overline",names:["\\overline"],props:{numArgs:1},handler(e,t){var{parser:n}=e,r=t[0];return{type:"overline",mode:n.mode,body:r}},htmlBuilder(e,t){var n=ye(e.body,t.havingCrampedStyle()),r=T.makeLineSpan("overline-line",t),a=t.fontMetrics().defaultRuleThickness,i=T.makeVList({positionType:"firstBaseline",children:[{type:"elem",elem:n},{type:"kern",size:3*a},{type:"elem",elem:r},{type:"kern",size:a}]},t);return T.makeSpan(["mord","overline"],[i],t)},mathmlBuilder(e,t){var n=new q.MathNode("mo",[new q.TextNode("‾")]);n.setAttribute("stretchy","true");var r=new q.MathNode("mover",[Se(e.body,t),n]);return r.setAttribute("accent","true"),r}});Z({type:"phantom",names:["\\phantom"],props:{numArgs:1,allowedInText:!0},handler:(e,t)=>{var{parser:n}=e,r=t[0];return{type:"phantom",mode:n.mode,body:Ue(r)}},htmlBuilder:(e,t)=>{var n=Ze(e.body,t.withPhantom(),!1);return T.makeFragment(n)},mathmlBuilder:(e,t)=>{var n=St(e.body,t);return new q.MathNode("mphantom",n)}});Z({type:"hphantom",names:["\\hphantom"],props:{numArgs:1,allowedInText:!0},handler:(e,t)=>{var{parser:n}=e,r=t[0];return{type:"hphantom",mode:n.mode,body:r}},htmlBuilder:(e,t)=>{var n=T.makeSpan([],[ye(e.body,t.withPhantom())]);if(n.height=0,n.depth=0,n.children)for(var r=0;r<n.children.length;r++)n.children[r].height=0,n.children[r].depth=0;return n=T.makeVList({positionType:"firstBaseline",children:[{type:"elem",elem:n}]},t),T.makeSpan(["mord"],[n],t)},mathmlBuilder:(e,t)=>{var n=St(Ue(e.body),t),r=new q.MathNode("mphantom",n),a=new q.MathNode("mpadded",[r]);return a.setAttribute("height","0px"),a.setAttribute("depth","0px"),a}});Z({type:"vphantom",names:["\\vphantom"],props:{numArgs:1,allowedInText:!0},handler:(e,t)=>{var{parser:n}=e,r=t[0];return{type:"vphantom",mode:n.mode,body:r}},htmlBuilder:(e,t)=>{var n=T.makeSpan(["inner"],[ye(e.body,t.withPhantom())]),r=T.makeSpan(["fix"],[]);return T.makeSpan(["mord","rlap"],[n,r],t)},mathmlBuilder:(e,t)=>{var n=St(Ue(e.body),t),r=new q.MathNode("mphantom",n),a=new q.MathNode("mpadded",[r]);return a.setAttribute("width","0px"),a}});Z({type:"raisebox",names:["\\raisebox"],props:{numArgs:2,argTypes:["size","hbox"],allowedInText:!0},handler(e,t){var{parser:n}=e,r=de(t[0],"size").value,a=t[1];return{type:"raisebox",mode:n.mode,dy:r,body:a}},htmlBuilder(e,t){var n=ye(e.body,t),r=Ie(e.dy,t);return T.makeVList({positionType:"shift",positionData:-r,children:[{type:"elem",elem:n}]},t)},mathmlBuilder(e,t){var n=new q.MathNode("mpadded",[Se(e.body,t)]),r=e.dy.number+e.dy.unit;return n.setAttribute("voffset",r),n}});Z({type:"internal",names:["\\relax"],props:{numArgs:0,allowedInText:!0},handler(e){var{parser:t}=e;return{type:"internal",mode:t.mode}}});Z({type:"rule",names:["\\rule"],props:{numArgs:2,numOptionalArgs:1,allowedInText:!0,allowedInMath:!0,argTypes:["size","size","size"]},handler(e,t,n){var{parser:r}=e,a=n[0],i=de(t[0],"size"),l=de(t[1],"size");return{type:"rule",mode:r.mode,shift:a&&de(a,"size").value,width:i.value,height:l.value}},htmlBuilder(e,t){var n=T.makeSpan(["mord","rule"],[],t),r=Ie(e.width,t),a=Ie(e.height,t),i=e.shift?Ie(e.shift,t):0;return n.style.borderRightWidth=K(r),n.style.borderTopWidth=K(a),n.style.bottom=K(i),n.width=r,n.height=a+i,n.depth=-i,n.maxFontSize=a*1.125*t.sizeMultiplier,n},mathmlBuilder(e,t){var n=Ie(e.width,t),r=Ie(e.height,t),a=e.shift?Ie(e.shift,t):0,i=t.color&&t.getColor()||"black",l=new q.MathNode("mspace");l.setAttribute("mathbackground",i),l.setAttribute("width",K(n)),l.setAttribute("height",K(r));var o=new q.MathNode("mpadded",[l]);return a>=0?o.setAttribute("height",K(a)):(o.setAttribute("height",K(a)),o.setAttribute("depth",K(-a))),o.setAttribute("voffset",K(a)),o}});function n4(e,t,n){for(var r=Ze(e,t,!1),a=t.sizeMultiplier/n.sizeMultiplier,i=0;i<r.length;i++){var l=r[i].classes.indexOf("sizing");l<0?Array.prototype.push.apply(r[i].classes,t.sizingClasses(n)):r[i].classes[l+1]==="reset-size"+t.size&&(r[i].classes[l+1]="reset-size"+n.size),r[i].height*=a,r[i].depth*=a}return T.makeFragment(r)}var lf=["\\tiny","\\sixptsize","\\scriptsize","\\footnotesize","\\small","\\normalsize","\\large","\\Large","\\LARGE","\\huge","\\Huge"],D$=(e,t)=>{var n=t.havingSize(e.size);return n4(e.body,n,t)};Z({type:"sizing",names:lf,props:{numArgs:0,allowedInText:!0},handler:(e,t)=>{var{breakOnTokenText:n,funcName:r,parser:a}=e,i=a.parseExpression(!1,n);return{type:"sizing",mode:a.mode,size:lf.indexOf(r)+1,body:i}},htmlBuilder:D$,mathmlBuilder:(e,t)=>{var n=t.havingSize(e.size),r=St(e.body,n),a=new q.MathNode("mstyle",r);return a.setAttribute("mathsize",K(n.sizeMultiplier)),a}});Z({type:"smash",names:["\\smash"],props:{numArgs:1,numOptionalArgs:1,allowedInText:!0},handler:(e,t,n)=>{var{parser:r}=e,a=!1,i=!1,l=n[0]&&de(n[0],"ordgroup");if(l)for(var o="",s=0;s<l.body.length;++s){var u=l.body[s];if(o=u.text,o==="t")a=!0;else if(o==="b")i=!0;else{a=!1,i=!1;break}}else a=!0,i=!0;var h=t[0];return{type:"smash",mode:r.mode,body:h,smashHeight:a,smashDepth:i}},htmlBuilder:(e,t)=>{var n=T.makeSpan([],[ye(e.body,t)]);if(!e.smashHeight&&!e.smashDepth)return n;if(e.smashHeight&&(n.height=0,n.children))for(var r=0;r<n.children.length;r++)n.children[r].height=0;if(e.smashDepth&&(n.depth=0,n.children))for(var a=0;a<n.children.length;a++)n.children[a].depth=0;var i=T.makeVList({positionType:"firstBaseline",children:[{type:"elem",elem:n}]},t);return T.makeSpan(["mord"],[i],t)},mathmlBuilder:(e,t)=>{var n=new q.MathNode("mpadded",[Se(e.body,t)]);return e.smashHeight&&n.setAttribute("height","0px"),e.smashDepth&&n.setAttribute("depth","0px"),n}});Z({type:"sqrt",names:["\\sqrt"],props:{numArgs:1,numOptionalArgs:1},handler(e,t,n){var{parser:r}=e,a=n[0],i=t[0];return{type:"sqrt",mode:r.mode,body:i,index:a}},htmlBuilder(e,t){var n=ye(e.body,t.havingCrampedStyle());n.height===0&&(n.height=t.fontMetrics().xHeight),n=T.wrapFragment(n,t);var r=t.fontMetrics(),a=r.defaultRuleThickness,i=a;t.style.id<ae.TEXT.id&&(i=t.fontMetrics().xHeight);var l=a+i/4,o=n.height+n.depth+l+a,{span:s,ruleWidth:u,advanceWidth:h}=In.sqrtImage(o,t),m=s.height-u;m>n.height+n.depth+l&&(l=(l+m-n.height-n.depth)/2);var f=s.height-n.height-l-u;n.style.paddingLeft=K(h);var p=T.makeVList({positionType:"firstBaseline",children:[{type:"elem",elem:n,wrapperClasses:["svg-align"]},{type:"kern",size:-(n.height+f)},{type:"elem",elem:s},{type:"kern",size:u}]},t);if(e.index){var v=t.havingStyle(ae.SCRIPTSCRIPT),x=ye(e.index,v,t),S=.6*(p.height-p.depth),g=T.makeVList({positionType:"shift",positionData:-S,children:[{type:"elem",elem:x}]},t),y=T.makeSpan(["root"],[g]);return T.makeSpan(["mord","sqrt"],[y,p],t)}else return T.makeSpan(["mord","sqrt"],[p],t)},mathmlBuilder(e,t){var{body:n,index:r}=e;return r?new q.MathNode("mroot",[Se(n,t),Se(r,t)]):new q.MathNode("msqrt",[Se(n,t)])}});var of={display:ae.DISPLAY,text:ae.TEXT,script:ae.SCRIPT,scriptscript:ae.SCRIPTSCRIPT};Z({type:"styling",names:["\\displaystyle","\\textstyle","\\scriptstyle","\\scriptscriptstyle"],props:{numArgs:0,allowedInText:!0,primitive:!0},handler(e,t){var{breakOnTokenText:n,funcName:r,parser:a}=e,i=a.parseExpression(!0,n),l=r.slice(1,r.length-5);return{type:"styling",mode:a.mode,style:l,body:i}},htmlBuilder(e,t){var n=of[e.style],r=t.havingStyle(n).withFont("");return n4(e.body,r,t)},mathmlBuilder(e,t){var n=of[e.style],r=t.havingStyle(n),a=St(e.body,r),i=new q.MathNode("mstyle",a),l={display:["0","true"],text:["0","false"],script:["1","false"],scriptscript:["2","false"]},o=l[e.style];return i.setAttribute("scriptlevel",o[0]),i.setAttribute("displaystyle",o[1]),i}});var C$=function(t,n){var r=t.base;if(r)if(r.type==="op"){var a=r.limits&&(n.style.size===ae.DISPLAY.size||r.alwaysHandleSupSub);return a?Ha:null}else if(r.type==="operatorname"){var i=r.alwaysHandleSupSub&&(n.style.size===ae.DISPLAY.size||r.limits);return i?t4:null}else{if(r.type==="accent")return te.isCharacterBox(r.base)?sc:null;if(r.type==="horizBrace"){var l=!t.sub;return l===r.isOver?Yg:null}else return null}else return null};Qr({type:"supsub",htmlBuilder(e,t){var n=C$(e,t);if(n)return n(e,t);var{base:r,sup:a,sub:i}=e,l=ye(r,t),o,s,u=t.fontMetrics(),h=0,m=0,f=r&&te.isCharacterBox(r);if(a){var p=t.havingStyle(t.style.sup());o=ye(a,p,t),f||(h=l.height-p.fontMetrics().supDrop*p.sizeMultiplier/t.sizeMultiplier)}if(i){var v=t.havingStyle(t.style.sub());s=ye(i,v,t),f||(m=l.depth+v.fontMetrics().subDrop*v.sizeMultiplier/t.sizeMultiplier)}var x;t.style===ae.DISPLAY?x=u.sup1:t.style.cramped?x=u.sup3:x=u.sup2;var S=t.sizeMultiplier,g=K(.5/u.ptPerEm/S),y=null;if(s){var $=e.base&&e.base.type==="op"&&e.base.name&&(e.base.name==="\\oiint"||e.base.name==="\\oiiint");(l instanceof Kt||$)&&(y=K(-l.italic))}var F;if(o&&s){h=Math.max(h,x,o.depth+.25*u.xHeight),m=Math.max(m,u.sub2);var P=u.defaultRuleThickness,E=4*P;if(h-o.depth-(s.height-m)<E){m=E-(h-o.depth)+s.height;var M=.8*u.xHeight-(h-o.depth);M>0&&(h+=M,m-=M)}var I=[{type:"elem",elem:s,shift:m,marginRight:g,marginLeft:y},{type:"elem",elem:o,shift:-h,marginRight:g}];F=T.makeVList({positionType:"individualShift",children:I},t)}else if(s){m=Math.max(m,u.sub1,s.height-.8*u.xHeight);var O=[{type:"elem",elem:s,marginLeft:y,marginRight:g}];F=T.makeVList({positionType:"shift",positionData:m,children:O},t)}else if(o)h=Math.max(h,x,o.depth+.25*u.xHeight),F=T.makeVList({positionType:"shift",positionData:-h,children:[{type:"elem",elem:o,marginRight:g}]},t);else throw new Error("supsub must have either sup or sub.");var Q=z0(l,"right")||"mord";return T.makeSpan([Q],[l,T.makeSpan(["msupsub"],[F])],t)},mathmlBuilder(e,t){var n=!1,r,a;e.base&&e.base.type==="horizBrace"&&(a=!!e.sup,a===e.base.isOver&&(n=!0,r=e.base.isOver)),e.base&&(e.base.type==="op"||e.base.type==="operatorname")&&(e.base.parentIsSupSub=!0);var i=[Se(e.base,t)];e.sub&&i.push(Se(e.sub,t)),e.sup&&i.push(Se(e.sup,t));var l;if(n)l=r?"mover":"munder";else if(e.sub)if(e.sup){var u=e.base;u&&u.type==="op"&&u.limits&&t.style===ae.DISPLAY||u&&u.type==="operatorname"&&u.alwaysHandleSupSub&&(t.style===ae.DISPLAY||u.limits)?l="munderover":l="msubsup"}else{var s=e.base;s&&s.type==="op"&&s.limits&&(t.style===ae.DISPLAY||s.alwaysHandleSupSub)||s&&s.type==="operatorname"&&s.alwaysHandleSupSub&&(s.limits||t.style===ae.DISPLAY)?l="munder":l="msub"}else{var o=e.base;o&&o.type==="op"&&o.limits&&(t.style===ae.DISPLAY||o.alwaysHandleSupSub)||o&&o.type==="operatorname"&&o.alwaysHandleSupSub&&(o.limits||t.style===ae.DISPLAY)?l="mover":l="msup"}return new q.MathNode(l,i)}});Qr({type:"atom",htmlBuilder(e,t){return T.mathsym(e.text,e.mode,t,["m"+e.family])},mathmlBuilder(e,t){var n=new q.MathNode("mo",[Qt(e.text,e.mode)]);if(e.family==="bin"){var r=lc(e,t);r==="bold-italic"&&n.setAttribute("mathvariant",r)}else e.family==="punct"?n.setAttribute("separator","true"):(e.family==="open"||e.family==="close")&&n.setAttribute("stretchy","false");return n}});var r4={mi:"italic",mn:"normal",mtext:"normal"};Qr({type:"mathord",htmlBuilder(e,t){return T.makeOrd(e,t,"mathord")},mathmlBuilder(e,t){var n=new q.MathNode("mi",[Qt(e.text,e.mode,t)]),r=lc(e,t)||"italic";return r!==r4[n.type]&&n.setAttribute("mathvariant",r),n}});Qr({type:"textord",htmlBuilder(e,t){return T.makeOrd(e,t,"textord")},mathmlBuilder(e,t){var n=Qt(e.text,e.mode,t),r=lc(e,t)||"normal",a;return e.mode==="text"?a=new q.MathNode("mtext",[n]):/[0-9]/.test(e.text)?a=new q.MathNode("mn",[n]):e.text==="\\prime"?a=new q.MathNode("mo",[n]):a=new q.MathNode("mi",[n]),r!==r4[a.type]&&a.setAttribute("mathvariant",r),a}});var pu={"\\nobreak":"nobreak","\\allowbreak":"allowbreak"},bu={" ":{},"\\ ":{},"~":{className:"nobreak"},"\\space":{},"\\nobreakspace":{className:"nobreak"}};Qr({type:"spacing",htmlBuilder(e,t){if(bu.hasOwnProperty(e.text)){var n=bu[e.text].className||"";if(e.mode==="text"){var r=T.makeOrd(e,t,"textord");return r.classes.push(n),r}else return T.makeSpan(["mspace",n],[T.mathsym(e.text,e.mode,t)],t)}else{if(pu.hasOwnProperty(e.text))return T.makeSpan(["mspace",pu[e.text]],[],t);throw new H('Unknown type of space "'+e.text+'"')}},mathmlBuilder(e,t){var n;if(bu.hasOwnProperty(e.text))n=new q.MathNode("mtext",[new q.TextNode(" ")]);else{if(pu.hasOwnProperty(e.text))return new q.MathNode("mspace");throw new H('Unknown type of space "'+e.text+'"')}return n}});var sf=()=>{var e=new q.MathNode("mtd",[]);return e.setAttribute("width","50%"),e};Qr({type:"tag",mathmlBuilder(e,t){var n=new q.MathNode("mtable",[new q.MathNode("mtr",[sf(),new q.MathNode("mtd",[xr(e.body,t)]),sf(),new q.MathNode("mtd",[xr(e.tag,t)])])]);return n.setAttribute("width","100%"),n}});var uf={"\\text":void 0,"\\textrm":"textrm","\\textsf":"textsf","\\texttt":"texttt","\\textnormal":"textrm"},hf={"\\textbf":"textbf","\\textmd":"textmd"},E$={"\\textit":"textit","\\textup":"textup"},cf=(e,t)=>{var n=e.font;if(n){if(uf[n])return t.withTextFontFamily(uf[n]);if(hf[n])return t.withTextFontWeight(hf[n]);if(n==="\\emph")return t.fontShape==="textit"?t.withTextFontShape("textup"):t.withTextFontShape("textit")}else return t;return t.withTextFontShape(E$[n])};Z({type:"text",names:["\\text","\\textrm","\\textsf","\\texttt","\\textnormal","\\textbf","\\textmd","\\textit","\\textup","\\emph"],props:{numArgs:1,argTypes:["text"],allowedInArgument:!0,allowedInText:!0},handler(e,t){var{parser:n,funcName:r}=e,a=t[0];return{type:"text",mode:n.mode,body:Ue(a),font:r}},htmlBuilder(e,t){var n=cf(e,t),r=Ze(e.body,n,!0);return T.makeSpan(["mord","text"],r,n)},mathmlBuilder(e,t){var n=cf(e,t);return xr(e.body,n)}});Z({type:"underline",names:["\\underline"],props:{numArgs:1,allowedInText:!0},handler(e,t){var{parser:n}=e;return{type:"underline",mode:n.mode,body:t[0]}},htmlBuilder(e,t){var n=ye(e.body,t),r=T.makeLineSpan("underline-line",t),a=t.fontMetrics().defaultRuleThickness,i=T.makeVList({positionType:"top",positionData:n.height,children:[{type:"kern",size:a},{type:"elem",elem:r},{type:"kern",size:3*a},{type:"elem",elem:n}]},t);return T.makeSpan(["mord","underline"],[i],t)},mathmlBuilder(e,t){var n=new q.MathNode("mo",[new q.TextNode("‾")]);n.setAttribute("stretchy","true");var r=new q.MathNode("munder",[Se(e.body,t),n]);return r.setAttribute("accentunder","true"),r}});Z({type:"vcenter",names:["\\vcenter"],props:{numArgs:1,argTypes:["original"],allowedInText:!1},handler(e,t){var{parser:n}=e;return{type:"vcenter",mode:n.mode,body:t[0]}},htmlBuilder(e,t){var n=ye(e.body,t),r=t.fontMetrics().axisHeight,a=.5*(n.height-r-(n.depth+r));return T.makeVList({positionType:"shift",positionData:a,children:[{type:"elem",elem:n}]},t)},mathmlBuilder(e,t){return new q.MathNode("mpadded",[Se(e.body,t)],["vcenter"])}});Z({type:"verb",names:["\\verb"],props:{numArgs:0,allowedInText:!0},handler(e,t,n){throw new H("\\verb ended by end of line instead of matching delimiter")},htmlBuilder(e,t){for(var n=mf(e),r=[],a=t.havingStyle(t.style.text()),i=0;i<n.length;i++){var l=n[i];l==="~"&&(l="\\textasciitilde"),r.push(T.makeSymbol(l,"Typewriter-Regular",e.mode,a,["mord","texttt"]))}return T.makeSpan(["mord","text"].concat(a.sizingClasses(t)),T.tryCombineChars(r),a)},mathmlBuilder(e,t){var n=new q.TextNode(mf(e)),r=new q.MathNode("mtext",[n]);return r.setAttribute("mathvariant","monospace"),r}});var mf=e=>e.body.replace(/ /g,e.star?"␣":" "),lr=Dg,a4=`[ \r
	]`,z$="\\\\[a-zA-Z@]+",F$="\\\\[^\uD800-\uDFFF]",A$="("+z$+")"+a4+"*",T$=`\\\\(
|[ \r	]+
?)[ \r	]*`,P0="[̀-ͯ]",P$=new RegExp(P0+"+$"),N$="("+a4+"+)|"+(T$+"|")+"([!-\\[\\]-‧‪-퟿豈-￿]"+(P0+"*")+"|[\uD800-\uDBFF][\uDC00-\uDFFF]"+(P0+"*")+"|\\\\verb\\*([^]).*?\\4|\\\\verb([^*a-zA-Z]).*?\\5"+("|"+A$)+("|"+F$+")");class df{constructor(t,n){this.input=void 0,this.settings=void 0,this.tokenRegex=void 0,this.catcodes=void 0,this.input=t,this.settings=n,this.tokenRegex=new RegExp(N$,"g"),this.catcodes={"%":14,"~":13}}setCatcode(t,n){this.catcodes[t]=n}lex(){var t=this.input,n=this.tokenRegex.lastIndex;if(n===t.length)return new Ut("EOF",new zt(this,n,n));var r=this.tokenRegex.exec(t);if(r===null||r.index!==n)throw new H("Unexpected character: '"+t[n]+"'",new Ut(t[n],new zt(this,n,n+1)));var a=r[6]||r[3]||(r[2]?"\\ ":" ");if(this.catcodes[a]===14){var i=t.indexOf(`
`,this.tokenRegex.lastIndex);return i===-1?(this.tokenRegex.lastIndex=t.length,this.settings.reportNonstrict("commentAtEnd","% comment has no terminating newline; LaTeX would fail because of commenting the end of math mode (e.g. $)")):this.tokenRegex.lastIndex=i+1,this.lex()}return new Ut(a,new zt(this,n,this.tokenRegex.lastIndex))}}class M${constructor(t,n){t===void 0&&(t={}),n===void 0&&(n={}),this.current=void 0,this.builtins=void 0,this.undefStack=void 0,this.current=n,this.builtins=t,this.undefStack=[]}beginGroup(){this.undefStack.push({})}endGroup(){if(this.undefStack.length===0)throw new H("Unbalanced namespace destruction: attempt to pop global namespace; please report this as a bug");var t=this.undefStack.pop();for(var n in t)t.hasOwnProperty(n)&&(t[n]==null?delete this.current[n]:this.current[n]=t[n])}endGroups(){for(;this.undefStack.length>0;)this.endGroup()}has(t){return this.current.hasOwnProperty(t)||this.builtins.hasOwnProperty(t)}get(t){return this.current.hasOwnProperty(t)?this.current[t]:this.builtins[t]}set(t,n,r){if(r===void 0&&(r=!1),r){for(var a=0;a<this.undefStack.length;a++)delete this.undefStack[a][t];this.undefStack.length>0&&(this.undefStack[this.undefStack.length-1][t]=n)}else{var i=this.undefStack[this.undefStack.length-1];i&&!i.hasOwnProperty(t)&&(i[t]=this.current[t])}n==null?delete this.current[t]:this.current[t]=n}}var R$=Kg;w("\\noexpand",function(e){var t=e.popToken();return e.isExpandable(t.text)&&(t.noexpand=!0,t.treatAsRelax=!0),{tokens:[t],numArgs:0}});w("\\expandafter",function(e){var t=e.popToken();return e.expandOnce(!0),{tokens:[t],numArgs:0}});w("\\@firstoftwo",function(e){var t=e.consumeArgs(2);return{tokens:t[0],numArgs:0}});w("\\@secondoftwo",function(e){var t=e.consumeArgs(2);return{tokens:t[1],numArgs:0}});w("\\@ifnextchar",function(e){var t=e.consumeArgs(3);e.consumeSpaces();var n=e.future();return t[0].length===1&&t[0][0].text===n.text?{tokens:t[1],numArgs:0}:{tokens:t[2],numArgs:0}});w("\\@ifstar","\\@ifnextchar *{\\@firstoftwo{#1}}");w("\\TextOrMath",function(e){var t=e.consumeArgs(2);return e.mode==="text"?{tokens:t[0],numArgs:0}:{tokens:t[1],numArgs:0}});var ff={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,a:10,A:10,b:11,B:11,c:12,C:12,d:13,D:13,e:14,E:14,f:15,F:15};w("\\char",function(e){var t=e.popToken(),n,r="";if(t.text==="'")n=8,t=e.popToken();else if(t.text==='"')n=16,t=e.popToken();else if(t.text==="`")if(t=e.popToken(),t.text[0]==="\\")r=t.text.charCodeAt(1);else{if(t.text==="EOF")throw new H("\\char` missing argument");r=t.text.charCodeAt(0)}else n=10;if(n){if(r=ff[t.text],r==null||r>=n)throw new H("Invalid base-"+n+" digit "+t.text);for(var a;(a=ff[e.future().text])!=null&&a<n;)r*=n,r+=a,e.popToken()}return"\\@char{"+r+"}"});var bc=(e,t,n)=>{var r=e.consumeArg().tokens;if(r.length!==1)throw new H("\\newcommand's first argument must be a macro name");var a=r[0].text,i=e.isDefined(a);if(i&&!t)throw new H("\\newcommand{"+a+"} attempting to redefine "+(a+"; use \\renewcommand"));if(!i&&!n)throw new H("\\renewcommand{"+a+"} when command "+a+" does not yet exist; use \\newcommand");var l=0;if(r=e.consumeArg().tokens,r.length===1&&r[0].text==="["){for(var o="",s=e.expandNextToken();s.text!=="]"&&s.text!=="EOF";)o+=s.text,s=e.expandNextToken();if(!o.match(/^\s*[0-9]+\s*$/))throw new H("Invalid number of arguments: "+o);l=parseInt(o),r=e.consumeArg().tokens}return e.macros.set(a,{tokens:r,numArgs:l}),""};w("\\newcommand",e=>bc(e,!1,!0));w("\\renewcommand",e=>bc(e,!0,!1));w("\\providecommand",e=>bc(e,!0,!0));w("\\message",e=>{var t=e.consumeArgs(1)[0];return console.log(t.reverse().map(n=>n.text).join("")),""});w("\\errmessage",e=>{var t=e.consumeArgs(1)[0];return console.error(t.reverse().map(n=>n.text).join("")),""});w("\\show",e=>{var t=e.popToken(),n=t.text;return console.log(t,e.macros.get(n),lr[n],Ee.math[n],Ee.text[n]),""});w("\\bgroup","{");w("\\egroup","}");w("~","\\nobreakspace");w("\\lq","`");w("\\rq","'");w("\\aa","\\r a");w("\\AA","\\r A");w("\\textcopyright","\\html@mathml{\\textcircled{c}}{\\char`©}");w("\\copyright","\\TextOrMath{\\textcopyright}{\\text{\\textcopyright}}");w("\\textregistered","\\html@mathml{\\textcircled{\\scriptsize R}}{\\char`®}");w("ℬ","\\mathscr{B}");w("ℰ","\\mathscr{E}");w("ℱ","\\mathscr{F}");w("ℋ","\\mathscr{H}");w("ℐ","\\mathscr{I}");w("ℒ","\\mathscr{L}");w("ℳ","\\mathscr{M}");w("ℛ","\\mathscr{R}");w("ℭ","\\mathfrak{C}");w("ℌ","\\mathfrak{H}");w("ℨ","\\mathfrak{Z}");w("\\Bbbk","\\Bbb{k}");w("·","\\cdotp");w("\\llap","\\mathllap{\\textrm{#1}}");w("\\rlap","\\mathrlap{\\textrm{#1}}");w("\\clap","\\mathclap{\\textrm{#1}}");w("\\mathstrut","\\vphantom{(}");w("\\underbar","\\underline{\\text{#1}}");w("\\not",'\\html@mathml{\\mathrel{\\mathrlap\\@not}}{\\char"338}');w("\\neq","\\html@mathml{\\mathrel{\\not=}}{\\mathrel{\\char`≠}}");w("\\ne","\\neq");w("≠","\\neq");w("\\notin","\\html@mathml{\\mathrel{{\\in}\\mathllap{/\\mskip1mu}}}{\\mathrel{\\char`∉}}");w("∉","\\notin");w("≘","\\html@mathml{\\mathrel{=\\kern{-1em}\\raisebox{0.4em}{$\\scriptsize\\frown$}}}{\\mathrel{\\char`≘}}");w("≙","\\html@mathml{\\stackrel{\\tiny\\wedge}{=}}{\\mathrel{\\char`≘}}");w("≚","\\html@mathml{\\stackrel{\\tiny\\vee}{=}}{\\mathrel{\\char`≚}}");w("≛","\\html@mathml{\\stackrel{\\scriptsize\\star}{=}}{\\mathrel{\\char`≛}}");w("≝","\\html@mathml{\\stackrel{\\tiny\\mathrm{def}}{=}}{\\mathrel{\\char`≝}}");w("≞","\\html@mathml{\\stackrel{\\tiny\\mathrm{m}}{=}}{\\mathrel{\\char`≞}}");w("≟","\\html@mathml{\\stackrel{\\tiny?}{=}}{\\mathrel{\\char`≟}}");w("⟂","\\perp");w("‼","\\mathclose{!\\mkern-0.8mu!}");w("∌","\\notni");w("⌜","\\ulcorner");w("⌝","\\urcorner");w("⌞","\\llcorner");w("⌟","\\lrcorner");w("©","\\copyright");w("®","\\textregistered");w("️","\\textregistered");w("\\ulcorner",'\\html@mathml{\\@ulcorner}{\\mathop{\\char"231c}}');w("\\urcorner",'\\html@mathml{\\@urcorner}{\\mathop{\\char"231d}}');w("\\llcorner",'\\html@mathml{\\@llcorner}{\\mathop{\\char"231e}}');w("\\lrcorner",'\\html@mathml{\\@lrcorner}{\\mathop{\\char"231f}}');w("\\vdots","{\\varvdots\\rule{0pt}{15pt}}");w("⋮","\\vdots");w("\\varGamma","\\mathit{\\Gamma}");w("\\varDelta","\\mathit{\\Delta}");w("\\varTheta","\\mathit{\\Theta}");w("\\varLambda","\\mathit{\\Lambda}");w("\\varXi","\\mathit{\\Xi}");w("\\varPi","\\mathit{\\Pi}");w("\\varSigma","\\mathit{\\Sigma}");w("\\varUpsilon","\\mathit{\\Upsilon}");w("\\varPhi","\\mathit{\\Phi}");w("\\varPsi","\\mathit{\\Psi}");w("\\varOmega","\\mathit{\\Omega}");w("\\substack","\\begin{subarray}{c}#1\\end{subarray}");w("\\colon","\\nobreak\\mskip2mu\\mathpunct{}\\mathchoice{\\mkern-3mu}{\\mkern-3mu}{}{}{:}\\mskip6mu\\relax");w("\\boxed","\\fbox{$\\displaystyle{#1}$}");w("\\iff","\\DOTSB\\;\\Longleftrightarrow\\;");w("\\implies","\\DOTSB\\;\\Longrightarrow\\;");w("\\impliedby","\\DOTSB\\;\\Longleftarrow\\;");w("\\dddot","{\\overset{\\raisebox{-0.1ex}{\\normalsize ...}}{#1}}");w("\\ddddot","{\\overset{\\raisebox{-0.1ex}{\\normalsize ....}}{#1}}");var pf={",":"\\dotsc","\\not":"\\dotsb","+":"\\dotsb","=":"\\dotsb","<":"\\dotsb",">":"\\dotsb","-":"\\dotsb","*":"\\dotsb",":":"\\dotsb","\\DOTSB":"\\dotsb","\\coprod":"\\dotsb","\\bigvee":"\\dotsb","\\bigwedge":"\\dotsb","\\biguplus":"\\dotsb","\\bigcap":"\\dotsb","\\bigcup":"\\dotsb","\\prod":"\\dotsb","\\sum":"\\dotsb","\\bigotimes":"\\dotsb","\\bigoplus":"\\dotsb","\\bigodot":"\\dotsb","\\bigsqcup":"\\dotsb","\\And":"\\dotsb","\\longrightarrow":"\\dotsb","\\Longrightarrow":"\\dotsb","\\longleftarrow":"\\dotsb","\\Longleftarrow":"\\dotsb","\\longleftrightarrow":"\\dotsb","\\Longleftrightarrow":"\\dotsb","\\mapsto":"\\dotsb","\\longmapsto":"\\dotsb","\\hookrightarrow":"\\dotsb","\\doteq":"\\dotsb","\\mathbin":"\\dotsb","\\mathrel":"\\dotsb","\\relbar":"\\dotsb","\\Relbar":"\\dotsb","\\xrightarrow":"\\dotsb","\\xleftarrow":"\\dotsb","\\DOTSI":"\\dotsi","\\int":"\\dotsi","\\oint":"\\dotsi","\\iint":"\\dotsi","\\iiint":"\\dotsi","\\iiiint":"\\dotsi","\\idotsint":"\\dotsi","\\DOTSX":"\\dotsx"};w("\\dots",function(e){var t="\\dotso",n=e.expandAfterFuture().text;return n in pf?t=pf[n]:(n.slice(0,4)==="\\not"||n in Ee.math&&te.contains(["bin","rel"],Ee.math[n].group))&&(t="\\dotsb"),t});var gc={")":!0,"]":!0,"\\rbrack":!0,"\\}":!0,"\\rbrace":!0,"\\rangle":!0,"\\rceil":!0,"\\rfloor":!0,"\\rgroup":!0,"\\rmoustache":!0,"\\right":!0,"\\bigr":!0,"\\biggr":!0,"\\Bigr":!0,"\\Biggr":!0,$:!0,";":!0,".":!0,",":!0};w("\\dotso",function(e){var t=e.future().text;return t in gc?"\\ldots\\,":"\\ldots"});w("\\dotsc",function(e){var t=e.future().text;return t in gc&&t!==","?"\\ldots\\,":"\\ldots"});w("\\cdots",function(e){var t=e.future().text;return t in gc?"\\@cdots\\,":"\\@cdots"});w("\\dotsb","\\cdots");w("\\dotsm","\\cdots");w("\\dotsi","\\!\\cdots");w("\\dotsx","\\ldots\\,");w("\\DOTSI","\\relax");w("\\DOTSB","\\relax");w("\\DOTSX","\\relax");w("\\tmspace","\\TextOrMath{\\kern#1#3}{\\mskip#1#2}\\relax");w("\\,","\\tmspace+{3mu}{.1667em}");w("\\thinspace","\\,");w("\\>","\\mskip{4mu}");w("\\:","\\tmspace+{4mu}{.2222em}");w("\\medspace","\\:");w("\\;","\\tmspace+{5mu}{.2777em}");w("\\thickspace","\\;");w("\\!","\\tmspace-{3mu}{.1667em}");w("\\negthinspace","\\!");w("\\negmedspace","\\tmspace-{4mu}{.2222em}");w("\\negthickspace","\\tmspace-{5mu}{.277em}");w("\\enspace","\\kern.5em ");w("\\enskip","\\hskip.5em\\relax");w("\\quad","\\hskip1em\\relax");w("\\qquad","\\hskip2em\\relax");w("\\tag","\\@ifstar\\tag@literal\\tag@paren");w("\\tag@paren","\\tag@literal{({#1})}");w("\\tag@literal",e=>{if(e.macros.get("\\df@tag"))throw new H("Multiple \\tag");return"\\gdef\\df@tag{\\text{#1}}"});w("\\bmod","\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}\\mathbin{\\rm mod}\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}");w("\\pod","\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern8mu}{\\mkern8mu}{\\mkern8mu}(#1)");w("\\pmod","\\pod{{\\rm mod}\\mkern6mu#1}");w("\\mod","\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern12mu}{\\mkern12mu}{\\mkern12mu}{\\rm mod}\\,\\,#1");w("\\newline","\\\\\\relax");w("\\TeX","\\textrm{\\html@mathml{T\\kern-.1667em\\raisebox{-.5ex}{E}\\kern-.125emX}{TeX}}");var i4=K(bn["Main-Regular"][84][1]-.7*bn["Main-Regular"][65][1]);w("\\LaTeX","\\textrm{\\html@mathml{"+("L\\kern-.36em\\raisebox{"+i4+"}{\\scriptstyle A}")+"\\kern-.15em\\TeX}{LaTeX}}");w("\\KaTeX","\\textrm{\\html@mathml{"+("K\\kern-.17em\\raisebox{"+i4+"}{\\scriptstyle A}")+"\\kern-.15em\\TeX}{KaTeX}}");w("\\hspace","\\@ifstar\\@hspacer\\@hspace");w("\\@hspace","\\hskip #1\\relax");w("\\@hspacer","\\rule{0pt}{0pt}\\hskip #1\\relax");w("\\ordinarycolon",":");w("\\vcentcolon","\\mathrel{\\mathop\\ordinarycolon}");w("\\dblcolon",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-.9mu}\\vcentcolon}}{\\mathop{\\char"2237}}');w("\\coloneqq",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2254}}');w("\\Coloneqq",'\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2237\\char"3d}}');w("\\coloneq",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"3a\\char"2212}}');w("\\Coloneq",'\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"2237\\char"2212}}');w("\\eqqcolon",'\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2255}}');w("\\Eqqcolon",'\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"3d\\char"2237}}');w("\\eqcolon",'\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2239}}');w("\\Eqcolon",'\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"2212\\char"2237}}');w("\\colonapprox",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"3a\\char"2248}}');w("\\Colonapprox",'\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"2237\\char"2248}}');w("\\colonsim",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"3a\\char"223c}}');w("\\Colonsim",'\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"2237\\char"223c}}');w("∷","\\dblcolon");w("∹","\\eqcolon");w("≔","\\coloneqq");w("≕","\\eqqcolon");w("⩴","\\Coloneqq");w("\\ratio","\\vcentcolon");w("\\coloncolon","\\dblcolon");w("\\colonequals","\\coloneqq");w("\\coloncolonequals","\\Coloneqq");w("\\equalscolon","\\eqqcolon");w("\\equalscoloncolon","\\Eqqcolon");w("\\colonminus","\\coloneq");w("\\coloncolonminus","\\Coloneq");w("\\minuscolon","\\eqcolon");w("\\minuscoloncolon","\\Eqcolon");w("\\coloncolonapprox","\\Colonapprox");w("\\coloncolonsim","\\Colonsim");w("\\simcolon","\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\vcentcolon}");w("\\simcoloncolon","\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\dblcolon}");w("\\approxcolon","\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\vcentcolon}");w("\\approxcoloncolon","\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\dblcolon}");w("\\notni","\\html@mathml{\\not\\ni}{\\mathrel{\\char`∌}}");w("\\limsup","\\DOTSB\\operatorname*{lim\\,sup}");w("\\liminf","\\DOTSB\\operatorname*{lim\\,inf}");w("\\injlim","\\DOTSB\\operatorname*{inj\\,lim}");w("\\projlim","\\DOTSB\\operatorname*{proj\\,lim}");w("\\varlimsup","\\DOTSB\\operatorname*{\\overline{lim}}");w("\\varliminf","\\DOTSB\\operatorname*{\\underline{lim}}");w("\\varinjlim","\\DOTSB\\operatorname*{\\underrightarrow{lim}}");w("\\varprojlim","\\DOTSB\\operatorname*{\\underleftarrow{lim}}");w("\\gvertneqq","\\html@mathml{\\@gvertneqq}{≩}");w("\\lvertneqq","\\html@mathml{\\@lvertneqq}{≨}");w("\\ngeqq","\\html@mathml{\\@ngeqq}{≱}");w("\\ngeqslant","\\html@mathml{\\@ngeqslant}{≱}");w("\\nleqq","\\html@mathml{\\@nleqq}{≰}");w("\\nleqslant","\\html@mathml{\\@nleqslant}{≰}");w("\\nshortmid","\\html@mathml{\\@nshortmid}{∤}");w("\\nshortparallel","\\html@mathml{\\@nshortparallel}{∦}");w("\\nsubseteqq","\\html@mathml{\\@nsubseteqq}{⊈}");w("\\nsupseteqq","\\html@mathml{\\@nsupseteqq}{⊉}");w("\\varsubsetneq","\\html@mathml{\\@varsubsetneq}{⊊}");w("\\varsubsetneqq","\\html@mathml{\\@varsubsetneqq}{⫋}");w("\\varsupsetneq","\\html@mathml{\\@varsupsetneq}{⊋}");w("\\varsupsetneqq","\\html@mathml{\\@varsupsetneqq}{⫌}");w("\\imath","\\html@mathml{\\@imath}{ı}");w("\\jmath","\\html@mathml{\\@jmath}{ȷ}");w("\\llbracket","\\html@mathml{\\mathopen{[\\mkern-3.2mu[}}{\\mathopen{\\char`⟦}}");w("\\rrbracket","\\html@mathml{\\mathclose{]\\mkern-3.2mu]}}{\\mathclose{\\char`⟧}}");w("⟦","\\llbracket");w("⟧","\\rrbracket");w("\\lBrace","\\html@mathml{\\mathopen{\\{\\mkern-3.2mu[}}{\\mathopen{\\char`⦃}}");w("\\rBrace","\\html@mathml{\\mathclose{]\\mkern-3.2mu\\}}}{\\mathclose{\\char`⦄}}");w("⦃","\\lBrace");w("⦄","\\rBrace");w("\\minuso","\\mathbin{\\html@mathml{{\\mathrlap{\\mathchoice{\\kern{0.145em}}{\\kern{0.145em}}{\\kern{0.1015em}}{\\kern{0.0725em}}\\circ}{-}}}{\\char`⦵}}");w("⦵","\\minuso");w("\\darr","\\downarrow");w("\\dArr","\\Downarrow");w("\\Darr","\\Downarrow");w("\\lang","\\langle");w("\\rang","\\rangle");w("\\uarr","\\uparrow");w("\\uArr","\\Uparrow");w("\\Uarr","\\Uparrow");w("\\N","\\mathbb{N}");w("\\R","\\mathbb{R}");w("\\Z","\\mathbb{Z}");w("\\alef","\\aleph");w("\\alefsym","\\aleph");w("\\Alpha","\\mathrm{A}");w("\\Beta","\\mathrm{B}");w("\\bull","\\bullet");w("\\Chi","\\mathrm{X}");w("\\clubs","\\clubsuit");w("\\cnums","\\mathbb{C}");w("\\Complex","\\mathbb{C}");w("\\Dagger","\\ddagger");w("\\diamonds","\\diamondsuit");w("\\empty","\\emptyset");w("\\Epsilon","\\mathrm{E}");w("\\Eta","\\mathrm{H}");w("\\exist","\\exists");w("\\harr","\\leftrightarrow");w("\\hArr","\\Leftrightarrow");w("\\Harr","\\Leftrightarrow");w("\\hearts","\\heartsuit");w("\\image","\\Im");w("\\infin","\\infty");w("\\Iota","\\mathrm{I}");w("\\isin","\\in");w("\\Kappa","\\mathrm{K}");w("\\larr","\\leftarrow");w("\\lArr","\\Leftarrow");w("\\Larr","\\Leftarrow");w("\\lrarr","\\leftrightarrow");w("\\lrArr","\\Leftrightarrow");w("\\Lrarr","\\Leftrightarrow");w("\\Mu","\\mathrm{M}");w("\\natnums","\\mathbb{N}");w("\\Nu","\\mathrm{N}");w("\\Omicron","\\mathrm{O}");w("\\plusmn","\\pm");w("\\rarr","\\rightarrow");w("\\rArr","\\Rightarrow");w("\\Rarr","\\Rightarrow");w("\\real","\\Re");w("\\reals","\\mathbb{R}");w("\\Reals","\\mathbb{R}");w("\\Rho","\\mathrm{P}");w("\\sdot","\\cdot");w("\\sect","\\S");w("\\spades","\\spadesuit");w("\\sub","\\subset");w("\\sube","\\subseteq");w("\\supe","\\supseteq");w("\\Tau","\\mathrm{T}");w("\\thetasym","\\vartheta");w("\\weierp","\\wp");w("\\Zeta","\\mathrm{Z}");w("\\argmin","\\DOTSB\\operatorname*{arg\\,min}");w("\\argmax","\\DOTSB\\operatorname*{arg\\,max}");w("\\plim","\\DOTSB\\mathop{\\operatorname{plim}}\\limits");w("\\bra","\\mathinner{\\langle{#1}|}");w("\\ket","\\mathinner{|{#1}\\rangle}");w("\\braket","\\mathinner{\\langle{#1}\\rangle}");w("\\Bra","\\left\\langle#1\\right|");w("\\Ket","\\left|#1\\right\\rangle");var l4=e=>t=>{var n=t.consumeArg().tokens,r=t.consumeArg().tokens,a=t.consumeArg().tokens,i=t.consumeArg().tokens,l=t.macros.get("|"),o=t.macros.get("\\|");t.macros.beginGroup();var s=m=>f=>{e&&(f.macros.set("|",l),a.length&&f.macros.set("\\|",o));var p=m;if(!m&&a.length){var v=f.future();v.text==="|"&&(f.popToken(),p=!0)}return{tokens:p?a:r,numArgs:0}};t.macros.set("|",s(!1)),a.length&&t.macros.set("\\|",s(!0));var u=t.consumeArg().tokens,h=t.expandTokens([...i,...u,...n]);return t.macros.endGroup(),{tokens:h.reverse(),numArgs:0}};w("\\bra@ket",l4(!1));w("\\bra@set",l4(!0));w("\\Braket","\\bra@ket{\\left\\langle}{\\,\\middle\\vert\\,}{\\,\\middle\\vert\\,}{\\right\\rangle}");w("\\Set","\\bra@set{\\left\\{\\:}{\\;\\middle\\vert\\;}{\\;\\middle\\Vert\\;}{\\:\\right\\}}");w("\\set","\\bra@set{\\{\\,}{\\mid}{}{\\,\\}}");w("\\angln","{\\angl n}");w("\\blue","\\textcolor{##6495ed}{#1}");w("\\orange","\\textcolor{##ffa500}{#1}");w("\\pink","\\textcolor{##ff00af}{#1}");w("\\red","\\textcolor{##df0030}{#1}");w("\\green","\\textcolor{##28ae7b}{#1}");w("\\gray","\\textcolor{gray}{#1}");w("\\purple","\\textcolor{##9d38bd}{#1}");w("\\blueA","\\textcolor{##ccfaff}{#1}");w("\\blueB","\\textcolor{##80f6ff}{#1}");w("\\blueC","\\textcolor{##63d9ea}{#1}");w("\\blueD","\\textcolor{##11accd}{#1}");w("\\blueE","\\textcolor{##0c7f99}{#1}");w("\\tealA","\\textcolor{##94fff5}{#1}");w("\\tealB","\\textcolor{##26edd5}{#1}");w("\\tealC","\\textcolor{##01d1c1}{#1}");w("\\tealD","\\textcolor{##01a995}{#1}");w("\\tealE","\\textcolor{##208170}{#1}");w("\\greenA","\\textcolor{##b6ffb0}{#1}");w("\\greenB","\\textcolor{##8af281}{#1}");w("\\greenC","\\textcolor{##74cf70}{#1}");w("\\greenD","\\textcolor{##1fab54}{#1}");w("\\greenE","\\textcolor{##0d923f}{#1}");w("\\goldA","\\textcolor{##ffd0a9}{#1}");w("\\goldB","\\textcolor{##ffbb71}{#1}");w("\\goldC","\\textcolor{##ff9c39}{#1}");w("\\goldD","\\textcolor{##e07d10}{#1}");w("\\goldE","\\textcolor{##a75a05}{#1}");w("\\redA","\\textcolor{##fca9a9}{#1}");w("\\redB","\\textcolor{##ff8482}{#1}");w("\\redC","\\textcolor{##f9685d}{#1}");w("\\redD","\\textcolor{##e84d39}{#1}");w("\\redE","\\textcolor{##bc2612}{#1}");w("\\maroonA","\\textcolor{##ffbde0}{#1}");w("\\maroonB","\\textcolor{##ff92c6}{#1}");w("\\maroonC","\\textcolor{##ed5fa6}{#1}");w("\\maroonD","\\textcolor{##ca337c}{#1}");w("\\maroonE","\\textcolor{##9e034e}{#1}");w("\\purpleA","\\textcolor{##ddd7ff}{#1}");w("\\purpleB","\\textcolor{##c6b9fc}{#1}");w("\\purpleC","\\textcolor{##aa87ff}{#1}");w("\\purpleD","\\textcolor{##7854ab}{#1}");w("\\purpleE","\\textcolor{##543b78}{#1}");w("\\mintA","\\textcolor{##f5f9e8}{#1}");w("\\mintB","\\textcolor{##edf2df}{#1}");w("\\mintC","\\textcolor{##e0e5cc}{#1}");w("\\grayA","\\textcolor{##f6f7f7}{#1}");w("\\grayB","\\textcolor{##f0f1f2}{#1}");w("\\grayC","\\textcolor{##e3e5e6}{#1}");w("\\grayD","\\textcolor{##d6d8da}{#1}");w("\\grayE","\\textcolor{##babec2}{#1}");w("\\grayF","\\textcolor{##888d93}{#1}");w("\\grayG","\\textcolor{##626569}{#1}");w("\\grayH","\\textcolor{##3b3e40}{#1}");w("\\grayI","\\textcolor{##21242c}{#1}");w("\\kaBlue","\\textcolor{##314453}{#1}");w("\\kaGreen","\\textcolor{##71B307}{#1}");var o4={"^":!0,_:!0,"\\limits":!0,"\\nolimits":!0};class I${constructor(t,n,r){this.settings=void 0,this.expansionCount=void 0,this.lexer=void 0,this.macros=void 0,this.stack=void 0,this.mode=void 0,this.settings=n,this.expansionCount=0,this.feed(t),this.macros=new M$(R$,n.macros),this.mode=r,this.stack=[]}feed(t){this.lexer=new df(t,this.settings)}switchMode(t){this.mode=t}beginGroup(){this.macros.beginGroup()}endGroup(){this.macros.endGroup()}endGroups(){this.macros.endGroups()}future(){return this.stack.length===0&&this.pushToken(this.lexer.lex()),this.stack[this.stack.length-1]}popToken(){return this.future(),this.stack.pop()}pushToken(t){this.stack.push(t)}pushTokens(t){this.stack.push(...t)}scanArgument(t){var n,r,a;if(t){if(this.consumeSpaces(),this.future().text!=="[")return null;n=this.popToken(),{tokens:a,end:r}=this.consumeArg(["]"])}else({tokens:a,start:n,end:r}=this.consumeArg());return this.pushToken(new Ut("EOF",r.loc)),this.pushTokens(a),n.range(r,"")}consumeSpaces(){for(;;){var t=this.future();if(t.text===" ")this.stack.pop();else break}}consumeArg(t){var n=[],r=t&&t.length>0;r||this.consumeSpaces();var a=this.future(),i,l=0,o=0;do{if(i=this.popToken(),n.push(i),i.text==="{")++l;else if(i.text==="}"){if(--l,l===-1)throw new H("Extra }",i)}else if(i.text==="EOF")throw new H("Unexpected end of input in a macro argument, expected '"+(t&&r?t[o]:"}")+"'",i);if(t&&r)if((l===0||l===1&&t[o]==="{")&&i.text===t[o]){if(++o,o===t.length){n.splice(-o,o);break}}else o=0}while(l!==0||r);return a.text==="{"&&n[n.length-1].text==="}"&&(n.pop(),n.shift()),n.reverse(),{tokens:n,start:a,end:i}}consumeArgs(t,n){if(n){if(n.length!==t+1)throw new H("The length of delimiters doesn't match the number of args!");for(var r=n[0],a=0;a<r.length;a++){var i=this.popToken();if(r[a]!==i.text)throw new H("Use of the macro doesn't match its definition",i)}}for(var l=[],o=0;o<t;o++)l.push(this.consumeArg(n&&n[o+1]).tokens);return l}countExpansion(t){if(this.expansionCount+=t,this.expansionCount>this.settings.maxExpand)throw new H("Too many expansions: infinite loop or need to increase maxExpand setting")}expandOnce(t){var n=this.popToken(),r=n.text,a=n.noexpand?null:this._getExpansion(r);if(a==null||t&&a.unexpandable){if(t&&a==null&&r[0]==="\\"&&!this.isDefined(r))throw new H("Undefined control sequence: "+r);return this.pushToken(n),!1}this.countExpansion(1);var i=a.tokens,l=this.consumeArgs(a.numArgs,a.delimiters);if(a.numArgs){i=i.slice();for(var o=i.length-1;o>=0;--o){var s=i[o];if(s.text==="#"){if(o===0)throw new H("Incomplete placeholder at end of macro body",s);if(s=i[--o],s.text==="#")i.splice(o+1,1);else if(/^[1-9]$/.test(s.text))i.splice(o,2,...l[+s.text-1]);else throw new H("Not a valid argument number",s)}}}return this.pushTokens(i),i.length}expandAfterFuture(){return this.expandOnce(),this.future()}expandNextToken(){for(;;)if(this.expandOnce()===!1){var t=this.stack.pop();return t.treatAsRelax&&(t.text="\\relax"),t}throw new Error}expandMacro(t){return this.macros.has(t)?this.expandTokens([new Ut(t)]):void 0}expandTokens(t){var n=[],r=this.stack.length;for(this.pushTokens(t);this.stack.length>r;)if(this.expandOnce(!0)===!1){var a=this.stack.pop();a.treatAsRelax&&(a.noexpand=!1,a.treatAsRelax=!1),n.push(a)}return this.countExpansion(n.length),n}expandMacroAsText(t){var n=this.expandMacro(t);return n&&n.map(r=>r.text).join("")}_getExpansion(t){var n=this.macros.get(t);if(n==null)return n;if(t.length===1){var r=this.lexer.catcodes[t];if(r!=null&&r!==13)return}var a=typeof n=="function"?n(this):n;if(typeof a=="string"){var i=0;if(a.indexOf("#")!==-1)for(var l=a.replace(/##/g,"");l.indexOf("#"+(i+1))!==-1;)++i;for(var o=new df(a,this.settings),s=[],u=o.lex();u.text!=="EOF";)s.push(u),u=o.lex();s.reverse();var h={tokens:s,numArgs:i};return h}return a}isDefined(t){return this.macros.has(t)||lr.hasOwnProperty(t)||Ee.math.hasOwnProperty(t)||Ee.text.hasOwnProperty(t)||o4.hasOwnProperty(t)}isExpandable(t){var n=this.macros.get(t);return n!=null?typeof n=="string"||typeof n=="function"||!n.unexpandable:lr.hasOwnProperty(t)&&!lr[t].primitive}}var bf=/^[₊₋₌₍₎₀₁₂₃₄₅₆₇₈₉ₐₑₕᵢⱼₖₗₘₙₒₚᵣₛₜᵤᵥₓᵦᵧᵨᵩᵪ]/,Rl=Object.freeze({"₊":"+","₋":"-","₌":"=","₍":"(","₎":")","₀":"0","₁":"1","₂":"2","₃":"3","₄":"4","₅":"5","₆":"6","₇":"7","₈":"8","₉":"9","ₐ":"a","ₑ":"e","ₕ":"h","ᵢ":"i","ⱼ":"j","ₖ":"k","ₗ":"l","ₘ":"m","ₙ":"n","ₒ":"o","ₚ":"p","ᵣ":"r","ₛ":"s","ₜ":"t","ᵤ":"u","ᵥ":"v","ₓ":"x","ᵦ":"β","ᵧ":"γ","ᵨ":"ρ","ᵩ":"ϕ","ᵪ":"χ","⁺":"+","⁻":"-","⁼":"=","⁽":"(","⁾":")","⁰":"0","¹":"1","²":"2","³":"3","⁴":"4","⁵":"5","⁶":"6","⁷":"7","⁸":"8","⁹":"9","ᴬ":"A","ᴮ":"B","ᴰ":"D","ᴱ":"E","ᴳ":"G","ᴴ":"H","ᴵ":"I","ᴶ":"J","ᴷ":"K","ᴸ":"L","ᴹ":"M","ᴺ":"N","ᴼ":"O","ᴾ":"P","ᴿ":"R","ᵀ":"T","ᵁ":"U","ⱽ":"V","ᵂ":"W","ᵃ":"a","ᵇ":"b","ᶜ":"c","ᵈ":"d","ᵉ":"e","ᶠ":"f","ᵍ":"g",ʰ:"h","ⁱ":"i",ʲ:"j","ᵏ":"k",ˡ:"l","ᵐ":"m",ⁿ:"n","ᵒ":"o","ᵖ":"p",ʳ:"r",ˢ:"s","ᵗ":"t","ᵘ":"u","ᵛ":"v",ʷ:"w",ˣ:"x",ʸ:"y","ᶻ":"z","ᵝ":"β","ᵞ":"γ","ᵟ":"δ","ᵠ":"ϕ","ᵡ":"χ","ᶿ":"θ"}),gu={"́":{text:"\\'",math:"\\acute"},"̀":{text:"\\`",math:"\\grave"},"̈":{text:'\\"',math:"\\ddot"},"̃":{text:"\\~",math:"\\tilde"},"̄":{text:"\\=",math:"\\bar"},"̆":{text:"\\u",math:"\\breve"},"̌":{text:"\\v",math:"\\check"},"̂":{text:"\\^",math:"\\hat"},"̇":{text:"\\.",math:"\\dot"},"̊":{text:"\\r",math:"\\mathring"},"̋":{text:"\\H"},"̧":{text:"\\c"}},gf={á:"á",à:"à",ä:"ä",ǟ:"ǟ",ã:"ã",ā:"ā",ă:"ă",ắ:"ắ",ằ:"ằ",ẵ:"ẵ",ǎ:"ǎ",â:"â",ấ:"ấ",ầ:"ầ",ẫ:"ẫ",ȧ:"ȧ",ǡ:"ǡ",å:"å",ǻ:"ǻ",ḃ:"ḃ",ć:"ć",ḉ:"ḉ",č:"č",ĉ:"ĉ",ċ:"ċ",ç:"ç",ď:"ď",ḋ:"ḋ",ḑ:"ḑ",é:"é",è:"è",ë:"ë",ẽ:"ẽ",ē:"ē",ḗ:"ḗ",ḕ:"ḕ",ĕ:"ĕ",ḝ:"ḝ",ě:"ě",ê:"ê",ế:"ế",ề:"ề",ễ:"ễ",ė:"ė",ȩ:"ȩ",ḟ:"ḟ",ǵ:"ǵ",ḡ:"ḡ",ğ:"ğ",ǧ:"ǧ",ĝ:"ĝ",ġ:"ġ",ģ:"ģ",ḧ:"ḧ",ȟ:"ȟ",ĥ:"ĥ",ḣ:"ḣ",ḩ:"ḩ",í:"í",ì:"ì",ï:"ï",ḯ:"ḯ",ĩ:"ĩ",ī:"ī",ĭ:"ĭ",ǐ:"ǐ",î:"î",ǰ:"ǰ",ĵ:"ĵ",ḱ:"ḱ",ǩ:"ǩ",ķ:"ķ",ĺ:"ĺ",ľ:"ľ",ļ:"ļ",ḿ:"ḿ",ṁ:"ṁ",ń:"ń",ǹ:"ǹ",ñ:"ñ",ň:"ň",ṅ:"ṅ",ņ:"ņ",ó:"ó",ò:"ò",ö:"ö",ȫ:"ȫ",õ:"õ",ṍ:"ṍ",ṏ:"ṏ",ȭ:"ȭ",ō:"ō",ṓ:"ṓ",ṑ:"ṑ",ŏ:"ŏ",ǒ:"ǒ",ô:"ô",ố:"ố",ồ:"ồ",ỗ:"ỗ",ȯ:"ȯ",ȱ:"ȱ",ő:"ő",ṕ:"ṕ",ṗ:"ṗ",ŕ:"ŕ",ř:"ř",ṙ:"ṙ",ŗ:"ŗ",ś:"ś",ṥ:"ṥ",š:"š",ṧ:"ṧ",ŝ:"ŝ",ṡ:"ṡ",ş:"ş",ẗ:"ẗ",ť:"ť",ṫ:"ṫ",ţ:"ţ",ú:"ú",ù:"ù",ü:"ü",ǘ:"ǘ",ǜ:"ǜ",ǖ:"ǖ",ǚ:"ǚ",ũ:"ũ",ṹ:"ṹ",ū:"ū",ṻ:"ṻ",ŭ:"ŭ",ǔ:"ǔ",û:"û",ů:"ů",ű:"ű",ṽ:"ṽ",ẃ:"ẃ",ẁ:"ẁ",ẅ:"ẅ",ŵ:"ŵ",ẇ:"ẇ",ẘ:"ẘ",ẍ:"ẍ",ẋ:"ẋ",ý:"ý",ỳ:"ỳ",ÿ:"ÿ",ỹ:"ỹ",ȳ:"ȳ",ŷ:"ŷ",ẏ:"ẏ",ẙ:"ẙ",ź:"ź",ž:"ž",ẑ:"ẑ",ż:"ż",Á:"Á",À:"À",Ä:"Ä",Ǟ:"Ǟ",Ã:"Ã",Ā:"Ā",Ă:"Ă",Ắ:"Ắ",Ằ:"Ằ",Ẵ:"Ẵ",Ǎ:"Ǎ",Â:"Â",Ấ:"Ấ",Ầ:"Ầ",Ẫ:"Ẫ",Ȧ:"Ȧ",Ǡ:"Ǡ",Å:"Å",Ǻ:"Ǻ",Ḃ:"Ḃ",Ć:"Ć",Ḉ:"Ḉ",Č:"Č",Ĉ:"Ĉ",Ċ:"Ċ",Ç:"Ç",Ď:"Ď",Ḋ:"Ḋ",Ḑ:"Ḑ",É:"É",È:"È",Ë:"Ë",Ẽ:"Ẽ",Ē:"Ē",Ḗ:"Ḗ",Ḕ:"Ḕ",Ĕ:"Ĕ",Ḝ:"Ḝ",Ě:"Ě",Ê:"Ê",Ế:"Ế",Ề:"Ề",Ễ:"Ễ",Ė:"Ė",Ȩ:"Ȩ",Ḟ:"Ḟ",Ǵ:"Ǵ",Ḡ:"Ḡ",Ğ:"Ğ",Ǧ:"Ǧ",Ĝ:"Ĝ",Ġ:"Ġ",Ģ:"Ģ",Ḧ:"Ḧ",Ȟ:"Ȟ",Ĥ:"Ĥ",Ḣ:"Ḣ",Ḩ:"Ḩ",Í:"Í",Ì:"Ì",Ï:"Ï",Ḯ:"Ḯ",Ĩ:"Ĩ",Ī:"Ī",Ĭ:"Ĭ",Ǐ:"Ǐ",Î:"Î",İ:"İ",Ĵ:"Ĵ",Ḱ:"Ḱ",Ǩ:"Ǩ",Ķ:"Ķ",Ĺ:"Ĺ",Ľ:"Ľ",Ļ:"Ļ",Ḿ:"Ḿ",Ṁ:"Ṁ",Ń:"Ń",Ǹ:"Ǹ",Ñ:"Ñ",Ň:"Ň",Ṅ:"Ṅ",Ņ:"Ņ",Ó:"Ó",Ò:"Ò",Ö:"Ö",Ȫ:"Ȫ",Õ:"Õ",Ṍ:"Ṍ",Ṏ:"Ṏ",Ȭ:"Ȭ",Ō:"Ō",Ṓ:"Ṓ",Ṑ:"Ṑ",Ŏ:"Ŏ",Ǒ:"Ǒ",Ô:"Ô",Ố:"Ố",Ồ:"Ồ",Ỗ:"Ỗ",Ȯ:"Ȯ",Ȱ:"Ȱ",Ő:"Ő",Ṕ:"Ṕ",Ṗ:"Ṗ",Ŕ:"Ŕ",Ř:"Ř",Ṙ:"Ṙ",Ŗ:"Ŗ",Ś:"Ś",Ṥ:"Ṥ",Š:"Š",Ṧ:"Ṧ",Ŝ:"Ŝ",Ṡ:"Ṡ",Ş:"Ş",Ť:"Ť",Ṫ:"Ṫ",Ţ:"Ţ",Ú:"Ú",Ù:"Ù",Ü:"Ü",Ǘ:"Ǘ",Ǜ:"Ǜ",Ǖ:"Ǖ",Ǚ:"Ǚ",Ũ:"Ũ",Ṹ:"Ṹ",Ū:"Ū",Ṻ:"Ṻ",Ŭ:"Ŭ",Ǔ:"Ǔ",Û:"Û",Ů:"Ů",Ű:"Ű",Ṽ:"Ṽ",Ẃ:"Ẃ",Ẁ:"Ẁ",Ẅ:"Ẅ",Ŵ:"Ŵ",Ẇ:"Ẇ",Ẍ:"Ẍ",Ẋ:"Ẋ",Ý:"Ý",Ỳ:"Ỳ",Ÿ:"Ÿ",Ỹ:"Ỹ",Ȳ:"Ȳ",Ŷ:"Ŷ",Ẏ:"Ẏ",Ź:"Ź",Ž:"Ž",Ẑ:"Ẑ",Ż:"Ż",ά:"ά",ὰ:"ὰ",ᾱ:"ᾱ",ᾰ:"ᾰ",έ:"έ",ὲ:"ὲ",ή:"ή",ὴ:"ὴ",ί:"ί",ὶ:"ὶ",ϊ:"ϊ",ΐ:"ΐ",ῒ:"ῒ",ῑ:"ῑ",ῐ:"ῐ",ό:"ό",ὸ:"ὸ",ύ:"ύ",ὺ:"ὺ",ϋ:"ϋ",ΰ:"ΰ",ῢ:"ῢ",ῡ:"ῡ",ῠ:"ῠ",ώ:"ώ",ὼ:"ὼ",Ύ:"Ύ",Ὺ:"Ὺ",Ϋ:"Ϋ",Ῡ:"Ῡ",Ῠ:"Ῠ",Ώ:"Ώ",Ὼ:"Ὼ"};class fs{constructor(t,n){this.mode=void 0,this.gullet=void 0,this.settings=void 0,this.leftrightDepth=void 0,this.nextToken=void 0,this.mode="math",this.gullet=new I$(t,n,this.mode),this.settings=n,this.leftrightDepth=0}expect(t,n){if(n===void 0&&(n=!0),this.fetch().text!==t)throw new H("Expected '"+t+"', got '"+this.fetch().text+"'",this.fetch());n&&this.consume()}consume(){this.nextToken=null}fetch(){return this.nextToken==null&&(this.nextToken=this.gullet.expandNextToken()),this.nextToken}switchMode(t){this.mode=t,this.gullet.switchMode(t)}parse(){this.settings.globalGroup||this.gullet.beginGroup(),this.settings.colorIsTextColor&&this.gullet.macros.set("\\color","\\textcolor");try{var t=this.parseExpression(!1);return this.expect("EOF"),this.settings.globalGroup||this.gullet.endGroup(),t}finally{this.gullet.endGroups()}}subparse(t){var n=this.nextToken;this.consume(),this.gullet.pushToken(new Ut("}")),this.gullet.pushTokens(t);var r=this.parseExpression(!1);return this.expect("}"),this.nextToken=n,r}parseExpression(t,n){for(var r=[];;){this.mode==="math"&&this.consumeSpaces();var a=this.fetch();if(fs.endOfExpression.indexOf(a.text)!==-1||n&&a.text===n||t&&lr[a.text]&&lr[a.text].infix)break;var i=this.parseAtom(n);if(i){if(i.type==="internal")continue}else break;r.push(i)}return this.mode==="text"&&this.formLigatures(r),this.handleInfixNodes(r)}handleInfixNodes(t){for(var n=-1,r,a=0;a<t.length;a++)if(t[a].type==="infix"){if(n!==-1)throw new H("only one infix operator per group",t[a].token);n=a,r=t[a].replaceWith}if(n!==-1&&r){var i,l,o=t.slice(0,n),s=t.slice(n+1);o.length===1&&o[0].type==="ordgroup"?i=o[0]:i={type:"ordgroup",mode:this.mode,body:o},s.length===1&&s[0].type==="ordgroup"?l=s[0]:l={type:"ordgroup",mode:this.mode,body:s};var u;return r==="\\\\abovefrac"?u=this.callFunction(r,[i,t[n],l],[]):u=this.callFunction(r,[i,l],[]),[u]}else return t}handleSupSubscript(t){var n=this.fetch(),r=n.text;this.consume(),this.consumeSpaces();var a=this.parseGroup(t);if(!a)throw new H("Expected group after '"+r+"'",n);return a}formatUnsupportedCmd(t){for(var n=[],r=0;r<t.length;r++)n.push({type:"textord",mode:"text",text:t[r]});var a={type:"text",mode:this.mode,body:n},i={type:"color",mode:this.mode,color:this.settings.errorColor,body:[a]};return i}parseAtom(t){var n=this.parseGroup("atom",t);if(this.mode==="text")return n;for(var r,a;;){this.consumeSpaces();var i=this.fetch();if(i.text==="\\limits"||i.text==="\\nolimits"){if(n&&n.type==="op"){var l=i.text==="\\limits";n.limits=l,n.alwaysHandleSupSub=!0}else if(n&&n.type==="operatorname")n.alwaysHandleSupSub&&(n.limits=i.text==="\\limits");else throw new H("Limit controls must follow a math operator",i);this.consume()}else if(i.text==="^"){if(r)throw new H("Double superscript",i);r=this.handleSupSubscript("superscript")}else if(i.text==="_"){if(a)throw new H("Double subscript",i);a=this.handleSupSubscript("subscript")}else if(i.text==="'"){if(r)throw new H("Double superscript",i);var o={type:"textord",mode:this.mode,text:"\\prime"},s=[o];for(this.consume();this.fetch().text==="'";)s.push(o),this.consume();this.fetch().text==="^"&&s.push(this.handleSupSubscript("superscript")),r={type:"ordgroup",mode:this.mode,body:s}}else if(Rl[i.text]){var u=bf.test(i.text),h=[];for(h.push(new Ut(Rl[i.text])),this.consume();;){var m=this.fetch().text;if(!Rl[m]||bf.test(m)!==u)break;h.unshift(new Ut(Rl[m])),this.consume()}var f=this.subparse(h);u?a={type:"ordgroup",mode:"math",body:f}:r={type:"ordgroup",mode:"math",body:f}}else break}return r||a?{type:"supsub",mode:this.mode,base:n,sup:r,sub:a}:n}parseFunction(t,n){var r=this.fetch(),a=r.text,i=lr[a];if(!i)return null;if(this.consume(),n&&n!=="atom"&&!i.allowedInArgument)throw new H("Got function '"+a+"' with no arguments"+(n?" as "+n:""),r);if(this.mode==="text"&&!i.allowedInText)throw new H("Can't use function '"+a+"' in text mode",r);if(this.mode==="math"&&i.allowedInMath===!1)throw new H("Can't use function '"+a+"' in math mode",r);var{args:l,optArgs:o}=this.parseArguments(a,i);return this.callFunction(a,l,o,r,t)}callFunction(t,n,r,a,i){var l={funcName:t,parser:this,token:a,breakOnTokenText:i},o=lr[t];if(o&&o.handler)return o.handler(l,n,r);throw new H("No function handler for "+t)}parseArguments(t,n){var r=n.numArgs+n.numOptionalArgs;if(r===0)return{args:[],optArgs:[]};for(var a=[],i=[],l=0;l<r;l++){var o=n.argTypes&&n.argTypes[l],s=l<n.numOptionalArgs;(n.primitive&&o==null||n.type==="sqrt"&&l===1&&i[0]==null)&&(o="primitive");var u=this.parseGroupOfType("argument to '"+t+"'",o,s);if(s)i.push(u);else if(u!=null)a.push(u);else throw new H("Null argument, please report this as a bug")}return{args:a,optArgs:i}}parseGroupOfType(t,n,r){switch(n){case"color":return this.parseColorGroup(r);case"size":return this.parseSizeGroup(r);case"url":return this.parseUrlGroup(r);case"math":case"text":return this.parseArgumentGroup(r,n);case"hbox":{var a=this.parseArgumentGroup(r,"text");return a!=null?{type:"styling",mode:a.mode,body:[a],style:"text"}:null}case"raw":{var i=this.parseStringGroup("raw",r);return i!=null?{type:"raw",mode:"text",string:i.text}:null}case"primitive":{if(r)throw new H("A primitive argument cannot be optional");var l=this.parseGroup(t);if(l==null)throw new H("Expected group as "+t,this.fetch());return l}case"original":case null:case void 0:return this.parseArgumentGroup(r);default:throw new H("Unknown group type as "+t,this.fetch())}}consumeSpaces(){for(;this.fetch().text===" ";)this.consume()}parseStringGroup(t,n){var r=this.gullet.scanArgument(n);if(r==null)return null;for(var a="",i;(i=this.fetch()).text!=="EOF";)a+=i.text,this.consume();return this.consume(),r.text=a,r}parseRegexGroup(t,n){for(var r=this.fetch(),a=r,i="",l;(l=this.fetch()).text!=="EOF"&&t.test(i+l.text);)a=l,i+=a.text,this.consume();if(i==="")throw new H("Invalid "+n+": '"+r.text+"'",r);return r.range(a,i)}parseColorGroup(t){var n=this.parseStringGroup("color",t);if(n==null)return null;var r=/^(#[a-f0-9]{3}|#?[a-f0-9]{6}|[a-z]+)$/i.exec(n.text);if(!r)throw new H("Invalid color: '"+n.text+"'",n);var a=r[0];return/^[0-9a-f]{6}$/i.test(a)&&(a="#"+a),{type:"color-token",mode:this.mode,color:a}}parseSizeGroup(t){var n,r=!1;if(this.gullet.consumeSpaces(),!t&&this.gullet.future().text!=="{"?n=this.parseRegexGroup(/^[-+]? *(?:$|\d+|\d+\.\d*|\.\d*) *[a-z]{0,2} *$/,"size"):n=this.parseStringGroup("size",t),!n)return null;!t&&n.text.length===0&&(n.text="0pt",r=!0);var a=/([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(n.text);if(!a)throw new H("Invalid size: '"+n.text+"'",n);var i={number:+(a[1]+a[2]),unit:a[3]};if(!gg(i))throw new H("Invalid unit: '"+i.unit+"'",n);return{type:"size",mode:this.mode,value:i,isBlank:r}}parseUrlGroup(t){this.gullet.lexer.setCatcode("%",13),this.gullet.lexer.setCatcode("~",12);var n=this.parseStringGroup("url",t);if(this.gullet.lexer.setCatcode("%",14),this.gullet.lexer.setCatcode("~",13),n==null)return null;var r=n.text.replace(/\\([#$%&~_^{}])/g,"$1");return{type:"url",mode:this.mode,url:r}}parseArgumentGroup(t,n){var r=this.gullet.scanArgument(t);if(r==null)return null;var a=this.mode;n&&this.switchMode(n),this.gullet.beginGroup();var i=this.parseExpression(!1,"EOF");this.expect("EOF"),this.gullet.endGroup();var l={type:"ordgroup",mode:this.mode,loc:r.loc,body:i};return n&&this.switchMode(a),l}parseGroup(t,n){var r=this.fetch(),a=r.text,i;if(a==="{"||a==="\\begingroup"){this.consume();var l=a==="{"?"}":"\\endgroup";this.gullet.beginGroup();var o=this.parseExpression(!1,l),s=this.fetch();this.expect(l),this.gullet.endGroup(),i={type:"ordgroup",mode:this.mode,loc:zt.range(r,s),body:o,semisimple:a==="\\begingroup"||void 0}}else if(i=this.parseFunction(n,t)||this.parseSymbol(),i==null&&a[0]==="\\"&&!o4.hasOwnProperty(a)){if(this.settings.throwOnError)throw new H("Undefined control sequence: "+a,r);i=this.formatUnsupportedCmd(a),this.consume()}return i}formLigatures(t){for(var n=t.length-1,r=0;r<n;++r){var a=t[r],i=a.text;i==="-"&&t[r+1].text==="-"&&(r+1<n&&t[r+2].text==="-"?(t.splice(r,3,{type:"textord",mode:"text",loc:zt.range(a,t[r+2]),text:"---"}),n-=2):(t.splice(r,2,{type:"textord",mode:"text",loc:zt.range(a,t[r+1]),text:"--"}),n-=1)),(i==="'"||i==="`")&&t[r+1].text===i&&(t.splice(r,2,{type:"textord",mode:"text",loc:zt.range(a,t[r+1]),text:i+i}),n-=1)}}parseSymbol(){var t=this.fetch(),n=t.text;if(/^\\verb[^a-zA-Z]/.test(n)){this.consume();var r=n.slice(5),a=r.charAt(0)==="*";if(a&&(r=r.slice(1)),r.length<2||r.charAt(0)!==r.slice(-1))throw new H(`\\verb assertion failed --
                    please report what input caused this bug`);return r=r.slice(1,-1),{type:"verb",mode:"text",body:r,star:a}}gf.hasOwnProperty(n[0])&&!Ee[this.mode][n[0]]&&(this.settings.strict&&this.mode==="math"&&this.settings.reportNonstrict("unicodeTextInMathMode",'Accented Unicode text character "'+n[0]+'" used in math mode',t),n=gf[n[0]]+n.slice(1));var i=P$.exec(n);i&&(n=n.substring(0,i.index),n==="i"?n="ı":n==="j"&&(n="ȷ"));var l;if(Ee[this.mode][n]){this.settings.strict&&this.mode==="math"&&E0.indexOf(n)>=0&&this.settings.reportNonstrict("unicodeTextInMathMode",'Latin-1/Unicode text character "'+n[0]+'" used in math mode',t);var o=Ee[this.mode][n].group,s=zt.range(t),u;if(Sw.hasOwnProperty(o)){var h=o;u={type:"atom",mode:this.mode,family:h,loc:s,text:n}}else u={type:o,mode:this.mode,loc:s,text:n};l=u}else if(n.charCodeAt(0)>=128)this.settings.strict&&(bg(n.charCodeAt(0))?this.mode==="math"&&this.settings.reportNonstrict("unicodeTextInMathMode",'Unicode text character "'+n[0]+'" used in math mode',t):this.settings.reportNonstrict("unknownSymbol",'Unrecognized Unicode character "'+n[0]+'"'+(" ("+n.charCodeAt(0)+")"),t)),l={type:"textord",mode:"text",loc:zt.range(t),text:n};else return null;if(this.consume(),i)for(var m=0;m<i[0].length;m++){var f=i[0][m];if(!gu[f])throw new H("Unknown accent ' "+f+"'",t);var p=gu[f][this.mode]||gu[f].text;if(!p)throw new H("Accent "+f+" unsupported in "+this.mode+" mode",t);l={type:"accent",mode:this.mode,loc:zt.range(t),label:p,isStretchy:!1,isShifty:!0,base:l}}return l}}fs.endOfExpression=["}","\\endgroup","\\end","\\right","&"];var yc=function(t,n){if(!(typeof t=="string"||t instanceof String))throw new TypeError("KaTeX can only parse string typed expression");var r=new fs(t,n);delete r.gullet.macros.current["\\df@tag"];var a=r.parse();if(delete r.gullet.macros.current["\\current@color"],delete r.gullet.macros.current["\\color"],r.gullet.macros.get("\\df@tag")){if(!n.displayMode)throw new H("\\tag works only in display equations");a=[{type:"tag",mode:"text",body:a,tag:r.subparse([new Ut("\\df@tag")])}]}return a},s4=function(t,n,r){n.textContent="";var a=vc(t,r).toNode();n.appendChild(a)};typeof document<"u"&&document.compatMode!=="CSS1Compat"&&(typeof console<"u"&&console.warn("Warning: KaTeX doesn't work in quirks mode. Make sure your website has a suitable doctype."),s4=function(){throw new H("KaTeX doesn't work in quirks mode.")});var O$=function(t,n){var r=vc(t,n).toMarkup();return r},B$=function(t,n){var r=new ec(n);return yc(t,r)},u4=function(t,n,r){if(r.throwOnError||!(t instanceof H))throw t;var a=T.makeSpan(["katex-error"],[new Kt(n)]);return a.setAttribute("title",t.toString()),a.setAttribute("style","color:"+r.errorColor),a},vc=function(t,n){var r=new ec(n);try{var a=yc(t,r);return Qw(a,t,r)}catch(i){return u4(i,t,r)}},L$=function(t,n){var r=new ec(n);try{var a=yc(t,r);return Gw(a,t,r)}catch(i){return u4(i,t,r)}},yf={version:"0.16.15",render:s4,renderToString:O$,ParseError:H,SETTINGS_SCHEMA:to,__parse:B$,__renderToDomTree:vc,__renderToHTMLTree:L$,__setFontMetrics:yw,__defineSymbol:c,__defineFunction:Z,__defineMacro:w,__domTree:{Span:il,Anchor:rc,SymbolNode:Kt,SvgNode:jn,PathNode:vr,LineNode:C0}};const q$={};function j$(e){const t=this,n=e||q$,r=t.data(),a=r.micromarkExtensions||(r.micromarkExtensions=[]),i=r.fromMarkdownExtensions||(r.fromMarkdownExtensions=[]),l=r.toMarkdownExtensions||(r.toMarkdownExtensions=[]);a.push(H9(n)),i.push(M9()),l.push(R9(n))}const H$=/[\0-\x1F!-,\.\/:-@\[-\^`\{-\xA9\xAB-\xB4\xB6-\xB9\xBB-\xBF\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0378\u0379\u037E\u0380-\u0385\u0387\u038B\u038D\u03A2\u03F6\u0482\u0530\u0557\u0558\u055A-\u055F\u0589-\u0590\u05BE\u05C0\u05C3\u05C6\u05C8-\u05CF\u05EB-\u05EE\u05F3-\u060F\u061B-\u061F\u066A-\u066D\u06D4\u06DD\u06DE\u06E9\u06FD\u06FE\u0700-\u070F\u074B\u074C\u07B2-\u07BF\u07F6-\u07F9\u07FB\u07FC\u07FE\u07FF\u082E-\u083F\u085C-\u085F\u086B-\u089F\u08B5\u08C8-\u08D2\u08E2\u0964\u0965\u0970\u0984\u098D\u098E\u0991\u0992\u09A9\u09B1\u09B3-\u09B5\u09BA\u09BB\u09C5\u09C6\u09C9\u09CA\u09CF-\u09D6\u09D8-\u09DB\u09DE\u09E4\u09E5\u09F2-\u09FB\u09FD\u09FF\u0A00\u0A04\u0A0B-\u0A0E\u0A11\u0A12\u0A29\u0A31\u0A34\u0A37\u0A3A\u0A3B\u0A3D\u0A43-\u0A46\u0A49\u0A4A\u0A4E-\u0A50\u0A52-\u0A58\u0A5D\u0A5F-\u0A65\u0A76-\u0A80\u0A84\u0A8E\u0A92\u0AA9\u0AB1\u0AB4\u0ABA\u0ABB\u0AC6\u0ACA\u0ACE\u0ACF\u0AD1-\u0ADF\u0AE4\u0AE5\u0AF0-\u0AF8\u0B00\u0B04\u0B0D\u0B0E\u0B11\u0B12\u0B29\u0B31\u0B34\u0B3A\u0B3B\u0B45\u0B46\u0B49\u0B4A\u0B4E-\u0B54\u0B58-\u0B5B\u0B5E\u0B64\u0B65\u0B70\u0B72-\u0B81\u0B84\u0B8B-\u0B8D\u0B91\u0B96-\u0B98\u0B9B\u0B9D\u0BA0-\u0BA2\u0BA5-\u0BA7\u0BAB-\u0BAD\u0BBA-\u0BBD\u0BC3-\u0BC5\u0BC9\u0BCE\u0BCF\u0BD1-\u0BD6\u0BD8-\u0BE5\u0BF0-\u0BFF\u0C0D\u0C11\u0C29\u0C3A-\u0C3C\u0C45\u0C49\u0C4E-\u0C54\u0C57\u0C5B-\u0C5F\u0C64\u0C65\u0C70-\u0C7F\u0C84\u0C8D\u0C91\u0CA9\u0CB4\u0CBA\u0CBB\u0CC5\u0CC9\u0CCE-\u0CD4\u0CD7-\u0CDD\u0CDF\u0CE4\u0CE5\u0CF0\u0CF3-\u0CFF\u0D0D\u0D11\u0D45\u0D49\u0D4F-\u0D53\u0D58-\u0D5E\u0D64\u0D65\u0D70-\u0D79\u0D80\u0D84\u0D97-\u0D99\u0DB2\u0DBC\u0DBE\u0DBF\u0DC7-\u0DC9\u0DCB-\u0DCE\u0DD5\u0DD7\u0DE0-\u0DE5\u0DF0\u0DF1\u0DF4-\u0E00\u0E3B-\u0E3F\u0E4F\u0E5A-\u0E80\u0E83\u0E85\u0E8B\u0EA4\u0EA6\u0EBE\u0EBF\u0EC5\u0EC7\u0ECE\u0ECF\u0EDA\u0EDB\u0EE0-\u0EFF\u0F01-\u0F17\u0F1A-\u0F1F\u0F2A-\u0F34\u0F36\u0F38\u0F3A-\u0F3D\u0F48\u0F6D-\u0F70\u0F85\u0F98\u0FBD-\u0FC5\u0FC7-\u0FFF\u104A-\u104F\u109E\u109F\u10C6\u10C8-\u10CC\u10CE\u10CF\u10FB\u1249\u124E\u124F\u1257\u1259\u125E\u125F\u1289\u128E\u128F\u12B1\u12B6\u12B7\u12BF\u12C1\u12C6\u12C7\u12D7\u1311\u1316\u1317\u135B\u135C\u1360-\u137F\u1390-\u139F\u13F6\u13F7\u13FE-\u1400\u166D\u166E\u1680\u169B-\u169F\u16EB-\u16ED\u16F9-\u16FF\u170D\u1715-\u171F\u1735-\u173F\u1754-\u175F\u176D\u1771\u1774-\u177F\u17D4-\u17D6\u17D8-\u17DB\u17DE\u17DF\u17EA-\u180A\u180E\u180F\u181A-\u181F\u1879-\u187F\u18AB-\u18AF\u18F6-\u18FF\u191F\u192C-\u192F\u193C-\u1945\u196E\u196F\u1975-\u197F\u19AC-\u19AF\u19CA-\u19CF\u19DA-\u19FF\u1A1C-\u1A1F\u1A5F\u1A7D\u1A7E\u1A8A-\u1A8F\u1A9A-\u1AA6\u1AA8-\u1AAF\u1AC1-\u1AFF\u1B4C-\u1B4F\u1B5A-\u1B6A\u1B74-\u1B7F\u1BF4-\u1BFF\u1C38-\u1C3F\u1C4A-\u1C4C\u1C7E\u1C7F\u1C89-\u1C8F\u1CBB\u1CBC\u1CC0-\u1CCF\u1CD3\u1CFB-\u1CFF\u1DFA\u1F16\u1F17\u1F1E\u1F1F\u1F46\u1F47\u1F4E\u1F4F\u1F58\u1F5A\u1F5C\u1F5E\u1F7E\u1F7F\u1FB5\u1FBD\u1FBF-\u1FC1\u1FC5\u1FCD-\u1FCF\u1FD4\u1FD5\u1FDC-\u1FDF\u1FED-\u1FF1\u1FF5\u1FFD-\u203E\u2041-\u2053\u2055-\u2070\u2072-\u207E\u2080-\u208F\u209D-\u20CF\u20F1-\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F-\u215F\u2189-\u24B5\u24EA-\u2BFF\u2C2F\u2C5F\u2CE5-\u2CEA\u2CF4-\u2CFF\u2D26\u2D28-\u2D2C\u2D2E\u2D2F\u2D68-\u2D6E\u2D70-\u2D7E\u2D97-\u2D9F\u2DA7\u2DAF\u2DB7\u2DBF\u2DC7\u2DCF\u2DD7\u2DDF\u2E00-\u2E2E\u2E30-\u3004\u3008-\u3020\u3030\u3036\u3037\u303D-\u3040\u3097\u3098\u309B\u309C\u30A0\u30FB\u3100-\u3104\u3130\u318F-\u319F\u31C0-\u31EF\u3200-\u33FF\u4DC0-\u4DFF\u9FFD-\u9FFF\uA48D-\uA4CF\uA4FE\uA4FF\uA60D-\uA60F\uA62C-\uA63F\uA673\uA67E\uA6F2-\uA716\uA720\uA721\uA789\uA78A\uA7C0\uA7C1\uA7CB-\uA7F4\uA828-\uA82B\uA82D-\uA83F\uA874-\uA87F\uA8C6-\uA8CF\uA8DA-\uA8DF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA954-\uA95F\uA97D-\uA97F\uA9C1-\uA9CE\uA9DA-\uA9DF\uA9FF\uAA37-\uAA3F\uAA4E\uAA4F\uAA5A-\uAA5F\uAA77-\uAA79\uAAC3-\uAADA\uAADE\uAADF\uAAF0\uAAF1\uAAF7-\uAB00\uAB07\uAB08\uAB0F\uAB10\uAB17-\uAB1F\uAB27\uAB2F\uAB5B\uAB6A-\uAB6F\uABEB\uABEE\uABEF\uABFA-\uABFF\uD7A4-\uD7AF\uD7C7-\uD7CA\uD7FC-\uD7FF\uE000-\uF8FF\uFA6E\uFA6F\uFADA-\uFAFF\uFB07-\uFB12\uFB18-\uFB1C\uFB29\uFB37\uFB3D\uFB3F\uFB42\uFB45\uFBB2-\uFBD2\uFD3E-\uFD4F\uFD90\uFD91\uFDC8-\uFDEF\uFDFC-\uFDFF\uFE10-\uFE1F\uFE30-\uFE32\uFE35-\uFE4C\uFE50-\uFE6F\uFE75\uFEFD-\uFF0F\uFF1A-\uFF20\uFF3B-\uFF3E\uFF40\uFF5B-\uFF65\uFFBF-\uFFC1\uFFC8\uFFC9\uFFD0\uFFD1\uFFD8\uFFD9\uFFDD-\uFFFF]|\uD800[\uDC0C\uDC27\uDC3B\uDC3E\uDC4E\uDC4F\uDC5E-\uDC7F\uDCFB-\uDD3F\uDD75-\uDDFC\uDDFE-\uDE7F\uDE9D-\uDE9F\uDED1-\uDEDF\uDEE1-\uDEFF\uDF20-\uDF2C\uDF4B-\uDF4F\uDF7B-\uDF7F\uDF9E\uDF9F\uDFC4-\uDFC7\uDFD0\uDFD6-\uDFFF]|\uD801[\uDC9E\uDC9F\uDCAA-\uDCAF\uDCD4-\uDCD7\uDCFC-\uDCFF\uDD28-\uDD2F\uDD64-\uDDFF\uDF37-\uDF3F\uDF56-\uDF5F\uDF68-\uDFFF]|\uD802[\uDC06\uDC07\uDC09\uDC36\uDC39-\uDC3B\uDC3D\uDC3E\uDC56-\uDC5F\uDC77-\uDC7F\uDC9F-\uDCDF\uDCF3\uDCF6-\uDCFF\uDD16-\uDD1F\uDD3A-\uDD7F\uDDB8-\uDDBD\uDDC0-\uDDFF\uDE04\uDE07-\uDE0B\uDE14\uDE18\uDE36\uDE37\uDE3B-\uDE3E\uDE40-\uDE5F\uDE7D-\uDE7F\uDE9D-\uDEBF\uDEC8\uDEE7-\uDEFF\uDF36-\uDF3F\uDF56-\uDF5F\uDF73-\uDF7F\uDF92-\uDFFF]|\uD803[\uDC49-\uDC7F\uDCB3-\uDCBF\uDCF3-\uDCFF\uDD28-\uDD2F\uDD3A-\uDE7F\uDEAA\uDEAD-\uDEAF\uDEB2-\uDEFF\uDF1D-\uDF26\uDF28-\uDF2F\uDF51-\uDFAF\uDFC5-\uDFDF\uDFF7-\uDFFF]|\uD804[\uDC47-\uDC65\uDC70-\uDC7E\uDCBB-\uDCCF\uDCE9-\uDCEF\uDCFA-\uDCFF\uDD35\uDD40-\uDD43\uDD48-\uDD4F\uDD74\uDD75\uDD77-\uDD7F\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDFF\uDE12\uDE38-\uDE3D\uDE3F-\uDE7F\uDE87\uDE89\uDE8E\uDE9E\uDEA9-\uDEAF\uDEEB-\uDEEF\uDEFA-\uDEFF\uDF04\uDF0D\uDF0E\uDF11\uDF12\uDF29\uDF31\uDF34\uDF3A\uDF45\uDF46\uDF49\uDF4A\uDF4E\uDF4F\uDF51-\uDF56\uDF58-\uDF5C\uDF64\uDF65\uDF6D-\uDF6F\uDF75-\uDFFF]|\uD805[\uDC4B-\uDC4F\uDC5A-\uDC5D\uDC62-\uDC7F\uDCC6\uDCC8-\uDCCF\uDCDA-\uDD7F\uDDB6\uDDB7\uDDC1-\uDDD7\uDDDE-\uDDFF\uDE41-\uDE43\uDE45-\uDE4F\uDE5A-\uDE7F\uDEB9-\uDEBF\uDECA-\uDEFF\uDF1B\uDF1C\uDF2C-\uDF2F\uDF3A-\uDFFF]|\uD806[\uDC3B-\uDC9F\uDCEA-\uDCFE\uDD07\uDD08\uDD0A\uDD0B\uDD14\uDD17\uDD36\uDD39\uDD3A\uDD44-\uDD4F\uDD5A-\uDD9F\uDDA8\uDDA9\uDDD8\uDDD9\uDDE2\uDDE5-\uDDFF\uDE3F-\uDE46\uDE48-\uDE4F\uDE9A-\uDE9C\uDE9E-\uDEBF\uDEF9-\uDFFF]|\uD807[\uDC09\uDC37\uDC41-\uDC4F\uDC5A-\uDC71\uDC90\uDC91\uDCA8\uDCB7-\uDCFF\uDD07\uDD0A\uDD37-\uDD39\uDD3B\uDD3E\uDD48-\uDD4F\uDD5A-\uDD5F\uDD66\uDD69\uDD8F\uDD92\uDD99-\uDD9F\uDDAA-\uDEDF\uDEF7-\uDFAF\uDFB1-\uDFFF]|\uD808[\uDF9A-\uDFFF]|\uD809[\uDC6F-\uDC7F\uDD44-\uDFFF]|[\uD80A\uD80B\uD80E-\uD810\uD812-\uD819\uD824-\uD82B\uD82D\uD82E\uD830-\uD833\uD837\uD839\uD83D\uD83F\uD87B-\uD87D\uD87F\uD885-\uDB3F\uDB41-\uDBFF][\uDC00-\uDFFF]|\uD80D[\uDC2F-\uDFFF]|\uD811[\uDE47-\uDFFF]|\uD81A[\uDE39-\uDE3F\uDE5F\uDE6A-\uDECF\uDEEE\uDEEF\uDEF5-\uDEFF\uDF37-\uDF3F\uDF44-\uDF4F\uDF5A-\uDF62\uDF78-\uDF7C\uDF90-\uDFFF]|\uD81B[\uDC00-\uDE3F\uDE80-\uDEFF\uDF4B-\uDF4E\uDF88-\uDF8E\uDFA0-\uDFDF\uDFE2\uDFE5-\uDFEF\uDFF2-\uDFFF]|\uD821[\uDFF8-\uDFFF]|\uD823[\uDCD6-\uDCFF\uDD09-\uDFFF]|\uD82C[\uDD1F-\uDD4F\uDD53-\uDD63\uDD68-\uDD6F\uDEFC-\uDFFF]|\uD82F[\uDC6B-\uDC6F\uDC7D-\uDC7F\uDC89-\uDC8F\uDC9A-\uDC9C\uDC9F-\uDFFF]|\uD834[\uDC00-\uDD64\uDD6A-\uDD6C\uDD73-\uDD7A\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDE41\uDE45-\uDFFF]|\uD835[\uDC55\uDC9D\uDCA0\uDCA1\uDCA3\uDCA4\uDCA7\uDCA8\uDCAD\uDCBA\uDCBC\uDCC4\uDD06\uDD0B\uDD0C\uDD15\uDD1D\uDD3A\uDD3F\uDD45\uDD47-\uDD49\uDD51\uDEA6\uDEA7\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3\uDFCC\uDFCD]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85-\uDE9A\uDEA0\uDEB0-\uDFFF]|\uD838[\uDC07\uDC19\uDC1A\uDC22\uDC25\uDC2B-\uDCFF\uDD2D-\uDD2F\uDD3E\uDD3F\uDD4A-\uDD4D\uDD4F-\uDEBF\uDEFA-\uDFFF]|\uD83A[\uDCC5-\uDCCF\uDCD7-\uDCFF\uDD4C-\uDD4F\uDD5A-\uDFFF]|\uD83B[\uDC00-\uDDFF\uDE04\uDE20\uDE23\uDE25\uDE26\uDE28\uDE33\uDE38\uDE3A\uDE3C-\uDE41\uDE43-\uDE46\uDE48\uDE4A\uDE4C\uDE50\uDE53\uDE55\uDE56\uDE58\uDE5A\uDE5C\uDE5E\uDE60\uDE63\uDE65\uDE66\uDE6B\uDE73\uDE78\uDE7D\uDE7F\uDE8A\uDE9C-\uDEA0\uDEA4\uDEAA\uDEBC-\uDFFF]|\uD83C[\uDC00-\uDD2F\uDD4A-\uDD4F\uDD6A-\uDD6F\uDD8A-\uDFFF]|\uD83E[\uDC00-\uDFEF\uDFFA-\uDFFF]|\uD869[\uDEDE-\uDEFF]|\uD86D[\uDF35-\uDF3F]|\uD86E[\uDC1E\uDC1F]|\uD873[\uDEA2-\uDEAF]|\uD87A[\uDFE1-\uDFFF]|\uD87E[\uDE1E-\uDFFF]|\uD884[\uDF4B-\uDFFF]|\uDB40[\uDC00-\uDCFF\uDDF0-\uDFFF]/g,U$=Object.hasOwnProperty;class W${constructor(){this.occurrences,this.reset()}slug(t,n){const r=this;let a=V$(t,n===!0);const i=a;for(;U$.call(r.occurrences,a);)r.occurrences[i]++,a=i+"-"+r.occurrences[i];return r.occurrences[a]=0,a}reset(){this.occurrences=Object.create(null)}}function V$(e,t){return typeof e!="string"?"":(t||(e=e.toLowerCase()),e.replace(H$,"").replace(/ /g,"-"))}function K$(e){const t=e.type==="element"?e.tagName.toLowerCase():"",n=t.length===2&&t.charCodeAt(0)===104?t.charCodeAt(1):0;return n>48&&n<55?n-48:void 0}function Q$(e){return"children"in e?h4(e):"value"in e?e.value:""}function G$(e){return e.type==="text"?e.value:"children"in e?h4(e):""}function h4(e){let t=-1;const n=[];for(;++t<e.children.length;)n[t]=G$(e.children[t]);return n.join("")}const Z$={},vf=new W$;function X$(e){const n=(e||Z$).prefix||"";return function(r){vf.reset(),Yh(r,"element",function(a){K$(a)&&!a.properties.id&&(a.properties.id=n+vf.slug(Q$(a)))})}}const xf=/[#.]/g;function Y$(e,t){const n=e||"",r={};let a=0,i,l;for(;a<n.length;){xf.lastIndex=a;const o=xf.exec(n),s=n.slice(a,o?o.index:n.length);s&&(i?i==="#"?r.id=s:Array.isArray(r.className)?r.className.push(s):r.className=[s]:l=s,a+=s.length),o&&(i=o[0],a++)}return{type:"element",tagName:l||t||"div",properties:r,children:[]}}const N0={}.hasOwnProperty;function c4(e,t,n){const r=n&&nk(n);function a(i,l,...o){let s=-1,u;if(i==null){u={type:"root",children:[]};const h=l;o.unshift(h)}else if(u=Y$(i,t),u.tagName=u.tagName.toLowerCase(),r&&N0.call(r,u.tagName)&&(u.tagName=r[u.tagName]),J$(l))o.unshift(l);else{let h;for(h in l)N0.call(l,h)&&ek(e,u.properties,h,l[h])}for(;++s<o.length;)M0(u.children,o[s]);return u.type==="element"&&u.tagName==="template"&&(u.content={type:"root",children:u.children},u.children=[]),u}return a}function J$(e){if(e===null||typeof e!="object"||Array.isArray(e))return!0;if(typeof e.type!="string")return!1;const t=e,n=Object.keys(e);for(const r of n){const a=t[r];if(a&&typeof a=="object"){if(!Array.isArray(a))return!0;const i=a;for(const l of i)if(typeof l!="number"&&typeof l!="string")return!0}}return!!("children"in e&&Array.isArray(e.children))}function ek(e,t,n,r){const a=Ib(e,n);let i=-1,l;if(r!=null){if(typeof r=="number"){if(Number.isNaN(r))return;l=r}else typeof r=="boolean"?l=r:typeof r=="string"?a.spaceSeparated?l=Gm(r):a.commaSeparated?l=Um(r):a.commaOrSpaceSeparated?l=Gm(Um(r).join(" ")):l=wf(a,a.property,r):Array.isArray(r)?l=r.concat():l=a.property==="style"?tk(r):String(r);if(Array.isArray(l)){const o=[];for(;++i<l.length;){const s=wf(a,a.property,l[i]);o[i]=s}l=o}if(a.property==="className"&&Array.isArray(t.className)){const o=l;l=t.className.concat(o)}t[a.property]=l}}function M0(e,t){let n=-1;if(t!=null)if(typeof t=="string"||typeof t=="number")e.push({type:"text",value:String(t)});else if(Array.isArray(t))for(;++n<t.length;)M0(e,t[n]);else if(typeof t=="object"&&"type"in t)t.type==="root"?M0(e,t.children):e.push(t);else throw new Error("Expected node, nodes, or string, got `"+t+"`")}function wf(e,t,n){if(typeof n=="string"){if(e.number&&n&&!Number.isNaN(Number(n)))return Number(n);if((e.boolean||e.overloadedBoolean)&&(n===""||Ui(n)===Ui(t)))return!0}return n}function tk(e){const t=[];let n;for(n in e)N0.call(e,n)&&t.push([n,e[n]].join(": "));return t.join("; ")}function nk(e){const t={};let n=-1;for(;++n<e.length;)t[e[n].toLowerCase()]=e[n];return t}const rk=["altGlyph","altGlyphDef","altGlyphItem","animateColor","animateMotion","animateTransform","clipPath","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","foreignObject","glyphRef","linearGradient","radialGradient","solidColor","textArea","textPath"],ak=c4(Ob,"div"),ik=c4(as,"g",rk),yu={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function lk(e,t){return m4(e,{})||{type:"root",children:[]}}function m4(e,t){const n=ok(e,t);return n&&t.afterTransform&&t.afterTransform(e,n),n}function ok(e,t){switch(e.nodeType){case 1:return ck(e,t);case 3:return uk(e);case 8:return hk(e);case 9:return $f(e,t);case 10:return sk();case 11:return $f(e,t);default:return}}function $f(e,t){return{type:"root",children:d4(e,t)}}function sk(){return{type:"doctype"}}function uk(e){return{type:"text",value:e.nodeValue||""}}function hk(e){return{type:"comment",value:e.nodeValue||""}}function ck(e,t){const n=e.namespaceURI,r=n===yu.svg?ik:ak,a=n===yu.html?e.tagName.toLowerCase():e.tagName,i=n===yu.html&&a==="template"?e.content:e,l=e.getAttributeNames(),o={};let s=-1;for(;++s<l.length;)o[l[s]]=e.getAttribute(l[s])||"";return r(a,o,d4(i,t))}function d4(e,t){const n=e.childNodes,r=[];let a=-1;for(;++a<n.length;){const i=m4(n[a],t);i!==void 0&&r.push(i)}return r}new DOMParser;function mk(e,t){const n=dk(e);return lk(n)}function dk(e){const t=document.createElement("template");return t.innerHTML=e,t.content}const kf=function(e,t,n){const r=Xh(n);if(!e||!e.type||!e.children)throw new Error("Expected parent node");if(typeof t=="number"){if(t<0||t===Number.POSITIVE_INFINITY)throw new Error("Expected positive finite number as index")}else if(t=e.children.indexOf(t),t<0)throw new Error("Expected child node or index");for(;++t<e.children.length;)if(r(e.children[t],t,e))return e.children[t]},Gr=function(e){if(e==null)return bk;if(typeof e=="string")return pk(e);if(typeof e=="object")return fk(e);if(typeof e=="function")return xc(e);throw new Error("Expected function, string, or array as `test`")};function fk(e){const t=[];let n=-1;for(;++n<e.length;)t[n]=Gr(e[n]);return xc(r);function r(...a){let i=-1;for(;++i<t.length;)if(t[i].apply(this,a))return!0;return!1}}function pk(e){return xc(t);function t(n){return n.tagName===e}}function xc(e){return t;function t(n,r,a){return!!(gk(n)&&e.call(this,n,typeof r=="number"?r:void 0,a||void 0))}}function bk(e){return!!(e&&typeof e=="object"&&"type"in e&&e.type==="element"&&"tagName"in e&&typeof e.tagName=="string")}function gk(e){return e!==null&&typeof e=="object"&&"type"in e&&"tagName"in e}const _f=/\n/g,Sf=/[\t ]+/g,R0=Gr("br"),Df=Gr(Sk),yk=Gr("p"),Cf=Gr("tr"),vk=Gr(["datalist","head","noembed","noframes","noscript","rp","script","style","template","title",_k,Dk]),f4=Gr(["address","article","aside","blockquote","body","caption","center","dd","dialog","dir","dl","dt","div","figure","figcaption","footer","form,","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","legend","li","listing","main","menu","nav","ol","p","plaintext","pre","section","ul","xmp"]);function xk(e,t){const n=t||{},r="children"in e?e.children:[],a=f4(e),i=g4(e,{whitespace:n.whitespace||"normal",breakBefore:!1,breakAfter:!1}),l=[];(e.type==="text"||e.type==="comment")&&l.push(...b4(e,{whitespace:i,breakBefore:!0,breakAfter:!0}));let o=-1;for(;++o<r.length;)l.push(...p4(r[o],e,{whitespace:i,breakBefore:o?void 0:a,breakAfter:o<r.length-1?R0(r[o+1]):a}));const s=[];let u;for(o=-1;++o<l.length;){const h=l[o];typeof h=="number"?u!==void 0&&h>u&&(u=h):h&&(u!==void 0&&u>-1&&s.push(`
`.repeat(u)||" "),u=-1,s.push(h))}return s.join("")}function p4(e,t,n){return e.type==="element"?wk(e,t,n):e.type==="text"?n.whitespace==="normal"?b4(e,n):$k(e):[]}function wk(e,t,n){const r=g4(e,n),a=e.children||[];let i=-1,l=[];if(vk(e))return l;let o,s;for(R0(e)||Cf(e)&&kf(t,e,Cf)?s=`
`:yk(e)?(o=2,s=2):f4(e)&&(o=1,s=1);++i<a.length;)l=l.concat(p4(a[i],e,{whitespace:r,breakBefore:i?void 0:o,breakAfter:i<a.length-1?R0(a[i+1]):s}));return Df(e)&&kf(t,e,Df)&&l.push("	"),o&&l.unshift(o),s&&l.push(s),l}function b4(e,t){const n=String(e.value),r=[],a=[];let i=0;for(;i<=n.length;){_f.lastIndex=i;const s=_f.exec(n),u=s&&"index"in s?s.index:n.length;r.push(kk(n.slice(i,u).replace(/[\u061C\u200E\u200F\u202A-\u202E\u2066-\u2069]/g,""),i===0?t.breakBefore:!0,u===n.length?t.breakAfter:!0)),i=u+1}let l=-1,o;for(;++l<r.length;)r[l].charCodeAt(r[l].length-1)===8203||l<r.length-1&&r[l+1].charCodeAt(0)===8203?(a.push(r[l]),o=void 0):r[l]?(typeof o=="number"&&a.push(o),a.push(r[l]),o=0):(l===0||l===r.length-1)&&a.push(0);return a}function $k(e){return[String(e.value)]}function kk(e,t,n){const r=[];let a=0,i;for(;a<e.length;){Sf.lastIndex=a;const l=Sf.exec(e);i=l?l.index:e.length,!a&&!i&&l&&!t&&r.push(""),a!==i&&r.push(e.slice(a,i)),a=l?i+l[0].length:i}return a!==i&&!n&&r.push(""),r.join(" ")}function g4(e,t){if(e.type==="element"){const n=e.properties||{};switch(e.tagName){case"listing":case"plaintext":case"xmp":return"pre";case"nobr":return"nowrap";case"pre":return n.wrap?"pre-wrap":"pre";case"td":case"th":return n.noWrap?"nowrap":t.whitespace;case"textarea":return"pre-wrap"}}return t.whitespace}function _k(e){return!!(e.properties||{}).hidden}function Sk(e){return e.tagName==="td"||e.tagName==="th"}function Dk(e){return e.tagName==="dialog"&&!(e.properties||{}).open}const Ck={},Ek=[];function zk(e){const t=e||Ck;return function(n,r){mg(n,"element",function(a,i){const l=Array.isArray(a.properties.className)?a.properties.className:Ek,o=l.includes("language-math"),s=l.includes("math-display"),u=l.includes("math-inline");let h=s;if(!o&&!s&&!u)return;let m=i[i.length-1],f=a;if(a.tagName==="code"&&o&&m&&m.type==="element"&&m.tagName==="pre"&&(f=m,m=i[i.length-2],h=!0),!m)return;const p=xk(f,{whitespace:"pre"});let v;try{v=yf.renderToString(p,{...t,displayMode:h,throwOnError:!0})}catch(S){const g=S,y=g.name.toLowerCase();r.message("Could not render math with KaTeX",{ancestors:[...i,a],cause:g,place:a.position,ruleId:y,source:"rehype-katex"});try{v=yf.renderToString(p,{...t,displayMode:h,strict:"ignore",throwOnError:!1})}catch{v=[{type:"element",tagName:"span",properties:{className:["katex-error"],style:"color:"+(t.errorColor||"#cc0000"),title:String(S)},children:[{type:"text",value:p}]}]}}typeof v=="string"&&(v=mk(v).children);const x=m.children.indexOf(f);return m.children.splice(x,1,...v),cg})}}const Fk=({content:e})=>{const[t,n]=A.useState([]),[r,a]=A.useState(!1),i=es(),l=un();A.useEffect(()=>{const m=document.querySelectorAll("h1, h2, h3, h4, h5, h6"),f=Array.from(m).map(v=>({id:v.id,text:v.textContent||"",level:parseInt(v.tagName[1])})),p=s(f);n(p)},[e]);const o=m=>{const f=document.getElementById(m);if(f){f.scrollIntoView({behavior:"smooth"}),a(!1);const p=new URLSearchParams(l.search);p.set("scrollTo",m),i(`${l.pathname}?${p.toString()}`,{replace:!0})}},s=m=>{const f=[],p=[];return m.forEach(v=>{for(;p.length>0&&v.level<=p[p.length-1].level;)p.pop();if(p.length===0)f.push(v),p.push(v);else{const x=p[p.length-1];x.children||(x.children=[]),x.children.push(v),p.push(v)}}),f},u=m=>N.jsx("ul",{className:"space-y-1",children:m.map(f=>N.jsxs("li",{children:[N.jsx("div",{className:`cursor-pointer hover:bg-accent rounded-md p-2 transition-colors
                ${h(f.level)}`,onClick:()=>o(f.id),children:N.jsx("span",{className:"truncate",children:f.text})}),f.children&&u(f.children)]},f.id))}),h=m=>{switch(m){case 1:return"text-lg font-bold pl-0";case 2:return"text-base pl-4";case 3:return"text-sm pl-8";default:return"text-xs pl-12"}};return A.useEffect(()=>{const m=()=>{};return window.addEventListener("scroll",m),()=>window.removeEventListener("scroll",m)},[]),N.jsx("div",{className:"fixed right-4 top-1/2 -translate-y-1/2 z-50",children:N.jsxs("div",{className:`relative transition-all duration-300 ${r?"w-64":"w-auto"}`,children:[N.jsx(ka,{variant:"default",className:"bg-sky-900 hover:bg-sky-600 rounded-full shadow-lg absolute right-0",onClick:()=>a(!r),children:N.jsx(_b,{className:"h-4 w-4"})}),r&&N.jsxs("div",{className:`ml-4 bg-background rounded-lg shadow-xl p-4 w-64 h-[70vh] flex flex-col 
            border border-gray-200 absolute right-full top-0`,children:[N.jsx("h3",{className:"text-lg font-bold mb-4",children:"目录导航"}),N.jsx("div",{className:"flex-1 overflow-y-auto",children:u(t)})]})]})})},Ak=({children:e})=>{const t=un(),n=es();return A.useEffect(()=>{const r=a=>{let i=a.target;for(;i&&i.tagName!=="A";)i=i.parentElement;if((i==null?void 0:i.tagName)==="A"){const l=i.getAttribute("href");if(l!=null&&l.startsWith("#")&&!l.startsWith("#/")){a.preventDefault();const o=l.slice(1),s=document.getElementById(o);if(s){s.scrollIntoView({behavior:"smooth"});const u=new URLSearchParams(t.search);u.set("scrollTo",o),n(`${t.pathname}?${u.toString()}`,{replace:!0})}}}};return document.addEventListener("click",r,!0),()=>document.removeEventListener("click",r,!0)},[t,n]),A.useEffect(()=>{const a=new URLSearchParams(t.search).get("scrollTo");if(a){const i=document.getElementById(a);i&&i.scrollIntoView({behavior:"smooth"})}},[t.search]),N.jsx("div",{className:"markdown-content",children:e})},Tk=()=>e=>{const t=[];let n=[],r=null;const a=e;if(a.children.forEach(i=>{if(i.type==="heading"){const l=i;if(n.length>0){const o={type:"element",tagName:"div",properties:{className:[`section-level-${r}`]},children:n};t.push(o),n=[]}r=l.depth,n.push(i)}else n.push(i)}),n.length>0){const i={type:"element",tagName:"div",properties:{className:[`section-level-${r}`]},children:n};t.push(i)}a.children=t},Ef=Object.assign({"../posts/A0_1.md":K5,"../posts/A0_2.md":Q5,"../posts/CD_1.md":G5,"../posts/CD_2.md":Z5,"../posts/CD_3.md":X5,"../posts/CD_4.md":Y5,"../posts/CD_5.md":J5,"../posts/EC_1.md":e6,"../posts/EC_2.md":t6,"../posts/EC_3.md":n6,"../posts/EC_4.md":r6,"../posts/EC_5.md":a6,"../posts/QC_1.md":i6,"../posts/QC_2.md":l6,"../posts/QC_3.md":o6,"../posts/QC_4.md":s6,"../posts/post1.md":u6}),Pk=()=>{const{id:e}=P3(),t=Yl.find(a=>a.id===Number(e));if(!t)return N.jsx("div",{className:"container mx-auto mt-10 pt-16",children:N.jsx("h2",{className:"text-2xl font-bold text-sky-100",children:"404 NOT FOUND"})});const n={};for(const a in Ef){const i=Ef[a],l=a.match(/\/([a-zA-Z0-9_-]+)\.md$/);if(l){const o=l[1];n[o]=i}}const r=n[t.contentKey];return r?N.jsxs("div",{className:"relative",children:[N.jsx(Fk,{content:r}),N.jsxs("div",{className:"container mx-auto mt-10 p-6 bg-sky-100 rounded-lg shadow pt-16 w-3/4",children:[N.jsx("h1",{className:"text-3xl font-bold mb-4 text-sky-950",children:t.title}),N.jsxs("div",{className:"text-sm text-sky-950 mb-4",children:[t.date," • ",t.author]}),N.jsx(Ak,{content:r,children:N.jsx("div",{className:"prose prose-sky max-w-full",children:N.jsx(T9,{remarkPlugins:[j$,Tk],rehypePlugins:[zk,X$],children:r})})})]})]}):N.jsx("div",{className:"container mx-auto mt-10 pt-16",children:N.jsx("h2",{className:"text-2xl font-bold text-sky-100",children:"Content Not Found"})})},Nk=()=>N.jsxs("div",{children:[N.jsx("div",{className:"mx-auto w-1/2 mt-10 p-6 bg-sky-100 rounded-lg shadow",children:N.jsx("a",{href:"https://www.cameudis.com/",className:`font-bold mb-0.5 text-sky-900
            text-xl
            sm:text-xl
            lg:text-3xl
            `,children:"Cameudis"})}),N.jsxs("div",{className:"mx-auto w-1/2 mt-10 p-6 bg-sky-100 rounded-lg shadow",children:[N.jsxs("div",{className:"flex items-center",children:[N.jsx("div",{className:` rounded-full overflow-hidden
          w-8 h-8 mr-3
          sm:w-8 sm:h-8 sm:mr-3
          lg:w-16 lg:h-16 lg:mr-6
          `,children:N.jsx("a",{href:"https://icelava.top",children:N.jsx("img",{src:"https://icelava.top/FkLog/@icon/icelava.jpg",alt:"Circular Image",className:"w-full h-full object-cover"})})}),N.jsx("a",{href:"https://icelava.top",className:`font-bold mb-0.5 text-sky-900
            text-xl
            sm:text-xl
            lg:text-3xl
            `,children:"IceLava Top"})]}),N.jsx("p",{className:`mt-4 mx-1 text-sky-900 leading-7
        text-sm
        sm:text-sm
        lg:text-base
        `,children:"No Code No Life"})]}),N.jsx("div",{className:"mx-auto w-1/2 mt-10 p-6 bg-sky-100 rounded-lg shadow",children:N.jsx("a",{href:"https://blog.iin0.cn/",className:`font-bold mb-0.5 text-sky-900
            text-xl
            sm:text-xl
            lg:text-3xl
            `,children:"暮色音铃"})}),N.jsx("div",{className:"mx-auto w-1/2 mt-10 p-6 bg-sky-100 rounded-lg shadow",children:N.jsx("a",{href:"https://www.sapium.site/wordpress/",className:`font-bold mb-0.5 text-sky-900
            text-xl
            sm:text-xl
            lg:text-3xl
            `,children:"乌桕Sapium"})})]}),Mk=()=>{const{fontToggle:e}=xb(),t=["xd.png","fl.png","pr.png","vs.png","blender.png","rd.png","bp.png","sai.png","au.png","pc.png","ps.png","ds.png","unity.png","vsc.png","rr.png","ae.png","mma.png","cl.png"],n=3,r=Math.ceil(t.length/n),a=Array.from({length:n},(l,o)=>t.slice(o*r,(o+1)*r)),i=e?"/ico/pixel":"/ico/common";return N.jsx("div",{children:N.jsx("div",{className:"overflow-hidden",children:a.map((l,o)=>N.jsx("div",{className:`flex whitespace-nowrap my-4 ${o%2===0?"animate-scroll-left":"animate-scroll-right"}`,style:{"--animation-duration":`${300+o*5}s`},children:[...l,...l,...l,...l,...l,...l,...l,...l].map((s,u)=>N.jsx("img",{src:`${i}/${s}`,alt:s,className:"w-40 h-40 object-cover mx-2"},u))},o))})})},Rk=()=>N.jsxs("div",{className:"container mx-auto mt-10",children:[N.jsx("h1",{className:`font-bold mb-8 text-center text-sky-100
      text-5xl
      sm:text-5xl
      lg:text-6xl
      `,children:"This is Luna's world."}),N.jsx(Mk,{})]});function Ik(){return N.jsx(C5,{children:N.jsxs("div",{className:"flex flex-col w-screen min-h-screen bg-sky-600",children:[N.jsx(E5,{}),N.jsx("main",{className:"flex-grow",children:N.jsxs(G3,{children:[N.jsx(ra,{path:"/",element:N.jsx(W5,{})}),N.jsx(ra,{path:"/warp",element:N.jsx(Nk,{})}),N.jsx(ra,{path:"/show",element:N.jsx(Rk,{})}),N.jsx(ra,{path:"/about",element:N.jsx(V5,{})}),N.jsx(ra,{path:"/posts/:id",element:N.jsx(Pk,{})})]})}),N.jsx(z5,{})]})})}vu.createRoot(document.getElementById("root")).render(N.jsx(Lf.StrictMode,{children:N.jsx(vv,{children:N.jsx(Ik,{})})}));
