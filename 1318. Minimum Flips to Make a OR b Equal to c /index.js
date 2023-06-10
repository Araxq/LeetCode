/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
const minFlips = (a, b, c) => {
  const binA = a.toString(2);
  const binB = b.toString(2);
  const binC = c.toString(2);

  const maxLen = Math.max(binA.length, binB.length, binC.length);

  let flipCount = 0;

  for (let i = 1; i <= maxLen; i++) {
    const currentBit = +binC[binC.length - i] || 0;

    const bitA = +binA[binA.length - i] || 0;
    const bitB = +binB[binB.length - i] || 0;

    if ((bitA | bitB) !== currentBit) {
      currentBit ? flipCount++ : (flipCount += bitA + bitB);
    }
  }

  return flipCount;
};

module.exports = minFlips;
