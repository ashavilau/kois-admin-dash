(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{163:function(e,t,a){},240:function(e,t,a){e.exports=a.p+"static/media/scvlogo.001b21b6.png"},241:function(e,t,a){e.exports=a.p+"static/media/koislogo.e5789706.png"},246:function(e,t,a){e.exports=a(503)},503:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(5),o=a.n(l),i=a(40),c=(a(251),a(163),a(505)),s=a(509),m=a(8),u=a(510),p=a(37),d=a(53),h=a(16),E=a.n(h),f=a(508),g=a(512),y=a(52),v=a(226),k=a(227),b=a(61),w=a.n(b),x=function(){function e(){Object(v.a)(this,e)}return Object(k.a)(e,null,[{key:"register",value:function(e){var t,a,n,r;return E.a.async((function(l){for(;;)switch(l.prev=l.next){case 0:return t=e.fullname,a=e.email,n=e.password,r=e._AUTH,l.abrupt("return",new Promise((function(e,l){return E.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,E.a.awrap(w.a.post("/api/auth/register",{params:{name:t,email:a,password:n},headers:{Authorization:"Token ".concat(r),"Content-Type":"application/x-www-form-urlencoded"}}).then(e).catch(l));case 2:case"end":return o.stop()}}))})));case 2:case"end":return l.stop()}}))}},{key:"login",value:function(e){var t,a;return E.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.email,a=e.password,console.log("23",t,a),n.abrupt("return",new Promise((function(e,n){return E.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,E.a.awrap(w.a.post("/api/auth/login",{email:t,password:a}).then(e).catch(n));case 2:case"end":return r.stop()}}))})));case 3:case"end":return n.stop()}}))}},{key:"delUser",value:function(e,t){return E.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",new Promise((function(a,n){return E.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,E.a.awrap(w.a.post("/api/auth/delete-user/".concat(e),{headers:{Authorization:"Token ".concat(t),"Content-Type":"application/x-www-form-urlencoded"}}).then(a).catch(n));case 2:case"end":return r.stop()}}))})));case 1:case"end":return a.stop()}}))}},{key:"getUser",value:function(e,t){return E.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",new Promise((function(a,n){return E.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,E.a.awrap(w.a.get("/api/auth/user-profile/".concat(e),{headers:{Authorization:"Token ".concat(t),"Content-Type":"application/x-www-form-urlencoded"}}).then(a).catch(n));case 2:case"end":return r.stop()}}))})));case 1:case"end":return a.stop()}}))}},{key:"getUsers",value:function(e){return E.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,a){return E.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,E.a.awrap(w.a.get("/api/auth/users",{headers:{Authorization:"Token ".concat(e),"Content-Type":"application/x-www-form-urlencoded"}}).then(t).catch(a));case 2:case"end":return n.stop()}}))})));case 1:case"end":return t.stop()}}))}},{key:"updateUser",value:function(e,t){return E.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",new Promise((function(a,n){return E.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,E.a.awrap(w.a.put("/api/auth/update-user/".concat(e),t).then(a).catch(n));case 2:case"end":return r.stop()}}))})));case 1:case"end":return a.stop()}}))}}]),e}();var T=f.a.create({name:"login"})((function(e){var t=e.form,a=t.getFieldDecorator,l=Object(n.useState)(!1),o=Object(i.a)(l,2),c=o[0],s=o[1];return Object(n.useEffect)((function(){localStorage.getItem("_kToken")&&localStorage.removeItem("_kToken")})),r.a.createElement(r.a.Fragment,null,c&&r.a.createElement(d.a,{to:"/"}),r.a.createElement(f.a,{style:{width:"50%",minWidth:"300px"},onSubmit:function(e){e.preventDefault(),t.validateFieldsAndScroll((function(e,t){var a;return E.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:if(e){n.next=5;break}return n.next=3,E.a.awrap(x.login(t));case 3:"OK"==(a=n.sent).statusText&&(localStorage.getItem("_kToken")||localStorage.setItem("_kToken",a.data.token),s(!0));case 5:case"end":return n.stop()}}))}))}},r.a.createElement(f.a.Item,{label:"e-po\u0161ta",hasFeedback:!0},a("email",{rules:[{type:"email",message:"Neveljavna e-po\u0161ta!"},{required:!0,message:"Prosimo vnesite va\u0161o e-po\u0161to!"}]})(r.a.createElement(g.a,{prefix:r.a.createElement(m.a,{type:"mail",style:{color:"rgba(0,0,0,.25)"}})}))),r.a.createElement(f.a.Item,{label:"geslo",hasFeedback:!0},a("password",{rules:[{required:!0,message:"Prosimo vnesite va\u0161e geslo!"}]})(r.a.createElement(g.a.Password,{prefix:r.a.createElement(m.a,{type:"lock",style:{color:"rgba(0,0,0,.25)"}})}))),r.a.createElement(f.a.Item,null,r.a.createElement(y.a,{type:"primary",shape:"round",icon:"user",htmlType:"submit"},"Prijava"))))})),I=a(506),j=a(87),D=function(e){var t=e.title,a=e.link,n=e.icon,l=e.css,o=e.shape;return r.a.createElement(r.a.Fragment,null,r.a.createElement(p.b,{to:a},r.a.createElement(y.a,{type:l||"primary",icon:n,shape:o||"round",size:"large"},t)))},A=I.a.Meta,P=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(D,{title:"Dodaj to\u010dko",link:"/new/point",icon:"plus"}),r.a.createElement("hr",null),r.a.createElement("div",{style:{display:"flex",flexFlow:"row wrap",position:"relative"}},[1,2,3,4,5,6,7,8].map((function(e,t){return r.a.createElement(I.a,{key:t,hoverable:!0,style:{flex:"0 1 calc(25% - 16px)",margin:"8px"},cover:r.a.createElement("img",{src:"https://geospatialmedia.s3.amazonaws.com/wp-content/uploads/2018/11/location-tech.jpg"})},r.a.createElement(A,{title:"Random location"}),r.a.createElement("hr",null),r.a.createElement(j.a,{title:"Podroben ogled"},r.a.createElement(y.a,{style:{float:"right",marginLeft:"10px"},type:"secondary",shape:"circle",icon:"fullscreen",size:"large",href:"/details/point/".concat(t)})),r.a.createElement(j.a,{title:"Uredi"},r.a.createElement(y.a,{style:{float:"right"},type:"primary",shape:"circle",icon:"edit",size:"large",href:"/edit/point/".concat(t)})))}))))},S=a(507),F=a(504),q=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(D,{title:"Dodaj administratorja",link:"/new/admin",icon:"plus"}),r.a.createElement("hr",null),r.a.createElement(S.a,{itemLayout:"horizontal",dataSource:[{title:"Ant Design Title 1"},{title:"Ant Design Title 2"},{title:"Ant Design Title 3"},{title:"Ant Design Title 4"}],renderItem:function(e){return r.a.createElement(S.a.Item,null,r.a.createElement(S.a.Item.Meta,{avatar:r.a.createElement(F.a,{src:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"}),title:r.a.createElement("a",{href:"https://ant.design"},e.title),description:"Ant Design, a design language for background applications, is refined by Ant UED Team"}))}}))},z=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(D,{title:"Dodaj zahtevek",link:"/new/task",icon:"plus"}),r.a.createElement("hr",null),r.a.createElement(S.a,{itemLayout:"horizontal",dataSource:[{title:"Ant Design Title 1"},{title:"Ant Design Title 2"},{title:"Ant Design Title 3"},{title:"Ant Design Title 4"}],renderItem:function(e){return r.a.createElement(S.a.Item,null,r.a.createElement(S.a.Item.Meta,{avatar:r.a.createElement(F.a,{src:"https://cdn0.iconfinder.com/data/icons/education-gamification/1000/Task_Complete-512.png"}),title:r.a.createElement("a",{href:"https://ant.design"},e.title),description:"Ant Design, a design language for background applications, is refined by Ant UED Team"}))}}))},O=function(){return r.a.createElement("div",null,"serbus")},R=a(236),C=a.n(R),_=a(511),U=function(e){var t=e.content,a=e.toggle,n=e.visibility;return r.a.createElement(_.a,{title:"Izbirnik lokacije",visible:n,onOk:a,cancelButtonProps:{style:{display:"none"}},width:"50vw"},t)},B=function(e){var t=e.type,a=Object(n.useState)(!1),l=Object(i.a)(a,2),o=l[0],c=l[1],s=Object(n.useState)({lat:46.4441,lng:15.197}),u=Object(i.a)(s,2),p=u[0],d=u[1],h=function(){c(!o)};return o?r.a.createElement(U,{content:r.a.createElement(C.a,{containerElement:r.a.createElement("div",{style:{height:"100%"}}),mapElement:r.a.createElement("div",{style:{height:"400px"}}),defaultPosition:p,onChange:function(e){var t=e.position;e.address,e.places;d(t)}}),visibility:o,toggle:h}):r.a.createElement(f.a,{style:{minWidth:"50%"}},r.a.createElement(f.a.Item,null,r.a.createElement(y.a,{onClick:h,icon:"select",shape:"round",htmlType:"button",className:"login-form-button"},"Izberi lokacijo"),r.a.createElement("span",null," ",r.a.createElement(m.a,{type:"environment",style:{color:"#66c"}})," zemljepisna dol\u017eina: ",r.a.createElement("b",null,p.lng)," zemljepisna \u0161irina:"," ",r.a.createElement("b",null,p.lat)),r.a.createElement("hr",null)),r.a.createElement(f.a.Item,null,r.a.createElement(y.a,{icon:"plus",shape:"round"},"Dodaj zavihek"),r.a.createElement(S.a,{itemLayout:"horizontal",dataSource:[],renderItem:function(e){return r.a.createElement(S.a.Item,null,r.a.createElement(S.a.Item.Meta,{avatar:r.a.createElement(F.a,{src:"https://cdn0.iconfinder.com/data/icons/education-gamification/1000/Task_Complete-512.png"}),title:r.a.createElement("a",{href:"https://ant.design"},e.title),description:"Ant Design, a design language for background applications, is refined by Ant UED Team"}))}}),r.a.createElement("hr",null)),r.a.createElement(f.a.Item,null,r.a.createElement(y.a,{type:"primary",icon:"environment",shape:"round",htmlType:"submit",className:"login-form-button"},"edit"==t?"Posodobi":"Dodaj")))};var H=f.a.create({name:"admin"})((function(e){var t=e.form,a=e.type,l=Object(n.useState)(!1),o=Object(i.a)(l,2),c=o[0],s=o[1],u=t.getFieldDecorator;return r.a.createElement(f.a,{style:{width:"50%",minWidth:"300px"},onSubmit:function(e){e.preventDefault(),t.validateFieldsAndScroll((function(e,t){var a,n,r,l;return E.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:if(e){o.next=7;break}return a=t.fullname,n=t.email,r=t.password,o.next=4,E.a.awrap(x.register({fullname:a,email:n,password:r,_AUTH:localStorage.getItem("_kToken")}));case 4:l=o.sent,console.log(l),console.log("Received values of form: ",t);case 7:case"end":return o.stop()}}))}))}},r.a.createElement(f.a.Item,{label:"ime & priimek"},u("fullname",{rules:[{required:!0,message:"Prosimo vnesite va\u0161e ime & priimek!"}]})(r.a.createElement(g.a,{prefix:r.a.createElement(m.a,{type:"user",style:{color:"rgba(0,0,0,.25)"}})}))),r.a.createElement(f.a.Item,{label:"e-po\u0161ta"},u("email",{rules:[{type:"email",message:"Neveljavna e-po\u0161ta!"},{required:!0,message:"Prosimo vnesite va\u0161o e-po\u0161to!"}]})(r.a.createElement(g.a,{prefix:r.a.createElement(m.a,{type:"mail",style:{color:"rgba(0,0,0,.25)"}})}))),r.a.createElement(f.a.Item,{label:"geslo",hasFeedback:!0},u("password",{rules:[{required:!0,message:"Prosimo vnesite va\u0161e geslo!"},{validator:function(e,a,n){a&&c&&t.validateFields(["confirm"],{force:!0}),n()}}]})(r.a.createElement(g.a.Password,{prefix:r.a.createElement(m.a,{type:"lock",style:{color:"rgba(0,0,0,.25)"}})}))),r.a.createElement(f.a.Item,{label:"potrdi geslo",hasFeedback:!0},u("confirm",{rules:[{required:!0,message:"Prosimo ponovite geslo!"},{validator:function(e,a,n){a&&a!==t.getFieldValue("password")?n("Two passwords that you enter is inconsistent!"):n()}}]})(r.a.createElement(g.a.Password,{prefix:r.a.createElement(m.a,{type:"lock",style:{color:"rgba(0,0,0,.25)"}}),onBlur:function(e){var t=e.target.value;s(c||!!t)}}))),r.a.createElement(f.a.Item,null,r.a.createElement(y.a,{type:"primary",shape:"round",icon:"user",htmlType:"submit"},"edit"==a?"Posodobi":"Dodaj")))})),L=g.a.TextArea;var W=f.a.create({name:"task"})((function(e){var t=e.form,a=e.type,n=t.getFieldDecorator;return r.a.createElement(f.a,{style:{width:"50%",minWidth:"300px"},onSubmit:function(e){e.preventDefault(),t.validateFieldsAndScroll((function(e,t){e||console.log("Received values of form: ",t)}))}},r.a.createElement(f.a.Item,{label:"naslov",hasFeedback:!0},n("title",{rules:[{required:!0,message:"Prosimo vnesite naslov!"}]})(r.a.createElement(g.a,{prefix:r.a.createElement(m.a,{type:"file-text",style:{color:"rgba(0,0,0,.25)"}})}))),r.a.createElement(f.a.Item,{label:"opis",hasFeedback:!0},n("description",{rules:[{required:!0,message:"Prosimo vnesite opis!"}]})(r.a.createElement(L,{rows:4}))),r.a.createElement(f.a.Item,null,r.a.createElement(y.a,{type:"primary",icon:"file",shape:"round",htmlType:"submit",className:"login-form-button"},"edit"==a?"Posodobi":"Dodaj")))})),N=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,"indepth view for point"))};function M(e,t){localStorage.getItem("_kToken")||t({nextPathname:e.location.pathname},"/login")}var J=function(){var e=[{path:"/login",component:r.a.createElement(T,null),authRequired:!1},{path:"/points",component:r.a.createElement(P,null),authRequired:!0},{path:"/admins",component:r.a.createElement(q,null),authRequired:!0},{path:"/documentation",component:r.a.createElement(O,null),authRequired:!1},{path:"/tasks",component:r.a.createElement(z,null),authRequired:!0},{path:"/new/point",component:r.a.createElement(B,{type:"new"}),authRequired:!0},{path:"/new/admin",component:r.a.createElement(H,{type:"new"}),authRequired:!0},{path:"/new/task",component:r.a.createElement(W,{type:"new"}),authRequired:!0},{path:"/edit/point/:id",component:r.a.createElement(B,{type:"edit"}),authRequired:!0},{path:"/edit/admin/:id",component:r.a.createElement(H,{type:"edit"}),authRequired:!0},{path:"/edit/task/:id",component:r.a.createElement(W,{type:"edit"}),authRequired:!0},{path:"/details/point/:id",component:r.a.createElement(N,null),authRequired:!0}];return r.a.createElement(d.d,null,e.map((function(e){var t=e.path,a=e.component,n=e.authRequired;return r.a.createElement(d.b,{key:t,path:t,onEnter:!n||M},a)})))},K=a(240),V=a.n(K),X=a(241),Y=a.n(X),Z=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{padding:20}},r.a.createElement("img",{style:{width:"100%",marginBottom:15},src:V.a}),r.a.createElement("img",{style:{width:"100%",padding:15,paddingBottom:0},src:Y.a})),r.a.createElement("hr",null))},$=a(161),G=function(e){var t=e.title,a=e.link,n=e.icon;return r.a.createElement(r.a.Fragment,null,r.a.createElement(p.b,{to:a}),r.a.createElement(m.a,{type:n}),r.a.createElement("span",null,t))},Q=function(){return r.a.createElement($.a,{theme:"dark",style:{background:"#345"},mode:"inline"},r.a.createElement($.a.Item,{key:"/points"},r.a.createElement(G,{link:"/points",title:"To\u010dke",icon:"environment"})),r.a.createElement($.a.Item,{key:"/admins"},r.a.createElement(G,{link:"/admins",title:"Administratorji",icon:"user"})),r.a.createElement($.a.Item,{key:"/documentation"},r.a.createElement(G,{link:"/documentation",title:"Dokumentacija",icon:"file-search"})),r.a.createElement($.a.Item,{key:"/tasks"},r.a.createElement(G,{link:"/tasks",title:"Zahtevki",icon:"pushpin"})),r.a.createElement($.a.Item,{key:"/login"},r.a.createElement(G,{link:"/login",title:"Odjava",icon:"logout"})))},ee=function(){return r.a.createElement($.a,{theme:"dark",style:{background:"#345"},mode:"inline"},r.a.createElement($.a.Item,{key:"/points"},r.a.createElement(G,{link:"/points",title:"To\u010dke",icon:"environment"})),r.a.createElement($.a.Item,{key:"/documentation"},r.a.createElement(G,{link:"/documentation",title:"Dokumentacija",icon:"file-search"})),r.a.createElement($.a.Item,{key:"/login"},r.a.createElement(G,{link:"/login",title:"Prijava",icon:"login"})))},te=c.a.Header,ae=c.a.Content,ne=c.a.Footer,re=c.a.Sider,le=s.a.Title;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement((function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),a=t[0],l=t[1],o=Object(n.useState)(localStorage.getItem("_kToken")||void 0),s=Object(i.a)(o,2),d=s[0];s[1];return r.a.createElement(c.a,{style:{minHeight:"100vh"}},r.a.createElement(p.a,null,r.a.createElement(re,{style:{background:"#345"},width:"300",collapsible:!0,collapsed:a,onCollapse:l},!a&&r.a.createElement(Z,null),d?r.a.createElement(Q,null):r.a.createElement(ee,null)),r.a.createElement(c.a,null,r.a.createElement(te,{style:{background:"#002140",padding:10,borderLeft:"1px solid white",boxShadow:"0 4px 2px -2px gray"}},r.a.createElement(le,{style:{color:"#fff"}},r.a.createElement(m.a,{type:"dashboard"})," Kois Administracija")),r.a.createElement(ae,{style:{margin:"0 16px"}},r.a.createElement(u.a,{style:{margin:"16px 0"}}),r.a.createElement("div",{id:"container",style:{padding:24,background:"#fff",minHeight:"40vh"}},r.a.createElement(J,null))),r.a.createElement(ne,{style:{textAlign:"center"}},"Samo Pritrznik & Janez Sedeljsak 2019/20 \xa9"))))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[246,1,2]]]);
//# sourceMappingURL=main.f0d1b275.chunk.js.map