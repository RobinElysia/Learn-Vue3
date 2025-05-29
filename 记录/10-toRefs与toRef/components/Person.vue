<template>
  <div class="person">
    <h1>姓名：{{ name }}</h1>
    <h1>年龄：{{ age }}</h1>
    <button @click="agep">年龄+1</button>
    <button @click="namec">姓名</button>
  </div>
</template>

<script setup lang="ts" name="Person">
import { ref, reactive, toRefs, toRef } from 'vue'

let person = ref({
  // reacative也可以，不需要加.value
  name: '小明',
  age: 18,
})

let { name, age } = toRefs(person.value) // 解构对象也为响应式
console.log(name, age) // 这里是响应式的
console.log(toRefs(person.value)) // 这里是响应式的
// let {name, age} = toRefs(person) 或者 person 直接解构会失去响应式
// 变成响应式ref对象

let nl = toRef(person.value, 'name') // 只解构一个属性
console.log(nl) // 这里是响应式的

function agep() {
  age.value += 1
}
function namec() {
  name.value = '小红'
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
