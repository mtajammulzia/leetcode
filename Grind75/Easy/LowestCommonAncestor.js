// * Lowest Common Ancestor of a Binary Search Tree.
// Definition for a binary tree node.
// function TreeNode(val) {
//   this.val = val;
//   this.left = this.right = null;
// }
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  let pAncestor = [];
  let qAncestor = [];

  let head = root;
  while (head != null) {
    if (head.left !== null && head.left.val === p.val) {
      pAncestor.unshift(head);
      break;
    }
    if (head.right !== null && head.right.val === p.val) {
      pAncestor.unshift(head);
      break;
    }

    pAncestor.unshift(head);
    if (head.val === p.val) break;
    if (p.val > head.val) {
      head = head.right;
    } else if (p.val < head.val) {
      head = head.left;
    }
  }

  head = root;
  while (head != null) {
    if (head.left !== null && head.left.val === q.val) {
      qAncestor.unshift(head);
      break;
    }
    if (head.right !== null && head.right.val === q.val) {
      qAncestor.unshift(head);
      break;
    }
    qAncestor.unshift(head);
    if (head.val === q.val) break;
    if (q.val > head.val) {
      head = head.right;
    } else if (q.val < head.val) {
      head = head.left;
    }
  }

  pAncestor.unshift(p);
  qAncestor.unshift(q);

  for (const node of pAncestor) {
    if (qAncestor.includes(node)) return node;
  }
};
