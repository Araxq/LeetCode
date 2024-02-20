const { f } = require('./index');

it('f', () => {
  expect(f([3, 0, 1])).toEqual(2);
  expect(f([0, 1])).toEqual(2);
  expect(f([9, 6, 4, 2, 3, 5, 7, 0, 1])).toEqual(8);
});
