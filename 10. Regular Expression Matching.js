const isMatch = function (s, p) {
    let sPos = 0;
    for (let i = 0; i < p.length; i++) {
        if (p[i + 1] === '*') continue;
        if (p[i] === '.') {
            sPos++;
            continue
        }
        if (p[i] === '*') {
            const char = p[i - 1];
            if (char === '.')
                return isMatch(s.slice(sPos), p.slice(i + 1));

            while (p[i + 2] === '*' && p[i + 1] === char) i += 2;
            while (s[sPos] === char) sPos++;
            continue
        }
        if (p[i] === s[sPos]) sPos++;
    }
    return sPos === s.length;
};
const s = 'mississippi';
const p ='mis*is*p*.';
console.log(isMatch(s,p));