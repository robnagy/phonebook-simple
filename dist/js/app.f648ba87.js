(function(t){function e(e){for(var r,c,s=e[0],l=e[1],u=e[2],f=0,p=[];f<s.length;f++)c=s[f],o[c]&&p.push(o[c][0]),o[c]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);i&&i(e);while(p.length)p.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,s=1;s<n.length;s++){var l=n[s];0!==o[l]&&(r=!1)}r&&(a.splice(e--,1),t=c(c.s=n[0]))}return t}var r={},o={app:0},a=[];function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=r,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var i=l;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("64a9"),o=n.n(r);o.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("PhoneBook")],1)},a=[],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-row",[n("h2",[t._v("Phone Book")])]),n("el-row",[n("el-col",{attrs:{span:4,offset:10}},[n("el-input",{attrs:{placeholder:"Filter all fields"},model:{value:t.filter,callback:function(e){t.filter=e},expression:"filter"}})],1)],1),n("el-row",[n("el-col",{attrs:{span:16,offset:4}},[n("PhoneBookTable",{attrs:{data:t.filteredContacts,error:t.contactsErrorMessage}})],1)],1)],1)},s=[],l=(n("6762"),n("2fdb"),n("a4bb")),u=n.n(l),i=n("bc3a"),f=n.n(i),p={request:function(t,e,n,r,o){var a=t.url,c=t.method;f.a.request({method:c,url:a,data:e,params:n,responseType:"json",headers:{"Content-Type":"application/json"}}).then(function(t){r(t.data)}).catch(function(t){o(t,a)})}},d=p,h={get:{contacts:{url:"http://www.mocky.io/v2/581335f71000004204abaf83",method:"GET"}}},b={data:function(){return{contacts:[],contactsError:!1,contactsErrorMessage:"",contactsLoading:!0}},created:function(){this.fetchContacts()},methods:{fetchContacts:function(){d.request(h.get.contacts,null,null,this.fetchContactsSuccess,this.fetchContactsFailure)},fetchContactsSuccess:function(t){this.contacts=t.contacts||null,this.contactsLoading=!1},fetchContactsFailure:function(t,e){this.contactsError=!0,this.contactsErrorMessage=t.message||"An occurred fetching the contacts, please try refresh the page",console.log("Fetch contacts error, "+e)}}},g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-table",{ref:"singleTable",staticStyle:{width:"100%"},attrs:{data:t.data,"default-sort":{prop:"name",order:"ascending"},"empty-text":t.message,"highlight-current-row":""}},[n("el-table-column",{attrs:{label:"Name",prop:"name",sortable:""}}),n("el-table-column",{attrs:{label:"Phone",prop:"phone_number",sortable:""}}),n("el-table-column",{attrs:{label:"Address",prop:"address",width:"400",sortable:"",align:"right"}})],1)},m=[],v={props:["data","error"],data:function(){return{loading:"Data loading"}},computed:{message:function(){return this.error.length>0?this.error:this.loading}}},w=v,y=n("2877"),_=Object(y["a"])(w,g,m,!1,null,null,null),j=_.exports,x={components:{PhoneBookTable:j},mixins:[b],props:["msg"],data:function(){return{filter:""}},computed:{filteredContacts:function(){var t=this;return this.contacts.filter(function(e){return u()(e).some(function(n){return e[n].toLowerCase().includes(t.filter.toLowerCase())})})}}},O=x,P=Object(y["a"])(O,c,s,!1,null,null,null),C=P.exports,k={name:"app",components:{PhoneBook:C}},E=k,T=(n("034f"),Object(y["a"])(E,o,a,!1,null,null,null)),S=T.exports,M=n("5c96"),B=n.n(M);n("0fae"),n("2ef0");r["default"].use(B.a),r["default"].config.productionTip=!1,new r["default"]({render:function(t){return t(S)}}).$mount("#app")},"64a9":function(t,e,n){}});
//# sourceMappingURL=app.f648ba87.js.map