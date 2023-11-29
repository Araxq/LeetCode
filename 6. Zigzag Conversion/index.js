/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
const convert = function (s, numRows) {
  let res = '';
  const stepSize = 2 * numRows - 2 || 1;

  for (let i = 0; i < numRows; i++) {
    for (let j = i; j < s.length; j += stepSize) {
      res += s[j];

      if (i && i !== numRows - 1) {
        res += s[j + 2 * (numRows - i - 1)] || '';
      }
    }
  }

  return res;
};

module.exports = { f: convert };
