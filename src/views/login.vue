<template>
  <div id="account" class="">
    <accountLogo />
    <div class="accountContainer m-auto block text-center px-10">
      <div class="entyForm pt-14">
        <h4>歡迎回來</h4>
        <p>使用您的手機號碼登入。</p>
        <form action="">
          <div class="inputBar">
            <div class="flex">
              <select name="" id="" v-model="selectedCode" class="text-sm text-sup1-500 w-3/5 mr-3">
                <option :value="m.dial_code" v-for="(m, index) in mobileCode">
                  {{ m.code }} {{ m.dial_code }}</option
                >
              </select>
              <input class="border-white" type="text" placeholder="請輸入手機號碼" />
            </div>
            <div class="md:flex justify-between mt-3">
              <span class="text-sm text-sup1-500">驗證碼已送出，請留意簡訊</span>
              <div class="btn-light-blue flex-shrink-0 md:w-1/3 md:ml-4 duration-200 mt-3 md:mt-0">
                發送驗證碼
              </div>
            </div>
          </div>
          <div class="inputBar"><input type="text" placeholder="請輸入手機驗證碼" /></div>
          <router-link to="/enterPassword" class="btn-dark-blue w-full inline-block"
            >繼續</router-link
          >
        </form>
        <p class="text-main-500 mt-10">
          還沒用過 配配飲 嗎？
          <router-link to="/newaccount" class="text-sub-500 hover:text-sub-100"
            >建立帳號</router-link
          >，還是
          <router-link to="/forgetPassword" class="text-sub-500 hover:text-sub-100"
            >忘記密碼</router-link
          >？
        </p>
        <p class="my-5 text-xl">或</p>
        <div class="social md:flex justify-between block">
          <button class="btnFb beforeIcon mb-3 md:mb-0">
            使用FaceBook登入
          </button>
          <button class="btnGoogle beforeIcon">
            使用Google登入
          </button>
        </div>
      </div>
    </div>
    <accountFooter />
  </div>
</template>

<script>
  import accountFooter from '@/components/accountFooter.vue'
  import accountLogo from '@/components/accountLogo.vue'
  import mobileCode from '../../static/resource/CountryCodes'

  export default {
    name: 'login',
    components: {
      accountFooter,
      accountLogo
    },
    data() {
      return {
        selectedCode: '+886',
        mobileCode
      }
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
  .social {
    button {
      color: white;
      flex-basis: 49%;
      // transition-duration: .2s;
    }
    .btnFb {
      background-color: #4267b2;
      &:hover {
        background-color: #5481db;
      }
      &:before {
        content: '\e90e';
      }
    }
    .btnGoogle {
      background-color: #df4b31;
      &:hover {
        background-color: #f16951;
      }
      &:before {
        content: '\e91e';
      }
    }
  }
</style>
