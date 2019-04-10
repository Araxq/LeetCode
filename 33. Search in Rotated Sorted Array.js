/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    if (nums[0] < nums[nums.length - 1]) return binarySearch(nums, target);
    const pivot = binaryPivotSearch(nums);
    return target < nums[0] ? binarySearch(nums, target, pivot + 1) : binarySearch(nums, target, 0, pivot);
};

function binarySearch(arr, target, start = 0, stop = arr.length - 1) {
    let begin = start, end = stop,
        middle = Math.floor((begin + end) / 2);

    while (arr[middle] !== target && begin < end) {
        target < arr[middle] ? end = middle - 1 : begin = middle + 1;
        middle = Math.floor((begin + end) / 2);
    }

    return (arr[middle] === target) ? middle : -1;
}

function binaryPivotSearch(arr) {
    let start = 0, end = arr.length - 1,
        mid = Math.floor((start + end) / 2);

    while (arr[mid] < arr[mid + 1] && start < end) {
        arr[start] > arr[mid] ? end = mid - 1 : start = mid + 1;
        mid = Math.floor((start + end) / 2);
    }

    return mid;
}

module.exports = {binaryPivotSearch, search};