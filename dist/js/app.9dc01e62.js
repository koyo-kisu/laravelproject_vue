(function(t){function e(e){for(var s,r,o=e[0],d=e[1],l=e[2],c=0,p=[];c<o.length;c++)r=o[c],a[r]&&p.push(a[r][0]),a[r]=0;for(s in d)Object.prototype.hasOwnProperty.call(d,s)&&(t[s]=d[s]);u&&u(e);while(p.length)p.shift()();return n.push.apply(n,l||[]),i()}function i(){for(var t,e=0;e<n.length;e++){for(var i=n[e],s=!0,o=1;o<i.length;o++){var d=i[o];0!==a[d]&&(s=!1)}s&&(n.splice(e--,1),t=r(r.s=i[0]))}return t}var s={},a={app:0},n=[];function r(e){if(s[e])return s[e].exports;var i=s[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=t,r.c=s,r.d=function(t,e,i){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(i,s,function(e){return t[e]}.bind(null,s));return i},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],d=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=d;n.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"034f":function(t,e,i){"use strict";var s=i("64a9"),a=i.n(s);a.a},"0bbb":function(t,e,i){},"3f35":function(t,e,i){"use strict";var s=i("4420"),a=i.n(s);a.a},4420:function(t,e,i){},"56d7":function(t,e,i){"use strict";i.r(e);i("cadf"),i("551c"),i("f751"),i("097d");var s=i("2b0e"),a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("div",{attrs:{id:"nav"}},[i("router-link",{attrs:{to:"/"}},[t._v("メインページ")]),t._v(" |\n    "),i("router-link",{attrs:{to:"/add"}},[t._v("追加する")]),t._v(" |\n    "),i("router-link",{attrs:{to:"/show"}},[t._v("一覧画面")]),t._v(" |\n    "),i("router-link",{attrs:{to:"/edit"}},[t._v("編集画面")]),t._v(" |\n    "),i("router-link",{attrs:{to:"/detail"}},[t._v("詳細画面")])],1),i("router-view")],1)},n=[],r=(i("034f"),i("2877")),o={},d=Object(r["a"])(o,a,n,!1,null,null,null),l=d.exports,u=i("8c4f"),c=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"book"},[i("div",{staticClass:"book_title"},[t._v("読書管理アプリ")]),i("div",{staticClass:"book_contents"},[i("thead",[i("tr",t._l(t.heads,function(e){return i("th",{key:e},[t._v(t._s(e))])}),0)]),i("tbody",t._l(t.items,function(e){return i("tr",{key:e.id},[i("td",[t._v(t._s(e.title))]),i("td",[t._v(t._s(e.author))]),i("td",[t._v(t._s(e.publisher))])])}),0)]),i("div",{staticClass:"add_page_btn"},[i("router-link",{staticClass:"add_page_transition",attrs:{to:"/Add"}},[t._v("追加フォームへ")])],1),i("div",{staticClass:"show_page_btn"},[i("router-link",{staticClass:"show_page_transition",attrs:{to:"/show"}},[t._v("詳しく見る")])],1)])},p=[],v=i("bc3a"),_=i.n(v),h={data:function(){return{items:[],heads:["タイトル","著者名","出版社"]}},methods:{fetchTexts:function(){var t=this;_.a.get("/api/books").then(function(e){t.items=e.data,console.log(e)})}},created:function(){this.fetchTexts()}},m=h,f=(i("c679"),Object(r["a"])(m,c,p,!1,null,null,null)),y=f.exports,b=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"add_contents"},[i("div",{staticClass:"add_title"},[t._v("レビュー追加画面")]),i("label",{staticClass:"add_item"},[i("div",[t._v("タイトル")]),i("div",[i("input",{directives:[{name:"model",rawName:"v-model",value:t.typedTitle,expression:"typedTitle"}],staticClass:"txt",attrs:{name:"title",type:"text",required:""},domProps:{value:t.typedTitle},on:{input:function(e){e.target.composing||(t.typedTitle=e.target.value)}}})]),t._l(t.errors,function(e){return i("div",{key:e,staticClass:"error"},[t._v(t._s(e))])})],2),i("label",{staticClass:"add_item"},[i("div",[t._v("著者名")]),i("div",[i("input",{directives:[{name:"model",rawName:"v-model",value:t.typedAuthor,expression:"typedAuthor"}],staticClass:"txt",attrs:{name:"author",type:"text",required:""},domProps:{value:t.typedAuthor},on:{input:function(e){e.target.composing||(t.typedAuthor=e.target.value)}}})]),t._l(t.errors,function(e){return i("div",{key:e,staticClass:"error"},[t._v(t._s(e))])})],2),i("label",{staticClass:"add_item"},[i("div",[t._v("出版社")]),i("div",[i("input",{directives:[{name:"model",rawName:"v-model",value:t.typedPublisher,expression:"typedPublisher"}],staticClass:"txt",attrs:{name:"publisher",type:"text"},domProps:{value:t.typedPublisher},on:{input:function(e){e.target.composing||(t.typedPublisher=e.target.value)}}})])]),i("label",{staticClass:"add_item"},[i("div",[t._v("読了日")]),i("div",[i("input",{directives:[{name:"model",rawName:"v-model",value:t.finish_date,expression:"finish_date"}],attrs:{name:"finish_date",type:"date"},domProps:{value:t.finish_date},on:{input:function(e){e.target.composing||(t.finish_date=e.target.value)}}})])]),i("label",{staticClass:"add_item",attrs:{for:"select_genre"}},[i("div",[t._v("ジャンル")]),i("select",{directives:[{name:"model",rawName:"v-model",value:t.typedGenre,expression:"typedGenre"}],attrs:{name:"genre",id:"genre"},on:{change:function(e){var i=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.typedGenre=e.target.multiple?i:i[0]}}},t._l(t.roles,function(e){return i("option",{key:e,attrs:{selected:"小説"}},[t._v(t._s(e))])}),0)]),i("label",[i("div",[t._v("感想")]),i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.typedText,expression:"typedText"}],staticClass:"txa",attrs:{name:"description",cols:"20",rows:"10",value:"{{ old('description') }}"},domProps:{value:t.typedText},on:{input:function(e){e.target.composing||(t.typedText=e.target.value)}}}),i("p",[t._v(t._s(t.charaCount)+" 文字")])]),i("br"),i("div",{staticClass:"add_btn"},[i("button",{staticClass:"add_btn_txt",attrs:{type:"submit"},on:{click:t.addText}},[t._v("登録する")])]),i("div",{staticClass:"add_home_btn"},[i("router-link",{staticClass:"add_return_btn",attrs:{to:"/"}},[t._v("ホームに戻る")])],1)])},x=[],C={data:function(){return{typedText:"",typedTitle:"",typedAuthor:"",typedPublisher:"",typedDate:"",typedGenre:"",errors:[],roles:["小説","ビジネス本","哲学","漫画"]}},computed:{charaCount:function(){return this.typedText.length}},methods:{addText:function(){var t=this;_.a.post("/api/create",{title:this.typedTitle,author:this.typedAuthor,publisher:this.typedPublisher,description:this.typedText,finish_date:this.finish_date,genre:this.typedGenre}).then(function(e){t.items=e.data,t.typedTitle="",t.typedAuthor="",t.typedPublisher="",t.typedText="",t.finish_date="",t.typedGenre=""}).catch(function(t){this.errors=[],this.title||this.errors.push("タイトルは必須です"),this.author||this.errors.push("著者名は必須です")})}}},g=C,w=(i("bfeb"),Object(r["a"])(g,b,x,!1,null,null,null)),k=w.exports,T=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"show_contents"},[i("div",{staticClass:"show_title"},[t._v("一覧画面")]),i("div",{staticClass:"search_item"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.keyword,expression:"keyword"}],staticClass:"key_search",attrs:{type:"text",placeholder:"タイトルを入力してください"},domProps:{value:t.keyword},on:{input:function(e){e.target.composing||(t.keyword=e.target.value)}}}),i("button",{staticClass:"key_search_btn",on:{click:t.filteredItems}},[t._v("検索")])]),i("div",t._l(t.items,function(e){return i("div",{key:e.id,staticClass:"show_comment"},[i("div",{staticClass:"show_date"},[t._v("読み終えた日："+t._s(e.finish_date))]),i("div",{staticClass:"show_comment_text"},[t._v(t._s(e.description))]),i("div",{staticClass:"show_items"},[t._v("タイトル："+t._s(e.title))]),i("div",{staticClass:"show_items"},[t._v("著者名："+t._s(e.author))]),i("div",{staticClass:"show_items"},[t._v("出版社名："+t._s(e.publisher))]),i("div",{staticClass:"show_items"},[t._v("ジャンル："+t._s(e.jenre))]),i("div",{key:e.id,staticClass:"show_items del_btn",on:{click:function(i){return t.delText(e.id)}}},[t._v("削除")]),i("div",{key:e.id,staticClass:"show_items edit_btn",on:{click:function(i){return t.onEdit(e.id)}}},[t._v("編集")])])}),0),i("router-link",{staticClass:"return_home_btn",attrs:{to:"/"}},[t._v("ホームに戻る")])],1)},P=[],j=i("bd86"),A={data:function(){return{new_create:"",items:[],keyword:this.title}},methods:{fetchTexts:function(){var t=this;_.a.get("/api/books").then(function(e){t.items=e.data})},delText:function(t){_.a.post("/api/del",{id:t}).then(function(t){location.href="/"})},filteredItems:function(){var t=this;_.a.post("/api/search",Object(j["a"])({title:this.keyword},"title",this.keyword)).then(function(e){t.items=e.data;var i=[];for(var s in t.items){var a=t.items[s];-1!==a.title.indexOf(t.keyword)&&i.push(a)}return i})},onEdit:function(t){var e=this;_.a.post("/api/edit",{id:t,title:this.items.title,author:this.items.author,publisher:this.items.publisher,finish_date:this.items.finish_date,description:this.items.description,jenre:this.items.jenre}).then(function(t){e.items=t.data,location.href="/#/edit"})}},created:function(){this.fetchTexts()}},O=A,N=(i("3f35"),Object(r["a"])(O,T,P,!1,null,null,null)),G=N.exports,E=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"edit_contents"},[i("p",[t._v("編集画面")]),i("div",[i("label",{staticClass:"edit_item"},[i("div",[t._v("タイトル")]),i("div",[i("input",{directives:[{name:"model",rawName:"v-model",value:t.typedTitle,expression:"typedTitle"}],staticClass:"txt",attrs:{type:"text"},domProps:{value:t.typedTitle},on:{input:function(e){e.target.composing||(t.typedTitle=e.target.value)}}})])]),i("label",{staticClass:"edit_item"},[i("div",[t._v("著者名")]),t.error?i("div",{staticClass:"error"},[t._v(t._s(t.error))]):t._e(),i("div",[i("input",{directives:[{name:"model",rawName:"v-model",value:t.typedAuthor,expression:"typedAuthor"}],staticClass:"txt",attrs:{type:"text"},domProps:{value:t.typedAuthor},on:{input:function(e){e.target.composing||(t.typedAuthor=e.target.value)}}})])]),i("label",{staticClass:"edit_item"},[i("div",[t._v("出版社")]),i("div",[i("input",{directives:[{name:"model",rawName:"v-model",value:t.typedPublisher,expression:"typedPublisher"}],staticClass:"txt",attrs:{type:"text"},domProps:{value:t.typedPublisher},on:{input:function(e){e.target.composing||(t.typedPublisher=e.target.value)}}})])]),i("label",{staticClass:"edit_item"},[i("div",[t._v("読了日")]),i("div",[i("input",{directives:[{name:"model",rawName:"v-model",value:t.finish_date,expression:"finish_date"}],attrs:{type:"date",selected:"2019-08-01"},domProps:{value:t.finish_date},on:{input:function(e){e.target.composing||(t.finish_date=e.target.value)}}})])]),i("label",{staticClass:"edit_item",attrs:{for:"select_genre"}},[i("div",[t._v("ジャンル")]),i("select",{directives:[{name:"model",rawName:"v-model",value:t.typedGenre,expression:"typedGenre"}],attrs:{name:"genre",id:"genre"},on:{change:function(e){var i=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.typedGenre=e.target.multiple?i:i[0]}}},t._l(t.roles,function(e){return i("option",{key:e,attrs:{selected:"小説"}},[t._v(t._s(e))])}),0)]),i("label",[i("div",[t._v("感想")]),t.error?i("div",{staticClass:"error"},[t._v(t._s(t.error))]):t._e(),i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.typedText,expression:"typedText"}],staticClass:"txa",attrs:{name:"",cols:"20",rows:"10"},domProps:{value:t.typedText},on:{input:function(e){e.target.composing||(t.typedText=e.target.value)}}}),i("p",[t._v(t._s(t.charaCount)+" 文字")])]),i("br"),i("div",{staticClass:"add_btn"},[i("button",{staticClass:"add_btn_txt",attrs:{type:"submit"},on:{click:t.addText}},[t._v("登録する")])]),i("div",{staticClass:"edit_home_btn"},[i("router-link",{staticClass:"edit_return_btn",attrs:{to:"/"}},[t._v("ホームに戻る")])],1)])])},$=[],S={data:function(){return{typedText:"",typedTitle:"",typedAuthor:"",typedPublisher:"",typedDate:"",typedGenre:"",errors:[],roles:["小説","ビジネス本","哲学","漫画"]}},methods:{addText:function(){var t=this;_.a.post("/api/create",{title:this.typedTitle,author:this.typedAuthor,publisher:this.typedPublisher,description:this.typedText,finish_date:this.finish_date,genre:this.typedGenre}).then(function(e){t.items=e.data,t.typedTitle="",t.typedAuthor="",t.typedPublisher="",t.typedText="",t.finish_date="",t.typedGenre=""}).catch(function(t){this.errors=[],this.title||this.errors.push("タイトルは必須です"),this.author||this.errors.push("著者名は必須です")})}},computed:{charaCount:function(){return this.typedText.length}}},M=S,q=(i("d572"),Object(r["a"])(M,E,$,!1,null,null,null)),D=q.exports,I=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"detail_contents"},[i("p",{staticClass:"detail_title"},[t._v("詳細画面")]),i("div",t._l(t.items,function(e){return i("div",{key:e.id,staticClass:"detail_comment"},[i("div",{staticClass:"detail_date"},[t._v("読み終えた日："+t._s(e.finish_date))]),i("div",{staticClass:"detail_comment_text"},[t._v(t._s(e.description))]),i("div",{staticClass:"detail_items"},[t._v("タイトル："+t._s(e.title))]),i("div",{staticClass:"detail_items"},[t._v("著者名："+t._s(e.author))]),i("div",{staticClass:"detail_items"},[t._v("出版社名："+t._s(e.publisher))]),i("div",{staticClass:"detail_items"},[t._v("ジャンル："+t._s(e.jenre))]),i("div",{key:e.id,staticClass:"detail_items del_btn",on:{click:function(i){return t.delText(e.id)}}},[t._v("削除")])])}),0),i("router-link",{staticClass:"return_home_btn",attrs:{to:"/"}},[t._v("ホームに戻る")])],1)},J=[],z={data:function(){return{items:[],keyword:this.title}},methods:{delText:function(t){axios.post("/api/del",{id:t}).then(function(t){location.href="/"})}}},B=z,F=Object(r["a"])(B,I,J,!1,null,null,null),H=F.exports;s["a"].use(u["a"]);var K=new u["a"]({routes:[{path:"/",name:"home",component:y},{path:"/add",name:"add",component:k},{path:"/show",name:"show",component:G},{path:"/edit",name:"edit",component:D},{path:"/detail",name:"detail",component:H}]}),L=i("2f62");s["a"].use(L["a"]);var Q=new L["a"].Store({state:{},mutations:{},actions:{}});s["a"].config.productionTip=!1,new s["a"]({router:K,store:Q,render:function(t){return t(l)}}).$mount("#app")},"64a9":function(t,e,i){},"8f89":function(t,e,i){},bfeb:function(t,e,i){"use strict";var s=i("fc98"),a=i.n(s);a.a},c679:function(t,e,i){"use strict";var s=i("8f89"),a=i.n(s);a.a},d572:function(t,e,i){"use strict";var s=i("0bbb"),a=i.n(s);a.a},fc98:function(t,e,i){}});
//# sourceMappingURL=app.9dc01e62.js.map