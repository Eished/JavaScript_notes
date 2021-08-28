// let x = 1
// let y = 2
// let z = 8
// let obj = {
//   x: x,
//   y: y,
//   hello: function () {
//     console.log('hello ES5')
//   }
// }
// obj[z] = 3
// obj.hello()
// console.log(obj)

// let obj2 = {
//   x,
//   y,
//   [z + y]: 6,
//   hello () {
// 只能用常规函数
// 异步函数名称前加 *
//     console.log('hello ES6')
//   }
// }
// obj2.hello()
// console.log(obj2)

// let s = new Set([1, '2', 4])
// s.add('hellos').add('hellos').add('hellos2')
// s.delete('hellos')
// s.clear()
// console.log(s.has('hellos2'), s.size)
// console.log(s.values())
// console.log(s.keys())
// console.log(s.entries())
// s.forEach(item => {
//   console.log(item)
// })
// for (let item of s) {
//   console.log(item)
// }

// map
// let map = new Map([[1, 2], [2, 3]])
// // 添加
// map.set(3, 4)
// // 修改
// map.set(1, 5)
// // 删除
// map.delete(3)
// // console.log(map.size)
// // console.log(map.has(3))
// // console.log(map.get(2))
// // console.log(map.keys(), map.values(), map.entries())
// // map.forEach((value, key) => {
// //   console.log(value, key)
// // })
// for (let [key, value] of map) {
//   console.log(key, value)
// }
// let o = function () {
//   console.log('o')
// }
// map.set(o, 9)
// console.log(map.get(o))

// object copy
const target = {
  a: {
    b: {
      c: {
        d: 4
      }
    },
    e: 7
  },
  undefined: null
}
const source = {
  a: {
    b: {
      c: {
        null: null
      }
    }
  },
  f: 2
}
Object.assign(target, source)
console.log(target, 'source')
