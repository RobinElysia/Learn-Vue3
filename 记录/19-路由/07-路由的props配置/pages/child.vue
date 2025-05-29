<!-- 在此接收参数 -->
<template></template>
<script>
import { useRoute } from 'vue-router'
import { toRefs } from 'vue'
let route = useRoute()
console.log(route)

// 响应式解构
let { id, b } = toRefs(route)

// 真样才能不解构直接用呢？就是不想写！直接就想用
defineProps(['childId', 'b']) // 这样就可以直接用childId和b了
</script>
<style scoped></style>
