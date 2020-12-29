<template>
  <div class="home">
    <topmenu/>
    <slide/>
    <img alt="Vue logo" class="m-auto" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <ul class="grid lg:grid-cols-4 md:grid-cols-2 gap-5 container m-auto">
      <li class="text-mainColor-100">1</li>
      <li class="text-mainColor-100">2</li>
      <li class="text-mainColor-100">3</li>
      <li class="text-mainColor-100 bg-purple-500 text-white">4</li>
      <li class="bg-mainColor-100 opacity-3 text-5xl rounded-lg">5</li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import topmenu from '@/components/topmenu.vue';
import slide from '@/components/slide.vue';

export default {
  // name: 'Home',
  components: {
    HelloWorld,
    topmenu,
    slide,
  },
};
</script>
