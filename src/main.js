import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ScrollParallax from 'vue3-parallax/src/components/ScrollParallax.vue';

const app = createApp(App);
app.component('scroll-parallax', ScrollParallax);
app.use(store).use(router).mount('#app')
