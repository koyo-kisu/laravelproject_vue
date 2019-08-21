(function(t){function e(e){for(var n,s,o=e[0],l=e[1],d=e[2],c=0,p=[];c<o.length;c++)s=o[c],i[s]&&p.push(i[s][0]),i[s]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(e);while(p.length)p.shift()();return r.push.apply(r,d||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],n=!0,o=1;o<a.length;o++){var l=a[o];0!==i[l]&&(n=!1)}n&&(r.splice(e--,1),t=s(s.s=a[0]))}return t}var n={},i={app:0},r=[];function s(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=n,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(a,n,function(e){return t[e]}.bind(null,n));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var d=0;d<o.length;d++)e(o[d]);var u=l;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var n=a("64a9"),i=a.n(n);i.a},"3f35":function(t,e,a){"use strict";var n=a("4420"),i=a.n(n);i.a},4420:function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var n=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{attrs:{id:"nav"}},[a("router-link",{attrs:{to:"/"}},[t._v("メインページ")]),t._v(" |\n    "),a("router-link",{attrs:{to:"/add"}},[t._v("追加する")]),t._v(" |\n    "),a("router-link",{attrs:{to:"/show"}},[t._v("詳細画面")])],1),a("router-view")],1)},r=[],s=(a("034f"),a("2877")),o={},l=Object(s["a"])(o,i,r,!1,null,null,null),d=l.exports,u=a("8c4f"),c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"book"},[a("div",{staticClass:"book_title"},[t._v("mainページ")]),a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.keyword,expression:"keyword"}],staticClass:"key_search",attrs:{type:"text",placeholder:"タイトルを入力してください"},domProps:{value:t.keyword},on:{input:function(e){e.target.composing||(t.keyword=e.target.value)}}}),a("button",{on:{click:function(e){return t.filteredItems(t.item.title)}}},[t._v("検索")])]),a("div",{staticClass:"book_contents"},[a("thead",[a("tr",t._l(t.heads,function(e){return a("th",{key:e},[t._v(t._s(e))])}),0)]),a("tbody",t._l(t.items,function(e){return a("tr",{key:e.id},[a("td",[t._v(t._s(e.title))]),a("td",[t._v(t._s(e.author))]),a("td",[t._v(t._s(e.publisher))])])}),0)]),a("div",{staticClass:"overflow-auto"},[a("div",{staticClass:"mt-3"},[a("h6",{staticClass:"text-center"},[t._v("ページ移動ボタン")]),a("b-pagination",{attrs:{"total-rows":t.rows,align:"center",name:"pagination","per-page":t.perPage},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1)]),a("div",{staticClass:"add_page_btn"},[a("router-link",{staticClass:"add_page_transition",attrs:{to:"/Add"}},[t._v("追加フォームへ")])],1)])},p=[],v=a("bc3a"),f=a.n(v),_={data:function(){return{keyword:"",new_create:"",items:[],heads:["タイトル","著者名","出版社"],rows:100,currentPage:1,perPage:5}},methods:{fetchTexts:function(){var t=this;f.a.get("/api/books").then(function(e){t.items=e.data,console.log(e)})},filteredItems:function(){var t=this;f.a.get("/api/books").then(function(e){t.items=e.data;var a=[];for(var n in t.items){var i=t.items[n];-1!==i.title.indexOf(t.keyword)&&a.push(i)}return a})}},created:function(){this.fetchTexts()}},m=_,h=(a("c679"),Object(s["a"])(m,c,p,!1,null,null,null)),y=h.exports,b=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"add_contents"},[a("div",{staticClass:"add_title"},[t._v("レビュー追加画面")]),a("label",{staticClass:"add_item"},[a("div",[t._v("タイトル")]),a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.typedTitle,expression:"typedTitle"}],staticClass:"txt",attrs:{type:"text"},domProps:{value:t.typedTitle},on:{input:function(e){e.target.composing||(t.typedTitle=e.target.value)}}})])]),a("label",{staticClass:"add_item"},[a("div",[t._v("著者名")]),a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.typedAuthor,expression:"typedAuthor"}],staticClass:"txt",attrs:{type:"text"},domProps:{value:t.typedAuthor},on:{input:function(e){e.target.composing||(t.typedAuthor=e.target.value)}}})])]),a("label",{staticClass:"add_item"},[a("div",[t._v("出版社")]),a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.typedPublisher,expression:"typedPublisher"}],staticClass:"txt",attrs:{type:"text"},domProps:{value:t.typedPublisher},on:{input:function(e){e.target.composing||(t.typedPublisher=e.target.value)}}})])]),t._m(0),a("label",[a("div",[t._v("感想")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.typedText,expression:"typedText"}],staticClass:"txa",attrs:{name:"",cols:"20",rows:"10"},domProps:{value:t.typedText},on:{input:function(e){e.target.composing||(t.typedText=e.target.value)}}}),a("p",[t._v(t._s(t.charaCount)+" 文字")])]),a("br"),a("div",{staticClass:"add_btn"},[a("button",{staticClass:"add_btn_txt",attrs:{type:"submit"},on:{click:t.addText}},[t._v("登録する")])])])},x=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("label",{attrs:{for:""}},[a("div",[t._v("読了日")]),a("div",[a("input",{attrs:{type:"date",value:"2019-01-01"}})])])}],g={data:function(){return{typedText:"",typedTitle:"",typedAuthor:"",typedPublisher:""}},computed:{charaCount:function(){return this.typedText.length}},methods:{addText:function(){var t=this;f.a.post("/api/create",{title:this.typedTitle,author:this.typedAuthor,publisher:this.typedPublisher,description:this.typedText}).then(function(e){t.items=e.data,t.typedTitle="",t.typedAuthor="",t.typedPublisher="",t.typedText=""})}}},w=g,C=(a("bfeb"),Object(s["a"])(w,b,x,!1,null,null,null)),k=C.exports,T=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"detail_contents"},[a("div",{staticClass:"detail_title"},[t._v("詳細画面")]),a("div",{staticClass:"detail_date"},[t._v("読了日：{{}}")]),a("div",t._l(t.items,function(e){return a("div",{key:e.id,staticClass:"detail_comment"},[a("div",[t._v(t._s(e.id))]),a("div",{staticClass:"detail_comment_text"},[t._v(t._s(e.description))]),a("div",{staticClass:"detail_items"},[t._v("タイトル："+t._s(e.title))]),a("div",{staticClass:"detail_items"},[t._v("著者名："+t._s(e.author))]),a("div",{staticClass:"detail_items"},[t._v("出版社名："+t._s(e.publisher))]),a("div",{key:e.id,staticClass:"detail_items del_btn",on:{click:function(a){return t.delText(e.id)}}},[t._v("削除")])])}),0),a("router-link",{staticClass:"return_home_btn",attrs:{to:"/"}},[t._v("ホームに戻る")])],1)},P=[],O={data:function(){return{new_create:"",items:[]}},methods:{fetchTexts:function(){var t=this;f.a.get("/api/books").then(function(e){t.items=e.data})},delText:function(t){var e=this;f.a.post("/api/del",{id:t}).then(function(t){e.items=t.data})}},created:function(){this.fetchTexts()}},j=O,A=(a("3f35"),Object(s["a"])(j,T,P,!1,null,null,null)),S=A.exports;n["a"].use(u["a"]);var $=new u["a"]({routes:[{path:"/",name:"home",component:y},{path:"/add",name:"add",component:k},{path:"/show",name:"show",component:S}]}),E=a("2f62");n["a"].use(E["a"]);var N=new E["a"].Store({state:{},mutations:{},actions:{}});n["a"].config.productionTip=!1,new n["a"]({router:$,store:N,render:function(t){return t(d)}}).$mount("#app")},"64a9":function(t,e,a){},"8f89":function(t,e,a){},bfeb:function(t,e,a){"use strict";var n=a("fc98"),i=a.n(n);i.a},c679:function(t,e,a){"use strict";var n=a("8f89"),i=a.n(n);i.a},fc98:function(t,e,a){}});
//# sourceMappingURL=app.a1e058e6.js.map