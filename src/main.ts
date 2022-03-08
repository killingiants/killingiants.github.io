import { createApp } from 'vue';
import { createI18n } from 'vue-i18n';

import App from './App.vue';
import router from '/@/routes';
import registerComponents from '/@/components';
import messages from '/@/i18n';

import '/@/styles';

const app = createApp(App);
const i18n = createI18n({
  locale: 'en', // set locale
  fallbackLocale: 'en', // set fallback locale
  messages,
});

registerComponents(app);

app.use(router).use(i18n).mount('#app');