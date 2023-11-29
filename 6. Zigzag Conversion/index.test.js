const { f } = require('./index');

it('f', () => {
  expect(f('PAYPALISHIRING', 3)).toEqual('PAHNAPLSIIGYIR');
  expect(f('PAYPALISHIRING', 4)).toEqual('PINALSIGYAHRPI');
  expect(f('A', 1)).toEqual('A');
});
