import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import V01 from './views/v01.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'v0.1',
      component: V01,
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
    },
    {
      path: '/v01',
      name: 'v0.1',
      component: V01,
    },
    {
      path: '/justo',
      name: 'justo',
      component: () => import('./views/Justo.vue'),
    },
  ],
});
