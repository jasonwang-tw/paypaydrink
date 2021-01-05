<template>
  <div id="shopPosition" class="mt-5">
    <form action="" method="post">
      <select
        name=""
        id=""
        class="border px-4 py-2 border-support3-100 rounded-md text-mainColor-100 w-80 mr-5"
        @change="cityToArea"
      >
        <option :value="itemt.CityName" v-for="(itemt, index) in taiwan" :key="index" :data="index">
          {{ index }}{{ itemt.CityName }}
        </option>
      </select>
      <select
        name=""
        id=""
        class="border px-4 py-2 border-support3-100 rounded-md text-mainColor-100 w-80"
      >
        <option v-for="(items, index) of taiwan[0].AreaList" :key="index">
          {{ items.AreaName }}
        </option>
      </select>
    </form>
    <ul class="shopResult mx-auto my-10 max-w-4xl">
      <li
        v-for="(shop, index) in shopList"
        :key="index"
        class="flex items-center justify-between border-b border-support3-100 mb-5"
      >
        <div class="shopInfo text-left text-mainColor-100">
          <div class="shopName text-2xl font-bold">
            {{ shop.name }}
          </div>
          <ul class="flex mt-2 pb-5">
            <li>
              <span class="pay-pin"></span>
              {{ shop.postition }}
            </li>
            <li>
              <span class="pay-tel"></span>
              {{ shop.tel }}
            </li>
            <li>
              <span class="pay-clock"></span>
              {{ shop.openTime }}
            </li>
          </ul>
        </div>
        <div class="shopLink">
          <a
            :href="shop.mapLink"
            target="_blank"
            rel="noopener noreferrer"
            class="hover:text-mainColor-100 hover:border-mainColor-100 duration-200 text-support1-100 border py-2 px-4 border-support1-100 rounded-md"
            >查看位置</a
          >
        </div>
      </li>
    </ul>
    <!-- <select name="" id="" class="border px-4 py-2 border-support3-100 rounded-md text-mainColor-100">
      <option v-for="(items, index) of info.data.retVal" :key="index">{{items.sna}}</option>
    </select> -->
  </div>
</template>

<script>
  import taiwan from '../../static/resource/CityCountyData'

  export default {
    name: 'shopPosition',
    data() {
      return {
        taiwan,
        // info: null,
        shopList: [
          {
            name: '配配飲 一號店',
            postition: '台北市大安區仁愛路四段345巷6弄78號',
            tel: '02-2456-7891',
            openTime: '24H 全年無休',
            mapLink: 'http://google.com.tw'
          },
          {
            name: '配配飲 一號店',
            postition: '台北市大安區仁愛路四段345巷6弄78號',
            tel: '02-2456-7891',
            openTime: '24H 全年無休',
            mapLink: 'http://google.com.tw'
          },
          {
            name: '配配飲 一號店',
            postition: '台北市大安區仁愛路四段345巷6弄78號',
            tel: '02-2456-7891',
            openTime: '24H 全年無休',
            mapLink: 'http://google.com.tw'
          }
        ]
      }
    },
    methods: {
      //方法
      cityToArea() {
        var city = event.target.data
        console.log(city)
      }
    },
    mounted: {
      //架好的
      // axios
      //   .get('https://api.kcg.gov.tw/api/service/Get/b4dd9c40-9027-4125-8666-06bef1756092')
      //   .then(response => (this.info = response.data))
      //   .catch(function(error) { // 請求失敗處理
      //         console.log(error);
      // });
    }
  }
</script>
<style lang="scss" scoped>
  .shopInfo li {
    display: flex;
    align-items: center;
    margin-right: 20px;
    span {
      color: #f39519;
      margin-right: 10px;
    }
  }
</style>
