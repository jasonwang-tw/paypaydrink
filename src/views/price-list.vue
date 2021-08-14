<template>
  <div id="priceList" class="page">
    <topmenu />
    <div class="mx-auto container my-20">
      <h1 class="mx-5 mb-10">熱銷飲品價目表</h1>
      <ul class="grid xl:grid-cols-5 lg:grid-cols-3 md:grid-cols-2 gap-5">
        <li
          v-for="(item, index) in drink"
          :key="index"
          class="no-underline border border-sup2-500 block rounded-3xl overflow-hidden drinkHover bg-white"
        >
          <div
            style="width:41px;height: 48px;"
            class="absolute flex items-center justify-center -mt-3 ml-5"
          >
            <span class="z-10 relative text-white -mt-3">{{ index + 1 }}</span>
            <img src="../assets/indexNumber.png" alt="" class="absolute top-0 left-0 z-0" />
          </div>
          <div class="drinkMainImg">
            <img
              :src="require('../assets/' + item.imgSrc)"
              alt=""
              class="object-contain w-full h-full"
            />
          </div>
          <div class="drinkInfo text-left p-2 sm:p-5">
            <div class="drinkName text-md sm:text-xl font-normal text-main-500">
              {{ item.name }}
            </div>
            <div class="drinkPrice text-md sm:text-xl text-sub-500 my-2">$ {{ item.price }}</div>
            <div class="flex justify-between text-sm sm:text-lg">
              <div class="rating text-sub-500"><i class="pay-start mr-2"></i>{{ item.rating }}</div>
              <div class="sold"><span class="text-sub-500 mr-2">售出 </span>{{ item.sold }}</div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <footerBar />
  </div>
</template>

<script>
  // @ is an alias to /src
  import topmenu from '@/components/topmenu'
  import footerBar from '@/components/footerBar'
  import drink from '../../static/resource/drink'

  export default {
    name: 'priceList',
    components: {
      topmenu,
      footerBar
    },
    data() {
      return {
        drink
      }
    }
  }
</script>

<style lang="scss" scoped>
  .page {
    background-repeat: no-repeat;
    background-position: 10% 10%;
    background-image: url(../assets/gradientBg.png);
  }
  .drinkMainImg {
    height: 266px;
  }
</style>
