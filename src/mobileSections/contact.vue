<template>
	<div id="Contact" class="section">
		<div class="sm">
			<p>{{t('sections.contact.sm')}}</p>
		</div>
		<h1 class="title">{{t('sections.contact.title')}}</h1> 
		<p class="desc big">{{t('sections.contact.desc')}}</p>
		<div class="brands flex justify-center items-center">
			<div class="brand"><img src="/brands/teremba.png" alt=""></div>
			<div class="brand"><img src="/brands/orix.png" alt=""></div>
		</div>
		<div class="sep"></div>
    <form class="flex flex-col h-full items-center justify-center">
      <div class="inputs">
				<div class="input">
					<input id="c__input_123" type="text" placeholder="First name">
				</div>
				<div class="input">
					<input id="c__input_124" type="text" placeholder="Last name">
				</div>
				<div class="input">
					<input id="c__input_125" type="text" placeholder="Email address">
				</div>
				<div class="input">
					<input id="c__input_126" type="text" placeholder="Object">
				</div>
				<div class="input">
					<textarea id="c__input_127" type="text" placeholder="Message"></textarea>
				</div>
      </div>
			<td-button class="main-button not-special black">
				Send.
			</td-button>
    </form>
		<div class="socials flex items-center">
			<div class="brand_icon"><FacebookIcon></FacebookIcon></div>
			<div class="brand_icon"><InstagramIcon></InstagramIcon></div>
			<div class="brand_icon"><WhatsappIcon></WhatsappIcon></div>
			<div class="brand_icon"><TelegramIcon></TelegramIcon></div>
		</div>
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