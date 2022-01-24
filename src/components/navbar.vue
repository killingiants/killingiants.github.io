<template>
  <div :class="`navbar__ navbar__${id} flex flex-row items-center ${nvClass} ${'indicator-at-' + indicatorPosition}`">
    <a
      v-for="(link, index) in links"
      :key="index"
      class="nav-item capitalize"
      :class="{'active': modelValue === index}"
      @click.prevent="update($event, index)"
    >{{ link }}</a>
    <div class="nav-indicator" />
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  import $ from 'jquery';

  export default defineComponent({
    name: 'AppNavbar',

    props: {
      modelValue: {
        type: Number,
        default: 0,
      },
      links: {
        type: Array,
        required: true,
      },
      nvClass: {type: String, default: ''},
      indicatorPosition: {
        type: String,
        default: 'bottom',
        validator: function (value: string) {
          return ['top', 'bottom'].indexOf(value) !== -1;
        },
      },
    },

    emits: ['update:modelValue'],

    data: function () {
      return {
        id: '',
        navbar: this.$props.nvClass === undefined ? '.navbar__' : `.navbar__${this.$props.nvClass}`,
      };
    },

    watch: {
      links: function (newVal, oldVal) {
        this.initIndicator();
      },
    },

    mounted() {
      this.id = $.trim(Math.floor(Math.random() * 100000).toString());
      this.navbar = this.navbar + this.id;
      this.initIndicator();
    },

    methods: {
      initIndicator() {
        const target = `${this.navbar} .nav-item:first-child`;
        const indicator = `${this.navbar} .nav-indicator`;
        const el = $(target);

        $(indicator).css('left', '0px');
        $(indicator).css('width', `${el.width()}px`);
      },

      update(e: any, i: number) {
        this.$emit('update:modelValue', i);
        const id = $(`${this.navbar} .nav-indicator`);

        if (id != null) {
          id.css('left', `${e.target.offsetLeft}px`);
          id.css('width', `${e.target.offsetWidth}px`);
        }
      },
    },
  });
</script>
