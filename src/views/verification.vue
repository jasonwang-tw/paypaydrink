<template>
  <div id="account" class="">
    <accountLogo />
    <div class="accountContainer m-auto block text-center px-10">
      <div class="entyForm pt-14">
        <h4>帳號驗證</h4>
        <p>請至電子郵件地址收取六位數驗證碼，並於下方輸入</p>
        <form action="">
          <div class="inputBar">
            <input type="text" placeholder="請輸入驗證碼" />
          </div>
          <router-link to="/" class="btn-dark-blue block">繼續</router-link>
        </form>
      </div>
    </div>
    <accountFooter />
  </div>
</template>

<script>
  import accountFooter from '@/components/accountFooter.vue'
  import accountLogo from '@/components/accountLogo.vue'

  export default {
    name: 'newAccount',
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
