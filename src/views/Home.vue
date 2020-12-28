<template>
  <div class="home">
    <topmenu/>
    <img alt="Vue logo" class="m-auto" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import topmenu from '@/components/topmenu.vue';

export default {
  name: 'Home',
  components: {
    HelloWorld,
    topmenu,
  },
};
</script>
