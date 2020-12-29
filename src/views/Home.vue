<template>
  <div class="home">
    <slide/>
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <topmenu/>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';
import topmenu from '@/components/topmenu.vue';
// import slide from '@/components/slide.vue';

export default {
  // name: 'Home',
  components: {
    // HelloWorld,
    topmenu,
    // slide,
  },
};
</script>
