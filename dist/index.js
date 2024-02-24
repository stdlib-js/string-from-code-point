"use strict";var l=function(o,r){return function(){return r||o((r={exports:{}}).exports,r),r.exports}};var g=l(function(O,f){
var m=require('@stdlib/assert-is-nonnegative-integer/dist').isPrimitive,p=require('@stdlib/assert-is-collection/dist'),v=require('@stdlib/error-tools-fmtprodmsg/dist'),u=require('@stdlib/constants-unicode-max/dist'),c=require('@stdlib/constants-unicode-max-bmp/dist'),d=String.fromCharCode,h=65536,x=55296,C=56320,w=1023;function q(o){var r,t,a,n,s,e,i;if(r=arguments.length,r===1&&p(o))a=arguments[0],r=a.length;else for(a=[],i=0;i<r;i++)a.push(arguments[i]);if(r===0)throw new Error(v('1Oh1V'));for(t="",i=0;i<r;i++){if(e=a[i],!m(e))throw new TypeError(v('1OhAM',e));if(e>u)throw new RangeError(v('1OhE5',u,e));e<=c?t+=d(e):(e-=h,s=(e>>10)+x,n=(e&w)+C,t+=d(s,n))}return t}f.exports=q
});var D=g();module.exports=D;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
