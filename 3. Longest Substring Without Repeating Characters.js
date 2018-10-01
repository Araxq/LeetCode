function isInArray(value, array) {
    return array.indexOf(value) > -1;
}

var lengthOfLongestSubstring = function (s) {
    let substring = [];
    let maxLength = 0;
    for (let i = 0; i < s.length; i++) {
        if (!isInArray(s[i], substring)) {
            substring.push(s[i]);
            if (substring.length > maxLength) maxLength = substring.length;
        } else {
            substring = substring.slice(substring.indexOf(s[i]) + 1);
            substring.push(s[i]);
        }
    }
    return maxLength;
};