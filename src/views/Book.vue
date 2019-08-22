<template>
    <div class="book">
        <div class="book_title">読書管理アプリ</div>
        <div class="search_item">
            <input type="text" v-model="keyword" class="key_search" placeholder="タイトルを入力してください">
            <button v-on:click="filteredItems" class="key_search_btn">検索</button>
        </div>
        <div class="book_contents">
            <thead>
                <tr>
                    <th v-for="head in heads" v-bind:key="head">{{ head }}</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in items" v-bind:key="item.id">
                    <td>{{ item.title }}</td>
                    <td>{{ item.author }}</td>
                    <td>{{ item.publisher }}</td>
                </tr>
            </tbody>
        </div>
        <div class="overflow-auto">
            <div class="mt-3">
                <h6 class="text-center">ページ移動ボタン</h6>
                <b-pagination v-model="currentPage" :total-rows="rows" align="center" name="pagination" :per-page="perPage"></b-pagination>
            </div>
        </div>
        <div class="add_page_btn">
            <router-link to="/Add" class="add_page_transition">追加フォームへ</router-link>
        </div>
        <div class="show_page_btn">
            <router-link to="/show" class="show_page_transition">詳しく見る</router-link>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data: function() {
        return {
            keyword: this.title,
            items: [],
            heads: [
                'タイトル',
                '著者名',
                '出版社',
            ],
            rows: 100,
            currentPage: 1,
            perPage: 5,
            filterItem : this.title
        }
    },
    methods: {
        fetchTexts: function() {
            axios.get('/api/books').then((res)=>{
                this.items = res.data
                console.log(res)
            })
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
        
    },
    // computed: {
    //     filteredItems: function() {
    //         var items = [];

    //         for(var i in this.items) {
    //             var item = this.items[i];
    //             if(item.title.indexOf(this.keyword) !== -1 ||
    //                 item.author.indexOf(this.keyword) !== -1 ||
    //                 item.publisher.indexOf(this.keyword) !== -1) {
    //                     items.push(item);
    //                 }
    //         }
    //     }
    // },
    created() {
        this.fetchTexts()
    },
    // mounted() {
    //     var url = '/api/books';
    //     axios.get(url).then(function(response){
    //         var = response.data;
    //         console.log();
    //     });
    // }
}
</script>

<style>
.book {
    margin: 0 auto;
    width: 1000px;
    text-align: center;
}

.book_title {
    padding-bottom: 30px;
}

.search_item {
    margin-bottom: 30px;
}

.key_search {
    width: 500px;
    height: 20px;
}

.key_search_btn {
    display: inline-block;
    height: 25px;
    margin-left: 5px;
}

th {
    border: 1px solid black;
    width: 400px;
    background: #f3f6fc;
    font-size: bold;
}

td {
    border: 1px solid black;
    width: 400px;
    text-align: left;
    padding: 5px 0 5px 10px;
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

.book_contents {
    text-align: center;
    width: 100%;
}

</style>


