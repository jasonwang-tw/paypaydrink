<template>
  <div id="shopPosition">
    <select name="" id="" class="border px-4 py-2 border-support3-100 rounded-md text-mainColor-100" @change="cityToArea">
      <option :value="itemt.CityName" v-for="(itemt, index) in taiwan" :key="index" :data="index">{{index}}{{itemt.CityName}}</option>
    </select>
    <select name="" id="" class="border px-4 py-2 border-support3-100 rounded-md text-mainColor-100">
      <option v-for="(items, index) of taiwan[0].AreaList" :key="index">{{items.AreaName}}</option>
    </select>
    <!-- <select name="" id="" class="border px-4 py-2 border-support3-100 rounded-md text-mainColor-100">
      <option v-for="(items, index) of info.data.retVal" :key="index">{{items.sna}}</option>
    </select> -->
  </div>
</template>

<script>
import taiwan from '../../static/resource/CityCountyData.json';

export default {
  name: 'shopPosition',
  data() {
    return {
      taiwan ,
      // info: null,
    };
  },
  methods :{ //方法
    cityToArea() {
      var city = event.target.data;
      console.log(city);
    },
  },
  mounted: { //架好的
    // axios
    //   .get('https://api.kcg.gov.tw/api/service/Get/b4dd9c40-9027-4125-8666-06bef1756092')
    //   .then(response => (this.info = response.data))
    //   .catch(function(error) { // 請求失敗處理
    //         console.log(error);
    // });
  },
};
</script>
<style lang="scss" scoped>

</style>
