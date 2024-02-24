/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = (n) => () => n++;

module.exports = { f: createCounter };
