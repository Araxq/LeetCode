/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = (n) => n > 0 && !(n & (n - 1));

module.exports = { f: isPowerOfTwo };
