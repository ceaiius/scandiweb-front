import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './config/vee-validate/rules.js'
import './config/vee-validate/messages.js'

const app = createApp(App)

app.use(router)

app.mount('#app')
