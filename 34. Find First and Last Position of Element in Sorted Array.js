/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    return [binaryBeginSearch(nums, target), binaryEndSearch(nums, target)];
};

function binaryBeginSearch(arr, target, begin = 0, end = arr.length - 1) {
    if (arr[0] === target) return 0;
    let mid = Math.floor((begin + end) / 2);

    while (begin < end) {
        if (arr[mid] !== target && arr[mid + 1] === target) break;
        target > arr[mid] ? begin = mid + 1 : end = mid - 1;
        mid = Math.floor((begin + end) / 2);
    }

    return (arr[mid] !== target && arr[mid + 1] === target) ? mid + 1 : -1;
}

function binaryEndSearch(arr, target, begin = 0, end = arr.length - 1) {
    if (arr[end] === target) return end;
    let mid = Math.floor((begin + end) / 2);

    while (begin < end) {
        if (arr[mid] !== target && arr[mid - 1] === target) break;
        target >= arr[mid] ? begin = mid + 1 : end = mid - 1;
        mid = Math.floor((begin + end) / 2);
    }

    return (arr[mid] !== target && arr[mid - 1] === target) ? mid - 1 : -1;
}

module.exports = {binaryBeginSearch, binaryEndSearch, searchRange};