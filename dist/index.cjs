var l=Object.create;var a=Object.defineProperty;var m=Object.getOwnPropertyDescriptor;var p=Object.getOwnPropertyNames;var c=Object.getPrototypeOf,u=Object.prototype.hasOwnProperty;var d=(r,s)=>{for(var t in s)a(r,t,{get:s[t],enumerable:!0})},g=(r,s,t,h)=>{if(s&&typeof s=="object"||typeof s=="function")for(let i of p(s))!u.call(r,i)&&i!==t&&a(r,i,{get:()=>s[i],enumerable:!(h=m(s,i))||h.enumerable});return r};var A=(r,s,t)=>(t=r!=null?l(c(r)):{},g(s||!r||!r.__esModule?a(t,"default",{value:r,enumerable:!0}):t,r)),b=r=>g(a({},"__esModule",{value:!0}),r);var f={};d(f,{Hasher:()=>n,hash:()=>v});module.exports=b(f);var e=A(require("crypto"),1),n=class{constructor(s="sha256",t=64){this.algorithm=s,this.saltLength=t}verify(s,t){let{algorithm:h,salt:i}=this.parse(s);return this.hash(t,h,i)===s}encode(s){let t=e.default.randomBytes(this.saltLength).toString("base64");return this.hash(s,this.algorithm,t)}hash(s,t,h){let i=e.default.createHash(t);return i.update(s),i.update(h,"utf8"),`${t}:${h}:${i.digest("base64")}`}parse(s){let t=s.split(":");if(t.length!==3)throw new Error(`Invalid hash string. Expected 3 parts, got ${t.length}`);let h=t[0],i=t[1],o=t[2];return{algorithm:h,salt:i,digest:o}}},v=new n;0&&(module.exports={Hasher,hash});