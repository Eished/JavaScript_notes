// function loadScript (src, callback) {
//   let script = document.createElement('script')
//   script.src = src
//   script.onload = () => {
//     callback(src)
//   }
//   document.head.append(script)
// }

// function test (name) {
//   console.log(name)
// }
// loadScript('./1.js', function (script) {
//   loadScript('./2.js', function (script) {
//     loadScript('./3.js', function (script) {
//       test('log')
//     })
//   })
// })

// function loadScript (src) {
//   // penging, undefined
//   return new Promise((resolve, reject) => {
//     let script = document.createElement('script')
//     script.src = src
//     script.onload = () => resolve(src) // 状态：fullfilled, 结果： result
//     script.onerror = (err) => reject(err) // 状态：rejected,结果： error
//     document.head.appendChild(script)
//   })
// }

// loadScript('./1.js')
//   .then(() => {
//     return loadScript('./4.js')
//   }, (err) => {
//     console.log(err)
//   })
//   .then(() => {
//     return loadScript('./3.js')
//   }, (err) => {
//     console.log(err)
//   })

// // promise,then(onFullfilled,onRejected) // onFullfilled 必选

// function test (bool) {
//   if (bool) {
//     return new Promise(resolve => {
//       resolve(20)
//     })
//   } else {
//     return Promise.reject(new Error('myError'))
//   }
// }
// test(0).then((value) => {
//   console.log(value)
// }, (err) => {
//   console.log(err)
// })

// function loadScript (src) {
//   // penging, undefined
//   return new Promise((resolve, reject) => {
//     let script = document.createElement('script')
//     script.src = src
//     script.onload = () => resolve(src) // 状态：fullfilled, 结果： result
//     script.onerror = (err) => reject(err) // 状态：rejected,结果： error
//     document.head.appendChild(script)
//   })
// }

// loadScript('./1.js')
//   .then(() => {
//     return loadScript('./2.js')
//   })
//   .then(() => {
//     return loadScript('./30.js')
//   })
//   .catch(err => {
//     console.log(err)
//   })

// All 操作
// function loadScript (src) {
//   // penging, undefined
//   return new Promise((resolve, reject) => {
//     let script = document.createElement('script')
//     script.src = src
//     script.onload = () => resolve(src) // 状态：fullfilled, 结果： result
//     script.onerror = (err) => reject(err) // 状态：rejected,结果： error
//     document.head.appendChild(script)
//   })
// }

// const p1 = loadScript('./2.js')
// const p2 = loadScript('./1.js')
// const p3 = loadScript('./3.js')
// Promise.all([p2, p1, p3]).then((value) => {
//   console.log(value, 'log')
// })

// race
const p1 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve(1)
    }, 3000)
  })
}
const p2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve(2)
    }, 2000)
  })
}
Promise.race([p1(), p2()]).then((value) => {
  console.log(value)
})
