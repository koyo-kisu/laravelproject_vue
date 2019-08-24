<template>
    <div>
        <div>
            <p>編集画面</p>
            <div>
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
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>

</style>