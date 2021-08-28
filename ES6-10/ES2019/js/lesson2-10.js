// console.log(Math.floor.apply(null, [3.111]))

// console.log(Reflect.apply(Math.floor, null, [2.33]))

// let price = 90.12
// console.log(Reflect.apply(price > 100 ? Math.floor : Math.ceil, null, [price]))

// let d = Reflect.construct(Date, [])
// console.log(d.getTime(), d instanceof Date)

// const student = {}
// const r2 = Object.defineProperty(student, 'name', { value: 'Mike' })
// // console.log(student)
// const r = Reflect.defineProperty(student, 'name', { value: 'Mike2' })
// console.log(student, r, r2)

// const obj = { x: 1, y: 2 }
// Reflect.deleteProperty(obj, 'x')
// console.log(obj)
// console.log(Reflect.get(obj, 'y'))
// console.log(Reflect.get([3, 4], 1))

const obj = {
  x: 1,
  y: 2
}
// console.log(Reflect.getOwnPropertyDescriptor(obj, 'x'))
// console.log(Object.getOwnPropertyDescriptor(obj, 'y'))

// let d = new Date()
// console.log(Reflect.getPrototypeOf(d))
// console.log(Object.getPrototypeOf(obj))

// console.log(Reflect.has(obj, 'y'))
// Object.freeze(obj)
// obj.z = 3

// console.log(Reflect.isExtensible(obj), obj)
// console.log(Reflect.ownKeys(obj))
// console.log(Reflect.ownKeys([1, 2, 3]))
// Symbol

// Reflect.preventExtensions(obj) // 效果和 freeze 相同
// console.log(Reflect.isExtensible(obj))

Reflect.set(obj, 'z', 1)
console.log(obj)
const arr = ['a', 'w', 's']
Reflect.set(arr, 3, 'oioo')
console.log(arr)

console.log(Reflect.getPrototypeOf(arr))
Reflect.setPrototypeOf(arr, String.prototype)
console.log(Reflect.getPrototypeOf(arr))