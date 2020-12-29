import Vue from 'vue';
import VueSplide from '@splidejs/vue-splide';
import App from './App.vue';
import router from './router';
import './assets/tailwind.css';

Vue.config.productionTip = false;

new Vue({
  VueSplide,
  router,
  render: (h) => h(App),
}).$mount('#app');
