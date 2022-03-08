<template>
	<section id="team">
		<div class="section_content texts flex flex-col">
			<div class="sm">
				<p>{{t('sections.team.sm')}}</p>
			</div>
			<h1 class="title">{{t('sections.team.title')}}</h1>
			<p class="desc">{{t('sections.team.desc1')}}</p>
			<p class="desc">{{t('sections.team.desc2')}}</p>
			<td-button class="main-button" :to="{name: 'team_all'}">
				<div class="circle__">
					<ArrowRight2Icon></ArrowRight2Icon>
				</div>
				<span>{{t('sections.team.main_button')}}</span>
			</td-button>
		</div>
		<div class="mosaic flex-1 flex h-full items-center justify-end">
			<div class="member flex-1">
				<div class="mosaic"></div>
				<div class="image"><img src="https://images.pexels.com/photos/718978/pexels-photo-718978.jpeg?cs=srgb&dl=pexels-godisable-jacob-718978.jpg&fm=jpg" alt=""></div>
			</div>
			<div class="member flex-1">
				<div class="image"><img src="https://images.pexels.com/photos/2033447/pexels-photo-2033447.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=""></div>
				<div class="mosaic reversed"></div>
			</div>
			<div class="member flex-1">
				<div class="mosaic"></div>
				<div class="image"><img src="https://images.pexels.com/photos/1820919/pexels-photo-1820919.jpeg?cs=srgb&dl=pexels-mwabonje-1820919.jpg&fm=jpg" alt=""></div>
			</div>
			<div class="member flex-1">
				<div class="image"><img src="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=""></div>
				<div class="mosaic reversed"></div>
			</div>
		</div>
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

        const tl = gsap.timeline();

        tl.from(sm, {
          duration: .5,
          y: 100,
          ease: 'Power4.out',
          opacity: 0,
          autoAlpha: 0,
          stagger: {
            amount: 1
          },
        }).from(".mosaic .member", {
          duration: .5,
          y: 300,
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
          stagger: {
            amount: .25
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