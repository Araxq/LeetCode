/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = (n, trust) => {
  if (trust.length < n -1) return -1;
  
  var trustMap = trust.reduce(
    (acc, [person, trusted]) => ({
      ...acc,
      [person]: acc[person] ? [...acc[person], trusted] : [trusted],
    }),
    {},
  );

  var possibleJudge =
    (((n + 1) * n) >> 1) -
    Object.getOwnPropertyNames(trustMap).reduce((acc, i) => acc + +i, 0);

  if (trustMap[possibleJudge]) return -1;

  return Array.from({ ...trustMap, length: n + 1 })
    .every((trustArr) => !trustArr || trustArr.includes(possibleJudge))
    ? possibleJudge
    : -1;
};

module.exports = { f: findJudge };
