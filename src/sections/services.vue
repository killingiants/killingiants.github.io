<template>
  <section id="services">
    <div class="thumb flex-1 flex items-center h-full">
      <div class="cards">
        <div class="first card">
          <img :src="currentSlide.img" :alt="currentSlide.name">
        </div>
        <div class="second card">
          <img :src="nextSlide.img" alt="">
        </div>
        <h1 class="text">{{ currentSlide.name }}</h1>
        <td-button class="switch-button" :disabled="!canSlide" @click="next"><ArrowRight2Icon></ArrowRight2Icon></td-button>
      </div>
    </div>
    <div class="section_content texts text-right flex flex-col items-end ml-auto">
      <div class="sm reversed">
        <p>{{t('sections.services.sm')}}</p>
      </div>
      <component :is="'h1'" :key="currentSlideIndex">
        <h1 class="title">{{ currentSlide.title }}</h1> 
      </component>
      <component :is="'p'" :key="currentSlideIndex">
        <p class="desc">{{ currentSlide.desc }}</p>
      </component>
      <div class="flex justify-end">
        <td-button class="main-button not-special black" :to="{name: 'contact'}">{{t('sections.services.main_button')}}</td-button>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
  import { computed, defineComponent, onMounted, ref, watch } from 'vue'
  import gsap from 'gsap'
  import { useI18n } from 'vue-i18n'

  interface SlideModel {
    img: string
    name: string,
    title: string,
    desc: string
  }

  export default defineComponent({
    setup() {
      const { t } = useI18n()
      const canSlide = ref(false)
      const slides = ref<Array<SlideModel>>([
        {
          img: '/images/ux.jpg',
          name: t('sections.services.services.1.name'),
          title: t('sections.services.services.1.title'),
          desc: t('sections.services.services.1.desc')
        },
        {
          img: '/images/ui.jpg',
          name: t('sections.services.services.2.name'),
          title: t('sections.services.services.2.title'),
          desc: t('sections.services.services.2.desc')
        },
        {
          img: '/images/code.jpg',
          name: t('sections.services.services.3.name'),
          title: t('sections.services.services.3.title'),
          desc: t('sections.services.services.3.desc')
        }
      ])
      const currentSlideIndex = ref<number>(0)

      const currentSlide = computed(() => slides.value[currentSlideIndex.value])
      const nextSlide = computed(() => {
        var index = 0

        if(currentSlideIndex.value !== slides.value.length - 1) index = currentSlideIndex.value + 1;

        return slides.value[index]
      })

      function next() {
        if(currentSlideIndex.value !== slides.value.length - 1) currentSlideIndex.value++
        else currentSlideIndex.value = 0
      }

      function onTransitionComplete() {
        canSlide.value = true
      }

      function startEnterAnimation() {
        canSlide.value = false

        const tl = gsap.timeline({
          onComplete: onTransitionComplete
        });       

        const options = {
          opacity: 0,
          autoAlpha: 0,
        }

        const cardText = ".cards .text"
        const firstCard = ".cards .card.first"
        const secondCard = ".cards .card.second"
        const sm = '.sm';
        const main_button = '.main-button';

        tl.from(firstCard, {
          duration: .5,
          y: 100,
          opacity: 0,
          ease: "elastic.out(1, 1)",
        }).from(cardText, {
          duration: .35,
          y: 100,
          skewX: 20,
          opacity: 0,
          ease: "elastic.out(1, 1)"
        }).from(secondCard, {
          duration: .35,
          right: 0,
          ease: "elastic.out(1, 1)"
        }).from(sm, {
          duration: .5,
          y: 100,
          ease: 'Power4.out',
          ...options,
          stagger: {
            amount: 1
          },
        }).from(main_button, {
          duration: .15,
          y: 0,
          x: 200,
          stagger: {
            amount: .25
          },
          ease: "elastic.out(1, 1)",
          ...options
        })
      }

      onMounted(() => {
        startEnterAnimation()
      });

      watch(currentSlideIndex, () => {
        startEnterAnimation()
      })

      return {
        canSlide,
        currentSlideIndex,
        currentSlide,
        nextSlide,

        t,
        next
      }
    },
  })
</script>