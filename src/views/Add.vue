<template>
    <div class="add_contents">
        <div class="add_title">レビュー追加画面</div>
        <label class="add_item">
            <div>タイトル</div>
            <div><input type="text" class="txt" v-model="typedTitle"></div>
        </label>
         <label class="add_item">
             <div>著者名</div>
             <div v-if="error" class="error">{{ error }}</div>
            <div><input type="text" class="txt" v-model="typedAuthor"></div>
        </label>
         <label class="add_item">
             <div>出版社</div>
            <div><input type="text" class="txt" v-model="typedPublisher"></div>
        </label>
        <label class="add_item">
            <div>読了日</div>
            <div><input type="date" value='2019-08-01' v-model="finish_date"></div>
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
                finish_date: this.finish_date

            }).then((res) => {
                this.items = res.data,
                this.typedTitle = '',
                this.typedAuthor = '',
                this.typedPublisher = '',
                this.typedText = '',
                this.finish_date = ''
            }).catch(function(error) {
                var errors = '';
                for(var key in error.response.data.errors) {
                errors[key] = error.response.data.errors[key].join('<br>');
            }
                self.errors = errors;
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

