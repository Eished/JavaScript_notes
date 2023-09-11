// 面试必刷TOP101
// https://www.nowcoder.com/exam/oj?page=1

function BM1() {
  class ListNode {
    constructor(x) {
      this.val = x
      if (x < 3) {
        this.next = new ListNode(x + 1)
      }
    }
  }

  function ReverseList(head) {
    // write code here
    let pre = null
    let cur = head
    while (cur) {
      // 前插法
      const nextTemp = cur.next
      cur.next = pre // 反转当前节点
      pre = cur // 前置节点后移
      cur = nextTemp // 当前节点后移
    }
    return pre
  }

  console.log(new ListNode(1))
  console.log(ReverseList(new ListNode(1)))
}
// BM1()

function BM17() {
  // 二分查找
  const target = 13
  const arr = [-1, 0, 3, 4, 6, 10, 13, 14]

  const search = function (nums, target) {
    // 在区间[left,right]中查找元素，左闭右闭
    let left = 0
    let right = nums.length - 1
    while (left <= right) {
      // 计算中间点
      let mid = parseInt(left + (right - left) / 2)
      if (target == nums[mid]) {
        return mid
        // 如果target < nums[mid]，表示目标值可能在左半边
      } else if (target < nums[mid]) {
        right = mid - 1
        // 如果target > nums[mid]，表示目标值可能在右半边
      } else if (target > nums[mid]) {
        left = mid + 1
      }
    }
    // 未找到返回-1
    return -1
  }

  console.log(search(arr, target))
}
BM17()

function BM23() {
  console.log(1)
}
