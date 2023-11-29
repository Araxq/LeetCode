/**
 * @param {number} n - a positive integer
 * @return {number}
 */
const hammingWeight = function (n) {
  return n
    .toString(2)
    .split('')
    .reduce((acc, b) => {
      return acc + Number(b);
    }, 0);
};

module.exports = { f: hammingWeight };
