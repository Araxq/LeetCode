/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElement = function (nums, val) {
  let i = 0;
  let j = nums.length - 1;

  while (i < j) {
    if (nums[i] === val) {
      nums[i] = nums[j];
      j--;
    } else i++;
  }

  return nums[0] === val ? 0 : i + (nums[i] === val ? 0 : 1);
};

module.exports = { f: removeElement };
