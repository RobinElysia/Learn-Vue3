<template>
  <div class="app">
    <h1>aaa</h1>
    <Person />
  </div>
</template>

<script lang="ts">
import Person from './components/Person.vue' // 引入组件

export default {
  name: 'App', // 组件名称
  components: {
    Person, // 注册组件
  },
}
</script>

<style>
.app {
  color: #333;
  font-size: 20px;
  text-align: center;
  background-color: black;
}
</style>
