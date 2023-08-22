/**
 * @param {number} columnNumber
 * @return {string}
 */
const convertToTitle = function (columnNumber) {
  const letters = [];

  while (columnNumber > 26) {
    const quotient = Math.floor(columnNumber / 26);
    const remainder = columnNumber % 26;

    if (quotient) {
      letters.unshift(remainder || 26);
      columnNumber = remainder ? quotient : quotient - 1;
    }
  }

  letters.unshift(columnNumber % 27);

  return letters.reduce(
    (acc, code) => acc + String.fromCharCode(code + 64),
    '',
  );
};

module.exports = { convertToTitle };
