!function(e){var t={};function n(o){if(t[o])return t[o].exports;var s=t[o]={i:o,l:!1,exports:{}};return e[o].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)n.d(o,s,function(t){return e[t]}.bind(null,s));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);n(0);function o(){}function s(e,t){for(const n in t)e[n]=t[n];return e}function c(e){return e()}function r(){return Object.create(null)}function l(e){e.forEach(c)}function i(e){return"function"==typeof e}function a(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function u(e,t,n){return e[1]?s({},s(t.$$scope.ctx,e[1](n?n(t):{}))):t.$$scope.ctx}new Set;function f(e,t){e.appendChild(t)}function d(e,t,n){e.insertBefore(t,n||null)}function p(e){e.parentNode.removeChild(e)}function m(e){return document.createElement(e)}function h(e){return document.createTextNode(e)}function $(){return h(" ")}function b(e,t,n,o){return e.addEventListener(t,n,o),()=>e.removeEventListener(t,n,o)}function g(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}let v;function x(e){v=e}const w=[],y=[],C=[],_=[],z=Promise.resolve();let S=!1;function k(){S||(S=!0,z.then(O))}function M(e){C.push(e)}function O(){const e=new Set;do{for(;w.length;){const e=w.shift();x(e),j(e.$$)}for(;y.length;)y.pop()();for(let t=0;t<C.length;t+=1){const n=C[t];e.has(n)||(n(),e.add(n))}C.length=0}while(w.length);for(;_.length;)_.pop()();S=!1}function j(e){null!==e.fragment&&(e.update(e.dirty),l(e.before_update),e.fragment&&e.fragment.p(e.dirty,e.ctx),e.dirty=null,e.after_update.forEach(M))}const q=new Set;let R;function A(){R={r:0,c:[],p:R}}function P(){R.r||l(R.c),R=R.p}function T(e,t){e&&e.i&&(q.delete(e),e.i(t))}function E(e,t,n,o){if(e&&e.o){if(q.has(e))return;q.add(e),R.c.push(()=>{q.delete(e),o&&(n&&e.d(1),o())}),e.o(t)}}"undefined"!=typeof window?window:global;new Set(["allowfullscreen","allowpaymentrequest","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","hidden","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"]);let L;function J(e){e&&e.c()}function V(e,t,n){const{fragment:o,on_mount:s,on_destroy:r,after_update:a}=e.$$;o&&o.m(t,n),M(()=>{const t=s.map(c).filter(i);r?r.push(...t):l(t),e.$$.on_mount=[]}),a.forEach(M)}function H(e,t){const n=e.$$;null!==n.fragment&&(l(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx={})}function N(e,t,n,s,c,i){const a=v;x(e);const u=t.props||{},f=e.$$={fragment:null,ctx:null,props:i,update:o,not_equal:c,bound:r(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(a?a.$$.context:[]),callbacks:r(),dirty:null};let d=!1;var p;f.ctx=n?n(e,u,(t,n,o=n)=>(f.ctx&&c(f.ctx[t],f.ctx[t]=o)&&(f.bound[t]&&f.bound[t](o),d&&function(e,t){e.$$.dirty||(w.push(e),k(),e.$$.dirty=r()),e.$$.dirty[t]=!0}(e,t)),n)):u,f.update(),d=!0,l(f.before_update),f.fragment=!!s&&s(f.ctx),t.target&&(t.hydrate?f.fragment&&f.fragment.l((p=t.target,Array.from(p.childNodes))):f.fragment&&f.fragment.c(),t.intro&&T(e.$$.fragment),V(e,t.target,t.anchor),O()),x(a)}"function"==typeof HTMLElement&&(L=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){for(const e in this.$$.slotted)this.appendChild(this.$$.slotted[e])}attributeChangedCallback(e,t,n){this[e]=n}$destroy(){H(this,1),this.$destroy=o}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(){}});class W{$destroy(){H(this,1),this.$destroy=o}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(){}}n(1);function B(e){let t,n,o,c;const r=e.$$slots.default,l=function(e,t,n){if(e){const o=u(e,t,n);return e[0](o)}}(r,e,null);return{c(){t=m("div"),n=m("div"),l&&l.c(),g(n,"class","modal svelte-1z0mxa"),g(t,"class","modal-container svelte-1z0mxa"),c=b(t,"click",e.onModalClose)},m(e,s){d(e,t,s),f(t,n),l&&l.m(n,null),o=!0},p(e,t){l&&l.p&&e.$$scope&&l.p(function(e,t,n,o){return e[1]?s({},s(t.$$scope.changed||{},e[1](o?o(n):{}))):t.$$scope.changed||{}}(r,t,e,null),u(r,t,null))},i(e){o||(T(l,e),o=!0)},o(e){E(l,e),o=!1},d(e){e&&p(t),l&&l.d(e),c()}}}function I(e,t,n){let{onClose:o=function(){}}=t;let{$$slots:s={},$$scope:c}=t;return e.$set=e=>{"onClose"in e&&n("onClose",o=e.onClose),"$$scope"in e&&n("$$scope",c=e.$$scope)},{onClose:o,onModalClose:function(e){2===e.eventPhase&&o()},$$slots:s,$$scope:c}}var X=class extends W{constructor(e){super(),N(this,e,I,B,a,{onClose:0})}};n(2);function D(e){let t,n,s,c,r,i,a,u,h,v,x;return{c(){t=m("div"),n=m("div"),n.innerHTML='<iframe src="https://docs.google.com/viewer?srcid=17SJXhb048iAt1bTxOR14O4VyAuik6nuqgC3-W1Sl740&amp;pid=explorer&amp;efh=false&amp;a=v&amp;chrome=false&amp;embedded=true" title="Vatsal&#39;s resume" class="svelte-u31q5i"></iframe>',s=$(),c=m("div"),r=m("div"),i=m("div"),a=m("button"),a.textContent="Download",u=$(),h=m("div"),v=m("button"),v.textContent="Close",g(n,"class","fx-item"),g(a,"class","resume-action-btn svelte-u31q5i"),g(i,"class","fx-item fx-grow-zero"),g(v,"class","resume-action-btn svelte-u31q5i"),g(h,"class","fx-item fx-grow-zero"),g(r,"class","fx-container resume-action-buttons svelte-u31q5i"),g(c,"class","fx-item fx-grow-zero"),g(t,"class","fx-container direction-column resume-container svelte-u31q5i"),x=[b(a,"click",F),b(v,"click",e.onClose)]},m(e,o){d(e,t,o),f(t,n),f(t,s),f(t,c),f(c,r),f(r,i),f(i,a),f(r,u),f(r,h),f(h,v)},p:o,i:o,o:o,d(e){e&&p(t),l(x)}}}function F(){window.location="https://docs.google.com/document/d/17SJXhb048iAt1bTxOR14O4VyAuik6nuqgC3-W1Sl740/export?format=pdf",gtag("event","resume download")}function G(e,t,n){let{onClose:o=function(){}}=t;return e.$set=e=>{"onClose"in e&&n("onClose",o=e.onClose)},{onClose:o}}var K=class extends W{constructor(e){super(),N(this,e,G,D,a,{onClose:0})}};n(3);function Q(e){let t;const n=new X({props:{onClose:e.closeResumeModal,$$slots:{default:[U]},$$scope:{ctx:e}}});return{c(){J(n.$$.fragment)},m(e,o){V(n,e,o),t=!0},p(e,t){const o={};e.$$scope&&(o.$$scope={changed:e,ctx:t}),n.$set(o)},i(e){t||(T(n.$$.fragment,e),t=!0)},o(e){E(n.$$.fragment,e),t=!1},d(e){H(n,e)}}}function U(e){let t;const n=new K({props:{onClose:e.closeResumeModal}});return{c(){J(n.$$.fragment)},m(e,o){V(n,e,o),t=!0},p:o,i(e){t||(T(n.$$.fragment,e),t=!0)},o(e){E(n.$$.fragment,e),t=!1},d(e){H(n,e)}}}function Y(e){let t,n,o,s,c=e.showResume&&Q(e);return{c(){t=m("div"),t.innerHTML='<div class="fx-item fx-grow-zero"><img id="profile-pic" src="/public/vatsal-joshi.png" alt="Vatsal Joshi" class="svelte-btbc04"></div> \n  <div class="fx-item fx-grow-zero"><h1>Vatsal Joshi</h1></div> \n  <div class="fx-item fx-grow-zero"><p class="svelte-btbc04">I&#39;m a JavaScript and Web enthusiast, living in Banglore, India.</p> \n    <p class="svelte-btbc04">\n      Pseudo blogger at\n      <a target="_blank" href="https://blog.vatz88.in" rel="noopener" class="svelte-btbc04">\n        blog.vatz88.in\n      </a></p> \n    <p class="svelte-btbc04">\n      Connect with me\n      <a target="_blank" href="https://twitter.com/vatz88" rel="noopener" class="svelte-btbc04">\n        @vatz88\n      </a></p></div> \n  <footer class="fx-item fx-grow-zero svelte-btbc04"><p class="svelte-btbc04">\n      Site build with\n      <a href="https://svelte.dev" class="svelte-btbc04">Svelte</a></p> \n    <p class="svelte-btbc04">\n      Source code can be found at\n      <a target="_blank" href="https://github.com/vatz88/vatz88.github.io" rel="noopener" class="svelte-btbc04">\n        github.com/vatz88/vatz88.github.io\n      </a></p></footer>',n=$(),c&&c.c(),o=h(""),g(t,"itemscope",""),g(t,"itemtype","https://schema.org/Person"),g(t,"class","App fx-container direction-column align-center svelte-btbc04")},m(e,r){d(e,t,r),d(e,n,r),c&&c.m(e,r),d(e,o,r),s=!0},p(e,t){t.showResume?c?(c.p(e,t),T(c,1)):(c=Q(t),c.c(),T(c,1),c.m(o.parentNode,o)):c&&(A(),E(c,1,1,()=>{c=null}),P())},i(e){s||(T(c),s=!0)},o(e){E(c),s=!1},d(e){e&&p(t),e&&p(n),c&&c.d(e),e&&p(o)}}}function Z(e,t,n){let o=!1;function s(){"#resume"===window.location.hash.toLowerCase()&&(n("showResume",o=!0),gtag("event","resume view",{non_interaction:!0}))}return window.onhashchange=s,s(),{showResume:o,closeResumeModal:function(){n("showResume",o=!1),history.pushState("",document.title,window.location.pathname+window.location.search)}}}new class extends W{constructor(e){super(),N(this,e,Z,Y,a,{})}}({target:document.body});const ee=["font-size: 44px","color: #757575"].join(";");console.log("%cvatz88",ee)}]);
//# sourceMappingURL=main.957d407912340ea8d12e.js.map