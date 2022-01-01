import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import less from 'less'
import './styles/index.less'

const app = createApp(App).use(router, less)
app.mount('#app')
