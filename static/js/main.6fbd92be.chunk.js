(this["webpackJsonpadmin-ui"]=this["webpackJsonpadmin-ui"]||[]).push([[0],{22:function(e,a,t){e.exports=t(33)},33:function(e,a,t){"use strict";t.r(a);var n=t(6),l=t(1),r=t.n(l),c=t(16),i=t.n(c),m=(t(27),t(17)),s=t(12),u=t(13),o=t(11),E=t(18),d=t(7),p=t(19),h=t(20),b=t(8),f=t.n(b);var g=function(e){var a=Object(l.useState)(!1),t=Object(n.a)(a,2),c=t[0],i=t[1],b=Object(l.useState)(""),g=Object(n.a)(b,2),v=(g[0],g[1]),k=Object(l.useState)(),j=Object(n.a)(k,2),O=j[0],y=j[1],N=Object(l.useState)(1),S=Object(n.a)(N,2),x=S[0],C=S[1],L=e.userlist;Object(l.useEffect)((function(){y(f()(L).slice(0).take(10).value())}),[L]);var U=L?Math.ceil(L.length/10):0;if(1===U)return null;var w=f.a.range(1,U+1);return r.a.createElement("div",null,r.a.createElement(d.a,null,r.a.createElement("div",{class:"input-group mb-3"},r.a.createElement("input",{type:"text",class:"form-control",placeholder:"Search by Name,Email or Role","aria-describedby":"basic-addon2",onChange:function(e){v(e.target.value)}}),r.a.createElement("button",{type:"button",class:"btn btn-primary"},"Search")),r.a.createElement("h3",null,"User List"),r.a.createElement(m.a,{bordered:!0,hover:!0,size:"sm",responsive:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,r.a.createElement(s.a.Check,{"aria-label":"option 1",onChange:function(e){i(e.target.checked)}})),r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Email"),r.a.createElement("th",null,"Role"),r.a.createElement("th",null,"Action"))),r.a.createElement("tbody",null,O&&O.map((function(a){return r.a.createElement("tr",{key:a.id},r.a.createElement("td",null,r.a.createElement(s.a.Check,{"aria-label":"option 1",checked:c})),r.a.createElement("td",null,a.name),r.a.createElement("td",null,a.email),r.a.createElement("td",null,a.role),r.a.createElement("td",null,r.a.createElement(E.a,null,r.a.createElement(o.a,{className:"me-2","aria-label":"First group"},r.a.createElement(u.a,{variant:"light"},r.a.createElement(p.a,null))),r.a.createElement(o.a,{className:"me-2","aria-label":"Second group"},r.a.createElement(u.a,{variant:"danger",onClick:function(){return function(a){var t=L.filter((function(e){return a!==e.id}));e.setUserList(t)}(a.id)}},r.a.createElement(h.a,{className:"delete"}))))))})))),r.a.createElement("div",null,r.a.createElement("nav",{"aria-label":"Page navigation example"},r.a.createElement("ul",{class:"pagination"},r.a.createElement("li",{class:"page-item"},r.a.createElement("a",{class:"page-link",href:"##","aria-label":"Previous"},r.a.createElement("span",{"aria-hidden":"true"},"\xab"))),r.a.createElement("li",{class:"page-item"},r.a.createElement("a",{class:"page-link",href:"##"},"Previous")),w.map((function(e){return r.a.createElement("li",{class:e===x?"page-item active":"page-item"},r.a.createElement("p",{class:"page-link",onClick:function(){return function(e){C(e);var a=10*(e-1),t=f()(L).slice(a).take(10).value();y(t)}(e)}},e))})),r.a.createElement("li",{class:"page-item"},r.a.createElement("a",{class:"page-link",href:"##"},"Next")),r.a.createElement("li",{class:"page-item"},r.a.createElement("a",{class:"page-link",href:"##","aria-label":"Next"},r.a.createElement("span",{"aria-hidden":"true"},"\xbb"))))))))},v=t(21);function k(){var e=Object(l.useState)(""),a=Object(n.a)(e,2),t=a[0],c=a[1];return Object(l.useEffect)((function(){fetch("https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json").then((function(e){return e.json()})).then((function(e){return c(e)}))}),[]),r.a.createElement("div",null,r.a.createElement(d.a,{className:"d-inline-flex justify-content-center",fluid:"md"},r.a.createElement("h1",null,"ADMIN UI")),t?r.a.createElement(g,{userlist:t,setUserList:c}):r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a,{animation:"border",role:"status"},r.a.createElement("span",{className:"visually-hidden"},"Loading..."))))}i.a.render(r.a.createElement(k,null),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.6fbd92be.chunk.js.map