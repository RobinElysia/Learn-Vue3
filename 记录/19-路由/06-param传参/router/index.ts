// 路由配置
// 导入VueRouter
import { createRouter, createWebHistory } from 'vue-router'

// 引入组件
import Home from '@/pages/Home.vue'
import About from '@/pages/About.vue'
import User from '@/pages/User.vue'

// 创建路由实例
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: 'homeName',
      path: '/home',
      component: Home,
      children: [
        {
          name: 'childName',
          path: 'child/:childId/:b', // param占位路由
          component: () => import('@/pages/child.vue'), // 子路由
        },
      ],
    },
    {
      name: 'aboutName',
      path: '/about',
      component: About,
    },
    {
      name: 'userName',
      path: '/user',
      component: User,
    },
  ],
})

export default router
// 导出路由实例
