(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function t(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(o){if(o.ep)return;o.ep=!0;const u=t(o);fetch(o.href,u)}})();var Qh={exports:{}},Sa={},Yh={exports:{}},Ce={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bm;function X0(){if(bm)return Ce;bm=1;var i=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),h=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),v=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),A=Symbol.iterator;function R(V){return V===null||typeof V!="object"?null:(V=A&&V[A]||V["@@iterator"],typeof V=="function"?V:null)}var j={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},$=Object.assign,Y={};function B(V,H,ce){this.props=V,this.context=H,this.refs=Y,this.updater=ce||j}B.prototype.isReactComponent={},B.prototype.setState=function(V,H){if(typeof V!="object"&&typeof V!="function"&&V!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,V,H,"setState")},B.prototype.forceUpdate=function(V){this.updater.enqueueForceUpdate(this,V,"forceUpdate")};function fe(){}fe.prototype=B.prototype;function ue(V,H,ce){this.props=V,this.context=H,this.refs=Y,this.updater=ce||j}var ye=ue.prototype=new fe;ye.constructor=ue,$(ye,B.prototype),ye.isPureReactComponent=!0;var Ae=Array.isArray,We=Object.prototype.hasOwnProperty,Ve={current:null},b={key:!0,ref:!0,__self:!0,__source:!0};function S(V,H,ce){var ke,xe={},ee=null,he=null;if(H!=null)for(ke in H.ref!==void 0&&(he=H.ref),H.key!==void 0&&(ee=""+H.key),H)We.call(H,ke)&&!b.hasOwnProperty(ke)&&(xe[ke]=H[ke]);var we=arguments.length-2;if(we===1)xe.children=ce;else if(1<we){for(var Fe=Array(we),Ze=0;Ze<we;Ze++)Fe[Ze]=arguments[Ze+2];xe.children=Fe}if(V&&V.defaultProps)for(ke in we=V.defaultProps,we)xe[ke]===void 0&&(xe[ke]=we[ke]);return{$$typeof:i,type:V,key:ee,ref:he,props:xe,_owner:Ve.current}}function x(V,H){return{$$typeof:i,type:V.type,key:H,ref:V.ref,props:V.props,_owner:V._owner}}function N(V){return typeof V=="object"&&V!==null&&V.$$typeof===i}function D(V){var H={"=":"=0",":":"=2"};return"$"+V.replace(/[=:]/g,function(ce){return H[ce]})}var O=/\/+/g;function k(V,H){return typeof V=="object"&&V!==null&&V.key!=null?D(""+V.key):H.toString(36)}function Ye(V,H,ce,ke,xe){var ee=typeof V;(ee==="undefined"||ee==="boolean")&&(V=null);var he=!1;if(V===null)he=!0;else switch(ee){case"string":case"number":he=!0;break;case"object":switch(V.$$typeof){case i:case e:he=!0}}if(he)return he=V,xe=xe(he),V=ke===""?"."+k(he,0):ke,Ae(xe)?(ce="",V!=null&&(ce=V.replace(O,"$&/")+"/"),Ye(xe,H,ce,"",function(Ze){return Ze})):xe!=null&&(N(xe)&&(xe=x(xe,ce+(!xe.key||he&&he.key===xe.key?"":(""+xe.key).replace(O,"$&/")+"/")+V)),H.push(xe)),1;if(he=0,ke=ke===""?".":ke+":",Ae(V))for(var we=0;we<V.length;we++){ee=V[we];var Fe=ke+k(ee,we);he+=Ye(ee,H,ce,Fe,xe)}else if(Fe=R(V),typeof Fe=="function")for(V=Fe.call(V),we=0;!(ee=V.next()).done;)ee=ee.value,Fe=ke+k(ee,we++),he+=Ye(ee,H,ce,Fe,xe);else if(ee==="object")throw H=String(V),Error("Objects are not valid as a React child (found: "+(H==="[object Object]"?"object with keys {"+Object.keys(V).join(", ")+"}":H)+"). If you meant to render a collection of children, use an array instead.");return he}function vt(V,H,ce){if(V==null)return V;var ke=[],xe=0;return Ye(V,ke,"","",function(ee){return H.call(ce,ee,xe++)}),ke}function wt(V){if(V._status===-1){var H=V._result;H=H(),H.then(function(ce){(V._status===0||V._status===-1)&&(V._status=1,V._result=ce)},function(ce){(V._status===0||V._status===-1)&&(V._status=2,V._result=ce)}),V._status===-1&&(V._status=0,V._result=H)}if(V._status===1)return V._result.default;throw V._result}var Se={current:null},Z={transition:null},de={ReactCurrentDispatcher:Se,ReactCurrentBatchConfig:Z,ReactCurrentOwner:Ve};function te(){throw Error("act(...) is not supported in production builds of React.")}return Ce.Children={map:vt,forEach:function(V,H,ce){vt(V,function(){H.apply(this,arguments)},ce)},count:function(V){var H=0;return vt(V,function(){H++}),H},toArray:function(V){return vt(V,function(H){return H})||[]},only:function(V){if(!N(V))throw Error("React.Children.only expected to receive a single React element child.");return V}},Ce.Component=B,Ce.Fragment=t,Ce.Profiler=o,Ce.PureComponent=ue,Ce.StrictMode=s,Ce.Suspense=y,Ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=de,Ce.act=te,Ce.cloneElement=function(V,H,ce){if(V==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+V+".");var ke=$({},V.props),xe=V.key,ee=V.ref,he=V._owner;if(H!=null){if(H.ref!==void 0&&(ee=H.ref,he=Ve.current),H.key!==void 0&&(xe=""+H.key),V.type&&V.type.defaultProps)var we=V.type.defaultProps;for(Fe in H)We.call(H,Fe)&&!b.hasOwnProperty(Fe)&&(ke[Fe]=H[Fe]===void 0&&we!==void 0?we[Fe]:H[Fe])}var Fe=arguments.length-2;if(Fe===1)ke.children=ce;else if(1<Fe){we=Array(Fe);for(var Ze=0;Ze<Fe;Ze++)we[Ze]=arguments[Ze+2];ke.children=we}return{$$typeof:i,type:V.type,key:xe,ref:ee,props:ke,_owner:he}},Ce.createContext=function(V){return V={$$typeof:h,_currentValue:V,_currentValue2:V,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},V.Provider={$$typeof:u,_context:V},V.Consumer=V},Ce.createElement=S,Ce.createFactory=function(V){var H=S.bind(null,V);return H.type=V,H},Ce.createRef=function(){return{current:null}},Ce.forwardRef=function(V){return{$$typeof:m,render:V}},Ce.isValidElement=N,Ce.lazy=function(V){return{$$typeof:T,_payload:{_status:-1,_result:V},_init:wt}},Ce.memo=function(V,H){return{$$typeof:v,type:V,compare:H===void 0?null:H}},Ce.startTransition=function(V){var H=Z.transition;Z.transition={};try{V()}finally{Z.transition=H}},Ce.unstable_act=te,Ce.useCallback=function(V,H){return Se.current.useCallback(V,H)},Ce.useContext=function(V){return Se.current.useContext(V)},Ce.useDebugValue=function(){},Ce.useDeferredValue=function(V){return Se.current.useDeferredValue(V)},Ce.useEffect=function(V,H){return Se.current.useEffect(V,H)},Ce.useId=function(){return Se.current.useId()},Ce.useImperativeHandle=function(V,H,ce){return Se.current.useImperativeHandle(V,H,ce)},Ce.useInsertionEffect=function(V,H){return Se.current.useInsertionEffect(V,H)},Ce.useLayoutEffect=function(V,H){return Se.current.useLayoutEffect(V,H)},Ce.useMemo=function(V,H){return Se.current.useMemo(V,H)},Ce.useReducer=function(V,H,ce){return Se.current.useReducer(V,H,ce)},Ce.useRef=function(V){return Se.current.useRef(V)},Ce.useState=function(V){return Se.current.useState(V)},Ce.useSyncExternalStore=function(V,H,ce){return Se.current.useSyncExternalStore(V,H,ce)},Ce.useTransition=function(){return Se.current.useTransition()},Ce.version="18.3.1",Ce}var Dm;function Ld(){return Dm||(Dm=1,Yh.exports=X0()),Yh.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vm;function J0(){if(Vm)return Sa;Vm=1;var i=Ld(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function h(m,y,v){var T,A={},R=null,j=null;v!==void 0&&(R=""+v),y.key!==void 0&&(R=""+y.key),y.ref!==void 0&&(j=y.ref);for(T in y)s.call(y,T)&&!u.hasOwnProperty(T)&&(A[T]=y[T]);if(m&&m.defaultProps)for(T in y=m.defaultProps,y)A[T]===void 0&&(A[T]=y[T]);return{$$typeof:e,type:m,key:R,ref:j,props:A,_owner:o.current}}return Sa.Fragment=t,Sa.jsx=h,Sa.jsxs=h,Sa}var Om;function Z0(){return Om||(Om=1,Qh.exports=J0()),Qh.exports}var E=Z0(),Re=Ld(),vu={},Xh={exports:{}},Zt={},Jh={exports:{}},Zh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mm;function ew(){return Mm||(Mm=1,(function(i){function e(Z,de){var te=Z.length;Z.push(de);e:for(;0<te;){var V=te-1>>>1,H=Z[V];if(0<o(H,de))Z[V]=de,Z[te]=H,te=V;else break e}}function t(Z){return Z.length===0?null:Z[0]}function s(Z){if(Z.length===0)return null;var de=Z[0],te=Z.pop();if(te!==de){Z[0]=te;e:for(var V=0,H=Z.length,ce=H>>>1;V<ce;){var ke=2*(V+1)-1,xe=Z[ke],ee=ke+1,he=Z[ee];if(0>o(xe,te))ee<H&&0>o(he,xe)?(Z[V]=he,Z[ee]=te,V=ee):(Z[V]=xe,Z[ke]=te,V=ke);else if(ee<H&&0>o(he,te))Z[V]=he,Z[ee]=te,V=ee;else break e}}return de}function o(Z,de){var te=Z.sortIndex-de.sortIndex;return te!==0?te:Z.id-de.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;i.unstable_now=function(){return u.now()}}else{var h=Date,m=h.now();i.unstable_now=function(){return h.now()-m}}var y=[],v=[],T=1,A=null,R=3,j=!1,$=!1,Y=!1,B=typeof setTimeout=="function"?setTimeout:null,fe=typeof clearTimeout=="function"?clearTimeout:null,ue=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function ye(Z){for(var de=t(v);de!==null;){if(de.callback===null)s(v);else if(de.startTime<=Z)s(v),de.sortIndex=de.expirationTime,e(y,de);else break;de=t(v)}}function Ae(Z){if(Y=!1,ye(Z),!$)if(t(y)!==null)$=!0,wt(We);else{var de=t(v);de!==null&&Se(Ae,de.startTime-Z)}}function We(Z,de){$=!1,Y&&(Y=!1,fe(S),S=-1),j=!0;var te=R;try{for(ye(de),A=t(y);A!==null&&(!(A.expirationTime>de)||Z&&!D());){var V=A.callback;if(typeof V=="function"){A.callback=null,R=A.priorityLevel;var H=V(A.expirationTime<=de);de=i.unstable_now(),typeof H=="function"?A.callback=H:A===t(y)&&s(y),ye(de)}else s(y);A=t(y)}if(A!==null)var ce=!0;else{var ke=t(v);ke!==null&&Se(Ae,ke.startTime-de),ce=!1}return ce}finally{A=null,R=te,j=!1}}var Ve=!1,b=null,S=-1,x=5,N=-1;function D(){return!(i.unstable_now()-N<x)}function O(){if(b!==null){var Z=i.unstable_now();N=Z;var de=!0;try{de=b(!0,Z)}finally{de?k():(Ve=!1,b=null)}}else Ve=!1}var k;if(typeof ue=="function")k=function(){ue(O)};else if(typeof MessageChannel<"u"){var Ye=new MessageChannel,vt=Ye.port2;Ye.port1.onmessage=O,k=function(){vt.postMessage(null)}}else k=function(){B(O,0)};function wt(Z){b=Z,Ve||(Ve=!0,k())}function Se(Z,de){S=B(function(){Z(i.unstable_now())},de)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(Z){Z.callback=null},i.unstable_continueExecution=function(){$||j||($=!0,wt(We))},i.unstable_forceFrameRate=function(Z){0>Z||125<Z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):x=0<Z?Math.floor(1e3/Z):5},i.unstable_getCurrentPriorityLevel=function(){return R},i.unstable_getFirstCallbackNode=function(){return t(y)},i.unstable_next=function(Z){switch(R){case 1:case 2:case 3:var de=3;break;default:de=R}var te=R;R=de;try{return Z()}finally{R=te}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(Z,de){switch(Z){case 1:case 2:case 3:case 4:case 5:break;default:Z=3}var te=R;R=Z;try{return de()}finally{R=te}},i.unstable_scheduleCallback=function(Z,de,te){var V=i.unstable_now();switch(typeof te=="object"&&te!==null?(te=te.delay,te=typeof te=="number"&&0<te?V+te:V):te=V,Z){case 1:var H=-1;break;case 2:H=250;break;case 5:H=1073741823;break;case 4:H=1e4;break;default:H=5e3}return H=te+H,Z={id:T++,callback:de,priorityLevel:Z,startTime:te,expirationTime:H,sortIndex:-1},te>V?(Z.sortIndex=te,e(v,Z),t(y)===null&&Z===t(v)&&(Y?(fe(S),S=-1):Y=!0,Se(Ae,te-V))):(Z.sortIndex=H,e(y,Z),$||j||($=!0,wt(We))),Z},i.unstable_shouldYield=D,i.unstable_wrapCallback=function(Z){var de=R;return function(){var te=R;R=de;try{return Z.apply(this,arguments)}finally{R=te}}}})(Zh)),Zh}var Lm;function tw(){return Lm||(Lm=1,Jh.exports=ew()),Jh.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jm;function nw(){if(jm)return Zt;jm=1;var i=Ld(),e=tw();function t(n){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)r+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,o={};function u(n,r){h(n,r),h(n+"Capture",r)}function h(n,r){for(o[n]=r,n=0;n<r.length;n++)s.add(r[n])}var m=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),y=Object.prototype.hasOwnProperty,v=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,T={},A={};function R(n){return y.call(A,n)?!0:y.call(T,n)?!1:v.test(n)?A[n]=!0:(T[n]=!0,!1)}function j(n,r,a,c){if(a!==null&&a.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function $(n,r,a,c){if(r===null||typeof r>"u"||j(n,r,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function Y(n,r,a,c,d,p,_){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=n,this.type=r,this.sanitizeURL=p,this.removeEmptyString=_}var B={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){B[n]=new Y(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var r=n[0];B[r]=new Y(r,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){B[n]=new Y(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){B[n]=new Y(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){B[n]=new Y(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){B[n]=new Y(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){B[n]=new Y(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){B[n]=new Y(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){B[n]=new Y(n,5,!1,n.toLowerCase(),null,!1,!1)});var fe=/[\-:]([a-z])/g;function ue(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var r=n.replace(fe,ue);B[r]=new Y(r,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var r=n.replace(fe,ue);B[r]=new Y(r,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var r=n.replace(fe,ue);B[r]=new Y(r,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){B[n]=new Y(n,1,!1,n.toLowerCase(),null,!1,!1)}),B.xlinkHref=new Y("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){B[n]=new Y(n,1,!1,n.toLowerCase(),null,!0,!0)});function ye(n,r,a,c){var d=B.hasOwnProperty(r)?B[r]:null;(d!==null?d.type!==0:c||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&($(r,a,d,c)&&(a=null),c||d===null?R(r)&&(a===null?n.removeAttribute(r):n.setAttribute(r,""+a)):d.mustUseProperty?n[d.propertyName]=a===null?d.type===3?!1:"":a:(r=d.attributeName,c=d.attributeNamespace,a===null?n.removeAttribute(r):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,c?n.setAttributeNS(c,r,a):n.setAttribute(r,a))))}var Ae=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,We=Symbol.for("react.element"),Ve=Symbol.for("react.portal"),b=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),N=Symbol.for("react.provider"),D=Symbol.for("react.context"),O=Symbol.for("react.forward_ref"),k=Symbol.for("react.suspense"),Ye=Symbol.for("react.suspense_list"),vt=Symbol.for("react.memo"),wt=Symbol.for("react.lazy"),Se=Symbol.for("react.offscreen"),Z=Symbol.iterator;function de(n){return n===null||typeof n!="object"?null:(n=Z&&n[Z]||n["@@iterator"],typeof n=="function"?n:null)}var te=Object.assign,V;function H(n){if(V===void 0)try{throw Error()}catch(a){var r=a.stack.trim().match(/\n( *(at )?)/);V=r&&r[1]||""}return`
`+V+n}var ce=!1;function ke(n,r){if(!n||ce)return"";ce=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(U){var c=U}Reflect.construct(n,[],r)}else{try{r.call()}catch(U){c=U}n.call(r.prototype)}else{try{throw Error()}catch(U){c=U}n()}}catch(U){if(U&&c&&typeof U.stack=="string"){for(var d=U.stack.split(`
`),p=c.stack.split(`
`),_=d.length-1,I=p.length-1;1<=_&&0<=I&&d[_]!==p[I];)I--;for(;1<=_&&0<=I;_--,I--)if(d[_]!==p[I]){if(_!==1||I!==1)do if(_--,I--,0>I||d[_]!==p[I]){var C=`
`+d[_].replace(" at new "," at ");return n.displayName&&C.includes("<anonymous>")&&(C=C.replace("<anonymous>",n.displayName)),C}while(1<=_&&0<=I);break}}}finally{ce=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?H(n):""}function xe(n){switch(n.tag){case 5:return H(n.type);case 16:return H("Lazy");case 13:return H("Suspense");case 19:return H("SuspenseList");case 0:case 2:case 15:return n=ke(n.type,!1),n;case 11:return n=ke(n.type.render,!1),n;case 1:return n=ke(n.type,!0),n;default:return""}}function ee(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case b:return"Fragment";case Ve:return"Portal";case x:return"Profiler";case S:return"StrictMode";case k:return"Suspense";case Ye:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case D:return(n.displayName||"Context")+".Consumer";case N:return(n._context.displayName||"Context")+".Provider";case O:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case vt:return r=n.displayName||null,r!==null?r:ee(n.type)||"Memo";case wt:r=n._payload,n=n._init;try{return ee(n(r))}catch{}}return null}function he(n){var r=n.type;switch(n.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=r.render,n=n.displayName||n.name||"",r.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ee(r);case 8:return r===S?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function we(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Fe(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function Ze(n){var r=Fe(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),c=""+n[r];if(!n.hasOwnProperty(r)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,p=a.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return d.call(this)},set:function(_){c=""+_,p.call(this,_)}}),Object.defineProperty(n,r,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(_){c=""+_},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function nn(n){n._valueTracker||(n._valueTracker=Ze(n))}function Sn(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var a=r.getValue(),c="";return n&&(c=Fe(n)?n.checked?"true":"false":n.value),n=c,n!==a?(r.setValue(n),!0):!1}function hr(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function kn(n,r){var a=r.checked;return te({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function Lr(n,r){var a=r.defaultValue==null?"":r.defaultValue,c=r.checked!=null?r.checked:r.defaultChecked;a=we(r.value!=null?r.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function Po(n,r){r=r.checked,r!=null&&ye(n,"checked",r,!1)}function No(n,r){Po(n,r);var a=we(r.value),c=r.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}r.hasOwnProperty("value")?ms(n,r.type,a):r.hasOwnProperty("defaultValue")&&ms(n,r.type,we(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(n.defaultChecked=!!r.defaultChecked)}function il(n,r,a){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var c=r.type;if(!(c!=="submit"&&c!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+n._wrapperState.initialValue,a||r===n.value||(n.value=r),n.defaultValue=r}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function ms(n,r,a){(r!=="number"||hr(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var dr=Array.isArray;function fr(n,r,a,c){if(n=n.options,r){r={};for(var d=0;d<a.length;d++)r["$"+a[d]]=!0;for(a=0;a<n.length;a++)d=r.hasOwnProperty("$"+n[a].value),n[a].selected!==d&&(n[a].selected=d),d&&c&&(n[a].defaultSelected=!0)}else{for(a=""+we(a),r=null,d=0;d<n.length;d++){if(n[d].value===a){n[d].selected=!0,c&&(n[d].defaultSelected=!0);return}r!==null||n[d].disabled||(r=n[d])}r!==null&&(r.selected=!0)}}function bo(n,r){if(r.dangerouslySetInnerHTML!=null)throw Error(t(91));return te({},r,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function gs(n,r){var a=r.value;if(a==null){if(a=r.children,r=r.defaultValue,a!=null){if(r!=null)throw Error(t(92));if(dr(a)){if(1<a.length)throw Error(t(93));a=a[0]}r=a}r==null&&(r=""),a=r}n._wrapperState={initialValue:we(a)}}function ys(n,r){var a=we(r.value),c=we(r.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),r.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function Do(n){var r=n.textContent;r===n._wrapperState.initialValue&&r!==""&&r!==null&&(n.value=r)}function ht(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function dt(n,r){return n==null||n==="http://www.w3.org/1999/xhtml"?ht(r):n==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var pr,Vo=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,a,c,d){MSApp.execUnsafeLocalFunction(function(){return n(r,a,c,d)})}:n})(function(n,r){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=r;else{for(pr=pr||document.createElement("div"),pr.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=pr.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;r.firstChild;)n.appendChild(r.firstChild)}});function jr(n,r){if(r){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=r;return}}n.textContent=r}var Ci={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ri=["Webkit","ms","Moz","O"];Object.keys(Ci).forEach(function(n){Ri.forEach(function(r){r=r+n.charAt(0).toUpperCase()+n.substring(1),Ci[r]=Ci[n]})});function Oo(n,r,a){return r==null||typeof r=="boolean"||r===""?"":a||typeof r!="number"||r===0||Ci.hasOwnProperty(n)&&Ci[n]?(""+r).trim():r+"px"}function Mo(n,r){n=n.style;for(var a in r)if(r.hasOwnProperty(a)){var c=a.indexOf("--")===0,d=Oo(a,r[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,d):n[a]=d}}var Lo=te({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function jo(n,r){if(r){if(Lo[n]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(t(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(t(61))}if(r.style!=null&&typeof r.style!="object")throw Error(t(62))}}function Fo(n,r){if(n.indexOf("-")===-1)return typeof r.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Pi=null;function _s(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var vs=null,hn=null,Hn=null;function ws(n){if(n=ua(n)){if(typeof vs!="function")throw Error(t(280));var r=n.stateNode;r&&(r=Vl(r),vs(n.stateNode,n.type,r))}}function Wn(n){hn?Hn?Hn.push(n):Hn=[n]:hn=n}function Uo(){if(hn){var n=hn,r=Hn;if(Hn=hn=null,ws(n),r)for(n=0;n<r.length;n++)ws(r[n])}}function Ni(n,r){return n(r)}function zo(){}var mr=!1;function Bo(n,r,a){if(mr)return n(r,a);mr=!0;try{return Ni(n,r,a)}finally{mr=!1,(hn!==null||Hn!==null)&&(zo(),Uo())}}function it(n,r){var a=n.stateNode;if(a===null)return null;var c=Vl(a);if(c===null)return null;a=c[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,r,typeof a));return a}var Es=!1;if(m)try{var xn={};Object.defineProperty(xn,"passive",{get:function(){Es=!0}}),window.addEventListener("test",xn,xn),window.removeEventListener("test",xn,xn)}catch{Es=!1}function bi(n,r,a,c,d,p,_,I,C){var U=Array.prototype.slice.call(arguments,3);try{r.apply(a,U)}catch(K){this.onError(K)}}var Di=!1,Ts=null,An=!1,$o=null,Ic={onError:function(n){Di=!0,Ts=n}};function Is(n,r,a,c,d,p,_,I,C){Di=!1,Ts=null,bi.apply(Ic,arguments)}function sl(n,r,a,c,d,p,_,I,C){if(Is.apply(this,arguments),Di){if(Di){var U=Ts;Di=!1,Ts=null}else throw Error(t(198));An||(An=!0,$o=U)}}function Cn(n){var r=n,a=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,(r.flags&4098)!==0&&(a=r.return),n=r.return;while(n)}return r.tag===3?a:null}function Vi(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function Rn(n){if(Cn(n)!==n)throw Error(t(188))}function ol(n){var r=n.alternate;if(!r){if(r=Cn(n),r===null)throw Error(t(188));return r!==n?null:n}for(var a=n,c=r;;){var d=a.return;if(d===null)break;var p=d.alternate;if(p===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===p.child){for(p=d.child;p;){if(p===a)return Rn(d),n;if(p===c)return Rn(d),r;p=p.sibling}throw Error(t(188))}if(a.return!==c.return)a=d,c=p;else{for(var _=!1,I=d.child;I;){if(I===a){_=!0,a=d,c=p;break}if(I===c){_=!0,c=d,a=p;break}I=I.sibling}if(!_){for(I=p.child;I;){if(I===a){_=!0,a=p,c=d;break}if(I===c){_=!0,c=p,a=d;break}I=I.sibling}if(!_)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:r}function Ho(n){return n=ol(n),n!==null?Ss(n):null}function Ss(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var r=Ss(n);if(r!==null)return r;n=n.sibling}return null}var ks=e.unstable_scheduleCallback,Wo=e.unstable_cancelCallback,al=e.unstable_shouldYield,Sc=e.unstable_requestPaint,$e=e.unstable_now,ll=e.unstable_getCurrentPriorityLevel,Oi=e.unstable_ImmediatePriority,Fr=e.unstable_UserBlockingPriority,dn=e.unstable_NormalPriority,qo=e.unstable_LowPriority,ul=e.unstable_IdlePriority,Mi=null,rn=null;function cl(n){if(rn&&typeof rn.onCommitFiberRoot=="function")try{rn.onCommitFiberRoot(Mi,n,void 0,(n.current.flags&128)===128)}catch{}}var Bt=Math.clz32?Math.clz32:dl,Go=Math.log,hl=Math.LN2;function dl(n){return n>>>=0,n===0?32:31-(Go(n)/hl|0)|0}var xs=64,As=4194304;function Ur(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Li(n,r){var a=n.pendingLanes;if(a===0)return 0;var c=0,d=n.suspendedLanes,p=n.pingedLanes,_=a&268435455;if(_!==0){var I=_&~d;I!==0?c=Ur(I):(p&=_,p!==0&&(c=Ur(p)))}else _=a&~d,_!==0?c=Ur(_):p!==0&&(c=Ur(p));if(c===0)return 0;if(r!==0&&r!==c&&(r&d)===0&&(d=c&-c,p=r&-r,d>=p||d===16&&(p&4194240)!==0))return r;if((c&4)!==0&&(c|=a&16),r=n.entangledLanes,r!==0)for(n=n.entanglements,r&=c;0<r;)a=31-Bt(r),d=1<<a,c|=n[a],r&=~d;return c}function kc(n,r){switch(n){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function gr(n,r){for(var a=n.suspendedLanes,c=n.pingedLanes,d=n.expirationTimes,p=n.pendingLanes;0<p;){var _=31-Bt(p),I=1<<_,C=d[_];C===-1?((I&a)===0||(I&c)!==0)&&(d[_]=kc(I,r)):C<=r&&(n.expiredLanes|=I),p&=~I}}function sn(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function ji(){var n=xs;return xs<<=1,(xs&4194240)===0&&(xs=64),n}function zr(n){for(var r=[],a=0;31>a;a++)r.push(n);return r}function Br(n,r,a){n.pendingLanes|=r,r!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,r=31-Bt(r),n[r]=a}function Be(n,r){var a=n.pendingLanes&~r;n.pendingLanes=r,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=r,n.mutableReadLanes&=r,n.entangledLanes&=r,r=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var d=31-Bt(a),p=1<<d;r[d]=0,c[d]=-1,n[d]=-1,a&=~p}}function $r(n,r){var a=n.entangledLanes|=r;for(n=n.entanglements;a;){var c=31-Bt(a),d=1<<c;d&r|n[c]&r&&(n[c]|=r),a&=~d}}var De=0;function Hr(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var fl,Cs,pl,ml,gl,Ko=!1,qn=[],xt=null,Pn=null,Nn=null,Wr=new Map,fn=new Map,Gn=[],xc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function yl(n,r){switch(n){case"focusin":case"focusout":xt=null;break;case"dragenter":case"dragleave":Pn=null;break;case"mouseover":case"mouseout":Nn=null;break;case"pointerover":case"pointerout":Wr.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":fn.delete(r.pointerId)}}function qt(n,r,a,c,d,p){return n===null||n.nativeEvent!==p?(n={blockedOn:r,domEventName:a,eventSystemFlags:c,nativeEvent:p,targetContainers:[d]},r!==null&&(r=ua(r),r!==null&&Cs(r)),n):(n.eventSystemFlags|=c,r=n.targetContainers,d!==null&&r.indexOf(d)===-1&&r.push(d),n)}function Ac(n,r,a,c,d){switch(r){case"focusin":return xt=qt(xt,n,r,a,c,d),!0;case"dragenter":return Pn=qt(Pn,n,r,a,c,d),!0;case"mouseover":return Nn=qt(Nn,n,r,a,c,d),!0;case"pointerover":var p=d.pointerId;return Wr.set(p,qt(Wr.get(p)||null,n,r,a,c,d)),!0;case"gotpointercapture":return p=d.pointerId,fn.set(p,qt(fn.get(p)||null,n,r,a,c,d)),!0}return!1}function _l(n){var r=$i(n.target);if(r!==null){var a=Cn(r);if(a!==null){if(r=a.tag,r===13){if(r=Vi(a),r!==null){n.blockedOn=r,gl(n.priority,function(){pl(a)});return}}else if(r===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function yr(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var a=Rs(n.domEventName,n.eventSystemFlags,r[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);Pi=c,a.target.dispatchEvent(c),Pi=null}else return r=ua(a),r!==null&&Cs(r),n.blockedOn=a,!1;r.shift()}return!0}function Fi(n,r,a){yr(n)&&a.delete(r)}function vl(){Ko=!1,xt!==null&&yr(xt)&&(xt=null),Pn!==null&&yr(Pn)&&(Pn=null),Nn!==null&&yr(Nn)&&(Nn=null),Wr.forEach(Fi),fn.forEach(Fi)}function bn(n,r){n.blockedOn===r&&(n.blockedOn=null,Ko||(Ko=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,vl)))}function Dn(n){function r(d){return bn(d,n)}if(0<qn.length){bn(qn[0],n);for(var a=1;a<qn.length;a++){var c=qn[a];c.blockedOn===n&&(c.blockedOn=null)}}for(xt!==null&&bn(xt,n),Pn!==null&&bn(Pn,n),Nn!==null&&bn(Nn,n),Wr.forEach(r),fn.forEach(r),a=0;a<Gn.length;a++)c=Gn[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<Gn.length&&(a=Gn[0],a.blockedOn===null);)_l(a),a.blockedOn===null&&Gn.shift()}var _r=Ae.ReactCurrentBatchConfig,qr=!0;function Xe(n,r,a,c){var d=De,p=_r.transition;_r.transition=null;try{De=1,Qo(n,r,a,c)}finally{De=d,_r.transition=p}}function Cc(n,r,a,c){var d=De,p=_r.transition;_r.transition=null;try{De=4,Qo(n,r,a,c)}finally{De=d,_r.transition=p}}function Qo(n,r,a,c){if(qr){var d=Rs(n,r,a,c);if(d===null)Fc(n,r,c,Ui,a),yl(n,c);else if(Ac(d,n,r,a,c))c.stopPropagation();else if(yl(n,c),r&4&&-1<xc.indexOf(n)){for(;d!==null;){var p=ua(d);if(p!==null&&fl(p),p=Rs(n,r,a,c),p===null&&Fc(n,r,c,Ui,a),p===d)break;d=p}d!==null&&c.stopPropagation()}else Fc(n,r,c,null,a)}}var Ui=null;function Rs(n,r,a,c){if(Ui=null,n=_s(c),n=$i(n),n!==null)if(r=Cn(n),r===null)n=null;else if(a=r.tag,a===13){if(n=Vi(r),n!==null)return n;n=null}else if(a===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null);return Ui=n,null}function Yo(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ll()){case Oi:return 1;case Fr:return 4;case dn:case qo:return 16;case ul:return 536870912;default:return 16}default:return 16}}var on=null,Ps=null,Gt=null;function Xo(){if(Gt)return Gt;var n,r=Ps,a=r.length,c,d="value"in on?on.value:on.textContent,p=d.length;for(n=0;n<a&&r[n]===d[n];n++);var _=a-n;for(c=1;c<=_&&r[a-c]===d[p-c];c++);return Gt=d.slice(n,1<c?1-c:void 0)}function Ns(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function Kn(){return!0}function Jo(){return!1}function At(n){function r(a,c,d,p,_){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=p,this.target=_,this.currentTarget=null;for(var I in n)n.hasOwnProperty(I)&&(a=n[I],this[I]=a?a(p):p[I]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?Kn:Jo,this.isPropagationStopped=Jo,this}return te(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Kn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Kn)},persist:function(){},isPersistent:Kn}),r}var Vn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},bs=At(Vn),Qn=te({},Vn,{view:0,detail:0}),Rc=At(Qn),Ds,vr,Gr,zi=te({},Qn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Yn,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Gr&&(Gr&&n.type==="mousemove"?(Ds=n.screenX-Gr.screenX,vr=n.screenY-Gr.screenY):vr=Ds=0,Gr=n),Ds)},movementY:function(n){return"movementY"in n?n.movementY:vr}}),Vs=At(zi),Zo=te({},zi,{dataTransfer:0}),wl=At(Zo),Os=te({},Qn,{relatedTarget:0}),Ms=At(Os),El=te({},Vn,{animationName:0,elapsedTime:0,pseudoElement:0}),wr=At(El),Tl=te({},Vn,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Il=At(Tl),Sl=te({},Vn,{data:0}),ea=At(Sl),Ls={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},$t={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},kl={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function xl(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=kl[n])?!!r[n]:!1}function Yn(){return xl}var l=te({},Qn,{key:function(n){if(n.key){var r=Ls[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=Ns(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?$t[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Yn,charCode:function(n){return n.type==="keypress"?Ns(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Ns(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),f=At(l),g=te({},zi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),w=At(g),M=te({},Qn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Yn}),z=At(M),J=te({},Vn,{propertyName:0,elapsedTime:0,pseudoElement:0}),ze=At(J),ft=te({},zi,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Oe=At(ft),Et=[9,13,27,32],at=m&&"CompositionEvent"in window,pn=null;m&&"documentMode"in document&&(pn=document.documentMode);var an=m&&"TextEvent"in window&&!pn,Bi=m&&(!at||pn&&8<pn&&11>=pn),js=" ",xf=!1;function Af(n,r){switch(n){case"keyup":return Et.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Cf(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Fs=!1;function Kv(n,r){switch(n){case"compositionend":return Cf(r);case"keypress":return r.which!==32?null:(xf=!0,js);case"textInput":return n=r.data,n===js&&xf?null:n;default:return null}}function Qv(n,r){if(Fs)return n==="compositionend"||!at&&Af(n,r)?(n=Xo(),Gt=Ps=on=null,Fs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return Bi&&r.locale!=="ko"?null:r.data;default:return null}}var Yv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Rf(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!Yv[n.type]:r==="textarea"}function Pf(n,r,a,c){Wn(c),r=Nl(r,"onChange"),0<r.length&&(a=new bs("onChange","change",null,a,c),n.push({event:a,listeners:r}))}var ta=null,na=null;function Xv(n){Kf(n,0)}function Al(n){var r=Hs(n);if(Sn(r))return n}function Jv(n,r){if(n==="change")return r}var Nf=!1;if(m){var Pc;if(m){var Nc="oninput"in document;if(!Nc){var bf=document.createElement("div");bf.setAttribute("oninput","return;"),Nc=typeof bf.oninput=="function"}Pc=Nc}else Pc=!1;Nf=Pc&&(!document.documentMode||9<document.documentMode)}function Df(){ta&&(ta.detachEvent("onpropertychange",Vf),na=ta=null)}function Vf(n){if(n.propertyName==="value"&&Al(na)){var r=[];Pf(r,na,n,_s(n)),Bo(Xv,r)}}function Zv(n,r,a){n==="focusin"?(Df(),ta=r,na=a,ta.attachEvent("onpropertychange",Vf)):n==="focusout"&&Df()}function e0(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Al(na)}function t0(n,r){if(n==="click")return Al(r)}function n0(n,r){if(n==="input"||n==="change")return Al(r)}function r0(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var On=typeof Object.is=="function"?Object.is:r0;function ra(n,r){if(On(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var a=Object.keys(n),c=Object.keys(r);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!y.call(r,d)||!On(n[d],r[d]))return!1}return!0}function Of(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Mf(n,r){var a=Of(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=r&&c>=r)return{node:a,offset:r-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Of(a)}}function Lf(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?Lf(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function jf(){for(var n=window,r=hr();r instanceof n.HTMLIFrameElement;){try{var a=typeof r.contentWindow.location.href=="string"}catch{a=!1}if(a)n=r.contentWindow;else break;r=hr(n.document)}return r}function bc(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}function i0(n){var r=jf(),a=n.focusedElem,c=n.selectionRange;if(r!==a&&a&&a.ownerDocument&&Lf(a.ownerDocument.documentElement,a)){if(c!==null&&bc(a)){if(r=c.start,n=c.end,n===void 0&&(n=r),"selectionStart"in a)a.selectionStart=r,a.selectionEnd=Math.min(n,a.value.length);else if(n=(r=a.ownerDocument||document)&&r.defaultView||window,n.getSelection){n=n.getSelection();var d=a.textContent.length,p=Math.min(c.start,d);c=c.end===void 0?p:Math.min(c.end,d),!n.extend&&p>c&&(d=c,c=p,p=d),d=Mf(a,p);var _=Mf(a,c);d&&_&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==_.node||n.focusOffset!==_.offset)&&(r=r.createRange(),r.setStart(d.node,d.offset),n.removeAllRanges(),p>c?(n.addRange(r),n.extend(_.node,_.offset)):(r.setEnd(_.node,_.offset),n.addRange(r)))}}for(r=[],n=a;n=n.parentNode;)n.nodeType===1&&r.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<r.length;a++)n=r[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var s0=m&&"documentMode"in document&&11>=document.documentMode,Us=null,Dc=null,ia=null,Vc=!1;function Ff(n,r,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Vc||Us==null||Us!==hr(c)||(c=Us,"selectionStart"in c&&bc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),ia&&ra(ia,c)||(ia=c,c=Nl(Dc,"onSelect"),0<c.length&&(r=new bs("onSelect","select",null,r,a),n.push({event:r,listeners:c}),r.target=Us)))}function Cl(n,r){var a={};return a[n.toLowerCase()]=r.toLowerCase(),a["Webkit"+n]="webkit"+r,a["Moz"+n]="moz"+r,a}var zs={animationend:Cl("Animation","AnimationEnd"),animationiteration:Cl("Animation","AnimationIteration"),animationstart:Cl("Animation","AnimationStart"),transitionend:Cl("Transition","TransitionEnd")},Oc={},Uf={};m&&(Uf=document.createElement("div").style,"AnimationEvent"in window||(delete zs.animationend.animation,delete zs.animationiteration.animation,delete zs.animationstart.animation),"TransitionEvent"in window||delete zs.transitionend.transition);function Rl(n){if(Oc[n])return Oc[n];if(!zs[n])return n;var r=zs[n],a;for(a in r)if(r.hasOwnProperty(a)&&a in Uf)return Oc[n]=r[a];return n}var zf=Rl("animationend"),Bf=Rl("animationiteration"),$f=Rl("animationstart"),Hf=Rl("transitionend"),Wf=new Map,qf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Kr(n,r){Wf.set(n,r),u(r,[n])}for(var Mc=0;Mc<qf.length;Mc++){var Lc=qf[Mc],o0=Lc.toLowerCase(),a0=Lc[0].toUpperCase()+Lc.slice(1);Kr(o0,"on"+a0)}Kr(zf,"onAnimationEnd"),Kr(Bf,"onAnimationIteration"),Kr($f,"onAnimationStart"),Kr("dblclick","onDoubleClick"),Kr("focusin","onFocus"),Kr("focusout","onBlur"),Kr(Hf,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var sa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),l0=new Set("cancel close invalid load scroll toggle".split(" ").concat(sa));function Gf(n,r,a){var c=n.type||"unknown-event";n.currentTarget=a,sl(c,r,void 0,n),n.currentTarget=null}function Kf(n,r){r=(r&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],d=c.event;c=c.listeners;e:{var p=void 0;if(r)for(var _=c.length-1;0<=_;_--){var I=c[_],C=I.instance,U=I.currentTarget;if(I=I.listener,C!==p&&d.isPropagationStopped())break e;Gf(d,I,U),p=C}else for(_=0;_<c.length;_++){if(I=c[_],C=I.instance,U=I.currentTarget,I=I.listener,C!==p&&d.isPropagationStopped())break e;Gf(d,I,U),p=C}}}if(An)throw n=$o,An=!1,$o=null,n}function qe(n,r){var a=r[Wc];a===void 0&&(a=r[Wc]=new Set);var c=n+"__bubble";a.has(c)||(Qf(r,n,2,!1),a.add(c))}function jc(n,r,a){var c=0;r&&(c|=4),Qf(a,n,c,r)}var Pl="_reactListening"+Math.random().toString(36).slice(2);function oa(n){if(!n[Pl]){n[Pl]=!0,s.forEach(function(a){a!=="selectionchange"&&(l0.has(a)||jc(a,!1,n),jc(a,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[Pl]||(r[Pl]=!0,jc("selectionchange",!1,r))}}function Qf(n,r,a,c){switch(Yo(r)){case 1:var d=Xe;break;case 4:d=Cc;break;default:d=Qo}a=d.bind(null,r,a,n),d=void 0,!Es||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(d=!0),c?d!==void 0?n.addEventListener(r,a,{capture:!0,passive:d}):n.addEventListener(r,a,!0):d!==void 0?n.addEventListener(r,a,{passive:d}):n.addEventListener(r,a,!1)}function Fc(n,r,a,c,d){var p=c;if((r&1)===0&&(r&2)===0&&c!==null)e:for(;;){if(c===null)return;var _=c.tag;if(_===3||_===4){var I=c.stateNode.containerInfo;if(I===d||I.nodeType===8&&I.parentNode===d)break;if(_===4)for(_=c.return;_!==null;){var C=_.tag;if((C===3||C===4)&&(C=_.stateNode.containerInfo,C===d||C.nodeType===8&&C.parentNode===d))return;_=_.return}for(;I!==null;){if(_=$i(I),_===null)return;if(C=_.tag,C===5||C===6){c=p=_;continue e}I=I.parentNode}}c=c.return}Bo(function(){var U=p,K=_s(a),Q=[];e:{var q=Wf.get(n);if(q!==void 0){var ne=bs,se=n;switch(n){case"keypress":if(Ns(a)===0)break e;case"keydown":case"keyup":ne=f;break;case"focusin":se="focus",ne=Ms;break;case"focusout":se="blur",ne=Ms;break;case"beforeblur":case"afterblur":ne=Ms;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ne=Vs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ne=wl;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ne=z;break;case zf:case Bf:case $f:ne=wr;break;case Hf:ne=ze;break;case"scroll":ne=Rc;break;case"wheel":ne=Oe;break;case"copy":case"cut":case"paste":ne=Il;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ne=w}var oe=(r&4)!==0,st=!oe&&n==="scroll",L=oe?q!==null?q+"Capture":null:q;oe=[];for(var P=U,F;P!==null;){F=P;var X=F.stateNode;if(F.tag===5&&X!==null&&(F=X,L!==null&&(X=it(P,L),X!=null&&oe.push(aa(P,X,F)))),st)break;P=P.return}0<oe.length&&(q=new ne(q,se,null,a,K),Q.push({event:q,listeners:oe}))}}if((r&7)===0){e:{if(q=n==="mouseover"||n==="pointerover",ne=n==="mouseout"||n==="pointerout",q&&a!==Pi&&(se=a.relatedTarget||a.fromElement)&&($i(se)||se[Er]))break e;if((ne||q)&&(q=K.window===K?K:(q=K.ownerDocument)?q.defaultView||q.parentWindow:window,ne?(se=a.relatedTarget||a.toElement,ne=U,se=se?$i(se):null,se!==null&&(st=Cn(se),se!==st||se.tag!==5&&se.tag!==6)&&(se=null)):(ne=null,se=U),ne!==se)){if(oe=Vs,X="onMouseLeave",L="onMouseEnter",P="mouse",(n==="pointerout"||n==="pointerover")&&(oe=w,X="onPointerLeave",L="onPointerEnter",P="pointer"),st=ne==null?q:Hs(ne),F=se==null?q:Hs(se),q=new oe(X,P+"leave",ne,a,K),q.target=st,q.relatedTarget=F,X=null,$i(K)===U&&(oe=new oe(L,P+"enter",se,a,K),oe.target=F,oe.relatedTarget=st,X=oe),st=X,ne&&se)t:{for(oe=ne,L=se,P=0,F=oe;F;F=Bs(F))P++;for(F=0,X=L;X;X=Bs(X))F++;for(;0<P-F;)oe=Bs(oe),P--;for(;0<F-P;)L=Bs(L),F--;for(;P--;){if(oe===L||L!==null&&oe===L.alternate)break t;oe=Bs(oe),L=Bs(L)}oe=null}else oe=null;ne!==null&&Yf(Q,q,ne,oe,!1),se!==null&&st!==null&&Yf(Q,st,se,oe,!0)}}e:{if(q=U?Hs(U):window,ne=q.nodeName&&q.nodeName.toLowerCase(),ne==="select"||ne==="input"&&q.type==="file")var ae=Jv;else if(Rf(q))if(Nf)ae=n0;else{ae=e0;var me=Zv}else(ne=q.nodeName)&&ne.toLowerCase()==="input"&&(q.type==="checkbox"||q.type==="radio")&&(ae=t0);if(ae&&(ae=ae(n,U))){Pf(Q,ae,a,K);break e}me&&me(n,q,U),n==="focusout"&&(me=q._wrapperState)&&me.controlled&&q.type==="number"&&ms(q,"number",q.value)}switch(me=U?Hs(U):window,n){case"focusin":(Rf(me)||me.contentEditable==="true")&&(Us=me,Dc=U,ia=null);break;case"focusout":ia=Dc=Us=null;break;case"mousedown":Vc=!0;break;case"contextmenu":case"mouseup":case"dragend":Vc=!1,Ff(Q,a,K);break;case"selectionchange":if(s0)break;case"keydown":case"keyup":Ff(Q,a,K)}var ge;if(at)e:{switch(n){case"compositionstart":var Ee="onCompositionStart";break e;case"compositionend":Ee="onCompositionEnd";break e;case"compositionupdate":Ee="onCompositionUpdate";break e}Ee=void 0}else Fs?Af(n,a)&&(Ee="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(Ee="onCompositionStart");Ee&&(Bi&&a.locale!=="ko"&&(Fs||Ee!=="onCompositionStart"?Ee==="onCompositionEnd"&&Fs&&(ge=Xo()):(on=K,Ps="value"in on?on.value:on.textContent,Fs=!0)),me=Nl(U,Ee),0<me.length&&(Ee=new ea(Ee,n,null,a,K),Q.push({event:Ee,listeners:me}),ge?Ee.data=ge:(ge=Cf(a),ge!==null&&(Ee.data=ge)))),(ge=an?Kv(n,a):Qv(n,a))&&(U=Nl(U,"onBeforeInput"),0<U.length&&(K=new ea("onBeforeInput","beforeinput",null,a,K),Q.push({event:K,listeners:U}),K.data=ge))}Kf(Q,r)})}function aa(n,r,a){return{instance:n,listener:r,currentTarget:a}}function Nl(n,r){for(var a=r+"Capture",c=[];n!==null;){var d=n,p=d.stateNode;d.tag===5&&p!==null&&(d=p,p=it(n,a),p!=null&&c.unshift(aa(n,p,d)),p=it(n,r),p!=null&&c.push(aa(n,p,d))),n=n.return}return c}function Bs(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Yf(n,r,a,c,d){for(var p=r._reactName,_=[];a!==null&&a!==c;){var I=a,C=I.alternate,U=I.stateNode;if(C!==null&&C===c)break;I.tag===5&&U!==null&&(I=U,d?(C=it(a,p),C!=null&&_.unshift(aa(a,C,I))):d||(C=it(a,p),C!=null&&_.push(aa(a,C,I)))),a=a.return}_.length!==0&&n.push({event:r,listeners:_})}var u0=/\r\n?/g,c0=/\u0000|\uFFFD/g;function Xf(n){return(typeof n=="string"?n:""+n).replace(u0,`
`).replace(c0,"")}function bl(n,r,a){if(r=Xf(r),Xf(n)!==r&&a)throw Error(t(425))}function Dl(){}var Uc=null,zc=null;function Bc(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var $c=typeof setTimeout=="function"?setTimeout:void 0,h0=typeof clearTimeout=="function"?clearTimeout:void 0,Jf=typeof Promise=="function"?Promise:void 0,d0=typeof queueMicrotask=="function"?queueMicrotask:typeof Jf<"u"?function(n){return Jf.resolve(null).then(n).catch(f0)}:$c;function f0(n){setTimeout(function(){throw n})}function Hc(n,r){var a=r,c=0;do{var d=a.nextSibling;if(n.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(c===0){n.removeChild(d),Dn(r);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=d}while(a);Dn(r)}function Qr(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return n}function Zf(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(r===0)return n;r--}else a==="/$"&&r++}n=n.previousSibling}return null}var $s=Math.random().toString(36).slice(2),Xn="__reactFiber$"+$s,la="__reactProps$"+$s,Er="__reactContainer$"+$s,Wc="__reactEvents$"+$s,p0="__reactListeners$"+$s,m0="__reactHandles$"+$s;function $i(n){var r=n[Xn];if(r)return r;for(var a=n.parentNode;a;){if(r=a[Er]||a[Xn]){if(a=r.alternate,r.child!==null||a!==null&&a.child!==null)for(n=Zf(n);n!==null;){if(a=n[Xn])return a;n=Zf(n)}return r}n=a,a=n.parentNode}return null}function ua(n){return n=n[Xn]||n[Er],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Hs(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Vl(n){return n[la]||null}var qc=[],Ws=-1;function Yr(n){return{current:n}}function Ge(n){0>Ws||(n.current=qc[Ws],qc[Ws]=null,Ws--)}function He(n,r){Ws++,qc[Ws]=n.current,n.current=r}var Xr={},Vt=Yr(Xr),Kt=Yr(!1),Hi=Xr;function qs(n,r){var a=n.type.contextTypes;if(!a)return Xr;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===r)return c.__reactInternalMemoizedMaskedChildContext;var d={},p;for(p in a)d[p]=r[p];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=d),d}function Qt(n){return n=n.childContextTypes,n!=null}function Ol(){Ge(Kt),Ge(Vt)}function ep(n,r,a){if(Vt.current!==Xr)throw Error(t(168));He(Vt,r),He(Kt,a)}function tp(n,r,a){var c=n.stateNode;if(r=r.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var d in c)if(!(d in r))throw Error(t(108,he(n)||"Unknown",d));return te({},a,c)}function Ml(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Xr,Hi=Vt.current,He(Vt,n),He(Kt,Kt.current),!0}function np(n,r,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=tp(n,r,Hi),c.__reactInternalMemoizedMergedChildContext=n,Ge(Kt),Ge(Vt),He(Vt,n)):Ge(Kt),He(Kt,a)}var Tr=null,Ll=!1,Gc=!1;function rp(n){Tr===null?Tr=[n]:Tr.push(n)}function g0(n){Ll=!0,rp(n)}function Jr(){if(!Gc&&Tr!==null){Gc=!0;var n=0,r=De;try{var a=Tr;for(De=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}Tr=null,Ll=!1}catch(d){throw Tr!==null&&(Tr=Tr.slice(n+1)),ks(Oi,Jr),d}finally{De=r,Gc=!1}}return null}var Gs=[],Ks=0,jl=null,Fl=0,mn=[],gn=0,Wi=null,Ir=1,Sr="";function qi(n,r){Gs[Ks++]=Fl,Gs[Ks++]=jl,jl=n,Fl=r}function ip(n,r,a){mn[gn++]=Ir,mn[gn++]=Sr,mn[gn++]=Wi,Wi=n;var c=Ir;n=Sr;var d=32-Bt(c)-1;c&=~(1<<d),a+=1;var p=32-Bt(r)+d;if(30<p){var _=d-d%5;p=(c&(1<<_)-1).toString(32),c>>=_,d-=_,Ir=1<<32-Bt(r)+d|a<<d|c,Sr=p+n}else Ir=1<<p|a<<d|c,Sr=n}function Kc(n){n.return!==null&&(qi(n,1),ip(n,1,0))}function Qc(n){for(;n===jl;)jl=Gs[--Ks],Gs[Ks]=null,Fl=Gs[--Ks],Gs[Ks]=null;for(;n===Wi;)Wi=mn[--gn],mn[gn]=null,Sr=mn[--gn],mn[gn]=null,Ir=mn[--gn],mn[gn]=null}var ln=null,un=null,Je=!1,Mn=null;function sp(n,r){var a=wn(5,null,null,0);a.elementType="DELETED",a.stateNode=r,a.return=n,r=n.deletions,r===null?(n.deletions=[a],n.flags|=16):r.push(a)}function op(n,r){switch(n.tag){case 5:var a=n.type;return r=r.nodeType!==1||a.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(n.stateNode=r,ln=n,un=Qr(r.firstChild),!0):!1;case 6:return r=n.pendingProps===""||r.nodeType!==3?null:r,r!==null?(n.stateNode=r,ln=n,un=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(a=Wi!==null?{id:Ir,overflow:Sr}:null,n.memoizedState={dehydrated:r,treeContext:a,retryLane:1073741824},a=wn(18,null,null,0),a.stateNode=r,a.return=n,n.child=a,ln=n,un=null,!0):!1;default:return!1}}function Yc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Xc(n){if(Je){var r=un;if(r){var a=r;if(!op(n,r)){if(Yc(n))throw Error(t(418));r=Qr(a.nextSibling);var c=ln;r&&op(n,r)?sp(c,a):(n.flags=n.flags&-4097|2,Je=!1,ln=n)}}else{if(Yc(n))throw Error(t(418));n.flags=n.flags&-4097|2,Je=!1,ln=n}}}function ap(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;ln=n}function Ul(n){if(n!==ln)return!1;if(!Je)return ap(n),Je=!0,!1;var r;if((r=n.tag!==3)&&!(r=n.tag!==5)&&(r=n.type,r=r!=="head"&&r!=="body"&&!Bc(n.type,n.memoizedProps)),r&&(r=un)){if(Yc(n))throw lp(),Error(t(418));for(;r;)sp(n,r),r=Qr(r.nextSibling)}if(ap(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(r===0){un=Qr(n.nextSibling);break e}r--}else a!=="$"&&a!=="$!"&&a!=="$?"||r++}n=n.nextSibling}un=null}}else un=ln?Qr(n.stateNode.nextSibling):null;return!0}function lp(){for(var n=un;n;)n=Qr(n.nextSibling)}function Qs(){un=ln=null,Je=!1}function Jc(n){Mn===null?Mn=[n]:Mn.push(n)}var y0=Ae.ReactCurrentBatchConfig;function ca(n,r,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var d=c,p=""+n;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===p?r.ref:(r=function(_){var I=d.refs;_===null?delete I[p]:I[p]=_},r._stringRef=p,r)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function zl(n,r){throw n=Object.prototype.toString.call(r),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n))}function up(n){var r=n._init;return r(n._payload)}function cp(n){function r(L,P){if(n){var F=L.deletions;F===null?(L.deletions=[P],L.flags|=16):F.push(P)}}function a(L,P){if(!n)return null;for(;P!==null;)r(L,P),P=P.sibling;return null}function c(L,P){for(L=new Map;P!==null;)P.key!==null?L.set(P.key,P):L.set(P.index,P),P=P.sibling;return L}function d(L,P){return L=oi(L,P),L.index=0,L.sibling=null,L}function p(L,P,F){return L.index=F,n?(F=L.alternate,F!==null?(F=F.index,F<P?(L.flags|=2,P):F):(L.flags|=2,P)):(L.flags|=1048576,P)}function _(L){return n&&L.alternate===null&&(L.flags|=2),L}function I(L,P,F,X){return P===null||P.tag!==6?(P=$h(F,L.mode,X),P.return=L,P):(P=d(P,F),P.return=L,P)}function C(L,P,F,X){var ae=F.type;return ae===b?K(L,P,F.props.children,X,F.key):P!==null&&(P.elementType===ae||typeof ae=="object"&&ae!==null&&ae.$$typeof===wt&&up(ae)===P.type)?(X=d(P,F.props),X.ref=ca(L,P,F),X.return=L,X):(X=hu(F.type,F.key,F.props,null,L.mode,X),X.ref=ca(L,P,F),X.return=L,X)}function U(L,P,F,X){return P===null||P.tag!==4||P.stateNode.containerInfo!==F.containerInfo||P.stateNode.implementation!==F.implementation?(P=Hh(F,L.mode,X),P.return=L,P):(P=d(P,F.children||[]),P.return=L,P)}function K(L,P,F,X,ae){return P===null||P.tag!==7?(P=es(F,L.mode,X,ae),P.return=L,P):(P=d(P,F),P.return=L,P)}function Q(L,P,F){if(typeof P=="string"&&P!==""||typeof P=="number")return P=$h(""+P,L.mode,F),P.return=L,P;if(typeof P=="object"&&P!==null){switch(P.$$typeof){case We:return F=hu(P.type,P.key,P.props,null,L.mode,F),F.ref=ca(L,null,P),F.return=L,F;case Ve:return P=Hh(P,L.mode,F),P.return=L,P;case wt:var X=P._init;return Q(L,X(P._payload),F)}if(dr(P)||de(P))return P=es(P,L.mode,F,null),P.return=L,P;zl(L,P)}return null}function q(L,P,F,X){var ae=P!==null?P.key:null;if(typeof F=="string"&&F!==""||typeof F=="number")return ae!==null?null:I(L,P,""+F,X);if(typeof F=="object"&&F!==null){switch(F.$$typeof){case We:return F.key===ae?C(L,P,F,X):null;case Ve:return F.key===ae?U(L,P,F,X):null;case wt:return ae=F._init,q(L,P,ae(F._payload),X)}if(dr(F)||de(F))return ae!==null?null:K(L,P,F,X,null);zl(L,F)}return null}function ne(L,P,F,X,ae){if(typeof X=="string"&&X!==""||typeof X=="number")return L=L.get(F)||null,I(P,L,""+X,ae);if(typeof X=="object"&&X!==null){switch(X.$$typeof){case We:return L=L.get(X.key===null?F:X.key)||null,C(P,L,X,ae);case Ve:return L=L.get(X.key===null?F:X.key)||null,U(P,L,X,ae);case wt:var me=X._init;return ne(L,P,F,me(X._payload),ae)}if(dr(X)||de(X))return L=L.get(F)||null,K(P,L,X,ae,null);zl(P,X)}return null}function se(L,P,F,X){for(var ae=null,me=null,ge=P,Ee=P=0,St=null;ge!==null&&Ee<F.length;Ee++){ge.index>Ee?(St=ge,ge=null):St=ge.sibling;var je=q(L,ge,F[Ee],X);if(je===null){ge===null&&(ge=St);break}n&&ge&&je.alternate===null&&r(L,ge),P=p(je,P,Ee),me===null?ae=je:me.sibling=je,me=je,ge=St}if(Ee===F.length)return a(L,ge),Je&&qi(L,Ee),ae;if(ge===null){for(;Ee<F.length;Ee++)ge=Q(L,F[Ee],X),ge!==null&&(P=p(ge,P,Ee),me===null?ae=ge:me.sibling=ge,me=ge);return Je&&qi(L,Ee),ae}for(ge=c(L,ge);Ee<F.length;Ee++)St=ne(ge,L,Ee,F[Ee],X),St!==null&&(n&&St.alternate!==null&&ge.delete(St.key===null?Ee:St.key),P=p(St,P,Ee),me===null?ae=St:me.sibling=St,me=St);return n&&ge.forEach(function(ai){return r(L,ai)}),Je&&qi(L,Ee),ae}function oe(L,P,F,X){var ae=de(F);if(typeof ae!="function")throw Error(t(150));if(F=ae.call(F),F==null)throw Error(t(151));for(var me=ae=null,ge=P,Ee=P=0,St=null,je=F.next();ge!==null&&!je.done;Ee++,je=F.next()){ge.index>Ee?(St=ge,ge=null):St=ge.sibling;var ai=q(L,ge,je.value,X);if(ai===null){ge===null&&(ge=St);break}n&&ge&&ai.alternate===null&&r(L,ge),P=p(ai,P,Ee),me===null?ae=ai:me.sibling=ai,me=ai,ge=St}if(je.done)return a(L,ge),Je&&qi(L,Ee),ae;if(ge===null){for(;!je.done;Ee++,je=F.next())je=Q(L,je.value,X),je!==null&&(P=p(je,P,Ee),me===null?ae=je:me.sibling=je,me=je);return Je&&qi(L,Ee),ae}for(ge=c(L,ge);!je.done;Ee++,je=F.next())je=ne(ge,L,Ee,je.value,X),je!==null&&(n&&je.alternate!==null&&ge.delete(je.key===null?Ee:je.key),P=p(je,P,Ee),me===null?ae=je:me.sibling=je,me=je);return n&&ge.forEach(function(Y0){return r(L,Y0)}),Je&&qi(L,Ee),ae}function st(L,P,F,X){if(typeof F=="object"&&F!==null&&F.type===b&&F.key===null&&(F=F.props.children),typeof F=="object"&&F!==null){switch(F.$$typeof){case We:e:{for(var ae=F.key,me=P;me!==null;){if(me.key===ae){if(ae=F.type,ae===b){if(me.tag===7){a(L,me.sibling),P=d(me,F.props.children),P.return=L,L=P;break e}}else if(me.elementType===ae||typeof ae=="object"&&ae!==null&&ae.$$typeof===wt&&up(ae)===me.type){a(L,me.sibling),P=d(me,F.props),P.ref=ca(L,me,F),P.return=L,L=P;break e}a(L,me);break}else r(L,me);me=me.sibling}F.type===b?(P=es(F.props.children,L.mode,X,F.key),P.return=L,L=P):(X=hu(F.type,F.key,F.props,null,L.mode,X),X.ref=ca(L,P,F),X.return=L,L=X)}return _(L);case Ve:e:{for(me=F.key;P!==null;){if(P.key===me)if(P.tag===4&&P.stateNode.containerInfo===F.containerInfo&&P.stateNode.implementation===F.implementation){a(L,P.sibling),P=d(P,F.children||[]),P.return=L,L=P;break e}else{a(L,P);break}else r(L,P);P=P.sibling}P=Hh(F,L.mode,X),P.return=L,L=P}return _(L);case wt:return me=F._init,st(L,P,me(F._payload),X)}if(dr(F))return se(L,P,F,X);if(de(F))return oe(L,P,F,X);zl(L,F)}return typeof F=="string"&&F!==""||typeof F=="number"?(F=""+F,P!==null&&P.tag===6?(a(L,P.sibling),P=d(P,F),P.return=L,L=P):(a(L,P),P=$h(F,L.mode,X),P.return=L,L=P),_(L)):a(L,P)}return st}var Ys=cp(!0),hp=cp(!1),Bl=Yr(null),$l=null,Xs=null,Zc=null;function eh(){Zc=Xs=$l=null}function th(n){var r=Bl.current;Ge(Bl),n._currentValue=r}function nh(n,r,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,c!==null&&(c.childLanes|=r)):c!==null&&(c.childLanes&r)!==r&&(c.childLanes|=r),n===a)break;n=n.return}}function Js(n,r){$l=n,Zc=Xs=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&r)!==0&&(Yt=!0),n.firstContext=null)}function yn(n){var r=n._currentValue;if(Zc!==n)if(n={context:n,memoizedValue:r,next:null},Xs===null){if($l===null)throw Error(t(308));Xs=n,$l.dependencies={lanes:0,firstContext:n}}else Xs=Xs.next=n;return r}var Gi=null;function rh(n){Gi===null?Gi=[n]:Gi.push(n)}function dp(n,r,a,c){var d=r.interleaved;return d===null?(a.next=a,rh(r)):(a.next=d.next,d.next=a),r.interleaved=a,kr(n,c)}function kr(n,r){n.lanes|=r;var a=n.alternate;for(a!==null&&(a.lanes|=r),a=n,n=n.return;n!==null;)n.childLanes|=r,a=n.alternate,a!==null&&(a.childLanes|=r),a=n,n=n.return;return a.tag===3?a.stateNode:null}var Zr=!1;function ih(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function fp(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function xr(n,r){return{eventTime:n,lane:r,tag:0,payload:null,callback:null,next:null}}function ei(n,r,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(Le&2)!==0){var d=c.pending;return d===null?r.next=r:(r.next=d.next,d.next=r),c.pending=r,kr(n,a)}return d=c.interleaved,d===null?(r.next=r,rh(c)):(r.next=d.next,d.next=r),c.interleaved=r,kr(n,a)}function Hl(n,r,a){if(r=r.updateQueue,r!==null&&(r=r.shared,(a&4194240)!==0)){var c=r.lanes;c&=n.pendingLanes,a|=c,r.lanes=a,$r(n,a)}}function pp(n,r){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,p=null;if(a=a.firstBaseUpdate,a!==null){do{var _={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};p===null?d=p=_:p=p.next=_,a=a.next}while(a!==null);p===null?d=p=r:p=p.next=r}else d=p=r;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:p,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=r:n.next=r,a.lastBaseUpdate=r}function Wl(n,r,a,c){var d=n.updateQueue;Zr=!1;var p=d.firstBaseUpdate,_=d.lastBaseUpdate,I=d.shared.pending;if(I!==null){d.shared.pending=null;var C=I,U=C.next;C.next=null,_===null?p=U:_.next=U,_=C;var K=n.alternate;K!==null&&(K=K.updateQueue,I=K.lastBaseUpdate,I!==_&&(I===null?K.firstBaseUpdate=U:I.next=U,K.lastBaseUpdate=C))}if(p!==null){var Q=d.baseState;_=0,K=U=C=null,I=p;do{var q=I.lane,ne=I.eventTime;if((c&q)===q){K!==null&&(K=K.next={eventTime:ne,lane:0,tag:I.tag,payload:I.payload,callback:I.callback,next:null});e:{var se=n,oe=I;switch(q=r,ne=a,oe.tag){case 1:if(se=oe.payload,typeof se=="function"){Q=se.call(ne,Q,q);break e}Q=se;break e;case 3:se.flags=se.flags&-65537|128;case 0:if(se=oe.payload,q=typeof se=="function"?se.call(ne,Q,q):se,q==null)break e;Q=te({},Q,q);break e;case 2:Zr=!0}}I.callback!==null&&I.lane!==0&&(n.flags|=64,q=d.effects,q===null?d.effects=[I]:q.push(I))}else ne={eventTime:ne,lane:q,tag:I.tag,payload:I.payload,callback:I.callback,next:null},K===null?(U=K=ne,C=Q):K=K.next=ne,_|=q;if(I=I.next,I===null){if(I=d.shared.pending,I===null)break;q=I,I=q.next,q.next=null,d.lastBaseUpdate=q,d.shared.pending=null}}while(!0);if(K===null&&(C=Q),d.baseState=C,d.firstBaseUpdate=U,d.lastBaseUpdate=K,r=d.shared.interleaved,r!==null){d=r;do _|=d.lane,d=d.next;while(d!==r)}else p===null&&(d.shared.lanes=0);Yi|=_,n.lanes=_,n.memoizedState=Q}}function mp(n,r,a){if(n=r.effects,r.effects=null,n!==null)for(r=0;r<n.length;r++){var c=n[r],d=c.callback;if(d!==null){if(c.callback=null,c=a,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var ha={},Jn=Yr(ha),da=Yr(ha),fa=Yr(ha);function Ki(n){if(n===ha)throw Error(t(174));return n}function sh(n,r){switch(He(fa,r),He(da,n),He(Jn,ha),n=r.nodeType,n){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:dt(null,"");break;default:n=n===8?r.parentNode:r,r=n.namespaceURI||null,n=n.tagName,r=dt(r,n)}Ge(Jn),He(Jn,r)}function Zs(){Ge(Jn),Ge(da),Ge(fa)}function gp(n){Ki(fa.current);var r=Ki(Jn.current),a=dt(r,n.type);r!==a&&(He(da,n),He(Jn,a))}function oh(n){da.current===n&&(Ge(Jn),Ge(da))}var et=Yr(0);function ql(n){for(var r=n;r!==null;){if(r.tag===13){var a=r.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var ah=[];function lh(){for(var n=0;n<ah.length;n++)ah[n]._workInProgressVersionPrimary=null;ah.length=0}var Gl=Ae.ReactCurrentDispatcher,uh=Ae.ReactCurrentBatchConfig,Qi=0,tt=null,pt=null,Tt=null,Kl=!1,pa=!1,ma=0,_0=0;function Ot(){throw Error(t(321))}function ch(n,r){if(r===null)return!1;for(var a=0;a<r.length&&a<n.length;a++)if(!On(n[a],r[a]))return!1;return!0}function hh(n,r,a,c,d,p){if(Qi=p,tt=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,Gl.current=n===null||n.memoizedState===null?T0:I0,n=a(c,d),pa){p=0;do{if(pa=!1,ma=0,25<=p)throw Error(t(301));p+=1,Tt=pt=null,r.updateQueue=null,Gl.current=S0,n=a(c,d)}while(pa)}if(Gl.current=Xl,r=pt!==null&&pt.next!==null,Qi=0,Tt=pt=tt=null,Kl=!1,r)throw Error(t(300));return n}function dh(){var n=ma!==0;return ma=0,n}function Zn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Tt===null?tt.memoizedState=Tt=n:Tt=Tt.next=n,Tt}function _n(){if(pt===null){var n=tt.alternate;n=n!==null?n.memoizedState:null}else n=pt.next;var r=Tt===null?tt.memoizedState:Tt.next;if(r!==null)Tt=r,pt=n;else{if(n===null)throw Error(t(310));pt=n,n={memoizedState:pt.memoizedState,baseState:pt.baseState,baseQueue:pt.baseQueue,queue:pt.queue,next:null},Tt===null?tt.memoizedState=Tt=n:Tt=Tt.next=n}return Tt}function ga(n,r){return typeof r=="function"?r(n):r}function fh(n){var r=_n(),a=r.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=pt,d=c.baseQueue,p=a.pending;if(p!==null){if(d!==null){var _=d.next;d.next=p.next,p.next=_}c.baseQueue=d=p,a.pending=null}if(d!==null){p=d.next,c=c.baseState;var I=_=null,C=null,U=p;do{var K=U.lane;if((Qi&K)===K)C!==null&&(C=C.next={lane:0,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null}),c=U.hasEagerState?U.eagerState:n(c,U.action);else{var Q={lane:K,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null};C===null?(I=C=Q,_=c):C=C.next=Q,tt.lanes|=K,Yi|=K}U=U.next}while(U!==null&&U!==p);C===null?_=c:C.next=I,On(c,r.memoizedState)||(Yt=!0),r.memoizedState=c,r.baseState=_,r.baseQueue=C,a.lastRenderedState=c}if(n=a.interleaved,n!==null){d=n;do p=d.lane,tt.lanes|=p,Yi|=p,d=d.next;while(d!==n)}else d===null&&(a.lanes=0);return[r.memoizedState,a.dispatch]}function ph(n){var r=_n(),a=r.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,d=a.pending,p=r.memoizedState;if(d!==null){a.pending=null;var _=d=d.next;do p=n(p,_.action),_=_.next;while(_!==d);On(p,r.memoizedState)||(Yt=!0),r.memoizedState=p,r.baseQueue===null&&(r.baseState=p),a.lastRenderedState=p}return[p,c]}function yp(){}function _p(n,r){var a=tt,c=_n(),d=r(),p=!On(c.memoizedState,d);if(p&&(c.memoizedState=d,Yt=!0),c=c.queue,mh(Ep.bind(null,a,c,n),[n]),c.getSnapshot!==r||p||Tt!==null&&Tt.memoizedState.tag&1){if(a.flags|=2048,ya(9,wp.bind(null,a,c,d,r),void 0,null),It===null)throw Error(t(349));(Qi&30)!==0||vp(a,r,d)}return d}function vp(n,r,a){n.flags|=16384,n={getSnapshot:r,value:a},r=tt.updateQueue,r===null?(r={lastEffect:null,stores:null},tt.updateQueue=r,r.stores=[n]):(a=r.stores,a===null?r.stores=[n]:a.push(n))}function wp(n,r,a,c){r.value=a,r.getSnapshot=c,Tp(r)&&Ip(n)}function Ep(n,r,a){return a(function(){Tp(r)&&Ip(n)})}function Tp(n){var r=n.getSnapshot;n=n.value;try{var a=r();return!On(n,a)}catch{return!0}}function Ip(n){var r=kr(n,1);r!==null&&Un(r,n,1,-1)}function Sp(n){var r=Zn();return typeof n=="function"&&(n=n()),r.memoizedState=r.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ga,lastRenderedState:n},r.queue=n,n=n.dispatch=E0.bind(null,tt,n),[r.memoizedState,n]}function ya(n,r,a,c){return n={tag:n,create:r,destroy:a,deps:c,next:null},r=tt.updateQueue,r===null?(r={lastEffect:null,stores:null},tt.updateQueue=r,r.lastEffect=n.next=n):(a=r.lastEffect,a===null?r.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,r.lastEffect=n)),n}function kp(){return _n().memoizedState}function Ql(n,r,a,c){var d=Zn();tt.flags|=n,d.memoizedState=ya(1|r,a,void 0,c===void 0?null:c)}function Yl(n,r,a,c){var d=_n();c=c===void 0?null:c;var p=void 0;if(pt!==null){var _=pt.memoizedState;if(p=_.destroy,c!==null&&ch(c,_.deps)){d.memoizedState=ya(r,a,p,c);return}}tt.flags|=n,d.memoizedState=ya(1|r,a,p,c)}function xp(n,r){return Ql(8390656,8,n,r)}function mh(n,r){return Yl(2048,8,n,r)}function Ap(n,r){return Yl(4,2,n,r)}function Cp(n,r){return Yl(4,4,n,r)}function Rp(n,r){if(typeof r=="function")return n=n(),r(n),function(){r(null)};if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function Pp(n,r,a){return a=a!=null?a.concat([n]):null,Yl(4,4,Rp.bind(null,r,n),a)}function gh(){}function Np(n,r){var a=_n();r=r===void 0?null:r;var c=a.memoizedState;return c!==null&&r!==null&&ch(r,c[1])?c[0]:(a.memoizedState=[n,r],n)}function bp(n,r){var a=_n();r=r===void 0?null:r;var c=a.memoizedState;return c!==null&&r!==null&&ch(r,c[1])?c[0]:(n=n(),a.memoizedState=[n,r],n)}function Dp(n,r,a){return(Qi&21)===0?(n.baseState&&(n.baseState=!1,Yt=!0),n.memoizedState=a):(On(a,r)||(a=ji(),tt.lanes|=a,Yi|=a,n.baseState=!0),r)}function v0(n,r){var a=De;De=a!==0&&4>a?a:4,n(!0);var c=uh.transition;uh.transition={};try{n(!1),r()}finally{De=a,uh.transition=c}}function Vp(){return _n().memoizedState}function w0(n,r,a){var c=ii(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},Op(n))Mp(r,a);else if(a=dp(n,r,a,c),a!==null){var d=Wt();Un(a,n,c,d),Lp(a,r,c)}}function E0(n,r,a){var c=ii(n),d={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(Op(n))Mp(r,d);else{var p=n.alternate;if(n.lanes===0&&(p===null||p.lanes===0)&&(p=r.lastRenderedReducer,p!==null))try{var _=r.lastRenderedState,I=p(_,a);if(d.hasEagerState=!0,d.eagerState=I,On(I,_)){var C=r.interleaved;C===null?(d.next=d,rh(r)):(d.next=C.next,C.next=d),r.interleaved=d;return}}catch{}finally{}a=dp(n,r,d,c),a!==null&&(d=Wt(),Un(a,n,c,d),Lp(a,r,c))}}function Op(n){var r=n.alternate;return n===tt||r!==null&&r===tt}function Mp(n,r){pa=Kl=!0;var a=n.pending;a===null?r.next=r:(r.next=a.next,a.next=r),n.pending=r}function Lp(n,r,a){if((a&4194240)!==0){var c=r.lanes;c&=n.pendingLanes,a|=c,r.lanes=a,$r(n,a)}}var Xl={readContext:yn,useCallback:Ot,useContext:Ot,useEffect:Ot,useImperativeHandle:Ot,useInsertionEffect:Ot,useLayoutEffect:Ot,useMemo:Ot,useReducer:Ot,useRef:Ot,useState:Ot,useDebugValue:Ot,useDeferredValue:Ot,useTransition:Ot,useMutableSource:Ot,useSyncExternalStore:Ot,useId:Ot,unstable_isNewReconciler:!1},T0={readContext:yn,useCallback:function(n,r){return Zn().memoizedState=[n,r===void 0?null:r],n},useContext:yn,useEffect:xp,useImperativeHandle:function(n,r,a){return a=a!=null?a.concat([n]):null,Ql(4194308,4,Rp.bind(null,r,n),a)},useLayoutEffect:function(n,r){return Ql(4194308,4,n,r)},useInsertionEffect:function(n,r){return Ql(4,2,n,r)},useMemo:function(n,r){var a=Zn();return r=r===void 0?null:r,n=n(),a.memoizedState=[n,r],n},useReducer:function(n,r,a){var c=Zn();return r=a!==void 0?a(r):r,c.memoizedState=c.baseState=r,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:r},c.queue=n,n=n.dispatch=w0.bind(null,tt,n),[c.memoizedState,n]},useRef:function(n){var r=Zn();return n={current:n},r.memoizedState=n},useState:Sp,useDebugValue:gh,useDeferredValue:function(n){return Zn().memoizedState=n},useTransition:function(){var n=Sp(!1),r=n[0];return n=v0.bind(null,n[1]),Zn().memoizedState=n,[r,n]},useMutableSource:function(){},useSyncExternalStore:function(n,r,a){var c=tt,d=Zn();if(Je){if(a===void 0)throw Error(t(407));a=a()}else{if(a=r(),It===null)throw Error(t(349));(Qi&30)!==0||vp(c,r,a)}d.memoizedState=a;var p={value:a,getSnapshot:r};return d.queue=p,xp(Ep.bind(null,c,p,n),[n]),c.flags|=2048,ya(9,wp.bind(null,c,p,a,r),void 0,null),a},useId:function(){var n=Zn(),r=It.identifierPrefix;if(Je){var a=Sr,c=Ir;a=(c&~(1<<32-Bt(c)-1)).toString(32)+a,r=":"+r+"R"+a,a=ma++,0<a&&(r+="H"+a.toString(32)),r+=":"}else a=_0++,r=":"+r+"r"+a.toString(32)+":";return n.memoizedState=r},unstable_isNewReconciler:!1},I0={readContext:yn,useCallback:Np,useContext:yn,useEffect:mh,useImperativeHandle:Pp,useInsertionEffect:Ap,useLayoutEffect:Cp,useMemo:bp,useReducer:fh,useRef:kp,useState:function(){return fh(ga)},useDebugValue:gh,useDeferredValue:function(n){var r=_n();return Dp(r,pt.memoizedState,n)},useTransition:function(){var n=fh(ga)[0],r=_n().memoizedState;return[n,r]},useMutableSource:yp,useSyncExternalStore:_p,useId:Vp,unstable_isNewReconciler:!1},S0={readContext:yn,useCallback:Np,useContext:yn,useEffect:mh,useImperativeHandle:Pp,useInsertionEffect:Ap,useLayoutEffect:Cp,useMemo:bp,useReducer:ph,useRef:kp,useState:function(){return ph(ga)},useDebugValue:gh,useDeferredValue:function(n){var r=_n();return pt===null?r.memoizedState=n:Dp(r,pt.memoizedState,n)},useTransition:function(){var n=ph(ga)[0],r=_n().memoizedState;return[n,r]},useMutableSource:yp,useSyncExternalStore:_p,useId:Vp,unstable_isNewReconciler:!1};function Ln(n,r){if(n&&n.defaultProps){r=te({},r),n=n.defaultProps;for(var a in n)r[a]===void 0&&(r[a]=n[a]);return r}return r}function yh(n,r,a,c){r=n.memoizedState,a=a(c,r),a=a==null?r:te({},r,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var Jl={isMounted:function(n){return(n=n._reactInternals)?Cn(n)===n:!1},enqueueSetState:function(n,r,a){n=n._reactInternals;var c=Wt(),d=ii(n),p=xr(c,d);p.payload=r,a!=null&&(p.callback=a),r=ei(n,p,d),r!==null&&(Un(r,n,d,c),Hl(r,n,d))},enqueueReplaceState:function(n,r,a){n=n._reactInternals;var c=Wt(),d=ii(n),p=xr(c,d);p.tag=1,p.payload=r,a!=null&&(p.callback=a),r=ei(n,p,d),r!==null&&(Un(r,n,d,c),Hl(r,n,d))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var a=Wt(),c=ii(n),d=xr(a,c);d.tag=2,r!=null&&(d.callback=r),r=ei(n,d,c),r!==null&&(Un(r,n,c,a),Hl(r,n,c))}};function jp(n,r,a,c,d,p,_){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,p,_):r.prototype&&r.prototype.isPureReactComponent?!ra(a,c)||!ra(d,p):!0}function Fp(n,r,a){var c=!1,d=Xr,p=r.contextType;return typeof p=="object"&&p!==null?p=yn(p):(d=Qt(r)?Hi:Vt.current,c=r.contextTypes,p=(c=c!=null)?qs(n,d):Xr),r=new r(a,p),n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Jl,n.stateNode=r,r._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=p),r}function Up(n,r,a,c){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(a,c),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(a,c),r.state!==n&&Jl.enqueueReplaceState(r,r.state,null)}function _h(n,r,a,c){var d=n.stateNode;d.props=a,d.state=n.memoizedState,d.refs={},ih(n);var p=r.contextType;typeof p=="object"&&p!==null?d.context=yn(p):(p=Qt(r)?Hi:Vt.current,d.context=qs(n,p)),d.state=n.memoizedState,p=r.getDerivedStateFromProps,typeof p=="function"&&(yh(n,r,p,a),d.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(r=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),r!==d.state&&Jl.enqueueReplaceState(d,d.state,null),Wl(n,a,d,c),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function eo(n,r){try{var a="",c=r;do a+=xe(c),c=c.return;while(c);var d=a}catch(p){d=`
Error generating stack: `+p.message+`
`+p.stack}return{value:n,source:r,stack:d,digest:null}}function vh(n,r,a){return{value:n,source:null,stack:a??null,digest:r??null}}function wh(n,r){try{console.error(r.value)}catch(a){setTimeout(function(){throw a})}}var k0=typeof WeakMap=="function"?WeakMap:Map;function zp(n,r,a){a=xr(-1,a),a.tag=3,a.payload={element:null};var c=r.value;return a.callback=function(){su||(su=!0,Oh=c),wh(n,r)},a}function Bp(n,r,a){a=xr(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var d=r.value;a.payload=function(){return c(d)},a.callback=function(){wh(n,r)}}var p=n.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(a.callback=function(){wh(n,r),typeof c!="function"&&(ni===null?ni=new Set([this]):ni.add(this));var _=r.stack;this.componentDidCatch(r.value,{componentStack:_!==null?_:""})}),a}function $p(n,r,a){var c=n.pingCache;if(c===null){c=n.pingCache=new k0;var d=new Set;c.set(r,d)}else d=c.get(r),d===void 0&&(d=new Set,c.set(r,d));d.has(a)||(d.add(a),n=F0.bind(null,n,r,a),r.then(n,n))}function Hp(n){do{var r;if((r=n.tag===13)&&(r=n.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return n;n=n.return}while(n!==null);return null}function Wp(n,r,a,c,d){return(n.mode&1)===0?(n===r?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(r=xr(-1,1),r.tag=2,ei(a,r,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var x0=Ae.ReactCurrentOwner,Yt=!1;function Ht(n,r,a,c){r.child=n===null?hp(r,null,a,c):Ys(r,n.child,a,c)}function qp(n,r,a,c,d){a=a.render;var p=r.ref;return Js(r,d),c=hh(n,r,a,c,p,d),a=dh(),n!==null&&!Yt?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~d,Ar(n,r,d)):(Je&&a&&Kc(r),r.flags|=1,Ht(n,r,c,d),r.child)}function Gp(n,r,a,c,d){if(n===null){var p=a.type;return typeof p=="function"&&!Bh(p)&&p.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(r.tag=15,r.type=p,Kp(n,r,p,c,d)):(n=hu(a.type,null,c,r,r.mode,d),n.ref=r.ref,n.return=r,r.child=n)}if(p=n.child,(n.lanes&d)===0){var _=p.memoizedProps;if(a=a.compare,a=a!==null?a:ra,a(_,c)&&n.ref===r.ref)return Ar(n,r,d)}return r.flags|=1,n=oi(p,c),n.ref=r.ref,n.return=r,r.child=n}function Kp(n,r,a,c,d){if(n!==null){var p=n.memoizedProps;if(ra(p,c)&&n.ref===r.ref)if(Yt=!1,r.pendingProps=c=p,(n.lanes&d)!==0)(n.flags&131072)!==0&&(Yt=!0);else return r.lanes=n.lanes,Ar(n,r,d)}return Eh(n,r,a,c,d)}function Qp(n,r,a){var c=r.pendingProps,d=c.children,p=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},He(no,cn),cn|=a;else{if((a&1073741824)===0)return n=p!==null?p.baseLanes|a:a,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:n,cachePool:null,transitions:null},r.updateQueue=null,He(no,cn),cn|=n,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=p!==null?p.baseLanes:a,He(no,cn),cn|=c}else p!==null?(c=p.baseLanes|a,r.memoizedState=null):c=a,He(no,cn),cn|=c;return Ht(n,r,d,a),r.child}function Yp(n,r){var a=r.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(r.flags|=512,r.flags|=2097152)}function Eh(n,r,a,c,d){var p=Qt(a)?Hi:Vt.current;return p=qs(r,p),Js(r,d),a=hh(n,r,a,c,p,d),c=dh(),n!==null&&!Yt?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~d,Ar(n,r,d)):(Je&&c&&Kc(r),r.flags|=1,Ht(n,r,a,d),r.child)}function Xp(n,r,a,c,d){if(Qt(a)){var p=!0;Ml(r)}else p=!1;if(Js(r,d),r.stateNode===null)eu(n,r),Fp(r,a,c),_h(r,a,c,d),c=!0;else if(n===null){var _=r.stateNode,I=r.memoizedProps;_.props=I;var C=_.context,U=a.contextType;typeof U=="object"&&U!==null?U=yn(U):(U=Qt(a)?Hi:Vt.current,U=qs(r,U));var K=a.getDerivedStateFromProps,Q=typeof K=="function"||typeof _.getSnapshotBeforeUpdate=="function";Q||typeof _.UNSAFE_componentWillReceiveProps!="function"&&typeof _.componentWillReceiveProps!="function"||(I!==c||C!==U)&&Up(r,_,c,U),Zr=!1;var q=r.memoizedState;_.state=q,Wl(r,c,_,d),C=r.memoizedState,I!==c||q!==C||Kt.current||Zr?(typeof K=="function"&&(yh(r,a,K,c),C=r.memoizedState),(I=Zr||jp(r,a,I,c,q,C,U))?(Q||typeof _.UNSAFE_componentWillMount!="function"&&typeof _.componentWillMount!="function"||(typeof _.componentWillMount=="function"&&_.componentWillMount(),typeof _.UNSAFE_componentWillMount=="function"&&_.UNSAFE_componentWillMount()),typeof _.componentDidMount=="function"&&(r.flags|=4194308)):(typeof _.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=c,r.memoizedState=C),_.props=c,_.state=C,_.context=U,c=I):(typeof _.componentDidMount=="function"&&(r.flags|=4194308),c=!1)}else{_=r.stateNode,fp(n,r),I=r.memoizedProps,U=r.type===r.elementType?I:Ln(r.type,I),_.props=U,Q=r.pendingProps,q=_.context,C=a.contextType,typeof C=="object"&&C!==null?C=yn(C):(C=Qt(a)?Hi:Vt.current,C=qs(r,C));var ne=a.getDerivedStateFromProps;(K=typeof ne=="function"||typeof _.getSnapshotBeforeUpdate=="function")||typeof _.UNSAFE_componentWillReceiveProps!="function"&&typeof _.componentWillReceiveProps!="function"||(I!==Q||q!==C)&&Up(r,_,c,C),Zr=!1,q=r.memoizedState,_.state=q,Wl(r,c,_,d);var se=r.memoizedState;I!==Q||q!==se||Kt.current||Zr?(typeof ne=="function"&&(yh(r,a,ne,c),se=r.memoizedState),(U=Zr||jp(r,a,U,c,q,se,C)||!1)?(K||typeof _.UNSAFE_componentWillUpdate!="function"&&typeof _.componentWillUpdate!="function"||(typeof _.componentWillUpdate=="function"&&_.componentWillUpdate(c,se,C),typeof _.UNSAFE_componentWillUpdate=="function"&&_.UNSAFE_componentWillUpdate(c,se,C)),typeof _.componentDidUpdate=="function"&&(r.flags|=4),typeof _.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof _.componentDidUpdate!="function"||I===n.memoizedProps&&q===n.memoizedState||(r.flags|=4),typeof _.getSnapshotBeforeUpdate!="function"||I===n.memoizedProps&&q===n.memoizedState||(r.flags|=1024),r.memoizedProps=c,r.memoizedState=se),_.props=c,_.state=se,_.context=C,c=U):(typeof _.componentDidUpdate!="function"||I===n.memoizedProps&&q===n.memoizedState||(r.flags|=4),typeof _.getSnapshotBeforeUpdate!="function"||I===n.memoizedProps&&q===n.memoizedState||(r.flags|=1024),c=!1)}return Th(n,r,a,c,p,d)}function Th(n,r,a,c,d,p){Yp(n,r);var _=(r.flags&128)!==0;if(!c&&!_)return d&&np(r,a,!1),Ar(n,r,p);c=r.stateNode,x0.current=r;var I=_&&typeof a.getDerivedStateFromError!="function"?null:c.render();return r.flags|=1,n!==null&&_?(r.child=Ys(r,n.child,null,p),r.child=Ys(r,null,I,p)):Ht(n,r,I,p),r.memoizedState=c.state,d&&np(r,a,!0),r.child}function Jp(n){var r=n.stateNode;r.pendingContext?ep(n,r.pendingContext,r.pendingContext!==r.context):r.context&&ep(n,r.context,!1),sh(n,r.containerInfo)}function Zp(n,r,a,c,d){return Qs(),Jc(d),r.flags|=256,Ht(n,r,a,c),r.child}var Ih={dehydrated:null,treeContext:null,retryLane:0};function Sh(n){return{baseLanes:n,cachePool:null,transitions:null}}function em(n,r,a){var c=r.pendingProps,d=et.current,p=!1,_=(r.flags&128)!==0,I;if((I=_)||(I=n!==null&&n.memoizedState===null?!1:(d&2)!==0),I?(p=!0,r.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),He(et,d&1),n===null)return Xc(r),n=r.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((r.mode&1)===0?r.lanes=1:n.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(_=c.children,n=c.fallback,p?(c=r.mode,p=r.child,_={mode:"hidden",children:_},(c&1)===0&&p!==null?(p.childLanes=0,p.pendingProps=_):p=du(_,c,0,null),n=es(n,c,a,null),p.return=r,n.return=r,p.sibling=n,r.child=p,r.child.memoizedState=Sh(a),r.memoizedState=Ih,n):kh(r,_));if(d=n.memoizedState,d!==null&&(I=d.dehydrated,I!==null))return A0(n,r,_,c,I,d,a);if(p){p=c.fallback,_=r.mode,d=n.child,I=d.sibling;var C={mode:"hidden",children:c.children};return(_&1)===0&&r.child!==d?(c=r.child,c.childLanes=0,c.pendingProps=C,r.deletions=null):(c=oi(d,C),c.subtreeFlags=d.subtreeFlags&14680064),I!==null?p=oi(I,p):(p=es(p,_,a,null),p.flags|=2),p.return=r,c.return=r,c.sibling=p,r.child=c,c=p,p=r.child,_=n.child.memoizedState,_=_===null?Sh(a):{baseLanes:_.baseLanes|a,cachePool:null,transitions:_.transitions},p.memoizedState=_,p.childLanes=n.childLanes&~a,r.memoizedState=Ih,c}return p=n.child,n=p.sibling,c=oi(p,{mode:"visible",children:c.children}),(r.mode&1)===0&&(c.lanes=a),c.return=r,c.sibling=null,n!==null&&(a=r.deletions,a===null?(r.deletions=[n],r.flags|=16):a.push(n)),r.child=c,r.memoizedState=null,c}function kh(n,r){return r=du({mode:"visible",children:r},n.mode,0,null),r.return=n,n.child=r}function Zl(n,r,a,c){return c!==null&&Jc(c),Ys(r,n.child,null,a),n=kh(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function A0(n,r,a,c,d,p,_){if(a)return r.flags&256?(r.flags&=-257,c=vh(Error(t(422))),Zl(n,r,_,c)):r.memoizedState!==null?(r.child=n.child,r.flags|=128,null):(p=c.fallback,d=r.mode,c=du({mode:"visible",children:c.children},d,0,null),p=es(p,d,_,null),p.flags|=2,c.return=r,p.return=r,c.sibling=p,r.child=c,(r.mode&1)!==0&&Ys(r,n.child,null,_),r.child.memoizedState=Sh(_),r.memoizedState=Ih,p);if((r.mode&1)===0)return Zl(n,r,_,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var I=c.dgst;return c=I,p=Error(t(419)),c=vh(p,c,void 0),Zl(n,r,_,c)}if(I=(_&n.childLanes)!==0,Yt||I){if(c=It,c!==null){switch(_&-_){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|_))!==0?0:d,d!==0&&d!==p.retryLane&&(p.retryLane=d,kr(n,d),Un(c,n,d,-1))}return zh(),c=vh(Error(t(421))),Zl(n,r,_,c)}return d.data==="$?"?(r.flags|=128,r.child=n.child,r=U0.bind(null,n),d._reactRetry=r,null):(n=p.treeContext,un=Qr(d.nextSibling),ln=r,Je=!0,Mn=null,n!==null&&(mn[gn++]=Ir,mn[gn++]=Sr,mn[gn++]=Wi,Ir=n.id,Sr=n.overflow,Wi=r),r=kh(r,c.children),r.flags|=4096,r)}function tm(n,r,a){n.lanes|=r;var c=n.alternate;c!==null&&(c.lanes|=r),nh(n.return,r,a)}function xh(n,r,a,c,d){var p=n.memoizedState;p===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(p.isBackwards=r,p.rendering=null,p.renderingStartTime=0,p.last=c,p.tail=a,p.tailMode=d)}function nm(n,r,a){var c=r.pendingProps,d=c.revealOrder,p=c.tail;if(Ht(n,r,c.children,a),c=et.current,(c&2)!==0)c=c&1|2,r.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&tm(n,a,r);else if(n.tag===19)tm(n,a,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(He(et,c),(r.mode&1)===0)r.memoizedState=null;else switch(d){case"forwards":for(a=r.child,d=null;a!==null;)n=a.alternate,n!==null&&ql(n)===null&&(d=a),a=a.sibling;a=d,a===null?(d=r.child,r.child=null):(d=a.sibling,a.sibling=null),xh(r,!1,d,a,p);break;case"backwards":for(a=null,d=r.child,r.child=null;d!==null;){if(n=d.alternate,n!==null&&ql(n)===null){r.child=d;break}n=d.sibling,d.sibling=a,a=d,d=n}xh(r,!0,a,null,p);break;case"together":xh(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function eu(n,r){(r.mode&1)===0&&n!==null&&(n.alternate=null,r.alternate=null,r.flags|=2)}function Ar(n,r,a){if(n!==null&&(r.dependencies=n.dependencies),Yi|=r.lanes,(a&r.childLanes)===0)return null;if(n!==null&&r.child!==n.child)throw Error(t(153));if(r.child!==null){for(n=r.child,a=oi(n,n.pendingProps),r.child=a,a.return=r;n.sibling!==null;)n=n.sibling,a=a.sibling=oi(n,n.pendingProps),a.return=r;a.sibling=null}return r.child}function C0(n,r,a){switch(r.tag){case 3:Jp(r),Qs();break;case 5:gp(r);break;case 1:Qt(r.type)&&Ml(r);break;case 4:sh(r,r.stateNode.containerInfo);break;case 10:var c=r.type._context,d=r.memoizedProps.value;He(Bl,c._currentValue),c._currentValue=d;break;case 13:if(c=r.memoizedState,c!==null)return c.dehydrated!==null?(He(et,et.current&1),r.flags|=128,null):(a&r.child.childLanes)!==0?em(n,r,a):(He(et,et.current&1),n=Ar(n,r,a),n!==null?n.sibling:null);He(et,et.current&1);break;case 19:if(c=(a&r.childLanes)!==0,(n.flags&128)!==0){if(c)return nm(n,r,a);r.flags|=128}if(d=r.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),He(et,et.current),c)break;return null;case 22:case 23:return r.lanes=0,Qp(n,r,a)}return Ar(n,r,a)}var rm,Ah,im,sm;rm=function(n,r){for(var a=r.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===r)break;for(;a.sibling===null;){if(a.return===null||a.return===r)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Ah=function(){},im=function(n,r,a,c){var d=n.memoizedProps;if(d!==c){n=r.stateNode,Ki(Jn.current);var p=null;switch(a){case"input":d=kn(n,d),c=kn(n,c),p=[];break;case"select":d=te({},d,{value:void 0}),c=te({},c,{value:void 0}),p=[];break;case"textarea":d=bo(n,d),c=bo(n,c),p=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=Dl)}jo(a,c);var _;a=null;for(U in d)if(!c.hasOwnProperty(U)&&d.hasOwnProperty(U)&&d[U]!=null)if(U==="style"){var I=d[U];for(_ in I)I.hasOwnProperty(_)&&(a||(a={}),a[_]="")}else U!=="dangerouslySetInnerHTML"&&U!=="children"&&U!=="suppressContentEditableWarning"&&U!=="suppressHydrationWarning"&&U!=="autoFocus"&&(o.hasOwnProperty(U)?p||(p=[]):(p=p||[]).push(U,null));for(U in c){var C=c[U];if(I=d?.[U],c.hasOwnProperty(U)&&C!==I&&(C!=null||I!=null))if(U==="style")if(I){for(_ in I)!I.hasOwnProperty(_)||C&&C.hasOwnProperty(_)||(a||(a={}),a[_]="");for(_ in C)C.hasOwnProperty(_)&&I[_]!==C[_]&&(a||(a={}),a[_]=C[_])}else a||(p||(p=[]),p.push(U,a)),a=C;else U==="dangerouslySetInnerHTML"?(C=C?C.__html:void 0,I=I?I.__html:void 0,C!=null&&I!==C&&(p=p||[]).push(U,C)):U==="children"?typeof C!="string"&&typeof C!="number"||(p=p||[]).push(U,""+C):U!=="suppressContentEditableWarning"&&U!=="suppressHydrationWarning"&&(o.hasOwnProperty(U)?(C!=null&&U==="onScroll"&&qe("scroll",n),p||I===C||(p=[])):(p=p||[]).push(U,C))}a&&(p=p||[]).push("style",a);var U=p;(r.updateQueue=U)&&(r.flags|=4)}},sm=function(n,r,a,c){a!==c&&(r.flags|=4)};function _a(n,r){if(!Je)switch(n.tailMode){case"hidden":r=n.tail;for(var a=null;r!==null;)r.alternate!==null&&(a=r),r=r.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function Mt(n){var r=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(r)for(var d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=c,n.childLanes=a,r}function R0(n,r,a){var c=r.pendingProps;switch(Qc(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Mt(r),null;case 1:return Qt(r.type)&&Ol(),Mt(r),null;case 3:return c=r.stateNode,Zs(),Ge(Kt),Ge(Vt),lh(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(Ul(r)?r.flags|=4:n===null||n.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,Mn!==null&&(jh(Mn),Mn=null))),Ah(n,r),Mt(r),null;case 5:oh(r);var d=Ki(fa.current);if(a=r.type,n!==null&&r.stateNode!=null)im(n,r,a,c,d),n.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!c){if(r.stateNode===null)throw Error(t(166));return Mt(r),null}if(n=Ki(Jn.current),Ul(r)){c=r.stateNode,a=r.type;var p=r.memoizedProps;switch(c[Xn]=r,c[la]=p,n=(r.mode&1)!==0,a){case"dialog":qe("cancel",c),qe("close",c);break;case"iframe":case"object":case"embed":qe("load",c);break;case"video":case"audio":for(d=0;d<sa.length;d++)qe(sa[d],c);break;case"source":qe("error",c);break;case"img":case"image":case"link":qe("error",c),qe("load",c);break;case"details":qe("toggle",c);break;case"input":Lr(c,p),qe("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!p.multiple},qe("invalid",c);break;case"textarea":gs(c,p),qe("invalid",c)}jo(a,p),d=null;for(var _ in p)if(p.hasOwnProperty(_)){var I=p[_];_==="children"?typeof I=="string"?c.textContent!==I&&(p.suppressHydrationWarning!==!0&&bl(c.textContent,I,n),d=["children",I]):typeof I=="number"&&c.textContent!==""+I&&(p.suppressHydrationWarning!==!0&&bl(c.textContent,I,n),d=["children",""+I]):o.hasOwnProperty(_)&&I!=null&&_==="onScroll"&&qe("scroll",c)}switch(a){case"input":nn(c),il(c,p,!0);break;case"textarea":nn(c),Do(c);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(c.onclick=Dl)}c=d,r.updateQueue=c,c!==null&&(r.flags|=4)}else{_=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=ht(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=_.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=_.createElement(a,{is:c.is}):(n=_.createElement(a),a==="select"&&(_=n,c.multiple?_.multiple=!0:c.size&&(_.size=c.size))):n=_.createElementNS(n,a),n[Xn]=r,n[la]=c,rm(n,r,!1,!1),r.stateNode=n;e:{switch(_=Fo(a,c),a){case"dialog":qe("cancel",n),qe("close",n),d=c;break;case"iframe":case"object":case"embed":qe("load",n),d=c;break;case"video":case"audio":for(d=0;d<sa.length;d++)qe(sa[d],n);d=c;break;case"source":qe("error",n),d=c;break;case"img":case"image":case"link":qe("error",n),qe("load",n),d=c;break;case"details":qe("toggle",n),d=c;break;case"input":Lr(n,c),d=kn(n,c),qe("invalid",n);break;case"option":d=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},d=te({},c,{value:void 0}),qe("invalid",n);break;case"textarea":gs(n,c),d=bo(n,c),qe("invalid",n);break;default:d=c}jo(a,d),I=d;for(p in I)if(I.hasOwnProperty(p)){var C=I[p];p==="style"?Mo(n,C):p==="dangerouslySetInnerHTML"?(C=C?C.__html:void 0,C!=null&&Vo(n,C)):p==="children"?typeof C=="string"?(a!=="textarea"||C!=="")&&jr(n,C):typeof C=="number"&&jr(n,""+C):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(o.hasOwnProperty(p)?C!=null&&p==="onScroll"&&qe("scroll",n):C!=null&&ye(n,p,C,_))}switch(a){case"input":nn(n),il(n,c,!1);break;case"textarea":nn(n),Do(n);break;case"option":c.value!=null&&n.setAttribute("value",""+we(c.value));break;case"select":n.multiple=!!c.multiple,p=c.value,p!=null?fr(n,!!c.multiple,p,!1):c.defaultValue!=null&&fr(n,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=Dl)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return Mt(r),null;case 6:if(n&&r.stateNode!=null)sm(n,r,n.memoizedProps,c);else{if(typeof c!="string"&&r.stateNode===null)throw Error(t(166));if(a=Ki(fa.current),Ki(Jn.current),Ul(r)){if(c=r.stateNode,a=r.memoizedProps,c[Xn]=r,(p=c.nodeValue!==a)&&(n=ln,n!==null))switch(n.tag){case 3:bl(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&bl(c.nodeValue,a,(n.mode&1)!==0)}p&&(r.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[Xn]=r,r.stateNode=c}return Mt(r),null;case 13:if(Ge(et),c=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Je&&un!==null&&(r.mode&1)!==0&&(r.flags&128)===0)lp(),Qs(),r.flags|=98560,p=!1;else if(p=Ul(r),c!==null&&c.dehydrated!==null){if(n===null){if(!p)throw Error(t(318));if(p=r.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(t(317));p[Xn]=r}else Qs(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;Mt(r),p=!1}else Mn!==null&&(jh(Mn),Mn=null),p=!0;if(!p)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=a,r):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(r.child.flags|=8192,(r.mode&1)!==0&&(n===null||(et.current&1)!==0?mt===0&&(mt=3):zh())),r.updateQueue!==null&&(r.flags|=4),Mt(r),null);case 4:return Zs(),Ah(n,r),n===null&&oa(r.stateNode.containerInfo),Mt(r),null;case 10:return th(r.type._context),Mt(r),null;case 17:return Qt(r.type)&&Ol(),Mt(r),null;case 19:if(Ge(et),p=r.memoizedState,p===null)return Mt(r),null;if(c=(r.flags&128)!==0,_=p.rendering,_===null)if(c)_a(p,!1);else{if(mt!==0||n!==null&&(n.flags&128)!==0)for(n=r.child;n!==null;){if(_=ql(n),_!==null){for(r.flags|=128,_a(p,!1),c=_.updateQueue,c!==null&&(r.updateQueue=c,r.flags|=4),r.subtreeFlags=0,c=a,a=r.child;a!==null;)p=a,n=c,p.flags&=14680066,_=p.alternate,_===null?(p.childLanes=0,p.lanes=n,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=_.childLanes,p.lanes=_.lanes,p.child=_.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=_.memoizedProps,p.memoizedState=_.memoizedState,p.updateQueue=_.updateQueue,p.type=_.type,n=_.dependencies,p.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return He(et,et.current&1|2),r.child}n=n.sibling}p.tail!==null&&$e()>ro&&(r.flags|=128,c=!0,_a(p,!1),r.lanes=4194304)}else{if(!c)if(n=ql(_),n!==null){if(r.flags|=128,c=!0,a=n.updateQueue,a!==null&&(r.updateQueue=a,r.flags|=4),_a(p,!0),p.tail===null&&p.tailMode==="hidden"&&!_.alternate&&!Je)return Mt(r),null}else 2*$e()-p.renderingStartTime>ro&&a!==1073741824&&(r.flags|=128,c=!0,_a(p,!1),r.lanes=4194304);p.isBackwards?(_.sibling=r.child,r.child=_):(a=p.last,a!==null?a.sibling=_:r.child=_,p.last=_)}return p.tail!==null?(r=p.tail,p.rendering=r,p.tail=r.sibling,p.renderingStartTime=$e(),r.sibling=null,a=et.current,He(et,c?a&1|2:a&1),r):(Mt(r),null);case 22:case 23:return Uh(),c=r.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(r.flags|=8192),c&&(r.mode&1)!==0?(cn&1073741824)!==0&&(Mt(r),r.subtreeFlags&6&&(r.flags|=8192)):Mt(r),null;case 24:return null;case 25:return null}throw Error(t(156,r.tag))}function P0(n,r){switch(Qc(r),r.tag){case 1:return Qt(r.type)&&Ol(),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return Zs(),Ge(Kt),Ge(Vt),lh(),n=r.flags,(n&65536)!==0&&(n&128)===0?(r.flags=n&-65537|128,r):null;case 5:return oh(r),null;case 13:if(Ge(et),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(t(340));Qs()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return Ge(et),null;case 4:return Zs(),null;case 10:return th(r.type._context),null;case 22:case 23:return Uh(),null;case 24:return null;default:return null}}var tu=!1,Lt=!1,N0=typeof WeakSet=="function"?WeakSet:Set,ie=null;function to(n,r){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){rt(n,r,c)}else a.current=null}function Ch(n,r,a){try{a()}catch(c){rt(n,r,c)}}var om=!1;function b0(n,r){if(Uc=qr,n=jf(),bc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,p=c.focusNode;c=c.focusOffset;try{a.nodeType,p.nodeType}catch{a=null;break e}var _=0,I=-1,C=-1,U=0,K=0,Q=n,q=null;t:for(;;){for(var ne;Q!==a||d!==0&&Q.nodeType!==3||(I=_+d),Q!==p||c!==0&&Q.nodeType!==3||(C=_+c),Q.nodeType===3&&(_+=Q.nodeValue.length),(ne=Q.firstChild)!==null;)q=Q,Q=ne;for(;;){if(Q===n)break t;if(q===a&&++U===d&&(I=_),q===p&&++K===c&&(C=_),(ne=Q.nextSibling)!==null)break;Q=q,q=Q.parentNode}Q=ne}a=I===-1||C===-1?null:{start:I,end:C}}else a=null}a=a||{start:0,end:0}}else a=null;for(zc={focusedElem:n,selectionRange:a},qr=!1,ie=r;ie!==null;)if(r=ie,n=r.child,(r.subtreeFlags&1028)!==0&&n!==null)n.return=r,ie=n;else for(;ie!==null;){r=ie;try{var se=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(se!==null){var oe=se.memoizedProps,st=se.memoizedState,L=r.stateNode,P=L.getSnapshotBeforeUpdate(r.elementType===r.type?oe:Ln(r.type,oe),st);L.__reactInternalSnapshotBeforeUpdate=P}break;case 3:var F=r.stateNode.containerInfo;F.nodeType===1?F.textContent="":F.nodeType===9&&F.documentElement&&F.removeChild(F.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(X){rt(r,r.return,X)}if(n=r.sibling,n!==null){n.return=r.return,ie=n;break}ie=r.return}return se=om,om=!1,se}function va(n,r,a){var c=r.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&n)===n){var p=d.destroy;d.destroy=void 0,p!==void 0&&Ch(r,a,p)}d=d.next}while(d!==c)}}function nu(n,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var a=r=r.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==r)}}function Rh(n){var r=n.ref;if(r!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof r=="function"?r(n):r.current=n}}function am(n){var r=n.alternate;r!==null&&(n.alternate=null,am(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&(delete r[Xn],delete r[la],delete r[Wc],delete r[p0],delete r[m0])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function lm(n){return n.tag===5||n.tag===3||n.tag===4}function um(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||lm(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Ph(n,r,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,r?a.nodeType===8?a.parentNode.insertBefore(n,r):a.insertBefore(n,r):(a.nodeType===8?(r=a.parentNode,r.insertBefore(n,a)):(r=a,r.appendChild(n)),a=a._reactRootContainer,a!=null||r.onclick!==null||(r.onclick=Dl));else if(c!==4&&(n=n.child,n!==null))for(Ph(n,r,a),n=n.sibling;n!==null;)Ph(n,r,a),n=n.sibling}function Nh(n,r,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,r?a.insertBefore(n,r):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(Nh(n,r,a),n=n.sibling;n!==null;)Nh(n,r,a),n=n.sibling}var Ct=null,jn=!1;function ti(n,r,a){for(a=a.child;a!==null;)cm(n,r,a),a=a.sibling}function cm(n,r,a){if(rn&&typeof rn.onCommitFiberUnmount=="function")try{rn.onCommitFiberUnmount(Mi,a)}catch{}switch(a.tag){case 5:Lt||to(a,r);case 6:var c=Ct,d=jn;Ct=null,ti(n,r,a),Ct=c,jn=d,Ct!==null&&(jn?(n=Ct,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):Ct.removeChild(a.stateNode));break;case 18:Ct!==null&&(jn?(n=Ct,a=a.stateNode,n.nodeType===8?Hc(n.parentNode,a):n.nodeType===1&&Hc(n,a),Dn(n)):Hc(Ct,a.stateNode));break;case 4:c=Ct,d=jn,Ct=a.stateNode.containerInfo,jn=!0,ti(n,r,a),Ct=c,jn=d;break;case 0:case 11:case 14:case 15:if(!Lt&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var p=d,_=p.destroy;p=p.tag,_!==void 0&&((p&2)!==0||(p&4)!==0)&&Ch(a,r,_),d=d.next}while(d!==c)}ti(n,r,a);break;case 1:if(!Lt&&(to(a,r),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(I){rt(a,r,I)}ti(n,r,a);break;case 21:ti(n,r,a);break;case 22:a.mode&1?(Lt=(c=Lt)||a.memoizedState!==null,ti(n,r,a),Lt=c):ti(n,r,a);break;default:ti(n,r,a)}}function hm(n){var r=n.updateQueue;if(r!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new N0),r.forEach(function(c){var d=z0.bind(null,n,c);a.has(c)||(a.add(c),c.then(d,d))})}}function Fn(n,r){var a=r.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];try{var p=n,_=r,I=_;e:for(;I!==null;){switch(I.tag){case 5:Ct=I.stateNode,jn=!1;break e;case 3:Ct=I.stateNode.containerInfo,jn=!0;break e;case 4:Ct=I.stateNode.containerInfo,jn=!0;break e}I=I.return}if(Ct===null)throw Error(t(160));cm(p,_,d),Ct=null,jn=!1;var C=d.alternate;C!==null&&(C.return=null),d.return=null}catch(U){rt(d,r,U)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)dm(r,n),r=r.sibling}function dm(n,r){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Fn(r,n),er(n),c&4){try{va(3,n,n.return),nu(3,n)}catch(oe){rt(n,n.return,oe)}try{va(5,n,n.return)}catch(oe){rt(n,n.return,oe)}}break;case 1:Fn(r,n),er(n),c&512&&a!==null&&to(a,a.return);break;case 5:if(Fn(r,n),er(n),c&512&&a!==null&&to(a,a.return),n.flags&32){var d=n.stateNode;try{jr(d,"")}catch(oe){rt(n,n.return,oe)}}if(c&4&&(d=n.stateNode,d!=null)){var p=n.memoizedProps,_=a!==null?a.memoizedProps:p,I=n.type,C=n.updateQueue;if(n.updateQueue=null,C!==null)try{I==="input"&&p.type==="radio"&&p.name!=null&&Po(d,p),Fo(I,_);var U=Fo(I,p);for(_=0;_<C.length;_+=2){var K=C[_],Q=C[_+1];K==="style"?Mo(d,Q):K==="dangerouslySetInnerHTML"?Vo(d,Q):K==="children"?jr(d,Q):ye(d,K,Q,U)}switch(I){case"input":No(d,p);break;case"textarea":ys(d,p);break;case"select":var q=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!p.multiple;var ne=p.value;ne!=null?fr(d,!!p.multiple,ne,!1):q!==!!p.multiple&&(p.defaultValue!=null?fr(d,!!p.multiple,p.defaultValue,!0):fr(d,!!p.multiple,p.multiple?[]:"",!1))}d[la]=p}catch(oe){rt(n,n.return,oe)}}break;case 6:if(Fn(r,n),er(n),c&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,p=n.memoizedProps;try{d.nodeValue=p}catch(oe){rt(n,n.return,oe)}}break;case 3:if(Fn(r,n),er(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{Dn(r.containerInfo)}catch(oe){rt(n,n.return,oe)}break;case 4:Fn(r,n),er(n);break;case 13:Fn(r,n),er(n),d=n.child,d.flags&8192&&(p=d.memoizedState!==null,d.stateNode.isHidden=p,!p||d.alternate!==null&&d.alternate.memoizedState!==null||(Vh=$e())),c&4&&hm(n);break;case 22:if(K=a!==null&&a.memoizedState!==null,n.mode&1?(Lt=(U=Lt)||K,Fn(r,n),Lt=U):Fn(r,n),er(n),c&8192){if(U=n.memoizedState!==null,(n.stateNode.isHidden=U)&&!K&&(n.mode&1)!==0)for(ie=n,K=n.child;K!==null;){for(Q=ie=K;ie!==null;){switch(q=ie,ne=q.child,q.tag){case 0:case 11:case 14:case 15:va(4,q,q.return);break;case 1:to(q,q.return);var se=q.stateNode;if(typeof se.componentWillUnmount=="function"){c=q,a=q.return;try{r=c,se.props=r.memoizedProps,se.state=r.memoizedState,se.componentWillUnmount()}catch(oe){rt(c,a,oe)}}break;case 5:to(q,q.return);break;case 22:if(q.memoizedState!==null){mm(Q);continue}}ne!==null?(ne.return=q,ie=ne):mm(Q)}K=K.sibling}e:for(K=null,Q=n;;){if(Q.tag===5){if(K===null){K=Q;try{d=Q.stateNode,U?(p=d.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(I=Q.stateNode,C=Q.memoizedProps.style,_=C!=null&&C.hasOwnProperty("display")?C.display:null,I.style.display=Oo("display",_))}catch(oe){rt(n,n.return,oe)}}}else if(Q.tag===6){if(K===null)try{Q.stateNode.nodeValue=U?"":Q.memoizedProps}catch(oe){rt(n,n.return,oe)}}else if((Q.tag!==22&&Q.tag!==23||Q.memoizedState===null||Q===n)&&Q.child!==null){Q.child.return=Q,Q=Q.child;continue}if(Q===n)break e;for(;Q.sibling===null;){if(Q.return===null||Q.return===n)break e;K===Q&&(K=null),Q=Q.return}K===Q&&(K=null),Q.sibling.return=Q.return,Q=Q.sibling}}break;case 19:Fn(r,n),er(n),c&4&&hm(n);break;case 21:break;default:Fn(r,n),er(n)}}function er(n){var r=n.flags;if(r&2){try{e:{for(var a=n.return;a!==null;){if(lm(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(jr(d,""),c.flags&=-33);var p=um(n);Nh(n,p,d);break;case 3:case 4:var _=c.stateNode.containerInfo,I=um(n);Ph(n,I,_);break;default:throw Error(t(161))}}catch(C){rt(n,n.return,C)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function D0(n,r,a){ie=n,fm(n)}function fm(n,r,a){for(var c=(n.mode&1)!==0;ie!==null;){var d=ie,p=d.child;if(d.tag===22&&c){var _=d.memoizedState!==null||tu;if(!_){var I=d.alternate,C=I!==null&&I.memoizedState!==null||Lt;I=tu;var U=Lt;if(tu=_,(Lt=C)&&!U)for(ie=d;ie!==null;)_=ie,C=_.child,_.tag===22&&_.memoizedState!==null?gm(d):C!==null?(C.return=_,ie=C):gm(d);for(;p!==null;)ie=p,fm(p),p=p.sibling;ie=d,tu=I,Lt=U}pm(n)}else(d.subtreeFlags&8772)!==0&&p!==null?(p.return=d,ie=p):pm(n)}}function pm(n){for(;ie!==null;){var r=ie;if((r.flags&8772)!==0){var a=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:Lt||nu(5,r);break;case 1:var c=r.stateNode;if(r.flags&4&&!Lt)if(a===null)c.componentDidMount();else{var d=r.elementType===r.type?a.memoizedProps:Ln(r.type,a.memoizedProps);c.componentDidUpdate(d,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var p=r.updateQueue;p!==null&&mp(r,p,c);break;case 3:var _=r.updateQueue;if(_!==null){if(a=null,r.child!==null)switch(r.child.tag){case 5:a=r.child.stateNode;break;case 1:a=r.child.stateNode}mp(r,_,a)}break;case 5:var I=r.stateNode;if(a===null&&r.flags&4){a=I;var C=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":C.autoFocus&&a.focus();break;case"img":C.src&&(a.src=C.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var U=r.alternate;if(U!==null){var K=U.memoizedState;if(K!==null){var Q=K.dehydrated;Q!==null&&Dn(Q)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Lt||r.flags&512&&Rh(r)}catch(q){rt(r,r.return,q)}}if(r===n){ie=null;break}if(a=r.sibling,a!==null){a.return=r.return,ie=a;break}ie=r.return}}function mm(n){for(;ie!==null;){var r=ie;if(r===n){ie=null;break}var a=r.sibling;if(a!==null){a.return=r.return,ie=a;break}ie=r.return}}function gm(n){for(;ie!==null;){var r=ie;try{switch(r.tag){case 0:case 11:case 15:var a=r.return;try{nu(4,r)}catch(C){rt(r,a,C)}break;case 1:var c=r.stateNode;if(typeof c.componentDidMount=="function"){var d=r.return;try{c.componentDidMount()}catch(C){rt(r,d,C)}}var p=r.return;try{Rh(r)}catch(C){rt(r,p,C)}break;case 5:var _=r.return;try{Rh(r)}catch(C){rt(r,_,C)}}}catch(C){rt(r,r.return,C)}if(r===n){ie=null;break}var I=r.sibling;if(I!==null){I.return=r.return,ie=I;break}ie=r.return}}var V0=Math.ceil,ru=Ae.ReactCurrentDispatcher,bh=Ae.ReactCurrentOwner,vn=Ae.ReactCurrentBatchConfig,Le=0,It=null,lt=null,Rt=0,cn=0,no=Yr(0),mt=0,wa=null,Yi=0,iu=0,Dh=0,Ea=null,Xt=null,Vh=0,ro=1/0,Cr=null,su=!1,Oh=null,ni=null,ou=!1,ri=null,au=0,Ta=0,Mh=null,lu=-1,uu=0;function Wt(){return(Le&6)!==0?$e():lu!==-1?lu:lu=$e()}function ii(n){return(n.mode&1)===0?1:(Le&2)!==0&&Rt!==0?Rt&-Rt:y0.transition!==null?(uu===0&&(uu=ji()),uu):(n=De,n!==0||(n=window.event,n=n===void 0?16:Yo(n.type)),n)}function Un(n,r,a,c){if(50<Ta)throw Ta=0,Mh=null,Error(t(185));Br(n,a,c),((Le&2)===0||n!==It)&&(n===It&&((Le&2)===0&&(iu|=a),mt===4&&si(n,Rt)),Jt(n,c),a===1&&Le===0&&(r.mode&1)===0&&(ro=$e()+500,Ll&&Jr()))}function Jt(n,r){var a=n.callbackNode;gr(n,r);var c=Li(n,n===It?Rt:0);if(c===0)a!==null&&Wo(a),n.callbackNode=null,n.callbackPriority=0;else if(r=c&-c,n.callbackPriority!==r){if(a!=null&&Wo(a),r===1)n.tag===0?g0(_m.bind(null,n)):rp(_m.bind(null,n)),d0(function(){(Le&6)===0&&Jr()}),a=null;else{switch(Hr(c)){case 1:a=Oi;break;case 4:a=Fr;break;case 16:a=dn;break;case 536870912:a=ul;break;default:a=dn}a=xm(a,ym.bind(null,n))}n.callbackPriority=r,n.callbackNode=a}}function ym(n,r){if(lu=-1,uu=0,(Le&6)!==0)throw Error(t(327));var a=n.callbackNode;if(io()&&n.callbackNode!==a)return null;var c=Li(n,n===It?Rt:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||r)r=cu(n,c);else{r=c;var d=Le;Le|=2;var p=wm();(It!==n||Rt!==r)&&(Cr=null,ro=$e()+500,Ji(n,r));do try{L0();break}catch(I){vm(n,I)}while(!0);eh(),ru.current=p,Le=d,lt!==null?r=0:(It=null,Rt=0,r=mt)}if(r!==0){if(r===2&&(d=sn(n),d!==0&&(c=d,r=Lh(n,d))),r===1)throw a=wa,Ji(n,0),si(n,c),Jt(n,$e()),a;if(r===6)si(n,c);else{if(d=n.current.alternate,(c&30)===0&&!O0(d)&&(r=cu(n,c),r===2&&(p=sn(n),p!==0&&(c=p,r=Lh(n,p))),r===1))throw a=wa,Ji(n,0),si(n,c),Jt(n,$e()),a;switch(n.finishedWork=d,n.finishedLanes=c,r){case 0:case 1:throw Error(t(345));case 2:Zi(n,Xt,Cr);break;case 3:if(si(n,c),(c&130023424)===c&&(r=Vh+500-$e(),10<r)){if(Li(n,0)!==0)break;if(d=n.suspendedLanes,(d&c)!==c){Wt(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=$c(Zi.bind(null,n,Xt,Cr),r);break}Zi(n,Xt,Cr);break;case 4:if(si(n,c),(c&4194240)===c)break;for(r=n.eventTimes,d=-1;0<c;){var _=31-Bt(c);p=1<<_,_=r[_],_>d&&(d=_),c&=~p}if(c=d,c=$e()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*V0(c/1960))-c,10<c){n.timeoutHandle=$c(Zi.bind(null,n,Xt,Cr),c);break}Zi(n,Xt,Cr);break;case 5:Zi(n,Xt,Cr);break;default:throw Error(t(329))}}}return Jt(n,$e()),n.callbackNode===a?ym.bind(null,n):null}function Lh(n,r){var a=Ea;return n.current.memoizedState.isDehydrated&&(Ji(n,r).flags|=256),n=cu(n,r),n!==2&&(r=Xt,Xt=a,r!==null&&jh(r)),n}function jh(n){Xt===null?Xt=n:Xt.push.apply(Xt,n)}function O0(n){for(var r=n;;){if(r.flags&16384){var a=r.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var d=a[c],p=d.getSnapshot;d=d.value;try{if(!On(p(),d))return!1}catch{return!1}}}if(a=r.child,r.subtreeFlags&16384&&a!==null)a.return=r,r=a;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function si(n,r){for(r&=~Dh,r&=~iu,n.suspendedLanes|=r,n.pingedLanes&=~r,n=n.expirationTimes;0<r;){var a=31-Bt(r),c=1<<a;n[a]=-1,r&=~c}}function _m(n){if((Le&6)!==0)throw Error(t(327));io();var r=Li(n,0);if((r&1)===0)return Jt(n,$e()),null;var a=cu(n,r);if(n.tag!==0&&a===2){var c=sn(n);c!==0&&(r=c,a=Lh(n,c))}if(a===1)throw a=wa,Ji(n,0),si(n,r),Jt(n,$e()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=r,Zi(n,Xt,Cr),Jt(n,$e()),null}function Fh(n,r){var a=Le;Le|=1;try{return n(r)}finally{Le=a,Le===0&&(ro=$e()+500,Ll&&Jr())}}function Xi(n){ri!==null&&ri.tag===0&&(Le&6)===0&&io();var r=Le;Le|=1;var a=vn.transition,c=De;try{if(vn.transition=null,De=1,n)return n()}finally{De=c,vn.transition=a,Le=r,(Le&6)===0&&Jr()}}function Uh(){cn=no.current,Ge(no)}function Ji(n,r){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,h0(a)),lt!==null)for(a=lt.return;a!==null;){var c=a;switch(Qc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Ol();break;case 3:Zs(),Ge(Kt),Ge(Vt),lh();break;case 5:oh(c);break;case 4:Zs();break;case 13:Ge(et);break;case 19:Ge(et);break;case 10:th(c.type._context);break;case 22:case 23:Uh()}a=a.return}if(It=n,lt=n=oi(n.current,null),Rt=cn=r,mt=0,wa=null,Dh=iu=Yi=0,Xt=Ea=null,Gi!==null){for(r=0;r<Gi.length;r++)if(a=Gi[r],c=a.interleaved,c!==null){a.interleaved=null;var d=c.next,p=a.pending;if(p!==null){var _=p.next;p.next=d,c.next=_}a.pending=c}Gi=null}return n}function vm(n,r){do{var a=lt;try{if(eh(),Gl.current=Xl,Kl){for(var c=tt.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}Kl=!1}if(Qi=0,Tt=pt=tt=null,pa=!1,ma=0,bh.current=null,a===null||a.return===null){mt=1,wa=r,lt=null;break}e:{var p=n,_=a.return,I=a,C=r;if(r=Rt,I.flags|=32768,C!==null&&typeof C=="object"&&typeof C.then=="function"){var U=C,K=I,Q=K.tag;if((K.mode&1)===0&&(Q===0||Q===11||Q===15)){var q=K.alternate;q?(K.updateQueue=q.updateQueue,K.memoizedState=q.memoizedState,K.lanes=q.lanes):(K.updateQueue=null,K.memoizedState=null)}var ne=Hp(_);if(ne!==null){ne.flags&=-257,Wp(ne,_,I,p,r),ne.mode&1&&$p(p,U,r),r=ne,C=U;var se=r.updateQueue;if(se===null){var oe=new Set;oe.add(C),r.updateQueue=oe}else se.add(C);break e}else{if((r&1)===0){$p(p,U,r),zh();break e}C=Error(t(426))}}else if(Je&&I.mode&1){var st=Hp(_);if(st!==null){(st.flags&65536)===0&&(st.flags|=256),Wp(st,_,I,p,r),Jc(eo(C,I));break e}}p=C=eo(C,I),mt!==4&&(mt=2),Ea===null?Ea=[p]:Ea.push(p),p=_;do{switch(p.tag){case 3:p.flags|=65536,r&=-r,p.lanes|=r;var L=zp(p,C,r);pp(p,L);break e;case 1:I=C;var P=p.type,F=p.stateNode;if((p.flags&128)===0&&(typeof P.getDerivedStateFromError=="function"||F!==null&&typeof F.componentDidCatch=="function"&&(ni===null||!ni.has(F)))){p.flags|=65536,r&=-r,p.lanes|=r;var X=Bp(p,I,r);pp(p,X);break e}}p=p.return}while(p!==null)}Tm(a)}catch(ae){r=ae,lt===a&&a!==null&&(lt=a=a.return);continue}break}while(!0)}function wm(){var n=ru.current;return ru.current=Xl,n===null?Xl:n}function zh(){(mt===0||mt===3||mt===2)&&(mt=4),It===null||(Yi&268435455)===0&&(iu&268435455)===0||si(It,Rt)}function cu(n,r){var a=Le;Le|=2;var c=wm();(It!==n||Rt!==r)&&(Cr=null,Ji(n,r));do try{M0();break}catch(d){vm(n,d)}while(!0);if(eh(),Le=a,ru.current=c,lt!==null)throw Error(t(261));return It=null,Rt=0,mt}function M0(){for(;lt!==null;)Em(lt)}function L0(){for(;lt!==null&&!al();)Em(lt)}function Em(n){var r=km(n.alternate,n,cn);n.memoizedProps=n.pendingProps,r===null?Tm(n):lt=r,bh.current=null}function Tm(n){var r=n;do{var a=r.alternate;if(n=r.return,(r.flags&32768)===0){if(a=R0(a,r,cn),a!==null){lt=a;return}}else{if(a=P0(a,r),a!==null){a.flags&=32767,lt=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{mt=6,lt=null;return}}if(r=r.sibling,r!==null){lt=r;return}lt=r=n}while(r!==null);mt===0&&(mt=5)}function Zi(n,r,a){var c=De,d=vn.transition;try{vn.transition=null,De=1,j0(n,r,a,c)}finally{vn.transition=d,De=c}return null}function j0(n,r,a,c){do io();while(ri!==null);if((Le&6)!==0)throw Error(t(327));a=n.finishedWork;var d=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var p=a.lanes|a.childLanes;if(Be(n,p),n===It&&(lt=It=null,Rt=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||ou||(ou=!0,xm(dn,function(){return io(),null})),p=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||p){p=vn.transition,vn.transition=null;var _=De;De=1;var I=Le;Le|=4,bh.current=null,b0(n,a),dm(a,n),i0(zc),qr=!!Uc,zc=Uc=null,n.current=a,D0(a),Sc(),Le=I,De=_,vn.transition=p}else n.current=a;if(ou&&(ou=!1,ri=n,au=d),p=n.pendingLanes,p===0&&(ni=null),cl(a.stateNode),Jt(n,$e()),r!==null)for(c=n.onRecoverableError,a=0;a<r.length;a++)d=r[a],c(d.value,{componentStack:d.stack,digest:d.digest});if(su)throw su=!1,n=Oh,Oh=null,n;return(au&1)!==0&&n.tag!==0&&io(),p=n.pendingLanes,(p&1)!==0?n===Mh?Ta++:(Ta=0,Mh=n):Ta=0,Jr(),null}function io(){if(ri!==null){var n=Hr(au),r=vn.transition,a=De;try{if(vn.transition=null,De=16>n?16:n,ri===null)var c=!1;else{if(n=ri,ri=null,au=0,(Le&6)!==0)throw Error(t(331));var d=Le;for(Le|=4,ie=n.current;ie!==null;){var p=ie,_=p.child;if((ie.flags&16)!==0){var I=p.deletions;if(I!==null){for(var C=0;C<I.length;C++){var U=I[C];for(ie=U;ie!==null;){var K=ie;switch(K.tag){case 0:case 11:case 15:va(8,K,p)}var Q=K.child;if(Q!==null)Q.return=K,ie=Q;else for(;ie!==null;){K=ie;var q=K.sibling,ne=K.return;if(am(K),K===U){ie=null;break}if(q!==null){q.return=ne,ie=q;break}ie=ne}}}var se=p.alternate;if(se!==null){var oe=se.child;if(oe!==null){se.child=null;do{var st=oe.sibling;oe.sibling=null,oe=st}while(oe!==null)}}ie=p}}if((p.subtreeFlags&2064)!==0&&_!==null)_.return=p,ie=_;else e:for(;ie!==null;){if(p=ie,(p.flags&2048)!==0)switch(p.tag){case 0:case 11:case 15:va(9,p,p.return)}var L=p.sibling;if(L!==null){L.return=p.return,ie=L;break e}ie=p.return}}var P=n.current;for(ie=P;ie!==null;){_=ie;var F=_.child;if((_.subtreeFlags&2064)!==0&&F!==null)F.return=_,ie=F;else e:for(_=P;ie!==null;){if(I=ie,(I.flags&2048)!==0)try{switch(I.tag){case 0:case 11:case 15:nu(9,I)}}catch(ae){rt(I,I.return,ae)}if(I===_){ie=null;break e}var X=I.sibling;if(X!==null){X.return=I.return,ie=X;break e}ie=I.return}}if(Le=d,Jr(),rn&&typeof rn.onPostCommitFiberRoot=="function")try{rn.onPostCommitFiberRoot(Mi,n)}catch{}c=!0}return c}finally{De=a,vn.transition=r}}return!1}function Im(n,r,a){r=eo(a,r),r=zp(n,r,1),n=ei(n,r,1),r=Wt(),n!==null&&(Br(n,1,r),Jt(n,r))}function rt(n,r,a){if(n.tag===3)Im(n,n,a);else for(;r!==null;){if(r.tag===3){Im(r,n,a);break}else if(r.tag===1){var c=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(ni===null||!ni.has(c))){n=eo(a,n),n=Bp(r,n,1),r=ei(r,n,1),n=Wt(),r!==null&&(Br(r,1,n),Jt(r,n));break}}r=r.return}}function F0(n,r,a){var c=n.pingCache;c!==null&&c.delete(r),r=Wt(),n.pingedLanes|=n.suspendedLanes&a,It===n&&(Rt&a)===a&&(mt===4||mt===3&&(Rt&130023424)===Rt&&500>$e()-Vh?Ji(n,0):Dh|=a),Jt(n,r)}function Sm(n,r){r===0&&((n.mode&1)===0?r=1:(r=As,As<<=1,(As&130023424)===0&&(As=4194304)));var a=Wt();n=kr(n,r),n!==null&&(Br(n,r,a),Jt(n,a))}function U0(n){var r=n.memoizedState,a=0;r!==null&&(a=r.retryLane),Sm(n,a)}function z0(n,r){var a=0;switch(n.tag){case 13:var c=n.stateNode,d=n.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(r),Sm(n,a)}var km;km=function(n,r,a){if(n!==null)if(n.memoizedProps!==r.pendingProps||Kt.current)Yt=!0;else{if((n.lanes&a)===0&&(r.flags&128)===0)return Yt=!1,C0(n,r,a);Yt=(n.flags&131072)!==0}else Yt=!1,Je&&(r.flags&1048576)!==0&&ip(r,Fl,r.index);switch(r.lanes=0,r.tag){case 2:var c=r.type;eu(n,r),n=r.pendingProps;var d=qs(r,Vt.current);Js(r,a),d=hh(null,r,c,n,d,a);var p=dh();return r.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,Qt(c)?(p=!0,Ml(r)):p=!1,r.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,ih(r),d.updater=Jl,r.stateNode=d,d._reactInternals=r,_h(r,c,n,a),r=Th(null,r,c,!0,p,a)):(r.tag=0,Je&&p&&Kc(r),Ht(null,r,d,a),r=r.child),r;case 16:c=r.elementType;e:{switch(eu(n,r),n=r.pendingProps,d=c._init,c=d(c._payload),r.type=c,d=r.tag=$0(c),n=Ln(c,n),d){case 0:r=Eh(null,r,c,n,a);break e;case 1:r=Xp(null,r,c,n,a);break e;case 11:r=qp(null,r,c,n,a);break e;case 14:r=Gp(null,r,c,Ln(c.type,n),a);break e}throw Error(t(306,c,""))}return r;case 0:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:Ln(c,d),Eh(n,r,c,d,a);case 1:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:Ln(c,d),Xp(n,r,c,d,a);case 3:e:{if(Jp(r),n===null)throw Error(t(387));c=r.pendingProps,p=r.memoizedState,d=p.element,fp(n,r),Wl(r,c,null,a);var _=r.memoizedState;if(c=_.element,p.isDehydrated)if(p={element:c,isDehydrated:!1,cache:_.cache,pendingSuspenseBoundaries:_.pendingSuspenseBoundaries,transitions:_.transitions},r.updateQueue.baseState=p,r.memoizedState=p,r.flags&256){d=eo(Error(t(423)),r),r=Zp(n,r,c,a,d);break e}else if(c!==d){d=eo(Error(t(424)),r),r=Zp(n,r,c,a,d);break e}else for(un=Qr(r.stateNode.containerInfo.firstChild),ln=r,Je=!0,Mn=null,a=hp(r,null,c,a),r.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Qs(),c===d){r=Ar(n,r,a);break e}Ht(n,r,c,a)}r=r.child}return r;case 5:return gp(r),n===null&&Xc(r),c=r.type,d=r.pendingProps,p=n!==null?n.memoizedProps:null,_=d.children,Bc(c,d)?_=null:p!==null&&Bc(c,p)&&(r.flags|=32),Yp(n,r),Ht(n,r,_,a),r.child;case 6:return n===null&&Xc(r),null;case 13:return em(n,r,a);case 4:return sh(r,r.stateNode.containerInfo),c=r.pendingProps,n===null?r.child=Ys(r,null,c,a):Ht(n,r,c,a),r.child;case 11:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:Ln(c,d),qp(n,r,c,d,a);case 7:return Ht(n,r,r.pendingProps,a),r.child;case 8:return Ht(n,r,r.pendingProps.children,a),r.child;case 12:return Ht(n,r,r.pendingProps.children,a),r.child;case 10:e:{if(c=r.type._context,d=r.pendingProps,p=r.memoizedProps,_=d.value,He(Bl,c._currentValue),c._currentValue=_,p!==null)if(On(p.value,_)){if(p.children===d.children&&!Kt.current){r=Ar(n,r,a);break e}}else for(p=r.child,p!==null&&(p.return=r);p!==null;){var I=p.dependencies;if(I!==null){_=p.child;for(var C=I.firstContext;C!==null;){if(C.context===c){if(p.tag===1){C=xr(-1,a&-a),C.tag=2;var U=p.updateQueue;if(U!==null){U=U.shared;var K=U.pending;K===null?C.next=C:(C.next=K.next,K.next=C),U.pending=C}}p.lanes|=a,C=p.alternate,C!==null&&(C.lanes|=a),nh(p.return,a,r),I.lanes|=a;break}C=C.next}}else if(p.tag===10)_=p.type===r.type?null:p.child;else if(p.tag===18){if(_=p.return,_===null)throw Error(t(341));_.lanes|=a,I=_.alternate,I!==null&&(I.lanes|=a),nh(_,a,r),_=p.sibling}else _=p.child;if(_!==null)_.return=p;else for(_=p;_!==null;){if(_===r){_=null;break}if(p=_.sibling,p!==null){p.return=_.return,_=p;break}_=_.return}p=_}Ht(n,r,d.children,a),r=r.child}return r;case 9:return d=r.type,c=r.pendingProps.children,Js(r,a),d=yn(d),c=c(d),r.flags|=1,Ht(n,r,c,a),r.child;case 14:return c=r.type,d=Ln(c,r.pendingProps),d=Ln(c.type,d),Gp(n,r,c,d,a);case 15:return Kp(n,r,r.type,r.pendingProps,a);case 17:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:Ln(c,d),eu(n,r),r.tag=1,Qt(c)?(n=!0,Ml(r)):n=!1,Js(r,a),Fp(r,c,d),_h(r,c,d,a),Th(null,r,c,!0,n,a);case 19:return nm(n,r,a);case 22:return Qp(n,r,a)}throw Error(t(156,r.tag))};function xm(n,r){return ks(n,r)}function B0(n,r,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function wn(n,r,a,c){return new B0(n,r,a,c)}function Bh(n){return n=n.prototype,!(!n||!n.isReactComponent)}function $0(n){if(typeof n=="function")return Bh(n)?1:0;if(n!=null){if(n=n.$$typeof,n===O)return 11;if(n===vt)return 14}return 2}function oi(n,r){var a=n.alternate;return a===null?(a=wn(n.tag,r,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=r,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,r=n.dependencies,a.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function hu(n,r,a,c,d,p){var _=2;if(c=n,typeof n=="function")Bh(n)&&(_=1);else if(typeof n=="string")_=5;else e:switch(n){case b:return es(a.children,d,p,r);case S:_=8,d|=8;break;case x:return n=wn(12,a,r,d|2),n.elementType=x,n.lanes=p,n;case k:return n=wn(13,a,r,d),n.elementType=k,n.lanes=p,n;case Ye:return n=wn(19,a,r,d),n.elementType=Ye,n.lanes=p,n;case Se:return du(a,d,p,r);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case N:_=10;break e;case D:_=9;break e;case O:_=11;break e;case vt:_=14;break e;case wt:_=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return r=wn(_,a,r,d),r.elementType=n,r.type=c,r.lanes=p,r}function es(n,r,a,c){return n=wn(7,n,c,r),n.lanes=a,n}function du(n,r,a,c){return n=wn(22,n,c,r),n.elementType=Se,n.lanes=a,n.stateNode={isHidden:!1},n}function $h(n,r,a){return n=wn(6,n,null,r),n.lanes=a,n}function Hh(n,r,a){return r=wn(4,n.children!==null?n.children:[],n.key,r),r.lanes=a,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}function H0(n,r,a,c,d){this.tag=r,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=zr(0),this.expirationTimes=zr(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=zr(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Wh(n,r,a,c,d,p,_,I,C){return n=new H0(n,r,a,I,C),r===1?(r=1,p===!0&&(r|=8)):r=0,p=wn(3,null,null,r),n.current=p,p.stateNode=n,p.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},ih(p),n}function W0(n,r,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ve,key:c==null?null:""+c,children:n,containerInfo:r,implementation:a}}function Am(n){if(!n)return Xr;n=n._reactInternals;e:{if(Cn(n)!==n||n.tag!==1)throw Error(t(170));var r=n;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(Qt(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(Qt(a))return tp(n,a,r)}return r}function Cm(n,r,a,c,d,p,_,I,C){return n=Wh(a,c,!0,n,d,p,_,I,C),n.context=Am(null),a=n.current,c=Wt(),d=ii(a),p=xr(c,d),p.callback=r??null,ei(a,p,d),n.current.lanes=d,Br(n,d,c),Jt(n,c),n}function fu(n,r,a,c){var d=r.current,p=Wt(),_=ii(d);return a=Am(a),r.context===null?r.context=a:r.pendingContext=a,r=xr(p,_),r.payload={element:n},c=c===void 0?null:c,c!==null&&(r.callback=c),n=ei(d,r,_),n!==null&&(Un(n,d,_,p),Hl(n,d,_)),_}function pu(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Rm(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<r?a:r}}function qh(n,r){Rm(n,r),(n=n.alternate)&&Rm(n,r)}function q0(){return null}var Pm=typeof reportError=="function"?reportError:function(n){console.error(n)};function Gh(n){this._internalRoot=n}mu.prototype.render=Gh.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(t(409));fu(n,r,null,null)},mu.prototype.unmount=Gh.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;Xi(function(){fu(null,n,null,null)}),r[Er]=null}};function mu(n){this._internalRoot=n}mu.prototype.unstable_scheduleHydration=function(n){if(n){var r=ml();n={blockedOn:null,target:n,priority:r};for(var a=0;a<Gn.length&&r!==0&&r<Gn[a].priority;a++);Gn.splice(a,0,n),a===0&&_l(n)}};function Kh(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function gu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Nm(){}function G0(n,r,a,c,d){if(d){if(typeof c=="function"){var p=c;c=function(){var U=pu(_);p.call(U)}}var _=Cm(r,c,n,0,null,!1,!1,"",Nm);return n._reactRootContainer=_,n[Er]=_.current,oa(n.nodeType===8?n.parentNode:n),Xi(),_}for(;d=n.lastChild;)n.removeChild(d);if(typeof c=="function"){var I=c;c=function(){var U=pu(C);I.call(U)}}var C=Wh(n,0,!1,null,null,!1,!1,"",Nm);return n._reactRootContainer=C,n[Er]=C.current,oa(n.nodeType===8?n.parentNode:n),Xi(function(){fu(r,C,a,c)}),C}function yu(n,r,a,c,d){var p=a._reactRootContainer;if(p){var _=p;if(typeof d=="function"){var I=d;d=function(){var C=pu(_);I.call(C)}}fu(r,_,n,d)}else _=G0(a,r,n,d,c);return pu(_)}fl=function(n){switch(n.tag){case 3:var r=n.stateNode;if(r.current.memoizedState.isDehydrated){var a=Ur(r.pendingLanes);a!==0&&($r(r,a|1),Jt(r,$e()),(Le&6)===0&&(ro=$e()+500,Jr()))}break;case 13:Xi(function(){var c=kr(n,1);if(c!==null){var d=Wt();Un(c,n,1,d)}}),qh(n,1)}},Cs=function(n){if(n.tag===13){var r=kr(n,134217728);if(r!==null){var a=Wt();Un(r,n,134217728,a)}qh(n,134217728)}},pl=function(n){if(n.tag===13){var r=ii(n),a=kr(n,r);if(a!==null){var c=Wt();Un(a,n,r,c)}qh(n,r)}},ml=function(){return De},gl=function(n,r){var a=De;try{return De=n,r()}finally{De=a}},vs=function(n,r,a){switch(r){case"input":if(No(n,a),r=a.name,a.type==="radio"&&r!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<a.length;r++){var c=a[r];if(c!==n&&c.form===n.form){var d=Vl(c);if(!d)throw Error(t(90));Sn(c),No(c,d)}}}break;case"textarea":ys(n,a);break;case"select":r=a.value,r!=null&&fr(n,!!a.multiple,r,!1)}},Ni=Fh,zo=Xi;var K0={usingClientEntryPoint:!1,Events:[ua,Hs,Vl,Wn,Uo,Fh]},Ia={findFiberByHostInstance:$i,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Q0={bundleType:Ia.bundleType,version:Ia.version,rendererPackageName:Ia.rendererPackageName,rendererConfig:Ia.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ae.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Ho(n),n===null?null:n.stateNode},findFiberByHostInstance:Ia.findFiberByHostInstance||q0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var _u=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!_u.isDisabled&&_u.supportsFiber)try{Mi=_u.inject(Q0),rn=_u}catch{}}return Zt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=K0,Zt.createPortal=function(n,r){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Kh(r))throw Error(t(200));return W0(n,r,null,a)},Zt.createRoot=function(n,r){if(!Kh(n))throw Error(t(299));var a=!1,c="",d=Pm;return r!=null&&(r.unstable_strictMode===!0&&(a=!0),r.identifierPrefix!==void 0&&(c=r.identifierPrefix),r.onRecoverableError!==void 0&&(d=r.onRecoverableError)),r=Wh(n,1,!1,null,null,a,!1,c,d),n[Er]=r.current,oa(n.nodeType===8?n.parentNode:n),new Gh(r)},Zt.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=Ho(r),n=n===null?null:n.stateNode,n},Zt.flushSync=function(n){return Xi(n)},Zt.hydrate=function(n,r,a){if(!gu(r))throw Error(t(200));return yu(null,n,r,!0,a)},Zt.hydrateRoot=function(n,r,a){if(!Kh(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,d=!1,p="",_=Pm;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(p=a.identifierPrefix),a.onRecoverableError!==void 0&&(_=a.onRecoverableError)),r=Cm(r,null,n,1,a??null,d,!1,p,_),n[Er]=r.current,oa(n),c)for(n=0;n<c.length;n++)a=c[n],d=a._getVersion,d=d(a._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[a,d]:r.mutableSourceEagerHydrationData.push(a,d);return new mu(r)},Zt.render=function(n,r,a){if(!gu(r))throw Error(t(200));return yu(null,n,r,!1,a)},Zt.unmountComponentAtNode=function(n){if(!gu(n))throw Error(t(40));return n._reactRootContainer?(Xi(function(){yu(null,null,n,!1,function(){n._reactRootContainer=null,n[Er]=null})}),!0):!1},Zt.unstable_batchedUpdates=Fh,Zt.unstable_renderSubtreeIntoContainer=function(n,r,a,c){if(!gu(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return yu(n,r,a,!1,c)},Zt.version="18.3.1-next-f1338f8080-20240426",Zt}var Fm;function rw(){if(Fm)return Xh.exports;Fm=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),Xh.exports=nw(),Xh.exports}var Um;function iw(){if(Um)return vu;Um=1;var i=rw();return vu.createRoot=i.createRoot,vu.hydrateRoot=i.hydrateRoot,vu}var sw=iw();const ow=()=>{};var zm={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gy=function(i){const e=[];let t=0;for(let s=0;s<i.length;s++){let o=i.charCodeAt(s);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&s+1<i.length&&(i.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(i.charCodeAt(++s)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},aw=function(i){const e=[];let t=0,s=0;for(;t<i.length;){const o=i[t++];if(o<128)e[s++]=String.fromCharCode(o);else if(o>191&&o<224){const u=i[t++];e[s++]=String.fromCharCode((o&31)<<6|u&63)}else if(o>239&&o<365){const u=i[t++],h=i[t++],m=i[t++],y=((o&7)<<18|(u&63)<<12|(h&63)<<6|m&63)-65536;e[s++]=String.fromCharCode(55296+(y>>10)),e[s++]=String.fromCharCode(56320+(y&1023))}else{const u=i[t++],h=i[t++];e[s++]=String.fromCharCode((o&15)<<12|(u&63)<<6|h&63)}}return e.join("")},yy={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,e){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<i.length;o+=3){const u=i[o],h=o+1<i.length,m=h?i[o+1]:0,y=o+2<i.length,v=y?i[o+2]:0,T=u>>2,A=(u&3)<<4|m>>4;let R=(m&15)<<2|v>>6,j=v&63;y||(j=64,h||(R=64)),s.push(t[T],t[A],t[R],t[j])}return s.join("")},encodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(i):this.encodeByteArray(gy(i),e)},decodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(i):aw(this.decodeStringToByteArray(i,e))},decodeStringToByteArray(i,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<i.length;){const u=t[i.charAt(o++)],m=o<i.length?t[i.charAt(o)]:0;++o;const v=o<i.length?t[i.charAt(o)]:64;++o;const A=o<i.length?t[i.charAt(o)]:64;if(++o,u==null||m==null||v==null||A==null)throw new lw;const R=u<<2|m>>4;if(s.push(R),v!==64){const j=m<<4&240|v>>2;if(s.push(j),A!==64){const $=v<<6&192|A;s.push($)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class lw extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const uw=function(i){const e=gy(i);return yy.encodeByteArray(e,!0)},Fu=function(i){return uw(i).replace(/\./g,"")},_y=function(i){try{return yy.decodeString(i,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cw(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hw=()=>cw().__FIREBASE_DEFAULTS__,dw=()=>{if(typeof process>"u"||typeof zm>"u")return;const i=zm.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},fw=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=i&&_y(i[1]);return e&&JSON.parse(e)},sc=()=>{try{return ow()||hw()||dw()||fw()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},vy=i=>sc()?.emulatorHosts?.[i],pw=i=>{const e=vy(i);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},wy=()=>sc()?.config,Ey=i=>sc()?.[`_${i}`];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mw{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Io(i){try{return(i.startsWith("http://")||i.startsWith("https://")?new URL(i).hostname:i).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Ty(i){return(await fetch(i,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gw(i,e){if(i.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",o=i.iat||0,u=i.sub||i.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h={iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}},...i};return[Fu(JSON.stringify(t)),Fu(JSON.stringify(h)),""].join(".")}const Na={};function yw(){const i={prod:[],emulator:[]};for(const e of Object.keys(Na))Na[e]?i.emulator.push(e):i.prod.push(e);return i}function _w(i){let e=document.getElementById(i),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",i),t=!0),{created:t,element:e}}let Bm=!1;function Iy(i,e){if(typeof window>"u"||typeof document>"u"||!Io(window.location.host)||Na[i]===e||Na[i]||Bm)return;Na[i]=e;function t(R){return`__firebase__banner__${R}`}const s="__firebase__banner",u=yw().prod.length>0;function h(){const R=document.getElementById(s);R&&R.remove()}function m(R){R.style.display="flex",R.style.background="#7faaf0",R.style.position="fixed",R.style.bottom="5px",R.style.left="5px",R.style.padding=".5em",R.style.borderRadius="5px",R.style.alignItems="center"}function y(R,j){R.setAttribute("width","24"),R.setAttribute("id",j),R.setAttribute("height","24"),R.setAttribute("viewBox","0 0 24 24"),R.setAttribute("fill","none"),R.style.marginLeft="-6px"}function v(){const R=document.createElement("span");return R.style.cursor="pointer",R.style.marginLeft="16px",R.style.fontSize="24px",R.innerHTML=" &times;",R.onclick=()=>{Bm=!0,h()},R}function T(R,j){R.setAttribute("id",j),R.innerText="Learn more",R.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",R.setAttribute("target","__blank"),R.style.paddingLeft="5px",R.style.textDecoration="underline"}function A(){const R=_w(s),j=t("text"),$=document.getElementById(j)||document.createElement("span"),Y=t("learnmore"),B=document.getElementById(Y)||document.createElement("a"),fe=t("preprendIcon"),ue=document.getElementById(fe)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(R.created){const ye=R.element;m(ye),T(B,Y);const Ae=v();y(ue,fe),ye.append(ue,$,B,Ae),document.body.appendChild(ye)}u?($.innerText="Preview backend disconnected.",ue.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(ue.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,$.innerText="Preview backend running in this workspace."),$.setAttribute("id",j)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",A):A()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function vw(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(zt())}function ww(){const i=sc()?.forceEnvironment;if(i==="node")return!0;if(i==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Ew(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Tw(){const i=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof i=="object"&&i.id!==void 0}function Iw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Sw(){const i=zt();return i.indexOf("MSIE ")>=0||i.indexOf("Trident/")>=0}function kw(){return!ww()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function xw(){try{return typeof indexedDB=="object"}catch{return!1}}function Aw(){return new Promise((i,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(s),i(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{e(o.error?.message||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cw="FirebaseError";class Mr extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=Cw,Object.setPrototypeOf(this,Mr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ga.prototype.create)}}class Ga{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},o=`${this.service}/${e}`,u=this.errors[e],h=u?Rw(u,s):"Error",m=`${this.serviceName}: ${h} (${o}).`;return new Mr(o,m,s)}}function Rw(i,e){return i.replace(Pw,(t,s)=>{const o=e[s];return o!=null?String(o):`<${s}?>`})}const Pw=/\{\$([^}]+)}/g;function Nw(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}function is(i,e){if(i===e)return!0;const t=Object.keys(i),s=Object.keys(e);for(const o of t){if(!s.includes(o))return!1;const u=i[o],h=e[o];if($m(u)&&$m(h)){if(!is(u,h))return!1}else if(u!==h)return!1}for(const o of s)if(!t.includes(o))return!1;return!0}function $m(i){return i!==null&&typeof i=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ka(i){const e=[];for(const[t,s]of Object.entries(i))Array.isArray(s)?s.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function ka(i){const e={};return i.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[o,u]=s.split("=");e[decodeURIComponent(o)]=decodeURIComponent(u)}}),e}function xa(i){const e=i.indexOf("?");if(!e)return"";const t=i.indexOf("#",e);return i.substring(e,t>0?t:void 0)}function bw(i,e){const t=new Dw(i,e);return t.subscribe.bind(t)}class Dw{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let o;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");Vw(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:s},o.next===void 0&&(o.next=ed),o.error===void 0&&(o.error=ed),o.complete===void 0&&(o.complete=ed);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),u}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Vw(i,e){if(typeof i!="object"||i===null)return!1;for(const t of e)if(t in i&&typeof i[t]=="function")return!0;return!1}function ed(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tn(i){return i&&i._delegate?i._delegate:i}class ss{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ts="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ow{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new mw;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e?.identifier),s=e?.optional??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Lw(e))try{this.getOrInitializeService({instanceIdentifier:ts})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const u=this.getOrInitializeService({instanceIdentifier:o});s.resolve(u)}catch{}}}}clearInstance(e=ts){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ts){return this.instances.has(e)}getOptions(e=ts){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[u,h]of this.instancesDeferred.entries()){const m=this.normalizeInstanceIdentifier(u);s===m&&h.resolve(o)}return o}onInit(e,t){const s=this.normalizeInstanceIdentifier(t),o=this.onInitCallbacks.get(s)??new Set;o.add(e),this.onInitCallbacks.set(s,o);const u=this.instances.get(s);return u&&e(u,s),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const o of s)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Mw(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=ts){return this.component?this.component.multipleInstances?e:ts:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Mw(i){return i===ts?void 0:i}function Lw(i){return i.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jw{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Ow(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Pe;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(Pe||(Pe={}));const Fw={debug:Pe.DEBUG,verbose:Pe.VERBOSE,info:Pe.INFO,warn:Pe.WARN,error:Pe.ERROR,silent:Pe.SILENT},Uw=Pe.INFO,zw={[Pe.DEBUG]:"log",[Pe.VERBOSE]:"log",[Pe.INFO]:"info",[Pe.WARN]:"warn",[Pe.ERROR]:"error"},Bw=(i,e,...t)=>{if(e<i.logLevel)return;const s=new Date().toISOString(),o=zw[e];if(o)console[o](`[${s}]  ${i.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class jd{constructor(e){this.name=e,this._logLevel=Uw,this._logHandler=Bw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Pe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Fw[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Pe.DEBUG,...e),this._logHandler(this,Pe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Pe.VERBOSE,...e),this._logHandler(this,Pe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Pe.INFO,...e),this._logHandler(this,Pe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Pe.WARN,...e),this._logHandler(this,Pe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Pe.ERROR,...e),this._logHandler(this,Pe.ERROR,...e)}}const $w=(i,e)=>e.some(t=>i instanceof t);let Hm,Wm;function Hw(){return Hm||(Hm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ww(){return Wm||(Wm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Sy=new WeakMap,dd=new WeakMap,ky=new WeakMap,td=new WeakMap,Fd=new WeakMap;function qw(i){const e=new Promise((t,s)=>{const o=()=>{i.removeEventListener("success",u),i.removeEventListener("error",h)},u=()=>{t(pi(i.result)),o()},h=()=>{s(i.error),o()};i.addEventListener("success",u),i.addEventListener("error",h)});return e.then(t=>{t instanceof IDBCursor&&Sy.set(t,i)}).catch(()=>{}),Fd.set(e,i),e}function Gw(i){if(dd.has(i))return;const e=new Promise((t,s)=>{const o=()=>{i.removeEventListener("complete",u),i.removeEventListener("error",h),i.removeEventListener("abort",h)},u=()=>{t(),o()},h=()=>{s(i.error||new DOMException("AbortError","AbortError")),o()};i.addEventListener("complete",u),i.addEventListener("error",h),i.addEventListener("abort",h)});dd.set(i,e)}let fd={get(i,e,t){if(i instanceof IDBTransaction){if(e==="done")return dd.get(i);if(e==="objectStoreNames")return i.objectStoreNames||ky.get(i);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return pi(i[e])},set(i,e,t){return i[e]=t,!0},has(i,e){return i instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in i}};function Kw(i){fd=i(fd)}function Qw(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=i.call(nd(this),e,...t);return ky.set(s,e.sort?e.sort():[e]),pi(s)}:Ww().includes(i)?function(...e){return i.apply(nd(this),e),pi(Sy.get(this))}:function(...e){return pi(i.apply(nd(this),e))}}function Yw(i){return typeof i=="function"?Qw(i):(i instanceof IDBTransaction&&Gw(i),$w(i,Hw())?new Proxy(i,fd):i)}function pi(i){if(i instanceof IDBRequest)return qw(i);if(td.has(i))return td.get(i);const e=Yw(i);return e!==i&&(td.set(i,e),Fd.set(e,i)),e}const nd=i=>Fd.get(i);function Xw(i,e,{blocked:t,upgrade:s,blocking:o,terminated:u}={}){const h=indexedDB.open(i,e),m=pi(h);return s&&h.addEventListener("upgradeneeded",y=>{s(pi(h.result),y.oldVersion,y.newVersion,pi(h.transaction),y)}),t&&h.addEventListener("blocked",y=>t(y.oldVersion,y.newVersion,y)),m.then(y=>{u&&y.addEventListener("close",()=>u()),o&&y.addEventListener("versionchange",v=>o(v.oldVersion,v.newVersion,v))}).catch(()=>{}),m}const Jw=["get","getKey","getAll","getAllKeys","count"],Zw=["put","add","delete","clear"],rd=new Map;function qm(i,e){if(!(i instanceof IDBDatabase&&!(e in i)&&typeof e=="string"))return;if(rd.get(e))return rd.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,o=Zw.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(o||Jw.includes(t)))return;const u=async function(h,...m){const y=this.transaction(h,o?"readwrite":"readonly");let v=y.store;return s&&(v=v.index(m.shift())),(await Promise.all([v[t](...m),o&&y.done]))[0]};return rd.set(e,u),u}Kw(i=>({...i,get:(e,t,s)=>qm(e,t)||i.get(e,t,s),has:(e,t)=>!!qm(e,t)||i.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eE{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(tE(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function tE(i){return i.getComponent()?.type==="VERSION"}const pd="@firebase/app",Gm="0.14.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const br=new jd("@firebase/app"),nE="@firebase/app-compat",rE="@firebase/analytics-compat",iE="@firebase/analytics",sE="@firebase/app-check-compat",oE="@firebase/app-check",aE="@firebase/auth",lE="@firebase/auth-compat",uE="@firebase/database",cE="@firebase/data-connect",hE="@firebase/database-compat",dE="@firebase/functions",fE="@firebase/functions-compat",pE="@firebase/installations",mE="@firebase/installations-compat",gE="@firebase/messaging",yE="@firebase/messaging-compat",_E="@firebase/performance",vE="@firebase/performance-compat",wE="@firebase/remote-config",EE="@firebase/remote-config-compat",TE="@firebase/storage",IE="@firebase/storage-compat",SE="@firebase/firestore",kE="@firebase/ai",xE="@firebase/firestore-compat",AE="firebase",CE="12.2.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const md="[DEFAULT]",RE={[pd]:"fire-core",[nE]:"fire-core-compat",[iE]:"fire-analytics",[rE]:"fire-analytics-compat",[oE]:"fire-app-check",[sE]:"fire-app-check-compat",[aE]:"fire-auth",[lE]:"fire-auth-compat",[uE]:"fire-rtdb",[cE]:"fire-data-connect",[hE]:"fire-rtdb-compat",[dE]:"fire-fn",[fE]:"fire-fn-compat",[pE]:"fire-iid",[mE]:"fire-iid-compat",[gE]:"fire-fcm",[yE]:"fire-fcm-compat",[_E]:"fire-perf",[vE]:"fire-perf-compat",[wE]:"fire-rc",[EE]:"fire-rc-compat",[TE]:"fire-gcs",[IE]:"fire-gcs-compat",[SE]:"fire-fst",[xE]:"fire-fst-compat",[kE]:"fire-vertex","fire-js":"fire-js",[AE]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uu=new Map,PE=new Map,gd=new Map;function Km(i,e){try{i.container.addComponent(e)}catch(t){br.debug(`Component ${e.name} failed to register with FirebaseApp ${i.name}`,t)}}function mo(i){const e=i.name;if(gd.has(e))return br.debug(`There were multiple attempts to register component ${e}.`),!1;gd.set(e,i);for(const t of Uu.values())Km(t,i);for(const t of PE.values())Km(t,i);return!0}function Ud(i,e){const t=i.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),i.container.getProvider(e)}function En(i){return i==null?!1:i.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NE={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},mi=new Ga("app","Firebase",NE);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bE{constructor(e,t,s){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new ss("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw mi.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const So=CE;function xy(i,e={}){let t=i;typeof e!="object"&&(e={name:e});const s={name:md,automaticDataCollectionEnabled:!0,...e},o=s.name;if(typeof o!="string"||!o)throw mi.create("bad-app-name",{appName:String(o)});if(t||(t=wy()),!t)throw mi.create("no-options");const u=Uu.get(o);if(u){if(is(t,u.options)&&is(s,u.config))return u;throw mi.create("duplicate-app",{appName:o})}const h=new jw(o);for(const y of gd.values())h.addComponent(y);const m=new bE(t,s,h);return Uu.set(o,m),m}function Ay(i=md){const e=Uu.get(i);if(!e&&i===md&&wy())return xy();if(!e)throw mi.create("no-app",{appName:i});return e}function gi(i,e,t){let s=RE[i]??i;t&&(s+=`-${t}`);const o=s.match(/\s|\//),u=e.match(/\s|\//);if(o||u){const h=[`Unable to register library "${s}" with version "${e}":`];o&&h.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&u&&h.push("and"),u&&h.push(`version name "${e}" contains illegal characters (whitespace or "/")`),br.warn(h.join(" "));return}mo(new ss(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DE="firebase-heartbeat-database",VE=1,ja="firebase-heartbeat-store";let id=null;function Cy(){return id||(id=Xw(DE,VE,{upgrade:(i,e)=>{switch(e){case 0:try{i.createObjectStore(ja)}catch(t){console.warn(t)}}}}).catch(i=>{throw mi.create("idb-open",{originalErrorMessage:i.message})})),id}async function OE(i){try{const t=(await Cy()).transaction(ja),s=await t.objectStore(ja).get(Ry(i));return await t.done,s}catch(e){if(e instanceof Mr)br.warn(e.message);else{const t=mi.create("idb-get",{originalErrorMessage:e?.message});br.warn(t.message)}}}async function Qm(i,e){try{const s=(await Cy()).transaction(ja,"readwrite");await s.objectStore(ja).put(e,Ry(i)),await s.done}catch(t){if(t instanceof Mr)br.warn(t.message);else{const s=mi.create("idb-set",{originalErrorMessage:t?.message});br.warn(s.message)}}}function Ry(i){return`${i.name}!${i.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ME=1024,LE=30;class jE{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new UE(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){try{const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Ym();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:t}),this._heartbeatsCache.heartbeats.length>LE){const o=zE(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){br.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Ym(),{heartbeatsToSend:t,unsentEntries:s}=FE(this._heartbeatsCache.heartbeats),o=Fu(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(e){return br.warn(e),""}}}function Ym(){return new Date().toISOString().substring(0,10)}function FE(i,e=ME){const t=[];let s=i.slice();for(const o of i){const u=t.find(h=>h.agent===o.agent);if(u){if(u.dates.push(o.date),Xm(t)>e){u.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),Xm(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class UE{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return xw()?Aw().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await OE(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return Qm(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return Qm(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Xm(i){return Fu(JSON.stringify({version:2,heartbeats:i})).length}function zE(i){if(i.length===0)return-1;let e=0,t=i[0].date;for(let s=1;s<i.length;s++)i[s].date<t&&(t=i[s].date,e=s);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BE(i){mo(new ss("platform-logger",e=>new eE(e),"PRIVATE")),mo(new ss("heartbeat",e=>new jE(e),"PRIVATE")),gi(pd,Gm,i),gi(pd,Gm,"esm2020"),gi("fire-js","")}BE("");var $E="firebase",HE="12.2.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */gi($E,HE,"app");function Py(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const WE=Py,Ny=new Ga("auth","Firebase",Py());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zu=new jd("@firebase/auth");function qE(i,...e){zu.logLevel<=Pe.WARN&&zu.warn(`Auth (${So}): ${i}`,...e)}function Cu(i,...e){zu.logLevel<=Pe.ERROR&&zu.error(`Auth (${So}): ${i}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $n(i,...e){throw zd(i,...e)}function nr(i,...e){return zd(i,...e)}function by(i,e,t){const s={...WE(),[e]:t};return new Ga("auth","Firebase",s).create(e,{appName:i.name})}function Nr(i){return by(i,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function zd(i,...e){if(typeof i!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=i.name),i._errorFactory.create(t,...s)}return Ny.create(i,...e)}function _e(i,e,...t){if(!i)throw zd(e,...t)}function Rr(i){const e="INTERNAL ASSERTION FAILED: "+i;throw Cu(e),new Error(e)}function Dr(i,e){i||Rr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yd(){return typeof self<"u"&&self.location?.href||""}function GE(){return Jm()==="http:"||Jm()==="https:"}function Jm(){return typeof self<"u"&&self.location?.protocol||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KE(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(GE()||Tw()||"connection"in navigator)?navigator.onLine:!0}function QE(){if(typeof navigator>"u")return null;const i=navigator;return i.languages&&i.languages[0]||i.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qa{constructor(e,t){this.shortDelay=e,this.longDelay=t,Dr(t>e,"Short delay should be less than long delay!"),this.isMobile=vw()||Iw()}get(){return KE()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bd(i,e){Dr(i.emulator,"Emulator should always be set here");const{url:t}=i.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dy{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Rr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Rr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Rr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YE={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XE=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],JE=new Qa(3e4,6e4);function xi(i,e){return i.tenantId&&!e.tenantId?{...e,tenantId:i.tenantId}:e}async function Ai(i,e,t,s,o={}){return Vy(i,o,async()=>{let u={},h={};s&&(e==="GET"?h=s:u={body:JSON.stringify(s)});const m=Ka({key:i.config.apiKey,...h}).slice(1),y=await i._getAdditionalHeaders();y["Content-Type"]="application/json",i.languageCode&&(y["X-Firebase-Locale"]=i.languageCode);const v={method:e,headers:y,...u};return Ew()||(v.referrerPolicy="no-referrer"),i.emulatorConfig&&Io(i.emulatorConfig.host)&&(v.credentials="include"),Dy.fetch()(await Oy(i,i.config.apiHost,t,m),v)})}async function Vy(i,e,t){i._canInitEmulator=!1;const s={...YE,...e};try{const o=new eT(i),u=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const h=await u.json();if("needConfirmation"in h)throw wu(i,"account-exists-with-different-credential",h);if(u.ok&&!("errorMessage"in h))return h;{const m=u.ok?h.errorMessage:h.error.message,[y,v]=m.split(" : ");if(y==="FEDERATED_USER_ID_ALREADY_LINKED")throw wu(i,"credential-already-in-use",h);if(y==="EMAIL_EXISTS")throw wu(i,"email-already-in-use",h);if(y==="USER_DISABLED")throw wu(i,"user-disabled",h);const T=s[y]||y.toLowerCase().replace(/[_\s]+/g,"-");if(v)throw by(i,T,v);$n(i,T)}}catch(o){if(o instanceof Mr)throw o;$n(i,"network-request-failed",{message:String(o)})}}async function Ya(i,e,t,s,o={}){const u=await Ai(i,e,t,s,o);return"mfaPendingCredential"in u&&$n(i,"multi-factor-auth-required",{_serverResponse:u}),u}async function Oy(i,e,t,s){const o=`${e}${t}?${s}`,u=i,h=u.config.emulator?Bd(i.config,o):`${i.config.apiScheme}://${o}`;return XE.includes(t)&&(await u._persistenceManagerAvailable,u._getPersistenceType()==="COOKIE")?u._getPersistence()._getFinalTarget(h).toString():h}function ZE(i){switch(i){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class eT{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(nr(this.auth,"network-request-failed")),JE.get())})}}function wu(i,e,t){const s={appName:i.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const o=nr(i,e,s);return o.customData._tokenResponse=t,o}function Zm(i){return i!==void 0&&i.enterprise!==void 0}class tT{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return ZE(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function nT(i,e){return Ai(i,"GET","/v2/recaptchaConfig",xi(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rT(i,e){return Ai(i,"POST","/v1/accounts:delete",e)}async function Bu(i,e){return Ai(i,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ba(i){if(i)try{const e=new Date(Number(i));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function iT(i,e=!1){const t=tn(i),s=await t.getIdToken(e),o=$d(s);_e(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const u=typeof o.firebase=="object"?o.firebase:void 0,h=u?.sign_in_provider;return{claims:o,token:s,authTime:ba(sd(o.auth_time)),issuedAtTime:ba(sd(o.iat)),expirationTime:ba(sd(o.exp)),signInProvider:h||null,signInSecondFactor:u?.sign_in_second_factor||null}}function sd(i){return Number(i)*1e3}function $d(i){const[e,t,s]=i.split(".");if(e===void 0||t===void 0||s===void 0)return Cu("JWT malformed, contained fewer than 3 sections"),null;try{const o=_y(t);return o?JSON.parse(o):(Cu("Failed to decode base64 JWT payload"),null)}catch(o){return Cu("Caught error parsing JWT payload as JSON",o?.toString()),null}}function eg(i){const e=$d(i);return _e(e,"internal-error"),_e(typeof e.exp<"u","internal-error"),_e(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fa(i,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof Mr&&sT(s)&&i.auth.currentUser===i&&await i.auth.signOut(),s}}function sT({code:i}){return i==="auth/user-disabled"||i==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oT{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _d{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=ba(this.lastLoginAt),this.creationTime=ba(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $u(i){const e=i.auth,t=await i.getIdToken(),s=await Fa(i,Bu(e,{idToken:t}));_e(s?.users.length,e,"internal-error");const o=s.users[0];i._notifyReloadListener(o);const u=o.providerUserInfo?.length?My(o.providerUserInfo):[],h=lT(i.providerData,u),m=i.isAnonymous,y=!(i.email&&o.passwordHash)&&!h?.length,v=m?y:!1,T={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:h,metadata:new _d(o.createdAt,o.lastLoginAt),isAnonymous:v};Object.assign(i,T)}async function aT(i){const e=tn(i);await $u(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function lT(i,e){return[...i.filter(s=>!e.some(o=>o.providerId===s.providerId)),...e]}function My(i){return i.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uT(i,e){const t=await Vy(i,{},async()=>{const s=Ka({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:u}=i.config,h=await Oy(i,o,"/v1/token",`key=${u}`),m=await i._getAdditionalHeaders();m["Content-Type"]="application/x-www-form-urlencoded";const y={method:"POST",headers:m,body:s};return i.emulatorConfig&&Io(i.emulatorConfig.host)&&(y.credentials="include"),Dy.fetch()(h,y)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function cT(i,e){return Ai(i,"POST","/v2/accounts:revokeToken",xi(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class co{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){_e(e.idToken,"internal-error"),_e(typeof e.idToken<"u","internal-error"),_e(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):eg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){_e(e.length!==0,"internal-error");const t=eg(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(_e(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:o,expiresIn:u}=await uT(e,t);this.updateTokensAndExpiration(s,o,Number(u))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:o,expirationTime:u}=t,h=new co;return s&&(_e(typeof s=="string","internal-error",{appName:e}),h.refreshToken=s),o&&(_e(typeof o=="string","internal-error",{appName:e}),h.accessToken=o),u&&(_e(typeof u=="number","internal-error",{appName:e}),h.expirationTime=u),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new co,this.toJSON())}_performRefresh(){return Rr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function li(i,e){_e(typeof i=="string"||typeof i>"u","internal-error",{appName:e})}class zn{constructor({uid:e,auth:t,stsTokenManager:s,...o}){this.providerId="firebase",this.proactiveRefresh=new oT(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new _d(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const t=await Fa(this,this.stsTokenManager.getToken(this.auth,e));return _e(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return iT(this,e)}reload(){return aT(this)}_assign(e){this!==e&&(_e(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new zn({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){_e(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await $u(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(En(this.auth.app))return Promise.reject(Nr(this.auth));const e=await this.getIdToken();return await Fa(this,rT(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const s=t.displayName??void 0,o=t.email??void 0,u=t.phoneNumber??void 0,h=t.photoURL??void 0,m=t.tenantId??void 0,y=t._redirectEventId??void 0,v=t.createdAt??void 0,T=t.lastLoginAt??void 0,{uid:A,emailVerified:R,isAnonymous:j,providerData:$,stsTokenManager:Y}=t;_e(A&&Y,e,"internal-error");const B=co.fromJSON(this.name,Y);_e(typeof A=="string",e,"internal-error"),li(s,e.name),li(o,e.name),_e(typeof R=="boolean",e,"internal-error"),_e(typeof j=="boolean",e,"internal-error"),li(u,e.name),li(h,e.name),li(m,e.name),li(y,e.name),li(v,e.name),li(T,e.name);const fe=new zn({uid:A,auth:e,email:o,emailVerified:R,displayName:s,isAnonymous:j,photoURL:h,phoneNumber:u,tenantId:m,stsTokenManager:B,createdAt:v,lastLoginAt:T});return $&&Array.isArray($)&&(fe.providerData=$.map(ue=>({...ue}))),y&&(fe._redirectEventId=y),fe}static async _fromIdTokenResponse(e,t,s=!1){const o=new co;o.updateFromServerResponse(t);const u=new zn({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:s});return await $u(u),u}static async _fromGetAccountInfoResponse(e,t,s){const o=t.users[0];_e(o.localId!==void 0,"internal-error");const u=o.providerUserInfo!==void 0?My(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!u?.length,m=new co;m.updateFromIdToken(s);const y=new zn({uid:o.localId,auth:e,stsTokenManager:m,isAnonymous:h}),v={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new _d(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!u?.length};return Object.assign(y,v),y}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tg=new Map;function Pr(i){Dr(i instanceof Function,"Expected a class definition");let e=tg.get(i);return e?(Dr(e instanceof i,"Instance stored in cache mismatched with class"),e):(e=new i,tg.set(i,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ly{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Ly.type="NONE";const ng=Ly;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ru(i,e,t){return`firebase:${i}:${e}:${t}`}class ho{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:o,name:u}=this.auth;this.fullUserKey=Ru(this.userKey,o.apiKey,u),this.fullPersistenceKey=Ru("persistence",o.apiKey,u),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Bu(this.auth,{idToken:e}).catch(()=>{});return t?zn._fromGetAccountInfoResponse(this.auth,t,e):null}return zn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new ho(Pr(ng),e,s);const o=(await Promise.all(t.map(async v=>{if(await v._isAvailable())return v}))).filter(v=>v);let u=o[0]||Pr(ng);const h=Ru(s,e.config.apiKey,e.name);let m=null;for(const v of t)try{const T=await v._get(h);if(T){let A;if(typeof T=="string"){const R=await Bu(e,{idToken:T}).catch(()=>{});if(!R)break;A=await zn._fromGetAccountInfoResponse(e,R,T)}else A=zn._fromJSON(e,T);v!==u&&(m=A),u=v;break}}catch{}const y=o.filter(v=>v._shouldAllowMigration);return!u._shouldAllowMigration||!y.length?new ho(u,e,s):(u=y[0],m&&await u._set(h,m.toJSON()),await Promise.all(t.map(async v=>{if(v!==u)try{await v._remove(h)}catch{}})),new ho(u,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rg(i){const e=i.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(zy(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(jy(e))return"Firefox";if(e.includes("silk/"))return"Silk";if($y(e))return"Blackberry";if(Hy(e))return"Webos";if(Fy(e))return"Safari";if((e.includes("chrome/")||Uy(e))&&!e.includes("edge/"))return"Chrome";if(By(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=i.match(t);if(s?.length===2)return s[1]}return"Other"}function jy(i=zt()){return/firefox\//i.test(i)}function Fy(i=zt()){const e=i.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Uy(i=zt()){return/crios\//i.test(i)}function zy(i=zt()){return/iemobile/i.test(i)}function By(i=zt()){return/android/i.test(i)}function $y(i=zt()){return/blackberry/i.test(i)}function Hy(i=zt()){return/webos/i.test(i)}function Hd(i=zt()){return/iphone|ipad|ipod/i.test(i)||/macintosh/i.test(i)&&/mobile/i.test(i)}function hT(i=zt()){return Hd(i)&&!!window.navigator?.standalone}function dT(){return Sw()&&document.documentMode===10}function Wy(i=zt()){return Hd(i)||By(i)||Hy(i)||$y(i)||/windows phone/i.test(i)||zy(i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qy(i,e=[]){let t;switch(i){case"Browser":t=rg(zt());break;case"Worker":t=`${rg(zt())}-${i}`;break;default:t=i}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${So}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fT{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=u=>new Promise((h,m)=>{try{const y=e(u);h(y)}catch(y){m(y)}});s.onAbort=t,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s?.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pT(i,e={}){return Ai(i,"GET","/v2/passwordPolicy",xi(i,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mT=6;class gT{constructor(e){const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??mT,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let o=0;o<e.length;o++)s=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,o,u){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yT{constructor(e,t,s,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ig(this),this.idTokenSubscription=new ig(this),this.beforeStateQueue=new fT(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ny,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(u=>this._resolvePersistenceManagerAvailable=u)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Pr(t)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await ho.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Bu(this,{idToken:e}),s=await zn._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(En(this.app)){const u=this.app.settings.authIdToken;return u?new Promise(h=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(u).then(h,h))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let s=t,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const u=this.redirectUser?._redirectEventId,h=s?._redirectEventId,m=await this.tryRedirectSignIn(e);(!u||u===h)&&m?.user&&(s=m.user,o=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(s)}catch(u){s=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(u))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return _e(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await $u(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=QE()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(En(this.app))return Promise.reject(Nr(this));const t=e?tn(e):null;return t&&_e(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&_e(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return En(this.app)?Promise.reject(Nr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return En(this.app)?Promise.reject(Nr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Pr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await pT(this),t=new gT(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Ga("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await cT(this,s)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Pr(e)||this._popupRedirectResolver;_e(t,this,"argument-error"),this.redirectPersistenceManager=await ho.create(this,[Pr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,o){if(this._deleted)return()=>{};const u=typeof t=="function"?t:t.next.bind(t);let h=!1;const m=this._isInitialized?Promise.resolve():this._initializationPromise;if(_e(m,this,"internal-error"),m.then(()=>{h||u(this.currentUser)}),typeof t=="function"){const y=e.addObserver(t,s,o);return()=>{h=!0,y()}}else{const y=e.addObserver(t);return()=>{h=!0,y()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return _e(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=qy(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();t&&(e["X-Firebase-Client"]=t);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){if(En(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&qE(`Error while retrieving App Check token: ${e.error}`),e?.token}}function cs(i){return tn(i)}class ig{constructor(e){this.auth=e,this.observer=null,this.addObserver=bw(t=>this.observer=t)}get next(){return _e(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let oc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function _T(i){oc=i}function Gy(i){return oc.loadJS(i)}function vT(){return oc.recaptchaEnterpriseScript}function wT(){return oc.gapiScript}function ET(i){return`__${i}${Math.floor(Math.random()*1e6)}`}class TT{constructor(){this.enterprise=new IT}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class IT{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const ST="recaptcha-enterprise",Ky="NO_RECAPTCHA";class kT{constructor(e){this.type=ST,this.auth=cs(e)}async verify(e="verify",t=!1){async function s(u){if(!t){if(u.tenantId==null&&u._agentRecaptchaConfig!=null)return u._agentRecaptchaConfig.siteKey;if(u.tenantId!=null&&u._tenantRecaptchaConfigs[u.tenantId]!==void 0)return u._tenantRecaptchaConfigs[u.tenantId].siteKey}return new Promise(async(h,m)=>{nT(u,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(y=>{if(y.recaptchaKey===void 0)m(new Error("recaptcha Enterprise site key undefined"));else{const v=new tT(y);return u.tenantId==null?u._agentRecaptchaConfig=v:u._tenantRecaptchaConfigs[u.tenantId]=v,h(v.siteKey)}}).catch(y=>{m(y)})})}function o(u,h,m){const y=window.grecaptcha;Zm(y)?y.enterprise.ready(()=>{y.enterprise.execute(u,{action:e}).then(v=>{h(v)}).catch(()=>{h(Ky)})}):m(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new TT().execute("siteKey",{action:"verify"}):new Promise((u,h)=>{s(this.auth).then(m=>{if(!t&&Zm(window.grecaptcha))o(m,u,h);else{if(typeof window>"u"){h(new Error("RecaptchaVerifier is only supported in browser"));return}let y=vT();y.length!==0&&(y+=m),Gy(y).then(()=>{o(m,u,h)}).catch(v=>{h(v)})}}).catch(m=>{h(m)})})}}async function sg(i,e,t,s=!1,o=!1){const u=new kT(i);let h;if(o)h=Ky;else try{h=await u.verify(t)}catch{h=await u.verify(t,!0)}const m={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in m){const y=m.phoneEnrollmentInfo.phoneNumber,v=m.phoneEnrollmentInfo.recaptchaToken;Object.assign(m,{phoneEnrollmentInfo:{phoneNumber:y,recaptchaToken:v,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in m){const y=m.phoneSignInInfo.recaptchaToken;Object.assign(m,{phoneSignInInfo:{recaptchaToken:y,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return m}return s?Object.assign(m,{captchaResp:h}):Object.assign(m,{captchaResponse:h}),Object.assign(m,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(m,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),m}async function vd(i,e,t,s,o){if(i._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const u=await sg(i,e,t,t==="getOobCode");return s(i,u)}else return s(i,e).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const h=await sg(i,e,t,t==="getOobCode");return s(i,h)}else return Promise.reject(u)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xT(i,e){const t=Ud(i,"auth");if(t.isInitialized()){const o=t.getImmediate(),u=t.getOptions();if(is(u,e??{}))return o;$n(o,"already-initialized")}return t.initialize({options:e})}function AT(i,e){const t=e?.persistence||[],s=(Array.isArray(t)?t:[t]).map(Pr);e?.errorMap&&i._updateErrorMap(e.errorMap),i._initializeWithPersistence(s,e?.popupRedirectResolver)}function CT(i,e,t){const s=cs(i);_e(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const o=!1,u=Qy(e),{host:h,port:m}=RT(e),y=m===null?"":`:${m}`,v={url:`${u}//${h}${y}/`},T=Object.freeze({host:h,port:m,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!s._canInitEmulator){_e(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),_e(is(v,s.config.emulator)&&is(T,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=v,s.emulatorConfig=T,s.settings.appVerificationDisabledForTesting=!0,Io(h)?(Ty(`${u}//${h}${y}`),Iy("Auth",!0)):PT()}function Qy(i){const e=i.indexOf(":");return e<0?"":i.substr(0,e+1)}function RT(i){const e=Qy(i),t=/(\/\/)?([^?#/]+)/.exec(i.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const u=o[1];return{host:u,port:og(s.substr(u.length+1))}}else{const[u,h]=s.split(":");return{host:u,port:og(h)}}}function og(i){if(!i)return null;const e=Number(i);return isNaN(e)?null:e}function PT(){function i(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",i):i())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wd{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Rr("not implemented")}_getIdTokenResponse(e){return Rr("not implemented")}_linkToIdToken(e,t){return Rr("not implemented")}_getReauthenticationResolver(e){return Rr("not implemented")}}async function NT(i,e){return Ai(i,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bT(i,e){return Ya(i,"POST","/v1/accounts:signInWithPassword",xi(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DT(i,e){return Ya(i,"POST","/v1/accounts:signInWithEmailLink",xi(i,e))}async function VT(i,e){return Ya(i,"POST","/v1/accounts:signInWithEmailLink",xi(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ua extends Wd{constructor(e,t,s,o=null){super("password",s),this._email=e,this._password=t,this._tenantId=o}static _fromEmailAndPassword(e,t){return new Ua(e,t,"password")}static _fromEmailAndCode(e,t,s=null){return new Ua(e,t,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t?.email&&t?.password){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return vd(e,t,"signInWithPassword",bT);case"emailLink":return DT(e,{email:this._email,oobCode:this._password});default:$n(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const s={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return vd(e,s,"signUpPassword",NT);case"emailLink":return VT(e,{idToken:t,email:this._email,oobCode:this._password});default:$n(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fo(i,e){return Ya(i,"POST","/v1/accounts:signInWithIdp",xi(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OT="http://localhost";class os extends Wd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new os(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):$n("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:o,...u}=t;if(!s||!o)return null;const h=new os(s,o);return h.idToken=u.idToken||void 0,h.accessToken=u.accessToken||void 0,h.secret=u.secret,h.nonce=u.nonce,h.pendingToken=u.pendingToken||null,h}_getIdTokenResponse(e){const t=this.buildRequest();return fo(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,fo(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,fo(e,t)}buildRequest(){const e={requestUri:OT,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Ka(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MT(i){switch(i){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function LT(i){const e=ka(xa(i)).link,t=e?ka(xa(e)).deep_link_id:null,s=ka(xa(i)).deep_link_id;return(s?ka(xa(s)).link:null)||s||t||e||i}class qd{constructor(e){const t=ka(xa(e)),s=t.apiKey??null,o=t.oobCode??null,u=MT(t.mode??null);_e(s&&o&&u,"argument-error"),this.apiKey=s,this.operation=u,this.code=o,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=LT(e);try{return new qd(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko{constructor(){this.providerId=ko.PROVIDER_ID}static credential(e,t){return Ua._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const s=qd.parseLink(t);return _e(s,"argument-error"),Ua._fromEmailAndCode(e,s.code,s.tenantId)}}ko.PROVIDER_ID="password";ko.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ko.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yy{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xa extends Yy{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui extends Xa{constructor(){super("facebook.com")}static credential(e){return os._fromParams({providerId:ui.PROVIDER_ID,signInMethod:ui.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ui.credentialFromTaggedObject(e)}static credentialFromError(e){return ui.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ui.credential(e.oauthAccessToken)}catch{return null}}}ui.FACEBOOK_SIGN_IN_METHOD="facebook.com";ui.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci extends Xa{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return os._fromParams({providerId:ci.PROVIDER_ID,signInMethod:ci.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return ci.credentialFromTaggedObject(e)}static credentialFromError(e){return ci.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return ci.credential(t,s)}catch{return null}}}ci.GOOGLE_SIGN_IN_METHOD="google.com";ci.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi extends Xa{constructor(){super("github.com")}static credential(e){return os._fromParams({providerId:hi.PROVIDER_ID,signInMethod:hi.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return hi.credentialFromTaggedObject(e)}static credentialFromError(e){return hi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return hi.credential(e.oauthAccessToken)}catch{return null}}}hi.GITHUB_SIGN_IN_METHOD="github.com";hi.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di extends Xa{constructor(){super("twitter.com")}static credential(e,t){return os._fromParams({providerId:di.PROVIDER_ID,signInMethod:di.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return di.credentialFromTaggedObject(e)}static credentialFromError(e){return di.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return di.credential(t,s)}catch{return null}}}di.TWITTER_SIGN_IN_METHOD="twitter.com";di.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jT(i,e){return Ya(i,"POST","/v1/accounts:signUp",xi(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,o=!1){const u=await zn._fromIdTokenResponse(e,s,o),h=ag(s);return new as({user:u,providerId:h,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const o=ag(s);return new as({user:e,providerId:o,_tokenResponse:s,operationType:t})}}function ag(i){return i.providerId?i.providerId:"phoneNumber"in i?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hu extends Mr{constructor(e,t,s,o){super(t.code,t.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,Hu.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,o){return new Hu(e,t,s,o)}}function Xy(i,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(i):t._getIdTokenResponse(i)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?Hu._fromErrorAndOperation(i,u,e,s):u})}async function FT(i,e,t=!1){const s=await Fa(i,e._linkToIdToken(i.auth,await i.getIdToken()),t);return as._forOperation(i,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function UT(i,e,t=!1){const{auth:s}=i;if(En(s.app))return Promise.reject(Nr(s));const o="reauthenticate";try{const u=await Fa(i,Xy(s,o,e,i),t);_e(u.idToken,s,"internal-error");const h=$d(u.idToken);_e(h,s,"internal-error");const{sub:m}=h;return _e(i.uid===m,s,"user-mismatch"),as._forOperation(i,o,u)}catch(u){throw u?.code==="auth/user-not-found"&&$n(s,"user-mismatch"),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jy(i,e,t=!1){if(En(i.app))return Promise.reject(Nr(i));const s="signIn",o=await Xy(i,s,e),u=await as._fromIdTokenResponse(i,s,o);return t||await i._updateCurrentUser(u.user),u}async function zT(i,e){return Jy(cs(i),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zy(i){const e=cs(i);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function BT(i,e,t){if(En(i.app))return Promise.reject(Nr(i));const s=cs(i),h=await vd(s,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",jT).catch(y=>{throw y.code==="auth/password-does-not-meet-requirements"&&Zy(i),y}),m=await as._fromIdTokenResponse(s,"signIn",h);return await s._updateCurrentUser(m.user),m}function $T(i,e,t){return En(i.app)?Promise.reject(Nr(i)):zT(tn(i),ko.credential(e,t)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&Zy(i),s})}function HT(i,e,t,s){return tn(i).onIdTokenChanged(e,t,s)}function WT(i,e,t){return tn(i).beforeAuthStateChanged(e,t)}function qT(i,e,t,s){return tn(i).onAuthStateChanged(e,t,s)}function GT(i){return tn(i).signOut()}const Wu="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e_{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Wu,"1"),this.storage.removeItem(Wu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KT=1e3,QT=10;class t_ extends e_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Wy(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),o=this.localCache[t];s!==o&&e(t,o,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((h,m,y)=>{this.notifyListeners(h,y)});return}const s=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(s);!t&&this.localCache[s]===h||this.notifyListeners(s,h)},u=this.storage.getItem(s);dT()&&u!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,QT):o()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},KT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}t_.type="LOCAL";const YT=t_;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n_ extends e_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}n_.type="SESSION";const r_=n_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XT(i){return Promise.all(i.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ac{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const s=new ac(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:o,data:u}=t.data,h=this.handlersMap[o];if(!h?.size)return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const m=Array.from(h).map(async v=>v(t.origin,u)),y=await XT(m);t.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:y})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ac.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gd(i="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return i+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JT{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let u,h;return new Promise((m,y)=>{const v=Gd("",20);o.port1.start();const T=setTimeout(()=>{y(new Error("unsupported_event"))},s);h={messageChannel:o,onMessage(A){const R=A;if(R.data.eventId===v)switch(R.data.status){case"ack":clearTimeout(T),u=setTimeout(()=>{y(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),m(R.data.response);break;default:clearTimeout(T),clearTimeout(u),y(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:v,data:t},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rr(){return window}function ZT(i){rr().location.href=i}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function i_(){return typeof rr().WorkerGlobalScope<"u"&&typeof rr().importScripts=="function"}async function eI(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function tI(){return navigator?.serviceWorker?.controller||null}function nI(){return i_()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s_="firebaseLocalStorageDb",rI=1,qu="firebaseLocalStorage",o_="fbase_key";class Ja{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function lc(i,e){return i.transaction([qu],e?"readwrite":"readonly").objectStore(qu)}function iI(){const i=indexedDB.deleteDatabase(s_);return new Ja(i).toPromise()}function wd(){const i=indexedDB.open(s_,rI);return new Promise((e,t)=>{i.addEventListener("error",()=>{t(i.error)}),i.addEventListener("upgradeneeded",()=>{const s=i.result;try{s.createObjectStore(qu,{keyPath:o_})}catch(o){t(o)}}),i.addEventListener("success",async()=>{const s=i.result;s.objectStoreNames.contains(qu)?e(s):(s.close(),await iI(),e(await wd()))})})}async function lg(i,e,t){const s=lc(i,!0).put({[o_]:e,value:t});return new Ja(s).toPromise()}async function sI(i,e){const t=lc(i,!1).get(e),s=await new Ja(t).toPromise();return s===void 0?null:s.value}function ug(i,e){const t=lc(i,!0).delete(e);return new Ja(t).toPromise()}const oI=800,aI=3;class a_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await wd(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>aI)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return i_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ac._getInstance(nI()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await eI(),!this.activeServiceWorker)return;this.sender=new JT(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||tI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await wd();return await lg(e,Wu,"1"),await ug(e,Wu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>lg(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>sI(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>ug(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const u=lc(o,!1).getAll();return new Ja(u).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:o,value:u}of e)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(u)&&(this.notifyListeners(o,u),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),oI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}a_.type="LOCAL";const lI=a_;new Qa(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uI(i,e){return e?Pr(e):(_e(i._popupRedirectResolver,i,"argument-error"),i._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kd extends Wd{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return fo(e,this._buildIdpRequest())}_linkToIdToken(e,t){return fo(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return fo(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function cI(i){return Jy(i.auth,new Kd(i),i.bypassAuthState)}function hI(i){const{auth:e,user:t}=i;return _e(t,e,"internal-error"),UT(t,new Kd(i),i.bypassAuthState)}async function dI(i){const{auth:e,user:t}=i;return _e(t,e,"internal-error"),FT(t,new Kd(i),i.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l_{constructor(e,t,s,o,u=!1){this.auth=e,this.resolver=s,this.user=o,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:o,tenantId:u,error:h,type:m}=e;if(h){this.reject(h);return}const y={auth:this.auth,requestUri:t,sessionId:s,tenantId:u||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(m)(y))}catch(v){this.reject(v)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return cI;case"linkViaPopup":case"linkViaRedirect":return dI;case"reauthViaPopup":case"reauthViaRedirect":return hI;default:$n(this.auth,"internal-error")}}resolve(e){Dr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Dr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fI=new Qa(2e3,1e4);class uo extends l_{constructor(e,t,s,o,u){super(e,t,o,u),this.provider=s,this.authWindow=null,this.pollId=null,uo.currentPopupAction&&uo.currentPopupAction.cancel(),uo.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return _e(e,this.auth,"internal-error"),e}async onExecution(){Dr(this.filter.length===1,"Popup operations only handle one event");const e=Gd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(nr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(nr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,uo.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(nr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,fI.get())};e()}}uo.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pI="pendingRedirect",Pu=new Map;class mI extends l_{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=Pu.get(this.auth._key());if(!e){try{const s=await gI(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}Pu.set(this.auth._key(),e)}return this.bypassAuthState||Pu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function gI(i,e){const t=vI(e),s=_I(i);if(!await s._isAvailable())return!1;const o=await s._get(t)==="true";return await s._remove(t),o}function yI(i,e){Pu.set(i._key(),e)}function _I(i){return Pr(i._redirectPersistence)}function vI(i){return Ru(pI,i.config.apiKey,i.name)}async function wI(i,e,t=!1){if(En(i.app))return Promise.reject(Nr(i));const s=cs(i),o=uI(s,e),h=await new mI(s,o,t).execute();return h&&!t&&(delete h.user._redirectEventId,await s._persistUserIfCurrent(h.user),await s._setRedirectUser(null,e)),h}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EI=600*1e3;class TI{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!II(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){if(e.error&&!u_(e)){const s=e.error.code?.split("auth/")[1]||"internal-error";t.onError(nr(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=EI&&this.cachedEventUids.clear(),this.cachedEventUids.has(cg(e))}saveEventToCache(e){this.cachedEventUids.add(cg(e)),this.lastProcessedEventTime=Date.now()}}function cg(i){return[i.type,i.eventId,i.sessionId,i.tenantId].filter(e=>e).join("-")}function u_({type:i,error:e}){return i==="unknown"&&e?.code==="auth/no-auth-event"}function II(i){switch(i.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return u_(i);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function SI(i,e={}){return Ai(i,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,xI=/^https?/;async function AI(i){if(i.config.emulator)return;const{authorizedDomains:e}=await SI(i);for(const t of e)try{if(CI(t))return}catch{}$n(i,"unauthorized-domain")}function CI(i){const e=yd(),{protocol:t,hostname:s}=new URL(e);if(i.startsWith("chrome-extension://")){const h=new URL(i);return h.hostname===""&&s===""?t==="chrome-extension:"&&i.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&h.hostname===s}if(!xI.test(t))return!1;if(kI.test(i))return s===i;const o=i.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RI=new Qa(3e4,6e4);function hg(){const i=rr().___jsl;if(i?.H){for(const e of Object.keys(i.H))if(i.H[e].r=i.H[e].r||[],i.H[e].L=i.H[e].L||[],i.H[e].r=[...i.H[e].L],i.CP)for(let t=0;t<i.CP.length;t++)i.CP[t]=null}}function PI(i){return new Promise((e,t)=>{function s(){hg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{hg(),t(nr(i,"network-request-failed"))},timeout:RI.get()})}if(rr().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(rr().gapi?.load)s();else{const o=ET("iframefcb");return rr()[o]=()=>{gapi.load?s():t(nr(i,"network-request-failed"))},Gy(`${wT()}?onload=${o}`).catch(u=>t(u))}}).catch(e=>{throw Nu=null,e})}let Nu=null;function NI(i){return Nu=Nu||PI(i),Nu}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bI=new Qa(5e3,15e3),DI="__/auth/iframe",VI="emulator/auth/iframe",OI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},MI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function LI(i){const e=i.config;_e(e.authDomain,i,"auth-domain-config-required");const t=e.emulator?Bd(e,VI):`https://${i.config.authDomain}/${DI}`,s={apiKey:e.apiKey,appName:i.name,v:So},o=MI.get(i.config.apiHost);o&&(s.eid=o);const u=i._getFrameworks();return u.length&&(s.fw=u.join(",")),`${t}?${Ka(s).slice(1)}`}async function jI(i){const e=await NI(i),t=rr().gapi;return _e(t,i,"internal-error"),e.open({where:document.body,url:LI(i),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:OI,dontclear:!0},s=>new Promise(async(o,u)=>{await s.restyle({setHideOnLeave:!1});const h=nr(i,"network-request-failed"),m=rr().setTimeout(()=>{u(h)},bI.get());function y(){rr().clearTimeout(m),o(s)}s.ping(y).then(y,()=>{u(h)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},UI=500,zI=600,BI="_blank",$I="http://localhost";class dg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function HI(i,e,t,s=UI,o=zI){const u=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-s)/2,0).toString();let m="";const y={...FI,width:s.toString(),height:o.toString(),top:u,left:h},v=zt().toLowerCase();t&&(m=Uy(v)?BI:t),jy(v)&&(e=e||$I,y.scrollbars="yes");const T=Object.entries(y).reduce((R,[j,$])=>`${R}${j}=${$},`,"");if(hT(v)&&m!=="_self")return WI(e||"",m),new dg(null);const A=window.open(e||"",m,T);_e(A,i,"popup-blocked");try{A.focus()}catch{}return new dg(A)}function WI(i,e){const t=document.createElement("a");t.href=i,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qI="__/auth/handler",GI="emulator/auth/handler",KI=encodeURIComponent("fac");async function fg(i,e,t,s,o,u){_e(i.config.authDomain,i,"auth-domain-config-required"),_e(i.config.apiKey,i,"invalid-api-key");const h={apiKey:i.config.apiKey,appName:i.name,authType:t,redirectUrl:s,v:So,eventId:o};if(e instanceof Yy){e.setDefaultLanguage(i.languageCode),h.providerId=e.providerId||"",Nw(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[T,A]of Object.entries({}))h[T]=A}if(e instanceof Xa){const T=e.getScopes().filter(A=>A!=="");T.length>0&&(h.scopes=T.join(","))}i.tenantId&&(h.tid=i.tenantId);const m=h;for(const T of Object.keys(m))m[T]===void 0&&delete m[T];const y=await i._getAppCheckToken(),v=y?`#${KI}=${encodeURIComponent(y)}`:"";return`${QI(i)}?${Ka(m).slice(1)}${v}`}function QI({config:i}){return i.emulator?Bd(i,GI):`https://${i.authDomain}/${qI}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const od="webStorageSupport";class YI{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=r_,this._completeRedirectFn=wI,this._overrideRedirectResult=yI}async _openPopup(e,t,s,o){Dr(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const u=await fg(e,t,s,yd(),o);return HI(e,u,Gd())}async _openRedirect(e,t,s,o){await this._originValidation(e);const u=await fg(e,t,s,yd(),o);return ZT(u),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:u}=this.eventManagers[t];return o?Promise.resolve(o):(Dr(u,"If manager is not set, promise should be"),u)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await jI(e),s=new TI(e);return t.register("authEvent",o=>(_e(o?.authEvent,e,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(od,{type:od},o=>{const u=o?.[0]?.[od];u!==void 0&&t(!!u),$n(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=AI(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Wy()||Fy()||Hd()}}const XI=YI;var pg="@firebase/auth",mg="1.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JI{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e(s?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){_e(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZI(i){switch(i){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function e1(i){mo(new ss("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),u=e.getProvider("app-check-internal"),{apiKey:h,authDomain:m}=s.options;_e(h&&!h.includes(":"),"invalid-api-key",{appName:s.name});const y={apiKey:h,authDomain:m,clientPlatform:i,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:qy(i)},v=new yT(s,o,u,y);return AT(v,t),v},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),mo(new ss("auth-internal",e=>{const t=cs(e.getProvider("auth").getImmediate());return(s=>new JI(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),gi(pg,mg,ZI(i)),gi(pg,mg,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t1=300,n1=Ey("authIdTokenMaxAge")||t1;let gg=null;const r1=i=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>n1)return;const o=t?.token;gg!==o&&(gg=o,await fetch(i,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function i1(i=Ay()){const e=Ud(i,"auth");if(e.isInitialized())return e.getImmediate();const t=xT(i,{popupRedirectResolver:XI,persistence:[lI,YT,r_]}),s=Ey("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(s,location.origin);if(location.origin===u.origin){const h=r1(u.toString());WT(t,h,()=>h(t.currentUser)),HT(t,m=>h(m))}}const o=vy("auth");return o&&CT(t,`http://${o}`),t}function s1(){return document.getElementsByTagName("head")?.[0]??document}_T({loadJS(i){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",i),s.onload=e,s.onerror=o=>{const u=nr("internal-error");u.customData=o,t(u)},s.type="text/javascript",s.charset="UTF-8",s1().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});e1("Browser");var yg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var yi,c_;(function(){var i;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(b,S){function x(){}x.prototype=S.prototype,b.D=S.prototype,b.prototype=new x,b.prototype.constructor=b,b.C=function(N,D,O){for(var k=Array(arguments.length-2),Ye=2;Ye<arguments.length;Ye++)k[Ye-2]=arguments[Ye];return S.prototype[D].apply(N,k)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,t),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(b,S,x){x||(x=0);var N=Array(16);if(typeof S=="string")for(var D=0;16>D;++D)N[D]=S.charCodeAt(x++)|S.charCodeAt(x++)<<8|S.charCodeAt(x++)<<16|S.charCodeAt(x++)<<24;else for(D=0;16>D;++D)N[D]=S[x++]|S[x++]<<8|S[x++]<<16|S[x++]<<24;S=b.g[0],x=b.g[1],D=b.g[2];var O=b.g[3],k=S+(O^x&(D^O))+N[0]+3614090360&4294967295;S=x+(k<<7&4294967295|k>>>25),k=O+(D^S&(x^D))+N[1]+3905402710&4294967295,O=S+(k<<12&4294967295|k>>>20),k=D+(x^O&(S^x))+N[2]+606105819&4294967295,D=O+(k<<17&4294967295|k>>>15),k=x+(S^D&(O^S))+N[3]+3250441966&4294967295,x=D+(k<<22&4294967295|k>>>10),k=S+(O^x&(D^O))+N[4]+4118548399&4294967295,S=x+(k<<7&4294967295|k>>>25),k=O+(D^S&(x^D))+N[5]+1200080426&4294967295,O=S+(k<<12&4294967295|k>>>20),k=D+(x^O&(S^x))+N[6]+2821735955&4294967295,D=O+(k<<17&4294967295|k>>>15),k=x+(S^D&(O^S))+N[7]+4249261313&4294967295,x=D+(k<<22&4294967295|k>>>10),k=S+(O^x&(D^O))+N[8]+1770035416&4294967295,S=x+(k<<7&4294967295|k>>>25),k=O+(D^S&(x^D))+N[9]+2336552879&4294967295,O=S+(k<<12&4294967295|k>>>20),k=D+(x^O&(S^x))+N[10]+4294925233&4294967295,D=O+(k<<17&4294967295|k>>>15),k=x+(S^D&(O^S))+N[11]+2304563134&4294967295,x=D+(k<<22&4294967295|k>>>10),k=S+(O^x&(D^O))+N[12]+1804603682&4294967295,S=x+(k<<7&4294967295|k>>>25),k=O+(D^S&(x^D))+N[13]+4254626195&4294967295,O=S+(k<<12&4294967295|k>>>20),k=D+(x^O&(S^x))+N[14]+2792965006&4294967295,D=O+(k<<17&4294967295|k>>>15),k=x+(S^D&(O^S))+N[15]+1236535329&4294967295,x=D+(k<<22&4294967295|k>>>10),k=S+(D^O&(x^D))+N[1]+4129170786&4294967295,S=x+(k<<5&4294967295|k>>>27),k=O+(x^D&(S^x))+N[6]+3225465664&4294967295,O=S+(k<<9&4294967295|k>>>23),k=D+(S^x&(O^S))+N[11]+643717713&4294967295,D=O+(k<<14&4294967295|k>>>18),k=x+(O^S&(D^O))+N[0]+3921069994&4294967295,x=D+(k<<20&4294967295|k>>>12),k=S+(D^O&(x^D))+N[5]+3593408605&4294967295,S=x+(k<<5&4294967295|k>>>27),k=O+(x^D&(S^x))+N[10]+38016083&4294967295,O=S+(k<<9&4294967295|k>>>23),k=D+(S^x&(O^S))+N[15]+3634488961&4294967295,D=O+(k<<14&4294967295|k>>>18),k=x+(O^S&(D^O))+N[4]+3889429448&4294967295,x=D+(k<<20&4294967295|k>>>12),k=S+(D^O&(x^D))+N[9]+568446438&4294967295,S=x+(k<<5&4294967295|k>>>27),k=O+(x^D&(S^x))+N[14]+3275163606&4294967295,O=S+(k<<9&4294967295|k>>>23),k=D+(S^x&(O^S))+N[3]+4107603335&4294967295,D=O+(k<<14&4294967295|k>>>18),k=x+(O^S&(D^O))+N[8]+1163531501&4294967295,x=D+(k<<20&4294967295|k>>>12),k=S+(D^O&(x^D))+N[13]+2850285829&4294967295,S=x+(k<<5&4294967295|k>>>27),k=O+(x^D&(S^x))+N[2]+4243563512&4294967295,O=S+(k<<9&4294967295|k>>>23),k=D+(S^x&(O^S))+N[7]+1735328473&4294967295,D=O+(k<<14&4294967295|k>>>18),k=x+(O^S&(D^O))+N[12]+2368359562&4294967295,x=D+(k<<20&4294967295|k>>>12),k=S+(x^D^O)+N[5]+4294588738&4294967295,S=x+(k<<4&4294967295|k>>>28),k=O+(S^x^D)+N[8]+2272392833&4294967295,O=S+(k<<11&4294967295|k>>>21),k=D+(O^S^x)+N[11]+1839030562&4294967295,D=O+(k<<16&4294967295|k>>>16),k=x+(D^O^S)+N[14]+4259657740&4294967295,x=D+(k<<23&4294967295|k>>>9),k=S+(x^D^O)+N[1]+2763975236&4294967295,S=x+(k<<4&4294967295|k>>>28),k=O+(S^x^D)+N[4]+1272893353&4294967295,O=S+(k<<11&4294967295|k>>>21),k=D+(O^S^x)+N[7]+4139469664&4294967295,D=O+(k<<16&4294967295|k>>>16),k=x+(D^O^S)+N[10]+3200236656&4294967295,x=D+(k<<23&4294967295|k>>>9),k=S+(x^D^O)+N[13]+681279174&4294967295,S=x+(k<<4&4294967295|k>>>28),k=O+(S^x^D)+N[0]+3936430074&4294967295,O=S+(k<<11&4294967295|k>>>21),k=D+(O^S^x)+N[3]+3572445317&4294967295,D=O+(k<<16&4294967295|k>>>16),k=x+(D^O^S)+N[6]+76029189&4294967295,x=D+(k<<23&4294967295|k>>>9),k=S+(x^D^O)+N[9]+3654602809&4294967295,S=x+(k<<4&4294967295|k>>>28),k=O+(S^x^D)+N[12]+3873151461&4294967295,O=S+(k<<11&4294967295|k>>>21),k=D+(O^S^x)+N[15]+530742520&4294967295,D=O+(k<<16&4294967295|k>>>16),k=x+(D^O^S)+N[2]+3299628645&4294967295,x=D+(k<<23&4294967295|k>>>9),k=S+(D^(x|~O))+N[0]+4096336452&4294967295,S=x+(k<<6&4294967295|k>>>26),k=O+(x^(S|~D))+N[7]+1126891415&4294967295,O=S+(k<<10&4294967295|k>>>22),k=D+(S^(O|~x))+N[14]+2878612391&4294967295,D=O+(k<<15&4294967295|k>>>17),k=x+(O^(D|~S))+N[5]+4237533241&4294967295,x=D+(k<<21&4294967295|k>>>11),k=S+(D^(x|~O))+N[12]+1700485571&4294967295,S=x+(k<<6&4294967295|k>>>26),k=O+(x^(S|~D))+N[3]+2399980690&4294967295,O=S+(k<<10&4294967295|k>>>22),k=D+(S^(O|~x))+N[10]+4293915773&4294967295,D=O+(k<<15&4294967295|k>>>17),k=x+(O^(D|~S))+N[1]+2240044497&4294967295,x=D+(k<<21&4294967295|k>>>11),k=S+(D^(x|~O))+N[8]+1873313359&4294967295,S=x+(k<<6&4294967295|k>>>26),k=O+(x^(S|~D))+N[15]+4264355552&4294967295,O=S+(k<<10&4294967295|k>>>22),k=D+(S^(O|~x))+N[6]+2734768916&4294967295,D=O+(k<<15&4294967295|k>>>17),k=x+(O^(D|~S))+N[13]+1309151649&4294967295,x=D+(k<<21&4294967295|k>>>11),k=S+(D^(x|~O))+N[4]+4149444226&4294967295,S=x+(k<<6&4294967295|k>>>26),k=O+(x^(S|~D))+N[11]+3174756917&4294967295,O=S+(k<<10&4294967295|k>>>22),k=D+(S^(O|~x))+N[2]+718787259&4294967295,D=O+(k<<15&4294967295|k>>>17),k=x+(O^(D|~S))+N[9]+3951481745&4294967295,b.g[0]=b.g[0]+S&4294967295,b.g[1]=b.g[1]+(D+(k<<21&4294967295|k>>>11))&4294967295,b.g[2]=b.g[2]+D&4294967295,b.g[3]=b.g[3]+O&4294967295}s.prototype.u=function(b,S){S===void 0&&(S=b.length);for(var x=S-this.blockSize,N=this.B,D=this.h,O=0;O<S;){if(D==0)for(;O<=x;)o(this,b,O),O+=this.blockSize;if(typeof b=="string"){for(;O<S;)if(N[D++]=b.charCodeAt(O++),D==this.blockSize){o(this,N),D=0;break}}else for(;O<S;)if(N[D++]=b[O++],D==this.blockSize){o(this,N),D=0;break}}this.h=D,this.o+=S},s.prototype.v=function(){var b=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);b[0]=128;for(var S=1;S<b.length-8;++S)b[S]=0;var x=8*this.o;for(S=b.length-8;S<b.length;++S)b[S]=x&255,x/=256;for(this.u(b),b=Array(16),S=x=0;4>S;++S)for(var N=0;32>N;N+=8)b[x++]=this.g[S]>>>N&255;return b};function u(b,S){var x=m;return Object.prototype.hasOwnProperty.call(x,b)?x[b]:x[b]=S(b)}function h(b,S){this.h=S;for(var x=[],N=!0,D=b.length-1;0<=D;D--){var O=b[D]|0;N&&O==S||(x[D]=O,N=!1)}this.g=x}var m={};function y(b){return-128<=b&&128>b?u(b,function(S){return new h([S|0],0>S?-1:0)}):new h([b|0],0>b?-1:0)}function v(b){if(isNaN(b)||!isFinite(b))return A;if(0>b)return B(v(-b));for(var S=[],x=1,N=0;b>=x;N++)S[N]=b/x|0,x*=4294967296;return new h(S,0)}function T(b,S){if(b.length==0)throw Error("number format error: empty string");if(S=S||10,2>S||36<S)throw Error("radix out of range: "+S);if(b.charAt(0)=="-")return B(T(b.substring(1),S));if(0<=b.indexOf("-"))throw Error('number format error: interior "-" character');for(var x=v(Math.pow(S,8)),N=A,D=0;D<b.length;D+=8){var O=Math.min(8,b.length-D),k=parseInt(b.substring(D,D+O),S);8>O?(O=v(Math.pow(S,O)),N=N.j(O).add(v(k))):(N=N.j(x),N=N.add(v(k)))}return N}var A=y(0),R=y(1),j=y(16777216);i=h.prototype,i.m=function(){if(Y(this))return-B(this).m();for(var b=0,S=1,x=0;x<this.g.length;x++){var N=this.i(x);b+=(0<=N?N:4294967296+N)*S,S*=4294967296}return b},i.toString=function(b){if(b=b||10,2>b||36<b)throw Error("radix out of range: "+b);if($(this))return"0";if(Y(this))return"-"+B(this).toString(b);for(var S=v(Math.pow(b,6)),x=this,N="";;){var D=Ae(x,S).g;x=fe(x,D.j(S));var O=((0<x.g.length?x.g[0]:x.h)>>>0).toString(b);if(x=D,$(x))return O+N;for(;6>O.length;)O="0"+O;N=O+N}},i.i=function(b){return 0>b?0:b<this.g.length?this.g[b]:this.h};function $(b){if(b.h!=0)return!1;for(var S=0;S<b.g.length;S++)if(b.g[S]!=0)return!1;return!0}function Y(b){return b.h==-1}i.l=function(b){return b=fe(this,b),Y(b)?-1:$(b)?0:1};function B(b){for(var S=b.g.length,x=[],N=0;N<S;N++)x[N]=~b.g[N];return new h(x,~b.h).add(R)}i.abs=function(){return Y(this)?B(this):this},i.add=function(b){for(var S=Math.max(this.g.length,b.g.length),x=[],N=0,D=0;D<=S;D++){var O=N+(this.i(D)&65535)+(b.i(D)&65535),k=(O>>>16)+(this.i(D)>>>16)+(b.i(D)>>>16);N=k>>>16,O&=65535,k&=65535,x[D]=k<<16|O}return new h(x,x[x.length-1]&-2147483648?-1:0)};function fe(b,S){return b.add(B(S))}i.j=function(b){if($(this)||$(b))return A;if(Y(this))return Y(b)?B(this).j(B(b)):B(B(this).j(b));if(Y(b))return B(this.j(B(b)));if(0>this.l(j)&&0>b.l(j))return v(this.m()*b.m());for(var S=this.g.length+b.g.length,x=[],N=0;N<2*S;N++)x[N]=0;for(N=0;N<this.g.length;N++)for(var D=0;D<b.g.length;D++){var O=this.i(N)>>>16,k=this.i(N)&65535,Ye=b.i(D)>>>16,vt=b.i(D)&65535;x[2*N+2*D]+=k*vt,ue(x,2*N+2*D),x[2*N+2*D+1]+=O*vt,ue(x,2*N+2*D+1),x[2*N+2*D+1]+=k*Ye,ue(x,2*N+2*D+1),x[2*N+2*D+2]+=O*Ye,ue(x,2*N+2*D+2)}for(N=0;N<S;N++)x[N]=x[2*N+1]<<16|x[2*N];for(N=S;N<2*S;N++)x[N]=0;return new h(x,0)};function ue(b,S){for(;(b[S]&65535)!=b[S];)b[S+1]+=b[S]>>>16,b[S]&=65535,S++}function ye(b,S){this.g=b,this.h=S}function Ae(b,S){if($(S))throw Error("division by zero");if($(b))return new ye(A,A);if(Y(b))return S=Ae(B(b),S),new ye(B(S.g),B(S.h));if(Y(S))return S=Ae(b,B(S)),new ye(B(S.g),S.h);if(30<b.g.length){if(Y(b)||Y(S))throw Error("slowDivide_ only works with positive integers.");for(var x=R,N=S;0>=N.l(b);)x=We(x),N=We(N);var D=Ve(x,1),O=Ve(N,1);for(N=Ve(N,2),x=Ve(x,2);!$(N);){var k=O.add(N);0>=k.l(b)&&(D=D.add(x),O=k),N=Ve(N,1),x=Ve(x,1)}return S=fe(b,D.j(S)),new ye(D,S)}for(D=A;0<=b.l(S);){for(x=Math.max(1,Math.floor(b.m()/S.m())),N=Math.ceil(Math.log(x)/Math.LN2),N=48>=N?1:Math.pow(2,N-48),O=v(x),k=O.j(S);Y(k)||0<k.l(b);)x-=N,O=v(x),k=O.j(S);$(O)&&(O=R),D=D.add(O),b=fe(b,k)}return new ye(D,b)}i.A=function(b){return Ae(this,b).h},i.and=function(b){for(var S=Math.max(this.g.length,b.g.length),x=[],N=0;N<S;N++)x[N]=this.i(N)&b.i(N);return new h(x,this.h&b.h)},i.or=function(b){for(var S=Math.max(this.g.length,b.g.length),x=[],N=0;N<S;N++)x[N]=this.i(N)|b.i(N);return new h(x,this.h|b.h)},i.xor=function(b){for(var S=Math.max(this.g.length,b.g.length),x=[],N=0;N<S;N++)x[N]=this.i(N)^b.i(N);return new h(x,this.h^b.h)};function We(b){for(var S=b.g.length+1,x=[],N=0;N<S;N++)x[N]=b.i(N)<<1|b.i(N-1)>>>31;return new h(x,b.h)}function Ve(b,S){var x=S>>5;S%=32;for(var N=b.g.length-x,D=[],O=0;O<N;O++)D[O]=0<S?b.i(O+x)>>>S|b.i(O+x+1)<<32-S:b.i(O+x);return new h(D,b.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,c_=s,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.A,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=v,h.fromString=T,yi=h}).apply(typeof yg<"u"?yg:typeof self<"u"?self:typeof window<"u"?window:{});var Eu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var h_,Aa,d_,bu,Ed,f_,p_,m_;(function(){var i,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,f,g){return l==Array.prototype||l==Object.prototype||(l[f]=g.value),l};function t(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof Eu=="object"&&Eu];for(var f=0;f<l.length;++f){var g=l[f];if(g&&g.Math==Math)return g}throw Error("Cannot find global object")}var s=t(this);function o(l,f){if(f)e:{var g=s;l=l.split(".");for(var w=0;w<l.length-1;w++){var M=l[w];if(!(M in g))break e;g=g[M]}l=l[l.length-1],w=g[l],f=f(w),f!=w&&f!=null&&e(g,l,{configurable:!0,writable:!0,value:f})}}function u(l,f){l instanceof String&&(l+="");var g=0,w=!1,M={next:function(){if(!w&&g<l.length){var z=g++;return{value:f(z,l[z]),done:!1}}return w=!0,{done:!0,value:void 0}}};return M[Symbol.iterator]=function(){return M},M}o("Array.prototype.values",function(l){return l||function(){return u(this,function(f,g){return g})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var h=h||{},m=this||self;function y(l){var f=typeof l;return f=f!="object"?f:l?Array.isArray(l)?"array":f:"null",f=="array"||f=="object"&&typeof l.length=="number"}function v(l){var f=typeof l;return f=="object"&&l!=null||f=="function"}function T(l,f,g){return l.call.apply(l.bind,arguments)}function A(l,f,g){if(!l)throw Error();if(2<arguments.length){var w=Array.prototype.slice.call(arguments,2);return function(){var M=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(M,w),l.apply(f,M)}}return function(){return l.apply(f,arguments)}}function R(l,f,g){return R=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?T:A,R.apply(null,arguments)}function j(l,f){var g=Array.prototype.slice.call(arguments,1);return function(){var w=g.slice();return w.push.apply(w,arguments),l.apply(this,w)}}function $(l,f){function g(){}g.prototype=f.prototype,l.aa=f.prototype,l.prototype=new g,l.prototype.constructor=l,l.Qb=function(w,M,z){for(var J=Array(arguments.length-2),ze=2;ze<arguments.length;ze++)J[ze-2]=arguments[ze];return f.prototype[M].apply(w,J)}}function Y(l){const f=l.length;if(0<f){const g=Array(f);for(let w=0;w<f;w++)g[w]=l[w];return g}return[]}function B(l,f){for(let g=1;g<arguments.length;g++){const w=arguments[g];if(y(w)){const M=l.length||0,z=w.length||0;l.length=M+z;for(let J=0;J<z;J++)l[M+J]=w[J]}else l.push(w)}}class fe{constructor(f,g){this.i=f,this.j=g,this.h=0,this.g=null}get(){let f;return 0<this.h?(this.h--,f=this.g,this.g=f.next,f.next=null):f=this.i(),f}}function ue(l){return/^[\s\xa0]*$/.test(l)}function ye(){var l=m.navigator;return l&&(l=l.userAgent)?l:""}function Ae(l){return Ae[" "](l),l}Ae[" "]=function(){};var We=ye().indexOf("Gecko")!=-1&&!(ye().toLowerCase().indexOf("webkit")!=-1&&ye().indexOf("Edge")==-1)&&!(ye().indexOf("Trident")!=-1||ye().indexOf("MSIE")!=-1)&&ye().indexOf("Edge")==-1;function Ve(l,f,g){for(const w in l)f.call(g,l[w],w,l)}function b(l,f){for(const g in l)f.call(void 0,l[g],g,l)}function S(l){const f={};for(const g in l)f[g]=l[g];return f}const x="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function N(l,f){let g,w;for(let M=1;M<arguments.length;M++){w=arguments[M];for(g in w)l[g]=w[g];for(let z=0;z<x.length;z++)g=x[z],Object.prototype.hasOwnProperty.call(w,g)&&(l[g]=w[g])}}function D(l){var f=1;l=l.split(":");const g=[];for(;0<f&&l.length;)g.push(l.shift()),f--;return l.length&&g.push(l.join(":")),g}function O(l){m.setTimeout(()=>{throw l},0)}function k(){var l=de;let f=null;return l.g&&(f=l.g,l.g=l.g.next,l.g||(l.h=null),f.next=null),f}class Ye{constructor(){this.h=this.g=null}add(f,g){const w=vt.get();w.set(f,g),this.h?this.h.next=w:this.g=w,this.h=w}}var vt=new fe(()=>new wt,l=>l.reset());class wt{constructor(){this.next=this.g=this.h=null}set(f,g){this.h=f,this.g=g,this.next=null}reset(){this.next=this.g=this.h=null}}let Se,Z=!1,de=new Ye,te=()=>{const l=m.Promise.resolve(void 0);Se=()=>{l.then(V)}};var V=()=>{for(var l;l=k();){try{l.h.call(l.g)}catch(g){O(g)}var f=vt;f.j(l),100>f.h&&(f.h++,l.next=f.g,f.g=l)}Z=!1};function H(){this.s=this.s,this.C=this.C}H.prototype.s=!1,H.prototype.ma=function(){this.s||(this.s=!0,this.N())},H.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ce(l,f){this.type=l,this.g=this.target=f,this.defaultPrevented=!1}ce.prototype.h=function(){this.defaultPrevented=!0};var ke=(function(){if(!m.addEventListener||!Object.defineProperty)return!1;var l=!1,f=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const g=()=>{};m.addEventListener("test",g,f),m.removeEventListener("test",g,f)}catch{}return l})();function xe(l,f){if(ce.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var g=this.type=l.type,w=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=f,f=l.relatedTarget){if(We){e:{try{Ae(f.nodeName);var M=!0;break e}catch{}M=!1}M||(f=null)}}else g=="mouseover"?f=l.fromElement:g=="mouseout"&&(f=l.toElement);this.relatedTarget=f,w?(this.clientX=w.clientX!==void 0?w.clientX:w.pageX,this.clientY=w.clientY!==void 0?w.clientY:w.pageY,this.screenX=w.screenX||0,this.screenY=w.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:ee[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&xe.aa.h.call(this)}}$(xe,ce);var ee={2:"touch",3:"pen",4:"mouse"};xe.prototype.h=function(){xe.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var he="closure_listenable_"+(1e6*Math.random()|0),we=0;function Fe(l,f,g,w,M){this.listener=l,this.proxy=null,this.src=f,this.type=g,this.capture=!!w,this.ha=M,this.key=++we,this.da=this.fa=!1}function Ze(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function nn(l){this.src=l,this.g={},this.h=0}nn.prototype.add=function(l,f,g,w,M){var z=l.toString();l=this.g[z],l||(l=this.g[z]=[],this.h++);var J=hr(l,f,w,M);return-1<J?(f=l[J],g||(f.fa=!1)):(f=new Fe(f,this.src,z,!!w,M),f.fa=g,l.push(f)),f};function Sn(l,f){var g=f.type;if(g in l.g){var w=l.g[g],M=Array.prototype.indexOf.call(w,f,void 0),z;(z=0<=M)&&Array.prototype.splice.call(w,M,1),z&&(Ze(f),l.g[g].length==0&&(delete l.g[g],l.h--))}}function hr(l,f,g,w){for(var M=0;M<l.length;++M){var z=l[M];if(!z.da&&z.listener==f&&z.capture==!!g&&z.ha==w)return M}return-1}var kn="closure_lm_"+(1e6*Math.random()|0),Lr={};function Po(l,f,g,w,M){if(Array.isArray(f)){for(var z=0;z<f.length;z++)Po(l,f[z],g,w,M);return null}return g=Do(g),l&&l[he]?l.K(f,g,v(w)?!!w.capture:!1,M):No(l,f,g,!1,w,M)}function No(l,f,g,w,M,z){if(!f)throw Error("Invalid event type");var J=v(M)?!!M.capture:!!M,ze=gs(l);if(ze||(l[kn]=ze=new nn(l)),g=ze.add(f,g,w,J,z),g.proxy)return g;if(w=il(),g.proxy=w,w.src=l,w.listener=g,l.addEventListener)ke||(M=J),M===void 0&&(M=!1),l.addEventListener(f.toString(),w,M);else if(l.attachEvent)l.attachEvent(fr(f.toString()),w);else if(l.addListener&&l.removeListener)l.addListener(w);else throw Error("addEventListener and attachEvent are unavailable.");return g}function il(){function l(g){return f.call(l.src,l.listener,g)}const f=bo;return l}function ms(l,f,g,w,M){if(Array.isArray(f))for(var z=0;z<f.length;z++)ms(l,f[z],g,w,M);else w=v(w)?!!w.capture:!!w,g=Do(g),l&&l[he]?(l=l.i,f=String(f).toString(),f in l.g&&(z=l.g[f],g=hr(z,g,w,M),-1<g&&(Ze(z[g]),Array.prototype.splice.call(z,g,1),z.length==0&&(delete l.g[f],l.h--)))):l&&(l=gs(l))&&(f=l.g[f.toString()],l=-1,f&&(l=hr(f,g,w,M)),(g=-1<l?f[l]:null)&&dr(g))}function dr(l){if(typeof l!="number"&&l&&!l.da){var f=l.src;if(f&&f[he])Sn(f.i,l);else{var g=l.type,w=l.proxy;f.removeEventListener?f.removeEventListener(g,w,l.capture):f.detachEvent?f.detachEvent(fr(g),w):f.addListener&&f.removeListener&&f.removeListener(w),(g=gs(f))?(Sn(g,l),g.h==0&&(g.src=null,f[kn]=null)):Ze(l)}}}function fr(l){return l in Lr?Lr[l]:Lr[l]="on"+l}function bo(l,f){if(l.da)l=!0;else{f=new xe(f,this);var g=l.listener,w=l.ha||l.src;l.fa&&dr(l),l=g.call(w,f)}return l}function gs(l){return l=l[kn],l instanceof nn?l:null}var ys="__closure_events_fn_"+(1e9*Math.random()>>>0);function Do(l){return typeof l=="function"?l:(l[ys]||(l[ys]=function(f){return l.handleEvent(f)}),l[ys])}function ht(){H.call(this),this.i=new nn(this),this.M=this,this.F=null}$(ht,H),ht.prototype[he]=!0,ht.prototype.removeEventListener=function(l,f,g,w){ms(this,l,f,g,w)};function dt(l,f){var g,w=l.F;if(w)for(g=[];w;w=w.F)g.push(w);if(l=l.M,w=f.type||f,typeof f=="string")f=new ce(f,l);else if(f instanceof ce)f.target=f.target||l;else{var M=f;f=new ce(w,l),N(f,M)}if(M=!0,g)for(var z=g.length-1;0<=z;z--){var J=f.g=g[z];M=pr(J,w,!0,f)&&M}if(J=f.g=l,M=pr(J,w,!0,f)&&M,M=pr(J,w,!1,f)&&M,g)for(z=0;z<g.length;z++)J=f.g=g[z],M=pr(J,w,!1,f)&&M}ht.prototype.N=function(){if(ht.aa.N.call(this),this.i){var l=this.i,f;for(f in l.g){for(var g=l.g[f],w=0;w<g.length;w++)Ze(g[w]);delete l.g[f],l.h--}}this.F=null},ht.prototype.K=function(l,f,g,w){return this.i.add(String(l),f,!1,g,w)},ht.prototype.L=function(l,f,g,w){return this.i.add(String(l),f,!0,g,w)};function pr(l,f,g,w){if(f=l.i.g[String(f)],!f)return!0;f=f.concat();for(var M=!0,z=0;z<f.length;++z){var J=f[z];if(J&&!J.da&&J.capture==g){var ze=J.listener,ft=J.ha||J.src;J.fa&&Sn(l.i,J),M=ze.call(ft,w)!==!1&&M}}return M&&!w.defaultPrevented}function Vo(l,f,g){if(typeof l=="function")g&&(l=R(l,g));else if(l&&typeof l.handleEvent=="function")l=R(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(f)?-1:m.setTimeout(l,f||0)}function jr(l){l.g=Vo(()=>{l.g=null,l.i&&(l.i=!1,jr(l))},l.l);const f=l.h;l.h=null,l.m.apply(null,f)}class Ci extends H{constructor(f,g){super(),this.m=f,this.l=g,this.h=null,this.i=!1,this.g=null}j(f){this.h=arguments,this.g?this.i=!0:jr(this)}N(){super.N(),this.g&&(m.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ri(l){H.call(this),this.h=l,this.g={}}$(Ri,H);var Oo=[];function Mo(l){Ve(l.g,function(f,g){this.g.hasOwnProperty(g)&&dr(f)},l),l.g={}}Ri.prototype.N=function(){Ri.aa.N.call(this),Mo(this)},Ri.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Lo=m.JSON.stringify,jo=m.JSON.parse,Fo=class{stringify(l){return m.JSON.stringify(l,void 0)}parse(l){return m.JSON.parse(l,void 0)}};function Pi(){}Pi.prototype.h=null;function _s(l){return l.h||(l.h=l.i())}function vs(){}var hn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Hn(){ce.call(this,"d")}$(Hn,ce);function ws(){ce.call(this,"c")}$(ws,ce);var Wn={},Uo=null;function Ni(){return Uo=Uo||new ht}Wn.La="serverreachability";function zo(l){ce.call(this,Wn.La,l)}$(zo,ce);function mr(l){const f=Ni();dt(f,new zo(f))}Wn.STAT_EVENT="statevent";function Bo(l,f){ce.call(this,Wn.STAT_EVENT,l),this.stat=f}$(Bo,ce);function it(l){const f=Ni();dt(f,new Bo(f,l))}Wn.Ma="timingevent";function Es(l,f){ce.call(this,Wn.Ma,l),this.size=f}$(Es,ce);function xn(l,f){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return m.setTimeout(function(){l()},f)}function bi(){this.g=!0}bi.prototype.xa=function(){this.g=!1};function Di(l,f,g,w,M,z){l.info(function(){if(l.g)if(z)for(var J="",ze=z.split("&"),ft=0;ft<ze.length;ft++){var Oe=ze[ft].split("=");if(1<Oe.length){var Et=Oe[0];Oe=Oe[1];var at=Et.split("_");J=2<=at.length&&at[1]=="type"?J+(Et+"="+Oe+"&"):J+(Et+"=redacted&")}}else J=null;else J=z;return"XMLHTTP REQ ("+w+") [attempt "+M+"]: "+f+`
`+g+`
`+J})}function Ts(l,f,g,w,M,z,J){l.info(function(){return"XMLHTTP RESP ("+w+") [ attempt "+M+"]: "+f+`
`+g+`
`+z+" "+J})}function An(l,f,g,w){l.info(function(){return"XMLHTTP TEXT ("+f+"): "+Ic(l,g)+(w?" "+w:"")})}function $o(l,f){l.info(function(){return"TIMEOUT: "+f})}bi.prototype.info=function(){};function Ic(l,f){if(!l.g)return f;if(!f)return null;try{var g=JSON.parse(f);if(g){for(l=0;l<g.length;l++)if(Array.isArray(g[l])){var w=g[l];if(!(2>w.length)){var M=w[1];if(Array.isArray(M)&&!(1>M.length)){var z=M[0];if(z!="noop"&&z!="stop"&&z!="close")for(var J=1;J<M.length;J++)M[J]=""}}}}return Lo(g)}catch{return f}}var Is={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},sl={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Cn;function Vi(){}$(Vi,Pi),Vi.prototype.g=function(){return new XMLHttpRequest},Vi.prototype.i=function(){return{}},Cn=new Vi;function Rn(l,f,g,w){this.j=l,this.i=f,this.l=g,this.R=w||1,this.U=new Ri(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new ol}function ol(){this.i=null,this.g="",this.h=!1}var Ho={},Ss={};function ks(l,f,g){l.L=1,l.v=$r(sn(f)),l.m=g,l.P=!0,Wo(l,null)}function Wo(l,f){l.F=Date.now(),$e(l),l.A=sn(l.v);var g=l.A,w=l.R;Array.isArray(w)||(w=[String(w)]),Wr(g.i,"t",w),l.C=0,g=l.j.J,l.h=new ol,l.g=Sl(l.j,g?f:null,!l.m),0<l.O&&(l.M=new Ci(R(l.Y,l,l.g),l.O)),f=l.U,g=l.g,w=l.ca;var M="readystatechange";Array.isArray(M)||(M&&(Oo[0]=M.toString()),M=Oo);for(var z=0;z<M.length;z++){var J=Po(g,M[z],w||f.handleEvent,!1,f.h||f);if(!J)break;f.g[J.key]=J}f=l.H?S(l.H):{},l.m?(l.u||(l.u="POST"),f["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,f)):(l.u="GET",l.g.ea(l.A,l.u,null,f)),mr(),Di(l.i,l.u,l.A,l.l,l.R,l.m)}Rn.prototype.ca=function(l){l=l.target;const f=this.M;f&&Gt(l)==3?f.j():this.Y(l)},Rn.prototype.Y=function(l){try{if(l==this.g)e:{const at=Gt(this.g);var f=this.g.Ba();const pn=this.g.Z();if(!(3>at)&&(at!=3||this.g&&(this.h.h||this.g.oa()||Xo(this.g)))){this.J||at!=4||f==7||(f==8||0>=pn?mr(3):mr(2)),Oi(this);var g=this.g.Z();this.X=g;t:if(al(this)){var w=Xo(this.g);l="";var M=w.length,z=Gt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){dn(this),Fr(this);var J="";break t}this.h.i=new m.TextDecoder}for(f=0;f<M;f++)this.h.h=!0,l+=this.h.i.decode(w[f],{stream:!(z&&f==M-1)});w.length=0,this.h.g+=l,this.C=0,J=this.h.g}else J=this.g.oa();if(this.o=g==200,Ts(this.i,this.u,this.A,this.l,this.R,at,g),this.o){if(this.T&&!this.K){t:{if(this.g){var ze,ft=this.g;if((ze=ft.g?ft.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ue(ze)){var Oe=ze;break t}}Oe=null}if(g=Oe)An(this.i,this.l,g,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,qo(this,g);else{this.o=!1,this.s=3,it(12),dn(this),Fr(this);break e}}if(this.P){g=!0;let an;for(;!this.J&&this.C<J.length;)if(an=Sc(this,J),an==Ss){at==4&&(this.s=4,it(14),g=!1),An(this.i,this.l,null,"[Incomplete Response]");break}else if(an==Ho){this.s=4,it(15),An(this.i,this.l,J,"[Invalid Chunk]"),g=!1;break}else An(this.i,this.l,an,null),qo(this,an);if(al(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),at!=4||J.length!=0||this.h.h||(this.s=1,it(16),g=!1),this.o=this.o&&g,!g)An(this.i,this.l,J,"[Invalid Chunked Response]"),dn(this),Fr(this);else if(0<J.length&&!this.W){this.W=!0;var Et=this.j;Et.g==this&&Et.ba&&!Et.M&&(Et.j.info("Great, no buffering proxy detected. Bytes received: "+J.length),Zo(Et),Et.M=!0,it(11))}}else An(this.i,this.l,J,null),qo(this,J);at==4&&dn(this),this.o&&!this.J&&(at==4?Ms(this.j,this):(this.o=!1,$e(this)))}else Ns(this.g),g==400&&0<J.indexOf("Unknown SID")?(this.s=3,it(12)):(this.s=0,it(13)),dn(this),Fr(this)}}}catch{}finally{}};function al(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function Sc(l,f){var g=l.C,w=f.indexOf(`
`,g);return w==-1?Ss:(g=Number(f.substring(g,w)),isNaN(g)?Ho:(w+=1,w+g>f.length?Ss:(f=f.slice(w,w+g),l.C=w+g,f)))}Rn.prototype.cancel=function(){this.J=!0,dn(this)};function $e(l){l.S=Date.now()+l.I,ll(l,l.I)}function ll(l,f){if(l.B!=null)throw Error("WatchDog timer not null");l.B=xn(R(l.ba,l),f)}function Oi(l){l.B&&(m.clearTimeout(l.B),l.B=null)}Rn.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?($o(this.i,this.A),this.L!=2&&(mr(),it(17)),dn(this),this.s=2,Fr(this)):ll(this,this.S-l)};function Fr(l){l.j.G==0||l.J||Ms(l.j,l)}function dn(l){Oi(l);var f=l.M;f&&typeof f.ma=="function"&&f.ma(),l.M=null,Mo(l.U),l.g&&(f=l.g,l.g=null,f.abort(),f.ma())}function qo(l,f){try{var g=l.j;if(g.G!=0&&(g.g==l||Bt(g.h,l))){if(!l.K&&Bt(g.h,l)&&g.G==3){try{var w=g.Da.g.parse(f)}catch{w=null}if(Array.isArray(w)&&w.length==3){var M=w;if(M[0]==0){e:if(!g.u){if(g.g)if(g.g.F+3e3<l.F)Os(g),Vn(g);else break e;Vs(g),it(18)}}else g.za=M[1],0<g.za-g.T&&37500>M[2]&&g.F&&g.v==0&&!g.C&&(g.C=xn(R(g.Za,g),6e3));if(1>=cl(g.h)&&g.ca){try{g.ca()}catch{}g.ca=void 0}}else wr(g,11)}else if((l.K||g.g==l)&&Os(g),!ue(f))for(M=g.Da.g.parse(f),f=0;f<M.length;f++){let Oe=M[f];if(g.T=Oe[0],Oe=Oe[1],g.G==2)if(Oe[0]=="c"){g.K=Oe[1],g.ia=Oe[2];const Et=Oe[3];Et!=null&&(g.la=Et,g.j.info("VER="+g.la));const at=Oe[4];at!=null&&(g.Aa=at,g.j.info("SVER="+g.Aa));const pn=Oe[5];pn!=null&&typeof pn=="number"&&0<pn&&(w=1.5*pn,g.L=w,g.j.info("backChannelRequestTimeoutMs_="+w)),w=g;const an=l.g;if(an){const Bi=an.g?an.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Bi){var z=w.h;z.g||Bi.indexOf("spdy")==-1&&Bi.indexOf("quic")==-1&&Bi.indexOf("h2")==-1||(z.j=z.l,z.g=new Set,z.h&&(Go(z,z.h),z.h=null))}if(w.D){const js=an.g?an.g.getResponseHeader("X-HTTP-Session-Id"):null;js&&(w.ya=js,Be(w.I,w.D,js))}}g.G=3,g.l&&g.l.ua(),g.ba&&(g.R=Date.now()-l.F,g.j.info("Handshake RTT: "+g.R+"ms")),w=g;var J=l;if(w.qa=Il(w,w.J?w.ia:null,w.W),J.K){hl(w.h,J);var ze=J,ft=w.L;ft&&(ze.I=ft),ze.B&&(Oi(ze),$e(ze)),w.g=J}else zi(w);0<g.i.length&&Qn(g)}else Oe[0]!="stop"&&Oe[0]!="close"||wr(g,7);else g.G==3&&(Oe[0]=="stop"||Oe[0]=="close"?Oe[0]=="stop"?wr(g,7):At(g):Oe[0]!="noop"&&g.l&&g.l.ta(Oe),g.v=0)}}mr(4)}catch{}}var ul=class{constructor(l,f){this.g=l,this.map=f}};function Mi(l){this.l=l||10,m.PerformanceNavigationTiming?(l=m.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(m.chrome&&m.chrome.loadTimes&&m.chrome.loadTimes()&&m.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function rn(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function cl(l){return l.h?1:l.g?l.g.size:0}function Bt(l,f){return l.h?l.h==f:l.g?l.g.has(f):!1}function Go(l,f){l.g?l.g.add(f):l.h=f}function hl(l,f){l.h&&l.h==f?l.h=null:l.g&&l.g.has(f)&&l.g.delete(f)}Mi.prototype.cancel=function(){if(this.i=dl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function dl(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let f=l.i;for(const g of l.g.values())f=f.concat(g.D);return f}return Y(l.i)}function xs(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(y(l)){for(var f=[],g=l.length,w=0;w<g;w++)f.push(l[w]);return f}f=[],g=0;for(w in l)f[g++]=l[w];return f}function As(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(y(l)||typeof l=="string"){var f=[];l=l.length;for(var g=0;g<l;g++)f.push(g);return f}f=[],g=0;for(const w in l)f[g++]=w;return f}}}function Ur(l,f){if(l.forEach&&typeof l.forEach=="function")l.forEach(f,void 0);else if(y(l)||typeof l=="string")Array.prototype.forEach.call(l,f,void 0);else for(var g=As(l),w=xs(l),M=w.length,z=0;z<M;z++)f.call(void 0,w[z],g&&g[z],l)}var Li=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function kc(l,f){if(l){l=l.split("&");for(var g=0;g<l.length;g++){var w=l[g].indexOf("="),M=null;if(0<=w){var z=l[g].substring(0,w);M=l[g].substring(w+1)}else z=l[g];f(z,M?decodeURIComponent(M.replace(/\+/g," ")):"")}}}function gr(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof gr){this.h=l.h,ji(this,l.j),this.o=l.o,this.g=l.g,zr(this,l.s),this.l=l.l;var f=l.i,g=new qn;g.i=f.i,f.g&&(g.g=new Map(f.g),g.h=f.h),Br(this,g),this.m=l.m}else l&&(f=String(l).match(Li))?(this.h=!1,ji(this,f[1]||"",!0),this.o=De(f[2]||""),this.g=De(f[3]||"",!0),zr(this,f[4]),this.l=De(f[5]||"",!0),Br(this,f[6]||"",!0),this.m=De(f[7]||"")):(this.h=!1,this.i=new qn(null,this.h))}gr.prototype.toString=function(){var l=[],f=this.j;f&&l.push(Hr(f,Cs,!0),":");var g=this.g;return(g||f=="file")&&(l.push("//"),(f=this.o)&&l.push(Hr(f,Cs,!0),"@"),l.push(encodeURIComponent(String(g)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),g=this.s,g!=null&&l.push(":",String(g))),(g=this.l)&&(this.g&&g.charAt(0)!="/"&&l.push("/"),l.push(Hr(g,g.charAt(0)=="/"?ml:pl,!0))),(g=this.i.toString())&&l.push("?",g),(g=this.m)&&l.push("#",Hr(g,Ko)),l.join("")};function sn(l){return new gr(l)}function ji(l,f,g){l.j=g?De(f,!0):f,l.j&&(l.j=l.j.replace(/:$/,""))}function zr(l,f){if(f){if(f=Number(f),isNaN(f)||0>f)throw Error("Bad port number "+f);l.s=f}else l.s=null}function Br(l,f,g){f instanceof qn?(l.i=f,Gn(l.i,l.h)):(g||(f=Hr(f,gl)),l.i=new qn(f,l.h))}function Be(l,f,g){l.i.set(f,g)}function $r(l){return Be(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function De(l,f){return l?f?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function Hr(l,f,g){return typeof l=="string"?(l=encodeURI(l).replace(f,fl),g&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function fl(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var Cs=/[#\/\?@]/g,pl=/[#\?:]/g,ml=/[#\?]/g,gl=/[#\?@]/g,Ko=/#/g;function qn(l,f){this.h=this.g=null,this.i=l||null,this.j=!!f}function xt(l){l.g||(l.g=new Map,l.h=0,l.i&&kc(l.i,function(f,g){l.add(decodeURIComponent(f.replace(/\+/g," ")),g)}))}i=qn.prototype,i.add=function(l,f){xt(this),this.i=null,l=fn(this,l);var g=this.g.get(l);return g||this.g.set(l,g=[]),g.push(f),this.h+=1,this};function Pn(l,f){xt(l),f=fn(l,f),l.g.has(f)&&(l.i=null,l.h-=l.g.get(f).length,l.g.delete(f))}function Nn(l,f){return xt(l),f=fn(l,f),l.g.has(f)}i.forEach=function(l,f){xt(this),this.g.forEach(function(g,w){g.forEach(function(M){l.call(f,M,w,this)},this)},this)},i.na=function(){xt(this);const l=Array.from(this.g.values()),f=Array.from(this.g.keys()),g=[];for(let w=0;w<f.length;w++){const M=l[w];for(let z=0;z<M.length;z++)g.push(f[w])}return g},i.V=function(l){xt(this);let f=[];if(typeof l=="string")Nn(this,l)&&(f=f.concat(this.g.get(fn(this,l))));else{l=Array.from(this.g.values());for(let g=0;g<l.length;g++)f=f.concat(l[g])}return f},i.set=function(l,f){return xt(this),this.i=null,l=fn(this,l),Nn(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[f]),this.h+=1,this},i.get=function(l,f){return l?(l=this.V(l),0<l.length?String(l[0]):f):f};function Wr(l,f,g){Pn(l,f),0<g.length&&(l.i=null,l.g.set(fn(l,f),Y(g)),l.h+=g.length)}i.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],f=Array.from(this.g.keys());for(var g=0;g<f.length;g++){var w=f[g];const z=encodeURIComponent(String(w)),J=this.V(w);for(w=0;w<J.length;w++){var M=z;J[w]!==""&&(M+="="+encodeURIComponent(String(J[w]))),l.push(M)}}return this.i=l.join("&")};function fn(l,f){return f=String(f),l.j&&(f=f.toLowerCase()),f}function Gn(l,f){f&&!l.j&&(xt(l),l.i=null,l.g.forEach(function(g,w){var M=w.toLowerCase();w!=M&&(Pn(this,w),Wr(this,M,g))},l)),l.j=f}function xc(l,f){const g=new bi;if(m.Image){const w=new Image;w.onload=j(qt,g,"TestLoadImage: loaded",!0,f,w),w.onerror=j(qt,g,"TestLoadImage: error",!1,f,w),w.onabort=j(qt,g,"TestLoadImage: abort",!1,f,w),w.ontimeout=j(qt,g,"TestLoadImage: timeout",!1,f,w),m.setTimeout(function(){w.ontimeout&&w.ontimeout()},1e4),w.src=l}else f(!1)}function yl(l,f){const g=new bi,w=new AbortController,M=setTimeout(()=>{w.abort(),qt(g,"TestPingServer: timeout",!1,f)},1e4);fetch(l,{signal:w.signal}).then(z=>{clearTimeout(M),z.ok?qt(g,"TestPingServer: ok",!0,f):qt(g,"TestPingServer: server error",!1,f)}).catch(()=>{clearTimeout(M),qt(g,"TestPingServer: error",!1,f)})}function qt(l,f,g,w,M){try{M&&(M.onload=null,M.onerror=null,M.onabort=null,M.ontimeout=null),w(g)}catch{}}function Ac(){this.g=new Fo}function _l(l,f,g){const w=g||"";try{Ur(l,function(M,z){let J=M;v(M)&&(J=Lo(M)),f.push(w+z+"="+encodeURIComponent(J))})}catch(M){throw f.push(w+"type="+encodeURIComponent("_badmap")),M}}function yr(l){this.l=l.Ub||null,this.j=l.eb||!1}$(yr,Pi),yr.prototype.g=function(){return new Fi(this.l,this.j)},yr.prototype.i=(function(l){return function(){return l}})({});function Fi(l,f){ht.call(this),this.D=l,this.o=f,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}$(Fi,ht),i=Fi.prototype,i.open=function(l,f){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=f,this.readyState=1,Dn(this)},i.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const f={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(f.body=l),(this.D||m).fetch(new Request(this.A,f)).then(this.Sa.bind(this),this.ga.bind(this))},i.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,bn(this)),this.readyState=0},i.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,Dn(this)),this.g&&(this.readyState=3,Dn(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof m.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;vl(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function vl(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}i.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var f=l.value?l.value:new Uint8Array(0);(f=this.v.decode(f,{stream:!l.done}))&&(this.response=this.responseText+=f)}l.done?bn(this):Dn(this),this.readyState==3&&vl(this)}},i.Ra=function(l){this.g&&(this.response=this.responseText=l,bn(this))},i.Qa=function(l){this.g&&(this.response=l,bn(this))},i.ga=function(){this.g&&bn(this)};function bn(l){l.readyState=4,l.l=null,l.j=null,l.v=null,Dn(l)}i.setRequestHeader=function(l,f){this.u.append(l,f)},i.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],f=this.h.entries();for(var g=f.next();!g.done;)g=g.value,l.push(g[0]+": "+g[1]),g=f.next();return l.join(`\r
`)};function Dn(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(Fi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function _r(l){let f="";return Ve(l,function(g,w){f+=w,f+=":",f+=g,f+=`\r
`}),f}function qr(l,f,g){e:{for(w in g){var w=!1;break e}w=!0}w||(g=_r(g),typeof l=="string"?g!=null&&encodeURIComponent(String(g)):Be(l,f,g))}function Xe(l){ht.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}$(Xe,ht);var Cc=/^https?$/i,Qo=["POST","PUT"];i=Xe.prototype,i.Ha=function(l){this.J=l},i.ea=function(l,f,g,w){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);f=f?f.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Cn.g(),this.v=this.o?_s(this.o):_s(Cn),this.g.onreadystatechange=R(this.Ea,this);try{this.B=!0,this.g.open(f,String(l),!0),this.B=!1}catch(z){Ui(this,z);return}if(l=g||"",g=new Map(this.headers),w)if(Object.getPrototypeOf(w)===Object.prototype)for(var M in w)g.set(M,w[M]);else if(typeof w.keys=="function"&&typeof w.get=="function")for(const z of w.keys())g.set(z,w.get(z));else throw Error("Unknown input type for opt_headers: "+String(w));w=Array.from(g.keys()).find(z=>z.toLowerCase()=="content-type"),M=m.FormData&&l instanceof m.FormData,!(0<=Array.prototype.indexOf.call(Qo,f,void 0))||w||M||g.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[z,J]of g)this.g.setRequestHeader(z,J);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ps(this),this.u=!0,this.g.send(l),this.u=!1}catch(z){Ui(this,z)}};function Ui(l,f){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=f,l.m=5,Rs(l),on(l)}function Rs(l){l.A||(l.A=!0,dt(l,"complete"),dt(l,"error"))}i.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,dt(this,"complete"),dt(this,"abort"),on(this))},i.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),on(this,!0)),Xe.aa.N.call(this)},i.Ea=function(){this.s||(this.B||this.u||this.j?Yo(this):this.bb())},i.bb=function(){Yo(this)};function Yo(l){if(l.h&&typeof h<"u"&&(!l.v[1]||Gt(l)!=4||l.Z()!=2)){if(l.u&&Gt(l)==4)Vo(l.Ea,0,l);else if(dt(l,"readystatechange"),Gt(l)==4){l.h=!1;try{const J=l.Z();e:switch(J){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var f=!0;break e;default:f=!1}var g;if(!(g=f)){var w;if(w=J===0){var M=String(l.D).match(Li)[1]||null;!M&&m.self&&m.self.location&&(M=m.self.location.protocol.slice(0,-1)),w=!Cc.test(M?M.toLowerCase():"")}g=w}if(g)dt(l,"complete"),dt(l,"success");else{l.m=6;try{var z=2<Gt(l)?l.g.statusText:""}catch{z=""}l.l=z+" ["+l.Z()+"]",Rs(l)}}finally{on(l)}}}}function on(l,f){if(l.g){Ps(l);const g=l.g,w=l.v[0]?()=>{}:null;l.g=null,l.v=null,f||dt(l,"ready");try{g.onreadystatechange=w}catch{}}}function Ps(l){l.I&&(m.clearTimeout(l.I),l.I=null)}i.isActive=function(){return!!this.g};function Gt(l){return l.g?l.g.readyState:0}i.Z=function(){try{return 2<Gt(this)?this.g.status:-1}catch{return-1}},i.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},i.Oa=function(l){if(this.g){var f=this.g.responseText;return l&&f.indexOf(l)==0&&(f=f.substring(l.length)),jo(f)}};function Xo(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function Ns(l){const f={};l=(l.g&&2<=Gt(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let w=0;w<l.length;w++){if(ue(l[w]))continue;var g=D(l[w]);const M=g[0];if(g=g[1],typeof g!="string")continue;g=g.trim();const z=f[M]||[];f[M]=z,z.push(g)}b(f,function(w){return w.join(", ")})}i.Ba=function(){return this.m},i.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Kn(l,f,g){return g&&g.internalChannelParams&&g.internalChannelParams[l]||f}function Jo(l){this.Aa=0,this.i=[],this.j=new bi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Kn("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Kn("baseRetryDelayMs",5e3,l),this.cb=Kn("retryDelaySeedMs",1e4,l),this.Wa=Kn("forwardChannelMaxRetries",2,l),this.wa=Kn("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new Mi(l&&l.concurrentRequestLimit),this.Da=new Ac,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}i=Jo.prototype,i.la=8,i.G=1,i.connect=function(l,f,g,w){it(0),this.W=l,this.H=f||{},g&&w!==void 0&&(this.H.OSID=g,this.H.OAID=w),this.F=this.X,this.I=Il(this,null,this.W),Qn(this)};function At(l){if(bs(l),l.G==3){var f=l.U++,g=sn(l.I);if(Be(g,"SID",l.K),Be(g,"RID",f),Be(g,"TYPE","terminate"),vr(l,g),f=new Rn(l,l.j,f),f.L=2,f.v=$r(sn(g)),g=!1,m.navigator&&m.navigator.sendBeacon)try{g=m.navigator.sendBeacon(f.v.toString(),"")}catch{}!g&&m.Image&&(new Image().src=f.v,g=!0),g||(f.g=Sl(f.j,null),f.g.ea(f.v)),f.F=Date.now(),$e(f)}Tl(l)}function Vn(l){l.g&&(Zo(l),l.g.cancel(),l.g=null)}function bs(l){Vn(l),l.u&&(m.clearTimeout(l.u),l.u=null),Os(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&m.clearTimeout(l.s),l.s=null)}function Qn(l){if(!rn(l.h)&&!l.s){l.s=!0;var f=l.Ga;Se||te(),Z||(Se(),Z=!0),de.add(f,l),l.B=0}}function Rc(l,f){return cl(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=f.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=xn(R(l.Ga,l,f),El(l,l.B)),l.B++,!0)}i.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const M=new Rn(this,this.j,l);let z=this.o;if(this.S&&(z?(z=S(z),N(z,this.S)):z=this.S),this.m!==null||this.O||(M.H=z,z=null),this.P)e:{for(var f=0,g=0;g<this.i.length;g++){t:{var w=this.i[g];if("__data__"in w.map&&(w=w.map.__data__,typeof w=="string")){w=w.length;break t}w=void 0}if(w===void 0)break;if(f+=w,4096<f){f=g;break e}if(f===4096||g===this.i.length-1){f=g+1;break e}}f=1e3}else f=1e3;f=Gr(this,M,f),g=sn(this.I),Be(g,"RID",l),Be(g,"CVER",22),this.D&&Be(g,"X-HTTP-Session-Id",this.D),vr(this,g),z&&(this.O?f="headers="+encodeURIComponent(String(_r(z)))+"&"+f:this.m&&qr(g,this.m,z)),Go(this.h,M),this.Ua&&Be(g,"TYPE","init"),this.P?(Be(g,"$req",f),Be(g,"SID","null"),M.T=!0,ks(M,g,null)):ks(M,g,f),this.G=2}}else this.G==3&&(l?Ds(this,l):this.i.length==0||rn(this.h)||Ds(this))};function Ds(l,f){var g;f?g=f.l:g=l.U++;const w=sn(l.I);Be(w,"SID",l.K),Be(w,"RID",g),Be(w,"AID",l.T),vr(l,w),l.m&&l.o&&qr(w,l.m,l.o),g=new Rn(l,l.j,g,l.B+1),l.m===null&&(g.H=l.o),f&&(l.i=f.D.concat(l.i)),f=Gr(l,g,1e3),g.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),Go(l.h,g),ks(g,w,f)}function vr(l,f){l.H&&Ve(l.H,function(g,w){Be(f,w,g)}),l.l&&Ur({},function(g,w){Be(f,w,g)})}function Gr(l,f,g){g=Math.min(l.i.length,g);var w=l.l?R(l.l.Na,l.l,l):null;e:{var M=l.i;let z=-1;for(;;){const J=["count="+g];z==-1?0<g?(z=M[0].g,J.push("ofs="+z)):z=0:J.push("ofs="+z);let ze=!0;for(let ft=0;ft<g;ft++){let Oe=M[ft].g;const Et=M[ft].map;if(Oe-=z,0>Oe)z=Math.max(0,M[ft].g-100),ze=!1;else try{_l(Et,J,"req"+Oe+"_")}catch{w&&w(Et)}}if(ze){w=J.join("&");break e}}}return l=l.i.splice(0,g),f.D=l,w}function zi(l){if(!l.g&&!l.u){l.Y=1;var f=l.Fa;Se||te(),Z||(Se(),Z=!0),de.add(f,l),l.v=0}}function Vs(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=xn(R(l.Fa,l),El(l,l.v)),l.v++,!0)}i.Fa=function(){if(this.u=null,wl(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=xn(R(this.ab,this),l)}},i.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,it(10),Vn(this),wl(this))};function Zo(l){l.A!=null&&(m.clearTimeout(l.A),l.A=null)}function wl(l){l.g=new Rn(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var f=sn(l.qa);Be(f,"RID","rpc"),Be(f,"SID",l.K),Be(f,"AID",l.T),Be(f,"CI",l.F?"0":"1"),!l.F&&l.ja&&Be(f,"TO",l.ja),Be(f,"TYPE","xmlhttp"),vr(l,f),l.m&&l.o&&qr(f,l.m,l.o),l.L&&(l.g.I=l.L);var g=l.g;l=l.ia,g.L=1,g.v=$r(sn(f)),g.m=null,g.P=!0,Wo(g,l)}i.Za=function(){this.C!=null&&(this.C=null,Vn(this),Vs(this),it(19))};function Os(l){l.C!=null&&(m.clearTimeout(l.C),l.C=null)}function Ms(l,f){var g=null;if(l.g==f){Os(l),Zo(l),l.g=null;var w=2}else if(Bt(l.h,f))g=f.D,hl(l.h,f),w=1;else return;if(l.G!=0){if(f.o)if(w==1){g=f.m?f.m.length:0,f=Date.now()-f.F;var M=l.B;w=Ni(),dt(w,new Es(w,g)),Qn(l)}else zi(l);else if(M=f.s,M==3||M==0&&0<f.X||!(w==1&&Rc(l,f)||w==2&&Vs(l)))switch(g&&0<g.length&&(f=l.h,f.i=f.i.concat(g)),M){case 1:wr(l,5);break;case 4:wr(l,10);break;case 3:wr(l,6);break;default:wr(l,2)}}}function El(l,f){let g=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(g*=2),g*f}function wr(l,f){if(l.j.info("Error code "+f),f==2){var g=R(l.fb,l),w=l.Xa;const M=!w;w=new gr(w||"//www.google.com/images/cleardot.gif"),m.location&&m.location.protocol=="http"||ji(w,"https"),$r(w),M?xc(w.toString(),g):yl(w.toString(),g)}else it(2);l.G=0,l.l&&l.l.sa(f),Tl(l),bs(l)}i.fb=function(l){l?(this.j.info("Successfully pinged google.com"),it(2)):(this.j.info("Failed to ping google.com"),it(1))};function Tl(l){if(l.G=0,l.ka=[],l.l){const f=dl(l.h);(f.length!=0||l.i.length!=0)&&(B(l.ka,f),B(l.ka,l.i),l.h.i.length=0,Y(l.i),l.i.length=0),l.l.ra()}}function Il(l,f,g){var w=g instanceof gr?sn(g):new gr(g);if(w.g!="")f&&(w.g=f+"."+w.g),zr(w,w.s);else{var M=m.location;w=M.protocol,f=f?f+"."+M.hostname:M.hostname,M=+M.port;var z=new gr(null);w&&ji(z,w),f&&(z.g=f),M&&zr(z,M),g&&(z.l=g),w=z}return g=l.D,f=l.ya,g&&f&&Be(w,g,f),Be(w,"VER",l.la),vr(l,w),w}function Sl(l,f,g){if(f&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return f=l.Ca&&!l.pa?new Xe(new yr({eb:g})):new Xe(l.pa),f.Ha(l.J),f}i.isActive=function(){return!!this.l&&this.l.isActive(this)};function ea(){}i=ea.prototype,i.ua=function(){},i.ta=function(){},i.sa=function(){},i.ra=function(){},i.isActive=function(){return!0},i.Na=function(){};function Ls(){}Ls.prototype.g=function(l,f){return new $t(l,f)};function $t(l,f){ht.call(this),this.g=new Jo(f),this.l=l,this.h=f&&f.messageUrlParams||null,l=f&&f.messageHeaders||null,f&&f.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=f&&f.initMessageHeaders||null,f&&f.messageContentType&&(l?l["X-WebChannel-Content-Type"]=f.messageContentType:l={"X-WebChannel-Content-Type":f.messageContentType}),f&&f.va&&(l?l["X-WebChannel-Client-Profile"]=f.va:l={"X-WebChannel-Client-Profile":f.va}),this.g.S=l,(l=f&&f.Sb)&&!ue(l)&&(this.g.m=l),this.v=f&&f.supportsCrossDomainXhr||!1,this.u=f&&f.sendRawJson||!1,(f=f&&f.httpSessionIdParam)&&!ue(f)&&(this.g.D=f,l=this.h,l!==null&&f in l&&(l=this.h,f in l&&delete l[f])),this.j=new Yn(this)}$($t,ht),$t.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},$t.prototype.close=function(){At(this.g)},$t.prototype.o=function(l){var f=this.g;if(typeof l=="string"){var g={};g.__data__=l,l=g}else this.u&&(g={},g.__data__=Lo(l),l=g);f.i.push(new ul(f.Ya++,l)),f.G==3&&Qn(f)},$t.prototype.N=function(){this.g.l=null,delete this.j,At(this.g),delete this.g,$t.aa.N.call(this)};function kl(l){Hn.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var f=l.__sm__;if(f){e:{for(const g in f){l=g;break e}l=void 0}(this.i=l)&&(l=this.i,f=f!==null&&l in f?f[l]:void 0),this.data=f}else this.data=l}$(kl,Hn);function xl(){ws.call(this),this.status=1}$(xl,ws);function Yn(l){this.g=l}$(Yn,ea),Yn.prototype.ua=function(){dt(this.g,"a")},Yn.prototype.ta=function(l){dt(this.g,new kl(l))},Yn.prototype.sa=function(l){dt(this.g,new xl)},Yn.prototype.ra=function(){dt(this.g,"b")},Ls.prototype.createWebChannel=Ls.prototype.g,$t.prototype.send=$t.prototype.o,$t.prototype.open=$t.prototype.m,$t.prototype.close=$t.prototype.close,m_=function(){return new Ls},p_=function(){return Ni()},f_=Wn,Ed={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Is.NO_ERROR=0,Is.TIMEOUT=8,Is.HTTP_ERROR=6,bu=Is,sl.COMPLETE="complete",d_=sl,vs.EventType=hn,hn.OPEN="a",hn.CLOSE="b",hn.ERROR="c",hn.MESSAGE="d",ht.prototype.listen=ht.prototype.K,Aa=vs,Xe.prototype.listenOnce=Xe.prototype.L,Xe.prototype.getLastError=Xe.prototype.Ka,Xe.prototype.getLastErrorCode=Xe.prototype.Ba,Xe.prototype.getStatus=Xe.prototype.Z,Xe.prototype.getResponseJson=Xe.prototype.Oa,Xe.prototype.getResponseText=Xe.prototype.oa,Xe.prototype.send=Xe.prototype.ea,Xe.prototype.setWithCredentials=Xe.prototype.Ha,h_=Xe}).apply(typeof Eu<"u"?Eu:typeof self<"u"?self:typeof window<"u"?window:{});const _g="@firebase/firestore",vg="4.9.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ft.UNAUTHENTICATED=new Ft(null),Ft.GOOGLE_CREDENTIALS=new Ft("google-credentials-uid"),Ft.FIRST_PARTY=new Ft("first-party-uid"),Ft.MOCK_USER=new Ft("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xo="12.2.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ls=new jd("@firebase/firestore");function so(){return ls.logLevel}function re(i,...e){if(ls.logLevel<=Pe.DEBUG){const t=e.map(Qd);ls.debug(`Firestore (${xo}): ${i}`,...t)}}function Vr(i,...e){if(ls.logLevel<=Pe.ERROR){const t=e.map(Qd);ls.error(`Firestore (${xo}): ${i}`,...t)}}function go(i,...e){if(ls.logLevel<=Pe.WARN){const t=e.map(Qd);ls.warn(`Firestore (${xo}): ${i}`,...t)}}function Qd(i){if(typeof i=="string")return i;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(t){return JSON.stringify(t)})(i)}catch{return i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ve(i,e,t){let s="Unexpected state";typeof e=="string"?s=e:t=e,g_(i,s,t)}function g_(i,e,t){let s=`FIRESTORE (${xo}) INTERNAL ASSERTION FAILED: ${e} (ID: ${i.toString(16)})`;if(t!==void 0)try{s+=" CONTEXT: "+JSON.stringify(t)}catch{s+=" CONTEXT: "+t}throw Vr(s),new Error(s)}function Ue(i,e,t,s){let o="Unexpected state";typeof t=="string"?o=t:s=t,i||g_(e,o,s)}function Ie(i,e){return i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class le extends Mr{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y_{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class o1{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Ft.UNAUTHENTICATED)))}shutdown(){}}class a1{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class l1{constructor(e){this.t=e,this.currentUser=Ft.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Ue(this.o===void 0,42304);let s=this.i;const o=y=>this.i!==s?(s=this.i,t(y)):Promise.resolve();let u=new _i;this.o=()=>{this.i++,this.currentUser=this.u(),u.resolve(),u=new _i,e.enqueueRetryable((()=>o(this.currentUser)))};const h=()=>{const y=u;e.enqueueRetryable((async()=>{await y.promise,await o(this.currentUser)}))},m=y=>{re("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=y,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit((y=>m(y))),setTimeout((()=>{if(!this.auth){const y=this.t.getImmediate({optional:!0});y?m(y):(re("FirebaseAuthCredentialsProvider","Auth not yet detected"),u.resolve(),u=new _i)}}),0),h()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((s=>this.i!==e?(re("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Ue(typeof s.accessToken=="string",31837,{l:s}),new y_(s.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ue(e===null||typeof e=="string",2055,{h:e}),new Ft(e)}}class u1{constructor(e,t,s){this.P=e,this.T=t,this.I=s,this.type="FirstParty",this.user=Ft.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class c1{constructor(e,t,s){this.P=e,this.T=t,this.I=s}getToken(){return Promise.resolve(new u1(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(Ft.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class wg{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class h1{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,En(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Ue(this.o===void 0,3512);const s=u=>{u.error!=null&&re("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${u.error.message}`);const h=u.token!==this.m;return this.m=u.token,re("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?t(u.token):Promise.resolve()};this.o=u=>{e.enqueueRetryable((()=>s(u)))};const o=u=>{re("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=u,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((u=>o(u))),setTimeout((()=>{if(!this.appCheck){const u=this.V.getImmediate({optional:!0});u?o(u):re("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new wg(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(Ue(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new wg(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d1(i){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(i);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<i;s++)t[s]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yd{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const o=d1(40);for(let u=0;u<o.length;++u)s.length<20&&o[u]<t&&(s+=e.charAt(o[u]%62))}return s}}function Ne(i,e){return i<e?-1:i>e?1:0}function Td(i,e){const t=Math.min(i.length,e.length);for(let s=0;s<t;s++){const o=i.charAt(s),u=e.charAt(s);if(o!==u)return ad(o)===ad(u)?Ne(o,u):ad(o)?1:-1}return Ne(i.length,e.length)}const f1=55296,p1=57343;function ad(i){const e=i.charCodeAt(0);return e>=f1&&e<=p1}function yo(i,e,t){return i.length===e.length&&i.every(((s,o)=>t(s,e[o])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eg="__name__";class tr{constructor(e,t,s){t===void 0?t=0:t>e.length&&ve(637,{offset:t,range:e.length}),s===void 0?s=e.length-t:s>e.length-t&&ve(1746,{length:s,range:e.length-t}),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return tr.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof tr?e.forEach((s=>{t.push(s)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let o=0;o<s;o++){const u=tr.compareSegments(e.get(o),t.get(o));if(u!==0)return u}return Ne(e.length,t.length)}static compareSegments(e,t){const s=tr.isNumericId(e),o=tr.isNumericId(t);return s&&!o?-1:!s&&o?1:s&&o?tr.extractNumericId(e).compare(tr.extractNumericId(t)):Td(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return yi.fromString(e.substring(4,e.length-2))}}class Ke extends tr{construct(e,t,s){return new Ke(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new le(G.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter((o=>o.length>0)))}return new Ke(t)}static emptyPath(){return new Ke([])}}const m1=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Nt extends tr{construct(e,t,s){return new Nt(e,t,s)}static isValidIdentifier(e){return m1.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Nt.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Eg}static keyField(){return new Nt([Eg])}static fromServerFormat(e){const t=[];let s="",o=0;const u=()=>{if(s.length===0)throw new le(G.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let h=!1;for(;o<e.length;){const m=e[o];if(m==="\\"){if(o+1===e.length)throw new le(G.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const y=e[o+1];if(y!=="\\"&&y!=="."&&y!=="`")throw new le(G.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=y,o+=2}else m==="`"?(h=!h,o++):m!=="."||h?(s+=m,o++):(u(),o++)}if(u(),h)throw new le(G.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Nt(t)}static emptyPath(){return new Nt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(e){this.path=e}static fromPath(e){return new pe(Ke.fromString(e))}static fromName(e){return new pe(Ke.fromString(e).popFirst(5))}static empty(){return new pe(Ke.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ke.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Ke.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new pe(new Ke(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function __(i,e,t){if(!t)throw new le(G.INVALID_ARGUMENT,`Function ${i}() cannot be called with an empty ${e}.`)}function g1(i,e,t,s){if(e===!0&&s===!0)throw new le(G.INVALID_ARGUMENT,`${i} and ${t} cannot be used together.`)}function Tg(i){if(!pe.isDocumentKey(i))throw new le(G.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${i} has ${i.length}.`)}function Ig(i){if(pe.isDocumentKey(i))throw new le(G.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${i} has ${i.length}.`)}function v_(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}function Xd(i){if(i===void 0)return"undefined";if(i===null)return"null";if(typeof i=="string")return i.length>20&&(i=`${i.substring(0,20)}...`),JSON.stringify(i);if(typeof i=="number"||typeof i=="boolean")return""+i;if(typeof i=="object"){if(i instanceof Array)return"an array";{const e=(function(s){return s.constructor?s.constructor.name:null})(i);return e?`a custom ${e} object`:"an object"}}return typeof i=="function"?"a function":ve(12329,{type:typeof i})}function _o(i,e){if("_delegate"in i&&(i=i._delegate),!(i instanceof e)){if(e.name===i.constructor.name)throw new le(G.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Xd(i);throw new le(G.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return i}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ct(i,e){const t={typeString:i};return e&&(t.value=e),t}function Za(i,e){if(!v_(i))throw new le(G.INVALID_ARGUMENT,"JSON must be an object");let t;for(const s in e)if(e[s]){const o=e[s].typeString,u="value"in e[s]?{value:e[s].value}:void 0;if(!(s in i)){t=`JSON missing required field: '${s}'`;break}const h=i[s];if(o&&typeof h!==o){t=`JSON field '${s}' must be a ${o}.`;break}if(u!==void 0&&h!==u.value){t=`Expected '${s}' field to equal '${u.value}'`;break}}if(t)throw new le(G.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sg=-62135596800,kg=1e6;class Qe{static now(){return Qe.fromMillis(Date.now())}static fromDate(e){return Qe.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*kg);return new Qe(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new le(G.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new le(G.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Sg)throw new le(G.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new le(G.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/kg}_compareTo(e){return this.seconds===e.seconds?Ne(this.nanoseconds,e.nanoseconds):Ne(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Qe._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Za(e,Qe._jsonSchema))return new Qe(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Sg;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Qe._jsonSchemaVersion="firestore/timestamp/1.0",Qe._jsonSchema={type:ct("string",Qe._jsonSchemaVersion),seconds:ct("number"),nanoseconds:ct("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{static fromTimestamp(e){return new Te(e)}static min(){return new Te(new Qe(0,0))}static max(){return new Te(new Qe(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const za=-1;function y1(i,e){const t=i.toTimestamp().seconds,s=i.toTimestamp().nanoseconds+1,o=Te.fromTimestamp(s===1e9?new Qe(t+1,0):new Qe(t,s));return new wi(o,pe.empty(),e)}function _1(i){return new wi(i.readTime,i.key,za)}class wi{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new wi(Te.min(),pe.empty(),za)}static max(){return new wi(Te.max(),pe.empty(),za)}}function v1(i,e){let t=i.readTime.compareTo(e.readTime);return t!==0?t:(t=pe.comparator(i.documentKey,e.documentKey),t!==0?t:Ne(i.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w1="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class E1{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ao(i){if(i.code!==G.FAILED_PRECONDITION||i.message!==w1)throw i;re("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&ve(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new W(((s,o)=>{this.nextCallback=u=>{this.wrapSuccess(e,u).next(s,o)},this.catchCallback=u=>{this.wrapFailure(t,u).next(s,o)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof W?t:W.resolve(t)}catch(t){return W.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):W.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):W.reject(t)}static resolve(e){return new W(((t,s)=>{t(e)}))}static reject(e){return new W(((t,s)=>{s(e)}))}static waitFor(e){return new W(((t,s)=>{let o=0,u=0,h=!1;e.forEach((m=>{++o,m.next((()=>{++u,h&&u===o&&t()}),(y=>s(y)))})),h=!0,u===o&&t()}))}static or(e){let t=W.resolve(!1);for(const s of e)t=t.next((o=>o?W.resolve(o):s()));return t}static forEach(e,t){const s=[];return e.forEach(((o,u)=>{s.push(t.call(this,o,u))})),this.waitFor(s)}static mapArray(e,t){return new W(((s,o)=>{const u=e.length,h=new Array(u);let m=0;for(let y=0;y<u;y++){const v=y;t(e[v]).next((T=>{h[v]=T,++m,m===u&&s(h)}),(T=>o(T)))}}))}static doWhile(e,t){return new W(((s,o)=>{const u=()=>{e()===!0?t().next((()=>{u()}),o):s()};u()}))}}function T1(i){const e=i.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Co(i){return i.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uc{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.ae(s),this.ue=s=>t.writeSequenceNumber(s))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}uc.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jd=-1;function cc(i){return i==null}function Gu(i){return i===0&&1/i==-1/0}function I1(i){return typeof i=="number"&&Number.isInteger(i)&&!Gu(i)&&i<=Number.MAX_SAFE_INTEGER&&i>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w_="";function S1(i){let e="";for(let t=0;t<i.length;t++)e.length>0&&(e=xg(e)),e=k1(i.get(t),e);return xg(e)}function k1(i,e){let t=e;const s=i.length;for(let o=0;o<s;o++){const u=i.charAt(o);switch(u){case"\0":t+="";break;case w_:t+="";break;default:t+=u}}return t}function xg(i){return i+w_+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ag(i){let e=0;for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e++;return e}function hs(i,e){for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e(t,i[t])}function E_(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(e,t){this.comparator=e,this.root=t||Pt.EMPTY}insert(e,t){return new nt(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Pt.BLACK,null,null))}remove(e){return new nt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Pt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const o=this.comparator(e,s.key);if(o===0)return t+s.left.size;o<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,s)=>(e(t,s),!1)))}toString(){const e=[];return this.inorderTraversal(((t,s)=>(e.push(`${t}:${s}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Tu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Tu(this.root,e,this.comparator,!1)}getReverseIterator(){return new Tu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Tu(this.root,e,this.comparator,!0)}}class Tu{constructor(e,t,s,o){this.isReverse=o,this.nodeStack=[];let u=1;for(;!e.isEmpty();)if(u=t?s(e.key,t):1,t&&o&&(u*=-1),u<0)e=this.isReverse?e.left:e.right;else{if(u===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Pt{constructor(e,t,s,o,u){this.key=e,this.value=t,this.color=s??Pt.RED,this.left=o??Pt.EMPTY,this.right=u??Pt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,o,u){return new Pt(e??this.key,t??this.value,s??this.color,o??this.left,u??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let o=this;const u=s(e,o.key);return o=u<0?o.copy(null,null,null,o.left.insert(e,t,s),null):u===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,s)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Pt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return Pt.EMPTY;s=o.right.min(),o=o.copy(s.key,s.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Pt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Pt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ve(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ve(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ve(27949);return e+(this.isRed()?0:1)}}Pt.EMPTY=null,Pt.RED=!0,Pt.BLACK=!1;Pt.EMPTY=new class{constructor(){this.size=0}get key(){throw ve(57766)}get value(){throw ve(16141)}get color(){throw ve(16727)}get left(){throw ve(29726)}get right(){throw ve(36894)}copy(e,t,s,o,u){return this}insert(e,t,s){return new Pt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e){this.comparator=e,this.data=new nt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,s)=>(e(t),!1)))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const o=s.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Cg(this.data.getIterator())}getIteratorFrom(e){return new Cg(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((s=>{t=t.add(s)})),t}isEqual(e){if(!(e instanceof _t)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,u=s.getNext().key;if(this.comparator(o,u)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new _t(this.comparator);return t.data=e,t}}class Cg{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn{constructor(e){this.fields=e,e.sort(Nt.comparator)}static empty(){return new Bn([])}unionWith(e){let t=new _t(Nt.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new Bn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return yo(this.fields,e.fields,((t,s)=>t.isEqual(s)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T_ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(o){try{return atob(o)}catch(u){throw typeof DOMException<"u"&&u instanceof DOMException?new T_("Invalid base64 string: "+u):u}})(e);return new bt(t)}static fromUint8Array(e){const t=(function(o){let u="";for(let h=0;h<o.length;++h)u+=String.fromCharCode(o[h]);return u})(e);return new bt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const s=new Uint8Array(t.length);for(let o=0;o<t.length;o++)s[o]=t.charCodeAt(o);return s})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ne(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}bt.EMPTY_BYTE_STRING=new bt("");const x1=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ei(i){if(Ue(!!i,39018),typeof i=="string"){let e=0;const t=x1.exec(i);if(Ue(!!t,46558,{timestamp:i}),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const s=new Date(i);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:ot(i.seconds),nanos:ot(i.nanos)}}function ot(i){return typeof i=="number"?i:typeof i=="string"?Number(i):0}function Ti(i){return typeof i=="string"?bt.fromBase64String(i):bt.fromUint8Array(i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I_="server_timestamp",S_="__type__",k_="__previous_value__",x_="__local_write_time__";function Zd(i){return(i?.mapValue?.fields||{})[S_]?.stringValue===I_}function hc(i){const e=i.mapValue.fields[k_];return Zd(e)?hc(e):e}function Ba(i){const e=Ei(i.mapValue.fields[x_].timestampValue);return new Qe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A1{constructor(e,t,s,o,u,h,m,y,v,T){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=o,this.ssl=u,this.forceLongPolling=h,this.autoDetectLongPolling=m,this.longPollingOptions=y,this.useFetchStreams=v,this.isUsingEmulator=T}}const Ku="(default)";class $a{constructor(e,t){this.projectId=e,this.database=t||Ku}static empty(){return new $a("","")}get isDefaultDatabase(){return this.database===Ku}isEqual(e){return e instanceof $a&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A_="__type__",C1="__max__",Iu={mapValue:{}},C_="__vector__",Qu="value";function Ii(i){return"nullValue"in i?0:"booleanValue"in i?1:"integerValue"in i||"doubleValue"in i?2:"timestampValue"in i?3:"stringValue"in i?5:"bytesValue"in i?6:"referenceValue"in i?7:"geoPointValue"in i?8:"arrayValue"in i?9:"mapValue"in i?Zd(i)?4:P1(i)?9007199254740991:R1(i)?10:11:ve(28295,{value:i})}function ur(i,e){if(i===e)return!0;const t=Ii(i);if(t!==Ii(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return i.booleanValue===e.booleanValue;case 4:return Ba(i).isEqual(Ba(e));case 3:return(function(o,u){if(typeof o.timestampValue=="string"&&typeof u.timestampValue=="string"&&o.timestampValue.length===u.timestampValue.length)return o.timestampValue===u.timestampValue;const h=Ei(o.timestampValue),m=Ei(u.timestampValue);return h.seconds===m.seconds&&h.nanos===m.nanos})(i,e);case 5:return i.stringValue===e.stringValue;case 6:return(function(o,u){return Ti(o.bytesValue).isEqual(Ti(u.bytesValue))})(i,e);case 7:return i.referenceValue===e.referenceValue;case 8:return(function(o,u){return ot(o.geoPointValue.latitude)===ot(u.geoPointValue.latitude)&&ot(o.geoPointValue.longitude)===ot(u.geoPointValue.longitude)})(i,e);case 2:return(function(o,u){if("integerValue"in o&&"integerValue"in u)return ot(o.integerValue)===ot(u.integerValue);if("doubleValue"in o&&"doubleValue"in u){const h=ot(o.doubleValue),m=ot(u.doubleValue);return h===m?Gu(h)===Gu(m):isNaN(h)&&isNaN(m)}return!1})(i,e);case 9:return yo(i.arrayValue.values||[],e.arrayValue.values||[],ur);case 10:case 11:return(function(o,u){const h=o.mapValue.fields||{},m=u.mapValue.fields||{};if(Ag(h)!==Ag(m))return!1;for(const y in h)if(h.hasOwnProperty(y)&&(m[y]===void 0||!ur(h[y],m[y])))return!1;return!0})(i,e);default:return ve(52216,{left:i})}}function Ha(i,e){return(i.values||[]).find((t=>ur(t,e)))!==void 0}function vo(i,e){if(i===e)return 0;const t=Ii(i),s=Ii(e);if(t!==s)return Ne(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return Ne(i.booleanValue,e.booleanValue);case 2:return(function(u,h){const m=ot(u.integerValue||u.doubleValue),y=ot(h.integerValue||h.doubleValue);return m<y?-1:m>y?1:m===y?0:isNaN(m)?isNaN(y)?0:-1:1})(i,e);case 3:return Rg(i.timestampValue,e.timestampValue);case 4:return Rg(Ba(i),Ba(e));case 5:return Td(i.stringValue,e.stringValue);case 6:return(function(u,h){const m=Ti(u),y=Ti(h);return m.compareTo(y)})(i.bytesValue,e.bytesValue);case 7:return(function(u,h){const m=u.split("/"),y=h.split("/");for(let v=0;v<m.length&&v<y.length;v++){const T=Ne(m[v],y[v]);if(T!==0)return T}return Ne(m.length,y.length)})(i.referenceValue,e.referenceValue);case 8:return(function(u,h){const m=Ne(ot(u.latitude),ot(h.latitude));return m!==0?m:Ne(ot(u.longitude),ot(h.longitude))})(i.geoPointValue,e.geoPointValue);case 9:return Pg(i.arrayValue,e.arrayValue);case 10:return(function(u,h){const m=u.fields||{},y=h.fields||{},v=m[Qu]?.arrayValue,T=y[Qu]?.arrayValue,A=Ne(v?.values?.length||0,T?.values?.length||0);return A!==0?A:Pg(v,T)})(i.mapValue,e.mapValue);case 11:return(function(u,h){if(u===Iu.mapValue&&h===Iu.mapValue)return 0;if(u===Iu.mapValue)return 1;if(h===Iu.mapValue)return-1;const m=u.fields||{},y=Object.keys(m),v=h.fields||{},T=Object.keys(v);y.sort(),T.sort();for(let A=0;A<y.length&&A<T.length;++A){const R=Td(y[A],T[A]);if(R!==0)return R;const j=vo(m[y[A]],v[T[A]]);if(j!==0)return j}return Ne(y.length,T.length)})(i.mapValue,e.mapValue);default:throw ve(23264,{he:t})}}function Rg(i,e){if(typeof i=="string"&&typeof e=="string"&&i.length===e.length)return Ne(i,e);const t=Ei(i),s=Ei(e),o=Ne(t.seconds,s.seconds);return o!==0?o:Ne(t.nanos,s.nanos)}function Pg(i,e){const t=i.values||[],s=e.values||[];for(let o=0;o<t.length&&o<s.length;++o){const u=vo(t[o],s[o]);if(u)return u}return Ne(t.length,s.length)}function wo(i){return Id(i)}function Id(i){return"nullValue"in i?"null":"booleanValue"in i?""+i.booleanValue:"integerValue"in i?""+i.integerValue:"doubleValue"in i?""+i.doubleValue:"timestampValue"in i?(function(t){const s=Ei(t);return`time(${s.seconds},${s.nanos})`})(i.timestampValue):"stringValue"in i?i.stringValue:"bytesValue"in i?(function(t){return Ti(t).toBase64()})(i.bytesValue):"referenceValue"in i?(function(t){return pe.fromName(t).toString()})(i.referenceValue):"geoPointValue"in i?(function(t){return`geo(${t.latitude},${t.longitude})`})(i.geoPointValue):"arrayValue"in i?(function(t){let s="[",o=!0;for(const u of t.values||[])o?o=!1:s+=",",s+=Id(u);return s+"]"})(i.arrayValue):"mapValue"in i?(function(t){const s=Object.keys(t.fields||{}).sort();let o="{",u=!0;for(const h of s)u?u=!1:o+=",",o+=`${h}:${Id(t.fields[h])}`;return o+"}"})(i.mapValue):ve(61005,{value:i})}function Du(i){switch(Ii(i)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=hc(i);return e?16+Du(e):16;case 5:return 2*i.stringValue.length;case 6:return Ti(i.bytesValue).approximateByteSize();case 7:return i.referenceValue.length;case 9:return(function(s){return(s.values||[]).reduce(((o,u)=>o+Du(u)),0)})(i.arrayValue);case 10:case 11:return(function(s){let o=0;return hs(s.fields,((u,h)=>{o+=u.length+Du(h)})),o})(i.mapValue);default:throw ve(13486,{value:i})}}function Sd(i){return!!i&&"integerValue"in i}function ef(i){return!!i&&"arrayValue"in i}function Ng(i){return!!i&&"nullValue"in i}function bg(i){return!!i&&"doubleValue"in i&&isNaN(Number(i.doubleValue))}function Vu(i){return!!i&&"mapValue"in i}function R1(i){return(i?.mapValue?.fields||{})[A_]?.stringValue===C_}function Da(i){if(i.geoPointValue)return{geoPointValue:{...i.geoPointValue}};if(i.timestampValue&&typeof i.timestampValue=="object")return{timestampValue:{...i.timestampValue}};if(i.mapValue){const e={mapValue:{fields:{}}};return hs(i.mapValue.fields,((t,s)=>e.mapValue.fields[t]=Da(s))),e}if(i.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(i.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Da(i.arrayValue.values[t]);return e}return{...i}}function P1(i){return(((i.mapValue||{}).fields||{}).__type__||{}).stringValue===C1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn{constructor(e){this.value=e}static empty(){return new Tn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!Vu(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Da(t)}setAll(e){let t=Nt.emptyPath(),s={},o=[];e.forEach(((h,m)=>{if(!t.isImmediateParentOf(m)){const y=this.getFieldsMap(t);this.applyChanges(y,s,o),s={},o=[],t=m.popLast()}h?s[m.lastSegment()]=Da(h):o.push(m.lastSegment())}));const u=this.getFieldsMap(t);this.applyChanges(u,s,o)}delete(e){const t=this.field(e.popLast());Vu(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return ur(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let o=t.mapValue.fields[e.get(s)];Vu(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,s){hs(t,((o,u)=>e[o]=u));for(const o of s)delete e[o]}clone(){return new Tn(Da(this.value))}}function R_(i){const e=[];return hs(i.fields,((t,s)=>{const o=new Nt([t]);if(Vu(s)){const u=R_(s.mapValue).fields;if(u.length===0)e.push(o);else for(const h of u)e.push(o.child(h))}else e.push(o)})),new Bn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(e,t,s,o,u,h,m){this.key=e,this.documentType=t,this.version=s,this.readTime=o,this.createTime=u,this.data=h,this.documentState=m}static newInvalidDocument(e){return new Ut(e,0,Te.min(),Te.min(),Te.min(),Tn.empty(),0)}static newFoundDocument(e,t,s,o){return new Ut(e,1,t,Te.min(),s,o,0)}static newNoDocument(e,t){return new Ut(e,2,t,Te.min(),Te.min(),Tn.empty(),0)}static newUnknownDocument(e,t){return new Ut(e,3,t,Te.min(),Te.min(),Tn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Te.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Tn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Tn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Te.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ut&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ut(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yu{constructor(e,t){this.position=e,this.inclusive=t}}function Dg(i,e,t){let s=0;for(let o=0;o<i.position.length;o++){const u=e[o],h=i.position[o];if(u.field.isKeyField()?s=pe.comparator(pe.fromName(h.referenceValue),t.key):s=vo(h,t.data.field(u.field)),u.dir==="desc"&&(s*=-1),s!==0)break}return s}function Vg(i,e){if(i===null)return e===null;if(e===null||i.inclusive!==e.inclusive||i.position.length!==e.position.length)return!1;for(let t=0;t<i.position.length;t++)if(!ur(i.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xu{constructor(e,t="asc"){this.field=e,this.dir=t}}function N1(i,e){return i.dir===e.dir&&i.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P_{}class gt extends P_{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new D1(e,t,s):t==="array-contains"?new M1(e,s):t==="in"?new L1(e,s):t==="not-in"?new j1(e,s):t==="array-contains-any"?new F1(e,s):new gt(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new V1(e,s):new O1(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(vo(t,this.value)):t!==null&&Ii(this.value)===Ii(t)&&this.matchesComparison(vo(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ve(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class cr extends P_{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new cr(e,t)}matches(e){return N_(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function N_(i){return i.op==="and"}function b_(i){return b1(i)&&N_(i)}function b1(i){for(const e of i.filters)if(e instanceof cr)return!1;return!0}function kd(i){if(i instanceof gt)return i.field.canonicalString()+i.op.toString()+wo(i.value);if(b_(i))return i.filters.map((e=>kd(e))).join(",");{const e=i.filters.map((t=>kd(t))).join(",");return`${i.op}(${e})`}}function D_(i,e){return i instanceof gt?(function(s,o){return o instanceof gt&&s.op===o.op&&s.field.isEqual(o.field)&&ur(s.value,o.value)})(i,e):i instanceof cr?(function(s,o){return o instanceof cr&&s.op===o.op&&s.filters.length===o.filters.length?s.filters.reduce(((u,h,m)=>u&&D_(h,o.filters[m])),!0):!1})(i,e):void ve(19439)}function V_(i){return i instanceof gt?(function(t){return`${t.field.canonicalString()} ${t.op} ${wo(t.value)}`})(i):i instanceof cr?(function(t){return t.op.toString()+" {"+t.getFilters().map(V_).join(" ,")+"}"})(i):"Filter"}class D1 extends gt{constructor(e,t,s){super(e,t,s),this.key=pe.fromName(s.referenceValue)}matches(e){const t=pe.comparator(e.key,this.key);return this.matchesComparison(t)}}class V1 extends gt{constructor(e,t){super(e,"in",t),this.keys=O_("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class O1 extends gt{constructor(e,t){super(e,"not-in",t),this.keys=O_("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function O_(i,e){return(e.arrayValue?.values||[]).map((t=>pe.fromName(t.referenceValue)))}class M1 extends gt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return ef(t)&&Ha(t.arrayValue,this.value)}}class L1 extends gt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Ha(this.value.arrayValue,t)}}class j1 extends gt{constructor(e,t){super(e,"not-in",t)}matches(e){if(Ha(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Ha(this.value.arrayValue,t)}}class F1 extends gt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!ef(t)||!t.arrayValue.values)&&t.arrayValue.values.some((s=>Ha(this.value.arrayValue,s)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U1{constructor(e,t=null,s=[],o=[],u=null,h=null,m=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=o,this.limit=u,this.startAt=h,this.endAt=m,this.Te=null}}function Og(i,e=null,t=[],s=[],o=null,u=null,h=null){return new U1(i,e,t,s,o,u,h)}function tf(i){const e=Ie(i);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((s=>kd(s))).join(","),t+="|ob:",t+=e.orderBy.map((s=>(function(u){return u.field.canonicalString()+u.dir})(s))).join(","),cc(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((s=>wo(s))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((s=>wo(s))).join(",")),e.Te=t}return e.Te}function nf(i,e){if(i.limit!==e.limit||i.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<i.orderBy.length;t++)if(!N1(i.orderBy[t],e.orderBy[t]))return!1;if(i.filters.length!==e.filters.length)return!1;for(let t=0;t<i.filters.length;t++)if(!D_(i.filters[t],e.filters[t]))return!1;return i.collectionGroup===e.collectionGroup&&!!i.path.isEqual(e.path)&&!!Vg(i.startAt,e.startAt)&&Vg(i.endAt,e.endAt)}function xd(i){return pe.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dc{constructor(e,t=null,s=[],o=[],u=null,h="F",m=null,y=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=o,this.limit=u,this.limitType=h,this.startAt=m,this.endAt=y,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function z1(i,e,t,s,o,u,h,m){return new dc(i,e,t,s,o,u,h,m)}function rf(i){return new dc(i)}function Mg(i){return i.filters.length===0&&i.limit===null&&i.startAt==null&&i.endAt==null&&(i.explicitOrderBy.length===0||i.explicitOrderBy.length===1&&i.explicitOrderBy[0].field.isKeyField())}function B1(i){return i.collectionGroup!==null}function Va(i){const e=Ie(i);if(e.Ie===null){e.Ie=[];const t=new Set;for(const u of e.explicitOrderBy)e.Ie.push(u),t.add(u.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(h){let m=new _t(Nt.comparator);return h.filters.forEach((y=>{y.getFlattenedFilters().forEach((v=>{v.isInequality()&&(m=m.add(v.field))}))})),m})(e).forEach((u=>{t.has(u.canonicalString())||u.isKeyField()||e.Ie.push(new Xu(u,s))})),t.has(Nt.keyField().canonicalString())||e.Ie.push(new Xu(Nt.keyField(),s))}return e.Ie}function ir(i){const e=Ie(i);return e.Ee||(e.Ee=$1(e,Va(i))),e.Ee}function $1(i,e){if(i.limitType==="F")return Og(i.path,i.collectionGroup,e,i.filters,i.limit,i.startAt,i.endAt);{e=e.map((o=>{const u=o.dir==="desc"?"asc":"desc";return new Xu(o.field,u)}));const t=i.endAt?new Yu(i.endAt.position,i.endAt.inclusive):null,s=i.startAt?new Yu(i.startAt.position,i.startAt.inclusive):null;return Og(i.path,i.collectionGroup,e,i.filters,i.limit,t,s)}}function Ad(i,e,t){return new dc(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),e,t,i.startAt,i.endAt)}function fc(i,e){return nf(ir(i),ir(e))&&i.limitType===e.limitType}function M_(i){return`${tf(ir(i))}|lt:${i.limitType}`}function oo(i){return`Query(target=${(function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map((o=>V_(o))).join(", ")}]`),cc(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map((o=>(function(h){return`${h.field.canonicalString()} (${h.dir})`})(o))).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map((o=>wo(o))).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map((o=>wo(o))).join(",")),`Target(${s})`})(ir(i))}; limitType=${i.limitType})`}function pc(i,e){return e.isFoundDocument()&&(function(s,o){const u=o.key.path;return s.collectionGroup!==null?o.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(u):pe.isDocumentKey(s.path)?s.path.isEqual(u):s.path.isImmediateParentOf(u)})(i,e)&&(function(s,o){for(const u of Va(s))if(!u.field.isKeyField()&&o.data.field(u.field)===null)return!1;return!0})(i,e)&&(function(s,o){for(const u of s.filters)if(!u.matches(o))return!1;return!0})(i,e)&&(function(s,o){return!(s.startAt&&!(function(h,m,y){const v=Dg(h,m,y);return h.inclusive?v<=0:v<0})(s.startAt,Va(s),o)||s.endAt&&!(function(h,m,y){const v=Dg(h,m,y);return h.inclusive?v>=0:v>0})(s.endAt,Va(s),o))})(i,e)}function H1(i){return i.collectionGroup||(i.path.length%2==1?i.path.lastSegment():i.path.get(i.path.length-2))}function L_(i){return(e,t)=>{let s=!1;for(const o of Va(i)){const u=W1(o,e,t);if(u!==0)return u;s=s||o.field.isKeyField()}return 0}}function W1(i,e,t){const s=i.field.isKeyField()?pe.comparator(e.key,t.key):(function(u,h,m){const y=h.data.field(u),v=m.data.field(u);return y!==null&&v!==null?vo(y,v):ve(42886)})(i.field,e,t);switch(i.dir){case"asc":return s;case"desc":return-1*s;default:return ve(19790,{direction:i.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[o,u]of s)if(this.equalsFn(o,e))return u}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),o=this.inner[s];if(o===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let u=0;u<o.length;u++)if(this.equalsFn(o[u][0],e))return void(o[u]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],e))return s.length===1?delete this.inner[t]:s.splice(o,1),this.innerSize--,!0;return!1}forEach(e){hs(this.inner,((t,s)=>{for(const[o,u]of s)e(o,u)}))}isEmpty(){return E_(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q1=new nt(pe.comparator);function Or(){return q1}const j_=new nt(pe.comparator);function Ca(...i){let e=j_;for(const t of i)e=e.insert(t.key,t);return e}function F_(i){let e=j_;return i.forEach(((t,s)=>e=e.insert(t,s.overlayedDocument))),e}function ns(){return Oa()}function U_(){return Oa()}function Oa(){return new ds((i=>i.toString()),((i,e)=>i.isEqual(e)))}const G1=new nt(pe.comparator),K1=new _t(pe.comparator);function be(...i){let e=K1;for(const t of i)e=e.add(t);return e}const Q1=new _t(Ne);function Y1(){return Q1}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sf(i,e){if(i.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Gu(e)?"-0":e}}function z_(i){return{integerValue:""+i}}function X1(i,e){return I1(e)?z_(e):sf(i,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mc{constructor(){this._=void 0}}function J1(i,e,t){return i instanceof Ju?(function(o,u){const h={fields:{[S_]:{stringValue:I_},[x_]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return u&&Zd(u)&&(u=hc(u)),u&&(h.fields[k_]=u),{mapValue:h}})(t,e):i instanceof Wa?$_(i,e):i instanceof qa?H_(i,e):(function(o,u){const h=B_(o,u),m=Lg(h)+Lg(o.Ae);return Sd(h)&&Sd(o.Ae)?z_(m):sf(o.serializer,m)})(i,e)}function Z1(i,e,t){return i instanceof Wa?$_(i,e):i instanceof qa?H_(i,e):t}function B_(i,e){return i instanceof Zu?(function(s){return Sd(s)||(function(u){return!!u&&"doubleValue"in u})(s)})(e)?e:{integerValue:0}:null}class Ju extends mc{}class Wa extends mc{constructor(e){super(),this.elements=e}}function $_(i,e){const t=W_(e);for(const s of i.elements)t.some((o=>ur(o,s)))||t.push(s);return{arrayValue:{values:t}}}class qa extends mc{constructor(e){super(),this.elements=e}}function H_(i,e){let t=W_(e);for(const s of i.elements)t=t.filter((o=>!ur(o,s)));return{arrayValue:{values:t}}}class Zu extends mc{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function Lg(i){return ot(i.integerValue||i.doubleValue)}function W_(i){return ef(i)&&i.arrayValue.values?i.arrayValue.values.slice():[]}function eS(i,e){return i.field.isEqual(e.field)&&(function(s,o){return s instanceof Wa&&o instanceof Wa||s instanceof qa&&o instanceof qa?yo(s.elements,o.elements,ur):s instanceof Zu&&o instanceof Zu?ur(s.Ae,o.Ae):s instanceof Ju&&o instanceof Ju})(i.transform,e.transform)}class tS{constructor(e,t){this.version=e,this.transformResults=t}}class sr{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new sr}static exists(e){return new sr(void 0,e)}static updateTime(e){return new sr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ou(i,e){return i.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(i.updateTime):i.exists===void 0||i.exists===e.isFoundDocument()}class gc{}function q_(i,e){if(!i.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return i.isNoDocument()?new K_(i.key,sr.none()):new el(i.key,i.data,sr.none());{const t=i.data,s=Tn.empty();let o=new _t(Nt.comparator);for(let u of e.fields)if(!o.has(u)){let h=t.field(u);h===null&&u.length>1&&(u=u.popLast(),h=t.field(u)),h===null?s.delete(u):s.set(u,h),o=o.add(u)}return new fs(i.key,s,new Bn(o.toArray()),sr.none())}}function nS(i,e,t){i instanceof el?(function(o,u,h){const m=o.value.clone(),y=Fg(o.fieldTransforms,u,h.transformResults);m.setAll(y),u.convertToFoundDocument(h.version,m).setHasCommittedMutations()})(i,e,t):i instanceof fs?(function(o,u,h){if(!Ou(o.precondition,u))return void u.convertToUnknownDocument(h.version);const m=Fg(o.fieldTransforms,u,h.transformResults),y=u.data;y.setAll(G_(o)),y.setAll(m),u.convertToFoundDocument(h.version,y).setHasCommittedMutations()})(i,e,t):(function(o,u,h){u.convertToNoDocument(h.version).setHasCommittedMutations()})(0,e,t)}function Ma(i,e,t,s){return i instanceof el?(function(u,h,m,y){if(!Ou(u.precondition,h))return m;const v=u.value.clone(),T=Ug(u.fieldTransforms,y,h);return v.setAll(T),h.convertToFoundDocument(h.version,v).setHasLocalMutations(),null})(i,e,t,s):i instanceof fs?(function(u,h,m,y){if(!Ou(u.precondition,h))return m;const v=Ug(u.fieldTransforms,y,h),T=h.data;return T.setAll(G_(u)),T.setAll(v),h.convertToFoundDocument(h.version,T).setHasLocalMutations(),m===null?null:m.unionWith(u.fieldMask.fields).unionWith(u.fieldTransforms.map((A=>A.field)))})(i,e,t,s):(function(u,h,m){return Ou(u.precondition,h)?(h.convertToNoDocument(h.version).setHasLocalMutations(),null):m})(i,e,t)}function rS(i,e){let t=null;for(const s of i.fieldTransforms){const o=e.data.field(s.field),u=B_(s.transform,o||null);u!=null&&(t===null&&(t=Tn.empty()),t.set(s.field,u))}return t||null}function jg(i,e){return i.type===e.type&&!!i.key.isEqual(e.key)&&!!i.precondition.isEqual(e.precondition)&&!!(function(s,o){return s===void 0&&o===void 0||!(!s||!o)&&yo(s,o,((u,h)=>eS(u,h)))})(i.fieldTransforms,e.fieldTransforms)&&(i.type===0?i.value.isEqual(e.value):i.type!==1||i.data.isEqual(e.data)&&i.fieldMask.isEqual(e.fieldMask))}class el extends gc{constructor(e,t,s,o=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class fs extends gc{constructor(e,t,s,o,u=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=o,this.fieldTransforms=u,this.type=1}getFieldMask(){return this.fieldMask}}function G_(i){const e=new Map;return i.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const s=i.data.field(t);e.set(t,s)}})),e}function Fg(i,e,t){const s=new Map;Ue(i.length===t.length,32656,{Re:t.length,Ve:i.length});for(let o=0;o<t.length;o++){const u=i[o],h=u.transform,m=e.data.field(u.field);s.set(u.field,Z1(h,m,t[o]))}return s}function Ug(i,e,t){const s=new Map;for(const o of i){const u=o.transform,h=t.data.field(o.field);s.set(o.field,J1(u,h,e))}return s}class K_ extends gc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class iS extends gc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sS{constructor(e,t,s,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=o}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const u=this.mutations[o];u.key.isEqual(e.key)&&nS(u,e,s[o])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=Ma(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=Ma(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=U_();return this.mutations.forEach((o=>{const u=e.get(o.key),h=u.overlayedDocument;let m=this.applyToLocalView(h,u.mutatedFields);m=t.has(o.key)?null:m;const y=q_(h,m);y!==null&&s.set(o.key,y),h.isValidDocument()||h.convertToNoDocument(Te.min())})),s}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),be())}isEqual(e){return this.batchId===e.batchId&&yo(this.mutations,e.mutations,((t,s)=>jg(t,s)))&&yo(this.baseMutations,e.baseMutations,((t,s)=>jg(t,s)))}}class of{constructor(e,t,s,o){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=o}static from(e,t,s){Ue(e.mutations.length===s.length,58842,{me:e.mutations.length,fe:s.length});let o=(function(){return G1})();const u=e.mutations;for(let h=0;h<u.length;h++)o=o.insert(u[h].key,s[h].version);return new of(e,t,s,o)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oS{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aS{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ut,Me;function lS(i){switch(i){case G.OK:return ve(64938);case G.CANCELLED:case G.UNKNOWN:case G.DEADLINE_EXCEEDED:case G.RESOURCE_EXHAUSTED:case G.INTERNAL:case G.UNAVAILABLE:case G.UNAUTHENTICATED:return!1;case G.INVALID_ARGUMENT:case G.NOT_FOUND:case G.ALREADY_EXISTS:case G.PERMISSION_DENIED:case G.FAILED_PRECONDITION:case G.ABORTED:case G.OUT_OF_RANGE:case G.UNIMPLEMENTED:case G.DATA_LOSS:return!0;default:return ve(15467,{code:i})}}function Q_(i){if(i===void 0)return Vr("GRPC error has no .code"),G.UNKNOWN;switch(i){case ut.OK:return G.OK;case ut.CANCELLED:return G.CANCELLED;case ut.UNKNOWN:return G.UNKNOWN;case ut.DEADLINE_EXCEEDED:return G.DEADLINE_EXCEEDED;case ut.RESOURCE_EXHAUSTED:return G.RESOURCE_EXHAUSTED;case ut.INTERNAL:return G.INTERNAL;case ut.UNAVAILABLE:return G.UNAVAILABLE;case ut.UNAUTHENTICATED:return G.UNAUTHENTICATED;case ut.INVALID_ARGUMENT:return G.INVALID_ARGUMENT;case ut.NOT_FOUND:return G.NOT_FOUND;case ut.ALREADY_EXISTS:return G.ALREADY_EXISTS;case ut.PERMISSION_DENIED:return G.PERMISSION_DENIED;case ut.FAILED_PRECONDITION:return G.FAILED_PRECONDITION;case ut.ABORTED:return G.ABORTED;case ut.OUT_OF_RANGE:return G.OUT_OF_RANGE;case ut.UNIMPLEMENTED:return G.UNIMPLEMENTED;case ut.DATA_LOSS:return G.DATA_LOSS;default:return ve(39323,{code:i})}}(Me=ut||(ut={}))[Me.OK=0]="OK",Me[Me.CANCELLED=1]="CANCELLED",Me[Me.UNKNOWN=2]="UNKNOWN",Me[Me.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Me[Me.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Me[Me.NOT_FOUND=5]="NOT_FOUND",Me[Me.ALREADY_EXISTS=6]="ALREADY_EXISTS",Me[Me.PERMISSION_DENIED=7]="PERMISSION_DENIED",Me[Me.UNAUTHENTICATED=16]="UNAUTHENTICATED",Me[Me.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Me[Me.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Me[Me.ABORTED=10]="ABORTED",Me[Me.OUT_OF_RANGE=11]="OUT_OF_RANGE",Me[Me.UNIMPLEMENTED=12]="UNIMPLEMENTED",Me[Me.INTERNAL=13]="INTERNAL",Me[Me.UNAVAILABLE=14]="UNAVAILABLE",Me[Me.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uS(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cS=new yi([4294967295,4294967295],0);function zg(i){const e=uS().encode(i),t=new c_;return t.update(e),new Uint8Array(t.digest())}function Bg(i){const e=new DataView(i.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),o=e.getUint32(8,!0),u=e.getUint32(12,!0);return[new yi([t,s],0),new yi([o,u],0)]}class af{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new Ra(`Invalid padding: ${t}`);if(s<0)throw new Ra(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Ra(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new Ra(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=yi.fromNumber(this.ge)}ye(e,t,s){let o=e.add(t.multiply(yi.fromNumber(s)));return o.compare(cS)===1&&(o=new yi([o.getBits(0),o.getBits(1)],0)),o.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=zg(e),[s,o]=Bg(t);for(let u=0;u<this.hashCount;u++){const h=this.ye(s,o,u);if(!this.we(h))return!1}return!0}static create(e,t,s){const o=e%8==0?0:8-e%8,u=new Uint8Array(Math.ceil(e/8)),h=new af(u,o,t);return s.forEach((m=>h.insert(m))),h}insert(e){if(this.ge===0)return;const t=zg(e),[s,o]=Bg(t);for(let u=0;u<this.hashCount;u++){const h=this.ye(s,o,u);this.Se(h)}}Se(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class Ra extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yc{constructor(e,t,s,o,u){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=o,this.resolvedLimboDocuments=u}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const o=new Map;return o.set(e,tl.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new yc(Te.min(),o,new nt(Ne),Or(),be())}}class tl{constructor(e,t,s,o,u){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=o,this.removedDocuments=u}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new tl(s,t,be(),be(),be())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mu{constructor(e,t,s,o){this.be=e,this.removedTargetIds=t,this.key=s,this.De=o}}class Y_{constructor(e,t){this.targetId=e,this.Ce=t}}class X_{constructor(e,t,s=bt.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=o}}class $g{constructor(){this.ve=0,this.Fe=Hg(),this.Me=bt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=be(),t=be(),s=be();return this.Fe.forEach(((o,u)=>{switch(u){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:s=s.add(o);break;default:ve(38017,{changeType:u})}})),new tl(this.Me,this.xe,e,t,s)}qe(){this.Oe=!1,this.Fe=Hg()}Qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,Ue(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class hS{constructor(e){this.Ge=e,this.ze=new Map,this.je=Or(),this.Je=Su(),this.He=Su(),this.Ye=new nt(Ne)}Ze(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Xe(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const s=this.nt(t);switch(e.state){case 0:this.rt(t)&&s.Le(e.resumeToken);break;case 1:s.Ke(),s.Ne||s.qe(),s.Le(e.resumeToken);break;case 2:s.Ke(),s.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(s.We(),s.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),s.Le(e.resumeToken));break;default:ve(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((s,o)=>{this.rt(o)&&t(o)}))}st(e){const t=e.targetId,s=e.Ce.count,o=this.ot(t);if(o){const u=o.target;if(xd(u))if(s===0){const h=new pe(u.path);this.et(t,h,Ut.newNoDocument(h,Te.min()))}else Ue(s===1,20013,{expectedCount:s});else{const h=this._t(t);if(h!==s){const m=this.ut(e),y=m?this.ct(m,e,h):1;if(y!==0){this.it(t);const v=y===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(t,v)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:o=0},hashCount:u=0}=t;let h,m;try{h=Ti(s).toUint8Array()}catch(y){if(y instanceof T_)return go("Decoding the base64 bloom filter in existence filter failed ("+y.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw y}try{m=new af(h,o,u)}catch(y){return go(y instanceof Ra?"BloomFilter error: ":"Applying bloom filter failed: ",y),null}return m.ge===0?null:m}ct(e,t,s){return t.Ce.count===s-this.Pt(e,t.targetId)?0:2}Pt(e,t){const s=this.Ge.getRemoteKeysForTarget(t);let o=0;return s.forEach((u=>{const h=this.Ge.ht(),m=`projects/${h.projectId}/databases/${h.database}/documents/${u.path.canonicalString()}`;e.mightContain(m)||(this.et(t,u,null),o++)})),o}Tt(e){const t=new Map;this.ze.forEach(((u,h)=>{const m=this.ot(h);if(m){if(u.current&&xd(m.target)){const y=new pe(m.target.path);this.It(y).has(h)||this.Et(h,y)||this.et(h,y,Ut.newNoDocument(y,e))}u.Be&&(t.set(h,u.ke()),u.qe())}}));let s=be();this.He.forEach(((u,h)=>{let m=!0;h.forEachWhile((y=>{const v=this.ot(y);return!v||v.purpose==="TargetPurposeLimboResolution"||(m=!1,!1)})),m&&(s=s.add(u))})),this.je.forEach(((u,h)=>h.setReadTime(e)));const o=new yc(e,t,this.Ye,this.je,s);return this.je=Or(),this.Je=Su(),this.He=Su(),this.Ye=new nt(Ne),o}Xe(e,t){if(!this.rt(e))return;const s=this.Et(e,t.key)?2:0;this.nt(e).Qe(t.key,s),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.He=this.He.insert(t.key,this.dt(t.key).add(e))}et(e,t,s){if(!this.rt(e))return;const o=this.nt(e);this.Et(e,t)?o.Qe(t,1):o.$e(t),this.He=this.He.insert(t,this.dt(t).delete(e)),this.He=this.He.insert(t,this.dt(t).add(e)),s&&(this.je=this.je.insert(t,s))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let t=this.ze.get(e);return t||(t=new $g,this.ze.set(e,t)),t}dt(e){let t=this.He.get(e);return t||(t=new _t(Ne),this.He=this.He.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new _t(Ne),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||re("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new $g),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function Su(){return new nt(pe.comparator)}function Hg(){return new nt(pe.comparator)}const dS={asc:"ASCENDING",desc:"DESCENDING"},fS={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},pS={and:"AND",or:"OR"};class mS{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Cd(i,e){return i.useProto3Json||cc(e)?e:{value:e}}function ec(i,e){return i.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function J_(i,e){return i.useProto3Json?e.toBase64():e.toUint8Array()}function gS(i,e){return ec(i,e.toTimestamp())}function or(i){return Ue(!!i,49232),Te.fromTimestamp((function(t){const s=Ei(t);return new Qe(s.seconds,s.nanos)})(i))}function lf(i,e){return Rd(i,e).canonicalString()}function Rd(i,e){const t=(function(o){return new Ke(["projects",o.projectId,"databases",o.database])})(i).child("documents");return e===void 0?t:t.child(e)}function Z_(i){const e=Ke.fromString(i);return Ue(iv(e),10190,{key:e.toString()}),e}function Pd(i,e){return lf(i.databaseId,e.path)}function ld(i,e){const t=Z_(e);if(t.get(1)!==i.databaseId.projectId)throw new le(G.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+i.databaseId.projectId);if(t.get(3)!==i.databaseId.database)throw new le(G.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+i.databaseId.database);return new pe(tv(t))}function ev(i,e){return lf(i.databaseId,e)}function yS(i){const e=Z_(i);return e.length===4?Ke.emptyPath():tv(e)}function Nd(i){return new Ke(["projects",i.databaseId.projectId,"databases",i.databaseId.database]).canonicalString()}function tv(i){return Ue(i.length>4&&i.get(4)==="documents",29091,{key:i.toString()}),i.popFirst(5)}function Wg(i,e,t){return{name:Pd(i,e),fields:t.value.mapValue.fields}}function _S(i,e){let t;if("targetChange"in e){e.targetChange;const s=(function(v){return v==="NO_CHANGE"?0:v==="ADD"?1:v==="REMOVE"?2:v==="CURRENT"?3:v==="RESET"?4:ve(39313,{state:v})})(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],u=(function(v,T){return v.useProto3Json?(Ue(T===void 0||typeof T=="string",58123),bt.fromBase64String(T||"")):(Ue(T===void 0||T instanceof Buffer||T instanceof Uint8Array,16193),bt.fromUint8Array(T||new Uint8Array))})(i,e.targetChange.resumeToken),h=e.targetChange.cause,m=h&&(function(v){const T=v.code===void 0?G.UNKNOWN:Q_(v.code);return new le(T,v.message||"")})(h);t=new X_(s,o,u,m||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const o=ld(i,s.document.name),u=or(s.document.updateTime),h=s.document.createTime?or(s.document.createTime):Te.min(),m=new Tn({mapValue:{fields:s.document.fields}}),y=Ut.newFoundDocument(o,u,h,m),v=s.targetIds||[],T=s.removedTargetIds||[];t=new Mu(v,T,y.key,y)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const o=ld(i,s.document),u=s.readTime?or(s.readTime):Te.min(),h=Ut.newNoDocument(o,u),m=s.removedTargetIds||[];t=new Mu([],m,h.key,h)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const o=ld(i,s.document),u=s.removedTargetIds||[];t=new Mu([],u,o,null)}else{if(!("filter"in e))return ve(11601,{Rt:e});{e.filter;const s=e.filter;s.targetId;const{count:o=0,unchangedNames:u}=s,h=new aS(o,u),m=s.targetId;t=new Y_(m,h)}}return t}function vS(i,e){let t;if(e instanceof el)t={update:Wg(i,e.key,e.value)};else if(e instanceof K_)t={delete:Pd(i,e.key)};else if(e instanceof fs)t={update:Wg(i,e.key,e.data),updateMask:CS(e.fieldMask)};else{if(!(e instanceof iS))return ve(16599,{Vt:e.type});t={verify:Pd(i,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((s=>(function(u,h){const m=h.transform;if(m instanceof Ju)return{fieldPath:h.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(m instanceof Wa)return{fieldPath:h.field.canonicalString(),appendMissingElements:{values:m.elements}};if(m instanceof qa)return{fieldPath:h.field.canonicalString(),removeAllFromArray:{values:m.elements}};if(m instanceof Zu)return{fieldPath:h.field.canonicalString(),increment:m.Ae};throw ve(20930,{transform:h.transform})})(0,s)))),e.precondition.isNone||(t.currentDocument=(function(o,u){return u.updateTime!==void 0?{updateTime:gS(o,u.updateTime)}:u.exists!==void 0?{exists:u.exists}:ve(27497)})(i,e.precondition)),t}function wS(i,e){return i&&i.length>0?(Ue(e!==void 0,14353),i.map((t=>(function(o,u){let h=o.updateTime?or(o.updateTime):or(u);return h.isEqual(Te.min())&&(h=or(u)),new tS(h,o.transformResults||[])})(t,e)))):[]}function ES(i,e){return{documents:[ev(i,e.path)]}}function TS(i,e){const t={structuredQuery:{}},s=e.path;let o;e.collectionGroup!==null?(o=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=ev(i,o);const u=(function(v){if(v.length!==0)return rv(cr.create(v,"and"))})(e.filters);u&&(t.structuredQuery.where=u);const h=(function(v){if(v.length!==0)return v.map((T=>(function(R){return{field:ao(R.field),direction:kS(R.dir)}})(T)))})(e.orderBy);h&&(t.structuredQuery.orderBy=h);const m=Cd(i,e.limit);return m!==null&&(t.structuredQuery.limit=m),e.startAt&&(t.structuredQuery.startAt=(function(v){return{before:v.inclusive,values:v.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(v){return{before:!v.inclusive,values:v.position}})(e.endAt)),{ft:t,parent:o}}function IS(i){let e=yS(i.parent);const t=i.structuredQuery,s=t.from?t.from.length:0;let o=null;if(s>0){Ue(s===1,65062);const T=t.from[0];T.allDescendants?o=T.collectionId:e=e.child(T.collectionId)}let u=[];t.where&&(u=(function(A){const R=nv(A);return R instanceof cr&&b_(R)?R.getFilters():[R]})(t.where));let h=[];t.orderBy&&(h=(function(A){return A.map((R=>(function($){return new Xu(lo($.field),(function(B){switch(B){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})($.direction))})(R)))})(t.orderBy));let m=null;t.limit&&(m=(function(A){let R;return R=typeof A=="object"?A.value:A,cc(R)?null:R})(t.limit));let y=null;t.startAt&&(y=(function(A){const R=!!A.before,j=A.values||[];return new Yu(j,R)})(t.startAt));let v=null;return t.endAt&&(v=(function(A){const R=!A.before,j=A.values||[];return new Yu(j,R)})(t.endAt)),z1(e,o,h,u,m,"F",y,v)}function SS(i,e){const t=(function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ve(28987,{purpose:o})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function nv(i){return i.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=lo(t.unaryFilter.field);return gt.create(s,"==",{doubleValue:NaN});case"IS_NULL":const o=lo(t.unaryFilter.field);return gt.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const u=lo(t.unaryFilter.field);return gt.create(u,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const h=lo(t.unaryFilter.field);return gt.create(h,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ve(61313);default:return ve(60726)}})(i):i.fieldFilter!==void 0?(function(t){return gt.create(lo(t.fieldFilter.field),(function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ve(58110);default:return ve(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(i):i.compositeFilter!==void 0?(function(t){return cr.create(t.compositeFilter.filters.map((s=>nv(s))),(function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return ve(1026)}})(t.compositeFilter.op))})(i):ve(30097,{filter:i})}function kS(i){return dS[i]}function xS(i){return fS[i]}function AS(i){return pS[i]}function ao(i){return{fieldPath:i.canonicalString()}}function lo(i){return Nt.fromServerFormat(i.fieldPath)}function rv(i){return i instanceof gt?(function(t){if(t.op==="=="){if(bg(t.value))return{unaryFilter:{field:ao(t.field),op:"IS_NAN"}};if(Ng(t.value))return{unaryFilter:{field:ao(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(bg(t.value))return{unaryFilter:{field:ao(t.field),op:"IS_NOT_NAN"}};if(Ng(t.value))return{unaryFilter:{field:ao(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ao(t.field),op:xS(t.op),value:t.value}}})(i):i instanceof cr?(function(t){const s=t.getFilters().map((o=>rv(o)));return s.length===1?s[0]:{compositeFilter:{op:AS(t.op),filters:s}}})(i):ve(54877,{filter:i})}function CS(i){const e=[];return i.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function iv(i){return i.length>=4&&i.get(0)==="projects"&&i.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{constructor(e,t,s,o,u=Te.min(),h=Te.min(),m=bt.EMPTY_BYTE_STRING,y=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=o,this.snapshotVersion=u,this.lastLimboFreeSnapshotVersion=h,this.resumeToken=m,this.expectedCount=y}withSequenceNumber(e){return new fi(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new fi(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new fi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new fi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RS{constructor(e){this.yt=e}}function PS(i){const e=IS({parent:i.parent,structuredQuery:i.structuredQuery});return i.limitType==="LAST"?Ad(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NS{constructor(){this.Cn=new bS}addToCollectionParentIndex(e,t){return this.Cn.add(t),W.resolve()}getCollectionParents(e,t){return W.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return W.resolve()}deleteFieldIndex(e,t){return W.resolve()}deleteAllFieldIndexes(e){return W.resolve()}createTargetIndexes(e,t){return W.resolve()}getDocumentsMatchingTarget(e,t){return W.resolve(null)}getIndexType(e,t){return W.resolve(0)}getFieldIndexes(e,t){return W.resolve([])}getNextCollectionGroupToUpdate(e){return W.resolve(null)}getMinOffset(e,t){return W.resolve(wi.min())}getMinOffsetFromCollectionGroup(e,t){return W.resolve(wi.min())}updateCollectionGroup(e,t,s){return W.resolve()}updateIndexEntries(e,t){return W.resolve()}}class bS{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t]||new _t(Ke.comparator),u=!o.has(s);return this.index[t]=o.add(s),u}has(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t];return o&&o.has(s)}getEntries(e){return(this.index[e]||new _t(Ke.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qg={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},sv=41943040;class en{static withCacheSize(e){return new en(e,en.DEFAULT_COLLECTION_PERCENTILE,en.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */en.DEFAULT_COLLECTION_PERCENTILE=10,en.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,en.DEFAULT=new en(sv,en.DEFAULT_COLLECTION_PERCENTILE,en.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),en.DISABLED=new en(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eo{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new Eo(0)}static cr(){return new Eo(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gg="LruGarbageCollector",DS=1048576;function Kg([i,e],[t,s]){const o=Ne(i,t);return o===0?Ne(e,s):o}class VS{constructor(e){this.Ir=e,this.buffer=new _t(Kg),this.Er=0}dr(){return++this.Er}Ar(e){const t=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();Kg(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class OS{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){re(Gg,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Co(t)?re(Gg,"Ignoring IndexedDB error during garbage collection: ",t):await Ao(t)}await this.Vr(3e5)}))}}class MS{constructor(e,t){this.mr=e,this.params=t}calculateTargetCount(e,t){return this.mr.gr(e).next((s=>Math.floor(t/100*s)))}nthSequenceNumber(e,t){if(t===0)return W.resolve(uc.ce);const s=new VS(t);return this.mr.forEachTarget(e,(o=>s.Ar(o.sequenceNumber))).next((()=>this.mr.pr(e,(o=>s.Ar(o))))).next((()=>s.maxValue))}removeTargets(e,t,s){return this.mr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.mr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(re("LruGarbageCollector","Garbage collection skipped; disabled"),W.resolve(qg)):this.getCacheSize(e).next((s=>s<this.params.cacheSizeCollectionThreshold?(re("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),qg):this.yr(e,t)))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,t){let s,o,u,h,m,y,v;const T=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((A=>(A>this.params.maximumSequenceNumbersToCollect?(re("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${A}`),o=this.params.maximumSequenceNumbersToCollect):o=A,h=Date.now(),this.nthSequenceNumber(e,o)))).next((A=>(s=A,m=Date.now(),this.removeTargets(e,s,t)))).next((A=>(u=A,y=Date.now(),this.removeOrphanedDocuments(e,s)))).next((A=>(v=Date.now(),so()<=Pe.DEBUG&&re("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${h-T}ms
	Determined least recently used ${o} in `+(m-h)+`ms
	Removed ${u} targets in `+(y-m)+`ms
	Removed ${A} documents in `+(v-y)+`ms
Total Duration: ${v-T}ms`),W.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:u,documentsRemoved:A}))))}}function LS(i,e){return new MS(i,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jS{constructor(){this.changes=new ds((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Ut.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?W.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FS{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class US{constructor(e,t,s,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=o}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next((o=>(s=o,this.remoteDocumentCache.getEntry(e,t)))).next((o=>(s!==null&&Ma(s.mutation,o,Bn.empty(),Qe.now()),o)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.getLocalViewOfDocuments(e,s,be()).next((()=>s))))}getLocalViewOfDocuments(e,t,s=be()){const o=ns();return this.populateOverlays(e,o,t).next((()=>this.computeViews(e,t,o,s).next((u=>{let h=Ca();return u.forEach(((m,y)=>{h=h.insert(m,y.overlayedDocument)})),h}))))}getOverlayedDocuments(e,t){const s=ns();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,be())))}populateOverlays(e,t,s){const o=[];return s.forEach((u=>{t.has(u)||o.push(u)})),this.documentOverlayCache.getOverlays(e,o).next((u=>{u.forEach(((h,m)=>{t.set(h,m)}))}))}computeViews(e,t,s,o){let u=Or();const h=Oa(),m=(function(){return Oa()})();return t.forEach(((y,v)=>{const T=s.get(v.key);o.has(v.key)&&(T===void 0||T.mutation instanceof fs)?u=u.insert(v.key,v):T!==void 0?(h.set(v.key,T.mutation.getFieldMask()),Ma(T.mutation,v,T.mutation.getFieldMask(),Qe.now())):h.set(v.key,Bn.empty())})),this.recalculateAndSaveOverlays(e,u).next((y=>(y.forEach(((v,T)=>h.set(v,T))),t.forEach(((v,T)=>m.set(v,new FS(T,h.get(v)??null)))),m)))}recalculateAndSaveOverlays(e,t){const s=Oa();let o=new nt(((h,m)=>h-m)),u=be();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((h=>{for(const m of h)m.keys().forEach((y=>{const v=t.get(y);if(v===null)return;let T=s.get(y)||Bn.empty();T=m.applyToLocalView(v,T),s.set(y,T);const A=(o.get(m.batchId)||be()).add(y);o=o.insert(m.batchId,A)}))})).next((()=>{const h=[],m=o.getReverseIterator();for(;m.hasNext();){const y=m.getNext(),v=y.key,T=y.value,A=U_();T.forEach((R=>{if(!u.has(R)){const j=q_(t.get(R),s.get(R));j!==null&&A.set(R,j),u=u.add(R)}})),h.push(this.documentOverlayCache.saveOverlays(e,v,A))}return W.waitFor(h)})).next((()=>s))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.recalculateAndSaveOverlays(e,s)))}getDocumentsMatchingQuery(e,t,s,o){return(function(h){return pe.isDocumentKey(h.path)&&h.collectionGroup===null&&h.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):B1(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,o):this.getDocumentsMatchingCollectionQuery(e,t,s,o)}getNextDocuments(e,t,s,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,o).next((u=>{const h=o-u.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,o-u.size):W.resolve(ns());let m=za,y=u;return h.next((v=>W.forEach(v,((T,A)=>(m<A.largestBatchId&&(m=A.largestBatchId),u.get(T)?W.resolve():this.remoteDocumentCache.getEntry(e,T).next((R=>{y=y.insert(T,R)}))))).next((()=>this.populateOverlays(e,v,u))).next((()=>this.computeViews(e,y,v,be()))).next((T=>({batchId:m,changes:F_(T)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new pe(t)).next((s=>{let o=Ca();return s.isFoundDocument()&&(o=o.insert(s.key,s)),o}))}getDocumentsMatchingCollectionGroupQuery(e,t,s,o){const u=t.collectionGroup;let h=Ca();return this.indexManager.getCollectionParents(e,u).next((m=>W.forEach(m,(y=>{const v=(function(A,R){return new dc(R,null,A.explicitOrderBy.slice(),A.filters.slice(),A.limit,A.limitType,A.startAt,A.endAt)})(t,y.child(u));return this.getDocumentsMatchingCollectionQuery(e,v,s,o).next((T=>{T.forEach(((A,R)=>{h=h.insert(A,R)}))}))})).next((()=>h))))}getDocumentsMatchingCollectionQuery(e,t,s,o){let u;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next((h=>(u=h,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,u,o)))).next((h=>{u.forEach(((y,v)=>{const T=v.getKey();h.get(T)===null&&(h=h.insert(T,Ut.newInvalidDocument(T)))}));let m=Ca();return h.forEach(((y,v)=>{const T=u.get(y);T!==void 0&&Ma(T.mutation,v,Bn.empty(),Qe.now()),pc(t,v)&&(m=m.insert(y,v))})),m}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zS{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,t){return W.resolve(this.Lr.get(t))}saveBundleMetadata(e,t){return this.Lr.set(t.id,(function(o){return{id:o.id,version:o.version,createTime:or(o.createTime)}})(t)),W.resolve()}getNamedQuery(e,t){return W.resolve(this.kr.get(t))}saveNamedQuery(e,t){return this.kr.set(t.name,(function(o){return{name:o.name,query:PS(o.bundledQuery),readTime:or(o.readTime)}})(t)),W.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BS{constructor(){this.overlays=new nt(pe.comparator),this.qr=new Map}getOverlay(e,t){return W.resolve(this.overlays.get(t))}getOverlays(e,t){const s=ns();return W.forEach(t,(o=>this.getOverlay(e,o).next((u=>{u!==null&&s.set(o,u)})))).next((()=>s))}saveOverlays(e,t,s){return s.forEach(((o,u)=>{this.St(e,t,u)})),W.resolve()}removeOverlaysForBatchId(e,t,s){const o=this.qr.get(s);return o!==void 0&&(o.forEach((u=>this.overlays=this.overlays.remove(u))),this.qr.delete(s)),W.resolve()}getOverlaysForCollection(e,t,s){const o=ns(),u=t.length+1,h=new pe(t.child("")),m=this.overlays.getIteratorFrom(h);for(;m.hasNext();){const y=m.getNext().value,v=y.getKey();if(!t.isPrefixOf(v.path))break;v.path.length===u&&y.largestBatchId>s&&o.set(y.getKey(),y)}return W.resolve(o)}getOverlaysForCollectionGroup(e,t,s,o){let u=new nt(((v,T)=>v-T));const h=this.overlays.getIterator();for(;h.hasNext();){const v=h.getNext().value;if(v.getKey().getCollectionGroup()===t&&v.largestBatchId>s){let T=u.get(v.largestBatchId);T===null&&(T=ns(),u=u.insert(v.largestBatchId,T)),T.set(v.getKey(),v)}}const m=ns(),y=u.getIterator();for(;y.hasNext()&&(y.getNext().value.forEach(((v,T)=>m.set(v,T))),!(m.size()>=o)););return W.resolve(m)}St(e,t,s){const o=this.overlays.get(s.key);if(o!==null){const h=this.qr.get(o.largestBatchId).delete(s.key);this.qr.set(o.largestBatchId,h)}this.overlays=this.overlays.insert(s.key,new oS(t,s));let u=this.qr.get(t);u===void 0&&(u=be(),this.qr.set(t,u)),this.qr.set(t,u.add(s.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $S{constructor(){this.sessionToken=bt.EMPTY_BYTE_STRING}getSessionToken(e){return W.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,W.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uf{constructor(){this.Qr=new _t(kt.$r),this.Ur=new _t(kt.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,t){const s=new kt(e,t);this.Qr=this.Qr.add(s),this.Ur=this.Ur.add(s)}Wr(e,t){e.forEach((s=>this.addReference(s,t)))}removeReference(e,t){this.Gr(new kt(e,t))}zr(e,t){e.forEach((s=>this.removeReference(s,t)))}jr(e){const t=new pe(new Ke([])),s=new kt(t,e),o=new kt(t,e+1),u=[];return this.Ur.forEachInRange([s,o],(h=>{this.Gr(h),u.push(h.key)})),u}Jr(){this.Qr.forEach((e=>this.Gr(e)))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const t=new pe(new Ke([])),s=new kt(t,e),o=new kt(t,e+1);let u=be();return this.Ur.forEachInRange([s,o],(h=>{u=u.add(h.key)})),u}containsKey(e){const t=new kt(e,0),s=this.Qr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class kt{constructor(e,t){this.key=e,this.Yr=t}static $r(e,t){return pe.comparator(e.key,t.key)||Ne(e.Yr,t.Yr)}static Kr(e,t){return Ne(e.Yr,t.Yr)||pe.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HS{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.tr=1,this.Zr=new _t(kt.$r)}checkEmpty(e){return W.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,o){const u=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const h=new sS(u,t,s,o);this.mutationQueue.push(h);for(const m of o)this.Zr=this.Zr.add(new kt(m.key,u)),this.indexManager.addToCollectionParentIndex(e,m.key.path.popLast());return W.resolve(h)}lookupMutationBatch(e,t){return W.resolve(this.Xr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,o=this.ei(s),u=o<0?0:o;return W.resolve(this.mutationQueue.length>u?this.mutationQueue[u]:null)}getHighestUnacknowledgedBatchId(){return W.resolve(this.mutationQueue.length===0?Jd:this.tr-1)}getAllMutationBatches(e){return W.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new kt(t,0),o=new kt(t,Number.POSITIVE_INFINITY),u=[];return this.Zr.forEachInRange([s,o],(h=>{const m=this.Xr(h.Yr);u.push(m)})),W.resolve(u)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new _t(Ne);return t.forEach((o=>{const u=new kt(o,0),h=new kt(o,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([u,h],(m=>{s=s.add(m.Yr)}))})),W.resolve(this.ti(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,o=s.length+1;let u=s;pe.isDocumentKey(u)||(u=u.child(""));const h=new kt(new pe(u),0);let m=new _t(Ne);return this.Zr.forEachWhile((y=>{const v=y.key.path;return!!s.isPrefixOf(v)&&(v.length===o&&(m=m.add(y.Yr)),!0)}),h),W.resolve(this.ti(m))}ti(e){const t=[];return e.forEach((s=>{const o=this.Xr(s);o!==null&&t.push(o)})),t}removeMutationBatch(e,t){Ue(this.ni(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Zr;return W.forEach(t.mutations,(o=>{const u=new kt(o.key,t.batchId);return s=s.delete(u),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)})).next((()=>{this.Zr=s}))}ir(e){}containsKey(e,t){const s=new kt(t,0),o=this.Zr.firstAfterOrEqual(s);return W.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,W.resolve()}ni(e,t){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const t=this.ei(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WS{constructor(e){this.ri=e,this.docs=(function(){return new nt(pe.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,o=this.docs.get(s),u=o?o.size:0,h=this.ri(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:h}),this.size+=h-u,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return W.resolve(s?s.document.mutableCopy():Ut.newInvalidDocument(t))}getEntries(e,t){let s=Or();return t.forEach((o=>{const u=this.docs.get(o);s=s.insert(o,u?u.document.mutableCopy():Ut.newInvalidDocument(o))})),W.resolve(s)}getDocumentsMatchingQuery(e,t,s,o){let u=Or();const h=t.path,m=new pe(h.child("__id-9223372036854775808__")),y=this.docs.getIteratorFrom(m);for(;y.hasNext();){const{key:v,value:{document:T}}=y.getNext();if(!h.isPrefixOf(v.path))break;v.path.length>h.length+1||v1(_1(T),s)<=0||(o.has(T.key)||pc(t,T))&&(u=u.insert(T.key,T.mutableCopy()))}return W.resolve(u)}getAllFromCollectionGroup(e,t,s,o){ve(9500)}ii(e,t){return W.forEach(this.docs,(s=>t(s)))}newChangeBuffer(e){return new qS(this)}getSize(e){return W.resolve(this.size)}}class qS extends jS{constructor(e){super(),this.Nr=e}applyChanges(e){const t=[];return this.changes.forEach(((s,o)=>{o.isValidDocument()?t.push(this.Nr.addEntry(e,o)):this.Nr.removeEntry(s)})),W.waitFor(t)}getFromCache(e,t){return this.Nr.getEntry(e,t)}getAllFromCache(e,t){return this.Nr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GS{constructor(e){this.persistence=e,this.si=new ds((t=>tf(t)),nf),this.lastRemoteSnapshotVersion=Te.min(),this.highestTargetId=0,this.oi=0,this._i=new uf,this.targetCount=0,this.ai=Eo.ur()}forEachTarget(e,t){return this.si.forEach(((s,o)=>t(o))),W.resolve()}getLastRemoteSnapshotVersion(e){return W.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return W.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),W.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.oi&&(this.oi=t),W.resolve()}Pr(e){this.si.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ai=new Eo(t),this.highestTargetId=t),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,t){return this.Pr(t),this.targetCount+=1,W.resolve()}updateTargetData(e,t){return this.Pr(t),W.resolve()}removeTargetData(e,t){return this.si.delete(t.target),this._i.jr(t.targetId),this.targetCount-=1,W.resolve()}removeTargets(e,t,s){let o=0;const u=[];return this.si.forEach(((h,m)=>{m.sequenceNumber<=t&&s.get(m.targetId)===null&&(this.si.delete(h),u.push(this.removeMatchingKeysForTargetId(e,m.targetId)),o++)})),W.waitFor(u).next((()=>o))}getTargetCount(e){return W.resolve(this.targetCount)}getTargetData(e,t){const s=this.si.get(t)||null;return W.resolve(s)}addMatchingKeys(e,t,s){return this._i.Wr(t,s),W.resolve()}removeMatchingKeys(e,t,s){this._i.zr(t,s);const o=this.persistence.referenceDelegate,u=[];return o&&t.forEach((h=>{u.push(o.markPotentiallyOrphaned(e,h))})),W.waitFor(u)}removeMatchingKeysForTargetId(e,t){return this._i.jr(t),W.resolve()}getMatchingKeysForTargetId(e,t){const s=this._i.Hr(t);return W.resolve(s)}containsKey(e,t){return W.resolve(this._i.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ov{constructor(e,t){this.ui={},this.overlays={},this.ci=new uc(0),this.li=!1,this.li=!0,this.hi=new $S,this.referenceDelegate=e(this),this.Pi=new GS(this),this.indexManager=new NS,this.remoteDocumentCache=(function(o){return new WS(o)})((s=>this.referenceDelegate.Ti(s))),this.serializer=new RS(t),this.Ii=new zS(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new BS,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.ui[e.toKey()];return s||(s=new HS(t,this.referenceDelegate),this.ui[e.toKey()]=s),s}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,t,s){re("MemoryPersistence","Starting transaction:",e);const o=new KS(this.ci.next());return this.referenceDelegate.Ei(),s(o).next((u=>this.referenceDelegate.di(o).next((()=>u)))).toPromise().then((u=>(o.raiseOnCommittedEvent(),u)))}Ai(e,t){return W.or(Object.values(this.ui).map((s=>()=>s.containsKey(e,t))))}}class KS extends E1{constructor(e){super(),this.currentSequenceNumber=e}}class cf{constructor(e){this.persistence=e,this.Ri=new uf,this.Vi=null}static mi(e){return new cf(e)}get fi(){if(this.Vi)return this.Vi;throw ve(60996)}addReference(e,t,s){return this.Ri.addReference(s,t),this.fi.delete(s.toString()),W.resolve()}removeReference(e,t,s){return this.Ri.removeReference(s,t),this.fi.add(s.toString()),W.resolve()}markPotentiallyOrphaned(e,t){return this.fi.add(t.toString()),W.resolve()}removeTarget(e,t){this.Ri.jr(t.targetId).forEach((o=>this.fi.add(o.toString())));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next((o=>{o.forEach((u=>this.fi.add(u.toString())))})).next((()=>s.removeTargetData(e,t)))}Ei(){this.Vi=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return W.forEach(this.fi,(s=>{const o=pe.fromPath(s);return this.gi(e,o).next((u=>{u||t.removeEntry(o,Te.min())}))})).next((()=>(this.Vi=null,t.apply(e))))}updateLimboDocument(e,t){return this.gi(e,t).next((s=>{s?this.fi.delete(t.toString()):this.fi.add(t.toString())}))}Ti(e){return 0}gi(e,t){return W.or([()=>W.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ai(e,t)])}}class tc{constructor(e,t){this.persistence=e,this.pi=new ds((s=>S1(s.path)),((s,o)=>s.isEqual(o))),this.garbageCollector=LS(this,t)}static mi(e,t){return new tc(e,t)}Ei(){}di(e){return W.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}gr(e){const t=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next((s=>t.next((o=>s+o))))}wr(e){let t=0;return this.pr(e,(s=>{t++})).next((()=>t))}pr(e,t){return W.forEach(this.pi,((s,o)=>this.br(e,s,o).next((u=>u?W.resolve():t(o)))))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const o=this.persistence.getRemoteDocumentCache(),u=o.newChangeBuffer();return o.ii(e,(h=>this.br(e,h,t).next((m=>{m||(s++,u.removeEntry(h,Te.min()))})))).next((()=>u.apply(e))).next((()=>s))}markPotentiallyOrphaned(e,t){return this.pi.set(t,e.currentSequenceNumber),W.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.pi.set(s,e.currentSequenceNumber),W.resolve()}removeReference(e,t,s){return this.pi.set(s,e.currentSequenceNumber),W.resolve()}updateLimboDocument(e,t){return this.pi.set(t,e.currentSequenceNumber),W.resolve()}Ti(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Du(e.data.value)),t}br(e,t,s){return W.or([()=>this.persistence.Ai(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.pi.get(t);return W.resolve(o!==void 0&&o>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hf{constructor(e,t,s,o){this.targetId=e,this.fromCache=t,this.Es=s,this.ds=o}static As(e,t){let s=be(),o=be();for(const u of t.docChanges)switch(u.type){case 0:s=s.add(u.doc.key);break;case 1:o=o.add(u.doc.key)}return new hf(e,t.fromCache,s,o)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QS{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YS{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return kw()?8:T1(zt())>0?6:4})()}initialize(e,t){this.ps=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,s,o){const u={result:null};return this.ys(e,t).next((h=>{u.result=h})).next((()=>{if(!u.result)return this.ws(e,t,o,s).next((h=>{u.result=h}))})).next((()=>{if(u.result)return;const h=new QS;return this.Ss(e,t,h).next((m=>{if(u.result=m,this.Vs)return this.bs(e,t,h,m.size)}))})).next((()=>u.result))}bs(e,t,s,o){return s.documentReadCount<this.fs?(so()<=Pe.DEBUG&&re("QueryEngine","SDK will not create cache indexes for query:",oo(t),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),W.resolve()):(so()<=Pe.DEBUG&&re("QueryEngine","Query:",oo(t),"scans",s.documentReadCount,"local documents and returns",o,"documents as results."),s.documentReadCount>this.gs*o?(so()<=Pe.DEBUG&&re("QueryEngine","The SDK decides to create cache indexes for query:",oo(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,ir(t))):W.resolve())}ys(e,t){if(Mg(t))return W.resolve(null);let s=ir(t);return this.indexManager.getIndexType(e,s).next((o=>o===0?null:(t.limit!==null&&o===1&&(t=Ad(t,null,"F"),s=ir(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next((u=>{const h=be(...u);return this.ps.getDocuments(e,h).next((m=>this.indexManager.getMinOffset(e,s).next((y=>{const v=this.Ds(t,m);return this.Cs(t,v,h,y.readTime)?this.ys(e,Ad(t,null,"F")):this.vs(e,v,t,y)}))))})))))}ws(e,t,s,o){return Mg(t)||o.isEqual(Te.min())?W.resolve(null):this.ps.getDocuments(e,s).next((u=>{const h=this.Ds(t,u);return this.Cs(t,h,s,o)?W.resolve(null):(so()<=Pe.DEBUG&&re("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),oo(t)),this.vs(e,h,t,y1(o,za)).next((m=>m)))}))}Ds(e,t){let s=new _t(L_(e));return t.forEach(((o,u)=>{pc(e,u)&&(s=s.add(u))})),s}Cs(e,t,s,o){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const u=e.limitType==="F"?t.last():t.first();return!!u&&(u.hasPendingWrites||u.version.compareTo(o)>0)}Ss(e,t,s){return so()<=Pe.DEBUG&&re("QueryEngine","Using full collection scan to execute query:",oo(t)),this.ps.getDocumentsMatchingQuery(e,t,wi.min(),s)}vs(e,t,s,o){return this.ps.getDocumentsMatchingQuery(e,s,o).next((u=>(t.forEach((h=>{u=u.insert(h.key,h)})),u)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const df="LocalStore",XS=3e8;class JS{constructor(e,t,s,o){this.persistence=e,this.Fs=t,this.serializer=o,this.Ms=new nt(Ne),this.xs=new ds((u=>tf(u)),nf),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(s)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new US(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Ms)))}}function ZS(i,e,t,s){return new JS(i,e,t,s)}async function av(i,e){const t=Ie(i);return await t.persistence.runTransaction("Handle user change","readonly",(s=>{let o;return t.mutationQueue.getAllMutationBatches(s).next((u=>(o=u,t.Bs(e),t.mutationQueue.getAllMutationBatches(s)))).next((u=>{const h=[],m=[];let y=be();for(const v of o){h.push(v.batchId);for(const T of v.mutations)y=y.add(T.key)}for(const v of u){m.push(v.batchId);for(const T of v.mutations)y=y.add(T.key)}return t.localDocuments.getDocuments(s,y).next((v=>({Ls:v,removedBatchIds:h,addedBatchIds:m})))}))}))}function ek(i,e){const t=Ie(i);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(s=>{const o=e.batch.keys(),u=t.Ns.newChangeBuffer({trackRemovals:!0});return(function(m,y,v,T){const A=v.batch,R=A.keys();let j=W.resolve();return R.forEach(($=>{j=j.next((()=>T.getEntry(y,$))).next((Y=>{const B=v.docVersions.get($);Ue(B!==null,48541),Y.version.compareTo(B)<0&&(A.applyToRemoteDocument(Y,v),Y.isValidDocument()&&(Y.setReadTime(v.commitVersion),T.addEntry(Y)))}))})),j.next((()=>m.mutationQueue.removeMutationBatch(y,A)))})(t,s,e,u).next((()=>u.apply(s))).next((()=>t.mutationQueue.performConsistencyCheck(s))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(s,o,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,(function(m){let y=be();for(let v=0;v<m.mutationResults.length;++v)m.mutationResults[v].transformResults.length>0&&(y=y.add(m.batch.mutations[v].key));return y})(e)))).next((()=>t.localDocuments.getDocuments(s,o)))}))}function lv(i){const e=Ie(i);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Pi.getLastRemoteSnapshotVersion(t)))}function tk(i,e){const t=Ie(i),s=e.snapshotVersion;let o=t.Ms;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(u=>{const h=t.Ns.newChangeBuffer({trackRemovals:!0});o=t.Ms;const m=[];e.targetChanges.forEach(((T,A)=>{const R=o.get(A);if(!R)return;m.push(t.Pi.removeMatchingKeys(u,T.removedDocuments,A).next((()=>t.Pi.addMatchingKeys(u,T.addedDocuments,A))));let j=R.withSequenceNumber(u.currentSequenceNumber);e.targetMismatches.get(A)!==null?j=j.withResumeToken(bt.EMPTY_BYTE_STRING,Te.min()).withLastLimboFreeSnapshotVersion(Te.min()):T.resumeToken.approximateByteSize()>0&&(j=j.withResumeToken(T.resumeToken,s)),o=o.insert(A,j),(function(Y,B,fe){return Y.resumeToken.approximateByteSize()===0||B.snapshotVersion.toMicroseconds()-Y.snapshotVersion.toMicroseconds()>=XS?!0:fe.addedDocuments.size+fe.modifiedDocuments.size+fe.removedDocuments.size>0})(R,j,T)&&m.push(t.Pi.updateTargetData(u,j))}));let y=Or(),v=be();if(e.documentUpdates.forEach((T=>{e.resolvedLimboDocuments.has(T)&&m.push(t.persistence.referenceDelegate.updateLimboDocument(u,T))})),m.push(nk(u,h,e.documentUpdates).next((T=>{y=T.ks,v=T.qs}))),!s.isEqual(Te.min())){const T=t.Pi.getLastRemoteSnapshotVersion(u).next((A=>t.Pi.setTargetsMetadata(u,u.currentSequenceNumber,s)));m.push(T)}return W.waitFor(m).next((()=>h.apply(u))).next((()=>t.localDocuments.getLocalViewOfDocuments(u,y,v))).next((()=>y))})).then((u=>(t.Ms=o,u)))}function nk(i,e,t){let s=be(),o=be();return t.forEach((u=>s=s.add(u))),e.getEntries(i,s).next((u=>{let h=Or();return t.forEach(((m,y)=>{const v=u.get(m);y.isFoundDocument()!==v.isFoundDocument()&&(o=o.add(m)),y.isNoDocument()&&y.version.isEqual(Te.min())?(e.removeEntry(m,y.readTime),h=h.insert(m,y)):!v.isValidDocument()||y.version.compareTo(v.version)>0||y.version.compareTo(v.version)===0&&v.hasPendingWrites?(e.addEntry(y),h=h.insert(m,y)):re(df,"Ignoring outdated watch update for ",m,". Current version:",v.version," Watch version:",y.version)})),{ks:h,qs:o}}))}function rk(i,e){const t=Ie(i);return t.persistence.runTransaction("Get next mutation batch","readonly",(s=>(e===void 0&&(e=Jd),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e))))}function ik(i,e){const t=Ie(i);return t.persistence.runTransaction("Allocate target","readwrite",(s=>{let o;return t.Pi.getTargetData(s,e).next((u=>u?(o=u,W.resolve(o)):t.Pi.allocateTargetId(s).next((h=>(o=new fi(e,h,"TargetPurposeListen",s.currentSequenceNumber),t.Pi.addTargetData(s,o).next((()=>o)))))))})).then((s=>{const o=t.Ms.get(s.targetId);return(o===null||s.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.Ms=t.Ms.insert(s.targetId,s),t.xs.set(e,s.targetId)),s}))}async function bd(i,e,t){const s=Ie(i),o=s.Ms.get(e),u=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",u,(h=>s.persistence.referenceDelegate.removeTarget(h,o)))}catch(h){if(!Co(h))throw h;re(df,`Failed to update sequence numbers for target ${e}: ${h}`)}s.Ms=s.Ms.remove(e),s.xs.delete(o.target)}function Qg(i,e,t){const s=Ie(i);let o=Te.min(),u=be();return s.persistence.runTransaction("Execute query","readwrite",(h=>(function(y,v,T){const A=Ie(y),R=A.xs.get(T);return R!==void 0?W.resolve(A.Ms.get(R)):A.Pi.getTargetData(v,T)})(s,h,ir(e)).next((m=>{if(m)return o=m.lastLimboFreeSnapshotVersion,s.Pi.getMatchingKeysForTargetId(h,m.targetId).next((y=>{u=y}))})).next((()=>s.Fs.getDocumentsMatchingQuery(h,e,t?o:Te.min(),t?u:be()))).next((m=>(sk(s,H1(e),m),{documents:m,Qs:u})))))}function sk(i,e,t){let s=i.Os.get(e)||Te.min();t.forEach(((o,u)=>{u.readTime.compareTo(s)>0&&(s=u.readTime)})),i.Os.set(e,s)}class Yg{constructor(){this.activeTargetIds=Y1()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class ok{constructor(){this.Mo=new Yg,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,t,s){this.xo[e]=t}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new Yg,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ak{Oo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xg="ConnectivityMonitor";class Jg{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){re(Xg,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){re(Xg,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ku=null;function Dd(){return ku===null?ku=(function(){return 268435456+Math.round(2147483648*Math.random())})():ku++,"0x"+ku.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ud="RestConnection",lk={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class uk{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Uo=t+"://"+e.host,this.Ko=`projects/${s}/databases/${o}`,this.Wo=this.databaseId.database===Ku?`project_id=${s}`:`project_id=${s}&database_id=${o}`}Go(e,t,s,o,u){const h=Dd(),m=this.zo(e,t.toUriEncodedString());re(ud,`Sending RPC '${e}' ${h}:`,m,s);const y={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(y,o,u);const{host:v}=new URL(m),T=Io(v);return this.Jo(e,m,y,s,T).then((A=>(re(ud,`Received RPC '${e}' ${h}: `,A),A)),(A=>{throw go(ud,`RPC '${e}' ${h} failed with error: `,A,"url: ",m,"request:",s),A}))}Ho(e,t,s,o,u,h){return this.Go(e,t,s,o,u)}jo(e,t,s){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+xo})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((o,u)=>e[u]=o)),s&&s.headers.forEach(((o,u)=>e[u]=o))}zo(e,t){const s=lk[e];return`${this.Uo}/v1/${t}:${s}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ck{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jt="WebChannelConnection";class hk extends uk{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,s,o,u){const h=Dd();return new Promise(((m,y)=>{const v=new h_;v.setWithCredentials(!0),v.listenOnce(d_.COMPLETE,(()=>{try{switch(v.getLastErrorCode()){case bu.NO_ERROR:const A=v.getResponseJson();re(jt,`XHR for RPC '${e}' ${h} received:`,JSON.stringify(A)),m(A);break;case bu.TIMEOUT:re(jt,`RPC '${e}' ${h} timed out`),y(new le(G.DEADLINE_EXCEEDED,"Request time out"));break;case bu.HTTP_ERROR:const R=v.getStatus();if(re(jt,`RPC '${e}' ${h} failed with status:`,R,"response text:",v.getResponseText()),R>0){let j=v.getResponseJson();Array.isArray(j)&&(j=j[0]);const $=j?.error;if($&&$.status&&$.message){const Y=(function(fe){const ue=fe.toLowerCase().replace(/_/g,"-");return Object.values(G).indexOf(ue)>=0?ue:G.UNKNOWN})($.status);y(new le(Y,$.message))}else y(new le(G.UNKNOWN,"Server responded with status "+v.getStatus()))}else y(new le(G.UNAVAILABLE,"Connection failed."));break;default:ve(9055,{l_:e,streamId:h,h_:v.getLastErrorCode(),P_:v.getLastError()})}}finally{re(jt,`RPC '${e}' ${h} completed.`)}}));const T=JSON.stringify(o);re(jt,`RPC '${e}' ${h} sending request:`,o),v.send(t,"POST",T,s,15)}))}T_(e,t,s){const o=Dd(),u=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],h=m_(),m=p_(),y={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},v=this.longPollingOptions.timeoutSeconds;v!==void 0&&(y.longPollingTimeout=Math.round(1e3*v)),this.useFetchStreams&&(y.useFetchStreams=!0),this.jo(y.initMessageHeaders,t,s),y.encodeInitMessageHeaders=!0;const T=u.join("");re(jt,`Creating RPC '${e}' stream ${o}: ${T}`,y);const A=h.createWebChannel(T,y);this.I_(A);let R=!1,j=!1;const $=new ck({Yo:B=>{j?re(jt,`Not sending because RPC '${e}' stream ${o} is closed:`,B):(R||(re(jt,`Opening RPC '${e}' stream ${o} transport.`),A.open(),R=!0),re(jt,`RPC '${e}' stream ${o} sending:`,B),A.send(B))},Zo:()=>A.close()}),Y=(B,fe,ue)=>{B.listen(fe,(ye=>{try{ue(ye)}catch(Ae){setTimeout((()=>{throw Ae}),0)}}))};return Y(A,Aa.EventType.OPEN,(()=>{j||(re(jt,`RPC '${e}' stream ${o} transport opened.`),$.o_())})),Y(A,Aa.EventType.CLOSE,(()=>{j||(j=!0,re(jt,`RPC '${e}' stream ${o} transport closed`),$.a_(),this.E_(A))})),Y(A,Aa.EventType.ERROR,(B=>{j||(j=!0,go(jt,`RPC '${e}' stream ${o} transport errored. Name:`,B.name,"Message:",B.message),$.a_(new le(G.UNAVAILABLE,"The operation could not be completed")))})),Y(A,Aa.EventType.MESSAGE,(B=>{if(!j){const fe=B.data[0];Ue(!!fe,16349);const ue=fe,ye=ue?.error||ue[0]?.error;if(ye){re(jt,`RPC '${e}' stream ${o} received error:`,ye);const Ae=ye.status;let We=(function(S){const x=ut[S];if(x!==void 0)return Q_(x)})(Ae),Ve=ye.message;We===void 0&&(We=G.INTERNAL,Ve="Unknown error status: "+Ae+" with message "+ye.message),j=!0,$.a_(new le(We,Ve)),A.close()}else re(jt,`RPC '${e}' stream ${o} received:`,fe),$.u_(fe)}})),Y(m,f_.STAT_EVENT,(B=>{B.stat===Ed.PROXY?re(jt,`RPC '${e}' stream ${o} detected buffering proxy`):B.stat===Ed.NOPROXY&&re(jt,`RPC '${e}' stream ${o} detected no buffering proxy`)})),setTimeout((()=>{$.__()}),0),$}terminate(){this.c_.forEach((e=>e.close())),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter((t=>t===e))}}function cd(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _c(i){return new mS(i,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uv{constructor(e,t,s=1e3,o=1.5,u=6e4){this.Mi=e,this.timerId=t,this.d_=s,this.A_=o,this.R_=u,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const t=Math.floor(this.V_+this.y_()),s=Math.max(0,Date.now()-this.f_),o=Math.max(0,t-s);o>0&&re("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,o,(()=>(this.f_=Date.now(),e()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zg="PersistentStream";class cv{constructor(e,t,s,o,u,h,m,y){this.Mi=e,this.S_=s,this.b_=o,this.connection=u,this.authCredentialsProvider=h,this.appCheckCredentialsProvider=m,this.listener=y,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new uv(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===G.RESOURCE_EXHAUSTED?(Vr(t.toString()),Vr("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===G.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(t)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([s,o])=>{this.D_===t&&this.G_(s,o)}),(s=>{e((()=>{const o=new le(G.UNKNOWN,"Fetching auth token failed: "+s.message);return this.z_(o)}))}))}G_(e,t){const s=this.W_(this.D_);this.stream=this.j_(e,t),this.stream.Xo((()=>{s((()=>this.listener.Xo()))})),this.stream.t_((()=>{s((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((o=>{s((()=>this.z_(o)))})),this.stream.onMessage((o=>{s((()=>++this.F_==1?this.J_(o):this.onNext(o)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return re(Zg,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return t=>{this.Mi.enqueueAndForget((()=>this.D_===e?t():(re(Zg,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class dk extends cv{constructor(e,t,s,o,u,h){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,o,h),this.serializer=u}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=_S(this.serializer,e),s=(function(u){if(!("targetChange"in u))return Te.min();const h=u.targetChange;return h.targetIds&&h.targetIds.length?Te.min():h.readTime?or(h.readTime):Te.min()})(e);return this.listener.H_(t,s)}Y_(e){const t={};t.database=Nd(this.serializer),t.addTarget=(function(u,h){let m;const y=h.target;if(m=xd(y)?{documents:ES(u,y)}:{query:TS(u,y).ft},m.targetId=h.targetId,h.resumeToken.approximateByteSize()>0){m.resumeToken=J_(u,h.resumeToken);const v=Cd(u,h.expectedCount);v!==null&&(m.expectedCount=v)}else if(h.snapshotVersion.compareTo(Te.min())>0){m.readTime=ec(u,h.snapshotVersion.toTimestamp());const v=Cd(u,h.expectedCount);v!==null&&(m.expectedCount=v)}return m})(this.serializer,e);const s=SS(this.serializer,e);s&&(t.labels=s),this.q_(t)}Z_(e){const t={};t.database=Nd(this.serializer),t.removeTarget=e,this.q_(t)}}class fk extends cv{constructor(e,t,s,o,u,h){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,o,h),this.serializer=u}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return Ue(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Ue(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){Ue(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=wS(e.writeResults,e.commitTime),s=or(e.commitTime);return this.listener.na(s,t)}ra(){const e={};e.database=Nd(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map((s=>vS(this.serializer,s)))};this.q_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pk{}class mk extends pk{constructor(e,t,s,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=o,this.ia=!1}sa(){if(this.ia)throw new le(G.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,t,s,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([u,h])=>this.connection.Go(e,Rd(t,s),o,u,h))).catch((u=>{throw u.name==="FirebaseError"?(u.code===G.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new le(G.UNKNOWN,u.toString())}))}Ho(e,t,s,o,u){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([h,m])=>this.connection.Ho(e,Rd(t,s),o,h,m,u))).catch((h=>{throw h.name==="FirebaseError"?(h.code===G.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new le(G.UNKNOWN,h.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class gk{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Vr(t),this.aa=!1):re("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const us="RemoteStore";class yk{constructor(e,t,s,o,u){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=u,this.Aa.Oo((h=>{s.enqueueAndForget((async()=>{ps(this)&&(re(us,"Restarting streams for network reachability change."),await(async function(y){const v=Ie(y);v.Ea.add(4),await nl(v),v.Ra.set("Unknown"),v.Ea.delete(4),await vc(v)})(this))}))})),this.Ra=new gk(s,o)}}async function vc(i){if(ps(i))for(const e of i.da)await e(!0)}async function nl(i){for(const e of i.da)await e(!1)}function hv(i,e){const t=Ie(i);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),gf(t)?mf(t):Ro(t).O_()&&pf(t,e))}function ff(i,e){const t=Ie(i),s=Ro(t);t.Ia.delete(e),s.O_()&&dv(t,e),t.Ia.size===0&&(s.O_()?s.L_():ps(t)&&t.Ra.set("Unknown"))}function pf(i,e){if(i.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Te.min())>0){const t=i.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Ro(i).Y_(e)}function dv(i,e){i.Va.Ue(e),Ro(i).Z_(e)}function mf(i){i.Va=new hS({getRemoteKeysForTarget:e=>i.remoteSyncer.getRemoteKeysForTarget(e),At:e=>i.Ia.get(e)||null,ht:()=>i.datastore.serializer.databaseId}),Ro(i).start(),i.Ra.ua()}function gf(i){return ps(i)&&!Ro(i).x_()&&i.Ia.size>0}function ps(i){return Ie(i).Ea.size===0}function fv(i){i.Va=void 0}async function _k(i){i.Ra.set("Online")}async function vk(i){i.Ia.forEach(((e,t)=>{pf(i,e)}))}async function wk(i,e){fv(i),gf(i)?(i.Ra.ha(e),mf(i)):i.Ra.set("Unknown")}async function Ek(i,e,t){if(i.Ra.set("Online"),e instanceof X_&&e.state===2&&e.cause)try{await(async function(o,u){const h=u.cause;for(const m of u.targetIds)o.Ia.has(m)&&(await o.remoteSyncer.rejectListen(m,h),o.Ia.delete(m),o.Va.removeTarget(m))})(i,e)}catch(s){re(us,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await nc(i,s)}else if(e instanceof Mu?i.Va.Ze(e):e instanceof Y_?i.Va.st(e):i.Va.tt(e),!t.isEqual(Te.min()))try{const s=await lv(i.localStore);t.compareTo(s)>=0&&await(function(u,h){const m=u.Va.Tt(h);return m.targetChanges.forEach(((y,v)=>{if(y.resumeToken.approximateByteSize()>0){const T=u.Ia.get(v);T&&u.Ia.set(v,T.withResumeToken(y.resumeToken,h))}})),m.targetMismatches.forEach(((y,v)=>{const T=u.Ia.get(y);if(!T)return;u.Ia.set(y,T.withResumeToken(bt.EMPTY_BYTE_STRING,T.snapshotVersion)),dv(u,y);const A=new fi(T.target,y,v,T.sequenceNumber);pf(u,A)})),u.remoteSyncer.applyRemoteEvent(m)})(i,t)}catch(s){re(us,"Failed to raise snapshot:",s),await nc(i,s)}}async function nc(i,e,t){if(!Co(e))throw e;i.Ea.add(1),await nl(i),i.Ra.set("Offline"),t||(t=()=>lv(i.localStore)),i.asyncQueue.enqueueRetryable((async()=>{re(us,"Retrying IndexedDB access"),await t(),i.Ea.delete(1),await vc(i)}))}function pv(i,e){return e().catch((t=>nc(i,t,e)))}async function wc(i){const e=Ie(i),t=Si(e);let s=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Jd;for(;Tk(e);)try{const o=await rk(e.localStore,s);if(o===null){e.Ta.length===0&&t.L_();break}s=o.batchId,Ik(e,o)}catch(o){await nc(e,o)}mv(e)&&gv(e)}function Tk(i){return ps(i)&&i.Ta.length<10}function Ik(i,e){i.Ta.push(e);const t=Si(i);t.O_()&&t.X_&&t.ea(e.mutations)}function mv(i){return ps(i)&&!Si(i).x_()&&i.Ta.length>0}function gv(i){Si(i).start()}async function Sk(i){Si(i).ra()}async function kk(i){const e=Si(i);for(const t of i.Ta)e.ea(t.mutations)}async function xk(i,e,t){const s=i.Ta.shift(),o=of.from(s,e,t);await pv(i,(()=>i.remoteSyncer.applySuccessfulWrite(o))),await wc(i)}async function Ak(i,e){e&&Si(i).X_&&await(async function(s,o){if((function(h){return lS(h)&&h!==G.ABORTED})(o.code)){const u=s.Ta.shift();Si(s).B_(),await pv(s,(()=>s.remoteSyncer.rejectFailedWrite(u.batchId,o))),await wc(s)}})(i,e),mv(i)&&gv(i)}async function ey(i,e){const t=Ie(i);t.asyncQueue.verifyOperationInProgress(),re(us,"RemoteStore received new credentials");const s=ps(t);t.Ea.add(3),await nl(t),s&&t.Ra.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await vc(t)}async function Ck(i,e){const t=Ie(i);e?(t.Ea.delete(2),await vc(t)):e||(t.Ea.add(2),await nl(t),t.Ra.set("Unknown"))}function Ro(i){return i.ma||(i.ma=(function(t,s,o){const u=Ie(t);return u.sa(),new dk(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)})(i.datastore,i.asyncQueue,{Xo:_k.bind(null,i),t_:vk.bind(null,i),r_:wk.bind(null,i),H_:Ek.bind(null,i)}),i.da.push((async e=>{e?(i.ma.B_(),gf(i)?mf(i):i.Ra.set("Unknown")):(await i.ma.stop(),fv(i))}))),i.ma}function Si(i){return i.fa||(i.fa=(function(t,s,o){const u=Ie(t);return u.sa(),new fk(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)})(i.datastore,i.asyncQueue,{Xo:()=>Promise.resolve(),t_:Sk.bind(null,i),r_:Ak.bind(null,i),ta:kk.bind(null,i),na:xk.bind(null,i)}),i.da.push((async e=>{e?(i.fa.B_(),await wc(i)):(await i.fa.stop(),i.Ta.length>0&&(re(us,`Stopping write stream with ${i.Ta.length} pending writes`),i.Ta=[]))}))),i.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yf{constructor(e,t,s,o,u){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=o,this.removalCallback=u,this.deferred=new _i,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((h=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,o,u){const h=Date.now()+s,m=new yf(e,t,h,o,u);return m.start(s),m}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new le(G.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function _f(i,e){if(Vr("AsyncQueue",`${e}: ${i}`),Co(i))return new le(G.UNAVAILABLE,`${e}: ${i}`);throw i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class po{static emptySet(e){return new po(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||pe.comparator(t.key,s.key):(t,s)=>pe.comparator(t.key,s.key),this.keyedMap=Ca(),this.sortedSet=new nt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,s)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof po)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,u=s.getNext().key;if(!o.isEqual(u))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new po;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ty{constructor(){this.ga=new nt(pe.comparator)}track(e){const t=e.doc.key,s=this.ga.get(t);s?e.type!==0&&s.type===3?this.ga=this.ga.insert(t,e):e.type===3&&s.type!==1?this.ga=this.ga.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.ga=this.ga.remove(t):e.type===1&&s.type===2?this.ga=this.ga.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):ve(63341,{Rt:e,pa:s}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal(((t,s)=>{e.push(s)})),e}}class To{constructor(e,t,s,o,u,h,m,y,v){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=o,this.mutatedKeys=u,this.fromCache=h,this.syncStateChanged=m,this.excludesMetadataChanges=y,this.hasCachedResults=v}static fromInitialDocuments(e,t,s,o,u){const h=[];return t.forEach((m=>{h.push({type:0,doc:m})})),new To(e,t,po.emptySet(t),h,s,o,!0,!1,u)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&fc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==s[o].type||!t[o].doc.isEqual(s[o].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rk{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class Pk{constructor(){this.queries=ny(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,s){const o=Ie(t),u=o.queries;o.queries=ny(),u.forEach(((h,m)=>{for(const y of m.Sa)y.onError(s)}))})(this,new le(G.ABORTED,"Firestore shutting down"))}}function ny(){return new ds((i=>M_(i)),fc)}async function Nk(i,e){const t=Ie(i);let s=3;const o=e.query;let u=t.queries.get(o);u?!u.ba()&&e.Da()&&(s=2):(u=new Rk,s=e.Da()?0:1);try{switch(s){case 0:u.wa=await t.onListen(o,!0);break;case 1:u.wa=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(h){const m=_f(h,`Initialization of query '${oo(e.query)}' failed`);return void e.onError(m)}t.queries.set(o,u),u.Sa.push(e),e.va(t.onlineState),u.wa&&e.Fa(u.wa)&&vf(t)}async function bk(i,e){const t=Ie(i),s=e.query;let o=3;const u=t.queries.get(s);if(u){const h=u.Sa.indexOf(e);h>=0&&(u.Sa.splice(h,1),u.Sa.length===0?o=e.Da()?0:1:!u.ba()&&e.Da()&&(o=2))}switch(o){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function Dk(i,e){const t=Ie(i);let s=!1;for(const o of e){const u=o.query,h=t.queries.get(u);if(h){for(const m of h.Sa)m.Fa(o)&&(s=!0);h.wa=o}}s&&vf(t)}function Vk(i,e,t){const s=Ie(i),o=s.queries.get(e);if(o)for(const u of o.Sa)u.onError(t);s.queries.delete(e)}function vf(i){i.Ca.forEach((e=>{e.next()}))}var Vd,ry;(ry=Vd||(Vd={})).Ma="default",ry.Cache="cache";class Ok{constructor(e,t,s){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=s||{}}Fa(e){if(!this.options.includeMetadataChanges){const s=[];for(const o of e.docChanges)o.type!==3&&s.push(o);e=new To(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const s=t!=="Offline";return(!this.options.qa||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=To.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Vd.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yv{constructor(e){this.key=e}}class _v{constructor(e){this.key=e}}class Mk{constructor(e,t){this.query=e,this.Ya=t,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=be(),this.mutatedKeys=be(),this.eu=L_(e),this.tu=new po(this.eu)}get nu(){return this.Ya}ru(e,t){const s=t?t.iu:new ty,o=t?t.tu:this.tu;let u=t?t.mutatedKeys:this.mutatedKeys,h=o,m=!1;const y=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,v=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal(((T,A)=>{const R=o.get(T),j=pc(this.query,A)?A:null,$=!!R&&this.mutatedKeys.has(R.key),Y=!!j&&(j.hasLocalMutations||this.mutatedKeys.has(j.key)&&j.hasCommittedMutations);let B=!1;R&&j?R.data.isEqual(j.data)?$!==Y&&(s.track({type:3,doc:j}),B=!0):this.su(R,j)||(s.track({type:2,doc:j}),B=!0,(y&&this.eu(j,y)>0||v&&this.eu(j,v)<0)&&(m=!0)):!R&&j?(s.track({type:0,doc:j}),B=!0):R&&!j&&(s.track({type:1,doc:R}),B=!0,(y||v)&&(m=!0)),B&&(j?(h=h.add(j),u=Y?u.add(T):u.delete(T)):(h=h.delete(T),u=u.delete(T)))})),this.query.limit!==null)for(;h.size>this.query.limit;){const T=this.query.limitType==="F"?h.last():h.first();h=h.delete(T.key),u=u.delete(T.key),s.track({type:1,doc:T})}return{tu:h,iu:s,Cs:m,mutatedKeys:u}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,o){const u=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const h=e.iu.ya();h.sort(((T,A)=>(function(j,$){const Y=B=>{switch(B){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ve(20277,{Rt:B})}};return Y(j)-Y($)})(T.type,A.type)||this.eu(T.doc,A.doc))),this.ou(s),o=o??!1;const m=t&&!o?this._u():[],y=this.Xa.size===0&&this.current&&!o?1:0,v=y!==this.Za;return this.Za=y,h.length!==0||v?{snapshot:new To(this.query,e.tu,u,h,e.mutatedKeys,y===0,v,!1,!!s&&s.resumeToken.approximateByteSize()>0),au:m}:{au:m}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new ty,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((t=>this.Ya=this.Ya.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ya=this.Ya.delete(t))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=be(),this.tu.forEach((s=>{this.uu(s.key)&&(this.Xa=this.Xa.add(s.key))}));const t=[];return e.forEach((s=>{this.Xa.has(s)||t.push(new _v(s))})),this.Xa.forEach((s=>{e.has(s)||t.push(new yv(s))})),t}cu(e){this.Ya=e.Qs,this.Xa=be();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return To.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const wf="SyncEngine";class Lk{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class jk{constructor(e){this.key=e,this.hu=!1}}class Fk{constructor(e,t,s,o,u,h){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=o,this.currentUser=u,this.maxConcurrentLimboResolutions=h,this.Pu={},this.Tu=new ds((m=>M_(m)),fc),this.Iu=new Map,this.Eu=new Set,this.du=new nt(pe.comparator),this.Au=new Map,this.Ru=new uf,this.Vu={},this.mu=new Map,this.fu=Eo.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function Uk(i,e,t=!0){const s=Sv(i);let o;const u=s.Tu.get(e);return u?(s.sharedClientState.addLocalQueryTarget(u.targetId),o=u.view.lu()):o=await vv(s,e,t,!0),o}async function zk(i,e){const t=Sv(i);await vv(t,e,!0,!1)}async function vv(i,e,t,s){const o=await ik(i.localStore,ir(e)),u=o.targetId,h=i.sharedClientState.addLocalQueryTarget(u,t);let m;return s&&(m=await Bk(i,e,u,h==="current",o.resumeToken)),i.isPrimaryClient&&t&&hv(i.remoteStore,o),m}async function Bk(i,e,t,s,o){i.pu=(A,R,j)=>(async function(Y,B,fe,ue){let ye=B.view.ru(fe);ye.Cs&&(ye=await Qg(Y.localStore,B.query,!1).then((({documents:b})=>B.view.ru(b,ye))));const Ae=ue&&ue.targetChanges.get(B.targetId),We=ue&&ue.targetMismatches.get(B.targetId)!=null,Ve=B.view.applyChanges(ye,Y.isPrimaryClient,Ae,We);return sy(Y,B.targetId,Ve.au),Ve.snapshot})(i,A,R,j);const u=await Qg(i.localStore,e,!0),h=new Mk(e,u.Qs),m=h.ru(u.documents),y=tl.createSynthesizedTargetChangeForCurrentChange(t,s&&i.onlineState!=="Offline",o),v=h.applyChanges(m,i.isPrimaryClient,y);sy(i,t,v.au);const T=new Lk(e,t,h);return i.Tu.set(e,T),i.Iu.has(t)?i.Iu.get(t).push(e):i.Iu.set(t,[e]),v.snapshot}async function $k(i,e,t){const s=Ie(i),o=s.Tu.get(e),u=s.Iu.get(o.targetId);if(u.length>1)return s.Iu.set(o.targetId,u.filter((h=>!fc(h,e)))),void s.Tu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(o.targetId),s.sharedClientState.isActiveQueryTarget(o.targetId)||await bd(s.localStore,o.targetId,!1).then((()=>{s.sharedClientState.clearQueryState(o.targetId),t&&ff(s.remoteStore,o.targetId),Od(s,o.targetId)})).catch(Ao)):(Od(s,o.targetId),await bd(s.localStore,o.targetId,!0))}async function Hk(i,e){const t=Ie(i),s=t.Tu.get(e),o=t.Iu.get(s.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),ff(t.remoteStore,s.targetId))}async function Wk(i,e,t){const s=Jk(i);try{const o=await(function(h,m){const y=Ie(h),v=Qe.now(),T=m.reduce(((j,$)=>j.add($.key)),be());let A,R;return y.persistence.runTransaction("Locally write mutations","readwrite",(j=>{let $=Or(),Y=be();return y.Ns.getEntries(j,T).next((B=>{$=B,$.forEach(((fe,ue)=>{ue.isValidDocument()||(Y=Y.add(fe))}))})).next((()=>y.localDocuments.getOverlayedDocuments(j,$))).next((B=>{A=B;const fe=[];for(const ue of m){const ye=rS(ue,A.get(ue.key).overlayedDocument);ye!=null&&fe.push(new fs(ue.key,ye,R_(ye.value.mapValue),sr.exists(!0)))}return y.mutationQueue.addMutationBatch(j,v,fe,m)})).next((B=>{R=B;const fe=B.applyToLocalDocumentSet(A,Y);return y.documentOverlayCache.saveOverlays(j,B.batchId,fe)}))})).then((()=>({batchId:R.batchId,changes:F_(A)})))})(s.localStore,e);s.sharedClientState.addPendingMutation(o.batchId),(function(h,m,y){let v=h.Vu[h.currentUser.toKey()];v||(v=new nt(Ne)),v=v.insert(m,y),h.Vu[h.currentUser.toKey()]=v})(s,o.batchId,t),await rl(s,o.changes),await wc(s.remoteStore)}catch(o){const u=_f(o,"Failed to persist write");t.reject(u)}}async function wv(i,e){const t=Ie(i);try{const s=await tk(t.localStore,e);e.targetChanges.forEach(((o,u)=>{const h=t.Au.get(u);h&&(Ue(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?h.hu=!0:o.modifiedDocuments.size>0?Ue(h.hu,14607):o.removedDocuments.size>0&&(Ue(h.hu,42227),h.hu=!1))})),await rl(t,s,e)}catch(s){await Ao(s)}}function iy(i,e,t){const s=Ie(i);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const o=[];s.Tu.forEach(((u,h)=>{const m=h.view.va(e);m.snapshot&&o.push(m.snapshot)})),(function(h,m){const y=Ie(h);y.onlineState=m;let v=!1;y.queries.forEach(((T,A)=>{for(const R of A.Sa)R.va(m)&&(v=!0)})),v&&vf(y)})(s.eventManager,e),o.length&&s.Pu.H_(o),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function qk(i,e,t){const s=Ie(i);s.sharedClientState.updateQueryState(e,"rejected",t);const o=s.Au.get(e),u=o&&o.key;if(u){let h=new nt(pe.comparator);h=h.insert(u,Ut.newNoDocument(u,Te.min()));const m=be().add(u),y=new yc(Te.min(),new Map,new nt(Ne),h,m);await wv(s,y),s.du=s.du.remove(u),s.Au.delete(e),Ef(s)}else await bd(s.localStore,e,!1).then((()=>Od(s,e,t))).catch(Ao)}async function Gk(i,e){const t=Ie(i),s=e.batch.batchId;try{const o=await ek(t.localStore,e);Tv(t,s,null),Ev(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await rl(t,o)}catch(o){await Ao(o)}}async function Kk(i,e,t){const s=Ie(i);try{const o=await(function(h,m){const y=Ie(h);return y.persistence.runTransaction("Reject batch","readwrite-primary",(v=>{let T;return y.mutationQueue.lookupMutationBatch(v,m).next((A=>(Ue(A!==null,37113),T=A.keys(),y.mutationQueue.removeMutationBatch(v,A)))).next((()=>y.mutationQueue.performConsistencyCheck(v))).next((()=>y.documentOverlayCache.removeOverlaysForBatchId(v,T,m))).next((()=>y.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(v,T))).next((()=>y.localDocuments.getDocuments(v,T)))}))})(s.localStore,e);Tv(s,e,t),Ev(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await rl(s,o)}catch(o){await Ao(o)}}function Ev(i,e){(i.mu.get(e)||[]).forEach((t=>{t.resolve()})),i.mu.delete(e)}function Tv(i,e,t){const s=Ie(i);let o=s.Vu[s.currentUser.toKey()];if(o){const u=o.get(e);u&&(t?u.reject(t):u.resolve(),o=o.remove(e)),s.Vu[s.currentUser.toKey()]=o}}function Od(i,e,t=null){i.sharedClientState.removeLocalQueryTarget(e);for(const s of i.Iu.get(e))i.Tu.delete(s),t&&i.Pu.yu(s,t);i.Iu.delete(e),i.isPrimaryClient&&i.Ru.jr(e).forEach((s=>{i.Ru.containsKey(s)||Iv(i,s)}))}function Iv(i,e){i.Eu.delete(e.path.canonicalString());const t=i.du.get(e);t!==null&&(ff(i.remoteStore,t),i.du=i.du.remove(e),i.Au.delete(t),Ef(i))}function sy(i,e,t){for(const s of t)s instanceof yv?(i.Ru.addReference(s.key,e),Qk(i,s)):s instanceof _v?(re(wf,"Document no longer in limbo: "+s.key),i.Ru.removeReference(s.key,e),i.Ru.containsKey(s.key)||Iv(i,s.key)):ve(19791,{wu:s})}function Qk(i,e){const t=e.key,s=t.path.canonicalString();i.du.get(t)||i.Eu.has(s)||(re(wf,"New document in limbo: "+t),i.Eu.add(s),Ef(i))}function Ef(i){for(;i.Eu.size>0&&i.du.size<i.maxConcurrentLimboResolutions;){const e=i.Eu.values().next().value;i.Eu.delete(e);const t=new pe(Ke.fromString(e)),s=i.fu.next();i.Au.set(s,new jk(t)),i.du=i.du.insert(t,s),hv(i.remoteStore,new fi(ir(rf(t.path)),s,"TargetPurposeLimboResolution",uc.ce))}}async function rl(i,e,t){const s=Ie(i),o=[],u=[],h=[];s.Tu.isEmpty()||(s.Tu.forEach(((m,y)=>{h.push(s.pu(y,e,t).then((v=>{if((v||t)&&s.isPrimaryClient){const T=v?!v.fromCache:t?.targetChanges.get(y.targetId)?.current;s.sharedClientState.updateQueryState(y.targetId,T?"current":"not-current")}if(v){o.push(v);const T=hf.As(y.targetId,v);u.push(T)}})))})),await Promise.all(h),s.Pu.H_(o),await(async function(y,v){const T=Ie(y);try{await T.persistence.runTransaction("notifyLocalViewChanges","readwrite",(A=>W.forEach(v,(R=>W.forEach(R.Es,(j=>T.persistence.referenceDelegate.addReference(A,R.targetId,j))).next((()=>W.forEach(R.ds,(j=>T.persistence.referenceDelegate.removeReference(A,R.targetId,j)))))))))}catch(A){if(!Co(A))throw A;re(df,"Failed to update sequence numbers: "+A)}for(const A of v){const R=A.targetId;if(!A.fromCache){const j=T.Ms.get(R),$=j.snapshotVersion,Y=j.withLastLimboFreeSnapshotVersion($);T.Ms=T.Ms.insert(R,Y)}}})(s.localStore,u))}async function Yk(i,e){const t=Ie(i);if(!t.currentUser.isEqual(e)){re(wf,"User change. New user:",e.toKey());const s=await av(t.localStore,e);t.currentUser=e,(function(u,h){u.mu.forEach((m=>{m.forEach((y=>{y.reject(new le(G.CANCELLED,h))}))})),u.mu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await rl(t,s.Ls)}}function Xk(i,e){const t=Ie(i),s=t.Au.get(e);if(s&&s.hu)return be().add(s.key);{let o=be();const u=t.Iu.get(e);if(!u)return o;for(const h of u){const m=t.Tu.get(h);o=o.unionWith(m.view.nu)}return o}}function Sv(i){const e=Ie(i);return e.remoteStore.remoteSyncer.applyRemoteEvent=wv.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Xk.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=qk.bind(null,e),e.Pu.H_=Dk.bind(null,e.eventManager),e.Pu.yu=Vk.bind(null,e.eventManager),e}function Jk(i){const e=Ie(i);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Gk.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Kk.bind(null,e),e}class rc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=_c(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return ZS(this.persistence,new YS,e.initialUser,this.serializer)}Cu(e){return new ov(cf.mi,this.serializer)}Du(e){return new ok}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}rc.provider={build:()=>new rc};class Zk extends rc{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){Ue(this.persistence.referenceDelegate instanceof tc,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new OS(s,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?en.withCacheSize(this.cacheSizeBytes):en.DEFAULT;return new ov((s=>tc.mi(s,t)),this.serializer)}}class Md{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>iy(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=Yk.bind(null,this.syncEngine),await Ck(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new Pk})()}createDatastore(e){const t=_c(e.databaseInfo.databaseId),s=(function(u){return new hk(u)})(e.databaseInfo);return(function(u,h,m,y){return new mk(u,h,m,y)})(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return(function(s,o,u,h,m){return new yk(s,o,u,h,m)})(this.localStore,this.datastore,e.asyncQueue,(t=>iy(this.syncEngine,t,0)),(function(){return Jg.v()?new Jg:new ak})())}createSyncEngine(e,t){return(function(o,u,h,m,y,v,T){const A=new Fk(o,u,h,m,y,v);return T&&(A.gu=!0),A})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){await(async function(t){const s=Ie(t);re(us,"RemoteStore shutting down."),s.Ea.add(5),await nl(s),s.Aa.shutdown(),s.Ra.set("Unknown")})(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}Md.provider={build:()=>new Md};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ex{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Vr("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ki="FirestoreClient";class tx{constructor(e,t,s,o,u){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=o,this.user=Ft.UNAUTHENTICATED,this.clientId=Yd.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=u,this.authCredentials.start(s,(async h=>{re(ki,"Received user=",h.uid),await this.authCredentialListener(h),this.user=h})),this.appCheckCredentials.start(s,(h=>(re(ki,"Received new app check token=",h),this.appCheckCredentialListener(h,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new _i;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=_f(t,"Failed to shutdown persistence");e.reject(s)}})),e.promise}}async function hd(i,e){i.asyncQueue.verifyOperationInProgress(),re(ki,"Initializing OfflineComponentProvider");const t=i.configuration;await e.initialize(t);let s=t.initialUser;i.setCredentialChangeListener((async o=>{s.isEqual(o)||(await av(e.localStore,o),s=o)})),e.persistence.setDatabaseDeletedListener((()=>i.terminate())),i._offlineComponents=e}async function oy(i,e){i.asyncQueue.verifyOperationInProgress();const t=await nx(i);re(ki,"Initializing OnlineComponentProvider"),await e.initialize(t,i.configuration),i.setCredentialChangeListener((s=>ey(e.remoteStore,s))),i.setAppCheckTokenChangeListener(((s,o)=>ey(e.remoteStore,o))),i._onlineComponents=e}async function nx(i){if(!i._offlineComponents)if(i._uninitializedComponentsProvider){re(ki,"Using user provided OfflineComponentProvider");try{await hd(i,i._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(o){return o.name==="FirebaseError"?o.code===G.FAILED_PRECONDITION||o.code===G.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11})(t))throw t;go("Error using user provided cache. Falling back to memory cache: "+t),await hd(i,new rc)}}else re(ki,"Using default OfflineComponentProvider"),await hd(i,new Zk(void 0));return i._offlineComponents}async function kv(i){return i._onlineComponents||(i._uninitializedComponentsProvider?(re(ki,"Using user provided OnlineComponentProvider"),await oy(i,i._uninitializedComponentsProvider._online)):(re(ki,"Using default OnlineComponentProvider"),await oy(i,new Md))),i._onlineComponents}function rx(i){return kv(i).then((e=>e.syncEngine))}async function ix(i){const e=await kv(i),t=e.eventManager;return t.onListen=Uk.bind(null,e.syncEngine),t.onUnlisten=$k.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=zk.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=Hk.bind(null,e.syncEngine),t}function sx(i,e,t={}){const s=new _i;return i.asyncQueue.enqueueAndForget((async()=>(function(u,h,m,y,v){const T=new ex({next:R=>{T.Nu(),h.enqueueAndForget((()=>bk(u,A)));const j=R.docs.has(m);!j&&R.fromCache?v.reject(new le(G.UNAVAILABLE,"Failed to get document because the client is offline.")):j&&R.fromCache&&y&&y.source==="server"?v.reject(new le(G.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):v.resolve(R)},error:R=>v.reject(R)}),A=new Ok(rf(m.path),T,{includeMetadataChanges:!0,qa:!0});return Nk(u,A)})(await ix(i),i.asyncQueue,e,t,s))),s.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xv(i){const e={};return i.timeoutSeconds!==void 0&&(e.timeoutSeconds=i.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ay=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Av="firestore.googleapis.com",ly=!0;class uy{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new le(G.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Av,this.ssl=ly}else this.host=e.host,this.ssl=e.ssl??ly;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=sv;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<DS)throw new le(G.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}g1("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=xv(e.experimentalLongPollingOptions??{}),(function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new le(G.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new le(G.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new le(G.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(s,o){return s.timeoutSeconds===o.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ec{constructor(e,t,s,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new uy({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new le(G.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new le(G.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new uy(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(s){if(!s)return new o1;switch(s.type){case"firstParty":return new c1(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new le(G.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const s=ay.get(t);s&&(re("ComponentProvider","Removing Datastore"),ay.delete(t),s.terminate())})(this),Promise.resolve()}}function ox(i,e,t,s={}){i=_o(i,Ec);const o=Io(e),u=i._getSettings(),h={...u,emulatorOptions:i._getEmulatorOptions()},m=`${e}:${t}`;o&&(Ty(`https://${m}`),Iy("Firestore",!0)),u.host!==Av&&u.host!==m&&go("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const y={...u,host:m,ssl:o,emulatorOptions:s};if(!is(y,h)&&(i._setSettings(y),s.mockUserToken)){let v,T;if(typeof s.mockUserToken=="string")v=s.mockUserToken,T=Ft.MOCK_USER;else{v=gw(s.mockUserToken,i._app?.options.projectId);const A=s.mockUserToken.sub||s.mockUserToken.user_id;if(!A)throw new le(G.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");T=new Ft(A)}i._authCredentials=new a1(new y_(v,T))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tf{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Tf(this.firestore,e,this._query)}}class yt{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new vi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new yt(this.firestore,e,this._key)}toJSON(){return{type:yt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,s){if(Za(t,yt._jsonSchema))return new yt(e,s||null,new pe(Ke.fromString(t.referencePath)))}}yt._jsonSchemaVersion="firestore/documentReference/1.0",yt._jsonSchema={type:ct("string",yt._jsonSchemaVersion),referencePath:ct("string")};class vi extends Tf{constructor(e,t,s){super(e,t,rf(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new yt(this.firestore,null,new pe(e))}withConverter(e){return new vi(this.firestore,e,this._path)}}function ax(i,e,...t){if(i=tn(i),__("collection","path",e),i instanceof Ec){const s=Ke.fromString(e,...t);return Ig(s),new vi(i,null,s)}{if(!(i instanceof yt||i instanceof vi))throw new le(G.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=i._path.child(Ke.fromString(e,...t));return Ig(s),new vi(i.firestore,null,s)}}function Lu(i,e,...t){if(i=tn(i),arguments.length===1&&(e=Yd.newId()),__("doc","path",e),i instanceof Ec){const s=Ke.fromString(e,...t);return Tg(s),new yt(i,null,new pe(s))}{if(!(i instanceof yt||i instanceof vi))throw new le(G.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=i._path.child(Ke.fromString(e,...t));return Tg(s),new yt(i.firestore,i instanceof vi?i.converter:null,new pe(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cy="AsyncQueue";class hy{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new uv(this,"async_queue_retry"),this._c=()=>{const s=cd();s&&re(cy,"Visibility state changed to "+s.visibilityState),this.M_.w_()},this.ac=e;const t=cd();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=cd();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new _i;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!Co(e))throw e;re(cy,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((s=>{throw this.nc=s,this.rc=!1,Vr("INTERNAL UNHANDLED ERROR: ",dy(s)),s})).then((s=>(this.rc=!1,s))))));return this.ac=t,t}enqueueAfterDelay(e,t,s){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const o=yf.createAndSchedule(this,e,t,s,(u=>this.hc(u)));return this.tc.push(o),o}uc(){this.nc&&ve(47125,{Pc:dy(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((t,s)=>t.targetTimeMs-s.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function dy(i){let e=i.message||"";return i.stack&&(e=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),e}class Tc extends Ec{constructor(e,t,s,o){super(e,t,s,o),this.type="firestore",this._queue=new hy,this._persistenceKey=o?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new hy(e),this._firestoreClient=void 0,await e}}}function lx(i,e){const t=typeof i=="object"?i:Ay(),s=typeof i=="string"?i:Ku,o=Ud(t,"firestore").getImmediate({identifier:s});if(!o._initialized){const u=pw("firestore");u&&ox(o,...u)}return o}function Cv(i){if(i._terminated)throw new le(G.FAILED_PRECONDITION,"The client has already been terminated.");return i._firestoreClient||ux(i),i._firestoreClient}function ux(i){const e=i._freezeSettings(),t=(function(o,u,h,m){return new A1(o,u,h,m.host,m.ssl,m.experimentalForceLongPolling,m.experimentalAutoDetectLongPolling,xv(m.experimentalLongPollingOptions),m.useFetchStreams,m.isUsingEmulator)})(i._databaseId,i._app?.options.appId||"",i._persistenceKey,e);i._componentsProvider||e.localCache?._offlineComponentProvider&&e.localCache?._onlineComponentProvider&&(i._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),i._firestoreClient=new tx(i._authCredentials,i._appCheckCredentials,i._queue,t,i._componentsProvider&&(function(o){const u=o?._online.build();return{_offline:o?._offline.build(u),_online:u}})(i._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In{constructor(e){this._byteString=e}static fromBase64String(e){try{return new In(bt.fromBase64String(e))}catch(t){throw new le(G.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new In(bt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:In._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Za(e,In._jsonSchema))return In.fromBase64String(e.bytes)}}In._jsonSchemaVersion="firestore/bytes/1.0",In._jsonSchema={type:ct("string",In._jsonSchemaVersion),bytes:ct("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class If{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new le(G.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Nt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rv{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new le(G.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new le(G.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Ne(this._lat,e._lat)||Ne(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:ar._jsonSchemaVersion}}static fromJSON(e){if(Za(e,ar._jsonSchema))return new ar(e.latitude,e.longitude)}}ar._jsonSchemaVersion="firestore/geoPoint/1.0",ar._jsonSchema={type:ct("string",ar._jsonSchemaVersion),latitude:ct("number"),longitude:ct("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(s,o){if(s.length!==o.length)return!1;for(let u=0;u<s.length;++u)if(s[u]!==o[u])return!1;return!0})(this._values,e._values)}toJSON(){return{type:lr._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Za(e,lr._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new lr(e.vectorValues);throw new le(G.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}lr._jsonSchemaVersion="firestore/vectorValue/1.0",lr._jsonSchema={type:ct("string",lr._jsonSchemaVersion),vectorValues:ct("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cx=/^__.*__$/;class hx{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new fs(e,this.data,this.fieldMask,t,this.fieldTransforms):new el(e,this.data,t,this.fieldTransforms)}}function Pv(i){switch(i){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ve(40011,{Ac:i})}}class Sf{constructor(e,t,s,o,u,h){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=o,u===void 0&&this.Rc(),this.fieldTransforms=u||[],this.fieldMask=h||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new Sf({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){const t=this.path?.child(e),s=this.Vc({path:t,fc:!1});return s.gc(e),s}yc(e){const t=this.path?.child(e),s=this.Vc({path:t,fc:!1});return s.Rc(),s}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return ic(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(Pv(this.Ac)&&cx.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class dx{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||_c(e)}Cc(e,t,s,o=!1){return new Sf({Ac:e,methodName:t,Dc:s,path:Nt.emptyPath(),fc:!1,bc:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Nv(i){const e=i._freezeSettings(),t=_c(i._databaseId);return new dx(i._databaseId,!!e.ignoreUndefinedProperties,t)}function bv(i,e,t,s,o,u={}){const h=i.Cc(u.merge||u.mergeFields?2:0,e,t,o);Mv("Data must be an object, but it was:",h,s);const m=Vv(s,h);let y,v;if(u.merge)y=new Bn(h.fieldMask),v=h.fieldTransforms;else if(u.mergeFields){const T=[];for(const A of u.mergeFields){const R=fx(e,A,t);if(!h.contains(R))throw new le(G.INVALID_ARGUMENT,`Field '${R}' is specified in your field mask but missing from your input data.`);mx(T,R)||T.push(R)}y=new Bn(T),v=h.fieldTransforms.filter((A=>y.covers(A.field)))}else y=null,v=h.fieldTransforms;return new hx(new Tn(m),y,v)}function Dv(i,e){if(Ov(i=tn(i)))return Mv("Unsupported field value:",e,i),Vv(i,e);if(i instanceof Rv)return(function(s,o){if(!Pv(o.Ac))throw o.Sc(`${s._methodName}() can only be used with update() and set()`);if(!o.path)throw o.Sc(`${s._methodName}() is not currently supported inside arrays`);const u=s._toFieldTransform(o);u&&o.fieldTransforms.push(u)})(i,e),null;if(i===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),i instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return(function(s,o){const u=[];let h=0;for(const m of s){let y=Dv(m,o.wc(h));y==null&&(y={nullValue:"NULL_VALUE"}),u.push(y),h++}return{arrayValue:{values:u}}})(i,e)}return(function(s,o){if((s=tn(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return X1(o.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const u=Qe.fromDate(s);return{timestampValue:ec(o.serializer,u)}}if(s instanceof Qe){const u=new Qe(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:ec(o.serializer,u)}}if(s instanceof ar)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof In)return{bytesValue:J_(o.serializer,s._byteString)};if(s instanceof yt){const u=o.databaseId,h=s.firestore._databaseId;if(!h.isEqual(u))throw o.Sc(`Document reference is for database ${h.projectId}/${h.database} but should be for database ${u.projectId}/${u.database}`);return{referenceValue:lf(s.firestore._databaseId||o.databaseId,s._key.path)}}if(s instanceof lr)return(function(h,m){return{mapValue:{fields:{[A_]:{stringValue:C_},[Qu]:{arrayValue:{values:h.toArray().map((v=>{if(typeof v!="number")throw m.Sc("VectorValues must only contain numeric values.");return sf(m.serializer,v)}))}}}}}})(s,o);throw o.Sc(`Unsupported field value: ${Xd(s)}`)})(i,e)}function Vv(i,e){const t={};return E_(i)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):hs(i,((s,o)=>{const u=Dv(o,e.mc(s));u!=null&&(t[s]=u)})),{mapValue:{fields:t}}}function Ov(i){return!(typeof i!="object"||i===null||i instanceof Array||i instanceof Date||i instanceof Qe||i instanceof ar||i instanceof In||i instanceof yt||i instanceof Rv||i instanceof lr)}function Mv(i,e,t){if(!Ov(t)||!v_(t)){const s=Xd(t);throw s==="an object"?e.Sc(i+" a custom object"):e.Sc(i+" "+s)}}function fx(i,e,t){if((e=tn(e))instanceof If)return e._internalPath;if(typeof e=="string")return Lv(i,e);throw ic("Field path arguments must be of type string or ",i,!1,void 0,t)}const px=new RegExp("[~\\*/\\[\\]]");function Lv(i,e,t){if(e.search(px)>=0)throw ic(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,i,!1,void 0,t);try{return new If(...e.split("."))._internalPath}catch{throw ic(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,i,!1,void 0,t)}}function ic(i,e,t,s,o){const u=s&&!s.isEmpty(),h=o!==void 0;let m=`Function ${e}() called with invalid data`;t&&(m+=" (via `toFirestore()`)"),m+=". ";let y="";return(u||h)&&(y+=" (found",u&&(y+=` in field ${s}`),h&&(y+=` in document ${o}`),y+=")"),new le(G.INVALID_ARGUMENT,m+i+y)}function mx(i,e){return i.some((t=>t.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jv{constructor(e,t,s,o,u){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=o,this._converter=u}get id(){return this._key.path.lastSegment()}get ref(){return new yt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new gx(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Fv("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class gx extends jv{data(){return super.data()}}function Fv(i,e){return typeof e=="string"?Lv(i,e):e instanceof If?e._internalPath:e._delegate._internalPath}class yx{convertValue(e,t="none"){switch(Ii(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ot(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Ti(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw ve(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return hs(e,((o,u)=>{s[o]=this.convertValue(u,t)})),s}convertVectorValue(e){const t=e.fields?.[Qu].arrayValue?.values?.map((s=>ot(s.doubleValue)));return new lr(t)}convertGeoPoint(e){return new ar(ot(e.latitude),ot(e.longitude))}convertArray(e,t){return(e.values||[]).map((s=>this.convertValue(s,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const s=hc(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(Ba(e));default:return null}}convertTimestamp(e){const t=Ei(e);return new Qe(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=Ke.fromString(e);Ue(iv(s),9688,{name:e});const o=new $a(s.get(1),s.get(3)),u=new pe(s.popFirst(5));return o.isEqual(t)||Vr(`Document ${u} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uv(i,e,t){let s;return s=i?t&&(t.merge||t.mergeFields)?i.toFirestore(e,t):i.toFirestore(e):e,s}class Pa{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class rs extends jv{constructor(e,t,s,o,u,h){super(e,t,s,o,h),this._firestore=e,this._firestoreImpl=e,this.metadata=u}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new ju(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(Fv("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new le(G.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=rs._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}rs._jsonSchemaVersion="firestore/documentSnapshot/1.0",rs._jsonSchema={type:ct("string",rs._jsonSchemaVersion),bundleSource:ct("string","DocumentSnapshot"),bundleName:ct("string"),bundle:ct("string")};class ju extends rs{data(e={}){return super.data(e)}}class La{constructor(e,t,s,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new Pa(o.hasPendingWrites,o.fromCache),this.query=s}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((s=>{e.call(t,new ju(this._firestore,this._userDataWriter,s.key,s,new Pa(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new le(G.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(o,u){if(o._snapshot.oldDocs.isEmpty()){let h=0;return o._snapshot.docChanges.map((m=>{const y=new ju(o._firestore,o._userDataWriter,m.doc.key,m.doc,new Pa(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);return m.doc,{type:"added",doc:y,oldIndex:-1,newIndex:h++}}))}{let h=o._snapshot.oldDocs;return o._snapshot.docChanges.filter((m=>u||m.type!==3)).map((m=>{const y=new ju(o._firestore,o._userDataWriter,m.doc.key,m.doc,new Pa(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);let v=-1,T=-1;return m.type!==0&&(v=h.indexOf(m.doc.key),h=h.delete(m.doc.key)),m.type!==1&&(h=h.add(m.doc),T=h.indexOf(m.doc.key)),{type:_x(m.type),doc:y,oldIndex:v,newIndex:T}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new le(G.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=La._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Yd.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],s=[],o=[];return this.docs.forEach((u=>{u._document!==null&&(t.push(u._document),s.push(this._userDataWriter.convertObjectMap(u._document.data.value.mapValue.fields,"previous")),o.push(u.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function _x(i){switch(i){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ve(61501,{type:i})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vx(i){i=_o(i,yt);const e=_o(i.firestore,Tc);return sx(Cv(e),i._key).then((t=>Tx(e,i,t)))}La._jsonSchemaVersion="firestore/querySnapshot/1.0",La._jsonSchema={type:ct("string",La._jsonSchemaVersion),bundleSource:ct("string","QuerySnapshot"),bundleName:ct("string"),bundle:ct("string")};class wx extends yx{constructor(e){super(),this.firestore=e}convertBytes(e){return new In(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new yt(this.firestore,null,t)}}function fy(i,e,t){i=_o(i,yt);const s=_o(i.firestore,Tc),o=Uv(i.converter,e,t);return zv(s,[bv(Nv(s),"setDoc",i._key,o,i.converter!==null,t).toMutation(i._key,sr.none())])}function Ex(i,e){const t=_o(i.firestore,Tc),s=Lu(i),o=Uv(i.converter,e);return zv(t,[bv(Nv(i.firestore),"addDoc",s._key,o,i.converter!==null,{}).toMutation(s._key,sr.exists(!1))]).then((()=>s))}function zv(i,e){return(function(s,o){const u=new _i;return s.asyncQueue.enqueueAndForget((async()=>Wk(await rx(s),o,u))),u.promise})(Cv(i),e)}function Tx(i,e,t){const s=t.docs.get(e._key),o=new wx(i);return new rs(i,o,e._key,s,new Pa(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(o){xo=o})(So),mo(new ss("firestore",((s,{instanceIdentifier:o,options:u})=>{const h=s.getProvider("app").getImmediate(),m=new Tc(new l1(s.getProvider("auth-internal")),new h1(h,s.getProvider("app-check-internal")),(function(v,T){if(!Object.prototype.hasOwnProperty.apply(v.options,["projectId"]))throw new le(G.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new $a(v.options.projectId,T)})(h,o),h);return u={useFetchStreams:t,...u},m._setSettings(u),m}),"PUBLIC").setMultipleInstances(!0)),gi(_g,vg,e),gi(_g,vg,"esm2020")})();/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ix=i=>i.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Sx=i=>i.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,s)=>s?s.toUpperCase():t.toLowerCase()),py=i=>{const e=Sx(i);return e.charAt(0).toUpperCase()+e.slice(1)},Bv=(...i)=>i.filter((e,t,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===t).join(" ").trim(),kx=i=>{for(const e in i)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var xx={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ax=Re.forwardRef(({color:i="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:s,className:o="",children:u,iconNode:h,...m},y)=>Re.createElement("svg",{ref:y,...xx,width:e,height:e,stroke:i,strokeWidth:s?Number(t)*24/Number(e):t,className:Bv("lucide",o),...!u&&!kx(m)&&{"aria-hidden":"true"},...m},[...h.map(([v,T])=>Re.createElement(v,T)),...Array.isArray(u)?u:[u]]));/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dt=(i,e)=>{const t=Re.forwardRef(({className:s,...o},u)=>Re.createElement(Ax,{ref:u,iconNode:e,className:Bv(`lucide-${Ix(py(i))}`,`lucide-${i}`,s),...o}));return t.displayName=py(i),t};/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cx=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],Rx=Dt("arrow-left",Cx);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Px=[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]],Nx=Dt("briefcase",Px);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bx=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],Dx=Dt("calendar",bx);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vx=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],Ox=Dt("circle-check-big",Vx);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mx=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",key:"sc7q7i"}]],Lx=Dt("funnel",Mx);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jx=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],Fx=Dt("globe",jx);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ux=[["path",{d:"m11 17 2 2a1 1 0 1 0 3-3",key:"efffak"}],["path",{d:"m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4",key:"9pr0kb"}],["path",{d:"m21 3 1 11h-2",key:"1tisrp"}],["path",{d:"M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3",key:"1uvwmv"}],["path",{d:"M3 4h8",key:"1ep09j"}]],zx=Dt("handshake",Ux);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bx=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]],$x=Dt("image",Bx);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hx=[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]],Wx=Dt("log-out",Hx);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qx=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],Gx=Dt("map-pin",qx);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kx=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]],Qx=Dt("moon",Kx);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yx=[["path",{d:"M13 21h8",key:"1jsn5i"}],["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}]],Xx=Dt("pen-line",Yx);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jx=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],Zx=Dt("search",Jx);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eA=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],tA=Dt("sparkles",eA);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nA=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],rA=Dt("sun",nA);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iA=[["path",{d:"M16 7h6v6",key:"box55l"}],["path",{d:"m22 7-8.5 8.5-5-5L2 17",key:"1t1m79"}]],sA=Dt("trending-up",iA);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oA=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],$v=Dt("x",oA),aA="/assets/aicte-logo-DB6mOxZU.png",lA={apiKey:"AIzaSyAnr9qtfsM34ZJfNT56Q8FiKfIzvXGLMkw",authDomain:"sih-2025-b3b6e.firebaseapp.com",projectId:"sih-2025-b3b6e",storageBucket:"sih-2025-b3b6e.firebasestorage.app",messagingSenderId:"344042966142",appId:"1:344042966142:web:9f8616f6b183e241a7dc2f",measurementId:"G-FJRZGCYQCB"},Hv=xy(lA),xu=i1(Hv),Au=lx(Hv);function uA(){const[i,e]=Re.useState("landing"),[t,s]=Re.useState(!1),[o,u]=Re.useState(!1),[h,m]=Re.useState(!1),[y,v]=Re.useState(""),[T,A]=Re.useState({location:"",mode:"",skills:"",role:"",minStipend:0}),[R,j]=Re.useState([]),[$,Y]=Re.useState(!1),[B,fe]=Re.useState(null),[ue,ye]=Re.useState({name:"",email:"",phone:"",dob:"",gender:"",state:"",city:"",university:"",qualification:"",course:"",skills:[],resume:"",profilePhoto:""}),[Ae,We]=Re.useState(!1),[Ve,b]=Re.useState(""),[S,x]=Re.useState("light"),[N,D]=Re.useState(!1),[O,k]=Re.useState(!1),[Ye,vt]=Re.useState(null);Re.useEffect(()=>{const ee=localStorage.getItem("theme");ee&&(x(ee),document.documentElement.classList.add(ee));const he=qT(xu,async we=>{we?(fe(we),s(!0),await wt(we.uid)):(fe(null),s(!1),ye({name:"",email:"",phone:"",dob:"",gender:"",state:"",city:"",university:"",qualification:"",course:"",skills:[],resume:"",profilePhoto:""}))});return()=>he()},[]);const wt=async ee=>{D(!0);const he=Lu(Au,"users",ee);try{const we=await vx(he);we.exists()&&ye(we.data())}catch(we){console.error("Failed to fetch user profile:",we)}finally{D(!1)}};Re.useEffect(()=>{if(Ae){const ee=setTimeout(()=>{We(!1)},3e3);return()=>clearTimeout(ee)}},[Ae]);const Se=ee=>{b(ee),We(!0)},Z=async({email:ee,password:he})=>{try{await $T(xu,ee,he),u(!1),e("home"),Se("Logged in successfully!")}catch(we){console.error("Login failed:",we.message),Se("Login failed. Check your email and password.")}},de=async({name:ee,email:he,password:we,areaOfInterest:Fe})=>{try{const nn=(await BT(xu,he,we)).user,Sn=Lu(Au,"users",nn.uid);await fy(Sn,{name:ee,email:he,skills:[Fe],createdAt:new Date().toISOString()}),m(!1),e("home"),Se("Registration successful! Welcome.")}catch(Ze){console.error("Registration failed:",Ze.message),Se("Registration failed. Please try again.")}},te=async()=>{try{await GT(xu),e("landing"),Se("Logged out successfully.")}catch(ee){console.error("Logout failed:",ee.message),Se("Logout failed.")}},V=async ee=>{if(B)try{const he=Lu(Au,"users",B.uid);await fy(he,ee,{merge:!0}),ye(ee),e("home"),Se("Profile saved successfully!")}catch(he){console.error("Saving profile failed:",he.message),Se("Failed to save profile.")}},H=async ee=>{if(!B){u(!0),Se("Please log in to apply for an internship.");return}try{const he=ax(Au,"applications");await Ex(he,{userId:B.uid,userName:ue.name,userEmail:ue.email,internshipId:ee.id,internshipTitle:ee.title,company:ee.company,appliedAt:new Date().toISOString()}),vt(ee),k(!0)}catch(he){console.error("Failed to save application:",he),Se("Failed to apply for the internship. Please try again.")}},ce=()=>{x(ee=>{const he=ee==="light"?"dark":"light";return localStorage.setItem("theme",he),document.documentElement.classList.remove(ee),document.documentElement.classList.add(he),he})};Wv.filter(ee=>{const he=ee.title.toLowerCase().includes(y.toLowerCase())||ee.company.toLowerCase().includes(y.toLowerCase())||ee.location.toLowerCase().includes(y.toLowerCase()),we=T.location===""||ee.location.includes(T.location),Fe=T.mode===""||ee.mode===T.mode,Ze=T.role===""||ee.title.toLowerCase().includes(T.role.toLowerCase()),nn=ee.stipend>=T.minStipend;let Sn=!0;return T.skills!==""&&(Sn=T.skills.toLowerCase().split(",").map(kn=>kn.trim()).some(kn=>ee.skills.some(Lr=>Lr.toLowerCase().includes(kn)))),he&&we&&Fe&&Ze&&nn&&Sn});const ke=async()=>{Y(!0),console.log("Fetching recommendations from backend API...");try{const ee={qualification:ue.qualification,skills:ue.skills,preferred_locations:[ue.city,"Remote"],preferred_sectors:ue.skills,preferred_work_arrangement:["Hybrid","In-Office","Work from Home"]},he=await fetch("YOUR_CLOUD_FUNCTION_URL",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({user_profile:ee})});if(!he.ok)throw new Error(`HTTP error! status: ${he.status}`);const we=await he.json();j(we.recommendations),Se("Recommendations loaded successfully!")}catch(ee){console.error("Failed to fetch recommendations:",ee),Se("Failed to load recommendations. Please try again.")}finally{Y(!1)}},xe=()=>{switch(i){case"landing":return E.jsxs(E.Fragment,{children:[E.jsx(my,{title:"Welcome Your Dream PM Internship",subtitle:"The smartest way to get personalized internship recommendations.",isLandingPage:!0,showLoginModal:()=>u(!0),showRegisterModal:()=>m(!0)}),E.jsxs("main",{children:[E.jsx(kA,{}),E.jsx(xA,{})]})]});case"home":return E.jsxs(E.Fragment,{children:[E.jsx(my,{title:"Explore Top Product Internships",subtitle:"Get personalized recommendations tailored to your skills and interests.",isLandingPage:!1,searchTerm:y,setSearchTerm:v}),E.jsx("main",{className:"container mx-auto px-4 py-16 flex flex-col md:flex-row gap-8",children:$?E.jsxs("div",{className:"flex justify-center items-center h-64 w-full",children:[E.jsx("div",{className:"loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-24 w-24"}),E.jsx("p",{className:"text-xl text-gray-500 ml-4",children:"Fetching recommendations..."})]}):E.jsxs("div",{className:"w-full md:w-3/4",children:[E.jsx("button",{onClick:ke,className:"mb-8 w-full bg-green-600 text-white font-bold py-3 px-6 rounded-xl hover:bg-green-700 transition-colors duration-300",children:"Get My Top Recommendations"}),R.length>0?E.jsx(vA,{internships:R,onApply:H}):E.jsx("div",{className:"col-span-2 text-center text-gray-500 dark:text-gray-400 py-16",children:E.jsx("p",{className:"text-lg",children:"Click the button above to get your top recommendations!"})})]})})]});case"profile":return E.jsx(IA,{onSave:V,profileData:ue,setCurrentPage:e});case"availableInternships":return E.jsx(CA,{onApply:H});default:return null}};return E.jsxs("div",{className:"min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-800 dark:text-gray-200 transition-colors duration-300",children:[E.jsx("script",{src:"https://cdn.tailwindcss.com"}),E.jsx("style",{children:cA}),E.jsx(_A,{isLoggedIn:t,setCurrentPage:e,setShowLoginModal:u,setShowRegisterModal:m,handleLogout:te,theme:S,toggleTheme:ce}),Ae&&E.jsx(SA,{message:Ve}),o&&E.jsx(EA,{onClose:()=>u(!1),setShowRegisterModal:m,handleLogin:Z}),h&&E.jsx(TA,{onClose:()=>m(!1),setShowLoginModal:u,handleRegister:de}),O&&Ye&&E.jsx(wA,{onClose:()=>k(!1),internshipTitle:Ye.title}),xe(),E.jsx(AA,{})]})}const cA=`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
body {
  font-family: 'Inter', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.animate-fade-in-up {
  animation: fadeInUp 0.6s ease-out forwards;
}
.animate-fade-in {
  animation: fadeIn 0.3s ease-out forwards;
}
.animate-zoom-in {
  animation: zoomIn 0.3s ease-out forwards;
}
.animate-fade-in-down {
  animation: fadeInDown 0.4s ease-out forwards;
}
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes zoomIn {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
`,Wv=[{id:1,title:"Web Development Intern",company:"InnovateX",location:"Bengaluru",score:98,description:"Join our product team to work on a cutting-edge SaaS platform. You will be involved in market research, feature definition, and user journey mapping. Strong analytical skills and a passion for technology are a must.",skills:["Agile","Market Research","UX/UI","Jira"],mode:"Offline",stipend:25e3},{id:2,title:"Data Science Intern",company:"TechGrowth Solutions",location:"Mumbai",score:95,description:"Assist in the development and launch of a new mobile app feature. This role offers hands-on experience in product lifecycle management, from ideation to launch and analysis. Ideal for students with a problem-solving mindset.",skills:["Product Lifecycle","Data Analysis","User Stories","SQL"],mode:"Hybrid",stipend:35e3},{id:3,title:"PM Summer Intern",company:"Global Innovation Inc.",location:"Remote",score:92,description:"A remote internship focused on digital product strategy. You will collaborate with cross-functional teams to identify new opportunities and define product requirements. Excellent communication skills are required.",skills:["Product Strategy","Figma","User Research","Communication"],mode:"Online",stipend:2e4},{id:4,title:"Product Strategy Intern",company:"Future Forward",location:"Delhi",score:88,description:"Dive into product strategy and help shape the future of our enterprise software. This role requires a strategic mindset and a desire to understand complex business problems.",skills:["Product Strategy","Business Analysis","Roadmapping"],mode:"Hybrid",stipend:45e3},{id:5,title:"Junior Software Intern",company:"CloudCo",location:"Pune",score:85,description:"Work with a senior PM to manage a key product line. You will contribute to product roadmaps, sprint planning, and performance metrics analysis. Experience with cloud technologies is a plus.",skills:["Product Roadmap","Sprint Planning","Metrics","Cloud"],mode:"Offline",stipend:3e4},{id:6,title:"UX Product Intern",company:"DesignWorks",location:"Remote",score:80,description:"Focus on the intersection of user experience and product management. You will help bridge the gap between design and development to create user-centric products. A portfolio of design work is a plus.",skills:["UX Design","User Testing","Wireframing"],mode:"Online",stipend:18e3},{id:7,title:"Product Management Intern",company:"DesignWorks",location:"Hyderabad",score:80,description:"Focus on the intersection of user experience and product management. You will help bridge the gap between design and development to create user-centric products. A portfolio of design work is a plus.",skills:["UX Design","User Testing","Wireframing"],mode:"Offline",stipend:22e3},{id:8,title:"AI-Engineer Intern",company:"DesignWorks",location:"Bengaluru",score:80,description:"Focus on the intersection of user experience and product management. You will help bridge the gap between design and development to create user-centric products. A portfolio of design work is a plus.",skills:["UX Design","User Testing","Wireframing"],mode:"Online",stipend:32e3},{id:9,title:"Product Marketing Intern",company:"MarketMinds",location:"Mumbai",score:78,description:"Develop and execute marketing strategies for new product launches. You will work on content creation, social media campaigns, and market analysis.",skills:["Marketing","SEO","Content Creation"],mode:"Offline",stipend:28e3},{id:10,title:"Mobile App Intern",company:"AppGenius",location:"Bengaluru",score:89,description:"Help manage the lifecycle of our flagship mobile application. This role involves working with designers and developers to ship new features.",skills:["iOS","Android","Agile","Jira"],mode:"Hybrid",stipend:4e4},{id:11,title:"QA Intern",company:"CodeVerify",location:"Remote",score:75,description:"Ensure the quality of our software products through rigorous testing and bug reporting. Attention to detail is key.",skills:["QA Testing","Bug Tracking","Jira"],mode:"Online",stipend:15e3},{id:12,title:"Product Data Analyst",company:"InsightHub",location:"Mumbai",score:91,description:"Analyze user behavior data to provide insights that drive product decisions. Experience with SQL and data visualization tools is a plus.",skills:["SQL","Data Analysis","Tableau"],mode:"Hybrid",stipend:38e3},{id:13,title:"Junior UI/UX Designer",company:"PixelPerfect",location:"Remote",score:87,description:"Work on creating intuitive and aesthetically pleasing user interfaces. A portfolio showcasing your design skills is a must.",skills:["Figma","Sketch","UI/UX Design"],mode:"Online",stipend:24e3},{id:14,title:"Technical Product Intern",company:"TechSolutions",location:"Delhi",score:96,description:"Bridge the gap between engineering and product teams. This role is ideal for students with a technical background and an interest in product management.",skills:["Technical Writing","APIs","SaaS"],mode:"Offline",stipend:42e3},{id:15,title:"Community Manager Intern",company:"ConnectHub",location:"Remote",score:70,description:"Grow our user community by engaging with members and creating engaging content. Strong communication skills are essential.",skills:["Social Media","Community Management"],mode:"Online",stipend:16e3},{id:16,title:"Cybersecurity Intern",company:"SecureCloud",location:"Pune",score:85,description:"Assist in identifying and mitigating security vulnerabilities in our products. This role requires knowledge of cybersecurity principles.",skills:["Cybersecurity","Networking"],mode:"Hybrid",stipend:3e4},{id:17,title:"Financial Analyst Intern",company:"FinPulse",location:"Mumbai",score:82,description:"Help analyze financial data and create reports to support business decisions. Proficiency in Excel is required.",skills:["Finance","Excel","Data Analysis"],mode:"Offline",stipend:28e3},{id:18,title:"Product Manager Intern",company:"NextGen",location:"Remote",score:90,description:"A hands-on role in product management, from feature ideation to launch. Work closely with a team of designers and engineers.",skills:["Agile","Jira","Product Lifecycle"],mode:"Online",stipend:33e3},{id:19,title:"Software Development Intern",company:"DevLabs",location:"Bengaluru",score:88,description:"Develop and maintain software applications using modern technologies. This role is perfect for aspiring developers.",skills:["JavaScript","Python","React"],mode:"Hybrid",stipend:38e3},{id:20,title:"Content Strategy Intern",company:"WordStream",location:"Remote",score:75,description:"Shape the content strategy for our digital products. You will be involved in content planning and optimization.",skills:["Content Strategy","SEO","Writing"],mode:"Online",stipend:19e3},{id:21,title:"Data Engineering Intern",company:"DataPipe",location:"Mumbai",score:85,description:"Assist in building and maintaining data pipelines and infrastructure. Experience with cloud platforms is a plus.",skills:["ETL","SQL","AWS"],mode:"Offline",stipend:36e3},{id:22,title:"AI/ML Intern",company:"CogniTech",location:"Delhi",score:95,description:"Work on developing and deploying machine learning models for our products. This role requires strong programming and math skills.",skills:["Python","Machine Learning","TensorFlow"],mode:"Hybrid",stipend:48e3},{id:23,title:"Growth Marketing Intern",company:"GrowthHackers",location:"Pune",score:80,description:"Drive user acquisition and retention through data-driven marketing campaigns. A passion for growth is a must.",skills:["Marketing","Data Analysis","Growth Hacking"],mode:"Offline",stipend:26e3},{id:24,title:"Backend Development Intern",company:"ServerSide",location:"Remote",score:88,description:"Develop and maintain backend services and APIs. This role is ideal for students with an interest in server-side technologies.",skills:["Node.js","Express.js","MongoDB"],mode:"Online",stipend:32e3},{id:25,title:"Frontend Development Intern",company:"Frontier",location:"Hyderabad",score:87,description:"Build and optimize user-facing interfaces for our web applications. Strong knowledge of HTML, CSS, and JavaScript is a plus.",skills:["HTML","CSS","JavaScript","React"],mode:"Hybrid",stipend:34e3},{id:26,title:"Human Resources Intern",company:"PeopleConnect",location:"Remote",score:72,description:"Assist the HR team with recruitment, employee onboarding, and policy development. Excellent interpersonal skills are required.",skills:["HR","Recruitment","Communication"],mode:"Online",stipend:17e3},{id:27,title:"Business Analyst Intern",company:"BizInsights",location:"Mumbai",score:83,description:"Analyze business processes and help identify areas for improvement. This role is for students with strong analytical skills.",skills:["Business Analysis","Excel","SQL"],mode:"Offline",stipend:29e3},{id:28,title:"Technical Support Intern",company:"HelpDesk",location:"Remote",score:70,description:"Provide technical assistance to customers and help troubleshoot product issues. Strong problem-solving skills are a must.",skills:["Customer Support","Troubleshooting"],mode:"Online",stipend:15e3},{id:29,title:"Product Design Intern",company:"UXperts",location:"Pune",score:90,description:"Contribute to the design of our digital products, from wireframes to high-fidelity prototypes. A portfolio is required.",skills:["Figma","Sketch","UI/UX Design"],mode:"Offline",stipend:28e3},{id:30,title:"Operations Intern",company:"FlowOps",location:"Bengaluru",score:75,description:"Assist in optimizing business operations and streamlining workflows. This role is for a highly organized and detail-oriented individual.",skills:["Operations","Project Management"],mode:"Hybrid",stipend:22e3}],hA=["Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chhattisgarh","Goa","Gujarat","Haryana","Himachal Pradesh","Jharkhand","Karnataka","Kerala","Madhya Pradesh","Maharashtra","Manipur","Meghalaya","Mizoram","Nagaland","Odisha","Punjab","Rajasthan","Sikkim","Tamil Nadu","Telangana","Tripura","Uttar Pradesh","Uttarakhand","West Bengal"],dA={"Andhra Pradesh":["Visakhapatnam","Vijayawada","Tirupati"],"Arunachal Pradesh":["Itanagar","Tawang","Ziro"],Assam:["Guwahati","Dibrugarh","Silchar"],Bihar:["Patna","Gaya","Bhagalpur"],Chhattisgarh:["Raipur","Bhilai","Bilaspur"],Goa:["Panaji","Margao","Vasco da Gama"],Gujarat:["Ahmedabad","Surat","Vadodara"],Haryana:["Gurugram","Faridabad","Panipat"],"Himachal Pradesh":["Shimla","Manali","Dharamshala"],Jharkhand:["Ranchi","Jamshedpur","Dhanbad"],Karnataka:["Bengaluru","Mysuru","Hubli"],Kerala:["Thiruvananthapuram","Kochi","Kozhikode"],"Madhya Pradesh":["Bhopal","Indore","Gwalior"],Maharashtra:["Mumbai","Pune","Nagpur"],Manipur:["Imphal","Bishnupur","Churachandpur"],Meghalaya:["Shillong","Cherrapunji","Tura"],Mizoram:["Aizawl","Lunglei","Champhai"],Nagaland:["Kohima","Dimapur","Mokokchung"],Odisha:["Bhubaneswar","Cuttack","Puri"],Punjab:["Amritsar","Ludhiana","Chandigarh"],Rajasthan:["Jaipur","Udaipur","Jodhpur"],Sikkim:["Gangtok","Namchi","Pelling"],"Tamil Nadu":["Chennai","Coimbatore","Madurai"],Telangana:["Hyderabad","Warangal","Nizamabad"],Tripura:["Agartala","Udaipur","Dharmanagar"],"Uttar Pradesh":["Lucknow","Kanpur","Noida"],Uttarakhand:["Dehradun","Haridwar","Nainital"],"West Bengal":["Kolkata","Darjeeling","Siliguri"]},fA=["B.Tech","M.Tech","B.A.","B.Sc.","M.Sc.","Any Graduate"],pA={"B.Tech":["Computer Science","Electrical Engineering","Mechanical Engineering"],"M.Tech":["Computer Science","Data Science","AI/ML"],"B.A.":["English Literature","History","Economics"],"B.Sc.":["Physics","Chemistry","Mathematics"],"M.Sc.":["Data Science","Physics","Chemistry"],"Any Graduate":["General"]},mA=["IT","Marketing","Finance","Design","HR"],gA=["Online","Offline","Hybrid"],qv=["React","Python","JavaScript","Figma","SQL","Agile","Jira","Machine Learning","SEO","UI/UX Design","Data Analysis","Node.js","Project Management"],yA=["Bengaluru","Mumbai","Delhi","Pune","Hyderabad","Chennai","Kolkata","Remote"],_A=({isLoggedIn:i,setCurrentPage:e,setShowLoginModal:t,setShowRegisterModal:s,handleLogout:o,theme:u,toggleTheme:h})=>E.jsx("nav",{className:"sticky top-0 z-40 bg-white dark:bg-gray-900 shadow-sm font-semibold transition-colors duration-300",children:E.jsxs("div",{className:"container mx-auto px-6 py-4 flex justify-between items-center",children:[E.jsxs("div",{className:"flex items-center space-x-4",children:[E.jsx("a",{href:"#",className:"text-2xl font-bold text-blue-600",children:"PM Interns"}),E.jsx("img",{src:aA,alt:"AICTE Logo",className:"h-8"})]}),E.jsxs("div",{className:"flex items-center space-x-2 sm:space-x-4",children:[E.jsx("button",{onClick:()=>e("home"),className:"text-gray-700 dark:text-gray-300 py-2 px-4 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300",children:"Home"}),i?E.jsxs(E.Fragment,{children:[E.jsx("button",{onClick:()=>e("availableInternships"),className:"text-gray-700 dark:text-gray-300 py-2 px-4 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300",children:"Available Internships"}),E.jsxs("button",{onClick:()=>e("profile"),className:"flex items-center text-gray-700 dark:text-gray-300 py-2 px-4 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300",children:[E.jsx(Xx,{size:18,className:"inline mr-2"}),"My Profile"]}),E.jsxs("button",{onClick:o,className:"flex items-center text-red-600 py-2 px-4 rounded-full hover:bg-red-50 dark:hover:bg-red-900 transition-all duration-300 border border-red-100 dark:border-red-900",children:[E.jsx(Wx,{size:18,className:"inline mr-2"}),"Logout"]})]}):E.jsxs(E.Fragment,{children:[E.jsx("button",{onClick:()=>t(!0),className:"bg-blue-50 text-blue-700 font-semibold py-2 px-4 rounded-full border border-blue-100 hover:bg-blue-100 transition-colors duration-300",children:"Log In"}),E.jsx("button",{onClick:()=>s(!0),className:"bg-blue-600 text-white font-semibold py-2 px-4 rounded-full hover:bg-blue-700 transition-colors duration-300",children:"Register"})]}),E.jsx("button",{onClick:h,className:"p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300",children:u==="dark"?E.jsx(rA,{size:24,className:"text-yellow-400"}):E.jsx(Qx,{size:24,className:"text-gray-500"})})]})]})}),my=({title:i,subtitle:e,isLandingPage:t,searchTerm:s,setSearchTerm:o,showLoginModal:u,showRegisterModal:h})=>E.jsx("header",{className:"bg-gradient-to-r from-blue-600 to-blue-500 text-white py-24 px-4",children:E.jsxs("div",{className:"container mx-auto text-center",children:[E.jsx("h1",{className:"text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 animate-fade-in-up",children:i}),E.jsx("p",{className:"text-lg md:text-xl opacity-90 mb-8 animate-fade-in-up",children:e}),t?E.jsxs("div",{className:"flex justify-center space-x-4 animate-fade-in-up",children:[E.jsx("button",{onClick:u,className:"bg-white text-blue-600 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300",children:"Log In"}),E.jsx("button",{onClick:()=>h(),className:"bg-blue-700 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-blue-800 transform hover:scale-105 transition-all duration-300",children:"Register"})]}):E.jsxs("div",{className:"max-w-xl mx-auto flex items-center bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg transform translate-y-8 animate-fade-in-up",children:[E.jsx(Zx,{size:24,className:"text-gray-400 dark:text-gray-500 ml-4"}),E.jsx("input",{type:"text",placeholder:"Search for a role, company, or location...",className:"w-full bg-transparent px-4 py-3 text-gray-800 dark:text-gray-200 focus:outline-none placeholder-gray-400 dark:placeholder-gray-500",value:s,onChange:m=>o(m.target.value)})]})]})}),Gv=({internship:i,onApply:e})=>E.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 flex flex-col hover:shadow-2xl dark:hover:shadow-lg transform hover:-translate-y-2 transition-all duration-300 cursor-pointer",children:[E.jsxs("div",{className:"flex justify-between items-start mb-4",children:[E.jsx("h3",{className:"text-xl font-bold text-gray-900 dark:text-gray-100 leading-tight",children:i.title}),E.jsxs("span",{className:"text-sm font-bold text-white bg-blue-500 rounded-full px-3 py-1.5 min-w-[70px] text-center",children:[i.score,"%"]})]}),E.jsxs("div",{className:"flex items-center text-gray-600 dark:text-gray-400 mb-2",children:[E.jsx(Nx,{size:16,className:"mr-2 text-gray-500 dark:text-gray-400"}),E.jsx("p",{className:"font-semibold",children:i.company})]}),E.jsxs("div",{className:"flex items-center text-gray-500 dark:text-gray-400 mb-4",children:[E.jsx(Gx,{size:16,className:"mr-2 text-gray-400 dark:text-gray-500"}),E.jsxs("p",{children:[i.location," (",i.mode,")"]})]}),E.jsx("p",{className:"text-gray-700 dark:text-gray-300 mb-4 flex-grow text-sm leading-relaxed",children:i.description}),E.jsx("div",{className:"flex flex-wrap gap-2 mb-4",children:i.skills.map(t=>E.jsx("span",{className:"bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs px-3 py-1 rounded-full",children:t},t))}),E.jsxs("div",{className:"flex justify-between items-center mt-auto",children:[E.jsxs("p",{className:"text-lg font-bold text-green-600 dark:text-green-400",children:[i.stipend," ₹"]}),E.jsx("button",{onClick:()=>e(i),className:"bg-blue-600 text-white font-bold py-3 px-6 rounded-xl hover:bg-blue-700 transition-colors duration-300",children:"Apply Now"})]})]}),vA=({internships:i,onApply:e})=>E.jsxs("section",{className:"w-full md:w-3/4",children:[E.jsxs("h2",{className:"text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200",children:["Personalized Recommendations (",i.length,")"]}),E.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:i.length>0?i.map(t=>E.jsx(Gv,{internship:t,onApply:e},t.id)):E.jsx("div",{className:"col-span-2 text-center text-gray-500 dark:text-gray-400 py-16",children:E.jsx("p",{className:"text-lg",children:"No internships found matching your criteria. Try adjusting your search or filters."})})})]}),kf=({children:i,onClose:e})=>E.jsx("div",{className:"fixed inset-0 bg-gray-900 bg-opacity-70 flex items-center justify-center p-4 z-50 animate-fade-in",children:E.jsxs("div",{className:"relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 max-w-sm w-full animate-zoom-in",children:[E.jsx("button",{onClick:e,className:"absolute top-4 right-4 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-400 transition-colors duration-200",children:E.jsx($v,{size:24})}),i]})}),wA=({onClose:i,internshipTitle:e})=>E.jsx(kf,{onClose:i,children:E.jsxs("div",{className:"flex flex-col items-center justify-center space-y-4",children:[E.jsx(Ox,{size:64,className:"text-green-500 animate-zoom-in"}),E.jsx("h2",{className:"text-2xl font-bold text-gray-800 dark:text-gray-100 text-center",children:"Congratulations!"}),E.jsxs("p",{className:"text-center text-gray-600 dark:text-gray-400",children:["You have successfully applied for the **",e,"** internship."]}),E.jsx("button",{onClick:i,className:"bg-blue-600 text-white font-bold py-3 px-6 rounded-xl hover:bg-blue-700 transition-colors duration-300 w-full mt-4",children:"Awesome!"})]})}),EA=({onClose:i,setShowRegisterModal:e,handleLogin:t})=>{const[s,o]=Re.useState(""),[u,h]=Re.useState(""),m=y=>{y.preventDefault(),t({email:s,password:u})};return E.jsxs(kf,{onClose:i,children:[E.jsx("h2",{className:"text-2xl font-bold text-gray-800 dark:text-gray-100 text-center mb-2",children:"Student Login"}),E.jsxs("form",{onSubmit:m,children:[E.jsxs("div",{className:"mb-4",children:[E.jsx("label",{className:"block text-gray-700 dark:text-gray-300 mb-2",htmlFor:"username",children:"Email"}),E.jsx("input",{type:"email",id:"username",placeholder:"user@example.com",className:"w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500",value:s,onChange:y=>o(y.target.value),required:!0})]}),E.jsxs("div",{className:"mb-6",children:[E.jsx("label",{className:"block text-gray-700 dark:text-gray-300 mb-2",htmlFor:"password",children:"Password"}),E.jsx("input",{type:"password",id:"password",placeholder:"********",className:"w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500",value:u,onChange:y=>h(y.target.value),required:!0})]}),E.jsx("button",{type:"submit",className:"w-full bg-blue-600 text-white font-bold py-3 rounded-full hover:bg-blue-700 transition-colors",children:"Log In"})]}),E.jsxs("p",{className:"mt-4 text-center text-gray-600 dark:text-gray-400",children:["Don't have an account? ",E.jsx("span",{onClick:()=>{i(),e(!0)},className:"text-blue-600 font-semibold cursor-pointer hover:underline",children:"Register here"})]})]})},TA=({onClose:i,setShowLoginModal:e,handleRegister:t})=>{const[s,o]=Re.useState(""),[u,h]=Re.useState(""),[m,y]=Re.useState(""),[v,T]=Re.useState(""),[A,R]=Re.useState(""),[j,$]=Re.useState(""),Y=B=>{if(B.preventDefault(),$(""),m!==v){$("Passwords don't match.");return}t({name:s,email:u,password:m,areaOfInterest:A})};return E.jsxs(kf,{onClose:i,children:[E.jsx("h2",{className:"text-2xl font-bold text-gray-800 dark:text-gray-100 text-center mb-2",children:"Student Registration"}),E.jsxs("form",{onSubmit:Y,children:[E.jsxs("div",{className:"mb-4",children:[E.jsx("label",{className:"block text-gray-700 dark:text-gray-300 mb-2",htmlFor:"register-name",children:"Name"}),E.jsx("input",{type:"text",id:"register-name",placeholder:"John Doe",className:"w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500",value:s,onChange:B=>o(B.target.value),required:!0})]}),E.jsxs("div",{className:"mb-4",children:[E.jsx("label",{className:"block text-gray-700 dark:text-gray-300 mb-2",htmlFor:"register-email",children:"Email"}),E.jsx("input",{type:"email",id:"register-email",placeholder:"user@example.com",className:"w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500",value:u,onChange:B=>h(B.target.value),required:!0})]}),E.jsxs("div",{className:"mb-4",children:[E.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",htmlFor:"areaOfInterest",children:"Area of Interest"}),E.jsxs("select",{id:"areaOfInterest",name:"areaOfInterest",value:A,onChange:B=>R(B.target.value),className:"w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500",required:!0,children:[E.jsx("option",{value:"",children:"Select your area of interest"}),mA.map(B=>E.jsx("option",{value:B,children:B},B))]})]}),E.jsxs("div",{className:"mb-4",children:[E.jsx("label",{className:"block text-gray-700 dark:text-gray-300 mb-2",htmlFor:"register-password",children:"Password"}),E.jsx("input",{type:"password",id:"register-password",placeholder:"********",className:"w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500",value:m,onChange:B=>y(B.target.value),required:!0})]}),E.jsxs("div",{className:"mb-6",children:[E.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",htmlFor:"confirm-password",children:"Confirm Password"}),E.jsx("input",{type:"password",id:"confirm-password",placeholder:"********",className:"w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500",value:v,onChange:B=>T(B.target.value),required:!0}),j&&E.jsx("p",{className:"text-red-500 text-sm mt-2",children:j})]}),E.jsx("button",{type:"submit",className:"w-full bg-blue-600 text-white font-bold py-3 rounded-xl hover:bg-blue-700 transition-colors",children:"Register"})]}),E.jsxs("p",{className:"mt-4 text-center text-gray-600 dark:text-gray-400",children:["Already have an account? ",E.jsx("span",{onClick:()=>{i(),e(!0)},className:"text-blue-600 font-semibold cursor-pointer hover:underline",children:"Log in here"})]})]})},IA=({onSave:i,profileData:e,setCurrentPage:t})=>{const[s,o]=Re.useState(e),[u,h]=Re.useState("");Re.useEffect(()=>{o(e)},[e]);const y=(()=>{let $=0;return s.name&&$++,s.email&&$++,s.phone&&$++,s.dob&&$++,s.gender&&$++,s.state&&$++,s.city&&$++,s.university&&$++,s.qualification&&$++,s.course&&$++,s.skills&&s.skills.length>0&&$++,Math.floor($/11*100)})(),v=j=>{j&&!s.skills.includes(j)&&(o($=>({...$,skills:[...$.skills,j]})),h(""))},T=j=>{o($=>({...$,skills:$.skills.filter(Y=>Y!==j)}))},A=j=>{const{name:$,value:Y,files:B}=j.target;if($==="resume"&&B.length>0)o(fe=>({...fe,[$]:B[0].name}));else if($==="profilePhoto"&&B.length>0){const fe=URL.createObjectURL(B[0]);o(ue=>({...ue,[$]:fe}))}else o(fe=>({...fe,[$]:Y}))},R=j=>{j.preventDefault(),i(s)};return E.jsx("div",{className:"min-h-screen bg-gray-50 dark:bg-gray-950 flex flex-col items-center p-4 md:p-12 transition-colors duration-300",children:E.jsxs("div",{className:"w-full max-w-2xl bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12",children:[E.jsxs("div",{className:"flex justify-between items-center mb-6",children:[E.jsxs("button",{onClick:()=>t("home"),className:"flex items-center text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors",children:[E.jsx(Rx,{size:20,className:"mr-2"}),E.jsx("span",{className:"font-semibold",children:"Back to Home"})]}),E.jsx("h2",{className:"text-2xl font-bold text-gray-800 dark:text-gray-100",children:"My Profile"}),E.jsx("div",{className:"w-1/3"})]}),E.jsxs("div",{className:"mb-8",children:[E.jsxs("h3",{className:"text-lg font-bold text-center text-gray-700 dark:text-gray-300 mb-2",children:["Profile Completion: ",y,"%"]}),E.jsx("div",{className:"w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700",children:E.jsx("div",{className:"bg-blue-600 h-2.5 rounded-full",style:{width:`${y}%`}})})]}),E.jsxs("form",{onSubmit:R,children:[E.jsxs("div",{className:"flex flex-col items-center mb-6",children:[E.jsx("label",{className:"block text-gray-700 dark:text-gray-300 font-semibold mb-4",children:"Profile Photo"}),E.jsxs("div",{className:"relative w-32 h-32 rounded-full overflow-hidden border-4 border-gray-200 dark:border-gray-600",children:[s.profilePhoto?E.jsx("img",{src:s.profilePhoto,alt:"Profile",className:"w-full h-full object-cover"}):E.jsx("div",{className:"w-full h-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-gray-400 dark:text-gray-500",children:E.jsx($x,{size:48})}),E.jsx("input",{type:"file",id:"profilePhoto",name:"profilePhoto",onChange:A,accept:"image/*",className:"absolute inset-0 opacity-0 cursor-pointer w-full h-full"})]})]}),E.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[E.jsxs("div",{className:"mb-4",children:[E.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",htmlFor:"name",children:"Name"}),E.jsx("input",{type:"text",id:"name",name:"name",value:s.name,onChange:A,className:"w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500",placeholder:"John Doe"})]}),E.jsxs("div",{className:"mb-4",children:[E.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",htmlFor:"email",children:"Email"}),E.jsx("input",{type:"email",id:"email",name:"email",value:s.email,onChange:A,className:"w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500",placeholder:"user@example.com"})]}),E.jsxs("div",{className:"mb-4",children:[E.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",htmlFor:"phone",children:"Phone Number"}),E.jsx("input",{type:"tel",id:"phone",name:"phone",value:s.phone,onChange:A,className:"w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500",placeholder:"(123) 456-7890"})]}),E.jsxs("div",{className:"mb-4",children:[E.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",htmlFor:"dob",children:"Date of Birth"}),E.jsxs("div",{className:"relative",children:[E.jsx("input",{type:"date",id:"dob",name:"dob",value:s.dob,onChange:A,className:"w-full px-4 py-2 pr-10 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"}),E.jsx(Dx,{size:20,className:"absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500"})]})]}),E.jsxs("div",{className:"mb-4",children:[E.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",htmlFor:"gender",children:"Gender"}),E.jsxs("select",{id:"gender",name:"gender",value:s.gender,onChange:A,className:"w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500",children:[E.jsx("option",{value:"",children:"Select Gender"}),E.jsx("option",{value:"male",children:"Male"}),E.jsx("option",{value:"female",children:"Female"}),E.jsx("option",{value:"transgender",children:"Transgender"})]})]})]}),E.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 mt-4",children:[E.jsxs("div",{className:"mb-4",children:[E.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",htmlFor:"state",children:"State"}),E.jsxs("select",{id:"state",name:"state",value:s.state,onChange:A,className:"w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500",children:[E.jsx("option",{value:"",children:"Select State"}),hA.map(j=>E.jsx("option",{value:j,children:j},j))]})]}),E.jsxs("div",{className:"mb-4",children:[E.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",htmlFor:"city",children:"City"}),E.jsxs("select",{id:"city",name:"city",value:s.city,onChange:A,className:"w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500",children:[E.jsx("option",{value:"",children:"Select City"}),s.state&&dA[s.state]?.map(j=>E.jsx("option",{value:j,children:j},j))]})]}),E.jsxs("div",{className:"mb-4",children:[E.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",htmlFor:"university",children:"University"}),E.jsx("input",{type:"text",id:"university",name:"university",value:s.university,onChange:A,className:"w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500",placeholder:"Your University Name"})]}),E.jsxs("div",{className:"mb-4",children:[E.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",htmlFor:"qualification",children:"Qualification"}),E.jsxs("select",{id:"qualification",name:"qualification",value:s.qualification,onChange:A,className:"w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500",children:[E.jsx("option",{value:"",children:"Select Qualification"}),fA.map(j=>E.jsx("option",{value:j,children:j},j))]})]}),E.jsxs("div",{className:"mb-4 col-span-1 md:col-span-2",children:[E.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",htmlFor:"course",children:"Course/Specialization"}),E.jsxs("select",{id:"course",name:"course",value:s.course,onChange:A,className:"w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500",children:[E.jsx("option",{value:"",children:"Select Course/Specialization"}),pA[s.qualification]?.map(j=>E.jsx("option",{value:j,children:j},j))]})]}),E.jsxs("div",{className:"mb-4 col-span-1 md:col-span-2",children:[E.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",htmlFor:"skills",children:"Skills"}),E.jsx("div",{className:"flex flex-wrap gap-2",children:qv.map(j=>E.jsx("button",{type:"button",onClick:()=>v(j),className:`text-xs px-3 py-1 rounded-full border transition-colors ${s.skills.includes(j)?"bg-blue-600 text-white border-blue-600":"bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"}`,children:j},j))}),E.jsxs("div",{className:"mt-4 flex space-x-2",children:[E.jsx("input",{type:"text",placeholder:"Add custom skill",className:"w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500",value:u,onChange:j=>h(j.target.value)}),E.jsx("button",{type:"button",onClick:()=>v(u),className:"bg-blue-600 text-white font-bold py-2 px-4 rounded-xl hover:bg-blue-700 transition-colors",children:"Add"})]}),E.jsx("div",{className:"mt-4 flex flex-wrap gap-2",children:s.skills.map(j=>E.jsxs("div",{className:"flex items-center bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-100 text-sm font-medium px-4 py-2 rounded-full",children:[j,E.jsx("button",{type:"button",onClick:()=>T(j),className:"ml-2 text-blue-600 dark:text-blue-200 hover:text-red-500 dark:hover:text-red-400 transition-colors",children:E.jsx($v,{size:16})})]},j))})]}),E.jsxs("div",{className:"mb-4 col-span-1 md:col-span-2",children:[E.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",htmlFor:"resume",children:"Upload Resume"}),E.jsxs("div",{className:"flex items-center space-x-4",children:[E.jsx("input",{type:"file",id:"resume",name:"resume",onChange:A,className:"hidden"}),E.jsx("label",{htmlFor:"resume",className:"cursor-pointer bg-blue-50 text-blue-700 font-semibold py-2 px-4 rounded-full border border-blue-100 hover:bg-blue-100 transition-colors duration-300",children:"Choose File"}),E.jsx("span",{className:"text-gray-500 dark:text-gray-400 text-sm",children:s.resume||"No file chosen"})]})]})]}),E.jsx("div",{className:"flex justify-end mt-8",children:E.jsx("button",{type:"submit",className:"bg-blue-600 text-white font-bold py-3 px-8 rounded-xl hover:bg-blue-700 transition-colors duration-300",children:"Save Profile"})})]})]})})},SA=({message:i})=>E.jsx("div",{className:"fixed top-20 right-4 z-50 animate-fade-in-down",children:E.jsxs("div",{className:"bg-green-500 text-white px-6 py-3 rounded-xl shadow-lg flex items-center space-x-2",children:[E.jsx(tA,{size:20}),E.jsx("p",{className:"font-semibold",children:i})]})}),kA=()=>E.jsx("section",{className:"py-24 px-4 bg-gray-100 dark:bg-gray-900",children:E.jsxs("div",{className:"container mx-auto",children:[E.jsx("h2",{className:"text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-800 dark:text-gray-200 animate-fade-in-up",children:"Our Core Intelligence"}),E.jsxs("div",{className:"grid md:grid-cols-3 gap-8",children:[E.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-2xl p-8 text-center shadow-lg transform hover:-translate-y-2 transition-transform duration-300 animate-fade-in-up",children:[E.jsx("div",{className:"text-blue-600 mb-4 inline-block",children:E.jsx(sA,{size:48})}),E.jsx("h3",{className:"text-xl font-bold mb-2 text-gray-900 dark:text-gray-100",children:"Smart Matching"}),E.jsx("p",{className:"text-gray-600 dark:text-gray-400",children:"Our algorithm connects your profile to the perfect internship, ensuring a high-relevance score."})]}),E.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-2xl p-8 text-center shadow-lg transform hover:-translate-y-2 transition-transform duration-300 animate-fade-in-up",style:{animationDelay:"0.2s"},children:[E.jsx("div",{className:"text-blue-600 mb-4 inline-block",children:E.jsx(zx,{size:48})}),E.jsx("h3",{className:"text-xl font-bold mb-2 text-gray-900 dark:text-gray-100",children:"Industry Partnerships"}),E.jsx("p",{className:"text-gray-600 dark:text-gray-400",children:"We partner with top companies to bring you exclusive internship opportunities you won't find anywhere else."})]}),E.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-2xl p-8 text-center shadow-lg transform hover:-translate-y-2 transition-transform duration-300 animate-fade-in-up",style:{animationDelay:"0.4s"},children:[E.jsx("div",{className:"text-blue-600 mb-4 inline-block",children:E.jsx(Fx,{size:48})}),E.jsx("h3",{className:"text-xl font-bold mb-2 text-gray-900 dark:text-gray-100",children:"Global Reach"}),E.jsx("p",{className:"text-gray-600 dark:text-gray-400",children:"Whether it's remote or on-site, we have opportunities that span across the globe to kickstart your career."})]})]})]})}),xA=()=>E.jsx("section",{className:"py-24 px-4 bg-white dark:bg-gray-950",children:E.jsxs("div",{className:"container mx-auto",children:[E.jsx("h2",{className:"text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-800 dark:text-gray-200 animate-fade-in-up",children:"How It Works"}),E.jsxs("div",{className:"flex flex-col md:flex-row items-center justify-center space-y-12 md:space-y-0 md:space-x-12",children:[E.jsxs("div",{className:"text-center animate-fade-in-up",style:{animationDelay:"0.1s"},children:[E.jsx("div",{className:"bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full w-24 h-24 flex items-center justify-center text-4xl font-bold mx-auto mb-4",children:"1"}),E.jsx("h3",{className:"text-xl font-bold text-gray-900 dark:text-gray-100 mb-2",children:"Create Your Profile"}),E.jsx("p",{className:"text-gray-600 dark:text-gray-400 max-w-xs",children:"Tell us about your skills, interests, and academic background."})]}),E.jsxs("div",{className:"text-center animate-fade-in-up",style:{animationDelay:"0.3s"},children:[E.jsx("div",{className:"bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full w-24 h-24 flex items-center justify-center text-4xl font-bold mx-auto mb-4",children:"2"}),E.jsx("h3",{className:"text-xl font-bold text-gray-900 dark:text-gray-100 mb-2",children:"Get Matched"}),E.jsx("p",{className:"text-gray-600 dark:text-gray-400 max-w-xs",children:"Our smart algorithm finds the perfect internship opportunities for you."})]}),E.jsxs("div",{className:"text-center animate-fade-in-up",style:{animationDelay:"0.5s"},children:[E.jsx("div",{className:"bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full w-24 h-24 flex items-center justify-center text-4xl font-bold mx-auto mb-4",children:"3"}),E.jsx("h3",{className:"text-xl font-bold text-gray-900 dark:text-gray-100 mb-2",children:"Apply & Launch"}),E.jsx("p",{className:"text-gray-600 dark:text-gray-400 max-w-xs",children:"Apply to your top choices and kickstart your Product Management career."})]})]})]})}),AA=()=>E.jsx("footer",{className:"bg-gray-200 dark:bg-gray-800 py-8",children:E.jsxs("div",{className:"container mx-auto px-4 text-center text-gray-600 dark:text-gray-400",children:[E.jsxs("p",{children:["© ",new Date().getFullYear()," PM Interns. ❤️ by Innoventures"]}),E.jsxs("div",{className:"mt-4 flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-6",children:[E.jsx("a",{href:"/about",className:"hover:underline",children:"About Us"}),E.jsx("a",{href:"/contact",className:"hover:underline",children:"Contact Us"}),E.jsx("a",{href:"/terms",className:"hover:underline",children:"Terms & Conditions"}),E.jsx("a",{href:"/privacy",className:"hover:underline",children:"Privacy Policy"}),E.jsx("a",{href:"/internships",className:"hover:underline",children:"Available Internships"})]}),E.jsx("div",{className:"mt-4",children:E.jsx("p",{children:"📧 Email: pminterns@gmail.com | 📞 Phone: +91 6306232526"})})]})}),CA=({onApply:i})=>{const[e,t]=Re.useState({location:"",mode:"",skills:"",role:"",minStipend:0}),s=(u,h)=>{t(m=>({...m,[u]:h}))},o=Wv.filter(u=>{const h=e.location===""||u.location.includes(e.location),m=e.mode===""||u.mode===e.mode,y=e.role===""||u.title.toLowerCase().includes(e.role.toLowerCase()),v=u.stipend>=e.minStipend;let T=!0;return e.skills!==""&&(T=e.skills.toLowerCase().split(",").map(R=>R.trim()).some(R=>u.skills.some(j=>j.toLowerCase().includes(R)))),h&&m&&y&&v&&T});return E.jsxs("div",{className:"container mx-auto px-4 py-16 flex flex-col md:flex-row gap-8",children:[E.jsx("aside",{className:"w-full md:w-1/4",children:E.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 sticky top-28",children:[E.jsxs("h2",{className:"text-xl font-bold mb-5 flex items-center text-gray-800 dark:text-gray-200",children:[E.jsx(Lx,{size:20,className:"mr-2 text-gray-600 dark:text-gray-400"})," All Filters"]}),E.jsxs("div",{className:"mb-6",children:[E.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",children:"Location"}),E.jsxs("select",{className:"w-full px-4 py-2.5 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200",value:e.location,onChange:u=>s("location",u.target.value),children:[E.jsx("option",{value:"",children:"All Locations"}),yA.map(u=>E.jsx("option",{value:u,children:u},u))]})]}),E.jsxs("div",{className:"mb-6",children:[E.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",children:"Mode"}),E.jsxs("select",{className:"w-full px-4 py-2.5 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200",value:e.mode,onChange:u=>s("mode",u.target.value),children:[E.jsx("option",{value:"",children:"All Modes"}),gA.map(u=>E.jsx("option",{value:u,children:u},u))]})]}),E.jsxs("div",{className:"mb-6",children:[E.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",children:"Skills"}),E.jsx("input",{type:"text",placeholder:"e.g., React, SQL",className:"w-full px-4 py-2.5 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200",value:e.skills,onChange:u=>s("skills",u.target.value)}),E.jsx("div",{className:"mt-2 flex flex-wrap gap-2",children:qv.map(u=>E.jsx("button",{onClick:()=>s("skills",u),className:"text-xs px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors",children:u},u))})]}),E.jsxs("div",{className:"mb-6",children:[E.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",children:"Role"}),E.jsx("input",{type:"text",placeholder:"e.g., Developer",className:"w-full px-4 py-2.5 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200",value:e.role,onChange:u=>s("role",u.target.value)})]}),E.jsxs("div",{className:"mb-6",children:[E.jsxs("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",children:["Min. Monthly Stipend: ",e.minStipend," ₹"]}),E.jsx("input",{type:"range",min:"0",max:"50000",step:"5000",value:e.minStipend,onChange:u=>s("minStipend",u.target.value),className:"w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 accent-blue-500"})]})]})}),E.jsxs("section",{className:"w-full md:w-3/4",children:[E.jsxs("h2",{className:"text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200",children:["Available Internships (",o.length,")"]}),E.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:o.length>0?o.map(u=>E.jsx(Gv,{internship:u,onApply:i},u.id)):E.jsx("div",{className:"col-span-2 text-center text-gray-500 dark:text-gray-400 py-16",children:E.jsx("p",{className:"text-lg",children:"No internships found matching your criteria. Try adjusting your search or filters."})})})]})]})};sw.createRoot(document.getElementById("root")).render(E.jsx(Re.StrictMode,{children:E.jsx(uA,{})}));
