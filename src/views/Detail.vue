<template>
    <div class="detail_contents">
        <p class="detail_title">詳細画面</p>
        <div>
            <div class="detail_comment" v-for="item in items" v-bind:key="item.id">
                <div class="detail_date">読み終えた日：{{ item.finish_date }}</div>
                <div class="detail_comment_text">{{ item.description }}</div>
                <div class="detail_items">タイトル：{{ item.title }}</div>
                <div class="detail_items">著者名：{{ item.author }}</div>
                <div class="detail_items">出版社名：{{ item.publisher }}</div>
                <div class="detail_items">ジャンル：{{ item.jenre }}</div>
                <div class="detail_items del_btn" v-on:click="delText(item.id)" v-bind:key="item.id">削除</div>
                <!-- <div class="detail_items edit_btn" v-on:click="onEdit(item.id)" v-bind:key="item.id">編集</div>   -->
            </div>
        </div>
        <router-link to="/" class="return_home_btn">ホームに戻る</router-link>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            items: [],
            keyword: this.title
        }
    },
    methods: {
        delText: function(task_id) {
            axios.post('/api/del', {
                id: task_id
            }).then((res) => {
                location.href = "/" 
            })
        },
    }
}
</script>

<style scoped>

</style>