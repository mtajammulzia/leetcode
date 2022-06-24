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
var diameterOfBinaryTree = function (root) {
  let head = root;
  let maxDiameter = 0;

  const iterateOverTree = (head) => {
    if (!head) return;
    let leftHeight = 0;
    let rightHeight = 0;
    if (head.left) leftHeight += getHeight(head.left);
    if (head.right) rightHeight += getHeight(head.right);
    if (maxDiameter < leftHeight + rightHeight) maxDiameter = leftHeight + rightHeight;
    iterateOverTree(head.left);
    iterateOverTree(head.right);
  };

  const getHeight = (node) => {
    let leftHeight = 1;
    let rightHeight = 1;
    if (node.left) leftHeight += getHeight(node.left);
    if (node.right) rightHeight += getHeight(node.right);
    return Math.max(leftHeight, rightHeight);
  };

  iterateOverTree(head);
  return maxDiameter;
};
