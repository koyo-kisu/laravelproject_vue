<template>
    <div class="edit_contents">
        <p>編集画面</p>
        <div>
            <label class="edit_item">
                <div>タイトル</div>
                <div><input type="text" class="txt" v-model="typedTitle"></div>
            </label>
            <label class="edit_item">
                <div>著者名</div>
                <div v-if="error" class="error">{{ error }}</div>
                <div><input type="text" class="txt" v-model="typedAuthor"></div>
            </label>
            <label class="edit_item">
                <div>出版社</div>
                <div><input type="text" class="txt" v-model="typedPublisher"></div>
            </label>
            <label class="edit_item">
                <div>読了日</div>
                <div><input type="date" selected='2019-08-01' v-model="finish_date"></div>
            </label>
            <label for="select_genre" class="edit_item">
                <div>ジャンル</div>
                <select name="genre" id="genre" v-model="typedGenre">
                    <option selected="小説" v-for="role in roles" v-bind:key="role">{{ role }}</option>
                </select>
            </label>
            <label>
                <div>感想</div>
                <div v-if="error" class="error">{{ error }}</div>
                <textarea v-model="typedText" name="" class="txa" cols="20" rows="10"></textarea>
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
            roles: [
                "小説",
                "ビジネス本",
                "哲学",
                "漫画"
            ]
        }
    },
    methods: {
        addText() {
        axios.post('/api/create', {
                title: this.typedTitle,
                author: this.typedAuthor,
                publisher: this.typedPublisher,
                description: this.typedText,
                finish_date: this.finish_date,
                genre: this.typedGenre

            }).then((res) => {
                this.items = res.data,
                this.typedTitle = '',
                this.typedAuthor = '',
                this.typedPublisher = '',
                this.typedText = '',
                this.finish_date = '',
                this.typedGenre = ''

            }).catch(function(error) {
                this.errors = [];
                if(!this.title) {
                    this.errors.push("タイトルは必須です");
                }
                if(!this.author) {
                    this.errors.push("著者名は必須です");
                }
            })
        }, 
    },
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