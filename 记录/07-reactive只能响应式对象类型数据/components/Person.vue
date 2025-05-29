<template>
  <div class="person">
    <h1>{{ car.brand }}</h1>
    <h1>{{ car.model }}</h1>
    <h1>{{ car.year }}</h1>
    <button @click="show">点击</button>
    <ul>
      <li v-for="x in game" v-bind:key="x.id">{{ x.name }}</li>
    </ul>
    <button @click="show1">点击</button>
  </div>
</template>

<script setup lang="ts" name="Person">
import { reactive } from 'vue' // reactive 是可以深层次里面嵌套的对象
let car = reactive({
  brand: 'Toyota',
  model: 'Corolla',
  year: 2020,
})

let game = reactive([
  {
    id: 1,
    name: '王者荣耀',
  },
  {
    id: 2,
    name: '英雄联盟',
  },
  {
    id: 3,
    name: '吃鸡',
  },
]) // 响应式对象

console.log(car) // 打印出的是一个对象)
console.log(Proxy) // 打印出的是一个对象

function show() {
  car.year += 1
}

function show1() {
  game.pop()
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
