<template>
  <div id="enterPassword" class="">
    <accountLogo />
    <div class="accountContainer m-auto block text-center px-10">
      <div class="entyForm pt-14">
        <h4>帳號登入</h4>
        <p>輸入您的帳號密碼</p>
        <form action="">
          <div class="inputBar">
            <input type="password" placeholder="請輸入密碼" />
          </div>
          <div class="btn-dark-blue block">登入</div>
        </form>
      </div>
    </div>
    <accountFooter />
  </div>
</template>

<script>
  import accountFooter from '@/components/accountFooter.vue'
  import accountLogo from '@/components/accountLogo.vue'
  import popup from '@/components/popup.vue'

  export default {
    name: 'enterPassword',
    components: {
      accountFooter,
      accountLogo
    },
    data() {
      return {}
    },
    methods: {}
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
