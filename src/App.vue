<template>
  <div class="bg">
    <img src="/vectors/bg_strip.svg" alt="">
  </div>
  <div id="navbar" class="flex items-center justify-between">
    <div class="brand flex items-center">
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
  import { ref } from 'vue';

  const links: Array<String> = [
    'About',
    'services',
    'portfolio',
    'Actuality',
    'Our team',
    'Contact',
  ];

  const pageIndex = ref<Number>(0);
</script>
