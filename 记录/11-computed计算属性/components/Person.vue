<template>
  <div class="person">
    性：<input type="text" v-model="fname" /> <br />
    名：<input type="text" v-model="lname" /> <br />
    全名：<span> {{ fullName }} </span> <br />
    全名：<span> {{ fullName }} </span> <br />
    <button @click="change">改全</button>
  </div>
  <!-- v-model是双向绑定，v-value是单向绑定 -->
  <!-- 尽可能然模板简单 -->
</template>

<script setup lang="ts" name="Person">
import { ref, computed } from 'vue'

let fname = ref('zhang')
let lname = ref('San')

// 只读写法

// let fullName = computed(() => {
//   // 但是现在目前整个fullName不可改，但是fname和lname可以改
//   console.log('计算属性被调用了') // 计算属性不会被调用多次，有缓存，但是方法没有缓存
//   // 计算属性
//   return fname.value.slice(0, 1).toUpperCase() + fname.value.slice(1) + lname.value // 必须有返回值
// })

// 可读可写

let fullName = computed({
  get() {
    return fname.value.slice(0, 1).toUpperCase() + fname.value.slice(1) + ' ' + lname.value
  },

  set(val) {
    const [f, l] = val.split(' ')
    fname.value = f
    lname.value = l
    console.log('set', val)
  },
})

function change() {
  console.log(fullName.value) // 计算属性底层还是ref
  fullName.value = 'li si' // 计算属性不能改
  // 计算属性是只读的，不能直接修改
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
