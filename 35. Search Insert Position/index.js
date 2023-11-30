/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = function (nums, target) {
  let begin = 0;
  let end = nums.length - 1;

  let mid = Math.floor((begin + end) / 2);

  while (nums[mid] !== target && begin < end) {
    target < nums[mid] ? (end = mid - 1) : (begin = mid + 1);
    mid = Math.floor((begin + end) / 2);
  }

  if (nums[mid] === target) return mid;

  return nums[mid] < target ? mid + 1 : Math.max(mid, 0);
};

module.exports = { f: searchInsert };
