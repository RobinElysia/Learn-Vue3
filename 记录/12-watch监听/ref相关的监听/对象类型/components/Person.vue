<template>
  <div class="person">
    <h2>情况一：ref监听的【对象数据】</h2>
    <h2>
      姓名：{{ person.name }}<br />
      年龄：{{ person.age }}
    </h2>
    <button @click="namec">a</button>
    <button @click="agec">b</button>
    <button @click="personc">c</button>
  </div>
</template>

<!-- watch能监听四种东西，监听数据的变化，和vue2的 作用 是一致的 -->

<!-- 四种监听数据 -->
<!-- ref数据可监听（仅是ref，ref的value不可以！） -->
<!-- reactive数据可监听 -->
<!-- 函数返回值可监听（可监听getter函数） -->
<!-- 一个包含上述内容的数组 -->

<!-- 五个场景 -->

<script setup lang="ts" name="Person">
import { ref, watch } from 'vue'

let person = ref({
  name: '小明',
  age: 18,
})

function namec() {
  person.value.name += '~'
}
function agec() {
  person.value.age += 1
}
function personc() {
  person.value = {
    name: '小红',
    age: 20,
  }
}

// watch监听ref数据
// 当 整个 对象数据的变化时，才会触发这种监听，也就是对象的地址值
const stopWatch = watch(
  person,
  (newValue, oldValue) => {
    // 真正开发不写newValue和oldValue，而是直接value，因为当开启深度监视时
    // 会出现new和old值相同的情况，也就是修改单个值时，new和old值相同
    console.log('person变化了', person.value)
    console.log('newValue', newValue)
    console.log('oldValue', oldValue)
    if (person.value.age > 20 || newValue.age > 20) {
      // 监听到sum大于20，停止监听
      stopWatch()
    }
  },
  { deep: true, immediate: true },
) // 第三个参数，开启深度监视，也就是任何值变化都会监视;开启立即监视immediate，打开就会直接监视一次
</script>

<style>
.person {
  color: #333;
  font-size: 20px;
  text-align: center;
  background-color: aqua;
}
</style>
