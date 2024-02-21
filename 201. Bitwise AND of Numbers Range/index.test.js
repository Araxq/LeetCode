const { f } = require('./index');

it('f', () => {
  expect(f(5, 7)).toEqual(4);
  expect(f(0, 0)).toEqual(0);
  expect(f(0, 2147483647)).toEqual(0);
  expect(f(3, 6)).toEqual(0);
  expect(f(1, 1)).toEqual(1);
});
