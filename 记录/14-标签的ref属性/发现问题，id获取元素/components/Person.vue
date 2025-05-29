<template>
  <div class="person">
    <h2>aaa</h2>
    <h3 id="aaa">bbb</h3>
    <!-- 不建议使用id操作，见App文件 -->
    <h4>ccc</h4>
    <button v-on:click="add">点我</button>
  </div>
</template>

<script setup lang="ts" name="Person">
import { ref, watch, watchEffect } from 'vue'
function add() {
  console.log(document.getElementById('aaa')) // 通过JS普通DOM操作获取元素
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
