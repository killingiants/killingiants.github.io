<template>
  <div id="MobileHero" class="section">
    <Particles
      id="tsparticles"
      url="http://foo.bar/particles.json"
    />

    <div class="my-auto">
      <h1 class="title inline-block">{{t('sections.hero.title')}}</h1>
      <p class="desc">{{t('sections.hero.desc')}}</p>
      <!-- <td-button class="main-button" :to="{name: 'portfolio'}">
        <span>{{t('sections.hero.main_button')}}</span>
      </td-button> -->
    </div>
    <!-- <p>scroll down</p> -->
  </div>
</template>

<script lang="ts">
  import { defineComponent, onMounted, ref } from 'vue'
  import { useI18n } from 'vue-i18n'

  export default defineComponent({
    setup() {
      const { t, locale } = useI18n()

      return { t, locale }
    },
  })
</script>