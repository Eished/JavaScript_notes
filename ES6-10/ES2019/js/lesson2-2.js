for (var i = 0; i < 3; i++) {
  setTimeout(function () {
    // console.log(i)
  }, 1000)
}

// console.log(a)
// let a = 9
// console.log(a)
// let array = Array.from({ length: 5}, function () { return 1})
// console.log(array)
// let array = Array.of(1, 4, 5, 2, 67)
// console.log(array)
// let array = Array(10).fill(1)
// console.log(array.fill(9, 5, 8))

let array = Array.of(1, 4, 5, 2, 67)
// let find = array.filter(function (item) {
//   return item % 2 === 0
// })
let find = array.findIndex(function (item) {
  return item === 0
})
console.log(find);