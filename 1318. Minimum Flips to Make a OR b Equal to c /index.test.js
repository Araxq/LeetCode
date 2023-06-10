const minFlips = require('./index');

const case1 = [2, 6, 5];
const case2 = [4, 2, 7];
const case3 = [1, 2, 3];

it('minFlips', () => {
  expect(minFlips(...case1)).toStrictEqual(3);
  expect(minFlips(...case2)).toStrictEqual(1);
  expect(minFlips(...case3)).toStrictEqual(0);
});
