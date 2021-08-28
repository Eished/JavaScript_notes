function all(text) {
  return new Promise((resolve) => {
    run(text, resolve);
  })
}

function run(text, resolve) {
  setTimeout(() => {
    i++;
    console.log(i);
    if (i == limit) {
      resolve(text);
      return;
    }
    run(text, resolve);
  }, 1000)
}

let i = 0;
let limit = 2;

all("hello").then((d) => {
  console.log(d);
});