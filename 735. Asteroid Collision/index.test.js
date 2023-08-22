const { asteroidCollision } = require('./index');

it('asteroidCollision', () => {
  expect(asteroidCollision([5, 10, -5])).toEqual([5, 10]);
  expect(asteroidCollision([8, -8])).toEqual([]);
  expect(asteroidCollision([10, 2, -5])).toEqual([10]);
});
