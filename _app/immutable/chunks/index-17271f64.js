function w(){}function F(t,n){for(const e in n)t[e]=n[e];return t}function M(t){return t()}function C(){return Object.create(null)}function p(t){t.forEach(M)}function O(t){return typeof t=="function"}function ut(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let x;function ot(t,n){return x||(x=document.createElement("a")),x.href=n,t===x.href}function R(t){return Object.keys(t).length===0}function W(t,...n){if(t==null)return w;const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function lt(t,n,e){t.$$.on_destroy.push(W(n,e))}function ft(t,n,e,i){if(t){const r=P(t,n,e,i);return t[0](r)}}function P(t,n,e,i){return t[1]&&i?F(e.ctx.slice(),t[1](i(n))):e.ctx}function at(t,n,e,i){if(t[2]&&i){const r=t[2](i(e));if(n.dirty===void 0)return r;if(typeof r=="object"){const l=[],s=Math.max(n.dirty.length,r.length);for(let u=0;u<s;u+=1)l[u]=n.dirty[u]|r[u];return l}return n.dirty|r}return n.dirty}function _t(t,n,e,i,r,l){if(r){const s=P(n,e,i,l);t.p(s,r)}}function dt(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}function ht(t){const n={};for(const e in t)e[0]!=="$"&&(n[e]=t[e]);return n}function mt(t,n){const e={};n=new Set(n);for(const i in t)!n.has(i)&&i[0]!=="$"&&(e[i]=t[i]);return e}let v=!1;function G(){v=!0}function I(){v=!1}function J(t,n,e,i){for(;t<n;){const r=t+(n-t>>1);e(r)<=i?t=r+1:n=r}return t}function K(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let o=0;o<n.length;o++){const a=n[o];a.claim_order!==void 0&&c.push(a)}n=c}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let r=0;for(let c=0;c<n.length;c++){const o=n[c].claim_order,a=(r>0&&n[e[r]].claim_order<=o?r+1:J(1,r,y=>n[e[y]].claim_order,o))-1;i[c]=e[a]+1;const f=a+1;e[f]=c,r=Math.max(f,r)}const l=[],s=[];let u=n.length-1;for(let c=e[r]+1;c!=0;c=i[c-1]){for(l.push(n[c-1]);u>=c;u--)s.push(n[u]);u--}for(;u>=0;u--)s.push(n[u]);l.reverse(),s.sort((c,o)=>c.claim_order-o.claim_order);for(let c=0,o=0;c<s.length;c++){for(;o<l.length&&s[c].claim_order>=l[o].claim_order;)o++;const a=o<l.length?l[o]:null;t.insertBefore(s[c],a)}}function Q(t,n){if(v){for(K(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function pt(t,n,e){v&&!e?Q(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function U(t){t.parentNode&&t.parentNode.removeChild(t)}function V(t){return document.createElement(t)}function j(t){return document.createTextNode(t)}function yt(){return j(" ")}function xt(){return j("")}function gt(t,n,e,i){return t.addEventListener(n,e,i),()=>t.removeEventListener(n,e,i)}function $t(t){return function(n){return n.preventDefault(),t.call(this,n)}}function X(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function bt(t,n){const e=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in n)n[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=n[i]:i==="__value"?t.value=t[i]=n[i]:e[i]&&e[i].set?t[i]=n[i]:X(t,i,n[i])}function Y(t){return Array.from(t.childNodes)}function Z(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function q(t,n,e,i,r=!1){Z(t);const l=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const u=t[s];if(n(u)){const c=e(u);return c===void 0?t.splice(s,1):t[s]=c,r||(t.claim_info.last_index=s),u}}for(let s=t.claim_info.last_index-1;s>=0;s--){const u=t[s];if(n(u)){const c=e(u);return c===void 0?t.splice(s,1):t[s]=c,r?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=s,u}}return i()})();return l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,l}function tt(t,n,e,i){return q(t,r=>r.nodeName===n,r=>{const l=[];for(let s=0;s<r.attributes.length;s++){const u=r.attributes[s];e[u.name]||l.push(u.name)}l.forEach(s=>r.removeAttribute(s))},()=>i(n))}function wt(t,n,e){return tt(t,n,e,V)}function nt(t,n){return q(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>j(n),!0)}function vt(t){return nt(t," ")}function Et(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function Nt(t,n){t.value=n??""}function At(t,n,e,i){e===null?t.style.removeProperty(n):t.style.setProperty(n,e,i?"important":"")}function St(t,n){const e=[];let i=0;for(const r of n.childNodes)if(r.nodeType===8){const l=r.textContent.trim();l===`HEAD_${t}_END`?(i-=1,e.push(r)):l===`HEAD_${t}_START`&&(i+=1,e.push(r))}else i>0&&e.push(r);return e}function jt(t,n){return new t(n)}let m;function h(t){m=t}function B(){if(!m)throw new Error("Function called outside component initialization");return m}function kt(t){B().$$.on_mount.push(t)}function Tt(t){B().$$.after_update.push(t)}const d=[],D=[],$=[],N=[],H=Promise.resolve();let A=!1;function L(){A||(A=!0,H.then(z))}function Ct(){return L(),H}function S(t){$.push(t)}function Dt(t){N.push(t)}const E=new Set;let g=0;function z(){const t=m;do{for(;g<d.length;){const n=d[g];g++,h(n),et(n.$$)}for(h(null),d.length=0,g=0;D.length;)D.pop()();for(let n=0;n<$.length;n+=1){const e=$[n];E.has(e)||(E.add(e),e())}$.length=0}while(d.length);for(;N.length;)N.pop()();A=!1,E.clear(),h(t)}function et(t){if(t.fragment!==null){t.update(),p(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(S)}}const b=new Set;let _;function Mt(){_={r:0,c:[],p:_}}function Ot(){_.r||p(_.c),_=_.p}function it(t,n){t&&t.i&&(b.delete(t),t.i(n))}function Pt(t,n,e,i){if(t&&t.o){if(b.has(t))return;b.add(t),_.c.push(()=>{b.delete(t),i&&(e&&t.d(1),i())}),t.o(n)}else i&&i()}function qt(t,n){const e={},i={},r={$$scope:1};let l=t.length;for(;l--;){const s=t[l],u=n[l];if(u){for(const c in s)c in u||(i[c]=1);for(const c in u)r[c]||(e[c]=u[c],r[c]=1);t[l]=u}else for(const c in s)r[c]=1}for(const s in i)s in e||(e[s]=void 0);return e}function Bt(t,n,e,i){const r=t.$$.props[n];r!==void 0&&(t.$$.bound[r]=e,i===void 0&&e(t.$$.ctx[r]))}function Ht(t){t&&t.c()}function Lt(t,n){t&&t.l(n)}function rt(t,n,e,i){const{fragment:r,after_update:l}=t.$$;r&&r.m(n,e),i||S(()=>{const s=t.$$.on_mount.map(M).filter(O);t.$$.on_destroy?t.$$.on_destroy.push(...s):p(s),t.$$.on_mount=[]}),l.forEach(S)}function ct(t,n){const e=t.$$;e.fragment!==null&&(p(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function st(t,n){t.$$.dirty[0]===-1&&(d.push(t),L(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function zt(t,n,e,i,r,l,s,u=[-1]){const c=m;h(t);const o=t.$$={fragment:null,ctx:[],props:l,update:w,not_equal:r,bound:C(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(c?c.$$.context:[])),callbacks:C(),dirty:u,skip_bound:!1,root:n.target||c.$$.root};s&&s(o.root);let a=!1;if(o.ctx=e?e(t,n.props||{},(f,y,...k)=>{const T=k.length?k[0]:y;return o.ctx&&r(o.ctx[f],o.ctx[f]=T)&&(!o.skip_bound&&o.bound[f]&&o.bound[f](T),a&&st(t,f)),y}):[],o.update(),a=!0,p(o.before_update),o.fragment=i?i(o.ctx):!1,n.target){if(n.hydrate){G();const f=Y(n.target);o.fragment&&o.fragment.l(f),f.forEach(U)}else o.fragment&&o.fragment.c();n.intro&&it(t.$$.fragment),rt(t,n.target,n.anchor,n.customElement),I(),z()}h(c)}class Ft{$destroy(){ct(this,1),this.$destroy=w}$on(n,e){if(!O(e))return w;const i=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return i.push(e),()=>{const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}$set(n){this.$$set&&!R(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}export{Ct as A,w as B,ot as C,Q as D,ft as E,St as F,_t as G,dt as H,at as I,lt as J,F as K,bt as L,qt as M,mt as N,ht as O,Nt as P,gt as Q,p as R,Ft as S,D as T,Bt as U,Dt as V,$t as W,yt as a,pt as b,vt as c,Ot as d,xt as e,it as f,Mt as g,U as h,zt as i,Tt as j,V as k,wt as l,Y as m,X as n,kt as o,At as p,j as q,nt as r,ut as s,Pt as t,Et as u,jt as v,Ht as w,Lt as x,rt as y,ct as z};
