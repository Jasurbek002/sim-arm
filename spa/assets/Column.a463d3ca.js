import{c as T,u as D,a as F,h as z}from"./use-router-link.4ee5d1c3.js";import{x as Q,h as m,n as M,d as x,o as l,c as n,g as i,a8 as $,j as V,i as k,w as j,a3 as p,a2 as _,a9 as v,a1 as E,aa as H}from"./index.aaf166e5.js";const I=["horizontal","vertical","cell","none"];var L=T({name:"QMarkupTable",props:{...D,dense:Boolean,flat:Boolean,bordered:Boolean,square:Boolean,wrapCells:Boolean,separator:{type:String,default:"horizontal",validator:a=>I.includes(a)}},setup(a,{slots:c}){const s=M(),h=F(a,s.proxy.$q),y=Q(()=>`q-markup-table q-table__container q-table__card q-table--${a.separator}-separator`+(h.value===!0?" q-table--dark q-table__card--dark q-dark":"")+(a.dense===!0?" q-table--dense":"")+(a.flat===!0?" q-table--flat":"")+(a.bordered===!0?" q-table--bordered":"")+(a.square===!0?" q-table--square":"")+(a.wrapCells===!1?" q-table--no-wrap":""));return()=>m("div",{class:y.value},[m("table",{class:"q-table"},z(c.default))])}});const N=["colspan"],P=x({__name:"Colspan",props:{class:null,colspan:null},setup(a){const c=a;return(s,h)=>(l(),n("tr",null,[i("td",{colspan:c.colspan||99},[i("div",{class:$(c.class)},[V(s.$slots,"default")],2)],8,N)]))}});const A=["onClick"],K=x({__name:"BaseTable",props:{models:null,rowclass:{type:Function},fixedHead:{type:Boolean},fixedFoot:{type:Boolean}},emits:["click-row"],setup(a,{emit:c}){const s=a,h="Thead",y="Tfoot";function B(f){const e=H().default;return e?e().filter(({type:{name:t}})=>t==f):[]}function C(){return B("Column").map(r=>{const{field:e,header:t}=r.props||{},{children:o}=r||{},u=o&&o[e];if(!!u)return{field:e,header:t,fn:u,attrs:r.props}}).filter(r=>r)}function g(f){const r=B(f),e=[],{data:t,total:o}=s.models;for(const u of r){const{children:d,props:w}=u||{},S=d&&(d.default||d.thead||d.tfoot);if(!S)continue;const b=S({models:t,total:o});if(!!b.length)if(b[0].type!="td"){const q=m(P,{...w},{default:()=>b});e.push(q)}else{const q=m("tr",{...w},{default:()=>b});e.push(q)}}return e}return(f,r)=>(l(),k(L,{separator:"cell",flat:"",bordered:"",square:"",fixed:""},{default:j(()=>[i("thead",null,[(l(!0),n(p,null,_(g(h),(e,t)=>(l(),k(v(e),{key:t}))),128)),i("tr",null,[(l(!0),n(p,null,_(C(),({header:e},t)=>(l(),n("td",{key:t,class:"text-center text-secondary text-weight-regular th"},E(e),1))),128))])]),i("tbody",null,[(l(!0),n(p,null,_(s.models,(e,t)=>(l(),n("tr",{key:t,class:$((s==null?void 0:s.rowclass)&&s.rowclass({model:e,index:t})),onClick:o=>c("click-row",{model:e,index:t})},[(l(!0),n(p,null,_(C(),({fn:o,attrs:u},d)=>(l(),k(v(m("td",{...u},o({model:e,index:t}))),{class:"text-center",key:d}))),128))],10,A))),128))]),i("tfoot",null,[(l(!0),n(p,null,_(g(y),(e,t)=>(l(),k(v(e),{key:t}))),128))])]),_:1}))}}),O={props:{header:{type:String,required:!0},field:{type:String,required:!0},rowclass:{type:String}},name:"Column",render:()=>null};export{L as Q,O as _,K as a};
