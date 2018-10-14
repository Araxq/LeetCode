/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const strStr = function (haystack, needle) {
    if (!needle) return 0;
    for (let i = 0; i <= haystack.length - needle.length; i++) {
        for (let j = i; j < i + needle.length; j++) {
            if (haystack[j] !== needle[j - i]) break;
            if (j === i + needle.length - 1) return i;
        }
    }
    return -1;
};
let heystack = 'aaaaa';
let needle = 'bba';
console.log(strStr(heystack, needle));