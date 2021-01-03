<template>
  <div class="home">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <topmenu/>
    <div class="topBanner relative">
      <img src="../assets/drinkCup.png" alt="" srcset="" class="absolute bottom-0">
      <img src="../assets/topBannerBg.jpg" alt="" srcset="">
    </div>
    <div class="saleActive container m-auto text-center relative z-0">
      <h2 class="text-4xl font-bold text-white">優惠活動</h2>
      <p class="mt-3 text-subColor-100">快揪好友，省錢趁現在！</p>
      <div class="flex justify-center mt-10">
        <carousel/>
      </div>
    </div>
    <div class="drinkMagic text-center mt-48">
      <h2 class="text-4xl font-bold">配配飲的魔法</h2>
      <p class="mt-3">我們堅持經典也擁抱創新，只是希望能看到您滿足的笑容 :D</p>
      <ul class="grid gap-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 p-20">
        <li class="flex bg-support2-100 p-10 rounded-xl" v-for="item in magic" :key="item">
          <div class="icon mr-5 text-subColor-100">
            <span :class="item.icon" class="text-5xl"></span>
          </div>
          <div class="infotext text-left">
            <h3 class="text-xl font-bold text-mainColor-100">{{item.title}}</h3>
            <p class="mt-2 text-gray-600">{{item.text}}</p>
          </div>
        </li>
      </ul>
    </div>
    <div class="drinkMagic text-center mt-48">
      <h2 class="text-4xl font-bold">立即體驗</h2>
      <p class="mt-3">搜尋離你最近的PayPayDrink服務據點，開始不一樣的生活</p>
      <div id="shopPosition">
        <select name="" id="" class="border px-4 py-2 border-support3-100 rounded-md text-mainColor-100">
          <option :value="item.name" v-for="item in taiwan" :key="item">{{item.name}}</option>
        </select>
        <select name="" id="" class="border px-4 py-2 border-support3-100 rounded-md text-mainColor-100">
          <option value="area1">中正區</option>
          <option value="area2">大同區</option>
          <option value="area3">中山區</option>
          <option value="area4">萬華區</option>
          <option value="area5">信義區</option>
          <option value="area6">松山區</option>
          <option value="area7">大安區</option>
          <option value="area8">南港區</option>
          <option value="area9">北投區</option>
          <option value="area10">內湖區</option>
          <option value="area11">士林區</option>
          <option value="area12">文山區</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';
import topmenu from '@/components/topmenu.vue';
import slide from '@/components/slide.vue';
import carousel from '@/components/carousel.vue';
import taiwan from '../../static/resource/taiwan_districts.json';
// const config = JSON.parse(taiwan);

export default {
  name: 'Home',
  components: {
    // HelloWorld,
    topmenu,
    slide,
    carousel,
  },
  data() {
    return {
      taiwan ,
      magic: [
        {
          icon: 'pay-mobile',
          title:'一機在手，威力無窮',
          text: '透過品牌專屬APP，消費者可以隨時下單，隨處購買，今天的我無極限',
        },
        {
          icon: 'pay-Cheers',
          title:'歡迎光臨，您想喝什麼呢?',
          text: '透過品牌專屬APP，消費者可以隨時下單，隨處購買，今天的我無極限',
        },
        {
          icon: 'pay-clock',
          title:'可以半糖少冰嗎?',
          text: '透過品牌專屬APP，消費者可以隨時下單，隨處購買，今天的我無極限',
        },
        {
          icon: 'pay-mobile',
          title:'還等到天荒地老，海枯石爛嗎?',
          text: '透過品牌專屬APP，消費者可以隨時下單，隨處購買，今天的我無極限',
        },
        {
          icon: 'pay-mobile',
          title:'多元支付，比便利商店還方便！',
          text: '透過品牌專屬APP，消費者可以隨時下單，隨處購買，今天的我無極限',
        },
        {
          icon: 'pay-qrcode',
          title:'自己喝還是請客，掃碼一次搞定',
          text: '透過品牌專屬APP，消費者可以隨時下單，隨處購買，今天的我無極限',
        },
        {
          icon: 'pay-happy',
          title:'進入口中的瞬間，給您滿足的笑容',
          text: '透過品牌專屬APP，消費者可以隨時下單，隨處購買，今天的我無極限',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.saleActive{
  margin-top: -310px;
}

</style>
