<template>
    <div class="detail_contents">
        <div class="detail_title">詳細画面</div>
        <div class="detail_date">読了日：{{}}</div>
        <div>
            <div class="detail_comment">
                <div>感想</div>
                <div class="detail_comment_text" v-for="item in items" v-bind:key="item">{{ item.description}}</div>
            </div>
        </div>
        <div class="detail_items">
            <div class="detail_items_title" v-for="item in items" v-bind:key="item">タイトル：{{ item.title }}</div>
            <div class="detail_items_author" v-for="item in items" v-bind:key="item">著者名：{{ item.author }}</div>
            <div class="detail_items_publisher" v-for="item in items" v-bind:key="item">出版社名：{{ item.publisher }}</div>            
        </div>
        <div>
            <!-- <div class="return_add_btn" v-on:click="editText">編集</div> -->
        </div>        
        <div>
            <router-link to="/book" class="return_home_btn">ホームへ戻る</router-link>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import Book from '@/views/Book.vue'

export default {
    data: function() {
        return {
            new_create: '',
            items: [],
        }
    },
    methods: {
        fetchTexts: function() {
            axios.get('http://127.0.0.1:8000/api/books').then((res)=>{
                this.items = res.data
                console.log(res)
            })
        },
        addText: function() {
            axios.post('http://127.0.0.1:8000/api/books', {
                title: this.new_create
            }).then((res) => {
                this.items = res.data
                this.new_create = ''
            })
        },
    },
    created() {
        this.fetchTexts()
    },
}
    // data: function() {
    //     return 
    // },
    // editText:function() {
        
    // }
</script>

<style>
.detail_contents {
    margin: 0 auto;
    width: 600px;
}

.detail_title {
    text-align: center;
    padding-bottom: 30px;
}

.detail_date {
    text-align: right;
}

.detail_comment {
    border: 1px solid black;
    margin-bottom: 20px;
}

.detail_comment_text {
    word-wrap: break-word;
}

.detail_items {
    border: 1px solid black;
    margin-bottom: 20px;
}

.return_home_btn, .return_add_btn {
    display: inline-block;
    border: 1px solid;
    color: black;
    text-decoration: none;
    width: 590px;
    text-align: center;
    padding: 5px;
    margin-bottom: 20px;
}

.return_home_btn:hover {
    background: yellow;
}
</style>
