(this.webpackJsonpwarehouse_frontend=this.webpackJsonpwarehouse_frontend||[]).push([[0],{101:function(e,t,c){"use strict";c.r(t);var r=c(0),n=c.n(r),a=c(20),l=c.n(a),o=(c(75),c(18)),i=c(120),s=c(126),u=c(127),d=c(37),j=c.n(d),b=c(131),h=c(122),p=c(123),f=c(125),O=c(124),g=c(104),x=c(34),m=c.n(x),v=function(e,t){return m.a.get("".concat("https://reaktor-warehouse-rescawen.herokuapp.com","/").concat(e,"/").concat(t)).then((function(e){return e.data}))},y=c(121),w=c(1),E=function(e){var t=e.color,c={};return c="white"===t?{borderRadius:"50%",borderStyle:"solid",width:28,height:28}:{borderRadius:"50%",backgroundColor:t,width:32,height:32},Object(w.jsx)("div",{style:c})},C=function(e){var t=e.availability;return t?"INSTOCK"===t?Object(w.jsx)("div",{children:Object(w.jsx)(b.a,{label:"In Stock",variant:"outlined",style:{color:"#558b2f",borderColor:"#7cb342",borderWidth:"2px"}})}):"LESSTHAN10"===t?Object(w.jsx)("div",{children:Object(w.jsx)(b.a,{label:"<10 in Stock",variant:"outlined",style:{color:"#ff8f00",borderColor:"#ffb300",borderWidth:"2px"}})}):"OUTOFSTOCK"===t?Object(w.jsx)("div",{children:Object(w.jsx)(b.a,{label:"Out of Stock",variant:"outlined",color:"secondary",style:{borderWidth:"2px"}})}):Object(w.jsx)("div",{children:Object(w.jsx)(b.a,{label:"Stock Status Unknown",variant:"outlined",color:"secondary",style:{borderWidth:"2px"}})}):null},k=Object(i.a)((function(e){return{left:{width:450},title:{fontSize:30},pos:{marginBottom:12},footer:{justifyContent:"space-between","& > *":{margin:e.spacing(.5)}},circleContainer:{display:"flex",justifyContent:"left","& > *":{margin:e.spacing(.5)}},cardAction:{display:"block",textAlign:"initial"}}})),S=function(e){var t=k(),c=!1;return e.showList.forEach((function(t){t[0]===e.product.id&&!0===t[1]&&(c=!0)})),c?Object(w.jsx)("div",{children:Object(w.jsx)(y.a,{container:e.container,children:Object(w.jsxs)(h.a,{children:[Object(w.jsxs)(p.a,{children:[Object(w.jsx)(O.a,{className:t.title,color:"textSecondary",display:"initial",gutterBottom:!0,children:e.product.id.toUpperCase()}),Object(w.jsxs)(O.a,{variant:"h3",component:"h2",children:["Name: ",e.product.name]}),Object(w.jsxs)(O.a,{className:t.pos,color:"textSecondary",children:["Manufacturer: ",e.product.manufacturer]})]}),Object(w.jsxs)(f.a,{className:t.footer,children:[Object(w.jsx)("div",{className:t.circleContainer,children:e.product.color.map((function(e){return Object(w.jsx)(E,{color:e},e)}))}),Object(w.jsx)(C,{availability:e.availability}),Object(w.jsx)(b.a,{label:e.product.price+" \u20ac"})]})]},e.product.id)})}):null},N=Object(i.a)((function(e){return{root:{width:275,padding:10},title:{fontSize:14},pos:{marginBottom:12},footer:{justifyContent:"space-between","& > *":{margin:e.spacing(.5)}},circleContainer:{display:"flex",justifyContent:"left","& > *":{margin:e.spacing(.5)}},cardAction:{display:"block",textAlign:"initial"}}})),B=function(e){var t=Object(r.useState)(null),c=Object(o.a)(t,2),n=c[0],a=c[1],l=N();return Object(r.useEffect)((function(){v(e.product.manufacturer,e.product.id.toUpperCase()).then((function(e){var t=e.DATAPAYLOAD.split("\n")[2].split("<")[1];a(t.split(">")[1])}))}),[]),e.allCategory?Object(w.jsx)("div",{className:l.root,children:Object(w.jsxs)(h.a,{children:[Object(w.jsxs)(p.a,{children:[Object(w.jsx)(O.a,{className:l.title,color:"textSecondary",display:"initial",gutterBottom:!0,children:e.product.id.toUpperCase()}),Object(w.jsx)(O.a,{variant:"h5",component:"h2",children:e.product.name}),Object(w.jsx)(O.a,{className:l.pos,color:"textSecondary",children:e.product.manufacturer})]}),Object(w.jsxs)(f.a,{className:l.footer,children:[Object(w.jsx)("div",{className:l.circleContainer,children:e.product.color.map((function(e){return Object(w.jsx)(E,{color:e},e)}))}),Object(w.jsx)(C,{availability:n}),Object(w.jsx)(b.a,{label:e.product.price+" \u20ac"})]})]},e.product.id)}):Object(w.jsxs)("div",{className:l.root,children:[Object(w.jsx)(h.a,{children:Object(w.jsxs)(g.a,{className:l.cardAction,onClick:function(){return e.selectProduct(e.product.id)},children:[Object(w.jsxs)(p.a,{children:[Object(w.jsx)(O.a,{className:l.title,color:"textSecondary",display:"initial",gutterBottom:!0,children:e.product.id.toUpperCase()}),Object(w.jsx)(O.a,{variant:"h5",component:"h2",children:e.product.name}),Object(w.jsx)(O.a,{className:l.pos,color:"textSecondary",children:e.product.manufacturer})]}),Object(w.jsxs)(f.a,{className:l.footer,children:[Object(w.jsx)("div",{className:l.circleContainer,children:e.product.color.map((function(e){return Object(w.jsx)(E,{color:e},e)}))}),Object(w.jsx)(C,{availability:n}),Object(w.jsx)(b.a,{label:e.product.price+" \u20ac"})]})]})},e.product.id),Object(w.jsx)("div",{children:Object(w.jsx)(S,{product:e.product,showList:e.showList,container:e.container,availability:n})})]})},I=Object(i.a)((function(e){return{root:{display:"flex",flexWrap:"wrap",justifyContent:"center",backgroundColor:"#fafafa",margin:"25px"},gridList:{width:300,height:700},header:{display:"flex",alignItems:"center",justifyContent:"center"}}})),P=function(e){var t=I();return Object(w.jsx)("div",{className:t.root,children:Object(w.jsxs)(s.a,{cellHeight:250,className:t.gridList,children:[Object(w.jsxs)(u.a,{cols:2,style:{height:"auto"},children:[Object(w.jsx)("h1",{style:{textAlign:"center"},children:e.category}),Object(w.jsx)("div",{className:t.header,children:Object(w.jsx)(b.a,{icon:Object(w.jsx)(j.a,{}),label:"Search placeholder..."})})]},"Subheader"),e.products.map((function(e){return Object(w.jsx)(B,{product:e,allCategory:!0},e.id)}))]})})},A=function(e){return Object(w.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",margin:"25px"},children:[Object(w.jsx)(P,{products:e.frontPageBeanies,category:"Beanies"}),Object(w.jsx)(P,{products:e.frontPageFacemasks,category:"Facemasks"}),Object(w.jsx)(P,{products:e.frontPageGloves,category:"Gloves"})]})},L=Object(i.a)((function(e){return{root:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",backgroundColor:"#fafafa",margin:"25px"},popOut:{width:500,height:700,margin:"25px"},gridList:{width:600,height:700},header:{display:"flex",alignItems:"center",justifyContent:"center"}}})),z=function(e){var t=L(),c=Object(r.useState)(e.products.map((function(e){return[e.id,!1]}))),n=Object(o.a)(c,2),a=n[0],l=n[1],i=Object(r.useRef)(null);console.log(a),console.log(e.category),console.log(e.products);var d=function(e){l(a.map((function(t){return t[0]===e?[t[0],!0]:[t[0],!1]})))};return Object(w.jsxs)("div",{className:t.root,children:[Object(w.jsx)("div",{ref:i,className:t.popOut}),Object(w.jsxs)(s.a,{cellHeight:250,className:t.gridList,children:[Object(w.jsxs)(u.a,{cols:2,style:{height:"auto"},children:[Object(w.jsx)("h1",{style:{textAlign:"center"},children:e.category}),Object(w.jsx)("div",{className:t.header,children:Object(w.jsx)(b.a,{icon:Object(w.jsx)(j.a,{}),label:"Search placeholder..."})})]},"Subheader"),e.products.map((function(e){return Object(w.jsx)(B,{product:e,container:i.current,showList:a,selectProduct:d},e.id)}))]})]})},F=c(25),T=c(128),R=c(129),_=c(130),M=c(59),U=c.n(M),W=c(61);function G(){return(G=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var c=arguments[t];for(var r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r])}return e}).apply(this,arguments)}function D(e,t){if(null==e)return{};var c,r,n=function(e,t){if(null==e)return{};var c,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)c=a[r],t.indexOf(c)>=0||(n[c]=e[c]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)c=a[r],t.indexOf(c)>=0||Object.prototype.propertyIsEnumerable.call(e,c)&&(n[c]=e[c])}return n}var H=r.createElement("g",null,r.createElement("g",null,r.createElement("path",{d:"M414.001,305.071v-32.7c-0.5-86.4-57.2-162.4-140-187.3c6.8-33.6-15-66.4-48.6-73.1c-33.6-6.8-66.4,15-73.1,48.6 c-2,10-1.5,20.3,1.4,30.1c-37.6,11.4-69.5,33-93,62.9c-26,33.2-39.7,74.4-39.7,119.3v31.9c-13,7.2-21.1,20.9-21,35.8v41.7 c0.1,22.6,18.5,40.9,41.1,40.9h0.1h351.4c22.6,0.2,41.1-18.1,41.3-40.7v-0.1v-41.7 C434.001,326.071,426.401,312.571,414.001,305.071z M174.101,57.271c6.3-16.1,21.8-26.6,39-26.6c23.2,0,42,18.8,42.1,42.1 c0,5.3-1,10.6-3,15.6c-8.6,21.6-33.1,32.1-54.6,23.5C176.001,103.271,165.501,78.771,174.101,57.271z M41.001,272.871 c0-79.3,47.5-142.9,121.7-164c19.9,27.9,58.7,34.3,86.5,14.4c7.2-5.1,13.2-11.8,17.6-19.4c34.9,10.3,65.8,31,88.5,59.3 c24.8,31,38.4,69.5,38.6,109.2v27c-1,0-1-0.3-1.3-0.3h-351.3c-0.1,0-0.3,0.3-0.3,0.3V272.871z M414.001,382.171L414.001,382.171 c-0.1,11.6-9.5,20.9-21.1,20.9c-0.1,0-0.1,0-0.2,0h-351.4c-11.6,0.2-21.1-9.1-21.3-20.7c0-0.1,0-0.1,0-0.2v-41.7 c0-9.2,5.9-17.3,14.6-20.1c0,0,0.1-0.1,0.1-0.2c2.1-0.8,4.4-1.2,6.6-1.2h351.4c2.3,0,4.6,0.4,6.7,1.3c0.1,0,0.1,0.1,0.2,0.1 c8.6,2.9,14.4,11,14.4,20.1V382.171z"}))),J=r.createElement("g",null),K=r.createElement("g",null),V=r.createElement("g",null),X=r.createElement("g",null),Y=r.createElement("g",null),q=r.createElement("g",null),Q=r.createElement("g",null),Z=r.createElement("g",null),$=r.createElement("g",null),ee=r.createElement("g",null),te=r.createElement("g",null),ce=r.createElement("g",null),re=r.createElement("g",null),ne=r.createElement("g",null),ae=r.createElement("g",null);function le(e,t){var c=e.title,n=e.titleId,a=D(e,["title","titleId"]);return r.createElement("svg",G({id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",height:24,viewBox:"0 0 433.902 433.902",width:24,style:{enableBackground:"new 0 0 433.902 433.902"},xmlSpace:"preserve",ref:t,"aria-labelledby":n},a),c?r.createElement("title",{id:n},c):null,H,J,K,V,X,Y,q,Q,Z,$,ee,te,ce,re,ne,ae)}var oe=r.forwardRef(le);c.p;function ie(){return(ie=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var c=arguments[t];for(var r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r])}return e}).apply(this,arguments)}function se(e,t){if(null==e)return{};var c,r,n=function(e,t){if(null==e)return{};var c,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)c=a[r],t.indexOf(c)>=0||(n[c]=e[c]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)c=a[r],t.indexOf(c)>=0||Object.prototype.propertyIsEnumerable.call(e,c)&&(n[c]=e[c])}return n}var ue=r.createElement("g",null,r.createElement("path",{d:"m492.009 90.635c-8.989-12.186-21.438-18.626-36-18.626-32.391 0-57.801 44.681-72.031 74.671l-60.209-27.789c-42.289-19.518-91.907-20.129-135.52 0l-60.209 27.789c-14.13-29.779-39.666-74.671-72.031-74.671-14.563 0-27.011 6.441-36 18.626-21.048 28.531-20 86.346-20 125.374 0 46.98 19.679 90.734 56.91 126.533 25.928 24.93 51.833 37.822 55.876 39.754l75.453 40.629c41.911 22.568 92.864 22.97 135.521 0l75.454-40.629c4.043-1.932 29.948-14.824 55.876-39.754 37.231-35.799 56.91-79.553 56.91-126.533 0-40.998.673-97.35-20-125.374zm-460 125.374c0-39.142 0-112 24-112 4.038 0 14.92 6.725 30.098 31.929 8.742 14.517 15.353 29.313 17.902 35.279v168.631c-28.021-19.553-72-60.354-72-123.839zm344 142.443-67.411 36.298c-32.055 17.261-71.607 18.077-105.179 0l-67.41-36.298v-180.206l65.65-30.3c33.921-15.656 73.717-16.145 108.699 0l65.65 30.3v180.206zm32-18.605v-168.631c2.549-5.965 9.16-20.762 17.902-35.279 15.178-25.204 26.061-31.929 30.098-31.929 24 0 24 72.858 24 112 0 52.365-29.755 94.414-72 123.839z"}));function de(e,t){var c=e.title,n=e.titleId,a=se(e,["title","titleId"]);return r.createElement("svg",ie({id:"Layer_1",enableBackground:"new 0 0 512.011 512.011",height:24,viewBox:"0 0 512.011 512.011",width:24,xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":n},a),c?r.createElement("title",{id:n},c):null,ue)}var je=r.forwardRef(de);c.p;function be(){return(be=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var c=arguments[t];for(var r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r])}return e}).apply(this,arguments)}function he(e,t){if(null==e)return{};var c,r,n=function(e,t){if(null==e)return{};var c,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)c=a[r],t.indexOf(c)>=0||(n[c]=e[c]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)c=a[r],t.indexOf(c)>=0||Object.prototype.propertyIsEnumerable.call(e,c)&&(n[c]=e[c])}return n}var pe=r.createElement("path",{d:"m18.5 20h-13c-1.379 0-2.5-1.122-2.5-2.5v-9.5c0-4.411 3.589-8 8-8s8 3.589 8 8v.05c1.14.232 2 1.242 2 2.45v7c0 1.378-1.121 2.5-2.5 2.5zm-7.5-19c-3.859 0-7 3.14-7 7v9.5c0 .827.673 1.5 1.5 1.5h13c.827 0 1.5-.673 1.5-1.5v-7c0-.827-.673-1.5-1.5-1.5s-1.5.673-1.5 1.5v3c0 .276-.224.5-.5.5-1.379 0-2.5 1.122-2.5 2.5 0 .276-.224.5-.5.5s-.5-.224-.5-.5c0-1.76 1.306-3.221 3-3.464v-2.536c0-1.208.86-2.217 2-2.45v-.05c0-3.86-3.141-7-7-7z"}),fe=r.createElement("path",{d:"m16.5 24h-9c-1.379 0-2.5-1.122-2.5-2.5v-2c0-.276.224-.5.5-.5s.5.224.5.5v2c0 .827.673 1.5 1.5 1.5h9c.827 0 1.5-.673 1.5-1.5v-2c0-.276.224-.5.5-.5s.5.224.5.5v2c0 1.378-1.121 2.5-2.5 2.5z"});function Oe(e,t){var c=e.title,n=e.titleId,a=he(e,["title","titleId"]);return r.createElement("svg",be({id:"_x31__px",height:24,viewBox:"0 0 24 24",width:24,xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":n},a),c?r.createElement("title",{id:n},c):null,pe,fe)}var ge=r.forwardRef(Oe),xe=(c.p,c(9)),me=c(23),ve=Object(i.a)((function(e){return{root:{display:"flex",alignItems:"center",justifyContent:"center","& > svg":{margin:e.spacing(2)}},menuButton:{marginRight:e.spacing(8)}}})),ye=function(e){return Object(w.jsx)(W.a,Object(F.a)(Object(F.a)({},e),{},{children:Object(w.jsx)(oe,{})}))},we=function(e){return Object(w.jsx)(W.a,Object(F.a)(Object(F.a)({},e),{},{children:Object(w.jsx)(je,{})}))},Ee=function(e){return Object(w.jsx)(W.a,Object(F.a)(Object(F.a)({},e),{},{children:Object(w.jsx)(ge,{})}))},Ce=function(){var e=ve(),t=Object(xe.f)();return Object(w.jsx)("div",{children:Object(w.jsx)(T.a,{position:"static",style:{backgroundColor:"#8d6e63"},children:Object(w.jsxs)(R.a,{className:e.root,children:[Object(w.jsx)(_.a,{color:function(){switch(t.pathname){case"/":return"default";default:return"inherit"}}(),className:e.menuButton,startIcon:Object(w.jsx)(U.a,{}),component:me.b,to:"/",children:"All Categories"}),Object(w.jsx)(_.a,{color:function(){switch(t.pathname){case"/beanies-category":return"default";default:return"inherit"}}(),className:e.menuButton,startIcon:Object(w.jsx)(ye,{}),component:me.b,to:"/beanies-category",children:"Beanies"}),Object(w.jsx)(_.a,{color:function(){switch(t.pathname){case"/facemasks-category":return"default";default:return"inherit"}}(),className:e.menuButton,startIcon:Object(w.jsx)(we,{}),component:me.b,to:"/facemasks-category",children:"Facemasks"}),Object(w.jsx)(_.a,{color:function(){switch(t.pathname){case"/gloves-category":return"default";default:return"inherit"}}(),className:e.menuButton,startIcon:Object(w.jsx)(Ee,{}),component:me.b,to:"/gloves-category",children:"Gloves"})]})})})},ke=function(e){var t=Object(r.useState)([]),c=Object(o.a)(t,2),n=c[0],a=c[1];return[n,{getAll:function(){return m.a.get("https://reaktor-warehouse-rescawen.herokuapp.com"+e).then((function(e){return a(e.data)}))}}]},Se=function(){var e=ke("/beanies"),t=Object(o.a)(e,2),c=t[0],n=t[1],a=ke("/gloves"),l=Object(o.a)(a,2),i=l[0],s=l[1],u=ke("/facemasks"),d=Object(o.a)(u,2),j=d[0],b=d[1];Object(r.useEffect)((function(){n.getAll()}),[]),Object(r.useEffect)((function(){s.getAll()}),[]),Object(r.useEffect)((function(){b.getAll()}),[]);var h=c.slice(0,6),p=j.slice(0,6),f=i.slice(0,6);return Object(w.jsxs)("div",{children:[Object(w.jsx)(Ce,{}),Object(w.jsxs)(xe.c,{children:[Object(w.jsx)(xe.a,{path:"/beanies-category",children:Object(w.jsx)(z,{products:h,category:"Beanies"})}),Object(w.jsx)(xe.a,{path:"/facemasks-category",children:Object(w.jsx)(z,{products:p,category:"Facemasks"})}),Object(w.jsx)(xe.a,{path:"/gloves-category",children:Object(w.jsx)(z,{products:f,category:"Gloves"})}),Object(w.jsx)(xe.a,{path:"/",children:Object(w.jsx)(A,{frontPageBeanies:h,frontPageFacemasks:p,frontPageGloves:f})})]})]})},Ne=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,133)).then((function(t){var c=t.getCLS,r=t.getFID,n=t.getFCP,a=t.getLCP,l=t.getTTFB;c(e),r(e),n(e),a(e),l(e)}))};l.a.render(Object(w.jsx)(n.a.StrictMode,{children:Object(w.jsx)(me.a,{children:Object(w.jsx)(Se,{})})}),document.getElementById("root")),Ne()},75:function(e,t,c){}},[[101,1,2]]]);
//# sourceMappingURL=main.aea96c46.chunk.js.map