// * Merge Two Sorted Lists
//Definition for singly-linked list.
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
const mergeTwoLists = (list1, list2) => {
  const mergedList = new ListNode();
  let tail = mergedList;

  while (list1 && list2) {
    const val1 = list1.val;
    const val2 = list2.val;
    if (val1 > val2) {
      tail.next = new ListNode(val2);
      list2 = list2.next;
    } else {
      tail.next = new ListNode(val1);
      list1 = list1.next;
    }
    tail = tail.next;
  }

  while (list1) {
    tail.next = new ListNode(list1.val);
    list1 = list1.next;
    tail = tail.next;
  }

  while (list2) {
    tail.next = new ListNode(list2.val);
    list2 = list2.next;
    tail = tail.next;
  }

  return mergedList.next;
};
