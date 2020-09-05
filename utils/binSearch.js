function binarySearch(arr, target, begin = 0, end = arr.length - 1) {
  let mid = Math.floor((begin + end) / 2);

  while (arr[mid] !== target && begin < end) {
    target < arr[mid] ? (end = mid - 1) : (begin = mid + 1);
    mid = Math.floor((begin + end) / 2);
  }

  return arr[mid] === target ? mid : -1;
}

module.exports = binarySearch;
