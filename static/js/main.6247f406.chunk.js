(this["webpackJsonpadmin-ui"]=this["webpackJsonpadmin-ui"]||[]).push([[0],{28:function(e,a,t){e.exports=t(37)},37:function(e,a,t){"use strict";t.r(a);var l=t(12),n=t(1),r=t.n(n),c=t(22),m=t.n(c),u=(t(33),t(23)),s=t(19),i=t(18),E=t(17),o=t(24),d=t(16),h=t(11),b=t(10),p=t(7),f=t(25),v=t(26);var N=function(e){var a=Object(n.useState)(!1),t=Object(l.a)(a,2),c=t[0],m=t[1],N=e.userlist;return r.a.createElement("div",null,r.a.createElement(b.a,null,r.a.createElement(d.a,{className:"mb-3 g-3"},r.a.createElement(h.a,{placeholder:"Search by Name,Email or Role","aria-describedby":"basic-addon1"}),r.a.createElement(d.a.Text,{id:"basic-addon2"},"Search")),r.a.createElement("h3",null,"User List"),r.a.createElement(u.a,{bordered:!0,hover:!0,size:"sm",responsive:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,r.a.createElement(s.a.Check,{"aria-label":"option 1",selectAll:c,setSelectAll:m})),r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Email"),r.a.createElement("th",null,"Role"),r.a.createElement("th",null,"Action"))),r.a.createElement("tbody",null,N&&N.map((function(e){return r.a.createElement("tr",{key:e.id},r.a.createElement("td",null,r.a.createElement(s.a.Check,{"aria-label":"option 1"})),r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.email),r.a.createElement("td",null,e.role),r.a.createElement("td",null,r.a.createElement(o.a,null,r.a.createElement(E.a,{className:"me-2","aria-label":"First group"},r.a.createElement(i.a,{variant:"light"},r.a.createElement(f.a,null))),r.a.createElement(E.a,{className:"me-2","aria-label":"Second group"},r.a.createElement(i.a,{variant:"danger"},r.a.createElement(v.a,{className:"delete"}))))))})))),r.a.createElement(p.a,{size:"md",className:"justify-content-center"},r.a.createElement(p.a.First,null),r.a.createElement(p.a.Prev,null),r.a.createElement(p.a.Item,null,1),r.a.createElement(p.a.Item,null,2),r.a.createElement(p.a.Item,null,3),r.a.createElement(p.a.Item,null,4),r.a.createElement(p.a.Item,null,5),r.a.createElement(p.a.Next,null),r.a.createElement(p.a.Last,null))))},g=t(27);function j(){var e=Object(n.useState)(""),a=Object(l.a)(e,2),t=a[0],c=a[1];return Object(n.useEffect)((function(){return fetch("https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json").then((function(e){return e.json()})).then((function(e){return c(e)})),console.log(t,"users")})),r.a.createElement("div",null,r.a.createElement(b.a,{className:"d-inline-flex justify-content-center",fluid:"md"},r.a.createElement("h1",null,"ADMIN UI")),t?r.a.createElement(N,{userlist:t}):r.a.createElement(r.a.Fragment,null,r.a.createElement(g.a,{animation:"border",role:"status"},r.a.createElement("span",{className:"visually-hidden"},"Loading..."))))}m.a.render(r.a.createElement(j,null),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.6247f406.chunk.js.map