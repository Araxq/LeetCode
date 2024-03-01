/**
 * @param {string} val
 * @return {Object}
 */
var expect = (a) => ({
  toBe: (b) => {
    if (a !== b) throw 'Not Equal';
    return true;
  },
  notToBe: (b) => {
    if (a === b) throw 'Equal';
    return true;
  },
});

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */
