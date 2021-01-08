<template>
  <div id="footerBar">
    <div class="max-w-3xl m-auto py-10 text-center">
      <img src="../assets/footer_logo.svg" alt="" class="block m-auto" />
      <div class="pt-5">
        <router-link
          v-for="(item, index) in footerMenu"
          :key="index"
          :to="item.link"
          class="no-underline hover:text-sup1-100 px-3"
          >{{ item.name }}</router-link
        >
      </div>
      <hr />
      <div class="content flex justify-between">
        <div class="us flex">
          <h5 class="mr-10 text-sub-100">聯絡我們</h5>
          <ul class="list-none pl-0 text-left">
            <li>台北市中山區中山北路96號13樓1405室</li>
            <li>
              <a href="mailto:evan@wiidreamthinker.com" class="hover:text-sup1-100"
                >evan@wiidreamthinker.com</a
              >
            </li>
          </ul>
        </div>
        <div class="social flex">
          <h5 class="mr-10 text-sub-100">Follow US</h5>
          <ul class="list-none pl-0 flex">
            <li class="px-3">
              <a href="#" class="no-underline hover:text-sup1-100"
                ><i class="pay-fb text-lg"></i
              ></a>
            </li>
            <li class="px-3">
              <a href="#" class="no-underline hover:text-sup1-100"
                ><i class="pay-ig text-lg"></i
              ></a>
            </li>
            <li class="px-3">
              <a href="#" class="no-underline hover:text-sup1-100"
                ><i class="pay-yt text-lg"></i
              ></a>
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <div class="coptRight">© 2020 PayPayDrink</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'footer',
    data() {
      return {
        footerMenu: [
          {
            link: '/',
            name: '飲料故事'
          },
          {
            link: '/',
            name: '優惠活動'
          },
          {
            link: '/',
            name: '魔法秘訣'
          },
          {
            link: '/',
            name: '立即體驗'
          },
          {
            link: '/',
            name: '隱私政策'
          },
          {
            link: '/',
            name: '使用條款'
          }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped></style>
