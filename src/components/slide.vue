<template>
  <splide :options="options">
    <splide-slide>
      <img src="../assets/logo.png" />
    </splide-slide>
    <splide-slide>
      <img src="../assets/logo.png" />
    </splide-slide>
    <splide-slide>
      <img src="../assets/logo.png" />
    </splide-slide>
  </splide>
</template>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';

export default {
  name: 'slide',
  components: {
    Splide,
    SplideSlide,
  },
  data() {
    return {
      options: {
        rewind: true,
        width: 800,
        gap: '1rem',
      },
    };
  },
};
</script>
<style lang="scss" scoped>
@import "../../node_modules/@splidejs/splide/dist/css/themes/splide-default.min.css";
</style>
