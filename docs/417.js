(self.webpackChunktext_rts_web=self.webpackChunktext_rts_web||[]).push([[417],{417:(n,t,e)=>{"use strict";e.r(t);var r=e(811);document.addEventListener("contextmenu",(n=>{n.preventDefault()})),window.addEventListener("keydown",(function(n){(114===n.keyCode||n.ctrlKey&&70===n.keyCode)&&n.preventDefault()})),(0,r.BL)()},811:(n,t,e)=>{"use strict";e.d(t,{BL:()=>k,kg:()=>C,UD:()=>T,m_:()=>E,G6:()=>D,h9:()=>L,Dz:()=>O,kF:()=>V,Cp:()=>B,GJ:()=>W,tE:()=>G,bd:()=>I,JG:()=>j,GZ:()=>U,XP:()=>J,_H:()=>$,DJ:()=>H,Nj:()=>M,lY:()=>N,vW:()=>R,Hi:()=>X,By:()=>q,Zc:()=>Y,VO:()=>Z,wQ:()=>Q,W1:()=>z,Pk:()=>K,yF:()=>nn,si:()=>tn,k7:()=>en,Vr:()=>rn,ii:()=>on,zF:()=>un,XS:()=>cn,jf:()=>fn,JN:()=>an,U0:()=>_n,Kn:()=>ln,xW:()=>dn,Ld:()=>sn,H8:()=>gn,yP:()=>bn,m0:()=>mn,rM:()=>yn,XW:()=>wn,O3:()=>hn,PD:()=>vn,yx:()=>xn,bV:()=>pn,e9:()=>Pn,BG:()=>kn,p:()=>An,Je:()=>Sn,N2:()=>Fn,e7:()=>Cn,xo:()=>Tn,mP:()=>En,P7:()=>Dn,Lt:()=>Ln,ud:()=>On,W2:()=>Vn,t5:()=>Bn,gy:()=>Wn,lF:()=>Gn,aX:()=>In,wW:()=>jn,u0:()=>Un,F0:()=>Jn,qe:()=>$n,jA:()=>Hn,F:()=>Mn,Ym:()=>Nn,jQ:()=>Rn,gV:()=>Xn,cP:()=>qn,AQ:()=>Yn,GH:()=>Zn,vU:()=>Qn,pT:()=>zn,GC:()=>Kn,Zz:()=>nt,dC:()=>tt,fO:()=>et,TK:()=>rt,aU:()=>ot,rZ:()=>ut,Ll:()=>it,w0:()=>ct,n1:()=>ft,ug:()=>at,th:()=>_t,_7:()=>lt,uT:()=>dt,GB:()=>st,lc:()=>gt,SY:()=>bt,Cd:()=>mt,ht:()=>yt,Jw:()=>wt,t7:()=>ht,Fo:()=>vt,Jk:()=>xt,PS:()=>pt,vD:()=>Pt,cN:()=>kt,QS:()=>At,w5:()=>St,p$:()=>Ft,ek:()=>Ct,xl:()=>Tt,V3:()=>Et,gN:()=>Dt,yN:()=>Lt,Bs:()=>Ot,aZ:()=>Vt,ko:()=>Bt,PG:()=>Wt,PA:()=>Gt,kU:()=>It,mX:()=>jt,HT:()=>Ut,fY:()=>Jt,Or:()=>$t,oH:()=>Ht,y0:()=>Mt,Pt:()=>Nt,aj:()=>Rt});var r=e(545);n=e.hmd(n);const o=new Array(32).fill(void 0);function u(n){return o[n]}o.push(void 0,null,!0,!1);let i=o.length;function c(n){const t=u(n);return function(n){n<36||(o[n]=i,i=n)}(n),t}function f(n){i===o.length&&o.push(o.length+1);const t=i;return i=o[t],o[t]=n,t}function a(n){const t=typeof n;if("number"==t||"boolean"==t||null==n)return`${n}`;if("string"==t)return`"${n}"`;if("symbol"==t){const t=n.description;return null==t?"Symbol":`Symbol(${t})`}if("function"==t){const t=n.name;return"string"==typeof t&&t.length>0?`Function(${t})`:"Function"}if(Array.isArray(n)){const t=n.length;let e="[";t>0&&(e+=a(n[0]));for(let r=1;r<t;r++)e+=", "+a(n[r]);return e+="]",e}const e=/\[object ([^\]]+)\]/.exec(toString.call(n));let r;if(!(e.length>1))return toString.call(n);if(r=e[1],"Object"==r)try{return"Object("+JSON.stringify(n)+")"}catch(n){return"Object"}return n instanceof Error?`${n.name}: ${n.message}\n${n.stack}`:r}let _=0,l=null;function d(){return null!==l&&l.buffer===r.memory.buffer||(l=new Uint8Array(r.memory.buffer)),l}let s=new("undefined"==typeof TextEncoder?(0,n.require)("util").TextEncoder:TextEncoder)("utf-8");const g="function"==typeof s.encodeInto?function(n,t){return s.encodeInto(n,t)}:function(n,t){const e=s.encode(n);return t.set(e),{read:n.length,written:e.length}};function b(n,t,e){if(void 0===e){const e=s.encode(n),r=t(e.length);return d().subarray(r,r+e.length).set(e),_=e.length,r}let r=n.length,o=t(r);const u=d();let i=0;for(;i<r;i++){const t=n.charCodeAt(i);if(t>127)break;u[o+i]=t}if(i!==r){0!==i&&(n=n.slice(i)),o=e(o,r,r=i+3*n.length);const t=d().subarray(o+i,o+r);i+=g(n,t).written}return _=i,o}let m=null;function y(){return null!==m&&m.buffer===r.memory.buffer||(m=new Int32Array(r.memory.buffer)),m}let w=new("undefined"==typeof TextDecoder?(0,n.require)("util").TextDecoder:TextDecoder)("utf-8",{ignoreBOM:!0,fatal:!0});function h(n,t){return w.decode(d().subarray(n,n+t))}function v(n,t,e,o){const u={a:n,b:t,cnt:1,dtor:e},i=(...n)=>{u.cnt++;const t=u.a;u.a=0;try{return o(t,u.b,...n)}finally{0==--u.cnt?r.__wbindgen_export_2.get(u.dtor)(t,u.b):u.a=t}};return i.original=u,i}function x(n,t,e){r._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h53ae38eccfce152f(n,t,f(e))}function p(n,t,e){r._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h2a8949923f34d091(n,t,f(e))}function P(n,t){r._dyn_core__ops__function__FnMut_____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__he3a4e8da37e426cd(n,t)}function k(){r.start()}function A(n){return function(){try{return n.apply(this,arguments)}catch(n){r.__wbindgen_exn_store(f(n))}}}function S(n,t){return d().subarray(n/1,n/1+t)}function F(n){return null==n}w.decode();const C=function(n){c(n)},T=function(n,t){console.log(h(n,t))},E=function(n){return f(u(n))},D=function(n){const t=c(n).original;return 1==t.cnt--&&(t.a=0,!0)},L=function(){return f(new Error)},O=function(n,t){var e=b(u(t).stack,r.__wbindgen_malloc,r.__wbindgen_realloc),o=_;y()[n/4+1]=o,y()[n/4+0]=e},V=function(n,t){try{console.error(h(n,t))}finally{r.__wbindgen_free(n,t)}},B=function(n,t,e){u(n).getRandomValues(S(t,e))},W=function(n,t,e){u(n).randomFillSync(S(t,e))},G=A((function(){return f(self.self)})),I=function(n,t,e){return f(u(n).require(h(t,e)))},j=function(n){return f(u(n).crypto)},U=function(n){return f(u(n).msCrypto)},J=function(n){return void 0===u(n)},$=function(n){return f(u(n).getRandomValues)},H=function(){return f(n)},M=function(n){return u(n)instanceof WebGL2RenderingContext},N=function(n,t){u(n).bindVertexArray(u(t))},R=function(n,t,e,r){u(n).bufferData(t>>>0,u(e),r>>>0)},X=function(n){var t=u(n).createVertexArray();return F(t)?0:f(t)},q=A((function(n,t,e,r,o,i,c,f,a,_,l){u(n).texImage2D(t>>>0,e,r,o,i,c,f>>>0,a>>>0,0===_?void 0:S(_,l))})),Y=function(n,t,e){u(n).attachShader(u(t),u(e))},Z=function(n,t,e){u(n).bindBuffer(t>>>0,u(e))},Q=function(n,t,e){u(n).bindFramebuffer(t>>>0,u(e))},z=function(n,t,e){u(n).bindTexture(t>>>0,u(e))},K=function(n,t,e){u(n).blendFunc(t>>>0,e>>>0)},nn=function(n,t){u(n).clear(t>>>0)},tn=function(n,t,e,r,o){u(n).clearColor(t,e,r,o)},en=function(n,t){u(n).compileShader(u(t))},rn=function(n){var t=u(n).createBuffer();return F(t)?0:f(t)},on=function(n){var t=u(n).createFramebuffer();return F(t)?0:f(t)},un=function(n){var t=u(n).createProgram();return F(t)?0:f(t)},cn=function(n,t){var e=u(n).createShader(t>>>0);return F(e)?0:f(e)},fn=function(n){var t=u(n).createTexture();return F(t)?0:f(t)},an=function(n,t){u(n).disable(t>>>0)},_n=function(n,t,e,r){u(n).drawArrays(t>>>0,e,r)},ln=function(n,t,e,r,o){u(n).drawElements(t>>>0,e,r>>>0,o)},dn=function(n,t){u(n).enable(t>>>0)},sn=function(n,t){u(n).enableVertexAttribArray(t>>>0)},gn=function(n,t,e,r,o,i){u(n).framebufferTexture2D(t>>>0,e>>>0,r>>>0,u(o),i)},bn=function(n){return u(n).getError()},mn=A((function(n,t,e){var r=u(n).getExtension(h(t,e));return F(r)?0:f(r)})),yn=function(n,t,e){var o=u(t).getProgramInfoLog(u(e)),i=F(o)?0:b(o,r.__wbindgen_malloc,r.__wbindgen_realloc),c=_;y()[n/4+1]=c,y()[n/4+0]=i},wn=function(n,t,e){return f(u(n).getProgramParameter(u(t),e>>>0))},hn=function(n,t,e){var o=u(t).getShaderInfoLog(u(e)),i=F(o)?0:b(o,r.__wbindgen_malloc,r.__wbindgen_realloc),c=_;y()[n/4+1]=c,y()[n/4+0]=i},vn=function(n,t,e){return f(u(n).getShaderParameter(u(t),e>>>0))},xn=function(n,t,e,r){var o=u(n).getUniformLocation(u(t),h(e,r));return F(o)?0:f(o)},pn=function(n,t){u(n).linkProgram(u(t))},Pn=function(n,t,e,r){u(n).shaderSource(u(t),h(e,r))},kn=function(n,t,e,r){u(n).texParameteri(t>>>0,e>>>0,r)},An=function(n,t,e){u(n).uniform1i(u(t),e)},Sn=function(n,t,e,r,o){u(n).uniform3f(u(t),e,r,o)},Fn=function(n,t){u(n).useProgram(u(t))},Cn=function(n,t,e,r,o,i,c){u(n).vertexAttribPointer(t>>>0,e,r>>>0,0!==o,i,c)},Tn=function(n){return u(n)instanceof Window},En=function(n){var t=u(n).document;return F(t)?0:f(t)},Dn=function(n){var t=u(n).performance;return F(t)?0:f(t)},Ln=function(n,t){u(n).onkeydown=u(t)},On=function(n,t){u(n).onkeyup=u(t)},Vn=A((function(n,t){return u(n).requestAnimationFrame(u(t))})),Bn=function(n){return u(n).now()},Wn=function(n){return u(n)instanceof HTMLCanvasElement},Gn=function(n,t){u(n).width=t>>>0},In=function(n,t){u(n).height=t>>>0},jn=A((function(n,t,e){var r=u(n).getContext(h(t,e));return F(r)?0:f(r)})),Un=function(n){return u(n).charCode},Jn=function(n){return u(n).keyCode},$n=function(n,t){var e=b(u(t).code,r.__wbindgen_malloc,r.__wbindgen_realloc),o=_;y()[n/4+1]=o,y()[n/4+0]=e},Hn=function(n,t,e){return u(n).getModifierState(h(t,e))},Mn=function(n){return u(n).offsetX},Nn=function(n){return u(n).offsetY},Rn=function(n,t,e){var r=u(n).getElementById(h(t,e));return F(r)?0:f(r)},Xn=function(n,t,e,r){u(n).bufferData(t>>>0,u(e),r>>>0)},qn=A((function(n,t,e,r,o,i,c,f,a,_,l){u(n).texImage2D(t>>>0,e,r,o,i,c,f>>>0,a>>>0,0===_?void 0:S(_,l))})),Yn=function(n,t,e){u(n).attachShader(u(t),u(e))},Zn=function(n,t,e){u(n).bindBuffer(t>>>0,u(e))},Qn=function(n,t,e){u(n).bindFramebuffer(t>>>0,u(e))},zn=function(n,t,e){u(n).bindTexture(t>>>0,u(e))},Kn=function(n,t,e){u(n).blendFunc(t>>>0,e>>>0)},nt=function(n,t){u(n).clear(t>>>0)},tt=function(n,t,e,r,o){u(n).clearColor(t,e,r,o)},et=function(n,t){u(n).compileShader(u(t))},rt=function(n){var t=u(n).createBuffer();return F(t)?0:f(t)},ot=function(n){var t=u(n).createFramebuffer();return F(t)?0:f(t)},ut=function(n){var t=u(n).createProgram();return F(t)?0:f(t)},it=function(n,t){var e=u(n).createShader(t>>>0);return F(e)?0:f(e)},ct=function(n){var t=u(n).createTexture();return F(t)?0:f(t)},ft=function(n,t){u(n).disable(t>>>0)},at=function(n,t,e,r){u(n).drawArrays(t>>>0,e,r)},_t=function(n,t,e,r,o){u(n).drawElements(t>>>0,e,r>>>0,o)},lt=function(n,t){u(n).enable(t>>>0)},dt=function(n,t){u(n).enableVertexAttribArray(t>>>0)},st=function(n,t,e,r,o,i){u(n).framebufferTexture2D(t>>>0,e>>>0,r>>>0,u(o),i)},gt=function(n){return u(n).getError()},bt=function(n,t,e){var o=u(t).getProgramInfoLog(u(e)),i=F(o)?0:b(o,r.__wbindgen_malloc,r.__wbindgen_realloc),c=_;y()[n/4+1]=c,y()[n/4+0]=i},mt=function(n,t,e){return f(u(n).getProgramParameter(u(t),e>>>0))},yt=function(n,t,e){var o=u(t).getShaderInfoLog(u(e)),i=F(o)?0:b(o,r.__wbindgen_malloc,r.__wbindgen_realloc),c=_;y()[n/4+1]=c,y()[n/4+0]=i},wt=function(n,t,e){return f(u(n).getShaderParameter(u(t),e>>>0))},ht=function(n,t,e,r){var o=u(n).getUniformLocation(u(t),h(e,r));return F(o)?0:f(o)},vt=function(n,t){u(n).linkProgram(u(t))},xt=function(n,t,e,r){u(n).shaderSource(u(t),h(e,r))},pt=function(n,t,e,r){u(n).texParameteri(t>>>0,e>>>0,r)},Pt=function(n,t,e){u(n).uniform1i(u(t),e)},kt=function(n,t,e,r,o){u(n).uniform3f(u(t),e,r,o)},At=function(n,t){u(n).useProgram(u(t))},St=function(n,t,e,r,o,i,c){u(n).vertexAttribPointer(t>>>0,e,r>>>0,0!==o,i,c)},Ft=function(n,t){u(n).onmousedown=u(t)},Ct=function(n,t){u(n).onmousemove=u(t)},Tt=function(n,t){u(n).onmouseup=u(t)},Et=function(n,t){u(n).bindVertexArrayOES(u(t))},Dt=function(n){var t=u(n).createVertexArrayOES();return F(t)?0:f(t)},Lt=function(n,t){return f(new Function(h(n,t)))},Ot=A((function(n,t){return f(u(n).call(u(t)))})),Vt=A((function(){return f(self.self)})),Bt=A((function(){return f(window.window)})),Wt=A((function(){return f(globalThis.globalThis)})),Gt=A((function(){return f(e.g.global)})),It=function(n){return f(u(n).buffer)},jt=function(n,t,e){return f(new Uint8Array(u(n),t>>>0,e>>>0))},Ut=function(n){const t=u(n);return"boolean"==typeof t?t?1:0:2},Jt=function(n,t){var e=b(a(u(t)),r.__wbindgen_malloc,r.__wbindgen_realloc),o=_;y()[n/4+1]=o,y()[n/4+0]=e},$t=function(n,t){throw new Error(h(n,t))},Ht=function(){return f(r.memory)},Mt=function(n,t,e){return f(v(n,t,131,x))},Nt=function(n,t,e){return f(v(n,t,129,p))},Rt=function(n,t,e){return f(v(n,t,354,P))}},545:(n,t,e)=>{"use strict";var r=e.w[n.id];n.exports=r,e(811),r[""]()}}]);