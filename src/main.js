import Vue from 'vue';
import VueCarousel from 'vue-carousel';
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.min.css';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';


Vue.config.productionTip = false;
Vue.config.baseUrl = process.env.NODE_ENV === 'production'
  ? '/hackathon-WoopSicredi-justo-chatbot/'
  : '/';
Vue.use(VueCarousel);
Vue.use(VueMaterial);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
