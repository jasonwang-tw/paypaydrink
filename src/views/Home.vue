<template>
  <div class="home">
    <topmenu/>
    <img alt="Vue logo" class="m-auto" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <ul class="grid lg:grid-cols-4 md:grid-cols-2 gap-5 container m-auto">
      <li class="text-mainColor">1</li>
      <li class="text-mainColor">2</li>
      <li class="text-mainColor">3</li>
      <li class="text-mainColor">4</li>
      <li class="bg-mainColor opacity-3 text-5xl">5</li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import topmenu from '@/components/topmenu.vue';

export default {
  // name: 'Home',
  components: {
    HelloWorld,
    topmenu,
  },
};
</script>
