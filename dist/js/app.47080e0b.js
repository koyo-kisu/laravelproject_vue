(function(t){function e(e){for(var s,a,o=e[0],d=e[1],l=e[2],c=0,p=[];c<o.length;c++)a=o[c],r[a]&&p.push(r[a][0]),r[a]=0;for(s in d)Object.prototype.hasOwnProperty.call(d,s)&&(t[s]=d[s]);u&&u(e);while(p.length)p.shift()();return n.push.apply(n,l||[]),i()}function i(){for(var t,e=0;e<n.length;e++){for(var i=n[e],s=!0,o=1;o<i.length;o++){var d=i[o];0!==r[d]&&(s=!1)}s&&(n.splice(e--,1),t=a(a.s=i[0]))}return t}var s={},r={app:0},n=[];function a(e){if(s[e])return s[e].exports;var i=s[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,a),i.l=!0,i.exports}a.m=t,a.c=s,a.d=function(t,e,i){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(a.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)a.d(i,s,function(e){return t[e]}.bind(null,s));return i},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],d=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=d;n.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"034f":function(t,e,i){"use strict";var s=i("64a9"),r=i.n(s);r.a},"0bbb":function(t,e,i){},"3f35":function(t,e,i){"use strict";var s=i("4420"),r=i.n(s);r.a},4420:function(t,e,i){},"56d7":function(t,e,i){"use strict";i.r(e);i("cadf"),i("551c"),i("f751"),i("097d");var s=i("2b0e"),r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("div",{attrs:{id:"nav"}},[i("router-link",{attrs:{to:"/"}},[t._v("メインページ")]),t._v(" |\n    "),i("router-link",{attrs:{to:"/add"}},[t._v("追加する")]),t._v(" |\n    "),i("router-link",{attrs:{to:"/show"}},[t._v("感想画面")]),t._v(" |\n    "),i("router-link",{attrs:{to:"/edit"}},[t._v("編集画面")]),t._v(" |\n    "),i("router-link",{attrs:{to:"/detail"}},[t._v("詳細画面")]),t._v(" |\n    "),i("router-link",{attrs:{to:"/login"}},[t._v("ログイン画面")])],1),i("router-view")],1)},n=[],a=(i("034f"),i("2877")),o={},d=Object(a["a"])(o,r,n,!1,null,null,null),l=d.exports,u=i("8c4f"),c=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"book"},[i("div",{staticClass:"book_title"},[t._v("読書管理アプリ")]),i("div",{staticClass:"number_books"},[t._v("読み終えた本："+t._s(t.itemCount)+"冊")]),i("div",{staticClass:"book_contents"},[i("thead",[i("tr",t._l(t.heads,function(e){return i("th",{key:e},[t._v(t._s(e))])}),0)]),i("tbody",t._l(t.items,function(e){return i("tr",{key:e.id},[i("td",[t._v(t._s(e.title))]),i("td",[t._v(t._s(e.author))]),i("td",[t._v(t._s(e.publisher))])])}),0)]),i("div",{staticClass:"add_page_btn"},[i("router-link",{staticClass:"add_page_transition",attrs:{to:"/Add"}},[t._v("追加フォームへ")])],1),i("div",{staticClass:"show_page_btn"},[i("router-link",{staticClass:"show_page_transition",attrs:{to:"/show"}},[t._v("詳しく見る")])],1)])},p=[],v=i("bc3a"),_=i.n(v),h={data:function(){return{items:[],heads:["タイトル","著者名","出版社"]}},methods:{fetchTexts:function(){var t=this;_.a.get("/api/books").then(function(e){t.items=e.data,console.log(e)})}},created:function(){this.fetchTexts()},computed:{itemCount:function(){return this.items.length}}},m=h,f=(i("c679"),Object(a["a"])(m,c,p,!1,null,null,null)),y=f.exports,b=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"add_contents"},[i("div",{staticClass:"add_title"},[t._v("レビュー追加画面")]),i("label",{staticClass:"add_item"},[i("div",[t._v("タイトル")]),i("div",[i("input",{directives:[{name:"model",rawName:"v-model",value:t.typedTitle,expression:"typedTitle"}],staticClass:"txt",attrs:{name:"title",type:"text",required:""},domProps:{value:t.typedTitle},on:{input:function(e){e.target.composing||(t.typedTitle=e.target.value)}}})]),t.error.titleErr?i("div",{staticClass:"error"},[t._v(t._s(t.error.titleErr))]):t._e()]),i("label",{staticClass:"add_item"},[i("div",[t._v("著者名")]),i("div",[i("input",{directives:[{name:"model",rawName:"v-model",value:t.typedAuthor,expression:"typedAuthor"}],staticClass:"txt",attrs:{name:"author",type:"text",required:""},domProps:{value:t.typedAuthor},on:{input:function(e){e.target.composing||(t.typedAuthor=e.target.value)}}})]),t.error.authorErr?i("div",{staticClass:"error"},[t._v(t._s(t.error.authorErr))]):t._e()]),i("label",{staticClass:"add_item"},[i("div",[t._v("出版社")]),i("div",[i("input",{directives:[{name:"model",rawName:"v-model",value:t.typedPublisher,expression:"typedPublisher"}],staticClass:"txt",attrs:{name:"publisher",type:"text"},domProps:{value:t.typedPublisher},on:{input:function(e){e.target.composing||(t.typedPublisher=e.target.value)}}})])]),i("label",{staticClass:"add_item"},[i("div",[t._v("読了日")]),i("div",[i("input",{directives:[{name:"model",rawName:"v-model",value:t.finish_date,expression:"finish_date"}],attrs:{name:"finish_date",type:"date"},domProps:{value:t.finish_date},on:{input:function(e){e.target.composing||(t.finish_date=e.target.value)}}})])]),i("label",{staticClass:"add_item",attrs:{for:"select_genre"}},[i("div",[t._v("ジャンル")]),i("select",{directives:[{name:"model",rawName:"v-model",value:t.typedGenre,expression:"typedGenre"}],attrs:{name:"genre",id:"genre"},on:{change:function(e){var i=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.typedGenre=e.target.multiple?i:i[0]}}},t._l(t.roles,function(e){return i("option",{key:e},[t._v(t._s(e))])}),0)]),i("label",[i("div",[t._v("感想")]),i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.typedText,expression:"typedText"}],staticClass:"txa",attrs:{name:"description",cols:"20",rows:"10"},domProps:{value:t.typedText},on:{input:function(e){e.target.composing||(t.typedText=e.target.value)}}}),i("p",[t._v(t._s(t.charaCount)+" 文字")])]),i("br"),i("div",{staticClass:"add_btn"},[i("button",{staticClass:"add_btn_txt",attrs:{type:"submit"},on:{click:t.addText}},[t._v("登録する")])]),i("div",{staticClass:"add_home_btn"},[i("router-link",{staticClass:"add_return_btn",attrs:{to:"/"}},[t._v("ホームに戻る")])],1)])},g=[],x={data:function(){return{typedText:"",typedTitle:"",typedAuthor:"",typedPublisher:"",typedDate:"",typedGenre:"小説",roles:["小説","ビジネス本","哲学","漫画"],error:{titleErr:"タイトルを入力してしてください。",authorErr:"著者名を入力してください"}}},computed:{charaCount:function(){return this.typedText.length}},methods:{addText:function(){var t=this;_.a.post("/api/create",{title:this.typedTitle,author:this.typedAuthor,publisher:this.typedPublisher,description:this.typedText,finish_date:this.finish_date,genre:this.typedGenre}).then(function(e){e.data.error?t.errors=e.data.error:(t.items=e.data,t.typedTitle="",t.typedAuthor="",t.typedPublisher="",t.typedText="",t.finish_date="",t.typedGenre="")})}}},C=x,w=(i("bfeb"),Object(a["a"])(C,b,g,!1,null,null,null)),T=w.exports,k=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"show_contents"},[i("div",{staticClass:"show_title"},[t._v("一覧画面")]),i("div",{staticClass:"number_books"},[t._v("読み終えた本："+t._s(t.itemCount)+"冊")]),i("div",{staticClass:"number_comments"},[t._v("感想がある本："+t._s(t.commentCount)+"冊")]),i("div",{staticClass:"search_item"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.keyword,expression:"keyword"}],staticClass:"key_search",attrs:{type:"text",placeholder:"タイトルを入力してください"},domProps:{value:t.keyword},on:{input:function(e){e.target.composing||(t.keyword=e.target.value)}}}),i("button",{staticClass:"key_search_btn",on:{click:t.filteredItems}},[t._v("検索")])]),i("div",t._l(t.items,function(e){return i("div",{key:e.id,staticClass:"show_comment"},[i("div",{staticClass:"show_date"},[t._v("読み終えた日："+t._s(e.finish_date))]),i("div",{staticClass:"show_comment_text"},[t._v(t._s(e.description))]),i("div",{staticClass:"show_items"},[t._v("タイトル："+t._s(e.title))]),i("div",{staticClass:"show_items"},[t._v("著者名："+t._s(e.author))]),i("div",{staticClass:"show_items"},[t._v("出版社名："+t._s(e.publisher))]),i("div",{staticClass:"show_items"},[t._v("ジャンル："+t._s(e.jenre))]),i("div",{key:e.id,staticClass:"show_items del_btn",on:{click:function(i){return t.delText(e.id)}}},[t._v("削除")]),i("div",{key:e.id,staticClass:"show_items edit_btn",on:{click:function(i){return t.onEdit(e.id)}}},[t._v("編集")])])}),0),i("router-link",{staticClass:"return_home_btn",attrs:{to:"/"}},[t._v("ホームに戻る")])],1)},P=[],A={data:function(){return{new_create:"",items:[],keyword:this.title}},methods:{fetchTexts:function(){var t=this;_.a.get("/api/books").then(function(e){t.items=e.data})},delText:function(t){_.a.post("/api/del",{id:t}).then(function(t){location.href="/"})},filteredItems:function(){var t=this;_.a.post("/api/search",{title:this.keyword,author:this.keyword}).then(function(e){t.items=e.data;var i=[];for(var s in t.items){var r=t.items[s];-1!==r.title.indexOf(t.keyword)&&i.push(r)}return i})},onEdit:function(t){var e=this;_.a.post("/api/edit",{id:t,title:this.items.title,author:this.items.author,publisher:this.items.publisher,finish_date:this.items.finish_date,description:this.items.description,jenre:this.items.jenre}).then(function(t){e.items=t.data,e.typedTitle="",e.typedAuthor="",e.typedPublisher="",e.typedText="",e.finish_date="",e.typedGenre="",location.href="/#/edit"})}},computed:{itemCount:function(){return this.items.length},commentCount:function(){return this.items.filter(function(t){return null!=items.description})}},created:function(){this.fetchTexts()}},j=A,O=(i("3f35"),Object(a["a"])(j,k,P,!1,null,null,null)),E=O.exports,G=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"edit_contents"},[i("p",[t._v("編集画面")]),i("div",[i("label",{staticClass:"edit_item"},[i("div",[t._v("タイトル")]),i("div",[i("input",{directives:[{name:"model",rawName:"v-model",value:t.typedTitle,expression:"typedTitle"}],staticClass:"txt",attrs:{type:"text"},domProps:{value:t.typedTitle},on:{input:function(e){e.target.composing||(t.typedTitle=e.target.value)}}})])]),i("label",{staticClass:"edit_item"},[i("div",[t._v("著者名")]),t.error?i("div",{staticClass:"error"},[t._v(t._s(t.error))]):t._e(),i("div",[i("input",{directives:[{name:"model",rawName:"v-model",value:t.typedAuthor,expression:"typedAuthor"}],staticClass:"txt",attrs:{type:"text"},domProps:{value:t.typedAuthor},on:{input:function(e){e.target.composing||(t.typedAuthor=e.target.value)}}})])]),i("label",{staticClass:"edit_item"},[i("div",[t._v("出版社")]),i("div",[i("input",{directives:[{name:"model",rawName:"v-model",value:t.typedPublisher,expression:"typedPublisher"}],staticClass:"txt",attrs:{type:"text"},domProps:{value:t.typedPublisher},on:{input:function(e){e.target.composing||(t.typedPublisher=e.target.value)}}})])]),i("label",{staticClass:"edit_item"},[i("div",[t._v("読了日")]),i("div",[i("input",{directives:[{name:"model",rawName:"v-model",value:t.finish_date,expression:"finish_date"}],attrs:{type:"date",selected:"2019-08-01"},domProps:{value:t.finish_date},on:{input:function(e){e.target.composing||(t.finish_date=e.target.value)}}})])]),i("label",{staticClass:"edit_item",attrs:{for:"select_genre"}},[i("div",[t._v("ジャンル")]),i("select",{directives:[{name:"model",rawName:"v-model",value:t.typedGenre,expression:"typedGenre"}],attrs:{name:"genre",id:"genre"},on:{change:function(e){var i=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.typedGenre=e.target.multiple?i:i[0]}}},t._l(t.roles,function(e){return i("option",{key:e,attrs:{selected:"小説"}},[t._v(t._s(e))])}),0)]),i("label",[i("div",[t._v("感想")]),t.error?i("div",{staticClass:"error"},[t._v(t._s(t.error))]):t._e(),i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.typedText,expression:"typedText"}],staticClass:"txa",attrs:{name:"",cols:"20",rows:"10"},domProps:{value:t.typedText},on:{input:function(e){e.target.composing||(t.typedText=e.target.value)}}}),i("p",[t._v(t._s(t.charaCount)+" 文字")])]),i("br"),i("div",{staticClass:"add_btn"},[i("button",{staticClass:"add_btn_txt",attrs:{type:"submit"},on:{click:t.addText}},[t._v("登録する")])]),i("div",{staticClass:"edit_home_btn"},[i("router-link",{staticClass:"edit_return_btn",attrs:{to:"/"}},[t._v("ホームに戻る")])],1)])])},N=[],$={data:function(){return{typedText:"",typedTitle:"",typedAuthor:"",typedPublisher:"",typedDate:"",typedGenre:"",errors:[],roles:["小説","ビジネス本","哲学","漫画"]}},methods:{addText:function(){var t=this;_.a.post("/api/create",{title:this.typedTitle,author:this.typedAuthor,publisher:this.typedPublisher,description:this.typedText,finish_date:this.finish_date,genre:this.typedGenre}).then(function(e){t.items=e.data,t.typedTitle="",t.typedAuthor="",t.typedPublisher="",t.typedText="",t.finish_date="",t.typedGenre=""}).catch(function(t){this.errors=[],this.title||this.errors.push("タイトルは必須です"),this.author||this.errors.push("著者名は必須です")})}},computed:{charaCount:function(){return this.typedText.length}}},S=$,D=(i("d572"),Object(a["a"])(S,G,N,!1,null,null,null)),I=D.exports,M=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},q=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"login_contents"},[i("div",[t._v("ログイン画面")]),i("div",[i("div",[t._v("ID")]),i("div",{staticClass:"login_id"},[i("input",{attrs:{type:"text",placeholder:"ユーザーID"}})]),i("div",[t._v("パスワード")]),i("div",{staticClass:"login_pw"},[i("input",{attrs:{type:"text",placeholder:"パスワード"}})])]),i("div",[i("input",{attrs:{type:"submit",value:"ログイン"}})])])}],J={},z=J,B=(i("d6db"),Object(a["a"])(z,M,q,!1,null,null,null)),F=B.exports;s["a"].use(u["a"]);var H=new u["a"]({routes:[{path:"/",name:"home",component:y},{path:"/add",name:"add",component:T},{path:"/show",name:"show",component:E},{path:"/edit",name:"edit",component:I},{path:"/login",name:"login",component:F}]}),K=i("2f62");s["a"].use(K["a"]);var L=new K["a"].Store({state:{},mutations:{},actions:{}});s["a"].config.productionTip=!1,new s["a"]({router:H,store:L,render:function(t){return t(l)}}).$mount("#app")},"64a9":function(t,e,i){},"8f89":function(t,e,i){},a9e7:function(t,e,i){},bfeb:function(t,e,i){"use strict";var s=i("fc98"),r=i.n(s);r.a},c679:function(t,e,i){"use strict";var s=i("8f89"),r=i.n(s);r.a},d572:function(t,e,i){"use strict";var s=i("0bbb"),r=i.n(s);r.a},d6db:function(t,e,i){"use strict";var s=i("a9e7"),r=i.n(s);r.a},fc98:function(t,e,i){}});
//# sourceMappingURL=app.47080e0b.js.map