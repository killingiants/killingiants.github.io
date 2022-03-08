<template>
  <div id="bg">
    <img src="./assets/vectors/bg.svg" alt="">
  </div>
  <div id="AppNavbar">
    <router-link :to="{name: 'hero'}" class="brand flex items-center">
      <div class="logo"></div>
      <p class="text capitalize">.Killing giants</p>
    </router-link>
    <navbar :links="pages" indicator-position="top"></navbar>
    <div class="flex items-center">
      <td-button class="theme" @click="toggleDark">
        <MoonIcon v-if="!isDark" />
        <SunIcon v-else />
      </td-button>
      <div class="translate flex items-center">
        <!-- <TranslateIcon></TranslateIcon> -->
        <span>{{ t('langs.english') }}</span>
        <country-flag country='gb' size='normal' class="!m-0"/>
      </div>
    </div>
  </div>
  <div class="app_content">
    <router-view v-slot="{ Component }">
      <transition v-on:enter="enter"  v-on:leave="leave" v-bind:css="false" appear>
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue'
  import gsap from 'gsap'
  import { useDark, useToggle } from '@vueuse/core'
  import { useI18n } from 'vue-i18n'
  import CountryFlag from 'vue-country-flag-next'


  export default defineComponent({
    components: {
      CountryFlag
    },

    setup() {
      const { t } = useI18n()
      const isDark = useDark();
      const toggleDark = useToggle(isDark);

      const pages = ref([
        {text: t('nav_links.about'), name: 'about'},
        {text: t('nav_links.services'), name: 'services'},
        {text: t('nav_links.portfolio'), name: 'portfolio'},
        // {text: t('nav_links.actuality'), name: 'blog'},
        {text: t('nav_links.team'), name: 'team'},
        {text: t('nav_links.contact'), name: 'contact'},
      ]);


      const enter = (el: any, done: any) => {
        const tl = gsap.timeline({
          onComplete: done
        })
        
        tl.set(el, {
          x: window.innerWidth * 1.5,
          scale: 0.8,
          transformOrigin: '50% 50%'
        })

        tl.from(el, {
          duration: 0.5,
          x: 0,
          ease: 'Power4.easeOut'
        });
        tl.to(el, {
          duration: 1,
          scale: 1,
          ease: 'Power4.easeOut'
        });
      }

      const leave = (el: any, done: any) => {
        // done()
        gsap.to(el, {
          duration: .5,
          x: window.innerHeight * -1.5,
          opacity: 0,
          ease: 'Power4.easeOut',
          onComplete: done
        });
      }

      return {
        isDark,
        pages,

        t,
        toggleDark,
        enter,
        leave,
      }
    },
  })
</script>
