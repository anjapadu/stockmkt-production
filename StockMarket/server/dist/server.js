!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}({"./index.js":function(e,t,r){(function(e){const t=r("morgan"),n=r("http"),o=r("cors"),u=r("express"),s=r("body-parser"),i=r("path"),c=u();c.disable("x-powered-by");var p={origin:function(e,t){return t(null,!0)}};const l=u.Router();c.use(o(p)),c.use(s.urlencoded({extended:!0})),c.use(s.json()),c.use(t(":method :url :status :res[content-length] - :response-time ms")),l.use(u.static("public")),c.get("*.js",(function(e,t,r){e.url=e.url+".gz",t.set("Content-Encoding","gzip"),t.set("Content-Type","text/javascript"),r()})),l.use((function(t,r,n){r.sendFile(i.resolve(e,"./public","index.html"))})),c.use("*",l),n.createServer(c).listen(process.env.PORT,()=>{console.log("HTTPS Server running on port "+process.env.PORT)})}).call(this,"")},0:function(e,t,r){e.exports=r("./index.js")},"body-parser":function(e,t){e.exports=require("body-parser")},cors:function(e,t){e.exports=require("cors")},express:function(e,t){e.exports=require("express")},http:function(e,t){e.exports=require("http")},morgan:function(e,t){e.exports=require("morgan")},path:function(e,t){e.exports=require("path")}});