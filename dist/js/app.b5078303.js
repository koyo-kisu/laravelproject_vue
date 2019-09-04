(function(t){function e(e){for(var a,r,o=e[0],d=e[1],l=e[2],c=0,p=[];c<o.length;c++)r=o[c],s[r]&&p.push(s[r][0]),s[r]=0;for(a in d)Object.prototype.hasOwnProperty.call(d,a)&&(t[a]=d[a]);u&&u(e);while(p.length)p.shift()();return n.push.apply(n,l||[]),i()}function i(){for(var t,e=0;e<n.length;e++){for(var i=n[e],a=!0,o=1;o<i.length;o++){var d=i[o];0!==s[d]&&(a=!1)}a&&(n.splice(e--,1),t=r(r.s=i[0]))}return t}var a={},s={app:0},n=[];function r(e){if(a[e])return a[e].exports;var i=a[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=t,r.c=a,r.d=function(t,e,i){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(i,a,function(e){return t[e]}.bind(null,a));return i},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],d=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=d;n.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"034f":function(t,e,i){"use strict";var a=i("64a9"),s=i.n(a);s.a},"0bbb":function(t,e,i){},"3f35":function(t,e,i){"use strict";var a=i("4420"),s=i.n(a);s.a},4420:function(t,e,i){},"56d7":function(t,e,i){"use strict";i.r(e);i("cadf"),i("551c"),i("f751"),i("097d");var a=i("2b0e"),s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("div",{attrs:{id:"nav"}}),i("router-view")],1)},n=[],r=(i("034f"),i("2877")),o={},d=Object(r["a"])(o,s,n,!1,null,null,null),l=d.exports,u=i("8c4f"),c=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"book"},[i("div",{staticClass:"book_title"},[t._v("読書管理アプリ")]),i("div",{staticClass:"number_books"},[t._v("読み終えた本："+t._s(t.itemCount)+"冊")]),i("div",{staticClass:"number_comments"},[t._v("感想がある本："+t._s(t.commentCount)+"冊")]),i("div",{staticClass:"search_item"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.keyword,expression:"keyword"}],staticClass:"key_search",attrs:{type:"text",placeholder:"タイトルを入力してください"},domProps:{value:t.keyword},on:{input:function(e){e.target.composing||(t.keyword=e.target.value)}}}),i("button",{staticClass:"key_search_btn",on:{click:t.filteredItems}},[t._v("検索")])]),i("div",{staticClass:"card_list"},t._l(t.items,function(e){return i("div",{key:e.id,staticClass:"card_body"},[i("div",{staticClass:"card_title"},[i("router-link",{attrs:{to:{name:"showId",params:{showId:e.id}}}},[t._v(t._s(e.title))]),i("div",{},[t._v(t._s(e.finish_date))])],1)])}),0),i("div",{staticClass:"add_page_btn"},[i("router-link",{staticClass:"add_page_transition",attrs:{to:"/Add"}},[t._v("追加フォーム")])],1),i("div",{staticClass:"add_page_btn"},[i("router-link",{attrs:{to:"/"}},[t._v("ホームへ戻る")])],1)])},p=[],v=i("bc3a"),m=i.n(v),h={data:function(){return{items:[],heads:["タイトル","著者名","出版社"],keyword:[]}},methods:{fetchTexts:function(){var t=this;m.a.get("/api/books").then(function(e){t.items=e.data,console.log(e)})},filteredItems:function(){var t=this;m.a.post("/api/search",{title:this.keyword}).then(function(e){t.items=e.data;var i=[];for(var a in t.items){var s=t.items[a];-1!==s.title.indexOf(t.keyword)&&i.push(s)}return i})}},created:function(){this.fetchTexts()},computed:{itemCount:function(){return this.items.length},commentCount:function(){var t=this.items.filter(function(t){return null!==t.description});return console.log(t),t.length}}},_=h,f=(i("c679"),Object(r["a"])(_,c,p,!1,null,null,null)),y=f.exports,b=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"add_contents"},[i("div",{staticClass:"add_title"},[t._v("レビュー追加画面")]),i("label",{staticClass:"add_item"},[i("div",[t._v("タイトル")]),i("div",[i("input",{directives:[{name:"model",rawName:"v-model",value:t.typedTitle,expression:"typedTitle"}],staticClass:"txt",attrs:{name:"title",type:"text",required:""},domProps:{value:t.typedTitle},on:{input:function(e){e.target.composing||(t.typedTitle=e.target.value)}}})]),t.error.titleErr?i("div",{staticClass:"error"},[t._v(t._s(t.error.titleErr))]):t._e()]),i("label",{staticClass:"add_item"},[i("div",[t._v("著者名")]),i("div",[i("input",{directives:[{name:"model",rawName:"v-model",value:t.typedAuthor,expression:"typedAuthor"}],staticClass:"txt",attrs:{name:"author",type:"text",required:""},domProps:{value:t.typedAuthor},on:{input:function(e){e.target.composing||(t.typedAuthor=e.target.value)}}})]),t.error.authorErr?i("div",{staticClass:"error"},[t._v(t._s(t.error.authorErr))]):t._e()]),i("label",{staticClass:"add_item"},[i("div",[t._v("出版社")]),i("div",[i("input",{directives:[{name:"model",rawName:"v-model",value:t.typedPublisher,expression:"typedPublisher"}],staticClass:"txt",attrs:{name:"publisher",type:"text"},domProps:{value:t.typedPublisher},on:{input:function(e){e.target.composing||(t.typedPublisher=e.target.value)}}})])]),i("label",{staticClass:"add_item"},[i("div",[t._v("読了日")]),i("div",[i("input",{directives:[{name:"model",rawName:"v-model",value:t.typedDate,expression:"typedDate"}],attrs:{name:"finish_date",type:"date"},domProps:{value:t.typedDate},on:{input:function(e){e.target.composing||(t.typedDate=e.target.value)}}})])]),i("label",{staticClass:"add_item",attrs:{for:"select_genre"}},[i("div",[t._v("ジャンル")]),i("select",{directives:[{name:"model",rawName:"v-model",value:t.typedGenre,expression:"typedGenre"}],attrs:{name:"genre",id:"genre"},on:{change:function(e){var i=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.typedGenre=e.target.multiple?i:i[0]}}},t._l(t.roles,function(e){return i("option",{key:e},[t._v(t._s(e))])}),0)]),i("label",[i("div",[t._v("感想")]),i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.typedText,expression:"typedText"}],staticClass:"txa",attrs:{name:"description",cols:"20",rows:"10"},domProps:{value:t.typedText},on:{input:function(e){e.target.composing||(t.typedText=e.target.value)}}}),i("p",[t._v(t._s(t.charaCount)+" 文字")])]),i("br"),i("div",{staticClass:"add_btn"},[i("button",{staticClass:"add_btn_txt",attrs:{type:"submit"},on:{click:t.addText}},[t._v("登録する")])]),i("div",{staticClass:"add_home_btn"},[i("router-link",{staticClass:"add_return_btn",attrs:{to:"/"}},[t._v("ホームに戻る")])],1)])},g=[],x={data:function(){return{typedText:"",typedTitle:"",typedAuthor:"",typedPublisher:"",typedDate:"",typedGenre:"小説",roles:["小説","ビジネス本","哲学","漫画"],error:{titleErr:"タイトルを入力してしてください",authorErr:"著者名を入力してください"}}},computed:{charaCount:function(){return this.typedText.length}},methods:{addText:function(){var t=this;m.a.post("/api/create",{title:this.typedTitle,author:this.typedAuthor,publisher:this.typedPublisher,description:this.typedText,finish_date:this.typedDate,genre:this.typedGenre}).then(function(e){e.data.error?t.errors=e.data.error:(t.items=e.data,t.typedTitle="",t.typedAuthor="",t.typedPublisher="",t.typedText="",t.typedDate="",t.typedGenre=""),location.href="/"})}}},C=x,w=(i("bfeb"),Object(r["a"])(C,b,g,!1,null,null,null)),T=w.exports,k=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"show_contents"},[i("div",{staticClass:"show_title"},[t._v("詳細画面")]),i("div",t._l(t.items,function(e){return i("div",{key:e.id,staticClass:"show_comment"},[i("div",{staticClass:"show_date"},[t._v("読み終えた日："+t._s(e.finish_date))]),i("div",{staticClass:"show_comment_text"},[t._v(t._s(e.description))]),i("div",{staticClass:"show_items"},[t._v("タイトル："+t._s(e.title))]),i("div",{staticClass:"show_items"},[t._v("著者名："+t._s(e.author))]),i("div",{staticClass:"show_items"},[t._v("出版社名："+t._s(e.publisher))]),i("div",{staticClass:"show_items"},[t._v("ジャンル："+t._s(e.genre))]),i("div",{key:e.id,staticClass:"show_items del_btn",on:{click:function(i){return t.delText(e.id)}}},[t._v("削除")]),i("router-link",{staticClass:"show_items",attrs:{to:{name:"editId",params:{editId:e.id}}}},[t._v("編集する")])],1)}),0),i("router-link",{staticClass:"return_home_btn",attrs:{to:"/"}},[t._v("ホームに戻る")])],1)},P=[],A={data:function(){return{new_create:"",items:[]}},methods:{fetchTexts:function(t){var e=this;m.a.get("/api/books",{id:t}).then(function(t){e.items=t.data}),location.href="/#/show"},delText:function(t){m.a.post("/api/del",{id:t}).then(function(t){location.href="/"})}},computed:{itemCount:function(){return this.items.length}},created:function(){this.fetchTexts()}},O=A,j=(i("3f35"),Object(r["a"])(O,k,P,!1,null,null,null)),E=j.exports,G=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"edit_contents"},[i("p",[t._v("編集画面")]),t._l(t.items,function(e){return i("div",{key:e.id},[i("label",{staticClass:"edit_item"},[i("div",[t._v("タイトル")]),i("div",[i("input",{directives:[{name:"model",rawName:"v-model",value:t.typedTitle,expression:"typedTitle"}],staticClass:"txt",attrs:{type:"text"},domProps:{value:t.typedTitle},on:{input:function(e){e.target.composing||(t.typedTitle=e.target.value)}}})])]),i("label",{staticClass:"edit_item"},[i("div",[t._v("著者名")]),i("div",[i("input",{directives:[{name:"model",rawName:"v-model",value:t.typedAuthor,expression:"typedAuthor"}],staticClass:"txt",attrs:{type:"text"},domProps:{value:t.typedAuthor},on:{input:function(e){e.target.composing||(t.typedAuthor=e.target.value)}}})])]),i("label",{staticClass:"edit_item"},[i("div",[t._v("出版社")]),i("div",[i("input",{directives:[{name:"model",rawName:"v-model",value:t.typedPublisher,expression:"typedPublisher"}],staticClass:"txt",attrs:{type:"text"},domProps:{value:t.typedPublisher},on:{input:function(e){e.target.composing||(t.typedPublisher=e.target.value)}}})])]),i("label",{staticClass:"edit_item"},[i("div",[t._v("読了日")]),i("div",[i("input",{directives:[{name:"model",rawName:"v-model",value:t.finish_date,expression:"finish_date"}],attrs:{type:"date"},domProps:{value:t.finish_date},on:{input:function(e){e.target.composing||(t.finish_date=e.target.value)}}})])]),i("label",{staticClass:"edit_item",attrs:{for:"select_genre"}},[i("div",[t._v("ジャンル")]),i("select",{directives:[{name:"model",rawName:"v-model",value:t.typedGenre,expression:"typedGenre"}],attrs:{name:"genre",id:"genre"},on:{change:function(e){var i=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.typedGenre=e.target.multiple?i:i[0]}}},t._l(t.roles,function(e){return i("option",{key:e},[t._v(t._s(e))])}),0)]),i("label",[i("div",[t._v("感想")]),i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.typedText,expression:"typedText"}],staticClass:"txa",attrs:{name:"",cols:"20",rows:"10"},domProps:{value:t.typedText},on:{input:function(e){e.target.composing||(t.typedText=e.target.value)}}}),i("p",[t._v(t._s(t.charaCount)+" 文字")])]),i("br"),i("div",{staticClass:"update_btn"},[i("button",{staticClass:"update_btn_txt",attrs:{type:"submit"},on:{click:t.updateText}},[t._v("更新する")])]),i("div",{staticClass:"edit_home_btn"},[i("router-link",{staticClass:"edit_return_btn",attrs:{to:"/"}},[t._v("ホームに戻る")])],1)])})],2)},N=[],D={data:function(){return{typedText:"",typedTitle:"",typedAuthor:"",typedPublisher:"",typedDate:"",typedGenre:"",errors:[],items:[],roles:["小説","ビジネス本","哲学","漫画"]}},methods:{fetchTexts:function(t){var e=this;m.a.get("/api/books",{id:t,title:this.items.title,author:this.items.author,publisher:this.items.publisher,finish_date:this.items.finish_date,description:this.items.description,genre:this.items.genre}).then(function(t){e.items=t.data,e.typedTitle=e.items.title,e.typedAuthor=e.items.author,e.typedPublisher=e.items.publisher,e.typedText=e.items.finish_date,e.typedDate=e.items.description,e.typedGenre=e.items.genre,location.href="/#/edit"})},updateText:function(t){var e=this;m.a.post("/api/update",{id:t,title:this.typedTitle,author:this.typedAuthor,publisher:this.typedPublisher,description:this.typedText,finish_date:this.finish_date,genre:this.typedGenre}).then(function(t){t.data.error?e.errors=t.data.error:(e.items=t.data,e.typedTitle="",e.typedAuthor="",e.typedPublisher="",e.typedText="",e.typedDate="",e.typedGenre=""),location.href="/"})}},created:function(){this.fetchTexts()},computed:{charaCount:function(){return this.typedText.length}}},I=D,$=(i("d572"),Object(r["a"])(I,G,N,!1,null,null,null)),S=$.exports,M=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},q=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"login_contents"},[i("div",[t._v("ログイン画面")]),i("div",[i("div",[t._v("ID")]),i("div",{staticClass:"login_id"},[i("input",{attrs:{type:"text",placeholder:"ユーザーID"}})]),i("div",[t._v("パスワード")]),i("div",{staticClass:"login_pw"},[i("input",{attrs:{type:"text",placeholder:"パスワード"}})])]),i("div",[i("input",{attrs:{type:"submit",value:"ログイン"}})])])}],J={},z=J,B=(i("d6db"),Object(r["a"])(z,M,q,!1,null,null,null)),F=B.exports;a["a"].use(u["a"]);var H=new u["a"]({routes:[{path:"/",name:"home",component:y},{path:"/add",name:"add",component:T},{path:"/show",name:"show",component:E},{path:"/edit",name:"edit",component:S},{path:"/login",name:"login",component:F},{path:"/show/:showId",name:"showId",components:E}]}),K=i("2f62");a["a"].use(K["a"]);var L=new K["a"].Store({state:{},mutations:{},actions:{}});a["a"].config.productionTip=!1,new a["a"]({router:H,store:L,render:function(t){return t(l)}}).$mount("#app")},"64a9":function(t,e,i){},"8f89":function(t,e,i){},a9e7:function(t,e,i){},bfeb:function(t,e,i){"use strict";var a=i("fc98"),s=i.n(a);s.a},c679:function(t,e,i){"use strict";var a=i("8f89"),s=i.n(a);s.a},d572:function(t,e,i){"use strict";var a=i("0bbb"),s=i.n(a);s.a},d6db:function(t,e,i){"use strict";var a=i("a9e7"),s=i.n(a);s.a},fc98:function(t,e,i){}});
//# sourceMappingURL=app.b5078303.js.map