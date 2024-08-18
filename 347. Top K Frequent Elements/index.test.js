const { f } = require('./index');

it('test', () => {
  expect(f([1, 1, 1, 2, 2, 3], 2)).toEqual([1, 2]);
  expect(f([1], 1)).toEqual([1]);
});
