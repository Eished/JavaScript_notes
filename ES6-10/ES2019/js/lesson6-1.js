// 0xD800-0xDFFF 字符无法编码成UTF-8, 而显示错误, 现在以非编码形式转义存在
// console.log((JSON.stringify('\u{D800}')))

// let arr = [1, [2, 3], [4, 5, [6, 7, [8, 9]]]]

// flat扁平化, 按照指定深度递归遍历数组, 合并成一个新数组
// console.log(arr.flat(3))

// // map 对每个元素进行遍历 arr.map(item => item * 2)
// arr.flatMap()
// let arr = [[1], [2], [3]]
// console.log(arr.map(item => item * 2).flat())
// console.log(arr.flatMap(item => item * 2))

// // string 字符串
// let str = '   foo   '
// // console.log(str.replace(/^\s+|\s+$/g, '_'))
// console.log(str.trimStart())
// console.log(str.trimLeft())
// console.log(str.trimRight())
// console.log(str.trimEnd())
// console.log(str.trim())

// // matchAll 匹配
// let str = `"foo" and "bar" and "baz"`

// // ES5
// function select (reg, str) {
//   const matches = []
//   while (true) {
//     const match = reg.exec(str)
//     if (match === null) {
//       break
//     }
//     matches.push(match[1])
//   }
//   return matches
// }

// console.log(select(/"([^"]*)"/g, str))
// console.log(str.match(/"([^"]*)"/g))

// // ES5
// function select2 (reg, str) {
//   const matches = []
//   // replace 传入函数
//   str.replace(reg, function (all, first) {
//     matches.push(first)
//   })
//   return matches
// }

// console.log(select2(/"([^"]*)"/g, str))

// // ES10
// function select3 (reg, str) {
//   const matches = []
//   for (const match of str.matchAll(reg)) {
//     // console.log(match)
//     matches.push(match[1])
//   }
//   return matches
// }
// console.log(select3(/"([^"]*)"/g, str))

// Object Array 转换
const arr = [['foo', 1], ['bar', 2]]
console.log(arr[1][1])

const obj = Object.fromEntries(arr)
console.log(obj.bar)

// 案例2
const obj2 = {
  a: 1,
  b: 2,
  g: 3
}
// 对象使用数组方法: Object.entries转换成数组, 解构赋值并过滤, Object.fromEntries转换回对象
let res = Object.fromEntries(
  Object.entries(obj).filter(([key, val]) => key.length === 3)
)
console.log(res)

// ES5
try {

} catch (e) {

}

// ES10
try {

} catch {

}

// BigInt 处理超过 2^53 的数字
// const a=11n
// console.log(typeof a)
// "bigint"
