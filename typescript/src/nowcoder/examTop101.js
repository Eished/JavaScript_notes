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
