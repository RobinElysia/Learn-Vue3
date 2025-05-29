<!-- 在此接收参数 -->
<template></template>
<script>
import { useRoute } from 'vue-router'
import { toRefs } from 'vue'
let route = useRoute()
console.log(route)

// 响应式解构
let { id, b } = toRefs(route)
</script>
<style scoped></style>
