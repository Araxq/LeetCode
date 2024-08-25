/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function (target, position, speed) {
  let res = 0;
  const sortedInds = Object.entries(position)
    .sort((a, b) => b[1] - a[1])
    .map((entry) => entry[0]);

  let currSlowestTimeToFinish = -Infinity;

  sortedInds.forEach((ind) => {
    const timeToFinish = (target - position[ind]) / speed[ind];

    if (timeToFinish > currSlowestTimeToFinish) {
      currSlowestTimeToFinish = timeToFinish;
      res++;
    }
  });

  return res;
};
