/**
 * @param {number[]} nums
 * @return {number}
 */
const firstMissingPositive = nums => {
  const positives = {},
    numsLength = nums.length;
  let minPossible = 1;

  for (let i = 0; i < numsLength; i++) {
    const num = nums.pop();
    if (num < 1 || positives[num]) continue;
    if (num === minPossible) minPossible++;
    positives[num] = true;
  }

  while (true) {
    if (!positives[minPossible]) return minPossible;
    minPossible++;
  }
};

module.exports = firstMissingPositive;
