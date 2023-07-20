/**
 * Definition for a binary tree node.
 */

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
const getMinimumDifference = (root) => {
  if (!root || (!root.left && !root.right)) {
    return Infinity;
  }

  let closestLeft = root.left;
  let closestRight = root.right;

  while (closestLeft?.right) {
    closestLeft = closestLeft?.right;
  }
  while (closestRight?.left) {
    closestRight = closestRight?.left;
  }

  return Math.min(
    closestLeft ? root.val - closestLeft?.val : Infinity,
    closestRight ? closestRight?.val - root.val : Infinity,
    getMinimumDifference(root.left),
    getMinimumDifference(root.right),
  );
};

module.exports = { TreeNode, getMinimumDifference };
