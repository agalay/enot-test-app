import{d as S,j as N,k as d,l as C,o,c as s,u as a,a as e,F,f as b,g as I,h as x,m as B,t as u,n as L,i as w}from"./index-11761076.js";import{u as r}from"./useGetID-bd780aaa.js";const J={key:0},O={key:1},T={key:2},U=e("thead",null,[e("tr",null,[e("th",null,"Name"),e("th",null,"Height"),e("th",null,"Mass"),e("th",null,"Hair color"),e("th")])],-1),V=["onClick"],A=["onClick"],$=S({__name:"TableUsers",props:{onlyFavorites:{type:Boolean}},setup(h){const m=h,n=N(new Set(JSON.parse(localStorage.getItem("favorites"))||[])),c=L(),i=d(()=>c.state.users),_=d(()=>c.state.isLoading);C(()=>{i.value||c.dispatch("getAllUsers")});const p=l=>{n.value.add(l),localStorage.setItem("favorites",JSON.stringify([...n.value]))},f=l=>{n.value.delete(l),localStorage.setItem("favorites",JSON.stringify([...n.value]))},g=d(()=>m.onlyFavorites?i.value.filter(l=>n.value.has(r(l.url))):i.value);return(l,D)=>{var v;const k=w("router-link");return o(),s("div",null,[a(_)?(o(),s("div",J,"Loading...")):(v=a(i))!=null&&v.length?(o(),s("table",T,[U,e("tbody",null,[(o(!0),s(F,null,b(a(g),t=>(o(),s("tr",{key:t.url},[e("td",null,[I(k,{to:{name:"peoples.show",params:{id:a(r)(t.url)}}},{default:x(()=>[B(u(t.name),1)]),_:2},1032,["to"])]),e("td",null,u(t.height),1),e("td",null,u(t.mass),1),e("td",null,u(t.hair_color),1),e("td",null,[n.value.has(a(r)(t.url))?(o(),s("button",{key:0,onClick:y=>f(a(r)(t.url)),class:"red"}," Remove favorite ",8,V)):(o(),s("button",{key:1,onClick:y=>p(a(r)(t.url))}," Add favorite ",8,A))])]))),128))])])):(o(),s("p",O,"Nothing found!"))])}}});export{$ as _};
