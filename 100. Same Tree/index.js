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
var isSameTree = (p, q) => {
  return (
    p?.val === q?.val &&
    (!(p?.left || q?.left) || isSameTree(p.left, q.left)) &&
    (!(p?.right || q?.right) || isSameTree(p.right, q.right))
  );
};

module.exports = { f: isSameTree };
