const { convertToTitle } = require('./index');

it('convertToTitle', () => {
  expect(convertToTitle(1)).toEqual("A");
  expect(convertToTitle(26)).toEqual("Z");
  expect(convertToTitle(28)).toEqual("AB");
  expect(convertToTitle(701)).toEqual("ZY");
  expect(convertToTitle(704)).toEqual("AAB");
  expect(convertToTitle(703)).toEqual("AAA");
  expect(convertToTitle(52)).toEqual("AZ");
});
