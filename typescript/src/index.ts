import './utilityType'

const welcome = 'App is running...'

export function hello(who: string = welcome): string {
  return `[INFO] ${who}`
}

console.log(hello())
