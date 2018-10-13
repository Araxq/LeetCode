/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function (nums) {
    let current_num = nums[0];
    let unique_length = 1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === current_num) continue;
        current_num = nums[i];
        [nums[unique_length], nums[i]] = [nums[i], nums[unique_length]];
        unique_length++;
    }
    return unique_length;
};
let nums = [0,0,1,1,1,2,2,3,3,4];
console.log(removeDuplicates(nums));