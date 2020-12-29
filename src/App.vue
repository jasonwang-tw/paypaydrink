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
@font-face {
  font-family: 'paypaydrink';
  src:
    url('../src/assets/fonts/paypaydrink.ttf?jms6qg') format('truetype'),
    url('../src/assets/fonts/paypaydrink.woff?jms6qg') format('woff'),
    url('../src/assets/fonts/paypaydrink.svg?jms6qg#paypaydrink') format('svg');
  font-weight: normal;
  font-style: normal;
  font-display: block;
}

[class^="pay-"], [class*=" pay-"] {
  /* use !important to prevent issues with browser extensions that change fonts */
  font-family: 'paypaydrink' !important;
  speak: never;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;

  /* Better Font Rendering =========== */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.pay-mail:before {
  content: "\e90a";
}
.pay-logout:before {
  content: "\e90b";
}
.pay-keyboard_arrow_up:before {
  content: "\e90c";
}
.pay-keyboard_arrow_right:before {
  content: "\e90d";
}
.pay-keyboard_arrow_left:before {
  content: "\e90e";
}
.pay-keyboard_arrow_down:before {
  content: "\e90f";
}
.pay-exit:before {
  content: "\e910";
}
.pay-signout:before {
  content: "\e910";
}
.pay-logout1:before {
  content: "\e910";
}
.pay-quit:before {
  content: "\e910";
}
.pay-close:before {
  content: "\e910";
}
.pay-user:before {
  content: "\e911";
}
.pay-profile:before {
  content: "\e911";
}
.pay-avatar:before {
  content: "\e911";
}
.pay-person:before {
  content: "\e911";
}
.pay-member:before {
  content: "\e911";
}
.pay-close-outline:before {
  content: "\e912";
}
.pay-close1:before {
  content: "\e913";
}
.pay-menu:before {
  content: "\e914";
}
.pay-love:before {
  content: "\e900";
}
.pay-click:before {
  content: "\e901";
}
.pay-drink:before {
  content: "\e902";
}
.pay-users:before {
  content: "\e903";
}
.pay-member1:before {
  content: "\e904";
}
.pay-shop:before {
  content: "\e905";
}
.pay-start:before {
  content: "\e906";
}
.pay-fb:before {
  content: "\e907";
}
.pay-ig:before {
  content: "\e908";
}
.pay-yt:before {
  content: "\e909";
}

</style>
