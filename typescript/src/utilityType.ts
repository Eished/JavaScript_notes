export const enum Direction {
  up = 'up',
  left = 'left',
  right = 'right',
  down = 'down',
}

type DirectionType = keyof typeof Direction

const directionToRotation: Record<DirectionType, string> = {
  right: '-90',
  left: '90',
  up: '180',
  down: '0',
}
