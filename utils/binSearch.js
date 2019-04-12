function binarySearch(arr, target, begin = 0, end = arr.length - 1) {
    let middle = Math.floor((begin + end) / 2);

    while (arr[middle] !== target && begin < end) {
        target < arr[middle] ? end = middle - 1 : begin = middle + 1;
        middle = Math.floor((begin + end) / 2);
    }

    return (arr[middle] === target) ? middle : -1;
}

moodule.exports = binarySearch;