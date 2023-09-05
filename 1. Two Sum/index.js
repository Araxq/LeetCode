/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// my algo
var twoSum = function (nums, target) {
  const origNums = [...nums];
  nums.sort((a, b) => a - b);

  let i = 0;
  let j = nums.length - 1;

  let isAnchorI = true;

  while (i < j) {
    const ni = nums[i];
    const nj = nums[j];
    const sum = ni + nj;

    if (sum === target) {
      return [
        origNums.indexOf(ni),
        origNums.lastIndexOf(nj),
      ];
    }

    if (isAnchorI) {
      sum > target ? j-- : (isAnchorI = !isAnchorI);
    } else {
      sum < target ? i++ : (isAnchorI = !isAnchorI);
    }
  }
};

module.exports = { twoSum };
