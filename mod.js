// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=Object.defineProperty,r=Object.prototype,n=r.toString,o=r.__defineGetter__,i=r.__defineSetter__,u=r.__lookupGetter__,a=r.__lookupSetter__;var l=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?t:function(e,t,l){var c,f,p,s;if("object"!=typeof e||null===e||"[object Array]"===n.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof l||null===l||"[object Array]"===n.call(l))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+l+"`.");if((f="value"in l)&&(u.call(e,t)||a.call(e,t)?(c=e.__proto__,e.__proto__=r,delete e[t],e[t]=l.value,e.__proto__=c):e[t]=l.value),p="get"in l,s="set"in l,f&&(p||s))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&o&&o.call(e,t,l.get),s&&i&&i.call(e,t,l.set),e};function c(e,t,r){l(e,t,{configurable:!1,enumerable:!1,writable:!1,value:r})}function f(e){return"number"==typeof e}var p="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function s(){return p&&"symbol"==typeof Symbol.toStringTag}var b=Object.prototype.toString;var y=Object.prototype.hasOwnProperty;var v="function"==typeof Symbol?Symbol.toStringTag:"";var d=s()?function(e){var t,r,n,o,i;if(null==e)return b.call(e);r=e[v],i=v,t=null!=(o=e)&&y.call(o,i);try{e[v]=void 0}catch(t){return b.call(e)}return n=b.call(e),t?e[v]=r:delete e[v],n}:function(e){return b.call(e)},g=Number,m=g.prototype.toString;var _=s();function h(e){return"object"==typeof e&&(e instanceof g||(_?function(e){try{return m.call(e),!0}catch(e){return!1}}(e):"[object Number]"===d(e)))}function j(e){return f(e)||h(e)}c(j,"isPrimitive",f),c(j,"isObject",h);var w=Number.POSITIVE_INFINITY,S=g.NEGATIVE_INFINITY,O=Math.floor;function I(e){return O(e)===e}function E(e){return e<w&&e>S&&I(e)}function P(e){return f(e)&&E(e)}function T(e){return h(e)&&E(e.valueOf())}function N(e){return P(e)||T(e)}function V(e){return P(e)&&e>=0}function C(e){return T(e)&&e.valueOf()>=0}function M(e){return V(e)||C(e)}c(N,"isPrimitive",P),c(N,"isObject",T),c(M,"isPrimitive",V),c(M,"isObject",C);function x(e){return"object"==typeof e&&null!==e&&"number"==typeof e.length&&I(e.length)&&e.length>=0&&e.length<=9007199254740991}function A(){var e,t=arguments,r=t[0],n="https://stdlib.io/e/"+r+"?";for(e=1;e<t.length;e++)n+="&arg[]="+encodeURIComponent(t[e]);return n}var F=String.fromCharCode;function G(e){var t,r,n,o,i;if(1===(t=arguments.length)&&x(e))t=(n=arguments[0]).length;else for(n=[],i=0;i<t;i++)n.push(arguments[i]);if(0===t)throw new Error("insufficient arguments. Must provide either an array of code points or one or more code points as separate arguments.");for(r="",i=0;i<t;i++){if(!V(o=n[i]))throw new TypeError(A("invalid argument. Must provide valid code points (i.e., nonnegative integers). Value: `%s`.",o));if(o>1114111)throw new RangeError(A("invalid argument. Must provide a valid code point (i.e., cannot exceed %u). Value: `%s`.",1114111,o));r+=o<=65535?F(o):F(55296+((o-=65536)>>10),56320+(1023&o))}return r}export{G as default};
//# sourceMappingURL=mod.js.map
