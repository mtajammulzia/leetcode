// * Balanced Binary Tree
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
 * @return {boolean}
 */
var isBalanced = function (root) {
  let head = root;

  const iterateOverTree = (head) => {
    if (!head) return true;
    let leftHeight = 1;
    let rightHeight = 1;
    if (head.left) {
      leftHeight += getHeight(head.left);
    }
    if (head.right) {
      rightHeight += getHeight(head.right);
    }
    if (
      Math.abs(leftHeight - rightHeight) <= 1 &&
      iterateOverTree(head.left) &&
      iterateOverTree(head.right)
    ) {
      return true;
    }
    return false;
  };

  const getHeight = (node) => {
    let head = node;
    let leftHeight = 1;
    let rightHeight = 1;
    if (head.left) {
      leftHeight += getHeight(head.left);
    }
    if (head.right) {
      rightHeight += getHeight(head.right);
    }
    return Math.max(leftHeight, rightHeight);
  };

  return iterateOverTree(head);
};
