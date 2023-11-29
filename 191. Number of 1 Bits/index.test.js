const { f } = require('./index');

it('f', () => {
  expect(f(0b0000000000000000000000000001011)).toEqual(3);
  expect(f(0b0000000000000000000000010000000)).toEqual(1);
  expect(f(0b11111111111111111111111111111101)).toEqual(31);
});
