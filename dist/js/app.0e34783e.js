(function(t){function e(e){for(var i,n,o=e[0],d=e[1],l=e[2],c=0,p=[];c<o.length;c++)n=o[c],r[n]&&p.push(r[n][0]),r[n]=0;for(i in d)Object.prototype.hasOwnProperty.call(d,i)&&(t[i]=d[i]);u&&u(e);while(p.length)p.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],i=!0,o=1;o<a.length;o++){var d=a[o];0!==r[d]&&(i=!1)}i&&(s.splice(e--,1),t=n(n.s=a[0]))}return t}var i={},r={app:0},s=[];function n(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=i,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(a,i,function(e){return t[e]}.bind(null,i));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],d=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=d;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var i=a("64a9"),r=a.n(i);r.a},"3f35":function(t,e,a){"use strict";var i=a("4420"),r=a.n(i);r.a},4420:function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var i=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{attrs:{id:"nav"}},[a("router-link",{attrs:{to:"/"}},[t._v("メインページ")]),t._v(" |\n    "),a("router-link",{attrs:{to:"/add"}},[t._v("追加する")]),t._v(" |\n    "),a("router-link",{attrs:{to:"/show"}},[t._v("詳細画面")])],1),a("router-view")],1)},s=[],n=(a("034f"),a("2877")),o={},d=Object(n["a"])(o,r,s,!1,null,null,null),l=d.exports,u=a("8c4f"),c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"book"},[a("div",{staticClass:"book_title"},[t._v("読書管理アプリ")]),a("div",{staticClass:"search_item"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.keyword,expression:"keyword"}],staticClass:"key_search",attrs:{type:"text",placeholder:"タイトルを入力してください"},domProps:{value:t.keyword},on:{input:function(e){e.target.composing||(t.keyword=e.target.value)}}}),a("button",{staticClass:"key_search_btn",on:{click:t.filteredItems}},[t._v("検索")])]),a("div",{staticClass:"book_contents"},[a("thead",[a("tr",t._l(t.heads,function(e){return a("th",{key:e},[t._v(t._s(e))])}),0)]),a("tbody",t._l(t.items,function(e){return a("tr",{key:e.id},[a("td",[t._v(t._s(e.title))]),a("td",[t._v(t._s(e.author))]),a("td",[t._v(t._s(e.publisher))])])}),0)]),a("div",{staticClass:"overflow-auto"},[a("div",{staticClass:"mt-3"},[a("h6",{staticClass:"text-center"},[t._v("ページ移動ボタン")]),a("b-pagination",{attrs:{"total-rows":t.rows,align:"center",name:"pagination","per-page":t.perPage},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1)]),a("div",{staticClass:"add_page_btn"},[a("router-link",{staticClass:"add_page_transition",attrs:{to:"/Add"}},[t._v("追加フォームへ")])],1),a("div",{staticClass:"show_page_btn"},[a("router-link",{staticClass:"show_page_transition",attrs:{to:"/show"}},[t._v("詳しく見る")])],1)])},p=[],v=a("bc3a"),_=a.n(v),f={data:function(){return{keyword:"",items:[],heads:["タイトル","著者名","出版社"],rows:100,currentPage:1,perPage:5,filterItem:this.title}},methods:{fetchTexts:function(){var t=this;_.a.get("/api/books").then(function(e){t.items=e.data,console.log(e)})},filteredItems:function(){var t=this;_.a.post("/api/search",{title:filterItem}).then(function(e){t.items=e.data;var a=[];for(var i in t.items){var r=t.items[i];-1!==r.title.indexOf(t.keyword)&&a.push(r)}return a})}},created:function(){this.fetchTexts()}},m=f,h=(a("c679"),Object(n["a"])(m,c,p,!1,null,null,null)),y=h.exports,b=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"add_contents"},[a("div",{staticClass:"add_title"},[t._v("レビュー追加画面")]),a("label",{staticClass:"add_item"},[a("div",[t._v("タイトル")]),t.error?a("div",{staticClass:"error"},[t._v(t._s(t.error))]):t._e(),a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.typedTitle,expression:"typedTitle"}],staticClass:"txt",attrs:{type:"text"},domProps:{value:t.typedTitle},on:{input:function(e){e.target.composing||(t.typedTitle=e.target.value)}}})])]),a("label",{staticClass:"add_item"},[a("div",[t._v("著者名")]),t.error?a("div",{staticClass:"error"},[t._v(t._s(t.error))]):t._e(),a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.typedAuthor,expression:"typedAuthor"}],staticClass:"txt",attrs:{type:"text"},domProps:{value:t.typedAuthor},on:{input:function(e){e.target.composing||(t.typedAuthor=e.target.value)}}})])]),a("label",{staticClass:"add_item"},[a("div",[t._v("出版社")]),a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.typedPublisher,expression:"typedPublisher"}],staticClass:"txt",attrs:{type:"text"},domProps:{value:t.typedPublisher},on:{input:function(e){e.target.composing||(t.typedPublisher=e.target.value)}}})])]),a("label",{staticClass:"add_item"},[a("div",[t._v("読了日")]),a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.typedDate,expression:"typedDate"}],attrs:{type:"date",value:"2019-01-01"},domProps:{value:t.typedDate},on:{input:function(e){e.target.composing||(t.typedDate=e.target.value)}}})])]),a("label",[a("div",[t._v("感想")]),t.error?a("div",{staticClass:"error"},[t._v(t._s(t.error))]):t._e(),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.typedText,expression:"typedText"}],staticClass:"txa",attrs:{name:"",cols:"20",rows:"10"},domProps:{value:t.typedText},on:{input:function(e){e.target.composing||(t.typedText=e.target.value)}}}),a("p",[t._v(t._s(t.charaCount)+" 文字")])]),a("br"),a("div",{staticClass:"add_btn"},[a("button",{staticClass:"add_btn_txt",attrs:{type:"submit"},on:{click:t.addText}},[t._v("登録する")])]),a("div",{staticClass:"add_home_btn"},[a("router-link",{staticClass:"add_return_btn",attrs:{to:"/"}},[t._v("ホームに戻る")])],1)])},g=[],x={data:function(){return{typedText:"",typedTitle:"",typedAuthor:"",typedPublisher:"",typedDate:""}},computed:{charaCount:function(){return this.typedText.length}},methods:{addText:function(){var t=this;_.a.post("/api/create",{title:this.typedTitle,author:this.typedAuthor,publisher:this.typedPublisher,description:this.typedText,created_at:this.typedDate}).then(function(e){t.items=e.data,t.typedTitle="",t.typedAuthor="",t.typedPublisher="",t.typedText="",t.typedDate=""}),""!==this.item.title.trim()?""!==this.item.author.trim()?""!==this.item.description.trim()||(this.error="感想は必須です"):this.error="著者名は必須です":this.error="タイトルは必須です"}}},C=x,w=(a("bfeb"),Object(n["a"])(C,b,g,!1,null,null,null)),k=w.exports,T=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"detail_contents"},[a("div",{staticClass:"detail_title"},[t._v("詳細画面")]),a("div",t._l(t.items,function(e){return a("div",{key:e.id,staticClass:"detail_comment"},[a("div",{staticClass:"detail_date"},[t._v("読了日："+t._s(e.created_at))]),a("div",{staticClass:"detail_comment_text"},[t._v(t._s(e.description))]),a("div",{staticClass:"detail_items"},[t._v("タイトル："+t._s(e.title))]),a("div",{staticClass:"detail_items"},[t._v("著者名："+t._s(e.author))]),a("div",{staticClass:"detail_items"},[t._v("出版社名："+t._s(e.publisher))]),a("div",{key:e.id,staticClass:"detail_items del_btn",on:{click:function(a){return t.delText(e.id)}}},[t._v("削除")])])}),0),a("router-link",{staticClass:"return_home_btn",attrs:{to:"/"}},[t._v("ホームに戻る")])],1)},P=[],O={data:function(){return{new_create:"",items:[]}},methods:{fetchTexts:function(){var t=this;_.a.get("/api/books").then(function(e){t.items=e.data})},delText:function(t){var e=this;return _.a.post("/api/del",{id:t}).then(function(t){e.items=t.data}),redirect("/")}},created:function(){this.fetchTexts()}},j=O,A=(a("3f35"),Object(n["a"])(j,T,P,!1,null,null,null)),D=A.exports;i["a"].use(u["a"]);var N=new u["a"]({routes:[{path:"/",name:"home",component:y},{path:"/add",name:"add",component:k},{path:"/show",name:"show",component:D}]}),S=a("2f62");i["a"].use(S["a"]);var $=new S["a"].Store({state:{},mutations:{},actions:{}});i["a"].config.productionTip=!1,new i["a"]({router:N,store:$,render:function(t){return t(l)}}).$mount("#app")},"64a9":function(t,e,a){},"8f89":function(t,e,a){},bfeb:function(t,e,a){"use strict";var i=a("fc98"),r=a.n(i);r.a},c679:function(t,e,a){"use strict";var i=a("8f89"),r=a.n(i);r.a},fc98:function(t,e,a){}});
//# sourceMappingURL=app.0e34783e.js.map