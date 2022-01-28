<template>
  <div class="bg">
    <img src="/vectors/bg_strip.svg" alt="">
  </div>
  <div id="navbar" class="flex items-center justify-between">
    <div class="brand flex items-center cursor-pointer" @click="toHome">
      <div class="logo"></div>
      <p class="text">Killing giants</p>
    </div>
    <navbar v-model="pageIndex" :links="links" indicator-position="top"/>
    <td-button class="quote">Get a quote</td-button>
  </div>
  <div class="app-content flex-1">
    <router-view />
  </div>
</template>

<script lang="ts" setup>
  import { ref, watch } from 'vue';
  import { useRouter } from 'vue-router';

  const router = useRouter();

  const links: Array<String> = [
    'About',
    'services',
    'portfolio',
    'Actuality',
    'Our team',
    'Contact',
  ];

  const pageIndex = ref<Number>(-1);

  const toHome = () => {
    pageIndex.value = -1;
  }

  watch(pageIndex, (page) => {
    let pageName = '';

    switch (page) {
      case 0:
        pageName = 'about';
        break;
      case 1:
        pageName = 'services';
        break;
      case 2:
        pageName = 'portfolio';
        break;
      case links.length - 1:
        pageName = 'contact';
        break;
      default:
        pageName = 'home';
        pageIndex.value = -1;
        break;
    }

    router.push({name: pageName})
  })
</script>
