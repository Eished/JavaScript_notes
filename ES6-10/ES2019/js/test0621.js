const waitFor = (ms) => new Promise(r => setTimeout(r, ms));

// function func() {
//   [1, 2, 3].forEach(async (num) => {
//     await waitFor(1000);
//     console.log(num);
//   });
//   console.log('Done');
// }
// async function func() {
//   const array = [1, 2, 3];
//   for (let index = 0; index < array.length; index++) {
//     await waitFor(1000);
//     console.log(index);
//   }
//   console.log('Done');
// }
// func()

// const waitFor = (ms) => new Promise(r => setTimeout(r, ms));
// [1, 2, 3].forEach(async (num) => {
//   await waitFor(1000);
//   console.log(num);
// });
// console.log('Done');

// function waitFor(foo, ms) {
//   return new Promise((r, s) => setInterval(foo, ms));
// }