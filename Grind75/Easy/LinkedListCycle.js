// * Linked List Cycle
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  let pointer1 = head;
  let pointer2 = head?.next;
  while (pointer1?.next && pointer2?.next?.next) {
    if (pointer1 === pointer2) return true;
    if (pointer1.next) pointer1 = pointer1.next;
    if (pointer2.next.next) pointer2 = pointer2.next.next;
  }
  return false;
};
