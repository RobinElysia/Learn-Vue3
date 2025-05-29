<template>
  <div class="person">
    <h2>watch监听数据</h2>
    <h3>姓名：{{ person.name }}</h3>
    <h3>年龄：{{ person.age }}</h3>
    <h3>汽车品牌：{{ person.car.brand }}</h3>
    <h3>汽车价格：{{ person.car.price }}</h3>
    <button @click="namec">修改姓名</button>
    <button @click="agec">修改年龄</button>
    <button @click="carc">修改汽车</button>
    <button @click="arc1">修改整个车</button>
  </div>
</template>

<!-- watch能监听四种东西，监听数据的变化，和vue2的 作用 是一致的 -->

<!-- 四种监听数据 -->
<!-- ref数据可监听（仅是ref，ref的value不可以！） -->
<!-- reactive数据可监听 -->
<!-- 函数返回值可监听（可监听getter函数） -->
<!-- 一个包含上述内容的数组 -->

<!-- 五个场景 -->
<!-- 监听上述的多个数据 -->

<script setup lang="ts" name="Person">
import { reactive, watch } from 'vue'

// 数据
let person = reactive({
  // reactive数据
  name: '小明',
  age: 18,
  car: {
    brand: '奔驰',
    price: 100000,
  },
})

function namec() {
  person.name += '~'
}
function agec() {
  person.age += 1
}
function carc() {
  person.car.brand = '宝马'
}
function arc1() {
  person.car = {
    brand: '奥迪',
    price: 200000,
  }
}

// 情况四：监听对象数据的某个属性变化
watch(
  () => {
    return person.name
  }, // 写成箭头函数，监听对象数据的某个属性变化，也就是getter函数
  (newValue, oldValue) => {
    console.log('姓名变化了', person)
    console.log('newValue', newValue)
    console.log('oldValue', oldValue)
  },
)

// 监听对象数据内的多个数据
watch(
  [
    () => person.car,
    person.car.brand
  ]
  // 但是你这么写，修改整个car对象时，监听不会触发，因为监听的是对象的引用，不是地址，我们需要将起改为箭头函数才可以
  // 但是写成箭头函数，又会出现对象内属性不监听，这时候需要加上深度监听
  // 推荐写函数
  (newValue, oldValue) => {
    console.log('汽车变化了', person)
    console.log('newValue', newValue)
    console.log('oldValue', oldValue)
  },
  { deep: true, immediate: true }, // 深度监听，立即监听
)
</script>

<style>
.person {
  color: #333;
  font-size: 20px;
  text-align: center;
  background-color: aqua;
}
</style>
