<template>
  <div class="accountLogo text-center pt-20">
    <router-link to="/" class="accountLogo inline-block m-auto">
      <img src="../assets/logo.svg" alt="" />
    </router-link>
  </div>
</template>

<script>
  export default {
    name: 'accountLogo',
    data() {
      return {}
    }
  }
</script>

<style lang="scss" scoped>
  .accountLogo {
    img {
      width: 150px;
    }
  }
</style>
