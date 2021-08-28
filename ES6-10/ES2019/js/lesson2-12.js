// ES5
// function loop () {
//   for (let i = 0; i < 5; i++) {
//     console.log(i)
//   }
// }
// loop()

// // ES6
// function * loop () {
//   for (let i = 0; i < 5; i++) {
//     yield console.log(i)
//   }
// }
// const l = loop()
// l.next()
// l.next()
// l.next()
// l.next()
// l.next()
// l.next()

// 语法 yeild 本身没有返回值
// function * gen () {
//   let val
//   val = yield 1
//   console.log(val)
// }
// const l = gen()
// l.next()
// l.next()

// next() 的返回值
// function * gen () {
//   let val
//   val = (yield [3, 2, 1]) + 9
//   console.log(val)
// }
// const l = gen()
// console.log(l.next(10))
// console.log(l.return())
// console.log(l.next(20))

// 使用 new Error() 终止循环
// function * gen () {
//   while (true) {
//     try {
//       yield 1
//     } catch (e) {
//       console.log(e.message)
//     }
//   }
// }
// const g = gen()
// console.log(g.next())
// console.log(g.next())
// console.log(g.next())
// console.log(g.next())
// g.throw(new Error('ss'))
// console.log(g.next())

// // 练习-抽奖函数-ES5
// function draw (first = 1, second = 3, third = 5) {
//   let firstPrice = ['1A', '1B', '1C', '1D', '1E']
//   let secondPrice = ['3A', '2B', '2C', '2D', '2E', '2F', '2G', '2H', '2I', '2J', '2K']
//   let thirdPrice = ['3A', '3B', '3C', '3D', '3E', '3F', '3G', '3H', '3I', '3J', '3K', '3L', '3M', '3N']
//   let random
//   let result = []

//   // 抽一等奖
//   for (let i = 0; i < first; i++) {
//     random = Math.floor(Math.random() * firstPrice.length)
//     result = result.concat(firstPrice.splice(random, 1))
//   }
//   // 抽二等奖
//   for (let i = 0; i < second; i++) {
//     random = Math.floor(Math.random() * secondPrice.length)
//     result = result.concat(secondPrice.splice(random, 1))
//   }
//   // 抽三等奖
//   for (let i = 0; i < third; i++) {
//     random = Math.floor(Math.random() * thirdPrice.length)
//     result = result.concat(thirdPrice.splice(random, 1))
//   }
//   return result
// }

// let t = draw()
// for (let value of t) {
//   console.log(value)
// }

// // 练习-抽奖函数-ES6
// function * draw (first = 1, second = 3, third = 5) {
//   let firstPrice = ['1A', '1B', '1C', '1D', '1E']
//   let secondPrice = ['3A', '2B', '2C', '2D', '2E', '2F', '2G', '2H', '2I', '2J', '2K']
//   let thirdPrice = ['3A', '3B', '3C', '3D', '3E', '3F', '3G', '3H', '3I', '3J', '3K', '3L', '3M', '3N']
//   let count = 0
//   let random

//   while (true) {
//     if (count < first) {
//       random = Math.floor(Math.random() * firstPrice.length)
//       yield firstPrice[random]
//       count++
//       firstPrice.splice(random, 1)
//     } else if (count < first + second) {
//       random = Math.floor(Math.random() * secondPrice.length)
//       yield secondPrice[random]
//       count++
//       secondPrice.splice(random, 1)
//     } else if (count < first + second + third) {
//       random = Math.floor(Math.random() * thirdPrice.length)
//       yield thirdPrice[random]
//       count++
//       thirdPrice.splice(random, 1)
//     } else {
//       return false
//     }
//   }
// }
// const d = draw()
// console.log(d.next().value)
// console.log(d.next().value)
// console.log(d.next().value)
// console.log(d.next().value)
// console.log(d.next().value)
// console.log(d.next().value)
// console.log(d.next().value)
// console.log(d.next().value)
// console.log(d.next().value)
// console.log(d.next().value)

// // 练习-数到三的人喝酒
// function * count (x = 1) {
//   while (true) {
//     if (x % 3 === 0) {
//       yield x
//     }
//     x++
//   }
// }
// let num = count()
// console.log(num.next().value)
// console.log(num.next().value)
// console.log(num.next().value)

// 用 Generator 实现一个斐波那契数列 1,1,2,3,5,8,13...
function * draw () {
  let n1 = 1
  let n2 = 1
  let n3 = 0
  while (true) {
    yield n3 = n1 + n2
    n1 = n2
    n2 = n3
  }
}
let d = draw()
console.log(d.next().value)
console.log(d.next().value)
console.log(d.next().value)
console.log(d.next().value)
console.log(d.next().value)
console.log(d.next().value)
