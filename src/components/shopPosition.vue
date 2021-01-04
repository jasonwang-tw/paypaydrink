<template>
<div id="shopPosition">
  <select name="" id="" class="border px-4 py-2 border-support3-100 rounded-md text-mainColor-100" @change="cityToArea">
    <option :value="itemt.CityName" v-for="itemt in taiwan" :key="itemt">{{itemt.CityName}}</option>
  </select>
  <select name="" id="" class="border px-4 py-2 border-support3-100 rounded-md text-mainColor-100">
    <option v-for="items in taiwan.AreaList">{{items.AreaName}}</option>
  </select>
</div>
</template>

<script>
import taiwan from '../../static/resource/CityCountyData.json';

export default {
  name: 'shopPosition',
  data() {
    return {
      taiwan ,
    };
  },
  mounted() {
    console.log(this.taiwan);
  },
};
</script>
<style lang="scss" scoped>

</style>
