// 註冊全局組件
import Vue from 'vue';
import './plugins/axios'
// import VueSplide from '@splidejs/vue-splide';
import App from './App.vue';
import router from './router';
import './assets/tailwind.css';

Vue.config.productionTip = false;

new Vue({
  // VueSplide,
  router,
  render: (h) => h(App),
}).$mount('#app');
