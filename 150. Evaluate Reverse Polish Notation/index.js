/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  const OP = ['+', '-', '*', '/'];
  const F = [
    (a, b) => Number(a) + Number(b),
    (a, b) => a - b,
    (a, b) => a * b,
    (a, b) => Math.trunc(a / b),
  ];

  const stack = [];

  tokens.forEach((token) => {
    if (OP.includes(token)) {
      const val2 = stack.pop();
      const val1 = stack.pop();

      stack.push(F[OP.indexOf(token)](val1, val2));
    } else {
      stack.push(token);
    }
  });

  return stack[0];
};

module.exports = { f: evalRPN };
