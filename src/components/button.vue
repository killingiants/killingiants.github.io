<template>
  <button
    ref="button"
    :class="[
      'td-button',
      (!block && !circle && !square && !loading && !primary && !danger && !success && !gradient && !border && !transparent && !shadow) && 'td-button--default',
      animationType.length >= 1 && 'td-button--animate td-button--animate-' + animationType,
      block && 'td-button--block',
      circle && 'td-button--circle',
      square && 'td-button--square',
      loading && 'td-button--loading',
      primary && 'td-button--primary',
      danger && 'td-button--danger',
      success && 'td-button--success',
      gradient && 'td-button--gradient',
      border && 'td-button--border',
      transparent && 'td-button--transparent',
      shadow && 'td-button--shadow',
    ]"
    @mousedown="mousedown"
    @click="click"
  >
    <div class="td-button__content">
      <slot />
    </div>
    <div
      v-if="animationType.length >= 1"
      :class="['td-button', 'td-button__animate td-button__animate--' + animationType]"
    >
      <slot name="hover" />
    </div>
    <loader
      v-if="loading"
      target
      thin
      :light="(primary || danger || success || gradient) ? true : false"
    />
  </button>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';
import { ripple, rippleCut, rippleReverse } from '@/utils/ui';

export default defineComponent({
  name: 'TdButton',

  props: {
    ripple: {
      type: String,
      default: '',
    },
    to: {
      type: [String, Object],
      default: null,
    },
    href: {
      type: [String],
      default: null,
    },
    blank: { type: Boolean, default: false },
    block: { type: Boolean, default: false },
    circle: { type: Boolean, default: false },
    square: { type: Boolean, default: false },
    loading: { type: Boolean, default: false },
    primary: { type: Boolean, default: false },
    danger: { type: Boolean, default: false },
    success: { type: Boolean, default: false },
    gradient: { type: Boolean, default: false },
    border: { type: Boolean, default: false },
    transparent: { type: Boolean, default: false },
    shadow: { type: Boolean, default: false },
    animationType: {
      type: String,
      default: '',
    },
  },

  emits: ['click'],

  setup (props, { emit }){
    const router = useRouter();
    const button = ref(null);

    const mousedown = (evt: EventTarget) => {
      // ripple effect
      if (props.ripple === 'reverse') rippleReverse(evt);
      else if (props.ripple === 'cut') rippleCut(evt);
      else {
        ripple(
          evt,
          null,
          false,
        );
      }
    };

    const click = (evt: EventTarget) => {
      if (props.to) router.push(props.to);
      else if (props.href) {
        window.open(props.href, props.blank && '_blank' || '_self');
        // console.log(this.blank && '_self')
      }

      emit('click', evt);
    };

    return { mousedown, click, button };
  },
});
</script>
