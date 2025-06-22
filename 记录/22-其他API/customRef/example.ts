import { clear } from 'console'
import { customRef } from 'vue'

export default function (a: string, timenumber: number) {
  // track和trigger是响应式系统的两个核心函数
  // track用于收集依赖，trigger用于触发更新
  let timer: ReturnType<typeof setTimeout> // 定义一个定时器变量
  let re = customRef((track, trigger) => {
    return {
      // 获取值
      get() {
        track() // 收集依赖，告诉vue这个值很重要，你得好好追踪它
        return a
      },
      // 设置值
      set(value) {
        clearTimeout(timenumber) // 清除之前的定时器
        timer = setTimeout(() => {
          a = value // 更新值
          trigger() // 触发更新，告诉vue这个值变了，你得重新渲染
        }, timenumber) // 1秒后更新
      },
    }
  })
  return { re }
}

// hooks + 自定义ref
