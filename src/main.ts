import './assets/main.css'
import 'aos/dist/aos.css'
import * as AOS from 'aos';

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)
app.mount('#app')
