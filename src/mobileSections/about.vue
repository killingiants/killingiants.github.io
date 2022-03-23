<template>
	<div id="About" class="section">
		<div class="img">
			<img src="/images/about.png" alt="about img.">
		</div>
		<div class="texts">
			<div class="sm">
				<p>{{t('sections.about.sm')}}</p>
			</div>
			<h1 class="title">{{t('sections.about.title')}}</h1> 
			<p class="desc big">{{t('sections.about.desc1')}}</p>
			<p class="desc big">{{t('sections.about.desc2')}}</p>
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