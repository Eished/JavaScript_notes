// 面试题目一

async function async1() {
  console.log('async1 start') // 2
  await async2()
  console.log('async1 end') // 7
}

async function async2() {
  console.log('async2') // 3
}

console.log('script start') // 1

setTimeout(function () {
  console.log('setTimeout0')
}, 0) // 12

setTimeout(function () {
  console.log('setTimeout2')
}, 300) // 13

setImmediate(() => console.log('setImmediate')) // 11

process.nextTick(() => console.log('nextTick1')) // 9

async1() // 2

new Promise(function (resolve) {
  console.log('promise1') // 4
  resolve()
  console.log('promise2') // 5
}).then(function () {
  console.log('promise3') // 8
})

process.nextTick(() => console.log('nextTick2')) // 10

console.log('script end') // 6

/**
 * script start
async1 start
async2
promise1
promise2
script end
async1 end
promise3
nextTick1
nextTick2
setImmediate
setTimeout0
setTimeout2
 */
