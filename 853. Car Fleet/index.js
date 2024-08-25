/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function (target, position, speed) {
  let res = 0;
  const finishTimes = new Array(target).fill(-1);

  position.forEach((pos, i) => {
    finishTimes[pos] = (target - pos) / speed[i];
  });

  let currentSlowestFinishTime = -1;

  for (let i = finishTimes.length - 1; i >= 0; i--) {
    let t = finishTimes[i];

    if (t > currentSlowestFinishTime) {
      currentSlowestFinishTime = t;
      res++;
    }
  }

  return res;
};

module.exports = { f: carFleet };
