// let o = {
//   name: 'xiaoming',
//   price: 190
// }
// let d = new Proxy(o, {
//   get (target, key) {
//     if (key === 'price') {
//       return target[key] + 20
//     } else {
//       return target[key]
//     }
//   }
// })
// console.log(d.price, d.name)

// let o = {
//   name: 'xiaoming',
//   price: 190
// }
// let d = new Proxy(o, {
//   get (target, key) {
//     return target[key]
//   },
//   set (target, key, value) {
//     return false
//   }
// })
// d.price = 700
// console.log('拦截赋值操作:', d.price, d.name)

// ES5 中完全禁止修改元素属性
// for (let [key] of Object.entries(o)) {
//   Object.defineProperty(o, key, {
//     writable: false
//   })
// }
// o.price = 300
// console.log(o.name, o.price)

// // 拦截 校验
// let o = {
//   name: 'xiaoming',
//   price: 190
// }
// // 监听错误
// window.addEventListener('error', (e) => {
//   console.log(e.message)
//   // report('./')
// }, true)
// // 按功能模块化
// let validator = (target, key, value) => {
//   if (Reflect.has(target, key)) {
//     if (key === 'price') {
//       if (value > 300) {
//         // 不满足条件触发错误
//         throw new TypeError('price exceed 300')
//       } else {
//         target[key] = value
//       }
//     } else {
//       target[key] = value
//     }
//   } else {
//     return false
//   }
// }
// let d = new Proxy(o, {
//   get (target, key) {
//     return target[key] || ''
//   },
//   set: validator
// })
// d.price = 320
// d.name = 'lisi'
// d.age = 123
// console.log(d.price, d.name, d.age)

// // 代理生成ID, 随机\唯一\只读
// class Component {
//   constructor () {
//     this.proxy = new Proxy({
//       id: Math.random().toString(36).slice(-8)
//     }, {})
//   }
//   get id () {
//     return this.proxy.id
//   }
// }
// let com = new Component()
// let com2 = new Component()
// for (let i = 0; i < 10; i++) {
//   console.log(com.id, com2.id)
// }
// com.id = 'abc'
// console.log(com.id, com2.id)

// 可撤销代理
let o = {
  name: 'xiaoming',
  price: 190
}
let d = Proxy.revocable(o, {
  get (target, key) {
    if (key === 'price') {
      return target[key] + 20
    } else {
      return target[key]
    }
  }
})
console.log(d)
console.log(d.proxy.price)
console.log(d.revoke)
setTimeout(function () {
  d.revoke()
  setTimeout(function () {
    console.log(d.proxy.price)
  }, 100)
}, 1000)
