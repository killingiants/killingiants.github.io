<template>
	<div id="Mobile" class="hidden">
		<Hero></Hero>
		<About></About>
		<Services></Services>
		<Contact></Contact>
	</div>
</template>

<script lang="ts">
	import { defineComponent } from 'vue'
	import Hero from './mobileSections/hero.vue'
	import About from './mobileSections/about.vue'
	import Contact from './mobileSections/contact.vue'
	import Services from './mobileSections/services.vue'

	export default defineComponent({
		components: {
			Hero,
			About,
			Contact,
			Services,
		},
		setup() {
			
		},
	})
</script>
