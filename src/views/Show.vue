<template>
    <div class="show_contents">
        <div class="show_title">詳細画面</div>
        <div>
            <div class="show_comment">
                <div class="show_date">読み終えた日：{{ item.finish_date }}</div>
                <div class="show_comment_text">{{ item.description }}</div>
                <div class="show_items">タイトル：{{ item.title }}</div>
                <div class="show_items">著者名：{{ item.author }}</div>
                <div class="show_items">出版社名：{{ item.publisher }}</div>
                <div class="show_items">ジャンル：{{ item.genre }}</div>
                <div class="show_items del_btn" v-on:click="delText(item.id)">削除</div>
                <router-link class="show_items edit_btn" :to="{ name: 'edit', params: {id: item.id} }">編集する</router-link> 
            </div>
        </div>
        <router-link to="/" class="page_transition">ホームに戻る</router-link>
    </div>
</template>

<script>
import axios from 'axios'


export default {
    data: function() {
        return {
            item: [],
        }
    },
    //インスタンス生成時にfetchText()を実行したいのでcreated()フックに登録
    created() {
        this.fetchTexts()
    },
    methods: {
        //データを取得
        fetchTexts: function(task_id) {
            axios.get('/api/books/'+ this.$route.params.id)
                .then((res)=>{
                    this.item = res.data
            })
        },

        // 削除
        delText: function(task_id) {
            axios.post('/api/del', {
                id: task_id

            }).then((res) => {
                this.items = res.data
                location.href = "/" 
            })
        }
    },

    computed: {
        // 投稿数カウント
        itemCount: function() {
            return this.items.length;
        },
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
    margin-right: 10px;
}

.show_comment {
    border: 1px solid black;
    padding-bottom: 15px;
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
    background:#819FF7;
    width: 35px;
    text-align: center;
    cursor: pointer;
    margin-bottom: 15px;
    margin-left: 10px;
    text-decoration: none;
}
</style>
