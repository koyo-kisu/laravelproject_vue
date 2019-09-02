<template>
    <div class="book">
        <div class="book_title">読書管理アプリ</div>
        <div class="number_books">読み終えた本：{{ itemCount }}冊</div>
        <div class="number_comments">感想がある本：{{ commentCount }}冊</div>
        <div class="book_contents">
            <thead>
                <tr>
                    <th v-for="head in heads" v-bind:key="head">{{ head }}</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in items" v-bind:key="item.id">
                    <td><router-link :to="{ name: 'showId', params: {showId: item.id} }">{{ item.title }}</router-link></td>
                    <!-- <router-link v-bind:to="{ name : 'Event', params : { id: event.id }}"></router-link> -->
                    <td>{{ item.author }}</td>
                    <td>{{ item.publisher }}</td>
                </tr>
            </tbody>
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
            //データを格納するための配列
            items: [],
            heads: [
                'タイトル',
                '著者名',
                '出版社',
            ],
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

.book_contents {
    text-align: center;
    width: 100%;
}

</style>


