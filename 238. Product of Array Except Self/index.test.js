const { f } = require('./index');

it('test', () => {
  expect(f([1,2,3,4])).toEqual([24,12,8,6]);
  expect(f([-1,1,0,-3,3])).toEqual([0,0,9,0,0]);
});
