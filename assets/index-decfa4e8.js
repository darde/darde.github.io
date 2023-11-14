import y,{useState as x,useEffect as g,createContext as A,useContext as v,useRef as R}from"react";import N from"react-dom";import{useLocation as U,Link as m,Outlet as M,createBrowserRouter as z,createRoutesFromElements as L,Route as c,RouterProvider as T}from"react-router-dom";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function i(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(o){if(o.ep)return;o.ep=!0;const a=i(o);fetch(o.href,a)}})();var S={exports:{}},u={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var O=y,D=Symbol.for("react.element"),P=Symbol.for("react.fragment"),I=Object.prototype.hasOwnProperty,E=O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,V={key:!0,ref:!0,__self:!0,__source:!0};function k(t,r,i){var s,o={},a=null,n=null;i!==void 0&&(a=""+i),r.key!==void 0&&(a=""+r.key),r.ref!==void 0&&(n=r.ref);for(s in r)I.call(r,s)&&!V.hasOwnProperty(s)&&(o[s]=r[s]);if(t&&t.defaultProps)for(s in r=t.defaultProps,r)o[s]===void 0&&(o[s]=r[s]);return{$$typeof:D,type:t,key:a,ref:n,props:o,_owner:E.current}}u.Fragment=P;u.jsx=k;u.jsxs=k;S.exports=u;var e=S.exports,f={},j=N;f.createRoot=j.createRoot,f.hydrateRoot=j.hydrateRoot;const C=()=>e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-6 h-6",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18L18 6M6 6l12 12"})}),_=({width:t=32,height:r=32})=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:t,height:r,viewBox:"0 0 24 24",children:[e.jsx("rect",{width:"24",height:"24",fill:"none"}),e.jsx("path",{d:"M12,2A10,10,0,0,0,8.84,21.5c.5.08.66-.23.66-.5V19.31C6.73,19.91,6.14,18,6.14,18A2.69,2.69,0,0,0,5,16.5c-.91-.62.07-.6.07-.6a2.1,2.1,0,0,1,1.53,1,2.15,2.15,0,0,0,2.91.83,2.16,2.16,0,0,1,.63-1.34C8,16.17,5.62,15.31,5.62,11.5a3.87,3.87,0,0,1,1-2.71,3.58,3.58,0,0,1,.1-2.64s.84-.27,2.75,1a9.63,9.63,0,0,1,5,0c1.91-1.29,2.75-1,2.75-1a3.58,3.58,0,0,1,.1,2.64,3.87,3.87,0,0,1,1,2.71c0,3.82-2.34,4.66-4.57,4.91a2.39,2.39,0,0,1,.69,1.85V21c0,.27.16.59.67.5A10,10,0,0,0,12,2Z"})]}),B=({width:t=32,height:r=32})=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:t,height:r,viewBox:"7.086 -169.483 1277.149 1277.149",shapeRendering:"geometricPrecision",textRendering:"geometricPrecision",imageRendering:"optimizeQuality",children:[e.jsx("path",{fill:"none",d:"M1138.734 931.095h.283M1139.017 931.095h-.283"}),e.jsx("path",{d:"M1179.439 7.087c57.543 0 104.627 47.083 104.627 104.626v30.331l-145.36 103.833-494.873 340.894L148.96 242.419v688.676h-37.247c-57.543 0-104.627-47.082-104.627-104.625V111.742C7.086 54.198 54.17 7.115 111.713 7.115l532.12 394.525L1179.41 7.115l.029-.028z",fill:"#e75a4d"}),e.jsxs("linearGradient",{id:"a",gradientUnits:"userSpaceOnUse",x1:"1959.712",y1:"737.107",x2:"26066.213",y2:"737.107",gradientTransform:"matrix(.0283 0 0 -.0283 248.36 225.244)",children:[e.jsx("stop",{offset:"0",stopColor:"#f8f6ef"}),e.jsx("stop",{offset:"1",stopColor:"#e7e4d6"})]}),e.jsx("path",{fill:"url(#a)",d:"M111.713 7.087l532.12 394.525L1179.439 7.087z"}),e.jsx("path",{fill:"#e7e4d7",d:"M148.96 242.419v688.676h989.774V245.877L643.833 586.771z"}),e.jsx("path",{fill:"#b8b7ae",d:"M148.96 931.095l494.873-344.324-2.24-1.586L148.96 923.527z"}),e.jsx("path",{fill:"#b7b6ad",d:"M1138.734 245.877l.283 685.218-495.184-344.324z"}),e.jsx("path",{d:"M1284.066 142.044l.17 684.51c-2.494 76.082-35.461 103.238-145.219 104.514l-.283-685.219 145.36-103.833-.028.028z",fill:"#b2392f"}),e.jsxs("linearGradient",{id:"b",gradientUnits:"userSpaceOnUse",x1:"1959.712",y1:"737.107",x2:"26066.213",y2:"737.107",gradientTransform:"matrix(.0283 0 0 -.0283 248.36 225.244)",children:[e.jsx("stop",{offset:"0",stopColor:"#f8f6ef"}),e.jsx("stop",{offset:"1",stopColor:"#e7e4d6"})]}),e.jsx("path",{fill:"url(#b)",d:"M111.713 7.087l532.12 394.525L1179.439 7.087z"}),e.jsxs("linearGradient",{id:"c",gradientUnits:"userSpaceOnUse",x1:"1959.712",y1:"737.107",x2:"26066.213",y2:"737.107",gradientTransform:"matrix(.0283 0 0 -.0283 248.36 225.244)",children:[e.jsx("stop",{offset:"0",stopColor:"#f8f6ef"}),e.jsx("stop",{offset:"1",stopColor:"#e7e4d6"})]}),e.jsx("path",{fill:"url(#c)",d:"M111.713 7.087l532.12 394.525L1179.439 7.087z"}),e.jsxs("linearGradient",{id:"d",gradientUnits:"userSpaceOnUse",x1:"1959.712",y1:"737.107",x2:"26066.213",y2:"737.107",gradientTransform:"matrix(.0283 0 0 -.0283 248.36 225.244)",children:[e.jsx("stop",{offset:"0",stopColor:"#f8f6ef"}),e.jsx("stop",{offset:"1",stopColor:"#e7e4d6"})]}),e.jsx("path",{fill:"url(#d)",d:"M111.713 7.087l532.12 394.525L1179.439 7.087z"}),e.jsxs("linearGradient",{id:"e",gradientUnits:"userSpaceOnUse",x1:"1959.712",y1:"737.107",x2:"26066.213",y2:"737.107",gradientTransform:"matrix(.0283 0 0 -.0283 248.36 225.244)",children:[e.jsx("stop",{offset:"0",stopColor:"#f8f6ef"}),e.jsx("stop",{offset:"1",stopColor:"#e7e4d6"})]}),e.jsx("path",{fill:"url(#e)",d:"M111.713 7.087l532.12 394.525L1179.439 7.087z"}),e.jsxs("linearGradient",{id:"f",gradientUnits:"userSpaceOnUse",x1:"1959.712",y1:"737.107",x2:"26066.213",y2:"737.107",gradientTransform:"matrix(.0283 0 0 -.0283 248.36 225.244)",children:[e.jsx("stop",{offset:"0",stopColor:"#f8f6ef"}),e.jsx("stop",{offset:"1",stopColor:"#e7e4d6"})]}),e.jsx("path",{fill:"url(#f)",d:"M111.713 7.087l532.12 394.525L1179.439 7.087z"}),e.jsxs("linearGradient",{id:"g",gradientUnits:"userSpaceOnUse",x1:"1959.712",y1:"737.107",x2:"26066.213",y2:"737.107",gradientTransform:"matrix(.0283 0 0 -.0283 248.36 225.244)",children:[e.jsx("stop",{offset:"0",stopColor:"#f8f6ef"}),e.jsx("stop",{offset:"1",stopColor:"#e7e4d6"})]}),e.jsx("path",{fill:"url(#g)",d:"M111.713 7.087l532.12 394.525L1179.439 7.087z"}),e.jsxs("linearGradient",{id:"h",gradientUnits:"userSpaceOnUse",x1:"1959.712",y1:"737.107",x2:"26066.213",y2:"737.107",gradientTransform:"matrix(.0283 0 0 -.0283 248.36 225.244)",children:[e.jsx("stop",{offset:"0",stopColor:"#f8f6ef"}),e.jsx("stop",{offset:"1",stopColor:"#e7e4d6"})]}),e.jsx("path",{fill:"url(#h)",d:"M111.713 7.087l532.12 394.525L1179.439 7.087z"}),e.jsx("path",{fill:"#f7f5ed",d:"M111.713 7.087l532.12 394.525L1179.439 7.087z"})]}),G=({width:t=32,height:r=32})=>e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:t,height:r,viewBox:"0 0 256 256",children:e.jsxs("g",{fill:"none",children:[e.jsx("path",{d:"M0 18.338C0 8.216 8.474 0 18.92 0h218.16C247.53 0 256 8.216 256 18.338v219.327C256 247.79 247.53 256 237.08 256H18.92C8.475 256 0 247.791 0 237.668V18.335z",fill:"#069"}),e.jsx("path",{d:"M77.796 214.238V98.986H39.488v115.252H77.8zM58.65 83.253c13.356 0 21.671-8.85 21.671-19.91-.25-11.312-8.315-19.915-21.417-19.915-13.111 0-21.674 8.603-21.674 19.914 0 11.06 8.312 19.91 21.169 19.91h.248zM99 214.238h38.305v-64.355c0-3.44.25-6.889 1.262-9.346 2.768-6.885 9.071-14.012 19.656-14.012 13.858 0 19.405 10.568 19.405 26.063v61.65h38.304v-66.082c0-35.399-18.896-51.872-44.099-51.872-20.663 0-29.738 11.549-34.78 19.415h.255V98.99H99.002c.5 10.812-.003 115.252-.003 115.252z",fill:"#ffffff"})]})}),$=({width:t=32,height:r=32})=>e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:t,height:r,viewBox:"0 -55 256 256",version:"1.1",preserveAspectRatio:"xMidYMid",children:e.jsx("g",{children:e.jsx("path",{d:"M72.2009141,1.42108547e-14 C112.076502,1.42108547e-14 144.399375,32.5485469 144.399375,72.6964154 C144.399375,112.844284 112.074049,145.390378 72.2009141,145.390378 C32.327779,145.390378 0,112.844284 0,72.6964154 C0,32.5485469 32.325326,1.42108547e-14 72.2009141,1.42108547e-14 Z M187.500628,4.25836743 C207.438422,4.25836743 223.601085,34.8960455 223.601085,72.6964154 L223.603538,72.6964154 C223.603538,110.486973 207.440875,141.134463 187.503081,141.134463 C167.565287,141.134463 151.402624,110.486973 151.402624,72.6964154 C151.402624,34.9058574 167.562834,4.25836743 187.500628,4.25836743 Z M243.303393,11.3867175 C250.314,11.3867175 256,38.835526 256,72.6964154 C256,106.547493 250.316453,134.006113 243.303393,134.006113 C236.290333,134.006113 230.609239,106.554852 230.609239,72.6964154 C230.609239,38.837979 236.292786,11.3867175 243.303393,11.3867175 Z"})})}),W=()=>e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",width:"42",height:"42",preserveAspectRatio:"xMidYMid meet",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-6 h-6",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"})}),F=()=>e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-8 h-8 animate-spin",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"})}),J=({width:t=32,height:r=32})=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",role:"img",viewBox:"0 0 512 512",width:t,height:r,fill:"#000000",children:[e.jsx("g",{id:"SVGRepo_bgCarrier",strokeWidth:"0"}),e.jsx("g",{id:"SVGRepo_tracerCarrier",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsxs("g",{id:"SVGRepo_iconCarrier",children:[e.jsx("rect",{width:"512",height:"512",rx:"15%",fill:"#f58025"}),e.jsx("path",{stroke:"#ffffff",strokeWidth:"30",fill:"none",d:"M293 89l90 120zm-53 50l115 97zm-41 65l136 64zm-23 69l148 31zm-6 68h150zm-45-44v105h241V297"})]})]});function q({url:t,title:r,content:i,liveAt:s="",onClose:o,credits:a=[]}){const[n,p]=x(!1);return g(()=>{t&&p(!0)},[t]),console.log(a.length),e.jsxs("div",{className:"relative w-full max-w-[900px] h-full sm:h-[600px] sm:pb-3 bg-black/80 rounded-xl",children:[e.jsx("div",{className:"absolute right-0 p-3",children:e.jsx("button",{className:"bg-zinc-500/50 p-1 rounded",onClick:o,children:e.jsx(C,{})})}),e.jsxs("article",{className:"flex flex-col px-[50px] pt-[30px] justify-start items-center w-full h-full",children:[e.jsx("h1",{className:"mb-2",children:r}),e.jsx("p",{className:"text-[18px] text-center mb-4",children:i}),a.length>0&&e.jsx("ul",{className:"mb-2",children:a.map(l=>e.jsx("li",{className:"mb-2",children:e.jsxs("p",{className:"text-sm m-0",children:[e.jsx("a",{href:l.contact,className:"text-sm",children:l.author}),": ",l.work]})},l.author))}),s&&e.jsxs("p",{children:["Live at:"," ",e.jsx("a",{href:s,target:"blank",children:s})]}),t&&n&&e.jsx("div",{className:"relative top-[170px]",children:e.jsx(F,{})}),e.jsx("iframe",{onLoad:()=>p(!1),width:"560",height:"315",src:t,title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0,className:"mt-[20px]"})]})]})}const H={},w=A(H),Z=({children:t,value:r})=>e.jsx(w.Provider,{value:r,children:t}),X=({color:t="yellowgreen"})=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",fill:t,height:"32px",width:"32px",version:"1.1",id:"Capa_1",viewBox:"0 0 470 470",xmlSpace:"preserve",stroke:"#fff700",children:[e.jsx("g",{id:"SVGRepo_bgCarrier",strokeWidth:"0"}),e.jsx("g",{id:"SVGRepo_tracerCarrier",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("g",{id:"SVGRepo_iconCarrier",children:e.jsxs("g",{children:[e.jsx("path",{d:"M462.5,22.5H7.5C3.357,22.5,0,25.857,0,30v410c0,4.143,3.357,7.5,7.5,7.5h455c4.143,0,7.5-3.357,7.5-7.5V30 C470,25.857,466.643,22.5,462.5,22.5z M455,432.5H15v-395h277.5v45h-255c-4.143,0-7.5,3.357-7.5,7.5s3.357,7.5,7.5,7.5h395 c4.143,0,7.5-3.357,7.5-7.5s-3.357-7.5-7.5-7.5h-125v-45H455V432.5z"}),e.jsx("circle",{cx:"381.5",cy:"60",r:"7.5"}),e.jsx("circle",{cx:"340.5",cy:"60",r:"7.5"}),e.jsx("circle",{cx:"422.5",cy:"60",r:"7.5"}),e.jsx("path",{d:"M235,206.676c-30.646,0-55.577,24.932-55.577,55.577S204.354,317.83,235,317.83c8.816,0,17.612-2.133,25.436-6.167 c3.682-1.898,5.127-6.422,3.229-10.104c-1.899-3.682-6.422-5.124-10.104-3.229c-5.789,2.985-12.033,4.499-18.561,4.499 c-22.374,0-40.577-18.203-40.577-40.577s18.203-40.577,40.577-40.577s40.577,18.203,40.577,40.577 c0,6.528-1.514,12.772-4.498,18.56c-1.898,3.681-0.453,8.204,3.229,10.104c3.68,1.895,8.203,0.455,10.104-3.229 c4.034-7.821,6.166-16.616,6.166-25.435C290.577,231.607,265.646,206.676,235,206.676z"}),e.jsx("path",{d:"M358.087,234.753h-31.543c-1.851-6.15-4.322-12.095-7.387-17.767l22.324-22.323c1.406-1.407,2.196-3.314,2.196-5.304 s-0.79-3.896-2.196-5.304l-28.284-28.284c-2.93-2.928-7.678-2.928-10.607,0l-22.323,22.324c-5.672-3.064-11.616-5.536-17.767-7.387 v-31.543c0-4.143-3.357-7.5-7.5-7.5h-40c-4.143,0-7.5,3.357-7.5,7.5v31.543c-6.15,1.851-12.095,4.322-17.767,7.387l-22.323-22.324 c-2.93-2.928-7.678-2.928-10.607,0l-28.284,28.284c-1.406,1.407-2.196,3.314-2.196,5.304s0.79,3.896,2.196,5.304l22.324,22.323 c-3.064,5.672-5.536,11.616-7.387,17.767h-31.543c-4.143,0-7.5,3.357-7.5,7.5v40c0,4.143,3.357,7.5,7.5,7.5h31.544 c1.851,6.152,4.321,12.096,7.386,17.767l-22.323,22.322c-1.407,1.407-2.197,3.314-2.197,5.304s0.79,3.896,2.196,5.304 l28.284,28.284c2.929,2.927,7.678,2.929,10.606,0l22.324-22.323c5.672,3.064,11.616,5.536,17.767,7.387v31.542 c0,4.143,3.357,7.5,7.5,7.5h40c4.143,0,7.5-3.357,7.5-7.5v-31.542c6.15-1.851,12.095-4.322,17.767-7.387l22.324,22.323 c2.928,2.928,7.677,2.928,10.606,0l28.284-28.284c1.406-1.407,2.196-3.314,2.196-5.304s-0.79-3.896-2.197-5.304l-22.323-22.322 c3.064-5.672,5.535-11.615,7.386-17.767h31.544c4.143,0,7.5-3.357,7.5-7.5v-40C365.587,238.11,362.229,234.753,358.087,234.753z M350.587,274.753h-29.802c-3.486,0-6.513,2.402-7.305,5.798c-1.995,8.563-5.383,16.712-10.069,24.223 c-1.848,2.961-1.408,6.805,1.061,9.273l21.1,21.099l-17.678,17.678l-21.101-21.1c-2.468-2.467-6.31-2.906-9.272-1.06 c-7.511,4.687-15.661,8.074-24.223,10.069c-3.396,0.792-5.798,3.818-5.798,7.305v29.801h-25v-29.801 c0-3.486-2.402-6.513-5.798-7.305c-8.562-1.995-16.712-5.383-24.223-10.069c-2.962-1.847-6.807-1.406-9.272,1.06l-21.101,21.1 l-17.678-17.678l21.1-21.099c2.469-2.469,2.908-6.313,1.06-9.274c-4.685-7.508-8.072-15.657-10.068-24.222 c-0.792-3.396-3.818-5.798-7.305-5.798h-29.802v-25h29.802c3.486,0,6.513-2.402,7.305-5.798 c1.995-8.562,5.383-16.712,10.069-24.223c1.848-2.961,1.408-6.805-1.06-9.273l-21.101-21.1l17.678-17.678l21.1,21.101 c2.468,2.468,6.312,2.908,9.273,1.06c7.511-4.687,15.661-8.074,24.223-10.069c3.396-0.792,5.798-3.818,5.798-7.305v-29.802h25 v29.802c0,3.486,2.402,6.513,5.798,7.305c8.562,1.995,16.712,5.383,24.223,10.069c2.962,1.848,6.807,1.405,9.273-1.06l21.1-21.101 l17.678,17.678l-21.101,21.1c-2.468,2.469-2.907,6.313-1.06,9.273c4.687,7.511,8.074,15.661,10.069,24.223 c0.792,3.396,3.818,5.798,7.305,5.798h29.802V274.753z"})]})})]});function Y(){const[t,r]=x(!1),i=U();function s(){r(!t)}return e.jsxs("div",{className:`fixed top-0 ${t?"h-[200px]":"h-[70px]"} z-40 transition-all duration-300 w-full bg-sky-900 max-w-[1200px] md:pt-0 md:bg-sky-900 md:h-[70px] flex flex-row items-start md:items-center justify-end pr-[50px] pt-[15px] md:pr-[20px]`,children:[e.jsxs("div",{className:"flex flex-row items-center gap-4 absolute left-[20px] top-[13px] md:top-auto",children:[e.jsxs("div",{className:"flex flex-col",children:[e.jsx("h1",{className:"text-[16px] float-left text-[yellowgreen] p-0 m-0",children:"Pablo R. Darde"}),e.jsx("h2",{className:"text-[12px] float-left p-0 m-0 text-[yellowgreen]",children:"Software Engineer"})]}),e.jsx(X,{})]}),e.jsxs("ul",{id:"menu",className:`relative ${t?"flex":"hidden"} md:flex flex-col pl-[20px] md:pl-0 gap-4 justify-start items-end md:flex-row  md:justify-center md:items-center`,children:[e.jsx("li",{children:e.jsx(m,{onClick:s,to:"/",className:`${i.pathname==="/"?"active":""}`,children:"About me"})}),e.jsx("li",{children:e.jsx(m,{onClick:s,to:"/experience",className:`${i.pathname==="/experience"?"active":""}`,children:"Experience"})}),e.jsx("li",{children:e.jsx(m,{onClick:s,to:"/articles",className:`${i.pathname==="/articles"?"active":""}`,children:"Articles"})}),e.jsx("li",{children:e.jsx(m,{onClick:s,to:"portfolio",className:`${i.pathname==="/portfolio"?"active":""}`,children:"Portfolio"})})]}),e.jsx("div",{className:"pr-[20px] pt-[8px] md:hidden flex justify-end absolute right-0",children:e.jsx("button",{onClick:s,className:"bg-sky-800/25 border-0 outline-0 shadow-none",children:t?e.jsx(C,{}):e.jsx(W,{})})})]})}const d=({children:t,href:r="#"})=>e.jsx("a",{href:r,className:"grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all duration-200",children:t});function K(){return e.jsxs("footer",{className:"flex flex-flow justify-center md:justify-start gap-4 items-center px-[20px] w-full h-[80px] min-h-[80px] bg-sky-950 max-w-[1200px] mt-[50px]",children:[e.jsx("h1",{className:"hidden md:flex text-[22px] p-0 m-0 mr-5 text-[yellowgreen]",children:"Around the web"}),e.jsxs("nav",{className:"flex flex-flow gap-5 justify-start items-center",children:[e.jsx(d,{href:"https://www.linkedin.com/in/pablodarde/",children:e.jsx(G,{})}),e.jsx(d,{href:"https://github.com/darde",children:e.jsx(_,{})}),e.jsx(d,{href:"https://stackoverflow.com/users/1703696/pablo-darde",children:e.jsx(J,{})}),e.jsx(d,{href:"https://medium.com/@pablodarde",children:e.jsx($,{})}),e.jsx(d,{href:"mailto:pablodarde@gmail.com",children:e.jsx(B,{})})]})]})}function Q({children:t}){return e.jsx("div",{className:"bg-gradient-to-b from-sky-800/60 to-sky-900/90 fixed overflow-auto top-0 bottom-0 w-full md:max-w-[1200px] md:left-[50%] md:translate-x-[-50%] pt-[100px]",children:e.jsxs("div",{className:"h-full flex flex-col justify-between",children:[e.jsx("div",{className:"pb-[50px] px-[50px]",children:t}),e.jsx(K,{})]})})}function ee(){const{portfolioDetail:t,setPortfolioDetail:r}=v(w);function i(){r(null)}return e.jsx("div",{className:"w-full h-full",children:e.jsxs("div",{className:"w-full h-full md:max-w-[1200px] m-auto",children:[e.jsx(Y,{}),t&&e.jsx("div",{className:"fixed bg-black/70 flex justify-center items-center z-50 top-0 bottom-0 left-0 right-0",children:e.jsx(q,{title:t.title,content:t.description,url:t.videoUrl,credits:t.credits,liveAt:t.liveAt,onClose:i})}),e.jsx(Q,{children:e.jsx(M,{})})]})})}function te(){return e.jsxs("div",{children:[e.jsx("h1",{children:"About me"}),e.jsxs("p",{children:["I'm a software engineer specialized in front-end technologies and Backend with NodeJS. I Already worked in companies such as ",e.jsx("a",{href:"https://www.sap.com/brazil/index.html",children:"SAP"}),","," ",e.jsx("a",{href:"https://www.resultadosdigitais.com.br/",children:"Resultados Digitais"}),", Silicon Valley's companies through"," ",e.jsx("a",{href:"http://www.daitan.com/",children:"Daitan Group"}),", and ",e.jsx("a",{href:"https://x-team.com/",children:"X-Team"})]}),e.jsx("p",{children:"I started my career as a graduate student in Physics. Today I have a bachelor's degree in Software Engineering."}),e.jsx("p",{children:"I like to do research in the areas of software engineering and clean architecture, studying clean code practices and design patterns."}),e.jsx("p",{children:"I also have some personal projects building games with Unity platform and Augmented Reality using AR Foundation (AR Kit, and AR Core)."}),e.jsx("h2",{children:"Contact"}),e.jsx("a",{href:"mailto:pablodarde@gmail.com",children:"pablodarde@gmail.com"}),e.jsx("h2",{children:"Resume"}),e.jsxs("p",{children:["Download my ",e.jsx("a",{href:"/assets/pablo_darde_resume.pdf",children:"resume [108KB]"}),"."]})]})}const re="/assets/dynamic-form-thumb-ee05e522.png",se="/assets/itchio-game-thumb-123fcec0.png",ie="/assets/nautica-amstel-thumb-ad978d92.png",oe="/assets/nautica-thumb-44754efd.png",ae="/assets/nestle-thumb-baece1a6.png",ne="/assets/ospa-thumb-4819b48b.png",le="/assets/react-side-menu-thumb-a4222aa9.png",ce="/assets/solar-system-thumb-df0ba77c.png",de="/assets/surpresa-thumb-c6e9307d.png",pe="/assets/svelteflix-thumb-69a20bf7.png",me="/assets/threejs-eclipse-thumb-893c9f02.png",he=[{title:"Entendendo o princípio Open Closed atráves do design pattern Strategy (Portuguese)",url:"https://medium.com/@pablodarde/entendendo-o-princ%C3%ADpio-open-closed-atr%C3%A1ves-do-design-pattern-strategy-b0583f0ff7bd"},{title:"Implementing Internationalization in a front end application",url:"https://medium.com/rd-shipit/internationalizing-a-front-end-application-88f1baae3d82"},{title:"Testing asynchronous code with Jest and Testing Library React",url:"https://medium.com/rd-shipit/testing-asynchronous-code-with-jest-and-testing-library-react-cfc185d7bd78"},{title:"Test Doubles (Mocks, Stubs, Fakes, Spies e Dummies)",url:"https://medium.com/rd-shipit/test-doubles-mocks-stubs-fakes-spies-e-dummies-a5cdafcd0daf"},{title:"O Padrão Triple A (Arrange, Act, Assert) (Portuguese)",url:"https://medium.com/@pablodarde/o-padr%C3%A3o-triple-a-arrange-act-assert-741e2a94cf88"},{title:"Testes Unitários com TDD (Test Driven Development) (Portuguese)",url:"https://medium.com/@pablodarde/testes-unit%C3%A1rios-com-tdd-test-driven-development-657f3dadad06"}],b=[{id:1,title:"Svelteflix",imageSource:pe,stack:"Sveltekit",description:"This is a movies application made with Sveltekit. Sveltekit is a Server Side Rendering framework, similar to NextJS. This application consumes a public restful API to retrieve movies data.",videoUrl:"https://www.youtube.com/embed/6tF43mWQwlE?si=ySrN0zzXBHrjeaAg",liveAt:"https://svelteflix.vercel.app/"},{id:2,title:"Dynamic Forms",imageSource:re,stack:"React, Tailwindcss",description:"Creating dynamic form fields with React",videoUrl:"https://www.youtube.com/embed/FGhXs1LRuyE?si=DH8fj3O4j7mx5BUO"},{id:3,title:"Unity 2D Platform Game",imageSource:se,stack:"Unity, C#",description:"Unity 2D platform game",videoUrl:"https://www.youtube.com/embed/XRZaZ88wLvE?si=_be-0B5qEwjWiX6s",credits:[{author:"Pedro Cabral",contact:"petergun@gmail.com",work:"Design, sound engineering, and screenplay"},{author:"Pablo Darde",contact:"https://www.linkedin.com/in/pablodarde/",work:"Unity development, screenplay, and iOS/Android build"}],liveAt:"https://voduweb.itch.io/pegalulu"},{id:4,title:"AR Náutica/Amstel",imageSource:ie,stack:"Unity, AR, Vuforia",description:"Augmented Reality app using Unity and Vuforia. São Paulo, Nautica Summit.",credits:[{author:"Cláudio Ramirez",contact:"https://www.instagram.com/claudioramires/",work:"Interface design, and art direction"},{author:"Henrique Barbosa",contact:"https://www.instagram.com/riquebarbo/",work:"3D modeling and design"},{author:"Pablo Darde",contact:"https://www.linkedin.com/in/pablodarde/",work:"Augmented realitiy programming, iOS and Android build."}],videoUrl:"https://www.youtube.com/embed/Vz6H70VNwO4?si=VasdG98BOe5W8rBU"},{id:5,title:"AR Náutica Summit",imageSource:oe,stack:"Unity, AR, Vuforia",description:"Augmented Reality app using Unity and Vuforia. São Paulo, Nautica Summit.",credits:[{author:"Cláudio Ramirez",contact:"https://www.instagram.com/claudioramires/",work:"Interface design, and art direction"},{author:"Henrique Barbosa",contact:"https://www.instagram.com/riquebarbo/",work:"3D modeling and design"},{author:"Pablo Darde",contact:"https://www.linkedin.com/in/pablodarde/",work:"Augmented realitiy programming, iOS and Android build."}],videoUrl:"https://www.youtube.com/embed/22VUp_iIWiU?si=4V7j5AqUdNpLQXw3"},{id:6,title:"AR Nestlé Experiment",imageSource:ae,stack:"Unity, AR, Vuforia",description:"Augmented Reality app using Unity and Vuforia. Nestlé chocolate box experiment.",videoUrl:"https://www.youtube.com/embed/ZGAzvxZ7duk?si=I7AkstMZQr8JPMZT"},{id:11,title:"AR Nestlé | Chocolate Surpresa",imageSource:de,stack:"Unity, AR, Vuforia",description:"Augmented Reality app using Unity and Vuforia. Nestlé chocolate surpresa.",videoUrl:"https://www.youtube.com/embed/gyplmlekyOI?si=Y64sOqfi-ziOsm4U"},{id:7,title:"AR OSPA",imageSource:ne,stack:"Unity, AR, Vuforia",description:"Augmented Reality app using Unity and Vuforia. Ospa Symphonic Orchestra experiment.",credits:[{author:"Cláudio Ramirez",contact:"https://www.instagram.com/claudioramires/",work:"Paint, digital art, and art direction"},{author:"Henrique Barbosa",contact:"https://www.instagram.com/riquebarbo/",work:"3D modeling and animation"},{author:"Pablo Darde",contact:"https://www.linkedin.com/in/pablodarde/",work:"Augmented realitiy programming, iOS and Android build."}],videoUrl:"https://www.youtube.com/embed/Y3CD8iCU4yE?si=rBZEv4JzB0qWbfzt"},{id:8,title:"AR Android Side menu",imageSource:le,stack:"React Native",description:"Android Side menu template",videoUrl:"https://www.youtube.com/embed/-XISYdmb1Fg?si=r0Y-UK2C6kA30THm"},{id:9,title:"AR Solar System Simulation",imageSource:ce,stack:"Unity, AR, Vuforia",description:"Augmented Reality app using Unity and Vuforia. Solar System simulation.",videoUrl:"https://www.youtube.com/embed/6TqJ7TQXMuo?si=OuhEEqrnihmurxoJ"},{id:10,title:"ThreeJS Eclipse Simulator",imageSource:me,stack:"ThreeJS",description:"Eclipse simulator",videoUrl:"https://www.youtube.com/embed/KlAXaxYxyj8?si=3BMR7sKI30ueqkbW"}],xe=[{label:"JavaScript",years:15,color:"green"},{label:"TypeScript",years:5,color:"darkblue"},{label:"React/Redux",years:7,color:"#169ECA"},{label:"React Native/Expo",years:3,color:"#5DD4F4"},{label:"Unit Testing (Jasmine/Moca/@testing-library)",years:5,color:"#FD4444"},{label:"NodeJS",years:6,color:"#056D00"},{label:"Clean Architecture/SOLID Principles",years:6,color:"#fff"},{label:"Ruby on Rails/Java/Svelte",years:1,color:"#D30002"},{label:"NextJS",years:4,color:"black"},{label:"Unity/C#",years:3,color:"#7C7C7C"},{label:"AR Foundation (AR Core/AR Kit)",years:2,color:"#222222"},{label:"ThreeJS",years:1,color:"#049EF4"}],ue=[{title:"Software Engineer",company:{name:"Still Life through Sierra Studios",href:"https://www.sierra.studio/",year:{from:"Decenber 2022",to:"Current"}}},{title:"Principal Engineer and Architect",company:{name:"Pipefy",href:"https://www.pipefy.com/pt-br/",year:{from:"October 2021",to:"Decenber 2022"}}},{title:"Senior Software Engineer",company:{name:"X-Team",href:"https://x-team.com/",year:{from:"December 2020",to:"October 2021"}}},{title:"Senior Software Engineer and Frontend Architect",company:{name:"Resultados Digitais [RD Station]",href:"https://www.rdstation.com/",year:{from:"June 2017",to:"December 2020"}}},{title:"Frontend Specialist",company:{name:"Daitan Group",href:"https://www.linkedin.com/showcase/encorabrasil/",year:{from:"May 2016",to:"june 2017"}}},{title:"Senior JavaScript Developer",company:{name:"SAP Latin Labs",href:"https://www.sap.com/brazil/about.html",year:{from:"September 2015",to:"May 2016"}}},{title:"Technical Lead",company:{name:"PUCRS - Pontifícia Universidade Católica do Rio Grande do Sul",href:"https://pucrs.br",year:{from:"August 2007",to:"January 2015"}}}];function fe(){return e.jsxs("div",{children:[e.jsx("h1",{children:"Articles"}),e.jsxs("p",{children:["Check out my articles in ",e.jsx("a",{href:"https://medium.com/@pablodarde",children:"Medium."})]}),e.jsx("div",{className:"pt-[50px]",children:e.jsx("ul",{children:he.map(t=>e.jsx("li",{className:"mb-5",children:e.jsx("a",{href:t.url,children:t.title})},t.url))})})]})}const h={container:{borderTopWidth:"1px",borderColor:"white",borderRadius:"8px",boxShadow:"1px 0px 3px rgba(0,0,0,0.4)",marginBottom:"30px",padding:"12px 10px",background:"rgba(255,255,255,0.1)",display:"flex",justifyContent:"space-between"},roles:{title:{fontSize:"24px",margin:"0"},company:{fontSize:"20px",display:"inline-flex"},year:{fontSize:"14px",fontStyle:"italic",marginLeft:"10px",display:"block",textAlign:"right"}}},ge=({title:t,company:r})=>e.jsxs("div",{style:h.container,children:[e.jsxs("div",{children:[e.jsx("h2",{style:h.roles.title,children:t}),e.jsx("a",{href:r.href,target:"blank",children:e.jsx("h3",{style:h.roles.company,children:r.name})})]}),e.jsx("div",{children:e.jsx("label",{style:h.roles.year,children:`${r.year.from} to ${r.year.to}`})})]}),we=({label:t,years:r,color:i="green"})=>{const s=R(null),o=15,a=300,n=1,p=r*a/o;g(()=>{setTimeout(()=>{s!=null&&s.current&&(s.current.style.width=`${p}px`)},500)},[]);const l={container:{borderTopWidth:"1px",borderTopColor:"white",width:`${a}px`,boxShadow:"1px 1px 3px rgba(0,0,0,0.3)",backgroundColor:"rgba(255, 255, 255, 0.3)",borderRadius:"4px",height:"15px"},label:{fontSize:"16px",textShadow:"1px 1px 2px rgba(0,0,0,0.5)"}};return e.jsxs("article",{className:"mt-[20px] flex-row sm:flex-col sm:gap-4 justify-start",style:{width:"100%"},children:[e.jsx("h1",{className:"text-[24px] m-0 p-0",style:l.label,children:`${t} (${r} years)`}),e.jsx("div",{className:"flex flex-col md:flex-row md:gap-2 items-start md:items-center w-auto",children:e.jsx("div",{style:l.container,className:"my-1 md:m-0",children:e.jsx("div",{ref:s,className:"h-full transition-all duration-[2s] ease-out rounded",style:{width:`${n}px`,backgroundColor:i}})})})]})};function je(){const[t,r]=x([]);return g(()=>{r(xe.slice())},[]),e.jsxs("article",{children:[e.jsx("h1",{children:"Experience"}),e.jsx("p",{className:"mb-[50px]",children:"I've been working as software engineer for 15 years. During my carreer I learned a lot of different disciplines and stacks working with different developers at distinct companies. Check below my experience working with different stacks and roles."}),e.jsxs("div",{className:"flex flex-col items-center md:flex-row justify-start md:items-start",children:[e.jsxs("article",{className:"w-full md:w-[45%] md:pr-[70px]",children:[e.jsx("h1",{className:"text-[36px]",children:"Stacks"}),t.map(i=>e.jsx(we,{label:i.label,years:i.years,color:i.color},i.label))]}),e.jsxs("article",{className:"w-full",children:[e.jsx("h1",{className:"text-[36px] mt-[30px] md:mt-0",children:"Roles"}),e.jsx("p",{children:"During my carreer I worked with different roles performing different tasks."}),ue.map(i=>e.jsx(ge,{title:i.title,company:i.company}))]})]})]})}function be({title:t,imageSource:r,styles:i={},handleOnClick:s,id:o}){return e.jsx("article",{style:{...i,backgroundImage:`url(${r})`,backgroundSize:"cover"},className:"group relative w-[185px] shadow-card hover:shadow-card-hover h-[300px] bg-zinc-200 rounded-lg flex flex-col justify-start py-4 px-3 items-center text-white transition-all duration-300",onClick:()=>s(o),children:e.jsx("div",{className:"transition-all duration-300 group-hover:h-[50%] absolute w-full h-[100px] bg-red-900/90 rounded-md flex flex-col justify-around items-center pt-2 px-2 bottom-0 text-white",children:e.jsx("h1",{className:"text-[18px] m-0 mb-1 text-center leading-6",children:t})})})}function ye(){const{setPortfolioDetail:t}=v(w);function r(i){const s=b.find(o=>o.id===i);s&&t({title:s.title,videoUrl:s.videoUrl,description:s.description,liveAt:(s==null?void 0:s.liveAt)||"",credits:(s==null?void 0:s.credits)||[]})}return e.jsxs("div",{children:[e.jsx("h1",{children:"Portfolio"}),e.jsx("p",{children:"During my carrer as software engineer I built a lot of systems. Most of them are private systems and I can't expose them here. On the other hand, I also built lots of personal projects to help me learn new technologies."}),e.jsx("div",{className:"flex flex-row justify-center flex-wrap pt-5 gap-6 h-auto",children:b.map(i=>e.jsx(be,{id:i.id,imageSource:i.imageSource,title:i.title,handleOnClick:r},i.id))})]})}const ve=z(L(e.jsxs(c,{path:"/",element:e.jsx(ee,{}),children:[e.jsx(c,{index:!0,element:e.jsx(te,{})}),e.jsx(c,{path:"/experience",element:e.jsx(je,{})}),e.jsx(c,{path:"/articles",element:e.jsx(fe,{})}),e.jsx(c,{path:"/portfolio",element:e.jsx(ye,{})})]}))),Se=()=>{const[t,r]=x(null);function i(s){r(s)}return e.jsx(Z,{value:{portfolioDetail:t,setPortfolioDetail:i},children:e.jsx(T,{router:ve})})};f.createRoot(document.getElementById("root")).render(e.jsx(y.StrictMode,{children:e.jsx(Se,{})}));
