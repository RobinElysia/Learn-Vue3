<template>
  <div class="app">
    <Person />
  </div>
</template>

<!-- 改为Vue3 -->
<script lang="ts" setup name="App">
import Person from './components/Person.vue' // 引入组件
</script>

<style>
.app {
  color: #333;
  font-size: 20px;
  text-align: center;
  background-color: black;
}
</style>
