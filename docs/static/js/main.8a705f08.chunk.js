(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(6),u=a.n(c),i=a(1),l=a(8),o=function(e){var t=e.setCategorias,a=Object(n.useState)(""),c=Object(i.a)(a,2),u=c[0],o=c[1];return r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),u.trim().length>2&&(t((function(e){return[u].concat(Object(l.a)(e))})),o(""))}},r.a.createElement("input",{className:"buscador",type:"text",value:u,onChange:function(e){o(e.target.value)}}))},s=a(4),m=a.n(s),p=a(7),d=function(){var e=Object(p.a)(m.a.mark((function e(t){var a,n,r,c,u;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(t),"&limit=10&api_key=V32lRXuxtdeKEH0hMGtbupiZLALWqLRu"),e.next=3,fetch(a);case 3:return n=e.sent,e.next=6,n.json();case 6:return r=e.sent,c=r.data,u=c.map((function(e){var t;return{id:e.id,title:e.title,url:null===(t=e.images)||void 0===t?void 0:t.downsized_medium.url}})),e.abrupt("return",u);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(e){e.id;var t=e.title,a=e.url;return r.a.createElement("div",{className:"card animate__animated animate__bounceIn"},r.a.createElement("img",{src:a,alt:t}),r.a.createElement("p",null,t))},g=function(e){var t=e.categoria,a=function(e){var t=Object(n.useState)({data:[],loading:!0}),a=Object(i.a)(t,2),r=a[0],c=a[1];return Object(n.useEffect)((function(){d(e).then((function(e){c({data:e,loading:!1})}))}),[e]),r}(t),c=a.data,u=a.loading;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",{className:"categoria"},t),u&&r.a.createElement("p",null,"Loading"),r.a.createElement("div",{className:"card-grid"},c.map((function(e){return r.a.createElement(f,Object.assign({key:e.id},e))}))))},E=function(){var e=Object(n.useState)(["Dragon Ball"]),t=Object(i.a)(e,2),a=t[0],c=t[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"GifExpertApp"),r.a.createElement(o,{setCategorias:c}),r.a.createElement("hr",null),r.a.createElement("ol",null,a.map((function(e){return r.a.createElement(g,{key:e,categoria:e})}))))};a(15);u.a.render(r.a.createElement(E,null),document.getElementById("root"))},9:function(e,t,a){e.exports=a(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.8a705f08.chunk.js.map