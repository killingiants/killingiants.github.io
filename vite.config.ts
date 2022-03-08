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
      // if you want to use Vue I18n Legacy API, you need to set `compositionOnly: false`
      // compositionOnly: false,

      // you need to set i18n resource including paths !
      // include: path.resolve(__dirname, './path/to/src/locales/**')
      include: join(PACKAGE_ROOT, 'src') + '/i18n/locales/**',
    })
  ]
})
