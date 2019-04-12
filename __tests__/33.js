const {binaryPivotSearch, search} = require('../33. Search in Rotated Sorted Array');

test('example pivot search', () => {
    expect(binaryPivotSearch([4, 5, 6, 7, 0, 1, 2])).toBe(3);
});
test('example search', () => {
    expect(search([4, 5, 6, 7, 0, 1, 2], 0)).toBe(4);
});
test('example search 2', () => {
    expect(search([4, 5, 6, 7, 0, 1, 2], 3)).toBe(-1);
});
test('WA 1', () => {
    expect(search([3, 4, 5, 6, 1, 2], 2)).toBe(5);
});
