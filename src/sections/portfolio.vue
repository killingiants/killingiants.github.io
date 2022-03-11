<template>
	<section id="portfolio">
		<div class="project flex flex-row items-center h-full w-full" @keypress.down="next" @keypress.up="prev">
			<div class="info texts !p-0">
        <div class="sm">
          <p>{{ currentProject.type }}</p>
        </div>
        <component :is="'h1'" :key="currentProjectIndex">
          <h1 class="title">{{ currentProject.title }}</h1> 
        </component>
        <component :is="'p'" :key="currentProjectIndex">
          <p class="desc">{{ currentProject.desc }}</p>
        </component>
				<div class="tools flex items-center overflow-hidden">
          <img src="../assets/vectors/figma.svg" alt="" v-show="exist(currentProject.tools, 0)">
          <img src="../assets/vectors/vs_code.svg" alt="" v-show="exist(currentProject.tools, 1)">
          <img src="../assets/vectors/js.svg" alt="" v-show="exist(currentProject.tools, 2)">
          <img src="../assets/vectors/vue.svg" alt="" v-show="exist(currentProject.tools, 3)">
          <img src="../assets/vectors/html_5.svg" alt="" v-show="exist(currentProject.tools, 4)">
          <img src="../assets/vectors/css_3.svg" alt="" v-show="exist(currentProject.tools, 5)">
				</div>
				<td-button class="main-button not-special black" :to="{name: 'project'}">Read more.</td-button>
			</div>
			<div class="indicator flex flex-col items-center">
        <td-button class="prev" @click="prev" :disabled="!canSlide"><ArrowRight2Icon></ArrowRight2Icon></td-button>
				<span v-for="(item, index) in projects" :key="index" :class="{active: index === currentProjectIndex}"></span>
        <td-button class="next" @click="next" :disabled="!canSlide"><ArrowRight2Icon></ArrowRight2Icon></td-button>
			</div>
			<div class="image__">
        <img :src="currentProject.img" alt="">
      </div>
			<div class="counter flex items-end">
				<p class="current">0{{ currentProjectIndex + 1 }}</p>
			</div>
		</div>
	</section>
</template>
<script lang="ts">
  import { computed, defineComponent, onMounted, ref, watch } from 'vue'
  import gsap from 'gsap'
  import { useI18n } from 'vue-i18n'

  interface ProjectModel {
    img: string
    type: string,
    title: string,
    desc: string,
    tools: Array<Number>
  }

  export default defineComponent({
    setup() {
      const { t } = useI18n()
      const canSlide = ref(false)
      const projects = ref<Array<ProjectModel>>([
        {
          img: '/images/kg.png',
          type: 'UI/UX Design, Coding.',
          title: t('sections.portfolio.p1.title'),
          desc: t('sections.portfolio.p1.desc'),
          tools: [0, 1, 2 ,3 ,4 , 5]
        },
        {
          img: '/images/p2.png',
          type: 'UI/UX Design',
          title: t('sections.portfolio.p2.title'),
          desc: t('sections.portfolio.p2.desc'),
          tools: [0]
        },
        {
          img: '/images/p1.png',
          type: 'UI/UX Design, Coding.',
          title: t('sections.portfolio.p3.title'),
          desc: t('sections.portfolio.p3.desc'),
          tools: [0, 1, 2 ,3 ,4 , 5]
        },
        {
          img: '/images/p4.png',
          type: 'UI/UX Design, Coding.',
          title: t('sections.portfolio.p4.title'),
          desc: t('sections.portfolio.p4.desc'),
          tools: [0, 1, 2 ,3 ,4 , 5]
        },
      ])
      const currentProjectIndex = ref<number>(0)

      const currentProject = computed(() => projects.value[currentProjectIndex.value])

      function prev() {
        if (canSlide.value) {
          if(currentProjectIndex.value !== 0) currentProjectIndex.value--
          else currentProjectIndex.value = projects.value.length - 1
        }
      }
      function next() {
        if (canSlide.value) {
          if(currentProjectIndex.value !== projects.value.length - 1) currentProjectIndex.value++
          else currentProjectIndex.value = 0
        }
      }
      function setActive(i: number) {
        currentProjectIndex.value = i
      }
      function onTransitionComplete() {
        canSlide.value = true
      }

      function startEnterAnimation() {
        canSlide.value = false;

        const image = '.image__';
        const counter = '.counter';
        const icons = '.tools img';
        const sm = '.sm';
        const main_button = '.main-button';
        const controls = '.indicator';

        const tl = gsap.timeline({
          onComplete: onTransitionComplete
        });

        tl.from(sm, {
          duration: .5,
          y: 100,
          ease: 'Power4.out',
          opacity: 0,
          autoAlpha: 0,
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
          opacity: 0,
          autoAlpha: 0,
        }).from(controls, {
          duration: .5,
          opacity: 0,
          x: 100,
          ease: 'Power4.out',
        }).from(image, {
					delay: .45,
          duration: .45,
          width: 0,
          opacity: 0,
          ease: 'Power4.out',
        }).from(icons, {
          duration: .25,
          y: 100,
          width: 0,
          opacity: 0,
          ease: "elastic.out(1, 1)",
          stagger: {
						each: .085
          },
        }).from(counter, {
          duration: .5,
          y: 100,
          opacity: 0,
          ease: "elastic.out(1, 1)",
        })
      }

      function exist(arr: Array<Number>, i:Number) {
        return arr.indexOf(i) >= 0;
      }

      onMounted(() => {
        startEnterAnimation()
      });

      watch(currentProjectIndex, () => {
        startEnterAnimation()
      })

      return {
        canSlide,
        currentProjectIndex,
        projects,
        currentProject,

        prev,
        next,
        setActive,
        exist
      }
    },
  })
</script>