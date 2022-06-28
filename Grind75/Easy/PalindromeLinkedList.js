/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  const stack = [];
  let current = head;
  while (current) {
    if (current.val !== null) stack.push(current.val);
    current = current.next;
  }
  current = head;
  while (current) {
    const stackElement = stack.pop();
    if (current.val !== stackElement) return false;
    current = current.next;
  }
  return true;
};
