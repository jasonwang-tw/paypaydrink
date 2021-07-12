<template>
  <div id="account" class="text-main-500">
    <accountLogo />
    <div class="accountContainer m-auto block text-center px-10 pt-10">
      <p>留下您的聯絡資訊，開始您的微型創業</p>
      <form action="" class="text-left">
        <div class="mb-3">
          <span>Email</span>
          <input type="text" />
        </div>
        <div class="mb-3">
          <span>電話</span>
          <input type="text" />
        </div>
        <div class="mb-3">
          <span>姓名</span>
          <input type="text" />
        </div>
        <div>
          <span class="mb-3 inline-block">我想了解的投資模式</span>
          <div>
            <input type="checkbox" name="investment" id="1" />
            <label for="1">配方主</label>
          </div>
          <div>
            <input type="checkbox" name="investment" id="2" />
            <label for="2">新加盟主</label>
          </div>
          <div>
            <input type="checkbox" name="investment" id="3" />
            <label for="3">他牌加盟主</label>
          </div>
          <div>
            <input type="checkbox" name="investment" id="4" />
            <label for="4">小股東-房東</label>
          </div>
        </div>
        <hr />
        <input type="checkbox" name="rule" id="rule" />
        <label for="rule"
          >我已詳細了解並同意<router-link to="/privacy" class="hover:text-sup1-100"
            >隱私政策</router-link
          ></label
        >
        <div class="btn-dark-blue text-center mt-10 w-1/2 mx-auto" @click="notice_hidden = false">
          送出
        </div>
      </form>
    </div>
    <accountFooter />
    <!-- 彈跳通知 -->
    <div
      class="fixed top-0 left-0 bg-black bg-opacity-20 w-full h-full z-20 flex items-center justify-center"
      :class="{ hidden: notice_hidden }"
    >
      <div class="bg-white lg:w-1/4 -mt-40 text-center p-10 rounded-lg shadow-lg">
        <h3>表單成功送出</h3>
        <p>請耐心等候，我們專人將盡快與您聯繫</p>
        <div class="btn-dark-blue w-1/4 mx-auto mt-10" @click="notice_hidden = true">
          確認
        </div>
      </div>
    </div>
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
      return {
        notice_hidden: true
      }
    }
  }
</script>

<style lang="scss" scoped>
  .accountContainer {
    max-width: 500px;
  }
  input[type='checkbox'] {
    display: none;
    &:checked + label:before {
      font-family: 'paypaydrink' !important;
      content: '\ea10';
    }
  }
  input[type='checkbox'] + label {
    display: flex;
    &:before {
      width: 20px;
      height: 20px;
      content: ' ';
      border: 1px solid var(--color-sup3);
      margin-right: 0.5rem;
      transform: translateY(2px);
      border-radius: 5px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
</style>
