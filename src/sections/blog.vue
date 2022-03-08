<template>
	<section id="blog" class="raw">
		<div class="articles-grid grid h-full w-full">
			<div v-for="(item, index) in 3" :key="index" :class="['grid-col--'+ (index + 1), 'grid-col']"></div>
			<div class="article grid-item" v-for="(item, index) in 10" :key="index" @click="router.push({name: 'blogArticle'})">
				<div class="a-image" v-if="index === 1 || index === 5 || index === 7">
					<img src="https://images.pexels.com/photos/6018498/pexels-photo-6018498.jpeg?cs=srgb&dl=pexels-avonne-stalling-6018498.jpg&fm=jpg" alt="">
				</div>
				<h1 class="a-title">Microsoft to buy Activision Blizzard for $68.7 billion</h1>
				<p class="a-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
				<div class="a-infos flex items-center">
					<div class="avatar">
						<img src="https://images.pexels.com/photos/8505208/pexels-photo-8505208.jpeg?cs=srgb&dl=pexels-da-8505208.jpg&fm=jpg" alt="">
					</div>
					<div>
						<p class="text--primary">John legend</p>
						<div class="flex items-center">
							<span>Software enginner</span>
							<div class="sep"></div>
							<span>15 december 2021</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script lang="ts">
	import { defineComponent, onBeforeMount, onMounted } from 'vue'
	//@ts-ignore
	import $ from 'jquery'
	//@ts-ignore
	// import Masonry from 'masonry-layout/masonry'
	import Colcade from 'colcade/colcade'
	import { useRouter } from 'vue-router';

	export default defineComponent({
		setup() {
			const router = useRouter();

			onMounted(() => {
				var colc = new Colcade( '.articles-grid', {
					columns: '.grid-col',
					items: '.grid-item'
				});

				$('#blog').scroll(function () {
					if($('#blog').scrollTop() >= 65) $('#AppNavbar').addClass('onTop')
					else $('#AppNavbar').removeClass('onTop')
				})
			})

			return { router }
		},
	})
</script>