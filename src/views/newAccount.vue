<template>
  <div id="account" class="text-main-500">
    <popup
      :class="{ hidden: popupHidden }"
      title="帳號建立成功"
      content="帳號建立完成，您可以登入會員中心囉。"
      nextPage="/"
    />
    <accountLogo />
    <div class="accountContainer m-auto block text-center px-10">
      <div class="entyForm pt-14">
        <h4>建立新帳號</h4>
        <p>請輸入基本資訊</p>
        <form action="">
          <div class="inputBar">
            <input type="text" placeholder="請輸入電子郵件地址" />
          </div>
          <div class="inputBar">
            <input type="password" placeholder="請輸入密碼" />
          </div>
          <div class="inputBar">
            <input class="inputError" type="password" placeholder="請再次輸入密碼" />
            <span class="error text-left w-full inline-block">* 密碼不相符，請重新輸入</span>
          </div>
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
          <div class="inputBar">
            <input type="text" placeholder="請輸入手機驗證碼" />
          </div>
          <div class="btn-dark-blue block mt-10" @click="popupHidden = false">建立帳號</div>
        </form>
      </div>
    </div>
    <accountFooter />
  </div>
</template>

<script>
  import accountFooter from '@/components/accountFooter.vue'
  import accountLogo from '@/components/accountLogo.vue'
  import mobileCode from '../../static/resource/CountryCodes'
  import popup from '@/components/popup.vue'

  export default {
    name: 'newAccount',
    components: {
      accountFooter,
      accountLogo,
      popup
    },
    data() {
      return {
        selectedCode: '+886',
        popupHidden: true,
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
</style>
