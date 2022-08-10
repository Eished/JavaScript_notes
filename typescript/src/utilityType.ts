/* eslint-disable @typescript-eslint/no-unused-vars */
enum Direction {
  up = 'up',
  left = 'left',
  right = 'right',
  down = 'down',
}

interface Facing {
  front: string
  back: string
}

type Dev = {
  html: string
  css: string
}

type DirectionType = keyof typeof Direction

// Partial
const directionPartial: Partial<DirectionType> = 'down'

// Readonly
const directionReadonly: Readonly<Facing> = {
  front: '1',
  back: '2',
}
// directionReadonly.back = 3

// Record
const directionRecord: Record<DirectionType, string> = {
  right: '-90',
  left: '90',
  up: '180',
  down: '0',
}

const facingRecord: Partial<Record<keyof Facing, string>> = {
  front: 'f',
}

// Pick
// const directionPick: Pick<Direction, 0> = {
//   up: '180',
// }
enum KeysToBePickedFrom {
  KEY_ONE = 'Key One',
  KEY_TWO = 'Key Number Two',
  KEY_THREE = 'Another key n. 3',
  LAST_KEY = 'Here is the last Key',
}

type PickKey<T, K extends keyof T> = Extract<keyof T, K>

type Picked_KeysOfEnum = PickKey<typeof KeysToBePickedFrom, 'KEY_ONE' | 'LAST_KEY'>

interface KeysPickedForType {
  keyone: Picked_KeysOfEnum
}

const picks: KeysPickedForType = {
  keyone: 'KEY_ONE', //  KEY_ONE | LAST_KEY
}

// Omit
const directionOmit: Omit<DirectionType, 'up'> = 'up' // 无效
const directionOmit2: Omit<Direction, Direction.down> = 'down' // 无效
const facingOmit: Omit<Facing, 'front'> = {
  back: 'b',
}
const devOmit: Omit<Dev, 'html'> = { css: 'css' }

// Exclude
type UnionType = DirectionType | Facing | Dev
const directionExclude: Exclude<DirectionType, 'up'> = 'down'
const unionTypeExclude: Exclude<UnionType, DirectionType> = {
  html: 'html',
  css: 'css',
}
// const facingExclude: Exclude<Facing, 'front'> = {
//   back: 'b',
// }
// const devExclude: Exclude<Dev, 'html'> = { css: 'css' }

// Extract
type DirectionExtract = Extract<DirectionType, 'up'>
const directionExtract: DirectionExtract = 'up'
const unionTypeExtract: Extract<UnionType, Dev> = {
  html: 'html',
  css: 'css',
}
