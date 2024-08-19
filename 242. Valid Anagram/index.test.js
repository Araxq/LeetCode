const { f } = require('./index');

it('test', () => {
  expect(f("anagram", "nagaram")).toBe(true);
  expect(f("rat", "car")).toBe(false);
});
