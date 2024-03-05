/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = (nums) => {
  nums.sort((a, b) => -('' + a + b > '' + b + a));

  return nums[0] ? nums.join('') : "0";
};
