function isInArray(value, array) {
    return array.indexOf(value) > -1;
}

function isPalindrome(s) {
    for (let i = 0; i < (s.length - 1) / 2; i++) {
        if (s[i] !== s[s.length - 1 - i]) return false
    }
    return true;
}


const longestPalindrome = function (s) {
    let candidate = '';
    // let usedChars = [];
    for (let i = 0; i < s.length; i++) {
        let sample;
        let lastIndex = s.length - 1;
        while (true) {
            sample = s.slice(i, s.lastIndexOf(s[i], lastIndex) + 1);
            if (isPalindrome(sample)) break;
            lastIndex = s.lastIndexOf(s[i], lastIndex - 1);
        }
        if (sample.length > candidate.length) candidate = sample;
    }
    return candidate;
};