/**
 * @param {number[]} nums
 * @return {number}
 */
const findNumberOfLIS = (nums) => {
  const increasingSubs = [];

  nums.forEach((val) => {
    let isAdded = false;

    increasingSubs.forEach((sub) => {
      const lastVal = sub[sub.length - 1];

      if (val > lastVal) {
        sub.push(val);
        isAdded = true;
      } else if (val < lastVal) {
        const insertInd = sub.findIndex((v) => v > val);

        if (insertInd && sub[insertInd - 1] !== val) {
          increasingSubs.push(sub.slice(0, insertInd).concat([val]));
          isAdded = true;
        }
      } else if (sub.length > 1) {
        increasingSubs.push([...sub]);
        isAdded = true;
      }
    });

    if (!isAdded) {
      increasingSubs.push([val]);
    }
  });

  const lengths = increasingSubs.map((sub) => sub.length);

  const maxLength = Math.max(...lengths);

  return lengths.reduce((acc, l) => (l === maxLength ? acc + 1 : acc), 0);
};

module.exports = { findNumberOfLIS };
