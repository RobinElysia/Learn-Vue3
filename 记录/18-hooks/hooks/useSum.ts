import { ref, reactive } from 'vue' // DefineProps的不需要引入
import { type Persons } from '@/types/index.ts' // 引入类型
import axios from 'axios'

export default function () {
  let sum = ref(0) // 定义响应式数据

  function sumadd() {
    sum.value++
  }
  return {
    sum,
    sumadd,
  }
}
