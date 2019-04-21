const {binaryBeginSearch, binaryEndSearch, searchRange} = require('../34. Find First and Last Position of Element in Sorted Array');

it('search begin properly', () => {
    expect(binaryBeginSearch([5, 7, 7, 8, 8, 10], 8)).toBe(3);
    expect(binaryBeginSearch([5, 7, 7, 8, 8, 10], 6)).toBe(-1);
    expect(binaryBeginSearch([5, 7, 7, 8, 8, 10], 10)).toBe(5);
    expect(binaryBeginSearch([5, 7, 7, 8, 8, 10], 5)).toBe(0);
    expect(binaryBeginSearch([5, 7, 7, 8, 8, 10], 7)).toBe(1);
});

it('search end properly', () => {
    expect(binaryEndSearch([5, 7, 7, 8, 8, 10], 8)).toBe(4);
    expect(binaryEndSearch([5, 7, 7, 8, 8, 10], 6)).toBe(-1);
    expect(binaryEndSearch([5, 7, 7, 8, 8, 10], 10)).toBe(5);
    expect(binaryEndSearch([5, 7, 7, 8, 8, 10], 5)).toBe(0);
    expect(binaryEndSearch([5, 7, 7, 8, 8, 10], 7)).toBe(2);
});

it('search range properly', () => {
    expect(searchRange([5, 7, 7, 8, 8, 10], 8)).toEqual([3, 4]);
    expect(searchRange([5, 7, 7, 8, 8, 10], 6)).toEqual([-1, -1]);
    expect(searchRange([5, 7, 7, 8, 8, 10], 10)).toEqual([5, 5]);
    expect(searchRange([5, 7, 7, 8, 8, 10], 5)).toEqual([0, 0]);
    expect(searchRange([5, 7, 7, 8, 8, 10], 7)).toEqual([1, 2]);
});

