import { createApp } from 'vue'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import bus from './common/eventBus'

// Vue.prototype.$bus = new Vue()

createApp(App).use(store).use(router).mount('#app')