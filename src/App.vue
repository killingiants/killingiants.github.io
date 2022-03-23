<template>
  <div id="bg">
    <img src="./assets/vectors/bg.svg" alt="">
  </div>

  <div id="AppNavbar" class="onTop">
    <router-link :to="{name: 'hero'}" class="brand flex items-center">
      <div class="logo"></div>
      <p class="text capitalize">Killing giants.</p>
    </router-link>
    <navbar :links="[
        {text: t('nav_links.about'), name: 'about'},
        {text: t('nav_links.services'), name: 'services'},
        {text: t('nav_links.portfolio'), name: 'portfolio'},
        // {text: t('nav_links.actuality'), name: 'blog'},
        {text: t('nav_links.team'), name: 'team'},
        {text: t('nav_links.contact'), name: 'contact'},
      ]" indicator-position="top">
    </navbar>
    <div class="flex items-center">
      <td-button class="theme" @click="toggleDark">
        <MoonIcon v-if="!isDark" />
        <SunIcon v-else />
      </td-button>
      <div class="translate flex items-center cursor-pointer" @click="openLanguagesDialogModal = !openLanguagesDialogModal">
        <span>{{ findLanguageByLocale(locale).label }}</span>
        <country-flag :country='findLanguageByLocale(locale).country' size='normal' class="!m-0"/>
      </div>
    </div>
  </div>

  <AppMobile></AppMobile>

  <div class="app_content">
    <router-view v-slot="{ Component }">
      <transition v-on:enter="enter"  v-on:leave="leave" v-bind:css="false" appear>
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
  <td-dialog v-model="openLanguagesDialogModal" dialogClasses="languages_dialog" blur>
    <div class="translate flex items-center cursor-pointer" v-for="(item, index) in languages" :key="index" @click="switchLanguage(item)">
      <country-flag :country='item.country' size='normal'  class="!m-0" />
      <span>{{ item.label }}</span>
    </div>
  </td-dialog>
</template>

<script lang="ts">
  import { defineComponent, onMounted, ref } from 'vue'
  import gsap from 'gsap'
  import { useDark, useToggle } from '@vueuse/core'
  import { useI18n } from 'vue-i18n'
  import CountryFlag from 'vue-country-flag-next'
  import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
  import AppMobile from './AppMobile.vue'
  //@ts-ignore
  import $ from 'jquery'

  interface Language {
    country: String,
    label: String,
    locale: String
  }


  export default defineComponent({
    components: {
    CountryFlag,
    Menu,
    MenuButton,
    MenuItem,
    AppMobile
},

    setup() {
      const { t, locale } = useI18n()
      const isDark = useDark();
      const toggleDark = useToggle(isDark);

      const openLanguagesDialogModal = ref<Boolean>(false);
      const languages = ref<Array<Language>>([
        {
          country: 'gb',
          label: 'English',
          locale: 'en'
        },
        {
          country: 'fr',
          label: 'Français',
          locale: 'fr'
        }
      ])

      const switchLanguage = (l: Language) => {
        locale.value = l.locale as string;
        localStorage.setItem('locale', locale.value);
        openLanguagesDialogModal.value = false;
      }
      const findLanguageByLocale = (locale: String) => languages.value.find((l: Language) => l.locale == locale) as Language;

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

			onMounted(() => {
					console.log('hello')
					$('window').scroll(function () {
						console.log('hello')
						if($('body').scrollTop() >= 65) $('#AppNavbar').addClass('onTop')
						else $('#AppNavbar').removeClass('onTop')
					})
			})

      return {
        isDark,

        t,
        locale,
        openLanguagesDialogModal,
        languages,
        switchLanguage,
        findLanguageByLocale,

        toggleDark,
        enter,
        leave,
      }
    },
  })
</script>
