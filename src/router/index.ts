import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import HeroComponent from './../sections/hero.vue';
import AboutComponent from './../sections/about.vue';
import ServicesComponent from './../sections/services.vue';
import ContactComponent from './../sections/contact.vue';
import TeamsComponent from './../sections/teams.vue';
import BlogsComponent from './../sections/blogs/blogs.vue'
import ArticleComponent from './../sections/article/article.vue'

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
    path: '/teams',
    name: 'teams',
    component: TeamsComponent,
  },
  {
    path: '/blogs',
    name: 'blogs',
    component: BlogsComponent
  },
  {
    path: '/blogs/single-article',
    name: 'single-article',
    component: ArticleComponent,
  }
  ,
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
