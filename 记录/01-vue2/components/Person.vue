<template>
  <div class="person">
    <h1>aa</h1>
    <h1>{{ name }}</h1>
    <h1>{{ age }}</h1>
    <button @click="changeAge">+1</button>
    <button @click="show">Show</button>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Person', // 组件名称，vue2选项式API
  // 但是写多了会出问题，Vue3是组合式，如果想要修改一个需求，需要去修改很多地方
  // vue2的选项式API是为了让你更好地组织代码，vue3的组合式API是为了让你更好地复用代码
  data() {
    // 数据
    return {
      name: 'John Doe',
      age: 30,
      occupation: 'Software Developer',
    }
  },
  methods: {
    // 方法
    show() {
      alert(this.occupation)
    },
    changeAge() {
      this.age += 1
    },
  },
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
