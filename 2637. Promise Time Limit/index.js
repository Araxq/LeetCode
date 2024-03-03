/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit =
  (fn, t) =>
  (...args) =>
    Promise.race([
      fn(...args),
      new Promise((_, rej) => setTimeout(rej, t, 'Time Limit Exceeded')),
    ]);

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */
const limited = timeLimit((t) => new Promise((res) => setTimeout(res, t)), 100);
limited(150).catch(console.log); // "Time Limit Exceeded" at t=100ms
