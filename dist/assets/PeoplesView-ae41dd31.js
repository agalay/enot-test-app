import{d as _,r as p,w as m,o as s,c as o,a as r,b as f,v as h,e as c,F as d,f as y,g as u,h as g,t as v,u as w,i as k,_ as x}from"./index-11761076.js";import{_ as L}from"./TableUsers.vue_vue_type_script_setup_true_lang-b341215c.js";import{u as V}from"./useGetID-bd780aaa.js";const b={class:"search-box"},C={key:0,class:"search-box__section"},N={key:0},P={key:1},B={key:0},D={key:1},I=_({__name:"PeoplesView",setup(S){const e=p({isLoading:!1,field:null,items:null,fetch:((t,a)=>{let i;return function(){const l=()=>{t.apply(this,arguments)};clearTimeout(i),i=setTimeout(l,a)}})(async()=>{try{e.items=null,e.isLoading=!0;const t=await fetch(`https://swapi.dev/api/people/?search=${e.field}`),{results:a}=await t.json();e.items=a}catch(t){console.error("API error",t)}finally{e.isLoading=!1}},300)});return m(()=>e.field,t=>{t?e.fetch():e.items=null}),(t,a)=>{var l;const i=k("router-link");return s(),o(d,null,[r("div",b,[f(r("input",{type:"text","onUpdate:modelValue":a[0]||(a[0]=n=>e.field=n),placeholder:"Search..."},null,512),[[h,e.field]]),e.isLoading||e.items?(s(),o("div",C,[e.isLoading?(s(),o("p",N,"Loading...")):c("",!0),e.items?(s(),o("div",P,[(l=e.items)!=null&&l.length?(s(),o("ul",B,[(s(!0),o(d,null,y(e.items,n=>(s(),o("li",{key:n.url},[u(i,{to:{name:"peoples.show",params:{id:w(V)(n.url)}}},{default:g(()=>[r("h5",null,v(n.name),1)]),_:2},1032,["to"])]))),128))])):(s(),o("p",D," Nothing found! "))])):c("",!0)])):c("",!0)]),u(L)],64)}}});const A=x(I,[["__scopeId","data-v-8eae3ced"]]);export{A as default};
