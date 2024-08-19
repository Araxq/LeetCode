/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const s = new Set();

  return nums.some((n) => s.has(n) || (s.add(n), false));
};

module.exports = { f: containsDuplicate };
