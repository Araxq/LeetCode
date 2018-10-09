/**
 * @param {number} n
 * @return {string[]}
 */
const generateParenthesis = function (n) {
    if (n === 1) return ['()'];
    let parenthesis_arr = generateParenthesis(n - 1);
    let length = parenthesis_arr.length;
    for (let i = 0; i < length; i++) {
        parenthesis_arr.push(parenthesis_arr[i] + '()');
        parenthesis_arr.push('()' + parenthesis_arr[i]);
        parenthesis_arr[i] = '(' + parenthesis_arr[i] + ')';
    }
    parenthesis_arr.pop();
    return parenthesis_arr
};

n = 3;
console.log(generateParenthesis(n));