<template>
  <div id="account" class="text-main-500">
    <accountLogo />
    <div class="accountContainer m-auto block text-center px-10">
      <div class="entyForm pt-14">
        <h4>歡迎回來，店長</h4>
        <p>使用您的電子郵件地址登入。</p>
        <form action="">
          <div class="inputBar"><input type="text" placeholder="請輸入電子郵件地址" /></div>
          <div class="inputBar"><input type="password" placeholder="請輸入密碼" /></div>
          <button class="btn-dark-blue">登入</button>
        </form>
        <p class="text-main-500 mt-10 leading-8">
          想要加盟 配配飲 嗎？
          <router-link to="/join-form" class="text-sub-500 hover:text-sub-100"
            >立即留下聯絡資訊</router-link
          >，<br />我們將由專人為您服務。
        </p>
      </div>
    </div>
    <accountFooter />
  </div>
</template>

<script>
  import accountFooter from '@/components/accountFooter.vue'
  import accountLogo from '@/components/accountLogo.vue'

  export default {
    name: 'login',
    components: {
      accountFooter,
      accountLogo
    },
    data() {
      return {}
    }
  }
</script>

<style lang="scss" scoped>
  .accountContainer {
    max-width: 500px;
  }
  .entyForm {
    .inputBar {
      margin-bottom: 1rem;
    }
  }
</style>
