const { f } = require('./index');

it('test', () => {
  expect(f([73, 74, 75, 71, 69, 72, 76, 73])).toEqual([1, 1, 4, 2, 1, 1, 0, 0]);
  expect(f([30, 40, 50, 60])).toEqual([1, 1, 1, 0]);
  expect(f([30, 60, 90])).toEqual([1, 1, 0]);
});
