import{c as r,u as d,a as u,h as c}from"./use-router-link.4ee5d1c3.js";import{x as n,h as g,n as k}from"./index.aaf166e5.js";const m=["text","rect","circle","QBtn","QBadge","QChip","QToolbar","QCheckbox","QRadio","QToggle","QSlider","QRange","QInput","QAvatar"],h=["wave","pulse","pulse-x","pulse-y","fade","blink","none"];var q=r({name:"QSkeleton",props:{...d,tag:{type:String,default:"div"},type:{type:String,validator:e=>m.includes(e),default:"rect"},animation:{type:String,validator:e=>h.includes(e),default:"wave"},animationSpeed:{type:[String,Number],default:1500},square:Boolean,bordered:Boolean,size:String,width:String,height:String},setup(e,{slots:a}){const i=k(),s=u(e,i.proxy.$q),o=n(()=>{const t=e.size!==void 0?[e.size,e.size]:[e.width,e.height];return{"--q-skeleton-speed":`${e.animationSpeed}ms`,width:t[0],height:t[1]}}),l=n(()=>`q-skeleton q-skeleton--${s.value===!0?"dark":"light"} q-skeleton--type-${e.type}`+(e.animation!=="none"?` q-skeleton--anim q-skeleton--anim-${e.animation}`:"")+(e.square===!0?" q-skeleton--square":"")+(e.bordered===!0?" q-skeleton--bordered":""));return()=>g(e.tag,{class:l.value,style:o.value},c(a.default))}});export{q as Q};
