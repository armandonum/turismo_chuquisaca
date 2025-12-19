import { createApp } from 'vue'
import App from './App.vue'
import {createPinia} from 'pinia'
import {primeVueConfig} from './composables/primeVueConfig.js'
import './styles.css'
import router from './router'



const app = createApp(App)
app.use(createPinia())
app.use(router)
primeVueConfig(app)
app.mount('#app')