import './utilityType'

const world = 'world'

export function hello(who: string = world): string {
  return `Hello ${who}! `
}

console.log(hello(world))
