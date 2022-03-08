<template>
  <section id="hero">
    <div class="flex flex-col h-full section_content">
      <div class="texts my-auto">
        <!-- <div class="sm">
          <p>
            {{t('sections.hero.presentation_texts.prefix')}} {{typingOptions.typeValue.length == 0 ? 'an' : 'a'}}
            <span class="typed-text">{{ typingOptions.typeValue }}</span>
            <span class="cursor" :class="{'typing': typingOptions.typeStatus}">&nbsp;</span>
            {{t('sections.hero.presentation_texts.suffix')}}
          </p>
        </div> -->
        <h1 class="title inline-block">{{t('sections.hero.title')}}</h1> 
        <p class="desc">{{t('sections.hero.desc')}}</p>
        <td-button class="main-button" :to="{name: 'portfolio'}">
          <div class="circle__">
            <ArrowRight2Icon></ArrowRight2Icon>
          </div>
          <span>{{t('sections.hero.main_button')}}</span>
        </td-button>
      </div>
      <div class="socials flex items-center">
        <div class="brand_icon"><FacebookIcon></FacebookIcon></div>
        <div class="brand_icon"><InstagramIcon></InstagramIcon></div>
        <div class="brand_icon"><WhatsappIcon></WhatsappIcon></div>
        <div class="brand_icon"><TelegramIcon></TelegramIcon></div>
      </div>
      <!-- <div class="brands">
        <div class="brand"><img src="/brands/teremba.png" alt=""></div>
        <div class="brand"><img src="/brands/orix.png" alt=""></div>
      </div> -->
    </div>
    <div class="thumb flex-1 relative h-full">
      <img src="/images/hero2.png">
    </div>
  </section>
</template>

<script lang="ts">
  import { defineComponent, onMounted, ref } from 'vue'
  import gsap from 'gsap'
  import { useI18n } from 'vue-i18n'

  export default defineComponent({
    setup() {
      const { t } = useI18n()
      /* const herotexts = [t('sections.hero.presentation_texts.1'), t('sections.hero.presentation_texts.2'), t('sections.hero.presentation_texts.3'),]
      const typingOptions = ref({
        typeValue: '',
        typeStatus: false,
        typingSpeed: 60,
        erasingSpeed: 40,
        newTextDelay: 2000,
        typeArrayIndex: 0,
        charIndex: 0
      })

      
      function typeText() {
        if(typingOptions.value.charIndex < herotexts[typingOptions.value.typeArrayIndex].length) {
          if(!typingOptions.value.typeStatus)
            typingOptions.value.typeStatus = true;

          typingOptions.value.typeValue += herotexts[typingOptions.value.typeArrayIndex].charAt(typingOptions.value.charIndex);
          typingOptions.value.charIndex += 1;

          setTimeout(typeText, typingOptions.value.typingSpeed);
        }
        else {
          typingOptions.value.typeStatus = false;
          setTimeout(eraseText, typingOptions.value.newTextDelay);
        }
      }
      function eraseText() {
        if(typingOptions.value.charIndex > 0) {
          if(!typingOptions.value.typeStatus)
            typingOptions.value.typeStatus = true;

          typingOptions.value.typeValue = herotexts[typingOptions.value.typeArrayIndex].substring(0, typingOptions.value.charIndex - 1);
          typingOptions.value.charIndex -= 1;
          setTimeout(eraseText, typingOptions.value.erasingSpeed);
        }
        else {
          typingOptions.value.typeStatus = false;
          typingOptions.value.typeArrayIndex += 1;
          if(typingOptions.value.typeArrayIndex >= herotexts.length)
            typingOptions.value.typeArrayIndex = 0;

          setTimeout(typeText, typingOptions.value.typingSpeed + 1000);
        }
      } */


      function startEnterAnimation() {
        const thumb = '.thumb';
        const sm = '.sm';
        const main_button = '.main-button';
        // const brand = '.brands .brand';

        const tl = gsap.timeline();        

        const options = {
          opacity: 0,
          autoAlpha: 0,
        }

        tl.from(thumb, {
          duration: .85,
          y: 300,
          ...options,
          ease: "power4.out",
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
        })/* .from(brand, {
          duration: .35,
          y: 100,
          stagger: {
            each: .85,
            amount: .5
          },
          ease: "elastic.out(1, 1)",
          ...options
        }) */
      }

      onMounted(() => {
        // setTimeout(typeText, typingOptions.value.newTextDelay + 500)
        startEnterAnimation()
      });

      return {
        t,
        // typingOptions
      }
    },
  })
</script>
