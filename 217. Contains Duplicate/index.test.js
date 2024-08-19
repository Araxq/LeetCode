const { f } = require('./index');

it('test', () => {
  expect(f([1,2,3,1])).toBe(true);
  expect(f([1,2,3,4])).toBe(false);
  expect(f([1,1,1,3,3,4,3,2,4,2])).toBe(true);
});
