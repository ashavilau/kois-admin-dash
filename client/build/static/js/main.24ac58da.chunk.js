(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{164:function(e,t,a){},241:function(e,t,a){e.exports=a.p+"static/media/scvlogo.001b21b6.png"},242:function(e,t,a){e.exports=a.p+"static/media/koislogo.e5789706.png"},248:function(e,t,a){e.exports=a(504)},504:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(5),i=a.n(l),o=a(26),c=(a(253),a(164),a(506)),s=a(510),m=a(8),u=a(511),p=a(42),d=a(53),f=r.a.createContext,g=r.a.useContext,h=r.a.useState,E=f(null);function v(){var e=g(E),t=e.style,a=e.visible,n=e.toggleStyle,l=e.toggleVisible;return r.a.createElement("div",null,r.a.createElement("p",null,"The theme is ",r.a.createElement("em",null,t)," and state of visibility is",r.a.createElement("em",null," ",a.toString())),r.a.createElement("button",{onClick:n},"Change Theme"),r.a.createElement("button",{onClick:l},"Change Visibility"))}var y=function(){var e=h("light"),t=Object(o.a)(e,2),a=t[0],n=t[1],l=h(!0),i=Object(o.a)(l,2),c=i[0],s=i[1];return r.a.createElement(E.Provider,{value:{style:a,visible:c,toggleStyle:function(){n((function(e){return"light"===e?"dark":"light"}))},toggleVisible:function(){s((function(e){return!e}))}}},r.a.createElement(v,null))},b=a(507),k=a(87),w=a(52),x=function(e){var t=e.title,a=e.link,n=e.icon,l=e.css,i=e.shape;return r.a.createElement(r.a.Fragment,null,r.a.createElement(p.b,{to:a},r.a.createElement(w.a,{type:l||"primary",icon:n,shape:i||"round",size:"large"},t)))},j=b.a.Meta,I=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(x,{title:"Dodaj to\u010dko",link:"/new/point",icon:"plus"}),r.a.createElement("hr",null),r.a.createElement("div",{style:{display:"flex",flexFlow:"row wrap",position:"relative"}},[1,2,3,4,5,6,7,8].map((function(e,t){return r.a.createElement(b.a,{key:t,hoverable:!0,style:{flex:"0 1 calc(25% - 16px)",margin:"8px"},cover:r.a.createElement("img",{src:"https://geospatialmedia.s3.amazonaws.com/wp-content/uploads/2018/11/location-tech.jpg"})},r.a.createElement(j,{title:"Random location"}),r.a.createElement("hr",null),r.a.createElement(k.a,{title:"Podroben ogled"},r.a.createElement(w.a,{style:{float:"right",marginLeft:"10px"},type:"secondary",shape:"circle",icon:"fullscreen",size:"large",href:"/details/point/".concat(t)})),r.a.createElement(k.a,{title:"Uredi"},r.a.createElement(w.a,{style:{float:"right"},type:"primary",shape:"circle",icon:"edit",size:"large",href:"/edit/point/".concat(t)})))}))))},T=a(508),P=a(505),D=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(x,{title:"Dodaj administratorja",link:"/new/admin",icon:"plus"}),r.a.createElement("hr",null),r.a.createElement(T.a,{itemLayout:"horizontal",dataSource:[{title:"Ant Design Title 1"},{title:"Ant Design Title 2"},{title:"Ant Design Title 3"},{title:"Ant Design Title 4"}],renderItem:function(e){return r.a.createElement(T.a.Item,null,r.a.createElement(T.a.Item.Meta,{avatar:r.a.createElement(P.a,{src:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"}),title:r.a.createElement("a",{href:"https://ant.design"},e.title),description:"Ant Design, a design language for background applications, is refined by Ant UED Team"}))}}))},F=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(x,{title:"Dodaj zahtevek",link:"/new/task",icon:"plus"}),r.a.createElement("hr",null),r.a.createElement(T.a,{itemLayout:"horizontal",dataSource:[{title:"Ant Design Title 1"},{title:"Ant Design Title 2"},{title:"Ant Design Title 3"},{title:"Ant Design Title 4"}],renderItem:function(e){return r.a.createElement(T.a.Item,null,r.a.createElement(T.a.Item.Meta,{avatar:r.a.createElement(P.a,{src:"https://cdn0.iconfinder.com/data/icons/education-gamification/1000/Task_Complete-512.png"}),title:r.a.createElement("a",{href:"https://ant.design"},e.title),description:"Ant Design, a design language for background applications, is refined by Ant UED Team"}))}}))},O=function(){return r.a.createElement("div",null,"serbus")},S=a(244),A=a(509),C=a(232),z=a.n(C),q=a(512),R=function(e){var t=e.content,a=e.toggle,n=e.visibility,l=e.title,i=e.confirm;return r.a.createElement(q.a,{title:l,visible:n,onOk:i||a,onCancel:a,cancelButtonProps:{style:{display:"none"}},width:"50vw"},t)},N=function(e){var t=e.type,a=Object(n.useState)(!1),l=Object(o.a)(a,2),i=l[0],c=l[1],s=Object(n.useState)(null),u=Object(o.a)(s,2),p=u[0],d=u[1],f=Object(n.useState)({lat:46.4441,lng:15.197}),g=Object(o.a)(f,2),h=g[0],E=g[1],v=Object(n.useState)([]),y=Object(o.a)(v,2),b=y[0],k=y[1],x=Object(n.useState)({title:"",images:"",description:""}),j=Object(o.a)(x,2),I=j[0],D=j[1],F=function(e){var t=e.position;e.address,e.places;E(t)},O=function(){return c(!i)};return i?r.a.createElement(R,{title:{pointForm:"Obrazec to\u010dke",locationPicker:"Izbirnik lokacije"}[p],content:function(){switch(p){case"locationPicker":return r.a.createElement(z.a,{containerElement:r.a.createElement("div",{style:{height:"100%"}}),mapElement:r.a.createElement("div",{style:{height:"400px"}}),defaultPosition:h,onChange:F});case"pointForm":return r.a.createElement("form",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"exampleInputEmail1",className:"bmd-label-floating"},"Naslov"),r.a.createElement("input",{type:"text",className:"form-control",value:I.title,onChange:function(e){D({title:e.target.value,images:I.images,description:I.description})}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"exampleInputEmail1",className:"bmd-label-floating"},"Povezave slik"),r.a.createElement("textarea",{className:"form-control",value:I.images,onChange:function(e){D({title:I.title,images:e.target.value,description:I.description})}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"exampleInputEmail1",className:"bmd-label-floating"},"Opis"),r.a.createElement("textarea",{className:"form-control",value:I.description,onChange:function(e){D({title:I.title,images:I.images,description:e.target.value})}})));default:return"<p>Pri\u0161lo je do napake!</p>"}}(),visibility:i,toggle:O,confirm:function(){if("pointForm"===p){var e=I.title,t=I.images,a=I.description;k([].concat(Object(S.a)(b),[{title:e,description:a,images:t.split("\n")}])),D({title:"",images:"",description:""})}c(!1)}}):r.a.createElement(A.a,{style:{minWidth:"50%"}},r.a.createElement(A.a.Item,null,r.a.createElement(w.a,{onClick:function(){O(),d("locationPicker")},icon:"select",shape:"round",htmlType:"button",className:"login-form-button"},"Izberi lokacijo"),r.a.createElement("span",null," ",r.a.createElement(m.a,{type:"environment",style:{color:"#66c"}})," zemljepisna dol\u017eina: ",r.a.createElement("b",null,h.lng)," zemljepisna \u0161irina:"," ",r.a.createElement("b",null,h.lat)),r.a.createElement("hr",null)),r.a.createElement(A.a.Item,null,r.a.createElement(w.a,{icon:"plus",shape:"round",onClick:function(){O(),d("pointForm")}},"Dodaj zavihek"),r.a.createElement(T.a,{itemLayout:"horizontal",dataSource:b,renderItem:function(e){return r.a.createElement(T.a.Item,null,r.a.createElement(T.a.Item.Meta,{avatar:r.a.createElement(P.a,{src:"https://cdn0.iconfinder.com/data/icons/education-gamification/1000/Task_Complete-512.png"}),title:e.title,description:e.description}))}}),r.a.createElement("hr",null)),r.a.createElement(A.a.Item,null,r.a.createElement(w.a,{onClick:function(){console.log(b,h)},type:"primary",icon:"environment",shape:"round",htmlType:"submit",className:"login-form-button"},"edit"==t?"Posodobi":"Dodaj")))},U=a(17),_=a.n(U),B=a(513),H=a(238),L=a(239),V=a(61),W=a.n(V),M=function(){function e(){Object(H.a)(this,e)}return Object(L.a)(e,null,[{key:"register",value:function(e){var t,a,n,r;return _.a.async((function(l){for(;;)switch(l.prev=l.next){case 0:return t=e.fullname,a=e.email,n=e.password,r=e._AUTH,l.abrupt("return",new Promise((function(e,l){return _.a.async((function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,_.a.awrap(W.a.post("/api/auth/register",{params:{name:t,email:a,password:n},headers:{Authorization:"Token ".concat(r),"Content-Type":"application/x-www-form-urlencoded"}}).then(e).catch(l));case 2:case"end":return i.stop()}}))})));case 2:case"end":return l.stop()}}))}},{key:"login",value:function(e){var t,a;return _.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.email,a=e.password,console.log("23",t,a),n.abrupt("return",new Promise((function(e,n){return _.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,_.a.awrap(W.a.post("/api/auth/login",{email:t,password:a}).then(e).catch(n));case 2:case"end":return r.stop()}}))})));case 3:case"end":return n.stop()}}))}},{key:"delUser",value:function(e,t){return _.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",new Promise((function(a,n){return _.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,_.a.awrap(W.a.post("/api/auth/delete-user/".concat(e),{headers:{Authorization:"Token ".concat(t),"Content-Type":"application/x-www-form-urlencoded"}}).then(a).catch(n));case 2:case"end":return r.stop()}}))})));case 1:case"end":return a.stop()}}))}},{key:"getUser",value:function(e,t){return _.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",new Promise((function(a,n){return _.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,_.a.awrap(W.a.get("/api/auth/user-profile/".concat(e),{headers:{Authorization:"Token ".concat(t),"Content-Type":"application/x-www-form-urlencoded"}}).then(a).catch(n));case 2:case"end":return r.stop()}}))})));case 1:case"end":return a.stop()}}))}},{key:"getUsers",value:function(e){return _.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,a){return _.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,_.a.awrap(W.a.get("/api/auth/users",{headers:{Authorization:"Token ".concat(e),"Content-Type":"application/x-www-form-urlencoded"}}).then(t).catch(a));case 2:case"end":return n.stop()}}))})));case 1:case"end":return t.stop()}}))}},{key:"updateUser",value:function(e,t){return _.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",new Promise((function(a,n){return _.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,_.a.awrap(W.a.put("/api/auth/update-user/".concat(e),t).then(a).catch(n));case 2:case"end":return r.stop()}}))})));case 1:case"end":return a.stop()}}))}}]),e}();var J=A.a.create({name:"admin"})((function(e){var t=e.form,a=e.type,l=Object(n.useState)(!1),i=Object(o.a)(l,2),c=i[0],s=i[1],u=t.getFieldDecorator;return r.a.createElement(A.a,{style:{width:"50%",minWidth:"300px"},onSubmit:function(e){e.preventDefault(),t.validateFieldsAndScroll((function(e,t){var a,n,r,l;return _.a.async((function(i){for(;;)switch(i.prev=i.next){case 0:if(e){i.next=7;break}return a=t.fullname,n=t.email,r=t.password,i.next=4,_.a.awrap(M.register({fullname:a,email:n,password:r,_AUTH:localStorage.getItem("_kToken")}));case 4:l=i.sent,console.log(l),console.log("Received values of form: ",t);case 7:case"end":return i.stop()}}))}))}},r.a.createElement(A.a.Item,{label:"ime & priimek"},u("fullname",{rules:[{required:!0,message:"Prosimo vnesite va\u0161e ime & priimek!"}]})(r.a.createElement(B.a,{prefix:r.a.createElement(m.a,{type:"user",style:{color:"rgba(0,0,0,.25)"}})}))),r.a.createElement(A.a.Item,{label:"e-po\u0161ta"},u("email",{rules:[{type:"email",message:"Neveljavna e-po\u0161ta!"},{required:!0,message:"Prosimo vnesite va\u0161o e-po\u0161to!"}]})(r.a.createElement(B.a,{prefix:r.a.createElement(m.a,{type:"mail",style:{color:"rgba(0,0,0,.25)"}})}))),r.a.createElement(A.a.Item,{label:"geslo",hasFeedback:!0},u("password",{rules:[{required:!0,message:"Prosimo vnesite va\u0161e geslo!"},{validator:function(e,a,n){a&&c&&t.validateFields(["confirm"],{force:!0}),n()}}]})(r.a.createElement(B.a.Password,{prefix:r.a.createElement(m.a,{type:"lock",style:{color:"rgba(0,0,0,.25)"}})}))),r.a.createElement(A.a.Item,{label:"potrdi geslo",hasFeedback:!0},u("confirm",{rules:[{required:!0,message:"Prosimo ponovite geslo!"},{validator:function(e,a,n){a&&a!==t.getFieldValue("password")?n("Two passwords that you enter is inconsistent!"):n()}}]})(r.a.createElement(B.a.Password,{prefix:r.a.createElement(m.a,{type:"lock",style:{color:"rgba(0,0,0,.25)"}}),onBlur:function(e){var t=e.target.value;s(c||!!t)}}))),r.a.createElement(A.a.Item,null,r.a.createElement(w.a,{type:"primary",shape:"round",icon:"user",htmlType:"submit"},"edit"==a?"Posodobi":"Dodaj")))})),X=B.a.TextArea;var K=A.a.create({name:"task"})((function(e){var t=e.form,a=e.type,n=t.getFieldDecorator;return r.a.createElement(A.a,{style:{width:"50%",minWidth:"300px"},onSubmit:function(e){e.preventDefault(),t.validateFieldsAndScroll((function(e,t){e||console.log("Received values of form: ",t)}))}},r.a.createElement(A.a.Item,{label:"naslov",hasFeedback:!0},n("title",{rules:[{required:!0,message:"Prosimo vnesite naslov!"}]})(r.a.createElement(B.a,{prefix:r.a.createElement(m.a,{type:"file-text",style:{color:"rgba(0,0,0,.25)"}})}))),r.a.createElement(A.a.Item,{label:"opis",hasFeedback:!0},n("description",{rules:[{required:!0,message:"Prosimo vnesite opis!"}]})(r.a.createElement(X,{rows:4}))),r.a.createElement(A.a.Item,null,r.a.createElement(w.a,{type:"primary",icon:"file",shape:"round",htmlType:"submit",className:"login-form-button"},"edit"==a?"Posodobi":"Dodaj")))})),Y=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,"indepth view for point"))};function Z(e,t){localStorage.getItem("_kToken")||t({nextPathname:e.location.pathname},"/login")}var $=function(){var e=[{path:"/login",component:r.a.createElement(y,null),authRequired:!1},{path:"/points",component:r.a.createElement(I,null),authRequired:!0},{path:"/admins",component:r.a.createElement(D,null),authRequired:!0},{path:"/documentation",component:r.a.createElement(O,null),authRequired:!1},{path:"/tasks",component:r.a.createElement(F,null),authRequired:!0},{path:"/new/point",component:r.a.createElement(N,{type:"new"}),authRequired:!0},{path:"/new/admin",component:r.a.createElement(J,{type:"new"}),authRequired:!0},{path:"/new/task",component:r.a.createElement(K,{type:"new"}),authRequired:!0},{path:"/edit/point/:id",component:r.a.createElement(N,{type:"edit"}),authRequired:!0},{path:"/edit/admin/:id",component:r.a.createElement(J,{type:"edit"}),authRequired:!0},{path:"/edit/task/:id",component:r.a.createElement(K,{type:"edit"}),authRequired:!0},{path:"/details/point/:id",component:r.a.createElement(Y,null),authRequired:!0}];return r.a.createElement(d.c,null,e.map((function(e){var t=e.path,a=e.component,n=e.authRequired;return r.a.createElement(d.a,{key:t,path:t,onEnter:!n||Z},a)})))},G=a(241),Q=a.n(G),ee=a(242),te=a.n(ee),ae=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{padding:20}},r.a.createElement("img",{style:{width:"100%",marginBottom:15},src:Q.a}),r.a.createElement("img",{style:{width:"100%",padding:15,paddingBottom:0},src:te.a})),r.a.createElement("hr",null))},ne=a(162),re=function(e){var t=e.title,a=e.link,n=e.icon;return r.a.createElement(r.a.Fragment,null,r.a.createElement(p.b,{to:a}),r.a.createElement(m.a,{type:n}),r.a.createElement("span",null,t))},le=function(){return r.a.createElement(ne.a,{theme:"dark",style:{background:"#345"},mode:"inline"},r.a.createElement(ne.a.Item,{key:"/points"},r.a.createElement(re,{link:"/points",title:"To\u010dke",icon:"environment"})),r.a.createElement(ne.a.Item,{key:"/admins"},r.a.createElement(re,{link:"/admins",title:"Administratorji",icon:"user"})),r.a.createElement(ne.a.Item,{key:"/documentation"},r.a.createElement(re,{link:"/documentation",title:"Dokumentacija",icon:"file-search"})),r.a.createElement(ne.a.Item,{key:"/tasks"},r.a.createElement(re,{link:"/tasks",title:"Zahtevki",icon:"pushpin"})),r.a.createElement(ne.a.Item,{key:"/login"},r.a.createElement(re,{link:"/login",title:"Odjava",icon:"logout"})))},ie=function(){return r.a.createElement(ne.a,{theme:"dark",style:{background:"#345"},mode:"inline"},r.a.createElement(ne.a.Item,{key:"/points"},r.a.createElement(re,{link:"/points",title:"To\u010dke",icon:"environment"})),r.a.createElement(ne.a.Item,{key:"/documentation"},r.a.createElement(re,{link:"/documentation",title:"Dokumentacija",icon:"file-search"})),r.a.createElement(ne.a.Item,{key:"/login"},r.a.createElement(re,{link:"/login",title:"Prijava",icon:"login"})))},oe=c.a.Header,ce=c.a.Content,se=c.a.Footer,me=c.a.Sider,ue=s.a.Title;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement((function(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),a=t[0],l=t[1],i=Object(n.useState)(localStorage.getItem("_kToken")||void 0),s=Object(o.a)(i,2),d=s[0];s[1];return r.a.createElement(c.a,{style:{minHeight:"100vh"}},r.a.createElement(p.a,null,r.a.createElement(me,{style:{background:"#345"},width:"300",collapsible:!0,collapsed:a,onCollapse:l},!a&&r.a.createElement(ae,null),d?r.a.createElement(le,null):r.a.createElement(ie,null)),r.a.createElement(c.a,null,r.a.createElement(oe,{style:{background:"#002140",padding:10,borderLeft:"1px solid white",boxShadow:"0 4px 2px -2px gray"}},r.a.createElement(ue,{style:{color:"#fff"}},r.a.createElement(m.a,{type:"dashboard"})," Kois Administracija")),r.a.createElement(ce,{style:{margin:"0 16px"}},r.a.createElement(u.a,{style:{margin:"16px 0"}}),r.a.createElement("div",{id:"container",style:{padding:24,background:"#fff",minHeight:"40vh"}},r.a.createElement($,null))),r.a.createElement(se,{style:{textAlign:"center"}},"Samo Pritrznik & Janez Sedeljsak 2019/20 \xa9"))))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[248,1,2]]]);
//# sourceMappingURL=main.24ac58da.chunk.js.map