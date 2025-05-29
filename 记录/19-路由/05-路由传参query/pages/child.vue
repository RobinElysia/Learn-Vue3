<!-- 在此接收参数 -->
<template></template>
<script>
import { toRef } from 'vue'
import { useRoute } from 'vue-router'
let route = useRoute()
console.log(route) // { a: 'hahah', b: '123' }

// 直接使用
// let a = route.query.a
// let b = route.query.b
// 但是这是死值

// 响应式解构赋值
let { query } = toRef(route)
</script>
<style scoped></style>
