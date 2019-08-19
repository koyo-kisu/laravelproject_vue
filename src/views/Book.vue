<template>
    <div class="book">
        <div class="book_title">mainページ</div>
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
            <router-link to="/Add" class="add_page_transition">追加</router-link>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data: function() {
        return {
            new_create: '',
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
            axios.get('http://127.0.0.1:8000/api/books').then((res)=>{
                this.items = res.data
                console.log(res)
            })
        },
        addText: function() {
            axios.post('/api/books', {
                title: this.new_create,
                author: this.new_create,
                publisher: this.new_create
            }).then((res) => {
                this.items = res.data
                this.new_create = ''
            })
        },
        deleteText: function(task_id) {
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
.book {
    margin: 0 auto;
    width: 1000px;
    text-align: center;
}

.book_title {
    padding-bottom: 30px;
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

.add_page_btn {
    margin-top: 30px;
}

.add_page_transition {
    border: 1px solid gray;
    padding: 5px 15px;
    color: black;
    text-decoration: none;
}

.add_page_transition:hover {
    background: yellow;
}

.book_contents {
    text-align: center;
    width: 100%;
}

</style>


