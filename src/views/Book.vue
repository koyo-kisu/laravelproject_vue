<template>
    <div class="book">
        <div class="book_title">mainページ</div>
        <div class="book_contents">
            <table v-for="item in items" v-bind:key="item">{{ item }}</table>
        </div>
        <v-client-table :columns="columns" :data="data" :options="options" v-model="new_create"></v-client-table>
        <div>
            <router-link to="/Add" class="add_page_transition" v-on:click="addText">追加</router-link>
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
        }
    },
    methods: {
        fetchTexts: function() {
            axios.get('/api/books').then((res)=>{
                this.items = res.data
            })
        },
        addText: function() {
            axios.post('/api/create', {
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
</script>

<style>
.book {
    margin: 0 auto;
    /* width: 1000px; */
    text-align: center;
}

.book_title {
    padding-bottom: 30px;
}

.add_page_transition {
    border: 1px solid black;
    padding: 5px 15px;
    color: black;
    text-decoration: none;
    /* width: 300px;
    height: 50px; */
}

.book_contents {
    text-align: center;
}

</style>


