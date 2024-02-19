const { f } = require('./index');

it('f', () => {
  expect(f(1)).toEqual(true);
  expect(f(16)).toEqual(true);
  expect(f(3)).toEqual(false);
  expect(f(0)).toEqual(false);
});
