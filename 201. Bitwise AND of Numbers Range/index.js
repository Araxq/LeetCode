/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var rangeBitwiseAnd = (left, right) => {
  var diff = right - left;

  var l = left.toString(2).split('').reverse();
  var r = right.toString(2).split('').reverse();

  return parseInt(
    r
      .map((rBit, ind) => {
        var lBit = l[ind];

        return rBit === '0' ||
          lBit === '0' ||
          !lBit ||
          (diff > (2 << (ind - 1)))
          ? '0'
          : '1';
      })
      .reverse()
      .join(''),
    2,
  );
};

module.exports = { f: rangeBitwiseAnd };
