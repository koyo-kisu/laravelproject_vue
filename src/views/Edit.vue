<template>
    <div class="edit_contents">
        <p class="edit_title">編集画面</p>
        <div>
            <label class="edit_item">
                <div>タイトル</div>
                <div><input type="text" class="txt" v-model="typedTitle"></div>
                <div class="error" v-if="error.titleErr">{{ error.titleErr }}</div>
            </label>
            <label class="edit_item">
                <div>著者名</div>
                <div><input type="text" class="txt" v-model="typedAuthor"></div>
                <div class="error" v-if="error.authorErr">{{ error.authorErr }}</div>
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
                <select name="genre" id="genre" v-model="typedGenre" v-for="role in roles" v-bind:key="role">
                    <option>{{ item.genre }}</option>
                    <option>{{ item.genre }}</option>
                    <option>{{ item.genre }}</option>
                    <option>{{ item.genre }}</option>
                    <option>{{ item.genre }}</option>
                    <option>{{ item.genre }}</option>
                </select>
            </label>
            <label>
                <div>感想</div>
                <textarea v-model="typedText" name="" class="txa" cols="20" rows="10"></textarea>
                <p>{{ charaCount }} 文字</p>
            </label>
            <br>
            <div class="page_btn">
                <div type="submit" class="page_transition" v-on:click="updateText">更新する</div>
            </div>
            <div class="page_btn">
                <router-link to="/" class="page_transition">ホームに戻る</router-link>
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
            error: {
                titleErr:"タイトルを入力してしてください",
                authorErr: "著者名を入力してください"
            },
            error: false,
            updated: false,
            item: [],
            roles: [
                '小説',
                '自己啓発',
                'ビジネス',
                '経済',
                '漫画',
                '絵本',
            ],
        }
    },
    //インスタンス生成時にfetchText()を実行したいのでcreated()フックに登録
    created() {
        this.fetchTexts()
    },
    methods: {
        //データを取得
        fetchTexts: function(task_id) {
            axios.get('/api/books/edit/'+ this.$route.params.id)
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
            axios.post('/api/books/edit/update/'+ this.item.id, {
                title: this.typedTitle,
                author: this.typedAuthor,
                publisher: this.typedPublisher,
                description: this.typedText,
                finish_date: this.typedDate,
                genre: this.typedGenre,

            }).then((res) => {
                // if (res.data.error){
                //     this.errors = res.data.error
                // }
                // else {
                //     this.item = res.data
                //     this.updated = true
                // }
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
.edit_title {
    text-align: center;
}

.edit_contents {
    margin: 0 auto;
    width: 600px;
}
</style>