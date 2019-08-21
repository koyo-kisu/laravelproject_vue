<template>
    <div class="add_contents">
        <div class="add_title">レビュー追加画面</div>
        <label class="add_item">
            <div>タイトル</div>
            <div><input type="text" class="txt" v-model="typedTitle"></div>
        </label>
         <label class="add_item">
             <div>著者名</div>
            <div><input type="text" class="txt" v-model="typedAuthor"></div>
        </label>
         <label class="add_item">
             <div>出版社</div>
            <div><input type="text" class="txt" v-model="typedPublisher"></div>
        </label>
        <label for="">
            <div>読了日</div>
            <div><input type="date" value="2019-01-01"></div>
        </label>
        <label>
            <div>感想</div>
            <textarea v-model="typedText" name="" class="txa" cols="20" rows="10"></textarea>
            <p>{{ charaCount }} 文字</p>
        </label>
        <br>
        <div class="add_btn">
            <button type="submit" class="add_btn_txt" v-on:click="addText">登録</button>
        </div>
        <!-- <div class="del_btn">
            <button type="submit" class="del_btn_txt">削除</button>
        </div> -->
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

            }).then((res) => {
                this.typedTitle = '',
                this.typedAuthor = '',
                this.typedPublisher = '',
                this.typedText = ''
            })
        },
    // watch: {
    //     charaCount: function() {
    //         if(charaCount > 201) {
    //             console.log('200文字以内で入力してください')
    //         }
    //     }
    // }
    // watch: {
    //     name: function() {
    //     this.error.tooLong = (typedText.length > 201) ? true : false;
    //     }
    // },
    // data: {
    //     name: characterLimit,
    //     error: {
    //     tooLong: false,
    //     }
    // },  
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

.txt, .txa {
    width: 600px;
}

.add_btn, .del_btn {
    padding-top: 20px;
}

.add_btn_txt, .del_btn_txt {
    border: 1px solid gray;
    padding: 10px ;
    width: 600px;
    cursor: pointer;
    text-align: center;
}

.add_btn_txt:hover {
    background: yellow;
}

.del_btn_txt:hover {
    background: red;
}
</style>

