<template>
  <div class="person">
    <h1>{{ name }}</h1>
    <h1>{{ age }}</h1>
    <button @click="show">点击</button>
    <button @click="show1">点击1</button>
  </div>
</template>

<!-- 优雅写法，直接用两个script标签 -->
<!-- 一个写name、一个写实际内容 -->

<!-- 你不写name，就是文件名 -->

<!-- 或者使用插件npm i vite-plugin-vue-setup-extend -D -->
<!--  <script setup lang="ts" name=""> -->

<script lang="ts">
export default {
  name: 'Person',
}
</script>

<script setup lang="ts">
// 组件的 非响应式 数据
let name = '张三'
const age = 18
const number = 11111111111

// 方法
function show() {
  alert(number)
}
function show1() {
  name = '李四'
}
</script>

<style>
.person {
  color: #333;
  font-size: 20px;
  text-align: center;
  background-color: aqua;
}
</style>
