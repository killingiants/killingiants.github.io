<template>
	<section id="project">
		<p v-html="content"></p>
	</section>
</template>

<script lang="ts">
	import { defineComponent, onMounted, ref, watch } from 'vue'
	//@ts-ignore
	import {marked} from 'marked'

	export default defineComponent({
		setup() {
			const rawContent = ref<String | null>(null);
			const content = ref<String | null>(null);

			onMounted(() => {
				import('/@/md/studyCase1.md?raw')
					.then((content) => rawContent.value = content.default)
					.catch((err) => console.log(err));
			})

			watch(rawContent, (val) => {
				content.value = marked.parse(val)
			})

			return {
				content
			}
		},
	})
</script>
