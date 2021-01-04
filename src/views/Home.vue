<template>
  <div class="home">
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
        <shopPosition/>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import topmenu from '@/components/topmenu.vue';
import carousel from '@/components/carousel.vue';
import shopPosition from '@/components/shopPosition.vue';

export default {
  name: 'Home',
  components: {
    topmenu,
    carousel,
    shopPosition,
  },
  data() {
    return {
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
  // methods: {
  //   cityToArea(i) {
  //     console.log(this.indexOf());
  //   },
  // },
};
</script>

<style lang="scss" scoped>
.saleActive{
  margin-top: -310px;
}

</style>
