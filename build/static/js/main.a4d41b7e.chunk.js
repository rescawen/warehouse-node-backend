(this.webpackJsonpwarehouse_frontend=this.webpackJsonpwarehouse_frontend||[]).push([[0],{72:function(e,t,c){},98:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c.n(n),a=c(19),l=c.n(a),i=(c(72),c(23)),o=c(26),s=c.n(o),u=function(){return s.a.get("//beanies").then((function(e){return e.data}))},d=function(){return s.a.get("//facemasks").then((function(e){return e.data}))},j=function(){return s.a.get("//gloves").then((function(e){return e.data}))},b=c(122),h=c(126),f=c(127),O=c(37),p=c.n(O),x=c(131),m=c(123),g=c(124),v=c(125),y=c(121),w=c(101),E=function(e,t){return s.a.get("".concat("/","/").concat(e,"/").concat(t)).then((function(e){return e.data}))},S=c(120),C=c(62),k=c(2),N=function(e){var t=e.color,c={};return c="white"===t?{borderRadius:"50%",borderStyle:"solid",width:28,height:28}:{borderRadius:"50%",backgroundColor:t,width:32,height:32},Object(k.jsx)("div",{style:c})},B=function(e){var t=e.availability;return t?"INSTOCK"===t?Object(k.jsx)("div",{children:Object(k.jsx)(x.a,{label:"In Stock",variant:"outlined",style:{color:"#558b2f",borderColor:"#7cb342",borderWidth:"2px"}})}):"LESSTHAN10"===t?Object(k.jsx)("div",{children:Object(k.jsx)(x.a,{label:"<10 in Stock",variant:"outlined",style:{color:"#ff8f00",borderColor:"#ffb300",borderWidth:"2px"}})}):"OUTOFSTOCK"===t?Object(k.jsx)("div",{children:Object(k.jsx)(x.a,{label:"Out of Stock",variant:"outlined",color:"secondary",style:{borderWidth:"2px"}})}):Object(k.jsx)("div",{children:Object(k.jsx)(x.a,{label:"Stock Status Unknown",variant:"outlined",color:"secondary",style:{borderWidth:"2px"}})}):null},I=function(e){var t=!1;return e.showList.forEach((function(c){c[0]===e.product.id&&!0===c[1]&&(t=!0)})),t?Object(k.jsx)("div",{children:Object(k.jsx)(S.a,{container:e.container,children:Object(k.jsx)(C.a,{children:Object(k.jsx)(y.a,{variant:"h4",children:e.product.name})})})}):null},P=Object(b.a)((function(e){return{root:{width:275,padding:10},title:{fontSize:14},pos:{marginBottom:12},footer:{justifyContent:"space-between","& > *":{margin:e.spacing(.5)}},circleContainer:{display:"flex",justifyContent:"left","& > *":{margin:e.spacing(.5)}},cardAction:{display:"block",textAlign:"initial"}}})),L=function(e){var t=Object(n.useState)(null),c=Object(i.a)(t,2),r=c[0],a=c[1],l=P();return Object(n.useEffect)((function(){E(e.product.manufacturer,e.product.id.toUpperCase()).then((function(e){var t=e.DATAPAYLOAD.split("\n")[2].split("<")[1];a(t.split(">")[1])}))}),[]),e.allCategory?Object(k.jsx)("div",{className:l.root,children:Object(k.jsxs)(m.a,{children:[Object(k.jsxs)(g.a,{children:[Object(k.jsx)(y.a,{className:l.title,color:"textSecondary",display:"initial",gutterBottom:!0,children:e.product.id.toUpperCase()}),Object(k.jsx)(y.a,{variant:"h5",component:"h2",children:e.product.name}),Object(k.jsx)(y.a,{className:l.pos,color:"textSecondary",children:e.product.manufacturer})]}),Object(k.jsxs)(v.a,{className:l.footer,children:[Object(k.jsx)("div",{className:l.circleContainer,children:e.product.color.map((function(e){return Object(k.jsx)(N,{color:e},e)}))}),Object(k.jsx)(B,{availability:r}),Object(k.jsx)(x.a,{label:e.product.price+" \u20ac"})]})]},e.product.id)}):Object(k.jsxs)("div",{className:l.root,children:[Object(k.jsx)(m.a,{children:Object(k.jsxs)(w.a,{className:l.cardAction,onClick:function(){return e.selectProduct(e.product.id)},children:[Object(k.jsxs)(g.a,{children:[Object(k.jsx)(y.a,{className:l.title,color:"textSecondary",display:"initial",gutterBottom:!0,children:e.product.id.toUpperCase()}),Object(k.jsx)(y.a,{variant:"h5",component:"h2",children:e.product.name}),Object(k.jsx)(y.a,{className:l.pos,color:"textSecondary",children:e.product.manufacturer})]}),Object(k.jsxs)(v.a,{className:l.footer,children:[Object(k.jsx)("div",{className:l.circleContainer,children:e.product.color.map((function(e){return Object(k.jsx)(N,{color:e},e)}))}),Object(k.jsx)(B,{availability:r}),Object(k.jsx)(x.a,{label:e.product.price+" \u20ac"})]})]})},e.product.id),Object(k.jsx)("div",{children:Object(k.jsx)(I,{product:e.product,showList:e.showList,container:e.container})})]})},z=Object(b.a)((function(e){return{root:{display:"flex",flexWrap:"wrap",justifyContent:"center",backgroundColor:"#fafafa",margin:"25px"},gridList:{width:300,height:700},header:{display:"flex",alignItems:"center",justifyContent:"center"}}})),A=function(e){var t=z();return Object(k.jsx)("div",{className:t.root,children:Object(k.jsxs)(h.a,{cellHeight:250,className:t.gridList,children:[Object(k.jsxs)(f.a,{cols:2,style:{height:"auto"},children:[Object(k.jsx)("h1",{style:{textAlign:"center"},children:e.category}),Object(k.jsx)("div",{className:t.header,children:Object(k.jsx)(x.a,{icon:Object(k.jsx)(p.a,{}),label:"Search placeholder..."})})]},"Subheader"),e.products.map((function(e){return Object(k.jsx)(L,{product:e,allCategory:!0},e.id)}))]})})},F=function(e){return Object(k.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",margin:"25px"},children:[Object(k.jsx)(A,{products:e.frontPageBeanies,category:"Beanies"}),Object(k.jsx)(A,{products:e.frontPageFacemasks,category:"Facemasks"}),Object(k.jsx)(A,{products:e.frontPageGloves,category:"Gloves"})]})},T=Object(b.a)((function(e){return{root:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",backgroundColor:"#fafafa",margin:"25px"},gridList:{width:600,height:700},header:{display:"flex",alignItems:"center",justifyContent:"center"}}})),R=function(e){var t=T(),c=Object(n.useState)(e.products.map((function(e){return[e.id,!1]}))),r=Object(i.a)(c,2),a=r[0],l=r[1],o=Object(n.useRef)(null),s=function(e){l(a.map((function(t){return t[0]===e?[t[0],!0]:[t[0],!1]})))};return Object(k.jsxs)("div",{className:t.root,children:[Object(k.jsx)("div",{ref:o}),Object(k.jsxs)(h.a,{cellHeight:250,className:t.gridList,children:[Object(k.jsxs)(f.a,{cols:2,style:{height:"auto"},children:[Object(k.jsx)("h1",{style:{textAlign:"center"},children:e.category}),Object(k.jsx)("div",{className:t.header,children:Object(k.jsx)(x.a,{icon:Object(k.jsx)(p.a,{}),label:"Search placeholder..."})})]},"Subheader"),e.products.map((function(e){return Object(k.jsx)(L,{product:e,container:o.current,showList:a,selectProduct:s},e.id)}))]})]})},_=c(25),W=c(128),G=c(129),M=c(130),U=c(59),D=c.n(U),H=c(61);function J(){return(J=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var c=arguments[t];for(var n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n])}return e}).apply(this,arguments)}function K(e,t){if(null==e)return{};var c,n,r=function(e,t){if(null==e)return{};var c,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)c=a[n],t.indexOf(c)>=0||(r[c]=e[c]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)c=a[n],t.indexOf(c)>=0||Object.prototype.propertyIsEnumerable.call(e,c)&&(r[c]=e[c])}return r}var V=n.createElement("g",null,n.createElement("g",null,n.createElement("path",{d:"M414.001,305.071v-32.7c-0.5-86.4-57.2-162.4-140-187.3c6.8-33.6-15-66.4-48.6-73.1c-33.6-6.8-66.4,15-73.1,48.6 c-2,10-1.5,20.3,1.4,30.1c-37.6,11.4-69.5,33-93,62.9c-26,33.2-39.7,74.4-39.7,119.3v31.9c-13,7.2-21.1,20.9-21,35.8v41.7 c0.1,22.6,18.5,40.9,41.1,40.9h0.1h351.4c22.6,0.2,41.1-18.1,41.3-40.7v-0.1v-41.7 C434.001,326.071,426.401,312.571,414.001,305.071z M174.101,57.271c6.3-16.1,21.8-26.6,39-26.6c23.2,0,42,18.8,42.1,42.1 c0,5.3-1,10.6-3,15.6c-8.6,21.6-33.1,32.1-54.6,23.5C176.001,103.271,165.501,78.771,174.101,57.271z M41.001,272.871 c0-79.3,47.5-142.9,121.7-164c19.9,27.9,58.7,34.3,86.5,14.4c7.2-5.1,13.2-11.8,17.6-19.4c34.9,10.3,65.8,31,88.5,59.3 c24.8,31,38.4,69.5,38.6,109.2v27c-1,0-1-0.3-1.3-0.3h-351.3c-0.1,0-0.3,0.3-0.3,0.3V272.871z M414.001,382.171L414.001,382.171 c-0.1,11.6-9.5,20.9-21.1,20.9c-0.1,0-0.1,0-0.2,0h-351.4c-11.6,0.2-21.1-9.1-21.3-20.7c0-0.1,0-0.1,0-0.2v-41.7 c0-9.2,5.9-17.3,14.6-20.1c0,0,0.1-0.1,0.1-0.2c2.1-0.8,4.4-1.2,6.6-1.2h351.4c2.3,0,4.6,0.4,6.7,1.3c0.1,0,0.1,0.1,0.2,0.1 c8.6,2.9,14.4,11,14.4,20.1V382.171z"}))),X=n.createElement("g",null),Y=n.createElement("g",null),q=n.createElement("g",null),Q=n.createElement("g",null),Z=n.createElement("g",null),$=n.createElement("g",null),ee=n.createElement("g",null),te=n.createElement("g",null),ce=n.createElement("g",null),ne=n.createElement("g",null),re=n.createElement("g",null),ae=n.createElement("g",null),le=n.createElement("g",null),ie=n.createElement("g",null),oe=n.createElement("g",null);function se(e,t){var c=e.title,r=e.titleId,a=K(e,["title","titleId"]);return n.createElement("svg",J({id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",height:24,viewBox:"0 0 433.902 433.902",width:24,style:{enableBackground:"new 0 0 433.902 433.902"},xmlSpace:"preserve",ref:t,"aria-labelledby":r},a),c?n.createElement("title",{id:r},c):null,V,X,Y,q,Q,Z,$,ee,te,ce,ne,re,ae,le,ie,oe)}var ue=n.forwardRef(se);c.p;function de(){return(de=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var c=arguments[t];for(var n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n])}return e}).apply(this,arguments)}function je(e,t){if(null==e)return{};var c,n,r=function(e,t){if(null==e)return{};var c,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)c=a[n],t.indexOf(c)>=0||(r[c]=e[c]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)c=a[n],t.indexOf(c)>=0||Object.prototype.propertyIsEnumerable.call(e,c)&&(r[c]=e[c])}return r}var be=n.createElement("g",null,n.createElement("path",{d:"m492.009 90.635c-8.989-12.186-21.438-18.626-36-18.626-32.391 0-57.801 44.681-72.031 74.671l-60.209-27.789c-42.289-19.518-91.907-20.129-135.52 0l-60.209 27.789c-14.13-29.779-39.666-74.671-72.031-74.671-14.563 0-27.011 6.441-36 18.626-21.048 28.531-20 86.346-20 125.374 0 46.98 19.679 90.734 56.91 126.533 25.928 24.93 51.833 37.822 55.876 39.754l75.453 40.629c41.911 22.568 92.864 22.97 135.521 0l75.454-40.629c4.043-1.932 29.948-14.824 55.876-39.754 37.231-35.799 56.91-79.553 56.91-126.533 0-40.998.673-97.35-20-125.374zm-460 125.374c0-39.142 0-112 24-112 4.038 0 14.92 6.725 30.098 31.929 8.742 14.517 15.353 29.313 17.902 35.279v168.631c-28.021-19.553-72-60.354-72-123.839zm344 142.443-67.411 36.298c-32.055 17.261-71.607 18.077-105.179 0l-67.41-36.298v-180.206l65.65-30.3c33.921-15.656 73.717-16.145 108.699 0l65.65 30.3v180.206zm32-18.605v-168.631c2.549-5.965 9.16-20.762 17.902-35.279 15.178-25.204 26.061-31.929 30.098-31.929 24 0 24 72.858 24 112 0 52.365-29.755 94.414-72 123.839z"}));function he(e,t){var c=e.title,r=e.titleId,a=je(e,["title","titleId"]);return n.createElement("svg",de({id:"Layer_1",enableBackground:"new 0 0 512.011 512.011",height:24,viewBox:"0 0 512.011 512.011",width:24,xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":r},a),c?n.createElement("title",{id:r},c):null,be)}var fe=n.forwardRef(he);c.p;function Oe(){return(Oe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var c=arguments[t];for(var n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n])}return e}).apply(this,arguments)}function pe(e,t){if(null==e)return{};var c,n,r=function(e,t){if(null==e)return{};var c,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)c=a[n],t.indexOf(c)>=0||(r[c]=e[c]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)c=a[n],t.indexOf(c)>=0||Object.prototype.propertyIsEnumerable.call(e,c)&&(r[c]=e[c])}return r}var xe=n.createElement("path",{d:"m18.5 20h-13c-1.379 0-2.5-1.122-2.5-2.5v-9.5c0-4.411 3.589-8 8-8s8 3.589 8 8v.05c1.14.232 2 1.242 2 2.45v7c0 1.378-1.121 2.5-2.5 2.5zm-7.5-19c-3.859 0-7 3.14-7 7v9.5c0 .827.673 1.5 1.5 1.5h13c.827 0 1.5-.673 1.5-1.5v-7c0-.827-.673-1.5-1.5-1.5s-1.5.673-1.5 1.5v3c0 .276-.224.5-.5.5-1.379 0-2.5 1.122-2.5 2.5 0 .276-.224.5-.5.5s-.5-.224-.5-.5c0-1.76 1.306-3.221 3-3.464v-2.536c0-1.208.86-2.217 2-2.45v-.05c0-3.86-3.141-7-7-7z"}),me=n.createElement("path",{d:"m16.5 24h-9c-1.379 0-2.5-1.122-2.5-2.5v-2c0-.276.224-.5.5-.5s.5.224.5.5v2c0 .827.673 1.5 1.5 1.5h9c.827 0 1.5-.673 1.5-1.5v-2c0-.276.224-.5.5-.5s.5.224.5.5v2c0 1.378-1.121 2.5-2.5 2.5z"});function ge(e,t){var c=e.title,r=e.titleId,a=pe(e,["title","titleId"]);return n.createElement("svg",Oe({id:"_x31__px",height:24,viewBox:"0 0 24 24",width:24,xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":r},a),c?n.createElement("title",{id:r},c):null,xe,me)}var ve=n.forwardRef(ge),ye=(c.p,c(9)),we=c(22),Ee=Object(b.a)((function(e){return{root:{display:"flex",alignItems:"center",justifyContent:"center","& > svg":{margin:e.spacing(2)}},menuButton:{marginRight:e.spacing(8)}}})),Se=function(e){return Object(k.jsx)(H.a,Object(_.a)(Object(_.a)({},e),{},{children:Object(k.jsx)(ue,{})}))},Ce=function(e){return Object(k.jsx)(H.a,Object(_.a)(Object(_.a)({},e),{},{children:Object(k.jsx)(fe,{})}))},ke=function(e){return Object(k.jsx)(H.a,Object(_.a)(Object(_.a)({},e),{},{children:Object(k.jsx)(ve,{})}))},Ne=function(){var e=Ee(),t=Object(ye.f)();return Object(k.jsx)("div",{children:Object(k.jsx)(W.a,{position:"static",style:{backgroundColor:"#8d6e63"},children:Object(k.jsxs)(G.a,{className:e.root,children:[Object(k.jsx)(M.a,{color:function(){switch(t.pathname){case"/":return"default";default:return"inherit"}}(),className:e.menuButton,startIcon:Object(k.jsx)(D.a,{}),component:we.b,to:"/",children:"All Categories"}),Object(k.jsx)(M.a,{color:function(){switch(t.pathname){case"/beanies":return"default";default:return"inherit"}}(),className:e.menuButton,startIcon:Object(k.jsx)(Se,{}),component:we.b,to:"/beanies",children:"Beanies"}),Object(k.jsx)(M.a,{color:function(){switch(t.pathname){case"/facemasks":return"default";default:return"inherit"}}(),className:e.menuButton,startIcon:Object(k.jsx)(Ce,{}),component:we.b,to:"/facemasks",children:"Facemasks"}),Object(k.jsx)(M.a,{color:function(){switch(t.pathname){case"/gloves":return"default";default:return"inherit"}}(),className:e.menuButton,startIcon:Object(k.jsx)(ke,{}),component:we.b,to:"/gloves",children:"Gloves"})]})})})},Be=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),c=t[0],r=t[1],a=Object(n.useState)([]),l=Object(i.a)(a,2),o=l[0],s=l[1],b=Object(n.useState)([]),h=Object(i.a)(b,2),f=h[0],O=h[1];Object(n.useEffect)((function(){u().then((function(e){r(e)}))}),[]),Object(n.useEffect)((function(){j().then((function(e){s(e)}))}),[]),Object(n.useEffect)((function(){d().then((function(e){O(e)}))}),[]);var p=c.slice(0,6),x=f.slice(0,6),m=o.slice(0,6);return Object(k.jsxs)("div",{children:[Object(k.jsx)(Ne,{}),Object(k.jsxs)(ye.c,{children:[Object(k.jsx)(ye.a,{path:"/beanies",children:Object(k.jsx)(R,{products:p,category:"Beanies"})}),Object(k.jsx)(ye.a,{path:"/facemasks",children:Object(k.jsx)(R,{products:x,category:"Facemasks"})}),Object(k.jsx)(ye.a,{path:"/gloves",children:Object(k.jsx)(R,{products:m,category:"Gloves"})}),Object(k.jsx)(ye.a,{path:"/",children:Object(k.jsx)(F,{frontPageBeanies:p,frontPageFacemasks:x,frontPageGloves:m})})]})]})},Ie=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,133)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,a=t.getLCP,l=t.getTTFB;c(e),n(e),r(e),a(e),l(e)}))};l.a.render(Object(k.jsx)(r.a.StrictMode,{children:Object(k.jsx)(we.a,{children:Object(k.jsx)(Be,{})})}),document.getElementById("root")),Ie()}},[[98,1,2]]]);
//# sourceMappingURL=main.a4d41b7e.chunk.js.map