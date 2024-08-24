/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  const indStack = [];

  temperatures.forEach((t, i) => {
    while (t > temperatures[indStack.at(-1)]) {
      temperatures[indStack.at(-1)] = i - indStack.at(-1);
      indStack.pop();
    }

    indStack.push(i);
  });

  indStack.forEach((t) => {
    temperatures[t] = 0;
  });
  
  return temperatures;
};

module.exports = { f: dailyTemperatures };
