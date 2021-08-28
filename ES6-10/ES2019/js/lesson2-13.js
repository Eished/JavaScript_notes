let authors = {
  allAuthors: {
    fiction: ['Agla', 'Skks', 'Lp'],
    scienceFiction: ['Neal', 'Arthru', 'Ribert'],
    fantasy: ['J.R.Tole', 'J.M.R', 'Terry P.K']
  },
  Addres: []
}

// // ES5
// let r = []
// for (let [k, v] of Object.entries(authors.allAuthors)) {
//   r = r.concat(v)
// }
// console.log(r)

// authors is not iterable(迭代)
// ES6
// authors[Symbol.iterator] = function () {
//   let allAuthors = this.allAuthors
//   let keys = Reflect.ownKeys(allAuthors)
//   let values = []
//   return {
//     next () {
//       if (!values.length) {
//         if (keys.length) {
//           values = allAuthors[keys[0]]
//           keys.shift()
//           console.log(values, keys)
//         }
//       }
//       return {
//         done: !values.length,
//         value: values.shift()
//       }
//     }
//   }
// }

// 使用 Generator 给自定义数据结构写个遍历器
authors[Symbol.iterator] = function * () {
  let allAuthors = this.allAuthors
  let keys = Reflect.ownKeys(allAuthors)
  let values = []
  while (true) {
    if (!values.length) {
      if (keys.length) {
        values = allAuthors[keys[0]]
        keys.shift()
        yield values.shift()
      } else {
        return false
      }
    } else {
      yield values.shift()
    }
  }
}

let r = []
for (let v of authors) {
  r.push(v)
}
console.log(r)
