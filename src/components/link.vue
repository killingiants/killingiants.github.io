<template>
  <a
    class="link"
    @click.prevent="click"
  >
    <span
      :class="[
        double && 'double',
        wavy && 'wavy',
        dotted && 'dotted',
        dashed && 'dashed',
        lineThrough && 'line--through',
      ]"
      :data-content="text"
    >{{ text }}</span>
  </a>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { useRouter } from 'vue-router';

  export default defineComponent({
    name: 'AppLink',

    props: {
      text: { type: String, required: true},
      double: { type: Boolean, default: false },
      wavy: { type: Boolean, default: false },
      dotted: { type: Boolean, default: false },
      dashed: { type: Boolean, default: false },
      lineThrough: { type: Boolean, default: false },
      blank: { type: Boolean, default: false },
      to: {
        type: [String, Object],
        default: null,
      },
      href: {
        type: [String],
        default: null,
      },
    },

    emits: ['click'],

    setup (props, { emit }){
      const router = useRouter();

      const click = (evt: EventTarget) => {
        if (props.to) router.push(props.to);
        else if (props.href) {
          window.open(props.href, props.blank && '_blank' || '_self');
          // console.log(this.blank && '_self')
        }

        emit('click', evt);
      };

      return { click };
    },
  });
</script>
