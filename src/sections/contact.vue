<template>
  <section id="contact">
    <div class="flex flex-col h-full section_content">
      <div class="texts my-auto">
        <div class="sm">
          <p>{{t('sections.contact.sm')}}</p>
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
    <form ref="form" class="flex flex-col h-full" @submit.prevent="sendMail">
      <div class="inputs my-auto">
        <div class="input-row">
          <div class="input">
            <label for="c__input_123">First name</label>
            <input id="c__input_123" type="text" v-model="first_name">
          </div>
          <div class="input">
            <label for="c__input_124">Last name</label>
            <input id="c__input_124" type="text" v-model="last_name">
          </div>
        </div>
        <div class="input-row">
          <div class="input">
            <label for="c__input_125">Email address</label>
            <input id="c__input_125" type="text" v-model="email">
          </div>
        </div>
        <div class="input-row">
          <div class="input">
            <label for="c__input_126">Object</label>
            <input id="c__input_126" type="text" v-model="object">
          </div>
        </div>
        <div class="input-row">
          <div class="input">
            <label for="c__input_127">Message</label>
            <textarea id="c__input_127" type="text" v-model="message" />
          </div>
        </div>
      </div>
      <div class="flex justify-end texts mb-[5%] ml-auto">
        <td-button type="submit" :loading="loading" class="main-button not-special black">
          Send.
        </td-button>
      </div>
    </form>
  </section>
</template>
<script lang="ts">
  import { defineComponent, onMounted, ref } from 'vue'
  import gsap from 'gsap'
  import { useI18n } from 'vue-i18n'
  import emailjs from '@emailjs/browser';

  export default defineComponent({
    setup() {
      const { t } = useI18n()
      const first_name = ref('');
      const last_name = ref('');
      const email = ref('');
      const object = ref('');
      const message = ref('');
      const loading = ref(false);

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

      function sendMail() {
        loading.value = true;

        const data = {
          user: `${first_name.value} ${last_name.value}`,
          reply_to: email.value,
          object: object.value,
          message: message.value,
        }
        
        emailjs.send("service_7kl1mxt","template_qksi9pe" , data, "-bwy3OBmO4kVWo8DF")
        .then(function(response: any) {
          console.log('SUCCESS!', response.status, response.text);

          first_name.value = '';
          last_name.value = '';
          email.value = '';
          object.value = '';
          message.value = '';

          alert('Your message has been sent.');
        }, function(error: any) {
          console.log('FAILED...', error);
          alert('Your message has not been sent. please try again !!');
        });

        loading.value = false;
      }

      onMounted(() => {
        startEnterAnimation()
      });

			return { t, sendMail, first_name, last_name, email, object, message, loading }
    },
  })
</script>