// 定义一个接口，用于限制Person对象的属性
export interface Person {
  id: number
  name: string
  age: number
}

// 定义一个自定义类型
// export type Persons = Array<Person>
export type Persons = Person[]
// export 导出
