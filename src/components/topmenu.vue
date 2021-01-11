<template>
  <div class="header py-3 px-5 border-b border-sup2-500 top-0 sticky z-20 bg-white">
    <div class="container m-auto flex justify-between">
      <div class="logo">
        <router-link to="/">
          <img src="../assets/logo.svg" alt="" />
        </router-link>
      </div>
      <div class="mobileMenu flex items-center md:hidden" @click="mobileClick = !mobileClick">
        <i class="pay-menu"></i>
      </div>
      <div
        class="nav md:flex fixed bg-white h-full md:h-auto md:relative duration-200 top-0"
        :class="{ mobileOpenClass: mobileClick }"
      >
        <div class="block md:hidden" @click="mobileClick = !mobileClick">Close</div>
        <ul class="mainMenu md:flex items-center list-none">
          <li v-for="item in mainPage" :key="item" class="text-main-500 hover:text-sup1-100 px-4">
            <router-link :to="item.link" class="no-underline">{{ item.name }}</router-link>
          </li>
        </ul>
        <ul class="dashboardMenu md:flex items-center md:border-l pl-0">
          <li
            v-for="item in dashboard"
            :key="item"
            class="text-sub-500 px-4 hover:text-sub-100 flex"
          >
            <div v-html="item.icon" class="mr-3 duration-200 "></div>
            <router-link :to="item.link" class="no-underline">{{ item.name }}</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'topmenu',
    data() {
      return {
        mainPage: [
          {
            link: '/',
            name: '優惠活動'
          },
          {
            link: '/',
            name: '飲料故事'
          },
          {
            link: '/',
            name: '魔法秘訣'
          },
          {
            link: '/',
            name: '立即體驗'
          }
        ],
        dashboard: [
          {
            link: '/',
            icon: '<i class="pay-shop"></i>',
            name: '我是店長'
          },
          {
            link: '/login',
            icon: '<i class="pay-member"></i>',
            name: '立即訂餐'
          }
        ],
        mobileClick: false
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @media (max-width: 768px) {
    .nav {
      width: 300px;
      right: -300px;
    }
    .mobileOpenClass {
      right: 0;
    }
  }
</style>
