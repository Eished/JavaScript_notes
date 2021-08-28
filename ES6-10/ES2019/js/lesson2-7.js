// const a = 20
// const b = 10
// const c = 'javascript'

// // const str = 'my age is ' + (a + b) + ' i love' + c
// const str = `my age is ${a + b} i love ${c}`
// console.log(str)

// const retailPrice = 20
// const wholeSalePrice = 16
// const type = 'retail'
// let showTxt = ''
// if (type === 'retail') {
//   showTxt = '单价是：' + retailPrice
// } else {
//   showTxt = '批发价是：' + wholeSalePrice
// }
// console.log(showTxt)

function Price (strings, type) {
  let s1 = strings[0]
  const retailPrice = 20
  const wholeSalePrice = 16
  let showTxt = ''
  if (type === 'retail') {
    showTxt = '单价是：' + retailPrice
  } else {
    showTxt = '批发价是：' + wholeSalePrice
  }
  return `${s1}${showTxt}`
}
let showTxt = Price`您此次的${'retail'}`
console.log(showTxt)

let s1 = `我是第一行
我是第二行`
console.log(s1)
