import { createApp } from 'vue'
import './style.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router/router'
import App from './App.vue'
import mitt from 'mitt'

const app = createApp(App)
app.use(ElementPlus)
app.use(router)

app.config.globalProperties.emitter = mitt()
app.mount('#app')
