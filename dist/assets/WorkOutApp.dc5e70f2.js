import{_ as l,o as i,c as d,a as e,w as m,b as w,r as a,d as c,e as M,p as f,f as g,g as x}from"./index.4e45e938.js";const C={props:{active:Boolean},methods:{closeMenu(){this.$emit("closeMenu")},redirectTo(n){console.log(n),this.$emit("closeMenu"),this.$router.push(n)}}},$={class:"menu"};function y(n,t,r,p,_,o){return r.active?(i(),d("div",{key:0,class:"menu-wrap",onClick:t[3]||(t[3]=m((...s)=>o.closeMenu&&o.closeMenu(...s),["self"]))},[e("div",$,[e("div",{class:"menu-item",onClick:t[0]||(t[0]=s=>o.redirectTo("/log"))},"Log"),e("div",{class:"menu-item",onClick:t[1]||(t[1]=s=>o.redirectTo("/stopwatch"))},"StopWatch"),e("div",{class:"menu-item",onClick:t[2]||(t[2]=s=>o.redirectTo("/weight"))},"Weight")])])):w("",!0)}const k=l(C,[["render",y],["__scopeId","data-v-f99b1861"]]);const H={data(){return{displayMenu:!1}},components:{MenuNavigation:k},methods:{showMenu(){this.displayMenu?this.displayMenu=!1:this.displayMenu=!0},closeMenu(){this.displayMenu=!1}}},h=n=>(f("data-v-7be99037"),n=n(),g(),n),b={class:"header"},N={class:"menu"},V=h(()=>e("g",null,[e("path",{d:"M480,224H32c-17.673,0-32,14.327-32,32s14.327,32,32,32h448c17.673,0,32-14.327,32-32S497.673,224,480,224z"}),e("path",{d:"M32,138.667h448c17.673,0,32-14.327,32-32s-14.327-32-32-32H32c-17.673,0-32,14.327-32,32S14.327,138.667,32,138.667z"}),e("path",{d:"M480,373.333H32c-17.673,0-32,14.327-32,32s14.327,32,32,32h448c17.673,0,32-14.327,32-32S497.673,373.333,480,373.333z"})],-1)),S=[V],B={class:"nav-bar"},I={class:"title"},T=x("EdinCode"),A=h(()=>e("div",{class:"home"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",id:"Outline",viewBox:"0 0 24 24",width:"20",height:"20"},[e("path",{d:"M23.121,9.069,15.536,1.483a5.008,5.008,0,0,0-7.072,0L.879,9.069A2.978,2.978,0,0,0,0,11.19v9.817a3,3,0,0,0,3,3H21a3,3,0,0,0,3-3V11.19A2.978,2.978,0,0,0,23.121,9.069ZM15,22.007H9V18.073a3,3,0,0,1,6,0Zm7-1a1,1,0,0,1-1,1H17V18.073a5,5,0,0,0-10,0v3.934H3a1,1,0,0,1-1-1V11.19a1.008,1.008,0,0,1,.293-.707L9.878,2.9a3.008,3.008,0,0,1,4.244,0l7.585,7.586A1.008,1.008,0,0,1,22,11.19Z"})])],-1));function F(n,t,r,p,_,o){const s=a("MenuNavigation"),u=a("router-link");return i(),d("div",null,[e("div",b,[e("div",N,[(i(),d("svg",{onClick:t[0]||(t[0]=(...v)=>o.showMenu&&o.showMenu(...v)),xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",version:"1.1",id:"Capa_1",x:"0px",y:"0px",viewBox:"0 0 512 512",style:{"enable-background":"new 0 0 512 512"},"xml:space":"preserve",width:"20",height:"20"},S)),e("div",B,[c(s,{active:_.displayMenu,onCloseMenu:o.closeMenu},null,8,["active","onCloseMenu"])])]),e("div",I,[c(u,{to:"/"},{default:M(()=>[T]),_:1})]),A])])}const z=l(H,[["render",F],["__scopeId","data-v-7be99037"]]);const E={},L={class:"footer"};function W(n,t,r,p,_,o){return i(),d("div",L," Copyright 2022 Edin all rights reserved. ")}const Z=l(E,[["render",W],["__scopeId","data-v-2799f662"]]),O={components:{HeaderComponent:z,FooterComponent:Z}};function j(n,t,r,p,_,o){const s=a("HeaderComponent"),u=a("router-view"),v=a("FooterComponent");return i(),d("div",null,[c(s),c(u),c(v)])}const D=l(O,[["render",j]]);export{D as default};
