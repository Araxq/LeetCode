var twoSum = function (nums, target) {
  let i = 0;
  let j = nums.length - 1;

  let isAnchorI = true;

  while (i < j) {
    const ni = nums[i];
    const nj = nums[j];
    const sum = ni + nj;

    if (sum === target) {
      return [nums.indexOf(ni) + 1, nums.lastIndexOf(nj) + 1];
    }

    if (isAnchorI) {
      sum > target ? j-- : (isAnchorI = !isAnchorI);
    } else {
      sum < target ? i++ : (isAnchorI = !isAnchorI);
    }
  }
};
