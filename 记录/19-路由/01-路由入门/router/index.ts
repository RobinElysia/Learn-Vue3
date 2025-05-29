// 路由配置
// 导入VueRouter
import { createRouter, createWebHistory } from 'vue-router'

// 引入组件
import Home from '@/components/Home.vue'
import About from '@/components/About.vue'
import User from '@/components/User.vue'

// 创建路由实例
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/home',
      component: Home,
    },
    {
      path: '/about',
      component: About,
    },
    {
      path: '/user',
      component: User,
    },
  ],
})

export default router
// 导出路由实例
