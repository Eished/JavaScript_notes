export function hi() {
  console.log(`Hello`);
}

export function bye() {
  console.log(`Bye`);
}

export default function () {
  console.log("Module loaded (export default)!");
}

export {
  run,
  say
}
from "./lesson2-14-mod";