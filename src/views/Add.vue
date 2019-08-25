<template>
    <div class="add_contents">
        <div class="add_title">レビュー追加画面</div>
        <label class="add_item">
            <div>タイトル</div>
            <div><input name = "title"  type="text" class="txt" v-model="typedTitle" required></div>
            <div v-if="error.titleErr">{{ error.titleErr }}</div>
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
            <div><input name="finish_date" type="date" v-model="finish_date"></div>
        </label>
        <label for="select_genre" class="add_item">
            <div>ジャンル</div>
            <!-- v-model付与してもoptionの選択肢は反映されない問題　optionにv-modelは使えない模様 -->
            <!-- 初期値を設定しておくにはv-for使わない方がいいかも optionにselectedを追加 -->
            <select name="genre" id="genre" v-model="typedGenre">
                <option selected="小説" v-for="role in roles" v-bind:key="role">{{ role }}</option>
            </select>
        </label>
        <label>
            <div>感想</div>
            <textarea v-model="typedText" name="description" class="txa" cols="20" rows="10" value="{{ old('description') }}"></textarea>
            <p>{{ charaCount }} 文字</p>
        </label>
        <br>
        <div class="add_btn">
            <button type="submit" class="add_btn_txt" v-on:click="addText">登録する</button>
        </div>
        <div class="add_home_btn">
            <router-link to="/" class="add_return_btn">ホームに戻る</router-link>
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
            titleErr:"タイトルを入力してしてください。",
            authorErr: "著者"
            },
      }
    },
    computed: {
        charaCount: function() {
            return this.typedText.length;
        }
    },
    methods: {
        addText: function() {
            axios.post('/api/create', {
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
                    this.finish_date = '',
                    this.typedGenre = ''
                }
                

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

.add_btn {
    padding-top: 20px;
}

.add_btn_txt  {
    border: 1px solid gray;
    padding: 10px ;
    cursor: pointer;
    text-align: center;
    margin-bottom: 10px;
    width: 600px;
}

.add_return_btn {
    display: inline-block;
    border: 1px solid gray;
    width: 600px;
    padding: 5px 0px 5px 0px;
    cursor: pointer;
    color: black;
    text-decoration: none;
    text-align: center;
}

</style>

