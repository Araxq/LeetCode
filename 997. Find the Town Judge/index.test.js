const { f } = require('./index');

it('f', () => {
  expect(f(2,[])).toEqual(-1);
  expect(f(4,[[1,3],[1,4],[2,3],[2,4],[4,3]])).toEqual(3);
  expect(f(3,[[1,3],[2,3],[3,1], [1,2]])).toEqual(-1);
  expect(f(2,[[1,2]])).toEqual(2);
  expect(f(3,[[1,3],[2,3]])).toEqual(3);
  expect(f(3,[[1,3],[2,3],[3,1]])).toEqual(-1);
  expect(f(3,[[1,2],[2,3]])).toEqual(-1);
});
