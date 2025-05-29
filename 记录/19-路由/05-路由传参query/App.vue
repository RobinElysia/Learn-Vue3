<template>
  <div class="app">
    <h2>Vue3路由测试</h2>
    <!-- 导航区 -->
    <div class="nav">
      <!-- to链接地址，active-class激活class -->
      <RouterLink :to="{ path: '/home' }" active-class="active">
        首页
        <!-- 嵌套路由 -->
        <!-- 第一种写法 query传参 -->
        <!-- <RouterLink :to="`/home/child?id=${id}&b=${b}`" active-class="active">子页面</RouterLink> -->
        <!-- 第二种写法 -->
        <RouterLink :to="{ name: 'childName', query: { id, b } }" active-class="active">
          子页面
        </RouterLink>
      </RouterLink>
      <RouterLink :to="{ name: 'userName' }" active-class="active">用户</RouterLink>
      <!-- 第三种写法，直接写成名字 -->
      <RouterLink :to="{ path: '/about' }" active-class="active">关于</RouterLink>
      <!-- to的第二种写法 -->
    </div>
    <!-- 展示区 -->
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<!-- 改为Vue3 -->
<script lang="ts" setup name="App">
import { RouterView, RouterLink } from 'vue-router'

let id = 123
let b = 456
</script>
<style>
/* 样式区 */
</style>
