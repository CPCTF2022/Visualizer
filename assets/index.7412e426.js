var Ie=Object.defineProperty,He=Object.defineProperties;var Me=Object.getOwnPropertyDescriptors;var ne=Object.getOwnPropertySymbols;var qe=Object.prototype.hasOwnProperty,Ce=Object.prototype.propertyIsEnumerable;var Q=(i,e,s)=>e in i?Ie(i,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):i[e]=s,I=(i,e)=>{for(var s in e||(e={}))qe.call(e,s)&&Q(i,s,e[s]);if(ne)for(var s of ne(e))Ce.call(e,s)&&Q(i,s,e[s]);return i},j=(i,e)=>He(i,Me(e));var W=(i,e,s)=>(Q(i,typeof e!="symbol"?e+"":e,s),s);import{w as ie,S as B,i as P,s as S,a as G,e as v,t as U,b as H,c as h,d as y,f as w,l as M,g as K,h as x,u as ve,n as z,o as be,j as We,k as Ee,m as D,r as _e,p as O,q as L,v as q,x as C,y as R,M as Be,G as Pe,B as ye,z as xe,T as Z,A as ee,P as Se,W as Te,E as je,C as Oe,R as Le,D as Re,F as Fe,H as Xe,I as le,J as $e,K as ke,L as Ye,N as te,O as De}from"./vendor.61be907a.js";const Ge=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))t(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&t(l)}).observe(document,{childList:!0,subtree:!0});function s(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerpolicy&&(o.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?o.credentials="include":n.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function t(n){if(n.ep)return;n.ep=!0;const o=s(n);fetch(n.href,o)}};Ge();const F=54,re=32;class _{static get windows(){return this._windows}static get windowIndices(){return this._windowIndices}static updateWindow(e,s){this._windows.update(t=>{const n=I({},t);return n[e]=s,n}),this._windowIndices.update(t=>{if(t.includes(e))return t;const n=[...t];return n.push(e),n})}static killWindow(e){this._windows.update(s=>{const t=I({},s);return delete t[e],t}),this._windowIndices.update(s=>s.filter(n=>n!==e))}static focus(e){this._windows.update(s=>{const t=I({},s),n=t[e];if(!n)throw new Error("invalid id");return t[e]=j(I({},n),{visible:!0}),t}),this._windowIndices.update(s=>{const t=s.filter(n=>n!==e);return t.push(e),t})}static minimize(e){this._windows.update(s=>{const t=I({},s),n=t[e];if(!n)throw new Error("invalid id");return t[e]=j(I({},n),{visible:!1}),t})}}W(_,"_windows",ie({})),W(_,"_windowIndices",ie([]));function Ve(i){G(i,"svelte-cqxaal","footer.svelte-cqxaal.svelte-cqxaal{position:absolute;top:calc(100vh - var(--footer-height));left:0;display:flex;justify-content:space-between;width:100%;height:var(--footer-height);background:#3b77bc}footer.svelte-cqxaal .left-menus.svelte-cqxaal{display:flex;justify-content:space-around}footer.svelte-cqxaal .left-menus ul.svelte-cqxaal{display:flex;flex-direction:row;justify-content:flex-start;padding-inline-start:0;margin-block-start:0;margin-block-end:0;margin-inline-start:0;margin-inline-end:0;list-style:none}footer.svelte-cqxaal .left-menus ul li.svelte-cqxaal{display:flex;align-items:center;justify-content:center;width:200px;height:100%}footer.svelte-cqxaal .left-menus ul li button.svelte-cqxaal{display:flex;align-items:center;justify-content:flex-start;width:90%;height:60%;overflow:hidden;font-size:18px;text-overflow:ellipsis;white-space:nowrap;background:#35f;border:2px #35f}footer.svelte-cqxaal .left-menus .start button.svelte-cqxaal{display:flex;align-items:center;justify-content:center;width:100px;height:100%;color:white;background:green}footer.svelte-cqxaal .right-info.svelte-cqxaal{display:flex;align-items:center;justify-content:center;height:100%;margin:0 4px;color:white}")}function oe(i,e,s){const t=i.slice();return t[7]=e[s],t}function ae(i,e){let s,t,n=e[7][1].title+"",o,l,a,r,c;return{key:i,first:null,c(){s=v("li"),t=v("button"),o=U(n),a=H(),h(t,"style",l=`border-style: ${e[7][1].visible?"inset":"outset"}`),h(t,"class","svelte-cqxaal"),h(s,"class","svelte-cqxaal"),this.first=s},m(u,f){y(u,s,f),w(s,t),w(t,o),w(s,a),r||(c=M(t,"click",function(){We(e[2](e[7][0]))&&e[2](e[7][0]).apply(this,arguments)}),r=!0)},p(u,f){e=u,f&1&&n!==(n=e[7][1].title+"")&&K(o,n),f&1&&l!==(l=`border-style: ${e[7][1].visible?"inset":"outset"}`)&&h(t,"style",l)},d(u){u&&x(s),r=!1,c()}}}function Ae(i){let e,s,t,n,o,l=[],a=new Map,r,c,u,f=i[0];const p=d=>d[7][0];for(let d=0;d<f.length;d+=1){let m=oe(i,f,d),b=p(m);a.set(b,l[d]=ae(b,m))}return{c(){e=v("footer"),s=v("div"),t=v("div"),t.innerHTML='<button class="start-button svelte-cqxaal">\u30B9\u30BF\u30FC\u30C8</button>',n=H(),o=v("ul");for(let d=0;d<l.length;d+=1)l[d].c();r=H(),c=v("div"),u=U(i[1]),h(t,"class","start"),h(o,"class","svelte-cqxaal"),h(s,"class","left-menus svelte-cqxaal"),h(c,"class","right-info svelte-cqxaal"),h(e,"style",`--footer-height: ${F}px`),h(e,"class","svelte-cqxaal")},m(d,m){y(d,e,m),w(e,s),w(s,t),w(s,n),w(s,o);for(let b=0;b<l.length;b+=1)l[b].m(o,null);w(e,r),w(e,c),w(c,u)},p(d,[m]){m&5&&(f=d[0],l=ve(l,m,p,1,d,f,a,o,Ee,ae,null,oe)),m&2&&K(u,d[1])},i:z,o:z,d(d){d&&x(e);for(let m=0;m<l.length;m+=1)l[m].d()}}}function Ne(i,e,s){let t={},n=[],o=[],l="";_.windows.subscribe(u=>{t=u,s(0,n=Object.entries(t));const f=o.filter(p=>{var d;return(d=t[p])==null?void 0:d.visible});l=f[f.length-1]||""}),_.windowIndices.subscribe(u=>{o=u;const f=o.filter(p=>{var d;return(d=t[p])==null?void 0:d.visible});l=f[f.length-1]||""});const a=u=>()=>{!t[u]||(l===u?_.minimize(u):_.focus(u))};let r="";const c=setInterval(()=>{const u=new Date;s(1,r=`${u.getHours()}:${("00"+u.getMinutes()).slice(-2)}`)});return be(()=>{clearInterval(c)}),[n,r,a]}class Ue extends B{constructor(e){super();P(this,e,Ne,Ae,S,{},Ve)}}const Ke=i=>{const t=[0,0],n=[0,0];let o="none";const l={x:0,y:0};let a="pointer",r={x:0,y:0,width:0,height:0};return{mouseDownHandler:p=>d=>{l.x=d.clientX,l.y=d.clientY,p.fullscreen?r={x:0,y:0,width:window.innerWidth,height:window.innerHeight-F}:r=p.rect,_.focus(i),!(t[0]===0&&t[1]===0&&d.clientY-r.y>32)&&(d.preventDefault(),n[0]=t[0],n[1]=t[1],o=t[0]===0&&t[1]===0?"move":"scale",_.updateWindow(i,j(I({},p),{rect:r,fullscreen:!1})))},mouseMoveHandler:p=>d=>{const m=p.fullscreen?{x:0,y:0,width:window.innerWidth,height:window.innerHeight-F}:p.rect;if(d.clientX-m.x<8?t[0]=-1:m.x+m.width-d.clientX<8?t[0]=1:t[0]=0,d.clientY-m.y<8?t[1]=-1:m.y+m.height-d.clientY<8?t[1]=1:t[1]=0,t[0]*t[1]===1?a="nwse-resize":t[0]*t[1]===-1?a="nesw-resize":t[0]!==0?a="ew-resize":t[1]!==0?a="ns-resize":d.clientY-m.y<32?a="grab":a="default",o!=="none")if(o==="move")a="grabbing",_.updateWindow(i,j(I({},p),{rect:{x:r.x+d.clientX-l.x,y:r.y+d.clientY-l.y,width:p.rect.width,height:p.rect.height}}));else{const b=I({},r);n[0]===1?b.width=r.width-l.x+d.clientX:n[0]===-1&&(b.width=l.x+r.width-d.clientX,b.x=r.x-l.x+d.clientX),n[1]===1?b.height=r.height-l.y+d.clientY:n[1]===-1&&(b.height=l.y+r.height-d.clientY,b.y=r.y-l.y+d.clientY),_.updateWindow(i,j(I({},p),{rect:b}))}},mouseUpHandler:()=>()=>{o="none"},cursorGetter:()=>a}};function Je(i){G(i,"svelte-1sh15w3",".frame.svelte-1sh15w3.svelte-1sh15w3{position:absolute;box-sizing:border-box;background:white;border:7px solid;border-radius:10px}.frame.svelte-1sh15w3 .header.svelte-1sh15w3{position:absolute;top:0;left:0;display:flex;justify-content:space-between;width:100%;height:var(--header-height);background-color:#3b77bc;outline:1px #3b77bc solid}.frame.svelte-1sh15w3 .header h2.svelte-1sh15w3{margin:0;font-size:20px;color:white}.frame.svelte-1sh15w3 .content.svelte-1sh15w3{position:absolute;top:var(--header-height);left:0;width:100%;height:calc(100% - var(--header-height));overflow:hidden}")}function ce(i){let e,s,t;return{c(){e=v("button"),e.textContent="\xD7"},m(n,o){y(n,e,o),s||(t=[M(e,"click",D(i[8])),M(e,"mousedown",D(tt))],s=!0)},p:z,d(n){n&&x(e),s=!1,_e(t)}}}function Qe(i){let e,s,t,n,o=i[1].title+"",l,a,r,c,u,f,p,d,m,b,X,N,T,$,se,k=i[0]!=="visualizer"&&ce(i);return b=new i[5]({}),{c(){e=v("div"),s=v("div"),t=v("div"),n=v("h2"),l=U(o),a=H(),r=v("div"),c=v("button"),c.textContent="_",u=H(),f=v("button"),f.textContent="\u25A1",p=H(),k&&k.c(),d=H(),m=v("section"),O(b.$$.fragment),N=H(),h(n,"class","svelte-1sh15w3"),h(t,"class","title"),h(r,"class","controls"),h(s,"class","header svelte-1sh15w3"),h(m,"class","content svelte-1sh15w3"),h(e,"class","frame svelte-1sh15w3"),h(e,"style",X=`
top: ${i[1].visible?i[1].fullscreen?0:i[1].rect.y:window.innerHeight}px;
left: ${i[1].fullscreen?0:i[1].rect.x}px;
width: ${i[1].fullscreen?window.innerWidth:i[1].rect.width}px;
height: ${i[1].fullscreen?window.innerHeight-F:i[1].rect.height}px;
cursor: ${i[4]};
z-index: ${i[2]};
border-color: ${i[3],"#3B77BC"};
--header-height: ${re}px
`)},m(g,Y){y(g,e,Y),w(e,s),w(s,t),w(t,n),w(n,l),w(s,a),w(s,r),w(r,c),w(r,u),w(r,f),w(r,p),k&&k.m(r,null),w(e,d),w(e,m),L(b,m,null),y(g,N,Y),T=!0,$||(se=[M(c,"click",D(i[7])),M(c,"mousedown",D(Ze)),M(f,"click",D(i[6])),M(f,"mousedown",D(et)),M(e,"mousedown",i[12]),M(document.body,"mousemove",i[10]),M(document.body,"mouseup",i[11])],$=!0)},p(g,[Y]){(!T||Y&2)&&o!==(o=g[1].title+"")&&K(l,o),g[0]!=="visualizer"?k?k.p(g,Y):(k=ce(g),k.c(),k.m(r,null)):k&&(k.d(1),k=null),(!T||Y&30&&X!==(X=`
top: ${g[1].visible?g[1].fullscreen?0:g[1].rect.y:window.innerHeight}px;
left: ${g[1].fullscreen?0:g[1].rect.x}px;
width: ${g[1].fullscreen?window.innerWidth:g[1].rect.width}px;
height: ${g[1].fullscreen?window.innerHeight-F:g[1].rect.height}px;
cursor: ${g[4]};
z-index: ${g[2]};
border-color: ${g[3],"#3B77BC"};
--header-height: ${re}px
`))&&h(e,"style",X)},i(g){T||(q(b.$$.fragment,g),T=!0)},o(g){C(b.$$.fragment,g),T=!1},d(g){g&&x(e),k&&k.d(),R(b),g&&x(N),$=!1,_e(se)}}}const Ze=()=>"",et=()=>"",tt=()=>"";function st(i,e,s){let{id:t}=e,{windowInfo:n}=e,{zIndex:o}=e,{focus:l}=e,a="default",{Component:r}=n;const c=()=>{_.updateWindow(t,j(I({},n),{fullscreen:!n.fullscreen}))},u=()=>{_.updateWindow(t,j(I({},n),{visible:!1}))},f=()=>{_.killWindow(t)},{mouseDownHandler:p,mouseMoveHandler:d,mouseUpHandler:m,cursorGetter:b}=Ke(t),X=$=>{s(4,a=b()),d(n)($)},N=()=>{m()()},T=$=>p(n)($);return i.$$set=$=>{"id"in $&&s(0,t=$.id),"windowInfo"in $&&s(1,n=$.windowInfo),"zIndex"in $&&s(2,o=$.zIndex),"focus"in $&&s(3,l=$.focus)},[t,n,o,l,a,r,c,u,f,p,X,N,T]}class nt extends B{constructor(e){super();P(this,e,st,Qe,S,{id:0,windowInfo:1,zIndex:2,focus:3},Je)}}class E{static get time(){return this._time}static get deltaTime(){return this._deltaTime}static start(e){this.startTime=e,this.prevTime=e}static update(e){this._time=(e-this.startTime)/1e3,this._deltaTime=(e-this.prevTime)/1e3,this.prevTime=e}}W(E,"startTime",-1),W(E,"_time",-1),W(E,"_deltaTime",-1),W(E,"prevTime",-1);class V extends Be{constructor(){super(...arguments);W(this,"initialized",!1)}start(){}update(){!this.visible||(this.initialized||(this.start(),this.initialized=!0),this.children.map(e=>{(e instanceof A||e instanceof V)&&e.update()}))}}class A extends Pe{constructor(){super();W(this,"initialized",!1)}start(){}update(){!this.visible||(this.initialized||(this.start(),this.initialized=!0),this.children.map(e=>{(e instanceof A||e instanceof V)&&e.update()}))}}class it extends EventTarget{constructor(){super()}}const J=new it;class lt extends A{start(){}update(){super.update()}}class rt extends V{constructor(){super(new ye(.1,.2,.05),new xe({color:65280}))}start(){}update(){super.update()}}class ot extends A{constructor(){super();new Array(100).fill(null).forEach((e,s)=>{const t=new rt,n=s/100*Math.PI*2;t.position.set(Math.sin(n)*5,0,Math.cos(n)*5),t.rotation.y=n,this.add(t)})}start(){}update(){if(super.update(),Math.random()<.01){const e=this.children[Math.floor(Math.random()*100)];if(!e)return;new Z(e.scale,.5,{x:3,y:3,z:3,ease:ee.easeOut}),new Z(e.position,.5,{x:e.position.x,y:1,z:e.position.z,ease:ee.easeOut}),new Z(e.rotation,.5,{x:0,y:e.rotation.y+Math.PI*1,z:0,ease:ee.easeOut})}}}class at extends V{constructor(){super(new ye(1,1,1),new xe({color:16711680}))}start(){console.log("circuit")}update(){super.update(),this.rotation.y=Math.PI*E.deltaTime}}class ct extends Se{constructor(){super(60,1,1,2e3)}start(){}update(){this.position.set(Math.sin(E.time*.1)*3,2,Math.cos(E.time*.1)*3),this.lookAt(0,0,0)}}const ut=async()=>{const i=document.getElementById("main-canvas"),e=document.getElementById("canvas-wrapper"),s=new Te({canvas:i,alpha:!0,antialias:!0}),t=new je(s),n=new ct,o=()=>{const c=e.getBoundingClientRect(),u=c.width,f=c.height;s.setSize(u,f),s.setPixelRatio(window.devicePixelRatio),n.aspect=u/f,n.updateProjectionMatrix()};new MutationObserver(o).observe(e,{attributes:!0,attributeFilter:["style"]}),o();const a=new Oe;a.add(new lt,new ot,new at),J.addEventListener("start",()=>{console.log("start ctf")}),J.addEventListener("end",()=>{console.log("end ctf")}),J.addEventListener("recalcurate",async()=>{console.log("recalcurate")}),J.addEventListener("submit",()=>{console.log("submit")}),t.addPass(new Le(a,n));const r=c=>{requestAnimationFrame(r),E.update(c),s.render(a,n),n.update(),a.children.map(u=>{(u instanceof A||u instanceof V)&&u.update()})};E.start(performance.now()),requestAnimationFrame(r)};function dt(i){G(i,"svelte-yfodr9",".resize.svelte-yfodr9.svelte-yfodr9{width:100%;height:100%}.resize.svelte-yfodr9 #canvas-wrapper #main-canvas.svelte-yfodr9{width:100%;height:100%}")}function ft(i){let e,s,t,n,o;return{c(){e=v("div"),s=v("div"),t=v("canvas"),h(t,"id","main-canvas"),h(t,"class","svelte-yfodr9"),h(s,"id","canvas-wrapper"),h(s,"style",n=`
    width: ${i[1]}px;
    height: ${i[0]}PX;
  `),h(e,"class","resize svelte-yfodr9"),Re(()=>i[2].call(e))},m(l,a){y(l,e,a),w(e,s),w(s,t),o=Fe(e,i[2].bind(e))},p(l,[a]){a&3&&n!==(n=`
    width: ${l[1]}px;
    height: ${l[0]}PX;
  `)&&h(s,"style",n)},i:z,o:z,d(l){l&&x(e),o()}}}function ht(i,e,s){Xe(()=>{ut()});let t,n;function o(){t=this.clientHeight,n=this.clientWidth,s(0,t),s(1,n)}return[t,n,o]}class pt extends B{constructor(e){super();P(this,e,ht,ft,S,{},dt)}}function wt(i){let e,s;return{c(){e=v("div"),s=U(i[0])},m(t,n){y(t,e,n),w(e,s)},p(t,[n]){n&1&&K(s,t[0])},i:z,o:z,d(t){t&&x(e)}}}function mt(i,e,s){let t="";const n=setInterval(()=>{s(0,t=new Date().toString())},100);return be(()=>{clearInterval(n)}),[t]}class ze extends B{constructor(e){super();P(this,e,mt,wt,S,{})}}const ue={Component:ze,title:"Clock",rect:{x:0,y:0,width:500,height:500},visible:!0,fullscreen:!1},gt={visualizer:{Component:pt,title:"Visualizer",rect:{x:0,y:0,width:500,height:500},visible:!0,fullscreen:!1},clock:{Component:ze,title:"Clock",rect:{x:0,y:0,width:500,height:500},visible:!0,fullscreen:!1}};function vt(i){G(i,"svelte-b1y0n5",".icon.svelte-b1y0n5.svelte-b1y0n5{width:64px;height:64px;padding:4px}.icon.svelte-b1y0n5 img.svelte-b1y0n5{width:56px;height:44px;object-fit:contain}.icon.svelte-b1y0n5 div.svelte-b1y0n5{font-size:12px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}")}function bt(i){let e,s,t,n,o,l,a=i[0].title+"",r,c,u;return{c(){e=v("button"),s=v("img"),o=H(),l=v("div"),r=U(a),le(s.src,t=i[0].src)||h(s,"src",t),h(s,"alt",n=i[0].title),h(s,"class","svelte-b1y0n5"),h(l,"class","svelte-b1y0n5"),h(e,"class","icon svelte-b1y0n5"),h(e,"style",`
position: absolute;
top: ${i[2]}px;
left: ${i[1]}px;
`)},m(f,p){y(f,e,p),w(e,s),w(e,o),w(e,l),w(l,r),c||(u=M(e,"click",i[3]),c=!0)},p(f,[p]){p&1&&!le(s.src,t=f[0].src)&&h(s,"src",t),p&1&&n!==(n=f[0].title)&&h(s,"alt",n),p&1&&a!==(a=f[0].title+"")&&K(r,a)},i:z,o:z,d(f){f&&x(e),c=!1,u()}}}const de=64,_t=64;function yt(i,e,s){let{icon:t}=e,{index:n}=e;const o=Math.floor((window.innerHeight-F)/de),l=_t*Math.floor(n/o),a=de*(n%o);let r=[];_.windowIndices.subscribe(u=>{r=u});const c=()=>{if(r.includes(t.id)){_.focus(t.id);return}const u=gt[t.id];u&&_.updateWindow(t.id,u)};return i.$$set=u=>{"icon"in u&&s(0,t=u.icon),"index"in u&&s(4,n=u.index)},[t,l,a,c,n]}class xt extends B{constructor(e){super();P(this,e,yt,bt,S,{icon:0,index:4},vt)}}var $t="/Visualizer/assets/clock-icon.77140fc3.png",kt="/Visualizer/assets/visualizer-icon.4fa4c0d3.png";const fe=[{src:kt,id:"visualizer",title:"Visualizer.exe"},{src:$t,id:"clock",title:"Clock.exe"}];function he(i,e,s){const t=i.slice();return t[0]=e[s],t[2]=s,t}function pe(i){let e,s;return e=new xt({props:{icon:i[0],index:i[2]}}),{c(){O(e.$$.fragment)},m(t,n){L(e,t,n),s=!0},p:z,i(t){s||(q(e.$$.fragment,t),s=!0)},o(t){C(e.$$.fragment,t),s=!1},d(t){R(e,t)}}}function zt(i){let e,s,t=fe,n=[];for(let l=0;l<t.length;l+=1)n[l]=pe(he(i,t,l));const o=l=>C(n[l],1,1,()=>{n[l]=null});return{c(){e=v("div");for(let l=0;l<n.length;l+=1)n[l].c()},m(l,a){y(l,e,a);for(let r=0;r<n.length;r+=1)n[r].m(e,null);s=!0},p(l,[a]){if(a&0){t=fe;let r;for(r=0;r<t.length;r+=1){const c=he(l,t,r);n[r]?(n[r].p(c,a),q(n[r],1)):(n[r]=pe(c),n[r].c(),q(n[r],1),n[r].m(e,null))}for($e(),r=t.length;r<n.length;r+=1)o(r);ke()}},i(l){if(!s){for(let a=0;a<t.length;a+=1)q(n[a]);s=!0}},o(l){n=n.filter(Boolean);for(let a=0;a<n.length;a+=1)C(n[a]);s=!1},d(l){l&&x(e),Ye(n,l)}}}class It extends B{constructor(e){super();P(this,e,null,zt,S,{})}}function we(i,e,s){const t=i.slice();return t[3]=e[s],t[5]=s,t}function me(i,e){let s,t,n;return t=new nt({props:{windowInfo:e[2][e[3]]||ue,id:e[3],zIndex:e[5],focus:e[1]===e[3]}}),{key:i,first:null,c(){s=te(),O(t.$$.fragment),this.first=s},m(o,l){y(o,s,l),L(t,o,l),n=!0},p(o,l){e=o;const a={};l&5&&(a.windowInfo=e[2][e[3]]||ue),l&1&&(a.id=e[3]),l&1&&(a.zIndex=e[5]),l&3&&(a.focus=e[1]===e[3]),t.$set(a)},i(o){n||(q(t.$$.fragment,o),n=!0)},o(o){C(t.$$.fragment,o),n=!1},d(o){o&&x(s),R(t,o)}}}function Ht(i){let e,s,t=[],n=new Map,o,l;e=new It({});let a=i[0];const r=c=>c[3];for(let c=0;c<a.length;c+=1){let u=we(i,a,c),f=r(u);n.set(f,t[c]=me(f,u))}return{c(){O(e.$$.fragment),s=H();for(let c=0;c<t.length;c+=1)t[c].c();o=te()},m(c,u){L(e,c,u),y(c,s,u);for(let f=0;f<t.length;f+=1)t[f].m(c,u);y(c,o,u),l=!0},p(c,[u]){u&7&&(a=c[0],$e(),t=ve(t,u,r,1,c,a,n,o.parentNode,De,me,o,we),ke())},i(c){if(!l){q(e.$$.fragment,c);for(let u=0;u<a.length;u+=1)q(t[u]);l=!0}},o(c){C(e.$$.fragment,c);for(let u=0;u<t.length;u+=1)C(t[u]);l=!1},d(c){R(e,c),c&&x(s);for(let u=0;u<t.length;u+=1)t[u].d(c);c&&x(o)}}}function Mt(i,e,s){let t=[],n="",o={};return _.windowIndices.subscribe(l=>{s(0,t=l);const a=t.filter(r=>{var c;return(c=o[r])==null?void 0:c.visible});s(1,n=a[a.length-1]||"")}),_.windows.subscribe(l=>{s(2,o=l);const a=t.filter(r=>{var c;return(c=o[r])==null?void 0:c.visible});s(1,n=a[a.length-1]||"")}),[t,n,o]}class qt extends B{constructor(e){super();P(this,e,Mt,Ht,S,{})}}var Ct="/Visualizer/assets/startup.2d3d8af5.png";function Wt(i){G(i,"svelte-zwkdn1","main.svelte-zwkdn1{position:absolute;top:0;left:0;z-index:1000;width:100%;height:100%;background-image:var(--startup-src);background-size:cover;background-position:center center}")}function ge(i){let e,s;return{c(){e=v("main"),h(e,"style",s=`--startup-src:url(${Ct})`),h(e,"class","svelte-zwkdn1")},m(t,n){y(t,e,n)},p:z,d(t){t&&x(e)}}}function Et(i){let e,s=i[0]&&ge();return{c(){s&&s.c(),e=te()},m(t,n){s&&s.m(t,n),y(t,e,n)},p(t,[n]){t[0]?s?s.p(t,n):(s=ge(),s.c(),s.m(e.parentNode,e)):s&&(s.d(1),s=null)},i:z,o:z,d(t){s&&s.d(t),t&&x(e)}}}function Bt(i,e,s){let t=!0;return setTimeout(()=>{s(0,t=!1)},5e3),[t]}class Pt extends B{constructor(e){super();P(this,e,Bt,Et,S,{},Wt)}}var St="/Visualizer/assets/xp.3ff07b20.jpg";function Tt(i){G(i,"svelte-a3336s","main.svelte-a3336s{position:absolute;top:0;left:0;width:100%;height:calc(100% - var(--footer-height));padding:0;margin:0;background-image:var(--screen-bg);background-size:cover}")}function jt(i){let e,s,t,n,o,l,a;return s=new qt({}),n=new Ue({}),l=new Pt({}),{c(){e=v("main"),O(s.$$.fragment),t=H(),O(n.$$.fragment),o=H(),O(l.$$.fragment),h(e,"style",`
--screen-bg: url(${St});
--footer-height: ${F}px;
`),h(e,"class","svelte-a3336s")},m(r,c){y(r,e,c),L(s,e,null),y(r,t,c),L(n,r,c),y(r,o,c),L(l,r,c),a=!0},p:z,i(r){a||(q(s.$$.fragment,r),q(n.$$.fragment,r),q(l.$$.fragment,r),a=!0)},o(r){C(s.$$.fragment,r),C(n.$$.fragment,r),C(l.$$.fragment,r),a=!1},d(r){r&&x(e),R(s),r&&x(t),R(n,r),r&&x(o),R(l,r)}}}class Ot extends B{constructor(e){super();P(this,e,null,jt,S,{},Tt)}}new Ot({target:document.body});