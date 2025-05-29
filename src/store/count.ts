import { defineStore } from 'pinia'

const UseCountStore = defineStore('count', {
  // 第一个值与文件名保持一致
  state: () => ({
    count: 0,
  }), // 定义状态，返回一个对象，一般是存储数据的地方
  actions: {
    increment() {
      this.count++
    },
    decrement() {
      this.count--
    },
  },
  getters: {
    doubleCount: (state) => state.count * 2, // 定义计算属性
    isEven: (state) => state.count % 2 === 0, // 判断是否为偶数
    // 或者使用this而不用state，但前提是不用箭头函数
    // state必须写
    // 到时候解构的时候可以直接解构函数名
  },
})

export default UseCountStore // 导出定义的store
