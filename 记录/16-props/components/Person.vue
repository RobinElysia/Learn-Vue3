<template>
  <div class="person">
    <h2>{{ list }}</h2>
    <ul>
      <li v-for="item in list" :key="item.id">
        {{ item.name }}
        - {{ item.age }} - {{ item.x }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts" name="Person">
import { withDefaults } from 'vue' // DefineProps的不需要引入
import { type Persons } from '@/types/index.ts' // 引入类型

// 只接受
// let p = defineProps(['a', 'list']) // 定义props，并接收
// console.log(p) // 打印props
// console.log(p.list) // 打印props

// 接收 并 限制类型
// defineProps<{ list: Persons }>() // 定义props，并接收

// 接收 + 限制类型 + 限制必要性 + 默认值
withDefaults(defineProps<{ list?: Persons }>(), {
  list: () => [
    {
      id: 1,
      name: 'aaa',
      age: 18,
    },
  ],
})
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
