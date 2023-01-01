// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{isPrimitive as e}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-collection@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.0.2-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-unicode-max@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-unicode-max-bmp@esm/index.mjs";var i=String.fromCharCode;function o(o){var d,a,m,l,p;if(1===(d=arguments.length)&&t(o))d=(m=arguments[0]).length;else for(m=[],p=0;p<d;p++)m.push(arguments[p]);if(0===d)throw new Error("insufficient arguments. Must provide either an array of code points or one or more code points as separate arguments.");for(a="",p=0;p<d;p++){if(l=m[p],!e(l))throw new TypeError(r("invalid argument. Must provide valid code points (i.e., nonnegative integers). Value: `%s`.",l));if(l>s)throw new RangeError(r("invalid argument. Must provide a valid code point (i.e., cannot exceed %u). Value: `%s`.",s,l));a+=l<=n?i(l):i(55296+((l-=65536)>>10),56320+(1023&l))}return a}export{o as default};
//# sourceMappingURL=index.mjs.map
