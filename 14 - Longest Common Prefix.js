const longestCommonPrefix = function (strs) {
    let longestPrefix = '';
    if (!strs.length) return longestPrefix;
    for (let col = 0; ; col++) {
        let char = strs[0][col];
        if (char === undefined) return longestPrefix;
        for (let row = 1; row < strs.length; row++) {
            if (strs[row][col] === undefined) return longestPrefix;
            if (strs[row][col] !== char) return longestPrefix;
        }
        longestPrefix += char;
    }
};
