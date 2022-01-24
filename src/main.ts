import { createApp } from 'vue'
import { createPinia } from 'pinia';

import router from '@/router';
import registerComponents from '@/components';
import App from './App.vue'

import '@/styles';

const app = createApp(App);
const pinia = createPinia();

registerComponents(app);

app.use(pinia);
app.use(router);
app.mount('#app');
