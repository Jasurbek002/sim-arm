import{r as z,M as y,m as f,E as h,U as w,p as m,h as O,n as R,F as p}from"./index.aaf166e5.js";import{c as C}from"./use-router-link.4ee5d1c3.js";function E(){const t=z(!y.value);return t.value===!1&&f(()=>{t.value=!0}),t}const g=typeof ResizeObserver!="undefined",b=g===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var x=C({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(t,{emit:e}){let r=null,n,u={width:-1,height:-1};function s(i){i===!0||t.debounce===0||t.debounce==="0"?l():r===null&&(r=setTimeout(l,t.debounce))}function l(){if(r!==null&&(clearTimeout(r),r=null),n){const{offsetWidth:i,offsetHeight:o}=n;(i!==u.width||o!==u.height)&&(u={width:i,height:o},e("resize",u))}}const{proxy:d}=R();if(g===!0){let i;const o=a=>{n=d.$el.parentNode,n?(i=new ResizeObserver(s),i.observe(n),l()):a!==!0&&m(()=>{o(!0)})};return f(()=>{o()}),h(()=>{r!==null&&clearTimeout(r),i!==void 0&&(i.disconnect!==void 0?i.disconnect():n&&i.unobserve(n))}),w}else{let a=function(){r!==null&&(clearTimeout(r),r=null),o!==void 0&&(o.removeEventListener!==void 0&&o.removeEventListener("resize",s,p.passive),o=void 0)},v=function(){a(),n&&n.contentDocument&&(o=n.contentDocument.defaultView,o.addEventListener("resize",s,p.passive),l())};const i=E();let o;return f(()=>{m(()=>{n=d.$el,n&&v()})}),h(a),d.trigger=s,()=>{if(i.value===!0)return O("object",{style:b.style,tabindex:-1,type:"text/html",data:b.url,"aria-hidden":"true",onLoad:v})}}}});const c={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},L=Object.keys(c);c.all=!0;function j(t){const e={};for(const r of L)t[r]===!0&&(e[r]=!0);return Object.keys(e).length===0?c:(e.horizontal===!0?e.left=e.right=!0:e.left===!0&&e.right===!0&&(e.horizontal=!0),e.vertical===!0?e.up=e.down=!0:e.up===!0&&e.down===!0&&(e.vertical=!0),e.horizontal===!0&&e.vertical===!0&&(e.all=!0),e)}function D(t,e){return e.event===void 0&&t.target!==void 0&&t.target.draggable!==!0&&typeof e.handler=="function"&&t.target.nodeName.toUpperCase()!=="INPUT"&&(t.qClonedBy===void 0||t.qClonedBy.indexOf(e.uid)===-1)}export{x as Q,j as g,D as s};
