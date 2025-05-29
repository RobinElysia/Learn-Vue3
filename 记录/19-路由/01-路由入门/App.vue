<template>
  <div class="app">
    <h2>Vue3路由测试</h2>
    <!-- 导航区 -->
    <div class="nav">
      <!-- to链接地址，active-class激活class -->
      <RouterLink to="/home" active-class="active">首页</RouterLink>
      <RouterLink to="/user" active-class="active">用户</RouterLink>
      <RouterLink to="/about" active-class="active">关于</RouterLink>
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
</script>
<style>
/* 样式区 */
</style>
