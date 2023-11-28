/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function (x) {
  const s = String(x);

  return s === s.split('').reverse().join('');
};

module.exports = { f: isPalindrome };
