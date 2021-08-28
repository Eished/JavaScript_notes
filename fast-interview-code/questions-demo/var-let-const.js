// // 变量提升 ES5
// console.log(a) // undefined
// var a = 200

// var a
// console.log(a) // undefined
// a = 200

// 块级作用域
for (let i = 0; i < 10; i++) {
    let j = i + 1
}
console.log(j)
