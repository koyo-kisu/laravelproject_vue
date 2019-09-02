<template>
    <div class="show_contents">
        <div class="show_title">一覧画面</div>
        <div class="number_books">読み終えた本：{{ itemCount }}冊</div>
        <div class="search_item">
            <input type="text" v-model="keyword" class="key_search" placeholder="タイトルを入力してください">
            <button v-on:click="filteredItems" class="key_search_btn">検索</button>
        </div>
        <div>
            <div class="show_comment" v-for="item in items" v-bind:key="item.id">
                <div class="show_date">読み終えた日：{{ item.finish_date }}</div>
                <div class="show_comment_text">{{ item.description }}</div>
                <div class="show_items">タイトル：{{ item.title }}</div>
                <div class="show_items">著者名：{{ item.author }}</div>
                <div class="show_items">出版社名：{{ item.publisher }}</div>
                <div class="show_items">ジャンル：{{ item.genre }}</div>
                <div class="show_items del_btn" v-on:click="delText(item.id)" v-bind:key="item.id">削除</div>
                <!-- <div class="show_items edit_btn" v-on:click="editText(item.id)" v-bind:key="item.id">編集</div> -->
                <router-link to="/edit" class="show_items">編集する</router-link>  
            </div>
        </div>
        <router-link to="/" class="return_home_btn">ホームに戻る</router-link>
    </div>
</template>

<script>
import axios from 'axios'


export default {
    data: function() {
        return {
            new_create: '',
            items: [],
            keyword: this.title ,
        }
    },
    methods: {
        //データを取得
        fetchTexts: function(task_id) {
            axios.get('/api/books', {
                id: task_id,
                title: this.items.title,
                author: this.items.author,
                publisher: this.items.publisher,
                finish_date: this.items.finish_date,
                description: this.items.description,
                genre: this.items.genre,
                
            }).then((res)=>{
                this.items = res.data
            })
        },
        // 削除
        delText: function(task_id) {
            axios.post('/api/del', {
                id: task_id

            }).then((res) => {
                location.href = "/" 
            })
        },
        // 検索
        //第二引数に送信するデータを指定
        filteredItems: function() {
            axios.post('/api/search', {
                title: this.keyword,
                // author: this.keyword,
                // publisher: this.keyword,

            }).then((res) => {
                this.items = res.data
                var texts = [];

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
    computed: {
        // 投稿数カウント
        itemCount: function() {
            return this.items.length;
        },
    },
    //インスタンス生成時にfetchText()を実行したいのでcreated()フックに登録
    created() {
        this.fetchTexts()
    },
}
</script>

<style>
.show_contents {
    margin: 0 auto;
    width: 600px;
}

.number_books, .number_comments {
    margin-bottom: 10px;
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
}

.show_title {
    text-align: center;
    padding-bottom: 30px;
}

.show_date {
    text-align: right;
}

.show_comment {
    border: 1px solid black;
    margin-bottom: 20px;
}

.show_comment_text {
    word-wrap: break-word;
    padding: 10px;
}

.show_items {
    padding: 5px 10px;
}

.del_btn {
    background:#F5F6F2;
    width: 35px;
    text-align: center;
    cursor: pointer;
    margin-left: 10px;
    margin-bottom: 5px;
}

.edit_btn {
    background: red;
    width: 35px;
    text-align: center;
    cursor: pointer;
    margin-bottom: 5px;
    margin-left: 10px;
}

.return_home_btn, .return_add_btn {
    display: inline-block;
    border: 1px solid;
    color: black;
    text-decoration: none;
    width: 590px;
    text-align: center;
    padding: 5px 0 5px 0 ;
    margin-bottom: 20px;
    font-size: 11px;
}
</style>
