function binarySearch(val, arr, beg, end) {
    let left = beg;
    let right = end - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (val < arr[mid]) { // go left
            right = mid - 1;
        }
        else if (val > arr[mid]) { // go right
            left = mid + 1;
        }
        else { // found it
            return mid;
        }
    }
    return -1; // not found
}

const threeSum = function (nums) {
    let triplets = [];
    nums.sort((a, b) => a - b);

    let negative_end = 0;
    for (let i = 0; nums[i] < 0; ++i) {
        if (nums[i] < 0) {
            negative_end = i;
        }
    }
    negative_end++;

    let positive_begin = nums.length;
    for (let i = negative_end; i < nums.length; ++i) {
        if (nums[i] > 0) {
            positive_begin = i;
            break
        }
    }
    if (nums[positive_begin - 3] === 0) triplets.push([0, 0, 0]);
    if (positive_begin !== nums.length) {
        let useless_to_find = [];
        let done = [];
        for (let i = 0; i < negative_end; i++) {
            if (done.indexOf(nums[i]) > -1) continue;
            let done_current = [];

            for (let j = i + 1; j < positive_begin; j++) {
                if (done.indexOf(nums[j]) > -1) continue;
                if (done_current.indexOf(nums[j]) > -1) continue;

                const needed_int = -(nums[i] + nums[j]);
                if (useless_to_find.indexOf(needed_int) > -1) continue;

                let binary_result = binarySearch(needed_int, nums, positive_begin, nums.length);
                if (binary_result === -1) useless_to_find.push(needed_int);
                else triplets.push([nums[i], nums[j], nums[binary_result]]);
                done_current.push(nums[j])
            }
            done.push(nums[i]);

        }
    } else return triplets;


    if (negative_end !== 0) {
        let useless_to_find = [];
        let done = [];
        for (let i = positive_begin; i < nums.length - 1; i++) {
            if (done.indexOf(nums[i]) > -1) continue;
            let done_current = [];

            for (let j = i + 1; j < nums.length; j++) {
                if (done.indexOf(nums[j]) > -1) continue;
                if (done_current.indexOf(nums[j]) > -1) continue;

                const needed_int = -(nums[i] + nums[j]);
                if (useless_to_find.indexOf(needed_int) > -1) continue;

                let binary_result = binarySearch(needed_int, nums, 0, negative_end);
                if (binary_result === -1) useless_to_find.push(needed_int);
                else triplets.push([nums[i], nums[j], nums[binary_result]]);
                done_current.push(nums[j])
            }
            done.push(nums[i]);

        }
    }
    return triplets
};