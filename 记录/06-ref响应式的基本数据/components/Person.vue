<template>
  <div class="person">
    <h1>{{ name }}</h1>
    <h1>{{ age }}</h1>
    <button @click="show">点击</button>
    <button @click="show1">点击1</button>
  </div>
</template>

<script setup lang="ts" name="Person">
import { ref } from 'vue'
// 组件的 响应式 数据
let name = ref('张三')
console.log(name) // 打印出的是一个对象

// 组件的 非响应式 数据
const age = 18
const number = 11111111111

// 方法
function show() {
  alert(number)
}
function show1() {
  name.value = '李四' // 这里的 name 是一个对象，不能直接赋值
  // name = '李四' // 这样是错误的
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
