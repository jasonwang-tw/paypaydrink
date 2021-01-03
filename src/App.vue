<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/content">content</router-link> |
      <router-link to="/admin/admin">admin</router-link>
    </div> -->
    <router-view/>
  </div>
</template>

<style lang="scss">

// font style

@import '../src/assets/style.css';

// main style

html,body{
  font-size: 16px;
}
</style>
