// // 自由变量示例 —— 内存会被释放
// let a = 0
// function fn1() {
//     let a1 = 100

//     function fn2() {
//         let a2 = 200

//         function fn3() {
//             let a3 = 300
//             return a + a1 + a2 + a3
//         }
//         fn3()
//     }
//     fn2()
// }
// fn1()

// // 闭包 函数作为返回值 —— 内存不会被释放
// function create() {
//     let a = 100
//     return function () {
//         console.log(a)
//     }
// }
// let fn = create()
// let a = 200
// fn() // 100

function print(fn) {
    let a = 200
    fn()
}
let a = 100
function fn() {
    console.log(a)
}
print(fn) // 100