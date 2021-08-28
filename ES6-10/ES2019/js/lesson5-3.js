// // spread
// const input = {
//   a: 1,
//   b: 2
// }

// const test = {
//   d: 5
// }

// const output = {
//   // spread 扩展, 是深拷贝, 不是引用
//   ...input,
//   ...test,
//   c: 3
// }

// console.log(input, output)
// input.a = 4
// console.log(input, output)

// rest
const input = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
}

const { a, b, ...rest } = input
console.log(a, b, rest)
