import { defineConfig } from 'vite'
import {join} from 'path'
import vue from '@vitejs/plugin-vue'
import vueI18n from '@intlify/vite-plugin-vue-i18n'
import WindiCSS from 'vite-plugin-windicss'

const PACKAGE_ROOT = __dirname;

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '/@/': join(PACKAGE_ROOT, 'src') + '/',
    },
  },
  plugins: [
    vue(),
    WindiCSS(),
    vueI18n({
      include: join(PACKAGE_ROOT, 'src') + '/i18n/locales/**',
    })
  ]
})
