const { f } = require('./index');

it('f', () => {
  expect(f([3, 2, 2, 3], 3)).toEqual(2);
  expect(f([0, 1, 2, 2, 3, 0, 4, 2], 2)).toEqual(5);
  expect(f([1], 1)).toEqual(0);
  expect(f([4,5], 5)).toEqual(1);
});
