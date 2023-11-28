const { f } = require('./index');

it('f', () => {
  expect(f(121)).toEqual(true);
  expect(f(-121)).toEqual(false);
  expect(f(10)).toEqual(false);
});
