import{A as c,a as p,u,B as _,D as i}from"./vendor.931bb567.js";const h=c({setup(l){const{currentRoute:o,replace:a}=p(),{params:e,query:s}=u(o),{path:r,_redirect_type:n="path"}=e;Reflect.deleteProperty(e,"_redirect_type"),Reflect.deleteProperty(e,"path");const t=Array.isArray(r)?r.join("/"):r;return a(n==="name"?{name:t,query:s,params:e}:{path:t.startsWith("/")?t:"/"+t,query:s}),(d,f)=>(_(),i("div"))}});export{h as default};
