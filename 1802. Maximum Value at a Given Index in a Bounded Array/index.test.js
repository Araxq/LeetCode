const { maxValue, findSmallestSum } = require('./index');

it('findSmallestSum', () => {
  expect(findSmallestSum(4, 2, 2)).toStrictEqual(5); // [1, 1, 2, 1]
  expect(findSmallestSum(6, 1, 3)).toStrictEqual(10); // [2, 3, 2, 1, 1, 1]
  expect(findSmallestSum(8, 7, 4)).toStrictEqual(14); // [1, 1, 1, 1, 1, 2, 3, 4]
});

it('maxValue', () => {
  expect(maxValue(4, 2, 6)).toStrictEqual(2); // [1, 2, 2, 1]
  expect(maxValue(6, 1, 10)).toStrictEqual(3); // [2, 3, 2, 1, 1, 1]
  expect(maxValue(8, 7, 14)).toStrictEqual(4); // [1, 1, 1, 1, 1, 2, 3, 4]
});
