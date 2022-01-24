<template>
  <div
    :class="[
      'td-loading td-loading--default',
      thin && 'td-loading--thin',
      target && 'td-loading--target',
      fixed && 'td-loading--fixed',
      light && 'td-loading--light',
      primary && 'td-loading--primary',
      (target || fixed) && 'bg_blur-light'
    ]"
  >
    <div class="td-loading__load">
      <div class="td-loading__load__animation">
        <div class="td-loading__load__percent" />
        <div class="td-loading__load__animation__1" />
        <div class="td-loading__load__animation__2" />
        <div class="td-loading__load__animation__3" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    target: { type: Boolean, default: false },
    fixed: { type: Boolean, default: false },

    thin: { type: Boolean, default: false },

    light: { type: Boolean, default: false },
    primary: { type: Boolean, default: false },
  },
});
</script>

