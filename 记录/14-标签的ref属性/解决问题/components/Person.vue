<template>
  <div class="person">
    <h2>aaa</h2>
    <h3 ref="aaa">bbb</h3>
    <!-- 改为ref -->
    <h4>ccc</h4>
    <button v-on:click="add">点我</button>
  </div>
</template>

<script setup lang="ts" name="Person">
import { ref, defineExpose } from 'vue'

// 创建一个ref对象，用于存储ref标记的内容
let aaa = ref()

function add() {
  console.log(aaa.value) // 通过ref获取元素，获取局部样式（删掉scoped就没有了）
}

defineExpose({
  aaa,
}) // 定义暴露的属性和方法
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
