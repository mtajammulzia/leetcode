/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  if (!root) return 0;
  const getHeight = (node) => {
    let leftHeight = 1;
    let rightHeight = 1;
    if (node?.left) leftHeight += getHeight(node.left);
    if (node?.right) rightHeight += getHeight(node.right);
    return Math.max(leftHeight, rightHeight);
  };
  return getHeight(root);
};
