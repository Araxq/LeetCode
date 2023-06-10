/**
 * @param {character[]} arr
 * @param {character} target
 * @return {character}
 */
const nextGreatestLetter = (arr, target) => {
  let begin = 0;
  let end = arr.length - 1;

  let mid = Math.floor((begin + end) / 2);

  while ((arr[mid - 1] > target || arr[mid] <= target) && begin < end) {
    target < arr[mid] ? (end = mid - 1) : (begin = mid + 1);
    mid = Math.floor((begin + end) / 2);
  }

  return arr[mid - 1] <= target && arr[mid] > target ? arr[mid] : arr[0];
};

module.exports = nextGreatestLetter;
