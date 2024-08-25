const { f } = require('./index');

it('test', () => {
  expect(f(12, [10, 8, 0, 5, 3], [2, 4, 1, 1, 3])).toEqual(3);
  expect(f(10, [3], [3])).toEqual(1);
  expect(f(100, [0, 2, 4], [4, 2, 1])).toEqual(1);
});
