<template>
    <div class="book">
        <div class="book_title">読書管理アプリ</div>
        <div class="number_books">読み終えた本：{{ itemCount }}冊</div>
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
            axios.get('/api/books').then((res)=>{
                this.items = res.data
                console.log(res)
            })
        },
        
    },
    created() {
        this.fetchTexts()
    },
    computed: {
        itemCount: function() {
            return this.items.length;
        }
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

.number_books {
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


