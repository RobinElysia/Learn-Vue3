<template>
  <div class="person">
    <h2>aaa</h2>
  </div>
</template>

<script setup lang="ts" name="Person">
import { ref, defineExpose } from 'vue'
import { type Person, type Persons } from '@/types/index.ts' // 引入类型

let person: Person = {
  id: 1,
  name: '张三',
  age: 18,
}

let personlist: Person[] = [
  {
    id: 1,
    name: '张三',
    age: 18,
  },
  {
    id: 2,
    name: '李四',
    age: 20,
  },
]

let personlist2: Array<Person> = [
  // 泛型写法
  {
    id: 1,
    name: '张三',
    age: 18,
  },
  {
    id: 2,
    name: '李四',
    age: 20,
  },
]
// 自定义类型
let personlist3: Persons = [
  {
    id: 1,
    name: '张三',
    age: 18,
  },
  {
    id: 2,
    name: '李四',
    age: 20,
  },
]
</script>

<style scoped>
/* scoped样式，只能在当前组件中生效 */
.person {
  color: #333;
  font-size: 20px;
  text-align: center;
  background-color: aqua;
}
</style>
