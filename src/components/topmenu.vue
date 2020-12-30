<template>
  <div class="header py-3 px-5 border-b border-support2-100 top-0 sticky z-10">
    <div class="container m-auto flex justify-between">
    <div class="logo">
      <router-link to="/">
        <img src="../assets/logo.svg" alt="">
      </router-link>
    </div>
    <div class="mobileMenu flex items-center md:hidden">
      <span class="pay-menu"></span>
    </div>
    <div class="nav hidden md:flex">
    <ul class="mainMenu md:flex items-center">
      <li v-for="item in mainPage" :key="item" class="text-mainColor-100 hover:text-support1-100 duration-200 px-4">
        <router-link :to="item.link">{{item.name}}</router-link>
      </li>
    </ul>
    <ul class="dashboardMenu md:flex items-center md:border-l">
      <li v-for="item in dashboard" :key="item" class="text-subColor-100 hover:text-support1-100 duration-200 px-4 flex">
        <div v-html="item.icon" class="mr-3"></div>
        <router-link :to="item.link">{{item.name}}</router-link>
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
          name: '優惠活動',
        },
        {
          link: '/',
          name: '飲料故事',
        },
        {
          link: '/',
          name: '魔法秘訣',
        },
        {
          link: '/',
          name: '立即體驗',
        },
      ],
      dashboard: [
        {
          link: '/',
          icon: '<span class="pay-shop"></span>',
          name: '我是店長',
        },
        {
          link: '/',
          icon: '<span class="pay-member"></span>',
          name: '我是會員',
        },
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
