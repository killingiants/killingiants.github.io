import { createRouter, createWebHashHistory } from 'vue-router';


const routes = [
  {
    path: '/',
    name: 'hero',
    component: () => import('/@/sections/hero.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('/@/sections/about.vue')
  },
  {
    path: '/services',
    name: 'services',
    component: () => import('/@/sections/services.vue')
  },
  {
    path: '/team',
    name: 'team',
    component: () => import('/@/sections/team.vue')
  },
  {
    path: '/team_all',
    name: 'team_all',
    component: () => import('/@/sections/team_all.vue')
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: () => import('/@/sections/portfolio.vue')
  },
  {
    path: '/project',
    name: 'project',
    component: () => import('/@/sections/project.vue')
  },
  {
    path: '/blog',
    name: 'blog',
    component: () => import('/@/sections/blog.vue')
  },
  {
    path: '/blogArticle',
    name: 'blogArticle',
    component: () => import('/@/sections/blogArticle.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('/@/sections/contact.vue')
  }
];

const router = createRouter({
  routes,
  history: createWebHashHistory(),
});

export default router;
