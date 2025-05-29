import { createApp } from 'vue'
import App from '@/App.vue'
// 引入Pinia
import { createPinia } from 'pinia'

const app = createApp(App)
// 创建Pinia实例
const pinia = createPinia()
// 将Pinia实例挂载到Vue应用
app.use(pinia)
app.mount('#app')
