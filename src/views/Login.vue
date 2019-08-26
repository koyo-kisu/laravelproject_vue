<template>
    <div class="login_contents">
        <div>ログイン画面</div>
        <div>
            <div>ID</div>
            <div class="login_id"><input type="text" placeholder="ユーザーID"></div>
            <div>パスワード</div>
            <div class="login_pw"><input type="text" placeholder="パスワード"></div>
        </div>
        <div>
            <input type="submit" value="ログイン">
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    
}
</script>

<style>
.login_contents {
    margin: 0 auto;
    width: 600px;
}

.login_id {
    width: 400px;
}

.login_pw {
    width: 400px;
}
</style>