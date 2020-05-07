(this.webpackJsonpthe=this.webpackJsonpthe||[]).push([[0],{14:function(e,n,t){e.exports=t(38)},19:function(e,n,t){},37:function(e,n,t){},38:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),r=t(13),c=t.n(r),u=(t(19),t(2)),l=function(e){var n=e.addNew,t=e.newName,a=e.newNumber,r=e.handleNameChange,c=e.handleNumberChange;return o.a.createElement(o.a.Fragment,null,o.a.createElement("form",{onSubmit:n},o.a.createElement("div",null,"Name: ",o.a.createElement("input",{value:t,onChange:r})),o.a.createElement("div",null,"Number: ",o.a.createElement("input",{value:a,onChange:c})),o.a.createElement("div",null,o.a.createElement("button",{type:"submit"},"Add"))))},i=function(e){var n=e.person,t=e.deletePerson;return o.a.createElement("tbody",null,o.a.createElement("tr",null,o.a.createElement("td",null,n.name," ",n.number),o.a.createElement("td",null,o.a.createElement("button",{onClick:t},"Delete"))))},m=function(e){var n=e.phonebookList,t=e.deletePerson;return o.a.createElement("table",null,n.map((function(e){return o.a.createElement(i,{key:e.id,person:e,deletePerson:function(){return t(e)}})})))},d=function(e){var n=e.filter,t=e.handleFilterChange;return o.a.createElement("div",null,"Filter by name or number"," ",o.a.createElement("input",{value:n,onChange:t}))},f=function(e){var n=e.msg,t=e.error;return null===n&&null===t?null:n?o.a.createElement("div",{className:"msg"},n):o.a.createElement("div",{className:"error"},t)},s=t(3),h=t.n(s),b="https://safe-beyond-31798.herokuapp.com/api/persons",E=function(){return h.a.get(b).then((function(e){return e.data}))},w=function(e){return h.a.post(b,e).then((function(e){return e.data}))},p=function(e,n){return h.a.put("".concat(b,"/").concat(e),n).then((function(e){return e.data}))},v=function(e){return h.a.delete("".concat(b,"/").concat(e))},g=(t(37),function(){var e=Object(a.useState)([]),n=Object(u.a)(e,2),t=n[0],r=n[1],c=Object(a.useState)(""),i=Object(u.a)(c,2),s=i[0],h=i[1],b=Object(a.useState)(""),g=Object(u.a)(b,2),k=g[0],C=g[1],N=Object(a.useState)(""),j=Object(u.a)(N,2),O=j[0],y=j[1],P=Object(a.useState)(null),L=Object(u.a)(P,2),S=L[0],D=L[1],F=Object(a.useState)(null),U=Object(u.a)(F,2),A=U[0],q=U[1],B=function(){setTimeout((function(){D(null)}),3e3)},J=function(){setTimeout((function(){q(null)}),5e3)};Object(a.useEffect)((function(){E().then((function(e){r(e)})).catch((function(e){q("Request failure. Unable to fetch data from the server."),J()}))}),[]);var R=""!==O?t.filter((function(e){return e.name.toLowerCase().includes(O.toLowerCase())||e.number.toLowerCase().includes(O.toLowerCase())})):t;return o.a.createElement("div",null,o.a.createElement("h1",null,"Phonebook"),o.a.createElement(f,{msg:S,error:A}),o.a.createElement(d,{filter:O,handleFilterChange:function(e){y(e.target.value)}}),o.a.createElement("h2",null,"Add a New"),o.a.createElement(l,{addNew:function(e){e.preventDefault();var n={name:s,number:k},a=t.find((function(e){return e.name.toLowerCase()===s.toLowerCase()}));a?window.confirm("".concat(s," is already added to the Phonebook. Do you want to replace the old number with a new one?"))&&p(a.id,n).then((function(e){r(t.map((function(n){return n.id!==a.id?n:e}))),D("Updated number for ".concat(a.name,": ").concat(k," ")),B()})).catch((function(e){q("Unable to update. ".concat(a.name," is already deleted from the Phonebook.")),J(),r(t.filter((function(e){return e.id!==a.id})))})):w(n).then((function(e){r(t.concat(e)),D("Added ".concat(e.name," to the Phonebook.")),B()})).catch((function(e){q("Request failure. Unable to add new person to the Phonebook."),J()})),h(""),C("")},newName:s,newNumber:k,handleNameChange:function(e){h(e.target.value)},handleNumberChange:function(e){C(e.target.value)}}),o.a.createElement("h2",null,"Numbers"),o.a.createElement(m,{phonebookList:R,deletePerson:function(e){window.confirm("Do you want to delete: ".concat(e.name))&&v(e.id).then((function(){r(t.filter((function(n){return n.id!==e.id}))),D("Deleted ".concat(e.name," from the Phonebook.")),B()})).catch((function(n){q("".concat(e.name," is already deleted from the Phonebook.")),J(),r(t.filter((function(n){return n.id!==e.id})))}))}}))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[14,1,2]]]);
//# sourceMappingURL=main.eba2dd12.chunk.js.map