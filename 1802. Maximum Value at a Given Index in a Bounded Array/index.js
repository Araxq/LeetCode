/**
 * @param {number} n
 * @param {number} ind
 * @param {number} max
 * @return {number}
 */
const findSmallestSum = (n, ind, max) => {
  let leftSum = 0;
  let rightSum = 0;

  if (max <= ind) {
    const progression = ((1 + max) * max) / 2;

    const ones = ind - max + 1;

    leftSum = progression + ones;
  } else {
    leftSum = (2 * max - ind) * ((ind + 1) / 2);
  }

  const rightSize = n - ind;

  if (max < rightSize) {
    const progression = ((1 + max) * max) / 2;

    const ones = rightSize - max;

    rightSum = progression + ones;
  } else {
    rightSum = (2 * max - rightSize + 1) * (rightSize / 2);
  }

  return leftSum + rightSum - max; // max was counted 2 times
};

/**
 * @param {number} n
 * @param {number} ind
 * @param {number} maxSum
 * @return {number}
 */
const maxValue = (n, ind, maxSum) => {
  let begin = 1;
  let end = maxSum;

  let mid = Math.floor((begin + end) / 2);

  while (
    (findSmallestSum(n, ind, mid) > maxSum ||
      findSmallestSum(n, ind, mid + 1) <= maxSum) &&
    begin < end
  ) {
    maxSum < findSmallestSum(n, ind, mid) ? (end = mid - 1) : (begin = mid + 1);
    mid = Math.floor((begin + end) / 2);
  }

  return mid;
};

module.exports = { findSmallestSum, maxValue };
