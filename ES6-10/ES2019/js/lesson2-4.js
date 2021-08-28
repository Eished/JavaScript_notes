// function fn(x, y, z) {
//   if (y === undefined) {
//     y = 3
//   }
//   if (z === undefined) {
//     z = 4
//   }
//   return x + y + z
// }
// console.log(fn(2, 10, 30))

// 没有参数的往前写，否则默认没参数的为字符串类型
// function fn(x, y, z = x + y) {
//   // ES6中废弃arguments
//   // console.log(Array.from(arguments))
//   // fn.length 可以获取到定义过的没有默认值的参数个数
//   console.log(fn.length)

//   return x + y + z
// }
// console.log(fn(10, 10, 10))
// console.log(fn(10, 10, undefined), 4, 12)

// 怎么处理不确定参数？
// ES5
// function sum() {
//   let num = 0
//   Array.prototype.forEach.call(arguments, function (item) {
//     num += item * 1
//   })
//   return num
// }
// console.log(sum(1, 2, 3, 4))

// ES6
// function sum(base, ...nums) {
//   // "...nums" Rest parameter 用来获取所有参数：函数执行时的参数，是数组，参数可以分别使用
//   let num = 0
//   nums.forEach(function (item) {
//     num += item * 1
//   })
//   return num + base * 2
// }
// console.log(sum(1, 2, 3, 4))

// rest参数的逆运算
// ES5
// function sum (x = 1, y = 2, z = 3) {
//   return x + y + z
// }
// let data = [1, 2, 3]
// console.log(sum.apply(this, data))
// ES6
// spread
// console.log(sum(...data))

// let hello = (name, city) => {
//   console.log(name, 'hello', city)
// }
// hello('zhangsan', 'imooc')
// // 只有一个参数省略括号
// let hi = name => {
//   console.log(name)
// }
// hi('zhangsan')
// // 后面是表达式，省略花括号
// let sum = (x, y, z) => x + y + z
// console.log(sum(1, 2, 3))
// // 以对象返回数据，小括号相当于表达式，花括号是对象的
// let sum2 = (x, y, z) => ({
//   x: x,
//   y: y,
//   z: z
// })
// console.log(sum2(1, 2, 3))
// // webpack eval 让 this 指向了空对象
// // ES6 中this 指向写函数时的对象
// let test = {
//   name: 'test',
//   say: () => {
//     console.log(this.name)
//   }
// }
// test.say()

let arr = Array.of(1, 2, 3, 4)
arr.forEach((item) => {
  console.log(item)
})
