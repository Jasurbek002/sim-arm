import{Q as L,a as O,C as Y,_ as G}from"./ClosePopup.f2cfaa46.js";import{Q as d,_ as I}from"./QSpace.1d63dd3d.js";import{_ as J}from"./Button.d4ea9131.js";import{Q as T,_ as K}from"./QPage.f0120491.js";import{Q,a as R,b as W,c as k,d as X,S as C}from"./Scroll.8130234d.js";import{Q as h}from"./QBtn.12f37358.js";import{Q as D}from"./QCard.8a724209.js";import{Q as Z}from"./QCardSection.849a9274.js";import{Q as ee}from"./QDialog.a7ea4abb.js";import{_ as j,a as A}from"./Text.8cd02702.js";import{T as M}from"./TariffService.c09027a3.js";import{d as F,r as $,o as l,c as _,i as c,w as a,g as u,a1 as ae,a as e,a7 as E,e as x,a3 as p,m as le,f as q,a2 as V}from"./index.aaf166e5.js";import"./QSkeleton.b3ae2b80.js";import"./use-router-link.4ee5d1c3.js";import"./QItemSection.81b36b1f.js";import"./focus-manager.33224ae2.js";import"./touch.d0418c3a.js";import"./rtl.6029fc7f.js";import"./scroll.f44c6c0c.js";import"./use-prevent-scroll.e5214844.js";import"./axios.eefc28b8.js";const te={class:"text-weight-medium text-secondary"},ie={class:"flex justify-evenly full-width items-center"},ne=u("span",{class:"q-ml-sm"},"Ushbu element o'chirilsinmi ?",-1),z=F({__name:"TariffCard",props:{tariff:Object,name:String,fresh:Function},setup(t){const{tariff:w,name:y,fresh:g}=t,o=$(!1);async function m(v){(await M.delete(v)).result&&(o.value=!1),g()}return(v,n)=>{var b;return l(),_(p,null,[((b=t.tariff)==null?void 0:b.company_name)==t.name?(l(),c(D,{key:0,class:"flex column justify-center col-3 content-start q-pa-md q-ma-md"},{default:a(()=>{var s,r,i,f,B,S,U,P,H,N;return[u("p",te,ae((s=t.tariff)==null?void 0:s.title),1),e(j,{icon:"language",value:(r=t.tariff)==null?void 0:r.mega_byte},null,8,["value"]),e(j,{icon:"call",value:(i=t.tariff)==null?void 0:i.minutes},null,8,["value"]),e(j,{icon:"sms",value:(f=t.tariff)==null?void 0:f.sms},null,8,["value"]),e(j,{icon:"dark_mode",value:(B=t.tariff)==null?void 0:B.night_internet},null,8,["value"]),e(A,{name:"Davomiyligi",value:((S=t.tariff)==null?void 0:S.deadline)==0?"1 kun":((U=t.tariff)==null?void 0:U.deadline)==1?"7 kun":((P=t.tariff)==null?void 0:P.deadline)==2?"30 kun":"o kun"},null,8,["value"]),e(A,{name:"Narxi",value:((H=t.tariff)==null?void 0:H.price)+" uzs"},null,8,["value"]),u("div",ie,[e(h,{to:`/tariffs/view/${(N=t.tariff)==null?void 0:N.tariff_id}`,round:"",outline:"",color:"primary",icon:"visibility"},null,8,["to"]),e(h,{round:"",outline:"",color:"warning",icon:"edit"}),e(h,{round:"",outline:"",color:"negative",onClick:n[0]||(n[0]=ve=>o.value=!0),icon:"delete"})])]}),_:1})):E("",!0),e(ee,{modelValue:o.value,"onUpdate:modelValue":n[2]||(n[2]=s=>o.value=s),persistent:""},{default:a(()=>[e(D,null,{default:a(()=>[e(Z,{class:"row items-center"},{default:a(()=>[e(L,{icon:"warning",color:"primary","text-color":"white"}),ne]),_:1}),e(O,{align:"right"},{default:a(()=>[x(e(h,{flat:"",label:"Yo'q",color:"primary"},null,512),[[Y]]),e(h,{flat:"",label:"Ha o'chirilsin",onClick:n[1]||(n[1]=s=>{var r;return m((r=t.tariff)==null?void 0:r.tariff_id)}),color:"negative"})]),_:1})]),_:1})]),_:1},8,["modelValue"])],64)}}}),oe={class:"flex full-width justify-between"},se={key:0,class:"row flex justify-evenly wrap"},re={key:1,class:"row flex justify-evenly wrap"},fe={class:"flex full-width justify-between"},ue={class:"row flex justify-evenly wrap"},ce={class:"flex full-width justify-between"},me={class:"row flex justify-evenly wrap"},de={class:"flex full-width justify-between"},_e={class:"row flex justify-evenly wrap"},Ne=F({__name:"Page",setup(t){const w=$("ucell"),y=$([]),g=$(!1);le(async()=>{await o()});async function o(){try{g.value=!0;const m=await M.getAllTariff();y.value=m||[],console.log(m)}catch(m){console.error("Tariflarni olishda xato:",m)}finally{g.value=!1}}return(m,v)=>{const n=K,b=J,s=I,r=G;return l(),_(p,null,[e(R,{modelValue:w.value,"onUpdate:modelValue":v[0]||(v[0]=i=>w.value=i),class:"text-white bg-secondary","active-color":"white","indicator-color":"warning",align:"justify"},{default:a(()=>[e(Q,{name:"ucell",label:"Ucell"}),e(Q,{name:"beeline",label:"Beeline"}),e(Q,{name:"uztelecom",label:"Uztelecom"}),e(Q,{name:"mobiuz",label:"Mobiuz"})]),_:1},8,["modelValue"]),e(W),e(X,{modelValue:w.value,"onUpdate:modelValue":v[1]||(v[1]=i=>w.value=i),animated:""},{default:a(()=>[e(k,{name:"ucell",class:"q-pa-none"},{default:a(()=>[x((l(),c(T,{class:"q-mx-lg"},{default:a(()=>[e(s,{class:"q-gutter-x-sm"},{default:a(()=>[u("div",oe,[e(n,{breadcrumbs:[{label:"Home"},{label:"Tariffs"},{label:"ucell"}]}),e(b,{to:"tariffs/create",outline:"",icon:"add"},{default:a(()=>[q("Tariff yaratish")]),_:1})]),e(d)]),_:1}),e(d),g.value==!1?(l(),_("div",se,[(l(!0),_(p,null,V(y.value,(i,f)=>(l(),c(z,{key:f,tariff:i,name:"Ucell",fresh:o},null,8,["tariff"]))),128))])):(l(),_("div",re,[e(r),e(r),e(r),e(r)]))]),_:1})),[[C,"fnToCall"]])]),_:1}),e(k,{name:"beeline"},{default:a(()=>[x((l(),c(T,{class:"q-mx-lg"},{default:a(()=>[e(s,{class:"q-gutter-x-sm"},{default:a(()=>[u("div",fe,[e(n,{breadcrumbs:[{label:"Home"},{label:"Tariffs"},{label:"beeline"}]}),e(b,{to:"tariffs/create",outline:"",icon:"add"},{default:a(()=>[q("Tariff yaratish")]),_:1})]),e(d)]),_:1}),e(d),u("div",ue,[(g.value=!1)?(l(!0),_(p,{key:0},V(y.value,(i,f)=>(l(),c(z,{key:f,tariff:i,name:"Beleene",fresh:o},null,8,["tariff"]))),128)):E("",!0)])]),_:1})),[[C,"fnToCall"]])]),_:1}),e(k,{name:"uztelecom"},{default:a(()=>[x((l(),c(T,{class:"q-mx-lg"},{default:a(()=>[e(s,{class:"q-gutter-x-sm"},{default:a(()=>[u("div",ce,[e(n,{breadcrumbs:[{label:"Home"},{label:"Tariffs"},{label:"uztelecom"}]}),e(b,{to:"tariffs/create",outline:"",icon:"add"},{default:a(()=>[q("Tariff yaratish")]),_:1})]),e(d)]),_:1}),e(d),u("div",me,[(l(!0),_(p,null,V(y.value,(i,f)=>(l(),c(z,{key:f,tariff:i,name:"Uztelecom",fresh:o},null,8,["tariff"]))),128))])]),_:1})),[[C,"fnToCall"]])]),_:1}),e(k,{name:"mobiuz"},{default:a(()=>[x((l(),c(T,{class:"q-mx-lg"},{default:a(()=>[e(s,{class:"q-gutter-x-sm"},{default:a(()=>[u("div",de,[e(n,{breadcrumbs:[{label:"Home"},{label:"Tariffs"},{label:"mobiuz"}]}),e(b,{to:"tariffs/create",outline:"",icon:"add"},{default:a(()=>[q("Tariff yaratish")]),_:1})]),e(d)]),_:1}),e(d),u("div",_e,[(l(!0),_(p,null,V(y.value,(i,f)=>(l(),c(z,{key:f,tariff:i,name:"Mobiuz",fresh:o},null,8,["tariff"]))),128))])]),_:1})),[[C,"fnToCall"]])]),_:1})]),_:1},8,["modelValue"])],64)}}});export{Ne as default};
