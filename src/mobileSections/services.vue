<template>
  <div id="services" class="section">
    <div class="texts text-center flex flex-col items-center ml-auto">
      <div class="sm">
        <p>{{t('sections.services.sm')}}</p>
      </div>
      <h1 class="title">{{t('sections.services.title')}}</h1>
    </div>
    <swiper
      class="services_slides"
      :slidesPerView="1"
      :spaceBetween="10"
      :freeMode="true"
      :modules="modules"
      :pagination="{
        clickable: true,
      }"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide v-for="(slide, index) in slides" :key="index">
        <div class="service flex flex-col items-center">
          <div class="img">
            <img :src="slide" alt="">
          </div>
          <p class="s-name">{{ t('sections.services.services.'+ (index + 1) +'.name') }}</p>
          <p class="desc big max-w-[95%] my-2">{{ t('sections.services.services.'+ (index + 1) +'.desc') }}</p>
          <p class="desc desc2 big max-w-[95%]">{{ t('sections.services.services.'+ (index + 1) +'.desc2') }}</p>
        </div>
      </swiper-slide>
    </swiper>
    <div class="">
      <div class="flex justify-start">
        <td-button class="main-button not-special black" :to="{name: 'contact'}">{{t('sections.about.main_button')}}</td-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, onMounted, ref } from 'vue';
  import { useI18n } from 'vue-i18n';
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import "swiper/css/free-mode";
  import "swiper/css/pagination";
  import { FreeMode, Pagination } from "swiper";


  export default defineComponent({
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      const { t, locale } = useI18n()
      const slides = ref<Array<string>>([
        '/images/UX.jpg',
        '/images/ui.jpg',
        '/images/code.jpg'
      ])

      const onSwiper = (swiper: any) => {
        console.log(swiper);
      };
      const onSlideChange = () => {
        console.log('slide change');
      };

      return { t, locale, slides, onSwiper, onSlideChange, modules: [FreeMode, Pagination], }
    },
  })
</script>