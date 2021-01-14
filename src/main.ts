import { createApp } from 'vue'
import App from './App.vue'
import plugins from './plugins'
import router from './router'
import store from './store'
import './theme/tailwind.css'

createApp(App).use(router).use(store).use(plugins).mount('#app')
