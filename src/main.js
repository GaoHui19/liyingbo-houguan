
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './assets/font/icon.css'
import App from './App.vue'
import router from './router'
import 'normalize.css/normalize.css'
import 'amfe-flexible'
import ElementUI from 'element-plus'
import 'element-plus/dist/index.css'




const app = createApp(App)
app.use(ElementUI)
app.use(createPinia())
app.use(router)

app.mount('#app')
