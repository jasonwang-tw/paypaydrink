<template>
  <div id="nav">
      <router-link to="/content">content</router-link> |
      <router-link to="/dashboard">dashboardmenu</router-link>
  </div>
</template>

<script>
export default {
  name: 'dashboardmenu',
  // props: {
  //   msg: String,
  // },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
