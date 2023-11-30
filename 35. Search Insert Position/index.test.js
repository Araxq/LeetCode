const { f } = require('./index');

it('f', () => {
  expect(f([1, 3, 5, 6], 5)).toEqual(2);
  expect(f([1, 3, 5, 6], 2)).toEqual(1);
  expect(f([1, 3, 5, 6], 7)).toEqual(4);
  expect(f([1, 3, 5, 6], 0)).toEqual(0);
  expect(f([1, 3], 0)).toEqual(0);
});
