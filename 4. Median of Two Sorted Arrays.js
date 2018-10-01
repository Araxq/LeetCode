function findMedian(array) {
    let lowMiddle = Math.floor((array.length - 1) / 2);
    let highMiddle = Math.ceil((array.length - 1) / 2);
    return (array[lowMiddle] + array[highMiddle]) / 2;
}

const findMedianSortedArrays = function (nums1, nums2) {
    let mergedArray = [];
    while (true) {
        if (!nums1.length) {
            mergedArray = mergedArray.concat(nums2);
            break
        }
        if (!nums2.length) {
            mergedArray = mergedArray.concat(nums1);
            break
        }
        if (nums1[0] < nums2[0]) {
            mergedArray.push(nums1.shift())
        } else {
            mergedArray.push(nums2.shift())
        }
    }
    return findMedian(mergedArray);
};