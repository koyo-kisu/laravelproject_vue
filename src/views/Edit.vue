<template>
    <div class="edit_contents">
        <p>編集画面</p>
        <div>
            <label class="edit_item">
                <div>タイトル</div>
                <div><input type="text" class="txt" v-model="typedTitle"></div>
                <!-- <div class="error" v-if="error.titleErr">{{ error.titleErr }}</div> -->
            </label>
            <label class="edit_item">
                <div>著者名</div>
                <div><input type="text" class="txt" v-model="typedAuthor"></div>
                <!-- <div class="error" v-if="error.authorErr">{{ error.authorErr }}</div> -->
            </label>
            <label class="edit_item">
                <div>出版社</div>
                <div><input type="text" class="txt" v-model="typedPublisher"></div>
            </label>
            <label class="edit_item">
                <div>読了日</div>
                <div><input type="date" v-model="typedDate"></div>
            </label>
            <label for="select_genre" class="edit_item">
                <div>ジャンル</div>
                <select name="genre" id="genre" v-model="typedGenre">
                    <option></option>
                </select>
            </label>
            <label>
                <div>感想</div>
                <textarea v-model="typedText" name="" class="txa" cols="20" rows="10"></textarea>
                <p>{{ charaCount }} 文字</p>
            </label>
            <br>
            <div class="update_btn">
                <button type="submit" class="update_btn_txt" v-on:click="updateText">更新する</button>
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
            item: [],
            roles: [
                "小説",
                "ビジネス本",
                "哲学",
                "漫画"
            ]
        }
    },
    //インスタンス生成時にfetchText()を実行したいのでcreated()フックに登録
    created() {
        this.fetchTexts()
    },
    methods: {
        //データを取得
        fetchTexts: function(task_id) {
            axios.get('/api/books/error/'+ this.$route.params.id)
                .then((res) => {
                // if (res.data.error){
                //     this.errors = res.data.error
                // }
                // else {
                    this.item = res.data
                    this.typedText = this.item.description
                    this.typedTitle = this.item.title
                    this.typedAuthor = this.item.author
                    this.typedPublisher = this.item.publisher
                    this.typedDate = this.item.finish_date
                    this.typedGenre = this.item.genre
                    console.log(res.data)
                // }
            }
        )},

        //データを追加
        updateText: function(task_id) {
            axios.post('/api/update', {
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