/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  const begMap = new Map();
  const endMap = new Map();

  nums.forEach((n) => {
    const next = n + 1;
    const prev = n - 1;
    const hasNext = begMap.has(next);
    const hasPrev = endMap.has(prev);

    if (begMap.has(n) || endMap.has(n)) return;

    if (hasNext && hasPrev) {
      const end = begMap.get(next);
      const beg = endMap.get(prev);

      begMap.delete(next);
      endMap.delete(prev);

      begMap.set(beg, end);
      endMap.set(end, beg);
    } else if (hasNext) {
      const end = begMap.get(next);
      begMap.delete(next);
      begMap.set(n, end);
      endMap.set(end, n);
    } else if (hasPrev) {
      const beg = endMap.get(prev);
      endMap.delete(prev);
      endMap.set(n, beg);
      begMap.set(beg, n);
    } else {
      begMap.set(n, n);
      endMap.set(n, n);
    }
  });

  let maxL = 0;

  endMap.forEach((beg, end) => {
    maxL = Math.max(maxL, end - beg + 1);
  });

  return maxL;
};

module.exports = { f: longestConsecutive };
