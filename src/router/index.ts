import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import HeroComponent from './../sections/hero.vue';
import AboutComponent from './../sections/about.vue';
import ServicesComponent from './../sections/services.vue';
import ContactComponent from './../sections/contact.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HeroComponent,
  },
  {
    path: '/about',
    name: 'about',
    component: AboutComponent,
  },
  {
    path: '/services',
    name: 'services',
    component: ServicesComponent,
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactComponent,
  }
];

const router = createRouter({
  routes,
  history: createWebHashHistory(),
});

export default router;
