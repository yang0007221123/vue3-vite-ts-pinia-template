import{at as O,aV as V,bQ as J,A as H,S as Ee,B as U,h as Q,aY as pe,u as de,bS as me,G as Z,w as g,bT as Te,D as ye,bU as be,F as Se,bs as W,C as le,r as Y,_ as we,e as fe,y as Le,k,W as _e,q as z,X as ee,g as Ce,b as he,d as te,a8 as Ne,L as Oe}from"./index-RkUO-6lj.js";class Ae extends Error{constructor(t){super(t),this.name="ElementPlusError"}}function Me(e,t){throw new Ae(`[${e}] ${t}`)}function qe(e,t){}let F;const Re=e=>{var t;if(!O)return 0;if(F!==void 0)return F;const o=document.createElement("div");o.className=`${e}-scrollbar__wrap`,o.style.visibility="hidden",o.style.width="100px",o.style.position="absolute",o.style.top="-9999px",document.body.appendChild(o);const n=o.offsetWidth;o.style.overflow="scroll";const r=document.createElement("div");r.style.width="100%",o.appendChild(r);const u=r.offsetWidth;return(t=o.parentNode)==null||t.removeChild(o),F=n-u,F};function Je(e,t){if(!O)return;if(!t){e.scrollTop=0;return}const o=[];let n=t.offsetParent;for(;n!==null&&e!==n&&e.contains(n);)o.push(n),n=n.offsetParent;const r=t.offsetTop+o.reduce((E,p)=>E+p.offsetTop,0),u=r+t.offsetHeight,c=e.scrollTop,i=c+e.clientHeight;r<c?e.scrollTop=r:u>i&&(e.scrollTop=u-e.clientHeight)}const Qe="update:modelValue",Ze="change";var x=(e=>(e[e.TEXT=1]="TEXT",e[e.CLASS=2]="CLASS",e[e.STYLE=4]="STYLE",e[e.PROPS=8]="PROPS",e[e.FULL_PROPS=16]="FULL_PROPS",e[e.HYDRATE_EVENTS=32]="HYDRATE_EVENTS",e[e.STABLE_FRAGMENT=64]="STABLE_FRAGMENT",e[e.KEYED_FRAGMENT=128]="KEYED_FRAGMENT",e[e.UNKEYED_FRAGMENT=256]="UNKEYED_FRAGMENT",e[e.NEED_PATCH=512]="NEED_PATCH",e[e.DYNAMIC_SLOTS=1024]="DYNAMIC_SLOTS",e[e.HOISTED=-1]="HOISTED",e[e.BAIL=-2]="BAIL",e))(x||{});const $=e=>{const t=V(e)?e:[e],o=[];return t.forEach(n=>{var r;V(n)?o.push(...$(n)):J(n)&&V(n.children)?o.push(...$(n.children)):(o.push(n),J(n)&&((r=n.component)!=null&&r.subTree)&&o.push(...$(n.component.subTree)))}),o},et=(e,t,o,n)=>{let r={offsetX:0,offsetY:0};const u=E=>{const p=E.clientX,y=E.clientY,{offsetX:b,offsetY:S}=r,T=e.value.getBoundingClientRect(),s=T.left,a=T.top,d=T.width,l=T.height,f=document.documentElement.clientWidth,A=document.documentElement.clientHeight,M=-s+b,R=-a+S,K=f-s-d+b,w=A-a-l+S,L=C=>{let N=b+C.clientX-p,v=S+C.clientY-y;n!=null&&n.value||(N=Math.min(Math.max(N,M),K),v=Math.min(Math.max(v,R),w)),r={offsetX:N,offsetY:v},e.value&&(e.value.style.transform=`translate(${Q(N)}, ${Q(v)})`)},_=()=>{document.removeEventListener("mousemove",L),document.removeEventListener("mouseup",_)};document.addEventListener("mousemove",L),document.addEventListener("mouseup",_)},c=()=>{t.value&&e.value&&t.value.addEventListener("mousedown",u)},i=()=>{t.value&&e.value&&t.value.removeEventListener("mousedown",u)};H(()=>{Ee(()=>{o.value?c():i()})}),U(()=>{i()})},tt=(e,t={})=>{pe(e)||Me("[useLockscreen]","You need to pass a ref param to this function");const o=t.ns||de("popup"),n=me(()=>o.bm("parent","hidden"));if(!O||Z(document.body,n.value))return;let r=0,u=!1,c="0";const i=()=>{setTimeout(()=>{Se(document==null?void 0:document.body,n.value),u&&document&&(document.body.style.width=c)},200)};g(e,E=>{if(!E){i();return}u=!Z(document.body,n.value),u&&(c=document.body.style.width),r=Re(o.namespace.value);const p=document.documentElement.clientHeight<document.body.scrollHeight,y=Te(document.body,"overflowY");r>0&&(p||y==="scroll")&&u&&(document.body.style.width=`calc(100% - ${r}px)`),ye(document.body,n.value)}),be(()=>i())},ke=e=>{if(!e)return{onClick:W,onMousedown:W,onMouseup:W};let t=!1,o=!1;return{onClick:c=>{t&&o&&e(c),t=o=!1},onMousedown:c=>{t=c.target===c.currentTarget},onMouseup:c=>{o=c.target===c.currentTarget}}};let h=[];const oe=e=>{const t=e;t.key===le.esc&&h.forEach(o=>o(t))},Fe=e=>{H(()=>{h.length===0&&document.addEventListener("keydown",oe),O&&h.push(e)}),U(()=>{h=h.filter(t=>t!==e),h.length===0&&O&&document.removeEventListener("keydown",oe)})},X="focus-trap.focus-after-trapped",G="focus-trap.focus-after-released",De="focus-trap.focusout-prevented",ne={cancelable:!0,bubbles:!1},Ie={cancelable:!0,bubbles:!1},se="focusAfterTrapped",re="focusAfterReleased",Pe=Symbol("elFocusTrap"),j=Y(),B=Y(0),q=Y(0);let D=0;const ve=e=>{const t=[],o=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:n=>{const r=n.tagName==="INPUT"&&n.type==="hidden";return n.disabled||n.hidden||r?NodeFilter.FILTER_SKIP:n.tabIndex>=0||n===document.activeElement?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;o.nextNode();)t.push(o.currentNode);return t},ue=(e,t)=>{for(const o of e)if(!ge(o,t))return o},ge=(e,t)=>{if(getComputedStyle(e).visibility==="hidden")return!0;for(;e;){if(t&&e===t)return!1;if(getComputedStyle(e).display==="none")return!0;e=e.parentElement}return!1},xe=e=>{const t=ve(e),o=ue(t,e),n=ue(t.reverse(),e);return[o,n]},He=e=>e instanceof HTMLInputElement&&"select"in e,m=(e,t)=>{if(e&&e.focus){const o=document.activeElement;e.focus({preventScroll:!0}),q.value=window.performance.now(),e!==o&&He(e)&&t&&e.select()}};function ce(e,t){const o=[...e],n=e.indexOf(t);return n!==-1&&o.splice(n,1),o}const Ue=()=>{let e=[];return{push:n=>{const r=e[0];r&&n!==r&&r.pause(),e=ce(e,n),e.unshift(n)},remove:n=>{var r,u;e=ce(e,n),(u=(r=e[0])==null?void 0:r.resume)==null||u.call(r)}}},Ye=(e,t=!1)=>{const o=document.activeElement;for(const n of e)if(m(n,t),document.activeElement!==o)return},ae=Ue(),Be=()=>B.value>q.value,I=()=>{j.value="pointer",B.value=window.performance.now()},ie=()=>{j.value="keyboard",B.value=window.performance.now()},Ke=()=>(H(()=>{D===0&&(document.addEventListener("mousedown",I),document.addEventListener("touchstart",I),document.addEventListener("keydown",ie)),D++}),U(()=>{D--,D<=0&&(document.removeEventListener("mousedown",I),document.removeEventListener("touchstart",I),document.removeEventListener("keydown",ie))}),{focusReason:j,lastUserFocusTimestamp:B,lastAutomatedFocusTimestamp:q}),P=e=>new CustomEvent(De,{...Ie,detail:e}),Ve=fe({name:"ElFocusTrap",inheritAttrs:!1,props:{loop:Boolean,trapped:Boolean,focusTrapEl:Object,focusStartEl:{type:[Object,String],default:"first"}},emits:[se,re,"focusin","focusout","focusout-prevented","release-requested"],setup(e,{emit:t}){const o=Y();let n,r;const{focusReason:u}=Ke();Fe(s=>{e.trapped&&!c.paused&&t("release-requested",s)});const c={paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}},i=s=>{if(!e.loop&&!e.trapped||c.paused)return;const{key:a,altKey:d,ctrlKey:l,metaKey:f,currentTarget:A,shiftKey:M}=s,{loop:R}=e,K=a===le.tab&&!d&&!l&&!f,w=document.activeElement;if(K&&w){const L=A,[_,C]=xe(L);if(_&&C){if(!M&&w===C){const v=P({focusReason:u.value});t("focusout-prevented",v),v.defaultPrevented||(s.preventDefault(),R&&m(_,!0))}else if(M&&[_,L].includes(w)){const v=P({focusReason:u.value});t("focusout-prevented",v),v.defaultPrevented||(s.preventDefault(),R&&m(C,!0))}}else if(w===L){const v=P({focusReason:u.value});t("focusout-prevented",v),v.defaultPrevented||s.preventDefault()}}};Le(Pe,{focusTrapRef:o,onKeydown:i}),g(()=>e.focusTrapEl,s=>{s&&(o.value=s)},{immediate:!0}),g([o],([s],[a])=>{s&&(s.addEventListener("keydown",i),s.addEventListener("focusin",y),s.addEventListener("focusout",b)),a&&(a.removeEventListener("keydown",i),a.removeEventListener("focusin",y),a.removeEventListener("focusout",b))});const E=s=>{t(se,s)},p=s=>t(re,s),y=s=>{const a=k(o);if(!a)return;const d=s.target,l=s.relatedTarget,f=d&&a.contains(d);e.trapped||l&&a.contains(l)||(n=l),f&&t("focusin",s),!c.paused&&e.trapped&&(f?r=d:m(r,!0))},b=s=>{const a=k(o);if(!(c.paused||!a))if(e.trapped){const d=s.relatedTarget;!_e(d)&&!a.contains(d)&&setTimeout(()=>{if(!c.paused&&e.trapped){const l=P({focusReason:u.value});t("focusout-prevented",l),l.defaultPrevented||m(r,!0)}},0)}else{const d=s.target;d&&a.contains(d)||t("focusout",s)}};async function S(){await ee();const s=k(o);if(s){ae.push(c);const a=s.contains(document.activeElement)?n:document.activeElement;if(n=a,!s.contains(a)){const l=new Event(X,ne);s.addEventListener(X,E),s.dispatchEvent(l),l.defaultPrevented||ee(()=>{let f=e.focusStartEl;Ce(f)||(m(f),document.activeElement!==f&&(f="first")),f==="first"&&Ye(ve(s),!0),(document.activeElement===a||f==="container")&&m(s)})}}}function T(){const s=k(o);if(s){s.removeEventListener(X,E);const a=new CustomEvent(G,{...ne,detail:{focusReason:u.value}});s.addEventListener(G,p),s.dispatchEvent(a),!a.defaultPrevented&&(u.value=="keyboard"||!Be()||s.contains(document.activeElement))&&m(n??document.body),s.removeEventListener(G,p),ae.remove(c)}}return H(()=>{e.trapped&&S(),g(()=>e.trapped,s=>{s?S():T()})}),U(()=>{e.trapped&&T()}),{onKeydown:i}}});function We(e,t,o,n,r,u){return z(e.$slots,"default",{handleKeydown:e.onKeydown})}var ot=we(Ve,[["render",We],["__file","focus-trap.vue"]]);const $e=he({mask:{type:Boolean,default:!0},customMaskEvent:{type:Boolean,default:!1},overlayClass:{type:te([String,Array,Object])},zIndex:{type:te([String,Number])}}),Xe={click:e=>e instanceof MouseEvent},Ge="overlay";var ze=fe({name:"ElOverlay",props:$e,emits:Xe,setup(e,{slots:t,emit:o}){const n=de(Ge),r=E=>{o("click",E)},{onClick:u,onMousedown:c,onMouseup:i}=ke(e.customMaskEvent?void 0:r);return()=>e.mask?Ne("div",{class:[n.b(),e.overlayClass],style:{zIndex:e.zIndex},onClick:u,onMousedown:c,onMouseup:i},[z(t,"default")],x.STYLE|x.CLASS|x.PROPS,["onClick","onMouseup","onMousedown"]):Oe("div",{class:e.overlayClass,style:{zIndex:e.zIndex,position:"fixed",top:"0px",right:"0px",bottom:"0px",left:"0px"}},[z(t,"default")])}});const nt=ze;export{Ze as C,nt as E,Pe as F,Qe as U,tt as a,ot as b,ke as c,qe as d,$ as f,Je as s,Me as t,et as u};