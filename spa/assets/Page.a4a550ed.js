import{_ as $,a as b}from"./Column.a463d3ca.js";import{_ as v,a as B}from"./Pagination.59b2e9a1.js";import{Q,_ as w}from"./QSpace.1d63dd3d.js";import{_ as q}from"./Button.d4ea9131.js";import{Q as T,_ as j}from"./QPage.f0120491.js";import{Q as d}from"./QBtn.12f37358.js";import{C as N}from"./categoryService.4ba3a901.js";import{d as P,r as k,u as S,a0 as V,o as O,i as R,w as t,a as e,g as u,f as s,a1 as i}from"./index.aaf166e5.js";import"./use-router-link.4ee5d1c3.js";import"./QInput.9f5ef848.js";import"./focus-manager.33224ae2.js";import"./format.2a3572e1.js";import"./axios.eefc28b8.js";const A={class:"flex full-width justify-between"},D={class:"row flex justify-evenly wrap"},Z=P({__name:"Page",setup(H){const r=k([]);N.getAllCategory().then(a=>{r.value=a}),S();const l=V();function c(){return Object.keys(l.query).map(a=>`${a}=${l.query[a]}`).join("&")}async function _(a=""){}return _(c()),(a,m)=>{const f=j,p=q,g=w,n=$,y=v,h=B,x=b;return O(),R(T,{class:"q-mx-lg"},{default:t(()=>[e(g,{class:"q-gutter-x-sm"},{default:t(()=>[u("div",A,[e(f,{breadcrumbs:[{label:"Home"},{label:"Categories"}]}),e(p,{to:"packages/create",outline:"",icon:"add"},{default:t(()=>[s("Categria yaratish")]),_:1})]),e(Q)]),_:1}),u("div",D,[e(x,{class:"col-12",models:r.value},{default:t(()=>[e(n,{header:"\u2116",field:"id"},{id:t(({index:o,model:C})=>[s(i(o+1),1)]),_:1}),e(n,{header:"Name",field:"name"},{name:t(({model:{name:o}})=>[s(i(o),1)]),_:1}),e(n,{header:"Company",field:"category_id"},{category_id:t(({model:{category_id:o}})=>[s(i(o),1)]),_:1}),e(n,{header:"Taxrirlash",field:"id"},{id:t(({model:{category_id:o}})=>[e(d,{color:"positive","fab-mini":"",outline:"",icon:"edit",to:`users/edit/${o}`},null,8,["to"])]),_:1}),e(n,{header:"O'chirish",field:"id"},{id:t(({model:{category_id:o}})=>[e(d,{color:"negative","fab-mini":"",outline:"",icon:"delete",to:`users/edit/${o}`},null,8,["to"])]),_:1}),e(h,{class:"flex flex-center"},{tfoot:t(({total:o})=>[e(y,{total:o,onChangePage:m[0]||(m[0]=C=>_(c()))},null,8,["total"])]),_:1})]),_:1},8,["models"])])]),_:1})}}});export{Z as default};
