<template>
    <div class="add_contents">
        <div class="add_title">レビュー追加画面</div>
        <label class="add_item">
            <div>タイトル</div>
            <div><input name = "title" type="text" class="txt" v-model="typedTitle" required></div>
            <div class="error" v-if="error.titleErr">{{ error.titleErr }}</div>
        </label>
         <label class="add_item">
            <div>著者名</div>
            <div><input name="author" type="text" class="txt" v-model="typedAuthor" required></div>
            <div class="error" v-if="error.authorErr">{{ error.authorErr }}</div>
        </label>
         <label class="add_item">
             <div>出版社</div>
            <div><input name="publisher" type="text" class="txt" v-model="typedPublisher"></div>
        </label>
        <label class="add_item">
            <div>読了日</div>
            <div><input name="finish_date" type="date" v-model="typedDate"></div>
        </label>
        <label for="select_genre" class="add_item">
            <div>ジャンル</div>
            <select name="genre" id="genre" v-model="typedGenre">
                <option v-for="role in roles" v-bind:key="role">{{ role }}</option>
            </select>
        </label>
        <label>
            <div>感想</div>
            <textarea v-model="typedText" name="description" class="txa" cols="20" rows="10"></textarea>
            <p>{{ charaCount }} 文字</p>
        </label>
        <br>
        <div class="page_btn">
            <button type="submit" class="page_transition" v-on:click="addText">登録する</button>
        </div>
        <div class="page_btn">
            <router-link to="/" class="page_transition">ホームに戻る</router-link>
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
        typedGenre: '小説',
        roles: [
            "小説",
            "ビジネス本",
            "哲学",
            "漫画"
        ],
        error: {
            titleErr:"タイトルを入力してしてください",
            authorErr: "著者名を入力してください"
        },
        error: false
      }
    },
    computed: {
        charaCount: function() {
            return this.typedText.length;
        }
    },
    methods: {
        addText: function() {
            axios.post('/api/add', {
                title: this.typedTitle,
                author: this.typedAuthor,
                publisher: this.typedPublisher,
                description: this.typedText,
                finish_date: this.typedDate,
                genre: this.typedGenre,

            }).then((res) => {
                if (res.data.error){
                    this.errors = res.data.error
                    console.log(res.data.error)
                }
                else {
                    this.items = res.data
                }
                location.href = "/" 
            })
        }, 
    }, 
}
</script>




<style>
.add_contents {
    margin: 0 auto;
    width: 600px;
}

.add_title {
    text-align: center;
    padding-bottom: 30px;
}

.error {
    color: red;
}

.txt, .txa {
    width: 600px;
    color: black;
    text-decoration: none;
}

</style>

