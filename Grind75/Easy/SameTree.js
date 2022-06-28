// Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  if (!p && !q) return true;
  if (p?.val !== q?.val) return false;
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

const p = new TreeNode(10, new TreeNode(5), new TreeNode(15));
const q = new TreeNode(10, new TreeNode(5, null, new TreeNode(15)), null);

console.log(isSameTree(p, q));
