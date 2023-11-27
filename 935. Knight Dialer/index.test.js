const { f } = require('./index');

it('f', () => {
  expect(f(1)).toEqual(10);
  expect(f(2)).toEqual(20);
  expect(f(3131)).toEqual(136006598);
});
