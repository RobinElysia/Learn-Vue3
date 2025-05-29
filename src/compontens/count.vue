<template>
  <div class="count">
    <h1>{{ count.count }}</h1>
    <select v-model="a" @change="increment">
      <!-- 或者 model.number -->
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <!-- :value -->
    </select>
    <button @click="increment">Increment</button>
  </div>
</template>

<script setup name="count">
import { ref } from 'vue'
import { UseCountStore } from '@/store/count'

const count = UseCountStore()
// 使用 store ,都可以拿到数据
// console.log(count.$state.count)
// console.log(count.count)

count.$subscribe((mutation, state) => {
  // 订阅 store 的变化
  // mutation 是一个对象，包含了 mutation 的类型和 payload，修改前后的数据
  // state 是 store 的当前状态，修改后的状态
  console.log(mutation, state)
  // 订阅里可以执行一些副作用操作
  // 比如发送请求，更新其他数据等
  // 这里可以用来做数据持久化
  localStorage.setItem('count', JSON.stringify(state.count))
  console.log('数据持久化到 localStorage')
  // 到时候使用 JSON.parse(localStorage.getItem('count')) 获取数据
})

let a = ref(1)

function increment() {
  count.value += parseInt(a.value) // 数据类型转换，或者直接在 value前加 : ，使其变成表达式
}
</script>

<style scoped>
.count {
  color: blue;
  font-size: 20px;
  border: 1px solid black;
  padding: 10px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
}
</style>
