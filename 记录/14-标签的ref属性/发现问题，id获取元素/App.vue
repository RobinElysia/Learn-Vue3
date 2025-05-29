<template>
  <div class="app">
    <h3 id="aaa">???</h3>
    <!-- 我这也写了个id，并且是先渲染的 -->
    <!-- 会出现id冲突 -->
    <!-- 所以Person的按钮会获取到App的元素 -->
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
