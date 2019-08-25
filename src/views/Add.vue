<template>
    <div class="add_contents">
        <div class="add_title">レビュー追加画面</div>
        <!-- <form action="">formタグに描く場合はaction属性の中身（データの送信先）はどこに指定したらいいの？</form> -->
        <label class="add_item">
            <div>タイトル</div>
            <div><input name = "title"  type="text" class="txt" v-model="typedTitle" required value="{{ old('title') }}"></div>
            <div class="error" v-for="error in errors" v-bind:key="error">{{ error }}</div>
        </label>
         <label class="add_item">
            <div>著者名</div>
            <div><input name="author" type="text" class="txt" v-model="typedAuthor" required value="{{ old('author') }}"></div>
            <div class="error" v-for="error in errors" v-bind:key="error">{{ error }}</div>
        </label>
         <label class="add_item">
             <div>出版社</div>
            <div><input name="publisher" type="text" class="txt" v-model="typedPublisher" value="{{ old('publisher') }}"></div>
        </label>
        <label class="add_item">
            <div>読了日</div>
            <div><input name="finish_date" type="date" v-model="finish_date" value="{{ old('finish_date') }}"></div>
        </label>
        <label for="select_genre" class="add_item">
            <div>ジャンル</div>
            <!-- v-model付与してもoptionの選択肢は反映されない問題　optionにv-modelは使えない模様 -->
            <select name="genre" id="genre" v-model="typedGenre">
                <option>小説</option>
                <option>ビジネス本</option>
                <option>哲学</option>
                <option>漫画</option>
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
        typedGenre: '',
        errors: []
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
    }   
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

