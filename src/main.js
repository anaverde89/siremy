import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'
import PerfectScrollbar from 'vue3-perfect-scrollbar'
import 'vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css'
// import './assets/css/tailwind.css'

createApp(App).use(PerfectScrollbar).use(router).mount('#app')
