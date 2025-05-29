import { reactive } from 'vue' // DefineProps的不需要引入
import axios from 'axios'

export default function () {
  let DogList = reactive([''])

  async function addDog() {
    try {
      // axios请求
      let re = await axios.get('https://dog.ceo/api/breeds/image/random')
      let data = re.data.message
      DogList.push(data)
    } catch (err) {
      alert('请求失败' + err)
    }
  }
  return {
    DogList,
    addDog,
  }
}
// 这里的函数是一个组合函数，返回了响应式数据和方法
