import { defineStore } from 'pinia'

// 这是选项式写法
// const UseCountStore = defineStore('count', {
//   // 第一个值与文件名保持一致
//   state: () => ({
//     count: 0,
//   }), // 定义状态，返回一个对象，一般是存储数据的地方
//   actions: {
//     increment() {
//       this.count++
//     },
//     decrement() {
//       this.count--
//     },
//   },
//   getters: {
//     doubleCount: (state) => state.count * 2, // 定义计算属性
//     isEven: (state) => state.count % 2 === 0, // 判断是否为偶数
//     // 或者使用this而不用state，但前提是不用箭头函数
//     // state必须写
//     // 到时候解构的时候可以直接解构函数名
//   },
// })

// 这是组合式写法
import { ref } from 'vue'
const UseCountStore = defineStore('count', () => {
  let count = ref(0)
  // 直接写函数，相当于actions
  async function increment() {
    count.value++
  }
  async function decrement() {
    count.value--
  }
  return {
    // 返回一个对象，里面包含状态、函数等
    count,
    increment,
    decrement,
  }
})
export default UseCountStore // 导出定义的store
