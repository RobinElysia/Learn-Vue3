<template>
  <div class="app">
    <Person :list="persons" />
  </div>
</template>

<!-- 改为Vue3 -->
<script lang="ts" setup name="App">
import Person from './components/Person.vue' // 引入组件
import { reactive } from 'vue' // 引入vue
import { type Persons } from '@/types/index.ts' // 引入类型

// let persons: Persons = reactive([
//   { id: 1, name: 'aaa', age: 18 },
//   { id: 2, name: 'bbb', age: 20 },
//   { id: 3, name: 'ccc', age: 22 },
// ])

// 推荐使用
let persons = reactive<Persons>([
  { id: 1, name: 'aaa', age: 18 },
  { id: 2, name: 'bbb', age: 20 },
  { id: 3, name: 'ccc', age: 22, x: 1 },
])
</script>

<style>
.app {
  color: #333;
  font-size: 20px;
  text-align: center;
  background-color: black;
}
</style>
