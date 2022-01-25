import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import HeroComponent from './../sections/hero.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: HeroComponent,
  }
];

const router = createRouter({
  routes,
  history: createWebHashHistory(),
});

export default router;
