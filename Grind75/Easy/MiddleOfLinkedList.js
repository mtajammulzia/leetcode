/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
  let pointer1 = head;
  let pointer2 = head;
  while (pointer1?.next && pointer2?.next?.next) {
    if (pointer1.next) pointer1 = pointer1.next;
    if (pointer2.next.next) pointer2 = pointer2.next.next;
  }
  if (pointer2.next) return pointer1.next;
  return pointer1;
};
