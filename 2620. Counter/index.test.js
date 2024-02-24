const { f } = require('./index');

it('f', () => {
  var counter = f(10);
  expect(counter()).toEqual(10);
  expect(counter()).toEqual(11);
  expect(counter()).toEqual(12);
});
