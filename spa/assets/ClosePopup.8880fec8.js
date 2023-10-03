import{Q as s}from"./QSkeleton.f6630b0d.js";import{Q as m,a as d}from"./QItemSection.5af580f0.js";import{g as u,h as v,i as h}from"./QDialog.0ea6a21d.js";import{c as p,g,j as y,h as Q,e as q,i as x,Q as S,q as C,d as z}from"./use-router-link.e679d0f1.js";import{x as i,h as l,_ as k,o as A,c as B,a,w as n,z as P}from"./index.5221c97c.js";import{Q as b}from"./QCard.e640dc09.js";var w=p({name:"QCardActions",props:{...g,vertical:Boolean},setup(e,{slots:t}){const o=y(e),r=i(()=>`q-card__actions ${o.value} q-card__actions--${e.vertical===!0?"vert column":"horiz row"}`);return()=>l("div",{class:r.value},Q(t.default))}});const E={},I={class:"q-pa-md col-3"};function L(e,t){return A(),B("div",I,[a(b,{animated:""},{default:n(()=>[a(m,null,{default:n(()=>[a(d,{avatar:""},{default:n(()=>[a(s,{type:"QAvatar"})]),_:1}),a(d,null,{default:n(()=>[a(u,null,{default:n(()=>[a(s,{type:"text"})]),_:1}),a(u,{caption:""},{default:n(()=>[a(s,{type:"text"})]),_:1})]),_:1})]),_:1}),a(s,{height:"200px",square:""}),a(w,{align:"right",class:"q-gutter-md"},{default:n(()=>[a(s,{type:"QBtn"}),a(s,{type:"QBtn"})]),_:1})]),_:1})])}var T=k(E,[["render",L]]),U=p({name:"QAvatar",props:{...q,fontSize:String,color:String,textColor:String,icon:String,square:Boolean,rounded:Boolean},setup(e,{slots:t}){const o=x(e),r=i(()=>"q-avatar"+(e.color?` bg-${e.color}`:"")+(e.textColor?` text-${e.textColor} q-chip--colored`:"")+(e.square===!0?" q-avatar--square":e.rounded===!0?" rounded-borders":"")),c=i(()=>e.fontSize?{fontSize:e.fontSize}:null);return()=>{const f=e.icon!==void 0?[l(S,{name:e.icon})]:void 0;return l("div",{class:r.value,style:o.value},[l("div",{class:"q-avatar__content row flex-center overflow-hidden",style:c.value},C(t.default,f))])}}});function _(e){if(e===!1)return 0;if(e===!0||e===void 0)return 1;const t=parseInt(e,10);return isNaN(t)?0:t}var V=z({name:"close-popup",beforeMount(e,{value:t}){const o={depth:_(t),handler(r){o.depth!==0&&setTimeout(()=>{const c=v(e);c!==void 0&&h(c,r,o.depth)})},handlerKey(r){P(r,13)===!0&&o.handler(r)}};e.__qclosepopup=o,e.addEventListener("click",o.handler),e.addEventListener("keyup",o.handlerKey)},updated(e,{value:t,oldValue:o}){t!==o&&(e.__qclosepopup.depth=_(t))},beforeUnmount(e){const t=e.__qclosepopup;e.removeEventListener("click",t.handler),e.removeEventListener("keyup",t.handlerKey),delete e.__qclosepopup}});export{V as C,U as Q,T as _,w as a};
