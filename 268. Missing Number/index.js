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

var missingNumber2 = (nums) => {
  var length = nums.length;

  var expectedSum = (length * (length + 1)) >> 1;

  return expectedSum - nums.reduce((acc, n) => acc + n);
};

module.exports = { f: missingNumber2 };
