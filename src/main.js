import Vue from 'vue';
import VueCarousel from 'vue-carousel';
import VueMaterial from 'vue-material';
import VueAnalytics from 'vue-analytics';
// import 'vue-material/dist/vue-material.min.css';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';


Vue.config.productionTip = false;
Vue.use(VueCarousel);
Vue.use(VueMaterial);
Vue.use(VueAnalytics, {
  id: 'UA-31682808-2',
  router,
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
