!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=6)}([function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);n(0);function o(){}function r(e,t){for(const n in t)e[n]=t[n];return e}function i(e){return e()}function c(){return Object.create(null)}function a(e){e.forEach(i)}function s(e){return"function"==typeof e}function l(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function u(e,t){const n=e.subscribe(t);return n.unsubscribe?()=>n.unsubscribe():n}function d(e,t,n){e.$$.on_destroy.push(u(t,n))}function f(e,t,n){return e[1]?r({},r(t.$$scope.ctx,e[1](n?n(t):{}))):t.$$scope.ctx}function m(e){return null==e?"":e}new Set;function p(e,t){e.appendChild(t)}function h(e,t,n){e.insertBefore(t,n||null)}function g(e){e.parentNode.removeChild(e)}function $(e){return document.createElement(e)}function v(e){return document.createTextNode(e)}function w(){return v(" ")}function b(e,t,n,o){return e.addEventListener(t,n,o),()=>e.removeEventListener(t,n,o)}function x(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function y(e,t,n,o){e.style.setProperty(t,n,o?"important":"")}let k;function C(e){k=e}const M=[],_=[],z=[],R=[],j=Promise.resolve();let S=!1;function O(){S||(S=!0,j.then(T))}function V(e){z.push(e)}function T(){const e=new Set;do{for(;M.length;){const e=M.shift();C(e),L(e.$$)}for(;_.length;)_.pop()();for(let t=0;t<z.length;t+=1){const n=z[t];e.has(n)||(n(),e.add(n))}z.length=0}while(M.length);for(;R.length;)R.pop()();S=!1}function L(e){null!==e.fragment&&(e.update(e.dirty),a(e.before_update),e.fragment&&e.fragment.p(e.dirty,e.ctx),e.dirty=null,e.after_update.forEach(V))}const q=new Set;let A;function E(){A={r:0,c:[],p:A}}function P(){A.r||a(A.c),A=A.p}function H(e,t){e&&e.i&&(q.delete(e),e.i(t))}function J(e,t,n,o){if(e&&e.o){if(q.has(e))return;q.add(e),A.c.push(()=>{q.delete(e),o&&(n&&e.d(1),o())}),e.o(t)}}"undefined"!=typeof window?window:global;new Set(["allowfullscreen","allowpaymentrequest","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","hidden","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"]);let X;function N(e){e&&e.c()}function W(e,t,n){const{fragment:o,on_mount:r,on_destroy:c,after_update:l}=e.$$;o&&o.m(t,n),V(()=>{const t=r.map(i).filter(s);c?c.push(...t):a(t),e.$$.on_mount=[]}),l.forEach(V)}function D(e,t){const n=e.$$;null!==n.fragment&&(a(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx={})}function Y(e,t,n,r,i,s){const l=k;C(e);const u=t.props||{},d=e.$$={fragment:null,ctx:null,props:s,update:o,not_equal:i,bound:c(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(l?l.$$.context:[]),callbacks:c(),dirty:null};let f=!1;var m;d.ctx=n?n(e,u,(t,n,o=n)=>(d.ctx&&i(d.ctx[t],d.ctx[t]=o)&&(d.bound[t]&&d.bound[t](o),f&&function(e,t){e.$$.dirty||(M.push(e),O(),e.$$.dirty=c()),e.$$.dirty[t]=!0}(e,t)),n)):u,d.update(),f=!0,a(d.before_update),d.fragment=!!r&&r(d.ctx),t.target&&(t.hydrate?d.fragment&&d.fragment.l((m=t.target,Array.from(m.childNodes))):d.fragment&&d.fragment.c(),t.intro&&H(e.$$.fragment),W(e,t.target,t.anchor),T()),C(l)}"function"==typeof HTMLElement&&(X=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){for(const e in this.$$.slotted)this.appendChild(this.$$.slotted[e])}attributeChangedCallback(e,t,n){this[e]=n}$destroy(){D(this,1),this.$destroy=o}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(){}});class I{$destroy(){D(this,1),this.$destroy=o}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(){}}const B=[];function F(e,t=o){let n;const r=[];function i(t){if(l(e,t)&&(e=t,n)){const t=!B.length;for(let t=0;t<r.length;t+=1){const n=r[t];n[1](),B.push(n,e)}if(t){for(let e=0;e<B.length;e+=2)B[e][0](B[e+1]);B.length=0}}}return{set:i,update:function(t){i(t(e))},subscribe:function(c,a=o){const s=[c,a];return r.push(s),1===r.length&&(n=t(i)||o),c(e),()=>{const e=r.indexOf(s);-1!==e&&r.splice(e,1),0===r.length&&(n(),n=null)}}}}const G={dark:"dark",light:"light"},K="(prefers-color-scheme:light)",Q="not all"!==window.matchMedia(K).media,U=F(Q&&window.matchMedia(K).matches?G.light:G.dark);Q&&window.matchMedia(K).addListener(({matches:e})=>{const t=e?G.light:G.dark;U.set(t)});n(1);function Z(e){let t,n,r,i,c,a;return{c(){t=$("div"),n=$("img"),i=w(),c=$("div"),c.innerHTML="<h1>Vatsal Joshi</h1>",x(n,"id","profile-pic"),n.src!==(r="/public/vatsal-joshi.png")&&x(n,"src","/public/vatsal-joshi.png"),x(n,"alt","Vatsal Joshi"),y(n,"transform","rotate("+e.orientationRotateValue+"deg) rotateX("+e.picRotateValue.x+"deg)\n    rotateY("+e.picRotateValue.y+"deg)"),x(n,"class","svelte-weqr8n"),x(t,"class","fx-item fx-grow-zero ripple-ring svelte-weqr8n"),x(c,"class","fx-item fx-grow-zero"),a=b(t,"click",ee)},m(e,o){h(e,t,o),p(t,n),h(e,i,o),h(e,c,o)},p(e,t){(e.orientationRotateValue||e.picRotateValue)&&y(n,"transform","rotate("+t.orientationRotateValue+"deg) rotateX("+t.picRotateValue.x+"deg)\n    rotateY("+t.picRotateValue.y+"deg)")},i:o,o:o,d(e){e&&g(t),e&&g(i),e&&g(c),a()}}}function ee(){window.navigator.vibrate&&window.navigator.vibrate(50),U.update(e=>e===G.dark?G.light:G.dark),window.gtag("event","theme toggled")}function te(e,t,n){let o={x:0,y:0},r=0;function i(e,t){n("picRotateValue",o={...o,[e]:t})}const c=window.matchMedia("(pointer:fine)").matches;return window.matchMedia("(prefers-reduced-motion:reduce)").matches||(c?window.document.addEventListener("mousemove",(function(e){!function(e,t){const n={};function r(e,t){n[e]&&window.clearTimeout(n[e]),i(e,t),n[e]=window.setTimeout(()=>{0!==o[e]?i(e,0):window.clearTimeout(n[e])},200)}Math.sign(e)===Math.sign(o.x)?Math.sign(e)*e>Math.sign(o.x)*o.x&&r("x",e):r("x",e),Math.sign(t)===Math.sign(o.y)?Math.sign(t)*t>Math.sign(o.y)*o.y&&r("y",t):r("y",t)}(2*e.movementY,2*e.movementX)})):window.DeviceOrientationEvent&&window.addEventListener("deviceorientation",(function(e){n("orientationRotateValue",r=-e.gamma)}))),{picRotateValue:o,orientationRotateValue:r}}var ne=class extends I{constructor(e){super(),Y(this,e,te,Z,l,{})}};function oe(e){let t;return{c(){t=$("div"),t.innerHTML='<p>I&#39;m a JavaScript and Web enthusiast.</p> \n  <p>\n    A pseudo blogger at\n    <a target="_blank" href="https://blog.vatz88.in" rel="noopener">\n      blog.vatz88.in\n    </a></p> \n  <p>\n    When free, I contribute on\n    <a target="_blank" href="https://stackoverflow.com/users/5733059/vatz88" rel="noopener">\n      StackOverflow:vatz88\n    </a></p> \n  <p>\n    All my projects and open source contributions are on\n    <a target="_blank" href="https://github.com/vatz88" rel="noopener">\n      github.com/vatz88\n    </a></p> \n  <p>\n    Happy to connect! -\n    <a target="_blank" href="https://twitter.com/vatz88" rel="noopener">\n      twitter.com/vatz88\n    </a>\n    ;\n    <a href="mailto:hello@vatz88.in" rel="noopener">hello@vatz88.in</a></p>',x(t,"class","fx-item fx-grow-zero")},m(e,n){h(e,t,n)},p:o,i:o,o:o,d(e){e&&g(t)}}}var re=class extends I{constructor(e){super(),Y(this,e,null,oe,l,{})}};n(2);function ie(e){let t;return{c(){t=$("footer"),t.innerHTML='<p>\n    Liked this site? Source code available at\n    <a target="_blank" href="https://github.com/vatz88/vatz88.github.io" rel="noopener">\n      github.com/vatz88/vatz88.github.io\n    </a></p>',x(t,"class","fx-item fx-grow-zero svelte-slmics")},m(e,n){h(e,t,n)},p:o,i:o,o:o,d(e){e&&g(t)}}}var ce=class extends I{constructor(e){super(),Y(this,e,null,ie,l,{})}};n(3);function ae(e){let t,n,o,i,c;const a=e.$$slots.default,s=function(e,t,n){if(e){const o=f(e,t,n);return e[0](o)}}(a,e,null);return{c(){t=$("div"),n=$("div"),s&&s.c(),x(n,"class","modal svelte-evd45o"),x(t,"class",o=m(`modal-container ${e.$theme}`)+" svelte-evd45o"),c=b(t,"click",e.onModalClose)},m(e,o){h(e,t,o),p(t,n),s&&s.m(n,null),i=!0},p(e,n){s&&s.p&&e.$$scope&&s.p(function(e,t,n,o){return e[1]?r({},r(t.$$scope.changed||{},e[1](o?o(n):{}))):t.$$scope.changed||{}}(a,n,e,null),f(a,n,null)),(!i||e.$theme&&o!==(o=m(`modal-container ${n.$theme}`)+" svelte-evd45o"))&&x(t,"class",o)},i(e){i||(H(s,e),i=!0)},o(e){J(s,e),i=!1},d(e){e&&g(t),s&&s.d(e),c()}}}function se(e,t,n){let o;d(e,U,e=>n("$theme",o=e));let{onClose:r=function(){}}=t;let{$$slots:i={},$$scope:c}=t;return e.$set=e=>{"onClose"in e&&n("onClose",r=e.onClose),"$$scope"in e&&n("$$scope",c=e.$$scope)},{onClose:r,onModalClose:function(e){2===e.eventPhase&&r()},$theme:o,$$slots:i,$$scope:c}}var le=class extends I{constructor(e){super(),Y(this,e,se,ae,l,{onClose:0})}};n(4);function ue(e){let t,n,r,i,c,s,l,u,d,f,m;return{c(){t=$("div"),n=$("div"),n.innerHTML='<iframe src="https://docs.google.com/viewer?srcid=17SJXhb048iAt1bTxOR14O4VyAuik6nuqgC3-W1Sl740&amp;pid=explorer&amp;efh=false&amp;a=v&amp;chrome=false&amp;embedded=true" title="Vatsal&#39;s resume" class="svelte-18jmoqr"></iframe>',r=w(),i=$("div"),c=$("div"),s=$("div"),l=$("button"),l.textContent="Download",u=w(),d=$("div"),f=$("button"),f.textContent="Close",x(n,"class","fx-item"),x(l,"class","resume-action-btn svelte-18jmoqr"),x(s,"class","fx-item fx-grow-zero"),x(f,"class","resume-action-btn svelte-18jmoqr"),x(d,"class","fx-item fx-grow-zero"),x(c,"class","fx-container resume-action-buttons svelte-18jmoqr"),x(i,"class","fx-item fx-grow-zero"),x(t,"class","fx-container direction-column resume-container svelte-18jmoqr"),m=[b(l,"click",de),b(f,"click",e.onClose)]},m(e,o){h(e,t,o),p(t,n),p(t,r),p(t,i),p(i,c),p(c,s),p(s,l),p(c,u),p(c,d),p(d,f)},p:o,i:o,o:o,d(e){e&&g(t),a(m)}}}function de(){window.location="https://docs.google.com/document/d/17SJXhb048iAt1bTxOR14O4VyAuik6nuqgC3-W1Sl740/export?format=pdf",window.gtag("event","resume download")}function fe(e,t,n){let{onClose:o=function(){}}=t;return e.$set=e=>{"onClose"in e&&n("onClose",o=e.onClose)},{onClose:o}}var me=class extends I{constructor(e){super(),Y(this,e,fe,ue,l,{onClose:0})}};n(5);function pe(e){let t;const n=new le({props:{onClose:e.closeResumeModal,$$slots:{default:[he]},$$scope:{ctx:e}}});return{c(){N(n.$$.fragment)},m(e,o){W(n,e,o),t=!0},p(e,t){const o={};e.$$scope&&(o.$$scope={changed:e,ctx:t}),n.$set(o)},i(e){t||(H(n.$$.fragment,e),t=!0)},o(e){J(n.$$.fragment,e),t=!1},d(e){D(n,e)}}}function he(e){let t;const n=new me({props:{onClose:e.closeResumeModal}});return{c(){N(n.$$.fragment)},m(e,o){W(n,e,o),t=!0},p:o,i(e){t||(H(n.$$.fragment,e),t=!0)},o(e){J(n.$$.fragment,e),t=!1},d(e){D(n,e)}}}function ge(e){let t,n,o,r,i,c,a;const s=new ne({}),l=new re({}),u=new ce({});let d=e.showResume&&pe(e);return{c(){t=$("div"),N(s.$$.fragment),n=w(),N(l.$$.fragment),o=w(),N(u.$$.fragment),i=w(),d&&d.c(),c=v(""),x(t,"itemscope",""),x(t,"itemtype","https://schema.org/Person"),x(t,"class",r="App fx-container direction-column align-center "+e.$theme+" svelte-1mv77iv")},m(e,r){h(e,t,r),W(s,t,null),p(t,n),W(l,t,null),p(t,o),W(u,t,null),h(e,i,r),d&&d.m(e,r),h(e,c,r),a=!0},p(e,n){(!a||e.$theme&&r!==(r="App fx-container direction-column align-center "+n.$theme+" svelte-1mv77iv"))&&x(t,"class",r),n.showResume?d?(d.p(e,n),H(d,1)):(d=pe(n),d.c(),H(d,1),d.m(c.parentNode,c)):d&&(E(),J(d,1,1,()=>{d=null}),P())},i(e){a||(H(s.$$.fragment,e),H(l.$$.fragment,e),H(u.$$.fragment,e),H(d),a=!0)},o(e){J(s.$$.fragment,e),J(l.$$.fragment,e),J(u.$$.fragment,e),J(d),a=!1},d(e){e&&g(t),D(s),D(l),D(u),e&&g(i),d&&d.d(e),e&&g(c)}}}function $e(e,t,n){let o;d(e,U,e=>n("$theme",o=e));let r=!1;function i(){"#resume"===window.location.hash.toLowerCase()&&(n("showResume",r=!0),window.gtag("event","resume view",{non_interaction:!0}))}return window.onhashchange=i,i(),{showResume:r,closeResumeModal:function(){n("showResume",r=!1),history.pushState("",document.title,window.location.pathname+window.location.search)},$theme:o}}new class extends I{constructor(e){super(),Y(this,e,$e,ge,l,{})}}({target:document.body});const ve=e=>[`font-size: ${e}px`,"color: #757575"].join(";");console.log("%cvatz88",ve(44)),console.log("%cDid you know you can toggle the theme? Click on my photo!",ve(22))}]);
//# sourceMappingURL=main.4ee4a394a3b219a8b519.js.map