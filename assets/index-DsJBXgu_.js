(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=n(i);fetch(i.href,a)}})();var wc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function zf(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Pf={exports:{}},ql={},Af={exports:{}},fe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Va=Symbol.for("react.element"),_y=Symbol.for("react.portal"),ky=Symbol.for("react.fragment"),Sy=Symbol.for("react.strict_mode"),Ey=Symbol.for("react.profiler"),Cy=Symbol.for("react.provider"),Dy=Symbol.for("react.context"),zy=Symbol.for("react.forward_ref"),Py=Symbol.for("react.suspense"),Ay=Symbol.for("react.memo"),Ty=Symbol.for("react.lazy"),_c=Symbol.iterator;function Fy(e){return e===null||typeof e!="object"?null:(e=_c&&e[_c]||e["@@iterator"],typeof e=="function"?e:null)}var Tf={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ff=Object.assign,Nf={};function Mi(e,t,n){this.props=e,this.context=t,this.refs=Nf,this.updater=n||Tf}Mi.prototype.isReactComponent={};Mi.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Mi.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Mf(){}Mf.prototype=Mi.prototype;function q0(e,t,n){this.props=e,this.context=t,this.refs=Nf,this.updater=n||Tf}var I0=q0.prototype=new Mf;I0.constructor=q0;Ff(I0,Mi.prototype);I0.isPureReactComponent=!0;var kc=Array.isArray,Rf=Object.prototype.hasOwnProperty,B0={current:null},qf={key:!0,ref:!0,__self:!0,__source:!0};function If(e,t,n){var r,i={},a=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(a=""+t.key),t)Rf.call(t,r)&&!qf.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var s=Array(l),u=0;u<l;u++)s[u]=arguments[u+2];i.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Va,type:e,key:a,ref:o,props:i,_owner:B0.current}}function Ny(e,t){return{$$typeof:Va,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function L0(e){return typeof e=="object"&&e!==null&&e.$$typeof===Va}function My(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Sc=/\/+/g;function gs(e,t){return typeof e=="object"&&e!==null&&e.key!=null?My(""+e.key):t.toString(36)}function Io(e,t,n,r,i){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(a){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case Va:case _y:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+gs(o,0):r,kc(i)?(n="",e!=null&&(n=e.replace(Sc,"$&/")+"/"),Io(i,t,n,"",function(u){return u})):i!=null&&(L0(i)&&(i=Ny(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Sc,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=r===""?".":r+":",kc(e))for(var l=0;l<e.length;l++){a=e[l];var s=r+gs(a,l);o+=Io(a,t,n,s,i)}else if(s=Fy(e),typeof s=="function")for(e=s.call(e),l=0;!(a=e.next()).done;)a=a.value,s=r+gs(a,l++),o+=Io(a,t,n,s,i);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function lo(e,t,n){if(e==null)return e;var r=[],i=0;return Io(e,r,"","",function(a){return t.call(n,a,i++)}),r}function Ry(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ft={current:null},Bo={transition:null},qy={ReactCurrentDispatcher:ft,ReactCurrentBatchConfig:Bo,ReactCurrentOwner:B0};function Bf(){throw Error("act(...) is not supported in production builds of React.")}fe.Children={map:lo,forEach:function(e,t,n){lo(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return lo(e,function(){t++}),t},toArray:function(e){return lo(e,function(t){return t})||[]},only:function(e){if(!L0(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};fe.Component=Mi;fe.Fragment=ky;fe.Profiler=Ey;fe.PureComponent=q0;fe.StrictMode=Sy;fe.Suspense=Py;fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=qy;fe.act=Bf;fe.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Ff({},e.props),i=e.key,a=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,o=B0.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)Rf.call(t,s)&&!qf.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&l!==void 0?l[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){l=Array(s);for(var u=0;u<s;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:Va,type:e.type,key:i,ref:a,props:r,_owner:o}};fe.createContext=function(e){return e={$$typeof:Dy,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Cy,_context:e},e.Consumer=e};fe.createElement=If;fe.createFactory=function(e){var t=If.bind(null,e);return t.type=e,t};fe.createRef=function(){return{current:null}};fe.forwardRef=function(e){return{$$typeof:zy,render:e}};fe.isValidElement=L0;fe.lazy=function(e){return{$$typeof:Ty,_payload:{_status:-1,_result:e},_init:Ry}};fe.memo=function(e,t){return{$$typeof:Ay,type:e,compare:t===void 0?null:t}};fe.startTransition=function(e){var t=Bo.transition;Bo.transition={};try{e()}finally{Bo.transition=t}};fe.unstable_act=Bf;fe.useCallback=function(e,t){return ft.current.useCallback(e,t)};fe.useContext=function(e){return ft.current.useContext(e)};fe.useDebugValue=function(){};fe.useDeferredValue=function(e){return ft.current.useDeferredValue(e)};fe.useEffect=function(e,t){return ft.current.useEffect(e,t)};fe.useId=function(){return ft.current.useId()};fe.useImperativeHandle=function(e,t,n){return ft.current.useImperativeHandle(e,t,n)};fe.useInsertionEffect=function(e,t){return ft.current.useInsertionEffect(e,t)};fe.useLayoutEffect=function(e,t){return ft.current.useLayoutEffect(e,t)};fe.useMemo=function(e,t){return ft.current.useMemo(e,t)};fe.useReducer=function(e,t,n){return ft.current.useReducer(e,t,n)};fe.useRef=function(e){return ft.current.useRef(e)};fe.useState=function(e){return ft.current.useState(e)};fe.useSyncExternalStore=function(e,t,n){return ft.current.useSyncExternalStore(e,t,n)};fe.useTransition=function(){return ft.current.useTransition()};fe.version="18.3.1";Af.exports=fe;var A=Af.exports;const Lf=zf(A);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Iy=A,By=Symbol.for("react.element"),Ly=Symbol.for("react.fragment"),Oy=Object.prototype.hasOwnProperty,jy=Iy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Hy={key:!0,ref:!0,__self:!0,__source:!0};function Of(e,t,n){var r,i={},a=null,o=null;n!==void 0&&(a=""+n),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)Oy.call(t,r)&&!Hy.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:By,type:e,key:a,ref:o,props:i,_owner:jy.current}}ql.Fragment=Ly;ql.jsx=Of;ql.jsxs=Of;Pf.exports=ql;var N=Pf.exports,vu={},jf={exports:{}},Nt={},Hf={exports:{}},Wf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(U,J){var _=U.length;U.push(J);e:for(;0<_;){var ne=_-1>>>1,ce=U[ne];if(0<i(ce,J))U[ne]=J,U[_]=ce,_=ne;else break e}}function n(U){return U.length===0?null:U[0]}function r(U){if(U.length===0)return null;var J=U[0],_=U.pop();if(_!==J){U[0]=_;e:for(var ne=0,ce=U.length,C=ce>>>1;ne<C;){var Ne=2*(ne+1)-1,Ye=U[Ne],_e=Ne+1,et=U[_e];if(0>i(Ye,_))_e<ce&&0>i(et,Ye)?(U[ne]=et,U[_e]=_,ne=_e):(U[ne]=Ye,U[Ne]=_,ne=Ne);else if(_e<ce&&0>i(et,_))U[ne]=et,U[_e]=_,ne=_e;else break e}}return J}function i(U,J){var _=U.sortIndex-J.sortIndex;return _!==0?_:U.id-J.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,l=o.now();e.unstable_now=function(){return o.now()-l}}var s=[],u=[],h=1,m=null,p=3,f=!1,v=!1,$=!1,k=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,y=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function w(U){for(var J=n(u);J!==null;){if(J.callback===null)r(u);else if(J.startTime<=U)r(u),J.sortIndex=J.expirationTime,t(s,J);else break;J=n(u)}}function P(U){if($=!1,w(U),!v)if(n(s)!==null)v=!0,be(F);else{var J=n(u);J!==null&&ve(P,J.startTime-U)}}function F(U,J){v=!1,$&&($=!1,g(q),q=-1),f=!0;var _=p;try{for(w(J),m=n(s);m!==null&&(!(m.expirationTime>J)||U&&!X());){var ne=m.callback;if(typeof ne=="function"){m.callback=null,p=m.priorityLevel;var ce=ne(m.expirationTime<=J);J=e.unstable_now(),typeof ce=="function"?m.callback=ce:m===n(s)&&r(s),w(J)}else r(s);m=n(s)}if(m!==null)var C=!0;else{var Ne=n(u);Ne!==null&&ve(P,Ne.startTime-J),C=!1}return C}finally{m=null,p=_,f=!1}}var D=!1,M=null,q=-1,I=5,V=-1;function X(){return!(e.unstable_now()-V<I)}function L(){if(M!==null){var U=e.unstable_now();V=U;var J=!0;try{J=M(!0,U)}finally{J?he():(D=!1,M=null)}}else D=!1}var he;if(typeof y=="function")he=function(){y(L)};else if(typeof MessageChannel<"u"){var le=new MessageChannel,ae=le.port2;le.port1.onmessage=L,he=function(){ae.postMessage(null)}}else he=function(){k(L,0)};function be(U){M=U,D||(D=!0,he())}function ve(U,J){q=k(function(){U(e.unstable_now())},J)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(U){U.callback=null},e.unstable_continueExecution=function(){v||f||(v=!0,be(F))},e.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<U?Math.floor(1e3/U):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(U){switch(p){case 1:case 2:case 3:var J=3;break;default:J=p}var _=p;p=J;try{return U()}finally{p=_}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(U,J){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var _=p;p=U;try{return J()}finally{p=_}},e.unstable_scheduleCallback=function(U,J,_){var ne=e.unstable_now();switch(typeof _=="object"&&_!==null?(_=_.delay,_=typeof _=="number"&&0<_?ne+_:ne):_=ne,U){case 1:var ce=-1;break;case 2:ce=250;break;case 5:ce=1073741823;break;case 4:ce=1e4;break;default:ce=5e3}return ce=_+ce,U={id:h++,callback:J,priorityLevel:U,startTime:_,expirationTime:ce,sortIndex:-1},_>ne?(U.sortIndex=_,t(u,U),n(s)===null&&U===n(u)&&($?(g(q),q=-1):$=!0,ve(P,_-ne))):(U.sortIndex=ce,t(s,U),v||f||(v=!0,be(F))),U},e.unstable_shouldYield=X,e.unstable_wrapCallback=function(U){var J=p;return function(){var _=p;p=J;try{return U.apply(this,arguments)}finally{p=_}}}})(Wf);Hf.exports=Wf;var Wy=Hf.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Uy=A,Ft=Wy;function j(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Uf=new Set,Ea={};function Wr(e,t){Ci(e,t),Ci(e+"Capture",t)}function Ci(e,t){for(Ea[e]=t,e=0;e<t.length;e++)Uf.add(t[e])}var In=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),$u=Object.prototype.hasOwnProperty,Xy=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ec={},Cc={};function Ky(e){return $u.call(Cc,e)?!0:$u.call(Ec,e)?!1:Xy.test(e)?Cc[e]=!0:(Ec[e]=!0,!1)}function Vy(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Gy(e,t,n,r){if(t===null||typeof t>"u"||Vy(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function pt(e,t,n,r,i,a,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=o}var rt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){rt[e]=new pt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];rt[t]=new pt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){rt[e]=new pt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){rt[e]=new pt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){rt[e]=new pt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){rt[e]=new pt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){rt[e]=new pt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){rt[e]=new pt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){rt[e]=new pt(e,5,!1,e.toLowerCase(),null,!1,!1)});var O0=/[\-:]([a-z])/g;function j0(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(O0,j0);rt[t]=new pt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(O0,j0);rt[t]=new pt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(O0,j0);rt[t]=new pt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){rt[e]=new pt(e,1,!1,e.toLowerCase(),null,!1,!1)});rt.xlinkHref=new pt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){rt[e]=new pt(e,1,!1,e.toLowerCase(),null,!0,!0)});function H0(e,t,n,r){var i=rt.hasOwnProperty(t)?rt[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Gy(t,n,i,r)&&(n=null),r||i===null?Ky(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Un=Uy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,so=Symbol.for("react.element"),ii=Symbol.for("react.portal"),ai=Symbol.for("react.fragment"),W0=Symbol.for("react.strict_mode"),xu=Symbol.for("react.profiler"),Xf=Symbol.for("react.provider"),Kf=Symbol.for("react.context"),U0=Symbol.for("react.forward_ref"),wu=Symbol.for("react.suspense"),_u=Symbol.for("react.suspense_list"),X0=Symbol.for("react.memo"),er=Symbol.for("react.lazy"),Vf=Symbol.for("react.offscreen"),Dc=Symbol.iterator;function Gi(e){return e===null||typeof e!="object"?null:(e=Dc&&e[Dc]||e["@@iterator"],typeof e=="function"?e:null)}var Le=Object.assign,ys;function sa(e){if(ys===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ys=t&&t[1]||""}return`
`+ys+e}var vs=!1;function $s(e,t){if(!e||vs)return"";vs=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),a=r.stack.split(`
`),o=i.length-1,l=a.length-1;1<=o&&0<=l&&i[o]!==a[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==a[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==a[l]){var s=`
`+i[o].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=o&&0<=l);break}}}finally{vs=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?sa(e):""}function Qy(e){switch(e.tag){case 5:return sa(e.type);case 16:return sa("Lazy");case 13:return sa("Suspense");case 19:return sa("SuspenseList");case 0:case 2:case 15:return e=$s(e.type,!1),e;case 11:return e=$s(e.type.render,!1),e;case 1:return e=$s(e.type,!0),e;default:return""}}function ku(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ai:return"Fragment";case ii:return"Portal";case xu:return"Profiler";case W0:return"StrictMode";case wu:return"Suspense";case _u:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Kf:return(e.displayName||"Context")+".Consumer";case Xf:return(e._context.displayName||"Context")+".Provider";case U0:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case X0:return t=e.displayName||null,t!==null?t:ku(e.type)||"Memo";case er:t=e._payload,e=e._init;try{return ku(e(t))}catch{}}return null}function Yy(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ku(t);case 8:return t===W0?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function pr(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Gf(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Zy(e){var t=Gf(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,a.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function uo(e){e._valueTracker||(e._valueTracker=Zy(e))}function Qf(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Gf(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function il(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Su(e,t){var n=t.checked;return Le({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function zc(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=pr(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Yf(e,t){t=t.checked,t!=null&&H0(e,"checked",t,!1)}function Eu(e,t){Yf(e,t);var n=pr(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Cu(e,t.type,n):t.hasOwnProperty("defaultValue")&&Cu(e,t.type,pr(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Pc(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Cu(e,t,n){(t!=="number"||il(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var ua=Array.isArray;function bi(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+pr(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Du(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(j(91));return Le({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ac(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(j(92));if(ua(n)){if(1<n.length)throw Error(j(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:pr(n)}}function Zf(e,t){var n=pr(t.value),r=pr(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Tc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Jf(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function zu(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Jf(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ho,ep=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ho=ho||document.createElement("div"),ho.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ho.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Ca(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var da={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Jy=["Webkit","ms","Moz","O"];Object.keys(da).forEach(function(e){Jy.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),da[t]=da[e]})});function tp(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||da.hasOwnProperty(e)&&da[e]?(""+t).trim():t+"px"}function np(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=tp(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var e2=Le({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Pu(e,t){if(t){if(e2[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(j(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(j(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(j(61))}if(t.style!=null&&typeof t.style!="object")throw Error(j(62))}}function Au(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Tu=null;function K0(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Fu=null,gi=null,yi=null;function Fc(e){if(e=Ya(e)){if(typeof Fu!="function")throw Error(j(280));var t=e.stateNode;t&&(t=jl(t),Fu(e.stateNode,e.type,t))}}function rp(e){gi?yi?yi.push(e):yi=[e]:gi=e}function ip(){if(gi){var e=gi,t=yi;if(yi=gi=null,Fc(e),t)for(e=0;e<t.length;e++)Fc(t[e])}}function ap(e,t){return e(t)}function op(){}var xs=!1;function lp(e,t,n){if(xs)return e(t,n);xs=!0;try{return ap(e,t,n)}finally{xs=!1,(gi!==null||yi!==null)&&(op(),ip())}}function Da(e,t){var n=e.stateNode;if(n===null)return null;var r=jl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(j(231,t,typeof n));return n}var Nu=!1;if(In)try{var Qi={};Object.defineProperty(Qi,"passive",{get:function(){Nu=!0}}),window.addEventListener("test",Qi,Qi),window.removeEventListener("test",Qi,Qi)}catch{Nu=!1}function t2(e,t,n,r,i,a,o,l,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(h){this.onError(h)}}var fa=!1,al=null,ol=!1,Mu=null,n2={onError:function(e){fa=!0,al=e}};function r2(e,t,n,r,i,a,o,l,s){fa=!1,al=null,t2.apply(n2,arguments)}function i2(e,t,n,r,i,a,o,l,s){if(r2.apply(this,arguments),fa){if(fa){var u=al;fa=!1,al=null}else throw Error(j(198));ol||(ol=!0,Mu=u)}}function Ur(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function sp(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Nc(e){if(Ur(e)!==e)throw Error(j(188))}function a2(e){var t=e.alternate;if(!t){if(t=Ur(e),t===null)throw Error(j(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var a=i.alternate;if(a===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===n)return Nc(i),e;if(a===r)return Nc(i),t;a=a.sibling}throw Error(j(188))}if(n.return!==r.return)n=i,r=a;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=a;break}if(l===r){o=!0,r=i,n=a;break}l=l.sibling}if(!o){for(l=a.child;l;){if(l===n){o=!0,n=a,r=i;break}if(l===r){o=!0,r=a,n=i;break}l=l.sibling}if(!o)throw Error(j(189))}}if(n.alternate!==r)throw Error(j(190))}if(n.tag!==3)throw Error(j(188));return n.stateNode.current===n?e:t}function up(e){return e=a2(e),e!==null?hp(e):null}function hp(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=hp(e);if(t!==null)return t;e=e.sibling}return null}var cp=Ft.unstable_scheduleCallback,Mc=Ft.unstable_cancelCallback,o2=Ft.unstable_shouldYield,l2=Ft.unstable_requestPaint,He=Ft.unstable_now,s2=Ft.unstable_getCurrentPriorityLevel,V0=Ft.unstable_ImmediatePriority,mp=Ft.unstable_UserBlockingPriority,ll=Ft.unstable_NormalPriority,u2=Ft.unstable_LowPriority,dp=Ft.unstable_IdlePriority,Il=null,gn=null;function h2(e){if(gn&&typeof gn.onCommitFiberRoot=="function")try{gn.onCommitFiberRoot(Il,e,void 0,(e.current.flags&128)===128)}catch{}}var an=Math.clz32?Math.clz32:d2,c2=Math.log,m2=Math.LN2;function d2(e){return e>>>=0,e===0?32:31-(c2(e)/m2|0)|0}var co=64,mo=4194304;function ha(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function sl(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,a=e.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=ha(l):(a&=o,a!==0&&(r=ha(a)))}else o=n&~i,o!==0?r=ha(o):a!==0&&(r=ha(a));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,a=t&-t,i>=a||i===16&&(a&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-an(t),i=1<<n,r|=e[n],t&=~i;return r}function f2(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function p2(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes;0<a;){var o=31-an(a),l=1<<o,s=i[o];s===-1?(!(l&n)||l&r)&&(i[o]=f2(l,t)):s<=t&&(e.expiredLanes|=l),a&=~l}}function Ru(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function fp(){var e=co;return co<<=1,!(co&4194240)&&(co=64),e}function ws(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ga(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-an(t),e[t]=n}function b2(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-an(n),a=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~a}}function G0(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-an(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var we=0;function pp(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var bp,Q0,gp,yp,vp,qu=!1,fo=[],lr=null,sr=null,ur=null,za=new Map,Pa=new Map,nr=[],g2="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Rc(e,t){switch(e){case"focusin":case"focusout":lr=null;break;case"dragenter":case"dragleave":sr=null;break;case"mouseover":case"mouseout":ur=null;break;case"pointerover":case"pointerout":za.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Pa.delete(t.pointerId)}}function Yi(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Ya(t),t!==null&&Q0(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function y2(e,t,n,r,i){switch(t){case"focusin":return lr=Yi(lr,e,t,n,r,i),!0;case"dragenter":return sr=Yi(sr,e,t,n,r,i),!0;case"mouseover":return ur=Yi(ur,e,t,n,r,i),!0;case"pointerover":var a=i.pointerId;return za.set(a,Yi(za.get(a)||null,e,t,n,r,i)),!0;case"gotpointercapture":return a=i.pointerId,Pa.set(a,Yi(Pa.get(a)||null,e,t,n,r,i)),!0}return!1}function $p(e){var t=Fr(e.target);if(t!==null){var n=Ur(t);if(n!==null){if(t=n.tag,t===13){if(t=sp(n),t!==null){e.blockedOn=t,vp(e.priority,function(){gp(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Lo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Iu(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Tu=r,n.target.dispatchEvent(r),Tu=null}else return t=Ya(n),t!==null&&Q0(t),e.blockedOn=n,!1;t.shift()}return!0}function qc(e,t,n){Lo(e)&&n.delete(t)}function v2(){qu=!1,lr!==null&&Lo(lr)&&(lr=null),sr!==null&&Lo(sr)&&(sr=null),ur!==null&&Lo(ur)&&(ur=null),za.forEach(qc),Pa.forEach(qc)}function Zi(e,t){e.blockedOn===t&&(e.blockedOn=null,qu||(qu=!0,Ft.unstable_scheduleCallback(Ft.unstable_NormalPriority,v2)))}function Aa(e){function t(i){return Zi(i,e)}if(0<fo.length){Zi(fo[0],e);for(var n=1;n<fo.length;n++){var r=fo[n];r.blockedOn===e&&(r.blockedOn=null)}}for(lr!==null&&Zi(lr,e),sr!==null&&Zi(sr,e),ur!==null&&Zi(ur,e),za.forEach(t),Pa.forEach(t),n=0;n<nr.length;n++)r=nr[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<nr.length&&(n=nr[0],n.blockedOn===null);)$p(n),n.blockedOn===null&&nr.shift()}var vi=Un.ReactCurrentBatchConfig,ul=!0;function $2(e,t,n,r){var i=we,a=vi.transition;vi.transition=null;try{we=1,Y0(e,t,n,r)}finally{we=i,vi.transition=a}}function x2(e,t,n,r){var i=we,a=vi.transition;vi.transition=null;try{we=4,Y0(e,t,n,r)}finally{we=i,vi.transition=a}}function Y0(e,t,n,r){if(ul){var i=Iu(e,t,n,r);if(i===null)Ts(e,t,r,hl,n),Rc(e,r);else if(y2(i,e,t,n,r))r.stopPropagation();else if(Rc(e,r),t&4&&-1<g2.indexOf(e)){for(;i!==null;){var a=Ya(i);if(a!==null&&bp(a),a=Iu(e,t,n,r),a===null&&Ts(e,t,r,hl,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else Ts(e,t,r,null,n)}}var hl=null;function Iu(e,t,n,r){if(hl=null,e=K0(r),e=Fr(e),e!==null)if(t=Ur(e),t===null)e=null;else if(n=t.tag,n===13){if(e=sp(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return hl=e,null}function xp(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(s2()){case V0:return 1;case mp:return 4;case ll:case u2:return 16;case dp:return 536870912;default:return 16}default:return 16}}var ir=null,Z0=null,Oo=null;function wp(){if(Oo)return Oo;var e,t=Z0,n=t.length,r,i="value"in ir?ir.value:ir.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return Oo=i.slice(e,1<r?1-r:void 0)}function jo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function po(){return!0}function Ic(){return!1}function Mt(e){function t(n,r,i,a,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=a,this.target=o,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(a):a[l]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?po:Ic,this.isPropagationStopped=Ic,this}return Le(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=po)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=po)},persist:function(){},isPersistent:po}),t}var Ri={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},J0=Mt(Ri),Qa=Le({},Ri,{view:0,detail:0}),w2=Mt(Qa),_s,ks,Ji,Bl=Le({},Qa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:eh,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ji&&(Ji&&e.type==="mousemove"?(_s=e.screenX-Ji.screenX,ks=e.screenY-Ji.screenY):ks=_s=0,Ji=e),_s)},movementY:function(e){return"movementY"in e?e.movementY:ks}}),Bc=Mt(Bl),_2=Le({},Bl,{dataTransfer:0}),k2=Mt(_2),S2=Le({},Qa,{relatedTarget:0}),Ss=Mt(S2),E2=Le({},Ri,{animationName:0,elapsedTime:0,pseudoElement:0}),C2=Mt(E2),D2=Le({},Ri,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),z2=Mt(D2),P2=Le({},Ri,{data:0}),Lc=Mt(P2),A2={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},T2={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},F2={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function N2(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=F2[e])?!!t[e]:!1}function eh(){return N2}var M2=Le({},Qa,{key:function(e){if(e.key){var t=A2[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=jo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?T2[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:eh,charCode:function(e){return e.type==="keypress"?jo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?jo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),R2=Mt(M2),q2=Le({},Bl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Oc=Mt(q2),I2=Le({},Qa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:eh}),B2=Mt(I2),L2=Le({},Ri,{propertyName:0,elapsedTime:0,pseudoElement:0}),O2=Mt(L2),j2=Le({},Bl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),H2=Mt(j2),W2=[9,13,27,32],th=In&&"CompositionEvent"in window,pa=null;In&&"documentMode"in document&&(pa=document.documentMode);var U2=In&&"TextEvent"in window&&!pa,_p=In&&(!th||pa&&8<pa&&11>=pa),jc=" ",Hc=!1;function kp(e,t){switch(e){case"keyup":return W2.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Sp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var oi=!1;function X2(e,t){switch(e){case"compositionend":return Sp(t);case"keypress":return t.which!==32?null:(Hc=!0,jc);case"textInput":return e=t.data,e===jc&&Hc?null:e;default:return null}}function K2(e,t){if(oi)return e==="compositionend"||!th&&kp(e,t)?(e=wp(),Oo=Z0=ir=null,oi=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return _p&&t.locale!=="ko"?null:t.data;default:return null}}var V2={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Wc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!V2[e.type]:t==="textarea"}function Ep(e,t,n,r){rp(r),t=cl(t,"onChange"),0<t.length&&(n=new J0("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var ba=null,Ta=null;function G2(e){qp(e,0)}function Ll(e){var t=ui(e);if(Qf(t))return e}function Q2(e,t){if(e==="change")return t}var Cp=!1;if(In){var Es;if(In){var Cs="oninput"in document;if(!Cs){var Uc=document.createElement("div");Uc.setAttribute("oninput","return;"),Cs=typeof Uc.oninput=="function"}Es=Cs}else Es=!1;Cp=Es&&(!document.documentMode||9<document.documentMode)}function Xc(){ba&&(ba.detachEvent("onpropertychange",Dp),Ta=ba=null)}function Dp(e){if(e.propertyName==="value"&&Ll(Ta)){var t=[];Ep(t,Ta,e,K0(e)),lp(G2,t)}}function Y2(e,t,n){e==="focusin"?(Xc(),ba=t,Ta=n,ba.attachEvent("onpropertychange",Dp)):e==="focusout"&&Xc()}function Z2(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ll(Ta)}function J2(e,t){if(e==="click")return Ll(t)}function e4(e,t){if(e==="input"||e==="change")return Ll(t)}function t4(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var sn=typeof Object.is=="function"?Object.is:t4;function Fa(e,t){if(sn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!$u.call(t,i)||!sn(e[i],t[i]))return!1}return!0}function Kc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Vc(e,t){var n=Kc(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Kc(n)}}function zp(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?zp(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Pp(){for(var e=window,t=il();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=il(e.document)}return t}function nh(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function n4(e){var t=Pp(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&zp(n.ownerDocument.documentElement,n)){if(r!==null&&nh(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,a=Math.min(r.start,i);r=r.end===void 0?a:Math.min(r.end,i),!e.extend&&a>r&&(i=r,r=a,a=i),i=Vc(n,a);var o=Vc(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var r4=In&&"documentMode"in document&&11>=document.documentMode,li=null,Bu=null,ga=null,Lu=!1;function Gc(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Lu||li==null||li!==il(r)||(r=li,"selectionStart"in r&&nh(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ga&&Fa(ga,r)||(ga=r,r=cl(Bu,"onSelect"),0<r.length&&(t=new J0("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=li)))}function bo(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var si={animationend:bo("Animation","AnimationEnd"),animationiteration:bo("Animation","AnimationIteration"),animationstart:bo("Animation","AnimationStart"),transitionend:bo("Transition","TransitionEnd")},Ds={},Ap={};In&&(Ap=document.createElement("div").style,"AnimationEvent"in window||(delete si.animationend.animation,delete si.animationiteration.animation,delete si.animationstart.animation),"TransitionEvent"in window||delete si.transitionend.transition);function Ol(e){if(Ds[e])return Ds[e];if(!si[e])return e;var t=si[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ap)return Ds[e]=t[n];return e}var Tp=Ol("animationend"),Fp=Ol("animationiteration"),Np=Ol("animationstart"),Mp=Ol("transitionend"),Rp=new Map,Qc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function xr(e,t){Rp.set(e,t),Wr(t,[e])}for(var zs=0;zs<Qc.length;zs++){var Ps=Qc[zs],i4=Ps.toLowerCase(),a4=Ps[0].toUpperCase()+Ps.slice(1);xr(i4,"on"+a4)}xr(Tp,"onAnimationEnd");xr(Fp,"onAnimationIteration");xr(Np,"onAnimationStart");xr("dblclick","onDoubleClick");xr("focusin","onFocus");xr("focusout","onBlur");xr(Mp,"onTransitionEnd");Ci("onMouseEnter",["mouseout","mouseover"]);Ci("onMouseLeave",["mouseout","mouseover"]);Ci("onPointerEnter",["pointerout","pointerover"]);Ci("onPointerLeave",["pointerout","pointerover"]);Wr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Wr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Wr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Wr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Wr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Wr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ca="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),o4=new Set("cancel close invalid load scroll toggle".split(" ").concat(ca));function Yc(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,i2(r,t,void 0,e),e.currentTarget=null}function qp(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var l=r[o],s=l.instance,u=l.currentTarget;if(l=l.listener,s!==a&&i.isPropagationStopped())break e;Yc(i,l,u),a=s}else for(o=0;o<r.length;o++){if(l=r[o],s=l.instance,u=l.currentTarget,l=l.listener,s!==a&&i.isPropagationStopped())break e;Yc(i,l,u),a=s}}}if(ol)throw e=Mu,ol=!1,Mu=null,e}function Pe(e,t){var n=t[Uu];n===void 0&&(n=t[Uu]=new Set);var r=e+"__bubble";n.has(r)||(Ip(t,e,2,!1),n.add(r))}function As(e,t,n){var r=0;t&&(r|=4),Ip(n,e,r,t)}var go="_reactListening"+Math.random().toString(36).slice(2);function Na(e){if(!e[go]){e[go]=!0,Uf.forEach(function(n){n!=="selectionchange"&&(o4.has(n)||As(n,!1,e),As(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[go]||(t[go]=!0,As("selectionchange",!1,t))}}function Ip(e,t,n,r){switch(xp(t)){case 1:var i=$2;break;case 4:i=x2;break;default:i=Y0}n=i.bind(null,t,n,e),i=void 0,!Nu||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Ts(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var s=o.tag;if((s===3||s===4)&&(s=o.stateNode.containerInfo,s===i||s.nodeType===8&&s.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Fr(l),o===null)return;if(s=o.tag,s===5||s===6){r=a=o;continue e}l=l.parentNode}}r=r.return}lp(function(){var u=a,h=K0(n),m=[];e:{var p=Rp.get(e);if(p!==void 0){var f=J0,v=e;switch(e){case"keypress":if(jo(n)===0)break e;case"keydown":case"keyup":f=R2;break;case"focusin":v="focus",f=Ss;break;case"focusout":v="blur",f=Ss;break;case"beforeblur":case"afterblur":f=Ss;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":f=Bc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":f=k2;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":f=B2;break;case Tp:case Fp:case Np:f=C2;break;case Mp:f=O2;break;case"scroll":f=w2;break;case"wheel":f=H2;break;case"copy":case"cut":case"paste":f=z2;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":f=Oc}var $=(t&4)!==0,k=!$&&e==="scroll",g=$?p!==null?p+"Capture":null:p;$=[];for(var y=u,w;y!==null;){w=y;var P=w.stateNode;if(w.tag===5&&P!==null&&(w=P,g!==null&&(P=Da(y,g),P!=null&&$.push(Ma(y,P,w)))),k)break;y=y.return}0<$.length&&(p=new f(p,v,null,n,h),m.push({event:p,listeners:$}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",f=e==="mouseout"||e==="pointerout",p&&n!==Tu&&(v=n.relatedTarget||n.fromElement)&&(Fr(v)||v[Bn]))break e;if((f||p)&&(p=h.window===h?h:(p=h.ownerDocument)?p.defaultView||p.parentWindow:window,f?(v=n.relatedTarget||n.toElement,f=u,v=v?Fr(v):null,v!==null&&(k=Ur(v),v!==k||v.tag!==5&&v.tag!==6)&&(v=null)):(f=null,v=u),f!==v)){if($=Bc,P="onMouseLeave",g="onMouseEnter",y="mouse",(e==="pointerout"||e==="pointerover")&&($=Oc,P="onPointerLeave",g="onPointerEnter",y="pointer"),k=f==null?p:ui(f),w=v==null?p:ui(v),p=new $(P,y+"leave",f,n,h),p.target=k,p.relatedTarget=w,P=null,Fr(h)===u&&($=new $(g,y+"enter",v,n,h),$.target=w,$.relatedTarget=k,P=$),k=P,f&&v)t:{for($=f,g=v,y=0,w=$;w;w=ei(w))y++;for(w=0,P=g;P;P=ei(P))w++;for(;0<y-w;)$=ei($),y--;for(;0<w-y;)g=ei(g),w--;for(;y--;){if($===g||g!==null&&$===g.alternate)break t;$=ei($),g=ei(g)}$=null}else $=null;f!==null&&Zc(m,p,f,$,!1),v!==null&&k!==null&&Zc(m,k,v,$,!0)}}e:{if(p=u?ui(u):window,f=p.nodeName&&p.nodeName.toLowerCase(),f==="select"||f==="input"&&p.type==="file")var F=Q2;else if(Wc(p))if(Cp)F=e4;else{F=Z2;var D=Y2}else(f=p.nodeName)&&f.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(F=J2);if(F&&(F=F(e,u))){Ep(m,F,n,h);break e}D&&D(e,p,u),e==="focusout"&&(D=p._wrapperState)&&D.controlled&&p.type==="number"&&Cu(p,"number",p.value)}switch(D=u?ui(u):window,e){case"focusin":(Wc(D)||D.contentEditable==="true")&&(li=D,Bu=u,ga=null);break;case"focusout":ga=Bu=li=null;break;case"mousedown":Lu=!0;break;case"contextmenu":case"mouseup":case"dragend":Lu=!1,Gc(m,n,h);break;case"selectionchange":if(r4)break;case"keydown":case"keyup":Gc(m,n,h)}var M;if(th)e:{switch(e){case"compositionstart":var q="onCompositionStart";break e;case"compositionend":q="onCompositionEnd";break e;case"compositionupdate":q="onCompositionUpdate";break e}q=void 0}else oi?kp(e,n)&&(q="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(q="onCompositionStart");q&&(_p&&n.locale!=="ko"&&(oi||q!=="onCompositionStart"?q==="onCompositionEnd"&&oi&&(M=wp()):(ir=h,Z0="value"in ir?ir.value:ir.textContent,oi=!0)),D=cl(u,q),0<D.length&&(q=new Lc(q,e,null,n,h),m.push({event:q,listeners:D}),M?q.data=M:(M=Sp(n),M!==null&&(q.data=M)))),(M=U2?X2(e,n):K2(e,n))&&(u=cl(u,"onBeforeInput"),0<u.length&&(h=new Lc("onBeforeInput","beforeinput",null,n,h),m.push({event:h,listeners:u}),h.data=M))}qp(m,t)})}function Ma(e,t,n){return{instance:e,listener:t,currentTarget:n}}function cl(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,a=i.stateNode;i.tag===5&&a!==null&&(i=a,a=Da(e,n),a!=null&&r.unshift(Ma(e,a,i)),a=Da(e,t),a!=null&&r.push(Ma(e,a,i))),e=e.return}return r}function ei(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Zc(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var l=n,s=l.alternate,u=l.stateNode;if(s!==null&&s===r)break;l.tag===5&&u!==null&&(l=u,i?(s=Da(n,a),s!=null&&o.unshift(Ma(n,s,l))):i||(s=Da(n,a),s!=null&&o.push(Ma(n,s,l)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var l4=/\r\n?/g,s4=/\u0000|\uFFFD/g;function Jc(e){return(typeof e=="string"?e:""+e).replace(l4,`
`).replace(s4,"")}function yo(e,t,n){if(t=Jc(t),Jc(e)!==t&&n)throw Error(j(425))}function ml(){}var Ou=null,ju=null;function Hu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Wu=typeof setTimeout=="function"?setTimeout:void 0,u4=typeof clearTimeout=="function"?clearTimeout:void 0,em=typeof Promise=="function"?Promise:void 0,h4=typeof queueMicrotask=="function"?queueMicrotask:typeof em<"u"?function(e){return em.resolve(null).then(e).catch(c4)}:Wu;function c4(e){setTimeout(function(){throw e})}function Fs(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Aa(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Aa(t)}function hr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function tm(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var qi=Math.random().toString(36).slice(2),fn="__reactFiber$"+qi,Ra="__reactProps$"+qi,Bn="__reactContainer$"+qi,Uu="__reactEvents$"+qi,m4="__reactListeners$"+qi,d4="__reactHandles$"+qi;function Fr(e){var t=e[fn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Bn]||n[fn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=tm(e);e!==null;){if(n=e[fn])return n;e=tm(e)}return t}e=n,n=e.parentNode}return null}function Ya(e){return e=e[fn]||e[Bn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function ui(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(j(33))}function jl(e){return e[Ra]||null}var Xu=[],hi=-1;function wr(e){return{current:e}}function Ae(e){0>hi||(e.current=Xu[hi],Xu[hi]=null,hi--)}function Ce(e,t){hi++,Xu[hi]=e.current,e.current=t}var br={},lt=wr(br),xt=wr(!1),Br=br;function Di(e,t){var n=e.type.contextTypes;if(!n)return br;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},a;for(a in n)i[a]=t[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function wt(e){return e=e.childContextTypes,e!=null}function dl(){Ae(xt),Ae(lt)}function nm(e,t,n){if(lt.current!==br)throw Error(j(168));Ce(lt,t),Ce(xt,n)}function Bp(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(j(108,Yy(e)||"Unknown",i));return Le({},n,r)}function fl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||br,Br=lt.current,Ce(lt,e),Ce(xt,xt.current),!0}function rm(e,t,n){var r=e.stateNode;if(!r)throw Error(j(169));n?(e=Bp(e,t,Br),r.__reactInternalMemoizedMergedChildContext=e,Ae(xt),Ae(lt),Ce(lt,e)):Ae(xt),Ce(xt,n)}var Pn=null,Hl=!1,Ns=!1;function Lp(e){Pn===null?Pn=[e]:Pn.push(e)}function f4(e){Hl=!0,Lp(e)}function _r(){if(!Ns&&Pn!==null){Ns=!0;var e=0,t=we;try{var n=Pn;for(we=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Pn=null,Hl=!1}catch(i){throw Pn!==null&&(Pn=Pn.slice(e+1)),cp(V0,_r),i}finally{we=t,Ns=!1}}return null}var ci=[],mi=0,pl=null,bl=0,qt=[],It=0,Lr=null,Tn=1,Fn="";function Pr(e,t){ci[mi++]=bl,ci[mi++]=pl,pl=e,bl=t}function Op(e,t,n){qt[It++]=Tn,qt[It++]=Fn,qt[It++]=Lr,Lr=e;var r=Tn;e=Fn;var i=32-an(r)-1;r&=~(1<<i),n+=1;var a=32-an(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Tn=1<<32-an(t)+i|n<<i|r,Fn=a+e}else Tn=1<<a|n<<i|r,Fn=e}function rh(e){e.return!==null&&(Pr(e,1),Op(e,1,0))}function ih(e){for(;e===pl;)pl=ci[--mi],ci[mi]=null,bl=ci[--mi],ci[mi]=null;for(;e===Lr;)Lr=qt[--It],qt[It]=null,Fn=qt[--It],qt[It]=null,Tn=qt[--It],qt[It]=null}var Tt=null,Pt=null,Te=!1,rn=null;function jp(e,t){var n=Ot(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function im(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Tt=e,Pt=hr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Tt=e,Pt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Lr!==null?{id:Tn,overflow:Fn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ot(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Tt=e,Pt=null,!0):!1;default:return!1}}function Ku(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Vu(e){if(Te){var t=Pt;if(t){var n=t;if(!im(e,t)){if(Ku(e))throw Error(j(418));t=hr(n.nextSibling);var r=Tt;t&&im(e,t)?jp(r,n):(e.flags=e.flags&-4097|2,Te=!1,Tt=e)}}else{if(Ku(e))throw Error(j(418));e.flags=e.flags&-4097|2,Te=!1,Tt=e}}}function am(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Tt=e}function vo(e){if(e!==Tt)return!1;if(!Te)return am(e),Te=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Hu(e.type,e.memoizedProps)),t&&(t=Pt)){if(Ku(e))throw Hp(),Error(j(418));for(;t;)jp(e,t),t=hr(t.nextSibling)}if(am(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(j(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Pt=hr(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Pt=null}}else Pt=Tt?hr(e.stateNode.nextSibling):null;return!0}function Hp(){for(var e=Pt;e;)e=hr(e.nextSibling)}function zi(){Pt=Tt=null,Te=!1}function ah(e){rn===null?rn=[e]:rn.push(e)}var p4=Un.ReactCurrentBatchConfig;function ea(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(j(309));var r=n.stateNode}if(!r)throw Error(j(147,e));var i=r,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(o){var l=i.refs;o===null?delete l[a]:l[a]=o},t._stringRef=a,t)}if(typeof e!="string")throw Error(j(284));if(!n._owner)throw Error(j(290,e))}return e}function $o(e,t){throw e=Object.prototype.toString.call(t),Error(j(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function om(e){var t=e._init;return t(e._payload)}function Wp(e){function t(g,y){if(e){var w=g.deletions;w===null?(g.deletions=[y],g.flags|=16):w.push(y)}}function n(g,y){if(!e)return null;for(;y!==null;)t(g,y),y=y.sibling;return null}function r(g,y){for(g=new Map;y!==null;)y.key!==null?g.set(y.key,y):g.set(y.index,y),y=y.sibling;return g}function i(g,y){return g=fr(g,y),g.index=0,g.sibling=null,g}function a(g,y,w){return g.index=w,e?(w=g.alternate,w!==null?(w=w.index,w<y?(g.flags|=2,y):w):(g.flags|=2,y)):(g.flags|=1048576,y)}function o(g){return e&&g.alternate===null&&(g.flags|=2),g}function l(g,y,w,P){return y===null||y.tag!==6?(y=Os(w,g.mode,P),y.return=g,y):(y=i(y,w),y.return=g,y)}function s(g,y,w,P){var F=w.type;return F===ai?h(g,y,w.props.children,P,w.key):y!==null&&(y.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===er&&om(F)===y.type)?(P=i(y,w.props),P.ref=ea(g,y,w),P.return=g,P):(P=Go(w.type,w.key,w.props,null,g.mode,P),P.ref=ea(g,y,w),P.return=g,P)}function u(g,y,w,P){return y===null||y.tag!==4||y.stateNode.containerInfo!==w.containerInfo||y.stateNode.implementation!==w.implementation?(y=js(w,g.mode,P),y.return=g,y):(y=i(y,w.children||[]),y.return=g,y)}function h(g,y,w,P,F){return y===null||y.tag!==7?(y=Ir(w,g.mode,P,F),y.return=g,y):(y=i(y,w),y.return=g,y)}function m(g,y,w){if(typeof y=="string"&&y!==""||typeof y=="number")return y=Os(""+y,g.mode,w),y.return=g,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case so:return w=Go(y.type,y.key,y.props,null,g.mode,w),w.ref=ea(g,null,y),w.return=g,w;case ii:return y=js(y,g.mode,w),y.return=g,y;case er:var P=y._init;return m(g,P(y._payload),w)}if(ua(y)||Gi(y))return y=Ir(y,g.mode,w,null),y.return=g,y;$o(g,y)}return null}function p(g,y,w,P){var F=y!==null?y.key:null;if(typeof w=="string"&&w!==""||typeof w=="number")return F!==null?null:l(g,y,""+w,P);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case so:return w.key===F?s(g,y,w,P):null;case ii:return w.key===F?u(g,y,w,P):null;case er:return F=w._init,p(g,y,F(w._payload),P)}if(ua(w)||Gi(w))return F!==null?null:h(g,y,w,P,null);$o(g,w)}return null}function f(g,y,w,P,F){if(typeof P=="string"&&P!==""||typeof P=="number")return g=g.get(w)||null,l(y,g,""+P,F);if(typeof P=="object"&&P!==null){switch(P.$$typeof){case so:return g=g.get(P.key===null?w:P.key)||null,s(y,g,P,F);case ii:return g=g.get(P.key===null?w:P.key)||null,u(y,g,P,F);case er:var D=P._init;return f(g,y,w,D(P._payload),F)}if(ua(P)||Gi(P))return g=g.get(w)||null,h(y,g,P,F,null);$o(y,P)}return null}function v(g,y,w,P){for(var F=null,D=null,M=y,q=y=0,I=null;M!==null&&q<w.length;q++){M.index>q?(I=M,M=null):I=M.sibling;var V=p(g,M,w[q],P);if(V===null){M===null&&(M=I);break}e&&M&&V.alternate===null&&t(g,M),y=a(V,y,q),D===null?F=V:D.sibling=V,D=V,M=I}if(q===w.length)return n(g,M),Te&&Pr(g,q),F;if(M===null){for(;q<w.length;q++)M=m(g,w[q],P),M!==null&&(y=a(M,y,q),D===null?F=M:D.sibling=M,D=M);return Te&&Pr(g,q),F}for(M=r(g,M);q<w.length;q++)I=f(M,g,q,w[q],P),I!==null&&(e&&I.alternate!==null&&M.delete(I.key===null?q:I.key),y=a(I,y,q),D===null?F=I:D.sibling=I,D=I);return e&&M.forEach(function(X){return t(g,X)}),Te&&Pr(g,q),F}function $(g,y,w,P){var F=Gi(w);if(typeof F!="function")throw Error(j(150));if(w=F.call(w),w==null)throw Error(j(151));for(var D=F=null,M=y,q=y=0,I=null,V=w.next();M!==null&&!V.done;q++,V=w.next()){M.index>q?(I=M,M=null):I=M.sibling;var X=p(g,M,V.value,P);if(X===null){M===null&&(M=I);break}e&&M&&X.alternate===null&&t(g,M),y=a(X,y,q),D===null?F=X:D.sibling=X,D=X,M=I}if(V.done)return n(g,M),Te&&Pr(g,q),F;if(M===null){for(;!V.done;q++,V=w.next())V=m(g,V.value,P),V!==null&&(y=a(V,y,q),D===null?F=V:D.sibling=V,D=V);return Te&&Pr(g,q),F}for(M=r(g,M);!V.done;q++,V=w.next())V=f(M,g,q,V.value,P),V!==null&&(e&&V.alternate!==null&&M.delete(V.key===null?q:V.key),y=a(V,y,q),D===null?F=V:D.sibling=V,D=V);return e&&M.forEach(function(L){return t(g,L)}),Te&&Pr(g,q),F}function k(g,y,w,P){if(typeof w=="object"&&w!==null&&w.type===ai&&w.key===null&&(w=w.props.children),typeof w=="object"&&w!==null){switch(w.$$typeof){case so:e:{for(var F=w.key,D=y;D!==null;){if(D.key===F){if(F=w.type,F===ai){if(D.tag===7){n(g,D.sibling),y=i(D,w.props.children),y.return=g,g=y;break e}}else if(D.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===er&&om(F)===D.type){n(g,D.sibling),y=i(D,w.props),y.ref=ea(g,D,w),y.return=g,g=y;break e}n(g,D);break}else t(g,D);D=D.sibling}w.type===ai?(y=Ir(w.props.children,g.mode,P,w.key),y.return=g,g=y):(P=Go(w.type,w.key,w.props,null,g.mode,P),P.ref=ea(g,y,w),P.return=g,g=P)}return o(g);case ii:e:{for(D=w.key;y!==null;){if(y.key===D)if(y.tag===4&&y.stateNode.containerInfo===w.containerInfo&&y.stateNode.implementation===w.implementation){n(g,y.sibling),y=i(y,w.children||[]),y.return=g,g=y;break e}else{n(g,y);break}else t(g,y);y=y.sibling}y=js(w,g.mode,P),y.return=g,g=y}return o(g);case er:return D=w._init,k(g,y,D(w._payload),P)}if(ua(w))return v(g,y,w,P);if(Gi(w))return $(g,y,w,P);$o(g,w)}return typeof w=="string"&&w!==""||typeof w=="number"?(w=""+w,y!==null&&y.tag===6?(n(g,y.sibling),y=i(y,w),y.return=g,g=y):(n(g,y),y=Os(w,g.mode,P),y.return=g,g=y),o(g)):n(g,y)}return k}var Pi=Wp(!0),Up=Wp(!1),gl=wr(null),yl=null,di=null,oh=null;function lh(){oh=di=yl=null}function sh(e){var t=gl.current;Ae(gl),e._currentValue=t}function Gu(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function $i(e,t){yl=e,oh=di=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&($t=!0),e.firstContext=null)}function Ut(e){var t=e._currentValue;if(oh!==e)if(e={context:e,memoizedValue:t,next:null},di===null){if(yl===null)throw Error(j(308));di=e,yl.dependencies={lanes:0,firstContext:e}}else di=di.next=e;return t}var Nr=null;function uh(e){Nr===null?Nr=[e]:Nr.push(e)}function Xp(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,uh(t)):(n.next=i.next,i.next=n),t.interleaved=n,Ln(e,r)}function Ln(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var tr=!1;function hh(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Kp(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Nn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function cr(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,ge&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Ln(e,n)}return i=r.interleaved,i===null?(t.next=t,uh(r)):(t.next=i.next,i.next=t),r.interleaved=t,Ln(e,n)}function Ho(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,G0(e,n)}}function lm(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function vl(e,t,n,r){var i=e.updateQueue;tr=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var s=l,u=s.next;s.next=null,o===null?a=u:o.next=u,o=s;var h=e.alternate;h!==null&&(h=h.updateQueue,l=h.lastBaseUpdate,l!==o&&(l===null?h.firstBaseUpdate=u:l.next=u,h.lastBaseUpdate=s))}if(a!==null){var m=i.baseState;o=0,h=u=s=null,l=a;do{var p=l.lane,f=l.eventTime;if((r&p)===p){h!==null&&(h=h.next={eventTime:f,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var v=e,$=l;switch(p=t,f=n,$.tag){case 1:if(v=$.payload,typeof v=="function"){m=v.call(f,m,p);break e}m=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=$.payload,p=typeof v=="function"?v.call(f,m,p):v,p==null)break e;m=Le({},m,p);break e;case 2:tr=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,p=i.effects,p===null?i.effects=[l]:p.push(l))}else f={eventTime:f,lane:p,tag:l.tag,payload:l.payload,callback:l.callback,next:null},h===null?(u=h=f,s=m):h=h.next=f,o|=p;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;p=l,l=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(!0);if(h===null&&(s=m),i.baseState=s,i.firstBaseUpdate=u,i.lastBaseUpdate=h,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else a===null&&(i.shared.lanes=0);jr|=o,e.lanes=o,e.memoizedState=m}}function sm(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(j(191,i));i.call(r)}}}var Za={},yn=wr(Za),qa=wr(Za),Ia=wr(Za);function Mr(e){if(e===Za)throw Error(j(174));return e}function ch(e,t){switch(Ce(Ia,t),Ce(qa,e),Ce(yn,Za),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:zu(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=zu(t,e)}Ae(yn),Ce(yn,t)}function Ai(){Ae(yn),Ae(qa),Ae(Ia)}function Vp(e){Mr(Ia.current);var t=Mr(yn.current),n=zu(t,e.type);t!==n&&(Ce(qa,e),Ce(yn,n))}function mh(e){qa.current===e&&(Ae(yn),Ae(qa))}var Re=wr(0);function $l(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ms=[];function dh(){for(var e=0;e<Ms.length;e++)Ms[e]._workInProgressVersionPrimary=null;Ms.length=0}var Wo=Un.ReactCurrentDispatcher,Rs=Un.ReactCurrentBatchConfig,Or=0,Ie=null,Ve=null,Ze=null,xl=!1,ya=!1,Ba=0,b4=0;function it(){throw Error(j(321))}function fh(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!sn(e[n],t[n]))return!1;return!0}function ph(e,t,n,r,i,a){if(Or=a,Ie=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Wo.current=e===null||e.memoizedState===null?$4:x4,e=n(r,i),ya){a=0;do{if(ya=!1,Ba=0,25<=a)throw Error(j(301));a+=1,Ze=Ve=null,t.updateQueue=null,Wo.current=w4,e=n(r,i)}while(ya)}if(Wo.current=wl,t=Ve!==null&&Ve.next!==null,Or=0,Ze=Ve=Ie=null,xl=!1,t)throw Error(j(300));return e}function bh(){var e=Ba!==0;return Ba=0,e}function cn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ze===null?Ie.memoizedState=Ze=e:Ze=Ze.next=e,Ze}function Xt(){if(Ve===null){var e=Ie.alternate;e=e!==null?e.memoizedState:null}else e=Ve.next;var t=Ze===null?Ie.memoizedState:Ze.next;if(t!==null)Ze=t,Ve=e;else{if(e===null)throw Error(j(310));Ve=e,e={memoizedState:Ve.memoizedState,baseState:Ve.baseState,baseQueue:Ve.baseQueue,queue:Ve.queue,next:null},Ze===null?Ie.memoizedState=Ze=e:Ze=Ze.next=e}return Ze}function La(e,t){return typeof t=="function"?t(e):t}function qs(e){var t=Xt(),n=t.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=e;var r=Ve,i=r.baseQueue,a=n.pending;if(a!==null){if(i!==null){var o=i.next;i.next=a.next,a.next=o}r.baseQueue=i=a,n.pending=null}if(i!==null){a=i.next,r=r.baseState;var l=o=null,s=null,u=a;do{var h=u.lane;if((Or&h)===h)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var m={lane:h,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(l=s=m,o=r):s=s.next=m,Ie.lanes|=h,jr|=h}u=u.next}while(u!==null&&u!==a);s===null?o=r:s.next=l,sn(r,t.memoizedState)||($t=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do a=i.lane,Ie.lanes|=a,jr|=a,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Is(e){var t=Xt(),n=t.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,a=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do a=e(a,o.action),o=o.next;while(o!==i);sn(a,t.memoizedState)||($t=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function Gp(){}function Qp(e,t){var n=Ie,r=Xt(),i=t(),a=!sn(r.memoizedState,i);if(a&&(r.memoizedState=i,$t=!0),r=r.queue,gh(Jp.bind(null,n,r,e),[e]),r.getSnapshot!==t||a||Ze!==null&&Ze.memoizedState.tag&1){if(n.flags|=2048,Oa(9,Zp.bind(null,n,r,i,t),void 0,null),Je===null)throw Error(j(349));Or&30||Yp(n,t,i)}return i}function Yp(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Ie.updateQueue,t===null?(t={lastEffect:null,stores:null},Ie.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Zp(e,t,n,r){t.value=n,t.getSnapshot=r,e1(t)&&t1(e)}function Jp(e,t,n){return n(function(){e1(t)&&t1(e)})}function e1(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!sn(e,n)}catch{return!0}}function t1(e){var t=Ln(e,1);t!==null&&on(t,e,1,-1)}function um(e){var t=cn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:La,lastRenderedState:e},t.queue=e,e=e.dispatch=v4.bind(null,Ie,e),[t.memoizedState,e]}function Oa(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Ie.updateQueue,t===null?(t={lastEffect:null,stores:null},Ie.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function n1(){return Xt().memoizedState}function Uo(e,t,n,r){var i=cn();Ie.flags|=e,i.memoizedState=Oa(1|t,n,void 0,r===void 0?null:r)}function Wl(e,t,n,r){var i=Xt();r=r===void 0?null:r;var a=void 0;if(Ve!==null){var o=Ve.memoizedState;if(a=o.destroy,r!==null&&fh(r,o.deps)){i.memoizedState=Oa(t,n,a,r);return}}Ie.flags|=e,i.memoizedState=Oa(1|t,n,a,r)}function hm(e,t){return Uo(8390656,8,e,t)}function gh(e,t){return Wl(2048,8,e,t)}function r1(e,t){return Wl(4,2,e,t)}function i1(e,t){return Wl(4,4,e,t)}function a1(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function o1(e,t,n){return n=n!=null?n.concat([e]):null,Wl(4,4,a1.bind(null,t,e),n)}function yh(){}function l1(e,t){var n=Xt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&fh(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function s1(e,t){var n=Xt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&fh(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function u1(e,t,n){return Or&21?(sn(n,t)||(n=fp(),Ie.lanes|=n,jr|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,$t=!0),e.memoizedState=n)}function g4(e,t){var n=we;we=n!==0&&4>n?n:4,e(!0);var r=Rs.transition;Rs.transition={};try{e(!1),t()}finally{we=n,Rs.transition=r}}function h1(){return Xt().memoizedState}function y4(e,t,n){var r=dr(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},c1(e))m1(t,n);else if(n=Xp(e,t,n,r),n!==null){var i=dt();on(n,e,r,i),d1(n,t,r)}}function v4(e,t,n){var r=dr(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(c1(e))m1(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,l=a(o,n);if(i.hasEagerState=!0,i.eagerState=l,sn(l,o)){var s=t.interleaved;s===null?(i.next=i,uh(t)):(i.next=s.next,s.next=i),t.interleaved=i;return}}catch{}finally{}n=Xp(e,t,i,r),n!==null&&(i=dt(),on(n,e,r,i),d1(n,t,r))}}function c1(e){var t=e.alternate;return e===Ie||t!==null&&t===Ie}function m1(e,t){ya=xl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function d1(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,G0(e,n)}}var wl={readContext:Ut,useCallback:it,useContext:it,useEffect:it,useImperativeHandle:it,useInsertionEffect:it,useLayoutEffect:it,useMemo:it,useReducer:it,useRef:it,useState:it,useDebugValue:it,useDeferredValue:it,useTransition:it,useMutableSource:it,useSyncExternalStore:it,useId:it,unstable_isNewReconciler:!1},$4={readContext:Ut,useCallback:function(e,t){return cn().memoizedState=[e,t===void 0?null:t],e},useContext:Ut,useEffect:hm,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Uo(4194308,4,a1.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Uo(4194308,4,e,t)},useInsertionEffect:function(e,t){return Uo(4,2,e,t)},useMemo:function(e,t){var n=cn();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=cn();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=y4.bind(null,Ie,e),[r.memoizedState,e]},useRef:function(e){var t=cn();return e={current:e},t.memoizedState=e},useState:um,useDebugValue:yh,useDeferredValue:function(e){return cn().memoizedState=e},useTransition:function(){var e=um(!1),t=e[0];return e=g4.bind(null,e[1]),cn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Ie,i=cn();if(Te){if(n===void 0)throw Error(j(407));n=n()}else{if(n=t(),Je===null)throw Error(j(349));Or&30||Yp(r,t,n)}i.memoizedState=n;var a={value:n,getSnapshot:t};return i.queue=a,hm(Jp.bind(null,r,a,e),[e]),r.flags|=2048,Oa(9,Zp.bind(null,r,a,n,t),void 0,null),n},useId:function(){var e=cn(),t=Je.identifierPrefix;if(Te){var n=Fn,r=Tn;n=(r&~(1<<32-an(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Ba++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=b4++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},x4={readContext:Ut,useCallback:l1,useContext:Ut,useEffect:gh,useImperativeHandle:o1,useInsertionEffect:r1,useLayoutEffect:i1,useMemo:s1,useReducer:qs,useRef:n1,useState:function(){return qs(La)},useDebugValue:yh,useDeferredValue:function(e){var t=Xt();return u1(t,Ve.memoizedState,e)},useTransition:function(){var e=qs(La)[0],t=Xt().memoizedState;return[e,t]},useMutableSource:Gp,useSyncExternalStore:Qp,useId:h1,unstable_isNewReconciler:!1},w4={readContext:Ut,useCallback:l1,useContext:Ut,useEffect:gh,useImperativeHandle:o1,useInsertionEffect:r1,useLayoutEffect:i1,useMemo:s1,useReducer:Is,useRef:n1,useState:function(){return Is(La)},useDebugValue:yh,useDeferredValue:function(e){var t=Xt();return Ve===null?t.memoizedState=e:u1(t,Ve.memoizedState,e)},useTransition:function(){var e=Is(La)[0],t=Xt().memoizedState;return[e,t]},useMutableSource:Gp,useSyncExternalStore:Qp,useId:h1,unstable_isNewReconciler:!1};function en(e,t){if(e&&e.defaultProps){t=Le({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Qu(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Le({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ul={isMounted:function(e){return(e=e._reactInternals)?Ur(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=dt(),i=dr(e),a=Nn(r,i);a.payload=t,n!=null&&(a.callback=n),t=cr(e,a,i),t!==null&&(on(t,e,i,r),Ho(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=dt(),i=dr(e),a=Nn(r,i);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=cr(e,a,i),t!==null&&(on(t,e,i,r),Ho(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=dt(),r=dr(e),i=Nn(n,r);i.tag=2,t!=null&&(i.callback=t),t=cr(e,i,r),t!==null&&(on(t,e,r,n),Ho(t,e,r))}};function cm(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Fa(n,r)||!Fa(i,a):!0}function f1(e,t,n){var r=!1,i=br,a=t.contextType;return typeof a=="object"&&a!==null?a=Ut(a):(i=wt(t)?Br:lt.current,r=t.contextTypes,a=(r=r!=null)?Di(e,i):br),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ul,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=a),t}function mm(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ul.enqueueReplaceState(t,t.state,null)}function Yu(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},hh(e);var a=t.contextType;typeof a=="object"&&a!==null?i.context=Ut(a):(a=wt(t)?Br:lt.current,i.context=Di(e,a)),i.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(Qu(e,t,a,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Ul.enqueueReplaceState(i,i.state,null),vl(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Ti(e,t){try{var n="",r=t;do n+=Qy(r),r=r.return;while(r);var i=n}catch(a){i=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:i,digest:null}}function Bs(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Zu(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var _4=typeof WeakMap=="function"?WeakMap:Map;function p1(e,t,n){n=Nn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){kl||(kl=!0,s0=r),Zu(e,t)},n}function b1(e,t,n){n=Nn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Zu(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){Zu(e,t),typeof r!="function"&&(mr===null?mr=new Set([this]):mr.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function dm(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new _4;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=q4.bind(null,e,t,n),t.then(e,e))}function fm(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function pm(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Nn(-1,1),t.tag=2,cr(n,t,1))),n.lanes|=1),e)}var k4=Un.ReactCurrentOwner,$t=!1;function ct(e,t,n,r){t.child=e===null?Up(t,null,n,r):Pi(t,e.child,n,r)}function bm(e,t,n,r,i){n=n.render;var a=t.ref;return $i(t,i),r=ph(e,t,n,r,a,i),n=bh(),e!==null&&!$t?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,On(e,t,i)):(Te&&n&&rh(t),t.flags|=1,ct(e,t,r,i),t.child)}function gm(e,t,n,r,i){if(e===null){var a=n.type;return typeof a=="function"&&!Eh(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,g1(e,t,a,r,i)):(e=Go(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!(e.lanes&i)){var o=a.memoizedProps;if(n=n.compare,n=n!==null?n:Fa,n(o,r)&&e.ref===t.ref)return On(e,t,i)}return t.flags|=1,e=fr(a,r),e.ref=t.ref,e.return=t,t.child=e}function g1(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Fa(a,r)&&e.ref===t.ref)if($t=!1,t.pendingProps=r=a,(e.lanes&i)!==0)e.flags&131072&&($t=!0);else return t.lanes=e.lanes,On(e,t,i)}return Ju(e,t,n,r,i)}function y1(e,t,n){var r=t.pendingProps,i=r.children,a=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ce(pi,Dt),Dt|=n;else{if(!(n&1073741824))return e=a!==null?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Ce(pi,Dt),Dt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a!==null?a.baseLanes:n,Ce(pi,Dt),Dt|=r}else a!==null?(r=a.baseLanes|n,t.memoizedState=null):r=n,Ce(pi,Dt),Dt|=r;return ct(e,t,i,n),t.child}function v1(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ju(e,t,n,r,i){var a=wt(n)?Br:lt.current;return a=Di(t,a),$i(t,i),n=ph(e,t,n,r,a,i),r=bh(),e!==null&&!$t?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,On(e,t,i)):(Te&&r&&rh(t),t.flags|=1,ct(e,t,n,i),t.child)}function ym(e,t,n,r,i){if(wt(n)){var a=!0;fl(t)}else a=!1;if($i(t,i),t.stateNode===null)Xo(e,t),f1(t,n,r),Yu(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,l=t.memoizedProps;o.props=l;var s=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Ut(u):(u=wt(n)?Br:lt.current,u=Di(t,u));var h=n.getDerivedStateFromProps,m=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";m||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||s!==u)&&mm(t,o,r,u),tr=!1;var p=t.memoizedState;o.state=p,vl(t,r,o,i),s=t.memoizedState,l!==r||p!==s||xt.current||tr?(typeof h=="function"&&(Qu(t,n,h,r),s=t.memoizedState),(l=tr||cm(t,n,l,r,p,s,u))?(m||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),o.props=r,o.state=s,o.context=u,r=l):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,Kp(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:en(t.type,l),o.props=u,m=t.pendingProps,p=o.context,s=n.contextType,typeof s=="object"&&s!==null?s=Ut(s):(s=wt(n)?Br:lt.current,s=Di(t,s));var f=n.getDerivedStateFromProps;(h=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==m||p!==s)&&mm(t,o,r,s),tr=!1,p=t.memoizedState,o.state=p,vl(t,r,o,i);var v=t.memoizedState;l!==m||p!==v||xt.current||tr?(typeof f=="function"&&(Qu(t,n,f,r),v=t.memoizedState),(u=tr||cm(t,n,u,r,p,v,s)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,s),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,s)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=v),o.props=r,o.state=v,o.context=s,r=u):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return e0(e,t,n,r,a,i)}function e0(e,t,n,r,i,a){v1(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&rm(t,n,!1),On(e,t,a);r=t.stateNode,k4.current=t;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=Pi(t,e.child,null,a),t.child=Pi(t,null,l,a)):ct(e,t,l,a),t.memoizedState=r.state,i&&rm(t,n,!0),t.child}function $1(e){var t=e.stateNode;t.pendingContext?nm(e,t.pendingContext,t.pendingContext!==t.context):t.context&&nm(e,t.context,!1),ch(e,t.containerInfo)}function vm(e,t,n,r,i){return zi(),ah(i),t.flags|=256,ct(e,t,n,r),t.child}var t0={dehydrated:null,treeContext:null,retryLane:0};function n0(e){return{baseLanes:e,cachePool:null,transitions:null}}function x1(e,t,n){var r=t.pendingProps,i=Re.current,a=!1,o=(t.flags&128)!==0,l;if((l=o)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),Ce(Re,i&1),e===null)return Vu(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,a?(r=t.mode,a=t.child,o={mode:"hidden",children:o},!(r&1)&&a!==null?(a.childLanes=0,a.pendingProps=o):a=Vl(o,r,0,null),e=Ir(e,r,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=n0(n),t.memoizedState=t0,e):vh(t,o));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return S4(e,t,o,r,l,i,n);if(a){a=r.fallback,o=t.mode,i=e.child,l=i.sibling;var s={mode:"hidden",children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=fr(i,s),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?a=fr(l,a):(a=Ir(a,o,n,null),a.flags|=2),a.return=t,r.return=t,r.sibling=a,t.child=r,r=a,a=t.child,o=e.child.memoizedState,o=o===null?n0(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},a.memoizedState=o,a.childLanes=e.childLanes&~n,t.memoizedState=t0,r}return a=e.child,e=a.sibling,r=fr(a,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function vh(e,t){return t=Vl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function xo(e,t,n,r){return r!==null&&ah(r),Pi(t,e.child,null,n),e=vh(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function S4(e,t,n,r,i,a,o){if(n)return t.flags&256?(t.flags&=-257,r=Bs(Error(j(422))),xo(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=r.fallback,i=t.mode,r=Vl({mode:"visible",children:r.children},i,0,null),a=Ir(a,i,o,null),a.flags|=2,r.return=t,a.return=t,r.sibling=a,t.child=r,t.mode&1&&Pi(t,e.child,null,o),t.child.memoizedState=n0(o),t.memoizedState=t0,a);if(!(t.mode&1))return xo(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,a=Error(j(419)),r=Bs(a,r,void 0),xo(e,t,o,r)}if(l=(o&e.childLanes)!==0,$t||l){if(r=Je,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==a.retryLane&&(a.retryLane=i,Ln(e,i),on(r,e,i,-1))}return Sh(),r=Bs(Error(j(421))),xo(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=I4.bind(null,e),i._reactRetry=t,null):(e=a.treeContext,Pt=hr(i.nextSibling),Tt=t,Te=!0,rn=null,e!==null&&(qt[It++]=Tn,qt[It++]=Fn,qt[It++]=Lr,Tn=e.id,Fn=e.overflow,Lr=t),t=vh(t,r.children),t.flags|=4096,t)}function $m(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Gu(e.return,t,n)}function Ls(e,t,n,r,i){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=i)}function w1(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;if(ct(e,t,r.children,n),r=Re.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&$m(e,n,t);else if(e.tag===19)$m(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Ce(Re,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&$l(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Ls(t,!1,i,n,a);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&$l(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Ls(t,!0,n,null,a);break;case"together":Ls(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Xo(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function On(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),jr|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(j(153));if(t.child!==null){for(e=t.child,n=fr(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=fr(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function E4(e,t,n){switch(t.tag){case 3:$1(t),zi();break;case 5:Vp(t);break;case 1:wt(t.type)&&fl(t);break;case 4:ch(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;Ce(gl,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Ce(Re,Re.current&1),t.flags|=128,null):n&t.child.childLanes?x1(e,t,n):(Ce(Re,Re.current&1),e=On(e,t,n),e!==null?e.sibling:null);Ce(Re,Re.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return w1(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ce(Re,Re.current),r)break;return null;case 22:case 23:return t.lanes=0,y1(e,t,n)}return On(e,t,n)}var _1,r0,k1,S1;_1=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};r0=function(){};k1=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Mr(yn.current);var a=null;switch(n){case"input":i=Su(e,i),r=Su(e,r),a=[];break;case"select":i=Le({},i,{value:void 0}),r=Le({},r,{value:void 0}),a=[];break;case"textarea":i=Du(e,i),r=Du(e,r),a=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ml)}Pu(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ea.hasOwnProperty(u)?a||(a=[]):(a=a||[]).push(u,null));for(u in r){var s=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&s!==l&&(s!=null||l!=null))if(u==="style")if(l){for(o in l)!l.hasOwnProperty(o)||s&&s.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in s)s.hasOwnProperty(o)&&l[o]!==s[o]&&(n||(n={}),n[o]=s[o])}else n||(a||(a=[]),a.push(u,n)),n=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,l=l?l.__html:void 0,s!=null&&l!==s&&(a=a||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(a=a||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ea.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&Pe("scroll",e),a||l===s||(a=[])):(a=a||[]).push(u,s))}n&&(a=a||[]).push("style",n);var u=a;(t.updateQueue=u)&&(t.flags|=4)}};S1=function(e,t,n,r){n!==r&&(t.flags|=4)};function ta(e,t){if(!Te)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function at(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function C4(e,t,n){var r=t.pendingProps;switch(ih(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return at(t),null;case 1:return wt(t.type)&&dl(),at(t),null;case 3:return r=t.stateNode,Ai(),Ae(xt),Ae(lt),dh(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(vo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,rn!==null&&(c0(rn),rn=null))),r0(e,t),at(t),null;case 5:mh(t);var i=Mr(Ia.current);if(n=t.type,e!==null&&t.stateNode!=null)k1(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(j(166));return at(t),null}if(e=Mr(yn.current),vo(t)){r=t.stateNode,n=t.type;var a=t.memoizedProps;switch(r[fn]=t,r[Ra]=a,e=(t.mode&1)!==0,n){case"dialog":Pe("cancel",r),Pe("close",r);break;case"iframe":case"object":case"embed":Pe("load",r);break;case"video":case"audio":for(i=0;i<ca.length;i++)Pe(ca[i],r);break;case"source":Pe("error",r);break;case"img":case"image":case"link":Pe("error",r),Pe("load",r);break;case"details":Pe("toggle",r);break;case"input":zc(r,a),Pe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},Pe("invalid",r);break;case"textarea":Ac(r,a),Pe("invalid",r)}Pu(n,a),i=null;for(var o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="children"?typeof l=="string"?r.textContent!==l&&(a.suppressHydrationWarning!==!0&&yo(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(a.suppressHydrationWarning!==!0&&yo(r.textContent,l,e),i=["children",""+l]):Ea.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&Pe("scroll",r)}switch(n){case"input":uo(r),Pc(r,a,!0);break;case"textarea":uo(r),Tc(r);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(r.onclick=ml)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Jf(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[fn]=t,e[Ra]=r,_1(e,t,!1,!1),t.stateNode=e;e:{switch(o=Au(n,r),n){case"dialog":Pe("cancel",e),Pe("close",e),i=r;break;case"iframe":case"object":case"embed":Pe("load",e),i=r;break;case"video":case"audio":for(i=0;i<ca.length;i++)Pe(ca[i],e);i=r;break;case"source":Pe("error",e),i=r;break;case"img":case"image":case"link":Pe("error",e),Pe("load",e),i=r;break;case"details":Pe("toggle",e),i=r;break;case"input":zc(e,r),i=Su(e,r),Pe("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Le({},r,{value:void 0}),Pe("invalid",e);break;case"textarea":Ac(e,r),i=Du(e,r),Pe("invalid",e);break;default:i=r}Pu(n,i),l=i;for(a in l)if(l.hasOwnProperty(a)){var s=l[a];a==="style"?np(e,s):a==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&ep(e,s)):a==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&Ca(e,s):typeof s=="number"&&Ca(e,""+s):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(Ea.hasOwnProperty(a)?s!=null&&a==="onScroll"&&Pe("scroll",e):s!=null&&H0(e,a,s,o))}switch(n){case"input":uo(e),Pc(e,r,!1);break;case"textarea":uo(e),Tc(e);break;case"option":r.value!=null&&e.setAttribute("value",""+pr(r.value));break;case"select":e.multiple=!!r.multiple,a=r.value,a!=null?bi(e,!!r.multiple,a,!1):r.defaultValue!=null&&bi(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=ml)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return at(t),null;case 6:if(e&&t.stateNode!=null)S1(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(j(166));if(n=Mr(Ia.current),Mr(yn.current),vo(t)){if(r=t.stateNode,n=t.memoizedProps,r[fn]=t,(a=r.nodeValue!==n)&&(e=Tt,e!==null))switch(e.tag){case 3:yo(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&yo(r.nodeValue,n,(e.mode&1)!==0)}a&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[fn]=t,t.stateNode=r}return at(t),null;case 13:if(Ae(Re),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Te&&Pt!==null&&t.mode&1&&!(t.flags&128))Hp(),zi(),t.flags|=98560,a=!1;else if(a=vo(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(j(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(j(317));a[fn]=t}else zi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;at(t),a=!1}else rn!==null&&(c0(rn),rn=null),a=!0;if(!a)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Re.current&1?Ge===0&&(Ge=3):Sh())),t.updateQueue!==null&&(t.flags|=4),at(t),null);case 4:return Ai(),r0(e,t),e===null&&Na(t.stateNode.containerInfo),at(t),null;case 10:return sh(t.type._context),at(t),null;case 17:return wt(t.type)&&dl(),at(t),null;case 19:if(Ae(Re),a=t.memoizedState,a===null)return at(t),null;if(r=(t.flags&128)!==0,o=a.rendering,o===null)if(r)ta(a,!1);else{if(Ge!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=$l(e),o!==null){for(t.flags|=128,ta(a,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)a=n,e=r,a.flags&=14680066,o=a.alternate,o===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=o.childLanes,a.lanes=o.lanes,a.child=o.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=o.memoizedProps,a.memoizedState=o.memoizedState,a.updateQueue=o.updateQueue,a.type=o.type,e=o.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Ce(Re,Re.current&1|2),t.child}e=e.sibling}a.tail!==null&&He()>Fi&&(t.flags|=128,r=!0,ta(a,!1),t.lanes=4194304)}else{if(!r)if(e=$l(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),ta(a,!0),a.tail===null&&a.tailMode==="hidden"&&!o.alternate&&!Te)return at(t),null}else 2*He()-a.renderingStartTime>Fi&&n!==1073741824&&(t.flags|=128,r=!0,ta(a,!1),t.lanes=4194304);a.isBackwards?(o.sibling=t.child,t.child=o):(n=a.last,n!==null?n.sibling=o:t.child=o,a.last=o)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=He(),t.sibling=null,n=Re.current,Ce(Re,r?n&1|2:n&1),t):(at(t),null);case 22:case 23:return kh(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Dt&1073741824&&(at(t),t.subtreeFlags&6&&(t.flags|=8192)):at(t),null;case 24:return null;case 25:return null}throw Error(j(156,t.tag))}function D4(e,t){switch(ih(t),t.tag){case 1:return wt(t.type)&&dl(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ai(),Ae(xt),Ae(lt),dh(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return mh(t),null;case 13:if(Ae(Re),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(j(340));zi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Ae(Re),null;case 4:return Ai(),null;case 10:return sh(t.type._context),null;case 22:case 23:return kh(),null;case 24:return null;default:return null}}var wo=!1,ot=!1,z4=typeof WeakSet=="function"?WeakSet:Set,Z=null;function fi(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){je(e,t,r)}else n.current=null}function i0(e,t,n){try{n()}catch(r){je(e,t,r)}}var xm=!1;function P4(e,t){if(Ou=ul,e=Pp(),nh(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var o=0,l=-1,s=-1,u=0,h=0,m=e,p=null;t:for(;;){for(var f;m!==n||i!==0&&m.nodeType!==3||(l=o+i),m!==a||r!==0&&m.nodeType!==3||(s=o+r),m.nodeType===3&&(o+=m.nodeValue.length),(f=m.firstChild)!==null;)p=m,m=f;for(;;){if(m===e)break t;if(p===n&&++u===i&&(l=o),p===a&&++h===r&&(s=o),(f=m.nextSibling)!==null)break;m=p,p=m.parentNode}m=f}n=l===-1||s===-1?null:{start:l,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(ju={focusedElem:e,selectionRange:n},ul=!1,Z=t;Z!==null;)if(t=Z,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Z=e;else for(;Z!==null;){t=Z;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var $=v.memoizedProps,k=v.memoizedState,g=t.stateNode,y=g.getSnapshotBeforeUpdate(t.elementType===t.type?$:en(t.type,$),k);g.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var w=t.stateNode.containerInfo;w.nodeType===1?w.textContent="":w.nodeType===9&&w.documentElement&&w.removeChild(w.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(j(163))}}catch(P){je(t,t.return,P)}if(e=t.sibling,e!==null){e.return=t.return,Z=e;break}Z=t.return}return v=xm,xm=!1,v}function va(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var a=i.destroy;i.destroy=void 0,a!==void 0&&i0(t,n,a)}i=i.next}while(i!==r)}}function Xl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function a0(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function E1(e){var t=e.alternate;t!==null&&(e.alternate=null,E1(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[fn],delete t[Ra],delete t[Uu],delete t[m4],delete t[d4])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function C1(e){return e.tag===5||e.tag===3||e.tag===4}function wm(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||C1(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function o0(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ml));else if(r!==4&&(e=e.child,e!==null))for(o0(e,t,n),e=e.sibling;e!==null;)o0(e,t,n),e=e.sibling}function l0(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(l0(e,t,n),e=e.sibling;e!==null;)l0(e,t,n),e=e.sibling}var tt=null,tn=!1;function Vn(e,t,n){for(n=n.child;n!==null;)D1(e,t,n),n=n.sibling}function D1(e,t,n){if(gn&&typeof gn.onCommitFiberUnmount=="function")try{gn.onCommitFiberUnmount(Il,n)}catch{}switch(n.tag){case 5:ot||fi(n,t);case 6:var r=tt,i=tn;tt=null,Vn(e,t,n),tt=r,tn=i,tt!==null&&(tn?(e=tt,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):tt.removeChild(n.stateNode));break;case 18:tt!==null&&(tn?(e=tt,n=n.stateNode,e.nodeType===8?Fs(e.parentNode,n):e.nodeType===1&&Fs(e,n),Aa(e)):Fs(tt,n.stateNode));break;case 4:r=tt,i=tn,tt=n.stateNode.containerInfo,tn=!0,Vn(e,t,n),tt=r,tn=i;break;case 0:case 11:case 14:case 15:if(!ot&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var a=i,o=a.destroy;a=a.tag,o!==void 0&&(a&2||a&4)&&i0(n,t,o),i=i.next}while(i!==r)}Vn(e,t,n);break;case 1:if(!ot&&(fi(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){je(n,t,l)}Vn(e,t,n);break;case 21:Vn(e,t,n);break;case 22:n.mode&1?(ot=(r=ot)||n.memoizedState!==null,Vn(e,t,n),ot=r):Vn(e,t,n);break;default:Vn(e,t,n)}}function _m(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new z4),t.forEach(function(r){var i=B4.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Jt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var a=e,o=t,l=o;e:for(;l!==null;){switch(l.tag){case 5:tt=l.stateNode,tn=!1;break e;case 3:tt=l.stateNode.containerInfo,tn=!0;break e;case 4:tt=l.stateNode.containerInfo,tn=!0;break e}l=l.return}if(tt===null)throw Error(j(160));D1(a,o,i),tt=null,tn=!1;var s=i.alternate;s!==null&&(s.return=null),i.return=null}catch(u){je(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)z1(t,e),t=t.sibling}function z1(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Jt(t,e),hn(e),r&4){try{va(3,e,e.return),Xl(3,e)}catch($){je(e,e.return,$)}try{va(5,e,e.return)}catch($){je(e,e.return,$)}}break;case 1:Jt(t,e),hn(e),r&512&&n!==null&&fi(n,n.return);break;case 5:if(Jt(t,e),hn(e),r&512&&n!==null&&fi(n,n.return),e.flags&32){var i=e.stateNode;try{Ca(i,"")}catch($){je(e,e.return,$)}}if(r&4&&(i=e.stateNode,i!=null)){var a=e.memoizedProps,o=n!==null?n.memoizedProps:a,l=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{l==="input"&&a.type==="radio"&&a.name!=null&&Yf(i,a),Au(l,o);var u=Au(l,a);for(o=0;o<s.length;o+=2){var h=s[o],m=s[o+1];h==="style"?np(i,m):h==="dangerouslySetInnerHTML"?ep(i,m):h==="children"?Ca(i,m):H0(i,h,m,u)}switch(l){case"input":Eu(i,a);break;case"textarea":Zf(i,a);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!a.multiple;var f=a.value;f!=null?bi(i,!!a.multiple,f,!1):p!==!!a.multiple&&(a.defaultValue!=null?bi(i,!!a.multiple,a.defaultValue,!0):bi(i,!!a.multiple,a.multiple?[]:"",!1))}i[Ra]=a}catch($){je(e,e.return,$)}}break;case 6:if(Jt(t,e),hn(e),r&4){if(e.stateNode===null)throw Error(j(162));i=e.stateNode,a=e.memoizedProps;try{i.nodeValue=a}catch($){je(e,e.return,$)}}break;case 3:if(Jt(t,e),hn(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Aa(t.containerInfo)}catch($){je(e,e.return,$)}break;case 4:Jt(t,e),hn(e);break;case 13:Jt(t,e),hn(e),i=e.child,i.flags&8192&&(a=i.memoizedState!==null,i.stateNode.isHidden=a,!a||i.alternate!==null&&i.alternate.memoizedState!==null||(wh=He())),r&4&&_m(e);break;case 22:if(h=n!==null&&n.memoizedState!==null,e.mode&1?(ot=(u=ot)||h,Jt(t,e),ot=u):Jt(t,e),hn(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!h&&e.mode&1)for(Z=e,h=e.child;h!==null;){for(m=Z=h;Z!==null;){switch(p=Z,f=p.child,p.tag){case 0:case 11:case 14:case 15:va(4,p,p.return);break;case 1:fi(p,p.return);var v=p.stateNode;if(typeof v.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch($){je(r,n,$)}}break;case 5:fi(p,p.return);break;case 22:if(p.memoizedState!==null){Sm(m);continue}}f!==null?(f.return=p,Z=f):Sm(m)}h=h.sibling}e:for(h=null,m=e;;){if(m.tag===5){if(h===null){h=m;try{i=m.stateNode,u?(a=i.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(l=m.stateNode,s=m.memoizedProps.style,o=s!=null&&s.hasOwnProperty("display")?s.display:null,l.style.display=tp("display",o))}catch($){je(e,e.return,$)}}}else if(m.tag===6){if(h===null)try{m.stateNode.nodeValue=u?"":m.memoizedProps}catch($){je(e,e.return,$)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;h===m&&(h=null),m=m.return}h===m&&(h=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Jt(t,e),hn(e),r&4&&_m(e);break;case 21:break;default:Jt(t,e),hn(e)}}function hn(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(C1(n)){var r=n;break e}n=n.return}throw Error(j(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ca(i,""),r.flags&=-33);var a=wm(e);l0(e,a,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=wm(e);o0(e,l,o);break;default:throw Error(j(161))}}catch(s){je(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function A4(e,t,n){Z=e,P1(e)}function P1(e,t,n){for(var r=(e.mode&1)!==0;Z!==null;){var i=Z,a=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||wo;if(!o){var l=i.alternate,s=l!==null&&l.memoizedState!==null||ot;l=wo;var u=ot;if(wo=o,(ot=s)&&!u)for(Z=i;Z!==null;)o=Z,s=o.child,o.tag===22&&o.memoizedState!==null?Em(i):s!==null?(s.return=o,Z=s):Em(i);for(;a!==null;)Z=a,P1(a),a=a.sibling;Z=i,wo=l,ot=u}km(e)}else i.subtreeFlags&8772&&a!==null?(a.return=i,Z=a):km(e)}}function km(e){for(;Z!==null;){var t=Z;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ot||Xl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ot)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:en(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&sm(t,a,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}sm(t,o,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var h=u.memoizedState;if(h!==null){var m=h.dehydrated;m!==null&&Aa(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(j(163))}ot||t.flags&512&&a0(t)}catch(p){je(t,t.return,p)}}if(t===e){Z=null;break}if(n=t.sibling,n!==null){n.return=t.return,Z=n;break}Z=t.return}}function Sm(e){for(;Z!==null;){var t=Z;if(t===e){Z=null;break}var n=t.sibling;if(n!==null){n.return=t.return,Z=n;break}Z=t.return}}function Em(e){for(;Z!==null;){var t=Z;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Xl(4,t)}catch(s){je(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(s){je(t,i,s)}}var a=t.return;try{a0(t)}catch(s){je(t,a,s)}break;case 5:var o=t.return;try{a0(t)}catch(s){je(t,o,s)}}}catch(s){je(t,t.return,s)}if(t===e){Z=null;break}var l=t.sibling;if(l!==null){l.return=t.return,Z=l;break}Z=t.return}}var T4=Math.ceil,_l=Un.ReactCurrentDispatcher,$h=Un.ReactCurrentOwner,Ht=Un.ReactCurrentBatchConfig,ge=0,Je=null,Xe=null,nt=0,Dt=0,pi=wr(0),Ge=0,ja=null,jr=0,Kl=0,xh=0,$a=null,vt=null,wh=0,Fi=1/0,zn=null,kl=!1,s0=null,mr=null,_o=!1,ar=null,Sl=0,xa=0,u0=null,Ko=-1,Vo=0;function dt(){return ge&6?He():Ko!==-1?Ko:Ko=He()}function dr(e){return e.mode&1?ge&2&&nt!==0?nt&-nt:p4.transition!==null?(Vo===0&&(Vo=fp()),Vo):(e=we,e!==0||(e=window.event,e=e===void 0?16:xp(e.type)),e):1}function on(e,t,n,r){if(50<xa)throw xa=0,u0=null,Error(j(185));Ga(e,n,r),(!(ge&2)||e!==Je)&&(e===Je&&(!(ge&2)&&(Kl|=n),Ge===4&&rr(e,nt)),_t(e,r),n===1&&ge===0&&!(t.mode&1)&&(Fi=He()+500,Hl&&_r()))}function _t(e,t){var n=e.callbackNode;p2(e,t);var r=sl(e,e===Je?nt:0);if(r===0)n!==null&&Mc(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Mc(n),t===1)e.tag===0?f4(Cm.bind(null,e)):Lp(Cm.bind(null,e)),h4(function(){!(ge&6)&&_r()}),n=null;else{switch(pp(r)){case 1:n=V0;break;case 4:n=mp;break;case 16:n=ll;break;case 536870912:n=dp;break;default:n=ll}n=I1(n,A1.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function A1(e,t){if(Ko=-1,Vo=0,ge&6)throw Error(j(327));var n=e.callbackNode;if(xi()&&e.callbackNode!==n)return null;var r=sl(e,e===Je?nt:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=El(e,r);else{t=r;var i=ge;ge|=2;var a=F1();(Je!==e||nt!==t)&&(zn=null,Fi=He()+500,qr(e,t));do try{M4();break}catch(l){T1(e,l)}while(!0);lh(),_l.current=a,ge=i,Xe!==null?t=0:(Je=null,nt=0,t=Ge)}if(t!==0){if(t===2&&(i=Ru(e),i!==0&&(r=i,t=h0(e,i))),t===1)throw n=ja,qr(e,0),rr(e,r),_t(e,He()),n;if(t===6)rr(e,r);else{if(i=e.current.alternate,!(r&30)&&!F4(i)&&(t=El(e,r),t===2&&(a=Ru(e),a!==0&&(r=a,t=h0(e,a))),t===1))throw n=ja,qr(e,0),rr(e,r),_t(e,He()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(j(345));case 2:Ar(e,vt,zn);break;case 3:if(rr(e,r),(r&130023424)===r&&(t=wh+500-He(),10<t)){if(sl(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){dt(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Wu(Ar.bind(null,e,vt,zn),t);break}Ar(e,vt,zn);break;case 4:if(rr(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-an(r);a=1<<o,o=t[o],o>i&&(i=o),r&=~a}if(r=i,r=He()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*T4(r/1960))-r,10<r){e.timeoutHandle=Wu(Ar.bind(null,e,vt,zn),r);break}Ar(e,vt,zn);break;case 5:Ar(e,vt,zn);break;default:throw Error(j(329))}}}return _t(e,He()),e.callbackNode===n?A1.bind(null,e):null}function h0(e,t){var n=$a;return e.current.memoizedState.isDehydrated&&(qr(e,t).flags|=256),e=El(e,t),e!==2&&(t=vt,vt=n,t!==null&&c0(t)),e}function c0(e){vt===null?vt=e:vt.push.apply(vt,e)}function F4(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!sn(a(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function rr(e,t){for(t&=~xh,t&=~Kl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-an(t),r=1<<n;e[n]=-1,t&=~r}}function Cm(e){if(ge&6)throw Error(j(327));xi();var t=sl(e,0);if(!(t&1))return _t(e,He()),null;var n=El(e,t);if(e.tag!==0&&n===2){var r=Ru(e);r!==0&&(t=r,n=h0(e,r))}if(n===1)throw n=ja,qr(e,0),rr(e,t),_t(e,He()),n;if(n===6)throw Error(j(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Ar(e,vt,zn),_t(e,He()),null}function _h(e,t){var n=ge;ge|=1;try{return e(t)}finally{ge=n,ge===0&&(Fi=He()+500,Hl&&_r())}}function Hr(e){ar!==null&&ar.tag===0&&!(ge&6)&&xi();var t=ge;ge|=1;var n=Ht.transition,r=we;try{if(Ht.transition=null,we=1,e)return e()}finally{we=r,Ht.transition=n,ge=t,!(ge&6)&&_r()}}function kh(){Dt=pi.current,Ae(pi)}function qr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,u4(n)),Xe!==null)for(n=Xe.return;n!==null;){var r=n;switch(ih(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&dl();break;case 3:Ai(),Ae(xt),Ae(lt),dh();break;case 5:mh(r);break;case 4:Ai();break;case 13:Ae(Re);break;case 19:Ae(Re);break;case 10:sh(r.type._context);break;case 22:case 23:kh()}n=n.return}if(Je=e,Xe=e=fr(e.current,null),nt=Dt=t,Ge=0,ja=null,xh=Kl=jr=0,vt=$a=null,Nr!==null){for(t=0;t<Nr.length;t++)if(n=Nr[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,a=n.pending;if(a!==null){var o=a.next;a.next=i,r.next=o}n.pending=r}Nr=null}return e}function T1(e,t){do{var n=Xe;try{if(lh(),Wo.current=wl,xl){for(var r=Ie.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}xl=!1}if(Or=0,Ze=Ve=Ie=null,ya=!1,Ba=0,$h.current=null,n===null||n.return===null){Ge=1,ja=t,Xe=null;break}e:{var a=e,o=n.return,l=n,s=t;if(t=nt,l.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,h=l,m=h.tag;if(!(h.mode&1)&&(m===0||m===11||m===15)){var p=h.alternate;p?(h.updateQueue=p.updateQueue,h.memoizedState=p.memoizedState,h.lanes=p.lanes):(h.updateQueue=null,h.memoizedState=null)}var f=fm(o);if(f!==null){f.flags&=-257,pm(f,o,l,a,t),f.mode&1&&dm(a,u,t),t=f,s=u;var v=t.updateQueue;if(v===null){var $=new Set;$.add(s),t.updateQueue=$}else v.add(s);break e}else{if(!(t&1)){dm(a,u,t),Sh();break e}s=Error(j(426))}}else if(Te&&l.mode&1){var k=fm(o);if(k!==null){!(k.flags&65536)&&(k.flags|=256),pm(k,o,l,a,t),ah(Ti(s,l));break e}}a=s=Ti(s,l),Ge!==4&&(Ge=2),$a===null?$a=[a]:$a.push(a),a=o;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var g=p1(a,s,t);lm(a,g);break e;case 1:l=s;var y=a.type,w=a.stateNode;if(!(a.flags&128)&&(typeof y.getDerivedStateFromError=="function"||w!==null&&typeof w.componentDidCatch=="function"&&(mr===null||!mr.has(w)))){a.flags|=65536,t&=-t,a.lanes|=t;var P=b1(a,l,t);lm(a,P);break e}}a=a.return}while(a!==null)}M1(n)}catch(F){t=F,Xe===n&&n!==null&&(Xe=n=n.return);continue}break}while(!0)}function F1(){var e=_l.current;return _l.current=wl,e===null?wl:e}function Sh(){(Ge===0||Ge===3||Ge===2)&&(Ge=4),Je===null||!(jr&268435455)&&!(Kl&268435455)||rr(Je,nt)}function El(e,t){var n=ge;ge|=2;var r=F1();(Je!==e||nt!==t)&&(zn=null,qr(e,t));do try{N4();break}catch(i){T1(e,i)}while(!0);if(lh(),ge=n,_l.current=r,Xe!==null)throw Error(j(261));return Je=null,nt=0,Ge}function N4(){for(;Xe!==null;)N1(Xe)}function M4(){for(;Xe!==null&&!o2();)N1(Xe)}function N1(e){var t=q1(e.alternate,e,Dt);e.memoizedProps=e.pendingProps,t===null?M1(e):Xe=t,$h.current=null}function M1(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=D4(n,t),n!==null){n.flags&=32767,Xe=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ge=6,Xe=null;return}}else if(n=C4(n,t,Dt),n!==null){Xe=n;return}if(t=t.sibling,t!==null){Xe=t;return}Xe=t=e}while(t!==null);Ge===0&&(Ge=5)}function Ar(e,t,n){var r=we,i=Ht.transition;try{Ht.transition=null,we=1,R4(e,t,n,r)}finally{Ht.transition=i,we=r}return null}function R4(e,t,n,r){do xi();while(ar!==null);if(ge&6)throw Error(j(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(j(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(b2(e,a),e===Je&&(Xe=Je=null,nt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||_o||(_o=!0,I1(ll,function(){return xi(),null})),a=(n.flags&15990)!==0,n.subtreeFlags&15990||a){a=Ht.transition,Ht.transition=null;var o=we;we=1;var l=ge;ge|=4,$h.current=null,P4(e,n),z1(n,e),n4(ju),ul=!!Ou,ju=Ou=null,e.current=n,A4(n),l2(),ge=l,we=o,Ht.transition=a}else e.current=n;if(_o&&(_o=!1,ar=e,Sl=i),a=e.pendingLanes,a===0&&(mr=null),h2(n.stateNode),_t(e,He()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(kl)throw kl=!1,e=s0,s0=null,e;return Sl&1&&e.tag!==0&&xi(),a=e.pendingLanes,a&1?e===u0?xa++:(xa=0,u0=e):xa=0,_r(),null}function xi(){if(ar!==null){var e=pp(Sl),t=Ht.transition,n=we;try{if(Ht.transition=null,we=16>e?16:e,ar===null)var r=!1;else{if(e=ar,ar=null,Sl=0,ge&6)throw Error(j(331));var i=ge;for(ge|=4,Z=e.current;Z!==null;){var a=Z,o=a.child;if(Z.flags&16){var l=a.deletions;if(l!==null){for(var s=0;s<l.length;s++){var u=l[s];for(Z=u;Z!==null;){var h=Z;switch(h.tag){case 0:case 11:case 15:va(8,h,a)}var m=h.child;if(m!==null)m.return=h,Z=m;else for(;Z!==null;){h=Z;var p=h.sibling,f=h.return;if(E1(h),h===u){Z=null;break}if(p!==null){p.return=f,Z=p;break}Z=f}}}var v=a.alternate;if(v!==null){var $=v.child;if($!==null){v.child=null;do{var k=$.sibling;$.sibling=null,$=k}while($!==null)}}Z=a}}if(a.subtreeFlags&2064&&o!==null)o.return=a,Z=o;else e:for(;Z!==null;){if(a=Z,a.flags&2048)switch(a.tag){case 0:case 11:case 15:va(9,a,a.return)}var g=a.sibling;if(g!==null){g.return=a.return,Z=g;break e}Z=a.return}}var y=e.current;for(Z=y;Z!==null;){o=Z;var w=o.child;if(o.subtreeFlags&2064&&w!==null)w.return=o,Z=w;else e:for(o=y;Z!==null;){if(l=Z,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Xl(9,l)}}catch(F){je(l,l.return,F)}if(l===o){Z=null;break e}var P=l.sibling;if(P!==null){P.return=l.return,Z=P;break e}Z=l.return}}if(ge=i,_r(),gn&&typeof gn.onPostCommitFiberRoot=="function")try{gn.onPostCommitFiberRoot(Il,e)}catch{}r=!0}return r}finally{we=n,Ht.transition=t}}return!1}function Dm(e,t,n){t=Ti(n,t),t=p1(e,t,1),e=cr(e,t,1),t=dt(),e!==null&&(Ga(e,1,t),_t(e,t))}function je(e,t,n){if(e.tag===3)Dm(e,e,n);else for(;t!==null;){if(t.tag===3){Dm(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(mr===null||!mr.has(r))){e=Ti(n,e),e=b1(t,e,1),t=cr(t,e,1),e=dt(),t!==null&&(Ga(t,1,e),_t(t,e));break}}t=t.return}}function q4(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=dt(),e.pingedLanes|=e.suspendedLanes&n,Je===e&&(nt&n)===n&&(Ge===4||Ge===3&&(nt&130023424)===nt&&500>He()-wh?qr(e,0):xh|=n),_t(e,t)}function R1(e,t){t===0&&(e.mode&1?(t=mo,mo<<=1,!(mo&130023424)&&(mo=4194304)):t=1);var n=dt();e=Ln(e,t),e!==null&&(Ga(e,t,n),_t(e,n))}function I4(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),R1(e,n)}function B4(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(j(314))}r!==null&&r.delete(t),R1(e,n)}var q1;q1=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||xt.current)$t=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return $t=!1,E4(e,t,n);$t=!!(e.flags&131072)}else $t=!1,Te&&t.flags&1048576&&Op(t,bl,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Xo(e,t),e=t.pendingProps;var i=Di(t,lt.current);$i(t,n),i=ph(null,t,r,e,i,n);var a=bh();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,wt(r)?(a=!0,fl(t)):a=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,hh(t),i.updater=Ul,t.stateNode=i,i._reactInternals=t,Yu(t,r,e,n),t=e0(null,t,r,!0,a,n)):(t.tag=0,Te&&a&&rh(t),ct(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Xo(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=O4(r),e=en(r,e),i){case 0:t=Ju(null,t,r,e,n);break e;case 1:t=ym(null,t,r,e,n);break e;case 11:t=bm(null,t,r,e,n);break e;case 14:t=gm(null,t,r,en(r.type,e),n);break e}throw Error(j(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:en(r,i),Ju(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:en(r,i),ym(e,t,r,i,n);case 3:e:{if($1(t),e===null)throw Error(j(387));r=t.pendingProps,a=t.memoizedState,i=a.element,Kp(e,t),vl(t,r,null,n);var o=t.memoizedState;if(r=o.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){i=Ti(Error(j(423)),t),t=vm(e,t,r,n,i);break e}else if(r!==i){i=Ti(Error(j(424)),t),t=vm(e,t,r,n,i);break e}else for(Pt=hr(t.stateNode.containerInfo.firstChild),Tt=t,Te=!0,rn=null,n=Up(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(zi(),r===i){t=On(e,t,n);break e}ct(e,t,r,n)}t=t.child}return t;case 5:return Vp(t),e===null&&Vu(t),r=t.type,i=t.pendingProps,a=e!==null?e.memoizedProps:null,o=i.children,Hu(r,i)?o=null:a!==null&&Hu(r,a)&&(t.flags|=32),v1(e,t),ct(e,t,o,n),t.child;case 6:return e===null&&Vu(t),null;case 13:return x1(e,t,n);case 4:return ch(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Pi(t,null,r,n):ct(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:en(r,i),bm(e,t,r,i,n);case 7:return ct(e,t,t.pendingProps,n),t.child;case 8:return ct(e,t,t.pendingProps.children,n),t.child;case 12:return ct(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,a=t.memoizedProps,o=i.value,Ce(gl,r._currentValue),r._currentValue=o,a!==null)if(sn(a.value,o)){if(a.children===i.children&&!xt.current){t=On(e,t,n);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var l=a.dependencies;if(l!==null){o=a.child;for(var s=l.firstContext;s!==null;){if(s.context===r){if(a.tag===1){s=Nn(-1,n&-n),s.tag=2;var u=a.updateQueue;if(u!==null){u=u.shared;var h=u.pending;h===null?s.next=s:(s.next=h.next,h.next=s),u.pending=s}}a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),Gu(a.return,n,t),l.lanes|=n;break}s=s.next}}else if(a.tag===10)o=a.type===t.type?null:a.child;else if(a.tag===18){if(o=a.return,o===null)throw Error(j(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Gu(o,n,t),o=a.sibling}else o=a.child;if(o!==null)o.return=a;else for(o=a;o!==null;){if(o===t){o=null;break}if(a=o.sibling,a!==null){a.return=o.return,o=a;break}o=o.return}a=o}ct(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,$i(t,n),i=Ut(i),r=r(i),t.flags|=1,ct(e,t,r,n),t.child;case 14:return r=t.type,i=en(r,t.pendingProps),i=en(r.type,i),gm(e,t,r,i,n);case 15:return g1(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:en(r,i),Xo(e,t),t.tag=1,wt(r)?(e=!0,fl(t)):e=!1,$i(t,n),f1(t,r,i),Yu(t,r,i,n),e0(null,t,r,!0,e,n);case 19:return w1(e,t,n);case 22:return y1(e,t,n)}throw Error(j(156,t.tag))};function I1(e,t){return cp(e,t)}function L4(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ot(e,t,n,r){return new L4(e,t,n,r)}function Eh(e){return e=e.prototype,!(!e||!e.isReactComponent)}function O4(e){if(typeof e=="function")return Eh(e)?1:0;if(e!=null){if(e=e.$$typeof,e===U0)return 11;if(e===X0)return 14}return 2}function fr(e,t){var n=e.alternate;return n===null?(n=Ot(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Go(e,t,n,r,i,a){var o=2;if(r=e,typeof e=="function")Eh(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case ai:return Ir(n.children,i,a,t);case W0:o=8,i|=8;break;case xu:return e=Ot(12,n,t,i|2),e.elementType=xu,e.lanes=a,e;case wu:return e=Ot(13,n,t,i),e.elementType=wu,e.lanes=a,e;case _u:return e=Ot(19,n,t,i),e.elementType=_u,e.lanes=a,e;case Vf:return Vl(n,i,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Xf:o=10;break e;case Kf:o=9;break e;case U0:o=11;break e;case X0:o=14;break e;case er:o=16,r=null;break e}throw Error(j(130,e==null?e:typeof e,""))}return t=Ot(o,n,t,i),t.elementType=e,t.type=r,t.lanes=a,t}function Ir(e,t,n,r){return e=Ot(7,e,r,t),e.lanes=n,e}function Vl(e,t,n,r){return e=Ot(22,e,r,t),e.elementType=Vf,e.lanes=n,e.stateNode={isHidden:!1},e}function Os(e,t,n){return e=Ot(6,e,null,t),e.lanes=n,e}function js(e,t,n){return t=Ot(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function j4(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ws(0),this.expirationTimes=ws(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ws(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Ch(e,t,n,r,i,a,o,l,s){return e=new j4(e,t,n,l,s),t===1?(t=1,a===!0&&(t|=8)):t=0,a=Ot(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},hh(a),e}function H4(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ii,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function B1(e){if(!e)return br;e=e._reactInternals;e:{if(Ur(e)!==e||e.tag!==1)throw Error(j(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(wt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(j(171))}if(e.tag===1){var n=e.type;if(wt(n))return Bp(e,n,t)}return t}function L1(e,t,n,r,i,a,o,l,s){return e=Ch(n,r,!0,e,i,a,o,l,s),e.context=B1(null),n=e.current,r=dt(),i=dr(n),a=Nn(r,i),a.callback=t??null,cr(n,a,i),e.current.lanes=i,Ga(e,i,r),_t(e,r),e}function Gl(e,t,n,r){var i=t.current,a=dt(),o=dr(i);return n=B1(n),t.context===null?t.context=n:t.pendingContext=n,t=Nn(a,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=cr(i,t,o),e!==null&&(on(e,i,o,a),Ho(e,i,o)),o}function Cl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function zm(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Dh(e,t){zm(e,t),(e=e.alternate)&&zm(e,t)}function W4(){return null}var O1=typeof reportError=="function"?reportError:function(e){console.error(e)};function zh(e){this._internalRoot=e}Ql.prototype.render=zh.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(j(409));Gl(e,t,null,null)};Ql.prototype.unmount=zh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Hr(function(){Gl(null,e,null,null)}),t[Bn]=null}};function Ql(e){this._internalRoot=e}Ql.prototype.unstable_scheduleHydration=function(e){if(e){var t=yp();e={blockedOn:null,target:e,priority:t};for(var n=0;n<nr.length&&t!==0&&t<nr[n].priority;n++);nr.splice(n,0,e),n===0&&$p(e)}};function Ph(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Yl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Pm(){}function U4(e,t,n,r,i){if(i){if(typeof r=="function"){var a=r;r=function(){var u=Cl(o);a.call(u)}}var o=L1(t,r,e,0,null,!1,!1,"",Pm);return e._reactRootContainer=o,e[Bn]=o.current,Na(e.nodeType===8?e.parentNode:e),Hr(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=Cl(s);l.call(u)}}var s=Ch(e,0,!1,null,null,!1,!1,"",Pm);return e._reactRootContainer=s,e[Bn]=s.current,Na(e.nodeType===8?e.parentNode:e),Hr(function(){Gl(t,s,n,r)}),s}function Zl(e,t,n,r,i){var a=n._reactRootContainer;if(a){var o=a;if(typeof i=="function"){var l=i;i=function(){var s=Cl(o);l.call(s)}}Gl(t,o,e,i)}else o=U4(n,t,e,i,r);return Cl(o)}bp=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=ha(t.pendingLanes);n!==0&&(G0(t,n|1),_t(t,He()),!(ge&6)&&(Fi=He()+500,_r()))}break;case 13:Hr(function(){var r=Ln(e,1);if(r!==null){var i=dt();on(r,e,1,i)}}),Dh(e,1)}};Q0=function(e){if(e.tag===13){var t=Ln(e,134217728);if(t!==null){var n=dt();on(t,e,134217728,n)}Dh(e,134217728)}};gp=function(e){if(e.tag===13){var t=dr(e),n=Ln(e,t);if(n!==null){var r=dt();on(n,e,t,r)}Dh(e,t)}};yp=function(){return we};vp=function(e,t){var n=we;try{return we=e,t()}finally{we=n}};Fu=function(e,t,n){switch(t){case"input":if(Eu(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=jl(r);if(!i)throw Error(j(90));Qf(r),Eu(r,i)}}}break;case"textarea":Zf(e,n);break;case"select":t=n.value,t!=null&&bi(e,!!n.multiple,t,!1)}};ap=_h;op=Hr;var X4={usingClientEntryPoint:!1,Events:[Ya,ui,jl,rp,ip,_h]},na={findFiberByHostInstance:Fr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},K4={bundleType:na.bundleType,version:na.version,rendererPackageName:na.rendererPackageName,rendererConfig:na.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Un.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=up(e),e===null?null:e.stateNode},findFiberByHostInstance:na.findFiberByHostInstance||W4,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ko=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ko.isDisabled&&ko.supportsFiber)try{Il=ko.inject(K4),gn=ko}catch{}}Nt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=X4;Nt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ph(t))throw Error(j(200));return H4(e,t,null,n)};Nt.createRoot=function(e,t){if(!Ph(e))throw Error(j(299));var n=!1,r="",i=O1;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Ch(e,1,!1,null,null,n,!1,r,i),e[Bn]=t.current,Na(e.nodeType===8?e.parentNode:e),new zh(t)};Nt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(j(188)):(e=Object.keys(e).join(","),Error(j(268,e)));return e=up(t),e=e===null?null:e.stateNode,e};Nt.flushSync=function(e){return Hr(e)};Nt.hydrate=function(e,t,n){if(!Yl(t))throw Error(j(200));return Zl(null,e,t,!0,n)};Nt.hydrateRoot=function(e,t,n){if(!Ph(e))throw Error(j(405));var r=n!=null&&n.hydratedSources||null,i=!1,a="",o=O1;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=L1(t,null,e,1,n??null,i,!1,a,o),e[Bn]=t.current,Na(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Ql(t)};Nt.render=function(e,t,n){if(!Yl(t))throw Error(j(200));return Zl(null,e,t,!1,n)};Nt.unmountComponentAtNode=function(e){if(!Yl(e))throw Error(j(40));return e._reactRootContainer?(Hr(function(){Zl(null,null,e,!1,function(){e._reactRootContainer=null,e[Bn]=null})}),!0):!1};Nt.unstable_batchedUpdates=_h;Nt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Yl(n))throw Error(j(200));if(e==null||e._reactInternals===void 0)throw Error(j(38));return Zl(e,t,n,!1,r)};Nt.version="18.3.1-next-f1338f8080-20240426";function j1(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(j1)}catch(e){console.error(e)}}j1(),jf.exports=Nt;var V4=jf.exports,Am=V4;vu.createRoot=Am.createRoot,vu.hydrateRoot=Am.hydrateRoot;var Ah={};Object.defineProperty(Ah,"__esModule",{value:!0});Ah.parse=tv;Ah.serialize=nv;const G4=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,Q4=/^[\u0021-\u003A\u003C-\u007E]*$/,Y4=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,Z4=/^[\u0020-\u003A\u003D-\u007E]*$/,J4=Object.prototype.toString,ev=(()=>{const e=function(){};return e.prototype=Object.create(null),e})();function tv(e,t){const n=new ev,r=e.length;if(r<2)return n;const i=(t==null?void 0:t.decode)||rv;let a=0;do{const o=e.indexOf("=",a);if(o===-1)break;const l=e.indexOf(";",a),s=l===-1?r:l;if(o>s){a=e.lastIndexOf(";",o-1)+1;continue}const u=Tm(e,a,o),h=Fm(e,o,u),m=e.slice(u,h);if(n[m]===void 0){let p=Tm(e,o+1,s),f=Fm(e,s,p);const v=i(e.slice(p,f));n[m]=v}a=s+1}while(a<r);return n}function Tm(e,t,n){do{const r=e.charCodeAt(t);if(r!==32&&r!==9)return t}while(++t<n);return n}function Fm(e,t,n){for(;t>n;){const r=e.charCodeAt(--t);if(r!==32&&r!==9)return t+1}return n}function nv(e,t,n){const r=(n==null?void 0:n.encode)||encodeURIComponent;if(!G4.test(e))throw new TypeError(`argument name is invalid: ${e}`);const i=r(t);if(!Q4.test(i))throw new TypeError(`argument val is invalid: ${t}`);let a=e+"="+i;if(!n)return a;if(n.maxAge!==void 0){if(!Number.isInteger(n.maxAge))throw new TypeError(`option maxAge is invalid: ${n.maxAge}`);a+="; Max-Age="+n.maxAge}if(n.domain){if(!Y4.test(n.domain))throw new TypeError(`option domain is invalid: ${n.domain}`);a+="; Domain="+n.domain}if(n.path){if(!Z4.test(n.path))throw new TypeError(`option path is invalid: ${n.path}`);a+="; Path="+n.path}if(n.expires){if(!iv(n.expires)||!Number.isFinite(n.expires.valueOf()))throw new TypeError(`option expires is invalid: ${n.expires}`);a+="; Expires="+n.expires.toUTCString()}if(n.httpOnly&&(a+="; HttpOnly"),n.secure&&(a+="; Secure"),n.partitioned&&(a+="; Partitioned"),n.priority)switch(typeof n.priority=="string"?n.priority.toLowerCase():void 0){case"low":a+="; Priority=Low";break;case"medium":a+="; Priority=Medium";break;case"high":a+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${n.priority}`)}if(n.sameSite)switch(typeof n.sameSite=="string"?n.sameSite.toLowerCase():n.sameSite){case!0:case"strict":a+="; SameSite=Strict";break;case"lax":a+="; SameSite=Lax";break;case"none":a+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${n.sameSite}`)}return a}function rv(e){if(e.indexOf("%")===-1)return e;try{return decodeURIComponent(e)}catch{return e}}function iv(e){return J4.call(e)==="[object Date]"}/**
 * react-router v7.0.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Nm="popstate";function av(e={}){function t(i,a){let{pathname:o="/",search:l="",hash:s=""}=Xr(i.location.hash.substring(1));return!o.startsWith("/")&&!o.startsWith(".")&&(o="/"+o),m0("",{pathname:o,search:l,hash:s},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function n(i,a){let o=i.document.querySelector("base"),l="";if(o&&o.getAttribute("href")){let s=i.location.href,u=s.indexOf("#");l=u===-1?s:s.slice(0,u)}return l+"#"+(typeof a=="string"?a:Ha(a))}function r(i,a){Xn(i.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(a)})`)}return lv(t,n,r,e)}function Be(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Xn(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function ov(){return Math.random().toString(36).substring(2,10)}function Mm(e,t){return{usr:e.state,key:e.key,idx:t}}function m0(e,t,n=null,r){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof t=="string"?Xr(t):t,state:n,key:t&&t.key||r||ov()}}function Ha({pathname:e="/",search:t="",hash:n=""}){return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),n&&n!=="#"&&(e+=n.charAt(0)==="#"?n:"#"+n),e}function Xr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substring(r),e=e.substring(0,r)),e&&(t.pathname=e)}return t}function lv(e,t,n,r={}){let{window:i=document.defaultView,v5Compat:a=!1}=r,o=i.history,l="POP",s=null,u=h();u==null&&(u=0,o.replaceState({...o.state,idx:u},""));function h(){return(o.state||{idx:null}).idx}function m(){l="POP";let k=h(),g=k==null?null:k-u;u=k,s&&s({action:l,location:$.location,delta:g})}function p(k,g){l="PUSH";let y=m0($.location,k,g);n&&n(y,k),u=h()+1;let w=Mm(y,u),P=$.createHref(y);try{o.pushState(w,"",P)}catch(F){if(F instanceof DOMException&&F.name==="DataCloneError")throw F;i.location.assign(P)}a&&s&&s({action:l,location:$.location,delta:1})}function f(k,g){l="REPLACE";let y=m0($.location,k,g);n&&n(y,k),u=h();let w=Mm(y,u),P=$.createHref(y);o.replaceState(w,"",P),a&&s&&s({action:l,location:$.location,delta:0})}function v(k){let g=i.location.origin!=="null"?i.location.origin:i.location.href,y=typeof k=="string"?k:Ha(k);return y=y.replace(/ $/,"%20"),Be(g,`No window.location.(origin|href) available to create URL for href: ${y}`),new URL(y,g)}let $={get action(){return l},get location(){return e(i,o)},listen(k){if(s)throw new Error("A history only accepts one active listener");return i.addEventListener(Nm,m),s=k,()=>{i.removeEventListener(Nm,m),s=null}},createHref(k){return t(i,k)},createURL:v,encodeLocation(k){let g=v(k);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:p,replace:f,go(k){return o.go(k)}};return $}function H1(e,t,n="/"){return sv(e,t,n,!1)}function sv(e,t,n,r){let i=typeof t=="string"?Xr(t):t,a=gr(i.pathname||"/",n);if(a==null)return null;let o=W1(e);uv(o);let l=null;for(let s=0;l==null&&s<o.length;++s){let u=$v(a);l=yv(o[s],u,r)}return l}function W1(e,t=[],n=[],r=""){let i=(a,o,l)=>{let s={relativePath:l===void 0?a.path||"":l,caseSensitive:a.caseSensitive===!0,childrenIndex:o,route:a};s.relativePath.startsWith("/")&&(Be(s.relativePath.startsWith(r),`Absolute route path "${s.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),s.relativePath=s.relativePath.slice(r.length));let u=Mn([r,s.relativePath]),h=n.concat(s);a.children&&a.children.length>0&&(Be(a.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${u}".`),W1(a.children,t,h,u)),!(a.path==null&&!a.index)&&t.push({path:u,score:bv(u,a.index),routesMeta:h})};return e.forEach((a,o)=>{var l;if(a.path===""||!((l=a.path)!=null&&l.includes("?")))i(a,o);else for(let s of U1(a.path))i(a,o,s)}),t}function U1(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),a=n.replace(/\?$/,"");if(r.length===0)return i?[a,""]:[a];let o=U1(r.join("/")),l=[];return l.push(...o.map(s=>s===""?a:[a,s].join("/"))),i&&l.push(...o),l.map(s=>e.startsWith("/")&&s===""?"/":s)}function uv(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:gv(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}var hv=/^:[\w-]+$/,cv=3,mv=2,dv=1,fv=10,pv=-2,Rm=e=>e==="*";function bv(e,t){let n=e.split("/"),r=n.length;return n.some(Rm)&&(r+=pv),t&&(r+=mv),n.filter(i=>!Rm(i)).reduce((i,a)=>i+(hv.test(a)?cv:a===""?dv:fv),r)}function gv(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function yv(e,t,n=!1){let{routesMeta:r}=e,i={},a="/",o=[];for(let l=0;l<r.length;++l){let s=r[l],u=l===r.length-1,h=a==="/"?t:t.slice(a.length)||"/",m=Dl({path:s.relativePath,caseSensitive:s.caseSensitive,end:u},h),p=s.route;if(!m&&u&&n&&!r[r.length-1].route.index&&(m=Dl({path:s.relativePath,caseSensitive:s.caseSensitive,end:!1},h)),!m)return null;Object.assign(i,m.params),o.push({params:i,pathname:Mn([a,m.pathname]),pathnameBase:kv(Mn([a,m.pathnameBase])),route:p}),m.pathnameBase!=="/"&&(a=Mn([a,m.pathnameBase]))}return o}function Dl(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=vv(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let a=i[0],o=a.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((u,{paramName:h,isOptional:m},p)=>{if(h==="*"){let v=l[p]||"";o=a.slice(0,a.length-v.length).replace(/(.)\/+$/,"$1")}const f=l[p];return m&&!f?u[h]=void 0:u[h]=(f||"").replace(/%2F/g,"/"),u},{}),pathname:a,pathnameBase:o,pattern:e}}function vv(e,t=!1,n=!0){Xn(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,s)=>(r.push({paramName:l,isOptional:s!=null}),s?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function $v(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Xn(!1,`The URL path "${e}" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function gr(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function xv(e,t="/"){let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Xr(e):e;return{pathname:n?n.startsWith("/")?n:wv(n,t):t,search:Sv(r),hash:Ev(i)}}function wv(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Hs(e,t,n,r){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function _v(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function X1(e){let t=_v(e);return t.map((n,r)=>r===t.length-1?n.pathname:n.pathnameBase)}function K1(e,t,n,r=!1){let i;typeof e=="string"?i=Xr(e):(i={...e},Be(!i.pathname||!i.pathname.includes("?"),Hs("?","pathname","search",i)),Be(!i.pathname||!i.pathname.includes("#"),Hs("#","pathname","hash",i)),Be(!i.search||!i.search.includes("#"),Hs("#","search","hash",i)));let a=e===""||i.pathname==="",o=a?"/":i.pathname,l;if(o==null)l=n;else{let m=t.length-1;if(!r&&o.startsWith("..")){let p=o.split("/");for(;p[0]==="..";)p.shift(),m-=1;i.pathname=p.join("/")}l=m>=0?t[m]:"/"}let s=xv(i,l),u=o&&o!=="/"&&o.endsWith("/"),h=(a||o===".")&&n.endsWith("/");return!s.pathname.endsWith("/")&&(u||h)&&(s.pathname+="/"),s}var Mn=e=>e.join("/").replace(/\/\/+/g,"/"),kv=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Sv=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Ev=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Cv(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}var V1=["POST","PUT","PATCH","DELETE"];new Set(V1);var Dv=["GET",...V1];new Set(Dv);var Ii=A.createContext(null);Ii.displayName="DataRouter";var Jl=A.createContext(null);Jl.displayName="DataRouterState";var G1=A.createContext({isTransitioning:!1});G1.displayName="ViewTransition";var zv=A.createContext(new Map);zv.displayName="Fetchers";var Pv=A.createContext(null);Pv.displayName="Await";var $n=A.createContext(null);$n.displayName="Navigation";var Ja=A.createContext(null);Ja.displayName="Location";var xn=A.createContext({outlet:null,matches:[],isDataRoute:!1});xn.displayName="Route";var Th=A.createContext(null);Th.displayName="RouteError";function Av(e,{relative:t}={}){Be(eo(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:r}=A.useContext($n),{hash:i,pathname:a,search:o}=to(e,{relative:t}),l=a;return n!=="/"&&(l=a==="/"?n:Mn([n,a])),r.createHref({pathname:l,search:o,hash:i})}function eo(){return A.useContext(Ja)!=null}function un(){return Be(eo(),"useLocation() may be used only in the context of a <Router> component."),A.useContext(Ja).location}var Q1="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Y1(e){A.useContext($n).static||A.useLayoutEffect(e)}function es(){let{isDataRoute:e}=A.useContext(xn);return e?Uv():Tv()}function Tv(){Be(eo(),"useNavigate() may be used only in the context of a <Router> component.");let e=A.useContext(Ii),{basename:t,navigator:n}=A.useContext($n),{matches:r}=A.useContext(xn),{pathname:i}=un(),a=JSON.stringify(X1(r)),o=A.useRef(!1);return Y1(()=>{o.current=!0}),A.useCallback((s,u={})=>{if(Xn(o.current,Q1),!o.current)return;if(typeof s=="number"){n.go(s);return}let h=K1(s,JSON.parse(a),i,u.relative==="path");e==null&&t!=="/"&&(h.pathname=h.pathname==="/"?t:Mn([t,h.pathname])),(u.replace?n.replace:n.push)(h,u.state,u)},[t,n,a,i,e])}A.createContext(null);function Fv(){let{matches:e}=A.useContext(xn),t=e[e.length-1];return t?t.params:{}}function to(e,{relative:t}={}){let{matches:n}=A.useContext(xn),{pathname:r}=un(),i=JSON.stringify(X1(n));return A.useMemo(()=>K1(e,JSON.parse(i),r,t==="path"),[e,i,r,t])}function Nv(e,t){return Z1(e,t)}function Z1(e,t,n,r){var $;Be(eo(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:i}=A.useContext($n),{matches:a}=A.useContext(xn),o=a[a.length-1],l=o?o.params:{};o&&o.pathname;let s=o?o.pathnameBase:"/";o&&o.route;let u=un(),h;if(t){let k=typeof t=="string"?Xr(t):t;Be(s==="/"||(($=k.pathname)==null?void 0:$.startsWith(s)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${s}" but pathname "${k.pathname}" was given in the \`location\` prop.`),h=k}else h=u;let m=h.pathname||"/",p=m;if(s!=="/"){let k=s.replace(/^\//,"").split("/");p="/"+m.replace(/^\//,"").split("/").slice(k.length).join("/")}let f=H1(e,{pathname:p}),v=Bv(f&&f.map(k=>Object.assign({},k,{params:Object.assign({},l,k.params),pathname:Mn([s,i.encodeLocation?i.encodeLocation(k.pathname).pathname:k.pathname]),pathnameBase:k.pathnameBase==="/"?s:Mn([s,i.encodeLocation?i.encodeLocation(k.pathnameBase).pathname:k.pathnameBase])})),a,n,r);return t&&v?A.createElement(Ja.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...h},navigationType:"POP"}},v):v}function Mv(){let e=Wv(),t=Cv(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return A.createElement(A.Fragment,null,A.createElement("h2",null,"Unexpected Application Error!"),A.createElement("h3",{style:{fontStyle:"italic"}},t),n?A.createElement("pre",{style:i},n):null,null)}var Rv=A.createElement(Mv,null),qv=class extends A.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?A.createElement(xn.Provider,{value:this.props.routeContext},A.createElement(Th.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function Iv({routeContext:e,match:t,children:n}){let r=A.useContext(Ii);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),A.createElement(xn.Provider,{value:e},n)}function Bv(e,t=[],n=null,r=null){if(e==null){if(!n)return null;if(n.errors)e=n.matches;else if(t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let i=e,a=n==null?void 0:n.errors;if(a!=null){let s=i.findIndex(u=>u.route.id&&(a==null?void 0:a[u.route.id])!==void 0);Be(s>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(a).join(",")}`),i=i.slice(0,Math.min(i.length,s+1))}let o=!1,l=-1;if(n)for(let s=0;s<i.length;s++){let u=i[s];if((u.route.HydrateFallback||u.route.hydrateFallbackElement)&&(l=s),u.route.id){let{loaderData:h,errors:m}=n,p=u.route.loader&&!h.hasOwnProperty(u.route.id)&&(!m||m[u.route.id]===void 0);if(u.route.lazy||p){o=!0,l>=0?i=i.slice(0,l+1):i=[i[0]];break}}}return i.reduceRight((s,u,h)=>{let m,p=!1,f=null,v=null;n&&(m=a&&u.route.id?a[u.route.id]:void 0,f=u.route.errorElement||Rv,o&&(l<0&&h===0?(Xv("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),p=!0,v=null):l===h&&(p=!0,v=u.route.hydrateFallbackElement||null)));let $=t.concat(i.slice(0,h+1)),k=()=>{let g;return m?g=f:p?g=v:u.route.Component?g=A.createElement(u.route.Component,null):u.route.element?g=u.route.element:g=s,A.createElement(Iv,{match:u,routeContext:{outlet:s,matches:$,isDataRoute:n!=null},children:g})};return n&&(u.route.ErrorBoundary||u.route.errorElement||h===0)?A.createElement(qv,{location:n.location,revalidation:n.revalidation,component:f,error:m,children:k(),routeContext:{outlet:null,matches:$,isDataRoute:!0}}):k()},null)}function Fh(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Lv(e){let t=A.useContext(Ii);return Be(t,Fh(e)),t}function Ov(e){let t=A.useContext(Jl);return Be(t,Fh(e)),t}function jv(e){let t=A.useContext(xn);return Be(t,Fh(e)),t}function Nh(e){let t=jv(e),n=t.matches[t.matches.length-1];return Be(n.route.id,`${e} can only be used on routes that contain a unique "id"`),n.route.id}function Hv(){return Nh("useRouteId")}function Wv(){var r;let e=A.useContext(Th),t=Ov("useRouteError"),n=Nh("useRouteError");return e!==void 0?e:(r=t.errors)==null?void 0:r[n]}function Uv(){let{router:e}=Lv("useNavigate"),t=Nh("useNavigate"),n=A.useRef(!1);return Y1(()=>{n.current=!0}),A.useCallback(async(i,a={})=>{Xn(n.current,Q1),n.current&&(typeof i=="number"?e.navigate(i):await e.navigate(i,{fromRouteId:t,...a}))},[e,t])}var qm={};function Xv(e,t,n){qm[e]||(qm[e]=!0,Xn(!1,n))}A.memo(Kv);function Kv({routes:e,future:t,state:n}){return Z1(e,void 0,n,t)}function ri(e){Be(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Vv({basename:e="/",children:t=null,location:n,navigationType:r="POP",navigator:i,static:a=!1}){Be(!eo(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let o=e.replace(/^\/*/,"/"),l=A.useMemo(()=>({basename:o,navigator:i,static:a,future:{}}),[o,i,a]);typeof n=="string"&&(n=Xr(n));let{pathname:s="/",search:u="",hash:h="",state:m=null,key:p="default"}=n,f=A.useMemo(()=>{let v=gr(s,o);return v==null?null:{location:{pathname:v,search:u,hash:h,state:m,key:p},navigationType:r}},[o,s,u,h,m,p,r]);return Xn(f!=null,`<Router basename="${o}"> is not able to match the URL "${s}${u}${h}" because it does not start with the basename, so the <Router> won't render anything.`),f==null?null:A.createElement($n.Provider,{value:l},A.createElement(Ja.Provider,{children:t,value:f}))}function Gv({children:e,location:t}){return Nv(d0(e),t)}function d0(e,t=[]){let n=[];return A.Children.forEach(e,(r,i)=>{if(!A.isValidElement(r))return;let a=[...t,i];if(r.type===A.Fragment){n.push.apply(n,d0(r.props.children,a));return}Be(r.type===ri,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Be(!r.props.index||!r.props.children,"An index route cannot have child routes.");let o={id:r.props.id||a.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=d0(r.props.children,a)),n.push(o)}),n}var Qo="get",Yo="application/x-www-form-urlencoded";function ts(e){return e!=null&&typeof e.tagName=="string"}function Qv(e){return ts(e)&&e.tagName.toLowerCase()==="button"}function Yv(e){return ts(e)&&e.tagName.toLowerCase()==="form"}function Zv(e){return ts(e)&&e.tagName.toLowerCase()==="input"}function Jv(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function e3(e,t){return e.button===0&&(!t||t==="_self")&&!Jv(e)}var So=null;function t3(){if(So===null)try{new FormData(document.createElement("form"),0),So=!1}catch{So=!0}return So}var n3=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Ws(e){return e!=null&&!n3.has(e)?(Xn(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Yo}"`),null):e}function r3(e,t){let n,r,i,a,o;if(Yv(e)){let l=e.getAttribute("action");r=l?gr(l,t):null,n=e.getAttribute("method")||Qo,i=Ws(e.getAttribute("enctype"))||Yo,a=new FormData(e)}else if(Qv(e)||Zv(e)&&(e.type==="submit"||e.type==="image")){let l=e.form;if(l==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let s=e.getAttribute("formaction")||l.getAttribute("action");if(r=s?gr(s,t):null,n=e.getAttribute("formmethod")||l.getAttribute("method")||Qo,i=Ws(e.getAttribute("formenctype"))||Ws(l.getAttribute("enctype"))||Yo,a=new FormData(l,e),!t3()){let{name:u,type:h,value:m}=e;if(h==="image"){let p=u?`${u}.`:"";a.append(`${p}x`,"0"),a.append(`${p}y`,"0")}else u&&a.append(u,m)}}else{if(ts(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=Qo,r=null,i=Yo,o=e}return a&&i==="text/plain"&&(o=a,a=void 0),{action:r,method:n.toLowerCase(),encType:i,formData:a,body:o}}function Mh(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}async function i3(e,t){if(e.id in t)return t[e.id];try{let n=await import(e.module);return t[e.id]=n,n}catch(n){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function a3(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function o3(e,t,n){let r=await Promise.all(e.map(async i=>{let a=t.routes[i.route.id];if(a){let o=await i3(a,n);return o.links?o.links():[]}return[]}));return h3(r.flat(1).filter(a3).filter(i=>i.rel==="stylesheet"||i.rel==="preload").map(i=>i.rel==="stylesheet"?{...i,rel:"prefetch",as:"style"}:{...i,rel:"prefetch"}))}function Im(e,t,n,r,i,a){let o=(s,u)=>n[u]?s.route.id!==n[u].route.id:!0,l=(s,u)=>{var h;return n[u].pathname!==s.pathname||((h=n[u].route.path)==null?void 0:h.endsWith("*"))&&n[u].params["*"]!==s.params["*"]};return a==="assets"?t.filter((s,u)=>o(s,u)||l(s,u)):a==="data"?t.filter((s,u)=>{var m;let h=r.routes[s.route.id];if(!h||!h.hasLoader)return!1;if(o(s,u)||l(s,u))return!0;if(s.route.shouldRevalidate){let p=s.route.shouldRevalidate({currentUrl:new URL(i.pathname+i.search+i.hash,window.origin),currentParams:((m=n[0])==null?void 0:m.params)||{},nextUrl:new URL(e,window.origin),nextParams:s.params,defaultShouldRevalidate:!0});if(typeof p=="boolean")return p}return!0}):[]}function l3(e,t){return s3(e.map(n=>{let r=t.routes[n.route.id];if(!r)return[];let i=[r.module];return r.imports&&(i=i.concat(r.imports)),i}).flat(1))}function s3(e){return[...new Set(e)]}function u3(e){let t={},n=Object.keys(e).sort();for(let r of n)t[r]=e[r];return t}function h3(e,t){let n=new Set;return new Set(t),e.reduce((r,i)=>{let a=JSON.stringify(u3(i));return n.has(a)||(n.add(a),r.push({key:a,link:i})),r},[])}function c3(e){let t=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return t.pathname==="/"?t.pathname="_root.data":t.pathname=`${t.pathname.replace(/\/$/,"")}.data`,t}function m3(){let e=A.useContext(Ii);return Mh(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function d3(){let e=A.useContext(Jl);return Mh(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var Rh=A.createContext(void 0);Rh.displayName="FrameworkContext";function J1(){let e=A.useContext(Rh);return Mh(e,"You must render this element inside a <HydratedRouter> element"),e}function f3(e,t){let n=A.useContext(Rh),[r,i]=A.useState(!1),[a,o]=A.useState(!1),{onFocus:l,onBlur:s,onMouseEnter:u,onMouseLeave:h,onTouchStart:m}=t,p=A.useRef(null);A.useEffect(()=>{if(e==="render"&&o(!0),e==="viewport"){let $=g=>{g.forEach(y=>{o(y.isIntersecting)})},k=new IntersectionObserver($,{threshold:.5});return p.current&&k.observe(p.current),()=>{k.disconnect()}}},[e]),A.useEffect(()=>{if(r){let $=setTimeout(()=>{o(!0)},100);return()=>{clearTimeout($)}}},[r]);let f=()=>{i(!0)},v=()=>{i(!1),o(!1)};return n?e!=="intent"?[a,p,{}]:[a,p,{onFocus:ra(l,f),onBlur:ra(s,v),onMouseEnter:ra(u,f),onMouseLeave:ra(h,v),onTouchStart:ra(m,f)}]:[!1,p,{}]}function ra(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function p3({page:e,...t}){let{router:n}=m3(),r=A.useMemo(()=>H1(n.routes,e,n.basename),[n.routes,e,n.basename]);return r?A.createElement(g3,{page:e,matches:r,...t}):(console.warn(`Tried to prefetch ${e} but no routes matched.`),null)}function b3(e){let{manifest:t,routeModules:n}=J1(),[r,i]=A.useState([]);return A.useEffect(()=>{let a=!1;return o3(e,t,n).then(o=>{a||i(o)}),()=>{a=!0}},[e,t,n]),r}function g3({page:e,matches:t,...n}){let r=un(),{manifest:i,routeModules:a}=J1(),{loaderData:o,matches:l}=d3(),s=A.useMemo(()=>Im(e,t,l,i,r,"data"),[e,t,l,i,r]),u=A.useMemo(()=>Im(e,t,l,i,r,"assets"),[e,t,l,i,r]),h=A.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let f=new Set,v=!1;if(t.forEach(k=>{var y;let g=i.routes[k.route.id];!g||!g.hasLoader||(!s.some(w=>w.route.id===k.route.id)&&k.route.id in o&&((y=a[k.route.id])!=null&&y.shouldRevalidate)||g.hasClientLoader?v=!0:f.add(k.route.id))}),f.size===0)return[];let $=c3(e);return v&&f.size>0&&$.searchParams.set("_routes",t.filter(k=>f.has(k.route.id)).map(k=>k.route.id).join(",")),[$.pathname+$.search]},[o,r,i,s,t,e,a]),m=A.useMemo(()=>l3(u,i),[u,i]),p=b3(u);return A.createElement(A.Fragment,null,h.map(f=>A.createElement("link",{key:f,rel:"prefetch",as:"fetch",href:f,...n})),m.map(f=>A.createElement("link",{key:f,rel:"modulepreload",href:f,...n})),p.map(({key:f,link:v})=>A.createElement("link",{key:f,...v})))}function y3(...e){return t=>{e.forEach(n=>{typeof n=="function"?n(t):n!=null&&(n.current=t)})}}var eb=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{eb&&(window.__reactRouterVersion="7.0.1")}catch{}function v3({basename:e,children:t,window:n}){let r=A.useRef();r.current==null&&(r.current=av({window:n,v5Compat:!0}));let i=r.current,[a,o]=A.useState({action:i.action,location:i.location}),l=A.useCallback(s=>{A.startTransition(()=>o(s))},[o]);return A.useLayoutEffect(()=>i.listen(l),[i,l]),A.createElement(Vv,{basename:e,children:t,location:a.location,navigationType:a.action,navigator:i})}var tb=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Rr=A.forwardRef(function({onClick:t,discover:n="render",prefetch:r="none",relative:i,reloadDocument:a,replace:o,state:l,target:s,to:u,preventScrollReset:h,viewTransition:m,...p},f){let{basename:v}=A.useContext($n),$=typeof u=="string"&&tb.test(u),k,g=!1;if(typeof u=="string"&&$&&(k=u,eb))try{let I=new URL(window.location.href),V=u.startsWith("//")?new URL(I.protocol+u):new URL(u),X=gr(V.pathname,v);V.origin===I.origin&&X!=null?u=X+V.search+V.hash:g=!0}catch{Xn(!1,`<Link to="${u}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let y=Av(u,{relative:i}),[w,P,F]=f3(r,p),D=_3(u,{replace:o,state:l,target:s,preventScrollReset:h,relative:i,viewTransition:m});function M(I){t&&t(I),I.defaultPrevented||D(I)}let q=A.createElement("a",{...p,...F,href:k||y,onClick:g||a?t:M,ref:y3(f,P),target:s,"data-discover":!$&&n==="render"?"true":void 0});return w&&!$?A.createElement(A.Fragment,null,q,A.createElement(p3,{page:y})):q});Rr.displayName="Link";var $3=A.forwardRef(function({"aria-current":t="page",caseSensitive:n=!1,className:r="",end:i=!1,style:a,to:o,viewTransition:l,children:s,...u},h){let m=to(o,{relative:u.relative}),p=un(),f=A.useContext(Jl),{navigator:v,basename:$}=A.useContext($n),k=f!=null&&D3(m)&&l===!0,g=v.encodeLocation?v.encodeLocation(m).pathname:m.pathname,y=p.pathname,w=f&&f.navigation&&f.navigation.location?f.navigation.location.pathname:null;n||(y=y.toLowerCase(),w=w?w.toLowerCase():null,g=g.toLowerCase()),w&&$&&(w=gr(w,$)||w);const P=g!=="/"&&g.endsWith("/")?g.length-1:g.length;let F=y===g||!i&&y.startsWith(g)&&y.charAt(P)==="/",D=w!=null&&(w===g||!i&&w.startsWith(g)&&w.charAt(g.length)==="/"),M={isActive:F,isPending:D,isTransitioning:k},q=F?t:void 0,I;typeof r=="function"?I=r(M):I=[r,F?"active":null,D?"pending":null,k?"transitioning":null].filter(Boolean).join(" ");let V=typeof a=="function"?a(M):a;return A.createElement(Rr,{...u,"aria-current":q,className:I,ref:h,style:V,to:o,viewTransition:l},typeof s=="function"?s(M):s)});$3.displayName="NavLink";var x3=A.forwardRef(({discover:e="render",fetcherKey:t,navigate:n,reloadDocument:r,replace:i,state:a,method:o=Qo,action:l,onSubmit:s,relative:u,preventScrollReset:h,viewTransition:m,...p},f)=>{let v=E3(),$=C3(l,{relative:u}),k=o.toLowerCase()==="get"?"get":"post",g=typeof l=="string"&&tb.test(l),y=w=>{if(s&&s(w),w.defaultPrevented)return;w.preventDefault();let P=w.nativeEvent.submitter,F=(P==null?void 0:P.getAttribute("formmethod"))||o;v(P||w.currentTarget,{fetcherKey:t,method:F,navigate:n,replace:i,state:a,relative:u,preventScrollReset:h,viewTransition:m})};return A.createElement("form",{ref:f,method:k,action:$,onSubmit:r?s:y,...p,"data-discover":!g&&e==="render"?"true":void 0})});x3.displayName="Form";function w3(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function nb(e){let t=A.useContext(Ii);return Be(t,w3(e)),t}function _3(e,{target:t,replace:n,state:r,preventScrollReset:i,relative:a,viewTransition:o}={}){let l=es(),s=un(),u=to(e,{relative:a});return A.useCallback(h=>{if(e3(h,t)){h.preventDefault();let m=n!==void 0?n:Ha(s)===Ha(u);l(e,{replace:m,state:r,preventScrollReset:i,relative:a,viewTransition:o})}},[s,l,u,n,r,t,e,i,a,o])}var k3=0,S3=()=>`__${String(++k3)}__`;function E3(){let{router:e}=nb("useSubmit"),{basename:t}=A.useContext($n),n=Hv();return A.useCallback(async(r,i={})=>{let{action:a,method:o,encType:l,formData:s,body:u}=r3(r,t);if(i.navigate===!1){let h=i.fetcherKey||S3();await e.fetch(h,n,i.action||a,{preventScrollReset:i.preventScrollReset,formData:s,body:u,formMethod:i.method||o,formEncType:i.encType||l,flushSync:i.flushSync})}else await e.navigate(i.action||a,{preventScrollReset:i.preventScrollReset,formData:s,body:u,formMethod:i.method||o,formEncType:i.encType||l,replace:i.replace,state:i.state,fromRouteId:n,flushSync:i.flushSync,viewTransition:i.viewTransition})},[e,t,n])}function C3(e,{relative:t}={}){let{basename:n}=A.useContext($n),r=A.useContext(xn);Be(r,"useFormAction must be used inside a RouteContext");let[i]=r.matches.slice(-1),a={...to(e||".",{relative:t})},o=un();if(e==null){a.search=o.search;let l=new URLSearchParams(a.search),s=l.getAll("index");if(s.some(h=>h==="")){l.delete("index"),s.filter(m=>m).forEach(m=>l.append("index",m));let h=l.toString();a.search=h?`?${h}`:""}}return(!e||e===".")&&i.route.index&&(a.search=a.search?a.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(a.pathname=a.pathname==="/"?n:Mn([n,a.pathname])),Ha(a)}function D3(e,t={}){let n=A.useContext(G1);Be(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=nb("useViewTransitionState"),i=to(e,{relative:t.relative});if(!n.isTransitioning)return!1;let a=gr(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=gr(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Dl(i.pathname,o)!=null||Dl(i.pathname,a)!=null}new TextEncoder;function z3(e,t,{checkForDefaultPrevented:n=!0}={}){return function(i){if(e==null||e(i),n===!1||!i.defaultPrevented)return t==null?void 0:t(i)}}function P3(e,t){typeof e=="function"?e(t):e!=null&&(e.current=t)}function rb(...e){return t=>e.forEach(n=>P3(n,t))}function A3(...e){return A.useCallback(rb(...e),e)}function T3(e,t=[]){let n=[];function r(a,o){const l=A.createContext(o),s=n.length;n=[...n,o];const u=m=>{var g;const{scope:p,children:f,...v}=m,$=((g=p==null?void 0:p[e])==null?void 0:g[s])||l,k=A.useMemo(()=>v,Object.values(v));return N.jsx($.Provider,{value:k,children:f})};u.displayName=a+"Provider";function h(m,p){var $;const f=(($=p==null?void 0:p[e])==null?void 0:$[s])||l,v=A.useContext(f);if(v)return v;if(o!==void 0)return o;throw new Error(`\`${m}\` must be used within \`${a}\``)}return[u,h]}const i=()=>{const a=n.map(o=>A.createContext(o));return function(l){const s=(l==null?void 0:l[e])||a;return A.useMemo(()=>({[`__scope${e}`]:{...l,[e]:s}}),[l,s])}};return i.scopeName=e,[r,F3(i,...t)]}function F3(...e){const t=e[0];if(e.length===1)return t;const n=()=>{const r=e.map(i=>({useScope:i(),scopeName:i.scopeName}));return function(a){const o=r.reduce((l,{useScope:s,scopeName:u})=>{const m=s(a)[`__scope${u}`];return{...l,...m}},{});return A.useMemo(()=>({[`__scope${t.scopeName}`]:o}),[o])}};return n.scopeName=t.scopeName,n}function ib(e){const t=A.useRef(e);return A.useEffect(()=>{t.current=e}),A.useMemo(()=>(...n)=>{var r;return(r=t.current)==null?void 0:r.call(t,...n)},[])}function N3({prop:e,defaultProp:t,onChange:n=()=>{}}){const[r,i]=M3({defaultProp:t,onChange:n}),a=e!==void 0,o=a?e:r,l=ib(n),s=A.useCallback(u=>{if(a){const m=typeof u=="function"?u(e):u;m!==e&&l(m)}else i(u)},[a,e,i,l]);return[o,s]}function M3({defaultProp:e,onChange:t}){const n=A.useState(e),[r]=n,i=A.useRef(r),a=ib(t);return A.useEffect(()=>{i.current!==r&&(a(r),i.current=r)},[r,i,a]),n}function R3(e){const t=A.useRef({value:e,previous:e});return A.useMemo(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}var q3=globalThis!=null&&globalThis.document?A.useLayoutEffect:()=>{};function I3(e){const[t,n]=A.useState(void 0);return q3(()=>{if(e){n({width:e.offsetWidth,height:e.offsetHeight});const r=new ResizeObserver(i=>{if(!Array.isArray(i)||!i.length)return;const a=i[0];let o,l;if("borderBoxSize"in a){const s=a.borderBoxSize,u=Array.isArray(s)?s[0]:s;o=u.inlineSize,l=u.blockSize}else o=e.offsetWidth,l=e.offsetHeight;n({width:o,height:l})});return r.observe(e,{box:"border-box"}),()=>r.unobserve(e)}else n(void 0)},[e]),t}var ab=A.forwardRef((e,t)=>{const{children:n,...r}=e,i=A.Children.toArray(n),a=i.find(L3);if(a){const o=a.props.children,l=i.map(s=>s===a?A.Children.count(o)>1?A.Children.only(null):A.isValidElement(o)?o.props.children:null:s);return N.jsx(f0,{...r,ref:t,children:A.isValidElement(o)?A.cloneElement(o,void 0,l):null})}return N.jsx(f0,{...r,ref:t,children:n})});ab.displayName="Slot";var f0=A.forwardRef((e,t)=>{const{children:n,...r}=e;if(A.isValidElement(n)){const i=j3(n);return A.cloneElement(n,{...O3(r,n.props),ref:t?rb(t,i):i})}return A.Children.count(n)>1?A.Children.only(null):null});f0.displayName="SlotClone";var B3=({children:e})=>N.jsx(N.Fragment,{children:e});function L3(e){return A.isValidElement(e)&&e.type===B3}function O3(e,t){const n={...t};for(const r in t){const i=e[r],a=t[r];/^on[A-Z]/.test(r)?i&&a?n[r]=(...l)=>{a(...l),i(...l)}:i&&(n[r]=i):r==="style"?n[r]={...i,...a}:r==="className"&&(n[r]=[i,a].filter(Boolean).join(" "))}return{...e,...n}}function j3(e){var r,i;let t=(r=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:r.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=(i=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:i.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}var H3=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"],ob=H3.reduce((e,t)=>{const n=A.forwardRef((r,i)=>{const{asChild:a,...o}=r,l=a?ab:t;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),N.jsx(l,{...o,ref:i})});return n.displayName=`Primitive.${t}`,{...e,[t]:n}},{}),qh="Switch",[W3,tk]=T3(qh),[U3,X3]=W3(qh),lb=A.forwardRef((e,t)=>{const{__scopeSwitch:n,name:r,checked:i,defaultChecked:a,required:o,disabled:l,value:s="on",onCheckedChange:u,form:h,...m}=e,[p,f]=A.useState(null),v=A3(t,w=>f(w)),$=A.useRef(!1),k=p?h||!!p.closest("form"):!0,[g=!1,y]=N3({prop:i,defaultProp:a,onChange:u});return N.jsxs(U3,{scope:n,checked:g,disabled:l,children:[N.jsx(ob.button,{type:"button",role:"switch","aria-checked":g,"aria-required":o,"data-state":ub(g),"data-disabled":l?"":void 0,disabled:l,value:s,...m,ref:v,onClick:z3(e.onClick,w=>{y(P=>!P),k&&($.current=w.isPropagationStopped(),$.current||w.stopPropagation())})}),k&&N.jsx(V3,{control:p,bubbles:!$.current,name:r,value:s,checked:g,required:o,disabled:l,form:h,style:{transform:"translateX(-100%)"}})]})});lb.displayName=qh;var sb="SwitchThumb",K3=A.forwardRef((e,t)=>{const{__scopeSwitch:n,...r}=e,i=X3(sb,n);return N.jsx(ob.span,{"data-state":ub(i.checked),"data-disabled":i.disabled?"":void 0,...r,ref:t})});K3.displayName=sb;var V3=e=>{const{control:t,checked:n,bubbles:r=!0,...i}=e,a=A.useRef(null),o=R3(n),l=I3(t);return A.useEffect(()=>{const s=a.current,u=window.HTMLInputElement.prototype,m=Object.getOwnPropertyDescriptor(u,"checked").set;if(o!==n&&m){const p=new Event("click",{bubbles:r});m.call(s,n),s.dispatchEvent(p)}},[o,n,r]),N.jsx("input",{type:"checkbox","aria-hidden":!0,defaultChecked:n,...i,tabIndex:-1,ref:a,style:{...e.style,...l,position:"absolute",pointerEvents:"none",opacity:0,margin:0}})};function ub(e){return e?"checked":"unchecked"}var hb=lb;function cb(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(n=cb(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function mb(){for(var e,t,n=0,r="",i=arguments.length;n<i;n++)(e=arguments[n])&&(t=cb(e))&&(r&&(r+=" "),r+=t);return r}const Ih="-",G3=e=>{const t=Y3(e),{conflictingClassGroups:n,conflictingClassGroupModifiers:r}=e;return{getClassGroupId:o=>{const l=o.split(Ih);return l[0]===""&&l.length!==1&&l.shift(),db(l,t)||Q3(o)},getConflictingClassGroupIds:(o,l)=>{const s=n[o]||[];return l&&r[o]?[...s,...r[o]]:s}}},db=(e,t)=>{var o;if(e.length===0)return t.classGroupId;const n=e[0],r=t.nextPart.get(n),i=r?db(e.slice(1),r):void 0;if(i)return i;if(t.validators.length===0)return;const a=e.join(Ih);return(o=t.validators.find(({validator:l})=>l(a)))==null?void 0:o.classGroupId},Bm=/^\[(.+)\]$/,Q3=e=>{if(Bm.test(e)){const t=Bm.exec(e)[1],n=t==null?void 0:t.substring(0,t.indexOf(":"));if(n)return"arbitrary.."+n}},Y3=e=>{const{theme:t,prefix:n}=e,r={nextPart:new Map,validators:[]};return J3(Object.entries(e.classGroups),n).forEach(([a,o])=>{p0(o,r,a,t)}),r},p0=(e,t,n,r)=>{e.forEach(i=>{if(typeof i=="string"){const a=i===""?t:Lm(t,i);a.classGroupId=n;return}if(typeof i=="function"){if(Z3(i)){p0(i(r),t,n,r);return}t.validators.push({validator:i,classGroupId:n});return}Object.entries(i).forEach(([a,o])=>{p0(o,Lm(t,a),n,r)})})},Lm=(e,t)=>{let n=e;return t.split(Ih).forEach(r=>{n.nextPart.has(r)||n.nextPart.set(r,{nextPart:new Map,validators:[]}),n=n.nextPart.get(r)}),n},Z3=e=>e.isThemeGetter,J3=(e,t)=>t?e.map(([n,r])=>{const i=r.map(a=>typeof a=="string"?t+a:typeof a=="object"?Object.fromEntries(Object.entries(a).map(([o,l])=>[t+o,l])):a);return[n,i]}):e,e5=e=>{if(e<1)return{get:()=>{},set:()=>{}};let t=0,n=new Map,r=new Map;const i=(a,o)=>{n.set(a,o),t++,t>e&&(t=0,r=n,n=new Map)};return{get(a){let o=n.get(a);if(o!==void 0)return o;if((o=r.get(a))!==void 0)return i(a,o),o},set(a,o){n.has(a)?n.set(a,o):i(a,o)}}},fb="!",t5=e=>{const{separator:t,experimentalParseClassName:n}=e,r=t.length===1,i=t[0],a=t.length,o=l=>{const s=[];let u=0,h=0,m;for(let k=0;k<l.length;k++){let g=l[k];if(u===0){if(g===i&&(r||l.slice(k,k+a)===t)){s.push(l.slice(h,k)),h=k+a;continue}if(g==="/"){m=k;continue}}g==="["?u++:g==="]"&&u--}const p=s.length===0?l:l.substring(h),f=p.startsWith(fb),v=f?p.substring(1):p,$=m&&m>h?m-h:void 0;return{modifiers:s,hasImportantModifier:f,baseClassName:v,maybePostfixModifierPosition:$}};return n?l=>n({className:l,parseClassName:o}):o},n5=e=>{if(e.length<=1)return e;const t=[];let n=[];return e.forEach(r=>{r[0]==="["?(t.push(...n.sort(),r),n=[]):n.push(r)}),t.push(...n.sort()),t},r5=e=>({cache:e5(e.cacheSize),parseClassName:t5(e),...G3(e)}),i5=/\s+/,a5=(e,t)=>{const{parseClassName:n,getClassGroupId:r,getConflictingClassGroupIds:i}=t,a=[],o=e.trim().split(i5);let l="";for(let s=o.length-1;s>=0;s-=1){const u=o[s],{modifiers:h,hasImportantModifier:m,baseClassName:p,maybePostfixModifierPosition:f}=n(u);let v=!!f,$=r(v?p.substring(0,f):p);if(!$){if(!v){l=u+(l.length>0?" "+l:l);continue}if($=r(p),!$){l=u+(l.length>0?" "+l:l);continue}v=!1}const k=n5(h).join(":"),g=m?k+fb:k,y=g+$;if(a.includes(y))continue;a.push(y);const w=i($,v);for(let P=0;P<w.length;++P){const F=w[P];a.push(g+F)}l=u+(l.length>0?" "+l:l)}return l};function o5(){let e=0,t,n,r="";for(;e<arguments.length;)(t=arguments[e++])&&(n=pb(t))&&(r&&(r+=" "),r+=n);return r}const pb=e=>{if(typeof e=="string")return e;let t,n="";for(let r=0;r<e.length;r++)e[r]&&(t=pb(e[r]))&&(n&&(n+=" "),n+=t);return n};function l5(e,...t){let n,r,i,a=o;function o(s){const u=t.reduce((h,m)=>m(h),e());return n=r5(u),r=n.cache.get,i=n.cache.set,a=l,l(s)}function l(s){const u=r(s);if(u)return u;const h=a5(s,n);return i(s,h),h}return function(){return a(o5.apply(null,arguments))}}const ze=e=>{const t=n=>n[e]||[];return t.isThemeGetter=!0,t},bb=/^\[(?:([a-z-]+):)?(.+)\]$/i,s5=/^\d+\/\d+$/,u5=new Set(["px","full","screen"]),h5=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,c5=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,m5=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,d5=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,f5=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Cn=e=>wi(e)||u5.has(e)||s5.test(e),Gn=e=>Bi(e,"length",w5),wi=e=>!!e&&!Number.isNaN(Number(e)),Us=e=>Bi(e,"number",wi),ia=e=>!!e&&Number.isInteger(Number(e)),p5=e=>e.endsWith("%")&&wi(e.slice(0,-1)),me=e=>bb.test(e),Qn=e=>h5.test(e),b5=new Set(["length","size","percentage"]),g5=e=>Bi(e,b5,gb),y5=e=>Bi(e,"position",gb),v5=new Set(["image","url"]),$5=e=>Bi(e,v5,k5),x5=e=>Bi(e,"",_5),aa=()=>!0,Bi=(e,t,n)=>{const r=bb.exec(e);return r?r[1]?typeof t=="string"?r[1]===t:t.has(r[1]):n(r[2]):!1},w5=e=>c5.test(e)&&!m5.test(e),gb=()=>!1,_5=e=>d5.test(e),k5=e=>f5.test(e),S5=()=>{const e=ze("colors"),t=ze("spacing"),n=ze("blur"),r=ze("brightness"),i=ze("borderColor"),a=ze("borderRadius"),o=ze("borderSpacing"),l=ze("borderWidth"),s=ze("contrast"),u=ze("grayscale"),h=ze("hueRotate"),m=ze("invert"),p=ze("gap"),f=ze("gradientColorStops"),v=ze("gradientColorStopPositions"),$=ze("inset"),k=ze("margin"),g=ze("opacity"),y=ze("padding"),w=ze("saturate"),P=ze("scale"),F=ze("sepia"),D=ze("skew"),M=ze("space"),q=ze("translate"),I=()=>["auto","contain","none"],V=()=>["auto","hidden","clip","visible","scroll"],X=()=>["auto",me,t],L=()=>[me,t],he=()=>["",Cn,Gn],le=()=>["auto",wi,me],ae=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],be=()=>["solid","dashed","dotted","double","none"],ve=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],U=()=>["start","end","center","between","around","evenly","stretch"],J=()=>["","0",me],_=()=>["auto","avoid","all","avoid-page","page","left","right","column"],ne=()=>[wi,me];return{cacheSize:500,separator:":",theme:{colors:[aa],spacing:[Cn,Gn],blur:["none","",Qn,me],brightness:ne(),borderColor:[e],borderRadius:["none","","full",Qn,me],borderSpacing:L(),borderWidth:he(),contrast:ne(),grayscale:J(),hueRotate:ne(),invert:J(),gap:L(),gradientColorStops:[e],gradientColorStopPositions:[p5,Gn],inset:X(),margin:X(),opacity:ne(),padding:L(),saturate:ne(),scale:ne(),sepia:J(),skew:ne(),space:L(),translate:L()},classGroups:{aspect:[{aspect:["auto","square","video",me]}],container:["container"],columns:[{columns:[Qn]}],"break-after":[{"break-after":_()}],"break-before":[{"break-before":_()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...ae(),me]}],overflow:[{overflow:V()}],"overflow-x":[{"overflow-x":V()}],"overflow-y":[{"overflow-y":V()}],overscroll:[{overscroll:I()}],"overscroll-x":[{"overscroll-x":I()}],"overscroll-y":[{"overscroll-y":I()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[$]}],"inset-x":[{"inset-x":[$]}],"inset-y":[{"inset-y":[$]}],start:[{start:[$]}],end:[{end:[$]}],top:[{top:[$]}],right:[{right:[$]}],bottom:[{bottom:[$]}],left:[{left:[$]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",ia,me]}],basis:[{basis:X()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",me]}],grow:[{grow:J()}],shrink:[{shrink:J()}],order:[{order:["first","last","none",ia,me]}],"grid-cols":[{"grid-cols":[aa]}],"col-start-end":[{col:["auto",{span:["full",ia,me]},me]}],"col-start":[{"col-start":le()}],"col-end":[{"col-end":le()}],"grid-rows":[{"grid-rows":[aa]}],"row-start-end":[{row:["auto",{span:[ia,me]},me]}],"row-start":[{"row-start":le()}],"row-end":[{"row-end":le()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",me]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",me]}],gap:[{gap:[p]}],"gap-x":[{"gap-x":[p]}],"gap-y":[{"gap-y":[p]}],"justify-content":[{justify:["normal",...U()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...U(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...U(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[y]}],px:[{px:[y]}],py:[{py:[y]}],ps:[{ps:[y]}],pe:[{pe:[y]}],pt:[{pt:[y]}],pr:[{pr:[y]}],pb:[{pb:[y]}],pl:[{pl:[y]}],m:[{m:[k]}],mx:[{mx:[k]}],my:[{my:[k]}],ms:[{ms:[k]}],me:[{me:[k]}],mt:[{mt:[k]}],mr:[{mr:[k]}],mb:[{mb:[k]}],ml:[{ml:[k]}],"space-x":[{"space-x":[M]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[M]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",me,t]}],"min-w":[{"min-w":[me,t,"min","max","fit"]}],"max-w":[{"max-w":[me,t,"none","full","min","max","fit","prose",{screen:[Qn]},Qn]}],h:[{h:[me,t,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[me,t,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[me,t,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[me,t,"auto","min","max","fit"]}],"font-size":[{text:["base",Qn,Gn]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",Us]}],"font-family":[{font:[aa]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",me]}],"line-clamp":[{"line-clamp":["none",wi,Us]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",Cn,me]}],"list-image":[{"list-image":["none",me]}],"list-style-type":[{list:["none","disc","decimal",me]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[g]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[g]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...be(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",Cn,Gn]}],"underline-offset":[{"underline-offset":["auto",Cn,me]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:L()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",me]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",me]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[g]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...ae(),y5]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",g5]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},$5]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[v]}],"gradient-via-pos":[{via:[v]}],"gradient-to-pos":[{to:[v]}],"gradient-from":[{from:[f]}],"gradient-via":[{via:[f]}],"gradient-to":[{to:[f]}],rounded:[{rounded:[a]}],"rounded-s":[{"rounded-s":[a]}],"rounded-e":[{"rounded-e":[a]}],"rounded-t":[{"rounded-t":[a]}],"rounded-r":[{"rounded-r":[a]}],"rounded-b":[{"rounded-b":[a]}],"rounded-l":[{"rounded-l":[a]}],"rounded-ss":[{"rounded-ss":[a]}],"rounded-se":[{"rounded-se":[a]}],"rounded-ee":[{"rounded-ee":[a]}],"rounded-es":[{"rounded-es":[a]}],"rounded-tl":[{"rounded-tl":[a]}],"rounded-tr":[{"rounded-tr":[a]}],"rounded-br":[{"rounded-br":[a]}],"rounded-bl":[{"rounded-bl":[a]}],"border-w":[{border:[l]}],"border-w-x":[{"border-x":[l]}],"border-w-y":[{"border-y":[l]}],"border-w-s":[{"border-s":[l]}],"border-w-e":[{"border-e":[l]}],"border-w-t":[{"border-t":[l]}],"border-w-r":[{"border-r":[l]}],"border-w-b":[{"border-b":[l]}],"border-w-l":[{"border-l":[l]}],"border-opacity":[{"border-opacity":[g]}],"border-style":[{border:[...be(),"hidden"]}],"divide-x":[{"divide-x":[l]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[l]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[g]}],"divide-style":[{divide:be()}],"border-color":[{border:[i]}],"border-color-x":[{"border-x":[i]}],"border-color-y":[{"border-y":[i]}],"border-color-s":[{"border-s":[i]}],"border-color-e":[{"border-e":[i]}],"border-color-t":[{"border-t":[i]}],"border-color-r":[{"border-r":[i]}],"border-color-b":[{"border-b":[i]}],"border-color-l":[{"border-l":[i]}],"divide-color":[{divide:[i]}],"outline-style":[{outline:["",...be()]}],"outline-offset":[{"outline-offset":[Cn,me]}],"outline-w":[{outline:[Cn,Gn]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:he()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[g]}],"ring-offset-w":[{"ring-offset":[Cn,Gn]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",Qn,x5]}],"shadow-color":[{shadow:[aa]}],opacity:[{opacity:[g]}],"mix-blend":[{"mix-blend":[...ve(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":ve()}],filter:[{filter:["","none"]}],blur:[{blur:[n]}],brightness:[{brightness:[r]}],contrast:[{contrast:[s]}],"drop-shadow":[{"drop-shadow":["","none",Qn,me]}],grayscale:[{grayscale:[u]}],"hue-rotate":[{"hue-rotate":[h]}],invert:[{invert:[m]}],saturate:[{saturate:[w]}],sepia:[{sepia:[F]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[n]}],"backdrop-brightness":[{"backdrop-brightness":[r]}],"backdrop-contrast":[{"backdrop-contrast":[s]}],"backdrop-grayscale":[{"backdrop-grayscale":[u]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[h]}],"backdrop-invert":[{"backdrop-invert":[m]}],"backdrop-opacity":[{"backdrop-opacity":[g]}],"backdrop-saturate":[{"backdrop-saturate":[w]}],"backdrop-sepia":[{"backdrop-sepia":[F]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[o]}],"border-spacing-x":[{"border-spacing-x":[o]}],"border-spacing-y":[{"border-spacing-y":[o]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",me]}],duration:[{duration:ne()}],ease:[{ease:["linear","in","out","in-out",me]}],delay:[{delay:ne()}],animate:[{animate:["none","spin","ping","pulse","bounce",me]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[P]}],"scale-x":[{"scale-x":[P]}],"scale-y":[{"scale-y":[P]}],rotate:[{rotate:[ia,me]}],"translate-x":[{"translate-x":[q]}],"translate-y":[{"translate-y":[q]}],"skew-x":[{"skew-x":[D]}],"skew-y":[{"skew-y":[D]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",me]}],accent:[{accent:["auto",e]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",me]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":L()}],"scroll-mx":[{"scroll-mx":L()}],"scroll-my":[{"scroll-my":L()}],"scroll-ms":[{"scroll-ms":L()}],"scroll-me":[{"scroll-me":L()}],"scroll-mt":[{"scroll-mt":L()}],"scroll-mr":[{"scroll-mr":L()}],"scroll-mb":[{"scroll-mb":L()}],"scroll-ml":[{"scroll-ml":L()}],"scroll-p":[{"scroll-p":L()}],"scroll-px":[{"scroll-px":L()}],"scroll-py":[{"scroll-py":L()}],"scroll-ps":[{"scroll-ps":L()}],"scroll-pe":[{"scroll-pe":L()}],"scroll-pt":[{"scroll-pt":L()}],"scroll-pr":[{"scroll-pr":L()}],"scroll-pb":[{"scroll-pb":L()}],"scroll-pl":[{"scroll-pl":L()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",me]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[Cn,Gn,Us]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}},E5=l5(S5);function ln(...e){return E5(mb(e))}const yb=A.forwardRef(({className:e,...t},n)=>N.jsx(hb,{ref:n,className:ln("relative inline-flex h-[24px] w-[44px] cursor-pointer rounded-full transition-colors duration-200 ease-in-out","focus:outline-none focus-visible:ring focus-visible:ring-sky-500 focus-visible:ring-opacity-75","bg-sky-900","data-[state=checked]:bg-sky-600",e),...t}));yb.displayName=hb.displayName;const vb=A.createContext(void 0),C5=({children:e})=>{const[t,n]=A.useState(!1);return N.jsx(vb.Provider,{value:{fontToggle:t,setFontToggle:n},children:e})},$b=()=>{const e=A.useContext(vb);if(!e)throw new Error("useFontToggle must be used within a FontToggleProvider");return e},D5=()=>{const{fontToggle:e,setFontToggle:t}=$b();return Lf.useEffect(()=>{const n=window.document.documentElement;e?n.classList.add("alt-font"):n.classList.remove("alt-font")},[e]),N.jsx("nav",{className:"bg-sky-100 shadow",children:N.jsxs("div",{className:"container mx-auto px-4 h-16 flex items-center justify-between",children:[N.jsx(Rr,{to:"/",className:"text-xl font-bold text-sky-900 hover:text-sky-600",children:"Luna"}),N.jsxs("div",{className:"my-auto flex items-center justify-between",children:[N.jsx(yb,{className:"mr-4",checked:e,onCheckedChange:t}),N.jsx(Rr,{to:"/warp",className:"font-semibold text-sky-900 hover:text-sky-600 mx-4",children:"Warp"}),N.jsx(Rr,{to:"/show",className:"font-semibold text-sky-900 hover:text-sky-600 mx-4",children:"World"}),N.jsx(Rr,{to:"/about",className:"font-semibold text-sky-900 hover:text-sky-600 mx-4",children:"About"})]})]})})},z5=()=>N.jsx("footer",{className:"bg-sky-100 shadow mt-10",children:N.jsx("div",{className:"container mx-auto px-4 h-16 flex items-center justify-center",children:N.jsx("p",{className:"text-sky-800",children:"All original information in this website follow CC BY-SA 3.0 Unported creative commons license."})})});function Om(e,t){if(typeof e=="function")return e(t);e!=null&&(e.current=t)}function P5(...e){return t=>{let n=!1;const r=e.map(i=>{const a=Om(i,t);return!n&&typeof a=="function"&&(n=!0),a});if(n)return()=>{for(let i=0;i<r.length;i++){const a=r[i];typeof a=="function"?a():Om(e[i],null)}}}}var xb=A.forwardRef((e,t)=>{const{children:n,...r}=e,i=A.Children.toArray(n),a=i.find(T5);if(a){const o=a.props.children,l=i.map(s=>s===a?A.Children.count(o)>1?A.Children.only(null):A.isValidElement(o)?o.props.children:null:s);return N.jsx(b0,{...r,ref:t,children:A.isValidElement(o)?A.cloneElement(o,void 0,l):null})}return N.jsx(b0,{...r,ref:t,children:n})});xb.displayName="Slot";var b0=A.forwardRef((e,t)=>{const{children:n,...r}=e;if(A.isValidElement(n)){const i=N5(n),a=F5(r,n.props);return n.type!==A.Fragment&&(a.ref=t?P5(t,i):i),A.cloneElement(n,a)}return A.Children.count(n)>1?A.Children.only(null):null});b0.displayName="SlotClone";var A5=({children:e})=>N.jsx(N.Fragment,{children:e});function T5(e){return A.isValidElement(e)&&e.type===A5}function F5(e,t){const n={...t};for(const r in t){const i=e[r],a=t[r];/^on[A-Z]/.test(r)?i&&a?n[r]=(...l)=>{a(...l),i(...l)}:i&&(n[r]=i):r==="style"?n[r]={...i,...a}:r==="className"&&(n[r]=[i,a].filter(Boolean).join(" "))}return{...e,...n}}function N5(e){var r,i;let t=(r=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:r.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=(i=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:i.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}const jm=e=>typeof e=="boolean"?`${e}`:e===0?"0":e,Hm=mb,M5=(e,t)=>n=>{var r;if((t==null?void 0:t.variants)==null)return Hm(e,n==null?void 0:n.class,n==null?void 0:n.className);const{variants:i,defaultVariants:a}=t,o=Object.keys(i).map(u=>{const h=n==null?void 0:n[u],m=a==null?void 0:a[u];if(h===null)return null;const p=jm(h)||jm(m);return i[u][p]}),l=n&&Object.entries(n).reduce((u,h)=>{let[m,p]=h;return p===void 0||(u[m]=p),u},{}),s=t==null||(r=t.compoundVariants)===null||r===void 0?void 0:r.reduce((u,h)=>{let{class:m,className:p,...f}=h;return Object.entries(f).every(v=>{let[$,k]=v;return Array.isArray(k)?k.includes({...a,...l}[$]):{...a,...l}[$]===k})?[...u,m,p]:u},[]);return Hm(e,o,s,n==null?void 0:n.class,n==null?void 0:n.className)},wb=M5("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),_i=A.forwardRef(({className:e,variant:t,size:n,asChild:r=!1,...i},a)=>{const o=r?xb:"button";return N.jsx(o,{className:ln(wb({variant:t,size:n,className:e})),ref:a,...i})});_i.displayName="Button";const R5=({post:e})=>N.jsxs("div",{className:"bg-sky-100 rounded-lg shadow p-6 mb-6 mx-16",children:[N.jsx("h2",{className:`font-semibold text-sky-900
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
      `,children:e.excerpt}),N.jsx(Rr,{to:`/posts/${e.id}`,children:N.jsx(_i,{variant:"default",className:`font-semibold bg-sky-900 text-sky-100 hover:bg-sky-600 focus:outline-none
        text-sm
        sm:text-sm
        lg:text-base
        `,children:"Detail"})})]});/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q5=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),_b=(...e)=>e.filter((t,n,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===n).join(" ").trim();/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var I5={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B5=A.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i="",children:a,iconNode:o,...l},s)=>A.createElement("svg",{ref:s,...I5,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:_b("lucide",i),...l},[...o.map(([u,h])=>A.createElement(u,h)),...Array.isArray(a)?a:[a]]));/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ns=(e,t)=>{const n=A.forwardRef(({className:r,...i},a)=>A.createElement(B5,{ref:a,iconNode:t,className:_b(`lucide-${q5(e)}`,r),...i}));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L5=ns("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O5=ns("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kb=ns("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j5=ns("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),Sb=({className:e,...t})=>N.jsx("nav",{role:"navigation","aria-label":"pagination",className:ln("mx-auto flex w-full justify-center",e),...t});Sb.displayName="Pagination";const Eb=A.forwardRef(({className:e,...t},n)=>N.jsx("ul",{ref:n,className:ln("flex flex-row items-center gap-1",e),...t}));Eb.displayName="PaginationContent";const Zo=A.forwardRef(({className:e,...t},n)=>N.jsx("li",{ref:n,className:ln("",e),...t}));Zo.displayName="PaginationItem";const rs=({className:e,isActive:t,size:n="icon",...r})=>N.jsx("a",{"aria-current":t?"page":void 0,className:ln(wb({variant:t?"outline":"ghost",size:n}),e),...r});rs.displayName="PaginationLink";const Cb=({className:e,...t})=>N.jsxs(rs,{"aria-label":"Go to previous page",size:"default",className:ln("gap-1 pl-2.5",e),...t,children:[N.jsx(L5,{className:"h-4 w-4"}),N.jsx("span",{children:"Previous"})]});Cb.displayName="PaginationPrevious";const Db=({className:e,...t})=>N.jsxs(rs,{"aria-label":"Go to next page",size:"default",className:ln("gap-1 pr-2.5",e),...t,children:[N.jsx("span",{children:"Next"}),N.jsx(O5,{className:"h-4 w-4"})]});Db.displayName="PaginationNext";const H5=({posts:e,currentPage:t,totalPages:n,onPageChange:r})=>N.jsxs("div",{className:"space-y-6",children:[N.jsx("div",{children:e.map(i=>N.jsx(R5,{post:i},i.id))}),N.jsx("div",{className:"flex justify-center mt-8",children:N.jsx(Sb,{children:N.jsxs(Eb,{className:"gap-2",children:[" ",N.jsx(Zo,{children:N.jsx(Cb,{onClick:()=>t>1&&r(t-1),className:ln("select-none","min-w-9 h-9","bg-sky-100 hover:bg-sky-200","text-sky-900","rounded-md","flex items-center justify-center")})}),[...Array(n)].map((i,a)=>N.jsx(Zo,{className:"list-none",children:N.jsx(rs,{onClick:()=>r(a+1),className:ln("select-none","min-w-9 h-9","bg-sky-100 hover:bg-sky-200","text-sky-900","rounded-md","flex items-center justify-center",t===a+1&&"bg-sky-900 text-sky-100 hover:bg-sky-800"),children:a+1})},a+1)),N.jsx(Zo,{children:N.jsx(Db,{onClick:()=>t<n&&r(t+1),className:ln("select-none","min-w-9 h-9","bg-sky-100 hover:bg-sky-200","text-sky-900","rounded-md","flex items-center justify-center")})})]})})})]}),Jo=[{id:1,title:"Test LATEX",date:"2023-10-01",excerpt:"Test LATEX",contentKey:"post1",author:"Tester",category:"Test"},{id:4,title:"[QC] Day 1 - Projective measure",date:"2024-12-10",excerpt:"QC Day 1 - Projective measure: Exercise 2.58 - 2.61",contentKey:"QC_1",author:"Me",category:"Quantum Computation"},{id:5,title:"[QC] Day 2 - Phase, Composite systems",date:"2024-12-10",excerpt:"QC Day 2 - Phase Composite systems",contentKey:"QC_2",author:"Me",category:"Quantum Computation"},{id:6,title:"[CD] Day 1 - Japanese sentence structure",date:"2024-12-11",excerpt:"CD Day 1 - Japanese sentence structure, yoroshiku, wo/ni/no, verb conjugation, teiru/tearu",contentKey:"CD_1",author:"私",category:"Cure Dolly"},{id:7,title:"[CD] Day 2 - Adjective",date:"2024-12-11",excerpt:"CD Day 2 - i/na adjectives, da/desu, noni, ender",contentKey:"CD_2",author:"私",category:"Cure Dolly"},{id:8,title:"[CD] Day 3 - mo",date:"2024-12-12",excerpt:"CD Day 3 - mo, negative, adjective conjugation, transitive/intransitive",contentKey:"CD_3",author:"私",category:"Cure Dolly"},{id:9,title:"[QC] Day 3 - POVM, superdense coding, density operator",date:"2024-12-13",excerpt:"QC Day 3 - POVM, some thoughts about it, superdense coding, density operator",contentKey:"QC_3",author:"Me",category:"Quantum Computation"},{id:10,title:"[CD] Day 4 - te-miru",date:"2024-12-12",excerpt:"CD Day 4 - te-miru, masu, causative/receptive, place",contentKey:"CD_4",author:"私",category:"Cure Dolly"},{id:11,title:"[QC] Day 4 - more density operator",date:"2024-12-16",excerpt:"QC Day 4 - more density operator",contentKey:"QC_3",author:"Me",category:"Quantum Computation"},{id:12,title:"[A0] Day 1 - Chapter 1",date:"2024-12-19",excerpt:"QC Day 1 - Chapter 1 exercise",contentKey:"A0_1",author:"Me",category:"Algebra Chapter 0"},{id:13,title:"[A0] Day 2 - Chapter 1, function between sets",date:"2024-12-21",excerpt:"QC Day 2 - function between sets",contentKey:"A0_2",author:"Me",category:"Algebra Chapter 0"},{id:14,title:"[EC] Day 1 -  THE SELECTION EFFECT AND THE SPEED OF LEARNING",date:"2024-12-23",excerpt:"EC Day 1 - the seletion effect and the speed of learning",contentKey:"EC_1",author:"Me",category:"Business paper"},{id:15,title:"[EC] Day 2 -  The Good, The Bad and The Picky: Reference Dependence and the Reversal of Product Ratings",date:"2024-12-29",excerpt:"EC Day 2 - The Good, The Bad and The Picky: Reference Dependence and the Reversal of Product Ratings",contentKey:"EC_2",author:"Me",category:"Business paper"},{id:16,title:"[EC] Day 3 - Stability Evaluation through Distributional Perturbation Analysis",date:"2025-1-15",excerpt:"[EC] Day 3 - Stability Evaluation through Distributional Perturbation Analysis",contentKey:"EC_3",author:"Me",category:"Business paper"},{id:17,title:"[CD] Day 5 - te-oku",date:"2025-1-15",excerpt:"CD Day 5 - te-oku",contentKey:"CD_5",author:"私",category:"Cure Dolly"},{id:18,title:"[EC] Day 4 - Conformal Inverse Optimization",date:"2025-1-18",excerpt:"[EC] Day 4 - Conformal Inverse Optimization",contentKey:"EC_4",author:"Me",category:"Business paper"},{id:19,title:"[EC] Day 5 - A Survey of Contextual Optimization Methods for Decision-Making under Uncertainty",date:"2025-1-21",excerpt:"[EC] Day 5 - A Survey of Contextual Optimization Methods for Decision-Making under Uncertainty",contentKey:"EC_5",author:"Me",category:"Business paper"},{id:20,title:"[EC] Day 7 - A Practical Use of SLO",date:"2025-2-24",excerpt:"[EC] Day 7 - A Practical Use of SLO",contentKey:"EC_7",author:"Me",category:"Business paper"},{id:21,title:"[GT] Week 1 - Introduction",date:"2025-2-24",excerpt:"[GT] Week 1 - Introduction",contentKey:"GT_1",author:"Me",category:"Notes"},{id:22,title:"[GT_P] Week 1 - supplier encroachment",date:"2025-2-24",excerpt:"[GT_P] Week 1 - supplier encroachment",contentKey:"GT_P1",author:"Me",category:"Notes"},{id:23,title:"[SP] Week 1 - RV",date:"2025-2-24",excerpt:"[SP] Week 1 - RV",contentKey:"SP_1",author:"Me",category:"Notes"},{id:24,title:"[GT] Week 1 - Assignment",date:"2025-2-24",excerpt:"[GT] Week 1 - Assignment",contentKey:"GT_A1",author:"Me",category:"Assignments"},{id:25,title:"[SP] Week 1 - Assignment",date:"2025-2-24",excerpt:"[SP] Week 1 - Assignment",contentKey:"SP_A1",author:"Me",category:"Assignments"},{id:26,title:"[EC] Day 6 - Crowdsourcing Exploration ",date:"2025-2-25",excerpt:"[EC] Day 6 - Crowdsourcing Exploration ",contentKey:"EC_6",author:"Me",category:"Business paper"},{id:27,title:"[EC] Day 8 -  Service Oriented Considerate Routing",date:"2025-2-25",excerpt:"[EC] Day 8 - Service Oriented Considerate Routing",contentKey:"EC_8",author:"Me",category:"Business paper"}],W5=({categories:e,isExpanded:t,onExpandedChange:n})=>{const r=es(),i=un();A.useEffect(()=>{localStorage.setItem("sidebarExpanded",JSON.stringify(t))},[t]);const o=new URLSearchParams(i.search).get("category"),l=s=>{r(s==="All"?"/":`/?category=${s}`)};return N.jsxs("div",{className:`
        fixed
        transition-all duration-300 ease-in-out transform
        bg-sky-100 shadow
        overflow-hidden
        ${t?"w-[250px] h-auto p-4 rounded-lg":"w-10 h-10 p-0 rounded-lg"}
      `,children:[N.jsx(_i,{variant:"ghost",size:"icon",onClick:()=>n(!t),className:`
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
        `,children:t?N.jsx(j5,{className:"h-4 w-4 text-sky-900"}):N.jsx(kb,{className:"h-4 w-4 text-sky-900"})}),N.jsxs("div",{className:`
        transition-all duration-300 ease-in-out transform
        ${t?"opacity-100 mt-8":"opacity-0 invisible h-0"}
      `,children:[N.jsx("h2",{className:`font-semibold text-sky-900 mb-4
        lg:text-xl
        sm:text-base
        `,children:"Categories"}),N.jsxs("ul",{className:"w-full pr-2",children:[N.jsx("li",{className:"mb-2",children:N.jsx(_i,{className:`w-full justify-start font-semibold hover:bg-sky-600 focus:outline-none
              text-xs
              sm:text-xs
              lg:text-sm
              ${o===null?"bg-sky-900 text-sky-100":"bg-sky-100 text-sky-900"}`,onClick:()=>l("All"),children:"All"})}),e.map(s=>N.jsx("li",{className:"mb-2",children:N.jsx(_i,{className:`w-full justify-start font-semibold hover:bg-sky-600 focus:outline-none text-left
                text-xs break-words whitespace-normal
                sm:text-xs sm:break-words sm:whitespace-normal 
                lg:text-sm lg:break-normal lg:whitespace-nowrap 
                ${o===s?"bg-sky-900 text-sky-100":"bg-sky-100 text-sky-900"}`,onClick:()=>l(s),children:s})},s))]})]})]})},Xs=5,U5=()=>{const e=un(),n=new URLSearchParams(e.search).get("category"),r=Array.from(new Set(Jo.map(p=>p.category)));A.useEffect(()=>{a(1)},[n]);const[i,a]=A.useState(1),[o,l]=A.useState(()=>{const p=localStorage.getItem("sidebarExpanded");return p?JSON.parse(p):!1}),s=n&&n!=="All"?Jo.filter(p=>p.category===n):Jo,u=Math.ceil(s.length/Xs),h=s.slice((i-1)*Xs,i*Xs),m=s.length>0;return N.jsxs("div",{className:"container mx-auto mt-10",children:[N.jsx("h1",{className:`font-bold mb-8 text-center text-sky-100
      text-5xl
      sm:text-5xl
      lg:text-6xl
      `,children:"This is Luna's world"}),N.jsxs("div",{className:"flex row-auto",children:[N.jsx("div",{className:`
          transition-all duration-300 ease-in-out
          ${o?"w-[250px]":"w-10"}
          mr-6
        `,children:N.jsx(W5,{categories:r,isExpanded:o,onExpandedChange:l},n)}),N.jsx("div",{className:`
          transition-all duration-300 ease-in-out
          flex-1
          ${o?"ml-0":"ml-4"}
        `,children:m?N.jsx(H5,{posts:h,currentPage:i,totalPages:u,onPageChange:a}):N.jsx("p",{className:"text-sky-100",children:"No posts found in this category."})})]})]})},X5=()=>N.jsxs("div",{className:"mx-auto w-1/2 mt-10 p-6 bg-sky-100 rounded-lg shadow",children:[N.jsx("h1",{className:"text-3xl font-bold mb-4 text-sky-900",children:"About"}),N.jsx("p",{className:"text-sky-900 leading-7",children:"Love is murderous utopia."})]}),K5=`# Exercise 1.1

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
`,V5=`# Function between sets

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
`,G5=`# Introduction 

## Academic

- academic skills
- academic tasks

## English
- proficiency of using the English language

## Business 
- a specific discipline as the focus 

## Target

> Enhance English proficiency for doing academic tasks in business 

# For who

- Studying Business in English-medium academic settings

# What will you do

Based on the features of studying business 

- Problem-solving
- Decision-making
- Persuasion

Through **ENGLISH**

# Academic skills required 

- the case method
  - actual business situations 
  - apply knowledge to analysis & decision-making 

For example 

  - simulate real-world problems 
  - Give a feel 

- case study 


# Tasks

- case study
- critical thinking
- researching
- presentations
- writing
- `,Q5=`# Quick review

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


`,Y5=`# い and な adjectives

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

`,Z5=`# も

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
`,J5=`# あいだ

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




`,e$=`### te iru/te aru

`,t$=`# LEARNING FROM REVIEWS: THE SELECTION EFFECT AND THE SPEED OF LEARNING

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

`,n$=`# Model

$1$: consumers totalling mass

$E, NE$: Experts, Non-Experts

$\\psi\\in(0,1)$: the share of Experts

$1 - \\psi$: thetshare of Non-Experts

$q\\in [0, 1]$ product quality

$0$ prices normalized to 0

$F_E(q)$: Experts choose, a continuous, smooth cumulative distribution

$f_E(q)$ density

$F_{NE}(q), f_{NE}(q)$: Non-Experts

### Assumption 1 (Expertise and Choice)

> $F_E(q)\\le F_{NE}(q), \\forall q\\in [0, 1]$: On average, Experts identify and purchase better products.
> $\\dfrac{\\partial \\left(\\frac{f_E(q)}{f_{NE}(q)}\\right)}{\\partial q} > 0$: MLRP property
> MLRP: Monotone Likelihood Ratio Property, the better will be better.

**Assumption 1** gives us:
- Experts experience higher quality on average
- the higher the product’s quality, the higher the share of its buyers that are Experts.

$r_E := \\int_{0}^{1}q\\mathrm d F_E(q), \\quad r_{NE}:= \\int_{0}^{1}q\\mathrm d F_{NE}(q)$: Choice Procedure (Also means Expectation)

$r_E > r_{NE}$

- We denote this gap by $ \\Delta(r):=r_{E}-r_{N E}>0 $.
-  In our empirical analysis, we find a substantial $ \\Delta(r) $ on both IMDb and MovieLens.

### Assumption 2 (Reference-Dependence)

>  For every $ q \\in[0,1] $ and consumer type $ i=E, N E $, we have:
>
> #### (1)
>
> $ U_{i}(q)=u(q)+\\mu\\left(u(q)-u\\left(r_{i}\\right)\\right) $
> - $ u(\\cdot) $ satisfying the standard assumptions $ u^{\\prime}(\\cdot)>0 $ and $ u^{\\prime \\prime}(\\cdot)<0 $
> - $ \\mu>0 $.

From [Equation 1](#1):
- standards enter utility negatively
- $\\mu$ quantify their impace 

This leads Experts to be less satisfied than Non-Experts

For any level of $q$:

$ \\begin{aligned} r_{E}>r_{N E} & \\Rightarrow U_{E}(q)-U_{N E}(q) \\\\ & =\\left(u(q)+\\mu\\left(u(q)-u\\left(r_{E}\\right)\\right)\\right)-\\left(u(q)+\\mu\\left(u(q)-u\\left(r_{N E}\\right)\\right)\\right) \\\\ & =\\mu \\cdot\\left(u\\left(r_{N E}\\right)-u\\left(r_{E}\\right)\\right) \\\\ & <0 \\quad \\forall q \\geq 0\\end{aligned} $

- the inequality follows from $ \\mu>0, u^{\\prime}(\\cdot)>0 $ and $ r_{E}>r_{N E} $

### Assumption 3 ((Subjectively) Honest Ratings)

> For every $ q \\in[0,1] $, and $ i=E, N E $, ratings reflect subjective satisfaction:
> $ \\mathcal{R}_{i}(q)=U_{i}(q) $

Without loss of generality, given Experts' higher stringency:

we can normalize utilities so that 
- $ \\mathcal{R}_{E}(0)=0 $ 
- $ \\mathcal{R}_{N E}(1)=1 $. 

This ensures all ratings lie within this interval

---

We first consider the case:

the average ratings displayed by the platform are the average of individual opinions. 

That is, given a share $ \\psi $ of Experts, choice densities $ f_{E}(\\cdot) $ and $ f_{N E}(\\cdot) $, and ratings $ R_{E}(\\cdot) $ and $ R_{N E}(\\cdot) $, 

we have:

$ \\begin{aligned} \\mathcal{R}(q) & =\\frac{\\psi f_{E}(q) \\mathcal{R}_{E}(q)+(1-\\psi) f_{N E}(q) \\mathcal{R}_{N E}(q)}{\\psi f_{E}(q)+(1-\\psi) f_{N E}(q)} \\\\ & =\\frac{\\psi f_{E}(q) U_{E}(q)+(1-\\psi) f_{N E}(q) U_{N E}(q)}{\\psi f_{E}(q)+(1-\\psi) f_{N E}(q)} \\\\ & =: \\omega_{E}(q, \\psi) U_{E}(q)+\\left(1-\\omega_{E}(q, \\psi)\\right) U_{N E}(q) \\\\ & =(1+\\mu) u(q)-\\mu\\left(\\omega_{E}(q, \\psi) r_{E}+\\left(1-\\omega_{E}(q, \\psi)\\right) r_{N E}\\right)\\end{aligned} $

- $ \\omega_{E}(q, \\psi):=\\frac{\\psi f_{E}(q)}{\\psi f_{E}(q)+(1-\\psi) f_{N E}(q)} $
  - represents the share of buyers who are Experts, 
  - as a function of product quality $ q $, their baseline share $ \\psi $, and choice densities $ f_{E}(\\cdot) $ and $ f_{N E}(\\cdot) $.

We will relax assumption and consider slightly more general aggregation rules, such as:

- prioritize more expert consumers
- prioritize products with a larger number of ratings

### Proposition 1

> Quality-based self-selection causes ratings to underestimate quality differences. 
> 
> Moreover, ratings can be non-monotonic in quality. 
> 
> In particular, $ \\mathcal{R}^{\\prime}(q)>0 $ if and only if the following condition is satisfied:

> #### (2)
>
> $ u^{\\prime}(q) \\geq \\frac{\\partial \\omega_{E}(q, \\psi)}{\\partial q} \\cdot \\Delta(r) \\cdot \\frac{\\mu}{1+\\mu} $

First result follows:
- higher quality products are purchased by a higher share of Experts

Thus:

they face a higher “burden of proof”, 
- which implies their relative ratings are penalized compared to those of their lower quality alternatives.

Second result admits a intuition, we list the terms of [Equation 2](#2):

$ \\underbrace{u^{\\prime}(q)}_{\\text {Gains in individual satisfaction }} \\geq \\underbrace{\\frac{\\partial \\omega_{E}(q, \\psi)}{\\partial q}}_{\\text {Increase in } \\% \\text { of } \\mathrm{E} \\text { buyers }} \\cdot \\underbrace{\\Delta(r)}_{\\text {Difference in standards }} \\cdot \\underbrace{\\frac{\\mu}{1+\\mu}}_{\\text {Importance of reference-dependence }} $

- the LHS quantifies the gains in ratings from improved quality:
  - each individual consumer is more satisfied, as measured by $ u^{\\prime}(q) $. 
- The RHS quantifies its costs, driven by self-selection: 
  - the first term represents choice heterogeneity, 
  - and the second and third rating heterogeneity. 
    - In particular, $ \\frac{\\partial \\omega_{E}(q, \\psi)}{\\partial q} $ represents negative self-selection, 
      - or the increase in the share of Experts buyers as $ q $ increases; 
    - $ \\Delta(r) $ represents the difference in standards between Experts and Non-Experts; 
    - $ \\frac{\\mu}{1+\\mu} $ measures the relative weight of referencedependence in shaping total individual utility.

Note that:
 
when either $ \\frac{\\partial \\omega_{E}(q, \\psi)}{\\partial q}, \\Delta(r) $ or $ \\mu $ go to zero,
- ratings are guaranteed to be increasing,
- since $ u^{\\prime}(\\cdot)>0 $. 

It is straightforward to see why: 
- the first case corresponds to a lack of self-selection, 
- the second to equal standards (and thus ratings) for the two types of consumers,
- and the third to reference-independent 

and, thus, homogenous across consumers - utility.

In Section 4.4,:

we propose a fixed-point algorithm to back out individual stringency for each user, 
- which allows us to correct for it
- and thus obtain new ratings reflecting $ \\Delta(r)=0 $, thus eliminating the bias.

## 3.1 Platform Design 

Consider two commonly observed real world practices. 
- First, a vast majority of platforms overweight the opinions of their most expert reviewers. 
- While there are obvious rationales for doing so 
  - for instance, more expert consumers might be less likely to post fake ratings,
  - or more thorough in their quality evaluations 

the following Corollary shows that this can have perverse effect in our context

### Corollary 1 

> When the percentage of Experts, $ \\psi $, is low, >
> 
> overweighting their opinions by a factor $ \\gamma>1 $ worsens the bias, 
> 
> further contracting ratings and thus making it more likely for the monotonicity between ratings and quality to be broken.

Observation:

the bias gets worse when the crowd of buyers is more heterogeneous: 

- If $ 90 \\% $ of buyers were Experts, 
  - then overweighting their opinions bring aggregate ratings closer to essentially only reflecting the (homogeneous) opinions of Experts, 
  - yielding monotonicity: $ \\mathcal{R}^{\\prime}(q) \\approx(1+ $ $ \\mu) u^{\\prime}(q)>0 $. 
- Conversely, if - say - only $ 10 \\% $ were Experts (which we believe to be the far more likely scenario empirically), increasing their share worsens the bias


the number of buyers for a given product is proportional to the share of Experts buyers: 
- while everybody responds to quality, Experts do so more than Non-Experts. 

Therefore, more popular products are effectively facing a higher burden of proof. 

We thus provide an additional rationale for the platform rewarding products receiving more ratings, even in a setting in which a greater number of reviews does not bring more accuracy or credibility per se.

### Corollary 2

> Denote by $ \\mathcal{N}(q):=\\psi f_{E}(q)+(1-\\psi) f_{N E}(q) $ the number of ratings for product $ q $,
> 
> and by $ \\beta(\\cdot) $ a reward function, with $ \\beta(\\cdot), \\beta^{\\prime}(\\cdot)>0 $. 
> 
> Then, substituting average ratings $ \\mathcal{R}(q) $ with mass inflated ratings $ \\beta(\\mathcal{N}(q)) \\cdot \\mathcal{R}(q) $ reduces ratings' contraction and improves monotonicity.


A very stylized relationship between quality and number of ratings:
- higher quality products are on average more popular than their lower quality alternatives.
-  While fairly natural, this relationship need not always hold empirically. 
-  In particular, one can think of products of mediocre quality but huge mass appeal, and viceversa, high quality and niche appeal. 
-  In those situations, the impact of inflating the ratings of popular products would be reversed.

In Section 4.4 : 

we propose a complementary design remedy that:
- is both new (to the best of our knowledge)
- and conceptually orthogonal to those highlighted in Corollaries 1 and 2. 

Unlike in Corollary 1, our algorithm counts all ratings equally, 

and thus does not require us to take a stance on which opinions are credible or not; 

it also requires less knowledge of the proportion of Experts (even more: it does not require us to take a stance on who is an expert in the first place). 

Moreover, unlike in Corollary 2, our algorithm is agnostic as to the predictive power of the number of ratings on ratings' stringency, and correct for the bias in either of the two cases highlighted here.

# 4 Data and Empirical Strategy

We now provide empirical support for the role of consumer expertise on:

both choice and rating behavior as described in Section 3, and study its consequences for movie ratings.

We start by presenting the dataset in Section 4.1. 

Our dataset is obtained by combining data from two online platforms: MovieLens and IMDb. 

In particular,
- we carefully explain how we proxy movies' quality with festival and industry awards,
-  and users' stringency with the number of ratings posted on the platforms. 

Then, in Subsections 4.2 and 4.3, we provide empirical evidence for our two main assumptions. 

In particular, we will center our analysis on the following two empirical counterparts of Assumptions 1 and 2 in Section 3:

### Choice heterogeneity

> Experts watch and rate higher-quality movies than Non-Experts 

### Rating heterogeneity

> For a given movie, Experts post lower rating than Non-Experts 

After providing support for these two facts, 

in Subsection 4.4 we provide a fixed-point algorithm to remove the self-selection of stringent, expert reviewers into high quality movies 

Allow us to compute new, normalized ratings, and provide convincing evidence for the main proposition of the model: 

average ratings understate differences in quality, thus unfaitly penalizing high quality movies compared to their inferior alternatives 

## 4.1 The Database

$$
\\begin{array}{|c|c|c|c|c|c|}
\\hline
 & \\text{Mean} & \\text{SD} & \\text{N} & \\text{Min} & \\text{Max} \\\\
\\hline
\\text{Year of Production} & 2007 & 6.81 & 9426 & 1995 & 2019 \\\\
\\hline
\\text{Movie Runtime} & 104.1 & 28.9 & 9426 & 2 & 629 \\\\
\\hline
\\text{Genre: Action (\\%)} & 17 & - & 9426 & - & - \\\\
\\hline
\\text{Genre: Comedy (\\%)} & 26 & - & 9426 & - & - \\\\
\\hline
\\text{Genre: Drama (\\%)} & 26 & - & 9426 & - & - \\\\
\\hline
\\text{Nominated or Awarded (\\%)} & 58 & - & 9426 & - & - \\\\
\\hline
\\text{Nominated or Awarded (Excluding Academy) (\\%)} & 48 & - & 9426 & - & - \\\\
\\hline
\\text{IMDb Ratings: } \\bar{r}_{i}^{I M D b} & 6.5 & 0.979 & 9426 & 1.4 & 9.5 \\\\
\\hline
\\text{IMDb Number of Users: } n_{i}^{I M D b}(\\times 1000) & 69 & 148 & 9426 & 0.05 & 2588 \\\\
\\hline
\\text{IMDb Top1000 Ratings: } \\bar{r}_{i}^{\\text{Top } 1000} & 6 & 0.864 & 9426 & 1 & 9 \\\\
\\hline
\\text{IMDb Number of Top1000 Users: } n_{i}^{\\text{Top1000 }} & 260.3 & 191 & 9426 & 2 & 928 \\\\
\\hline
\\text{MovieLens Ratings: } \\bar{r}_{i}^{\\text{Movielens }} & 3.2 & 0.459 & 9426 & 0.8548 & 4.483 \\\\
\\hline
\\text{MovieLens Number of Users: } n_{i}^{\\text{Movielens }}(\\times 1000) & 1.6 & 4.36 & 9426 & 0.031 & 72.67 \\\\
\\hline
\\text{Have Critics Reviews: } \\operatorname{Meta}_{i}(\\%) & 72 & - & 9426 & - & - \\\\
\\hline
\\text{Have Positive Critics Reviews: } M e t a_{i}^{>60} (\\%) & 32 & - & 9426 & - & - \\\\
\\hline
\\text{Share 18-29 Users: } p_{i}^{18-29} (\\%) & 13 & - & 9426 & - & - \\\\
\\hline
\\text{Share 30-44 Users: } p_{i}^{30-44} (\\%) & 60 & - & 9426 & - & - \\\\
\\hline
\\text{Share Over 45 Users: } p_{i}^{45} (\\%) & 26 & - & 9426 & - & - \\\\
\\hline
\\text{Share Female Users: } p_{i}^{\\text{female }} (\\%) & 21 & - & 9426 & - & - \\\\
\\hline
\\text{Share US Users: } p_{i}^{U S}(\\%) & 30 & - & 9426 & - & - \\\\
\\hline
\\end{array}
$$

![Figure 1](image.png)

Figure 1: Distribution of the number of ratings posted by Top 1000 users.

## 4.2 Choice Heterogeneity 

Experts differ from Non-Experts since:
- they are more capable of choosing high quality products. 

Thus, we expect Top1000 users to watch and rate more high quality movies. 

The main estimating equation to study this assumption is the following:

### (3)

$ n_{i}^{\\text {Top } 1000}=\\alpha+\\beta_{1} q_{i}+\\beta_{2} X_{i}+\\epsilon_{i} $,

- $ n_{i}^{\\text {Top } 1000} $ is the total number of ratings by Top 1000 users for movie $ i $; 

Figure 1 shows the distribution of $ n_{i}^{\\text {Top } 1000} $ for all movies in our sample. 

No movies are rated by all 1000 Top1000 users. 

Accordingly, issues related to censoring bias are not relevant in our analysis. 

- $ q_{i} $ is the unobserved quality of movie $ i ; 
- X_{i} $ is a set of controls related to movie characteristics and its audience; 
- and $ \\epsilon_{i} $ is an error term. 

Movie quality is not perfectly observable. 

In our preferred specifications, we proxy quality using three measures that do not depend on platforms' feedback. 

- In particular, we use one dummy variable that equals 1 if a movie has received at least one nomination or award to one of the major festival or industry awards around the world. 

- A second dummy variable that equals 1 if a movie has received at least one nomination or award excluding the Academy awards. 

We exclude the Academy awards since previous research has shown that:
- the relevance of the Oscars is such that it may move users' reference point, and affect selection of users who watch the nominated and awarded movies (Rossi, 2021). 

Finally, we use a third dummy variable that equals 1 if a movie has received a Metacritic Metascore greater than 60 .

Quality and popularity are correlated positively.

## Rating Heterogeneity 

Experts have higher standards than Non-Experts.

## 4.4 Debiasing the Ratings 

Of course, individual stringency and ratings are intertwined: updating one implies updating the other. 

Thus, we iterate this process until it converges. 

More formally, for each MovieLens user $ j $, defined as $ \\mathcal{I}_{j} $ the set of movies she has watched. 

Moreover, define by $ n_{j} $ the cardinality of $ \\mathcal{I}_{j} $, or user expertise. 

Then, for each movie $ i \\in \\mathcal{I}_{j} $, compute the movie-user specific stringency as the average movie rating, $ \\bar{r}_{i} $, minus the rating posted by the user, $ r_{i j} $. 

Then, we define the user's stringency as the average of movie-user specific stringency over the set $ \\mathcal{I}_{j} $ :

### (4)

$ s_{j}:=\\frac{\\sum_{i \\in \\mathcal{I}_{j}}\\left(\\bar{r}_{i}-r_{i j}\\right)}{n_{j}} $

Then, we compute new movie ratings 
- which take into account - and correct for - how stringent their watchers are. 

Define by $ \\mathcal{J}_{i} $ the set of all users who have watched movie $ i $, 

and by $ n_{i} $ its cardinality. 

Then, we update, or normalize, movie $ i $ 's rating $ \\bar{r}_{i} $ to:

### (5)

$ \\bar{r}_{i}^{\\text {norm }}:=\\frac{\\sum_{j \\in \\mathcal{J}_{i}}\\left(r_{i j}+s_{j}\\right)}{n_{i}}=\\bar{r}_{i}+\\frac{\\sum_{j \\in \\mathcal{J}_{i}} s_{j}}{n_{i}} $.

Notice:

-  it weights all opinions equally
-   it does not require us to make assumptions about the rating and choice processes for each category of consumers.







placeholder


placeholder


placeholder


placeholder


placeholder


`,r$=`# Model Evaluation Framework

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

placeholder`,i$=`# Preliminaries

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

`,a$=`# 1. Examples & Glossary

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

$$
\\begin{array}{|l|l|}
\\hline
\\text{Abbreviation} & \\text{Description} \\\\
\\hline
\\text{ADMM} & \\text{alternating direction method of multipliers} \\\\
\\text{CSO} & \\text{contextual stochastic optimization} \\\\
\\text{CVaR} & \\text{conditional value at risk} \\\\
\\text{DRO} & \\text{distributionally robust optimization} \\\\
\\text{DNN} & \\text{deep neural network} \\\\
\\text{ERM} & \\text{empirical risk minimization} \\\\
\\text{FP} & \\text{fixed point} \\\\
\\text{ILO} & \\text{integrated learning and optimization} \\\\
\\text{IFT} & \\text{implicit function theorem} \\\\
\\text{kNN} & k\\text{-nearest neighbor} \\\\
\\text{KKT} & \\text{Karush-Kuhn-Tucker} \\\\
\\text{KL} & \\text{Kullback-Leibler} \\\\
\\text{LDR} & \\text{linear decision rule} \\\\
\\text{LP} & \\text{linear program} \\\\
\\text{MDP} & \\text{Markov decision process} \\\\
\\text{ML} & \\text{machine learning} \\\\
\\text{MLE} & \\text{maximum likelihood estimation} \\\\
\\text{MILP} & \\text{mixed-integer linear program} \\\\
\\text{NW} & \\text{Nadaraya-Watson} \\\\
\\text{RKHS} & \\text{reproducing kernel Hilbert space} \\\\
\\text{SAA} & \\text{sample average approximation} \\\\
\\text{SLO} & \\text{sequential learning and optimization} \\\\
\\text{QP} & \\text{quadratic program} \\\\
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

  **Weights based on random forest**

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

$ \\tilde{\\boldsymbol{z}}^{\\varepsilon}\\left(\\boldsymbol{x}, f_{\\boldsymbol{\\theta}}\\right) \\sim \\frac{\\exp \\left(-h\\left(\\boldsymbol{z}, f_{\\boldsymbol{\\theta}}(\\boldsymbol{x})\\right) / \\varepsilon\\right)}{\\int \\exp \\left(-h\\left(\\boldsymbol{z}^{\\prime}, f_{\\boldsymbol{\\theta}}(\\boldsymbol{x})\\right) / \\varepsilon\\right) d \\boldsymbol{z}^{\\prime}} $,

- $\\varepsilon  = 1$

This general form of perturbed optimizer:
- captures a varying amount of perturbation 
  - through $ \\varepsilon $, 
  - with $ \\tilde{\\boldsymbol{z}}^{\\varepsilon}\\left(\\boldsymbol{x}, f_{\\boldsymbol{\\theta}}\\right) $ converging in distribution to $ z^{*}\\left(\\boldsymbol{x}, f_{\\boldsymbol{\\theta}}\\right) $ as $ \\varepsilon $ goes to zero. 

They employ the negative log-likelihood to measure the divergence between:
- $ \\tilde{\\boldsymbol{z}}^{\\varepsilon}\\left(\\boldsymbol{x}, f_{\\boldsymbol{\\theta}}\\right) $
-  and the hindsight optimal solution $ z^{*}(\\boldsymbol{x}, \\boldsymbol{y}) $. 

Given the difficulties associated with calculating the partition function in the denominator of [(19)](#19), Mulamba et al. (2021) devise a surrogate loss function:
- based on noise-contrastive estimation,
-  which replaces likelihood with relative likelihood
-   when compared to a set of sampled suboptimal solutions.

This scheme is shown to improve the performance over SPO+ and DBB
- in terms of expected regret performance for linear combinatorial CSO.
- 
Based on the noise contrastive estimation approach of Mulamba et al. (2021), Mandi et al. (2022) note that:
- ILO for combinatorial problems can be viewed as a learning-to-rank problem. 

They propose surrogate loss functions,
- with closed-form expressions for gradients,
  -  that are used to train to rank feasible points in terms of performance on the downstream optimization problem. 

Unlike Mulamba et al. (2021), Kong et al. (2022) tackles the partition function challenge
- by employing a self-normalized importance sampler
  - that provides a discrete approximation. 

To avoid overfitting, the authors also introduce a regularization that :

penalizes the KL divergence between 
- the perturbed optimizer distribution 
- and a subjective posterior distribution over perturbed optimal hindsight actions $ \\mathbb{P}\\left(\\tilde{\\boldsymbol{z}}^{\\varepsilon}(\\boldsymbol{x}, \\boldsymbol{y}) \\mid \\boldsymbol{y}\\right) $ :

$ \\begin{array}{l}H_{\\text {Imitation }}\\left(\\tilde{\\boldsymbol{z}}^{\\varepsilon}\\left(\\cdot, f_{\\boldsymbol{\\theta}}\\right), \\hat{\\mathbb{P}}_{N}^{\\prime}\\right):= \\\\ \\\\ \\quad-\\mathbb{E}_{\\hat{\\mathbb{P}}_{N}}\\left[\\log \\left(\\mathbb{P}\\left(\\tilde{\\boldsymbol{z}}^{\\varepsilon}\\left(\\boldsymbol{x}, f_{\\boldsymbol{\\theta}}\\right)=z^{*}(\\boldsymbol{x}, \\boldsymbol{y})\\right) \\mid \\boldsymbol{x}, \\boldsymbol{y}\\right)\\right]+\\lambda \\mathbb{E}_{\\hat{\\mathbb{P}}_{N}}\\left[\\operatorname{KL}\\left(\\mathbb{P}\\left(\\tilde{\\boldsymbol{z}}^{\\varepsilon}(\\boldsymbol{x}, \\boldsymbol{y}) \\mid \\boldsymbol{y}\\right) \\| \\tilde{\\boldsymbol{z}}^{\\varepsilon}\\left(\\boldsymbol{x}, f_{\\boldsymbol{\\theta}}\\right) \\mid \\boldsymbol{x}, \\boldsymbol{y}\\right)\\right]\\end{array} $

The authors show that: 

their model outperforms ILO trained using SQP and cvxpylayers
- in terms of computational time

and gives lower task loss than sequential models trained using MLE and policy learning with neural networks.

### 5.5.2 Supervised learning 

Grigas et al. (2021) solve a CSO problem with a convex and nonnegative decision regularizer $ \\Omega(\\boldsymbol{z}) $ assuming that:

the uncertain parameter $ \\boldsymbol{y} $ has discrete support. 

Their model, called ICEO- $ \\lambda $, is thus trained by solving:

#### (20)

$ \\begin{array}{rll}\\text { (ICEO- } \\lambda) & \\min _{\\boldsymbol{\\theta}} & H\\left(z_{\\lambda}^{*}\\left(\\cdot, f_{\\boldsymbol{\\theta}}\\right), \\hat{\\mathbb{P}}_{N}\\right)+\\lambda \\mathbb{E}_{\\hat{\\mathbb{P}}_{N}}\\left[\\Omega\\left(z_{\\lambda}^{*}\\left(\\boldsymbol{x}, f_{\\boldsymbol{\\theta}}\\right)\\right)\\right] \\\\ & \\text { s.t. } & z_{\\lambda}^{*}\\left(\\boldsymbol{x}, f_{\\boldsymbol{\\theta}}\\right)=\\underset{\\boldsymbol{z}}{\\operatorname{argmin}} c\\left(\\boldsymbol{z}, f_{\\boldsymbol{\\theta}}(\\boldsymbol{x})\\right)+\\lambda \\Omega(\\boldsymbol{z}), \\forall \\boldsymbol{x} .\\end{array} $

The regularization:
- ensures uniqueness and Lipschitz property of $ z_{\\lambda}^{*}\\left(\\boldsymbol{x}, f_{\\boldsymbol{\\theta}}\\right) $ with respect to $ f_{\\theta} $ 
- leads to finite-sample guarantees. 

To circumvent the challenge associated with nondifferentiability of $ z_{\\lambda}^{*}\\left(\\boldsymbol{x}, f_{\\boldsymbol{\\theta}}\\right) $ with respect to $ \\boldsymbol{\\theta} $:
- they replace $ z_{\\lambda}^{*}\\left(\\boldsymbol{x}, f_{\\boldsymbol{\\theta}}\\right) $ with a smooth approximation $ \\tilde{z}_{\\lambda}\\left(\\boldsymbol{x}, f_{\\boldsymbol{\\theta}}\\right) $
  - that is learned using a random data set $ \\left(\\boldsymbol{p}_{i}, \\boldsymbol{z}_{i}\\right) $ generated by sampling $ \\boldsymbol{p}_{i} $ from the probability simplex over the discrete support 
- and then finding the optimal solution $ \\boldsymbol{z}_{i} $. 

They show asymptotic optimality and consistency of their solutions:

- when the hypothesis class is wellspecified. 

They compare their approach to other ILO pipelines and to the SLO approach that estimates the conditional distribution using cross-entropy.

Cristian et al. (2022) introduce the ProjectNet model:
- to solve uncertain constrained linear programs in an end-to-end framework
- by training an optimal policy network,
- which employs a differentiable approximation of the step of projection to feasibility.



Another approach, related to Berthet et al. (2020), that generalizes beyond LPs is given in Shah et al. (2022) that:
- constructs locally optimized decision losses (LODL)
- with supervised learning 
- to directly evaluate the performance of the predictors on the downstream optimization task. 

To learn a convex LODL for each data point:

this approach first generates labels in the neighborhood of label $ \\boldsymbol{y}_{i} $ in the training set, 
- e.g., by adding Gaussian noise, 
  
and then chooses the parameter that:
- minimizes the MSE between LODL and the downstream task loss. 

The LODL is used in place of the task-specific surrogate optimization layers 

and outperforms SLO on three resource allocation problems (linear top-1 item selection problem, web advertising, and portfolio optimization). 

The numerical experiments indicate that:
- handcrafted surrogate functions only perform better for the web advertising problem.

## 5.6 Applications 

Tian et al. (2023a) and Tian et al. (2023b) use SPOT and noise-contrastive estimation method (Mulamba et al. 2021), respectively, 

to solve the maritime transportation problem. 

A comprehensive tutorial on prescriptive analytics methods for logistics is given in Tian et al. (2023c). 

SPO has been used in solving last-mile delivery (Chu et al. 2023) and ship inspection problems (Yan et al. 2020, 2021, 2023). 

Demirović et al. (2019) and Demirović et al. (2020) minimize the same expected regret as SPO for specific applications related to ranking optimization and dynamic programming problems, respectively.


Perrault et al. (2020) solve a Stackelberg security game with the ILO framework by:
- learning the attack probability distribution over a discrete set of targets
- to maximize a surrogate for the defender's expected utility. 

They show that: their model results in higher expected utility for the defender on synthetic and human subjects data than the sequential models that learn the attack probability by minimizing the cross entropy loss. 

Wang et al. (2020) replace the large-scale optimization problem with a low dimensional surrogate by reparameterizing the feasible space of decisions. 

They observe significant performance improvements for non-convex problems compared to the strongly convex case.

Stratigakos et al. (2022) solve an integrated forecasting and optimization model
- for trading in renewable energy 

that: trains an ensemble of prescriptive trees
- by randomly splitting the feature space $ \\mathcal{X} $ based on the task-specific cost function. 

Sang et al. (2022) introduce an ILO framework for electricity price prediction for energy storage system arbitrage. 

They present a hybrid loss function 

- to measure prediction and decision errors 

and a hybrid stochastic gradient descent learning method. 

Sang et al. (2023) solve a voltage regulation problem using:
- a similar hybrid loss function, 

and backpropagation is done by 
- implicitly differentiating the optimality conditions of a secondorder cone program.

Liu et al. (2023b) use a DNN to : 
- model the routing behavior of users in a transportation network 
- and learn the parameters by minimizing the mismatch between:
  - the flow prescribed by the variational inequality
  - and the observed flow. 

The backward pass is obtained by:
- applying the IFT to the variational inequality. 

Wahdany et al. (2023) propose an integrated model for wind-power forecasting that:
- learns the parameters of a neural network to optimize the energy system costs under the system constraints.

Vohra et al. (2023) apply similar ideas to:
- develop end-to-end renewable energy generation forecasts, 

using multiple contextual sources such as satellite images and meteorological time series.

Butler and Kwon (2023b) solves the contextual mean-variance portfolio (MVP) optimization problem by:
- learning the parameters of the linear prediction model using the ILO framework. 

The covariance matrix is estimated using:
- the exponentially weighted moving average model.

They provide analytical solutions to :
- unconstrained and equality-constrained MVP optimization problems

and show that:
- they outperform SLO models based on ordinary least squares regression. 

These analytical solutions lead to lower variance when:

compared with the exact solutions of the corresponding inequality-constrained MVP optimization problem.

# 6 Active research directions

## Uncertainty in constraints. 

Most studies on contextual optimization assume that:

- there is no uncertainty in the constraints. 

If constraints are also uncertain, the SAA solutions that ignore the covariates information might not be feasible (Rahimian and Pagnoncelli 2022). 

Bertsimas and Kallus (2020) have highlighted the challenges in using ERM in a constrained CSO problem. 

Rahimian and Pagnoncelli (2022) solve a conditional chance-constrained program that :
- ensures with a high probability that the solution remains feasible under the conditional distribution 
- given the realized covariates. 

Although they do not focus on contextual optimization, interesting links can be found with the literature on constraint learning (Fajemisin et al. 2023) and inverse optimization (Chan et al. 2021).


## Risk aversion. 

There has been a growing interest in studying contextual optimization in the risk-averse setting.

Specifically, one can consider replacing the risk-neutral expectation from [(1)](#1) with a risk measure such as value-at-risk.

By doing so, one would expect, with a high probability, that:
- a decision-maker's loss is lower than a particular threshold. 

One can easily represent such a risk measure using an uncertainty set which represents the set of all possible outcomes that may occur in the future. 

The resulting uncertainty set should be carefully chosen:
- It should capture the most relevant scenarios to balance the trade-off between avoiding risks and obtaining returns. 

The recently proposed Conditional Robust Optimization (CRO) paradigm by Chenreddy et al. (2022) (see also Ohmori 2021, Sun et al. 2023b, Peršak and Anjos 2023) consists in learning a conditional set $ \\mathcal{U}(\\boldsymbol{x}) $ to solve the following problem:

### (21)

(CRO) $ \\min _{\\boldsymbol{z} \\in \\mathcal{Z}} \\max _{\\boldsymbol{y} \\in \\mathcal{U}(\\boldsymbol{x})} c(\\boldsymbol{z}, \\boldsymbol{y}) $

- where $ \\mathcal{U}(\\boldsymbol{x}) $ is an uncertainty set designed to contain with high probability the realization of $ \\boldsymbol{y} $ conditionally on observing $ x $.

Their approach solves the CRO problem sequentially where:
- $ \\mathcal{U}(\\boldsymbol{x}) $ is learned first
-  and is subsequently used to solve the downstream RO problem. 

A challenging problem is to learn the uncertainty set to minimize the downstream cost function.

## Toolboxes and benchmarking. 

Several toolboxes and packages have been proposed recently to train decision pipelines. 

Agrawal et al. (2019) provide the cvxpylayers library, which includes a subclass of convex optimization problems as differentiable layers in auto-differentiation libraries in PyTorch, TensorFlow, and JAX. 

Other libraries for differentiating non-linear optimization problems for end-to-end learning include:

higher (Grefenstette et al. 2019), JAXopt (Blondel et al. 2022), TorchOpt (Ren et al. 2022), and Theseus (Pineda et al. 2022). 

Tang and Khalil (2022) introduce an open-source software package called PyEPO (Pytorch-based End-to-End Predict-then-Optimize) implemented in Python for ILO of problems that are linear in uncertain parameters. They implement various existing methods, such as SPO+, DBB, and PFYL. 

They also include new benchmarks and comprehensive experiments highlighting the advantages of integrated learning. 

Dalle et al. (2022) provide similar tools for combinatorial problems in Julia.

Comparisons of existing approaches in fixed simulation settings are scarce, especially with realworld data. 

Buttler et al. (2022) provide a meta-analysis of selected methods on an unconstrained newsvendor problem on four data sets from the retail and food sectors. 

They highlight that there is no single method that clearly outperforms all the others on the four data sets. Mandi et al. (2023) carried out a comprehensive benchmarking of ILO frameworks tailored for expected value-based models on seven distinct problems using public datasets.

## Endogenous uncertainty. 

While there has been some progress in studying problems where the decision affects the uncertain parameters (Basciftci et al. 2021, Liu et al. 2022), the literature on decision-dependent uncertainty with covariates is sparse (Bertsimas and Kallus 2020, Bertsimas and Koduri 2022). 

An example could be:
- a facility location problem where demand changes once a facility is located in a region
- or a price-setting newsvendor problem whose demand depends on the price (Liu and Zhang 2023). 

In these problems, the causal relationship between demand and prices is unknown. 

These examples offer interesting parallels with the research on heterogeneous treatment effects
- such as Wager and Athey (2018), 
  - which introduce causal forests for estimating treatment effects and provide asymptotic consistency results. 
- Alley et al. (2023) study a price-setting problem and provide a new loss function to isolate the causal effects of price on demand from the conditional effects due to other covariates.

## Data privacy. 

Another issue is that:

- the data might come from multiple sources and contain sensitive private information, so it cannot be directly provided in its original form to the system operator. 

Differential privacy techniques (see, e.g., Abadi et al. 2016) can be used to obfuscate data but may impact predictive and prescriptive performance. 

Mieth et al. (2023) determine the data quality after obfuscation in an optimal power flow problem with a Wasserstein ambiguity set and use a DRO model to determine the data value for decision-making.

## Interpretability & explainability. 

Decision pipelines must be trusted to be implemented. 

This is evident from the European Union legislation "General Data Protection Regulation" that requires entities using automated systems to provide "meaningful information about the logic involved" in making decisions, known popularly as the "right to explanation" (Doshi-Velez and Kim 2017, Kaminski 2019). 

For instance, a citizen has the right to ask a bank for an explanation in the case of loan denial. 

While interpretability has received much attention in predictive ML applications (Rudin 2019), it remains largely unexplored in a contextual optimization, 
- i.e., prescriptive context. 

Interpretability requires transparent decision pipelines that are intelligible to users,
- e.g., built over simple models such as decision trees or rule lists. 

In contrast, explainability may be achieved with an additional algorithm on top of a black box or complex model. 

Feature importance has been analyzed in a prescriptive context by Serrano et al. (2022): 

They introduce an integrated approach that solves a bilevel program with an integer master problem optimizing (cross-)validation accuracy. 

To achieve explainability, Forel et al. (2023) adapt the concept of counterfactual explanations to explain a given data-driven decision through differences of context that make this decision optimal, or better suited than a given expert decision. 

Having identified these differences, it becomes possible to correct or complete the contextual information, if necessary, or otherwise to give explanative elements supporting different decisions. 

Another research direction could be to train tree-based models (such as optimal classification trees) to approximate the policy of a complex learning-and-optimization pipeline. 

This has interesting connections with model distillation,
- i.e., the idea in the ML community of approximating a large model by a smaller one,

and the work of Bertsimas and Stellato (2021), which learns the mapping from the problem parameters to optimal decisions through interpretable models.

## Fairness. Applying decisions based on contextual information can raise fairness issues when the context is made of protected attributes. 

This has been studied especially in pricing problems, to ensure that:
- different customers or groups of customers are proposed prices that don't differ significantly(Cohen et al. 2021, 2022).

## Finite sample guarantees for ILO. 

In Grigas et al. (2021), the authors derive finite-sample guarantees for ILO under the assumption of discrete support for the uncertain parameter. 

An open problem is to derive generalization bounds on the performance of ILO models for non-linear problems where the uncertain parameters have continuous support.

## Correcting for in-sample bias of data-driven optimization. 

When devising an optimal policy based on a finite number of samples, it is desired that low in-sample risk translates to low out-of-sample risk. 

However, decision rule optimization in [(4)](#4) or learning and optimization model in [(5)](#5) are known to produce optimistically biased estimates of the true expected cost of the prescribed policy (Ban and Rudin 2019, Costa and Iyengar 2023, Gupta et al. 2022). 

While one can replace this estimation with an unbiased one
- if data was reserved for this purpose,

this is usually considered a wasteful use of data
- given that it could instead have been used to obtain a better-performing policy. 

Recent research has identified ways of circumventing this issue by estimating and correcting for the in-sample bias in contextual (Gupta et al. 2022) and non-contextual (Ito et al. 2018, Gupta and Rusmevichientong 2021, Iyengar et al. 2023) stochastic optimization problems
- under the assumption that errors in the estimation of uncertain parameters are normally distributed. 

In addition to correcting the bias using Stein's lemma, Gupta and Rusmevichientong (2021) show that :

- certain "Bayes-inspired" and regularized policies achieve the same performance as optimal in-sample policy in small-data large-scale regimes.

A promising future research direction could be:

to build a general framework to learn the insample policies that :

- directly minimize the debiased objective functions. 

In this regard, one might find inspiration from the work of Gupta and Rusmevichientong (2021) addressing a similar issue in the non-contextual setting.

## Multi-agent decision-making. 

A multi-agent perspective becomes necessary in transportation and operations management problems, - where different agents have access to different sources of information (i.e. covariates). 

In this regard, some recent work by Heaton et al. (2022) identifies the Nash equilibrium of contextual games using implicit differentiation of variational inequalities and jacobian-free backpropagation.

## Costly label acquisition. 

In many applications, it is costly to gather observations of uncertain vectors and covariate pairs. 

For instance, in personalized pricing, surveys can be sent to customers to obtain information on the sensitivity of purchasing an item with respect to its price. 

However, creating, sending, and collecting the surveys may have a cost. 

Liu et al. (2023a) develop an active learning approach to obtain labels to solve the SPO problem, 
- while the more general case of developing active learning methods for non-linear contextual optimization is an interesting future direction. 

Besbes et al. (2023) provide theoretical results on the trade-off between the quality and quantity of data in a newsvendor problem, thus guiding decision-makers on how to invest in data acquisition strategies.

## Multi-stage contextual optimization. 

Most works on contextual optimization focus on single and two-stage problems. 

Ban et al. (2019) and Rios et al. (2015) use the residuals of the regression model to build multi-stage scenario trees and solve multi-stage CSO problems. 

Bertsimas et al. (2023) generalize the weighted SAA model for multi-stage problems. 

Qi et al. (2023) propose an end-to-end learning framework to solve a real-world multistage inventory replenishment problem.

## sequential decision-making with uncertainty. 

Inverse reinforcement learning (Ng et al. 2000) focuses on learning rewards that are consistent with observed trajectories. 

In the econometrics literature on dynamic discrete choice modeling the focus lies more broadly on estimating structural parameters of Markov decision processes (MDPs) (Rust 1988, Aguirregabiria and Mira 2010) including rewards, transition functions and discount factors. 

On both topics, estimates are typically obtained through MLE employing a soft version of the Bellman operator (e.g., Rust 1987, Ziebart et al. 2008).

In the context of model-based reinforcement learning, so-called decision awareness 
- (i.e. explicitly training components of a reinforcement learning system to help the agent improve the total amount of collected reward, Nikishin et al. 2022b) 
is receiving increasing attention (e.g., Joseph et al. 2013, Farahmand et al. 2017, Farahmand 2018, Grimm et al. 2020). 

For example, Nikishin et al. (2022a) introduce an approach that combines learning and planning to optimize expected returns for both tabular and non-tabular MDPs. 

They employ the soft version of the Bellman operator for efficient parameter learning using the IFT and show that:
- their state-action value function has a lower approximation error than that of MLE in tabular MDPs.

---

Another interesting research direction is to challenge the assumption that: 

the joint distribution of the covariate and uncertain parameters is stationary. 

Neghab et al. (2022) study a newsvendor model with a hidden Markov model underlying the distribution of the covariates and demand.

---

Finally, an area that requires attention is the deployment of models for real-world applications 

- by tackling computational hurdles associated with decision-aware learning in MDPs, 

- such as large state-action pairs and high-dimensional policy spaces (Wang et al. 2023). 

An example is a service call scheduling problem 
- that is formulated as a restless multi-armed bandit (RMAB) problem in Mate et al. (2022) 
- to improve maternal and child health in a non-profit organization. 

They model each beneficiary as an arm, apply a clustering method to learn the dynamics, 

and then use the Whittle Index policy to solve the RMAB. 

Wang et al. (2023) use decision-focused learning to solve RMAB,
- where the computational difficulty in differentiating the Whittle index policy of selecting the top-k arms, 
- is mitigated by making a soft-top-k selection of arms which is an optimal transport problem (Xie et al. 2020).



placeholder

placeholder

placeholder

placeholder

placeholder

`,o$=`# Crowdsourcing Exploration 

Suppose in market:

$A, B$: Two providers

$S = \\{A,B\\}$

$p_i,i\\in S$: provider's service quality 

$
\\begin{cases}
1, &w.p.\\quad p_i \\\\ 
0, &w.p.\\quad 1-p_i 
\\end{cases}
$: consumer receive reward

$p_i$ is known to designer and consumers
- a common prior belief
- $\\text{Beta}\\{s_1^i,f_1^i\\}, s_1^i,f_1^i\\in \\mathbb Z_+$

--- 

Progress:

1. at beginning of $t\\in T, T= \\{ 1, 2, \\dots\\}$: consumer visit the platform, observe information pretaining to experience of past consumers, choose provider 

2. Complete service, before the end of $t$, report positive or negative 

$x_t = \\{x_t^A,x_t^B\\}$: information state
- $ x_{t}^{i}=\\left\\{s_{t}^{i}, f_{t}^{i}\\right\\} $
- $s_t^i$: accumulated number of successful service outcomes for provider $i$ up to period $t$ 

$Beta(s_t^i,f_t^i)$:Bayesian posterior belief when system state is $x_t$

$ r\\left(x_{t}, i\\right)=\\frac{s_{t}^{i}}{s_{t}^{i}+f_{t}^{i}} $ :  the expected reward of the next customer to use provider $i$

---

History: not observable
- "message policy"

Designer's objective:
- maximize the expected sum of consumers’ discounted rewards over an infinite horizon
- applying a discount factor of $\\delta\\in [0,1)$

# 4. Analysis Preliminaries

## Equilibrium and Model Dynamics

Two main feature
- messaging policy
- choice strategy

$X\\in\\mathbb Z_+^4$: possible states of platform 
- s.t. $x_t\\in X, \\forall t\\in T$

$M$: feasible message in period $t$

$g(\\cdot)$: messaging policy, $X\\to M$

$\\mathcal G$: possible polices 

$c_t(\\cdot)$: period-$t$ consumer's choice strategy 
- $M\\to S$

$S$: service 

$\\mathcal C_t$: possible strategies for period-$t$ consumer 

$c(\\cdot) :=[c_1(\\cdot),c_2(\\cdot),\\dots]$

--- 

Controlled Markov chain: $g, c$
- $\\{(x_t,y_t);t\\in T\\}$: state-action pair 

$y_t = c_t(g(x_t))$

$r(x_t,i) = \\dfrac{s_t^i}{s_t^i+f_t^i}$: reward 

The state in period $t+1$:

$ x_{t+1}^{i}=x_{t}^{i} $ for $ i \\neq y_{t}, \\quad x_{t+1}^{i}=\\left\\{\\begin{array}{l}\\left\\{s_{t}^{i}+1, f_{t}^{i}\\right\\} \\text { w.p. } r\\left(x_{t}, i\\right) \\\\ \\left\\{s_{t}^{i}, f_{t}^{i}+1\\right\\} \\text { w.p. } 1-r\\left(x_{t}, i\\right)\\end{array} \\quad\\right. $ for $ i=y_{t} $.

--- 

Sequence:

2. Consumer observe policy, choose strategy $c_t$ to maximize reward 

period-$t$ to message $m$, $c_t^*(m)$ maximize:

$ E_{x_{t}}\\left[r\\left(x_{t}, c_{t}\\right) \\mid g\\left(x_{t}\\right)=m\\right] $
 

1. At beginning, designer commit policy that maximize dscounted rewards. $g^(x_t)$ maximizes:

$ E\\left[\\sum_{t \\in T} \\delta^{t-1} r\\left(x_{t}, y_{t}\\right)\\right] $, for $ y_{t}=c_{t}^{*}\\left(g\\left(x_{t}\\right)\\right) $

## Incentive-Compatible Recommendation Policies

### Definition 1 (ICRP: Incentive-Compatible Recommendation Policy) 

> A recommendation policy:
>
> #### (1)
>
> $ g\\left(x_{t}\\right)=\\left\\{\\begin{array}{ll}A & \\text { w.p. } \\quad q_{x_{t}} \\\\ B & \\text { w.p. } 1-q_{x_{t}}\\end{array}\\right. $
>
> - $q_{x_t}\\in[0,1],\\forall x_t\\in X$
> - It's incentive-compatible, if:
>   - $c_t^*(g(x_t))=g(x_t),\\forall x_t\\in X, t\\in T$


### Lemma 1

> For any arbitrary messaging policy $g$, there exists an $ICRP$ $g'$ which induces a $DOE$ equilibrium in the game between the designer and the consumers.

---

Examples:

## First Best 

The Gittins index for service $ i $ when in state $ z^{i} $ is denoted by $ G_{i}\\left(z^{i}\\right) $ and given by

#### (2)

$
G_{i}\\left(z^{i}\\right)=\\sup _{\\tau>0} \\frac{E\\left[\\sum_{t=0}^{\\tau-1} \\delta^{t} r\\left(x_{t}^{i}, i\\right) \\mid x_{0}^{i}=z^{i}\\right]}{E\\left[\\sum_{t=0}^{\\tau-1} \\delta^{t} \\mid x_{0}^{i}=z^{i}\\right]},
$

- $\\tau$: past-measurable stopping time 
- $r(x_t^i,i)$: instantaneous expected reward of provider $i$ in state $x_t^i$

# 5 Simple Case: Incumbent Provider $B$

Setting:

$A$ quality is ex ante unknown 

$B$ is known 

$Beta(s_1^A,f_1^A)$: $A$'s service 

$r(x_t,A)=\\dfrac{s_t^A}{s_t^A+f_t^A}$: reward on sercive $A$ in period $t$

$r_B = r(x_t,B) = p_B$

## 5.1 First Best 

$B$ has constant Gittins index:

$G_B := G_B(x_t) = r_B$

For $A$:

### Lemma 2

> System-optimal provider choices are characterized as follows:
>
> (i) If $ G_{A}\\left(x_{1}\\right) \\leq G_{B} $, then any experimentation with service $ A $ is suboptimal; 
> that is, it is systemoptimal to use service $ B $ in all periods $ t \\in T $.
>  
> (ii) If $ G_{A}\\left(x_{1}\\right)>G_{B} $, then it is system-optimal to experiment with service $ A $ at least once in period $ t=1 $. In any period $ t>1 $, there exists an integer $ s^{*}(t) $ such that if $ s_{t}^{A} \\geq s^{*}(t) $ it is system-optimal to continue experimentation with service $ A $ in period $ t $, while if $ s_{t}^{A}<s^{*}(t) $ it is system-optimal to choose service $ B $ in period $ t $ and forever after. The period-t threshold $ s^{*}(t) $ is uniquely defined by:
>
> $ s^{*}(t)=\\left\\{\\min s_{t}^{A}: s_{t}^{A}, f_{t}^{A} \\in \\mathbb{Z}_{+}^{2},\\left(s_{t}^{A}-s_{1}^{A}\\right)+\\left(f_{t}^{A}-f_{1}^{A}\\right)=t-1, G_{A}\\left(x_{t}\\right)>G_{B}\\right\\} $

## 5.2 The Two Extreme Modes of Information Provision 

- NI: No information 
- FI: Full information 

### Lemma 3

> Consumers' choice under FI:
>
> (i) If $ r\\left(x_{1}, A\\right) \\leq r_{B} $, then consumers choose service $ B $ in all periods $ t \\in T $.
> 
> (ii) If $ r\\left(x_{1}, A\\right)>r_{B} $, then the period-1 consumer chooses service $ A $. In any period $ t>1 $, there exists an integer $ \\bar{s}(t) $ such that if $ s_{t}^{A} \\geq \\bar{s}(t) $ the period- $ t $ consumer chooses service $ A $, while if $ s_{t}^{A}<\\bar{s}(t) $ service $ B $ is chosen in period $ t $ and forever after. The period-t threshold $ \\bar{s}(t) $ is uniquely defined by
> 
> $\\bar{s}(t)=\\left\\{\\min s_{t}^{A}: s_{t}^{A}, f_{t}^{A} \\in \\mathbb{Z}_{+}^{2},\\left(s_{t}^{A}-s_{1}^{A}\\right)+\\left(f_{t}^{A}-f_{1}^{A}\\right)=t-1, r\\left(x_{t}, A\\right)>r_{B}\\right\\}$

### Lemma 4

> The thresholds $ s^{*}(t) $ and $ \\bar{s}(t) $ satisfy $ s^{*}(t) \\leq \\bar{s}(t) $

### Example 1

> Assume $A$ is $Beta(1,1)$
> $B$ is $0.27$
> $\\delta = 0.9$
> After $2$ negative in $A$, everyone choose $B$

---

### Proposition 1

> Denote by $ \\pi^{N I} $ and $ \\pi^{F I} $ the platform's expected payoff under policies belonging to the NI and FI regimes, respectively. Then
>
> $\\pi^{N I} \\leq \\pi^{F I} \\leq \\pi^{*}$
>
> where $ \\pi^{*} $ denotes the platform's first-best expected payoff.

## 5.3 Strategic Information Provision

### Proposition 2

> For initial system state $ x_{1} $, let $ g^{*} $ be an optimal messaging policy and denote by $ \\pi\\left(g^{*}\\right) $ the platform's expected payoff under policy $ g^{*} $. Then $ \\pi\\left(g^{*}\\right)=\\pi^{*} $, unless both $ r\\left(x_{1}, A\\right) \\leq r_{B} $ and $ G_{A}\\left(x_{1}\\right)>G_{B} $ hold.

Table 1
$
\\begin{array}{cccc}
x_{4}^{A}=\\left(s_{4}^{A}, f_{4}^{A}\\right) & P\\left(x_{4}^{A}\\right) & \\text{consumer prefers} & \\text{designer prefers} \\\\
\\hline \\hline
(4,1) & 0.25 & \\mathrm{A}\\left(r_{A}=0.8\\right) & \\mathrm{A}\\left(G_{A}=0.87\\right) \\\\
(3,2) & 0.25 & \\mathrm{A}\\left(r_{A}=0.6\\right) & \\mathrm{A}\\left(G_{A}=0.71\\right) \\\\
(2,3) & 0.25 & \\mathrm{A}\\left(r_{A}=0.4\\right) & \\mathrm{A}\\left(G_{A}=0.52\\right) \\\\
(1,4) & 0.25 & \\mathrm{B}\\left(r_{A}=0.2\\right) & \\mathrm{A}\\left(G_{A}=0.30\\right)
\\end{array}
$

How to make $(1,4)$ customer choose $A$?

$
(4,1)\\} m_{1} \\\\ (3,2)\\} m_{2}
$

$ \\left.\\begin{array}{l} (2,3) \\\\ (1,4)\\end{array}\\right\\} m_{3} 
$

Then for $m_3$, $r = \\dfrac{1}{2}\\cdot 0.4 + \\dfrac{1}{2}\\cdot 0.2 =0.3 > 0.27$ 

## 5.4 Comments 

### Commitment vs. Cheap Talk 

When talk with period-$t$ customer:

- if recommend $B$:
  - $G_B>G_A$
  - $r_B>r_A$

### Information vs. Payments

Sometimes only information can't achieve **First Best **

# 6 General Case 

Both is ex ante unknown 

$r(x_1, A)\\ge r(x_1, B)$

### Proposition 3

> For initial system state $ x_{1} $, let $ g^{*} $ be an optimal messaging policy. Then $ \\pi\\left(g^{*}\\right)= $ $ \\pi^{*} $ if and only if there exists an ICRP which recommends service $ B $ whenever $ G_{B}\\left(x_{t}\\right)>G_{A}\\left(x_{t}\\right) $.

### Example 2

> $A$: $Beta(10,2)$
> $B$: $Beta(2,2)$
> $\\delta = 0.99$
>
> Notice: if $A$ fails in $t = 1 $ to $t=4$, consumer will still choose $A$, even if $B$ may be better

## 6.1 Optimal ICRPs

We need to choose best $q_{x_t}$ such that:


$ g\\left(x_{t}\\right)=\\left\\{\\begin{array}{ll}A & \\text { w.p. } \\quad q_{x_{t}} \\\\ B & \\text { w.p. } 1-q_{x_{t}}\\end{array}\\right. $

Then we need:

#### (4)

$ \\begin{array}{r}\\qquad \\max _{g\\left(x_{t}\\right)} E\\left[\\sum_{t \\in T} \\delta^{t-1} r\\left(x_{t}, g\\left(x_{t}\\right)\\right)\\right] \\\\ \\text { s.t. } E_{x_{t}}\\left[r\\left(x_{t}, A\\right) \\mid g\\left(x_{t}\\right)=A\\right] \\geq E_{x_{t}}\\left[r\\left(x_{t}, B\\right) \\mid g\\left(x_{t}\\right)=A\\right], \\quad \\forall t \\in T, \\\\ E_{x_{t}}\\left[r\\left(x_{t}, B\\right) \\mid g\\left(x_{t}\\right)=B\\right] \\geq E_{x_{t}}\\left[r\\left(x_{t}, A\\right) \\mid g\\left(x_{t}\\right)=B\\right], \\quad \\forall t \\in T,\\end{array} $

- every $t$ is IC 

We introduce some notation to deal with it:

$X_t$:  the set of states that are reachable from the initial state $x_1$ in period $t$

$ X=\\bigcup_{t \\in T} X_{t} $: total state space 

$\\mathcal P_{kiz}$: transition probability from $k$ through $i$ to $z$

$\\Delta_a$: Dirac delta function concentrated at $a$

### Proposition 4

> The optimal ICRP is given by:
>
> $ q_{k}^{*}=\\frac{\\rho(k, A)}{\\sum_{i \\in S} \\rho(k, i)} $
>
> where $\\rho(k,i)$ solves:
>
> $ \\begin{array}{rlr}\\max _{\\rho} & \\sum_{k \\in X} \\sum_{i \\in S} \\rho(k, i) r(k, i) & \\\\ \\text { s.t. } & \\sum_{k \\in X_{t}} \\rho(k, B)[r(k, B)-r(k, A)] \\geq 0, & \\forall t \\in T, \\\\ & \\sum_{k \\in X} \\sum_{i \\in S} \\rho(k, i)\\left(\\Delta_{z}(k)-\\delta \\mathcal{P}_{k i z}\\right)=\\Delta_{x_{1}}(z), & \\forall z \\in X, \\\\ & \\rho(k, i) \\geq 0, & \\forall k \\in X, i \\in S .\\end{array} $

Note:

- $\\rho$: the flow weight
  - constrain 1: make sure when recommend $B$, it's better 
  - constrain 2: make sure the flow is balance 
  - constrain 3: the flow is non-negative 

## 6.2 The Value of Information Obfuscation

$p_{x_t}$: the probability that state in period $t$ is $x_t$

First, we solve period-$t$ LP:

#### (6)

$ \\begin{array}{rlr}\\max _{\\rho} & \\sum_{k \\in X} \\sum_{i \\in S} \\rho(k, i) r(k, i) & \\\\ \\text { s.t. } & \\sum_{k \\in X_{t}} \\rho(k, B)[r(k, B)-r(k, A)] \\geq 0, & \\forall t \\in T, \\\\ & \\sum_{k \\in X} \\sum_{i \\in S} \\rho(k, i)\\left(\\Delta_{z}(k)-\\delta \\mathcal{P}_{k i z}\\right)=\\Delta_{x_{1}}(z), & \\forall z \\in X, \\\\ & \\rho(k, i) \\geq 0, & \\forall k \\in X, i \\in S .\\end{array} $

Then, store $q_{x_t}$
- designer’s recommendation policy for period $t$

Then, use $p_{x_t}$ to calculate $p_{x_{t+1}}$

Until: $t=K$ is reached 

# 7 Extensions 

## 7.1 Imperfect Knowledge of Consumers' Arrival Times 

### Proposition 5

> Let $g\\ g(^*)$  denote an ICRP (the optimal ICRP) when consumers have perfect knowledge of their arrival times. Then:
>
> (i) $ g $ remains an ICRP under any arbitrary belief held by consumers over their arrival times.
> 
> (ii) If $ v^{*} $ is an optimal ICRP under a specific set of consumer beliefs, we have $ \\pi\\left(v^{*}\\right) \\geq \\pi\\left(g^{*}\\right) $.

## 7.2 Combining Information with Monetary Subsidies

The designer can choose for each message $ m \\in M $ used in period $ t $ an accompanying subsidy plan $ \\left\\{\\kappa_{t}^{i}(m)\\right\\}_{i \\in S} $, where the subsidy $ \\kappa_{t}^{i}(m) \\geq 0 $ can be claimed by the consumer if she chooses to use provider $ i $.

### Definition 2 (ICRSP: Incentive-Compatible Recommendation-with-Subsidies Policy)

> A recommendation-with-subsidies policy is a messaging-with-subsidies policy defined as:
> 
> #### (7)
> 
> $ v\\left(x_{t}\\right)=\\left\\{\\begin{array}{ll}A,\\left\\{\\kappa_{t}^{i}(A)\\right\\}_{i \\in S} & \\text { w.p. } \\quad q_{x_{t}} \\\\ B,\\left\\{\\kappa_{t}^{i}(B)\\right\\}_{i \\in S} & \\text { w.p. } 1-q_{x_{t}}\\end{array}\\right. $
>
> where $ q_{x_{t}} \\in[0,1] $ for all $ x_{t} \\in X $, and $ \\kappa_{t}^{i}(j)=0 $ for all $ i, j \\in S, i \\neq j $. A recommendation-withsubsidies policy is said to be incentive-compatible if for all $ x_{t} \\in X $, each period- $ t $ consumer follows the recommendation she receives.

#### Proposition 6

> For any arbitrary messaging-with-subsidies policy $ v $, there exists an ICRSP $ v^{\\prime} $ which achieves a (weakly) higher expected platform payoff.

### Example 3

> $ A $ is $ \\operatorname{Beta}(5,5) $
> $ B $ has a known quality of $ r_{B}=0.53 $ 
> 
> the ex ante preferable provider for the consumers is $ B $. 
> 
> Consider the minimum total subsidies required to induce exploration of provider $ A $ in the first two periods under a FI policy versus under an ICRSP. 
> 
> In the first period, for the customer to choose provider $ A $, both policies must offer a minimum subsidy of $ \\kappa_{1}^{A}=p_{B}-r\\left(x_{1}, A\\right)=0.53-0.5=0.03 $ (i.e., assuming $ \\kappa_{1}^{B}=0 $ ). 
> 
> However, in the second-period: 
> 
> (i) Under FI, the state $ x_{2} $ is disclosed to the period- 2 consumer and a minimum subsidy $ \\kappa_{2}^{A}\\left(x_{2}\\right)= $ $ \\max \\left\\{p_{B}-r\\left(x_{2}, A\\right), 0\\right\\} $ must be offered in order for the consumer to choose provider $ A $. 
> 
> If the period- 1 trial was successful (occurs w.p. 0.5 ), then $ \\kappa_{2}^{A}=\\max \\{0.53-0.55,0\\}=0 $. If the period-1 trial was unsuccessful (occurs w.p. 0.5), then $ \\kappa_{2}^{A}=\\max \\{0.53-0.45,0\\}=0.08 $. 
> 
> Thus, the ex ante expected period- 2 subsidy is $ E\\left[\\kappa_{2}^{A}\\left(x_{2}\\right)\\right]=0.5 \\times 0.08=0.04 $. 
> 
> (ii) Under an ICRSP, the designer in period 2 recommends provider $ A $ irrespective of the period-1 outcome. 
> 
> For this recommendation to be incentive-compatible, it must be accompanied by a subsidy of $ \\kappa_{2}^{A}(A)=\\max \\left\\{p_{B}-E\\left[r\\left(x_{2}, A\\right)\\right], 0\\right\\}=\\max \\{0.53-(0.5 \\times 0.55+0.5 \\times 0.45), 0\\}=0.03 $. 
> 
> Thus, in the above example, the ICRSP achieves the same consumer actions in the first and second periods as a FI-with-subsidies policy, but at a $ 25 \\% $ lower subsidy cost.

`,l$=`
$x$: Covariates 

$y$: Walk-in 

$z$: time period opened 

---

The helper function:

$D\\left( (x,z), (x^i,z^i) \\right) = \\alpha_1 \\cdot d_{\\text{time}}(x,x^i) + \\alpha_2 \\cdot \\frac{|z - z^i|}{z_{\\text{max}}}$
- $(x,z)$: the "covariate, decision" pair 
- $(x^i, z^i)$: the $i$-th data 
- $d_{\\text{time}}: $ the distance between $x$

To simulate the distribution of $y$:

$\\hat{Y}(z|x) = \\sum_{i=1}^N w_i(x,z) \\cdot y^i$

Where:

$w_i(x,z) = \\frac{1}{D\\left( (x,z), (x^i,z^i) \\right) + \\epsilon} \\cdot \\mathbb{I}\\left[ (x^i,z^i) \\in \\text{TopK}(D) \\right]$

- $\\epsilon$: in case the denominator is $0$


---

Service speed:

$v(Y) = v_0 + \\gamma Y$

Wait cost:

$W(Y) = \\dfrac{Y}{v(Y)} = \\dfrac{Y}{v_0+\\gamma Y}$

Cost function:

$c(z,Y(z)) = C_1\\cdot W(\\hat{Y}(z|x) ) + C_2 z $
$c(z,Y(z)) = C_1\\cdot W(\\hat{Y}(z|x) ) + C_2 z $



Get distribution:

$\\argmin_{w_i}c(z,Y(z))$

Get decision:

$z^*(x) = \\argmin_{z\\in\\mathcal Z}\\mathbb E[c(z;Y(z))\\mid X=x]$

`,s$=`# 3 Predicting Delivery Time 

#### (1)

$DeliveryTime  _{i}=  Distance  _{i}+\\epsilon_{i}$


#### (2)

$DeliveryTime  _{i}=  Workload  _{i}+  Workload  _{i}^{1 / 2}+  Distance  _{i}+\\epsilon_{i}$

#### (3)

$DeliveryTime  _{i k}=\\eta_{k}+  Workload  _{i k}+  Workload  _{i}^{1 / 2}+  Distance  _{i k}+\\epsilon_{i k} $

# 4 Courier Assigned Location Mismatch (CALM) Metric

$M$: territories 

$d_{ij}$: distance 

$\\boldsymbol \\zeta\\in\\mathbb R_+^M$: current assigned location vector

$\\zeta_i$: number of customers in $i$

$\\boldsymbol \\xi\\in\\Delta^M$: prior assigned location vector 
- $\\Delta^M:=\\{\\boldsymbol \\xi\\in\\mathbb R_+^M:\\boldsymbol 1^\\top\\boldsymbol \\xi = 1\\}$

$\\xi_j$: proportion of past assignments to zone $j$

- $\\boldsymbol  \\xi=\\boldsymbol{\\zeta} / \\mathbf{1}^{\\top} \\boldsymbol{\\zeta} $: assigned location = past assignments

### Definition 1 (Creterion of Courier Assigned Location Mismatch Metric)

> $ \\rho(\\boldsymbol{\\zeta}, \\boldsymbol{\\xi}): \\mathbb{R}_{+}^{M} \\times \\Delta^{M} \\rightarrow \\mathbf R_+$
>
> It satisfies:
>
> (a) **Matched Assignment**
>
> For any $ \\boldsymbol{\\zeta} \\in \\mathbb{R}_{+}^{M}, \\boldsymbol{\\xi} \\in \\Delta^{M} $ : 
> 
> $ \\rho(\\boldsymbol{\\zeta}, \\boldsymbol{\\xi})=\\mathbf{0} $ if and only if $ \\boldsymbol{\\zeta}=\\boldsymbol{\\xi} \\cdot \\mathbf{1}^{\\top} \\boldsymbol{\\zeta} $
>
> (b) **Basic Location Mismatch**
>
> For any $ i, j \\in[M] $ : 
>
> $\\rho\\left(\\boldsymbol{e}_{i}, \\boldsymbol{e}_{j}\\right)=d_{i j}$
>
> (c) **Positive Homogeneous**
>
> For any $ \\boldsymbol{\\zeta} \\in \\mathbb{R}_{+}^{M}, \\boldsymbol{\\xi} \\in \\Delta^{M}, \\alpha>0 $ :
>
> $\\rho(\\alpha \\boldsymbol{\\zeta}, \\boldsymbol{\\xi})=\\alpha \\rho(\\boldsymbol{\\zeta}, \\boldsymbol{\\xi}) .$
>
> (d) **Sub-additive**
>
> For any $ \\boldsymbol{\\zeta}_{1}, \\boldsymbol{\\zeta}_{2} \\in \\mathbb{R}_{+}^{M}, \\boldsymbol{\\xi} \\in \\Delta^{M} $ : 
>
> $\\rho\\left(\\boldsymbol{\\zeta}_{1}+\\boldsymbol{\\zeta}_{2}, \\boldsymbol{\\xi}\\right) \\leq \\rho\\left(\\boldsymbol{\\zeta}_{1}, \\boldsymbol{\\xi}\\right)+\\rho\\left(\\boldsymbol{\\zeta}_{2}, \\boldsymbol{\\xi}\\right) $

### Definition 2(The $\\ell_p$-Based CALM Metric)

> For given $ p \\in[1, \\infty) $, we define the $ \\ell_{p} $-based CALM metric as the following function $ \\rho(\\boldsymbol{\\zeta}, \\boldsymbol{\\xi}): \\mathbb{R}_{+}^{M} \\times \\Delta^{M} \\rightarrow \\mathbb{R}_{+} $,
>
> #### (4)
>
> $\\begin{array}{rlr} \\rho(\\boldsymbol{\\zeta}, \\boldsymbol{\\xi})=\\min & \\left(\\sum_{i \\in[M] j} \\sum_{j \\in[M]}\\left(d_{i j} s_{i j}\\right)^{p}\\right)^{1 / p} & \\\\ \\text { s.t. } & \\sum_{i \\in[M]} s_{i j}=\\xi_{j} \\mathbf{1}^{\\top} \\boldsymbol{\\zeta} & \\forall j \\in[M] \\\\ & \\sum_{j \\in[M]} s_{i j}=\\zeta_{i} & \\forall i \\in[M] \\\\ & \\boldsymbol{s} \\geq \\mathbf{0} . & \\end{array}$

### Theorem 1

> The $ \\ell_{p} $-based CALM metric satisfies the properties of the assigned location mismatch metric for all $ p \\in[1, \\infty] $

# 5 The Service Oriented Routing (SOR) Model 


$ \\mathcal{G}=(\\{0\\} \\cup[N], \\mathcal{A}) $: a completed directed graph 
- node 0 represents the depot 
- $ \\mathcal{A}=\\{(i, j) \\mid i, j \\in\\{0\\} \\cup[N], i \\neq j\\} $ is the arc set. 

$ n $: Each customer node 

$ q_{n} $: demand  

$ c_{a} $: travel distance. each arc $ a \\in A $ has a travel distance . 

$ Q $: Capacity. Each courier has a capacity. 

For a subset $ \\mathcal{S} \\subseteq[N] $, 

$ \\mathcal{A}^{+}(\\mathcal{S})=\\{(i, j) \\in \\mathcal{A} \\mid i \\in \\mathcal{S}, j \\notin \\mathcal{S}\\} $ 

$ \\mathcal{A}^{-}(\\mathcal{S})=\\{(i, j) \\in \\mathcal{A} \\mid i \\notin \\mathcal{S}, j \\in \\mathcal{S}\\} $. 

$ \\boldsymbol{x}_{k}=\\left(x_{k 1}, \\cdots, x_{k N}\\right) \\in\\{0,1\\}^{N} $: the assignment of customer nodes to courier $ k $, 

- $ x_{k n}=1 $ if node $ n $ is served by courier $ k $ 
- $ x_{k n}=0 $ otherwise. 

For each $ k \\in[K] $: 

$ \\boldsymbol{y}_{k}=\\left(y_{k a}\\right)_{a \\in \\mathcal{A}} \\in\\{0,1\\}^{|\\mathcal{A}|} $, 
- $ y_{k a}=1 $ if courier $ k $ travels from along arc $a$
- $y_{ka} = 0$ otherwise 

The constraint for the routing problem is defined by:

$ \\mathcal{X}=\\left\\{\\begin{array}{l|ll}\\left(\\boldsymbol{x}_{k}, \\boldsymbol{y}_{k}\\right)_{k \\in[K]} & \\begin{array}{ll}\\sum_{k \\in[K]} x_{k n}=1 & \\forall n \\in[N] \\\\ \\sum_{\\left.a \\in \\mathcal{A}^{+}+\\{0\\}\\right)} y_{k a}=\\sum_{a \\in \\mathcal{A}^{-}(\\{0\\})} y_{k a}=1 & \\forall k \\in[K] \\\\ \\sum_{a \\in \\mathcal{A}^{+}(\\{n\\})} y_{k a}=\\sum_{a \\in \\mathcal{A}^{-}(\\{n\\})} y_{k a}=x_{k n} & \\forall n \\in[N], k \\in[K] \\\\ \\sum_{a \\in \\mathcal{A}^{+}(\\mathcal{S})} y_{k a} \\geq x_{k n} & \\forall n \\in \\mathcal{S}, \\mathcal{S} \\subseteq[N], k \\in[K] \\\\ \\sum_{n \\in[N]} q_{n} x_{k n} \\leq Q & \\forall k \\in[K] \\\\ \\boldsymbol{x}_{k} \\in\\{0,1\\}^{N}, \\boldsymbol{y}_{k} \\in\\{0,1\\}^{|\\mathcal{A}|} & \\forall k \\in[K]\\end{array}\\end{array}\\right\\} $

- all the nodes are served
- every courier is used 
- whether a node is served by a particular courier
- subtour elimination
-  capacity constraints of the couriers

$ \\mu\\left(\\boldsymbol{y}_{k}\\right) $ to denote the routing distance for courier $k$

$ \\mu\\left(\\boldsymbol{y}_{k}\\right)=\\sum_{a \\in \\mathcal{A}} c_{a} y_{k a} $

- $ c_{a} $ is the travel distance along arc $ a \\in \\mathcal{A} $.

---

$N$: customers

$\\boldsymbol x\\in\\{0,1\\}^N$: decision variable

- $n$ is selected if $x_n = 1$

$ \\mathbf{1}^{\\top} \\boldsymbol{x} \\in\\{0,1, \\cdots, L-1\\} $,: Total workload 
- $L-1$: maximum workload 

$ g\\left(\\boldsymbol{w}_{L}, \\boldsymbol{x}\\right):=\\sum_{\\ell \\in[L]} w_{\\ell} \\delta_{\\ell}(\\boldsymbol{x}) $: generic workload dependency function 

- $ \\boldsymbol{w}_{L}:=\\left(w_{1}, \\ldots, w_{L}\\right) $
- #### (7)
- $ \\delta_{\\ell}(\\boldsymbol{x}):=\\left\\{\\begin{array}{l}1 \\text { if } \\mathbf{1}^{\\top} \\boldsymbol{x}=\\ell-1 \\\\ 0 \\text { otherwise }\\end{array}, \\quad \\forall \\ell \\in[L]\\right. $

$ \\hat{\\beta}_{1}+\\hat{\\beta}_{2}\\left(\\mathbf{1}^{\\top} \\boldsymbol{x}\\right)+\\hat{\\beta}_{3}\\left(\\mathbf{1}^{\\top} \\boldsymbol{x}\\right)^{1 / 2} $: Workload function 

Then: 

$ \\hat{w}_{\\ell}=\\hat{\\beta}_{1}+\\hat{\\beta}_{2}(\\ell-1)+\\hat{\\beta}_{3}(\\ell-1)^{1 / 2} \\quad \\forall \\ell \\in[L] $.

$\\boldsymbol h_m \\in\\{0,1\\}^N,\\forall m\\in[M]$:
- $h_{mn}=1$ if customer $n$ is in zone $m$

- $\\boldsymbol  h_m^\\top\\boldsymbol  x_k$: number of customer nodes 

Then SOR model:

#### (8)

$ \\begin{array}{rlr}\\hat{Z}=\\min & \\sum_{k \\in[K]} \\mu\\left(\\boldsymbol{y}_{k}\\right) & \\\\ \\text { s.t. } & g\\left(\\hat{\\boldsymbol{w}}_{L}, \\boldsymbol{x}_{k}\\right)+\\hat{w}_{L+1} \\mu\\left(\\boldsymbol{y}_{k}\\right)+\\hat{w}_{L+2} \\lambda_{k} \\leq T_{k} & \\forall k \\in[K] \\\\ & \\rho\\left(\\boldsymbol{H} \\boldsymbol{x}_{k}, \\hat{\\boldsymbol{\\xi}}_{k}\\right) \\leq \\lambda_{k} & \\forall k \\in[K] \\\\ & \\left(\\boldsymbol{x}_{k}, \\boldsymbol{y}_{k}\\right)_{k \\in[K]} \\in \\mathcal{X}, \\boldsymbol{\\lambda} \\in \\mathbb{R}^{K}, & \\end{array} $

- $ T_{k} $ :the predetermined delivery time deadline for courier $ k$,
- $ \\hat{w}_{L+1}, \\hat{w}_{L+2} $: the corresponding estimated weights for travel distance and the CALM metric 
- $ \\hat{\\boldsymbol{\\xi}}_{k} $  the prior assigned location vector of courier $ k $ determined from historical data.

### Theorem 2

> The SOR model as presented in Problem (8) is equivalent to the following mixed integer linear optimization problem:
>
> #### (9)
>
> $ \\begin{array}{rlr}\\hat{Z}=\\min & \\sum_{k \\in[K]} \\sum_{a \\in \\mathcal{A}} c_{a} y_{k a} & \\\\ \\text { s.t. } & \\sum_{\\ell \\in[L]} \\hat{w}_{\\ell} z_{k \\ell}+\\hat{w}_{L+1} \\sum_{a \\in \\mathcal{A}} c_{a} y_{k a}+\\hat{w}_{L+2} \\lambda_{k} \\leq T_{k} & \\forall k \\in[K] \\\\ & \\rho_{k}\\left(\\boldsymbol{x}_{k}\\right) \\leq \\lambda_{k} & \\forall k \\in[K] \\\\ & \\mathbf{1}^{\\top} \\boldsymbol{x}_{k}=\\sum_{\\ell \\in[L]}(\\ell-1) z_{k \\ell} & \\forall k \\in[K] \\\\ & \\mathbf{1}^{\\top} \\boldsymbol{z}_{k}=1 & \\forall k \\in[K] \\\\ & \\boldsymbol{z}_{k} \\in\\{0,1\\}^{L} & \\forall k \\in[K] \\\\ & \\left(\\boldsymbol{x}_{k}, \\boldsymbol{y}_{k}\\right)_{k \\in[K]} \\in \\mathcal{X}, \\boldsymbol{\\lambda} \\in \\mathbb{R}^{K}, & \\end{array} $
>
> Where:
>
> #### (10)
>
> $ \\rho_{k}\\left(\\boldsymbol{x}_{k}\\right)=\\left\\{\\begin{array}{ll}\\min & \\sum_{i, j \\in[M]} d_{i j} s_{i j} \\\\ \\text { s.t. } & \\sum_{i \\in[M]} s_{i j}=\\hat{\\xi}_{k j} \\mathbf{1}^{\\top} \\boldsymbol{x}_{k} \\forall j \\in[M] \\\\ \\sum_{j \\in[M]} s_{i j}=\\boldsymbol{h}_{i}^{\\top} \\boldsymbol{x}_{k} \\quad \\forall i \\in[M] \\\\ \\boldsymbol{s} \\geq \\mathbf{0} \\\\ & =\\left\\{\\begin{array}{ll}\\max & \\sum_{i \\in[M]} u_{i} \\boldsymbol{h}_{i}^{\\top} \\boldsymbol{x}_{k}+\\sum_{j \\in[M]} v_{j} \\hat{\\xi}_{k j} \\mathbf{1}^{\\top} \\boldsymbol{x}_{k} \\\\ \\text { s.t. } & u_{i}+v_{j} \\leq d_{i j} \\\\ \\boldsymbol{u}, \\boldsymbol{v} \\in \\mathbb{R}^{M} .\\end{array} \\quad \\forall i, j \\in[M]\\right.\\end{array}\\right. $







placeholder

placeholder

placeholder

placeholder

placeholder

placeholder

placeholder





Idea 

- residual with z 
`,u$=`# 两个基本问题

- 资本定价问题
- 风险管理问题

---

注意到：

$P_0 \\equiv \\sum_{t=1}^{2n}\\dfrac{P_0\\cdot\\dfrac{i}{2}}{(1+\\dfrac{i}{2})^t} + \\dfrac{P_0}{(1+\\dfrac{i}{2})^{2n}}$

$$
\\begin{aligned}
&RHS\\\\ 
&=P_0 (\\dfrac{i}{2} ( \\sum_{t=1}^{2n}\\dfrac{1}{(1+\\dfrac{i}{2})^t}) + \\dfrac{1}{(1+\\dfrac{i}{2})^{2n}})\\\\ 
&=P_0(\\dfrac{i}{2}\\cdot \\dfrac{1}{1+\\dfrac{i}{2}}(\\dfrac{1-(1+\\dfrac{i}{2})^{-2n}}{1-(1+\\dfrac{i}{2})^{-1}}) + \\dfrac{1}{(1+\\dfrac{i}{2})^{2n}})\\\\ 
&= P_0 (1- (1+\\dfrac{i}{2})^{-2n} + (1+\\dfrac{i}{2})^{-2n})\\\\
&= P_0 
\\end{aligned}
$$

美国买家 瑞士卖家 外汇市场 期货市场

## 内容安排

投资收益分析：
- 风险管理问题 
  - 战略手段
    - 投资风险决策分析
    - 投资组合理论分析
  - 技术手段
    - 期货套期保值分析
    - 期权套期保值分析
    - 期权风险套利分析
- 资本定价问题
  - 战术手段
    - 资本资产定价模型
    - 套利定价模型
  - 技术手段
    - 期货定价模型
    - 期权定价模型
  
  假设：
  - 风险是金融产品的固有属性，不受市场影响
  - 金融市场为弱有效市场，本质是风险和收益的交易场所
  - 期望效用最大的决策准测，在风险和收益中权衡




placeholder


placeholder

placeholder

placeholder

placeholder

`,h$=`# Static 

## Normal form 

- Bi-matrix 
  - 2 players
  - Each has a finite number of strategies 

Example:

$
\\begin{array}{c|cc}
 & \\text{ (C)} & \\text{(D)} \\\\
\\hline
\\text{(C)} & (-1, -1) & (-3, 0) \\\\
\\text{(D)} & (0, -3) & (-2, -2) \\\\
\\end{array}
$

## Solving

Dominated strategy
- A strategy **Always** does better regardless of other players' choices

### Iterate

- find Strictly dominated strategy, eliminate it.

Example:


$
\\begin{array}{c|ccc}
 & \\text{ (Left)} & \\text{(Middle)} & \\text{(Right)} \\\\
\\hline
\\text{(Up)} & (1, 0) & (1, 2) & (0, 1) \\\\
\\text{(Down)} & (0, 3) & (0, 1) & (2, 0) \\\\
\\end{array}
$

Right is dominated by Middle:



$
\\begin{array}{c|cc}
 & \\text{ (Left)} & \\text{(Middle)} \\\\
\\hline
\\text{(Up)} & (1, 0) & (1, 2) \\\\
\\text{(Down)} & (0, 3) & (0, 1) \\\\
\\end{array}
$

Down is dominated by Up 



$
\\begin{array}{c|cc}
 & \\text{ (Left)} & \\text{(Middle)} \\\\
\\hline
\\text{(Up)} & (1, 0) & (1, 2) \\\\
\\end{array}
$

Left is dominated by Middle 

$
\\begin{array}{c|c}
 & \\text{(Middle)} \\\\
\\hline
\\text{(Up)} & (1, 2) \\\\
\\end{array}
$

## Nash Equilibrium

When in a combination:

- Every player **CANNOT** do better by choosing a different choice.

`,c$=`# Introduction

## What is a game?

- Decisions (single-person decision problem)
  - take the world as given, make best decision for yourself
- Games (multiple-person decison problem)
  - you best decision depends on what others do, and what they do may depend on what they think you do...

## Prisoner's Dilemma

- GPA race
- Grade inflation
- Arms race 

## What is Game Theory?

- A formal way to analyze **strategic interaction** among a group of rational players ( or agents ) who behave strategically

### Classifying Games

- Zero-sum / non-zero sum 
- One-shot / repeated 
- Fixed / manipulable rules 
- Enforceable / unenforceable cooperative agreements 
- Simultaneous / sequential moves 
- Complete / private information 

### Four main part

Static / Dynamic + Complete / private 

## Terminology 

- Players 
  - Participants in the game 
- Strategies 
  - A complete plan of actions 
    - Might be conditioned on history
- Payoffs
  - Some numerical representation of the objectives of each player 
    - Could take account fairness / reputation, etc.
    - Does not mean players are narrowly selfish
- Equilibrium
  - Players play strategies that are $mutual best response to each other$

### Standard Assumptions 

- Rationality
  - Players are perfect calculators and implementers of their desired strategy 
- Common knowledge of rules 
  - All players know the game being played 
  - All players know that all players know the game being played 
  - etc.

`,m$=`# 1 Solution 

## (1)

### Answer

$$
\\begin{array}{|l|l|l|l|l|l|l|l|l|}
\\hline 3 & 8 & 5 & 7 & 6 & 4 & 2 & 1 & 9 \\\\
\\hline 7 & 9 & 4 & 5 & 1 & 2 & 6 & 8 & 3 \\\\
\\hline 2 & 1 & 6 & 3 & 9 & 8 & 7 & 5 & 4 \\\\
\\hline 5 & 7 & 3 & 4 & 8 & 9 & 1 & 2 & 6 \\\\
\\hline 9 & 4 & 1 & 2 & 7 & 6 & 5 & 3 & 8 \\\\
\\hline 8 & 6 & 2 & 1 & 5 & 3 & 9 & 4 & 7 \\\\
\\hline 6 & 3 & 8 & 9 & 2 & 5 & 4 & 7 & 1 \\\\
\\hline 1 & 5 & 9 & 8 & 4 & 7 & 3 & 6 & 2 \\\\
\\hline 4 & 2 & 7 & 6 & 3 & 1 & 8 & 9 & 5 \\\\
\\hline
\\end{array}
$$

### Steps

$$
\\begin{array}{|l|l|l|l|l|l|l|l|l|}
\\hline & 8 & 5 & & & & 2 & 1 & \\\\
\\hline & 9 & 4 & & 1 & 2 & & & 3 \\\\
\\hline & & & 3 & & & 7 & & 4 \\\\
\\hline 5 & & 3 & 4 & & 9 & & & \\\\
\\hline & 4 & & 2 & & 6 & & 3 & \\\\
\\hline & & & 1 & & 3 & 9 & & 7 \\\\
\\hline 6 & & 8 & & & 5 & & & \\\\
\\hline 1 & & & 8 & 4 & & 3 & 6 & \\\\
\\hline & 2 & 7 & & & & 8 & 9 & \\\\
\\hline
\\end{array}
$$

We can rule out 3's sequentially in first, seventh, eighth room: 

$$
\\begin{array}{|l|l|l|l|l|l|l|l|l|}
\\hline 3 & 8 & 5 & & & & 2 & 1 & \\\\
\\hline & 9 & 4 & & 1 & 2 & & & 3 \\\\
\\hline & & & 3 & & & 7 & & 4 \\\\
\\hline 5 & & 3 & 4 & & 9 & & & \\\\
\\hline & 4 & & 2 & & 6 & & 3 & \\\\
\\hline & & & 1 & & 3 & 9 & & 7 \\\\
\\hline 6 & 3 & 8 & & & 5 & & & \\\\
\\hline 1 & & & 8 & 4 & & 3 & 6 & \\\\
\\hline & 2 & 7 & & 3 & & 8 & 9 & \\\\
\\hline
\\end{array}
$$

We can rule out the seventh room's numbers:


$$
\\begin{array}{|l|l|l|l|l|l|l|l|l|}
\\hline 3 & 8 & 5 & & & & 2 & 1 & \\\\
\\hline & 9 & 4 & & 1 & 2 & & & 3 \\\\
\\hline & & & 3 & & & 7 & & 4 \\\\
\\hline 5 & & 3 & 4 & & 9 & & & \\\\
\\hline & 4 & & 2 & & 6 & & 3 & \\\\
\\hline & & & 1 & & 3 & 9 & & 7 \\\\
\\hline 6 & 3 & 8 & & & 5 & & & \\\\
\\hline 1 & 5 & 9 & 8 & 4 & & 3 & 6 & \\\\
\\hline 4 & 2 & 7 & & 3 & & 8 & 9 & \\\\
\\hline
\\end{array}
$$

We can sequentially rule out the eighth, ninth room's numbers:

$$
\\begin{array}{|l|l|l|l|l|l|l|l|l|}
\\hline 3 & 8 & 5 & & & & 2 & 1 & \\\\
\\hline & 9 & 4 & & 1 & 2 & & & 3 \\\\
\\hline & & & 3 & & & 7 & & 4 \\\\
\\hline 5 & & 3 & 4 & & 9 & & & \\\\
\\hline & 4 & & 2 & & 6 & & 3 & \\\\
\\hline & & & 1 & & 3 & 9 & & 7 \\\\
\\hline 6 & 3 & 8 & 9 & 2 & 5 & 4 & 7 & 1 \\\\
\\hline 1 & 5 & 9 & 8 & 4 & 7 & 3 & 6 & 2 \\\\
\\hline 4 & 2 & 7 & 6 & 3 & 1 & 8 & 9 & 5 \\\\
\\hline
\\end{array}
$$

We can sequentially rule out the sixth, fifth, fourth room's numbers:

$$
\\begin{array}{|l|l|l|l|l|l|l|l|l|}
\\hline 3 & 8 & 5 & & & & 2 & 1 & \\\\
\\hline & 9 & 4 & & 1 & 2 & & & 3 \\\\
\\hline & & & 3 & & & 7 & & 4 \\\\
\\hline 5 & 7 & 3 & 4 & 8 & 9 & 1 & 2 & 6 \\\\
\\hline 9 & 4 & 1 & 2 & 7 & 6 & 5 & 3 & 8 \\\\
\\hline 8 & 6 & 2 & 1 & 5 & 3 & 9 & 4 & 7 \\\\
\\hline 6 & 3 & 8 & 9 & 2 & 5 & 4 & 7 & 1 \\\\
\\hline 1 & 5 & 9 & 8 & 4 & 7 & 3 & 6 & 2 \\\\
\\hline 4 & 2 & 7 & 6 & 3 & 1 & 8 & 9 & 5 \\\\
\\hline
\\end{array}
$$

We can sequentially rule out the first, second third room's numbers:

$$
\\begin{array}{|l|l|l|l|l|l|l|l|l|}
\\hline 3 & 8 & 5 & 7 & 6 & 4 & 2 & 1 & 9 \\\\
\\hline 7 & 9 & 4 & 5 & 1 & 2 & 6 & 8 & 3 \\\\
\\hline 2 & 1 & 6 & 3 & 9 & 8 & 7 & 5 & 4 \\\\
\\hline 5 & 7 & 3 & 4 & 8 & 9 & 1 & 2 & 6 \\\\
\\hline 9 & 4 & 1 & 2 & 7 & 6 & 5 & 3 & 8 \\\\
\\hline 8 & 6 & 2 & 1 & 5 & 3 & 9 & 4 & 7 \\\\
\\hline 6 & 3 & 8 & 9 & 2 & 5 & 4 & 7 & 1 \\\\
\\hline 1 & 5 & 9 & 8 & 4 & 7 & 3 & 6 & 2 \\\\
\\hline 4 & 2 & 7 & 6 & 3 & 1 & 8 & 9 & 5 \\\\
\\hline
\\end{array}
$$

## (2)

Answer: It's not a game.

Proof: Notice the definition of a "Game": Game is a **multiple-person decison problem**,
- however, sudoku is a single player game, there's no other person.

Moreover: In a game **you best decision depends on what others do**,
- however, your decision depends on the board, not others.

# 2 Solution 

## Solution

May 2

## Steps

We first establish a sheet:

$$
\\begin{array}{|l|l|l|l|l|l|l|}
\\hline & 2 & 5 & 10 & 15 & 28 & 30 \\\\
\\hline Jan & & & ? & ? & & ? \\\\
\\hline Mar & & & ? & & ? & \\\\
\\hline May & ? & & & ? & & \\\\
\\hline Jul & ? & ? & & & & ? \\\\
\\hline
\\end{array}
$$

Xiaoming knows Xiaohong doesn't know either:
- It can't be a Month where there's a day with only one month (e.g. March, with 28 being the day with only one month)
  - Otherwise, Xiaohong will know the month throught the day.

Thus, we eliminate March(Because of March 28) and July (Because of July 5)

Then we get:


$$
\\begin{array}{|l|l|l|l|l|l|l|}
\\hline & 2 & 5 & 10 & 15 & 28 & 30 \\\\
\\hline Jan & & & ? & ? & & ? \\\\
\\hline Mar & & & \\text{x} & & \\text{x} & \\\\
\\hline May & ? & & & ? & & \\\\
\\hline Jul & \\text{x} & \\text{x} & & & & \\text{x} \\\\
\\hline
\\end{array}
$$

Xiaohong now know the day:
- It must be a day with only one month (e.g. 2, with May), otherwise, she won't know it.
Thus, we eliminate 15(It has more than one month)

Then we get:


$$
\\begin{array}{|l|l|l|l|l|l|l|}
\\hline & 2 & 5 & 10 & 15 & 28 & 30 \\\\
\\hline Jan & & & ? & \\text{x} & & ? \\\\
\\hline Mar & & & \\text{x} & & \\text{x} & \\\\
\\hline May & ? & & & \\text{x} & & \\\\
\\hline Jul & \\text{x} & \\text{x} & & & & \\text{x} \\\\
\\hline
\\end{array}
$$

Xiaoming now know the day:
- It must be a month with only one day (the only answer May 2), otherwise, he won't know it.
Thus, we can get the final answer: **May 2**


`,d$=`# The Bright Side of Supplier Encroachment

# Note 

## Methodology

Backward induction:

- set some variables as given
- solve the optimize problem 
- replace the value back to eliminate the variables

## Intuitions

Why Everyone benefits from encroachment?

- $\\Pi_{M}^{E} - \\Pi_{M}^{N} = \\underbrace{\\frac{3(a-2c)^2}{24b}}_{\\text{Increase in wholesale profit}} + \\underbrace{\\frac{2c^2}{24b}}_{\\text{Supplement from retail profit}} > 0 $
- $CS^{E} - CS^{N} = \\underbrace{\\frac{(9a-2c)(3a-2c)}{288b}}_{\\text{Price reduction and increased choice}} > 0$
- $c \\in \\left(\\underbrace{\\frac{3a}{4\\sqrt{2}}}_{\\text{Lower bound: avoid excessive squeezing of the retailer}}, \\underbrace{\\frac{3a}{5}}_{\\text{Upper bound: ensure manufacturer's retail competitiveness}}\\right)$

---

Balancing Cost Disadvantages

When $c$ is moderate:

- The manufacturer can credibly compete with the retailer without fully displacing it
- The retailer benefits from a lower $w$, offsetting partial sales loss to encroachment.

--- 

Summary:

Supplier encroachment, when strategically executed, transforms a zero-sum game into a Pareto improvement:

- **Manufacturers** gain from optimized wholesale pricing and direct retail profits.

- **Retailers** benefit if wholesale price cuts offset competitive losses.

- **Consumers** enjoy lower prices and expanded choice.

# 2 The basic model 

In vertical supply chain
- manufacturer(supplier) sell wholesale product to retailer 
- retailer sell product to final consumer 
- manufacturer may sell product directly to consumers

Some additional retail competition are examined in 3.4

Consumer demand:

- $P = a-bQ$
  - $a, b > 0$
  - $P$: price
  - $Q$: quantity

manufacturer produce good at constant unit (marginal) cost: $0$

retailer selling cost: $0$

- manufacturer's unit cost of selling to consumer: $c\\in [0,a)$

- manufacturer unit price: $w$

- Linear pricing arrangement

---

Timing:

1. the manufacturer establishes its wholesale price ($w$). 
2. the retailer chooses its profit-maximizing retail output $ q_{R} $. 
3. the manufacturer determines the number of units $ \\left(q_{M}\\right) $ of the homogeneous product it will sell directly to consumers 

Backward induction is employed to identify the equilibrium of the game 

Key properties are presented in 3

# 3 Findings

## 3.1 The No-Encroachment Setting 

Benchmark:
- the manufacturer can only reach consumers through its retailer. 

the retailer chooses its output $ q_{R} $ to maximize its monopoly profit from retail sales, 
- taking the unit wholesale price $ w $ as given. 

---

The retailer's problem is:

#### (1)

$ \\underset{q_{R}}{\\operatorname{Maximize}}\\left[a-b q_{R}\\right] q_{R}-w q_{R} $

We get:

the retailer's output in the no-encroach-ment setting given unit wholesale price:

#### (2)

$ q_{R}^{N}(w)=\\frac{a-w}{2 b} $

Anticipating the retailer's response , the manufacturer chooses $ w $, solving:

#### (3)

$ \\underset{w}{\\operatorname{Maximize}} w q_{R}^{N}(w) \\Leftrightarrow \\underset{w}{\\operatorname{Maximize}} \\frac{w[a-w]}{2 b} $

Then the equilibrium:

#### (4)

$ w^{N}=\\frac{a}{2} \\quad $ and $ \\quad q_{R}^{N}=\\frac{a}{4 b} $

We get profit:

#### (5)

$ \\Pi_{R}^{N}=\\frac{a^{2}}{16 b} \\quad $ and $ \\quad \\Pi_{M}^{N}=\\frac{a^{2}}{8 b} $

Consumer surplus:

#### (6)

$ C S^{N}=\\int_{0}^{q_{R}^{N}} b\\left[q_{R}^{N}-q\\right] d q=\\frac{b}{2}\\left[q_{R}^{N}\\right]^{2}=\\frac{a^{2}}{32 b} $

## 3.2 The Encroachment Setting 

In this setting:

- manufacturer can sell the product directly to consumers 
  - after setting the wholesale price
  - and supplying the wholesale product to the (incumbent) retailer.

---

Given wholesale price $ w $ and retailer supply $ q_{R} $, the manufacturer chooses $ q_{M} $ to:

#### (7)

$ \\underset{q_{M}}{\\operatorname{Maximize}}\\left[a-b q_{R}-b q_{M}\\right] q_{M}-c q_{M}+w q_{R} $

We get:

#### (8)

$ q_{M}^{E}\\left(q_{R}\\right)=\\frac{a-c-b q_{R}}{2 b} $

Given $w$, retailer choose $q_R$:

#### (9)

$ \\underset{q_{R}}{\\operatorname{Maximize}}\\left[a-b q_{R}-b q_{M}^{E}\\left(q_{R}\\right)\\right] q_{R}-w q_{R} $

We get:

#### (10)

$ q_{R}^{E}(w)=\\frac{a+c-2 w}{2 b} $

Substitute [(8)](#8) and [(8)](#10) into [(7)](#7) :

#### (11)

$ w^{E}=\\frac{a}{2}-\\frac{c}{6}, \\quad q_{R}^{E}=\\frac{2 c}{3 b}, \\quad $ and $ \\quad q_{M}^{E}=\\frac{3 a-5 c}{6 b} $

Then we get:

#### (12)

$ \\begin{array}{c}\\Pi_{R}^{E}=\\frac{2 c^{2}}{9 b}, \\quad \\Pi_{M}^{E}=\\frac{3 a^{2}-6 a c+7 c^{2}}{12 b}, \\quad \\text { and } \\\\ C S^{E}=\\frac{b}{2}\\left[q_{R}^{N}+q_{M}^{N}\\right]^{2}=\\frac{[3 a-c]^{2}}{72 b} .\\end{array} $

## 3.3 No Encroachment vs Encroachment 

Proposition 1 confirm that:
- Encroachment benefits manufacturer and consumer 
- manufacturer will encroach $ \\left(q_{M}^{E}>0\\right) $ if and only if its retail cost disadvantage is not too pronounced.

### Proposition 1 

> The manufacturer encroaches if and only if $ c<3 a / 5 $. 
> 
> The manufacturer and consumers both benefit from encroachment in this case: 
> 
> $ \\Pi_{M}^{E}-\\Pi_{M}^{N}= $ $ \\left(3[a-2 c]^{2}+2 c^{2}\\right) /[24 b]>0 $ 
> and $ C S^{E}-C S^{N}=[9 a-2 c] \\times $ $ [3 a-2 c] /[288 b]>0 $.

Key point: encroachment by the manufacturer can alter its preferred wholesale price

Fact: The manufacturer sets a lower wholesale price in the encroachment setting

the retailer may benefit from manufacturer encroachment

### Proposition 2

> Encroachment that increases retailer profit arises if and only if $ c \\in(3 a /[4 \\sqrt{2}], 3 a / 5) $

We get: systematic reduction in the wholesale price secure Pareto gains

- manufacturer reduces the price of the wholesale product in order to increase the retailer's demand for the input and thereby expand the use of the efﬁcient sales channel
- the substantial wholesale price reduction outweighs the direct reduction in demand due to the manufacturer's retail sales, and the retailer beneﬁts from encroachment

---

If the wholesale price is a result of bargaining between the parties

Suppose:

Wholesale price is determined by generalized Nash bargaining,
- the weights $ \\beta \\in(0,1] $ and $ 1-\\beta $ reflect the bargaining strengths of the manufacturer and the retailer, respectively. 

Encroachment that produces Pareto gains will arise in this setting
- if and only if $ c \\in(3 a /[4 \\sqrt{2}], 3 a /[7-2 \\beta]) $. The interval is nonempty whenever the manufacturer's bargaining strength is sufficiently pronounced 
  - (i.e., $ \\beta> $ $ [7-4 \\sqrt{2}] / 2 \\approx 0.67) $. 

Intuitively, substantial manufacturer bargaining strength produces relatively high wholesale prices in the absence of encroachment, which permits the wholesale price reductions that generate Pareto gains under encroachment.

---

Increase in industry profit:

$ \\Pi_{R}^{E}+\\Pi_{M}^{E}-\\left[\\Pi_{R}^{N}+\\Pi_{M}^{N}\\right]=\\frac{9 a^{2}-72 a c+116 c^{2}}{144 b} $

We get Proposition 3:

### Proposition 3

> Encroachment that increases industry profit arises if and only if $ c \\in[0,3 a /[2[6+\\sqrt{7}]]) $ or $ c \\in $ $ (3 a / 2[6-\\sqrt{7}], 3 a / 5) $.

Increase profit when:

- retailer's downstream cost advantage is sufﬁciently pronounced
- or sufficiently limited 

Industry profit can increase by as much as $ 28 \\% $ when the retailer's downstream cost advantage is pronounced $ (c>0.45 a) $
- primary effect of encroachment is to reduce the wholesale price and thereby limit losses from double marginalization. 

Industry profit can increase by as much as $ 33 \\% $ when the retailer's cost advantage is limited $ (c<0.17 a) $,
- encroachment enables the manufacturer to profit from serving retail customers directly and thereby limit losses from double marginalization by using a direct channel.

---

Consider **simultaneous encroachment setting**:

#### (14)

$ w^{E}=\\frac{a}{2}-\\frac{c}{10}, \\quad q_{R}^{E}=\\frac{2 c}{5 b}, \\quad $ and $ \\quad q_{M}^{E}=\\frac{5 a-7 c}{10 b} $

And:

#### (15)

$ \\begin{aligned} \\Pi_{R}^{E}=\\frac{4 c^{2}}{25 b}, \\quad \\Pi_{M}^{E} & =\\frac{5 a^{2}-10 a c+9 c^{2}}{20 b}, \\quad \\text { and } \\\\ C S^{E} & =\\frac{[5 a-3 c]^{2}}{200 b} .\\end{aligned} $

We get:

### Proposition 4

> The retailer, the manufacturer, and consumers all are better off under sequential encroachment than under simultaneous encroachment

## 3.4 The Effect of Additional Retail Competition 

Suppose:

- retailer (denoted $ R $ ) now faces competition from $ n \\geq 0 $ incumbent rivals 
  - (where rival $ i $ is denoted $ R_{i}^{\\prime} $ ). 
- For simplicity, each rival is presumed to be a vertically integrated producer of a substitute good who operates with unit cost $c$. 
- The inverse demand function is: $ P=a-b\\left[q_{R}+\\sum_{i} q_{R_{i}^{\\prime}}+q_{M}\\right] $, 
  - $ q_{R}, q_{R_{i}^{\\prime}} $, and $ q_{M} $ denote the retail output of retailer $ R $, established rival $ R_{i}^{\\prime} $, and the manufacturer, respectively.

Using the method in [3.1](#31-the-no-encroachment-setting), when no encroachment:

#### (16)

$ \\begin{array}{c}w^{N}(n)=\\frac{a+n c}{2[1+n]}, \\quad q_{R}^{N}(n)=\\frac{a+n c}{2 b[2+n]}, \\quad \\text { and } \\\\ q_{R_{i}^{\\prime}}^{N}(n)=\\frac{a[3+2 n]-c[4+3 n]}{2 b\\left[2+3 n+n^{2}\\right]} .\\end{array} $

Using the method in [3.2](#32-the-encroachment-setting), When encroachment:

#### (17)

$ \\begin{array}{c}w^{E}(n)=\\frac{a[3+n]+c\\left[-1+5 n+2 n^{2}\\right]}{2\\left[3+6 n+2 n^{2}\\right]}, \\\\ q_{R}^{E}(n)=\\frac{n a+c\\left[2+3 n+2 n^{2}\\right]}{b\\left[3+6 n+2 n^{2}\\right]}, \\\\ q_{R_{i}^{\\prime}}^{E}(n)=\\frac{a[3+2 n]-c[5+4 n]}{b\\left[3+6 n+2 n^{2}\\right]}, \\quad \\text { and } \\\\ q_{M}^{E}(n)=\\frac{a[3+2 n]-c[5+4 n]}{2 b\\left[3+6 n+2 n^{2}\\right]} .\\end{array} $

When encroachment arise:
- the manufacturer and consumers gain for all $n$

Profit:

#### (18)

$ \\begin{array}{c}\\Pi_{R}^{N}(n)=\\frac{[a+n c]^{2}}{4 b[2+n]^{2}} \\text { and } \\\\ \\Pi_{R}^{E}(n)=\\frac{\\left[n a+c\\left(2+3 n+2 n^{2}\\right)\\right]^{2}}{2 b\\left[3+6 n+2 n^{2}\\right]^{2}}\\end{array} $

### Proposition 5

> For all $n\\ge 0$
>
> (i) Encroachment arises if and only if $ c<[3+2 n] $ a/ [ $ 5+4 n] $, in which case both the manufacturer and consumers benefit from encroachment; and
> 
> (ii) Encroachment that increases retailer profit arises if and only if
>
> $ \\begin{array}{c}c \\in\\left(f(n) a, \\frac{[3+2 n] a}{[5+4 n]}\\right), \\text { where } \\\\ f(n)=\\frac{9+36 n+40 n^{2}+16 n^{3}+2 n^{4}}{7 n+4 n^{2}-4 n^{3}-2 n^{4}+\\sqrt{2}[2+n]^{2}\\left[3+9 n+8 n^{2}+2 n^{3}\\right]} .\\end{array} $
>

#### Corollary

> The range of $ c $ values for which the retailer benefits from encroachment increases as $ n $ increases, i.e., $ [3+2 n] a /[5+4 n]-f(n) a $ is increasing in $ n $

- As $n$ increases, retailer R is weakened by the larger number of retail rivals it faces.

retailer R's demand becomes more sensitive to the established wholesale price as $ n $ increases.
- (Retailer R's demand decreases as $ w $ increases at the rate $ 2[1+n] /[2+n] $, which is an increasing function of n.) 

In response to this increased sensitivity, the manufacturer lowers the input price.

This benefit of encroachment accrues exclusively to retailer $ R $. 

In contrast, the burden of the revenue reduction caused by encroachment is shared by all incumbent retailers.

Consequently, the range of $ c / a $ realizations in which retailer $ R $ gains from encroachment increases as the number of incumbent retailers ( $ n $ ) increases. 

Importantly, the range in which encroachment secures retailer gains in the absence of incumbent retail competition (i.e., when $ n=0 $, as specified in Proposition 2 and as illustrated by the region between the vertical intercepts of the two curves in Figure 1): is smaller than the corresponding range in the presence of incumbent retail competition.

# 4 Extensions

## 4.1 Imperfect Substitutes

- $n=0$

- not perfect substitute 

---

Let the (inverse) demand curve for the retail product of firm $ i $ be $ P_{i}=a-q_{i}-k q_{j} $,
- $ P_{i} $ is the price of firm $ i^{\\prime} $ s product, 
- $ q_{i} $ and $ q_{j} $ are the retail outputs of firms $ i $ and $ j $, respectively (for $ i, j=R, M $ ). 
- The parameter $ k \\in(0,1) $ represents the degree of product substitution. 

The demands for the two retail products become independent as $ k $ approaches 0 . 

The retail products become perfect substitutes (as in [3](#3)) as $ k $ approaches 1 .

We get:

#### (19)

$ \\begin{array}{c}w^{E}(k)=\\frac{a}{2}-\\frac{k^{2}[a(1-k)+c k]}{2\\left[8-5 k^{2}\\right]} \\\\ q_{R}^{E}(k)=\\frac{2[a(1-k)+c k]}{8-5 k^{2}}, \\\\ q_{M}^{E}(k)=\\frac{[a-c]\\left[8-3 k^{2}\\right]-2 a k}{2\\left[8-5 k^{2}\\right]}\\end{array} $

We can see: when the manufacturer encroaches, consumers and the manufacturer both beneﬁt for all values of $k$

Profit:

#### (20)

$ \\begin{aligned} \\Pi_{R}^{E}(k) & =\\left[a-q_{R}^{E}(k)-k q_{M}^{E}(k)\\right] q_{R}^{E}(k)-w q_{R}^{E}(k) \\\\ & =\\frac{\\left[4-2 k^{2}\\right][a(1-k)+c k]^{2}}{\\left[8-5 k^{2}\\right]^{2}} .\\end{aligned} $

Compare [(20)](#20) and [(5)](#5) we get:

### Proposition 6

> With imperfect substitutes:
>
> (i) Encroachment arises if and only if $ c< $ ([8-2k$ \\left.\\left.3 k^{2}\\right] a\\right) /\\left[8-3 k^{2}\\right] $, in which case both the manufacturer and consumers benefit from encroachment; and
> 
> (ii) Encroachment that increases retailer profit arises if and only if:
>
> $ \\begin{array}{c}c \\in\\left(g_{1}(k) a, \\frac{\\left[8-2 k-3 k^{2}\\right] a}{\\left[8-3 k^{2}\\right]}\\right), \\text { where } \\\\ g_{1}(k)=\\frac{128-112 k-64 k^{2}+57 k^{3}}{4\\left[\\left(8-5 k^{2}\\right) \\sqrt{4-2 k^{2}}+8\\left(2-2 k-k^{2}+k^{3}\\right)\\right]}\\end{array} $
>
> 

- manufacturer always encroaches
- does not affect retailer's profit 

Retailer

- benefits from more homogeneity ($k$ increase) for lower wholesale price
- harmed by more intense competition 

## 4.2 Price Competition 

Suppose set price rather than quantities:

#### (21)

$ \\begin{array}{c}\\widetilde{w}^{E}(k)=\\frac{a}{2}-\\frac{k^{2}[a(1-k)+c k]}{2\\left[8-5 k^{2}+k^{4}\\right]}, \\\\ \\tilde{q}_{R}^{E}(k)=\\frac{\\left[2-k^{2}\\right][a(1-k)+c k]}{\\left[1-k^{2}\\right]\\left[8-5 k^{2}+k^{4}\\right]}, \\quad \\text { and } \\\\ \\tilde{q}_{M}^{E}(k)=\\frac{[a-c]\\left[8-7 k^{2}+k^{4}\\right]-a k\\left[6-5 k^{2}+k^{4}\\right]}{2\\left[1-k^{2}\\right]\\left[8-5 k^{2}+k^{4}\\right]}\\end{array} $

The retailer's profit:

#### (22)

$ \\begin{aligned} \\widetilde{\\Pi}_{R}^{E}(k) & =\\left[a-\\tilde{q}_{R}^{E}(k)-k \\tilde{q}_{M}^{E}(k)\\right] \\tilde{q}_{R}^{E}(k)-w \\tilde{q}_{R}^{E}(k) \\\\ & =\\frac{\\left[4-2 k^{2}\\right][a(1-k)+c k]^{2}}{\\left[1-k^{2}\\right]\\left[8-5 k^{2}+k^{4}\\right]^{2}} .\\end{aligned} $

We get:

### Proposition 7

> Under retail price competition:
>
> $ \\begin{aligned} \\widetilde{\\Pi}_{R}^{E}(k) & =\\left[a-\\tilde{q}_{R}^{E}(k)-k \\tilde{q}_{M}^{E}(k)\\right] \\tilde{q}_{R}^{E}(k)-w \\tilde{q}_{R}^{E}(k) \\\\ & =\\frac{\\left[4-2 k^{2}\\right][a(1-k)+c k]^{2}}{\\left[1-k^{2}\\right]\\left[8-5 k^{2}+k^{4}\\right]^{2}} .\\end{aligned} $
>
> (i) Encroachment arises if and only if $ c<[8-6 k- $ $ \\left.7 k^{2}+5 k^{3}+k^{4}-k^{5}\\right] a /\\left[8-7 k^{2}+k^{4}\\right] $, in which case both the manufacturer and consumers benefit from encroachment; and
> 
> (ii) Encroachment that increases retailer profit arises if and only if
> $\\begin{array}{l}c \\in\\left(g_{2}(k) a, \\frac{\\left[8-6 k-7 k^{2}+5 k^{3}+k^{4}-k^{5}\\right] a}{\\left[8-7 k^{2}+k^{4}\\right]}\\right), \\quad \\text { where } \\\\g_{2}(k)=\\frac{128-176 k-64 k^{2}+153 k^{3}-51 k^{5}+11 k^{7}-k^{9}}{4\\left[\\left(8-5 k^{2}+k^{4}\\right) \\sqrt{4-6 k^{2}+2 k^{4}}+8\\left(2-2 k-k^{2}+k^{3}\\right)\\right]} \\end{array}$

## 4.3 Nonlinear Costs 

Suppose manufacturer's cost:

$cq_M+c_2[q_M]^2$

We have:

$ \\begin{aligned} w^{E}\\left(c_{2}\\right)= & \\frac{a}{2}-\\frac{c+a c_{2}}{6+22 c_{2}+16 c_{2}^{2}}, \\quad q_{R}^{E}\\left(c_{2}\\right)=\\frac{2\\left[c+a c_{2}\\right]}{3+8 c_{2}} \\\\ & q_{M}^{E}\\left(c_{2}\\right)=\\frac{3 a\\left[1+2 c_{2}\\right]-c\\left[5+8 c_{2}\\right]}{6+22 c_{2}+16 c_{2}^{2}}\\end{aligned} $


Also, the retailer's profit:

$ \\Pi_{R}^{E}\\left(c_{2}\\right)=\\frac{2\\left[1+2 c_{2}\\right]\\left[c+a c_{2}\\right]^{2}}{\\left[1+c_{2}\\right]\\left[3+8 c_{2}\\right]^{2}} $

Then we have:

### Proposition 8

> In nonlinear costs:
>
> (i) Encroachment arises if and only if $ c<3\\left[1+2 c_{2}\\right] $ a/ [ $ \\left.5+8 c_{2}\\right] $, in which case both the manufacturer and consumers benefit from encroachment; and
>
> (ii) Encroachment that increases retailer profit arises if and only if
> 
> $\\begin{array}{c}c \\in\\left(h\\left(c_{2}\\right) a, \\frac{3\\left[1+2 c_{2}\\right] a}{\\left[5+8 c_{2}\\right]}\\right), \\text { where } \\\\h\\left(c_{2}\\right)=\\frac{9+57 c_{2}+80 c_{2}^{2}}{4\\left[8 c_{2}\\left(1+2 c_{2}\\right)+\\left(3+8 c_{2}\\right) \\sqrt{2+6 c_{2}+4 c_{2}^{2}}\\right]} \\end{array}$

`,f$=`# Useful Taylor Expression:

$\\ln(1+x) = \\sum_{n=1}^{\\infty}\\dfrac{(-1)^{n+1}x^n}{n}$`,p$=`# 科技创新创业

- 链：科创链
- 科技创新创业投资：科金链
- 科技创新创业政策：科政链
- 科技创新创业服务：科服链

## 路径

- 什么是科技创新创业？构成？过程？
- 案例：难在哪里？
- 创新创业动态风险特性
- 科技创新创业融资之道
- 科技创新创业组织制度育生态环境
- 总结 创新创业经济学特性
- 我们的未来 创新创业创造财富，分析，思考

## 一 数字经济时代科技创新创业

### 党中央的精神

十九大报告：

创新型国家 - 创新型大学

企业家精神 - 创新创业

创新创业

商事制度

多层次资本市场

### 经济增长 =技术进步 x 组织方式（人力 资本 资源 制度）










`,b$=`# Exercise 2.58

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





`,g$=`# Phase

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
`,y$=`# Exercise 2.67

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
`,v$=`# More density operator

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

)`,$$=`# Introduction to Supply chain management

## KYC - Know your Customer

FOXCONN

- Credits arbitrage
- Interest arbitrage
- Exchange rate arbitrage 
- Efficiency arbitrage 

Integration of Industry and Investment:
- Investment enhances Industry
- industry push investment 

---

Developing triangle
- Environment, resuorce, labor
- technology management brand
- capital, standard, creativity 

## KYW - Know your Want 

- 60s cost Mass product material flow manufacturing is king OM(operations management)
- 70s quality TPS/SIT 
- 80s flexibility FMS 
- 90s service mass customazation material / information flow 
- 00s speed vertical integration make capital flow cash is king 
- sustainbility ESG 

## KYCash - Know your Cash 

$\\sum_{n=0}^\\infty na_nx^{n-1} = \\dfrac{1}{x+2},x = 1:\\dfrac{1}{3}$`,x$=`# Why changes?

**Value disciplined** change 
- product 
- service 
- experience
- participation

# 3 Multiple

- multiple flows 
- multiple organizations 
- multiple functions 

# First Principle 

- Consider customer's needs 

# Know your Supply chain & Cash 


Observations:

- Facility 
- Efficiency 
- Levels 

## The Development chain 

R&D - Brand - Design - Procurement - Manufacturing - Distribution - Sales - Sales service 

A Parabola:

- global production network
- value added

---

- Development chain 
- supply chain

# Supply chain

Buy material - sell - pay - get money

- Buy material - sell: average sell / inventory period 
- sell - get money: average accounts receivable period 
- Buy material - pay: average accounts payable period 
- pay - get money: cash period

# Cash Conversion Cycle

> Cash Conversion Cycle = DIO + DSO – DPO

- DIO stands for Days Inventory Outstanding
- DSO stands for Days Sales Outstanding
- DPO stands for Days Payable Outstanding

`,w$=`# 科技创新创业

- 链：科创链
- 科技创新创业投资：科金链
- 科技创新创业政策：科政链
- 科技创新创业服务：科服链

## 路径

- 什么是科技创新创业？构成？过程？
- 案例：难在哪里？
- 创新创业动态风险特性
- 科技创新创业融资之道
- 科技创新创业组织制度育生态环境
- 总结 创新创业经济学特性
- 我们的未来 创新创业创造财富，分析，思考

## 一 数字经济时代科技创新创业

### 党中央的精神

十九大报告：

创新型国家 - 创新型大学

企业家精神 - 创新创业

创新创业

商事制度

多层次资本市场

### 经济增长 =技术进步 x 组织方式（人力 资本 资源 制度）










`,_$=`#

## 创新和创业的区别？

- 创新：企业存在。产品、工艺、市场、组织、原材料创新
- 创业：企业不存在，通过技术经济过程让企业能生存

`,k$=`# Probability

## Sample Space & Event

- Sample Space: $S$

- Event: $E$, a subset of $S$
  - Union: $E\\cup F$
    - $\\cup_{n=1}^\\infty E_n$
  - Intersection: $E\\cap F $ or $EF$
    - $\\cap_{n=1}^\\infty E_n$
  - Mutually Exclusive: $EF = \\oslash$
  - Complement: $E^c$


## Inclusion-Exclusion Principle

> $P(E\\cup F) = P(E) + P(F) - P(EF)$


## Conditional Probability

> $P(E|F) = \\dfrac{P(EF)}{P(F)}, P(F)>0$

## Independent Event

Events Independent if:

> $P(EF) = P(E)P(F)$
> - Or: $P(E|F) = P(E)$

For multiple events:

> $P(E_1\\dots E_r) = P(E_1)\\dots P(E_r), \\forall r\\le n$

## Bayes' Rule 

> $ P\\left(F_{j} \\mid E\\right)=\\dfrac{P\\left(F_{j} E\\right)}{P(E)}=\\dfrac{P\\left(E \\mid F_{j}\\right) P\\left(F_{j}\\right)}{\\sum_{i=1}^{n} P\\left(E \\mid F_{i}\\right) P\\left(F_{i}\\right)} $
> - $F_1,\\dots,F_n$ mutually exclusive 
> - Notice: $ \\cup_{i=1}^{n} F_{i}=S $
>
> Some corollaries:
>
> $ E=E \\cap S=E \\cap\\left(F \\cup F^{c}\\right)=E F \\cup E F^{c} $
>
> $ P(E)=P(E \\mid F) P(F)+P\\left(E \\mid F^{c}\\right) P\\left(F^{c}\\right) $
>
> $ P(D \\mid E)=\\dfrac{P(D E)}{P(E)}=\\dfrac{P(E \\mid D) P(D)}{P(E \\mid D) P(D)+P\\left(E \\mid D^{c}\\right) P\\left(D^{c}\\right)} $

# Random Variable (RV)

- $X$: Bounded Real Function definitioned on Sample Space 

- $F(\\cdot)$: Cumulative Distribution Function (CDF)
- $F(b) = P\\{X\\le b\\}, \\forall b $
  - $F(b)$ non-decreasing 
  - $ \\lim _{b \\rightarrow \\infty} F(b)=F(\\infty)=1 $
  - $ \\lim _{b \\rightarrow-\\infty} F(b)=F(-\\infty)=0 $
  - $ P(X<b)=\\lim _{h \\rightarrow 0^{+}} F(b-h) $

## Discrete Random Variable

- Probability Distribution Function (PDF)

$ p(a)=P\\{X=a\\} $

- Bernoulli 
- Binom 
- Geometry 
- Possion 

A special case:

When a Binom Distribution with small $p$ and large $n$

$$
\\begin{aligned}
&p(i)\\\\ 
=& \\binom{n}{i}p^i(1-p)^{n-i}\\\\ 
=& \\dfrac{n!}{i!(n-i)!}p^i(1-p)^{n-i}\\\\
\\overset{\\lambda=np}{=}&
\\dfrac{n(n-1)\\dots(n-i+1)}{i!}\\cdot\\dfrac{\\lambda^i}{n^i}\\cdot\\dfrac{(1-\\frac{\\lambda}{n})^n}{(1-\\frac{\\lambda}{n})^i}\\\\ 
=&1\\cdot \\dfrac{\\lambda^i}{n^i}\\cdot\\dfrac{e^{-\\lambda}}{1}\\\\
=&e^{-\\lambda}\\dfrac{\\lambda^i}{i!}
\\end{aligned}
$$

## Continuous Random Variable

pdf:

$P\\{X\\in B\\} = \\int_B f(x)dx, \\forall B$

An important approximation:
- $\\int_{a - \\epsilon/2}^{a +\\epsilon/2} f(x)dx \\approx \\epsilon f(a)$

cdf:

$F(a) = P\\{X\\in(-\\infty, a]\\} = \\int_{-\\infty}^a f(x)dx$

- Uniform
- Exponential
- Gamma
- Normal

## Expectation

Discrete:

- $E(X) = \\sum_{x:p(x)>0}xp(x)$

Continuous:

- $E(x) = \\int_{-\\infty}^{\\infty}xf(x)dx$

$$
\\begin{array}{|l|l|}
\\hline Bernoulli & p\\\\ 
\\hline Binom & np\\\\ 
\\hline Geometry & 1/p \\\\ 
\\hline Possion & \\lambda \\\\ 
\\hline Uniform & (\\alpha + \\beta) / 2 \\\\ 
\\hline Exponential & \\alpha / \\lambda \\\\ 
\\hline Normal & \\mu \\\\ 
\\hline
\\end{array}
$$

Corollaries:

- For Discrete RV:
  - $E[g(x)] = \\sum_{x:p(x)>0} g(x)p(x) $
- For Continuous RV:
  - $E[g(x)] = \\int_{-\\infty}^\\infty g(x)f(x)dx$

---

Moment:

- $E(X^n)$

Variation:

- $Var(X) = E[(X-E[X])^2] = E(X^2)-(EX)^2$

## Joint Distributino 

CDF:

$F(a,b) = P\\{X\\le a, Y\\le b\\}, -\\infty < a,b < \\infty $

PDF:

$p(x,y) = P\\{X=x, Y=y\\}$

Expectation:

- $E[g(X,Y)] = \\sum_x\\sum_y g(x,y)p(x,y)$
- $E[g(X,Y)] = \\int_{-\\infty}^\\infty\\int_{-\\infty}^\\infty g(x,y)f(x,y)dxdy$

### Independent

They are Independent if: $F(a,b) = F_X(a)F_Y(b),\\forall a,b$

- Discrete: $p(x,y) = p_X(x)p_Y(y)$
- Continuous: $f(x,y) = f_X(x)f_Y(y)$

If Independent:
- $E[g(X)h(Y)] - E[g(X)]E[h(Y)]$

### Covariation

$Cov(X,Y) = E[(X-E[X])(Y-E[Y])] = E[XY] - E[X]E[Y]$

- $Cov(X,X) = Var(X)$
- $Cov(X,Y) = Cov(Y,X)$
- $Cov(cX,Y) = cCov(X,Y)$
- $Cov(\\sum_{i=1}^n X_i,\\sum_{j=1}^m Y_j) = \\sum_{i=1}^n\\sum_{j=1}^m Cov(X_i, Y_j)$
- $Var(\\sum_{i=1}^n X_i) = \\sum_{i=1}^n Var(X_i) + 2\\sum_{i=1}^n \\sum_{j<i} Cov(X_i, X_j)$
- If $X,Y$ Independent, $Cov(X,Y) = =0$

---

Sample Average:

for i.i.d. RV:

$\\bar{X} = \\sum_{i=1}^n X_i / n$

- $E[\\bar{X}]= \\mu$
- $Var(\\bar{X}) = \\sigma^2/n$
- $Cov(\\bar{X},X_i-\\bar{X})=0$

---

Convolution:

Discrete:

- $P_{X+Y }(a) = \\sum_{y=-\\infty }^{+\\infty }P_X(a-y)P_Y(y)$

Continuous
- $F_{X+Y }(a) = \\int_{-\\infty }^\\infty F_X(a-y) g(y)dy $

---

Multivariate Transformation

Given $ n $ random variables $ X_{1}, \\ldots, X_{n} $ with a known joint density function, we aim to compute the joint density function of the transformed variables $ Y_{1}, \\ldots, Y_{n} $, where:
- $ Y_{1}=g_{1}\\left(X_{1}, \\ldots, X_{n}\\right), \\ldots, Y_{n}=g_{n}\\left(X_{1}, \\ldots, X_{n}\\right) $,
- Each $ g_{i} $ has continuous partial derivatives,
- The Jacobian determinant $ J\\left(x_{1}, \\ldots, x_{n}\\right) $ is non-zero at all points $ \\left(x_{1}, \\ldots, x_{n}\\right) $,
- The system of equations $ y_{1}=g_{1}\\left(x_{1}, \\ldots, x_{n}\\right), \\ldots, y_{n}=g_{n}\\left(x_{1}, \\ldots, x_{n}\\right) $ has a unique solution $ x_{i}=h_{i}\\left(y_{1}, \\ldots, y_{n}\\right) $.

Jacobian Determinant:
$
J\\left(x_{1}, \\ldots, x_{n}\\right)=\\left|\\begin{array}{ccc}
\\frac{\\partial g_{1}}{\\partial x_{1}} & \\cdots & \\frac{\\partial g_{1}}{\\partial x_{n}} \\\\
\\vdots & \\ddots & \\vdots \\\\
\\frac{\\partial g_{n}}{\\partial x_{1}} & \\cdots & \\frac{\\partial g_{n}}{\\partial x_{n}}
\\end{array}\\right|
$

Joint Density Function of $ Y_{1}, \\ldots, Y_{n} $
$
f_{Y_{1}, \\ldots, Y_{n}}\\left(y_{1}, \\ldots, y_{n}\\right)=f_{X_{1}, \\ldots, X_{n}}\\left(h_{1}\\left(y_{1}, \\ldots, y_{n}\\right), \\ldots, h_{n}\\left(y_{1}, \\ldots, y_{n}\\right)\\right) \\cdot\\left|J\\left(h_{1}, \\ldots, h_{n}\\right)\\right|^{-1}
$
where $ |J|^{-1} $ is the absolute value of the reciprocal of the Jacobian determinant evaluated at $ x_{i}= $ $ h_{i}\\left(y_{1}, \\ldots, y_{n}\\right) $.

---

## Moment Generating Function

Moment Generating Function (MGF) of a Random Variable $ X $ :
$
\\phi(t)=E\\left(e^{t X}\\right)=\\left\\{\\begin{array}{ll}
\\sum_{x} e^{t x} p(x) & \\text { (for discrete random variables) } \\\\
\\int_{-\\infty}^{\\infty} e^{t x} f(x) d x & \\text { (for continuous random variables) }
\\end{array}\\right.
$

1. Calculating Moments:

$
E\\left[X^{n}\\right]=\\phi^{(n)}(0)
$

- $ \\phi^{(n)}(t) $ is the $ n $-th derivative of $ \\phi(t) $.

2. Sum of Independent Random Variables:

> The MGF of the sum of independent random variables is the product of their individual MGFs. 

That is, if $ X_{1}, X_{2}, \\ldots, X_{n} $ are independent, then:

$
\\phi_{X_{1}+X_{2}+\\cdots+X_{n}}(t)=\\phi_{X_{1}}(t) \\cdot \\phi_{X_{2}}(t) \\cdots \\phi_{X_{n}}(t)
$
3. Uniqueness of Distribution:

The moment generating function uniquely determines the probability distribution of a random variable (if it exists).

4. Connection to Laplace Transform:

For $ t \\geq 0 $ and a non-negative random variable $ X $, the function $ g(t)=\\phi(-t)\\in [0,1] $. This is related to the Laplace transform of the distribution of $ X $.

5. Joint MGF:
- $\\phi (t_1,\\dots, t_n) = E[e^{(t_1X_1+\\cdots+t_nX_n)}]$

--- 

**Binomial MGF**

$ M_{X}(t)=\\sum_{k=0}^{n} e^{t k}\\binom{n}{k} p^{k}(1-p)^{n-k}=\\sum_{k=0}^{n}\\binom{n}{k}\\left(p e^{t}\\right)^{k}(1-p)^{n-k} $

We get:

$ M_{X}(t)=\\left(p e^{t}+(1-p)\\right)^{n} $

**Poisson MGF**

$ M_{X}(t)=\\sum_{k=0}^{\\infty} e^{t k} \\frac{\\lambda^{k} e^{-\\lambda}}{k!}=e^{-\\lambda} \\sum_{k=0}^{\\infty} \\frac{\\left(\\lambda e^{t}\\right)^{k}}{k!} $

Then: 

$ M_{X}(t)=e^{-\\lambda} \\cdot e^{\\lambda e^{t}}=e^{\\lambda\\left(e^{t}-1\\right)} $

**Normal MGF**

$ M_{X}(t)=\\int_{-\\infty}^{\\infty} e^{t x} \\cdot \\frac{1}{\\sqrt{2 \\pi \\sigma^{2}}} e^{-\\frac{(x-\\mu)^{2}}{2 \\sigma^{2}}} d x $

Look at the power:

$ t x-\\frac{(x-\\mu)^{2}}{2 \\sigma^{2}}=-\\frac{x^{2}-2\\left(\\mu+\\sigma^{2} t\\right) x+\\mu^{2}}{2 \\sigma^{2}} $

Then: 

$ M_{X}(t)=e^{\\mu t+\\frac{\\sigma^{2} t^{2}}{2}} $

**Exponential MGF**

$ M_{X}(t)=\\int_{0}^{\\infty} e^{t x} \\cdot \\lambda e^{-\\lambda x} d x=\\lambda \\int_{0}^{\\infty} e^{-(\\lambda-t) x} d x $

Then: 

$ M_{X}(t)=\\lambda \\cdot \\frac{1}{\\lambda-t}=\\frac{\\lambda}{\\lambda-t} \\quad(t<\\lambda) $

**Gamma MGF**

$ M_{X}(t)=\\int_{0}^{\\infty} e^{t x} \\cdot \\frac{\\lambda^{\\alpha}}{\\Gamma(\\alpha)} x^{\\alpha-1} e^{-\\lambda x} d x=\\frac{\\lambda^{\\alpha}}{(\\lambda-t)^{\\alpha}} \\cdot \\frac{\\Gamma(\\alpha)}{\\Gamma(\\alpha)} $

Then:

$ M_{X}(t)=\\left(\\frac{\\lambda}{\\lambda-t}\\right)^{\\alpha} $


## Theorem

### 1. Markov's Inequality (Proposition 2.6)

Statement:
Let $ X $ be a non-negative random variable. For any $ a>0 $ :
$
P\\{X \\geq a\\} \\leq \\frac{E\\lfloor X]}{a}
$

Proof:
Define the indicator function:
$
I_{\\{X \\geq a\\}}=\\left\\{\\begin{array}{ll}
1 & \\text { if } X \\geq a \\\\
0 & \\text { otherwise }
\\end{array}\\right.
$

Since $ X \\geq a \\cdot I_{\\{X \\geq a\\}} $, taking expectations on both sides:
$
E[X] \\geq E\\left[a \\cdot I_{\\{X \\geq a\\}}\\right]=a \\cdot P\\{X \\geq a\\}
$

Rearranging gives:
$
P\\{X \\geq a\\} \\leq \\frac{E[X]}{a}
$

### 2. Chebyshev's Inequality (Proposition 2.7)

Statement:
Let $ X $ be a random variable with mean $ \\mu $ and variance $ \\sigma^{2} $. For any $ k>0 $ :
$
P\\{|X-\\mu| \\geq k\\} \\leq \\frac{\\sigma^{2}}{k^{2}}
$

Proof:
Apply Markov's Inequality to the non-negative random variable $ (X-\\mu)^{2} $ :
$
P\\{|X-\\mu| \\geq k\\}=P\\left\\{(X-\\mu)^{2} \\geq k^{2}\\right\\} \\leq \\frac{E\\left[(X-\\mu)^{2}\\right]}{k^{2}}=\\frac{\\sigma^{2}}{k^{2}}
$

### 3. Strong Law of Large Numbers (Theorem 2.1)

Statement:
Let $ X_{1}, X_{2}, \\ldots $ be independent and identically distributed (i.i.d.) random variables with mean $ \\mu $. Then, as $ n \\rightarrow \\infty $ :
$
\\frac{X_{1}+X_{2}+\\cdots+X_{n}}{n} \\rightarrow \\mu \\quad \\text { with probability } 1 .
$

Proof Sketch (Simplified):
The full proof requires advanced tools (e.g., Borel-Cantelli lemma or martingale convergence). A key idea is to show that the sample mean converges almost surely by bounding the variance of partial sums. For i.i.d. variables:
1. Convergence in $ L^{2} $ :
$
\\operatorname{Var}\\left(\\frac{X_{1}+\\cdots+X_{n}}{n}\\right)=\\frac{\\sigma^{2}}{n} \\rightarrow 0 \\quad \\text { as } n \\rightarrow \\infty .
$
2. Borel-Cantelli Lemma:

For $ \\epsilon>0 $, use Chebyshev's inequality to show:
$
\\sum_{n=1}^{\\infty} P\\left(\\left|\\frac{S_{n}}{n}-\\mu\\right| \\geq \\epsilon\\right)<\\infty
$
implying almost sure convergence.

### 4. Central Limit Theorem (Theorem 2.2)

Statement:
Let $ X_{1}, X_{2}, \\ldots $ be i.i.d. random variables with mean $ \\mu $ and variance $ \\sigma^{2} $. As $ n \\rightarrow \\infty $, the distribution of the standardized sum converges to the standard normal distribution:
$
\\frac{X_{1}+\\cdots+X_{n}-n \\mu}{\\sqrt{n} \\sigma} \\xrightarrow{d} N(0,1) .
$

Equivalently:
$
P\\left\\{\\frac{X_{1}+\\cdots+X_{n}-n \\mu}{\\sqrt{n} \\sigma} \\leq a\\right\\} \\rightarrow \\frac{1}{\\sqrt{2 \\pi}} \\int_{-\\infty}^{a} e^{-x^{2} / 2} d x
$

Proof Sketch (Using Moment Generating Functions):
1. Standardization:

Let $ Y_{i}=\\frac{X_{i}-\\mu}{\\sigma} $, so $ E\\left[Y_{i}\\right]=0, \\operatorname{Var}\\left(Y_{i}\\right)=1 $.

2. MGF of the Sum:

The MGF of $ S_{n}=\\frac{Y_{1}+\\cdots+Y_{n}}{\\sqrt{n}} $ is:
$
M_{S_{n}}(t)=\\left(M_{Y}\\left(\\frac{t}{\\sqrt{n}}\\right)\\right)^{n}
$

3. Taylor Expansion:

Expand $ M_{Y}\\left(\\frac{t}{\\sqrt{n}}\\right) $ around $ t=0 $ :
$
M_{Y}\\left(\\frac{t}{\\sqrt{n}}\\right)=1+\\frac{t^{2}}{2 n}+o\\left(\\frac{1}{n}\\right)
$

4. Limit as $ n \\rightarrow \\infty $ :
$
\\lim _{n \\rightarrow \\infty} M_{S_{n}}(t)=e^{t^{2} / 2}
$
which is the MGF of $ N(0,1) $. By uniqueness of MGFs, the result follows.

### 5. Composed Random Variable Equality

For all $h$:

$ 
\\mathrm{E}\\left[S_{N} h\\left(S_{N}\\right)\\right]=\\mathrm{E}[N] \\mathrm{E}\\left[X_{1} h\\left(S_{M}\\right)\\right]
$

Where:

$P\\{M=n\\} = \\dfrac{nP\\{N=n\\}}{E[N]}$

Proof:

$$
\\begin{aligned}
&\\mathrm{E}\\left[S_{N} h\\left(S_{N}\\right)\\right]\\\\ 
&=\\mathrm{E}\\left[\\sum_{i=1}^{N} X_{i} h\\left(S_{N}\\right)\\right] \\\\ 
& =\\sum_{n=0}^{\\infty} \\mathrm{E}\\left[\\sum_{i=1}^{n} X_{i} h\\left(S_{N}\\right) \\mid N=n\\right] \\cdot \\mathrm{P}\\{N=n\\} \\\\ 
& = \\sum_{n=0}^{\\infty} n \\cdot \\mathrm{E}\\left[X_{1} h\\left(S_{n}\\right)\\right] \\cdot \\mathrm{P}\\{N=n\\} \\\\ 
&= \\mathrm{E}[N] \\cdot \\sum_{n=0}^{\\infty} \\mathrm{E}\\left[X_{1} h\\left(S_{n}\\right)\\right] \\cdot \\frac{n \\mathrm{P}\\{N=n\\}}{\\mathrm{E}[N]}\\\\ 
&=\\mathrm{E}[N] \\mathrm{E}\\left[X_{1} h\\left(S_{M}\\right)\\right]
\\end{aligned}
$$

### 6. A corollary

$
\\begin{array}{l}
\\mathrm{P}\\left\\{S_{N}=0\\right\\}=\\mathrm{P}\\{N=0\\} \\\\
\\mathrm{P}\\left\\{S_{N}=k\\right\\}=\\frac{1}{k} \\mathrm{E}[N] \\sum_{j=1}^{k} j \\alpha_{j} \\mathrm{P}\\left\\{S_{M-1}=k-j\\right\\}, \\quad k>0
\\end{array}
$

Proof:

Choose $h$ as indicator function, we get:

$ \\mathrm{P}\\left\\{S_{N}=k\\right\\}=\\frac{\\mathrm{E}[N]}{k} \\cdot \\mathrm{E}\\left[X_{1} \\mathbf{1}_{\\left\\{S_{M}=k\\right\\}}\\right] $

Then for RHS:

$$
\\begin{aligned}
& \\mathrm{E}\\left[X_{1} \\mathbf{1}_{\\left\\{S_{M}=k\\right\\}}\\right] \\\\ 
&=\\sum_{n=1}^{\\infty} \\mathrm{P}\\{M=n\\} \\cdot \\mathrm{E}\\left[X_{1} \\mathbf{1}_{\\left\\{S_{M}=k\\right\\}} \\mid M=n\\right] \\\\
& =\\sum_{n=1}^{\\infty} \\frac{n \\mathrm{P}\\{N=n\\}}{\\mathrm{E}[N]} \\cdot \\mathrm{E}\\left[X_{1} \\mathbf{1}_{\\left\\{S_{n}=k\\right\\}}\\right]\\\\
&=\\sum_{n=1}^{\\infty} \\frac{n \\mathrm{P}\\{N=n\\}}{\\mathrm{E}[N]} \\cdot \\sum_{j=1}^{k} j \\alpha_{j} \\cdot \\mathrm{P}\\left\\{S_{n-1}=k-j\\right\\} \\\\ 
& =\\sum_{j=1}^{k} j \\alpha_{j} \\cdot \\sum_{n=1}^{\\infty} \\frac{n \\mathrm{P}\\{N=n\\}}{\\mathrm{E}[N]} \\cdot \\mathrm{P}\\left\\{S_{n-1}=k-j\\right\\} \\\\
&=\\sum_{j=1}^{k} j \\alpha_{j} \\cdot \\mathrm{P}\\left\\{S_{M-1}=k-j\\right\\}\\\\  
\\end{aligned}
$$

Finally:

$ \\mathrm{P}\\left\\{S_{N}=k\\right\\}=\\frac{\\mathrm{E}[N]}{k} \\cdot \\sum_{j=1}^{k} j \\alpha_{j} \\cdot \\mathrm{P}\\left\\{S_{M-1}=k-j\\right\\} $





placeholder


placeholder

placeholder

placeholder

placeholder

placeholder

`,S$=`# 2

## (1)

### Problem

> Are $ \\cup_{n=1}^{\\infty} E_{n} $ and $ \\cap_{n=1}^{\\infty} E_{n} $ events? If so, what do they represent?

### Solution

Yes, they are events.

$\\cup_{n=1}^\\infty E_n$ is the event that one of them happens

$\\cap_{n=1}^\\infty E_n$ is the event that all of them happen

## (2)

### Problem 

> Example: Three pairwise independent events that are not mutually independent.

### Solution 

Consider following setting:

$\\Omega = \\{\\omega_1,\\omega_2,\\omega_3,\\omega_4\\}, E_1 = \\{\\omega_1,\\omega_2\\}, E_2 = \\{\\omega_1,\\omega_3\\}, E_3 = \\{\\omega_1,\\omega_4\\}$

Then:

$P(E_1E_2) =\\dfrac{1}{4}, P(E_1)P(E_2) = \\dfrac{1}{2}\\cdot\\dfrac{1}{2} = \\dfrac{1}{4}$

same goes for $E_1E_3, E_2E_3$

However:

$P(E_1E_2E_3) = \\dfrac{1}{4}, P(E_1)P(E_2)P(E_3) = \\dfrac{1}{2}\\cdot\\dfrac{1}{2}\\cdot\\dfrac{1}{2} = \\dfrac{1}{8}$

## (3)

### Problem

> Statement: If $ F_{1}, \\ldots, F_{n} $ are mutually exclusive and exhaustive $ \\left(\\cup_{i=1}^{n} F_{i}=S\\right) $, then: $ P(E)=\\sum_{i=1}^{n} P\\left(E \\mid F_{i}\\right) P\\left(F_{i}\\right) . $

### Proof

Notice:

$P(E|F_i)P(F_i) = P(EF_i)$

Since $F_i\\cap F_j = \\oslash,\\forall i\\ne j$

We can get:

$EF_i\\cap EF_j = E(F_i\\cap F_j) = \\oslash$

Then:

$P(E) = P(ES) = P(E(\\cup_{i=1}^n F_i)) = \\sum_{i=1}^n P(EF_i) = \\sum_{i=1^n} P(E|F_i)P(F_i)$

## (4)

### Problem 

> Write Binomial Theorem

### Solution 

For any integers $ n \\geq 0 $ and real numbers $ a, b $ :
$
(a+b)^{n}=\\sum_{k=0}^{n}\\binom{n}{k} a^{n-k} b^{k} .
$

## (5)

### Problem 

> Expectation of $ X $ if $ Y=X+1 $ is Geometric

### Solution 

Since: $E[Y] = \\dfrac{1}{p}$

Then: $E[X] = E[Y-1] = E[Y]-1 = \\dfrac{1}{p} - 1$

## (6)

### Problem 

> Distribution of $ X+Y $ for Independent Poisson Variables

### Solution 

Assuming: $p(x) = e^{-\\lambda_1}\\dfrac{\\lambda_1^x}{x!},p(y) = e^{-\\lambda_2}\\dfrac{\\lambda_2^y}{y!},$

Then for $X+Y$

$\\begin{aligned}
&P(X+Y= z)\\\\ 
 &= \\sum_{i=0}^{z}e^{-\\lambda_1}\\dfrac{\\lambda_1^i}{i!}e^{-\\lambda_2}\\dfrac{\\lambda_2^{z-i}}{(z-i)!} \\\\
&=e^{-(\\lambda_1+\\lambda_2)}\\sum_{i=0}^{z}\\dfrac{\\lambda^i_1\\lambda_2^{z-i}}{i!(z-i)!} 
 \\end{aligned}$

Notice:

$(\\lambda_1+\\lambda_2)^z = z! \\sum_{i=0}^{z}\\dfrac{\\lambda^i_1\\lambda_2^{z-i}}{i!(z-i)!} $

Then:

$P(X+Y = z) =e^{-(\\lambda_1+\\lambda_2)}\\dfrac{(\\lambda_1+\\lambda_2)^z}{z!} $

Therefore:

$X+Y\\sim \\text{Poi}(\\lambda_1+\\lambda_2)$

## (7)

### Problem 

> Expected Number of Tosses Until First Head

### Solution 

Denote $E$ as "First toss is Head",then:

$\\begin{aligned}
&E(X)\\\\
& = E(X|E)P(E) + E(X|E^c)P(E^c) \\\\
&= 1\\cdot p + (\\dfrac{1}{p}+1)\\cdot (1-p)\\\\ 
&= \\dfrac{1}{p}
\\end{aligned}$

## (8)

### Problem 

> Consider $ n $ independent trials, where each trial results in one of $ 1, \\ldots, r $ with probabilities $ p_{1}, \\ldots, p_{r} $, respectively, such that $ p_{1}+\\cdots+p_{r}=1 $. Let $ N_{i} $ denote the number of trials resulting in outcome $ i $. The vector $ \\left(N_{1}, \\ldots, N_{r}\\right) $ follows a multinomial distribution. Using the conditional expectation formula, compute $ \\operatorname{Cov}\\left(N_{i}, N_{j}\\right) $

### Solution 

We have:

$E[N_i] = np_i$

Notice: $(N_i | N_j=y) \\sim \\text{B}(n-y, \\dfrac{p_i}{1-p_j})$

Then:

$E[N_iN_j|N_j=y] =y(n-y)\\dfrac{p_i}{1-p_j} $

$\\begin{aligned}
&E[N_iN_j]\\\\ 
&=E[E[N_iN_j|N_j]]\\\\ 
&=\\sum_{y=0}^n y(n-y)\\dfrac{p_i}{1-p_j}\\cdot \\binom{n}{y}p_j^y (1-p_j)^{n-y}
\\end{aligned}
$

Notice:

$\\sum_{y=0}^n y\\binom{n}{y}p_j^y (1-p_j)^{n-y} = E[N_j] = np_j$

$\\sum_{y=0}^n y^2\\binom{n}{y}p_j^y (1-p_j)^{n-y} = E[N_j^2] =(E[N_j])^2 + Var[N_j]= n^2p_j^2 + np_j(1-p_j)$

Then:

$$
\\begin{aligned}
&E[N_iN_j]\\\\ 
&=\\dfrac{p_i}{1-p_j}(n^2p_j- n^2p_j^2 - np_j(1-p_j))\\\\
&= p_i (n^2p_j - np_j)\\\\
&= n(n-1)p_ip_j
\\end{aligned}
$$

Then:

$\\begin{aligned} 
&Cov(N_j,N_j)\\\\ 
& = E[N_iN_j] - E[N_i]E[N_j] \\\\ 
&= n(n-1)p_ip_j - np_i\\cdot np_j\\\\ 
&=-np_ip_j 
\\end{aligned}
$

## (9)

### Problem 

> 9. Let $ X_{1}, X_{2}, \\ldots $ be i.i.d. random variables, and $ N $ be a non-negative integer-valued random variable independent of the $ X $-sequence. Define $ S_{0}=0 $ and $ S_{N}=\\sum_{i=1}^{N} X_{i} $ (a compound random variable). Assume $ N $ follows a Poisson distribution with mean $ \\lambda $.Assume $X_i$ is interger random variable, $P\\{X_1 = j\\} = a_j, j>0$. Moreover, $\\mathrm{P}\\{M=n\\}=\\frac{n \\mathrm{P}\\{N=n\\}}{\\mathrm{E}[N]}$. Find an expression for $ P_{n}= $ $ P\\left\\{S_{N}=n\\right\\}, n=0,1, \\ldots $

### Solution 

We have:

$
\\begin{aligned}
&P_n \\\\ 
&= \\sum_{k=0}^\\infty P(S_k=n)\\cdot P(N=k)\\\\ 
&=\\sum_{k=0}^n P(S_k=n)\\cdot P(N=k)\\\\ 
&=\\sum_{k=0}^n P(S_k=n)\\cdot e^{-\\lambda}\\dfrac{\\lambda^k}{k!}\\\\ 
\\end{aligned}
$

With MGF:

$\\phi(t) = E[e^{tS_N}]= \\sum_{n=0}^\\infty P_n e^{tn}$

$\\phi'(t) = \\sum_{n=0}^\\infty nP_ne^{tn}$

On the other hand:

$
\\begin{aligned}
&E[e^{tS_N}]\\\\ 
&= E[E[e^{tS_N}|N]]\\\\ 
&=E[(E[e^{tX_1}])^N]\\\\ 
&=e^{\\lambda(E[e^{tX_1}]-1)}\\\\ 
&=e^{\\lambda(\\sum_{j=1}^\\infty (a_j e^{tj})-1)}
\\end{aligned}
$

Then:

$\\phi'(t) = \\lambda \\sum_{j=1}^\\infty (ja_j e^{tj})\\phi(t)$

Replace $\\phi(t) $ and $\\phi'(t)$, we get:

$\\sum_{n=0}^{\\infty}nP_ne^{tn}= \\lambda \\sum_{j=1}^\\infty (ja_j e^{tj})\\sum_{n=0}^\\infty P_n e^{tn}$

To match the power of $e$, we get:

$nP_n = \\lambda \\sum_{j=1}^n ja_j P_{n-j}$

That is:

$ P_{n}=\\left\\{\\begin{array}{ll}e^{-\\lambda} & \\text { if } n=0, \\\\ \\frac{\\lambda}{n} \\sum_{j=1}^{n} j a_{j} P_{n-j} & \\text { if } n \\geq 1 .\\end{array}\\right. $


## (10)

### Problem 

> 10. If $ N $ follows a binomial distribution with parameters $ r $ and $ p $, find $ P_{n}=P\\left\\{S_{N}=n\\right\\}, n= $ $ 0,1, \\ldots $.

### Solution 

Notice:

$(M-1)\\sim \\text{B}(r-1,p)$

With the corollary:

$ \\mathrm{P}\\left\\{S_{N}=k\\right\\}=\\frac{\\mathrm{E}[N]}{k} \\cdot \\sum_{j=1}^{k} j \\alpha_{j} \\cdot \\mathrm{P}\\left\\{S_{M-1}=k-j\\right\\}, k>0 $

We denote $P_r(k) = P(S_{N_{(r)}}=k)$, where $N(r)\\sim \\text{B}(r,p)$, then:

$P_r(0) = (1-p)^r$

$P_r(k) = \\dfrac{rp}{k}\\sum_{j=1}^k ja_j P_{r-1}(k-j), k>0$

---

# Chapter 1

## 10

### Problem 

> Prove Bool's Inequality: $ \\mathrm{P}\\left(\\bigcup_{i=1}^{n} E_{i}\\right) \\leqslant \\sum_{i=1}^{n} \\mathrm{P}\\left(E_{i}\\right) $

### Solution 

We prove by induction:

When $n=1$, it is obvious that:

$P(E_1)\\le P(E_1)$

For $n-1$, assume that:

$ \\mathrm{P}\\left(\\bigcup_{i=1}^{n-1} E_{i}\\right) \\leqslant \\sum_{i=1}^{n-1} \\mathrm{P}\\left(E_{i}\\right) $

Then:

$$
\\begin{aligned}
&\\mathrm{P}\\left(\\bigcup_{i=1}^{n} E_{i}\\right)\\\\ 
&=\\mathrm{P}\\left(\\bigcup_{i=1}^{n-1} E_{i}\\right)+\\mathrm{P}\\left(E_{n}\\right)-\\mathrm{P}\\left(\\bigcup_{i=1}^{n-1} E_{i} \\cap E_{n}\\right)
 \\\\ 
 &\\le\\mathrm{P}\\left(\\bigcup_{i=1}^{n-1} E_{i}\\right)+\\mathrm{P}\\left(E_{n}\\right)\\\\ 
& \\le \\sum_{i=1}^{n-1} \\mathrm{P}\\left(E_{i}\\right)+\\mathrm{P}\\left(E_{n}\\right)\\\\ 
&=\\sum_{i=1}^{n} \\mathrm{P}\\left(E_{i}\\right)  
\\end{aligned}
$$

## 12

### Problem 

> Let $ E $ and $ F $ be mutually exclusive events in the sample space of a certain experiment. Suppose the experiment is repeated until either $ E $ or $ F $ occurs. What is the sample space of this super experiment? Prove that the probability of event $ E $ occurring before event $ F $ is
$
\\frac{\\mathrm{P}(E)}{\\mathrm{P}(E)+\\mathrm{P}(F)}
$

### Solution 

For the sample space:

$\\Omega = \\cup_{k=0}^\\infty \\{(E\\cup F)^c\\}^k\\times \\{E,F\\}$

Denote $G_E$ as "$E$ happens at first experiment",$G_F$ as "$F$ happens at first experiment", $H$ as the needed event. Notice that:

$
\\begin{aligned}
&P(H|(G_E\\cup G_F)^c) = P(H)\\\\ 
&P(H) \\\\ 
&= P(H|G_E)P(G_E)+ P(H|G_F)P(G_F) + P(H|(G_E\\cup G_F)^c)P((G_E\\cup G_F)^c)\\\\ 
&= 1\\cdot P(E) + 0 + P(H)\\cdot (1-P(E)- P(H))\\\\ 
\\end{aligned}
$

Then we get:

$P(H) = \\dfrac{P(E)}{P(E)+P(F)}$

## 23

### Problem 

> For events $ E_{1}, E_{2}, \\cdots, E_{n} $ Prove:
> 
> $\\mathrm{P}\\left(E_{1} E_{2} \\cdots E_{n}\\right)=\\mathrm{P}\\left(E_{1}\\right) \\mathrm{P}\\left(E_{2} \\mid E_{1}\\right) \\mathrm{P}\\left(E_{3} \\mid E_{1} E_{2}\\right) \\cdots \\mathrm{P}\\left(E_{n} \\mid E_{1} \\cdots E_{n-1}\\right)$

### Solution 

We prove by induction: 

For $n-1$, it's obvious that:

$P(E_1) = P(E_1)$

Then, assume case $n-1$ holds, that is: 

$P(E_1E_2\\cdots E_{n-1})
=P(E_1)P(E_2|E_1)P(E_3|E_1E_2)\\cdots P(E_{n-1}|E_1\\cdots E_{n-2})$

Notice:

$P(E_1E_2\\cdots E_n) = P(E_n|E_1\\cdots E_{n-1})P(E_1\\cdots E_{n-1})$

Then:

$
\\begin{aligned}
&P(E_1E_2\\cdots E_n)\\\\ 
& = P(E_n|E_1\\cdots E_{n-1})P(E_1\\cdots E_{n-1})\\\\ 
&=P(E_1)P(E_2|E_1)P(E_3|E_1E_2)\\cdots P(E_{n}|E_1\\cdots E_{n-1})
\\end{aligned}
$

## 28

### Problem 

> If the occurrence of $ B $ makes $ A $ more likely to occur, does the occurrence of $ A $ make $ B $ more likely to occur?

### Solution 

Yes.

We translate the problem into:

Given: $P(A|B)>P(A)$,

Prove or not: $P(B|A)>P(B)$

Notice:

$P(A|B)P(B) = P(AB) = P(B|A)P(A)$

Rearrange it:

$\\dfrac{P(A|B)}{P(A)}=\\dfrac{P(B|A)}{P(B)}$

Given $P(A|B)> P(A)$

We get:

$P(B|A)>P(B)$

## 39

### Problem 

> Assume that stores A, B, and C have 50, 75, and 100 employees, respectively. Among them, 50\\%, $ 60 \\% $, and $ 70 \\% $ are female. The probability of resignation is the same for all employees, regardless of gender. Now, an employee has resigned, and she is female. What is the probability that she worked at store C?

### Solution 

Denote $E$ as "Employee is female", $F$ as "Employee works in C, then:

$
\\begin{aligned}
&P(F|E) \\\\ 
&= \\dfrac{P(EF)}{P(E)}\\\\ 
&= \\dfrac{100 \\times 70\\%}{50\\times 50\\% + 75 \\times 60\\% +100 \\times 70\\%}\\\\ 
&= \\dfrac{1}{2}
\\end{aligned}
$

# Chapter 2

## 7

### Problem 

> Suppose a coin with a probability of 0.7 for landing heads is tossed 3 times. Let $ X $ denote the number of heads that appear in these 3 tosses. Determine the probability mass function of $ X $.

### Solution 

Notice:

$X\\sim \\text{B}(3,0.7)$

Then:

$ P(X=k)=\\left\\{\\begin{array}{ll}0.027, & \\text { if } k=0, \\\\ 0.189, & \\text { if } k=1, \\\\ 0.441, & \\text { if } k=2, \\\\ 0.343, & \\text { if } k=3\\end{array}\\right. $

## 23 

### Problem 

> Negative binomial distribution: Continuously toss a coin with probability $ p $ of landing heads until $ r $ heads appear. Derive the probability that the number of tosses required, $ X $, is $ n $ (where $ n \\geqslant r $ ):
> 
> $\\mathrm{P}\\{X=n\\}=\\binom{n-1}{r-1} p^{r}(1-p)^{n-r}, \\quad n \\geqslant r$


### Solution 

Notice that we need $r-1$ heads in $n-1$ times, then:

$P\\{X=n\\} = \\binom{n-1}{r-1}p^{r}(1-p)^{n-r}$

## 46

### Problem (a)

> If $ X $ is a non-negative integer-valued random variable, prove that:
> $\\mathrm{E}[X]=\\sum_{n=1}^{\\infty} \\mathrm{P}\\{X \\geqslant n\\}=\\sum_{n=0}^{\\infty} \\mathrm{P}\\{X>n\\} .$

### Solution (a)

Notice:

$$
\\begin{aligned}
&\\sum_{n=1}^{\\infty} \\mathrm{P}\\{X \\geqslant n\\}\\\\ 
&=  \\sum_{n=1}^{\\infty} \\sum_{k=n}^{\\infty} \\mathrm{P}\\{X=k\\}  \\\\ 
&= \\sum_{k=1}^{\\infty}  \\sum_{n=1}^{k}\\mathrm{P}\\{X=k\\}  \\\\ 
&= \\sum_{k=1}^\\infty k P\\{X=k\\} \\\\ 
&= E[X]
\\end{aligned}
$$

Also:

$$
\\begin{aligned}
&\\sum_{n=1}^{\\infty} \\mathrm{P}\\{X \\geqslant n\\}\\\\ 
&=\\sum_{n=1}^{\\infty} \\mathrm{P}\\{X > n-1\\}\\\\ 
&=\\sum_{n=0}^{\\infty} \\mathrm{P}\\{X > n\\}\\\\ 
\\end{aligned}
$$

### Problem (b)

> If $ X $ and $ Y $ are both non-negative integer-valued random variables, prove that:
> 
> $\\mathrm{E}[X Y]=\\sum_{n=1}^{\\infty} \\sum_{m=1}^{\\infty} \\mathrm{P}(X \\geqslant n, Y \\geqslant m) .$

### Solution 

Similarly:

$$
\\begin{aligned}
&\\sum_{n=1}^{\\infty} \\sum_{m=1}^{\\infty} \\mathrm{P}(X \\geqslant n, Y \\geqslant m) \\\\ 
&= \\sum_{n=1}^{\\infty} \\sum_{m=1}^{\\infty}\\sum_{x=n}^\\infty \\sum_{y=m}^\\infty  \\mathrm{P}(X =x, Y =y)\\\\ 
&=\\sum_{x=1}^{\\infty} \\sum_{y=1}^{\\infty}\\sum_{n=1}^x \\sum_{m=1}^y  \\mathrm{P}(X =x, Y =y)\\\\ 
&=\\sum_{x=1}^{\\infty} \\sum_{y=1}^{\\infty}xy\\mathrm{P}(X =x, Y =y)\\\\ 
&=E[XY]
\\end{aligned}
$$

## 48 

### Problem 

> If $ X $ is a non-negative random variable and $ g $ is a differentiable function with $ g(0)=0 $, then:
> 
> $\\mathrm{E}[g(X)]=\\int_{0}^{\\infty} \\mathrm{P}(X>t) g^{\\prime}(t) \\mathrm{d} t$
> 
> Prove the above result when $ X $ is a continuous random variable.

### Solution 

We have:

$$
\\begin{aligned}
&\\int_{0}^{\\infty} \\mathrm{P}(X>t) g^{\\prime}(t) \\mathrm{d} t \\\\ 
&=\\int_{0}^{\\infty} \\int_t^\\infty P(X=x) g^{\\prime}(t) \\mathrm d x \\mathrm{d} t \\\\ 
&=\\int_{0}^{\\infty} \\int_0^x P(X=x) g^{\\prime}(t) \\mathrm d t\\mathrm{d} x \\\\ 
&=\\int_0^\\infty g(x)P(X=x)\\mathrm d x \\\\ 
&= E[g(x)]
\\end{aligned}
$$

## 71 

### Problem 

> Prove that the sum of independent and identically distributed (i.i.d.) exponential random variables has a gamma distribution.

### Solution 

Notice for exponential distribution: 


$ M_{X}(t)=\\int_{0}^{\\infty} e^{t x} \\cdot \\lambda e^{-\\lambda x} d x=\\lambda \\int_{0}^{\\infty} e^{-(\\lambda-t) x} d x $

Then: 

$ M_{X}(t)=\\lambda \\cdot \\frac{1}{\\lambda-t}=\\frac{\\lambda}{\\lambda-t} \\quad(t<\\lambda) $

Also, for Gamma distribution:

$ M_{X}(t)=\\int_{0}^{\\infty} e^{t x} \\cdot \\frac{\\lambda^{\\alpha}}{\\Gamma(\\alpha)} x^{\\alpha-1} e^{-\\lambda x} d x=\\frac{\\lambda^{\\alpha}}{(\\lambda-t)^{\\alpha}} \\cdot \\frac{\\Gamma(\\alpha)}{\\Gamma(\\alpha)} $

Then:

$ M_{X}(t)=\\left(\\frac{\\lambda}{\\lambda-t}\\right)^{\\alpha} $

Therefore, for i.i.d. exponential distributions:

$M_{\\sum_{i=1}^{\\alpha} X_i}(t) = (\\dfrac{\\lambda}{\\lambda-t})^\\alpha $

Therefore:

$\\sum_{i=1}^{\\alpha} X_i\\sim \\text{Gamma}(\\alpha)$

# Chapter 3

## 7

### Problem 

> Suppose the joint probability mass function $ p(x, y, z) $ of $ X, Y $, and $ Z $ is given by:
> 
> $\\begin{array}{llll}p(1,1,1)=\\frac{1}{8}, & p(2,1,1)=\\frac{1}{4}, & p(1,1,2)=\\frac{1}{8}, & p(2,1,2)=\\frac{3}{16} \\\\p(1,2,1)=\\frac{1}{16}, & p(2,2,1)=0, & p(1,2,2)=0, & p(2,2,2)=\\frac{1}{4}\\end{array}$
> 
> What is $ \\mathrm{E}[X \\mid Y=2] $ ? What is $ \\mathrm{E}[X \\mid Y=2, Z=1] $ ?

### Solution 

We have:

$P(Y=2) = \\sum_{x,z}p(x,2,z) = \\dfrac{5}{16}$

With conditional probability:

$P(X=1|Y=2) = \\dfrac{P(X=1,Y=2)}{P(Y=2)} = \\dfrac{1}{5}$

$P(X=2|Y=2) = \\dfrac{P(X=2,Y=2)}{P(Y=2)} = \\dfrac{4}{5}$

Then:

$$
\\begin{aligned}
&E[X|Y=2]\\\\ 
&= \\sum_{x}x\\cdot P(X=x|Y=2) \\\\ 
&= \\dfrac{9}{5}
\\end{aligned}
$$

Similarly:


$$
\\begin{aligned}
&E[X|Y=2, Z=1]\\\\ 
&= \\sum_{x}x\\cdot P(X=x|Y=2, Z=1) \\\\ 
&= 1
\\end{aligned}
$$

## 14

### Problem 

> Let $ X $ be a uniform random variable on $ (0,1) $. Find $ \\mathrm{E}[X \\mid X<1 / 2] $

### Solution 

We have:

$p(x) = 1, x\\in (0, 1)$

Then:

$$
\\begin{aligned}
&E[X|X<\\dfrac{1}{2}]\\\\ 
&= \\int_0^1 xP(X=x|X<\\dfrac{1}{2}) dx \\\\ 
&=\\int_0^\\frac{1}{2}x\\dfrac{P(X=x)}{\\dfrac{1}{2}}dx \\\\ 
&= \\dfrac{1}{4}
\\end{aligned}
$$

## 27 

### Problem

> Continuously toss a coin with probability $ p $ of landing heads until the pattern $ \\mathrm{T}, \\mathrm{T}, \\mathrm{H} $ appears. (That is, you stop tossing when the most recent toss is heads, and the two tosses immediately before it are tails.) Let $ X $ be the number of tosses. Find $ \\mathrm{E}[X] $.

### Solution 

We give the solution by states:

We denote:

$S_0 $: the most recent toss is H or nothing

$S_1$: the most recent toss is T 

$S_2$: the most recent tosses are T, T

We denote:

$E_i$ as the tosses needed for T, T, H in state $i$

Then:

$E_0 = (1-p)E_1 + pE_0 + 1$

$E_1 = (1-p)E_2 + pE_0 + 1$

$E_2 = p\\cdot 0 + (1-p)E_2 + 1$

By solving this, we get:

$E_2 = \\dfrac{1}{p}$

$E_0 = \\dfrac{1/p}{1-2p+p^2}$

Therefore:

$E[X] = \\dfrac{1}{p(1-p)^2}$

## 57

### Problem 

> The number of storms in the next rainy season follows a Poisson distribution, but its parameter is uniformly distributed over $ (0,5) $. That is, $ \\Lambda $ is uniformly distributed over $ (0,5) $, and given $ \\Lambda=\\lambda $, the number of storms is a Poisson random variable with mean $ \\lambda $. Find the probability that there are at least three storms in this rainy season.

### Solution 

Denote $X$ as the number of storms in this rainy season.

Notice:

$p(\\lambda) = \\dfrac{1}{5}$

$P(X=x|\\Lambda = \\lambda) = \\dfrac{\\lambda^x}{x!}e^{-\\lambda}$

Then:

$$
\\begin{aligned}
&P(X\\ge 3)\\\\ 
&= \\int_0^5 P(X\\ge 3|\\Lambda = \\lambda) P(\\Lambda =\\lambda) d \\lambda \\\\ 
&= \\dfrac{1}{5}\\int_0^5(1-e^{-\\lambda} - \\lambda e^{-\\lambda} - \\dfrac{\\lambda^2}{2}e^{-\\lambda})d\\lambda \\\\ 
&=\\dfrac{1}{5}[\\lambda+e^{-\\lambda}+ (\\lambda + 1)e^{-\\lambda} + (\\dfrac{\\lambda^2}{2}+\\lambda+1)e^{-\\lambda}]^5_0\\\\ 
&=\\dfrac{1}{5}[\\lambda + (\\dfrac{\\lambda^2}{2}+2\\lambda+3)e^{-\\lambda}]^5_0\\\\
&=\\dfrac{2}{5} + \\dfrac{51}{10}e^{-5}\\\\
\\end{aligned}
$$

## 59

### Problem

> Assume that each new coupon collected is independent of the past, and the probability of collecting a coupon of type $ i $ is $ p_{i} $. A total of $ n $ coupons are collected. Let $ A_{i} $ denote the event "at least one of the $ n $ coupons is of type $ i $." For $ i \\neq j $, compute $ P\\left(A_{i} A_{j}\\right) $ using the following methods:
(a) Condition on the number of type $ i $ coupons $ N_{i} $ among the $ n $ coupons;
(b) Condition on the time $ F_{i} $ when the first type $ i $ coupon is collected;
(c) Use the identity $ \\mathrm{P}\\left(A_{i} \\cup A_{j}\\right)=\\mathrm{P}\\left(A_{i}\\right)+\\mathrm{P}\\left(A_{j}\\right)-\\mathrm{P}\\left(A_{i} A_{j}\\right) $.

### Solution (a)

We have:

$$
\\begin{aligned}
&P(A_iA_j)\\\\ 
&=\\sum_{k=1}^n P(A_j|N_i=k)P(N_i=k) \\\\ 
&= \\sum_{k=1}^n(1-(1-\\dfrac{p_j}{1-p_i})^{n-k})\\binom{n}{k}p_i^k(1-p_i)^{n-k}
\\end{aligned}
$$

### Solution (b)

Similarly, we have:

$$
\\begin{aligned}
&P(A_iA_j)\\\\ 
&=\\sum_{k=1}^n P(A_j|F_i=k)P(F_i=k) \\\\ 
&= \\sum_{m=1}^{n}\\left[1-\\left(1-\\frac{p_{j}}{1-p_{i}}\\right)^{m-1}\\left(1-p_{j}\\right)^{n-m}\\right]\\left(1-p_{i}\\right)^{m-1} p_{i}
\\end{aligned}
$$

### Solution (c)

We have:

$
\\begin{aligned}
&P(A_iA_j) \\\\ 
&= P(A_i) + P(A_j) - P(A_i \\cup A_j) \\\\ 
&= (1-(1-p_i)^n) + (1-(1-p_j)^n) - (1-(1-p_i-p_j)^n)\\\\ 
&= 1 - (1-p_i)^n - (1-p_j)^n + (1-p_i- p_j )^n
\\end{aligned}$


`,E$=`# Understanding React Hooks

React Hooks are functions that let you use state and other React features without writing a class.

Here is some content with a mathematical formula inline: $E = mc^2$

And a block formula:

$$
\\int_{-\\infty}^{+\\infty} e^{-x^2} dx = \\sqrt{\\pi}
$$

More content...
`;function Wm(e){const t=[],n=String(e||"");let r=n.indexOf(","),i=0,a=!1;for(;!a;){r===-1&&(r=n.length,a=!0);const o=n.slice(i,r).trim();(o||!a)&&t.push(o),i=r+1,r=n.indexOf(",",i)}return t}function C$(e,t){const n={};return(e[e.length-1]===""?[...e,""]:e).join((n.padRight?" ":"")+","+(n.padLeft===!1?"":" ")).trim()}const D$=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,z$=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,P$={};function Um(e,t){return(P$.jsx?z$:D$).test(e)}const A$=/[ \t\n\f\r]/g;function T$(e){return typeof e=="object"?e.type==="text"?Xm(e.value):!1:Xm(e)}function Xm(e){return e.replace(A$,"")===""}class no{constructor(t,n,r){this.property=t,this.normal=n,r&&(this.space=r)}}no.prototype.property={};no.prototype.normal={};no.prototype.space=null;function zb(e,t){const n={},r={};let i=-1;for(;++i<e.length;)Object.assign(n,e[i].property),Object.assign(r,e[i].normal);return new no(n,r,t)}function Wa(e){return e.toLowerCase()}class Gt{constructor(t,n){this.property=t,this.attribute=n}}Gt.prototype.space=null;Gt.prototype.boolean=!1;Gt.prototype.booleanish=!1;Gt.prototype.overloadedBoolean=!1;Gt.prototype.number=!1;Gt.prototype.commaSeparated=!1;Gt.prototype.spaceSeparated=!1;Gt.prototype.commaOrSpaceSeparated=!1;Gt.prototype.mustUseProperty=!1;Gt.prototype.defined=!1;let F$=0;const ue=Kr(),Ue=Kr(),Pb=Kr(),W=Kr(),Ee=Kr(),ki=Kr(),Ct=Kr();function Kr(){return 2**++F$}const g0=Object.freeze(Object.defineProperty({__proto__:null,boolean:ue,booleanish:Ue,commaOrSpaceSeparated:Ct,commaSeparated:ki,number:W,overloadedBoolean:Pb,spaceSeparated:Ee},Symbol.toStringTag,{value:"Module"})),Ks=Object.keys(g0);class Bh extends Gt{constructor(t,n,r,i){let a=-1;if(super(t,n),Km(this,"space",i),typeof r=="number")for(;++a<Ks.length;){const o=Ks[a];Km(this,Ks[a],(r&g0[o])===g0[o])}}}Bh.prototype.defined=!0;function Km(e,t,n){n&&(e[t]=n)}const N$={}.hasOwnProperty;function Li(e){const t={},n={};let r;for(r in e.properties)if(N$.call(e.properties,r)){const i=e.properties[r],a=new Bh(r,e.transform(e.attributes||{},r),i,e.space);e.mustUseProperty&&e.mustUseProperty.includes(r)&&(a.mustUseProperty=!0),t[r]=a,n[Wa(r)]=r,n[Wa(a.attribute)]=r}return new no(t,n,e.space)}const Ab=Li({space:"xlink",transform(e,t){return"xlink:"+t.slice(5).toLowerCase()},properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null}}),Tb=Li({space:"xml",transform(e,t){return"xml:"+t.slice(3).toLowerCase()},properties:{xmlLang:null,xmlBase:null,xmlSpace:null}});function Fb(e,t){return t in e?e[t]:t}function Nb(e,t){return Fb(e,t.toLowerCase())}const Mb=Li({space:"xmlns",attributes:{xmlnsxlink:"xmlns:xlink"},transform:Nb,properties:{xmlns:null,xmlnsXLink:null}}),Rb=Li({transform(e,t){return t==="role"?t:"aria-"+t.slice(4).toLowerCase()},properties:{ariaActiveDescendant:null,ariaAtomic:Ue,ariaAutoComplete:null,ariaBusy:Ue,ariaChecked:Ue,ariaColCount:W,ariaColIndex:W,ariaColSpan:W,ariaControls:Ee,ariaCurrent:null,ariaDescribedBy:Ee,ariaDetails:null,ariaDisabled:Ue,ariaDropEffect:Ee,ariaErrorMessage:null,ariaExpanded:Ue,ariaFlowTo:Ee,ariaGrabbed:Ue,ariaHasPopup:null,ariaHidden:Ue,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:Ee,ariaLevel:W,ariaLive:null,ariaModal:Ue,ariaMultiLine:Ue,ariaMultiSelectable:Ue,ariaOrientation:null,ariaOwns:Ee,ariaPlaceholder:null,ariaPosInSet:W,ariaPressed:Ue,ariaReadOnly:Ue,ariaRelevant:null,ariaRequired:Ue,ariaRoleDescription:Ee,ariaRowCount:W,ariaRowIndex:W,ariaRowSpan:W,ariaSelected:Ue,ariaSetSize:W,ariaSort:null,ariaValueMax:W,ariaValueMin:W,ariaValueNow:W,ariaValueText:null,role:null}}),M$=Li({space:"html",attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},transform:Nb,mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:ki,acceptCharset:Ee,accessKey:Ee,action:null,allow:null,allowFullScreen:ue,allowPaymentRequest:ue,allowUserMedia:ue,alt:null,as:null,async:ue,autoCapitalize:null,autoComplete:Ee,autoFocus:ue,autoPlay:ue,blocking:Ee,capture:null,charSet:null,checked:ue,cite:null,className:Ee,cols:W,colSpan:null,content:null,contentEditable:Ue,controls:ue,controlsList:Ee,coords:W|ki,crossOrigin:null,data:null,dateTime:null,decoding:null,default:ue,defer:ue,dir:null,dirName:null,disabled:ue,download:Pb,draggable:Ue,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:ue,formTarget:null,headers:Ee,height:W,hidden:ue,high:W,href:null,hrefLang:null,htmlFor:Ee,httpEquiv:Ee,id:null,imageSizes:null,imageSrcSet:null,inert:ue,inputMode:null,integrity:null,is:null,isMap:ue,itemId:null,itemProp:Ee,itemRef:Ee,itemScope:ue,itemType:Ee,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:ue,low:W,manifest:null,max:null,maxLength:W,media:null,method:null,min:null,minLength:W,multiple:ue,muted:ue,name:null,nonce:null,noModule:ue,noValidate:ue,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:ue,optimum:W,pattern:null,ping:Ee,placeholder:null,playsInline:ue,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:ue,referrerPolicy:null,rel:Ee,required:ue,reversed:ue,rows:W,rowSpan:W,sandbox:Ee,scope:null,scoped:ue,seamless:ue,selected:ue,shadowRootClonable:ue,shadowRootDelegatesFocus:ue,shadowRootMode:null,shape:null,size:W,sizes:null,slot:null,span:W,spellCheck:Ue,src:null,srcDoc:null,srcLang:null,srcSet:null,start:W,step:null,style:null,tabIndex:W,target:null,title:null,translate:null,type:null,typeMustMatch:ue,useMap:null,value:Ue,width:W,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:Ee,axis:null,background:null,bgColor:null,border:W,borderColor:null,bottomMargin:W,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:ue,declare:ue,event:null,face:null,frame:null,frameBorder:null,hSpace:W,leftMargin:W,link:null,longDesc:null,lowSrc:null,marginHeight:W,marginWidth:W,noResize:ue,noHref:ue,noShade:ue,noWrap:ue,object:null,profile:null,prompt:null,rev:null,rightMargin:W,rules:null,scheme:null,scrolling:Ue,standby:null,summary:null,text:null,topMargin:W,valueType:null,version:null,vAlign:null,vLink:null,vSpace:W,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:ue,disableRemotePlayback:ue,prefix:null,property:null,results:W,security:null,unselectable:null}}),R$=Li({space:"svg",attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},transform:Fb,properties:{about:Ct,accentHeight:W,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:W,amplitude:W,arabicForm:null,ascent:W,attributeName:null,attributeType:null,azimuth:W,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:W,by:null,calcMode:null,capHeight:W,className:Ee,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:W,diffuseConstant:W,direction:null,display:null,dur:null,divisor:W,dominantBaseline:null,download:ue,dx:null,dy:null,edgeMode:null,editable:null,elevation:W,enableBackground:null,end:null,event:null,exponent:W,externalResourcesRequired:null,fill:null,fillOpacity:W,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:ki,g2:ki,glyphName:ki,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:W,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:W,horizOriginX:W,horizOriginY:W,id:null,ideographic:W,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:W,k:W,k1:W,k2:W,k3:W,k4:W,kernelMatrix:Ct,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:W,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:W,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:W,overlineThickness:W,paintOrder:null,panose1:null,path:null,pathLength:W,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:Ee,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:W,pointsAtY:W,pointsAtZ:W,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:Ct,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:Ct,rev:Ct,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:Ct,requiredFeatures:Ct,requiredFonts:Ct,requiredFormats:Ct,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:W,specularExponent:W,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:W,strikethroughThickness:W,string:null,stroke:null,strokeDashArray:Ct,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:W,strokeOpacity:W,strokeWidth:null,style:null,surfaceScale:W,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:Ct,tabIndex:W,tableValues:null,target:null,targetX:W,targetY:W,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:Ct,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:W,underlineThickness:W,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:W,values:null,vAlphabetic:W,vMathematical:W,vectorEffect:null,vHanging:W,vIdeographic:W,version:null,vertAdvY:W,vertOriginX:W,vertOriginY:W,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:W,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null}}),q$=/^data[-\w.:]+$/i,Vm=/-[a-z]/g,I$=/[A-Z]/g;function qb(e,t){const n=Wa(t);let r=t,i=Gt;if(n in e.normal)return e.property[e.normal[n]];if(n.length>4&&n.slice(0,4)==="data"&&q$.test(t)){if(t.charAt(4)==="-"){const a=t.slice(5).replace(Vm,L$);r="data"+a.charAt(0).toUpperCase()+a.slice(1)}else{const a=t.slice(4);if(!Vm.test(a)){let o=a.replace(I$,B$);o.charAt(0)!=="-"&&(o="-"+o),t="data"+o}}i=Bh}return new i(r,t)}function B$(e){return"-"+e.toLowerCase()}function L$(e){return e.charAt(1).toUpperCase()}const O$={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"},Ib=zb([Tb,Ab,Mb,Rb,M$],"html"),is=zb([Tb,Ab,Mb,Rb,R$],"svg");function Gm(e){const t=String(e||"").trim();return t?t.split(/[ \t\n\r\f]+/g):[]}function j$(e){return e.join(" ").trim()}var Bb={},Qm=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,H$=/\n/g,W$=/^\s*/,U$=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,X$=/^:\s*/,K$=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,V$=/^[;\s]*/,G$=/^\s+|\s+$/g,Q$=`
`,Ym="/",Zm="*",Tr="",Y$="comment",Z$="declaration",J$=function(e,t){if(typeof e!="string")throw new TypeError("First argument must be a string");if(!e)return[];t=t||{};var n=1,r=1;function i(v){var $=v.match(H$);$&&(n+=$.length);var k=v.lastIndexOf(Q$);r=~k?v.length-k:r+v.length}function a(){var v={line:n,column:r};return function($){return $.position=new o(v),u(),$}}function o(v){this.start=v,this.end={line:n,column:r},this.source=t.source}o.prototype.content=e;function l(v){var $=new Error(t.source+":"+n+":"+r+": "+v);if($.reason=v,$.filename=t.source,$.line=n,$.column=r,$.source=e,!t.silent)throw $}function s(v){var $=v.exec(e);if($){var k=$[0];return i(k),e=e.slice(k.length),$}}function u(){s(W$)}function h(v){var $;for(v=v||[];$=m();)$!==!1&&v.push($);return v}function m(){var v=a();if(!(Ym!=e.charAt(0)||Zm!=e.charAt(1))){for(var $=2;Tr!=e.charAt($)&&(Zm!=e.charAt($)||Ym!=e.charAt($+1));)++$;if($+=2,Tr===e.charAt($-1))return l("End of comment missing");var k=e.slice(2,$-2);return r+=2,i(k),e=e.slice($),r+=2,v({type:Y$,comment:k})}}function p(){var v=a(),$=s(U$);if($){if(m(),!s(X$))return l("property missing ':'");var k=s(K$),g=v({type:Z$,property:Jm($[0].replace(Qm,Tr)),value:k?Jm(k[0].replace(Qm,Tr)):Tr});return s(V$),g}}function f(){var v=[];h(v);for(var $;$=p();)$!==!1&&(v.push($),h(v));return v}return u(),f()};function Jm(e){return e?e.replace(G$,Tr):Tr}var e6=wc&&wc.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Bb,"__esModule",{value:!0});var ed=Bb.default=n6,t6=e6(J$);function n6(e,t){var n=null;if(!e||typeof e!="string")return n;var r=(0,t6.default)(e),i=typeof t=="function";return r.forEach(function(a){if(a.type==="declaration"){var o=a.property,l=a.value;i?t(o,l,a):l&&(n=n||{},n[o]=l)}}),n}const r6=ed.default||ed,Lb=Ob("end"),Lh=Ob("start");function Ob(e){return t;function t(n){const r=n&&n.position&&n.position[e]||{};if(typeof r.line=="number"&&r.line>0&&typeof r.column=="number"&&r.column>0)return{line:r.line,column:r.column,offset:typeof r.offset=="number"&&r.offset>-1?r.offset:void 0}}}function i6(e){const t=Lh(e),n=Lb(e);if(t&&n)return{start:t,end:n}}function wa(e){return!e||typeof e!="object"?"":"position"in e||"type"in e?td(e.position):"start"in e||"end"in e?td(e):"line"in e||"column"in e?y0(e):""}function y0(e){return nd(e&&e.line)+":"+nd(e&&e.column)}function td(e){return y0(e&&e.start)+"-"+y0(e&&e.end)}function nd(e){return e&&typeof e=="number"?e:1}class st extends Error{constructor(t,n,r){super(),typeof n=="string"&&(r=n,n=void 0);let i="",a={},o=!1;if(n&&("line"in n&&"column"in n?a={place:n}:"start"in n&&"end"in n?a={place:n}:"type"in n?a={ancestors:[n],place:n.position}:a={...n}),typeof t=="string"?i=t:!a.cause&&t&&(o=!0,i=t.message,a.cause=t),!a.ruleId&&!a.source&&typeof r=="string"){const s=r.indexOf(":");s===-1?a.ruleId=r:(a.source=r.slice(0,s),a.ruleId=r.slice(s+1))}if(!a.place&&a.ancestors&&a.ancestors){const s=a.ancestors[a.ancestors.length-1];s&&(a.place=s.position)}const l=a.place&&"start"in a.place?a.place.start:a.place;this.ancestors=a.ancestors||void 0,this.cause=a.cause||void 0,this.column=l?l.column:void 0,this.fatal=void 0,this.file,this.message=i,this.line=l?l.line:void 0,this.name=wa(a.place)||"1:1",this.place=a.place||void 0,this.reason=this.message,this.ruleId=a.ruleId||void 0,this.source=a.source||void 0,this.stack=o&&a.cause&&typeof a.cause.stack=="string"?a.cause.stack:"",this.actual,this.expected,this.note,this.url}}st.prototype.file="";st.prototype.name="";st.prototype.reason="";st.prototype.message="";st.prototype.stack="";st.prototype.column=void 0;st.prototype.line=void 0;st.prototype.ancestors=void 0;st.prototype.cause=void 0;st.prototype.fatal=void 0;st.prototype.place=void 0;st.prototype.ruleId=void 0;st.prototype.source=void 0;const Oh={}.hasOwnProperty,a6=new Map,o6=/[A-Z]/g,l6=/-([a-z])/g,s6=new Set(["table","tbody","thead","tfoot","tr"]),u6=new Set(["td","th"]),jb="https://github.com/syntax-tree/hast-util-to-jsx-runtime";function h6(e,t){if(!t||t.Fragment===void 0)throw new TypeError("Expected `Fragment` in options");const n=t.filePath||void 0;let r;if(t.development){if(typeof t.jsxDEV!="function")throw new TypeError("Expected `jsxDEV` in options when `development: true`");r=y6(n,t.jsxDEV)}else{if(typeof t.jsx!="function")throw new TypeError("Expected `jsx` in production options");if(typeof t.jsxs!="function")throw new TypeError("Expected `jsxs` in production options");r=g6(n,t.jsx,t.jsxs)}const i={Fragment:t.Fragment,ancestors:[],components:t.components||{},create:r,elementAttributeNameCase:t.elementAttributeNameCase||"react",evaluater:t.createEvaluater?t.createEvaluater():void 0,filePath:n,ignoreInvalidStyle:t.ignoreInvalidStyle||!1,passKeys:t.passKeys!==!1,passNode:t.passNode||!1,schema:t.space==="svg"?is:Ib,stylePropertyNameCase:t.stylePropertyNameCase||"dom",tableCellAlignToStyle:t.tableCellAlignToStyle!==!1},a=Hb(i,e,void 0);return a&&typeof a!="string"?a:i.create(e,i.Fragment,{children:a||void 0},void 0)}function Hb(e,t,n){if(t.type==="element")return c6(e,t,n);if(t.type==="mdxFlowExpression"||t.type==="mdxTextExpression")return m6(e,t);if(t.type==="mdxJsxFlowElement"||t.type==="mdxJsxTextElement")return f6(e,t,n);if(t.type==="mdxjsEsm")return d6(e,t);if(t.type==="root")return p6(e,t,n);if(t.type==="text")return b6(e,t)}function c6(e,t,n){const r=e.schema;let i=r;t.tagName.toLowerCase()==="svg"&&r.space==="html"&&(i=is,e.schema=i),e.ancestors.push(t);const a=Ub(e,t.tagName,!1),o=v6(e,t);let l=Hh(e,t);return s6.has(t.tagName)&&(l=l.filter(function(s){return typeof s=="string"?!T$(s):!0})),Wb(e,o,a,t),jh(o,l),e.ancestors.pop(),e.schema=r,e.create(t,a,o,n)}function m6(e,t){if(t.data&&t.data.estree&&e.evaluater){const r=t.data.estree.body[0];return r.type,e.evaluater.evaluateExpression(r.expression)}Ua(e,t.position)}function d6(e,t){if(t.data&&t.data.estree&&e.evaluater)return e.evaluater.evaluateProgram(t.data.estree);Ua(e,t.position)}function f6(e,t,n){const r=e.schema;let i=r;t.name==="svg"&&r.space==="html"&&(i=is,e.schema=i),e.ancestors.push(t);const a=t.name===null?e.Fragment:Ub(e,t.name,!0),o=$6(e,t),l=Hh(e,t);return Wb(e,o,a,t),jh(o,l),e.ancestors.pop(),e.schema=r,e.create(t,a,o,n)}function p6(e,t,n){const r={};return jh(r,Hh(e,t)),e.create(t,e.Fragment,r,n)}function b6(e,t){return t.value}function Wb(e,t,n,r){typeof n!="string"&&n!==e.Fragment&&e.passNode&&(t.node=r)}function jh(e,t){if(t.length>0){const n=t.length>1?t:t[0];n&&(e.children=n)}}function g6(e,t,n){return r;function r(i,a,o,l){const u=Array.isArray(o.children)?n:t;return l?u(a,o,l):u(a,o)}}function y6(e,t){return n;function n(r,i,a,o){const l=Array.isArray(a.children),s=Lh(r);return t(i,a,o,l,{columnNumber:s?s.column-1:void 0,fileName:e,lineNumber:s?s.line:void 0},void 0)}}function v6(e,t){const n={};let r,i;for(i in t.properties)if(i!=="children"&&Oh.call(t.properties,i)){const a=x6(e,i,t.properties[i]);if(a){const[o,l]=a;e.tableCellAlignToStyle&&o==="align"&&typeof l=="string"&&u6.has(t.tagName)?r=l:n[o]=l}}if(r){const a=n.style||(n.style={});a[e.stylePropertyNameCase==="css"?"text-align":"textAlign"]=r}return n}function $6(e,t){const n={};for(const r of t.attributes)if(r.type==="mdxJsxExpressionAttribute")if(r.data&&r.data.estree&&e.evaluater){const a=r.data.estree.body[0];a.type;const o=a.expression;o.type;const l=o.properties[0];l.type,Object.assign(n,e.evaluater.evaluateExpression(l.argument))}else Ua(e,t.position);else{const i=r.name;let a;if(r.value&&typeof r.value=="object")if(r.value.data&&r.value.data.estree&&e.evaluater){const l=r.value.data.estree.body[0];l.type,a=e.evaluater.evaluateExpression(l.expression)}else Ua(e,t.position);else a=r.value===null?!0:r.value;n[i]=a}return n}function Hh(e,t){const n=[];let r=-1;const i=e.passKeys?new Map:a6;for(;++r<t.children.length;){const a=t.children[r];let o;if(e.passKeys){const s=a.type==="element"?a.tagName:a.type==="mdxJsxFlowElement"||a.type==="mdxJsxTextElement"?a.name:void 0;if(s){const u=i.get(s)||0;o=s+"-"+u,i.set(s,u+1)}}const l=Hb(e,a,o);l!==void 0&&n.push(l)}return n}function x6(e,t,n){const r=qb(e.schema,t);if(!(n==null||typeof n=="number"&&Number.isNaN(n))){if(Array.isArray(n)&&(n=r.commaSeparated?C$(n):j$(n)),r.property==="style"){let i=typeof n=="object"?n:w6(e,String(n));return e.stylePropertyNameCase==="css"&&(i=_6(i)),["style",i]}return[e.elementAttributeNameCase==="react"&&r.space?O$[r.property]||r.property:r.attribute,n]}}function w6(e,t){const n={};try{r6(t,r)}catch(i){if(!e.ignoreInvalidStyle){const a=i,o=new st("Cannot parse `style` attribute",{ancestors:e.ancestors,cause:a,ruleId:"style",source:"hast-util-to-jsx-runtime"});throw o.file=e.filePath||void 0,o.url=jb+"#cannot-parse-style-attribute",o}}return n;function r(i,a){let o=i;o.slice(0,2)!=="--"&&(o.slice(0,4)==="-ms-"&&(o="ms-"+o.slice(4)),o=o.replace(l6,S6)),n[o]=a}}function Ub(e,t,n){let r;if(!n)r={type:"Literal",value:t};else if(t.includes(".")){const i=t.split(".");let a=-1,o;for(;++a<i.length;){const l=Um(i[a])?{type:"Identifier",name:i[a]}:{type:"Literal",value:i[a]};o=o?{type:"MemberExpression",object:o,property:l,computed:!!(a&&l.type==="Literal"),optional:!1}:l}r=o}else r=Um(t)&&!/^[a-z]/.test(t)?{type:"Identifier",name:t}:{type:"Literal",value:t};if(r.type==="Literal"){const i=r.value;return Oh.call(e.components,i)?e.components[i]:i}if(e.evaluater)return e.evaluater.evaluateExpression(r);Ua(e)}function Ua(e,t){const n=new st("Cannot handle MDX estrees without `createEvaluater`",{ancestors:e.ancestors,place:t,ruleId:"mdx-estree",source:"hast-util-to-jsx-runtime"});throw n.file=e.filePath||void 0,n.url=jb+"#cannot-handle-mdx-estrees-without-createevaluater",n}function _6(e){const t={};let n;for(n in e)Oh.call(e,n)&&(t[k6(n)]=e[n]);return t}function k6(e){let t=e.replace(o6,E6);return t.slice(0,3)==="ms-"&&(t="-"+t),t}function S6(e,t){return t.toUpperCase()}function E6(e){return"-"+e.toLowerCase()}const Vs={action:["form"],cite:["blockquote","del","ins","q"],data:["object"],formAction:["button","input"],href:["a","area","base","link"],icon:["menuitem"],itemId:null,manifest:["html"],ping:["a","area"],poster:["video"],src:["audio","embed","iframe","img","input","script","source","track","video"]},C6={};function D6(e,t){const n=C6,r=typeof n.includeImageAlt=="boolean"?n.includeImageAlt:!0,i=typeof n.includeHtml=="boolean"?n.includeHtml:!0;return Xb(e,r,i)}function Xb(e,t,n){if(z6(e)){if("value"in e)return e.type==="html"&&!n?"":e.value;if(t&&"alt"in e&&e.alt)return e.alt;if("children"in e)return rd(e.children,t,n)}return Array.isArray(e)?rd(e,t,n):""}function rd(e,t,n){const r=[];let i=-1;for(;++i<e.length;)r[i]=Xb(e[i],t,n);return r.join("")}function z6(e){return!!(e&&typeof e=="object")}const id=document.createElement("i");function Wh(e){const t="&"+e+";";id.innerHTML=t;const n=id.textContent;return n.charCodeAt(n.length-1)===59&&e!=="semi"||n===t?!1:n}function vn(e,t,n,r){const i=e.length;let a=0,o;if(t<0?t=-t>i?0:i+t:t=t>i?i:t,n=n>0?n:0,r.length<1e4)o=Array.from(r),o.unshift(t,n),e.splice(...o);else for(n&&e.splice(t,n);a<r.length;)o=r.slice(a,a+1e4),o.unshift(t,0),e.splice(...o),a+=1e4,t+=1e4}function Bt(e,t){return e.length>0?(vn(e,e.length,0,t),e):t}const ad={}.hasOwnProperty;function P6(e){const t={};let n=-1;for(;++n<e.length;)A6(t,e[n]);return t}function A6(e,t){let n;for(n in t){const i=(ad.call(e,n)?e[n]:void 0)||(e[n]={}),a=t[n];let o;if(a)for(o in a){ad.call(i,o)||(i[o]=[]);const l=a[o];T6(i[o],Array.isArray(l)?l:l?[l]:[])}}}function T6(e,t){let n=-1;const r=[];for(;++n<t.length;)(t[n].add==="after"?e:r).push(t[n]);vn(e,0,0,r)}function Kb(e,t){const n=Number.parseInt(e,t);return n<9||n===11||n>13&&n<32||n>126&&n<160||n>55295&&n<57344||n>64975&&n<65008||(n&65535)===65535||(n&65535)===65534||n>1114111?"�":String.fromCodePoint(n)}function Si(e){return e.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}const pn=kr(/[A-Za-z]/),At=kr(/[\dA-Za-z]/),F6=kr(/[#-'*+\--9=?A-Z^-~]/);function v0(e){return e!==null&&(e<32||e===127)}const $0=kr(/\d/),N6=kr(/[\dA-Fa-f]/),M6=kr(/[!-/:-@[-`{-~]/);function ee(e){return e!==null&&e<-2}function kt(e){return e!==null&&(e<0||e===32)}function $e(e){return e===-2||e===-1||e===32}const R6=kr(new RegExp("\\p{P}|\\p{S}","u")),q6=kr(/\s/);function kr(e){return t;function t(n){return n!==null&&n>-1&&e.test(String.fromCharCode(n))}}function Oi(e){const t=[];let n=-1,r=0,i=0;for(;++n<e.length;){const a=e.charCodeAt(n);let o="";if(a===37&&At(e.charCodeAt(n+1))&&At(e.charCodeAt(n+2)))i=2;else if(a<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(a))||(o=String.fromCharCode(a));else if(a>55295&&a<57344){const l=e.charCodeAt(n+1);a<56320&&l>56319&&l<57344?(o=String.fromCharCode(a,l),i=1):o="�"}else o=String.fromCharCode(a);o&&(t.push(e.slice(r,n),encodeURIComponent(o)),r=n+i+1,o=""),i&&(n+=i,i=0)}return t.join("")+e.slice(r)}function xe(e,t,n,r){const i=r?r-1:Number.POSITIVE_INFINITY;let a=0;return o;function o(s){return $e(s)?(e.enter(n),l(s)):t(s)}function l(s){return $e(s)&&a++<i?(e.consume(s),l):(e.exit(n),t(s))}}const I6={tokenize:B6};function B6(e){const t=e.attempt(this.parser.constructs.contentInitial,r,i);let n;return t;function r(l){if(l===null){e.consume(l);return}return e.enter("lineEnding"),e.consume(l),e.exit("lineEnding"),xe(e,t,"linePrefix")}function i(l){return e.enter("paragraph"),a(l)}function a(l){const s=e.enter("chunkText",{contentType:"text",previous:n});return n&&(n.next=s),n=s,o(l)}function o(l){if(l===null){e.exit("chunkText"),e.exit("paragraph"),e.consume(l);return}return ee(l)?(e.consume(l),e.exit("chunkText"),a):(e.consume(l),o)}}const L6={tokenize:O6},od={tokenize:j6};function O6(e){const t=this,n=[];let r=0,i,a,o;return l;function l(w){if(r<n.length){const P=n[r];return t.containerState=P[1],e.attempt(P[0].continuation,s,u)(w)}return u(w)}function s(w){if(r++,t.containerState._closeFlow){t.containerState._closeFlow=void 0,i&&y();const P=t.events.length;let F=P,D;for(;F--;)if(t.events[F][0]==="exit"&&t.events[F][1].type==="chunkFlow"){D=t.events[F][1].end;break}g(r);let M=P;for(;M<t.events.length;)t.events[M][1].end={...D},M++;return vn(t.events,F+1,0,t.events.slice(P)),t.events.length=M,u(w)}return l(w)}function u(w){if(r===n.length){if(!i)return p(w);if(i.currentConstruct&&i.currentConstruct.concrete)return v(w);t.interrupt=!!(i.currentConstruct&&!i._gfmTableDynamicInterruptHack)}return t.containerState={},e.check(od,h,m)(w)}function h(w){return i&&y(),g(r),p(w)}function m(w){return t.parser.lazy[t.now().line]=r!==n.length,o=t.now().offset,v(w)}function p(w){return t.containerState={},e.attempt(od,f,v)(w)}function f(w){return r++,n.push([t.currentConstruct,t.containerState]),p(w)}function v(w){if(w===null){i&&y(),g(0),e.consume(w);return}return i=i||t.parser.flow(t.now()),e.enter("chunkFlow",{_tokenizer:i,contentType:"flow",previous:a}),$(w)}function $(w){if(w===null){k(e.exit("chunkFlow"),!0),g(0),e.consume(w);return}return ee(w)?(e.consume(w),k(e.exit("chunkFlow")),r=0,t.interrupt=void 0,l):(e.consume(w),$)}function k(w,P){const F=t.sliceStream(w);if(P&&F.push(null),w.previous=a,a&&(a.next=w),a=w,i.defineSkip(w.start),i.write(F),t.parser.lazy[w.start.line]){let D=i.events.length;for(;D--;)if(i.events[D][1].start.offset<o&&(!i.events[D][1].end||i.events[D][1].end.offset>o))return;const M=t.events.length;let q=M,I,V;for(;q--;)if(t.events[q][0]==="exit"&&t.events[q][1].type==="chunkFlow"){if(I){V=t.events[q][1].end;break}I=!0}for(g(r),D=M;D<t.events.length;)t.events[D][1].end={...V},D++;vn(t.events,q+1,0,t.events.slice(M)),t.events.length=D}}function g(w){let P=n.length;for(;P-- >w;){const F=n[P];t.containerState=F[1],F[0].exit.call(t,e)}n.length=w}function y(){i.write([null]),a=void 0,i=void 0,t.containerState._closeFlow=void 0}}function j6(e,t,n){return xe(e,e.attempt(this.parser.constructs.document,t,n),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function ld(e){if(e===null||kt(e)||q6(e))return 1;if(R6(e))return 2}function Uh(e,t,n){const r=[];let i=-1;for(;++i<e.length;){const a=e[i].resolveAll;a&&!r.includes(a)&&(t=a(t,n),r.push(a))}return t}const x0={name:"attention",resolveAll:H6,tokenize:W6};function H6(e,t){let n=-1,r,i,a,o,l,s,u,h;for(;++n<e.length;)if(e[n][0]==="enter"&&e[n][1].type==="attentionSequence"&&e[n][1]._close){for(r=n;r--;)if(e[r][0]==="exit"&&e[r][1].type==="attentionSequence"&&e[r][1]._open&&t.sliceSerialize(e[r][1]).charCodeAt(0)===t.sliceSerialize(e[n][1]).charCodeAt(0)){if((e[r][1]._close||e[n][1]._open)&&(e[n][1].end.offset-e[n][1].start.offset)%3&&!((e[r][1].end.offset-e[r][1].start.offset+e[n][1].end.offset-e[n][1].start.offset)%3))continue;s=e[r][1].end.offset-e[r][1].start.offset>1&&e[n][1].end.offset-e[n][1].start.offset>1?2:1;const m={...e[r][1].end},p={...e[n][1].start};sd(m,-s),sd(p,s),o={type:s>1?"strongSequence":"emphasisSequence",start:m,end:{...e[r][1].end}},l={type:s>1?"strongSequence":"emphasisSequence",start:{...e[n][1].start},end:p},a={type:s>1?"strongText":"emphasisText",start:{...e[r][1].end},end:{...e[n][1].start}},i={type:s>1?"strong":"emphasis",start:{...o.start},end:{...l.end}},e[r][1].end={...o.start},e[n][1].start={...l.end},u=[],e[r][1].end.offset-e[r][1].start.offset&&(u=Bt(u,[["enter",e[r][1],t],["exit",e[r][1],t]])),u=Bt(u,[["enter",i,t],["enter",o,t],["exit",o,t],["enter",a,t]]),u=Bt(u,Uh(t.parser.constructs.insideSpan.null,e.slice(r+1,n),t)),u=Bt(u,[["exit",a,t],["enter",l,t],["exit",l,t],["exit",i,t]]),e[n][1].end.offset-e[n][1].start.offset?(h=2,u=Bt(u,[["enter",e[n][1],t],["exit",e[n][1],t]])):h=0,vn(e,r-1,n-r+3,u),n=r+u.length-h-2;break}}for(n=-1;++n<e.length;)e[n][1].type==="attentionSequence"&&(e[n][1].type="data");return e}function W6(e,t){const n=this.parser.constructs.attentionMarkers.null,r=this.previous,i=ld(r);let a;return o;function o(s){return a=s,e.enter("attentionSequence"),l(s)}function l(s){if(s===a)return e.consume(s),l;const u=e.exit("attentionSequence"),h=ld(s),m=!h||h===2&&i||n.includes(s),p=!i||i===2&&h||n.includes(r);return u._open=!!(a===42?m:m&&(i||!p)),u._close=!!(a===42?p:p&&(h||!m)),t(s)}}function sd(e,t){e.column+=t,e.offset+=t,e._bufferIndex+=t}const U6={name:"autolink",tokenize:X6};function X6(e,t,n){let r=0;return i;function i(f){return e.enter("autolink"),e.enter("autolinkMarker"),e.consume(f),e.exit("autolinkMarker"),e.enter("autolinkProtocol"),a}function a(f){return pn(f)?(e.consume(f),o):f===64?n(f):u(f)}function o(f){return f===43||f===45||f===46||At(f)?(r=1,l(f)):u(f)}function l(f){return f===58?(e.consume(f),r=0,s):(f===43||f===45||f===46||At(f))&&r++<32?(e.consume(f),l):(r=0,u(f))}function s(f){return f===62?(e.exit("autolinkProtocol"),e.enter("autolinkMarker"),e.consume(f),e.exit("autolinkMarker"),e.exit("autolink"),t):f===null||f===32||f===60||v0(f)?n(f):(e.consume(f),s)}function u(f){return f===64?(e.consume(f),h):F6(f)?(e.consume(f),u):n(f)}function h(f){return At(f)?m(f):n(f)}function m(f){return f===46?(e.consume(f),r=0,h):f===62?(e.exit("autolinkProtocol").type="autolinkEmail",e.enter("autolinkMarker"),e.consume(f),e.exit("autolinkMarker"),e.exit("autolink"),t):p(f)}function p(f){if((f===45||At(f))&&r++<63){const v=f===45?p:m;return e.consume(f),v}return n(f)}}const as={partial:!0,tokenize:K6};function K6(e,t,n){return r;function r(a){return $e(a)?xe(e,i,"linePrefix")(a):i(a)}function i(a){return a===null||ee(a)?t(a):n(a)}}const Vb={continuation:{tokenize:G6},exit:Q6,name:"blockQuote",tokenize:V6};function V6(e,t,n){const r=this;return i;function i(o){if(o===62){const l=r.containerState;return l.open||(e.enter("blockQuote",{_container:!0}),l.open=!0),e.enter("blockQuotePrefix"),e.enter("blockQuoteMarker"),e.consume(o),e.exit("blockQuoteMarker"),a}return n(o)}function a(o){return $e(o)?(e.enter("blockQuotePrefixWhitespace"),e.consume(o),e.exit("blockQuotePrefixWhitespace"),e.exit("blockQuotePrefix"),t):(e.exit("blockQuotePrefix"),t(o))}}function G6(e,t,n){const r=this;return i;function i(o){return $e(o)?xe(e,a,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(o):a(o)}function a(o){return e.attempt(Vb,t,n)(o)}}function Q6(e){e.exit("blockQuote")}const Gb={name:"characterEscape",tokenize:Y6};function Y6(e,t,n){return r;function r(a){return e.enter("characterEscape"),e.enter("escapeMarker"),e.consume(a),e.exit("escapeMarker"),i}function i(a){return M6(a)?(e.enter("characterEscapeValue"),e.consume(a),e.exit("characterEscapeValue"),e.exit("characterEscape"),t):n(a)}}const Qb={name:"characterReference",tokenize:Z6};function Z6(e,t,n){const r=this;let i=0,a,o;return l;function l(m){return e.enter("characterReference"),e.enter("characterReferenceMarker"),e.consume(m),e.exit("characterReferenceMarker"),s}function s(m){return m===35?(e.enter("characterReferenceMarkerNumeric"),e.consume(m),e.exit("characterReferenceMarkerNumeric"),u):(e.enter("characterReferenceValue"),a=31,o=At,h(m))}function u(m){return m===88||m===120?(e.enter("characterReferenceMarkerHexadecimal"),e.consume(m),e.exit("characterReferenceMarkerHexadecimal"),e.enter("characterReferenceValue"),a=6,o=N6,h):(e.enter("characterReferenceValue"),a=7,o=$0,h(m))}function h(m){if(m===59&&i){const p=e.exit("characterReferenceValue");return o===At&&!Wh(r.sliceSerialize(p))?n(m):(e.enter("characterReferenceMarker"),e.consume(m),e.exit("characterReferenceMarker"),e.exit("characterReference"),t)}return o(m)&&i++<a?(e.consume(m),h):n(m)}}const ud={partial:!0,tokenize:e7},hd={concrete:!0,name:"codeFenced",tokenize:J6};function J6(e,t,n){const r=this,i={partial:!0,tokenize:F};let a=0,o=0,l;return s;function s(D){return u(D)}function u(D){const M=r.events[r.events.length-1];return a=M&&M[1].type==="linePrefix"?M[2].sliceSerialize(M[1],!0).length:0,l=D,e.enter("codeFenced"),e.enter("codeFencedFence"),e.enter("codeFencedFenceSequence"),h(D)}function h(D){return D===l?(o++,e.consume(D),h):o<3?n(D):(e.exit("codeFencedFenceSequence"),$e(D)?xe(e,m,"whitespace")(D):m(D))}function m(D){return D===null||ee(D)?(e.exit("codeFencedFence"),r.interrupt?t(D):e.check(ud,$,P)(D)):(e.enter("codeFencedFenceInfo"),e.enter("chunkString",{contentType:"string"}),p(D))}function p(D){return D===null||ee(D)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),m(D)):$e(D)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),xe(e,f,"whitespace")(D)):D===96&&D===l?n(D):(e.consume(D),p)}function f(D){return D===null||ee(D)?m(D):(e.enter("codeFencedFenceMeta"),e.enter("chunkString",{contentType:"string"}),v(D))}function v(D){return D===null||ee(D)?(e.exit("chunkString"),e.exit("codeFencedFenceMeta"),m(D)):D===96&&D===l?n(D):(e.consume(D),v)}function $(D){return e.attempt(i,P,k)(D)}function k(D){return e.enter("lineEnding"),e.consume(D),e.exit("lineEnding"),g}function g(D){return a>0&&$e(D)?xe(e,y,"linePrefix",a+1)(D):y(D)}function y(D){return D===null||ee(D)?e.check(ud,$,P)(D):(e.enter("codeFlowValue"),w(D))}function w(D){return D===null||ee(D)?(e.exit("codeFlowValue"),y(D)):(e.consume(D),w)}function P(D){return e.exit("codeFenced"),t(D)}function F(D,M,q){let I=0;return V;function V(ae){return D.enter("lineEnding"),D.consume(ae),D.exit("lineEnding"),X}function X(ae){return D.enter("codeFencedFence"),$e(ae)?xe(D,L,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(ae):L(ae)}function L(ae){return ae===l?(D.enter("codeFencedFenceSequence"),he(ae)):q(ae)}function he(ae){return ae===l?(I++,D.consume(ae),he):I>=o?(D.exit("codeFencedFenceSequence"),$e(ae)?xe(D,le,"whitespace")(ae):le(ae)):q(ae)}function le(ae){return ae===null||ee(ae)?(D.exit("codeFencedFence"),M(ae)):q(ae)}}}function e7(e,t,n){const r=this;return i;function i(o){return o===null?n(o):(e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),a)}function a(o){return r.parser.lazy[r.now().line]?n(o):t(o)}}const Gs={name:"codeIndented",tokenize:n7},t7={partial:!0,tokenize:r7};function n7(e,t,n){const r=this;return i;function i(u){return e.enter("codeIndented"),xe(e,a,"linePrefix",5)(u)}function a(u){const h=r.events[r.events.length-1];return h&&h[1].type==="linePrefix"&&h[2].sliceSerialize(h[1],!0).length>=4?o(u):n(u)}function o(u){return u===null?s(u):ee(u)?e.attempt(t7,o,s)(u):(e.enter("codeFlowValue"),l(u))}function l(u){return u===null||ee(u)?(e.exit("codeFlowValue"),o(u)):(e.consume(u),l)}function s(u){return e.exit("codeIndented"),t(u)}}function r7(e,t,n){const r=this;return i;function i(o){return r.parser.lazy[r.now().line]?n(o):ee(o)?(e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),i):xe(e,a,"linePrefix",5)(o)}function a(o){const l=r.events[r.events.length-1];return l&&l[1].type==="linePrefix"&&l[2].sliceSerialize(l[1],!0).length>=4?t(o):ee(o)?i(o):n(o)}}const i7={name:"codeText",previous:o7,resolve:a7,tokenize:l7};function a7(e){let t=e.length-4,n=3,r,i;if((e[n][1].type==="lineEnding"||e[n][1].type==="space")&&(e[t][1].type==="lineEnding"||e[t][1].type==="space")){for(r=n;++r<t;)if(e[r][1].type==="codeTextData"){e[n][1].type="codeTextPadding",e[t][1].type="codeTextPadding",n+=2,t-=2;break}}for(r=n-1,t++;++r<=t;)i===void 0?r!==t&&e[r][1].type!=="lineEnding"&&(i=r):(r===t||e[r][1].type==="lineEnding")&&(e[i][1].type="codeTextData",r!==i+2&&(e[i][1].end=e[r-1][1].end,e.splice(i+2,r-i-2),t-=r-i-2,r=i+2),i=void 0);return e}function o7(e){return e!==96||this.events[this.events.length-1][1].type==="characterEscape"}function l7(e,t,n){let r=0,i,a;return o;function o(m){return e.enter("codeText"),e.enter("codeTextSequence"),l(m)}function l(m){return m===96?(e.consume(m),r++,l):(e.exit("codeTextSequence"),s(m))}function s(m){return m===null?n(m):m===32?(e.enter("space"),e.consume(m),e.exit("space"),s):m===96?(a=e.enter("codeTextSequence"),i=0,h(m)):ee(m)?(e.enter("lineEnding"),e.consume(m),e.exit("lineEnding"),s):(e.enter("codeTextData"),u(m))}function u(m){return m===null||m===32||m===96||ee(m)?(e.exit("codeTextData"),s(m)):(e.consume(m),u)}function h(m){return m===96?(e.consume(m),i++,h):i===r?(e.exit("codeTextSequence"),e.exit("codeText"),t(m)):(a.type="codeTextData",u(m))}}class s7{constructor(t){this.left=t?[...t]:[],this.right=[]}get(t){if(t<0||t>=this.left.length+this.right.length)throw new RangeError("Cannot access index `"+t+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return t<this.left.length?this.left[t]:this.right[this.right.length-t+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(t,n){const r=n??Number.POSITIVE_INFINITY;return r<this.left.length?this.left.slice(t,r):t>this.left.length?this.right.slice(this.right.length-r+this.left.length,this.right.length-t+this.left.length).reverse():this.left.slice(t).concat(this.right.slice(this.right.length-r+this.left.length).reverse())}splice(t,n,r){const i=n||0;this.setCursor(Math.trunc(t));const a=this.right.splice(this.right.length-i,Number.POSITIVE_INFINITY);return r&&oa(this.left,r),a.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(t){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(t)}pushMany(t){this.setCursor(Number.POSITIVE_INFINITY),oa(this.left,t)}unshift(t){this.setCursor(0),this.right.push(t)}unshiftMany(t){this.setCursor(0),oa(this.right,t.reverse())}setCursor(t){if(!(t===this.left.length||t>this.left.length&&this.right.length===0||t<0&&this.left.length===0))if(t<this.left.length){const n=this.left.splice(t,Number.POSITIVE_INFINITY);oa(this.right,n.reverse())}else{const n=this.right.splice(this.left.length+this.right.length-t,Number.POSITIVE_INFINITY);oa(this.left,n.reverse())}}}function oa(e,t){let n=0;if(t.length<1e4)e.push(...t);else for(;n<t.length;)e.push(...t.slice(n,n+1e4)),n+=1e4}function Yb(e){const t={};let n=-1,r,i,a,o,l,s,u;const h=new s7(e);for(;++n<h.length;){for(;n in t;)n=t[n];if(r=h.get(n),n&&r[1].type==="chunkFlow"&&h.get(n-1)[1].type==="listItemPrefix"&&(s=r[1]._tokenizer.events,a=0,a<s.length&&s[a][1].type==="lineEndingBlank"&&(a+=2),a<s.length&&s[a][1].type==="content"))for(;++a<s.length&&s[a][1].type!=="content";)s[a][1].type==="chunkText"&&(s[a][1]._isInFirstContentOfListItem=!0,a++);if(r[0]==="enter")r[1].contentType&&(Object.assign(t,u7(h,n)),n=t[n],u=!0);else if(r[1]._container){for(a=n,i=void 0;a--&&(o=h.get(a),o[1].type==="lineEnding"||o[1].type==="lineEndingBlank");)o[0]==="enter"&&(i&&(h.get(i)[1].type="lineEndingBlank"),o[1].type="lineEnding",i=a);i&&(r[1].end={...h.get(i)[1].start},l=h.slice(i,n),l.unshift(r),h.splice(i,n-i+1,l))}}return vn(e,0,Number.POSITIVE_INFINITY,h.slice(0)),!u}function u7(e,t){const n=e.get(t)[1],r=e.get(t)[2];let i=t-1;const a=[],o=n._tokenizer||r.parser[n.contentType](n.start),l=o.events,s=[],u={};let h,m,p=-1,f=n,v=0,$=0;const k=[$];for(;f;){for(;e.get(++i)[1]!==f;);a.push(i),f._tokenizer||(h=r.sliceStream(f),f.next||h.push(null),m&&o.defineSkip(f.start),f._isInFirstContentOfListItem&&(o._gfmTasklistFirstContentOfListItem=!0),o.write(h),f._isInFirstContentOfListItem&&(o._gfmTasklistFirstContentOfListItem=void 0)),m=f,f=f.next}for(f=n;++p<l.length;)l[p][0]==="exit"&&l[p-1][0]==="enter"&&l[p][1].type===l[p-1][1].type&&l[p][1].start.line!==l[p][1].end.line&&($=p+1,k.push($),f._tokenizer=void 0,f.previous=void 0,f=f.next);for(o.events=[],f?(f._tokenizer=void 0,f.previous=void 0):k.pop(),p=k.length;p--;){const g=l.slice(k[p],k[p+1]),y=a.pop();s.push([y,y+g.length-1]),e.splice(y,2,g)}for(s.reverse(),p=-1;++p<s.length;)u[v+s[p][0]]=v+s[p][1],v+=s[p][1]-s[p][0]-1;return u}const h7={resolve:m7,tokenize:d7},c7={partial:!0,tokenize:f7};function m7(e){return Yb(e),e}function d7(e,t){let n;return r;function r(l){return e.enter("content"),n=e.enter("chunkContent",{contentType:"content"}),i(l)}function i(l){return l===null?a(l):ee(l)?e.check(c7,o,a)(l):(e.consume(l),i)}function a(l){return e.exit("chunkContent"),e.exit("content"),t(l)}function o(l){return e.consume(l),e.exit("chunkContent"),n.next=e.enter("chunkContent",{contentType:"content",previous:n}),n=n.next,i}}function f7(e,t,n){const r=this;return i;function i(o){return e.exit("chunkContent"),e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),xe(e,a,"linePrefix")}function a(o){if(o===null||ee(o))return n(o);const l=r.events[r.events.length-1];return!r.parser.constructs.disable.null.includes("codeIndented")&&l&&l[1].type==="linePrefix"&&l[2].sliceSerialize(l[1],!0).length>=4?t(o):e.interrupt(r.parser.constructs.flow,n,t)(o)}}function Zb(e,t,n,r,i,a,o,l,s){const u=s||Number.POSITIVE_INFINITY;let h=0;return m;function m(g){return g===60?(e.enter(r),e.enter(i),e.enter(a),e.consume(g),e.exit(a),p):g===null||g===32||g===41||v0(g)?n(g):(e.enter(r),e.enter(o),e.enter(l),e.enter("chunkString",{contentType:"string"}),$(g))}function p(g){return g===62?(e.enter(a),e.consume(g),e.exit(a),e.exit(i),e.exit(r),t):(e.enter(l),e.enter("chunkString",{contentType:"string"}),f(g))}function f(g){return g===62?(e.exit("chunkString"),e.exit(l),p(g)):g===null||g===60||ee(g)?n(g):(e.consume(g),g===92?v:f)}function v(g){return g===60||g===62||g===92?(e.consume(g),f):f(g)}function $(g){return!h&&(g===null||g===41||kt(g))?(e.exit("chunkString"),e.exit(l),e.exit(o),e.exit(r),t(g)):h<u&&g===40?(e.consume(g),h++,$):g===41?(e.consume(g),h--,$):g===null||g===32||g===40||v0(g)?n(g):(e.consume(g),g===92?k:$)}function k(g){return g===40||g===41||g===92?(e.consume(g),$):$(g)}}function Jb(e,t,n,r,i,a){const o=this;let l=0,s;return u;function u(f){return e.enter(r),e.enter(i),e.consume(f),e.exit(i),e.enter(a),h}function h(f){return l>999||f===null||f===91||f===93&&!s||f===94&&!l&&"_hiddenFootnoteSupport"in o.parser.constructs?n(f):f===93?(e.exit(a),e.enter(i),e.consume(f),e.exit(i),e.exit(r),t):ee(f)?(e.enter("lineEnding"),e.consume(f),e.exit("lineEnding"),h):(e.enter("chunkString",{contentType:"string"}),m(f))}function m(f){return f===null||f===91||f===93||ee(f)||l++>999?(e.exit("chunkString"),h(f)):(e.consume(f),s||(s=!$e(f)),f===92?p:m)}function p(f){return f===91||f===92||f===93?(e.consume(f),l++,m):m(f)}}function eg(e,t,n,r,i,a){let o;return l;function l(p){return p===34||p===39||p===40?(e.enter(r),e.enter(i),e.consume(p),e.exit(i),o=p===40?41:p,s):n(p)}function s(p){return p===o?(e.enter(i),e.consume(p),e.exit(i),e.exit(r),t):(e.enter(a),u(p))}function u(p){return p===o?(e.exit(a),s(o)):p===null?n(p):ee(p)?(e.enter("lineEnding"),e.consume(p),e.exit("lineEnding"),xe(e,u,"linePrefix")):(e.enter("chunkString",{contentType:"string"}),h(p))}function h(p){return p===o||p===null||ee(p)?(e.exit("chunkString"),u(p)):(e.consume(p),p===92?m:h)}function m(p){return p===o||p===92?(e.consume(p),h):h(p)}}function _a(e,t){let n;return r;function r(i){return ee(i)?(e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),n=!0,r):$e(i)?xe(e,r,n?"linePrefix":"lineSuffix")(i):t(i)}}const p7={name:"definition",tokenize:g7},b7={partial:!0,tokenize:y7};function g7(e,t,n){const r=this;let i;return a;function a(f){return e.enter("definition"),o(f)}function o(f){return Jb.call(r,e,l,n,"definitionLabel","definitionLabelMarker","definitionLabelString")(f)}function l(f){return i=Si(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)),f===58?(e.enter("definitionMarker"),e.consume(f),e.exit("definitionMarker"),s):n(f)}function s(f){return kt(f)?_a(e,u)(f):u(f)}function u(f){return Zb(e,h,n,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(f)}function h(f){return e.attempt(b7,m,m)(f)}function m(f){return $e(f)?xe(e,p,"whitespace")(f):p(f)}function p(f){return f===null||ee(f)?(e.exit("definition"),r.parser.defined.push(i),t(f)):n(f)}}function y7(e,t,n){return r;function r(l){return kt(l)?_a(e,i)(l):n(l)}function i(l){return eg(e,a,n,"definitionTitle","definitionTitleMarker","definitionTitleString")(l)}function a(l){return $e(l)?xe(e,o,"whitespace")(l):o(l)}function o(l){return l===null||ee(l)?t(l):n(l)}}const v7={name:"hardBreakEscape",tokenize:$7};function $7(e,t,n){return r;function r(a){return e.enter("hardBreakEscape"),e.consume(a),i}function i(a){return ee(a)?(e.exit("hardBreakEscape"),t(a)):n(a)}}const x7={name:"headingAtx",resolve:w7,tokenize:_7};function w7(e,t){let n=e.length-2,r=3,i,a;return e[r][1].type==="whitespace"&&(r+=2),n-2>r&&e[n][1].type==="whitespace"&&(n-=2),e[n][1].type==="atxHeadingSequence"&&(r===n-1||n-4>r&&e[n-2][1].type==="whitespace")&&(n-=r+1===n?2:4),n>r&&(i={type:"atxHeadingText",start:e[r][1].start,end:e[n][1].end},a={type:"chunkText",start:e[r][1].start,end:e[n][1].end,contentType:"text"},vn(e,r,n-r+1,[["enter",i,t],["enter",a,t],["exit",a,t],["exit",i,t]])),e}function _7(e,t,n){let r=0;return i;function i(h){return e.enter("atxHeading"),a(h)}function a(h){return e.enter("atxHeadingSequence"),o(h)}function o(h){return h===35&&r++<6?(e.consume(h),o):h===null||kt(h)?(e.exit("atxHeadingSequence"),l(h)):n(h)}function l(h){return h===35?(e.enter("atxHeadingSequence"),s(h)):h===null||ee(h)?(e.exit("atxHeading"),t(h)):$e(h)?xe(e,l,"whitespace")(h):(e.enter("atxHeadingText"),u(h))}function s(h){return h===35?(e.consume(h),s):(e.exit("atxHeadingSequence"),l(h))}function u(h){return h===null||h===35||kt(h)?(e.exit("atxHeadingText"),l(h)):(e.consume(h),u)}}const k7=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],cd=["pre","script","style","textarea"],S7={concrete:!0,name:"htmlFlow",resolveTo:D7,tokenize:z7},E7={partial:!0,tokenize:A7},C7={partial:!0,tokenize:P7};function D7(e){let t=e.length;for(;t--&&!(e[t][0]==="enter"&&e[t][1].type==="htmlFlow"););return t>1&&e[t-2][1].type==="linePrefix"&&(e[t][1].start=e[t-2][1].start,e[t+1][1].start=e[t-2][1].start,e.splice(t-2,2)),e}function z7(e,t,n){const r=this;let i,a,o,l,s;return u;function u(C){return h(C)}function h(C){return e.enter("htmlFlow"),e.enter("htmlFlowData"),e.consume(C),m}function m(C){return C===33?(e.consume(C),p):C===47?(e.consume(C),a=!0,$):C===63?(e.consume(C),i=3,r.interrupt?t:_):pn(C)?(e.consume(C),o=String.fromCharCode(C),k):n(C)}function p(C){return C===45?(e.consume(C),i=2,f):C===91?(e.consume(C),i=5,l=0,v):pn(C)?(e.consume(C),i=4,r.interrupt?t:_):n(C)}function f(C){return C===45?(e.consume(C),r.interrupt?t:_):n(C)}function v(C){const Ne="CDATA[";return C===Ne.charCodeAt(l++)?(e.consume(C),l===Ne.length?r.interrupt?t:L:v):n(C)}function $(C){return pn(C)?(e.consume(C),o=String.fromCharCode(C),k):n(C)}function k(C){if(C===null||C===47||C===62||kt(C)){const Ne=C===47,Ye=o.toLowerCase();return!Ne&&!a&&cd.includes(Ye)?(i=1,r.interrupt?t(C):L(C)):k7.includes(o.toLowerCase())?(i=6,Ne?(e.consume(C),g):r.interrupt?t(C):L(C)):(i=7,r.interrupt&&!r.parser.lazy[r.now().line]?n(C):a?y(C):w(C))}return C===45||At(C)?(e.consume(C),o+=String.fromCharCode(C),k):n(C)}function g(C){return C===62?(e.consume(C),r.interrupt?t:L):n(C)}function y(C){return $e(C)?(e.consume(C),y):V(C)}function w(C){return C===47?(e.consume(C),V):C===58||C===95||pn(C)?(e.consume(C),P):$e(C)?(e.consume(C),w):V(C)}function P(C){return C===45||C===46||C===58||C===95||At(C)?(e.consume(C),P):F(C)}function F(C){return C===61?(e.consume(C),D):$e(C)?(e.consume(C),F):w(C)}function D(C){return C===null||C===60||C===61||C===62||C===96?n(C):C===34||C===39?(e.consume(C),s=C,M):$e(C)?(e.consume(C),D):q(C)}function M(C){return C===s?(e.consume(C),s=null,I):C===null||ee(C)?n(C):(e.consume(C),M)}function q(C){return C===null||C===34||C===39||C===47||C===60||C===61||C===62||C===96||kt(C)?F(C):(e.consume(C),q)}function I(C){return C===47||C===62||$e(C)?w(C):n(C)}function V(C){return C===62?(e.consume(C),X):n(C)}function X(C){return C===null||ee(C)?L(C):$e(C)?(e.consume(C),X):n(C)}function L(C){return C===45&&i===2?(e.consume(C),be):C===60&&i===1?(e.consume(C),ve):C===62&&i===4?(e.consume(C),ne):C===63&&i===3?(e.consume(C),_):C===93&&i===5?(e.consume(C),J):ee(C)&&(i===6||i===7)?(e.exit("htmlFlowData"),e.check(E7,ce,he)(C)):C===null||ee(C)?(e.exit("htmlFlowData"),he(C)):(e.consume(C),L)}function he(C){return e.check(C7,le,ce)(C)}function le(C){return e.enter("lineEnding"),e.consume(C),e.exit("lineEnding"),ae}function ae(C){return C===null||ee(C)?he(C):(e.enter("htmlFlowData"),L(C))}function be(C){return C===45?(e.consume(C),_):L(C)}function ve(C){return C===47?(e.consume(C),o="",U):L(C)}function U(C){if(C===62){const Ne=o.toLowerCase();return cd.includes(Ne)?(e.consume(C),ne):L(C)}return pn(C)&&o.length<8?(e.consume(C),o+=String.fromCharCode(C),U):L(C)}function J(C){return C===93?(e.consume(C),_):L(C)}function _(C){return C===62?(e.consume(C),ne):C===45&&i===2?(e.consume(C),_):L(C)}function ne(C){return C===null||ee(C)?(e.exit("htmlFlowData"),ce(C)):(e.consume(C),ne)}function ce(C){return e.exit("htmlFlow"),t(C)}}function P7(e,t,n){const r=this;return i;function i(o){return ee(o)?(e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),a):n(o)}function a(o){return r.parser.lazy[r.now().line]?n(o):t(o)}}function A7(e,t,n){return r;function r(i){return e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),e.attempt(as,t,n)}}const T7={name:"htmlText",tokenize:F7};function F7(e,t,n){const r=this;let i,a,o;return l;function l(_){return e.enter("htmlText"),e.enter("htmlTextData"),e.consume(_),s}function s(_){return _===33?(e.consume(_),u):_===47?(e.consume(_),F):_===63?(e.consume(_),w):pn(_)?(e.consume(_),q):n(_)}function u(_){return _===45?(e.consume(_),h):_===91?(e.consume(_),a=0,v):pn(_)?(e.consume(_),y):n(_)}function h(_){return _===45?(e.consume(_),f):n(_)}function m(_){return _===null?n(_):_===45?(e.consume(_),p):ee(_)?(o=m,ve(_)):(e.consume(_),m)}function p(_){return _===45?(e.consume(_),f):m(_)}function f(_){return _===62?be(_):_===45?p(_):m(_)}function v(_){const ne="CDATA[";return _===ne.charCodeAt(a++)?(e.consume(_),a===ne.length?$:v):n(_)}function $(_){return _===null?n(_):_===93?(e.consume(_),k):ee(_)?(o=$,ve(_)):(e.consume(_),$)}function k(_){return _===93?(e.consume(_),g):$(_)}function g(_){return _===62?be(_):_===93?(e.consume(_),g):$(_)}function y(_){return _===null||_===62?be(_):ee(_)?(o=y,ve(_)):(e.consume(_),y)}function w(_){return _===null?n(_):_===63?(e.consume(_),P):ee(_)?(o=w,ve(_)):(e.consume(_),w)}function P(_){return _===62?be(_):w(_)}function F(_){return pn(_)?(e.consume(_),D):n(_)}function D(_){return _===45||At(_)?(e.consume(_),D):M(_)}function M(_){return ee(_)?(o=M,ve(_)):$e(_)?(e.consume(_),M):be(_)}function q(_){return _===45||At(_)?(e.consume(_),q):_===47||_===62||kt(_)?I(_):n(_)}function I(_){return _===47?(e.consume(_),be):_===58||_===95||pn(_)?(e.consume(_),V):ee(_)?(o=I,ve(_)):$e(_)?(e.consume(_),I):be(_)}function V(_){return _===45||_===46||_===58||_===95||At(_)?(e.consume(_),V):X(_)}function X(_){return _===61?(e.consume(_),L):ee(_)?(o=X,ve(_)):$e(_)?(e.consume(_),X):I(_)}function L(_){return _===null||_===60||_===61||_===62||_===96?n(_):_===34||_===39?(e.consume(_),i=_,he):ee(_)?(o=L,ve(_)):$e(_)?(e.consume(_),L):(e.consume(_),le)}function he(_){return _===i?(e.consume(_),i=void 0,ae):_===null?n(_):ee(_)?(o=he,ve(_)):(e.consume(_),he)}function le(_){return _===null||_===34||_===39||_===60||_===61||_===96?n(_):_===47||_===62||kt(_)?I(_):(e.consume(_),le)}function ae(_){return _===47||_===62||kt(_)?I(_):n(_)}function be(_){return _===62?(e.consume(_),e.exit("htmlTextData"),e.exit("htmlText"),t):n(_)}function ve(_){return e.exit("htmlTextData"),e.enter("lineEnding"),e.consume(_),e.exit("lineEnding"),U}function U(_){return $e(_)?xe(e,J,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(_):J(_)}function J(_){return e.enter("htmlTextData"),o(_)}}const Xh={name:"labelEnd",resolveAll:q7,resolveTo:I7,tokenize:B7},N7={tokenize:L7},M7={tokenize:O7},R7={tokenize:j7};function q7(e){let t=-1;const n=[];for(;++t<e.length;){const r=e[t][1];if(n.push(e[t]),r.type==="labelImage"||r.type==="labelLink"||r.type==="labelEnd"){const i=r.type==="labelImage"?4:2;r.type="data",t+=i}}return e.length!==n.length&&vn(e,0,e.length,n),e}function I7(e,t){let n=e.length,r=0,i,a,o,l;for(;n--;)if(i=e[n][1],a){if(i.type==="link"||i.type==="labelLink"&&i._inactive)break;e[n][0]==="enter"&&i.type==="labelLink"&&(i._inactive=!0)}else if(o){if(e[n][0]==="enter"&&(i.type==="labelImage"||i.type==="labelLink")&&!i._balanced&&(a=n,i.type!=="labelLink")){r=2;break}}else i.type==="labelEnd"&&(o=n);const s={type:e[a][1].type==="labelLink"?"link":"image",start:{...e[a][1].start},end:{...e[e.length-1][1].end}},u={type:"label",start:{...e[a][1].start},end:{...e[o][1].end}},h={type:"labelText",start:{...e[a+r+2][1].end},end:{...e[o-2][1].start}};return l=[["enter",s,t],["enter",u,t]],l=Bt(l,e.slice(a+1,a+r+3)),l=Bt(l,[["enter",h,t]]),l=Bt(l,Uh(t.parser.constructs.insideSpan.null,e.slice(a+r+4,o-3),t)),l=Bt(l,[["exit",h,t],e[o-2],e[o-1],["exit",u,t]]),l=Bt(l,e.slice(o+1)),l=Bt(l,[["exit",s,t]]),vn(e,a,e.length,l),e}function B7(e,t,n){const r=this;let i=r.events.length,a,o;for(;i--;)if((r.events[i][1].type==="labelImage"||r.events[i][1].type==="labelLink")&&!r.events[i][1]._balanced){a=r.events[i][1];break}return l;function l(p){return a?a._inactive?m(p):(o=r.parser.defined.includes(Si(r.sliceSerialize({start:a.end,end:r.now()}))),e.enter("labelEnd"),e.enter("labelMarker"),e.consume(p),e.exit("labelMarker"),e.exit("labelEnd"),s):n(p)}function s(p){return p===40?e.attempt(N7,h,o?h:m)(p):p===91?e.attempt(M7,h,o?u:m)(p):o?h(p):m(p)}function u(p){return e.attempt(R7,h,m)(p)}function h(p){return t(p)}function m(p){return a._balanced=!0,n(p)}}function L7(e,t,n){return r;function r(m){return e.enter("resource"),e.enter("resourceMarker"),e.consume(m),e.exit("resourceMarker"),i}function i(m){return kt(m)?_a(e,a)(m):a(m)}function a(m){return m===41?h(m):Zb(e,o,l,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(m)}function o(m){return kt(m)?_a(e,s)(m):h(m)}function l(m){return n(m)}function s(m){return m===34||m===39||m===40?eg(e,u,n,"resourceTitle","resourceTitleMarker","resourceTitleString")(m):h(m)}function u(m){return kt(m)?_a(e,h)(m):h(m)}function h(m){return m===41?(e.enter("resourceMarker"),e.consume(m),e.exit("resourceMarker"),e.exit("resource"),t):n(m)}}function O7(e,t,n){const r=this;return i;function i(l){return Jb.call(r,e,a,o,"reference","referenceMarker","referenceString")(l)}function a(l){return r.parser.defined.includes(Si(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)))?t(l):n(l)}function o(l){return n(l)}}function j7(e,t,n){return r;function r(a){return e.enter("reference"),e.enter("referenceMarker"),e.consume(a),e.exit("referenceMarker"),i}function i(a){return a===93?(e.enter("referenceMarker"),e.consume(a),e.exit("referenceMarker"),e.exit("reference"),t):n(a)}}const H7={name:"labelStartImage",resolveAll:Xh.resolveAll,tokenize:W7};function W7(e,t,n){const r=this;return i;function i(l){return e.enter("labelImage"),e.enter("labelImageMarker"),e.consume(l),e.exit("labelImageMarker"),a}function a(l){return l===91?(e.enter("labelMarker"),e.consume(l),e.exit("labelMarker"),e.exit("labelImage"),o):n(l)}function o(l){return l===94&&"_hiddenFootnoteSupport"in r.parser.constructs?n(l):t(l)}}const U7={name:"labelStartLink",resolveAll:Xh.resolveAll,tokenize:X7};function X7(e,t,n){const r=this;return i;function i(o){return e.enter("labelLink"),e.enter("labelMarker"),e.consume(o),e.exit("labelMarker"),e.exit("labelLink"),a}function a(o){return o===94&&"_hiddenFootnoteSupport"in r.parser.constructs?n(o):t(o)}}const Qs={name:"lineEnding",tokenize:K7};function K7(e,t){return n;function n(r){return e.enter("lineEnding"),e.consume(r),e.exit("lineEnding"),xe(e,t,"linePrefix")}}const el={name:"thematicBreak",tokenize:V7};function V7(e,t,n){let r=0,i;return a;function a(u){return e.enter("thematicBreak"),o(u)}function o(u){return i=u,l(u)}function l(u){return u===i?(e.enter("thematicBreakSequence"),s(u)):r>=3&&(u===null||ee(u))?(e.exit("thematicBreak"),t(u)):n(u)}function s(u){return u===i?(e.consume(u),r++,s):(e.exit("thematicBreakSequence"),$e(u)?xe(e,l,"whitespace")(u):l(u))}}const gt={continuation:{tokenize:Z7},exit:ex,name:"list",tokenize:Y7},G7={partial:!0,tokenize:tx},Q7={partial:!0,tokenize:J7};function Y7(e,t,n){const r=this,i=r.events[r.events.length-1];let a=i&&i[1].type==="linePrefix"?i[2].sliceSerialize(i[1],!0).length:0,o=0;return l;function l(f){const v=r.containerState.type||(f===42||f===43||f===45?"listUnordered":"listOrdered");if(v==="listUnordered"?!r.containerState.marker||f===r.containerState.marker:$0(f)){if(r.containerState.type||(r.containerState.type=v,e.enter(v,{_container:!0})),v==="listUnordered")return e.enter("listItemPrefix"),f===42||f===45?e.check(el,n,u)(f):u(f);if(!r.interrupt||f===49)return e.enter("listItemPrefix"),e.enter("listItemValue"),s(f)}return n(f)}function s(f){return $0(f)&&++o<10?(e.consume(f),s):(!r.interrupt||o<2)&&(r.containerState.marker?f===r.containerState.marker:f===41||f===46)?(e.exit("listItemValue"),u(f)):n(f)}function u(f){return e.enter("listItemMarker"),e.consume(f),e.exit("listItemMarker"),r.containerState.marker=r.containerState.marker||f,e.check(as,r.interrupt?n:h,e.attempt(G7,p,m))}function h(f){return r.containerState.initialBlankLine=!0,a++,p(f)}function m(f){return $e(f)?(e.enter("listItemPrefixWhitespace"),e.consume(f),e.exit("listItemPrefixWhitespace"),p):n(f)}function p(f){return r.containerState.size=a+r.sliceSerialize(e.exit("listItemPrefix"),!0).length,t(f)}}function Z7(e,t,n){const r=this;return r.containerState._closeFlow=void 0,e.check(as,i,a);function i(l){return r.containerState.furtherBlankLines=r.containerState.furtherBlankLines||r.containerState.initialBlankLine,xe(e,t,"listItemIndent",r.containerState.size+1)(l)}function a(l){return r.containerState.furtherBlankLines||!$e(l)?(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,o(l)):(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,e.attempt(Q7,t,o)(l))}function o(l){return r.containerState._closeFlow=!0,r.interrupt=void 0,xe(e,e.attempt(gt,t,n),"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(l)}}function J7(e,t,n){const r=this;return xe(e,i,"listItemIndent",r.containerState.size+1);function i(a){const o=r.events[r.events.length-1];return o&&o[1].type==="listItemIndent"&&o[2].sliceSerialize(o[1],!0).length===r.containerState.size?t(a):n(a)}}function ex(e){e.exit(this.containerState.type)}function tx(e,t,n){const r=this;return xe(e,i,"listItemPrefixWhitespace",r.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function i(a){const o=r.events[r.events.length-1];return!$e(a)&&o&&o[1].type==="listItemPrefixWhitespace"?t(a):n(a)}}const md={name:"setextUnderline",resolveTo:nx,tokenize:rx};function nx(e,t){let n=e.length,r,i,a;for(;n--;)if(e[n][0]==="enter"){if(e[n][1].type==="content"){r=n;break}e[n][1].type==="paragraph"&&(i=n)}else e[n][1].type==="content"&&e.splice(n,1),!a&&e[n][1].type==="definition"&&(a=n);const o={type:"setextHeading",start:{...e[i][1].start},end:{...e[e.length-1][1].end}};return e[i][1].type="setextHeadingText",a?(e.splice(i,0,["enter",o,t]),e.splice(a+1,0,["exit",e[r][1],t]),e[r][1].end={...e[a][1].end}):e[r][1]=o,e.push(["exit",o,t]),e}function rx(e,t,n){const r=this;let i;return a;function a(u){let h=r.events.length,m;for(;h--;)if(r.events[h][1].type!=="lineEnding"&&r.events[h][1].type!=="linePrefix"&&r.events[h][1].type!=="content"){m=r.events[h][1].type==="paragraph";break}return!r.parser.lazy[r.now().line]&&(r.interrupt||m)?(e.enter("setextHeadingLine"),i=u,o(u)):n(u)}function o(u){return e.enter("setextHeadingLineSequence"),l(u)}function l(u){return u===i?(e.consume(u),l):(e.exit("setextHeadingLineSequence"),$e(u)?xe(e,s,"lineSuffix")(u):s(u))}function s(u){return u===null||ee(u)?(e.exit("setextHeadingLine"),t(u)):n(u)}}const ix={tokenize:ax};function ax(e){const t=this,n=e.attempt(as,r,e.attempt(this.parser.constructs.flowInitial,i,xe(e,e.attempt(this.parser.constructs.flow,i,e.attempt(h7,i)),"linePrefix")));return n;function r(a){if(a===null){e.consume(a);return}return e.enter("lineEndingBlank"),e.consume(a),e.exit("lineEndingBlank"),t.currentConstruct=void 0,n}function i(a){if(a===null){e.consume(a);return}return e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),t.currentConstruct=void 0,n}}const ox={resolveAll:ng()},lx=tg("string"),sx=tg("text");function tg(e){return{resolveAll:ng(e==="text"?ux:void 0),tokenize:t};function t(n){const r=this,i=this.parser.constructs[e],a=n.attempt(i,o,l);return o;function o(h){return u(h)?a(h):l(h)}function l(h){if(h===null){n.consume(h);return}return n.enter("data"),n.consume(h),s}function s(h){return u(h)?(n.exit("data"),a(h)):(n.consume(h),s)}function u(h){if(h===null)return!0;const m=i[h];let p=-1;if(m)for(;++p<m.length;){const f=m[p];if(!f.previous||f.previous.call(r,r.previous))return!0}return!1}}}function ng(e){return t;function t(n,r){let i=-1,a;for(;++i<=n.length;)a===void 0?n[i]&&n[i][1].type==="data"&&(a=i,i++):(!n[i]||n[i][1].type!=="data")&&(i!==a+2&&(n[a][1].end=n[i-1][1].end,n.splice(a+2,i-a-2),i=a+2),a=void 0);return e?e(n,r):n}}function ux(e,t){let n=0;for(;++n<=e.length;)if((n===e.length||e[n][1].type==="lineEnding")&&e[n-1][1].type==="data"){const r=e[n-1][1],i=t.sliceStream(r);let a=i.length,o=-1,l=0,s;for(;a--;){const u=i[a];if(typeof u=="string"){for(o=u.length;u.charCodeAt(o-1)===32;)l++,o--;if(o)break;o=-1}else if(u===-2)s=!0,l++;else if(u!==-1){a++;break}}if(l){const u={type:n===e.length||s||l<2?"lineSuffix":"hardBreakTrailing",start:{_bufferIndex:a?o:r.start._bufferIndex+o,_index:r.start._index+a,line:r.end.line,column:r.end.column-l,offset:r.end.offset-l},end:{...r.end}};r.end={...u.start},r.start.offset===r.end.offset?Object.assign(r,u):(e.splice(n,0,["enter",u,t],["exit",u,t]),n+=2)}n++}return e}const hx={42:gt,43:gt,45:gt,48:gt,49:gt,50:gt,51:gt,52:gt,53:gt,54:gt,55:gt,56:gt,57:gt,62:Vb},cx={91:p7},mx={[-2]:Gs,[-1]:Gs,32:Gs},dx={35:x7,42:el,45:[md,el],60:S7,61:md,95:el,96:hd,126:hd},fx={38:Qb,92:Gb},px={[-5]:Qs,[-4]:Qs,[-3]:Qs,33:H7,38:Qb,42:x0,60:[U6,T7],91:U7,92:[v7,Gb],93:Xh,95:x0,96:i7},bx={null:[x0,ox]},gx={null:[42,95]},yx={null:[]},vx=Object.freeze(Object.defineProperty({__proto__:null,attentionMarkers:gx,contentInitial:cx,disable:yx,document:hx,flow:dx,flowInitial:mx,insideSpan:bx,string:fx,text:px},Symbol.toStringTag,{value:"Module"}));function $x(e,t,n){let r={_bufferIndex:-1,_index:0,line:n&&n.line||1,column:n&&n.column||1,offset:n&&n.offset||0};const i={},a=[];let o=[],l=[];const s={attempt:M(F),check:M(D),consume:y,enter:w,exit:P,interrupt:M(D,{interrupt:!0})},u={code:null,containerState:{},defineSkip:$,events:[],now:v,parser:e,previous:null,sliceSerialize:p,sliceStream:f,write:m};let h=t.tokenize.call(u,s);return t.resolveAll&&a.push(t),u;function m(X){return o=Bt(o,X),k(),o[o.length-1]!==null?[]:(q(t,0),u.events=Uh(a,u.events,u),u.events)}function p(X,L){return wx(f(X),L)}function f(X){return xx(o,X)}function v(){const{_bufferIndex:X,_index:L,line:he,column:le,offset:ae}=r;return{_bufferIndex:X,_index:L,line:he,column:le,offset:ae}}function $(X){i[X.line]=X.column,V()}function k(){let X;for(;r._index<o.length;){const L=o[r._index];if(typeof L=="string")for(X=r._index,r._bufferIndex<0&&(r._bufferIndex=0);r._index===X&&r._bufferIndex<L.length;)g(L.charCodeAt(r._bufferIndex));else g(L)}}function g(X){h=h(X)}function y(X){ee(X)?(r.line++,r.column=1,r.offset+=X===-3?2:1,V()):X!==-1&&(r.column++,r.offset++),r._bufferIndex<0?r._index++:(r._bufferIndex++,r._bufferIndex===o[r._index].length&&(r._bufferIndex=-1,r._index++)),u.previous=X}function w(X,L){const he=L||{};return he.type=X,he.start=v(),u.events.push(["enter",he,u]),l.push(he),he}function P(X){const L=l.pop();return L.end=v(),u.events.push(["exit",L,u]),L}function F(X,L){q(X,L.from)}function D(X,L){L.restore()}function M(X,L){return he;function he(le,ae,be){let ve,U,J,_;return Array.isArray(le)?ce(le):"tokenize"in le?ce([le]):ne(le);function ne(_e){return et;function et(ut){const Qt=ut!==null&&_e[ut],Yt=ut!==null&&_e.null,Qr=[...Array.isArray(Qt)?Qt:Qt?[Qt]:[],...Array.isArray(Yt)?Yt:Yt?[Yt]:[]];return ce(Qr)(ut)}}function ce(_e){return ve=_e,U=0,_e.length===0?be:C(_e[U])}function C(_e){return et;function et(ut){return _=I(),J=_e,_e.partial||(u.currentConstruct=_e),_e.name&&u.parser.constructs.disable.null.includes(_e.name)?Ye():_e.tokenize.call(L?Object.assign(Object.create(u),L):u,s,Ne,Ye)(ut)}}function Ne(_e){return X(J,_),ae}function Ye(_e){return _.restore(),++U<ve.length?C(ve[U]):be}}}function q(X,L){X.resolveAll&&!a.includes(X)&&a.push(X),X.resolve&&vn(u.events,L,u.events.length-L,X.resolve(u.events.slice(L),u)),X.resolveTo&&(u.events=X.resolveTo(u.events,u))}function I(){const X=v(),L=u.previous,he=u.currentConstruct,le=u.events.length,ae=Array.from(l);return{from:le,restore:be};function be(){r=X,u.previous=L,u.currentConstruct=he,u.events.length=le,l=ae,V()}}function V(){r.line in i&&r.column<2&&(r.column=i[r.line],r.offset+=i[r.line]-1)}}function xx(e,t){const n=t.start._index,r=t.start._bufferIndex,i=t.end._index,a=t.end._bufferIndex;let o;if(n===i)o=[e[n].slice(r,a)];else{if(o=e.slice(n,i),r>-1){const l=o[0];typeof l=="string"?o[0]=l.slice(r):o.shift()}a>0&&o.push(e[i].slice(0,a))}return o}function wx(e,t){let n=-1;const r=[];let i;for(;++n<e.length;){const a=e[n];let o;if(typeof a=="string")o=a;else switch(a){case-5:{o="\r";break}case-4:{o=`
`;break}case-3:{o=`\r
`;break}case-2:{o=t?" ":"	";break}case-1:{if(!t&&i)continue;o=" ";break}default:o=String.fromCharCode(a)}i=a===-2,r.push(o)}return r.join("")}function _x(e){const r={constructs:P6([vx,...(e||{}).extensions||[]]),content:i(I6),defined:[],document:i(L6),flow:i(ix),lazy:{},string:i(lx),text:i(sx)};return r;function i(a){return o;function o(l){return $x(r,a,l)}}}function kx(e){for(;!Yb(e););return e}const dd=/[\0\t\n\r]/g;function Sx(){let e=1,t="",n=!0,r;return i;function i(a,o,l){const s=[];let u,h,m,p,f;for(a=t+(typeof a=="string"?a.toString():new TextDecoder(o||void 0).decode(a)),m=0,t="",n&&(a.charCodeAt(0)===65279&&m++,n=void 0);m<a.length;){if(dd.lastIndex=m,u=dd.exec(a),p=u&&u.index!==void 0?u.index:a.length,f=a.charCodeAt(p),!u){t=a.slice(m);break}if(f===10&&m===p&&r)s.push(-3),r=void 0;else switch(r&&(s.push(-5),r=void 0),m<p&&(s.push(a.slice(m,p)),e+=p-m),f){case 0:{s.push(65533),e++;break}case 9:{for(h=Math.ceil(e/4)*4,s.push(-2);e++<h;)s.push(-1);break}case 10:{s.push(-4),e=1;break}default:r=!0,e=1}m=p+1}return l&&(r&&s.push(-5),t&&s.push(t),s.push(null)),s}}const Ex=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function Cx(e){return e.replace(Ex,Dx)}function Dx(e,t,n){if(t)return t;if(n.charCodeAt(0)===35){const i=n.charCodeAt(1),a=i===120||i===88;return Kb(n.slice(a?2:1),a?16:10)}return Wh(n)||e}const rg={}.hasOwnProperty;function zx(e,t,n){return typeof t!="string"&&(n=t,t=void 0),Px(n)(kx(_x(n).document().write(Sx()(e,t,!0))))}function Px(e){const t={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:a(Er),autolinkProtocol:I,autolinkEmail:I,atxHeading:a(Ui),blockQuote:a(Yt),characterEscape:I,characterReference:I,codeFenced:a(Qr),codeFencedFenceInfo:o,codeFencedFenceMeta:o,codeIndented:a(Qr,o),codeText:a(ps,o),codeTextData:I,data:I,codeFlowValue:I,definition:a(bs),definitionDestinationString:o,definitionLabelString:o,definitionTitleString:o,emphasis:a(Wi),hardBreakEscape:a(Xi),hardBreakTrailing:a(Xi),htmlFlow:a(Yr,o),htmlFlowData:I,htmlText:a(Yr,o),htmlTextData:I,image:a(Zr),label:o,link:a(Er),listItem:a(yy),listItemValue:p,listOrdered:a(xc,m),listUnordered:a(xc),paragraph:a(vy),reference:C,referenceString:o,resourceDestinationString:o,resourceTitleString:o,setextHeading:a(Ui),strong:a($y),thematicBreak:a(wy)},exit:{atxHeading:s(),atxHeadingSequence:F,autolink:s(),autolinkEmail:Qt,autolinkProtocol:ut,blockQuote:s(),characterEscapeValue:V,characterReferenceMarkerHexadecimal:Ye,characterReferenceMarkerNumeric:Ye,characterReferenceValue:_e,characterReference:et,codeFenced:s(k),codeFencedFence:$,codeFencedFenceInfo:f,codeFencedFenceMeta:v,codeFlowValue:V,codeIndented:s(g),codeText:s(ae),codeTextData:V,data:V,definition:s(),definitionDestinationString:P,definitionLabelString:y,definitionTitleString:w,emphasis:s(),hardBreakEscape:s(L),hardBreakTrailing:s(L),htmlFlow:s(he),htmlFlowData:V,htmlText:s(le),htmlTextData:V,image:s(ve),label:J,labelText:U,lineEnding:X,link:s(be),listItem:s(),listOrdered:s(),listUnordered:s(),paragraph:s(),referenceString:Ne,resourceDestinationString:_,resourceTitleString:ne,resource:ce,setextHeading:s(q),setextHeadingLineSequence:M,setextHeadingText:D,strong:s(),thematicBreak:s()}};ig(t,(e||{}).mdastExtensions||[]);const n={};return r;function r(R){let G={type:"root",children:[]};const se={stack:[G],tokenStack:[],config:t,enter:l,exit:u,buffer:o,resume:h,data:n},pe=[];let ke=-1;for(;++ke<R.length;)if(R[ke][1].type==="listOrdered"||R[ke][1].type==="listUnordered")if(R[ke][0]==="enter")pe.push(ke);else{const Zt=pe.pop();ke=i(R,Zt,ke)}for(ke=-1;++ke<R.length;){const Zt=t[R[ke][0]];rg.call(Zt,R[ke][1].type)&&Zt[R[ke][1].type].call(Object.assign({sliceSerialize:R[ke][2].sliceSerialize},se),R[ke][1])}if(se.tokenStack.length>0){const Zt=se.tokenStack[se.tokenStack.length-1];(Zt[1]||fd).call(se,void 0,Zt[0])}for(G.position={start:Yn(R.length>0?R[0][1].start:{line:1,column:1,offset:0}),end:Yn(R.length>0?R[R.length-2][1].end:{line:1,column:1,offset:0})},ke=-1;++ke<t.transforms.length;)G=t.transforms[ke](G)||G;return G}function i(R,G,se){let pe=G-1,ke=-1,Zt=!1,Cr,Sn,Ki,Vi;for(;++pe<=se;){const Et=R[pe];switch(Et[1].type){case"listUnordered":case"listOrdered":case"blockQuote":{Et[0]==="enter"?ke++:ke--,Vi=void 0;break}case"lineEndingBlank":{Et[0]==="enter"&&(Cr&&!Vi&&!ke&&!Ki&&(Ki=pe),Vi=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:Vi=void 0}if(!ke&&Et[0]==="enter"&&Et[1].type==="listItemPrefix"||ke===-1&&Et[0]==="exit"&&(Et[1].type==="listUnordered"||Et[1].type==="listOrdered")){if(Cr){let Jr=pe;for(Sn=void 0;Jr--;){const En=R[Jr];if(En[1].type==="lineEnding"||En[1].type==="lineEndingBlank"){if(En[0]==="exit")continue;Sn&&(R[Sn][1].type="lineEndingBlank",Zt=!0),En[1].type="lineEnding",Sn=Jr}else if(!(En[1].type==="linePrefix"||En[1].type==="blockQuotePrefix"||En[1].type==="blockQuotePrefixWhitespace"||En[1].type==="blockQuoteMarker"||En[1].type==="listItemIndent"))break}Ki&&(!Sn||Ki<Sn)&&(Cr._spread=!0),Cr.end=Object.assign({},Sn?R[Sn][1].start:Et[1].end),R.splice(Sn||pe,0,["exit",Cr,Et[2]]),pe++,se++}if(Et[1].type==="listItemPrefix"){const Jr={type:"listItem",_spread:!1,start:Object.assign({},Et[1].start),end:void 0};Cr=Jr,R.splice(pe,0,["enter",Jr,Et[2]]),pe++,se++,Ki=void 0,Vi=!0}}}return R[G][1]._spread=Zt,se}function a(R,G){return se;function se(pe){l.call(this,R(pe),pe),G&&G.call(this,pe)}}function o(){this.stack.push({type:"fragment",children:[]})}function l(R,G,se){this.stack[this.stack.length-1].children.push(R),this.stack.push(R),this.tokenStack.push([G,se||void 0]),R.position={start:Yn(G.start),end:void 0}}function s(R){return G;function G(se){R&&R.call(this,se),u.call(this,se)}}function u(R,G){const se=this.stack.pop(),pe=this.tokenStack.pop();if(pe)pe[0].type!==R.type&&(G?G.call(this,R,pe[0]):(pe[1]||fd).call(this,R,pe[0]));else throw new Error("Cannot close `"+R.type+"` ("+wa({start:R.start,end:R.end})+"): it’s not open");se.position.end=Yn(R.end)}function h(){return D6(this.stack.pop())}function m(){this.data.expectingFirstListItemValue=!0}function p(R){if(this.data.expectingFirstListItemValue){const G=this.stack[this.stack.length-2];G.start=Number.parseInt(this.sliceSerialize(R),10),this.data.expectingFirstListItemValue=void 0}}function f(){const R=this.resume(),G=this.stack[this.stack.length-1];G.lang=R}function v(){const R=this.resume(),G=this.stack[this.stack.length-1];G.meta=R}function $(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function k(){const R=this.resume(),G=this.stack[this.stack.length-1];G.value=R.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function g(){const R=this.resume(),G=this.stack[this.stack.length-1];G.value=R.replace(/(\r?\n|\r)$/g,"")}function y(R){const G=this.resume(),se=this.stack[this.stack.length-1];se.label=G,se.identifier=Si(this.sliceSerialize(R)).toLowerCase()}function w(){const R=this.resume(),G=this.stack[this.stack.length-1];G.title=R}function P(){const R=this.resume(),G=this.stack[this.stack.length-1];G.url=R}function F(R){const G=this.stack[this.stack.length-1];if(!G.depth){const se=this.sliceSerialize(R).length;G.depth=se}}function D(){this.data.setextHeadingSlurpLineEnding=!0}function M(R){const G=this.stack[this.stack.length-1];G.depth=this.sliceSerialize(R).codePointAt(0)===61?1:2}function q(){this.data.setextHeadingSlurpLineEnding=void 0}function I(R){const se=this.stack[this.stack.length-1].children;let pe=se[se.length-1];(!pe||pe.type!=="text")&&(pe=xy(),pe.position={start:Yn(R.start),end:void 0},se.push(pe)),this.stack.push(pe)}function V(R){const G=this.stack.pop();G.value+=this.sliceSerialize(R),G.position.end=Yn(R.end)}function X(R){const G=this.stack[this.stack.length-1];if(this.data.atHardBreak){const se=G.children[G.children.length-1];se.position.end=Yn(R.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&t.canContainEols.includes(G.type)&&(I.call(this,R),V.call(this,R))}function L(){this.data.atHardBreak=!0}function he(){const R=this.resume(),G=this.stack[this.stack.length-1];G.value=R}function le(){const R=this.resume(),G=this.stack[this.stack.length-1];G.value=R}function ae(){const R=this.resume(),G=this.stack[this.stack.length-1];G.value=R}function be(){const R=this.stack[this.stack.length-1];if(this.data.inReference){const G=this.data.referenceType||"shortcut";R.type+="Reference",R.referenceType=G,delete R.url,delete R.title}else delete R.identifier,delete R.label;this.data.referenceType=void 0}function ve(){const R=this.stack[this.stack.length-1];if(this.data.inReference){const G=this.data.referenceType||"shortcut";R.type+="Reference",R.referenceType=G,delete R.url,delete R.title}else delete R.identifier,delete R.label;this.data.referenceType=void 0}function U(R){const G=this.sliceSerialize(R),se=this.stack[this.stack.length-2];se.label=Cx(G),se.identifier=Si(G).toLowerCase()}function J(){const R=this.stack[this.stack.length-1],G=this.resume(),se=this.stack[this.stack.length-1];if(this.data.inReference=!0,se.type==="link"){const pe=R.children;se.children=pe}else se.alt=G}function _(){const R=this.resume(),G=this.stack[this.stack.length-1];G.url=R}function ne(){const R=this.resume(),G=this.stack[this.stack.length-1];G.title=R}function ce(){this.data.inReference=void 0}function C(){this.data.referenceType="collapsed"}function Ne(R){const G=this.resume(),se=this.stack[this.stack.length-1];se.label=G,se.identifier=Si(this.sliceSerialize(R)).toLowerCase(),this.data.referenceType="full"}function Ye(R){this.data.characterReferenceType=R.type}function _e(R){const G=this.sliceSerialize(R),se=this.data.characterReferenceType;let pe;se?(pe=Kb(G,se==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):pe=Wh(G);const ke=this.stack[this.stack.length-1];ke.value+=pe}function et(R){const G=this.stack.pop();G.position.end=Yn(R.end)}function ut(R){V.call(this,R);const G=this.stack[this.stack.length-1];G.url=this.sliceSerialize(R)}function Qt(R){V.call(this,R);const G=this.stack[this.stack.length-1];G.url="mailto:"+this.sliceSerialize(R)}function Yt(){return{type:"blockquote",children:[]}}function Qr(){return{type:"code",lang:null,meta:null,value:""}}function ps(){return{type:"inlineCode",value:""}}function bs(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function Wi(){return{type:"emphasis",children:[]}}function Ui(){return{type:"heading",depth:0,children:[]}}function Xi(){return{type:"break"}}function Yr(){return{type:"html",value:""}}function Zr(){return{type:"image",title:null,url:"",alt:null}}function Er(){return{type:"link",title:null,url:"",children:[]}}function xc(R){return{type:"list",ordered:R.type==="listOrdered",start:null,spread:R._spread,children:[]}}function yy(R){return{type:"listItem",spread:R._spread,checked:null,children:[]}}function vy(){return{type:"paragraph",children:[]}}function $y(){return{type:"strong",children:[]}}function xy(){return{type:"text",value:""}}function wy(){return{type:"thematicBreak"}}}function Yn(e){return{line:e.line,column:e.column,offset:e.offset}}function ig(e,t){let n=-1;for(;++n<t.length;){const r=t[n];Array.isArray(r)?ig(e,r):Ax(e,r)}}function Ax(e,t){let n;for(n in t)if(rg.call(t,n))switch(n){case"canContainEols":{const r=t[n];r&&e[n].push(...r);break}case"transforms":{const r=t[n];r&&e[n].push(...r);break}case"enter":case"exit":{const r=t[n];r&&Object.assign(e[n],r);break}}}function fd(e,t){throw e?new Error("Cannot close `"+e.type+"` ("+wa({start:e.start,end:e.end})+"): a different token (`"+t.type+"`, "+wa({start:t.start,end:t.end})+") is open"):new Error("Cannot close document, a token (`"+t.type+"`, "+wa({start:t.start,end:t.end})+") is still open")}function Tx(e){const t=this;t.parser=n;function n(r){return zx(r,{...t.data("settings"),...e,extensions:t.data("micromarkExtensions")||[],mdastExtensions:t.data("fromMarkdownExtensions")||[]})}}function Fx(e,t){const n={type:"element",tagName:"blockquote",properties:{},children:e.wrap(e.all(t),!0)};return e.patch(t,n),e.applyData(t,n)}function Nx(e,t){const n={type:"element",tagName:"br",properties:{},children:[]};return e.patch(t,n),[e.applyData(t,n),{type:"text",value:`
`}]}function Mx(e,t){const n=t.value?t.value+`
`:"",r={};t.lang&&(r.className=["language-"+t.lang]);let i={type:"element",tagName:"code",properties:r,children:[{type:"text",value:n}]};return t.meta&&(i.data={meta:t.meta}),e.patch(t,i),i=e.applyData(t,i),i={type:"element",tagName:"pre",properties:{},children:[i]},e.patch(t,i),i}function Rx(e,t){const n={type:"element",tagName:"del",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function qx(e,t){const n={type:"element",tagName:"em",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function Ix(e,t){const n=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",r=String(t.identifier).toUpperCase(),i=Oi(r.toLowerCase()),a=e.footnoteOrder.indexOf(r);let o,l=e.footnoteCounts.get(r);l===void 0?(l=0,e.footnoteOrder.push(r),o=e.footnoteOrder.length):o=a+1,l+=1,e.footnoteCounts.set(r,l);const s={type:"element",tagName:"a",properties:{href:"#"+n+"fn-"+i,id:n+"fnref-"+i+(l>1?"-"+l:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(o)}]};e.patch(t,s);const u={type:"element",tagName:"sup",properties:{},children:[s]};return e.patch(t,u),e.applyData(t,u)}function Bx(e,t){const n={type:"element",tagName:"h"+t.depth,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function Lx(e,t){if(e.options.allowDangerousHtml){const n={type:"raw",value:t.value};return e.patch(t,n),e.applyData(t,n)}}function ag(e,t){const n=t.referenceType;let r="]";if(n==="collapsed"?r+="[]":n==="full"&&(r+="["+(t.label||t.identifier)+"]"),t.type==="imageReference")return[{type:"text",value:"!["+t.alt+r}];const i=e.all(t),a=i[0];a&&a.type==="text"?a.value="["+a.value:i.unshift({type:"text",value:"["});const o=i[i.length-1];return o&&o.type==="text"?o.value+=r:i.push({type:"text",value:r}),i}function Ox(e,t){const n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return ag(e,t);const i={src:Oi(r.url||""),alt:t.alt};r.title!==null&&r.title!==void 0&&(i.title=r.title);const a={type:"element",tagName:"img",properties:i,children:[]};return e.patch(t,a),e.applyData(t,a)}function jx(e,t){const n={src:Oi(t.url)};t.alt!==null&&t.alt!==void 0&&(n.alt=t.alt),t.title!==null&&t.title!==void 0&&(n.title=t.title);const r={type:"element",tagName:"img",properties:n,children:[]};return e.patch(t,r),e.applyData(t,r)}function Hx(e,t){const n={type:"text",value:t.value.replace(/\r?\n|\r/g," ")};e.patch(t,n);const r={type:"element",tagName:"code",properties:{},children:[n]};return e.patch(t,r),e.applyData(t,r)}function Wx(e,t){const n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return ag(e,t);const i={href:Oi(r.url||"")};r.title!==null&&r.title!==void 0&&(i.title=r.title);const a={type:"element",tagName:"a",properties:i,children:e.all(t)};return e.patch(t,a),e.applyData(t,a)}function Ux(e,t){const n={href:Oi(t.url)};t.title!==null&&t.title!==void 0&&(n.title=t.title);const r={type:"element",tagName:"a",properties:n,children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function Xx(e,t,n){const r=e.all(t),i=n?Kx(n):og(t),a={},o=[];if(typeof t.checked=="boolean"){const h=r[0];let m;h&&h.type==="element"&&h.tagName==="p"?m=h:(m={type:"element",tagName:"p",properties:{},children:[]},r.unshift(m)),m.children.length>0&&m.children.unshift({type:"text",value:" "}),m.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:t.checked,disabled:!0},children:[]}),a.className=["task-list-item"]}let l=-1;for(;++l<r.length;){const h=r[l];(i||l!==0||h.type!=="element"||h.tagName!=="p")&&o.push({type:"text",value:`
`}),h.type==="element"&&h.tagName==="p"&&!i?o.push(...h.children):o.push(h)}const s=r[r.length-1];s&&(i||s.type!=="element"||s.tagName!=="p")&&o.push({type:"text",value:`
`});const u={type:"element",tagName:"li",properties:a,children:o};return e.patch(t,u),e.applyData(t,u)}function Kx(e){let t=!1;if(e.type==="list"){t=e.spread||!1;const n=e.children;let r=-1;for(;!t&&++r<n.length;)t=og(n[r])}return t}function og(e){const t=e.spread;return t??e.children.length>1}function Vx(e,t){const n={},r=e.all(t);let i=-1;for(typeof t.start=="number"&&t.start!==1&&(n.start=t.start);++i<r.length;){const o=r[i];if(o.type==="element"&&o.tagName==="li"&&o.properties&&Array.isArray(o.properties.className)&&o.properties.className.includes("task-list-item")){n.className=["contains-task-list"];break}}const a={type:"element",tagName:t.ordered?"ol":"ul",properties:n,children:e.wrap(r,!0)};return e.patch(t,a),e.applyData(t,a)}function Gx(e,t){const n={type:"element",tagName:"p",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function Qx(e,t){const n={type:"root",children:e.wrap(e.all(t))};return e.patch(t,n),e.applyData(t,n)}function Yx(e,t){const n={type:"element",tagName:"strong",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function Zx(e,t){const n=e.all(t),r=n.shift(),i=[];if(r){const o={type:"element",tagName:"thead",properties:{},children:e.wrap([r],!0)};e.patch(t.children[0],o),i.push(o)}if(n.length>0){const o={type:"element",tagName:"tbody",properties:{},children:e.wrap(n,!0)},l=Lh(t.children[1]),s=Lb(t.children[t.children.length-1]);l&&s&&(o.position={start:l,end:s}),i.push(o)}const a={type:"element",tagName:"table",properties:{},children:e.wrap(i,!0)};return e.patch(t,a),e.applyData(t,a)}function Jx(e,t,n){const r=n?n.children:void 0,a=(r?r.indexOf(t):1)===0?"th":"td",o=n&&n.type==="table"?n.align:void 0,l=o?o.length:t.children.length;let s=-1;const u=[];for(;++s<l;){const m=t.children[s],p={},f=o?o[s]:void 0;f&&(p.align=f);let v={type:"element",tagName:a,properties:p,children:[]};m&&(v.children=e.all(m),e.patch(m,v),v=e.applyData(m,v)),u.push(v)}const h={type:"element",tagName:"tr",properties:{},children:e.wrap(u,!0)};return e.patch(t,h),e.applyData(t,h)}function e8(e,t){const n={type:"element",tagName:"td",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}const pd=9,bd=32;function t8(e){const t=String(e),n=/\r?\n|\r/g;let r=n.exec(t),i=0;const a=[];for(;r;)a.push(gd(t.slice(i,r.index),i>0,!0),r[0]),i=r.index+r[0].length,r=n.exec(t);return a.push(gd(t.slice(i),i>0,!1)),a.join("")}function gd(e,t,n){let r=0,i=e.length;if(t){let a=e.codePointAt(r);for(;a===pd||a===bd;)r++,a=e.codePointAt(r)}if(n){let a=e.codePointAt(i-1);for(;a===pd||a===bd;)i--,a=e.codePointAt(i-1)}return i>r?e.slice(r,i):""}function n8(e,t){const n={type:"text",value:t8(String(t.value))};return e.patch(t,n),e.applyData(t,n)}function r8(e,t){const n={type:"element",tagName:"hr",properties:{},children:[]};return e.patch(t,n),e.applyData(t,n)}const i8={blockquote:Fx,break:Nx,code:Mx,delete:Rx,emphasis:qx,footnoteReference:Ix,heading:Bx,html:Lx,imageReference:Ox,image:jx,inlineCode:Hx,linkReference:Wx,link:Ux,listItem:Xx,list:Vx,paragraph:Gx,root:Qx,strong:Yx,table:Zx,tableCell:e8,tableRow:Jx,text:n8,thematicBreak:r8,toml:Eo,yaml:Eo,definition:Eo,footnoteDefinition:Eo};function Eo(){}const lg=-1,os=0,zl=1,Pl=2,Kh=3,Vh=4,Gh=5,Qh=6,sg=7,ug=8,yd=typeof self=="object"?self:globalThis,a8=(e,t)=>{const n=(i,a)=>(e.set(a,i),i),r=i=>{if(e.has(i))return e.get(i);const[a,o]=t[i];switch(a){case os:case lg:return n(o,i);case zl:{const l=n([],i);for(const s of o)l.push(r(s));return l}case Pl:{const l=n({},i);for(const[s,u]of o)l[r(s)]=r(u);return l}case Kh:return n(new Date(o),i);case Vh:{const{source:l,flags:s}=o;return n(new RegExp(l,s),i)}case Gh:{const l=n(new Map,i);for(const[s,u]of o)l.set(r(s),r(u));return l}case Qh:{const l=n(new Set,i);for(const s of o)l.add(r(s));return l}case sg:{const{name:l,message:s}=o;return n(new yd[l](s),i)}case ug:return n(BigInt(o),i);case"BigInt":return n(Object(BigInt(o)),i)}return n(new yd[a](o),i)};return r},vd=e=>a8(new Map,e)(0),ti="",{toString:o8}={},{keys:l8}=Object,la=e=>{const t=typeof e;if(t!=="object"||!e)return[os,t];const n=o8.call(e).slice(8,-1);switch(n){case"Array":return[zl,ti];case"Object":return[Pl,ti];case"Date":return[Kh,ti];case"RegExp":return[Vh,ti];case"Map":return[Gh,ti];case"Set":return[Qh,ti]}return n.includes("Array")?[zl,n]:n.includes("Error")?[sg,n]:[Pl,n]},Co=([e,t])=>e===os&&(t==="function"||t==="symbol"),s8=(e,t,n,r)=>{const i=(o,l)=>{const s=r.push(o)-1;return n.set(l,s),s},a=o=>{if(n.has(o))return n.get(o);let[l,s]=la(o);switch(l){case os:{let h=o;switch(s){case"bigint":l=ug,h=o.toString();break;case"function":case"symbol":if(e)throw new TypeError("unable to serialize "+s);h=null;break;case"undefined":return i([lg],o)}return i([l,h],o)}case zl:{if(s)return i([s,[...o]],o);const h=[],m=i([l,h],o);for(const p of o)h.push(a(p));return m}case Pl:{if(s)switch(s){case"BigInt":return i([s,o.toString()],o);case"Boolean":case"Number":case"String":return i([s,o.valueOf()],o)}if(t&&"toJSON"in o)return a(o.toJSON());const h=[],m=i([l,h],o);for(const p of l8(o))(e||!Co(la(o[p])))&&h.push([a(p),a(o[p])]);return m}case Kh:return i([l,o.toISOString()],o);case Vh:{const{source:h,flags:m}=o;return i([l,{source:h,flags:m}],o)}case Gh:{const h=[],m=i([l,h],o);for(const[p,f]of o)(e||!(Co(la(p))||Co(la(f))))&&h.push([a(p),a(f)]);return m}case Qh:{const h=[],m=i([l,h],o);for(const p of o)(e||!Co(la(p)))&&h.push(a(p));return m}}const{message:u}=o;return i([l,{name:s,message:u}],o)};return a},$d=(e,{json:t,lossy:n}={})=>{const r=[];return s8(!(t||n),!!t,new Map,r)(e),r},Al=typeof structuredClone=="function"?(e,t)=>t&&("json"in t||"lossy"in t)?vd($d(e,t)):structuredClone(e):(e,t)=>vd($d(e,t));function u8(e,t){const n=[{type:"text",value:"↩"}];return t>1&&n.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(t)}]}),n}function h8(e,t){return"Back to reference "+(e+1)+(t>1?"-"+t:"")}function c8(e){const t=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",n=e.options.footnoteBackContent||u8,r=e.options.footnoteBackLabel||h8,i=e.options.footnoteLabel||"Footnotes",a=e.options.footnoteLabelTagName||"h2",o=e.options.footnoteLabelProperties||{className:["sr-only"]},l=[];let s=-1;for(;++s<e.footnoteOrder.length;){const u=e.footnoteById.get(e.footnoteOrder[s]);if(!u)continue;const h=e.all(u),m=String(u.identifier).toUpperCase(),p=Oi(m.toLowerCase());let f=0;const v=[],$=e.footnoteCounts.get(m);for(;$!==void 0&&++f<=$;){v.length>0&&v.push({type:"text",value:" "});let y=typeof n=="string"?n:n(s,f);typeof y=="string"&&(y={type:"text",value:y}),v.push({type:"element",tagName:"a",properties:{href:"#"+t+"fnref-"+p+(f>1?"-"+f:""),dataFootnoteBackref:"",ariaLabel:typeof r=="string"?r:r(s,f),className:["data-footnote-backref"]},children:Array.isArray(y)?y:[y]})}const k=h[h.length-1];if(k&&k.type==="element"&&k.tagName==="p"){const y=k.children[k.children.length-1];y&&y.type==="text"?y.value+=" ":k.children.push({type:"text",value:" "}),k.children.push(...v)}else h.push(...v);const g={type:"element",tagName:"li",properties:{id:t+"fn-"+p},children:e.wrap(h,!0)};e.patch(u,g),l.push(g)}if(l.length!==0)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:a,properties:{...Al(o),id:"footnote-label"},children:[{type:"text",value:i}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:e.wrap(l,!0)},{type:"text",value:`
`}]}}const Yh=function(e){if(e==null)return p8;if(typeof e=="function")return ls(e);if(typeof e=="object")return Array.isArray(e)?m8(e):d8(e);if(typeof e=="string")return f8(e);throw new Error("Expected function, string, or object as test")};function m8(e){const t=[];let n=-1;for(;++n<e.length;)t[n]=Yh(e[n]);return ls(r);function r(...i){let a=-1;for(;++a<t.length;)if(t[a].apply(this,i))return!0;return!1}}function d8(e){const t=e;return ls(n);function n(r){const i=r;let a;for(a in e)if(i[a]!==t[a])return!1;return!0}}function f8(e){return ls(t);function t(n){return n&&n.type===e}}function ls(e){return t;function t(n,r,i){return!!(b8(n)&&e.call(this,n,typeof r=="number"?r:void 0,i||void 0))}}function p8(){return!0}function b8(e){return e!==null&&typeof e=="object"&&"type"in e}const hg=[],g8=!0,xd=!1,cg="skip";function mg(e,t,n,r){let i;typeof t=="function"&&typeof n!="function"?(r=n,n=t):i=t;const a=Yh(i),o=r?-1:1;l(e,void 0,[])();function l(s,u,h){const m=s&&typeof s=="object"?s:{};if(typeof m.type=="string"){const f=typeof m.tagName=="string"?m.tagName:typeof m.name=="string"?m.name:void 0;Object.defineProperty(p,"name",{value:"node ("+(s.type+(f?"<"+f+">":""))+")"})}return p;function p(){let f=hg,v,$,k;if((!t||a(s,u,h[h.length-1]||void 0))&&(f=y8(n(s,h)),f[0]===xd))return f;if("children"in s&&s.children){const g=s;if(g.children&&f[0]!==cg)for($=(r?g.children.length:-1)+o,k=h.concat(g);$>-1&&$<g.children.length;){const y=g.children[$];if(v=l(y,$,k)(),v[0]===xd)return v;$=typeof v[1]=="number"?v[1]:$+o}}return f}}}function y8(e){return Array.isArray(e)?e:typeof e=="number"?[g8,e]:e==null?hg:[e]}function Zh(e,t,n,r){let i,a,o;typeof t=="function"&&typeof n!="function"?(a=void 0,o=t,i=n):(a=t,o=n,i=r),mg(e,a,l,i);function l(s,u){const h=u[u.length-1],m=h?h.children.indexOf(s):void 0;return o(s,m,h)}}const w0={}.hasOwnProperty,v8={};function $8(e,t){const n=t||v8,r=new Map,i=new Map,a=new Map,o={...i8,...n.handlers},l={all:u,applyData:w8,definitionById:r,footnoteById:i,footnoteCounts:a,footnoteOrder:[],handlers:o,one:s,options:n,patch:x8,wrap:k8};return Zh(e,function(h){if(h.type==="definition"||h.type==="footnoteDefinition"){const m=h.type==="definition"?r:i,p=String(h.identifier).toUpperCase();m.has(p)||m.set(p,h)}}),l;function s(h,m){const p=h.type,f=l.handlers[p];if(w0.call(l.handlers,p)&&f)return f(l,h,m);if(l.options.passThrough&&l.options.passThrough.includes(p)){if("children"in h){const{children:$,...k}=h,g=Al(k);return g.children=l.all(h),g}return Al(h)}return(l.options.unknownHandler||_8)(l,h,m)}function u(h){const m=[];if("children"in h){const p=h.children;let f=-1;for(;++f<p.length;){const v=l.one(p[f],h);if(v){if(f&&p[f-1].type==="break"&&(!Array.isArray(v)&&v.type==="text"&&(v.value=wd(v.value)),!Array.isArray(v)&&v.type==="element")){const $=v.children[0];$&&$.type==="text"&&($.value=wd($.value))}Array.isArray(v)?m.push(...v):m.push(v)}}}return m}}function x8(e,t){e.position&&(t.position=i6(e))}function w8(e,t){let n=t;if(e&&e.data){const r=e.data.hName,i=e.data.hChildren,a=e.data.hProperties;if(typeof r=="string")if(n.type==="element")n.tagName=r;else{const o="children"in n?n.children:[n];n={type:"element",tagName:r,properties:{},children:o}}n.type==="element"&&a&&Object.assign(n.properties,Al(a)),"children"in n&&n.children&&i!==null&&i!==void 0&&(n.children=i)}return n}function _8(e,t){const n=t.data||{},r="value"in t&&!(w0.call(n,"hProperties")||w0.call(n,"hChildren"))?{type:"text",value:t.value}:{type:"element",tagName:"div",properties:{},children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function k8(e,t){const n=[];let r=-1;for(t&&n.push({type:"text",value:`
`});++r<e.length;)r&&n.push({type:"text",value:`
`}),n.push(e[r]);return t&&e.length>0&&n.push({type:"text",value:`
`}),n}function wd(e){let t=0,n=e.charCodeAt(t);for(;n===9||n===32;)t++,n=e.charCodeAt(t);return e.slice(t)}function _d(e,t){const n=$8(e,t),r=n.one(e,void 0),i=c8(n),a=Array.isArray(r)?{type:"root",children:r}:r||{type:"root",children:[]};return i&&a.children.push({type:"text",value:`
`},i),a}function S8(e,t){return e&&"run"in e?async function(n,r){const i=_d(n,{file:r,...t});await e.run(i,r)}:function(n,r){return _d(n,{file:r,...e||t})}}function kd(e){if(e)throw e}var tl=Object.prototype.hasOwnProperty,dg=Object.prototype.toString,Sd=Object.defineProperty,Ed=Object.getOwnPropertyDescriptor,Cd=function(t){return typeof Array.isArray=="function"?Array.isArray(t):dg.call(t)==="[object Array]"},Dd=function(t){if(!t||dg.call(t)!=="[object Object]")return!1;var n=tl.call(t,"constructor"),r=t.constructor&&t.constructor.prototype&&tl.call(t.constructor.prototype,"isPrototypeOf");if(t.constructor&&!n&&!r)return!1;var i;for(i in t);return typeof i>"u"||tl.call(t,i)},zd=function(t,n){Sd&&n.name==="__proto__"?Sd(t,n.name,{enumerable:!0,configurable:!0,value:n.newValue,writable:!0}):t[n.name]=n.newValue},Pd=function(t,n){if(n==="__proto__")if(tl.call(t,n)){if(Ed)return Ed(t,n).value}else return;return t[n]},E8=function e(){var t,n,r,i,a,o,l=arguments[0],s=1,u=arguments.length,h=!1;for(typeof l=="boolean"&&(h=l,l=arguments[1]||{},s=2),(l==null||typeof l!="object"&&typeof l!="function")&&(l={});s<u;++s)if(t=arguments[s],t!=null)for(n in t)r=Pd(l,n),i=Pd(t,n),l!==i&&(h&&i&&(Dd(i)||(a=Cd(i)))?(a?(a=!1,o=r&&Cd(r)?r:[]):o=r&&Dd(r)?r:{},zd(l,{name:n,newValue:e(h,o,i)})):typeof i<"u"&&zd(l,{name:n,newValue:i}));return l};const Ys=zf(E8);function _0(e){if(typeof e!="object"||e===null)return!1;const t=Object.getPrototypeOf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function C8(){const e=[],t={run:n,use:r};return t;function n(...i){let a=-1;const o=i.pop();if(typeof o!="function")throw new TypeError("Expected function as last argument, not "+o);l(null,...i);function l(s,...u){const h=e[++a];let m=-1;if(s){o(s);return}for(;++m<i.length;)(u[m]===null||u[m]===void 0)&&(u[m]=i[m]);i=u,h?D8(h,l)(...u):o(null,...u)}}function r(i){if(typeof i!="function")throw new TypeError("Expected `middelware` to be a function, not "+i);return e.push(i),t}}function D8(e,t){let n;return r;function r(...o){const l=e.length>o.length;let s;l&&o.push(i);try{s=e.apply(this,o)}catch(u){const h=u;if(l&&n)throw h;return i(h)}l||(s&&s.then&&typeof s.then=="function"?s.then(a,i):s instanceof Error?i(s):a(s))}function i(o,...l){n||(n=!0,t(o,...l))}function a(o){i(null,o)}}const mn={basename:z8,dirname:P8,extname:A8,join:T8,sep:"/"};function z8(e,t){if(t!==void 0&&typeof t!="string")throw new TypeError('"ext" argument must be a string');ro(e);let n=0,r=-1,i=e.length,a;if(t===void 0||t.length===0||t.length>e.length){for(;i--;)if(e.codePointAt(i)===47){if(a){n=i+1;break}}else r<0&&(a=!0,r=i+1);return r<0?"":e.slice(n,r)}if(t===e)return"";let o=-1,l=t.length-1;for(;i--;)if(e.codePointAt(i)===47){if(a){n=i+1;break}}else o<0&&(a=!0,o=i+1),l>-1&&(e.codePointAt(i)===t.codePointAt(l--)?l<0&&(r=i):(l=-1,r=o));return n===r?r=o:r<0&&(r=e.length),e.slice(n,r)}function P8(e){if(ro(e),e.length===0)return".";let t=-1,n=e.length,r;for(;--n;)if(e.codePointAt(n)===47){if(r){t=n;break}}else r||(r=!0);return t<0?e.codePointAt(0)===47?"/":".":t===1&&e.codePointAt(0)===47?"//":e.slice(0,t)}function A8(e){ro(e);let t=e.length,n=-1,r=0,i=-1,a=0,o;for(;t--;){const l=e.codePointAt(t);if(l===47){if(o){r=t+1;break}continue}n<0&&(o=!0,n=t+1),l===46?i<0?i=t:a!==1&&(a=1):i>-1&&(a=-1)}return i<0||n<0||a===0||a===1&&i===n-1&&i===r+1?"":e.slice(i,n)}function T8(...e){let t=-1,n;for(;++t<e.length;)ro(e[t]),e[t]&&(n=n===void 0?e[t]:n+"/"+e[t]);return n===void 0?".":F8(n)}function F8(e){ro(e);const t=e.codePointAt(0)===47;let n=N8(e,!t);return n.length===0&&!t&&(n="."),n.length>0&&e.codePointAt(e.length-1)===47&&(n+="/"),t?"/"+n:n}function N8(e,t){let n="",r=0,i=-1,a=0,o=-1,l,s;for(;++o<=e.length;){if(o<e.length)l=e.codePointAt(o);else{if(l===47)break;l=47}if(l===47){if(!(i===o-1||a===1))if(i!==o-1&&a===2){if(n.length<2||r!==2||n.codePointAt(n.length-1)!==46||n.codePointAt(n.length-2)!==46){if(n.length>2){if(s=n.lastIndexOf("/"),s!==n.length-1){s<0?(n="",r=0):(n=n.slice(0,s),r=n.length-1-n.lastIndexOf("/")),i=o,a=0;continue}}else if(n.length>0){n="",r=0,i=o,a=0;continue}}t&&(n=n.length>0?n+"/..":"..",r=2)}else n.length>0?n+="/"+e.slice(i+1,o):n=e.slice(i+1,o),r=o-i-1;i=o,a=0}else l===46&&a>-1?a++:a=-1}return n}function ro(e){if(typeof e!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}const M8={cwd:R8};function R8(){return"/"}function k0(e){return!!(e!==null&&typeof e=="object"&&"href"in e&&e.href&&"protocol"in e&&e.protocol&&e.auth===void 0)}function q8(e){if(typeof e=="string")e=new URL(e);else if(!k0(e)){const t=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+e+"`");throw t.code="ERR_INVALID_ARG_TYPE",t}if(e.protocol!=="file:"){const t=new TypeError("The URL must be of scheme file");throw t.code="ERR_INVALID_URL_SCHEME",t}return I8(e)}function I8(e){if(e.hostname!==""){const r=new TypeError('File URL host must be "localhost" or empty on darwin');throw r.code="ERR_INVALID_FILE_URL_HOST",r}const t=e.pathname;let n=-1;for(;++n<t.length;)if(t.codePointAt(n)===37&&t.codePointAt(n+1)===50){const r=t.codePointAt(n+2);if(r===70||r===102){const i=new TypeError("File URL path must not include encoded / characters");throw i.code="ERR_INVALID_FILE_URL_PATH",i}}return decodeURIComponent(t)}const Zs=["history","path","basename","stem","extname","dirname"];class fg{constructor(t){let n;t?k0(t)?n={path:t}:typeof t=="string"||B8(t)?n={value:t}:n=t:n={},this.cwd="cwd"in n?"":M8.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let r=-1;for(;++r<Zs.length;){const a=Zs[r];a in n&&n[a]!==void 0&&n[a]!==null&&(this[a]=a==="history"?[...n[a]]:n[a])}let i;for(i in n)Zs.includes(i)||(this[i]=n[i])}get basename(){return typeof this.path=="string"?mn.basename(this.path):void 0}set basename(t){eu(t,"basename"),Js(t,"basename"),this.path=mn.join(this.dirname||"",t)}get dirname(){return typeof this.path=="string"?mn.dirname(this.path):void 0}set dirname(t){Ad(this.basename,"dirname"),this.path=mn.join(t||"",this.basename)}get extname(){return typeof this.path=="string"?mn.extname(this.path):void 0}set extname(t){if(Js(t,"extname"),Ad(this.dirname,"extname"),t){if(t.codePointAt(0)!==46)throw new Error("`extname` must start with `.`");if(t.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=mn.join(this.dirname,this.stem+(t||""))}get path(){return this.history[this.history.length-1]}set path(t){k0(t)&&(t=q8(t)),eu(t,"path"),this.path!==t&&this.history.push(t)}get stem(){return typeof this.path=="string"?mn.basename(this.path,this.extname):void 0}set stem(t){eu(t,"stem"),Js(t,"stem"),this.path=mn.join(this.dirname||"",t+(this.extname||""))}fail(t,n,r){const i=this.message(t,n,r);throw i.fatal=!0,i}info(t,n,r){const i=this.message(t,n,r);return i.fatal=void 0,i}message(t,n,r){const i=new st(t,n,r);return this.path&&(i.name=this.path+":"+i.name,i.file=this.path),i.fatal=!1,this.messages.push(i),i}toString(t){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(t||void 0).decode(this.value)}}function Js(e,t){if(e&&e.includes(mn.sep))throw new Error("`"+t+"` cannot be a path: did not expect `"+mn.sep+"`")}function eu(e,t){if(!e)throw new Error("`"+t+"` cannot be empty")}function Ad(e,t){if(!e)throw new Error("Setting `"+t+"` requires `path` to be set too")}function B8(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const L8=function(e){const r=this.constructor.prototype,i=r[e],a=function(){return i.apply(a,arguments)};return Object.setPrototypeOf(a,r),a},O8={}.hasOwnProperty;class Jh extends L8{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=C8()}copy(){const t=new Jh;let n=-1;for(;++n<this.attachers.length;){const r=this.attachers[n];t.use(...r)}return t.data(Ys(!0,{},this.namespace)),t}data(t,n){return typeof t=="string"?arguments.length===2?(ru("data",this.frozen),this.namespace[t]=n,this):O8.call(this.namespace,t)&&this.namespace[t]||void 0:t?(ru("data",this.frozen),this.namespace=t,this):this.namespace}freeze(){if(this.frozen)return this;const t=this;for(;++this.freezeIndex<this.attachers.length;){const[n,...r]=this.attachers[this.freezeIndex];if(r[0]===!1)continue;r[0]===!0&&(r[0]=void 0);const i=n.call(t,...r);typeof i=="function"&&this.transformers.use(i)}return this.frozen=!0,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(t){this.freeze();const n=Do(t),r=this.parser||this.Parser;return tu("parse",r),r(String(n),n)}process(t,n){const r=this;return this.freeze(),tu("process",this.parser||this.Parser),nu("process",this.compiler||this.Compiler),n?i(void 0,n):new Promise(i);function i(a,o){const l=Do(t),s=r.parse(l);r.run(s,l,function(h,m,p){if(h||!m||!p)return u(h);const f=m,v=r.stringify(f,p);W8(v)?p.value=v:p.result=v,u(h,p)});function u(h,m){h||!m?o(h):a?a(m):n(void 0,m)}}}processSync(t){let n=!1,r;return this.freeze(),tu("processSync",this.parser||this.Parser),nu("processSync",this.compiler||this.Compiler),this.process(t,i),Fd("processSync","process",n),r;function i(a,o){n=!0,kd(a),r=o}}run(t,n,r){Td(t),this.freeze();const i=this.transformers;return!r&&typeof n=="function"&&(r=n,n=void 0),r?a(void 0,r):new Promise(a);function a(o,l){const s=Do(n);i.run(t,s,u);function u(h,m,p){const f=m||t;h?l(h):o?o(f):r(void 0,f,p)}}}runSync(t,n){let r=!1,i;return this.run(t,n,a),Fd("runSync","run",r),i;function a(o,l){kd(o),i=l,r=!0}}stringify(t,n){this.freeze();const r=Do(n),i=this.compiler||this.Compiler;return nu("stringify",i),Td(t),i(t,r)}use(t,...n){const r=this.attachers,i=this.namespace;if(ru("use",this.frozen),t!=null)if(typeof t=="function")s(t,n);else if(typeof t=="object")Array.isArray(t)?l(t):o(t);else throw new TypeError("Expected usable value, not `"+t+"`");return this;function a(u){if(typeof u=="function")s(u,[]);else if(typeof u=="object")if(Array.isArray(u)){const[h,...m]=u;s(h,m)}else o(u);else throw new TypeError("Expected usable value, not `"+u+"`")}function o(u){if(!("plugins"in u)&&!("settings"in u))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");l(u.plugins),u.settings&&(i.settings=Ys(!0,i.settings,u.settings))}function l(u){let h=-1;if(u!=null)if(Array.isArray(u))for(;++h<u.length;){const m=u[h];a(m)}else throw new TypeError("Expected a list of plugins, not `"+u+"`")}function s(u,h){let m=-1,p=-1;for(;++m<r.length;)if(r[m][0]===u){p=m;break}if(p===-1)r.push([u,...h]);else if(h.length>0){let[f,...v]=h;const $=r[p][1];_0($)&&_0(f)&&(f=Ys(!0,$,f)),r[p]=[u,f,...v]}}}}const j8=new Jh().freeze();function tu(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `parser`")}function nu(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `compiler`")}function ru(e,t){if(t)throw new Error("Cannot call `"+e+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function Td(e){if(!_0(e)||typeof e.type!="string")throw new TypeError("Expected node, got `"+e+"`")}function Fd(e,t,n){if(!n)throw new Error("`"+e+"` finished async. Use `"+t+"` instead")}function Do(e){return H8(e)?e:new fg(e)}function H8(e){return!!(e&&typeof e=="object"&&"message"in e&&"messages"in e)}function W8(e){return typeof e=="string"||U8(e)}function U8(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const X8="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",Nd=[],Md={allowDangerousHtml:!0},K8=/^(https?|ircs?|mailto|xmpp)$/i,V8=[{from:"astPlugins",id:"remove-buggy-html-in-markdown-parser"},{from:"allowDangerousHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"allowNode",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowElement"},{from:"allowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowedElements"},{from:"disallowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"disallowedElements"},{from:"escapeHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"includeElementIndex",id:"#remove-includeelementindex"},{from:"includeNodeIndex",id:"change-includenodeindex-to-includeelementindex"},{from:"linkTarget",id:"remove-linktarget"},{from:"plugins",id:"change-plugins-to-remarkplugins",to:"remarkPlugins"},{from:"rawSourcePos",id:"#remove-rawsourcepos"},{from:"renderers",id:"change-renderers-to-components",to:"components"},{from:"source",id:"change-source-to-children",to:"children"},{from:"sourcePos",id:"#remove-sourcepos"},{from:"transformImageUri",id:"#add-urltransform",to:"urlTransform"},{from:"transformLinkUri",id:"#add-urltransform",to:"urlTransform"}];function G8(e){const t=e.allowedElements,n=e.allowElement,r=e.children||"",i=e.className,a=e.components,o=e.disallowedElements,l=e.rehypePlugins||Nd,s=e.remarkPlugins||Nd,u=e.remarkRehypeOptions?{...e.remarkRehypeOptions,...Md}:Md,h=e.skipHtml,m=e.unwrapDisallowed,p=e.urlTransform||Q8,f=j8().use(Tx).use(s).use(S8,u).use(l),v=new fg;typeof r=="string"&&(v.value=r);for(const y of V8)Object.hasOwn(e,y.from)&&(""+y.from+(y.to?"use `"+y.to+"` instead":"remove it")+X8+y.id,void 0);const $=f.parse(v);let k=f.runSync($,v);return i&&(k={type:"element",tagName:"div",properties:{className:i},children:k.type==="root"?k.children:[k]}),Zh(k,g),h6(k,{Fragment:N.Fragment,components:a,ignoreInvalidStyle:!0,jsx:N.jsx,jsxs:N.jsxs,passKeys:!0,passNode:!0});function g(y,w,P){if(y.type==="raw"&&P&&typeof w=="number")return h?P.children.splice(w,1):P.children[w]={type:"text",value:y.value},w;if(y.type==="element"){let F;for(F in Vs)if(Object.hasOwn(Vs,F)&&Object.hasOwn(y.properties,F)){const D=y.properties[F],M=Vs[F];(M===null||M.includes(y.tagName))&&(y.properties[F]=p(String(D||""),F,y))}}if(y.type==="element"){let F=t?!t.includes(y.tagName):o?o.includes(y.tagName):!1;if(!F&&n&&typeof w=="number"&&(F=!n(y,w,P)),F&&P&&typeof w=="number")return m&&y.children?P.children.splice(w,1,...y.children):P.children.splice(w,1),w}}}function Q8(e){const t=e.indexOf(":"),n=e.indexOf("?"),r=e.indexOf("#"),i=e.indexOf("/");return t<0||i>-1&&t>i||n>-1&&t>n||r>-1&&t>r||K8.test(e.slice(0,t))?e:""}function Y8(e,t){const n=String(e);let r=n.indexOf(t),i=r,a=0,o=0;for(;r!==-1;)r===i?++a>o&&(o=a):a=1,i=r+t.length,r=n.indexOf(t,i);return o}function Z8(){return{enter:{mathFlow:e,mathFlowFenceMeta:t,mathText:a},exit:{mathFlow:i,mathFlowFence:r,mathFlowFenceMeta:n,mathFlowValue:l,mathText:o,mathTextData:l}};function e(s){const u={type:"element",tagName:"code",properties:{className:["language-math","math-display"]},children:[]};this.enter({type:"math",meta:null,value:"",data:{hName:"pre",hChildren:[u]}},s)}function t(){this.buffer()}function n(){const s=this.resume(),u=this.stack[this.stack.length-1];u.type,u.meta=s}function r(){this.data.mathFlowInside||(this.buffer(),this.data.mathFlowInside=!0)}function i(s){const u=this.resume().replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),h=this.stack[this.stack.length-1];h.type,this.exit(s),h.value=u;const m=h.data.hChildren[0];m.type,m.tagName,m.children.push({type:"text",value:u}),this.data.mathFlowInside=void 0}function a(s){this.enter({type:"inlineMath",value:"",data:{hName:"code",hProperties:{className:["language-math","math-inline"]},hChildren:[]}},s),this.buffer()}function o(s){const u=this.resume(),h=this.stack[this.stack.length-1];h.type,this.exit(s),h.value=u,h.data.hChildren.push({type:"text",value:u})}function l(s){this.config.enter.data.call(this,s),this.config.exit.data.call(this,s)}}function J8(e){let t=(e||{}).singleDollarTextMath;return t==null&&(t=!0),r.peek=i,{unsafe:[{character:"\r",inConstruct:"mathFlowMeta"},{character:`
`,inConstruct:"mathFlowMeta"},{character:"$",after:t?void 0:"\\$",inConstruct:"phrasing"},{character:"$",inConstruct:"mathFlowMeta"},{atBreak:!0,character:"$",after:"\\$"}],handlers:{math:n,inlineMath:r}};function n(a,o,l,s){const u=a.value||"",h=l.createTracker(s),m="$".repeat(Math.max(Y8(u,"$")+1,2)),p=l.enter("mathFlow");let f=h.move(m);if(a.meta){const v=l.enter("mathFlowMeta");f+=h.move(l.safe(a.meta,{after:`
`,before:f,encode:["$"],...h.current()})),v()}return f+=h.move(`
`),u&&(f+=h.move(u+`
`)),f+=h.move(m),p(),f}function r(a,o,l){let s=a.value||"",u=1;for(t||u++;new RegExp("(^|[^$])"+"\\$".repeat(u)+"([^$]|$)").test(s);)u++;const h="$".repeat(u);/[^ \r\n]/.test(s)&&(/^[ \r\n]/.test(s)&&/[ \r\n]$/.test(s)||/^\$|\$$/.test(s))&&(s=" "+s+" ");let m=-1;for(;++m<l.unsafe.length;){const p=l.unsafe[m];if(!p.atBreak)continue;const f=l.compilePattern(p);let v;for(;v=f.exec(s);){let $=v.index;s.codePointAt($)===10&&s.codePointAt($-1)===13&&$--,s=s.slice(0,$)+" "+s.slice(v.index+1)}}return h+s+h}function i(){return"$"}}const ew={tokenize:tw,concrete:!0,name:"mathFlow"},Rd={tokenize:nw,partial:!0};function tw(e,t,n){const r=this,i=r.events[r.events.length-1],a=i&&i[1].type==="linePrefix"?i[2].sliceSerialize(i[1],!0).length:0;let o=0;return l;function l(y){return e.enter("mathFlow"),e.enter("mathFlowFence"),e.enter("mathFlowFenceSequence"),s(y)}function s(y){return y===36?(e.consume(y),o++,s):o<2?n(y):(e.exit("mathFlowFenceSequence"),xe(e,u,"whitespace")(y))}function u(y){return y===null||ee(y)?m(y):(e.enter("mathFlowFenceMeta"),e.enter("chunkString",{contentType:"string"}),h(y))}function h(y){return y===null||ee(y)?(e.exit("chunkString"),e.exit("mathFlowFenceMeta"),m(y)):y===36?n(y):(e.consume(y),h)}function m(y){return e.exit("mathFlowFence"),r.interrupt?t(y):e.attempt(Rd,p,k)(y)}function p(y){return e.attempt({tokenize:g,partial:!0},k,f)(y)}function f(y){return(a?xe(e,v,"linePrefix",a+1):v)(y)}function v(y){return y===null?k(y):ee(y)?e.attempt(Rd,p,k)(y):(e.enter("mathFlowValue"),$(y))}function $(y){return y===null||ee(y)?(e.exit("mathFlowValue"),v(y)):(e.consume(y),$)}function k(y){return e.exit("mathFlow"),t(y)}function g(y,w,P){let F=0;return xe(y,D,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4);function D(I){return y.enter("mathFlowFence"),y.enter("mathFlowFenceSequence"),M(I)}function M(I){return I===36?(F++,y.consume(I),M):F<o?P(I):(y.exit("mathFlowFenceSequence"),xe(y,q,"whitespace")(I))}function q(I){return I===null||ee(I)?(y.exit("mathFlowFence"),w(I)):P(I)}}}function nw(e,t,n){const r=this;return i;function i(o){return o===null?t(o):(e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),a)}function a(o){return r.parser.lazy[r.now().line]?n(o):t(o)}}function rw(e){let n=(e||{}).singleDollarTextMath;return n==null&&(n=!0),{tokenize:r,resolve:iw,previous:aw,name:"mathText"};function r(i,a,o){let l=0,s,u;return h;function h($){return i.enter("mathText"),i.enter("mathTextSequence"),m($)}function m($){return $===36?(i.consume($),l++,m):l<2&&!n?o($):(i.exit("mathTextSequence"),p($))}function p($){return $===null?o($):$===36?(u=i.enter("mathTextSequence"),s=0,v($)):$===32?(i.enter("space"),i.consume($),i.exit("space"),p):ee($)?(i.enter("lineEnding"),i.consume($),i.exit("lineEnding"),p):(i.enter("mathTextData"),f($))}function f($){return $===null||$===32||$===36||ee($)?(i.exit("mathTextData"),p($)):(i.consume($),f)}function v($){return $===36?(i.consume($),s++,v):s===l?(i.exit("mathTextSequence"),i.exit("mathText"),a($)):(u.type="mathTextData",f($))}}}function iw(e){let t=e.length-4,n=3,r,i;if((e[n][1].type==="lineEnding"||e[n][1].type==="space")&&(e[t][1].type==="lineEnding"||e[t][1].type==="space")){for(r=n;++r<t;)if(e[r][1].type==="mathTextData"){e[t][1].type="mathTextPadding",e[n][1].type="mathTextPadding",n+=2,t-=2;break}}for(r=n-1,t++;++r<=t;)i===void 0?r!==t&&e[r][1].type!=="lineEnding"&&(i=r):(r===t||e[r][1].type==="lineEnding")&&(e[i][1].type="mathTextData",r!==i+2&&(e[i][1].end=e[r-1][1].end,e.splice(i+2,r-i-2),t-=r-i-2,r=i+2),i=void 0);return e}function aw(e){return e!==36||this.events[this.events.length-1][1].type==="characterEscape"}function ow(e){return{flow:{36:ew},text:{36:rw(e)}}}class zt{constructor(t,n,r){this.lexer=void 0,this.start=void 0,this.end=void 0,this.lexer=t,this.start=n,this.end=r}static range(t,n){return n?!t||!t.loc||!n.loc||t.loc.lexer!==n.loc.lexer?null:new zt(t.loc.lexer,t.loc.start,n.loc.end):t&&t.loc}}class Wt{constructor(t,n){this.text=void 0,this.loc=void 0,this.noexpand=void 0,this.treatAsRelax=void 0,this.text=t,this.loc=n}range(t,n){return new Wt(n,zt.range(this,t))}}class H{constructor(t,n){this.name=void 0,this.position=void 0,this.length=void 0,this.rawMessage=void 0;var r="KaTeX parse error: "+t,i,a,o=n&&n.loc;if(o&&o.start<=o.end){var l=o.lexer.input;i=o.start,a=o.end,i===l.length?r+=" at end of input: ":r+=" at position "+(i+1)+": ";var s=l.slice(i,a).replace(/[^]/g,"$&̲"),u;i>15?u="…"+l.slice(i-15,i):u=l.slice(0,i);var h;a+15<l.length?h=l.slice(a,a+15)+"…":h=l.slice(a),r+=u+s+h}var m=new Error(r);return m.name="ParseError",m.__proto__=H.prototype,m.position=i,i!=null&&a!=null&&(m.length=a-i),m.rawMessage=t,m}}H.prototype.__proto__=Error.prototype;var lw=function(t,n){return t.indexOf(n)!==-1},sw=function(t,n){return t===void 0?n:t},uw=/([A-Z])/g,hw=function(t){return t.replace(uw,"-$1").toLowerCase()},cw={"&":"&amp;",">":"&gt;","<":"&lt;",'"':"&quot;","'":"&#x27;"},mw=/[&><"']/g;function dw(e){return String(e).replace(mw,t=>cw[t])}var pg=function e(t){return t.type==="ordgroup"||t.type==="color"?t.body.length===1?e(t.body[0]):t:t.type==="font"?e(t.body):t},fw=function(t){var n=pg(t);return n.type==="mathord"||n.type==="textord"||n.type==="atom"},pw=function(t){if(!t)throw new Error("Expected non-null, but got "+String(t));return t},bw=function(t){var n=/^[\x00-\x20]*([^\\/#?]*?)(:|&#0*58|&#x0*3a|&colon)/i.exec(t);return n?n[2]!==":"||!/^[a-zA-Z][a-zA-Z0-9+\-.]*$/.test(n[1])?null:n[1].toLowerCase():"_relative"},te={contains:lw,deflt:sw,escape:dw,hyphenate:hw,getBaseElem:pg,isCharacterBox:fw,protocolFromUrl:bw},nl={displayMode:{type:"boolean",description:"Render math in display mode, which puts the math in display style (so \\int and \\sum are large, for example), and centers the math on the page on its own line.",cli:"-d, --display-mode"},output:{type:{enum:["htmlAndMathml","html","mathml"]},description:"Determines the markup language of the output.",cli:"-F, --format <type>"},leqno:{type:"boolean",description:"Render display math in leqno style (left-justified tags)."},fleqn:{type:"boolean",description:"Render display math flush left."},throwOnError:{type:"boolean",default:!0,cli:"-t, --no-throw-on-error",cliDescription:"Render errors (in the color given by --error-color) instead of throwing a ParseError exception when encountering an error."},errorColor:{type:"string",default:"#cc0000",cli:"-c, --error-color <color>",cliDescription:"A color string given in the format 'rgb' or 'rrggbb' (no #). This option determines the color of errors rendered by the -t option.",cliProcessor:e=>"#"+e},macros:{type:"object",cli:"-m, --macro <def>",cliDescription:"Define custom macro of the form '\\foo:expansion' (use multiple -m arguments for multiple macros).",cliDefault:[],cliProcessor:(e,t)=>(t.push(e),t)},minRuleThickness:{type:"number",description:"Specifies a minimum thickness, in ems, for fraction lines, `\\sqrt` top lines, `{array}` vertical lines, `\\hline`, `\\hdashline`, `\\underline`, `\\overline`, and the borders of `\\fbox`, `\\boxed`, and `\\fcolorbox`.",processor:e=>Math.max(0,e),cli:"--min-rule-thickness <size>",cliProcessor:parseFloat},colorIsTextColor:{type:"boolean",description:"Makes \\color behave like LaTeX's 2-argument \\textcolor, instead of LaTeX's one-argument \\color mode change.",cli:"-b, --color-is-text-color"},strict:{type:[{enum:["warn","ignore","error"]},"boolean","function"],description:"Turn on strict / LaTeX faithfulness mode, which throws an error if the input uses features that are not supported by LaTeX.",cli:"-S, --strict",cliDefault:!1},trust:{type:["boolean","function"],description:"Trust the input, enabling all HTML features such as \\url.",cli:"-T, --trust"},maxSize:{type:"number",default:1/0,description:"If non-zero, all user-specified sizes, e.g. in \\rule{500em}{500em}, will be capped to maxSize ems. Otherwise, elements and spaces can be arbitrarily large",processor:e=>Math.max(0,e),cli:"-s, --max-size <n>",cliProcessor:parseInt},maxExpand:{type:"number",default:1e3,description:"Limit the number of macro expansions to the specified number, to prevent e.g. infinite macro loops. If set to Infinity, the macro expander will try to fully expand as in LaTeX.",processor:e=>Math.max(0,e),cli:"-e, --max-expand <n>",cliProcessor:e=>e==="Infinity"?1/0:parseInt(e)},globalGroup:{type:"boolean",cli:!1}};function gw(e){if(e.default)return e.default;var t=e.type,n=Array.isArray(t)?t[0]:t;if(typeof n!="string")return n.enum[0];switch(n){case"boolean":return!1;case"string":return"";case"number":return 0;case"object":return{}}}class ec{constructor(t){this.displayMode=void 0,this.output=void 0,this.leqno=void 0,this.fleqn=void 0,this.throwOnError=void 0,this.errorColor=void 0,this.macros=void 0,this.minRuleThickness=void 0,this.colorIsTextColor=void 0,this.strict=void 0,this.trust=void 0,this.maxSize=void 0,this.maxExpand=void 0,this.globalGroup=void 0,t=t||{};for(var n in nl)if(nl.hasOwnProperty(n)){var r=nl[n];this[n]=t[n]!==void 0?r.processor?r.processor(t[n]):t[n]:gw(r)}}reportNonstrict(t,n,r){var i=this.strict;if(typeof i=="function"&&(i=i(t,n,r)),!(!i||i==="ignore")){if(i===!0||i==="error")throw new H("LaTeX-incompatible input and strict mode is set to 'error': "+(n+" ["+t+"]"),r);i==="warn"?typeof console<"u"&&console.warn("LaTeX-incompatible input and strict mode is set to 'warn': "+(n+" ["+t+"]")):typeof console<"u"&&console.warn("LaTeX-incompatible input and strict mode is set to "+("unrecognized '"+i+"': "+n+" ["+t+"]"))}}useStrictBehavior(t,n,r){var i=this.strict;if(typeof i=="function")try{i=i(t,n,r)}catch{i="error"}return!i||i==="ignore"?!1:i===!0||i==="error"?!0:i==="warn"?(typeof console<"u"&&console.warn("LaTeX-incompatible input and strict mode is set to 'warn': "+(n+" ["+t+"]")),!1):(typeof console<"u"&&console.warn("LaTeX-incompatible input and strict mode is set to "+("unrecognized '"+i+"': "+n+" ["+t+"]")),!1)}isTrusted(t){if(t.url&&!t.protocol){var n=te.protocolFromUrl(t.url);if(n==null)return!1;t.protocol=n}var r=typeof this.trust=="function"?this.trust(t):this.trust;return!!r}}class Zn{constructor(t,n,r){this.id=void 0,this.size=void 0,this.cramped=void 0,this.id=t,this.size=n,this.cramped=r}sup(){return dn[yw[this.id]]}sub(){return dn[vw[this.id]]}fracNum(){return dn[$w[this.id]]}fracDen(){return dn[xw[this.id]]}cramp(){return dn[ww[this.id]]}text(){return dn[_w[this.id]]}isTight(){return this.size>=2}}var tc=0,Tl=1,Ei=2,Rn=3,Xa=4,jt=5,Ni=6,mt=7,dn=[new Zn(tc,0,!1),new Zn(Tl,0,!0),new Zn(Ei,1,!1),new Zn(Rn,1,!0),new Zn(Xa,2,!1),new Zn(jt,2,!0),new Zn(Ni,3,!1),new Zn(mt,3,!0)],yw=[Xa,jt,Xa,jt,Ni,mt,Ni,mt],vw=[jt,jt,jt,jt,mt,mt,mt,mt],$w=[Ei,Rn,Xa,jt,Ni,mt,Ni,mt],xw=[Rn,Rn,jt,jt,mt,mt,mt,mt],ww=[Tl,Tl,Rn,Rn,jt,jt,mt,mt],_w=[tc,Tl,Ei,Rn,Ei,Rn,Ei,Rn],ie={DISPLAY:dn[tc],TEXT:dn[Ei],SCRIPT:dn[Xa],SCRIPTSCRIPT:dn[Ni]},S0=[{name:"latin",blocks:[[256,591],[768,879]]},{name:"cyrillic",blocks:[[1024,1279]]},{name:"armenian",blocks:[[1328,1423]]},{name:"brahmic",blocks:[[2304,4255]]},{name:"georgian",blocks:[[4256,4351]]},{name:"cjk",blocks:[[12288,12543],[19968,40879],[65280,65376]]},{name:"hangul",blocks:[[44032,55215]]}];function kw(e){for(var t=0;t<S0.length;t++)for(var n=S0[t],r=0;r<n.blocks.length;r++){var i=n.blocks[r];if(e>=i[0]&&e<=i[1])return n.name}return null}var rl=[];S0.forEach(e=>e.blocks.forEach(t=>rl.push(...t)));function bg(e){for(var t=0;t<rl.length;t+=2)if(e>=rl[t]&&e<=rl[t+1])return!0;return!1}var ni=80,Sw=function(t,n){return"M95,"+(622+t+n)+`
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
M`+(834+t)+" "+n+"h400000v"+(40+t)+"h-400000z"},Ew=function(t,n){return"M263,"+(601+t+n)+`c0.7,0,18,39.7,52,119
c34,79.3,68.167,158.7,102.5,238c34.3,79.3,51.8,119.3,52.5,120
c340,-704.7,510.7,-1060.3,512,-1067
l`+t/2.084+" -"+t+`
c4.7,-7.3,11,-11,19,-11
H40000v`+(40+t)+`H1012.3
s-271.3,567,-271.3,567c-38.7,80.7,-84,175,-136,283c-52,108,-89.167,185.3,-111.5,232
c-22.3,46.7,-33.8,70.3,-34.5,71c-4.7,4.7,-12.3,7,-23,7s-12,-1,-12,-1
s-109,-253,-109,-253c-72.7,-168,-109.3,-252,-110,-252c-10.7,8,-22,16.7,-34,26
c-22,17.3,-33.3,26,-34,26s-26,-26,-26,-26s76,-59,76,-59s76,-60,76,-60z
M`+(1001+t)+" "+n+"h400000v"+(40+t)+"h-400000z"},Cw=function(t,n){return"M983 "+(10+t+n)+`
l`+t/3.13+" -"+t+`
c4,-6.7,10,-10,18,-10 H400000v`+(40+t)+`
H1013.1s-83.4,268,-264.1,840c-180.7,572,-277,876.3,-289,913c-4.7,4.7,-12.7,7,-24,7
s-12,0,-12,0c-1.3,-3.3,-3.7,-11.7,-7,-25c-35.3,-125.3,-106.7,-373.3,-214,-744
c-10,12,-21,25,-33,39s-32,39,-32,39c-6,-5.3,-15,-14,-27,-26s25,-30,25,-30
c26.7,-32.7,52,-63,76,-91s52,-60,52,-60s208,722,208,722
c56,-175.3,126.3,-397.3,211,-666c84.7,-268.7,153.8,-488.2,207.5,-658.5
c53.7,-170.3,84.5,-266.8,92.5,-289.5z
M`+(1001+t)+" "+n+"h400000v"+(40+t)+"h-400000z"},Dw=function(t,n){return"M424,"+(2398+t+n)+`
c-1.3,-0.7,-38.5,-172,-111.5,-514c-73,-342,-109.8,-513.3,-110.5,-514
c0,-2,-10.7,14.3,-32,49c-4.7,7.3,-9.8,15.7,-15.5,25c-5.7,9.3,-9.8,16,-12.5,20
s-5,7,-5,7c-4,-3.3,-8.3,-7.7,-13,-13s-13,-13,-13,-13s76,-122,76,-122s77,-121,77,-121
s209,968,209,968c0,-2,84.7,-361.7,254,-1079c169.3,-717.3,254.7,-1077.7,256,-1081
l`+t/4.223+" -"+t+`c4,-6.7,10,-10,18,-10 H400000
v`+(40+t)+`H1014.6
s-87.3,378.7,-272.6,1166c-185.3,787.3,-279.3,1182.3,-282,1185
c-2,6,-10,9,-24,9
c-8,0,-12,-0.7,-12,-2z M`+(1001+t)+" "+n+`
h400000v`+(40+t)+"h-400000z"},zw=function(t,n){return"M473,"+(2713+t+n)+`
c339.3,-1799.3,509.3,-2700,510,-2702 l`+t/5.298+" -"+t+`
c3.3,-7.3,9.3,-11,18,-11 H400000v`+(40+t)+`H1017.7
s-90.5,478,-276.2,1466c-185.7,988,-279.5,1483,-281.5,1485c-2,6,-10,9,-24,9
c-8,0,-12,-0.7,-12,-2c0,-1.3,-5.3,-32,-16,-92c-50.7,-293.3,-119.7,-693.3,-207,-1200
c0,-1.3,-5.3,8.7,-16,30c-10.7,21.3,-21.3,42.7,-32,64s-16,33,-16,33s-26,-26,-26,-26
s76,-153,76,-153s77,-151,77,-151c0.7,0.7,35.7,202,105,604c67.3,400.7,102,602.7,104,
606zM`+(1001+t)+" "+n+"h400000v"+(40+t)+"H1017.7z"},Pw=function(t){var n=t/2;return"M400000 "+t+" H0 L"+n+" 0 l65 45 L145 "+(t-80)+" H400000z"},Aw=function(t,n,r){var i=r-54-n-t;return"M702 "+(t+n)+"H400000"+(40+t)+`
H742v`+i+`l-4 4-4 4c-.667.7 -2 1.5-4 2.5s-4.167 1.833-6.5 2.5-5.5 1-9.5 1
h-12l-28-84c-16.667-52-96.667 -294.333-240-727l-212 -643 -85 170
c-4-3.333-8.333-7.667-13 -13l-13-13l77-155 77-156c66 199.333 139 419.667
219 661 l218 661zM702 `+n+"H400000v"+(40+t)+"H742z"},Tw=function(t,n,r){n=1e3*n;var i="";switch(t){case"sqrtMain":i=Sw(n,ni);break;case"sqrtSize1":i=Ew(n,ni);break;case"sqrtSize2":i=Cw(n,ni);break;case"sqrtSize3":i=Dw(n,ni);break;case"sqrtSize4":i=zw(n,ni);break;case"sqrtTall":i=Aw(n,ni,r)}return i},Fw=function(t,n){switch(t){case"⎜":return"M291 0 H417 V"+n+" H291z M291 0 H417 V"+n+" H291z";case"∣":return"M145 0 H188 V"+n+" H145z M145 0 H188 V"+n+" H145z";case"∥":return"M145 0 H188 V"+n+" H145z M145 0 H188 V"+n+" H145z"+("M367 0 H410 V"+n+" H367z M367 0 H410 V"+n+" H367z");case"⎟":return"M457 0 H583 V"+n+" H457z M457 0 H583 V"+n+" H457z";case"⎢":return"M319 0 H403 V"+n+" H319z M319 0 H403 V"+n+" H319z";case"⎥":return"M263 0 H347 V"+n+" H263z M263 0 H347 V"+n+" H263z";case"⎪":return"M384 0 H504 V"+n+" H384z M384 0 H504 V"+n+" H384z";case"⏐":return"M312 0 H355 V"+n+" H312z M312 0 H355 V"+n+" H312z";case"‖":return"M257 0 H300 V"+n+" H257z M257 0 H300 V"+n+" H257z"+("M478 0 H521 V"+n+" H478z M478 0 H521 V"+n+" H478z");default:return""}},qd={doubleleftarrow:`M262 157
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
M500 241 v40 H399408 v-40z M500 435 v40 H400000 v-40z`},Nw=function(t,n){switch(t){case"lbrack":return"M403 1759 V84 H666 V0 H319 V1759 v"+n+` v1759 h347 v-84
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
-470,-1265c-4.7,-6,-9.7,-11.7,-15,-17c-0.7,-0.7,-6.7,-1,-18,-1z`;default:throw new Error("Unknown stretchy delimiter.")}};class io{constructor(t){this.children=void 0,this.classes=void 0,this.height=void 0,this.depth=void 0,this.maxFontSize=void 0,this.style=void 0,this.children=t,this.classes=[],this.height=0,this.depth=0,this.maxFontSize=0,this.style={}}hasClass(t){return te.contains(this.classes,t)}toNode(){for(var t=document.createDocumentFragment(),n=0;n<this.children.length;n++)t.appendChild(this.children[n].toNode());return t}toMarkup(){for(var t="",n=0;n<this.children.length;n++)t+=this.children[n].toMarkup();return t}toText(){var t=n=>n.toText();return this.children.map(t).join("")}}var bn={"AMS-Regular":{32:[0,0,0,0,.25],65:[0,.68889,0,0,.72222],66:[0,.68889,0,0,.66667],67:[0,.68889,0,0,.72222],68:[0,.68889,0,0,.72222],69:[0,.68889,0,0,.66667],70:[0,.68889,0,0,.61111],71:[0,.68889,0,0,.77778],72:[0,.68889,0,0,.77778],73:[0,.68889,0,0,.38889],74:[.16667,.68889,0,0,.5],75:[0,.68889,0,0,.77778],76:[0,.68889,0,0,.66667],77:[0,.68889,0,0,.94445],78:[0,.68889,0,0,.72222],79:[.16667,.68889,0,0,.77778],80:[0,.68889,0,0,.61111],81:[.16667,.68889,0,0,.77778],82:[0,.68889,0,0,.72222],83:[0,.68889,0,0,.55556],84:[0,.68889,0,0,.66667],85:[0,.68889,0,0,.72222],86:[0,.68889,0,0,.72222],87:[0,.68889,0,0,1],88:[0,.68889,0,0,.72222],89:[0,.68889,0,0,.72222],90:[0,.68889,0,0,.66667],107:[0,.68889,0,0,.55556],160:[0,0,0,0,.25],165:[0,.675,.025,0,.75],174:[.15559,.69224,0,0,.94666],240:[0,.68889,0,0,.55556],295:[0,.68889,0,0,.54028],710:[0,.825,0,0,2.33334],732:[0,.9,0,0,2.33334],770:[0,.825,0,0,2.33334],771:[0,.9,0,0,2.33334],989:[.08167,.58167,0,0,.77778],1008:[0,.43056,.04028,0,.66667],8245:[0,.54986,0,0,.275],8463:[0,.68889,0,0,.54028],8487:[0,.68889,0,0,.72222],8498:[0,.68889,0,0,.55556],8502:[0,.68889,0,0,.66667],8503:[0,.68889,0,0,.44445],8504:[0,.68889,0,0,.66667],8513:[0,.68889,0,0,.63889],8592:[-.03598,.46402,0,0,.5],8594:[-.03598,.46402,0,0,.5],8602:[-.13313,.36687,0,0,1],8603:[-.13313,.36687,0,0,1],8606:[.01354,.52239,0,0,1],8608:[.01354,.52239,0,0,1],8610:[.01354,.52239,0,0,1.11111],8611:[.01354,.52239,0,0,1.11111],8619:[0,.54986,0,0,1],8620:[0,.54986,0,0,1],8621:[-.13313,.37788,0,0,1.38889],8622:[-.13313,.36687,0,0,1],8624:[0,.69224,0,0,.5],8625:[0,.69224,0,0,.5],8630:[0,.43056,0,0,1],8631:[0,.43056,0,0,1],8634:[.08198,.58198,0,0,.77778],8635:[.08198,.58198,0,0,.77778],8638:[.19444,.69224,0,0,.41667],8639:[.19444,.69224,0,0,.41667],8642:[.19444,.69224,0,0,.41667],8643:[.19444,.69224,0,0,.41667],8644:[.1808,.675,0,0,1],8646:[.1808,.675,0,0,1],8647:[.1808,.675,0,0,1],8648:[.19444,.69224,0,0,.83334],8649:[.1808,.675,0,0,1],8650:[.19444,.69224,0,0,.83334],8651:[.01354,.52239,0,0,1],8652:[.01354,.52239,0,0,1],8653:[-.13313,.36687,0,0,1],8654:[-.13313,.36687,0,0,1],8655:[-.13313,.36687,0,0,1],8666:[.13667,.63667,0,0,1],8667:[.13667,.63667,0,0,1],8669:[-.13313,.37788,0,0,1],8672:[-.064,.437,0,0,1.334],8674:[-.064,.437,0,0,1.334],8705:[0,.825,0,0,.5],8708:[0,.68889,0,0,.55556],8709:[.08167,.58167,0,0,.77778],8717:[0,.43056,0,0,.42917],8722:[-.03598,.46402,0,0,.5],8724:[.08198,.69224,0,0,.77778],8726:[.08167,.58167,0,0,.77778],8733:[0,.69224,0,0,.77778],8736:[0,.69224,0,0,.72222],8737:[0,.69224,0,0,.72222],8738:[.03517,.52239,0,0,.72222],8739:[.08167,.58167,0,0,.22222],8740:[.25142,.74111,0,0,.27778],8741:[.08167,.58167,0,0,.38889],8742:[.25142,.74111,0,0,.5],8756:[0,.69224,0,0,.66667],8757:[0,.69224,0,0,.66667],8764:[-.13313,.36687,0,0,.77778],8765:[-.13313,.37788,0,0,.77778],8769:[-.13313,.36687,0,0,.77778],8770:[-.03625,.46375,0,0,.77778],8774:[.30274,.79383,0,0,.77778],8776:[-.01688,.48312,0,0,.77778],8778:[.08167,.58167,0,0,.77778],8782:[.06062,.54986,0,0,.77778],8783:[.06062,.54986,0,0,.77778],8785:[.08198,.58198,0,0,.77778],8786:[.08198,.58198,0,0,.77778],8787:[.08198,.58198,0,0,.77778],8790:[0,.69224,0,0,.77778],8791:[.22958,.72958,0,0,.77778],8796:[.08198,.91667,0,0,.77778],8806:[.25583,.75583,0,0,.77778],8807:[.25583,.75583,0,0,.77778],8808:[.25142,.75726,0,0,.77778],8809:[.25142,.75726,0,0,.77778],8812:[.25583,.75583,0,0,.5],8814:[.20576,.70576,0,0,.77778],8815:[.20576,.70576,0,0,.77778],8816:[.30274,.79383,0,0,.77778],8817:[.30274,.79383,0,0,.77778],8818:[.22958,.72958,0,0,.77778],8819:[.22958,.72958,0,0,.77778],8822:[.1808,.675,0,0,.77778],8823:[.1808,.675,0,0,.77778],8828:[.13667,.63667,0,0,.77778],8829:[.13667,.63667,0,0,.77778],8830:[.22958,.72958,0,0,.77778],8831:[.22958,.72958,0,0,.77778],8832:[.20576,.70576,0,0,.77778],8833:[.20576,.70576,0,0,.77778],8840:[.30274,.79383,0,0,.77778],8841:[.30274,.79383,0,0,.77778],8842:[.13597,.63597,0,0,.77778],8843:[.13597,.63597,0,0,.77778],8847:[.03517,.54986,0,0,.77778],8848:[.03517,.54986,0,0,.77778],8858:[.08198,.58198,0,0,.77778],8859:[.08198,.58198,0,0,.77778],8861:[.08198,.58198,0,0,.77778],8862:[0,.675,0,0,.77778],8863:[0,.675,0,0,.77778],8864:[0,.675,0,0,.77778],8865:[0,.675,0,0,.77778],8872:[0,.69224,0,0,.61111],8873:[0,.69224,0,0,.72222],8874:[0,.69224,0,0,.88889],8876:[0,.68889,0,0,.61111],8877:[0,.68889,0,0,.61111],8878:[0,.68889,0,0,.72222],8879:[0,.68889,0,0,.72222],8882:[.03517,.54986,0,0,.77778],8883:[.03517,.54986,0,0,.77778],8884:[.13667,.63667,0,0,.77778],8885:[.13667,.63667,0,0,.77778],8888:[0,.54986,0,0,1.11111],8890:[.19444,.43056,0,0,.55556],8891:[.19444,.69224,0,0,.61111],8892:[.19444,.69224,0,0,.61111],8901:[0,.54986,0,0,.27778],8903:[.08167,.58167,0,0,.77778],8905:[.08167,.58167,0,0,.77778],8906:[.08167,.58167,0,0,.77778],8907:[0,.69224,0,0,.77778],8908:[0,.69224,0,0,.77778],8909:[-.03598,.46402,0,0,.77778],8910:[0,.54986,0,0,.76042],8911:[0,.54986,0,0,.76042],8912:[.03517,.54986,0,0,.77778],8913:[.03517,.54986,0,0,.77778],8914:[0,.54986,0,0,.66667],8915:[0,.54986,0,0,.66667],8916:[0,.69224,0,0,.66667],8918:[.0391,.5391,0,0,.77778],8919:[.0391,.5391,0,0,.77778],8920:[.03517,.54986,0,0,1.33334],8921:[.03517,.54986,0,0,1.33334],8922:[.38569,.88569,0,0,.77778],8923:[.38569,.88569,0,0,.77778],8926:[.13667,.63667,0,0,.77778],8927:[.13667,.63667,0,0,.77778],8928:[.30274,.79383,0,0,.77778],8929:[.30274,.79383,0,0,.77778],8934:[.23222,.74111,0,0,.77778],8935:[.23222,.74111,0,0,.77778],8936:[.23222,.74111,0,0,.77778],8937:[.23222,.74111,0,0,.77778],8938:[.20576,.70576,0,0,.77778],8939:[.20576,.70576,0,0,.77778],8940:[.30274,.79383,0,0,.77778],8941:[.30274,.79383,0,0,.77778],8994:[.19444,.69224,0,0,.77778],8995:[.19444,.69224,0,0,.77778],9416:[.15559,.69224,0,0,.90222],9484:[0,.69224,0,0,.5],9488:[0,.69224,0,0,.5],9492:[0,.37788,0,0,.5],9496:[0,.37788,0,0,.5],9585:[.19444,.68889,0,0,.88889],9586:[.19444,.74111,0,0,.88889],9632:[0,.675,0,0,.77778],9633:[0,.675,0,0,.77778],9650:[0,.54986,0,0,.72222],9651:[0,.54986,0,0,.72222],9654:[.03517,.54986,0,0,.77778],9660:[0,.54986,0,0,.72222],9661:[0,.54986,0,0,.72222],9664:[.03517,.54986,0,0,.77778],9674:[.11111,.69224,0,0,.66667],9733:[.19444,.69224,0,0,.94445],10003:[0,.69224,0,0,.83334],10016:[0,.69224,0,0,.83334],10731:[.11111,.69224,0,0,.66667],10846:[.19444,.75583,0,0,.61111],10877:[.13667,.63667,0,0,.77778],10878:[.13667,.63667,0,0,.77778],10885:[.25583,.75583,0,0,.77778],10886:[.25583,.75583,0,0,.77778],10887:[.13597,.63597,0,0,.77778],10888:[.13597,.63597,0,0,.77778],10889:[.26167,.75726,0,0,.77778],10890:[.26167,.75726,0,0,.77778],10891:[.48256,.98256,0,0,.77778],10892:[.48256,.98256,0,0,.77778],10901:[.13667,.63667,0,0,.77778],10902:[.13667,.63667,0,0,.77778],10933:[.25142,.75726,0,0,.77778],10934:[.25142,.75726,0,0,.77778],10935:[.26167,.75726,0,0,.77778],10936:[.26167,.75726,0,0,.77778],10937:[.26167,.75726,0,0,.77778],10938:[.26167,.75726,0,0,.77778],10949:[.25583,.75583,0,0,.77778],10950:[.25583,.75583,0,0,.77778],10955:[.28481,.79383,0,0,.77778],10956:[.28481,.79383,0,0,.77778],57350:[.08167,.58167,0,0,.22222],57351:[.08167,.58167,0,0,.38889],57352:[.08167,.58167,0,0,.77778],57353:[0,.43056,.04028,0,.66667],57356:[.25142,.75726,0,0,.77778],57357:[.25142,.75726,0,0,.77778],57358:[.41951,.91951,0,0,.77778],57359:[.30274,.79383,0,0,.77778],57360:[.30274,.79383,0,0,.77778],57361:[.41951,.91951,0,0,.77778],57366:[.25142,.75726,0,0,.77778],57367:[.25142,.75726,0,0,.77778],57368:[.25142,.75726,0,0,.77778],57369:[.25142,.75726,0,0,.77778],57370:[.13597,.63597,0,0,.77778],57371:[.13597,.63597,0,0,.77778]},"Caligraphic-Regular":{32:[0,0,0,0,.25],65:[0,.68333,0,.19445,.79847],66:[0,.68333,.03041,.13889,.65681],67:[0,.68333,.05834,.13889,.52653],68:[0,.68333,.02778,.08334,.77139],69:[0,.68333,.08944,.11111,.52778],70:[0,.68333,.09931,.11111,.71875],71:[.09722,.68333,.0593,.11111,.59487],72:[0,.68333,.00965,.11111,.84452],73:[0,.68333,.07382,0,.54452],74:[.09722,.68333,.18472,.16667,.67778],75:[0,.68333,.01445,.05556,.76195],76:[0,.68333,0,.13889,.68972],77:[0,.68333,0,.13889,1.2009],78:[0,.68333,.14736,.08334,.82049],79:[0,.68333,.02778,.11111,.79611],80:[0,.68333,.08222,.08334,.69556],81:[.09722,.68333,0,.11111,.81667],82:[0,.68333,0,.08334,.8475],83:[0,.68333,.075,.13889,.60556],84:[0,.68333,.25417,0,.54464],85:[0,.68333,.09931,.08334,.62583],86:[0,.68333,.08222,0,.61278],87:[0,.68333,.08222,.08334,.98778],88:[0,.68333,.14643,.13889,.7133],89:[.09722,.68333,.08222,.08334,.66834],90:[0,.68333,.07944,.13889,.72473],160:[0,0,0,0,.25]},"Fraktur-Regular":{32:[0,0,0,0,.25],33:[0,.69141,0,0,.29574],34:[0,.69141,0,0,.21471],38:[0,.69141,0,0,.73786],39:[0,.69141,0,0,.21201],40:[.24982,.74947,0,0,.38865],41:[.24982,.74947,0,0,.38865],42:[0,.62119,0,0,.27764],43:[.08319,.58283,0,0,.75623],44:[0,.10803,0,0,.27764],45:[.08319,.58283,0,0,.75623],46:[0,.10803,0,0,.27764],47:[.24982,.74947,0,0,.50181],48:[0,.47534,0,0,.50181],49:[0,.47534,0,0,.50181],50:[0,.47534,0,0,.50181],51:[.18906,.47534,0,0,.50181],52:[.18906,.47534,0,0,.50181],53:[.18906,.47534,0,0,.50181],54:[0,.69141,0,0,.50181],55:[.18906,.47534,0,0,.50181],56:[0,.69141,0,0,.50181],57:[.18906,.47534,0,0,.50181],58:[0,.47534,0,0,.21606],59:[.12604,.47534,0,0,.21606],61:[-.13099,.36866,0,0,.75623],63:[0,.69141,0,0,.36245],65:[0,.69141,0,0,.7176],66:[0,.69141,0,0,.88397],67:[0,.69141,0,0,.61254],68:[0,.69141,0,0,.83158],69:[0,.69141,0,0,.66278],70:[.12604,.69141,0,0,.61119],71:[0,.69141,0,0,.78539],72:[.06302,.69141,0,0,.7203],73:[0,.69141,0,0,.55448],74:[.12604,.69141,0,0,.55231],75:[0,.69141,0,0,.66845],76:[0,.69141,0,0,.66602],77:[0,.69141,0,0,1.04953],78:[0,.69141,0,0,.83212],79:[0,.69141,0,0,.82699],80:[.18906,.69141,0,0,.82753],81:[.03781,.69141,0,0,.82699],82:[0,.69141,0,0,.82807],83:[0,.69141,0,0,.82861],84:[0,.69141,0,0,.66899],85:[0,.69141,0,0,.64576],86:[0,.69141,0,0,.83131],87:[0,.69141,0,0,1.04602],88:[0,.69141,0,0,.71922],89:[.18906,.69141,0,0,.83293],90:[.12604,.69141,0,0,.60201],91:[.24982,.74947,0,0,.27764],93:[.24982,.74947,0,0,.27764],94:[0,.69141,0,0,.49965],97:[0,.47534,0,0,.50046],98:[0,.69141,0,0,.51315],99:[0,.47534,0,0,.38946],100:[0,.62119,0,0,.49857],101:[0,.47534,0,0,.40053],102:[.18906,.69141,0,0,.32626],103:[.18906,.47534,0,0,.5037],104:[.18906,.69141,0,0,.52126],105:[0,.69141,0,0,.27899],106:[0,.69141,0,0,.28088],107:[0,.69141,0,0,.38946],108:[0,.69141,0,0,.27953],109:[0,.47534,0,0,.76676],110:[0,.47534,0,0,.52666],111:[0,.47534,0,0,.48885],112:[.18906,.52396,0,0,.50046],113:[.18906,.47534,0,0,.48912],114:[0,.47534,0,0,.38919],115:[0,.47534,0,0,.44266],116:[0,.62119,0,0,.33301],117:[0,.47534,0,0,.5172],118:[0,.52396,0,0,.5118],119:[0,.52396,0,0,.77351],120:[.18906,.47534,0,0,.38865],121:[.18906,.47534,0,0,.49884],122:[.18906,.47534,0,0,.39054],160:[0,0,0,0,.25],8216:[0,.69141,0,0,.21471],8217:[0,.69141,0,0,.21471],58112:[0,.62119,0,0,.49749],58113:[0,.62119,0,0,.4983],58114:[.18906,.69141,0,0,.33328],58115:[.18906,.69141,0,0,.32923],58116:[.18906,.47534,0,0,.50343],58117:[0,.69141,0,0,.33301],58118:[0,.62119,0,0,.33409],58119:[0,.47534,0,0,.50073]},"Main-Bold":{32:[0,0,0,0,.25],33:[0,.69444,0,0,.35],34:[0,.69444,0,0,.60278],35:[.19444,.69444,0,0,.95833],36:[.05556,.75,0,0,.575],37:[.05556,.75,0,0,.95833],38:[0,.69444,0,0,.89444],39:[0,.69444,0,0,.31944],40:[.25,.75,0,0,.44722],41:[.25,.75,0,0,.44722],42:[0,.75,0,0,.575],43:[.13333,.63333,0,0,.89444],44:[.19444,.15556,0,0,.31944],45:[0,.44444,0,0,.38333],46:[0,.15556,0,0,.31944],47:[.25,.75,0,0,.575],48:[0,.64444,0,0,.575],49:[0,.64444,0,0,.575],50:[0,.64444,0,0,.575],51:[0,.64444,0,0,.575],52:[0,.64444,0,0,.575],53:[0,.64444,0,0,.575],54:[0,.64444,0,0,.575],55:[0,.64444,0,0,.575],56:[0,.64444,0,0,.575],57:[0,.64444,0,0,.575],58:[0,.44444,0,0,.31944],59:[.19444,.44444,0,0,.31944],60:[.08556,.58556,0,0,.89444],61:[-.10889,.39111,0,0,.89444],62:[.08556,.58556,0,0,.89444],63:[0,.69444,0,0,.54305],64:[0,.69444,0,0,.89444],65:[0,.68611,0,0,.86944],66:[0,.68611,0,0,.81805],67:[0,.68611,0,0,.83055],68:[0,.68611,0,0,.88194],69:[0,.68611,0,0,.75555],70:[0,.68611,0,0,.72361],71:[0,.68611,0,0,.90416],72:[0,.68611,0,0,.9],73:[0,.68611,0,0,.43611],74:[0,.68611,0,0,.59444],75:[0,.68611,0,0,.90138],76:[0,.68611,0,0,.69166],77:[0,.68611,0,0,1.09166],78:[0,.68611,0,0,.9],79:[0,.68611,0,0,.86388],80:[0,.68611,0,0,.78611],81:[.19444,.68611,0,0,.86388],82:[0,.68611,0,0,.8625],83:[0,.68611,0,0,.63889],84:[0,.68611,0,0,.8],85:[0,.68611,0,0,.88472],86:[0,.68611,.01597,0,.86944],87:[0,.68611,.01597,0,1.18888],88:[0,.68611,0,0,.86944],89:[0,.68611,.02875,0,.86944],90:[0,.68611,0,0,.70277],91:[.25,.75,0,0,.31944],92:[.25,.75,0,0,.575],93:[.25,.75,0,0,.31944],94:[0,.69444,0,0,.575],95:[.31,.13444,.03194,0,.575],97:[0,.44444,0,0,.55902],98:[0,.69444,0,0,.63889],99:[0,.44444,0,0,.51111],100:[0,.69444,0,0,.63889],101:[0,.44444,0,0,.52708],102:[0,.69444,.10903,0,.35139],103:[.19444,.44444,.01597,0,.575],104:[0,.69444,0,0,.63889],105:[0,.69444,0,0,.31944],106:[.19444,.69444,0,0,.35139],107:[0,.69444,0,0,.60694],108:[0,.69444,0,0,.31944],109:[0,.44444,0,0,.95833],110:[0,.44444,0,0,.63889],111:[0,.44444,0,0,.575],112:[.19444,.44444,0,0,.63889],113:[.19444,.44444,0,0,.60694],114:[0,.44444,0,0,.47361],115:[0,.44444,0,0,.45361],116:[0,.63492,0,0,.44722],117:[0,.44444,0,0,.63889],118:[0,.44444,.01597,0,.60694],119:[0,.44444,.01597,0,.83055],120:[0,.44444,0,0,.60694],121:[.19444,.44444,.01597,0,.60694],122:[0,.44444,0,0,.51111],123:[.25,.75,0,0,.575],124:[.25,.75,0,0,.31944],125:[.25,.75,0,0,.575],126:[.35,.34444,0,0,.575],160:[0,0,0,0,.25],163:[0,.69444,0,0,.86853],168:[0,.69444,0,0,.575],172:[0,.44444,0,0,.76666],176:[0,.69444,0,0,.86944],177:[.13333,.63333,0,0,.89444],184:[.17014,0,0,0,.51111],198:[0,.68611,0,0,1.04166],215:[.13333,.63333,0,0,.89444],216:[.04861,.73472,0,0,.89444],223:[0,.69444,0,0,.59722],230:[0,.44444,0,0,.83055],247:[.13333,.63333,0,0,.89444],248:[.09722,.54167,0,0,.575],305:[0,.44444,0,0,.31944],338:[0,.68611,0,0,1.16944],339:[0,.44444,0,0,.89444],567:[.19444,.44444,0,0,.35139],710:[0,.69444,0,0,.575],711:[0,.63194,0,0,.575],713:[0,.59611,0,0,.575],714:[0,.69444,0,0,.575],715:[0,.69444,0,0,.575],728:[0,.69444,0,0,.575],729:[0,.69444,0,0,.31944],730:[0,.69444,0,0,.86944],732:[0,.69444,0,0,.575],733:[0,.69444,0,0,.575],915:[0,.68611,0,0,.69166],916:[0,.68611,0,0,.95833],920:[0,.68611,0,0,.89444],923:[0,.68611,0,0,.80555],926:[0,.68611,0,0,.76666],928:[0,.68611,0,0,.9],931:[0,.68611,0,0,.83055],933:[0,.68611,0,0,.89444],934:[0,.68611,0,0,.83055],936:[0,.68611,0,0,.89444],937:[0,.68611,0,0,.83055],8211:[0,.44444,.03194,0,.575],8212:[0,.44444,.03194,0,1.14999],8216:[0,.69444,0,0,.31944],8217:[0,.69444,0,0,.31944],8220:[0,.69444,0,0,.60278],8221:[0,.69444,0,0,.60278],8224:[.19444,.69444,0,0,.51111],8225:[.19444,.69444,0,0,.51111],8242:[0,.55556,0,0,.34444],8407:[0,.72444,.15486,0,.575],8463:[0,.69444,0,0,.66759],8465:[0,.69444,0,0,.83055],8467:[0,.69444,0,0,.47361],8472:[.19444,.44444,0,0,.74027],8476:[0,.69444,0,0,.83055],8501:[0,.69444,0,0,.70277],8592:[-.10889,.39111,0,0,1.14999],8593:[.19444,.69444,0,0,.575],8594:[-.10889,.39111,0,0,1.14999],8595:[.19444,.69444,0,0,.575],8596:[-.10889,.39111,0,0,1.14999],8597:[.25,.75,0,0,.575],8598:[.19444,.69444,0,0,1.14999],8599:[.19444,.69444,0,0,1.14999],8600:[.19444,.69444,0,0,1.14999],8601:[.19444,.69444,0,0,1.14999],8636:[-.10889,.39111,0,0,1.14999],8637:[-.10889,.39111,0,0,1.14999],8640:[-.10889,.39111,0,0,1.14999],8641:[-.10889,.39111,0,0,1.14999],8656:[-.10889,.39111,0,0,1.14999],8657:[.19444,.69444,0,0,.70277],8658:[-.10889,.39111,0,0,1.14999],8659:[.19444,.69444,0,0,.70277],8660:[-.10889,.39111,0,0,1.14999],8661:[.25,.75,0,0,.70277],8704:[0,.69444,0,0,.63889],8706:[0,.69444,.06389,0,.62847],8707:[0,.69444,0,0,.63889],8709:[.05556,.75,0,0,.575],8711:[0,.68611,0,0,.95833],8712:[.08556,.58556,0,0,.76666],8715:[.08556,.58556,0,0,.76666],8722:[.13333,.63333,0,0,.89444],8723:[.13333,.63333,0,0,.89444],8725:[.25,.75,0,0,.575],8726:[.25,.75,0,0,.575],8727:[-.02778,.47222,0,0,.575],8728:[-.02639,.47361,0,0,.575],8729:[-.02639,.47361,0,0,.575],8730:[.18,.82,0,0,.95833],8733:[0,.44444,0,0,.89444],8734:[0,.44444,0,0,1.14999],8736:[0,.69224,0,0,.72222],8739:[.25,.75,0,0,.31944],8741:[.25,.75,0,0,.575],8743:[0,.55556,0,0,.76666],8744:[0,.55556,0,0,.76666],8745:[0,.55556,0,0,.76666],8746:[0,.55556,0,0,.76666],8747:[.19444,.69444,.12778,0,.56875],8764:[-.10889,.39111,0,0,.89444],8768:[.19444,.69444,0,0,.31944],8771:[.00222,.50222,0,0,.89444],8773:[.027,.638,0,0,.894],8776:[.02444,.52444,0,0,.89444],8781:[.00222,.50222,0,0,.89444],8801:[.00222,.50222,0,0,.89444],8804:[.19667,.69667,0,0,.89444],8805:[.19667,.69667,0,0,.89444],8810:[.08556,.58556,0,0,1.14999],8811:[.08556,.58556,0,0,1.14999],8826:[.08556,.58556,0,0,.89444],8827:[.08556,.58556,0,0,.89444],8834:[.08556,.58556,0,0,.89444],8835:[.08556,.58556,0,0,.89444],8838:[.19667,.69667,0,0,.89444],8839:[.19667,.69667,0,0,.89444],8846:[0,.55556,0,0,.76666],8849:[.19667,.69667,0,0,.89444],8850:[.19667,.69667,0,0,.89444],8851:[0,.55556,0,0,.76666],8852:[0,.55556,0,0,.76666],8853:[.13333,.63333,0,0,.89444],8854:[.13333,.63333,0,0,.89444],8855:[.13333,.63333,0,0,.89444],8856:[.13333,.63333,0,0,.89444],8857:[.13333,.63333,0,0,.89444],8866:[0,.69444,0,0,.70277],8867:[0,.69444,0,0,.70277],8868:[0,.69444,0,0,.89444],8869:[0,.69444,0,0,.89444],8900:[-.02639,.47361,0,0,.575],8901:[-.02639,.47361,0,0,.31944],8902:[-.02778,.47222,0,0,.575],8968:[.25,.75,0,0,.51111],8969:[.25,.75,0,0,.51111],8970:[.25,.75,0,0,.51111],8971:[.25,.75,0,0,.51111],8994:[-.13889,.36111,0,0,1.14999],8995:[-.13889,.36111,0,0,1.14999],9651:[.19444,.69444,0,0,1.02222],9657:[-.02778,.47222,0,0,.575],9661:[.19444,.69444,0,0,1.02222],9667:[-.02778,.47222,0,0,.575],9711:[.19444,.69444,0,0,1.14999],9824:[.12963,.69444,0,0,.89444],9825:[.12963,.69444,0,0,.89444],9826:[.12963,.69444,0,0,.89444],9827:[.12963,.69444,0,0,.89444],9837:[0,.75,0,0,.44722],9838:[.19444,.69444,0,0,.44722],9839:[.19444,.69444,0,0,.44722],10216:[.25,.75,0,0,.44722],10217:[.25,.75,0,0,.44722],10815:[0,.68611,0,0,.9],10927:[.19667,.69667,0,0,.89444],10928:[.19667,.69667,0,0,.89444],57376:[.19444,.69444,0,0,0]},"Main-BoldItalic":{32:[0,0,0,0,.25],33:[0,.69444,.11417,0,.38611],34:[0,.69444,.07939,0,.62055],35:[.19444,.69444,.06833,0,.94444],37:[.05556,.75,.12861,0,.94444],38:[0,.69444,.08528,0,.88555],39:[0,.69444,.12945,0,.35555],40:[.25,.75,.15806,0,.47333],41:[.25,.75,.03306,0,.47333],42:[0,.75,.14333,0,.59111],43:[.10333,.60333,.03306,0,.88555],44:[.19444,.14722,0,0,.35555],45:[0,.44444,.02611,0,.41444],46:[0,.14722,0,0,.35555],47:[.25,.75,.15806,0,.59111],48:[0,.64444,.13167,0,.59111],49:[0,.64444,.13167,0,.59111],50:[0,.64444,.13167,0,.59111],51:[0,.64444,.13167,0,.59111],52:[.19444,.64444,.13167,0,.59111],53:[0,.64444,.13167,0,.59111],54:[0,.64444,.13167,0,.59111],55:[.19444,.64444,.13167,0,.59111],56:[0,.64444,.13167,0,.59111],57:[0,.64444,.13167,0,.59111],58:[0,.44444,.06695,0,.35555],59:[.19444,.44444,.06695,0,.35555],61:[-.10889,.39111,.06833,0,.88555],63:[0,.69444,.11472,0,.59111],64:[0,.69444,.09208,0,.88555],65:[0,.68611,0,0,.86555],66:[0,.68611,.0992,0,.81666],67:[0,.68611,.14208,0,.82666],68:[0,.68611,.09062,0,.87555],69:[0,.68611,.11431,0,.75666],70:[0,.68611,.12903,0,.72722],71:[0,.68611,.07347,0,.89527],72:[0,.68611,.17208,0,.8961],73:[0,.68611,.15681,0,.47166],74:[0,.68611,.145,0,.61055],75:[0,.68611,.14208,0,.89499],76:[0,.68611,0,0,.69777],77:[0,.68611,.17208,0,1.07277],78:[0,.68611,.17208,0,.8961],79:[0,.68611,.09062,0,.85499],80:[0,.68611,.0992,0,.78721],81:[.19444,.68611,.09062,0,.85499],82:[0,.68611,.02559,0,.85944],83:[0,.68611,.11264,0,.64999],84:[0,.68611,.12903,0,.7961],85:[0,.68611,.17208,0,.88083],86:[0,.68611,.18625,0,.86555],87:[0,.68611,.18625,0,1.15999],88:[0,.68611,.15681,0,.86555],89:[0,.68611,.19803,0,.86555],90:[0,.68611,.14208,0,.70888],91:[.25,.75,.1875,0,.35611],93:[.25,.75,.09972,0,.35611],94:[0,.69444,.06709,0,.59111],95:[.31,.13444,.09811,0,.59111],97:[0,.44444,.09426,0,.59111],98:[0,.69444,.07861,0,.53222],99:[0,.44444,.05222,0,.53222],100:[0,.69444,.10861,0,.59111],101:[0,.44444,.085,0,.53222],102:[.19444,.69444,.21778,0,.4],103:[.19444,.44444,.105,0,.53222],104:[0,.69444,.09426,0,.59111],105:[0,.69326,.11387,0,.35555],106:[.19444,.69326,.1672,0,.35555],107:[0,.69444,.11111,0,.53222],108:[0,.69444,.10861,0,.29666],109:[0,.44444,.09426,0,.94444],110:[0,.44444,.09426,0,.64999],111:[0,.44444,.07861,0,.59111],112:[.19444,.44444,.07861,0,.59111],113:[.19444,.44444,.105,0,.53222],114:[0,.44444,.11111,0,.50167],115:[0,.44444,.08167,0,.48694],116:[0,.63492,.09639,0,.385],117:[0,.44444,.09426,0,.62055],118:[0,.44444,.11111,0,.53222],119:[0,.44444,.11111,0,.76777],120:[0,.44444,.12583,0,.56055],121:[.19444,.44444,.105,0,.56166],122:[0,.44444,.13889,0,.49055],126:[.35,.34444,.11472,0,.59111],160:[0,0,0,0,.25],168:[0,.69444,.11473,0,.59111],176:[0,.69444,0,0,.94888],184:[.17014,0,0,0,.53222],198:[0,.68611,.11431,0,1.02277],216:[.04861,.73472,.09062,0,.88555],223:[.19444,.69444,.09736,0,.665],230:[0,.44444,.085,0,.82666],248:[.09722,.54167,.09458,0,.59111],305:[0,.44444,.09426,0,.35555],338:[0,.68611,.11431,0,1.14054],339:[0,.44444,.085,0,.82666],567:[.19444,.44444,.04611,0,.385],710:[0,.69444,.06709,0,.59111],711:[0,.63194,.08271,0,.59111],713:[0,.59444,.10444,0,.59111],714:[0,.69444,.08528,0,.59111],715:[0,.69444,0,0,.59111],728:[0,.69444,.10333,0,.59111],729:[0,.69444,.12945,0,.35555],730:[0,.69444,0,0,.94888],732:[0,.69444,.11472,0,.59111],733:[0,.69444,.11472,0,.59111],915:[0,.68611,.12903,0,.69777],916:[0,.68611,0,0,.94444],920:[0,.68611,.09062,0,.88555],923:[0,.68611,0,0,.80666],926:[0,.68611,.15092,0,.76777],928:[0,.68611,.17208,0,.8961],931:[0,.68611,.11431,0,.82666],933:[0,.68611,.10778,0,.88555],934:[0,.68611,.05632,0,.82666],936:[0,.68611,.10778,0,.88555],937:[0,.68611,.0992,0,.82666],8211:[0,.44444,.09811,0,.59111],8212:[0,.44444,.09811,0,1.18221],8216:[0,.69444,.12945,0,.35555],8217:[0,.69444,.12945,0,.35555],8220:[0,.69444,.16772,0,.62055],8221:[0,.69444,.07939,0,.62055]},"Main-Italic":{32:[0,0,0,0,.25],33:[0,.69444,.12417,0,.30667],34:[0,.69444,.06961,0,.51444],35:[.19444,.69444,.06616,0,.81777],37:[.05556,.75,.13639,0,.81777],38:[0,.69444,.09694,0,.76666],39:[0,.69444,.12417,0,.30667],40:[.25,.75,.16194,0,.40889],41:[.25,.75,.03694,0,.40889],42:[0,.75,.14917,0,.51111],43:[.05667,.56167,.03694,0,.76666],44:[.19444,.10556,0,0,.30667],45:[0,.43056,.02826,0,.35778],46:[0,.10556,0,0,.30667],47:[.25,.75,.16194,0,.51111],48:[0,.64444,.13556,0,.51111],49:[0,.64444,.13556,0,.51111],50:[0,.64444,.13556,0,.51111],51:[0,.64444,.13556,0,.51111],52:[.19444,.64444,.13556,0,.51111],53:[0,.64444,.13556,0,.51111],54:[0,.64444,.13556,0,.51111],55:[.19444,.64444,.13556,0,.51111],56:[0,.64444,.13556,0,.51111],57:[0,.64444,.13556,0,.51111],58:[0,.43056,.0582,0,.30667],59:[.19444,.43056,.0582,0,.30667],61:[-.13313,.36687,.06616,0,.76666],63:[0,.69444,.1225,0,.51111],64:[0,.69444,.09597,0,.76666],65:[0,.68333,0,0,.74333],66:[0,.68333,.10257,0,.70389],67:[0,.68333,.14528,0,.71555],68:[0,.68333,.09403,0,.755],69:[0,.68333,.12028,0,.67833],70:[0,.68333,.13305,0,.65277],71:[0,.68333,.08722,0,.77361],72:[0,.68333,.16389,0,.74333],73:[0,.68333,.15806,0,.38555],74:[0,.68333,.14028,0,.525],75:[0,.68333,.14528,0,.76888],76:[0,.68333,0,0,.62722],77:[0,.68333,.16389,0,.89666],78:[0,.68333,.16389,0,.74333],79:[0,.68333,.09403,0,.76666],80:[0,.68333,.10257,0,.67833],81:[.19444,.68333,.09403,0,.76666],82:[0,.68333,.03868,0,.72944],83:[0,.68333,.11972,0,.56222],84:[0,.68333,.13305,0,.71555],85:[0,.68333,.16389,0,.74333],86:[0,.68333,.18361,0,.74333],87:[0,.68333,.18361,0,.99888],88:[0,.68333,.15806,0,.74333],89:[0,.68333,.19383,0,.74333],90:[0,.68333,.14528,0,.61333],91:[.25,.75,.1875,0,.30667],93:[.25,.75,.10528,0,.30667],94:[0,.69444,.06646,0,.51111],95:[.31,.12056,.09208,0,.51111],97:[0,.43056,.07671,0,.51111],98:[0,.69444,.06312,0,.46],99:[0,.43056,.05653,0,.46],100:[0,.69444,.10333,0,.51111],101:[0,.43056,.07514,0,.46],102:[.19444,.69444,.21194,0,.30667],103:[.19444,.43056,.08847,0,.46],104:[0,.69444,.07671,0,.51111],105:[0,.65536,.1019,0,.30667],106:[.19444,.65536,.14467,0,.30667],107:[0,.69444,.10764,0,.46],108:[0,.69444,.10333,0,.25555],109:[0,.43056,.07671,0,.81777],110:[0,.43056,.07671,0,.56222],111:[0,.43056,.06312,0,.51111],112:[.19444,.43056,.06312,0,.51111],113:[.19444,.43056,.08847,0,.46],114:[0,.43056,.10764,0,.42166],115:[0,.43056,.08208,0,.40889],116:[0,.61508,.09486,0,.33222],117:[0,.43056,.07671,0,.53666],118:[0,.43056,.10764,0,.46],119:[0,.43056,.10764,0,.66444],120:[0,.43056,.12042,0,.46389],121:[.19444,.43056,.08847,0,.48555],122:[0,.43056,.12292,0,.40889],126:[.35,.31786,.11585,0,.51111],160:[0,0,0,0,.25],168:[0,.66786,.10474,0,.51111],176:[0,.69444,0,0,.83129],184:[.17014,0,0,0,.46],198:[0,.68333,.12028,0,.88277],216:[.04861,.73194,.09403,0,.76666],223:[.19444,.69444,.10514,0,.53666],230:[0,.43056,.07514,0,.71555],248:[.09722,.52778,.09194,0,.51111],338:[0,.68333,.12028,0,.98499],339:[0,.43056,.07514,0,.71555],710:[0,.69444,.06646,0,.51111],711:[0,.62847,.08295,0,.51111],713:[0,.56167,.10333,0,.51111],714:[0,.69444,.09694,0,.51111],715:[0,.69444,0,0,.51111],728:[0,.69444,.10806,0,.51111],729:[0,.66786,.11752,0,.30667],730:[0,.69444,0,0,.83129],732:[0,.66786,.11585,0,.51111],733:[0,.69444,.1225,0,.51111],915:[0,.68333,.13305,0,.62722],916:[0,.68333,0,0,.81777],920:[0,.68333,.09403,0,.76666],923:[0,.68333,0,0,.69222],926:[0,.68333,.15294,0,.66444],928:[0,.68333,.16389,0,.74333],931:[0,.68333,.12028,0,.71555],933:[0,.68333,.11111,0,.76666],934:[0,.68333,.05986,0,.71555],936:[0,.68333,.11111,0,.76666],937:[0,.68333,.10257,0,.71555],8211:[0,.43056,.09208,0,.51111],8212:[0,.43056,.09208,0,1.02222],8216:[0,.69444,.12417,0,.30667],8217:[0,.69444,.12417,0,.30667],8220:[0,.69444,.1685,0,.51444],8221:[0,.69444,.06961,0,.51444],8463:[0,.68889,0,0,.54028]},"Main-Regular":{32:[0,0,0,0,.25],33:[0,.69444,0,0,.27778],34:[0,.69444,0,0,.5],35:[.19444,.69444,0,0,.83334],36:[.05556,.75,0,0,.5],37:[.05556,.75,0,0,.83334],38:[0,.69444,0,0,.77778],39:[0,.69444,0,0,.27778],40:[.25,.75,0,0,.38889],41:[.25,.75,0,0,.38889],42:[0,.75,0,0,.5],43:[.08333,.58333,0,0,.77778],44:[.19444,.10556,0,0,.27778],45:[0,.43056,0,0,.33333],46:[0,.10556,0,0,.27778],47:[.25,.75,0,0,.5],48:[0,.64444,0,0,.5],49:[0,.64444,0,0,.5],50:[0,.64444,0,0,.5],51:[0,.64444,0,0,.5],52:[0,.64444,0,0,.5],53:[0,.64444,0,0,.5],54:[0,.64444,0,0,.5],55:[0,.64444,0,0,.5],56:[0,.64444,0,0,.5],57:[0,.64444,0,0,.5],58:[0,.43056,0,0,.27778],59:[.19444,.43056,0,0,.27778],60:[.0391,.5391,0,0,.77778],61:[-.13313,.36687,0,0,.77778],62:[.0391,.5391,0,0,.77778],63:[0,.69444,0,0,.47222],64:[0,.69444,0,0,.77778],65:[0,.68333,0,0,.75],66:[0,.68333,0,0,.70834],67:[0,.68333,0,0,.72222],68:[0,.68333,0,0,.76389],69:[0,.68333,0,0,.68056],70:[0,.68333,0,0,.65278],71:[0,.68333,0,0,.78472],72:[0,.68333,0,0,.75],73:[0,.68333,0,0,.36111],74:[0,.68333,0,0,.51389],75:[0,.68333,0,0,.77778],76:[0,.68333,0,0,.625],77:[0,.68333,0,0,.91667],78:[0,.68333,0,0,.75],79:[0,.68333,0,0,.77778],80:[0,.68333,0,0,.68056],81:[.19444,.68333,0,0,.77778],82:[0,.68333,0,0,.73611],83:[0,.68333,0,0,.55556],84:[0,.68333,0,0,.72222],85:[0,.68333,0,0,.75],86:[0,.68333,.01389,0,.75],87:[0,.68333,.01389,0,1.02778],88:[0,.68333,0,0,.75],89:[0,.68333,.025,0,.75],90:[0,.68333,0,0,.61111],91:[.25,.75,0,0,.27778],92:[.25,.75,0,0,.5],93:[.25,.75,0,0,.27778],94:[0,.69444,0,0,.5],95:[.31,.12056,.02778,0,.5],97:[0,.43056,0,0,.5],98:[0,.69444,0,0,.55556],99:[0,.43056,0,0,.44445],100:[0,.69444,0,0,.55556],101:[0,.43056,0,0,.44445],102:[0,.69444,.07778,0,.30556],103:[.19444,.43056,.01389,0,.5],104:[0,.69444,0,0,.55556],105:[0,.66786,0,0,.27778],106:[.19444,.66786,0,0,.30556],107:[0,.69444,0,0,.52778],108:[0,.69444,0,0,.27778],109:[0,.43056,0,0,.83334],110:[0,.43056,0,0,.55556],111:[0,.43056,0,0,.5],112:[.19444,.43056,0,0,.55556],113:[.19444,.43056,0,0,.52778],114:[0,.43056,0,0,.39167],115:[0,.43056,0,0,.39445],116:[0,.61508,0,0,.38889],117:[0,.43056,0,0,.55556],118:[0,.43056,.01389,0,.52778],119:[0,.43056,.01389,0,.72222],120:[0,.43056,0,0,.52778],121:[.19444,.43056,.01389,0,.52778],122:[0,.43056,0,0,.44445],123:[.25,.75,0,0,.5],124:[.25,.75,0,0,.27778],125:[.25,.75,0,0,.5],126:[.35,.31786,0,0,.5],160:[0,0,0,0,.25],163:[0,.69444,0,0,.76909],167:[.19444,.69444,0,0,.44445],168:[0,.66786,0,0,.5],172:[0,.43056,0,0,.66667],176:[0,.69444,0,0,.75],177:[.08333,.58333,0,0,.77778],182:[.19444,.69444,0,0,.61111],184:[.17014,0,0,0,.44445],198:[0,.68333,0,0,.90278],215:[.08333,.58333,0,0,.77778],216:[.04861,.73194,0,0,.77778],223:[0,.69444,0,0,.5],230:[0,.43056,0,0,.72222],247:[.08333,.58333,0,0,.77778],248:[.09722,.52778,0,0,.5],305:[0,.43056,0,0,.27778],338:[0,.68333,0,0,1.01389],339:[0,.43056,0,0,.77778],567:[.19444,.43056,0,0,.30556],710:[0,.69444,0,0,.5],711:[0,.62847,0,0,.5],713:[0,.56778,0,0,.5],714:[0,.69444,0,0,.5],715:[0,.69444,0,0,.5],728:[0,.69444,0,0,.5],729:[0,.66786,0,0,.27778],730:[0,.69444,0,0,.75],732:[0,.66786,0,0,.5],733:[0,.69444,0,0,.5],915:[0,.68333,0,0,.625],916:[0,.68333,0,0,.83334],920:[0,.68333,0,0,.77778],923:[0,.68333,0,0,.69445],926:[0,.68333,0,0,.66667],928:[0,.68333,0,0,.75],931:[0,.68333,0,0,.72222],933:[0,.68333,0,0,.77778],934:[0,.68333,0,0,.72222],936:[0,.68333,0,0,.77778],937:[0,.68333,0,0,.72222],8211:[0,.43056,.02778,0,.5],8212:[0,.43056,.02778,0,1],8216:[0,.69444,0,0,.27778],8217:[0,.69444,0,0,.27778],8220:[0,.69444,0,0,.5],8221:[0,.69444,0,0,.5],8224:[.19444,.69444,0,0,.44445],8225:[.19444,.69444,0,0,.44445],8230:[0,.123,0,0,1.172],8242:[0,.55556,0,0,.275],8407:[0,.71444,.15382,0,.5],8463:[0,.68889,0,0,.54028],8465:[0,.69444,0,0,.72222],8467:[0,.69444,0,.11111,.41667],8472:[.19444,.43056,0,.11111,.63646],8476:[0,.69444,0,0,.72222],8501:[0,.69444,0,0,.61111],8592:[-.13313,.36687,0,0,1],8593:[.19444,.69444,0,0,.5],8594:[-.13313,.36687,0,0,1],8595:[.19444,.69444,0,0,.5],8596:[-.13313,.36687,0,0,1],8597:[.25,.75,0,0,.5],8598:[.19444,.69444,0,0,1],8599:[.19444,.69444,0,0,1],8600:[.19444,.69444,0,0,1],8601:[.19444,.69444,0,0,1],8614:[.011,.511,0,0,1],8617:[.011,.511,0,0,1.126],8618:[.011,.511,0,0,1.126],8636:[-.13313,.36687,0,0,1],8637:[-.13313,.36687,0,0,1],8640:[-.13313,.36687,0,0,1],8641:[-.13313,.36687,0,0,1],8652:[.011,.671,0,0,1],8656:[-.13313,.36687,0,0,1],8657:[.19444,.69444,0,0,.61111],8658:[-.13313,.36687,0,0,1],8659:[.19444,.69444,0,0,.61111],8660:[-.13313,.36687,0,0,1],8661:[.25,.75,0,0,.61111],8704:[0,.69444,0,0,.55556],8706:[0,.69444,.05556,.08334,.5309],8707:[0,.69444,0,0,.55556],8709:[.05556,.75,0,0,.5],8711:[0,.68333,0,0,.83334],8712:[.0391,.5391,0,0,.66667],8715:[.0391,.5391,0,0,.66667],8722:[.08333,.58333,0,0,.77778],8723:[.08333,.58333,0,0,.77778],8725:[.25,.75,0,0,.5],8726:[.25,.75,0,0,.5],8727:[-.03472,.46528,0,0,.5],8728:[-.05555,.44445,0,0,.5],8729:[-.05555,.44445,0,0,.5],8730:[.2,.8,0,0,.83334],8733:[0,.43056,0,0,.77778],8734:[0,.43056,0,0,1],8736:[0,.69224,0,0,.72222],8739:[.25,.75,0,0,.27778],8741:[.25,.75,0,0,.5],8743:[0,.55556,0,0,.66667],8744:[0,.55556,0,0,.66667],8745:[0,.55556,0,0,.66667],8746:[0,.55556,0,0,.66667],8747:[.19444,.69444,.11111,0,.41667],8764:[-.13313,.36687,0,0,.77778],8768:[.19444,.69444,0,0,.27778],8771:[-.03625,.46375,0,0,.77778],8773:[-.022,.589,0,0,.778],8776:[-.01688,.48312,0,0,.77778],8781:[-.03625,.46375,0,0,.77778],8784:[-.133,.673,0,0,.778],8801:[-.03625,.46375,0,0,.77778],8804:[.13597,.63597,0,0,.77778],8805:[.13597,.63597,0,0,.77778],8810:[.0391,.5391,0,0,1],8811:[.0391,.5391,0,0,1],8826:[.0391,.5391,0,0,.77778],8827:[.0391,.5391,0,0,.77778],8834:[.0391,.5391,0,0,.77778],8835:[.0391,.5391,0,0,.77778],8838:[.13597,.63597,0,0,.77778],8839:[.13597,.63597,0,0,.77778],8846:[0,.55556,0,0,.66667],8849:[.13597,.63597,0,0,.77778],8850:[.13597,.63597,0,0,.77778],8851:[0,.55556,0,0,.66667],8852:[0,.55556,0,0,.66667],8853:[.08333,.58333,0,0,.77778],8854:[.08333,.58333,0,0,.77778],8855:[.08333,.58333,0,0,.77778],8856:[.08333,.58333,0,0,.77778],8857:[.08333,.58333,0,0,.77778],8866:[0,.69444,0,0,.61111],8867:[0,.69444,0,0,.61111],8868:[0,.69444,0,0,.77778],8869:[0,.69444,0,0,.77778],8872:[.249,.75,0,0,.867],8900:[-.05555,.44445,0,0,.5],8901:[-.05555,.44445,0,0,.27778],8902:[-.03472,.46528,0,0,.5],8904:[.005,.505,0,0,.9],8942:[.03,.903,0,0,.278],8943:[-.19,.313,0,0,1.172],8945:[-.1,.823,0,0,1.282],8968:[.25,.75,0,0,.44445],8969:[.25,.75,0,0,.44445],8970:[.25,.75,0,0,.44445],8971:[.25,.75,0,0,.44445],8994:[-.14236,.35764,0,0,1],8995:[-.14236,.35764,0,0,1],9136:[.244,.744,0,0,.412],9137:[.244,.745,0,0,.412],9651:[.19444,.69444,0,0,.88889],9657:[-.03472,.46528,0,0,.5],9661:[.19444,.69444,0,0,.88889],9667:[-.03472,.46528,0,0,.5],9711:[.19444,.69444,0,0,1],9824:[.12963,.69444,0,0,.77778],9825:[.12963,.69444,0,0,.77778],9826:[.12963,.69444,0,0,.77778],9827:[.12963,.69444,0,0,.77778],9837:[0,.75,0,0,.38889],9838:[.19444,.69444,0,0,.38889],9839:[.19444,.69444,0,0,.38889],10216:[.25,.75,0,0,.38889],10217:[.25,.75,0,0,.38889],10222:[.244,.744,0,0,.412],10223:[.244,.745,0,0,.412],10229:[.011,.511,0,0,1.609],10230:[.011,.511,0,0,1.638],10231:[.011,.511,0,0,1.859],10232:[.024,.525,0,0,1.609],10233:[.024,.525,0,0,1.638],10234:[.024,.525,0,0,1.858],10236:[.011,.511,0,0,1.638],10815:[0,.68333,0,0,.75],10927:[.13597,.63597,0,0,.77778],10928:[.13597,.63597,0,0,.77778],57376:[.19444,.69444,0,0,0]},"Math-BoldItalic":{32:[0,0,0,0,.25],48:[0,.44444,0,0,.575],49:[0,.44444,0,0,.575],50:[0,.44444,0,0,.575],51:[.19444,.44444,0,0,.575],52:[.19444,.44444,0,0,.575],53:[.19444,.44444,0,0,.575],54:[0,.64444,0,0,.575],55:[.19444,.44444,0,0,.575],56:[0,.64444,0,0,.575],57:[.19444,.44444,0,0,.575],65:[0,.68611,0,0,.86944],66:[0,.68611,.04835,0,.8664],67:[0,.68611,.06979,0,.81694],68:[0,.68611,.03194,0,.93812],69:[0,.68611,.05451,0,.81007],70:[0,.68611,.15972,0,.68889],71:[0,.68611,0,0,.88673],72:[0,.68611,.08229,0,.98229],73:[0,.68611,.07778,0,.51111],74:[0,.68611,.10069,0,.63125],75:[0,.68611,.06979,0,.97118],76:[0,.68611,0,0,.75555],77:[0,.68611,.11424,0,1.14201],78:[0,.68611,.11424,0,.95034],79:[0,.68611,.03194,0,.83666],80:[0,.68611,.15972,0,.72309],81:[.19444,.68611,0,0,.86861],82:[0,.68611,.00421,0,.87235],83:[0,.68611,.05382,0,.69271],84:[0,.68611,.15972,0,.63663],85:[0,.68611,.11424,0,.80027],86:[0,.68611,.25555,0,.67778],87:[0,.68611,.15972,0,1.09305],88:[0,.68611,.07778,0,.94722],89:[0,.68611,.25555,0,.67458],90:[0,.68611,.06979,0,.77257],97:[0,.44444,0,0,.63287],98:[0,.69444,0,0,.52083],99:[0,.44444,0,0,.51342],100:[0,.69444,0,0,.60972],101:[0,.44444,0,0,.55361],102:[.19444,.69444,.11042,0,.56806],103:[.19444,.44444,.03704,0,.5449],104:[0,.69444,0,0,.66759],105:[0,.69326,0,0,.4048],106:[.19444,.69326,.0622,0,.47083],107:[0,.69444,.01852,0,.6037],108:[0,.69444,.0088,0,.34815],109:[0,.44444,0,0,1.0324],110:[0,.44444,0,0,.71296],111:[0,.44444,0,0,.58472],112:[.19444,.44444,0,0,.60092],113:[.19444,.44444,.03704,0,.54213],114:[0,.44444,.03194,0,.5287],115:[0,.44444,0,0,.53125],116:[0,.63492,0,0,.41528],117:[0,.44444,0,0,.68102],118:[0,.44444,.03704,0,.56666],119:[0,.44444,.02778,0,.83148],120:[0,.44444,0,0,.65903],121:[.19444,.44444,.03704,0,.59028],122:[0,.44444,.04213,0,.55509],160:[0,0,0,0,.25],915:[0,.68611,.15972,0,.65694],916:[0,.68611,0,0,.95833],920:[0,.68611,.03194,0,.86722],923:[0,.68611,0,0,.80555],926:[0,.68611,.07458,0,.84125],928:[0,.68611,.08229,0,.98229],931:[0,.68611,.05451,0,.88507],933:[0,.68611,.15972,0,.67083],934:[0,.68611,0,0,.76666],936:[0,.68611,.11653,0,.71402],937:[0,.68611,.04835,0,.8789],945:[0,.44444,0,0,.76064],946:[.19444,.69444,.03403,0,.65972],947:[.19444,.44444,.06389,0,.59003],948:[0,.69444,.03819,0,.52222],949:[0,.44444,0,0,.52882],950:[.19444,.69444,.06215,0,.50833],951:[.19444,.44444,.03704,0,.6],952:[0,.69444,.03194,0,.5618],953:[0,.44444,0,0,.41204],954:[0,.44444,0,0,.66759],955:[0,.69444,0,0,.67083],956:[.19444,.44444,0,0,.70787],957:[0,.44444,.06898,0,.57685],958:[.19444,.69444,.03021,0,.50833],959:[0,.44444,0,0,.58472],960:[0,.44444,.03704,0,.68241],961:[.19444,.44444,0,0,.6118],962:[.09722,.44444,.07917,0,.42361],963:[0,.44444,.03704,0,.68588],964:[0,.44444,.13472,0,.52083],965:[0,.44444,.03704,0,.63055],966:[.19444,.44444,0,0,.74722],967:[.19444,.44444,0,0,.71805],968:[.19444,.69444,.03704,0,.75833],969:[0,.44444,.03704,0,.71782],977:[0,.69444,0,0,.69155],981:[.19444,.69444,0,0,.7125],982:[0,.44444,.03194,0,.975],1009:[.19444,.44444,0,0,.6118],1013:[0,.44444,0,0,.48333],57649:[0,.44444,0,0,.39352],57911:[.19444,.44444,0,0,.43889]},"Math-Italic":{32:[0,0,0,0,.25],48:[0,.43056,0,0,.5],49:[0,.43056,0,0,.5],50:[0,.43056,0,0,.5],51:[.19444,.43056,0,0,.5],52:[.19444,.43056,0,0,.5],53:[.19444,.43056,0,0,.5],54:[0,.64444,0,0,.5],55:[.19444,.43056,0,0,.5],56:[0,.64444,0,0,.5],57:[.19444,.43056,0,0,.5],65:[0,.68333,0,.13889,.75],66:[0,.68333,.05017,.08334,.75851],67:[0,.68333,.07153,.08334,.71472],68:[0,.68333,.02778,.05556,.82792],69:[0,.68333,.05764,.08334,.7382],70:[0,.68333,.13889,.08334,.64306],71:[0,.68333,0,.08334,.78625],72:[0,.68333,.08125,.05556,.83125],73:[0,.68333,.07847,.11111,.43958],74:[0,.68333,.09618,.16667,.55451],75:[0,.68333,.07153,.05556,.84931],76:[0,.68333,0,.02778,.68056],77:[0,.68333,.10903,.08334,.97014],78:[0,.68333,.10903,.08334,.80347],79:[0,.68333,.02778,.08334,.76278],80:[0,.68333,.13889,.08334,.64201],81:[.19444,.68333,0,.08334,.79056],82:[0,.68333,.00773,.08334,.75929],83:[0,.68333,.05764,.08334,.6132],84:[0,.68333,.13889,.08334,.58438],85:[0,.68333,.10903,.02778,.68278],86:[0,.68333,.22222,0,.58333],87:[0,.68333,.13889,0,.94445],88:[0,.68333,.07847,.08334,.82847],89:[0,.68333,.22222,0,.58056],90:[0,.68333,.07153,.08334,.68264],97:[0,.43056,0,0,.52859],98:[0,.69444,0,0,.42917],99:[0,.43056,0,.05556,.43276],100:[0,.69444,0,.16667,.52049],101:[0,.43056,0,.05556,.46563],102:[.19444,.69444,.10764,.16667,.48959],103:[.19444,.43056,.03588,.02778,.47697],104:[0,.69444,0,0,.57616],105:[0,.65952,0,0,.34451],106:[.19444,.65952,.05724,0,.41181],107:[0,.69444,.03148,0,.5206],108:[0,.69444,.01968,.08334,.29838],109:[0,.43056,0,0,.87801],110:[0,.43056,0,0,.60023],111:[0,.43056,0,.05556,.48472],112:[.19444,.43056,0,.08334,.50313],113:[.19444,.43056,.03588,.08334,.44641],114:[0,.43056,.02778,.05556,.45116],115:[0,.43056,0,.05556,.46875],116:[0,.61508,0,.08334,.36111],117:[0,.43056,0,.02778,.57246],118:[0,.43056,.03588,.02778,.48472],119:[0,.43056,.02691,.08334,.71592],120:[0,.43056,0,.02778,.57153],121:[.19444,.43056,.03588,.05556,.49028],122:[0,.43056,.04398,.05556,.46505],160:[0,0,0,0,.25],915:[0,.68333,.13889,.08334,.61528],916:[0,.68333,0,.16667,.83334],920:[0,.68333,.02778,.08334,.76278],923:[0,.68333,0,.16667,.69445],926:[0,.68333,.07569,.08334,.74236],928:[0,.68333,.08125,.05556,.83125],931:[0,.68333,.05764,.08334,.77986],933:[0,.68333,.13889,.05556,.58333],934:[0,.68333,0,.08334,.66667],936:[0,.68333,.11,.05556,.61222],937:[0,.68333,.05017,.08334,.7724],945:[0,.43056,.0037,.02778,.6397],946:[.19444,.69444,.05278,.08334,.56563],947:[.19444,.43056,.05556,0,.51773],948:[0,.69444,.03785,.05556,.44444],949:[0,.43056,0,.08334,.46632],950:[.19444,.69444,.07378,.08334,.4375],951:[.19444,.43056,.03588,.05556,.49653],952:[0,.69444,.02778,.08334,.46944],953:[0,.43056,0,.05556,.35394],954:[0,.43056,0,0,.57616],955:[0,.69444,0,0,.58334],956:[.19444,.43056,0,.02778,.60255],957:[0,.43056,.06366,.02778,.49398],958:[.19444,.69444,.04601,.11111,.4375],959:[0,.43056,0,.05556,.48472],960:[0,.43056,.03588,0,.57003],961:[.19444,.43056,0,.08334,.51702],962:[.09722,.43056,.07986,.08334,.36285],963:[0,.43056,.03588,0,.57141],964:[0,.43056,.1132,.02778,.43715],965:[0,.43056,.03588,.02778,.54028],966:[.19444,.43056,0,.08334,.65417],967:[.19444,.43056,0,.05556,.62569],968:[.19444,.69444,.03588,.11111,.65139],969:[0,.43056,.03588,0,.62245],977:[0,.69444,0,.08334,.59144],981:[.19444,.69444,0,.08334,.59583],982:[0,.43056,.02778,0,.82813],1009:[.19444,.43056,0,.08334,.51702],1013:[0,.43056,0,.05556,.4059],57649:[0,.43056,0,.02778,.32246],57911:[.19444,.43056,0,.08334,.38403]},"SansSerif-Bold":{32:[0,0,0,0,.25],33:[0,.69444,0,0,.36667],34:[0,.69444,0,0,.55834],35:[.19444,.69444,0,0,.91667],36:[.05556,.75,0,0,.55],37:[.05556,.75,0,0,1.02912],38:[0,.69444,0,0,.83056],39:[0,.69444,0,0,.30556],40:[.25,.75,0,0,.42778],41:[.25,.75,0,0,.42778],42:[0,.75,0,0,.55],43:[.11667,.61667,0,0,.85556],44:[.10556,.13056,0,0,.30556],45:[0,.45833,0,0,.36667],46:[0,.13056,0,0,.30556],47:[.25,.75,0,0,.55],48:[0,.69444,0,0,.55],49:[0,.69444,0,0,.55],50:[0,.69444,0,0,.55],51:[0,.69444,0,0,.55],52:[0,.69444,0,0,.55],53:[0,.69444,0,0,.55],54:[0,.69444,0,0,.55],55:[0,.69444,0,0,.55],56:[0,.69444,0,0,.55],57:[0,.69444,0,0,.55],58:[0,.45833,0,0,.30556],59:[.10556,.45833,0,0,.30556],61:[-.09375,.40625,0,0,.85556],63:[0,.69444,0,0,.51945],64:[0,.69444,0,0,.73334],65:[0,.69444,0,0,.73334],66:[0,.69444,0,0,.73334],67:[0,.69444,0,0,.70278],68:[0,.69444,0,0,.79445],69:[0,.69444,0,0,.64167],70:[0,.69444,0,0,.61111],71:[0,.69444,0,0,.73334],72:[0,.69444,0,0,.79445],73:[0,.69444,0,0,.33056],74:[0,.69444,0,0,.51945],75:[0,.69444,0,0,.76389],76:[0,.69444,0,0,.58056],77:[0,.69444,0,0,.97778],78:[0,.69444,0,0,.79445],79:[0,.69444,0,0,.79445],80:[0,.69444,0,0,.70278],81:[.10556,.69444,0,0,.79445],82:[0,.69444,0,0,.70278],83:[0,.69444,0,0,.61111],84:[0,.69444,0,0,.73334],85:[0,.69444,0,0,.76389],86:[0,.69444,.01528,0,.73334],87:[0,.69444,.01528,0,1.03889],88:[0,.69444,0,0,.73334],89:[0,.69444,.0275,0,.73334],90:[0,.69444,0,0,.67223],91:[.25,.75,0,0,.34306],93:[.25,.75,0,0,.34306],94:[0,.69444,0,0,.55],95:[.35,.10833,.03056,0,.55],97:[0,.45833,0,0,.525],98:[0,.69444,0,0,.56111],99:[0,.45833,0,0,.48889],100:[0,.69444,0,0,.56111],101:[0,.45833,0,0,.51111],102:[0,.69444,.07639,0,.33611],103:[.19444,.45833,.01528,0,.55],104:[0,.69444,0,0,.56111],105:[0,.69444,0,0,.25556],106:[.19444,.69444,0,0,.28611],107:[0,.69444,0,0,.53056],108:[0,.69444,0,0,.25556],109:[0,.45833,0,0,.86667],110:[0,.45833,0,0,.56111],111:[0,.45833,0,0,.55],112:[.19444,.45833,0,0,.56111],113:[.19444,.45833,0,0,.56111],114:[0,.45833,.01528,0,.37222],115:[0,.45833,0,0,.42167],116:[0,.58929,0,0,.40417],117:[0,.45833,0,0,.56111],118:[0,.45833,.01528,0,.5],119:[0,.45833,.01528,0,.74445],120:[0,.45833,0,0,.5],121:[.19444,.45833,.01528,0,.5],122:[0,.45833,0,0,.47639],126:[.35,.34444,0,0,.55],160:[0,0,0,0,.25],168:[0,.69444,0,0,.55],176:[0,.69444,0,0,.73334],180:[0,.69444,0,0,.55],184:[.17014,0,0,0,.48889],305:[0,.45833,0,0,.25556],567:[.19444,.45833,0,0,.28611],710:[0,.69444,0,0,.55],711:[0,.63542,0,0,.55],713:[0,.63778,0,0,.55],728:[0,.69444,0,0,.55],729:[0,.69444,0,0,.30556],730:[0,.69444,0,0,.73334],732:[0,.69444,0,0,.55],733:[0,.69444,0,0,.55],915:[0,.69444,0,0,.58056],916:[0,.69444,0,0,.91667],920:[0,.69444,0,0,.85556],923:[0,.69444,0,0,.67223],926:[0,.69444,0,0,.73334],928:[0,.69444,0,0,.79445],931:[0,.69444,0,0,.79445],933:[0,.69444,0,0,.85556],934:[0,.69444,0,0,.79445],936:[0,.69444,0,0,.85556],937:[0,.69444,0,0,.79445],8211:[0,.45833,.03056,0,.55],8212:[0,.45833,.03056,0,1.10001],8216:[0,.69444,0,0,.30556],8217:[0,.69444,0,0,.30556],8220:[0,.69444,0,0,.55834],8221:[0,.69444,0,0,.55834]},"SansSerif-Italic":{32:[0,0,0,0,.25],33:[0,.69444,.05733,0,.31945],34:[0,.69444,.00316,0,.5],35:[.19444,.69444,.05087,0,.83334],36:[.05556,.75,.11156,0,.5],37:[.05556,.75,.03126,0,.83334],38:[0,.69444,.03058,0,.75834],39:[0,.69444,.07816,0,.27778],40:[.25,.75,.13164,0,.38889],41:[.25,.75,.02536,0,.38889],42:[0,.75,.11775,0,.5],43:[.08333,.58333,.02536,0,.77778],44:[.125,.08333,0,0,.27778],45:[0,.44444,.01946,0,.33333],46:[0,.08333,0,0,.27778],47:[.25,.75,.13164,0,.5],48:[0,.65556,.11156,0,.5],49:[0,.65556,.11156,0,.5],50:[0,.65556,.11156,0,.5],51:[0,.65556,.11156,0,.5],52:[0,.65556,.11156,0,.5],53:[0,.65556,.11156,0,.5],54:[0,.65556,.11156,0,.5],55:[0,.65556,.11156,0,.5],56:[0,.65556,.11156,0,.5],57:[0,.65556,.11156,0,.5],58:[0,.44444,.02502,0,.27778],59:[.125,.44444,.02502,0,.27778],61:[-.13,.37,.05087,0,.77778],63:[0,.69444,.11809,0,.47222],64:[0,.69444,.07555,0,.66667],65:[0,.69444,0,0,.66667],66:[0,.69444,.08293,0,.66667],67:[0,.69444,.11983,0,.63889],68:[0,.69444,.07555,0,.72223],69:[0,.69444,.11983,0,.59722],70:[0,.69444,.13372,0,.56945],71:[0,.69444,.11983,0,.66667],72:[0,.69444,.08094,0,.70834],73:[0,.69444,.13372,0,.27778],74:[0,.69444,.08094,0,.47222],75:[0,.69444,.11983,0,.69445],76:[0,.69444,0,0,.54167],77:[0,.69444,.08094,0,.875],78:[0,.69444,.08094,0,.70834],79:[0,.69444,.07555,0,.73611],80:[0,.69444,.08293,0,.63889],81:[.125,.69444,.07555,0,.73611],82:[0,.69444,.08293,0,.64584],83:[0,.69444,.09205,0,.55556],84:[0,.69444,.13372,0,.68056],85:[0,.69444,.08094,0,.6875],86:[0,.69444,.1615,0,.66667],87:[0,.69444,.1615,0,.94445],88:[0,.69444,.13372,0,.66667],89:[0,.69444,.17261,0,.66667],90:[0,.69444,.11983,0,.61111],91:[.25,.75,.15942,0,.28889],93:[.25,.75,.08719,0,.28889],94:[0,.69444,.0799,0,.5],95:[.35,.09444,.08616,0,.5],97:[0,.44444,.00981,0,.48056],98:[0,.69444,.03057,0,.51667],99:[0,.44444,.08336,0,.44445],100:[0,.69444,.09483,0,.51667],101:[0,.44444,.06778,0,.44445],102:[0,.69444,.21705,0,.30556],103:[.19444,.44444,.10836,0,.5],104:[0,.69444,.01778,0,.51667],105:[0,.67937,.09718,0,.23889],106:[.19444,.67937,.09162,0,.26667],107:[0,.69444,.08336,0,.48889],108:[0,.69444,.09483,0,.23889],109:[0,.44444,.01778,0,.79445],110:[0,.44444,.01778,0,.51667],111:[0,.44444,.06613,0,.5],112:[.19444,.44444,.0389,0,.51667],113:[.19444,.44444,.04169,0,.51667],114:[0,.44444,.10836,0,.34167],115:[0,.44444,.0778,0,.38333],116:[0,.57143,.07225,0,.36111],117:[0,.44444,.04169,0,.51667],118:[0,.44444,.10836,0,.46111],119:[0,.44444,.10836,0,.68334],120:[0,.44444,.09169,0,.46111],121:[.19444,.44444,.10836,0,.46111],122:[0,.44444,.08752,0,.43472],126:[.35,.32659,.08826,0,.5],160:[0,0,0,0,.25],168:[0,.67937,.06385,0,.5],176:[0,.69444,0,0,.73752],184:[.17014,0,0,0,.44445],305:[0,.44444,.04169,0,.23889],567:[.19444,.44444,.04169,0,.26667],710:[0,.69444,.0799,0,.5],711:[0,.63194,.08432,0,.5],713:[0,.60889,.08776,0,.5],714:[0,.69444,.09205,0,.5],715:[0,.69444,0,0,.5],728:[0,.69444,.09483,0,.5],729:[0,.67937,.07774,0,.27778],730:[0,.69444,0,0,.73752],732:[0,.67659,.08826,0,.5],733:[0,.69444,.09205,0,.5],915:[0,.69444,.13372,0,.54167],916:[0,.69444,0,0,.83334],920:[0,.69444,.07555,0,.77778],923:[0,.69444,0,0,.61111],926:[0,.69444,.12816,0,.66667],928:[0,.69444,.08094,0,.70834],931:[0,.69444,.11983,0,.72222],933:[0,.69444,.09031,0,.77778],934:[0,.69444,.04603,0,.72222],936:[0,.69444,.09031,0,.77778],937:[0,.69444,.08293,0,.72222],8211:[0,.44444,.08616,0,.5],8212:[0,.44444,.08616,0,1],8216:[0,.69444,.07816,0,.27778],8217:[0,.69444,.07816,0,.27778],8220:[0,.69444,.14205,0,.5],8221:[0,.69444,.00316,0,.5]},"SansSerif-Regular":{32:[0,0,0,0,.25],33:[0,.69444,0,0,.31945],34:[0,.69444,0,0,.5],35:[.19444,.69444,0,0,.83334],36:[.05556,.75,0,0,.5],37:[.05556,.75,0,0,.83334],38:[0,.69444,0,0,.75834],39:[0,.69444,0,0,.27778],40:[.25,.75,0,0,.38889],41:[.25,.75,0,0,.38889],42:[0,.75,0,0,.5],43:[.08333,.58333,0,0,.77778],44:[.125,.08333,0,0,.27778],45:[0,.44444,0,0,.33333],46:[0,.08333,0,0,.27778],47:[.25,.75,0,0,.5],48:[0,.65556,0,0,.5],49:[0,.65556,0,0,.5],50:[0,.65556,0,0,.5],51:[0,.65556,0,0,.5],52:[0,.65556,0,0,.5],53:[0,.65556,0,0,.5],54:[0,.65556,0,0,.5],55:[0,.65556,0,0,.5],56:[0,.65556,0,0,.5],57:[0,.65556,0,0,.5],58:[0,.44444,0,0,.27778],59:[.125,.44444,0,0,.27778],61:[-.13,.37,0,0,.77778],63:[0,.69444,0,0,.47222],64:[0,.69444,0,0,.66667],65:[0,.69444,0,0,.66667],66:[0,.69444,0,0,.66667],67:[0,.69444,0,0,.63889],68:[0,.69444,0,0,.72223],69:[0,.69444,0,0,.59722],70:[0,.69444,0,0,.56945],71:[0,.69444,0,0,.66667],72:[0,.69444,0,0,.70834],73:[0,.69444,0,0,.27778],74:[0,.69444,0,0,.47222],75:[0,.69444,0,0,.69445],76:[0,.69444,0,0,.54167],77:[0,.69444,0,0,.875],78:[0,.69444,0,0,.70834],79:[0,.69444,0,0,.73611],80:[0,.69444,0,0,.63889],81:[.125,.69444,0,0,.73611],82:[0,.69444,0,0,.64584],83:[0,.69444,0,0,.55556],84:[0,.69444,0,0,.68056],85:[0,.69444,0,0,.6875],86:[0,.69444,.01389,0,.66667],87:[0,.69444,.01389,0,.94445],88:[0,.69444,0,0,.66667],89:[0,.69444,.025,0,.66667],90:[0,.69444,0,0,.61111],91:[.25,.75,0,0,.28889],93:[.25,.75,0,0,.28889],94:[0,.69444,0,0,.5],95:[.35,.09444,.02778,0,.5],97:[0,.44444,0,0,.48056],98:[0,.69444,0,0,.51667],99:[0,.44444,0,0,.44445],100:[0,.69444,0,0,.51667],101:[0,.44444,0,0,.44445],102:[0,.69444,.06944,0,.30556],103:[.19444,.44444,.01389,0,.5],104:[0,.69444,0,0,.51667],105:[0,.67937,0,0,.23889],106:[.19444,.67937,0,0,.26667],107:[0,.69444,0,0,.48889],108:[0,.69444,0,0,.23889],109:[0,.44444,0,0,.79445],110:[0,.44444,0,0,.51667],111:[0,.44444,0,0,.5],112:[.19444,.44444,0,0,.51667],113:[.19444,.44444,0,0,.51667],114:[0,.44444,.01389,0,.34167],115:[0,.44444,0,0,.38333],116:[0,.57143,0,0,.36111],117:[0,.44444,0,0,.51667],118:[0,.44444,.01389,0,.46111],119:[0,.44444,.01389,0,.68334],120:[0,.44444,0,0,.46111],121:[.19444,.44444,.01389,0,.46111],122:[0,.44444,0,0,.43472],126:[.35,.32659,0,0,.5],160:[0,0,0,0,.25],168:[0,.67937,0,0,.5],176:[0,.69444,0,0,.66667],184:[.17014,0,0,0,.44445],305:[0,.44444,0,0,.23889],567:[.19444,.44444,0,0,.26667],710:[0,.69444,0,0,.5],711:[0,.63194,0,0,.5],713:[0,.60889,0,0,.5],714:[0,.69444,0,0,.5],715:[0,.69444,0,0,.5],728:[0,.69444,0,0,.5],729:[0,.67937,0,0,.27778],730:[0,.69444,0,0,.66667],732:[0,.67659,0,0,.5],733:[0,.69444,0,0,.5],915:[0,.69444,0,0,.54167],916:[0,.69444,0,0,.83334],920:[0,.69444,0,0,.77778],923:[0,.69444,0,0,.61111],926:[0,.69444,0,0,.66667],928:[0,.69444,0,0,.70834],931:[0,.69444,0,0,.72222],933:[0,.69444,0,0,.77778],934:[0,.69444,0,0,.72222],936:[0,.69444,0,0,.77778],937:[0,.69444,0,0,.72222],8211:[0,.44444,.02778,0,.5],8212:[0,.44444,.02778,0,1],8216:[0,.69444,0,0,.27778],8217:[0,.69444,0,0,.27778],8220:[0,.69444,0,0,.5],8221:[0,.69444,0,0,.5]},"Script-Regular":{32:[0,0,0,0,.25],65:[0,.7,.22925,0,.80253],66:[0,.7,.04087,0,.90757],67:[0,.7,.1689,0,.66619],68:[0,.7,.09371,0,.77443],69:[0,.7,.18583,0,.56162],70:[0,.7,.13634,0,.89544],71:[0,.7,.17322,0,.60961],72:[0,.7,.29694,0,.96919],73:[0,.7,.19189,0,.80907],74:[.27778,.7,.19189,0,1.05159],75:[0,.7,.31259,0,.91364],76:[0,.7,.19189,0,.87373],77:[0,.7,.15981,0,1.08031],78:[0,.7,.3525,0,.9015],79:[0,.7,.08078,0,.73787],80:[0,.7,.08078,0,1.01262],81:[0,.7,.03305,0,.88282],82:[0,.7,.06259,0,.85],83:[0,.7,.19189,0,.86767],84:[0,.7,.29087,0,.74697],85:[0,.7,.25815,0,.79996],86:[0,.7,.27523,0,.62204],87:[0,.7,.27523,0,.80532],88:[0,.7,.26006,0,.94445],89:[0,.7,.2939,0,.70961],90:[0,.7,.24037,0,.8212],160:[0,0,0,0,.25]},"Size1-Regular":{32:[0,0,0,0,.25],40:[.35001,.85,0,0,.45834],41:[.35001,.85,0,0,.45834],47:[.35001,.85,0,0,.57778],91:[.35001,.85,0,0,.41667],92:[.35001,.85,0,0,.57778],93:[.35001,.85,0,0,.41667],123:[.35001,.85,0,0,.58334],125:[.35001,.85,0,0,.58334],160:[0,0,0,0,.25],710:[0,.72222,0,0,.55556],732:[0,.72222,0,0,.55556],770:[0,.72222,0,0,.55556],771:[0,.72222,0,0,.55556],8214:[-99e-5,.601,0,0,.77778],8593:[1e-5,.6,0,0,.66667],8595:[1e-5,.6,0,0,.66667],8657:[1e-5,.6,0,0,.77778],8659:[1e-5,.6,0,0,.77778],8719:[.25001,.75,0,0,.94445],8720:[.25001,.75,0,0,.94445],8721:[.25001,.75,0,0,1.05556],8730:[.35001,.85,0,0,1],8739:[-.00599,.606,0,0,.33333],8741:[-.00599,.606,0,0,.55556],8747:[.30612,.805,.19445,0,.47222],8748:[.306,.805,.19445,0,.47222],8749:[.306,.805,.19445,0,.47222],8750:[.30612,.805,.19445,0,.47222],8896:[.25001,.75,0,0,.83334],8897:[.25001,.75,0,0,.83334],8898:[.25001,.75,0,0,.83334],8899:[.25001,.75,0,0,.83334],8968:[.35001,.85,0,0,.47222],8969:[.35001,.85,0,0,.47222],8970:[.35001,.85,0,0,.47222],8971:[.35001,.85,0,0,.47222],9168:[-99e-5,.601,0,0,.66667],10216:[.35001,.85,0,0,.47222],10217:[.35001,.85,0,0,.47222],10752:[.25001,.75,0,0,1.11111],10753:[.25001,.75,0,0,1.11111],10754:[.25001,.75,0,0,1.11111],10756:[.25001,.75,0,0,.83334],10758:[.25001,.75,0,0,.83334]},"Size2-Regular":{32:[0,0,0,0,.25],40:[.65002,1.15,0,0,.59722],41:[.65002,1.15,0,0,.59722],47:[.65002,1.15,0,0,.81111],91:[.65002,1.15,0,0,.47222],92:[.65002,1.15,0,0,.81111],93:[.65002,1.15,0,0,.47222],123:[.65002,1.15,0,0,.66667],125:[.65002,1.15,0,0,.66667],160:[0,0,0,0,.25],710:[0,.75,0,0,1],732:[0,.75,0,0,1],770:[0,.75,0,0,1],771:[0,.75,0,0,1],8719:[.55001,1.05,0,0,1.27778],8720:[.55001,1.05,0,0,1.27778],8721:[.55001,1.05,0,0,1.44445],8730:[.65002,1.15,0,0,1],8747:[.86225,1.36,.44445,0,.55556],8748:[.862,1.36,.44445,0,.55556],8749:[.862,1.36,.44445,0,.55556],8750:[.86225,1.36,.44445,0,.55556],8896:[.55001,1.05,0,0,1.11111],8897:[.55001,1.05,0,0,1.11111],8898:[.55001,1.05,0,0,1.11111],8899:[.55001,1.05,0,0,1.11111],8968:[.65002,1.15,0,0,.52778],8969:[.65002,1.15,0,0,.52778],8970:[.65002,1.15,0,0,.52778],8971:[.65002,1.15,0,0,.52778],10216:[.65002,1.15,0,0,.61111],10217:[.65002,1.15,0,0,.61111],10752:[.55001,1.05,0,0,1.51112],10753:[.55001,1.05,0,0,1.51112],10754:[.55001,1.05,0,0,1.51112],10756:[.55001,1.05,0,0,1.11111],10758:[.55001,1.05,0,0,1.11111]},"Size3-Regular":{32:[0,0,0,0,.25],40:[.95003,1.45,0,0,.73611],41:[.95003,1.45,0,0,.73611],47:[.95003,1.45,0,0,1.04445],91:[.95003,1.45,0,0,.52778],92:[.95003,1.45,0,0,1.04445],93:[.95003,1.45,0,0,.52778],123:[.95003,1.45,0,0,.75],125:[.95003,1.45,0,0,.75],160:[0,0,0,0,.25],710:[0,.75,0,0,1.44445],732:[0,.75,0,0,1.44445],770:[0,.75,0,0,1.44445],771:[0,.75,0,0,1.44445],8730:[.95003,1.45,0,0,1],8968:[.95003,1.45,0,0,.58334],8969:[.95003,1.45,0,0,.58334],8970:[.95003,1.45,0,0,.58334],8971:[.95003,1.45,0,0,.58334],10216:[.95003,1.45,0,0,.75],10217:[.95003,1.45,0,0,.75]},"Size4-Regular":{32:[0,0,0,0,.25],40:[1.25003,1.75,0,0,.79167],41:[1.25003,1.75,0,0,.79167],47:[1.25003,1.75,0,0,1.27778],91:[1.25003,1.75,0,0,.58334],92:[1.25003,1.75,0,0,1.27778],93:[1.25003,1.75,0,0,.58334],123:[1.25003,1.75,0,0,.80556],125:[1.25003,1.75,0,0,.80556],160:[0,0,0,0,.25],710:[0,.825,0,0,1.8889],732:[0,.825,0,0,1.8889],770:[0,.825,0,0,1.8889],771:[0,.825,0,0,1.8889],8730:[1.25003,1.75,0,0,1],8968:[1.25003,1.75,0,0,.63889],8969:[1.25003,1.75,0,0,.63889],8970:[1.25003,1.75,0,0,.63889],8971:[1.25003,1.75,0,0,.63889],9115:[.64502,1.155,0,0,.875],9116:[1e-5,.6,0,0,.875],9117:[.64502,1.155,0,0,.875],9118:[.64502,1.155,0,0,.875],9119:[1e-5,.6,0,0,.875],9120:[.64502,1.155,0,0,.875],9121:[.64502,1.155,0,0,.66667],9122:[-99e-5,.601,0,0,.66667],9123:[.64502,1.155,0,0,.66667],9124:[.64502,1.155,0,0,.66667],9125:[-99e-5,.601,0,0,.66667],9126:[.64502,1.155,0,0,.66667],9127:[1e-5,.9,0,0,.88889],9128:[.65002,1.15,0,0,.88889],9129:[.90001,0,0,0,.88889],9130:[0,.3,0,0,.88889],9131:[1e-5,.9,0,0,.88889],9132:[.65002,1.15,0,0,.88889],9133:[.90001,0,0,0,.88889],9143:[.88502,.915,0,0,1.05556],10216:[1.25003,1.75,0,0,.80556],10217:[1.25003,1.75,0,0,.80556],57344:[-.00499,.605,0,0,1.05556],57345:[-.00499,.605,0,0,1.05556],57680:[0,.12,0,0,.45],57681:[0,.12,0,0,.45],57682:[0,.12,0,0,.45],57683:[0,.12,0,0,.45]},"Typewriter-Regular":{32:[0,0,0,0,.525],33:[0,.61111,0,0,.525],34:[0,.61111,0,0,.525],35:[0,.61111,0,0,.525],36:[.08333,.69444,0,0,.525],37:[.08333,.69444,0,0,.525],38:[0,.61111,0,0,.525],39:[0,.61111,0,0,.525],40:[.08333,.69444,0,0,.525],41:[.08333,.69444,0,0,.525],42:[0,.52083,0,0,.525],43:[-.08056,.53055,0,0,.525],44:[.13889,.125,0,0,.525],45:[-.08056,.53055,0,0,.525],46:[0,.125,0,0,.525],47:[.08333,.69444,0,0,.525],48:[0,.61111,0,0,.525],49:[0,.61111,0,0,.525],50:[0,.61111,0,0,.525],51:[0,.61111,0,0,.525],52:[0,.61111,0,0,.525],53:[0,.61111,0,0,.525],54:[0,.61111,0,0,.525],55:[0,.61111,0,0,.525],56:[0,.61111,0,0,.525],57:[0,.61111,0,0,.525],58:[0,.43056,0,0,.525],59:[.13889,.43056,0,0,.525],60:[-.05556,.55556,0,0,.525],61:[-.19549,.41562,0,0,.525],62:[-.05556,.55556,0,0,.525],63:[0,.61111,0,0,.525],64:[0,.61111,0,0,.525],65:[0,.61111,0,0,.525],66:[0,.61111,0,0,.525],67:[0,.61111,0,0,.525],68:[0,.61111,0,0,.525],69:[0,.61111,0,0,.525],70:[0,.61111,0,0,.525],71:[0,.61111,0,0,.525],72:[0,.61111,0,0,.525],73:[0,.61111,0,0,.525],74:[0,.61111,0,0,.525],75:[0,.61111,0,0,.525],76:[0,.61111,0,0,.525],77:[0,.61111,0,0,.525],78:[0,.61111,0,0,.525],79:[0,.61111,0,0,.525],80:[0,.61111,0,0,.525],81:[.13889,.61111,0,0,.525],82:[0,.61111,0,0,.525],83:[0,.61111,0,0,.525],84:[0,.61111,0,0,.525],85:[0,.61111,0,0,.525],86:[0,.61111,0,0,.525],87:[0,.61111,0,0,.525],88:[0,.61111,0,0,.525],89:[0,.61111,0,0,.525],90:[0,.61111,0,0,.525],91:[.08333,.69444,0,0,.525],92:[.08333,.69444,0,0,.525],93:[.08333,.69444,0,0,.525],94:[0,.61111,0,0,.525],95:[.09514,0,0,0,.525],96:[0,.61111,0,0,.525],97:[0,.43056,0,0,.525],98:[0,.61111,0,0,.525],99:[0,.43056,0,0,.525],100:[0,.61111,0,0,.525],101:[0,.43056,0,0,.525],102:[0,.61111,0,0,.525],103:[.22222,.43056,0,0,.525],104:[0,.61111,0,0,.525],105:[0,.61111,0,0,.525],106:[.22222,.61111,0,0,.525],107:[0,.61111,0,0,.525],108:[0,.61111,0,0,.525],109:[0,.43056,0,0,.525],110:[0,.43056,0,0,.525],111:[0,.43056,0,0,.525],112:[.22222,.43056,0,0,.525],113:[.22222,.43056,0,0,.525],114:[0,.43056,0,0,.525],115:[0,.43056,0,0,.525],116:[0,.55358,0,0,.525],117:[0,.43056,0,0,.525],118:[0,.43056,0,0,.525],119:[0,.43056,0,0,.525],120:[0,.43056,0,0,.525],121:[.22222,.43056,0,0,.525],122:[0,.43056,0,0,.525],123:[.08333,.69444,0,0,.525],124:[.08333,.69444,0,0,.525],125:[.08333,.69444,0,0,.525],126:[0,.61111,0,0,.525],127:[0,.61111,0,0,.525],160:[0,0,0,0,.525],176:[0,.61111,0,0,.525],184:[.19445,0,0,0,.525],305:[0,.43056,0,0,.525],567:[.22222,.43056,0,0,.525],711:[0,.56597,0,0,.525],713:[0,.56555,0,0,.525],714:[0,.61111,0,0,.525],715:[0,.61111,0,0,.525],728:[0,.61111,0,0,.525],730:[0,.61111,0,0,.525],770:[0,.61111,0,0,.525],771:[0,.61111,0,0,.525],776:[0,.61111,0,0,.525],915:[0,.61111,0,0,.525],916:[0,.61111,0,0,.525],920:[0,.61111,0,0,.525],923:[0,.61111,0,0,.525],926:[0,.61111,0,0,.525],928:[0,.61111,0,0,.525],931:[0,.61111,0,0,.525],933:[0,.61111,0,0,.525],934:[0,.61111,0,0,.525],936:[0,.61111,0,0,.525],937:[0,.61111,0,0,.525],8216:[0,.61111,0,0,.525],8217:[0,.61111,0,0,.525],8242:[0,.61111,0,0,.525],9251:[.11111,.21944,0,0,.525]}},zo={slant:[.25,.25,.25],space:[0,0,0],stretch:[0,0,0],shrink:[0,0,0],xHeight:[.431,.431,.431],quad:[1,1.171,1.472],extraSpace:[0,0,0],num1:[.677,.732,.925],num2:[.394,.384,.387],num3:[.444,.471,.504],denom1:[.686,.752,1.025],denom2:[.345,.344,.532],sup1:[.413,.503,.504],sup2:[.363,.431,.404],sup3:[.289,.286,.294],sub1:[.15,.143,.2],sub2:[.247,.286,.4],supDrop:[.386,.353,.494],subDrop:[.05,.071,.1],delim1:[2.39,1.7,1.98],delim2:[1.01,1.157,1.42],axisHeight:[.25,.25,.25],defaultRuleThickness:[.04,.049,.049],bigOpSpacing1:[.111,.111,.111],bigOpSpacing2:[.166,.166,.166],bigOpSpacing3:[.2,.2,.2],bigOpSpacing4:[.6,.611,.611],bigOpSpacing5:[.1,.143,.143],sqrtRuleThickness:[.04,.04,.04],ptPerEm:[10,10,10],doubleRuleSep:[.2,.2,.2],arrayRuleWidth:[.04,.04,.04],fboxsep:[.3,.3,.3],fboxrule:[.04,.04,.04]},Id={Å:"A",Ð:"D",Þ:"o",å:"a",ð:"d",þ:"o",А:"A",Б:"B",В:"B",Г:"F",Д:"A",Е:"E",Ж:"K",З:"3",И:"N",Й:"N",К:"K",Л:"N",М:"M",Н:"H",О:"O",П:"N",Р:"P",С:"C",Т:"T",У:"y",Ф:"O",Х:"X",Ц:"U",Ч:"h",Ш:"W",Щ:"W",Ъ:"B",Ы:"X",Ь:"B",Э:"3",Ю:"X",Я:"R",а:"a",б:"b",в:"a",г:"r",д:"y",е:"e",ж:"m",з:"e",и:"n",й:"n",к:"n",л:"n",м:"m",н:"n",о:"o",п:"n",р:"p",с:"c",т:"o",у:"y",ф:"b",х:"x",ц:"n",ч:"n",ш:"w",щ:"w",ъ:"a",ы:"m",ь:"a",э:"e",ю:"m",я:"r"};function Mw(e,t){bn[e]=t}function nc(e,t,n){if(!bn[t])throw new Error("Font metrics not found for font: "+t+".");var r=e.charCodeAt(0),i=bn[t][r];if(!i&&e[0]in Id&&(r=Id[e[0]].charCodeAt(0),i=bn[t][r]),!i&&n==="text"&&bg(r)&&(i=bn[t][77]),i)return{depth:i[0],height:i[1],italic:i[2],skew:i[3],width:i[4]}}var iu={};function Rw(e){var t;if(e>=5?t=0:e>=3?t=1:t=2,!iu[t]){var n=iu[t]={cssEmPerMu:zo.quad[t]/18};for(var r in zo)zo.hasOwnProperty(r)&&(n[r]=zo[r][t])}return iu[t]}var qw=[[1,1,1],[2,1,1],[3,1,1],[4,2,1],[5,2,1],[6,3,1],[7,4,2],[8,6,3],[9,7,6],[10,8,7],[11,10,9]],Bd=[.5,.6,.7,.8,.9,1,1.2,1.44,1.728,2.074,2.488],Ld=function(t,n){return n.size<2?t:qw[t-1][n.size-1]};class An{constructor(t){this.style=void 0,this.color=void 0,this.size=void 0,this.textSize=void 0,this.phantom=void 0,this.font=void 0,this.fontFamily=void 0,this.fontWeight=void 0,this.fontShape=void 0,this.sizeMultiplier=void 0,this.maxSize=void 0,this.minRuleThickness=void 0,this._fontMetrics=void 0,this.style=t.style,this.color=t.color,this.size=t.size||An.BASESIZE,this.textSize=t.textSize||this.size,this.phantom=!!t.phantom,this.font=t.font||"",this.fontFamily=t.fontFamily||"",this.fontWeight=t.fontWeight||"",this.fontShape=t.fontShape||"",this.sizeMultiplier=Bd[this.size-1],this.maxSize=t.maxSize,this.minRuleThickness=t.minRuleThickness,this._fontMetrics=void 0}extend(t){var n={style:this.style,size:this.size,textSize:this.textSize,color:this.color,phantom:this.phantom,font:this.font,fontFamily:this.fontFamily,fontWeight:this.fontWeight,fontShape:this.fontShape,maxSize:this.maxSize,minRuleThickness:this.minRuleThickness};for(var r in t)t.hasOwnProperty(r)&&(n[r]=t[r]);return new An(n)}havingStyle(t){return this.style===t?this:this.extend({style:t,size:Ld(this.textSize,t)})}havingCrampedStyle(){return this.havingStyle(this.style.cramp())}havingSize(t){return this.size===t&&this.textSize===t?this:this.extend({style:this.style.text(),size:t,textSize:t,sizeMultiplier:Bd[t-1]})}havingBaseStyle(t){t=t||this.style.text();var n=Ld(An.BASESIZE,t);return this.size===n&&this.textSize===An.BASESIZE&&this.style===t?this:this.extend({style:t,size:n})}havingBaseSizing(){var t;switch(this.style.id){case 4:case 5:t=3;break;case 6:case 7:t=1;break;default:t=6}return this.extend({style:this.style.text(),size:t})}withColor(t){return this.extend({color:t})}withPhantom(){return this.extend({phantom:!0})}withFont(t){return this.extend({font:t})}withTextFontFamily(t){return this.extend({fontFamily:t,font:""})}withTextFontWeight(t){return this.extend({fontWeight:t,font:""})}withTextFontShape(t){return this.extend({fontShape:t,font:""})}sizingClasses(t){return t.size!==this.size?["sizing","reset-size"+t.size,"size"+this.size]:[]}baseSizingClasses(){return this.size!==An.BASESIZE?["sizing","reset-size"+this.size,"size"+An.BASESIZE]:[]}fontMetrics(){return this._fontMetrics||(this._fontMetrics=Rw(this.size)),this._fontMetrics}getColor(){return this.phantom?"transparent":this.color}}An.BASESIZE=6;var E0={pt:1,mm:7227/2540,cm:7227/254,in:72.27,bp:803/800,pc:12,dd:1238/1157,cc:14856/1157,nd:685/642,nc:1370/107,sp:1/65536,px:803/800},Iw={ex:!0,em:!0,mu:!0},gg=function(t){return typeof t!="string"&&(t=t.unit),t in E0||t in Iw||t==="ex"},qe=function(t,n){var r;if(t.unit in E0)r=E0[t.unit]/n.fontMetrics().ptPerEm/n.sizeMultiplier;else if(t.unit==="mu")r=n.fontMetrics().cssEmPerMu;else{var i;if(n.style.isTight()?i=n.havingStyle(n.style.text()):i=n,t.unit==="ex")r=i.fontMetrics().xHeight;else if(t.unit==="em")r=i.fontMetrics().quad;else throw new H("Invalid unit: '"+t.unit+"'");i!==n&&(r*=i.sizeMultiplier/n.sizeMultiplier)}return Math.min(t.number*r,n.maxSize)},K=function(t){return+t.toFixed(4)+"em"},yr=function(t){return t.filter(n=>n).join(" ")},yg=function(t,n,r){if(this.classes=t||[],this.attributes={},this.height=0,this.depth=0,this.maxFontSize=0,this.style=r||{},n){n.style.isTight()&&this.classes.push("mtight");var i=n.getColor();i&&(this.style.color=i)}},vg=function(t){var n=document.createElement(t);n.className=yr(this.classes);for(var r in this.style)this.style.hasOwnProperty(r)&&(n.style[r]=this.style[r]);for(var i in this.attributes)this.attributes.hasOwnProperty(i)&&n.setAttribute(i,this.attributes[i]);for(var a=0;a<this.children.length;a++)n.appendChild(this.children[a].toNode());return n},$g=function(t){var n="<"+t;this.classes.length&&(n+=' class="'+te.escape(yr(this.classes))+'"');var r="";for(var i in this.style)this.style.hasOwnProperty(i)&&(r+=te.hyphenate(i)+":"+this.style[i]+";");r&&(n+=' style="'+te.escape(r)+'"');for(var a in this.attributes)this.attributes.hasOwnProperty(a)&&(n+=" "+a+'="'+te.escape(this.attributes[a])+'"');n+=">";for(var o=0;o<this.children.length;o++)n+=this.children[o].toMarkup();return n+="</"+t+">",n};class ao{constructor(t,n,r,i){this.children=void 0,this.attributes=void 0,this.classes=void 0,this.height=void 0,this.depth=void 0,this.width=void 0,this.maxFontSize=void 0,this.style=void 0,yg.call(this,t,r,i),this.children=n||[]}setAttribute(t,n){this.attributes[t]=n}hasClass(t){return te.contains(this.classes,t)}toNode(){return vg.call(this,"span")}toMarkup(){return $g.call(this,"span")}}class rc{constructor(t,n,r,i){this.children=void 0,this.attributes=void 0,this.classes=void 0,this.height=void 0,this.depth=void 0,this.maxFontSize=void 0,this.style=void 0,yg.call(this,n,i),this.children=r||[],this.setAttribute("href",t)}setAttribute(t,n){this.attributes[t]=n}hasClass(t){return te.contains(this.classes,t)}toNode(){return vg.call(this,"a")}toMarkup(){return $g.call(this,"a")}}class Bw{constructor(t,n,r){this.src=void 0,this.alt=void 0,this.classes=void 0,this.height=void 0,this.depth=void 0,this.maxFontSize=void 0,this.style=void 0,this.alt=n,this.src=t,this.classes=["mord"],this.style=r}hasClass(t){return te.contains(this.classes,t)}toNode(){var t=document.createElement("img");t.src=this.src,t.alt=this.alt,t.className="mord";for(var n in this.style)this.style.hasOwnProperty(n)&&(t.style[n]=this.style[n]);return t}toMarkup(){var t='<img src="'+te.escape(this.src)+'"'+(' alt="'+te.escape(this.alt)+'"'),n="";for(var r in this.style)this.style.hasOwnProperty(r)&&(n+=te.hyphenate(r)+":"+this.style[r]+";");return n&&(t+=' style="'+te.escape(n)+'"'),t+="'/>",t}}var Lw={î:"ı̂",ï:"ı̈",í:"ı́",ì:"ı̀"};class Kt{constructor(t,n,r,i,a,o,l,s){this.text=void 0,this.height=void 0,this.depth=void 0,this.italic=void 0,this.skew=void 0,this.width=void 0,this.maxFontSize=void 0,this.classes=void 0,this.style=void 0,this.text=t,this.height=n||0,this.depth=r||0,this.italic=i||0,this.skew=a||0,this.width=o||0,this.classes=l||[],this.style=s||{},this.maxFontSize=0;var u=kw(this.text.charCodeAt(0));u&&this.classes.push(u+"_fallback"),/[îïíì]/.test(this.text)&&(this.text=Lw[this.text])}hasClass(t){return te.contains(this.classes,t)}toNode(){var t=document.createTextNode(this.text),n=null;this.italic>0&&(n=document.createElement("span"),n.style.marginRight=K(this.italic)),this.classes.length>0&&(n=n||document.createElement("span"),n.className=yr(this.classes));for(var r in this.style)this.style.hasOwnProperty(r)&&(n=n||document.createElement("span"),n.style[r]=this.style[r]);return n?(n.appendChild(t),n):t}toMarkup(){var t=!1,n="<span";this.classes.length&&(t=!0,n+=' class="',n+=te.escape(yr(this.classes)),n+='"');var r="";this.italic>0&&(r+="margin-right:"+this.italic+"em;");for(var i in this.style)this.style.hasOwnProperty(i)&&(r+=te.hyphenate(i)+":"+this.style[i]+";");r&&(t=!0,n+=' style="'+te.escape(r)+'"');var a=te.escape(this.text);return t?(n+=">",n+=a,n+="</span>",n):a}}class jn{constructor(t,n){this.children=void 0,this.attributes=void 0,this.children=t||[],this.attributes=n||{}}toNode(){var t="http://www.w3.org/2000/svg",n=document.createElementNS(t,"svg");for(var r in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,r)&&n.setAttribute(r,this.attributes[r]);for(var i=0;i<this.children.length;i++)n.appendChild(this.children[i].toNode());return n}toMarkup(){var t='<svg xmlns="http://www.w3.org/2000/svg"';for(var n in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,n)&&(t+=" "+n+'="'+te.escape(this.attributes[n])+'"');t+=">";for(var r=0;r<this.children.length;r++)t+=this.children[r].toMarkup();return t+="</svg>",t}}class vr{constructor(t,n){this.pathName=void 0,this.alternate=void 0,this.pathName=t,this.alternate=n}toNode(){var t="http://www.w3.org/2000/svg",n=document.createElementNS(t,"path");return this.alternate?n.setAttribute("d",this.alternate):n.setAttribute("d",qd[this.pathName]),n}toMarkup(){return this.alternate?'<path d="'+te.escape(this.alternate)+'"/>':'<path d="'+te.escape(qd[this.pathName])+'"/>'}}class C0{constructor(t){this.attributes=void 0,this.attributes=t||{}}toNode(){var t="http://www.w3.org/2000/svg",n=document.createElementNS(t,"line");for(var r in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,r)&&n.setAttribute(r,this.attributes[r]);return n}toMarkup(){var t="<line";for(var n in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,n)&&(t+=" "+n+'="'+te.escape(this.attributes[n])+'"');return t+="/>",t}}function Od(e){if(e instanceof Kt)return e;throw new Error("Expected symbolNode but got "+String(e)+".")}function Ow(e){if(e instanceof ao)return e;throw new Error("Expected span<HtmlDomNode> but got "+String(e)+".")}var jw={bin:1,close:1,inner:1,open:1,punct:1,rel:1},Hw={"accent-token":1,mathord:1,"op-token":1,spacing:1,textord:1},De={math:{},text:{}};function c(e,t,n,r,i,a){De[e][i]={font:t,group:n,replace:r},a&&r&&(De[e][r]=De[e][i])}var d="math",B="text",b="main",S="ams",Fe="accent-token",Y="bin",bt="close",ji="inner",re="mathord",Ke="op-token",Rt="open",ss="punct",E="rel",Kn="spacing",z="textord";c(d,b,E,"≡","\\equiv",!0);c(d,b,E,"≺","\\prec",!0);c(d,b,E,"≻","\\succ",!0);c(d,b,E,"∼","\\sim",!0);c(d,b,E,"⊥","\\perp");c(d,b,E,"⪯","\\preceq",!0);c(d,b,E,"⪰","\\succeq",!0);c(d,b,E,"≃","\\simeq",!0);c(d,b,E,"∣","\\mid",!0);c(d,b,E,"≪","\\ll",!0);c(d,b,E,"≫","\\gg",!0);c(d,b,E,"≍","\\asymp",!0);c(d,b,E,"∥","\\parallel");c(d,b,E,"⋈","\\bowtie",!0);c(d,b,E,"⌣","\\smile",!0);c(d,b,E,"⊑","\\sqsubseteq",!0);c(d,b,E,"⊒","\\sqsupseteq",!0);c(d,b,E,"≐","\\doteq",!0);c(d,b,E,"⌢","\\frown",!0);c(d,b,E,"∋","\\ni",!0);c(d,b,E,"∝","\\propto",!0);c(d,b,E,"⊢","\\vdash",!0);c(d,b,E,"⊣","\\dashv",!0);c(d,b,E,"∋","\\owns");c(d,b,ss,".","\\ldotp");c(d,b,ss,"⋅","\\cdotp");c(d,b,z,"#","\\#");c(B,b,z,"#","\\#");c(d,b,z,"&","\\&");c(B,b,z,"&","\\&");c(d,b,z,"ℵ","\\aleph",!0);c(d,b,z,"∀","\\forall",!0);c(d,b,z,"ℏ","\\hbar",!0);c(d,b,z,"∃","\\exists",!0);c(d,b,z,"∇","\\nabla",!0);c(d,b,z,"♭","\\flat",!0);c(d,b,z,"ℓ","\\ell",!0);c(d,b,z,"♮","\\natural",!0);c(d,b,z,"♣","\\clubsuit",!0);c(d,b,z,"℘","\\wp",!0);c(d,b,z,"♯","\\sharp",!0);c(d,b,z,"♢","\\diamondsuit",!0);c(d,b,z,"ℜ","\\Re",!0);c(d,b,z,"♡","\\heartsuit",!0);c(d,b,z,"ℑ","\\Im",!0);c(d,b,z,"♠","\\spadesuit",!0);c(d,b,z,"§","\\S",!0);c(B,b,z,"§","\\S");c(d,b,z,"¶","\\P",!0);c(B,b,z,"¶","\\P");c(d,b,z,"†","\\dag");c(B,b,z,"†","\\dag");c(B,b,z,"†","\\textdagger");c(d,b,z,"‡","\\ddag");c(B,b,z,"‡","\\ddag");c(B,b,z,"‡","\\textdaggerdbl");c(d,b,bt,"⎱","\\rmoustache",!0);c(d,b,Rt,"⎰","\\lmoustache",!0);c(d,b,bt,"⟯","\\rgroup",!0);c(d,b,Rt,"⟮","\\lgroup",!0);c(d,b,Y,"∓","\\mp",!0);c(d,b,Y,"⊖","\\ominus",!0);c(d,b,Y,"⊎","\\uplus",!0);c(d,b,Y,"⊓","\\sqcap",!0);c(d,b,Y,"∗","\\ast");c(d,b,Y,"⊔","\\sqcup",!0);c(d,b,Y,"◯","\\bigcirc",!0);c(d,b,Y,"∙","\\bullet",!0);c(d,b,Y,"‡","\\ddagger");c(d,b,Y,"≀","\\wr",!0);c(d,b,Y,"⨿","\\amalg");c(d,b,Y,"&","\\And");c(d,b,E,"⟵","\\longleftarrow",!0);c(d,b,E,"⇐","\\Leftarrow",!0);c(d,b,E,"⟸","\\Longleftarrow",!0);c(d,b,E,"⟶","\\longrightarrow",!0);c(d,b,E,"⇒","\\Rightarrow",!0);c(d,b,E,"⟹","\\Longrightarrow",!0);c(d,b,E,"↔","\\leftrightarrow",!0);c(d,b,E,"⟷","\\longleftrightarrow",!0);c(d,b,E,"⇔","\\Leftrightarrow",!0);c(d,b,E,"⟺","\\Longleftrightarrow",!0);c(d,b,E,"↦","\\mapsto",!0);c(d,b,E,"⟼","\\longmapsto",!0);c(d,b,E,"↗","\\nearrow",!0);c(d,b,E,"↩","\\hookleftarrow",!0);c(d,b,E,"↪","\\hookrightarrow",!0);c(d,b,E,"↘","\\searrow",!0);c(d,b,E,"↼","\\leftharpoonup",!0);c(d,b,E,"⇀","\\rightharpoonup",!0);c(d,b,E,"↙","\\swarrow",!0);c(d,b,E,"↽","\\leftharpoondown",!0);c(d,b,E,"⇁","\\rightharpoondown",!0);c(d,b,E,"↖","\\nwarrow",!0);c(d,b,E,"⇌","\\rightleftharpoons",!0);c(d,S,E,"≮","\\nless",!0);c(d,S,E,"","\\@nleqslant");c(d,S,E,"","\\@nleqq");c(d,S,E,"⪇","\\lneq",!0);c(d,S,E,"≨","\\lneqq",!0);c(d,S,E,"","\\@lvertneqq");c(d,S,E,"⋦","\\lnsim",!0);c(d,S,E,"⪉","\\lnapprox",!0);c(d,S,E,"⊀","\\nprec",!0);c(d,S,E,"⋠","\\npreceq",!0);c(d,S,E,"⋨","\\precnsim",!0);c(d,S,E,"⪹","\\precnapprox",!0);c(d,S,E,"≁","\\nsim",!0);c(d,S,E,"","\\@nshortmid");c(d,S,E,"∤","\\nmid",!0);c(d,S,E,"⊬","\\nvdash",!0);c(d,S,E,"⊭","\\nvDash",!0);c(d,S,E,"⋪","\\ntriangleleft");c(d,S,E,"⋬","\\ntrianglelefteq",!0);c(d,S,E,"⊊","\\subsetneq",!0);c(d,S,E,"","\\@varsubsetneq");c(d,S,E,"⫋","\\subsetneqq",!0);c(d,S,E,"","\\@varsubsetneqq");c(d,S,E,"≯","\\ngtr",!0);c(d,S,E,"","\\@ngeqslant");c(d,S,E,"","\\@ngeqq");c(d,S,E,"⪈","\\gneq",!0);c(d,S,E,"≩","\\gneqq",!0);c(d,S,E,"","\\@gvertneqq");c(d,S,E,"⋧","\\gnsim",!0);c(d,S,E,"⪊","\\gnapprox",!0);c(d,S,E,"⊁","\\nsucc",!0);c(d,S,E,"⋡","\\nsucceq",!0);c(d,S,E,"⋩","\\succnsim",!0);c(d,S,E,"⪺","\\succnapprox",!0);c(d,S,E,"≆","\\ncong",!0);c(d,S,E,"","\\@nshortparallel");c(d,S,E,"∦","\\nparallel",!0);c(d,S,E,"⊯","\\nVDash",!0);c(d,S,E,"⋫","\\ntriangleright");c(d,S,E,"⋭","\\ntrianglerighteq",!0);c(d,S,E,"","\\@nsupseteqq");c(d,S,E,"⊋","\\supsetneq",!0);c(d,S,E,"","\\@varsupsetneq");c(d,S,E,"⫌","\\supsetneqq",!0);c(d,S,E,"","\\@varsupsetneqq");c(d,S,E,"⊮","\\nVdash",!0);c(d,S,E,"⪵","\\precneqq",!0);c(d,S,E,"⪶","\\succneqq",!0);c(d,S,E,"","\\@nsubseteqq");c(d,S,Y,"⊴","\\unlhd");c(d,S,Y,"⊵","\\unrhd");c(d,S,E,"↚","\\nleftarrow",!0);c(d,S,E,"↛","\\nrightarrow",!0);c(d,S,E,"⇍","\\nLeftarrow",!0);c(d,S,E,"⇏","\\nRightarrow",!0);c(d,S,E,"↮","\\nleftrightarrow",!0);c(d,S,E,"⇎","\\nLeftrightarrow",!0);c(d,S,E,"△","\\vartriangle");c(d,S,z,"ℏ","\\hslash");c(d,S,z,"▽","\\triangledown");c(d,S,z,"◊","\\lozenge");c(d,S,z,"Ⓢ","\\circledS");c(d,S,z,"®","\\circledR");c(B,S,z,"®","\\circledR");c(d,S,z,"∡","\\measuredangle",!0);c(d,S,z,"∄","\\nexists");c(d,S,z,"℧","\\mho");c(d,S,z,"Ⅎ","\\Finv",!0);c(d,S,z,"⅁","\\Game",!0);c(d,S,z,"‵","\\backprime");c(d,S,z,"▲","\\blacktriangle");c(d,S,z,"▼","\\blacktriangledown");c(d,S,z,"■","\\blacksquare");c(d,S,z,"⧫","\\blacklozenge");c(d,S,z,"★","\\bigstar");c(d,S,z,"∢","\\sphericalangle",!0);c(d,S,z,"∁","\\complement",!0);c(d,S,z,"ð","\\eth",!0);c(B,b,z,"ð","ð");c(d,S,z,"╱","\\diagup");c(d,S,z,"╲","\\diagdown");c(d,S,z,"□","\\square");c(d,S,z,"□","\\Box");c(d,S,z,"◊","\\Diamond");c(d,S,z,"¥","\\yen",!0);c(B,S,z,"¥","\\yen",!0);c(d,S,z,"✓","\\checkmark",!0);c(B,S,z,"✓","\\checkmark");c(d,S,z,"ℶ","\\beth",!0);c(d,S,z,"ℸ","\\daleth",!0);c(d,S,z,"ℷ","\\gimel",!0);c(d,S,z,"ϝ","\\digamma",!0);c(d,S,z,"ϰ","\\varkappa");c(d,S,Rt,"┌","\\@ulcorner",!0);c(d,S,bt,"┐","\\@urcorner",!0);c(d,S,Rt,"└","\\@llcorner",!0);c(d,S,bt,"┘","\\@lrcorner",!0);c(d,S,E,"≦","\\leqq",!0);c(d,S,E,"⩽","\\leqslant",!0);c(d,S,E,"⪕","\\eqslantless",!0);c(d,S,E,"≲","\\lesssim",!0);c(d,S,E,"⪅","\\lessapprox",!0);c(d,S,E,"≊","\\approxeq",!0);c(d,S,Y,"⋖","\\lessdot");c(d,S,E,"⋘","\\lll",!0);c(d,S,E,"≶","\\lessgtr",!0);c(d,S,E,"⋚","\\lesseqgtr",!0);c(d,S,E,"⪋","\\lesseqqgtr",!0);c(d,S,E,"≑","\\doteqdot");c(d,S,E,"≓","\\risingdotseq",!0);c(d,S,E,"≒","\\fallingdotseq",!0);c(d,S,E,"∽","\\backsim",!0);c(d,S,E,"⋍","\\backsimeq",!0);c(d,S,E,"⫅","\\subseteqq",!0);c(d,S,E,"⋐","\\Subset",!0);c(d,S,E,"⊏","\\sqsubset",!0);c(d,S,E,"≼","\\preccurlyeq",!0);c(d,S,E,"⋞","\\curlyeqprec",!0);c(d,S,E,"≾","\\precsim",!0);c(d,S,E,"⪷","\\precapprox",!0);c(d,S,E,"⊲","\\vartriangleleft");c(d,S,E,"⊴","\\trianglelefteq");c(d,S,E,"⊨","\\vDash",!0);c(d,S,E,"⊪","\\Vvdash",!0);c(d,S,E,"⌣","\\smallsmile");c(d,S,E,"⌢","\\smallfrown");c(d,S,E,"≏","\\bumpeq",!0);c(d,S,E,"≎","\\Bumpeq",!0);c(d,S,E,"≧","\\geqq",!0);c(d,S,E,"⩾","\\geqslant",!0);c(d,S,E,"⪖","\\eqslantgtr",!0);c(d,S,E,"≳","\\gtrsim",!0);c(d,S,E,"⪆","\\gtrapprox",!0);c(d,S,Y,"⋗","\\gtrdot");c(d,S,E,"⋙","\\ggg",!0);c(d,S,E,"≷","\\gtrless",!0);c(d,S,E,"⋛","\\gtreqless",!0);c(d,S,E,"⪌","\\gtreqqless",!0);c(d,S,E,"≖","\\eqcirc",!0);c(d,S,E,"≗","\\circeq",!0);c(d,S,E,"≜","\\triangleq",!0);c(d,S,E,"∼","\\thicksim");c(d,S,E,"≈","\\thickapprox");c(d,S,E,"⫆","\\supseteqq",!0);c(d,S,E,"⋑","\\Supset",!0);c(d,S,E,"⊐","\\sqsupset",!0);c(d,S,E,"≽","\\succcurlyeq",!0);c(d,S,E,"⋟","\\curlyeqsucc",!0);c(d,S,E,"≿","\\succsim",!0);c(d,S,E,"⪸","\\succapprox",!0);c(d,S,E,"⊳","\\vartriangleright");c(d,S,E,"⊵","\\trianglerighteq");c(d,S,E,"⊩","\\Vdash",!0);c(d,S,E,"∣","\\shortmid");c(d,S,E,"∥","\\shortparallel");c(d,S,E,"≬","\\between",!0);c(d,S,E,"⋔","\\pitchfork",!0);c(d,S,E,"∝","\\varpropto");c(d,S,E,"◀","\\blacktriangleleft");c(d,S,E,"∴","\\therefore",!0);c(d,S,E,"∍","\\backepsilon");c(d,S,E,"▶","\\blacktriangleright");c(d,S,E,"∵","\\because",!0);c(d,S,E,"⋘","\\llless");c(d,S,E,"⋙","\\gggtr");c(d,S,Y,"⊲","\\lhd");c(d,S,Y,"⊳","\\rhd");c(d,S,E,"≂","\\eqsim",!0);c(d,b,E,"⋈","\\Join");c(d,S,E,"≑","\\Doteq",!0);c(d,S,Y,"∔","\\dotplus",!0);c(d,S,Y,"∖","\\smallsetminus");c(d,S,Y,"⋒","\\Cap",!0);c(d,S,Y,"⋓","\\Cup",!0);c(d,S,Y,"⩞","\\doublebarwedge",!0);c(d,S,Y,"⊟","\\boxminus",!0);c(d,S,Y,"⊞","\\boxplus",!0);c(d,S,Y,"⋇","\\divideontimes",!0);c(d,S,Y,"⋉","\\ltimes",!0);c(d,S,Y,"⋊","\\rtimes",!0);c(d,S,Y,"⋋","\\leftthreetimes",!0);c(d,S,Y,"⋌","\\rightthreetimes",!0);c(d,S,Y,"⋏","\\curlywedge",!0);c(d,S,Y,"⋎","\\curlyvee",!0);c(d,S,Y,"⊝","\\circleddash",!0);c(d,S,Y,"⊛","\\circledast",!0);c(d,S,Y,"⋅","\\centerdot");c(d,S,Y,"⊺","\\intercal",!0);c(d,S,Y,"⋒","\\doublecap");c(d,S,Y,"⋓","\\doublecup");c(d,S,Y,"⊠","\\boxtimes",!0);c(d,S,E,"⇢","\\dashrightarrow",!0);c(d,S,E,"⇠","\\dashleftarrow",!0);c(d,S,E,"⇇","\\leftleftarrows",!0);c(d,S,E,"⇆","\\leftrightarrows",!0);c(d,S,E,"⇚","\\Lleftarrow",!0);c(d,S,E,"↞","\\twoheadleftarrow",!0);c(d,S,E,"↢","\\leftarrowtail",!0);c(d,S,E,"↫","\\looparrowleft",!0);c(d,S,E,"⇋","\\leftrightharpoons",!0);c(d,S,E,"↶","\\curvearrowleft",!0);c(d,S,E,"↺","\\circlearrowleft",!0);c(d,S,E,"↰","\\Lsh",!0);c(d,S,E,"⇈","\\upuparrows",!0);c(d,S,E,"↿","\\upharpoonleft",!0);c(d,S,E,"⇃","\\downharpoonleft",!0);c(d,b,E,"⊶","\\origof",!0);c(d,b,E,"⊷","\\imageof",!0);c(d,S,E,"⊸","\\multimap",!0);c(d,S,E,"↭","\\leftrightsquigarrow",!0);c(d,S,E,"⇉","\\rightrightarrows",!0);c(d,S,E,"⇄","\\rightleftarrows",!0);c(d,S,E,"↠","\\twoheadrightarrow",!0);c(d,S,E,"↣","\\rightarrowtail",!0);c(d,S,E,"↬","\\looparrowright",!0);c(d,S,E,"↷","\\curvearrowright",!0);c(d,S,E,"↻","\\circlearrowright",!0);c(d,S,E,"↱","\\Rsh",!0);c(d,S,E,"⇊","\\downdownarrows",!0);c(d,S,E,"↾","\\upharpoonright",!0);c(d,S,E,"⇂","\\downharpoonright",!0);c(d,S,E,"⇝","\\rightsquigarrow",!0);c(d,S,E,"⇝","\\leadsto");c(d,S,E,"⇛","\\Rrightarrow",!0);c(d,S,E,"↾","\\restriction");c(d,b,z,"‘","`");c(d,b,z,"$","\\$");c(B,b,z,"$","\\$");c(B,b,z,"$","\\textdollar");c(d,b,z,"%","\\%");c(B,b,z,"%","\\%");c(d,b,z,"_","\\_");c(B,b,z,"_","\\_");c(B,b,z,"_","\\textunderscore");c(d,b,z,"∠","\\angle",!0);c(d,b,z,"∞","\\infty",!0);c(d,b,z,"′","\\prime");c(d,b,z,"△","\\triangle");c(d,b,z,"Γ","\\Gamma",!0);c(d,b,z,"Δ","\\Delta",!0);c(d,b,z,"Θ","\\Theta",!0);c(d,b,z,"Λ","\\Lambda",!0);c(d,b,z,"Ξ","\\Xi",!0);c(d,b,z,"Π","\\Pi",!0);c(d,b,z,"Σ","\\Sigma",!0);c(d,b,z,"Υ","\\Upsilon",!0);c(d,b,z,"Φ","\\Phi",!0);c(d,b,z,"Ψ","\\Psi",!0);c(d,b,z,"Ω","\\Omega",!0);c(d,b,z,"A","Α");c(d,b,z,"B","Β");c(d,b,z,"E","Ε");c(d,b,z,"Z","Ζ");c(d,b,z,"H","Η");c(d,b,z,"I","Ι");c(d,b,z,"K","Κ");c(d,b,z,"M","Μ");c(d,b,z,"N","Ν");c(d,b,z,"O","Ο");c(d,b,z,"P","Ρ");c(d,b,z,"T","Τ");c(d,b,z,"X","Χ");c(d,b,z,"¬","\\neg",!0);c(d,b,z,"¬","\\lnot");c(d,b,z,"⊤","\\top");c(d,b,z,"⊥","\\bot");c(d,b,z,"∅","\\emptyset");c(d,S,z,"∅","\\varnothing");c(d,b,re,"α","\\alpha",!0);c(d,b,re,"β","\\beta",!0);c(d,b,re,"γ","\\gamma",!0);c(d,b,re,"δ","\\delta",!0);c(d,b,re,"ϵ","\\epsilon",!0);c(d,b,re,"ζ","\\zeta",!0);c(d,b,re,"η","\\eta",!0);c(d,b,re,"θ","\\theta",!0);c(d,b,re,"ι","\\iota",!0);c(d,b,re,"κ","\\kappa",!0);c(d,b,re,"λ","\\lambda",!0);c(d,b,re,"μ","\\mu",!0);c(d,b,re,"ν","\\nu",!0);c(d,b,re,"ξ","\\xi",!0);c(d,b,re,"ο","\\omicron",!0);c(d,b,re,"π","\\pi",!0);c(d,b,re,"ρ","\\rho",!0);c(d,b,re,"σ","\\sigma",!0);c(d,b,re,"τ","\\tau",!0);c(d,b,re,"υ","\\upsilon",!0);c(d,b,re,"ϕ","\\phi",!0);c(d,b,re,"χ","\\chi",!0);c(d,b,re,"ψ","\\psi",!0);c(d,b,re,"ω","\\omega",!0);c(d,b,re,"ε","\\varepsilon",!0);c(d,b,re,"ϑ","\\vartheta",!0);c(d,b,re,"ϖ","\\varpi",!0);c(d,b,re,"ϱ","\\varrho",!0);c(d,b,re,"ς","\\varsigma",!0);c(d,b,re,"φ","\\varphi",!0);c(d,b,Y,"∗","*",!0);c(d,b,Y,"+","+");c(d,b,Y,"−","-",!0);c(d,b,Y,"⋅","\\cdot",!0);c(d,b,Y,"∘","\\circ",!0);c(d,b,Y,"÷","\\div",!0);c(d,b,Y,"±","\\pm",!0);c(d,b,Y,"×","\\times",!0);c(d,b,Y,"∩","\\cap",!0);c(d,b,Y,"∪","\\cup",!0);c(d,b,Y,"∖","\\setminus",!0);c(d,b,Y,"∧","\\land");c(d,b,Y,"∨","\\lor");c(d,b,Y,"∧","\\wedge",!0);c(d,b,Y,"∨","\\vee",!0);c(d,b,z,"√","\\surd");c(d,b,Rt,"⟨","\\langle",!0);c(d,b,Rt,"∣","\\lvert");c(d,b,Rt,"∥","\\lVert");c(d,b,bt,"?","?");c(d,b,bt,"!","!");c(d,b,bt,"⟩","\\rangle",!0);c(d,b,bt,"∣","\\rvert");c(d,b,bt,"∥","\\rVert");c(d,b,E,"=","=");c(d,b,E,":",":");c(d,b,E,"≈","\\approx",!0);c(d,b,E,"≅","\\cong",!0);c(d,b,E,"≥","\\ge");c(d,b,E,"≥","\\geq",!0);c(d,b,E,"←","\\gets");c(d,b,E,">","\\gt",!0);c(d,b,E,"∈","\\in",!0);c(d,b,E,"","\\@not");c(d,b,E,"⊂","\\subset",!0);c(d,b,E,"⊃","\\supset",!0);c(d,b,E,"⊆","\\subseteq",!0);c(d,b,E,"⊇","\\supseteq",!0);c(d,S,E,"⊈","\\nsubseteq",!0);c(d,S,E,"⊉","\\nsupseteq",!0);c(d,b,E,"⊨","\\models");c(d,b,E,"←","\\leftarrow",!0);c(d,b,E,"≤","\\le");c(d,b,E,"≤","\\leq",!0);c(d,b,E,"<","\\lt",!0);c(d,b,E,"→","\\rightarrow",!0);c(d,b,E,"→","\\to");c(d,S,E,"≱","\\ngeq",!0);c(d,S,E,"≰","\\nleq",!0);c(d,b,Kn," ","\\ ");c(d,b,Kn," ","\\space");c(d,b,Kn," ","\\nobreakspace");c(B,b,Kn," ","\\ ");c(B,b,Kn," "," ");c(B,b,Kn," ","\\space");c(B,b,Kn," ","\\nobreakspace");c(d,b,Kn,null,"\\nobreak");c(d,b,Kn,null,"\\allowbreak");c(d,b,ss,",",",");c(d,b,ss,";",";");c(d,S,Y,"⊼","\\barwedge",!0);c(d,S,Y,"⊻","\\veebar",!0);c(d,b,Y,"⊙","\\odot",!0);c(d,b,Y,"⊕","\\oplus",!0);c(d,b,Y,"⊗","\\otimes",!0);c(d,b,z,"∂","\\partial",!0);c(d,b,Y,"⊘","\\oslash",!0);c(d,S,Y,"⊚","\\circledcirc",!0);c(d,S,Y,"⊡","\\boxdot",!0);c(d,b,Y,"△","\\bigtriangleup");c(d,b,Y,"▽","\\bigtriangledown");c(d,b,Y,"†","\\dagger");c(d,b,Y,"⋄","\\diamond");c(d,b,Y,"⋆","\\star");c(d,b,Y,"◃","\\triangleleft");c(d,b,Y,"▹","\\triangleright");c(d,b,Rt,"{","\\{");c(B,b,z,"{","\\{");c(B,b,z,"{","\\textbraceleft");c(d,b,bt,"}","\\}");c(B,b,z,"}","\\}");c(B,b,z,"}","\\textbraceright");c(d,b,Rt,"{","\\lbrace");c(d,b,bt,"}","\\rbrace");c(d,b,Rt,"[","\\lbrack",!0);c(B,b,z,"[","\\lbrack",!0);c(d,b,bt,"]","\\rbrack",!0);c(B,b,z,"]","\\rbrack",!0);c(d,b,Rt,"(","\\lparen",!0);c(d,b,bt,")","\\rparen",!0);c(B,b,z,"<","\\textless",!0);c(B,b,z,">","\\textgreater",!0);c(d,b,Rt,"⌊","\\lfloor",!0);c(d,b,bt,"⌋","\\rfloor",!0);c(d,b,Rt,"⌈","\\lceil",!0);c(d,b,bt,"⌉","\\rceil",!0);c(d,b,z,"\\","\\backslash");c(d,b,z,"∣","|");c(d,b,z,"∣","\\vert");c(B,b,z,"|","\\textbar",!0);c(d,b,z,"∥","\\|");c(d,b,z,"∥","\\Vert");c(B,b,z,"∥","\\textbardbl");c(B,b,z,"~","\\textasciitilde");c(B,b,z,"\\","\\textbackslash");c(B,b,z,"^","\\textasciicircum");c(d,b,E,"↑","\\uparrow",!0);c(d,b,E,"⇑","\\Uparrow",!0);c(d,b,E,"↓","\\downarrow",!0);c(d,b,E,"⇓","\\Downarrow",!0);c(d,b,E,"↕","\\updownarrow",!0);c(d,b,E,"⇕","\\Updownarrow",!0);c(d,b,Ke,"∐","\\coprod");c(d,b,Ke,"⋁","\\bigvee");c(d,b,Ke,"⋀","\\bigwedge");c(d,b,Ke,"⨄","\\biguplus");c(d,b,Ke,"⋂","\\bigcap");c(d,b,Ke,"⋃","\\bigcup");c(d,b,Ke,"∫","\\int");c(d,b,Ke,"∫","\\intop");c(d,b,Ke,"∬","\\iint");c(d,b,Ke,"∭","\\iiint");c(d,b,Ke,"∏","\\prod");c(d,b,Ke,"∑","\\sum");c(d,b,Ke,"⨂","\\bigotimes");c(d,b,Ke,"⨁","\\bigoplus");c(d,b,Ke,"⨀","\\bigodot");c(d,b,Ke,"∮","\\oint");c(d,b,Ke,"∯","\\oiint");c(d,b,Ke,"∰","\\oiiint");c(d,b,Ke,"⨆","\\bigsqcup");c(d,b,Ke,"∫","\\smallint");c(B,b,ji,"…","\\textellipsis");c(d,b,ji,"…","\\mathellipsis");c(B,b,ji,"…","\\ldots",!0);c(d,b,ji,"…","\\ldots",!0);c(d,b,ji,"⋯","\\@cdots",!0);c(d,b,ji,"⋱","\\ddots",!0);c(d,b,z,"⋮","\\varvdots");c(B,b,z,"⋮","\\varvdots");c(d,b,Fe,"ˊ","\\acute");c(d,b,Fe,"ˋ","\\grave");c(d,b,Fe,"¨","\\ddot");c(d,b,Fe,"~","\\tilde");c(d,b,Fe,"ˉ","\\bar");c(d,b,Fe,"˘","\\breve");c(d,b,Fe,"ˇ","\\check");c(d,b,Fe,"^","\\hat");c(d,b,Fe,"⃗","\\vec");c(d,b,Fe,"˙","\\dot");c(d,b,Fe,"˚","\\mathring");c(d,b,re,"","\\@imath");c(d,b,re,"","\\@jmath");c(d,b,z,"ı","ı");c(d,b,z,"ȷ","ȷ");c(B,b,z,"ı","\\i",!0);c(B,b,z,"ȷ","\\j",!0);c(B,b,z,"ß","\\ss",!0);c(B,b,z,"æ","\\ae",!0);c(B,b,z,"œ","\\oe",!0);c(B,b,z,"ø","\\o",!0);c(B,b,z,"Æ","\\AE",!0);c(B,b,z,"Œ","\\OE",!0);c(B,b,z,"Ø","\\O",!0);c(B,b,Fe,"ˊ","\\'");c(B,b,Fe,"ˋ","\\`");c(B,b,Fe,"ˆ","\\^");c(B,b,Fe,"˜","\\~");c(B,b,Fe,"ˉ","\\=");c(B,b,Fe,"˘","\\u");c(B,b,Fe,"˙","\\.");c(B,b,Fe,"¸","\\c");c(B,b,Fe,"˚","\\r");c(B,b,Fe,"ˇ","\\v");c(B,b,Fe,"¨",'\\"');c(B,b,Fe,"˝","\\H");c(B,b,Fe,"◯","\\textcircled");var xg={"--":!0,"---":!0,"``":!0,"''":!0};c(B,b,z,"–","--",!0);c(B,b,z,"–","\\textendash");c(B,b,z,"—","---",!0);c(B,b,z,"—","\\textemdash");c(B,b,z,"‘","`",!0);c(B,b,z,"‘","\\textquoteleft");c(B,b,z,"’","'",!0);c(B,b,z,"’","\\textquoteright");c(B,b,z,"“","``",!0);c(B,b,z,"“","\\textquotedblleft");c(B,b,z,"”","''",!0);c(B,b,z,"”","\\textquotedblright");c(d,b,z,"°","\\degree",!0);c(B,b,z,"°","\\degree");c(B,b,z,"°","\\textdegree",!0);c(d,b,z,"£","\\pounds");c(d,b,z,"£","\\mathsterling",!0);c(B,b,z,"£","\\pounds");c(B,b,z,"£","\\textsterling",!0);c(d,S,z,"✠","\\maltese");c(B,S,z,"✠","\\maltese");var jd='0123456789/@."';for(var au=0;au<jd.length;au++){var Hd=jd.charAt(au);c(d,b,z,Hd,Hd)}var Wd='0123456789!@*()-=+";:?/.,';for(var ou=0;ou<Wd.length;ou++){var Ud=Wd.charAt(ou);c(B,b,z,Ud,Ud)}var Fl="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";for(var lu=0;lu<Fl.length;lu++){var Po=Fl.charAt(lu);c(d,b,re,Po,Po),c(B,b,z,Po,Po)}c(d,S,z,"C","ℂ");c(B,S,z,"C","ℂ");c(d,S,z,"H","ℍ");c(B,S,z,"H","ℍ");c(d,S,z,"N","ℕ");c(B,S,z,"N","ℕ");c(d,S,z,"P","ℙ");c(B,S,z,"P","ℙ");c(d,S,z,"Q","ℚ");c(B,S,z,"Q","ℚ");c(d,S,z,"R","ℝ");c(B,S,z,"R","ℝ");c(d,S,z,"Z","ℤ");c(B,S,z,"Z","ℤ");c(d,b,re,"h","ℎ");c(B,b,re,"h","ℎ");var oe="";for(var ht=0;ht<Fl.length;ht++){var Oe=Fl.charAt(ht);oe=String.fromCharCode(55349,56320+ht),c(d,b,re,Oe,oe),c(B,b,z,Oe,oe),oe=String.fromCharCode(55349,56372+ht),c(d,b,re,Oe,oe),c(B,b,z,Oe,oe),oe=String.fromCharCode(55349,56424+ht),c(d,b,re,Oe,oe),c(B,b,z,Oe,oe),oe=String.fromCharCode(55349,56580+ht),c(d,b,re,Oe,oe),c(B,b,z,Oe,oe),oe=String.fromCharCode(55349,56684+ht),c(d,b,re,Oe,oe),c(B,b,z,Oe,oe),oe=String.fromCharCode(55349,56736+ht),c(d,b,re,Oe,oe),c(B,b,z,Oe,oe),oe=String.fromCharCode(55349,56788+ht),c(d,b,re,Oe,oe),c(B,b,z,Oe,oe),oe=String.fromCharCode(55349,56840+ht),c(d,b,re,Oe,oe),c(B,b,z,Oe,oe),oe=String.fromCharCode(55349,56944+ht),c(d,b,re,Oe,oe),c(B,b,z,Oe,oe),ht<26&&(oe=String.fromCharCode(55349,56632+ht),c(d,b,re,Oe,oe),c(B,b,z,Oe,oe),oe=String.fromCharCode(55349,56476+ht),c(d,b,re,Oe,oe),c(B,b,z,Oe,oe))}oe="𝕜";c(d,b,re,"k",oe);c(B,b,z,"k",oe);for(var Dr=0;Dr<10;Dr++){var Jn=Dr.toString();oe=String.fromCharCode(55349,57294+Dr),c(d,b,re,Jn,oe),c(B,b,z,Jn,oe),oe=String.fromCharCode(55349,57314+Dr),c(d,b,re,Jn,oe),c(B,b,z,Jn,oe),oe=String.fromCharCode(55349,57324+Dr),c(d,b,re,Jn,oe),c(B,b,z,Jn,oe),oe=String.fromCharCode(55349,57334+Dr),c(d,b,re,Jn,oe),c(B,b,z,Jn,oe)}var D0="ÐÞþ";for(var su=0;su<D0.length;su++){var Ao=D0.charAt(su);c(d,b,re,Ao,Ao),c(B,b,z,Ao,Ao)}var To=[["mathbf","textbf","Main-Bold"],["mathbf","textbf","Main-Bold"],["mathnormal","textit","Math-Italic"],["mathnormal","textit","Math-Italic"],["boldsymbol","boldsymbol","Main-BoldItalic"],["boldsymbol","boldsymbol","Main-BoldItalic"],["mathscr","textscr","Script-Regular"],["","",""],["","",""],["","",""],["mathfrak","textfrak","Fraktur-Regular"],["mathfrak","textfrak","Fraktur-Regular"],["mathbb","textbb","AMS-Regular"],["mathbb","textbb","AMS-Regular"],["mathboldfrak","textboldfrak","Fraktur-Regular"],["mathboldfrak","textboldfrak","Fraktur-Regular"],["mathsf","textsf","SansSerif-Regular"],["mathsf","textsf","SansSerif-Regular"],["mathboldsf","textboldsf","SansSerif-Bold"],["mathboldsf","textboldsf","SansSerif-Bold"],["mathitsf","textitsf","SansSerif-Italic"],["mathitsf","textitsf","SansSerif-Italic"],["","",""],["","",""],["mathtt","texttt","Typewriter-Regular"],["mathtt","texttt","Typewriter-Regular"]],Xd=[["mathbf","textbf","Main-Bold"],["","",""],["mathsf","textsf","SansSerif-Regular"],["mathboldsf","textboldsf","SansSerif-Bold"],["mathtt","texttt","Typewriter-Regular"]],Ww=function(t,n){var r=t.charCodeAt(0),i=t.charCodeAt(1),a=(r-55296)*1024+(i-56320)+65536,o=n==="math"?0:1;if(119808<=a&&a<120484){var l=Math.floor((a-119808)/26);return[To[l][2],To[l][o]]}else if(120782<=a&&a<=120831){var s=Math.floor((a-120782)/10);return[Xd[s][2],Xd[s][o]]}else{if(a===120485||a===120486)return[To[0][2],To[0][o]];if(120486<a&&a<120782)return["",""];throw new H("Unsupported character: "+t)}},us=function(t,n,r){return De[r][t]&&De[r][t].replace&&(t=De[r][t].replace),{value:t,metrics:nc(t,n,r)}},nn=function(t,n,r,i,a){var o=us(t,n,r),l=o.metrics;t=o.value;var s;if(l){var u=l.italic;(r==="text"||i&&i.font==="mathit")&&(u=0),s=new Kt(t,l.height,l.depth,u,l.skew,l.width,a)}else typeof console<"u"&&console.warn("No character metrics "+("for '"+t+"' in style '"+n+"' and mode '"+r+"'")),s=new Kt(t,0,0,0,0,0,a);if(i){s.maxFontSize=i.sizeMultiplier,i.style.isTight()&&s.classes.push("mtight");var h=i.getColor();h&&(s.style.color=h)}return s},Uw=function(t,n,r,i){return i===void 0&&(i=[]),r.font==="boldsymbol"&&us(t,"Main-Bold",n).metrics?nn(t,"Main-Bold",n,r,i.concat(["mathbf"])):t==="\\"||De[n][t].font==="main"?nn(t,"Main-Regular",n,r,i):nn(t,"AMS-Regular",n,r,i.concat(["amsrm"]))},Xw=function(t,n,r,i,a){return a!=="textord"&&us(t,"Math-BoldItalic",n).metrics?{fontName:"Math-BoldItalic",fontClass:"boldsymbol"}:{fontName:"Main-Bold",fontClass:"mathbf"}},Kw=function(t,n,r){var i=t.mode,a=t.text,o=["mord"],l=i==="math"||i==="text"&&n.font,s=l?n.font:n.fontFamily,u="",h="";if(a.charCodeAt(0)===55349&&([u,h]=Ww(a,i)),u.length>0)return nn(a,u,i,n,o.concat(h));if(s){var m,p;if(s==="boldsymbol"){var f=Xw(a,i,n,o,r);m=f.fontName,p=[f.fontClass]}else l?(m=kg[s].fontName,p=[s]):(m=Fo(s,n.fontWeight,n.fontShape),p=[s,n.fontWeight,n.fontShape]);if(us(a,m,i).metrics)return nn(a,m,i,n,o.concat(p));if(xg.hasOwnProperty(a)&&m.slice(0,10)==="Typewriter"){for(var v=[],$=0;$<a.length;$++)v.push(nn(a[$],m,i,n,o.concat(p)));return _g(v)}}if(r==="mathord")return nn(a,"Math-Italic",i,n,o.concat(["mathnormal"]));if(r==="textord"){var k=De[i][a]&&De[i][a].font;if(k==="ams"){var g=Fo("amsrm",n.fontWeight,n.fontShape);return nn(a,g,i,n,o.concat("amsrm",n.fontWeight,n.fontShape))}else if(k==="main"||!k){var y=Fo("textrm",n.fontWeight,n.fontShape);return nn(a,y,i,n,o.concat(n.fontWeight,n.fontShape))}else{var w=Fo(k,n.fontWeight,n.fontShape);return nn(a,w,i,n,o.concat(w,n.fontWeight,n.fontShape))}}else throw new Error("unexpected type: "+r+" in makeOrd")},Vw=(e,t)=>{if(yr(e.classes)!==yr(t.classes)||e.skew!==t.skew||e.maxFontSize!==t.maxFontSize)return!1;if(e.classes.length===1){var n=e.classes[0];if(n==="mbin"||n==="mord")return!1}for(var r in e.style)if(e.style.hasOwnProperty(r)&&e.style[r]!==t.style[r])return!1;for(var i in t.style)if(t.style.hasOwnProperty(i)&&e.style[i]!==t.style[i])return!1;return!0},Gw=e=>{for(var t=0;t<e.length-1;t++){var n=e[t],r=e[t+1];n instanceof Kt&&r instanceof Kt&&Vw(n,r)&&(n.text+=r.text,n.height=Math.max(n.height,r.height),n.depth=Math.max(n.depth,r.depth),n.italic=r.italic,e.splice(t+1,1),t--)}return e},ic=function(t){for(var n=0,r=0,i=0,a=0;a<t.children.length;a++){var o=t.children[a];o.height>n&&(n=o.height),o.depth>r&&(r=o.depth),o.maxFontSize>i&&(i=o.maxFontSize)}t.height=n,t.depth=r,t.maxFontSize=i},yt=function(t,n,r,i){var a=new ao(t,n,r,i);return ic(a),a},wg=(e,t,n,r)=>new ao(e,t,n,r),Qw=function(t,n,r){var i=yt([t],[],n);return i.height=Math.max(r||n.fontMetrics().defaultRuleThickness,n.minRuleThickness),i.style.borderBottomWidth=K(i.height),i.maxFontSize=1,i},Yw=function(t,n,r,i){var a=new rc(t,n,r,i);return ic(a),a},_g=function(t){var n=new io(t);return ic(n),n},Zw=function(t,n){return t instanceof io?yt([],[t],n):t},Jw=function(t){if(t.positionType==="individualShift"){for(var n=t.children,r=[n[0]],i=-n[0].shift-n[0].elem.depth,a=i,o=1;o<n.length;o++){var l=-n[o].shift-a-n[o].elem.depth,s=l-(n[o-1].elem.height+n[o-1].elem.depth);a=a+l,r.push({type:"kern",size:s}),r.push(n[o])}return{children:r,depth:i}}var u;if(t.positionType==="top"){for(var h=t.positionData,m=0;m<t.children.length;m++){var p=t.children[m];h-=p.type==="kern"?p.size:p.elem.height+p.elem.depth}u=h}else if(t.positionType==="bottom")u=-t.positionData;else{var f=t.children[0];if(f.type!=="elem")throw new Error('First child must have type "elem".');if(t.positionType==="shift")u=-f.elem.depth-t.positionData;else if(t.positionType==="firstBaseline")u=-f.elem.depth;else throw new Error("Invalid positionType "+t.positionType+".")}return{children:t.children,depth:u}},e_=function(t,n){for(var{children:r,depth:i}=Jw(t),a=0,o=0;o<r.length;o++){var l=r[o];if(l.type==="elem"){var s=l.elem;a=Math.max(a,s.maxFontSize,s.height)}}a+=2;var u=yt(["pstrut"],[]);u.style.height=K(a);for(var h=[],m=i,p=i,f=i,v=0;v<r.length;v++){var $=r[v];if($.type==="kern")f+=$.size;else{var k=$.elem,g=$.wrapperClasses||[],y=$.wrapperStyle||{},w=yt(g,[u,k],void 0,y);w.style.top=K(-a-f-k.depth),$.marginLeft&&(w.style.marginLeft=$.marginLeft),$.marginRight&&(w.style.marginRight=$.marginRight),h.push(w),f+=k.height+k.depth}m=Math.min(m,f),p=Math.max(p,f)}var P=yt(["vlist"],h);P.style.height=K(p);var F;if(m<0){var D=yt([],[]),M=yt(["vlist"],[D]);M.style.height=K(-m);var q=yt(["vlist-s"],[new Kt("​")]);F=[yt(["vlist-r"],[P,q]),yt(["vlist-r"],[M])]}else F=[yt(["vlist-r"],[P])];var I=yt(["vlist-t"],F);return F.length===2&&I.classes.push("vlist-t2"),I.height=p,I.depth=-m,I},t_=(e,t)=>{var n=yt(["mspace"],[],t),r=qe(e,t);return n.style.marginRight=K(r),n},Fo=function(t,n,r){var i="";switch(t){case"amsrm":i="AMS";break;case"textrm":i="Main";break;case"textsf":i="SansSerif";break;case"texttt":i="Typewriter";break;default:i=t}var a;return n==="textbf"&&r==="textit"?a="BoldItalic":n==="textbf"?a="Bold":n==="textit"?a="Italic":a="Regular",i+"-"+a},kg={mathbf:{variant:"bold",fontName:"Main-Bold"},mathrm:{variant:"normal",fontName:"Main-Regular"},textit:{variant:"italic",fontName:"Main-Italic"},mathit:{variant:"italic",fontName:"Main-Italic"},mathnormal:{variant:"italic",fontName:"Math-Italic"},mathsfit:{variant:"sans-serif-italic",fontName:"SansSerif-Italic"},mathbb:{variant:"double-struck",fontName:"AMS-Regular"},mathcal:{variant:"script",fontName:"Caligraphic-Regular"},mathfrak:{variant:"fraktur",fontName:"Fraktur-Regular"},mathscr:{variant:"script",fontName:"Script-Regular"},mathsf:{variant:"sans-serif",fontName:"SansSerif-Regular"},mathtt:{variant:"monospace",fontName:"Typewriter-Regular"}},Sg={vec:["vec",.471,.714],oiintSize1:["oiintSize1",.957,.499],oiintSize2:["oiintSize2",1.472,.659],oiiintSize1:["oiiintSize1",1.304,.499],oiiintSize2:["oiiintSize2",1.98,.659]},n_=function(t,n){var[r,i,a]=Sg[t],o=new vr(r),l=new jn([o],{width:K(i),height:K(a),style:"width:"+K(i),viewBox:"0 0 "+1e3*i+" "+1e3*a,preserveAspectRatio:"xMinYMin"}),s=wg(["overlay"],[l],n);return s.height=a,s.style.height=K(a),s.style.width=K(i),s},T={fontMap:kg,makeSymbol:nn,mathsym:Uw,makeSpan:yt,makeSvgSpan:wg,makeLineSpan:Qw,makeAnchor:Yw,makeFragment:_g,wrapFragment:Zw,makeVList:e_,makeOrd:Kw,makeGlue:t_,staticSvg:n_,svgData:Sg,tryCombineChars:Gw},Me={number:3,unit:"mu"},zr={number:4,unit:"mu"},Dn={number:5,unit:"mu"},r_={mord:{mop:Me,mbin:zr,mrel:Dn,minner:Me},mop:{mord:Me,mop:Me,mrel:Dn,minner:Me},mbin:{mord:zr,mop:zr,mopen:zr,minner:zr},mrel:{mord:Dn,mop:Dn,mopen:Dn,minner:Dn},mopen:{},mclose:{mop:Me,mbin:zr,mrel:Dn,minner:Me},mpunct:{mord:Me,mop:Me,mrel:Dn,mopen:Me,mclose:Me,mpunct:Me,minner:Me},minner:{mord:Me,mop:Me,mbin:zr,mrel:Dn,mopen:Me,mpunct:Me,minner:Me}},i_={mord:{mop:Me},mop:{mord:Me,mop:Me},mbin:{},mrel:{},mopen:{},mclose:{mop:Me},mpunct:{},minner:{mop:Me}},Eg={},Nl={},Ml={};function Q(e){for(var{type:t,names:n,props:r,handler:i,htmlBuilder:a,mathmlBuilder:o}=e,l={type:t,numArgs:r.numArgs,argTypes:r.argTypes,allowedInArgument:!!r.allowedInArgument,allowedInText:!!r.allowedInText,allowedInMath:r.allowedInMath===void 0?!0:r.allowedInMath,numOptionalArgs:r.numOptionalArgs||0,infix:!!r.infix,primitive:!!r.primitive,handler:i},s=0;s<n.length;++s)Eg[n[s]]=l;t&&(a&&(Nl[t]=a),o&&(Ml[t]=o))}function Vr(e){var{type:t,htmlBuilder:n,mathmlBuilder:r}=e;Q({type:t,names:[],props:{numArgs:0},handler(){throw new Error("Should never be called.")},htmlBuilder:n,mathmlBuilder:r})}var Rl=function(t){return t.type==="ordgroup"&&t.body.length===1?t.body[0]:t},We=function(t){return t.type==="ordgroup"?t.body:[t]},Hn=T.makeSpan,a_=["leftmost","mbin","mopen","mrel","mop","mpunct"],o_=["rightmost","mrel","mclose","mpunct"],l_={display:ie.DISPLAY,text:ie.TEXT,script:ie.SCRIPT,scriptscript:ie.SCRIPTSCRIPT},s_={mord:"mord",mop:"mop",mbin:"mbin",mrel:"mrel",mopen:"mopen",mclose:"mclose",mpunct:"mpunct",minner:"minner"},Qe=function(t,n,r,i){i===void 0&&(i=[null,null]);for(var a=[],o=0;o<t.length;o++){var l=ye(t[o],n);if(l instanceof io){var s=l.children;a.push(...s)}else a.push(l)}if(T.tryCombineChars(a),!r)return a;var u=n;if(t.length===1){var h=t[0];h.type==="sizing"?u=n.havingSize(h.size):h.type==="styling"&&(u=n.havingStyle(l_[h.style]))}var m=Hn([i[0]||"leftmost"],[],n),p=Hn([i[1]||"rightmost"],[],n),f=r==="root";return Kd(a,(v,$)=>{var k=$.classes[0],g=v.classes[0];k==="mbin"&&te.contains(o_,g)?$.classes[0]="mord":g==="mbin"&&te.contains(a_,k)&&(v.classes[0]="mord")},{node:m},p,f),Kd(a,(v,$)=>{var k=z0($),g=z0(v),y=k&&g?v.hasClass("mtight")?i_[k][g]:r_[k][g]:null;if(y)return T.makeGlue(y,u)},{node:m},p,f),a},Kd=function e(t,n,r,i,a){i&&t.push(i);for(var o=0;o<t.length;o++){var l=t[o],s=Cg(l);if(s){e(s.children,n,r,null,a);continue}var u=!l.hasClass("mspace");if(u){var h=n(l,r.node);h&&(r.insertAfter?r.insertAfter(h):(t.unshift(h),o++))}u?r.node=l:a&&l.hasClass("newline")&&(r.node=Hn(["leftmost"])),r.insertAfter=(m=>p=>{t.splice(m+1,0,p),o++})(o)}i&&t.pop()},Cg=function(t){return t instanceof io||t instanceof rc||t instanceof ao&&t.hasClass("enclosing")?t:null},u_=function e(t,n){var r=Cg(t);if(r){var i=r.children;if(i.length){if(n==="right")return e(i[i.length-1],"right");if(n==="left")return e(i[0],"left")}}return t},z0=function(t,n){return t?(n&&(t=u_(t,n)),s_[t.classes[0]]||null):null},Ka=function(t,n){var r=["nulldelimiter"].concat(t.baseSizingClasses());return Hn(n.concat(r))},ye=function(t,n,r){if(!t)return Hn();if(Nl[t.type]){var i=Nl[t.type](t,n);if(r&&n.size!==r.size){i=Hn(n.sizingClasses(r),[i],n);var a=n.sizeMultiplier/r.sizeMultiplier;i.height*=a,i.depth*=a}return i}else throw new H("Got group of unknown type: '"+t.type+"'")};function No(e,t){var n=Hn(["base"],e,t),r=Hn(["strut"]);return r.style.height=K(n.height+n.depth),n.depth&&(r.style.verticalAlign=K(-n.depth)),n.children.unshift(r),n}function P0(e,t){var n=null;e.length===1&&e[0].type==="tag"&&(n=e[0].tag,e=e[0].body);var r=Qe(e,t,"root"),i;r.length===2&&r[1].hasClass("tag")&&(i=r.pop());for(var a=[],o=[],l=0;l<r.length;l++)if(o.push(r[l]),r[l].hasClass("mbin")||r[l].hasClass("mrel")||r[l].hasClass("allowbreak")){for(var s=!1;l<r.length-1&&r[l+1].hasClass("mspace")&&!r[l+1].hasClass("newline");)l++,o.push(r[l]),r[l].hasClass("nobreak")&&(s=!0);s||(a.push(No(o,t)),o=[])}else r[l].hasClass("newline")&&(o.pop(),o.length>0&&(a.push(No(o,t)),o=[]),a.push(r[l]));o.length>0&&a.push(No(o,t));var u;n?(u=No(Qe(n,t,!0)),u.classes=["tag"],a.push(u)):i&&a.push(i);var h=Hn(["katex-html"],a);if(h.setAttribute("aria-hidden","true"),u){var m=u.children[0];m.style.height=K(h.height+h.depth),h.depth&&(m.style.verticalAlign=K(-h.depth))}return h}function Dg(e){return new io(e)}class Lt{constructor(t,n,r){this.type=void 0,this.attributes=void 0,this.children=void 0,this.classes=void 0,this.type=t,this.attributes={},this.children=n||[],this.classes=r||[]}setAttribute(t,n){this.attributes[t]=n}getAttribute(t){return this.attributes[t]}toNode(){var t=document.createElementNS("http://www.w3.org/1998/Math/MathML",this.type);for(var n in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,n)&&t.setAttribute(n,this.attributes[n]);this.classes.length>0&&(t.className=yr(this.classes));for(var r=0;r<this.children.length;r++)t.appendChild(this.children[r].toNode());return t}toMarkup(){var t="<"+this.type;for(var n in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,n)&&(t+=" "+n+'="',t+=te.escape(this.attributes[n]),t+='"');this.classes.length>0&&(t+=' class ="'+te.escape(yr(this.classes))+'"'),t+=">";for(var r=0;r<this.children.length;r++)t+=this.children[r].toMarkup();return t+="</"+this.type+">",t}toText(){return this.children.map(t=>t.toText()).join("")}}class ka{constructor(t){this.text=void 0,this.text=t}toNode(){return document.createTextNode(this.text)}toMarkup(){return te.escape(this.toText())}toText(){return this.text}}class h_{constructor(t){this.width=void 0,this.character=void 0,this.width=t,t>=.05555&&t<=.05556?this.character=" ":t>=.1666&&t<=.1667?this.character=" ":t>=.2222&&t<=.2223?this.character=" ":t>=.2777&&t<=.2778?this.character="  ":t>=-.05556&&t<=-.05555?this.character=" ⁣":t>=-.1667&&t<=-.1666?this.character=" ⁣":t>=-.2223&&t<=-.2222?this.character=" ⁣":t>=-.2778&&t<=-.2777?this.character=" ⁣":this.character=null}toNode(){if(this.character)return document.createTextNode(this.character);var t=document.createElementNS("http://www.w3.org/1998/Math/MathML","mspace");return t.setAttribute("width",K(this.width)),t}toMarkup(){return this.character?"<mtext>"+this.character+"</mtext>":'<mspace width="'+K(this.width)+'"/>'}toText(){return this.character?this.character:" "}}var O={MathNode:Lt,TextNode:ka,SpaceNode:h_,newDocumentFragment:Dg},Vt=function(t,n,r){return De[n][t]&&De[n][t].replace&&t.charCodeAt(0)!==55349&&!(xg.hasOwnProperty(t)&&r&&(r.fontFamily&&r.fontFamily.slice(4,6)==="tt"||r.font&&r.font.slice(4,6)==="tt"))&&(t=De[n][t].replace),new O.TextNode(t)},ac=function(t){return t.length===1?t[0]:new O.MathNode("mrow",t)},oc=function(t,n){if(n.fontFamily==="texttt")return"monospace";if(n.fontFamily==="textsf")return n.fontShape==="textit"&&n.fontWeight==="textbf"?"sans-serif-bold-italic":n.fontShape==="textit"?"sans-serif-italic":n.fontWeight==="textbf"?"bold-sans-serif":"sans-serif";if(n.fontShape==="textit"&&n.fontWeight==="textbf")return"bold-italic";if(n.fontShape==="textit")return"italic";if(n.fontWeight==="textbf")return"bold";var r=n.font;if(!r||r==="mathnormal")return null;var i=t.mode;if(r==="mathit")return"italic";if(r==="boldsymbol")return t.type==="textord"?"bold":"bold-italic";if(r==="mathbf")return"bold";if(r==="mathbb")return"double-struck";if(r==="mathsfit")return"sans-serif-italic";if(r==="mathfrak")return"fraktur";if(r==="mathscr"||r==="mathcal")return"script";if(r==="mathsf")return"sans-serif";if(r==="mathtt")return"monospace";var a=t.text;if(te.contains(["\\imath","\\jmath"],a))return null;De[i][a]&&De[i][a].replace&&(a=De[i][a].replace);var o=T.fontMap[r].fontName;return nc(a,o,i)?T.fontMap[r].variant:null},St=function(t,n,r){if(t.length===1){var i=Se(t[0],n);return r&&i instanceof Lt&&i.type==="mo"&&(i.setAttribute("lspace","0em"),i.setAttribute("rspace","0em")),[i]}for(var a=[],o,l=0;l<t.length;l++){var s=Se(t[l],n);if(s instanceof Lt&&o instanceof Lt){if(s.type==="mtext"&&o.type==="mtext"&&s.getAttribute("mathvariant")===o.getAttribute("mathvariant")){o.children.push(...s.children);continue}else if(s.type==="mn"&&o.type==="mn"){o.children.push(...s.children);continue}else if(s.type==="mi"&&s.children.length===1&&o.type==="mn"){var u=s.children[0];if(u instanceof ka&&u.text==="."){o.children.push(...s.children);continue}}else if(o.type==="mi"&&o.children.length===1){var h=o.children[0];if(h instanceof ka&&h.text==="̸"&&(s.type==="mo"||s.type==="mi"||s.type==="mn")){var m=s.children[0];m instanceof ka&&m.text.length>0&&(m.text=m.text.slice(0,1)+"̸"+m.text.slice(1),a.pop())}}}a.push(s),o=s}return a},$r=function(t,n,r){return ac(St(t,n,r))},Se=function(t,n){if(!t)return new O.MathNode("mrow");if(Ml[t.type]){var r=Ml[t.type](t,n);return r}else throw new H("Got group of unknown type: '"+t.type+"'")};function Vd(e,t,n,r,i){var a=St(e,n),o;a.length===1&&a[0]instanceof Lt&&te.contains(["mrow","mtable"],a[0].type)?o=a[0]:o=new O.MathNode("mrow",a);var l=new O.MathNode("annotation",[new O.TextNode(t)]);l.setAttribute("encoding","application/x-tex");var s=new O.MathNode("semantics",[o,l]),u=new O.MathNode("math",[s]);u.setAttribute("xmlns","http://www.w3.org/1998/Math/MathML"),r&&u.setAttribute("display","block");var h=i?"katex":"katex-mathml";return T.makeSpan([h],[u])}var zg=function(t){return new An({style:t.displayMode?ie.DISPLAY:ie.TEXT,maxSize:t.maxSize,minRuleThickness:t.minRuleThickness})},Pg=function(t,n){if(n.displayMode){var r=["katex-display"];n.leqno&&r.push("leqno"),n.fleqn&&r.push("fleqn"),t=T.makeSpan(r,[t])}return t},c_=function(t,n,r){var i=zg(r),a;if(r.output==="mathml")return Vd(t,n,i,r.displayMode,!0);if(r.output==="html"){var o=P0(t,i);a=T.makeSpan(["katex"],[o])}else{var l=Vd(t,n,i,r.displayMode,!1),s=P0(t,i);a=T.makeSpan(["katex"],[l,s])}return Pg(a,r)},m_=function(t,n,r){var i=zg(r),a=P0(t,i),o=T.makeSpan(["katex"],[a]);return Pg(o,r)},d_={widehat:"^",widecheck:"ˇ",widetilde:"~",utilde:"~",overleftarrow:"←",underleftarrow:"←",xleftarrow:"←",overrightarrow:"→",underrightarrow:"→",xrightarrow:"→",underbrace:"⏟",overbrace:"⏞",overgroup:"⏠",undergroup:"⏡",overleftrightarrow:"↔",underleftrightarrow:"↔",xleftrightarrow:"↔",Overrightarrow:"⇒",xRightarrow:"⇒",overleftharpoon:"↼",xleftharpoonup:"↼",overrightharpoon:"⇀",xrightharpoonup:"⇀",xLeftarrow:"⇐",xLeftrightarrow:"⇔",xhookleftarrow:"↩",xhookrightarrow:"↪",xmapsto:"↦",xrightharpoondown:"⇁",xleftharpoondown:"↽",xrightleftharpoons:"⇌",xleftrightharpoons:"⇋",xtwoheadleftarrow:"↞",xtwoheadrightarrow:"↠",xlongequal:"=",xtofrom:"⇄",xrightleftarrows:"⇄",xrightequilibrium:"⇌",xleftequilibrium:"⇋","\\cdrightarrow":"→","\\cdleftarrow":"←","\\cdlongequal":"="},f_=function(t){var n=new O.MathNode("mo",[new O.TextNode(d_[t.replace(/^\\/,"")])]);return n.setAttribute("stretchy","true"),n},p_={overrightarrow:[["rightarrow"],.888,522,"xMaxYMin"],overleftarrow:[["leftarrow"],.888,522,"xMinYMin"],underrightarrow:[["rightarrow"],.888,522,"xMaxYMin"],underleftarrow:[["leftarrow"],.888,522,"xMinYMin"],xrightarrow:[["rightarrow"],1.469,522,"xMaxYMin"],"\\cdrightarrow":[["rightarrow"],3,522,"xMaxYMin"],xleftarrow:[["leftarrow"],1.469,522,"xMinYMin"],"\\cdleftarrow":[["leftarrow"],3,522,"xMinYMin"],Overrightarrow:[["doublerightarrow"],.888,560,"xMaxYMin"],xRightarrow:[["doublerightarrow"],1.526,560,"xMaxYMin"],xLeftarrow:[["doubleleftarrow"],1.526,560,"xMinYMin"],overleftharpoon:[["leftharpoon"],.888,522,"xMinYMin"],xleftharpoonup:[["leftharpoon"],.888,522,"xMinYMin"],xleftharpoondown:[["leftharpoondown"],.888,522,"xMinYMin"],overrightharpoon:[["rightharpoon"],.888,522,"xMaxYMin"],xrightharpoonup:[["rightharpoon"],.888,522,"xMaxYMin"],xrightharpoondown:[["rightharpoondown"],.888,522,"xMaxYMin"],xlongequal:[["longequal"],.888,334,"xMinYMin"],"\\cdlongequal":[["longequal"],3,334,"xMinYMin"],xtwoheadleftarrow:[["twoheadleftarrow"],.888,334,"xMinYMin"],xtwoheadrightarrow:[["twoheadrightarrow"],.888,334,"xMaxYMin"],overleftrightarrow:[["leftarrow","rightarrow"],.888,522],overbrace:[["leftbrace","midbrace","rightbrace"],1.6,548],underbrace:[["leftbraceunder","midbraceunder","rightbraceunder"],1.6,548],underleftrightarrow:[["leftarrow","rightarrow"],.888,522],xleftrightarrow:[["leftarrow","rightarrow"],1.75,522],xLeftrightarrow:[["doubleleftarrow","doublerightarrow"],1.75,560],xrightleftharpoons:[["leftharpoondownplus","rightharpoonplus"],1.75,716],xleftrightharpoons:[["leftharpoonplus","rightharpoondownplus"],1.75,716],xhookleftarrow:[["leftarrow","righthook"],1.08,522],xhookrightarrow:[["lefthook","rightarrow"],1.08,522],overlinesegment:[["leftlinesegment","rightlinesegment"],.888,522],underlinesegment:[["leftlinesegment","rightlinesegment"],.888,522],overgroup:[["leftgroup","rightgroup"],.888,342],undergroup:[["leftgroupunder","rightgroupunder"],.888,342],xmapsto:[["leftmapsto","rightarrow"],1.5,522],xtofrom:[["leftToFrom","rightToFrom"],1.75,528],xrightleftarrows:[["baraboveleftarrow","rightarrowabovebar"],1.75,901],xrightequilibrium:[["baraboveshortleftharpoon","rightharpoonaboveshortbar"],1.75,716],xleftequilibrium:[["shortbaraboveleftharpoon","shortrightharpoonabovebar"],1.75,716]},b_=function(t){return t.type==="ordgroup"?t.body.length:1},g_=function(t,n){function r(){var l=4e5,s=t.label.slice(1);if(te.contains(["widehat","widecheck","widetilde","utilde"],s)){var u=t,h=b_(u.base),m,p,f;if(h>5)s==="widehat"||s==="widecheck"?(m=420,l=2364,f=.42,p=s+"4"):(m=312,l=2340,f=.34,p="tilde4");else{var v=[1,1,2,2,3,3][h];s==="widehat"||s==="widecheck"?(l=[0,1062,2364,2364,2364][v],m=[0,239,300,360,420][v],f=[0,.24,.3,.3,.36,.42][v],p=s+v):(l=[0,600,1033,2339,2340][v],m=[0,260,286,306,312][v],f=[0,.26,.286,.3,.306,.34][v],p="tilde"+v)}var $=new vr(p),k=new jn([$],{width:"100%",height:K(f),viewBox:"0 0 "+l+" "+m,preserveAspectRatio:"none"});return{span:T.makeSvgSpan([],[k],n),minWidth:0,height:f}}else{var g=[],y=p_[s],[w,P,F]=y,D=F/1e3,M=w.length,q,I;if(M===1){var V=y[3];q=["hide-tail"],I=[V]}else if(M===2)q=["halfarrow-left","halfarrow-right"],I=["xMinYMin","xMaxYMin"];else if(M===3)q=["brace-left","brace-center","brace-right"],I=["xMinYMin","xMidYMin","xMaxYMin"];else throw new Error(`Correct katexImagesData or update code here to support
                    `+M+" children.");for(var X=0;X<M;X++){var L=new vr(w[X]),he=new jn([L],{width:"400em",height:K(D),viewBox:"0 0 "+l+" "+F,preserveAspectRatio:I[X]+" slice"}),le=T.makeSvgSpan([q[X]],[he],n);if(M===1)return{span:le,minWidth:P,height:D};le.style.height=K(D),g.push(le)}return{span:T.makeSpan(["stretchy"],g,n),minWidth:P,height:D}}}var{span:i,minWidth:a,height:o}=r();return i.height=o,i.style.height=K(o),a>0&&(i.style.minWidth=K(a)),i},y_=function(t,n,r,i,a){var o,l=t.height+t.depth+r+i;if(/fbox|color|angl/.test(n)){if(o=T.makeSpan(["stretchy",n],[],a),n==="fbox"){var s=a.color&&a.getColor();s&&(o.style.borderColor=s)}}else{var u=[];/^[bx]cancel$/.test(n)&&u.push(new C0({x1:"0",y1:"0",x2:"100%",y2:"100%","stroke-width":"0.046em"})),/^x?cancel$/.test(n)&&u.push(new C0({x1:"0",y1:"100%",x2:"100%",y2:"0","stroke-width":"0.046em"}));var h=new jn(u,{width:"100%",height:K(l)});o=T.makeSvgSpan([],[h],a)}return o.height=l,o.style.height=K(l),o},Wn={encloseSpan:y_,mathMLnode:f_,svgSpan:g_};function de(e,t){if(!e||e.type!==t)throw new Error("Expected node of type "+t+", but got "+(e?"node of type "+e.type:String(e)));return e}function lc(e){var t=hs(e);if(!t)throw new Error("Expected node of symbol group type, but got "+(e?"node of type "+e.type:String(e)));return t}function hs(e){return e&&(e.type==="atom"||Hw.hasOwnProperty(e.type))?e:null}var sc=(e,t)=>{var n,r,i;e&&e.type==="supsub"?(r=de(e.base,"accent"),n=r.base,e.base=n,i=Ow(ye(e,t)),e.base=r):(r=de(e,"accent"),n=r.base);var a=ye(n,t.havingCrampedStyle()),o=r.isShifty&&te.isCharacterBox(n),l=0;if(o){var s=te.getBaseElem(n),u=ye(s,t.havingCrampedStyle());l=Od(u).skew}var h=r.label==="\\c",m=h?a.height+a.depth:Math.min(a.height,t.fontMetrics().xHeight),p;if(r.isStretchy)p=Wn.svgSpan(r,t),p=T.makeVList({positionType:"firstBaseline",children:[{type:"elem",elem:a},{type:"elem",elem:p,wrapperClasses:["svg-align"],wrapperStyle:l>0?{width:"calc(100% - "+K(2*l)+")",marginLeft:K(2*l)}:void 0}]},t);else{var f,v;r.label==="\\vec"?(f=T.staticSvg("vec",t),v=T.svgData.vec[1]):(f=T.makeOrd({mode:r.mode,text:r.label},t,"textord"),f=Od(f),f.italic=0,v=f.width,h&&(m+=f.depth)),p=T.makeSpan(["accent-body"],[f]);var $=r.label==="\\textcircled";$&&(p.classes.push("accent-full"),m=a.height);var k=l;$||(k-=v/2),p.style.left=K(k),r.label==="\\textcircled"&&(p.style.top=".2em"),p=T.makeVList({positionType:"firstBaseline",children:[{type:"elem",elem:a},{type:"kern",size:-m},{type:"elem",elem:p}]},t)}var g=T.makeSpan(["mord","accent"],[p],t);return i?(i.children[0]=g,i.height=Math.max(g.height,i.height),i.classes[0]="mord",i):g},Ag=(e,t)=>{var n=e.isStretchy?Wn.mathMLnode(e.label):new O.MathNode("mo",[Vt(e.label,e.mode)]),r=new O.MathNode("mover",[Se(e.base,t),n]);return r.setAttribute("accent","true"),r},v_=new RegExp(["\\acute","\\grave","\\ddot","\\tilde","\\bar","\\breve","\\check","\\hat","\\vec","\\dot","\\mathring"].map(e=>"\\"+e).join("|"));Q({type:"accent",names:["\\acute","\\grave","\\ddot","\\tilde","\\bar","\\breve","\\check","\\hat","\\vec","\\dot","\\mathring","\\widecheck","\\widehat","\\widetilde","\\overrightarrow","\\overleftarrow","\\Overrightarrow","\\overleftrightarrow","\\overgroup","\\overlinesegment","\\overleftharpoon","\\overrightharpoon"],props:{numArgs:1},handler:(e,t)=>{var n=Rl(t[0]),r=!v_.test(e.funcName),i=!r||e.funcName==="\\widehat"||e.funcName==="\\widetilde"||e.funcName==="\\widecheck";return{type:"accent",mode:e.parser.mode,label:e.funcName,isStretchy:r,isShifty:i,base:n}},htmlBuilder:sc,mathmlBuilder:Ag});Q({type:"accent",names:["\\'","\\`","\\^","\\~","\\=","\\u","\\.",'\\"',"\\c","\\r","\\H","\\v","\\textcircled"],props:{numArgs:1,allowedInText:!0,allowedInMath:!0,argTypes:["primitive"]},handler:(e,t)=>{var n=t[0],r=e.parser.mode;return r==="math"&&(e.parser.settings.reportNonstrict("mathVsTextAccents","LaTeX's accent "+e.funcName+" works only in text mode"),r="text"),{type:"accent",mode:r,label:e.funcName,isStretchy:!1,isShifty:!0,base:n}},htmlBuilder:sc,mathmlBuilder:Ag});Q({type:"accentUnder",names:["\\underleftarrow","\\underrightarrow","\\underleftrightarrow","\\undergroup","\\underlinesegment","\\utilde"],props:{numArgs:1},handler:(e,t)=>{var{parser:n,funcName:r}=e,i=t[0];return{type:"accentUnder",mode:n.mode,label:r,base:i}},htmlBuilder:(e,t)=>{var n=ye(e.base,t),r=Wn.svgSpan(e,t),i=e.label==="\\utilde"?.12:0,a=T.makeVList({positionType:"top",positionData:n.height,children:[{type:"elem",elem:r,wrapperClasses:["svg-align"]},{type:"kern",size:i},{type:"elem",elem:n}]},t);return T.makeSpan(["mord","accentunder"],[a],t)},mathmlBuilder:(e,t)=>{var n=Wn.mathMLnode(e.label),r=new O.MathNode("munder",[Se(e.base,t),n]);return r.setAttribute("accentunder","true"),r}});var Mo=e=>{var t=new O.MathNode("mpadded",e?[e]:[]);return t.setAttribute("width","+0.6em"),t.setAttribute("lspace","0.3em"),t};Q({type:"xArrow",names:["\\xleftarrow","\\xrightarrow","\\xLeftarrow","\\xRightarrow","\\xleftrightarrow","\\xLeftrightarrow","\\xhookleftarrow","\\xhookrightarrow","\\xmapsto","\\xrightharpoondown","\\xrightharpoonup","\\xleftharpoondown","\\xleftharpoonup","\\xrightleftharpoons","\\xleftrightharpoons","\\xlongequal","\\xtwoheadrightarrow","\\xtwoheadleftarrow","\\xtofrom","\\xrightleftarrows","\\xrightequilibrium","\\xleftequilibrium","\\\\cdrightarrow","\\\\cdleftarrow","\\\\cdlongequal"],props:{numArgs:1,numOptionalArgs:1},handler(e,t,n){var{parser:r,funcName:i}=e;return{type:"xArrow",mode:r.mode,label:i,body:t[0],below:n[0]}},htmlBuilder(e,t){var n=t.style,r=t.havingStyle(n.sup()),i=T.wrapFragment(ye(e.body,r,t),t),a=e.label.slice(0,2)==="\\x"?"x":"cd";i.classes.push(a+"-arrow-pad");var o;e.below&&(r=t.havingStyle(n.sub()),o=T.wrapFragment(ye(e.below,r,t),t),o.classes.push(a+"-arrow-pad"));var l=Wn.svgSpan(e,t),s=-t.fontMetrics().axisHeight+.5*l.height,u=-t.fontMetrics().axisHeight-.5*l.height-.111;(i.depth>.25||e.label==="\\xleftequilibrium")&&(u-=i.depth);var h;if(o){var m=-t.fontMetrics().axisHeight+o.height+.5*l.height+.111;h=T.makeVList({positionType:"individualShift",children:[{type:"elem",elem:i,shift:u},{type:"elem",elem:l,shift:s},{type:"elem",elem:o,shift:m}]},t)}else h=T.makeVList({positionType:"individualShift",children:[{type:"elem",elem:i,shift:u},{type:"elem",elem:l,shift:s}]},t);return h.children[0].children[0].children[1].classes.push("svg-align"),T.makeSpan(["mrel","x-arrow"],[h],t)},mathmlBuilder(e,t){var n=Wn.mathMLnode(e.label);n.setAttribute("minsize",e.label.charAt(0)==="x"?"1.75em":"3.0em");var r;if(e.body){var i=Mo(Se(e.body,t));if(e.below){var a=Mo(Se(e.below,t));r=new O.MathNode("munderover",[n,a,i])}else r=new O.MathNode("mover",[n,i])}else if(e.below){var o=Mo(Se(e.below,t));r=new O.MathNode("munder",[n,o])}else r=Mo(),r=new O.MathNode("mover",[n,r]);return r}});var $_=T.makeSpan;function Tg(e,t){var n=Qe(e.body,t,!0);return $_([e.mclass],n,t)}function Fg(e,t){var n,r=St(e.body,t);return e.mclass==="minner"?n=new O.MathNode("mpadded",r):e.mclass==="mord"?e.isCharacterBox?(n=r[0],n.type="mi"):n=new O.MathNode("mi",r):(e.isCharacterBox?(n=r[0],n.type="mo"):n=new O.MathNode("mo",r),e.mclass==="mbin"?(n.attributes.lspace="0.22em",n.attributes.rspace="0.22em"):e.mclass==="mpunct"?(n.attributes.lspace="0em",n.attributes.rspace="0.17em"):e.mclass==="mopen"||e.mclass==="mclose"?(n.attributes.lspace="0em",n.attributes.rspace="0em"):e.mclass==="minner"&&(n.attributes.lspace="0.0556em",n.attributes.width="+0.1111em")),n}Q({type:"mclass",names:["\\mathord","\\mathbin","\\mathrel","\\mathopen","\\mathclose","\\mathpunct","\\mathinner"],props:{numArgs:1,primitive:!0},handler(e,t){var{parser:n,funcName:r}=e,i=t[0];return{type:"mclass",mode:n.mode,mclass:"m"+r.slice(5),body:We(i),isCharacterBox:te.isCharacterBox(i)}},htmlBuilder:Tg,mathmlBuilder:Fg});var cs=e=>{var t=e.type==="ordgroup"&&e.body.length?e.body[0]:e;return t.type==="atom"&&(t.family==="bin"||t.family==="rel")?"m"+t.family:"mord"};Q({type:"mclass",names:["\\@binrel"],props:{numArgs:2},handler(e,t){var{parser:n}=e;return{type:"mclass",mode:n.mode,mclass:cs(t[0]),body:We(t[1]),isCharacterBox:te.isCharacterBox(t[1])}}});Q({type:"mclass",names:["\\stackrel","\\overset","\\underset"],props:{numArgs:2},handler(e,t){var{parser:n,funcName:r}=e,i=t[1],a=t[0],o;r!=="\\stackrel"?o=cs(i):o="mrel";var l={type:"op",mode:i.mode,limits:!0,alwaysHandleSupSub:!0,parentIsSupSub:!1,symbol:!1,suppressBaseShift:r!=="\\stackrel",body:We(i)},s={type:"supsub",mode:a.mode,base:l,sup:r==="\\underset"?null:a,sub:r==="\\underset"?a:null};return{type:"mclass",mode:n.mode,mclass:o,body:[s],isCharacterBox:te.isCharacterBox(s)}},htmlBuilder:Tg,mathmlBuilder:Fg});Q({type:"pmb",names:["\\pmb"],props:{numArgs:1,allowedInText:!0},handler(e,t){var{parser:n}=e;return{type:"pmb",mode:n.mode,mclass:cs(t[0]),body:We(t[0])}},htmlBuilder(e,t){var n=Qe(e.body,t,!0),r=T.makeSpan([e.mclass],n,t);return r.style.textShadow="0.02em 0.01em 0.04px",r},mathmlBuilder(e,t){var n=St(e.body,t),r=new O.MathNode("mstyle",n);return r.setAttribute("style","text-shadow: 0.02em 0.01em 0.04px"),r}});var x_={">":"\\\\cdrightarrow","<":"\\\\cdleftarrow","=":"\\\\cdlongequal",A:"\\uparrow",V:"\\downarrow","|":"\\Vert",".":"no arrow"},Gd=()=>({type:"styling",body:[],mode:"math",style:"display"}),Qd=e=>e.type==="textord"&&e.text==="@",w_=(e,t)=>(e.type==="mathord"||e.type==="atom")&&e.text===t;function __(e,t,n){var r=x_[e];switch(r){case"\\\\cdrightarrow":case"\\\\cdleftarrow":return n.callFunction(r,[t[0]],[t[1]]);case"\\uparrow":case"\\downarrow":{var i=n.callFunction("\\\\cdleft",[t[0]],[]),a={type:"atom",text:r,mode:"math",family:"rel"},o=n.callFunction("\\Big",[a],[]),l=n.callFunction("\\\\cdright",[t[1]],[]),s={type:"ordgroup",mode:"math",body:[i,o,l]};return n.callFunction("\\\\cdparent",[s],[])}case"\\\\cdlongequal":return n.callFunction("\\\\cdlongequal",[],[]);case"\\Vert":{var u={type:"textord",text:"\\Vert",mode:"math"};return n.callFunction("\\Big",[u],[])}default:return{type:"textord",text:" ",mode:"math"}}}function k_(e){var t=[];for(e.gullet.beginGroup(),e.gullet.macros.set("\\cr","\\\\\\relax"),e.gullet.beginGroup();;){t.push(e.parseExpression(!1,"\\\\")),e.gullet.endGroup(),e.gullet.beginGroup();var n=e.fetch().text;if(n==="&"||n==="\\\\")e.consume();else if(n==="\\end"){t[t.length-1].length===0&&t.pop();break}else throw new H("Expected \\\\ or \\cr or \\end",e.nextToken)}for(var r=[],i=[r],a=0;a<t.length;a++){for(var o=t[a],l=Gd(),s=0;s<o.length;s++)if(!Qd(o[s]))l.body.push(o[s]);else{r.push(l),s+=1;var u=lc(o[s]).text,h=new Array(2);if(h[0]={type:"ordgroup",mode:"math",body:[]},h[1]={type:"ordgroup",mode:"math",body:[]},!("=|.".indexOf(u)>-1))if("<>AV".indexOf(u)>-1)for(var m=0;m<2;m++){for(var p=!0,f=s+1;f<o.length;f++){if(w_(o[f],u)){p=!1,s=f;break}if(Qd(o[f]))throw new H("Missing a "+u+" character to complete a CD arrow.",o[f]);h[m].body.push(o[f])}if(p)throw new H("Missing a "+u+" character to complete a CD arrow.",o[s])}else throw new H('Expected one of "<>AV=|." after @',o[s]);var v=__(u,h,e),$={type:"styling",body:[v],mode:"math",style:"display"};r.push($),l=Gd()}a%2===0?r.push(l):r.shift(),r=[],i.push(r)}e.gullet.endGroup(),e.gullet.endGroup();var k=new Array(i[0].length).fill({type:"align",align:"c",pregap:.25,postgap:.25});return{type:"array",mode:"math",body:i,arraystretch:1,addJot:!0,rowGaps:[null],cols:k,colSeparationType:"CD",hLinesBeforeRow:new Array(i.length+1).fill([])}}Q({type:"cdlabel",names:["\\\\cdleft","\\\\cdright"],props:{numArgs:1},handler(e,t){var{parser:n,funcName:r}=e;return{type:"cdlabel",mode:n.mode,side:r.slice(4),label:t[0]}},htmlBuilder(e,t){var n=t.havingStyle(t.style.sup()),r=T.wrapFragment(ye(e.label,n,t),t);return r.classes.push("cd-label-"+e.side),r.style.bottom=K(.8-r.depth),r.height=0,r.depth=0,r},mathmlBuilder(e,t){var n=new O.MathNode("mrow",[Se(e.label,t)]);return n=new O.MathNode("mpadded",[n]),n.setAttribute("width","0"),e.side==="left"&&n.setAttribute("lspace","-1width"),n.setAttribute("voffset","0.7em"),n=new O.MathNode("mstyle",[n]),n.setAttribute("displaystyle","false"),n.setAttribute("scriptlevel","1"),n}});Q({type:"cdlabelparent",names:["\\\\cdparent"],props:{numArgs:1},handler(e,t){var{parser:n}=e;return{type:"cdlabelparent",mode:n.mode,fragment:t[0]}},htmlBuilder(e,t){var n=T.wrapFragment(ye(e.fragment,t),t);return n.classes.push("cd-vert-arrow"),n},mathmlBuilder(e,t){return new O.MathNode("mrow",[Se(e.fragment,t)])}});Q({type:"textord",names:["\\@char"],props:{numArgs:1,allowedInText:!0},handler(e,t){for(var{parser:n}=e,r=de(t[0],"ordgroup"),i=r.body,a="",o=0;o<i.length;o++){var l=de(i[o],"textord");a+=l.text}var s=parseInt(a),u;if(isNaN(s))throw new H("\\@char has non-numeric argument "+a);if(s<0||s>=1114111)throw new H("\\@char with invalid code point "+a);return s<=65535?u=String.fromCharCode(s):(s-=65536,u=String.fromCharCode((s>>10)+55296,(s&1023)+56320)),{type:"textord",mode:n.mode,text:u}}});var Ng=(e,t)=>{var n=Qe(e.body,t.withColor(e.color),!1);return T.makeFragment(n)},Mg=(e,t)=>{var n=St(e.body,t.withColor(e.color)),r=new O.MathNode("mstyle",n);return r.setAttribute("mathcolor",e.color),r};Q({type:"color",names:["\\textcolor"],props:{numArgs:2,allowedInText:!0,argTypes:["color","original"]},handler(e,t){var{parser:n}=e,r=de(t[0],"color-token").color,i=t[1];return{type:"color",mode:n.mode,color:r,body:We(i)}},htmlBuilder:Ng,mathmlBuilder:Mg});Q({type:"color",names:["\\color"],props:{numArgs:1,allowedInText:!0,argTypes:["color"]},handler(e,t){var{parser:n,breakOnTokenText:r}=e,i=de(t[0],"color-token").color;n.gullet.macros.set("\\current@color",i);var a=n.parseExpression(!0,r);return{type:"color",mode:n.mode,color:i,body:a}},htmlBuilder:Ng,mathmlBuilder:Mg});Q({type:"cr",names:["\\\\"],props:{numArgs:0,numOptionalArgs:0,allowedInText:!0},handler(e,t,n){var{parser:r}=e,i=r.gullet.future().text==="["?r.parseSizeGroup(!0):null,a=!r.settings.displayMode||!r.settings.useStrictBehavior("newLineInDisplayMode","In LaTeX, \\\\ or \\newline does nothing in display mode");return{type:"cr",mode:r.mode,newLine:a,size:i&&de(i,"size").value}},htmlBuilder(e,t){var n=T.makeSpan(["mspace"],[],t);return e.newLine&&(n.classes.push("newline"),e.size&&(n.style.marginTop=K(qe(e.size,t)))),n},mathmlBuilder(e,t){var n=new O.MathNode("mspace");return e.newLine&&(n.setAttribute("linebreak","newline"),e.size&&n.setAttribute("height",K(qe(e.size,t)))),n}});var A0={"\\global":"\\global","\\long":"\\\\globallong","\\\\globallong":"\\\\globallong","\\def":"\\gdef","\\gdef":"\\gdef","\\edef":"\\xdef","\\xdef":"\\xdef","\\let":"\\\\globallet","\\futurelet":"\\\\globalfuture"},Rg=e=>{var t=e.text;if(/^(?:[\\{}$&#^_]|EOF)$/.test(t))throw new H("Expected a control sequence",e);return t},S_=e=>{var t=e.gullet.popToken();return t.text==="="&&(t=e.gullet.popToken(),t.text===" "&&(t=e.gullet.popToken())),t},qg=(e,t,n,r)=>{var i=e.gullet.macros.get(n.text);i==null&&(n.noexpand=!0,i={tokens:[n],numArgs:0,unexpandable:!e.gullet.isExpandable(n.text)}),e.gullet.macros.set(t,i,r)};Q({type:"internal",names:["\\global","\\long","\\\\globallong"],props:{numArgs:0,allowedInText:!0},handler(e){var{parser:t,funcName:n}=e;t.consumeSpaces();var r=t.fetch();if(A0[r.text])return(n==="\\global"||n==="\\\\globallong")&&(r.text=A0[r.text]),de(t.parseFunction(),"internal");throw new H("Invalid token after macro prefix",r)}});Q({type:"internal",names:["\\def","\\gdef","\\edef","\\xdef"],props:{numArgs:0,allowedInText:!0,primitive:!0},handler(e){var{parser:t,funcName:n}=e,r=t.gullet.popToken(),i=r.text;if(/^(?:[\\{}$&#^_]|EOF)$/.test(i))throw new H("Expected a control sequence",r);for(var a=0,o,l=[[]];t.gullet.future().text!=="{";)if(r=t.gullet.popToken(),r.text==="#"){if(t.gullet.future().text==="{"){o=t.gullet.future(),l[a].push("{");break}if(r=t.gullet.popToken(),!/^[1-9]$/.test(r.text))throw new H('Invalid argument number "'+r.text+'"');if(parseInt(r.text)!==a+1)throw new H('Argument number "'+r.text+'" out of order');a++,l.push([])}else{if(r.text==="EOF")throw new H("Expected a macro definition");l[a].push(r.text)}var{tokens:s}=t.gullet.consumeArg();return o&&s.unshift(o),(n==="\\edef"||n==="\\xdef")&&(s=t.gullet.expandTokens(s),s.reverse()),t.gullet.macros.set(i,{tokens:s,numArgs:a,delimiters:l},n===A0[n]),{type:"internal",mode:t.mode}}});Q({type:"internal",names:["\\let","\\\\globallet"],props:{numArgs:0,allowedInText:!0,primitive:!0},handler(e){var{parser:t,funcName:n}=e,r=Rg(t.gullet.popToken());t.gullet.consumeSpaces();var i=S_(t);return qg(t,r,i,n==="\\\\globallet"),{type:"internal",mode:t.mode}}});Q({type:"internal",names:["\\futurelet","\\\\globalfuture"],props:{numArgs:0,allowedInText:!0,primitive:!0},handler(e){var{parser:t,funcName:n}=e,r=Rg(t.gullet.popToken()),i=t.gullet.popToken(),a=t.gullet.popToken();return qg(t,r,a,n==="\\\\globalfuture"),t.gullet.pushToken(a),t.gullet.pushToken(i),{type:"internal",mode:t.mode}}});var ma=function(t,n,r){var i=De.math[t]&&De.math[t].replace,a=nc(i||t,n,r);if(!a)throw new Error("Unsupported symbol "+t+" and font size "+n+".");return a},uc=function(t,n,r,i){var a=r.havingBaseStyle(n),o=T.makeSpan(i.concat(a.sizingClasses(r)),[t],r),l=a.sizeMultiplier/r.sizeMultiplier;return o.height*=l,o.depth*=l,o.maxFontSize=a.sizeMultiplier,o},Ig=function(t,n,r){var i=n.havingBaseStyle(r),a=(1-n.sizeMultiplier/i.sizeMultiplier)*n.fontMetrics().axisHeight;t.classes.push("delimcenter"),t.style.top=K(a),t.height-=a,t.depth+=a},E_=function(t,n,r,i,a,o){var l=T.makeSymbol(t,"Main-Regular",a,i),s=uc(l,n,i,o);return r&&Ig(s,i,n),s},C_=function(t,n,r,i){return T.makeSymbol(t,"Size"+n+"-Regular",r,i)},Bg=function(t,n,r,i,a,o){var l=C_(t,n,a,i),s=uc(T.makeSpan(["delimsizing","size"+n],[l],i),ie.TEXT,i,o);return r&&Ig(s,i,ie.TEXT),s},uu=function(t,n,r){var i;n==="Size1-Regular"?i="delim-size1":i="delim-size4";var a=T.makeSpan(["delimsizinginner",i],[T.makeSpan([],[T.makeSymbol(t,n,r)])]);return{type:"elem",elem:a}},hu=function(t,n,r){var i=bn["Size4-Regular"][t.charCodeAt(0)]?bn["Size4-Regular"][t.charCodeAt(0)][4]:bn["Size1-Regular"][t.charCodeAt(0)][4],a=new vr("inner",Fw(t,Math.round(1e3*n))),o=new jn([a],{width:K(i),height:K(n),style:"width:"+K(i),viewBox:"0 0 "+1e3*i+" "+Math.round(1e3*n),preserveAspectRatio:"xMinYMin"}),l=T.makeSvgSpan([],[o],r);return l.height=n,l.style.height=K(n),l.style.width=K(i),{type:"elem",elem:l}},T0=.008,Ro={type:"kern",size:-1*T0},D_=["|","\\lvert","\\rvert","\\vert"],z_=["\\|","\\lVert","\\rVert","\\Vert"],Lg=function(t,n,r,i,a,o){var l,s,u,h,m="",p=0;l=u=h=t,s=null;var f="Size1-Regular";t==="\\uparrow"?u=h="⏐":t==="\\Uparrow"?u=h="‖":t==="\\downarrow"?l=u="⏐":t==="\\Downarrow"?l=u="‖":t==="\\updownarrow"?(l="\\uparrow",u="⏐",h="\\downarrow"):t==="\\Updownarrow"?(l="\\Uparrow",u="‖",h="\\Downarrow"):te.contains(D_,t)?(u="∣",m="vert",p=333):te.contains(z_,t)?(u="∥",m="doublevert",p=556):t==="["||t==="\\lbrack"?(l="⎡",u="⎢",h="⎣",f="Size4-Regular",m="lbrack",p=667):t==="]"||t==="\\rbrack"?(l="⎤",u="⎥",h="⎦",f="Size4-Regular",m="rbrack",p=667):t==="\\lfloor"||t==="⌊"?(u=l="⎢",h="⎣",f="Size4-Regular",m="lfloor",p=667):t==="\\lceil"||t==="⌈"?(l="⎡",u=h="⎢",f="Size4-Regular",m="lceil",p=667):t==="\\rfloor"||t==="⌋"?(u=l="⎥",h="⎦",f="Size4-Regular",m="rfloor",p=667):t==="\\rceil"||t==="⌉"?(l="⎤",u=h="⎥",f="Size4-Regular",m="rceil",p=667):t==="("||t==="\\lparen"?(l="⎛",u="⎜",h="⎝",f="Size4-Regular",m="lparen",p=875):t===")"||t==="\\rparen"?(l="⎞",u="⎟",h="⎠",f="Size4-Regular",m="rparen",p=875):t==="\\{"||t==="\\lbrace"?(l="⎧",s="⎨",h="⎩",u="⎪",f="Size4-Regular"):t==="\\}"||t==="\\rbrace"?(l="⎫",s="⎬",h="⎭",u="⎪",f="Size4-Regular"):t==="\\lgroup"||t==="⟮"?(l="⎧",h="⎩",u="⎪",f="Size4-Regular"):t==="\\rgroup"||t==="⟯"?(l="⎫",h="⎭",u="⎪",f="Size4-Regular"):t==="\\lmoustache"||t==="⎰"?(l="⎧",h="⎭",u="⎪",f="Size4-Regular"):(t==="\\rmoustache"||t==="⎱")&&(l="⎫",h="⎩",u="⎪",f="Size4-Regular");var v=ma(l,f,a),$=v.height+v.depth,k=ma(u,f,a),g=k.height+k.depth,y=ma(h,f,a),w=y.height+y.depth,P=0,F=1;if(s!==null){var D=ma(s,f,a);P=D.height+D.depth,F=2}var M=$+w+P,q=Math.max(0,Math.ceil((n-M)/(F*g))),I=M+q*F*g,V=i.fontMetrics().axisHeight;r&&(V*=i.sizeMultiplier);var X=I/2-V,L=[];if(m.length>0){var he=I-$-w,le=Math.round(I*1e3),ae=Nw(m,Math.round(he*1e3)),be=new vr(m,ae),ve=(p/1e3).toFixed(3)+"em",U=(le/1e3).toFixed(3)+"em",J=new jn([be],{width:ve,height:U,viewBox:"0 0 "+p+" "+le}),_=T.makeSvgSpan([],[J],i);_.height=le/1e3,_.style.width=ve,_.style.height=U,L.push({type:"elem",elem:_})}else{if(L.push(uu(h,f,a)),L.push(Ro),s===null){var ne=I-$-w+2*T0;L.push(hu(u,ne,i))}else{var ce=(I-$-w-P)/2+2*T0;L.push(hu(u,ce,i)),L.push(Ro),L.push(uu(s,f,a)),L.push(Ro),L.push(hu(u,ce,i))}L.push(Ro),L.push(uu(l,f,a))}var C=i.havingBaseStyle(ie.TEXT),Ne=T.makeVList({positionType:"bottom",positionData:X,children:L},C);return uc(T.makeSpan(["delimsizing","mult"],[Ne],C),ie.TEXT,i,o)},cu=80,mu=.08,du=function(t,n,r,i,a){var o=Tw(t,i,r),l=new vr(t,o),s=new jn([l],{width:"400em",height:K(n),viewBox:"0 0 400000 "+r,preserveAspectRatio:"xMinYMin slice"});return T.makeSvgSpan(["hide-tail"],[s],a)},P_=function(t,n){var r=n.havingBaseSizing(),i=Wg("\\surd",t*r.sizeMultiplier,Hg,r),a=r.sizeMultiplier,o=Math.max(0,n.minRuleThickness-n.fontMetrics().sqrtRuleThickness),l,s=0,u=0,h=0,m;return i.type==="small"?(h=1e3+1e3*o+cu,t<1?a=1:t<1.4&&(a=.7),s=(1+o+mu)/a,u=(1+o)/a,l=du("sqrtMain",s,h,o,n),l.style.minWidth="0.853em",m=.833/a):i.type==="large"?(h=(1e3+cu)*Sa[i.size],u=(Sa[i.size]+o)/a,s=(Sa[i.size]+o+mu)/a,l=du("sqrtSize"+i.size,s,h,o,n),l.style.minWidth="1.02em",m=1/a):(s=t+o+mu,u=t+o,h=Math.floor(1e3*t+o)+cu,l=du("sqrtTall",s,h,o,n),l.style.minWidth="0.742em",m=1.056),l.height=u,l.style.height=K(s),{span:l,advanceWidth:m,ruleWidth:(n.fontMetrics().sqrtRuleThickness+o)*a}},Og=["(","\\lparen",")","\\rparen","[","\\lbrack","]","\\rbrack","\\{","\\lbrace","\\}","\\rbrace","\\lfloor","\\rfloor","⌊","⌋","\\lceil","\\rceil","⌈","⌉","\\surd"],A_=["\\uparrow","\\downarrow","\\updownarrow","\\Uparrow","\\Downarrow","\\Updownarrow","|","\\|","\\vert","\\Vert","\\lvert","\\rvert","\\lVert","\\rVert","\\lgroup","\\rgroup","⟮","⟯","\\lmoustache","\\rmoustache","⎰","⎱"],jg=["<",">","\\langle","\\rangle","/","\\backslash","\\lt","\\gt"],Sa=[0,1.2,1.8,2.4,3],T_=function(t,n,r,i,a){if(t==="<"||t==="\\lt"||t==="⟨"?t="\\langle":(t===">"||t==="\\gt"||t==="⟩")&&(t="\\rangle"),te.contains(Og,t)||te.contains(jg,t))return Bg(t,n,!1,r,i,a);if(te.contains(A_,t))return Lg(t,Sa[n],!1,r,i,a);throw new H("Illegal delimiter: '"+t+"'")},F_=[{type:"small",style:ie.SCRIPTSCRIPT},{type:"small",style:ie.SCRIPT},{type:"small",style:ie.TEXT},{type:"large",size:1},{type:"large",size:2},{type:"large",size:3},{type:"large",size:4}],N_=[{type:"small",style:ie.SCRIPTSCRIPT},{type:"small",style:ie.SCRIPT},{type:"small",style:ie.TEXT},{type:"stack"}],Hg=[{type:"small",style:ie.SCRIPTSCRIPT},{type:"small",style:ie.SCRIPT},{type:"small",style:ie.TEXT},{type:"large",size:1},{type:"large",size:2},{type:"large",size:3},{type:"large",size:4},{type:"stack"}],M_=function(t){if(t.type==="small")return"Main-Regular";if(t.type==="large")return"Size"+t.size+"-Regular";if(t.type==="stack")return"Size4-Regular";throw new Error("Add support for delim type '"+t.type+"' here.")},Wg=function(t,n,r,i){for(var a=Math.min(2,3-i.style.size),o=a;o<r.length&&r[o].type!=="stack";o++){var l=ma(t,M_(r[o]),"math"),s=l.height+l.depth;if(r[o].type==="small"){var u=i.havingBaseStyle(r[o].style);s*=u.sizeMultiplier}if(s>n)return r[o]}return r[r.length-1]},Ug=function(t,n,r,i,a,o){t==="<"||t==="\\lt"||t==="⟨"?t="\\langle":(t===">"||t==="\\gt"||t==="⟩")&&(t="\\rangle");var l;te.contains(jg,t)?l=F_:te.contains(Og,t)?l=Hg:l=N_;var s=Wg(t,n,l,i);return s.type==="small"?E_(t,s.style,r,i,a,o):s.type==="large"?Bg(t,s.size,r,i,a,o):Lg(t,n,r,i,a,o)},R_=function(t,n,r,i,a,o){var l=i.fontMetrics().axisHeight*i.sizeMultiplier,s=901,u=5/i.fontMetrics().ptPerEm,h=Math.max(n-l,r+l),m=Math.max(h/500*s,2*h-u);return Ug(t,m,!0,i,a,o)},qn={sqrtImage:P_,sizedDelim:T_,sizeToMaxHeight:Sa,customSizedDelim:Ug,leftRightDelim:R_},Yd={"\\bigl":{mclass:"mopen",size:1},"\\Bigl":{mclass:"mopen",size:2},"\\biggl":{mclass:"mopen",size:3},"\\Biggl":{mclass:"mopen",size:4},"\\bigr":{mclass:"mclose",size:1},"\\Bigr":{mclass:"mclose",size:2},"\\biggr":{mclass:"mclose",size:3},"\\Biggr":{mclass:"mclose",size:4},"\\bigm":{mclass:"mrel",size:1},"\\Bigm":{mclass:"mrel",size:2},"\\biggm":{mclass:"mrel",size:3},"\\Biggm":{mclass:"mrel",size:4},"\\big":{mclass:"mord",size:1},"\\Big":{mclass:"mord",size:2},"\\bigg":{mclass:"mord",size:3},"\\Bigg":{mclass:"mord",size:4}},q_=["(","\\lparen",")","\\rparen","[","\\lbrack","]","\\rbrack","\\{","\\lbrace","\\}","\\rbrace","\\lfloor","\\rfloor","⌊","⌋","\\lceil","\\rceil","⌈","⌉","<",">","\\langle","⟨","\\rangle","⟩","\\lt","\\gt","\\lvert","\\rvert","\\lVert","\\rVert","\\lgroup","\\rgroup","⟮","⟯","\\lmoustache","\\rmoustache","⎰","⎱","/","\\backslash","|","\\vert","\\|","\\Vert","\\uparrow","\\Uparrow","\\downarrow","\\Downarrow","\\updownarrow","\\Updownarrow","."];function ms(e,t){var n=hs(e);if(n&&te.contains(q_,n.text))return n;throw n?new H("Invalid delimiter '"+n.text+"' after '"+t.funcName+"'",e):new H("Invalid delimiter type '"+e.type+"'",e)}Q({type:"delimsizing",names:["\\bigl","\\Bigl","\\biggl","\\Biggl","\\bigr","\\Bigr","\\biggr","\\Biggr","\\bigm","\\Bigm","\\biggm","\\Biggm","\\big","\\Big","\\bigg","\\Bigg"],props:{numArgs:1,argTypes:["primitive"]},handler:(e,t)=>{var n=ms(t[0],e);return{type:"delimsizing",mode:e.parser.mode,size:Yd[e.funcName].size,mclass:Yd[e.funcName].mclass,delim:n.text}},htmlBuilder:(e,t)=>e.delim==="."?T.makeSpan([e.mclass]):qn.sizedDelim(e.delim,e.size,t,e.mode,[e.mclass]),mathmlBuilder:e=>{var t=[];e.delim!=="."&&t.push(Vt(e.delim,e.mode));var n=new O.MathNode("mo",t);e.mclass==="mopen"||e.mclass==="mclose"?n.setAttribute("fence","true"):n.setAttribute("fence","false"),n.setAttribute("stretchy","true");var r=K(qn.sizeToMaxHeight[e.size]);return n.setAttribute("minsize",r),n.setAttribute("maxsize",r),n}});function Zd(e){if(!e.body)throw new Error("Bug: The leftright ParseNode wasn't fully parsed.")}Q({type:"leftright-right",names:["\\right"],props:{numArgs:1,primitive:!0},handler:(e,t)=>{var n=e.parser.gullet.macros.get("\\current@color");if(n&&typeof n!="string")throw new H("\\current@color set to non-string in \\right");return{type:"leftright-right",mode:e.parser.mode,delim:ms(t[0],e).text,color:n}}});Q({type:"leftright",names:["\\left"],props:{numArgs:1,primitive:!0},handler:(e,t)=>{var n=ms(t[0],e),r=e.parser;++r.leftrightDepth;var i=r.parseExpression(!1);--r.leftrightDepth,r.expect("\\right",!1);var a=de(r.parseFunction(),"leftright-right");return{type:"leftright",mode:r.mode,body:i,left:n.text,right:a.delim,rightColor:a.color}},htmlBuilder:(e,t)=>{Zd(e);for(var n=Qe(e.body,t,!0,["mopen","mclose"]),r=0,i=0,a=!1,o=0;o<n.length;o++)n[o].isMiddle?a=!0:(r=Math.max(n[o].height,r),i=Math.max(n[o].depth,i));r*=t.sizeMultiplier,i*=t.sizeMultiplier;var l;if(e.left==="."?l=Ka(t,["mopen"]):l=qn.leftRightDelim(e.left,r,i,t,e.mode,["mopen"]),n.unshift(l),a)for(var s=1;s<n.length;s++){var u=n[s],h=u.isMiddle;h&&(n[s]=qn.leftRightDelim(h.delim,r,i,h.options,e.mode,[]))}var m;if(e.right===".")m=Ka(t,["mclose"]);else{var p=e.rightColor?t.withColor(e.rightColor):t;m=qn.leftRightDelim(e.right,r,i,p,e.mode,["mclose"])}return n.push(m),T.makeSpan(["minner"],n,t)},mathmlBuilder:(e,t)=>{Zd(e);var n=St(e.body,t);if(e.left!=="."){var r=new O.MathNode("mo",[Vt(e.left,e.mode)]);r.setAttribute("fence","true"),n.unshift(r)}if(e.right!=="."){var i=new O.MathNode("mo",[Vt(e.right,e.mode)]);i.setAttribute("fence","true"),e.rightColor&&i.setAttribute("mathcolor",e.rightColor),n.push(i)}return ac(n)}});Q({type:"middle",names:["\\middle"],props:{numArgs:1,primitive:!0},handler:(e,t)=>{var n=ms(t[0],e);if(!e.parser.leftrightDepth)throw new H("\\middle without preceding \\left",n);return{type:"middle",mode:e.parser.mode,delim:n.text}},htmlBuilder:(e,t)=>{var n;if(e.delim===".")n=Ka(t,[]);else{n=qn.sizedDelim(e.delim,1,t,e.mode,[]);var r={delim:e.delim,options:t};n.isMiddle=r}return n},mathmlBuilder:(e,t)=>{var n=e.delim==="\\vert"||e.delim==="|"?Vt("|","text"):Vt(e.delim,e.mode),r=new O.MathNode("mo",[n]);return r.setAttribute("fence","true"),r.setAttribute("lspace","0.05em"),r.setAttribute("rspace","0.05em"),r}});var hc=(e,t)=>{var n=T.wrapFragment(ye(e.body,t),t),r=e.label.slice(1),i=t.sizeMultiplier,a,o=0,l=te.isCharacterBox(e.body);if(r==="sout")a=T.makeSpan(["stretchy","sout"]),a.height=t.fontMetrics().defaultRuleThickness/i,o=-.5*t.fontMetrics().xHeight;else if(r==="phase"){var s=qe({number:.6,unit:"pt"},t),u=qe({number:.35,unit:"ex"},t),h=t.havingBaseSizing();i=i/h.sizeMultiplier;var m=n.height+n.depth+s+u;n.style.paddingLeft=K(m/2+s);var p=Math.floor(1e3*m*i),f=Pw(p),v=new jn([new vr("phase",f)],{width:"400em",height:K(p/1e3),viewBox:"0 0 400000 "+p,preserveAspectRatio:"xMinYMin slice"});a=T.makeSvgSpan(["hide-tail"],[v],t),a.style.height=K(m),o=n.depth+s+u}else{/cancel/.test(r)?l||n.classes.push("cancel-pad"):r==="angl"?n.classes.push("anglpad"):n.classes.push("boxpad");var $=0,k=0,g=0;/box/.test(r)?(g=Math.max(t.fontMetrics().fboxrule,t.minRuleThickness),$=t.fontMetrics().fboxsep+(r==="colorbox"?0:g),k=$):r==="angl"?(g=Math.max(t.fontMetrics().defaultRuleThickness,t.minRuleThickness),$=4*g,k=Math.max(0,.25-n.depth)):($=l?.2:0,k=$),a=Wn.encloseSpan(n,r,$,k,t),/fbox|boxed|fcolorbox/.test(r)?(a.style.borderStyle="solid",a.style.borderWidth=K(g)):r==="angl"&&g!==.049&&(a.style.borderTopWidth=K(g),a.style.borderRightWidth=K(g)),o=n.depth+k,e.backgroundColor&&(a.style.backgroundColor=e.backgroundColor,e.borderColor&&(a.style.borderColor=e.borderColor))}var y;if(e.backgroundColor)y=T.makeVList({positionType:"individualShift",children:[{type:"elem",elem:a,shift:o},{type:"elem",elem:n,shift:0}]},t);else{var w=/cancel|phase/.test(r)?["svg-align"]:[];y=T.makeVList({positionType:"individualShift",children:[{type:"elem",elem:n,shift:0},{type:"elem",elem:a,shift:o,wrapperClasses:w}]},t)}return/cancel/.test(r)&&(y.height=n.height,y.depth=n.depth),/cancel/.test(r)&&!l?T.makeSpan(["mord","cancel-lap"],[y],t):T.makeSpan(["mord"],[y],t)},cc=(e,t)=>{var n=0,r=new O.MathNode(e.label.indexOf("colorbox")>-1?"mpadded":"menclose",[Se(e.body,t)]);switch(e.label){case"\\cancel":r.setAttribute("notation","updiagonalstrike");break;case"\\bcancel":r.setAttribute("notation","downdiagonalstrike");break;case"\\phase":r.setAttribute("notation","phasorangle");break;case"\\sout":r.setAttribute("notation","horizontalstrike");break;case"\\fbox":r.setAttribute("notation","box");break;case"\\angl":r.setAttribute("notation","actuarial");break;case"\\fcolorbox":case"\\colorbox":if(n=t.fontMetrics().fboxsep*t.fontMetrics().ptPerEm,r.setAttribute("width","+"+2*n+"pt"),r.setAttribute("height","+"+2*n+"pt"),r.setAttribute("lspace",n+"pt"),r.setAttribute("voffset",n+"pt"),e.label==="\\fcolorbox"){var i=Math.max(t.fontMetrics().fboxrule,t.minRuleThickness);r.setAttribute("style","border: "+i+"em solid "+String(e.borderColor))}break;case"\\xcancel":r.setAttribute("notation","updiagonalstrike downdiagonalstrike");break}return e.backgroundColor&&r.setAttribute("mathbackground",e.backgroundColor),r};Q({type:"enclose",names:["\\colorbox"],props:{numArgs:2,allowedInText:!0,argTypes:["color","text"]},handler(e,t,n){var{parser:r,funcName:i}=e,a=de(t[0],"color-token").color,o=t[1];return{type:"enclose",mode:r.mode,label:i,backgroundColor:a,body:o}},htmlBuilder:hc,mathmlBuilder:cc});Q({type:"enclose",names:["\\fcolorbox"],props:{numArgs:3,allowedInText:!0,argTypes:["color","color","text"]},handler(e,t,n){var{parser:r,funcName:i}=e,a=de(t[0],"color-token").color,o=de(t[1],"color-token").color,l=t[2];return{type:"enclose",mode:r.mode,label:i,backgroundColor:o,borderColor:a,body:l}},htmlBuilder:hc,mathmlBuilder:cc});Q({type:"enclose",names:["\\fbox"],props:{numArgs:1,argTypes:["hbox"],allowedInText:!0},handler(e,t){var{parser:n}=e;return{type:"enclose",mode:n.mode,label:"\\fbox",body:t[0]}}});Q({type:"enclose",names:["\\cancel","\\bcancel","\\xcancel","\\sout","\\phase"],props:{numArgs:1},handler(e,t){var{parser:n,funcName:r}=e,i=t[0];return{type:"enclose",mode:n.mode,label:r,body:i}},htmlBuilder:hc,mathmlBuilder:cc});Q({type:"enclose",names:["\\angl"],props:{numArgs:1,argTypes:["hbox"],allowedInText:!1},handler(e,t){var{parser:n}=e;return{type:"enclose",mode:n.mode,label:"\\angl",body:t[0]}}});var Xg={};function wn(e){for(var{type:t,names:n,props:r,handler:i,htmlBuilder:a,mathmlBuilder:o}=e,l={type:t,numArgs:r.numArgs||0,allowedInText:!1,numOptionalArgs:0,handler:i},s=0;s<n.length;++s)Xg[n[s]]=l;a&&(Nl[t]=a),o&&(Ml[t]=o)}var Kg={};function x(e,t){Kg[e]=t}function Jd(e){var t=[];e.consumeSpaces();var n=e.fetch().text;for(n==="\\relax"&&(e.consume(),e.consumeSpaces(),n=e.fetch().text);n==="\\hline"||n==="\\hdashline";)e.consume(),t.push(n==="\\hdashline"),e.consumeSpaces(),n=e.fetch().text;return t}var ds=e=>{var t=e.parser.settings;if(!t.displayMode)throw new H("{"+e.envName+"} can be used only in display mode.")};function mc(e){if(e.indexOf("ed")===-1)return e.indexOf("*")===-1}function Sr(e,t,n){var{hskipBeforeAndAfter:r,addJot:i,cols:a,arraystretch:o,colSeparationType:l,autoTag:s,singleRow:u,emptySingleRow:h,maxNumCols:m,leqno:p}=t;if(e.gullet.beginGroup(),u||e.gullet.macros.set("\\cr","\\\\\\relax"),!o){var f=e.gullet.expandMacroAsText("\\arraystretch");if(f==null)o=1;else if(o=parseFloat(f),!o||o<0)throw new H("Invalid \\arraystretch: "+f)}e.gullet.beginGroup();var v=[],$=[v],k=[],g=[],y=s!=null?[]:void 0;function w(){s&&e.gullet.macros.set("\\@eqnsw","1",!0)}function P(){y&&(e.gullet.macros.get("\\df@tag")?(y.push(e.subparse([new Wt("\\df@tag")])),e.gullet.macros.set("\\df@tag",void 0,!0)):y.push(!!s&&e.gullet.macros.get("\\@eqnsw")==="1"))}for(w(),g.push(Jd(e));;){var F=e.parseExpression(!1,u?"\\end":"\\\\");e.gullet.endGroup(),e.gullet.beginGroup(),F={type:"ordgroup",mode:e.mode,body:F},n&&(F={type:"styling",mode:e.mode,style:n,body:[F]}),v.push(F);var D=e.fetch().text;if(D==="&"){if(m&&v.length===m){if(u||l)throw new H("Too many tab characters: &",e.nextToken);e.settings.reportNonstrict("textEnv","Too few columns specified in the {array} column argument.")}e.consume()}else if(D==="\\end"){P(),v.length===1&&F.type==="styling"&&F.body[0].body.length===0&&($.length>1||!h)&&$.pop(),g.length<$.length+1&&g.push([]);break}else if(D==="\\\\"){e.consume();var M=void 0;e.gullet.future().text!==" "&&(M=e.parseSizeGroup(!0)),k.push(M?M.value:null),P(),g.push(Jd(e)),v=[],$.push(v),w()}else throw new H("Expected & or \\\\ or \\cr or \\end",e.nextToken)}return e.gullet.endGroup(),e.gullet.endGroup(),{type:"array",mode:e.mode,addJot:i,arraystretch:o,body:$,cols:a,rowGaps:k,hskipBeforeAndAfter:r,hLinesBeforeRow:g,colSeparationType:l,tags:y,leqno:p}}function dc(e){return e.slice(0,1)==="d"?"display":"text"}var _n=function(t,n){var r,i,a=t.body.length,o=t.hLinesBeforeRow,l=0,s=new Array(a),u=[],h=Math.max(n.fontMetrics().arrayRuleWidth,n.minRuleThickness),m=1/n.fontMetrics().ptPerEm,p=5*m;if(t.colSeparationType&&t.colSeparationType==="small"){var f=n.havingStyle(ie.SCRIPT).sizeMultiplier;p=.2778*(f/n.sizeMultiplier)}var v=t.colSeparationType==="CD"?qe({number:3,unit:"ex"},n):12*m,$=3*m,k=t.arraystretch*v,g=.7*k,y=.3*k,w=0;function P(Zr){for(var Er=0;Er<Zr.length;++Er)Er>0&&(w+=.25),u.push({pos:w,isDashed:Zr[Er]})}for(P(o[0]),r=0;r<t.body.length;++r){var F=t.body[r],D=g,M=y;l<F.length&&(l=F.length);var q=new Array(F.length);for(i=0;i<F.length;++i){var I=ye(F[i],n);M<I.depth&&(M=I.depth),D<I.height&&(D=I.height),q[i]=I}var V=t.rowGaps[r],X=0;V&&(X=qe(V,n),X>0&&(X+=y,M<X&&(M=X),X=0)),t.addJot&&(M+=$),q.height=D,q.depth=M,w+=D,q.pos=w,w+=M+X,s[r]=q,P(o[r+1])}var L=w/2+n.fontMetrics().axisHeight,he=t.cols||[],le=[],ae,be,ve=[];if(t.tags&&t.tags.some(Zr=>Zr))for(r=0;r<a;++r){var U=s[r],J=U.pos-L,_=t.tags[r],ne=void 0;_===!0?ne=T.makeSpan(["eqn-num"],[],n):_===!1?ne=T.makeSpan([],[],n):ne=T.makeSpan([],Qe(_,n,!0),n),ne.depth=U.depth,ne.height=U.height,ve.push({type:"elem",elem:ne,shift:J})}for(i=0,be=0;i<l||be<he.length;++i,++be){for(var ce=he[be]||{},C=!0;ce.type==="separator";){if(C||(ae=T.makeSpan(["arraycolsep"],[]),ae.style.width=K(n.fontMetrics().doubleRuleSep),le.push(ae)),ce.separator==="|"||ce.separator===":"){var Ne=ce.separator==="|"?"solid":"dashed",Ye=T.makeSpan(["vertical-separator"],[],n);Ye.style.height=K(w),Ye.style.borderRightWidth=K(h),Ye.style.borderRightStyle=Ne,Ye.style.margin="0 "+K(-h/2);var _e=w-L;_e&&(Ye.style.verticalAlign=K(-_e)),le.push(Ye)}else throw new H("Invalid separator type: "+ce.separator);be++,ce=he[be]||{},C=!1}if(!(i>=l)){var et=void 0;(i>0||t.hskipBeforeAndAfter)&&(et=te.deflt(ce.pregap,p),et!==0&&(ae=T.makeSpan(["arraycolsep"],[]),ae.style.width=K(et),le.push(ae)));var ut=[];for(r=0;r<a;++r){var Qt=s[r],Yt=Qt[i];if(Yt){var Qr=Qt.pos-L;Yt.depth=Qt.depth,Yt.height=Qt.height,ut.push({type:"elem",elem:Yt,shift:Qr})}}ut=T.makeVList({positionType:"individualShift",children:ut},n),ut=T.makeSpan(["col-align-"+(ce.align||"c")],[ut]),le.push(ut),(i<l-1||t.hskipBeforeAndAfter)&&(et=te.deflt(ce.postgap,p),et!==0&&(ae=T.makeSpan(["arraycolsep"],[]),ae.style.width=K(et),le.push(ae)))}}if(s=T.makeSpan(["mtable"],le),u.length>0){for(var ps=T.makeLineSpan("hline",n,h),bs=T.makeLineSpan("hdashline",n,h),Wi=[{type:"elem",elem:s,shift:0}];u.length>0;){var Ui=u.pop(),Xi=Ui.pos-L;Ui.isDashed?Wi.push({type:"elem",elem:bs,shift:Xi}):Wi.push({type:"elem",elem:ps,shift:Xi})}s=T.makeVList({positionType:"individualShift",children:Wi},n)}if(ve.length===0)return T.makeSpan(["mord"],[s],n);var Yr=T.makeVList({positionType:"individualShift",children:ve},n);return Yr=T.makeSpan(["tag"],[Yr],n),T.makeFragment([s,Yr])},I_={c:"center ",l:"left ",r:"right "},kn=function(t,n){for(var r=[],i=new O.MathNode("mtd",[],["mtr-glue"]),a=new O.MathNode("mtd",[],["mml-eqn-num"]),o=0;o<t.body.length;o++){for(var l=t.body[o],s=[],u=0;u<l.length;u++)s.push(new O.MathNode("mtd",[Se(l[u],n)]));t.tags&&t.tags[o]&&(s.unshift(i),s.push(i),t.leqno?s.unshift(a):s.push(a)),r.push(new O.MathNode("mtr",s))}var h=new O.MathNode("mtable",r),m=t.arraystretch===.5?.1:.16+t.arraystretch-1+(t.addJot?.09:0);h.setAttribute("rowspacing",K(m));var p="",f="";if(t.cols&&t.cols.length>0){var v=t.cols,$="",k=!1,g=0,y=v.length;v[0].type==="separator"&&(p+="top ",g=1),v[v.length-1].type==="separator"&&(p+="bottom ",y-=1);for(var w=g;w<y;w++)v[w].type==="align"?(f+=I_[v[w].align],k&&($+="none "),k=!0):v[w].type==="separator"&&k&&($+=v[w].separator==="|"?"solid ":"dashed ",k=!1);h.setAttribute("columnalign",f.trim()),/[sd]/.test($)&&h.setAttribute("columnlines",$.trim())}if(t.colSeparationType==="align"){for(var P=t.cols||[],F="",D=1;D<P.length;D++)F+=D%2?"0em ":"1em ";h.setAttribute("columnspacing",F.trim())}else t.colSeparationType==="alignat"||t.colSeparationType==="gather"?h.setAttribute("columnspacing","0em"):t.colSeparationType==="small"?h.setAttribute("columnspacing","0.2778em"):t.colSeparationType==="CD"?h.setAttribute("columnspacing","0.5em"):h.setAttribute("columnspacing","1em");var M="",q=t.hLinesBeforeRow;p+=q[0].length>0?"left ":"",p+=q[q.length-1].length>0?"right ":"";for(var I=1;I<q.length-1;I++)M+=q[I].length===0?"none ":q[I][0]?"dashed ":"solid ";return/[sd]/.test(M)&&h.setAttribute("rowlines",M.trim()),p!==""&&(h=new O.MathNode("menclose",[h]),h.setAttribute("notation",p.trim())),t.arraystretch&&t.arraystretch<1&&(h=new O.MathNode("mstyle",[h]),h.setAttribute("scriptlevel","1")),h},Vg=function(t,n){t.envName.indexOf("ed")===-1&&ds(t);var r=[],i=t.envName.indexOf("at")>-1?"alignat":"align",a=t.envName==="split",o=Sr(t.parser,{cols:r,addJot:!0,autoTag:a?void 0:mc(t.envName),emptySingleRow:!0,colSeparationType:i,maxNumCols:a?2:void 0,leqno:t.parser.settings.leqno},"display"),l,s=0,u={type:"ordgroup",mode:t.mode,body:[]};if(n[0]&&n[0].type==="ordgroup"){for(var h="",m=0;m<n[0].body.length;m++){var p=de(n[0].body[m],"textord");h+=p.text}l=Number(h),s=l*2}var f=!s;o.body.forEach(function(g){for(var y=1;y<g.length;y+=2){var w=de(g[y],"styling"),P=de(w.body[0],"ordgroup");P.body.unshift(u)}if(f)s<g.length&&(s=g.length);else{var F=g.length/2;if(l<F)throw new H("Too many math in a row: "+("expected "+l+", but got "+F),g[0])}});for(var v=0;v<s;++v){var $="r",k=0;v%2===1?$="l":v>0&&f&&(k=1),r[v]={type:"align",align:$,pregap:k,postgap:0}}return o.colSeparationType=f?"align":"alignat",o};wn({type:"array",names:["array","darray"],props:{numArgs:1},handler(e,t){var n=hs(t[0]),r=n?[t[0]]:de(t[0],"ordgroup").body,i=r.map(function(o){var l=lc(o),s=l.text;if("lcr".indexOf(s)!==-1)return{type:"align",align:s};if(s==="|")return{type:"separator",separator:"|"};if(s===":")return{type:"separator",separator:":"};throw new H("Unknown column alignment: "+s,o)}),a={cols:i,hskipBeforeAndAfter:!0,maxNumCols:i.length};return Sr(e.parser,a,dc(e.envName))},htmlBuilder:_n,mathmlBuilder:kn});wn({type:"array",names:["matrix","pmatrix","bmatrix","Bmatrix","vmatrix","Vmatrix","matrix*","pmatrix*","bmatrix*","Bmatrix*","vmatrix*","Vmatrix*"],props:{numArgs:0},handler(e){var t={matrix:null,pmatrix:["(",")"],bmatrix:["[","]"],Bmatrix:["\\{","\\}"],vmatrix:["|","|"],Vmatrix:["\\Vert","\\Vert"]}[e.envName.replace("*","")],n="c",r={hskipBeforeAndAfter:!1,cols:[{type:"align",align:n}]};if(e.envName.charAt(e.envName.length-1)==="*"){var i=e.parser;if(i.consumeSpaces(),i.fetch().text==="["){if(i.consume(),i.consumeSpaces(),n=i.fetch().text,"lcr".indexOf(n)===-1)throw new H("Expected l or c or r",i.nextToken);i.consume(),i.consumeSpaces(),i.expect("]"),i.consume(),r.cols=[{type:"align",align:n}]}}var a=Sr(e.parser,r,dc(e.envName)),o=Math.max(0,...a.body.map(l=>l.length));return a.cols=new Array(o).fill({type:"align",align:n}),t?{type:"leftright",mode:e.mode,body:[a],left:t[0],right:t[1],rightColor:void 0}:a},htmlBuilder:_n,mathmlBuilder:kn});wn({type:"array",names:["smallmatrix"],props:{numArgs:0},handler(e){var t={arraystretch:.5},n=Sr(e.parser,t,"script");return n.colSeparationType="small",n},htmlBuilder:_n,mathmlBuilder:kn});wn({type:"array",names:["subarray"],props:{numArgs:1},handler(e,t){var n=hs(t[0]),r=n?[t[0]]:de(t[0],"ordgroup").body,i=r.map(function(o){var l=lc(o),s=l.text;if("lc".indexOf(s)!==-1)return{type:"align",align:s};throw new H("Unknown column alignment: "+s,o)});if(i.length>1)throw new H("{subarray} can contain only one column");var a={cols:i,hskipBeforeAndAfter:!1,arraystretch:.5};if(a=Sr(e.parser,a,"script"),a.body.length>0&&a.body[0].length>1)throw new H("{subarray} can contain only one column");return a},htmlBuilder:_n,mathmlBuilder:kn});wn({type:"array",names:["cases","dcases","rcases","drcases"],props:{numArgs:0},handler(e){var t={arraystretch:1.2,cols:[{type:"align",align:"l",pregap:0,postgap:1},{type:"align",align:"l",pregap:0,postgap:0}]},n=Sr(e.parser,t,dc(e.envName));return{type:"leftright",mode:e.mode,body:[n],left:e.envName.indexOf("r")>-1?".":"\\{",right:e.envName.indexOf("r")>-1?"\\}":".",rightColor:void 0}},htmlBuilder:_n,mathmlBuilder:kn});wn({type:"array",names:["align","align*","aligned","split"],props:{numArgs:0},handler:Vg,htmlBuilder:_n,mathmlBuilder:kn});wn({type:"array",names:["gathered","gather","gather*"],props:{numArgs:0},handler(e){te.contains(["gather","gather*"],e.envName)&&ds(e);var t={cols:[{type:"align",align:"c"}],addJot:!0,colSeparationType:"gather",autoTag:mc(e.envName),emptySingleRow:!0,leqno:e.parser.settings.leqno};return Sr(e.parser,t,"display")},htmlBuilder:_n,mathmlBuilder:kn});wn({type:"array",names:["alignat","alignat*","alignedat"],props:{numArgs:1},handler:Vg,htmlBuilder:_n,mathmlBuilder:kn});wn({type:"array",names:["equation","equation*"],props:{numArgs:0},handler(e){ds(e);var t={autoTag:mc(e.envName),emptySingleRow:!0,singleRow:!0,maxNumCols:1,leqno:e.parser.settings.leqno};return Sr(e.parser,t,"display")},htmlBuilder:_n,mathmlBuilder:kn});wn({type:"array",names:["CD"],props:{numArgs:0},handler(e){return ds(e),k_(e.parser)},htmlBuilder:_n,mathmlBuilder:kn});x("\\nonumber","\\gdef\\@eqnsw{0}");x("\\notag","\\nonumber");Q({type:"text",names:["\\hline","\\hdashline"],props:{numArgs:0,allowedInText:!0,allowedInMath:!0},handler(e,t){throw new H(e.funcName+" valid only within array environment")}});var ef=Xg;Q({type:"environment",names:["\\begin","\\end"],props:{numArgs:1,argTypes:["text"]},handler(e,t){var{parser:n,funcName:r}=e,i=t[0];if(i.type!=="ordgroup")throw new H("Invalid environment name",i);for(var a="",o=0;o<i.body.length;++o)a+=de(i.body[o],"textord").text;if(r==="\\begin"){if(!ef.hasOwnProperty(a))throw new H("No such environment: "+a,i);var l=ef[a],{args:s,optArgs:u}=n.parseArguments("\\begin{"+a+"}",l),h={mode:n.mode,envName:a,parser:n},m=l.handler(h,s,u);n.expect("\\end",!1);var p=n.nextToken,f=de(n.parseFunction(),"environment");if(f.name!==a)throw new H("Mismatch: \\begin{"+a+"} matched by \\end{"+f.name+"}",p);return m}return{type:"environment",mode:n.mode,name:a,nameGroup:i}}});var Gg=(e,t)=>{var n=e.font,r=t.withFont(n);return ye(e.body,r)},Qg=(e,t)=>{var n=e.font,r=t.withFont(n);return Se(e.body,r)},tf={"\\Bbb":"\\mathbb","\\bold":"\\mathbf","\\frak":"\\mathfrak","\\bm":"\\boldsymbol"};Q({type:"font",names:["\\mathrm","\\mathit","\\mathbf","\\mathnormal","\\mathsfit","\\mathbb","\\mathcal","\\mathfrak","\\mathscr","\\mathsf","\\mathtt","\\Bbb","\\bold","\\frak"],props:{numArgs:1,allowedInArgument:!0},handler:(e,t)=>{var{parser:n,funcName:r}=e,i=Rl(t[0]),a=r;return a in tf&&(a=tf[a]),{type:"font",mode:n.mode,font:a.slice(1),body:i}},htmlBuilder:Gg,mathmlBuilder:Qg});Q({type:"mclass",names:["\\boldsymbol","\\bm"],props:{numArgs:1},handler:(e,t)=>{var{parser:n}=e,r=t[0],i=te.isCharacterBox(r);return{type:"mclass",mode:n.mode,mclass:cs(r),body:[{type:"font",mode:n.mode,font:"boldsymbol",body:r}],isCharacterBox:i}}});Q({type:"font",names:["\\rm","\\sf","\\tt","\\bf","\\it","\\cal"],props:{numArgs:0,allowedInText:!0},handler:(e,t)=>{var{parser:n,funcName:r,breakOnTokenText:i}=e,{mode:a}=n,o=n.parseExpression(!0,i),l="math"+r.slice(1);return{type:"font",mode:a,font:l,body:{type:"ordgroup",mode:n.mode,body:o}}},htmlBuilder:Gg,mathmlBuilder:Qg});var Yg=(e,t)=>{var n=t;return e==="display"?n=n.id>=ie.SCRIPT.id?n.text():ie.DISPLAY:e==="text"&&n.size===ie.DISPLAY.size?n=ie.TEXT:e==="script"?n=ie.SCRIPT:e==="scriptscript"&&(n=ie.SCRIPTSCRIPT),n},fc=(e,t)=>{var n=Yg(e.size,t.style),r=n.fracNum(),i=n.fracDen(),a;a=t.havingStyle(r);var o=ye(e.numer,a,t);if(e.continued){var l=8.5/t.fontMetrics().ptPerEm,s=3.5/t.fontMetrics().ptPerEm;o.height=o.height<l?l:o.height,o.depth=o.depth<s?s:o.depth}a=t.havingStyle(i);var u=ye(e.denom,a,t),h,m,p;e.hasBarLine?(e.barSize?(m=qe(e.barSize,t),h=T.makeLineSpan("frac-line",t,m)):h=T.makeLineSpan("frac-line",t),m=h.height,p=h.height):(h=null,m=0,p=t.fontMetrics().defaultRuleThickness);var f,v,$;n.size===ie.DISPLAY.size||e.size==="display"?(f=t.fontMetrics().num1,m>0?v=3*p:v=7*p,$=t.fontMetrics().denom1):(m>0?(f=t.fontMetrics().num2,v=p):(f=t.fontMetrics().num3,v=3*p),$=t.fontMetrics().denom2);var k;if(h){var y=t.fontMetrics().axisHeight;f-o.depth-(y+.5*m)<v&&(f+=v-(f-o.depth-(y+.5*m))),y-.5*m-(u.height-$)<v&&($+=v-(y-.5*m-(u.height-$)));var w=-(y-.5*m);k=T.makeVList({positionType:"individualShift",children:[{type:"elem",elem:u,shift:$},{type:"elem",elem:h,shift:w},{type:"elem",elem:o,shift:-f}]},t)}else{var g=f-o.depth-(u.height-$);g<v&&(f+=.5*(v-g),$+=.5*(v-g)),k=T.makeVList({positionType:"individualShift",children:[{type:"elem",elem:u,shift:$},{type:"elem",elem:o,shift:-f}]},t)}a=t.havingStyle(n),k.height*=a.sizeMultiplier/t.sizeMultiplier,k.depth*=a.sizeMultiplier/t.sizeMultiplier;var P;n.size===ie.DISPLAY.size?P=t.fontMetrics().delim1:n.size===ie.SCRIPTSCRIPT.size?P=t.havingStyle(ie.SCRIPT).fontMetrics().delim2:P=t.fontMetrics().delim2;var F,D;return e.leftDelim==null?F=Ka(t,["mopen"]):F=qn.customSizedDelim(e.leftDelim,P,!0,t.havingStyle(n),e.mode,["mopen"]),e.continued?D=T.makeSpan([]):e.rightDelim==null?D=Ka(t,["mclose"]):D=qn.customSizedDelim(e.rightDelim,P,!0,t.havingStyle(n),e.mode,["mclose"]),T.makeSpan(["mord"].concat(a.sizingClasses(t)),[F,T.makeSpan(["mfrac"],[k]),D],t)},pc=(e,t)=>{var n=new O.MathNode("mfrac",[Se(e.numer,t),Se(e.denom,t)]);if(!e.hasBarLine)n.setAttribute("linethickness","0px");else if(e.barSize){var r=qe(e.barSize,t);n.setAttribute("linethickness",K(r))}var i=Yg(e.size,t.style);if(i.size!==t.style.size){n=new O.MathNode("mstyle",[n]);var a=i.size===ie.DISPLAY.size?"true":"false";n.setAttribute("displaystyle",a),n.setAttribute("scriptlevel","0")}if(e.leftDelim!=null||e.rightDelim!=null){var o=[];if(e.leftDelim!=null){var l=new O.MathNode("mo",[new O.TextNode(e.leftDelim.replace("\\",""))]);l.setAttribute("fence","true"),o.push(l)}if(o.push(n),e.rightDelim!=null){var s=new O.MathNode("mo",[new O.TextNode(e.rightDelim.replace("\\",""))]);s.setAttribute("fence","true"),o.push(s)}return ac(o)}return n};Q({type:"genfrac",names:["\\dfrac","\\frac","\\tfrac","\\dbinom","\\binom","\\tbinom","\\\\atopfrac","\\\\bracefrac","\\\\brackfrac"],props:{numArgs:2,allowedInArgument:!0},handler:(e,t)=>{var{parser:n,funcName:r}=e,i=t[0],a=t[1],o,l=null,s=null,u="auto";switch(r){case"\\dfrac":case"\\frac":case"\\tfrac":o=!0;break;case"\\\\atopfrac":o=!1;break;case"\\dbinom":case"\\binom":case"\\tbinom":o=!1,l="(",s=")";break;case"\\\\bracefrac":o=!1,l="\\{",s="\\}";break;case"\\\\brackfrac":o=!1,l="[",s="]";break;default:throw new Error("Unrecognized genfrac command")}switch(r){case"\\dfrac":case"\\dbinom":u="display";break;case"\\tfrac":case"\\tbinom":u="text";break}return{type:"genfrac",mode:n.mode,continued:!1,numer:i,denom:a,hasBarLine:o,leftDelim:l,rightDelim:s,size:u,barSize:null}},htmlBuilder:fc,mathmlBuilder:pc});Q({type:"genfrac",names:["\\cfrac"],props:{numArgs:2},handler:(e,t)=>{var{parser:n,funcName:r}=e,i=t[0],a=t[1];return{type:"genfrac",mode:n.mode,continued:!0,numer:i,denom:a,hasBarLine:!0,leftDelim:null,rightDelim:null,size:"display",barSize:null}}});Q({type:"infix",names:["\\over","\\choose","\\atop","\\brace","\\brack"],props:{numArgs:0,infix:!0},handler(e){var{parser:t,funcName:n,token:r}=e,i;switch(n){case"\\over":i="\\frac";break;case"\\choose":i="\\binom";break;case"\\atop":i="\\\\atopfrac";break;case"\\brace":i="\\\\bracefrac";break;case"\\brack":i="\\\\brackfrac";break;default:throw new Error("Unrecognized infix genfrac command")}return{type:"infix",mode:t.mode,replaceWith:i,token:r}}});var nf=["display","text","script","scriptscript"],rf=function(t){var n=null;return t.length>0&&(n=t,n=n==="."?null:n),n};Q({type:"genfrac",names:["\\genfrac"],props:{numArgs:6,allowedInArgument:!0,argTypes:["math","math","size","text","math","math"]},handler(e,t){var{parser:n}=e,r=t[4],i=t[5],a=Rl(t[0]),o=a.type==="atom"&&a.family==="open"?rf(a.text):null,l=Rl(t[1]),s=l.type==="atom"&&l.family==="close"?rf(l.text):null,u=de(t[2],"size"),h,m=null;u.isBlank?h=!0:(m=u.value,h=m.number>0);var p="auto",f=t[3];if(f.type==="ordgroup"){if(f.body.length>0){var v=de(f.body[0],"textord");p=nf[Number(v.text)]}}else f=de(f,"textord"),p=nf[Number(f.text)];return{type:"genfrac",mode:n.mode,numer:r,denom:i,continued:!1,hasBarLine:h,barSize:m,leftDelim:o,rightDelim:s,size:p}},htmlBuilder:fc,mathmlBuilder:pc});Q({type:"infix",names:["\\above"],props:{numArgs:1,argTypes:["size"],infix:!0},handler(e,t){var{parser:n,funcName:r,token:i}=e;return{type:"infix",mode:n.mode,replaceWith:"\\\\abovefrac",size:de(t[0],"size").value,token:i}}});Q({type:"genfrac",names:["\\\\abovefrac"],props:{numArgs:3,argTypes:["math","size","math"]},handler:(e,t)=>{var{parser:n,funcName:r}=e,i=t[0],a=pw(de(t[1],"infix").size),o=t[2],l=a.number>0;return{type:"genfrac",mode:n.mode,numer:i,denom:o,continued:!1,hasBarLine:l,barSize:a,leftDelim:null,rightDelim:null,size:"auto"}},htmlBuilder:fc,mathmlBuilder:pc});var Zg=(e,t)=>{var n=t.style,r,i;e.type==="supsub"?(r=e.sup?ye(e.sup,t.havingStyle(n.sup()),t):ye(e.sub,t.havingStyle(n.sub()),t),i=de(e.base,"horizBrace")):i=de(e,"horizBrace");var a=ye(i.base,t.havingBaseStyle(ie.DISPLAY)),o=Wn.svgSpan(i,t),l;if(i.isOver?(l=T.makeVList({positionType:"firstBaseline",children:[{type:"elem",elem:a},{type:"kern",size:.1},{type:"elem",elem:o}]},t),l.children[0].children[0].children[1].classes.push("svg-align")):(l=T.makeVList({positionType:"bottom",positionData:a.depth+.1+o.height,children:[{type:"elem",elem:o},{type:"kern",size:.1},{type:"elem",elem:a}]},t),l.children[0].children[0].children[0].classes.push("svg-align")),r){var s=T.makeSpan(["mord",i.isOver?"mover":"munder"],[l],t);i.isOver?l=T.makeVList({positionType:"firstBaseline",children:[{type:"elem",elem:s},{type:"kern",size:.2},{type:"elem",elem:r}]},t):l=T.makeVList({positionType:"bottom",positionData:s.depth+.2+r.height+r.depth,children:[{type:"elem",elem:r},{type:"kern",size:.2},{type:"elem",elem:s}]},t)}return T.makeSpan(["mord",i.isOver?"mover":"munder"],[l],t)},B_=(e,t)=>{var n=Wn.mathMLnode(e.label);return new O.MathNode(e.isOver?"mover":"munder",[Se(e.base,t),n])};Q({type:"horizBrace",names:["\\overbrace","\\underbrace"],props:{numArgs:1},handler(e,t){var{parser:n,funcName:r}=e;return{type:"horizBrace",mode:n.mode,label:r,isOver:/^\\over/.test(r),base:t[0]}},htmlBuilder:Zg,mathmlBuilder:B_});Q({type:"href",names:["\\href"],props:{numArgs:2,argTypes:["url","original"],allowedInText:!0},handler:(e,t)=>{var{parser:n}=e,r=t[1],i=de(t[0],"url").url;return n.settings.isTrusted({command:"\\href",url:i})?{type:"href",mode:n.mode,href:i,body:We(r)}:n.formatUnsupportedCmd("\\href")},htmlBuilder:(e,t)=>{var n=Qe(e.body,t,!1);return T.makeAnchor(e.href,[],n,t)},mathmlBuilder:(e,t)=>{var n=$r(e.body,t);return n instanceof Lt||(n=new Lt("mrow",[n])),n.setAttribute("href",e.href),n}});Q({type:"href",names:["\\url"],props:{numArgs:1,argTypes:["url"],allowedInText:!0},handler:(e,t)=>{var{parser:n}=e,r=de(t[0],"url").url;if(!n.settings.isTrusted({command:"\\url",url:r}))return n.formatUnsupportedCmd("\\url");for(var i=[],a=0;a<r.length;a++){var o=r[a];o==="~"&&(o="\\textasciitilde"),i.push({type:"textord",mode:"text",text:o})}var l={type:"text",mode:n.mode,font:"\\texttt",body:i};return{type:"href",mode:n.mode,href:r,body:We(l)}}});Q({type:"hbox",names:["\\hbox"],props:{numArgs:1,argTypes:["text"],allowedInText:!0,primitive:!0},handler(e,t){var{parser:n}=e;return{type:"hbox",mode:n.mode,body:We(t[0])}},htmlBuilder(e,t){var n=Qe(e.body,t,!1);return T.makeFragment(n)},mathmlBuilder(e,t){return new O.MathNode("mrow",St(e.body,t))}});Q({type:"html",names:["\\htmlClass","\\htmlId","\\htmlStyle","\\htmlData"],props:{numArgs:2,argTypes:["raw","original"],allowedInText:!0},handler:(e,t)=>{var{parser:n,funcName:r,token:i}=e,a=de(t[0],"raw").string,o=t[1];n.settings.strict&&n.settings.reportNonstrict("htmlExtension","HTML extension is disabled on strict mode");var l,s={};switch(r){case"\\htmlClass":s.class=a,l={command:"\\htmlClass",class:a};break;case"\\htmlId":s.id=a,l={command:"\\htmlId",id:a};break;case"\\htmlStyle":s.style=a,l={command:"\\htmlStyle",style:a};break;case"\\htmlData":{for(var u=a.split(","),h=0;h<u.length;h++){var m=u[h].split("=");if(m.length!==2)throw new H("Error parsing key-value for \\htmlData");s["data-"+m[0].trim()]=m[1].trim()}l={command:"\\htmlData",attributes:s};break}default:throw new Error("Unrecognized html command")}return n.settings.isTrusted(l)?{type:"html",mode:n.mode,attributes:s,body:We(o)}:n.formatUnsupportedCmd(r)},htmlBuilder:(e,t)=>{var n=Qe(e.body,t,!1),r=["enclosing"];e.attributes.class&&r.push(...e.attributes.class.trim().split(/\s+/));var i=T.makeSpan(r,n,t);for(var a in e.attributes)a!=="class"&&e.attributes.hasOwnProperty(a)&&i.setAttribute(a,e.attributes[a]);return i},mathmlBuilder:(e,t)=>$r(e.body,t)});Q({type:"htmlmathml",names:["\\html@mathml"],props:{numArgs:2,allowedInText:!0},handler:(e,t)=>{var{parser:n}=e;return{type:"htmlmathml",mode:n.mode,html:We(t[0]),mathml:We(t[1])}},htmlBuilder:(e,t)=>{var n=Qe(e.html,t,!1);return T.makeFragment(n)},mathmlBuilder:(e,t)=>$r(e.mathml,t)});var fu=function(t){if(/^[-+]? *(\d+(\.\d*)?|\.\d+)$/.test(t))return{number:+t,unit:"bp"};var n=/([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(t);if(!n)throw new H("Invalid size: '"+t+"' in \\includegraphics");var r={number:+(n[1]+n[2]),unit:n[3]};if(!gg(r))throw new H("Invalid unit: '"+r.unit+"' in \\includegraphics.");return r};Q({type:"includegraphics",names:["\\includegraphics"],props:{numArgs:1,numOptionalArgs:1,argTypes:["raw","url"],allowedInText:!1},handler:(e,t,n)=>{var{parser:r}=e,i={number:0,unit:"em"},a={number:.9,unit:"em"},o={number:0,unit:"em"},l="";if(n[0])for(var s=de(n[0],"raw").string,u=s.split(","),h=0;h<u.length;h++){var m=u[h].split("=");if(m.length===2){var p=m[1].trim();switch(m[0].trim()){case"alt":l=p;break;case"width":i=fu(p);break;case"height":a=fu(p);break;case"totalheight":o=fu(p);break;default:throw new H("Invalid key: '"+m[0]+"' in \\includegraphics.")}}}var f=de(t[0],"url").url;return l===""&&(l=f,l=l.replace(/^.*[\\/]/,""),l=l.substring(0,l.lastIndexOf("."))),r.settings.isTrusted({command:"\\includegraphics",url:f})?{type:"includegraphics",mode:r.mode,alt:l,width:i,height:a,totalheight:o,src:f}:r.formatUnsupportedCmd("\\includegraphics")},htmlBuilder:(e,t)=>{var n=qe(e.height,t),r=0;e.totalheight.number>0&&(r=qe(e.totalheight,t)-n);var i=0;e.width.number>0&&(i=qe(e.width,t));var a={height:K(n+r)};i>0&&(a.width=K(i)),r>0&&(a.verticalAlign=K(-r));var o=new Bw(e.src,e.alt,a);return o.height=n,o.depth=r,o},mathmlBuilder:(e,t)=>{var n=new O.MathNode("mglyph",[]);n.setAttribute("alt",e.alt);var r=qe(e.height,t),i=0;if(e.totalheight.number>0&&(i=qe(e.totalheight,t)-r,n.setAttribute("valign",K(-i))),n.setAttribute("height",K(r+i)),e.width.number>0){var a=qe(e.width,t);n.setAttribute("width",K(a))}return n.setAttribute("src",e.src),n}});Q({type:"kern",names:["\\kern","\\mkern","\\hskip","\\mskip"],props:{numArgs:1,argTypes:["size"],primitive:!0,allowedInText:!0},handler(e,t){var{parser:n,funcName:r}=e,i=de(t[0],"size");if(n.settings.strict){var a=r[1]==="m",o=i.value.unit==="mu";a?(o||n.settings.reportNonstrict("mathVsTextUnits","LaTeX's "+r+" supports only mu units, "+("not "+i.value.unit+" units")),n.mode!=="math"&&n.settings.reportNonstrict("mathVsTextUnits","LaTeX's "+r+" works only in math mode")):o&&n.settings.reportNonstrict("mathVsTextUnits","LaTeX's "+r+" doesn't support mu units")}return{type:"kern",mode:n.mode,dimension:i.value}},htmlBuilder(e,t){return T.makeGlue(e.dimension,t)},mathmlBuilder(e,t){var n=qe(e.dimension,t);return new O.SpaceNode(n)}});Q({type:"lap",names:["\\mathllap","\\mathrlap","\\mathclap"],props:{numArgs:1,allowedInText:!0},handler:(e,t)=>{var{parser:n,funcName:r}=e,i=t[0];return{type:"lap",mode:n.mode,alignment:r.slice(5),body:i}},htmlBuilder:(e,t)=>{var n;e.alignment==="clap"?(n=T.makeSpan([],[ye(e.body,t)]),n=T.makeSpan(["inner"],[n],t)):n=T.makeSpan(["inner"],[ye(e.body,t)]);var r=T.makeSpan(["fix"],[]),i=T.makeSpan([e.alignment],[n,r],t),a=T.makeSpan(["strut"]);return a.style.height=K(i.height+i.depth),i.depth&&(a.style.verticalAlign=K(-i.depth)),i.children.unshift(a),i=T.makeSpan(["thinbox"],[i],t),T.makeSpan(["mord","vbox"],[i],t)},mathmlBuilder:(e,t)=>{var n=new O.MathNode("mpadded",[Se(e.body,t)]);if(e.alignment!=="rlap"){var r=e.alignment==="llap"?"-1":"-0.5";n.setAttribute("lspace",r+"width")}return n.setAttribute("width","0px"),n}});Q({type:"styling",names:["\\(","$"],props:{numArgs:0,allowedInText:!0,allowedInMath:!1},handler(e,t){var{funcName:n,parser:r}=e,i=r.mode;r.switchMode("math");var a=n==="\\("?"\\)":"$",o=r.parseExpression(!1,a);return r.expect(a),r.switchMode(i),{type:"styling",mode:r.mode,style:"text",body:o}}});Q({type:"text",names:["\\)","\\]"],props:{numArgs:0,allowedInText:!0,allowedInMath:!1},handler(e,t){throw new H("Mismatched "+e.funcName)}});var af=(e,t)=>{switch(t.style.size){case ie.DISPLAY.size:return e.display;case ie.TEXT.size:return e.text;case ie.SCRIPT.size:return e.script;case ie.SCRIPTSCRIPT.size:return e.scriptscript;default:return e.text}};Q({type:"mathchoice",names:["\\mathchoice"],props:{numArgs:4,primitive:!0},handler:(e,t)=>{var{parser:n}=e;return{type:"mathchoice",mode:n.mode,display:We(t[0]),text:We(t[1]),script:We(t[2]),scriptscript:We(t[3])}},htmlBuilder:(e,t)=>{var n=af(e,t),r=Qe(n,t,!1);return T.makeFragment(r)},mathmlBuilder:(e,t)=>{var n=af(e,t);return $r(n,t)}});var Jg=(e,t,n,r,i,a,o)=>{e=T.makeSpan([],[e]);var l=n&&te.isCharacterBox(n),s,u;if(t){var h=ye(t,r.havingStyle(i.sup()),r);u={elem:h,kern:Math.max(r.fontMetrics().bigOpSpacing1,r.fontMetrics().bigOpSpacing3-h.depth)}}if(n){var m=ye(n,r.havingStyle(i.sub()),r);s={elem:m,kern:Math.max(r.fontMetrics().bigOpSpacing2,r.fontMetrics().bigOpSpacing4-m.height)}}var p;if(u&&s){var f=r.fontMetrics().bigOpSpacing5+s.elem.height+s.elem.depth+s.kern+e.depth+o;p=T.makeVList({positionType:"bottom",positionData:f,children:[{type:"kern",size:r.fontMetrics().bigOpSpacing5},{type:"elem",elem:s.elem,marginLeft:K(-a)},{type:"kern",size:s.kern},{type:"elem",elem:e},{type:"kern",size:u.kern},{type:"elem",elem:u.elem,marginLeft:K(a)},{type:"kern",size:r.fontMetrics().bigOpSpacing5}]},r)}else if(s){var v=e.height-o;p=T.makeVList({positionType:"top",positionData:v,children:[{type:"kern",size:r.fontMetrics().bigOpSpacing5},{type:"elem",elem:s.elem,marginLeft:K(-a)},{type:"kern",size:s.kern},{type:"elem",elem:e}]},r)}else if(u){var $=e.depth+o;p=T.makeVList({positionType:"bottom",positionData:$,children:[{type:"elem",elem:e},{type:"kern",size:u.kern},{type:"elem",elem:u.elem,marginLeft:K(a)},{type:"kern",size:r.fontMetrics().bigOpSpacing5}]},r)}else return e;var k=[p];if(s&&a!==0&&!l){var g=T.makeSpan(["mspace"],[],r);g.style.marginRight=K(a),k.unshift(g)}return T.makeSpan(["mop","op-limits"],k,r)},ey=["\\smallint"],Hi=(e,t)=>{var n,r,i=!1,a;e.type==="supsub"?(n=e.sup,r=e.sub,a=de(e.base,"op"),i=!0):a=de(e,"op");var o=t.style,l=!1;o.size===ie.DISPLAY.size&&a.symbol&&!te.contains(ey,a.name)&&(l=!0);var s;if(a.symbol){var u=l?"Size2-Regular":"Size1-Regular",h="";if((a.name==="\\oiint"||a.name==="\\oiiint")&&(h=a.name.slice(1),a.name=h==="oiint"?"\\iint":"\\iiint"),s=T.makeSymbol(a.name,u,"math",t,["mop","op-symbol",l?"large-op":"small-op"]),h.length>0){var m=s.italic,p=T.staticSvg(h+"Size"+(l?"2":"1"),t);s=T.makeVList({positionType:"individualShift",children:[{type:"elem",elem:s,shift:0},{type:"elem",elem:p,shift:l?.08:0}]},t),a.name="\\"+h,s.classes.unshift("mop"),s.italic=m}}else if(a.body){var f=Qe(a.body,t,!0);f.length===1&&f[0]instanceof Kt?(s=f[0],s.classes[0]="mop"):s=T.makeSpan(["mop"],f,t)}else{for(var v=[],$=1;$<a.name.length;$++)v.push(T.mathsym(a.name[$],a.mode,t));s=T.makeSpan(["mop"],v,t)}var k=0,g=0;return(s instanceof Kt||a.name==="\\oiint"||a.name==="\\oiiint")&&!a.suppressBaseShift&&(k=(s.height-s.depth)/2-t.fontMetrics().axisHeight,g=s.italic),i?Jg(s,n,r,t,o,g,k):(k&&(s.style.position="relative",s.style.top=K(k)),s)},oo=(e,t)=>{var n;if(e.symbol)n=new Lt("mo",[Vt(e.name,e.mode)]),te.contains(ey,e.name)&&n.setAttribute("largeop","false");else if(e.body)n=new Lt("mo",St(e.body,t));else{n=new Lt("mi",[new ka(e.name.slice(1))]);var r=new Lt("mo",[Vt("⁡","text")]);e.parentIsSupSub?n=new Lt("mrow",[n,r]):n=Dg([n,r])}return n},L_={"∏":"\\prod","∐":"\\coprod","∑":"\\sum","⋀":"\\bigwedge","⋁":"\\bigvee","⋂":"\\bigcap","⋃":"\\bigcup","⨀":"\\bigodot","⨁":"\\bigoplus","⨂":"\\bigotimes","⨄":"\\biguplus","⨆":"\\bigsqcup"};Q({type:"op",names:["\\coprod","\\bigvee","\\bigwedge","\\biguplus","\\bigcap","\\bigcup","\\intop","\\prod","\\sum","\\bigotimes","\\bigoplus","\\bigodot","\\bigsqcup","\\smallint","∏","∐","∑","⋀","⋁","⋂","⋃","⨀","⨁","⨂","⨄","⨆"],props:{numArgs:0},handler:(e,t)=>{var{parser:n,funcName:r}=e,i=r;return i.length===1&&(i=L_[i]),{type:"op",mode:n.mode,limits:!0,parentIsSupSub:!1,symbol:!0,name:i}},htmlBuilder:Hi,mathmlBuilder:oo});Q({type:"op",names:["\\mathop"],props:{numArgs:1,primitive:!0},handler:(e,t)=>{var{parser:n}=e,r=t[0];return{type:"op",mode:n.mode,limits:!1,parentIsSupSub:!1,symbol:!1,body:We(r)}},htmlBuilder:Hi,mathmlBuilder:oo});var O_={"∫":"\\int","∬":"\\iint","∭":"\\iiint","∮":"\\oint","∯":"\\oiint","∰":"\\oiiint"};Q({type:"op",names:["\\arcsin","\\arccos","\\arctan","\\arctg","\\arcctg","\\arg","\\ch","\\cos","\\cosec","\\cosh","\\cot","\\cotg","\\coth","\\csc","\\ctg","\\cth","\\deg","\\dim","\\exp","\\hom","\\ker","\\lg","\\ln","\\log","\\sec","\\sin","\\sinh","\\sh","\\tan","\\tanh","\\tg","\\th"],props:{numArgs:0},handler(e){var{parser:t,funcName:n}=e;return{type:"op",mode:t.mode,limits:!1,parentIsSupSub:!1,symbol:!1,name:n}},htmlBuilder:Hi,mathmlBuilder:oo});Q({type:"op",names:["\\det","\\gcd","\\inf","\\lim","\\max","\\min","\\Pr","\\sup"],props:{numArgs:0},handler(e){var{parser:t,funcName:n}=e;return{type:"op",mode:t.mode,limits:!0,parentIsSupSub:!1,symbol:!1,name:n}},htmlBuilder:Hi,mathmlBuilder:oo});Q({type:"op",names:["\\int","\\iint","\\iiint","\\oint","\\oiint","\\oiiint","∫","∬","∭","∮","∯","∰"],props:{numArgs:0},handler(e){var{parser:t,funcName:n}=e,r=n;return r.length===1&&(r=O_[r]),{type:"op",mode:t.mode,limits:!1,parentIsSupSub:!1,symbol:!0,name:r}},htmlBuilder:Hi,mathmlBuilder:oo});var ty=(e,t)=>{var n,r,i=!1,a;e.type==="supsub"?(n=e.sup,r=e.sub,a=de(e.base,"operatorname"),i=!0):a=de(e,"operatorname");var o;if(a.body.length>0){for(var l=a.body.map(m=>{var p=m.text;return typeof p=="string"?{type:"textord",mode:m.mode,text:p}:m}),s=Qe(l,t.withFont("mathrm"),!0),u=0;u<s.length;u++){var h=s[u];h instanceof Kt&&(h.text=h.text.replace(/\u2212/,"-").replace(/\u2217/,"*"))}o=T.makeSpan(["mop"],s,t)}else o=T.makeSpan(["mop"],[],t);return i?Jg(o,n,r,t,t.style,0,0):o},j_=(e,t)=>{for(var n=St(e.body,t.withFont("mathrm")),r=!0,i=0;i<n.length;i++){var a=n[i];if(!(a instanceof O.SpaceNode))if(a instanceof O.MathNode)switch(a.type){case"mi":case"mn":case"ms":case"mspace":case"mtext":break;case"mo":{var o=a.children[0];a.children.length===1&&o instanceof O.TextNode?o.text=o.text.replace(/\u2212/,"-").replace(/\u2217/,"*"):r=!1;break}default:r=!1}else r=!1}if(r){var l=n.map(h=>h.toText()).join("");n=[new O.TextNode(l)]}var s=new O.MathNode("mi",n);s.setAttribute("mathvariant","normal");var u=new O.MathNode("mo",[Vt("⁡","text")]);return e.parentIsSupSub?new O.MathNode("mrow",[s,u]):O.newDocumentFragment([s,u])};Q({type:"operatorname",names:["\\operatorname@","\\operatornamewithlimits"],props:{numArgs:1},handler:(e,t)=>{var{parser:n,funcName:r}=e,i=t[0];return{type:"operatorname",mode:n.mode,body:We(i),alwaysHandleSupSub:r==="\\operatornamewithlimits",limits:!1,parentIsSupSub:!1}},htmlBuilder:ty,mathmlBuilder:j_});x("\\operatorname","\\@ifstar\\operatornamewithlimits\\operatorname@");Vr({type:"ordgroup",htmlBuilder(e,t){return e.semisimple?T.makeFragment(Qe(e.body,t,!1)):T.makeSpan(["mord"],Qe(e.body,t,!0),t)},mathmlBuilder(e,t){return $r(e.body,t,!0)}});Q({type:"overline",names:["\\overline"],props:{numArgs:1},handler(e,t){var{parser:n}=e,r=t[0];return{type:"overline",mode:n.mode,body:r}},htmlBuilder(e,t){var n=ye(e.body,t.havingCrampedStyle()),r=T.makeLineSpan("overline-line",t),i=t.fontMetrics().defaultRuleThickness,a=T.makeVList({positionType:"firstBaseline",children:[{type:"elem",elem:n},{type:"kern",size:3*i},{type:"elem",elem:r},{type:"kern",size:i}]},t);return T.makeSpan(["mord","overline"],[a],t)},mathmlBuilder(e,t){var n=new O.MathNode("mo",[new O.TextNode("‾")]);n.setAttribute("stretchy","true");var r=new O.MathNode("mover",[Se(e.body,t),n]);return r.setAttribute("accent","true"),r}});Q({type:"phantom",names:["\\phantom"],props:{numArgs:1,allowedInText:!0},handler:(e,t)=>{var{parser:n}=e,r=t[0];return{type:"phantom",mode:n.mode,body:We(r)}},htmlBuilder:(e,t)=>{var n=Qe(e.body,t.withPhantom(),!1);return T.makeFragment(n)},mathmlBuilder:(e,t)=>{var n=St(e.body,t);return new O.MathNode("mphantom",n)}});Q({type:"hphantom",names:["\\hphantom"],props:{numArgs:1,allowedInText:!0},handler:(e,t)=>{var{parser:n}=e,r=t[0];return{type:"hphantom",mode:n.mode,body:r}},htmlBuilder:(e,t)=>{var n=T.makeSpan([],[ye(e.body,t.withPhantom())]);if(n.height=0,n.depth=0,n.children)for(var r=0;r<n.children.length;r++)n.children[r].height=0,n.children[r].depth=0;return n=T.makeVList({positionType:"firstBaseline",children:[{type:"elem",elem:n}]},t),T.makeSpan(["mord"],[n],t)},mathmlBuilder:(e,t)=>{var n=St(We(e.body),t),r=new O.MathNode("mphantom",n),i=new O.MathNode("mpadded",[r]);return i.setAttribute("height","0px"),i.setAttribute("depth","0px"),i}});Q({type:"vphantom",names:["\\vphantom"],props:{numArgs:1,allowedInText:!0},handler:(e,t)=>{var{parser:n}=e,r=t[0];return{type:"vphantom",mode:n.mode,body:r}},htmlBuilder:(e,t)=>{var n=T.makeSpan(["inner"],[ye(e.body,t.withPhantom())]),r=T.makeSpan(["fix"],[]);return T.makeSpan(["mord","rlap"],[n,r],t)},mathmlBuilder:(e,t)=>{var n=St(We(e.body),t),r=new O.MathNode("mphantom",n),i=new O.MathNode("mpadded",[r]);return i.setAttribute("width","0px"),i}});Q({type:"raisebox",names:["\\raisebox"],props:{numArgs:2,argTypes:["size","hbox"],allowedInText:!0},handler(e,t){var{parser:n}=e,r=de(t[0],"size").value,i=t[1];return{type:"raisebox",mode:n.mode,dy:r,body:i}},htmlBuilder(e,t){var n=ye(e.body,t),r=qe(e.dy,t);return T.makeVList({positionType:"shift",positionData:-r,children:[{type:"elem",elem:n}]},t)},mathmlBuilder(e,t){var n=new O.MathNode("mpadded",[Se(e.body,t)]),r=e.dy.number+e.dy.unit;return n.setAttribute("voffset",r),n}});Q({type:"internal",names:["\\relax"],props:{numArgs:0,allowedInText:!0},handler(e){var{parser:t}=e;return{type:"internal",mode:t.mode}}});Q({type:"rule",names:["\\rule"],props:{numArgs:2,numOptionalArgs:1,allowedInText:!0,allowedInMath:!0,argTypes:["size","size","size"]},handler(e,t,n){var{parser:r}=e,i=n[0],a=de(t[0],"size"),o=de(t[1],"size");return{type:"rule",mode:r.mode,shift:i&&de(i,"size").value,width:a.value,height:o.value}},htmlBuilder(e,t){var n=T.makeSpan(["mord","rule"],[],t),r=qe(e.width,t),i=qe(e.height,t),a=e.shift?qe(e.shift,t):0;return n.style.borderRightWidth=K(r),n.style.borderTopWidth=K(i),n.style.bottom=K(a),n.width=r,n.height=i+a,n.depth=-a,n.maxFontSize=i*1.125*t.sizeMultiplier,n},mathmlBuilder(e,t){var n=qe(e.width,t),r=qe(e.height,t),i=e.shift?qe(e.shift,t):0,a=t.color&&t.getColor()||"black",o=new O.MathNode("mspace");o.setAttribute("mathbackground",a),o.setAttribute("width",K(n)),o.setAttribute("height",K(r));var l=new O.MathNode("mpadded",[o]);return i>=0?l.setAttribute("height",K(i)):(l.setAttribute("height",K(i)),l.setAttribute("depth",K(-i))),l.setAttribute("voffset",K(i)),l}});function ny(e,t,n){for(var r=Qe(e,t,!1),i=t.sizeMultiplier/n.sizeMultiplier,a=0;a<r.length;a++){var o=r[a].classes.indexOf("sizing");o<0?Array.prototype.push.apply(r[a].classes,t.sizingClasses(n)):r[a].classes[o+1]==="reset-size"+t.size&&(r[a].classes[o+1]="reset-size"+n.size),r[a].height*=i,r[a].depth*=i}return T.makeFragment(r)}var of=["\\tiny","\\sixptsize","\\scriptsize","\\footnotesize","\\small","\\normalsize","\\large","\\Large","\\LARGE","\\huge","\\Huge"],H_=(e,t)=>{var n=t.havingSize(e.size);return ny(e.body,n,t)};Q({type:"sizing",names:of,props:{numArgs:0,allowedInText:!0},handler:(e,t)=>{var{breakOnTokenText:n,funcName:r,parser:i}=e,a=i.parseExpression(!1,n);return{type:"sizing",mode:i.mode,size:of.indexOf(r)+1,body:a}},htmlBuilder:H_,mathmlBuilder:(e,t)=>{var n=t.havingSize(e.size),r=St(e.body,n),i=new O.MathNode("mstyle",r);return i.setAttribute("mathsize",K(n.sizeMultiplier)),i}});Q({type:"smash",names:["\\smash"],props:{numArgs:1,numOptionalArgs:1,allowedInText:!0},handler:(e,t,n)=>{var{parser:r}=e,i=!1,a=!1,o=n[0]&&de(n[0],"ordgroup");if(o)for(var l="",s=0;s<o.body.length;++s){var u=o.body[s];if(l=u.text,l==="t")i=!0;else if(l==="b")a=!0;else{i=!1,a=!1;break}}else i=!0,a=!0;var h=t[0];return{type:"smash",mode:r.mode,body:h,smashHeight:i,smashDepth:a}},htmlBuilder:(e,t)=>{var n=T.makeSpan([],[ye(e.body,t)]);if(!e.smashHeight&&!e.smashDepth)return n;if(e.smashHeight&&(n.height=0,n.children))for(var r=0;r<n.children.length;r++)n.children[r].height=0;if(e.smashDepth&&(n.depth=0,n.children))for(var i=0;i<n.children.length;i++)n.children[i].depth=0;var a=T.makeVList({positionType:"firstBaseline",children:[{type:"elem",elem:n}]},t);return T.makeSpan(["mord"],[a],t)},mathmlBuilder:(e,t)=>{var n=new O.MathNode("mpadded",[Se(e.body,t)]);return e.smashHeight&&n.setAttribute("height","0px"),e.smashDepth&&n.setAttribute("depth","0px"),n}});Q({type:"sqrt",names:["\\sqrt"],props:{numArgs:1,numOptionalArgs:1},handler(e,t,n){var{parser:r}=e,i=n[0],a=t[0];return{type:"sqrt",mode:r.mode,body:a,index:i}},htmlBuilder(e,t){var n=ye(e.body,t.havingCrampedStyle());n.height===0&&(n.height=t.fontMetrics().xHeight),n=T.wrapFragment(n,t);var r=t.fontMetrics(),i=r.defaultRuleThickness,a=i;t.style.id<ie.TEXT.id&&(a=t.fontMetrics().xHeight);var o=i+a/4,l=n.height+n.depth+o+i,{span:s,ruleWidth:u,advanceWidth:h}=qn.sqrtImage(l,t),m=s.height-u;m>n.height+n.depth+o&&(o=(o+m-n.height-n.depth)/2);var p=s.height-n.height-o-u;n.style.paddingLeft=K(h);var f=T.makeVList({positionType:"firstBaseline",children:[{type:"elem",elem:n,wrapperClasses:["svg-align"]},{type:"kern",size:-(n.height+p)},{type:"elem",elem:s},{type:"kern",size:u}]},t);if(e.index){var v=t.havingStyle(ie.SCRIPTSCRIPT),$=ye(e.index,v,t),k=.6*(f.height-f.depth),g=T.makeVList({positionType:"shift",positionData:-k,children:[{type:"elem",elem:$}]},t),y=T.makeSpan(["root"],[g]);return T.makeSpan(["mord","sqrt"],[y,f],t)}else return T.makeSpan(["mord","sqrt"],[f],t)},mathmlBuilder(e,t){var{body:n,index:r}=e;return r?new O.MathNode("mroot",[Se(n,t),Se(r,t)]):new O.MathNode("msqrt",[Se(n,t)])}});var lf={display:ie.DISPLAY,text:ie.TEXT,script:ie.SCRIPT,scriptscript:ie.SCRIPTSCRIPT};Q({type:"styling",names:["\\displaystyle","\\textstyle","\\scriptstyle","\\scriptscriptstyle"],props:{numArgs:0,allowedInText:!0,primitive:!0},handler(e,t){var{breakOnTokenText:n,funcName:r,parser:i}=e,a=i.parseExpression(!0,n),o=r.slice(1,r.length-5);return{type:"styling",mode:i.mode,style:o,body:a}},htmlBuilder(e,t){var n=lf[e.style],r=t.havingStyle(n).withFont("");return ny(e.body,r,t)},mathmlBuilder(e,t){var n=lf[e.style],r=t.havingStyle(n),i=St(e.body,r),a=new O.MathNode("mstyle",i),o={display:["0","true"],text:["0","false"],script:["1","false"],scriptscript:["2","false"]},l=o[e.style];return a.setAttribute("scriptlevel",l[0]),a.setAttribute("displaystyle",l[1]),a}});var W_=function(t,n){var r=t.base;if(r)if(r.type==="op"){var i=r.limits&&(n.style.size===ie.DISPLAY.size||r.alwaysHandleSupSub);return i?Hi:null}else if(r.type==="operatorname"){var a=r.alwaysHandleSupSub&&(n.style.size===ie.DISPLAY.size||r.limits);return a?ty:null}else{if(r.type==="accent")return te.isCharacterBox(r.base)?sc:null;if(r.type==="horizBrace"){var o=!t.sub;return o===r.isOver?Zg:null}else return null}else return null};Vr({type:"supsub",htmlBuilder(e,t){var n=W_(e,t);if(n)return n(e,t);var{base:r,sup:i,sub:a}=e,o=ye(r,t),l,s,u=t.fontMetrics(),h=0,m=0,p=r&&te.isCharacterBox(r);if(i){var f=t.havingStyle(t.style.sup());l=ye(i,f,t),p||(h=o.height-f.fontMetrics().supDrop*f.sizeMultiplier/t.sizeMultiplier)}if(a){var v=t.havingStyle(t.style.sub());s=ye(a,v,t),p||(m=o.depth+v.fontMetrics().subDrop*v.sizeMultiplier/t.sizeMultiplier)}var $;t.style===ie.DISPLAY?$=u.sup1:t.style.cramped?$=u.sup3:$=u.sup2;var k=t.sizeMultiplier,g=K(.5/u.ptPerEm/k),y=null;if(s){var w=e.base&&e.base.type==="op"&&e.base.name&&(e.base.name==="\\oiint"||e.base.name==="\\oiiint");(o instanceof Kt||w)&&(y=K(-o.italic))}var P;if(l&&s){h=Math.max(h,$,l.depth+.25*u.xHeight),m=Math.max(m,u.sub2);var F=u.defaultRuleThickness,D=4*F;if(h-l.depth-(s.height-m)<D){m=D-(h-l.depth)+s.height;var M=.8*u.xHeight-(h-l.depth);M>0&&(h+=M,m-=M)}var q=[{type:"elem",elem:s,shift:m,marginRight:g,marginLeft:y},{type:"elem",elem:l,shift:-h,marginRight:g}];P=T.makeVList({positionType:"individualShift",children:q},t)}else if(s){m=Math.max(m,u.sub1,s.height-.8*u.xHeight);var I=[{type:"elem",elem:s,marginLeft:y,marginRight:g}];P=T.makeVList({positionType:"shift",positionData:m,children:I},t)}else if(l)h=Math.max(h,$,l.depth+.25*u.xHeight),P=T.makeVList({positionType:"shift",positionData:-h,children:[{type:"elem",elem:l,marginRight:g}]},t);else throw new Error("supsub must have either sup or sub.");var V=z0(o,"right")||"mord";return T.makeSpan([V],[o,T.makeSpan(["msupsub"],[P])],t)},mathmlBuilder(e,t){var n=!1,r,i;e.base&&e.base.type==="horizBrace"&&(i=!!e.sup,i===e.base.isOver&&(n=!0,r=e.base.isOver)),e.base&&(e.base.type==="op"||e.base.type==="operatorname")&&(e.base.parentIsSupSub=!0);var a=[Se(e.base,t)];e.sub&&a.push(Se(e.sub,t)),e.sup&&a.push(Se(e.sup,t));var o;if(n)o=r?"mover":"munder";else if(e.sub)if(e.sup){var u=e.base;u&&u.type==="op"&&u.limits&&t.style===ie.DISPLAY||u&&u.type==="operatorname"&&u.alwaysHandleSupSub&&(t.style===ie.DISPLAY||u.limits)?o="munderover":o="msubsup"}else{var s=e.base;s&&s.type==="op"&&s.limits&&(t.style===ie.DISPLAY||s.alwaysHandleSupSub)||s&&s.type==="operatorname"&&s.alwaysHandleSupSub&&(s.limits||t.style===ie.DISPLAY)?o="munder":o="msub"}else{var l=e.base;l&&l.type==="op"&&l.limits&&(t.style===ie.DISPLAY||l.alwaysHandleSupSub)||l&&l.type==="operatorname"&&l.alwaysHandleSupSub&&(l.limits||t.style===ie.DISPLAY)?o="mover":o="msup"}return new O.MathNode(o,a)}});Vr({type:"atom",htmlBuilder(e,t){return T.mathsym(e.text,e.mode,t,["m"+e.family])},mathmlBuilder(e,t){var n=new O.MathNode("mo",[Vt(e.text,e.mode)]);if(e.family==="bin"){var r=oc(e,t);r==="bold-italic"&&n.setAttribute("mathvariant",r)}else e.family==="punct"?n.setAttribute("separator","true"):(e.family==="open"||e.family==="close")&&n.setAttribute("stretchy","false");return n}});var ry={mi:"italic",mn:"normal",mtext:"normal"};Vr({type:"mathord",htmlBuilder(e,t){return T.makeOrd(e,t,"mathord")},mathmlBuilder(e,t){var n=new O.MathNode("mi",[Vt(e.text,e.mode,t)]),r=oc(e,t)||"italic";return r!==ry[n.type]&&n.setAttribute("mathvariant",r),n}});Vr({type:"textord",htmlBuilder(e,t){return T.makeOrd(e,t,"textord")},mathmlBuilder(e,t){var n=Vt(e.text,e.mode,t),r=oc(e,t)||"normal",i;return e.mode==="text"?i=new O.MathNode("mtext",[n]):/[0-9]/.test(e.text)?i=new O.MathNode("mn",[n]):e.text==="\\prime"?i=new O.MathNode("mo",[n]):i=new O.MathNode("mi",[n]),r!==ry[i.type]&&i.setAttribute("mathvariant",r),i}});var pu={"\\nobreak":"nobreak","\\allowbreak":"allowbreak"},bu={" ":{},"\\ ":{},"~":{className:"nobreak"},"\\space":{},"\\nobreakspace":{className:"nobreak"}};Vr({type:"spacing",htmlBuilder(e,t){if(bu.hasOwnProperty(e.text)){var n=bu[e.text].className||"";if(e.mode==="text"){var r=T.makeOrd(e,t,"textord");return r.classes.push(n),r}else return T.makeSpan(["mspace",n],[T.mathsym(e.text,e.mode,t)],t)}else{if(pu.hasOwnProperty(e.text))return T.makeSpan(["mspace",pu[e.text]],[],t);throw new H('Unknown type of space "'+e.text+'"')}},mathmlBuilder(e,t){var n;if(bu.hasOwnProperty(e.text))n=new O.MathNode("mtext",[new O.TextNode(" ")]);else{if(pu.hasOwnProperty(e.text))return new O.MathNode("mspace");throw new H('Unknown type of space "'+e.text+'"')}return n}});var sf=()=>{var e=new O.MathNode("mtd",[]);return e.setAttribute("width","50%"),e};Vr({type:"tag",mathmlBuilder(e,t){var n=new O.MathNode("mtable",[new O.MathNode("mtr",[sf(),new O.MathNode("mtd",[$r(e.body,t)]),sf(),new O.MathNode("mtd",[$r(e.tag,t)])])]);return n.setAttribute("width","100%"),n}});var uf={"\\text":void 0,"\\textrm":"textrm","\\textsf":"textsf","\\texttt":"texttt","\\textnormal":"textrm"},hf={"\\textbf":"textbf","\\textmd":"textmd"},U_={"\\textit":"textit","\\textup":"textup"},cf=(e,t)=>{var n=e.font;if(n){if(uf[n])return t.withTextFontFamily(uf[n]);if(hf[n])return t.withTextFontWeight(hf[n]);if(n==="\\emph")return t.fontShape==="textit"?t.withTextFontShape("textup"):t.withTextFontShape("textit")}else return t;return t.withTextFontShape(U_[n])};Q({type:"text",names:["\\text","\\textrm","\\textsf","\\texttt","\\textnormal","\\textbf","\\textmd","\\textit","\\textup","\\emph"],props:{numArgs:1,argTypes:["text"],allowedInArgument:!0,allowedInText:!0},handler(e,t){var{parser:n,funcName:r}=e,i=t[0];return{type:"text",mode:n.mode,body:We(i),font:r}},htmlBuilder(e,t){var n=cf(e,t),r=Qe(e.body,n,!0);return T.makeSpan(["mord","text"],r,n)},mathmlBuilder(e,t){var n=cf(e,t);return $r(e.body,n)}});Q({type:"underline",names:["\\underline"],props:{numArgs:1,allowedInText:!0},handler(e,t){var{parser:n}=e;return{type:"underline",mode:n.mode,body:t[0]}},htmlBuilder(e,t){var n=ye(e.body,t),r=T.makeLineSpan("underline-line",t),i=t.fontMetrics().defaultRuleThickness,a=T.makeVList({positionType:"top",positionData:n.height,children:[{type:"kern",size:i},{type:"elem",elem:r},{type:"kern",size:3*i},{type:"elem",elem:n}]},t);return T.makeSpan(["mord","underline"],[a],t)},mathmlBuilder(e,t){var n=new O.MathNode("mo",[new O.TextNode("‾")]);n.setAttribute("stretchy","true");var r=new O.MathNode("munder",[Se(e.body,t),n]);return r.setAttribute("accentunder","true"),r}});Q({type:"vcenter",names:["\\vcenter"],props:{numArgs:1,argTypes:["original"],allowedInText:!1},handler(e,t){var{parser:n}=e;return{type:"vcenter",mode:n.mode,body:t[0]}},htmlBuilder(e,t){var n=ye(e.body,t),r=t.fontMetrics().axisHeight,i=.5*(n.height-r-(n.depth+r));return T.makeVList({positionType:"shift",positionData:i,children:[{type:"elem",elem:n}]},t)},mathmlBuilder(e,t){return new O.MathNode("mpadded",[Se(e.body,t)],["vcenter"])}});Q({type:"verb",names:["\\verb"],props:{numArgs:0,allowedInText:!0},handler(e,t,n){throw new H("\\verb ended by end of line instead of matching delimiter")},htmlBuilder(e,t){for(var n=mf(e),r=[],i=t.havingStyle(t.style.text()),a=0;a<n.length;a++){var o=n[a];o==="~"&&(o="\\textasciitilde"),r.push(T.makeSymbol(o,"Typewriter-Regular",e.mode,i,["mord","texttt"]))}return T.makeSpan(["mord","text"].concat(i.sizingClasses(t)),T.tryCombineChars(r),i)},mathmlBuilder(e,t){var n=new O.TextNode(mf(e)),r=new O.MathNode("mtext",[n]);return r.setAttribute("mathvariant","monospace"),r}});var mf=e=>e.body.replace(/ /g,e.star?"␣":" "),or=Eg,iy=`[ \r
	]`,X_="\\\\[a-zA-Z@]+",K_="\\\\[^\uD800-\uDFFF]",V_="("+X_+")"+iy+"*",G_=`\\\\(
|[ \r	]+
?)[ \r	]*`,F0="[̀-ͯ]",Q_=new RegExp(F0+"+$"),Y_="("+iy+"+)|"+(G_+"|")+"([!-\\[\\]-‧‪-퟿豈-￿]"+(F0+"*")+"|[\uD800-\uDBFF][\uDC00-\uDFFF]"+(F0+"*")+"|\\\\verb\\*([^]).*?\\4|\\\\verb([^*a-zA-Z]).*?\\5"+("|"+V_)+("|"+K_+")");class df{constructor(t,n){this.input=void 0,this.settings=void 0,this.tokenRegex=void 0,this.catcodes=void 0,this.input=t,this.settings=n,this.tokenRegex=new RegExp(Y_,"g"),this.catcodes={"%":14,"~":13}}setCatcode(t,n){this.catcodes[t]=n}lex(){var t=this.input,n=this.tokenRegex.lastIndex;if(n===t.length)return new Wt("EOF",new zt(this,n,n));var r=this.tokenRegex.exec(t);if(r===null||r.index!==n)throw new H("Unexpected character: '"+t[n]+"'",new Wt(t[n],new zt(this,n,n+1)));var i=r[6]||r[3]||(r[2]?"\\ ":" ");if(this.catcodes[i]===14){var a=t.indexOf(`
`,this.tokenRegex.lastIndex);return a===-1?(this.tokenRegex.lastIndex=t.length,this.settings.reportNonstrict("commentAtEnd","% comment has no terminating newline; LaTeX would fail because of commenting the end of math mode (e.g. $)")):this.tokenRegex.lastIndex=a+1,this.lex()}return new Wt(i,new zt(this,n,this.tokenRegex.lastIndex))}}class Z_{constructor(t,n){t===void 0&&(t={}),n===void 0&&(n={}),this.current=void 0,this.builtins=void 0,this.undefStack=void 0,this.current=n,this.builtins=t,this.undefStack=[]}beginGroup(){this.undefStack.push({})}endGroup(){if(this.undefStack.length===0)throw new H("Unbalanced namespace destruction: attempt to pop global namespace; please report this as a bug");var t=this.undefStack.pop();for(var n in t)t.hasOwnProperty(n)&&(t[n]==null?delete this.current[n]:this.current[n]=t[n])}endGroups(){for(;this.undefStack.length>0;)this.endGroup()}has(t){return this.current.hasOwnProperty(t)||this.builtins.hasOwnProperty(t)}get(t){return this.current.hasOwnProperty(t)?this.current[t]:this.builtins[t]}set(t,n,r){if(r===void 0&&(r=!1),r){for(var i=0;i<this.undefStack.length;i++)delete this.undefStack[i][t];this.undefStack.length>0&&(this.undefStack[this.undefStack.length-1][t]=n)}else{var a=this.undefStack[this.undefStack.length-1];a&&!a.hasOwnProperty(t)&&(a[t]=this.current[t])}n==null?delete this.current[t]:this.current[t]=n}}var J_=Kg;x("\\noexpand",function(e){var t=e.popToken();return e.isExpandable(t.text)&&(t.noexpand=!0,t.treatAsRelax=!0),{tokens:[t],numArgs:0}});x("\\expandafter",function(e){var t=e.popToken();return e.expandOnce(!0),{tokens:[t],numArgs:0}});x("\\@firstoftwo",function(e){var t=e.consumeArgs(2);return{tokens:t[0],numArgs:0}});x("\\@secondoftwo",function(e){var t=e.consumeArgs(2);return{tokens:t[1],numArgs:0}});x("\\@ifnextchar",function(e){var t=e.consumeArgs(3);e.consumeSpaces();var n=e.future();return t[0].length===1&&t[0][0].text===n.text?{tokens:t[1],numArgs:0}:{tokens:t[2],numArgs:0}});x("\\@ifstar","\\@ifnextchar *{\\@firstoftwo{#1}}");x("\\TextOrMath",function(e){var t=e.consumeArgs(2);return e.mode==="text"?{tokens:t[0],numArgs:0}:{tokens:t[1],numArgs:0}});var ff={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,a:10,A:10,b:11,B:11,c:12,C:12,d:13,D:13,e:14,E:14,f:15,F:15};x("\\char",function(e){var t=e.popToken(),n,r="";if(t.text==="'")n=8,t=e.popToken();else if(t.text==='"')n=16,t=e.popToken();else if(t.text==="`")if(t=e.popToken(),t.text[0]==="\\")r=t.text.charCodeAt(1);else{if(t.text==="EOF")throw new H("\\char` missing argument");r=t.text.charCodeAt(0)}else n=10;if(n){if(r=ff[t.text],r==null||r>=n)throw new H("Invalid base-"+n+" digit "+t.text);for(var i;(i=ff[e.future().text])!=null&&i<n;)r*=n,r+=i,e.popToken()}return"\\@char{"+r+"}"});var bc=(e,t,n)=>{var r=e.consumeArg().tokens;if(r.length!==1)throw new H("\\newcommand's first argument must be a macro name");var i=r[0].text,a=e.isDefined(i);if(a&&!t)throw new H("\\newcommand{"+i+"} attempting to redefine "+(i+"; use \\renewcommand"));if(!a&&!n)throw new H("\\renewcommand{"+i+"} when command "+i+" does not yet exist; use \\newcommand");var o=0;if(r=e.consumeArg().tokens,r.length===1&&r[0].text==="["){for(var l="",s=e.expandNextToken();s.text!=="]"&&s.text!=="EOF";)l+=s.text,s=e.expandNextToken();if(!l.match(/^\s*[0-9]+\s*$/))throw new H("Invalid number of arguments: "+l);o=parseInt(l),r=e.consumeArg().tokens}return e.macros.set(i,{tokens:r,numArgs:o}),""};x("\\newcommand",e=>bc(e,!1,!0));x("\\renewcommand",e=>bc(e,!0,!1));x("\\providecommand",e=>bc(e,!0,!0));x("\\message",e=>{var t=e.consumeArgs(1)[0];return console.log(t.reverse().map(n=>n.text).join("")),""});x("\\errmessage",e=>{var t=e.consumeArgs(1)[0];return console.error(t.reverse().map(n=>n.text).join("")),""});x("\\show",e=>{var t=e.popToken(),n=t.text;return console.log(t,e.macros.get(n),or[n],De.math[n],De.text[n]),""});x("\\bgroup","{");x("\\egroup","}");x("~","\\nobreakspace");x("\\lq","`");x("\\rq","'");x("\\aa","\\r a");x("\\AA","\\r A");x("\\textcopyright","\\html@mathml{\\textcircled{c}}{\\char`©}");x("\\copyright","\\TextOrMath{\\textcopyright}{\\text{\\textcopyright}}");x("\\textregistered","\\html@mathml{\\textcircled{\\scriptsize R}}{\\char`®}");x("ℬ","\\mathscr{B}");x("ℰ","\\mathscr{E}");x("ℱ","\\mathscr{F}");x("ℋ","\\mathscr{H}");x("ℐ","\\mathscr{I}");x("ℒ","\\mathscr{L}");x("ℳ","\\mathscr{M}");x("ℛ","\\mathscr{R}");x("ℭ","\\mathfrak{C}");x("ℌ","\\mathfrak{H}");x("ℨ","\\mathfrak{Z}");x("\\Bbbk","\\Bbb{k}");x("·","\\cdotp");x("\\llap","\\mathllap{\\textrm{#1}}");x("\\rlap","\\mathrlap{\\textrm{#1}}");x("\\clap","\\mathclap{\\textrm{#1}}");x("\\mathstrut","\\vphantom{(}");x("\\underbar","\\underline{\\text{#1}}");x("\\not",'\\html@mathml{\\mathrel{\\mathrlap\\@not}}{\\char"338}');x("\\neq","\\html@mathml{\\mathrel{\\not=}}{\\mathrel{\\char`≠}}");x("\\ne","\\neq");x("≠","\\neq");x("\\notin","\\html@mathml{\\mathrel{{\\in}\\mathllap{/\\mskip1mu}}}{\\mathrel{\\char`∉}}");x("∉","\\notin");x("≘","\\html@mathml{\\mathrel{=\\kern{-1em}\\raisebox{0.4em}{$\\scriptsize\\frown$}}}{\\mathrel{\\char`≘}}");x("≙","\\html@mathml{\\stackrel{\\tiny\\wedge}{=}}{\\mathrel{\\char`≘}}");x("≚","\\html@mathml{\\stackrel{\\tiny\\vee}{=}}{\\mathrel{\\char`≚}}");x("≛","\\html@mathml{\\stackrel{\\scriptsize\\star}{=}}{\\mathrel{\\char`≛}}");x("≝","\\html@mathml{\\stackrel{\\tiny\\mathrm{def}}{=}}{\\mathrel{\\char`≝}}");x("≞","\\html@mathml{\\stackrel{\\tiny\\mathrm{m}}{=}}{\\mathrel{\\char`≞}}");x("≟","\\html@mathml{\\stackrel{\\tiny?}{=}}{\\mathrel{\\char`≟}}");x("⟂","\\perp");x("‼","\\mathclose{!\\mkern-0.8mu!}");x("∌","\\notni");x("⌜","\\ulcorner");x("⌝","\\urcorner");x("⌞","\\llcorner");x("⌟","\\lrcorner");x("©","\\copyright");x("®","\\textregistered");x("️","\\textregistered");x("\\ulcorner",'\\html@mathml{\\@ulcorner}{\\mathop{\\char"231c}}');x("\\urcorner",'\\html@mathml{\\@urcorner}{\\mathop{\\char"231d}}');x("\\llcorner",'\\html@mathml{\\@llcorner}{\\mathop{\\char"231e}}');x("\\lrcorner",'\\html@mathml{\\@lrcorner}{\\mathop{\\char"231f}}');x("\\vdots","{\\varvdots\\rule{0pt}{15pt}}");x("⋮","\\vdots");x("\\varGamma","\\mathit{\\Gamma}");x("\\varDelta","\\mathit{\\Delta}");x("\\varTheta","\\mathit{\\Theta}");x("\\varLambda","\\mathit{\\Lambda}");x("\\varXi","\\mathit{\\Xi}");x("\\varPi","\\mathit{\\Pi}");x("\\varSigma","\\mathit{\\Sigma}");x("\\varUpsilon","\\mathit{\\Upsilon}");x("\\varPhi","\\mathit{\\Phi}");x("\\varPsi","\\mathit{\\Psi}");x("\\varOmega","\\mathit{\\Omega}");x("\\substack","\\begin{subarray}{c}#1\\end{subarray}");x("\\colon","\\nobreak\\mskip2mu\\mathpunct{}\\mathchoice{\\mkern-3mu}{\\mkern-3mu}{}{}{:}\\mskip6mu\\relax");x("\\boxed","\\fbox{$\\displaystyle{#1}$}");x("\\iff","\\DOTSB\\;\\Longleftrightarrow\\;");x("\\implies","\\DOTSB\\;\\Longrightarrow\\;");x("\\impliedby","\\DOTSB\\;\\Longleftarrow\\;");x("\\dddot","{\\overset{\\raisebox{-0.1ex}{\\normalsize ...}}{#1}}");x("\\ddddot","{\\overset{\\raisebox{-0.1ex}{\\normalsize ....}}{#1}}");var pf={",":"\\dotsc","\\not":"\\dotsb","+":"\\dotsb","=":"\\dotsb","<":"\\dotsb",">":"\\dotsb","-":"\\dotsb","*":"\\dotsb",":":"\\dotsb","\\DOTSB":"\\dotsb","\\coprod":"\\dotsb","\\bigvee":"\\dotsb","\\bigwedge":"\\dotsb","\\biguplus":"\\dotsb","\\bigcap":"\\dotsb","\\bigcup":"\\dotsb","\\prod":"\\dotsb","\\sum":"\\dotsb","\\bigotimes":"\\dotsb","\\bigoplus":"\\dotsb","\\bigodot":"\\dotsb","\\bigsqcup":"\\dotsb","\\And":"\\dotsb","\\longrightarrow":"\\dotsb","\\Longrightarrow":"\\dotsb","\\longleftarrow":"\\dotsb","\\Longleftarrow":"\\dotsb","\\longleftrightarrow":"\\dotsb","\\Longleftrightarrow":"\\dotsb","\\mapsto":"\\dotsb","\\longmapsto":"\\dotsb","\\hookrightarrow":"\\dotsb","\\doteq":"\\dotsb","\\mathbin":"\\dotsb","\\mathrel":"\\dotsb","\\relbar":"\\dotsb","\\Relbar":"\\dotsb","\\xrightarrow":"\\dotsb","\\xleftarrow":"\\dotsb","\\DOTSI":"\\dotsi","\\int":"\\dotsi","\\oint":"\\dotsi","\\iint":"\\dotsi","\\iiint":"\\dotsi","\\iiiint":"\\dotsi","\\idotsint":"\\dotsi","\\DOTSX":"\\dotsx"};x("\\dots",function(e){var t="\\dotso",n=e.expandAfterFuture().text;return n in pf?t=pf[n]:(n.slice(0,4)==="\\not"||n in De.math&&te.contains(["bin","rel"],De.math[n].group))&&(t="\\dotsb"),t});var gc={")":!0,"]":!0,"\\rbrack":!0,"\\}":!0,"\\rbrace":!0,"\\rangle":!0,"\\rceil":!0,"\\rfloor":!0,"\\rgroup":!0,"\\rmoustache":!0,"\\right":!0,"\\bigr":!0,"\\biggr":!0,"\\Bigr":!0,"\\Biggr":!0,$:!0,";":!0,".":!0,",":!0};x("\\dotso",function(e){var t=e.future().text;return t in gc?"\\ldots\\,":"\\ldots"});x("\\dotsc",function(e){var t=e.future().text;return t in gc&&t!==","?"\\ldots\\,":"\\ldots"});x("\\cdots",function(e){var t=e.future().text;return t in gc?"\\@cdots\\,":"\\@cdots"});x("\\dotsb","\\cdots");x("\\dotsm","\\cdots");x("\\dotsi","\\!\\cdots");x("\\dotsx","\\ldots\\,");x("\\DOTSI","\\relax");x("\\DOTSB","\\relax");x("\\DOTSX","\\relax");x("\\tmspace","\\TextOrMath{\\kern#1#3}{\\mskip#1#2}\\relax");x("\\,","\\tmspace+{3mu}{.1667em}");x("\\thinspace","\\,");x("\\>","\\mskip{4mu}");x("\\:","\\tmspace+{4mu}{.2222em}");x("\\medspace","\\:");x("\\;","\\tmspace+{5mu}{.2777em}");x("\\thickspace","\\;");x("\\!","\\tmspace-{3mu}{.1667em}");x("\\negthinspace","\\!");x("\\negmedspace","\\tmspace-{4mu}{.2222em}");x("\\negthickspace","\\tmspace-{5mu}{.277em}");x("\\enspace","\\kern.5em ");x("\\enskip","\\hskip.5em\\relax");x("\\quad","\\hskip1em\\relax");x("\\qquad","\\hskip2em\\relax");x("\\tag","\\@ifstar\\tag@literal\\tag@paren");x("\\tag@paren","\\tag@literal{({#1})}");x("\\tag@literal",e=>{if(e.macros.get("\\df@tag"))throw new H("Multiple \\tag");return"\\gdef\\df@tag{\\text{#1}}"});x("\\bmod","\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}\\mathbin{\\rm mod}\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}");x("\\pod","\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern8mu}{\\mkern8mu}{\\mkern8mu}(#1)");x("\\pmod","\\pod{{\\rm mod}\\mkern6mu#1}");x("\\mod","\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern12mu}{\\mkern12mu}{\\mkern12mu}{\\rm mod}\\,\\,#1");x("\\newline","\\\\\\relax");x("\\TeX","\\textrm{\\html@mathml{T\\kern-.1667em\\raisebox{-.5ex}{E}\\kern-.125emX}{TeX}}");var ay=K(bn["Main-Regular"][84][1]-.7*bn["Main-Regular"][65][1]);x("\\LaTeX","\\textrm{\\html@mathml{"+("L\\kern-.36em\\raisebox{"+ay+"}{\\scriptstyle A}")+"\\kern-.15em\\TeX}{LaTeX}}");x("\\KaTeX","\\textrm{\\html@mathml{"+("K\\kern-.17em\\raisebox{"+ay+"}{\\scriptstyle A}")+"\\kern-.15em\\TeX}{KaTeX}}");x("\\hspace","\\@ifstar\\@hspacer\\@hspace");x("\\@hspace","\\hskip #1\\relax");x("\\@hspacer","\\rule{0pt}{0pt}\\hskip #1\\relax");x("\\ordinarycolon",":");x("\\vcentcolon","\\mathrel{\\mathop\\ordinarycolon}");x("\\dblcolon",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-.9mu}\\vcentcolon}}{\\mathop{\\char"2237}}');x("\\coloneqq",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2254}}');x("\\Coloneqq",'\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2237\\char"3d}}');x("\\coloneq",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"3a\\char"2212}}');x("\\Coloneq",'\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"2237\\char"2212}}');x("\\eqqcolon",'\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2255}}');x("\\Eqqcolon",'\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"3d\\char"2237}}');x("\\eqcolon",'\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2239}}');x("\\Eqcolon",'\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"2212\\char"2237}}');x("\\colonapprox",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"3a\\char"2248}}');x("\\Colonapprox",'\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"2237\\char"2248}}');x("\\colonsim",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"3a\\char"223c}}');x("\\Colonsim",'\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"2237\\char"223c}}');x("∷","\\dblcolon");x("∹","\\eqcolon");x("≔","\\coloneqq");x("≕","\\eqqcolon");x("⩴","\\Coloneqq");x("\\ratio","\\vcentcolon");x("\\coloncolon","\\dblcolon");x("\\colonequals","\\coloneqq");x("\\coloncolonequals","\\Coloneqq");x("\\equalscolon","\\eqqcolon");x("\\equalscoloncolon","\\Eqqcolon");x("\\colonminus","\\coloneq");x("\\coloncolonminus","\\Coloneq");x("\\minuscolon","\\eqcolon");x("\\minuscoloncolon","\\Eqcolon");x("\\coloncolonapprox","\\Colonapprox");x("\\coloncolonsim","\\Colonsim");x("\\simcolon","\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\vcentcolon}");x("\\simcoloncolon","\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\dblcolon}");x("\\approxcolon","\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\vcentcolon}");x("\\approxcoloncolon","\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\dblcolon}");x("\\notni","\\html@mathml{\\not\\ni}{\\mathrel{\\char`∌}}");x("\\limsup","\\DOTSB\\operatorname*{lim\\,sup}");x("\\liminf","\\DOTSB\\operatorname*{lim\\,inf}");x("\\injlim","\\DOTSB\\operatorname*{inj\\,lim}");x("\\projlim","\\DOTSB\\operatorname*{proj\\,lim}");x("\\varlimsup","\\DOTSB\\operatorname*{\\overline{lim}}");x("\\varliminf","\\DOTSB\\operatorname*{\\underline{lim}}");x("\\varinjlim","\\DOTSB\\operatorname*{\\underrightarrow{lim}}");x("\\varprojlim","\\DOTSB\\operatorname*{\\underleftarrow{lim}}");x("\\gvertneqq","\\html@mathml{\\@gvertneqq}{≩}");x("\\lvertneqq","\\html@mathml{\\@lvertneqq}{≨}");x("\\ngeqq","\\html@mathml{\\@ngeqq}{≱}");x("\\ngeqslant","\\html@mathml{\\@ngeqslant}{≱}");x("\\nleqq","\\html@mathml{\\@nleqq}{≰}");x("\\nleqslant","\\html@mathml{\\@nleqslant}{≰}");x("\\nshortmid","\\html@mathml{\\@nshortmid}{∤}");x("\\nshortparallel","\\html@mathml{\\@nshortparallel}{∦}");x("\\nsubseteqq","\\html@mathml{\\@nsubseteqq}{⊈}");x("\\nsupseteqq","\\html@mathml{\\@nsupseteqq}{⊉}");x("\\varsubsetneq","\\html@mathml{\\@varsubsetneq}{⊊}");x("\\varsubsetneqq","\\html@mathml{\\@varsubsetneqq}{⫋}");x("\\varsupsetneq","\\html@mathml{\\@varsupsetneq}{⊋}");x("\\varsupsetneqq","\\html@mathml{\\@varsupsetneqq}{⫌}");x("\\imath","\\html@mathml{\\@imath}{ı}");x("\\jmath","\\html@mathml{\\@jmath}{ȷ}");x("\\llbracket","\\html@mathml{\\mathopen{[\\mkern-3.2mu[}}{\\mathopen{\\char`⟦}}");x("\\rrbracket","\\html@mathml{\\mathclose{]\\mkern-3.2mu]}}{\\mathclose{\\char`⟧}}");x("⟦","\\llbracket");x("⟧","\\rrbracket");x("\\lBrace","\\html@mathml{\\mathopen{\\{\\mkern-3.2mu[}}{\\mathopen{\\char`⦃}}");x("\\rBrace","\\html@mathml{\\mathclose{]\\mkern-3.2mu\\}}}{\\mathclose{\\char`⦄}}");x("⦃","\\lBrace");x("⦄","\\rBrace");x("\\minuso","\\mathbin{\\html@mathml{{\\mathrlap{\\mathchoice{\\kern{0.145em}}{\\kern{0.145em}}{\\kern{0.1015em}}{\\kern{0.0725em}}\\circ}{-}}}{\\char`⦵}}");x("⦵","\\minuso");x("\\darr","\\downarrow");x("\\dArr","\\Downarrow");x("\\Darr","\\Downarrow");x("\\lang","\\langle");x("\\rang","\\rangle");x("\\uarr","\\uparrow");x("\\uArr","\\Uparrow");x("\\Uarr","\\Uparrow");x("\\N","\\mathbb{N}");x("\\R","\\mathbb{R}");x("\\Z","\\mathbb{Z}");x("\\alef","\\aleph");x("\\alefsym","\\aleph");x("\\Alpha","\\mathrm{A}");x("\\Beta","\\mathrm{B}");x("\\bull","\\bullet");x("\\Chi","\\mathrm{X}");x("\\clubs","\\clubsuit");x("\\cnums","\\mathbb{C}");x("\\Complex","\\mathbb{C}");x("\\Dagger","\\ddagger");x("\\diamonds","\\diamondsuit");x("\\empty","\\emptyset");x("\\Epsilon","\\mathrm{E}");x("\\Eta","\\mathrm{H}");x("\\exist","\\exists");x("\\harr","\\leftrightarrow");x("\\hArr","\\Leftrightarrow");x("\\Harr","\\Leftrightarrow");x("\\hearts","\\heartsuit");x("\\image","\\Im");x("\\infin","\\infty");x("\\Iota","\\mathrm{I}");x("\\isin","\\in");x("\\Kappa","\\mathrm{K}");x("\\larr","\\leftarrow");x("\\lArr","\\Leftarrow");x("\\Larr","\\Leftarrow");x("\\lrarr","\\leftrightarrow");x("\\lrArr","\\Leftrightarrow");x("\\Lrarr","\\Leftrightarrow");x("\\Mu","\\mathrm{M}");x("\\natnums","\\mathbb{N}");x("\\Nu","\\mathrm{N}");x("\\Omicron","\\mathrm{O}");x("\\plusmn","\\pm");x("\\rarr","\\rightarrow");x("\\rArr","\\Rightarrow");x("\\Rarr","\\Rightarrow");x("\\real","\\Re");x("\\reals","\\mathbb{R}");x("\\Reals","\\mathbb{R}");x("\\Rho","\\mathrm{P}");x("\\sdot","\\cdot");x("\\sect","\\S");x("\\spades","\\spadesuit");x("\\sub","\\subset");x("\\sube","\\subseteq");x("\\supe","\\supseteq");x("\\Tau","\\mathrm{T}");x("\\thetasym","\\vartheta");x("\\weierp","\\wp");x("\\Zeta","\\mathrm{Z}");x("\\argmin","\\DOTSB\\operatorname*{arg\\,min}");x("\\argmax","\\DOTSB\\operatorname*{arg\\,max}");x("\\plim","\\DOTSB\\mathop{\\operatorname{plim}}\\limits");x("\\bra","\\mathinner{\\langle{#1}|}");x("\\ket","\\mathinner{|{#1}\\rangle}");x("\\braket","\\mathinner{\\langle{#1}\\rangle}");x("\\Bra","\\left\\langle#1\\right|");x("\\Ket","\\left|#1\\right\\rangle");var oy=e=>t=>{var n=t.consumeArg().tokens,r=t.consumeArg().tokens,i=t.consumeArg().tokens,a=t.consumeArg().tokens,o=t.macros.get("|"),l=t.macros.get("\\|");t.macros.beginGroup();var s=m=>p=>{e&&(p.macros.set("|",o),i.length&&p.macros.set("\\|",l));var f=m;if(!m&&i.length){var v=p.future();v.text==="|"&&(p.popToken(),f=!0)}return{tokens:f?i:r,numArgs:0}};t.macros.set("|",s(!1)),i.length&&t.macros.set("\\|",s(!0));var u=t.consumeArg().tokens,h=t.expandTokens([...a,...u,...n]);return t.macros.endGroup(),{tokens:h.reverse(),numArgs:0}};x("\\bra@ket",oy(!1));x("\\bra@set",oy(!0));x("\\Braket","\\bra@ket{\\left\\langle}{\\,\\middle\\vert\\,}{\\,\\middle\\vert\\,}{\\right\\rangle}");x("\\Set","\\bra@set{\\left\\{\\:}{\\;\\middle\\vert\\;}{\\;\\middle\\Vert\\;}{\\:\\right\\}}");x("\\set","\\bra@set{\\{\\,}{\\mid}{}{\\,\\}}");x("\\angln","{\\angl n}");x("\\blue","\\textcolor{##6495ed}{#1}");x("\\orange","\\textcolor{##ffa500}{#1}");x("\\pink","\\textcolor{##ff00af}{#1}");x("\\red","\\textcolor{##df0030}{#1}");x("\\green","\\textcolor{##28ae7b}{#1}");x("\\gray","\\textcolor{gray}{#1}");x("\\purple","\\textcolor{##9d38bd}{#1}");x("\\blueA","\\textcolor{##ccfaff}{#1}");x("\\blueB","\\textcolor{##80f6ff}{#1}");x("\\blueC","\\textcolor{##63d9ea}{#1}");x("\\blueD","\\textcolor{##11accd}{#1}");x("\\blueE","\\textcolor{##0c7f99}{#1}");x("\\tealA","\\textcolor{##94fff5}{#1}");x("\\tealB","\\textcolor{##26edd5}{#1}");x("\\tealC","\\textcolor{##01d1c1}{#1}");x("\\tealD","\\textcolor{##01a995}{#1}");x("\\tealE","\\textcolor{##208170}{#1}");x("\\greenA","\\textcolor{##b6ffb0}{#1}");x("\\greenB","\\textcolor{##8af281}{#1}");x("\\greenC","\\textcolor{##74cf70}{#1}");x("\\greenD","\\textcolor{##1fab54}{#1}");x("\\greenE","\\textcolor{##0d923f}{#1}");x("\\goldA","\\textcolor{##ffd0a9}{#1}");x("\\goldB","\\textcolor{##ffbb71}{#1}");x("\\goldC","\\textcolor{##ff9c39}{#1}");x("\\goldD","\\textcolor{##e07d10}{#1}");x("\\goldE","\\textcolor{##a75a05}{#1}");x("\\redA","\\textcolor{##fca9a9}{#1}");x("\\redB","\\textcolor{##ff8482}{#1}");x("\\redC","\\textcolor{##f9685d}{#1}");x("\\redD","\\textcolor{##e84d39}{#1}");x("\\redE","\\textcolor{##bc2612}{#1}");x("\\maroonA","\\textcolor{##ffbde0}{#1}");x("\\maroonB","\\textcolor{##ff92c6}{#1}");x("\\maroonC","\\textcolor{##ed5fa6}{#1}");x("\\maroonD","\\textcolor{##ca337c}{#1}");x("\\maroonE","\\textcolor{##9e034e}{#1}");x("\\purpleA","\\textcolor{##ddd7ff}{#1}");x("\\purpleB","\\textcolor{##c6b9fc}{#1}");x("\\purpleC","\\textcolor{##aa87ff}{#1}");x("\\purpleD","\\textcolor{##7854ab}{#1}");x("\\purpleE","\\textcolor{##543b78}{#1}");x("\\mintA","\\textcolor{##f5f9e8}{#1}");x("\\mintB","\\textcolor{##edf2df}{#1}");x("\\mintC","\\textcolor{##e0e5cc}{#1}");x("\\grayA","\\textcolor{##f6f7f7}{#1}");x("\\grayB","\\textcolor{##f0f1f2}{#1}");x("\\grayC","\\textcolor{##e3e5e6}{#1}");x("\\grayD","\\textcolor{##d6d8da}{#1}");x("\\grayE","\\textcolor{##babec2}{#1}");x("\\grayF","\\textcolor{##888d93}{#1}");x("\\grayG","\\textcolor{##626569}{#1}");x("\\grayH","\\textcolor{##3b3e40}{#1}");x("\\grayI","\\textcolor{##21242c}{#1}");x("\\kaBlue","\\textcolor{##314453}{#1}");x("\\kaGreen","\\textcolor{##71B307}{#1}");var ly={"^":!0,_:!0,"\\limits":!0,"\\nolimits":!0};class e9{constructor(t,n,r){this.settings=void 0,this.expansionCount=void 0,this.lexer=void 0,this.macros=void 0,this.stack=void 0,this.mode=void 0,this.settings=n,this.expansionCount=0,this.feed(t),this.macros=new Z_(J_,n.macros),this.mode=r,this.stack=[]}feed(t){this.lexer=new df(t,this.settings)}switchMode(t){this.mode=t}beginGroup(){this.macros.beginGroup()}endGroup(){this.macros.endGroup()}endGroups(){this.macros.endGroups()}future(){return this.stack.length===0&&this.pushToken(this.lexer.lex()),this.stack[this.stack.length-1]}popToken(){return this.future(),this.stack.pop()}pushToken(t){this.stack.push(t)}pushTokens(t){this.stack.push(...t)}scanArgument(t){var n,r,i;if(t){if(this.consumeSpaces(),this.future().text!=="[")return null;n=this.popToken(),{tokens:i,end:r}=this.consumeArg(["]"])}else({tokens:i,start:n,end:r}=this.consumeArg());return this.pushToken(new Wt("EOF",r.loc)),this.pushTokens(i),n.range(r,"")}consumeSpaces(){for(;;){var t=this.future();if(t.text===" ")this.stack.pop();else break}}consumeArg(t){var n=[],r=t&&t.length>0;r||this.consumeSpaces();var i=this.future(),a,o=0,l=0;do{if(a=this.popToken(),n.push(a),a.text==="{")++o;else if(a.text==="}"){if(--o,o===-1)throw new H("Extra }",a)}else if(a.text==="EOF")throw new H("Unexpected end of input in a macro argument, expected '"+(t&&r?t[l]:"}")+"'",a);if(t&&r)if((o===0||o===1&&t[l]==="{")&&a.text===t[l]){if(++l,l===t.length){n.splice(-l,l);break}}else l=0}while(o!==0||r);return i.text==="{"&&n[n.length-1].text==="}"&&(n.pop(),n.shift()),n.reverse(),{tokens:n,start:i,end:a}}consumeArgs(t,n){if(n){if(n.length!==t+1)throw new H("The length of delimiters doesn't match the number of args!");for(var r=n[0],i=0;i<r.length;i++){var a=this.popToken();if(r[i]!==a.text)throw new H("Use of the macro doesn't match its definition",a)}}for(var o=[],l=0;l<t;l++)o.push(this.consumeArg(n&&n[l+1]).tokens);return o}countExpansion(t){if(this.expansionCount+=t,this.expansionCount>this.settings.maxExpand)throw new H("Too many expansions: infinite loop or need to increase maxExpand setting")}expandOnce(t){var n=this.popToken(),r=n.text,i=n.noexpand?null:this._getExpansion(r);if(i==null||t&&i.unexpandable){if(t&&i==null&&r[0]==="\\"&&!this.isDefined(r))throw new H("Undefined control sequence: "+r);return this.pushToken(n),!1}this.countExpansion(1);var a=i.tokens,o=this.consumeArgs(i.numArgs,i.delimiters);if(i.numArgs){a=a.slice();for(var l=a.length-1;l>=0;--l){var s=a[l];if(s.text==="#"){if(l===0)throw new H("Incomplete placeholder at end of macro body",s);if(s=a[--l],s.text==="#")a.splice(l+1,1);else if(/^[1-9]$/.test(s.text))a.splice(l,2,...o[+s.text-1]);else throw new H("Not a valid argument number",s)}}}return this.pushTokens(a),a.length}expandAfterFuture(){return this.expandOnce(),this.future()}expandNextToken(){for(;;)if(this.expandOnce()===!1){var t=this.stack.pop();return t.treatAsRelax&&(t.text="\\relax"),t}throw new Error}expandMacro(t){return this.macros.has(t)?this.expandTokens([new Wt(t)]):void 0}expandTokens(t){var n=[],r=this.stack.length;for(this.pushTokens(t);this.stack.length>r;)if(this.expandOnce(!0)===!1){var i=this.stack.pop();i.treatAsRelax&&(i.noexpand=!1,i.treatAsRelax=!1),n.push(i)}return this.countExpansion(n.length),n}expandMacroAsText(t){var n=this.expandMacro(t);return n&&n.map(r=>r.text).join("")}_getExpansion(t){var n=this.macros.get(t);if(n==null)return n;if(t.length===1){var r=this.lexer.catcodes[t];if(r!=null&&r!==13)return}var i=typeof n=="function"?n(this):n;if(typeof i=="string"){var a=0;if(i.indexOf("#")!==-1)for(var o=i.replace(/##/g,"");o.indexOf("#"+(a+1))!==-1;)++a;for(var l=new df(i,this.settings),s=[],u=l.lex();u.text!=="EOF";)s.push(u),u=l.lex();s.reverse();var h={tokens:s,numArgs:a};return h}return i}isDefined(t){return this.macros.has(t)||or.hasOwnProperty(t)||De.math.hasOwnProperty(t)||De.text.hasOwnProperty(t)||ly.hasOwnProperty(t)}isExpandable(t){var n=this.macros.get(t);return n!=null?typeof n=="string"||typeof n=="function"||!n.unexpandable:or.hasOwnProperty(t)&&!or[t].primitive}}var bf=/^[₊₋₌₍₎₀₁₂₃₄₅₆₇₈₉ₐₑₕᵢⱼₖₗₘₙₒₚᵣₛₜᵤᵥₓᵦᵧᵨᵩᵪ]/,qo=Object.freeze({"₊":"+","₋":"-","₌":"=","₍":"(","₎":")","₀":"0","₁":"1","₂":"2","₃":"3","₄":"4","₅":"5","₆":"6","₇":"7","₈":"8","₉":"9","ₐ":"a","ₑ":"e","ₕ":"h","ᵢ":"i","ⱼ":"j","ₖ":"k","ₗ":"l","ₘ":"m","ₙ":"n","ₒ":"o","ₚ":"p","ᵣ":"r","ₛ":"s","ₜ":"t","ᵤ":"u","ᵥ":"v","ₓ":"x","ᵦ":"β","ᵧ":"γ","ᵨ":"ρ","ᵩ":"ϕ","ᵪ":"χ","⁺":"+","⁻":"-","⁼":"=","⁽":"(","⁾":")","⁰":"0","¹":"1","²":"2","³":"3","⁴":"4","⁵":"5","⁶":"6","⁷":"7","⁸":"8","⁹":"9","ᴬ":"A","ᴮ":"B","ᴰ":"D","ᴱ":"E","ᴳ":"G","ᴴ":"H","ᴵ":"I","ᴶ":"J","ᴷ":"K","ᴸ":"L","ᴹ":"M","ᴺ":"N","ᴼ":"O","ᴾ":"P","ᴿ":"R","ᵀ":"T","ᵁ":"U","ⱽ":"V","ᵂ":"W","ᵃ":"a","ᵇ":"b","ᶜ":"c","ᵈ":"d","ᵉ":"e","ᶠ":"f","ᵍ":"g",ʰ:"h","ⁱ":"i",ʲ:"j","ᵏ":"k",ˡ:"l","ᵐ":"m",ⁿ:"n","ᵒ":"o","ᵖ":"p",ʳ:"r",ˢ:"s","ᵗ":"t","ᵘ":"u","ᵛ":"v",ʷ:"w",ˣ:"x",ʸ:"y","ᶻ":"z","ᵝ":"β","ᵞ":"γ","ᵟ":"δ","ᵠ":"ϕ","ᵡ":"χ","ᶿ":"θ"}),gu={"́":{text:"\\'",math:"\\acute"},"̀":{text:"\\`",math:"\\grave"},"̈":{text:'\\"',math:"\\ddot"},"̃":{text:"\\~",math:"\\tilde"},"̄":{text:"\\=",math:"\\bar"},"̆":{text:"\\u",math:"\\breve"},"̌":{text:"\\v",math:"\\check"},"̂":{text:"\\^",math:"\\hat"},"̇":{text:"\\.",math:"\\dot"},"̊":{text:"\\r",math:"\\mathring"},"̋":{text:"\\H"},"̧":{text:"\\c"}},gf={á:"á",à:"à",ä:"ä",ǟ:"ǟ",ã:"ã",ā:"ā",ă:"ă",ắ:"ắ",ằ:"ằ",ẵ:"ẵ",ǎ:"ǎ",â:"â",ấ:"ấ",ầ:"ầ",ẫ:"ẫ",ȧ:"ȧ",ǡ:"ǡ",å:"å",ǻ:"ǻ",ḃ:"ḃ",ć:"ć",ḉ:"ḉ",č:"č",ĉ:"ĉ",ċ:"ċ",ç:"ç",ď:"ď",ḋ:"ḋ",ḑ:"ḑ",é:"é",è:"è",ë:"ë",ẽ:"ẽ",ē:"ē",ḗ:"ḗ",ḕ:"ḕ",ĕ:"ĕ",ḝ:"ḝ",ě:"ě",ê:"ê",ế:"ế",ề:"ề",ễ:"ễ",ė:"ė",ȩ:"ȩ",ḟ:"ḟ",ǵ:"ǵ",ḡ:"ḡ",ğ:"ğ",ǧ:"ǧ",ĝ:"ĝ",ġ:"ġ",ģ:"ģ",ḧ:"ḧ",ȟ:"ȟ",ĥ:"ĥ",ḣ:"ḣ",ḩ:"ḩ",í:"í",ì:"ì",ï:"ï",ḯ:"ḯ",ĩ:"ĩ",ī:"ī",ĭ:"ĭ",ǐ:"ǐ",î:"î",ǰ:"ǰ",ĵ:"ĵ",ḱ:"ḱ",ǩ:"ǩ",ķ:"ķ",ĺ:"ĺ",ľ:"ľ",ļ:"ļ",ḿ:"ḿ",ṁ:"ṁ",ń:"ń",ǹ:"ǹ",ñ:"ñ",ň:"ň",ṅ:"ṅ",ņ:"ņ",ó:"ó",ò:"ò",ö:"ö",ȫ:"ȫ",õ:"õ",ṍ:"ṍ",ṏ:"ṏ",ȭ:"ȭ",ō:"ō",ṓ:"ṓ",ṑ:"ṑ",ŏ:"ŏ",ǒ:"ǒ",ô:"ô",ố:"ố",ồ:"ồ",ỗ:"ỗ",ȯ:"ȯ",ȱ:"ȱ",ő:"ő",ṕ:"ṕ",ṗ:"ṗ",ŕ:"ŕ",ř:"ř",ṙ:"ṙ",ŗ:"ŗ",ś:"ś",ṥ:"ṥ",š:"š",ṧ:"ṧ",ŝ:"ŝ",ṡ:"ṡ",ş:"ş",ẗ:"ẗ",ť:"ť",ṫ:"ṫ",ţ:"ţ",ú:"ú",ù:"ù",ü:"ü",ǘ:"ǘ",ǜ:"ǜ",ǖ:"ǖ",ǚ:"ǚ",ũ:"ũ",ṹ:"ṹ",ū:"ū",ṻ:"ṻ",ŭ:"ŭ",ǔ:"ǔ",û:"û",ů:"ů",ű:"ű",ṽ:"ṽ",ẃ:"ẃ",ẁ:"ẁ",ẅ:"ẅ",ŵ:"ŵ",ẇ:"ẇ",ẘ:"ẘ",ẍ:"ẍ",ẋ:"ẋ",ý:"ý",ỳ:"ỳ",ÿ:"ÿ",ỹ:"ỹ",ȳ:"ȳ",ŷ:"ŷ",ẏ:"ẏ",ẙ:"ẙ",ź:"ź",ž:"ž",ẑ:"ẑ",ż:"ż",Á:"Á",À:"À",Ä:"Ä",Ǟ:"Ǟ",Ã:"Ã",Ā:"Ā",Ă:"Ă",Ắ:"Ắ",Ằ:"Ằ",Ẵ:"Ẵ",Ǎ:"Ǎ",Â:"Â",Ấ:"Ấ",Ầ:"Ầ",Ẫ:"Ẫ",Ȧ:"Ȧ",Ǡ:"Ǡ",Å:"Å",Ǻ:"Ǻ",Ḃ:"Ḃ",Ć:"Ć",Ḉ:"Ḉ",Č:"Č",Ĉ:"Ĉ",Ċ:"Ċ",Ç:"Ç",Ď:"Ď",Ḋ:"Ḋ",Ḑ:"Ḑ",É:"É",È:"È",Ë:"Ë",Ẽ:"Ẽ",Ē:"Ē",Ḗ:"Ḗ",Ḕ:"Ḕ",Ĕ:"Ĕ",Ḝ:"Ḝ",Ě:"Ě",Ê:"Ê",Ế:"Ế",Ề:"Ề",Ễ:"Ễ",Ė:"Ė",Ȩ:"Ȩ",Ḟ:"Ḟ",Ǵ:"Ǵ",Ḡ:"Ḡ",Ğ:"Ğ",Ǧ:"Ǧ",Ĝ:"Ĝ",Ġ:"Ġ",Ģ:"Ģ",Ḧ:"Ḧ",Ȟ:"Ȟ",Ĥ:"Ĥ",Ḣ:"Ḣ",Ḩ:"Ḩ",Í:"Í",Ì:"Ì",Ï:"Ï",Ḯ:"Ḯ",Ĩ:"Ĩ",Ī:"Ī",Ĭ:"Ĭ",Ǐ:"Ǐ",Î:"Î",İ:"İ",Ĵ:"Ĵ",Ḱ:"Ḱ",Ǩ:"Ǩ",Ķ:"Ķ",Ĺ:"Ĺ",Ľ:"Ľ",Ļ:"Ļ",Ḿ:"Ḿ",Ṁ:"Ṁ",Ń:"Ń",Ǹ:"Ǹ",Ñ:"Ñ",Ň:"Ň",Ṅ:"Ṅ",Ņ:"Ņ",Ó:"Ó",Ò:"Ò",Ö:"Ö",Ȫ:"Ȫ",Õ:"Õ",Ṍ:"Ṍ",Ṏ:"Ṏ",Ȭ:"Ȭ",Ō:"Ō",Ṓ:"Ṓ",Ṑ:"Ṑ",Ŏ:"Ŏ",Ǒ:"Ǒ",Ô:"Ô",Ố:"Ố",Ồ:"Ồ",Ỗ:"Ỗ",Ȯ:"Ȯ",Ȱ:"Ȱ",Ő:"Ő",Ṕ:"Ṕ",Ṗ:"Ṗ",Ŕ:"Ŕ",Ř:"Ř",Ṙ:"Ṙ",Ŗ:"Ŗ",Ś:"Ś",Ṥ:"Ṥ",Š:"Š",Ṧ:"Ṧ",Ŝ:"Ŝ",Ṡ:"Ṡ",Ş:"Ş",Ť:"Ť",Ṫ:"Ṫ",Ţ:"Ţ",Ú:"Ú",Ù:"Ù",Ü:"Ü",Ǘ:"Ǘ",Ǜ:"Ǜ",Ǖ:"Ǖ",Ǚ:"Ǚ",Ũ:"Ũ",Ṹ:"Ṹ",Ū:"Ū",Ṻ:"Ṻ",Ŭ:"Ŭ",Ǔ:"Ǔ",Û:"Û",Ů:"Ů",Ű:"Ű",Ṽ:"Ṽ",Ẃ:"Ẃ",Ẁ:"Ẁ",Ẅ:"Ẅ",Ŵ:"Ŵ",Ẇ:"Ẇ",Ẍ:"Ẍ",Ẋ:"Ẋ",Ý:"Ý",Ỳ:"Ỳ",Ÿ:"Ÿ",Ỹ:"Ỹ",Ȳ:"Ȳ",Ŷ:"Ŷ",Ẏ:"Ẏ",Ź:"Ź",Ž:"Ž",Ẑ:"Ẑ",Ż:"Ż",ά:"ά",ὰ:"ὰ",ᾱ:"ᾱ",ᾰ:"ᾰ",έ:"έ",ὲ:"ὲ",ή:"ή",ὴ:"ὴ",ί:"ί",ὶ:"ὶ",ϊ:"ϊ",ΐ:"ΐ",ῒ:"ῒ",ῑ:"ῑ",ῐ:"ῐ",ό:"ό",ὸ:"ὸ",ύ:"ύ",ὺ:"ὺ",ϋ:"ϋ",ΰ:"ΰ",ῢ:"ῢ",ῡ:"ῡ",ῠ:"ῠ",ώ:"ώ",ὼ:"ὼ",Ύ:"Ύ",Ὺ:"Ὺ",Ϋ:"Ϋ",Ῡ:"Ῡ",Ῠ:"Ῠ",Ώ:"Ώ",Ὼ:"Ὼ"};class fs{constructor(t,n){this.mode=void 0,this.gullet=void 0,this.settings=void 0,this.leftrightDepth=void 0,this.nextToken=void 0,this.mode="math",this.gullet=new e9(t,n,this.mode),this.settings=n,this.leftrightDepth=0}expect(t,n){if(n===void 0&&(n=!0),this.fetch().text!==t)throw new H("Expected '"+t+"', got '"+this.fetch().text+"'",this.fetch());n&&this.consume()}consume(){this.nextToken=null}fetch(){return this.nextToken==null&&(this.nextToken=this.gullet.expandNextToken()),this.nextToken}switchMode(t){this.mode=t,this.gullet.switchMode(t)}parse(){this.settings.globalGroup||this.gullet.beginGroup(),this.settings.colorIsTextColor&&this.gullet.macros.set("\\color","\\textcolor");try{var t=this.parseExpression(!1);return this.expect("EOF"),this.settings.globalGroup||this.gullet.endGroup(),t}finally{this.gullet.endGroups()}}subparse(t){var n=this.nextToken;this.consume(),this.gullet.pushToken(new Wt("}")),this.gullet.pushTokens(t);var r=this.parseExpression(!1);return this.expect("}"),this.nextToken=n,r}parseExpression(t,n){for(var r=[];;){this.mode==="math"&&this.consumeSpaces();var i=this.fetch();if(fs.endOfExpression.indexOf(i.text)!==-1||n&&i.text===n||t&&or[i.text]&&or[i.text].infix)break;var a=this.parseAtom(n);if(a){if(a.type==="internal")continue}else break;r.push(a)}return this.mode==="text"&&this.formLigatures(r),this.handleInfixNodes(r)}handleInfixNodes(t){for(var n=-1,r,i=0;i<t.length;i++)if(t[i].type==="infix"){if(n!==-1)throw new H("only one infix operator per group",t[i].token);n=i,r=t[i].replaceWith}if(n!==-1&&r){var a,o,l=t.slice(0,n),s=t.slice(n+1);l.length===1&&l[0].type==="ordgroup"?a=l[0]:a={type:"ordgroup",mode:this.mode,body:l},s.length===1&&s[0].type==="ordgroup"?o=s[0]:o={type:"ordgroup",mode:this.mode,body:s};var u;return r==="\\\\abovefrac"?u=this.callFunction(r,[a,t[n],o],[]):u=this.callFunction(r,[a,o],[]),[u]}else return t}handleSupSubscript(t){var n=this.fetch(),r=n.text;this.consume(),this.consumeSpaces();var i=this.parseGroup(t);if(!i)throw new H("Expected group after '"+r+"'",n);return i}formatUnsupportedCmd(t){for(var n=[],r=0;r<t.length;r++)n.push({type:"textord",mode:"text",text:t[r]});var i={type:"text",mode:this.mode,body:n},a={type:"color",mode:this.mode,color:this.settings.errorColor,body:[i]};return a}parseAtom(t){var n=this.parseGroup("atom",t);if(this.mode==="text")return n;for(var r,i;;){this.consumeSpaces();var a=this.fetch();if(a.text==="\\limits"||a.text==="\\nolimits"){if(n&&n.type==="op"){var o=a.text==="\\limits";n.limits=o,n.alwaysHandleSupSub=!0}else if(n&&n.type==="operatorname")n.alwaysHandleSupSub&&(n.limits=a.text==="\\limits");else throw new H("Limit controls must follow a math operator",a);this.consume()}else if(a.text==="^"){if(r)throw new H("Double superscript",a);r=this.handleSupSubscript("superscript")}else if(a.text==="_"){if(i)throw new H("Double subscript",a);i=this.handleSupSubscript("subscript")}else if(a.text==="'"){if(r)throw new H("Double superscript",a);var l={type:"textord",mode:this.mode,text:"\\prime"},s=[l];for(this.consume();this.fetch().text==="'";)s.push(l),this.consume();this.fetch().text==="^"&&s.push(this.handleSupSubscript("superscript")),r={type:"ordgroup",mode:this.mode,body:s}}else if(qo[a.text]){var u=bf.test(a.text),h=[];for(h.push(new Wt(qo[a.text])),this.consume();;){var m=this.fetch().text;if(!qo[m]||bf.test(m)!==u)break;h.unshift(new Wt(qo[m])),this.consume()}var p=this.subparse(h);u?i={type:"ordgroup",mode:"math",body:p}:r={type:"ordgroup",mode:"math",body:p}}else break}return r||i?{type:"supsub",mode:this.mode,base:n,sup:r,sub:i}:n}parseFunction(t,n){var r=this.fetch(),i=r.text,a=or[i];if(!a)return null;if(this.consume(),n&&n!=="atom"&&!a.allowedInArgument)throw new H("Got function '"+i+"' with no arguments"+(n?" as "+n:""),r);if(this.mode==="text"&&!a.allowedInText)throw new H("Can't use function '"+i+"' in text mode",r);if(this.mode==="math"&&a.allowedInMath===!1)throw new H("Can't use function '"+i+"' in math mode",r);var{args:o,optArgs:l}=this.parseArguments(i,a);return this.callFunction(i,o,l,r,t)}callFunction(t,n,r,i,a){var o={funcName:t,parser:this,token:i,breakOnTokenText:a},l=or[t];if(l&&l.handler)return l.handler(o,n,r);throw new H("No function handler for "+t)}parseArguments(t,n){var r=n.numArgs+n.numOptionalArgs;if(r===0)return{args:[],optArgs:[]};for(var i=[],a=[],o=0;o<r;o++){var l=n.argTypes&&n.argTypes[o],s=o<n.numOptionalArgs;(n.primitive&&l==null||n.type==="sqrt"&&o===1&&a[0]==null)&&(l="primitive");var u=this.parseGroupOfType("argument to '"+t+"'",l,s);if(s)a.push(u);else if(u!=null)i.push(u);else throw new H("Null argument, please report this as a bug")}return{args:i,optArgs:a}}parseGroupOfType(t,n,r){switch(n){case"color":return this.parseColorGroup(r);case"size":return this.parseSizeGroup(r);case"url":return this.parseUrlGroup(r);case"math":case"text":return this.parseArgumentGroup(r,n);case"hbox":{var i=this.parseArgumentGroup(r,"text");return i!=null?{type:"styling",mode:i.mode,body:[i],style:"text"}:null}case"raw":{var a=this.parseStringGroup("raw",r);return a!=null?{type:"raw",mode:"text",string:a.text}:null}case"primitive":{if(r)throw new H("A primitive argument cannot be optional");var o=this.parseGroup(t);if(o==null)throw new H("Expected group as "+t,this.fetch());return o}case"original":case null:case void 0:return this.parseArgumentGroup(r);default:throw new H("Unknown group type as "+t,this.fetch())}}consumeSpaces(){for(;this.fetch().text===" ";)this.consume()}parseStringGroup(t,n){var r=this.gullet.scanArgument(n);if(r==null)return null;for(var i="",a;(a=this.fetch()).text!=="EOF";)i+=a.text,this.consume();return this.consume(),r.text=i,r}parseRegexGroup(t,n){for(var r=this.fetch(),i=r,a="",o;(o=this.fetch()).text!=="EOF"&&t.test(a+o.text);)i=o,a+=i.text,this.consume();if(a==="")throw new H("Invalid "+n+": '"+r.text+"'",r);return r.range(i,a)}parseColorGroup(t){var n=this.parseStringGroup("color",t);if(n==null)return null;var r=/^(#[a-f0-9]{3}|#?[a-f0-9]{6}|[a-z]+)$/i.exec(n.text);if(!r)throw new H("Invalid color: '"+n.text+"'",n);var i=r[0];return/^[0-9a-f]{6}$/i.test(i)&&(i="#"+i),{type:"color-token",mode:this.mode,color:i}}parseSizeGroup(t){var n,r=!1;if(this.gullet.consumeSpaces(),!t&&this.gullet.future().text!=="{"?n=this.parseRegexGroup(/^[-+]? *(?:$|\d+|\d+\.\d*|\.\d*) *[a-z]{0,2} *$/,"size"):n=this.parseStringGroup("size",t),!n)return null;!t&&n.text.length===0&&(n.text="0pt",r=!0);var i=/([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(n.text);if(!i)throw new H("Invalid size: '"+n.text+"'",n);var a={number:+(i[1]+i[2]),unit:i[3]};if(!gg(a))throw new H("Invalid unit: '"+a.unit+"'",n);return{type:"size",mode:this.mode,value:a,isBlank:r}}parseUrlGroup(t){this.gullet.lexer.setCatcode("%",13),this.gullet.lexer.setCatcode("~",12);var n=this.parseStringGroup("url",t);if(this.gullet.lexer.setCatcode("%",14),this.gullet.lexer.setCatcode("~",13),n==null)return null;var r=n.text.replace(/\\([#$%&~_^{}])/g,"$1");return{type:"url",mode:this.mode,url:r}}parseArgumentGroup(t,n){var r=this.gullet.scanArgument(t);if(r==null)return null;var i=this.mode;n&&this.switchMode(n),this.gullet.beginGroup();var a=this.parseExpression(!1,"EOF");this.expect("EOF"),this.gullet.endGroup();var o={type:"ordgroup",mode:this.mode,loc:r.loc,body:a};return n&&this.switchMode(i),o}parseGroup(t,n){var r=this.fetch(),i=r.text,a;if(i==="{"||i==="\\begingroup"){this.consume();var o=i==="{"?"}":"\\endgroup";this.gullet.beginGroup();var l=this.parseExpression(!1,o),s=this.fetch();this.expect(o),this.gullet.endGroup(),a={type:"ordgroup",mode:this.mode,loc:zt.range(r,s),body:l,semisimple:i==="\\begingroup"||void 0}}else if(a=this.parseFunction(n,t)||this.parseSymbol(),a==null&&i[0]==="\\"&&!ly.hasOwnProperty(i)){if(this.settings.throwOnError)throw new H("Undefined control sequence: "+i,r);a=this.formatUnsupportedCmd(i),this.consume()}return a}formLigatures(t){for(var n=t.length-1,r=0;r<n;++r){var i=t[r],a=i.text;a==="-"&&t[r+1].text==="-"&&(r+1<n&&t[r+2].text==="-"?(t.splice(r,3,{type:"textord",mode:"text",loc:zt.range(i,t[r+2]),text:"---"}),n-=2):(t.splice(r,2,{type:"textord",mode:"text",loc:zt.range(i,t[r+1]),text:"--"}),n-=1)),(a==="'"||a==="`")&&t[r+1].text===a&&(t.splice(r,2,{type:"textord",mode:"text",loc:zt.range(i,t[r+1]),text:a+a}),n-=1)}}parseSymbol(){var t=this.fetch(),n=t.text;if(/^\\verb[^a-zA-Z]/.test(n)){this.consume();var r=n.slice(5),i=r.charAt(0)==="*";if(i&&(r=r.slice(1)),r.length<2||r.charAt(0)!==r.slice(-1))throw new H(`\\verb assertion failed --
                    please report what input caused this bug`);return r=r.slice(1,-1),{type:"verb",mode:"text",body:r,star:i}}gf.hasOwnProperty(n[0])&&!De[this.mode][n[0]]&&(this.settings.strict&&this.mode==="math"&&this.settings.reportNonstrict("unicodeTextInMathMode",'Accented Unicode text character "'+n[0]+'" used in math mode',t),n=gf[n[0]]+n.slice(1));var a=Q_.exec(n);a&&(n=n.substring(0,a.index),n==="i"?n="ı":n==="j"&&(n="ȷ"));var o;if(De[this.mode][n]){this.settings.strict&&this.mode==="math"&&D0.indexOf(n)>=0&&this.settings.reportNonstrict("unicodeTextInMathMode",'Latin-1/Unicode text character "'+n[0]+'" used in math mode',t);var l=De[this.mode][n].group,s=zt.range(t),u;if(jw.hasOwnProperty(l)){var h=l;u={type:"atom",mode:this.mode,family:h,loc:s,text:n}}else u={type:l,mode:this.mode,loc:s,text:n};o=u}else if(n.charCodeAt(0)>=128)this.settings.strict&&(bg(n.charCodeAt(0))?this.mode==="math"&&this.settings.reportNonstrict("unicodeTextInMathMode",'Unicode text character "'+n[0]+'" used in math mode',t):this.settings.reportNonstrict("unknownSymbol",'Unrecognized Unicode character "'+n[0]+'"'+(" ("+n.charCodeAt(0)+")"),t)),o={type:"textord",mode:"text",loc:zt.range(t),text:n};else return null;if(this.consume(),a)for(var m=0;m<a[0].length;m++){var p=a[0][m];if(!gu[p])throw new H("Unknown accent ' "+p+"'",t);var f=gu[p][this.mode]||gu[p].text;if(!f)throw new H("Accent "+p+" unsupported in "+this.mode+" mode",t);o={type:"accent",mode:this.mode,loc:zt.range(t),label:f,isStretchy:!1,isShifty:!0,base:o}}return o}}fs.endOfExpression=["}","\\endgroup","\\end","\\right","&"];var yc=function(t,n){if(!(typeof t=="string"||t instanceof String))throw new TypeError("KaTeX can only parse string typed expression");var r=new fs(t,n);delete r.gullet.macros.current["\\df@tag"];var i=r.parse();if(delete r.gullet.macros.current["\\current@color"],delete r.gullet.macros.current["\\color"],r.gullet.macros.get("\\df@tag")){if(!n.displayMode)throw new H("\\tag works only in display equations");i=[{type:"tag",mode:"text",body:i,tag:r.subparse([new Wt("\\df@tag")])}]}return i},sy=function(t,n,r){n.textContent="";var i=vc(t,r).toNode();n.appendChild(i)};typeof document<"u"&&document.compatMode!=="CSS1Compat"&&(typeof console<"u"&&console.warn("Warning: KaTeX doesn't work in quirks mode. Make sure your website has a suitable doctype."),sy=function(){throw new H("KaTeX doesn't work in quirks mode.")});var t9=function(t,n){var r=vc(t,n).toMarkup();return r},n9=function(t,n){var r=new ec(n);return yc(t,r)},uy=function(t,n,r){if(r.throwOnError||!(t instanceof H))throw t;var i=T.makeSpan(["katex-error"],[new Kt(n)]);return i.setAttribute("title",t.toString()),i.setAttribute("style","color:"+r.errorColor),i},vc=function(t,n){var r=new ec(n);try{var i=yc(t,r);return c_(i,t,r)}catch(a){return uy(a,t,r)}},r9=function(t,n){var r=new ec(n);try{var i=yc(t,r);return m_(i,t,r)}catch(a){return uy(a,t,r)}},yf={version:"0.16.15",render:sy,renderToString:t9,ParseError:H,SETTINGS_SCHEMA:nl,__parse:n9,__renderToDomTree:vc,__renderToHTMLTree:r9,__setFontMetrics:Mw,__defineSymbol:c,__defineFunction:Q,__defineMacro:x,__domTree:{Span:ao,Anchor:rc,SymbolNode:Kt,SvgNode:jn,PathNode:vr,LineNode:C0}};const i9={};function a9(e){const t=this,n=e||i9,r=t.data(),i=r.micromarkExtensions||(r.micromarkExtensions=[]),a=r.fromMarkdownExtensions||(r.fromMarkdownExtensions=[]),o=r.toMarkdownExtensions||(r.toMarkdownExtensions=[]);i.push(ow(n)),a.push(Z8()),o.push(J8(n))}const o9=/[\0-\x1F!-,\.\/:-@\[-\^`\{-\xA9\xAB-\xB4\xB6-\xB9\xBB-\xBF\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0378\u0379\u037E\u0380-\u0385\u0387\u038B\u038D\u03A2\u03F6\u0482\u0530\u0557\u0558\u055A-\u055F\u0589-\u0590\u05BE\u05C0\u05C3\u05C6\u05C8-\u05CF\u05EB-\u05EE\u05F3-\u060F\u061B-\u061F\u066A-\u066D\u06D4\u06DD\u06DE\u06E9\u06FD\u06FE\u0700-\u070F\u074B\u074C\u07B2-\u07BF\u07F6-\u07F9\u07FB\u07FC\u07FE\u07FF\u082E-\u083F\u085C-\u085F\u086B-\u089F\u08B5\u08C8-\u08D2\u08E2\u0964\u0965\u0970\u0984\u098D\u098E\u0991\u0992\u09A9\u09B1\u09B3-\u09B5\u09BA\u09BB\u09C5\u09C6\u09C9\u09CA\u09CF-\u09D6\u09D8-\u09DB\u09DE\u09E4\u09E5\u09F2-\u09FB\u09FD\u09FF\u0A00\u0A04\u0A0B-\u0A0E\u0A11\u0A12\u0A29\u0A31\u0A34\u0A37\u0A3A\u0A3B\u0A3D\u0A43-\u0A46\u0A49\u0A4A\u0A4E-\u0A50\u0A52-\u0A58\u0A5D\u0A5F-\u0A65\u0A76-\u0A80\u0A84\u0A8E\u0A92\u0AA9\u0AB1\u0AB4\u0ABA\u0ABB\u0AC6\u0ACA\u0ACE\u0ACF\u0AD1-\u0ADF\u0AE4\u0AE5\u0AF0-\u0AF8\u0B00\u0B04\u0B0D\u0B0E\u0B11\u0B12\u0B29\u0B31\u0B34\u0B3A\u0B3B\u0B45\u0B46\u0B49\u0B4A\u0B4E-\u0B54\u0B58-\u0B5B\u0B5E\u0B64\u0B65\u0B70\u0B72-\u0B81\u0B84\u0B8B-\u0B8D\u0B91\u0B96-\u0B98\u0B9B\u0B9D\u0BA0-\u0BA2\u0BA5-\u0BA7\u0BAB-\u0BAD\u0BBA-\u0BBD\u0BC3-\u0BC5\u0BC9\u0BCE\u0BCF\u0BD1-\u0BD6\u0BD8-\u0BE5\u0BF0-\u0BFF\u0C0D\u0C11\u0C29\u0C3A-\u0C3C\u0C45\u0C49\u0C4E-\u0C54\u0C57\u0C5B-\u0C5F\u0C64\u0C65\u0C70-\u0C7F\u0C84\u0C8D\u0C91\u0CA9\u0CB4\u0CBA\u0CBB\u0CC5\u0CC9\u0CCE-\u0CD4\u0CD7-\u0CDD\u0CDF\u0CE4\u0CE5\u0CF0\u0CF3-\u0CFF\u0D0D\u0D11\u0D45\u0D49\u0D4F-\u0D53\u0D58-\u0D5E\u0D64\u0D65\u0D70-\u0D79\u0D80\u0D84\u0D97-\u0D99\u0DB2\u0DBC\u0DBE\u0DBF\u0DC7-\u0DC9\u0DCB-\u0DCE\u0DD5\u0DD7\u0DE0-\u0DE5\u0DF0\u0DF1\u0DF4-\u0E00\u0E3B-\u0E3F\u0E4F\u0E5A-\u0E80\u0E83\u0E85\u0E8B\u0EA4\u0EA6\u0EBE\u0EBF\u0EC5\u0EC7\u0ECE\u0ECF\u0EDA\u0EDB\u0EE0-\u0EFF\u0F01-\u0F17\u0F1A-\u0F1F\u0F2A-\u0F34\u0F36\u0F38\u0F3A-\u0F3D\u0F48\u0F6D-\u0F70\u0F85\u0F98\u0FBD-\u0FC5\u0FC7-\u0FFF\u104A-\u104F\u109E\u109F\u10C6\u10C8-\u10CC\u10CE\u10CF\u10FB\u1249\u124E\u124F\u1257\u1259\u125E\u125F\u1289\u128E\u128F\u12B1\u12B6\u12B7\u12BF\u12C1\u12C6\u12C7\u12D7\u1311\u1316\u1317\u135B\u135C\u1360-\u137F\u1390-\u139F\u13F6\u13F7\u13FE-\u1400\u166D\u166E\u1680\u169B-\u169F\u16EB-\u16ED\u16F9-\u16FF\u170D\u1715-\u171F\u1735-\u173F\u1754-\u175F\u176D\u1771\u1774-\u177F\u17D4-\u17D6\u17D8-\u17DB\u17DE\u17DF\u17EA-\u180A\u180E\u180F\u181A-\u181F\u1879-\u187F\u18AB-\u18AF\u18F6-\u18FF\u191F\u192C-\u192F\u193C-\u1945\u196E\u196F\u1975-\u197F\u19AC-\u19AF\u19CA-\u19CF\u19DA-\u19FF\u1A1C-\u1A1F\u1A5F\u1A7D\u1A7E\u1A8A-\u1A8F\u1A9A-\u1AA6\u1AA8-\u1AAF\u1AC1-\u1AFF\u1B4C-\u1B4F\u1B5A-\u1B6A\u1B74-\u1B7F\u1BF4-\u1BFF\u1C38-\u1C3F\u1C4A-\u1C4C\u1C7E\u1C7F\u1C89-\u1C8F\u1CBB\u1CBC\u1CC0-\u1CCF\u1CD3\u1CFB-\u1CFF\u1DFA\u1F16\u1F17\u1F1E\u1F1F\u1F46\u1F47\u1F4E\u1F4F\u1F58\u1F5A\u1F5C\u1F5E\u1F7E\u1F7F\u1FB5\u1FBD\u1FBF-\u1FC1\u1FC5\u1FCD-\u1FCF\u1FD4\u1FD5\u1FDC-\u1FDF\u1FED-\u1FF1\u1FF5\u1FFD-\u203E\u2041-\u2053\u2055-\u2070\u2072-\u207E\u2080-\u208F\u209D-\u20CF\u20F1-\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F-\u215F\u2189-\u24B5\u24EA-\u2BFF\u2C2F\u2C5F\u2CE5-\u2CEA\u2CF4-\u2CFF\u2D26\u2D28-\u2D2C\u2D2E\u2D2F\u2D68-\u2D6E\u2D70-\u2D7E\u2D97-\u2D9F\u2DA7\u2DAF\u2DB7\u2DBF\u2DC7\u2DCF\u2DD7\u2DDF\u2E00-\u2E2E\u2E30-\u3004\u3008-\u3020\u3030\u3036\u3037\u303D-\u3040\u3097\u3098\u309B\u309C\u30A0\u30FB\u3100-\u3104\u3130\u318F-\u319F\u31C0-\u31EF\u3200-\u33FF\u4DC0-\u4DFF\u9FFD-\u9FFF\uA48D-\uA4CF\uA4FE\uA4FF\uA60D-\uA60F\uA62C-\uA63F\uA673\uA67E\uA6F2-\uA716\uA720\uA721\uA789\uA78A\uA7C0\uA7C1\uA7CB-\uA7F4\uA828-\uA82B\uA82D-\uA83F\uA874-\uA87F\uA8C6-\uA8CF\uA8DA-\uA8DF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA954-\uA95F\uA97D-\uA97F\uA9C1-\uA9CE\uA9DA-\uA9DF\uA9FF\uAA37-\uAA3F\uAA4E\uAA4F\uAA5A-\uAA5F\uAA77-\uAA79\uAAC3-\uAADA\uAADE\uAADF\uAAF0\uAAF1\uAAF7-\uAB00\uAB07\uAB08\uAB0F\uAB10\uAB17-\uAB1F\uAB27\uAB2F\uAB5B\uAB6A-\uAB6F\uABEB\uABEE\uABEF\uABFA-\uABFF\uD7A4-\uD7AF\uD7C7-\uD7CA\uD7FC-\uD7FF\uE000-\uF8FF\uFA6E\uFA6F\uFADA-\uFAFF\uFB07-\uFB12\uFB18-\uFB1C\uFB29\uFB37\uFB3D\uFB3F\uFB42\uFB45\uFBB2-\uFBD2\uFD3E-\uFD4F\uFD90\uFD91\uFDC8-\uFDEF\uFDFC-\uFDFF\uFE10-\uFE1F\uFE30-\uFE32\uFE35-\uFE4C\uFE50-\uFE6F\uFE75\uFEFD-\uFF0F\uFF1A-\uFF20\uFF3B-\uFF3E\uFF40\uFF5B-\uFF65\uFFBF-\uFFC1\uFFC8\uFFC9\uFFD0\uFFD1\uFFD8\uFFD9\uFFDD-\uFFFF]|\uD800[\uDC0C\uDC27\uDC3B\uDC3E\uDC4E\uDC4F\uDC5E-\uDC7F\uDCFB-\uDD3F\uDD75-\uDDFC\uDDFE-\uDE7F\uDE9D-\uDE9F\uDED1-\uDEDF\uDEE1-\uDEFF\uDF20-\uDF2C\uDF4B-\uDF4F\uDF7B-\uDF7F\uDF9E\uDF9F\uDFC4-\uDFC7\uDFD0\uDFD6-\uDFFF]|\uD801[\uDC9E\uDC9F\uDCAA-\uDCAF\uDCD4-\uDCD7\uDCFC-\uDCFF\uDD28-\uDD2F\uDD64-\uDDFF\uDF37-\uDF3F\uDF56-\uDF5F\uDF68-\uDFFF]|\uD802[\uDC06\uDC07\uDC09\uDC36\uDC39-\uDC3B\uDC3D\uDC3E\uDC56-\uDC5F\uDC77-\uDC7F\uDC9F-\uDCDF\uDCF3\uDCF6-\uDCFF\uDD16-\uDD1F\uDD3A-\uDD7F\uDDB8-\uDDBD\uDDC0-\uDDFF\uDE04\uDE07-\uDE0B\uDE14\uDE18\uDE36\uDE37\uDE3B-\uDE3E\uDE40-\uDE5F\uDE7D-\uDE7F\uDE9D-\uDEBF\uDEC8\uDEE7-\uDEFF\uDF36-\uDF3F\uDF56-\uDF5F\uDF73-\uDF7F\uDF92-\uDFFF]|\uD803[\uDC49-\uDC7F\uDCB3-\uDCBF\uDCF3-\uDCFF\uDD28-\uDD2F\uDD3A-\uDE7F\uDEAA\uDEAD-\uDEAF\uDEB2-\uDEFF\uDF1D-\uDF26\uDF28-\uDF2F\uDF51-\uDFAF\uDFC5-\uDFDF\uDFF7-\uDFFF]|\uD804[\uDC47-\uDC65\uDC70-\uDC7E\uDCBB-\uDCCF\uDCE9-\uDCEF\uDCFA-\uDCFF\uDD35\uDD40-\uDD43\uDD48-\uDD4F\uDD74\uDD75\uDD77-\uDD7F\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDFF\uDE12\uDE38-\uDE3D\uDE3F-\uDE7F\uDE87\uDE89\uDE8E\uDE9E\uDEA9-\uDEAF\uDEEB-\uDEEF\uDEFA-\uDEFF\uDF04\uDF0D\uDF0E\uDF11\uDF12\uDF29\uDF31\uDF34\uDF3A\uDF45\uDF46\uDF49\uDF4A\uDF4E\uDF4F\uDF51-\uDF56\uDF58-\uDF5C\uDF64\uDF65\uDF6D-\uDF6F\uDF75-\uDFFF]|\uD805[\uDC4B-\uDC4F\uDC5A-\uDC5D\uDC62-\uDC7F\uDCC6\uDCC8-\uDCCF\uDCDA-\uDD7F\uDDB6\uDDB7\uDDC1-\uDDD7\uDDDE-\uDDFF\uDE41-\uDE43\uDE45-\uDE4F\uDE5A-\uDE7F\uDEB9-\uDEBF\uDECA-\uDEFF\uDF1B\uDF1C\uDF2C-\uDF2F\uDF3A-\uDFFF]|\uD806[\uDC3B-\uDC9F\uDCEA-\uDCFE\uDD07\uDD08\uDD0A\uDD0B\uDD14\uDD17\uDD36\uDD39\uDD3A\uDD44-\uDD4F\uDD5A-\uDD9F\uDDA8\uDDA9\uDDD8\uDDD9\uDDE2\uDDE5-\uDDFF\uDE3F-\uDE46\uDE48-\uDE4F\uDE9A-\uDE9C\uDE9E-\uDEBF\uDEF9-\uDFFF]|\uD807[\uDC09\uDC37\uDC41-\uDC4F\uDC5A-\uDC71\uDC90\uDC91\uDCA8\uDCB7-\uDCFF\uDD07\uDD0A\uDD37-\uDD39\uDD3B\uDD3E\uDD48-\uDD4F\uDD5A-\uDD5F\uDD66\uDD69\uDD8F\uDD92\uDD99-\uDD9F\uDDAA-\uDEDF\uDEF7-\uDFAF\uDFB1-\uDFFF]|\uD808[\uDF9A-\uDFFF]|\uD809[\uDC6F-\uDC7F\uDD44-\uDFFF]|[\uD80A\uD80B\uD80E-\uD810\uD812-\uD819\uD824-\uD82B\uD82D\uD82E\uD830-\uD833\uD837\uD839\uD83D\uD83F\uD87B-\uD87D\uD87F\uD885-\uDB3F\uDB41-\uDBFF][\uDC00-\uDFFF]|\uD80D[\uDC2F-\uDFFF]|\uD811[\uDE47-\uDFFF]|\uD81A[\uDE39-\uDE3F\uDE5F\uDE6A-\uDECF\uDEEE\uDEEF\uDEF5-\uDEFF\uDF37-\uDF3F\uDF44-\uDF4F\uDF5A-\uDF62\uDF78-\uDF7C\uDF90-\uDFFF]|\uD81B[\uDC00-\uDE3F\uDE80-\uDEFF\uDF4B-\uDF4E\uDF88-\uDF8E\uDFA0-\uDFDF\uDFE2\uDFE5-\uDFEF\uDFF2-\uDFFF]|\uD821[\uDFF8-\uDFFF]|\uD823[\uDCD6-\uDCFF\uDD09-\uDFFF]|\uD82C[\uDD1F-\uDD4F\uDD53-\uDD63\uDD68-\uDD6F\uDEFC-\uDFFF]|\uD82F[\uDC6B-\uDC6F\uDC7D-\uDC7F\uDC89-\uDC8F\uDC9A-\uDC9C\uDC9F-\uDFFF]|\uD834[\uDC00-\uDD64\uDD6A-\uDD6C\uDD73-\uDD7A\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDE41\uDE45-\uDFFF]|\uD835[\uDC55\uDC9D\uDCA0\uDCA1\uDCA3\uDCA4\uDCA7\uDCA8\uDCAD\uDCBA\uDCBC\uDCC4\uDD06\uDD0B\uDD0C\uDD15\uDD1D\uDD3A\uDD3F\uDD45\uDD47-\uDD49\uDD51\uDEA6\uDEA7\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3\uDFCC\uDFCD]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85-\uDE9A\uDEA0\uDEB0-\uDFFF]|\uD838[\uDC07\uDC19\uDC1A\uDC22\uDC25\uDC2B-\uDCFF\uDD2D-\uDD2F\uDD3E\uDD3F\uDD4A-\uDD4D\uDD4F-\uDEBF\uDEFA-\uDFFF]|\uD83A[\uDCC5-\uDCCF\uDCD7-\uDCFF\uDD4C-\uDD4F\uDD5A-\uDFFF]|\uD83B[\uDC00-\uDDFF\uDE04\uDE20\uDE23\uDE25\uDE26\uDE28\uDE33\uDE38\uDE3A\uDE3C-\uDE41\uDE43-\uDE46\uDE48\uDE4A\uDE4C\uDE50\uDE53\uDE55\uDE56\uDE58\uDE5A\uDE5C\uDE5E\uDE60\uDE63\uDE65\uDE66\uDE6B\uDE73\uDE78\uDE7D\uDE7F\uDE8A\uDE9C-\uDEA0\uDEA4\uDEAA\uDEBC-\uDFFF]|\uD83C[\uDC00-\uDD2F\uDD4A-\uDD4F\uDD6A-\uDD6F\uDD8A-\uDFFF]|\uD83E[\uDC00-\uDFEF\uDFFA-\uDFFF]|\uD869[\uDEDE-\uDEFF]|\uD86D[\uDF35-\uDF3F]|\uD86E[\uDC1E\uDC1F]|\uD873[\uDEA2-\uDEAF]|\uD87A[\uDFE1-\uDFFF]|\uD87E[\uDE1E-\uDFFF]|\uD884[\uDF4B-\uDFFF]|\uDB40[\uDC00-\uDCFF\uDDF0-\uDFFF]/g,l9=Object.hasOwnProperty;class s9{constructor(){this.occurrences,this.reset()}slug(t,n){const r=this;let i=u9(t,n===!0);const a=i;for(;l9.call(r.occurrences,i);)r.occurrences[a]++,i=a+"-"+r.occurrences[a];return r.occurrences[i]=0,i}reset(){this.occurrences=Object.create(null)}}function u9(e,t){return typeof e!="string"?"":(t||(e=e.toLowerCase()),e.replace(o9,"").replace(/ /g,"-"))}function h9(e){const t=e.type==="element"?e.tagName.toLowerCase():"",n=t.length===2&&t.charCodeAt(0)===104?t.charCodeAt(1):0;return n>48&&n<55?n-48:void 0}function c9(e){return"children"in e?hy(e):"value"in e?e.value:""}function m9(e){return e.type==="text"?e.value:"children"in e?hy(e):""}function hy(e){let t=-1;const n=[];for(;++t<e.children.length;)n[t]=m9(e.children[t]);return n.join("")}const d9={},vf=new s9;function f9(e){const n=(e||d9).prefix||"";return function(r){vf.reset(),Zh(r,"element",function(i){h9(i)&&!i.properties.id&&(i.properties.id=n+vf.slug(c9(i)))})}}const $f=/[#.]/g;function p9(e,t){const n=e||"",r={};let i=0,a,o;for(;i<n.length;){$f.lastIndex=i;const l=$f.exec(n),s=n.slice(i,l?l.index:n.length);s&&(a?a==="#"?r.id=s:Array.isArray(r.className)?r.className.push(s):r.className=[s]:o=s,i+=s.length),l&&(a=l[0],i++)}return{type:"element",tagName:o||t||"div",properties:r,children:[]}}const N0={}.hasOwnProperty;function cy(e,t,n){const r=n&&v9(n);function i(a,o,...l){let s=-1,u;if(a==null){u={type:"root",children:[]};const h=o;l.unshift(h)}else if(u=p9(a,t),u.tagName=u.tagName.toLowerCase(),r&&N0.call(r,u.tagName)&&(u.tagName=r[u.tagName]),b9(o))l.unshift(o);else{let h;for(h in o)N0.call(o,h)&&g9(e,u.properties,h,o[h])}for(;++s<l.length;)M0(u.children,l[s]);return u.type==="element"&&u.tagName==="template"&&(u.content={type:"root",children:u.children},u.children=[]),u}return i}function b9(e){if(e===null||typeof e!="object"||Array.isArray(e))return!0;if(typeof e.type!="string")return!1;const t=e,n=Object.keys(e);for(const r of n){const i=t[r];if(i&&typeof i=="object"){if(!Array.isArray(i))return!0;const a=i;for(const o of a)if(typeof o!="number"&&typeof o!="string")return!0}}return!!("children"in e&&Array.isArray(e.children))}function g9(e,t,n,r){const i=qb(e,n);let a=-1,o;if(r!=null){if(typeof r=="number"){if(Number.isNaN(r))return;o=r}else typeof r=="boolean"?o=r:typeof r=="string"?i.spaceSeparated?o=Gm(r):i.commaSeparated?o=Wm(r):i.commaOrSpaceSeparated?o=Gm(Wm(r).join(" ")):o=xf(i,i.property,r):Array.isArray(r)?o=r.concat():o=i.property==="style"?y9(r):String(r);if(Array.isArray(o)){const l=[];for(;++a<o.length;){const s=xf(i,i.property,o[a]);l[a]=s}o=l}if(i.property==="className"&&Array.isArray(t.className)){const l=o;o=t.className.concat(l)}t[i.property]=o}}function M0(e,t){let n=-1;if(t!=null)if(typeof t=="string"||typeof t=="number")e.push({type:"text",value:String(t)});else if(Array.isArray(t))for(;++n<t.length;)M0(e,t[n]);else if(typeof t=="object"&&"type"in t)t.type==="root"?M0(e,t.children):e.push(t);else throw new Error("Expected node, nodes, or string, got `"+t+"`")}function xf(e,t,n){if(typeof n=="string"){if(e.number&&n&&!Number.isNaN(Number(n)))return Number(n);if((e.boolean||e.overloadedBoolean)&&(n===""||Wa(n)===Wa(t)))return!0}return n}function y9(e){const t=[];let n;for(n in e)N0.call(e,n)&&t.push([n,e[n]].join(": "));return t.join("; ")}function v9(e){const t={};let n=-1;for(;++n<e.length;)t[e[n].toLowerCase()]=e[n];return t}const $9=["altGlyph","altGlyphDef","altGlyphItem","animateColor","animateMotion","animateTransform","clipPath","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","foreignObject","glyphRef","linearGradient","radialGradient","solidColor","textArea","textPath"],x9=cy(Ib,"div"),w9=cy(is,"g",$9),yu={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function _9(e,t){return my(e,{})||{type:"root",children:[]}}function my(e,t){const n=k9(e,t);return n&&t.afterTransform&&t.afterTransform(e,n),n}function k9(e,t){switch(e.nodeType){case 1:return D9(e,t);case 3:return E9(e);case 8:return C9(e);case 9:return wf(e,t);case 10:return S9();case 11:return wf(e,t);default:return}}function wf(e,t){return{type:"root",children:dy(e,t)}}function S9(){return{type:"doctype"}}function E9(e){return{type:"text",value:e.nodeValue||""}}function C9(e){return{type:"comment",value:e.nodeValue||""}}function D9(e,t){const n=e.namespaceURI,r=n===yu.svg?w9:x9,i=n===yu.html?e.tagName.toLowerCase():e.tagName,a=n===yu.html&&i==="template"?e.content:e,o=e.getAttributeNames(),l={};let s=-1;for(;++s<o.length;)l[o[s]]=e.getAttribute(o[s])||"";return r(i,l,dy(a,t))}function dy(e,t){const n=e.childNodes,r=[];let i=-1;for(;++i<n.length;){const a=my(n[i],t);a!==void 0&&r.push(a)}return r}new DOMParser;function z9(e,t){const n=P9(e);return _9(n)}function P9(e){const t=document.createElement("template");return t.innerHTML=e,t.content}const _f=function(e,t,n){const r=Yh(n);if(!e||!e.type||!e.children)throw new Error("Expected parent node");if(typeof t=="number"){if(t<0||t===Number.POSITIVE_INFINITY)throw new Error("Expected positive finite number as index")}else if(t=e.children.indexOf(t),t<0)throw new Error("Expected child node or index");for(;++t<e.children.length;)if(r(e.children[t],t,e))return e.children[t]},Gr=function(e){if(e==null)return F9;if(typeof e=="string")return T9(e);if(typeof e=="object")return A9(e);if(typeof e=="function")return $c(e);throw new Error("Expected function, string, or array as `test`")};function A9(e){const t=[];let n=-1;for(;++n<e.length;)t[n]=Gr(e[n]);return $c(r);function r(...i){let a=-1;for(;++a<t.length;)if(t[a].apply(this,i))return!0;return!1}}function T9(e){return $c(t);function t(n){return n.tagName===e}}function $c(e){return t;function t(n,r,i){return!!(N9(n)&&e.call(this,n,typeof r=="number"?r:void 0,i||void 0))}}function F9(e){return!!(e&&typeof e=="object"&&"type"in e&&e.type==="element"&&"tagName"in e&&typeof e.tagName=="string")}function N9(e){return e!==null&&typeof e=="object"&&"type"in e&&"tagName"in e}const kf=/\n/g,Sf=/[\t ]+/g,R0=Gr("br"),Ef=Gr(j9),M9=Gr("p"),Cf=Gr("tr"),R9=Gr(["datalist","head","noembed","noframes","noscript","rp","script","style","template","title",O9,H9]),fy=Gr(["address","article","aside","blockquote","body","caption","center","dd","dialog","dir","dl","dt","div","figure","figcaption","footer","form,","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","legend","li","listing","main","menu","nav","ol","p","plaintext","pre","section","ul","xmp"]);function q9(e,t){const n=t||{},r="children"in e?e.children:[],i=fy(e),a=gy(e,{whitespace:n.whitespace||"normal",breakBefore:!1,breakAfter:!1}),o=[];(e.type==="text"||e.type==="comment")&&o.push(...by(e,{whitespace:a,breakBefore:!0,breakAfter:!0}));let l=-1;for(;++l<r.length;)o.push(...py(r[l],e,{whitespace:a,breakBefore:l?void 0:i,breakAfter:l<r.length-1?R0(r[l+1]):i}));const s=[];let u;for(l=-1;++l<o.length;){const h=o[l];typeof h=="number"?u!==void 0&&h>u&&(u=h):h&&(u!==void 0&&u>-1&&s.push(`
`.repeat(u)||" "),u=-1,s.push(h))}return s.join("")}function py(e,t,n){return e.type==="element"?I9(e,t,n):e.type==="text"?n.whitespace==="normal"?by(e,n):B9(e):[]}function I9(e,t,n){const r=gy(e,n),i=e.children||[];let a=-1,o=[];if(R9(e))return o;let l,s;for(R0(e)||Cf(e)&&_f(t,e,Cf)?s=`
`:M9(e)?(l=2,s=2):fy(e)&&(l=1,s=1);++a<i.length;)o=o.concat(py(i[a],e,{whitespace:r,breakBefore:a?void 0:l,breakAfter:a<i.length-1?R0(i[a+1]):s}));return Ef(e)&&_f(t,e,Ef)&&o.push("	"),l&&o.unshift(l),s&&o.push(s),o}function by(e,t){const n=String(e.value),r=[],i=[];let a=0;for(;a<=n.length;){kf.lastIndex=a;const s=kf.exec(n),u=s&&"index"in s?s.index:n.length;r.push(L9(n.slice(a,u).replace(/[\u061C\u200E\u200F\u202A-\u202E\u2066-\u2069]/g,""),a===0?t.breakBefore:!0,u===n.length?t.breakAfter:!0)),a=u+1}let o=-1,l;for(;++o<r.length;)r[o].charCodeAt(r[o].length-1)===8203||o<r.length-1&&r[o+1].charCodeAt(0)===8203?(i.push(r[o]),l=void 0):r[o]?(typeof l=="number"&&i.push(l),i.push(r[o]),l=0):(o===0||o===r.length-1)&&i.push(0);return i}function B9(e){return[String(e.value)]}function L9(e,t,n){const r=[];let i=0,a;for(;i<e.length;){Sf.lastIndex=i;const o=Sf.exec(e);a=o?o.index:e.length,!i&&!a&&o&&!t&&r.push(""),i!==a&&r.push(e.slice(i,a)),i=o?a+o[0].length:a}return i!==a&&!n&&r.push(""),r.join(" ")}function gy(e,t){if(e.type==="element"){const n=e.properties||{};switch(e.tagName){case"listing":case"plaintext":case"xmp":return"pre";case"nobr":return"nowrap";case"pre":return n.wrap?"pre-wrap":"pre";case"td":case"th":return n.noWrap?"nowrap":t.whitespace;case"textarea":return"pre-wrap"}}return t.whitespace}function O9(e){return!!(e.properties||{}).hidden}function j9(e){return e.tagName==="td"||e.tagName==="th"}function H9(e){return e.tagName==="dialog"&&!(e.properties||{}).open}const W9={},U9=[];function X9(e){const t=e||W9;return function(n,r){mg(n,"element",function(i,a){const o=Array.isArray(i.properties.className)?i.properties.className:U9,l=o.includes("language-math"),s=o.includes("math-display"),u=o.includes("math-inline");let h=s;if(!l&&!s&&!u)return;let m=a[a.length-1],p=i;if(i.tagName==="code"&&l&&m&&m.type==="element"&&m.tagName==="pre"&&(p=m,m=a[a.length-2],h=!0),!m)return;const f=q9(p,{whitespace:"pre"});let v;try{v=yf.renderToString(f,{...t,displayMode:h,throwOnError:!0})}catch(k){const g=k,y=g.name.toLowerCase();r.message("Could not render math with KaTeX",{ancestors:[...a,i],cause:g,place:i.position,ruleId:y,source:"rehype-katex"});try{v=yf.renderToString(f,{...t,displayMode:h,strict:"ignore",throwOnError:!1})}catch{v=[{type:"element",tagName:"span",properties:{className:["katex-error"],style:"color:"+(t.errorColor||"#cc0000"),title:String(k)},children:[{type:"text",value:f}]}]}}typeof v=="string"&&(v=z9(v).children);const $=m.children.indexOf(p);return m.children.splice($,1,...v),cg})}}const K9=({content:e,isOpen:t,setIsOpen:n,isMobile:r})=>{const[i,a]=A.useState([]),o=es(),l=un();A.useEffect(()=>{const p=document.querySelectorAll("h1, h2, h3, h4, h5, h6"),f=Array.from(p).map(v=>({id:v.id,text:v.textContent||"",level:parseInt(v.tagName[1])}));a(u(f))},[e]);const s=p=>{const f=document.getElementById(p);if(f){f.scrollIntoView({behavior:"smooth"}),n(!1);const v=new URLSearchParams(l.search);v.set("scrollTo",p),o(`${l.pathname}?${v.toString()}`,{replace:!0})}},u=p=>{const f=[],v=[];return p.forEach($=>{for(;v.length>0&&$.level<=v[v.length-1].level;)v.pop();if(v.length===0)f.push($),v.push($);else{const k=v[v.length-1];k.children||(k.children=[]),k.children.push($),v.push($)}}),f},h=p=>N.jsx("ul",{className:"space-y-1",children:p.map(f=>N.jsxs("li",{children:[N.jsx("div",{className:`cursor-pointer hover:bg-sky-200 rounded-md transition-colors ${m(f.level)} whitespace-normal break-words`,onClick:()=>s(f.id),children:f.text}),f.children&&h(f.children)]},f.id))}),m=p=>{switch(p){case 1:return"text-lg font-bold pl-0";case 2:return"text-base pl-4";case 3:return"text-sm pl-8";default:return"text-xs pl-12"}};return N.jsxs("div",{className:`sticky top-4 flex flex-col items-start mr-8 mt-4 transition-all duration-300 ease-in-out bg-sky-900 z-50
        ${r?"fixed right-0 top-16":"sticky"}`,style:{width:t?r?"90vw":"30rem":"3rem",borderRadius:t?"0.75rem":"1.5rem",right:r?t?"1rem":"-2rem":void 0,top:r?"4rem":void 0,boxShadow:r&&t?"0 4px 6px rgba(0, 0, 0, 0.1)":void 0},children:[N.jsx(_i,{variant:"default",className:`flex-shrink-0 w-12 h-12 bg-sky-900 hover:bg-sky-600 rounded-full shadow-lg focus:outline-none
          ${r?"fixed right-4 top-20 z-50":""}`,onClick:()=>n(!t),children:N.jsx(kb,{className:"h-4 w-4 text-white"})}),N.jsx("div",{className:"transition-all duration-300 ease-in-out overflow-hidden",style:{maxHeight:t?r?"70vh":"calc(100vh - 8rem)":"0px",margin:t?"1rem":"0px",width:r?"100%":void 0},children:N.jsx("div",{className:`transition-all duration-300 ease-in-out 
            ${t?"p-4 opacity-100":"p-0 opacity-0"}
            ${r?"max-h-[60vh]":""} bg-sky-100 rounded-md`,children:N.jsx("div",{className:"overflow-y-auto",style:{maxHeight:r?"60vh":"calc(100vh - 8rem)",WebkitOverflowScrolling:"touch"},children:h(i)})})}),r&&t&&N.jsx("div",{className:"fixed inset-0 bg-black/30 z-40",onClick:()=>n(!1)})]})},V9=({children:e})=>{const t=un(),n=es();return A.useEffect(()=>{const r=i=>{let a=i.target;for(;a&&a.tagName!=="A";)a=a.parentElement;if((a==null?void 0:a.tagName)==="A"){const o=a.getAttribute("href");if(o!=null&&o.startsWith("#")&&!o.startsWith("#/")){i.preventDefault();const l=o.slice(1),s=document.getElementById(l);if(s){s.scrollIntoView({behavior:"smooth"});const u=new URLSearchParams(t.search);u.set("scrollTo",l),n(`${t.pathname}?${u.toString()}`,{replace:!0})}}}};return document.addEventListener("click",r,!0),()=>document.removeEventListener("click",r,!0)},[t,n]),A.useEffect(()=>{const i=new URLSearchParams(t.search).get("scrollTo");if(i){const a=document.getElementById(i);a&&a.scrollIntoView({behavior:"smooth"})}},[t.search]),N.jsx("div",{className:"markdown-content",children:e})},G9=()=>e=>{const t=[];let n=[],r=null;const i=e;if(i.children.forEach(a=>{if(a.type==="heading"){const o=a;if(n.length>0){const l={type:"element",tagName:"div",properties:{className:[`section-level-${r}`]},children:n};t.push(l),n=[]}r=o.depth,n.push(a)}else n.push(a)}),n.length>0){const a={type:"element",tagName:"div",properties:{className:[`section-level-${r}`]},children:n};t.push(a)}i.children=t},Df=Object.assign({"../posts/A0_1.md":K5,"../posts/A0_2.md":V5,"../posts/AE_1.md":G5,"../posts/CD_1.md":Q5,"../posts/CD_2.md":Y5,"../posts/CD_3.md":Z5,"../posts/CD_4.md":J5,"../posts/CD_5.md":e$,"../posts/EC_1.md":t$,"../posts/EC_2.md":n$,"../posts/EC_3.md":r$,"../posts/EC_4.md":i$,"../posts/EC_5.md":a$,"../posts/EC_6.md":o$,"../posts/EC_7.md":l$,"../posts/EC_8.md":s$,"../posts/FE_1.md":u$,"../posts/GT_02.md":h$,"../posts/GT_1.md":c$,"../posts/GT_A1.md":m$,"../posts/GT_P1.md":d$,"../posts/MA_1.md":f$,"../posts/NOTE_SCS_1.md":p$,"../posts/QC_1.md":b$,"../posts/QC_2.md":g$,"../posts/QC_3.md":y$,"../posts/QC_4.md":v$,"../posts/SCM_01.md":$$,"../posts/SCM_02.md":x$,"../posts/SCS_01.md":w$,"../posts/SCS_02.md":_$,"../posts/SP_1.md":k$,"../posts/SP_A1.md":S$,"../posts/post1.md":E$}),Q9=()=>{const{id:e}=Fv(),[t,n]=A.useState(!1),[r,i]=A.useState(!1);A.useEffect(()=>{const s=()=>{i(window.innerWidth<768)};return s(),window.addEventListener("resize",s),()=>window.removeEventListener("resize",s)},[]);const a=Jo.find(s=>s.id===Number(e));if(!a)return N.jsx("div",{className:"container mx-auto mt-10 pt-16",children:N.jsx("h2",{className:"text-2xl font-bold text-sky-100",children:"404 NOT FOUND"})});const o={};for(const s in Df){const u=Df[s],h=s.match(/\/([a-zA-Z0-9_-]+)\.md$/);if(h){const m=h[1];o[m]=u}}const l=o[a.contentKey];return l?N.jsxs("div",{className:"flex items-start relative transition-all duration-300 ease-in-out",children:[N.jsx("div",{className:`flex-1 transition-all duration-300 ease-in-out ${r?"":t?"md:mr-[16rem]":"md:mr-[3rem]"}`,children:N.jsxs("div",{className:`container mx-auto mt-10 p-6 bg-sky-100 rounded-lg shadow pt-16 w-3/4
          max-md:w-full max-md:mt-2 max-md:pt-20 max-md:px-3`,children:[N.jsx("h1",{className:"text-3xl font-bold mb-4 text-sky-950",children:a.title}),N.jsxs("div",{className:"text-sm text-sky-950 mb-4",children:[a.date," • ",a.author]}),N.jsx(V9,{content:l,children:N.jsx("div",{className:"prose prose-sky max-w-full",children:N.jsx(G8,{remarkPlugins:[a9,G9],rehypePlugins:[X9,f9],children:l})})})]})}),N.jsx(K9,{content:l,isOpen:t,setIsOpen:n,isMobile:r})]}):N.jsx("div",{className:"container mx-auto mt-10 pt-16",children:N.jsx("h2",{className:"text-2xl font-bold text-sky-100",children:"Content Not Found"})})},Y9=()=>N.jsxs("div",{children:[N.jsx("div",{className:"mx-auto w-1/2 mt-10 p-6 bg-sky-100 rounded-lg shadow",children:N.jsx("a",{href:"https://www.cameudis.com/",className:`font-bold mb-0.5 text-sky-900
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
            `,children:"乌桕Sapium"})})]}),Z9=()=>{const{fontToggle:e}=$b(),t=["xd.png","fl.png","pr.png","vs.png","blender.png","rd.png","bp.png","sai.png","au.png","pc.png","ps.png","ds.png","unity.png","vsc.png","rr.png","ae.png","mma.png","cl.png"],n=3,r=Math.ceil(t.length/n),i=Array.from({length:n},(o,l)=>t.slice(l*r,(l+1)*r)),a=e?"/ico/pixel":"/ico/common";return N.jsx("div",{children:N.jsx("div",{className:"overflow-hidden",children:i.map((o,l)=>N.jsx("div",{className:`flex whitespace-nowrap my-4 ${l%2===0?"animate-scroll-left":"animate-scroll-right"}`,style:{"--animation-duration":`${300+l*5}s`},children:[...o,...o,...o,...o,...o,...o,...o,...o].map((s,u)=>N.jsx("img",{src:`${a}/${s}`,alt:s,className:"w-40 h-40 object-cover mx-2"},u))},l))})})},J9=()=>N.jsxs("div",{className:"container mx-auto mt-10",children:[N.jsx("h1",{className:`font-bold mb-8 text-center text-sky-100
      text-5xl
      sm:text-5xl
      lg:text-6xl
      `,children:"This is Luna's world."}),N.jsx(Z9,{})]});function ek(){return N.jsx(C5,{children:N.jsxs("div",{className:"flex flex-col w-screen min-h-screen bg-sky-600",children:[N.jsx(D5,{}),N.jsx("main",{className:"flex-grow",children:N.jsxs(Gv,{children:[N.jsx(ri,{path:"/",element:N.jsx(U5,{})}),N.jsx(ri,{path:"/warp",element:N.jsx(Y9,{})}),N.jsx(ri,{path:"/show",element:N.jsx(J9,{})}),N.jsx(ri,{path:"/about",element:N.jsx(X5,{})}),N.jsx(ri,{path:"/posts/:id",element:N.jsx(Q9,{})})]})}),N.jsx(z5,{})]})})}vu.createRoot(document.getElementById("root")).render(N.jsx(Lf.StrictMode,{children:N.jsx(v3,{children:N.jsx(ek,{})})}));
