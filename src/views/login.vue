<template>
  <div id="login" class="">
    <div class="loginContainer m-auto block text-center px-10">
      <router-link to="/" class="inline-block m-auto">
        <img src="../assets/logo.svg" alt="" />
      </router-link>
      <div class="loginForm">
        <h5>歡迎回來</h5>
        <p>使用您的電子郵件地址登入。</p>
        <form action="">
          <div class="account">
            <input type="text" placeholder="請輸入電子郵件地址" />
          </div>
          <div class="password">
            <input type="password" placeholder="請輸入密碼" />
          </div>
          <button class="btn-dark-blue">登入</button>
        </form>
        <p>
          還沒用過 配配飲 嗎？
          <router-link to="/" class="text-sub-500 hover:text-sub-100">建立帳號</router-link>，還是
          <router-link to="/" class="text-sub-500 hover:text-sub-100">忘記密碼</router-link>？
        </p>
        <p>或</p>
        <div class="social">
          <button>
            使用FaceBook登入
          </button>
          <button>
            使用Google登入
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'login',
    data() {
      return {}
    }
  }
</script>

<style lang="scss" scoped>
  .loginContainer {
    max-width: 500px;
  }
</style>
