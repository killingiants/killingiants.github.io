<template>
  <section id="team" class="team__all flex items-center">
    <div class="back_sec h-full relative">
      <td-button :to="{name: 'team'}">
        <div class="esc flex items-center">Esc</div>
        <span>Get back</span>
        <ArrowRightIcon></ArrowRightIcon>
      </td-button>
    </div>
    <div class="members mosaic flex-1 flex items-center h-full">
      <div class="member">
        <div class="name">Jonh</div>
        <div class="mosaic"></div>
        <div class="image">
          <img src="https://images.pexels.com/photos/718978/pexels-photo-718978.jpeg?cs=srgb&dl=pexels-godisable-jacob-718978.jpg&fm=jpg" alt="">
          <div class="info">
            <div class="title flex items-center">
              <p>John Doe</p>
              <span class="sep"></span>
              <p>Software engineer</p>
            </div>
            <p class="desc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia deleniti quas quos sed corrupti iure impedit iste modi, distinctio accusantium facilis adipisci neque qui! Ab impedit fugiat quam suscipit fugit!</p>
            <div class="dream">
              <p class="dr">dream:</p>
              <p>Build facebook clone</p>
            </div>
          </div>
        </div>
      </div>
      <div class="member">
        <div class="name">Jonh</div>
        <div class="image">
          <img src="https://images.pexels.com/photos/2033447/pexels-photo-2033447.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
          <div class="info">
            <div class="title flex items-center">
              <p>John Doe</p>
              <span class="sep"></span>
              <p>Software engineer</p>
            </div>
            <p class="desc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia deleniti quas quos sed corrupti iure impedit iste modi, distinctio accusantium facilis adipisci neque qui! Ab impedit fugiat quam suscipit fugit!</p>
            <div class="dream">
              <p class="dr">dream:</p>
              <p>Build facebook clone</p>
            </div>
          </div>
        </div>
        <div class="mosaic reversed"></div>
      </div>
      <div class="member">
        <div class="name">Jonh</div>
        <div class="mosaic"></div>
        <div class="image">
          <img src="https://images.pexels.com/photos/1820919/pexels-photo-1820919.jpeg?cs=srgb&dl=pexels-mwabonje-1820919.jpg&fm=jpg" alt="">
          <div class="info">
            <div class="title flex items-center">
              <p>John Doe</p>
              <span class="sep"></span>
              <p>Software engineer</p>
            </div>
            <p class="desc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia deleniti quas quos sed corrupti iure impedit iste modi, distinctio accusantium facilis adipisci neque qui! Ab impedit fugiat quam suscipit fugit!</p>
            <div class="dream">
              <p class="dr">dream:</p>
              <p>Build facebook clone</p>
            </div>
          </div>
        </div>
      </div>
      <div class="member">
        <div class="name">Jonh</div>
        <div class="image">
          <img src="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
          <div class="info">
            <div class="title flex items-center">
              <p>John Doe</p>
              <span class="sep"></span>
              <p>Software engineer</p>
            </div>
            <p class="desc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia deleniti quas quos sed corrupti iure impedit iste modi, distinctio accusantium facilis adipisci neque qui! Ab impedit fugiat quam suscipit fugit!</p>
            <div class="dream">
              <p class="dr">dream:</p>
              <p>Build facebook clone</p>
            </div>
          </div>
        </div>
        <div class="mosaic reversed"></div>
      </div>
      <div class="member">
        <div class="name">Jonh</div>
        <div class="mosaic"></div>
        <div class="image">
          <img src="https://images.pexels.com/photos/1820919/pexels-photo-1820919.jpeg?cs=srgb&dl=pexels-mwabonje-1820919.jpg&fm=jpg" alt="">
          <div class="info">
            <div class="title flex items-center">
              <p>John Doe</p>
              <span class="sep"></span>
              <p>Software engineer</p>
            </div>
            <p class="desc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia deleniti quas quos sed corrupti iure impedit iste modi, distinctio accusantium facilis adipisci neque qui! Ab impedit fugiat quam suscipit fugit!</p>
            <div class="dream">
              <p class="dr">dream:</p>
              <p>Build facebook clone</p>
            </div>
          </div>
        </div>
      </div>
      <div class="member">
        <div class="name">Jonh</div>
        <div class="image">
          <img src="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
          <div class="info">
            <div class="title flex items-center">
              <p>John Doe</p>
              <span class="sep"></span>
              <p>Software engineer</p>
            </div>
            <p class="desc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia deleniti quas quos sed corrupti iure impedit iste modi, distinctio accusantium facilis adipisci neque qui! Ab impedit fugiat quam suscipit fugit!</p>
            <div class="dream">
              <p class="dr">dream:</p>
              <p>Build facebook clone</p>
            </div>
          </div>
        </div>
        <div class="mosaic reversed"></div>
      </div>
    </div>
  </section>
</template>
<script lang="ts">
  import { defineComponent, onMounted } from 'vue'
  import gsap from 'gsap'

  export default defineComponent({
    setup() {
      function startEnterAnimation() {
        const tl = gsap.timeline();

        tl.from(".back_sec button", {
          duration: .5,
          y: 300,
          opacity: 0,
          ease: "elastic.out(1, 1)",
        }).from(".mosaic .member", {
          duration: .35,
          y: 300,
          opacity: 0,
          ease: "elastic.out(1, 1)",
          stagger: {
            each: .35
          },
        })
      }

      onMounted(() => {
        startEnterAnimation()
      });
    },
  })
</script>