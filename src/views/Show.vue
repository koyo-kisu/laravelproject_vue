<template>
    <div class="detail_contents">
        <div class="detail_title">詳細画面</div>
        <div class="search_item">
            <input type="text" v-model="keyword" class="key_search" placeholder="タイトルを入力してください">
            <button v-on:click="filteredItems" class="key_search_btn">検索</button>
        </div>
        <div>
            <div class="detail_comment" v-for="item in items" v-bind:key="item.id">
                <div class="detail_date">読み終えた日：{{ item.finish_date }}</div>
                <div class="detail_comment_text">{{ item.description }}</div>
                <div class="detail_items">タイトル：{{ item.title }}</div>
                <div class="detail_items">著者名：{{ item.author }}</div>
                <div class="detail_items">出版社名：{{ item.publisher }}</div>
                <div class="detail_items del_btn" v-on:click="delText(item.id)" v-bind:key="item.id">削除</div>
                <div class="detail_items update_btn" v-on:click="onUpdate(item.id)" v-bind:key="item.id">更新</div>      
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
            keyword: this.title,
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
            return redirect('/');
        },
        filteredItems: function() {
            axios.post('/api/search', {
                title: this.keyword
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
        onUpdate: function(task_id) {
            axios.post('/api/update', {
                id: task_id,
                title: this.items.title,
                author: this.items.author,
                publisher: this.items.publisher,
                finish_date: this.items.finish_date,
                description: this.items.description

            }).then((res) => {
                this.items = res.data
                console.log('update');
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

.key_search {
    width: 570px;
    height: 20px;
}

.key_search_btn {
    display: inline-block;
    height: 25px;
    margin-left: 5px;
}

.search_item {
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

.del_btn {
    background:#F5F6F2;
    width: 35px;
    text-align: center;
    cursor: pointer;
    margin-left: 10px;
    margin-bottom: 5px;
}

.update_btn {
    background: skyblue;
    width: 35px;
    text-align: center;
    cursor: pointer;
    margin-bottom: 5px;
    float: right;
    /* margin-left: 10px; */
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
