const {nextTerm, countAndSay} = require('../38. Count and Say');

it('should generate next term properly', function () {
    expect(nextTerm('1')).toBe('11');
    expect(nextTerm('11')).toBe('21');
    expect(nextTerm('21')).toBe('1211');
    expect(nextTerm('1211')).toBe('111221');
});

it('should generate n-th term properly', function () {
    expect(countAndSay(1)).toBe('1');
    expect(countAndSay(2)).toBe('11');
    expect(countAndSay(3)).toBe('21');
    expect(countAndSay(4)).toBe('1211');
    expect(countAndSay(5)).toBe('111221');
});
