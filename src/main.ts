import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import 'uno.css'
import '@unocss/reset/tailwind.css'
import '@/assets/styles/global.scss'

const app = createApp(App)
const pinia = createPinia()

app.use(router).use(pinia)

app.mount('#app')

