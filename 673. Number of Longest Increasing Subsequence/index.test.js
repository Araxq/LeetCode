const { findNumberOfLIS } = require('./index');

it('findNumberOfLIS', () => {
  expect(findNumberOfLIS([1, 3, 5, 4, 7])).toEqual(2);
  expect(findNumberOfLIS([2, 2, 2, 2, 2])).toEqual(5);
  expect(findNumberOfLIS([4, 3, 2, 1])).toEqual(4);
  expect(findNumberOfLIS([1,2,4,3,5,4,7,2])).toEqual(3);
  expect(findNumberOfLIS([4,6,7,7])).toEqual(2);
  expect(findNumberOfLIS([1,1,1,2,2,2,3,3,3])).toEqual(27);
});
