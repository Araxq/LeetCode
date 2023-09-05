/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// hash version (js object are super slow for this)
var twoSum = function (nums, target) {
  const hashTable = nums.reduce((acc, n, ind) => {
    const isDouble = !!acc[n];

    return {
      ...acc,
      [n]: {
        value: n,
        ind: isDouble ? acc[n].ind : ind,
        ind2: isDouble && ind,
      },
    };
  }, {});

  let res;

  nums.some((n, ind) => {
    const m = hashTable[target - n];

    if (m) {
      if (n === m.value) {
        if (m.ind2) {
          res = [ind, m.ind2];

          return true;
        }

        return false;
      }

      res = [ind, m.ind];

      return true;
    }
  });

  return res;
};

module.exports = { twoSum };
