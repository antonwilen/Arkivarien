import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/main.scss' // import css
import * as bootstrap from 'bootstrap' // import js

import './assets/base.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
