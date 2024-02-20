/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = (nums) => {
  nums.push(undefined);
  for (var i = 0; i < nums.length; ) {
    var currentNum = nums[i];

    if (currentNum !== undefined && currentNum !== i) {
      if (currentNum === nums[currentNum]) {
        nums[i] = undefined;
      } else {
        [nums[i], nums[currentNum]] = [nums[currentNum], nums[i]];
      }
    } else {
      i++;
    }
  }

  return nums.findIndex((n) => n === undefined);
};

module.exports = { f: missingNumber };
