<template>
  <div class="app">
    <h1>hello world</h1>
    <Person />
  </div>
</template>

<!-- 改为Vue3 -->
<script lang="ts" setup name="App">
import Person from './components/Person.vue' // 引入组件

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
