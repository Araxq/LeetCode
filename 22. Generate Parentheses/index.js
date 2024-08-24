/**
 * @param {number} n
 * @return {string[]}
 */
const generateParenthesis = function (n) {
  const res = [];

  const nextStep = (str, openCount, closeCount) => {
    if (str.length === n * 2) return res.push(str);

    const isNextOpenValid = openCount < n;
    const isNextCloseValid = closeCount < n && openCount > closeCount;

    if (isNextOpenValid) nextStep(str + '(', openCount + 1, closeCount);
    if (isNextCloseValid) nextStep(str + ')', openCount, closeCount + 1);
  };

  nextStep('(', 1, 0);

  return res;
};


module.exports = { f: generateParenthesis };
