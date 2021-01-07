<template>
  <div id="slideshow">
    <splide :options="options">
      <splide-slide
        v-for="item in slideCard"
        :key="item"
        class="flex justify-center items-center rounded-3xl overflow-hidden bg-white"
      >
        <a href="#">
          <img :src="item.imgLink" />
        </a>
      </splide-slide>

      <!-- <template v-slot:controls>
        <div class="splide__progress">
          <div class="splide__progress__bar">
          </div>
        </div>
        <div class="splide__autoplay">
          <button class="splide__play">Play</button>
          <button class="splide__pause">Pause</button>
        </div>
    </template> -->
    </splide>
  </div>
</template>

<script>
  // 註冊本地組件
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
          // rewind: true,
          width: 1300,
          gap: '3.5rem',
          perPage: 3,
          perMove: 1,
          type: 'loop',
          autoplay: true,
          pauseOnHover: false,
          resetProgress: false,
          focus: 'center'
          // arrows      : 'slider',
        },
        slideCard: [
          {
            imgLink: require('../assets/drinkCup.png')
          },
          {
            imgLink: require('../assets/active1.jpg')
          },
          {
            imgLink: require('../assets/active2.jpg')
          },
          {
            imgLink: require('../assets/active3.jpg')
          },
          {
            imgLink: require('../assets/logo.png')
          },
          {
            imgLink: require('../assets/logo.png')
          }
        ]
      }
    }
  }
</script>
<style lang="scss" scoped>
  // @import "../../node_modules/@splidejs/splide/dist/css/themes/splide-default.min.css";
  // @import url(https://res.cloudinary.com/jasonwang/raw/upload/v1609946205/CDN/splide-default.min.css);
</style>
