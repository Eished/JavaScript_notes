function partition(arr, start, end) {
  // 以最后一个元素为基准
  const pivotValue = arr[end]
  let pivotIndex = start
  for (let i = start; i < end; i++) {
    if (arr[i] < pivotValue) {
      // 交换元素
      ;[arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]]
      // 移动到下一个元素
      pivotIndex++
    }
  }

  // 把基准值放在中间
  ;[arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]]
  return pivotIndex
}

function quickSortRecursive(arr, start, end) {
  // 终止条件
  if (start >= end) {
    return
  }

  // 返回 pivotIndex
  let index = partition(arr, start, end)

  // 将相同的逻辑递归地用于左右子数组
  quickSortRecursive(arr, start, index - 1)
  quickSortRecursive(arr, index + 1, end)
}
const array = [7, -2, 4, 7, 1, 3, 6, 5, 3, 0, -4, 2]
// quickSortRecursive(array, 0, array.length - 1)
// console.log(array)

const myQuickSort = (arr) => {
  if (arr.length <= 1) {
    return arr
  }
  const pivotIndex = Math.floor(arr.length / 2)
  const pivot = arr.splice(pivotIndex, 1)[0]
  const left = []
  const right = []

  arr.forEach((num) => {
    if (num < pivot) {
      left.push(num)
    } else {
      right.push(num)
    }
  })
  return myQuickSort(left).concat([pivot], myQuickSort(right))
}
console.log(myQuickSort(array))
