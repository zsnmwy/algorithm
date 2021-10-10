/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * ListNode
 * @param val
 * @param next
 * @constructor
 */
function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const mergeTwoLists = function(l1, l2) {

  // 两个有序链表之间的重排序。
  // 通过比较两个链表的单个节点值来重新构建一个新的升序链表。

  // 通过递归来完成该操作，那么就意味着，
  // 每次执行一次递归的时候，就判定好下一个节点的位置。不需要管之前的链表。
  // 只需要将还是无序的链表向下传就行了。
  // 在出栈的时候，会不断地返回有序的链表。只要将链表与之前的组装好，那么就得到一个合并的升序链表。

  // 一个链表为空的时候，直接返回另外一个链表。不再向后面递归。
  if (!l2) return l1
  if (!l1) return l2

  // 每次判断两个链表剩余的头节点大小
  if (l1.val >= l2.val) {
    // mergeTwoLists 返回的都是有序的链表
    l2.next = mergeTwoLists(l1, l2.next)
    return l2
  } else {
    // mergeTwoLists 返回的都是有序的链表
    l1.next = mergeTwoLists(l1.next, l2)
    return l1
  }

}
