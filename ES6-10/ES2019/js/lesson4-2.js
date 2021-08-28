let grade = {
  'lilei': 95,
  'hanmei': 97,
  'lisi': 99
}

// Iterator方式遍历
// grade[Symbol.iterator] = function () {
//   let All = this
//   let keys = Reflect.ownKeys(grade)
//   let values = []
//   console.log(All, keys, values.length, '内部数据')
//   return {
//     next () {
//       if (!values.length) {
//         if (keys.length - 1) {
//           values.push(All[keys[0]])
//           keys.shift()
//           // console.log(values, values.length, All[keys[0]], keys, '内部')
//         }
//       }
//       return {
//         done: !values.length,
//         value: values.shift()
//       }
//     }
//   }
// }
// let result = []
// for (let v of grade) {
//   result.push(v)
// }
// console.log(result)

// ES6方式遍历
// let r = []
// for (let [, v] of Object.entries(grade)) {
//   r.push(v)
// }
// console.log(r)

// ES8方式
console.log(Object.keys(grade))
console.log(Object.values(grade))
console.log(Object.entries(grade))
