(self.webpackChunktext_rts_web=self.webpackChunktext_rts_web||[]).push([[417],{417:(n,e,t)=>{"use strict";t.r(e);var r=t(811);document.addEventListener("contextmenu",(n=>{n.preventDefault()})),window.addEventListener("keydown",(function(n){(114===n.keyCode||n.ctrlKey&&70===n.keyCode)&&n.preventDefault()})),(0,r.BL)()},811:(n,e,t)=>{"use strict";t.d(e,{BL:()=>k,kg:()=>C,UD:()=>T,m_:()=>E,G6:()=>D,h9:()=>L,Dz:()=>O,kF:()=>V,Cp:()=>B,GJ:()=>G,tE:()=>W,bd:()=>I,JG:()=>U,GZ:()=>j,XP:()=>J,_H:()=>$,DJ:()=>H,Nj:()=>M,lY:()=>N,vW:()=>R,Hi:()=>X,By:()=>q,Zc:()=>Q,VO:()=>Y,wQ:()=>Z,W1:()=>z,Pk:()=>K,yF:()=>nn,si:()=>en,k7:()=>tn,Vr:()=>rn,ii:()=>on,zF:()=>un,XS:()=>cn,jf:()=>fn,JN:()=>an,U0:()=>_n,Kn:()=>ln,xW:()=>dn,Ld:()=>sn,H8:()=>gn,yP:()=>mn,m0:()=>bn,rM:()=>yn,XW:()=>wn,O3:()=>hn,PD:()=>vn,yx:()=>xn,bV:()=>pn,e9:()=>Pn,BG:()=>kn,p:()=>An,Je:()=>Sn,N2:()=>Fn,e7:()=>Cn,xo:()=>Tn,mP:()=>En,P7:()=>Dn,Lt:()=>Ln,ud:()=>On,W2:()=>Vn,t5:()=>Bn,gy:()=>Gn,lF:()=>Wn,aX:()=>In,wW:()=>Un,u0:()=>jn,F0:()=>Jn,qe:()=>$n,jA:()=>Hn,F:()=>Mn,Ym:()=>Nn,jQ:()=>Rn,gV:()=>Xn,cP:()=>qn,AQ:()=>Qn,GH:()=>Yn,vU:()=>Zn,pT:()=>zn,GC:()=>Kn,Zz:()=>ne,dC:()=>ee,fO:()=>te,TK:()=>re,aU:()=>oe,rZ:()=>ue,Ll:()=>ie,w0:()=>ce,n1:()=>fe,ug:()=>ae,th:()=>_e,_7:()=>le,uT:()=>de,GB:()=>se,lc:()=>ge,SY:()=>me,Cd:()=>be,ht:()=>ye,Jw:()=>we,t7:()=>he,Fo:()=>ve,Jk:()=>xe,PS:()=>pe,vD:()=>Pe,cN:()=>ke,QS:()=>Ae,w5:()=>Se,p$:()=>Fe,ek:()=>Ce,xl:()=>Te,V3:()=>Ee,gN:()=>De,yN:()=>Le,Bs:()=>Oe,aZ:()=>Ve,ko:()=>Be,PG:()=>Ge,PA:()=>We,kU:()=>Ie,mX:()=>Ue,HT:()=>je,fY:()=>Je,Or:()=>$e,oH:()=>He,Gy:()=>Me,Qf:()=>Ne,mc:()=>Re});var r=t(545);n=t.hmd(n);const o=new Array(32).fill(void 0);function u(n){return o[n]}o.push(void 0,null,!0,!1);let i=o.length;function c(n){const e=u(n);return function(n){n<36||(o[n]=i,i=n)}(n),e}function f(n){i===o.length&&o.push(o.length+1);const e=i;return i=o[e],o[e]=n,e}function a(n){const e=typeof n;if("number"==e||"boolean"==e||null==n)return`${n}`;if("string"==e)return`"${n}"`;if("symbol"==e){const e=n.description;return null==e?"Symbol":`Symbol(${e})`}if("function"==e){const e=n.name;return"string"==typeof e&&e.length>0?`Function(${e})`:"Function"}if(Array.isArray(n)){const e=n.length;let t="[";e>0&&(t+=a(n[0]));for(let r=1;r<e;r++)t+=", "+a(n[r]);return t+="]",t}const t=/\[object ([^\]]+)\]/.exec(toString.call(n));let r;if(!(t.length>1))return toString.call(n);if(r=t[1],"Object"==r)try{return"Object("+JSON.stringify(n)+")"}catch(n){return"Object"}return n instanceof Error?`${n.name}: ${n.message}\n${n.stack}`:r}let _=0,l=null;function d(){return null!==l&&l.buffer===r.memory.buffer||(l=new Uint8Array(r.memory.buffer)),l}let s=new("undefined"==typeof TextEncoder?(0,n.require)("util").TextEncoder:TextEncoder)("utf-8");const g="function"==typeof s.encodeInto?function(n,e){return s.encodeInto(n,e)}:function(n,e){const t=s.encode(n);return e.set(t),{read:n.length,written:t.length}};function m(n,e,t){if(void 0===t){const t=s.encode(n),r=e(t.length);return d().subarray(r,r+t.length).set(t),_=t.length,r}let r=n.length,o=e(r);const u=d();let i=0;for(;i<r;i++){const e=n.charCodeAt(i);if(e>127)break;u[o+i]=e}if(i!==r){0!==i&&(n=n.slice(i)),o=t(o,r,r=i+3*n.length);const e=d().subarray(o+i,o+r);i+=g(n,e).written}return _=i,o}let b=null;function y(){return null!==b&&b.buffer===r.memory.buffer||(b=new Int32Array(r.memory.buffer)),b}let w=new("undefined"==typeof TextDecoder?(0,n.require)("util").TextDecoder:TextDecoder)("utf-8",{ignoreBOM:!0,fatal:!0});function h(n,e){return w.decode(d().subarray(n,n+e))}function v(n,e,t,o){const u={a:n,b:e,cnt:1,dtor:t},i=(...n)=>{u.cnt++;const e=u.a;u.a=0;try{return o(e,u.b,...n)}finally{0==--u.cnt?r.__wbindgen_export_2.get(u.dtor)(e,u.b):u.a=e}};return i.original=u,i}function x(n,e,t){r._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h53ae38eccfce152f(n,e,f(t))}function p(n,e,t){r._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h2a8949923f34d091(n,e,f(t))}function P(n,e){r._dyn_core__ops__function__FnMut_____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__he3a4e8da37e426cd(n,e)}function k(){r.start()}function A(n){return function(){try{return n.apply(this,arguments)}catch(n){r.__wbindgen_exn_store(f(n))}}}function S(n,e){return d().subarray(n/1,n/1+e)}function F(n){return null==n}w.decode();const C=function(n){c(n)},T=function(n,e){console.log(h(n,e))},E=function(n){return f(u(n))},D=function(n){const e=c(n).original;return 1==e.cnt--&&(e.a=0,!0)},L=function(){return f(new Error)},O=function(n,e){var t=m(u(e).stack,r.__wbindgen_malloc,r.__wbindgen_realloc),o=_;y()[n/4+1]=o,y()[n/4+0]=t},V=function(n,e){try{console.error(h(n,e))}finally{r.__wbindgen_free(n,e)}},B=function(n,e,t){u(n).getRandomValues(S(e,t))},G=function(n,e,t){u(n).randomFillSync(S(e,t))},W=A((function(){return f(self.self)})),I=function(n,e,t){return f(u(n).require(h(e,t)))},U=function(n){return f(u(n).crypto)},j=function(n){return f(u(n).msCrypto)},J=function(n){return void 0===u(n)},$=function(n){return f(u(n).getRandomValues)},H=function(){return f(n)},M=function(n){return u(n)instanceof WebGL2RenderingContext},N=function(n,e){u(n).bindVertexArray(u(e))},R=function(n,e,t,r){u(n).bufferData(e>>>0,u(t),r>>>0)},X=function(n){var e=u(n).createVertexArray();return F(e)?0:f(e)},q=A((function(n,e,t,r,o,i,c,f,a,_,l){u(n).texImage2D(e>>>0,t,r,o,i,c,f>>>0,a>>>0,0===_?void 0:S(_,l))})),Q=function(n,e,t){u(n).attachShader(u(e),u(t))},Y=function(n,e,t){u(n).bindBuffer(e>>>0,u(t))},Z=function(n,e,t){u(n).bindFramebuffer(e>>>0,u(t))},z=function(n,e,t){u(n).bindTexture(e>>>0,u(t))},K=function(n,e,t){u(n).blendFunc(e>>>0,t>>>0)},nn=function(n,e){u(n).clear(e>>>0)},en=function(n,e,t,r,o){u(n).clearColor(e,t,r,o)},tn=function(n,e){u(n).compileShader(u(e))},rn=function(n){var e=u(n).createBuffer();return F(e)?0:f(e)},on=function(n){var e=u(n).createFramebuffer();return F(e)?0:f(e)},un=function(n){var e=u(n).createProgram();return F(e)?0:f(e)},cn=function(n,e){var t=u(n).createShader(e>>>0);return F(t)?0:f(t)},fn=function(n){var e=u(n).createTexture();return F(e)?0:f(e)},an=function(n,e){u(n).disable(e>>>0)},_n=function(n,e,t,r){u(n).drawArrays(e>>>0,t,r)},ln=function(n,e,t,r,o){u(n).drawElements(e>>>0,t,r>>>0,o)},dn=function(n,e){u(n).enable(e>>>0)},sn=function(n,e){u(n).enableVertexAttribArray(e>>>0)},gn=function(n,e,t,r,o,i){u(n).framebufferTexture2D(e>>>0,t>>>0,r>>>0,u(o),i)},mn=function(n){return u(n).getError()},bn=A((function(n,e,t){var r=u(n).getExtension(h(e,t));return F(r)?0:f(r)})),yn=function(n,e,t){var o=u(e).getProgramInfoLog(u(t)),i=F(o)?0:m(o,r.__wbindgen_malloc,r.__wbindgen_realloc),c=_;y()[n/4+1]=c,y()[n/4+0]=i},wn=function(n,e,t){return f(u(n).getProgramParameter(u(e),t>>>0))},hn=function(n,e,t){var o=u(e).getShaderInfoLog(u(t)),i=F(o)?0:m(o,r.__wbindgen_malloc,r.__wbindgen_realloc),c=_;y()[n/4+1]=c,y()[n/4+0]=i},vn=function(n,e,t){return f(u(n).getShaderParameter(u(e),t>>>0))},xn=function(n,e,t,r){var o=u(n).getUniformLocation(u(e),h(t,r));return F(o)?0:f(o)},pn=function(n,e){u(n).linkProgram(u(e))},Pn=function(n,e,t,r){u(n).shaderSource(u(e),h(t,r))},kn=function(n,e,t,r){u(n).texParameteri(e>>>0,t>>>0,r)},An=function(n,e,t){u(n).uniform1i(u(e),t)},Sn=function(n,e,t,r,o){u(n).uniform3f(u(e),t,r,o)},Fn=function(n,e){u(n).useProgram(u(e))},Cn=function(n,e,t,r,o,i,c){u(n).vertexAttribPointer(e>>>0,t,r>>>0,0!==o,i,c)},Tn=function(n){return u(n)instanceof Window},En=function(n){var e=u(n).document;return F(e)?0:f(e)},Dn=function(n){var e=u(n).performance;return F(e)?0:f(e)},Ln=function(n,e){u(n).onkeydown=u(e)},On=function(n,e){u(n).onkeyup=u(e)},Vn=A((function(n,e){return u(n).requestAnimationFrame(u(e))})),Bn=function(n){return u(n).now()},Gn=function(n){return u(n)instanceof HTMLCanvasElement},Wn=function(n,e){u(n).width=e>>>0},In=function(n,e){u(n).height=e>>>0},Un=A((function(n,e,t){var r=u(n).getContext(h(e,t));return F(r)?0:f(r)})),jn=function(n){return u(n).charCode},Jn=function(n){return u(n).keyCode},$n=function(n,e){var t=m(u(e).code,r.__wbindgen_malloc,r.__wbindgen_realloc),o=_;y()[n/4+1]=o,y()[n/4+0]=t},Hn=function(n,e,t){return u(n).getModifierState(h(e,t))},Mn=function(n){return u(n).offsetX},Nn=function(n){return u(n).offsetY},Rn=function(n,e,t){var r=u(n).getElementById(h(e,t));return F(r)?0:f(r)},Xn=function(n,e,t,r){u(n).bufferData(e>>>0,u(t),r>>>0)},qn=A((function(n,e,t,r,o,i,c,f,a,_,l){u(n).texImage2D(e>>>0,t,r,o,i,c,f>>>0,a>>>0,0===_?void 0:S(_,l))})),Qn=function(n,e,t){u(n).attachShader(u(e),u(t))},Yn=function(n,e,t){u(n).bindBuffer(e>>>0,u(t))},Zn=function(n,e,t){u(n).bindFramebuffer(e>>>0,u(t))},zn=function(n,e,t){u(n).bindTexture(e>>>0,u(t))},Kn=function(n,e,t){u(n).blendFunc(e>>>0,t>>>0)},ne=function(n,e){u(n).clear(e>>>0)},ee=function(n,e,t,r,o){u(n).clearColor(e,t,r,o)},te=function(n,e){u(n).compileShader(u(e))},re=function(n){var e=u(n).createBuffer();return F(e)?0:f(e)},oe=function(n){var e=u(n).createFramebuffer();return F(e)?0:f(e)},ue=function(n){var e=u(n).createProgram();return F(e)?0:f(e)},ie=function(n,e){var t=u(n).createShader(e>>>0);return F(t)?0:f(t)},ce=function(n){var e=u(n).createTexture();return F(e)?0:f(e)},fe=function(n,e){u(n).disable(e>>>0)},ae=function(n,e,t,r){u(n).drawArrays(e>>>0,t,r)},_e=function(n,e,t,r,o){u(n).drawElements(e>>>0,t,r>>>0,o)},le=function(n,e){u(n).enable(e>>>0)},de=function(n,e){u(n).enableVertexAttribArray(e>>>0)},se=function(n,e,t,r,o,i){u(n).framebufferTexture2D(e>>>0,t>>>0,r>>>0,u(o),i)},ge=function(n){return u(n).getError()},me=function(n,e,t){var o=u(e).getProgramInfoLog(u(t)),i=F(o)?0:m(o,r.__wbindgen_malloc,r.__wbindgen_realloc),c=_;y()[n/4+1]=c,y()[n/4+0]=i},be=function(n,e,t){return f(u(n).getProgramParameter(u(e),t>>>0))},ye=function(n,e,t){var o=u(e).getShaderInfoLog(u(t)),i=F(o)?0:m(o,r.__wbindgen_malloc,r.__wbindgen_realloc),c=_;y()[n/4+1]=c,y()[n/4+0]=i},we=function(n,e,t){return f(u(n).getShaderParameter(u(e),t>>>0))},he=function(n,e,t,r){var o=u(n).getUniformLocation(u(e),h(t,r));return F(o)?0:f(o)},ve=function(n,e){u(n).linkProgram(u(e))},xe=function(n,e,t,r){u(n).shaderSource(u(e),h(t,r))},pe=function(n,e,t,r){u(n).texParameteri(e>>>0,t>>>0,r)},Pe=function(n,e,t){u(n).uniform1i(u(e),t)},ke=function(n,e,t,r,o){u(n).uniform3f(u(e),t,r,o)},Ae=function(n,e){u(n).useProgram(u(e))},Se=function(n,e,t,r,o,i,c){u(n).vertexAttribPointer(e>>>0,t,r>>>0,0!==o,i,c)},Fe=function(n,e){u(n).onmousedown=u(e)},Ce=function(n,e){u(n).onmousemove=u(e)},Te=function(n,e){u(n).onmouseup=u(e)},Ee=function(n,e){u(n).bindVertexArrayOES(u(e))},De=function(n){var e=u(n).createVertexArrayOES();return F(e)?0:f(e)},Le=function(n,e){return f(new Function(h(n,e)))},Oe=A((function(n,e){return f(u(n).call(u(e)))})),Ve=A((function(){return f(self.self)})),Be=A((function(){return f(window.window)})),Ge=A((function(){return f(globalThis.globalThis)})),We=A((function(){return f(t.g.global)})),Ie=function(n){return f(u(n).buffer)},Ue=function(n,e,t){return f(new Uint8Array(u(n),e>>>0,t>>>0))},je=function(n){const e=u(n);return"boolean"==typeof e?e?1:0:2},Je=function(n,e){var t=m(a(u(e)),r.__wbindgen_malloc,r.__wbindgen_realloc),o=_;y()[n/4+1]=o,y()[n/4+0]=t},$e=function(n,e){throw new Error(h(n,e))},He=function(){return f(r.memory)},Me=function(n,e,t){return f(v(n,e,131,x))},Ne=function(n,e,t){return f(v(n,e,129,p))},Re=function(n,e,t){return f(v(n,e,354,P))}},545:(n,e,t)=>{"use strict";var r=t.w[n.id];n.exports=r,t(811),r[""]()}}]);