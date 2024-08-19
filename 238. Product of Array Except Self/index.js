/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const n = nums.length;
  const prefix = Array(n).fill(1);
  const suffix = Array(n).fill(1);

  for (let i = 1; i < n; i++) {
    prefix[i] = nums[i - 1] * prefix[i - 1];
  }

  for (let i = n - 2; i >= 0; i--) {
    suffix[i] = nums[i + 1] * suffix[i + 1];
  }

  for (let i = 0; i < n; i++) {
    prefix[i] = prefix[i] * suffix[i];
  }

  return prefix;
};

module.exports = { f: productExceptSelf };
