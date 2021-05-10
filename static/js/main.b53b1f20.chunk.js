(this.webpackJsonpcontacts=this.webpackJsonpcontacts||[]).push([[0],{25:function(t,e,n){},33:function(t,e,n){},34:function(t,e,n){},42:function(t,e,n){},43:function(t,e,n){},44:function(t,e,n){},45:function(t,e,n){},46:function(t,e,n){"use strict";n.r(e);var c=n(1),s=n.n(c),a=n(26),r=n.n(a),o=n(7),i=n(9),l=(n(33),n(34),n(0)),u=function(t){var e=t.phone,n=t.text,c=t.color,s=t.textColor,a=t.border;return Object(l.jsx)(l.Fragment,{children:e?Object(l.jsx)("a",{className:"phone",href:"tel:".concat(e),children:Object(l.jsx)("img",{src:"./Assets/Phone.svg",alt:""})}):Object(l.jsx)("button",{className:"submit",style:{background:c,color:s,border:a},children:n})})},j=function(){var t=Object(c.useState)(" "),e=Object(o.a)(t,2),n=e[0],s=e[1];return Object(l.jsxs)("div",{className:"login",children:[Object(l.jsx)("h1",{children:"SignIn"}),Object(l.jsxs)("form",{className:"login__form",action:"",onInput:function(t){t.preventDefault()," "!==n&&localStorage.setItem("name",JSON.stringify(t.target.value))},children:[Object(l.jsx)("input",{className:"login__input",type:"text",placeholder:"What's your name?",onInput:function(t){s(t.target.value)}}),/\S/.test(n)?Object(l.jsx)(i.b,{className:"login__btn",to:"/Contacts",children:Object(l.jsx)(u,{text:"Submit",color:"#06C668"})}):Object(l.jsx)("div",{onClick:function(){return alert("Data entered incorrectly")},children:Object(l.jsx)(u,{text:"Submit",color:"#06C668"})})]})]})},d=n(2),p=n(17),h=n(23),b=n(13),m=n(14),O=n(16),f=n(15),x=n(22),g=n.n(x),v=n(28),_=function(t){var e=t.toggleRedact,n=t.redact,s=t.redactInfo,a=t.item,r=t.sortUsers,i=Object(c.useState)(" "),j=Object(o.a)(i,2),d=j[0],p=j[1],h=Object(c.useState)(" "),b=Object(o.a)(h,2),m=b[0],O=b[1];return Object(l.jsxs)("div",{className:"pop-up__content",children:[Object(l.jsx)("img",{onClick:function(){return e(!n)},className:"pop-up__close",src:"./Assets/cross.svg",alt:""}),Object(l.jsx)("div",{className:"pop-up__title",children:"Redact contact"}),Object(l.jsxs)("form",{className:"pop-up__form",action:"",onSubmit:function(t){t.preventDefault(),/^[a-zA-Z\u00C0-\u00ff]+\s+[a-zA-Z\u00C0-\u00ff]+$/.test(d)&&/^((8|\+7)[- ]?)?(\(?\d{3}\)?[- ]?)?[\d\- ]{7,10}$/.test(m)?(s(a.id,d.charAt(0).toUpperCase()+d.slice(1),m),e(!n),r()):alert("Data entered incorrectly")},children:[Object(l.jsx)("input",{type:"text",className:"pop-up__input",placeholder:"Contact Name",maxLength:"16",onChange:function(t){return p(t.target.value)}}),Object(l.jsx)("input",{type:"text",className:"pop-up__input",placeholder:"Contact Phone",maxLength:"10",onChange:function(t){return O(t.target.value)}}),Object(l.jsx)(u,{text:"Save",color:"#06C668"})]}),Object(l.jsx)("div",{onClick:function(){e(!n),p(""),O("")},children:Object(l.jsx)(u,{text:"Close",textColor:"red",border:"1px solid red",color:"inherit"})})]})},N=(n(42),n(25),function(t){Object(O.a)(n,t);var e=Object(f.a)(n);function n(){var t;Object(b.a)(this,n);for(var c=arguments.length,s=new Array(c),a=0;a<c;a++)s[a]=arguments[a];return(t=e.call.apply(e,[this].concat(s))).state={img:null,redact:!1},t.toggleRedact=function(){t.setState({redact:!t.state.redact})},t}return Object(m.a)(n,[{key:"getRequest",value:function(){var t=Object(v.a)(g.a.mark((function t(){var e;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n=this.props.item.id,fetch("https://picsum.photos/id/".concat(n,"/info")).then((function(t){if(!t.ok)throw new Error("".concat(t.status," - ").concat(t.statusText));return t.json()}));case 2:e=t.sent,this.setState({img:e.download_url});case 4:case"end":return t.stop()}var n}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){this.getRequest()}},{key:"render",value:function(){var t=this,e=this.state.redact,n=this.props,c=n.item,s=n.redactInfo,a=n.sortUsers;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{onClick:function(){return t.toggleRedact()},className:"item__edit",children:Object(l.jsx)("img",{src:"./Assets/Edit.svg",alt:""})}),Object(l.jsx)("img",{className:"item__photo",src:this.state.img,alt:""}),Object(l.jsx)("div",{className:"item__title",children:c.name}),Object(l.jsx)(u,{phone:c.phone}),e&&Object(l.jsx)("div",{className:"pop-up",children:Object(l.jsx)(_,{toggleRedact:this.toggleRedact,item:c,redact:e,sortUsers:a,redactInfo:s})})]})}}]),n}(s.a.Component)),C=(n(43),function(t){var e=t.toggleAdd;return Object(l.jsxs)("div",{className:"header",children:[Object(l.jsxs)("div",{className:"header__container header__container--space",children:[Object(l.jsxs)("h1",{className:"header__title",children:["Hello, ",JSON.parse(localStorage.getItem("name")).charAt(0).toUpperCase()+JSON.parse(localStorage.getItem("name")).slice(1)]}),Object(l.jsx)("div",{className:"header__logout",children:Object(l.jsx)(i.b,{className:"",to:"/",children:"LogOut"})})]}),Object(l.jsxs)("div",{className:"header__btn-list",children:[Object(l.jsx)("div",{className:"header__btn",onClick:function(){return e()},children:Object(l.jsx)(u,{text:"New Contact",color:"black"})}),Object(l.jsx)("div",{className:"header__btn",onClick:function(){return alert("Does not work")},children:Object(l.jsx)(u,{text:"Download CSV",color:"black"})})]})]})}),S=(n(44),function(t){var e=t.toggleAdd,n=t.open,s=t.takeInfo,a=t.sortUsers,r=Object(c.useState)(" "),i=Object(o.a)(r,2),j=i[0],d=i[1],p=Object(c.useState)(" "),h=Object(o.a)(p,2),b=h[0],m=h[1];return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"pop-up__content",children:[Object(l.jsx)("img",{onClick:function(){return e(!n)},className:"pop-up__close",src:"./Assets/cross.svg",alt:""}),Object(l.jsx)("div",{className:"pop-up__title",children:"New contact"}),Object(l.jsxs)("form",{className:"pop-up__form",action:"",onSubmit:function(t){t.preventDefault(),/^[a-zA-Z\u00C0-\u00ff]+\s+[a-zA-Z\u00C0-\u00ff]+$/.test(j)&&/^((8|\+7)[- ]?)?(\(?\d{3}\)?[- ]?)?[\d\- ]{7,10}$/.test(b)?(s(j.charAt(0).toUpperCase()+j.slice(1),b),a(),e(!n)):alert("data entered incorrectly")},children:[Object(l.jsx)("input",{type:"text",className:"pop-up__input",placeholder:"Contact Name",maxLength:"16",onChange:function(t){return d(t.target.value)}}),Object(l.jsx)("input",{type:"text",className:"pop-up__input",placeholder:"Contact Phone",maxLength:"10",onChange:function(t){return m(t.target.value)}}),Object(l.jsx)(u,{text:"Save",color:"#06C668"})]}),Object(l.jsx)("div",{onClick:function(){e(!n),d(""),m("")},children:Object(l.jsx)(u,{text:"Close",textColor:"red",border:"1px solid red",color:"inherit"})})]})})}),y=function(t){Object(O.a)(n,t);var e=Object(f.a)(n);function n(){var t;Object(b.a)(this,n);for(var c=arguments.length,s=new Array(c),a=0;a<c;a++)s[a]=arguments[a];return(t=e.call.apply(e,[this].concat(s))).state={open:!1,users:[]},t.toggleAdd=function(){t.setState({open:!t.state.open})},t.redactInfo=function(e,n,c){t.setState({users:t.state.users.map((function(t){return t.id!==e?t:Object(h.a)(Object(h.a)({},t),{},{name:n,phone:c,id:e})}))},(function(){var e;(e=t).saveUsers.apply(e,Object(p.a)(t.state.users))}))},t.takeInfo=function(e,n){t.setState((function(c){var s,a={name:e,phone:n,id:c.users.length+1};return(s=t).saveUsers.apply(s,Object(p.a)(t.state.users).concat([a])),{users:[].concat(Object(p.a)(c.users),[a])}}))},t.saveUsers=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];localStorage.setItem("users",JSON.stringify(e))},t.sortUsers=function(){t.setState((function(t){return{users:t.users.sort((function(t,e){var n=t.name.toLowerCase(),c=e.name.toLowerCase();return n<c?-1:n>c?1:0}))}}))},t}return Object(m.a)(n,[{key:"componentDidMount",value:function(){var t=JSON.parse(localStorage.getItem("users"));null!==t&&this.setState({users:t})}},{key:"render",value:function(){var t=this,e=this.state,n=e.open,c=e.users,s=e.redact;return Object(l.jsxs)("div",{className:"contacts",children:[Object(l.jsx)(C,{toggleAdd:this.toggleAdd}),Object(l.jsx)("div",{className:"contacts__container",children:null!==c&&c.map((function(e,n){return Object(l.jsx)("div",{className:"item__container",children:Object(l.jsx)(N,{item:e,redact:s,sortUsers:t.sortUsers,redactInfo:t.redactInfo})},n)}))}),n&&Object(l.jsx)("div",{className:n?"pop-up":"pop-up close",children:Object(l.jsx)(S,{toggleAdd:this.toggleAdd,sortUsers:this.sortUsers,open:!0,takeInfo:this.takeInfo})})]})}}]),n}(s.a.Component),k=(n(45),function(){var t=Object(c.useState)(""),e=Object(o.a)(t,2),n=e[0],s=e[1];return Object(l.jsx)(i.a,{children:Object(l.jsxs)(d.c,{children:[Object(l.jsx)(d.a,{path:"/Contacts",children:Object(l.jsx)(y,{name:n})}),Object(l.jsx)(d.a,{path:"/",children:Object(l.jsx)(j,{setName:s})})]})})});r.a.render(Object(l.jsx)(k,{}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.b53b1f20.chunk.js.map