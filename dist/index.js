"use strict";var l=function(o,r){return function(){return r||o((r={exports:{}}).exports,r),r.exports}};var g=l(function(O,f){"use strict";var m=require("@stdlib/assert-is-nonnegative-integer").isPrimitive,p=require("@stdlib/assert-is-collection"),v=require("@stdlib/string-format"),u=require("@stdlib/constants-unicode-max"),c=require("@stdlib/constants-unicode-max-bmp"),d=String.fromCharCode,h=65536,x=55296,C=56320,w=1023;function q(o){var r,t,a,n,s,e,i;if(r=arguments.length,r===1&&p(o))a=arguments[0],r=a.length;else for(a=[],i=0;i<r;i++)a.push(arguments[i]);if(r===0)throw new Error("insufficient arguments. Must provide either an array of code points or one or more code points as separate arguments.");for(t="",i=0;i<r;i++){if(e=a[i],!m(e))throw new TypeError(v("invalid argument. Must provide valid code points (i.e., nonnegative integers). Value: `%s`.",e));if(e>u)throw new RangeError(v("invalid argument. Must provide a valid code point (i.e., cannot exceed %u). Value: `%s`.",u,e));e<=c?t+=d(e):(e-=h,s=(e>>10)+x,n=(e&w)+C,t+=d(s,n))}return t}f.exports=q});var D=g();module.exports=D;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
//# sourceMappingURL=index.js.map
