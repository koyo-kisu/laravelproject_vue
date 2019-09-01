<template>
    <div class="edit_contents">
        <p>編集画面</p>
        <div>{{ item.title }}</div>
        <div v-for="item in items" v-bind:key="item.id">
            <label class="edit_item">
                <div>タイトル</div>
                <div><input type="text" class="txt" v-model="typedTitle">{{ item.title }}</div>
                <!-- <div class="error" v-if="error.titleErr">{{ error.titleErr }}</div> -->
            </label>
            <label class="edit_item">
                <div>著者名</div>
                <div><input type="text" class="txt" v-model="typedAuthor">{{ item.author }}</div>
                <!-- <div class="error" v-if="error.authorErr">{{ error.authorErr }}</div> -->
            </label>
            <label class="edit_item">
                <div>出版社</div>
                <div><input type="text" class="txt" v-model="typedPublisher">{{ item.publisher }}</div>
            </label>
            <label class="edit_item">
                <div>読了日</div>
                <div><input type="date" v-model="finish_date">{{ item.finish_date }}</div>
            </label>
            <label for="select_genre" class="edit_item">
                <div>ジャンル</div>
                <select name="genre" id="genre" v-model="typedGenre">
                    <option v-for="role in roles" v-bind:key="role">{{ item.genre }}</option>
                </select>
            </label>
            <label>
                <div>感想</div>
                <textarea v-model="typedText" name="" class="txa" cols="20" rows="10" value="{{ item.description }}"></textarea>
                <p>{{ charaCount }} 文字</p>
            </label>
            <br>
            <div class="add_btn">
                <button type="submit" class="add_btn_txt" v-on:click="addText">登録する</button>
            </div>
            <div class="edit_home_btn">
                <router-link to="/" class="edit_return_btn">ホームに戻る</router-link>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data: function() {
        return {
            typedText: '',
            typedTitle: '',
            typedAuthor: '',
            typedPublisher: '',
            typedDate: '',
            typedGenre: '',
            errors: [],
            items: [],
            roles: [
                "小説",
                "ビジネス本",
                "哲学",
                "漫画"
            ]
        }
    },
    methods: {
        //データを取得
        fetchTexts: function(task_id) {
            axios.post('/api/edit', {
                id: task_id,
                title: this.items.title,
                author: this.items.author,
                publisher: this.items.publisher,
                finish_date: this.items.finish_date,
                description: this.items.description,
                genre: this.items.genre,
                
            }).then((res) => {
                if (res.data.error){
                    this.errors = res.data.error
                }
                else {
                    this.items = res.data
                    // this.typedTitle = '',
                    // this.typedAuthor = '',
                    // this.typedPublisher = '',
                    // this.typedText = '',
                    // this.typedDate = '',
                    // this.typedGenre = ''
                }
                location.href = "/#/edit"

            }).then((res)=>{
                this.items = res.data
            })
        },
        //データを追加
        addText: function(task_id) {
            axios.post('/api/create', {
                id: task_id,
                title: this.typedTitle,
                author: this.typedAuthor,
                publisher: this.typedPublisher,
                description: this.typedText,
                finish_date: this.finish_date,
                genre: this.typedGenre

            }).then((res) => {
                if (res.data.error){
                    this.errors = res.data.error
                }
                else {
                    this.items = res.data,
                    this.typedTitle = '',
                    this.typedAuthor = '',
                    this.typedPublisher = '',
                    this.typedText = '',
                    this.typedDate = '',
                    this.typedGenre = ''
                }
                location.href = "/" 
            })
        }, 
    },
    //インスタンス生成時にfetchText()を実行したいのでcreated()フックに登録
    created() {
        this.fetchTexts()
    },
    //文字数カウント
    computed: {
        charaCount: function() {
            return this.typedText.length;
        }
    },
}
</script>

<style>
.edit_contents {
    margin: 0 auto;
    width: 600px;
}

/* .edit_item {

} */
</style>