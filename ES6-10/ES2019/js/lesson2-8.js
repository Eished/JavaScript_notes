// let arr = ['hello', 'world', 'three']
// let [firstName, , surName] = arr
// console.log(firstName, surName)

// let [firstName,, thirdName] = new Set([1, 2, 3, 4])
// console.log(firstName, thirdName)

// // 修改内容
// let user = {
//   name: 's',
//   surname: 't'
// };
// [user.name, user.surname] = [1, 2]
// console.log(user)
// for (let [k, v] of Object.entries(user)) {
//   // 隐式赋值，显式索引
//   console.log(k, v)
// }

// // 防止回收
// let arr = [1, 2, 3, 3, 4, 5, 6, 7]
// let [firstName, curName, ...last] = arr
// console.log(firstName, curName, last)

// // 无数据就是 未定义
// let arr = []
// // 解构赋值取决于里面有没有值
// let [firstName, curName, ...last] = arr
// console.log(firstName, curName, last)

// Object 的解构赋值
let options = {
  title: 'menu',
  width: 100,
  height: 200
}
let { title: title2, width = 130, height } = options
let { title, ...last } = options
console.log(title, last)

// 多层结构的解构赋值
// let options = {
//   size: {
//     width: 100,
//     height: 200
//   },
//   items: ['Cake', 'Donut'],
//   extra: true
// }
// let { size: { width, height }, items: [, item2], extra } = options
// console.log(width, height, item2, extra)
