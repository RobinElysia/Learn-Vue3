<template>
  <div class="person">
    <h2>情况一：ref监听的【基本数据】</h2>
    <h2>
      {{ sum }}
    </h2>
    <button @click="cuount">a</button>
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

let sum = ref(0)

function cuount() {
  sum.value++
}

// watch监听ref数据
const stopWatch = watch(sum, (newValue, oldValue) => {
  console.log('sum变化了', sum.value)
  if (sum.value > 5 || newValue > 5) {
    // 监听到sum大于5，停止监听
    stopWatch()
  }
}) // watch(谁？, 监听的回调函数)
// 谁？只写变量名，不写.value
// 回调函数中箭头函数传 入两个参数，newValue和oldValue

// 当sum达到一定条件时，接触监听
// 拿到监听的返回值 stopWatch，调用就会接触
</script>
<style>
.person {
  color: #333;
  font-size: 20px;
  text-align: center;
  background-color: aqua;
}
</style>
