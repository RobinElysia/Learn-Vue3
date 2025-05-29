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
          // 第一种方式，仅限Params参数使用
          // props: true, // 传递参数到子组件
          // 第二种方式，函数式写法，自己决定什么参数可以给子组件
          props: (route) => {
            console.log(route)
            return {
              childId: route.params.childId,
              b: route.params.b,
            }
          },
          // 第三种方式，对象写法
          // props: {
          //   childId: '123',
          //   b: '456',
          // },
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
