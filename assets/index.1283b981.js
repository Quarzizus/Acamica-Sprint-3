var H=Object.defineProperty,_=Object.defineProperties;var I=Object.getOwnPropertyDescriptors;var m=Object.getOwnPropertySymbols;var j=Object.prototype.hasOwnProperty,G=Object.prototype.propertyIsEnumerable;var x=(e,t,r)=>t in e?H(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,b=(e,t)=>{for(var r in t||(t={}))j.call(t,r)&&x(e,r,t[r]);if(m)for(var r of m(t))G.call(t,r)&&x(e,r,t[r]);return e},y=(e,t)=>_(e,I(t));import{s as l,j as w,C as M,r as d,W as z,F as L,R as E,a as R}from"./vendor.b84986e1.js";const A=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function r(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerpolicy&&(s.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?s.credentials="include":n.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(n){if(n.ep)return;n.ep=!0;const s=r(n);fetch(n.href,s)}};A();const O=l.header`
  background-color: ${({theme:e})=>e.background};
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 100px;
  @media only screen and (max-width: 550px) {
    padding: 0 10%;
  }
`,q=l.button`
  border: 2px solid ${({theme:e})=>e.border};
  color: ${({theme:e})=>e.color};
  border-radius: 25px;
  background-color: ${({theme:e})=>e.background};
  text-transform: uppercase;
  height: 40px;
  width: 150px;
  padding: 0 10px;
  cursor: pointer;
`,o=w.exports.jsx,a=w.exports.jsxs;function B(e){return a("svg",y(b({width:63,height:60,xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink"},e),{children:[o("defs",{children:o("path",{id:"prefix__a",d:"M.495.526h57.777V24.17H.495z"})}),a("g",{fill:"none",fillRule:"evenodd",children:[o("path",{fill:"#5ED7C6",d:"M0 0v59.108h59.109V46.442h-4.222v8.444H4.222V4.222H42.22v12.666h12.667v8.445h4.222V12.666L46.442 0z"}),a("g",{transform:"translate(9 20)",children:[o("mask",{id:"prefix__b",fill:"#fff",children:o("use",{xlinkHref:"#prefix__a"})}),o("text",{mask:"url(#prefix__b)",fontFamily:"Roboto-Black, Roboto",fontSize:18,fontWeight:700,fill:e.theme,children:o("tspan",{x:3,y:21,children:"GIFOS"})})]})]})]}))}const N=({theme:e,handlerTheme:t})=>a(O,{children:[o(B,{theme:e?"#ffffff":"#4a1ee3"}),o(q,{onClick:t,children:e?"Modo Nocturno":"Modo Light"})]}),P=l.section`
  height: 500px;
  background-color: ${({theme:e})=>e.background};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;
  h2,
  p {
    color: ${({theme:e})=>e.color};
    text-align: center;
  }

  h2 {
    font-weight: 500;
    font-size: 36px;
    span {
      font-weight: bold;
      text-transform: uppercase;
    }
  }
  p {
    font-size: 1.4em;
  }
`,F=l.section`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media only screen and (max-width: 550px) {
    .Hero_img {
      width: 120%;
    }
  }
`;var V="/assets/HeroImage.894e7ace.svg";const W=({children:e})=>a(P,{children:[a("h2",{children:["\xA1Inspirate y busca los mejores ",o("span",{children:"gifts"}),"!"]}),a(F,{children:[o("img",{src:V,className:"Hero_img"}),e]}),o("p",{children:"Resultados de la busqueda"})]}),D=l.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  @media only screen and (max-width: 550px) {
    width: 120%;
  }
`,K=l.section`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  border-radius: 25px;
  border: 1px solid ${({theme:e})=>e.border};
`,T=l.input`
  width: 85%;
  border: none;
  height: 50%;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;
  margin: 0 50px;
  color: ${({theme:e})=>e.color};
  background-color: ${({theme:e})=>e.background};
  &:focus {
    outline: none;
  }
`,U=l.button`
  width: 15%;
  border: none;
  border-radius: 0 21px 21px 0;
  height: 100%;
  background-color: #4a1ee3;
  cursor: pointer;
  @media only screen and (max-width: 550px) {
    width: 30%;
  }
`,Y=l.ul`
  width: 100%;
  ${({border:e})=>e&&M`
      border: 1px solid ${({theme:t})=>t.border};
    `};
  border-radius: 20px;
  overflow: hidden;
  list-style: none;
  position: absolute;
  top: 55px;
  z-index: 1;
  li {
    display: flex;
    align-items: center;
    padding: 0 0 0 15px;
    height: 50px;
    border-bottom: 1px solid gray;
    cursor: pointer;
    color: ${({theme:e})=>e.color};
    background-color: ${({theme:e})=>e.background};
  }
  li:hover {
    background-color: rgba(142, 144, 143, 1);
  }
`,p=d.exports.createContext(null),Q=({children:e})=>{const[t,r]=d.exports.useState({endpoint:"trending",limit:15,q:""}),n={state:t,handlerSearch:({endpoint:s,q:c})=>{r({endpoint:s,q:c})}};return o(p.Provider,{value:n,children:e})},X=({suggestions:e,handlerSearch:t,setIsSearch:r,isSearch:i})=>i?o(Y,{border:e.length,children:e.map((n,s)=>o("li",{onClick:c=>{t({q:c.target.innerText,endpoint:"search"}),r(!i)},children:n.name},s))}):null;var Z="/assets/icon-search-white.71779d43.svg";const k=({endpoint:e="trending",limit:t=15,q:r="",dependencies:i=[r]}={})=>{const[n,s]=d.exports.useState([]),[c,u]=d.exports.useState(null),[h,f]=d.exports.useState(!1),v=`https://api.giphy.com/v1/gifs/${e}?api_key=zj3i2QPo9wzpm8gBZdBtGzbH5XQ2YSHW&limit=${t}&q=${r}`,$=async()=>{try{f(!0);const C=await(await fetch(v)).json();s(C.data),f(!1)}catch(g){u(g.message),console.log(c)}};return d.exports.useEffect(()=>{$()},i),{gifts:n,loading:h,error:c}},J=()=>{const{handlerSearch:e}=d.exports.useContext(p),[t,r]=d.exports.useState(""),[i,n]=d.exports.useState(!1),{gifts:s}=k({endpoint:"search/tags",limit:5,q:t,dependencies:[t]});return a(D,{children:[a(K,{children:[o(T,{type:"search",placeholder:"Busca gifts",onChange:h=>{r(h.target.value),n(!0)},onKeyPress:h=>{h.key==="Enter"&&(e({endpoint:"search",q:t}),h.target.value="",n(!1))}}),o(U,{onClick:()=>{e({endpoint:"search",q:t})},children:o("img",{src:Z})})]}),o(X,{suggestions:s,handlerSearch:e,isSearch:i,setIsSearch:n})]})},ee=l.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  background-color: ${({theme:e})=>e.backgroundGrid};
  padding: 30px 15px;
  gap: 15px;
  img {
    width: 100%;
    height: 240px;
    object-fit: cover;
    border: 1px solid ${({theme:e})=>e.border};
  }
  h2 {
    grid-column: 1 /-1;
    text-align: center;
    color: ${({theme:e})=>e.color};
  }
`,te=({src:e,alt:t="gift",href:r="/"})=>o("a",{href:r,target:"_blank",children:o("img",{src:e,alt:t})});const oe=()=>o("svg",{className:"Spinner",children:o("circle",{cx:"70",cy:"70",r:"70"})}),re=()=>{const{state:e}=d.exports.useContext(p),{gifts:t,loading:r,error:i}=k(e);return a(ee,{children:[i&&o("h2",{children:"Houston, we have a problem"}),r&&o(oe,{}),!i&&!r&&!t.length&&o("h2",{children:"Oh raios :c, parece que no hay gifts con este termino. Intenta con otro :3"}),!i&&!r&&t.length&&t.map(n=>o(te,{src:n.images.downsized_medium.url,href:n.url,alt:n.title},n.id))]})},ne={background:"#ffffff",backgroundGrid:"#e7e7e7",border:"#4a1ee3",color:"#4a1ee3"},se={background:"#373737",backgroundGrid:"#212121",border:"#ffffff",color:"#ffffff"},S={darkMode:se,lightMode:ne},ie=z` 
* {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  padding: 0;
}
.App {
  max-width: 900px;
  margin: 0 auto;
  height: 100vh;
}

body{
  border-top: 5px solid ${({theme:e})=>e.border};
  background-color: ${({theme:e})=>e.background};
}

`;function ae(){const[e,t]=d.exports.useState(!1),r=()=>{t(!e)};return a(L,{theme:e?S.darkMode:S.lightMode,children:[o(ie,{}),a("div",{className:"App",children:[o(N,{handlerTheme:r,theme:e}),o(W,{children:o(J,{})}),o(re,{})]})]})}E.render(o(R.StrictMode,{children:o(Q,{children:o(ae,{})})}),document.getElementById("root"));
