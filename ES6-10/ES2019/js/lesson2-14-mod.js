// export const name = 'hello'
// export let addr = 'beijing'
// export let arr = [1, 2, 3]

// const name = 'hello3'
// let addr = 'Beijing'
// let arr = [1, 2, 3]

// export default name
// export {
//   addr,
//   arr
// }

// 导出函数
export function say(content) {
  console.log(content)
}

export function run() {
  console.log('I am running')
}

// const say = (content) => {
//   console.log(content)
// }
// const run = () => {
//   console.log('I am running')
// }
// export default say
// export {
//   run
// }

// 导出对象
// export default {
//   code: 0,
//   message: 'success'
// }

// const data = {
//   code: 1,
//   message: 'success'
// }
// const des = {
//   age: 20,
//   addr: 'Beijing'
// }

// export default {
//   data,
//   des
// }

// 导出类
// class Test {
//   constructor () {
//     this.id = 2
//   }
// }
// export default Test
// export {
//   Test
// }

// export default class Test {
//   constructor () {
//     this.id = 2
//   }
// }

// export default class {
//   constructor () {
//     this.id = 5
//   }
// }

// export class Test {
//   constructor () {
//     this.id = 2
//   }
// }

// 导出多个类,批量导入
// export class Test {
//   constructor () {
//     this.id = 6
//   }
// }
// export class Animal {
//   constructor () {
//     this.name = 'dog'
//   }
// }

// export default class Peiple {
//   constructor () {
//     this.id = 123
//   }
// }