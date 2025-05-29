<template>
  <div class="person">
    <h2>{{ sum }}</h2>
    <button @click="sumadd">+</button>
    <hr />
    <img v-for="(key, index) in DogList" :src="key" :key="index" />
    <button @click="addDog">再来一只</button>
  </div>
</template>

<script setup lang="ts" name="Person">
import useDog from '@/hooks/useDog' // 引入hooks
import useSum from '@/hooks/useSum' // 引入hooks

const { DogList, addDog } = useDog() // 解构
const { sum, sumadd } = useSum() // 解构
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
