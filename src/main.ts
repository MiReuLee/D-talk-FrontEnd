import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

const app = createApp(App);

const locale = {};

app.config.globalProperties.$locale = locale;

app
    .use(store)
    .use(router)
    .mount('#app');
