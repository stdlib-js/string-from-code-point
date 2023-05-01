// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,t;e=this,t=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,t=Object.defineProperty,r=Object.prototype,n=r.toString,o=r.__defineGetter__,i=r.__defineSetter__,u=r.__lookupGetter__,l=r.__lookupSetter__,a=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?t:function(e,t,a){var c,f,p,s;if("object"!=typeof e||null===e||"[object Array]"===n.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof a||null===a||"[object Array]"===n.call(a))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+a+"`.");if((f="value"in a)&&(u.call(e,t)||l.call(e,t)?(c=e.__proto__,e.__proto__=r,delete e[t],e[t]=a.value,e.__proto__=c):e[t]=a.value),p="get"in a,s="set"in a,f&&(p||s))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&o&&o.call(e,t,a.get),s&&i&&i.call(e,t,a.set),e};function c(e,t,r){a(e,t,{configurable:!1,enumerable:!1,writable:!1,value:r})}function f(e){return"number"==typeof e}var p="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function s(){return p&&"symbol"==typeof Symbol.toStringTag}var y=Object.prototype.toString,b=Object.prototype.hasOwnProperty,d="function"==typeof Symbol?Symbol.toStringTag:"",m=s()?function(e){var t,r,n,o,i;if(null==e)return y.call(e);r=e[d],i=d,t=null!=(o=e)&&b.call(o,i);try{e[d]=void 0}catch(t){return y.call(e)}return n=y.call(e),t?e[d]=r:delete e[d],n}:function(e){return y.call(e)},g=Number,v=g.prototype.toString,_=s();function h(e){return"object"==typeof e&&(e instanceof g||(_?function(e){try{return v.call(e),!0}catch(e){return!1}}(e):"[object Number]"===m(e)))}function j(e){return f(e)||h(e)}c(j,"isPrimitive",f),c(j,"isObject",h);var w=Number.POSITIVE_INFINITY,S=g.NEGATIVE_INFINITY,O=Math.floor;function T(e){return O(e)===e}function I(e){return e<w&&e>S&&T(e)}function P(e){return f(e)&&I(e)}function E(e){return h(e)&&I(e.valueOf())}function N(e){return P(e)||E(e)}function V(e){return P(e)&&e>=0}function C(e){return E(e)&&e.valueOf()>=0}function x(e){return V(e)||C(e)}function M(e){return"object"==typeof e&&null!==e&&"number"==typeof e.length&&T(e.length)&&e.length>=0&&e.length<=9007199254740991}function A(){var e,t=arguments,r=t[0],n="https://stdlib.io/e/"+r+"?";for(e=1;e<t.length;e++)n+="&arg[]="+encodeURIComponent(t[e]);return n}c(N,"isPrimitive",P),c(N,"isObject",E),c(x,"isPrimitive",V),c(x,"isObject",C);var F=1114111,G=String.fromCharCode;return function(e){var t,r,n,o,i;if(1===(t=arguments.length)&&M(e))t=(n=arguments[0]).length;else for(n=[],i=0;i<t;i++)n.push(arguments[i]);if(0===t)throw new Error("insufficient arguments. Must provide either an array of code points or one or more code points as separate arguments.");for(r="",i=0;i<t;i++){if(!V(o=n[i]))throw new TypeError(A("invalid argument. Must provide valid code points (i.e., nonnegative integers). Value: `%s`.",o));if(o>F)throw new RangeError(A("invalid argument. Must provide a valid code point (i.e., cannot exceed %u). Value: `%s`.",F,o));r+=o<=65535?G(o):G(55296+((o-=65536)>>10),56320+(1023&o))}return r}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).fromCodePoint=t();
//# sourceMappingURL=browser.js.map
