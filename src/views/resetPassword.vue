<template>
  <div id="account" class="">
    <accountLogo />
    <div class="accountContainer m-auto block text-center px-10">
      <div class="entyForm pt-14">
        <h4>重設密碼</h4>
        <p>請於下方輸入新密碼</p>
        <form action="">
          <div class="inputBar">
            <input type="password" placeholder="請輸入新密碼" />
          </div>
          <div class="inputBar">
            <input class="inputError" type="password" placeholder="請再次輸入新密碼" />
            <span class="error text-left w-full inline-block">* 密碼不相符，請重新輸入</span>
          </div>
          <router-link to="/verification" class="btn-dark-blue block">繼續</router-link>
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
