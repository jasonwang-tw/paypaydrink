<template>
  <div id="nav">
    <ul>
      <li v-for="item in router" :key="item">
        <router-link :to="item.link">{{item.name}}</router-link> |
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'topmenu',
  data() {
    return {
      router: [
        {
          link: '/',
          name: 'Home',
        },
        {
          link: '/about',
          name: 'About',
        },
        {
          link: '/content',
          name: 'content',
        },
        {
          link: '/dashboard',
          name: 'dashboard',
        },
      ],
    };
  },
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
