<template>
    <div class="book">
        <div class="book_title">読書管理アプリ</div>
        <div class="number_books">読み終えた本：{{ itemCount }}冊</div>
        <div class="number_comments">感想がある本：{{ commentCount }}冊</div>
        <div class="search_item">
            <input type="text" v-model="keyword" class="key_search" placeholder="タイトルを入力してください">
            <button v-on:click="filteredItems" class="key_search_btn">検索</button>
        </div>
        <div class="card_list">
            <div class="card_body" v-for="item in items" v-bind:key="item.id">
                <div class="card_title">
                    <router-link :to="{name: 'showId', params: {showId: item.id} }">{{ item.title }}</router-link>
                    <div class="">{{ item.finish_date }}</div>
                </div>
            </div>
        </div>

        <div class="add_page_btn">
            <router-link to="/Add" class="add_page_transition">追加フォーム</router-link>
        </div>
        <div class="add_page_btn">
            <router-link to="/">ホームへ戻る</router-link>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data: function() {
        return {
            //データを格納するための配列
            items: [],
            heads: [
                'タイトル',
                '著者名',
                '出版社',
            ],
            keyword: []
            //     this.title,
            //     this.author,
            //     this.publisher
            // ],
        }
    },
    methods: {
        fetchTexts: function() {
            //axios.getでデータを取得
            axios.get('/api/books').then((res)=>{
                //取得したデータをitemsに代入
                this.items = res.data
                console.log(res)
            })
        },
        // 検索 第二引数に送信するデータを指定
        filteredItems: function() {
            axios.post('/api/search', {
                title: this.keyword,
                // author: this.keyword,
                // publisher: this.keyword,

            }).then((res) => {
                this.items = res.data
                var texts = [];

                //itemsの各データを変数iに順番に入れる
                //itemsのi番目までを変数itemへ代入
                //もしkeywordにtitleの値が-1でない、つまり値があればitemをtextsへ挿入する
                for(var i in this.items) {
                    var item = this.items[i];
                    if(item.title.indexOf(this.keyword) !== -1) {
                        texts.push(item);
                    }
                }
                return texts;
            })
        },
        
    },
    //インスタンス生成時にfetchText()を実行したいのでcreated()フックに登録
    created() {
        this.fetchTexts()
    },
    //items数をカウント
    computed: {
        itemCount: function() {
            return this.items.length;
        },
        //感想ある投稿カウント
        commentCount: function() {
            //itemsをfilterにかけてitemに代入している
            var filtered = this.items.filter(function(item) {
                //代入されたitemのなかのdescriptionの値がnullでない、つまり感想があるデータを返す
                return (item.description !== null);
            });
            console.log(filtered);
            //全体としてはfilteredに代入されたデータの数を表示させる
            return filtered.length
        },
    }
}
</script>

<style>
a {
    color: black;
    width: 100%;
}

.book {
    margin: 0 auto;
    width: 1000px;
    text-align: center;
}

.book_title {
    padding-bottom: 30px;
}

.number_books, .number_comments {
    margin-bottom: 20px;
}

.card_list {
    background: #dee2e6;
    padding: 10px;
    text-align: left;
    width: 100%;
}

.card_body {
    border: 1px solid gray;
    margin-bottom: 5px; 
    width: 90%;
    height: 100px;
    background: white;
    padding: 5px;
}

.key_search {
    width: 550px;
    height: 20px;
}

.key_search_btn {
    display: inline-block;
    height: 25px;
    margin-left: 5px;
}

.search_item {
    width: 600px;
    margin-bottom: 20px;
    margin: 0 auto;
}

.add_page_btn, .show_page_btn {
    margin-top: 30px;
    width: 600px;
    text-align: center;
    margin: 0 auto;
}

.add_page_transition {
    display: inline-block;
    border: 1px solid gray;
    padding: 5px 15px;
    color: black;
    text-decoration: none;
    margin-top: 20px;
    margin-bottom: 10px;
    width: 600px;
    text-align: center;
}

.show_page_transition {
    display: inline-block;
    border: 1px solid gray;
    padding: 5px 15px;
    color: black;
    text-decoration: none;
    width: 600px;
    text-align: center;
}

</style>


