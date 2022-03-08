<template>
  <transition :name="posRight ? 'td-dialog-slide-right' : 'td-dialog'">
    <div
      v-if="modelValue"
      ref="dialog-content"
      :class="[
        'td-dialog-content',
        fullScreen && 'td-dialog--fullScreen',
        blur && 'blur',
      ]"
      @click="onBgClick"
    >
      <div
        :class="[
          'td-dialog',
          dialogClasses,
          fullScreen && 'td-dialog--fullScreen',
          rebound && 'td-dialog--rebound',
          notPadding && 'td-dialog--notPadding',
          square && 'td-dialog--square',
          autoWidth && 'td-dialog--autoWidth',
          scroll && 'td-dialog--scroll',
          loading && 'td-dialog--loading',
          notCenter && 'td-dialog--notCenter',
          posRight && 'td-dialog--posRight',
        ]"
      >
        <div class="td-dialog__header">
          <slot name="header">
            <p class="td-dialog__title">
              {{ title }}
            </p>
          </slot>
        </div>
        <div
          class="td-dialog__content"
          :class="bodyClasses"
        >
          <slot />
        </div>
        <div class="td-dialog__footer">
          <slot name="footer" />
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { insertBody } from '/@/utils/ui';

export default defineComponent({
  name: 'TdDialog',

  props: {
    modelValue: { default: false, type: Boolean },
    loading: { default: false, type: Boolean },
    fullScreen: { default: false, type: Boolean },
    notClose: { default: false, type: Boolean },
    preventClose: { default: false, type: Boolean },
    notPadding: { default: false, type: Boolean },
    overflowHidden: { default: false, type: Boolean },
    blur: { default: false, type: Boolean },
    square: { default: false, type: Boolean },
    autoWidth: { default: false, type: Boolean },
    scroll: { default: false, type: Boolean },
    notCenter: { default: false, type: Boolean },
    posRight: { default: false, type: Boolean },
    width: { default: null, type: String },
    title: { default: '', type: String },
    bodyClasses: { default: '', type: String },
    dialogClasses: { default: '', type: String },
    routerClose: { default: false, type: Boolean },
  },

  emits:['update:modelValue', 'close', 'mounted', 'before-unmount'],

  data: () => ({
    rebound: false,
  }),

  watch: {
    modelValue: function (val: boolean) {
      if (val) {
        this.insertDialog();
        if (this.overflowHidden) {
          document.body.style.overflow = 'hidden';
        }
      } else {
        if (this.overflowHidden) {
          document.body.style.overflow = '';
          window.removeEventListener('keydown', this.esc);
        }
      }
    },
  },

  mounted() {
    this.$emit('mounted');
  },

  beforeUnmount() {
    this.$emit('before-unmount');

    if (this.$el && this.$el.parentNode) {
      this.$el.parentNode.removeChild(this.$el);
    }
  },

  methods: {
    esc(evt: any) {
      if (evt.which == 27 && !this.$props.preventClose) {
        this.$emit('update:modelValue', false);
        this.$emit('close');
      }
    },

    addEsc() {
      window.addEventListener('keydown', this.esc);
    },

    insertDialog() {
      this.addEsc();
      this.$nextTick(() => {
        const dialog = this.$refs['dialog-content'] as HTMLElement;
        insertBody(dialog, document.querySelector('#app'));
      });
    },

    onBgClick(evt: any) {
      if (!evt.target.closest('.td-dialog') && !this.$props.preventClose) {
        this.$emit('update:modelValue', !this.$props.modelValue);
        this.$emit('close');
      }

      if (this.$props.preventClose && !evt.target.closest('.td-dialog')) {
        this.rebound = true;
        setTimeout(() => {
          this.rebound = false;
        }, 300);
      }
    },
  },
});
</script>
