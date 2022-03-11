<template>
	<section id="about">
    <div class="thumb relative flex flex-1 items-center justify-start h-full">
      <img src="/images/about.png">
    </div>
		<div class="section_content texts text-left flex flex-col items-start ml-auto">
			<!-- <div class="sm reversed">
				<p>{{t('sections.about.sm')}}</p>
			</div> -->
      <div class="sm">
        <p>
          {{t('sections.hero.presentation_texts.prefix')}} {{typingOptions.typeValue.length == 0 ? t('sections.hero.presentation_texts.det1') : t('sections.hero.presentation_texts.det2')}}
          {{  locale == 'fr' ? t('sections.hero.presentation_texts.suffix') : ''}}
          <span class="typed-text">{{ typingOptions.typeValue }}</span>
          <span class="cursor" :class="{'typing': typingOptions.typeStatus}">&nbsp;</span>
          {{  locale == 'en' ? t('sections.hero.presentation_texts.suffix') : ''}}
        </p>
      </div>
			<h1 class="title">{{t('sections.about.title')}}</h1> 
			<p class="desc big">{{t('sections.about.desc1')}}</p>
			<p class="desc big">{{t('sections.about.desc2')}}</p>
			<div class="flex justify-start">
				<td-button class="main-button not-special black" :to="{name: 'contact'}">{{t('sections.about.main_button')}}</td-button>
			</div>
		</div>
	</section>
</template>

<script lang="ts">
  import { defineComponent, onMounted, ref } from 'vue'
  import gsap from 'gsap'
  import { useI18n } from 'vue-i18n'

  export default defineComponent({
    setup() {
      const { t, locale } = useI18n()
      const herotexts = [t('sections.hero.presentation_texts.1'), t('sections.hero.presentation_texts.2'), t('sections.hero.presentation_texts.3'),]
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
      }

      function startEnterAnimation() {
        const thumb = '.thumb';
        const sm = '.sm';
        const main_button = '.main-button';

        const tl = gsap.timeline();       

        const options = {
          opacity: 0,
          autoAlpha: 0,
        }

        tl.from(thumb, {
          duration: .85,
          x: -300,
          opacity: 0,
          ease: "power4.out",
          stagger: {
            amount: 1
          }
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
        setTimeout(typeText, typingOptions.value.newTextDelay + 500)
        startEnterAnimation()
      });

      return { t, locale, typingOptions }
    },
  })
</script>