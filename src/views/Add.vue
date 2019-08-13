<template>
    <div class="add_contents">
        <div class="add_title">レビュー追加画面</div>
        <label v-for="type in types" :key="type" class="add_item">{{ type }}
            <div><input type="text" class="txt"></div>
        </label>
        <label>
            <div>感想</div>
            <textarea v-model="typedText" name="" class="txa" cols="30" rows="10"></textarea>
            <p>{{ charaCount }} / 200文字</p>
            <!-- <p class="error" v-if="error.tooLong">*200文字以内でコメントしてください</p> -->
        </label>
        <br>
        <div class="add_btn">
            <button type="submit" class="add_btn_txt">登録</button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
      return {
        types: [
          'タイトル',
          '著者',
          '出版社',
        ],
        typedText: '',
        error: {},
      }
    },
    computed: {
        charaCount: function() {
            return this.typedText.length;
        }
    },
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
</script>


<style>
.add_contents {
    margin: 0 auto;
    width: 300px;
}

.add_title {
    text-align: center;
    padding-bottom: 30px;
}

.txt, .txa {
    width: 300px;
}

.add_btn {
    padding-top: 20px;
}

.add_btn_txt {
    border: 1px solid black;
    padding: 10px ;
    width: 300px;
    cursor: pointer;
    text-align: center;
}
</style>

