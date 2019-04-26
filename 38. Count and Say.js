/**
 * @param {number} n
 * @return {string}
 */

let memo_sequence = ['1'];

var countAndSay = function (n) {
    if (memo_sequence[n - 1]) return memo_sequence[n - 1];

    let current_term = '';
    for (let i = 0; i < n; i++) {
        if (memo_sequence[i]) current_term = memo_sequence[i];
        else {
            current_term = nextTerm(current_term);
            memo_sequence[i] = current_term
        }
    }
    return current_term;
};

function nextTerm(numStr) {
    let next_term = [], counter = 1;
    for (let i = 0; i < numStr.length; i++) {
        if (numStr[i] === numStr[i + 1]) counter++;
        else {
            next_term.push(counter, numStr[i]);
            counter = 1;
        }

    }
    return next_term.join('');
}

module.exports = {nextTerm, countAndSay};