<template>
  <div class="person">
    <h1>{{ a }}</h1>
    <h1>{{ b }}</h1>
    <button @click="show">点击</button>
    <button @click="show1">点击1</button>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Person', // 组件名称
  setup() {
    // vue3
    console.log(this) // vue3是undefined

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

    // 返回数据和方法
    return {
      a: name,
      b: age,
      c: number,
      show,
      show1,
    }
  },
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
