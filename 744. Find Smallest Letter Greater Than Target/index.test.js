const nextGreatestLetter = require('./index');

it('nextGreatestLetter', () => {
  expect(nextGreatestLetter(['c', 'f', 'j'], 'a')).toStrictEqual('c');
  expect(nextGreatestLetter(['c', 'f', 'j'], 'c')).toStrictEqual('f');
  expect(nextGreatestLetter(['x', 'x', 'y', 'y'], 'z')).toStrictEqual('x');
});
