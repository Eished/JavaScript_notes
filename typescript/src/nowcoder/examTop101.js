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
// BM17()

function BM23() {
  // 二叉树的前序遍历
  class TreeNode {
    constructor(val) {
      this.val = val
      this.left = null
      this.right = null
    }
  }

  function preorderTraversal(root) {
    const result = []

    function traverse(node) {
      if (node === null) {
        return
      }
      // 访问当前节点的值
      result.push(node.val)
      // 递归遍历左子树
      traverse(node.left)
      // 递归遍历右子树
      traverse(node.right)
    }

    traverse(root) // 从根节点开始遍历

    return result
  }

  // 创建一个二叉树
  const root = new TreeNode(1)
  root.left = new TreeNode(2)
  root.right = new TreeNode(3)
  root.left.left = new TreeNode(4)
  root.left.right = new TreeNode(5)

  // 执行前序遍历
  const result = preorderTraversal(root)
  console.log(result) // 输出 [1, 2, 4, 5, 3]
}
// BM23()

function match() {
  const str = 'aeiou wolppzxc alwmdf String prototype'
  const result = str.match(/a|e|i|o|u/g)
  console.log(result, result.length)
}
// match()

function getMaxDepth() {
  const arr = [1, 1, [2, 2], [2, [3, 3, [4, 4], [4, [5, 5]]]]]
  const depth = []
  const getDepth = (arr, deep) => {
    arr.forEach((a) => {
      if (Array.isArray(a)) {
        getDepth(a, deep + 1)
      } else {
        depth.push(deep)
      }
    })
  }

  getDepth(arr, 1)
  console.log(Math.max(...depth))
}
getMaxDepth()
