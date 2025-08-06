import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import { Toaster } from 'vue-sonner'

const app = createApp(App)

app.use(router)
app.use(createPinia())
app.component('Toaster', Toaster)

app.mount('#app')
