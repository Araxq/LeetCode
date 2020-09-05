// sorted 2Sum
const twoSum = (arr: number[], sum: number, start = 0) => {
  const result: number[][] = [];
  let i = start,
    j = arr.length - 1;

  while (i < j) {
    const left = arr[i];
    const right = arr[j];
    const target = sum - left;
    if (right < target) {
      i++;
      continue;
    }
    if (right === target) {
      result.push([left, right]);
      i++;
      while (arr[j] === right) j--;
      continue;
    }
    j--;
  }
  return result;
};

const threeSum = (nums: number[]): number[][] => {
  let result: number[][] = [];

  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (num > 0) break;
    if (num === nums[i - 1]) continue;
    const twoSums = twoSum(nums, -num, i + 1);
    result = [...result, ...twoSums.map(sum => [num, ...sum])];
  }
  return result;
};

module.exports = { threeSum, twoSum };
