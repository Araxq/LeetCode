const firstMissingPositive = require('./index');

const case1 = [1, 2, 0];
const case2 = [3, 4, -1, 1];
const case3 = [7, 8, 9, 11, 12];
const case4 = [1, 1];

it('firstMissingPositive', function() {
  expect(firstMissingPositive(case1)).toBe(3);
  expect(firstMissingPositive(case2)).toBe(2);
  expect(firstMissingPositive(case3)).toBe(1);
  expect(firstMissingPositive(case4)).toBe(2);
});
