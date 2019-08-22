<template>
    <div class="detail_contents">
        <div class="detail_title">詳細画面</div>
        <div>
            <router-link to="/" class="return_home_btn_top">ホーム</router-link>
        </div>
        <div>
            <div class="detail_comment" v-for="item in items" v-bind:key="item.id">
                <div class="detail_date">読了日：{{ item.created_at }}</div>
                <div>{{ item.id }}</div>
                <div class="detail_comment_text">{{ item.description }}</div>
                <!-- <div>{{ charaCount }}文字</div> -->
                <div class="detail_items">タイトル：{{ item.title }}</div>
                <div class="detail_items">著者名：{{ item.author }}</div>
                <div class="detail_items">出版社名：{{ item.publisher }}</div>
                <div class="detail_items del_btn" v-on:click="delText(item.id)" v-bind:key="item.id">削除</div>        
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
    // computed: {
    //     charaCount: function() {
    //         return this.typedText.length;
    //     }
    // },
    methods: {
        fetchTexts: function() {
            axios.get('/api/books').then((res)=>{
                this.items = res.data
                // console.log(res)
            })
        },
        delText: function(task_id) {
            axios.post('/api/del', {
                id: task_id
            }).then((res) => {
                this.items = res.data
            })
        }
    },
    created() {
        this.fetchTexts()
    },
}
</script>

<style>
.detail_contents {
    margin: 0 auto;
    width: 600px;
}

.return_home_btn_top {
    color: black;
    float: right;
    margin-bottom: 20px;
    text-decoration: none;
    border: 1px solid gray;
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

.del_btn {
    background:#F5F6F2;
    width: 35px;
    border-radius: 10%;
    text-align: center;
    cursor: pointer;
    margin-left: 10px;
    margin-bottom: 5px;
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
</style>
