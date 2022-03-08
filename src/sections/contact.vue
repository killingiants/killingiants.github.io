<template>
  <section id="contact">
    <div class="flex flex-col h-full section_content">
      <div class="texts my-auto">
        <div class="sm">
          <p>Get in touch with</p>
        </div>
        <h1 class="title">{{t('sections.contact.title')}}</h1> 
        <p class="desc big">{{t('sections.contact.desc')}}</p>
        <div class="sep"></div>
        <div class="brands">
          <div class="brand"><img src="/brands/teremba.png" alt=""></div>
          <div class="brand"><img src="/brands/orix.png" alt=""></div>
        </div>
      </div>
      <div class="socials flex items-center">
        <div class="brand_icon"><FacebookIcon></FacebookIcon></div>
        <div class="brand_icon"><InstagramIcon></InstagramIcon></div>
        <div class="brand_icon"><WhatsappIcon></WhatsappIcon></div>
        <div class="brand_icon"><TelegramIcon></TelegramIcon></div>
      </div>
    </div>
    <form class="flex flex-col h-full">
      <div class="inputs my-auto">
        <div class="input-row">
          <div class="input">
            <label for="c__input_123">First name</label>
            <input id="c__input_123" type="text">
          </div>
          <div class="input">
            <label for="c__input_124">Last name</label>
            <input id="c__input_124" type="text">
          </div>
        </div>
        <div class="input-row">
          <div class="input">
            <label for="c__input_125">Email address</label>
            <input id="c__input_125" type="text">
          </div>
        </div>
        <div class="input-row">
          <div class="input">
            <label for="c__input_126">Object</label>
            <input id="c__input_126" type="text">
          </div>
        </div>
        <div class="input-row">
          <div class="input">
            <label for="c__input_127">Message</label>
            <textarea id="c__input_127" type="text" />
          </div>
        </div>
      </div>
      <div class="flex justify-end texts mb-[5%] ml-auto">
        <td-button class="main-button not-special black">
          Send.
        </td-button>
      </div>
    </form>
  </section>
</template>
<script lang="ts">
  import { defineComponent, onMounted } from 'vue'
  import gsap from 'gsap'
  import { useI18n } from 'vue-i18n'

  export default defineComponent({
    setup() {
      const { t } = useI18n()

      function startEnterAnimation() {
        const sm = '.sm';
        const main_button = '.main-button';
        const brand = '.brands .brand';

        const tl = gsap.timeline();

        tl.from(sm, {
          duration: .5,
          y: 100,
          ease: 'Power4.out',
          opacity: 0,
          autoAlpha: 0,
        }).from(".inputs .input-row .input", {
          duration: .65,
          x: 300,
          opacity: 0,
          ease: "elastic.out(1, 1)",
          stagger: {
            each: .65,
            amount: 1
          },
        }).from(main_button, {
          duration: .15,
          y: 0,
          x: 200,
          ease: "elastic.out(1, 1)",
          opacity: 0,
          autoAlpha: 0,
        }).from('.sep', {
          width: 0,
          duration: .5,
          ease: 'Power4.out',
        }).from(brand, {
          duration: .35,
          y: 100,
          stagger: {
            each: .85,
            amount: .5
          },
          ease: "elastic.out(1, 1)",
          opacity: 0,
          autoAlpha: 0,
        })
      }

      onMounted(() => {
        startEnterAnimation()
      });

			return { t }
    },
  })
</script>