(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{168:function(e,t,a){},240:function(e,t,a){e.exports=a.p+"static/media/kois-welcome.4d70ee5d.png"},247:function(e,t,a){e.exports=a.p+"static/media/user.a9210b59.png"},258:function(e,t,a){e.exports=a.p+"static/media/scvlogo.001b21b6.png"},259:function(e,t,a){e.exports=a.p+"static/media/koislogo.e5789706.png"},265:function(e,t,a){e.exports=a(556)},556:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(5),o=a.n(c),i=a(17),l=(a(270),a(168),a(558)),s=a(560),u=a(10),m=a(563),p=a(28),d=a(44),f=a(23),h=Object(f.a)(),g=a(262);function v(e){var t=e.component,a=e.isPrivate,n=Object(g.a)(e,["component","isPrivate"]),c=localStorage.getItem("_kToken");return a&&!c?r.a.createElement(d.a,{to:"/login?status=906"}):r.a.createElement(d.b,Object.assign({},n,{component:t}))}v.defaultProps={isPrivate:!1};var E=a(240),b=a.n(E),y=function(){return r.a.createElement("img",{src:b.a,style:{width:"calc(100% + 62px)",maxHeight:"80vh",margin:-31}})},w=a(6),k=a.n(w),j=a(91),x=a(241),O=a(242),T=a(40),P=a.n(T);P.a.interceptors.response.use((function(e){return e}),(function(e){return 401===e.response.status?window.location="/login?status=401":406===e.response.status&&(window.location="/login?status=406"),e}));var C=function(){function e(){Object(x.a)(this,e)}return Object(O.a)(e,null,[{key:"register",value:function(e){var t,a,n,r;return k.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return t=e.name,a=e.email,n=e.password,r=e._AUTH,c.abrupt("return",new Promise((function(e,c){return k.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,k.a.awrap(P.a.post("".concat("","/api/auth/user"),{name:t,email:a,password:n},{headers:{Authorization:"Token ".concat(r),"Content-Type":"application/json"}}).then(e).catch(c));case 2:case"end":return o.stop()}}))})));case 2:case"end":return c.stop()}}))}},{key:"login",value:function(e){var t,a;return k.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.email,a=e.password,n.abrupt("return",new Promise((function(e,n){return k.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,k.a.awrap(P.a.post("".concat("","/api/auth/login"),{email:t,password:a}).then(e).catch(n));case 2:case"end":return r.stop()}}))})));case 2:case"end":return n.stop()}}))}},{key:"getUsers",value:function(e){return k.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,a){return k.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,k.a.awrap(P.a.get("".concat("","/api/auth/user"),{headers:{Authorization:"Token ".concat(e),"Content-Type":"application/json"}}).then(t).catch(a));case 2:case"end":return n.stop()}}))})));case 1:case"end":return t.stop()}}))}},{key:"getUser",value:function(e){var t,a;return k.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.id,a=e._AUTH,n.abrupt("return",new Promise((function(e,n){return k.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,k.a.awrap(P.a.get("".concat("","/api/auth/user/").concat(t),{headers:{Authorization:"Token ".concat(a),"Content-Type":"application/json"}}).then(e).catch(n));case 2:case"end":return r.stop()}}))})));case 2:case"end":return n.stop()}}))}},{key:"createPoint",value:function(e){var t,a;return k.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.data,a=e._AUTH,n.abrupt("return",new Promise((function(e,n){return k.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,k.a.awrap(P.a.post("".concat("","/api/common/point"),JSON.stringify({data:t}),{headers:{Authorization:"Token ".concat(a),"Content-Type":"application/json"}}).then(e).catch((function(){return e({error:!0})})));case 2:case"end":return n.stop()}}))})));case 2:case"end":return n.stop()}}))}},{key:"getPoints",value:function(e){return k.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,a){return k.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,k.a.awrap(P.a.get("".concat("","/api/common/point"),{headers:{Authorization:"Token ".concat(e),"Content-Type":"application/json"}}).then(t).catch(a));case 2:case"end":return n.stop()}}))})));case 1:case"end":return t.stop()}}))}},{key:"getPoint",value:function(e){var t,a;return k.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.id,a=e._AUTH,n.abrupt("return",new Promise((function(e,n){return k.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,k.a.awrap(P.a.get("".concat("","/api/common/point/").concat(t),{headers:{Authorization:"Token ".concat(a),"Content-Type":"application/json"}}).then(e).catch(n));case 2:case"end":return r.stop()}}))})));case 2:case"end":return n.stop()}}))}},{key:"updatePoint",value:function(e){var t,a,n;return k.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.id,a=e.data,n=e._AUTH,r.abrupt("return",new Promise((function(e,r){return k.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,k.a.awrap(P.a.post("".concat("","/api/common/point/").concat(t),JSON.stringify({data:a}),{headers:{Authorization:"Token ".concat(n),"Content-Type":"application/json"}}).then(e).catch((function(){return e({error:!0})})));case 2:case"end":return r.stop()}}))})));case 2:case"end":return r.stop()}}))}},{key:"deletePoint",value:function(e){var t,a;return k.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.id,a=e._AUTH,n.abrupt("return",new Promise((function(e,n){return k.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,k.a.awrap(P.a.delete("".concat("","/api/common/point/").concat(t),{headers:{Authorization:"Token ".concat(a),"Content-Type":"application/json"}}).then(e).catch(n));case 2:case"end":return r.stop()}}))})));case 2:case"end":return n.stop()}}))}}]),e}(),N=a(30),S=a.n(N),z=r.a.useEffect,I=r.a.useState,_=function(e){var t=Object(d.g)(),a=I(!1),n=Object(i.a)(a,2),c=n[0],o=n[1],l=I({email:"",password:""}),s=Object(i.a)(l,2),u=s[0],m=s[1];z((function(){var e=window.location.href,t=null;if(["401","406","420","906"].forEach((function(a){e.includes(a)&&(t=a)})),t){S.a.fire({icon:420==t?"success":"error",title:{401:"Preusmeritev zaradi avtorizacije uporabnika!",406:"Prijava ni bila uspe\u0161na!",420:"Odjava je bila uspe\u0161na!",906:"Do te strani nimate dodeljenih pravic!"}[t]}).then((function(){window.location.href=e.substring(0,e.indexOf("?"))}))}else o(!0);localStorage.removeItem("_kToken")}),[]);var p=function(){var e=u.email,t=u.password;return/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e)&&t.length>4};return c?r.a.createElement("form",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{for:"email",className:"bmd-label-floating"},"E-po\u0161ta"),r.a.createElement("input",{id:"email",type:"email",className:"form-control",value:u.email,minLength:"5",onChange:function(e){m({email:e.target.value,password:u.password})}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{for:"password",className:"bmd-label-floating"},"Geslo"),r.a.createElement("input",{id:"password",type:"password",minLength:"5",className:"form-control",value:u.password,onChange:function(e){m({email:u.email,password:e.target.value})}})),r.a.createElement(j.a,{type:"primary",icon:"login",shape:"round",className:"login-form-button",onClick:function(){var e;return k.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:if(p()){a.next=2;break}return a.abrupt("return");case 2:return a.next=4,k.a.awrap(C.login(u));case 4:200==(e=a.sent).status&&(S.a.fire({icon:"success",title:"Prijava je bila uspe\u0161na!"}).then((function(){t.push("/"),window.location.reload()})),localStorage.setItem("_kToken",e.data.token));case 6:case"end":return a.stop()}}))},disabled:!p()},"Prijava")):r.a.createElement(r.a.Fragment,null)},A=a(559),U=a(90),H=a(246),F=function(e){var t=e.title,a=e.link,n=e.icon,c=e.css,o=e.shape;return r.a.createElement(r.a.Fragment,null,r.a.createElement(p.b,{to:a},r.a.createElement(j.a,{type:c||"primary",icon:n,shape:o||"round",size:"large"},t)))},D=A.a.Meta,L=function(){var e=Object(d.g)(),t=Object(n.useState)([]),a=Object(i.a)(t,2),c=a[0],o=a[1];function l(){var e,t;return k.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return e=localStorage.getItem("_kToken"),a.next=3,k.a.awrap(C.getPoints(e));case 3:200==(t=a.sent).status&&o(t.data);case 5:case"end":return a.stop()}}))}return Object(n.useEffect)((function(){l()}),[]),c.length?r.a.createElement("div",{style:{maxWidth:"100%"}},r.a.createElement(F,{title:"Dodaj to\u010dko",link:"/new/point",icon:"plus"}),r.a.createElement("hr",null),r.a.createElement("div",{style:{display:"flex",flexFlow:"row wrap",position:"relative"}},c.map((function(t,a){var n=t.tabs,c=t._id;return r.a.createElement(A.a,{key:a,hoverable:!0,style:{flex:"0 1 calc(25% - 16px)",minWidth:"150px",maxWidth:"60vh",margin:"8px"},cover:r.a.createElement("img",{src:n[0].images[0]})},r.a.createElement(D,{title:n[0].title}),r.a.createElement("hr",null),r.a.createElement(U.a,{title:"Podroben ogled"},r.a.createElement(j.a,{style:{float:"right",marginLeft:"10px"},type:"secondary",shape:"circle",icon:"fullscreen",size:"large",onClick:function(){return e.push("/detailed/point/".concat(c))}})),r.a.createElement(U.a,{title:"Uredi"},r.a.createElement(j.a,{style:{float:"right",marginLeft:"10px"},type:"primary",shape:"circle",icon:"edit",size:"large",onClick:function(){return e.push("/edit/point/".concat(c))}})),r.a.createElement(U.a,{title:"Odstrani to\u010dko"},r.a.createElement(j.a,{style:{float:"right"},type:"danger",shape:"circle",icon:"delete",size:"large",onClick:function(){return function(e){var t;return k.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:t=localStorage.getItem("_kToken"),S.a.fire({title:"Ali ste prepri\u010dani?",text:"To\u010dko boste popolnoma odstranili iz kois sistema!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Da odstrani jo!"}).then((function(a){return k.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:if(!a.value){n.next=5;break}return n.next=3,k.a.awrap(C.deletePoint({id:e,_AUTH:t}));case 3:200==n.sent.status&&(S.a.fire("Uspe\u0161no odstranjeno!","To\u010dka je bila odstranjena.","success"),l());case 5:case"end":return n.stop()}}))}));case 2:case"end":return a.stop()}}))}(c)}})))})))):r.a.createElement("div",null,r.a.createElement(H.a,{size:"large"}))},B=a(561),R=a(557),q=a(247),M=a.n(q),Y=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){!function(){var e,t;k.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return e=localStorage.getItem("_kToken"),a.next=3,k.a.awrap(C.getUsers(e));case 3:200==(t=a.sent).status&&c(t.data);case 5:case"end":return a.stop()}}))}()}),[]),a.length?r.a.createElement("div",null,r.a.createElement(F,{title:"Dodaj administratorja",link:"/new/admin",icon:"plus"}),r.a.createElement("hr",null),r.a.createElement(B.a,{itemLayout:"horizontal",dataSource:a,renderItem:function(e){return r.a.createElement(B.a.Item,null,r.a.createElement(B.a.Item.Meta,{avatar:r.a.createElement(R.a,{src:M.a}),title:e.name,description:e.email}))}})):r.a.createElement("div",null,r.a.createElement(H.a,{size:"large"}))},W=a(35),J=a(122),$=a(562),G=a(250),K=a.n(G),V=a(564),Z=a(73),Q=a.n(Z),X=function(e){var t=e.content,a=e.toggle,c=e.visibility,o=e.title,l=e.confirm,s=Object(n.useRef)(!1),u=Object(n.useState)(!1),m=Object(i.a)(u,2),p=(m[0],m[1]);return Object(n.useEffect)((function(){"Izbirnik lokacije"!=o&&(p(!0),s.current?Q()("textarea").each((function(){Q()(this).height(0).height(this.scrollHeight)})):s.current=!0)})),r.a.createElement(V.a,{title:o,visible:c,onOk:l||a,onCancel:a,cancelButtonProps:{style:{display:"none"}},width:"50vw"},t)},ee=function(e){var t=e.type,a=Object(n.useState)(!1),c=Object(i.a)(a,2),o=c[0],l=c[1],s=Object(n.useState)(null),m=Object(i.a)(s,2),p=m[0],d=m[1],f=Object(n.useState)(null),h=Object(i.a)(f,2),g=h[0],v=h[1],E=Object(n.useState)({lat:46.4441,lng:15.197}),b=Object(i.a)(E,2),y=b[0],w=b[1],x=Object(n.useState)([]),O=Object(i.a)(x,2),T=O[0],P=O[1],N=Object(n.useState)({title:"",images:"",description:""}),z=Object(i.a)(N,2),I=z[0],_=z[1],A=function(e){var t=e.position;e.address,e.places;w(t)};Object(n.useEffect)((function(){"edit"==t&&function(){var e,t,a,n,r;k.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return e=localStorage.getItem("_kToken"),t=window.location.href,a=t.substr(t.lastIndexOf("/")+1),c.next=5,k.a.awrap(C.getPoint({id:a,_AUTH:e}));case 5:200==(n=c.sent).status&&(r=n.data.location,P(n.data.tabs),w({lat:r.lat,lng:r.lon}));case 7:case"end":return c.stop()}}))}()}),[]);var F=function(){["pointForm","updatePointForm"].includes(p)&&1==o&&_({title:"",images:"",description:""}),l(!o)},D=function(){var e=Object.values(I).filter((function(e){return e.length})).length;return Object.values(I).length==e};return"edit"!=t||T.length?o?r.a.createElement(X,{title:{pointForm:"Dodaj zavihek",updatePointForm:"Posodobi zavihek",locationPicker:"Izbirnik lokacije"}[p],content:function(){switch(p){case"locationPicker":return r.a.createElement(K.a,{containerElement:r.a.createElement("div",{style:{height:"100%"}}),mapElement:r.a.createElement("div",{style:{height:"400px"}}),defaultPosition:y,onChange:A});case"pointForm":case"updatePointForm":return r.a.createElement("form",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{for:"exampleInputEmail1",className:"bmd-label-floating"},"Naslov"),r.a.createElement("input",{type:"text",className:"form-control",value:I.title,onChange:function(e){_(Object(W.a)({},I,{title:e.target.value}))}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{for:"exampleInputEmail1",className:"bmd-label-floating"},"Povezave slik"),r.a.createElement("textarea",{className:"form-control",value:I.images,onChange:function(e){_(Object(W.a)({},I,{images:e.target.value}))}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{for:"exampleInputEmail1",className:"bmd-label-floating"},"Opis"),r.a.createElement("textarea",{className:"form-control",value:I.description,onChange:function(e){_(Object(W.a)({},I,{description:e.target.value}))}})));default:return"<p>Pri\u0161lo je do napake!</p>"}}(),visibility:o,toggle:F,confirm:function(){if(["pointForm","updatePointForm"].includes(p)){var e=I.title,t=I.images,a=I.description;if(t=t.split("\n"),D()){if("pointForm"==p)P([].concat(Object(J.a)(T),[{title:e,description:a,images:t}])),_({title:"",images:"",description:""});else{var n=T;n[g]={title:e,description:a,images:t},P(Object(J.a)(n)),_({title:"",images:"",description:""})}l(!1)}else S.a.fire({icon:"error",title:"Obrazca niste pravilno izpolnili!"})}else l(!1)}}):r.a.createElement($.a,{style:{minWidth:"50%"}},r.a.createElement($.a.Item,null,r.a.createElement(j.a,{icon:"folder-add",shape:"round",onClick:function(){F(),d("pointForm")}},"Dodaj zavihek"),r.a.createElement(j.a,{onClick:function(){F(),d("locationPicker")},style:{marginLeft:10},icon:"select",shape:"round",htmlType:"button",className:"login-form-button"},"Izberi lokacijo"),r.a.createElement("span",{style:{fontSize:18,marginLeft:10}},r.a.createElement(u.a,{type:"environment",style:{color:"#66c"}})," ","zemljepisna dol\u017eina:"," ",r.a.createElement("b",null,y.lng)," ","zemljepisna \u0161irina:"," ",r.a.createElement("b",null,y.lat)),r.a.createElement("hr",null)),r.a.createElement($.a.Item,null,r.a.createElement(B.a,{itemLayout:"horizontal",dataSource:T,renderItem:function(e,t){return r.a.createElement(B.a.Item,{actions:[r.a.createElement(U.a,{title:"Uredi zavihek"},r.a.createElement(j.a,{type:"primary",shape:"circle",icon:"edit",size:"large",onClick:function(){return function(e){v(e),F(),d("updatePointForm");var t=T[e];_(Object(W.a)({},t,{images:t.images.join("\n")}))}(t)}})),r.a.createElement(U.a,{title:"Odstrani zavihek"},r.a.createElement(j.a,{type:"danger",shape:"circle",icon:"delete",size:"large",onClick:function(){return function(e){S.a.fire({title:"Ali ste prepri\u010dani?",text:"Zavihek boste popolnoma odstranili iz to\u010dke!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Da!"}).then((function(t){return k.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:t.value&&P(Object(J.a)(T.filter((function(t,a){return a!=e}))));case 1:case"end":return a.stop()}}))}))}(t)}}))]},r.a.createElement(B.a.Item.Meta,{avatar:r.a.createElement(R.a,{src:e.images[0]}),title:e.title,description:(e.description.length>100?e.description.substr(0,100):e.description)+"..."}))}}),r.a.createElement("hr",null)),r.a.createElement($.a.Item,null,r.a.createElement(j.a,{onClick:"edit"==t?function(){var e,t,a,n;return k.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return e=localStorage.getItem("_kToken"),t=window.location.href,a=t.substr(t.lastIndexOf("/")+1),n={location:Object(W.a)({},y,{lon:y.lng}),tabs:T},r.next=6,k.a.awrap(C.updatePoint({id:a,data:n,_AUTH:e}));case 6:200==r.sent.status&&S.a.fire({icon:"success",title:"To\u010dka je bila uspe\u0161no posodobljena!"});case 8:case"end":return r.stop()}}))}:function(){var e,t;return k.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return e=localStorage.getItem("_kToken"),t={location:Object(W.a)({},y,{lon:y.lng}),tabs:T},a.next=4,k.a.awrap(C.createPoint({data:t,_AUTH:e}));case 4:200==a.sent.status&&(S.a.fire({icon:"success",title:"To\u010dka je bila uspe\u0161no dodana!"}),P([]));case 6:case"end":return a.stop()}}))},type:"primary",icon:"environment",shape:"round",htmlType:"submit",className:"login-form-button",disabled:!T.length},"edit"==t?"Posodobi to\u010dko":"Dodaj to\u010dko"))):r.a.createElement("div",null,r.a.createElement(H.a,{size:"large"}))},te=r.a.useState,ae=function(){var e=te({name:"",email:"",password:""}),t=Object(i.a)(e,2),a=t[0],n=t[1],c=function(){var e=a.name,t=a.email,n=a.password;return/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(t)&&n.length>4&&e.length>4};return r.a.createElement("form",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{for:"name",className:"bmd-label-floating"},"Ime & Priimek"),r.a.createElement("input",{id:"name",type:"text",className:"form-control",value:a.name,minLength:"5",onChange:function(e){n(Object(W.a)({},a,{name:e.target.value}))}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{for:"email",className:"bmd-label-floating"},"E-po\u0161ta"),r.a.createElement("input",{id:"email",type:"email",className:"form-control",value:a.email,minLength:"5",onChange:function(e){n(Object(W.a)({},a,{email:e.target.value}))}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{for:"password",className:"bmd-label-floating"},"Geslo"),r.a.createElement("input",{id:"password",type:"password",minLength:"5",className:"form-control",value:a.password,onChange:function(e){n(Object(W.a)({},a,{password:e.target.value}))}})),r.a.createElement(j.a,{type:"primary",icon:"login",shape:"round",className:"login-form-button",onClick:function(){var e;return k.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:if(c()){t.next=2;break}return t.abrupt("return");case 2:return e=localStorage.getItem("_kToken"),t.next=5,k.a.awrap(C.register(Object(W.a)({},a,{_AUTH:e})));case 5:200==t.sent.status&&S.a.fire({icon:"success",title:"Uporabnik je bil uspe\u0161no dodan!"});case 7:case"end":return t.stop()}}))},disabled:!c()},"Registracija"))},ne=a(87),re=a(256),ce=a.n(re),oe=a(257),ie=a.n(oe),le=a(74),se=a.n(le),ue=ne.a.Option,me=function(){var e=Object(n.useState)(null),t=Object(i.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(0),l=Object(i.a)(o,2),s=l[0],u=l[1],m=Object(n.useState)(null),p=Object(i.a)(m,2),d=p[0],f=p[1],h=Object(n.useState)(null),g=Object(i.a)(h,2),v=g[0],E=g[1];function b(e,t){var a,n;return k.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return a=localStorage.getItem("_kToken"),r.next=3,k.a.awrap(C.getUser({id:e,_AUTH:a}));case 3:200==(n=r.sent).status&&("created"==t?f(n.data._doc.name):E(n.data._doc.name));case 5:case"end":return r.stop()}}))}if(Object(n.useEffect)((function(){!function(){var e,t,a,n;k.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return e=localStorage.getItem("_kToken"),t=window.location.href,a=t.substr(t.lastIndexOf("/")+1),r.next=5,k.a.awrap(C.getPoint({id:a,_AUTH:e}));case 5:200==(n=r.sent).status&&(b(n.data.userUpdated,"updated"),b(n.data.userCreated,"created"),c(n.data));case 7:case"end":return r.stop()}}))}()}),[]),a){var y=a.tabs,w=y[s],x=a.location,O=x.lat,T=x.lon,P=ce()(T,O),N=[{key:"To\u010dka je bila ustvarjena:",value:se()(a.createdAt).format("DD. MM. YYYY")},{key:"To\u010dko je ustvarjil/a:",value:d},{key:"To\u010dka je bila posodobljena:",value:se()(a.updatedAt).format("DD. MM. YYYY")},{key:"To\u010dko je posodobil/a:",value:v}],S=function(e){var t=0|e,a=Math.abs(e-t),n=60*a|0,r=3600*a-60*n;return"".concat(t||0,"\xb0").concat(n||0,"'").concat(r||0,'"')};return r.a.createElement("div",null,y.length>1&&r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement(ne.a,{defaultValue:y[0].title,style:{width:"100%"},onChange:u},y.map((function(e,t){var a=e.title;return r.a.createElement(ue,{value:t},a)})))),r.a.createElement("hr",null)),r.a.createElement("div",{id:"headerimg",className:"carousel slide","data-ride":"carousel"},r.a.createElement("div",{className:"carousel-inner",style:{height:"70vh",background:"#2f3e53"}},w.images.map((function(e,t){return r.a.createElement("div",{style:{height:"70vh"},className:"carousel-item ".concat(0==t?"active":"")},r.a.createElement("img",{className:"d-block",onClick:function(){return t=e,void Q()("<div>").css({background:"#0f0f0f99 url('".concat(t,"') no-repeat center"),backgroundSize:"contain",width:"100%",height:"100%",position:"fixed",zIndex:"10000",top:"0",left:"0"}).click((function(){Q()(this).remove()})).appendTo("body");var t},src:e,alt:"Kois Image"}))}))),w.images.length>1&&r.a.createElement(r.a.Fragment,null,r.a.createElement("ol",{className:"carousel-indicators"},w.images.map((function(e,t){return r.a.createElement("li",{"data-target":"#headerimg","data-slide-to":t,className:0==t?"active":""})}))),r.a.createElement("a",{className:"carousel-control-prev",href:"#headerimg",role:"button","data-slide":"prev"},r.a.createElement("span",{className:"carousel-control-prev-icon","aria-hidden":"true"}),r.a.createElement("span",{className:"sr-only"},"Previous")),r.a.createElement("a",{className:"carousel-control-next",href:"#headerimg",role:"button","data-slide":"next"},r.a.createElement("span",{className:"carousel-control-next-icon","aria-hidden":"true"}),r.a.createElement("span",{className:"sr-only"},"Next")))),r.a.createElement("div",{style:{marginTop:20}},r.a.createElement("h1",{style:{float:"left"}},w.title),r.a.createElement(U.a,{style:{float:"right"},title:"Odpri v google maps"},r.a.createElement(j.a,{style:{marginRight:20,float:"right"},type:"primary",shape:"circle",icon:"environment",size:"large",onClick:function(){var e=S(O),t=S(T);window.open("https://www.google.com/maps/place/".concat(e,"N").concat(t,'E/"'))}}))),r.a.createElement("hr",{style:{clear:"both"}}),r.a.createElement("span",{stlye:{padding:30},dangerouslySetInnerHTML:{__html:w.description.replace(/\n/g,"<br />")}}),r.a.createElement("hr",null),r.a.createElement("div",{style:{display:"flex",flexDirection:"row"}},r.a.createElement("div",{style:{margin:20,width:"100%",display:"flex",alignItems:"center",justifyContent:"center"}},r.a.createElement("ul",{class:"list-group"},N.map((function(e){var t=e.key,a=e.value;return r.a.createElement("a",{class:"list-group-item"},r.a.createElement("div",{class:"bmd-list-group-col"},r.a.createElement("p",{class:"list-group-item-heading"},t),r.a.createElement("p",{class:"list-group-item-text"},r.a.createElement("b",null,a))))})))),r.a.createElement("div",{style:{margin:20,width:"100%",display:"flex",alignItems:"center",justifyContent:"center"},dangerouslySetInnerHTML:{__html:ie()(P)}})))}return r.a.createElement("div",null,r.a.createElement(H.a,{size:"large"}))},pe=function(){var e=[{path:"/login",component:r.a.createElement(_,null),authRequired:!1},{path:"/points",component:r.a.createElement(L,null),authRequired:!0},{path:"/admins",component:r.a.createElement(Y,null),authRequired:!0},{path:"/new/point",component:r.a.createElement(ee,{type:"new"}),authRequired:!0},{path:"/new/admin",component:r.a.createElement(ae,{type:"new"}),authRequired:!0},{path:"/edit/point/:id",component:r.a.createElement(ee,{type:"edit"}),authRequired:!0},{path:"/detailed/point/:id",component:r.a.createElement(me,null),authRequired:!0},{path:"",component:r.a.createElement(y,null),authRequired:!1}];return r.a.createElement(d.d,null,e.map((function(e,t){var a=e.path,n=e.component,c=e.authRequired;return r.a.createElement(v,{key:t,path:a,isPrivate:c||!1},n)})))},de=a(258),fe=a.n(de),he=a(259),ge=a.n(he),ve=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{padding:10}},r.a.createElement("img",{style:{width:"100%",marginBottom:15},src:fe.a}),r.a.createElement("img",{style:{width:"100%",padding:20,paddingBottom:0},src:ge.a})),r.a.createElement("hr",null))},Ee=a(166),be=function(e){var t=e.title,a=e.link,n=e.icon;return r.a.createElement("span",{id:a},r.a.createElement(u.a,{type:n}),r.a.createElement("span",null,t))},ye=function(){var e=Object(d.g)();Object(n.useEffect)((function(){return document.querySelectorAll(".ant-menu-item").forEach((function(t){return t.addEventListener("click",(function(a){return k.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:if("/login"!=t.firstChild.id){a.next=3;break}return a.next=3,k.a.awrap(localStorage.removeItem("_kToken"));case 3:e.push(t.firstChild.id);case 4:case"end":return a.stop()}}))}))}))}),[]);return r.a.createElement(Ee.a,{theme:"dark",style:{background:"#47515a"},mode:"inline"},[{link:"/",title:"Domov",icon:"home"},{link:"/points",title:"To\u010dke",icon:"environment"},{link:"/admins",title:"Administratorji",icon:"user"},{link:"/login?status=420",title:"Odjava",icon:"logout"}].map((function(e,t){return r.a.createElement(Ee.a.Item,{key:t},r.a.createElement(be,e))})))},we=function(){var e=Object(d.g)();Object(n.useEffect)((function(){return document.querySelectorAll(".ant-menu-item").forEach((function(t){return t.addEventListener("click",(function(){return k.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",e.push(t.firstChild.id));case 1:case"end":return a.stop()}}))}))}))}),[]);return r.a.createElement(Ee.a,{theme:"dark",style:{background:"#47515a"},mode:"inline"},[{link:"/",title:"Domov",icon:"home"},{link:"/login",title:"Prijava",icon:"login"}].map((function(e,t){return r.a.createElement(Ee.a.Item,{key:t},r.a.createElement(be,e))})))},ke=l.a.Header,je=l.a.Content,xe=l.a.Footer,Oe=l.a.Sider,Te=s.a.Title;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement((function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(localStorage.getItem("_kToken")||void 0),s=Object(i.a)(o,2),f=s[0];s[1];return r.a.createElement(d.c,{history:h},r.a.createElement(l.a,{style:{minHeight:"100vh"}},r.a.createElement(p.a,null,r.a.createElement(Oe,{width:"17%",collapsible:!0,collapsed:a,onCollapse:c},!a&&r.a.createElement(ve,null),f?r.a.createElement(ye,null):r.a.createElement(we,null)),r.a.createElement(l.a,null,r.a.createElement(ke,{style:{background:"#2f3e53",padding:10}},r.a.createElement(Te,{style:{color:"#fff"}},r.a.createElement(u.a,{type:"database",theme:"filled"})," Kois Administracija")),r.a.createElement(je,{style:{margin:"0 16px"}},r.a.createElement(m.a,{style:{margin:"16px 0"}}),r.a.createElement("div",{id:"container",style:{padding:15,background:"#fff",minHeight:"40vh"}},r.a.createElement(pe,null))),r.a.createElement(xe,{style:{textAlign:"center",height:48,fontSize:16,padding:11}},"Samo Pritrznik & Janez Sedeljsak 2019/20 \xa9")))))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[265,1,2]]]);
//# sourceMappingURL=main.347eba33.chunk.js.map