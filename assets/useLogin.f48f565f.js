var b=Object.defineProperty;var p=Object.getOwnPropertySymbols;var O=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable;var w=(e,r,s)=>r in e?b(e,r,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[r]=s,y=(e,r)=>{for(var s in r||(r={}))O.call(r,s)&&w(e,s,r[s]);if(p)for(var s of p(r))I.call(r,s)&&w(e,s,r[s]);return e};var R=(e,r,s)=>new Promise((c,i)=>{var g=t=>{try{a(s.next(t))}catch(o){i(o)}},P=t=>{try{a(s.throw(t))}catch(o){i(o)}},a=t=>t.done?c(t.value):Promise.resolve(t.value).then(g,P);a((s=s.apply(e,r)).next())});import{b as j}from"./index.de242ad9.js";import{r as _,j as n,u as l}from"./vendor.931bb567.js";var h;(function(e){e[e.LOGIN=0]="LOGIN",e[e.REGISTER=1]="REGISTER",e[e.RESET_PASSWORD=2]="RESET_PASSWORD",e[e.MOBILE=3]="MOBILE",e[e.QR_CODE=4]="QR_CODE"})(h||(h={}));const F=_(0);function T(){function e(c){F.value=c}const r=n(()=>F.value);function s(){e(0)}return{setLoginState:e,getLoginState:r,handleBackLogin:s}}function A(e){function r(){return R(this,null,function*(){const s=l(e);return s?yield s.validate():void 0})}return{validForm:r}}function B(e){const{t:r}=j(),s=n(()=>m(r("sys.login.accountPlaceholder"))),c=n(()=>m(r("sys.login.passwordPlaceholder"))),i=n(()=>m(r("sys.login.smsPlaceholder"))),g=n(()=>m(r("sys.login.mobilePlaceholder"))),P=(o,u)=>R(this,null,function*(){return u?Promise.resolve():Promise.reject(r("sys.login.policyPlaceholder"))}),a=o=>(u,d)=>R(this,null,function*(){return d?d!==o?Promise.reject(r("sys.login.diffPwd")):Promise.resolve():Promise.reject(r("sys.login.passwordPlaceholder"))});return{getFormRules:n(()=>{const o=l(s),u=l(c),d=l(i),v=l(g),f={sms:d,mobile:v};switch(l(F)){case 1:return y({account:o,password:u,confirmPassword:[{validator:a(e==null?void 0:e.password),trigger:"change"}],policy:[{validator:P,trigger:"change"}]},f);case 2:return y({account:o},f);case 3:return f;default:return{account:o,password:u}}})}}function m(e){return[{required:!0,message:e,trigger:"change"}]}export{h as L,B as a,A as b,T as u};
