<template>
  <div class="app">
    <h3 ref="aaa">???</h3>
    <!-- 改为ref -->
    <button v-on:click="add">点我</button>
    <Person />
    <!-- 如果你把ref加到组件上，console.log(aaa.value)会获取到组件的实例 -->
    <!-- 但是你看不到数据，因为有保护措施，我们可以使用defineExpose导出，见Person.vue -->
  </div>
</template>

<!-- 改为Vue3 -->
<script lang="ts" setup name="App">
import Person from './components/Person.vue' // 引入组件
import { ref } from 'vue'
// 创建一个ref对象，用于存储ref标记的内容
let aaa = ref()
// 通过ref获取元素
function add() {
  console.log(aaa.value) // 通过ref获取元素
}

// 两个文件的ref元素隔离了

//  以下代码是Vue2的写法，现在已经不需要了
// export default {
//   name: 'App', // 组件名称
//   components: {
//     Person, // 注册组件
//   },
// }
</script>

<style>
.app {
  color: #333;
  font-size: 20px;
  text-align: center;
  background-color: black;
}
</style>
