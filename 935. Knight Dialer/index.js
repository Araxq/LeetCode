const KNIGHT_VALID_NEXT_MOVES = [
  [4, 6],
  [6, 8],
  [7, 9],
  [4, 8],
  [3, 9, 0],
  [],
  [1, 7, 0],
  [2, 6],
  [1, 3],
  [4, 2],
];

const countLastNumbers = (n) => {
  if (n === 1) {
    return Array(10).fill(BigInt(1));
  }

  const prevCount = countLastNumbers(n - 1);

  const newCount = Array(10).fill(BigInt(0));

  prevCount.forEach((count, ind) => {
    KNIGHT_VALID_NEXT_MOVES[ind].forEach((num) => (newCount[num] += count));
  });

  return newCount;
};

const MOD = BigInt(Math.pow(10, 9) + 7);

/**
 * @param {number} n
 * @return {number}
 */
const knightDialer = function (n) {
  const lastNumbersCount = countLastNumbers(n);
  const a = lastNumbersCount.reduce((acc, count) => acc + count, BigInt(0));
  return Number(a % MOD);
};

module.exports = { f: knightDialer };
