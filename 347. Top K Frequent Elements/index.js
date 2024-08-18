/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const m = new Map();

  nums.forEach((num) => {
    m.set(num, (m.get(num) || 0) + 1);
  });

  return Array.from(m)
    .sort(([, count1], [, count2]) => count2 - count1)
    .slice(0, k)
    .map(([x]) => x);
};

module.exports = { f: topKFrequent };
