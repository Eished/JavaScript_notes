// Promise 生成器
function Gen (time) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      if (time < 500) {
        reject(time)
      } else {
        resolve(time)
      }
    }, time)
  })
}
// 异步调用函数 无论成功还是失败都会执行 finally 的内容
Gen(Math.random() * 1000)
  .then(val => console.log('resolve', val))
  .catch(err => console.log('reject', err))
  .finally(() => {
    console.log('finish')
  })
