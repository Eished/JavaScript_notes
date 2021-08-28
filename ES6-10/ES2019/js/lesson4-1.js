// async function firstAsync () {
//   return 27
//   // return Promise.resolve(28)
// }

// firstAsync().then(val => {
//   console.log(val)
// })

// console.log(firstAsync() instanceof Promise)

// await 异步操作
async function firstAsync () {
  let promise = new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve('now it is done')
    }, 1000)
  })
  console.log(await promise)
  console.log(await Promise.resolve(48))
  console.log(2)
  return Promise.resolve(28)
}

firstAsync().then(val => {
  console.log(val)
})
