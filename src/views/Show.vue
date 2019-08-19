<template>
    <div class="detail_contents">
        <div class="detail_title">詳細画面</div>
        <div class="detail_date">読了日：{{}}</div>
        <div>
            <div class="detail_comment" v-for="item in items" v-bind:key="item">
                <div class="detail_comment_text">{{ item.description}}</div>
                <div class="detail_items">タイトル：{{ item.title }}</div>
                <div class="detail_items">著者名：{{ item.author }}</div>
                <div class="detail_items">出版社名：{{ item.publisher }}</div>            
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
        }
    },
    methods: {
        fetchTexts: function() {
            axios.get('http://127.0.0.1:8000/api/books').then((res)=>{
                this.items = res.data
                // console.log(res)
            })
        },
        // addText: function() {
        //     axios.post('/api/create', {
        //         title: this.new_create,
        //         author: this.new_create,
        //         publisher: this.new_create

        //     }).then((res) => {
        //         this.items = res.data
        //         this.new_create = ''
        //     })
        // },
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
    padding: 10px;
}

.detail_items {
    padding: 5px 10px;
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
